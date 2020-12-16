function Fn(){
    this.x=100;
    this.y=200;
    this.getX=function(){
        console.log(this.x);
    }
}
Fn.prototype.getX=function(){
    //fn.prototype.x==>undefined
    console.log(this.x);
}
Fn.prototype.getY=function(){
    //Fn.prototype.y
    console.log(this.y);
}
var f1=new Fn;
var f2=new Fn;
console.log(f1.getX==f2.getX);//false

console.log(f1.getY==f2.getY);//true
//           Fn.prototype.getY
console.log(f1.__proto__.getY==Fn.prototype.getY);//true
//           Fn.prototype.getX==f2.getX  //false
console.log(f1.__proto__.getX==f2.getX);
console.log(f1.getX===Fn.prototype.getX);//false
console.log(f1.constructor);//
console.log(Fn.prototype.__proto__.constructor);//Object
f1.getX();//100
//f1.__proto__=fn.prototype
f1.__proto__.getX();
f2.getY();
Fn.prototype.getY();