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

/***/ "./node_modules/local-storage/local-storage.js":
/*!*****************************************************!*\
  !*** ./node_modules/local-storage/local-storage.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar stub = __webpack_require__(/*! ./stub */ \"./node_modules/local-storage/stub.js\");\nvar parse = __webpack_require__(/*! ./parse */ \"./node_modules/local-storage/parse.js\");\nvar tracking = __webpack_require__(/*! ./tracking */ \"./node_modules/local-storage/tracking.js\");\nvar ls = 'localStorage' in __webpack_require__.g && __webpack_require__.g.localStorage ? __webpack_require__.g.localStorage : stub;\n\nfunction accessor (key, value) {\n  if (arguments.length === 1) {\n    return get(key);\n  }\n  return set(key, value);\n}\n\nfunction get (key) {\n  const raw = ls.getItem(key);\n  const parsed = parse(raw);\n  return parsed;\n}\n\nfunction set (key, value) {\n  try {\n    ls.setItem(key, JSON.stringify(value));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\nfunction remove (key) {\n  return ls.removeItem(key);\n}\n\nfunction clear () {\n  return ls.clear();\n}\n\nfunction backend (store) {\n  store && (ls = store);\n\n  return ls;\n}\n\naccessor.set = set;\naccessor.get = get;\naccessor.remove = remove;\naccessor.clear = clear;\naccessor.backend = backend;\naccessor.on = tracking.on;\naccessor.off = tracking.off;\n\nmodule.exports = accessor;\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/local-storage/local-storage.js?");

/***/ }),

/***/ "./node_modules/local-storage/parse.js":
/*!*********************************************!*\
  !*** ./node_modules/local-storage/parse.js ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
eval("\n\nfunction parse (rawValue) {\n  const parsed = parseValue(rawValue);\n\n  if (parsed === undefined) {\n    return null;\n  }\n\n  return parsed;\n}\n\nfunction parseValue (rawValue) {\n  try {\n    return JSON.parse(rawValue);\n  } catch (err) {\n    return rawValue;\n  }\n}\n\nmodule.exports = parse;\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/local-storage/parse.js?");

/***/ }),

/***/ "./node_modules/local-storage/stub.js":
/*!********************************************!*\
  !*** ./node_modules/local-storage/stub.js ***!
  \********************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar ms = {};\n\nfunction getItem (key) {\n  return key in ms ? ms[key] : null;\n}\n\nfunction setItem (key, value) {\n  ms[key] = value;\n  return true;\n}\n\nfunction removeItem (key) {\n  var found = key in ms;\n  if (found) {\n    return delete ms[key];\n  }\n  return false;\n}\n\nfunction clear () {\n  ms = {};\n  return true;\n}\n\nmodule.exports = {\n  getItem: getItem,\n  setItem: setItem,\n  removeItem: removeItem,\n  clear: clear\n};\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/local-storage/stub.js?");

/***/ }),

