let menuBtn = document.querySelector(".menu-btn");
let menu = document.querySelector(".menu");
let menuStatus = false;

function menuToggle() {
    if (menuStatus == false) {
        menu.style.marginLeft = "0px";
        menuStatus = true;
    }
    else if (menuStatus == true) {
        menu.style.marginLeft = "-300px";
        menuStatus = false;
    }
}

// When adding events in javascript do not include parentheses otherwise the function will be invoked. It is better to apply the event directly to the HTML element
//menuBtn.onclick = menuToggle;