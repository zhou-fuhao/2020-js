
var ary = [12, 23];
var s = 100;
function fn(ary, s) {
    s = 200;
    ary[0] = 100;
    console.log(ary);
    console.log(s);
    ary = [100];
    console.log(ary);
}
fn(ary, s);
console.log(ary);
console.log(s);

// ---
console.log(a);
console.log(b);
console.log(c);
var a, b, c = 10;
console.log(a);
console.log(b);
console.log(c);

// ===
console.log(a, b);
var a = 12, b = 12;
function fn() {
    console.log(a, b);
    var a = b = 13;
    console.log(a, b);
}
fn();
console.log(a, b);


// ======
var a = 4;
var f = 3;
function b(x, y, a) {
    alert(a);
    // 形参和arguments存在映射关系；
    arguments[2] = 10;
    alert(a); 10
}
a = b(1, 2, f);
alert(a);
console.log(f);


// ^^^^^^^^^
fn();
function fn() {
    console.log(1);
};
fn();
function fn() {
    console.log(2);
};
fn();
var fn = function () {
    console.log(3);
};
fn();
function fn() {
    console.log(4);
};
fn();
function fn() {
    console.log(5);
};


// ...................

var foo = 'hello';
(function (foo) {

    console.log(foo);
    var foo = foo || 'world';
    console.log(foo);
})(foo);
console.log(foo);


// zzzzzzzzzzzzzzzzzzzzzz
f = function () { return true }
g = function () { return false }
~function () {
    if (g() && [] == ![]) {
        f = function () { return false }
        function g() { return true }
    }
}();

console.log(f())
console.log(g())
