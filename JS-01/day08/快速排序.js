var arr=[1,2,3,4,5,6,1,1,1,12,7,8,"9"];
console.log(quickSort(arr));


function quickSort(data){
    //  如果参数长度小于等于1，则直接返回
    if(data.length<=1){
        return data;
    }
    //  中间项的索引
    var centerIndex=Math.floor(data.length/2);
    //  中间项
    var centerValue=data.splice(centerIndex,1)[0];
    //  左盒子、右盒子
    var leftArr=[],rightArr=[];
    for (let i = 0; i < data.length; i++) {
        //  如果小于中间，则存进左盒子，否则，存进右盒子
        if(data[i]<centerValue){
            leftArr.push(data[i]);
        }else{
            rightArr.push(data[i]);
        }
    }
    //  返回 左盒子数组 拼接 中间值和右盒子数组
    return quickSort(leftArr).concat(centerValue, quickSort(rightArr));
}