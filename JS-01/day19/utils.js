var utils = (function () {
    function toArray(likeArray) {
        var newArr = [];
        for (let i = 0; i < likeArray.length; i++) {
            newArr.push(likeArray[i]);
        }
        return newArr;
    }

    return {
        toArray: toArray
    }
})();