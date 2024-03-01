const navToggle = document.querySelector(".nav-toggle");
const headerNav = document.querySelector(".header__nav");
const allHeaderNavDropdowns = [
  ...document.querySelectorAll(".header__nav--dropdown"),
];

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

function toggleNavDropdown(event) {
  if (!event.target.closest(".header__nav--dropdown")) return;
  const navDropdown = event.target.closest(".header__nav--dropdown");
  const navDropdownMenu = navDropdown.querySelector("ul");
  const navDropdownMenuIsHidden = navDropdownMenu.getAttribute("aria-hidden");

  allHeaderNavDropdowns.forEach((headerNavDropdown) => {
    headerNavDropdown.querySelector("ul").setAttribute("aria-hidden", true);
    headerNavDropdown.style.marginBottom = 0;
  });

  if (navDropdownMenuIsHidden === "true") {
    navDropdownMenu.setAttribute("aria-hidden", false);
    const navDropdownMenuHeight = getComputedStyle(navDropdownMenu).height;
    const navDropdownMargin = navDropdownMenuHeight.split("px")[0] - 40;
    if (window.innerWidth <= 800) {
      navDropdown.style.marginBottom = `${navDropdownMargin}px`;
    }
  } else {
    navDropdownMenu.setAttribute("aria-hidden", true);
    navDropdown.style.marginBottom = 0;
  }
}

function transitionAfterPageLoad() {
  document.body.classList.remove("no-transition");
}

navToggle.addEventListener("click", toggleNav);
headerNav.addEventListener("click", toggleNavDropdown);
setTimeout(function () {
  transitionAfterPageLoad();
}, 1);
