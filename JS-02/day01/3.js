console.log(a);//un
var a = 12;
function fn() {
    console.log(a);//12
    a = 13;
}
fn();
console.log(a);//13

// console.log(a);//报错
a = 12;
function fn() {
    console.log(a);//12
    a = 13;
}
fn();
console.log(a); 13


var foo = 'hello';
(function (foo) {
    console.log(foo);//hello
    var foo = foo || 'world';
    console.log(foo);//hello
})(foo);
console.log(foo);//hello


{
    function foo() { }
    foo = 1;
}
console.log(foo);

{
    function foo() { }
    foo = 1;
    function foo() { }
}
console.log(foo);


{
    function foo() { }
    foo = 1;
    function foo() { }
    foo = 2;
}
console.log(foo);