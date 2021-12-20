// DOM nodes
const $iToggle = document.querySelector('.toggle');
const $containerNav = document.querySelector('.container > nav');

const test = () => {};

const fetchToggleState = () => {
  sessionStorage.getItem('isToggle') ? '' : sessionStorage.setItem('isToggle', false);
  test();
};

window.addEventListener('DOMContentLoaded', fetchToggleState);

$iToggle.addEventListener('click', e => {
  const isToggle = $containerNav.classList.contains('active');

  sessionStorage.setItem('isToggle', isToggle);

  $containerNav.classList.toggle('active');
});
