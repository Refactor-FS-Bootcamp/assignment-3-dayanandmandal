// Q.3 Write a JS code to print Even numbers in given array.
let evenOddArray = [1, 2, 3, 4, 5, 6, 11, 13, 15, 16, 16, 18, 22, 23, 21];
for(let num in evenOddArray) {
    if(evenOddArray[num]%2 == 0) {
        console.log(evenOddArray[num]);
    }
}