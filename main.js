const tools = document.getElementById("tools");
const toolsContianer = document.getElementById("tools-container");

tools.addEventListener("click", function () {
  if (toolsContianer.classList.contains("shown")) {
    toolsContianer.classList.remove("shown");
  } else {
    toolsContianer.classList.add("shown");
  }
});
