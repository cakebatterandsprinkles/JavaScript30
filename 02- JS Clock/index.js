const secondHand = document.getElementById('hand__second');
const secondsDigital = document.querySelector('.digit__second');
const minuteHand = document.getElementById('hand__minute');
const minutesDigital = document.querySelector('.digit__minute');
const hoursHand = document.getElementById('hand__hour');
const hoursDigital = document.querySelector('.digit__hour');
const dateContainer = document.querySelector('.date');
const weekdayContainer = document.querySelector('#weekday');

const dayNames = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
const dayClasses = ['purple', 'blue', 'green', 'yellow', 'orange', 'pink', 'red'];

function setTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  secondsDigital.innerHTML = `<p>${padNumber(seconds, 2)}</p>`;

  const secondDegrees = ((360 / 60) * seconds) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  minutesDigital.innerHTML = `<p>${padNumber(minutes, 2)}:</p>`;

  const minuteDegrees = ((360 / 60) * minutes) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = now.getHours();
  hoursDigital.innerHTML = `<p>${hours}:</p>`;
  const hoursDegrees = ((360 / 12) * hours) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function setDate() {
  const today = new Date();
  const days = today.getUTCDate();
  const weekday = today.getUTCDay();

  const day = dayNames[weekday - 1];
  weekdayContainer.className = dayClasses[weekday - 1];

  const months = today.getUTCMonth() + 1;
  const years = today.getUTCFullYear();
  dateContainer.innerHTML = `<p>${padNumber(months, 2)} | ${days} | ${years}</p>`;
  weekdayContainer.innerHTML = `<p>${day}</p>`;
}

function padNumber(number, length) {
  return ('' + number).padStart(length, '0');
}

setDate();
setInterval(setTime, 1000);
setInterval(setDate, 1000 * 60);