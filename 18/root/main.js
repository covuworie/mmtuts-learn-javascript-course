var a = "First";
var b = "Second";
var c = "Third";

console.log([a, b, c].join(" "));

d = "Fourth";

console.log(d);

// The variable declaration is hoisted to the top of the file as the console log knows that this variable exists. The values are not hoisted.
var d;

console.log(a());

// Anonymous functions do not get hoisted. He claims anonymous functions are used more to save memory in the browser. Need to reseach the best practices as I'm not so sure this is true when using languages like TypeScript. Also to prevent hoisting you could entirely avoid the use of var and only use let and const instead. This sounds like a better practice.
var a = function() {
    var a = 20;
    return a;
}

// console.log(example());

// Named functions are also hoisted so they can be used anywhere inside the code.
// function example() {
//     var a = 10;
//     return a;
// }

