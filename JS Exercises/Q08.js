// Q.8 Write a JS code to find the no of digits in a number
let number = 123_211_110_000;
let noOfDigit = 1;
while( Math.floor(number/10) > 0 ) {
    noOfDigit++;
    number = Math.floor(number/10)
}
console.log(noOfDigit);
