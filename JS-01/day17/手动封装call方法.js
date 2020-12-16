Function.prototype.MyCall = function (obj, ...arg) {
    obj = obj || window;
    var res = null;
    obj.$fn = this;
    res = obj.$fn(...arg);
    delete obj.$fn;
    return res;
}

var obj = { name: "zhang" };
function Fun(x, y) {
    console.log(this);
    return x + y;
}

Fun.MyCall(obj, 2, 5);