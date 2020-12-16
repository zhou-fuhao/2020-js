/**
 * 两种调式方法
 * 1.打印 console.log()
 * 2.弹框 alert()
 */
console.log("打印调试方法");
alert("弹框调试方法");


/**
 * 变量
 * 它不是一个具体的值，而是一个值的容器或者代名词，并且这个值也是可变的。
 */
var score = 80;
score = 92;
console.log("可变的量"+score)

/**
 * 创建变量的六种方式(es3)
 * 1.var 声明一个变量(es3)
 * 2.function 声明一个函数
 * 3.const 声明一个常量
 * 4.let 声明一个变量
 * 5.class 创建一个类
 * 6.import 基于es6的模块，导入需要的信息
 */
var var1 = "变量";
console.log(var1);

ftn1(8,2);
function ftn1(m,n){
    console.log(m*n)
}

//  常量不允许修改值
const const1 = "1";
const1 = "2";
console.log(const1);

let let1="变量"
console.log(let1)

/**
 * js的命名规范
 * 1.区分大小写
 * 2.驼峰命名法，数字、字母、下划线、$符号组成，不能以数字开头；起名要有语义化
 * 3.不能是关键字或者保留字
 *   关键字：代表特殊含义和功能的名义
 *   保留字：现在不是关键字，但是以后可能会被规定成关键字，先保留
 */

var studentName="zhangsan";
var studentAge=20;
console.log("学生姓名："+studentName+"，学生年龄："+studentAge)


/**
 * js的数据类型
 * 1.基本数据类型
 *  1.1.number
 *  1.2.string
 *  1.3.boolean
 *  1.4.null
 *  1.5.undefined
 * 2.引用数据类型
 *  2.1.object对象
 *   2.1.1.普通的对象
 *   2.1.2.数组
 *   2.1.3.Date
 *   2.1.4.Math
 *   2.1.5.正则
 *  2.2.function函数
 * js的数据类型
 * 3.es6新增一个数据类型，Symbol，唯一一个值
 */
//  由一个大括号组成，里面有很多键值对
 var obj1 = {name:"zhangsan",age:14}

//  数组
var arr = [1,2,3,4,"a","b","c"]

//  正则    验证是否有数字
var reg = /\dg/
var str1 = "abcd1234efg"
console.log(reg.test(str1))



var a="11";
var b="22";
a++ + b;
console.log(a)