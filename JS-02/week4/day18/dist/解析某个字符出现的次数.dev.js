"use strict";

var s = '123456111';
var a = {};

for (var j = 0; j < s.length; j++) {
  var n = s.split(s[j]).length - 1;
  a.s[j + 1] = n;
}

console.log(a);