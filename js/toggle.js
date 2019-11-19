const btn = document.querySelector(".nav__toggle");
const nav = document.querySelector(".header__nav");

btn.addEventListener("click", () => {
  nav.classList.toggle("header__nav--closed");
  nav.classList.toggle("header__nav--opened");
});
