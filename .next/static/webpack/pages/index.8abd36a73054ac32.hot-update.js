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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var _lib_api_todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/api/todo */ \"./lib/api/todo.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/leegunhee/Desktop/next-todo/components/TodoList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar TrashIcon = function TrashIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"path\", {\n      d: \"M9 3h6V1.25a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V3zm11 1H4v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4zM10 7.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12zm5 0a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12zM23 3v1h-2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4H1V3h7V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h7z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c3 = TrashIcon;\nTrashIcon.defaultProps = {\n  width: \"24\",\n  height: \"24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fillRule: \"evenodd\",\n  clipRule: \"evenodd\"\n};\n\nvar CheckIcon = function CheckIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"path\", {\n      d: \"M20.285 2 9 13.567 3.714 8.556 0 12.272 9 21 24 5.715z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c4 = CheckIcon;\nCheckIcon.defaultProps = {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  width: \"24\",\n  height: \"24\"\n};\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1t8agvw-0\"\n})([\"width:100%;.todo-list-header{padding:12px;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;span{margin-left:8px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:26px;path{fill:\", \";}}.todo-check-mark{fill:\", \";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid \", \";background-color:transparent;outline:none;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray);\n_c = Container;\n\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(todos),\n      _React$useState2 = (0,_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      localTodos = _React$useState2[0],\n      setLocalTodos = _React$useState2[1]; //방법1\n  // const getTodoColorNums = useCallback(() => {\n  //   let red = 0\n  //   let orage = 0\n  //   let yellow = 0\n  //   let green = 0\n  //   let blue = 0\n  //   let navy = 0\n  //   todos.forEach((todo) => {\n  //     switch (todo.color) {\n  //       case 'red':\n  //         red += 1\n  //         break\n  //       case 'orage':\n  //         orage += 1\n  //         break\n  //       case 'yellow':\n  //         yellow += 1\n  //         break\n  //       case 'green':\n  //         green += 1\n  //         break\n  //       case 'blue':\n  //         blue += 1\n  //         break\n  //       case 'navy':\n  //         navy += 1\n  //         break\n  //       default:\n  //         break\n  //     }\n  //   })\n  //   return {red, orage, yellow, green, blue, navy}\n  // }, [todos])\n  // const todoColorNums = useMemo(getTodoColorNums, [todos])\n\n\n  var todoColorNums2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {\n    var colors = {};\n    todos.forEach(function (todo) {\n      var value = colors[todo.color];\n\n      if (!value) {\n        //해당키의 값이 없었다면\n        colors[\"\".concat(todo.color)] = 1;\n      } else {\n        colors[\"\".concat(todo.color)] = value + 1;\n      }\n    });\n    return colors;\n  }, [todos]); //Todo check 기능\n\n  var checkTodo = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(id) {\n      return _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return (0,_lib_api_todo__WEBPACK_IMPORTED_MODULE_7__.checkTodoAPI)(id);\n\n            case 3:\n              console.log('체크하였습니다.'); //체크를 한뒤 UI 를 업데이트 하는 방법 1(데이터 다시받기)\n              //새로고침을 통하여 페이지전체를 아예 새로 받아오는것\n              //Router.reload()\n              //방법2. 페이지전체를 다시 새로불러오기보다는 ,  push 를 이용하여, push로 ('/')를 하면 페이지 전체를 다시 불러오지않고 데이터를 받을수있다.\n              //전체 새로고침없이도 데이터를 새로받을수있음\n              //push함수를 이용하여 setServerSideProps를 실행해서 데이터를 다시 받아오는방법으로하겠다.\n              //근데 이방법도 불필요한 네트워크요청을 필요로하므로 개선이 필요한 방법임\n              // Router.push('/')\n\n              _context.next = 9;\n              break;\n\n            case 6:\n              _context.prev = 6;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 9:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 6]]);\n    }));\n\n    return function checkTodo(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 202,\n          columnNumber: 19\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 201,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(todoColorNums2).map(function (color, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: \"todo-list-header-color-num\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n              className: \"todo-list-header-round-color bg-\".concat(color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 208,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n              children: [todoColorNums2[color], \"\\uAC1C\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 209,\n              columnNumber: 15\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 207,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 204,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 200,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"ul\", {\n      className: \"todo-list\",\n      children: todos.map(function (todo) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n          className: \"todo-item\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: \"todo-left-side\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n              className: \"todo-color-block bg-\".concat(todo.color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 219,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n              className: \"todo-text \".concat(todo.checked ? 'checked-todo-text' : ''),\n              children: todo.text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 220,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 218,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: \"todo-right-side\",\n            children: [todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TrashIcon, {\n                className: \"todo-trash-can\",\n                onClick: function onClick() {}\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 230,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(CheckIcon, {\n                className: \"todo-check-mark\",\n                onClick: function onClick() {\n                  checkTodo(todo.id);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 231,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true), !todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n              type: \"button\",\n              className: \"todo-button\",\n              onClick: function onClick() {}\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 240,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 227,\n            columnNumber: 13\n          }, _this)]\n        }, todo.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 217,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 215,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 199,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TodoList, \"Rm1CfyDgP8m2ssYhFoRSQtgePrk=\");\n\n_c2 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"TodoList\");\n$RefreshReg$(_c3, \"TrashIcon\");\n$RefreshReg$(_c4, \"CheckIcon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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U0FBUyxDQUFDSCxJQUFJLENBQUNJLEVBQU4sQ0FBVDtBQUNEO0FBSkg7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGRjtBQUFBLDRCQUZKLEVBWUcsQ0FBQ0osSUFBSSxDQUFDWSxPQUFOLGlCQUNDO0FBQ0Usa0JBQUksRUFBQyxRQURQO0FBRUUsdUJBQVMsRUFBQyxhQUZaO0FBR0UscUJBQU8sRUFBRSxtQkFBTSxDQUFFO0FBSG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVZGO0FBQUEsV0FBK0JaLElBQUksQ0FBQ0ksRUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBc0RELENBNUhEOztHQUFNWjs7TUFBQUE7QUE4SE4sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3g/MWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge1RvZG9UeXBlfSBmcm9tICcuLi90eXBlcy90b2RvLmQnXG5pbXBvcnQgVHJhc2hJY29uIGZyb20gJy4uL3B1YmxpYy9zdGF0aWNzL3N2Zy9pY190cmFzaC5zdmcnXG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJy4uL3B1YmxpYy9zdGF0aWNzL3N2Zy9pY19jaGVjay5zdmcnXG5pbXBvcnQge2NoZWNrVG9kb0FQSX0gZnJvbSAnLi4vbGliL2FwaS90b2RvJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbi8vdHlwZVNjcmlwdOydmCDqsr3smrAgamF2YXNjcmlwdOyZgOuKlOuLrOumrFxuLy8g7YKk7JeQIOuMgO2VnCDtg4DsnoXquYzsp4Drj4Qg7KCV7J2Y7ZW07JW87ZWoXG4vLyBvYmplY3QuYSDripQgb2JqZWN0W2Fd7JmAIOuPmeydvO2VnOuNsCxcbi8vIHR5cGVzY3JpcHTsnZgg6rK97JqwIOuMgOq0hO2YuO2RnOq4sOuyleydhCDsgqzsmqntlaDrlYwg7ZW064u5IO2CpOyXkCDrjIDtlZwg7YOA7J6F64+EIOyngOygle2VtOykmOyVvO2VqFxuLy8gb2JqZWN0W2Fd7JeQ7IScIGHqsIAg66y07Iqo7YOA7J6F7J247KeALCBvYmplY3RbYV3qsIAg66y07Iqo7YOA7J6F7J2EIOuwmO2ZmO2VmOuKlOyngFxuLy/rkZDqsJzrpbwg66qF7Iuc7ZW07KSY7JW87ZWoIOuMgOq0hO2YuCDtkZzquLDrspXsnYTsk7jqsbDrqbRcbnR5cGUgT2JqZWN0SW5kZXhUeXBlID0ge1xuICBba2V5OiBzdHJpbmddOiBudW1iZXIgfCB1bmRlZmluZWRcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRvZG9zOiBUb2RvVHlwZVtdXG59XG5jb25zdCBDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogMTAwJTtcbiAgLnRvZG8tbGlzdC1oZWFkZXIge1xuICAgIHBhZGRpbmc6IDEycHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcblxuICAgIC50b2RvLWxpc3QtbGFzdC10b2RvIHtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIHNwYW4ge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9ycyB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTZweDtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDZweDtcbiAgICAgICAgfVxuICAgICAgICAudG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciB7XG4gICAgICAgICAgd2lkdGg6IDE2cHg7XG4gICAgICAgICAgaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICAuYmctYmx1ZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmJsdWV9O1xuICB9XG4gIC5iZy1ncmVlbiB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmdyZWVufTtcbiAgfVxuICAuYmctbmF2eSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm5hdnl9O1xuICB9XG4gIC5iZy1vcmFuZ2Uge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5vcmFuZ2V9O1xuICB9XG4gIC5iZy1yZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5yZWR9O1xuICB9XG4gIC5iZy15ZWxsb3cge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS55ZWxsb3d9O1xuICB9XG5cbiAgLnRvZG8tbGlzdCB7XG4gICAgLnRvZG8taXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiA1MnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcbiAgICAgIC50b2RvLWxlZnQtc2lkZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIC50b2RvLWNvbG9yLWJsb2NrIHtcbiAgICAgICAgICB3aWR0aDogMTJweDtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoZWNrZWQtdG9kby10ZXh0IHtcbiAgICAgICAgICBjb2xvcjogJHtwYWxldHRlLmdyYXl9O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICB9XG4gICAgICAgIC50b2RvLXRleHQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnRvZG8tcmlnaHQtc2lkZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgc3ZnIHtcbiAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRvZG8tdHJhc2gtY2FuIHtcbiAgICAgICAgICB3aWR0aDogMjZweDtcbiAgICAgICAgICBwYXRoIHtcbiAgICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX3JlZH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50b2RvLWNoZWNrLW1hcmsge1xuICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX2dyZWVufTtcbiAgICAgICAgfVxuICAgICAgICAudG9kby1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgIGhlaWdodDogMjBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHt0b2Rvc30pID0+IHtcbiAgY29uc3QgW2xvY2FsVG9kb3MsIHNldExvY2FsVG9kb3NdID0gUmVhY3QudXNlU3RhdGUodG9kb3MpXG4gIC8v67Cp67KVMVxuICAvLyBjb25zdCBnZXRUb2RvQ29sb3JOdW1zID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAvLyAgIGxldCByZWQgPSAwXG4gIC8vICAgbGV0IG9yYWdlID0gMFxuICAvLyAgIGxldCB5ZWxsb3cgPSAwXG4gIC8vICAgbGV0IGdyZWVuID0gMFxuICAvLyAgIGxldCBibHVlID0gMFxuICAvLyAgIGxldCBuYXZ5ID0gMFxuICAvLyAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgLy8gICAgIHN3aXRjaCAodG9kby5jb2xvcikge1xuICAvLyAgICAgICBjYXNlICdyZWQnOlxuICAvLyAgICAgICAgIHJlZCArPSAxXG4gIC8vICAgICAgICAgYnJlYWtcbiAgLy8gICAgICAgY2FzZSAnb3JhZ2UnOlxuICAvLyAgICAgICAgIG9yYWdlICs9IDFcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgICBjYXNlICd5ZWxsb3cnOlxuICAvLyAgICAgICAgIHllbGxvdyArPSAxXG4gIC8vICAgICAgICAgYnJlYWtcbiAgLy8gICAgICAgY2FzZSAnZ3JlZW4nOlxuICAvLyAgICAgICAgIGdyZWVuICs9IDFcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgICBjYXNlICdibHVlJzpcbiAgLy8gICAgICAgICBibHVlICs9IDFcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgICBjYXNlICduYXZ5JzpcbiAgLy8gICAgICAgICBuYXZ5ICs9IDFcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgICBkZWZhdWx0OlxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICB9XG4gIC8vICAgfSlcbiAgLy8gICByZXR1cm4ge3JlZCwgb3JhZ2UsIHllbGxvdywgZ3JlZW4sIGJsdWUsIG5hdnl9XG4gIC8vIH0sIFt0b2Rvc10pXG4gIC8vIGNvbnN0IHRvZG9Db2xvck51bXMgPSB1c2VNZW1vKGdldFRvZG9Db2xvck51bXMsIFt0b2Rvc10pXG4gIGNvbnN0IHRvZG9Db2xvck51bXMyID0gdXNlTWVtbygoKSA9PiB7XG4gICAgY29uc3QgY29sb3JzOiBPYmplY3RJbmRleFR5cGUgPSB7fVxuICAgIHRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY29sb3JzW3RvZG8uY29sb3JdXG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIC8v7ZW064u57YKk7J2YIOqwkuydtCDsl4bsl4jri6TrqbRcbiAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IHZhbHVlICsgMVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGNvbG9yc1xuICB9LCBbdG9kb3NdKVxuXG4gIC8vVG9kbyBjaGVjayDquLDriqVcbiAgY29uc3QgY2hlY2tUb2RvID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY2hlY2tUb2RvQVBJKGlkKVxuICAgICAgY29uc29sZS5sb2coJ+yytO2BrO2VmOyYgOyKteuLiOuLpC4nKVxuICAgICAgLy/ssrTtgazrpbwg7ZWc65KkIFVJIOulvCDsl4XrjbDsnbTtirgg7ZWY64qUIOuwqeuylSAxKOuNsOydtO2EsCDri6Tsi5zrsJvquLApXG4gICAgICAvL+yDiOuhnOqzoOy5qOydhCDthrXtlZjsl6wg7Y6Y7J207KeA7KCE7LK066W8IOyVhOyYiCDsg4jroZwg67Cb7JWE7Jik64qU6rKDXG4gICAgICAvL1JvdXRlci5yZWxvYWQoKVxuXG4gICAgICAvL+uwqeuylTIuIO2OmOydtOyngOyghOyytOulvCDri6Tsi5wg7IOI66Gc67aI65+s7Jik6riw67O064uk64qUICwgIHB1c2gg66W8IOydtOyaqe2VmOyXrCwgcHVzaOuhnCAoJy8nKeulvCDtlZjrqbQg7Y6Y7J207KeAIOyghOyytOulvCDri6Tsi5wg67aI65+s7Jik7KeA7JWK6rOgIOuNsOydtO2EsOulvCDrsJvsnYTsiJjsnojri6QuXG4gICAgICAvL+yghOyytCDsg4jroZzqs6Dsuajsl4bsnbTrj4Qg642w7J207YSw66W8IOyDiOuhnOuwm+ydhOyImOyeiOydjFxuICAgICAgLy9wdXNo7ZWo7IiY66W8IOydtOyaqe2VmOyXrCBzZXRTZXJ2ZXJTaWRlUHJvcHPrpbwg7Iuk7ZaJ7ZW07IScIOuNsOydtO2EsOulvCDri6Tsi5wg67Cb7JWE7Jik64qU67Cp67KV7Jy866Gc7ZWY6rKg64ukLlxuICAgICAgLy/qt7zrjbAg7J2067Cp67KV64+EIOu2iO2VhOyalO2VnCDrhKTtirjsm4ztgazsmpTssq3snYQg7ZWE7JqU66Gc7ZWY66+A66GcIOqwnOyEoOydtCDtlYTsmpTtlZwg67Cp67KV7J6EXG4gICAgICAvLyBSb3V0ZXIucHVzaCgnLycpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1saXN0LWhlYWRlcic+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndG9kby1saXN0LWxhc3QtdG9kbyc+XG4gICAgICAgICAg64Ko7J2AIFRPRE8gPHNwYW4+e3RvZG9zLmxlbmd0aH3qsJw8L3NwYW4+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGlzdC1oZWFkZXItY29sb3JzJz5cbiAgICAgICAgICB7LyogT2JqZWN0LmtleXMoKeulvCDsnbTsmqntlZjrqbQg6rCd7LK07J2YIO2CpOqwkuuTpOydhCDrsLDsl7TroZwg7Ja77J2E7IiY6rCA7J6I64ukLiAqL31cbiAgICAgICAgICB7T2JqZWN0LmtleXModG9kb0NvbG9yTnVtczIpLm1hcCgoY29sb3IsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1saXN0LWhlYWRlci1jb2xvci1udW0nIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YHRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3IgYmctJHtjb2xvcn1gfSAvPlxuICAgICAgICAgICAgICA8cD57dG9kb0NvbG9yTnVtczJbY29sb3JdfeqwnDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8dWwgY2xhc3NOYW1lPSd0b2RvLWxpc3QnPlxuICAgICAgICB7dG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndG9kby1pdGVtJyBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGVmdC1zaWRlJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b2RvLWNvbG9yLWJsb2NrIGJnLSR7dG9kby5jb2xvcn1gfSAvPlxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRvZG8tdGV4dCAke1xuICAgICAgICAgICAgICAgICAgdG9kby5jaGVja2VkID8gJ2NoZWNrZWQtdG9kby10ZXh0JyA6ICcnXG4gICAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgIHt0b2RvLnRleHR9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tcmlnaHQtc2lkZSc+XG4gICAgICAgICAgICAgIHt0b2RvLmNoZWNrZWQgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIGNsYXNzTmFtZT0ndG9kby10cmFzaC1jYW4nIG9uQ2xpY2s9eygpID0+IHt9fSAvPlxuICAgICAgICAgICAgICAgICAgPENoZWNrSWNvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RvZG8tY2hlY2stbWFyaydcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIGNoZWNrVG9kbyh0b2RvLmlkKVxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Lz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgeyF0b2RvLmNoZWNrZWQgJiYgKFxuICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgIHR5cGU9J2J1dHRvbidcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT0ndG9kby1idXR0b24nXG4gICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7fX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9saT5cbiAgICAgICAgKSl9XG4gICAgICA8L3VsPlxuICAgIDwvQ29udGFpbmVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFRvZG9MaXN0XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VNZW1vIiwic3R5bGVkIiwicGFsZXR0ZSIsIlRyYXNoSWNvbiIsIkNoZWNrSWNvbiIsImNoZWNrVG9kb0FQSSIsIkNvbnRhaW5lciIsImRpdiIsImdyYXkiLCJibHVlIiwiZ3JlZW4iLCJuYXZ5Iiwib3JhbmdlIiwicmVkIiwieWVsbG93IiwiZGVlcF9yZWQiLCJkZWVwX2dyZWVuIiwiVG9kb0xpc3QiLCJ0b2RvcyIsInVzZVN0YXRlIiwibG9jYWxUb2RvcyIsInNldExvY2FsVG9kb3MiLCJ0b2RvQ29sb3JOdW1zMiIsImNvbG9ycyIsImZvckVhY2giLCJ0b2RvIiwidmFsdWUiLCJjb2xvciIsImNoZWNrVG9kbyIsImlkIiwiY29uc29sZSIsImxvZyIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJtYXAiLCJpbmRleCIsImNoZWNrZWQiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ })

});