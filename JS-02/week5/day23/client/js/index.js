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
		// $('.navBox a:first').addClass('active').siblings().removeClass('active');
		// $('.menuBox div:last').css('display','none').siblings().css('display','block');
		// $('iframe').attr('src','page/userlist.html');
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


	// $('.navBox a').on('click', function() {
	// 	$(this).addClass('active').siblings().removeClass('active');
	// 	let index = $(this).index();

	// 	if(index == 0){
	// 		$('.menuBox div:last').css('display','none').siblings().css('display','block');
	// 		$('iframe').attr('src','page/userlist.html');
	// 	}else{
	// 		$('.menuBox div:last').css('display','block').siblings().css('display','none');
	// 		$('iframe').attr('src','page/customerlist.html');
	// 	}
	// });

	// $('.itemBox h3').on('click',function(){
	// 	$(this).siblings().stop().slideToggle('slow');
	// });



	$('.menuBox').on('click', function(e) {
		let target = e.target,// 获取当前点击的事件源(当前的元素)
			$target = $(target),// 把当前原生的元素变成jq的实例
			tagName = target.tagName;// 把当前元素的大写的标签名
		
		if(tagName === 'I'){
			$target = $target.parent();
			tagName = 'H3';
		}
		
		if(tagName == 'H3'){
			let $nav = $target.next();
			$nav.stop().slideToggle();
		}
	});


	// 下边咱们就处理头部的两个按钮
	// 点击第一个按钮让前三组模块显示，点击第二个按钮让最后一组模块显示
	let $menuBox = $('.menuBox'), //这是四个模块的父级
		$itemBox = $('.menuBox').find('div'),
		$organize = $itemBox.filter(':lt(3)'), // 第一大组
		$customer = $itemBox.eq(3); // 第二大组

	// 当页面刷新的时候，刷新之前是哪个页面，刷新之后还应该是哪个页面
	// 1.用localStorage 2.hash值
	let initIndex = 0;

	// 通过hash值去改变initIndex的值，如果当前页面hash是organize，把initIndex对应的值是0，否则initIndex就是1
	let HASH = location.href.queryURLParams()['HASH'] || 'organize'; // organize | customer
	if(HASH == 'customer'){
		initIndex = 1;
	}

	function change(index){
		$('.navBox a').eq(index).addClass('active').siblings().removeClass('active');
		// 给当前点击的元素增加类型(然后在兄弟移除类名)
		if(index == 0){
			$organize.css('display','block');
			$customer.css('display','none');
			$('iframe').attr('src','page/userlist.html');
		}
		else {
			$organize.css('display','none');
			$customer.css('display','block');
			$('iframe').attr('src','page/customerlist.html?lx=my');
		}
	}
	change(initIndex); // 让页面初次渲染的时候让change执行一下，传递实参0，代表默认显示第一大组(organize)

	// 给按钮绑定点击事件
	$('.navBox a').click(function(){
		// 判断一下当前用户点击的元素的索引是谁，如果是0，那就说明点击的是第一个按钮，就让第一大组模块显示，如果索引是1，那就说明点击的是第二个按钮。这时候让第二大组模块显示
		let index = $(this).index();
		change(index);
	});


	$('.baseBox a').on('click', function() {
		axios.get('/user/signout').then((res)=>{
			let {
				code,
			} = res;
			if(code == 0){
				alert('恭喜您，退出成功！', {
					handled(){
						localStorage.removeItem('power');
						location.href='login.html';
					}
				});
			}
		});
	});


}());