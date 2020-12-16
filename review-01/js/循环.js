// for循环从前向后依次打印
for (var i = 0; i < 10; i++) {
    console.log(i)
}

// for循环从后向前依次打印
for (var i = 10; i > 0; i--) {
    console.log(i)
}

// for循环数组打印
var arr = [1,2,3,4,5,6,7]
for(var i=0;i<arr.length;i++){
    console.log(arr[i])
}

var arr = ["a","b","c","d"]
for (var i = arr.length-1; i >= 0; i--) {
    console.log(arr[i])
}

var arr = [1,2,3,4,5,6,6,5,4,8,9,11];
for(var i=0;i<arr.length;i++){
    if(arr[i]%2==0){
        console.log("偶数为："+arr[i])
    }
}

console.log(316*417+3+undefined)

let ary = ['erYa', '珠峰', '培训', true, false];
for (var i = 0; i <ary.length; i++) {
    console.log(ary[i]);
    break;
}
console.log(i);


for (var i = 10; i > 0; i--) {
    continue;
    console.log(i);
}
console.log(i);

for (var i = 1; i <= 10; i += 2) {
    if (i <= 5) {
        i++;
        continue;
    } else {
        i -= 2;
        break;
    }
    i--;
    console.log(i);
}
console.log(i);



for (var i = 3; i < 12; i++) {
    if (i < 3) {
        i++;
        break;
    }
    if (i > 9) {
        i += 2;
        continue;
    }
    i--;    
}
console.log(i);



var i=2;
console.log(++i + i++);

console.log(++i);


console.log(i++ == ++i) ;


console.log(++i == i++);
console.log(i);



// for in 循环
var obj = {name:"zhang",school:"zf"}
for (var key in obj) {
    var value = obj[key];
    console.log(key+"："+value)
}

// while循环
var num = 10;
while(num>"6"){
    console.log(num)
    break;
}

var num = 10;
do{
    console.log(num)
    break;
}while(num>4)


var fn=(...arg)=>{
    var sum = 0;
    for (let i = 0; i < arg.length; i++) {
        if(!isNaN(arg[i])){
            sum+=Number(arg[i])
        }
    }
    return sum;
}
console.log(fn(1,2,3,34,5,"12","3m"))