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
