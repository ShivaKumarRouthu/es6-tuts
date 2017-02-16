// let will not hoist the variable. 

console.log(i);
let i = 10; // will throw an referenceError

console.log(x);
var x = 'new variable'; // will not throw an error and returns undefined