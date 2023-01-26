// Q.16 Write a JS code to find duplicate values in a given array
let arr = [1, 2, 3, 4, 5, 6, 1, 13, 15, 16, 16, 18, 22, 23, 21];
console.log("Duplicate numbers are");
for(let i=0; i<arr.length; i++) {
    for(let j=i; j<arr.length; j++)
    if( (i != j) && (arr[i] === arr[j]) ) {
        console.log(`${arr[i]} `);
        break;
    }
}
