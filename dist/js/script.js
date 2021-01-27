/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/form.js":
/*!************************!*\
  !*** ./src/js/form.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

// //Form JS
//
// const forms = document.querySelectorAll('form')
// const message = {
// 	loading : 'Загрузка...',
// 	success : 'Спасибо! Скоро мы с вами свяжемся',
// 	failure : 'Что-то пошло не так...',
// }
//
// forms.forEach(form=>{
// 	postData(form)
// })
//
//
// function postData(form) {
// 	form.addEventListener('submit', (e) => {
// 		e.preventDefault()
//
// 		const statusMessage = document.createElement('div')
// 		statusMessage.classList.add('status')
// 		statusMessage.textContent = message.loading
// 		form.insertAdjacentElement('afterend', statusMessage)
//
// 		const formData = new FormData(form),
// 			obj = {}
//
// 		formData.forEach((value, key) => obj[key] = value)
//
// 		fetch('server.php', {
// 			method: 'POST',
// 			body: JSON.stringify(obj),
// 			headers: {
// 				'Content-type': 'application/json'
// 			}
// 		}).then(data=>data.json())
// 			 .then(data => {
// 			console.log(data)
// 			showThankModal(message.success)
// 			form.reset()
// 			statusMessage.remove()
// 		}).catch(() => {
// 			console.log(message.failure)
// 			showThankModal(message.failure)
// 		}).finally(() => form.reset())
// 	})
// }
//
// function showThankModal (message){
// 	const prevModalDialog = document.querySelector('.modal__dialog')
// 	prevModalDialog.classList.add('hide')
// 	openModal()
//
// 	const thankModal = document.createElement('div')
// 	thankModal.classList.add('modal__dialog')
// 	thankModal.innerHTML = `
//             <div class="modal__content">
//                 <div class="modal__close" data-close>×</div>
//                 <div class="modal__title">${message}</div>
//             </div>
// 	`
// 	document.querySelector('.modal').append(thankModal)
// 	setTimeout(() => {
// 		thankModal.remove()
// 		prevModalDialog.classList.add('show')
// 		prevModalDialog.classList.remove('hide')
// 		closeModal(modalWindow)
// 	}, 4000)
// }

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs */ "./src/js/tabs.js");
/* harmony import */ var _tabs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tabs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./timer */ "./src/js/timer.js");
/* harmony import */ var _timer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_timer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modal */ "./src/js/modal.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ "./src/js/menu.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_menu__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form */ "./src/js/form.js");
/* harmony import */ var _form__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_form__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _slider_v2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./slider.v2 */ "./src/js/slider.v2.js");
/* harmony import */ var _slider_v2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_slider_v2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _alculator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./сalculator */ "./src/js/сalculator.js");
/* harmony import */ var _alculator__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_alculator__WEBPACK_IMPORTED_MODULE_6__);




 // import './slider'




/***/ }),

