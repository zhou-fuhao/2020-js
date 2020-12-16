var zepto = (function () {

    return {
        fn: function () {
            console.log(11)
        },

    }
})()

// 在使用的时候：zepto.fn 

var util = (function () {
    var num = 0;
    function fn1() {
        console.log(1);
    }
    return {
        fn1: fn1
    }
})();