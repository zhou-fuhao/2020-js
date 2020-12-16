
//B is not a constructor
let B = () => { console.log(1) };
let f = new B();


class fn {
    constructor(x, y) {
        this.x = 100;
        this.y = "y";
    }
    getX() {
        return "getX"
    }

    static mm = "mm";
}

var f1 = new fn(1, 2);
console.log(f1);

// 
class A {
    constructor(x, y) {
        console.log("a--" + x)
        this.x = 100;
    }
    getX() {
        console.log("gex");
    }
    static a = 200;
    static b = 200;
    y = "y";
}
var a = new A();

class B extends A {
    constructor(a) {
        //super(); 用在构造函数中，必须在使用this之前调用 用来访问父对象的函数
        super(100);// 相当于call继承
        this.f = a
    }
    getZ() {
        console.log("z")
    }
    ss() {
        super.getX();//super 还可以调用A类原型上的方法
    }
}
let b = new B(1);