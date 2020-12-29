Array.prototype.MyFilter = function (callBack) {
    let newArr = [];
    for (let j = 0; j < this.length; j++) {
        if (callBack(this[j], j)) {
            newArr.push(this[j]);
        }
    }
    return newArr;
}

let arr = [1, 2, 3, 4, 5];
let res = arr.MyFilter((item, index) => {
    if (item > 2) {
        return true;
    }
});
console.log(res); // [3, 4, 5]