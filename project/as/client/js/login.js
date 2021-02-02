(function () {
	let $account = $('.userName'),
		$password = $('.userPass'),
		$submit = $('.submit');

	// 给当前的登录按钮绑定点击事件
	$submit.on('click', async function () {
		// 1.获取用户名和密码(把获取的内容去掉空格)
		let account = $account.val().trim(),
			password = $password.val().trim();

		// 2.对用户名和密码进行格式的校验
		// 只对非空做校验
		if (!account || !password) {
			alert('当前的用户名或密码不能为空', {
				// 当前回调函数会在alert()框消失之后或用户点击X号时执行
				handled: function () {
					// console.log(11);
				}
			});
			// 阻止代码往下运行
			return;
		}

		// 3.对密码进行MD5加密
		password = md5(password);

		// 4.发送登录的请求
		// axios.post('/user/login', {
		// 	account,
		// 	password
		// }).then(res => {
		// 	let {
		// 		code,
		// 		codeText,
		// 		power
		// 	} = res;
		// 	if (code == 0) {
		// 		alert('恭喜您登录成功！', {
		// 			handled: function () {
		// 				// 当登录成功以后，把power储存到localStorage中
		// 				localStorage.setItem('power', encodeURIComponent(power));
		// 				// 再跳转到index.html主页面
		// 				location.href = './index.html';
		// 			}
		// 		});

		// 	} else {
		// 		alert('您当前的用户名或密码不正确！');
		// 		$account.val('');
		// 		$password.val('');
		// 	}

		// }).catch(res => {
		// 	alert('您当前请求的路径不正确！');
		// });

		// 配合async 使用
		let res = await axios.post('/user/login', {
			account,
			password
		});

		let {
			code,
			codeText,
			power
		} = res;
		if (code == 0) {
			alert('恭喜您，登录成功！', {
				handled: function () {
					// 当登录成功以后，把power储存到localStorage中
					localStorage.setItem('power', encodeURIComponent(power));
					// 再跳转到index.html主页面
					location.href = './index.html';
				}
			});

		} else {
			alert('您当前的用户名或密码不正确！');
			$account.val('');
			$password.val('');
		}

	});
}())