Array.prototype.MyEvery = function (callBack) {
    for (let j = 0; j < this.length; j++) {
        if (!callBack(this[j], j)) {
            return false;
        }
    }
    return true;
}

let arr = [1, 2, 3, 4, 5];
let res = arr.MyEvery((item, index) => {
    if (item > 0) {
        return true;
    }
});
console.log(res); // true 回调函数执行4次