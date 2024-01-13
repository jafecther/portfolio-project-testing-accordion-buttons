"use strict";

document
  .getElementsByClassName("active")[0]
  .addEventListener("click", function () {
    window.scrollTo(0, document.querySelector(".topnav").offsetTop);
  });

document
  .getElementsByClassName("html-proj-location")[0]
  .addEventListener("click", function () {
    window.scrollTo(0, document.querySelector(".html-projects").offsetTop);
  });

document
  .getElementsByClassName("js-proj-location")[0]
  .addEventListener("click", function () {
    window.scrollTo(0, document.querySelector(".js-games").offsetTop);
  });

const acc = document.getElementsByClassName("accordion");
const acc2 = document.getElementsByClassName("accordion2");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

for (i = 0; i < acc2.length; i++) {
  acc2[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    let panel2 = this.nextElementSibling;
    if (panel2.style.display === "block") {
      panel2.style.display = "none";
    } else {
      panel2.style.display = "block";
    }
  });
}
