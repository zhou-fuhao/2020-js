var obj1 = '{"name":"zhang","age":20,"arr":[1,2,3]}';
console.log(JSON.parse(obj1));


var obj2 = { "name": "zhang", "age": 20, "arr": [1, 2, 3] };
console.log(JSON.stringify(obj2));


var obj3 = { name: "lisi", user: { age: 10 } };
var obj4 = {};
for (const key in obj3) {
    obj4[key] = obj3[key];
}
// 空间地址相同，一改都改
obj4.user.age = 20;
console.log(obj3, obj4);


var obj3 = { name: "lisi", user: { age: 10 } };
var obj4 = JSON.parse(JSON.stringify(obj3));
obj4.user.age = 18;
console.log(obj3, obj4);