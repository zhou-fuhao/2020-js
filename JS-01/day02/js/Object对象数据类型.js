/**
 * 把多组键值对用大括号包起来，并且属性与属性之间用逗号分开
 */
// 对象的增删改查
var obj = {name:"张三",age:20}
// 更改
obj.name = "李四";
obj["age"] = 30;
// obj[age] = 22;

// 增加
obj.job = "前端";
obj[100] = "分数";
// 查询
console.log(obj)
/*  如果对象里没有要查询的属性名，则为undefined */
console.log(obj.sex)
// console.log(obj.100);
// 删除(只能对 对象的属性进行删除，不能删除变量)
delete obj.age;
delete obj["job"]
console.log(obj)

var obj={
    name:"lili",
    age:18
}
var name="zhufengpeixun";
console.log(obj.name);
console.log(obj["name"]);
console.log(obj[name]);