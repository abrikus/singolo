const href = document.querySelectorAll('.nav__item_link');

href.forEach(item => {
  item.addEventListener('click', () => {
    href.forEach(el => {
      el.classList.remove('nav__item_link__selected')
    });
    item.classList.add('nav__item_link__selected');
  });
});