var arr=[1,2,3,4,5,6,1,1,1,12,7,8];
console.log(unique(arr.sort(function(m,n){
    return m-n;
})));
function unique(data){
    for (let i = 0; i < data.length-1; i++) {
        for (let j = i+1; j < data.length; j++) {
            if(data[i]==data[j]){
                data.splice(j,1);
                j--;
            }
        }
    }
    return data;
}


var arr=[1,2,3,4,5,6,1,1,1,12,7,8];
console.log(unique(arr.sort(function(m,n){
    return m-n;
})));
function unique(data){
    var newArr=[];
    for (let i = 0; i < data.length; i++) {
        if(newArr.indexOf(data[i])==-1){
            newArr.push(data[i]);
        }
    }
    return newArr;
}


var arr=[1,2,3,4,5,6,1,1,1,12,7,8];
console.log(unique(arr.sort(function(m,n){
    return m-n;
})));
function unique(data){
    var obj={};
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