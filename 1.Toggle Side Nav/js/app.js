// DOM nodes
const $iToggle = document.querySelector('.toggle');
const $containerNav = document.querySelector('.container > nav');
const $main = document.querySelector('.container > main');

const toggleTransition = isDisable => {
  [$iToggle, $containerNav, $main].forEach(elem => {
    elem.classList.toggle('notransition', isDisable);
  });
};

const fetchToggleState = () => {
  let isToggle = JSON.parse(localStorage.getItem('isToggle'));
  isToggle ? toggleTransition() : (isToggle = false);
  $containerNav.classList.toggle('active', isToggle);
};

window.addEventListener('DOMContentLoaded', fetchToggleState);

$iToggle.addEventListener('click', () => {
  toggleTransition(false);
  $containerNav.classList.toggle('active');

  const isToggle = $containerNav.classList.contains('active');
  localStorage.setItem('isToggle', isToggle);
});
