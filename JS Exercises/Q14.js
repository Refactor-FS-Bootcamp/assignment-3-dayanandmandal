// Q.14 Write a JS code to find N value in the Fibonacci series for a given number
let target = 88;
let a = 0;
let b = 0;
let c = 1;
let isPresent = false;

while(a <= target) {
    a = b;
    b = c;
    c = a + b;
    if(target == a) {
        console.log(target + " is present in Fibonacci series.");
        isPresent = true;
    }
}
if(!isPresent) {
    console.log(target + " is not present in Fibonacci series.");
}