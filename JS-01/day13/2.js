(function fn() {
    function jquery() {
        console.log("1");
    }

    // jquery 这个方法通过window添加属性暴漏到全局
    window.jquery = window.$ = jquery;
})();

//在使用的时候，通过jquery() 或 $()
// jquery();
// $();


var zepto = (function () {

    return {
        fn: function () { },

    }
})()

// 在使用的时候：zepto.fn          