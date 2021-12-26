const $toggleButton = document.querySelector('.toggleButton');
const $modal = document.querySelector('.modal');
const $fromPopup = document.querySelector('.from-popup');

const $popupInput = document.querySelector('.popup-input');
const $popUpCancel = document.querySelector('.popUp-cancel');
const $popUpClose = document.querySelector('.popUp-close');

const setDisplayNone = () => {
  $modal.style.display = 'none';
  $popupInput.value = '';
};

document.querySelector('form').addEventListener('submit', e => {
  e.preventDefault();

  const content = $popupInput.value.trim();

  if (content) {
    $fromPopup.style.display = 'block';
    $fromPopup.textContent = 'fromPopup: ' + content;
    $popupInput.value = '';
  }

  setDisplayNone();
});

$toggleButton.addEventListener('click', () => {
  $modal.style.display = 'block';
  $popupInput.focus();
});

$popUpClose.addEventListener('click', () => setDisplayNone());
$popUpCancel.addEventListener('click', () => setDisplayNone());

$modal.addEventListener('click', e => {
  if (!e.target.classList.contains('modal')) return;
  setDisplayNone();
});

// setProperty , style.~~ 차이?
