
/**
 * 
 * 1.基本数据类型的值会存在当前作用域下
 *      按值操作
 * 2.引用数据类型的值比较复杂，不会再当前作用域下存贮
 *      引用地址的操作
 * 
 */
// 基本数据类型     String
var str1 = "zhangsan";
var str2 = str1;
console.log(str2);

// 引用数据类型     对象
var obj1 = {name:"张三",sex:"男"};
var obj2 = obj1;
obj2.name = "里斯";
console.log(obj2);

// 引用数据类型     数组
var arr1 = [1,2,3,4];
var arr2 = arr1;
arr2[0] = 5;
console.log(arr2)

// 引用数据类型     function函数
var fn1 = function(){
    return 1;
}
var fn2 = fn1;
var fn2 = function(){
    return 2;
}
console.log(fn2)

//  因为 obj.m 为undefined
var obj = {
    n:"zhangsan",
    m:obj.n*10
}
console.log(obj.m)

var ary1=[3,4];//1，4 0
var ary2=ary1;
ary2[0]=1;//ary2 = [1,4]

ary2=[4,5];//ary2 = [4,5]

ary2[1]=2;//ary2 = [4,2]

ary1[1]=0;//ary1 = [4,0]

console.log(ary1,ary2);


var obj1 = {name:"zhangsan",age:20}
var obj2 = obj1;

obj2.name = "lisi";

obj2 = {name:"wangwu",age:66}

obj2.age = 88;

obj1.age = 22;

console.log(obj1,obj2)