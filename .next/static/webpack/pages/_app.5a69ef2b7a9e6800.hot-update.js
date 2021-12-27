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

/***/ "./store/todo.ts":
/*!***********************!*\
  !*** ./store/todo.ts ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"todoActions\": function() { return /* binding */ todoActions; },\n/* harmony export */   \"clearFunc\": function() { return /* binding */ clearFunc; }\n/* harmony export */ });\n/* harmony import */ var _Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"./node_modules/@reduxjs/toolkit/dist/redux-toolkit.esm.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n//초기상태\nvar initialState = {\n  todos: []\n};\nvar todo = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.createSlice)({\n  name: 'todo',\n  initialState: initialState,\n  reducers: {\n    setTodo: function setTodo(state, action) {\n      state.todos = action.payload;\n    },\n    clear: function clear(state, action) {}\n  }\n}); //todo.actions는 액션 생성사들을 모아놓은것이다, ex) setTodo\n\nvar todoActions = _objectSpread({}, todo.actions); //thunk로 사용도가능함\n// const getContacts = () => {\n//   return async (dispatch: Dispatch) => {\n//     dispatch(todo.actions.setTodo())\n//     try {\n//       const response = await axios.get('/api/chat/contacts')\n//       dispatch(todo.actions.getContactsSuccess(response.data.contacts))\n//     } catch (error) {\n//       dispatch(todo.actions.hasError(error))\n//     }\n//   }\n// }\n// export {getContacts}\n\nvar clearFunc = function clearFunc() {\n  return /*#__PURE__*/function () {\n    var _ref = (0,_Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])( /*#__PURE__*/_Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(dispatch) {\n      var response;\n      return _Users_leegunhee_Desktop_next_todoRedux_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              dispatch(todo.actions.setTodo());\n              _context.prev = 1;\n              _context.next = 4;\n              return axios.get('/api/chat/contacts');\n\n            case 4:\n              response = _context.sent;\n              dispatch(todo.actions.getContactsSuccess(response.data.contacts));\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](1);\n              dispatch(todo.actions.hasError(_context.t0));\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[1, 8]]);\n    }));\n\n    return function (_x) {\n      return _ref.apply(this, arguments);\n    };\n  }();\n};\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (todo);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZS90b2RvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQU9BO0FBQ0EsSUFBTUMsWUFBNEIsR0FBRztBQUNuQ0MsRUFBQUEsS0FBSyxFQUFFO0FBRDRCLENBQXJDO0FBSUEsSUFBTUMsSUFBSSxHQUFHSCw2REFBVyxDQUFDO0FBQ3ZCSSxFQUFBQSxJQUFJLEVBQUUsTUFEaUI7QUFFdkJILEVBQUFBLFlBQVksRUFBWkEsWUFGdUI7QUFHdkJJLEVBQUFBLFFBQVEsRUFBRTtBQUNSQyxJQUFBQSxPQURRLG1CQUNBQyxLQURBLEVBQ09DLE1BRFAsRUFDMEM7QUFDaERELE1BQUFBLEtBQUssQ0FBQ0wsS0FBTixHQUFjTSxNQUFNLENBQUNDLE9BQXJCO0FBQ0QsS0FITztBQUlSQyxJQUFBQSxLQUpRLGlCQUlGSCxLQUpFLEVBSUtDLE1BSkwsRUFJMkIsQ0FFbEM7QUFOTztBQUhhLENBQUQsQ0FBeEIsRUFZQTs7QUFDTyxJQUFNRyxXQUFXLHFCQUFPUixJQUFJLENBQUNTLE9BQVosQ0FBakIsRUFFUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxJQUFNQyxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3RCO0FBQUEsb1NBQU8saUJBQU9DLFFBQVA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0xBLGNBQUFBLFFBQVEsQ0FBQ1gsSUFBSSxDQUFDUyxPQUFMLENBQWFOLE9BQWIsRUFBRCxDQUFSO0FBREs7QUFBQTtBQUFBLHFCQUdvQlMsS0FBSyxDQUFDQyxHQUFOLENBQVUsb0JBQVYsQ0FIcEI7O0FBQUE7QUFHR0MsY0FBQUEsUUFISDtBQUlISCxjQUFBQSxRQUFRLENBQUNYLElBQUksQ0FBQ1MsT0FBTCxDQUFhTSxrQkFBYixDQUFnQ0QsUUFBUSxDQUFDRSxJQUFULENBQWNDLFFBQTlDLENBQUQsQ0FBUjtBQUpHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBTUhOLGNBQUFBLFFBQVEsQ0FBQ1gsSUFBSSxDQUFDUyxPQUFMLENBQWFTLFFBQWIsYUFBRCxDQUFSOztBQU5HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQVA7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFTRCxDQVZEOztBQVdBO0FBRUEsK0RBQWVsQixJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0b3JlL3RvZG8udHM/MTlkOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2NyZWF0ZVNsaWNlLCBQYXlsb2FkQWN0aW9uLCBEaXNwYXRjaH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdCdcbmltcG9ydCB7VG9kb1R5cGV9IGZyb20gJy4uL3R5cGVzL3RvZG8nXG5cbmludGVyZmFjZSBUb2RvUmVkdXhTdGF0ZSB7XG4gIHRvZG9zOiBUb2RvVHlwZVtdXG59XG5cbi8v7LSI6riw7IOB7YOcXG5jb25zdCBpbml0aWFsU3RhdGU6IFRvZG9SZWR1eFN0YXRlID0ge1xuICB0b2RvczogW10sXG59XG5cbmNvbnN0IHRvZG8gPSBjcmVhdGVTbGljZSh7XG4gIG5hbWU6ICd0b2RvJyxcbiAgaW5pdGlhbFN0YXRlLFxuICByZWR1Y2Vyczoge1xuICAgIHNldFRvZG8oc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbjxUb2RvVHlwZVtdPikge1xuICAgICAgc3RhdGUudG9kb3MgPSBhY3Rpb24ucGF5bG9hZFxuICAgIH0sXG4gICAgY2xlYXIoc3RhdGUsIGFjdGlvbjogUGF5bG9hZEFjdGlvbil7XG4gICAgICBcbiAgICB9LFxuICB9LFxufSlcbi8vdG9kby5hY3Rpb25z64qUIOyVoeyFmCDsg53shLHsgqzrk6TsnYQg66qo7JWE64aT7J2A6rKD7J2064ukLCBleCkgc2V0VG9kb1xuZXhwb3J0IGNvbnN0IHRvZG9BY3Rpb25zID0gey4uLnRvZG8uYWN0aW9uc31cblxuLy90aHVua+uhnCDsgqzsmqnrj4TqsIDriqXtlahcbi8vIGNvbnN0IGdldENvbnRhY3RzID0gKCkgPT4ge1xuLy8gICByZXR1cm4gYXN5bmMgKGRpc3BhdGNoOiBEaXNwYXRjaCkgPT4ge1xuLy8gICAgIGRpc3BhdGNoKHRvZG8uYWN0aW9ucy5zZXRUb2RvKCkpXG4vLyAgICAgdHJ5IHtcbi8vICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MuZ2V0KCcvYXBpL2NoYXQvY29udGFjdHMnKVxuLy8gICAgICAgZGlzcGF0Y2godG9kby5hY3Rpb25zLmdldENvbnRhY3RzU3VjY2VzcyhyZXNwb25zZS5kYXRhLmNvbnRhY3RzKSlcbi8vICAgICB9IGNhdGNoIChlcnJvcikge1xuLy8gICAgICAgZGlzcGF0Y2godG9kby5hY3Rpb25zLmhhc0Vycm9yKGVycm9yKSlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbi8vIGV4cG9ydCB7Z2V0Q29udGFjdHN9XG5jb25zdCBjbGVhckZ1bmMgPSAoKSA9PiB7XG4gIHJldHVybiBhc3luYyAoZGlzcGF0Y2g6IERpc3BhdGNoKSA9PiB7XG4gICAgZGlzcGF0Y2godG9kby5hY3Rpb25zLnNldFRvZG8oKSlcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQoJy9hcGkvY2hhdC9jb250YWN0cycpXG4gICAgICBkaXNwYXRjaCh0b2RvLmFjdGlvbnMuZ2V0Q29udGFjdHNTdWNjZXNzKHJlc3BvbnNlLmRhdGEuY29udGFjdHMpKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBkaXNwYXRjaCh0b2RvLmFjdGlvbnMuaGFzRXJyb3IoZXJyb3IpKVxuICAgIH1cbiAgfVxufVxuZXhwb3J0IHtjbGVhckZ1bmN9XG5cbmV4cG9ydCBkZWZhdWx0IHRvZG9cbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImluaXRpYWxTdGF0ZSIsInRvZG9zIiwidG9kbyIsIm5hbWUiLCJyZWR1Y2VycyIsInNldFRvZG8iLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJjbGVhciIsInRvZG9BY3Rpb25zIiwiYWN0aW9ucyIsImNsZWFyRnVuYyIsImRpc3BhdGNoIiwiYXhpb3MiLCJnZXQiLCJyZXNwb25zZSIsImdldENvbnRhY3RzU3VjY2VzcyIsImRhdGEiLCJjb250YWN0cyIsImhhc0Vycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./store/todo.ts\n");

/***/ })

});