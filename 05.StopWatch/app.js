// DOM nodes
const $timerDisplay = document.querySelector('.stopwatch > .display');
const $stopWatch = document.querySelector('.stopwatch');
const $startBtn = $stopWatch.children[1];
const $resetBtn = $stopWatch.children[2];
const $laps = document.querySelector('.laps');

// const elapseTime = { miliSecond: 0, second: 0, minute: 0 };

// 수정
// 1. printTimer
// 2. isStart -> isStartBtn
// 3. setTimeValToZero 함수 추가 : mm,ss,ms를 0으로 셋팅해주는 함수 -> 객체를 이용해서 하려했지만,
// 시안이가 작성했던 것처럼 ms를 가지고만 계산하는게 아닌 이상 여러곳에서 ss,min 값을 참조하기에 전역변수로 사용하는 것이 맞다고 판단.
// 4. 81, 86 line의 if 조건문을 다시 봤을때 무엇을 의미하는지 정확하게 이해하기가 어려웠음
// $resetBtn.getAttribute('disabled') === null 그래서 ' ! ' 를 사용하기보다 비교를 통해서 보여주는게 가독성이 좋다고 생각했음.
// 마찬가지로 84번 line에도 $resetBtn.textContent === 'Lap' 를 추가해줘서 어떤 조건인지 더 정확하게 판단하게 해줌

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

// const timeDisplay = () => {
//   const mm = Math.floor(miliSecond / 6000);
//   const ss = Math.floor(miliSecond / 100) % 60;
//   const ms = miliSecond % 100;
//   $timerDisplay.textContent = `${mm < 10 ? `0${mm}` : `${mm}`}:${ss < 10 ? `0${ss}` : `${ss}`}:${
//     ms < 10 ? `0${ms}` : `${ms}`
//   }`;
// };

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
    // timeDisplay();
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

// miliSecond += 1;
// const mm = Math.floor(miliSecond / 6000);
// const ss = Math.floor(miliSecond / 100) % 60;
// const ms = miliSecond % 100;
// $display.textContent = `${mm < 10 ? `0${mm}` : `${mm}`}:${ss < 10 ? `0${ss}` : `${ss}`}:${
// 	ms < 10 ? `0${ms}` : `${ms}`
// }`;

// 5번 마지막,  6번 리팩토링
