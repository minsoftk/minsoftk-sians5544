const $toggleButton = document.querySelector('.toggleButton');
const $modal = document.querySelector('.modal');
const $popUpOk = document.querySelector('.popUpOk');
const $modalButtons = document.querySelectorAll('.modalDisplay button');

const setDisplayNone = () => {
  $modal.style.display = 'none';
};

$modalButtons.forEach(elem => {
  elem.addEventListener('click', e => {
    if (elem.classList.contains('popUpOk')) e.preventDefault();
    setDisplayNone();
  });
});

$toggleButton.addEventListener('click', () => {
  $modal.style.display = 'block';
});

$modal.addEventListener('click', e => {
  if (!e.target.classList.contains('modal')) return;
  setDisplayNone($modal);
});
