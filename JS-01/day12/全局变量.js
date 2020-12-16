/*
在全局作用域中声明的变量就是全局变量
*/
var a=3;
function fn(){
    var b=4;
    function f1(){

    }
}

fn();
console.log(a);
console.log(fn);