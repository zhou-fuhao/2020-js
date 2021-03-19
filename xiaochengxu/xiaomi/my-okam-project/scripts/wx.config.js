/**
 * @file Build weixin mini program build config
 * @author 'HaoRen'<'1811058347@qq.com'>
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    output: {
        dir: 'wx_dist',
        depDir: 'src/common'
    },

    localPolyfill: [
        'async'
    ],

    processors: {
        postcss: {
            options: {
                plugins: [
                    ['postcss-url', {
                        url: 'inline'
                    }]
                ]
            }
        },
        filter: {
            options: {
                presets: ['@babel/preset-env']
            }
        }
    }
});
