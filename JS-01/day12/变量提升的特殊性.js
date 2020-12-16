// 不论判断条件是否成立，都会进行变量提升
/*
在当前作用域下，不管判断条件是否成立，都会进行变量提升
1.var：只声明，不定义（不赋值）
2.function：新版本浏览器中，只声明，不定义
            旧版本浏览器中，声明和定义一起完成
*/

console.log(a);
// 不管判断条件是否成立，都会进行变量提升：var a;
if (1 == 2) {
    // 条件不成立，所以进不来
    var a = 12;
}
console.log(a);


//---------------------------------------------------------------------------
console.log(fn);
// 在新版本浏览器中，判断条件中的function相当于只声明（跟var一样），所以undefined
if (1 == 2) {
    function fn() {
        console.log(1);
    }
}
console.log(fn); // undefined
// 条件不成立，只声明了，没有赋值（新版本浏览器）



//---------------------------------------------------------------------------
console.log(a); // undefined
if (a in window) {
    var a = 100;
}
console.log(a); // 100


//---------------------------------------------------------------------------
/*
自执行函数在全局作用域下不进行变量提升
1.全局作用域中，变量提升：无
2.代码自上往下执行，f就是window.f=function(){},g就是window.g=function(){}
  自执行函数，形成私有作用域，变量提升：不管判断条件是否成立，判断语句里的代码都会进行变量提升
function g在新版本浏览器中 只声明未定义。接着走到if语句中，g()，此时的g只声明未定义，相当于undefined(),
所以g会报类型错误，下面的代码都不会执行
Uncaught TypeError: g is not a function
*/
f = function () {
    return true;
};
g = function () {
    return false;
};
~function () {
    if (g() && [] == ![]) {
        f = function () { return false; };
        function g() {
            return true;
        }
    }
}();
console.log(f());
console.log(g());


