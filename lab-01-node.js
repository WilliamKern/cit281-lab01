/*
CIT 281 Lab 1
Name: William Kern
*/
function square(num) {
    return num*num
}
console.log('Square opera2ions.')
for (let i = 2; i <= 10; i+=2) {
    console.log(`Square of ${i} is ${square(i)}`);
}