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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ \"./node_modules/next/node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _styles_palette__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/palette */ \"./styles/palette.ts\");\n/* harmony import */ var _lib_api_todo__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/api/todo */ \"./lib/api/todo.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _jsxFileName = \"/Users/leegunhee/Desktop/next-todo/components/TodoList.tsx\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\nvar TrashIcon = function TrashIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"path\", {\n      d: \"M9 3h6V1.25a.25.25 0 0 0-.25-.25h-5.5a.25.25 0 0 0-.25.25V3zm11 1H4v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V4zM10 7.5a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12zm5 0a.5.5 0 0 0-1 0v12a.5.5 0 0 0 1 0v-12zM23 3v1h-2v18a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4H1V3h7V1a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2h7z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c2 = TrashIcon;\nTrashIcon.defaultProps = {\n  width: \"24\",\n  height: \"24\",\n  xmlns: \"http://www.w3.org/2000/svg\",\n  fillRule: \"evenodd\",\n  clipRule: \"evenodd\"\n};\n\nvar CheckIcon = function CheckIcon(props) {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"svg\", _objectSpread(_objectSpread({}, props), {}, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"path\", {\n      d: \"M20.285 2 9 13.567 3.714 8.556 0 12.272 9 21 24 5.715z\"\n    }, void 0, false, void 0, this)\n  }), void 0, false, void 0, this);\n};\n\n_c3 = CheckIcon;\nCheckIcon.defaultProps = {\n  xmlns: \"http://www.w3.org/2000/svg\",\n  width: \"24\",\n  height: \"24\"\n};\n\n //typeScript의 경우 javascript와는달리\n// 키에 대한 타입까지도 정의해야함\n// object.a 는 object[a]와 동일한데,\n// typescript의 경우 대괄호표기법을 사용할때 해당 키에 대한 타입도 지정해줘야함\n// object[a]에서 a가 무슨타입인지, object[a]가 무슨타입을 반환하는지\n//두개를 명시해줘야함 대괄호 표기법을쓸거면\n\n\n\n\nvar TodoList = function TodoList(_ref) {\n  _s();\n\n  var todos = _ref.todos;\n  var Container = styled_components__WEBPACK_IMPORTED_MODULE_8__[\"default\"].div.withConfig({\n    displayName: \"TodoList__Container\",\n    componentId: \"sc-1t8agvw-0\"\n  })([\"width:100%;.todo-list-header{padding:12px;border-bottom:1px solid \", \";.todo-list-last-todo{font-size:14px;span{margin-left:8px;}}.todo-list-header-colors{display:flex;.todo-list-header-color-num{display:flex;margin-right:8px;p{font-size:14px;line-height:16px;margin:0;margin-left:6px;}.todo-list-header-round-color{width:16px;height:16px;border-radius:50%;}}}}.bg-blue{background-color:\", \";}.bg-green{background-color:\", \";}.bg-navy{background-color:\", \";}.bg-orange{background-color:\", \";}.bg-red{background-color:\", \";}.bg-yellow{background-color:\", \";}.todo-list{.todo-item{display:flex;justify-content:space-between;align-items:center;width:100%;height:52px;border-bottom:1px solid \", \";.todo-left-side{width:100%;height:100%;display:flex;align-items:center;.todo-color-block{width:12px;height:100%;}.checked-todo-text{color:\", \";text-decoration:line-through;}.todo-text{margin-left:12px;font-size:16px;}}.todo-right-side{display:flex;margin-right:12px;svg{&:first-child{margin-right:16px;}}.todo-trash-can{width:26px;path{fill:\", \";}}.todo-check-mark{fill:\", \";}.todo-button{width:20px;height:20px;border-radius:50%;border:1px solid \", \";background-color:transparent;outline:none;}}}}\"], _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].blue, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].green, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].navy, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].orange, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].red, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].yellow, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deep_red, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].deep_green, _styles_palette__WEBPACK_IMPORTED_MODULE_4__[\"default\"].gray);\n  var todoColorNums2 = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(function () {\n    var colors = {};\n    todos.forEach(function (todo) {\n      var value = colors[todo.color];\n\n      if (!value) {\n        //해당키의 값이 없었다면\n        colors[\"\".concat(todo.color)] = 1;\n      } else {\n        colors[\"\".concat(todo.color)] = value + 1;\n      }\n    });\n    return colors;\n  }, [todos]); //Todo check 기능\n\n  var checkTodo = /*#__PURE__*/function () {\n    var _ref2 = (0,_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().mark(function _callee(id) {\n      return _Users_leegunhee_Desktop_next_todo_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default().wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              _context.prev = 0;\n              _context.next = 3;\n              return (0,_lib_api_todo__WEBPACK_IMPORTED_MODULE_6__.checkTodoAPI)(id);\n\n            case 3:\n              console.log('체크하였습니다.'); //체크를 한뒤 UI 를 업데이트 하는 방법 1(데이터 다시받기)\n              //새로고침을 통하여 페이지전체를 아예 새로 받아오는것\n              //Router.reload()\n              //방법2. push 를 이용하여, 페이지전체를 다시 새로불러오기보다는 , push함수를 이용하여 setSer\n\n              next_router__WEBPACK_IMPORTED_MODULE_7___default().push('/');\n              _context.next = 10;\n              break;\n\n            case 7:\n              _context.prev = 7;\n              _context.t0 = _context[\"catch\"](0);\n              console.log(_context.t0);\n\n            case 10:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee, null, [[0, 7]]);\n    }));\n\n    return function checkTodo(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }(); //방법1\n  // const getTodoColorNums = useCallback(() => {\n  //   let red = 0\n  //   let orage = 0\n  //   let yellow = 0\n  //   let green = 0\n  //   let blue = 0\n  //   let navy = 0\n  //   todos.forEach((todo) => {\n  //     switch (todo.color) {\n  //       case 'red':\n  //         red += 1\n  //         break\n  //       case 'orage':\n  //         orage += 1\n  //         break\n  //       case 'yellow':\n  //         yellow += 1\n  //         break\n  //       case 'green':\n  //         green += 1\n  //         break\n  //       case 'blue':\n  //         blue += 1\n  //         break\n  //       case 'navy':\n  //         navy += 1\n  //         break\n  //       default:\n  //         break\n  //     }\n  //   })\n  //   return {red, orage, yellow, green, blue, navy}\n  // }, [todos])\n  // const todoColorNums = useMemo(getTodoColorNums, [todos])\n\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Container, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n      className: \"todo-list-header\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n        className: \"todo-list-last-todo\",\n        children: [\"\\uB0A8\\uC740 TODO \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"span\", {\n          children: [todos.length, \"\\uAC1C\"]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 198,\n          columnNumber: 19\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 197,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"todo-list-header-colors\",\n        children: Object.keys(todoColorNums2).map(function (color, index) {\n          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"todo-list-header-color-num\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"todo-list-header-round-color bg-\".concat(color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 204,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n              children: [todoColorNums2[color], \"\\uAC1C\"]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 205,\n              columnNumber: 15\n            }, _this)]\n          }, index, true, {\n            fileName: _jsxFileName,\n            lineNumber: 203,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 200,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 196,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"ul\", {\n      className: \"todo-list\",\n      children: todos.map(function (todo) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"li\", {\n          className: \"todo-item\",\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"todo-left-side\",\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n              className: \"todo-color-block bg-\".concat(todo.color)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 215,\n              columnNumber: 15\n            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"p\", {\n              className: \"todo-text \".concat(todo.checked ? 'checked-todo-text' : ''),\n              children: todo.text\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 216,\n              columnNumber: 15\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 214,\n            columnNumber: 13\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n            className: \"todo-right-side\",\n            children: [todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {\n              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(TrashIcon, {\n                className: \"todo-trash-can\",\n                onClick: function onClick() {}\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 226,\n                columnNumber: 19\n              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(CheckIcon, {\n                className: \"todo-check-mark\",\n                onClick: function onClick() {\n                  checkTodo(todo.id);\n                }\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 227,\n                columnNumber: 19\n              }, _this)]\n            }, void 0, true), !todo.checked && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"button\", {\n              type: \"button\",\n              className: \"todo-button\",\n              onClick: function onClick() {}\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 236,\n              columnNumber: 17\n            }, _this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 223,\n            columnNumber: 13\n          }, _this)]\n        }, todo.id, true, {\n          fileName: _jsxFileName,\n          lineNumber: 213,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 211,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 195,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(TodoList, \"B+iFNIrBqIBMOLgcUF5WeuIq/Hc=\");\n\n_c = TodoList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TodoList);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"TodoList\");\n$RefreshReg$(_c2, \"TrashIcon\");\n$RefreshReg$(_c3, \"CheckIcon\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUEsNEJBRkosRUFZRyxDQUFDSixJQUFJLENBQUNhLE9BQU4saUJBQ0M7QUFDRSxrQkFBSSxFQUFDLFFBRFA7QUFFRSx1QkFBUyxFQUFDLGFBRlo7QUFHRSxxQkFBTyxFQUFFLG1CQUFNLENBQUU7QUFIbkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkY7QUFBQSxXQUErQmIsSUFBSSxDQUFDSSxFQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzREQsQ0FqT0Q7O0dBQU1wQjs7S0FBQUE7QUFtT04sK0RBQWVBLFFBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Ub2RvTGlzdC50c3g/MWM4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHt1c2VNZW1vLCB1c2VDYWxsYmFja30gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJ1xuaW1wb3J0IHBhbGV0dGUgZnJvbSAnLi4vc3R5bGVzL3BhbGV0dGUnXG5pbXBvcnQge1RvZG9UeXBlfSBmcm9tICcuLi90eXBlcy90b2RvLmQnXG5pbXBvcnQgVHJhc2hJY29uIGZyb20gJy4uL3B1YmxpYy9zdGF0aWNzL3N2Zy9pY190cmFzaC5zdmcnXG5pbXBvcnQgQ2hlY2tJY29uIGZyb20gJy4uL3B1YmxpYy9zdGF0aWNzL3N2Zy9pY19jaGVjay5zdmcnXG5pbXBvcnQge2NoZWNrVG9kb0FQSX0gZnJvbSAnLi4vbGliL2FwaS90b2RvJ1xuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcidcbi8vdHlwZVNjcmlwdOydmCDqsr3smrAgamF2YXNjcmlwdOyZgOuKlOuLrOumrFxuLy8g7YKk7JeQIOuMgO2VnCDtg4DsnoXquYzsp4Drj4Qg7KCV7J2Y7ZW07JW87ZWoXG4vLyBvYmplY3QuYSDripQgb2JqZWN0W2Fd7JmAIOuPmeydvO2VnOuNsCxcbi8vIHR5cGVzY3JpcHTsnZgg6rK97JqwIOuMgOq0hO2YuO2RnOq4sOuyleydhCDsgqzsmqntlaDrlYwg7ZW064u5IO2CpOyXkCDrjIDtlZwg7YOA7J6F64+EIOyngOygle2VtOykmOyVvO2VqFxuLy8gb2JqZWN0W2Fd7JeQ7IScIGHqsIAg66y07Iqo7YOA7J6F7J247KeALCBvYmplY3RbYV3qsIAg66y07Iqo7YOA7J6F7J2EIOuwmO2ZmO2VmOuKlOyngFxuLy/rkZDqsJzrpbwg66qF7Iuc7ZW07KSY7JW87ZWoIOuMgOq0hO2YuCDtkZzquLDrspXsnYTsk7jqsbDrqbRcbnR5cGUgT2JqZWN0SW5kZXhUeXBlID0ge1xuICBba2V5OiBzdHJpbmddOiBudW1iZXIgfCB1bmRlZmluZWRcbn1cblxuaW50ZXJmYWNlIElQcm9wcyB7XG4gIHRvZG9zOiBUb2RvVHlwZVtdXG59XG5cbmNvbnN0IFRvZG9MaXN0OiBSZWFjdC5GQzxJUHJvcHM+ID0gKHt0b2Rvc30pID0+IHtcbiAgY29uc3QgQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgICB3aWR0aDogMTAwJTtcbiAgICAudG9kby1saXN0LWhlYWRlciB7XG4gICAgICBwYWRkaW5nOiAxMnB4O1xuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcblxuICAgICAgLnRvZG8tbGlzdC1sYXN0LXRvZG8ge1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3JzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgLnRvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE2cHg7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9kby1saXN0LWhlYWRlci1yb3VuZC1jb2xvciB7XG4gICAgICAgICAgICB3aWR0aDogMTZweDtcbiAgICAgICAgICAgIGhlaWdodDogMTZweDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgLmJnLWJsdWUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmJsdWV9O1xuICAgIH1cbiAgICAuYmctZ3JlZW4ge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLmdyZWVufTtcbiAgICB9XG4gICAgLmJnLW5hdnkge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHtwYWxldHRlLm5hdnl9O1xuICAgIH1cbiAgICAuYmctb3JhbmdlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5vcmFuZ2V9O1xuICAgIH1cbiAgICAuYmctcmVkIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS5yZWR9O1xuICAgIH1cbiAgICAuYmcteWVsbG93IHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7cGFsZXR0ZS55ZWxsb3d9O1xuICAgIH1cblxuICAgIC50b2RvLWxpc3Qge1xuICAgICAgLnRvZG8taXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICR7cGFsZXR0ZS5ncmF5fTtcbiAgICAgICAgLnRvZG8tbGVmdC1zaWRlIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIC50b2RvLWNvbG9yLWJsb2NrIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMnB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgIH1cbiAgICAgICAgICAuY2hlY2tlZC10b2RvLXRleHQge1xuICAgICAgICAgICAgY29sb3I6ICR7cGFsZXR0ZS5ncmF5fTtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9kby10ZXh0IHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMnB4O1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAudG9kby1yaWdodC1zaWRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICAgICAgICBzdmcge1xuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgLnRvZG8tdHJhc2gtY2FuIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICAgICAgcGF0aCB7XG4gICAgICAgICAgICAgIGZpbGw6ICR7cGFsZXR0ZS5kZWVwX3JlZH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIC50b2RvLWNoZWNrLW1hcmsge1xuICAgICAgICAgICAgZmlsbDogJHtwYWxldHRlLmRlZXBfZ3JlZW59O1xuICAgICAgICAgIH1cbiAgICAgICAgICAudG9kby1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAke3BhbGV0dGUuZ3JheX07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICBgXG5cbiAgY29uc3QgdG9kb0NvbG9yTnVtczIgPSB1c2VNZW1vKCgpID0+IHtcbiAgICBjb25zdCBjb2xvcnM6IE9iamVjdEluZGV4VHlwZSA9IHt9XG4gICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgY29uc3QgdmFsdWUgPSBjb2xvcnNbdG9kby5jb2xvcl1cbiAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgLy/tlbTri7ntgqTsnZgg6rCS7J20IOyXhuyXiOuLpOuptFxuICAgICAgICBjb2xvcnNbYCR7dG9kby5jb2xvcn1gXSA9IDFcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbG9yc1tgJHt0b2RvLmNvbG9yfWBdID0gdmFsdWUgKyAxXG4gICAgICB9XG4gICAgfSlcbiAgICByZXR1cm4gY29sb3JzXG4gIH0sIFt0b2Rvc10pXG5cbiAgLy9Ub2RvIGNoZWNrIOq4sOuKpVxuICBjb25zdCBjaGVja1RvZG8gPSBhc3luYyAoaWQ6IG51bWJlcikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjaGVja1RvZG9BUEkoaWQpXG4gICAgICBjb25zb2xlLmxvZygn7LK07YGs7ZWY7JiA7Iq164uI64ukLicpXG4gICAgICAvL+yytO2BrOulvCDtlZzrkqQgVUkg66W8IOyXheuNsOydtO2KuCDtlZjripQg67Cp67KVIDEo642w7J207YSwIOuLpOyLnOuwm+q4sClcbiAgICAgIC8v7IOI66Gc6rOg7Lmo7J2EIO2Gte2VmOyXrCDtjpjsnbTsp4DsoITssrTrpbwg7JWE7JiIIOyDiOuhnCDrsJvslYTsmKTripTqsoNcbiAgICAgIC8vUm91dGVyLnJlbG9hZCgpXG4gICAgICAvL+uwqeuylTIuIHB1c2gg66W8IOydtOyaqe2VmOyXrCwg7Y6Y7J207KeA7KCE7LK066W8IOuLpOyLnCDsg4jroZzrtojrn6zsmKTquLDrs7Tri6TripQgLCBwdXNo7ZWo7IiY66W8IOydtOyaqe2VmOyXrCBzZXRTZXJcbiAgICAgICBSb3V0ZXIucHVzaCgnLycpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICB9XG4gIH1cbiAgLy/rsKnrspUxXG4gIC8vIGNvbnN0IGdldFRvZG9Db2xvck51bXMgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gIC8vICAgbGV0IHJlZCA9IDBcbiAgLy8gICBsZXQgb3JhZ2UgPSAwXG4gIC8vICAgbGV0IHllbGxvdyA9IDBcbiAgLy8gICBsZXQgZ3JlZW4gPSAwXG4gIC8vICAgbGV0IGJsdWUgPSAwXG4gIC8vICAgbGV0IG5hdnkgPSAwXG4gIC8vICAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAvLyAgICAgc3dpdGNoICh0b2RvLmNvbG9yKSB7XG4gIC8vICAgICAgIGNhc2UgJ3JlZCc6XG4gIC8vICAgICAgICAgcmVkICs9IDFcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgICBjYXNlICdvcmFnZSc6XG4gIC8vICAgICAgICAgb3JhZ2UgKz0gMVxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICAgIGNhc2UgJ3llbGxvdyc6XG4gIC8vICAgICAgICAgeWVsbG93ICs9IDFcbiAgLy8gICAgICAgICBicmVha1xuICAvLyAgICAgICBjYXNlICdncmVlbic6XG4gIC8vICAgICAgICAgZ3JlZW4gKz0gMVxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICAgIGNhc2UgJ2JsdWUnOlxuICAvLyAgICAgICAgIGJsdWUgKz0gMVxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICAgIGNhc2UgJ25hdnknOlxuICAvLyAgICAgICAgIG5hdnkgKz0gMVxuICAvLyAgICAgICAgIGJyZWFrXG4gIC8vICAgICAgIGRlZmF1bHQ6XG4gIC8vICAgICAgICAgYnJlYWtcbiAgLy8gICAgIH1cbiAgLy8gICB9KVxuICAvLyAgIHJldHVybiB7cmVkLCBvcmFnZSwgeWVsbG93LCBncmVlbiwgYmx1ZSwgbmF2eX1cbiAgLy8gfSwgW3RvZG9zXSlcbiAgLy8gY29uc3QgdG9kb0NvbG9yTnVtcyA9IHVzZU1lbW8oZ2V0VG9kb0NvbG9yTnVtcywgW3RvZG9zXSlcbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGlzdC1oZWFkZXInPlxuICAgICAgICA8cCBjbGFzc05hbWU9J3RvZG8tbGlzdC1sYXN0LXRvZG8nPlxuICAgICAgICAgIOuCqOydgCBUT0RPIDxzcGFuPnt0b2Rvcy5sZW5ndGh96rCcPC9zcGFuPlxuICAgICAgICA8L3A+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxpc3QtaGVhZGVyLWNvbG9ycyc+XG4gICAgICAgICAgey8qIE9iamVjdC5rZXlzKCnrpbwg7J207Jqp7ZWY66m0IOqwneyytOydmCDtgqTqsJLrk6TsnYQg67Cw7Je066GcIOyWu+ydhOyImOqwgOyeiOuLpC4gKi99XG4gICAgICAgICAge09iamVjdC5rZXlzKHRvZG9Db2xvck51bXMyKS5tYXAoKGNvbG9yLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RvZG8tbGlzdC1oZWFkZXItY29sb3ItbnVtJyBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2B0b2RvLWxpc3QtaGVhZGVyLXJvdW5kLWNvbG9yIGJnLSR7Y29sb3J9YH0gLz5cbiAgICAgICAgICAgICAgPHA+e3RvZG9Db2xvck51bXMyW2NvbG9yXX3qsJw8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHVsIGNsYXNzTmFtZT0ndG9kby1saXN0Jz5cbiAgICAgICAge3RvZG9zLm1hcCgodG9kbykgPT4gKFxuICAgICAgICAgIDxsaSBjbGFzc05hbWU9J3RvZG8taXRlbScga2V5PXt0b2RvLmlkfT5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLWxlZnQtc2lkZSc+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgdG9kby1jb2xvci1ibG9jayBiZy0ke3RvZG8uY29sb3J9YH0gLz5cbiAgICAgICAgICAgICAgPHBcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2B0b2RvLXRleHQgJHtcbiAgICAgICAgICAgICAgICAgIHRvZG8uY2hlY2tlZCA/ICdjaGVja2VkLXRvZG8tdGV4dCcgOiAnJ1xuICAgICAgICAgICAgICAgIH1gfT5cbiAgICAgICAgICAgICAgICB7dG9kby50ZXh0fVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSd0b2RvLXJpZ2h0LXNpZGUnPlxuICAgICAgICAgICAgICB7dG9kby5jaGVja2VkICYmIChcbiAgICAgICAgICAgICAgICA8PlxuICAgICAgICAgICAgICAgICAgPFRyYXNoSWNvbiBjbGFzc05hbWU9J3RvZG8tdHJhc2gtY2FuJyBvbkNsaWNrPXsoKSA9PiB7fX0gLz5cbiAgICAgICAgICAgICAgICAgIDxDaGVja0ljb25cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPSd0b2RvLWNoZWNrLW1hcmsnXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICBjaGVja1RvZG8odG9kby5pZClcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgPC8+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHshdG9kby5jaGVja2VkICYmIChcbiAgICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgICB0eXBlPSdidXR0b24nXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9J3RvZG8tYnV0dG9uJ1xuICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge319XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvbGk+XG4gICAgICAgICkpfVxuICAgICAgPC91bD5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUb2RvTGlzdFxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlTWVtbyIsInN0eWxlZCIsInBhbGV0dGUiLCJUcmFzaEljb24iLCJDaGVja0ljb24iLCJjaGVja1RvZG9BUEkiLCJSb3V0ZXIiLCJUb2RvTGlzdCIsInRvZG9zIiwiQ29udGFpbmVyIiwiZGl2IiwiZ3JheSIsImJsdWUiLCJncmVlbiIsIm5hdnkiLCJvcmFuZ2UiLCJyZWQiLCJ5ZWxsb3ciLCJkZWVwX3JlZCIsImRlZXBfZ3JlZW4iLCJ0b2RvQ29sb3JOdW1zMiIsImNvbG9ycyIsImZvckVhY2giLCJ0b2RvIiwidmFsdWUiLCJjb2xvciIsImNoZWNrVG9kbyIsImlkIiwiY29uc29sZSIsImxvZyIsInB1c2giLCJsZW5ndGgiLCJPYmplY3QiLCJrZXlzIiwibWFwIiwiaW5kZXgiLCJjaGVja2VkIiwidGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/TodoList.tsx\n");

/***/ })

});