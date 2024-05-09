//buttons
const shortBreakBTN = document.querySelector(".short_break");
const longBreakBTN = document.querySelector(".long_break");
const StartBTN = document.querySelector(".start");
const settingsBTN = document.querySelector(".settings");
const pomodoroBTN = document.querySelector(".pomodoro");
const pauseBTN = document.querySelector(".pause");
const resetBTN = document.querySelector(".reset");
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
let pomoColor = "rgb(220, 20, 60)"; // Crimson for focus and energy
let shortBreakColor = "rgb(135, 206, 235)"; // Sky Blue for calm short breaks
let longBreakColor = "rgb(123, 104, 238)"; // Medium Slate Blue for relaxing long breaks
//time variables
let cylceMin = 25, //changeable by the user
  shortBreakMin = 5, //changeable  // //
  longBreakMin = 15, //changeable // //
  timeValue = cylceMin * 60,
  seconds = 0,
  minutes = 25;
//
document.addEventListener("DOMContentLoaded", () => {
  updateUI();
  setInterval(update, 1000);
});

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
}

function update() {
  if (isPaused === false) {
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
