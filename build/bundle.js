/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"bundle": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/index.js","vendors~bundle"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/fonts/font-face.css":
/*!**********************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/fonts/font-face.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ./Vazir-Regular.eot */ \"./src/Components/fonts/Vazir-Regular.eot\");\nvar ___CSS_LOADER_URL_IMPORT_1___ = __webpack_require__(/*! ./Vazir-Regular.woff2 */ \"./src/Components/fonts/Vazir-Regular.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_2___ = __webpack_require__(/*! ./Vazir-Regular.woff */ \"./src/Components/fonts/Vazir-Regular.woff\");\nvar ___CSS_LOADER_URL_IMPORT_3___ = __webpack_require__(/*! ./Vazir-Regular.ttf */ \"./src/Components/fonts/Vazir-Regular.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_4___ = __webpack_require__(/*! ./Vazir-Bold.eot */ \"./src/Components/fonts/Vazir-Bold.eot\");\nvar ___CSS_LOADER_URL_IMPORT_5___ = __webpack_require__(/*! ./Vazir-Bold.woff2 */ \"./src/Components/fonts/Vazir-Bold.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_6___ = __webpack_require__(/*! ./Vazir-Bold.woff */ \"./src/Components/fonts/Vazir-Bold.woff\");\nvar ___CSS_LOADER_URL_IMPORT_7___ = __webpack_require__(/*! ./Vazir-Bold.ttf */ \"./src/Components/fonts/Vazir-Bold.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_8___ = __webpack_require__(/*! ./Vazir-Thin.eot */ \"./src/Components/fonts/Vazir-Thin.eot\");\nvar ___CSS_LOADER_URL_IMPORT_9___ = __webpack_require__(/*! ./Vazir-Thin.woff2 */ \"./src/Components/fonts/Vazir-Thin.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_10___ = __webpack_require__(/*! ./Vazir-Thin.woff */ \"./src/Components/fonts/Vazir-Thin.woff\");\nvar ___CSS_LOADER_URL_IMPORT_11___ = __webpack_require__(/*! ./Vazir-Thin.ttf */ \"./src/Components/fonts/Vazir-Thin.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_12___ = __webpack_require__(/*! ./Vazir-Light.eot */ \"./src/Components/fonts/Vazir-Light.eot\");\nvar ___CSS_LOADER_URL_IMPORT_13___ = __webpack_require__(/*! ./Vazir-Light.woff2 */ \"./src/Components/fonts/Vazir-Light.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_14___ = __webpack_require__(/*! ./Vazir-Light.woff */ \"./src/Components/fonts/Vazir-Light.woff\");\nvar ___CSS_LOADER_URL_IMPORT_15___ = __webpack_require__(/*! ./Vazir-Light.ttf */ \"./src/Components/fonts/Vazir-Light.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_16___ = __webpack_require__(/*! ./Vazir-Medium.eot */ \"./src/Components/fonts/Vazir-Medium.eot\");\nvar ___CSS_LOADER_URL_IMPORT_17___ = __webpack_require__(/*! ./Vazir-Medium.woff2 */ \"./src/Components/fonts/Vazir-Medium.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_18___ = __webpack_require__(/*! ./Vazir-Medium.woff */ \"./src/Components/fonts/Vazir-Medium.woff\");\nvar ___CSS_LOADER_URL_IMPORT_19___ = __webpack_require__(/*! ./Vazir-Medium.ttf */ \"./src/Components/fonts/Vazir-Medium.ttf\");\nvar ___CSS_LOADER_URL_IMPORT_20___ = __webpack_require__(/*! ./Vazir-Black.eot */ \"./src/Components/fonts/Vazir-Black.eot\");\nvar ___CSS_LOADER_URL_IMPORT_21___ = __webpack_require__(/*! ./Vazir-Black.woff2 */ \"./src/Components/fonts/Vazir-Black.woff2\");\nvar ___CSS_LOADER_URL_IMPORT_22___ = __webpack_require__(/*! ./Vazir-Black.woff */ \"./src/Components/fonts/Vazir-Black.woff\");\nvar ___CSS_LOADER_URL_IMPORT_23___ = __webpack_require__(/*! ./Vazir-Black.ttf */ \"./src/Components/fonts/Vazir-Black.ttf\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_1___);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_2___);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_3___);\nvar ___CSS_LOADER_URL_REPLACEMENT_5___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___);\nvar ___CSS_LOADER_URL_REPLACEMENT_6___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_4___, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_7___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_5___);\nvar ___CSS_LOADER_URL_REPLACEMENT_8___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_6___);\nvar ___CSS_LOADER_URL_REPLACEMENT_9___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_7___);\nvar ___CSS_LOADER_URL_REPLACEMENT_10___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___);\nvar ___CSS_LOADER_URL_REPLACEMENT_11___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_8___, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_12___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_9___);\nvar ___CSS_LOADER_URL_REPLACEMENT_13___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_10___);\nvar ___CSS_LOADER_URL_REPLACEMENT_14___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_11___);\nvar ___CSS_LOADER_URL_REPLACEMENT_15___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___);\nvar ___CSS_LOADER_URL_REPLACEMENT_16___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_12___, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_17___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_13___);\nvar ___CSS_LOADER_URL_REPLACEMENT_18___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_14___);\nvar ___CSS_LOADER_URL_REPLACEMENT_19___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_15___);\nvar ___CSS_LOADER_URL_REPLACEMENT_20___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___);\nvar ___CSS_LOADER_URL_REPLACEMENT_21___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_16___, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_22___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_17___);\nvar ___CSS_LOADER_URL_REPLACEMENT_23___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_18___);\nvar ___CSS_LOADER_URL_REPLACEMENT_24___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_19___);\nvar ___CSS_LOADER_URL_REPLACEMENT_25___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_20___);\nvar ___CSS_LOADER_URL_REPLACEMENT_26___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_20___, { hash: \"?#iefix\" });\nvar ___CSS_LOADER_URL_REPLACEMENT_27___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_21___);\nvar ___CSS_LOADER_URL_REPLACEMENT_28___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_22___);\nvar ___CSS_LOADER_URL_REPLACEMENT_29___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_23___);\n// Module\nexports.push([module.i, \"@font-face {\\n  font-family: Vazir;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('embedded-opentype'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format('woff2'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \") format('woff'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \") format('truetype');\\n  font-weight: normal;\\n  font-display:swap;\\n}\\n\\n@font-face {\\n  font-family: Vazir;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_5___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_6___ + \") format('embedded-opentype'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_7___ + \") format('woff2'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_8___ + \") format('woff'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_9___ + \") format('truetype');\\n  font-weight: bold;\\n  font-display:swap;\\n}\\n\\n@font-face {\\n  font-family: Vazir;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_10___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_11___ + \") format('embedded-opentype'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_12___ + \") format('woff2'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_13___ + \") format('woff'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_14___ + \") format('truetype');\\n  font-weight: 100;\\n  font-display:swap;\\n}\\n\\n@font-face {\\n  font-family: Vazir;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_15___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_16___ + \") format('embedded-opentype'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_17___ + \") format('woff2'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_18___ + \") format('woff'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_19___ + \") format('truetype');\\n  font-weight: 300;\\n  font-display:swap;\\n}\\n\\n@font-face {\\n  font-family: Vazir;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_20___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_21___ + \") format('embedded-opentype'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_22___ + \") format('woff2'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_23___ + \") format('woff'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_24___ + \") format('truetype');\\n  font-weight: 500;\\n  font-display:swap;\\n}\\n\\n@font-face {\\n  font-family: Vazir;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_25___ + \");\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_26___ + \") format('embedded-opentype'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_27___ + \") format('woff2'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_28___ + \") format('woff'),\\n       url(\" + ___CSS_LOADER_URL_REPLACEMENT_29___ + \") format('truetype');\\n  font-weight: 900;\\n  font-display:swap;\\n}\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Components/fonts/font-face.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/Components/styles/image-style.css":
/*!*************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/Components/styles/image-style.css ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_AT_RULE_IMPORT_0___ = __webpack_require__(/*! -!../../../node_modules/css-loader/dist/cjs.js!./../fonts/font-face.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Components/fonts/font-face.css\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nexports.i(___CSS_LOADER_AT_RULE_IMPORT_0___);\n// Module\nexports.push([module.i, \"body {\\n  font-family: 'Vazir';\\n}\\n\\n.img-box {\\n  display: flex;\\n  align-items: center;\\n  justify-content: center;\\n  height: 100vh;\\n  margin: auto;\\n  flex-direction: column;\\n}\\n\\n.image {\\n  border: 1px solid violet;\\n  border-radius: 5px;\\n  padding: 0.75rem;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/Components/styles/image-style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Black.eot":
/*!**********************************************!*\
  !*** ./src/Components/fonts/Vazir-Black.eot ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Black.eot\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Black.eot?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Black.ttf":
/*!**********************************************!*\
  !*** ./src/Components/fonts/Vazir-Black.ttf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Black.ttf\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Black.ttf?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Black.woff":
/*!***********************************************!*\
  !*** ./src/Components/fonts/Vazir-Black.woff ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Black.woff\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Black.woff?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Black.woff2":
/*!************************************************!*\
  !*** ./src/Components/fonts/Vazir-Black.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Black.woff2\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Black.woff2?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Bold.eot":
/*!*********************************************!*\
  !*** ./src/Components/fonts/Vazir-Bold.eot ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Bold.eot\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Bold.eot?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Bold.ttf":
/*!*********************************************!*\
  !*** ./src/Components/fonts/Vazir-Bold.ttf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Bold.ttf\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Bold.ttf?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Bold.woff":
/*!**********************************************!*\
  !*** ./src/Components/fonts/Vazir-Bold.woff ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Bold.woff\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Bold.woff?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Bold.woff2":
/*!***********************************************!*\
  !*** ./src/Components/fonts/Vazir-Bold.woff2 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Bold.woff2\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Bold.woff2?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Light.eot":
/*!**********************************************!*\
  !*** ./src/Components/fonts/Vazir-Light.eot ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Light.eot\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Light.eot?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Light.ttf":
/*!**********************************************!*\
  !*** ./src/Components/fonts/Vazir-Light.ttf ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Light.ttf\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Light.ttf?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Light.woff":
/*!***********************************************!*\
  !*** ./src/Components/fonts/Vazir-Light.woff ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Light.woff\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Light.woff?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Light.woff2":
/*!************************************************!*\
  !*** ./src/Components/fonts/Vazir-Light.woff2 ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Light.woff2\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Light.woff2?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Medium.eot":
/*!***********************************************!*\
  !*** ./src/Components/fonts/Vazir-Medium.eot ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Medium.eot\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Medium.eot?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Medium.ttf":
/*!***********************************************!*\
  !*** ./src/Components/fonts/Vazir-Medium.ttf ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Medium.ttf\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Medium.ttf?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Medium.woff":
/*!************************************************!*\
  !*** ./src/Components/fonts/Vazir-Medium.woff ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Medium.woff\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Medium.woff?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Medium.woff2":
/*!*************************************************!*\
  !*** ./src/Components/fonts/Vazir-Medium.woff2 ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Medium.woff2\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Medium.woff2?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Regular.eot":
/*!************************************************!*\
  !*** ./src/Components/fonts/Vazir-Regular.eot ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Regular.eot\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Regular.eot?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Regular.ttf":
/*!************************************************!*\
  !*** ./src/Components/fonts/Vazir-Regular.ttf ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Regular.ttf\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Regular.ttf?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Regular.woff":
/*!*************************************************!*\
  !*** ./src/Components/fonts/Vazir-Regular.woff ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Regular.woff\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Regular.woff?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Regular.woff2":
/*!**************************************************!*\
  !*** ./src/Components/fonts/Vazir-Regular.woff2 ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Regular.woff2\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Regular.woff2?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Thin.eot":
/*!*********************************************!*\
  !*** ./src/Components/fonts/Vazir-Thin.eot ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Thin.eot\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Thin.eot?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Thin.ttf":
/*!*********************************************!*\
  !*** ./src/Components/fonts/Vazir-Thin.ttf ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Thin.ttf\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Thin.ttf?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Thin.woff":
/*!**********************************************!*\
  !*** ./src/Components/fonts/Vazir-Thin.woff ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Thin.woff\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Thin.woff?");

/***/ }),

