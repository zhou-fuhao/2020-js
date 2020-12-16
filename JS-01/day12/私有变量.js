/*
当函数执行的时候，会形成一个私有作用域，保护里面的私有变量不被外界干扰
1.在私有作用域中声明的变量就是私有变量
2.形参
*/
var a=66;

function fn(data){  // 私有变量
    var x=1;    //私有变量
    var y=3;    //私有变量
    console.log(a);
    return x+y;
}
console.log(a);

fn(1);


