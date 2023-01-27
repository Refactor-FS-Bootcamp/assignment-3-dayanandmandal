// 8.	Write a program that will allow someone to guess a four-digit pin exactly 4
// times. If the user guesses the number correctly. It prints “That was
// correct!” Otherwise, it will print “Sorry that was wrong.” Program stops 
// after the 4th attempt of if they got it right.

let pin = "0102";
let n = 3;
let input;
input = prompt("Please make your guess: ", '');
while( n-- > 0) {
    if(input === pin) {
        alert("That was correct!");
        break;
    } else {
        input = prompt(`Sorry that was wrong.\nTry Again(${n+1} Attempts left): `, '');
    }
}