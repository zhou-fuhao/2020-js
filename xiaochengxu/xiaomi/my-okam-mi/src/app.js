/**
 * @file 小程序入口
 * @author jim<zhoufuhao_java@163.com>
 */

'use strict';


export default {
    config: {
        pages: [
            'pages/car/index',
            'pages/home/index',
            'pages/menu/index',
            'pages/user/index',

        ],

        window: {
            navigationBarBackgroundColor: '#211E2E',
            navigationBarTextStyle: 'white',
            backgroundTextStyle: 'light',
            enablePullDownRefresh: true,
            backgroundColor: '#ccc',
            navigationBarTitleText: "小米有品",
            navigationBarBackgroundColor: "#845f3f"
        },
        tabBar: {
            color: 'ccc',
            selectedColor: '845f3f',
            list: [{
                    pagePath: 'pages/home/index',
                    text: '首页'
                },
                {
                    pagePath: 'pages/menu/index',
                    text: '分类'
                },
                {
                    pagePath: 'pages/car/index',
                    text: '购物车'
                },
                {
                    pagePath: 'pages/user/index',
                    text: '我的'
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
        host: "http://localhost:8088"
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
