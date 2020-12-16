var arr=[1,2,3,4,5,"6px","7"];
console.log(sum(arr));

function sum(data){
	var total=0;
	for(var i=0;i<data.length;i++){
		if(!isNaN(data[i])){
			total+=Number(data[i]);
		}
	}
	return total;
}



var sum=0;
for(var i=1;i<=100;i++){
	if(i%5==0&&i%3==0){
		sum+=i;
	}
}
console.log(sum)



function getCode(data){
	var code="";
	for(var i=0;i<4;i++){
        var index=Math.round(Math.random()*(data.length-1));
		if(code.indexOf(data[index])!=-1){
			i--;
			continue;
		}
		code+=data[index];
	}
	return code;
}

var obj=[{name:"zhangsan",age:22}]
for (var key in obj){
    var value=obj[key];
    console.log("key："+key+"value："+value);
}



var str="1234567890";
console.log(getCode(str));



var arr=[1,2,3,4]
console.log(arr.toString())

// typeof
// instanceof
// constructor
// Object.prototype.toString.call()

var arr=[1,2,3,1,2,"3px","4"];
var sum=0;
for(var i=0;i<arr.length;i++){
    if(!isNaN(arr[i])){
        sum+=Number(arr[i]);
    }
}
console.log(sum);


var str="http://www.baidu.com?name=lili&age=20";
var rightArr=str.split("?")[1];
var user=rightArr.split("&");
var obj={};
for (let i = 0; i < user.length; i++) {
	var index=user[i].split("=");
	obj[index[0]]=index[1];
}
console.log(obj);



Math.floor(Math.random()*(m-n)+m)



