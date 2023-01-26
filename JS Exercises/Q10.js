// Q.10 Write a JS code to find the largest number in an array
let arr = [1, 2, 3, 4, 5, 6, 11, 13, 15, 16, 16, 18, 22, 23, 21];
let max = arr[0];
for(let i=1; i<arr.length; i++) {
    if(max < arr[i])
        max = arr[i];
}
console.log("Largest number is " + max);
