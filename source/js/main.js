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
const overlay = document.querySelector('.modal__overlay');
const nameInput = document.querySelector('#modal-name');


function closeModal () {
  overlay.removeEventListener('click', function() {
    closeModal();
  })
  modalBlock.classList.add('visually-hidden');
  body.classList.remove('scroll-lock');
}

function openModal () {
  modalBlock.classList.remove('visually-hidden');
  body.classList.add('scroll-lock');
  nameInput.focus();
  closeButton.addEventListener('click', function(){
    closeModal();
  });

  overlay.addEventListener('click', function(){
    closeModal();
  })
}


 callButton.addEventListener('click', function (){
   openModal();
 })
}

controlModal();

// маска для телефона

  function maskPhone() {
    const elems = document.querySelectorAll('input[type="tel"]');

    function mask(event) {
      const keyCode = event.keyCode;
      const template = '+7 (___) ___-__-__';
      const def = template.replace(/\D/g, '');
      const val = event.target.value.replace(/\D/g, '');

      let i = 0;
      let newValue = template.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf('_');
      if (i !== -1) {
        newValue = newValue.slice(0, i);
      }
      let reg = template.substr(0, event.target.value.length).replace(/_+/g,
          function (a) {
            return '\\d{1,' + a.length + '}';
          }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(event.target.value) || event.target.value.length < 5 || keyCode > 47 && keyCode < 58) {
        event.target.value = newValue;
      }
      if (event.type === 'blur' && event.target.value.length < 5) {
        event.target.value = ' ';
      }
    }

    for (const elem of elems) {
      elem.addEventListener('input', mask);
      elem.addEventListener('focus', mask);
      elem.addEventListener('blur', mask);
    }
  }

  maskPhone();


// функция которая отслеживает размер вьюпорта чтоб запустиьт функции на опрелеленный вьюпорт
 function setResize(doIt){

  if (window.innerWidth < 768){
    doIt();
  } else {
  window.addEventListener('resize', function() {
    if (window.innerWidth < 768){
      doIt();
    }
  }, true);
  }}


function setAccordeon () {
  // if (window.innerWidth < 768){
    const buttons = document.querySelectorAll('.footer__toggle');
    const accordeons = document.querySelectorAll('.accordeon__block');

    for (let i = 0; i < accordeons.length; i++) {

      accordeons[i].classList.add('accordeon__block--closed');
      }


    for (let i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click', function(){
        for (let y = 0; y < accordeons.length; y++) {
          if (y!=i){
accordeons[y].classList.add('accordeon__block--closed');
          }

        }

          // console.log(accordeons);


          // if (accordeons[i].classList.contains('accordeon__block--closed')) {

          //   accordeons[i].classList.remove('accordeon__block--closed');

          // } else {
          //   accordeons[i].classList.add('accordeon__block--closed');
          //   // alert('dd')
          // }

accordeons[i].classList.toggle('accordeon__block--closed');
// console.log(accordeons);

      })
      }
    // };

};



setResize(setAccordeon);
// подробнее о нас







function setTextAccordeon (){
const button  = document.querySelector('.aboutus__button');
const hiddenElements = document.querySelectorAll('.aboutus__hidden');
const hiddenElementDesktop = document.querySelector('.aboutus__hidden--desktop');
const hiddenElementMobile = document.querySelector('.aboutus__hidden--mobile');
for (let y= 0; y < hiddenElements.length; y++) {
  if( window.innerWidth < 768) {
     hiddenElements[y].classList.add('visually-hidden');
} else {
hiddenElementDesktop.classList.add('visually-hidden')
}
};


function setResizeRead () {

  window.addEventListener('resize', function() {
  if (window.innerWidth < 768) {

if (button.innerHTML=="Подробнее") {
  for(let i= 0; i < hiddenElements.length; i++){
    hiddenElements[i].classList.add('visually-hidden');
 }
} else {
  for(let i= 0; i < hiddenElements.length; i++){
    hiddenElements[i].classList.remove('visually-hidden');
 }
}



  } else {
if (hiddenElementMobile.classList.contains('visually-hidden')){
  hiddenElementMobile.classList.remove('visually-hidden')
}
    if (button.innerHTML=="Подробнее") {
      hiddenElementDesktop.classList.add('visually-hidden')
    } else {
      if (hiddenElementDesktop.classList.contains('visually-hidden')) {
hiddenElementDesktop.classList.remove('visually-hidden')
}


    }


 }
  });

};

 function readMore () {
button.addEventListener('click', function () {



  if (window.innerWidth < 768) {
    for(let i= 0; i < hiddenElements.length; i++){
      hiddenElements[i].classList.toggle('visually-hidden');
   }} else {
  hiddenElementDesktop.classList.toggle('visually-hidden')
   }


  if ((hiddenElementDesktop.classList.contains('visually-hidden'))){
    button.innerHTML="Подробнее";
  } else {
     button.innerHTML="Свернуть" ;
  }

    }

)
 };

setResizeRead();
readMore();
};




setTextAccordeon();





//  function readMoreDesktop ()
//  {

//   const button  = document.querySelector('.aboutus__button');

//   button.addEventListener('click', function () {
//     const hiddenElement = document.querySelector('.aboutus__hidden');


//           hiddenElement.classList.add('visually-hidden');

//         })
//    };

// readMore();
