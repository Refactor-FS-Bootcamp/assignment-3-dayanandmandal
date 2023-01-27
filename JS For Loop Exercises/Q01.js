// 1.	Get the sum of two arrays… actually the sum of all their elements. 
// P.S. Each array includes only integer numbers. Output is a number too.
let arr1 = [1, 4, 2, 6, 7, 11];
let arr2 = [4, 2, 8, 9, 11, 21];
let arraySum = 0;

for(let i=0; i<arr1.length; i++) {
    arraySum = arraySum + arr1[i] + arr2[i];
}
console.log("Sum of two array is " + arraySum);