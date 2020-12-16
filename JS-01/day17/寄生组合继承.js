function A() {
    this.a = "a";
    this.x = 100;
}
A.prototype.getA = function () {
    console.log("getA");
}

function B() {
    A.call(this);
    this.b = "b";
    this.y = 200;
}

B.prototype = Object.create(A.prototype);//创建一个空对象，，并且让空对象的__proto__指向参数
B.prototype.getA = 100;
var b = new B();
console.log(b.a);//"a"
console.log(b.x);//100
console.log(b.b);//"b"
console.log(b.y);//200
console.log(b.getA);//100