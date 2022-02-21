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
