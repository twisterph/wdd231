const menuButton = document.querySelector("#menu");
const navMenu = document.querySelector("#navMenu");

menuButton.addEventListener("click", () => {
    menuButton.classList.toggle("open");
    navMenu.classList.toggle("open");
});