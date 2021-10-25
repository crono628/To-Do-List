/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n::before,\\n::after {\\n    box-sizing: border-box;\\n    font-family: Impact, Haettenschweiler, \\\"Arial Narrow Bold\\\", sans-serif;\\n    color: black;\\n}\\n\\nbody {\\n    background-color: cadetblue;\\n    display: flex;\\n    flex-direction: column;\\n    padding: 0;\\n    margin: 0;\\n}\\n\\n.header-container {\\n    display: flex;\\n    flex-direction: row;\\n    align-items: center;\\n    background-color: darkcyan;\\n    height: 10vmin;\\n    border-bottom: solid black 2px;\\n}\\n\\n.title {\\n    flex: 1 1 auto;\\n    font-size: 6.2vmin;\\n    padding-left: 10px;\\n}\\n\\n.header-button-container {\\n    display: flex;\\n    flex-direction: row;\\n    gap: 50px;\\n    padding-right: 10px;\\n}\\n\\n.header-button-container>button {\\n    border: none;\\n    font-size: 3.2vmin;\\n    background-color: inherit;\\n    transition: 0.4s;\\n    cursor: pointer;\\n}\\n\\n.header-button-container>button:hover {\\n    background-color: cadetblue;\\n    transition: 0.4s;\\n    border-radius: 30px;\\n}\\n\\n.add-task-form {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    position: absolute;\\n    top: 12vmin;\\n    right: clamp(0.1rem, 3vmin, 10rem);\\n    border: solid black;\\n    gap: 5px;\\n    padding: 20px;\\n    border-radius: 0 50px 50px 50px;\\n    background-color: darkcyan;\\n}\\n\\n.add-project-form {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    position: absolute;\\n    top: 12vmin;\\n    right: 10vmin;\\n    border: solid black;\\n    gap: 15px;\\n    padding: 20px;\\n    border-radius: 50px 0 50px 50px;\\n    background-color: darkcyan;\\n}\\n\\n.project-and-task-container {\\n    display: flex;\\n    flex-direction: row;\\n}\\n\\n.project-container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    padding-top: 3vmin;\\n    font-size: 4vmin;\\n    background-color: darkslategray;\\n    border-right: solid black 2px;\\n    position: absolute;\\n    top: 10vmin;\\n    bottom: 0;\\n}\\n\\n.project-list {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    font-size: clamp(0.1rem, 2.9vmin, 1rem);\\n    flex: 1 0 auto;\\n}\\n\\n.project-list>div {\\n    padding: 0 10px 0 10px;\\n    border-radius: 30px;\\n    background-color: inherit;\\n    transition: 0.4s;\\n}\\n\\n.project-list>div:hover {\\n    background-color: darkcyan;\\n    transition: 0.4s;\\n    border-radius: 30px;\\n    cursor: pointer;\\n    padding: 0 10px 0 10px;\\n}\\n\\n.project-name {\\n    margin-top: 20px;\\n}\\n\\n.delete-project {\\n    margin-bottom: 90px;\\n    font-size: clamp(0.1rem, 2.9vmin, 1rem);\\n    border-radius: 30px;\\n    transition: 0.4s;\\n    cursor: pointer;\\n}\\n\\n.delete-project:hover {\\n    background-color: darkcyan;\\n    transition: 0.4s;\\n    border-radius: 30px;\\n    cursor: pointer;\\n    color: darkred;\\n}\\n\\n.task-container {\\n    display: flex;\\n    flex-direction: column;\\n    padding-top: 3.5vmin;\\n    padding-left: clamp(80px, 34vmin, 200px);\\n    font-size: 3vmin;\\n}\\n\\n.task-list,\\n.due-by-list,\\n.checkbox-list {\\n    margin-top: 10px;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 1.5vmin;\\n    font-size: 2vmin;\\n}\\n\\n.task-list>div,\\n.due-by-list>div,\\n.checkbox-list>div {\\n    list-style: circle;\\n    list-style-position: inside;\\n    border-radius: 30px;\\n    background-color: inherit;\\n    transition: 0.3s;\\n    padding: 0 10px 0 10px;\\n    border-bottom: solid black 2px;\\n    border-left: solid black 1px;\\n}\\n\\n.task-list>div:hover,\\n.due-by-list>div:hover,\\n.checkbox-list>div:hover {\\n    background-color: darkcyan;\\n    transition: 0.3s;\\n    border-radius: 30px;\\n    cursor: pointer;\\n    padding: 0 10px 0 10px;\\n}\\n\\n.due-by-container,\\n.checkbox-container {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: flex-start;\\n    flex: 0 1 auto;\\n    padding-top: 3.5vmin;\\n    padding-left: 25x;\\n    margin-left: 55px;\\n    font-size: 3vmin;\\n}\\n\\n.hide {\\n    display: none;\\n}\\n\\n.complete {\\n    text-decoration: line-through;\\n    color: rgb(75, 75, 75);\\n}\\n\\n.active {}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var _i = 0; _i < this.length; _i++) {\n        var id = this[_i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i2 = 0; _i2 < modules.length; _i2++) {\n      var item = [].concat(modules[_i2]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./node_modules/local-storage/local-storage.js":
/*!*****************************************************!*\
  !*** ./node_modules/local-storage/local-storage.js ***!
  \*****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar stub = __webpack_require__(/*! ./stub */ \"./node_modules/local-storage/stub.js\");\nvar parse = __webpack_require__(/*! ./parse */ \"./node_modules/local-storage/parse.js\");\nvar tracking = __webpack_require__(/*! ./tracking */ \"./node_modules/local-storage/tracking.js\");\nvar ls = 'localStorage' in __webpack_require__.g && __webpack_require__.g.localStorage ? __webpack_require__.g.localStorage : stub;\n\nfunction accessor (key, value) {\n  if (arguments.length === 1) {\n    return get(key);\n  }\n  return set(key, value);\n}\n\nfunction get (key) {\n  const raw = ls.getItem(key);\n  const parsed = parse(raw);\n  return parsed;\n}\n\nfunction set (key, value) {\n  try {\n    ls.setItem(key, JSON.stringify(value));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\nfunction remove (key) {\n  return ls.removeItem(key);\n}\n\nfunction clear () {\n  return ls.clear();\n}\n\nfunction backend (store) {\n  store && (ls = store);\n\n  return ls;\n}\n\naccessor.set = set;\naccessor.get = get;\naccessor.remove = remove;\naccessor.clear = clear;\naccessor.backend = backend;\naccessor.on = tracking.on;\naccessor.off = tracking.off;\n\nmodule.exports = accessor;\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/local-storage/local-storage.js?");

