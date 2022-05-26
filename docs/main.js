/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/styles.css?");

/***/ }),

/***/ "./src/classes/index.js":
/*!******************************!*\
  !*** ./src/classes/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* reexport safe */ _todo_class__WEBPACK_IMPORTED_MODULE_0__.Todo),\n/* harmony export */   \"TodoList\": () => (/* reexport safe */ _todo_list_class__WEBPACK_IMPORTED_MODULE_1__.TodoList)\n/* harmony export */ });\n/* harmony import */ var _todo_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.class */ \"./src/classes/todo.class.js\");\n/* harmony import */ var _todo_list_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo-list.class */ \"./src/classes/todo-list.class.js\");\n/* harmony import */ var _todo_list_class__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_todo_list_class__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\n\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/classes/index.js?");

/***/ }),

/***/ "./src/classes/todo-list.class.js":
/*!****************************************!*\
  !*** ./src/classes/todo-list.class.js ***!
  \****************************************/
/***/ (() => {

eval("throw new Error(\"Module parse failed: Unexpected token (62:5)\\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\\n|     }\\n| \\n>     }\");\n\n//# sourceURL=webpack://03-webpack-inicial/./src/classes/todo-list.class.js?");

/***/ }),

/***/ "./src/classes/todo.class.js":
/*!***********************************!*\
  !*** ./src/classes/todo.class.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Todo\": () => (/* binding */ Todo)\n/* harmony export */ });\n\nclass Todo { \n\n\n    constructor( tarea ) {\n\n       this.tarea = tarea;\n       \n       this.id          = new Date().getTime();//1122232323\n       this.completado  = false;\n       this.creado      = new Date();\n    }\n}\n\n//# sourceURL=webpack://03-webpack-inicial/./src/classes/todo.class.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoList\": () => (/* binding */ todoList)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes */ \"./src/classes/index.js\");\n/* harmony import */ var _js_componentes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/componentes */ \"./src/js/componentes.js\");\n\n\n\n\n\n\nconst todoList = new _classes__WEBPACK_IMPORTED_MODULE_1__.TodoList();\n\n// const tarea = new Todo('Aprender Javascript!!!');\n// todoList.nuevoTodo( tarea );\n\n\n// console.log( todoList );\n// crearTodoHtml( tarea );\n\n//localStorage y sessionStorage\n// localStorage.setItem('mi-key', 'ABC123123');\n// sessionStorage.setItem('mi-key', 'ABC12556');\n\n\n// setTimeout(() => {\n\n//     localStorage.removeItem('mi-key');\n// }, 1500 );\n\n\n//# sourceURL=webpack://03-webpack-inicial/./src/index.js?");

/***/ }),

/***/ "./src/js/componentes.js":
/*!*******************************!*\
  !*** ./src/js/componentes.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"crearTodoHtml\": () => (/* binding */ crearTodoHtml)\n/* harmony export */ });\n/* harmony import */ var _classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../classes */ \"./src/classes/index.js\");\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../index */ \"./src/index.js\");\n\n\n\n\n//Referencia en el HTML \nconst divTodoList = document.querySelector('.todo-list');\nconst txtInput    = document.querySelector('.new-todo');\nconst btnBorrar   = document.querySelector('.clear-completed');\n\n\nconst crearTodoHtml = ( todo ) => {\n\n    const htmlTodo = `\n     <li class=\"${ (todo.completado) ? 'completed' : '' }\" data-id=\"${ todo.id }\">\n\t\t<div class=\"view\">\n\t\t\t<input class=\"toggle\" type=\"checkbox\" ${(todo.completado) ? 'checked' : ''}>\n\t\t\t<label>${ todo.tarea }</label>\n\t\t\t<button class=\"destroy\"></button>\n\t\t</div>\n\t\t<input class=\"edit\" value=\"Create a TodoMVC template\">\n\t</li>`;\n\n\n    const div = document.createElement('div');\n    div.innerHTML = htmlTodo;\n\n    divTodoList.append(div.firstElementChild);\n\n    return div.firstElementChild;\n\n\n}\n\n//Eventos \\\ntxtInput.addEventListener('keyup', ( event ) => {\n\n\tif ( event.keyCode === 13 && txtInput.value.length > 0 ) {\n\n\t\tconsole.log( txtInput.value );\n\t\tconst nuevoTodo = new _classes__WEBPACK_IMPORTED_MODULE_0__.Todo( txtInput.value );\n\t\t_index__WEBPACK_IMPORTED_MODULE_1__.todoList.nuevoTodo( nuevoTodo );\n\n\t\tcrearTodoHtml( nuevoTodo );\n\t\ttxtInput.value = '';\n\t}\n\n}); \n\ndivTodoList.addEventListener('click', ( event ) => {\n\n\tconst nombreElemento = event.target.localName;  //input, label, button \n\tconst todoElemento   = event.target.parentElement.parentElement;\n\tconst todoId         = todoElemento.getAttribute( 'data-id' );\n\n\n\tif ( nombreElemento.includes('input') ){//  click  en el check \n\t\n\t\t_index__WEBPACK_IMPORTED_MODULE_1__.todoList.marcarCompletado( todoId );\n\t\ttodoElemento.classList.toggle( 'completed');\n\n\n\t} else if ( nombreElemento.includes('button') ) { //hay que borrar el todo\n\n\t\t_index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarTodo( todoId );\n\t\tdivTodoList.removeChild( todoElemento );\n\t}\n\n});\n\nbtnBorrar.addEventListener('click', () => {\n\n\t_index__WEBPACK_IMPORTED_MODULE_1__.todoList.eliminarCompletados();\n\n\tfor(  let i = divTodoList.children.length-1; i >= 0; i-- ) {\n\n\t\tconst elemento = divTodoList.children[i];\n\n\t\tif( elemento.classList.contains('completed')) {\n\t\t\tdivTodoList.removeChild(elemento);\n\t\t\t\n\n\t\t}\n\n\t}\n\n})\n\n//# sourceURL=webpack://03-webpack-inicial/./src/js/componentes.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;