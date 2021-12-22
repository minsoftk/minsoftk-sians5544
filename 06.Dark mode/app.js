const $body = document.querySelector('body');
const $toggleBtn = document.querySelector('.toggle-button-switch');
const $toggleBtnTextOn = document.querySelector('.toggle-button-text');

window.addEventListener('DOMContentLoaded', () => {
  let currentTheme = JSON.parse(localStorage.getItem('theme'));
  currentTheme =
    currentTheme === null
      ? window.matchMedia('(prefers-color-scheme:dark)').matches
        ? 'dark'
        : 'light'
      : $body.classList.toggle('dark', currentTheme);

  if (currentTheme) {
    [$toggleBtn, $toggleBtnTextOn].forEach(elem => {
      elem.style.transition = 'none';
    });
  }

  // $body.style.opacity = 1;
});

// 초기 렌더링시에만 트랜지션이 안보이면 됨.
// .notransition class 만들기
$toggleBtn.addEventListener('click', () => {
  // console.log($toggleBtn.style.transition);
  if ($toggleBtn.style.transition === 'none 0s ease 0s' && $toggleBtnTextOn.style.transition === 'none 0s ease 0s') {
    $toggleBtn.style.transition = 'left 0.3s';
    $toggleBtnTextOn.style.transition = 'background-color 0.3s';
  }
  $body.classList.toggle('dark');
  const isToggle = $body.classList.contains('dark');
  localStorage.setItem('theme', isToggle);
  // localStorage.theme = document.body.classList.contains('dark') ? 'dark' : '';
});

// localStorage에서 theme state 받아오고 난 뒤, transition 없애는 문제 -> load 이벤트를 사용해서 transition이 생기는 경우들이 있었음. DOMContentLoaded로 해결
// .notrnasition css 를 만들어주는 것은 안되나?
// transition = none 설정했을 때, none 0s ease 0s
