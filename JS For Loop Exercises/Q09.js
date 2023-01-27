// 9.	Write a program that will check if two strings are palindromes. 
// A palindrome is a word that spells the same forward and backward.
// Palindrome: a word, phrase, or sequence that reads the same backward as
// forward, e.g., madam or nurses run.

let str = "racecar";
// let str = "Java";

let start = 0;
let end = str.length-1;
let isPalindrome = true;

while( start < end ) {
    if( str[start++] != str[end--] ) {
        isPalindrome = false;
        console.log(`${str} is not a palindrome.`);
        break;
    }
}

if(isPalindrome) {
    console.log(`${str} is a palindrome.`)
}