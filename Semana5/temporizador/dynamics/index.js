const canvasTimer = document.getElementById('cavasTimer');
const buttonStart = document.getElementById('buttonStart');
const buttonStop = document.getElementById('buttonStop');
const buttonCancel = document.getElementById('buttonCancel');
const buttonAccept = document.getElementById('buttonAccept');
const inputHours = document.getElementById('inputHours');
const inputMinutes = document.getElementById('inputMinutes');
const inputSeconds = document.getElementById('inputSeconds');

const context = canvasTimer.getContext('2d');
const centerX = canvasTimer.width / 2;
const centerY = canvasTimer.height / 2;
const radiusTimer = 70;
const endPercentage = 10;
const counterClockwise = false;
const circuleTimer = Math.PI * 2;
const step = Math.PI / 2;
const alarmSound = new Audio('https://cdn.freesound.org/previews/219/219244_4082826-lq.mp3');

let currentPercentage = 0;
let timer = 0;
let countSeconds = 0;
let secondsTimer = 0

context.clearRect(0, 0, canvasTimer.width, canvasTimer.height);

context.beginPath();
context.lineWidth = 1;
context.strokeStyle = "#000";
context.arc(centerX, centerY, 80, 0, 2 * Math.PI, true);
context.stroke();

context.beginPath();
context.lineWidth = 1;
context.strokeStyle = "#000";
context.arc(centerX, centerY, 60, 0, 2 * Math.PI, true);
context.fillText("00:00:00", centerX - 20, centerY + 5);
context.stroke();

const secondsToStringFormat = (totalSeconds) => {
    const result = new Date(totalSeconds * 1000).toISOString().substr(11, 8);
    return result;
}

const showProgress = (current) => {
    context.clearRect(0, 0, canvasTimer.width, canvasTimer.height);
    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "#000";
    context.arc(centerX, centerY, 80, 0, 2 * Math.PI, true);
    context.stroke();

    context.beginPath();
    context.lineWidth = 1;
    context.strokeStyle = "#000";
    context.arc(centerX, centerY, 60, 0, 2 * Math.PI, true);
    context.stroke();

    context.beginPath();
    context.lineWidth = 18;
    context.strokeStyle = 'rgb(42, 97, 224)';
    context.arc(centerX, centerY, radiusTimer, -step, ((circuleTimer) * current) - step, false);
    let x = secondsToStringFormat(secondsTimer - countSeconds);
    console.log(x);
    context.fillText(x, centerX - 20, centerY + 5);
    context.stroke();
};

buttonAccept.addEventListener('click', () => {
    countSeconds = 0;
    showProgress(0);
    let hours = parseInt(inputHours.value);
    let minutes = parseInt(inputMinutes.value);
    let seconds = parseInt(inputSeconds.value);
    if (isNaN(hours)) hours = 0;
    if (isNaN(minutes)) minutes = 0;
    if (isNaN(seconds)) seconds = 0;
    if (
        (hours >= 0 || hours <= 23) &&
        (minutes >= 0 || minutes <= 59) &&
        (seconds >= 0 || seconds <= 59)
    ) {
        secondsTimer = seconds + (minutes * 60) + (hours * 3600);
        timer = setInterval(function() {
            countSeconds++;
            if (countSeconds >= secondsTimer) {
                clearInterval(timer);
                alarmSound.play();
            }
            window.requestAnimationFrame(
                () => {
                    showProgress(countSeconds / secondsTimer);
                }
            );
        }, 1000);
    }
});

buttonStop.addEventListener('click', () => {
    clearInterval(timer);
    alarmSound.pause();
    alarmSound.currentTime = 0;
});