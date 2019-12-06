let toggleNavStatus = false;

let toggleNav = function() {
    let getSidebar = document.querySelector(".nav-sidebar");
    let getSidebarUl = document.querySelector(".nav-sidebar ul");
    let getSidebarTitle = document.querySelector(".nav-sidebar span");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.7";
        toggleNavStatus = true;
    }
    else {
        getSidebar.style.width = "50px";
        getSidebarUl.style.visibility = "hidden";
        toggleNavStatus = false;
    }
}