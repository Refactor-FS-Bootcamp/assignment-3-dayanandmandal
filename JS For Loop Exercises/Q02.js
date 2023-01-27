// 2.	Using a for loop print all even numbers up to and including n. Don’t include 0.
let n = 20;
console.log(`Even number till ${n} is `);
for(let i=2; i<=n; i++) {
    if(i%2 == 0) {
        console.log(i);
    }
}