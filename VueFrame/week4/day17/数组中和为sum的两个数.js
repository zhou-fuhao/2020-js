let arr = [1, 2, 3, 4, 6, 8];
let sum = 10;


function testSum(arr, sum) {
    for (let j = 0; j < arr.length; j++) {
        for (let k = j + 1; k < arr.length; k++) {
            if (arr[j] + arr[k] == sum) {
                console.log(arr[j], arr[k]);
                break;
            }
        }
    }
}


let res = testSum(arr, sum);
console.log(res);