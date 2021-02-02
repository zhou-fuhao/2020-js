function MyObj() {
    this.p.pid++;
}
MyObj.prototype.p = {
    'pid': 0
};

MyObj.prototype.getNum = function (num) {
    return this.p.pid + num;
}

let a = new MyObj;
let b = new MyObj;

console.log(a.getNum(1) + b.getNum(2));