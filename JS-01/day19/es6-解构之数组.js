var [a, b, c] = [1, 2, 3];
console.log(a, b, c);

var [a, , , , , b] = [1, 2, 3, 4, 5, 6];
console.log(a, b);

var [name, age] = ["zhangsan"];
console.log(name, age);

var [name, age = 20] = ["zhangsan"];
console.log(name, age);