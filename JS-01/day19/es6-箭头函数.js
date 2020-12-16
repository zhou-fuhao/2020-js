var fn = (x) => ({ name: "li" });
console.log(fn);


var fn = (x) => ({ x });
var x = 10;
console.log(fn(2));


var fn = (a, ...arg) => arg;
console.log(fn(1, 2, 3, 4, 5));