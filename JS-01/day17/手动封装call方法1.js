Function.prototype.MyCall = function (data, ...arg) {
    data = data || window;
    var result = null;
    data.item = this;
    result = data.item(...arg);
    delete data.item;
    return result;
}

var obj = { "name": "小明" };
function Fun(x, y, z) {
    console.log(this);
    return x + y + z;
}
var result = Fun.MyCall(obj, 2, 9, 10);
console.log(result);