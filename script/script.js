// define all UI variables
const navToggler = document.querySelector(".header_nav-menu");
const navMenu = document.querySelector("nav ul");
const navLinks = document.querySelectorAll("nav a");
const navLogo = document.querySelector(".header_logo"); // Use querySelector for a single element

// load all event listeners
allEventListeners();

// functions for all event listeners
function allEventListeners() {
  // toggler icon click event
  navToggler.addEventListener("click", togglerClick);
  // nav links click event
  navLinks.forEach((elem) => elem.addEventListener("click", navLinkClick));
  // header logo click event
  navLogo.addEventListener("click", headerLogoClick);
}

// togglerClick function
function togglerClick() {
  navMenu.classList.toggle("open");
}

// navLinkClick function
function navLinkClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}

// headerLogoClick function
function headerLogoClick() {
  if (navMenu.classList.contains("open")) {
    navToggler.click();
  }
}
