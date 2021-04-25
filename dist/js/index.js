"use strict";
'Use scrict'; // Variables

var menuBurger = document.querySelector('.header__burder-button');
var filterButton = document.querySelector('.filters__filter-button');
var popupFilter = document.querySelector('.popup-filter');
var popupFilterButton = document.querySelector('.popup-filter__filter-button');
var header = document.querySelector('.header');
var mainMenu = document.querySelector('.header__main-menu');
var headerMenuContacts = document.querySelector('.header__contacts');
var burgerMenuIcon = document.querySelector('.header__burger-icon'); //Menu burger

menuBurger.onclick = function () {
  header.classList.toggle('header--active');
  mainMenu.classList.toggle('main-menu--active');
  headerMenuContacts.classList.toggle('header__contacts--active');
  burgerMenuIcon.classList.toggle('header__contacts--active');

  if (burgerMenuIcon.classList.contains('header__contacts--active')) {
    burgerMenuIcon.src = '/assets/images/burderCloseIcon.svg';
  } else {
    burgerMenuIcon.src = 'assets/images/burger-icon.svg';
  }
}; // Filters Popup


filterButton.onclick = function () {
  popupFilter.classList.add('popup-filter--active');

  if (popupFilter.classList.contains('popup-filter--active')) {
    document.body.style.overflow = "hidden"; // document.body.style.opacity = "20%";
  }
};

popupFilterButton.onclick = function () {
  popupFilter.classList.remove('popup-filter--active');

  if (popupFilter.classList.contains('popup-filter--active') == false) {
    document.body.style.overflow = "visible"; // document.body.style.opacity = "100%";
  }
};
//# sourceMappingURL=index.js.map
