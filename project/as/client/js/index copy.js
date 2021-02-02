(function () {
	// 1.进到index.html页面之后，做的第一件事就是校验当前的用户是否是非法进入
	axios.get('/user/login').then((res) => {
		let {
			code
		} = res;
		if (code == 0) {
			// 不需要处理
			// 说明当前的请求已经成功了，并且当前用户是正常进入

			// 当前return的这个promise实例会影响下一个then的回调函数的执行
			return axios.get('/user/info');
		} else {
			// 如果当前的code不是0，说明用户是非法进入的主页，需要用户重新登录
			alert('您当前是非法进入，请重新登录！', {
				handled: function () {
					location.href = 'login.html';
				}
			});
		}
	}).then((res) => {
		let name = res.data.name;
		// 把当前登录者的名字渲染到对应的元素里
		$('.baseBox').find('span').html(`您好：${name}`);
		$('.navBox a:first').addClass('active').siblings().removeClass('active');
		$('.menuBox div:last').css('display','none').siblings().css('display','block');
	});


}());

(function () {
	let $headerBox = $('.headerBox'),
		$footerBox = $('.footerBox'),
		$container = $('.container');
	// jquery使用的时候元素可以不提前获取

	let computed = () => {
		// 动态计算当前container元素的高度(等于总屏幕的高度-头部的高度-底部的高度)
		// 获取屏幕的高度
		let winH = $(window).height(),
			headerH = $headerBox.outerHeight(),
			footerH = $footerBox.outerHeight();

		$container.css('height', winH - headerH - footerH);

	}
	computed();

	// 当前屏幕的尺寸一旦发生变化，resize事件就会被触发
	$(window).on('resize', computed);


	// 获取power
	let power = decodeURIComponent(localStorage.getItem('power')) || '';
	// 动态处理左侧的菜单栏，按照权限进行不同的显示
	let arr = [
		{
			title: '员工管理',
			icon: 'icon-yuangong',
			children: [
				{
					subTitle: '员工列表',
					href: 'page/userlist.html',
					flag: ''
				},
				{
					subTitle: '新增员工',
					href: 'page/useradd.html',
					flag: 'userhandle'
				}
			]
		},
		{
			title: '部门管理',
			icon: 'icon-guanliyuan',
			children: [
				{
					subTitle: '部门列表',
					href: 'page/departmentlist.html',
					flag: ''
				},
				{
					subTitle: '新增部门',
					href: 'page/departmentadd.html',
					flag: 'departhandle'
				}
			]
		},
		{
			title: '职务列表',
			icon: 'icon-zhiwuguanli',
			children: [
				{
					subTitle: '职务列表',
					href: 'page/joblist.html',
					flag: ''
				},
				{
					subTitle: '新增职务',
					href: 'page/jobadd.html',
					flag: 'jobhandle'
				}
			]
		},
		{
			title: '客户管理',
			icon: 'icon-kehuguanli',
			children: [
				{
					subTitle: '我的客户',
					href: 'page/customerlist.html?lx=my',
					flag: ''
				},
				{
					subTitle: '全部客户',
					href: 'page/customerlist.html?lx=all',
					flag: 'allcustomer'
				},
				{
					subTitle: '新增客户',
					href: 'page/customeradd.html',
					flag: ''
				}
			]
		}
	];

	let str = ``;
	$.each(arr, (index,item) => {
		let {
			title,
			icon,
			children,
		} = item;
		str += `<div class="itemBox">
					<h3>
						<i class="iconfont ${icon}"></i>
						${title}
					</h3>
					<nav class="item">
						${children.map(item=>{
							let {subTitle, href, flag, }=item;
							return power.includes(flag) ?  `<a href="${href}" target="_iframe">${subTitle}</a>` : null;
						}).join('')}
					</nav>
				</div>`;
	})
	
	$('.menuBox').html(str);


	$('.navBox a').on('click', function() {
		$(this).addClass('active').siblings().removeClass('active');
		let index = $(this).index();

		if(index == 0){
			$('.menuBox div:last').css('display','none').siblings().css('display','block');
			$('iframe').attr('src','page/userlist.html');
		}else{
			$('.menuBox div:last').css('display','block').siblings().css('display','none');
			$('iframe').attr('src','page/customerlist.html');
		}
	});

	$('.itemBox h3').on('click',function(){
		$(this).siblings().stop().slideToggle('slow');
	});

	$('.baseBox a').on('click', function() {
		localStorage.removeItem('power');
		location.href='login.html';
	});

}());