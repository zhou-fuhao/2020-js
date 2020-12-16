(function(){
    console.log(1)
}())




var res=function(m,n){
    return m+n;
}
console.log(res(2,3));

// 可以省去function
var res=(m,n)=>{
    return m+n;
}
console.log(res(2,6))

// 如果只有一个形参，小括号也可以省去
var res=(m,n)=>m+n;
console.log(res(6,3))

// 如果执行体里中return了一句代码，函数体的{}也可以省去
var res=m=>m;
console.log(res(22))


var res=(m,n)=>m*n;
console.log(res(4,3))

function sum(m,n){
    return m+n;
}
console.log(sum(2,3))


function sum(){
    var total=0;
    for(var i=0;i<arguments.length;i++){
        total+=arguments[i]
    }
    return total;
}
console.log(sum(1,2,3,4,5))



function sum(){
    var total=0;
    for (var ii = 0; ii < arguments.length; ii++) {
        if(!isNaN(arguments[ii])){
            total+=parseFloat(arguments[ii])
        }
    }
    return total;
}
console.log(sum("1.9",3,4,6,8,"11px","12"))


function sum(){
    console.log(arguments)
}
sum(1,2,3,5)


function fn(){
    return;
}
console.log(fn())