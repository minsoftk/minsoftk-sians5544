const $calendar = document.querySelector('.calendar');
const $datePicker = document.querySelector('.date-picker');

const NAME_OF_MONTHS = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

const NAME_OF_DAYS = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

let month = 0;
let year = 0;
let day = 0;

const fetchCalenderDate = () => {
  const today = new Date();
  month = today.getMonth();
  year = today.getFullYear();
  day = today.getDate();
};

const getFirstLastDate = () => ({
  lastMonthLastDate: new Date(year, month, 0),
  thisMonthFirstDate: new Date(year, month, 1),
  thisMonthLastDate: new Date(year, month + 1, 0),
  nextMonthFirstDate: new Date(year, month + 1, 1),
});

const render = () => {
  $calendar.innerHTML = `
  <div class="calendar-nav">
    <button class="prev-button button">◀</button>
    <div class="date-info">
      <p>${NAME_OF_MONTHS[month]}</p>
      <span>${year}</span>
    </div>
    <button class="next-button button">▶</button>
    </div>
	<div class="calendar-grid">
	</div>
 `;

  const $calendarGrid = document.querySelector('.calendar-grid');
  const date = getFirstLastDate();

  const monthDate = Array.from(
    { length: NAME_OF_DAYS.length },
    (_, index) => `<div class ='prev-next-month grid-item'>${NAME_OF_DAYS[index]}</div>`
  );

  const prevMonthArray = Array.from(
    { length: date.thisMonthFirstDate.getDay() },
    (_, idx) =>
      `<div class ='prev-next-month grid-item this-month-date'> ${
        date.lastMonthLastDate.getDate() - (6 - date.thisMonthFirstDate.getDay()) + idx + 1
      }</div>`
  );

  const thisMonthArray = Array.from(
    { length: date.thisMonthLastDate.getDate() },
    (_, idx) =>
      `<div class="grid-item this-month-date ${day === idx + 1 ? ' select-today' : ''} ${
        (date.thisMonthFirstDate.getDay() + idx) % 7 === 0 ? ' present-holiday' : ''
      }">${idx + 1}</div>`
  );

  const nextMonthArray = Array.from(
    { length: 6 - date.thisMonthLastDate.getDay() },
    (_, idx) => `<div class='prev-next-month grid-item this-month-date'>${idx + 1}</div>`
  );

  $calendarGrid.innerHTML = [...monthDate, ...prevMonthArray, ...thisMonthArray, ...nextMonthArray].join('');
};

const calcDate = e => {
  if (e.target.classList.contains('prev-button')) {
    month -= 1;
    if (month === -1) {
      month = 11;
      year -= 1;
    }
  } else {
    month += 1;
    if (month === 12) {
      month = 0;
      year += 1;
    }
  }
};

window.addEventListener('DOMContentLoaded', () => {
  fetchCalenderDate();
  render();
});

$datePicker.addEventListener('click', () => {
  $calendar.style.display = 'block';
});

$calendar.addEventListener('click', e => {
  if (e.target.classList.contains('button')) calcDate(e);
  else if (e.target.classList.contains('grid-item')) {
    const sMonth = String(month + 1).padStart(2, '0');
    const sText = String(e.target.textContent).padStart(2, '0');
    $datePicker.value = `${year}-${sMonth}-${sText}`;
    $calendar.style.display = 'none';
  }

  render();
});

// https://parkcj.wordpress.com/2012/10/24/html-href-%EC%99%80-src-%EC%9D%98-%EC%B0%A8%EC%9D%B4/
