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



// Сполйер


const link = document.querySelectorAll('.item-faq__up');

link.forEach((item) =>
   item.addEventListener('click', () => {
      const parent = item.nextElementSibling;
      const spicon = item.lastElementChild;

      if (parent.classList.contains('active')) {
         parent.classList.remove('active');
         spicon.classList.remove('active');
      } else {
         document.querySelectorAll('items-faq__item').forEach((child) => child.classList.remove('active'))
         parent.classList.add('active');
         spicon.classList.add('active');
      }


   })
)


let _slideup = (target, duration = 500) => {
   target.style.transitionProperty = 'height, margin, padding';

}