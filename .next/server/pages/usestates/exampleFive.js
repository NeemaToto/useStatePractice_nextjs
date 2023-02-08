"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/usestates/exampleFive";
exports.ids = ["pages/usestates/exampleFive"];
exports.modules = {

/***/ "./pages/usestates/exampleFive.js":
/*!****************************************!*\
  !*** ./pages/usestates/exampleFive.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ exampleFive)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//In this example we will change the colour depending on number. If number is greater than 1, make div visible. if equal to 2, make orange\nfunction exampleFive() {\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"gray\");\n    //Handle is like another function. Only when you actually click on the button \n    //then we're gonna set a color change on the text and background color.\n    //Also remember this is another way to write a function\n    const HandleChange = ()=>{\n        if (number == 2) {\n            setColor(\"orange\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    //This runs so fast it lags the number behind. Thats why we have to click on it three times for orange to appear.\n                    //We need to set a timer so it fixes.\n                    setNumber(number + 1);\n                    //This HandleChange makes it callback to the function above to make it check the if statement.\n                    HandleChange();\n                },\n                children: \"Add number\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 20,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color\n                },\n                children: \"Change the text color\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            //color is in quotes because we need it to be in quotes since useState at the top is also in quotes\n            number > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: `${color}`,\n                    lineHeight: 10,\n                    padding: 20\n                },\n                children: \"Box\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 32,\n                columnNumber: 31\n            }, this),\n            number\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VzdGF0ZXMvZXhhbXBsZUZpdmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdDO0FBRWhDLDBJQUEwSTtBQUMzSCxTQUFTQyxjQUFjO0lBQ2xDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUNyQyxNQUFNLENBQUNJLE9BQU9DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDbkMsOEVBQThFO0lBQzlFLHVFQUF1RTtJQUN2RSx1REFBdUQ7SUFDdkQsTUFBTU0sZUFBZSxJQUFNO1FBQ3ZCLElBQUlKLFVBQVUsR0FBRztZQUNiRyxTQUFTO1FBQ2IsQ0FBQztJQUNMO0lBQ0EscUJBQ0ksOERBQUNFOzswQkFJRyw4REFBQ0M7Z0JBQU9DLFNBQVMsSUFBTTtvQkFDbkIsaUhBQWlIO29CQUNqSCxxQ0FBcUM7b0JBQ3JDTixVQUFVRCxTQUFTO29CQUNuQiw4RkFBOEY7b0JBQzlGSTtnQkFDSjswQkFBRzs7Ozs7OzBCQUdILDhEQUFDSTtnQkFBR0MsT0FBTztvQkFBRVA7Z0JBQU07MEJBQUc7Ozs7OztZQUVsQixtR0FBbUc7WUFDbkdGLFNBQVMsbUJBQUssOERBQUNLO2dCQUFJSSxPQUFPO29CQUFFQyxpQkFBaUIsQ0FBQyxFQUFFUixNQUFNLENBQUM7b0JBQUVTLFlBQVk7b0JBQUlDLFNBQVM7Z0JBQUc7MEJBQUc7Ozs7OztZQUkzRlo7Ozs7Ozs7QUFHYixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdXNlLXN0YXRlLXByYWN0aWNlMDEvLi9wYWdlcy91c2VzdGF0ZXMvZXhhbXBsZUZpdmUuanM/Yzk1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuLy9JbiB0aGlzIGV4YW1wbGUgd2Ugd2lsbCBjaGFuZ2UgdGhlIGNvbG91ciBkZXBlbmRpbmcgb24gbnVtYmVyLiBJZiBudW1iZXIgaXMgZ3JlYXRlciB0aGFuIDEsIG1ha2UgZGl2IHZpc2libGUuIGlmIGVxdWFsIHRvIDIsIG1ha2Ugb3JhbmdlXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4YW1wbGVGaXZlKCkge1xyXG4gICAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShcImdyYXlcIilcclxuICAgIC8vSGFuZGxlIGlzIGxpa2UgYW5vdGhlciBmdW5jdGlvbi4gT25seSB3aGVuIHlvdSBhY3R1YWxseSBjbGljayBvbiB0aGUgYnV0dG9uIFxyXG4gICAgLy90aGVuIHdlJ3JlIGdvbm5hIHNldCBhIGNvbG9yIGNoYW5nZSBvbiB0aGUgdGV4dCBhbmQgYmFja2dyb3VuZCBjb2xvci5cclxuICAgIC8vQWxzbyByZW1lbWJlciB0aGlzIGlzIGFub3RoZXIgd2F5IHRvIHdyaXRlIGEgZnVuY3Rpb25cclxuICAgIGNvbnN0IEhhbmRsZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAobnVtYmVyID09IDIpIHtcclxuICAgICAgICAgICAgc2V0Q29sb3IoXCJvcmFuZ2VcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiBBZGRpbmcgYW4gZXh0cmEgY3VybHkgYnJhY2UgYnJhY2tldHMgYWZ0ZXIgdGhlIGFycm93IGJlY2F1c2UgdGhpcyBvbkNsaWNrIGlzXHJcbiAgICAgICAgICAgIGdvaW5nIHRvIGhhdmUgZXh0cmEgZnVuY3Rpb25hbGl0aWVzLiBJZiB0aGVyZSB3YXMgb25seSBvbmUsIHRoZW4gdGhlIGN1cmx5IGJyYWNrZXRzXHJcbiAgICAgICAgICAgIHdvdWxkIG5vdCBiZSBuZWNlc3NhcnkuICAqL31cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvL1RoaXMgcnVucyBzbyBmYXN0IGl0IGxhZ3MgdGhlIG51bWJlciBiZWhpbmQuIFRoYXRzIHdoeSB3ZSBoYXZlIHRvIGNsaWNrIG9uIGl0IHRocmVlIHRpbWVzIGZvciBvcmFuZ2UgdG8gYXBwZWFyLlxyXG4gICAgICAgICAgICAgICAgLy9XZSBuZWVkIHRvIHNldCBhIHRpbWVyIHNvIGl0IGZpeGVzLlxyXG4gICAgICAgICAgICAgICAgc2V0TnVtYmVyKG51bWJlciArIDEpXHJcbiAgICAgICAgICAgICAgICAvL1RoaXMgSGFuZGxlQ2hhbmdlIG1ha2VzIGl0IGNhbGxiYWNrIHRvIHRoZSBmdW5jdGlvbiBhYm92ZSB0byBtYWtlIGl0IGNoZWNrIHRoZSBpZiBzdGF0ZW1lbnQuXHJcbiAgICAgICAgICAgICAgICBIYW5kbGVDaGFuZ2UoKVxyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgICAgIEFkZCBudW1iZXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvciB9fT5DaGFuZ2UgdGhlIHRleHQgY29sb3I8L2gxPlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbG9yIGlzIGluIHF1b3RlcyBiZWNhdXNlIHdlIG5lZWQgaXQgdG8gYmUgaW4gcXVvdGVzIHNpbmNlIHVzZVN0YXRlIGF0IHRoZSB0b3AgaXMgYWxzbyBpbiBxdW90ZXNcclxuICAgICAgICAgICAgICAgIG51bWJlciA+IDEgJiYgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGAke2NvbG9yfWAsIGxpbmVIZWlnaHQ6IDEwLCBwYWRkaW5nOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICBCb3hcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHtudW1iZXJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJleGFtcGxlRml2ZSIsIm51bWJlciIsInNldE51bWJlciIsImNvbG9yIiwic2V0Q29sb3IiLCJIYW5kbGVDaGFuZ2UiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/usestates/exampleFive.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/usestates/exampleFive.js"));
module.exports = __webpack_exports__;

})();