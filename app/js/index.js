'Use scrict'

// Variables
let menuBurger = document.querySelector('.header__burger-button');
let filterButton = document.querySelector('.filters__filter-button');
let popupFilter = document.querySelector('.popup-filter');
let popupFilterButton = document.querySelector('.popup-filter__filter-button');
let header = document.querySelector('.header');
let mainMenu = document.querySelector('.header__main-menu');
let headerMenuContacts = document.querySelector('.header__contacts');

//Menu burger
function menuBurgerFunction() {
  header.classList.toggle('header--active');
  mainMenu.classList.toggle('main-menu--active');
  headerMenuContacts.classList.toggle('header__contacts--active');
  menuBurger.classList.toggle('header__burger-button--active');
}

menuBurger.addEventListener('click', menuBurgerFunction);

// Filters Popup
function filterPopupAddFunction() {
  popupFilter.classList.add('popup-filter--active');

  if (popupFilter.classList.contains('popup-filter--active')) {
    document.body.style.overflow = "hidden";
  }
}

function filterPopupRemoveFunction() {
  popupFilter.classList.remove('popup-filter--active');

  if (popupFilter.classList.contains('popup-filter--active') == false) {
    document.body.style.overflow = "visible";
  }
}

filterButton.addEventListener('click', filterPopupAddFunction);
popupFilterButton.addEventListener('click', filterPopupRemoveFunction);
