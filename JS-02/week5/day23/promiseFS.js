const fs = require('fs');
const path = require('path');
const obj = {}

function handleSuffix(pathname) {
    let encoding = 'utf8';
    let suffixReg = /\.([a-zA-Z0-9]+)$/;
    let suffix = suffixReg.exec(pathname) && suffixReg.exec(pathname)[1];

    if (/^(png|jpg|jpeg|gif|svg|mp3|mp4)$/i.test(suffix)) {
        // 如果当前的if成立，那就说明当前读取的文件是富媒体资源
        encoding = null;
    };
    return encoding;
}

//--------------------------------------------
// 利用数组和forEach往obj里新增方法
['readFile', 'readdir', 'mkdir', 'rmdir', 'unlink'].forEach(item => {
    obj[item] = function (pathname) {
        return new Promise((resolve, reject) => {
            pathname = path.resolve(pathname);
            let resSuffix = handleSuffix(pathname);

            function callback(err, res) {
                if (err !== null) {
                    reject(err);
                    return;
                }
                resolve(res);
            }
            // 如果当前是readFile的话，那函数执行的时候传递三个参数
            // 如果不是readFile，那函数执行的时候只需要传递两个参数，第一个是路径 ，第二个是回调函数
            //------------------------------------
            // 第一种解决办法
            // if(item == 'readFile'){
            //   fs[item](pathname,resSuffix,callback);
            // }
            // else {
            //   fs[item](pathname,callback);
            // }
            //------------------------------------------
            // 第二种解决办法
            // 'readdir'
            if (item !== 'readFile') {
                // 如果当前不是readFile的话，把就把resSuffix的值变成回调函数放到第二个形参的位置
                resSuffix = callback;
                callback = null;
            }
            // fs.readFile(pathname,resSuffix,()=>{})
            fs[item](pathname, resSuffix, callback);
        });
    }
});

['writeFile', 'appendFile'].forEach(item => {
    obj[item] = function (pathname, content) {
        return new Promise((resolve, reject) => {
            pathname = path.resolve(pathname);
            let resSuffix = handleSuffix(pathname);

            function callback(err, res) {
                if (err !== null) {
                    reject(err);
                    return;
                }
                resolve(res);
            }
            content && typeof content == 'object' ? content = JSON.stringify(content) : null;
            typeof content !== 'object' ? content = content + '' : null;
            fs[item](pathname, content, resSuffix, callback)
        })
    }
});

obj['copyFile'] = function (pathname1, pathname2) {
    return new Promise((resolve, reject) => {
        pathname1 = path.resolve(pathname1);
        pathname2 = path.resolve(pathname2);

        function callback(err, res) {
            if (err !== null) {
                reject(err);
                return;
            }
            resolve(res);
        }
        fs['copyFile'](pathname1, pathname2, callback)
    })
}

// fs.writeFile('./A.txt',{name:1,age:2},'utf8',()=>{})
// writeFile('./A.txt',true,'utf8',()=>{})
module.exports = obj;