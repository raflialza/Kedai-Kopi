// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// ketika hamburger menu diklik
const hamburger = (document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
});

// Klik di luar sidebar untuk menghilangkan sidebar
const hamburgerMenu = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
