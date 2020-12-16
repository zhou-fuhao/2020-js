var str="zhu";
console.log(str.charCodeAt(0));


var str="zhangsan";
var res=str.substring(-1,10);
console.log(res)



var str="zhufengpeixun"

// console.log(str.slice(1,3))     //===>"hu"
// console.log(str.slice(-3,-1))   //===>"xu"

// console.log(str.substring(1,3))     //===>"hu"
// console.log(str.substring(-3,-1))   //===>没有返回值

console.log(str.substr(1,3))     //===>"hu"
console.log(str.substr(-3,-1))   //===>没有返回值

console.log(str.replace("u","123"))



var str="zhangsan";
var res=str.replace(/an/g, "你好");
console.log(res);


var str="10，20，30";
var res=str.split("，");
console.log(res);// ["10","20","30"]

var str="ZHANGSAN";
console.log(str.toLowerCase())


var nowDate="2020-11-17 15:10:33";
var ss=nowDate.split(" ");
var left=ss[0].split("-");
var right=ss[1].split(":");

var leftArr=["年","月","日"]
var rightArr=["时","分","秒"]
var leftTemp="";
var rightTemp="";
for(var i=0;i<left.length;i++){
    leftTemp+=left[i]+leftArr[i];
    rightTemp+=right[i]+rightArr[i];
}
console.log(leftTemp+" "+rightTemp);

console.log(left[0]+"年"+left[1]+"月"+left[2]+"日"+" "+right[0]+"时"+right[1]+"分"+right[2]+"秒")





var str="https://www.baidu.com?name=zhufeng&age=10&id=14";
var rightStr=str.split("?");
var newStr=rightStr[1].split("&");
var obj={};
for (let i = 0; i < newStr.length; i++) {
    var item=newStr[i];
    var ss=item.split("=");
    obj[ss[0]]=ss[1];
}
console.log(obj)
