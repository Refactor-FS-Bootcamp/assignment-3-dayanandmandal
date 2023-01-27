// 10.	This is a code wars kata. click here to train on “Grasshopper – Summation” on
// code wars. Write a program that finds the summation of every number from 1 to num. 
// The number will always be a positive integer greater than 0.

let num = 10;
let sum = 0;
let tempNum = num;
while(tempNum > 0) {
    sum += tempNum--;
}
console.log("summation of every number from 1 to " + num + " is " + sum);
