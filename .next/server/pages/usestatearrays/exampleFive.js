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
exports.id = "pages/usestatearrays/exampleFive";
exports.ids = ["pages/usestatearrays/exampleFive"];
exports.modules = {

/***/ "./pages/usestatearrays/exampleFive.js":
/*!*********************************************!*\
  !*** ./pages/usestatearrays/exampleFive.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ExampleFive)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n//In this example we're going to be using values that we set up which are function but also use states\n//with some error handling and arays and also we're going to deal with boolean values and how we can manage\n//all these input values to display the value on screen or not depending on if an error pops up or not\n\n\nfunction createInitialShoppingList() {\n    const initialTodos = [];\n    for(var idValue = 0; idValue < 5; idValue++){\n        initialTodos.push({\n            id: idValue,\n            text: \"item \" + (idValue + 1)\n        });\n    }\n    console.log(initialTodos);\n    return initialTodos;\n}\nfunction ExampleFive() {\n    const [shopping, setShopping] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(createInitialShoppingList);\n    const [text, setText] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [textError, setTextError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    function showError() {\n        if (text.length === 0) {\n            setTextError(true);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: textError ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: \"Please enter a text value\"\n                }, void 0, false) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestatearrays\\\\exampleFive.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                value: text,\n                onChange: (e)=>setText(e.target.value)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestatearrays\\\\exampleFive.js\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    if (text.length > 1) {\n                        setText(\"\");\n                        setShopping([\n                            {\n                                id: shopping.length,\n                                text: text\n                            },\n                            ...shopping\n                        ]);\n                        setTextError(false);\n                    } else {\n                        showError();\n                    }\n                    console.log(shopping);\n                },\n                children: \"Adding\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestatearrays\\\\exampleFive.js\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                children: shopping.map((item)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: item.text\n                    }, item.id, false, {\n                        fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestatearrays\\\\exampleFive.js\",\n                        lineNumber: 60,\n                        columnNumber: 21\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestatearrays\\\\exampleFive.js\",\n                lineNumber: 58,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VzdGF0ZWFycmF5cy9leGFtcGxlRml2ZS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBLHNHQUFzRztBQUN0RywyR0FBMkc7QUFDM0csc0dBQXNHOztBQUNyRTtBQUVqQyxTQUFTQyw0QkFBNEI7SUFDakMsTUFBTUMsZUFBZSxFQUFFO0lBRXZCLElBQUksSUFBSUMsVUFBVSxHQUFHQSxVQUFVLEdBQUdBLFVBQVc7UUFDekNELGFBQWFFLElBQUksQ0FDYjtZQUNJQyxJQUFJRjtZQUNKRyxNQUFNLFVBQVdILENBQUFBLFVBQVU7UUFDL0I7SUFFUjtJQUVBSSxRQUFRQyxHQUFHLENBQUNOO0lBRVosT0FBT0E7QUFDWDtBQUdlLFNBQVNPLGNBQWM7SUFDbEMsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdYLCtDQUFRQSxDQUFDQztJQUN6QyxNQUFNLENBQUNLLE1BQU1NLFFBQVEsR0FBR1osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxDQUFDYSxXQUFXQyxhQUFhLEdBQUdkLCtDQUFRQSxDQUFDLEtBQUs7SUFFaEQsU0FBU2UsWUFBWTtRQUNqQixJQUFHVCxLQUFLVSxNQUFNLEtBQUssR0FBRztZQUNsQkYsYUFBYSxJQUFJO1FBQ3JCLENBQUM7SUFDTDtJQUVBLHFCQUNJOzswQkFDSSw4REFBQ0c7MEJBQUdKLDBCQUFZOzhCQUFFO2tEQUErQiw2SUFBSzs7Ozs7OzBCQUN0RCw4REFBQ0s7Z0JBQ0dDLE9BQU9iO2dCQUNQYyxVQUFVQyxDQUFBQSxJQUFLVCxRQUFRUyxFQUFFQyxNQUFNLENBQUNILEtBQUs7Ozs7OzswQkFFekMsOERBQUNJO2dCQUNHQyxTQUFTLElBQU07b0JBQ1gsSUFBR2xCLEtBQUtVLE1BQU0sR0FBRyxHQUFHO3dCQUNoQkosUUFBUTt3QkFDUkQsWUFBWTs0QkFBQztnQ0FDVE4sSUFBSUssU0FBU00sTUFBTTtnQ0FDbkJWLE1BQU1BOzRCQUNWOytCQUFNSTt5QkFBUzt3QkFDZkksYUFBYSxLQUFLO29CQUN0QixPQUFPO3dCQUNIQztvQkFDSixDQUFDO29CQUNEUixRQUFRQyxHQUFHLENBQUNFO2dCQUNoQjswQkFDSDs7Ozs7OzBCQUVELDhEQUFDZTswQkFDSWYsU0FBU2dCLEdBQUcsQ0FBQ0MsQ0FBQUEscUJBQ1YsOERBQUNDO2tDQUNJRCxLQUFLckIsSUFBSTt1QkFETHFCLEtBQUt0QixFQUFFOzs7Ozs7Ozs7Ozs7QUFPcEMsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1zdGF0ZS1wcmFjdGljZTAxLy4vcGFnZXMvdXNlc3RhdGVhcnJheXMvZXhhbXBsZUZpdmUuanM/OTM0ZSJdLCJzb3VyY2VzQ29udGVudCI6WyIvL0luIHRoaXMgZXhhbXBsZSB3ZSdyZSBnb2luZyB0byBiZSB1c2luZyB2YWx1ZXMgdGhhdCB3ZSBzZXQgdXAgd2hpY2ggYXJlIGZ1bmN0aW9uIGJ1dCBhbHNvIHVzZSBzdGF0ZXNcclxuLy93aXRoIHNvbWUgZXJyb3IgaGFuZGxpbmcgYW5kIGFyYXlzIGFuZCBhbHNvIHdlJ3JlIGdvaW5nIHRvIGRlYWwgd2l0aCBib29sZWFuIHZhbHVlcyBhbmQgaG93IHdlIGNhbiBtYW5hZ2VcclxuLy9hbGwgdGhlc2UgaW5wdXQgdmFsdWVzIHRvIGRpc3BsYXkgdGhlIHZhbHVlIG9uIHNjcmVlbiBvciBub3QgZGVwZW5kaW5nIG9uIGlmIGFuIGVycm9yIHBvcHMgdXAgb3Igbm90XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlSW5pdGlhbFNob3BwaW5nTGlzdCgpIHtcclxuICAgIGNvbnN0IGluaXRpYWxUb2RvcyA9IFtdO1xyXG5cclxuICAgIGZvcih2YXIgaWRWYWx1ZSA9IDA7IGlkVmFsdWUgPCA1OyBpZFZhbHVlKyspIHtcclxuICAgICAgICBpbml0aWFsVG9kb3MucHVzaChcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWQ6IGlkVmFsdWUsXHJcbiAgICAgICAgICAgICAgICB0ZXh0OiAnaXRlbSAnICsgKGlkVmFsdWUgKyAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnNvbGUubG9nKGluaXRpYWxUb2Rvcyk7XHJcblxyXG4gICAgcmV0dXJuIGluaXRpYWxUb2Rvc1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRXhhbXBsZUZpdmUoKSB7XHJcbiAgICBjb25zdCBbc2hvcHBpbmcsIHNldFNob3BwaW5nXSA9IHVzZVN0YXRlKGNyZWF0ZUluaXRpYWxTaG9wcGluZ0xpc3QpO1xyXG4gICAgY29uc3QgW3RleHQsIHNldFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW3RleHRFcnJvciwgc2V0VGV4dEVycm9yXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBmdW5jdGlvbiBzaG93RXJyb3IoKSB7XHJcbiAgICAgICAgaWYodGV4dC5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgc2V0VGV4dEVycm9yKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxwPnt0ZXh0RXJyb3IgPyA8PlBsZWFzZSBlbnRlciBhIHRleHQgdmFsdWU8Lz4gOiA8PjwvPn08L3A+XHJcbiAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3RleHR9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRUZXh0KGUudGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRleHQubGVuZ3RoID4gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRUZXh0KCcnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0U2hvcHBpbmcoW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBzaG9wcGluZy5sZW5ndGgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiB0ZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIC4uLnNob3BwaW5nXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0VGV4dEVycm9yKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNob3dFcnJvcigpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhzaG9wcGluZylcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5BZGRpbmc8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgIHtzaG9wcGluZy5tYXAoaXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgIDwvPlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiY3JlYXRlSW5pdGlhbFNob3BwaW5nTGlzdCIsImluaXRpYWxUb2RvcyIsImlkVmFsdWUiLCJwdXNoIiwiaWQiLCJ0ZXh0IiwiY29uc29sZSIsImxvZyIsIkV4YW1wbGVGaXZlIiwic2hvcHBpbmciLCJzZXRTaG9wcGluZyIsInNldFRleHQiLCJ0ZXh0RXJyb3IiLCJzZXRUZXh0RXJyb3IiLCJzaG93RXJyb3IiLCJsZW5ndGgiLCJwIiwiaW5wdXQiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1bCIsIm1hcCIsIml0ZW0iLCJsaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/usestatearrays/exampleFive.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/usestatearrays/exampleFive.js"));
module.exports = __webpack_exports__;

})();