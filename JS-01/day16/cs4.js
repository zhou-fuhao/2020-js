function Fn(num) {
    this.x = this.y = num;
}
// 重定向
Fn.prototype = {
    x: 20,
    sum: function () {
        console.log(this.x + this.y);
    }
};
let f = new Fn(10);
console.log(f.sum === Fn.prototype.sum);//true
f.sum();//20
Fn.prototype.sum();//un
console.log(f.constructor);//obj