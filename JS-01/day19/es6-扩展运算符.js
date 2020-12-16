// 1
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = arr1.concat(arr2);
console.log(arr3);

// 2
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// 3
let obj1 = { name: "zhangsan" };
let obj2 = { age: 20, job: "前端" };
let obj3 = Object.assign(obj1, obj2);
console.log(obj3);

// 4
let obj1 = { name: "zhangsan" };
let obj2 = { age: 20, job: "前端" };
let obj3 = { ...obj1, ...obj2 };
console.log(obj3);