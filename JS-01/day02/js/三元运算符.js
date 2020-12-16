/*
    语法
    条件?条件成立执行的语句:条件不成立执行的语句
*/

var num = 2;
num > 5 ? num++ : num--;
console.log(num)

/*
    特殊情况
*/
var num = 2;
num > 1 ? num++ : null;
num > 1 ? num++ : undefined;
num > 1 ? num++ : void 0;


/*
    多条语句
*/
var num = 5;
var str = 2;
num > 8 ? (num++, str--) : null;



var num = 12;
if (num > 0) {
    if (num < 10) {
        num++;
    } else {
        num--;
    }
} else {
    if (num == 0) {
        num++;
        num = num / 10;
    }
}
console.log(num)

var num = 12;
console.log(num>0?(num<10?num++:num--):null)
console.log(num>0?(num<10?num++:num--):(num==0?(num++,num= num/10):null))