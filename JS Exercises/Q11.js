// Q.11 Write a JS code to find the number of zeros in 2D Matrix
let matrix = [ [2, 3, 4], [0, 1, 0], [11, 5, 0] ];
let noOfZeroes = 0;
for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix[i].length; j++) {
        if( matrix[i][j] == 0 ) {
            noOfZeroes++;
        }
    }
}
console.log(`No. of zeroes in matrix is ${noOfZeroes}`);
