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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ exampleFive; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// In this example we will change the colour depending on number.\nfunction exampleFive() {\n    _s();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"gray\");\n    //Handle is like another function. Only when you actually click on the button \n    //then we're gonna set a color change on the text and background color\n    const HandleChange = ()=>{\n        if (number == 1) {\n            setColor(\"orange\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    setNumber(number + 1);\n                    HandleChange();\n                },\n                children: \"Add number\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color\n                },\n                children: \"Change the text color\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            // color is in quotes because we need it to be in quotes since useState at the top is also in quotes\n            number > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"\".concat(color),\n                    lineHeight: 10,\n                    padding: 20\n                },\n                children: \"Box\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 29,\n                columnNumber: 31\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n        lineNumber: 15,\n        columnNumber: 9\n    }, this);\n}\n_s(exampleFive, \"j5kqm08qIprFsCj/qy6G/D6PTz8=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VzdGF0ZXMvZXhhbXBsZUZpdmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUVoQyxpRUFBaUU7QUFDbEQsU0FBU0MsY0FBYzs7SUFDbEMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyw4RUFBOEU7SUFDOUUsc0VBQXNFO0lBQ3RFLE1BQU1NLGVBQWUsSUFBSztRQUN0QixJQUFJSixVQUFVLEdBQUU7WUFDWkcsU0FBUztRQUNiLENBQUM7SUFDTDtJQUNBLHFCQUNJLDhEQUFDRTs7MEJBSUcsOERBQUNDO2dCQUFPQyxTQUFTLElBQU07b0JBQ25CTixVQUFVRCxTQUFTO29CQUNuQkk7Z0JBQ0o7MEJBQUc7Ozs7OzswQkFHSCw4REFBQ0k7Z0JBQUdDLE9BQU87b0JBQUVQO2dCQUFNOzBCQUFHOzs7Ozs7WUFHbEIsb0dBQW9HO1lBQ3BHRixTQUFTLG1CQUFLLDhEQUFDSztnQkFBSUksT0FBTztvQkFBRUMsaUJBQWlCLEdBQVMsT0FBTlI7b0JBQVNTLFlBQVk7b0JBQUlDLFNBQVM7Z0JBQUc7MEJBQUc7Ozs7Ozs7Ozs7OztBQU14RyxDQUFDO0dBL0J1QmIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlc3RhdGVzL2V4YW1wbGVGaXZlLmpzP2M5NTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbi8vIEluIHRoaXMgZXhhbXBsZSB3ZSB3aWxsIGNoYW5nZSB0aGUgY29sb3VyIGRlcGVuZGluZyBvbiBudW1iZXIuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4YW1wbGVGaXZlKCkge1xyXG4gICAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShcImdyYXlcIilcclxuICAgIC8vSGFuZGxlIGlzIGxpa2UgYW5vdGhlciBmdW5jdGlvbi4gT25seSB3aGVuIHlvdSBhY3R1YWxseSBjbGljayBvbiB0aGUgYnV0dG9uIFxyXG4gICAgLy90aGVuIHdlJ3JlIGdvbm5hIHNldCBhIGNvbG9yIGNoYW5nZSBvbiB0aGUgdGV4dCBhbmQgYmFja2dyb3VuZCBjb2xvclxyXG4gICAgY29uc3QgSGFuZGxlQ2hhbmdlID0gKCkgPT57XHJcbiAgICAgICAgaWYgKG51bWJlciA9PSAxKXtcclxuICAgICAgICAgICAgc2V0Q29sb3IoXCJvcmFuZ2VcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiBBZGRpbmcgYW4gZXh0cmEgY3VybHkgYnJhY2UgYnJhY2tldHMgYWZ0ZXIgdGhlIGFycm93IGJlY2F1c2UgdGhpcyBvbkNsaWNrIGlzXHJcbiAgICAgICAgICAgIGdvaW5nIHRvIGhhdmUgZXh0cmEgZnVuY3Rpb25hbGl0aWVzLiBJZiB0aGVyZSB3YXMgb25seSBvbmUsIHRoZW4gdGhlIGN1cmx5IGJyYWNrZXRzXHJcbiAgICAgICAgICAgIHdvdWxkIG5vdCBiZSBuZWNlc3NhcnkuICAqL31cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXROdW1iZXIobnVtYmVyICsgMSlcclxuICAgICAgICAgICAgICAgIEhhbmRsZUNoYW5nZSgpXHJcbiAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICBBZGQgbnVtYmVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3IgfX0+Q2hhbmdlIHRoZSB0ZXh0IGNvbG9yPC9oMT5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yIGlzIGluIHF1b3RlcyBiZWNhdXNlIHdlIG5lZWQgaXQgdG8gYmUgaW4gcXVvdGVzIHNpbmNlIHVzZVN0YXRlIGF0IHRoZSB0b3AgaXMgYWxzbyBpbiBxdW90ZXNcclxuICAgICAgICAgICAgICAgIG51bWJlciA+IDEgJiYgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGAke2NvbG9yfWAsIGxpbmVIZWlnaHQ6IDEwLCBwYWRkaW5nOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICBCb3hcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJleGFtcGxlRml2ZSIsIm51bWJlciIsInNldE51bWJlciIsImNvbG9yIiwic2V0Q29sb3IiLCJIYW5kbGVDaGFuZ2UiLCJkaXYiLCJidXR0b24iLCJvbkNsaWNrIiwiaDEiLCJzdHlsZSIsImJhY2tncm91bmRDb2xvciIsImxpbmVIZWlnaHQiLCJwYWRkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/usestates/exampleFive.js\n"));

/***/ })

});