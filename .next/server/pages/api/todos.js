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
exports.id = "pages/api/todos";
exports.ids = ["pages/api/todos"];
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

/***/ "./pages/api/todos/index.ts":
/*!**********************************!*\
  !*** ./pages/api/todos/index.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../lib/data */ \"./lib/data/index.ts\");\n\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((req, res) => {\n  if (req.method === 'GET') {\n    try {\n      const todos = _lib_data__WEBPACK_IMPORTED_MODULE_0__[\"default\"].todo.getList();\n      res.statusCode = 200;\n      return res.send(todos); // const todoBuffer = fs.readFileSync('data/todos.json')\n      // const todoString = todoBuffer.toString()\n      // if (!todoString) {\n      //   res.statusCode = 200\n      //   res.send([])\n      // }\n      // const todos: TodoType[] = JSON.parse(todoString)\n      // res.statusCode = 200\n      // return res.send(todos)\n    } catch (e) {\n      console.log(e);\n      res.statusCode = 500;\n      res.send(e);\n    }\n  }\n}); // export default async (req: NextApiRequest, res: NextApiResponse) => {\n//   if (req.method === 'GET') {\n//     try {\n//       const todos = await new Promise<TodoType[]>((resolve, reject) => {\n//         fs.readFile('data/todos.json', (err: Error, data: Buffer) => {\n//           if (err) {\n//             return reject(err.message)\n//           }\n//           const todosData = data.toString()\n//           if (!todosData) {\n//             return resolve([])\n//           }\n//           const todos = JSON.parse(data.toString())\n//           return resolve(todos)\n//         })\n//       })\n//       res.statusCode = 200\n//       return res.send(todos)\n//     } catch (e) {\n//       console.log(e)\n//       res.statusCode = 500\n//       res.send(e)\n//     }\n//   }\n// }//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9hcGkvdG9kb3MvaW5kZXgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFDQTs7QUFFQSxJQUFJQyxFQUFFLEdBQUdDLG1CQUFPLENBQUMsY0FBRCxDQUFoQjs7QUFFQSxpRUFBZSxDQUFDQyxHQUFELEVBQXNCQyxHQUF0QixLQUErQztBQUM1RCxNQUFJRCxHQUFHLENBQUNFLE1BQUosS0FBZSxLQUFuQixFQUEwQjtBQUN4QixRQUFJO0FBQ0YsWUFBTUMsS0FBSyxHQUFHTiw4REFBQSxFQUFkO0FBQ0FJLE1BQUFBLEdBQUcsQ0FBQ0ssVUFBSixHQUFpQixHQUFqQjtBQUNBLGFBQU9MLEdBQUcsQ0FBQ00sSUFBSixDQUFTSixLQUFULENBQVAsQ0FIRSxDQUlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNELEtBYkQsQ0FhRSxPQUFPSyxDQUFQLEVBQVU7QUFDVkMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVlGLENBQVo7QUFDQVAsTUFBQUEsR0FBRyxDQUFDSyxVQUFKLEdBQWlCLEdBQWpCO0FBQ0FMLE1BQUFBLEdBQUcsQ0FBQ00sSUFBSixDQUFTQyxDQUFUO0FBQ0Q7QUFDRjtBQUNGLENBckJELEdBdUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC10b2RvLy4vcGFnZXMvYXBpL3RvZG9zL2luZGV4LnRzPzAyZDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlfSBmcm9tICduZXh0J1xuaW1wb3J0IERhdGEgZnJvbSAnLi4vLi4vLi4vbGliL2RhdGEnXG5pbXBvcnQge1RvZG9UeXBlfSBmcm9tICcuLi8uLi8uLi90eXBlcy90b2RvJ1xudmFyIGZzID0gcmVxdWlyZSgnZnMnKVxuXG5leHBvcnQgZGVmYXVsdCAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbiAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHRvZG9zID0gRGF0YS50b2RvLmdldExpc3QoKVxuICAgICAgcmVzLnN0YXR1c0NvZGUgPSAyMDBcbiAgICAgIHJldHVybiByZXMuc2VuZCh0b2RvcylcbiAgICAgIC8vIGNvbnN0IHRvZG9CdWZmZXIgPSBmcy5yZWFkRmlsZVN5bmMoJ2RhdGEvdG9kb3MuanNvbicpXG4gICAgICAvLyBjb25zdCB0b2RvU3RyaW5nID0gdG9kb0J1ZmZlci50b1N0cmluZygpXG4gICAgICAvLyBpZiAoIXRvZG9TdHJpbmcpIHtcbiAgICAgIC8vICAgcmVzLnN0YXR1c0NvZGUgPSAyMDBcbiAgICAgIC8vICAgcmVzLnNlbmQoW10pXG4gICAgICAvLyB9XG4gICAgICAvLyBjb25zdCB0b2RvczogVG9kb1R5cGVbXSA9IEpTT04ucGFyc2UodG9kb1N0cmluZylcbiAgICAgIC8vIHJlcy5zdGF0dXNDb2RlID0gMjAwXG4gICAgICAvLyByZXR1cm4gcmVzLnNlbmQodG9kb3MpXG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgIHJlcy5zdGF0dXNDb2RlID0gNTAwXG4gICAgICByZXMuc2VuZChlKVxuICAgIH1cbiAgfVxufVxuXG4vLyBleHBvcnQgZGVmYXVsdCBhc3luYyAocmVxOiBOZXh0QXBpUmVxdWVzdCwgcmVzOiBOZXh0QXBpUmVzcG9uc2UpID0+IHtcbi8vICAgaWYgKHJlcS5tZXRob2QgPT09ICdHRVQnKSB7XG4vLyAgICAgdHJ5IHtcbi8vICAgICAgIGNvbnN0IHRvZG9zID0gYXdhaXQgbmV3IFByb21pc2U8VG9kb1R5cGVbXT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuLy8gICAgICAgICBmcy5yZWFkRmlsZSgnZGF0YS90b2Rvcy5qc29uJywgKGVycjogRXJyb3IsIGRhdGE6IEJ1ZmZlcikgPT4ge1xuLy8gICAgICAgICAgIGlmIChlcnIpIHtcbi8vICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyLm1lc3NhZ2UpXG4vLyAgICAgICAgICAgfVxuLy8gICAgICAgICAgIGNvbnN0IHRvZG9zRGF0YSA9IGRhdGEudG9TdHJpbmcoKVxuLy8gICAgICAgICAgIGlmICghdG9kb3NEYXRhKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShbXSlcbi8vICAgICAgICAgICB9XG4vLyAgICAgICAgICAgY29uc3QgdG9kb3MgPSBKU09OLnBhcnNlKGRhdGEudG9TdHJpbmcoKSlcbi8vICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh0b2Rvcylcbi8vICAgICAgICAgfSlcbi8vICAgICAgIH0pXG4vLyAgICAgICByZXMuc3RhdHVzQ29kZSA9IDIwMFxuLy8gICAgICAgcmV0dXJuIHJlcy5zZW5kKHRvZG9zKVxuLy8gICAgIH0gY2F0Y2ggKGUpIHtcbi8vICAgICAgIGNvbnNvbGUubG9nKGUpXG4vLyAgICAgICByZXMuc3RhdHVzQ29kZSA9IDUwMFxuLy8gICAgICAgcmVzLnNlbmQoZSlcbi8vICAgICB9XG4vLyAgIH1cbi8vIH1cbiJdLCJuYW1lcyI6WyJEYXRhIiwiZnMiLCJyZXF1aXJlIiwicmVxIiwicmVzIiwibWV0aG9kIiwidG9kb3MiLCJ0b2RvIiwiZ2V0TGlzdCIsInN0YXR1c0NvZGUiLCJzZW5kIiwiZSIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/api/todos/index.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/api/todos/index.ts"));
module.exports = __webpack_exports__;

})();