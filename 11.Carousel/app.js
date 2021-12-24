const $container = document.querySelector('.carousel');

let imagesAll = [];
let currentSlide = 1;

const carousel = ($container, images) => {
  const $carouselslides = document.createElement('div');

  $carouselslides.classList.add('carousel-slides');

  imagesAll = [images[images.length - 1], ...images, images[0]];

  imagesAll.forEach(image => {
    const img = document.createElement('img');
    img.src = image;
    $carouselslides.appendChild(img);
  });

  $container.appendChild($carouselslides);

  [
    ['prev', '&laquo;'],
    ['next', '&raquo;'],
  ].forEach(text => {
    const $button = document.createElement('button');
    $button.classList.add('carousel-control');
    $button.classList.add(text[0]);
    $button.innerHTML = `${text[1]}`;
    $container.appendChild($button);
  });
};

window.addEventListener('DOMContentLoaded', () => {
  carousel($container, ['movies/movie-1.jpg', 'movies/movie-2.jpg', 'movies/movie-3.jpg', 'movies/movie-4.jpg']);
});

window.addEventListener('load', () => {
  const $carouselImage = document.querySelector('.carousel-slides > img');
  const $carouselSetting = document.querySelector('.carousel-slides');
  $carouselSetting.style.setProperty('--currentSlide', currentSlide);
  $container.style.width = `${$carouselImage.offsetWidth}px`;

  setTimeout(() => {
    $container.style.opacity = 1;
  }, 300);
});

// next 버튼 누르면 사진이 바뀌어야함
// 배열의 마지막 요소라면? 다시 앞으로 팅겨야함

$container.addEventListener('click', e => {
  if (!e.target.classList.contains('carousel-control')) return;

  const $carouselSetting = document.querySelector('.carousel-slides');

  e.target.classList.contains('prev') ? currentSlide-- : currentSlide++;

  $carouselSetting.style.setProperty('--duration', '300');
  $carouselSetting.style.setProperty('--currentSlide', currentSlide);
});

$container.addEventListener('transitionend', e => {
  if (!e.target.classList.contains('carousel-slides')) return;

  if (currentSlide === 0) currentSlide = 4;
  else if (currentSlide === imagesAll.length - 1) currentSlide = 1;

  e.target.style.setProperty('--duration', '0');
  e.target.style.setProperty('--currentSlide', currentSlide);
});
// https://stackoverflow.com/questions/53288059/loading-multiple-images-with-javascript
// carousel의 width만 맞춰주면 heigth는?
// carousel의 요소들인 img의 크기를 carousel 크기에 맞추는게 맞는지,
// slider크기를 이미지 크기에 맞추는게 맞는가? 동일해야 한다. 화질의 문제 등등
// 이미지 로드 width, height는 로드 된 후에 재야함.

// textContet, innerHTML -> escape 문자를 사용하는데 차이가 있음.
// setProperty로 --currentSlide 값 변경
// transition이 되고나서 currentslide 변경해야됨. transitionend 라는 이벤트를 몰라서 헤맸다.

// $carouselSetting.style.setProperty('--duration', '0');
// if (currentSlide === 0) currentSlide = imagesAll.length - 2;
// $carouselSetting.style.setProperty('--currentSlide', currentSlide);

// $carouselSetting.style.setProperty('--duration', '300');

// currentSlide = currentSlide === imagesAll.length - 1 ? 1 : currentSlide;
// currentSlide = currentSlide === 0 ? imagesAll.length - 2 : currentSlide;

// $carouselSetting.style.setProperty('--currentSlide', currentSlide);

// const $test = document.querySelector('.carousel-slides');
// if (currentSlide !== 0 && currentSlide !== imagesAll.length - 1) $test.style.setProperty('--duration', 300);
// else {
//   $test.style.setProperty('--duration', 0);
//   currentSlide === 0
//     ? $test.style.setProperty('--currentSlide', imagesAll.length - 2)
//     : $test.style.setProperty('--currentSlide', 1);
// }
// $carouselSetting.style.getPropertyValue('--duration', 300);
// imageALl.length
// currentSlide 값에 따라서 , duration : 0 , currentSlide = 마지막 요소로   0,
// });
