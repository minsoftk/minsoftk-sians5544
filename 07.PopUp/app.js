const $toggleButton = document.querySelector('.toggleButton');
const $modal = document.querySelector('.modal');
const $popupInput = document.querySelector('.popupInput');
const $modalButtons = document.querySelectorAll('.modalDisplay button');

const setDisplayNone = () => {
  $modal.style.display = 'none';
};

$modalButtons.forEach(elem => {
  elem.addEventListener('click', e => {
    if (elem.classList.contains('popUpOk')) {
      e.preventDefault();
    }
    setDisplayNone();
  });
});

$popupInput.addEventListener('submit', () => {});

$toggleButton.addEventListener('click', () => {
  $modal.style.display = 'block';
});

$modal.addEventListener('click', e => {
  if (!e.target.classList.contains('modal')) return;
  setDisplayNone($modal);
});

/*
1) form 기본기능 -> enter 누르면 submit 발생
2) 그런데 우리는 enter 을 눌러서 input value 가져와야댐
3) keyup -> enter  x => 1번 때문 
	(submit 이벤트를 열어서 e.prevet (기본기능 막기) -> keyup ) , form 태그 버리기 -div로 바꾸기  */