/***/ "./src/js/menu.js":
/*!************************!*\
  !*** ./src/js/menu.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

class MenuCard {
  constructor(img, altimg, title, desc, price, parentSelector, ...classes) {
    this.imgSrc = img;
    this.alt = altimg;
    this.title = title;
    this.desc = desc;
    this.price = price;
    this.parent = document.querySelector(parentSelector);
    this.classes = classes;
    this.transfer = 27;
    this.changeToUAH();
  }

  changeToUAH() {
    this.price = Math.floor(this.price * this.transfer);
  }

  render() {
    const element = document.createElement('div');

    if (this.classes.length === 0) {
      this.element = 'menu__item';
      element.classList.add(this.element);
    } else {
      this.classes.forEach(className => element.classList.add(className));
    }

    element.innerHTML = `
										<img src=${this.imgSrc} alt=${this.alt}>
										<h3 class="menu__item-subtitle">${this.title}</h3>
										<div class="menu__item-descr">${this.desc}</div>
										<div class="menu__item-divider"></div>
										<div class="menu__item-price">
												<div class="menu__item-cost">Цена:</div>
												<div class="menu__item-total"><span>${this.price}</span> грн/день</div>
										</div>
		`;
    this.parent.insertAdjacentElement('beforeend', element);
  }

}

const getResource = async url => {
  const res = await fetch(url);

  if (!res.ok) {
    new Error(`Could not fetch ${url}, status ${res.status} `);
  }

  return await res.json();
};

getResource('http://localhost:3000/menu').then(data => {
  data.forEach(({
    img,
    altimg,
    title,
    desc,
    price
  }) => {
    new MenuCard(img, altimg, title, desc, price, '.menu__field .container').render();
  });
}); // Еще один вариант
// getResource('http://localhost:3000/menu')
// 	.then(data=>createCard(data))
//
// function createCard(data) {
// 	data.forEach(({img, altimg, title, desc, price}) => {
// 		const parent = document.querySelector('.menu__field .container'),
// 					element = document.createElement('div')
//
// 		element.classList.add('menu__item')
// 		element.innerHTML = `
// 											<img src=${img} alt=${altimg}>
// 											<h3 class="menu__item-subtitle">${title}</h3>
// 											<div class="menu__item-descr">${desc}</div>
// 											<div class="menu__item-divider"></div>
// 											<div class="menu__item-price">
// 													<div class="menu__item-cost">Цена:</div>
// 													<div class="menu__item-total"><span>${price * 27}</span> грн/день</div>
// 											</div>`
// 		parent.insertAdjacentElement('beforeend', element)
// 	})
// }
//Вариант с axios
// axios.get('http://localhost:3000/menu')
// 	.then((res) => res.data)
// 	.then(data=> {
// 		data.forEach(({img, altimg, title, desc, price}) => {
// 			new MenuCard(img, altimg, title, desc, price, '.menu__field .container').render()
// 		})
// })
// 	.catch(err => console.log(err))

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

const modalBtns = document.querySelectorAll('[data-modal]'),
      modalWindow = document.querySelector('.modal');
showModalTimer = setTimeout(openModal, 60000);
modalBtns.forEach(btn => {
  btn.addEventListener('click', openModal);
});
modalWindow.addEventListener('click', e => {
  if (e.target == modalWindow || e.target.classList.contains('modal__close')) {
    closeModal();
  }
});
document.addEventListener('keydown', e => {
  if (e.code == 'Escape' && modalWindow.style.display != '') {
    closeModal();
  }
});
window.addEventListener('scroll', showModalByScroll);

function showModalByScroll() {
  if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
    openModal();
  }
}

function openModal() {
  modalWindow.style.display = 'block';
  modalWindow.classList.add('fade');
  document.body.style.overflow = 'hidden';
  clearInterval(showModalTimer);
  window.removeEventListener('scroll', showModalByScroll);
}

function closeModal() {
  modalWindow.style.display = '';
  modalWindow.classList.remove('fade');
  document.body.style.overflow = 'auto';
} //Form JS


const forms = document.querySelectorAll('form');
const message = {
  loading: 'Загрузка...',
  success: 'Спасибо! Скоро мы с вами свяжемся',
  failure: 'Что-то пошло не так...'
};
forms.forEach(form => {
  bindPostData(form);
});

const postData = async (url, data) => {
  let res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json'
    },
    body: data
  });
  return await res.json();
};

function bindPostData(form) {
  form.addEventListener('submit', e => {
    e.preventDefault();
    const statusMessage = document.createElement('div');
    statusMessage.classList.add('status');
    statusMessage.textContent = message.loading;
    form.insertAdjacentElement('afterend', statusMessage);
    const formData = new FormData(form),
          json = JSON.stringify(Object.fromEntries(formData.entries()));
    postData('http://localhost:3000/requests', json).then(data => {
      console.log(data);
      showThankModal(message.success);
      statusMessage.remove();
    }).catch(() => {
      console.log(message.failure);
      showThankModal(message.failure);
    }).finally(() => form.reset());
  });
}

function showThankModal(message) {
  const prevModalDialog = document.querySelector('.modal__dialog');
  prevModalDialog.classList.add('hide');
  openModal();
  const thankModal = document.createElement('div');
  thankModal.classList.add('modal__dialog');
  thankModal.innerHTML = `
            <div class="modal__content">
                <div class="modal__close" data-close>×</div>
                <div class="modal__title">${message}</div>
            </div>
	`;
  document.querySelector('.modal').append(thankModal);
  setTimeout(() => {
    thankModal.remove();
    prevModalDialog.classList.add('show');
    prevModalDialog.classList.remove('hide');
    closeModal(modalWindow);
  }, 4000);
}

/***/ }),

