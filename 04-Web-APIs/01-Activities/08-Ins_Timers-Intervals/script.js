var timeEl = document.querySelector(".time");
var mainEl = document.getElementById("main");

var secondsLeft = 10;
var timerInterval;
function setTime() {
  timerInterval = setInterval(updateTimer, 1000);
}

function updateTimer() {
  secondsLeft--;
  timeEl.textContent = secondsLeft + " seconds left till colorsplosion.";

  if(secondsLeft === 0) {
    clearInterval(timerInterval);
    setTimeout(sendMessage, 1000);
  }
}

function sendMessage() {
  timeEl.textContent = " ";

  var imgEl = document.createElement("img");

  imgEl.setAttribute("src", "images/image_1.jpg");
  mainEl.appendChild(imgEl);

}

setTime();