console.log(fn);

function fn() {
    console.log(fn);
    fn = 1;
    function fn() { }
    fn = 3;
    console.log(fn)
}
fn();
console.log(fn);




function f2() {
    console.log("f2");
}

console.log(f1);// 报错 f1 is not defined;

(function f1() {
    console.log(a);// undefined, 照常进行变量提升
    var a = 3;
})();



var a = 2;
function fn() {
    console.log(a);
}
fn();
function sum() {
    var a = 3;
    fn();
    console.log(a)
}
sum();



var n = 10;
function fn() {
    var n = 20;
    function f() {
        n++;
        console.log(n);
    }
    f();
    return f;
}
var x = fn();
x();
x();
console.log(n);


(function fn() {
    function pubFun() {
        console.log("1");
    }

    // 把pubFun 这个方法通过window添加属性暴漏到全局
    window.jquery = window.$ = pubFun;
})();

//在使用的时候，通过pubFun() 或 $()
pubFun();
$();




function fn(i) {
    return function (n) {
        console.log(n + (++i));
    }
}
var f = fn(2);
f(3);
fn(5)(6);
fn(7)(8);
f(4)