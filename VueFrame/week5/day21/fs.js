let fs = require('fs')
// fs内置模块模块给予了js在node环境下能够对本地的文件进行I/O操作的能力

//--------------------------------------
// 1、readdir
// 读取指定的目录

// 同步的读取指定的目录(既可以按照相对路径读取，还可以按照绝对路径进行读取)
// let res = fs.readdirSync('./'); // 相对路径读取
// let res = fs.readdirSync('F:/'); // 绝对路径读取
// console.log(res);

// 异步读取目录
// fs.readdir('./',(err,res)=>{
//   // 当前的目录读取完成，那此时的回调函数就会执行
//   // 回调函数可以传递两个参数，第一个参数是(如果读取错误，err就是错误的信息，如果读取成功，那res就是读取后的目录)
//   console.log(err,15); // 如果没有错误，那err的值就是null
//   console.log(res,16); // res的值就是读取到的目录
//   // 如果当前的读取是失败的，那err就是失败的信息，res的值就是undefined
// });
// console.log(100);

//-----------------------------------------------------
// 2、readFile
// 读取文件
// 当读取文件的时候，默认读取的格式是Buffer文件流的格式
// 如果读取的文件是富媒体资源，那就不需要转格式(就使用Buffer文件流进行传输)【因为富媒体资源不能用utf8格式进行解析】
// 如果不是富媒体资源，那就给他编译成utf8的格式(得到的就是字符串格式)

// let res = fs.readFileSync('./apple.jpg'); // 这是乱码
// let res = fs.readFileSync('./1.html'); // 这是字符串
// console.log(res);

// 异步读取文件的内容
// fs.readFile('./1.html','utf8',(err,res)=>{
//   // err是错误信息
//   // res是读取到的文件内容
//   if(err !==null){
//       return;
//   }
//   console.log(res);
// });

//---------------------------------------
// writeFile 
// 想文件中写入内容而且是覆盖性的写入(把原来的进行替换)
// 如果当前路径里的文件不存在，那就会重新创建一个文件进行写入

// let res = fs.writeFileSync('./A.txt','hello world','utf8');
// fs.writeFileSync('./js/B.txt','hello world','utf8'); // 如果使用同步的方式去写入的时候，文件的路径不对，那此时就会报错
// console.log(res);


// try {
//     // 当写入文件出错的时候只想输出错误信息，不想报错，可以拿try catch包裹一下

//     fs.writeFileSync('./js/B.txt', 'hello world', 'utf8');

// } catch (error) {
//     console.log(error);
// }


// fs.writeFile('./js/A.txt', 'aaaaaaa', 'utf8', (err, res) => {
//     console.log(err, 53);
//     console.log(res, 54);
// });

// fs.appendFile('./A.txt','zhenchao','utf8',()=>{}); // 追加，在原来的基础之上进行写入

// fs.rmdir 删除指定的目录
// 如果当前要删除的目录里边有东西，那不让你删
// fs.rmdir('./js',(err)=>{
//   console.log(err);
// })

// fs.unlink ; // 删除指定的文件

// 先把js目录中的1.txt删除，当删除完成之后在删除外边的js目录
// fs.unlink('./js/1.txt', () => {
//   fs.rmdir('./js', (err) => {
//     console.log(err);
//   });
// })

// fs.mkdir('./ss',()=>{})



// 对于目录的操作
// readdir  mkdir rmdir

// 对文件的操作
// readFile  writeFile/appendFile unlink