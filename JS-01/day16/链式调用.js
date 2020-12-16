var arr = [8, 5, 2, 1, 10];
/*
arr.sort(function (m, n) {
    return m - n;
})
arr.reverse();
arr.push(10);
arr.shift();
console.log(arr);
*/
arr.sort(function (m, n) { return m - n; }).reverse().push(10);
arr.shift();
console.log(arr);