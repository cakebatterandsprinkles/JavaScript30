const secondHand = document.getElementById('hand__second');
const secondsDigital = document.querySelector('.digit__second');
const minuteHand = document.getElementById('hand__minute');
const minutesDigital = document.querySelector('.digit__minute');
const hoursHand = document.getElementById('hand__hour');
const hoursDigital = document.querySelector('.digit__hour');
const dateContainer = document.querySelector('.date');
const weekdayContainer = document.querySelector('#weekday');

function setTime() {
  const now = new Date();

  const seconds = now.getSeconds();
  if (seconds < 10) {
    secondsDigital.innerHTML = `<p>0${seconds}</p>`;
  } else {
    secondsDigital.innerHTML = `<p>${seconds}</p>`;
  }
  const secondDegrees = ((360 / 60) * seconds) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;

  const minutes = now.getMinutes();
  if (minutes < 10) {
    minutesDigital.innerHTML = `<p>0${minutes}:</p>`;
  } else {
    minutesDigital.innerHTML = `<p>${minutes}:</p>`;
  }

  const minuteDegrees = ((360 / 60) * minutes) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

  const hours = now.getHours();
  hoursDigital.innerHTML = `<p>${hours}:</p>`;
  const hoursDegrees = ((360 / 12) * hours) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

function setDate() {
  let day;
  const today = new Date();
  const days = today.getUTCDate();
  const weekday = today.getUTCDay();
  switch (weekday) {
    case 1:
      day = 'Monday';
      weekdayContainer.className = 'purple';
      break;
    case 2:
      day = 'Tuesday';
      weekdayContainer.className = 'blue';
      break;
    case 3:
      day = 'Wednesday';
      weekdayContainer.className = 'green';
      break;
    case 4:
      day = 'Thursday';
      weekdayContainer.className = 'yellow';
      break;
    case 5:
      day = 'Friday';
      weekdayContainer.className = 'orange';
      break;
    case 6:
      day = 'Saturday';
      weekdayContainer.className = 'pink';
      break;
    case 7:
      day = 'Sunday';
      weekdayContainer.className = 'red';
      break;
  }

  const months = today.getUTCMonth() + 1;
  const years = today.getUTCFullYear();
  dateContainer.innerHTML = `<p>${months} | ${days} | ${years}</p>`;
  weekdayContainer.innerHTML = `<p>${day}</p>`;
}
setDate();
setInterval(setTime, 1000);
setInterval(setDate, 1000 * 60);