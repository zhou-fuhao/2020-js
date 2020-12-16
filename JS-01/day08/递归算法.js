
var sum=0;
for (let i = 1; i <= 100; i++) {
    if(i%2==0 && i%3==0){
        sum+=i;
    }
}
console.log(sum)



function sum(num){
    if(num>100){
        return 0;
    }
    if(num%2==0 && num%3==0){
        return num+sum(num+1);
    }
    return sum(num+1);
}
console.log(sum(1))


