const $toggleBtn = document.querySelector('.toggle-button-switch');

window.addEventListener('DOMContentLoaded', () => {
  let currentTheme = JSON.parse(localStorage.getItem('theme'));

  if (currentTheme === null) currentTheme = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';

  document.body.classList.toggle('dark', currentTheme);

  setTimeout(() => {
    document.body.style.opacity = 1;
  }, 800);
});

$toggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
  const isToggle = document.body.classList.contains('dark');
  localStorage.setItem('theme', isToggle);
});

// localStorage에서 theme state 받아오고 난 뒤, transition 없애는 문제 -> load 이벤트를 사용해서 transition이 생기는 경우들이 있었음. DOMContentLoaded로 해결
// .notrnasition css 를 만들어주는 것은 안되나?
// transition = none 설정했을 때, none 0s ease 0s
