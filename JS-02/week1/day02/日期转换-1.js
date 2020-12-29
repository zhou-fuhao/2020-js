
// let time = "2020-12-08";
// let reg = /(\d{4})-(\d{2})-(\d{2})/;
// let res = time.replace(reg, function ($1, $2, $3, $4) {
//     // console.log($1,$2,$3,$4);
//     return $2+"年"+$4+"月"+$4+"日";
// });
// console.log(res);




// let time = "2020-12-10";
let time = "2020-8-8";
let reg = /(\d{4})-(\d{1,2})-(\d{1,2})/;
let res = time.replace(reg, function (...ary) {
    // console.log(...ary);
    ary[2] = ary[2].length < 2 ? "0" + ary[2] : ary[2];
    ary[3] = ary[3].length < 2 ? "0" + ary[3] : ary[3];
    return ary[1] + "年" + ary[2] + "月" + ary[3] + "日";
});
console.log(res);