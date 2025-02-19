"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@zag-js";
exports.ids = ["vendor-chunks/@zag-js"];
exports.modules = {

/***/ "(ssr)/./node_modules/@zag-js/dom-query/dist/index.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@zag-js/dom-query/dist/index.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   MAX_Z_INDEX: () => (/* binding */ MAX_Z_INDEX),\n/* harmony export */   ariaAttr: () => (/* binding */ ariaAttr),\n/* harmony export */   contains: () => (/* binding */ contains),\n/* harmony export */   createScope: () => (/* binding */ createScope),\n/* harmony export */   dataAttr: () => (/* binding */ dataAttr),\n/* harmony export */   getActiveElement: () => (/* binding */ getActiveElement),\n/* harmony export */   getBeforeInputValue: () => (/* binding */ getBeforeInputValue),\n/* harmony export */   getByText: () => (/* binding */ getByText),\n/* harmony export */   getByTypeahead: () => (/* binding */ getByTypeahead),\n/* harmony export */   getComputedStyle: () => (/* binding */ getComputedStyle),\n/* harmony export */   getDocument: () => (/* binding */ getDocument2),\n/* harmony export */   getEventTarget: () => (/* binding */ getEventTarget),\n/* harmony export */   getParent: () => (/* binding */ getParent),\n/* harmony export */   getPlatform: () => (/* binding */ getPlatform),\n/* harmony export */   getScrollParent: () => (/* binding */ getScrollParent),\n/* harmony export */   getScrollParents: () => (/* binding */ getScrollParents),\n/* harmony export */   getWindow: () => (/* binding */ getWindow),\n/* harmony export */   indexOfId: () => (/* binding */ indexOfId),\n/* harmony export */   isApple: () => (/* binding */ isApple),\n/* harmony export */   isDom: () => (/* binding */ isDom),\n/* harmony export */   isEditableElement: () => (/* binding */ isEditableElement),\n/* harmony export */   isFirefox: () => (/* binding */ isFirefox),\n/* harmony export */   isHTMLElement: () => (/* binding */ isHTMLElement),\n/* harmony export */   isIPhone: () => (/* binding */ isIPhone),\n/* harmony export */   isIos: () => (/* binding */ isIos),\n/* harmony export */   isMac: () => (/* binding */ isMac),\n/* harmony export */   isSafari: () => (/* binding */ isSafari),\n/* harmony export */   isSelfEvent: () => (/* binding */ isSelfEvent),\n/* harmony export */   isTouchDevice: () => (/* binding */ isTouchDevice),\n/* harmony export */   itemById: () => (/* binding */ itemById),\n/* harmony export */   nextById: () => (/* binding */ nextById),\n/* harmony export */   nextTick: () => (/* binding */ nextTick),\n/* harmony export */   prevById: () => (/* binding */ prevById),\n/* harmony export */   query: () => (/* binding */ query),\n/* harmony export */   queryAll: () => (/* binding */ queryAll),\n/* harmony export */   raf: () => (/* binding */ raf)\n/* harmony export */ });\n// src/attrs.ts\nvar dataAttr = (guard) => {\n  return guard ? \"\" : void 0;\n};\nvar ariaAttr = (guard) => {\n  return guard ? \"true\" : void 0;\n};\n\n// src/is-html-element.ts\nvar isHTMLElement = (v) => typeof v === \"object\" && v?.nodeType === Node.ELEMENT_NODE && typeof v?.nodeName === \"string\";\n\n// src/contains.ts\nfunction contains(parent, child) {\n  if (!parent || !child)\n    return false;\n  if (!isHTMLElement(parent) || !isHTMLElement(child))\n    return false;\n  return parent === child || parent.contains(child);\n}\nvar isSelfEvent = (event) => contains(event.currentTarget, event.target);\n\n// src/create-scope.ts\nvar getDocument = (node) => {\n  if (node.nodeType === Node.DOCUMENT_NODE)\n    return node;\n  return node.ownerDocument ?? document;\n};\nfunction createScope(methods) {\n  const screen = {\n    getRootNode: (ctx) => ctx.getRootNode?.() ?? document,\n    getDoc: (ctx) => getDocument(screen.getRootNode(ctx)),\n    getWin: (ctx) => screen.getDoc(ctx).defaultView ?? window,\n    getActiveElement: (ctx) => screen.getDoc(ctx).activeElement,\n    isActiveElement: (ctx, elem) => elem === screen.getActiveElement(ctx),\n    focus(ctx, elem) {\n      if (elem == null)\n        return;\n      if (!screen.isActiveElement(ctx, elem))\n        elem.focus({ preventScroll: true });\n    },\n    getById: (ctx, id) => screen.getRootNode(ctx).getElementById(id),\n    setValue: (elem, value) => {\n      if (elem == null || value == null)\n        return;\n      const valueAsString = value.toString();\n      if (elem.value === valueAsString)\n        return;\n      elem.value = value.toString();\n    }\n  };\n  return { ...screen, ...methods };\n}\n\n// src/is-document.ts\nvar isDocument = (el) => el.nodeType === Node.DOCUMENT_NODE;\n\n// src/is-shadow-root.ts\nvar isNode = (el) => el.nodeType !== void 0;\nvar isShadowRoot = (el) => el && isNode(el) && el.nodeType === Node.DOCUMENT_FRAGMENT_NODE && \"host\" in el;\n\n// src/env.ts\nfunction getDocument2(el) {\n  if (isDocument(el))\n    return el;\n  return el?.ownerDocument ?? document;\n}\nfunction getWindow(el) {\n  if (isShadowRoot(el))\n    return getWindow(el.host);\n  if (isDocument(el))\n    return el.defaultView ?? window;\n  if (isHTMLElement(el))\n    return el.ownerDocument?.defaultView ?? window;\n  return window;\n}\n\n// src/get-active-element.ts\nfunction getActiveElement(el) {\n  let activeElement = el.ownerDocument.activeElement;\n  while (activeElement?.shadowRoot) {\n    const el2 = activeElement.shadowRoot.activeElement;\n    if (el2 === activeElement)\n      break;\n    else\n      activeElement = el2;\n  }\n  return activeElement;\n}\n\n// src/get-before-input-value.ts\nfunction getBeforeInputValue(event) {\n  const { selectionStart, selectionEnd, value } = event.currentTarget;\n  return value.slice(0, selectionStart) + event.data + value.slice(selectionEnd);\n}\n\n// src/get-by-id.ts\nfunction itemById(v, id) {\n  return v.find((node) => node.id === id);\n}\nfunction indexOfId(v, id) {\n  const item = itemById(v, id);\n  return item ? v.indexOf(item) : -1;\n}\nfunction nextById(v, id, loop = true) {\n  let idx = indexOfId(v, id);\n  idx = loop ? (idx + 1) % v.length : Math.min(idx + 1, v.length - 1);\n  return v[idx];\n}\nfunction prevById(v, id, loop = true) {\n  let idx = indexOfId(v, id);\n  if (idx === -1)\n    return loop ? v[v.length - 1] : null;\n  idx = loop ? (idx - 1 + v.length) % v.length : Math.max(0, idx - 1);\n  return v[idx];\n}\n\n// src/get-by-text.ts\nvar getValueText = (item) => item.dataset.valuetext ?? item.textContent ?? \"\";\nvar match = (valueText, query2) => valueText.trim().toLowerCase().startsWith(query2.toLowerCase());\nvar wrap = (v, idx) => {\n  return v.map((_, index) => v[(Math.max(idx, 0) + index) % v.length]);\n};\nfunction getByText(v, text, currentId) {\n  const index = currentId ? indexOfId(v, currentId) : -1;\n  let items = currentId ? wrap(v, index) : v;\n  const isSingleKey = text.length === 1;\n  if (isSingleKey) {\n    items = items.filter((item) => item.id !== currentId);\n  }\n  return items.find((item) => match(getValueText(item), text));\n}\n\n// src/get-by-typeahead.ts\nfunction getByTypeaheadImpl(_items, options) {\n  const { state, activeId, key, timeout = 350 } = options;\n  const search = state.keysSoFar + key;\n  const isRepeated = search.length > 1 && Array.from(search).every((char) => char === search[0]);\n  const query2 = isRepeated ? search[0] : search;\n  let items = _items.slice();\n  const next = getByText(items, query2, activeId);\n  function cleanup() {\n    clearTimeout(state.timer);\n    state.timer = -1;\n  }\n  function update(value) {\n    state.keysSoFar = value;\n    cleanup();\n    if (value !== \"\") {\n      state.timer = +setTimeout(() => {\n        update(\"\");\n        cleanup();\n      }, timeout);\n    }\n  }\n  update(search);\n  return next;\n}\nvar getByTypeahead = /* @__PURE__ */ Object.assign(getByTypeaheadImpl, {\n  defaultOptions: { keysSoFar: \"\", timer: -1 },\n  isValidEvent: isValidTypeaheadEvent\n});\nfunction isValidTypeaheadEvent(event) {\n  return event.key.length === 1 && !event.ctrlKey && !event.metaKey;\n}\n\n// src/get-computed-style.ts\nvar styleCache = /* @__PURE__ */ new WeakMap();\nfunction getComputedStyle(el) {\n  if (!styleCache.has(el)) {\n    const win = el.ownerDocument.defaultView || window;\n    styleCache.set(el, win.getComputedStyle(el));\n  }\n  return styleCache.get(el);\n}\n\n// src/get-event-target.ts\nfunction getEventTarget(event) {\n  return event.composedPath?.()[0] ?? event.target;\n}\n\n// src/get-scroll-parent.ts\nfunction isScrollParent(el) {\n  const win = el.ownerDocument.defaultView || window;\n  const { overflow, overflowX, overflowY } = win.getComputedStyle(el);\n  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);\n}\nfunction getParent(el) {\n  if (el.localName === \"html\")\n    return el;\n  return el.assignedSlot || el.parentElement || el.ownerDocument.documentElement;\n}\nfunction getScrollParent(el) {\n  if ([\"html\", \"body\", \"#document\"].includes(el.localName)) {\n    return el.ownerDocument.body;\n  }\n  if (isHTMLElement(el) && isScrollParent(el)) {\n    return el;\n  }\n  return getScrollParent(getParent(el));\n}\nfunction getScrollParents(el, list = []) {\n  const parent = getScrollParent(el);\n  const isBody = parent === el.ownerDocument.body;\n  const win = parent.ownerDocument.defaultView || window;\n  const target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(parent) ? parent : []) : parent;\n  const parents = list.concat(target);\n  return isBody ? parents : parents.concat(getScrollParents(getParent(target)));\n}\n\n// src/is-editable-element.ts\nfunction isEditableElement(el) {\n  if (el == null || !isHTMLElement(el)) {\n    return false;\n  }\n  try {\n    const win = el.ownerDocument.defaultView || window;\n    return el instanceof win.HTMLInputElement && el.selectionStart != null || /(textarea|select)/.test(el.localName) || el.isContentEditable;\n  } catch {\n    return false;\n  }\n}\n\n// src/platform.ts\nvar isDom = () => typeof document !== \"undefined\";\nfunction getPlatform() {\n  const agent = navigator.userAgentData;\n  return agent?.platform ?? navigator.platform;\n}\nvar pt = (v) => isDom() && v.test(getPlatform());\nvar ua = (v) => isDom() && v.test(navigator.userAgent);\nvar vn = (v) => isDom() && v.test(navigator.vendor);\nvar isTouchDevice = () => isDom() && !!navigator.maxTouchPoints;\nvar isMac = () => pt(/^Mac/) && !isTouchDevice();\nvar isIPhone = () => pt(/^iPhone/);\nvar isSafari = () => isApple() && vn(/apple/i);\nvar isFirefox = () => ua(/firefox\\//i);\nvar isApple = () => pt(/mac|iphone|ipad|ipod/i);\nvar isIos = () => isApple() && !isMac();\n\n// src/query.ts\nfunction queryAll(root, selector) {\n  return Array.from(root?.querySelectorAll(selector) ?? []);\n}\nfunction query(root, selector) {\n  return root?.querySelector(selector);\n}\n\n// src/raf.ts\nfunction nextTick(fn) {\n  const set = /* @__PURE__ */ new Set();\n  function raf2(fn2) {\n    const id = globalThis.requestAnimationFrame(fn2);\n    set.add(() => globalThis.cancelAnimationFrame(id));\n  }\n  raf2(() => raf2(fn));\n  return function cleanup() {\n    set.forEach((fn2) => fn2());\n  };\n}\nfunction raf(fn) {\n  const id = globalThis.requestAnimationFrame(fn);\n  return () => {\n    globalThis.cancelAnimationFrame(id);\n  };\n}\n\n// src/index.ts\nvar MAX_Z_INDEX = 2147483647;\n\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHphZy1qcy9kb20tcXVlcnkvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixxQkFBcUI7QUFDMUMsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsc0NBQXNDO0FBQ2hEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFVBQVUsc0NBQXNDO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlDQUFpQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFzQ0U7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9AemFnLWpzL2RvbS1xdWVyeS9kaXN0L2luZGV4Lm1qcz80OWY0Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIHNyYy9hdHRycy50c1xudmFyIGRhdGFBdHRyID0gKGd1YXJkKSA9PiB7XG4gIHJldHVybiBndWFyZCA/IFwiXCIgOiB2b2lkIDA7XG59O1xudmFyIGFyaWFBdHRyID0gKGd1YXJkKSA9PiB7XG4gIHJldHVybiBndWFyZCA/IFwidHJ1ZVwiIDogdm9pZCAwO1xufTtcblxuLy8gc3JjL2lzLWh0bWwtZWxlbWVudC50c1xudmFyIGlzSFRNTEVsZW1lbnQgPSAodikgPT4gdHlwZW9mIHYgPT09IFwib2JqZWN0XCIgJiYgdj8ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFICYmIHR5cGVvZiB2Py5ub2RlTmFtZSA9PT0gXCJzdHJpbmdcIjtcblxuLy8gc3JjL2NvbnRhaW5zLnRzXG5mdW5jdGlvbiBjb250YWlucyhwYXJlbnQsIGNoaWxkKSB7XG4gIGlmICghcGFyZW50IHx8ICFjaGlsZClcbiAgICByZXR1cm4gZmFsc2U7XG4gIGlmICghaXNIVE1MRWxlbWVudChwYXJlbnQpIHx8ICFpc0hUTUxFbGVtZW50KGNoaWxkKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIHJldHVybiBwYXJlbnQgPT09IGNoaWxkIHx8IHBhcmVudC5jb250YWlucyhjaGlsZCk7XG59XG52YXIgaXNTZWxmRXZlbnQgPSAoZXZlbnQpID0+IGNvbnRhaW5zKGV2ZW50LmN1cnJlbnRUYXJnZXQsIGV2ZW50LnRhcmdldCk7XG5cbi8vIHNyYy9jcmVhdGUtc2NvcGUudHNcbnZhciBnZXREb2N1bWVudCA9IChub2RlKSA9PiB7XG4gIGlmIChub2RlLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX05PREUpXG4gICAgcmV0dXJuIG5vZGU7XG4gIHJldHVybiBub2RlLm93bmVyRG9jdW1lbnQgPz8gZG9jdW1lbnQ7XG59O1xuZnVuY3Rpb24gY3JlYXRlU2NvcGUobWV0aG9kcykge1xuICBjb25zdCBzY3JlZW4gPSB7XG4gICAgZ2V0Um9vdE5vZGU6IChjdHgpID0+IGN0eC5nZXRSb290Tm9kZT8uKCkgPz8gZG9jdW1lbnQsXG4gICAgZ2V0RG9jOiAoY3R4KSA9PiBnZXREb2N1bWVudChzY3JlZW4uZ2V0Um9vdE5vZGUoY3R4KSksXG4gICAgZ2V0V2luOiAoY3R4KSA9PiBzY3JlZW4uZ2V0RG9jKGN0eCkuZGVmYXVsdFZpZXcgPz8gd2luZG93LFxuICAgIGdldEFjdGl2ZUVsZW1lbnQ6IChjdHgpID0+IHNjcmVlbi5nZXREb2MoY3R4KS5hY3RpdmVFbGVtZW50LFxuICAgIGlzQWN0aXZlRWxlbWVudDogKGN0eCwgZWxlbSkgPT4gZWxlbSA9PT0gc2NyZWVuLmdldEFjdGl2ZUVsZW1lbnQoY3R4KSxcbiAgICBmb2N1cyhjdHgsIGVsZW0pIHtcbiAgICAgIGlmIChlbGVtID09IG51bGwpXG4gICAgICAgIHJldHVybjtcbiAgICAgIGlmICghc2NyZWVuLmlzQWN0aXZlRWxlbWVudChjdHgsIGVsZW0pKVxuICAgICAgICBlbGVtLmZvY3VzKHsgcHJldmVudFNjcm9sbDogdHJ1ZSB9KTtcbiAgICB9LFxuICAgIGdldEJ5SWQ6IChjdHgsIGlkKSA9PiBzY3JlZW4uZ2V0Um9vdE5vZGUoY3R4KS5nZXRFbGVtZW50QnlJZChpZCksXG4gICAgc2V0VmFsdWU6IChlbGVtLCB2YWx1ZSkgPT4ge1xuICAgICAgaWYgKGVsZW0gPT0gbnVsbCB8fCB2YWx1ZSA9PSBudWxsKVxuICAgICAgICByZXR1cm47XG4gICAgICBjb25zdCB2YWx1ZUFzU3RyaW5nID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgIGlmIChlbGVtLnZhbHVlID09PSB2YWx1ZUFzU3RyaW5nKVxuICAgICAgICByZXR1cm47XG4gICAgICBlbGVtLnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7IC4uLnNjcmVlbiwgLi4ubWV0aG9kcyB9O1xufVxuXG4vLyBzcmMvaXMtZG9jdW1lbnQudHNcbnZhciBpc0RvY3VtZW50ID0gKGVsKSA9PiBlbC5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9OT0RFO1xuXG4vLyBzcmMvaXMtc2hhZG93LXJvb3QudHNcbnZhciBpc05vZGUgPSAoZWwpID0+IGVsLm5vZGVUeXBlICE9PSB2b2lkIDA7XG52YXIgaXNTaGFkb3dSb290ID0gKGVsKSA9PiBlbCAmJiBpc05vZGUoZWwpICYmIGVsLm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUgJiYgXCJob3N0XCIgaW4gZWw7XG5cbi8vIHNyYy9lbnYudHNcbmZ1bmN0aW9uIGdldERvY3VtZW50MihlbCkge1xuICBpZiAoaXNEb2N1bWVudChlbCkpXG4gICAgcmV0dXJuIGVsO1xuICByZXR1cm4gZWw/Lm93bmVyRG9jdW1lbnQgPz8gZG9jdW1lbnQ7XG59XG5mdW5jdGlvbiBnZXRXaW5kb3coZWwpIHtcbiAgaWYgKGlzU2hhZG93Um9vdChlbCkpXG4gICAgcmV0dXJuIGdldFdpbmRvdyhlbC5ob3N0KTtcbiAgaWYgKGlzRG9jdW1lbnQoZWwpKVxuICAgIHJldHVybiBlbC5kZWZhdWx0VmlldyA/PyB3aW5kb3c7XG4gIGlmIChpc0hUTUxFbGVtZW50KGVsKSlcbiAgICByZXR1cm4gZWwub3duZXJEb2N1bWVudD8uZGVmYXVsdFZpZXcgPz8gd2luZG93O1xuICByZXR1cm4gd2luZG93O1xufVxuXG4vLyBzcmMvZ2V0LWFjdGl2ZS1lbGVtZW50LnRzXG5mdW5jdGlvbiBnZXRBY3RpdmVFbGVtZW50KGVsKSB7XG4gIGxldCBhY3RpdmVFbGVtZW50ID0gZWwub3duZXJEb2N1bWVudC5hY3RpdmVFbGVtZW50O1xuICB3aGlsZSAoYWN0aXZlRWxlbWVudD8uc2hhZG93Um9vdCkge1xuICAgIGNvbnN0IGVsMiA9IGFjdGl2ZUVsZW1lbnQuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuICAgIGlmIChlbDIgPT09IGFjdGl2ZUVsZW1lbnQpXG4gICAgICBicmVhaztcbiAgICBlbHNlXG4gICAgICBhY3RpdmVFbGVtZW50ID0gZWwyO1xuICB9XG4gIHJldHVybiBhY3RpdmVFbGVtZW50O1xufVxuXG4vLyBzcmMvZ2V0LWJlZm9yZS1pbnB1dC12YWx1ZS50c1xuZnVuY3Rpb24gZ2V0QmVmb3JlSW5wdXRWYWx1ZShldmVudCkge1xuICBjb25zdCB7IHNlbGVjdGlvblN0YXJ0LCBzZWxlY3Rpb25FbmQsIHZhbHVlIH0gPSBldmVudC5jdXJyZW50VGFyZ2V0O1xuICByZXR1cm4gdmFsdWUuc2xpY2UoMCwgc2VsZWN0aW9uU3RhcnQpICsgZXZlbnQuZGF0YSArIHZhbHVlLnNsaWNlKHNlbGVjdGlvbkVuZCk7XG59XG5cbi8vIHNyYy9nZXQtYnktaWQudHNcbmZ1bmN0aW9uIGl0ZW1CeUlkKHYsIGlkKSB7XG4gIHJldHVybiB2LmZpbmQoKG5vZGUpID0+IG5vZGUuaWQgPT09IGlkKTtcbn1cbmZ1bmN0aW9uIGluZGV4T2ZJZCh2LCBpZCkge1xuICBjb25zdCBpdGVtID0gaXRlbUJ5SWQodiwgaWQpO1xuICByZXR1cm4gaXRlbSA/IHYuaW5kZXhPZihpdGVtKSA6IC0xO1xufVxuZnVuY3Rpb24gbmV4dEJ5SWQodiwgaWQsIGxvb3AgPSB0cnVlKSB7XG4gIGxldCBpZHggPSBpbmRleE9mSWQodiwgaWQpO1xuICBpZHggPSBsb29wID8gKGlkeCArIDEpICUgdi5sZW5ndGggOiBNYXRoLm1pbihpZHggKyAxLCB2Lmxlbmd0aCAtIDEpO1xuICByZXR1cm4gdltpZHhdO1xufVxuZnVuY3Rpb24gcHJldkJ5SWQodiwgaWQsIGxvb3AgPSB0cnVlKSB7XG4gIGxldCBpZHggPSBpbmRleE9mSWQodiwgaWQpO1xuICBpZiAoaWR4ID09PSAtMSlcbiAgICByZXR1cm4gbG9vcCA/IHZbdi5sZW5ndGggLSAxXSA6IG51bGw7XG4gIGlkeCA9IGxvb3AgPyAoaWR4IC0gMSArIHYubGVuZ3RoKSAlIHYubGVuZ3RoIDogTWF0aC5tYXgoMCwgaWR4IC0gMSk7XG4gIHJldHVybiB2W2lkeF07XG59XG5cbi8vIHNyYy9nZXQtYnktdGV4dC50c1xudmFyIGdldFZhbHVlVGV4dCA9IChpdGVtKSA9PiBpdGVtLmRhdGFzZXQudmFsdWV0ZXh0ID8/IGl0ZW0udGV4dENvbnRlbnQgPz8gXCJcIjtcbnZhciBtYXRjaCA9ICh2YWx1ZVRleHQsIHF1ZXJ5MikgPT4gdmFsdWVUZXh0LnRyaW0oKS50b0xvd2VyQ2FzZSgpLnN0YXJ0c1dpdGgocXVlcnkyLnRvTG93ZXJDYXNlKCkpO1xudmFyIHdyYXAgPSAodiwgaWR4KSA9PiB7XG4gIHJldHVybiB2Lm1hcCgoXywgaW5kZXgpID0+IHZbKE1hdGgubWF4KGlkeCwgMCkgKyBpbmRleCkgJSB2Lmxlbmd0aF0pO1xufTtcbmZ1bmN0aW9uIGdldEJ5VGV4dCh2LCB0ZXh0LCBjdXJyZW50SWQpIHtcbiAgY29uc3QgaW5kZXggPSBjdXJyZW50SWQgPyBpbmRleE9mSWQodiwgY3VycmVudElkKSA6IC0xO1xuICBsZXQgaXRlbXMgPSBjdXJyZW50SWQgPyB3cmFwKHYsIGluZGV4KSA6IHY7XG4gIGNvbnN0IGlzU2luZ2xlS2V5ID0gdGV4dC5sZW5ndGggPT09IDE7XG4gIGlmIChpc1NpbmdsZUtleSkge1xuICAgIGl0ZW1zID0gaXRlbXMuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmlkICE9PSBjdXJyZW50SWQpO1xuICB9XG4gIHJldHVybiBpdGVtcy5maW5kKChpdGVtKSA9PiBtYXRjaChnZXRWYWx1ZVRleHQoaXRlbSksIHRleHQpKTtcbn1cblxuLy8gc3JjL2dldC1ieS10eXBlYWhlYWQudHNcbmZ1bmN0aW9uIGdldEJ5VHlwZWFoZWFkSW1wbChfaXRlbXMsIG9wdGlvbnMpIHtcbiAgY29uc3QgeyBzdGF0ZSwgYWN0aXZlSWQsIGtleSwgdGltZW91dCA9IDM1MCB9ID0gb3B0aW9ucztcbiAgY29uc3Qgc2VhcmNoID0gc3RhdGUua2V5c1NvRmFyICsga2V5O1xuICBjb25zdCBpc1JlcGVhdGVkID0gc2VhcmNoLmxlbmd0aCA+IDEgJiYgQXJyYXkuZnJvbShzZWFyY2gpLmV2ZXJ5KChjaGFyKSA9PiBjaGFyID09PSBzZWFyY2hbMF0pO1xuICBjb25zdCBxdWVyeTIgPSBpc1JlcGVhdGVkID8gc2VhcmNoWzBdIDogc2VhcmNoO1xuICBsZXQgaXRlbXMgPSBfaXRlbXMuc2xpY2UoKTtcbiAgY29uc3QgbmV4dCA9IGdldEJ5VGV4dChpdGVtcywgcXVlcnkyLCBhY3RpdmVJZCk7XG4gIGZ1bmN0aW9uIGNsZWFudXAoKSB7XG4gICAgY2xlYXJUaW1lb3V0KHN0YXRlLnRpbWVyKTtcbiAgICBzdGF0ZS50aW1lciA9IC0xO1xuICB9XG4gIGZ1bmN0aW9uIHVwZGF0ZSh2YWx1ZSkge1xuICAgIHN0YXRlLmtleXNTb0ZhciA9IHZhbHVlO1xuICAgIGNsZWFudXAoKTtcbiAgICBpZiAodmFsdWUgIT09IFwiXCIpIHtcbiAgICAgIHN0YXRlLnRpbWVyID0gK3NldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB1cGRhdGUoXCJcIik7XG4gICAgICAgIGNsZWFudXAoKTtcbiAgICAgIH0sIHRpbWVvdXQpO1xuICAgIH1cbiAgfVxuICB1cGRhdGUoc2VhcmNoKTtcbiAgcmV0dXJuIG5leHQ7XG59XG52YXIgZ2V0QnlUeXBlYWhlYWQgPSAvKiBAX19QVVJFX18gKi8gT2JqZWN0LmFzc2lnbihnZXRCeVR5cGVhaGVhZEltcGwsIHtcbiAgZGVmYXVsdE9wdGlvbnM6IHsga2V5c1NvRmFyOiBcIlwiLCB0aW1lcjogLTEgfSxcbiAgaXNWYWxpZEV2ZW50OiBpc1ZhbGlkVHlwZWFoZWFkRXZlbnRcbn0pO1xuZnVuY3Rpb24gaXNWYWxpZFR5cGVhaGVhZEV2ZW50KGV2ZW50KSB7XG4gIHJldHVybiBldmVudC5rZXkubGVuZ3RoID09PSAxICYmICFldmVudC5jdHJsS2V5ICYmICFldmVudC5tZXRhS2V5O1xufVxuXG4vLyBzcmMvZ2V0LWNvbXB1dGVkLXN0eWxlLnRzXG52YXIgc3R5bGVDYWNoZSA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgV2Vha01hcCgpO1xuZnVuY3Rpb24gZ2V0Q29tcHV0ZWRTdHlsZShlbCkge1xuICBpZiAoIXN0eWxlQ2FjaGUuaGFzKGVsKSkge1xuICAgIGNvbnN0IHdpbiA9IGVsLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcgfHwgd2luZG93O1xuICAgIHN0eWxlQ2FjaGUuc2V0KGVsLCB3aW4uZ2V0Q29tcHV0ZWRTdHlsZShlbCkpO1xuICB9XG4gIHJldHVybiBzdHlsZUNhY2hlLmdldChlbCk7XG59XG5cbi8vIHNyYy9nZXQtZXZlbnQtdGFyZ2V0LnRzXG5mdW5jdGlvbiBnZXRFdmVudFRhcmdldChldmVudCkge1xuICByZXR1cm4gZXZlbnQuY29tcG9zZWRQYXRoPy4oKVswXSA/PyBldmVudC50YXJnZXQ7XG59XG5cbi8vIHNyYy9nZXQtc2Nyb2xsLXBhcmVudC50c1xuZnVuY3Rpb24gaXNTY3JvbGxQYXJlbnQoZWwpIHtcbiAgY29uc3Qgd2luID0gZWwub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gIGNvbnN0IHsgb3ZlcmZsb3csIG92ZXJmbG93WCwgb3ZlcmZsb3dZIH0gPSB3aW4uZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gIHJldHVybiAvYXV0b3xzY3JvbGx8b3ZlcmxheXxoaWRkZW4vLnRlc3Qob3ZlcmZsb3cgKyBvdmVyZmxvd1kgKyBvdmVyZmxvd1gpO1xufVxuZnVuY3Rpb24gZ2V0UGFyZW50KGVsKSB7XG4gIGlmIChlbC5sb2NhbE5hbWUgPT09IFwiaHRtbFwiKVxuICAgIHJldHVybiBlbDtcbiAgcmV0dXJuIGVsLmFzc2lnbmVkU2xvdCB8fCBlbC5wYXJlbnRFbGVtZW50IHx8IGVsLm93bmVyRG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xufVxuZnVuY3Rpb24gZ2V0U2Nyb2xsUGFyZW50KGVsKSB7XG4gIGlmIChbXCJodG1sXCIsIFwiYm9keVwiLCBcIiNkb2N1bWVudFwiXS5pbmNsdWRlcyhlbC5sb2NhbE5hbWUpKSB7XG4gICAgcmV0dXJuIGVsLm93bmVyRG9jdW1lbnQuYm9keTtcbiAgfVxuICBpZiAoaXNIVE1MRWxlbWVudChlbCkgJiYgaXNTY3JvbGxQYXJlbnQoZWwpKSB7XG4gICAgcmV0dXJuIGVsO1xuICB9XG4gIHJldHVybiBnZXRTY3JvbGxQYXJlbnQoZ2V0UGFyZW50KGVsKSk7XG59XG5mdW5jdGlvbiBnZXRTY3JvbGxQYXJlbnRzKGVsLCBsaXN0ID0gW10pIHtcbiAgY29uc3QgcGFyZW50ID0gZ2V0U2Nyb2xsUGFyZW50KGVsKTtcbiAgY29uc3QgaXNCb2R5ID0gcGFyZW50ID09PSBlbC5vd25lckRvY3VtZW50LmJvZHk7XG4gIGNvbnN0IHdpbiA9IHBhcmVudC5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3IHx8IHdpbmRvdztcbiAgY29uc3QgdGFyZ2V0ID0gaXNCb2R5ID8gW3dpbl0uY29uY2F0KHdpbi52aXN1YWxWaWV3cG9ydCB8fCBbXSwgaXNTY3JvbGxQYXJlbnQocGFyZW50KSA/IHBhcmVudCA6IFtdKSA6IHBhcmVudDtcbiAgY29uc3QgcGFyZW50cyA9IGxpc3QuY29uY2F0KHRhcmdldCk7XG4gIHJldHVybiBpc0JvZHkgPyBwYXJlbnRzIDogcGFyZW50cy5jb25jYXQoZ2V0U2Nyb2xsUGFyZW50cyhnZXRQYXJlbnQodGFyZ2V0KSkpO1xufVxuXG4vLyBzcmMvaXMtZWRpdGFibGUtZWxlbWVudC50c1xuZnVuY3Rpb24gaXNFZGl0YWJsZUVsZW1lbnQoZWwpIHtcbiAgaWYgKGVsID09IG51bGwgfHwgIWlzSFRNTEVsZW1lbnQoZWwpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHRyeSB7XG4gICAgY29uc3Qgd2luID0gZWwub3duZXJEb2N1bWVudC5kZWZhdWx0VmlldyB8fCB3aW5kb3c7XG4gICAgcmV0dXJuIGVsIGluc3RhbmNlb2Ygd2luLkhUTUxJbnB1dEVsZW1lbnQgJiYgZWwuc2VsZWN0aW9uU3RhcnQgIT0gbnVsbCB8fCAvKHRleHRhcmVhfHNlbGVjdCkvLnRlc3QoZWwubG9jYWxOYW1lKSB8fCBlbC5pc0NvbnRlbnRFZGl0YWJsZTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbi8vIHNyYy9wbGF0Zm9ybS50c1xudmFyIGlzRG9tID0gKCkgPT4gdHlwZW9mIGRvY3VtZW50ICE9PSBcInVuZGVmaW5lZFwiO1xuZnVuY3Rpb24gZ2V0UGxhdGZvcm0oKSB7XG4gIGNvbnN0IGFnZW50ID0gbmF2aWdhdG9yLnVzZXJBZ2VudERhdGE7XG4gIHJldHVybiBhZ2VudD8ucGxhdGZvcm0gPz8gbmF2aWdhdG9yLnBsYXRmb3JtO1xufVxudmFyIHB0ID0gKHYpID0+IGlzRG9tKCkgJiYgdi50ZXN0KGdldFBsYXRmb3JtKCkpO1xudmFyIHVhID0gKHYpID0+IGlzRG9tKCkgJiYgdi50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xudmFyIHZuID0gKHYpID0+IGlzRG9tKCkgJiYgdi50ZXN0KG5hdmlnYXRvci52ZW5kb3IpO1xudmFyIGlzVG91Y2hEZXZpY2UgPSAoKSA9PiBpc0RvbSgpICYmICEhbmF2aWdhdG9yLm1heFRvdWNoUG9pbnRzO1xudmFyIGlzTWFjID0gKCkgPT4gcHQoL15NYWMvKSAmJiAhaXNUb3VjaERldmljZSgpO1xudmFyIGlzSVBob25lID0gKCkgPT4gcHQoL15pUGhvbmUvKTtcbnZhciBpc1NhZmFyaSA9ICgpID0+IGlzQXBwbGUoKSAmJiB2bigvYXBwbGUvaSk7XG52YXIgaXNGaXJlZm94ID0gKCkgPT4gdWEoL2ZpcmVmb3hcXC8vaSk7XG52YXIgaXNBcHBsZSA9ICgpID0+IHB0KC9tYWN8aXBob25lfGlwYWR8aXBvZC9pKTtcbnZhciBpc0lvcyA9ICgpID0+IGlzQXBwbGUoKSAmJiAhaXNNYWMoKTtcblxuLy8gc3JjL3F1ZXJ5LnRzXG5mdW5jdGlvbiBxdWVyeUFsbChyb290LCBzZWxlY3Rvcikge1xuICByZXR1cm4gQXJyYXkuZnJvbShyb290Py5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKSA/PyBbXSk7XG59XG5mdW5jdGlvbiBxdWVyeShyb290LCBzZWxlY3Rvcikge1xuICByZXR1cm4gcm9vdD8ucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG59XG5cbi8vIHNyYy9yYWYudHNcbmZ1bmN0aW9uIG5leHRUaWNrKGZuKSB7XG4gIGNvbnN0IHNldCA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KCk7XG4gIGZ1bmN0aW9uIHJhZjIoZm4yKSB7XG4gICAgY29uc3QgaWQgPSBnbG9iYWxUaGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZShmbjIpO1xuICAgIHNldC5hZGQoKCkgPT4gZ2xvYmFsVGhpcy5jYW5jZWxBbmltYXRpb25GcmFtZShpZCkpO1xuICB9XG4gIHJhZjIoKCkgPT4gcmFmMihmbikpO1xuICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICBzZXQuZm9yRWFjaCgoZm4yKSA9PiBmbjIoKSk7XG4gIH07XG59XG5mdW5jdGlvbiByYWYoZm4pIHtcbiAgY29uc3QgaWQgPSBnbG9iYWxUaGlzLnJlcXVlc3RBbmltYXRpb25GcmFtZShmbik7XG4gIHJldHVybiAoKSA9PiB7XG4gICAgZ2xvYmFsVGhpcy5jYW5jZWxBbmltYXRpb25GcmFtZShpZCk7XG4gIH07XG59XG5cbi8vIHNyYy9pbmRleC50c1xudmFyIE1BWF9aX0lOREVYID0gMjE0NzQ4MzY0NztcbmV4cG9ydCB7XG4gIE1BWF9aX0lOREVYLFxuICBhcmlhQXR0cixcbiAgY29udGFpbnMsXG4gIGNyZWF0ZVNjb3BlLFxuICBkYXRhQXR0cixcbiAgZ2V0QWN0aXZlRWxlbWVudCxcbiAgZ2V0QmVmb3JlSW5wdXRWYWx1ZSxcbiAgZ2V0QnlUZXh0LFxuICBnZXRCeVR5cGVhaGVhZCxcbiAgZ2V0Q29tcHV0ZWRTdHlsZSxcbiAgZ2V0RG9jdW1lbnQyIGFzIGdldERvY3VtZW50LFxuICBnZXRFdmVudFRhcmdldCxcbiAgZ2V0UGFyZW50LFxuICBnZXRQbGF0Zm9ybSxcbiAgZ2V0U2Nyb2xsUGFyZW50LFxuICBnZXRTY3JvbGxQYXJlbnRzLFxuICBnZXRXaW5kb3csXG4gIGluZGV4T2ZJZCxcbiAgaXNBcHBsZSxcbiAgaXNEb20sXG4gIGlzRWRpdGFibGVFbGVtZW50LFxuICBpc0ZpcmVmb3gsXG4gIGlzSFRNTEVsZW1lbnQsXG4gIGlzSVBob25lLFxuICBpc0lvcyxcbiAgaXNNYWMsXG4gIGlzU2FmYXJpLFxuICBpc1NlbGZFdmVudCxcbiAgaXNUb3VjaERldmljZSxcbiAgaXRlbUJ5SWQsXG4gIG5leHRCeUlkLFxuICBuZXh0VGljayxcbiAgcHJldkJ5SWQsXG4gIHF1ZXJ5LFxuICBxdWVyeUFsbCxcbiAgcmFmXG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@zag-js/dom-query/dist/index.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@zag-js/focus-visible/dist/index.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@zag-js/focus-visible/dist/index.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getInteractionModality: () => (/* binding */ getInteractionModality),\n/* harmony export */   setInteractionModality: () => (/* binding */ setInteractionModality),\n/* harmony export */   trackFocusVisible: () => (/* binding */ trackFocusVisible),\n/* harmony export */   trackInteractionModality: () => (/* binding */ trackInteractionModality)\n/* harmony export */ });\n/* harmony import */ var _zag_js_dom_query__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zag-js/dom-query */ \"(ssr)/./node_modules/@zag-js/dom-query/dist/index.mjs\");\n// src/index.ts\n\nvar hasSetup = false;\nvar modality = null;\nvar hasEventBeforeFocus = false;\nvar hasBlurredWindowRecently = false;\nvar handlers = /* @__PURE__ */ new Set();\nfunction trigger(modality2, event) {\n  handlers.forEach((handler) => handler(modality2, event));\n}\nvar isMac = typeof window !== \"undefined\" && window.navigator != null ? /^Mac/.test(window.navigator.platform) : false;\nfunction isValidKey(e) {\n  return !(e.metaKey || !isMac && e.altKey || e.ctrlKey || e.key === \"Control\" || e.key === \"Shift\" || e.key === \"Meta\");\n}\nfunction onKeyboardEvent(event) {\n  hasEventBeforeFocus = true;\n  if (isValidKey(event)) {\n    modality = \"keyboard\";\n    trigger(\"keyboard\", event);\n  }\n}\nfunction onPointerEvent(event) {\n  modality = \"pointer\";\n  if (event.type === \"mousedown\" || event.type === \"pointerdown\") {\n    hasEventBeforeFocus = true;\n    const target = event.composedPath ? event.composedPath()[0] : event.target;\n    let matches = false;\n    try {\n      matches = target.matches(\":focus-visible\");\n    } catch {\n    }\n    if (matches)\n      return;\n    trigger(\"pointer\", event);\n  }\n}\nfunction isVirtualClick(event) {\n  if (event.mozInputSource === 0 && event.isTrusted)\n    return true;\n  return event.detail === 0 && !event.pointerType;\n}\nfunction onClickEvent(e) {\n  if (isVirtualClick(e)) {\n    hasEventBeforeFocus = true;\n    modality = \"virtual\";\n  }\n}\nfunction onWindowFocus(event) {\n  if (event.target === window || event.target === document) {\n    return;\n  }\n  if (event.target instanceof Element && event.target.hasAttribute(\"tabindex\")) {\n    return;\n  }\n  if (!hasEventBeforeFocus && !hasBlurredWindowRecently) {\n    modality = \"virtual\";\n    trigger(\"virtual\", event);\n  }\n  hasEventBeforeFocus = false;\n  hasBlurredWindowRecently = false;\n}\nfunction onWindowBlur() {\n  hasEventBeforeFocus = false;\n  hasBlurredWindowRecently = true;\n}\nfunction isFocusVisible() {\n  return modality !== \"pointer\";\n}\nfunction setupGlobalFocusEvents() {\n  if (!(0,_zag_js_dom_query__WEBPACK_IMPORTED_MODULE_0__.isDom)() || hasSetup) {\n    return;\n  }\n  const { focus } = HTMLElement.prototype;\n  HTMLElement.prototype.focus = function focusElement(...args) {\n    hasEventBeforeFocus = true;\n    focus.apply(this, args);\n  };\n  document.addEventListener(\"keydown\", onKeyboardEvent, true);\n  document.addEventListener(\"keyup\", onKeyboardEvent, true);\n  document.addEventListener(\"click\", onClickEvent, true);\n  window.addEventListener(\"focus\", onWindowFocus, true);\n  window.addEventListener(\"blur\", onWindowBlur, false);\n  if (typeof PointerEvent !== \"undefined\") {\n    document.addEventListener(\"pointerdown\", onPointerEvent, true);\n    document.addEventListener(\"pointermove\", onPointerEvent, true);\n    document.addEventListener(\"pointerup\", onPointerEvent, true);\n  } else {\n    document.addEventListener(\"mousedown\", onPointerEvent, true);\n    document.addEventListener(\"mousemove\", onPointerEvent, true);\n    document.addEventListener(\"mouseup\", onPointerEvent, true);\n  }\n  hasSetup = true;\n}\nfunction trackFocusVisible(fn) {\n  setupGlobalFocusEvents();\n  fn(isFocusVisible());\n  const handler = () => fn(isFocusVisible());\n  handlers.add(handler);\n  return () => {\n    handlers.delete(handler);\n  };\n}\nfunction trackInteractionModality(fn) {\n  setupGlobalFocusEvents();\n  fn(modality);\n  const handler = () => fn(modality);\n  handlers.add(handler);\n  return () => {\n    handlers.delete(handler);\n  };\n}\nfunction setInteractionModality(value) {\n  modality = value;\n  trigger(value, null);\n}\nfunction getInteractionModality() {\n  return modality;\n}\n\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHphZy1qcy9mb2N1cy12aXNpYmxlL2Rpc3QvaW5kZXgubWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sd0RBQUs7QUFDWjtBQUNBO0FBQ0EsVUFBVSxRQUFRO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUU7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL25vZGVfbW9kdWxlcy9AemFnLWpzL2ZvY3VzLXZpc2libGUvZGlzdC9pbmRleC5tanM/ZTNhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBzcmMvaW5kZXgudHNcbmltcG9ydCB7IGlzRG9tIH0gZnJvbSBcIkB6YWctanMvZG9tLXF1ZXJ5XCI7XG52YXIgaGFzU2V0dXAgPSBmYWxzZTtcbnZhciBtb2RhbGl0eSA9IG51bGw7XG52YXIgaGFzRXZlbnRCZWZvcmVGb2N1cyA9IGZhbHNlO1xudmFyIGhhc0JsdXJyZWRXaW5kb3dSZWNlbnRseSA9IGZhbHNlO1xudmFyIGhhbmRsZXJzID0gLyogQF9fUFVSRV9fICovIG5ldyBTZXQoKTtcbmZ1bmN0aW9uIHRyaWdnZXIobW9kYWxpdHkyLCBldmVudCkge1xuICBoYW5kbGVycy5mb3JFYWNoKChoYW5kbGVyKSA9PiBoYW5kbGVyKG1vZGFsaXR5MiwgZXZlbnQpKTtcbn1cbnZhciBpc01hYyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93Lm5hdmlnYXRvciAhPSBudWxsID8gL15NYWMvLnRlc3Qod2luZG93Lm5hdmlnYXRvci5wbGF0Zm9ybSkgOiBmYWxzZTtcbmZ1bmN0aW9uIGlzVmFsaWRLZXkoZSkge1xuICByZXR1cm4gIShlLm1ldGFLZXkgfHwgIWlzTWFjICYmIGUuYWx0S2V5IHx8IGUuY3RybEtleSB8fCBlLmtleSA9PT0gXCJDb250cm9sXCIgfHwgZS5rZXkgPT09IFwiU2hpZnRcIiB8fCBlLmtleSA9PT0gXCJNZXRhXCIpO1xufVxuZnVuY3Rpb24gb25LZXlib2FyZEV2ZW50KGV2ZW50KSB7XG4gIGhhc0V2ZW50QmVmb3JlRm9jdXMgPSB0cnVlO1xuICBpZiAoaXNWYWxpZEtleShldmVudCkpIHtcbiAgICBtb2RhbGl0eSA9IFwia2V5Ym9hcmRcIjtcbiAgICB0cmlnZ2VyKFwia2V5Ym9hcmRcIiwgZXZlbnQpO1xuICB9XG59XG5mdW5jdGlvbiBvblBvaW50ZXJFdmVudChldmVudCkge1xuICBtb2RhbGl0eSA9IFwicG9pbnRlclwiO1xuICBpZiAoZXZlbnQudHlwZSA9PT0gXCJtb3VzZWRvd25cIiB8fCBldmVudC50eXBlID09PSBcInBvaW50ZXJkb3duXCIpIHtcbiAgICBoYXNFdmVudEJlZm9yZUZvY3VzID0gdHJ1ZTtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC5jb21wb3NlZFBhdGggPyBldmVudC5jb21wb3NlZFBhdGgoKVswXSA6IGV2ZW50LnRhcmdldDtcbiAgICBsZXQgbWF0Y2hlcyA9IGZhbHNlO1xuICAgIHRyeSB7XG4gICAgICBtYXRjaGVzID0gdGFyZ2V0Lm1hdGNoZXMoXCI6Zm9jdXMtdmlzaWJsZVwiKTtcbiAgICB9IGNhdGNoIHtcbiAgICB9XG4gICAgaWYgKG1hdGNoZXMpXG4gICAgICByZXR1cm47XG4gICAgdHJpZ2dlcihcInBvaW50ZXJcIiwgZXZlbnQpO1xuICB9XG59XG5mdW5jdGlvbiBpc1ZpcnR1YWxDbGljayhldmVudCkge1xuICBpZiAoZXZlbnQubW96SW5wdXRTb3VyY2UgPT09IDAgJiYgZXZlbnQuaXNUcnVzdGVkKVxuICAgIHJldHVybiB0cnVlO1xuICByZXR1cm4gZXZlbnQuZGV0YWlsID09PSAwICYmICFldmVudC5wb2ludGVyVHlwZTtcbn1cbmZ1bmN0aW9uIG9uQ2xpY2tFdmVudChlKSB7XG4gIGlmIChpc1ZpcnR1YWxDbGljayhlKSkge1xuICAgIGhhc0V2ZW50QmVmb3JlRm9jdXMgPSB0cnVlO1xuICAgIG1vZGFsaXR5ID0gXCJ2aXJ0dWFsXCI7XG4gIH1cbn1cbmZ1bmN0aW9uIG9uV2luZG93Rm9jdXMoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnRhcmdldCA9PT0gd2luZG93IHx8IGV2ZW50LnRhcmdldCA9PT0gZG9jdW1lbnQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEVsZW1lbnQgJiYgZXZlbnQudGFyZ2V0Lmhhc0F0dHJpYnV0ZShcInRhYmluZGV4XCIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGlmICghaGFzRXZlbnRCZWZvcmVGb2N1cyAmJiAhaGFzQmx1cnJlZFdpbmRvd1JlY2VudGx5KSB7XG4gICAgbW9kYWxpdHkgPSBcInZpcnR1YWxcIjtcbiAgICB0cmlnZ2VyKFwidmlydHVhbFwiLCBldmVudCk7XG4gIH1cbiAgaGFzRXZlbnRCZWZvcmVGb2N1cyA9IGZhbHNlO1xuICBoYXNCbHVycmVkV2luZG93UmVjZW50bHkgPSBmYWxzZTtcbn1cbmZ1bmN0aW9uIG9uV2luZG93Qmx1cigpIHtcbiAgaGFzRXZlbnRCZWZvcmVGb2N1cyA9IGZhbHNlO1xuICBoYXNCbHVycmVkV2luZG93UmVjZW50bHkgPSB0cnVlO1xufVxuZnVuY3Rpb24gaXNGb2N1c1Zpc2libGUoKSB7XG4gIHJldHVybiBtb2RhbGl0eSAhPT0gXCJwb2ludGVyXCI7XG59XG5mdW5jdGlvbiBzZXR1cEdsb2JhbEZvY3VzRXZlbnRzKCkge1xuICBpZiAoIWlzRG9tKCkgfHwgaGFzU2V0dXApIHtcbiAgICByZXR1cm47XG4gIH1cbiAgY29uc3QgeyBmb2N1cyB9ID0gSFRNTEVsZW1lbnQucHJvdG90eXBlO1xuICBIVE1MRWxlbWVudC5wcm90b3R5cGUuZm9jdXMgPSBmdW5jdGlvbiBmb2N1c0VsZW1lbnQoLi4uYXJncykge1xuICAgIGhhc0V2ZW50QmVmb3JlRm9jdXMgPSB0cnVlO1xuICAgIGZvY3VzLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICB9O1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBvbktleWJvYXJkRXZlbnQsIHRydWUpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgb25LZXlib2FyZEV2ZW50LCB0cnVlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIG9uQ2xpY2tFdmVudCwgdHJ1ZSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZm9jdXNcIiwgb25XaW5kb3dGb2N1cywgdHJ1ZSk7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiYmx1clwiLCBvbldpbmRvd0JsdXIsIGZhbHNlKTtcbiAgaWYgKHR5cGVvZiBQb2ludGVyRXZlbnQgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwicG9pbnRlcmRvd25cIiwgb25Qb2ludGVyRXZlbnQsIHRydWUpO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJwb2ludGVybW92ZVwiLCBvblBvaW50ZXJFdmVudCwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInBvaW50ZXJ1cFwiLCBvblBvaW50ZXJFdmVudCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCBvblBvaW50ZXJFdmVudCwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCBvblBvaW50ZXJFdmVudCwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgb25Qb2ludGVyRXZlbnQsIHRydWUpO1xuICB9XG4gIGhhc1NldHVwID0gdHJ1ZTtcbn1cbmZ1bmN0aW9uIHRyYWNrRm9jdXNWaXNpYmxlKGZuKSB7XG4gIHNldHVwR2xvYmFsRm9jdXNFdmVudHMoKTtcbiAgZm4oaXNGb2N1c1Zpc2libGUoKSk7XG4gIGNvbnN0IGhhbmRsZXIgPSAoKSA9PiBmbihpc0ZvY3VzVmlzaWJsZSgpKTtcbiAgaGFuZGxlcnMuYWRkKGhhbmRsZXIpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGhhbmRsZXJzLmRlbGV0ZShoYW5kbGVyKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHRyYWNrSW50ZXJhY3Rpb25Nb2RhbGl0eShmbikge1xuICBzZXR1cEdsb2JhbEZvY3VzRXZlbnRzKCk7XG4gIGZuKG1vZGFsaXR5KTtcbiAgY29uc3QgaGFuZGxlciA9ICgpID0+IGZuKG1vZGFsaXR5KTtcbiAgaGFuZGxlcnMuYWRkKGhhbmRsZXIpO1xuICByZXR1cm4gKCkgPT4ge1xuICAgIGhhbmRsZXJzLmRlbGV0ZShoYW5kbGVyKTtcbiAgfTtcbn1cbmZ1bmN0aW9uIHNldEludGVyYWN0aW9uTW9kYWxpdHkodmFsdWUpIHtcbiAgbW9kYWxpdHkgPSB2YWx1ZTtcbiAgdHJpZ2dlcih2YWx1ZSwgbnVsbCk7XG59XG5mdW5jdGlvbiBnZXRJbnRlcmFjdGlvbk1vZGFsaXR5KCkge1xuICByZXR1cm4gbW9kYWxpdHk7XG59XG5leHBvcnQge1xuICBnZXRJbnRlcmFjdGlvbk1vZGFsaXR5LFxuICBzZXRJbnRlcmFjdGlvbk1vZGFsaXR5LFxuICB0cmFja0ZvY3VzVmlzaWJsZSxcbiAgdHJhY2tJbnRlcmFjdGlvbk1vZGFsaXR5XG59O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXgubWpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@zag-js/focus-visible/dist/index.mjs\n");

/***/ })

};
;