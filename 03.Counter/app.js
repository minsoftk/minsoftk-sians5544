const $increaseBtn = document.querySelector('.increase');
const $decreaseBtn = document.querySelector('.decrease');
const $counter = document.querySelector('.counter');

const MakeCounter = (() => {
  let counter = 0;

  return predicate => {
    counter = predicate(counter);
    return counter;
  };
})();

const increase = n => n + 1;
const decrease = n => (n ? n - 1 : 0);

$increaseBtn.addEventListener('click', () => {
  $counter.textContent = MakeCounter(increase);
});

$decreaseBtn.addEventListener('click', () => {
  $counter.textContent = MakeCounter(decrease);
});

// decrease 함수에 n이 0일 경우 0을 return
// innerHTML -> textContent로 수정 : 자식 요소가 없을 때 사용. 자식 요소의 모든 텍스트 노드 값을 가져오기 때문에.
// closer 확실하게 이해하기
