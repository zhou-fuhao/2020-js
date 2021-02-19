// 一、
// 1.
console.log(f1.getX === f2.getX);//false
console.log(f1.getY === f2.getY);//true
console.log(f1.__proto__.getY === Fn.prototype.getY);//true
console.log(Fn.prototype.getX === f2.getX);//false
console.log(f1.constructor);//Object函数
f1.getX();//10
Fn.prototype.getX();//NaN
f2.getY();//-1
Fn.prototype.getY();//NaN
f1.sum();//报错 f1.sum is not a function

// 2.
A.call(B, 10);//1 undefined
A.call.call.call(B);
Function.prototype.call(B);
Function.prototype.call.call.call(B);

// 3.
fn();//WINDOW
obj.fn();//WINDOW
fn.call(obj);//OBJ
window.onload = function () { //页面加载完成，事件就会触发
    fn();//WINDOW
    obj.fn();//WINDOW
};
fn.bind(obj);//无值

// 4.
print();//1
Fn.print();//5
Fn().print();//2
new Fn.print();//5
new Fn().print();//2

// 二、
// 1.
let 和 const
解构赋值
箭头函数
扩展运算符
类

// 2.


// 3.
function unique1(data) {
    for (let i = 0; i < data.length + 1; i++) {
        for (let j = i + 1; j < data.length; j++) {
            if (data[i] == data[j]) {
                data.splice(j, 1);
                j--;
            }
        }
    }
    return data;
}

function unique2(data) {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        if (arr.indexOf(data[i]) == -1) {
            arr.push(data[i]);
        }
    }
    return arr;
}
let ary = [12, 23, 12, 13, 13, 12, 23, 14, 8];
console.log(unique1(ary).sort(function (m, n) { return m - n }));
console.log(unique2(ary).sort(function (m, n) { return m - n }));


// 4.
Function.prototype.changeThis = function changeThis(data, ...arg) {
    //=>实现你的代码 
    data = data || window;
    var result = null;
    data.item = this;
    result = data.item(...arg);
    delete data.item;
    return result;
};
let obj = {
    name: 'Alibaba'
};

function fn(x, y) {
    this.total = x + y;
    return this;
}
let res = fn.changeThis(obj, 100, 200); //res => {name:'Alibaba',total:300} 
console.log(res);

// 5.
let arr = [1, 3, 4, 2, 5, 7, 6];
console.log(Math.max(...arr));
console.log(arr.sort(function (m, n) { return m - n; })[arr.length - 1]);
for (let j = 0; j < arr.length; j++) {
    if (arr[j] > arr[j + 1]) {
        let item = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = item;
    }
}
console.log(arr.length);


// 6.
let utils = (function () {
    function toArray() {
        //实现你的代码    
        let newArr = [];
        for (let i = 0; i < arguments.length; i++) {
            newArr.push(arguments[i]);
        }
        return newArr;
    };

    return {
        toArray
    };
})();
let ary = utils.toArray(10, 20, 30);
console.log(ary);
// ary=[10,20,30] 
ary = utils.toArray('A', 10, 20, 30);
// ary=['A',10,20,30]
console.log(ary);


// 拓展题
// 数组扁平化
// [1,2,3,4,5,6,7,8,9,0]

function newArr(data) {
    let strArr = data.toString();
    let nowArr = strArr.split(",");
    return nowArr;
}
let ary = [1, 2, 3, [4, 5, 6, [7, 8, [9, 0]]]];
console.log(newArr(ary));


let ary = [1, 2, 3, [4, 5, 6, [7, 8, [9, 0]]]];
let reg = /([\d+])/g;
let str = reg.exec(ary).input;
console.log(str.split(","));
