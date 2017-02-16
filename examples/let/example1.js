// let is block scope variable 
// whereas var is function scope variable 

var name = "john";
if(true) {
    // doesn't create new scope for name
    var name = 'Sam';
    console.log('name within a function ' + name); // name = Sam
}
console.log('name Outside a function ' + name); // name = Sam

// let will make you declare a varible and limit the scope of variable within the braces it was declared

let name = "john";
if(true) {
    // will create new scope for name
    let name = 'Sam';
    console.log('name within a function ' + name); // name = Sam
}
console.log('name Outside a function ' + name); // name = john


