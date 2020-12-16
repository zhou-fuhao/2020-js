function person(name, age, sex) {
    return {
        job: "前端",
        name: name,
        age: age,
        sex: sex
    }
}
var p1 = person("zhangsan", 20, "男");
var p2 = person("wangwu", 31, "女");

console.log(p1);



var arr1=new Array(1, 2, 3);
var arr3=new Array(6);//创建了一个数组长度是6的数组，但每项是空内容
var arr2=[2, 3, 4];
arr3=[1,2,1, 2, 3, 4, 5, 5 ]
console.log(arr3)