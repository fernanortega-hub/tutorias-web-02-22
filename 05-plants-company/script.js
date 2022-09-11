const menu = document.getElementById("menu");
const navbar = document.querySelector(".button-navbar-container");
menu.onclick = (ev) => {
    navbar.className = 'button-navbar-container show-navbar'
}