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
exports.id = "pages/api/todos/[id]";
exports.ids = ["pages/api/todos/[id]"];
exports.modules = {

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "./lib/data/index.ts":
/*!***************************!*\
  !*** ./lib/data/index.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo */ \"./lib/data/todo.ts\");\n//data폴더는 서버쪽 api만드는 곳에서 현재 우리는 DB가 없으니, 대용으로 json에서 data를 긁어오기위해 필요한 api들임\n\nconst Data = {\n  todo: _todo__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Data);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGF0YS9pbmRleC50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFBO0FBQ0E7QUFFQSxNQUFNQyxJQUFJLEdBQUc7QUFBQ0QsRUFBQUEsSUFBSUEsK0NBQUFBO0FBQUwsQ0FBYjtBQUVBLGlFQUFlQyxJQUFmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vbGliL2RhdGEvaW5kZXgudHM/YTI1MCJdLCJzb3VyY2VzQ29udGVudCI6WyIvL2RhdGHtj7TrjZTripQg7ISc67KE7Kq9IGFwaeunjOuTnOuKlCDqs7Psl5DshJwg7ZiE7J6sIOyasOumrOuKlCBEQuqwgCDsl4bsnLzri4gsIOuMgOyaqeycvOuhnCBqc29u7JeQ7IScIGRhdGHrpbwg6riB7Ja07Jik6riw7JyE7ZW0IO2VhOyalO2VnCBhcGnrk6TsnoRcbmltcG9ydCB0b2RvIGZyb20gJy4vdG9kbydcblxuY29uc3QgRGF0YSA9IHt0b2RvfVxuXG5leHBvcnQgZGVmYXVsdCBEYXRhXG4iXSwibmFtZXMiOlsidG9kbyIsIkRhdGEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/data/index.ts\n");

/***/ }),

