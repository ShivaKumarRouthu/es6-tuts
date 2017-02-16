// Maintainence of scope
// var maintain same scope within the same function even it is reinitilized
for(var i = 0; i< 10; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}

// let will maintain separete scope for each loop in the function.
for(let i = 0; i< 10; i++){
    setTimeout(function(){
        console.log(i);
    }, 1000);
}