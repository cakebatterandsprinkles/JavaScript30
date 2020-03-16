const secondHand = document.getElementById('hand__second');
const minuteHand = document.getElementById('hand__minute');
const hoursHand = document.getElementById('hand__hour');

function setDate() {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondDegrees = ((360 / 60) * seconds) + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
  console.log(secondDegrees);

  const minutes = now.getMinutes();
  const minuteDegrees = ((360 / 60) * minutes) + 90;
  minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
  console.log(minuteDegrees);

  const hours = now.getHours();
  const hoursDegrees = ((360 / 12) * hours) + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
  console.log(hoursDegrees);
}

setInterval(setDate, 1000);