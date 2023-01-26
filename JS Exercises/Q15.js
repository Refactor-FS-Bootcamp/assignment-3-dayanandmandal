// Q.15 Write a JS code to count all letters in a word
let word = "awefghjgfa9897878aadfaaafgaa";
let target = "9";
let targetCount = 0;
for(let i=0; i<word.length; i++) {
    if(word[i] === target) {
        targetCount++;
    }
}
console.log(targetCount);
