Array.prototype.MyFind = function (callBack) {
    for (let j = 0; j < this.length; j++) {
        if (callBack(this[j], j)) {
            return this[j];
        }
    }
}

let arr = [1, 2, 3, 4, 5];
let res = arr.MyFind((item, index) => {
    if (item > 20) {
        return true;
    }
});
console.log(res); // undefined 回调函数执行5次