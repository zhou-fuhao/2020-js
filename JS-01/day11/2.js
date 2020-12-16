

function forArray(array) {
    var len = array.length;
    for (var i = 0; i <= len; i++) {
        return array[(len - 1)];
    }
}





function objectKeyIsEmpty(obj) {
    let empty = null;
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (obj[key] === null || obj[key] === '') {
                empty = false;
                break;
            } else {
                empty = true;
            }
        }
    }
    return empty;
}


let arrayA = [{ name: "张三", age: 20 }];


let checkThisArray = forArray(arrayA);

let yydd = objectKeyIsEmpty(checkThisArray);

console.log(yydd)





let arrayA = [{ name: "张三", age: 20 }, { name: "李四", age: 22 }];

for (const key in arrayA) {
    for (const index in arrayA[key]) {
        console.log(arrayA[key][index]);
        break;
    }
}