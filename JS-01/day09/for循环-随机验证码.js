var random="abcdefghijkhmnopqrstuvwxyzABCDEFGHIJKHMNOPQRSTUVWXYZ123456789";

var numLength=4;
// 随机验证码
var code="";

for (let i = 0; i < numLength; i++) {
    //  Math.random()*61  [0 - 61]
    var index = Math.round(Math.random()*61);
    // 生成不重复的验证码
    if(code.indexOf(random[index])!=-1){
        i--;
        continue;
    }
    code += random[index];
}
console.log(code)

