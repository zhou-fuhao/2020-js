var name = "window";
function Fun(x, y) {
    console.log(this.name);
    return x + y;
}
var obj = { name: "zhang", fn: Fun };

Fun.call(obj, 1, 2);


var name = "window";
function Fun(x, y) {
    console.log(this.name);
    return x + y;
}
var obj = { name: "zhang", fn: Fun };

Fun.call(obj, [1, 2]);// zhang  3