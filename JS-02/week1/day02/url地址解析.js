let str = "http://www.baidu.com?name=zhangsan&age=20&sex=1#index";

String.prototype.queryUrlParams = function () {
    let reg1 = /([^?=&#]+)=([^?=&#]+)/g;//name=zhangsan&age=20&sex=1
    let reg2 = /([^?=&#]+)/g;//#index

    let obj = {};
    this.replace(reg1, (...arg) => {
        console.log(arg);
        obj[arg[1]] = arg[2];
    });
    this.replace(reg2, (...arg) => {
        obj["hash"] = arg[1];
    });
    return obj;
}
console.log(
    str.queryUrlParams()
);