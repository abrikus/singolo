const href = document.querySelectorAll('.nav__item_link');
const header = document.querySelector('.header');
const anchors = document.querySelectorAll('a[href*="#"]');

href.forEach(item => {
  item.addEventListener('click', () => {
    href.forEach(el => {
      el.classList.remove('nav__item_link__selected')
    });
    item.classList.add('nav__item_link__selected');
  });
});

anchors.forEach(item => {
  item.addEventListener('click', function(e) {
    e.preventDefault();
    let anchorName = this.getAttribute('href').substring(1);
    const scrollTo = document.getElementById(anchorName);
    const position = scrollTo.getBoundingClientRect().top;
    const offset = position - 73;
    window.scrollBy({
      top: offset,
      behavior: 'smooth',
      block: 'start'
    })
  })
})

window.onload = () => {
  const heightP = document.querySelector('.portfolio').offsetHeight;
  const heightSer = document.querySelector('.services').offsetHeight;
  const heightSl = document.querySelector('.slider').offsetHeight;
  const heightA = document.querySelector('.about').offsetHeight;
  const heightQ = document.querySelector('.quote').offsetHeight;

  window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 98) {
      header.classList.add('header-fixed');
    } else {
      header.classList.remove('header-fixed');
    }

    if (scrollPosition > heightSl + heightSer + heightP + heightA) {
      href.forEach(item => {
        item.classList.remove('nav__item_link__selected');
      });
      href[4].classList.add('nav__item_link__selected');
    } else if (scrollPosition > heightSl + heightSer + heightP - 90) {
      href.forEach(item => {
        item.classList.remove('nav__item_link__selected');
      });
      href[3].classList.add('nav__item_link__selected');
    } else if (scrollPosition > heightSl + heightSer - 90) {
      href.forEach(item => {
        item.classList.remove('nav__item_link__selected');
      });
      href[2].classList.add('nav__item_link__selected');
    } else if (scrollPosition > heightSl - 90) {
      href.forEach(item => {
        item.classList.remove('nav__item_link__selected');
      });
      href[1].classList.add('nav__item_link__selected');
    } else {
      href.forEach(item => {
        item.classList.remove('nav__item_link__selected');
      });
      href[0].classList.add('nav__item_link__selected');
    }
  });
}


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
});

arrowNext.addEventListener('click', function() {
  changeSlide(1);
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

const submitBtn = document.querySelector('.button');
const okBtn = document.querySelector('.btn');
const subject = document.querySelector('.message__subject');
const describe = document.querySelector('.message__describe');
const form = document.querySelector('.contacts__form');
const messageForm = document.querySelector('.contacts__message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const inputSubject = document.querySelector('.contacts__subject');
  const inputDescribe = document.querySelector('.contacts__textarea');
  if (inputSubject.value != '') {
    subject.textContent = `Subject: ${inputSubject.value}`;
  } else {
    subject.textContent = 'Without subject';
  };
  if (inputDescribe.value != '') {
    describe.textContent = `Description: ${inputDescribe.value}`;
  } else {
    describe.textContent = 'Without description';
  }
  messageForm.style.display = 'flex';
});

okBtn.addEventListener('click', () => {
  messageForm.style.display = 'none';
  form.reset();
})