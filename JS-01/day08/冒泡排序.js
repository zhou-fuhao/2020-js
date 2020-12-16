var arr=[1,2,3,4,5,6,1,1,1,12,7,8,"9"];
console.log(bubbleSort(arr));

function bubbleSort(data){
    //  轮数
    for (let i = 0; i < data.length-1; i++) {
        //  两两比较
        for (let j = 0; j < data.length-1-i; j++) {
            //  当前项比下一项大，则互换位置
            if(data[j]>data[j+1]){
                //  临时存储data[j]的值
                var temp=data[j];
                data[j]=data[j+1];
                data[j+1]=temp;
            }
        }
    }
    return data;
}