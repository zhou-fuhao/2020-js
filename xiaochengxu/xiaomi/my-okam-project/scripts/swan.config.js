/**
 * @file Build swan smart program build config
 * @author 'HaoRen'<'1811058347@qq.com'>
 */

'use strict';

const merge = require('okam-build').merge;

module.exports = merge({}, require('./base.config'), {
    localPolyfill: ['async'],
    // wx2swan: true,
    rules: []
});
