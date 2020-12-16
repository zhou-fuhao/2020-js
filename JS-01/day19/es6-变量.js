// 1报错：Cannot access 'a' before initialization
console.log(a);// 报错

let a = 6;
console.log(a);// 6

// 2报错：Missing initializer in const declaration
const b;
b = 2;
const c = 6;
console.log(b);// 报错
console.log(c);// 6

// 3报错：Identifier 'c' has already been declared
let c = 4;
let c = 9;
console.log(c);

// 4
let c = 4;
{
    let c = 9;
    console.log(c);// 9
}
console.log(c);// 4

// 5报错：Cannot access 'name' before initialization
console.log(typeof name);
let name = "san";