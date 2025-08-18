// Toggle the 'active' class on the navigation menu
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// When the hamburger menu is clicked
hamburgerMenu.addEventListener("click", (event) => {
  // Prevent the default behavior of the anchor tag
  event.preventDefault();
  navbarNav.classList.toggle("active");
});

// Close the navigation menu when clicking outside of it
document.addEventListener("click", function (e) {
  if (!hamburgerMenu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
