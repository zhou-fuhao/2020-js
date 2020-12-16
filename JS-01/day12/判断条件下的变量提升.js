/*
在判断语句中，如果条件成立，会把执行体当成私有作用域，再进行变量提升
*/

console.log(fn); // undefined
// 在新版本浏览器中，不管条件是否成立，都会进行变量提升，function只声明未定义
if (1 == 1) {
    // 在判断条件中，如果条件成立，会把执行体当成私有作用域，再进行变量提升
    // 在从上往下执行，此时fn定义完成
    console.log(fn); // fn函数字符串

    function fn() {
        console.log("ok");
    }
}
console.log(fn); // 私有作用域fn函数字符串
// 条件成立，给fn进行赋值，所以打印fn函数字符串




/*
在判断条件下，如果有function定义的变量，在这个function函数后面更改变量的值，更改的都是私有变量
*/

var a = 0;
if (true) {
    a = 1;
    function a() { };
    a = 20;
    console.log("if判断里的a：" + a); // 20
}
console.log(a); // 1



console.log(num);// undefined
console.log(fn);// undefined
if ([]) {
    // 只要进到当前if条件中，会立即对fn进行赋值；
    fn()
    var num = 100;
    function fn() {
        console.log("a");// a
    }
}
console.log(fn);// undefined