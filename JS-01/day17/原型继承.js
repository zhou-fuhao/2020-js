function A() {
    this.a = "a";
}
A.prototype.getA = function () {
    console.log(this.a);
}

function B() {
    this.b = "b";
}
B.prototype = new A();

var b = new B();// b要继承A类里面私有的属性和 A类原型上公有的属性