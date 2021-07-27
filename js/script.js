//svg4everybody();

var navMain = document.querySelector(".page-header");

var contactsMap = document.querySelector(".contacts__map-external");

var navToggle = document.querySelector(".page-header__toggle");

var modalClick = document.querySelectorAll(".js-modalclick");
var modalWindow = document.querySelector(".modal-in-cart");

//svg4everybody();

navMain.classList.remove("page-header--nojs");
contactsMap.classList.remove("hidden");


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains("page-header--closed")) {
    navMain.classList.remove("page-header--closed");
    navMain.classList.add("page-header--opened");
  } else {
    navMain.classList.add("page-header--closed");
    navMain.classList.remove("page-header--opened");
  }
});



if (modalClick) {
    for (var i = 0; i < modalClick.length; i = i + 1) {
    modalClick[i].addEventListener("click", function(evt) {
      evt.preventDefault();
      modalWindow.classList.add("reveal");
      //modalWindow.focus();
    });
  }
};




window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (modalClick) {
      if (modalWindow.classList.contains("reveal")) {
        modalWindow.classList.remove("reveal");
      }
    }
  }
});
