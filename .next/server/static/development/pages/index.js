module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! semantic-ui-css/semantic.min.css */ "./node_modules/semantic-ui-css/semantic.min.css");
/* harmony import */ var semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_css_semantic_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _MapContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MapContainer */ "./components/MapContainer.jsx");






const assetPrefix = "";
const salisbury = `${assetPrefix}/static/images/salisbury.png`;
const tricountyLogo = `${assetPrefix}/static/images/tricountyLogo.png`;
const msrclogo = `${assetPrefix}/static/images/msrgclogo.png`;

const footer = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2572130285"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Segment"], {
  inverted: true,
  vertical: true,
  style: {
    margin: '2em 0em 0em',
    padding: '2em 0em'
  }
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Container"], {
  textAlign: "center"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
  divided: true,
  inverted: true,
  stackable: true
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
  width: 4
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
  inverted: true,
  as: "h3",
  content: "Contact Us"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2572130285" + " " + 'differentcolor'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2572130285" + " " + 'text'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "1101 Camden Ave", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
  className: "jsx-2572130285"
}), "Salisbury, MD 21801"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "esrgc@salisbury.edu"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, null, "Twitter: @esrgc"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
  width: 8
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
  inverted: true,
  as: "h3",
  content: "Our Partners"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2572130285" + " " + 'differentcolor'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2572130285" + " " + "ui basic segment"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2572130285" + " " + 'ui centered grid'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2572130285" + " " + 'ui row'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
  href: 'http://www.midshore.org/index'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  className: "jsx-2572130285"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: msrclogo,
  className: "jsx-2572130285" + " " + 'ui small image'
}))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
  href: 'http://www.midshore.org/index'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  className: "jsx-2572130285"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: tricountyLogo,
  className: "jsx-2572130285" + " " + 'ui small image'
}))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
  href: 'http://www.lowershore.org/'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
  className: "jsx-2572130285"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: salisbury,
  className: "jsx-2572130285" + " " + 'ui small image'
})))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Grid"].Column, {
  width: 4
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Header"], {
  inverted: true,
  as: "h4",
  content: "Our Location"
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-2572130285" + " " + 'map'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_MapContainer__WEBPACK_IMPORTED_MODULE_5__["default"], null)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["Divider"], {
  inverted: true,
  section: true
}), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"], {
  horizontal: true,
  inverted: true,
  divided: true,
  link: true,
  size: "small"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
  as: "a",
  href: "#"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("i", {
  className: "jsx-2572130285" + " " + "copyright outline icon"
}), "Copyright ESRGC 2019")))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2572130285"
}, ".differentcolor.jsx-2572130285{color:black;background-color:white;height:17vh;object-fit:contain;margin:auto;border-radius:25px;}.text.jsx-2572130285{text-align:center;font-weight:bold;padding-top:2vh;font-size:large;line-height:1.6;}.map.jsx-2572130285{height:17vh;object-fit:scale-down;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nhcm9saW5lbWFuc3VldGkvZXNyZ2NfbmV4dC9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpRk8sQUFJcUIsQUFRTSxBQVFOLFlBZlcsQUFnQkQsTUFSTCxnQkFTbkIsQ0FoQmMsQUFRSSxZQVBHLElBUUgsZUFQSixDQVFJLFdBUEcsS0FRckIsY0FQQSIsImZpbGUiOiIvaG9tZS9jYXJvbGluZW1hbnN1ZXRpL2VzcmdjX25leHQvY29tcG9uZW50cy9Gb290ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3NlbWFudGljLXVpLWNzcy9zZW1hbnRpYy5taW4uY3NzJztcbmltcG9ydCB7IFNlZ21lbnQsIENvbnRhaW5lciwgTGlzdCwgSGVhZGVyLCBHcmlkLCBEaXZpZGVyIH0gZnJvbSAnc2VtYW50aWMtdWktcmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcbmltcG9ydCBNYXBDb250YWluZXIgZnJvbSAnLi9NYXBDb250YWluZXInO1xuXG5jb25zdCBhc3NldFByZWZpeCA9IHByb2Nlc3MuZW52LkFTU0VUX1BSRUZJWDtcbmNvbnN0IHNhbGlzYnVyeSA9ICBgJHthc3NldFByZWZpeH0vc3RhdGljL2ltYWdlcy9zYWxpc2J1cnkucG5nYDtcbmNvbnN0IHRyaWNvdW50eUxvZ28gPSAgYCR7YXNzZXRQcmVmaXh9L3N0YXRpYy9pbWFnZXMvdHJpY291bnR5TG9nby5wbmdgO1xuY29uc3QgbXNyY2xvZ28gPSAgYCR7YXNzZXRQcmVmaXh9L3N0YXRpYy9pbWFnZXMvbXNyZ2Nsb2dvLnBuZ2A7XG5cbmNvbnN0IGZvb3RlciA9ICgpID0+IChcbiAgICA8ZGl2PlxuICAgICA8U2VnbWVudCBpbnZlcnRlZCB2ZXJ0aWNhbCBzdHlsZT17eyBtYXJnaW46ICcyZW0gMGVtIDBlbScsIHBhZGRpbmc6ICcyZW0gMGVtJyB9fT5cbiAgICAgIDxDb250YWluZXIgdGV4dEFsaWduPSdjZW50ZXInPlxuICAgICAgICA8R3JpZCBkaXZpZGVkIGludmVydGVkIHN0YWNrYWJsZT5cbiAgICAgICAgIFxuICAgICAgICAgIDxHcmlkLkNvbHVtbiB3aWR0aD17NH0+XG4gICAgICAgICAgICA8SGVhZGVyIGludmVydGVkIGFzPSdoMycgY29udGVudD0nQ29udGFjdCBVcycgLz5cbiAgICAgICAgICAgIDxMaXN0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpZmZlcmVudGNvbG9yJz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3RleHQnPlxuICAgICAgICAgICAgICA8TGlzdC5JdGVtPjExMDEgQ2FtZGVuIEF2ZTxiciAvPlNhbGlzYnVyeSwgTUQgMjE4MDE8L0xpc3QuSXRlbT5cbiAgICAgICAgICAgICAgPExpc3QuSXRlbT5lc3JnY0BzYWxpc2J1cnkuZWR1PC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+VHdpdHRlcjogQGVzcmdjPC9MaXN0Lkl0ZW0+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgPC9MaXN0PlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG4gICAgICAgXG4gICAgICAgICAgPEdyaWQuQ29sdW1uIHdpZHRoPXs4fT5cbiAgICAgICAgICAgIDxIZWFkZXIgaW52ZXJ0ZWQgYXM9J2gzJyBjb250ZW50PSdPdXIgUGFydG5lcnMnIC8+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2RpZmZlcmVudGNvbG9yJz5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgYmFzaWMgc2VnbWVudFwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndWkgY2VudGVyZWQgZ3JpZCc+XG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VpIHJvdyc+XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eydodHRwOi8vd3d3Lm1pZHNob3JlLm9yZy9pbmRleCd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndWkgc21hbGwgaW1hZ2UnIHNyYz17bXNyY2xvZ299IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXsnaHR0cDovL3d3dy5taWRzaG9yZS5vcmcvaW5kZXgnfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9J3VpIHNtYWxsIGltYWdlJyBzcmM9e3RyaWNvdW50eUxvZ299Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9eydodHRwOi8vd3d3Lmxvd2Vyc2hvcmUub3JnLyd9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT0ndWkgc21hbGwgaW1hZ2UnIHNyYz17c2FsaXNidXJ5fS8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvR3JpZC5Db2x1bW4+XG5cbiAgICAgICAgICA8R3JpZC5Db2x1bW4gd2lkdGg9ezR9PlxuICAgICAgICAgICAgPEhlYWRlciBpbnZlcnRlZCBhcz0naDQnIGNvbnRlbnQ9J091ciBMb2NhdGlvbicgLz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdtYXAnPlxuICAgICAgICAgICAgICA8TWFwQ29udGFpbmVyIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L0dyaWQuQ29sdW1uPlxuICAgICAgICA8L0dyaWQ+XG5cbiAgICAgICAgPERpdmlkZXIgaW52ZXJ0ZWQgc2VjdGlvbiAvPlxuICAgICAgICA8TGlzdCBob3Jpem9udGFsIGludmVydGVkIGRpdmlkZWQgbGluayBzaXplPSdzbWFsbCc+XG4gICAgICAgICAgPExpc3QuSXRlbSBhcz0nYScgaHJlZj0nIyc+XG4gICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJjb3B5cmlnaHQgb3V0bGluZSBpY29uXCIgLz5Db3B5cmlnaHQgRVNSR0MgMjAxOVxuICAgICAgICAgIDwvTGlzdC5JdGVtPlxuICAgICAgICA8L0xpc3Q+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L1NlZ21lbnQ+XG5cbiAgICA8c3R5bGUganN4PlxuICAgICAge2BcbiAgICBcbiAgICAgIC5kaWZmZXJlbnRjb2xvciB7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG4gICAgICAgIGhlaWdodDogMTd2aDtcbiAgICAgICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xuICAgICAgfVxuICAgICAgLnRleHQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBwYWRkaW5nLXRvcDogMnZoO1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgICAgICBsaW5lLWhlaWdodDogMS42O1xuICAgICAgfVxuICAgICAgXG4gICAgICAubWFwIHtcbiAgICAgICAgaGVpZ2h0OiAxN3ZoO1xuICAgICAgICBvYmplY3QtZml0OiBzY2FsZS1kb3duO1xuICAgICAgfWB9XG4gICAgPC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBmb290ZXI7Il19 */\n/*@ sourceURL=/home/carolinemansueti/esrgc_next/components/Footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (footer);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Navigation */ "./components/Navigation.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");






