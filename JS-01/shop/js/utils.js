let utils = (function () {
    function toArray(ary) {
        return Array.prototype.slice.call(ary);
    }
    return {
        toArray
    };
})()