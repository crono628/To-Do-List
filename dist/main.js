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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("function dom(element, attributes = {}, text, parent) {\n    const elem = document.createElement(element);\n    if (attributes) {\n        Object.assign(elem, attributes);\n    }\n    if (text) {\n        elem.innerText = text;\n    }\n    if (parent) {\n        parent.appendChild(elem);\n    }\n    return elem;\n}\n\nconst entry = document.querySelector('.to-do-entry')\nconst inputOne = document.querySelector('#input-one')\nconst inputTwo = document.querySelector('#input-two')\nconst content = document.querySelector(\".content\");\nconst addForm = document.querySelector('.add-task-form')\n\nfunction tasker(theTask, date) {\n    dom('div', {\n        classList: 'task'\n    }, theTask, entry)\n    dom('div', {\n        classList: 'date'\n    }, date, entry)\n}\n\nfunction clear() {\n    inputOne.value = ''\n    inputTwo.value = ''\n}\n\nconst btnHandler = document.querySelectorAll(\"button\");\nbtnHandler.forEach((btn) => {\n    btn.addEventListener(\"click\", () => {\n        if (btn.id == \"add-task\") {\n            addForm.classList.toggle('show')\n        }\n        if (btn.id == \"add-task-submit\") {\n            addForm.classList.toggle('show')\n            dom(\"div\", {\n                classList: \"to-do-entry\"\n            }, null, content);\n            tasker(inputOne.value, inputTwo.value)\n            clear()\n        }\n    });\n});\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n    }\n}\n\nclass Task {\n    constructor(name, dueDate) {\n        this.name = name;\n        this.dueDate = dueDate\n    }\n}\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;