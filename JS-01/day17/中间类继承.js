function Fun() {
    arguments.__proto__ = Array.prototype;
    var res = arguments.sort(function (m, n) {
        return m - n;
    });
    console.log(res);
}

Fun(3, 1, 5, 6, 8, 2);