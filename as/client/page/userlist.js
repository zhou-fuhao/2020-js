let userListModule = (function () {

	// 1.获取一些需要操作的元素
	let $deleteAll = $('.deleteAll'), // 获取批量删除按钮
		$thead = $('thead'),
		$headTh = $thead.find('th'), //获取表头里的所有th
		$tbody = $('tbody'); //获取存放列表内容的元素

	// 先按照权限去显示页面的数据
	let power = decodeURIComponent(localStorage.getItem('power'));
	// ** 校验权限 **
	let checkPower = () => {
		// 说明当前用户没有操作的权限，把批量删除、全选、操作全部删了
		if (!power.includes('userhandle')) {
			$deleteAll.remove(); // 批量删除按钮
			$headTh.first().remove(); // 删除表头的第一个
			$headTh.last().remove(); // 删除表头的最后一个
		}
	}

	// 请求下拉框的部门数据，渲染到select框中
	let bindSelect = () => {
		return axios.get('/department/list').then((res) => {
			let {
				code,
				data
			} = res;
			if (code == 0) {
				// str默认包含一个全部的option
				let str = `<option value="0">全部</option>`;
				$.each(data, (index, item) => {
					let {
						id,
						name
					} = item;
					str += `<option value="${id}">${name}</option>`;
				});
				// 把处理好的option渲染到select中
				$('.selectBox').html(str);
			}
		});
	}

	// 发送用户列表请求
	let render = () => {
		let departmentId = $('.selectBox').val(),
			search = $('.searchInp').val();

		axios.get('/user/list', {
			params: {
				departmentId,
				search
			}
		}).then((res) => {
			let {
				code,
				data,
			} = res,
			str = ``;
			if (code == 0) {
				$.each(data, (index, item) => {
					let {
						id,
						name,
						sex,
						job,
						department,
						email,
						phone,
						desc
					} = item;
					str += `<tr data-id='${id}' data-name='${name}'>
								${power.includes('userhandle') ? `<td class="w3"><input type="checkbox"></td>`: ''}
								<td class="w10">${name}</td>
								<td class="w5">${sex==0 ? '女':'男'}</td>
								<td class="w10">${department}</td>
								<td class="w10">${job}</td>
								<td class="w15">${email}</td>
								<td class="w15">${phone}</td>
								<td class="w20">${desc}</td>
								${power.includes('userhandle') ? `
									<td class="w12">
										<a href='useradd.html?userId=${id}'>编辑</a>
										<a href="javascript:;">删除</a>
										${power.includes('resetpassword') ? `<a href="javascript:;">重置密码</a>`: ''}
									</td>
								`: ''}
							</tr>`;
				});
				$('tbody').html(str);
			} else {
				// 如果当前的code不是0，说明后台没有要检索的数据，tbody置为空
				$('tbody').html('');
			}
		}).then(() => {
			checkBox();
		});
	}

	// 点击下拉框或输入框进行数据查询
	let searchInfo = () => {
		$('.selectBox').on('change', function () {
			// let value = $(this).val();
			render();
		});
		$('.searchInp').on('keydown', function (e) {
			let key = e.keyCode; // 获取当前用户按下的键码
			if (key == 13) {
				render();
			}
		});
	}

	// 进行每一个员工的删除和重置密码的操作
	let bindHandle = () => {
		$('tbody').on('click', function (e) {
			let target = e.target,
				tagName = target.tagName.trim(), // 当权元素大写的名字
				tagVal = target.innerText,
				// 获取当前点击的用户id和用户名称
				userId = $(target).parent().parent().attr('data-id'),
				userName = $(target).parent().parent().attr('data-name');

			// 重置逻辑
			if (tagName === 'A' && tagVal === '重置密码') {
				alert(`您确定要把${userName}的密码重置吗？`, {
					title: '您当前的操作很重要',
					confirm: true,
					handled: (msg) => {
						if (msg === 'CANCEL') return;
						axios.post('/user/resetpassword', {
							userId
						}).then((res) => {
							let {
								code
							} = res;
							if (code == 0) {
								alert('重置密码成功');
							} else {
								alert('重置密码失败');
							}
						});
					}
				});
			}

			// 删除逻辑
			if (tagName === 'A' && tagVal === '删除') {
				alert(`您确定要把${userName}删除吗？`, {
					title: '您当前的操作很重要',
					confirm: true,
					handled: (msg) => {
						if (msg != 'CONFIRM') return;
						axios.get('/user/delete', {
							params: {
								userId
							}
						}).then((res) => {
							let {
								code
							} = res;
							if (code == 0) {
								alert('删除成功', {
									handled() {
										render();
									}
								});
							} else {
								alert('删除失败');
							}
						});
					}
				});
			}
		});
	}

	// 全选全不选
	let checkBox = () => {
		// 获取当前全选按钮
		let allCheck = $('thead').find('input'),
			everyCheck = $('tbody').find('input');

		allCheck.click(function () {
			let flag = $(this).prop('checked');
			// 把当前的全选框的状态赋值给每一个tbody中的小框
			everyCheck.prop('checked', flag);
		});

		everyCheck.click(function () {
			// 当前flag代表全选框的状态
			let flag = true;
			// 循环everyCheck，看看每一个小框的状态，如果有一个是false，那就把全选框改为false，否则，则为true
			everyCheck.each((index, item) => {
				let checked = $(item).prop('checked');
				if (!checked) {
					flag = false;
					// 当前执行的回调函数如果return false就会结束当前的each循环
					return false;
				}
			});
			allCheck.prop('checked', flag);
		});
	}

	// 批量删除
	let bindDeleteAll = () => {

		function deleteX(index, $checks) {
			// 假设$checks的个数是3个
			if (index >= $checks.length) {
				alert('当前删除完成', {
					handled() {
						render();
					}
				});
				return;
			}
			let $curCheck = $checks.eq(index),
				userId = $curCheck.parent().parent().attr('data-id');

			axios.get('/user/delete', {
				params: {
					userId
				}
			}).then((res) => {
				let {
					code
				} = res;
				if (code == 0) {
					deleteX(index + 1, $checks);
				}
			});
		}

		$('.deleteAll').on('click', function () {
			let isChecked = $('tbody').find('input').filter((index, item) => {
				return $(item).prop('checked');
			});
			if (isChecked.length <= 0) {
				alert('请先选中您要删除的数据');
				return;
			}
			alert(`您确定要删除当前的  ${isChecked.length}  数据吗？`, {
				confirm: true,
				handled(msg) {
					if (msg != 'CONFIRM') return;
					// 当前deleteX函数的作用就是不断的发送删除接口
					deleteX(0, isChecked);
				}
			});
		});
	}


	return {
		init() {
			checkPower();
			bindSelect().then(() => {
				render();
			});
			searchInfo();
			bindHandle();
			bindDeleteAll();
		}
	}
}());

userListModule.init();