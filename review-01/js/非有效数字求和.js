var arr=[1,2,3,4,"5","6px","-2"];
console.log(sum(arr));

function sum(data){
    var total=0;
    for (let i = 0; i < data.length; i++) {
        if(!isNaN(data[i])){
            total+=Number(data[i]);
        }
    }
    return total;
}

var arr=[1,2,3,4,"5","6.3","6.9px"];

for (let i = 0; i < arr.length; i++) {
    var sum=0;
    if(!isNaN(arr[i])){
        sum+=Number(arr[i]);
    }
    return sum;
}

function sum(){
    var sum=0;
    for (let i = 0; i < arguments.length; i++) {
        if(!isNaN(arguments[i])){
            sum+=Number(arguments[i]);
        }
    }
    return sum;
}
console.log(sum(1,2,3,4,"5","6.3","6.9px"))

