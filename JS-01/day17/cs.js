var name = "window";
var obj = {
    name: "li"
}
function fn(x, y) {
    return "this.name:" + this.name + "，参数是：" + x + "-" + y;
}

Function.prototype.Mycall = function (obj, ...arg) {
    var res = null;// 函数的返回值
    //此函数中的this 就是 fn
    //让函数执行
    // 但是如果这样写，fn虽然执行了，里面的this也得改变，怎么改？不能直接赋值，不能用call、bind、appy
    //this()
    obj.$fn = this;
    res = obj.$fn(...arg);// 让this也就是fn这个函数执行，并且成功把里面的this指向更改成了obj
    delete obj.$fn;
    return res;
    //=========参数不固定，所以我们用...arg

}
var res = fn.Mycall(obj, 1, 2);
console.log(res);