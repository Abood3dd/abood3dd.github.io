let ToggleMenu = document.querySelector(".toggle-menu");
let ul = document.querySelector("ul");

ToggleMenu.addEventListener("click", function () {
  if (window.innerWidth < 800) {
    if (ul.classList.contains("mobile")) {
      ul.classList.remove("mobile");
    } else {
      ul.classList.add("mobile");
    }
  }
});
setInterval(function () {
  if (window.innerWidth > 800) {
    ul.classList.remove("mobile");
  }
}, 20);
let dots = document.querySelectorAll(".dots");

dots.forEach((dot) => {
  for (let i = 0; i < 40; i++) {
    dot.appendChild(document.createElement("span"));
  }
});
if (window.innerWidth <= 1024) {
  document.body.innerHTML =
    "<h1>Sorry, this website is not available on mobile devices at the moment .</h1>";
}
