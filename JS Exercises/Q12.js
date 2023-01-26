// Q.12 Write a JS code to find product of two arrays
let arr1 = [101, 22, 23, 24, 25, 26, 121, 213, 215, 216, 216, 218, 222, 223, 221];
let arr2 = [110, 12, 13, 14, 15, 16, 111, 113, 115, 116, 116, 118, 122, 123, 121];
let arr = [];
for(let i=0; i<arr1.length; i++) {
    arr[i] = arr1[i] + arr2[i];
}
console.log(arr);