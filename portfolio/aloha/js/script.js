"use srtict"

// Бургер меню, копия от Фрилансер по жизни

const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
   const menuList = document.querySelector('.menu__list');
   iconMenu.addEventListener("click", function (e) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuList.classList.toggle('_active');
   });

}