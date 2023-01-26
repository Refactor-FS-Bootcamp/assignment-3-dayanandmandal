// Q.13 Write a JS code to print the Fibonacci series for a given value of N
let n = 120;
let a = 0;
let b = 0;
let c = 1;
while(b < n) {
    a = b;
    b = c;
    c = a + b;
    console.log(a);
}
