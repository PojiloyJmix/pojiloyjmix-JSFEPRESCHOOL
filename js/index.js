// menu
const isMobile = {
   Android: function () {
      return navigator.userAgent.match(/Android/i);
   },
   BlackBerry: function () {
      return navigator.userAgent.match(/BlackBerry/i);
   },
   iOS: function () {
      return navigator.userAgent.match(/iPhone|iPad|iPod/i);
   },
   Opera: function () {
      return navigator.userAgent.match(/Opera Mini/i);
   },
   Windows: function () {
      return navigator.userAgent.match(/IEMobile/i);
   },
   any: function () {
      return (
         isMobile.Android() ||
         isMobile.BlackBerry() ||
         isMobile.iOS() ||
         isMobile.Opera() ||
         isMobile.Windows());
   }
};
if (isMobile.any()) {
   document.body.classList.add('_touch');
} else {
   document.body.classList.add('_pc');
}
const iconMenu = document.querySelector('.burger__menu');
const menuBody = document.querySelector('.menu__container');
if (iconMenu) {
   iconMenu.addEventListener("click", function (a) {
      document.body.classList.toggle('_lock');
      iconMenu.classList.toggle('_active');
      menuBody.classList.toggle('_active');
   });
}
const menuLink = document.querySelectorAll('.menu__link[data-goto]');
if (menuLink.length > 0) {
   menuLink.forEach(menuLink => {
      menuLink.addEventListener("click", onMenuLinkClick);
   });

   function onMenuLinkClick(e) {
      const menuLink = e.target;
      if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
         const gotoBlock = document.querySelector(menuLink.dataset.goto);
         const gotoBlockValue = gotoBlock.getBoundingClientRect().top + window.pageYOffset - document.querySelector('header').offsetHeight;
         if (iconMenu.classList.contains('_active')) {
            document.body.classList.remove('_lock');
            iconMenu.classList.remove('_active');
            menuBody.classList.remove('_active');
         }
         window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
         });
         e.preventDefault();

      }
   }
};

// переход между темами
let swithcMode = document.getElementById("swithcMode");

swithcMode.onclick = function () {
   let theme = document.getElementById("theme");

   if (theme.getAttribute('href') == "css/light.css") {
      theme.href = "css/darck.css";
   } else {
      theme.href = "css/light.css";
   }
}