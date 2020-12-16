
function Fn(){
    this.name="lisi";
    this.age=20;
}
var fn1=new Fn();
console.log(fn1 instanceof Fn);


function Fn(){
    this.name="lisi";
    this.age=20;
}
var fn1=new Fn();
console.log(fn1.hasOwnProperty("name")); // true



function Fn(){
    this.name="lisi";
    this.age=20;
}
var fn1=new Fn();
console.log("name" in fn1); // true



function Fn(){
    this.name="lisi";
    this.age=20;
    
    // return 100; //手动添加返回值
    return [1,2,3]; // 手动添加返回值
}
var f1=new Fn(); // 默认返回一个对象
var f2=new Fn(); // 返回的还是一个对象
var f3=new Fn(); // 返回的是一个新对象
console.log(f3)


