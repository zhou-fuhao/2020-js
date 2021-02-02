let customerListModule = (function () {
	let $tbody = $('tbody'), //渲染客户的列表
		$selectBox = $('.selectBox'), //客户类型
		$searchInp = $('.searchInp'),
		$pageBox = $('.pageBox');

	let lx = '',
		limit = 10, //以后发送数据请求的时候，每一页请求的条数
		page = 1; //当前请求的页码

	let render = () => {
		let type = $selectBox.val(),
			search = $searchInp.val().trim();

		axios.get('/customer/list', {
			params: {
				type,
				search,
				page,
				limit,
				lx
			}
		}).then((res) => {
			let {
				code,
				total,
				totalPage,
				data
			} = res;
			if (code == 0) {
				$pageBox.css('display', 'block');
				let str = ``;
				$.each(data, (index, item) => {
					let {
						id,
						name,
						sex,
						email,
						phone,
						weixin,
						QQ,
						type,
						userName,
						address
					} = item;
					str += `<tr data-id="${id}" data-name="${name}">
								<td class="w8">${name}</td>
								<td class="w5">${parseInt(sex)==1?'女':'男'}</td>
								<td class="w10">${email}</td>
								<td class="w10">${phone}</td>
								<td class="w10">${weixin}</td>
								<td class="w10">${QQ}</td>
								<td class="w5">${type}</td>
								<td class="w8">${userName}</td>
								<td class="w20">${address}</td>
								<td class="w14">
									<a href="customeradd.html?customerId=${id}">编辑</a>
									<a href="javascript:;">删除</a>
									<a href="visit.html?customerId=${id}">回访记录</a>
								</td>
							</tr>`;
				});
				$tbody.html(str);
				// 分页
				let arr = [];
				for (let j = 0; j < totalPage; j++) {
					arr.push(j + 1);
				}
				let pageStr = `${page>1 ? '<a href="javascript:;">上一页</a>':''}
									<ul class="pageNum">
										${arr.map((item,index)=>{
											return `<li class='${item == page ? 'active':''}'>${item}</li>`
										}).join('')}
									</ul>
								${page == totalPage ? '':'<a href="javascript:;">下一页</a>'}`;
				$pageBox.html(pageStr);
			} else {
				$tbody.html('');
				$pageBox.css('display', 'none');
			}
		});
	}

	// 数据查询
	let bindSelect = () => {
		$selectBox.on('change', function () {
			page = 1;
			render();
		});
		$searchInp.on('keydown', function (e) {
			if (e.keyCode == 13) {
				page = 1;
				render();
			}
		});
	}

	// 分页
	let pageSelect = () => {
		$pageBox.click(function (e) {
			let target = e.target,
				tagName = target.tagName,
				tagVal = target.innerHTML;

			if (tagName == 'A') {
				if (tagVal == '上一页') {
					page--;
					render();
				}
				if (tagVal == '下一页') {
					page++;
					render();
				}
			}
			if (tagName == 'LI') {
				let curPage = parseInt(tagVal);
				page = curPage;
				render();
			}
		});
	}

	// 每一个客户的删除操作
	let bindHandle = () => {
		$tbody.on('click', function (e) {
			let target = e.target,
				tagName = target.tagName.trim(),
				tagVal = target.innerHTML,
				customerId = $(target).parent().parent().attr('data-id'),
				customerName = $(target).parent().parent().attr('data-name');

			if (tagName == 'A' && tagVal == '删除') {
				alert(`您确定要删除 ${customerName} 吗？`, {
					title: '此删除操作不可逆转！！！',
					confirm: true,
					handled: (msg) => {
						if (msg != 'CONFIRM') return;
						axios.get('/customer/delete', {
							params: {
								customerId
							}
						}).then((res) => {
							let {
								code
							} = res;
							if (code == 0) {
								alert('删除成功！', {
									handled() {
										render();
									}
								});
							} else {
								alert('删除失败，请重试！');
							}
						});
					}
				});
			}
		});
	}

	return {
		init() {
			lx = location.href.queryURLParams().lx || 'my';
			render();
			bindSelect();
			pageSelect();
			bindHandle();
		}
	}
}());
customerListModule.init();