/***/ "./lib/data/todo.ts":
/*!**************************!*\
  !*** ./lib/data/todo.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);\n\n\n// json파일 데이터인 todoList 데이터 불러오기\nconst getList = () => {\n  const todosBuffer = (0,fs__WEBPACK_IMPORTED_MODULE_0__.readFileSync)('data/todos.json');\n  const todosString = todosBuffer.toString();\n\n  if (!todosString) {\n    return [];\n  }\n\n  const todos = JSON.parse(todosString);\n  return todos;\n}; // json 리스트중 request로 넘어온 id 가 있는지 확인하기\n\n\nconst exist = ({\n  id\n}) => {\n  const todos = getList(); //some함수는 일치하는 아이디가 리스트에 있다면 true를 반환하고 없다면 false를 반환한다.\n\n  const todo = todos.some(todo => todo.id === id);\n  return todo;\n}; //json 파일리스트에 , 저장하기\n\n\nconst write = async todos => {\n  (0,fs__WEBPACK_IMPORTED_MODULE_0__.writeFileSync)('data/todos.json', JSON.stringify(todos));\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  getList,\n  exist,\n  write\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvZGF0YS90b2RvLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBOztBQUdBO0FBQ0EsTUFBTUUsT0FBTyxHQUFHLE1BQU07QUFDcEIsUUFBTUMsV0FBVyxHQUFHSCxnREFBWSxDQUFDLGlCQUFELENBQWhDO0FBQ0EsUUFBTUksV0FBVyxHQUFHRCxXQUFXLENBQUNFLFFBQVosRUFBcEI7O0FBQ0EsTUFBSSxDQUFDRCxXQUFMLEVBQWtCO0FBQ2hCLFdBQU8sRUFBUDtBQUNEOztBQUNELFFBQU1FLEtBQWlCLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixXQUFYLENBQTFCO0FBQ0EsU0FBT0UsS0FBUDtBQUNELENBUkQsRUFVQTs7O0FBQ0EsTUFBTUcsS0FBSyxHQUFHLENBQUM7QUFBQ0MsRUFBQUE7QUFBRCxDQUFELEtBQXdCO0FBQ3BDLFFBQU1KLEtBQUssR0FBR0osT0FBTyxFQUFyQixDQURvQyxDQUVwQzs7QUFDQSxRQUFNUyxJQUFJLEdBQUdMLEtBQUssQ0FBQ00sSUFBTixDQUFZRCxJQUFELElBQVVBLElBQUksQ0FBQ0QsRUFBTCxLQUFZQSxFQUFqQyxDQUFiO0FBQ0EsU0FBT0MsSUFBUDtBQUNELENBTEQsRUFPQTs7O0FBQ0EsTUFBTUUsS0FBSyxHQUFHLE1BQU9QLEtBQVAsSUFBNkI7QUFDekNMLEVBQUFBLGlEQUFhLENBQUMsaUJBQUQsRUFBb0JNLElBQUksQ0FBQ08sU0FBTCxDQUFlUixLQUFmLENBQXBCLENBQWI7QUFDRCxDQUZEOztBQUdBLGlFQUFlO0FBQUNKLEVBQUFBLE9BQUQ7QUFBVU8sRUFBQUEsS0FBVjtBQUFpQkksRUFBQUE7QUFBakIsQ0FBZiIsInNvdXJjZXMiOlsid2VicGFjazovL25leHQtdG9kby8uL2xpYi9kYXRhL3RvZG8udHM/Y2Q3MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3JlYWRGaWxlU3luYywgd3JpdGVGaWxlU3luY30gZnJvbSAnZnMnXG5pbXBvcnQge1RvZG9UeXBlfSBmcm9tICcuLi8uLi90eXBlcy90b2RvJ1xuXG4vLyBqc29u7YyM7J28IOuNsOydtO2EsOyduCB0b2RvTGlzdCDrjbDsnbTthLAg67aI65+s7Jik6riwXG5jb25zdCBnZXRMaXN0ID0gKCkgPT4ge1xuICBjb25zdCB0b2Rvc0J1ZmZlciA9IHJlYWRGaWxlU3luYygnZGF0YS90b2Rvcy5qc29uJylcbiAgY29uc3QgdG9kb3NTdHJpbmcgPSB0b2Rvc0J1ZmZlci50b1N0cmluZygpXG4gIGlmICghdG9kb3NTdHJpbmcpIHtcbiAgICByZXR1cm4gW11cbiAgfVxuICBjb25zdCB0b2RvczogVG9kb1R5cGVbXSA9IEpTT04ucGFyc2UodG9kb3NTdHJpbmcpXG4gIHJldHVybiB0b2Rvc1xufVxuXG4vLyBqc29uIOumrOyKpO2KuOykkSByZXF1ZXN066GcIOuEmOyWtOyYqCBpZCDqsIAg7J6I64qU7KeAIO2ZleyduO2VmOq4sFxuY29uc3QgZXhpc3QgPSAoe2lkfToge2lkOiBudW1iZXJ9KSA9PiB7XG4gIGNvbnN0IHRvZG9zID0gZ2V0TGlzdCgpXG4gIC8vc29tZe2VqOyImOuKlCDsnbzsuZjtlZjripQg7JWE7J2065SU6rCAIOumrOyKpO2KuOyXkCDsnojri6TrqbQgdHJ1ZeulvCDrsJjtmZjtlZjqs6Ag7JeG64uk66m0IGZhbHNl66W8IOuwmO2ZmO2VnOuLpC5cbiAgY29uc3QgdG9kbyA9IHRvZG9zLnNvbWUoKHRvZG8pID0+IHRvZG8uaWQgPT09IGlkKVxuICByZXR1cm4gdG9kb1xufVxuXG4vL2pzb24g7YyM7J2866as7Iqk7Yq47JeQICwg7KCA7J6l7ZWY6riwXG5jb25zdCB3cml0ZSA9IGFzeW5jICh0b2RvczogVG9kb1R5cGVbXSkgPT4ge1xuICB3cml0ZUZpbGVTeW5jKCdkYXRhL3RvZG9zLmpzb24nLCBKU09OLnN0cmluZ2lmeSh0b2RvcykpXG59XG5leHBvcnQgZGVmYXVsdCB7Z2V0TGlzdCwgZXhpc3QsIHdyaXRlfVxuIl0sIm5hbWVzIjpbInJlYWRGaWxlU3luYyIsIndyaXRlRmlsZVN5bmMiLCJnZXRMaXN0IiwidG9kb3NCdWZmZXIiLCJ0b2Rvc1N0cmluZyIsInRvU3RyaW5nIiwidG9kb3MiLCJKU09OIiwicGFyc2UiLCJleGlzdCIsImlkIiwidG9kbyIsInNvbWUiLCJ3cml0ZSIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/data/todo.ts\n");

/***/ }),

