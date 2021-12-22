// fetch fake data
// eslint-disable-next-line arrow-body-style

const $tabs = document.querySelector('.tabs');

let todos = [];
const fetchTabsData = () =>
  new Promise(resolve => {
    setTimeout(
      () =>
        resolve([
          {
            title: 'HTML',
            content: `HTML(HyperText Markup Language) is the most basic building block of the Web. It describes and defines the content of a webpage along with the basic layout of the webpage. Other technologies besides HTML are generally used to describe a web page's appearance/presentation(CSS) or functionality/ behavior(JavaScript).`,
          },
          {
            title: 'CSS',
            content: `Cascading Style Sheets(CSS) is a stylesheet language used to describe the presentation of a document written in HTML or XML (including XML dialects such as SVG, MathML or XHTML). CSS describes how elements should be rendered on screen, on paper, in speech, or on other media.`,
          },
          {
            title: 'JavaScript',
            content: `JavaScript(JS) is a lightweight interpreted or JIT-compiled programming language with first-class functions. While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. JavaScript is a prototype-based, multi-paradigm, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles.`,
          },
        ]),
      1000
    );
  });

const render = () => {
  const $nav = document.createElement('nav');
  todos.forEach((todo, idx) => {
    const $div = document.createElement('div');
    $div.classList.add('tab');
    $div.setAttribute('data-index', idx);
    $div.textContent = todo.title;
    $nav.appendChild($div);
  });

  const $span = document.createElement('span');
  $span.classList.add('glider');
  $nav.appendChild($span);
  $tabs.appendChild($nav);

  todos.forEach((todo, idx) => {
    const $div = document.createElement('div');
    idx ? $div.classList.add('tab-content') : $div.classList.add('tab-content', 'active');
    // toggle로 바꿔보기
    $div.textContent = todo.content;
    $tabs.appendChild($div);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  fetchTabsData().then(response => {
    todos = response;
    render();
  });
});

// tabs의 자식요소 .tab 에 이벤트 위임 , data-index를 저장
// tab-content에서 active 어트리뷰트 찾아서 제거해주고, data-index번의 요소에 active를 추가.
$tabs.addEventListener('click', e => {
  const $tabContent = document.querySelectorAll('.tab-content');

  [...$tabContent].forEach((content, index) => {
    content.classList.toggle('active', index === +e.target.dataset.index);
  });
});

// $tabs 이벤트 리스너에서 자식 요소의 $tabContent를 받아오지 못함.

// todo
// loading 없애는 것.
// tab 클릭했을 때, 색깔 변경해주기
