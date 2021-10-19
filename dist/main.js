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

eval("function dom(element, attributes = {}, text, parent) {\n    const elem = document.createElement(element);\n    if (attributes) {\n        Object.assign(elem, attributes);\n    }\n    if (text) {\n        elem.innerText = text;\n    }\n    if (parent) {\n        parent.appendChild(elem);\n    }\n    return elem;\n}\n\nconst content = document.querySelector(\".content\");\n\nconst btnHandler = document.querySelectorAll(\"button\");\nbtnHandler.forEach((btn) => {\n    btn.addEventListener(\"click\", () => {\n        if (btn.id == \"add-task\") {\n            dom(\"div\", {\n                classList: \"to-do-entry\"\n            }, null, content);\n        } else return;\n    });\n});\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n    }\n}\n\nclass Task {\n    constructor(name, dueDate) {\n        this.name = name;\n        this.dueDate = dueDate\n    }\n}\n\n\nconst project = new Project('clean car')\nconst task = new Task('vacuum', 'Nov 1')\ntask.dueDate = 'oct 30'\n\nconsole.log(task);\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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