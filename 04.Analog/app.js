const $timeHour = document.querySelector('.hour');
const $timeMinute = document.querySelector('.minute');
const $timeSecond = document.querySelector('.second');

const currentClock = () => {
  const HOUR_DEGREE = 30;
  const TIME_TO_DEGREE = 6;

  const currentTime = new Date();

  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  const hourAngle =
    (hour > 12 ? (hour - 12) * HOUR_DEGREE : hour * HOUR_DEGREE) + (currentTime.getMinutes() / 60) * HOUR_DEGREE;

  $timeHour.style.setProperty('--deg', hourAngle);
  $timeMinute.style.setProperty('--deg', minute * TIME_TO_DEGREE);
  $timeSecond.style.setProperty('--deg', second * TIME_TO_DEGREE);
};

const handleLoad = () => {
  setInterval(() => currentClock(), 1000);
};

window.addEventListener('load', handleLoad);
