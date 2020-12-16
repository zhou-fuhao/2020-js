var arr=[1,2,3,4,5,6,7,1,1,1,2,7,9,8];
console.log(quickSort(arr));

function quickSort(aa){
    var data=[];
    for (let j = 0; j < aa.length; j++) {
        if(data.indexOf(aa[j])==-1){
            data.push(aa[j])
        }
    }

    if(data.length<=1){
        return data;
    }
    var centerIndex=Math.floor(data.length/2);
    var centerValue=data.splice(centerIndex,1)[0];
    var leftArr=[],rightArr=[];
  
    for (let i = 0; i < data.length; i++) {
        if(centerValue>data[i]){
            leftArr.push(data[i])
        }else{
            rightArr.push(data[i])
        }
    }
    return quickSort(leftArr).concat(centerValue, quickSort(rightArr))
}