/***/ "./node_modules/local-storage/tracking.js":
/*!************************************************!*\
  !*** ./node_modules/local-storage/tracking.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\nvar parse = __webpack_require__(/*! ./parse */ \"./node_modules/local-storage/parse.js\");\nvar listeners = {};\nvar listening = false;\n\nfunction listen () {\n  if (__webpack_require__.g.addEventListener) {\n    __webpack_require__.g.addEventListener('storage', change, false);\n  } else if (__webpack_require__.g.attachEvent) {\n    __webpack_require__.g.attachEvent('onstorage', change);\n  } else {\n    __webpack_require__.g.onstorage = change;\n  }\n}\n\nfunction change (e) {\n  if (!e) {\n    e = __webpack_require__.g.event;\n  }\n  var all = listeners[e.key];\n  if (all) {\n    all.forEach(fire);\n  }\n\n  function fire (listener) {\n    listener(parse(e.newValue), parse(e.oldValue), e.url || e.uri);\n  }\n}\n\nfunction on (key, fn) {\n  if (listeners[key]) {\n    listeners[key].push(fn);\n  } else {\n    listeners[key] = [fn];\n  }\n  if (listening === false) {\n    listen();\n  }\n}\n\nfunction off (key, fn) {\n  var ns = listeners[key];\n  if (ns.length > 1) {\n    ns.splice(ns.indexOf(fn), 1);\n  } else {\n    listeners[key] = [];\n  }\n}\n\nmodule.exports = {\n  on: on,\n  off: off\n};\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/local-storage/tracking.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const headerButton = document.querySelectorAll(\"[data-header-btn]\");\nconst projectList = document.querySelector(\"[data-project-list]\");\nconst taskList = document.querySelector(\"[data-task-list]\");\nconst dueByList = document.querySelector(\"[data-due-by-list]\");\nconst checkboxList = document.querySelector(\"[data-checkbox-list]\");\nconst dataForms = document.querySelectorAll(\"[data-form]\");\nconst dataSubmitFormBtn = document.querySelectorAll(\"[data-form-submit]\");\nconst dataCancelFormBtn = document.querySelectorAll(\"[data-form-cancel]\");\nconst dataTaskInput = document.querySelector(\"[data-task-input]\");\nconst dataDateInput = document.querySelector(\"[data-date-input]\");\nconst dataProjectInput = document.querySelector(\"[data-project-input]\");\nconst dataDeleteProjectBtn = document.querySelectorAll(\"[data-delete-project]\");\n\nlet ls = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\");\nlet projects = JSON.parse(ls(\"todo.projects\")) || []\nlet currentProjectId = JSON.parse(ls(\"todo.currentProjectId\"))\n\n\nfunction dom(element, attributes = {}, text, parent) {\n    const elem = document.createElement(element);\n    if (attributes) {\n        Object.assign(elem, attributes);\n    }\n    if (text) {\n        elem.innerText = text;\n    }\n    if (parent) {\n        parent.appendChild(elem);\n    }\n    return elem;\n}\n\nfunction render() {\n    clearLists(projectList);\n    clearTasks();\n    renderProjects();\n    closeForms();\n}\n\nfunction renderProjects() {\n    clearLists(projectList);\n    projects.forEach((project) => {\n        let obj = dom(\n            \"div\", {\n                classList: project.classList,\n                id: project.id\n            },\n            project.name,\n            projectList\n        );\n        obj.dataset.arrayIndex = getIndex(project);\n        obj.addEventListener(\"click\", (e) => {\n            currentProjectId = e.target.id;\n            projectList.childNodes.forEach((child) => {\n                child.classList.remove(\"active\");\n            });\n            obj.classList.add(\"active\");\n            clearTasks();\n            renderTasks();\n        });\n    });\n}\n\nfunction renderTasks() {\n    if (currentProjectId) {\n        clearTasks();\n        let theThing = findCurrentProject(projects);\n        theThing.tasks.forEach((listItem) => {\n            let task = dom(\n                \"div\", {\n                    classList: listItem.classList,\n                    id: currentProjectId\n                },\n                listItem.name,\n                taskList\n            );\n            dom(\n                \"div\", {\n                    classList: listItem.classList,\n                    id: currentProjectId\n                },\n                listItem.dueDate,\n                dueByList\n            );\n            dom(\n                \"div\", {\n                    classList: listItem.classList,\n                    id: currentProjectId\n                },\n                listItem.complete,\n                checkboxList\n            );\n            task.dataset.arrayIndex = getIndex(theThing);\n            task.addEventListener(\"click\", (e) => {\n                task.classList.toggle(\"complete\");\n            });\n        });\n    }\n}\n\nfunction save() {\n    ls(\"todo.projects\", JSON.stringify(projects))\n    ls(\"todo.currentProjectId\", JSON.stringify(currentProjectId))\n}\n\nfunction renderAndSave() {\n    render();\n    save();\n}\n\nfunction newProjectRender() {\n    let list = document.getElementsByClassName(\"project-name\");\n    for (let i = 0; i < projects.length - 1; i++) {\n        list[i].classList.remove(\"active\");\n    }\n}\n\nfunction deleteButtonRender() {\n    let list = document.getElementsByClassName(\"project-name\");\n    for (let i = 0; i < projects.length; i++) {\n        list[i].classList.remove(\"active\");\n    }\n}\n\nfunction clearLists(element) {\n    while (element.firstChild) {\n        element.removeChild(element.firstChild);\n    }\n}\n\nfunction clearTasks() {\n    clearLists(dueByList);\n    clearLists(taskList);\n    clearLists(checkboxList);\n}\n\nfunction closeForms() {\n    dataForms.forEach((form) => {\n        form.classList.add(\"hide\");\n    });\n}\n\nfunction findCurrentProject(arr) {\n    let finder = arr.find((item) => item.id === currentProjectId);\n    return finder;\n}\n\nfunction getIndex(thing) {\n    return projects.indexOf(thing);\n}\n\nheaderButton.forEach((btn) => {\n    btn.addEventListener(\"click\", () => {\n        dataForms.forEach((form) => {\n            form.classList.add(\"hide\");\n        });\n        if (btn.dataset.headerBtn == \"project\") {\n            document.querySelector(\".add-project-form\").classList.remove(\"hide\");\n        }\n        if (btn.dataset.headerBtn == \"task\") {\n            document.querySelector(\".add-task-form\").classList.remove(\"hide\");\n        }\n    });\n});\n\ndataSubmitFormBtn.forEach((btn) => {\n    btn.addEventListener(\"click\", (e) => {\n        e.preventDefault();\n        if (btn.dataset.formSubmit == \"project\") {\n            if (dataProjectInput.value === null || dataProjectInput === \" \") {\n                return;\n            } else {\n                let newObj = new Project(dataProjectInput.value);\n                projects.push(newObj);\n                currentProjectId = newObj.id;\n                dataProjectInput.value = null;\n                renderAndSave();\n                newProjectRender();\n            }\n        }\n        if (btn.dataset.formSubmit == \"task\") {\n            if (dataTaskInput.value === null || dataTaskInput === \" \") {\n                return;\n            } else {\n                let newObj = new Task(dataTaskInput.value, dataDateInput.value);\n                let currentProject = findCurrentProject(projects);\n                currentProject.tasks.push(newObj);\n                newObj.id = currentProjectId;\n                dataTaskInput.value = null;\n                dataDateInput.value = null;\n                renderTasks();\n                save();\n            }\n        }\n    });\n});\n\ndataCancelFormBtn.forEach((btn) => {\n    btn.addEventListener(\"click\", (e) => {\n        e.preventDefault();\n        closeForms();\n    });\n});\n\ndataDeleteProjectBtn.forEach((btn) => {\n    btn.addEventListener(\"click\", () => {\n        if (btn.dataset.deleteProject == \"first-check\") {\n            document.querySelector(\".confirm-delete\").classList.toggle(\"hide\");\n        }\n        if (btn.dataset.deleteProject == \"confirm\") {\n            let index = getIndex(findCurrentProject(projects));\n            document.querySelector(\".confirm-delete\").classList.toggle(\"hide\");\n            projects.splice(index, 1);\n            renderAndSave();\n            deleteButtonRender();\n        }\n    });\n});\n\nclass Project {\n    constructor(name) {\n        this.name = name;\n        this.tasks = [];\n        this.id = Date.now().toString();\n        this.classList = \"project-name active\";\n    }\n}\n\nclass Task {\n    constructor(name, dueDate) {\n        this.name = name;\n        this.dueDate = dueDate;\n        this.complete = false;\n        this.classList = \"task-name\";\n    }\n}\n\nrenderAndSave();\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;