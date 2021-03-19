/**
 * @file Build ant mini program build config
 * @author jim<zhoufuhao_java@163.com>
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
