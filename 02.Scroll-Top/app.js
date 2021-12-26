// DOM nodes
const $scrollBtn = document.querySelector('.scroll-icon');

$scrollBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

// 사용자 관점!
// Loadash 사용하기
const LIMIT_OFFSET = 200;
document.addEventListener(
  'scroll',
  _.throttle(() => {
    $scrollBtn.style.display = window.pageYOffset > LIMIT_OFFSET ? 'block' : 'none';
  }, 200)
);

// document, window 객체 scroll 이벤트에 사용 차이? -> window를 사용하면 불필요한 이벤트 위임이 된다.
// problems
// 1. opacity 문제
// 2. 스로틀 : 200으로 설정했을 때, 스크롤을 빨리 내리면 pageYOffset 동작이 안함.
// offset, scroll, client 구별
