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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_leegunhee_Desktop_next_todo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var _lib_api_todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/api/todo */ \"./lib/api/todo.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/leegunhee/Desktop/next-todo/components/TodoList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_leegunhee_Desktop_next_todo_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar TrashIcon = function TrashIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"path\", {\n      d: \"M9 3h6V1.25a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V3zm11 1H4v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4zM10 7.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12zm5 0a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12zM23 3v1h-2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4H1V3h7V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h7z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c3 = TrashIcon;\nTrashIcon.defaultProps = {\n  width: \"24\",\n  height: \"24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fillRule: \"evenodd\",\n  clipRule: \"evenodd\"\n};\n\nvar CheckIcon = function CheckIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"path\", {\n      d: \"M20.285 2 9 13.567 3.714 8.556 0 12.272 9 21 24 5.715z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c4 = CheckIcon;\nCheckIcon.defaultProps = {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  width: \"24\",\n  height: \"24\"\n};\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1t8agvw-0\"\n})([\"width:100%;.todo-list-header{padding:12px;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;span{margin-left:8px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:26px;path{fill:\", \";}}.todo-check-mark{fill:\", \";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid \", \";background-color:transparent;outline:none;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray);\n_c = Container;\n\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(todos),\n      _React$useState2 = (0,_Users_leegunhee_Desktop_next_todo_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      localTodos = _React$useState2[0],\n      setLocalTodos = _React$useState2[1]; //방법1\n  // const getTodoColorNums = useCallback(() => {\n  //   let red = 0\n  //   let orage = 0\n  //   let yellow = 0\n  //   let green = 0\n  //   let blue = 0\n  //   let navy = 0\n  //   todos.forEach((todo) => {\n  //     switch (todo.color) {\n  //       case 'red':\n  //         red += 1\n  //         break\n  //       case 'orage':\n  //         orage += 1\n  //         break\n  //       case 'yellow':\n  //         yellow += 1\n  //         break\n  //       case 'green':\n  //         green += 1\n  //         break\n  //       case 'blue':\n  //         blue += 1\n  //         break\n  //       case 'navy':\n  //         navy += 1\n  //         break\n  //       default:\n  //         break\n  //     }\n  //   })\n  //   return {red, orage, yellow, green, blue, navy}\n  // }, [todos])\n  // const todoColorNums = useMemo(getTodoColorNums, [todos])\n\n\n  var todoColorNums2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {\n    var colors = {};\n    localTodos.forEach(function (todo) {\n      var value = colors[todo.color];\n\n      if (!value) {\n        //해당키의 값이 없었다면\n        colors[\"\".concat(todo.color)] = 1;\n      } else {\n        colors[\"\".concat(todo.color)] = value + 1;\n      }\n    });\n    return colors;\n  }, [localTodos]); //Todo check 기능\n\n  var checkTodo = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_leegunhee_Desktop_next_todo_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_leegunhee_Desktop_next_todo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(id) {\n      var newTodos;\n      return _Users_leegunhee_Desktop_next_todo_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return (0,_lib_api_todo__WEBPACK_IMPORTED_MODULE_7__.checkTodoAPI)(id);\n\n            case 3:\n              console.log('체크하였습니다.'); //체크를 한뒤 UI 를 업데이트 하는 방법 1(데이터 다시받기)\n              //새로고침을 통하여 페이지전체를 아예 새로 받아오는것\n              //Router.reload()\n              //방법2. 페이지전체를 다시 새로불러오기보다는 ,  push 를 이용하여, push로 ('/')를 하면 페이지 전체를 다시 불러오지않고 데이터를 받을수있다.\n              //전체 새로고침없이도 데이터를 새로받을수있음\n              //push함수를 이용하여 setServerSideProps를 실행해서 데이터를 다시 받아오는방법으로하겠다.\n              //근데 이방법도 불필요한 네트워크요청을 필요로하므로 개선이 필요한 방법임\n              // Router.push('/')\n              //방법3  , 위의 방법 1과 방법2는 변경시킨 데이터를, api를 통해서 새로받아와서 반영결과를 보여준다.\n              //하지만 데이터를 새로불러오지 않고 뷰를 변화시키는 방법 3가 제일좋다.\n\n              newTodos = localTodos.map(function (todo) {\n                if (todo.id === id) {\n                  return _objectSpread(_objectSpread({}, todo), {}, {\n                    checked: !todo.checked\n                  });\n                }\n\n                return todo;\n              });\n              setLocalTodos(newTodos);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function checkTodo(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n          children: [localTodos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 212,\n          columnNumber: 19\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 211,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(todoColorNums2).map(function (color, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: \"todo-list-header-color-num\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n              className: \"todo-list-header-round-color bg-\".concat(color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 218,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n              children: [todoColorNums2[color], \"\\uAC1C\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 219,\n              columnNumber: 15\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 217,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 214,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 210,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"ul\", {\n      className: \"todo-list\",\n      children: localTodos.map(function (todo) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n          className: \"todo-item\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: \"todo-left-side\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n              className: \"todo-color-block bg-\".concat(todo.color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 229,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n              className: \"todo-text \".concat(todo.checked ? 'checked-todo-text' : ''),\n              children: todo.text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 230,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 228,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: \"todo-right-side\",\n            children: [todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TrashIcon, {\n                className: \"todo-trash-can\",\n                onClick: function onClick() {}\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 240,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(CheckIcon, {\n                className: \"todo-check-mark\",\n                onClick: function onClick() {}\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 241,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true), !todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n              type: \"button\",\n              className: \"todo-button\",\n              onClick: function onClick() {}\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 250,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 237,\n            columnNumber: 13\n          }, _this)]\n        }, todo.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 227,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 225,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 209,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TodoList, \"Rm1CfyDgP8m2ssYhFoRSQtgePrk=\");\n\n_c2 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"TodoList\");\n$RefreshReg$(_c3, \"TrashIcon\");\n$RefreshReg$(_c4, \"CheckIcon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQVVFO0FBQUsscUJBQVMsRUFBQyxpQkFBZjtBQUFBLHVCQUNHZCxJQUFJLENBQUNTLE9BQUwsaUJBQ0M7QUFBQSxzQ0FDRSw4REFBQyxTQUFEO0FBQVcseUJBQVMsRUFBQyxnQkFBckI7QUFBc0MsdUJBQU8sRUFBRSxtQkFBTSxDQUFFO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFFRSw4REFBQyxTQUFEO0FBQ0UseUJBQVMsRUFBQyxpQkFEWjtBQUVFLHVCQUFPLEVBQUUsbUJBQU0sQ0FFZDtBQUpIO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkY7QUFBQSw0QkFGSixFQVlHLENBQUNULElBQUksQ0FBQ1MsT0FBTixpQkFDQztBQUNFLGtCQUFJLEVBQUMsUUFEUDtBQUVFLHVCQUFTLEVBQUMsYUFGWjtBQUdFLHFCQUFPLEVBQUUsbUJBQU0sQ0FBRTtBQUhuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFWRjtBQUFBLFdBQStCVCxJQUFJLENBQUNJLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXNERCxDQXRJRDs7R0FBTVo7O01BQUFBO0FBd0lOLCtEQUFlQSxRQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVG9kb0xpc3QudHN4PzFjOGMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7dXNlTWVtbywgdXNlQ2FsbGJhY2t9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHN0eWxlZCBmcm9tICdzdHlsZWQtY29tcG9uZW50cydcbmltcG9ydCBwYWxldHRlIGZyb20gJy4uL3N0eWxlcy9wYWxldHRlJ1xuaW1wb3J0IHtUb2RvVHlwZX0gZnJvbSAnLi4vdHlwZXMvdG9kby5kJ1xuaW1wb3J0IFRyYXNoSWNvbiBmcm9tICcuLi9wdWJsaWMvc3RhdGljcy9zdmcvaWNfdHJhc2guc3ZnJ1xuaW1wb3J0IENoZWNrSWNvbiBmcm9tICcuLi9wdWJsaWMvc3RhdGljcy9zdmcvaWNfY2hlY2suc3ZnJ1xuaW1wb3J0IHtjaGVja1RvZG9BUEl9IGZyb20gJy4uL2xpYi9hcGkvdG9kbydcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXG4vL3R5cGVTY3JpcHTsnZgg6rK97JqwIGphdmFzY3JpcHTsmYDripTri6zrpqxcbi8vIO2CpOyXkCDrjIDtlZwg7YOA7J6F6rmM7KeA64+EIOygleydmO2VtOyVvO2VqFxuLy8gb2JqZWN0LmEg64qUIG9iamVjdFthXeyZgCDrj5nsnbztlZzrjbAsXG4vLyB0eXBlc2NyaXB07J2YIOqyveyasCDrjIDqtITtmLjtkZzquLDrspXsnYQg7IKs7Jqp7ZWg65WMIO2VtOuLuSDtgqTsl5Ag64yA7ZWcIO2DgOyeheuPhCDsp4DsoJXtlbTspJjslbztlahcbi8vIG9iamVjdFthXeyXkOyEnCBh6rCAIOustOyKqO2DgOyeheyduOyngCwgb2JqZWN0W2Fd6rCAIOustOyKqO2DgOyeheydhCDrsJjtmZjtlZjripTsp4Bcbi8v65GQ6rCc66W8IOuqheyLnO2VtOykmOyVvO2VqCDrjIDqtITtmLgg7ZGc6riw67KV7J2E7JO46rGw66m0XG50eXBlIE9iamVjdEluZGV4VHlwZSA9IHtcbiAgW2tleTogc3RyaW5nXTogbnVtYmVyIHwgdW5kZWZpbmVkXG59XG5cbmludGVyZmFjZSBJUHJvcHMge1xuICB0b2RvczogVG9kb1R5cGVbXVxufVxuY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDEwMCU7XG4gIC50b2RvLWxpc3QtaGVhZGVyIHtcbiAgICBwYWRkaW5nOiAxMnB4O1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG5cbiAgICAudG9kby1saXN0LWxhc3QtdG9kbyB7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICBzcGFuIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDhweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAudG9kby1saXN0LWhlYWRlci1jb2xvcnMge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIC50b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA2cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXItcm91bmQtY29sb3Ige1xuICAgICAgICAgIHdpZHRoOiAxNnB4O1xuICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgLmJnLWJsdWUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ibHVlfTtcbiAgfVxuICAuYmctZ3JlZW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5ncmVlbn07XG4gIH1cbiAgLmJnLW5hdnkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5uYXZ5fTtcbiAgfVxuICAuYmctb3JhbmdlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUub3JhbmdlfTtcbiAgfVxuICAuYmctcmVkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUucmVkfTtcbiAgfVxuICAuYmcteWVsbG93IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUueWVsbG93fTtcbiAgfVxuXG4gIC50b2RvLWxpc3Qge1xuICAgIC50b2RvLWl0ZW0ge1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogNTJweDtcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG4gICAgICAudG9kby1sZWZ0LXNpZGUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAudG9kby1jb2xvci1ibG9jayB7XG4gICAgICAgICAgd2lkdGg6IDEycHg7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGVja2VkLXRvZG8tdGV4dCB7XG4gICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5fTtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgICAgICAgfVxuICAgICAgICAudG9kby10ZXh0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTJweDtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC50b2RvLXJpZ2h0LXNpZGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEycHg7XG4gICAgICAgIHN2ZyB7XG4gICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE2cHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50b2RvLXRyYXNoLWNhbiB7XG4gICAgICAgICAgd2lkdGg6IDI2cHg7XG4gICAgICAgICAgcGF0aCB7XG4gICAgICAgICAgICBmaWxsOiAke3BhbGV0dGUuZGVlcF9yZWR9O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudG9kby1jaGVjay1tYXJrIHtcbiAgICAgICAgICBmaWxsOiAke3BhbGV0dGUuZGVlcF9ncmVlbn07XG4gICAgICAgIH1cbiAgICAgICAgLnRvZG8tYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogMjBweDtcbiAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5gXG5jb25zdCBUb2RvTGlzdDogUmVhY3QuRkM8SVByb3BzPiA9ICh7dG9kb3N9KSA9PiB7XG4gIGNvbnN0IFtsb2NhbFRvZG9zLCBzZXRMb2NhbFRvZG9zXSA9IFJlYWN0LnVzZVN0YXRlKHRvZG9zKVxuICAvL+uwqeuylTFcbiAgLy8gY29uc3QgZ2V0VG9kb0NvbG9yTnVtcyA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgLy8gICBsZXQgcmVkID0gMFxuICAvLyAgIGxldCBvcmFnZSA9IDBcbiAgLy8gICBsZXQgeWVsbG93ID0gMFxuICAvLyAgIGxldCBncmVlbiA9IDBcbiAgLy8gICBsZXQgYmx1ZSA9IDBcbiAgLy8gICBsZXQgbmF2eSA9IDBcbiAgLy8gICB0b2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gIC8vICAgICBzd2l0Y2ggKHRvZG8uY29sb3IpIHtcbiAgLy8gICAgICAgY2FzZSAncmVkJzpcbiAgLy8gICAgICAgICByZWQgKz0gMVxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICAgIGNhc2UgJ29yYWdlJzpcbiAgLy8gICAgICAgICBvcmFnZSArPSAxXG4gIC8vICAgICAgICAgYnJlYWtcbiAgLy8gICAgICAgY2FzZSAneWVsbG93JzpcbiAgLy8gICAgICAgICB5ZWxsb3cgKz0gMVxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICAgIGNhc2UgJ2dyZWVuJzpcbiAgLy8gICAgICAgICBncmVlbiArPSAxXG4gIC8vICAgICAgICAgYnJlYWtcbiAgLy8gICAgICAgY2FzZSAnYmx1ZSc6XG4gIC8vICAgICAgICAgYmx1ZSArPSAxXG4gIC8vICAgICAgICAgYnJlYWtcbiAgLy8gICAgICAgY2FzZSAnbmF2eSc6XG4gIC8vICAgICAgICAgbmF2eSArPSAxXG4gIC8vICAgICAgICAgYnJlYWtcbiAgLy8gICAgICAgZGVmYXVsdDpcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgfVxuICAvLyAgIH0pXG4gIC8vICAgcmV0dXJuIHtyZWQsIG9yYWdlLCB5ZWxsb3csIGdyZWVuLCBibHVlLCBuYXZ5fVxuICAvLyB9LCBbdG9kb3NdKVxuICAvLyBjb25zdCB0b2RvQ29sb3JOdW1zID0gdXNlTWVtbyhnZXRUb2RvQ29sb3JOdW1zLCBbdG9kb3NdKVxuICBjb25zdCB0b2RvQ29sb3JOdW1zMiA9IHVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IGNvbG9yczogT2JqZWN0SW5kZXhUeXBlID0ge31cbiAgICBsb2NhbFRvZG9zLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICAgIGNvbnN0IHZhbHVlID0gY29sb3JzW3RvZG8uY29sb3JdXG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIC8v7ZW064u57YKk7J2YIOqwkuydtCDsl4bsl4jri6TrqbRcbiAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSAxXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IHZhbHVlICsgMVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIGNvbG9yc1xuICB9LCBbbG9jYWxUb2Rvc10pXG5cbiAgLy9Ub2RvIGNoZWNrIOq4sOuKpVxuICBjb25zdCBjaGVja1RvZG8gPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjaGVja1RvZG9BUEkoaWQpXG4gICAgICBjb25zb2xlLmxvZygn7LK07YGs7ZWY7JiA7Iq164uI64ukLicpXG4gICAgICAvL+yytO2BrOulvCDtlZzrkqQgVUkg66W8IOyXheuNsOydtO2KuCDtlZjripQg67Cp67KVIDEo642w7J207YSwIOuLpOyLnOuwm+q4sClcbiAgICAgIC8v7IOI66Gc6rOg7Lmo7J2EIO2Gte2VmOyXrCDtjpjsnbTsp4DsoITssrTrpbwg7JWE7JiIIOyDiOuhnCDrsJvslYTsmKTripTqsoNcbiAgICAgIC8vUm91dGVyLnJlbG9hZCgpXG5cbiAgICAgIC8v67Cp67KVMi4g7Y6Y7J207KeA7KCE7LK066W8IOuLpOyLnCDsg4jroZzrtojrn6zsmKTquLDrs7Tri6TripQgLCAgcHVzaCDrpbwg7J207Jqp7ZWY7JesLCBwdXNo66GcICgnLycp66W8IO2VmOuptCDtjpjsnbTsp4Ag7KCE7LK066W8IOuLpOyLnCDrtojrn6zsmKTsp4DslYrqs6Ag642w7J207YSw66W8IOuwm+ydhOyImOyeiOuLpC5cbiAgICAgIC8v7KCE7LK0IOyDiOuhnOqzoOy5qOyXhuydtOuPhCDrjbDsnbTthLDrpbwg7IOI66Gc67Cb7J2E7IiY7J6I7J2MXG4gICAgICAvL3B1c2jtlajsiJjrpbwg7J207Jqp7ZWY7JesIHNldFNlcnZlclNpZGVQcm9wc+ulvCDsi6TtlontlbTshJwg642w7J207YSw66W8IOuLpOyLnCDrsJvslYTsmKTripTrsKnrspXsnLzroZztlZjqsqDri6QuXG4gICAgICAvL+q3vOuNsCDsnbTrsKnrspXrj4Qg67aI7ZWE7JqU7ZWcIOuEpO2KuOybjO2BrOyalOyyreydhCDtlYTsmpTroZztlZjrr4DroZwg6rCc7ISg7J20IO2VhOyalO2VnCDrsKnrspXsnoRcbiAgICAgIC8vIFJvdXRlci5wdXNoKCcvJylcblxuICAgICAgLy/rsKnrspUzICAsIOychOydmCDrsKnrspUgMeqzvCDrsKnrspUy64qUIOuzgOqyveyLnO2CqCDrjbDsnbTthLDrpbwsIGFwaeulvCDthrXtlbTshJwg7IOI66Gc67Cb7JWE7JmA7IScIOuwmOyYgeqysOqzvOulvCDrs7Tsl6zspIDri6QuXG4gICAgICAvL+2VmOyngOunjCDrjbDsnbTthLDrpbwg7IOI66Gc67aI65+s7Jik7KeAIOyViuqzoCDrt7Drpbwg67OA7ZmU7Iuc7YKk64qUIOuwqeuylSAz6rCAIOygnOydvOyii+uLpC5cbiAgICAgIGNvbnN0IG5ld1RvZG9zID0gbG9jYWxUb2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgaWYgKHRvZG8uaWQgPT09IGlkKSB7XG4gICAgICAgICAgcmV0dXJuIHsuLi50b2RvLCBjaGVja2VkOiAhdG9kby5jaGVja2VkfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0b2RvXG4gICAgICB9KVxuICAgICAgc2V0TG9jYWxUb2RvcyhuZXdUb2RvcylcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBjb25zb2xlLmxvZyhlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxpc3QtaGVhZGVyJz5cbiAgICAgICAgPHAgY2xhc3NOYW1lPSd0b2RvLWxpc3QtbGFzdC10b2RvJz5cbiAgICAgICAgICDrgqjsnYAgVE9ETyA8c3Bhbj57bG9jYWxUb2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxpc3QtaGVhZGVyLWNvbG9ycyc+XG4gICAgICAgICAgey8qIE9iamVjdC5rZXlzKCnrpbwg7J207Jqp7ZWY66m0IOqwneyytOydmCDtgqTqsJLrk6TsnYQg67Cw7Je066GcIOyWu+ydhOyImOqwgOyeiOuLpC4gKi99XG4gICAgICAgICAge09iamVjdC5rZXlzKHRvZG9Db2xvck51bXMyKS5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIGJnLSR7Y29sb3J9YH0gLz5cbiAgICAgICAgICAgICAgPHA+e3RvZG9Db2xvck51bXMyW2NvbG9yXX3qsJw8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHVsIGNsYXNzTmFtZT0ndG9kby1saXN0Jz5cbiAgICAgICAge2xvY2FsVG9kb3MubWFwKCh0b2RvKSA9PiAoXG4gICAgICAgICAgPGxpIGNsYXNzTmFtZT0ndG9kby1pdGVtJyBrZXk9e3RvZG8uaWR9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGVmdC1zaWRlJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b2RvLWNvbG9yLWJsb2NrIGJnLSR7dG9kby5jb2xvcn1gfSAvPlxuICAgICAgICAgICAgICA8cFxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHRvZG8tdGV4dCAke1xuICAgICAgICAgICAgICAgICAgdG9kby5jaGVja2VkID8gJ2NoZWNrZWQtdG9kby10ZXh0JyA6ICcnXG4gICAgICAgICAgICAgICAgfWB9PlxuICAgICAgICAgICAgICAgIHt0b2RvLnRleHR9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tcmlnaHQtc2lkZSc+XG4gICAgICAgICAgICAgIHt0b2RvLmNoZWNrZWQgJiYgKFxuICAgICAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgICAgICA8VHJhc2hJY29uIGNsYXNzTmFtZT0ndG9kby10cmFzaC1jYW4nIG9uQ2xpY2s9eygpID0+IHt9fSAvPlxuICAgICAgICAgICAgICAgICAgPENoZWNrSWNvblxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RvZG8tY2hlY2stbWFyaydcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgIDwvPlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICB7IXRvZG8uY2hlY2tlZCAmJiAoXG4gICAgICAgICAgICAgICAgPGJ1dHRvblxuICAgICAgICAgICAgICAgICAgdHlwZT0nYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0b2RvLWJ1dHRvbidcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHt9fVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2xpPlxuICAgICAgICApKX1cbiAgICAgIDwvdWw+XG4gICAgPC9Db250YWluZXI+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVG9kb0xpc3RcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZU1lbW8iLCJzdHlsZWQiLCJwYWxldHRlIiwiVHJhc2hJY29uIiwiQ2hlY2tJY29uIiwiY2hlY2tUb2RvQVBJIiwiQ29udGFpbmVyIiwiZGl2IiwiZ3JheSIsImJsdWUiLCJncmVlbiIsIm5hdnkiLCJvcmFuZ2UiLCJyZWQiLCJ5ZWxsb3ciLCJkZWVwX3JlZCIsImRlZXBfZ3JlZW4iLCJUb2RvTGlzdCIsInRvZG9zIiwidXNlU3RhdGUiLCJsb2NhbFRvZG9zIiwic2V0TG9jYWxUb2RvcyIsInRvZG9Db2xvck51bXMyIiwiY29sb3JzIiwiZm9yRWFjaCIsInRvZG8iLCJ2YWx1ZSIsImNvbG9yIiwiY2hlY2tUb2RvIiwiaWQiLCJjb25zb2xlIiwibG9nIiwibmV3VG9kb3MiLCJtYXAiLCJjaGVja2VkIiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImluZGV4IiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ })

});