const Layout = props => {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1681006952"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1681006952"
  }, "ESRGC"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdn.jsdelivr.net/npm/semantic-ui@2.4.2/dist/semantic.min.css",
    className: "jsx-1681006952"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",
    integrity: "sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",
    crossOrigin: "anonymous",
    className: "jsx-1681006952"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Navigation__WEBPACK_IMPORTED_MODULE_3__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", {
    className: "jsx-1681006952"
  }, props.children), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1681006952"
  }, "body.jsx-1681006952{margin-top:16vh;overflow:visible;}a.jsx-1681006952{-webkit-text-decoration:none;text-decoration:none;}body.h1.jsx-1681006952{color:red;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nhcm9saW5lbWFuc3VldGkvZXNyZ2NfbmV4dC9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwQmlCLEFBRXFDLEFBSVMsQUFJWCxVQUNkLE1BUmlCLGlCQUNyQixpQkFHSSIsImZpbGUiOiIvaG9tZS9jYXJvbGluZW1hbnN1ZXRpL2VzcmdjX25leHQvY29tcG9uZW50cy9MYXlvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XG5pbXBvcnQgTmF2aWdhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL05hdmlnYXRpb24nO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNvbnN0IExheW91dCA9ICggcHJvcHMgKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgIDx0aXRsZT5FU1JHQzwvdGl0bGU+XG4gICAgICAgICAgICAgICAgPGxpbmsgXG4gICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIiBcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vc2VtYW50aWMtdWlAMi40LjIvZGlzdC9zZW1hbnRpYy5taW4uY3NzXCIgLz5cbiAgICAgICAgICAgICAgICA8bGlua1xuICAgICAgICAgICAgICAgICAgICByZWw9XCJzdHlsZXNoZWV0XCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cImh0dHBzOi8vbWF4Y2RuLmJvb3RzdHJhcGNkbi5jb20vYm9vdHN0cmFwLzQuMy4xL2Nzcy9ib290c3RyYXAubWluLmNzc1wiXG4gICAgICAgICAgICAgICAgICAgIGludGVncml0eT1cInNoYTM4NC1nZ095UjBpWENiTVF2M1hpcG1hMzRNRCtkSC8xZlE3ODQvajZjWS9pSlRRVU9oY1dyN3g5SnZvUnhUMk1adzFUXCJcbiAgICAgICAgICAgICAgICAgICAgY3Jvc3NPcmlnaW49XCJhbm9ueW1vdXNcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICA8TmF2aWdhdGlvbiAvPlxuICAgICAgICAgICAgPGJvZHk+XG4gICAgICAgICAgICAgICAge3Byb3BzLmNoaWxkcmVufVxuICAgICAgICAgICAgPC9ib2R5PlxuICAgICAgICAgICAgXG4gICAgICAgICAgICA8c3R5bGUganN4PlxuICAgICAgICAgICAgICAgIHtgIGJvZHkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxNnZoO1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgYm9keS5oMSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogcmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYH1cbiAgICAgICAgICAgIDwvc3R5bGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=/home/carolinemansueti/esrgc_next/components/Layout.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/MapContainer.jsx":
