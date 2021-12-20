// DOM nodes
const $scrollBtn = document.querySelector('.scroll-icon');
// const yOffset = window.pageYOffset;
// console.log(yOffset);

$scrollBtn.addEventListener('click', () => {
  window.scrollTo(0, 0);
});

const throttle = (callback, delay) => {
  let timerId;
  return event => {
    if (timerId) return;
    timerId = setTimeout(
      () => {
        callback(event);
        timerId = null;
      },
      delay,
      event
    );
  };
};

document.addEventListener(
  'scroll',
  throttle(() => {
    const LIMIT_OFFSET = 200;
    console.log(window.pageYOffset);
    if (window.pageYOffset > LIMIT_OFFSET) $scrollBtn.style.display = 'block';
  }, 200)
);

// document, window 객체 scroll 이벤트에 사용 차이? -> window를 사용하면 불필요한 이벤트 위임이 된다.

// problems
// 1. opacity 문제
// 2. 스로틀 : 200으로 설정했을 때, 스크롤을 빨리 내리면 pageYOffset 동작이 안함.
