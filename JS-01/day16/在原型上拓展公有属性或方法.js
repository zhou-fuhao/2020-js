function Person(name, age) {
    this.name = name;
    this.age = age;
}
// 往原型上拓展公有方法 或 属性
Person.prototype.Say = function () {
    // 谁调用这个函数，这个函数里面的this就是谁
    // this
    console.log("我的名字是：" + this.name + "，年龄是：" + this.age);
}
var p1 = new Person("张三", 20);
var p2 = new Person("李四", 33);

p1.Say();
p2.Say();