/***/ "./src/js/slider.v2.js":
/*!*****************************!*\
  !*** ./src/js/slider.v2.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

let slideIndex = 0,
    offset = 0;
const slider = document.querySelector('.offer__slider'),
      slideControlPrev = slider.querySelector('.offer__slider-counter .offer__slider-prev'),
      slideControlNext = slider.querySelector('.offer__slider-counter .offer__slider-next'),
      sliderImages = slider.querySelectorAll('.offer__slide'),
      sliderWrapper = document.querySelector('.offer__slider-wrapper'),
      sliderField = document.querySelector('.offer__slider-inner'),
      totalSlides = slider.querySelector('#total'),
      currentSlideImg = slider.querySelector('#current'),
      width = window.getComputedStyle(sliderWrapper).width; //Css style

slider.style.position = 'relative';
sliderField.style.width = 100 * sliderImages.length + '%';
sliderField.style.display = 'flex';
sliderField.style.transition = '0.5s all';
sliderWrapper.style.overflow = 'hidden';
const sliderDotsList = document.createElement('ol'),
      dots = [];
sliderDotsList.classList.add('carousel-indicators');
slider.insertAdjacentElement('beforeend', sliderDotsList);
sliderImages.forEach((slide, i) => {
  slide.style.width = width;
  createSliderDot(i);
});
dots.forEach(dot => {
  dot.addEventListener('click', e => {
    slideIndex = +e.target.getAttribute('data-slide-to');
    offset = +width.slice(0, width.length - 2) * slideIndex;
    sliderField.style.transform = `translateX(-${offset}px)`;
  });
});
slider.addEventListener('click', e => {
  //Next
  if (e.currentTarget && e.target === slideControlNext) {
    //Move image
    offset === +width.slice(0, width.length - 2) * (sliderImages.length - 1) ? offset = 0 : offset += +width.slice(0, width.length - 2); //Change slide index

    slideIndex === sliderImages.length - 1 ? slideIndex = 0 : slideIndex++;
  } //Prev


  if (e.currentTarget && e.target === slideControlPrev) {
    //Move image
    offset === 0 ? offset = +width.slice(0, width.length - 2) * (sliderImages.length - 1) : offset -= +width.slice(0, width.length - 2); //Change slide index

    !slideIndex ? slideIndex = sliderImages.length - 1 : slideIndex--;
  }

  dots.forEach(dot => dot.style.opacity = '0.5');
  dots[slideIndex].style.opacity = '1';
  sliderField.style.transform = `translateX(-${offset}px)`;
  showCurrentSlide();
});
showCurrentSlide();

function showCurrentSlide() {
  if (sliderImages.length < 10) {
    totalSlides.textContent = `0${sliderImages.length}`;
  } else {
    totalSlides.textContent = sliderImages.length;
  }

  currentSlideImg.textContent = getZero(slideIndex + 1);

  function getZero(num) {
    return num < 10 ? `0${num}` : num;
  }
}

function createSliderDot(dotIndex) {
  const dot = document.createElement('li');
  dot.setAttribute('data-slide-to', dotIndex);
  dot.classList.add('dot');
  sliderDotsList.insertAdjacentElement('beforeend', dot);

  if (dotIndex == 0) {
    dot.style.opacity = '1';
  }

  dots.push(dot);
}

/***/ }),

