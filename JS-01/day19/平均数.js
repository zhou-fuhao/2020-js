var arr = [11, 1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.sort(function (m, n) { return m - n; })
arr.pop();
arr.shift();

var sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
}
console.log(sum / arr.length);


function total(...data) {
    data.sort(function (m, n) { return m - n; });
    data.pop();
    data.shift();
    var sum = 0;
    for (let i = 0; i < data.length; i++) {
        sum += data[i];
    }
    return sum / data.length;
}
// var arr1 = [11, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// var arr2 = (1, 2, 8, 10);
console.log(total(1, 2, 8, 10));


function total() {
    var max = Math.max(...arguments);
    var min = Math.min(...arguments);
    return (eval([...arguments].join("+")) - max - min) / (arguments.length - 2);
}

console.log(total(1, 2, 8, 10));


var arr = [{ age: 20 }, { age: 19 }, { age: 32 }, { age: 18 }];
arr.sort(function (m, n) {
    return m.age - n.age;
});
console.log(arr);