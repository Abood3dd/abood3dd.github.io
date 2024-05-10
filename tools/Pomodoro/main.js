//buttons
const shortBreakBTN = document.querySelector(".short_break");
const longBreakBTN = document.querySelector(".long_break");
const StartBTN = document.querySelector(".start");
const settingsBTN = document.querySelector(".settings");
const pomodoroBTN = document.querySelector(".pomodoro");
const pauseBTN = document.querySelector(".pause");
const resetBTN = document.querySelector(".reset");
const closeBTN = document.querySelector(".close");
const settings = document.querySelector(".settings");
const color = document.querySelectorAll(".color");
const duration = document.querySelectorAll(".duration");
const pomoD = document.querySelector(".pomoD");
const shortD = document.querySelector(".shortD");
const longD = document.querySelector(".longD");
//
//visuales
const cyclesCounter = document.querySelector(".cycles");
const time = document.querySelector(".time");
//
//audio
const sound = new Audio("text.mp3");
//variables
// unchangeable by the user
let isPaused = true,
  isPomodoro = true,
  isShortBreak = false,
  isLongBreak = false,
  cycles = 0,
  clicked = false;
//changeable by the user
let pomoColor = document.querySelector("#pomodoroColor").value; // Crimson for focus and energy
let shortBreakColor = document.querySelector("#shortBreakColor").value; // Sky Blue for calm short breaks
let longBreakColor = document.querySelector("#longBreakColor").value; // Medium Slate Blue for relaxing long breaks
//time variables
let cylceMin = pomoD.value, //changeable by the user
  shortBreakMin = shortD.value, //changeable  // //
  longBreakMin = longD.value, //changeable // //
  timeValue = cylceMin * 60,
  seconds = 0,
  minutes = cylceMin;
//
document.addEventListener("DOMContentLoaded", () => {
  updateUI();
  setInterval(update, 1000);
});
document.title = "Pomodoro Timer";
StartBTN.addEventListener("click", () => {
  if (isPaused && !clicked) {
    isPaused = false;
    clicked = true;
    updateUI();
  } else {
    isPaused = true;
    clicked = false;
    updateUI();
  }
  sound.play();
});
shortBreakBTN.addEventListener("click", () => {
  isShortBreak = true;
  isPomodoro = false;
  isLongBreak = false;
  StartBTN.style.backgroundColor = shortBreakColor;
  shortcutBTN();
});
longBreakBTN.addEventListener("click", () => {
  isShortBreak = false;
  isPomodoro = false;
  isLongBreak = true;
  StartBTN.style.backgroundColor = longBreakColor;
  shortcutBTN();
});
pomodoroBTN.addEventListener("click", () => {
  isShortBreak = false;
  isPomodoro = true;
  isLongBreak = false;
  StartBTN.style.backgroundColor = pomoColor;
  shortcutBTN();
});
function shortcutBTN(params) {
  StartBTN.style.color = "black";
  changetime();
  isPaused = true;
  clicked = false;
  updateUI();
}
function updateUI() {
  cylceMin = pomoD.value; //changeable by the user
  shortBreakMin = shortD.value; //changeable  // //
  longBreakMin = longD.value;
  time.innerHTML = `${minutes.toString().padStart(2, "0")}:${seconds
    .toString()
    .padStart(2, "0")}`;
  cyclesCounter.innerHTML = `Cycles: ${cycles}`;
  shortBreakBTN.style.backgroundColor = shortBreakColor;
  longBreakBTN.style.backgroundColor = longBreakColor;
  pomodoroBTN.style.backgroundColor = pomoColor;

  setTimeout(() => {
    if (isPaused) {
      document.body.animate(
        [
          { backgroundColor: document.body.style.backgroundColor },
          { backgroundColor: "black" },
        ],
        { duration: 500, fill: "forwards" }
      );
    } else if (isShortBreak) {
      document.body.animate(
        [
          { backgroundColor: document.body.style.backgroundColor },
          { backgroundColor: shortBreakColor },
        ],
        { duration: 500, fill: "forwards" }
      );
    } else if (isLongBreak) {
      document.body.animate(
        [
          { backgroundColor: document.body.style.backgroundColor },
          { backgroundColor: longBreakColor },
        ],
        { duration: 500, fill: "forwards" }
      );
    }
  }, 50);
  color.forEach((item) => {
    item.style.backgroundColor = item.value;
  });
  pomoColor = document.querySelector("#pomodoroColor").value; // Crimson for focus and energy
  shortBreakColor = document.querySelector("#shortBreakColor").value; // Sky Blue for calm short breaks
  longBreakColor = document.querySelector("#longBreakColor").value;
}

function update() {
  if (isPaused === false) {
    cylceMin = pomoD.value; //changeable by the user
    shortBreakMin = shortD.value; //changeable  // //
    longBreakMin = longD.value;
    updateUI();
    timeValue--;
    minutes = Math.floor(timeValue / 60);
    seconds = timeValue % 60;
    updateUI();
    if (timeValue <= 0) {
      end();
    }
  }
}
function end() {
  updateUI();
  clicked = false;
  isPaused = true;
  StartBTN.innerHTML = "break";
  sound.play();

  if (isPomodoro) {
    cycles++;
    isPomodoro = false;
    if (cycles >= 4) {
      isShortBreak = false;
      isLongBreak = true;
      cycles = 0;
      updateUI();
    } else {
      isShortBreak = true;
      isLongBreak = false;
    }
    StartBTN.style.backgroundColor = isShortBreak
      ? shortBreakColor
      : longBreakColor;
    StartBTN.style.color = "black";
  } else if (isShortBreak) {
    isPomodoro = true;
    isShortBreak = false;
    isLongBreak = false;
    StartBTN.style.backgroundColor = "black";
    StartBTN.style.color = "white";
  } else if (isLongBreak) {
    isPomodoro = true;
    isShortBreak = false;
    isLongBreak = false;
    StartBTN.style.backgroundColor = "black";
    StartBTN.style.color = "white";
  }

  changetime();

  updateUI();
}
//the btn text has to change when clicked
function changetime() {
  timeValue = isPomodoro
    ? cylceMin * 60
    : isShortBreak
    ? shortBreakMin * 60
    : isLongBreak
    ? longBreakMin * 60
    : 0;
  StartBTN.innerHTML = isPomodoro
    ? "Pomodoro"
    : isShortBreak
    ? "Short Break"
    : isLongBreak
    ? "Long Break"
    : "";
  minutes = Math.floor(timeValue / 60);
  seconds = timeValue % 60;
}
closeBTN.addEventListener("click", () => {
  document.querySelector(".settings-container").classList.remove("active");
  updateUI();
});
settings.addEventListener("click", () => {
  document.querySelector(".settings-container").classList.toggle("active");
  isPaused = true;
  updateUI();
});
document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("focus", () => {
    updateUI();
    changetime();
  });
  input.addEventListener("blur", () => {
    updateUI();
    changetime();
  });
});
