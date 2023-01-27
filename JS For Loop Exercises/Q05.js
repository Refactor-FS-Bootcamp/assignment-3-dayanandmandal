// 5.	Given a string change every second letter to an uppercase ‘Z’. Assume
// there are no space.
let str = "javascript";
let strArray = str.split('');
for(let i=0; i<strArray.length; i++) {
    if( (i+1)%2 == 0 ) {
        strArray[i] = 'Z';
    }
}
str = '';
for(let i=0; i<strArray.length; i++) {
    str = str + strArray[i];
}
console.log(str);

