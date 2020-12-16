
Object.prototype.hasPublicPro = function (data) {
    console.log(this)
    if (data in this) {
        if (!this.hasOwnProperty(data)) {
            return true;
        }
    }
    return false;
}

function Fn() {
}
Fn.prototype.getX = function () {
}
let fn = new Fn();

console.log(fn.hasPublicPro("getX"));
console.log([1,2.3].hasPublicPro(Array));
