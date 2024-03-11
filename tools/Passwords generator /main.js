const password = document.querySelector(".pass");
const length = document.querySelector(".length");

const capitalLetters = document.querySelector(".capitalLetters");
const num = document.querySelector(".nums");
const symbolsCheck = document.querySelector(".symbols");

const copy = document.querySelector("#submit");

const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+=";

copy.addEventListener("click", () => {
  const el = document.createElement("textarea");
  el.value = password.value;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);

  copy.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
  setTimeout(() => {
    copy.innerHTML = "Copy";
  }, 500);
});

function updateValue() {
  var slider = document.getElementById("myRange");
  var output = document.getElementById("rangeValue");
  output.innerHTML = slider.value;
  generate();
}
function generate() {
  let generatedPassWord = [];
  const getRandomElement = (array) =>
    array[Math.floor(Math.random() * array.length)];

  for (let i = 0; i < length.value; i++) {
    let chosen = Math.floor(Math.random() * 4) + 1;

    switch (chosen) {
      case 1:
        generatedPassWord.push(getRandomElement(lowercaseLetters));
        break;
      case 2:
        if (num.checked) generatedPassWord.push(getRandomElement(numbers));
        else i--;
        break;
      case 3:
        if (capitalLetters.checked)
          generatedPassWord.push(getRandomElement(uppercaseLetters));
        else i--;
        break;
      case 4:
        if (symbolsCheck.checked)
          generatedPassWord.push(getRandomElement(symbols));
        else i--;
        break;
    }
  }
  generatedPassWord = generatedPassWord.join("");
  password.value = generatedPassWord;
}
document
  .querySelectorAll("input")
  .forEach((item) => item.addEventListener("click", generate));
