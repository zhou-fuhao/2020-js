var arr = [30, 20, 40, 10];


console.log(Math.max(...arr));


console.log(arr.sort(function (m, n) {
    return m - n;
})[arr.length - 1]);


var arr = [30, 20, 40, 10];
for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) {
        var item = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = item;
    }
}
console.log(arr);
console.log(arr[arr.length - 1]);






function fn() {
    var arr = [];
    for (let i = 0; i < arguments.length; i++) {
        arr.push(arguments[i]);
    }
    return arr;
}

console.log(fn(1, 2, 3, 6, 4));



function fn(...arg) {
    var res = [...arg];
    return res;
}
console.log(fn(1, 2, 3, 6, 4));

