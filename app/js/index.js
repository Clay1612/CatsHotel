'Use scrict'

let menuBurger = document.querySelector('.header__burder-button');
let filterButton = document.querySelector('.filters__filter-button');
let popupFilter = document.querySelector('.popup-filter');

filterButton.onclick = function() {
  popupFilter.classList.toggle('popup-filter--active');

  if (popupFilter.classList.contains('header--active')) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "visible";
  }
}