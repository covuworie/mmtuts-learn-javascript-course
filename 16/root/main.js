// Scopes

// Global variables are not good
//var number = 10;

function calc() {
    // Local variables are much better
    var number = 10;
    return number;
}

console.log(calc());

// Causes an exception as number is locally scoped
console.log(number);