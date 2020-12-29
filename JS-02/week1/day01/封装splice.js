var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//使用js实现splice方法，写的比较粗糙，对参数判断不够细腻
function jsSplice() {
    var index = arguments[0];
    var num = arguments[1];
    var len = arguments.length;
    var result = [], content = [];
    //删除
    if (len == 2) {
        result = arr.slice(0, index).concat(arr.slice(index + num, arr.length));
        console.log(result)
    } else if (len > 2) {
        for (var i = 2; i < len; i++) {
            content.push(arguments[i]);
        }
        //插入
        if (num == 0) {
            result = arr.slice(0, index).concat(content, arr.slice(index, arr.length));
            console.log(result);
            //替换
        } else if (num > 0) {
            result = arr.slice(0, index).concat(content, arr.slice(index + num, arr.length));
            console.log(result);
        }

        //参数个数不对，返回原数组
    } else {
        console.log(arr)
    }
}
//删除第二项
jsSplice(1,1);
//在数组第二项插入两项100,200
jsSplice(1,0,100,200);
//把数组第二项替换为三项值为：1000,2000,3000
jsSplice(1, 1, 1000, 2000, 3000);

