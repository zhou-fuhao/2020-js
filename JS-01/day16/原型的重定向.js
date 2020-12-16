function Fn() {
    this.x = 100;
}
Fn.prototype.getX = function () {
    return this.x;
}
var f1 = new Fn();

// 重定向：手动更改原型的指向，没有constructor，需要手动添加
Fn.prototype = {
    //consturctor:Fn,
    getY: function () {
        return this.x
    }
};
var f2 = new Fn();
console.log(f1.getX()); // 100
console.log(f2.getX()); // 报错
console.log(f1.constructor); // Fn函数
console.log(f2.constructor); // Object函数