/***/ "./pages/api/todos/[id].ts":
/*!*********************************!*\
  !*** ./pages/api/todos/[id].ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"./lib/data/index.ts\");\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res) => {\n  if (req.method === 'PATCH') {\n    try {\n      const todoId = Number(req.query.id);\n      const todo = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.exist({\n        id: todoId\n      });\n\n      if (!todo) {\n        res.statusCode = 404;\n        res.end();\n      }\n\n      const todos = await _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      const changedTodos = todos.map(todo => {\n        if (todo.id === todoId) {\n          return _objectSpread(_objectSpread({}, todo), {}, {\n            checked: !todo.checked\n          });\n        }\n\n        return todo;\n      });\n      _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.write(changedTodos);\n      res.statusCode = 200;\n      res.end();\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n\n  res.statusCode = 405;\n  return res.end();\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNBO0FBRUEsaUVBQWUsT0FBT0MsR0FBUCxFQUE0QkMsR0FBNUIsS0FBcUQ7QUFDbEUsTUFBSUQsR0FBRyxDQUFDRSxNQUFKLEtBQWUsT0FBbkIsRUFBNEI7QUFDMUIsUUFBSTtBQUNGLFlBQU1DLE1BQU0sR0FBR0MsTUFBTSxDQUFDSixHQUFHLENBQUNLLEtBQUosQ0FBVUMsRUFBWCxDQUFyQjtBQUNBLFlBQU1DLElBQUksR0FBR1IsNERBQUEsQ0FBZ0I7QUFBQ08sUUFBQUEsRUFBRSxFQUFFSDtBQUFMLE9BQWhCLENBQWI7O0FBQ0EsVUFBSSxDQUFDSSxJQUFMLEVBQVc7QUFDVE4sUUFBQUEsR0FBRyxDQUFDUSxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FSLFFBQUFBLEdBQUcsQ0FBQ1MsR0FBSjtBQUNEOztBQUNELFlBQU1DLEtBQUssR0FBRyxNQUFNWiw4REFBQSxFQUFwQjtBQUNBLFlBQU1jLFlBQVksR0FBR0YsS0FBSyxDQUFDRyxHQUFOLENBQVdQLElBQUQsSUFBVTtBQUN2QyxZQUFJQSxJQUFJLENBQUNELEVBQUwsS0FBWUgsTUFBaEIsRUFBd0I7QUFDdEIsaURBQVdJLElBQVg7QUFBaUJRLFlBQUFBLE9BQU8sRUFBRSxDQUFDUixJQUFJLENBQUNRO0FBQWhDO0FBQ0Q7O0FBQ0QsZUFBT1IsSUFBUDtBQUNELE9BTG9CLENBQXJCO0FBTUFSLE1BQUFBLDREQUFBLENBQWdCYyxZQUFoQjtBQUNBWixNQUFBQSxHQUFHLENBQUNRLFVBQUosR0FBaUIsR0FBakI7QUFDQVIsTUFBQUEsR0FBRyxDQUFDUyxHQUFKO0FBQ0QsS0FqQkQsQ0FpQkUsT0FBT08sQ0FBUCxFQUFVO0FBQ1ZDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFaO0FBQ0FoQixNQUFBQSxHQUFHLENBQUNRLFVBQUosR0FBaUIsR0FBakI7QUFDQVIsTUFBQUEsR0FBRyxDQUFDbUIsSUFBSixDQUFTSCxDQUFUO0FBQ0Q7QUFDRjs7QUFDRGhCLEVBQUFBLEdBQUcsQ0FBQ1EsVUFBSixHQUFpQixHQUFqQjtBQUNBLFNBQU9SLEdBQUcsQ0FBQ1MsR0FBSixFQUFQO0FBQ0QsQ0EzQkQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXRvZG8vLi9wYWdlcy9hcGkvdG9kb3MvW2lkXS50cz83Yjk3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7TmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZX0gZnJvbSAnbmV4dCdcbmltcG9ydCBEYXRhIGZyb20gJy4uLy4uLy4uL2xpYi9kYXRhJ1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdQQVRDSCcpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdG9kb0lkID0gTnVtYmVyKHJlcS5xdWVyeS5pZClcbiAgICAgIGNvbnN0IHRvZG8gPSBEYXRhLnRvZG8uZXhpc3Qoe2lkOiB0b2RvSWR9KVxuICAgICAgaWYgKCF0b2RvKSB7XG4gICAgICAgIHJlcy5zdGF0dXNDb2RlID0gNDA0XG4gICAgICAgIHJlcy5lbmQoKVxuICAgICAgfVxuICAgICAgY29uc3QgdG9kb3MgPSBhd2FpdCBEYXRhLnRvZG8uZ2V0TGlzdCgpXG4gICAgICBjb25zdCBjaGFuZ2VkVG9kb3MgPSB0b2Rvcy5tYXAoKHRvZG8pID0+IHtcbiAgICAgICAgaWYgKHRvZG8uaWQgPT09IHRvZG9JZCkge1xuICAgICAgICAgIHJldHVybiB7Li4udG9kbywgY2hlY2tlZDogIXRvZG8uY2hlY2tlZH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdG9kb1xuICAgICAgfSlcbiAgICAgIERhdGEudG9kby53cml0ZShjaGFuZ2VkVG9kb3MpXG4gICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMFxuICAgICAgcmVzLmVuZCgpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICByZXMuc2VuZChlKVxuICAgIH1cbiAgfVxuICByZXMuc3RhdHVzQ29kZSA9IDQwNVxuICByZXR1cm4gcmVzLmVuZCgpXG59XG4iXSwibmFtZXMiOlsiRGF0YSIsInJlcSIsInJlcyIsIm1ldGhvZCIsInRvZG9JZCIsIk51bWJlciIsInF1ZXJ5IiwiaWQiLCJ0b2RvIiwiZXhpc3QiLCJzdGF0dXNDb2RlIiwiZW5kIiwidG9kb3MiLCJnZXRMaXN0IiwiY2hhbmdlZFRvZG9zIiwibWFwIiwiY2hlY2tlZCIsIndyaXRlIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJzZW5kIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/api/todos/[id].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/todos/[id].ts"));
module.exports = __webpack_exports__;

})();