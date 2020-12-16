
var i=0;
var arr = [1,2,3]
for(i;i<arr.length;i++){
    console.log(arr[i])
}


var arr = [7,8,9,10,11,12];
for(var i=arr.length-1;i>=0;i--){ //3
    console.log(arr[i])// 2
}


var arr = [7,8,9,10,11,12];
for(var i=0;i<arr.length;i++){
    if(i%2==0){
        console.log(arr[i])
    }
}


var i = 2;
var b = i++;//先赋值，再自身累加
console.log(b)


var i = 2;
var b = ++i;//先自身累加，再赋值
console.log(b)




for(var i=0;i<10;i++){
    if(i<5){
       i++;//1 2 3 4
       continue;
    }
    if(i>7){
       i+=2;
       break;
    }
    i+=1;
}
console.log(i);



for(var i=1;i<=10;i+=2){
    if(i<=5){//1 4
       i++;//2 5
       continue;
    }else{//7 
       i-=2;//5
       break;
    }
    i--;
    console.log(i);
}
console.log(i);






