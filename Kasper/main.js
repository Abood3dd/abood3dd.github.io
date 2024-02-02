const right_arrow = document.querySelector(".right");
const left_arrow = document.querySelector(".left");
const landing = document.querySelector(".landing");
const bullet = document.querySelectorAll(".bullet");

const copyright = document.querySelector(".copyright");
let image = parseInt(window.localStorage.getItem("image")) || 1;
window.addEventListener("load", function () {
  changeIMG();
});

right_arrow.addEventListener("click", function () {
  if (image < 3) {
    image++;
  } else {
    image = 1;
  }
  changeIMG();
  window.localStorage.setItem("image", image);
});

left_arrow.addEventListener("click", function () {
  if (image > 1) {
    image--;
  } else {
    image = 3;
  }
  changeIMG();
  window.localStorage.setItem("image", image);
});

function changeIMG() {
  landing.style.backgroundImage = `url('images/landing${image}.jpg')`;
  bullet.forEach((item) => item.classList.remove("active"));
  bullet[image - 1].classList.add("active");
}

let date = new Date();
window.onload = function () {
  copyright.innerHTML = `&copy; ${date.getFullYear()} <span>Kasper</span> All Rights Reserved`;
};


