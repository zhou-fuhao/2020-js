/*
当浏览器开辟出供js执行的栈内存之后，代码并不是立即自上而下执行，而是需要先做一些事情
把当前作用域中带var 和function 的关键字进行提前的声明和定义，这就叫变量提升机制

var 和 function 在变量提升的阶段区别
1.var在变量提升阶段，只声明，未定义（不赋值）
2.function在此阶段声明和定义一起完成

*/

/*

window全局作用域
变量提升阶段：
var a,var b

*/
var a=3;
var b=a;
b=2;
console.log(b); // 2

/*

window全局作用域，变量提升阶段：fn
开辟一个堆内存，把函数体中的内容当成字符串再进行存储

*/
console.log(fn(2,3)); // 5
function fn(m,n){
    return m+n;
}
console.log(fn(1,2)); // 3

