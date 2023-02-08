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
exports.id = "pages/usestates/exampleTwoExtensionTwo";
exports.ids = ["pages/usestates/exampleTwoExtensionTwo"];
exports.modules = {

/***/ "./pages/usestates/exampleTwoExtensionTwo.js":
/*!***************************************************!*\
  !*** ./pages/usestates/exampleTwoExtensionTwo.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ exampleTwoextensionOne)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\n//In this example we will make buttons that increment more than once.\nfunction exampleTwoextensionOne() {\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    //If this is true, then number will increment by 1. if it is false, it will decrement.\n    //It doesn't have enough time to render all the increments or decrements at once so\n    //we need to modify this function (add number => number+1) to check for what its current number state is at \n    //so it can process the multiple increments/decrements at once.\n    function handleClick(change) {\n        if (change) {\n            setNumber((number)=>number + 1);\n        } else {\n            setNumber((number)=>number - 1);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleClick(true),\n                children: \"Increment\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleTwoExtensionTwo.js\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    handleClick(true);\n                    handleClick(true);\n                    handleClick(true);\n                },\n                children: \"Increment by 3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleTwoExtensionTwo.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>handleClick(false),\n                children: \"Decrement\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleTwoExtensionTwo.js\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: ()=>{\n                    handleClick(false);\n                    handleClick(false);\n                    handleClick(false);\n                },\n                children: \"Decrement by 3\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleTwoExtensionTwo.js\",\n                lineNumber: 33,\n                columnNumber: 13\n            }, this),\n            number\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\neema\\\\Desktop\\\\useStatePractice_nextjs\\\\pages\\\\usestates\\\\exampleTwoExtensionTwo.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy91c2VzdGF0ZXMvZXhhbXBsZVR3b0V4dGVuc2lvblR3by5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFFakMscUVBQXFFO0FBQ3RELFNBQVNDLHlCQUF3QjtJQUM1QyxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBRUgsK0NBQVFBLENBQUM7SUFFcEMsc0ZBQXNGO0lBQ3RGLG1GQUFtRjtJQUNuRiw0R0FBNEc7SUFDNUcsK0RBQStEO0lBQy9ELFNBQVNJLFlBQVlDLE1BQU0sRUFBQztRQUN4QixJQUFHQSxRQUFPO1lBQ05GLFVBQVVELENBQUFBLFNBQVVBLFNBQU87UUFDL0IsT0FBSztZQUNEQyxVQUFVRCxDQUFBQSxTQUFVQSxTQUFPO1FBQy9CLENBQUM7SUFDTDtJQUVBLHFCQUNJLDhEQUFDSTs7MEJBS0csOERBQUNDO2dCQUFPQyxTQUFTLElBQUtKLFlBQVksSUFBSTswQkFBRzs7Ozs7OzBCQUV6Qyw4REFBQ0c7Z0JBQU9DLFNBQVMsSUFBSTtvQkFDakJKLFlBQVksSUFBSTtvQkFDaEJBLFlBQVksSUFBSTtvQkFDaEJBLFlBQVksSUFBSTtnQkFDcEI7MEJBQUc7Ozs7OzswQkFDSCw4REFBQ0c7Z0JBQU9DLFNBQVMsSUFBS0osWUFBWSxLQUFLOzBCQUFHOzs7Ozs7MEJBQzFDLDhEQUFDRztnQkFBT0MsU0FBUyxJQUFJO29CQUNqQkosWUFBWSxLQUFLO29CQUNqQkEsWUFBWSxLQUFLO29CQUNqQkEsWUFBWSxLQUFLO2dCQUNyQjswQkFBRzs7Ozs7O1lBQ05GOzs7Ozs7O0FBSVQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3VzZS1zdGF0ZS1wcmFjdGljZTAxLy4vcGFnZXMvdXNlc3RhdGVzL2V4YW1wbGVUd29FeHRlbnNpb25Ud28uanM/Y2FiNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbi8vSW4gdGhpcyBleGFtcGxlIHdlIHdpbGwgbWFrZSBidXR0b25zIHRoYXQgaW5jcmVtZW50IG1vcmUgdGhhbiBvbmNlLlxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBleGFtcGxlVHdvZXh0ZW5zaW9uT25lKCl7XHJcbiAgICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdPSB1c2VTdGF0ZSgwKTtcclxuXHJcbiAgICAvL0lmIHRoaXMgaXMgdHJ1ZSwgdGhlbiBudW1iZXIgd2lsbCBpbmNyZW1lbnQgYnkgMS4gaWYgaXQgaXMgZmFsc2UsIGl0IHdpbGwgZGVjcmVtZW50LlxyXG4gICAgLy9JdCBkb2Vzbid0IGhhdmUgZW5vdWdoIHRpbWUgdG8gcmVuZGVyIGFsbCB0aGUgaW5jcmVtZW50cyBvciBkZWNyZW1lbnRzIGF0IG9uY2Ugc29cclxuICAgIC8vd2UgbmVlZCB0byBtb2RpZnkgdGhpcyBmdW5jdGlvbiAoYWRkIG51bWJlciA9PiBudW1iZXIrMSkgdG8gY2hlY2sgZm9yIHdoYXQgaXRzIGN1cnJlbnQgbnVtYmVyIHN0YXRlIGlzIGF0IFxyXG4gICAgLy9zbyBpdCBjYW4gcHJvY2VzcyB0aGUgbXVsdGlwbGUgaW5jcmVtZW50cy9kZWNyZW1lbnRzIGF0IG9uY2UuXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVDbGljayhjaGFuZ2Upe1xyXG4gICAgICAgIGlmKGNoYW5nZSl7XHJcbiAgICAgICAgICAgIHNldE51bWJlcihudW1iZXIgPT4gbnVtYmVyKzEpO1xyXG4gICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICBzZXROdW1iZXIobnVtYmVyID0+IG51bWJlci0xKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIHsvKiBIYW5kbGVDbGljayBpcyBnb2luZyB0byBiZSB0aGUgZnVuY3Rpb24gdXNlZCB0byBpbmNyZW1lbnRcclxuICAgICAgICAgICAgYm9vbGVhbiBzdGF0ZW1lbnQgbWVhbnMgaWYgaXRzIHRydWUsIHRoZW4gaXQgd2lsbCBpbmNyZW1lbnQuXHJcbiAgICAgICAgICAgIGlmIGl0cyBub3QsIHRoZW4gbm90aGluZyB3aWxsIGhhcHBlbi5cclxuICAgICAgICAgICAgSWYgd2UgZG8gbm90IHB1dCB0aGUgYnJhY2tldHMgd2l0aCB0aGUgYXJyb3cgZnVuY3Rpb24sIGl0IHdpbGwgY3Jhc2ggdGhlIHByb2dyYW0qL31cclxuICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKT0+IGhhbmRsZUNsaWNrKHRydWUpfT5JbmNyZW1lbnQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgey8qIEFkZGluZyBzcXVpZ2x5IGJyYWNrZXQgYmVjYXVzZSB3ZSBhcmUgdXNpbmcgbXVsdGlwbGUgZnVuY3Rpb25zICovfVxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDbGljayh0cnVlKVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2sodHJ1ZSlcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrKHRydWUpXHJcbiAgICAgICAgICAgIH19PkluY3JlbWVudCBieSAzPC9idXR0b24+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17KCk9PiBoYW5kbGVDbGljayhmYWxzZSl9PkRlY3JlbWVudDwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpPT57XHJcbiAgICAgICAgICAgICAgICBoYW5kbGVDbGljayhmYWxzZSlcclxuICAgICAgICAgICAgICAgIGhhbmRsZUNsaWNrKGZhbHNlKVxyXG4gICAgICAgICAgICAgICAgaGFuZGxlQ2xpY2soZmFsc2UpXHJcbiAgICAgICAgICAgIH19PkRlY3JlbWVudCBieSAzPC9idXR0b24+XHJcbiAgICAgICAge251bWJlcn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICBcclxuICAgIClcclxufSJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsImV4YW1wbGVUd29leHRlbnNpb25PbmUiLCJudW1iZXIiLCJzZXROdW1iZXIiLCJoYW5kbGVDbGljayIsImNoYW5nZSIsImRpdiIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/usestates/exampleTwoExtensionTwo.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/usestates/exampleTwoExtensionTwo.js"));
module.exports = __webpack_exports__;

})();