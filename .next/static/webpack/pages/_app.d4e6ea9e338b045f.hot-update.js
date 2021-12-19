"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/Footer.tsx":
/*!*******************************!*\
  !*** ./components/Footer.tsx ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar _jsxFileName = \"/Users/leegunhee/Desktop/next-todo/components/Footer.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].footer.withConfig({\n  displayName: \"Footer__Container\",\n  componentId: \"sc-fqkas5-0\"\n})([\"width:100%;height:53px;position:fixed;bottom:0;border-top:1px solid \", \";display:flex;justify-content:center;align-items:center;background-color:white;.footer-button{font-size:32px;width:32px;height:32px;border-radius:5px;border:1px solid black;display:flex;justify-content:center;align-items:center;background-color:white;padding:0;line-height:0;outline:none;}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_2__[\"default\"].gray);\n_c = Container;\n\nvar Footer = function Footer() {\n  _s();\n\n  var router = (0,next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter)();\n  var isMain = router.pathname === '/';\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(Container, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n      type: \"button\",\n      className: \"footer-button\",\n      onClick: function onClick() {\n        return router.push(isMain ? '/todo/add' : '/');\n      },\n      children: isMain ? '+' : '-'\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 36,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Footer, \"fN7XvhJ+p5oE6+Xlo0NJmXpxjC8=\", false, function () {\n  return [next_router__WEBPACK_IMPORTED_MODULE_1__.useRouter];\n});\n\n_c2 = Footer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Footer);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"Footer\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0Zvb3Rlci50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNSSxTQUFTLEdBQUdGLDJFQUFIO0FBQUE7QUFBQTtBQUFBLGtYQUtXQyw0REFMWCxDQUFmO0tBQU1DOztBQTBCTixJQUFNRyxNQUFnQixHQUFHLFNBQW5CQSxNQUFtQixHQUFNO0FBQUE7O0FBQzdCLE1BQU1DLE1BQU0sR0FBR1Asc0RBQVMsRUFBeEI7QUFDQSxNQUFNUSxNQUFNLEdBQUdELE1BQU0sQ0FBQ0UsUUFBUCxLQUFvQixHQUFuQztBQUNBLHNCQUNFLDhEQUFDLFNBQUQ7QUFBQSwyQkFDRTtBQUNFLFVBQUksRUFBQyxRQURQO0FBRUUsZUFBUyxFQUFDLGVBRlo7QUFHRSxhQUFPLEVBQUU7QUFBQSxlQUFNRixNQUFNLENBQUNHLElBQVAsQ0FBWUYsTUFBTSxHQUFHLFdBQUgsR0FBaUIsR0FBbkMsQ0FBTjtBQUFBLE9BSFg7QUFBQSxnQkFJR0EsTUFBTSxHQUFHLEdBQUgsR0FBUztBQUpsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBVUQsQ0FiRDs7R0FBTUY7VUFDV047OztNQURYTTtBQWVOLCtEQUFlQSxNQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvRm9vdGVyLnRzeD9hNzlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcidcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi9zdHlsZXMvcGFsZXR0ZSdcblxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmZvb3RlcmBcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNTNweDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBib3R0b206IDA7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgLmZvb3Rlci1idXR0b24ge1xuICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB3aWR0aDogMzJweDtcbiAgICBoZWlnaHQ6IDMycHg7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cbmBcblxuY29uc3QgRm9vdGVyOiBSZWFjdC5GQyA9ICgpID0+IHtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcbiAgY29uc3QgaXNNYWluID0gcm91dGVyLnBhdGhuYW1lID09PSAnLydcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGJ1dHRvblxuICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgIGNsYXNzTmFtZT0nZm9vdGVyLWJ1dHRvbidcbiAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goaXNNYWluID8gJy90b2RvL2FkZCcgOiAnLycpfT5cbiAgICAgICAge2lzTWFpbiA/ICcrJyA6ICctJ31cbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUm91dGVyIiwic3R5bGVkIiwicGFsZXR0ZSIsIkNvbnRhaW5lciIsImZvb3RlciIsImdyYXkiLCJGb290ZXIiLCJyb3V0ZXIiLCJpc01haW4iLCJwYXRobmFtZSIsInB1c2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Footer.tsx\n");

/***/ })

});