var str="www.baidu.com?name=张三&sex=男&age=22";
var behind=str.split("?")[1];

var user=behind.split("&");
var obj={};
for(var i=0;i<user.length;i++){
    var item=user[i].split("=");
    obj[item[0]]=item[1];
}

console.log(obj)