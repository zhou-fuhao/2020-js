let str = "good good study, day day up!";

let reg = /\b([a-zA-Z])([a-zA-Z]*)\b/g;

let res = str.replace(reg, ($1, $2, $3) => {
    console.log($1, $2, $3);
    return $2.toUpperCase() + $3;
});

console.log(res);