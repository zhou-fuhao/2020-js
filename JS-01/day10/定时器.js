var time1=setTimeout(function(){
    console.log("hello world！");
}, 1000);

console.log("先行一步。");

num=0;
var time2=setInterval(function(){
    num++;
    if(num>10){
        // 清除定时器的方法
        clearInterval(time2);
        time2=null;
    }
}, 1000);



var time1=setTimeout(function(){
    console.log("aa");
},1000);

// var time2=setInterval(function(){
//     console.log("bb")
// }, 1000);

var time3=setTimeout(function(){
    console.log("cc");
}, 1100);

console.log(time1, time3);