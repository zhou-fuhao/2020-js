
// 方法一。1    依次比较数组中所有重复的
function unique(data){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] == arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}
var arr=[1,1,1,1,2,6,5,2,3,1,3]
console.log(unique(arr.sort(function(m,n){
    return m-n;
})));
// 方法一。2
function unique(data){
    for (let i = 0; i < arr.length-1; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if(arr[i] == arr[j]){
                arr.splice(j,1);
                j--;
            }
        }
    }
    return arr;
}
var arr=[1,1,1,1,2,6,5,2,3,1,3]
console.log(unique(arr.sort(function(m,n){
    return m-n;
})));


// 创建一个空对象，没有就添加
function unique(){
    console.log(data)
    var obj={}
    for (let i = 0; i < data.length; i++) {
        if(obj[data[i]]==data[i]){
            data.splice(i,1);
            i--;
            continue;
        }
        obj[data[i]]=data[i];
    }
    return data;
}
var data=[1,1,1,1,2,6,5,2,3,1,3];
console.log(unique(data));

// 创建新数组，没有就push
function unique(data){
    var newArr=[];
    for (let i = 0; i < data.length; i++) {
        if(newArr.indexOf(data[i])==-1){
            newArr.push(data[i]);
        }
    }
    return newArr;
}
var data=[1,1,1,1,2,6,5,2,3,1,3];
console.log(unique(data));
