"use strict";

var str = 'abcabcdef';
var obj = {};

for (var j = 0; j < str.length; j++) {
  var a = 0;

  for (var k = j + 1; k < str.length; k++) {
    if (str[j] == str[k]) {
      a++;
      obj[str[j]] = a;
    }
  }
}

console.log(obj);