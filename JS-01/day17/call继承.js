function A() {
    this.a = "a";
    this.x = 100;
}

function B() {
    A.call(this);
    this.b = "b";
    this.y = 200;
}
var b = new B();
console.log(b.a);
console.log(b.x);
console.log(b.b);
console.log(b.y);