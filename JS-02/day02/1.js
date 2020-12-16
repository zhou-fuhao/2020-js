let str = "abc123edf456hij789klmn";
let reg = /\d{3}/g;

// console.dir(reg.lastIndex);
// console.log(reg.exec(str));

// console.dir(reg.lastIndex);
// console.log(reg.exec(str));

// console.dir(reg.lastIndex);
// console.log(reg.exec(str));

// console.dir(reg.lastIndex);
// console.log(reg.exec(str));

// console.dir(reg.lastIndex);
// console.log(reg.exec(str));


// 封装一个方法，把当前字符串里所有符合规则的内容全部捕获到，并以数组的形式返回
RegExp.prototype.MyExec = function (data) {
    // 正则身上有一个global属性，如果当前正则有g，返回值就是true，反之就是false
    // 如果用户的正则没有加g，那就捕获一次直接return出去
    if (!this.global) {
        return this.exec(data);
    }

    let newArr = [];
    // this 就是当前的 reg
    let res = this.exec(data);
    while (res) {
        newArr.push(res[0]);// 把捕获的内容放到新数组
        res = this.exec(data)
    }

    return newArr.length ? newArr : null;
}
let res = reg.MyExec(str);
console.log(res);
console.log(str.match(reg));


let str = "2020";
let reg = /\d+?/g;
console.log(str.match(reg));



let time = "2020-12-08";
let reg = /(\d{4})-(\d{2})-(\d{2})/;
let res = time.replace(reg, function () {

})