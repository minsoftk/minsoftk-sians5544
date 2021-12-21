// DOM nodes
const $display = document.querySelector('.stopwatch > .display');

let miliSecond = 0;
let second = 0;
let minute = 0;

setInterval(() => {
  if (second === 60) {
    minute++;
    second = 0;
  }
  if (miliSecond === 100) {
    second++;
    miliSecond = 0;
  }
  // console.log(minute, second, miliSecond);
  const sMinute = minute < 10 ? `0${minute}` : `${minute}`;
  const sSecond = second < 10 ? `0${second}` : `${second}`;
  const sMiliSecond = miliSecond < 10 ? `0${miliSecond}` : `${miliSecond}`;
  $display.textContent = `${sMinute}:${sSecond}:${sMiliSecond}`;

  miliSecond++;
}, 10);

// 재할당 or 밀리세커즈로 계산 어느 것이 더 효율적인가? 가독성이 좋은가?

// $display.textContent = `${minute < 10 ? `0${minute}` : `${minute}`}:${second < 10 ? `0${second}` : `${second}`}:${
// 	miliSecond < 10 ? `0${miliSecond}` : `${miliSecond}`
// }`;
