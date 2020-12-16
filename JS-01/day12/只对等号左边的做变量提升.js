console.log(fn); // undefined
// console.log(fn(1,2)); // fn is not a function
var fn = function (n, m) {
    return n + m;
}
console.log(fn(3, 4));

console.log(fn)  // 函数（变量提升阶段声明和定义一同完成） var fn 的时候只声明，但是已经有这个变量了。
function fn() {    // 跳过此阶段
    console.log(1)
}
var fn = 2;       // 代码走到这里的时候，重新赋值 fn=2
console.log(fn) //2