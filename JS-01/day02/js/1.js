
// var name=null;
// var name;



// name="zhang";
// // name="zhangsan"
// console.log(name)

// var obj = {name:"张三"}
// console.log(obj.age)
// console.log(obj)



// function fn(m,n){
//     console.log(m+n);
// }
// fn();
// window.onload=function(){
//     // var str = document.getElementById("box")
//     // alert(str)
//     // console.log(str)

//     var str = confirm("are you ready?!")
//     console.log(str)

//     // var str = prompt("男孩or女孩？");
//     // console.log(str)
// }

var obj = {name:"张三", age:20}
obj.age=100;
console.log(obj);

obj.job="前端开发";
console.log(obj);

delete obj.age;
obj.age=null;
console.log(obj);



var num = -12;
num>=0?num++:(num<10?num--:num/10);
console.log(num)

if(num>0){
    console.log("num现在已经大于0了")
} else {
    console.log("num现在不大于0")
}


var str = "1";
if(str>2){
    console.log("大于2嘛？")
}else if(str>0 && str<2){
    console.log("0-2之间")
}else{
    console.log("小于0了")
}

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
console.log(num)