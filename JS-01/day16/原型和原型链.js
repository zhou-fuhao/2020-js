function Fn(){

}

Fn.prototype.getX=function(){
    return "pub";
}

Object.prototype.name=function(){
    return "zhang";
}

Function.prototype.age=function(){
    return "年龄："+20;
}
var f1=new Fn();
console.log(f1.__proto__.__proto__.name());
console.log(Fn.prototype.__proto__.name());
console.log(Object.__proto__.age());
console.log(Function.prototype.__proto__.name());