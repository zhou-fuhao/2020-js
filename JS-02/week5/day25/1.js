function fun1() {
    console.log('func1 start');
    return new Promise(resolve => {
        resolve(); // 微1
    });
};
function fun2() {
    console.log('func2 start');
    return new Promise(resolve => {
        setTimeout(() => { // 宏2
            resolve();
        }, 10);
    })
};
console.log(1);
setTimeout(async () => {
    console.log(2);
    await fun1();
    console.log(3);
}, 20); // 宏1
for (let i = 0; i < 100000000; i++) {};
console.log(4);
fun1().then(() => {
    console.log(5);
});
fun2().then(() => {
    console.log(6);
});
setTimeout(() => {
    console.log(7);
}, 0); // 宏3
console.log(8);