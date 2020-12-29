let arr = [1, 2, 3, 4, 5, 6, 7];
let res1 = arr.slice(3);

console.log("原生" + res1);

// 
Array.prototype.MySlice = function (start, end) {
    let newArr = [];
    let len = this.length;
    start = (start !== undefined) ? start : 0;
    end = (end !== undefined) ? end : len;

    let size = end - start;

    if (size > 0) {
        for (let i = 0; i < size; i++) {
            newArr[i] = this[i + start];
        }
    } else {
        return newArr
    }
    return newArr;
}
let res = arr.MySlice(3);
console.log(res);