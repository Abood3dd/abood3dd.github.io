const tools = document.getElementById("tools");
const toolsContianer = document.getElementById("tools-container");
const main = document.querySelector("section");
tools.addEventListener("click", function () {
  toolsContianer.classList.toggle("shown");
  tools.classList.toggle("shown");
});
main.addEventListener("click", function () {
  if (toolsContianer.classList.contains("shown")) {
    toolsContianer.classList.remove("shown");
    tools.classList.remove("shown");
  }
});
let btn = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.classList.add("block");
  } else {
    btn.classList.remove("block");
  }
  if (btn.classList.contains("block")) {
    btn.classList.remove("hidden");
  } else {
    btn.classList.add("hidden");
  }
};
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
