/**
 * @file Build swan smart program build config
 * @author jim<zhoufuhao_java@163.com>
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    localPolyfill: ['async'],
    // wx2swan: true,
    rules: []
});
