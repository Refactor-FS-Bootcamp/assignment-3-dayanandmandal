// Q.7 Write a JS code to print a pattern using for loop
let pattern;
for(let i=0; i<10; i++) {
    pattern = "";
    for(let j=0; j<=i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}