'Use scrict'

// Variables
let menuBurger = document.querySelector('.header__burder-button');
let filterButton = document.querySelector('.filters__filter-button');
let popupFilter = document.querySelector('.popup-filter');
let popupFilterButton = document.querySelector('.popup-filter__filter-button');
let header = document.querySelector('.header');
let mainMenu = document.querySelector('.header__main-menu');
let headerMenuContacts = document.querySelector('.header__contacts');
let burgerMenuIcon = document.querySelector('.header__burger-icon');

//Menu burger
menuBurger.onclick = function() {
  header.classList.toggle('header--active');
  mainMenu.classList.toggle('main-menu--active');
  headerMenuContacts.classList.toggle('header__contacts--active');
  burgerMenuIcon.classList.toggle('header__contacts--active');

  if (burgerMenuIcon.classList.contains('header__contacts--active')) {
    burgerMenuIcon.src='/assets/images/burderCloseIcon.svg';
  } else {
    burgerMenuIcon.src='assets/images/burger-icon.svg';
  }
}

// Filters Popup
filterButton.onclick = function() {
  popupFilter.classList.add('popup-filter--active');

  if (popupFilter.classList.contains('popup-filter--active')) {
    document.body.style.overflow = "hidden";
    // document.body.style.opacity = "20%";
  }
}

popupFilterButton.onclick = function() {
  popupFilter.classList.remove('popup-filter--active');

  if (popupFilter.classList.contains('popup-filter--active') == false) {
    document.body.style.overflow = "visible";
    // document.body.style.opacity = "100%";
  }
}