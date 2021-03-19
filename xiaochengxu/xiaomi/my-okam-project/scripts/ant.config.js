/**
 * @file Build ant mini program build config
 * @author 'HaoRen'<'1811058347@qq.com'>
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    output: {
        dir: 'ant_dist',
        depDir: 'src/common'
    },
    localPolyfill: ['async']
});
