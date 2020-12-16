
// 封装indexOf
Array.prototype.MyIndexOf = function (data, index) {
// if (index === undefined) {
    if (!index) {
        for (var i = 0; i < this.length; i++) {
            if (this[i] == data) {
                return i;
            }
        }
        return -1;
    } else {
        for (var i = index; i < this.length; i++) {
            if (data === this[i]) {
                return i;
            }
        }
        return -1;
    }
}
let arr = [1, 2, 3, 4, 1, 2, 3, 5, 1, 4];
console.log("原生" + arr.indexOf(5));
console.log("原生" + arr.indexOf(0, 9));

var res1 = arr.MyIndexOf(5);//检索5所在下标
var res2 = arr.MyIndexOf(0, 9);//检索0，从下标9开始

console.log(res1);
console.log(res2);
