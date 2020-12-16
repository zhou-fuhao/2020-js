// 1
function fn(a, b, c) {
    console.log(a + b + c);
}
console.log(fn(1, 2, 3));

// 2
function fn(a, ...arg) {
    console.log(a, arg);
}
console.log(fn(1, 2, 3));

// 3
function fn([a, b, c]) {
    console.log(a + b + c);
}
console.log(fn([1, 2, 3]));

// 4
function fn([, [, a]]) {
    console.log(a);
}
console.log(fn([1, [2, 3]]));

// 5
function fn(x = 10, y = 20) {
    console.log(x + y);
}
console.log(fn());

// 6
function fn({ name, age = 20 }) {
    console.log(name, age);
}
console.log(fn({ name: "zhangsan" }))
