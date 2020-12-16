function C1(name) { // un
    if (name) {
        this.name = name;
    }
}
function C2(name) { // un
    this.name = name;
}
function C3(name) { // un
    this.name = name || 'join';
}
C1.prototype.name = 'Tom'; // 给C1类的原型增加属性
C2.prototype.name = 'Tom'; // 给C2类的原型增加属性
C3.prototype.name = 'Tom'; // 给C3类的原型增加属性
console.log((new C1().name) + (new C2().name) + (new C3().name));