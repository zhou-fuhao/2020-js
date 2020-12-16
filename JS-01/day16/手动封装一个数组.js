
Array.prototype.MyPush = function () {
    // 往末尾追加项的次数
    for (let i = 0; i < arguments.length; i++) {
        // 1.根据数据下标添加
        // this[this.length] = arguments[i];
        // 2.根据splice方法添加
        // this.splice(this.length, 0, arguments[i]);
        // 3.根据push方法添加
        this.push(arguments[i]);
    }
    return this.length;
}

var arr = [1, 2, 3]
var res = arr.MyPush(4, 5, 6);
console.log(arr);
console.log(res);


var arr2 = [1, 2, 1, 2]
var res2 = arr2.MyPush(9, 8, 8, 9);
console.log(arr2);
console.log(res2);