/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatejs_page"]("main",{

/***/ "./src/modules/numBlock.js":
/*!*********************************!*\
  !*** ./src/modules/numBlock.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nvar numBlock = function numBlock() {\n  var animateNumInit = false; // для отработки всего лишь один раз\n\n  var animateNum = function animateNum() {\n    var num = document.querySelectorAll('num-span');\n\n    var _loop = function _loop(i) {\n      console.log(num[i].textContent);\n      num[i].classList.add('animated');\n\n      function animateValue(start, duration) {\n        var startTimestamp = null;\n\n        var step = function step(timestamp) {\n          if (!startTimestamp) startTimestamp = timestamp;\n          var progress = Math.min((timestamp - startTimestamp) / duration, 1);\n          num[i].textContent = Math.floor(progress * start);\n\n          if (progress < 1) {\n            window.requestAnimationFrame(step);\n          }\n        };\n\n        window.requestAnimationFrame(step);\n      }\n\n      animateValue(num[i].textContent, 1000);\n    };\n\n    for (var i = 0; i < num.length; i++) {\n      _loop(i);\n    }\n    /* num.forEach((elem) => {\r\n    \telem.classList.add('animated');\t\t\r\n    });\t */\n\n    /* \tnum[0].textContent = 800;\r\n    \tnum[1].textContent = 13;\r\n    \tnum[2].textContent = 40;\r\n    \tnum[3].textContent = 120;\t */\n\n    /* function animateValue1(start, duration) {\r\n    \tlet startTimestamp = null;\r\n    \tconst step = timestamp => {\r\n    \t\tif (!startTimestamp) startTimestamp = timestamp;\r\n    \t\tconst progress = Math.min((timestamp - startTimestamp) / duration, 1);\t\t\t\r\n    \t\tnum[0].textContent = '> ' + Math.floor(progress * start);\t\t\t\t\t\t\t\t\r\n    \t\tif (progress < 1) {\r\n    \t\t\twindow.requestAnimationFrame(step);\r\n    \t\t}\r\n    \t};\r\n    \twindow.requestAnimationFrame(step);\r\n    }\r\n    animateValue1(num[0].textContent, 1000);\r\n    function animateValue2(start, duration) {\r\n    \tlet startTimestamp = null;\r\n    \tconst step = timestamp => {\r\n    \t\tif (!startTimestamp) startTimestamp = timestamp;\r\n    \t\tconst progress = Math.min((timestamp - startTimestamp) / duration, 1);\t\t\t\r\n    \t\tnum[1].textContent = Math.floor(progress * start) + ' лет';\t\t\t\t\t\t\t\t\r\n    \t\tif (progress < 1) {\r\n    \t\t\twindow.requestAnimationFrame(step);\r\n    \t\t}\r\n    \t};\r\n    \twindow.requestAnimationFrame(step);\r\n    }\r\n    animateValue2(num[1].textContent, 1000);\r\n    function animateValue3(start, duration) {\r\n    \tlet startTimestamp = null;\r\n    \tconst step = timestamp => {\r\n    \t\tif (!startTimestamp) startTimestamp = timestamp;\r\n    \t\tconst progress = Math.min((timestamp - startTimestamp) / duration, 1);\t\t\t\r\n    \t\tnum[2].textContent = Math.floor(progress * start) + ' мин.';\t\t\t\t\t\t\t\t\r\n    \t\tif (progress < 1) {\r\n    \t\t\twindow.requestAnimationFrame(step);\r\n    \t\t}\r\n    \t};\r\n    \twindow.requestAnimationFrame(step);\r\n    }\r\n    animateValue3(num[2].textContent, 1000);\r\n    function animateValue4(start, duration) {\r\n    \tlet startTimestamp = null;\r\n    \tconst step = timestamp => {\r\n    \t\tif (!startTimestamp) startTimestamp = timestamp;\r\n    \t\tconst progress = Math.min((timestamp - startTimestamp) / duration, 1);\t\t\t\r\n    \t\tnum[3].textContent = '> ' + Math.floor(progress * start);\t\t\t\t\t\t\t\t\r\n    \t\tif (progress < 1) {\r\n    \t\t\twindow.requestAnimationFrame(step);\r\n    \t\t}\r\n    \t};\r\n    \twindow.requestAnimationFrame(step);\r\n    }\r\n    animateValue4(num[3].textContent, 1000); */\n\n\n    animateNumInit = true;\n  };\n\n  window.addEventListener('scroll', function (event) {\n    if (window.scrollY >= 1400) {\n      if (!animateNumInit) {\n        animateNum();\n      }\n    }\n  });\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (numBlock);\n\n//# sourceURL=webpack://js-page/./src/modules/numBlock.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => "4e9cb75361b2781f7456"
/******/ 	})();
/******/ 	
/******/ }
);