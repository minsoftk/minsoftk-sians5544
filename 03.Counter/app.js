const $increaseBtn = document.querySelector('.increase');
const $decreaseBtn = document.querySelector('.decrease');
const $counter = document.querySelector('.counter');

const MakeCounter = (() => {
  let counter = 0;

  return preicate => {
    counter = preicate(counter);
    return counter;
  };
})();

const increase = n => ++n;
const decrease = n => --n;

$increaseBtn.addEventListener('click', e => {
  $counter.innerHTML = MakeCounter(increase);
});

$decreaseBtn.addEventListener('click', e => {
  $counter.innerHTML = MakeCounter(decrease);
});
