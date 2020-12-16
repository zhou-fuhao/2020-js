var arr=[1,2,3,4,5,6,1,1,1,2,7,8];
console.log(unique(arr));

function unique(data){
    for (let i = 0; i < data.length-1; i++) {
        for (let j = 0; j < data.length-1-i; j++) {
            if(data[j]<data[j+1]){
                var item=data[j];
                data[j]=data[j+1];
                data[j+1]=item;
            }
        }
    }
    return data;
}