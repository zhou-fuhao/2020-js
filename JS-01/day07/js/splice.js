/**
 splice：
• 作用：删除/新增/修改
• 参数：splice（n,m,...x） ;完整的写法，第一个参数代表从哪个索引开始，删除m项，把删除的内容用x进行替换
• 返回值：是一个数组，里面是删除的每一项
• 是否改变原数组：是
 */
var arr=[1,2,3,4,7,8,9]
var res=arr.splice(4,6,5,6,7)
console.log(arr)
console.log(res)


var arr=[1,2,3,4,5]
var res=arr.unshift(0)
console.log(arr)

var arr=[2,3,4]
var res=arr.splice(0,0,1,2)
console.log(arr)




var arr=[1,2,3,4,7,8,5,6]
var res=arr.splice(4,5)
console.log(arr)



var arr=[1,2,3,4,5]
// var res = arr.splice(1,10)
// console.log(res)
// console.log(arr)
var aa = arr.concat(6,7,8,[9,10],"11")
console.log(aa)


var arr=[1,2,3,4]
console.log(arr.join(""))


var arr=[1,2,5,2,3,6,11,23]
var res=arr.reverse(function(m,n){
    return m-n;
});
console.log(res)


var res=arr.sort(function(m,n){
    return m-n;
});
console.log(res);//1,2,2,3,5



var arr=[1,2,3,4,1,2,3]
var res=arr.indexOf(1,3);//检索1，从下标3位置开始
console.log(res);//4


var arr=[1,2,3,4,1,2,3]
var res=arr.lastIndexOf(1,5);//检索1，从下标5位置结束
console.log(res);//4


var arr=[1,2,3,4,5,6]
var res=arr.includes(11)
console.log(res)


var arr=[1,2,3];
var ss = arr.forEach(function(item,index){
    // item 每一项的具体值
    // index 每一项的索引
    var a="item:"+item+"--index:"+index;
    console.log(a)

    return a;
    // console.log("item:"+item+"--index:"+index);
})
console.log(ss)



var ary3=[1,2,3];
var res=ary3.map((item,index)=>{
   return item+"--------"+index;
})
console.log(res)
//[ '1index', '2index', '3index' ]

