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

eval("const headerButton = document.querySelectorAll('[data-header-btn]')\nconst projectList = document.querySelector('[data-project-list]')\nconst taskList = document.querySelector('[data-task-list]')\nconst dueByList = document.querySelector('[data-due-by-list]')\nconst addTaskForm = document.querySelector('[data-add-task-form]')\nconst addProjectForm = document.querySelector(\"[data-add-project-form]\")\nconst dataTaskInput = document.querySelector('[data-task-input]')\nconst dataDateInput = document.querySelector('[data-date-input]')\nconst dataProjectInput = document.querySelector('[data-project-input]')\nconst dataPriorityInput = document.querySelector('[data-priority-input]')\n\nlet projects = ['Clean', 'Work', 'Weekend', 'Dinner']\n\nfunction dom(element, attributes = {}, text, parent) {\n    const elem = document.createElement(element);\n    if (attributes) {\n        Object.assign(elem, attributes);\n    }\n    if (text) {\n        elem.innerText = text;\n    }\n    if (parent) {\n        parent.appendChild(elem);\n    }\n    return elem;\n}\n\nfunction classOn(elem, classList) {\n    elem.classList.add(classList)\n}\n\nfunction classOff(elem, classList) {\n    elem.classList.add(classList)\n}\n\nfunction render() {\n    clearElement(projectList)\n    projects.forEach(item => {\n        dom('li', {\n            classList: 'project-name',\n            id: item.id\n        }, item.name, projectList)\n    })\n}\n\nfunction clearElement(element) {\n    while (element.firstChild) {\n        element.removeChild(element.firstChild)\n    }\n}\n\nclass Project {\n    constructor(name) {\n        this.name = name\n        this.tasks = []\n        this.id = Date.now()\n        this.classList = 'project-name'\n    }\n}\n\nrender()\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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