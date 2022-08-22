import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
// import { addListener } from 'gulp';


// ---------------------------------

window.addEventListener('DOMContentLoaded', () => {

  // Utils
  // ---------------------------------

  iosVhFix();

  // Modules
  // ---------------------------------

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    initModals();
  });
});

// ---------------------------------

// ❗❗❗ обязательно установите плагины eslint, stylelint, editorconfig в редактор кода.

// привязывайте js не на классы, а на дата атрибуты (data-validate)

// вместо модификаторов .block--active используем утилитарные классы
// .is-active || .is-open || .is-invalid и прочие (обязателен нейминг в два слова)
// .select.select--opened ❌ ---> [data-select].is-open ✅

// выносим все в дата атрибуты
// url до иконок пинов карты, настройки автопрокрутки слайдера, url к json и т.д.

// для адаптивного JS используется matchMedia и addListener
// const breakpoint = window.matchMedia(`(min-width:1024px)`);
// const breakpointChecker = () => {
//   if (breakpoint.matches) {
//   } else {
//   }
// };
// breakpoint.addListener(breakpointChecker);
// breakpointChecker();

// используйте .closest(el)




// Открытие,закрытие модального окна Заказать звонок
function controlModal() {

const modalBlock = document.querySelector('.modal');
const callButton = document.querySelector('.header__button');
const closeButton = modalBlock.querySelector('.modal__button-close');
const body = document.querySelector('.page');


function closeModal () {
  modalBlock.classList.add('visually-hidden');
  body.classList.remove('scroll-lock');
}

function openModal () {
  modalBlock.classList.remove('visually-hidden');
  body.classList.add('scroll-lock');

  closeButton.addEventListener('click', function(){
    closeModal();
  })
}


 callButton.addEventListener('click', function (){
   openModal();
 })
}

controlModal();
