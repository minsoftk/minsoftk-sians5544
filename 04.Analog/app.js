const $timeHour = document.querySelector('.hour');
const $timeMinute = document.querySelector('.minute');
const $timeSecond = document.querySelector('.second');

const HOUR_DEGREE = 30;
const MMSS_TO_DEGREE = 6;

const currentClock = () => {
  const currentTime = new Date();

  const hour = currentTime.getHours();
  const minute = currentTime.getMinutes();
  const second = currentTime.getSeconds();

  const hourAngle =
    hour > 12 ? (hour - 12) * HOUR_DEGREE : hour * HOUR_DEGREE + (currentTime.getMinutes() / 60) * HOUR_DEGREE;

  $timeHour.style.setProperty('--deg', hourAngle);
  $timeMinute.style.setProperty('--deg', minute * MMSS_TO_DEGREE);
  $timeSecond.style.setProperty('--deg', second * MMSS_TO_DEGREE);
};

// handle
const handleLoad = () => {
  setInterval(() => currentClock(), 1000);
};

window.addEventListener('load', handleLoad);

// load, DOMContentLoaded의 차이?
// window.addEventListener('load', currentClock); 가 왜 currnetClock보다 나중에 와야하는가?
// setProperty 적용에 대해서

// 무엇을 몰랐는지 => 어떻게 해결했는지
