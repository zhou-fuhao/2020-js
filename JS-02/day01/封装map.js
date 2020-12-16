
// 封装 Map 方法
Array.prototype.MyMap = function (callBack) {
    let newArr = [];
    for (let j = 0; j < this.length; j++) {
        newArr.push(callBack(this[j], j));
    }
    return newArr;
}
let arr2 = [1, 2, 3, 4.5, 6];
let res = arr2.MyMap((item, index) => {
    return item + "--" + index;
});
console.log(res);
