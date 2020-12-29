// slice、forEach、map、indexOf、splice

// 封装 forEach 方法
Array.prototype.MyForEach = function (callBack) {
    for (let i = 0; i < this.length; i++) {
        callBack(this[i], i);
    }
}
let arr = [1, 2, 3, 4, 5];
arr.MyForEach(function (item, index) {
    // console.log(item, index);
});
