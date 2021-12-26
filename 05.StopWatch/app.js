// DOM nodes
const $timerDisplay = document.querySelector('.stopwatch > .display');
const $stopWatch = document.querySelector('.stopwatch');
const $startBtn = $stopWatch.children[1];
const $resetBtn = $stopWatch.children[2];
const $laps = document.querySelector('.laps');

let miliSecond = 0;
let second = 0;
let minute = 0;

let isStartBtn = true;
let intervalId;

const printTimer = () => {
  const sMinute = minute < 10 ? `0${minute}` : `${minute}`;
  const sSecond = second < 10 ? `0${second}` : `${second}`;
  const sMiliSecond = miliSecond < 10 ? `0${miliSecond}` : `${miliSecond}`;
  $timerDisplay.textContent = `${sMinute}:${sSecond}:${sMiliSecond}`;
};

const removeDisableAttr = () => {
  if ($resetBtn.hasAttribute('disabled')) $resetBtn.removeAttribute('disabled');
};

const setTimeValToZero = () => {
  miliSecond = 0;
  second = 0;
  minute = 0;
};

const assignInterval = () => {
  intervalId = setInterval(() => {
    if (second === 60) {
      minute++;
      second = 0;
    }
    if (miliSecond === 100) {
      second++;
      miliSecond = 0;
    }
    printTimer();
    miliSecond++;
  }, 10);
};

// 이벤트 위임
$startBtn.addEventListener('click', e => {
  e.target.textContent = isStartBtn ? 'Stop' : 'Start';
  $resetBtn.textContent = isStartBtn ? 'Lap' : 'Reset';

  removeDisableAttr();

  isStartBtn ? assignInterval() : clearInterval(intervalId);

  isStartBtn = !isStartBtn;
});

let id = 1;
$resetBtn.addEventListener('click', () => {
  if ($resetBtn.textContent === 'Reset' && $resetBtn.getAttribute('disabled') === null) {
    $resetBtn.setAttribute('disabled', '');
  }

  if ($resetBtn.textContent === 'Lap' && isStartBtn === false) {
    $laps.style.display = 'grid';
    $laps.innerHTML += `<div>${id}</div><div>${$timerDisplay.textContent}</div>`;
    id++;
  } else {
    $timerDisplay.textContent = '00:00:00';
    $laps.innerHTML = '<div>Laps</div><div>Time</div>';
    $laps.style.display = 'none';
    id = 1;
    setTimeValToZero();
  }
});

// 재할당 or 밀리세커즈로 계산 어느 것이 더 효율적인가? 가독성이 좋은가?
// disabled = true , disabled
// 5번 마지막,  6번 리팩토링
