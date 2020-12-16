var url="http://www.baidu.com?name=张三&age=26&job=前端";

var behind=url.split("?")[1];
var user=behind.split("&");
var obj={};
for (let i = 0; i < user.length; i++) {
    var item=user[i].split("=");
    obj[item[0]]=item[1];
}
console.log(obj)