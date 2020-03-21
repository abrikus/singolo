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

const portfolioTabs = document.querySelectorAll('.portfolio__list_item');
const portfolioImgs = document.querySelectorAll('.portfolio__img');

portfolioTabs.forEach(item => {
  item.addEventListener('click', () => {
    portfolioTabs.forEach(item => {
      item.classList.remove('portfolio__list_item-selected');
    });
    item.classList.add('portfolio__list_item-selected');
    portfolioImgs.forEach(item => {
      item.classList.remove('portfolio__img-selected');
    });
  });
});

portfolioImgs.forEach(item => {
  item.addEventListener('click', () => {
    portfolioImgs.forEach(item => {
      item.classList.remove('portfolio__img-selected');
    });
    item.classList.add('portfolio__img-selected');
  });
});

const portfolioPrj = document.querySelectorAll('.portfolio__projects');
const portfolioTabsList = document.querySelector('.portfolio__list');

function hideImgs (n) {
  for (let i = n; i < portfolioPrj.length; i++) {
    portfolioPrj[i].classList.remove('show');
    portfolioPrj[i].classList.add('hidden');
  }
}

function showImgs (num) {
  if (portfolioPrj[num].classList.contains('hidden')) {
    portfolioPrj[num].classList.remove('.hidden');
    portfolioPrj[num].classList.add('show');
  }
}

hideImgs (1);

portfolioTabsList.addEventListener('click', function(event) {
  if (event.target.classList.contains('portfolio__list_item')) {
    for (let i = 0; i < portfolioTabs.length; i++) {
      if (event.target == portfolioTabs[i]) {
        hideImgs(0);
        showImgs(i);
      }
    }
  }
})