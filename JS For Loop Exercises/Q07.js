// 7.	Given a number n Calculate the factorial of the number
let n = 5;
let fact = 1;

while(n > 1) {
    fact *= n;
    n--;
}

console.log(`Factorial is ${fact}`);
