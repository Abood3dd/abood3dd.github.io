const tools = document.getElementById("tools");
const toolsContianer = document.getElementById("tools-container");

tools.addEventListener("click", function () {
  if (toolsContianer.classList.contains("shown")) {
    toolsContianer.classList.remove("shown");
  } else {
    toolsContianer.classList.add("shown");
  }
});

let btn = document.querySelector(".up");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};
btn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
