let reg = /\d+/;
let str = "abcd123efgh";

console.log(reg.test(str));
console.log(reg.exec(str));
console.log(str.match(reg));


// 匹配手机号
// + 11位手机号
// + 1开头
// + 第二位不能是0 1 2
let reg = /^1[3-9]\d{9}$/;
let str = "13225281209";
console.log(reg.test(str));


// abbbc
let reg = /^[a-z]([a-z])\1\1[a-z]$/;
let str = "abbbc";
console.log(reg.test(str));


// abab
let reg = /^([a-z])([a-z])\1\2$/;
let str = "abab";
console.log(reg.test(str));


// 正向预查
let reg = /zhangsan(?=lisi)/;//zhangsan后面必须跟着lisi才能匹配成功
let str = "zhangsanlisi";
console.log(reg.test(str));


// 负向预查
let reg = /zhangsan(?!lisi)/;//zhangsan后面不能跟着lisi才能匹配成功
let str = "zhangsanXXXXlisi";
console.log(reg.test(str));


// 匹配有效数字
// + +-符号可有可无
// + 有可能是1位正数，也可能是多位正数
// + 只能出现0-1次小数点
let reg = /^[+-]?(\d|[1-9]\d+)(\.\d+)?$/;
let str = "-123.4.5";
console.log(reg.test(str));


