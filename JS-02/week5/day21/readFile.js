let fs = require('fs');

// 同步获取文件内容，富媒体类型不传第二个参数，其余类型均为utf8格式
// let data = fs.readFileSync('./readFile.txt','utf8');
// console.log(data);

fs.readFile('./readFile.txt', 'utf8', (err, data) => {
    if(err){
        return console.log(err);
    }
    console.log(data);
});