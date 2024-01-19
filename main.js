const tools = document.getElementById("tools");
const toolsContianer = document.getElementById("tools-container");
const main = document.querySelector("section");
let tools_condition = false;
tools.addEventListener("click", function () {
  if (toolsContianer.classList.contains("shown")) {
    toolsContianer.classList.remove("shown");
    tools_condition = false;
  } else {
    toolsContianer.classList.add("shown");
    tools_condition = true;
  }
});
main.addEventListener("click", function () {
  if (tools_condition) {
    toolsContianer.classList.remove("shown");
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