/***/ "./src/js/tabs.js":
/*!************************!*\
  !*** ./src/js/tabs.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

const tabs = document.querySelectorAll('.tabheader__item'),
      tabsContent = document.querySelectorAll('.tabcontent'),
      tabsWrap = document.querySelector('.tabheader');

function hideTabContent() {
  tabsContent.forEach(item => {
    item.classList.add('hide');
    item.classList.remove('show', 'fade');
  });
  tabs.forEach(item => {
    item.classList.remove('tabheader__item_active');
  });
}

function showTabContent(i = 0) {
  tabsContent[i].classList.add('show', 'fade');
  tabsContent[i].classList.remove('hide');
  tabs[i].classList.add('tabheader__item_active');
}

tabsWrap.addEventListener('click', e => {
  const target = e.target;

  if (target && target.classList.contains('tabheader__item')) {
    tabs.forEach((tab, i) => {
      if (target == tab) {
        hideTabContent();
        showTabContent(i);
      }
    });
  }
});
hideTabContent();
showTabContent();

/***/ }),

/***/ "./src/js/timer.js":
/*!*************************!*\
  !*** ./src/js/timer.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

const timerDeadline = '2021-02-01';

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - Date.parse(new Date()),
        days = Math.floor(t / (1000 * 60 * 60 * 24)),
        hours = Math.floor(t / (1000 * 60 * 60) % 24),
        minutes = Math.floor(t / (1000 * 60) % 60),
        seconds = Math.floor(t / 1000 % 60);
  return {
    total: t,
    days,
    hours,
    minutes,
    seconds
  };
}

function setTime(selector, endtime) {
  let timeInterval = setInterval(updateClock, 1000);
  const timer = document.querySelector(selector),
        days = timer.querySelector('#days'),
        hours = timer.querySelector('#hours'),
        minutes = timer.querySelector('#minutes'),
        seconds = timer.querySelector('#seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);
    days.textContent = getZero(t.days);
    hours.textContent = getZero(t.hours);
    minutes.textContent = getZero(t.minutes);
    seconds.textContent = getZero(t.seconds);

    if (t.total <= 0) {
      clearInterval(timeInterval);
    }
  }

  function getZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  updateClock();
}

setTime('.timer', timerDeadline);

/***/ }),

/***/ "./src/js/сalculator.js":
/*!******************************!*\
  !*** ./src/js/сalculator.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

const result = document.querySelector('.calculating__result span');
let sex = 'female',
    weight,
    height,
    age,
    ratio = 1.375;

function calcTotal() {
  if (!sex || !weight || !height || !age || !ratio) {
    result.textContent = '____';
    return;
  }

  sex === 'female' ? result.textContent = Math.floor((447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio) : result.textContent = Math.floor((88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio);
}

calcTotal();

function getStaticInfo(parentSelector, activeClass) {
  const elements = document.querySelectorAll(`${parentSelector} div`);
  elements.forEach(element => {
    element.addEventListener('click', e => {
      e.target.getAttribute('data-ratio') ? ratio = +e.target.getAttribute('data-ratio') : sex = e.target.getAttribute('id');
      console.log(ratio, sex);
      elements.forEach(el => el.classList.remove(activeClass));
      e.target.classList.add(activeClass);
      calcTotal();
    });
  });
}

function getDynamicInfo(selector) {
  const input = document.querySelector(selector);
  input.addEventListener('input', e => {
    switch (input.getAttribute('id')) {
      case 'height':
        height = +input.value;
        break;

      case 'weight':
        weight = +input.value;
        break;

      case 'age':
        age = +input.value;
        break;
    }

    console.log(height, weight, age);
    calcTotal();
  });
}

getStaticInfo('#gender', 'calculating__choose-item_active');
getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');
getDynamicInfo('#height');
getDynamicInfo('#weight');
getDynamicInfo('#age');

/***/ })

/******/ });
//# sourceMappingURL=script.js.map