/***/ }),

/***/ "./node_modules/local-storage/parse.js":
/*!*********************************************!*\
  !*** ./node_modules/local-storage/parse.js ***!
  \*********************************************/
/***/ ((module) => {

eval("\n\nfunction parse (rawValue) {\n  const parsed = parseValue(rawValue);\n\n  if (parsed === undefined) {\n    return null;\n  }\n\n  return parsed;\n}\n\nfunction parseValue (rawValue) {\n  try {\n    return JSON.parse(rawValue);\n  } catch (err) {\n    return rawValue;\n  }\n}\n\nmodule.exports = parse;\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/local-storage/parse.js?");

/***/ }),

/***/ "./node_modules/local-storage/stub.js":
/*!********************************************!*\
  !*** ./node_modules/local-storage/stub.js ***!
  \********************************************/
/***/ ((module) => {

eval("\n\nvar ms = {};\n\nfunction getItem (key) {\n  return key in ms ? ms[key] : null;\n}\n\nfunction setItem (key, value) {\n  ms[key] = value;\n  return true;\n}\n\nfunction removeItem (key) {\n  var found = key in ms;\n  if (found) {\n    return delete ms[key];\n  }\n  return false;\n}\n\nfunction clear () {\n  ms = {};\n  return true;\n}\n\nmodule.exports = {\n  getItem: getItem,\n  setItem: setItem,\n  removeItem: removeItem,\n  clear: clear\n};\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/local-storage/stub.js?");

/***/ }),

