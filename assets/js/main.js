const navToggle = document.querySelector(".nav-toggle");
const headerNav = document.querySelector(".header__nav");

function toggleNav(event) {
  const navToggle = event.currentTarget;
  const navIsVisible = navToggle.getAttribute("aria-expanded");

  if (navIsVisible === "false") {
    navToggle.setAttribute("aria-expanded", true);
    headerNav.setAttribute("data-visible", true);
    document.body.classList.add("no-scroll");
  } else {
    navToggle.setAttribute("aria-expanded", false);
    headerNav.setAttribute("data-visible", false);
    document.body.classList.remove("no-scroll");
  }
}

function transitionAfterPageLoad() {
  document.body.classList.remove("no-transition");
}

navToggle.addEventListener("click", toggleNav);
setTimeout(function () {
  transitionAfterPageLoad();
}, 2500);
