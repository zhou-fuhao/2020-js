/**
 * @file Build mini program base config
 * @author 'HaoRen'<'1811058347@qq.com'>
 *
 * @see https://ecomfe.github.io/okam/#/build/index
 */

'use strict';

const path = require('path');

const DEV_SERVER_PORT = 9090;

module.exports = {
    verbose: false,
    root: path.join(__dirname, '..'),
    output: {
        dir: 'dist',
        depDir: 'src/common'
    },
    component: {
        extname: 'vue',
        template: {
            // vue v- 前缀支持, 默认为 false
            useVuePrefix: true,
            // 标签转换配置项
            transformTags: {
            }
        }
    },
    // 此处没用上的功能可自行精简
    framework: [
        'data',
        // watch 依赖 data
        'watch',
        // 快应用 不支持 model
        'model',
        // 头条 不支持 filter
        'filter',
        'behavior',
        'broadcast',
        'ref'
    ],
    // 快应用 不转 rpx
    designWidth: 1242,
    processors: {
        babel7: {
            extnames: ['js']
        },
        postcss: {
            extnames: ['scss'],
            options: {
            }
        }
    },

    // 启用开发 Server
    server: {
        port: DEV_SERVER_PORT,
        type: 'connect',
        // 需要安装 mock 中间件 npm i autoresponse --save-dev
        middlewares: [
            // {
            //     name: 'autoresponse',
            //     options: {
            //         post: true,
            //         get: true
            //     }
            // }
        ]
    },

    prod: {
        rules: [
            {
                match: '*.js',
                processors: [
                    ['replacement', {'process.env.NODE_ENV': '"production"'}]
                ]
            }
        ]
    },

    dev: {
        rules: [
            {
                match: '*.js',
                processors: [
                    ['replacement', {
                        // 'https://online.com': 'https://dev.com',
                        'process.env.NODE_ENV': '"development"'
                    }]
                ]
            }
        ]
    },
    test: {
        rules: [
            {
                match: '*.js',
                processors: [
                    ['replacement', {
                        // 'https://online.com': 'https://test.com',
                        'process.env.NODE_ENV': '"development"'
                    }]
                ]
            }
        ]
    }
};
