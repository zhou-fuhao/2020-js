let userAddModule = (function () {
	let $username = $('.username'),
		$spanusername = $('.spanusername'),
		$man = $('#man'),
		$woman = $('#woman'),
		$useremail = $('.useremail'),
		$spanuseremail = $('.spanuseremail'),
		$userphone = $('.userphone'),
		$spanuserphone = $('.spanuserphone'),
		$userdepartment = $('.userdepartment'),
		$userjob = $('.userjob'),
		$userdesc = $('.userdesc'),
		$submit = $('.submit'),
		// 用户id
		userId = null,
		// 是新增 还是编辑 标识，默认是修改
		isUpdate = true;

	// 加载部门信息和职务信息
	let selectBind = () => {
		let depList = axios.get('/department/list'),
			jobList = axios.get('/job/list');

		return axios.all([depList, jobList]).then((res) => {
			let [depListRes, jobListRes] = res;
			// 绑定部门信息
			if (depListRes.code == 0) {
				let {
					data
				} = depListRes,
				depStr = ``;
				$.each(data, (index, item) => {
					depStr += `<option value="${item.id}">${item.name}</option>`;
				});
				$('.userdepartment').html(depStr);
			}
			// 绑定职务信息
			if (jobListRes.code == 0) {
				let {
					data
				} = jobListRes,
				jobStr = ``;
				$.each(data, (index, item) => {
					jobStr += `<option value="${item.id}">${item.name}</option>`;
				});
				$('.userjob').html(jobStr);
			}
		});
	}

	// 数据回显
	let queryBaseInfo = () => {
		axios.get('/user/info', {
			params: {
				userId
			}
		}).then((res) => {
			let {
				code,
				data: {
					name,
					email,
					phone,
					sex,
					desc,
					department,
					departmentId,
					job,
					jobId
				},
			} = res;
			if (code == 0) {
				$username.val(name);
				if (sex == 0) {
					$woman.prop('checked', true);
				}
				$useremail.val(email);
				$userphone.val(phone);
				$userdesc.val(desc);
				$userdepartment.val(departmentId);
				$userjob.val(jobId);
			}
		});
	}

	// 用户名的正则校验
	let checkUserName = () => {
		let value = $username.val().trim();
		if (!value) {
			$spanusername.html('用户名不能为空！');
			return false;
		}
		$spanusername.html('');
		return true;
	}

	// 邮箱的正则校验
	let checkEmail = () => {
		let value = $useremail.val().trim(),
			reg = /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;
		if (!value) {
			$spanuseremail.html('邮箱不能为空！');
			return false;
		}
		if (value.length > 17) {
			$spanuseremail.html('邮箱最长是17位！');
			return false;
		}
		if (!reg.test(value)) {
			$spanuseremail.html('邮箱的格式不正确！');
			return false;
		}
		$spanuseremail.html('');
		return true;
	}

	// 手机号的正则校验
	let checkPhone = () => {
		let value = $userphone.val().trim(),
			reg = /^1[3|4|5|7|8][0-9]{9}$/;
		if (!value) {
			$spanuserphone.html('电话不能为空！');
			return false;
		}
		if (value.length != 11) {
			$spanuserphone.html('电话长度是11位！');
			return false;
		}
		if (!reg.test(value)) {
			$spanuserphone.html('电话的格式不正确！');
			return false;
		}
		$spanuserphone.html('');
		return true;
	}

	// 给提交按钮绑定事件
	let bindSubmit = () => {
		$submit.on('click', function () {
			checkUserName();
			checkEmail();
			checkPhone();
			if (!checkUserName() || !checkEmail() || !checkPhone()) {
				alert('提交失败，请按规则填写信息~');
				return;
			}

			let url = isUpdate ? '/user/update' : '/user/add',
				obj = {
					name: $username.val().trim(),
					sex: $man.prop('checked') ? 1 : 0,
					email: $useremail.val().trim(),
					phone: $userphone.val().trim(),
					departmentId: $userdepartment.val(),
					job: $userjob.val(),
					desc: $userdesc.val().trim()
				};
			if (isUpdate) {
				obj.userId = userId;
			}
			axios.post(url, obj).then((res) => {
				let {
					code
				} = res;
				if (code == 0) {
					alert('已成功提交~，即将跳转到列表', {
						handled() {
							location.href = 'userlist.html';
						}
					});
				} else {
					return Promise.reject();
				}
			}).catch(() => {
				alert('提交失败，请重试！');
			});
		});
	}

	return {
		init() {
			// 获取url路径，判断是新增还是编辑
			userId = window.location.href.queryURLParams().userId || '';
			// 检测url路径是否存在userId，如果有则说明是编辑
			if (!userId) {
				isUpdate = false;
			}
			selectBind().then(() => {
				if (isUpdate) {
					queryBaseInfo();
				}
			});
			$username.on('blur', checkUserName);
			$useremail.on('blur', checkEmail);
			$userphone.on('blur', checkPhone);
			bindSubmit();
		}
	}
}());
userAddModule.init();