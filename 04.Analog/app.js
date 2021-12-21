const $timeHour = document.querySelector('.hour');
const $timeMinute = document.querySelector('.minute');
const $timeSecond = document.querySelector('.second');

const currentClock = () => {
  const currentTime = new Date();

  $timeHour.style.setProperty('--deg', currentTime.getHours());
  $timeMinute.style.setProperty('--deg', currentTime.getMinutes());
  $timeSecond.style.setProperty('--deg', currentTime.getSeconds());
};

window.addEventListener('load', currentClock);
