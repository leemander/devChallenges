const hamburgerButton = document.getElementById("hamburger");
const navigationMenu = document.getElementById("nav-menu");
const modeToggleButtons = document.querySelectorAll(".header__mode-toggle");

hamburgerButton.addEventListener("click", () => {
  navigationMenu.classList.toggle("show");
});
