const days = document.querySelector("#Day");
const months = document.querySelector("#Month");
const years = document.querySelector("#Year");

const yearsNum = document.querySelector(".yearsNum");
const monthsNum = document.querySelector(".monthsNum");
const daysNum = document.querySelector(".daysNum");

const Btn = document.querySelector(".Btn");

const error = document.querySelectorAll(".error");

let currentDate = new Date();

Btn.addEventListener("click", function () {
  if (
    days.value <= 31 &&
    months.value <= 12 &&
    years.value > 1000 &&
    years.value < currentDate.getFullYear() &&
    days.value > 0 &&
    months.value > 0 &&
    years.value > 0
  ) {
    age(parseInt(days.value), parseInt(months.value), parseInt(years.value));
    error.forEach((element) => {
      element.textContent = "";
    });
  } else {
    error.forEach((element) => {
      element.textContent = "Invalid input";
    });
    yearsNum.textContent = " - - ";
    monthsNum.textContent = " - - ";
    daysNum.textContent = " - - ";
  }
});

function age(days, months, years) {
  let date = `${months}/${days}/${years}`; 
  let birthDate = new Date(date);
  let today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  let m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  let d = today.getDate() - birthDate.getDate();
  if (d < 0) {
    m--;
    let daysInMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    ).getDate();
    d += daysInMonth;
  }
  if (m < 0) {
    m += 12;
  }
  yearsNum.textContent = age;
  monthsNum.textContent = m;
  daysNum.textContent = d;
}
