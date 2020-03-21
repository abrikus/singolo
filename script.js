const href = document.querySelectorAll('.nav__item_link');

href.forEach(item => {
  item.addEventListener('click', () => {
    href.forEach(el => {
      el.classList.remove('nav__item_link__selected')
    });
    item.classList.add('nav__item_link__selected');
  });
});

let slideIndex = 1;
const slides = document.querySelectorAll('.slider__item');
const arrowPrev = document.querySelector('.arrow-prev');
const arrowNext = document.querySelector('.arrow-next');

function showSlides(n) {
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  slides.forEach((item)=> {
    item.style.display = 'none';
  });

  slides[slideIndex - 1].style.display = 'flex';
}

function changeSlide(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

arrowPrev.addEventListener('click', function() {
  changeSlide(-1);
  // slider.classList.toggle('slider-blue');
});

arrowNext.addEventListener('click', function() {
  changeSlide(1);
  // slider.classList.toggle('slider-blue');
});

showSlides(slideIndex);