/* 
变量提升：
function Foo
function getName ：console5======》console4===》1
*/
function Foo() {
    //getName 不是私有的，把全局的getName值进行了更改
    getName = function () {
        console.log(1);
    };
    // window
    return this;
}
//Foo 对象 添加一个属性 getName---console2
Foo.getName = function () {
    console.log(2);
}
//类 往原型上添加公有的方法getName----console3
Foo.prototype.getName = function () {
    console.log(3);
}
// 把全局的getName值更改了
var getName = function () {
    console.log(4);
}
function getName() {
    console.log(5);
}
Foo.getName(); // 2 对象，
getName(); // 4 普通函数的执行
Foo().getName();// window.getName(); 1
getName();//1
new Foo.getName(); // 2
new Foo().getName();//3 先运算new Foo() // new Foo() 当成构造函数，函数里面的this就是这个实例，（f1）f1.getName（）;先找自己私有的getName，无，去原型上找，找到 
new new Foo().getName();// 先运算里层的 new Foo()（看成A）,==>A.getName ==>new b ();====》3