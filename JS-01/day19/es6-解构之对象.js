let { name, age } = { "name": "zhangsan", "age": 20 };
console.log(name, age);

let { name, age } = { "name": "zhangsan" };
console.log(name, age);

let { name, age = 18 } = { "name": "zhangsan" };
console.log(name, age);

let { name, sex: gender } = { "name": "zhangsan", "sex": "男" };
console.log(name, gender);


function fn() {
    console.log(1);
}
var obj = {
    fn
};
obj.fn();