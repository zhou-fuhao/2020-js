let str = "{0}年{1}月{2}日";
let reg = /\{(\d+)\}/g;
console.log(str.matchAll(reg)); // RegExpStringIterator {} 迭代器
for (var ss of str.matchAll(reg)) {
    console.log(ss);
    // ["{0}", "0", index: 0, input: "{0}年{1}月{2}日", groups: undefined]
    // ["{1}", "1", index: 4, input: "{0}年{1}月{2}日", groups: undefined]
    // ["{2}", "2", index: 8, input: "{0}年{1}月{2}日", groups: undefined]
}
// 去遍历当前的迭代器可以得到每一次捕获的所有内容