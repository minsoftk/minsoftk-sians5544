const $body = document.querySelector('body');
const $toggleBtn = document.querySelector('.toggle-button-switch');
const $toggleBtnTextOn = document.querySelector('.toggle-button-text');
window.addEventListener('load', () => {
  let currentTheme = JSON.parse(localStorage.getItem('theme'));
  if (currentTheme) {
    [$toggleBtn, $toggleBtnTextOn].forEach(elem => {
      console.log(elem.style.transition);
      elem.style.transitionProperty = 'none';
      console.log(elem.style.transition);
    });
  }
  currentTheme =
    currentTheme === null
      ? window.matchMedia('(prefers-color-scheme:dark)').matches
        ? 'dark'
        : 'light'
      : $body.classList.toggle('dark', currentTheme);
  // $body.style.opacity = 1;
});

$toggleBtn.addEventListener('click', e => {
  $body.classList.toggle('dark');
  const isToggle = $body.classList.contains('dark');
  localStorage.setItem('theme', isToggle);
});
