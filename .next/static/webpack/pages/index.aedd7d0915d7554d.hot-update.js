"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TodoList.tsx":
/*!*********************************!*\
  !*** ./components/TodoList.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var _lib_api_todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/api/todo */ \"./lib/api/todo.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/leegunhee/Desktop/next-todo/components/TodoList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar TrashIcon = function TrashIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"path\", {\n      d: \"M9 3h6V1.25a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V3zm11 1H4v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4zM10 7.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12zm5 0a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12zM23 3v1h-2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4H1V3h7V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h7z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c2 = TrashIcon;\nTrashIcon.defaultProps = {\n  width: \"24\",\n  height: \"24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fillRule: \"evenodd\",\n  clipRule: \"evenodd\"\n};\n\nvar CheckIcon = function CheckIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"path\", {\n      d: \"M20.285 2 9 13.567 3.714 8.556 0 12.272 9 21 24 5.715z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c3 = CheckIcon;\nCheckIcon.defaultProps = {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  width: \"24\",\n  height: \"24\"\n};\n\n\n\n\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n  var Container = styled_components__WEBPACK_IMPORTED_MODULE_7__[\"default\"].div.withConfig({\n    displayName: \"TodoList__Container\",\n    componentId: \"sc-1t8agvw-0\"\n  })([\"width:100%;.todo-list-header{padding:12px;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;span{margin-left:8px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:26px;path{fill:\", \";}}.todo-check-mark{fill:\", \";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid \", \";background-color:transparent;outline:none;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray);\n  var todoColorNums2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {\n    var colors = {};\n    todos.forEach(function (todo) {\n      var value = colors[todo.color];\n\n      if (!value) {\n        //해당키의 값이 없었다면\n        colors[\"\".concat(todo.color)] = 1;\n      } else {\n        colors[\"\".concat(todo.color)] = value + 1;\n      }\n    });\n    return colors;\n  }, [todos]); //Todo check 기능\n\n  var checkTodo = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(id) {\n      return _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return (0,_lib_api_todo__WEBPACK_IMPORTED_MODULE_6__.checkTodoAPI)(id);\n\n            case 3:\n              console.log('체크하였습니다.'); //체크를 한뒤 UI 를 업데이트 하는 방법 1(데이터 다시받기)\n              //새로고침을 통하여 페이지전체를 아예 새로 받아오는것\n              //Router.reload()\n              // Router.push('/')\n\n              _context.next = 9;\n              break;\n\n            case 6:\n              _context.prev = 6;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 6]]);\n    }));\n\n    return function checkTodo(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); //방법1\n  // const getTodoColorNums = useCallback(() => {\n  //   let red = 0\n  //   let orage = 0\n  //   let yellow = 0\n  //   let green = 0\n  //   let blue = 0\n  //   let navy = 0\n  //   todos.forEach((todo) => {\n  //     switch (todo.color) {\n  //       case 'red':\n  //         red += 1\n  //         break\n  //       case 'orage':\n  //         orage += 1\n  //         break\n  //       case 'yellow':\n  //         yellow += 1\n  //         break\n  //       case 'green':\n  //         green += 1\n  //         break\n  //       case 'blue':\n  //         blue += 1\n  //         break\n  //       case 'navy':\n  //         navy += 1\n  //         break\n  //       default:\n  //         break\n  //     }\n  //   })\n  //   return {red, orage, yellow, green, blue, navy}\n  // }, [todos])\n  // const todoColorNums = useMemo(getTodoColorNums, [todos])\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 197,\n          columnNumber: 19\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 196,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(todoColorNums2).map(function (color, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"todo-list-header-color-num\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"todo-list-header-round-color bg-\".concat(color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 203,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n              children: [todoColorNums2[color], \"\\uAC1C\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 204,\n              columnNumber: 15\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 202,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 199,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 195,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n      className: \"todo-list\",\n      children: todos.map(function (todo) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n          className: \"todo-item\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"todo-left-side\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"todo-color-block bg-\".concat(todo.color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 214,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n              className: \"todo-text \".concat(todo.checked ? 'checked-todo-text' : ''),\n              children: todo.text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 215,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 213,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"todo-right-side\",\n            children: [todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TrashIcon, {\n                className: \"todo-trash-can\",\n                onClick: function onClick() {}\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 225,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(CheckIcon, {\n                className: \"todo-check-mark\",\n                onClick: function onClick() {\n                  checkTodo(todo.id);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 226,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true), !todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n              type: \"button\",\n              className: \"todo-button\",\n              onClick: function onClick() {}\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 235,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 222,\n            columnNumber: 13\n          }, _this)]\n        }, todo.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 212,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 210,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 194,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TodoList, \"B+iFNIrBqIBMOLgcUF5WeuIq/Hc=\");\n\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"TodoList\");\n$RefreshReg$(_c2, \"TrashIcon\");\n$RefreshReg$(_c3, \"CheckIcon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFOLGlCQUNDO0FBQ0Usa0JBQUksRUFBQyxRQURQO0FBRUUsdUJBQVMsRUFBQyxhQUZaO0FBR0UscUJBQU8sRUFBRSxtQkFBTSxDQUFFO0FBSG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGO0FBQUEsV0FBK0JaLElBQUksQ0FBQ0ksRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0RELENBaE9EOztHQUFNcEI7O0tBQUFBO0FBa09OLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4PzFjOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlTWVtbywgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBwYWxldHRlIGZyb20gJy4uL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtUb2RvVHlwZX0gZnJvbSAnLi4vdHlwZXMvdG9kby5kJ1xuaW1wb3J0IFRyYXNoSWNvbiBmcm9tICcuLi9wdWJsaWMvc3RhdGljcy9zdmcvaWNfdHJhc2guc3ZnJ1xuaW1wb3J0IENoZWNrSWNvbiBmcm9tICcuLi9wdWJsaWMvc3RhdGljcy9zdmcvaWNfY2hlY2suc3ZnJ1xuaW1wb3J0IHtjaGVja1RvZG9BUEl9IGZyb20gJy4uL2xpYi9hcGkvdG9kbydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG4vL3R5cGVTY3JpcHTsnZgg6rK97JqwIGphdmFzY3JpcHTsmYDripTri6zrpqxcbi8vIO2CpOyXkCDrjIDtlZwg7YOA7J6F6rmM7KeA64+EIOygleydmO2VtOyVvO2VqFxuLy8gb2JqZWN0LmEg64qUIG9iamVjdFthXeyZgCDrj5nsnbztlZzrjbAsXG4vLyB0eXBlc2NyaXB07J2YIOqyveyasCDrjIDqtITtmLjtkZzquLDrspXsnYQg7IKs7Jqp7ZWg65WMIO2VtOuLuSDtgqTsl5Ag64yA7ZWcIO2DgOyeheuPhCDsp4DsoJXtlbTspJjslbztlahcbi8vIG9iamVjdFthXeyXkOyEnCBh6rCAIOustOyKqO2DgOyeheyduOyngCwgb2JqZWN0W2Fd6rCAIOustOyKqO2DgOyeheydhCDrsJjtmZjtlZjripTsp4Bcbi8v65GQ6rCc66W8IOuqheyLnO2VtOykmOyVvO2VqCDrjIDqtITtmLgg7ZGc6riw67KV7J2E7JO46rGw66m0XG50eXBlIE9iamVjdEluZGV4VHlwZSA9IHtcbiAgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgdW5kZWZpbmVkXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0b2RvczogVG9kb1R5cGVbXVxufVxuXG5jb25zdCBUb2RvTGlzdDogUmVhY3QuRkM8SVByb3BzPiA9ICh7dG9kb3N9KSA9PiB7XG4gIGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gICAgd2lkdGg6IDEwMCU7XG4gICAgLnRvZG8tbGlzdC1oZWFkZXIge1xuICAgICAgcGFkZGluZzogMTJweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG5cbiAgICAgIC50b2RvLWxpc3QtbGFzdC10b2RvIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBzcGFuIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9ycyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3Ige1xuICAgICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIC5iZy1ibHVlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ibHVlfTtcbiAgICB9XG4gICAgLmJnLWdyZWVuIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmVlbn07XG4gICAgfVxuICAgIC5iZy1uYXZ5IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5uYXZ5fTtcbiAgICB9XG4gICAgLmJnLW9yYW5nZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcbiAgICB9XG4gICAgLmJnLXJlZCB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUucmVkfTtcbiAgICB9XG4gICAgLmJnLXllbGxvdyB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUueWVsbG93fTtcbiAgICB9XG5cbiAgICAudG9kby1saXN0IHtcbiAgICAgIC50b2RvLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG4gICAgICAgIC50b2RvLWxlZnQtc2lkZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAudG9kby1jb2xvci1ibG9jayB7XG4gICAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLmNoZWNrZWQtdG9kby10ZXh0IHtcbiAgICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheX07XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvZG8tdGV4dCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRvZG8tcmlnaHQtc2lkZSB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgICAgc3ZnIHtcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2RvLXRyYXNoLWNhbiB7XG4gICAgICAgICAgICB3aWR0aDogMjZweDtcbiAgICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgICBmaWxsOiAke3BhbGV0dGUuZGVlcF9yZWR9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICAudG9kby1jaGVjay1tYXJrIHtcbiAgICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX2dyZWVufTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvZG8tYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgYFxuXG4gIGNvbnN0IHRvZG9Db2xvck51bXMyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgY29sb3JzOiBPYmplY3RJbmRleFR5cGUgPSB7fVxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY29sb3JzW3RvZG8uY29sb3JdXG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIC8v7ZW064u57YKk7J2YIOqwkuydtCDsl4bsl4jri6TrqbRcbiAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IHZhbHVlICsgMVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGNvbG9yc1xuICB9LCBbdG9kb3NdKVxuXG4gIC8vVG9kbyBjaGVjayDquLDriqVcbiAgY29uc3QgY2hlY2tUb2RvID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY2hlY2tUb2RvQVBJKGlkKVxuICAgICAgY29uc29sZS5sb2coJ+yytO2BrO2VmOyYgOyKteuLiOuLpC4nKVxuICAgICAgLy/ssrTtgazrpbwg7ZWc65KkIFVJIOulvCDsl4XrjbDsnbTtirgg7ZWY64qUIOuwqeuylSAxKOuNsOydtO2EsCDri6Tsi5zrsJvquLApXG4gICAgICAvL+yDiOuhnOqzoOy5qOydhCDthrXtlZjsl6wg7Y6Y7J207KeA7KCE7LK066W8IOyVhOyYiCDsg4jroZwg67Cb7JWE7Jik64qU6rKDXG4gICAgICAvL1JvdXRlci5yZWxvYWQoKVxuICAgICAgLy8gUm91dGVyLnB1c2goJy8nKVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgfVxuICB9XG4gIC8v67Cp67KVMVxuICAvLyBjb25zdCBnZXRUb2RvQ29sb3JOdW1zID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAvLyAgIGxldCByZWQgPSAwXG4gIC8vICAgbGV0IG9yYWdlID0gMFxuICAvLyAgIGxldCB5ZWxsb3cgPSAwXG4gIC8vICAgbGV0IGdyZWVuID0gMFxuICAvLyAgIGxldCBibHVlID0gMFxuICAvLyAgIGxldCBuYXZ5ID0gMFxuICAvLyAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgLy8gICAgIHN3aXRjaCAodG9kby5jb2xvcikge1xuICAvLyAgICAgICBjYXNlICdyZWQnOlxuICAvLyAgICAgICAgIHJlZCArPSAxXG4gIC8vICAgICAgICAgYnJlYWtcbiAgLy8gICAgICAgY2FzZSAnb3JhZ2UnOlxuICAvLyAgICAgICAgIG9yYWdlICs9IDFcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgICBjYXNlICd5ZWxsb3cnOlxuICAvLyAgICAgICAgIHllbGxvdyArPSAxXG4gIC8vICAgICAgICAgYnJlYWtcbiAgLy8gICAgICAgY2FzZSAnZ3JlZW4nOlxuICAvLyAgICAgICAgIGdyZWVuICs9IDFcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgICBjYXNlICdibHVlJzpcbiAgLy8gICAgICAgICBibHVlICs9IDFcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgICBjYXNlICduYXZ5JzpcbiAgLy8gICAgICAgICBuYXZ5ICs9IDFcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgICBkZWZhdWx0OlxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICB9XG4gIC8vICAgfSlcbiAgLy8gICByZXR1cm4ge3JlZCwgb3JhZ2UsIHllbGxvdywgZ3JlZW4sIGJsdWUsIG5hdnl9XG4gIC8vIH0sIFt0b2Rvc10pXG4gIC8vIGNvbnN0IHRvZG9Db2xvck51bXMgPSB1c2VNZW1vKGdldFRvZG9Db2xvck51bXMsIFt0b2Rvc10pXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxpc3QtaGVhZGVyJz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0b2RvLWxpc3QtbGFzdC10b2RvJz5cbiAgICAgICAgICDrgqjsnYAgVE9ETyA8c3Bhbj57dG9kb3MubGVuZ3RofeqwnDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1saXN0LWhlYWRlci1jb2xvcnMnPlxuICAgICAgICAgIHsvKiBPYmplY3Qua2V5cygp66W8IOydtOyaqe2VmOuptCDqsJ3ssrTsnZgg7YKk6rCS65Ok7J2EIOuwsOyXtOuhnCDslrvsnYTsiJjqsIDsnojri6QuICovfVxuICAgICAgICAgIHtPYmplY3Qua2V5cyh0b2RvQ29sb3JOdW1zMikubWFwKChjb2xvciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bScga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciBiZy0ke2NvbG9yfWB9IC8+XG4gICAgICAgICAgICAgIDxwPnt0b2RvQ29sb3JOdW1zMltjb2xvcl196rCcPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx1bCBjbGFzc05hbWU9J3RvZG8tbGlzdCc+XG4gICAgICAgIHt0b2Rvcy5tYXAoKHRvZG8pID0+IChcbiAgICAgICAgICA8bGkgY2xhc3NOYW1lPSd0b2RvLWl0ZW0nIGtleT17dG9kby5pZH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1sZWZ0LXNpZGUnPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZG8tY29sb3ItYmxvY2sgYmctJHt0b2RvLmNvbG9yfWB9IC8+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgdG9kby10ZXh0ICR7XG4gICAgICAgICAgICAgICAgICB0b2RvLmNoZWNrZWQgPyAnY2hlY2tlZC10b2RvLXRleHQnIDogJydcbiAgICAgICAgICAgICAgICB9YH0+XG4gICAgICAgICAgICAgICAge3RvZG8udGV4dH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1yaWdodC1zaWRlJz5cbiAgICAgICAgICAgICAge3RvZG8uY2hlY2tlZCAmJiAoXG4gICAgICAgICAgICAgICAgPD5cbiAgICAgICAgICAgICAgICAgIDxUcmFzaEljb24gY2xhc3NOYW1lPSd0b2RvLXRyYXNoLWNhbicgb25DbGljaz17KCkgPT4ge319IC8+XG4gICAgICAgICAgICAgICAgICA8Q2hlY2tJY29uXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndG9kby1jaGVjay1tYXJrJ1xuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY2hlY2tUb2RvKHRvZG8uaWQpXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7IXRvZG8uY2hlY2tlZCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0b2RvLWJ1dHRvbidcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3RcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZU1lbW8iLCJzdHlsZWQiLCJwYWxldHRlIiwiVHJhc2hJY29uIiwiQ2hlY2tJY29uIiwiY2hlY2tUb2RvQVBJIiwiVG9kb0xpc3QiLCJ0b2RvcyIsIkNvbnRhaW5lciIsImRpdiIsImdyYXkiLCJibHVlIiwiZ3JlZW4iLCJuYXZ5Iiwib3JhbmdlIiwicmVkIiwieWVsbG93IiwiZGVlcF9yZWQiLCJkZWVwX2dyZWVuIiwidG9kb0NvbG9yTnVtczIiLCJjb2xvcnMiLCJmb3JFYWNoIiwidG9kbyIsInZhbHVlIiwiY29sb3IiLCJjaGVja1RvZG8iLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJjaGVja2VkIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ })

});