/*!*************************************!*\
  !*** ./components/MapContainer.jsx ***!
  \*************************************/
/*! exports provided: MapContainer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapContainer", function() { return MapContainer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-maps-react */ "google-maps-react");
/* harmony import */ var google_maps_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_maps_react__WEBPACK_IMPORTED_MODULE_1__);


class MapContainer extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const style = {
      width: '250px',
      height: '170px'
    };
    const pos = {
      lat: 38.36534,
      lng: -75.602202
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Map"], {
      google: this.props.google,
      zoom: 15,
      style: style,
      initialCenter: pos
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["Marker"], {
      title: "ESRGC",
      name: "ESRGC",
      position: pos
    })));
  }

}
/* harmony default export */ __webpack_exports__["default"] = (Object(google_maps_react__WEBPACK_IMPORTED_MODULE_1__["GoogleApiWrapper"])({
  apiKey: 'AIzaSyA0eLph8dO_6VkpRXZZIKhHNC6DIM4wQfE'
})(MapContainer));

/***/ }),

/***/ "./components/Navigation.js":
/*!**********************************!*\
  !*** ./components/Navigation.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);



const assetPrefix = "";

const Navigation = () => {
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1667260644"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    id: "nav1",
    className: "jsx-1667260644" + " " + "ui fixed massive borderless menu"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1667260644" + " " + "ui item"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    as: `${assetPrefix}/`
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-1667260644" + " " + "nav-link"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("img", {
    src: __webpack_require__(/*! ../static/images/ESRGC_Logo_Gold_no_text.png */ "./static/images/ESRGC_Logo_Gold_no_text.png"),
    className: "jsx-1667260644" + " " + 'ui tiny image'
  })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1667260644" + " " + "ui item"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    as: `${assetPrefix}/`
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-1667260644" + " " + "nav-link"
  }, "Eastern Shore Regional GIS Cooperative"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", {
    id: "right",
    className: "jsx-1667260644" + " " + "right menu"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1667260644" + " " + "ui item"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    as: `${assetPrefix}/about`
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-1667260644" + " " + "nav-link"
  }, "About"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1667260644" + " " + "ui item"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/services",
    as: `${assetPrefix}/services`
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-1667260644" + " " + "nav-link"
  }, "Services"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1667260644" + " " + "ui item"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/work",
    as: `${assetPrefix}/work`
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-1667260644" + " " + "nav-link"
  }, "Our Work"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1667260644" + " " + "ui item"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/data",
    as: `${assetPrefix}/data`
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-1667260644" + " " + "nav-link"
  }, "Data"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1667260644" + " " + "ui item"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/news",
    as: `${assetPrefix}/news`
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-1667260644" + " " + "nav-link"
  }, "News"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-1667260644" + " " + "ui item"
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    as: `${assetPrefix}/contact`
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    className: "jsx-1667260644" + " " + "nav-link"
  }, "Contact Us"))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "1667260644"
  }, "#nav1.jsx-1667260644{min-height:120px;box-shadow:0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);opacity:.8;}a.jsx-1667260644{color:black;font-weight:bold;font-size:1.3em;-webkit-text-decoration:none;text-decoration:none;}a.jsx-1667260644:hover{color:gray;-webkit-text-decoration:none;text-decoration:none;cursor:pointer;}#right.jsx-1667260644 a.jsx-1667260644::after{background-color:yellow;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nhcm9saW5lbWFuc3VldGkvZXNyZ2NfbmV4dC9jb21wb25lbnRzL05hdmlnYXRpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaURhLEFBR3NDLEFBTUwsQUFRRCxBQU1hLFdBTEgsQ0FSSixLQU4yRCxPQW9CaEYsS0Fib0IsZ0JBQ0ssZ0JBT04sZUFDbkIsVUFmZSxTQVFmLEVBUEEiLCJmaWxlIjoiL2hvbWUvY2Fyb2xpbmVtYW5zdWV0aS9lc3JnY19uZXh0L2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBhc3NldFByZWZpeCA9IHByb2Nlc3MuZW52LkFTU0VUX1BSRUZJWDtcblxuY29uc3QgTmF2aWdhdGlvbiA9ICgpID0+IHtcblxuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGZpeGVkIG1hc3NpdmUgYm9yZGVybGVzcyBtZW51XCIgaWQ9XCJuYXYxXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIiBhcz17YCR7YXNzZXRQcmVmaXh9L2B9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPSd1aSB0aW55IGltYWdlJyBzcmM9e3JlcXVpcmUoJy4uL3N0YXRpYy9pbWFnZXMvRVNSR0NfTG9nb19Hb2xkX25vX3RleHQucG5nJyl9Lz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInVpIGl0ZW1cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCIgYXM9e2Ake2Fzc2V0UHJlZml4fS9gfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJuYXYtbGlua1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEVhc3Rlcm4gU2hvcmUgUmVnaW9uYWwgR0lTIENvb3BlcmF0aXZlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgIFxuICAgICAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwicmlnaHQgbWVudVwiIGlkPVwicmlnaHRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIiBhcz17YCR7YXNzZXRQcmVmaXh9L2Fib3V0YH0+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5BYm91dDwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VydmljZXNcIiBhcz17YCR7YXNzZXRQcmVmaXh9L3NlcnZpY2VzYH0+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5TZXJ2aWNlczwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvd29ya1wiYXM9e2Ake2Fzc2V0UHJlZml4fS93b3JrYH0+PGEgY2xhc3NOYW1lPVwibmF2LWxpbmtcIj5PdXIgV29yazwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZGF0YVwiIGFzPXtgJHthc3NldFByZWZpeH0vZGF0YWB9PjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+RGF0YTwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbmV3c1wiIGFzPXtgJHthc3NldFByZWZpeH0vbmV3c2B9PjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+TmV3czwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidWkgaXRlbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiIGFzPXtgJHthc3NldFByZWZpeH0vY29udGFjdGB9PjxhIGNsYXNzTmFtZT1cIm5hdi1saW5rXCI+Q29udGFjdCBVczwvYT48L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHN0eWxlIGpzeD5cbiAgICAgICAgICAgIHtgXG4gICAgICAgICAgICAgICAgI25hdjEge1xuICAgICAgICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxMjBweDtcbiAgICAgICAgICAgICAgICAgICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbiAgICAgICAgICAgICAgICAgICAgb3BhY2l0eTogLjg7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiBibGFjaztcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4zZW07XG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgYTpob3ZlciBcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICBjb2xvcjpncmF5OyBcbiAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjpub25lOyBcbiAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyOyAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICNyaWdodCBhOjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHllbGxvdztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBgfVxuICAgICAgICA8L3N0eWxlPlxuICAgIDwvZGl2PlxuXG5cbik7XG4gICAgXG59XG5leHBvcnQgZGVmYXVsdCBOYXZpZ2F0aW9uOyJdfQ== */\n/*@ sourceURL=/home/carolinemansueti/esrgc_next/components/Navigation.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Navigation);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver =  false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor() {
    super(...arguments);

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.props.prefetch && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.props.prefetch || "undefined" === 'undefined') return; // Prefetch the JSON page if asked (only in the client)

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the childen provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
      ref: el => this.handleRef(el),
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;
Link.defaultProps = {
  prefetch: true
};

