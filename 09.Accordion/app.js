const $accordion = document.querySelector('.accordion');
const $containerActiveSub = document.querySelector('.menu-container.active > .submenu');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    $accordion.style.opacity = 1;
  }, 400);
  $containerActiveSub.style.height = `${$containerActiveSub.scrollHeight}px`;
});

// 1. active 되있는거 제거
// 2. 선택된 menu active 추가
// 3. 다시한번 눌렀을 때, 닫히게 만들어야되는가?

$accordion.addEventListener('click', e => {
  if (!e.target.classList.contains('menu')) return;

  const $menuContainer = document.querySelectorAll('.menu-container');

  $menuContainer.forEach(container => {
    const $menu = container.children[0];
    const $menuItem = container.children[1];
    container.classList.toggle('active', e.target === $menu);
    !container.classList.contains('active')
      ? ($menuItem.style.height = 0)
      : ($menuItem.style.height = `${$menuItem.scrollHeight}px`);
  });
});

// web Browser 눌렀을 때,  menu-container에 active가 안빠지는 문제
