// DOM nodes
const $timerDisplay = document.querySelector('.stopwatch > .display');
const $stopWatch = document.querySelector('.stopwatch');
const $startBtn = $stopWatch.children[1];
const $resetBtn = $stopWatch.children[2];
const $laps = document.querySelector('.laps');

let miliSecond = 0;
let second = 0;
let minute = 0;

let isStart = 1;
// todo list

let interval;

// 1.start  버튼 누를 시 stop 으로 변경  2번째 버튼의 Lap 으로 명칭 변경 , disabled 삭제
// 2. Lap 누를 시 아래 눌렀을 때의 시간 기록 보여짐
// 3. Reset 누르면 lap 날라가고 00:00:00 보여주기

const printTimer = () => {
  const sMinute = minute < 10 ? `0${minute}` : `${minute}`;
  const sSecond = second < 10 ? `0${second}` : `${second}`;
  const sMiliSecond = miliSecond < 10 ? `0${miliSecond}` : `${miliSecond}`;

  return `${sMinute}:${sSecond}:${sMiliSecond}`;
};

$startBtn.addEventListener('click', e => {
  e.target.textContent = isStart ? 'Stop' : 'Start';
  $resetBtn.textContent = isStart ? 'Lap' : 'Reset';
  if ($resetBtn.hasAttribute('disabled')) $resetBtn.removeAttribute('disabled');
  if (isStart) {
    interval = setInterval(() => {
      if (second === 60) {
        minute++;
        second = 0;
      }
      if (miliSecond === 100) {
        second++;
        miliSecond = 0;
      }

      $timerDisplay.textContent = printTimer();
      miliSecond++;
    }, 10);
  } else {
    clearInterval(interval);
  }

  isStart = !isStart;
});

let id = 1;
$resetBtn.addEventListener('click', () => {
  // stop 버튼일때, lap
  // laps()

  // reset()
  if ($resetBtn.textContent === 'Reset' && !$resetBtn.getAttribute('disabled')) $resetBtn.setAttribute('disabled', '');

  // laps일때
  if (!isStart) {
    $laps.style.display = 'grid';
    $laps.innerHTML += `<div>${id++}</div><div>${printTimer()}</div>`;
  } else {
    miliSecond = 0;
    second = 0;
    minute = 0;
    $timerDisplay.textContent = printTimer();
    $laps.innerHTML = '<div>Laps</div><div>Time</div>';
    $laps.style.display = 'none';
    id = 1;
  }
});

// 재할당 or 밀리세커즈로 계산 어느 것이 더 효율적인가? 가독성이 좋은가?
// 웹 페이지 동작 vs 웹 어플리케이션 상태 저장
// disabled = true , disabled

// $display.textContent = `${minute < 10 ? `0${minute}` : `${minute}`}:${second < 10 ? `0${second}` : `${second}`}:${
// 	miliSecond < 10 ? `0${miliSecond}` : `${miliSecond}`
// }`;
