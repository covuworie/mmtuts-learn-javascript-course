/* Using event handlers is a bit messy */
// let btn = document.querySelector(".test-btn");

// function firstFunction() {
//     btn.innerHTML = "YAY!";
// }

// function secondFunction() {
//     btn.style.backgroundColor = "red";
// }

// function btnClick(e) {
//     e.preventDefault();
//     firstFunction();
//     secondFunction();
// }

// btn.onclick = btnClick;

/* Use event listeners instead */
// let btn = document.querySelector(".test-btn");

// function firstFunction(e) {
//     e.preventDefault();
//     btn.innerHTML = "YAY!";
// }

// function secondFunction() {
//     btn.style.backgroundColor = "red";
// }

// btn.addEventListener("click", firstFunction);
// btn.addEventListener("click", secondFunction);

/* It's also possible to include the event directly in the event listener using an anonymous function */
let btn = document.querySelector(".test-btn");

function firstFunction(e, name) {
    e.preventDefault();
    btn.innerHTML = name;
}

btn.addEventListener("click", function(e) {
    firstFunction(e, "Daniel");
});
btn.addEventListener("click", function() { 
    btn.style.backgroundColor = "yellow"; 
});