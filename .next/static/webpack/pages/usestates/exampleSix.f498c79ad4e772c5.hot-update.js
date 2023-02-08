"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/usestates/exampleSix",{

/***/ "./pages/usestates/exampleSix.js":
/*!***************************************!*\
  !*** ./pages/usestates/exampleSix.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ exampleSix; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\n//In this example we will take exampleFive and add a couple logic handling to fix the previous issue with the number.\nfunction exampleSix() {\n    _s();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"gray\");\n    const [trigger, setTrigger] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    //Handle is like another function. Only when you actually click on the button \n    //then we're gonna set a color change on the text and background color.\n    //Also remember this is another way to write a function\n    const HandleChange = ()=>{\n        if (number == 2) {\n            setColor(\"orange\");\n        }\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let interval;\n        //This is saying if trigger is true, proceed\n        if (trigger) {\n            interval = setInterval(()=>{\n                HandleChange();\n                setTrigger(false);\n            }, 3000); //This means in 3 seconds, do something\n        }\n        return ()=>clear;\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    //This runs so fast it lags the number behind. Thats why we have to click on it three times for orange to appear.\n                    //We need to set a timer so it fixes.\n                    setNumber(number + 1);\n                    //We are replacing handleChange with setTrigger and giving it a true parameter so it goes up to the if statement above and runs trigger.\n                    setTrigger(true);\n                },\n                children: \"Add number\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleSix.js\",\n                lineNumber: 35,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                style: {\n                    color\n                },\n                children: \"Change the text color\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleSix.js\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            //color is in quotes because we need it to be in quotes since useState at the top is also in quotes\n            number > 1 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundColor: \"\".concat(color),\n                    lineHeight: 10,\n                    padding: 20\n                },\n                children: \"Box\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleSix.js\",\n                lineNumber: 47,\n                columnNumber: 31\n            }, this),\n            number\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleSix.js\",\n        lineNumber: 31,\n        columnNumber: 9\n    }, this);\n}\n_s(exampleSix, \"9yWwG+WVyd5hMur+W911t5BKq+k=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VzdGF0ZXMvZXhhbXBsZVNpeC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQTJDO0FBRTNDLHFIQUFxSDtBQUN0RyxTQUFTRSxhQUFhOztJQUNqQyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0osK0NBQVFBLENBQUM7SUFDckMsTUFBTSxDQUFDSyxPQUFPQyxTQUFTLEdBQUdOLCtDQUFRQSxDQUFDO0lBQ25DLE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQzVDLDhFQUE4RTtJQUM5RSx1RUFBdUU7SUFDdkUsdURBQXVEO0lBQ3ZELE1BQU1TLGVBQWUsSUFBTTtRQUN2QixJQUFJTixVQUFVLEdBQUc7WUFDYkcsU0FBUztRQUNiLENBQUM7SUFDTDtJQUVBTCxnREFBU0EsQ0FBQyxJQUFJO1FBQ1YsSUFBSVM7UUFFSiw0Q0FBNEM7UUFDNUMsSUFBR0gsU0FBUTtZQUNQRyxXQUFXQyxZQUFZLElBQUk7Z0JBQ3ZCRjtnQkFDQUQsV0FBVyxLQUFLO1lBQ3BCLEdBQUcsT0FBTyx1Q0FBdUM7UUFDckQsQ0FBQztRQUNELE9BQU0sSUFBS0k7SUFDZjtJQUVBLHFCQUNJLDhEQUFDQzs7MEJBSUcsOERBQUNDO2dCQUFPQyxTQUFTLElBQU07b0JBQ25CLGlIQUFpSDtvQkFDakgscUNBQXFDO29CQUNyQ1gsVUFBVUQsU0FBUztvQkFDbkIsd0lBQXdJO29CQUN4SUssV0FBVyxJQUFJO2dCQUNuQjswQkFBRzs7Ozs7OzBCQUdILDhEQUFDUTtnQkFBR0MsT0FBTztvQkFBRVo7Z0JBQU07MEJBQUc7Ozs7OztZQUVsQixtR0FBbUc7WUFDbkdGLFNBQVMsbUJBQUssOERBQUNVO2dCQUFJSSxPQUFPO29CQUFFQyxpQkFBaUIsR0FBUyxPQUFOYjtvQkFBU2MsWUFBWTtvQkFBSUMsU0FBUztnQkFBRzswQkFBRzs7Ozs7O1lBSTNGakI7Ozs7Ozs7QUFHYixDQUFDO0dBbER1QkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvdXNlc3RhdGVzL2V4YW1wbGVTaXguanM/MTk5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcblxyXG4vL0luIHRoaXMgZXhhbXBsZSB3ZSB3aWxsIHRha2UgZXhhbXBsZUZpdmUgYW5kIGFkZCBhIGNvdXBsZSBsb2dpYyBoYW5kbGluZyB0byBmaXggdGhlIHByZXZpb3VzIGlzc3VlIHdpdGggdGhlIG51bWJlci5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXhhbXBsZVNpeCgpIHtcclxuICAgIGNvbnN0IFtudW1iZXIsIHNldE51bWJlcl0gPSB1c2VTdGF0ZSgwKTtcclxuICAgIGNvbnN0IFtjb2xvciwgc2V0Q29sb3JdID0gdXNlU3RhdGUoXCJncmF5XCIpXHJcbiAgICBjb25zdCBbdHJpZ2dlciwgc2V0VHJpZ2dlcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIC8vSGFuZGxlIGlzIGxpa2UgYW5vdGhlciBmdW5jdGlvbi4gT25seSB3aGVuIHlvdSBhY3R1YWxseSBjbGljayBvbiB0aGUgYnV0dG9uIFxyXG4gICAgLy90aGVuIHdlJ3JlIGdvbm5hIHNldCBhIGNvbG9yIGNoYW5nZSBvbiB0aGUgdGV4dCBhbmQgYmFja2dyb3VuZCBjb2xvci5cclxuICAgIC8vQWxzbyByZW1lbWJlciB0aGlzIGlzIGFub3RoZXIgd2F5IHRvIHdyaXRlIGEgZnVuY3Rpb25cclxuICAgIGNvbnN0IEhhbmRsZUNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICBpZiAobnVtYmVyID09IDIpIHtcclxuICAgICAgICAgICAgc2V0Q29sb3IoXCJvcmFuZ2VcIilcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIGxldCBpbnRlcnZhbDtcclxuICAgICAgICBcclxuICAgICAgICAvL1RoaXMgaXMgc2F5aW5nIGlmIHRyaWdnZXIgaXMgdHJ1ZSwgcHJvY2VlZFxyXG4gICAgICAgIGlmKHRyaWdnZXIpe1xyXG4gICAgICAgICAgICBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpPT57XHJcbiAgICAgICAgICAgICAgICBIYW5kbGVDaGFuZ2UoKVxyXG4gICAgICAgICAgICAgICAgc2V0VHJpZ2dlcihmYWxzZSlcclxuICAgICAgICAgICAgfSwgMzAwMCk7IC8vVGhpcyBtZWFucyBpbiAzIHNlY29uZHMsIGRvIHNvbWV0aGluZ1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4oKT0+IGNsZWFyXHJcbiAgICB9KVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgey8qIEFkZGluZyBhbiBleHRyYSBjdXJseSBicmFjZSBicmFja2V0cyBhZnRlciB0aGUgYXJyb3cgYmVjYXVzZSB0aGlzIG9uQ2xpY2sgaXNcclxuICAgICAgICAgICAgZ29pbmcgdG8gaGF2ZSBleHRyYSBmdW5jdGlvbmFsaXRpZXMuIElmIHRoZXJlIHdhcyBvbmx5IG9uZSwgdGhlbiB0aGUgY3VybHkgYnJhY2tldHNcclxuICAgICAgICAgICAgd291bGQgbm90IGJlIG5lY2Vzc2FyeS4gICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vVGhpcyBydW5zIHNvIGZhc3QgaXQgbGFncyB0aGUgbnVtYmVyIGJlaGluZC4gVGhhdHMgd2h5IHdlIGhhdmUgdG8gY2xpY2sgb24gaXQgdGhyZWUgdGltZXMgZm9yIG9yYW5nZSB0byBhcHBlYXIuXHJcbiAgICAgICAgICAgICAgICAvL1dlIG5lZWQgdG8gc2V0IGEgdGltZXIgc28gaXQgZml4ZXMuXHJcbiAgICAgICAgICAgICAgICBzZXROdW1iZXIobnVtYmVyICsgMSlcclxuICAgICAgICAgICAgICAgIC8vV2UgYXJlIHJlcGxhY2luZyBoYW5kbGVDaGFuZ2Ugd2l0aCBzZXRUcmlnZ2VyIGFuZCBnaXZpbmcgaXQgYSB0cnVlIHBhcmFtZXRlciBzbyBpdCBnb2VzIHVwIHRvIHRoZSBpZiBzdGF0ZW1lbnQgYWJvdmUgYW5kIHJ1bnMgdHJpZ2dlci5cclxuICAgICAgICAgICAgICAgIHNldFRyaWdnZXIodHJ1ZSlcclxuICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICBBZGQgbnVtYmVyXHJcbiAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8aDEgc3R5bGU9e3sgY29sb3IgfX0+Q2hhbmdlIHRoZSB0ZXh0IGNvbG9yPC9oMT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9jb2xvciBpcyBpbiBxdW90ZXMgYmVjYXVzZSB3ZSBuZWVkIGl0IHRvIGJlIGluIHF1b3RlcyBzaW5jZSB1c2VTdGF0ZSBhdCB0aGUgdG9wIGlzIGFsc28gaW4gcXVvdGVzXHJcbiAgICAgICAgICAgICAgICBudW1iZXIgPiAxICYmIDxkaXYgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiBgJHtjb2xvcn1gLCBsaW5lSGVpZ2h0OiAxMCwgcGFkZGluZzogMjAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgQm94XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB7bnVtYmVyfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiZXhhbXBsZVNpeCIsIm51bWJlciIsInNldE51bWJlciIsImNvbG9yIiwic2V0Q29sb3IiLCJ0cmlnZ2VyIiwic2V0VHJpZ2dlciIsIkhhbmRsZUNoYW5nZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhciIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siLCJoMSIsInN0eWxlIiwiYmFja2dyb3VuZENvbG9yIiwibGluZUhlaWdodCIsInBhZGRpbmciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/usestates/exampleSix.js\n"));

/***/ })

});