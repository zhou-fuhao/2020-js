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
var aa=ss[0].split("-");
var bb=ss[1].split(":");
var arr=["年","月","日"]
var temp=[];
for(var i=0;i<aa.length;i++){
    temp.push(aa[i]+arr[i]);
}
console.log(temp);

console.log(aa[0]+"年"+aa[1]+"月"+aa[2]+"日"+" "+bb[0]+"时"+bb[1]+"分"+bb[2]+"秒")
// console.log(bb[0]+"时"+bb[1]+"分"+bb[2]+"秒")