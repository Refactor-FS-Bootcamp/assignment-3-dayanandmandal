// Q.17 Write a JS code for binary search algorithm
let arr = [1, 2, 3, 4, 5, 6, 13, 15, 16, 18, 22, 23];
let target = 16;
let start = 0;
let end = arr.length-1;
let mid;
let isPresent = false;

while( start <= end ) {
    mid = Math.floor( (start+end)/2 );
    if( arr[mid] == target ) {
        console.log("Target is present!");
        isPresent = true;
        break;
    } else if( target < arr[mid] ) {
        end = mid - 1;
    } else {
        start = mid + 1;
    }
}

if( !isPresent ) {
    console.log("Target not found!");
}