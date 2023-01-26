// Q.9 Write a JS code to calculate the sum of digits in a number
let number = 9990001;
let sum = 0;
while( Math.floor(number/10) > 0 ) {
    sum += number%10;
    number = Math.floor(number/10)
}
sum += number%10;
console.log(sum);
