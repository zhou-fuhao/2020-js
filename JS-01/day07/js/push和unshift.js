/**
 push：
 • 作用：向数组末尾追加某一项
 • 参数：添加的具体项，可以是一项,也可以是多项
 • 返回值：新数组的长度
 • 是否改变原数组：改变
 */

var arr=[1,2]

var res=arr.push(44,55,[6,7,8],{name:"zhangsan"})
console.log(arr)//  新数组
console.log(res)//  新数组长度

/**
 unshift
 • 作用：向数组开头追加某一项
 • 参数：添加的具体项，可以是一项,也可以是多项
 • 返回值：新数组的长度
 • 是否改变原数组：改变
 */
var arr=[7,8,9];
var res=arr.unshift(5,6);
console.log(arr)
console.log(res)