var str="qazwsxcderfvbgtyhnmjuiklopQAZWSXCDERFVBGTYHNMJUIKLOP1234567890";
var code="";
for (let i = 0; i < 4; i++) {
    var index=Math.round(Math.random()*(str.length-1));
    if(code.indexOf(str[index])!=-1){
        i--;
        continue;
    }
    code+=str[index];
}
console.log(code)