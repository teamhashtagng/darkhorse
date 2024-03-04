const navToggle = document.querySelector(".nav-toggle");
const headerNav = document.querySelector(".header__nav");
const allHeaderNavDropdownMenus = [
  ...document.querySelectorAll(".header__nav--dropdown-menu"),
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

function toggleNavDropdownMenu(event) {
  if (!event.target.closest(".header__nav--dropdown [role='button']")) return;
  const navDropdown = event.target.closest(".header__nav--dropdown");
  const navDropdownButton = navDropdown.querySelector("[role='button']");
  const navDropdownMenu = navDropdown.querySelector(
    ".header__nav--dropdown-menu"
  );
  const navDropdownMenuIsHidden = navDropdownMenu.getAttribute("aria-hidden");

  allHeaderNavDropdownMenus.forEach((headerNavDropdownMenu) => {
    headerNavDropdownMenu.setAttribute("aria-hidden", true);
  });

  if (navDropdownMenuIsHidden === "true") {
    navDropdownButton.setAttribute("aria-expanded", true);
    navDropdownMenu.setAttribute("aria-hidden", false);
  } else {
    navDropdownButton.setAttribute("aria-expanded", false);
    navDropdownMenu.setAttribute("aria-hidden", true);
  }
}

function transitionAfterPageLoad() {
  document.body.classList.remove("no-transition");
}

navToggle.addEventListener("click", toggleNav);
headerNav.addEventListener("click", toggleNavDropdownMenu);
setTimeout(function () {
  transitionAfterPageLoad();
}, 1);
