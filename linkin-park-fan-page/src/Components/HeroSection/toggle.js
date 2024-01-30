var navLinks = document.getElementById("nav-links");
var nav = document.getElementById("nav");

function hideMenu() {
    navLinks.style.top = "-1000px";
    nav.style.opacity = "80%";
}

function showMenu() {
    navLinks.style.top = "0";
    nav.style.opacity = "100%";
}