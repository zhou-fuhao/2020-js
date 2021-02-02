var str = 'abcabcdef';

function testStr(str) {
    let obj = {};
    for (let j = 0; j < str.length; j++) {
        let n = (str.split(str[j])).length - 1;
        obj[str[j]] = n;
    }
    return obj;
}

let res = testStr(str);
console.log(res);