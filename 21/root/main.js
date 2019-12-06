// long-winded way of creating objects
// let person = new Object();

// person.name = "Daniel";
// person.eyeColor = "Blue";
// person.age = 27;
// person.updateAge = function() {
//     return ++person.age;
// }

// console.log(person.age);
// console.log(person.updateAge());

// better way of creating objects but sill long-winded as we are not using a blueprint with constructors
let person = {
    name: "Daniel",
    eyeColor: "Blue",
    age: 27,
    updateAge: function() {
        return ++person.age;
    }
}

console.log(person)
console.log(person.age);
console.log(person.updateAge());