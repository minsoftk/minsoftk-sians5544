const $calendar = document.querySelector('.calendar');
const $button = document.querySelector('.date-picker');
window.addEventListener('DOMContentLoaded', () => {
  console.log('test');
});

$button.addEventListener('click', () => {
  $calendar.style.display = 'block';
});

// https://parkcj.wordpress.com/2012/10/24/html-href-%EC%99%80-src-%EC%9D%98-%EC%B0%A8%EC%9D%B4/
