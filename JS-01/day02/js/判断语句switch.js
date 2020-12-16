/**
 * 把表达式的值与每个case的值进行对比
 */
var num = 10;
switch(num){
    case 12:
        num++;
        break;
    case 10:
        num++;
        break;
    case 8:
        num++;
        break;
    default:
        num = 0;
}
console.log(num)

//  break 表示条件终止，如果不加break，程序会进行执行
var num = 10;
var str = "zhangsan";
switch(num,str){
    case 12,"lisi":
        num++;
        break;
    case 10,"zhangsan":
        num++;
        break;
    case 8,"wangwu":
        num++;
        break;
    default:
        num = 0;
}
console.log(num)

