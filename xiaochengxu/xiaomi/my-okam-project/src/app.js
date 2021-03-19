/**
 * @file 小程序入口
 * @author 'HaoRen'<'1811058347@qq.com'>
 */

'use strict';


export default {
    config: {
        //原生的app.js
        pages: [
            'pages/home/index',
            'pages/menu/index',
            'pages/car/index',
            'pages/user/index',
        ],

        window: {
            navigationBarBackgroundColor: '#845f3f',
            navigationBarTextStyle: 'white',
            backgroundTextStyle: 'light',
            enablePullDownRefresh: true,
            backgroundColor: '#ccc',
            navigationBarTitleText: '小米有品'
        },
        tabBar: {
            color: '#ccc',
            FontSize: 20,
            selectedColor: '#7dc5eb',
            list: [{
                    pagePath: 'pages/home/index',
                    text: '首页',
                    iconPath: "images/home1.png",
                    selectedIconPath: "images/home2.png"
                },
                {
                    pagePath: 'pages/menu/index',
                    text: '分类',
                    iconPath: "images/menu1.png",
                    selectedIconPath: "images/menu2.png"
                },
                {
                    pagePath: 'pages/car/index',
                    text: '购物车',
                    iconPath: "images/car1.png",
                    selectedIconPath: "images/car2.png"
                },
                {
                    pagePath: 'pages/user/index',
                    text: '我的',
                    iconPath: "images/user1.png",
                    selectedIconPath: "images/user2.png"
                }
            ]
        },
        networkTimeout: {
            request: 30000
        },

        /* eslint-disable fecs-camelcase */
        _quickEnv: {
            networkTimeout: null,
            package: 'com.okam.demo',
            name: 'okam-quick',
            versionCode: '2',
            icon: '/common/img/okm.png'
        }
        /* eslint-enable fecs-camelcase */
    },
    $promisifyApis: [
        'getSystemInfo', 'request'
    ],
    globalData: {
        // host:"http://liuqi.cn.utools.club"
        host: "https://liuqi.cn.utools.club",


    },

    async onLaunch() {
        let result = await this.$api.getSystemInfo();
        console.log('launch system info', result);
        console.log('show onLaunch...');
    },

    onShow() {
        this.$api.getSystemInfo().then(function (res) {
            console.log('systemInfo', res);
        });
        console.log('show app...');
    },


    onHide() {
        console.log('hide app...');
    }
};
