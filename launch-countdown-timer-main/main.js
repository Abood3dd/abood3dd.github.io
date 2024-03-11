let secondsElement = document.querySelector(".seconds");
let minutesElement = document.querySelector(".minutes");
let hoursElement = document.querySelector(".hours");
let daysElement = document.querySelector(".days");

let seconds = 0;
let minutes = 56;
let hours = 23;
let days = 8;

//first dicrease seconds by 1 and after it reaches 0 we need to dicrease minutes by 1 and after minutes reaces 0 we need to take 1 from hours and the same thing for days when we take one from the minutes we need to make the seconds variables == 60 and the same thing for hours and days but the difference is when we dicrease days by one the hours variable will be 24 not 60 because the day has 24 hours not 60
setInterval(() => {
  timer();

  secondsElement.innerText = seconds < 10 ? `0${seconds}` : seconds;
  minutesElement.innerText = minutes < 10 ? `0${minutes}` : minutes;
  hoursElement.innerText = hours < 10 ? `0${hours}` : hours;
  daysElement.innerText = days < 10 ? `0${days}` : days;
}, 1000);
function timer() {
  if (seconds > 0) {
    seconds--;
  }
  if (seconds == 0 && minutes > 0) {
    minutes--;
    seconds += 60;
  }
  if (minutes == 0 && hours > 0) {
    hours--;
    minutes += 60;
  } else if (hours == 0 && days > 0) {
    days--;
    hours += 24;
  } else if (days == 0) {
    return;
  }
}
