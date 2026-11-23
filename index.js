const navbar = document.getElementById("navbar");
const hero = document.getElementById("hero");
const searchWrapper = document.getElementById("searchWrapper");
const searchBtn = document.getElementById("searchBtn");
const searchInput = document.getElementById("searchInput");
const burgerMenu = document.getElementById("burgerMenu");
const navLinks = document.getElementById("navLinks");

function updateNavbar() {
  const heroBottom = hero.getBoundingClientRect().bottom;

  if (heroBottom <= navbar.offsetHeight) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
}

window.addEventListener("scroll", updateNavbar);
window.addEventListener("resize", updateNavbar);
updateNavbar();

// Åbn/luk burgermenu
burgerMenu.addEventListener("click", () => {
  burgerMenu.classList.toggle("active");
  navLinks.classList.toggle("active");
  searchWrapper.classList.remove("active");
});

// Luk burgermenu ved klik på et menupunkt
navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    burgerMenu.classList.remove("active");
    navLinks.classList.remove("active");
  });
});

// Åbn/luk søgefelt ved klik på søgeikonet
searchBtn.addEventListener("click", () => {
  searchWrapper.classList.toggle("active");
  burgerMenu.classList.remove("active");
  navLinks.classList.remove("active");
  if (searchWrapper.classList.contains("active")) {
    searchInput.focus();
  }
});

// Luk søgefelt og burgermenu ved klik udenfor
document.addEventListener("click", (e) => {
  if (!searchWrapper.contains(e.target)) {
    searchWrapper.classList.remove("active");
  }
  if (!burgerMenu.contains(e.target) && !navLinks.contains(e.target)) {
    burgerMenu.classList.remove("active");
    navLinks.classList.remove("active");
  }
});

// Luk med Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    searchWrapper.classList.remove("active");
    burgerMenu.classList.remove("active");
    navLinks.classList.remove("active");
  }
});
