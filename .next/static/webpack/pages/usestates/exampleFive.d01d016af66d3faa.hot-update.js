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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ exampleFive; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n// In this example we will change the colour depending on number. If number is greater than 1, make div visible. if equal to 2, make orange\nfunction exampleFive() {\n    _s();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"gray\");\n    //Handle is like another function. Only when you actually click on the button \n    //then we're gonna set a color change on the text and background color.\n    //Also remember this is another way to write a function\n    const HandleChange = ()=>{\n        if (number == 2) {\n            setColor(\"orange\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            number,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    //This runs so fast it lags the number behind. Thats why we have to click on it three times for orange to appear.\n                    //We need to set a timer so it fixes.\n                    setNumber(number + 1);\n                    //This HandleChange makes it callback to the function above to make it check the if statement.\n                    HandleChange();\n                },\n                children: [\n                    number,\n                    \"Add number\"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color\n                },\n                children: \"Change the text color\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            // color is in quotes because we need it to be in quotes since useState at the top is also in quotes\n            number > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"\".concat(color),\n                    lineHeight: 10,\n                    padding: 20\n                },\n                children: \"Box\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n                lineNumber: 35,\n                columnNumber: 31\n            }, this),\n            number\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleFive.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_s(exampleFive, \"j5kqm08qIprFsCj/qy6G/D6PTz8=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VzdGF0ZXMvZXhhbXBsZUZpdmUuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUVoQywySUFBMkk7QUFDNUgsU0FBU0MsY0FBYzs7SUFDbEMsTUFBTSxDQUFDQyxRQUFRQyxVQUFVLEdBQUdILCtDQUFRQSxDQUFDO0lBQ3JDLE1BQU0sQ0FBQ0ksT0FBT0MsU0FBUyxHQUFHTCwrQ0FBUUEsQ0FBQztJQUNuQyw4RUFBOEU7SUFDOUUsdUVBQXVFO0lBQ3ZFLHVEQUF1RDtJQUN2RCxNQUFNTSxlQUFlLElBQUs7UUFDdEIsSUFBSUosVUFBVSxHQUFFO1lBQ1pHLFNBQVM7UUFDYixDQUFDO0lBQ0w7SUFDQSxxQkFDSSw4REFBQ0U7O1lBSUlMOzBCQUNELDhEQUFDTTtnQkFBT0MsU0FBUyxJQUFNO29CQUNuQixpSEFBaUg7b0JBQ2pILHFDQUFxQztvQkFDckNOLFVBQVVELFNBQVM7b0JBQ25CLDhGQUE4RjtvQkFDOUZJO2dCQUNKOztvQkFDS0o7b0JBQU87Ozs7Ozs7MEJBR1osOERBQUNRO2dCQUFHQyxPQUFPO29CQUFFUDtnQkFBTTswQkFBRzs7Ozs7O1lBR2xCLG9HQUFvRztZQUNwR0YsU0FBUyxtQkFBSyw4REFBQ0s7Z0JBQUlJLE9BQU87b0JBQUVDLGlCQUFpQixHQUFTLE9BQU5SO29CQUFTUyxZQUFZO29CQUFJQyxTQUFTO2dCQUFHOzBCQUFHOzs7Ozs7WUFJMUZaOzs7Ozs7O0FBR2QsQ0FBQztHQXRDdUJEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL3VzZXN0YXRlcy9leGFtcGxlRml2ZS5qcz9jOTU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG4vLyBJbiB0aGlzIGV4YW1wbGUgd2Ugd2lsbCBjaGFuZ2UgdGhlIGNvbG91ciBkZXBlbmRpbmcgb24gbnVtYmVyLiBJZiBudW1iZXIgaXMgZ3JlYXRlciB0aGFuIDEsIG1ha2UgZGl2IHZpc2libGUuIGlmIGVxdWFsIHRvIDIsIG1ha2Ugb3JhbmdlXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGV4YW1wbGVGaXZlKCkge1xyXG4gICAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKDApO1xyXG4gICAgY29uc3QgW2NvbG9yLCBzZXRDb2xvcl0gPSB1c2VTdGF0ZShcImdyYXlcIilcclxuICAgIC8vSGFuZGxlIGlzIGxpa2UgYW5vdGhlciBmdW5jdGlvbi4gT25seSB3aGVuIHlvdSBhY3R1YWxseSBjbGljayBvbiB0aGUgYnV0dG9uIFxyXG4gICAgLy90aGVuIHdlJ3JlIGdvbm5hIHNldCBhIGNvbG9yIGNoYW5nZSBvbiB0aGUgdGV4dCBhbmQgYmFja2dyb3VuZCBjb2xvci5cclxuICAgIC8vQWxzbyByZW1lbWJlciB0aGlzIGlzIGFub3RoZXIgd2F5IHRvIHdyaXRlIGEgZnVuY3Rpb25cclxuICAgIGNvbnN0IEhhbmRsZUNoYW5nZSA9ICgpID0+e1xyXG4gICAgICAgIGlmIChudW1iZXIgPT0gMil7XHJcbiAgICAgICAgICAgIHNldENvbG9yKFwib3JhbmdlXCIpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7LyogQWRkaW5nIGFuIGV4dHJhIGN1cmx5IGJyYWNlIGJyYWNrZXRzIGFmdGVyIHRoZSBhcnJvdyBiZWNhdXNlIHRoaXMgb25DbGljayBpc1xyXG4gICAgICAgICAgICBnb2luZyB0byBoYXZlIGV4dHJhIGZ1bmN0aW9uYWxpdGllcy4gSWYgdGhlcmUgd2FzIG9ubHkgb25lLCB0aGVuIHRoZSBjdXJseSBicmFja2V0c1xyXG4gICAgICAgICAgICB3b3VsZCBub3QgYmUgbmVjZXNzYXJ5LiAgKi99XHJcbiAgICAgICAgICAgIHtudW1iZXJ9XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9UaGlzIHJ1bnMgc28gZmFzdCBpdCBsYWdzIHRoZSBudW1iZXIgYmVoaW5kLiBUaGF0cyB3aHkgd2UgaGF2ZSB0byBjbGljayBvbiBpdCB0aHJlZSB0aW1lcyBmb3Igb3JhbmdlIHRvIGFwcGVhci5cclxuICAgICAgICAgICAgICAgIC8vV2UgbmVlZCB0byBzZXQgYSB0aW1lciBzbyBpdCBmaXhlcy5cclxuICAgICAgICAgICAgICAgIHNldE51bWJlcihudW1iZXIgKyAxKVxyXG4gICAgICAgICAgICAgICAgLy9UaGlzIEhhbmRsZUNoYW5nZSBtYWtlcyBpdCBjYWxsYmFjayB0byB0aGUgZnVuY3Rpb24gYWJvdmUgdG8gbWFrZSBpdCBjaGVjayB0aGUgaWYgc3RhdGVtZW50LlxyXG4gICAgICAgICAgICAgICAgSGFuZGxlQ2hhbmdlKClcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICB7bnVtYmVyfVxyXG4gICAgICAgICAgICBBZGQgbnVtYmVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3IgfX0+Q2hhbmdlIHRoZSB0ZXh0IGNvbG9yPC9oMT5cclxuXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIGNvbG9yIGlzIGluIHF1b3RlcyBiZWNhdXNlIHdlIG5lZWQgaXQgdG8gYmUgaW4gcXVvdGVzIHNpbmNlIHVzZVN0YXRlIGF0IHRoZSB0b3AgaXMgYWxzbyBpbiBxdW90ZXNcclxuICAgICAgICAgICAgICAgIG51bWJlciA+IDEgJiYgPGRpdiBzdHlsZT17eyBiYWNrZ3JvdW5kQ29sb3I6IGAke2NvbG9yfWAsIGxpbmVIZWlnaHQ6IDEwLCBwYWRkaW5nOiAyMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICBCb3hcclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH17bnVtYmVyfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwiZXhhbXBsZUZpdmUiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJjb2xvciIsInNldENvbG9yIiwiSGFuZGxlQ2hhbmdlIiwiZGl2IiwiYnV0dG9uIiwib25DbGljayIsImgxIiwic3R5bGUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJsaW5lSGVpZ2h0IiwicGFkZGluZyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/usestates/exampleFive.js\n"));

/***/ })

});