
function Fun() {
    this.name = "zhang";
    this.age = 10;
}
var fn1 = new Fun();
// var fn2=new Fun("zhang",29);

function hasOwnPublicProperty(fun, data) {
    if (data in fun) {
        if (!fun.hasOwnProperty(data)) {
            return true;
        }
    }
    return false;
}

Fun.prototype.sum = function () {

}

console.log(hasOwnPublicProperty(fn1, "name"))