if (true) {
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath'];
const propertyFields = ['components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
propertyFields.concat(urlPropertyFields).forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  propertyFields.forEach(field => {
    // Here we need to use Object.defineProperty because, we need to return
    // the property assigned to the actual router
    // The value might get changed as we change routes and this is the
    // proper way to access it
    (0, _defineProperty.default)(instance, field, {
      get() {
        return _router[field];
      }

    });
  });
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./node_modules/semantic-ui-css/semantic.min.css":
/*!*******************************************************!*\
  !*** ./node_modules/semantic-ui-css/semantic.min.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__);






const assetPrefix = "";
const banner = `${assetPrefix}/static/images/home_banner.png`;
const logo = `${assetPrefix}/static/images/ESRGC_Logo_Gold_no_text.png`;
const data = `${assetPrefix}/static/images/assateague2.png`;
const services = `${assetPrefix}/static/images/panelinstall.png`;
const about = `${assetPrefix}/static/images/network.png`;

const Home = () => react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4149970849" + " " + "landing"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  id: "banner",
  className: "jsx-4149970849"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: banner,
  className: "jsx-4149970849"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  id: "logo",
  className: "jsx-4149970849"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
  src: logo,
  className: "jsx-4149970849"
}))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4149970849" + " " + 'ui center aligned very padded basic segment'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h2", {
  className: "jsx-4149970849"
}, "Welcome to ESRGC")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4149970849" + " " + "noz"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4149970849" + " " + 'ui grid container'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4149970849" + " " + 'ui three column row'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4149970849" + " " + 'ui column'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  key: "33234",
  className: "jsx-4149970849" + " " + "ui fluid card"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Image"], {
  size: "large",
  src: about,
  title: "About"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-4149970849" + " " + "ui center aligned header"
}, "About"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4149970849" + " " + 'ui column'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/services"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  key: "9889",
  className: "jsx-4149970849" + " " + "ui fluid card"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Image"], {
  size: "large",
  src: services,
  title: "Services"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-4149970849" + " " + "ui center aligned header"
}, "Services"))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  className: "jsx-4149970849" + " " + 'ui column'
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/data"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
  key: "12312",
  className: "jsx-4149970849" + " " + "ui fluid card"
}, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Image"], {
  size: "large",
  src: data,
  title: "Data"
})), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_5__["Card"].Content, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
  className: "jsx-4149970849" + " " + "ui center aligned header"
}, "Data")))))))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "4149970849"
}, "#banner.jsx-4149970849 img.jsx-4149970849{margin-top:1vh;position:relative;-webkit-animation:fadeout 2s;-moz-animation:fadeout 2s;-ms-animation:fadeout 2s;-o-animation:fadeout 2s;-webkit-animation:fadeout-jsx-4149970849 2s;animation:fadeout-jsx-4149970849 2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;}@-webkit-keyframes fadeout-jsx-4149970849{from{opacity:1;}to{opacity:.6;}}@keyframes fadeout-jsx-4149970849{from{opacity:1;}to{opacity:.6;}}@-moz-keyframes fadeout{from.jsx-4149970849{opacity:1;}to.jsx-4149970849{opacity:.7;}}@-webkit-keyframes fadeout{from.jsx-4149970849{opacity:1;}to.jsx-4149970849{opacity:.7;}}@-ms-keyframes fadeout{from.jsx-4149970849{opacity:1;}to.jsx-4149970849{opacity:.7;}}@-o-keyframes fadeout{from.jsx-4149970849{opacity:1;}to.jsx-4149970849{opacity:.7;}}#logo.jsx-4149970849 img.jsx-4149970849{position:absolute;top:50%;left:45%;-webkit-animation:fadein 2s;-moz-animation:fadein 2s;-ms-animation:fadein 2s;-o-animation:fadein 2s;-webkit-animation:fadein-jsx-4149970849 2s;animation:fadein-jsx-4149970849 2s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in;}@-webkit-keyframes fadein-jsx-4149970849{from{opacity:0;}to{opacity:1;}}@keyframes fadein-jsx-4149970849{from{opacity:0;}to{opacity:1;}}@-moz-keyframes fadein{from.jsx-4149970849{opacity:0;}to.jsx-4149970849{opacity:1;}}@-webkit-keyframes fadein{from.jsx-4149970849{opacity:0;}to.jsx-4149970849{opacity:1;}}@-ms-keyframes fadein{from.jsx-4149970849{opacity:0;}to.jsx-4149970849{opacity:1;}}@-o-keyframes fadein{from.jsx-4149970849{opacity:0;}to.jsx-4149970849{opacity:1;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2Nhcm9saW5lbWFuc3VldGkvZXNyZ2NfbmV4dC9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEyRk8sQUFJNEIsQUFZQyxBQUNDLEFBS0QsQUFDQyxBQUtELEFBQ0MsQUFLRCxBQUNDLEFBS0QsQUFDQyxBQUlELEFBZUEsQUFDQSxBQUtBLEFBQ0EsQUFLQSxBQUNBLEFBS0EsQUFDQSxBQUtBLEFBQ0EsVUFyRUMsQUFNQSxBQU1BLEFBTUEsQUFNQSxBQW9CQSxBQUNBLEFBS0EsQUFDQSxBQUtBLEFBQ0EsQUFLQSxBQUNBLEFBS0EsQUFDQSxDQXBFQyxBQU1BLEFBTUEsQUFNQSxBQU1BLElBcENBLEdBeUNaLFFBQ0MsT0F4Q3NCLEVBMkNELDJCQTFDQSxDQTJDRCx5QkExQ0UsQUEyQ0Qsd0JBQ0QsQ0EzQ0Msc0JBNENBLEVBM0NDLDRFQTRDUSxJQTNDQSw4REE0Q0ssSUEzQzlDLHdFQTRDQSIsImZpbGUiOiIvaG9tZS9jYXJvbGluZW1hbnN1ZXRpL2VzcmdjX25leHQvcGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9Gb290ZXInO1xuaW1wb3J0IHsgQ2FyZCwgSW1hZ2UgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCc7XG5cbmNvbnN0IGFzc2V0UHJlZml4ID0gcHJvY2Vzcy5lbnYuQVNTRVRfUFJFRklYO1xuY29uc3QgYmFubmVyID0gYCR7YXNzZXRQcmVmaXh9L3N0YXRpYy9pbWFnZXMvaG9tZV9iYW5uZXIucG5nYDtcbmNvbnN0IGxvZ28gPSAgYCR7YXNzZXRQcmVmaXh9L3N0YXRpYy9pbWFnZXMvRVNSR0NfTG9nb19Hb2xkX25vX3RleHQucG5nYDtcbmNvbnN0IGRhdGEgPSBgJHthc3NldFByZWZpeH0vc3RhdGljL2ltYWdlcy9hc3NhdGVhZ3VlMi5wbmdgO1xuY29uc3Qgc2VydmljZXMgPSBgJHthc3NldFByZWZpeH0vc3RhdGljL2ltYWdlcy9wYW5lbGluc3RhbGwucG5nYDtcbmNvbnN0IGFib3V0ID0gYCR7YXNzZXRQcmVmaXh9L3N0YXRpYy9pbWFnZXMvbmV0d29yay5wbmdgO1xuXG5jb25zdCBIb21lID0gKCkgPT4gKFxuICA8TGF5b3V0PlxuICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZ1wiPlxuICAgICAgPGRpdiBpZD0nYmFubmVyJz5cbiAgICAgICAgPGltZyBzcmM9e2Jhbm5lcn0gLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD0nbG9nbyc+XG4gICAgICAgIDxpbWcgc3JjPXtsb2dvfSAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT0ndWkgY2VudGVyIGFsaWduZWQgdmVyeSBwYWRkZWQgYmFzaWMgc2VnbWVudCc+XG4gICAgICA8aDI+V2VsY29tZSB0byBFU1JHQzwvaDI+XG4gICAgPC9kaXY+XG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9XCJub3pcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSBncmlkIGNvbnRhaW5lcic+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd1aSB0aHJlZSBjb2x1bW4gcm93Jz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndWkgY29sdW1uJz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBmbHVpZCBjYXJkXCIga2V5PSczMzIzNCc+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxJbWFnZSBzaXplPVwibGFyZ2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthYm91dH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPSdBYm91dCdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidWkgY2VudGVyIGFsaWduZWQgaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBBYm91dFxuICAgICAgICAgICAgICAgICAgICAgICAgPC9oMz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndWkgY29sdW1uJz5cbiAgICAgICAgICA8TGluayBocmVmPVwiL3NlcnZpY2VzXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBmbHVpZCBjYXJkXCIga2V5PVwiOTg4OVwiPlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8SW1hZ2Ugc2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17c2VydmljZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nU2VydmljZXMnXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8Q2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInVpIGNlbnRlciBhbGlnbmVkIGhlYWRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgU2VydmljZXNcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZC5Db250ZW50PlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J3VpIGNvbHVtbic+XG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9kYXRhXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ1aSBmbHVpZCBjYXJkXCIga2V5PVwiMTIzMTJcIj5cbiAgICAgICAgICAgICAgICAgICAgPENhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICAgICAgPEltYWdlIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2RhdGF9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT0nRGF0YSdcbiAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxDYXJkLkNvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwidWkgY2VudGVyIGFsaWduZWQgaGVhZGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBEYXRhXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8L0NhcmQuQ29udGVudD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICBcbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICBcbiAgICA8Rm9vdGVyIC8+XG4gICAgPHN0eWxlIGpzeD5cbiAgICAgIHtgXG4gICAgIFxuICAgICAgICAjYmFubmVyIGltZyB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxdmg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlb3V0IDJzOyAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG4gICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlb3V0IDJzOyAvKiBGaXJlZm94IDwgMTYgKi9cbiAgICAgICAgICAgICAgICAtbXMtYW5pbWF0aW9uOiBmYWRlb3V0IDJzOyAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xuICAgICAgICAgICAgICAgIC1vLWFuaW1hdGlvbjogZmFkZW91dCAyczsgLyogT3BlcmEgPCAxMi4xICovXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZW91dCAycztcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIH1cblxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgICAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDE7IH1cbiAgICAgICAgICAgIHRvICAgeyBvcGFjaXR5OiAuNjsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogRmlyZWZveCA8IDE2ICovXG4gICAgICAgIEAtbW96LWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICAgICAgICAgIGZyb20geyBvcGFjaXR5OiAxOyB9XG4gICAgICAgICAgICB0byAgIHsgb3BhY2l0eTogLjc7IH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qIFNhZmFyaSwgQ2hyb21lIGFuZCBPcGVyYSA+IDEyLjEgKi9cbiAgICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVvdXQge1xuICAgICAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDE7IH1cbiAgICAgICAgICAgIHRvICAgeyBvcGFjaXR5OiAuNzsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbiAgICAgICAgQC1tcy1rZXlmcmFtZXMgZmFkZW91dCB7XG4gICAgICAgICAgICBmcm9tIHsgb3BhY2l0eTogMTsgfVxuICAgICAgICAgICAgdG8gICB7IG9wYWNpdHk6IC43OyB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBPcGVyYSA8IDEyLjEgKi9cbiAgICAgICAgQC1vLWtleWZyYW1lcyBmYWRlb3V0IHtcbiAgICAgICAgICAgIGZyb20geyBvcGFjaXR5OiAxOyB9XG4gICAgICAgICAgICB0byAgIHsgb3BhY2l0eTogLjc7IH1cbiAgICAgICAgfVxuXG4gICAgICAgICNsb2dvIGltZyB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgIGxlZnQ6IDQ1JTtcblxuXG4gICAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZWluIDJzOyAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG4gICAgICAgICAgICAgIC1tb3otYW5pbWF0aW9uOiBmYWRlaW4gMnM7IC8qIEZpcmVmb3ggPCAxNiAqL1xuICAgICAgICAgICAgICAgIC1tcy1hbmltYXRpb246IGZhZGVpbiAyczsgLyogSW50ZXJuZXQgRXhwbG9yZXIgKi9cbiAgICAgICAgICAgICAgICAtby1hbmltYXRpb246IGZhZGVpbiAyczsgLyogT3BlcmEgPCAxMi4xICovXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDJzO1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgICAgICAgICB0byAgIHsgb3BhY2l0eTogMTsgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogRmlyZWZveCA8IDE2ICovXG4gICAgICAgIEAtbW96LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBTYWZhcmksIENocm9tZSBhbmQgT3BlcmEgPiAxMi4xICovXG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAqL1xuICAgICAgICBALW1zLWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG4gICAgICAgIH1cblxuICAgICAgICAvKiBPcGVyYSA8IDEyLjEgKi9cbiAgICAgICAgQC1vLWtleWZyYW1lcyBmYWRlaW4ge1xuICAgICAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgICAgIHRvICAgeyBvcGFjaXR5OiAxOyB9XG4gICAgICAgIH1gfVxuICAgIDwvc3R5bGU+XG4gIDwvTGF5b3V0PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/home/carolinemansueti/esrgc_next/pages/index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./static/images/ESRGC_Logo_Gold_no_text.png":
/*!***************************************************!*\
  !*** ./static/images/ESRGC_Logo_Gold_no_text.png ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/carolinemansueti/esrgc_next/pages/index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "google-maps-react":
/*!************************************!*\
  !*** external "google-maps-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-maps-react");

/***/ }),

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/*!************************************!*\
  !*** external "semantic-ui-react" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map