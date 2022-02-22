// to toggle between fixed nav and static nav
window.addEventListener("scroll", function () {
  nav.classList.toggle("fixedNav", window.scrollY > 0);
});
// to name our elements
const openNav = document.getElementById("mobNav");
const openBtn = document.getElementById("openBtn");
const navLink = document.getElementsByClassName("navLink");
const nav = document.querySelector("nav");
// to make our responsive navbar
openBtn.addEventListener("click", () => {
  openNav.classList.toggle("navToggle");
});
// to close our responsive navbar after we click on any link
for (var i = 0; i < navLink.length; i++) {
  navLink[i].addEventListener("click", () => {
    openNav.classList.toggle("navToggle");
  });
}

// Get the container element
const btnContainer = document.getElementById("links");

// Get all buttons with class="btn" inside the container
const btns = btnContainer.getElementsByClassName("link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}
