'Use scrict'

// Variables
let menuBurger = document.querySelector('.header__burger-button');
let filterButton = document.querySelector('.filters__filter-button');
let popupFilter = document.querySelector('.popup-filter');
let popupFilterCloseButton = document.querySelector('.popup-filter__close-button');
let header = document.querySelector('.header');
let mainMenu = document.querySelector('.header__main-menu');
let headerMenuContacts = document.querySelector('.header__contacts');
let formWrapper = document.querySelector('.main-content__form-wrapper');

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
  document.body.classList.toggle('hidden');
  formWrapper.classList.toggle('main-content__form-wrapper--active');
}

function filterPopupRemoveFunction() {
  popupFilter.classList.remove('popup-filter--active');
  document.body.classList.toggle('hidden');
  formWrapper.classList.toggle('main-content__form-wrapper--active');
}

filterButton.addEventListener('click', filterPopupAddFunction);
popupFilterCloseButton.addEventListener('click', filterPopupRemoveFunction);

