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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ exampleFive; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// In this example we will use multiple functionalities with onClick\nfunction exampleFive() {\n    _s();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"gray\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    setNumber(number + 1);\n                    HandleChange();\n                },\n                children: \"Add number\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 13,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color\n                },\n                children: \"Change the text color\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            number > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    color\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 22,\n                columnNumber: 31\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n        lineNumber: 9,\n        columnNumber: 9\n    }, this);\n}\n_s(exampleFive, \"j5kqm08qIprFsCj/qy6G/D6PTz8=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VzdGF0ZXMvZXhhbXBsZUZpdmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUVoQyxvRUFBb0U7QUFDckQsU0FBU0MsY0FBYzs7SUFDbEMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUVuQyxxQkFDSSw4REFBQ007OzBCQUlHLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFNO29CQUNuQkwsVUFBVUQsU0FBUztvQkFDbkJPO2dCQUNKOzBCQUFHOzs7Ozs7MEJBR0gsOERBQUNDO2dCQUFHQyxPQUFPO29CQUFFUDtnQkFBTTswQkFBRzs7Ozs7O1lBR2xCRixTQUFTLG1CQUFLLDhEQUFDSTtnQkFBSUssT0FBTztvQkFBRVA7Z0JBQU07Ozs7Ozs7Ozs7OztBQU1sRCxDQUFDO0dBeEJ1QkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlc3RhdGVzL2V4YW1wbGVGaXZlLmpzP2M5NTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbi8vIEluIHRoaXMgZXhhbXBsZSB3ZSB3aWxsIHVzZSBtdWx0aXBsZSBmdW5jdGlvbmFsaXRpZXMgd2l0aCBvbkNsaWNrXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4YW1wbGVGaXZlKCkge1xyXG4gICAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShcImdyYXlcIilcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiBBZGRpbmcgYW4gZXh0cmEgY3VybHkgYnJhY2UgYnJhY2tldHMgYWZ0ZXIgdGhlIGFycm93IGJlY2F1c2UgdGhpcyBvbkNsaWNrIGlzXHJcbiAgICAgICAgICAgIGdvaW5nIHRvIGhhdmUgZXh0cmEgZnVuY3Rpb25hbGl0aWVzLiBJZiB0aGVyZSB3YXMgb25seSBvbmUsIHRoZW4gdGhlIGN1cmx5IGJyYWNrZXRzXHJcbiAgICAgICAgICAgIHdvdWxkIG5vdCBiZSBuZWNlc3NhcnkuICAqL31cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXROdW1iZXIobnVtYmVyICsgMSlcclxuICAgICAgICAgICAgICAgIEhhbmRsZUNoYW5nZSgpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICBBZGQgbnVtYmVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3IgfX0+Q2hhbmdlIHRoZSB0ZXh0IGNvbG9yPC9oMT5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG51bWJlciA+IDEgJiYgPGRpdiBzdHlsZT17eyBjb2xvciB9fT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZXhhbXBsZUZpdmUiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJjb2xvciIsInNldENvbG9yIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsIkhhbmRsZUNoYW5nZSIsImgxIiwic3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/usestates/exampleFive.js\n"));

/***/ })

});