/***/ "./node_modules/local-storage/tracking.js":
/*!************************************************!*\
  !*** ./node_modules/local-storage/tracking.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar parse = __webpack_require__(/*! ./parse */ \"./node_modules/local-storage/parse.js\");\nvar listeners = {};\nvar listening = false;\n\nfunction listen () {\n  if (__webpack_require__.g.addEventListener) {\n    __webpack_require__.g.addEventListener('storage', change, false);\n  } else if (__webpack_require__.g.attachEvent) {\n    __webpack_require__.g.attachEvent('onstorage', change);\n  } else {\n    __webpack_require__.g.onstorage = change;\n  }\n}\n\nfunction change (e) {\n  if (!e) {\n    e = __webpack_require__.g.event;\n  }\n  var all = listeners[e.key];\n  if (all) {\n    all.forEach(fire);\n  }\n\n  function fire (listener) {\n    listener(parse(e.newValue), parse(e.oldValue), e.url || e.uri);\n  }\n}\n\nfunction on (key, fn) {\n  if (listeners[key]) {\n    listeners[key].push(fn);\n  } else {\n    listeners[key] = [fn];\n  }\n  if (listening === false) {\n    listen();\n  }\n}\n\nfunction off (key, fn) {\n  var ns = listeners[key];\n  if (ns.length > 1) {\n    ns.splice(ns.indexOf(fn), 1);\n  } else {\n    listeners[key] = [];\n  }\n}\n\nmodule.exports = {\n  on: on,\n  off: off\n};\n\n\n//# sourceURL=webpack://to-do-list/./node_modules/local-storage/tracking.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://to-do-list/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://to-do-list/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\nconst headerButton = document.querySelectorAll(\"[data-header-btn]\");\nconst projectList = document.querySelector(\"[data-project-list]\");\nconst taskList = document.querySelector(\"[data-task-list]\");\nconst dueByList = document.querySelector(\"[data-due-by-list]\");\nconst checkboxList = document.querySelector(\"[data-checkbox-list]\");\nconst dataForms = document.querySelectorAll(\"[data-form]\");\nconst dataSubmitFormBtn = document.querySelectorAll(\"[data-form-submit]\");\nconst dataCancelFormBtn = document.querySelectorAll(\"[data-form-cancel]\");\nconst dataTaskInput = document.querySelector(\"[data-task-input]\");\nconst dataDateInput = document.querySelector(\"[data-date-input]\");\nconst dataProjectInput = document.querySelector(\"[data-project-input]\");\nconst dataDeleteProjectBtn = document.querySelectorAll(\"[data-delete-project]\")\nconst dataProjectIdentification = document.querySelectorAll(\"[data-project-id]\")\nlet projectDiv = projectList.childNodes\n\nlet ls = __webpack_require__(/*! local-storage */ \"./node_modules/local-storage/local-storage.js\")\nlet projects = JSON.parse(ls(\"todo.projects\")) || []\nlet currentProjectId\n\nfunction dom(element, attributes = {}, text, parent) {\n    const elem = document.createElement(element);\n    if (attributes) {\n        Object.assign(elem, attributes);\n    }\n    if (text) {\n        elem.innerText = text;\n    }\n    if (parent) {\n        parent.appendChild(elem);\n    }\n    return elem;\n}\n\nfunction render() {\n    clearLists(projectList)\n    projects.forEach(project => {\n        thing = dom('div', {\n            classList: project.classList,\n            id: project.id\n        }, project.name, projectList)\n        thing.dataset.projectId = project.id\n    });\n    closeForms()\n}\n\nfunction save() {\n    ls(\"todo.projects\", JSON.stringify(projects))\n}\n\nfunction renderAndSave() {\n    render()\n    save()\n}\n\nfunction clearLists(element) {\n    while (element.firstChild) {\n        element.removeChild(element.firstChild)\n    }\n}\n\nfunction closeForms() {\n    dataForms.forEach(form => {\n        form.classList.add('hide')\n    })\n}\n\nfunction findCurrentProject(list) {\n    list.find(item => item.id == currentProjectId)\n    return list\n}\n\nheaderButton.forEach(btn => {\n    btn.addEventListener('click', () => {\n        dataForms.forEach(form => {\n            form.classList.add('hide')\n        })\n        if (btn.dataset.headerBtn == \"project\") {\n            document.querySelector('.add-project-form').classList.remove('hide')\n        }\n    })\n})\n\ndataSubmitFormBtn.forEach(btn => {\n    btn.addEventListener('click', (e) => {\n        e.preventDefault()\n        if (btn.dataset.formSubmit == \"project\") {\n            if (dataProjectInput.value == null || dataProjectInput == '') {\n                return\n            } else {\n                let newObj = new Project(dataProjectInput.value)\n                projects.push(newObj)\n                currentProjectId = newObj.id\n                dataProjectInput.value = null\n                renderAndSave()\n            }\n        }\n        if (btn.dataset.formSubmit == \"task\") {\n            let newObj = new Task(dataTaskInput.value, dataDateInput.value)\n\n        }\n    })\n})\n\ndataCancelFormBtn.forEach(btn => {\n    btn.addEventListener('click', (e) => {\n        e.preventDefault()\n        closeForms()\n    })\n})\n\nprojectDiv.forEach(div => {\n    div.addEventListener(\"click\", (e) => {\n        console.log('click')\n    })\n})\n\nconsole.log(projectDiv);\n\nclass Project {\n    constructor(name) {\n        this.name = name\n        this.tasks = [];\n        this.id = Date.now().toString();\n        this.classList = \"project-name\";\n    }\n}\n\nclass Task {\n    constructor(name, dueDate) {\n        this.name = name\n        this.dueDate = dueDate\n        this.complete = false\n        this.classList = \"task-name\"\n    }\n}\n\nrenderAndSave()\n\n//# sourceURL=webpack://to-do-list/./src/index.js?");

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
/******/ 			id: moduleId,
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;