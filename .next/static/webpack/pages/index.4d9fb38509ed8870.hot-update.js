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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var _lib_api_todo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/api/todo */ \"./lib/api/todo.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\nvar _jsxFileName = \"/Users/leegunhee/Desktop/next-todo/components/TodoList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\nvar TrashIcon = function TrashIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"path\", {\n      d: \"M9 3h6V1.25a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V3zm11 1H4v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4zM10 7.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12zm5 0a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12zM23 3v1h-2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4H1V3h7V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h7z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c3 = TrashIcon;\nTrashIcon.defaultProps = {\n  width: \"24\",\n  height: \"24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fillRule: \"evenodd\",\n  clipRule: \"evenodd\"\n};\n\nvar CheckIcon = function CheckIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"path\", {\n      d: \"M20.285 2 9 13.567 3.714 8.556 0 12.272 9 21 24 5.715z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c4 = CheckIcon;\nCheckIcon.defaultProps = {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  width: \"24\",\n  height: \"24\"\n};\n\n\n\nvar Container = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n  displayName: \"TodoList__Container\",\n  componentId: \"sc-1t8agvw-0\"\n})([\"width:100%;.todo-list-header{padding:12px;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;span{margin-left:8px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:26px;path{fill:\", \";}}.todo-check-mark{fill:\", \";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid \", \";background-color:transparent;outline:none;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_5__[\"default\"].gray);\n_c = Container;\n\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_4___default().useState(todos),\n      _React$useState2 = (0,_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_React$useState, 2),\n      localTodos = _React$useState2[0],\n      setLocalTodos = _React$useState2[1]; //방법1\n  // const getTodoColorNums = useCallback(() => {\n  //   let red = 0\n  //   let orage = 0\n  //   let yellow = 0\n  //   let green = 0\n  //   let blue = 0\n  //   let navy = 0\n  //   todos.forEach((todo) => {\n  //     switch (todo.color) {\n  //       case 'red':\n  //         red += 1\n  //         break\n  //       case 'orage':\n  //         orage += 1\n  //         break\n  //       case 'yellow':\n  //         yellow += 1\n  //         break\n  //       case 'green':\n  //         green += 1\n  //         break\n  //       case 'blue':\n  //         blue += 1\n  //         break\n  //       case 'navy':\n  //         navy += 1\n  //         break\n  //       default:\n  //         break\n  //     }\n  //   })\n  //   return {red, orage, yellow, green, blue, navy}\n  // }, [todos])\n  // const todoColorNums = useMemo(getTodoColorNums, [todos])\n\n\n  var todoColorNums2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useMemo)(function () {\n    var colors = {};\n    localTodos.forEach(function (todo) {\n      var value = colors[todo.color];\n\n      if (!value) {\n        //해당키의 값이 없었다면\n        colors[\"\".concat(todo.color)] = 1;\n      } else {\n        colors[\"\".concat(todo.color)] = value + 1;\n      }\n    });\n    return colors;\n  }, [localTodos]); //Todo check 기능\n\n  var checkTodo = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().mark(function _callee(id) {\n      var newTodos;\n      return _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return (0,_lib_api_todo__WEBPACK_IMPORTED_MODULE_7__.checkTodoAPI)(id);\n\n            case 3:\n              console.log('체크하였습니다.'); //체크를 한뒤 UI 를 업데이트 하는 방법 1(데이터 다시받기)\n              //새로고침을 통하여 페이지전체를 아예 새로 받아오는것\n              //Router.reload()\n              //방법2. 페이지전체를 다시 새로불러오기보다는 ,  push 를 이용하여, push로 ('/')를 하면 페이지 전체를 다시 불러오지않고 데이터를 받을수있다.\n              //전체 새로고침없이도 데이터를 새로받을수있음\n              //push함수를 이용하여 setServerSideProps를 실행해서 데이터를 다시 받아오는방법으로하겠다.\n              //근데 이방법도 불필요한 네트워크요청을 필요로하므로 개선이 필요한 방법임\n              // Router.push('/')\n              //방법3  \n\n              newTodos = localTodos.map(function (todo) {\n                if (todo.id === id) {\n                  return _objectSpread(_objectSpread({}, todo), {}, {\n                    checked: !todo.checked\n                  });\n                }\n\n                return todo;\n              });\n              setLocalTodos(newTodos);\n              _context.next = 11;\n              break;\n\n            case 8:\n              _context.prev = 8;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 11:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 8]]);\n    }));\n\n    return function checkTodo(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"span\", {\n          children: [localTodos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 211,\n          columnNumber: 19\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 210,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(todoColorNums2).map(function (color, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: \"todo-list-header-color-num\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n              className: \"todo-list-header-round-color bg-\".concat(color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 217,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n              children: [todoColorNums2[color], \"\\uAC1C\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 218,\n              columnNumber: 15\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 216,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 213,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 209,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"ul\", {\n      className: \"todo-list\",\n      children: localTodos.map(function (todo) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"li\", {\n          className: \"todo-item\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: \"todo-left-side\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n              className: \"todo-color-block bg-\".concat(todo.color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 228,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"p\", {\n              className: \"todo-text \".concat(todo.checked ? 'checked-todo-text' : ''),\n              children: todo.text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 229,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 227,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"div\", {\n            className: \"todo-right-side\",\n            children: [todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(TrashIcon, {\n                className: \"todo-trash-can\",\n                onClick: function onClick() {}\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 239,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(CheckIcon, {\n                className: \"todo-check-mark\",\n                onClick: function onClick() {\n                  checkTodo(todo.id);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 240,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true), !todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxDEV)(\"button\", {\n              type: \"button\",\n              className: \"todo-button\",\n              onClick: function onClick() {}\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 249,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 236,\n            columnNumber: 13\n          }, _this)]\n        }, todo.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 226,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 224,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 208,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TodoList, \"Rm1CfyDgP8m2ssYhFoRSQtgePrk=\");\n\n_c2 = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"Container\");\n$RefreshReg$(_c2, \"TodoList\");\n$RefreshReg$(_c3, \"TrashIcon\");\n$RefreshReg$(_c4, \"CheckIcon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFVRTtBQUFLLHFCQUFTLEVBQUMsaUJBQWY7QUFBQSx1QkFDR2QsSUFBSSxDQUFDUyxPQUFMLGlCQUNDO0FBQUEsc0NBQ0UsOERBQUMsU0FBRDtBQUFXLHlCQUFTLEVBQUMsZ0JBQXJCO0FBQXNDLHVCQUFPLEVBQUUsbUJBQU0sQ0FBRTtBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUUsOERBQUMsU0FBRDtBQUNFLHlCQUFTLEVBQUMsaUJBRFo7QUFFRSx1QkFBTyxFQUFFLG1CQUFNO0FBQ2JOLGtCQUFBQSxTQUFTLENBQUNILElBQUksQ0FBQ0ksRUFBTixDQUFUO0FBQ0Q7QUFKSDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUEsNEJBRkosRUFZRyxDQUFDSixJQUFJLENBQUNTLE9BQU4saUJBQ0M7QUFDRSxrQkFBSSxFQUFDLFFBRFA7QUFFRSx1QkFBUyxFQUFDLGFBRlo7QUFHRSxxQkFBTyxFQUFFLG1CQUFNLENBQUU7QUFIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkY7QUFBQSxXQUErQlQsSUFBSSxDQUFDSSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzREQsQ0FySUQ7O0dBQU1aOztNQUFBQTtBQXVJTiwrREFBZUEsUUFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvZG9MaXN0LnRzeD8xYzhjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwge3VzZU1lbW8sIHVzZUNhbGxiYWNrfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZWQgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnXG5pbXBvcnQgcGFsZXR0ZSBmcm9tICcuLi9zdHlsZXMvcGFsZXR0ZSdcbmltcG9ydCB7VG9kb1R5cGV9IGZyb20gJy4uL3R5cGVzL3RvZG8uZCdcbmltcG9ydCBUcmFzaEljb24gZnJvbSAnLi4vcHVibGljL3N0YXRpY3Mvc3ZnL2ljX3RyYXNoLnN2ZydcbmltcG9ydCBDaGVja0ljb24gZnJvbSAnLi4vcHVibGljL3N0YXRpY3Mvc3ZnL2ljX2NoZWNrLnN2ZydcbmltcG9ydCB7Y2hlY2tUb2RvQVBJfSBmcm9tICcuLi9saWIvYXBpL3RvZG8nXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJ1xuLy90eXBlU2NyaXB07J2YIOqyveyasCBqYXZhc2NyaXB07JmA64qU64us66asXG4vLyDtgqTsl5Ag64yA7ZWcIO2DgOyeheq5jOyngOuPhCDsoJXsnZjtlbTslbztlahcbi8vIG9iamVjdC5hIOuKlCBvYmplY3RbYV3smYAg64+Z7J287ZWc642wLFxuLy8gdHlwZXNjcmlwdOydmCDqsr3smrAg64yA6rSE7Zi47ZGc6riw67KV7J2EIOyCrOyaqe2VoOuVjCDtlbTri7kg7YKk7JeQIOuMgO2VnCDtg4DsnoXrj4Qg7KeA7KCV7ZW07KSY7JW87ZWoXG4vLyBvYmplY3RbYV3sl5DshJwgYeqwgCDrrLTsiqjtg4DsnoXsnbjsp4AsIG9iamVjdFthXeqwgCDrrLTsiqjtg4DsnoXsnYQg67CY7ZmY7ZWY64qU7KeAXG4vL+uRkOqwnOulvCDrqoXsi5ztlbTspJjslbztlagg64yA6rSE7Zi4IO2RnOq4sOuyleydhOyTuOqxsOuptFxudHlwZSBPYmplY3RJbmRleFR5cGUgPSB7XG4gIFtrZXk6IHN0cmluZ106IG51bWJlciB8IHVuZGVmaW5lZFxufVxuXG5pbnRlcmZhY2UgSVByb3BzIHtcbiAgdG9kb3M6IFRvZG9UeXBlW11cbn1cbmNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIHdpZHRoOiAxMDAlO1xuICAudG9kby1saXN0LWhlYWRlciB7XG4gICAgcGFkZGluZzogMTJweDtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xuXG4gICAgLnRvZG8tbGlzdC1sYXN0LXRvZG8ge1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3JzIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAudG9kby1saXN0LWhlYWRlci1jb2xvci1udW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICB9XG4gICAgICAgIC50b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIHtcbiAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICBoZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC5iZy1ibHVlIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuYmx1ZX07XG4gIH1cbiAgLmJnLWdyZWVuIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUuZ3JlZW59O1xuICB9XG4gIC5iZy1uYXZ5IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAke3BhbGV0dGUubmF2eX07XG4gIH1cbiAgLmJnLW9yYW5nZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm9yYW5nZX07XG4gIH1cbiAgLmJnLXJlZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnJlZH07XG4gIH1cbiAgLmJnLXllbGxvdyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLnllbGxvd307XG4gIH1cblxuICAudG9kby1saXN0IHtcbiAgICAudG9kby1pdGVtIHtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDUycHg7XG4gICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJHtwYWxldHRlLmdyYXl9O1xuICAgICAgLnRvZG8tbGVmdC1zaWRlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLnRvZG8tY29sb3ItYmxvY2sge1xuICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2hlY2tlZC10b2RvLXRleHQge1xuICAgICAgICAgIGNvbG9yOiAke3BhbGV0dGUuZ3JheX07XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XG4gICAgICAgIH1cbiAgICAgICAgLnRvZG8tdGV4dCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEycHg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAudG9kby1yaWdodC1zaWRlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICBzdmcge1xuICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudG9kby10cmFzaC1jYW4ge1xuICAgICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICAgIHBhdGgge1xuICAgICAgICAgICAgZmlsbDogJHtwYWxldHRlLmRlZXBfcmVkfTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnRvZG8tY2hlY2stbWFyayB7XG4gICAgICAgICAgZmlsbDogJHtwYWxldHRlLmRlZXBfZ3JlZW59O1xuICAgICAgICB9XG4gICAgICAgIC50b2RvLWJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuYFxuY29uc3QgVG9kb0xpc3Q6IFJlYWN0LkZDPElQcm9wcz4gPSAoe3RvZG9zfSkgPT4ge1xuICBjb25zdCBbbG9jYWxUb2Rvcywgc2V0TG9jYWxUb2Rvc10gPSBSZWFjdC51c2VTdGF0ZSh0b2RvcylcbiAgLy/rsKnrspUxXG4gIC8vIGNvbnN0IGdldFRvZG9Db2xvck51bXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gIC8vICAgbGV0IHJlZCA9IDBcbiAgLy8gICBsZXQgb3JhZ2UgPSAwXG4gIC8vICAgbGV0IHllbGxvdyA9IDBcbiAgLy8gICBsZXQgZ3JlZW4gPSAwXG4gIC8vICAgbGV0IGJsdWUgPSAwXG4gIC8vICAgbGV0IG5hdnkgPSAwXG4gIC8vICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAvLyAgICAgc3dpdGNoICh0b2RvLmNvbG9yKSB7XG4gIC8vICAgICAgIGNhc2UgJ3JlZCc6XG4gIC8vICAgICAgICAgcmVkICs9IDFcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgICBjYXNlICdvcmFnZSc6XG4gIC8vICAgICAgICAgb3JhZ2UgKz0gMVxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICAgIGNhc2UgJ3llbGxvdyc6XG4gIC8vICAgICAgICAgeWVsbG93ICs9IDFcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgICBjYXNlICdncmVlbic6XG4gIC8vICAgICAgICAgZ3JlZW4gKz0gMVxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICAgIGNhc2UgJ2JsdWUnOlxuICAvLyAgICAgICAgIGJsdWUgKz0gMVxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICAgIGNhc2UgJ25hdnknOlxuICAvLyAgICAgICAgIG5hdnkgKz0gMVxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICAgIGRlZmF1bHQ6XG4gIC8vICAgICAgICAgYnJlYWtcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuICAvLyAgIHJldHVybiB7cmVkLCBvcmFnZSwgeWVsbG93LCBncmVlbiwgYmx1ZSwgbmF2eX1cbiAgLy8gfSwgW3RvZG9zXSlcbiAgLy8gY29uc3QgdG9kb0NvbG9yTnVtcyA9IHVzZU1lbW8oZ2V0VG9kb0NvbG9yTnVtcywgW3RvZG9zXSlcbiAgY29uc3QgdG9kb0NvbG9yTnVtczIgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjb2xvcnM6IE9iamVjdEluZGV4VHlwZSA9IHt9XG4gICAgbG9jYWxUb2Rvcy5mb3JFYWNoKCh0b2RvKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZSA9IGNvbG9yc1t0b2RvLmNvbG9yXVxuICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAvL+2VtOuLue2CpOydmCDqsJLsnbQg7JeG7JeI64uk66m0XG4gICAgICAgIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gMVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29sb3JzW2Ake3RvZG8uY29sb3J9YF0gPSB2YWx1ZSArIDFcbiAgICAgIH1cbiAgICB9KVxuICAgIHJldHVybiBjb2xvcnNcbiAgfSwgW2xvY2FsVG9kb3NdKVxuXG4gIC8vVG9kbyBjaGVjayDquLDriqVcbiAgY29uc3QgY2hlY2tUb2RvID0gYXN5bmMgKGlkOiBudW1iZXIpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY2hlY2tUb2RvQVBJKGlkKVxuICAgICAgY29uc29sZS5sb2coJ+yytO2BrO2VmOyYgOyKteuLiOuLpC4nKVxuICAgICAgLy/ssrTtgazrpbwg7ZWc65KkIFVJIOulvCDsl4XrjbDsnbTtirgg7ZWY64qUIOuwqeuylSAxKOuNsOydtO2EsCDri6Tsi5zrsJvquLApXG4gICAgICAvL+yDiOuhnOqzoOy5qOydhCDthrXtlZjsl6wg7Y6Y7J207KeA7KCE7LK066W8IOyVhOyYiCDsg4jroZwg67Cb7JWE7Jik64qU6rKDXG4gICAgICAvL1JvdXRlci5yZWxvYWQoKVxuXG4gICAgICAvL+uwqeuylTIuIO2OmOydtOyngOyghOyytOulvCDri6Tsi5wg7IOI66Gc67aI65+s7Jik6riw67O064uk64qUICwgIHB1c2gg66W8IOydtOyaqe2VmOyXrCwgcHVzaOuhnCAoJy8nKeulvCDtlZjrqbQg7Y6Y7J207KeAIOyghOyytOulvCDri6Tsi5wg67aI65+s7Jik7KeA7JWK6rOgIOuNsOydtO2EsOulvCDrsJvsnYTsiJjsnojri6QuXG4gICAgICAvL+yghOyytCDsg4jroZzqs6Dsuajsl4bsnbTrj4Qg642w7J207YSw66W8IOyDiOuhnOuwm+ydhOyImOyeiOydjFxuICAgICAgLy9wdXNo7ZWo7IiY66W8IOydtOyaqe2VmOyXrCBzZXRTZXJ2ZXJTaWRlUHJvcHPrpbwg7Iuk7ZaJ7ZW07IScIOuNsOydtO2EsOulvCDri6Tsi5wg67Cb7JWE7Jik64qU67Cp67KV7Jy866Gc7ZWY6rKg64ukLlxuICAgICAgLy/qt7zrjbAg7J2067Cp67KV64+EIOu2iO2VhOyalO2VnCDrhKTtirjsm4ztgazsmpTssq3snYQg7ZWE7JqU66Gc7ZWY66+A66GcIOqwnOyEoOydtCDtlYTsmpTtlZwg67Cp67KV7J6EXG4gICAgICAvLyBSb3V0ZXIucHVzaCgnLycpXG5cbiAgICAgIC8v67Cp67KVMyAgXG4gICAgICBjb25zdCBuZXdUb2RvcyA9IGxvY2FsVG9kb3MubWFwKCh0b2RvKSA9PiB7XG4gICAgICAgIGlmICh0b2RvLmlkID09PSBpZCkge1xuICAgICAgICAgIHJldHVybiB7Li4udG9kbywgY2hlY2tlZDogIXRvZG8uY2hlY2tlZH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kb1xuICAgICAgfSlcbiAgICAgIHNldExvY2FsVG9kb3MobmV3VG9kb3MpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1saXN0LWhlYWRlcic+XG4gICAgICAgIDxwIGNsYXNzTmFtZT0ndG9kby1saXN0LWxhc3QtdG9kbyc+XG4gICAgICAgICAg64Ko7J2AIFRPRE8gPHNwYW4+e2xvY2FsVG9kb3MubGVuZ3RofeqwnDwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndG9kby1saXN0LWhlYWRlci1jb2xvcnMnPlxuICAgICAgICAgIHsvKiBPYmplY3Qua2V5cygp66W8IOydtOyaqe2VmOuptCDqsJ3ssrTsnZgg7YKk6rCS65Ok7J2EIOuwsOyXtOuhnCDslrvsnYTsiJjqsIDsnojri6QuICovfVxuICAgICAgICAgIHtPYmplY3Qua2V5cyh0b2RvQ29sb3JOdW1zMikubWFwKChjb2xvciwgaW5kZXgpID0+IChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxpc3QtaGVhZGVyLWNvbG9yLW51bScga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciBiZy0ke2NvbG9yfWB9IC8+XG4gICAgICAgICAgICAgIDxwPnt0b2RvQ29sb3JOdW1zMltjb2xvcl196rCcPC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx1bCBjbGFzc05hbWU9J3RvZG8tbGlzdCc+XG4gICAgICAgIHtsb2NhbFRvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3RvZG8taXRlbScga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxlZnQtc2lkZSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1jb2xvci1ibG9jayBiZy0ke3RvZG8uY29sb3J9YH0gLz5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0b2RvLXRleHQgJHtcbiAgICAgICAgICAgICAgICAgIHRvZG8uY2hlY2tlZCA/ICdjaGVja2VkLXRvZG8tdGV4dCcgOiAnJ1xuICAgICAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAgICB7dG9kby50ZXh0fVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLXJpZ2h0LXNpZGUnPlxuICAgICAgICAgICAgICB7dG9kby5jaGVja2VkICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiBjbGFzc05hbWU9J3RvZG8tdHJhc2gtY2FuJyBvbkNsaWNrPXsoKSA9PiB7fX0gLz5cbiAgICAgICAgICAgICAgICAgIDxDaGVja0ljb25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0b2RvLWNoZWNrLW1hcmsnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja1RvZG8odG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHshdG9kby5jaGVja2VkICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RvZG8tYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTWVtbyIsInN0eWxlZCIsInBhbGV0dGUiLCJUcmFzaEljb24iLCJDaGVja0ljb24iLCJjaGVja1RvZG9BUEkiLCJDb250YWluZXIiLCJkaXYiLCJncmF5IiwiYmx1ZSIsImdyZWVuIiwibmF2eSIsIm9yYW5nZSIsInJlZCIsInllbGxvdyIsImRlZXBfcmVkIiwiZGVlcF9ncmVlbiIsIlRvZG9MaXN0IiwidG9kb3MiLCJ1c2VTdGF0ZSIsImxvY2FsVG9kb3MiLCJzZXRMb2NhbFRvZG9zIiwidG9kb0NvbG9yTnVtczIiLCJjb2xvcnMiLCJmb3JFYWNoIiwidG9kbyIsInZhbHVlIiwiY29sb3IiLCJjaGVja1RvZG8iLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJuZXdUb2RvcyIsIm1hcCIsImNoZWNrZWQiLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwiaW5kZXgiLCJ0ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ })

});