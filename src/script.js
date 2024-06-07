let countDown = document.querySelectorAll(".dates");

let initialFunctionCall = false;

let days;
let hours;
let minutes;
let seconds;

const getTimer = () => {
  let currentDateTime = new Date();

  let tD = document.getElementById("datetime-local").value;
  let timerDateTime = new Date(tD);

  let diff = (timerDateTime - currentDateTime) / 1000;

  if (diff < 0) {
    return;
  }

  days = Math.floor(diff / (3600 * 24));
  hours = Math.floor((diff / 3600) % 24);
  minutes = Math.floor((diff / 60) % 60);
  seconds = Math.floor(diff % 60);

  countDown[0].value = days;
  countDown[1].value = hours;
  countDown[2].value = minutes;
  countDown[3].value = seconds;

  initialFunctionCall = true;
};

setInterval(() => {
  if (initialFunctionCall) {
    getTimer();
  }
}, 1000);