/***/ "./src/Components/fonts/Vazir-Thin.woff2":
/*!***********************************************!*\
  !*** ./src/Components/fonts/Vazir-Thin.woff2 ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"fonts/Vazir-Thin.woff2\";\n\n//# sourceURL=webpack:///./src/Components/fonts/Vazir-Thin.woff2?");

/***/ }),

/***/ "./src/Components/images/redux-cover.webp":
/*!************************************************!*\
  !*** ./src/Components/images/redux-cover.webp ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"images/redux-cover.webp\";\n\n//# sourceURL=webpack:///./src/Components/images/redux-cover.webp?");

/***/ }),

/***/ "./src/Components/styles/image-style.css":
/*!***********************************************!*\
  !*** ./src/Components/styles/image-style.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./image-style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/Components/styles/image-style.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./src/Components/styles/image-style.css?");

/***/ }),

/***/ "./src/imageComponent.js":
/*!*******************************!*\
  !*** ./src/imageComponent.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Components_styles_image_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Components/styles/image-style.css */ \"./src/Components/styles/image-style.css\");\n/* harmony import */ var _Components_styles_image_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Components_styles_image_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Components_images_redux_cover_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Components/images/redux-cover.webp */ \"./src/Components/images/redux-cover.webp\");\n/* harmony import */ var _Components_images_redux_cover_webp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Components_images_redux_cover_webp__WEBPACK_IMPORTED_MODULE_1__);\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\n\n\n\nvar imageComponent = /*#__PURE__*/function () {\n  function imageComponent() {\n    _classCallCheck(this, imageComponent);\n  }\n\n  _createClass(imageComponent, [{\n    key: \"createImageTag\",\n    value: function createImageTag() {\n      var image = document.createElement(\"img\");\n      image.alt = \"my-image\";\n      image.classList.add(\"image\");\n      image.src = _Components_images_redux_cover_webp__WEBPACK_IMPORTED_MODULE_1___default.a;\n      return image;\n    }\n  }, {\n    key: \"createTextTag\",\n    value: function createTextTag() {\n      var text = document.createElement(\"h2\");\n      text.innerHTML = \"میر سینا و میر امین غفاری\";\n      return text;\n    }\n  }, {\n    key: \"render\",\n    value: function render() {\n      var element = document.createElement(\"div\");\n      element.classList.add(\"img-box\");\n      element.appendChild(this.createImageTag());\n      element.appendChild(this.createTextTag());\n      return element;\n    }\n  }]);\n\n  return imageComponent;\n}();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new imageComponent());\n\n//# sourceURL=webpack:///./src/imageComponent.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _imageComponent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./imageComponent */ \"./src/imageComponent.js\");\n\nvar app = document.getElementById('root');\napp.appendChild(_imageComponent__WEBPACK_IMPORTED_MODULE_0__[\"default\"].render());\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });