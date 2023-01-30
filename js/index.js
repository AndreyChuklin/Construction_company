document.addEventListener('DOMContentLoaded', (e) => {
  document.getElementById('btn-search').addEventListener('click', (e) => {
    document.getElementById('form-search').classList.add('header__form-visible')
  })

  document.getElementById('btn-close').addEventListener('click', (e) => {
    document.getElementById('form-search').classList.remove('header__form-visible')
  })

  document.getElementById('form-search').addEventListener('submit', (e) => {
    e.preventDefault()
  })

})


new Accordion('.accordion-container');    

//burger
let burger = document.querySelector('.header__burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',
function () {

  burger.classList.toggle('header__burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('header__burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll');
  })
})

// swiper
const swiper = new Swiper('.swiper-container', {
  loop: true,

  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
  a11y: {
    paginationBulleMassage: 'название слайда {{index}}',
    paginationBulletMessage: 'кнопка переключения изображения {{index}}',
  }
});

// tabs

let tabsBtn = document.querySelectorAll('.work__step__btn');
let tabsItem = document.querySelectorAll('.work__content-item');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

    tabsBtn.forEach(function(btn){ btn.classList.remove('work__step__btn--active')});
    e.currentTarget.classList.add('work__step__btn--active');

    tabsItem.forEach(function(element){ element.classList.remove('work__content-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('work__content-item--active');
  });
});



