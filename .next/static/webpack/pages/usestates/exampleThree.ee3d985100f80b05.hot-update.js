"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/usestates/exampleThree",{

/***/ "./pages/usestates/exampleThree.js":
/*!*****************************************!*\
  !*** ./pages/usestates/exampleThree.js ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ exampleThree; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nfunction exampleThree() {\n    _s();\n    //Default state for this color is grey\n    const [color, changeColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"gray\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>changeColor(\"red\"),\n                children: \"Change to red\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleThree.js\",\n                lineNumber: 10,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>changeColor(\"blue\"),\n                children: \"Change to blue\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleThree.js\",\n                lineNumber: 11,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color\n                },\n                children: \"Change the text color\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleThree.js\",\n                lineNumber: 15,\n                columnNumber: 13\n            }, this),\n            \"in css it would be background-color but with Inline Styling, you get rid of the dash and type it camel case.\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"\".concat(color),\n                    inlineHeight: 10,\n                    padding: 20\n                },\n                children: \"Box\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleThree.js\",\n                lineNumber: 18,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleThree.js\",\n        lineNumber: 8,\n        columnNumber: 9\n    }, this);\n}\n_s(exampleThree, \"dnzq6AtxyOWOTJsPq+1IFREhFAA=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VzdGF0ZXMvZXhhbXBsZVRocmVlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBaUM7QUFFbEIsU0FBU0MsZUFBYzs7SUFDbEMsc0NBQXNDO0lBQ3RDLE1BQU0sQ0FBQ0MsT0FBT0MsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBQztJQUV0QyxxQkFDSSw4REFBQ0k7OzBCQUVHLDhEQUFDQztnQkFBT0MsU0FBUyxJQUFLSCxZQUFZOzBCQUFROzs7Ozs7MEJBQzFDLDhEQUFDRTtnQkFBT0MsU0FBUyxJQUFLSCxZQUFZOzBCQUFTOzs7Ozs7MEJBSTNDLDhEQUFDSTtnQkFBR0MsT0FBTztvQkFBRU47Z0JBQU07MEJBQUc7Ozs7OztZQUEwQjswQkFHaEQsOERBQUNFO2dCQUFJSSxPQUFPO29CQUFDQyxpQkFBaUIsR0FBUyxPQUFOUDtvQkFBU1EsY0FBYztvQkFBSUMsU0FBUztnQkFBRTswQkFBRzs7Ozs7Ozs7Ozs7O0FBR3RGLENBQUM7R0FsQnVCViIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy91c2VzdGF0ZXMvZXhhbXBsZVRocmVlLmpzPzMzMDkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGFtcGxlVGhyZWUoKXtcclxuICAgIC8vRGVmYXVsdCBzdGF0ZSBmb3IgdGhpcyBjb2xvciBpcyBncmV5XHJcbiAgICBjb25zdCBbY29sb3IsIGNoYW5nZUNvbG9yXSA9IHVzZVN0YXRlKFwiZ3JheVwiKTtcclxuXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qICgpIG1lYW5zIGRvbnQgZXhlY3V0ZSB1bnRpbCB1c2VyIGNsaWNrcyAqL31cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGNoYW5nZUNvbG9yKFwicmVkXCIpfT5DaGFuZ2UgdG8gcmVkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBjaGFuZ2VDb2xvcihcImJsdWVcIil9PkNoYW5nZSB0byBibHVlPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICB7LyogVGhlIGRlZmF1bHQgY29sb3Igd2lsbCBiZSBncmF5LiBCdXQgYmVjYXVzZSBvZiBjaGFuZ2VDb2xvciwgd2hlbiB3ZSBwcmVzcyBvbiByZWQgb3IgYmx1ZSBidXR0b24sIHVzZVN0YXRlIHdpbGwgKi99XHJcbiAgICAgICAgICAgIHsvKiBjaGFuZ2UgY29sb3JzIGRlcGVuZGluZyBvbiB3aGF0IGJ1dHRvbiB3ZSBwcmVzc2VkICovfVxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3IgfX0+Q2hhbmdlIHRoZSB0ZXh0IGNvbG9yPC9oMT5cclxuICAgICAgICAgICAgaW4gY3NzIGl0IHdvdWxkIGJlIGJhY2tncm91bmQtY29sb3IgYnV0IHdpdGggSW5saW5lIFN0eWxpbmcsIHlvdSBnZXQgcmlkIG9mIHRoZSBkYXNoIGFuZFxyXG4gICAgICAgICAgICB0eXBlIGl0IGNhbWVsIGNhc2UuXHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9e3tiYWNrZ3JvdW5kQ29sb3I6IGAke2NvbG9yfWAsIGlubGluZUhlaWdodDogMTAsIHBhZGRpbmc6IDIwfX0+Qm94PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJleGFtcGxlVGhyZWUiLCJjb2xvciIsImNoYW5nZUNvbG9yIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImgxIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJpbmxpbmVIZWlnaHQiLCJwYWRkaW5nIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/usestates/exampleThree.js\n"));

/***/ })

});