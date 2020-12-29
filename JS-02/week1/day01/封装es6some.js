Array.prototype.MySome = function (callBack) {
    for (let j = 0; j < this.length; j++) {
        if (callBack(this[j], j)) {
            return true;
        }
    }
    return false;
}

let arr = [1, 2, 3, 4, 5];
let res = arr.MySome((item, index) => {
    if (item > 2) {
        return true;
    }
});
console.log(res); // true 回调函数执行3次