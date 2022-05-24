"use srtict"

// Бургер меню, копия от Фрилансер по жизни

const iconMenu = document.querySelector('.menu__icon');
const middle = document.querySelector('.middle-header');


if (iconMenu) {
   const menuList = document.querySelector('.menu__list');
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('lock');
      iconMenu.classList.toggle('active');
      menuList.classList.toggle('active');
      middle.classList.toggle('active');
   });
}

//--------------Табы, уже частично мои

const tubs = document.querySelectorAll('.titles-inovation__link');
const bottomText = document.querySelectorAll('.text-bottom-inovation__item');

tubs.forEach((item, i) => {
   item.addEventListener('click', function (e) {
      e.preventDefault();
      const id = e.target.getAttribute('href').replace('#', '');

      document.querySelectorAll('.titles-inovation__link').forEach(
         (child) => child.classList.remove('active')
      );
      document.querySelectorAll('.items-inovation__item').forEach(
         (child) => child.classList.remove('active')
      );
      document.querySelectorAll('.text-bottom-inovation__item').forEach(
         (child) => child.classList.remove('active')
      );

      item.classList.add('active');
      document.getElementById(id).classList.add('active');
      bottomText[i].classList.add('active');

   });
});

document.querySelector('.titles-inovation__link').click();


//-------------Возгорание текста

const text = document.querySelectorAll('.thought__text');

text.forEach((item) => {
   item.addEventListener('mousemove', function (e) {
      item.classList.add('active');
   });

   item.addEventListener('mouseout', function (e) {
      item.classList.remove('active')
   })
})
