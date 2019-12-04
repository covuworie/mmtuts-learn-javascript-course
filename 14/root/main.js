// Named function
// (has a name)
function testExample(a) {
    var greeting = "Hi! My name is " + a;
    return greeting;
}

var name = "Daniel";
console.log(testExample(name));

// Anonymous function
// (doen't have a name)
var testExample = function(a) {
    var greeting = "Hi! My name is " + a;
    return greeting;
}

console.log(testExample("Jeeves"));

// Immediately invoked functional expression
// (runs when the browser is loaded and is anonymous)
(function() {
    var greeting = "Hi! My name is Wooster";
    console.log(greeting);
}())

testExample();