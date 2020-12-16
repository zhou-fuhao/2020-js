var random="abcdefghijkhmnopqrstuvwxyzABCDEFGHIJKHMNOPQRSTUVWXYZ123456789";
var code="";

while(code.length<4){
    //  Math.random()*61  [0 - 61]
    var index = Math.round(Math.random()*61);
    // 生成不重复的验证码
    if(code.indexOf([index])==-1){
        code += random[index]
        continue;
    }
    // code += random[index];
}

console.log(code)