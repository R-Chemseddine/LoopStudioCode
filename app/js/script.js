const burgermenu = document.querySelector(".burger");
const menu = document.querySelector(".menu");
const links = document.querySelector(".links");
const body = document.querySelector("body");

let menuopen = false;

burgermenu.addEventListener("click", () => {
  if (!menuopen) {
    burgermenu.classList.add("open");
    menu.classList.add("overlay");
    body.classList.add("scroll");
    links.classList.add("visible");
    menu.classList.remove("overlay-out");

    links.classList.remove("notvisible");
    menuopen = true;
  } else {
    burgermenu.classList.remove("open");
    menu.classList.remove("overlay");
    body.classList.remove("scroll");
    links.classList.remove("visible");

    links.classList.add("notvisible");
    menu.classList.add("overlay-out");
    menuopen = false;
  }
  links.classList.remove("notvisible");
});
