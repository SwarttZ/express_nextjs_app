"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/internmap";
exports.ids = ["vendor-chunks/internmap"];
exports.modules = {

/***/ "(ssr)/./node_modules/internmap/src/index.js":
/*!*********************************************!*\
  !*** ./node_modules/internmap/src/index.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   InternMap: () => (/* binding */ InternMap),\n/* harmony export */   InternSet: () => (/* binding */ InternSet)\n/* harmony export */ });\nclass InternMap extends Map {\n  constructor(entries, key = keyof) {\n    super();\n    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});\n    if (entries != null) for (const [key, value] of entries) this.set(key, value);\n  }\n  get(key) {\n    return super.get(intern_get(this, key));\n  }\n  has(key) {\n    return super.has(intern_get(this, key));\n  }\n  set(key, value) {\n    return super.set(intern_set(this, key), value);\n  }\n  delete(key) {\n    return super.delete(intern_delete(this, key));\n  }\n}\n\nclass InternSet extends Set {\n  constructor(values, key = keyof) {\n    super();\n    Object.defineProperties(this, {_intern: {value: new Map()}, _key: {value: key}});\n    if (values != null) for (const value of values) this.add(value);\n  }\n  has(value) {\n    return super.has(intern_get(this, value));\n  }\n  add(value) {\n    return super.add(intern_set(this, value));\n  }\n  delete(value) {\n    return super.delete(intern_delete(this, value));\n  }\n}\n\nfunction intern_get({_intern, _key}, value) {\n  const key = _key(value);\n  return _intern.has(key) ? _intern.get(key) : value;\n}\n\nfunction intern_set({_intern, _key}, value) {\n  const key = _key(value);\n  if (_intern.has(key)) return _intern.get(key);\n  _intern.set(key, value);\n  return value;\n}\n\nfunction intern_delete({_intern, _key}, value) {\n  const key = _key(value);\n  if (_intern.has(key)) {\n    value = _intern.get(key);\n    _intern.delete(key);\n  }\n  return value;\n}\n\nfunction keyof(value) {\n  return value !== null && typeof value === \"object\" ? value.valueOf() : value;\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvaW50ZXJubWFwL3NyYy9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBLG1DQUFtQyxVQUFVLGlCQUFpQixTQUFTLFlBQVk7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBLG1DQUFtQyxVQUFVLGlCQUFpQixTQUFTLFlBQVk7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHFCQUFxQixjQUFjO0FBQ25DO0FBQ0E7QUFDQTs7QUFFQSxxQkFBcUIsY0FBYztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixjQUFjO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9pbnRlcm5tYXAvc3JjL2luZGV4LmpzP2JkNDciXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIEludGVybk1hcCBleHRlbmRzIE1hcCB7XG4gIGNvbnN0cnVjdG9yKGVudHJpZXMsIGtleSA9IGtleW9mKSB7XG4gICAgc3VwZXIoKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyh0aGlzLCB7X2ludGVybjoge3ZhbHVlOiBuZXcgTWFwKCl9LCBfa2V5OiB7dmFsdWU6IGtleX19KTtcbiAgICBpZiAoZW50cmllcyAhPSBudWxsKSBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBlbnRyaWVzKSB0aGlzLnNldChrZXksIHZhbHVlKTtcbiAgfVxuICBnZXQoa2V5KSB7XG4gICAgcmV0dXJuIHN1cGVyLmdldChpbnRlcm5fZ2V0KHRoaXMsIGtleSkpO1xuICB9XG4gIGhhcyhrZXkpIHtcbiAgICByZXR1cm4gc3VwZXIuaGFzKGludGVybl9nZXQodGhpcywga2V5KSk7XG4gIH1cbiAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICByZXR1cm4gc3VwZXIuc2V0KGludGVybl9zZXQodGhpcywga2V5KSwgdmFsdWUpO1xuICB9XG4gIGRlbGV0ZShrZXkpIHtcbiAgICByZXR1cm4gc3VwZXIuZGVsZXRlKGludGVybl9kZWxldGUodGhpcywga2V5KSk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEludGVyblNldCBleHRlbmRzIFNldCB7XG4gIGNvbnN0cnVjdG9yKHZhbHVlcywga2V5ID0ga2V5b2YpIHtcbiAgICBzdXBlcigpO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKHRoaXMsIHtfaW50ZXJuOiB7dmFsdWU6IG5ldyBNYXAoKX0sIF9rZXk6IHt2YWx1ZToga2V5fX0pO1xuICAgIGlmICh2YWx1ZXMgIT0gbnVsbCkgZm9yIChjb25zdCB2YWx1ZSBvZiB2YWx1ZXMpIHRoaXMuYWRkKHZhbHVlKTtcbiAgfVxuICBoYXModmFsdWUpIHtcbiAgICByZXR1cm4gc3VwZXIuaGFzKGludGVybl9nZXQodGhpcywgdmFsdWUpKTtcbiAgfVxuICBhZGQodmFsdWUpIHtcbiAgICByZXR1cm4gc3VwZXIuYWRkKGludGVybl9zZXQodGhpcywgdmFsdWUpKTtcbiAgfVxuICBkZWxldGUodmFsdWUpIHtcbiAgICByZXR1cm4gc3VwZXIuZGVsZXRlKGludGVybl9kZWxldGUodGhpcywgdmFsdWUpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnRlcm5fZ2V0KHtfaW50ZXJuLCBfa2V5fSwgdmFsdWUpIHtcbiAgY29uc3Qga2V5ID0gX2tleSh2YWx1ZSk7XG4gIHJldHVybiBfaW50ZXJuLmhhcyhrZXkpID8gX2ludGVybi5nZXQoa2V5KSA6IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBpbnRlcm5fc2V0KHtfaW50ZXJuLCBfa2V5fSwgdmFsdWUpIHtcbiAgY29uc3Qga2V5ID0gX2tleSh2YWx1ZSk7XG4gIGlmIChfaW50ZXJuLmhhcyhrZXkpKSByZXR1cm4gX2ludGVybi5nZXQoa2V5KTtcbiAgX2ludGVybi5zZXQoa2V5LCB2YWx1ZSk7XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuX2RlbGV0ZSh7X2ludGVybiwgX2tleX0sIHZhbHVlKSB7XG4gIGNvbnN0IGtleSA9IF9rZXkodmFsdWUpO1xuICBpZiAoX2ludGVybi5oYXMoa2V5KSkge1xuICAgIHZhbHVlID0gX2ludGVybi5nZXQoa2V5KTtcbiAgICBfaW50ZXJuLmRlbGV0ZShrZXkpO1xuICB9XG4gIHJldHVybiB2YWx1ZTtcbn1cblxuZnVuY3Rpb24ga2V5b2YodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSBudWxsICYmIHR5cGVvZiB2YWx1ZSA9PT0gXCJvYmplY3RcIiA/IHZhbHVlLnZhbHVlT2YoKSA6IHZhbHVlO1xufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/internmap/src/index.js\n");

/***/ })

};
;