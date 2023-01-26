// Q.4 Write a JS code to delete all occurrence of element in given array
let deleteOccurrenceArray = [1, 1, 1, 2, 2, 3, 4, 1, 1, 5, 6, 1, 7, 8, 21, 11, 12, 1, 1, 1];
let target = 1;
for(let i=0; i<deleteOccurrenceArray.length; i++) {
    if(deleteOccurrenceArray[i] == target) {
        delete deleteOccurrenceArray[i];
    }
}
for(let i=0; i<deleteOccurrenceArray.length; i++) {
    console.log(deleteOccurrenceArray[i]);
}