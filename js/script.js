

// ЦВЕТ ШАПКИ
let header = document.querySelector('.header');
window.addEventListener('scroll', headerScroll);
document.addEventListener('DOMContentLoaded', headerScroll);
function headerScroll() {
   let scrollPos = window.scrollY;
   if (scrollPos > 0) {
      header.classList.add('header__scroll')
   } else {
      header.classList.remove('header__scroll')
   };
};





// БУРГЕР

let burger = document.querySelector('.nav__burger');
let navBody = document.querySelector('.nav__body');
burger.addEventListener('click', function () {
   navBody.classList.toggle('nav__active');
   burger.classList.toggle('burger__active');
});


let links = document.querySelectorAll('.nav__link');
for (let link of links) {
   link.addEventListener('click', function (e) {
      navBody.classList.remove('nav__active');
      burger.classList.remove('burger__active');

      e.preventDefault();
      const id = link.getAttribute('href');

      document.querySelector(id).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      });

   });
};






// ПРОКРУТКА ВВЕРХ

let goToTop = document.querySelector('.footer__top'); // получаю кнопку которая будет прокручивать вверх
goToTop.addEventListener('click', function () {        // по клику на которую создаю функцию
   let scrolled = window.scrollY;                  // в переменную scrolled  получаю положение скролла
   let timer;                                      // создаю переменную  для плавности

   function scrollToTop() {                        // далее внутри основной функции создаю еще одну функцию
      if (scrolled > 0) {                          // если положение скролла больше 0 то
         window.scrollTo(0, scrolled);             // скролить к по оси Х 0 , а по оси Y положение скрола
         scrolled = scrolled - 100;                // от текущего положения скрола отнимаю 100 px, тоесть проскроливаться будет по 100 пикселей
         timer = setTimeout(scrollToTop, 30);      // темерь задаю время за которое будет скролиться страница в данном случае 30 милисекунд
      } else {
         clearTimeout(timer);                      // если положение скрола < 100 и > 0  то таймер убрать
         window.scrollTo(0, 0);                    // а страницу проскролить к верху
      }
   }
   scrollToTop();                                  // вызываю данную функцию для ее работы по клику
});

















SmoothScroll({
   // Время скролла 400 = 0.4 секунды
   animationTime: 800,
   // Размер шага в пикселях
   stepSize: 75,

   // Дополнительные настройки:

   // Ускорение
   accelerationDelta: 30,
   // Максимальное ускорение
   accelerationMax: 2,

   // Поддержка клавиатуры
   keyboardSupport: true,
   // Шаг скролла стрелками на клавиатуре в пикселях
   arrowScroll: 50,

   // Pulse (less tweakable)
   // ratio of "tail" to "acceleration"
   pulseAlgorithm: true,
   pulseScale: 4,
   pulseNormalize: 1,

   // Поддержка тачпада
   touchpadSupport: true,
})







// const links = document.querySelectorAll('.nav__link');

// for (let link of links) {
//    link.addEventListener('click', function (e) {
//       e.preventDefault();

//       let href = this.getAttribute('href').substring(1)

//       const scrollTarget = document.getElementById(href);
//       const topOffset = document.querySelector('.header').offsetHeight;
//       const elementPosition = scrollTarget.getBoundingClientRect().top;
//       const offsetPosition = elementPosition - topOffset;

//       window.scrollBy({
//          behavior: 'smooth'

//       });
//    });
// };




function anim(duration) {
   var temp;
   return function (sel) {
      cancelAnimationFrame(temp);
      var start = performance.now();
      var from = window.pageYOffset || document.documentElement.scrollTop,
         to = document.querySelector(sel).getBoundingClientRect().top;
      requestAnimationFrame(function step(timestamp) {
         var progress = (timestamp - start) / duration;
         1 <= progress && (progress = 1);
         window.scrollTo(0, from + to * progress | 0);
         1 > progress && (temp = requestAnimationFrame(step))
      })
   }
};
var scrollMenu = anim(2000)