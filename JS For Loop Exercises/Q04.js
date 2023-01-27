// 4.	Given two arrays of integers. Add up each element in the same position and
// create a new array containing the sum of each pair. Assume both arrays are of the same length.
 
let arr1 = [1, 4, 2, 6, 7, 11];
let arr2 = [4, 2, 8, 9, 11, 21];
let arraySum = [];

for(let i=0; i<arr1.length; i++) {
    arraySum[i] = arr1[i] + arr2[i];
}

console.log("Sum of each element of array is: ")
for(let i=0; i<arr1.length; i++) {
    console.log(arraySum[i]);
}