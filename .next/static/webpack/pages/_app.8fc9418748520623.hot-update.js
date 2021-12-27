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

/***/ "./store/index.ts":
/*!************************!*\
  !*** ./store/index.ts ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"wrapper\": function() { return /* binding */ wrapper; }\n/* harmony export */ });\n/* harmony import */ var _Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ \"./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! redux */ \"./node_modules/redux/es/redux.js\");\n/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-redux-wrapper */ \"./node_modules/next-redux-wrapper/es6/index.js\");\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./todo */ \"./store/todo.ts\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n //1. 리듀서들을 모듈별로 관리하여 combineReducers를 사용하여 하나로 모은다.\n\nvar rootReducer = (0,redux__WEBPACK_IMPORTED_MODULE_4__.combineReducers)({\n  todo: _todo__WEBPACK_IMPORTED_MODULE_3__[\"default\"].reducer\n}); //2. 위에서 합쳐진 리듀서에 타입이 \"__NEXT_REDUX_WRAPPER_HYDRATE__\"인 리듀서를 추가한다.\n//Hydrate는 서버에서 생성된 리덕스 스토어를 , 클라이언트에서 사용할수 있도록 전달해주는 역할을한다.\n\nvar reducer = function reducer(state, action) {\n  if (action.type === next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.HYDRATE) {\n    var nextState = _objectSpread(_objectSpread({}, state), action.payload);\n\n    if (state.count) return nextState;\n  }\n\n  return rootReducer(state, action);\n}; //스토어의 타입\n//3. 스토어의 타입을 루트 리듀서로부터 얻을 수 있습니다.\n\n\n//미들웨어 적용을 위한 스토어 enhancer\n//4. 리덕스에서 미들웨어는 액션이 디스패치되어 리듀서에서 처리하기 전에 사전에 지정된 작업들을 의미합니다.\n//리덕스 데브툴 확장 프로그램을 사용하기 위해 미들웨어에 리덕스 데브툴을 사용하도록 하는 코드이다.\nvar bindMiddleware = function bindMiddleware(middleware) {\n  if (true) {\n    var _require = __webpack_require__(/*! redux-devtools-extension */ \"./node_modules/redux-devtools-extension/index.js\"),\n        composeWithDevTools = _require.composeWithDevTools;\n\n    return composeWithDevTools(redux__WEBPACK_IMPORTED_MODULE_4__.applyMiddleware.apply(void 0, (0,_Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(middleware)));\n  }\n\n  return redux__WEBPACK_IMPORTED_MODULE_4__.applyMiddleware.apply(void 0, (0,_Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(middleware));\n}; //5. 리듀서와 미들웨어로 리덕스 스토어를 만들어 리턴하게된다.\n//App컴포넌트에서 wrapper로 사용하기위해 next-redux-wrapper에서 createWrapper를 import 하여 wrapper를 만들었습니다.\n//wrapper를 사용하기위해 App컴포넌트에서 사용하도록 하겠습니다.\n\n\nvar initStore = function initStore() {\n  var store = (0,redux__WEBPACK_IMPORTED_MODULE_4__.createStore)(reducer, bindMiddleware([]));\n  return store;\n};\n\nvar wrapper = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_2__.createWrapper)(initStore);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Q0FHQTs7QUFDQSxJQUFNTSxXQUFXLEdBQUdKLHNEQUFlLENBQUM7QUFDbENHLEVBQUFBLElBQUksRUFBRUEscURBQVlFO0FBRGdCLENBQUQsQ0FBbkMsRUFJQTtBQUNBOztBQUNBLElBQU1BLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBYUMsTUFBYixFQUE2QjtBQUMzQyxNQUFJQSxNQUFNLENBQUNDLElBQVAsS0FBZ0JQLHVEQUFwQixFQUE2QjtBQUMzQixRQUFNUSxTQUFTLG1DQUNWSCxLQURVLEdBRVZDLE1BQU0sQ0FBQ0csT0FGRyxDQUFmOztBQUlBLFFBQUlKLEtBQUssQ0FBQ0ssS0FBVixFQUFrQixPQUFPRixTQUFQO0FBQ25COztBQUNELFNBQU9MLFdBQVcsQ0FBQ0UsS0FBRCxFQUFRQyxNQUFSLENBQWxCO0FBQ0QsQ0FURCxFQVdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBLElBQU1LLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsQ0FBQ0MsVUFBRCxFQUFxQjtBQUMxQyxZQUEyQztBQUN6QyxtQkFBOEJDLG1CQUFPLENBQUMsa0ZBQUQsQ0FBckM7QUFBQSxRQUFPQyxtQkFBUCxZQUFPQSxtQkFBUDs7QUFDQSxXQUFPQSxtQkFBbUIsQ0FBQ2hCLHdEQUFBLHNKQUFtQmMsVUFBbkIsRUFBRCxDQUExQjtBQUNEOztBQUNELFNBQU9kLHdEQUFBLHNKQUFtQmMsVUFBbkIsRUFBUDtBQUNELENBTkQsRUFRQTtBQUNBO0FBQ0E7OztBQUNBLElBQU1HLFNBQVMsR0FBRyxTQUFaQSxTQUFZLEdBQU07QUFDdEIsTUFBTUMsS0FBSyxHQUFHbkIsa0RBQVcsQ0FBQ08sT0FBRCxFQUFVTyxjQUFjLENBQUMsRUFBRCxDQUF4QixDQUF6QjtBQUNBLFNBQU9LLEtBQVA7QUFDRCxDQUhEOztBQUtPLElBQU1DLE9BQU8sR0FBR2hCLGlFQUFhLENBQUNjLFNBQUQsQ0FBN0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3RvcmUvaW5kZXgudHM/YjViMyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVN0b3JlLCBhcHBseU1pZGRsZXdhcmUsIGNvbWJpbmVSZWR1Y2Vyc30gZnJvbSAncmVkdXgnXG5pbXBvcnQge0hZRFJBVEUsIGNyZWF0ZVdyYXBwZXJ9IGZyb20gJ25leHQtcmVkdXgtd3JhcHBlcidcbmltcG9ydCB0b2RvIGZyb20gJy4vdG9kbydcblxuLy8xLiDrpqzrk4DshJzrk6TsnYQg66qo65OI67OE66GcIOq0gOumrO2VmOyXrCBjb21iaW5lUmVkdWNlcnPrpbwg7IKs7Jqp7ZWY7JesIO2VmOuCmOuhnCDrqqjsnYDri6QuXG5jb25zdCByb290UmVkdWNlciA9IGNvbWJpbmVSZWR1Y2Vycyh7XG4gIHRvZG86IHRvZG8ucmVkdWNlcixcbn0pXG5cbi8vMi4g7JyE7JeQ7IScIO2VqeyzkOynhCDrpqzrk4DshJzsl5Ag7YOA7J6F7J20IFwiX19ORVhUX1JFRFVYX1dSQVBQRVJfSFlEUkFURV9fXCLsnbgg66as65OA7ISc66W8IOy2lOqwgO2VnOuLpC5cbi8vSHlkcmF0ZeuKlCDshJzrsoTsl5DshJwg7IOd7ISx65CcIOumrOuNleyKpCDsiqTthqDslrTrpbwgLCDtgbTrnbzsnbTslrjtirjsl5DshJwg7IKs7Jqp7ZWg7IiYIOyeiOuPhOuhnSDsoITri6ztlbTso7zripQg7Jet7ZWg7J2E7ZWc64ukLlxuY29uc3QgcmVkdWNlciA9IChzdGF0ZTogYW55LCBhY3Rpb246IGFueSkgPT4ge1xuICBpZiAoYWN0aW9uLnR5cGUgPT09IEhZRFJBVEUpIHtcbiAgICBjb25zdCBuZXh0U3RhdGUgPSB7XG4gICAgICAuLi5zdGF0ZSwgLy91c2UgcHJldmlvdXMgc3RhdGVcbiAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLCAvL2FwcGx5IGRlbHRhIGZyb20gaHlkcmF0aW9uXG4gICAgfVxuICAgIGlmIChzdGF0ZS5jb3VudCkgIHJldHVybiBuZXh0U3RhdGVcbiAgfVxuICByZXR1cm4gcm9vdFJlZHVjZXIoc3RhdGUsIGFjdGlvbilcbn1cblxuLy/siqTthqDslrTsnZgg7YOA7J6FXG4vLzMuIOyKpO2GoOyWtOydmCDtg4DsnoXsnYQg66Oo7Yq4IOumrOuTgOyEnOuhnOu2gO2EsCDslrvsnYQg7IiYIOyeiOyKteuLiOuLpC5cbmV4cG9ydCB0eXBlIFJvb3RTdGF0ZSA9IFJldHVyblR5cGU8dHlwZW9mIHJvb3RSZWR1Y2VyPlxuXG4vL+uvuOuTpOybqOyWtCDsoIHsmqnsnYQg7JyE7ZWcIOyKpO2GoOyWtCBlbmhhbmNlclxuLy80LiDrpqzrjZXsiqTsl5DshJwg66+465Ok7Juo7Ja064qUIOyVoeyFmOydtCDrlJTsiqTtjKjsuZjrkJjslrQg66as65OA7ISc7JeQ7IScIOyymOumrO2VmOq4sCDsoITsl5Ag7IKs7KCE7JeQIOyngOygleuQnCDsnpHsl4Xrk6TsnYQg7J2Y66+47ZWp64uI64ukLlxuLy/rpqzrjZXsiqQg642w67iM7Yi0IO2ZleyepSDtlITroZzqt7jrnqjsnYQg7IKs7Jqp7ZWY6riwIOychO2VtCDrr7jrk6Tsm6jslrTsl5Ag66as642V7IqkIOuNsOu4jO2ItOydhCDsgqzsmqntlZjrj4TroZ0g7ZWY64qUIOy9lOuTnOydtOuLpC5cbmNvbnN0IGJpbmRNaWRkbGV3YXJlID0gKG1pZGRsZXdhcmU6IGFueSkgPT4ge1xuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGNvbnN0IHtjb21wb3NlV2l0aERldlRvb2xzfSA9IHJlcXVpcmUoJ3JlZHV4LWRldnRvb2xzLWV4dGVuc2lvbicpXG4gICAgcmV0dXJuIGNvbXBvc2VXaXRoRGV2VG9vbHMoYXBwbHlNaWRkbGV3YXJlKC4uLm1pZGRsZXdhcmUpKVxuICB9XG4gIHJldHVybiBhcHBseU1pZGRsZXdhcmUoLi4ubWlkZGxld2FyZSlcbn1cblxuLy81LiDrpqzrk4DshJzsmYAg66+465Ok7Juo7Ja066GcIOumrOuNleyKpCDsiqTthqDslrTrpbwg66eM65Ok7Ja0IOumrO2EtO2VmOqyjOuQnOuLpC5cbi8vQXBw7Lu07Y+s64SM7Yq47JeQ7IScIHdyYXBwZXLroZwg7IKs7Jqp7ZWY6riw7JyE7ZW0IG5leHQtcmVkdXgtd3JhcHBlcuyXkOyEnCBjcmVhdGVXcmFwcGVy66W8IGltcG9ydCDtlZjsl6wgd3JhcHBlcuulvCDrp4zrk6Tsl4jsirXri4jri6QuXG4vL3dyYXBwZXLrpbwg7IKs7Jqp7ZWY6riw7JyE7ZW0IEFwcOy7tO2PrOuEjO2KuOyXkOyEnCDsgqzsmqntlZjrj4TroZ0g7ZWY6rKg7Iq164uI64ukLlxuY29uc3QgaW5pdFN0b3JlID0gKCkgPT4ge1xuICBjb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHJlZHVjZXIsIGJpbmRNaWRkbGV3YXJlKFtdKSlcbiAgcmV0dXJuIHN0b3JlXG59XG5cbmV4cG9ydCBjb25zdCB3cmFwcGVyID0gY3JlYXRlV3JhcHBlcihpbml0U3RvcmUpXG4iXSwibmFtZXMiOlsiY3JlYXRlU3RvcmUiLCJhcHBseU1pZGRsZXdhcmUiLCJjb21iaW5lUmVkdWNlcnMiLCJIWURSQVRFIiwiY3JlYXRlV3JhcHBlciIsInRvZG8iLCJyb290UmVkdWNlciIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJuZXh0U3RhdGUiLCJwYXlsb2FkIiwiY291bnQiLCJiaW5kTWlkZGxld2FyZSIsIm1pZGRsZXdhcmUiLCJyZXF1aXJlIiwiY29tcG9zZVdpdGhEZXZUb29scyIsImluaXRTdG9yZSIsInN0b3JlIiwid3JhcHBlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./store/index.ts\n");

/***/ })

});