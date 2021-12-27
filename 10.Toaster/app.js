const $body = document.body;
const $showSuccess = document.querySelector('.show-success');
const $showError = document.querySelector('.show-error');
const $showWarning = document.querySelector('.show-warning');

const title = { success: 'Well done!', error: 'Check it Out!', warning: 'Check it Out!' };

const toastBox = category => {
  const $len = document.querySelectorAll('.toast');
  const $div = document.createElement('div');

  $div.className = `toast toast-${category}`;
  $body.appendChild($div);
  $div.innerHTML = `
	<h4 class="toast-heading">${title[category]} ${$len.length}</h4>
		<div class="toast-message">
			<svg width="24" height="24">
				<use href="#${category}" />
			</svg>
			<p> This is a ${category} alert</p>
		</div>
		<a class="close">&times;</a>`;

  setTimeout(() => {
    $body.removeChild($div);
  }, 3000);
};

const adjustHeight = () => {
  const $toasts = document.querySelectorAll('.toast');
  $toasts.forEach((item, idx) => {
    const calcHeight = item.offsetHeight * ($toasts.length - 1 - idx);
    if (idx !== $toasts.length - 1) item.style.bottom = `${calcHeight}px`;
  });
  $toasts[$toasts.length - 1].style.bottom = '0';
};

$showSuccess.addEventListener('click', () => {
  toastBox('success');
  adjustHeight();
});

$showError.addEventListener('click', () => {
  toastBox('error');
  adjustHeight();
});

$showWarning.addEventListener('click', () => {
  toastBox('warning');
  adjustHeight();
});

$body.addEventListener('click', e => {
  if (e.target.className !== 'close') return;
  $body.removeChild(e.target.parentNode);
  adjustHeight();
});

// SVG 2 removed the need for the xlink namespace, so instead of xlink:href you should use href.
// success 이벤트가 한번밖에 발생 안함 원인 : toastBox('success'); => innerHTML을 사용해서
// setTimeout 설정 문제
