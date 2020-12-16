let obj = { name: 1 };
function fn(x, y) {
    console.log(this, x, y);
}
var res = fn.bind(obj, 1, 2);
res();