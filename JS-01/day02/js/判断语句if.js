// 单独一个if
var num = 10;
if (num > 5) {
    console.log("这个值已经超过5啦。")
}

// if else
var num = -10;
if (num > 0) {
    console.log("这个值已经超过0啦。")
} else {
    console.log("当前值小于0。")
}

// if/else if/else
var num = -100;
if (num > 0) {
    console.log("正数")
} else if (num < 0) {
    console.log("负数")
} else {
    console.log(0)
}

// if/else if.../if
var num = 80;
if (num < 0) {
    console.log("负数")
} else if (num > 70 && num < 90) {
    console.log("在70 - 90之间")
} else {
    console.log("很棒，已经超过100")
}

//  如果是单独的一个值，先转换为Boolean类型，如果是true，条件成立，如果是false，条件不成立
if (false) {
    console.log("去刷剧")
} else {
    console.log("去睡觉")
}

var str1 = "10";
var num1 = -10;
if(str1=num1){
    console.log("'10'=10")
}else{
    console.log("aaaaaa")
}