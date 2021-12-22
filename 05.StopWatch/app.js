// DOM nodes
const $timerDisplay = document.querySelector('.stopwatch > .display');
const $stopWatch = document.querySelector('.stopwatch');
const $startBtn = $stopWatch.children[1];
const $resetBtn = $stopWatch.children[2];
const $laps = document.querySelector('.laps');

let miliSecond = 0;
// const second = 0;
// const minute = 0;

let isStart = 1;
let intervalId;

// 즉시실행함수, 클로저
// 1
// const printTimer = () => {
//   const sMinute = minute < 10 ? `0${minute}` : `${minute}`;
//   const sSecond = second < 10 ? `0${second}` : `${second}`;
//   const sMiliSecond = miliSecond < 10 ? `0${miliSecond}` : `${miliSecond}`;
//   return `${sMinute}:${sSecond}:${sMiliSecond}`;
// };

const removeDisableAttr = () => {
  if ($resetBtn.hasAttribute('disabled')) $resetBtn.removeAttribute('disabled');
};

const timeDisplay = () => {
  const mm = Math.floor(miliSecond / 6000);
  const ss = Math.floor(miliSecond / 100) % 60;
  const ms = miliSecond % 100;
  $timerDisplay.textContent = `${mm < 10 ? `0${mm}` : `${mm}`}:${ss < 10 ? `0${ss}` : `${ss}`}:${
    ms < 10 ? `0${ms}` : `${ms}`
  }`;

  // if (second === 60) {
  //   minute++;
  //   second = 0;
  // }
  // if (miliSecond === 100) {
  //   second++;
  //   miliSecond = 0;
  // }

  // $timerDisplay.textContent = printTimer();
  // miliSecond++;
};

const assignInterval = () => {
  intervalId = setInterval(() => {
    miliSecond += 1;
    timeDisplay();
  }, 10);
};

// 이벤트 위임
$startBtn.addEventListener('click', e => {
  e.target.textContent = isStart ? 'Stop' : 'Start';
  $resetBtn.textContent = isStart ? 'Lap' : 'Reset';

  removeDisableAttr();

  isStart ? assignInterval() : clearInterval(intervalId);

  isStart = !isStart;
});

let id = 1;
$resetBtn.addEventListener('click', () => {
  if ($resetBtn.textContent === 'Reset' && !$resetBtn.getAttribute('disabled')) $resetBtn.setAttribute('disabled', '');

  if (!isStart) {
    $laps.style.display = 'grid';
    $laps.innerHTML += `<div>${id++}</div><div>${$timerDisplay.textContent}</div>`;
  } else {
    // 3.
    $timerDisplay.textContent = '00:00:00';
    // $timerDisplay.textContent = printTimer();
    $laps.innerHTML = '<div>Laps</div><div>Time</div>';
    $laps.style.display = 'none';
    id = 1;
    miliSecond = 0;
  }
});

// 재할당 or 밀리세커즈로 계산 어느 것이 더 효율적인가? 가독성이 좋은가?
// disabled = true , disabled

// miliSecond += 1;
// const mm = Math.floor(miliSecond / 6000);
// const ss = Math.floor(miliSecond / 100) % 60;
// const ms = miliSecond % 100;
// $display.textContent = `${mm < 10 ? `0${mm}` : `${mm}`}:${ss < 10 ? `0${ss}` : `${ss}`}:${
// 	ms < 10 ? `0${ms}` : `${ms}`
// }`;

// 5번 마지막,  6번 리팩토링
