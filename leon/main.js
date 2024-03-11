const copyright = document.querySelector(".footer")

let date = new Date();
window.onload = function () {
  copyright.innerHTML = `&copy; ${date.getFullYear()} <span>Kasper</span> All Rights Reserved`;
};