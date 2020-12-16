[toc]
## js 的组成部分
+ ECMAscript：js的核心语法
+ DOM：document Object model 文档对象模型，提供了一些属性和方法用来操作dom元素的
+ BOM：browser Object model 浏览器对象模型，提供了一些属性和方法用来操作浏览器的

window.loaction.href="http://www.baidu.com";让页面进行跳转
window.loaction.href                        获取当前页面的地址

## 创建变量的六种方式
1.var 声明一个变量（es3）
2.function 声明一个函数（es3）
3.let 声明一个变量（es6）
4.const 声明一个常量（es6）
5.class 声明一个类（es）
6.import 基于es6模块导入一些信息（es6）

## js 的命名规范
1.区分大小写
2.遵循驼峰命名法，数字、字母、下划线、$符号组成，不能以数字开头，起名字的时候要语义化
3.起名字的时候不能是关键字，也不能是保留字
    关键字：代表特殊含义或者功能的字，如.var、function
    保留字：以后可能会成为关键字，只是现在预先保留，占用一下
## 两种简单的调试方式
1.alert("内容");在页面弹出

2.console.log();在控制台打印

拓展
3.console.dir();详细输出
4.confirm("是否继续？");提示框  点击确定返回true，点击取消返回false
5.prompt("男孩or女孩？");带输入框的提示框   点击确定，返回的是输入框里的值，点击取消，返回null

## js 的数据类型
1.基本数据类型
  + number
  + string
  + boolean
  + null
  + undefined
  
2.引用数据类型
  + function  函数
  + object    对象
    - 普通对象
    - 数组
    - 正则
    - Math
    - date

3.es6新增的Symbol(唯一的数据)

## number 数据类型
正数、负数、小数、0、NaN(not a number)
## string 字符串类型
字符用单引号或双引号
## boolean 布尔类型
+ true  真
+ false 假

## null 和 undefined
都是空的意思
null：空的对象指针
undefined：空，没有

## 函数
function 声明一个函数
fn：函数名（自己起的）
data：形参
如果想要让函数执行，我们需要：函数名字();
函数执行，小括号里面是实参(形参和实参根据自己的需要，可有可无)
```
function fn(data){
    alert(data)
}
fn("hello");
```

## 报错 或 异常
1.语法错误
var 1name="zhangsan";
Uncaught SyntaxError: Invalid or unexpected token

2.类型错误
const const1 = "1";
const1 = "2";
console.log(const1);
TypeError: Assignment to constant variable

## 对象
1.普通对象：把属性名和属性值用大括号包起来
属性名：代表一定特征的名字（一般只有字符串和数字）属性名又叫"键"（key）
属性值：具体的值（任意数据类型）                属性值又叫"值"(value)
```
var obj={
    name: "zhangsan",
    age: 19,
    job:"前端"
}
```
2.数组
var arr=[1,2,3,4];
var group=["一组","四组"];
3.Math  主要用来操作数字
···
Math.random()   //获取0-1的随机数
Math.abs(1,-1)  //绝对值
Math.round(1.6) //四舍五入
···
4.date  日期对象

```
new Date()
Mon Nov 09 2020 14:52:09 GMT+0800 (中国标准时间)
```
5.正则
```
/\d/
```

## Symbol es6新增数据类型，唯一的数据类型
var str1 = Symbol("zhangsan");
var str2 = Symbol("zhangsan");
console.log(str1 == str2);
false

## 把其他数据类型转为数字类型的方法
1.Number()
  + 字符串
    - 空字符串，转换结果为0
    - 字符串中包含非有效数字，转为结果为NaN
  + 布尔类型
    - ture  转换结果为1
    - false 转换结果为0
  + null
    转换结果为0
  + undefined
    转换结果为NaN
  + 对象
    - 如果是引用数据类型的转换成数字类型的时候，会隐式先调用toString()方法，然后再转成数字
  ```
  var obj = {name: "zhangsan"}
  Number(obj);====>obj.toString()====>"[object Object]"====>Number("[object Object]")====>NaN

  Number([]);====>[].toString()====>""====>Number("")====>0
  Number([1,2,3]);====>[1,2,3].toString()====>"1,2,3"====>Number("1,2,3")====>NaN

  ```

2.parseInt()  把字符串转换成整数
从左向右查找，遇到非有效数字或小数点停止查找。
  ```
  parseInt("12.5")====>12
  parseInt("12px")====>12
  parseInt("12.5px")====>12
  parseInt("w12.5")====>NaN
  ```

3.parseFloat()  把字符串转换成浮点型
从左向右查找，遇到非有效数字停止查找。可以识别小数点
  ```
  parseFloat("12.5")====>12.5
  parseFloat("12px")====>12
  parseFloat("12.5px")====>12.5
  parseFloat("w12.5")====>NaN
  ```

## NaN
NaN 自己和自己都不相等，所以不能用他来作为判断非有效数字的依据

## isNaN
用来判断一个数字是否是有效数字，返回结果是布尔类型，
  + true  说明是非有效数字
  - false 说明是有效数字

