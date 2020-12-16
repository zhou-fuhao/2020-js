[toc]

## 操作语句之for循环

### 1.应用环境
当需要按照某种规律重复的去一件事情的时候，就需要用for循环
### 2.基础语法
+ 定义初始值
+ 制定循环条件，只要条件成立就会执行循环体中的内容
+ 定义的初始值累计操作
+ 循环体(大括号就是循环体)
```
for(初始值的索引; 循环的条件; 递增或递减的方法){
    输出
}
```
1.从前到后依次打印
```
//  从前到后依次打印
var arr = [1,3,5];
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}
```
2.从后到前依次打印
```
var arr = [7,8,9,10];
for(var i=arr.length-1;i>=0;i--){
    console.log(arr[i])
}
```
3.打印所有奇数
打印所有的奇数项，其实就是打印下标为偶数的项
```
var arr = [7,8,9,10,11,12];
for(var i=0;i<arr.length;i++){
    //  取余
    if(i%2==0){
        console.log(arr[i])
    }
}
```
`注：`
```
i++;  ++i;
无论是i++ 还是++i 最终的 i 值都是加了1
var b=++i; 加号在前，先自身累加，然后再赋值给b，也就是3
var b=i++; 加号在后，先赋值（b就是2），再自身累加
var i = 2;
var b = i++;
var b = ++i;

console.log(b)
```
### 3.两个重要的关键词
+ continue：结束本次循环，继续下一轮循环
+ break：强制结束整个循环

## 开关灯案例
### 相关知识
1.元素包含的常用属性
+ className：存储的是字符串，代表当前元素的类名
+ id：存储的是字符串，代表当前元素的id名
+ innerText：存储当前元素的`文本内容`
+ innerHTML：存储当前元素的`所有内容，包括标签`
+ style：存储当前元素的所有行内样式
+ onclick：点击事件
+ onmouseover：鼠标滑上事件
+ onmouseout：鼠标离开事件

2.通过id获取一个元素，document.getElementById("id的名字");
```
<div id="name" class="name">张三</div>

var name=document.getElementById("name");
console.log(name)
```
3.通过标签名获取一类标签，document.getElementsByTagName("标签名");
```
<ul id="box1"><li>1</li><li>2</li></ul>
var olis=document.getElementsByTagName("li"); // 获取文档中左右的li标签

var box1=document.getElementById("box1");
var lis=box1.getElementsByTagName("li");// 获取box1 下面所有的li元素
```
4.通过style属性添加或者修改元素的样式
```
var Obox1=document.getElementById("box1");
Obox1.style.backgroundColor="pink";
```
5.给元素添加类名
```
<div id="box1"></div>
var Obox1=document.getElementById("box1");
Obox1.className="current";
```
`鼠标滑过，背景色改变原来颜色`
```
// 把原来的元素存放在这个元素身上
this.oldColor=this.style.backgroundColor;
```
___

