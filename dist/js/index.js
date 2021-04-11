"use strict";
'Use scrict';

var menuBurger = document.querySelector('.header__burder-button');
var filterButton = document.querySelector('.filters__filter-button');
var popupFilter = document.querySelector('.popup-filter');

filterButton.onclick = function () {
  popupFilter.classList.toggle('popup-filter--active');

  if (popupFilter.classList.contains('header--active')) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
};
//# sourceMappingURL=index.js.map
