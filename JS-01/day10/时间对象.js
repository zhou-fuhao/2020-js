var data=new Date();

console.log(data.getFullYear());//==>获取年
console.log(data.getMonth());//==>获取月 0到11 代表1月到12月
console.log(data.getDate());//==>获取日期
console.log(data.getDay());//==>星期几 （0---6）代表周日到到周六
console.log(data.getHours());//==>时
console.log(data.getMinutes());//==>分
console.log(data.getSeconds());//==>秒
console.log(data.getMilliseconds());//==>毫秒
console.log(data.getTime());//==>获取当前日期到1970年1月1号 00：00:00 之间的毫秒差
console.log(data.toLocaleString());//==> 获取到的是年月日，时分秒"2019/12/25 上午10:15:50"
console.log(data.toLocaleDateString());//==>  获取到是字符串的年月日，例如："2019/12/25"
console.log(data.toLocaleTimeString());//==> 获取到的是字符串的时分秒上午10:18:28



