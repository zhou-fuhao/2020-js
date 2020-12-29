let str = "asd123as456as789d";
let reg = /\d{3}/g;
console.log(str.match(reg)); // ['123','456','789'] 和咱们刚才封装的方法实现的功能是一样的
// ---------------------------------------------------------------------------------------

// match的其他特点：
let str = "{0}年{1}月{2}日";
let reg = /\{(\d+)\}/;

//=>如果正则不设置g只会捕获一次，exec和match获取的结果一致
console.log(reg.exec(str)); // ["{0}", "0", index: 0, input: "{0}年{1}月{2}日", groups: undefined]
console.log(str.match(reg)); // ["{0}", "0", index: 0, input: "{0}年{1}月{2}日", groups: undefined]

//=>如果正则加上g，在多次捕获的情况下match只能把大正则匹配的内容获取到，小分组匹配的信息无法获取
reg = /\{(\d+)\}/;
console.log(str.match(reg)); // ["{0}", "{1}", "{2}"]