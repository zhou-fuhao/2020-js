var arr = new Array();
Array.prototype = 100;
console.log(Array.prototype + "");// 还是原来的



Array.prototype.push = function () { };// 覆盖原来的方法
Array.prototype.hasPubPro = function () { };// 新增原来的方法



Array.prototype.MyPush = function () {
    for (let a = 0; a < arguments.length; a++) {
        this[this.length] = arguments[a];
    }
    return this.length;
}
var arr = [1, 2, 3];
var res = arr.MyPush(7, 6, 5, 4);
console.log(arr.sort(function (m, n) { return m - n; }));
console.log(res);