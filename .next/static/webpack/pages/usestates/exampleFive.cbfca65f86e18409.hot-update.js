"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/usestates/exampleFive",{

/***/ "./pages/usestates/exampleFive.js":
/*!****************************************!*\
  !*** ./pages/usestates/exampleFive.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ exampleFive; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// In this example we will change the colour depending on number.\nfunction exampleFive() {\n    _s();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"gray\");\n    //Handle is like another function. Only when you actually click on the button \n    //then we're gonna set a color change on the text and background color\n    const HandleChange = ()=>{\n        if (number == 1) {\n            setColor(\"orange\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    setNumber(number + 1);\n                    //This \n                    HandleChange();\n                },\n                children: \"Add number\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color\n                },\n                children: \"Change the text color\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 26,\n                columnNumber: 13\n            }, this),\n            // color is in quotes because we need it to be in quotes since useState at the top is also in quotes\n            number > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"\".concat(color),\n                    lineHeight: 10,\n                    padding: 20\n                },\n                children: \"Box\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 30,\n                columnNumber: 31\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_s(exampleFive, \"j5kqm08qIprFsCj/qy6G/D6PTz8=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VzdGF0ZXMvZXhhbXBsZUZpdmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUVoQyxpRUFBaUU7QUFDbEQsU0FBU0MsY0FBYzs7SUFDbEMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyw4RUFBOEU7SUFDOUUsc0VBQXNFO0lBQ3RFLE1BQU1NLGVBQWUsSUFBSztRQUN0QixJQUFJSixVQUFVLEdBQUU7WUFDWkcsU0FBUztRQUNiLENBQUM7SUFDTDtJQUNBLHFCQUNJLDhEQUFDRTs7MEJBSUcsOERBQUNDO2dCQUFPQyxTQUFTLElBQU07b0JBQ25CTixVQUFVRCxTQUFTO29CQUNuQixPQUFPO29CQUNQSTtnQkFDSjswQkFBRzs7Ozs7OzBCQUdILDhEQUFDSTtnQkFBR0MsT0FBTztvQkFBRVA7Z0JBQU07MEJBQUc7Ozs7OztZQUdsQixvR0FBb0c7WUFDcEdGLFNBQVMsbUJBQUssOERBQUNLO2dCQUFJSSxPQUFPO29CQUFFQyxpQkFBaUIsR0FBUyxPQUFOUjtvQkFBU1MsWUFBWTtvQkFBSUMsU0FBUztnQkFBRzswQkFBRzs7Ozs7Ozs7Ozs7O0FBTXhHLENBQUM7R0FoQ3VCYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VzdGF0ZXMvZXhhbXBsZUZpdmUuanM/Yzk1OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5cclxuLy8gSW4gdGhpcyBleGFtcGxlIHdlIHdpbGwgY2hhbmdlIHRoZSBjb2xvdXIgZGVwZW5kaW5nIG9uIG51bWJlci5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhhbXBsZUZpdmUoKSB7XHJcbiAgICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoMCk7XHJcbiAgICBjb25zdCBbY29sb3IsIHNldENvbG9yXSA9IHVzZVN0YXRlKFwiZ3JheVwiKVxyXG4gICAgLy9IYW5kbGUgaXMgbGlrZSBhbm90aGVyIGZ1bmN0aW9uLiBPbmx5IHdoZW4geW91IGFjdHVhbGx5IGNsaWNrIG9uIHRoZSBidXR0b24gXHJcbiAgICAvL3RoZW4gd2UncmUgZ29ubmEgc2V0IGEgY29sb3IgY2hhbmdlIG9uIHRoZSB0ZXh0IGFuZCBiYWNrZ3JvdW5kIGNvbG9yXHJcbiAgICBjb25zdCBIYW5kbGVDaGFuZ2UgPSAoKSA9PntcclxuICAgICAgICBpZiAobnVtYmVyID09IDEpe1xyXG4gICAgICAgICAgICBzZXRDb2xvcihcIm9yYW5nZVwiKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIEFkZGluZyBhbiBleHRyYSBjdXJseSBicmFjZSBicmFja2V0cyBhZnRlciB0aGUgYXJyb3cgYmVjYXVzZSB0aGlzIG9uQ2xpY2sgaXNcclxuICAgICAgICAgICAgZ29pbmcgdG8gaGF2ZSBleHRyYSBmdW5jdGlvbmFsaXRpZXMuIElmIHRoZXJlIHdhcyBvbmx5IG9uZSwgdGhlbiB0aGUgY3VybHkgYnJhY2tldHNcclxuICAgICAgICAgICAgd291bGQgbm90IGJlIG5lY2Vzc2FyeS4gICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIHNldE51bWJlcihudW1iZXIgKyAxKVxyXG4gICAgICAgICAgICAgICAgLy9UaGlzIFxyXG4gICAgICAgICAgICAgICAgSGFuZGxlQ2hhbmdlKClcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgIEFkZCBudW1iZXJcclxuICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxoMSBzdHlsZT17eyBjb2xvciB9fT5DaGFuZ2UgdGhlIHRleHQgY29sb3I8L2gxPlxyXG5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gY29sb3IgaXMgaW4gcXVvdGVzIGJlY2F1c2Ugd2UgbmVlZCBpdCB0byBiZSBpbiBxdW90ZXMgc2luY2UgdXNlU3RhdGUgYXQgdGhlIHRvcCBpcyBhbHNvIGluIHF1b3Rlc1xyXG4gICAgICAgICAgICAgICAgbnVtYmVyID4gMSAmJiA8ZGl2IHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogYCR7Y29sb3J9YCwgbGluZUhlaWdodDogMTAsIHBhZGRpbmc6IDIwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIEJveFxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImV4YW1wbGVGaXZlIiwibnVtYmVyIiwic2V0TnVtYmVyIiwiY29sb3IiLCJzZXRDb2xvciIsIkhhbmRsZUNoYW5nZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGluZUhlaWdodCIsInBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/usestates/exampleFive.js\n"));

/***/ })

});