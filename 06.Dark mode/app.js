const $body = document.querySelector('body');
const $toggleBtn = document.querySelector('.toggle-button-switch');

window.addEventListener('load', () => {
  let currentTheme = JSON.parse(localStorage.getItem('theme'));

  currentTheme =
    currentTheme === null
      ? window.matchMedia('(prefers-color-scheme:dark)').matches
        ? 'dark'
        : 'light'
      : $body.classList.toggle('dark', currentTheme);
});

$toggleBtn.addEventListener('click', e => {
  $body.classList.toggle('dark');

  const isToggle = $body.classList.contains('dark');

  localStorage.setItem('theme', isToggle);
});
