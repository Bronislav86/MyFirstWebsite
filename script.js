const menuActive = document.querySelector('.menu__active');
const burger = document.querySelector('.rightButtons__menu');


function toggleMenu () {
  menuActive.classList.toggle('hidden');
}

burger.addEventListener('click', toggleMenu);
