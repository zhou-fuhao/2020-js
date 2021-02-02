var str = 'abcabcdef';
let obj = {};

for (let j = 0; j < str.length; j++) {
    let a=0;
    for (let k = 0; k < str.length; k++) {
        if (str[j] == str[k]) {
            a++;
            obj[str[j]] = a;
        }
    }
}
console.log(obj);
