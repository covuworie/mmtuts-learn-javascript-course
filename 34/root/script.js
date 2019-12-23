let btn = document.querySelector(".test-btn");
let form = document.querySelector(".test-form");

function changeBtnTxt(e) {
    e.preventDefault();
    btn.innerHTML = "YAY!";
}

function stopFormSubmit(e) {
    e.preventDefault();
}

btn.onclick = changeBtnTxt;
form.onclick = stopFormSubmit;