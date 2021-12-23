const $accordion = document.querySelector('.accordion');
const $containerActive = document.querySelector('.menu-container.active > .submenu');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    $accordion.style.opacity = 1;
  }, 400);
  console.log($containerActive);
  $containerActive.style.height = `${$containerActive.scrollHeight}px`;
});