如果判断的数据不是数字类型，先隐式调用Number方法，转换为数字类型，再判断
```
isNaN(1)==>false;
isNaN("2")===> false;
isNaN(true)===>false;
isNaN(false)===>false;
isNaN(null)===>false;
isNaN(undefined)===>true;
isNaN({'name':'lili'})=>true;
isNaN([1,2])=>Number([1,2])===>[1,2].toString()===>"1,2"===>NaN===>true
isNaN([1])=>false
```
## 字符串
+ 获取字符串长度  变量.length
+ 最后一个字符对应的索引  变量.length-1
+ 索引  每个字符都对应一个下标，从0开始逐次递增
+ 获取第一个字符  变量[0]
+ 获取最后一个字符  变量[变量.length-1]
```
var str = "abcdefg";
str.length====>7
str[0]====>"a"
str[str.length-1]====>"g"
```
## 字符串的加减乘除
字符串的加法除了计算，还有可能是字符串的拼接，对于减乘除，先转换为number数据类型，然后再进行运算
```
var i="5";
i++;
console.log(i);//====>数字的6

console.log("6"+10);//字符串"610" 字符串的拼接

//  减乘除
"6"/"2" ====>3
"6"-"2" ====>4
"6"*"2" ====>12
```

## 布尔
把其他数据类型转换为布尔
1.Boolean
2.!转换为布尔并取反
3.!!转换为布尔(取反再取反)

把其他数据类型转换为布尔，除了以下几种情况，转换的结果是false，剩余均为true
+ null
+ undefined
+ ""
+ NaN
+ 0

## null 和 undefined的区别
null 是空的对象指针，在不确定一个变量具体数据类型的时候，先赋值为null，后赋具体的值
undefined 表示"缺少值"，此处应该有一个值，但是没有定义，会出现以下场景
1.只声明，没定义
var name;
console.log(name);
2.在获取对象中没有的属性对应的属性值
var obj = {name:"zhangsan"};
console.log(obj.name)
console.log(obj.age)
3.函数里有有形参，但是调用的时候，没有传实参
fn();
function fn(x,y){
  console.log(x,y)
}
4.函数没有设置返回值
function fn(x,y){
  var sum = x+y;
}

var res = fn(1,2);
console.log(res)

_______

# 引用数据类型
## Object 对象数据模型
1.语法
var obj = {
    name:"zhang",
    age:10,
    100:"分数"
}
2.获取属性名对应的属性值的方法
 2.1.对象.属性名
 2.2.对象["属性名"]
注：如果属性名是数字，不能用第一种（语法错误），只能用第二种
在获取时，如果对象中没有这个属性名，则为undefined

console.log(obj.name)
console.log(obj["name"])

// console.log(obj.100);//  语法错误
console.log(obj[100])

var name="xiaozhu";
console.log(obj.name)
console.log(obj["name"])
console.log(obj[name])//====>obj["xiaozhu"]====>undefined
3.基本操作  增删改查
  // 没有属性名，直接赋值就是添加
  // 如果有，又赋值，是更改
  var obj = {name:"zhangsan",age:22}
 3.1增、改
 obj.age=100;//更改
 obj.job="前端开发";//添加

 3.2删除
 obj.name=null;//删除，属性名还在，属性值变为null
 delete obj.age;//彻底删除
 console.log(obj);


## js 运行机制
### 堆栈内存和不同数据类型的操作方式
 1.堆内存
  1.1.主要存放引用数据类型
    1.1.1.对象，存的是属性名和属性值
    1.1.2.函数，存的是字符串
 2.栈内存
  2.1.供js代码运行
  2.2.存基本数据类型的值

### 基本数据类型和引用数据类型的区别
基本数据类型按 `值` 操作
引用数据类型按 `空间地址` 操作
![](https://cdn.nlark.com/yuque/0/2019/png/453629/1576483948551-5b532457-7dd5-496c-bce2-9a287e9c07ee.png)

var obj={
    n:10,
    b:obj.n*10
}
console.log(obj.b);
![](./1.png)

## 操作语句
### 1.if/else if/else
只要满足其中一项，后面的条件就不再执行
1.1.单独一个if
1.2.if/else
1.3.if/else if/else
### 2.判断条件
2.1.&& 表示并且，左右两边条件必须同时满足
2.2.|| 表示或者，左右两边的条件满足其中一项即可
2.3.如果是单独一个值，先转换成boolean类型，如果是true，条件成立，如果是false，条件不成立
  + 0 null undefined "" NaN 均为false
### 3.三元运算符
3.1.条件?条件成立执行的语句：条件不成立执行的语句
`注`：如果执行体有多条语句，用`小括号`包起来，并且语句与语句之间用`逗号`隔开
3.2.特殊情况
`注`：如果只有一个if判断，需要用占位符，如下：
```
var num=5;
num>=5?num++:undefinde;
num>=5?num++:null;
num>=5?num++:void 0;
```
### 4.switch case
4.1.把表达式的值与case的值进行对比
4.2.如果存在匹配，则执行关联代码
```
var num = 5;
switch(num){
  case 4:
    num++;
    break;
  case 5:
    num++;
    break;
  case 6:
    num--;
    break;
  default:
    num=0;
}
```
4.3.switch case中break
switch case 中的break 表示条件终止，如果不加break 的时候，会继续往下执行。

### switch case 和 if else 的区别
1.==  比较，如果数据类型不同，会先转换为相同的数据类型再进行比较
2.=== 绝对比较，数据类型和值都必须相等
  switch case 就是绝对比较(===)

## 检测数据类型的`四种`方式
### typeof详解  返回值一定是字符串
1.typeof
  + "number"
  + "string"
  + "boolean"
  + "undefined"
  + "object"
  + "function"
  特殊记忆：typeof null====>"object"
2.instanceof
3.constructor
4.Object.prototype.toString.call()

