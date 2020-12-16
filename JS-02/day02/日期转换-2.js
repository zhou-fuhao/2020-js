let str = "2020-12-8";

String.prototype.TimeFormat = function (template = "{0}年{1}月{2}日 {3}时{4}分{5}秒") {
    let reg = /\d+/g;// 拿到所有的时间
    let timeArr = this.match(reg);
    // [ '2020', '12', '8', '12', '22', '09' ]
    // let template = "{0}年{1}月{2}日 {3}时{4}分{5}秒";
    let reg2 = /\{(\d)\}/g;// 检测模板的规则
    template = template.replace(reg2, (...arg) => {
        let [, index] = arg;
        let time = timeArr[index] || "00";
        time = time.length < 2 ? "0" + time : time;
        return time;
    });
    return template;
}
let res = str.TimeFormat("{0}年{1}月{2}日 {3}时{4}分{5}秒");
console.log(res);