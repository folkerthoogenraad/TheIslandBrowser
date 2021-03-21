/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nhtml, body {\n  padding: 0;\n  margin: 0; }\n\n@font-face {\n  font-family: 'ZanbarSquare';\n  src: url(\"/assets/fonts/ZanbarSquare.ttf\"); }\n\nhtml, body {\n  font-family: \"ZanbarSquare\";\n  font-family: 'Oxygen', sans-serif;\n  font-size: 14px; }\n\nbody {\n  position: relative;\n  z-index: 0;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh; }\n\n#canvas {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  image-rendering: pixelated; }\n\n.resource {\n  display: none; }\n\n.game-overlay {\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  position: relative;\n  z-index: 1; }\n  .game-overlay .bar-bottom {\n    bottom: 0;\n    transform: translateY(100%); }\n  .game-overlay .bar-top {\n    top: 0;\n    transform: translateY(-100%); }\n  .game-overlay .bar-bottom, .game-overlay .bar-top {\n    position: absolute;\n    left: 0;\n    color: white;\n    background: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 120px;\n    transition: transform;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-in-out;\n    font-size: 2em; }\n  .game-overlay.game-over .bar-bottom, .game-overlay.game-over .bar-top {\n    transform: none; }\n  .game-overlay:not(.completed) .complete-banner {\n    display: none; }\n  .game-overlay.completed .fail-banner {\n    display: none; }\n  .game-overlay .best-time {\n    color: #999; }\n  .game-overlay .debug-alpha-message {\n    position: absolute;\n    color: #999;\n    right: 16px;\n    bottom: 16px;\n    z-index: 1000; }\n\n.modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: visibility;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out; }\n  .modal .background {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.7;\n    background: black;\n    z-index: -1;\n    transition: opacity;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-in-out; }\n  .modal .content {\n    padding: 20px;\n    background: white;\n    transition: opacity, transform;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-in-out; }\n    .modal .content .close {\n      padding: 5px 20px;\n      background: #e27d1e;\n      color: white;\n      cursor: pointer; }\n  .modal.closed {\n    visibility: hidden; }\n    .modal.closed .background {\n      opacity: 0; }\n    .modal.closed .content {\n      opacity: 0;\n      transform: translateY(40px); }\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/main */ "./src/js/main.js");
/* harmony import */ var _js_main__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_main__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ts___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ts/ */ "./src/ts/index.ts");
/* harmony import */ var _ts___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ts___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scss/app.scss */ "./src/scss/app.scss");
/* harmony import */ var _scss_app_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_app_scss__WEBPACK_IMPORTED_MODULE_2__);
// Load the javascript main

 // Load the SASS main



/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

document.addEventListener("DOMContentLoaded", () => {
  console.log("Webpack template loaded.");
});

/***/ }),

/***/ "./src/scss/app.scss":
/*!***************************!*\
  !*** ./src/scss/app.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./app.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/app.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./src/ts/engine/DebugSettings.ts":
/*!****************************************!*\
  !*** ./src/ts/engine/DebugSettings.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.DebugSettings = void 0;
var DebugSettings = /** @class */ (function () {
    function DebugSettings() {
        this.drawColliders = false;
        this.drawTilemap = false;
    }
    return DebugSettings;
}());
exports.DebugSettings = DebugSettings;


/***/ }),

/***/ "./src/ts/engine/Game.ts":
/*!*******************************!*\
  !*** ./src/ts/engine/Game.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
var GLGraphics_1 = __webpack_require__(/*! graphics/webgl/GLGraphics */ "./src/ts/graphics/webgl/GLGraphics.ts");
var GLResourceManager_1 = __webpack_require__(/*! graphics/webgl/GLResourceManager */ "./src/ts/graphics/webgl/GLResourceManager.ts");
var Time_1 = __webpack_require__(/*! util/Time */ "./src/ts/util/Time.ts");
var DebugSettings_1 = __webpack_require__(/*! ./DebugSettings */ "./src/ts/engine/DebugSettings.ts");
var Input_1 = __webpack_require__(/*! ./Input */ "./src/ts/engine/Input.ts");
var Game = /** @class */ (function () {
    function Game(canvas) {
        var _this = this;
        this.currentTime = 0;
        this.fixedUpdateTime = 1 / 60;
        this.interUpdateTime = 0;
        this.running = false;
        this.animationFrame = 0;
        this.canvas = canvas;
        this.input = new Input_1.Input(canvas);
        // TODO swap out to WebGL
        // this.graphics = new Canvas2DGraphics(canvas);
        // this.resources = new Canvas2DResourceManager();
        var gl = canvas.getContext("webgl");
        this.graphics = new GLGraphics_1.GLGraphics(gl);
        this.resources = new GLResourceManager_1.GLResourceManager(gl);
        window.addEventListener("resize", function () { return _this.updateSize(); });
        this.updateSize();
        this.debugSettings = new DebugSettings_1.DebugSettings();
        window.debugSettings = this.debugSettings;
    }
    Game.prototype.run = function () {
        var _a;
        if (this.running)
            return;
        this.running = true;
        (_a = this.scene) === null || _a === void 0 ? void 0 : _a.init(this);
        this._requestAnimationFrame();
    };
    Game.prototype.stop = function () {
        this._cancelAnimationFrame();
        this.running = false;
    };
    Game.prototype.update = function () {
        var _a, _b, _c;
        this._requestAnimationFrame();
        var n = Time_1.now();
        var delta = n - this.currentTime;
        this.currentTime = n;
        if (delta > 0.1) {
            delta = 0.1;
        }
        this.input.poll();
        this.interUpdateTime += delta;
        // TODO fix the issue where we are lagging behind!
        // if there are too many updates at once and we can't keep up, we need to dump some frames
        // and send a warning.
        while (this.interUpdateTime > this.fixedUpdateTime) {
            this.interUpdateTime -= this.fixedUpdateTime;
            (_a = this.scene) === null || _a === void 0 ? void 0 : _a.fixedUpdate(this.fixedUpdateTime);
        }
        (_b = this.scene) === null || _b === void 0 ? void 0 : _b.update(delta);
        this.graphics.begin();
        this.graphics.clear();
        (_c = this.scene) === null || _c === void 0 ? void 0 : _c.draw(this.graphics);
        this.graphics.end();
        this.input.flush();
    };
    Game.prototype.updateSize = function () {
        var _a;
        this.graphics.updateSize();
        (_a = this.scene) === null || _a === void 0 ? void 0 : _a.updateSize();
    };
    Game.prototype._cancelAnimationFrame = function () {
        cancelAnimationFrame(this.animationFrame);
    };
    Game.prototype._requestAnimationFrame = function () {
        this.animationFrame = requestAnimationFrame(this.update.bind(this));
    };
    return Game;
}());
exports.Game = Game;


/***/ }),

/***/ "./src/ts/engine/Input.ts":
/*!********************************!*\
  !*** ./src/ts/engine/Input.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Input = exports.Mouse = exports.Keyboard = exports.GamepadInput = void 0;
// Controller map!
var GamepadInput = /** @class */ (function () {
    function GamepadInput(index) {
        this.previousButtonState = [];
        this.buttonState = [];
        this.axisState = [];
        this.deadZone = 0.2;
        this.fullZone = 0.4;
        this.index = index;
        var gamepad = this.getNavigatorGamepad();
        for (var i = 0; i < gamepad.buttons.length; i++) {
            this.previousButtonState.push(false);
            this.buttonState.push(false);
        }
        for (var i = 0; i < gamepad.axes.length; i++) {
            this.axisState.push(0);
        }
    }
    GamepadInput.prototype.poll = function () {
        // Swap the old and the new one, copy to the new
        var temp = this.previousButtonState;
        this.previousButtonState = this.buttonState;
        this.buttonState = temp;
        var gamepad = this.getNavigatorGamepad();
        for (var i = 0; i < gamepad.buttons.length; i++) {
            this.buttonState[i] = gamepad.buttons[i].pressed;
        }
        for (var i = 0; i < gamepad.axes.length; i++) {
            this.axisState[i] = gamepad.axes[i];
            if (Math.abs(this.axisState[i]) < this.deadZone)
                this.axisState[i] = 0;
            if (Math.abs(this.axisState[i]) > 1 - this.fullZone)
                this.axisState[i] = Math.sign(this.axisState[i]);
        }
    };
    GamepadInput.prototype.isButtonPressed = function (buttonIndex) {
        return this.buttonState[buttonIndex] && !this.previousButtonState[buttonIndex];
    };
    GamepadInput.prototype.isButtonDown = function (buttonIndex) {
        return this.buttonState[buttonIndex];
    };
    GamepadInput.prototype.isButtonReleased = function (buttonIndex) {
        return !this.buttonState[buttonIndex] && this.previousButtonState[buttonIndex];
    };
    Object.defineProperty(GamepadInput.prototype, "leftAxisX", {
        get: function () { return this.axisState[GamepadInput.AxisLeftX]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GamepadInput.prototype, "leftAxisY", {
        get: function () { return this.axisState[GamepadInput.AxisLeftY]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GamepadInput.prototype, "rightAxisX", {
        get: function () { return this.axisState[GamepadInput.AxisRightX]; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GamepadInput.prototype, "rightAxisY", {
        get: function () { return this.axisState[GamepadInput.AxisRightY]; },
        enumerable: false,
        configurable: true
    });
    GamepadInput.prototype.getNavigatorGamepad = function () {
        var pads = navigator.getGamepads();
        for (var i = 0; i < pads.length; i++) {
            var pad = pads[i];
            if (pad === null)
                continue;
            if (pad.index === this.index)
                return pad;
        }
        return undefined;
    };
    GamepadInput.AxisLeftX = 0;
    GamepadInput.AxisLeftY = 1;
    GamepadInput.AxisRightX = 2;
    GamepadInput.AxisRightY = 3;
    GamepadInput.ButtonA = 0;
    GamepadInput.ButtonB = 1;
    GamepadInput.ButtonX = 2;
    GamepadInput.ButtonY = 3;
    GamepadInput.ButtonDpadUp = 12;
    GamepadInput.ButtonDpadDown = 13;
    GamepadInput.ButtonDpadLeft = 14;
    GamepadInput.ButtonDpadRight = 15;
    GamepadInput.ButtonLeftBumper = 4;
    GamepadInput.ButtonRightBumper = 5;
    GamepadInput.ButtonLeftTrigger = 6;
    GamepadInput.ButtonRightTrigger = 7;
    GamepadInput.ButtonMenu = 8;
    GamepadInput.ButtonStart = 9;
    return GamepadInput;
}());
exports.GamepadInput = GamepadInput;
var Keyboard = /** @class */ (function () {
    function Keyboard(root) {
        var _this = this;
        var _a, _b;
        this.downKeys = new Set();
        this.pressedKeys = new Set();
        this.releasedKeys = new Set();
        this.root = root;
        this.root = document.body; // Fuck
        (_a = this.root) === null || _a === void 0 ? void 0 : _a.addEventListener("keydown", function (event) {
            if (event.repeat)
                return;
            _this.pressedKeys.add(event.key);
            _this.downKeys.add(event.key);
        });
        (_b = this.root) === null || _b === void 0 ? void 0 : _b.addEventListener("keyup", function (event) {
            if (event.repeat)
                return;
            _this.releasedKeys.add(event.key);
            _this.downKeys.delete(event.key);
        });
    }
    Keyboard.prototype.flush = function () {
        this.pressedKeys.clear();
        this.releasedKeys.clear();
    };
    Keyboard.prototype.isKeyDown = function (key) {
        return this.downKeys.has(key);
    };
    Keyboard.prototype.isKeyPressed = function (key) {
        return this.pressedKeys.has(key);
    };
    Keyboard.prototype.isKeyReleased = function (key) {
        return this.releasedKeys.has(key);
    };
    Keyboard.KeyEnter = "Enter";
    Keyboard.KeyTab = "Tab";
    Keyboard.KeySpace = " ";
    Keyboard.KeyC = "c";
    Keyboard.KeyX = "x";
    Keyboard.KeyA = "a";
    Keyboard.KeyD = "d";
    Keyboard.KeyComma = ",";
    Keyboard.KeyPeriod = ".";
    Keyboard.KeySlash = "/";
    Keyboard.KeyArrowUp = "ArrowUp";
    Keyboard.KeyArrowDown = "ArrowDown";
    Keyboard.KeyArrowLeft = "ArrowLeft";
    Keyboard.KeyArrowRight = "ArrowRight";
    return Keyboard;
}());
exports.Keyboard = Keyboard;
var Mouse = /** @class */ (function () {
    function Mouse(root) {
        this.buttons = new Array(10);
        this.buttonsPressed = new Array(10);
        this.buttonsReleased = new Array(10);
        this.buttons.fill(false);
        this.buttonsPressed.fill(false);
        this.buttonsReleased.fill(false);
        this.root = root;
        this.x = 0;
        this.y = 0;
        this.previousX = 0;
        this.previousY = 0;
        console.dir(root);
        root === null || root === void 0 ? void 0 : root.addEventListener("mousemove", this.onMouseMove.bind(this));
        root === null || root === void 0 ? void 0 : root.addEventListener("mousedown", this.onMouseDown.bind(this));
        root === null || root === void 0 ? void 0 : root.addEventListener("mouseup", this.onMouseUp.bind(this));
    }
    Mouse.prototype.onMouseMove = function (event) {
        this.x = event.offsetX / this.root.offsetWidth;
        this.y = event.offsetY / this.root.offsetWidth;
    };
    Mouse.prototype.onMouseDown = function (event) {
        this.onMouseMove(event);
        this.buttons[event.button] = true;
        this.buttonsPressed[event.button] = true;
    };
    Mouse.prototype.onMouseUp = function (event) {
        this.onMouseMove(event);
        this.buttons[event.button] = false;
        this.buttonsReleased[event.button] = true;
    };
    Mouse.prototype.isButtonDown = function (button) {
        return this.buttons[button];
    };
    Mouse.prototype.isButtonPressed = function (button) {
        return this.buttonsPressed[button];
    };
    Mouse.prototype.isButtonReleased = function (button) {
        return this.buttonsReleased[button];
    };
    Mouse.prototype.flush = function () {
        this.buttonsPressed.fill(false);
        this.buttonsReleased.fill(false);
        this.previousX = this.x;
        this.previousY = this.y;
    };
    Object.defineProperty(Mouse.prototype, "deltaX", {
        get: function () {
            return this.x - this.previousX;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mouse.prototype, "deltaY", {
        get: function () {
            return this.y - this.previousY;
        },
        enumerable: false,
        configurable: true
    });
    Mouse.ButtonLeft = 0;
    Mouse.ButtonMiddle = 1;
    Mouse.ButtonRight = 2;
    return Mouse;
}());
exports.Mouse = Mouse;
var Input = /** @class */ (function () {
    function Input(root) {
        var _this = this;
        this.gamepads = [];
        this.keyboard = new Keyboard(root);
        this.mouse = new Mouse(root);
        this.root = root;
        // Weird construction but typescript hates progress 
        window.addEventListener("gamepadconnected", function (ev) {
            var event = ev;
            console.log("Gamepad connected.");
            _this.gamepads.push(new GamepadInput(event.gamepad.index));
        });
        window.addEventListener("gamepaddisconnected", function (ev) {
            var event = ev;
            console.log("Gamepad disconnected.");
            var index = -1;
            for (var i = 0; i < _this.gamepads.length; i++) {
                if (_this.gamepads[i].index === event.gamepad.index) {
                    index = i;
                }
            }
            if (index < 0)
                return;
            console.log("Gamepad found.");
            _this.gamepads.splice(index, 1);
        });
    }
    Input.prototype.poll = function () {
        this.gamepads.forEach(function (pad) { return pad.poll(); });
    };
    Input.prototype.flush = function () {
        this.keyboard.flush();
        this.mouse.flush();
    };
    return Input;
}());
exports.Input = Input;


/***/ }),

/***/ "./src/ts/engine/Physics.ts":
/*!**********************************!*\
  !*** ./src/ts/engine/Physics.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Physics = void 0;
var AABB_1 = __webpack_require__(/*! math/AABB */ "./src/ts/math/AABB.ts");
var Collision_1 = __webpack_require__(/*! math/collision/Collision */ "./src/ts/math/collision/Collision.ts");
var TileCollider_1 = __webpack_require__(/*! math/collision/TileCollider */ "./src/ts/math/collision/TileCollider.ts");
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var Curve_1 = __webpack_require__(/*! util/Curve */ "./src/ts/util/Curve.ts");
var Physics = /** @class */ (function () {
    function Physics() {
        this.interpolate = true;
        this.bodies = [];
        this.layers = [];
    }
    Physics.prototype.addBody = function (body) {
        this.bodies.push(body);
    };
    Physics.prototype.removeBody = function (body) {
        var index = this.bodies.indexOf(body);
        if (index < 0)
            return;
        this.bodies.splice(index, 1);
    };
    Physics.prototype.update = function (delta) {
        if (this.interpolate) {
            this.bodies.forEach(function (body) {
                // TODO motion prediction and stuff
                var f = body.game.interUpdateTime / body.game.fixedUpdateTime;
                body.transform.interpolatedPosition.x = Curve_1.Curve.lerp(body.previousPosition.x, body.transform.position.x, f);
                body.transform.interpolatedPosition.y = Curve_1.Curve.lerp(body.previousPosition.y, body.transform.position.y, f);
            });
        }
        else {
            this.bodies.forEach(function (body) {
                body.transform.interpolatedPosition.set(body.transform.position);
            });
        }
    };
    Physics.prototype.fixedUpdate = function (delta) {
        var _this = this;
        // Set the previous positions
        this.bodies.forEach(function (body) {
            body.previousPosition.x = body.transform.position.x;
            body.previousPosition.y = body.transform.position.y;
            body.unstuckDistance.setZero();
        });
        // Move all the bodies
        this.bodies.forEach(function (body) {
            body.transform.position.x += body.velocity.x * delta;
            body.transform.position.y += body.velocity.y * delta;
        });
        var collisionMap = new Map();
        var addToCollisionMap = function (selfIndex, otherIndex) {
            collisionMap.set(Math.min(selfIndex, otherIndex), Math.max(selfIndex, otherIndex));
        };
        // Unstuck all the bodies
        var tileCollider = new TileCollider_1.TileCollider();
        var tileAABB = new AABB_1.AABB();
        var tilePosition = new Vector2_1.Vector2();
        // =============================== //
        // Tilemap collision
        // =============================== //
        this.bodies.forEach(function (body) {
            if (body.kinematic)
                return;
            _this.layers.forEach(function (layer) {
                var bbox = body.boundingBox;
                // Get the BBOX coords
                var fromX = Math.floor(bbox.left / layer.tilemap.tileWidth);
                var toX = Math.floor(bbox.right / layer.tilemap.tileWidth);
                var fromY = Math.floor(bbox.top / layer.tilemap.tileHeight);
                var toY = Math.floor(bbox.bottom / layer.tilemap.tileHeight);
                for (var i = fromX; i <= toX; i++) {
                    for (var j = fromY; j <= toY; j++) {
                        if (!layer.isTileSolid(i, j))
                            continue;
                        tilePosition.x = i * layer.tilemap.tileWidth;
                        tilePosition.y = j * layer.tilemap.tileHeight;
                        tileCollider = layer.getTileCollider(i, j, tileCollider);
                        tileAABB = tileCollider.getBounds(tilePosition, tileAABB);
                        if (!bbox.overlaps(tileAABB))
                            continue;
                        var unstuckDist = Collision_1.unstuck(body.collider, tileCollider, tilePosition.sub(body.transform.position), body.velocity);
                        if (unstuckDist !== undefined) {
                            body.transform.position.add(unstuckDist);
                            body.unstuckDistance.add(unstuckDist);
                        }
                        // this.performCollision(body, bbox, tileAABB);
                    }
                }
            });
        });
        // =============================== //
        // Normal collisions
        // =============================== //
        // TODO broadphase narrow phase stuff :)
        // Maybe start with sweep and prune
        this.bodies.forEach(function (self, selfIndex) {
            if (self.kinematic)
                return;
            _this.bodies.forEach(function (other, otherIndex) {
                if (self === other)
                    return;
                if (!other.solid)
                    return;
                var bbox = self.boundingBox;
                var otherbbox = other.boundingBox;
                if (!bbox.overlaps(otherbbox))
                    return;
                if (self.useDynamicCollisions && other.useDynamicCollisions) {
                    addToCollisionMap(selfIndex, otherIndex);
                }
                var unstuckDist = Collision_1.unstuck(self.collider, other.collider, other.transform.position.clone().sub(self.transform.position), self.velocity.clone().sub(other.velocity)); // TODO relative velocity
                if (unstuckDist !== undefined) {
                    self.transform.position.add(unstuckDist);
                    self.unstuckDistance.add(unstuckDist);
                }
            });
        });
        this.bodies.forEach(function (body) {
            body.collidedBottom = body.unstuckDistance.y < 0;
            body.collidedTop = body.unstuckDistance.y > 0;
            body.collidedLeft = body.unstuckDistance.x > 0;
            body.collidedRight = body.unstuckDistance.x < 0;
            if (body.collidedLeft || body.collidedRight) {
                body.velocity.x = -body.velocity.x * body.bouncyness;
            }
            if (body.collidedBottom || body.collidedTop) {
                body.velocity.y = -body.velocity.y * body.bouncyness;
            }
        });
        // A little more optimized but still really fucking stupid :)
        for (var i = 0; i < this.bodies.length; i++) {
            var body = this.bodies[i];
            var bbox = body.boundingBox;
            if (!body.useDynamicCollisions)
                continue;
            for (var j = i + 1; j < this.bodies.length; j++) {
                var other = this.bodies[j];
                if (!other.useDynamicCollisions)
                    continue;
                if (bbox.overlaps(other.boundingBox)) {
                    addToCollisionMap(i, j);
                }
            }
        }
        collisionMap.forEach(function (selfIndex, otherIndex) {
            var self = _this.bodies[selfIndex];
            var other = _this.bodies[otherIndex];
            self.onCollision.emit(other);
            other.onCollision.emit(self);
        });
    };
    Physics.prototype.boxcast = function (aabb, solidOnly) {
        if (solidOnly === void 0) { solidOnly = true; }
        var list = [];
        // TODO make a collider from this AABB and feed it into the collision system
        this.bodies.forEach(function (body) {
            if (solidOnly && !body.solid)
                return;
            // TODO good collision but w/e this is ok for now
            if (body.boundingBox.overlaps(aabb)) {
                list.push(body);
            }
        });
        return list;
    };
    Physics.prototype.drawDebug = function (graphics) {
        return;
        this.layers.forEach(function (layer) {
            layer.drawDebug(graphics, layer.tilemap.tileWidth, layer.tilemap.tileHeight, new AABB_1.AABB(0, 0, 1000, 1000));
        });
        graphics.setColor(255, 0, 0, 0.6);
        this.bodies.forEach(function (body) {
            if (!body.solid)
                return;
            graphics.drawAABB(body.boundingBox, true);
        });
        graphics.setColor(0, 255, 0, 0.6);
        this.bodies.forEach(function (body) {
            if (body.solid)
                return;
            var collider = body.boundingBox;
            graphics.drawAABB(collider, true);
        });
        graphics.setColor(0, 0, 255, 0.6);
        this.bodies.forEach(function (body) {
            var transform = body.transform;
            graphics.drawRectangle(transform.position.x - 1, transform.position.y - 1, 2, 2, true);
        });
        return;
    };
    return Physics;
}());
exports.Physics = Physics;


/***/ }),

/***/ "./src/ts/graphics/Animation.ts":
/*!**************************************!*\
  !*** ./src/ts/graphics/Animation.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Animation = void 0;
var Animation = /** @class */ (function () {
    function Animation() {
        this.frameRate = 12;
        this.sprites = [];
        this._index = 0;
    }
    Animation.prototype.update = function (delta) {
        // TODO cap the _index variable
        this._index += delta * this.frameRate;
    };
    Animation.prototype.addFrame = function (sprite) {
        this.sprites.push(sprite);
        return this;
    };
    Animation.prototype.center = function () {
        this.sprites.forEach(function (sprite) { return sprite.center(); });
        return this;
    };
    Animation.prototype.setOffset = function (x, y) {
        this.sprites.forEach(function (sprite) { return sprite.setOffset(x, y); });
        return this;
    };
    Object.defineProperty(Animation.prototype, "index", {
        get: function () {
            return this._index % this.frames;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "frames", {
        get: function () {
            return this.sprites.length;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "frame", {
        get: function () {
            return this.sprites[Math.floor(this.index)];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Animation.prototype, "duration", {
        get: function () {
            return this.frames / this.frameRate;
        },
        enumerable: false,
        configurable: true
    });
    Animation.prototype.clone = function () {
        var a = new Animation();
        a._index = this._index;
        a.frameRate = this.frameRate;
        a.sprites = this.sprites;
        return a;
    };
    return Animation;
}());
exports.Animation = Animation;


/***/ }),

/***/ "./src/ts/graphics/Camera.ts":
/*!***********************************!*\
  !*** ./src/ts/graphics/Camera.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Camera = void 0;
var AABB_1 = __webpack_require__(/*! math/AABB */ "./src/ts/math/AABB.ts");
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var Camera = /** @class */ (function () {
    function Camera() {
        this.center = new Vector2_1.Vector2(640 / 2, 360 / 2);
        // TODO this shouldn't be defined like this, because this depends on the screen aspect ratio...
        this.width = 640;
        this.height = 360;
    }
    Camera.prototype.getBounds = function (aabb) {
        if (aabb === undefined) {
            aabb = new AABB_1.AABB();
        }
        return aabb.set(this.center.x - this.width / 2, this.center.y - this.height / 2, this.center.x + this.width / 2, this.center.y + this.height / 2);
    };
    Camera.prototype.screenToWorldX = function (x) {
        return x * this.width + this.center.x - this.width / 2;
    };
    // screenToWorldY(y: number){
    //    return y * this.height + this.center.y - this.height / 2;
    // }
    Camera.prototype.screenToWorldY = function (y) {
        return y * this.width + this.center.y - this.width / 2;
    };
    return Camera;
}());
exports.Camera = Camera;


/***/ }),

/***/ "./src/ts/graphics/Graphics.ts":
/*!*************************************!*\
  !*** ./src/ts/graphics/Graphics.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Graphics = void 0;
var Sprite_1 = __webpack_require__(/*! ./Sprite */ "./src/ts/graphics/Sprite.ts");
var Graphics = /** @class */ (function () {
    function Graphics() {
    }
    Graphics.prototype.drawSprite = function (sprite, x, y, scaleX, scaleY, rotation) {
        if (scaleX === void 0) { scaleX = 1; }
        if (scaleY === void 0) { scaleY = 1; }
        if (rotation === void 0) { rotation = 0; }
        this.drawSpriteRaw(sprite, x, y, scaleX, scaleY, rotation);
    };
    Graphics.prototype.drawSpriteTiled = function (sprite, x, y, w, h, scaleX, scaleY) {
        if (scaleX === void 0) { scaleX = 1; }
        if (scaleY === void 0) { scaleY = 1; }
        var spriteWidth = sprite.width * scaleX;
        var spriteHeight = sprite.height * scaleY;
        var tileX = w / spriteWidth;
        var tileY = h / spriteHeight;
        for (var i = 0; i < tileX; i++) {
            for (var j = 0; j < tileY; j++) {
                this.drawSprite(sprite, i * spriteWidth + x, j * spriteHeight + y, scaleX, scaleY);
            }
        }
    };
    Graphics.prototype.drawAABB = function (aabb, fill) {
        this.drawRectangle(aabb.left, aabb.top, aabb.width, aabb.height, fill);
    };
    Graphics.prototype.drawSpriteNineSide = function (sprite, x, y, w, h) {
        var buffer = new Sprite_1.Sprite(sprite.texture);
        var xMiddle = 0;
        var yMiddle = 0;
        var xSize = w;
        var ySize = h;
        // Corners and setup
        buffer = sprite.getSprite(0, 0, buffer);
        this.drawSprite(buffer, x, y);
        xSize -= buffer.width;
        xMiddle = buffer.width;
        yMiddle = buffer.height;
        buffer = sprite.getSprite(2, 0, buffer);
        this.drawSprite(buffer, x + w - buffer.width, y);
        xSize -= buffer.width;
        buffer = sprite.getSprite(0, 2, buffer);
        this.drawSprite(buffer, x, y + h - buffer.height);
        ySize -= buffer.height;
        buffer = sprite.getSprite(2, 2, buffer);
        this.drawSprite(buffer, x + w - buffer.width, y + h - buffer.height);
        ySize -= buffer.height;
        // Top
        buffer = sprite.getSprite(1, 0, buffer);
        this.drawSpriteTiled(buffer, x + xMiddle, y, xSize, buffer.height);
        //Bottom
        buffer = sprite.getSprite(1, 2, buffer);
        this.drawSpriteTiled(buffer, x + xMiddle, y + yMiddle + ySize, xSize, buffer.height);
        // Left
        buffer = sprite.getSprite(0, 1, buffer);
        this.drawSpriteTiled(buffer, x, y + yMiddle, buffer.width, ySize);
        // Right
        buffer = sprite.getSprite(2, 1, buffer);
        this.drawSpriteTiled(buffer, x + xMiddle + xSize, y + yMiddle, buffer.width, ySize);
        // Center
        buffer = sprite.getSprite(1, 1, buffer);
        this.drawSpriteTiled(buffer, x + xMiddle, y + yMiddle, xSize, ySize);
    };
    Graphics.prototype.setColor = function (r, g, b, a) {
        if (a === void 0) { a = 1; }
        this.setColorRaw(r, g, b, a);
    };
    return Graphics;
}());
exports.Graphics = Graphics;


/***/ }),

/***/ "./src/ts/graphics/NineSideSprite.ts":
/*!*******************************************!*\
  !*** ./src/ts/graphics/NineSideSprite.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.NineSideSprite = void 0;
var NineSideSprite = /** @class */ (function () {
    function NineSideSprite(texture) {
        this.texture = texture;
        this.xLines = new Array(4);
        this.yLines = new Array(4);
    }
    NineSideSprite.prototype.setup = function (x, y, w, h, left, top, right, bottom) {
        this.xLines[0] = x;
        this.xLines[1] = x + left;
        this.xLines[2] = x + w - right;
        this.xLines[3] = x + w;
        this.yLines[0] = y;
        this.yLines[1] = y + top;
        this.yLines[2] = y + h - bottom;
        this.yLines[3] = y + h;
    };
    NineSideSprite.prototype.getSprite = function (x, y, sprite) {
        sprite.offsetX = 0;
        sprite.offsetY = 0;
        sprite.texture = this.texture;
        sprite.sourceX = this.xLines[x];
        sprite.sourceY = this.yLines[y];
        sprite.sourceWidth = this.xLines[x + 1] - this.xLines[x];
        sprite.sourceHeight = this.yLines[y + 1] - this.yLines[y];
        return sprite;
    };
    return NineSideSprite;
}());
exports.NineSideSprite = NineSideSprite;


/***/ }),

/***/ "./src/ts/graphics/ParticleSystem.ts":
/*!*******************************************!*\
  !*** ./src/ts/graphics/ParticleSystem.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticleSystem = void 0;
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var Particle = /** @class */ (function () {
    function Particle() {
        this.position = new Vector2_1.Vector2();
        this.scale = new Vector2_1.Vector2(1, 1);
        this.lifetime = 0;
    }
    return Particle;
}());
var ParticleSystem = /** @class */ (function () {
    function ParticleSystem() {
        this.particles = new Array(10);
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i] = new Particle();
        }
        this.index = 0;
    }
    ParticleSystem.prototype.update = function (delta) {
        var _a;
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i].lifetime -= delta;
            (_a = this.particles[i].animation) === null || _a === void 0 ? void 0 : _a.update(delta);
        }
    };
    ParticleSystem.prototype.draw = function (graphics) {
        for (var i = 0; i < this.particles.length; i++) {
            var particle = this.particles[i];
            if (particle.animation === undefined)
                continue;
            if (particle.lifetime <= 0)
                continue;
            graphics.drawSprite(particle.animation.frame, particle.position.x, particle.position.y, particle.scale.x, particle.scale.y);
        }
    };
    ParticleSystem.prototype.addParticle = function (x, y, animation, xScale, yScale) {
        if (xScale === void 0) { xScale = 1; }
        if (yScale === void 0) { yScale = 1; }
        var particle = this.particles[this.index];
        particle.position.x = x;
        particle.position.y = y;
        particle.scale.x = xScale;
        particle.scale.y = yScale;
        particle.animation = animation.clone();
        particle.lifetime = animation.duration;
        this.index++;
        if (this.index >= this.particles.length) {
            this.index -= this.particles.length;
        }
    };
    return ParticleSystem;
}());
exports.ParticleSystem = ParticleSystem;


/***/ }),

/***/ "./src/ts/graphics/ResourceManager.ts":
/*!********************************************!*\
  !*** ./src/ts/graphics/ResourceManager.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.ResourceManager = void 0;
var Sprite_1 = __webpack_require__(/*! ./Sprite */ "./src/ts/graphics/Sprite.ts");
var ResourceManager = /** @class */ (function () {
    function ResourceManager() {
        this.textures = {};
    }
    ResourceManager.prototype.loadSpriteSheet = function (src) {
        return new Sprite_1.SpriteSheet(this.loadTexture(src));
    };
    ResourceManager.prototype.loadTexture = function (src) {
        if (this.textures[src] === undefined) {
            this.textures[src] = this.loadTextureRaw(src);
        }
        return this.textures[src];
    };
    ResourceManager.prototype.loadTextureFromImage = function (img) {
        this.loadTexture(img.src);
    };
    return ResourceManager;
}());
exports.ResourceManager = ResourceManager;


/***/ }),

/***/ "./src/ts/graphics/Sprite.ts":
/*!***********************************!*\
  !*** ./src/ts/graphics/Sprite.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.SpriteSheet = exports.Sprite = void 0;
var Animation_1 = __webpack_require__(/*! ./Animation */ "./src/ts/graphics/Animation.ts");
var Sprite = /** @class */ (function () {
    function Sprite(texture) {
        this.offsetX = 0;
        this.offsetY = 0;
        this.sourceX = 0;
        this.sourceY = 0;
        this.sourceWidth = 0;
        this.sourceHeight = 0;
        this.texture = texture;
        this.sourceWidth = texture.width;
        this.sourceHeight = texture.height;
    }
    Object.defineProperty(Sprite.prototype, "sourceLeft", {
        get: function () { return this.sourceX; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "sourceTop", {
        get: function () { return this.sourceY; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "sourceRight", {
        get: function () { return this.sourceX + this.sourceWidth; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "sourceBottom", {
        get: function () { return this.sourceY + this.sourceHeight; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "width", {
        get: function () { return this.sourceWidth; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sprite.prototype, "height", {
        get: function () { return this.sourceHeight; },
        enumerable: false,
        configurable: true
    });
    Sprite.prototype.center = function () {
        this.offsetX = this.width / 2;
        this.offsetY = this.height / 2;
        return this;
    };
    Sprite.prototype.setOffset = function (x, y) {
        this.offsetX = x;
        this.offsetY = y;
        return this;
    };
    return Sprite;
}());
exports.Sprite = Sprite;
var SpriteSheet = /** @class */ (function () {
    function SpriteSheet(texture) {
        this.texture = texture;
    }
    SpriteSheet.prototype.getSprite = function (x, y, w, h) {
        var sprite = new Sprite(this.texture);
        sprite.sourceX = x;
        sprite.sourceY = y;
        sprite.sourceWidth = w;
        sprite.sourceHeight = h;
        return sprite;
    };
    SpriteSheet.prototype.getAnimation = function (x, y, w, h, count) {
        var animation = new Animation_1.Animation();
        for (var i = 0; i < count; i++) {
            var sprite = new Sprite(this.texture);
            sprite.sourceX = x + i * w;
            sprite.sourceY = y;
            sprite.sourceWidth = w;
            sprite.sourceHeight = h;
            animation.addFrame(sprite);
        }
        return animation;
    };
    SpriteSheet.fromHTML = function (id) {
        var element = document.getElementById(id);
        return new SpriteSheet(element);
    };
    return SpriteSheet;
}());
exports.SpriteSheet = SpriteSheet;


/***/ }),

/***/ "./src/ts/graphics/webgl/GLGraphics.ts":
/*!*********************************************!*\
  !*** ./src/ts/graphics/webgl/GLGraphics.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLGraphics = void 0;
var Graphics_1 = __webpack_require__(/*! graphics/Graphics */ "./src/ts/graphics/Graphics.ts");
var Color_1 = __webpack_require__(/*! util/Color */ "./src/ts/util/Color.ts");
var GLShader_1 = __webpack_require__(/*! ./GLShader */ "./src/ts/graphics/webgl/GLShader.ts");
var GLTexture_1 = __webpack_require__(/*! ./GLTexture */ "./src/ts/graphics/webgl/GLTexture.ts");
var GLVertexBatch_1 = __webpack_require__(/*! ./GLVertexBatch */ "./src/ts/graphics/webgl/GLVertexBatch.ts");
var GLGraphics = /** @class */ (function (_super) {
    __extends(GLGraphics, _super);
    function GLGraphics(gl) {
        var _this = _super.call(this) || this;
        _this.drawing = false;
        gl.enable(gl.BLEND);
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.clearColor(0, 0, 0, 1);
        _this.gl = gl;
        _this.color = new Color_1.Color(1, 1, 1, 1);
        _this.batch = new GLVertexBatch_1.GLVertexBatch(_this.gl);
        _this.pixelTexture = new GLTexture_1.GLTexture(gl);
        _this.pixelTexture.setData(1, 1, GLTexture_1.GLTexture.colorData(1, 1));
        _this.currentTexture = _this.pixelTexture;
        _this.projectionMatrix = new Float32Array([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
        _this.modelViewMatrix = new Float32Array([
            1, 0, 0, 0,
            0, 1, 0, 0,
            0, 0, 1, 0,
            0, 0, 0, 1
        ]);
        _this.batch = new GLVertexBatch_1.GLVertexBatch(_this.gl);
        _this.shader = new GLShader_1.GLShaderProgram(gl, GLShader_1.DefaultVertexSource, GLShader_1.DefaultFragmentSource);
        _this.attributes = new GLShader_1.GLShaderAttributeSet();
        _this.attributes.load(_this.shader);
        _this.updateSize();
        return _this;
    }
    GLGraphics.prototype.clear = function () {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    };
    GLGraphics.prototype.drawSpriteRaw = function (sprite, x, y, scaleX, scaleY, rotation) {
        this.setTexture(sprite.texture);
        this.ensureSize(6);
        this.batch.color(this.color.r, this.color.g, this.color.b, this.color.a);
        x -= sprite.offsetX * scaleX;
        y -= sprite.offsetY * scaleY;
        var w = sprite.width * scaleX;
        var h = sprite.height * scaleY;
        var u0 = sprite.sourceLeft / sprite.texture.width;
        var u1 = sprite.sourceRight / sprite.texture.width;
        var v0 = sprite.sourceTop / sprite.texture.height;
        var v1 = sprite.sourceBottom / sprite.texture.height;
        this.batch.uv(u0, v0);
        this.batch.vertex(x, y, 0);
        this.batch.uv(u1, v0);
        this.batch.vertex(x + w, y, 0);
        this.batch.uv(u1, v1);
        this.batch.vertex(x + w, y + h, 0);
        this.batch.uv(u0, v0);
        this.batch.vertex(x, y, 0);
        this.batch.uv(u1, v1);
        this.batch.vertex(x + w, y + h, 0);
        this.batch.uv(u0, v1);
        this.batch.vertex(x, y + h, 0);
    };
    GLGraphics.prototype.drawSpriteSimple = function (sprite, x, y) {
        this.setTexture(sprite.texture);
        this.ensureSize(6);
        this.batch.color(this.color.r, this.color.g, this.color.b, this.color.a);
        x -= sprite.offsetX;
        y -= sprite.offsetY;
        var w = sprite.width;
        var h = sprite.height;
        var u0 = sprite.sourceLeft / sprite.texture.width;
        var u1 = sprite.sourceRight / sprite.texture.width;
        var v0 = sprite.sourceTop / sprite.texture.height;
        var v1 = sprite.sourceBottom / sprite.texture.height;
        this.batch.uv(u0, v0);
        this.batch.vertex(x, y, 0);
        this.batch.uv(u1, v0);
        this.batch.vertex(x + w, y, 0);
        this.batch.uv(u1, v1);
        this.batch.vertex(x + w, y + h, 0);
        this.batch.uv(u0, v0);
        this.batch.vertex(x, y, 0);
        this.batch.uv(u1, v1);
        this.batch.vertex(x + w, y + h, 0);
        this.batch.uv(u0, v1);
        this.batch.vertex(x, y + h, 0);
    };
    GLGraphics.prototype.drawRectangle = function (x, y, w, h, fill) {
        this.setTexture(this.pixelTexture);
        this.ensureSize(6);
        this.batch.color(this.color.r, this.color.g, this.color.b, this.color.a);
        this.batch.uv(0, 0);
        this.batch.vertex(x, y, 0);
        this.batch.vertex(x + w, y, 0);
        this.batch.vertex(x + w, y + h, 0);
        this.batch.vertex(x, y, 0);
        this.batch.vertex(x + w, y + h, 0);
        this.batch.vertex(x, y + h, 0);
    };
    GLGraphics.prototype.setColorRaw = function (r, g, b, a) {
        this.color.r = r;
        this.color.g = g;
        this.color.b = b;
        this.color.a = a;
    };
    GLGraphics.prototype.setTexture = function (texture) {
        if (this.currentTexture !== texture)
            this.flush();
        this.currentTexture = texture;
    };
    GLGraphics.prototype.ensureSize = function (n) {
        if (this.batch.left < n)
            this.flush();
    };
    GLGraphics.prototype.begin = function () {
        if (this.drawing)
            return;
        this.drawing = true;
    };
    GLGraphics.prototype.end = function () {
        if (!this.drawing)
            return;
        this.flush();
        this.drawing = false;
    };
    GLGraphics.prototype.flush = function () {
        if (!this.drawing)
            return;
        this.batch.flush();
        if (this.batch.length === 0)
            return;
        var gl = this.gl;
        gl.vertexAttribPointer(this.attributes.positionAttribute, 3, gl.FLOAT, false, GLVertexBatch_1.GLVertexBatch.StrideInBytes, GLVertexBatch_1.GLVertexBatch.PositionOffsetInBytes);
        gl.vertexAttribPointer(this.attributes.colorAttribute, 4, gl.FLOAT, false, GLVertexBatch_1.GLVertexBatch.StrideInBytes, GLVertexBatch_1.GLVertexBatch.ColorOffsetInBytes);
        gl.vertexAttribPointer(this.attributes.uvAttribute, 2, gl.FLOAT, false, GLVertexBatch_1.GLVertexBatch.StrideInBytes, GLVertexBatch_1.GLVertexBatch.UVOffsetInBytes);
        // Enable all
        gl.enableVertexAttribArray(this.attributes.positionAttribute);
        gl.enableVertexAttribArray(this.attributes.colorAttribute);
        gl.enableVertexAttribArray(this.attributes.uvAttribute);
        // TODO if statements and stuff :)
        this.shader.use();
        this.shader.setUniformMatrix(this.attributes.modelViewUniform, this.modelViewMatrix);
        this.shader.setUniformMatrix(this.attributes.projectionUniform, this.projectionMatrix);
        this.shader.setUniformPosition(this.attributes.screenSizeUniform, this.gl.canvas.width, this.gl.canvas.height);
        this.shader.setUniformTexture(this.attributes.textureUniform, this.currentTexture);
        gl.drawArrays(gl.TRIANGLES, 0, this.batch.length);
    };
    GLGraphics.prototype.setCamera = function (camera) {
        this.flush();
        var floorX = this.gl.canvas.width / camera.width;
        var floorY = this.gl.canvas.height / camera.height;
        var scaleX = 2 / camera.width;
        var scaleY = -2 / camera.height;
        // Snapping to whole pixels
        var offsetX = -Math.floor(camera.center.x * floorX) / floorX * scaleX;
        var offsetY = -Math.floor(camera.center.y * floorY) / floorY * scaleY;
        this.projectionMatrix = new Float32Array([
            scaleX, 0, 0, 0,
            0, scaleY, 0, 0,
            0, 0, 1, 0,
            offsetX, offsetY, 0, 1
        ]);
    };
    GLGraphics.prototype.updateSize = function () {
        var canvas = this.gl.canvas;
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        this.gl.viewport(0, 0, canvas.width, canvas.height);
    };
    GLGraphics.prototype.setAlpha = function (a) {
        this.color.a = a;
    };
    return GLGraphics;
}(Graphics_1.Graphics));
exports.GLGraphics = GLGraphics;


/***/ }),

/***/ "./src/ts/graphics/webgl/GLResourceManager.ts":
/*!****************************************************!*\
  !*** ./src/ts/graphics/webgl/GLResourceManager.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GLResourceManager = void 0;
var ResourceManager_1 = __webpack_require__(/*! graphics/ResourceManager */ "./src/ts/graphics/ResourceManager.ts");
var GLTexture_1 = __webpack_require__(/*! ./GLTexture */ "./src/ts/graphics/webgl/GLTexture.ts");
var GLResourceManager = /** @class */ (function (_super) {
    __extends(GLResourceManager, _super);
    function GLResourceManager(gl) {
        var _this = _super.call(this) || this;
        _this.gl = gl;
        return _this;
    }
    GLResourceManager.prototype.loadTextureRaw = function (src) {
        var texture = new GLTexture_1.GLTexture(this.gl);
        this.textures[src] = texture;
        var img = new Image();
        img.onload = function () {
            texture.setDataFromImage(img);
        };
        img.src = src;
        return texture;
    };
    return GLResourceManager;
}(ResourceManager_1.ResourceManager));
exports.GLResourceManager = GLResourceManager;


/***/ }),

/***/ "./src/ts/graphics/webgl/GLShader.ts":
/*!*******************************************!*\
  !*** ./src/ts/graphics/webgl/GLShader.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GLShaderProgram = exports.GLShaderAttributeSet = exports.DefaultFragmentSource = exports.DefaultVertexSource = void 0;
exports.DefaultVertexSource = "\nattribute vec3 position;\nattribute vec4 color;\nattribute vec2 uv;\n\nuniform mat4 u_MatrixModelView;\nuniform mat4 u_MatrixProjection;\n\nuniform vec2 u_ScreenSize;\n\nvarying highp vec4 v_Position;\nvarying highp vec4 v_Color;\nvarying highp vec2 v_UV;\n\nhighp vec4 pixelPerfect(highp vec4 v){\n   vec2 sp = vec2(v.x, v.y);\n\n   vec2 ss = u_ScreenSize / 2.0;\n\n   sp = floor(sp * ss) / ss;\n\n   v.x = sp.x;\n   v.y = sp.y;\n\n   return v;\n}\n\nvoid main() {\n   v_Position = pixelPerfect(u_MatrixProjection * u_MatrixModelView * vec4(position, 1.0));\n   v_Color = color;\n   v_UV = uv;\n   \n   gl_Position = v_Position;\n}\n";
exports.DefaultFragmentSource = "\nvarying highp vec4 v_Position;\nvarying highp vec4 v_Color;\nvarying highp vec2 v_UV;\n\nuniform sampler2D u_Texture;\n\nhighp vec4 vga(highp vec4 color){\n   // Low color precision :)\n   const highp float depth = 2.0;\n   color.r = floor(color.r * depth) / depth;\n   color.g = floor(color.g * depth) / depth;\n   color.b = floor(color.b * depth) / depth;\n\n   return color;\n}\nhighp vec4 gray(highp vec4 color){\n   // Low color precision :)\n   highp float value = (color.r * 0.4 + color.g * 0.3 + color.b * 0.3) / 2.0;\n\n   highp vec4 target = vec4(value, value, value, color.a);\n\n   highp float dist = length(vec2(v_Position) + vec2(0.0, 0.4)) * 2.0;\n\n   dist = floor(dist * 3.0) / 3.0;\n\n   return mix(color, target, clamp(dist, 0.0, 1.0));\n   // return vec4(dist, dist, dist, 1.0);\n}\n\nvoid main() {\n   highp vec4 color = texture2D(u_Texture, v_UV) * v_Color;\n\n   // Discard alpha\n   if(color.a < 0.01) discard;\n\n   gl_FragColor = (color);\n}\n";
var GLShaderAttributeSet = /** @class */ (function () {
    function GLShaderAttributeSet() {
        this.positionAttribute = 0;
        this.colorAttribute = 0;
        this.uvAttribute = 0;
        this.modelViewUniform = null;
        this.projectionUniform = null;
        this.textureUniform = null;
        this.screenSizeUniform = null;
    }
    GLShaderAttributeSet.prototype.load = function (program) {
        this.positionAttribute = program.getAttributeLocation("position");
        this.colorAttribute = program.getAttributeLocation("color");
        this.uvAttribute = program.getAttributeLocation("uv");
        this.modelViewUniform = program.getUniformLocation("u_MatrixModelView");
        this.projectionUniform = program.getUniformLocation("u_MatrixProjection");
        this.textureUniform = program.getUniformLocation("u_Texture");
        this.screenSizeUniform = program.getUniformLocation("u_ScreenSize");
    };
    return GLShaderAttributeSet;
}());
exports.GLShaderAttributeSet = GLShaderAttributeSet;
var GLShader = /** @class */ (function () {
    function GLShader(gl, type, source) {
        this.gl = gl;
        this.id = this.gl.createShader(type === GLShader.Vertex ? gl.VERTEX_SHADER : gl.FRAGMENT_SHADER);
        gl.shaderSource(this.id, source);
        gl.compileShader(this.id);
        this.compiled = true;
        if (!gl.getShaderParameter(this.id, gl.COMPILE_STATUS)) {
            console.error('An error occurred compiling the shaders: ' + gl.getShaderInfoLog(this.id));
            this.destroy();
        }
    }
    GLShader.prototype.destroy = function () {
        this.gl.deleteShader(this.id);
        this.compiled = false;
    };
    GLShader.Vertex = 0;
    GLShader.Fragment = 1;
    return GLShader;
}());
var GLShaderProgram = /** @class */ (function () {
    function GLShaderProgram(gl, vertexSource, fragmentSource) {
        var _this = this;
        this.shaders = [];
        this.gl = gl;
        this.compiled = true;
        this.shaders.push(new GLShader(gl, GLShader.Vertex, vertexSource));
        this.shaders.push(new GLShader(gl, GLShader.Fragment, fragmentSource));
        this.id = this.gl.createProgram();
        this.shaders.forEach(function (shader) {
            // TODO error checking and shit
            gl.attachShader(_this.id, shader.id);
        });
        gl.linkProgram(this.id);
        if (!gl.getProgramParameter(this.id, gl.LINK_STATUS)) {
            console.error('Unable to initialize the shader program: ' + gl.getProgramInfoLog(this.id));
            this.destroy();
        }
    }
    GLShaderProgram.prototype.use = function () {
        this.gl.useProgram(this.id);
    };
    GLShaderProgram.prototype.getAttributeLocation = function (name) {
        return this.gl.getAttribLocation(this.id, name);
    };
    GLShaderProgram.prototype.getUniformLocation = function (name) {
        return this.gl.getUniformLocation(this.id, name);
    };
    GLShaderProgram.prototype.setUniformVector2 = function (uniform, vector) {
        if (uniform === null)
            return;
        this.setUniformPosition(uniform, vector.x, vector.y);
    };
    GLShaderProgram.prototype.setUniformPosition = function (uniform, x, y) {
        if (uniform === null)
            return;
        this.gl.uniform2f(uniform, x, y);
    };
    GLShaderProgram.prototype.setUniformMatrix = function (uniform, matrix) {
        if (uniform === null)
            return;
        this.gl.uniformMatrix4fv(uniform, false, matrix);
    };
    GLShaderProgram.prototype.setUniformTexture = function (uniform, texture) {
        if (uniform === null)
            return;
        this.gl.activeTexture(this.gl.TEXTURE0);
        texture.bind();
        this.gl.uniform1i(uniform, 0);
    };
    GLShaderProgram.prototype.destroy = function () {
        this.shaders.forEach(function (shader) { return shader.destroy(); });
        this.gl.deleteProgram(this.id);
        this.compiled = false;
    };
    return GLShaderProgram;
}());
exports.GLShaderProgram = GLShaderProgram;


/***/ }),

/***/ "./src/ts/graphics/webgl/GLTexture.ts":
/*!********************************************!*\
  !*** ./src/ts/graphics/webgl/GLTexture.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GLTexture = void 0;
var GLTexture = /** @class */ (function () {
    function GLTexture(gl) {
        this.gl = gl;
        this.id = gl.createTexture();
        this.width = 1;
        this.height = 1;
        this.setData(1, 1, new Uint8Array([255, 0, 255, 255]));
        this.bind();
        // TODO move this to constructor
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST);
    }
    GLTexture.prototype.setData = function (width, height, data) {
        this.width = width;
        this.height = height;
        this.bind();
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, width, height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, data);
    };
    GLTexture.prototype.setDataFromImage = function (image) {
        this.width = image.width;
        this.height = image.height;
        this.bind();
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, image);
    };
    GLTexture.prototype.bind = function () {
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.id);
    };
    GLTexture.prototype.destroy = function () {
        this.gl.deleteTexture(this.id);
    };
    GLTexture.checkerboardData = function (width, height) {
        var data = new Uint8Array(width * height * 4);
        for (var i = 0; i < width; i++) {
            for (var j = 0; j < height; j++) {
                var index = (i + j * width) * 4;
                var dark = ((i + j) % 2) == 0;
                var value = dark ? 100 : 255;
                data[index + 0] = value;
                data[index + 1] = value;
                data[index + 2] = value;
                data[index + 3] = 255;
            }
        }
        return data;
    };
    GLTexture.colorData = function (width, height) {
        var data = new Uint8Array(width * height * 4);
        for (var i = 0; i < width; i++) {
            for (var j = 0; j < height; j++) {
                var index = (i + j * width) * 4;
                data[index + 0] = 255;
                data[index + 1] = 255;
                data[index + 2] = 255;
                data[index + 3] = 255;
            }
        }
        return data;
    };
    return GLTexture;
}());
exports.GLTexture = GLTexture;


/***/ }),

/***/ "./src/ts/graphics/webgl/GLVertexBatch.ts":
/*!************************************************!*\
  !*** ./src/ts/graphics/webgl/GLVertexBatch.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GLVertexBatch = void 0;
var GLVertexBatch = /** @class */ (function () {
    function GLVertexBatch(gl) {
        this.u = 0;
        this.v = 0;
        this.r = 1;
        this.g = 1;
        this.b = 1;
        this.a = 1;
        this.length = 0;
        this.gl = gl;
        this.data = new Float32Array(3 * 1024);
        this.index = 0;
        this.buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, this.buffer);
        gl.bufferData(gl.ARRAY_BUFFER, this.data, gl.DYNAMIC_DRAW);
    }
    Object.defineProperty(GLVertexBatch.prototype, "left", {
        get: function () { return this.data.length / GLVertexBatch.StrideInBytes - this.index - 1; },
        enumerable: false,
        configurable: true
    });
    GLVertexBatch.prototype.uv = function (u, v) {
        this.u = u;
        this.v = v;
    };
    GLVertexBatch.prototype.color = function (r, g, b, a) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    };
    GLVertexBatch.prototype.vertex = function (x, y, z) {
        var idx = this.index * GLVertexBatch.Stride + GLVertexBatch.PositionOffset;
        this.data[idx + 0] = x;
        this.data[idx + 1] = y;
        this.data[idx + 2] = z;
        this.data[idx + 3] = this.r;
        this.data[idx + 4] = this.g;
        this.data[idx + 5] = this.b;
        this.data[idx + 6] = this.a;
        this.data[idx + 7] = this.u;
        this.data[idx + 8] = this.v;
        // TODO should this submit?
        this.index++;
    };
    GLVertexBatch.prototype.flush = function () {
        if (this.index === 0)
            return;
        // This is nice to optimize with webgl2 to get buffersubdata with offsets and whatnot
        this.gl.bindBuffer(this.gl.ARRAY_BUFFER, this.buffer);
        this.gl.bufferSubData(this.gl.ARRAY_BUFFER, 0, this.data.subarray(0, this.index * GLVertexBatch.Stride));
        this.length = this.index;
        this.index = 0;
    };
    GLVertexBatch.prototype.destroy = function () {
        this.gl.deleteBuffer(this.buffer);
    };
    GLVertexBatch.FloatSizeInBytes = 4;
    GLVertexBatch.PositionSize = 3;
    GLVertexBatch.ColorSize = 4;
    GLVertexBatch.UVSize = 2;
    GLVertexBatch.PositionOffset = 0;
    GLVertexBatch.ColorOffset = GLVertexBatch.PositionSize;
    GLVertexBatch.UVOffset = GLVertexBatch.PositionSize + GLVertexBatch.ColorSize;
    GLVertexBatch.PositionOffsetInBytes = GLVertexBatch.PositionOffset * GLVertexBatch.FloatSizeInBytes;
    GLVertexBatch.ColorOffsetInBytes = GLVertexBatch.ColorOffset * GLVertexBatch.FloatSizeInBytes;
    GLVertexBatch.UVOffsetInBytes = GLVertexBatch.UVOffset * GLVertexBatch.FloatSizeInBytes;
    GLVertexBatch.Stride = GLVertexBatch.PositionSize + GLVertexBatch.ColorSize + GLVertexBatch.UVSize;
    GLVertexBatch.StrideInBytes = GLVertexBatch.Stride * GLVertexBatch.FloatSizeInBytes;
    return GLVertexBatch;
}());
exports.GLVertexBatch = GLVertexBatch;


/***/ }),

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Game_1 = __webpack_require__(/*! engine/Game */ "./src/ts/engine/Game.ts");
var ChestGameObject_1 = __webpack_require__(/*! island/GameObjects/ChestGameObject */ "./src/ts/island/GameObjects/ChestGameObject.ts");
var ColliderGameObject_1 = __webpack_require__(/*! island/GameObjects/ColliderGameObject */ "./src/ts/island/GameObjects/ColliderGameObject.ts");
var FeatherGameObject_1 = __webpack_require__(/*! island/GameObjects/FeatherGameObject */ "./src/ts/island/GameObjects/FeatherGameObject.ts");
var LevelManager_1 = __webpack_require__(/*! island/GameObjects/LevelManager */ "./src/ts/island/GameObjects/LevelManager.ts");
var PlayerCheckpointGameObject_1 = __webpack_require__(/*! island/GameObjects/PlayerCheckpointGameObject */ "./src/ts/island/GameObjects/PlayerCheckpointGameObject.ts");
var PlayerFinishGameObject_1 = __webpack_require__(/*! island/GameObjects/PlayerFinishGameObject */ "./src/ts/island/GameObjects/PlayerFinishGameObject.ts");
var PlayerSpawnGameObject_1 = __webpack_require__(/*! island/GameObjects/PlayerSpawnGameObject */ "./src/ts/island/GameObjects/PlayerSpawnGameObject.ts");
var SpikesGameObject_1 = __webpack_require__(/*! island/GameObjects/SpikesGameObject */ "./src/ts/island/GameObjects/SpikesGameObject.ts");
var FallingBlockGameObject_1 = __webpack_require__(/*! island/GameObjects/FallingBlockGameObject */ "./src/ts/island/GameObjects/FallingBlockGameObject.ts");
var AABB_1 = __webpack_require__(/*! math/AABB */ "./src/ts/math/AABB.ts");
var Scene_1 = __webpack_require__(/*! scene/Scene */ "./src/ts/scene/Scene.ts");
var TileMap_1 = __webpack_require__(/*! tilemap/TileMap */ "./src/ts/tilemap/TileMap.ts");
var List_1 = __webpack_require__(/*! util/List */ "./src/ts/util/List.ts");
var MovingPlatformGameObject_1 = __webpack_require__(/*! island/GameObjects/MovingPlatformGameObject */ "./src/ts/island/GameObjects/MovingPlatformGameObject.ts");
var PathManager_1 = __webpack_require__(/*! island/GameObjects/PathManager */ "./src/ts/island/GameObjects/PathManager.ts");
var Path_1 = __webpack_require__(/*! math/Path */ "./src/ts/math/Path.ts");
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var JumpPlatformGameObject_1 = __webpack_require__(/*! island/GameObjects/JumpPlatformGameObject */ "./src/ts/island/GameObjects/JumpPlatformGameObject.ts");
// Fuck this but whatever
function initModal(element) {
    var close = element.querySelector(".close");
    close === null || close === void 0 ? void 0 : close.addEventListener("click", function () {
        element.classList.add("closed");
        // Yes this makes a lot of sense here :)
        document.body.requestFullscreen();
    });
}
function initModals() {
    var modals = document.querySelectorAll(".modal");
    modals.forEach(function (modal) { return initModal(modal); });
}
// Init the damn game
document.addEventListener("DOMContentLoaded", function () { return __awaiter(void 0, void 0, void 0, function () {
    var canvas, game, setLevel;
    return __generator(this, function (_a) {
        initModals();
        canvas = document.getElementById("canvas");
        game = new Game_1.Game(canvas);
        game.run();
        setLevel = function (level) { return __awaiter(void 0, void 0, void 0, function () {
            var scene, pathManager, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        scene = new Scene_1.Scene();
                        pathManager = new PathManager_1.PathManager();
                        scene.addGameObject(pathManager);
                        _a = scene;
                        return [4 /*yield*/, TileMap_1.TileMap.fromTiledMapDownload(level, game.resources, function (obj) {
                                if (obj.type === "Collider" || obj.type === "PlatformCollider") {
                                    scene.addGameObject(new ColliderGameObject_1.ColliderGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
                                }
                                if (obj.type === "LevelManager") {
                                    scene.addGameObject(new LevelManager_1.LevelManager());
                                }
                                if (obj.type === "PlayerSpawn") {
                                    scene.addGameObject(new PlayerSpawnGameObject_1.PlayerSpawnGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
                                }
                                if (obj.type === "FallingBlock") {
                                    scene.addGameObject(new FallingBlockGameObject_1.FallingBlockGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
                                }
                                if (obj.type === "MovingPlatform") {
                                    var pathName_1 = "";
                                    var velocity_1 = 30;
                                    var offset_1 = 0;
                                    if (obj.properties != null) {
                                        obj.properties.forEach(function (prop) {
                                            if (prop.name === "path")
                                                pathName_1 = prop.value;
                                            if (prop.name === "velocity")
                                                velocity_1 = prop.value;
                                            if (prop.name === "offset")
                                                offset_1 = prop.value;
                                        });
                                    }
                                    scene.addGameObject(new MovingPlatformGameObject_1.MovingPlatformGameObject(pathName_1, velocity_1, offset_1, AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
                                }
                                if (obj.type === "Checkpoint") {
                                    scene.addGameObject(new PlayerCheckpointGameObject_1.PlayerCheckpointGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
                                }
                                if (obj.type === "JumpPlatform") {
                                    scene.addGameObject(new JumpPlatformGameObject_1.JumpPlatformGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
                                }
                                if (obj.type === "Feather") {
                                    scene.addGameObject(new FeatherGameObject_1.FeatherGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
                                }
                                if (obj.type === "PlayerFinish") {
                                    scene.addGameObject(new PlayerFinishGameObject_1.PlayerFinishGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
                                }
                                if (obj.type === "Chest") {
                                    scene.addGameObject(new ChestGameObject_1.ChestGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
                                }
                                if (obj.type === "Spikes") {
                                    var spikes = new SpikesGameObject_1.SpikesGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height), List_1.default.has(obj.properties, function (prop) { return prop.name === "shrink" && prop.value === true; }));
                                    scene.addGameObject(spikes);
                                }
                                if (obj.type === "Path") {
                                    var path_1 = new Path_1.Path();
                                    obj.polyline.forEach(function (line) {
                                        path_1.add(new Vector2_1.Vector2(line.x + obj.x, line.y + obj.y));
                                    });
                                    pathManager.paths[obj.name] = path_1;
                                }
                            })];
                    case 1:
                        _a.tilemap = _b.sent();
                        scene.physics.layers = scene.tilemap.colliders;
                        game.scene = scene;
                        game.scene.init(game);
                        return [2 /*return*/];
                }
            });
        }); };
        setLevel("assets/levels/level4.json");
        window.setLevel = setLevel;
        return [2 /*return*/];
    });
}); });


/***/ }),

/***/ "./src/ts/island/Components/HealthComponent.ts":
/*!*****************************************************!*\
  !*** ./src/ts/island/Components/HealthComponent.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.HealthComponent = void 0;
var Component_1 = __webpack_require__(/*! scene/Component */ "./src/ts/scene/Component.ts");
var Signal_1 = __webpack_require__(/*! signals/Signal */ "./src/ts/signals/Signal.ts");
var HealthComponent = /** @class */ (function (_super) {
    __extends(HealthComponent, _super);
    function HealthComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.health = 3;
        _this.onDamage = new Signal_1.Signal();
        _this.onDeath = new Signal_1.Signal();
        return _this;
    }
    Object.defineProperty(HealthComponent.prototype, "alive", {
        get: function () { return this.health > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(HealthComponent.prototype, "dead", {
        get: function () { return this.health <= 0; },
        enumerable: false,
        configurable: true
    });
    HealthComponent.prototype.damage = function (amount) {
        this.health -= amount;
        this.onDamage.emit(this);
        if (this.dead) {
            this.onDeath.emit(this);
        }
    };
    return HealthComponent;
}(Component_1.Component));
exports.HealthComponent = HealthComponent;


/***/ }),

/***/ "./src/ts/island/Components/InteractableComponent.ts":
/*!***********************************************************!*\
  !*** ./src/ts/island/Components/InteractableComponent.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractableComponent = void 0;
var Component_1 = __webpack_require__(/*! scene/Component */ "./src/ts/scene/Component.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Signal_1 = __webpack_require__(/*! signals/Signal */ "./src/ts/signals/Signal.ts");
var InteractableComponent = /** @class */ (function (_super) {
    __extends(InteractableComponent, _super);
    function InteractableComponent() {
        var _this = _super.call(this) || this;
        _this.onInteract = new Signal_1.Signal();
        return _this;
    }
    InteractableComponent.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        this.body = this.gameObject.findComponent(function (component) { return component instanceof Rigidbody_1.Rigidbody; });
    };
    InteractableComponent.prototype.interact = function (interactor) {
        this.onInteract.emit(interactor);
    };
    Object.defineProperty(InteractableComponent.prototype, "canInteract", {
        get: function () {
            return true;
        },
        enumerable: false,
        configurable: true
    });
    return InteractableComponent;
}(Component_1.Component));
exports.InteractableComponent = InteractableComponent;


/***/ }),

/***/ "./src/ts/island/Components/InteractorComponent.ts":
/*!*********************************************************!*\
  !*** ./src/ts/island/Components/InteractorComponent.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.InteractorComponent = void 0;
var Component_1 = __webpack_require__(/*! scene/Component */ "./src/ts/scene/Component.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var InteractableComponent_1 = __webpack_require__(/*! ./InteractableComponent */ "./src/ts/island/Components/InteractableComponent.ts");
var InteractorComponent = /** @class */ (function (_super) {
    __extends(InteractorComponent, _super);
    function InteractorComponent() {
        var _this = _super.call(this) || this;
        _this.hovers = new Set();
        return _this;
    }
    InteractorComponent.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        this.body = this.gameObject.findComponent(function (component) { return component instanceof Rigidbody_1.Rigidbody; });
        this.body.onCollision.listen(this.onCollision.bind(this));
    };
    InteractorComponent.prototype.interact = function () {
        var _this = this;
        this.hovers.forEach(function (hover) {
            if (hover.canInteract) {
                hover.interact(_this);
            }
        });
    };
    InteractorComponent.prototype.update = function (delta) {
        var _this = this;
        var removeList = [];
        this.hovers.forEach(function (value) {
            // If no longer collides!
            if (!value.body.collides(_this.body)) {
                removeList.push(value);
            }
        });
        removeList.forEach(function (item) { return _this.hovers.delete(item); });
    };
    InteractorComponent.prototype.onCollision = function (other) {
        var interaction = other.gameObject.findComponent(function (component) { return component instanceof InteractableComponent_1.InteractableComponent; });
        if (interaction === undefined)
            return;
        this.hovers.add(interaction);
    };
    return InteractorComponent;
}(Component_1.Component));
exports.InteractorComponent = InteractorComponent;


/***/ }),

/***/ "./src/ts/island/Components/MovingGroundComponent.ts":
/*!***********************************************************!*\
  !*** ./src/ts/island/Components/MovingGroundComponent.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// Why not just RigidBody? 
// Well: because this moving ground component can actually be like a moving platform without actually moving itself
// So things like a converyer belt could be implemented using this approach.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovingGroundComponent = void 0;
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var Component_1 = __webpack_require__(/*! scene/Component */ "./src/ts/scene/Component.ts");
// Less physics code, more client code, more better :)
var MovingGroundComponent = /** @class */ (function (_super) {
    __extends(MovingGroundComponent, _super);
    function MovingGroundComponent() {
        var _this = _super.call(this) || this;
        _this.velocity = new Vector2_1.Vector2();
        return _this;
    }
    return MovingGroundComponent;
}(Component_1.Component));
exports.MovingGroundComponent = MovingGroundComponent;


/***/ }),

/***/ "./src/ts/island/Components/PlayerInputComponent.ts":
/*!**********************************************************!*\
  !*** ./src/ts/island/Components/PlayerInputComponent.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerInputComponent = void 0;
var Input_1 = __webpack_require__(/*! engine/Input */ "./src/ts/engine/Input.ts");
var Component_1 = __webpack_require__(/*! scene/Component */ "./src/ts/scene/Component.ts");
var PlayerInputComponent = /** @class */ (function (_super) {
    __extends(PlayerInputComponent, _super);
    function PlayerInputComponent() {
        var _this = _super.call(this) || this;
        _this.direction = 0;
        _this.jumpPressed = false;
        _this.jumpDown = false;
        _this.dashPressed = false;
        _this.interactPressed = false;
        return _this;
    }
    PlayerInputComponent.prototype.update = function (delta) {
        var _this = this;
        this.jumpPressed = false;
        this.dashPressed = false;
        this.interactPressed = false;
        this.jumpDown = false;
        this.direction = 0;
        // TODO actually switch between controllers instead of this half baked half assed solution
        this.game.input.gamepads.forEach(function (pad) {
            if (pad.isButtonPressed(Input_1.GamepadInput.ButtonA)) {
                _this.jumpPressed = true;
            }
            if (pad.isButtonPressed(Input_1.GamepadInput.ButtonX)) {
                _this.interactPressed = true;
            }
            if (pad.isButtonPressed(Input_1.GamepadInput.ButtonRightTrigger)) {
                _this.dashPressed = true;
            }
            if (pad.isButtonDown(Input_1.GamepadInput.ButtonA)) {
                _this.jumpDown = true;
            }
            _this.direction = pad.leftAxisX;
        });
        if (this.game.input.keyboard.isKeyPressed(Input_1.Keyboard.KeySpace))
            this.jumpPressed = true;
        if (this.game.input.keyboard.isKeyDown(Input_1.Keyboard.KeySpace))
            this.jumpDown = true;
        if (this.game.input.keyboard.isKeyPressed(Input_1.Keyboard.KeyC))
            this.dashPressed = true;
        if (this.game.input.keyboard.isKeyPressed(Input_1.Keyboard.KeyX))
            this.interactPressed = true;
        if (this.game.input.keyboard.isKeyDown(Input_1.Keyboard.KeyArrowLeft))
            this.direction = -1;
        if (this.game.input.keyboard.isKeyDown(Input_1.Keyboard.KeyArrowRight))
            this.direction = 1;
        if (this.game.input.keyboard.isKeyDown(Input_1.Keyboard.KeyA))
            this.direction = -1;
        if (this.game.input.keyboard.isKeyDown(Input_1.Keyboard.KeyD))
            this.direction = 1;
        if (this.game.input.keyboard.isKeyPressed(Input_1.Keyboard.KeyComma))
            this.jumpPressed = true;
        if (this.game.input.keyboard.isKeyDown(Input_1.Keyboard.KeyComma))
            this.jumpDown = true;
        if (this.game.input.keyboard.isKeyPressed(Input_1.Keyboard.KeyPeriod))
            this.dashPressed = true;
        if (this.game.input.keyboard.isKeyPressed(Input_1.Keyboard.KeySlash))
            this.interactPressed = true;
    };
    return PlayerInputComponent;
}(Component_1.Component));
exports.PlayerInputComponent = PlayerInputComponent;


/***/ }),

/***/ "./src/ts/island/GameObjects/ChestGameObject.ts":
/*!******************************************************!*\
  !*** ./src/ts/island/GameObjects/ChestGameObject.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChestGameObject = void 0;
var InteractableComponent_1 = __webpack_require__(/*! island/Components/InteractableComponent */ "./src/ts/island/Components/InteractableComponent.ts");
var IslandResources_1 = __webpack_require__(/*! island/IslandResources */ "./src/ts/island/IslandResources.ts");
var BoxCollider_1 = __webpack_require__(/*! math/collision/BoxCollider */ "./src/ts/math/collision/BoxCollider.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var ChestGameObject = /** @class */ (function (_super) {
    __extends(ChestGameObject, _super);
    function ChestGameObject(aabb) {
        var _this = _super.call(this) || this;
        _this.isOpen = false;
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.apply(aabb.x, aabb.y);
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        _this.interactable = _this.addComponent(new InteractableComponent_1.InteractableComponent());
        _this.interactable.onInteract.listen(_this.onInteract.bind(_this));
        _this.body.collider = BoxCollider_1.BoxCollider.fromAABB(aabb);
        _this.body.useDynamicCollisions = true;
        return _this;
    }
    ChestGameObject.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        var objectSheet = game.resources.loadSpriteSheet(IslandResources_1.default.SheetObjects);
        this.closed = objectSheet.getSprite(0, 64, 16, 16);
        this.open = objectSheet.getSprite(16, 64, 16, 16);
    };
    ChestGameObject.prototype.onInteract = function (interactor) {
        this.isOpen = !this.isOpen;
    };
    ChestGameObject.prototype.draw = function (graphics) {
        graphics.drawSpriteSimple(this.isOpen ? this.open : this.closed, this.transform.position.x, this.transform.position.y);
    };
    return ChestGameObject;
}(GameObject_1.GameObject));
exports.ChestGameObject = ChestGameObject;


/***/ }),

/***/ "./src/ts/island/GameObjects/ColliderGameObject.ts":
/*!*********************************************************!*\
  !*** ./src/ts/island/GameObjects/ColliderGameObject.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColliderGameObject = void 0;
var BoxCollider_1 = __webpack_require__(/*! math/collision/BoxCollider */ "./src/ts/math/collision/BoxCollider.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var ColliderGameObject = /** @class */ (function (_super) {
    __extends(ColliderGameObject, _super);
    function ColliderGameObject(aabb) {
        var _this = _super.call(this) || this;
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.apply(aabb.x, aabb.y);
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        _this.body.solid = true;
        _this.body.collider = BoxCollider_1.BoxCollider.fromAABB(aabb);
        return _this;
    }
    return ColliderGameObject;
}(GameObject_1.GameObject));
exports.ColliderGameObject = ColliderGameObject;


/***/ }),

/***/ "./src/ts/island/GameObjects/FallingBlockGameObject.ts":
/*!*************************************************************!*\
  !*** ./src/ts/island/GameObjects/FallingBlockGameObject.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FallingBlockGameObject = void 0;
var IslandResources_1 = __webpack_require__(/*! island/IslandResources */ "./src/ts/island/IslandResources.ts");
var BoxCollider_1 = __webpack_require__(/*! math/collision/BoxCollider */ "./src/ts/math/collision/BoxCollider.ts");
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var ResetableGameObject_1 = __webpack_require__(/*! ./ResetableGameObject */ "./src/ts/island/GameObjects/ResetableGameObject.ts");
var FallingBlockGameObject = /** @class */ (function (_super) {
    __extends(FallingBlockGameObject, _super);
    function FallingBlockGameObject(aabb) {
        var _this = _super.call(this) || this;
        _this.falling = false;
        _this.timer = 0;
        _this.removeTimer = 1;
        _this.respawn = false;
        _this.respawnTimer = 1;
        _this.animationTimer = 0;
        _this.offset = new Vector2_1.Vector2();
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.apply(aabb.x, aabb.y);
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        _this.body.solid = true;
        _this.body.collider = BoxCollider_1.BoxCollider.fromAABB(aabb);
        _this.body.useDynamicCollisions = true;
        _this.body.onCollision.listen(function (other) {
            if (_this.falling)
                return;
            _this.falling = true;
            _this.timer = 0.6;
        });
        return _this;
    }
    FallingBlockGameObject.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        this.sprite = game.resources.loadSpriteSheet(IslandResources_1.default.SheetObjects).getSprite(0, 96, 16, 16);
    };
    FallingBlockGameObject.prototype.update = function (delta) {
        if (!this.falling)
            return;
        this.body.useDynamicCollisions = false;
        this.timer -= delta;
        this.animationTimer -= delta;
        if (this.animationTimer < 0) {
            this.animationTimer = 0.07;
            this.offset.x = Math.random() * 2 - 1;
        }
        if (this.timer > 0)
            return;
        this.offset.x = 0;
        this.offset.y = 0;
        this.body.solid = false;
        this.removeTimer -= delta;
        if (this.removeTimer < 0) {
            // this.scene.removeGameObject(this);
        }
    };
    FallingBlockGameObject.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this.offset.x = 0;
        this.offset.y = 0;
        this.falling = false;
        this.timer = 0;
        this.removeTimer = 1;
        this.body.solid = true;
        this.body.useDynamicCollisions = true;
        this.respawnTimer = 1;
    };
    FallingBlockGameObject.prototype.fixedUpdate = function (delta) {
        if (!this.falling || this.timer > 0)
            return;
        this.body.velocity.y += 0.25 * 60 * 60 * delta;
        this.respawnTimer -= delta;
        if (this.respawnTimer < 0 && this.respawn)
            this.reset();
    };
    FallingBlockGameObject.prototype.draw = function (graphics) {
        if (this.removeTimer < 0)
            return;
        graphics.setAlpha(this.removeTimer);
        graphics.drawSprite(this.sprite, this.transform.interpolatedPosition.x + this.offset.x, this.transform.interpolatedPosition.y + this.offset.y);
        graphics.setAlpha(1);
    };
    return FallingBlockGameObject;
}(ResetableGameObject_1.ResetableGameObject));
exports.FallingBlockGameObject = FallingBlockGameObject;


/***/ }),

/***/ "./src/ts/island/GameObjects/FeatherGameObject.ts":
/*!********************************************************!*\
  !*** ./src/ts/island/GameObjects/FeatherGameObject.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeatherGameObject = void 0;
var IslandResources_1 = __webpack_require__(/*! island/IslandResources */ "./src/ts/island/IslandResources.ts");
var BoxCollider_1 = __webpack_require__(/*! math/collision/BoxCollider */ "./src/ts/math/collision/BoxCollider.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var PlayerGameObject_1 = __webpack_require__(/*! ./PlayerGameObject */ "./src/ts/island/GameObjects/PlayerGameObject.ts");
// TODO player pickup gameobject or something
var FeatherGameObject = /** @class */ (function (_super) {
    __extends(FeatherGameObject, _super);
    function FeatherGameObject(aabb) {
        var _this = _super.call(this) || this;
        _this.usedTime = 0;
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.apply(aabb.centerX, aabb.centerY);
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        _this.body.useDynamicCollisions = true;
        var collider = BoxCollider_1.BoxCollider.fromAABB(aabb);
        collider.offset.apply(6, 6);
        collider.size.apply(12, 12);
        _this.body.collider = collider;
        _this.isUsed = false;
        _this.body.onCollision.listen(_this.onCollision.bind(_this));
        return _this;
    }
    FeatherGameObject.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        var sheetEffects = game.resources.loadSpriteSheet(IslandResources_1.default.SheetEffects);
        var sheetObjects = game.resources.loadSpriteSheet(IslandResources_1.default.SheetObjects);
        this.effect = sheetEffects.getAnimation(0, 80, 16, 16, 4).center();
        this.effect.frameRate = 12;
        this.unusedSprite = sheetObjects.getSprite(0, 80, 16, 16).center();
        this.usedSprite = sheetObjects.getSprite(16, 80, 16, 16).center();
    };
    FeatherGameObject.prototype.update = function (delta) {
        if (this.usedTime < 0)
            return;
        this.usedTime -= delta;
        if (this.usedTime < 0) {
            this.isUsed = false;
            // TODO add animation
        }
    };
    FeatherGameObject.prototype.onCollision = function (other) {
        if (!this.isUsed && other.gameObject instanceof PlayerGameObject_1.PlayerGameObject) {
            other.gameObject.canDoubleJump = true;
            other.gameObject.canDash = true; //After doublejump, you get another dash!
            this.isUsed = true;
            this.usedTime = 1;
            this.scene.particleSystem.addParticle(this.transform.position.x, this.transform.position.y, this.effect);
            // TODO add animation
        }
    };
    FeatherGameObject.prototype.draw = function (graphics) {
        graphics.drawSpriteSimple(this.isUsed ? this.usedSprite : this.unusedSprite, this.transform.position.x, this.transform.position.y);
    };
    return FeatherGameObject;
}(GameObject_1.GameObject));
exports.FeatherGameObject = FeatherGameObject;


/***/ }),

/***/ "./src/ts/island/GameObjects/JumpPlatformGameObject.ts":
/*!*************************************************************!*\
  !*** ./src/ts/island/GameObjects/JumpPlatformGameObject.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.JumpPlatformGameObject = void 0;
var IslandResources_1 = __webpack_require__(/*! island/IslandResources */ "./src/ts/island/IslandResources.ts");
var BoxCollider_1 = __webpack_require__(/*! math/collision/BoxCollider */ "./src/ts/math/collision/BoxCollider.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var PlayerGameObject_1 = __webpack_require__(/*! ./PlayerGameObject */ "./src/ts/island/GameObjects/PlayerGameObject.ts");
var JumpPlatformGameObject = /** @class */ (function (_super) {
    __extends(JumpPlatformGameObject, _super);
    function JumpPlatformGameObject(aabb) {
        var _this = _super.call(this) || this;
        _this.gravity = 0.25 * 60 * 60;
        _this.bouncyness = 0.4;
        _this.velocity = 0;
        _this.offset = 0;
        // Just whatever man.
        aabb.top += 12;
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.apply(aabb.x, aabb.y);
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        _this.body.collider = BoxCollider_1.BoxCollider.fromAABB(aabb);
        _this.body.useDynamicCollisions = true;
        _this.body.onCollision.listen(function (other) {
            var offset = other.boundingBox.bottom - other.transform.position.y;
            other.transform.position.y = aabb.top - offset;
            other.velocity.y = -3.5 * 60;
            _this.velocity = -3.5 * 60;
            if (other.gameObject instanceof PlayerGameObject_1.PlayerGameObject) {
                other.gameObject.canDash = true;
            }
        });
        return _this;
    }
    JumpPlatformGameObject.prototype.fixedUpdate = function (delta) {
        _super.prototype.fixedUpdate.call(this, delta);
        this.velocity += this.gravity * delta;
        this.offset += this.velocity * delta;
        if (this.offset > 10) {
            this.offset = 10;
            if (this.velocity > 0)
                this.velocity = -this.velocity * this.bouncyness;
        }
        if (this.offset < 0) {
            this.offset = 0;
            if (this.velocity < 0)
                this.velocity = -this.velocity * this.bouncyness;
        }
    };
    JumpPlatformGameObject.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        var sheet = game.resources.loadSpriteSheet(IslandResources_1.default.SheetObjects);
        this.sprite = sheet.getSprite(0, 128 + 12, 16, 4);
    };
    JumpPlatformGameObject.prototype.draw = function (graphics) {
        graphics.drawSprite(this.sprite, this.transform.interpolatedPosition.x, this.transform.interpolatedPosition.y + this.offset - 10);
    };
    return JumpPlatformGameObject;
}(GameObject_1.GameObject));
exports.JumpPlatformGameObject = JumpPlatformGameObject;


/***/ }),

/***/ "./src/ts/island/GameObjects/LevelManager.ts":
/*!***************************************************!*\
  !*** ./src/ts/island/GameObjects/LevelManager.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.LevelManager = void 0;
var Input_1 = __webpack_require__(/*! engine/Input */ "./src/ts/engine/Input.ts");
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var Time_1 = __webpack_require__(/*! util/Time */ "./src/ts/util/Time.ts");
var PlayerCheckpointGameObject_1 = __webpack_require__(/*! ./PlayerCheckpointGameObject */ "./src/ts/island/GameObjects/PlayerCheckpointGameObject.ts");
var PlayerFinishGameObject_1 = __webpack_require__(/*! ./PlayerFinishGameObject */ "./src/ts/island/GameObjects/PlayerFinishGameObject.ts");
var PlayerGameObject_1 = __webpack_require__(/*! ./PlayerGameObject */ "./src/ts/island/GameObjects/PlayerGameObject.ts");
var PlayerSpawnGameObject_1 = __webpack_require__(/*! ./PlayerSpawnGameObject */ "./src/ts/island/GameObjects/PlayerSpawnGameObject.ts");
var ResetableGameObject_1 = __webpack_require__(/*! ./ResetableGameObject */ "./src/ts/island/GameObjects/ResetableGameObject.ts");
var LevelManager = /** @class */ (function (_super) {
    __extends(LevelManager, _super);
    function LevelManager() {
        var _this = _super.call(this) || this;
        _this.running = false;
        _this.completed = false;
        _this.time = 0;
        _this.bestTime = undefined;
        _this.element = document.querySelector(".game-overlay");
        _this.finalTimeElement = document.getElementById("final-time");
        _this.bestTimeElement = document.getElementById("best-time");
        _this.alwaysUpdate = true;
        _this.checkpoints = [];
        var bt = localStorage.getItem("bestTime");
        if (bt !== null) {
            _this.bestTime = parseFloat(bt);
        }
        return _this;
    }
    LevelManager.prototype.init = function (game) {
        var _this = this;
        var _a;
        _super.prototype.init.call(this, game);
        this.spawn = this.scene.findObject(function (object) { return object instanceof PlayerSpawnGameObject_1.PlayerSpawnGameObject; });
        this.finish = this.scene.findObject(function (object) { return object instanceof PlayerFinishGameObject_1.PlayerFinishGameObject; });
        (_a = this.finish) === null || _a === void 0 ? void 0 : _a.interactable.onInteract.listen(function (interactor) {
            if (interactor.gameObject instanceof PlayerGameObject_1.PlayerGameObject) {
                _this.completed = true;
                _this.stop();
            }
        });
        this.scene.gameObjects.forEach(function (obj) {
            if (obj instanceof PlayerCheckpointGameObject_1.PlayerCheckpointGameObject) {
                _this.checkpoints.push(obj);
                obj.interactable.onInteract.listen(function (interactor) {
                    _this.currentCheckpoint = obj;
                });
            }
        });
        this.restart();
    };
    LevelManager.prototype.update = function (delta) {
        var _this = this;
        _super.prototype.update.call(this, delta);
        if (this.running) {
            this.game.input.gamepads.forEach(function (pad) {
                if (pad.isButtonPressed(Input_1.GamepadInput.ButtonY)) {
                    _this.restart();
                }
            });
            if (this.game.input.keyboard.isKeyPressed(Input_1.Keyboard.KeyEnter)) {
                this.restart();
            }
        }
        else {
            this.game.input.gamepads.forEach(function (pad) {
                if (pad.isButtonPressed(Input_1.GamepadInput.ButtonA) || pad.isButtonPressed(Input_1.GamepadInput.ButtonY)) {
                    _this.restart();
                }
            });
            if (this.game.input.keyboard.isKeyPressed(Input_1.Keyboard.KeyEnter)) {
                this.restart();
            }
            if (this.game.input.keyboard.isKeyPressed(Input_1.Keyboard.KeyComma)) {
                this.restart();
            }
            if (this.game.input.keyboard.isKeyPressed(Input_1.Keyboard.KeySpace)) {
                this.restart();
            }
        }
        this.updateCamera(delta);
    };
    LevelManager.prototype.fixedUpdate = function (delta) {
        var _a;
        _super.prototype.fixedUpdate.call(this, delta);
        if (this.running && !this.scene.paused) {
            this.time += delta;
        }
        if (!((_a = this.player) === null || _a === void 0 ? void 0 : _a.health.alive)) {
            this.stop();
        }
    };
    LevelManager.prototype.stop = function () {
        this.scene.removeGameObject(this.player);
        this.running = false;
        if (this.completed && (this.bestTime === undefined || this.time < this.bestTime)) {
            this.bestTime = this.time;
            localStorage.setItem("bestTime", "" + this.bestTime);
        }
        this.sync();
    };
    LevelManager.prototype.restart = function () {
        if (this.spawn === undefined)
            return;
        this.stop();
        this.player = new PlayerGameObject_1.PlayerGameObject();
        var position = this.spawn.transform.position;
        if (this.currentCheckpoint === undefined) {
            this.time = 0;
        }
        if (this.currentCheckpoint !== undefined && !this.completed) {
            position = this.currentCheckpoint.transform.position;
        }
        this.player.transform.position.set(position);
        this.player.transform.interpolatedPosition.set(position);
        this.player.body.previousPosition.set(position);
        this.running = true;
        if (this.completed) {
            this.time = 0;
            this.completed = false;
        }
        this.scene.addGameObject(this.player);
        this.scene.gameObjects.forEach(function (obj) {
            if (obj instanceof ResetableGameObject_1.ResetableGameObject) {
                obj.reset();
            }
        });
        this.sync();
    };
    LevelManager.prototype.sync = function () {
        this.element.classList.toggle("game-over", !this.running);
        this.element.classList.toggle("completed", this.completed);
        this.finalTimeElement.innerText = Time_1.format(this.time);
        if (this.bestTime !== undefined) {
            this.bestTimeElement.innerText = Time_1.format(this.bestTime);
        }
    };
    LevelManager.prototype.updateCamera = function (delta) {
        if (!this.player)
            return;
        var position = this.player.transform.position;
        var sceneWidth = this.scene.tilemap.pixelWidth;
        var sceneHeight = this.scene.tilemap.pixelHeight;
        var screenWidth = 40 * 16;
        var screenHeight = 23 * 16;
        var cam = this.scene.camera;
        var screenIndexX = Math.floor(position.x / screenWidth);
        var screenIndexY = Math.floor(position.y / screenHeight);
        var offsetX = screenIndexX * screenWidth;
        var offsetY = screenIndexY * screenHeight;
        var wantedPosition = new Vector2_1.Vector2(offsetX + screenWidth / 2, offsetY + screenHeight / 2);
        // Clamp the wanted position to the scene... Not great, for reasons (like, edge cases, but we don't care :) )
        if (wantedPosition.x - cam.width / 2 < 0)
            wantedPosition.x = cam.width / 2;
        if (wantedPosition.x + cam.width / 2 > sceneWidth)
            wantedPosition.x = sceneWidth - cam.width / 2;
        if (wantedPosition.y - cam.height / 2 < 0)
            wantedPosition.y = cam.height / 2;
        if (wantedPosition.y + cam.height / 2 > sceneHeight)
            wantedPosition.y = sceneHeight - cam.height / 2;
        this.scene.paused = Vector2_1.Vector2.distance(wantedPosition, cam.center) > 1;
        cam.center.lerpTo(wantedPosition, delta * 10);
    };
    return LevelManager;
}(GameObject_1.GameObject));
exports.LevelManager = LevelManager;


/***/ }),

/***/ "./src/ts/island/GameObjects/MovingPlatformGameObject.ts":
/*!***************************************************************!*\
  !*** ./src/ts/island/GameObjects/MovingPlatformGameObject.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.MovingPlatformGameObject = void 0;
var NineSideSprite_1 = __webpack_require__(/*! graphics/NineSideSprite */ "./src/ts/graphics/NineSideSprite.ts");
var MovingGroundComponent_1 = __webpack_require__(/*! island/Components/MovingGroundComponent */ "./src/ts/island/Components/MovingGroundComponent.ts");
var IslandResources_1 = __webpack_require__(/*! island/IslandResources */ "./src/ts/island/IslandResources.ts");
var BoxCollider_1 = __webpack_require__(/*! math/collision/BoxCollider */ "./src/ts/math/collision/BoxCollider.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var PathManager_1 = __webpack_require__(/*! ./PathManager */ "./src/ts/island/GameObjects/PathManager.ts");
var ResetableGameObject_1 = __webpack_require__(/*! ./ResetableGameObject */ "./src/ts/island/GameObjects/ResetableGameObject.ts");
var MovingPlatformGameObject = /** @class */ (function (_super) {
    __extends(MovingPlatformGameObject, _super);
    function MovingPlatformGameObject(pathName, velocity, offset, aabb) {
        var _this = _super.call(this) || this;
        _this.direction = 1;
        _this.pathPosition = 0;
        _this.pathName = "";
        _this.width = aabb.width;
        _this.height = aabb.height;
        _this.velocity = velocity;
        _this.startPosition = offset;
        _this.pathPosition = offset;
        _this.pathName = pathName;
        _this.ground = _this.addComponent(new MovingGroundComponent_1.MovingGroundComponent());
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.apply(aabb.x, aabb.y);
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        _this.body.solid = true;
        _this.body.collider = BoxCollider_1.BoxCollider.fromAABB(aabb);
        return _this;
    }
    MovingPlatformGameObject.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        var texture = game.resources.loadTexture(IslandResources_1.default.SheetObjects);
        var sns = new NineSideSprite_1.NineSideSprite(texture);
        sns.setup(16, 96, 16, 16, 4, 4, 4, 4);
        this.nin = sns;
        this.sprite = game.resources.loadSpriteSheet(IslandResources_1.default.SheetObjects).getSprite(16, 96, 16, 16);
        var manager = this.scene.findObject(function (obj) { return obj instanceof PathManager_1.PathManager; });
        this.path = manager.getPath(this.pathName);
        this.clampPath();
    };
    MovingPlatformGameObject.prototype.clampPath = function () {
        if (this.path) {
            var l = this.path.length();
            var even = Math.floor(this.pathPosition / l) % 2 === 1;
            this.pathPosition %= this.path.length();
            if (even) {
                this.direction = -1;
                this.pathPosition = l - this.pathPosition;
            }
            else {
                this.direction = 1;
            }
        }
    };
    MovingPlatformGameObject.prototype.fixedUpdate = function (delta) {
        this.pathPosition += this.velocity * delta * this.direction;
        if (this.path === undefined)
            return;
        if (this.pathPosition > this.path.length() && this.direction > 0) {
            this.direction = -this.direction;
        }
        if (this.pathPosition < 0 && this.direction < 0) {
            this.direction = -this.direction;
        }
        var newPos = this.path.getPosition(this.pathPosition - this.velocity * delta * this.direction);
        var nextPos = this.path.getPosition(this.pathPosition);
        this.transform.position.x = newPos.x;
        this.transform.position.y = newPos.y;
        var dir = nextPos.sub(newPos);
        this.body.velocity.x = dir.x / delta;
        this.body.velocity.y = dir.y / delta;
        this.ground.velocity.x = this.body.velocity.x;
        this.ground.velocity.y = this.body.velocity.y;
    };
    MovingPlatformGameObject.prototype.reset = function () {
        _super.prototype.reset.call(this);
        this.pathPosition = this.startPosition;
        this.clampPath();
    };
    MovingPlatformGameObject.prototype.draw = function (graphics) {
        // graphics.drawSprite(this.sprite, 
        //    this.transform.interpolatedPosition.x, 
        //    this.transform.interpolatedPosition.y,
        //    this.width / this.sprite.width, 
        //    this.height / this.sprite.height);
        graphics.drawSpriteNineSide(this.nin, this.transform.interpolatedPosition.x, this.transform.interpolatedPosition.y, this.width, this.height);
    };
    return MovingPlatformGameObject;
}(ResetableGameObject_1.ResetableGameObject));
exports.MovingPlatformGameObject = MovingPlatformGameObject;


/***/ }),

/***/ "./src/ts/island/GameObjects/PathManager.ts":
/*!**************************************************!*\
  !*** ./src/ts/island/GameObjects/PathManager.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PathManager = void 0;
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var PathManager = /** @class */ (function (_super) {
    __extends(PathManager, _super);
    function PathManager() {
        var _this = _super.call(this) || this;
        _this.paths = {};
        return _this;
    }
    PathManager.prototype.getPath = function (name) {
        return this.paths[name];
    };
    return PathManager;
}(GameObject_1.GameObject));
exports.PathManager = PathManager;


/***/ }),

/***/ "./src/ts/island/GameObjects/PlayerCheckpointGameObject.ts":
/*!*****************************************************************!*\
  !*** ./src/ts/island/GameObjects/PlayerCheckpointGameObject.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerCheckpointGameObject = void 0;
var InteractableComponent_1 = __webpack_require__(/*! island/Components/InteractableComponent */ "./src/ts/island/Components/InteractableComponent.ts");
var IslandResources_1 = __webpack_require__(/*! island/IslandResources */ "./src/ts/island/IslandResources.ts");
var BoxCollider_1 = __webpack_require__(/*! math/collision/BoxCollider */ "./src/ts/math/collision/BoxCollider.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var PlayerCheckpointGameObject = /** @class */ (function (_super) {
    __extends(PlayerCheckpointGameObject, _super);
    function PlayerCheckpointGameObject(aabb) {
        var _this = _super.call(this) || this;
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.apply(aabb.x, aabb.y);
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        _this.interactable = _this.addComponent(new InteractableComponent_1.InteractableComponent());
        _this.interactable.onInteract.listen(_this.onInteract.bind(_this));
        // Interactables and shit
        _this.body.useDynamicCollisions = true;
        _this.body.collider = BoxCollider_1.BoxCollider.fromAABB(aabb);
        return _this;
    }
    PlayerCheckpointGameObject.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        var objectSheet = game.resources.loadSpriteSheet(IslandResources_1.default.SheetObjects);
        this.closedAnimation = objectSheet.getAnimation(0, 112, 16, 16, 1);
        this.openAnimation = objectSheet.getAnimation(16, 112, 16, 16, 4);
        this.currentAnimation = this.closedAnimation;
    };
    PlayerCheckpointGameObject.prototype.update = function (delta) {
        this.currentAnimation.update(delta);
    };
    PlayerCheckpointGameObject.prototype.onInteract = function (interactor) {
        this.currentAnimation = this.openAnimation;
    };
    PlayerCheckpointGameObject.prototype.draw = function (graphics) {
        graphics.drawSpriteSimple(this.currentAnimation.frame, this.transform.position.x, this.transform.position.y);
    };
    return PlayerCheckpointGameObject;
}(GameObject_1.GameObject));
exports.PlayerCheckpointGameObject = PlayerCheckpointGameObject;


/***/ }),

/***/ "./src/ts/island/GameObjects/PlayerFinishGameObject.ts":
/*!*************************************************************!*\
  !*** ./src/ts/island/GameObjects/PlayerFinishGameObject.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerFinishGameObject = void 0;
var InteractableComponent_1 = __webpack_require__(/*! island/Components/InteractableComponent */ "./src/ts/island/Components/InteractableComponent.ts");
var IslandResources_1 = __webpack_require__(/*! island/IslandResources */ "./src/ts/island/IslandResources.ts");
var BoxCollider_1 = __webpack_require__(/*! math/collision/BoxCollider */ "./src/ts/math/collision/BoxCollider.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var PlayerFinishGameObject = /** @class */ (function (_super) {
    __extends(PlayerFinishGameObject, _super);
    function PlayerFinishGameObject(aabb) {
        var _this = _super.call(this) || this;
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.apply(aabb.x, aabb.y);
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        _this.interactable = _this.addComponent(new InteractableComponent_1.InteractableComponent());
        // Interactables and shit
        _this.body.useDynamicCollisions = true;
        _this.body.collider = BoxCollider_1.BoxCollider.fromAABB(aabb);
        return _this;
    }
    PlayerFinishGameObject.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        this.sprite = game.resources.loadSpriteSheet(IslandResources_1.default.SheetObjects).getSprite(112, 0, 16, 16);
    };
    PlayerFinishGameObject.prototype.draw = function (graphics) {
        graphics.drawSpriteSimple(this.sprite, this.transform.position.x, this.transform.position.y);
    };
    return PlayerFinishGameObject;
}(GameObject_1.GameObject));
exports.PlayerFinishGameObject = PlayerFinishGameObject;


/***/ }),

/***/ "./src/ts/island/GameObjects/PlayerGameObject.ts":
/*!*******************************************************!*\
  !*** ./src/ts/island/GameObjects/PlayerGameObject.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerGameObject = void 0;
var HealthComponent_1 = __webpack_require__(/*! island/Components/HealthComponent */ "./src/ts/island/Components/HealthComponent.ts");
var InteractorComponent_1 = __webpack_require__(/*! island/Components/InteractorComponent */ "./src/ts/island/Components/InteractorComponent.ts");
var MovingGroundComponent_1 = __webpack_require__(/*! island/Components/MovingGroundComponent */ "./src/ts/island/Components/MovingGroundComponent.ts");
var PlayerInputComponent_1 = __webpack_require__(/*! island/Components/PlayerInputComponent */ "./src/ts/island/Components/PlayerInputComponent.ts");
var IslandResources_1 = __webpack_require__(/*! island/IslandResources */ "./src/ts/island/IslandResources.ts");
var AABB_1 = __webpack_require__(/*! math/AABB */ "./src/ts/math/AABB.ts");
var BoxCollider_1 = __webpack_require__(/*! math/collision/BoxCollider */ "./src/ts/math/collision/BoxCollider.ts");
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var PlayerGameObject = /** @class */ (function (_super) {
    __extends(PlayerGameObject, _super);
    function PlayerGameObject() {
        var _this = _super.call(this) || this;
        _this.jumpHop = false;
        _this.dashHop = false;
        _this.jumping = false;
        _this.facing = 1;
        _this.jumpSpeed = -3 * 60;
        _this.moveSpeed = 1.5 * 60;
        _this.cayoteTime = 0.05;
        _this.groundLeaveTime = 0;
        _this.groundAcceleration = 0.2 * 60 * 60;
        _this.gravity = 0.25 * 60 * 60;
        _this.gravityUpFraction = 0.5;
        _this.gravityWallFraction = 0.4;
        _this.maxFallSpeed = 5 * 60;
        _this.grounded = false;
        _this.wallLeft = false;
        _this.wallRight = false;
        _this.groundMovement = null;
        _this.hadWall = false;
        _this.dashing = false;
        _this.dashSpeed = 4.7 * 60;
        _this.dashTime = 24 / (_this.dashSpeed);
        _this.dashTimer = 0;
        _this.dashTimeout = 0;
        _this.dashSavedSpeed = 0;
        _this.dashSavedMaxSpeed = 2 * 60;
        _this.dashSavedAddition = (_this.dashSavedMaxSpeed - _this.moveSpeed) / 3; // In three dashes until max speed 
        _this.dashAnimationTimer = 0;
        _this.wallJumpTimer = 0;
        _this.canDash = false;
        _this.canDoubleJump = false;
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        _this.input = _this.addComponent(new PlayerInputComponent_1.PlayerInputComponent());
        _this.health = _this.addComponent(new HealthComponent_1.HealthComponent());
        _this.interactor = _this.addComponent(new InteractorComponent_1.InteractorComponent());
        _this.health.onDeath.listen(_this.onDeath.bind(_this));
        _this.body.useDynamicCollisions = true;
        _this.body.collider = new BoxCollider_1.BoxCollider(new Vector2_1.Vector2(10, 13), new Vector2_1.Vector2(5, 5));
        return _this;
    }
    Object.defineProperty(PlayerGameObject.prototype, "wallJumping", {
        get: function () { return this.wallJumpTimer > 0; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerGameObject.prototype, "canMove", {
        get: function () { return !this.wallJumping && !this.dashing; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerGameObject.prototype, "useGravity", {
        get: function () { return !this.dashing; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerGameObject.prototype, "hasWall", {
        get: function () { return this.wallLeft || this.wallRight; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerGameObject.prototype, "canJump", {
        get: function () { return this.grounded || (this.groundLeaveTime < this.cayoteTime); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerGameObject.prototype, "xVelocity", {
        get: function () {
            var v = this.body.velocity.x;
            if (this.groundMovement) {
                v -= this.groundMovement.velocity.x;
            }
            return v;
        },
        set: function (v) {
            if (this.groundMovement) {
                v += this.groundMovement.velocity.x;
            }
            this.body.velocity.x = v;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PlayerGameObject.prototype, "yVelocity", {
        get: function () {
            var v = this.body.velocity.y;
            if (this.groundMovement) {
                v -= this.groundMovement.velocity.y;
            }
            return v;
        },
        set: function (v) {
            if (this.groundMovement) {
                v += this.groundMovement.velocity.y;
            }
            this.body.velocity.y = v;
        },
        enumerable: false,
        configurable: true
    });
    PlayerGameObject.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        var sheet = game.resources.loadSpriteSheet(IslandResources_1.default.SheetPlayer);
        var sheetEffects = game.resources.loadSpriteSheet(IslandResources_1.default.SheetEffects);
        this.idleAnimation = sheet.getAnimation(0, 0, 16, 16, 1).center();
        this.walkAnimation = sheet.getAnimation(0, 16, 16, 16, 4).center();
        this.fallAnimation = sheet.getAnimation(0, 32, 16, 16, 2).center();
        this.jumpAnimation = sheet.getAnimation(0, 48, 16, 16, 2).center();
        this.dashAnimation = sheet.getAnimation(0, 64, 16, 16, 2).center();
        this.wallAnimation = sheet.getAnimation(0, 80, 16, 16, 2).center();
        this.effectJump = sheetEffects.getAnimation(0, 0, 16, 16, 3).setOffset(8, 16);
        this.effectWalljump = sheetEffects.getAnimation(0, 16, 16, 16, 3).setOffset(0, 8);
        this.effectLand = sheetEffects.getAnimation(0, 32, 16, 16, 3).setOffset(8, 16);
        this.effectDash = sheetEffects.getAnimation(112, 0, 16, 16, 1).setOffset(8, 8);
        this.effectDash.frameRate = 4;
        this.effectDoubleJump = sheetEffects.getAnimation(0, 48, 16, 16, 4).setOffset(8, 8);
        this.currentAnimation = this.idleAnimation;
    };
    PlayerGameObject.prototype.debugMouseUpdate = function (delta) {
        var mouse = this.game.input.mouse;
        this.transform.position.x = this.scene.camera.screenToWorldX(mouse.x);
        this.transform.position.y = this.scene.camera.screenToWorldY(mouse.y);
        // this.body.velocity.x = this.scene.camera.screenToWorldX(mouse.deltaX) / delta;
        // this.body.velocity.y = this.scene.camera.screenToWorldY(mouse.deltaY) / delta;
        // if(mouse.isButtonPressed(Mouse.ButtonLeft)){
        // }
        this.grounded = this.body.collidedBottom;
        this.wallLeft = this.body.collidedLeft;
        this.wallRight = this.body.collidedRight;
        if (this.input.direction > 0) {
            this.facing = 1;
        }
        if (this.input.direction < 0) {
            this.facing = -1;
        }
        if (this.wallLeft && !this.grounded)
            this.facing = 1;
        if (this.wallRight && !this.grounded)
            this.facing = -1;
        this.updateAnimation(delta);
    };
    PlayerGameObject.prototype.update = function (delta) {
        _super.prototype.update.call(this, delta);
        if (this.input.jumpPressed) {
            this.jumpHop = true;
        }
        if (this.input.dashPressed) {
            this.dashHop = true;
        }
        if (this.input.interactPressed) {
            this.interactor.interact();
        }
        // TODO do this right.
        var sceneWidth = this.scene.tilemap.pixelWidth;
        var sceneHeight = this.scene.tilemap.pixelHeight;
        var bounds = AABB_1.AABB.Create(0, 0, sceneWidth, sceneHeight);
        if (!this.body.boundingBox.overlaps(bounds)) {
            this.health.damage(100);
        }
    };
    PlayerGameObject.prototype.fixedUpdate = function (delta) {
        _super.prototype.fixedUpdate.call(this, delta);
        if (!this.grounded && this.body.collidedBottom && this.groundLeaveTime > 0.8) {
            this.scene.particleSystem.addParticle(this.transform.position.x, this.transform.position.y + 8, this.effectLand);
        }
        this.grounded = this.body.collidedBottom;
        this.wallLeft = this.body.collidedLeft;
        this.wallRight = this.body.collidedRight;
        this.findGround();
        if (this.wallLeft || this.wallRight) {
            if (!this.hadWall && !this.grounded && this.body.velocity.y > 0) {
                // this.yVelocity = 0;
                this.body.velocity.y = 0;
            }
            this.hadWall = true;
        }
        else {
            this.hadWall = false;
        }
        if (this.grounded) {
            this.groundLeaveTime = 0;
        }
        else {
            this.groundLeaveTime += delta;
        }
        // Make sure we stick to the wall
        if (!this.grounded && this.wallRight) {
            this.body.velocity.x = 60;
        }
        if (!this.grounded && this.wallLeft) {
            this.body.velocity.x = -60;
        }
        // This is for moving platforms :)
        if (this.grounded) {
            this.yVelocity = 0;
        }
        if (!this.input.jumpDown) {
            this.jumpHop = false;
        }
        // Jumping
        this.updateJump(delta);
        // Movement
        this.updateMove(delta);
        // Dashing
        this.updateDash(delta);
        // Gravity
        this.updateGravity(delta);
        if (this.body.velocity.y > this.maxFallSpeed) {
            this.body.velocity.y = this.maxFallSpeed;
        }
        // Animation
        this.updateAnimation(delta);
    };
    PlayerGameObject.prototype.findGround = function () {
        var _this = this;
        this.groundMovement = null;
        var getGround = function (list) {
            list.forEach(function (ground) {
                // Yes, I'm very aware this _can_ potentially be more than one component. But I honestly don't care. 
                // This should not happen often and then we just choose the last one in the list :)
                var c = ground.gameObject.findComponent(function (component) { return component instanceof MovingGroundComponent_1.MovingGroundComponent; });
                if (c !== undefined) {
                    _this.groundMovement = c;
                }
            });
        };
        if (this.grounded) {
            getGround(this.scene.physics.boxcast(this.body.boundingBox.clone().shrink(1).translate(0, 2)));
        }
        else {
            if (this.wallLeft) {
                getGround(this.scene.physics.boxcast(this.body.boundingBox.clone().shrink(1).translate(-2, 0)));
            }
            else if (this.wallRight) {
                getGround(this.scene.physics.boxcast(this.body.boundingBox.clone().shrink(1).translate(2, 0)));
            }
        }
    };
    PlayerGameObject.prototype.updateMove = function (delta) {
        // Update facing
        if (this.input.direction > 0) {
            this.facing = 1;
        }
        if (this.input.direction < 0) {
            this.facing = -1;
        }
        if (this.wallLeft && !this.grounded)
            this.facing = 1;
        if (this.wallRight && !this.grounded)
            this.facing = -1;
        if (!this.canMove)
            return;
        if (this.input.direction !== 0) {
            var dir = Math.sign(this.input.direction);
            var maxSpeed = this.moveSpeed * Math.abs(this.input.direction);
            var acceleration = this.groundAcceleration * delta;
            this.accelerate(dir, maxSpeed, acceleration);
        }
        else {
            this.stop(this.groundAcceleration * delta);
        }
    };
    PlayerGameObject.prototype.updateDash = function (delta) {
        if (this.grounded) {
            this.canDash = true;
        }
        if (this.dashing) {
            this.dashTimer -= delta;
            if (this.dashTimer < 0) {
                this.dashing = false;
                this.body.velocity.x = this.dashSavedSpeed;
                this.accelerate(this.facing, this.dashSavedMaxSpeed, this.dashSavedAddition);
                this.scene.particleSystem.addParticle(this.transform.position.x, this.transform.position.y, this.effectDash, this.facing);
            }
        }
        else {
            this.dashTimeout -= delta;
        }
        if (this.dashHop && this.dashTimeout < 0 && this.canDash && !this.grounded) {
            this.dashing = true;
            this.canDash = false;
            this.dashSavedSpeed = this.body.velocity.x;
            this.dashTimer = this.dashTime;
            this.dashTimeout = 0.2;
            this.body.velocity.y = 0;
            this.body.velocity.x = this.facing * this.dashSpeed;
            this.dashAnimationTimer = 0;
        }
        this.dashHop = false;
        this.dashAnimationTimer -= delta;
        if (this.dashing && this.dashAnimationTimer <= 0) {
            this.effectDash.frameRate = 1 / (this.dashTimer / 3 + 0.3);
            this.scene.particleSystem.addParticle(this.transform.position.x, this.transform.position.y, this.effectDash, this.facing);
            this.dashAnimationTimer += 0.03;
        }
    };
    PlayerGameObject.prototype.updateJump = function (delta) {
        this.wallJumpTimer -= delta;
        if (this.grounded)
            this.canDoubleJump = false;
        if (this.canJump) {
            if (this.jumpHop) {
                this.yVelocity = this.jumpSpeed;
                this.jumping = true;
                if (!this.grounded) {
                    console.log("cayote jump!");
                }
                // This is really hacky but whatever
                this.groundLeaveTime = this.cayoteTime;
                this.scene.particleSystem.addParticle(this.transform.position.x, this.transform.position.y + 8, this.effectJump);
            }
            this.jumpHop = false;
        }
        else if (this.canDoubleJump) {
            if (this.jumpHop) {
                this.yVelocity = this.jumpSpeed;
                this.jumping = true;
                this.canDoubleJump = false;
                this.scene.particleSystem.addParticle(this.transform.position.x, this.transform.position.y + 6, this.effectDoubleJump);
            }
            this.jumpHop = false;
        }
        else {
            if (this.wallLeft && this.jumpHop) {
                this.xVelocity = this.moveSpeed;
                this.yVelocity = this.jumpSpeed;
                this.wallJumpTimer = 0.05;
                this.jumping = true;
                this.jumpHop = false;
                // You can dash after your walljump :)
                this.canDash = true;
                this.scene.particleSystem.addParticle(this.transform.position.x - 5, this.transform.position.y, this.effectWalljump, 1);
            }
            if (this.wallRight && this.jumpHop) {
                this.xVelocity = -this.moveSpeed;
                this.yVelocity = this.jumpSpeed;
                this.wallJumpTimer = 0.05;
                this.jumping = true;
                this.jumpHop = false;
                // You can dash after your walljump :)
                this.canDash = true;
                this.scene.particleSystem.addParticle(this.transform.position.x + 5, this.transform.position.y, this.effectWalljump, -1);
            }
        }
        // Jump canceling
        if (this.yVelocity > 0) {
            this.jumping = false;
        }
        if (this.jumping && !this.input.jumpDown) {
            this.yVelocity = this.yVelocity * 0.25;
            this.jumping = false;
        }
    };
    PlayerGameObject.prototype.updateAnimation = function (delta) {
        // Animation stuff
        if (this.xVelocity !== 0) {
            this.currentAnimation = this.walkAnimation;
        }
        else {
            this.currentAnimation = this.idleAnimation;
        }
        if (!this.grounded && this.yVelocity < 0) {
            this.currentAnimation = this.jumpAnimation;
        }
        if (!this.grounded && this.yVelocity >= 0) {
            this.currentAnimation = this.fallAnimation;
        }
        if ((this.wallLeft || this.wallRight) && !this.grounded) {
            this.currentAnimation = this.wallAnimation;
        }
        if (this.dashing) {
            this.currentAnimation = this.dashAnimation;
        }
        this.currentAnimation.update(delta);
    };
    PlayerGameObject.prototype.updateGravity = function (delta) {
        if (!this.useGravity)
            return;
        // TODO figure out if we need this.velocityY, probably right?
        if (this.body.velocity.y < 0) {
            this.body.velocity.y += this.gravity * this.gravityUpFraction * delta;
        }
        else {
            if (this.hasWall) {
                this.body.velocity.y += this.gravity * this.gravityWallFraction * delta;
            }
            else {
                this.body.velocity.y += this.gravity * delta;
            }
        }
    };
    PlayerGameObject.prototype.accelerate = function (dir, maxSpeed, acceleration) {
        var acc = acceleration;
        var vel = this.xVelocity * dir;
        if (vel >= maxSpeed)
            return;
        if (vel + acc > maxSpeed) {
            acc = maxSpeed - vel;
        }
        this.xVelocity += acc * dir;
    };
    PlayerGameObject.prototype.stop = function (acceleration) {
        var dir = Math.sign(this.xVelocity);
        var vel = Math.abs(this.xVelocity);
        var rem = acceleration;
        if (vel - rem < 0)
            rem = vel;
        this.xVelocity -= rem * dir;
    };
    PlayerGameObject.prototype.draw = function (graphics) {
        _super.prototype.draw.call(this, graphics);
        graphics.drawSprite(this.currentAnimation.frame, this.transform.interpolatedPosition.x, this.transform.interpolatedPosition.y, this.facing, 1, 0);
    };
    PlayerGameObject.prototype.onDeath = function () {
        this.scene.removeGameObject(this);
    };
    return PlayerGameObject;
}(GameObject_1.GameObject));
exports.PlayerGameObject = PlayerGameObject;


/***/ }),

/***/ "./src/ts/island/GameObjects/PlayerSpawnGameObject.ts":
/*!************************************************************!*\
  !*** ./src/ts/island/GameObjects/PlayerSpawnGameObject.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlayerSpawnGameObject = void 0;
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var PlayerSpawnGameObject = /** @class */ (function (_super) {
    __extends(PlayerSpawnGameObject, _super);
    function PlayerSpawnGameObject(aabb) {
        var _this = _super.call(this) || this;
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.apply(aabb.x, aabb.y);
        return _this;
    }
    return PlayerSpawnGameObject;
}(GameObject_1.GameObject));
exports.PlayerSpawnGameObject = PlayerSpawnGameObject;


/***/ }),

/***/ "./src/ts/island/GameObjects/ResetableGameObject.ts":
/*!**********************************************************!*\
  !*** ./src/ts/island/GameObjects/ResetableGameObject.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ResetableGameObject = void 0;
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var ResetableGameObject = /** @class */ (function (_super) {
    __extends(ResetableGameObject, _super);
    function ResetableGameObject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ResetableGameObject.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        this._transform = this.findComponent(function (comp) { return comp instanceof Transform_1.Transform; });
        this._body = this.findComponent(function (comp) { return comp instanceof Rigidbody_1.Rigidbody; });
        if (this._transform !== undefined)
            this._startPos = this._transform.position.clone();
        if (this._body !== undefined)
            this._startVelocity = this._body.velocity.clone();
    };
    ResetableGameObject.prototype.reset = function () {
        if (this._transform !== undefined)
            this._transform.position.set(this._startPos);
        if (this._body !== undefined)
            this._body.velocity.set(this._startVelocity);
    };
    return ResetableGameObject;
}(GameObject_1.GameObject));
exports.ResetableGameObject = ResetableGameObject;


/***/ }),

/***/ "./src/ts/island/GameObjects/SpikesGameObject.ts":
/*!*******************************************************!*\
  !*** ./src/ts/island/GameObjects/SpikesGameObject.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpikesGameObject = void 0;
var HealthComponent_1 = __webpack_require__(/*! island/Components/HealthComponent */ "./src/ts/island/Components/HealthComponent.ts");
var BoxCollider_1 = __webpack_require__(/*! math/collision/BoxCollider */ "./src/ts/math/collision/BoxCollider.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var SpikesGameObject = /** @class */ (function (_super) {
    __extends(SpikesGameObject, _super);
    function SpikesGameObject(aabb, shrink) {
        var _this = _super.call(this) || this;
        if (shrink) {
            var skin = aabb.height - 3;
            if (skin > 0) {
                aabb.top += skin;
            }
        }
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.apply(aabb.x, aabb.y);
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        _this.body.kinematic = true;
        _this.body.useDynamicCollisions = true;
        _this.body.collider = BoxCollider_1.BoxCollider.fromAABB(aabb);
        _this.body.onCollision.listen(_this.onCollision.bind(_this));
        return _this;
    }
    SpikesGameObject.prototype.onCollision = function (other) {
        var comp = other.gameObject.findComponent(function (component) { return component instanceof HealthComponent_1.HealthComponent; });
        if (comp === undefined)
            return;
        console.log("Damaging something!");
        comp.damage(100);
    };
    return SpikesGameObject;
}(GameObject_1.GameObject));
exports.SpikesGameObject = SpikesGameObject;


/***/ }),

/***/ "./src/ts/island/IslandResources.ts":
/*!******************************************!*\
  !*** ./src/ts/island/IslandResources.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    SheetObjects: "assets/img/Objects.png",
    SheetEffects: "assets/img/Effects.png",
    SheetPlayer: "assets/img/Player.png"
};


/***/ }),

/***/ "./src/ts/math/AABB.ts":
/*!*****************************!*\
  !*** ./src/ts/math/AABB.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AABB = void 0;
var AABB = /** @class */ (function () {
    function AABB(left, top, right, bottom) {
        if (left === void 0) { left = 0; }
        if (top === void 0) { top = 0; }
        if (right === void 0) { right = 0; }
        if (bottom === void 0) { bottom = 0; }
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
    }
    Object.defineProperty(AABB.prototype, "x", {
        get: function () { return this.left; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "y", {
        get: function () { return this.top; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "centerX", {
        get: function () { return this.x + this.width / 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "centerY", {
        get: function () { return this.y + this.height / 2; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "width", {
        get: function () { return this.right - this.left; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "height", {
        get: function () { return this.bottom - this.top; },
        enumerable: false,
        configurable: true
    });
    AABB.prototype.overlaps = function (other) {
        return this.overlapsX(other) && this.overlapsY(other);
    };
    AABB.prototype.overlapsX = function (other) {
        if (this.left >= other.right)
            return false;
        if (this.right <= other.left)
            return false;
        return true;
    };
    AABB.prototype.overlapsY = function (other) {
        if (this.top >= other.bottom)
            return false;
        if (this.bottom <= other.top)
            return false;
        return true;
    };
    AABB.prototype.minOverlapX = function (other) {
        var motionLeft = other.right - this.left;
        var motionRight = this.right - other.left;
        if (motionLeft > motionRight)
            return -motionRight;
        return motionLeft;
    };
    AABB.prototype.minOverlapY = function (other) {
        var motionUp = other.bottom - this.top;
        var motionDown = this.bottom - other.top;
        if (motionUp > motionDown)
            return -motionDown;
        return motionUp;
    };
    AABB.prototype.minOverlapXWithBias = function (other, bias) {
        if (bias < 0)
            return other.right - this.left;
        return -(this.right - other.left);
    };
    AABB.prototype.minOverlapYWithBias = function (other, bias) {
        if (bias < 0)
            return other.bottom - this.top;
        return -(this.bottom - other.top);
    };
    AABB.prototype.copy = function (other) {
        this.left = other.left;
        this.right = other.right;
        this.bottom = other.bottom;
        this.top = other.top;
        return this;
    };
    AABB.prototype.set = function (left, top, right, bottom) {
        this.left = left;
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        return this;
    };
    AABB.prototype.shrink = function (amount) {
        this.left += amount;
        this.right -= amount;
        this.top += amount;
        this.bottom -= amount;
        return this;
    };
    AABB.prototype.translate = function (x, y) {
        this.left += x;
        this.right += x;
        this.top += y;
        this.bottom += y;
        return this;
    };
    AABB.prototype.clone = function () {
        return new AABB(this.left, this.top, this.right, this.bottom);
    };
    AABB.Create = function (x, y, w, h) {
        return new AABB(x, y, x + w, y + h);
    };
    return AABB;
}());
exports.AABB = AABB;


/***/ }),

/***/ "./src/ts/math/Path.ts":
/*!*****************************!*\
  !*** ./src/ts/math/Path.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Path = void 0;
var Vector2_1 = __webpack_require__(/*! ./Vector2 */ "./src/ts/math/Vector2.ts");
var Path = /** @class */ (function () {
    function Path() {
        this.points = [];
    }
    Path.prototype.add = function (point) {
        this.points.push(point);
    };
    Path.prototype.getPosition = function (distance, v) {
        if (v === undefined)
            v = new Vector2_1.Vector2();
        if (distance < 0)
            return v.set(this.points[0]);
        for (var i = 0; i < this.points.length - 1; i++) {
            var from = this.points[i];
            var to = this.points[i + 1];
            var d = Vector2_1.Vector2.distance(from, to);
            if (distance < d) {
                return Vector2_1.Vector2.lerpOut(from, to, v, distance / d);
            }
            distance -= d;
        }
        return v.set(this.points[this.points.length - 1]);
    };
    Path.prototype.length = function () {
        var l = 0;
        for (var i = 0; i < this.points.length - 1; i++) {
            var from = this.points[i];
            var to = this.points[i + 1];
            l += Vector2_1.Vector2.distance(from, to);
        }
        return l;
    };
    return Path;
}());
exports.Path = Path;


/***/ }),

/***/ "./src/ts/math/Vector2.ts":
/*!********************************!*\
  !*** ./src/ts/math/Vector2.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Vector2 = void 0;
var Curve_1 = __webpack_require__(/*! util/Curve */ "./src/ts/util/Curve.ts");
var Vector2 = /** @class */ (function () {
    function Vector2(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Vector2.prototype.add = function (other) {
        this.x += other.x;
        this.y += other.y;
        return this;
    };
    Vector2.prototype.sub = function (other) {
        this.x -= other.x;
        this.y -= other.y;
        return this;
    };
    Vector2.prototype.mul = function (other) {
        this.x *= other.x;
        this.y *= other.y;
        return this;
    };
    Vector2.prototype.div = function (other) {
        this.x /= other.x;
        this.y /= other.y;
        return this;
    };
    Vector2.prototype.set = function (other) {
        this.x = other.x;
        this.y = other.y;
        return this;
    };
    Vector2.prototype.setZero = function () {
        this.x = 0;
        this.y = 0;
        return this;
    };
    Vector2.prototype.apply = function (x, y) {
        this.x = x;
        this.y = y;
        return this;
    };
    Vector2.prototype.negate = function () {
        this.x = -this.x;
        this.y = -this.y;
        return this;
    };
    Vector2.prototype.normalize = function () {
        var length = this.length;
        if (length > 0) {
            this.x /= length;
            this.y /= length;
        }
        return this;
    };
    Object.defineProperty(Vector2.prototype, "normalized", {
        get: function () {
            return this.clone().normalize();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "sqrLength", {
        get: function () {
            return Vector2.dot(this, this);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "length", {
        get: function () {
            return Math.sqrt(this.sqrLength);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Vector2.prototype, "angle", {
        get: function () {
            return Math.atan2(this.y, this.x);
        },
        enumerable: false,
        configurable: true
    });
    Vector2.prototype.distanceTo = function (other) {
        return Vector2.distance(this, other);
    };
    Vector2.prototype.directionTo = function (other) {
        return Vector2.direction(this, other);
    };
    Vector2.direction = function (a, b) {
        return b.clone().sub(a);
    };
    Vector2.distance = function (a, b) {
        var distX = a.x - b.x;
        var distY = a.y - b.y;
        return Math.sqrt(distX * distX + distY * distY);
    };
    Vector2.prototype.lerpTo = function (other, f) {
        return Vector2.lerpOut(this, other, this, f);
    };
    Vector2.lerp = function (a, b, f) {
        return this.lerpOut(a, b, new Vector2(), f);
    };
    Vector2.lerpOut = function (a, b, out, f) {
        out.x = Curve_1.Curve.lerp(a.x, b.x, f);
        out.y = Curve_1.Curve.lerp(a.y, b.y, f);
        return out;
    };
    Vector2.dot = function (a, b) {
        return a.x * b.x + a.y * b.y;
    };
    Vector2.angled = function (angle) {
        return new Vector2(Math.cos(angle), Math.sin(angle));
    };
    Vector2.prototype.clone = function () {
        return new Vector2(this.x, this.y);
    };
    return Vector2;
}());
exports.Vector2 = Vector2;


/***/ }),

/***/ "./src/ts/math/collision/BoxCollider.ts":
/*!**********************************************!*\
  !*** ./src/ts/math/collision/BoxCollider.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxCollider = void 0;
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var Collider_1 = __webpack_require__(/*! ./Collider */ "./src/ts/math/collision/Collider.ts");
var BoxCollider = /** @class */ (function (_super) {
    __extends(BoxCollider, _super);
    function BoxCollider(size, offset) {
        if (size === void 0) { size = new Vector2_1.Vector2(); }
        if (offset === void 0) { offset = new Vector2_1.Vector2(); }
        var _this = _super.call(this) || this;
        _this.size = size;
        _this.offset = offset;
        return _this;
    }
    BoxCollider.prototype.getBounds = function (position, out) {
        return out.set(position.x - this.offset.x, position.y - this.offset.y, position.x + this.size.x - this.offset.x, position.y + this.size.y - this.offset.y);
    };
    BoxCollider.fromAABB = function (aabb) {
        return new BoxCollider(new Vector2_1.Vector2(aabb.width, aabb.height));
    };
    return BoxCollider;
}(Collider_1.Collider));
exports.BoxCollider = BoxCollider;


/***/ }),

/***/ "./src/ts/math/collision/Collider.ts":
/*!*******************************************!*\
  !*** ./src/ts/math/collision/Collider.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Collider = void 0;
var Collider = /** @class */ (function () {
    function Collider() {
    }
    return Collider;
}());
exports.Collider = Collider;


/***/ }),

/***/ "./src/ts/math/collision/Collision.ts":
/*!********************************************!*\
  !*** ./src/ts/math/collision/Collision.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.unstuckBoxBox = exports.unstuckBoxTile = exports.unstuck = void 0;
var AABB_1 = __webpack_require__(/*! math/AABB */ "./src/ts/math/AABB.ts");
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var BoxCollider_1 = __webpack_require__(/*! ./BoxCollider */ "./src/ts/math/collision/BoxCollider.ts");
var TileCollider_1 = __webpack_require__(/*! ./TileCollider */ "./src/ts/math/collision/TileCollider.ts");
// TODO prevent memory allocation here.
// Should maybe be a collision class, that has 
// all this memory preallocated.
// It be fine for now tho
function unstuck(self, other, relativePosition, relativeVelocity) {
    if (self instanceof BoxCollider_1.BoxCollider) {
        if (other instanceof BoxCollider_1.BoxCollider) {
            return unstuckBoxBox(self, other, relativePosition, relativeVelocity);
        }
        else if (other instanceof TileCollider_1.TileCollider) {
            return unstuckBoxTile(self, other, relativePosition, relativeVelocity);
        }
        else {
            throw new Error("No collision found for " + self.constructor.name + " and " + other.constructor.name);
        }
    }
    else if (self instanceof TileCollider_1.TileCollider) {
        throw new Error("No collision found for " + self.constructor.name + " and " + other.constructor.name);
        // if(other instanceof BoxCollider){
        //    return unstuckBoxTile(otherPosition, other, position, self, unstuckVector)?.negate();
        // }
        // else{
        // }
    }
    else {
        throw new Error("No collision found for " + self.constructor.name + " and " + other.constructor.name);
    }
}
exports.unstuck = unstuck;
function unstuckBoxTile(self, other, relativePosition, relativeVelocity) {
    var selfBounds = self.getBounds(new Vector2_1.Vector2(), new AABB_1.AABB());
    var otherBounds = other.getBounds(relativePosition, new AABB_1.AABB());
    var xOverlap = 0;
    var yOverlap = 0;
    var xCollided = false;
    var yCollided = false;
    if (other.left && relativeVelocity.x > 0) {
        xOverlap = -(selfBounds.right - otherBounds.left);
        xCollided = true;
    }
    else if (other.right && relativeVelocity.x < 0) {
        xOverlap = -(selfBounds.left - otherBounds.right);
        xCollided = true;
    }
    if (other.top && relativeVelocity.y > 0) {
        yOverlap = -(selfBounds.bottom - otherBounds.top);
        yCollided = true;
    }
    else if (other.bottom && relativeVelocity.y < 0) {
        yOverlap = -(selfBounds.top - otherBounds.bottom);
        yCollided = true;
    }
    // If it _can_ do both axis, do only _one_
    if (xCollided && yCollided) {
        if (Math.abs(xOverlap) > Math.abs(yOverlap)) {
            xOverlap = 0;
        }
        else {
            yOverlap = 0;
        }
    }
    return new Vector2_1.Vector2(xOverlap, yOverlap);
}
exports.unstuckBoxTile = unstuckBoxTile;
function unstuckBoxBox(self, other, relativePosition, relativeVelocity) {
    var selfBounds = self.getBounds(new Vector2_1.Vector2(), new AABB_1.AABB());
    var otherBounds = other.getBounds(relativePosition, new AABB_1.AABB());
    var xOverlap = selfBounds.minOverlapXWithBias(otherBounds, relativeVelocity.x);
    var yOverlap = selfBounds.minOverlapYWithBias(otherBounds, relativeVelocity.y);
    if (Math.abs(xOverlap) < Math.abs(yOverlap)) {
        return new Vector2_1.Vector2(xOverlap, 0);
    }
    else {
        return new Vector2_1.Vector2(0, yOverlap);
    }
}
exports.unstuckBoxBox = unstuckBoxBox;


/***/ }),

/***/ "./src/ts/math/collision/TileCollider.ts":
/*!***********************************************!*\
  !*** ./src/ts/math/collision/TileCollider.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TileCollider = void 0;
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var Collider_1 = __webpack_require__(/*! ./Collider */ "./src/ts/math/collision/Collider.ts");
var TileCollider = /** @class */ (function (_super) {
    __extends(TileCollider, _super);
    function TileCollider(size) {
        if (size === void 0) { size = new Vector2_1.Vector2(); }
        var _this = _super.call(this) || this;
        _this.top = false;
        _this.left = false;
        _this.bottom = false;
        _this.right = false;
        _this.size = size;
        return _this;
    }
    TileCollider.prototype.getBounds = function (position, out) {
        return out.set(position.x, position.y, position.x + this.size.x, position.y + this.size.y);
    };
    return TileCollider;
}(Collider_1.Collider));
exports.TileCollider = TileCollider;


/***/ }),

/***/ "./src/ts/scene/Component.ts":
/*!***********************************!*\
  !*** ./src/ts/scene/Component.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Component = void 0;
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.init = function (game) {
        this.game = game;
    };
    Component.prototype.destroy = function () {
    };
    Component.prototype.update = function (delta) {
    };
    Component.prototype.fixedUpdate = function (delta) {
    };
    Component.prototype.draw = function (graphics) {
    };
    Object.defineProperty(Component.prototype, "scene", {
        get: function () {
            return this.gameObject.scene;
        },
        enumerable: false,
        configurable: true
    });
    return Component;
}());
exports.Component = Component;


/***/ }),

/***/ "./src/ts/scene/GameObject.ts":
/*!************************************!*\
  !*** ./src/ts/scene/GameObject.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.GameObject = void 0;
var GameObject = /** @class */ (function () {
    function GameObject() {
        this.initialized = false;
        this.alwaysUpdate = false;
        this.components = [];
    }
    GameObject.prototype.init = function (game) {
        if (this.initialized)
            return;
        this.initialized = true;
        this.game = game;
        this.components.forEach(function (obj) { return obj.init(game); });
    };
    GameObject.prototype.destroy = function () {
        if (!this.initialized)
            return;
        this.initialized = false;
        this.components.forEach(function (obj) { return obj.destroy(); });
    };
    GameObject.prototype.update = function (delta) {
        this.components.forEach(function (obj) { return obj.update(delta); });
    };
    GameObject.prototype.fixedUpdate = function (delta) {
        this.components.forEach(function (obj) { return obj.fixedUpdate(delta); });
    };
    GameObject.prototype.draw = function (graphics) {
        this.components.forEach(function (obj) { return obj.draw(graphics); });
    };
    GameObject.prototype.addComponent = function (component) {
        this.components.push(component);
        component.gameObject = this;
        if (!this.initialized)
            return component;
        component.init(this.game);
        return component;
    };
    GameObject.prototype.removeComponent = function (component) {
        var idx = this.components.indexOf(component);
        if (idx < 0)
            return;
        this.components.splice(idx, 1);
        if (!this.initialized)
            return;
        component.destroy();
    };
    GameObject.prototype.findComponent = function (predicate) {
        return this.components.find(predicate);
    };
    return GameObject;
}());
exports.GameObject = GameObject;


/***/ }),

/***/ "./src/ts/scene/Scene.ts":
/*!*******************************!*\
  !*** ./src/ts/scene/Scene.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Scene = void 0;
var Physics_1 = __webpack_require__(/*! engine/Physics */ "./src/ts/engine/Physics.ts");
var Camera_1 = __webpack_require__(/*! graphics/Camera */ "./src/ts/graphics/Camera.ts");
var ParticleSystem_1 = __webpack_require__(/*! graphics/ParticleSystem */ "./src/ts/graphics/ParticleSystem.ts");
var Scene = /** @class */ (function () {
    function Scene() {
        // This gets used for transitions :)
        this.paused = false;
        this.initialized = false;
        this.camera = new Camera_1.Camera();
        this.gameObjects = [];
        this.physics = new Physics_1.Physics();
        this.particleSystem = new ParticleSystem_1.ParticleSystem();
    }
    Scene.prototype.init = function (game) {
        if (this.initialized)
            return;
        this.initialized = true;
        this.game = game;
        this.gameObjects.forEach(function (obj) { return obj.init(game); });
    };
    Scene.prototype.destroy = function () {
        if (!this.initialized)
            return;
        this.initialized = false;
        this.gameObjects.forEach(function (obj) { return obj.destroy(); });
    };
    Scene.prototype.update = function (delta) {
        var _this = this;
        var _a;
        if (!this.paused)
            (_a = this.tilemap) === null || _a === void 0 ? void 0 : _a.update(delta, this.camera.getBounds());
        this.gameObjects.forEach(function (obj) { if (!_this.paused || obj.alwaysUpdate)
            obj.update(delta); });
        if (!this.paused)
            this.particleSystem.update(delta);
        if (!this.paused)
            this.physics.update(delta);
    };
    Scene.prototype.fixedUpdate = function (delta) {
        var _this = this;
        this.gameObjects.forEach(function (obj) { if (!_this.paused || obj.alwaysUpdate)
            obj.fixedUpdate(delta); });
        if (!this.paused)
            this.physics.fixedUpdate(delta);
    };
    Scene.prototype.draw = function (graphics) {
        var _a;
        graphics.setCamera(this.camera);
        (_a = this.tilemap) === null || _a === void 0 ? void 0 : _a.draw(graphics, this.camera.getBounds());
        this.particleSystem.draw(graphics);
        this.gameObjects.forEach(function (obj) { return obj.draw(graphics); });
        this.physics.drawDebug(graphics);
    };
    Scene.prototype.updateSize = function () {
        var asp = this.game.canvas.width / this.game.canvas.height;
        this.camera.width = this.camera.height * asp;
    };
    Scene.prototype.addGameObject = function (obj) {
        this.gameObjects.push(obj);
        obj.scene = this;
        if (!this.initialized)
            return;
        obj.init(this.game);
    };
    Scene.prototype.removeGameObject = function (obj) {
        var idx = this.gameObjects.indexOf(obj);
        if (idx < 0)
            return;
        this.gameObjects.splice(idx, 1);
        if (!this.initialized)
            return;
        obj.destroy();
    };
    Scene.prototype.findObject = function (predicate) {
        return this.gameObjects.find(predicate);
    };
    return Scene;
}());
exports.Scene = Scene;


/***/ }),

/***/ "./src/ts/scene/components/Rigidbody.ts":
/*!**********************************************!*\
  !*** ./src/ts/scene/components/Rigidbody.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rigidbody = void 0;
var AABB_1 = __webpack_require__(/*! math/AABB */ "./src/ts/math/AABB.ts");
var BoxCollider_1 = __webpack_require__(/*! math/collision/BoxCollider */ "./src/ts/math/collision/BoxCollider.ts");
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var Component_1 = __webpack_require__(/*! scene/Component */ "./src/ts/scene/Component.ts");
var Signal_1 = __webpack_require__(/*! signals/Signal */ "./src/ts/signals/Signal.ts");
var Transform_1 = __webpack_require__(/*! ./Transform */ "./src/ts/scene/components/Transform.ts");
var Rigidbody = /** @class */ (function (_super) {
    __extends(Rigidbody, _super);
    function Rigidbody() {
        var _this = _super.call(this) || this;
        _this.velocity = new Vector2_1.Vector2();
        _this.mass = 1;
        _this.bouncyness = 0;
        _this.previousPosition = new Vector2_1.Vector2();
        _this.unstuckDistance = new Vector2_1.Vector2();
        _this.collidedLeft = false;
        _this.collidedRight = false;
        _this.collidedTop = false;
        _this.collidedBottom = false;
        _this.kinematic = false;
        _this.solid = false;
        _this.useDynamicCollisions = false;
        _this.onCollision = new Signal_1.Signal();
        _this.collider = new BoxCollider_1.BoxCollider();
        _this.aabb = new AABB_1.AABB(0, 0, 0, 0);
        return _this;
    }
    Rigidbody.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        this.scene.physics.addBody(this);
        this.transform = this.gameObject.findComponent(function (c) { return c instanceof Transform_1.Transform; });
    };
    Rigidbody.prototype.destroy = function () {
        this.scene.physics.removeBody(this);
    };
    Rigidbody.prototype.collides = function (other) {
        return other.boundingBox.overlaps(this.boundingBox);
    };
    Object.defineProperty(Rigidbody.prototype, "boundingBox", {
        get: function () {
            return this.collider.getBounds(this.transform.position, this.aabb);
        },
        enumerable: false,
        configurable: true
    });
    return Rigidbody;
}(Component_1.Component));
exports.Rigidbody = Rigidbody;


/***/ }),

/***/ "./src/ts/scene/components/Transform.ts":
/*!**********************************************!*\
  !*** ./src/ts/scene/components/Transform.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transform = void 0;
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var Component_1 = __webpack_require__(/*! scene/Component */ "./src/ts/scene/Component.ts");
var Transform = /** @class */ (function (_super) {
    __extends(Transform, _super);
    function Transform() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.position = new Vector2_1.Vector2();
        // Interpolated position
        _this.interpolatedPosition = new Vector2_1.Vector2();
        return _this;
    }
    return Transform;
}(Component_1.Component));
exports.Transform = Transform;


/***/ }),

/***/ "./src/ts/signals/Signal.ts":
/*!**********************************!*\
  !*** ./src/ts/signals/Signal.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Signal = void 0;
var Signal = /** @class */ (function () {
    function Signal() {
        this.functions = [];
    }
    Signal.prototype.listen = function (func) {
        this.functions.push(func);
        return func;
    };
    Signal.prototype.remove = function (func) {
        var index = this.functions.indexOf(func);
        if (index < 0)
            return;
        this.functions.splice(index);
    };
    Signal.prototype.emit = function (event) {
        this.functions.forEach(function (func) { return func(event); });
    };
    return Signal;
}());
exports.Signal = Signal;


/***/ }),

/***/ "./src/ts/tilemap/TileMap.ts":
/*!***********************************!*\
  !*** ./src/ts/tilemap/TileMap.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TileMap = exports.TilemapCollisionLayer = exports.TilemapImageLayer = exports.TilemapTileLayer = exports.TilemapLayer = void 0;
var Animation_1 = __webpack_require__(/*! graphics/Animation */ "./src/ts/graphics/Animation.ts");
var TileCollider_1 = __webpack_require__(/*! math/collision/TileCollider */ "./src/ts/math/collision/TileCollider.ts");
var Color_1 = __webpack_require__(/*! util/Color */ "./src/ts/util/Color.ts");
var TiledMap_1 = __webpack_require__(/*! ./TiledMap */ "./src/ts/tilemap/TiledMap.ts");
var TilemapLayer = /** @class */ (function () {
    function TilemapLayer(tilemap) {
        this.tilemap = tilemap;
    }
    TilemapLayer.prototype.update = function (delta, bounds) {
    };
    TilemapLayer.prototype.draw = function (graphics, bounds) {
    };
    return TilemapLayer;
}());
exports.TilemapLayer = TilemapLayer;
var TilemapTileLayer = /** @class */ (function (_super) {
    __extends(TilemapTileLayer, _super);
    function TilemapTileLayer(tilemap, width, height) {
        var _this = _super.call(this, tilemap) || this;
        _this.width = width;
        _this.height = height;
        _this.tiles = [];
        // length stuff... :')
        for (var i = 0; i < width * height; i++)
            _this.tiles.push(undefined);
        return _this;
    }
    TilemapTileLayer.prototype.getTile = function (x, y) {
        return this.tiles[x + y * this.width];
    };
    TilemapTileLayer.prototype.setTile = function (x, y, animation) {
        this.tiles[x + y * this.width] = animation;
    };
    TilemapTileLayer.prototype.setTileFromIndex = function (index, animation) {
        this.tiles[index] = animation;
    };
    TilemapTileLayer.prototype.update = function (delta, bounds) {
        var tileWidth = this.tilemap.tileWidth;
        var tileHeight = this.tilemap.tileHeight;
        var startX = Math.floor(Math.max(0, bounds.left / tileWidth));
        var endX = Math.floor(Math.min(this.width, bounds.right / tileWidth + 1));
        var startY = Math.floor(Math.max(0, bounds.top / tileHeight));
        var endY = Math.floor(Math.min(this.height, bounds.bottom / tileHeight + 1));
        for (var x = startX; x < endX; x++) {
            for (var y = startY; y < endY; y++) {
                var tile = this.getTile(x, y);
                if (tile === undefined)
                    continue;
                tile.update(delta);
            }
        }
    };
    TilemapTileLayer.prototype.draw = function (graphics, bounds) {
        var tileWidth = this.tilemap.tileWidth;
        var tileHeight = this.tilemap.tileHeight;
        var startX = Math.floor(Math.max(0, bounds.left / tileWidth));
        var endX = Math.floor(Math.min(this.width, bounds.right / tileWidth + 1));
        var startY = Math.floor(Math.max(0, bounds.top / tileHeight));
        var endY = Math.floor(Math.min(this.height, bounds.bottom / tileHeight + 1));
        for (var x = startX; x < endX; x++) {
            for (var y = startY; y < endY; y++) {
                var tile = this.getTile(x, y);
                if (tile === undefined)
                    continue;
                graphics.drawSpriteSimple(tile.frame, x * tileWidth, y * tileHeight);
            }
        }
    };
    return TilemapTileLayer;
}(TilemapLayer));
exports.TilemapTileLayer = TilemapTileLayer;
var TilemapImageLayer = /** @class */ (function (_super) {
    __extends(TilemapImageLayer, _super);
    function TilemapImageLayer(tilemap, image) {
        var _this = _super.call(this, tilemap) || this;
        _this.image = image;
        return _this;
    }
    TilemapImageLayer.prototype.draw = function (graphics, bounds) {
        if (this.image === undefined)
            return;
        graphics.drawSpriteSimple(this.image, bounds.centerX - this.image.width / 2, bounds.centerY - this.image.height / 2);
    };
    return TilemapImageLayer;
}(TilemapLayer));
exports.TilemapImageLayer = TilemapImageLayer;
var TilemapCollisionLayer = /** @class */ (function (_super) {
    __extends(TilemapCollisionLayer, _super);
    function TilemapCollisionLayer(tilemap, width, height) {
        var _this = _super.call(this, tilemap) || this;
        _this.width = width;
        _this.height = height;
        _this.tilemap = tilemap;
        _this.tiles = [];
        // length stuff... :')
        for (var i = 0; i < width * height; i++)
            _this.tiles.push(false);
        return _this;
    }
    TilemapCollisionLayer.prototype.isPixelSolid = function (x, y) {
        return this.isTileSolid(Math.floor(x / this.tilemap.tileWidth), Math.floor(y / this.tilemap.tileHeight));
    };
    TilemapCollisionLayer.prototype.isTileSolid = function (x, y) {
        return this.getTile(x, y);
    };
    TilemapCollisionLayer.prototype.getTileCollider = function (x, y, tileCollider) {
        tileCollider.size.x = this.tilemap.tileWidth;
        tileCollider.size.y = this.tilemap.tileHeight;
        tileCollider.top = !this.isTileSolid(x, y - 1);
        tileCollider.bottom = !this.isTileSolid(x, y + 1);
        tileCollider.left = !this.isTileSolid(x - 1, y);
        tileCollider.right = !this.isTileSolid(x + 1, y);
        return tileCollider;
    };
    TilemapCollisionLayer.prototype.getTile = function (x, y) {
        if (x < 0)
            return false;
        if (x >= this.width)
            return false;
        if (y < 0)
            return false;
        if (y >= this.height)
            return false;
        return this.tiles[x + y * this.width];
    };
    TilemapCollisionLayer.prototype.setTile = function (x, y, solid) {
        this.tiles[x + y * this.width] = solid;
    };
    TilemapCollisionLayer.prototype.setTileFromIndex = function (index, solid) {
        this.tiles[index] = solid;
    };
    TilemapCollisionLayer.prototype.drawDebug = function (graphics, tileWidth, tileHeight, bounds) {
        var startX = Math.floor(Math.max(0, bounds.left / tileWidth));
        var endX = Math.floor(Math.min(this.width, bounds.right / tileWidth + 1));
        var startY = Math.floor(Math.max(0, bounds.top / tileHeight));
        var endY = Math.floor(Math.min(this.height, bounds.bottom / tileHeight + 1));
        graphics.setColor(255, 90, 20, 0.8);
        var collider = new TileCollider_1.TileCollider();
        var thickness = 2;
        for (var x = startX; x < endX; x++) {
            for (var y = startY; y < endY; y++) {
                if (!this.isTileSolid(x, y))
                    continue;
                collider = this.getTileCollider(x, y, collider);
                if (collider.top) {
                    graphics.drawRectangle(x * tileWidth, y * tileHeight, tileWidth, thickness, true);
                }
                if (collider.bottom) {
                    graphics.drawRectangle(x * tileWidth, y * tileHeight + tileHeight - thickness, tileWidth, thickness, true);
                }
                if (collider.left) {
                    graphics.drawRectangle(x * tileWidth, y * tileHeight, thickness, tileHeight, true);
                }
                if (collider.right) {
                    graphics.drawRectangle(x * tileWidth + tileWidth - thickness, y * tileHeight, thickness, tileHeight, true);
                }
            }
        }
    };
    return TilemapCollisionLayer;
}(TilemapLayer));
exports.TilemapCollisionLayer = TilemapCollisionLayer;
var TileMap = /** @class */ (function () {
    function TileMap(width, height, tileWidth, tileHeight) {
        this.backgroundColor = new Color_1.Color(1, 1, 1, 1);
        this.width = width;
        this.height = height;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.layers = [];
        this.colliders = [];
    }
    TileMap.prototype.draw = function (graphics, bounds) {
        graphics.setColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a);
        graphics.drawRectangle(0, 0, this.width * this.tileWidth, this.height * this.tileHeight, true);
        graphics.setColor(1, 1, 1, 1);
        this.layers.forEach(function (layer) { return layer.draw(graphics, bounds); });
        // this.colliders.forEach(layer => layer.drawDebug(graphics, this.tileWidth, this.tileHeight, bounds));
    };
    // TODO maybe more like batch update every x frames or devide up the work somehow over muptiple frames
    TileMap.prototype.update = function (delta, bounds) {
        this.layers.forEach(function (layer) { return layer.update(delta, bounds); });
    };
    TileMap.fromTiledMap = function (map, resourceManager, loader) {
        var RootFolder = "assets/levels/";
        var tilemap = new TileMap(map.width, map.height, map.tilewidth, map.tileheight);
        tilemap.backgroundColor = Color_1.Color.fromHex(map.backgroundcolor);
        // TILESETS
        var tilesets = [];
        var tiles = {};
        map.tilesets.forEach(function (set) {
            var _a;
            var sheet = resourceManager.loadSpriteSheet(RootFolder + set.image);
            tilesets.push({
                set: set,
                sheet: sheet
            });
            // Load all default animations
            (_a = set.tiles) === null || _a === void 0 ? void 0 : _a.forEach(function (tile) {
                var index = tile.id + set.firstgid;
                var animation = new Animation_1.Animation();
                tile.animation.forEach(function (frame) {
                    animation.addFrame(TiledMap_1.getSpriteFromTileset(set, frame.tileid, sheet));
                });
                animation.frameRate = 4;
                tiles[index] = animation;
            });
        });
        map.layers.forEach(function (layer) {
            // TILE LAYERS
            if (layer.type === TiledMap_1.TiledTileLayerType && layer.name !== TiledMap_1.TiledColliderLayerName) {
                var tileLayer = layer;
                if (!layer.visible) {
                    return;
                }
                var tilemapLayer = new TilemapTileLayer(tilemap, tileLayer.width, tileLayer.height);
                for (var i = 0; i < tileLayer.data.length; i++) {
                    var tileIndex = tileLayer.data[i];
                    var tile = tiles[tileIndex];
                    // Find tile
                    if (tile === undefined && tileIndex !== 0) {
                        for (var j = 0; j < tilesets.length; j++) {
                            var tileset = tilesets[j];
                            if (tileIndex >= tileset.set.firstgid && tileIndex < tileset.set.firstgid + tileset.set.tilecount) {
                                var sprite = TiledMap_1.getSpriteFromTileset(tileset.set, tileIndex - tileset.set.firstgid, tileset.sheet);
                                tile = new Animation_1.Animation();
                                tile.addFrame(sprite);
                            }
                        }
                        tiles[tileIndex] = tile;
                    }
                    if (tile !== undefined) {
                        tilemapLayer.setTileFromIndex(i, tile.clone());
                    }
                }
                tilemap.layers.push(tilemapLayer);
            }
            // Collision Layers
            else if (layer.type === TiledMap_1.TiledTileLayerType && layer.name === TiledMap_1.TiledColliderLayerName) {
                var tileLayer = layer;
                var colliderLayer = new TilemapCollisionLayer(tilemap, tileLayer.width, tileLayer.height);
                for (var i = 0; i < tileLayer.data.length; i++) {
                    var tileIndex = tileLayer.data[i];
                    colliderLayer.setTileFromIndex(i, tileIndex !== 0);
                }
                tilemap.colliders.push(colliderLayer);
            }
            else if (layer.type === TiledMap_1.TiledImageLayerType) {
                var tileLayer = layer;
                var imageLayer = new TilemapImageLayer(tilemap);
                imageLayer.image = resourceManager.loadSpriteSheet(RootFolder + tileLayer.image).getSprite(0, 0, 640, 360);
                tilemap.layers.push(imageLayer);
            }
            // Object layers
            else if (layer.type === TiledMap_1.TiledObjectLayerType) {
                var objLayer = layer;
                objLayer.objects.forEach(loader);
            }
            // Uh oh
            else {
                console.error("Unknown layer type " + layer.type);
            }
        });
        return tilemap;
    };
    TileMap.fromTiledMapDownload = function (file, resourceManager, loader) {
        return __awaiter(this, void 0, void 0, function () {
            var result, d;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, fetch(file)];
                    case 1:
                        result = _a.sent();
                        return [4 /*yield*/, result.json()];
                    case 2:
                        d = _a.sent();
                        return [2 /*return*/, this.fromTiledMap(d, resourceManager, loader)];
                }
            });
        });
    };
    Object.defineProperty(TileMap.prototype, "pixelWidth", {
        get: function () {
            return this.width * this.tileWidth;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TileMap.prototype, "pixelHeight", {
        get: function () {
            return this.height * this.tileHeight;
        },
        enumerable: false,
        configurable: true
    });
    return TileMap;
}());
exports.TileMap = TileMap;


/***/ }),

/***/ "./src/ts/tilemap/TiledMap.ts":
/*!************************************!*\
  !*** ./src/ts/tilemap/TiledMap.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.getSpriteFromTileset = exports.TiledColliderLayerName = exports.TiledTileLayerType = exports.TiledImageLayerType = exports.TiledObjectLayerType = void 0;
exports.TiledObjectLayerType = "objectgroup";
exports.TiledImageLayerType = "imagelayer";
exports.TiledTileLayerType = "tilelayer";
exports.TiledColliderLayerName = "Colliders";
function getSpriteFromTileset(tileset, index, sheet) {
    var x = index % tileset.columns;
    var y = Math.floor(index / tileset.columns);
    return sheet.getSprite(x * tileset.tilewidth, y * tileset.tileheight, tileset.tilewidth, tileset.tileheight);
}
exports.getSpriteFromTileset = getSpriteFromTileset;


/***/ }),

/***/ "./src/ts/util/Color.ts":
/*!******************************!*\
  !*** ./src/ts/util/Color.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = void 0;
var Color = /** @class */ (function () {
    function Color(r, g, b, a) {
        if (r === void 0) { r = 1; }
        if (g === void 0) { g = 1; }
        if (b === void 0) { b = 1; }
        if (a === void 0) { a = 1; }
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
    }
    Color.fromHex = function (hex) {
        var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        return result ? new Color(parseInt(result[1], 16) / 255, parseInt(result[2], 16) / 255, parseInt(result[3], 16) / 255) : null;
    };
    return Color;
}());
exports.Color = Color;


/***/ }),

/***/ "./src/ts/util/Curve.ts":
/*!******************************!*\
  !*** ./src/ts/util/Curve.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Curve = void 0;
var Curve = /** @class */ (function () {
    function Curve() {
    }
    Curve.lerp = function (a, b, f) {
        return a + (b - a) * f;
    };
    Curve.linear = function (a, b, f) {
        return Curve.lerp(a, b, f);
    };
    return Curve;
}());
exports.Curve = Curve;


/***/ }),

/***/ "./src/ts/util/List.ts":
/*!*****************************!*\
  !*** ./src/ts/util/List.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var List = /** @class */ (function () {
    function List() {
    }
    List.prototype.has = function (list, func) {
        if (list === undefined)
            return false;
        for (var i = 0; i < list.length; i++) {
            if (func(list[i]))
                return true;
        }
        return false;
    };
    return List;
}());
exports.default = new List();


/***/ }),

/***/ "./src/ts/util/Time.ts":
/*!*****************************!*\
  !*** ./src/ts/util/Time.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.format = exports.now = void 0;
function now() {
    if (window.performance) {
        return window.performance.now() / 1000;
    }
    return Date.now() / 1000;
}
exports.now = now;
function format(timeInSeconds) {
    var seconds = Math.floor(timeInSeconds);
    var millis = Math.floor((timeInSeconds % 1) * 1000);
    return ("" + seconds).padStart(2, '0') + ":" + ("" + millis).padStart(3, '0');
}
exports.format = format;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2FwcC5zY3NzPzUxYzUiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2VuZ2luZS9EZWJ1Z1NldHRpbmdzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9lbmdpbmUvR2FtZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZW5naW5lL0lucHV0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9lbmdpbmUvUGh5c2ljcy50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3MvQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL0dyYXBoaWNzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy9OaW5lU2lkZVNwcml0ZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3MvUGFydGljbGVTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL1Jlc291cmNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3MvU3ByaXRlLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy93ZWJnbC9HTEdyYXBoaWNzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy93ZWJnbC9HTFJlc291cmNlTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3Mvd2ViZ2wvR0xTaGFkZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL3dlYmdsL0dMVGV4dHVyZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3Mvd2ViZ2wvR0xWZXJ0ZXhCYXRjaC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9Db21wb25lbnRzL0hlYWx0aENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0NvbXBvbmVudHMvSW50ZXJhY3RhYmxlQ29tcG9uZW50LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvQ29tcG9uZW50cy9JbnRlcmFjdG9yQ29tcG9uZW50LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvQ29tcG9uZW50cy9Nb3ZpbmdHcm91bmRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9Db21wb25lbnRzL1BsYXllcklucHV0Q29tcG9uZW50LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvQ2hlc3RHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvQ29sbGlkZXJHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvRmFsbGluZ0Jsb2NrR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL0ZlYXRoZXJHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvSnVtcFBsYXRmb3JtR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL0xldmVsTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL01vdmluZ1BsYXRmb3JtR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1BhdGhNYW5hZ2VyLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJGaW5pc2hHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1BsYXllclNwYXduR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1Jlc2V0YWJsZUdhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9TcGlrZXNHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvSXNsYW5kUmVzb3VyY2VzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9tYXRoL0FBQkIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL21hdGgvUGF0aC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvbWF0aC9WZWN0b3IyLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9tYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlci50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvbWF0aC9jb2xsaXNpb24vQ29sbGlkZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL21hdGgvY29sbGlzaW9uL0NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvbWF0aC9jb2xsaXNpb24vVGlsZUNvbGxpZGVyLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9zY2VuZS9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3NjZW5lL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3NjZW5lL1NjZW5lLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9zY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvc2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3NpZ25hbHMvU2lnbmFsLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy90aWxlbWFwL1RpbGVNYXAudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3RpbGVtYXAvVGlsZWRNYXAudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3V0aWwvQ29sb3IudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3V0aWwvQ3VydmUudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3V0aWwvTGlzdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvdXRpbC9UaW1lLnRzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FB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T0FBTyxDQUFDLE1BQU0sQ0FBQztRQUNsRCxJQUFJLEVBQUUsR0FBRyxNQUFNLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDO1FBRXJELElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMvQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBRW5DLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzNCLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDbkMsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENB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b3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnWmFuYmFyU3F1YXJlJztcXG4gIHNyYzogdXJsKFxcXCIvYXNzZXRzL2ZvbnRzL1phbmJhclNxdWFyZS50dGZcXFwiKTsgfVxcblxcbmh0bWwsIGJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJaYW5iYXJTcXVhcmVcXFwiO1xcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4OyB9XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7IH1cXG5cXG4jY2FudmFzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7IH1cXG5cXG4ucmVzb3VyY2Uge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5nYW1lLW92ZXJsYXkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7IH1cXG4gIC5nYW1lLW92ZXJsYXkgLmJhci1ib3R0b20ge1xcbiAgICBib3R0b206IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTsgfVxcbiAgLmdhbWUtb3ZlcmxheSAuYmFyLXRvcCB7XFxuICAgIHRvcDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgfVxcbiAgLmdhbWUtb3ZlcmxheSAuYmFyLWJvdHRvbSwgLmdhbWUtb3ZlcmxheSAuYmFyLXRvcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm07XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgZm9udC1zaXplOiAyZW07IH1cXG4gIC5nYW1lLW92ZXJsYXkuZ2FtZS1vdmVyIC5iYXItYm90dG9tLCAuZ2FtZS1vdmVybGF5LmdhbWUtb3ZlciAuYmFyLXRvcCB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTsgfVxcbiAgLmdhbWUtb3ZlcmxheTpub3QoLmNvbXBsZXRlZCkgLmNvbXBsZXRlLWJhbm5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5nYW1lLW92ZXJsYXkuY29tcGxldGVkIC5mYWlsLWJhbm5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5nYW1lLW92ZXJsYXkgLmJlc3QtdGltZSB7XFxuICAgIGNvbG9yOiAjOTk5OyB9XFxuICAuZ2FtZS1vdmVybGF5IC5kZWJ1Zy1hbHBoYS1tZXNzYWdlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogIzk5OTtcXG4gICAgcmlnaHQ6IDE2cHg7XFxuICAgIGJvdHRvbTogMTZweDtcXG4gICAgei1pbmRleDogMTAwMDsgfVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuICAubW9kYWwgLmJhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgfVxcbiAgLm1vZGFsIC5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuICAgIC5tb2RhbCAuY29udGVudCAuY2xvc2Uge1xcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICAgIGJhY2tncm91bmQ6ICNlMjdkMWU7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLm1vZGFsLmNsb3NlZCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgICAubW9kYWwuY2xvc2VkIC5iYWNrZ3JvdW5kIHtcXG4gICAgICBvcGFjaXR5OiAwOyB9XFxuICAgIC5tb2RhbC5jbG9zZWQgLmNvbnRlbnQge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gTG9hZCB0aGUgamF2YXNjcmlwdCBtYWluXHJcbmltcG9ydCBcIi4vanMvbWFpblwiO1xyXG5pbXBvcnQgXCIuL3RzL1wiO1xyXG5cclxuLy8gTG9hZCB0aGUgU0FTUyBtYWluXHJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XHJcbiAgIGNvbnNvbGUubG9nKFwiV2VicGFjayB0ZW1wbGF0ZSBsb2FkZWQuXCIpO1xyXG59KTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgY2xhc3MgRGVidWdTZXR0aW5nc3tcclxuICAgZHJhd0NvbGxpZGVyczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBkcmF3VGlsZW1hcDogYm9vbGVhbiA9IGZhbHNlO1xyXG59IiwiaW1wb3J0IHsgQ2FudmFzMkRHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9jYW52YXMvQ2FudmFzMkRHcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBDYW52YXMyRFJlc291cmNlTWFuYWdlciB9IGZyb20gXCJncmFwaGljcy9jYW52YXMvQ2FudmFzMkRSZXNvdXJjZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgUmVzb3VyY2VNYW5hZ2VyIH0gZnJvbSBcImdyYXBoaWNzL1Jlc291cmNlTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHTEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL3dlYmdsL0dMR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgR0xSZXNvdXJjZU1hbmFnZXIgfSBmcm9tIFwiZ3JhcGhpY3Mvd2ViZ2wvR0xSZXNvdXJjZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwic2NlbmUvU2NlbmVcIjtcclxuaW1wb3J0IHsgbm93IH0gZnJvbSBcInV0aWwvVGltZVwiO1xyXG5pbXBvcnQgeyBEZWJ1Z1NldHRpbmdzIH0gZnJvbSBcIi4vRGVidWdTZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL0lucHV0XCI7XHJcbmltcG9ydCB7IFBoeXNpY3MgfSBmcm9tIFwiLi9QaHlzaWNzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZXsgICBcclxuICAgY3VycmVudFRpbWU6IG51bWJlciA9IDA7XHJcbiAgIFxyXG4gICBmaXhlZFVwZGF0ZVRpbWU6IG51bWJlciA9IDEgLyA2MDtcclxuICAgaW50ZXJVcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgcHJpdmF0ZSBydW5uaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHByaXZhdGUgYW5pbWF0aW9uRnJhbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICBzY2VuZT86IFNjZW5lO1xyXG4gICBncmFwaGljczogR3JhcGhpY3M7XHJcbiAgIGlucHV0OiBJbnB1dDtcclxuICAgcmVzb3VyY2VzOiBSZXNvdXJjZU1hbmFnZXI7XHJcbiAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICBkZWJ1Z1NldHRpbmdzOiBEZWJ1Z1NldHRpbmdzO1xyXG5cclxuICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCl7XHJcbiAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0KGNhbnZhcyk7XHJcblxyXG4gICAgICAvLyBUT0RPIHN3YXAgb3V0IHRvIFdlYkdMXHJcbiAgICAgIC8vIHRoaXMuZ3JhcGhpY3MgPSBuZXcgQ2FudmFzMkRHcmFwaGljcyhjYW52YXMpO1xyXG4gICAgICAvLyB0aGlzLnJlc291cmNlcyA9IG5ldyBDYW52YXMyRFJlc291cmNlTWFuYWdlcigpO1xyXG5cclxuICAgICAgbGV0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKSE7XHJcblxyXG4gICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdMR3JhcGhpY3MoZ2wpO1xyXG4gICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBHTFJlc291cmNlTWFuYWdlcihnbCk7XHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB0aGlzLnVwZGF0ZVNpemUoKSk7XHJcbiAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG5cclxuICAgICAgdGhpcy5kZWJ1Z1NldHRpbmdzID0gbmV3IERlYnVnU2V0dGluZ3MoKTtcclxuICAgICAgKHdpbmRvdyBhcyBhbnkpLmRlYnVnU2V0dGluZ3MgPSB0aGlzLmRlYnVnU2V0dGluZ3M7XHJcbiAgIH1cclxuXHJcbiAgIHJ1bigpe1xyXG4gICAgICBpZih0aGlzLnJ1bm5pbmcpIHJldHVybjtcclxuICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmU/LmluaXQodGhpcyk7XHJcblxyXG4gICAgICB0aGlzLl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcclxuICAgfVxyXG5cclxuICAgc3RvcCgpe1xyXG4gICAgICB0aGlzLl9jYW5jZWxBbmltYXRpb25GcmFtZSgpO1xyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKCl7XHJcbiAgICAgIHRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xyXG5cclxuICAgICAgbGV0IG4gPSBub3coKTtcclxuICAgICAgbGV0IGRlbHRhID0gbiAtIHRoaXMuY3VycmVudFRpbWU7XHJcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBuO1xyXG5cclxuICAgICAgaWYoZGVsdGEgPiAwLjEpeyBkZWx0YSA9IDAuMTsgfVxyXG5cclxuICAgICAgdGhpcy5pbnB1dC5wb2xsKCk7XHJcblxyXG4gICAgICB0aGlzLmludGVyVXBkYXRlVGltZSArPSBkZWx0YTtcclxuICAgICAgXHJcbiAgICAgIC8vIFRPRE8gZml4IHRoZSBpc3N1ZSB3aGVyZSB3ZSBhcmUgbGFnZ2luZyBiZWhpbmQhXHJcbiAgICAgIC8vIGlmIHRoZXJlIGFyZSB0b28gbWFueSB1cGRhdGVzIGF0IG9uY2UgYW5kIHdlIGNhbid0IGtlZXAgdXAsIHdlIG5lZWQgdG8gZHVtcCBzb21lIGZyYW1lc1xyXG4gICAgICAvLyBhbmQgc2VuZCBhIHdhcm5pbmcuXHJcbiAgICAgIHdoaWxlKHRoaXMuaW50ZXJVcGRhdGVUaW1lID4gdGhpcy5maXhlZFVwZGF0ZVRpbWUpe1xyXG4gICAgICAgICB0aGlzLmludGVyVXBkYXRlVGltZSAtPSB0aGlzLmZpeGVkVXBkYXRlVGltZTtcclxuICAgICAgICAgdGhpcy5zY2VuZT8uZml4ZWRVcGRhdGUodGhpcy5maXhlZFVwZGF0ZVRpbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2NlbmU/LnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICB0aGlzLmdyYXBoaWNzLmJlZ2luKCk7XHJcbiAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmU/LmRyYXcodGhpcy5ncmFwaGljcyk7XHJcblxyXG4gICAgICB0aGlzLmdyYXBoaWNzLmVuZCgpO1xyXG5cclxuICAgICAgdGhpcy5pbnB1dC5mbHVzaCgpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGVTaXplKCl7XHJcbiAgICAgIHRoaXMuZ3JhcGhpY3MudXBkYXRlU2l6ZSgpO1xyXG4gICAgICB0aGlzLnNjZW5lPy51cGRhdGVTaXplKCk7XHJcbiAgIH1cclxuXHJcbiAgIF9jYW5jZWxBbmltYXRpb25GcmFtZSgpe1xyXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcclxuICAgfVxyXG5cclxuICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSgpe1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICB9XHJcbn0iLCIvLyBDb250cm9sbGVyIG1hcCFcclxuZXhwb3J0IGNsYXNzIEdhbWVwYWRJbnB1dHtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBeGlzTGVmdFggPSAwO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEF4aXNMZWZ0WSA9IDE7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQXhpc1JpZ2h0WCA9IDI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQXhpc1JpZ2h0WSA9IDM7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkEgPSAwO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkIgPSAxO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblggPSAyO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblkgPSAzO1xyXG4gICBcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25EcGFkVXAgPSAxMjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25EcGFkRG93biA9IDEzO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkRwYWRMZWZ0ID0gMTQ7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uRHBhZFJpZ2h0ID0gMTU7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkxlZnRCdW1wZXIgPSA0O1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblJpZ2h0QnVtcGVyID0gNTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25MZWZ0VHJpZ2dlciA9IDY7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uUmlnaHRUcmlnZ2VyID0gNztcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uTWVudSA9IDg7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uU3RhcnQgPSA5O1xyXG5cclxuICAgcHJldmlvdXNCdXR0b25TdGF0ZTogYm9vbGVhbltdID0gW107XHJcbiAgIGJ1dHRvblN0YXRlOiBib29sZWFuW10gPSBbXTtcclxuICAgXHJcbiAgIGF4aXNTdGF0ZTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgIGluZGV4OiBudW1iZXI7XHJcblxyXG4gICBkZWFkWm9uZTogbnVtYmVyID0gMC4yO1xyXG4gICBmdWxsWm9uZTogbnVtYmVyID0gMC40O1xyXG5cclxuICAgY29uc3RydWN0b3IoaW5kZXg6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAgIGxldCBnYW1lcGFkID0gdGhpcy5nZXROYXZpZ2F0b3JHYW1lcGFkKCkhO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWVwYWQuYnV0dG9ucy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMucHJldmlvdXNCdXR0b25TdGF0ZS5wdXNoKGZhbHNlKTtcclxuICAgICAgICAgdGhpcy5idXR0b25TdGF0ZS5wdXNoKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZXBhZC5heGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgdGhpcy5heGlzU3RhdGUucHVzaCgwKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwb2xsKCl7XHJcbiAgICAgIC8vIFN3YXAgdGhlIG9sZCBhbmQgdGhlIG5ldyBvbmUsIGNvcHkgdG8gdGhlIG5ld1xyXG4gICAgICBsZXQgdGVtcCA9IHRoaXMucHJldmlvdXNCdXR0b25TdGF0ZTtcclxuICAgICAgdGhpcy5wcmV2aW91c0J1dHRvblN0YXRlID0gdGhpcy5idXR0b25TdGF0ZTtcclxuICAgICAgdGhpcy5idXR0b25TdGF0ZSA9IHRlbXA7XHJcblxyXG4gICAgICBsZXQgZ2FtZXBhZCA9IHRoaXMuZ2V0TmF2aWdhdG9yR2FtZXBhZCgpITtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lcGFkLmJ1dHRvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICB0aGlzLmJ1dHRvblN0YXRlW2ldID0gZ2FtZXBhZC5idXR0b25zW2ldLnByZXNzZWQ7XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWVwYWQuYXhlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMuYXhpc1N0YXRlW2ldID0gZ2FtZXBhZC5heGVzW2ldO1xyXG5cclxuICAgICAgICAgaWYoTWF0aC5hYnModGhpcy5heGlzU3RhdGVbaV0pIDwgdGhpcy5kZWFkWm9uZSkgdGhpcy5heGlzU3RhdGVbaV0gPSAwOyBcclxuICAgICAgICAgaWYoTWF0aC5hYnModGhpcy5heGlzU3RhdGVbaV0pID4gMSAtIHRoaXMuZnVsbFpvbmUpIHRoaXMuYXhpc1N0YXRlW2ldID0gTWF0aC5zaWduKHRoaXMuYXhpc1N0YXRlW2ldKTsgXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgaXNCdXR0b25QcmVzc2VkKGJ1dHRvbkluZGV4OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25TdGF0ZVtidXR0b25JbmRleF0gJiYgIXRoaXMucHJldmlvdXNCdXR0b25TdGF0ZVtidXR0b25JbmRleF07XHJcbiAgIH1cclxuICAgaXNCdXR0b25Eb3duKGJ1dHRvbkluZGV4OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25TdGF0ZVtidXR0b25JbmRleF07XHJcbiAgIH1cclxuICAgaXNCdXR0b25SZWxlYXNlZChidXR0b25JbmRleDogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuICF0aGlzLmJ1dHRvblN0YXRlW2J1dHRvbkluZGV4XSAmJiB0aGlzLnByZXZpb3VzQnV0dG9uU3RhdGVbYnV0dG9uSW5kZXhdO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbGVmdEF4aXNYKCkgeyByZXR1cm4gdGhpcy5heGlzU3RhdGVbR2FtZXBhZElucHV0LkF4aXNMZWZ0WF07fVxyXG4gICBnZXQgbGVmdEF4aXNZKCkgeyByZXR1cm4gdGhpcy5heGlzU3RhdGVbR2FtZXBhZElucHV0LkF4aXNMZWZ0WV07fVxyXG4gICBnZXQgcmlnaHRBeGlzWCgpIHsgcmV0dXJuIHRoaXMuYXhpc1N0YXRlW0dhbWVwYWRJbnB1dC5BeGlzUmlnaHRYXTt9XHJcbiAgIGdldCByaWdodEF4aXNZKCkgeyByZXR1cm4gdGhpcy5heGlzU3RhdGVbR2FtZXBhZElucHV0LkF4aXNSaWdodFldO31cclxuXHJcbiAgIGdldE5hdmlnYXRvckdhbWVwYWQoKXtcclxuICAgICAgY29uc3QgcGFkcyA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBhZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBsZXQgcGFkID0gcGFkc1tpXTtcclxuICAgICAgICAgaWYocGFkID09PSBudWxsKSBjb250aW51ZTtcclxuICAgICAgICAgaWYocGFkLmluZGV4ID09PSB0aGlzLmluZGV4KSByZXR1cm4gcGFkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICB9XHJcbn1cclxuXHJcbnR5cGUgS2V5ID0gc3RyaW5nO1xyXG50eXBlIE1vdXNlQnV0dG9uID0gbnVtYmVyO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJke1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUVudGVyIDogS2V5ID0gXCJFbnRlclwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleVRhYiA6IEtleSA9IFwiVGFiXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5U3BhY2UgOiBLZXkgPSBcIiBcIjtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QyA6IEtleSA9IFwiY1wiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleVggOiBLZXkgPSBcInhcIjtcclxuICAgXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QSA6IEtleSA9IFwiYVwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUQgOiBLZXkgPSBcImRcIjtcclxuICAgXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5Q29tbWEgOiBLZXkgPSBcIixcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlQZXJpb2QgOiBLZXkgPSBcIi5cIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlTbGFzaCA6IEtleSA9IFwiL1wiO1xyXG4gICBcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlBcnJvd1VwIDogS2V5ID0gXCJBcnJvd1VwXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QXJyb3dEb3duIDogS2V5ID0gXCJBcnJvd0Rvd25cIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlBcnJvd0xlZnQgOiBLZXkgPSBcIkFycm93TGVmdFwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUFycm93UmlnaHQgOiBLZXkgPSBcIkFycm93UmlnaHRcIjtcclxuXHJcbiAgIGRvd25LZXlzOiBTZXQ8S2V5PjtcclxuICAgcHJlc3NlZEtleXM6IFNldDxLZXk+O1xyXG4gICByZWxlYXNlZEtleXM6IFNldDxLZXk+O1xyXG5cclxuICAgcm9vdD86IEhUTUxFbGVtZW50O1xyXG5cclxuICAgY29uc3RydWN0b3Iocm9vdD86IEhUTUxFbGVtZW50KXtcclxuICAgICAgdGhpcy5kb3duS2V5cyA9IG5ldyBTZXQ8S2V5PigpO1xyXG4gICAgICB0aGlzLnByZXNzZWRLZXlzID0gbmV3IFNldDxLZXk+KCk7XHJcbiAgICAgIHRoaXMucmVsZWFzZWRLZXlzID0gbmV3IFNldDxLZXk+KCk7XHJcblxyXG4gICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5ib2R5OyAvLyBGdWNrXHJcbiAgICAgIHRoaXMucm9vdD8uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICBpZihldmVudC5yZXBlYXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgIHRoaXMucHJlc3NlZEtleXMuYWRkKGV2ZW50LmtleSk7XHJcbiAgICAgICAgIHRoaXMuZG93bktleXMuYWRkKGV2ZW50LmtleSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnJvb3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBldmVudCA9PntcclxuICAgICAgICAgaWYoZXZlbnQucmVwZWF0KSByZXR1cm47XHJcblxyXG4gICAgICAgICB0aGlzLnJlbGVhc2VkS2V5cy5hZGQoZXZlbnQua2V5KTtcclxuICAgICAgICAgdGhpcy5kb3duS2V5cy5kZWxldGUoZXZlbnQua2V5KTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIGZsdXNoKCl7XHJcbiAgICAgIHRoaXMucHJlc3NlZEtleXMuY2xlYXIoKTtcclxuICAgICAgdGhpcy5yZWxlYXNlZEtleXMuY2xlYXIoKTtcclxuICAgfVxyXG5cclxuICAgaXNLZXlEb3duKGtleTogS2V5KXtcclxuICAgICAgcmV0dXJuIHRoaXMuZG93bktleXMuaGFzKGtleSk7XHJcbiAgIH1cclxuICAgaXNLZXlQcmVzc2VkKGtleTogS2V5KXtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlc3NlZEtleXMuaGFzKGtleSk7XHJcbiAgIH1cclxuICAgaXNLZXlSZWxlYXNlZChrZXk6IEtleSl7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbGVhc2VkS2V5cy5oYXMoa2V5KTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW91c2V7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uTGVmdCA6IE1vdXNlQnV0dG9uID0gMDtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25NaWRkbGUgOiBNb3VzZUJ1dHRvbiA9IDE7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uUmlnaHQgOiBNb3VzZUJ1dHRvbiA9IDI7XHJcblxyXG4gICBidXR0b25zOiBib29sZWFuW107XHJcbiAgIGJ1dHRvbnNQcmVzc2VkOiBib29sZWFuW107XHJcbiAgIGJ1dHRvbnNSZWxlYXNlZDogYm9vbGVhbltdO1xyXG5cclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcbiAgIHByZXZpb3VzWDogbnVtYmVyO1xyXG4gICBwcmV2aW91c1k6IG51bWJlcjtcclxuXHJcbiAgIHJvb3Q6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgY29uc3RydWN0b3Iocm9vdDogSFRNTEVsZW1lbnQpe1xyXG4gICAgICB0aGlzLmJ1dHRvbnMgPSBuZXcgQXJyYXkoMTApO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNQcmVzc2VkID0gbmV3IEFycmF5KDEwKTtcclxuICAgICAgdGhpcy5idXR0b25zUmVsZWFzZWQgPSBuZXcgQXJyYXkoMTApO1xyXG5cclxuICAgICAgdGhpcy5idXR0b25zLmZpbGwoZmFsc2UpO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNQcmVzc2VkLmZpbGwoZmFsc2UpO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNSZWxlYXNlZC5maWxsKGZhbHNlKTtcclxuXHJcbiAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcblxyXG4gICAgICB0aGlzLnggPSAwO1xyXG4gICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICB0aGlzLnByZXZpb3VzWCA9IDA7XHJcbiAgICAgIHRoaXMucHJldmlvdXNZID0gMDtcclxuXHJcbiAgICAgIGNvbnNvbGUuZGlyKHJvb3QpO1xyXG5cclxuICAgICAgcm9vdD8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgICByb290Py5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICAgIHJvb3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KXtcclxuICAgICAgdGhpcy54ID0gZXZlbnQub2Zmc2V0WCAvIHRoaXMucm9vdC5vZmZzZXRXaWR0aDtcclxuICAgICAgdGhpcy55ID0gZXZlbnQub2Zmc2V0WSAvIHRoaXMucm9vdC5vZmZzZXRXaWR0aDtcclxuICAgfVxyXG4gICBwcml2YXRlIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KXtcclxuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1tldmVudC5idXR0b25dID0gdHJ1ZTtcclxuICAgICAgdGhpcy5idXR0b25zUHJlc3NlZFtldmVudC5idXR0b25dID0gdHJ1ZTtcclxuICAgfVxyXG4gICBwcml2YXRlIG9uTW91c2VVcChldmVudDogTW91c2VFdmVudCl7XHJcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNbZXZlbnQuYnV0dG9uXSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNSZWxlYXNlZFtldmVudC5idXR0b25dID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgaXNCdXR0b25Eb3duKGJ1dHRvbjogTW91c2VCdXR0b24pe1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25zW2J1dHRvbl07XHJcbiAgIH1cclxuICAgaXNCdXR0b25QcmVzc2VkKGJ1dHRvbjogTW91c2VCdXR0b24pe1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25zUHJlc3NlZFtidXR0b25dO1xyXG4gICB9XHJcbiAgIGlzQnV0dG9uUmVsZWFzZWQoYnV0dG9uOiBNb3VzZUJ1dHRvbil7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvbnNSZWxlYXNlZFtidXR0b25dO1xyXG4gICB9XHJcblxyXG4gICBmbHVzaCgpe1xyXG4gICAgICB0aGlzLmJ1dHRvbnNQcmVzc2VkLmZpbGwoZmFsc2UpO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNSZWxlYXNlZC5maWxsKGZhbHNlKTtcclxuXHJcbiAgICAgIHRoaXMucHJldmlvdXNYID0gdGhpcy54O1xyXG4gICAgICB0aGlzLnByZXZpb3VzWSA9IHRoaXMueTtcclxuICAgfVxyXG5cclxuICAgZ2V0IGRlbHRhWCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy54IC0gdGhpcy5wcmV2aW91c1g7XHJcbiAgIH1cclxuICAgZ2V0IGRlbHRhWSgpe1xyXG4gICAgICByZXR1cm4gdGhpcy55IC0gdGhpcy5wcmV2aW91c1k7XHJcbiAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dCB7XHJcbiAgIGdhbWVwYWRzOiBHYW1lcGFkSW5wdXRbXTtcclxuICAga2V5Ym9hcmQ6IEtleWJvYXJkO1xyXG4gICBtb3VzZTogTW91c2U7XHJcblxyXG4gICByb290OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHJvb3Q6IEhUTUxFbGVtZW50KXtcclxuICAgICAgdGhpcy5nYW1lcGFkcyA9IFtdO1xyXG4gICAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKHJvb3QpO1xyXG4gICAgICB0aGlzLm1vdXNlID0gbmV3IE1vdXNlKHJvb3QpO1xyXG4gICAgICB0aGlzLnJvb3QgPSByb290O1xyXG5cclxuICAgICAgLy8gV2VpcmQgY29uc3RydWN0aW9uIGJ1dCB0eXBlc2NyaXB0IGhhdGVzIHByb2dyZXNzIFxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImdhbWVwYWRjb25uZWN0ZWRcIiwgZXYgPT4ge1xyXG4gICAgICAgICBsZXQgZXZlbnQgPSBldiBhcyBHYW1lcGFkRXZlbnQ7XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWVwYWQgY29ubmVjdGVkLlwiKTtcclxuXHJcbiAgICAgICAgIHRoaXMuZ2FtZXBhZHMucHVzaChuZXcgR2FtZXBhZElucHV0KGV2ZW50LmdhbWVwYWQuaW5kZXgpKTtcclxuICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImdhbWVwYWRkaXNjb25uZWN0ZWRcIiwgZXYgPT4ge1xyXG4gICAgICAgICBsZXQgZXZlbnQgPSBldiBhcyBHYW1lcGFkRXZlbnQ7XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWVwYWQgZGlzY29ubmVjdGVkLlwiKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG5cclxuICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZXBhZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVwYWRzW2ldLmluZGV4ID09PSBldmVudC5nYW1lcGFkLmluZGV4KXtcclxuICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYoaW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWVwYWQgZm91bmQuXCIpO1xyXG5cclxuICAgICAgICAgdGhpcy5nYW1lcGFkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIHBvbGwoKXtcclxuICAgICAgdGhpcy5nYW1lcGFkcy5mb3JFYWNoKHBhZCA9PiBwYWQucG9sbCgpKTtcclxuICAgfVxyXG4gICBmbHVzaCgpe1xyXG4gICAgICB0aGlzLmtleWJvYXJkLmZsdXNoKCk7XHJcbiAgICAgIHRoaXMubW91c2UuZmx1c2goKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgdW5zdHVjayB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Db2xsaXNpb25cIjtcclxuaW1wb3J0IHsgVGlsZUNvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL1RpbGVDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVGlsZW1hcENvbGxpc2lvbkxheWVyLCBUaWxlbWFwVGlsZUxheWVyIH0gZnJvbSBcInRpbGVtYXAvVGlsZU1hcFwiO1xyXG5pbXBvcnQgeyBDdXJ2ZSB9IGZyb20gXCJ1dGlsL0N1cnZlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGh5c2ljc3tcclxuICAgYm9kaWVzOiBSaWdpZGJvZHlbXTtcclxuICAgbGF5ZXJzOiBUaWxlbWFwQ29sbGlzaW9uTGF5ZXJbXTtcclxuXHJcbiAgIGludGVycG9sYXRlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMuYm9kaWVzID0gW107XHJcbiAgICAgIHRoaXMubGF5ZXJzID0gW107XHJcbiAgIH1cclxuXHJcbiAgIGFkZEJvZHkoYm9keTogUmlnaWRib2R5KXtcclxuICAgICAgdGhpcy5ib2RpZXMucHVzaChib2R5KTtcclxuICAgfVxyXG4gICByZW1vdmVCb2R5KGJvZHk6IFJpZ2lkYm9keSl7XHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuYm9kaWVzLmluZGV4T2YoYm9keSk7XHJcblxyXG4gICAgICBpZihpbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuYm9kaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgIH1cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBpZih0aGlzLmludGVycG9sYXRlKXtcclxuICAgICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETyBtb3Rpb24gcHJlZGljdGlvbiBhbmQgc3R1ZmZcclxuICAgICAgICAgICAgbGV0IGYgPSBib2R5LmdhbWUuaW50ZXJVcGRhdGVUaW1lIC8gYm9keS5nYW1lLmZpeGVkVXBkYXRlVGltZTtcclxuICAgXHJcbiAgICAgICAgICAgIGJvZHkudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLnggPSBDdXJ2ZS5sZXJwKGJvZHkucHJldmlvdXNQb3NpdGlvbi54LCBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi54LCBmKTtcclxuICAgICAgICAgICAgYm9keS50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueSA9IEN1cnZlLmxlcnAoYm9keS5wcmV2aW91c1Bvc2l0aW9uLnksIGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLnksIGYpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICAgICBib2R5LnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi5zZXQoYm9keS50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgLy8gU2V0IHRoZSBwcmV2aW91cyBwb3NpdGlvbnNcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgYm9keS5wcmV2aW91c1Bvc2l0aW9uLnggPSBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi54O1xyXG4gICAgICAgICBib2R5LnByZXZpb3VzUG9zaXRpb24ueSA9IGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgICAgICBib2R5LnVuc3R1Y2tEaXN0YW5jZS5zZXRaZXJvKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gTW92ZSBhbGwgdGhlIGJvZGllc1xyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi54ICs9IGJvZHkudmVsb2NpdHkueCAqIGRlbHRhO1xyXG4gICAgICAgICBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi55ICs9IGJvZHkudmVsb2NpdHkueSAqIGRlbHRhO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBjb2xsaXNpb25NYXAgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xyXG5cclxuICAgICAgbGV0IGFkZFRvQ29sbGlzaW9uTWFwID0gKHNlbGZJbmRleDogbnVtYmVyLCBvdGhlckluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgY29sbGlzaW9uTWFwLnNldChNYXRoLm1pbihzZWxmSW5kZXgsIG90aGVySW5kZXgpLCBNYXRoLm1heChzZWxmSW5kZXgsIG90aGVySW5kZXgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVW5zdHVjayBhbGwgdGhlIGJvZGllc1xyXG4gICAgICBsZXQgdGlsZUNvbGxpZGVyID0gbmV3IFRpbGVDb2xsaWRlcigpO1xyXG4gICAgICBsZXQgdGlsZUFBQkIgPSBuZXcgQUFCQigpO1xyXG4gICAgICBsZXQgdGlsZVBvc2l0aW9uID0gbmV3IFZlY3RvcjIoKTtcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgICAgLy8gVGlsZW1hcCBjb2xsaXNpb25cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBpZihib2R5LmtpbmVtYXRpYykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBiYm94ID0gYm9keS5ib3VuZGluZ0JveDtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgQkJPWCBjb29yZHNcclxuICAgICAgICAgICAgbGV0IGZyb21YID0gTWF0aC5mbG9vcihiYm94LmxlZnQgLyBsYXllci50aWxlbWFwLnRpbGVXaWR0aCk7XHJcbiAgICAgICAgICAgIGxldCB0b1ggPSBNYXRoLmZsb29yKGJib3gucmlnaHQgLyBsYXllci50aWxlbWFwLnRpbGVXaWR0aCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZnJvbVkgPSBNYXRoLmZsb29yKGJib3gudG9wIC8gbGF5ZXIudGlsZW1hcC50aWxlSGVpZ2h0KTtcclxuICAgICAgICAgICAgbGV0IHRvWSA9IE1hdGguZmxvb3IoYmJveC5ib3R0b20gLyBsYXllci50aWxlbWFwLnRpbGVIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gZnJvbVg7IGkgPD0gdG9YOyBpKyspe1xyXG4gICAgICAgICAgICAgICBmb3IobGV0IGogPSBmcm9tWTsgaiA8PSB0b1k7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgIGlmKCFsYXllci5pc1RpbGVTb2xpZChpLCBqKSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICB0aWxlUG9zaXRpb24ueCA9IGkgKiBsYXllci50aWxlbWFwLnRpbGVXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgdGlsZVBvc2l0aW9uLnkgPSBqICogbGF5ZXIudGlsZW1hcC50aWxlSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGlsZUNvbGxpZGVyID0gbGF5ZXIuZ2V0VGlsZUNvbGxpZGVyKGksIGosIHRpbGVDb2xsaWRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICB0aWxlQUFCQiA9IHRpbGVDb2xsaWRlci5nZXRCb3VuZHModGlsZVBvc2l0aW9uLCB0aWxlQUFCQik7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZighYmJveC5vdmVybGFwcyh0aWxlQUFCQikpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgbGV0IHVuc3R1Y2tEaXN0ID0gdW5zdHVjayhcclxuICAgICAgICAgICAgICAgICAgICAgYm9keS5jb2xsaWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgdGlsZUNvbGxpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICB0aWxlUG9zaXRpb24uc3ViKGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgYm9keS52ZWxvY2l0eVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYodW5zdHVja0Rpc3QgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLmFkZCh1bnN0dWNrRGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJvZHkudW5zdHVja0Rpc3RhbmNlLmFkZCh1bnN0dWNrRGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGVyZm9ybUNvbGxpc2lvbihib2R5LCBiYm94LCB0aWxlQUFCQik7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgICAvLyBOb3JtYWwgY29sbGlzaW9uc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICAgIC8vIFRPRE8gYnJvYWRwaGFzZSBuYXJyb3cgcGhhc2Ugc3R1ZmYgOilcclxuICAgICAgLy8gTWF5YmUgc3RhcnQgd2l0aCBzd2VlcCBhbmQgcHJ1bmVcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaCgoc2VsZiwgc2VsZkluZGV4KSA9PiB7XHJcbiAgICAgICAgIGlmKHNlbGYua2luZW1hdGljKSByZXR1cm47XHJcblxyXG4gICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKChvdGhlciwgb3RoZXJJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzZWxmID09PSBvdGhlcikgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZighb3RoZXIuc29saWQpIHJldHVybjtcclxuICAgXHJcbiAgICAgICAgICAgIGxldCBiYm94ID0gc2VsZi5ib3VuZGluZ0JveDtcclxuICAgICAgICAgICAgbGV0IG90aGVyYmJveCA9IG90aGVyLmJvdW5kaW5nQm94O1xyXG5cclxuICAgICAgICAgICAgaWYoIWJib3gub3ZlcmxhcHMob3RoZXJiYm94KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYoc2VsZi51c2VEeW5hbWljQ29sbGlzaW9ucyAmJiBvdGhlci51c2VEeW5hbWljQ29sbGlzaW9ucyl7XHJcbiAgICAgICAgICAgICAgIGFkZFRvQ29sbGlzaW9uTWFwKHNlbGZJbmRleCwgb3RoZXJJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB1bnN0dWNrRGlzdCA9IHVuc3R1Y2soXHJcbiAgICAgICAgICAgICAgIHNlbGYuY29sbGlkZXIsXHJcbiAgICAgICAgICAgICAgIG90aGVyLmNvbGxpZGVyLFxyXG4gICAgICAgICAgICAgICBvdGhlci50cmFuc2Zvcm0ucG9zaXRpb24uY2xvbmUoKS5zdWIoc2VsZi50cmFuc2Zvcm0ucG9zaXRpb24pLFxyXG4gICAgICAgICAgICAgICBzZWxmLnZlbG9jaXR5LmNsb25lKCkuc3ViKG90aGVyLnZlbG9jaXR5KSk7IC8vIFRPRE8gcmVsYXRpdmUgdmVsb2NpdHlcclxuXHJcbiAgICAgICAgICAgIGlmKHVuc3R1Y2tEaXN0ICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICBzZWxmLnRyYW5zZm9ybS5wb3NpdGlvbi5hZGQodW5zdHVja0Rpc3QpO1xyXG4gICAgICAgICAgICAgICBzZWxmLnVuc3R1Y2tEaXN0YW5jZS5hZGQodW5zdHVja0Rpc3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG5cclxuICAgICAgICAgYm9keS5jb2xsaWRlZEJvdHRvbSA9IGJvZHkudW5zdHVja0Rpc3RhbmNlLnkgPCAwO1xyXG4gICAgICAgICBib2R5LmNvbGxpZGVkVG9wID0gYm9keS51bnN0dWNrRGlzdGFuY2UueSA+IDA7XHJcblxyXG4gICAgICAgICBib2R5LmNvbGxpZGVkTGVmdCA9IGJvZHkudW5zdHVja0Rpc3RhbmNlLnggPiAwO1xyXG4gICAgICAgICBib2R5LmNvbGxpZGVkUmlnaHQgPSBib2R5LnVuc3R1Y2tEaXN0YW5jZS54IDwgMDtcclxuXHJcbiAgICAgICAgIGlmKGJvZHkuY29sbGlkZWRMZWZ0IHx8IGJvZHkuY29sbGlkZWRSaWdodCl7XHJcbiAgICAgICAgICAgIGJvZHkudmVsb2NpdHkueCA9IC1ib2R5LnZlbG9jaXR5LnggKiBib2R5LmJvdW5jeW5lc3M7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYoYm9keS5jb2xsaWRlZEJvdHRvbSB8fCBib2R5LmNvbGxpZGVkVG9wKXtcclxuICAgICAgICAgICAgYm9keS52ZWxvY2l0eS55ID0gLWJvZHkudmVsb2NpdHkueSAqIGJvZHkuYm91bmN5bmVzcztcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEEgbGl0dGxlIG1vcmUgb3B0aW1pemVkIGJ1dCBzdGlsbCByZWFsbHkgZnVja2luZyBzdHVwaWQgOilcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmJvZGllc1tpXTtcclxuXHJcbiAgICAgICAgIGxldCBiYm94ID0gYm9keS5ib3VuZGluZ0JveDtcclxuXHJcbiAgICAgICAgIGlmKCFib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgIGZvcihsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICBsZXQgb3RoZXIgPSB0aGlzLmJvZGllc1tqXTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFvdGhlci51c2VEeW5hbWljQ29sbGlzaW9ucykgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBpZihiYm94Lm92ZXJsYXBzKG90aGVyLmJvdW5kaW5nQm94KSl7XHJcbiAgICAgICAgICAgICAgIGFkZFRvQ29sbGlzaW9uTWFwKGksIGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29sbGlzaW9uTWFwLmZvckVhY2goKHNlbGZJbmRleCwgb3RoZXJJbmRleCkgPT4ge1xyXG4gICAgICAgICBsZXQgc2VsZiA9IHRoaXMuYm9kaWVzW3NlbGZJbmRleF07XHJcbiAgICAgICAgIGxldCBvdGhlciA9IHRoaXMuYm9kaWVzW290aGVySW5kZXhdO1xyXG5cclxuICAgICAgICAgc2VsZi5vbkNvbGxpc2lvbi5lbWl0KG90aGVyKTtcclxuICAgICAgICAgb3RoZXIub25Db2xsaXNpb24uZW1pdChzZWxmKTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIGJveGNhc3QoYWFiYjogQUFCQiwgc29saWRPbmx5OiBib29sZWFuID0gdHJ1ZSk6IFJpZ2lkYm9keVtde1xyXG4gICAgICBsZXQgbGlzdDogUmlnaWRib2R5W10gPSBbXTtcclxuXHJcbiAgICAgIC8vIFRPRE8gbWFrZSBhIGNvbGxpZGVyIGZyb20gdGhpcyBBQUJCIGFuZCBmZWVkIGl0IGludG8gdGhlIGNvbGxpc2lvbiBzeXN0ZW1cclxuXHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgIGlmKHNvbGlkT25seSAmJiAhYm9keS5zb2xpZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgLy8gVE9ETyBnb29kIGNvbGxpc2lvbiBidXQgdy9lIHRoaXMgaXMgb2sgZm9yIG5vd1xyXG4gICAgICAgICBpZihib2R5LmJvdW5kaW5nQm94Lm92ZXJsYXBzKGFhYmIpKXtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGJvZHkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdEZWJ1ZyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgbGF5ZXIuZHJhd0RlYnVnKGdyYXBoaWNzLCBsYXllci50aWxlbWFwLnRpbGVXaWR0aCwgbGF5ZXIudGlsZW1hcC50aWxlSGVpZ2h0LCBuZXcgQUFCQigwLCAwLCAxMDAwLCAxMDAwKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IoMjU1LDAsMCwgMC42KTtcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgaWYoIWJvZHkuc29saWQpIHJldHVybjtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGdyYXBoaWNzLmRyYXdBQUJCKGJvZHkuYm91bmRpbmdCb3gsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcigwLDI1NSwwLCAwLjYpO1xyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBpZihib2R5LnNvbGlkKSByZXR1cm47XHJcbiAgICAgICAgIGxldCBjb2xsaWRlciA9IGJvZHkuYm91bmRpbmdCb3g7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBncmFwaGljcy5kcmF3QUFCQihjb2xsaWRlciwgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IoMCwwLDI1NSwgMC42KTtcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgbGV0IHRyYW5zZm9ybSA9IGJvZHkudHJhbnNmb3JtO1xyXG4gICAgICAgICBcclxuICAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3RhbmdsZShcclxuICAgICAgICAgICAgdHJhbnNmb3JtLnBvc2l0aW9uLnggLSAxLCB0cmFuc2Zvcm0ucG9zaXRpb24ueSAtIDEsXHJcbiAgICAgICAgICAgIDIsIDIsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9TcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb257XHJcbiAgIGZyYW1lUmF0ZTogbnVtYmVyID0gMTI7XHJcbiAgIFxyXG4gICBwcml2YXRlIHNwcml0ZXM6IFNwcml0ZVtdID0gW107XHJcbiAgIHByaXZhdGUgX2luZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICAvLyBUT0RPIGNhcCB0aGUgX2luZGV4IHZhcmlhYmxlXHJcbiAgICAgIHRoaXMuX2luZGV4ICs9IGRlbHRhICogdGhpcy5mcmFtZVJhdGU7XHJcbiAgIH1cclxuXHJcbiAgIGFkZEZyYW1lKHNwcml0ZTogU3ByaXRlKXtcclxuICAgICAgdGhpcy5zcHJpdGVzLnB1c2goc3ByaXRlKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIGNlbnRlcigpe1xyXG4gICAgICB0aGlzLnNwcml0ZXMuZm9yRWFjaChzcHJpdGUgPT4gc3ByaXRlLmNlbnRlcigpKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgXHJcbiAgIHNldE9mZnNldCh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuc3ByaXRlcy5mb3JFYWNoKHNwcml0ZSA9PiBzcHJpdGUuc2V0T2Zmc2V0KHgsIHkpKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBpbmRleCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5faW5kZXggJSB0aGlzLmZyYW1lcztcclxuICAgfVxyXG4gICBnZXQgZnJhbWVzKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnNwcml0ZXMubGVuZ3RoO1xyXG4gICB9XHJcbiAgIGdldCBmcmFtZSgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW01hdGguZmxvb3IodGhpcy5pbmRleCldO1xyXG4gICB9XHJcbiAgIGdldCBkdXJhdGlvbigpe1xyXG4gICAgICByZXR1cm4gdGhpcy5mcmFtZXMgLyB0aGlzLmZyYW1lUmF0ZTtcclxuICAgfVxyXG5cclxuICAgY2xvbmUoKXtcclxuICAgICAgbGV0IGEgPSAgbmV3IEFuaW1hdGlvbigpO1xyXG4gICAgICBcclxuICAgICAgYS5faW5kZXggPSB0aGlzLl9pbmRleDtcclxuICAgICAgYS5mcmFtZVJhdGUgPSB0aGlzLmZyYW1lUmF0ZTtcclxuICAgICAgYS5zcHJpdGVzID0gdGhpcy5zcHJpdGVzO1xyXG5cclxuICAgICAgcmV0dXJuIGE7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhe1xyXG4gICBjZW50ZXI6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMig2NDAgLyAyLCAzNjAgLyAyKTtcclxuXHJcbiAgIC8vIFRPRE8gdGhpcyBzaG91bGRuJ3QgYmUgZGVmaW5lZCBsaWtlIHRoaXMsIGJlY2F1c2UgdGhpcyBkZXBlbmRzIG9uIHRoZSBzY3JlZW4gYXNwZWN0IHJhdGlvLi4uXHJcbiAgIHdpZHRoOiBudW1iZXIgPSA2NDA7XHJcbiAgIGhlaWdodDogbnVtYmVyID0gMzYwO1xyXG5cclxuICAgZ2V0Qm91bmRzKGFhYmI/OiBBQUJCKXtcclxuICAgICAgaWYoYWFiYiA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgYWFiYiA9IG5ldyBBQUJCKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhYWJiLnNldChcclxuICAgICAgICAgdGhpcy5jZW50ZXIueCAtIHRoaXMud2lkdGggLyAyLFxyXG4gICAgICAgICB0aGlzLmNlbnRlci55IC0gdGhpcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICB0aGlzLmNlbnRlci54ICsgdGhpcy53aWR0aCAvIDIsXHJcbiAgICAgICAgIHRoaXMuY2VudGVyLnkgKyB0aGlzLmhlaWdodCAvIDJcclxuICAgICAgKTtcclxuICAgfVxyXG5cclxuICAgc2NyZWVuVG9Xb3JsZFgoeDogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIHggKiB0aGlzLndpZHRoICsgdGhpcy5jZW50ZXIueCAtIHRoaXMud2lkdGggLyAyO1xyXG4gICB9XHJcbiAgIC8vIHNjcmVlblRvV29ybGRZKHk6IG51bWJlcil7XHJcbiAgIC8vICAgIHJldHVybiB5ICogdGhpcy5oZWlnaHQgKyB0aGlzLmNlbnRlci55IC0gdGhpcy5oZWlnaHQgLyAyO1xyXG4gICAvLyB9XHJcbiAgIHNjcmVlblRvV29ybGRZKHk6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB5ICogdGhpcy53aWR0aCArIHRoaXMuY2VudGVyLnkgLSB0aGlzLndpZHRoIC8gMjtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4vQ2FtZXJhXCI7XHJcbmltcG9ydCB7IE5pbmVTaWRlU3ByaXRlIH0gZnJvbSBcIi4vTmluZVNpZGVTcHJpdGVcIjtcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vU3ByaXRlXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgR3JhcGhpY3N7XHJcblxyXG4gICBwdWJsaWMgYWJzdHJhY3QgYmVnaW4oKTogdm9pZDtcclxuICAgcHVibGljIGFic3RyYWN0IGNsZWFyKCk6IHZvaWQ7XHJcbiAgIHB1YmxpYyBhYnN0cmFjdCBlbmQoKTogdm9pZDsgXHJcblxyXG4gICBwdWJsaWMgZHJhd1Nwcml0ZShzcHJpdGU6IFNwcml0ZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlWDogbnVtYmVyID0gMSwgc2NhbGVZOiBudW1iZXIgPSAxLCByb3RhdGlvbjogbnVtYmVyID0gMCl7XHJcbiAgICAgIHRoaXMuZHJhd1Nwcml0ZVJhdyhzcHJpdGUsIHgsIHksIHNjYWxlWCwgc2NhbGVZLCByb3RhdGlvbik7XHJcbiAgIH1cclxuICAgcHVibGljIGFic3RyYWN0IGRyYXdTcHJpdGVTaW1wbGUoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZDtcclxuICAgXHJcbiAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3U3ByaXRlUmF3KHNwcml0ZTogU3ByaXRlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGVYOiBudW1iZXIsIHNjYWxlWTogbnVtYmVyLCByb3RhdGlvbjogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgIHB1YmxpYyBkcmF3U3ByaXRlVGlsZWQoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgc2NhbGVYOiBudW1iZXIgPSAxLCBzY2FsZVk6IG51bWJlciA9IDEpe1xyXG4gICAgICBsZXQgc3ByaXRlV2lkdGggPSBzcHJpdGUud2lkdGggKiBzY2FsZVg7XHJcbiAgICAgIGxldCBzcHJpdGVIZWlnaHQgPSBzcHJpdGUuaGVpZ2h0ICogc2NhbGVZO1xyXG5cclxuICAgICAgbGV0IHRpbGVYID0gdyAvIHNwcml0ZVdpZHRoO1xyXG4gICAgICBsZXQgdGlsZVkgPSBoIC8gc3ByaXRlSGVpZ2h0O1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRpbGVYOyBpKyspe1xyXG4gICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgdGlsZVk7IGorKyl7XHJcbiAgICAgICAgICAgIHRoaXMuZHJhd1Nwcml0ZShzcHJpdGUsIGkgKiBzcHJpdGVXaWR0aCArIHgsIGogKiBzcHJpdGVIZWlnaHQgKyB5LCBzY2FsZVgsIHNjYWxlWSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgYWJzdHJhY3QgZHJhd1JlY3RhbmdsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGZpbGw6IGJvb2xlYW4pOiB2b2lkO1xyXG5cclxuICAgcHVibGljIGRyYXdBQUJCKGFhYmI6IEFBQkIsIGZpbGw6IGJvb2xlYW4pe1xyXG4gICAgICB0aGlzLmRyYXdSZWN0YW5nbGUoYWFiYi5sZWZ0LCBhYWJiLnRvcCwgYWFiYi53aWR0aCwgYWFiYi5oZWlnaHQsIGZpbGwpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgZHJhd1Nwcml0ZU5pbmVTaWRlKHNwcml0ZTogTmluZVNpZGVTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcil7XHJcbiAgICAgIGxldCBidWZmZXIgPSBuZXcgU3ByaXRlKHNwcml0ZS50ZXh0dXJlKTtcclxuXHJcbiAgICAgIGxldCB4TWlkZGxlID0gMDtcclxuICAgICAgbGV0IHlNaWRkbGUgPSAwO1xyXG4gICAgICBsZXQgeFNpemUgPSB3O1xyXG4gICAgICBsZXQgeVNpemUgPSBoO1xyXG5cclxuICAgICAgLy8gQ29ybmVycyBhbmQgc2V0dXBcclxuICAgICAgYnVmZmVyID0gc3ByaXRlLmdldFNwcml0ZSgwLCAwLCBidWZmZXIpO1xyXG4gICAgICB0aGlzLmRyYXdTcHJpdGUoYnVmZmVyLCB4LCB5KTtcclxuICAgICAgeFNpemUgLT0gYnVmZmVyLndpZHRoO1xyXG4gICAgICB4TWlkZGxlID0gYnVmZmVyLndpZHRoO1xyXG4gICAgICB5TWlkZGxlID0gYnVmZmVyLmhlaWdodDtcclxuICAgICAgXHJcbiAgICAgIGJ1ZmZlciA9IHNwcml0ZS5nZXRTcHJpdGUoMiwgMCwgYnVmZmVyKTtcclxuICAgICAgdGhpcy5kcmF3U3ByaXRlKGJ1ZmZlciwgeCArIHcgLSBidWZmZXIud2lkdGgsIHkpO1xyXG4gICAgICB4U2l6ZSAtPSBidWZmZXIud2lkdGg7XHJcbiAgICAgIFxyXG4gICAgICBidWZmZXIgPSBzcHJpdGUuZ2V0U3ByaXRlKDAsIDIsIGJ1ZmZlcik7XHJcbiAgICAgIHRoaXMuZHJhd1Nwcml0ZShidWZmZXIsIHgsIHkgKyBoIC0gYnVmZmVyLmhlaWdodCk7XHJcbiAgICAgIHlTaXplIC09IGJ1ZmZlci5oZWlnaHQ7XHJcblxyXG4gICAgICBidWZmZXIgPSBzcHJpdGUuZ2V0U3ByaXRlKDIsIDIsIGJ1ZmZlcik7XHJcbiAgICAgIHRoaXMuZHJhd1Nwcml0ZShidWZmZXIsIHggKyB3IC0gYnVmZmVyLndpZHRoLCB5ICsgaCAtIGJ1ZmZlci5oZWlnaHQpO1xyXG4gICAgICB5U2l6ZSAtPSBidWZmZXIuaGVpZ2h0O1xyXG5cclxuICAgICAgLy8gVG9wXHJcbiAgICAgIGJ1ZmZlciA9IHNwcml0ZS5nZXRTcHJpdGUoMSwgMCwgYnVmZmVyKTtcclxuICAgICAgdGhpcy5kcmF3U3ByaXRlVGlsZWQoYnVmZmVyLCB4ICsgeE1pZGRsZSwgeSwgeFNpemUsIGJ1ZmZlci5oZWlnaHQpO1xyXG5cclxuICAgICAgLy9Cb3R0b21cclxuICAgICAgYnVmZmVyID0gc3ByaXRlLmdldFNwcml0ZSgxLCAyLCBidWZmZXIpO1xyXG4gICAgICB0aGlzLmRyYXdTcHJpdGVUaWxlZChidWZmZXIsIHggKyB4TWlkZGxlLCB5ICsgeU1pZGRsZSArIHlTaXplLCB4U2l6ZSwgYnVmZmVyLmhlaWdodCk7XHJcblxyXG4gICAgICAvLyBMZWZ0XHJcbiAgICAgIGJ1ZmZlciA9IHNwcml0ZS5nZXRTcHJpdGUoMCwgMSwgYnVmZmVyKTtcclxuICAgICAgdGhpcy5kcmF3U3ByaXRlVGlsZWQoYnVmZmVyLCB4LCB5ICsgeU1pZGRsZSwgYnVmZmVyLndpZHRoLCB5U2l6ZSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBSaWdodFxyXG4gICAgICBidWZmZXIgPSBzcHJpdGUuZ2V0U3ByaXRlKDIsIDEsIGJ1ZmZlcik7XHJcbiAgICAgIHRoaXMuZHJhd1Nwcml0ZVRpbGVkKGJ1ZmZlciwgeCArIHhNaWRkbGUgKyB4U2l6ZSwgeSArIHlNaWRkbGUsIGJ1ZmZlci53aWR0aCwgeVNpemUpO1xyXG5cclxuICAgICAgLy8gQ2VudGVyXHJcbiAgICAgIGJ1ZmZlciA9IHNwcml0ZS5nZXRTcHJpdGUoMSwgMSwgYnVmZmVyKTtcclxuICAgICAgdGhpcy5kcmF3U3ByaXRlVGlsZWQoYnVmZmVyLCB4ICsgeE1pZGRsZSwgeSArIHlNaWRkbGUsIHhTaXplLCB5U2l6ZSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBhYnN0cmFjdCBzZXRDYW1lcmEoY2FtZXJhOiBDYW1lcmEpOiB2b2lkO1xyXG4gICBwdWJsaWMgc2V0Q29sb3IocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYTogbnVtYmVyID0gMSl7XHJcbiAgICAgIHRoaXMuc2V0Q29sb3JSYXcociwgZywgYiwgYSk7XHJcbiAgIH1cclxuICAgcHVibGljIGFic3RyYWN0IHNldEFscGhhKGE6IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gICBwdWJsaWMgYWJzdHJhY3Qgc2V0Q29sb3JSYXcocjogbnVtYmVyLCBnOiBudW1iZXIsIGI6IG51bWJlciwgYTogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgIHB1YmxpYyBhYnN0cmFjdCB1cGRhdGVTaXplKCk6IHZvaWQ7XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9TcHJpdGVcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCIuL1RleHR1cmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBOaW5lU2lkZVNwcml0ZXtcclxuICAgdGV4dHVyZTogVGV4dHVyZTtcclxuXHJcbiAgIHhMaW5lczogbnVtYmVyW107XHJcbiAgIHlMaW5lczogbnVtYmVyW107XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih0ZXh0dXJlOiBUZXh0dXJlKXtcclxuICAgICAgdGhpcy50ZXh0dXJlID0gdGV4dHVyZTtcclxuXHJcbiAgICAgIHRoaXMueExpbmVzID0gbmV3IEFycmF5KDQpO1xyXG4gICAgICB0aGlzLnlMaW5lcyA9IG5ldyBBcnJheSg0KTtcclxuICAgfVxyXG5cclxuICAgc2V0dXAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlcil7XHJcbiAgICAgIHRoaXMueExpbmVzWzBdID0geDtcclxuICAgICAgdGhpcy54TGluZXNbMV0gPSB4ICsgbGVmdDtcclxuICAgICAgdGhpcy54TGluZXNbMl0gPSB4ICsgdyAtIHJpZ2h0O1xyXG4gICAgICB0aGlzLnhMaW5lc1szXSA9IHggKyB3O1xyXG5cclxuICAgICAgdGhpcy55TGluZXNbMF0gPSB5O1xyXG4gICAgICB0aGlzLnlMaW5lc1sxXSA9IHkgKyB0b3A7XHJcbiAgICAgIHRoaXMueUxpbmVzWzJdID0geSArIGggLSBib3R0b207XHJcbiAgICAgIHRoaXMueUxpbmVzWzNdID0geSArIGg7XHJcbiAgIH1cclxuXHJcbiAgIGdldFNwcml0ZSh4OiBudW1iZXIsIHk6IG51bWJlciwgc3ByaXRlOiBTcHJpdGUpe1xyXG4gICAgICBzcHJpdGUub2Zmc2V0WCA9IDA7XHJcbiAgICAgIHNwcml0ZS5vZmZzZXRZID0gMDtcclxuXHJcbiAgICAgIHNwcml0ZS50ZXh0dXJlID0gdGhpcy50ZXh0dXJlO1xyXG4gICAgICBcclxuICAgICAgc3ByaXRlLnNvdXJjZVggPSB0aGlzLnhMaW5lc1t4XTtcclxuICAgICAgc3ByaXRlLnNvdXJjZVkgPSB0aGlzLnlMaW5lc1t5XTtcclxuICAgICAgc3ByaXRlLnNvdXJjZVdpZHRoID0gdGhpcy54TGluZXNbeCArIDFdIC0gdGhpcy54TGluZXNbeF07XHJcbiAgICAgIHNwcml0ZS5zb3VyY2VIZWlnaHQgPSB0aGlzLnlMaW5lc1t5ICsgMV0gLSB0aGlzLnlMaW5lc1t5XTtcclxuXHJcbiAgICAgIHJldHVybiBzcHJpdGU7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCIuL0dyYXBoaWNzXCI7XHJcblxyXG5jbGFzcyBQYXJ0aWNsZXtcclxuICAgcG9zaXRpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICBzY2FsZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDEsIDEpO1xyXG4gICBsaWZldGltZTogbnVtYmVyID0gMDtcclxuICAgYW5pbWF0aW9uOiBBbmltYXRpb258dW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFydGljbGVTeXN0ZW17XHJcbiAgIHBhcnRpY2xlczogUGFydGljbGVbXTtcclxuICAgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMucGFydGljbGVzID0gbmV3IEFycmF5KDEwKTtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMucGFydGljbGVzW2ldID0gbmV3IFBhcnRpY2xlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLmxpZmV0aW1lIC09IGRlbHRhO1xyXG4gICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXS5hbmltYXRpb24/LnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBsZXQgcGFydGljbGUgPSB0aGlzLnBhcnRpY2xlc1tpXTtcclxuXHJcbiAgICAgICAgIGlmKHBhcnRpY2xlLmFuaW1hdGlvbiA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICAgaWYocGFydGljbGUubGlmZXRpbWUgPD0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICBncmFwaGljcy5kcmF3U3ByaXRlKHBhcnRpY2xlLmFuaW1hdGlvbi5mcmFtZSwgcGFydGljbGUucG9zaXRpb24ueCwgcGFydGljbGUucG9zaXRpb24ueSwgcGFydGljbGUuc2NhbGUueCwgcGFydGljbGUuc2NhbGUueSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgYWRkUGFydGljbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIGFuaW1hdGlvbjogQW5pbWF0aW9uLCB4U2NhbGU6IG51bWJlciA9IDEsIHlTY2FsZTogbnVtYmVyID0gMSl7XHJcbiAgICAgIGxldCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzW3RoaXMuaW5kZXhdO1xyXG5cclxuICAgICAgcGFydGljbGUucG9zaXRpb24ueCA9IHg7XHJcbiAgICAgIHBhcnRpY2xlLnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgICBwYXJ0aWNsZS5zY2FsZS54ID0geFNjYWxlO1xyXG4gICAgICBwYXJ0aWNsZS5zY2FsZS55ID0geVNjYWxlO1xyXG4gICAgICBcclxuICAgICAgcGFydGljbGUuYW5pbWF0aW9uID0gYW5pbWF0aW9uLmNsb25lKCk7XHJcbiAgICAgIHBhcnRpY2xlLmxpZmV0aW1lID0gYW5pbWF0aW9uLmR1cmF0aW9uO1xyXG5cclxuICAgICAgdGhpcy5pbmRleCsrO1xyXG5cclxuICAgICAgaWYodGhpcy5pbmRleCA+PSB0aGlzLnBhcnRpY2xlcy5sZW5ndGgpe1xyXG4gICAgICAgICB0aGlzLmluZGV4IC09IHRoaXMucGFydGljbGVzLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCIuL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcIi4vVGV4dHVyZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlc291cmNlTWFuYWdlcntcclxuICAgdGV4dHVyZXM6IHtba2V5OiBzdHJpbmddOiBUZXh0dXJlfHVuZGVmaW5lZH07XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLnRleHR1cmVzID0ge307XHJcbiAgIH1cclxuXHJcbiAgIGxvYWRTcHJpdGVTaGVldChzcmM6IHN0cmluZyk6IFNwcml0ZVNoZWV0e1xyXG4gICAgICByZXR1cm4gbmV3IFNwcml0ZVNoZWV0KHRoaXMubG9hZFRleHR1cmUoc3JjKSk7XHJcbiAgIH1cclxuXHJcbiAgIGxvYWRUZXh0dXJlKHNyYzogc3RyaW5nKTogVGV4dHVyZXtcclxuICAgICAgaWYodGhpcy50ZXh0dXJlc1tzcmNdID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICB0aGlzLnRleHR1cmVzW3NyY10gPSB0aGlzLmxvYWRUZXh0dXJlUmF3KHNyYyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnRleHR1cmVzW3NyY10hO1xyXG4gICB9XHJcblxyXG4gICBsb2FkVGV4dHVyZUZyb21JbWFnZShpbWc6IEhUTUxJbWFnZUVsZW1lbnQpe1xyXG4gICAgICB0aGlzLmxvYWRUZXh0dXJlKGltZy5zcmMpO1xyXG4gICB9XHJcbiAgIFxyXG4gICBhYnN0cmFjdCBsb2FkVGV4dHVyZVJhdyhzcmM6IHN0cmluZyk6IFRleHR1cmU7XHJcbn0iLCJpbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiLi9BbmltYXRpb25cIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCIuL1RleHR1cmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGV7XHJcbiAgIHRleHR1cmU6IFRleHR1cmU7XHJcblxyXG4gICBvZmZzZXRYOiBudW1iZXIgPSAwO1xyXG4gICBvZmZzZXRZOiBudW1iZXIgPSAwO1xyXG5cclxuICAgc291cmNlWDogbnVtYmVyID0gMDtcclxuICAgc291cmNlWTogbnVtYmVyID0gMDtcclxuICAgc291cmNlV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgIHNvdXJjZUhlaWdodDogbnVtYmVyID0gMDtcclxuXHJcbiAgIGdldCBzb3VyY2VMZWZ0KCkgeyByZXR1cm4gdGhpcy5zb3VyY2VYO31cclxuICAgZ2V0IHNvdXJjZVRvcCgpIHsgcmV0dXJuIHRoaXMuc291cmNlWTt9XHJcbiAgIGdldCBzb3VyY2VSaWdodCgpIHsgcmV0dXJuIHRoaXMuc291cmNlWCArIHRoaXMuc291cmNlV2lkdGg7fVxyXG4gICBnZXQgc291cmNlQm90dG9tKCkgeyByZXR1cm4gdGhpcy5zb3VyY2VZICsgdGhpcy5zb3VyY2VIZWlnaHQ7fVxyXG4gICBcclxuICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSl7XHJcbiAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcblxyXG4gICAgICB0aGlzLnNvdXJjZVdpZHRoID0gdGV4dHVyZS53aWR0aCBhcyBudW1iZXI7XHJcbiAgICAgIHRoaXMuc291cmNlSGVpZ2h0ID0gdGV4dHVyZS5oZWlnaHQgYXMgbnVtYmVyO1xyXG4gICB9XHJcblxyXG4gICBnZXQgd2lkdGgoKSB7IHJldHVybiB0aGlzLnNvdXJjZVdpZHRoOyB9XHJcbiAgIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDsgfVxyXG5cclxuICAgY2VudGVyKCl7XHJcbiAgICAgIHRoaXMub2Zmc2V0WCA9IHRoaXMud2lkdGggLyAyO1xyXG4gICAgICB0aGlzLm9mZnNldFkgPSB0aGlzLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBzZXRPZmZzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLm9mZnNldFggPSB4O1xyXG4gICAgICB0aGlzLm9mZnNldFkgPSB5O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZVNoZWV0e1xyXG4gICB0ZXh0dXJlOiBUZXh0dXJlO1xyXG5cclxuICAgY29uc3RydWN0b3IodGV4dHVyZTogVGV4dHVyZSl7XHJcbiAgICAgIHRoaXMudGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgIH1cclxuXHJcbiAgIGdldFNwcml0ZSh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIpe1xyXG4gICAgICBsZXQgc3ByaXRlID0gbmV3IFNwcml0ZSh0aGlzLnRleHR1cmUpO1xyXG5cclxuICAgICAgc3ByaXRlLnNvdXJjZVggPSB4O1xyXG4gICAgICBzcHJpdGUuc291cmNlWSA9IHk7XHJcbiAgICAgIHNwcml0ZS5zb3VyY2VXaWR0aCA9IHc7XHJcbiAgICAgIHNwcml0ZS5zb3VyY2VIZWlnaHQgPSBoO1xyXG5cclxuICAgICAgcmV0dXJuIHNwcml0ZTtcclxuICAgfVxyXG4gICBcclxuICAgZ2V0QW5pbWF0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgY291bnQ6IG51bWJlcil7XHJcbiAgICAgIGxldCBhbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKCk7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKyl7XHJcbiAgICAgICAgIGxldCBzcHJpdGUgPSBuZXcgU3ByaXRlKHRoaXMudGV4dHVyZSk7XHJcbiAgIFxyXG4gICAgICAgICBzcHJpdGUuc291cmNlWCA9IHggKyBpICogdztcclxuICAgICAgICAgc3ByaXRlLnNvdXJjZVkgPSB5O1xyXG4gICAgICAgICBzcHJpdGUuc291cmNlV2lkdGggPSB3O1xyXG4gICAgICAgICBzcHJpdGUuc291cmNlSGVpZ2h0ID0gaDtcclxuXHJcbiAgICAgICAgIGFuaW1hdGlvbi5hZGRGcmFtZShzcHJpdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYW5pbWF0aW9uO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgZnJvbUhUTUwoaWQ6IHN0cmluZyl7XHJcbiAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFNwcml0ZVNoZWV0KGVsZW1lbnQpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiZ3JhcGhpY3MvQ2FtZXJhXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidXRpbC9Db2xvclwiO1xyXG5pbXBvcnQgeyBEZWZhdWx0RnJhZ21lbnRTb3VyY2UsIERlZmF1bHRWZXJ0ZXhTb3VyY2UsIEdMU2hhZGVyUHJvZ3JhbSwgR0xTaGFkZXJBdHRyaWJ1dGVTZXQgfSBmcm9tIFwiLi9HTFNoYWRlclwiO1xyXG5pbXBvcnQgeyBHTFRleHR1cmUgfSBmcm9tIFwiLi9HTFRleHR1cmVcIjtcclxuaW1wb3J0IHsgR0xWZXJ0ZXhCYXRjaCB9IGZyb20gXCIuL0dMVmVydGV4QmF0Y2hcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHTEdyYXBoaWNzIGV4dGVuZHMgR3JhcGhpY3N7XHJcbiAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICBwaXhlbFRleHR1cmU6IEdMVGV4dHVyZTtcclxuICAgY3VycmVudFRleHR1cmU6IEdMVGV4dHVyZTtcclxuXHJcbiAgIGJhdGNoOiBHTFZlcnRleEJhdGNoO1xyXG5cclxuICAgcHJvamVjdGlvbk1hdHJpeDogRmxvYXQzMkFycmF5O1xyXG4gICBtb2RlbFZpZXdNYXRyaXg6IEZsb2F0MzJBcnJheTtcclxuXHJcbiAgIGRyYXdpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY29sb3I6IENvbG9yO1xyXG5cclxuICAgc2hhZGVyOiBHTFNoYWRlclByb2dyYW07XHJcbiAgIGF0dHJpYnV0ZXM6IEdMU2hhZGVyQXR0cmlidXRlU2V0O1xyXG5cclxuICAgY29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICBnbC5lbmFibGUoZ2wuQkxFTkQpO1xyXG4gICAgICBnbC5ibGVuZEZ1bmMoZ2wuU1JDX0FMUEhBLCBnbC5PTkVfTUlOVVNfU1JDX0FMUEhBKTtcclxuICAgICAgZ2wuY2xlYXJDb2xvcigwLCAwLCAwLCAxKTtcclxuXHJcbiAgICAgIHRoaXMuZ2wgPSBnbDtcclxuXHJcbiAgICAgIHRoaXMuY29sb3IgPSBuZXcgQ29sb3IoMSwgMSwgMSwgMSk7XHJcblxyXG4gICAgICB0aGlzLmJhdGNoID0gbmV3IEdMVmVydGV4QmF0Y2godGhpcy5nbCk7XHJcblxyXG4gICAgICB0aGlzLnBpeGVsVGV4dHVyZSA9IG5ldyBHTFRleHR1cmUoZ2wpO1xyXG4gICAgICB0aGlzLnBpeGVsVGV4dHVyZS5zZXREYXRhKDEsIDEsIEdMVGV4dHVyZS5jb2xvckRhdGEoMSwgMSkpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRUZXh0dXJlID0gdGhpcy5waXhlbFRleHR1cmU7XHJcblxyXG4gICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuICAgICAgdGhpcy5tb2RlbFZpZXdNYXRyaXggPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgMSwgMCwgMCwgMCxcclxuICAgICAgICAgMCwgMSwgMCwgMCxcclxuICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgMCwgMCwgMCwgMVxyXG4gICAgICBdKTtcclxuXHJcbiAgICAgIHRoaXMuYmF0Y2ggPSBuZXcgR0xWZXJ0ZXhCYXRjaCh0aGlzLmdsKTtcclxuXHJcbiAgICAgIHRoaXMuc2hhZGVyID0gbmV3IEdMU2hhZGVyUHJvZ3JhbShnbCwgRGVmYXVsdFZlcnRleFNvdXJjZSwgRGVmYXVsdEZyYWdtZW50U291cmNlKTtcclxuXHJcbiAgICAgIHRoaXMuYXR0cmlidXRlcyA9IG5ldyBHTFNoYWRlckF0dHJpYnV0ZVNldCgpO1xyXG4gICAgICB0aGlzLmF0dHJpYnV0ZXMubG9hZCh0aGlzLnNoYWRlcik7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgfVxyXG5cclxuICAgY2xlYXIoKXtcclxuICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQgfCB0aGlzLmdsLkRFUFRIX0JVRkZFUl9CSVQpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3U3ByaXRlUmF3KHNwcml0ZTogU3ByaXRlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGVYOiBudW1iZXIsIHNjYWxlWTogbnVtYmVyLCByb3RhdGlvbjogbnVtYmVyKXtcclxuICAgICAgdGhpcy5zZXRUZXh0dXJlKHNwcml0ZS50ZXh0dXJlIGFzIEdMVGV4dHVyZSk7XHJcblxyXG4gICAgICB0aGlzLmVuc3VyZVNpemUoNik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJhdGNoLmNvbG9yKHRoaXMuY29sb3IuciwgdGhpcy5jb2xvci5nLCB0aGlzLmNvbG9yLmIsIHRoaXMuY29sb3IuYSk7XHJcblxyXG4gICAgICB4IC09IHNwcml0ZS5vZmZzZXRYICogc2NhbGVYO1xyXG4gICAgICB5IC09IHNwcml0ZS5vZmZzZXRZICogc2NhbGVZO1xyXG4gICAgICBcclxuICAgICAgbGV0IHcgPSBzcHJpdGUud2lkdGggKiBzY2FsZVg7XHJcbiAgICAgIGxldCBoID0gc3ByaXRlLmhlaWdodCAqIHNjYWxlWTtcclxuXHJcbiAgICAgIGxldCB1MCA9IHNwcml0ZS5zb3VyY2VMZWZ0IC8gc3ByaXRlLnRleHR1cmUud2lkdGg7XHJcbiAgICAgIGxldCB1MSA9IHNwcml0ZS5zb3VyY2VSaWdodCAvIHNwcml0ZS50ZXh0dXJlLndpZHRoO1xyXG4gICAgICBsZXQgdjAgPSBzcHJpdGUuc291cmNlVG9wIC8gc3ByaXRlLnRleHR1cmUuaGVpZ2h0O1xyXG4gICAgICBsZXQgdjEgPSBzcHJpdGUuc291cmNlQm90dG9tIC8gc3ByaXRlLnRleHR1cmUuaGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5iYXRjaC51dih1MCwgdjApO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4LCB5LCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC51dih1MSwgdjApO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4ICsgdywgeSwgMCk7XHJcbiAgICAgIHRoaXMuYmF0Y2gudXYodTEsIHYxKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCArIHcsIHkgKyBoLCAwKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYmF0Y2gudXYodTAsIHYwKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCwgeSwgMCk7XHJcbiAgICAgIHRoaXMuYmF0Y2gudXYodTEsIHYxKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCArIHcsIHkgKyBoLCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC51dih1MCwgdjEpO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4LCB5ICsgaCwgMCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdTcHJpdGVTaW1wbGUoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5zZXRUZXh0dXJlKHNwcml0ZS50ZXh0dXJlIGFzIEdMVGV4dHVyZSk7XHJcblxyXG4gICAgICB0aGlzLmVuc3VyZVNpemUoNik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJhdGNoLmNvbG9yKHRoaXMuY29sb3IuciwgdGhpcy5jb2xvci5nLCB0aGlzLmNvbG9yLmIsIHRoaXMuY29sb3IuYSk7XHJcblxyXG4gICAgICB4IC09IHNwcml0ZS5vZmZzZXRYO1xyXG4gICAgICB5IC09IHNwcml0ZS5vZmZzZXRZO1xyXG4gICAgICBcclxuICAgICAgbGV0IHcgPSBzcHJpdGUud2lkdGg7XHJcbiAgICAgIGxldCBoID0gc3ByaXRlLmhlaWdodDtcclxuXHJcbiAgICAgIGxldCB1MCA9IHNwcml0ZS5zb3VyY2VMZWZ0IC8gc3ByaXRlLnRleHR1cmUud2lkdGg7XHJcbiAgICAgIGxldCB1MSA9IHNwcml0ZS5zb3VyY2VSaWdodCAvIHNwcml0ZS50ZXh0dXJlLndpZHRoO1xyXG4gICAgICBsZXQgdjAgPSBzcHJpdGUuc291cmNlVG9wIC8gc3ByaXRlLnRleHR1cmUuaGVpZ2h0O1xyXG4gICAgICBsZXQgdjEgPSBzcHJpdGUuc291cmNlQm90dG9tIC8gc3ByaXRlLnRleHR1cmUuaGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5iYXRjaC51dih1MCwgdjApO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4LCB5LCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC51dih1MSwgdjApO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4ICsgdywgeSwgMCk7XHJcbiAgICAgIHRoaXMuYmF0Y2gudXYodTEsIHYxKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCArIHcsIHkgKyBoLCAwKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYmF0Y2gudXYodTAsIHYwKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCwgeSwgMCk7XHJcbiAgICAgIHRoaXMuYmF0Y2gudXYodTEsIHYxKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCArIHcsIHkgKyBoLCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC51dih1MCwgdjEpO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4LCB5ICsgaCwgMCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdSZWN0YW5nbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBmaWxsOiBib29sZWFuKXtcclxuICAgICAgdGhpcy5zZXRUZXh0dXJlKHRoaXMucGl4ZWxUZXh0dXJlKTtcclxuXHJcbiAgICAgIHRoaXMuZW5zdXJlU2l6ZSg2KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYmF0Y2guY29sb3IodGhpcy5jb2xvci5yLCB0aGlzLmNvbG9yLmcsIHRoaXMuY29sb3IuYiwgdGhpcy5jb2xvci5hKTtcclxuICAgICAgdGhpcy5iYXRjaC51digwLCAwKTtcclxuXHJcbiAgICAgIHRoaXMuYmF0Y2gudmVydGV4KHgsIHksIDApO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4ICsgdywgeSwgMCk7XHJcbiAgICAgIHRoaXMuYmF0Y2gudmVydGV4KHggKyB3LCB5ICsgaCwgMCk7XHJcblxyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4LCB5LCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCArIHcsIHkgKyBoLCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCwgeSArIGgsIDApO1xyXG4gICB9XHJcblxyXG4gICBzZXRDb2xvclJhdyhyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmNvbG9yLnIgPSByO1xyXG4gICAgICB0aGlzLmNvbG9yLmcgPSBnO1xyXG4gICAgICB0aGlzLmNvbG9yLmIgPSBiO1xyXG4gICAgICB0aGlzLmNvbG9yLmEgPSBhO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNldFRleHR1cmUodGV4dHVyZTogR0xUZXh0dXJlKXtcclxuICAgICAgaWYodGhpcy5jdXJyZW50VGV4dHVyZSAhPT0gdGV4dHVyZSkgdGhpcy5mbHVzaCgpO1xyXG5cclxuICAgICAgdGhpcy5jdXJyZW50VGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgIH1cclxuICAgcHJpdmF0ZSBlbnN1cmVTaXplKG46IG51bWJlcil7XHJcbiAgICAgIGlmKHRoaXMuYmF0Y2gubGVmdCA8IG4pIHRoaXMuZmx1c2goKTtcclxuICAgfVxyXG5cclxuICAgYmVnaW4oKXtcclxuICAgICAgaWYodGhpcy5kcmF3aW5nKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZHJhd2luZyA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIGVuZCgpe1xyXG4gICAgICBpZighdGhpcy5kcmF3aW5nKVxyXG4gICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmZsdXNoKCk7XHJcbiAgICAgIHRoaXMuZHJhd2luZyA9IGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICBmbHVzaCgpe1xyXG4gICAgICBpZighdGhpcy5kcmF3aW5nKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmJhdGNoLmZsdXNoKCk7XHJcbiAgICAgIFxyXG4gICAgICBpZih0aGlzLmJhdGNoLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hdHRyaWJ1dGVzLnBvc2l0aW9uQXR0cmlidXRlLCAzLCBnbC5GTE9BVCwgZmFsc2UsIEdMVmVydGV4QmF0Y2guU3RyaWRlSW5CeXRlcywgR0xWZXJ0ZXhCYXRjaC5Qb3NpdGlvbk9mZnNldEluQnl0ZXMpO1xyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYXR0cmlidXRlcy5jb2xvckF0dHJpYnV0ZSwgNCwgZ2wuRkxPQVQsIGZhbHNlLCBHTFZlcnRleEJhdGNoLlN0cmlkZUluQnl0ZXMsIEdMVmVydGV4QmF0Y2guQ29sb3JPZmZzZXRJbkJ5dGVzKTtcclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmF0dHJpYnV0ZXMudXZBdHRyaWJ1dGUsIDIsIGdsLkZMT0FULCBmYWxzZSwgR0xWZXJ0ZXhCYXRjaC5TdHJpZGVJbkJ5dGVzLCBHTFZlcnRleEJhdGNoLlVWT2Zmc2V0SW5CeXRlcyk7XHJcblxyXG4gICAgICAvLyBFbmFibGUgYWxsXHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYXR0cmlidXRlcy5wb3NpdGlvbkF0dHJpYnV0ZSk7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYXR0cmlidXRlcy5jb2xvckF0dHJpYnV0ZSk7XHJcbiAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KHRoaXMuYXR0cmlidXRlcy51dkF0dHJpYnV0ZSk7XHJcblxyXG4gICAgICAvLyBUT0RPIGlmIHN0YXRlbWVudHMgYW5kIHN0dWZmIDopXHJcbiAgICAgIHRoaXMuc2hhZGVyLnVzZSgpO1xyXG5cclxuICAgICAgdGhpcy5zaGFkZXIuc2V0VW5pZm9ybU1hdHJpeCh0aGlzLmF0dHJpYnV0ZXMubW9kZWxWaWV3VW5pZm9ybSwgdGhpcy5tb2RlbFZpZXdNYXRyaXgpO1xyXG4gICAgICB0aGlzLnNoYWRlci5zZXRVbmlmb3JtTWF0cml4KHRoaXMuYXR0cmlidXRlcy5wcm9qZWN0aW9uVW5pZm9ybSwgdGhpcy5wcm9qZWN0aW9uTWF0cml4KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc2hhZGVyLnNldFVuaWZvcm1Qb3NpdGlvbih0aGlzLmF0dHJpYnV0ZXMuc2NyZWVuU2l6ZVVuaWZvcm0sIHRoaXMuZ2wuY2FudmFzLndpZHRoLCB0aGlzLmdsLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgdGhpcy5zaGFkZXIuc2V0VW5pZm9ybVRleHR1cmUodGhpcy5hdHRyaWJ1dGVzLnRleHR1cmVVbmlmb3JtLCB0aGlzLmN1cnJlbnRUZXh0dXJlKTtcclxuXHJcbiAgICAgIGdsLmRyYXdBcnJheXMoZ2wuVFJJQU5HTEVTLCAwLCB0aGlzLmJhdGNoLmxlbmd0aCk7XHJcbiAgIH1cclxuXHJcbiAgIHNldENhbWVyYShjYW1lcmE6IENhbWVyYSl7XHJcbiAgICAgIHRoaXMuZmx1c2goKTtcclxuXHJcbiAgICAgIGxldCBmbG9vclggPSB0aGlzLmdsLmNhbnZhcy53aWR0aCAvIGNhbWVyYS53aWR0aDtcclxuICAgICAgbGV0IGZsb29yWSA9IHRoaXMuZ2wuY2FudmFzLmhlaWdodCAvIGNhbWVyYS5oZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgc2NhbGVYID0gMiAvIGNhbWVyYS53aWR0aDtcclxuICAgICAgbGV0IHNjYWxlWSA9IC0yIC8gY2FtZXJhLmhlaWdodDtcclxuXHJcbiAgICAgIC8vIFNuYXBwaW5nIHRvIHdob2xlIHBpeGVsc1xyXG4gICAgICBsZXQgb2Zmc2V0WCA9IC1NYXRoLmZsb29yKGNhbWVyYS5jZW50ZXIueCAqIGZsb29yWCkgLyBmbG9vclggICogc2NhbGVYO1xyXG4gICAgICBsZXQgb2Zmc2V0WSA9IC1NYXRoLmZsb29yKGNhbWVyYS5jZW50ZXIueSAqIGZsb29yWSkgLyBmbG9vclkgKiBzY2FsZVk7XHJcblxyXG4gICAgICB0aGlzLnByb2plY3Rpb25NYXRyaXggPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgc2NhbGVYLCAwLCAwLCAwLFxyXG4gICAgICAgICAwLCBzY2FsZVksIDAsIDAsXHJcbiAgICAgICAgIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgIG9mZnNldFgsIG9mZnNldFksIDAsIDFcclxuICAgICAgXSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZVNpemUoKXtcclxuICAgICAgbGV0IGNhbnZhcyA9IHRoaXMuZ2wuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLm9mZnNldFdpZHRoO1xyXG4gICAgICBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLm9mZnNldEhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuZ2wudmlld3BvcnQoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgfVxyXG4gICBcclxuICAgcHVibGljIHNldEFscGhhKGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY29sb3IuYSA9IGE7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFJlc291cmNlTWFuYWdlciB9IGZyb20gXCJncmFwaGljcy9SZXNvdXJjZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCJncmFwaGljcy9UZXh0dXJlXCI7XHJcbmltcG9ydCB7IEdMVGV4dHVyZSB9IGZyb20gXCIuL0dMVGV4dHVyZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdMUmVzb3VyY2VNYW5hZ2VyIGV4dGVuZHMgUmVzb3VyY2VNYW5hZ2Vye1xyXG4gICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgY29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmdsID0gZ2w7XHJcbiAgIH1cclxuXHJcbiAgIGxvYWRUZXh0dXJlUmF3KHNyYzogc3RyaW5nKTogVGV4dHVyZXtcclxuICAgICAgbGV0IHRleHR1cmUgPSBuZXcgR0xUZXh0dXJlKHRoaXMuZ2wpO1xyXG4gICAgICB0aGlzLnRleHR1cmVzW3NyY10gPSB0ZXh0dXJlO1xyXG5cclxuICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWcub25sb2FkID0gKCkgPT57XHJcbiAgICAgICAgIHRleHR1cmUuc2V0RGF0YUZyb21JbWFnZShpbWcpO1xyXG4gICAgICB9O1xyXG4gICAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgICByZXR1cm4gdGV4dHVyZTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgR0xUZXh0dXJlIH0gZnJvbSBcIi4vR0xUZXh0dXJlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgRGVmYXVsdFZlcnRleFNvdXJjZSA9IGBcclxuYXR0cmlidXRlIHZlYzMgcG9zaXRpb247XHJcbmF0dHJpYnV0ZSB2ZWM0IGNvbG9yO1xyXG5hdHRyaWJ1dGUgdmVjMiB1djtcclxuXHJcbnVuaWZvcm0gbWF0NCB1X01hdHJpeE1vZGVsVmlldztcclxudW5pZm9ybSBtYXQ0IHVfTWF0cml4UHJvamVjdGlvbjtcclxuXHJcbnVuaWZvcm0gdmVjMiB1X1NjcmVlblNpemU7XHJcblxyXG52YXJ5aW5nIGhpZ2hwIHZlYzQgdl9Qb3NpdGlvbjtcclxudmFyeWluZyBoaWdocCB2ZWM0IHZfQ29sb3I7XHJcbnZhcnlpbmcgaGlnaHAgdmVjMiB2X1VWO1xyXG5cclxuaGlnaHAgdmVjNCBwaXhlbFBlcmZlY3QoaGlnaHAgdmVjNCB2KXtcclxuICAgdmVjMiBzcCA9IHZlYzIodi54LCB2LnkpO1xyXG5cclxuICAgdmVjMiBzcyA9IHVfU2NyZWVuU2l6ZSAvIDIuMDtcclxuXHJcbiAgIHNwID0gZmxvb3Ioc3AgKiBzcykgLyBzcztcclxuXHJcbiAgIHYueCA9IHNwLng7XHJcbiAgIHYueSA9IHNwLnk7XHJcblxyXG4gICByZXR1cm4gdjtcclxufVxyXG5cclxudm9pZCBtYWluKCkge1xyXG4gICB2X1Bvc2l0aW9uID0gcGl4ZWxQZXJmZWN0KHVfTWF0cml4UHJvamVjdGlvbiAqIHVfTWF0cml4TW9kZWxWaWV3ICogdmVjNChwb3NpdGlvbiwgMS4wKSk7XHJcbiAgIHZfQ29sb3IgPSBjb2xvcjtcclxuICAgdl9VViA9IHV2O1xyXG4gICBcclxuICAgZ2xfUG9zaXRpb24gPSB2X1Bvc2l0aW9uO1xyXG59XHJcbmA7XHJcblxyXG5leHBvcnQgY29uc3QgRGVmYXVsdEZyYWdtZW50U291cmNlID0gYFxyXG52YXJ5aW5nIGhpZ2hwIHZlYzQgdl9Qb3NpdGlvbjtcclxudmFyeWluZyBoaWdocCB2ZWM0IHZfQ29sb3I7XHJcbnZhcnlpbmcgaGlnaHAgdmVjMiB2X1VWO1xyXG5cclxudW5pZm9ybSBzYW1wbGVyMkQgdV9UZXh0dXJlO1xyXG5cclxuaGlnaHAgdmVjNCB2Z2EoaGlnaHAgdmVjNCBjb2xvcil7XHJcbiAgIC8vIExvdyBjb2xvciBwcmVjaXNpb24gOilcclxuICAgY29uc3QgaGlnaHAgZmxvYXQgZGVwdGggPSAyLjA7XHJcbiAgIGNvbG9yLnIgPSBmbG9vcihjb2xvci5yICogZGVwdGgpIC8gZGVwdGg7XHJcbiAgIGNvbG9yLmcgPSBmbG9vcihjb2xvci5nICogZGVwdGgpIC8gZGVwdGg7XHJcbiAgIGNvbG9yLmIgPSBmbG9vcihjb2xvci5iICogZGVwdGgpIC8gZGVwdGg7XHJcblxyXG4gICByZXR1cm4gY29sb3I7XHJcbn1cclxuaGlnaHAgdmVjNCBncmF5KGhpZ2hwIHZlYzQgY29sb3Ipe1xyXG4gICAvLyBMb3cgY29sb3IgcHJlY2lzaW9uIDopXHJcbiAgIGhpZ2hwIGZsb2F0IHZhbHVlID0gKGNvbG9yLnIgKiAwLjQgKyBjb2xvci5nICogMC4zICsgY29sb3IuYiAqIDAuMykgLyAyLjA7XHJcblxyXG4gICBoaWdocCB2ZWM0IHRhcmdldCA9IHZlYzQodmFsdWUsIHZhbHVlLCB2YWx1ZSwgY29sb3IuYSk7XHJcblxyXG4gICBoaWdocCBmbG9hdCBkaXN0ID0gbGVuZ3RoKHZlYzIodl9Qb3NpdGlvbikgKyB2ZWMyKDAuMCwgMC40KSkgKiAyLjA7XHJcblxyXG4gICBkaXN0ID0gZmxvb3IoZGlzdCAqIDMuMCkgLyAzLjA7XHJcblxyXG4gICByZXR1cm4gbWl4KGNvbG9yLCB0YXJnZXQsIGNsYW1wKGRpc3QsIDAuMCwgMS4wKSk7XHJcbiAgIC8vIHJldHVybiB2ZWM0KGRpc3QsIGRpc3QsIGRpc3QsIDEuMCk7XHJcbn1cclxuXHJcbnZvaWQgbWFpbigpIHtcclxuICAgaGlnaHAgdmVjNCBjb2xvciA9IHRleHR1cmUyRCh1X1RleHR1cmUsIHZfVVYpICogdl9Db2xvcjtcclxuXHJcbiAgIC8vIERpc2NhcmQgYWxwaGFcclxuICAgaWYoY29sb3IuYSA8IDAuMDEpIGRpc2NhcmQ7XHJcblxyXG4gICBnbF9GcmFnQ29sb3IgPSAoY29sb3IpO1xyXG59XHJcbmA7XHJcblxyXG50eXBlIFNoYWRlclR5cGUgPSBudW1iZXI7XHJcblxyXG5leHBvcnQgY2xhc3MgR0xTaGFkZXJBdHRyaWJ1dGVTZXR7XHJcbiAgIHBvc2l0aW9uQXR0cmlidXRlIDogbnVtYmVyID0gMDtcclxuICAgY29sb3JBdHRyaWJ1dGUgOiBudW1iZXIgPSAwO1xyXG4gICB1dkF0dHJpYnV0ZSA6IG51bWJlciA9IDA7XHJcblxyXG4gICBtb2RlbFZpZXdVbmlmb3JtOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbnxudWxsID0gbnVsbDtcclxuICAgcHJvamVjdGlvblVuaWZvcm06IFdlYkdMVW5pZm9ybUxvY2F0aW9ufG51bGwgPSBudWxsO1xyXG4gICB0ZXh0dXJlVW5pZm9ybTogV2ViR0xVbmlmb3JtTG9jYXRpb258bnVsbCA9IG51bGw7XHJcbiAgIHNjcmVlblNpemVVbmlmb3JtOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbnxudWxsID0gbnVsbDtcclxuXHJcbiAgIGxvYWQocHJvZ3JhbTogR0xTaGFkZXJQcm9ncmFtKXtcclxuICAgICAgdGhpcy5wb3NpdGlvbkF0dHJpYnV0ZSA9IHByb2dyYW0uZ2V0QXR0cmlidXRlTG9jYXRpb24oXCJwb3NpdGlvblwiKTtcclxuICAgICAgdGhpcy5jb2xvckF0dHJpYnV0ZSA9IHByb2dyYW0uZ2V0QXR0cmlidXRlTG9jYXRpb24oXCJjb2xvclwiKTtcclxuICAgICAgdGhpcy51dkF0dHJpYnV0ZSA9IHByb2dyYW0uZ2V0QXR0cmlidXRlTG9jYXRpb24oXCJ1dlwiKTtcclxuXHJcbiAgICAgIHRoaXMubW9kZWxWaWV3VW5pZm9ybSA9IHByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uKFwidV9NYXRyaXhNb2RlbFZpZXdcIik7XHJcbiAgICAgIHRoaXMucHJvamVjdGlvblVuaWZvcm0gPSBwcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbihcInVfTWF0cml4UHJvamVjdGlvblwiKTtcclxuICAgICAgdGhpcy50ZXh0dXJlVW5pZm9ybSA9IHByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uKFwidV9UZXh0dXJlXCIpO1xyXG4gICAgICB0aGlzLnNjcmVlblNpemVVbmlmb3JtID0gcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb24oXCJ1X1NjcmVlblNpemVcIik7XHJcbiAgIH1cclxufVxyXG5cclxuY2xhc3MgR0xTaGFkZXIge1xyXG4gICBzdGF0aWMgcmVhZG9ubHkgVmVydGV4OiBTaGFkZXJUeXBlID0gMDsgXHJcbiAgIHN0YXRpYyByZWFkb25seSBGcmFnbWVudDogU2hhZGVyVHlwZSA9IDE7IFxyXG5cclxuICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuICAgaWQ6IFdlYkdMU2hhZGVyO1xyXG5cclxuICAgY29tcGlsZWQ6IGJvb2xlYW47XHJcblxyXG4gICBjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB0eXBlOiBTaGFkZXJUeXBlLCBzb3VyY2U6IHN0cmluZyl7XHJcbiAgICAgIHRoaXMuZ2wgPSBnbDtcclxuXHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLmdsLmNyZWF0ZVNoYWRlcih0eXBlID09PSBHTFNoYWRlci5WZXJ0ZXggPyBnbC5WRVJURVhfU0hBREVSIDogZ2wuRlJBR01FTlRfU0hBREVSKSE7XHJcbiAgIFxyXG4gICAgICBnbC5zaGFkZXJTb3VyY2UodGhpcy5pZCwgc291cmNlKTtcclxuICAgICAgZ2wuY29tcGlsZVNoYWRlcih0aGlzLmlkKTtcclxuXHJcbiAgICAgIHRoaXMuY29tcGlsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgaWYgKCFnbC5nZXRTaGFkZXJQYXJhbWV0ZXIodGhpcy5pZCwgZ2wuQ09NUElMRV9TVEFUVVMpKSB7XHJcbiAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0FuIGVycm9yIG9jY3VycmVkIGNvbXBpbGluZyB0aGUgc2hhZGVyczogJyArIGdsLmdldFNoYWRlckluZm9Mb2codGhpcy5pZCkpO1xyXG5cclxuICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICB0aGlzLmdsLmRlbGV0ZVNoYWRlcih0aGlzLmlkKTtcclxuICAgICAgdGhpcy5jb21waWxlZCA9IGZhbHNlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBHTFNoYWRlclByb2dyYW0ge1xyXG4gICBzaGFkZXJzOiBHTFNoYWRlcltdO1xyXG4gICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG4gICBpZDogV2ViR0xQcm9ncmFtO1xyXG4gICBjb21waWxlZDogYm9vbGVhbjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHZlcnRleFNvdXJjZTogc3RyaW5nLCBmcmFnbWVudFNvdXJjZTogc3RyaW5nKSB7XHJcbiAgICAgIHRoaXMuc2hhZGVycyA9IFtdO1xyXG4gICAgICB0aGlzLmdsID0gZ2w7XHJcbiAgICAgIHRoaXMuY29tcGlsZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5zaGFkZXJzLnB1c2gobmV3IEdMU2hhZGVyKGdsLCBHTFNoYWRlci5WZXJ0ZXgsIHZlcnRleFNvdXJjZSkpO1xyXG4gICAgICB0aGlzLnNoYWRlcnMucHVzaChuZXcgR0xTaGFkZXIoZ2wsIEdMU2hhZGVyLkZyYWdtZW50LCBmcmFnbWVudFNvdXJjZSkpO1xyXG4gICBcclxuICAgICAgdGhpcy5pZCA9IHRoaXMuZ2wuY3JlYXRlUHJvZ3JhbSgpITtcclxuXHJcbiAgICAgIHRoaXMuc2hhZGVycy5mb3JFYWNoKHNoYWRlciA9PiB7XHJcbiAgICAgICAgIC8vIFRPRE8gZXJyb3IgY2hlY2tpbmcgYW5kIHNoaXRcclxuICAgICAgICAgZ2wuYXR0YWNoU2hhZGVyKHRoaXMuaWQsIHNoYWRlci5pZCk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBnbC5saW5rUHJvZ3JhbSh0aGlzLmlkKTtcclxuXHJcbiAgICAgIGlmICghZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcih0aGlzLmlkLCBnbC5MSU5LX1NUQVRVUykpIHtcclxuICAgICAgICAgY29uc29sZS5lcnJvcignVW5hYmxlIHRvIGluaXRpYWxpemUgdGhlIHNoYWRlciBwcm9ncmFtOiAnICsgZ2wuZ2V0UHJvZ3JhbUluZm9Mb2codGhpcy5pZCkpO1xyXG5cclxuICAgICAgICAgdGhpcy5kZXN0cm95KCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgdXNlKCl7XHJcbiAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLmlkKTtcclxuICAgfVxyXG5cclxuICAgZ2V0QXR0cmlidXRlTG9jYXRpb24obmFtZTogc3RyaW5nKXtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2wuZ2V0QXR0cmliTG9jYXRpb24odGhpcy5pZCwgbmFtZSk7XHJcbiAgIH1cclxuICAgZ2V0VW5pZm9ybUxvY2F0aW9uKG5hbWU6IHN0cmluZyl7XHJcbiAgICAgIHJldHVybiB0aGlzLmdsLmdldFVuaWZvcm1Mb2NhdGlvbih0aGlzLmlkLCBuYW1lKTtcclxuICAgfVxyXG5cclxuICAgc2V0VW5pZm9ybVZlY3RvcjIodW5pZm9ybTogV2ViR0xVbmlmb3JtTG9jYXRpb258bnVsbCwgdmVjdG9yOiBWZWN0b3IyKXtcclxuICAgICAgaWYodW5pZm9ybSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLnNldFVuaWZvcm1Qb3NpdGlvbih1bmlmb3JtLCB2ZWN0b3IueCwgdmVjdG9yLnkpO1xyXG4gICB9XHJcbiAgIHNldFVuaWZvcm1Qb3NpdGlvbih1bmlmb3JtOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbnxudWxsLCB4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIGlmKHVuaWZvcm0gPT09IG51bGwpIHJldHVybjtcclxuICAgICAgdGhpcy5nbC51bmlmb3JtMmYodW5pZm9ybSwgeCwgeSk7XHJcbiAgIH1cclxuXHJcbiAgIHNldFVuaWZvcm1NYXRyaXgodW5pZm9ybTogV2ViR0xVbmlmb3JtTG9jYXRpb258bnVsbCwgbWF0cml4OiBGbG9hdDMyQXJyYXkpe1xyXG4gICAgICBpZih1bmlmb3JtID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDRmdih1bmlmb3JtLCBmYWxzZSwgbWF0cml4KTtcclxuICAgfVxyXG4gICBzZXRVbmlmb3JtVGV4dHVyZSh1bmlmb3JtOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbnxudWxsLCB0ZXh0dXJlOiBHTFRleHR1cmUpe1xyXG4gICAgICBpZih1bmlmb3JtID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkUwKTtcclxuXHJcbiAgICAgIHRleHR1cmUuYmluZCgpO1xyXG4gICAgICB0aGlzLmdsLnVuaWZvcm0xaSh1bmlmb3JtLCAwKTtcclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICB0aGlzLnNoYWRlcnMuZm9yRWFjaChzaGFkZXIgPT4gc2hhZGVyLmRlc3Ryb3koKSk7XHJcbiAgICAgIHRoaXMuZ2wuZGVsZXRlUHJvZ3JhbSh0aGlzLmlkKTtcclxuICAgICAgdGhpcy5jb21waWxlZCA9IGZhbHNlO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcImdyYXBoaWNzL1RleHR1cmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHTFRleHR1cmUgaW1wbGVtZW50cyBUZXh0dXJle1xyXG4gICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG4gICBpZDogV2ViR0xUZXh0dXJlO1xyXG5cclxuICAgd2lkdGg6IG51bWJlcjtcclxuICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KXtcclxuICAgICAgdGhpcy5nbCA9IGdsO1xyXG5cclxuICAgICAgdGhpcy5pZCA9IGdsLmNyZWF0ZVRleHR1cmUoKSE7XHJcblxyXG4gICAgICB0aGlzLndpZHRoID0gMTtcclxuICAgICAgdGhpcy5oZWlnaHQgPSAxO1xyXG5cclxuICAgICAgdGhpcy5zZXREYXRhKDEsIDEsIG5ldyBVaW50OEFycmF5KFsyNTUsMCwyNTUsIDI1NV0pKTtcclxuXHJcbiAgICAgIHRoaXMuYmluZCgpO1xyXG4gICAgICBcclxuICAgICAgLy8gVE9ETyBtb3ZlIHRoaXMgdG8gY29uc3RydWN0b3JcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICB9XHJcblxyXG4gICBzZXREYXRhKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBkYXRhOiBVaW50OEFycmF5KXtcclxuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuYmluZCgpO1xyXG4gICAgICB0aGlzLmdsLnRleEltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELFxyXG4gICAgICAgICAwLCB0aGlzLmdsLlJHQkEsIHdpZHRoLCBoZWlnaHQsIDAsIFxyXG4gICAgICAgICB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgZGF0YSk7XHJcbiAgIH1cclxuICAgc2V0RGF0YUZyb21JbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCl7XHJcbiAgICAgIHRoaXMud2lkdGggPSBpbWFnZS53aWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLmJpbmQoKTtcclxuICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xyXG4gICB9XHJcblxyXG4gICBiaW5kKCl7XHJcbiAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmlkKTtcclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGhpcy5pZCk7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBjaGVja2VyYm9hcmREYXRhKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKXtcclxuICAgICAgbGV0IGRhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspe1xyXG4gICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoaSArIGogKiB3aWR0aCkgKiA0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGRhcmsgPSAoKGkgKyBqKSAlIDIpID09IDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBkYXJrID8gMTAwIDogMjU1O1xyXG5cclxuICAgICAgICAgICAgZGF0YVtpbmRleCArIDBdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGRhdGFbaW5kZXggKyAxXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBkYXRhW2luZGV4ICsgMl0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgZGF0YVtpbmRleCArIDNdID0gMjU1O1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGNvbG9yRGF0YSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKXtcclxuICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKXtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGkgKyBqICogd2lkdGgpICogNDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRhdGFbaW5kZXggKyAwXSA9IDI1NTtcclxuICAgICAgICAgICAgZGF0YVtpbmRleCArIDFdID0gMjU1O1xyXG4gICAgICAgICAgICBkYXRhW2luZGV4ICsgMl0gPSAyNTU7XHJcbiAgICAgICAgICAgIGRhdGFbaW5kZXggKyAzXSA9IDI1NTtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgIH1cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgR0xWZXJ0ZXhCYXRjaHtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGbG9hdFNpemVJbkJ5dGVzID0gNDtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUG9zaXRpb25TaXplID0gMztcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDb2xvclNpemUgPSA0O1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVWU2l6ZSA9IDI7XHJcbiAgIFxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBvc2l0aW9uT2Zmc2V0ID0gMDtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDb2xvck9mZnNldCA9IEdMVmVydGV4QmF0Y2guUG9zaXRpb25TaXplO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVWT2Zmc2V0ID0gR0xWZXJ0ZXhCYXRjaC5Qb3NpdGlvblNpemUgKyBHTFZlcnRleEJhdGNoLkNvbG9yU2l6ZTtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUG9zaXRpb25PZmZzZXRJbkJ5dGVzID0gR0xWZXJ0ZXhCYXRjaC5Qb3NpdGlvbk9mZnNldCAqIEdMVmVydGV4QmF0Y2guRmxvYXRTaXplSW5CeXRlcztcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDb2xvck9mZnNldEluQnl0ZXMgPSBHTFZlcnRleEJhdGNoLkNvbG9yT2Zmc2V0ICogR0xWZXJ0ZXhCYXRjaC5GbG9hdFNpemVJbkJ5dGVzO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVWT2Zmc2V0SW5CeXRlcyA9IEdMVmVydGV4QmF0Y2guVVZPZmZzZXQgKiBHTFZlcnRleEJhdGNoLkZsb2F0U2l6ZUluQnl0ZXM7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFN0cmlkZSA9IEdMVmVydGV4QmF0Y2guUG9zaXRpb25TaXplICsgR0xWZXJ0ZXhCYXRjaC5Db2xvclNpemUgKyBHTFZlcnRleEJhdGNoLlVWU2l6ZTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTdHJpZGVJbkJ5dGVzID0gR0xWZXJ0ZXhCYXRjaC5TdHJpZGUgKiBHTFZlcnRleEJhdGNoLkZsb2F0U2l6ZUluQnl0ZXM7XHJcblxyXG4gICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgYnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuICAgZGF0YTogRmxvYXQzMkFycmF5O1xyXG4gICBpbmRleDogbnVtYmVyO1xyXG5cclxuICAgdTogbnVtYmVyID0gMDtcclxuICAgdjogbnVtYmVyID0gMDtcclxuICAgcjogbnVtYmVyID0gMTtcclxuICAgZzogbnVtYmVyID0gMTtcclxuICAgYjogbnVtYmVyID0gMTtcclxuICAgYTogbnVtYmVyID0gMTtcclxuXHJcbiAgIGxlbmd0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgIGdldCBsZWZ0KCkgeyByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aCAvIEdMVmVydGV4QmF0Y2guU3RyaWRlSW5CeXRlcyAtIHRoaXMuaW5kZXggLSAxOyB9XHJcblxyXG4gICBjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KXtcclxuICAgICAgdGhpcy5nbCA9IGdsO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSgzICogMTAyNCk7XHJcbiAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG5cclxuICAgICAgdGhpcy5idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKSE7XHJcblxyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5idWZmZXIpO1xyXG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5kYXRhLCBnbC5EWU5BTUlDX0RSQVcpO1xyXG4gICB9XHJcbiAgIFxyXG4gICB1dih1OiBudW1iZXIsIHY6IG51bWJlcil7XHJcbiAgICAgIHRoaXMudSA9IHU7XHJcbiAgICAgIHRoaXMudiA9IHY7XHJcbiAgIH1cclxuICAgXHJcbiAgIGNvbG9yKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuciA9IHI7XHJcbiAgICAgIHRoaXMuZyA9IGc7XHJcbiAgICAgIHRoaXMuYiA9IGI7XHJcbiAgICAgIHRoaXMuYSA9IGE7XHJcbiAgIH1cclxuXHJcbiAgIHZlcnRleCh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKXtcclxuICAgICAgbGV0IGlkeCA9IHRoaXMuaW5kZXggKiBHTFZlcnRleEJhdGNoLlN0cmlkZSArIEdMVmVydGV4QmF0Y2guUG9zaXRpb25PZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLmRhdGFbaWR4ICsgMF0gPSB4O1xyXG4gICAgICB0aGlzLmRhdGFbaWR4ICsgMV0gPSB5O1xyXG4gICAgICB0aGlzLmRhdGFbaWR4ICsgMl0gPSB6O1xyXG4gICAgICBcclxuICAgICAgdGhpcy5kYXRhW2lkeCArIDNdID0gdGhpcy5yO1xyXG4gICAgICB0aGlzLmRhdGFbaWR4ICsgNF0gPSB0aGlzLmc7XHJcbiAgICAgIHRoaXMuZGF0YVtpZHggKyA1XSA9IHRoaXMuYjtcclxuICAgICAgdGhpcy5kYXRhW2lkeCArIDZdID0gdGhpcy5hO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5kYXRhW2lkeCArIDddID0gdGhpcy51O1xyXG4gICAgICB0aGlzLmRhdGFbaWR4ICsgOF0gPSB0aGlzLnY7XHJcblxyXG4gICAgICAvLyBUT0RPIHNob3VsZCB0aGlzIHN1Ym1pdD9cclxuICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICB9XHJcblxyXG4gICBmbHVzaCgpe1xyXG4gICAgICBpZih0aGlzLmluZGV4ID09PSAwKSByZXR1cm47XHJcbiAgICAgIFxyXG4gICAgICAvLyBUaGlzIGlzIG5pY2UgdG8gb3B0aW1pemUgd2l0aCB3ZWJnbDIgdG8gZ2V0IGJ1ZmZlcnN1YmRhdGEgd2l0aCBvZmZzZXRzIGFuZCB3aGF0bm90XHJcbiAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdGhpcy5idWZmZXIpO1xyXG5cclxuXHJcbiAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgMCwgdGhpcy5kYXRhLnN1YmFycmF5KDAsIHRoaXMuaW5kZXggKiBHTFZlcnRleEJhdGNoLlN0cmlkZSkpO1xyXG5cclxuICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmluZGV4O1xyXG4gICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICB0aGlzLmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmJ1ZmZlcik7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgQ2hlc3RHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9DaGVzdEdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgQ29sbGlkZXJHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9Db2xsaWRlckdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgRmVhdGhlckdhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL0ZlYXRoZXJHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IExldmVsTWFuYWdlciB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvTGV2ZWxNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJGaW5pc2hHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllclNwYXduR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyU3Bhd25HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFNwaWtlc0dhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL1NwaWtlc0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgRmFsbGluZ0Jsb2NrR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvRmFsbGluZ0Jsb2NrR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCJzY2VuZS9TY2VuZVwiO1xyXG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSBcInRpbGVtYXAvVGlsZU1hcFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwidXRpbC9MaXN0XCI7XHJcbmltcG9ydCB7IE1vdmluZ1BsYXRmb3JtR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvTW92aW5nUGxhdGZvcm1HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBhdGhNYW5hZ2VyIH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9QYXRoTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBQYXRoIH0gZnJvbSBcIm1hdGgvUGF0aFwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBKdW1wUGxhdGZvcm1HYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9KdW1wUGxhdGZvcm1HYW1lT2JqZWN0XCI7XHJcblxyXG4vLyBGdWNrIHRoaXMgYnV0IHdoYXRldmVyXHJcbmZ1bmN0aW9uIGluaXRNb2RhbChlbGVtZW50OiBIVE1MRWxlbWVudCl7XHJcbiAgIGxldCBjbG9zZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcclxuXHJcbiAgIGNsb3NlPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xyXG5cclxuICAgICAgLy8gWWVzIHRoaXMgbWFrZXMgYSBsb3Qgb2Ygc2Vuc2UgaGVyZSA6KVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0TW9kYWxzKCl7XHJcbiAgIGxldCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpO1xyXG5cclxuICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4gaW5pdE1vZGFsKG1vZGFsIGFzIEhUTUxFbGVtZW50KSk7XHJcbn1cclxuXHJcbi8vIEluaXQgdGhlIGRhbW4gZ2FtZVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKT0+e1xyXG4gICBpbml0TW9kYWxzKCk7XHJcblxyXG4gICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAvLyBpbml0V2ViZ2woY2FudmFzKTtcclxuXHJcbiAgIC8vIHJldHVybjtcclxuXHJcbiAgIGxldCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcclxuICAgZ2FtZS5ydW4oKTtcclxuICAgXHJcbiAgIGxldCBzZXRMZXZlbCA9IGFzeW5jIChsZXZlbDogc3RyaW5nKSA9PntcclxuICAgICAgbGV0IHNjZW5lID0gbmV3IFNjZW5lKCk7XHJcbiAgIFxyXG4gICAgICBsZXQgcGF0aE1hbmFnZXIgPSBuZXcgUGF0aE1hbmFnZXIoKTtcclxuICAgXHJcbiAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QocGF0aE1hbmFnZXIpO1xyXG4gICBcclxuICAgICAgc2NlbmUudGlsZW1hcCA9IGF3YWl0IFRpbGVNYXAuZnJvbVRpbGVkTWFwRG93bmxvYWQobGV2ZWwsIGdhbWUucmVzb3VyY2VzLCAob2JqKSA9PiB7XHJcbiAgICAgICAgIGlmKG9iai50eXBlID09PSBcIkNvbGxpZGVyXCIgfHwgb2JqLnR5cGUgPT09IFwiUGxhdGZvcm1Db2xsaWRlclwiKXtcclxuICAgICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgQ29sbGlkZXJHYW1lT2JqZWN0KEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKG9iai50eXBlID09PSBcIkxldmVsTWFuYWdlclwiKXtcclxuICAgICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgTGV2ZWxNYW5hZ2VyKCkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKG9iai50eXBlID09PSBcIlBsYXllclNwYXduXCIpe1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBQbGF5ZXJTcGF3bkdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYob2JqLnR5cGUgPT09IFwiRmFsbGluZ0Jsb2NrXCIpe1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBGYWxsaW5nQmxvY2tHYW1lT2JqZWN0KEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKG9iai50eXBlID09PSBcIk1vdmluZ1BsYXRmb3JtXCIpe1xyXG4gICAgICAgICAgICBsZXQgcGF0aE5hbWUgPSBcIlwiO1xyXG4gICAgICAgICAgICBsZXQgdmVsb2NpdHkgPSAzMDtcclxuICAgICAgICAgICAgbGV0IG9mZnNldCA9IDA7XHJcbiAgIFxyXG4gICAgICAgICAgICBpZihvYmoucHJvcGVydGllcyAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYocHJvcC5uYW1lID09PSBcInBhdGhcIikgcGF0aE5hbWUgPSBwcm9wLnZhbHVlIGFzIHN0cmluZztcclxuICAgICAgICAgICAgICAgICAgaWYocHJvcC5uYW1lID09PSBcInZlbG9jaXR5XCIpIHZlbG9jaXR5ID0gcHJvcC52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgIGlmKHByb3AubmFtZSA9PT0gXCJvZmZzZXRcIikgb2Zmc2V0ID0gcHJvcC52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgIFxyXG4gICAgICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBNb3ZpbmdQbGF0Zm9ybUdhbWVPYmplY3QocGF0aE5hbWUsIHZlbG9jaXR5LCBvZmZzZXQsIEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKG9iai50eXBlID09PSBcIkNoZWNrcG9pbnRcIil7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0KEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKG9iai50eXBlID09PSBcIkp1bXBQbGF0Zm9ybVwiKXtcclxuICAgICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgSnVtcFBsYXRmb3JtR2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihvYmoudHlwZSA9PT0gXCJGZWF0aGVyXCIpe1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBGZWF0aGVyR2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihvYmoudHlwZSA9PT0gXCJQbGF5ZXJGaW5pc2hcIil7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IFBsYXllckZpbmlzaEdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYob2JqLnR5cGUgPT09IFwiQ2hlc3RcIil7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IENoZXN0R2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihvYmoudHlwZSA9PT0gXCJTcGlrZXNcIil7XHJcbiAgICAgICAgICAgIGxldCBzcGlrZXMgPSBuZXcgU3Bpa2VzR2FtZU9iamVjdChcclxuICAgICAgICAgICAgICAgQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpLCBcclxuICAgICAgICAgICAgICAgTGlzdC5oYXMob2JqLnByb3BlcnRpZXMsIHByb3AgPT4geyByZXR1cm4gcHJvcC5uYW1lID09PSBcInNocmlua1wiICYmIHByb3AudmFsdWUgPT09IHRydWU7IH0pXHJcbiAgICAgICAgICAgICk7XHJcbiAgIFxyXG4gICAgICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KHNwaWtlcyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYob2JqLnR5cGUgPT09IFwiUGF0aFwiKXtcclxuICAgICAgICAgICAgbGV0IHBhdGggPSBuZXcgUGF0aCgpO1xyXG4gICBcclxuICAgICAgICAgICAgb2JqLnBvbHlsaW5lLmZvckVhY2gobGluZSA9PiB7XHJcbiAgICAgICAgICAgICAgIHBhdGguYWRkKG5ldyBWZWN0b3IyKGxpbmUueCArIG9iai54LCBsaW5lLnkgKyBvYmoueSkpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgXHJcbiAgICAgICAgICAgIHBhdGhNYW5hZ2VyLnBhdGhzW29iai5uYW1lXSA9IHBhdGg7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIHNjZW5lLnBoeXNpY3MubGF5ZXJzID0gc2NlbmUudGlsZW1hcC5jb2xsaWRlcnM7XHJcbiAgICAgIFxyXG4gICAgICBnYW1lLnNjZW5lID0gc2NlbmU7XHJcbiAgICAgIGdhbWUuc2NlbmUuaW5pdChnYW1lKTtcclxuICAgfVxyXG5cclxuICAgc2V0TGV2ZWwoXCJhc3NldHMvbGV2ZWxzL2xldmVsNC5qc29uXCIpO1xyXG5cclxuICAgKHdpbmRvdyBhcyBhbnkpLnNldExldmVsID0gc2V0TGV2ZWw7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gXCJzaWduYWxzL1NpZ25hbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWx0aENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgaGVhbHRoOiBudW1iZXIgPSAzO1xyXG5cclxuICAgb25EYW1hZ2U6IFNpZ25hbDxIZWFsdGhDb21wb25lbnQ+ID0gbmV3IFNpZ25hbDxIZWFsdGhDb21wb25lbnQ+KCk7XHJcbiAgIG9uRGVhdGg6IFNpZ25hbDxIZWFsdGhDb21wb25lbnQ+ID0gbmV3IFNpZ25hbDxIZWFsdGhDb21wb25lbnQ+KCk7XHJcblxyXG4gICBnZXQgYWxpdmUoKSB7IHJldHVybiB0aGlzLmhlYWx0aCA+IDA7IH1cclxuICAgZ2V0IGRlYWQoKSB7IHJldHVybiB0aGlzLmhlYWx0aCA8PSAwOyB9XHJcblxyXG4gICBkYW1hZ2UoYW1vdW50OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmhlYWx0aCAtPSBhbW91bnQ7XHJcblxyXG4gICAgICB0aGlzLm9uRGFtYWdlLmVtaXQodGhpcyk7XHJcbiAgICAgIFxyXG4gICAgICBpZih0aGlzLmRlYWQpe1xyXG4gICAgICAgICB0aGlzLm9uRGVhdGguZW1pdCh0aGlzKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gXCJzaWduYWxzL1NpZ25hbFwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vSW50ZXJhY3RvckNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludGVyYWN0YWJsZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgYm9keSE6IFJpZ2lkYm9keTtcclxuXHJcbiAgIG9uSW50ZXJhY3Q6IFNpZ25hbDxJbnRlcmFjdG9yQ29tcG9uZW50PjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMub25JbnRlcmFjdCA9IG5ldyBTaWduYWw8SW50ZXJhY3RvckNvbXBvbmVudD4oKTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoY29tcG9uZW50ID0+IGNvbXBvbmVudCBpbnN0YW5jZW9mIFJpZ2lkYm9keSkgYXMgUmlnaWRib2R5O1xyXG4gICB9XHJcblxyXG4gICBpbnRlcmFjdChpbnRlcmFjdG9yOiBJbnRlcmFjdG9yQ29tcG9uZW50KXtcclxuICAgICAgdGhpcy5vbkludGVyYWN0LmVtaXQoaW50ZXJhY3Rvcik7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBjYW5JbnRlcmFjdCgpe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG5cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInNjZW5lL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vSW50ZXJhY3RhYmxlQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3RvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgYm9keSE6IFJpZ2lkYm9keTtcclxuICAgaG92ZXJzOiBTZXQ8SW50ZXJhY3RhYmxlQ29tcG9uZW50PjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMuaG92ZXJzID0gbmV3IFNldDxJbnRlcmFjdGFibGVDb21wb25lbnQ+KCk7XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcbiAgICAgIHRoaXMuYm9keSA9IHRoaXMuZ2FtZU9iamVjdC5maW5kQ29tcG9uZW50KGNvbXBvbmVudCA9PiBjb21wb25lbnQgaW5zdGFuY2VvZiBSaWdpZGJvZHkpIGFzIFJpZ2lkYm9keTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5vbkNvbGxpc2lvbi5saXN0ZW4odGhpcy5vbkNvbGxpc2lvbi5iaW5kKHRoaXMpKTtcclxuICAgfVxyXG5cclxuICAgaW50ZXJhY3QoKXtcclxuICAgICAgdGhpcy5ob3ZlcnMuZm9yRWFjaChob3ZlciA9PiB7XHJcbiAgICAgICAgIGlmKGhvdmVyLmNhbkludGVyYWN0KXtcclxuICAgICAgICAgICAgaG92ZXIuaW50ZXJhY3QodGhpcyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgbGV0IHJlbW92ZUxpc3Q6IEludGVyYWN0YWJsZUNvbXBvbmVudFtdID0gW107XHJcblxyXG4gICAgICB0aGlzLmhvdmVycy5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgLy8gSWYgbm8gbG9uZ2VyIGNvbGxpZGVzIVxyXG4gICAgICAgICBpZighdmFsdWUuYm9keS5jb2xsaWRlcyh0aGlzLmJvZHkpKXtcclxuICAgICAgICAgICAgcmVtb3ZlTGlzdC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlbW92ZUxpc3QuZm9yRWFjaChpdGVtID0+IHRoaXMuaG92ZXJzLmRlbGV0ZShpdGVtKSk7XHJcbiAgIH1cclxuXHJcbiAgIG9uQ29sbGlzaW9uKG90aGVyOiBSaWdpZGJvZHkpe1xyXG4gICAgICBsZXQgaW50ZXJhY3Rpb24gPSBvdGhlci5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoY29tcG9uZW50ID0+IGNvbXBvbmVudCBpbnN0YW5jZW9mIEludGVyYWN0YWJsZUNvbXBvbmVudCkgYXMgSW50ZXJhY3RhYmxlQ29tcG9uZW50fHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIGlmKGludGVyYWN0aW9uID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuaG92ZXJzLmFkZChpbnRlcmFjdGlvbik7XHJcbiAgIH1cclxufSIsIlxyXG4vLyBXaHkgbm90IGp1c3QgUmlnaWRCb2R5PyBcclxuLy8gV2VsbDogYmVjYXVzZSB0aGlzIG1vdmluZyBncm91bmQgY29tcG9uZW50IGNhbiBhY3R1YWxseSBiZSBsaWtlIGEgbW92aW5nIHBsYXRmb3JtIHdpdGhvdXQgYWN0dWFsbHkgbW92aW5nIGl0c2VsZlxyXG4vLyBTbyB0aGluZ3MgbGlrZSBhIGNvbnZlcnllciBiZWx0IGNvdWxkIGJlIGltcGxlbWVudGVkIHVzaW5nIHRoaXMgYXBwcm9hY2guXHJcblxyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcblxyXG4vLyBMZXNzIHBoeXNpY3MgY29kZSwgbW9yZSBjbGllbnQgY29kZSwgbW9yZSBiZXR0ZXIgOilcclxuZXhwb3J0IGNsYXNzIE1vdmluZ0dyb3VuZENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgdmVsb2NpdHk6IFZlY3RvcjI7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy52ZWxvY2l0eSA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWVwYWRJbnB1dCwgS2V5Ym9hcmQgfSBmcm9tIFwiZW5naW5lL0lucHV0XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJJbnB1dENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgZGlyZWN0aW9uOiBudW1iZXIgPSAwO1xyXG5cclxuICAganVtcFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAganVtcERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGRhc2hQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBpbnRlcmFjdFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5qdW1wUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRhc2hQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaW50ZXJhY3RQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuanVtcERvd24gPSBmYWxzZTtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG5cclxuICAgICAgLy8gVE9ETyBhY3R1YWxseSBzd2l0Y2ggYmV0d2VlbiBjb250cm9sbGVycyBpbnN0ZWFkIG9mIHRoaXMgaGFsZiBiYWtlZCBoYWxmIGFzc2VkIHNvbHV0aW9uXHJcbiAgICAgIHRoaXMuZ2FtZS5pbnB1dC5nYW1lcGFkcy5mb3JFYWNoKHBhZCA9PiB7XHJcbiAgICAgICAgIGlmKHBhZC5pc0J1dHRvblByZXNzZWQoR2FtZXBhZElucHV0LkJ1dHRvbkEpKXtcclxuICAgICAgICAgICAgdGhpcy5qdW1wUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYocGFkLmlzQnV0dG9uUHJlc3NlZChHYW1lcGFkSW5wdXQuQnV0dG9uWCkpe1xyXG4gICAgICAgICAgICB0aGlzLmludGVyYWN0UHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYocGFkLmlzQnV0dG9uUHJlc3NlZChHYW1lcGFkSW5wdXQuQnV0dG9uUmlnaHRUcmlnZ2VyKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKHBhZC5pc0J1dHRvbkRvd24oR2FtZXBhZElucHV0LkJ1dHRvbkEpKXtcclxuICAgICAgICAgICAgdGhpcy5qdW1wRG93biA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcGFkLmxlZnRBeGlzWDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleVNwYWNlKSkgdGhpcy5qdW1wUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleURvd24oS2V5Ym9hcmQuS2V5U3BhY2UpKSB0aGlzLmp1bXBEb3duID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlDKSkgdGhpcy5kYXNoUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5WCkpIHRoaXMuaW50ZXJhY3RQcmVzc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleURvd24oS2V5Ym9hcmQuS2V5QXJyb3dMZWZ0KSkgdGhpcy5kaXJlY3Rpb24gPSAtMTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5RG93bihLZXlib2FyZC5LZXlBcnJvd1JpZ2h0KSkgdGhpcy5kaXJlY3Rpb24gPSAxO1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5RG93bihLZXlib2FyZC5LZXlBKSkgdGhpcy5kaXJlY3Rpb24gPSAtMTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5RG93bihLZXlib2FyZC5LZXlEKSkgdGhpcy5kaXJlY3Rpb24gPSAxO1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlDb21tYSkpIHRoaXMuanVtcFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlEb3duKEtleWJvYXJkLktleUNvbW1hKSkgdGhpcy5qdW1wRG93biA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5UGVyaW9kKSkgdGhpcy5kYXNoUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5U2xhc2gpKSB0aGlzLmludGVyYWN0UHJlc3NlZCA9IHRydWU7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgU3ByaXRlLCBTcHJpdGVTaGVldCB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0YWJsZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdG9yQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0b3JDb21wb25lbnRcIjtcclxuaW1wb3J0IElzbGFuZFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL0lzbGFuZFJlc291cmNlc1wiO1xyXG5pbXBvcnQgUmVzb3VyY2VzIGZyb20gXCJpc2xhbmQvSXNsYW5kUmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL0JveENvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlc3RHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuICAgaW50ZXJhY3RhYmxlOiBJbnRlcmFjdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICBjbG9zZWQhOiBTcHJpdGU7XHJcbiAgIG9wZW4hOiBTcHJpdGU7XHJcblxyXG4gICBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBJbnRlcmFjdGFibGVDb21wb25lbnQoKSk7XHJcblxyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZS5vbkludGVyYWN0Lmxpc3Rlbih0aGlzLm9uSW50ZXJhY3QuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICB0aGlzLmJvZHkuY29sbGlkZXIgPSBCb3hDb2xsaWRlci5mcm9tQUFCQihhYWJiKTtcclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuICAgICAgXHJcbiAgICAgIGxldCBvYmplY3RTaGVldCA9IGdhbWUucmVzb3VyY2VzLmxvYWRTcHJpdGVTaGVldChJc2xhbmRSZXNvdXJjZXMuU2hlZXRPYmplY3RzKTtcclxuXHJcbiAgICAgIHRoaXMuY2xvc2VkID0gb2JqZWN0U2hlZXQuZ2V0U3ByaXRlKDAsIDY0LCAxNiwgMTYpO1xyXG4gICAgICB0aGlzLm9wZW4gPSBvYmplY3RTaGVldC5nZXRTcHJpdGUoMTYsIDY0LCAxNiwgMTYpO1xyXG4gICB9XHJcblxyXG4gICBvbkludGVyYWN0KGludGVyYWN0b3I6IEludGVyYWN0b3JDb21wb25lbnQpe1xyXG4gICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBncmFwaGljcy5kcmF3U3ByaXRlU2ltcGxlKHRoaXMuaXNPcGVuID8gdGhpcy5vcGVuIDogdGhpcy5jbG9zZWQsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxpZGVyR2FtZU9iamVjdCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uYXBwbHkoYWFiYi54LCBhYWJiLnkpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5zb2xpZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IElzbGFuZFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL0lzbGFuZFJlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBSZXNldGFibGVHYW1lT2JqZWN0IH0gZnJvbSBcIi4vUmVzZXRhYmxlR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhbGxpbmdCbG9ja0dhbWVPYmplY3QgZXh0ZW5kcyBSZXNldGFibGVHYW1lT2JqZWN0e1xyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuICAgYm9keTogUmlnaWRib2R5O1xyXG4gICBzcHJpdGUhOiBTcHJpdGU7XHJcblxyXG4gICBmYWxsaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICByZW1vdmVUaW1lcjogbnVtYmVyID0gMTtcclxuXHJcbiAgIHJlc3Bhd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgcmVzcGF3blRpbWVyOiBudW1iZXIgPSAxO1xyXG5cclxuICAgYW5pbWF0aW9uVGltZXI6IG51bWJlciA9IDA7XHJcbiAgIG9mZnNldDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uYXBwbHkoYWFiYi54LCBhYWJiLnkpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5zb2xpZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ib2R5Lm9uQ29sbGlzaW9uLmxpc3Rlbigob3RoZXIpPT57XHJcbiAgICAgICAgIGlmKHRoaXMuZmFsbGluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy50aW1lciA9IDAuNjtcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcblxyXG4gICAgICB0aGlzLnNwcml0ZSA9IGdhbWUucmVzb3VyY2VzLmxvYWRTcHJpdGVTaGVldChJc2xhbmRSZXNvdXJjZXMuU2hlZXRPYmplY3RzKS5nZXRTcHJpdGUoMCwgOTYsIDE2LCAxNik7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYoIXRoaXMuZmFsbGluZykgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLnRpbWVyIC09IGRlbHRhO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25UaW1lciAtPSBkZWx0YTtcclxuXHJcbiAgICAgIGlmKHRoaXMuYW5pbWF0aW9uVGltZXIgPCAwKXtcclxuICAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lciA9IDAuMDc7XHJcbiAgICAgICAgIHRoaXMub2Zmc2V0LnggPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMudGltZXIgPiAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLm9mZnNldC54ID0gMDtcclxuICAgICAgdGhpcy5vZmZzZXQueSA9IDA7XHJcblxyXG4gICAgICB0aGlzLmJvZHkuc29saWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlVGltZXIgLT0gZGVsdGE7XHJcblxyXG4gICAgICBpZih0aGlzLnJlbW92ZVRpbWVyIDwgMCkge1xyXG4gICAgICAgICAvLyB0aGlzLnNjZW5lLnJlbW92ZUdhbWVPYmplY3QodGhpcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcmVzZXQoKXtcclxuICAgICAgc3VwZXIucmVzZXQoKTtcclxuXHJcbiAgICAgIHRoaXMub2Zmc2V0LnggPSAwO1xyXG4gICAgICB0aGlzLm9mZnNldC55ID0gMDtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgdGhpcy5yZW1vdmVUaW1lciA9IDE7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkuc29saWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmJvZHkudXNlRHluYW1pY0NvbGxpc2lvbnMgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5yZXNwYXduVGltZXIgPSAxO1xyXG4gICB9XHJcblxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYoIXRoaXMuZmFsbGluZyB8fCB0aGlzLnRpbWVyID4gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgKz0gMC4yNSAqIDYwICogNjAgKiBkZWx0YTtcclxuXHJcbiAgICAgIHRoaXMucmVzcGF3blRpbWVyIC09IGRlbHRhO1xyXG4gICAgICBpZih0aGlzLnJlc3Bhd25UaW1lciA8IDAgJiYgdGhpcy5yZXNwYXduKSB0aGlzLnJlc2V0KCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgaWYodGhpcy5yZW1vdmVUaW1lciA8IDApIHJldHVybjtcclxuICAgICAgXHJcbiAgICAgIGdyYXBoaWNzLnNldEFscGhhKHRoaXMucmVtb3ZlVGltZXIpO1xyXG4gICAgICBncmFwaGljcy5kcmF3U3ByaXRlKHRoaXMuc3ByaXRlLCB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi54ICsgdGhpcy5vZmZzZXQueCwgdGhpcy50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueSArIHRoaXMub2Zmc2V0LnkpO1xyXG4gICAgICBncmFwaGljcy5zZXRBbHBoYSgxKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiZ3JhcGhpY3MvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IElzbGFuZFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL0lzbGFuZFJlc291cmNlc1wiO1xyXG5pbXBvcnQgUmVzb3VyY2VzIGZyb20gXCJpc2xhbmQvSXNsYW5kUmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL0JveENvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllckdhbWVPYmplY3QgfSBmcm9tIFwiLi9QbGF5ZXJHYW1lT2JqZWN0XCI7XHJcblxyXG4vLyBUT0RPIHBsYXllciBwaWNrdXAgZ2FtZW9iamVjdCBvciBzb21ldGhpbmdcclxuZXhwb3J0IGNsYXNzIEZlYXRoZXJHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuXHJcbiAgIHVzZWRTcHJpdGUhOiBTcHJpdGU7XHJcbiAgIHVudXNlZFNwcml0ZSE6IFNwcml0ZTtcclxuXHJcbiAgIGlzVXNlZDogYm9vbGVhbjtcclxuICAgdXNlZFRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICBlZmZlY3QhOiBBbmltYXRpb247XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uYXBwbHkoYWFiYi5jZW50ZXJYLCBhYWJiLmNlbnRlclkpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcblxyXG4gICAgICBsZXQgY29sbGlkZXIgPSBCb3hDb2xsaWRlci5mcm9tQUFCQihhYWJiKTtcclxuICAgICAgXHJcbiAgICAgIGNvbGxpZGVyLm9mZnNldC5hcHBseSg2LCA2KTtcclxuICAgICAgY29sbGlkZXIuc2l6ZS5hcHBseSgxMiwgMTIpO1xyXG5cclxuXHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IGNvbGxpZGVyO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5pc1VzZWQgPSBmYWxzZTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keS5vbkNvbGxpc2lvbi5saXN0ZW4odGhpcy5vbkNvbGxpc2lvbi5iaW5kKHRoaXMpKTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuICAgICAgXHJcbiAgICAgIGxldCBzaGVldEVmZmVjdHMgPSBnYW1lLnJlc291cmNlcy5sb2FkU3ByaXRlU2hlZXQoSXNsYW5kUmVzb3VyY2VzLlNoZWV0RWZmZWN0cyk7XHJcbiAgICAgIGxldCBzaGVldE9iamVjdHMgPSBnYW1lLnJlc291cmNlcy5sb2FkU3ByaXRlU2hlZXQoSXNsYW5kUmVzb3VyY2VzLlNoZWV0T2JqZWN0cyk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmVmZmVjdCA9IHNoZWV0RWZmZWN0cy5nZXRBbmltYXRpb24oMCwgODAsIDE2LCAxNiwgNCkuY2VudGVyKCk7XHJcbiAgICAgIHRoaXMuZWZmZWN0LmZyYW1lUmF0ZSA9IDEyO1xyXG4gICAgICBcclxuICAgICAgdGhpcy51bnVzZWRTcHJpdGUgPSBzaGVldE9iamVjdHMuZ2V0U3ByaXRlKDAsIDgwLCAxNiwgMTYpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLnVzZWRTcHJpdGUgPSBzaGVldE9iamVjdHMuZ2V0U3ByaXRlKDE2LCA4MCwgMTYsIDE2KS5jZW50ZXIoKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBpZih0aGlzLnVzZWRUaW1lIDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy51c2VkVGltZSAtPSBkZWx0YTtcclxuXHJcbiAgICAgIGlmKHRoaXMudXNlZFRpbWUgPCAwKXtcclxuICAgICAgICAgdGhpcy5pc1VzZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgIC8vIFRPRE8gYWRkIGFuaW1hdGlvblxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIG9uQ29sbGlzaW9uKG90aGVyOiBSaWdpZGJvZHkpe1xyXG4gICAgICBpZighdGhpcy5pc1VzZWQgJiYgb3RoZXIuZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFBsYXllckdhbWVPYmplY3Qpe1xyXG4gICAgICAgICBvdGhlci5nYW1lT2JqZWN0LmNhbkRvdWJsZUp1bXAgPSB0cnVlO1xyXG4gICAgICAgICBvdGhlci5nYW1lT2JqZWN0LmNhbkRhc2ggPSB0cnVlOyAvL0FmdGVyIGRvdWJsZWp1bXAsIHlvdSBnZXQgYW5vdGhlciBkYXNoIVxyXG5cclxuICAgICAgICAgdGhpcy5pc1VzZWQgPSB0cnVlO1xyXG4gICAgICAgICB0aGlzLnVzZWRUaW1lID0gMTtcclxuXHJcbiAgICAgICAgIHRoaXMuc2NlbmUucGFydGljbGVTeXN0ZW0uYWRkUGFydGljbGUodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSwgdGhpcy5lZmZlY3QpO1xyXG5cclxuICAgICAgICAgLy8gVE9ETyBhZGQgYW5pbWF0aW9uXHJcbiAgICAgIH1cclxuICAgfSBcclxuXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZVNpbXBsZSh0aGlzLmlzVXNlZCA/IHRoaXMudXNlZFNwcml0ZSA6IHRoaXMudW51c2VkU3ByaXRlLCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcbmltcG9ydCBJc2xhbmRSZXNvdXJjZXMgZnJvbSBcImlzbGFuZC9Jc2xhbmRSZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyR2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllckdhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBKdW1wUGxhdGZvcm1HYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuXHJcbiAgIHNwcml0ZSE6IFNwcml0ZTtcclxuXHJcbiAgIGdyYXZpdHk6IG51bWJlciA9IDAuMjUgKiA2MCAqIDYwO1xyXG4gICBib3VuY3luZXNzOiBudW1iZXIgPSAwLjQ7XHJcbiAgIHZlbG9jaXR5OiBudW1iZXIgPSAwO1xyXG4gICBvZmZzZXQ6IG51bWJlciA9IDA7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIC8vIEp1c3Qgd2hhdGV2ZXIgbWFuLlxyXG4gICAgICBhYWJiLnRvcCArPSAxMjtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uYXBwbHkoYWFiYi54LCBhYWJiLnkpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG4gICAgICB0aGlzLmJvZHkudXNlRHluYW1pY0NvbGxpc2lvbnMgPSB0cnVlO1xyXG4gICAgICB0aGlzLmJvZHkub25Db2xsaXNpb24ubGlzdGVuKG90aGVyID0+IHtcclxuICAgICAgICAgbGV0IG9mZnNldCA9IG90aGVyLmJvdW5kaW5nQm94LmJvdHRvbSAtIG90aGVyLnRyYW5zZm9ybS5wb3NpdGlvbi55O1xyXG4gICAgICAgICBvdGhlci50cmFuc2Zvcm0ucG9zaXRpb24ueSA9IGFhYmIudG9wIC0gb2Zmc2V0O1xyXG4gICAgICAgICBvdGhlci52ZWxvY2l0eS55ID0gLTMuNSAqIDYwO1xyXG4gICAgICAgICB0aGlzLnZlbG9jaXR5ID0gLTMuNSAqIDYwO1xyXG5cclxuICAgICAgICAgaWYob3RoZXIuZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFBsYXllckdhbWVPYmplY3Qpe1xyXG4gICAgICAgICAgICBvdGhlci5nYW1lT2JqZWN0LmNhbkRhc2ggPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgc3VwZXIuZml4ZWRVcGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgdGhpcy52ZWxvY2l0eSArPSB0aGlzLmdyYXZpdHkgKiBkZWx0YTtcclxuICAgICAgdGhpcy5vZmZzZXQgKz0gdGhpcy52ZWxvY2l0eSAqIGRlbHRhO1xyXG5cclxuICAgICAgaWYodGhpcy5vZmZzZXQgPiAxMCkge1xyXG4gICAgICAgICB0aGlzLm9mZnNldCA9IDEwO1xyXG4gICAgICAgICBpZih0aGlzLnZlbG9jaXR5ID4gMCkgdGhpcy52ZWxvY2l0eSA9IC10aGlzLnZlbG9jaXR5ICogdGhpcy5ib3VuY3luZXNzO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMub2Zmc2V0IDwgMCl7XHJcbiAgICAgICAgIHRoaXMub2Zmc2V0ID0gMDtcclxuICAgICAgICAgaWYodGhpcy52ZWxvY2l0eSA8IDApIHRoaXMudmVsb2NpdHkgPSAtdGhpcy52ZWxvY2l0eSAqIHRoaXMuYm91bmN5bmVzcztcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBzdXBlci5pbml0KGdhbWUpO1xyXG5cclxuICAgICAgbGV0IHNoZWV0ID0gZ2FtZS5yZXNvdXJjZXMubG9hZFNwcml0ZVNoZWV0KElzbGFuZFJlc291cmNlcy5TaGVldE9iamVjdHMpO1xyXG5cclxuICAgICAgdGhpcy5zcHJpdGUgPSBzaGVldC5nZXRTcHJpdGUoMCwgMTI4ICsgMTIsIDE2LCA0KTtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBncmFwaGljcy5kcmF3U3ByaXRlKHRoaXMuc3ByaXRlLCB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi55ICsgdGhpcy5vZmZzZXQgLSAxMCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR2FtZXBhZElucHV0LCBLZXlib2FyZCB9IGZyb20gXCJlbmdpbmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgSGVhbHRoQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0hlYWx0aENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwidXRpbC9UaW1lXCI7XHJcbmltcG9ydCB7IFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0IH0gZnJvbSBcIi4vUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyRmluaXNoR2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllckZpbmlzaEdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyR2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllckdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyU3Bhd25HYW1lT2JqZWN0IH0gZnJvbSBcIi4vUGxheWVyU3Bhd25HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFJlc2V0YWJsZUdhbWVPYmplY3QgfSBmcm9tIFwiLi9SZXNldGFibGVHYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxNYW5hZ2VyIGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgc3Bhd24/OiBQbGF5ZXJTcGF3bkdhbWVPYmplY3Q7XHJcbiAgIGZpbmlzaD86IFBsYXllckZpbmlzaEdhbWVPYmplY3Q7XHJcblxyXG4gICBwbGF5ZXI/OiBQbGF5ZXJHYW1lT2JqZWN0O1xyXG4gICBjaGVja3BvaW50czogUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3RbXTtcclxuXHJcbiAgIGN1cnJlbnRDaGVja3BvaW50PzogUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3Q7XHJcblxyXG4gICBydW5uaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGNvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICB0aW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgIGZpbmFsVGltZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICBiZXN0VGltZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgYmVzdFRpbWU6IG51bWJlcnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW92ZXJsYXlcIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuZmluYWxUaW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluYWwtdGltZVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgdGhpcy5iZXN0VGltZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJlc3QtdGltZVwiKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgIHRoaXMuYWx3YXlzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuY2hlY2twb2ludHMgPSBbXTtcclxuXHJcbiAgICAgIGxldCBidCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmVzdFRpbWVcIik7XHJcbiAgICAgIGlmKGJ0ICE9PSBudWxsKXtcclxuICAgICAgICAgdGhpcy5iZXN0VGltZSA9IHBhcnNlRmxvYXQoYnQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcblxyXG4gICAgICB0aGlzLnNwYXduID0gdGhpcy5zY2VuZS5maW5kT2JqZWN0KG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXJTcGF3bkdhbWVPYmplY3QpIGFzIFBsYXllclNwYXduR2FtZU9iamVjdHx1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMuZmluaXNoID0gdGhpcy5zY2VuZS5maW5kT2JqZWN0KG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0KSBhcyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0fHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHRoaXMuZmluaXNoPy5pbnRlcmFjdGFibGUub25JbnRlcmFjdC5saXN0ZW4oaW50ZXJhY3RvciA9PiB7XHJcbiAgICAgICAgIGlmKGludGVyYWN0b3IuZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFBsYXllckdhbWVPYmplY3Qpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgICAgIGlmKG9iaiBpbnN0YW5jZW9mIFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0KXtcclxuICAgICAgICAgICAgdGhpcy5jaGVja3BvaW50cy5wdXNoKG9iaik7XHJcblxyXG4gICAgICAgICAgICBvYmouaW50ZXJhY3RhYmxlLm9uSW50ZXJhY3QubGlzdGVuKGludGVyYWN0b3IgPT4ge1xyXG4gICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDaGVja3BvaW50ID0gb2JqO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICBpZih0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgdGhpcy5nYW1lLmlucHV0LmdhbWVwYWRzLmZvckVhY2gocGFkID0+IHtcclxuICAgICAgICAgICAgaWYocGFkLmlzQnV0dG9uUHJlc3NlZChHYW1lcGFkSW5wdXQuQnV0dG9uWSkpe1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgXHJcbiAgICAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5RW50ZXIpKXtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmdhbWUuaW5wdXQuZ2FtZXBhZHMuZm9yRWFjaChwYWQgPT4ge1xyXG4gICAgICAgICAgICBpZihwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25BKSB8fCBwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25ZKSl7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICBcclxuICAgICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlFbnRlcikpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleUNvbW1hKSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5U3BhY2UpKXtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51cGRhdGVDYW1lcmEoZGVsdGEpO1xyXG4gICB9XHJcblxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgc3VwZXIuZml4ZWRVcGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgaWYodGhpcy5ydW5uaW5nICYmICF0aGlzLnNjZW5lLnBhdXNlZCl7XHJcbiAgICAgICAgIHRoaXMudGltZSArPSBkZWx0YTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIXRoaXMucGxheWVyPy5oZWFsdGguYWxpdmUpe1xyXG4gICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBzdG9wKCl7XHJcbiAgICAgIHRoaXMuc2NlbmUucmVtb3ZlR2FtZU9iamVjdCh0aGlzLnBsYXllciEpO1xyXG5cclxuICAgICAgdGhpcy5ydW5uaW5nID0gZmFsc2U7XHJcblxyXG4gICAgICBpZih0aGlzLmNvbXBsZXRlZCAmJiAodGhpcy5iZXN0VGltZSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMudGltZSA8IHRoaXMuYmVzdFRpbWUpKXtcclxuICAgICAgICAgdGhpcy5iZXN0VGltZSA9IHRoaXMudGltZTtcclxuICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiZXN0VGltZVwiLCBcIlwiICsgdGhpcy5iZXN0VGltZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuc3luYygpO1xyXG4gICB9XHJcblxyXG4gICByZXN0YXJ0KCl7XHJcbiAgICAgIGlmKHRoaXMuc3Bhd24gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5zdG9wKCk7XHJcblxyXG5cclxuICAgICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyR2FtZU9iamVjdCgpO1xyXG5cclxuICAgICAgbGV0IHBvc2l0aW9uID0gdGhpcy5zcGF3bi50cmFuc2Zvcm0ucG9zaXRpb247XHJcblxyXG4gICAgICBpZih0aGlzLmN1cnJlbnRDaGVja3BvaW50ID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICB0aGlzLnRpbWUgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLmN1cnJlbnRDaGVja3BvaW50ICE9PSB1bmRlZmluZWQgJiYgIXRoaXMuY29tcGxldGVkKXtcclxuICAgICAgICAgcG9zaXRpb24gPSB0aGlzLmN1cnJlbnRDaGVja3BvaW50LnRyYW5zZm9ybS5wb3NpdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5wbGF5ZXIudHJhbnNmb3JtLnBvc2l0aW9uLnNldChwb3NpdGlvbik7XHJcbiAgICAgIHRoaXMucGxheWVyLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi5zZXQocG9zaXRpb24pO1xyXG4gICAgICB0aGlzLnBsYXllci5ib2R5LnByZXZpb3VzUG9zaXRpb24uc2V0KHBvc2l0aW9uKTtcclxuXHJcbiAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcblxyXG4gICAgICBpZih0aGlzLmNvbXBsZXRlZCl7XHJcbiAgICAgICAgIHRoaXMudGltZSA9IDA7XHJcbiAgICAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRoaXMuc2NlbmUuYWRkR2FtZU9iamVjdCh0aGlzLnBsYXllcik7XHJcblxyXG4gICAgICB0aGlzLnNjZW5lLmdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgaWYob2JqIGluc3RhbmNlb2YgUmVzZXRhYmxlR2FtZU9iamVjdCl7XHJcbiAgICAgICAgICAgIG9iai5yZXNldCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zeW5jKCk7XHJcbiAgIH1cclxuXHJcbiAgIHN5bmMoKXtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJnYW1lLW92ZXJcIiwgIXRoaXMucnVubmluZyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIsIHRoaXMuY29tcGxldGVkKTtcclxuICAgICAgdGhpcy5maW5hbFRpbWVFbGVtZW50LmlubmVyVGV4dCA9IGZvcm1hdCh0aGlzLnRpbWUpO1xyXG5cclxuICAgICAgaWYodGhpcy5iZXN0VGltZSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgdGhpcy5iZXN0VGltZUVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KHRoaXMuYmVzdFRpbWUpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUNhbWVyYShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYoIXRoaXMucGxheWVyKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucGxheWVyLnRyYW5zZm9ybS5wb3NpdGlvbjtcclxuXHJcbiAgICAgIGNvbnN0IHNjZW5lV2lkdGggPSB0aGlzLnNjZW5lLnRpbGVtYXAhLnBpeGVsV2lkdGg7XHJcbiAgICAgIGNvbnN0IHNjZW5lSGVpZ2h0ID0gdGhpcy5zY2VuZS50aWxlbWFwIS5waXhlbEhlaWdodDtcclxuXHJcbiAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gNDAgKiAxNjtcclxuICAgICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gMjMgKiAxNjtcclxuXHJcbiAgICAgIGNvbnN0IGNhbSA9IHRoaXMuc2NlbmUuY2FtZXJhO1xyXG5cclxuICAgICAgY29uc3Qgc2NyZWVuSW5kZXhYID0gTWF0aC5mbG9vcihwb3NpdGlvbi54IC8gc2NyZWVuV2lkdGgpO1xyXG4gICAgICBjb25zdCBzY3JlZW5JbmRleFkgPSBNYXRoLmZsb29yKHBvc2l0aW9uLnkgLyBzY3JlZW5IZWlnaHQpO1xyXG5cclxuICAgICAgY29uc3Qgb2Zmc2V0WCA9IHNjcmVlbkluZGV4WCAqIHNjcmVlbldpZHRoO1xyXG4gICAgICBjb25zdCBvZmZzZXRZID0gc2NyZWVuSW5kZXhZICogc2NyZWVuSGVpZ2h0O1xyXG5cclxuICAgICAgbGV0IHdhbnRlZFBvc2l0aW9uID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgIG9mZnNldFggKyBzY3JlZW5XaWR0aCAvIDIsXHJcbiAgICAgICAgIG9mZnNldFkgKyBzY3JlZW5IZWlnaHQgLyAyLFxyXG4gICAgICApO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2xhbXAgdGhlIHdhbnRlZCBwb3NpdGlvbiB0byB0aGUgc2NlbmUuLi4gTm90IGdyZWF0LCBmb3IgcmVhc29ucyAobGlrZSwgZWRnZSBjYXNlcywgYnV0IHdlIGRvbid0IGNhcmUgOikgKVxyXG4gICAgICBpZih3YW50ZWRQb3NpdGlvbi54IC0gY2FtLndpZHRoIC8gMiA8IDApIHdhbnRlZFBvc2l0aW9uLnggPSBjYW0ud2lkdGggLyAyO1xyXG4gICAgICBpZih3YW50ZWRQb3NpdGlvbi54ICsgY2FtLndpZHRoIC8gMiA+IHNjZW5lV2lkdGgpIHdhbnRlZFBvc2l0aW9uLnggPSBzY2VuZVdpZHRoIC0gY2FtLndpZHRoIC8gMjtcclxuXHJcbiAgICAgIGlmKHdhbnRlZFBvc2l0aW9uLnkgLSBjYW0uaGVpZ2h0IC8gMiA8IDApIHdhbnRlZFBvc2l0aW9uLnkgPSBjYW0uaGVpZ2h0IC8gMjtcclxuICAgICAgaWYod2FudGVkUG9zaXRpb24ueSArIGNhbS5oZWlnaHQgLyAyID4gc2NlbmVIZWlnaHQpIHdhbnRlZFBvc2l0aW9uLnkgPSBzY2VuZUhlaWdodCAtIGNhbS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5wYXVzZWQgPSBWZWN0b3IyLmRpc3RhbmNlKHdhbnRlZFBvc2l0aW9uLCBjYW0uY2VudGVyKSA+IDE7XHJcblxyXG4gICAgICBjYW0uY2VudGVyLmxlcnBUbyh3YW50ZWRQb3NpdGlvbiwgZGVsdGEgKiAxMCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgTmluZVNpZGVTcHJpdGUgfSBmcm9tIFwiZ3JhcGhpY3MvTmluZVNpZGVTcHJpdGVcIjtcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBNb3ZpbmdHcm91bmRDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvTW92aW5nR3JvdW5kQ29tcG9uZW50XCI7XHJcbmltcG9ydCBJc2xhbmRSZXNvdXJjZXMgZnJvbSBcImlzbGFuZC9Jc2xhbmRSZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgUGF0aCB9IGZyb20gXCJtYXRoL1BhdGhcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGF0aE1hbmFnZXIgfSBmcm9tIFwiLi9QYXRoTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBSZXNldGFibGVHYW1lT2JqZWN0IH0gZnJvbSBcIi4vUmVzZXRhYmxlR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmluZ1BsYXRmb3JtR2FtZU9iamVjdCBleHRlbmRzIFJlc2V0YWJsZUdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcbiAgIGdyb3VuZDogTW92aW5nR3JvdW5kQ29tcG9uZW50O1xyXG5cclxuICAgZGlyZWN0aW9uOiBudW1iZXIgPSAxO1xyXG4gICBwYXRoUG9zaXRpb246IG51bWJlciA9IDA7XHJcblxyXG4gICBzcHJpdGUhOiBTcHJpdGU7XHJcbiAgIHBhdGg/OiBQYXRoO1xyXG4gICBwYXRoTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgIG5pbiE6IE5pbmVTaWRlU3ByaXRlO1xyXG5cclxuICAgd2lkdGg6IG51bWJlcjtcclxuICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICB2ZWxvY2l0eTogbnVtYmVyO1xyXG4gICBzdGFydFBvc2l0aW9uOiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihwYXRoTmFtZTogc3RyaW5nLCB2ZWxvY2l0eTogbnVtYmVyLCBvZmZzZXQ6IG51bWJlciwgYWFiYjogQUFCQil7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLndpZHRoID0gYWFiYi53aWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBhYWJiLmhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMudmVsb2NpdHkgPSB2ZWxvY2l0eTtcclxuICAgICAgdGhpcy5zdGFydFBvc2l0aW9uID0gb2Zmc2V0O1xyXG4gICAgICB0aGlzLnBhdGhQb3NpdGlvbiA9IG9mZnNldDtcclxuXHJcbiAgICAgIHRoaXMucGF0aE5hbWUgPSBwYXRoTmFtZTtcclxuXHJcbiAgICAgIHRoaXMuZ3JvdW5kID0gdGhpcy5hZGRDb21wb25lbnQobmV3IE1vdmluZ0dyb3VuZENvbXBvbmVudCgpKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uYXBwbHkoYWFiYi54LCBhYWJiLnkpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5zb2xpZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG4gICB9XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBzdXBlci5pbml0KGdhbWUpO1xyXG5cclxuICAgICAgbGV0IHRleHR1cmUgPSBnYW1lLnJlc291cmNlcy5sb2FkVGV4dHVyZShJc2xhbmRSZXNvdXJjZXMuU2hlZXRPYmplY3RzKTtcclxuXHJcbiAgICAgIGxldCBzbnMgPSBuZXcgTmluZVNpZGVTcHJpdGUodGV4dHVyZSk7XHJcbiAgICAgIHNucy5zZXR1cCgxNiwgOTYsIDE2LCAxNiwgNCwgNCwgNCwgNCk7XHJcblxyXG4gICAgICB0aGlzLm5pbiA9IHNucztcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc3ByaXRlID0gZ2FtZS5yZXNvdXJjZXMubG9hZFNwcml0ZVNoZWV0KElzbGFuZFJlc291cmNlcy5TaGVldE9iamVjdHMpLmdldFNwcml0ZSgxNiwgOTYsIDE2LCAxNik7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgbWFuYWdlciA9IHRoaXMuc2NlbmUuZmluZE9iamVjdChvYmogPT4gb2JqIGluc3RhbmNlb2YgUGF0aE1hbmFnZXIpIGFzIFBhdGhNYW5hZ2VyO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5wYXRoID0gbWFuYWdlci5nZXRQYXRoKHRoaXMucGF0aE5hbWUpO1xyXG5cclxuICAgICAgdGhpcy5jbGFtcFBhdGgoKTtcclxuICAgfVxyXG5cclxuICAgY2xhbXBQYXRoKCl7XHJcbiAgICAgIGlmKHRoaXMucGF0aCl7XHJcbiAgICAgICAgIGxldCBsID0gdGhpcy5wYXRoLmxlbmd0aCgpO1xyXG5cclxuICAgICAgICAgbGV0IGV2ZW4gPSBNYXRoLmZsb29yKHRoaXMucGF0aFBvc2l0aW9uIC8gbCkgJSAyID09PSAxO1xyXG5cclxuICAgICAgICAgdGhpcy5wYXRoUG9zaXRpb24gJT0gdGhpcy5wYXRoLmxlbmd0aCgpO1xyXG5cclxuICAgICAgICAgaWYoZXZlbil7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLTE7XHJcbiAgICAgICAgICAgIHRoaXMucGF0aFBvc2l0aW9uID0gbCAtIHRoaXMucGF0aFBvc2l0aW9uO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gMTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGZpeGVkVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLnBhdGhQb3NpdGlvbiArPSB0aGlzLnZlbG9jaXR5ICogZGVsdGEgKiB0aGlzLmRpcmVjdGlvbjtcclxuXHJcbiAgICAgIGlmKHRoaXMucGF0aCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICBpZih0aGlzLnBhdGhQb3NpdGlvbiA+IHRoaXMucGF0aC5sZW5ndGgoKSAmJiB0aGlzLmRpcmVjdGlvbiA+IDApe1xyXG4gICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC10aGlzLmRpcmVjdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLnBhdGhQb3NpdGlvbiA8IDAgJiYgdGhpcy5kaXJlY3Rpb24gPCAwKXtcclxuICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtdGhpcy5kaXJlY3Rpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCBuZXdQb3MgPSB0aGlzLnBhdGguZ2V0UG9zaXRpb24odGhpcy5wYXRoUG9zaXRpb24gLSB0aGlzLnZlbG9jaXR5ICogZGVsdGEgKiB0aGlzLmRpcmVjdGlvbik7XHJcbiAgICAgIGxldCBuZXh0UG9zID0gdGhpcy5wYXRoLmdldFBvc2l0aW9uKHRoaXMucGF0aFBvc2l0aW9uKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnggPSBuZXdQb3MueDtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSA9IG5ld1Bvcy55O1xyXG5cclxuICAgICAgbGV0IGRpciA9IG5leHRQb3Muc3ViKG5ld1Bvcyk7XHJcblxyXG4gICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IGRpci54IC8gZGVsdGE7XHJcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gZGlyLnkgLyBkZWx0YTtcclxuXHJcbiAgICAgIHRoaXMuZ3JvdW5kLnZlbG9jaXR5LnggPSB0aGlzLmJvZHkudmVsb2NpdHkueDtcclxuICAgICAgdGhpcy5ncm91bmQudmVsb2NpdHkueSA9IHRoaXMuYm9keS52ZWxvY2l0eS55O1xyXG4gICB9XHJcblxyXG4gICByZXNldCgpe1xyXG4gICAgICBzdXBlci5yZXNldCgpO1xyXG5cclxuICAgICAgdGhpcy5wYXRoUG9zaXRpb24gPSB0aGlzLnN0YXJ0UG9zaXRpb247XHJcbiAgICAgIHRoaXMuY2xhbXBQYXRoKCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgLy8gZ3JhcGhpY3MuZHJhd1Nwcml0ZSh0aGlzLnNwcml0ZSwgXHJcbiAgICAgIC8vICAgIHRoaXMudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLngsIFxyXG4gICAgICAvLyAgICB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi55LFxyXG4gICAgICAvLyAgICB0aGlzLndpZHRoIC8gdGhpcy5zcHJpdGUud2lkdGgsIFxyXG4gICAgICAvLyAgICB0aGlzLmhlaWdodCAvIHRoaXMuc3ByaXRlLmhlaWdodCk7XHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGVOaW5lU2lkZSh0aGlzLm5pbiwgXHJcbiAgICAgICAgIHRoaXMudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLngsIFxyXG4gICAgICAgICB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi55LFxyXG4gICAgICAgICB0aGlzLndpZHRoLCBcclxuICAgICAgICAgdGhpcy5oZWlnaHQpO1xyXG59XHJcbn0iLCJpbXBvcnQgeyBQYXRoIH0gZnJvbSBcIm1hdGgvUGF0aFwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoTWFuYWdlciBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHBhdGhzOiB7W2tleTogc3RyaW5nXTogUGF0aHx1bmRlZmluZWR9O1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5wYXRocyA9IHt9O1xyXG4gICB9XHJcblxyXG4gICBnZXRQYXRoKG5hbWU6IHN0cmluZyl7XHJcbiAgICAgIHJldHVybiB0aGlzLnBhdGhzW25hbWVdO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJncmFwaGljcy9BbmltYXRpb25cIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0YWJsZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdG9yQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0b3JDb21wb25lbnRcIjtcclxuaW1wb3J0IElzbGFuZFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL0lzbGFuZFJlc291cmNlc1wiO1xyXG5pbXBvcnQgUmVzb3VyY2VzIGZyb20gXCJpc2xhbmQvSXNsYW5kUmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL0JveENvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuICAgaW50ZXJhY3RhYmxlOiBJbnRlcmFjdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICBjdXJyZW50QW5pbWF0aW9uITogQW5pbWF0aW9uO1xyXG5cclxuICAgY2xvc2VkQW5pbWF0aW9uITogQW5pbWF0aW9uO1xyXG4gICBvcGVuQW5pbWF0aW9uITogQW5pbWF0aW9uO1xyXG5cclxuICAgY29uc3RydWN0b3IoYWFiYjogQUFCQil7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oKSk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLmFwcGx5KGFhYmIueCwgYWFiYi55KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBSaWdpZGJvZHkoKSk7XHJcbiAgICAgIHRoaXMuaW50ZXJhY3RhYmxlID0gdGhpcy5hZGRDb21wb25lbnQobmV3IEludGVyYWN0YWJsZUNvbXBvbmVudCgpKTtcclxuXHJcbiAgICAgIHRoaXMuaW50ZXJhY3RhYmxlLm9uSW50ZXJhY3QubGlzdGVuKHRoaXMub25JbnRlcmFjdC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgIC8vIEludGVyYWN0YWJsZXMgYW5kIHNoaXRcclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ib2R5LmNvbGxpZGVyID0gQm94Q29sbGlkZXIuZnJvbUFBQkIoYWFiYik7XHJcbiAgIH1cclxuXHJcbiAgIFxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBzdXBlci5pbml0KGdhbWUpO1xyXG4gICAgICBcclxuICAgICAgbGV0IG9iamVjdFNoZWV0ID0gZ2FtZS5yZXNvdXJjZXMubG9hZFNwcml0ZVNoZWV0KElzbGFuZFJlc291cmNlcy5TaGVldE9iamVjdHMpO1xyXG5cclxuICAgICAgdGhpcy5jbG9zZWRBbmltYXRpb24gPSBvYmplY3RTaGVldC5nZXRBbmltYXRpb24oMCwgMTEyLCAxNiwgMTYsIDEpO1xyXG4gICAgICB0aGlzLm9wZW5BbmltYXRpb24gPSBvYmplY3RTaGVldC5nZXRBbmltYXRpb24oMTYsIDExMiwgMTYsIDE2LCA0KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuY2xvc2VkQW5pbWF0aW9uO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbi51cGRhdGUoZGVsdGEpO1xyXG4gICB9XHJcblxyXG4gICBvbkludGVyYWN0KGludGVyYWN0b3I6IEludGVyYWN0b3JDb21wb25lbnQpe1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLm9wZW5BbmltYXRpb247XHJcbiAgIH1cclxuICAgXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZVNpbXBsZSh0aGlzLmN1cnJlbnRBbmltYXRpb24uZnJhbWUsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0YWJsZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgSXNsYW5kUmVzb3VyY2VzIGZyb20gXCJpc2xhbmQvSXNsYW5kUmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL0JveENvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyRmluaXNoR2FtZU9iamVjdCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcbiAgIGludGVyYWN0YWJsZTogSW50ZXJhY3RhYmxlQ29tcG9uZW50O1xyXG5cclxuICAgc3ByaXRlITogU3ByaXRlO1xyXG5cclxuICAgY29uc3RydWN0b3IoYWFiYjogQUFCQil7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oKSk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLmFwcGx5KGFhYmIueCwgYWFiYi55KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBSaWdpZGJvZHkoKSk7XHJcbiAgICAgIHRoaXMuaW50ZXJhY3RhYmxlID0gdGhpcy5hZGRDb21wb25lbnQobmV3IEludGVyYWN0YWJsZUNvbXBvbmVudCgpKTtcclxuXHJcbiAgICAgIC8vIEludGVyYWN0YWJsZXMgYW5kIHNoaXRcclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ib2R5LmNvbGxpZGVyID0gQm94Q29sbGlkZXIuZnJvbUFBQkIoYWFiYik7XHJcbiAgICAgIFxyXG4gICB9XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBzdXBlci5pbml0KGdhbWUpO1xyXG5cclxuICAgICAgdGhpcy5zcHJpdGUgPSBnYW1lLnJlc291cmNlcy5sb2FkU3ByaXRlU2hlZXQoSXNsYW5kUmVzb3VyY2VzLlNoZWV0T2JqZWN0cykuZ2V0U3ByaXRlKDExMiwgMCwgMTYsIDE2KTtcclxuICAgfVxyXG4gICBcclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBncmFwaGljcy5kcmF3U3ByaXRlU2ltcGxlKHRoaXMuc3ByaXRlLCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiZ3JhcGhpY3MvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IEhlYWx0aENvbXBvbmVudCB9IGZyb20gXCJpc2xhbmQvQ29tcG9uZW50cy9IZWFsdGhDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RvckNvbXBvbmVudCB9IGZyb20gXCJpc2xhbmQvQ29tcG9uZW50cy9JbnRlcmFjdG9yQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IE1vdmluZ0dyb3VuZENvbXBvbmVudCB9IGZyb20gXCJpc2xhbmQvQ29tcG9uZW50cy9Nb3ZpbmdHcm91bmRDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGxheWVySW5wdXRDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvUGxheWVySW5wdXRDb21wb25lbnRcIjtcclxuaW1wb3J0IElzbGFuZFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL0lzbGFuZFJlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllckdhbWVPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICBjdXJyZW50QW5pbWF0aW9uITogQW5pbWF0aW9uO1xyXG5cclxuICAgaWRsZUFuaW1hdGlvbiE6IEFuaW1hdGlvbjtcclxuICAgd2Fsa0FuaW1hdGlvbiE6IEFuaW1hdGlvbjtcclxuICAganVtcEFuaW1hdGlvbiE6IEFuaW1hdGlvbjtcclxuICAgZmFsbEFuaW1hdGlvbiE6IEFuaW1hdGlvbjtcclxuICAgZGFzaEFuaW1hdGlvbiE6IEFuaW1hdGlvbjtcclxuICAgd2FsbEFuaW1hdGlvbiE6IEFuaW1hdGlvbjtcclxuXHJcbiAgIGVmZmVjdEp1bXAhOiBBbmltYXRpb247XHJcbiAgIGVmZmVjdExhbmQhOiBBbmltYXRpb247XHJcbiAgIGVmZmVjdFdhbGxqdW1wITogQW5pbWF0aW9uO1xyXG4gICBlZmZlY3REb3VibGVKdW1wITogQW5pbWF0aW9uO1xyXG4gICBcclxuICAgZWZmZWN0RGFzaCE6IEFuaW1hdGlvbjtcclxuXHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcbiAgIGlucHV0OiBQbGF5ZXJJbnB1dENvbXBvbmVudDtcclxuICAgaGVhbHRoOiBIZWFsdGhDb21wb25lbnQ7XHJcbiAgIGludGVyYWN0b3I6IEludGVyYWN0b3JDb21wb25lbnQ7XHJcbiAgIFxyXG4gICBqdW1wSG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGRhc2hIb3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGp1bXBpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgZmFjaW5nOiBudW1iZXIgPSAxO1xyXG5cclxuICAganVtcFNwZWVkOiBudW1iZXIgPSAtMyAqIDYwO1xyXG4gICBtb3ZlU3BlZWQ6IG51bWJlciA9IDEuNSAqIDYwO1xyXG5cclxuICAgY2F5b3RlVGltZTogbnVtYmVyID0gMC4wNTtcclxuICAgZ3JvdW5kTGVhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgZ3JvdW5kQWNjZWxlcmF0aW9uOiBudW1iZXIgPSAwLjIgKiA2MCAqIDYwO1xyXG4gICBncmF2aXR5OiBudW1iZXIgPSAwLjI1ICogNjAgKiA2MDtcclxuICAgZ3Jhdml0eVVwRnJhY3Rpb246IG51bWJlciA9IDAuNTtcclxuICAgZ3Jhdml0eVdhbGxGcmFjdGlvbjogbnVtYmVyID0gMC40O1xyXG5cclxuICAgbWF4RmFsbFNwZWVkID0gNSAqIDYwO1xyXG5cclxuICAgZ3JvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgd2FsbExlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgd2FsbFJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBncm91bmRNb3ZlbWVudDogTW92aW5nR3JvdW5kQ29tcG9uZW50fG51bGwgPSBudWxsO1xyXG5cclxuICAgaGFkV2FsbDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgZGFzaGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBkYXNoU3BlZWQ6IG51bWJlciA9IDQuNyAqIDYwO1xyXG4gICBkYXNoVGltZTogbnVtYmVyID0gMjQgLyAodGhpcy5kYXNoU3BlZWQpO1xyXG5cclxuICAgZGFzaFRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICBkYXNoVGltZW91dDogbnVtYmVyID0gMDtcclxuICAgZGFzaFNhdmVkU3BlZWQ6IG51bWJlciA9IDA7XHJcbiAgIGRhc2hTYXZlZE1heFNwZWVkOiBudW1iZXIgPSAyICogNjA7XHJcbiAgIGRhc2hTYXZlZEFkZGl0aW9uOiBudW1iZXIgPSAodGhpcy5kYXNoU2F2ZWRNYXhTcGVlZCAtIHRoaXMubW92ZVNwZWVkKSAvIDM7IC8vIEluIHRocmVlIGRhc2hlcyB1bnRpbCBtYXggc3BlZWQgXHJcbiAgIGRhc2hBbmltYXRpb25UaW1lcjogbnVtYmVyID0gMDtcclxuXHJcbiAgIHdhbGxKdW1wVGltZXI6IG51bWJlciA9IDA7XHJcbiAgIGdldCB3YWxsSnVtcGluZygpIHsgcmV0dXJuIHRoaXMud2FsbEp1bXBUaW1lciA+IDA7IH1cclxuXHJcbiAgIGdldCBjYW5Nb3ZlKCkgeyByZXR1cm4gIXRoaXMud2FsbEp1bXBpbmcgJiYgIXRoaXMuZGFzaGluZzsgfVxyXG4gICBnZXQgdXNlR3Jhdml0eSgpIHsgcmV0dXJuICF0aGlzLmRhc2hpbmc7IH1cclxuICAgZ2V0IGhhc1dhbGwoKSB7IHJldHVybiB0aGlzLndhbGxMZWZ0IHx8IHRoaXMud2FsbFJpZ2h0OyB9XHJcbiAgIFxyXG4gICBjYW5EYXNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGNhbkRvdWJsZUp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgZ2V0IGNhbkp1bXAoKSB7IHJldHVybiAgdGhpcy5ncm91bmRlZCB8fCAodGhpcy5ncm91bmRMZWF2ZVRpbWUgPCB0aGlzLmNheW90ZVRpbWUpOyB9XHJcblxyXG4gICBnZXQgeFZlbG9jaXR5KCkge1xyXG4gICAgICBsZXQgdiA9IHRoaXMuYm9keS52ZWxvY2l0eS54O1xyXG5cclxuICAgICAgaWYodGhpcy5ncm91bmRNb3ZlbWVudCl7XHJcbiAgICAgICAgIHYgLT0gdGhpcy5ncm91bmRNb3ZlbWVudC52ZWxvY2l0eS54O1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdjtcclxuICAgfVxyXG4gICBzZXQgeFZlbG9jaXR5KHY6IG51bWJlcil7XHJcbiAgICAgIGlmKHRoaXMuZ3JvdW5kTW92ZW1lbnQpe1xyXG4gICAgICAgICB2ICs9IHRoaXMuZ3JvdW5kTW92ZW1lbnQudmVsb2NpdHkueDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IHY7XHJcbiAgIH1cclxuICAgZ2V0IHlWZWxvY2l0eSgpIHtcclxuICAgICAgbGV0IHYgPSB0aGlzLmJvZHkudmVsb2NpdHkueTtcclxuXHJcbiAgICAgIGlmKHRoaXMuZ3JvdW5kTW92ZW1lbnQpe1xyXG4gICAgICAgICB2IC09IHRoaXMuZ3JvdW5kTW92ZW1lbnQudmVsb2NpdHkueTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHY7XHJcbiAgIH1cclxuICAgc2V0IHlWZWxvY2l0eSh2OiBudW1iZXIpe1xyXG4gICAgICBpZih0aGlzLmdyb3VuZE1vdmVtZW50KXtcclxuICAgICAgICAgdiArPSB0aGlzLmdyb3VuZE1vdmVtZW50LnZlbG9jaXR5Lnk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB2O1xyXG4gICB9XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFBsYXllcklucHV0Q29tcG9uZW50KCkpO1xyXG4gICAgICB0aGlzLmhlYWx0aCA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBIZWFsdGhDb21wb25lbnQoKSk7XHJcbiAgICAgIHRoaXMuaW50ZXJhY3RvciA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBJbnRlcmFjdG9yQ29tcG9uZW50KCkpO1xyXG5cclxuICAgICAgdGhpcy5oZWFsdGgub25EZWF0aC5saXN0ZW4odGhpcy5vbkRlYXRoLmJpbmQodGhpcykpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IG5ldyBCb3hDb2xsaWRlcihcclxuICAgICAgICAgbmV3IFZlY3RvcjIoMTAsIDEzKSxcclxuICAgICAgICAgbmV3IFZlY3RvcjIoNSwgNSlcclxuICAgICAgKTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuXHJcbiAgICAgIGxldCBzaGVldCA9IGdhbWUucmVzb3VyY2VzLmxvYWRTcHJpdGVTaGVldChJc2xhbmRSZXNvdXJjZXMuU2hlZXRQbGF5ZXIpO1xyXG4gICAgICBsZXQgc2hlZXRFZmZlY3RzID0gZ2FtZS5yZXNvdXJjZXMubG9hZFNwcml0ZVNoZWV0KElzbGFuZFJlc291cmNlcy5TaGVldEVmZmVjdHMpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5pZGxlQW5pbWF0aW9uID0gc2hlZXQuZ2V0QW5pbWF0aW9uKDAsIDAsIDE2LCAxNiwgMSkuY2VudGVyKCk7XHJcbiAgICAgIHRoaXMud2Fsa0FuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCAxNiwgMTYsIDE2LCA0KS5jZW50ZXIoKTtcclxuICAgICAgdGhpcy5mYWxsQW5pbWF0aW9uID0gc2hlZXQuZ2V0QW5pbWF0aW9uKDAsIDMyLCAxNiwgMTYsIDIpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLmp1bXBBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgNDgsIDE2LCAxNiwgMikuY2VudGVyKCk7XHJcbiAgICAgIHRoaXMuZGFzaEFuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCA2NCwgMTYsIDE2LCAyKS5jZW50ZXIoKTtcclxuICAgICAgdGhpcy53YWxsQW5pbWF0aW9uID0gc2hlZXQuZ2V0QW5pbWF0aW9uKDAsIDgwLCAxNiwgMTYsIDIpLmNlbnRlcigpO1xyXG5cclxuICAgICAgdGhpcy5lZmZlY3RKdW1wID0gc2hlZXRFZmZlY3RzLmdldEFuaW1hdGlvbigwLCAwLCAxNiwgMTYsIDMpLnNldE9mZnNldCg4LCAxNik7XHJcbiAgICAgIHRoaXMuZWZmZWN0V2FsbGp1bXAgPSBzaGVldEVmZmVjdHMuZ2V0QW5pbWF0aW9uKDAsIDE2LCAxNiwgMTYsIDMpLnNldE9mZnNldCgwLCA4KTtcclxuICAgICAgdGhpcy5lZmZlY3RMYW5kID0gc2hlZXRFZmZlY3RzLmdldEFuaW1hdGlvbigwLCAzMiwgMTYsIDE2LCAzKS5zZXRPZmZzZXQoOCwgMTYpO1xyXG5cclxuICAgICAgdGhpcy5lZmZlY3REYXNoID0gc2hlZXRFZmZlY3RzLmdldEFuaW1hdGlvbigxMTIsIDAsIDE2LCAxNiwgMSkuc2V0T2Zmc2V0KDgsIDgpO1xyXG4gICAgICB0aGlzLmVmZmVjdERhc2guZnJhbWVSYXRlID0gNDtcclxuXHJcbiAgICAgIHRoaXMuZWZmZWN0RG91YmxlSnVtcCA9IHNoZWV0RWZmZWN0cy5nZXRBbmltYXRpb24oMCwgNDgsIDE2LCAxNiwgNCkuc2V0T2Zmc2V0KDgsIDgpO1xyXG5cclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5pZGxlQW5pbWF0aW9uO1xyXG4gICB9XHJcblxyXG4gICBkZWJ1Z01vdXNlVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBjb25zdCBtb3VzZSA9IHRoaXMuZ2FtZS5pbnB1dC5tb3VzZTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnggPSB0aGlzLnNjZW5lLmNhbWVyYS5zY3JlZW5Ub1dvcmxkWChtb3VzZS54KTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSA9IHRoaXMuc2NlbmUuY2FtZXJhLnNjcmVlblRvV29ybGRZKG1vdXNlLnkpO1xyXG5cclxuICAgICAgLy8gdGhpcy5ib2R5LnZlbG9jaXR5LnggPSB0aGlzLnNjZW5lLmNhbWVyYS5zY3JlZW5Ub1dvcmxkWChtb3VzZS5kZWx0YVgpIC8gZGVsdGE7XHJcbiAgICAgIC8vIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5zY2VuZS5jYW1lcmEuc2NyZWVuVG9Xb3JsZFkobW91c2UuZGVsdGFZKSAvIGRlbHRhO1xyXG4gICAgICBcclxuICAgICAgLy8gaWYobW91c2UuaXNCdXR0b25QcmVzc2VkKE1vdXNlLkJ1dHRvbkxlZnQpKXtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgdGhpcy5ncm91bmRlZCA9IHRoaXMuYm9keS5jb2xsaWRlZEJvdHRvbTtcclxuICAgICAgdGhpcy53YWxsTGVmdCA9IHRoaXMuYm9keS5jb2xsaWRlZExlZnQ7XHJcbiAgICAgIHRoaXMud2FsbFJpZ2h0ID0gdGhpcy5ib2R5LmNvbGxpZGVkUmlnaHQ7XHJcbiAgICAgIFxyXG4gICAgICBpZih0aGlzLmlucHV0LmRpcmVjdGlvbiA+IDApe1xyXG4gICAgICAgICB0aGlzLmZhY2luZyA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5pbnB1dC5kaXJlY3Rpb24gPCAwKXtcclxuICAgICAgICAgdGhpcy5mYWNpbmcgPSAtMTtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLndhbGxMZWZ0ICYmICF0aGlzLmdyb3VuZGVkKSB0aGlzLmZhY2luZyA9IDE7XHJcbiAgICAgIGlmKHRoaXMud2FsbFJpZ2h0ICYmICF0aGlzLmdyb3VuZGVkKSB0aGlzLmZhY2luZyA9IC0xO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVBbmltYXRpb24oZGVsdGEpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICBpZih0aGlzLmlucHV0Lmp1bXBQcmVzc2VkKXtcclxuICAgICAgICAgdGhpcy5qdW1wSG9wID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmlucHV0LmRhc2hQcmVzc2VkKXtcclxuICAgICAgICAgdGhpcy5kYXNoSG9wID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmlucHV0LmludGVyYWN0UHJlc3NlZCl7XHJcbiAgICAgICAgIHRoaXMuaW50ZXJhY3Rvci5pbnRlcmFjdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBUT0RPIGRvIHRoaXMgcmlnaHQuXHJcbiAgICAgIGNvbnN0IHNjZW5lV2lkdGggPSB0aGlzLnNjZW5lLnRpbGVtYXAhLnBpeGVsV2lkdGg7XHJcbiAgICAgIGNvbnN0IHNjZW5lSGVpZ2h0ID0gdGhpcy5zY2VuZS50aWxlbWFwIS5waXhlbEhlaWdodDtcclxuXHJcbiAgICAgIGxldCBib3VuZHMgPSBBQUJCLkNyZWF0ZSgwLCAwLCBzY2VuZVdpZHRoLCBzY2VuZUhlaWdodCk7XHJcblxyXG4gICAgICBpZighdGhpcy5ib2R5LmJvdW5kaW5nQm94Lm92ZXJsYXBzKGJvdW5kcykpe1xyXG4gICAgICAgICB0aGlzLmhlYWx0aC5kYW1hZ2UoMTAwKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgc3VwZXIuZml4ZWRVcGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgXHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMuYm9keS5jb2xsaWRlZEJvdHRvbSAmJiB0aGlzLmdyb3VuZExlYXZlVGltZSA+IDAuOCl7XHJcbiAgICAgICAgIHRoaXMuc2NlbmUucGFydGljbGVTeXN0ZW0uYWRkUGFydGljbGUodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSArIDgsIHRoaXMuZWZmZWN0TGFuZCk7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0aGlzLmJvZHkuY29sbGlkZWRCb3R0b207XHJcbiAgICAgIHRoaXMud2FsbExlZnQgPSB0aGlzLmJvZHkuY29sbGlkZWRMZWZ0O1xyXG4gICAgICB0aGlzLndhbGxSaWdodCA9IHRoaXMuYm9keS5jb2xsaWRlZFJpZ2h0O1xyXG4gICAgICBcclxuICAgICAgdGhpcy5maW5kR3JvdW5kKCk7XHJcblxyXG4gICAgICBpZih0aGlzLndhbGxMZWZ0IHx8IHRoaXMud2FsbFJpZ2h0KXtcclxuICAgICAgICAgaWYoIXRoaXMuaGFkV2FsbCAmJiAhdGhpcy5ncm91bmRlZCAmJiB0aGlzLmJvZHkudmVsb2NpdHkueSA+IDApe1xyXG4gICAgICAgICAgICAvLyB0aGlzLnlWZWxvY2l0eSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gMDtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLmhhZFdhbGwgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuaGFkV2FsbCA9IGZhbHNlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLmdyb3VuZGVkKSB7XHJcbiAgICAgICAgIHRoaXMuZ3JvdW5kTGVhdmVUaW1lID0gMDtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmdyb3VuZExlYXZlVGltZSArPSBkZWx0YTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gTWFrZSBzdXJlIHdlIHN0aWNrIHRvIHRoZSB3YWxsXHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMud2FsbFJpZ2h0KXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSA2MDtcclxuICAgICAgfVxyXG4gICAgICBpZighdGhpcy5ncm91bmRlZCAmJiB0aGlzLndhbGxMZWZ0KXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSAtNjA7XHJcbiAgICAgIH1cclxuICAgICAgLy8gVGhpcyBpcyBmb3IgbW92aW5nIHBsYXRmb3JtcyA6KVxyXG4gICAgICBpZih0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSAwO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZighdGhpcy5pbnB1dC5qdW1wRG93bil7XHJcbiAgICAgICAgIHRoaXMuanVtcEhvcCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBKdW1waW5nXHJcbiAgICAgIHRoaXMudXBkYXRlSnVtcChkZWx0YSk7XHJcblxyXG4gICAgICAvLyBNb3ZlbWVudFxyXG4gICAgICB0aGlzLnVwZGF0ZU1vdmUoZGVsdGEpO1xyXG5cclxuICAgICAgLy8gRGFzaGluZ1xyXG4gICAgICB0aGlzLnVwZGF0ZURhc2goZGVsdGEpO1xyXG4gICAgICBcclxuXHJcbiAgICAgIC8vIEdyYXZpdHlcclxuICAgICAgdGhpcy51cGRhdGVHcmF2aXR5KGRlbHRhKTtcclxuXHJcbiAgICAgIGlmKHRoaXMuYm9keS52ZWxvY2l0eS55ID4gdGhpcy5tYXhGYWxsU3BlZWQpe1xyXG4gICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHRoaXMubWF4RmFsbFNwZWVkO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBBbmltYXRpb25cclxuICAgICAgdGhpcy51cGRhdGVBbmltYXRpb24oZGVsdGEpO1xyXG4gICB9XHJcblxyXG4gICBmaW5kR3JvdW5kKCl7XHJcbiAgICAgIHRoaXMuZ3JvdW5kTW92ZW1lbnQgPSBudWxsO1xyXG5cclxuICAgICAgbGV0IGdldEdyb3VuZCA9IChsaXN0OiBSaWdpZGJvZHlbXSk9PntcclxuICAgICAgICAgbGlzdC5mb3JFYWNoKGdyb3VuZCA9PiB7XHJcbiAgICAgICAgICAgIC8vIFllcywgSSdtIHZlcnkgYXdhcmUgdGhpcyBfY2FuXyBwb3RlbnRpYWxseSBiZSBtb3JlIHRoYW4gb25lIGNvbXBvbmVudC4gQnV0IEkgaG9uZXN0bHkgZG9uJ3QgY2FyZS4gXHJcbiAgICAgICAgICAgIC8vIFRoaXMgc2hvdWxkIG5vdCBoYXBwZW4gb2Z0ZW4gYW5kIHRoZW4gd2UganVzdCBjaG9vc2UgdGhlIGxhc3Qgb25lIGluIHRoZSBsaXN0IDopXHJcbiAgIFxyXG4gICAgICAgICAgICBsZXQgYyA9IGdyb3VuZC5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoY29tcG9uZW50ID0+IGNvbXBvbmVudCBpbnN0YW5jZW9mIE1vdmluZ0dyb3VuZENvbXBvbmVudCkgYXMgTW92aW5nR3JvdW5kQ29tcG9uZW50fHVuZGVmaW5lZDtcclxuICAgXHJcbiAgICAgICAgICAgIGlmKGMgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgIHRoaXMuZ3JvdW5kTW92ZW1lbnQgPSBjO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5ncm91bmRlZCl7XHJcbiAgICAgICAgIGdldEdyb3VuZCh0aGlzLnNjZW5lLnBoeXNpY3MuYm94Y2FzdCh0aGlzLmJvZHkuYm91bmRpbmdCb3guY2xvbmUoKS5zaHJpbmsoMSkudHJhbnNsYXRlKDAsIDIpKSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgaWYodGhpcy53YWxsTGVmdCl7XHJcbiAgICAgICAgICAgIGdldEdyb3VuZCh0aGlzLnNjZW5lLnBoeXNpY3MuYm94Y2FzdCh0aGlzLmJvZHkuYm91bmRpbmdCb3guY2xvbmUoKS5zaHJpbmsoMSkudHJhbnNsYXRlKC0yLCAwKSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGVsc2UgaWYodGhpcy53YWxsUmlnaHQpe1xyXG4gICAgICAgICAgICBnZXRHcm91bmQodGhpcy5zY2VuZS5waHlzaWNzLmJveGNhc3QodGhpcy5ib2R5LmJvdW5kaW5nQm94LmNsb25lKCkuc2hyaW5rKDEpLnRyYW5zbGF0ZSgyLCAwKSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICB9XHJcblxyXG4gICB1cGRhdGVNb3ZlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICAvLyBVcGRhdGUgZmFjaW5nXHJcbiAgICAgIGlmKHRoaXMuaW5wdXQuZGlyZWN0aW9uID4gMCl7XHJcbiAgICAgICAgIHRoaXMuZmFjaW5nID0gMTtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmlucHV0LmRpcmVjdGlvbiA8IDApe1xyXG4gICAgICAgICB0aGlzLmZhY2luZyA9IC0xO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMud2FsbExlZnQgJiYgIXRoaXMuZ3JvdW5kZWQpIHRoaXMuZmFjaW5nID0gMTtcclxuICAgICAgaWYodGhpcy53YWxsUmlnaHQgJiYgIXRoaXMuZ3JvdW5kZWQpIHRoaXMuZmFjaW5nID0gLTE7XHJcblxyXG4gICAgICBpZighdGhpcy5jYW5Nb3ZlKSByZXR1cm47XHJcblxyXG4gICAgICBpZih0aGlzLmlucHV0LmRpcmVjdGlvbiAhPT0gMCl7XHJcbiAgICAgICAgIGxldCBkaXIgPSBNYXRoLnNpZ24odGhpcy5pbnB1dC5kaXJlY3Rpb24pO1xyXG4gICAgICAgICBsZXQgbWF4U3BlZWQgPSB0aGlzLm1vdmVTcGVlZCAqIE1hdGguYWJzKHRoaXMuaW5wdXQuZGlyZWN0aW9uKTtcclxuICAgICAgICAgbGV0IGFjY2VsZXJhdGlvbiA9IHRoaXMuZ3JvdW5kQWNjZWxlcmF0aW9uICogZGVsdGE7XHJcblxyXG4gICAgICAgICB0aGlzLmFjY2VsZXJhdGUoXHJcbiAgICAgICAgICAgIGRpciwgXHJcbiAgICAgICAgICAgIG1heFNwZWVkLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRpb24pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuc3RvcCh0aGlzLmdyb3VuZEFjY2VsZXJhdGlvbiAqIGRlbHRhKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICB1cGRhdGVEYXNoKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBpZih0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgdGhpcy5jYW5EYXNoID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodGhpcy5kYXNoaW5nKXtcclxuICAgICAgICAgdGhpcy5kYXNoVGltZXIgLT0gZGVsdGE7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgaWYodGhpcy5kYXNoVGltZXIgPCAwKXtcclxuICAgICAgICAgICAgdGhpcy5kYXNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IHRoaXMuZGFzaFNhdmVkU3BlZWQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGUodGhpcy5mYWNpbmcsIHRoaXMuZGFzaFNhdmVkTWF4U3BlZWQsIHRoaXMuZGFzaFNhdmVkQWRkaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5wYXJ0aWNsZVN5c3RlbS5hZGRQYXJ0aWNsZSh0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55LCB0aGlzLmVmZmVjdERhc2gsIHRoaXMuZmFjaW5nKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuZGFzaFRpbWVvdXQgLT0gZGVsdGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMuZGFzaEhvcCAmJiB0aGlzLmRhc2hUaW1lb3V0IDwgMCAmJiB0aGlzLmNhbkRhc2ggJiYgIXRoaXMuZ3JvdW5kZWQpe1xyXG4gICAgICAgICB0aGlzLmRhc2hpbmcgPSB0cnVlO1xyXG4gICAgICAgICB0aGlzLmNhbkRhc2ggPSBmYWxzZTtcclxuICAgICAgICAgdGhpcy5kYXNoU2F2ZWRTcGVlZCA9IHRoaXMuYm9keS52ZWxvY2l0eS54O1xyXG4gICAgICAgICB0aGlzLmRhc2hUaW1lciA9IHRoaXMuZGFzaFRpbWU7XHJcbiAgICAgICAgIHRoaXMuZGFzaFRpbWVvdXQgPSAwLjI7XHJcblxyXG4gICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gdGhpcy5mYWNpbmcgKiB0aGlzLmRhc2hTcGVlZDtcclxuXHJcbiAgICAgICAgIHRoaXMuZGFzaEFuaW1hdGlvblRpbWVyID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhc2hIb3AgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuZGFzaEFuaW1hdGlvblRpbWVyIC09IGRlbHRhO1xyXG5cclxuICAgICAgaWYodGhpcy5kYXNoaW5nICYmIHRoaXMuZGFzaEFuaW1hdGlvblRpbWVyIDw9IDApe1xyXG4gICAgICAgICB0aGlzLmVmZmVjdERhc2guZnJhbWVSYXRlID0gMSAvICh0aGlzLmRhc2hUaW1lciAvIDMgKyAwLjMpO1xyXG4gICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnksIHRoaXMuZWZmZWN0RGFzaCwgdGhpcy5mYWNpbmcpO1xyXG4gICAgICAgICB0aGlzLmRhc2hBbmltYXRpb25UaW1lciArPSAwLjAzO1xyXG4gICAgICB9XHJcblxyXG4gICB9XHJcblxyXG4gICB1cGRhdGVKdW1wKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLndhbGxKdW1wVGltZXIgLT0gZGVsdGE7XHJcblxyXG4gICAgICBpZih0aGlzLmdyb3VuZGVkKSB0aGlzLmNhbkRvdWJsZUp1bXAgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmKHRoaXMuY2FuSnVtcCl7XHJcbiAgICAgICAgIGlmKHRoaXMuanVtcEhvcCl7XHJcbiAgICAgICAgICAgIHRoaXMueVZlbG9jaXR5ID0gdGhpcy5qdW1wU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5ncm91bmRlZCl7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2F5b3RlIGp1bXAhXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHJlYWxseSBoYWNreSBidXQgd2hhdGV2ZXJcclxuICAgICAgICAgICAgdGhpcy5ncm91bmRMZWF2ZVRpbWUgPSB0aGlzLmNheW90ZVRpbWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkgKyA4LCB0aGlzLmVmZmVjdEp1bXApO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuanVtcEhvcCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5jYW5Eb3VibGVKdW1wKXtcclxuICAgICAgICAgaWYodGhpcy5qdW1wSG9wKXtcclxuICAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmp1bXBTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jYW5Eb3VibGVKdW1wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkgKyA2LCB0aGlzLmVmZmVjdERvdWJsZUp1bXApO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuanVtcEhvcCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIGlmKHRoaXMud2FsbExlZnQgJiYgdGhpcy5qdW1wSG9wKXtcclxuICAgICAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmp1bXBTcGVlZDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2FsbEp1bXBUaW1lciA9IDAuMDU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gZGFzaCBhZnRlciB5b3VyIHdhbGxqdW1wIDopXHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnggLSA1LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55LCB0aGlzLmVmZmVjdFdhbGxqdW1wLCAxKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZih0aGlzLndhbGxSaWdodCAmJiB0aGlzLmp1bXBIb3Ape1xyXG4gICAgICAgICAgICB0aGlzLnhWZWxvY2l0eSA9IC10aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmp1bXBTcGVlZDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2FsbEp1bXBUaW1lciA9IDAuMDU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gZGFzaCBhZnRlciB5b3VyIHdhbGxqdW1wIDopXHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnggKyA1LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55LCB0aGlzLmVmZmVjdFdhbGxqdW1wLCAtMSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gSnVtcCBjYW5jZWxpbmdcclxuICAgICAgaWYodGhpcy55VmVsb2NpdHkgPiAwKXtcclxuICAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5qdW1waW5nICYmICF0aGlzLmlucHV0Lmp1bXBEb3duKXtcclxuICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLnlWZWxvY2l0eSAqIDAuMjU7XHJcbiAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUFuaW1hdGlvbihkZWx0YTogbnVtYmVyKXtcclxuICAgICAgLy8gQW5pbWF0aW9uIHN0dWZmXHJcbiAgICAgIGlmKHRoaXMueFZlbG9jaXR5ICE9PSAwKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy53YWxrQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuaWRsZUFuaW1hdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy55VmVsb2NpdHkgPCAwKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5qdW1wQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMueVZlbG9jaXR5ID49IDApe1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLmZhbGxBbmltYXRpb247XHJcbiAgICAgIH1cclxuICAgICAgaWYoKHRoaXMud2FsbExlZnQgfHwgdGhpcy53YWxsUmlnaHQpICYmICF0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy53YWxsQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuZGFzaGluZyl7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuZGFzaEFuaW1hdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uLnVwZGF0ZShkZWx0YSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUdyYXZpdHkoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGlmKCF0aGlzLnVzZUdyYXZpdHkpIHJldHVybjtcclxuXHJcbiAgICAgIC8vIFRPRE8gZmlndXJlIG91dCBpZiB3ZSBuZWVkIHRoaXMudmVsb2NpdHlZLCBwcm9iYWJseSByaWdodD9cclxuICAgICAgaWYodGhpcy5ib2R5LnZlbG9jaXR5LnkgPCAwKXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgKz0gdGhpcy5ncmF2aXR5ICogdGhpcy5ncmF2aXR5VXBGcmFjdGlvbiAqIGRlbHRhO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIGlmKHRoaXMuaGFzV2FsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eSAqIHRoaXMuZ3Jhdml0eVdhbGxGcmFjdGlvbiAqIGRlbHRhO1xyXG4gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgKz0gdGhpcy5ncmF2aXR5ICogZGVsdGE7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBhY2NlbGVyYXRlKGRpcjogbnVtYmVyLCBtYXhTcGVlZDogbnVtYmVyLCBhY2NlbGVyYXRpb246IG51bWJlcil7XHJcbiAgICAgIGxldCBhY2MgPSBhY2NlbGVyYXRpb247XHJcbiAgICAgIGxldCB2ZWwgPSB0aGlzLnhWZWxvY2l0eSAqIGRpcjtcclxuXHJcbiAgICAgIGlmKHZlbCA+PSBtYXhTcGVlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYodmVsICsgYWNjID4gbWF4U3BlZWQpe1xyXG4gICAgICAgICBhY2MgPSBtYXhTcGVlZCAtIHZlbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy54VmVsb2NpdHkgKz0gYWNjICogZGlyO1xyXG4gICAgICBcclxuICAgfVxyXG4gICBzdG9wKGFjY2VsZXJhdGlvbjogbnVtYmVyKXtcclxuICAgICAgbGV0IGRpciA9IE1hdGguc2lnbih0aGlzLnhWZWxvY2l0eSk7XHJcbiAgICAgIGxldCB2ZWwgPSBNYXRoLmFicyh0aGlzLnhWZWxvY2l0eSk7XHJcblxyXG4gICAgICBsZXQgcmVtID0gYWNjZWxlcmF0aW9uO1xyXG5cclxuICAgICAgaWYodmVsIC0gcmVtIDwgMCkgcmVtID0gdmVsO1xyXG5cclxuICAgICAgdGhpcy54VmVsb2NpdHkgLT0gcmVtICogZGlyO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIHN1cGVyLmRyYXcoZ3JhcGhpY3MpO1xyXG5cclxuICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZSh0aGlzLmN1cnJlbnRBbmltYXRpb24uZnJhbWUsIFxyXG4gICAgICAgICB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi55LFxyXG4gICAgICAgICB0aGlzLmZhY2luZywgMSwgXHJcbiAgICAgICAgIDApO1xyXG4gICB9XHJcblxyXG4gICBvbkRlYXRoKCl7XHJcbiAgICAgIHRoaXMuc2NlbmUucmVtb3ZlR2FtZU9iamVjdCh0aGlzKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTcGF3bkdhbWVPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZXNldGFibGVHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdCB7XHJcbiAgIHByaXZhdGUgX3RyYW5zZm9ybT86IFRyYW5zZm9ybTtcclxuICAgcHJpdmF0ZSBfYm9keT86IFJpZ2lkYm9keTtcclxuICAgcHJpdmF0ZSBfc3RhcnRQb3M/OiBWZWN0b3IyO1xyXG4gICBwcml2YXRlIF9zdGFydFZlbG9jaXR5PzogVmVjdG9yMjtcclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcblxyXG4gICAgICB0aGlzLl90cmFuc2Zvcm0gPSB0aGlzLmZpbmRDb21wb25lbnQoY29tcCA9PiBjb21wIGluc3RhbmNlb2YgVHJhbnNmb3JtKSBhcyBUcmFuc2Zvcm07XHJcbiAgICAgIHRoaXMuX2JvZHkgPSB0aGlzLmZpbmRDb21wb25lbnQoY29tcCA9PiBjb21wIGluc3RhbmNlb2YgUmlnaWRib2R5KSBhcyBSaWdpZGJvZHk7XHJcblxyXG4gICAgICBpZih0aGlzLl90cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkgdGhpcy5fc3RhcnRQb3MgPSB0aGlzLl90cmFuc2Zvcm0ucG9zaXRpb24uY2xvbmUoKTtcclxuICAgICAgaWYodGhpcy5fYm9keSAhPT0gdW5kZWZpbmVkKSB0aGlzLl9zdGFydFZlbG9jaXR5ID0gdGhpcy5fYm9keS52ZWxvY2l0eS5jbG9uZSgpO1xyXG4gICB9XHJcblxyXG4gICByZXNldCgpe1xyXG4gICAgICBpZih0aGlzLl90cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkgdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLnNldCh0aGlzLl9zdGFydFBvcyEpO1xyXG4gICAgICBpZih0aGlzLl9ib2R5ICE9PSB1bmRlZmluZWQpIHRoaXMuX2JvZHkudmVsb2NpdHkuc2V0KHRoaXMuX3N0YXJ0VmVsb2NpdHkhKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgSGVhbHRoQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0hlYWx0aENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwaWtlc0dhbWVPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuICAgYm9keTogUmlnaWRib2R5O1xyXG5cclxuICAgY29uc3RydWN0b3IoYWFiYjogQUFCQiwgc2hyaW5rOiBib29sZWFuKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIGlmKHNocmluayl7XHJcbiAgICAgICAgIGxldCBza2luID0gYWFiYi5oZWlnaHQgLSAzO1xyXG5cclxuICAgICAgICAgaWYoc2tpbiA+IDApe1xyXG4gICAgICAgICAgICBhYWJiLnRvcCArPSBza2luO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uYXBwbHkoYWFiYi54LCBhYWJiLnkpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuICAgICAgdGhpcy5ib2R5LmtpbmVtYXRpYyA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmJvZHkudXNlRHluYW1pY0NvbGxpc2lvbnMgPSB0cnVlO1xyXG4gICAgICB0aGlzLmJvZHkuY29sbGlkZXIgPSBCb3hDb2xsaWRlci5mcm9tQUFCQihhYWJiKTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5vbkNvbGxpc2lvbi5saXN0ZW4odGhpcy5vbkNvbGxpc2lvbi5iaW5kKHRoaXMpKTtcclxuICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIG9uQ29sbGlzaW9uKG90aGVyOiBSaWdpZGJvZHkpe1xyXG4gICAgICBsZXQgY29tcCA9IG90aGVyLmdhbWVPYmplY3QuZmluZENvbXBvbmVudChjb21wb25lbnQgPT4gY29tcG9uZW50IGluc3RhbmNlb2YgSGVhbHRoQ29tcG9uZW50KSBhcyBIZWFsdGhDb21wb25lbnR8dW5kZWZpbmVkO1xyXG5cclxuICAgICAgaWYoY29tcCA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgIFxyXG4gICAgICBjb25zb2xlLmxvZyhcIkRhbWFnaW5nIHNvbWV0aGluZyFcIik7XHJcbiAgICAgIFxyXG4gICAgICBjb21wLmRhbWFnZSgxMDApO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgU2hlZXRPYmplY3RzOiBcImFzc2V0cy9pbWcvT2JqZWN0cy5wbmdcIixcclxuICAgU2hlZXRFZmZlY3RzOiBcImFzc2V0cy9pbWcvRWZmZWN0cy5wbmdcIixcclxuICAgU2hlZXRQbGF5ZXI6IFwiYXNzZXRzL2ltZy9QbGF5ZXIucG5nXCJcclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwiLi9WZWN0b3IyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQUFCQntcclxuXHJcbiAgIGxlZnQ6IG51bWJlcjtcclxuICAgdG9wOiBudW1iZXI7XHJcbiAgIGJvdHRvbTogbnVtYmVyO1xyXG4gICByaWdodDogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IobGVmdDogbnVtYmVyID0gMCwgdG9wOiBudW1iZXIgPSAwLCByaWdodDogbnVtYmVyID0gMCwgYm90dG9tOiBudW1iZXIgPSAwKSB7IFxyXG4gICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICB0aGlzLnRvcCA9IHRvcDtcclxuICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcclxuICAgfVxyXG5cclxuICAgZ2V0IHgoKSB7IHJldHVybiB0aGlzLmxlZnQ7IH1cclxuICAgZ2V0IHkoKSB7IHJldHVybiB0aGlzLnRvcDsgfVxyXG5cclxuICAgZ2V0IGNlbnRlclgoKSB7IHJldHVybiB0aGlzLnggKyB0aGlzLndpZHRoIC8gMjsgfVxyXG4gICBnZXQgY2VudGVyWSgpIHsgcmV0dXJuIHRoaXMueSArIHRoaXMuaGVpZ2h0IC8gMjsgfVxyXG5cclxuICAgZ2V0IHdpZHRoKCkgeyByZXR1cm4gdGhpcy5yaWdodCAtIHRoaXMubGVmdDsgfVxyXG4gICBnZXQgaGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5ib3R0b20gLSB0aGlzLnRvcDsgfVxyXG5cclxuICAgb3ZlcmxhcHMob3RoZXI6IEFBQkIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5vdmVybGFwc1gob3RoZXIpICYmIHRoaXMub3ZlcmxhcHNZKG90aGVyKTtcclxuICAgfVxyXG4gICBvdmVybGFwc1gob3RoZXI6IEFBQkIpe1xyXG4gICAgICBpZih0aGlzLmxlZnQgPj0gb3RoZXIucmlnaHQpIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYodGhpcy5yaWdodCA8PSBvdGhlci5sZWZ0KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG4gICBvdmVybGFwc1kob3RoZXI6IEFBQkIpe1xyXG4gICAgICBpZih0aGlzLnRvcCA+PSBvdGhlci5ib3R0b20pIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYodGhpcy5ib3R0b20gPD0gb3RoZXIudG9wKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgbWluT3ZlcmxhcFgob3RoZXI6IEFBQkIpe1xyXG4gICAgICBsZXQgbW90aW9uTGVmdCA9IG90aGVyLnJpZ2h0IC0gdGhpcy5sZWZ0O1xyXG4gICAgICBsZXQgbW90aW9uUmlnaHQgPSB0aGlzLnJpZ2h0IC0gb3RoZXIubGVmdDtcclxuXHJcbiAgICAgIGlmKG1vdGlvbkxlZnQgPiBtb3Rpb25SaWdodCkgcmV0dXJuIC1tb3Rpb25SaWdodDtcclxuICAgICAgcmV0dXJuIG1vdGlvbkxlZnQ7XHJcbiAgIH1cclxuICAgbWluT3ZlcmxhcFkob3RoZXI6IEFBQkIpe1xyXG4gICAgICBsZXQgbW90aW9uVXAgPSBvdGhlci5ib3R0b20gLSB0aGlzLnRvcDtcclxuICAgICAgbGV0IG1vdGlvbkRvd24gPSB0aGlzLmJvdHRvbSAtIG90aGVyLnRvcDtcclxuXHJcbiAgICAgIGlmKG1vdGlvblVwID4gbW90aW9uRG93bikgcmV0dXJuIC1tb3Rpb25Eb3duO1xyXG4gICAgICByZXR1cm4gbW90aW9uVXA7XHJcbiAgIH1cclxuICAgXHJcblxyXG4gICBtaW5PdmVybGFwWFdpdGhCaWFzKG90aGVyOiBBQUJCLCBiaWFzOiBudW1iZXIpe1xyXG4gICAgICBpZihiaWFzIDwgMCkgcmV0dXJuIG90aGVyLnJpZ2h0IC0gdGhpcy5sZWZ0O1xyXG4gICAgICByZXR1cm4gLSh0aGlzLnJpZ2h0IC0gb3RoZXIubGVmdCk7XHJcblxyXG4gICB9XHJcbiAgIG1pbk92ZXJsYXBZV2l0aEJpYXMob3RoZXI6IEFBQkIsIGJpYXM6IG51bWJlcil7XHJcbiAgICAgIGlmKGJpYXMgPCAwKSByZXR1cm4gb3RoZXIuYm90dG9tIC0gdGhpcy50b3A7XHJcbiAgICAgIHJldHVybiAtKHRoaXMuYm90dG9tIC0gb3RoZXIudG9wKTtcclxuICAgfVxyXG5cclxuICAgY29weShvdGhlcjogQUFCQil7XHJcbiAgICAgIHRoaXMubGVmdCA9IG90aGVyLmxlZnQ7XHJcbiAgICAgIHRoaXMucmlnaHQgPSBvdGhlci5yaWdodDtcclxuICAgICAgdGhpcy5ib3R0b20gPSBvdGhlci5ib3R0b207XHJcbiAgICAgIHRoaXMudG9wID0gb3RoZXIudG9wO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIHNldChsZWZ0OiBudW1iZXIsIHRvcDogbnVtYmVyLCByaWdodDogbnVtYmVyLCBib3R0b206IG51bWJlcikgeyBcclxuICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgICAgdGhpcy50b3AgPSB0b3A7XHJcbiAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgICAgdGhpcy5ib3R0b20gPSBib3R0b207XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgc2hyaW5rKGFtb3VudDogbnVtYmVyKXtcclxuICAgICAgdGhpcy5sZWZ0ICs9IGFtb3VudDtcclxuICAgICAgdGhpcy5yaWdodCAtPSBhbW91bnQ7XHJcbiAgICAgIHRoaXMudG9wICs9IGFtb3VudDtcclxuICAgICAgdGhpcy5ib3R0b20gLT0gYW1vdW50O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIHRyYW5zbGF0ZSh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHRoaXMubGVmdCArPSB4O1xyXG4gICAgICB0aGlzLnJpZ2h0ICs9IHg7XHJcbiAgICAgIHRoaXMudG9wICs9IHk7XHJcbiAgICAgIHRoaXMuYm90dG9tICs9IHk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgY2xvbmUoKXtcclxuICAgICAgcmV0dXJuIG5ldyBBQUJCKHRoaXMubGVmdCwgdGhpcy50b3AsIHRoaXMucmlnaHQsIHRoaXMuYm90dG9tKTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIENyZWF0ZSh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gbmV3IEFBQkIoeCwgeSwgeCArIHcsIHkgKyBoKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQYXRoe1xyXG4gICBwb2ludHM6IFZlY3RvcjJbXTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMucG9pbnRzID0gW107XHJcbiAgIH1cclxuXHJcbiAgIGFkZChwb2ludDogVmVjdG9yMil7XHJcbiAgICAgIHRoaXMucG9pbnRzLnB1c2gocG9pbnQpO1xyXG4gICB9XHJcblxyXG4gICBnZXRQb3NpdGlvbihkaXN0YW5jZTogbnVtYmVyLCB2PzogVmVjdG9yMil7XHJcbiAgICAgIGlmKHYgPT09IHVuZGVmaW5lZCkgdiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICAgICBpZihkaXN0YW5jZSA8IDApIHJldHVybiB2LnNldCh0aGlzLnBvaW50c1swXSk7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoIC0gMTsgaSsrKXtcclxuICAgICAgICAgbGV0IGZyb20gPSB0aGlzLnBvaW50c1tpXTtcclxuICAgICAgICAgbGV0IHRvID0gdGhpcy5wb2ludHNbaSArIDFdO1xyXG5cclxuICAgICAgICAgbGV0IGQgPSBWZWN0b3IyLmRpc3RhbmNlKGZyb20sIHRvKTtcclxuXHJcbiAgICAgICAgIGlmKGRpc3RhbmNlIDwgZCl7XHJcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IyLmxlcnBPdXQoZnJvbSwgdG8sIHYsIGRpc3RhbmNlIC8gZCk7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGRpc3RhbmNlIC09IGQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB2LnNldCh0aGlzLnBvaW50c1t0aGlzLnBvaW50cy5sZW5ndGggLSAxXSk7XHJcbiAgIH1cclxuXHJcbiAgIGxlbmd0aCgpe1xyXG4gICAgICBsZXQgbCA9IDA7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wb2ludHMubGVuZ3RoIC0gMTsgaSsrKXtcclxuICAgICAgICAgbGV0IGZyb20gPSB0aGlzLnBvaW50c1tpXTtcclxuICAgICAgICAgbGV0IHRvID0gdGhpcy5wb2ludHNbaSArIDFdO1xyXG5cclxuICAgICAgICAgbCArPSBWZWN0b3IyLmRpc3RhbmNlKGZyb20sIHRvKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGw7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEN1cnZlIH0gZnJvbSBcInV0aWwvQ3VydmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3Iye1xyXG4gICB4OiBudW1iZXI7XHJcbiAgIHk6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCl7XHJcbiAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgIHRoaXMueSA9IHk7XHJcbiAgIH1cclxuXHJcbiAgIGFkZChvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHRoaXMueCArPSBvdGhlci54O1xyXG4gICAgICB0aGlzLnkgKz0gb3RoZXIueTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIHN1YihvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHRoaXMueCAtPSBvdGhlci54O1xyXG4gICAgICB0aGlzLnkgLT0gb3RoZXIueTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIG11bChvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHRoaXMueCAqPSBvdGhlci54O1xyXG4gICAgICB0aGlzLnkgKj0gb3RoZXIueTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIGRpdihvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHRoaXMueCAvPSBvdGhlci54O1xyXG4gICAgICB0aGlzLnkgLz0gb3RoZXIueTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIHNldChvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHRoaXMueCA9IG90aGVyLng7XHJcbiAgICAgIHRoaXMueSA9IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBzZXRaZXJvKCl7XHJcbiAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgIHRoaXMueSA9IDA7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBhcHBseSh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBuZWdhdGUoKXtcclxuICAgICAgdGhpcy54ID0gLXRoaXMueDtcclxuICAgICAgdGhpcy55ID0gLXRoaXMueTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBub3JtYWxpemUoKXtcclxuICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG5cclxuICAgICAgaWYobGVuZ3RoID4gMCl7XHJcbiAgICAgICAgIHRoaXMueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbm9ybWFsaXplZCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgc3FyTGVuZ3RoKCl7XHJcbiAgICAgIHJldHVybiBWZWN0b3IyLmRvdCh0aGlzLCB0aGlzKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IGxlbmd0aCgpe1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuc3FyTGVuZ3RoKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IGFuZ2xlKCl7XHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgfVxyXG5cclxuICAgZGlzdGFuY2VUbyhvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHJldHVybiBWZWN0b3IyLmRpc3RhbmNlKHRoaXMsIG90aGVyKTtcclxuICAgfVxyXG4gICBkaXJlY3Rpb25UbyhvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHJldHVybiBWZWN0b3IyLmRpcmVjdGlvbih0aGlzLCBvdGhlcik7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBkaXJlY3Rpb24oYTogVmVjdG9yMiwgYjogVmVjdG9yMil7XHJcbiAgICAgIHJldHVybiBiLmNsb25lKCkuc3ViKGEpO1xyXG4gICB9XHJcbiAgIFxyXG4gICBzdGF0aWMgZGlzdGFuY2UoYTogVmVjdG9yMiwgYjogVmVjdG9yMil7XHJcbiAgICAgIGxldCBkaXN0WCA9IGEueCAtIGIueDtcclxuICAgICAgbGV0IGRpc3RZID0gYS55IC0gYi55O1xyXG5cclxuICAgICAgcmV0dXJuIE1hdGguc3FydChkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WSk7XHJcbiAgIH1cclxuXHJcbiAgIGxlcnBUbyhvdGhlcjogVmVjdG9yMiwgZjogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIFZlY3RvcjIubGVycE91dCh0aGlzLCBvdGhlciwgdGhpcywgZik7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBsZXJwKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIsIGY6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB0aGlzLmxlcnBPdXQoYSwgYiwgbmV3IFZlY3RvcjIoKSwgZik7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBsZXJwT3V0KGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIsIG91dDogVmVjdG9yMiwgZjogbnVtYmVyKXtcclxuICAgICAgb3V0LnggPSBDdXJ2ZS5sZXJwKGEueCwgYi54LCBmKTtcclxuICAgICAgb3V0LnkgPSBDdXJ2ZS5sZXJwKGEueSwgYi55LCBmKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBvdXQ7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBkb3QoYTogVmVjdG9yMiwgYjogVmVjdG9yMil7XHJcbiAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBhbmdsZWQoYW5nbGU6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yMihNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKSk7XHJcbiAgIH1cclxuXHJcbiAgIGNsb25lKCl7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLngsIHRoaXMueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSBcIi4vQ29sbGlkZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb3hDb2xsaWRlciBleHRlbmRzIENvbGxpZGVye1xyXG4gICBvZmZzZXQ6IFZlY3RvcjI7XHJcbiAgIHNpemU6IFZlY3RvcjI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihzaXplOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKSwgb2Zmc2V0OiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKSl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICB9XHJcblxyXG4gICBnZXRCb3VuZHMocG9zaXRpb246IFZlY3RvcjIsIG91dDogQUFCQilcclxuICAgeyAgXHJcbiAgICAgIHJldHVybiBvdXQuc2V0KFxyXG4gICAgICAgICBwb3NpdGlvbi54IC0gdGhpcy5vZmZzZXQueCwgXHJcbiAgICAgICAgIHBvc2l0aW9uLnkgLSB0aGlzLm9mZnNldC55LFxyXG4gICAgICAgICBwb3NpdGlvbi54ICsgdGhpcy5zaXplLnggLSB0aGlzLm9mZnNldC54LFxyXG4gICAgICAgICBwb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgLSB0aGlzLm9mZnNldC55KTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGZyb21BQUJCKGFhYmI6IEFBQkIpe1xyXG4gICAgICByZXR1cm4gbmV3IEJveENvbGxpZGVyKG5ldyBWZWN0b3IyKGFhYmIud2lkdGgsIGFhYmIuaGVpZ2h0KSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29sbGlkZXJ7XHJcbiAgIGFic3RyYWN0IGdldEJvdW5kcyhwb3NpdGlvbjogVmVjdG9yMiwgb3V0OiBBQUJCKTogQUFCQjtcclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIi4vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tIFwiLi9Db2xsaWRlclwiO1xyXG5pbXBvcnQgeyBUaWxlQ29sbGlkZXIgfSBmcm9tIFwiLi9UaWxlQ29sbGlkZXJcIjtcclxuXHJcbi8vIFRPRE8gcHJldmVudCBtZW1vcnkgYWxsb2NhdGlvbiBoZXJlLlxyXG4vLyBTaG91bGQgbWF5YmUgYmUgYSBjb2xsaXNpb24gY2xhc3MsIHRoYXQgaGFzIFxyXG4vLyBhbGwgdGhpcyBtZW1vcnkgcHJlYWxsb2NhdGVkLlxyXG5cclxuLy8gSXQgYmUgZmluZSBmb3Igbm93IHRob1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuc3R1Y2soc2VsZjogQ29sbGlkZXIsIG90aGVyOiBDb2xsaWRlciwgcmVsYXRpdmVQb3NpdGlvbjogVmVjdG9yMiwgcmVsYXRpdmVWZWxvY2l0eTogVmVjdG9yMik6IFZlY3RvcjJ8dW5kZWZpbmVke1xyXG4gICBpZihzZWxmIGluc3RhbmNlb2YgQm94Q29sbGlkZXIpe1xyXG4gICAgICBpZihvdGhlciBpbnN0YW5jZW9mIEJveENvbGxpZGVyKXtcclxuICAgICAgICAgcmV0dXJuIHVuc3R1Y2tCb3hCb3goc2VsZiwgb3RoZXIsIHJlbGF0aXZlUG9zaXRpb24sIHJlbGF0aXZlVmVsb2NpdHkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYob3RoZXIgaW5zdGFuY2VvZiBUaWxlQ29sbGlkZXIpe1xyXG4gICAgICAgICByZXR1cm4gdW5zdHVja0JveFRpbGUoc2VsZiwgb3RoZXIsIHJlbGF0aXZlUG9zaXRpb24sIHJlbGF0aXZlVmVsb2NpdHkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY29sbGlzaW9uIGZvdW5kIGZvciAke3NlbGYuY29uc3RydWN0b3IubmFtZX0gYW5kICR7b3RoZXIuY29uc3RydWN0b3IubmFtZX1gKTtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIGVsc2UgaWYoc2VsZiBpbnN0YW5jZW9mIFRpbGVDb2xsaWRlcil7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY29sbGlzaW9uIGZvdW5kIGZvciAke3NlbGYuY29uc3RydWN0b3IubmFtZX0gYW5kICR7b3RoZXIuY29uc3RydWN0b3IubmFtZX1gKTtcclxuICAgICAgLy8gaWYob3RoZXIgaW5zdGFuY2VvZiBCb3hDb2xsaWRlcil7XHJcbiAgICAgIC8vICAgIHJldHVybiB1bnN0dWNrQm94VGlsZShvdGhlclBvc2l0aW9uLCBvdGhlciwgcG9zaXRpb24sIHNlbGYsIHVuc3R1Y2tWZWN0b3IpPy5uZWdhdGUoKTtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBlbHNle1xyXG4gICAgICAvLyB9XHJcbiAgIH1cclxuICAgZWxzZXtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBjb2xsaXNpb24gZm91bmQgZm9yICR7c2VsZi5jb25zdHJ1Y3Rvci5uYW1lfSBhbmQgJHtvdGhlci5jb25zdHJ1Y3Rvci5uYW1lfWApO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bnN0dWNrQm94VGlsZShzZWxmOiBCb3hDb2xsaWRlciwgb3RoZXI6IFRpbGVDb2xsaWRlciwgcmVsYXRpdmVQb3NpdGlvbjogVmVjdG9yMiwgcmVsYXRpdmVWZWxvY2l0eTogVmVjdG9yMik6IFZlY3RvcjJ8dW5kZWZpbmVke1xyXG4gICBsZXQgc2VsZkJvdW5kcyA9IHNlbGYuZ2V0Qm91bmRzKG5ldyBWZWN0b3IyKCksIG5ldyBBQUJCKCkpO1xyXG4gICBsZXQgb3RoZXJCb3VuZHMgPSBvdGhlci5nZXRCb3VuZHMocmVsYXRpdmVQb3NpdGlvbiwgbmV3IEFBQkIoKSk7XHJcblxyXG4gICBsZXQgeE92ZXJsYXAgPSAwO1xyXG4gICBsZXQgeU92ZXJsYXAgPSAwO1xyXG5cclxuICAgbGV0IHhDb2xsaWRlZCA9IGZhbHNlO1xyXG4gICBsZXQgeUNvbGxpZGVkID0gZmFsc2U7XHJcblxyXG4gICBpZihvdGhlci5sZWZ0ICYmIHJlbGF0aXZlVmVsb2NpdHkueCA+IDApe1xyXG4gICAgICB4T3ZlcmxhcCA9IC0oc2VsZkJvdW5kcy5yaWdodCAtIG90aGVyQm91bmRzLmxlZnQpO1xyXG4gICAgICB4Q29sbGlkZWQgPSB0cnVlO1xyXG4gICB9ZWxzZSBpZihvdGhlci5yaWdodCAmJiByZWxhdGl2ZVZlbG9jaXR5LnggPCAwKXtcclxuICAgICAgeE92ZXJsYXAgPSAtKHNlbGZCb3VuZHMubGVmdCAtIG90aGVyQm91bmRzLnJpZ2h0KTtcclxuICAgICAgeENvbGxpZGVkID0gdHJ1ZTtcclxuICAgfVxyXG4gICBcclxuICAgaWYob3RoZXIudG9wICYmIHJlbGF0aXZlVmVsb2NpdHkueSA+IDApe1xyXG4gICAgICB5T3ZlcmxhcCA9IC0oc2VsZkJvdW5kcy5ib3R0b20gLSBvdGhlckJvdW5kcy50b3ApO1xyXG4gICAgICB5Q29sbGlkZWQgPSB0cnVlO1xyXG4gICB9ZWxzZSBpZihvdGhlci5ib3R0b20gJiYgcmVsYXRpdmVWZWxvY2l0eS55IDwgMCl7XHJcbiAgICAgIHlPdmVybGFwID0gLShzZWxmQm91bmRzLnRvcCAtIG90aGVyQm91bmRzLmJvdHRvbSk7XHJcbiAgICAgIHlDb2xsaWRlZCA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIC8vIElmIGl0IF9jYW5fIGRvIGJvdGggYXhpcywgZG8gb25seSBfb25lX1xyXG4gICBpZih4Q29sbGlkZWQgJiYgeUNvbGxpZGVkKXtcclxuICAgICAgaWYoTWF0aC5hYnMoeE92ZXJsYXApID4gTWF0aC5hYnMoeU92ZXJsYXApKXtcclxuICAgICAgICAgeE92ZXJsYXAgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHlPdmVybGFwID0gMDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gbmV3IFZlY3RvcjIoeE92ZXJsYXAsIHlPdmVybGFwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuc3R1Y2tCb3hCb3goc2VsZjogQm94Q29sbGlkZXIsIG90aGVyOiBCb3hDb2xsaWRlciwgcmVsYXRpdmVQb3NpdGlvbjogVmVjdG9yMiwgcmVsYXRpdmVWZWxvY2l0eTogVmVjdG9yMik6IFZlY3RvcjJ8dW5kZWZpbmVke1xyXG4gICBsZXQgc2VsZkJvdW5kcyA9IHNlbGYuZ2V0Qm91bmRzKG5ldyBWZWN0b3IyKCksIG5ldyBBQUJCKCkpO1xyXG4gICBsZXQgb3RoZXJCb3VuZHMgPSBvdGhlci5nZXRCb3VuZHMocmVsYXRpdmVQb3NpdGlvbiwgbmV3IEFBQkIoKSk7XHJcblxyXG4gICBsZXQgeE92ZXJsYXAgPSBzZWxmQm91bmRzLm1pbk92ZXJsYXBYV2l0aEJpYXMob3RoZXJCb3VuZHMsIHJlbGF0aXZlVmVsb2NpdHkueCk7XHJcbiAgIGxldCB5T3ZlcmxhcCA9IHNlbGZCb3VuZHMubWluT3ZlcmxhcFlXaXRoQmlhcyhvdGhlckJvdW5kcywgcmVsYXRpdmVWZWxvY2l0eS55KTtcclxuXHJcbiAgIGlmKE1hdGguYWJzKHhPdmVybGFwKSA8IE1hdGguYWJzKHlPdmVybGFwKSl7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yMih4T3ZlcmxhcCwgMCk7XHJcbiAgIH1cclxuICAgZWxzZXtcclxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDAsIHlPdmVybGFwKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tIFwiLi9Db2xsaWRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVDb2xsaWRlciBleHRlbmRzIENvbGxpZGVye1xyXG4gICBzaXplOiBWZWN0b3IyO1xyXG5cclxuICAgdG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGxlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgYm90dG9tOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihzaXplOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKSl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgIH1cclxuXHJcbiAgIGdldEJvdW5kcyhwb3NpdGlvbjogVmVjdG9yMiwgb3V0OiBBQUJCKVxyXG4gICB7ICBcclxuICAgICAgcmV0dXJuIG91dC5zZXQoXHJcbiAgICAgICAgIHBvc2l0aW9uLngsIFxyXG4gICAgICAgICBwb3NpdGlvbi55LFxyXG4gICAgICAgICBwb3NpdGlvbi54ICsgdGhpcy5zaXplLngsXHJcbiAgICAgICAgIHBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnR7XHJcbiAgIGdhbWUhOiBHYW1lO1xyXG4gICBnYW1lT2JqZWN0ITogR2FtZU9iamVjdDtcclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgfVxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICB9XHJcblxyXG4gICBnZXQgc2NlbmUoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2FtZU9iamVjdC5zY2VuZTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi9TY2VuZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG4gICBjb21wb25lbnRzOiBDb21wb25lbnRbXTtcclxuICAgc2NlbmUhOiBTY2VuZTtcclxuXHJcbiAgIGdhbWUhOiBHYW1lO1xyXG4gICBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBcclxuICAgYWx3YXlzVXBkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICAgfVxyXG4gICBcclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgaWYodGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmouaW5pdChnYW1lKSk7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2gob2JqID0+IG9iai5kZXN0cm95KCkpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmoudXBkYXRlKGRlbHRhKSk7XHJcbiAgIH1cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmouZml4ZWRVcGRhdGUoZGVsdGEpKTtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChvYmogPT4gb2JqLmRyYXcoZ3JhcGhpY3MpKTtcclxuICAgfVxyXG5cclxuICAgYWRkQ29tcG9uZW50PFQgZXh0ZW5kcyBDb21wb25lbnQ+KGNvbXBvbmVudDogVCl7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgIGNvbXBvbmVudC5nYW1lT2JqZWN0ID0gdGhpcztcclxuICAgICAgXHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm4gY29tcG9uZW50O1xyXG5cclxuICAgICAgY29tcG9uZW50LmluaXQodGhpcy5nYW1lKTtcclxuXHJcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgIH1cclxuXHJcbiAgIHJlbW92ZUNvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCl7XHJcbiAgICAgIGxldCBpZHggPSB0aGlzLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpO1xyXG5cclxuICAgICAgaWYoaWR4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICBcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XHJcbiAgIH1cclxuXHJcbiAgIGZpbmRDb21wb25lbnQocHJlZGljYXRlOiAoY29tcG9uZW50OiBDb21wb25lbnQpID0+IGJvb2xlYW4pe1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmZpbmQocHJlZGljYXRlKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBQaHlzaWNzIH0gZnJvbSBcImVuZ2luZS9QaHlzaWNzXCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCJncmFwaGljcy9DYW1lcmFcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgUGFydGljbGVTeXN0ZW0gfSBmcm9tIFwiZ3JhcGhpY3MvUGFydGljbGVTeXN0ZW1cIjtcclxuaW1wb3J0IHsgVGlsZU1hcCB9IGZyb20gXCJ0aWxlbWFwL1RpbGVNYXBcIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZXtcclxuICAgY2FtZXJhOiBDYW1lcmE7XHJcbiAgIGdhbWVPYmplY3RzOiBHYW1lT2JqZWN0W107XHJcbiAgIGdhbWUhOiBHYW1lO1xyXG4gICB0aWxlbWFwPzogVGlsZU1hcDtcclxuXHJcbiAgIHBoeXNpY3M6IFBoeXNpY3M7XHJcbiAgIHBhcnRpY2xlU3lzdGVtOiBQYXJ0aWNsZVN5c3RlbTtcclxuXHJcbiAgIC8vIFRoaXMgZ2V0cyB1c2VkIGZvciB0cmFuc2l0aW9ucyA6KVxyXG4gICBwYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEoKTtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xyXG4gICAgICB0aGlzLnBoeXNpY3MgPSBuZXcgUGh5c2ljcygpO1xyXG5cclxuICAgICAgdGhpcy5wYXJ0aWNsZVN5c3RlbSA9IG5ldyBQYXJ0aWNsZVN5c3RlbSgpO1xyXG4gICB9XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBpZih0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouaW5pdChnYW1lKSk7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouZGVzdHJveSgpKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBpZighdGhpcy5wYXVzZWQpIHRoaXMudGlsZW1hcD8udXBkYXRlKGRlbHRhLCB0aGlzLmNhbWVyYS5nZXRCb3VuZHMoKSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IHsgaWYoIXRoaXMucGF1c2VkIHx8IG9iai5hbHdheXNVcGRhdGUpIG9iai51cGRhdGUoZGVsdGEpOyB9KTtcclxuXHJcbiAgICAgIGlmKCF0aGlzLnBhdXNlZCkgdGhpcy5wYXJ0aWNsZVN5c3RlbS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICBcclxuICAgICAgaWYoIXRoaXMucGF1c2VkKSB0aGlzLnBoeXNpY3MudXBkYXRlKGRlbHRhKTtcclxuICAgfVxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiB7IGlmKCF0aGlzLnBhdXNlZCB8fCBvYmouYWx3YXlzVXBkYXRlKSBvYmouZml4ZWRVcGRhdGUoZGVsdGEpOyB9KTtcclxuICAgICAgaWYoIXRoaXMucGF1c2VkKSB0aGlzLnBoeXNpY3MuZml4ZWRVcGRhdGUoZGVsdGEpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGdyYXBoaWNzLnNldENhbWVyYSh0aGlzLmNhbWVyYSk7XHJcblxyXG4gICAgICB0aGlzLnRpbGVtYXA/LmRyYXcoZ3JhcGhpY3MsIHRoaXMuY2FtZXJhLmdldEJvdW5kcygpKTtcclxuICAgICAgdGhpcy5wYXJ0aWNsZVN5c3RlbS5kcmF3KGdyYXBoaWNzKTtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouZHJhdyhncmFwaGljcykpO1xyXG4gICAgICB0aGlzLnBoeXNpY3MuZHJhd0RlYnVnKGdyYXBoaWNzKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlU2l6ZSgpe1xyXG4gICAgICBsZXQgYXNwID0gdGhpcy5nYW1lLmNhbnZhcy53aWR0aCAvIHRoaXMuZ2FtZS5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICB0aGlzLmNhbWVyYS53aWR0aCA9IHRoaXMuY2FtZXJhLmhlaWdodCAqIGFzcDtcclxuICAgfVxyXG5cclxuICAgYWRkR2FtZU9iamVjdChvYmo6IEdhbWVPYmplY3Qpe1xyXG4gICAgICB0aGlzLmdhbWVPYmplY3RzLnB1c2gob2JqKTtcclxuICAgICAgb2JqLnNjZW5lID0gdGhpcztcclxuXHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcblxyXG4gICAgICBvYmouaW5pdCh0aGlzLmdhbWUpO1xyXG4gICB9XHJcbiAgIFxyXG4gICByZW1vdmVHYW1lT2JqZWN0KG9iajogR2FtZU9iamVjdCl7XHJcbiAgICAgIGxldCBpZHggPSB0aGlzLmdhbWVPYmplY3RzLmluZGV4T2Yob2JqKTtcclxuXHJcbiAgICAgIGlmKGlkeCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMuc3BsaWNlKGlkeCwgMSk7XHJcblxyXG4gICAgICBpZighdGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG5cclxuICAgICAgb2JqLmRlc3Ryb3koKTtcclxuICAgfVxyXG5cclxuICAgZmluZE9iamVjdChwcmVkaWNhdGU6IChjb21wb25lbnQ6IEdhbWVPYmplY3QpID0+IGJvb2xlYW4pe1xyXG4gICAgICByZXR1cm4gdGhpcy5nYW1lT2JqZWN0cy5maW5kKHByZWRpY2F0ZSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInNjZW5lL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWduYWwgfSBmcm9tIFwic2lnbmFscy9TaWduYWxcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIi4vVHJhbnNmb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmlnaWRib2R5IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICB0cmFuc2Zvcm0hOiBUcmFuc2Zvcm07XHJcbiAgIHZlbG9jaXR5OiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgbWFzczogbnVtYmVyID0gMTtcclxuICAgYm91bmN5bmVzczogbnVtYmVyID0gMDtcclxuXHJcbiAgIHByZXZpb3VzUG9zaXRpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICB1bnN0dWNrRGlzdGFuY2U6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG5cclxuICAgY29sbGlkZWRMZWZ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGNvbGxpZGVkUmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY29sbGlkZWRUb3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY29sbGlkZWRCb3R0b206IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGtpbmVtYXRpYzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBzb2xpZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICB1c2VEeW5hbWljQ29sbGlzaW9uczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgb25Db2xsaXNpb246IFNpZ25hbDxSaWdpZGJvZHk+ID0gbmV3IFNpZ25hbDxSaWdpZGJvZHk+KCk7XHJcblxyXG4gICBjb2xsaWRlcjogQ29sbGlkZXIgPSBuZXcgQm94Q29sbGlkZXIoKTtcclxuXHJcbiAgIHByaXZhdGUgYWFiYjogQUFCQjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmFhYmIgPSBuZXcgQUFCQigwLCAwLCAwLCAwKTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5hZGRCb2R5KHRoaXMpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuZ2FtZU9iamVjdC5maW5kQ29tcG9uZW50KGMgPT4gYyBpbnN0YW5jZW9mIFRyYW5zZm9ybSkgYXMgVHJhbnNmb3JtO1xyXG4gICB9XHJcblxyXG4gICBkZXN0cm95KCl7XHJcbiAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5yZW1vdmVCb2R5KHRoaXMpO1xyXG4gICB9XHJcblxyXG4gICBjb2xsaWRlcyhvdGhlcjogUmlnaWRib2R5KXtcclxuICAgICAgcmV0dXJuIG90aGVyLmJvdW5kaW5nQm94Lm92ZXJsYXBzKHRoaXMuYm91bmRpbmdCb3gpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgYm91bmRpbmdCb3goKXtcclxuICAgICAgcmV0dXJuIHRoaXMuY29sbGlkZXIuZ2V0Qm91bmRzKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLCB0aGlzLmFhYmIpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNmb3JtIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBwb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgIFxyXG4gICAvLyBJbnRlcnBvbGF0ZWQgcG9zaXRpb25cclxuICAgaW50ZXJwb2xhdGVkUG9zaXRpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG59IiwiZXhwb3J0IGNsYXNzIFNpZ25hbDxUPntcclxuICAgZnVuY3Rpb25zOiAoKHR5cGU6IFQpID0+IHZvaWQpW107XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLmZ1bmN0aW9ucyA9IFtdO1xyXG4gICB9XHJcblxyXG4gICBsaXN0ZW4oZnVuYzogKHR5cGU6IFQpID0+IHZvaWQpe1xyXG4gICAgICB0aGlzLmZ1bmN0aW9ucy5wdXNoKGZ1bmMpO1xyXG4gICAgICByZXR1cm4gZnVuYztcclxuICAgfVxyXG4gICByZW1vdmUoZnVuYzogKHR5cGU6IFQpID0+IHZvaWQpe1xyXG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmZ1bmN0aW9ucy5pbmRleE9mKGZ1bmMpO1xyXG4gICAgICBpZihpbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zLnNwbGljZShpbmRleCk7XHJcbiAgIH1cclxuXHJcbiAgIGVtaXQoZXZlbnQgOiBUKXtcclxuICAgICAgdGhpcy5mdW5jdGlvbnMuZm9yRWFjaChmdW5jID0+IGZ1bmMoZXZlbnQpKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcImdyYXBoaWNzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBSZXNvdXJjZU1hbmFnZXIgfSBmcm9tIFwiZ3JhcGhpY3MvUmVzb3VyY2VNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFNwcml0ZSwgU3ByaXRlU2hlZXQgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFRpbGVDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9UaWxlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgQ29sb3IgfSBmcm9tIFwidXRpbC9Db2xvclwiO1xyXG5pbXBvcnQgeyBhc3luY0xvYWRJbWFnZSB9IGZyb20gXCJ1dGlsL1RlbXBcIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlRnJvbVRpbGVzZXQsIFRpbGVkTWFwLCBUaWxlZE9iamVjdCwgVGlsZWRPYmplY3RMYXllciwgVGlsZWRPYmplY3RMYXllclR5cGUsIFRpbGVkVGlsZUxheWVyLCBUaWxlZFRpbGVMYXllclR5cGUsIFRpbGVkQ29sbGlkZXJMYXllck5hbWUsIFRpbGVkSW1hZ2VMYXllciwgVGlsZWRUaWxlc2V0LCBUaWxlZEltYWdlTGF5ZXJUeXBlIH0gZnJvbSBcIi4vVGlsZWRNYXBcIjtcclxuXHJcbnR5cGUgVGlsZW1hcE9iamVjdExvYWRlciA9IChvYmplY3Q6IFRpbGVkT2JqZWN0KSA9PiB2b2lkO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVtYXBMYXllcntcclxuICAgdGlsZW1hcDogVGlsZU1hcDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHRpbGVtYXA6IFRpbGVNYXApe1xyXG4gICAgICB0aGlzLnRpbGVtYXAgPSB0aWxlbWFwO1xyXG4gICB9XHJcbiAgIFxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlciwgYm91bmRzOiBBQUJCKXtcclxuXHJcbiAgIH1cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIGJvdW5kczogQUFCQil7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVtYXBUaWxlTGF5ZXIgZXh0ZW5kcyBUaWxlbWFwTGF5ZXJ7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG4gICB0aWxlczogKEFuaW1hdGlvbnx1bmRlZmluZWQpW107XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih0aWxlbWFwOiBUaWxlTWFwLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIHN1cGVyKHRpbGVtYXApO1xyXG4gICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy50aWxlcyA9IFtdO1xyXG5cclxuICAgICAgLy8gbGVuZ3RoIHN0dWZmLi4uIDonKVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgd2lkdGggKiBoZWlnaHQ7IGkrKykgdGhpcy50aWxlcy5wdXNoKHVuZGVmaW5lZCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldFRpbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy50aWxlc1t4ICsgeSAqIHRoaXMud2lkdGhdO1xyXG4gICB9XHJcbiAgIHNldFRpbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIGFuaW1hdGlvbjogQW5pbWF0aW9uKXtcclxuICAgICAgdGhpcy50aWxlc1t4ICsgeSAqIHRoaXMud2lkdGhdID0gYW5pbWF0aW9uO1xyXG4gICB9XHJcbiAgIHNldFRpbGVGcm9tSW5kZXgoaW5kZXg6IG51bWJlciwgYW5pbWF0aW9uOiBBbmltYXRpb24pe1xyXG4gICAgICB0aGlzLnRpbGVzW2luZGV4XSA9IGFuaW1hdGlvbjtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIsIGJvdW5kczogQUFCQil7XHJcbiAgICAgIGxldCB0aWxlV2lkdGggPSB0aGlzLnRpbGVtYXAudGlsZVdpZHRoO1xyXG4gICAgICBsZXQgdGlsZUhlaWdodCA9IHRoaXMudGlsZW1hcC50aWxlSGVpZ2h0O1xyXG5cclxuICAgICAgbGV0IHN0YXJ0WCA9IE1hdGguZmxvb3IoTWF0aC5tYXgoMCwgYm91bmRzLmxlZnQgLyB0aWxlV2lkdGgpKTtcclxuICAgICAgbGV0IGVuZFggPSBNYXRoLmZsb29yKE1hdGgubWluKHRoaXMud2lkdGgsIGJvdW5kcy5yaWdodCAvIHRpbGVXaWR0aCArIDEpKTtcclxuXHJcbiAgICAgIGxldCBzdGFydFkgPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGJvdW5kcy50b3AgLyB0aWxlSGVpZ2h0KSk7XHJcbiAgICAgIGxldCBlbmRZID0gTWF0aC5mbG9vcihNYXRoLm1pbih0aGlzLmhlaWdodCwgYm91bmRzLmJvdHRvbSAvIHRpbGVIZWlnaHQgKyAxKSk7XHJcbiAgICAgIFxyXG4gICAgICBmb3IobGV0IHggPSBzdGFydFg7IHggPCBlbmRYOyB4Kyspe1xyXG4gICAgICAgICBmb3IobGV0IHkgPSBzdGFydFk7IHkgPCBlbmRZOyB5Kyspe1xyXG4gICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMuZ2V0VGlsZSh4LCB5KTtcclxuICAgICAgICAgICAgaWYodGlsZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIHRpbGUudXBkYXRlKGRlbHRhKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuICAgXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzLCBib3VuZHM6IEFBQkIpe1xyXG4gICAgICBsZXQgdGlsZVdpZHRoID0gdGhpcy50aWxlbWFwLnRpbGVXaWR0aDtcclxuICAgICAgbGV0IHRpbGVIZWlnaHQgPSB0aGlzLnRpbGVtYXAudGlsZUhlaWdodDtcclxuXHJcbiAgICAgIGxldCBzdGFydFggPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGJvdW5kcy5sZWZ0IC8gdGlsZVdpZHRoKSk7XHJcbiAgICAgIGxldCBlbmRYID0gTWF0aC5mbG9vcihNYXRoLm1pbih0aGlzLndpZHRoLCBib3VuZHMucmlnaHQgLyB0aWxlV2lkdGggKyAxKSk7XHJcblxyXG4gICAgICBsZXQgc3RhcnRZID0gTWF0aC5mbG9vcihNYXRoLm1heCgwLCBib3VuZHMudG9wIC8gdGlsZUhlaWdodCkpO1xyXG4gICAgICBsZXQgZW5kWSA9IE1hdGguZmxvb3IoTWF0aC5taW4odGhpcy5oZWlnaHQsIGJvdW5kcy5ib3R0b20gLyB0aWxlSGVpZ2h0ICsgMSkpO1xyXG5cclxuICAgICAgZm9yKGxldCB4ID0gc3RhcnRYOyB4IDwgZW5kWDsgeCsrKXtcclxuICAgICAgICAgZm9yKGxldCB5ID0gc3RhcnRZOyB5IDwgZW5kWTsgeSsrKXtcclxuICAgICAgICAgICAgbGV0IHRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XHJcbiAgICAgICAgICAgIGlmKHRpbGUgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBncmFwaGljcy5kcmF3U3ByaXRlU2ltcGxlKHRpbGUuZnJhbWUsIHggKiB0aWxlV2lkdGgsIHkgKiB0aWxlSGVpZ2h0KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVtYXBJbWFnZUxheWVyIGV4dGVuZHMgVGlsZW1hcExheWVyIHtcclxuICAgaW1hZ2U6IFNwcml0ZXx1bmRlZmluZWQ7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih0aWxlbWFwOiBUaWxlTWFwLCBpbWFnZT86IFNwcml0ZSl7XHJcbiAgICAgIHN1cGVyKHRpbGVtYXApO1xyXG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgIH1cclxuXHJcbiAgIFxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgYm91bmRzOiBBQUJCKXtcclxuICAgICAgaWYodGhpcy5pbWFnZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICBncmFwaGljcy5kcmF3U3ByaXRlU2ltcGxlKHRoaXMuaW1hZ2UsIGJvdW5kcy5jZW50ZXJYIC0gdGhpcy5pbWFnZS53aWR0aCAvIDIsIGJvdW5kcy5jZW50ZXJZIC0gdGhpcy5pbWFnZS5oZWlnaHQgLyAyKVxyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlbWFwQ29sbGlzaW9uTGF5ZXIgZXh0ZW5kcyBUaWxlbWFwTGF5ZXJ7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG4gICB0aWxlczogYm9vbGVhbltdO1xyXG5cclxuICAgY29uc3RydWN0b3IodGlsZW1hcDogVGlsZU1hcCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpe1xyXG4gICAgICBzdXBlcih0aWxlbWFwKTtcclxuXHJcbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLnRpbGVtYXAgPSB0aWxlbWFwO1xyXG5cclxuICAgICAgdGhpcy50aWxlcyA9IFtdO1xyXG5cclxuICAgICAgLy8gbGVuZ3RoIHN0dWZmLi4uIDonKVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgd2lkdGggKiBoZWlnaHQ7IGkrKykgdGhpcy50aWxlcy5wdXNoKGZhbHNlKTtcclxuICAgfVxyXG5cclxuICAgaXNQaXhlbFNvbGlkKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaXNUaWxlU29saWQoXHJcbiAgICAgICAgIE1hdGguZmxvb3IoeCAvIHRoaXMudGlsZW1hcC50aWxlV2lkdGgpLFxyXG4gICAgICAgICBNYXRoLmZsb29yKHkgLyB0aGlzLnRpbGVtYXAudGlsZUhlaWdodClcclxuICAgICAgKTtcclxuICAgfVxyXG5cclxuICAgaXNUaWxlU29saWQoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRUaWxlKHgsIHkpO1xyXG4gICB9XHJcblxyXG4gICBnZXRUaWxlQ29sbGlkZXIoeDogbnVtYmVyLCB5OiBudW1iZXIsIHRpbGVDb2xsaWRlcjogVGlsZUNvbGxpZGVyKXtcclxuICAgICAgdGlsZUNvbGxpZGVyLnNpemUueCA9IHRoaXMudGlsZW1hcC50aWxlV2lkdGg7XHJcbiAgICAgIHRpbGVDb2xsaWRlci5zaXplLnkgPSB0aGlzLnRpbGVtYXAudGlsZUhlaWdodDtcclxuXHJcbiAgICAgIHRpbGVDb2xsaWRlci50b3AgPSAhdGhpcy5pc1RpbGVTb2xpZCh4LCB5IC0gMSk7XHJcbiAgICAgIHRpbGVDb2xsaWRlci5ib3R0b20gPSAhdGhpcy5pc1RpbGVTb2xpZCh4LCB5ICsgMSk7XHJcbiAgICAgIHRpbGVDb2xsaWRlci5sZWZ0ID0gIXRoaXMuaXNUaWxlU29saWQoeCAtIDEsIHkpO1xyXG4gICAgICB0aWxlQ29sbGlkZXIucmlnaHQgPSAhdGhpcy5pc1RpbGVTb2xpZCh4ICsgMSwgeSk7XHJcblxyXG4gICAgICByZXR1cm4gdGlsZUNvbGxpZGVyO1xyXG4gICB9XHJcblxyXG4gICBnZXRUaWxlKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgaWYoeCA8IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYoeCA+PSB0aGlzLndpZHRoKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmKHkgPCAwKSByZXR1cm4gZmFsc2U7IFxyXG4gICAgICBpZih5ID49IHRoaXMuaGVpZ2h0KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy50aWxlc1t4ICsgeSAqIHRoaXMud2lkdGhdO1xyXG4gICB9XHJcbiAgIHNldFRpbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNvbGlkOiBib29sZWFuKXtcclxuICAgICAgdGhpcy50aWxlc1t4ICsgeSAqIHRoaXMud2lkdGhdID0gc29saWQ7XHJcbiAgIH1cclxuICAgc2V0VGlsZUZyb21JbmRleChpbmRleDogbnVtYmVyLCBzb2xpZDogYm9vbGVhbil7XHJcbiAgICAgIHRoaXMudGlsZXNbaW5kZXhdID0gc29saWQ7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdEZWJ1ZyhncmFwaGljczogR3JhcGhpY3MsIHRpbGVXaWR0aDogbnVtYmVyLCB0aWxlSGVpZ2h0OiBudW1iZXIsIGJvdW5kczogQUFCQil7XHJcbiAgICAgIGxldCBzdGFydFggPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGJvdW5kcy5sZWZ0IC8gdGlsZVdpZHRoKSk7XHJcbiAgICAgIGxldCBlbmRYID0gTWF0aC5mbG9vcihNYXRoLm1pbih0aGlzLndpZHRoLCBib3VuZHMucmlnaHQgLyB0aWxlV2lkdGggKyAxKSk7XHJcblxyXG4gICAgICBsZXQgc3RhcnRZID0gTWF0aC5mbG9vcihNYXRoLm1heCgwLCBib3VuZHMudG9wIC8gdGlsZUhlaWdodCkpO1xyXG4gICAgICBsZXQgZW5kWSA9IE1hdGguZmxvb3IoTWF0aC5taW4odGhpcy5oZWlnaHQsIGJvdW5kcy5ib3R0b20gLyB0aWxlSGVpZ2h0ICsgMSkpO1xyXG5cclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IoMjU1LCA5MCwgMjAsIDAuOCk7XHJcblxyXG4gICAgICBsZXQgY29sbGlkZXIgPSBuZXcgVGlsZUNvbGxpZGVyKCk7XHJcbiAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IDI7XHJcblxyXG4gICAgICBmb3IobGV0IHggPSBzdGFydFg7IHggPCBlbmRYOyB4Kyspe1xyXG4gICAgICAgICBmb3IobGV0IHkgPSBzdGFydFk7IHkgPCBlbmRZOyB5Kyspe1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc1RpbGVTb2xpZCh4LCB5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb2xsaWRlciA9IHRoaXMuZ2V0VGlsZUNvbGxpZGVyKHgsIHksIGNvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLnRvcCl7XHJcbiAgICAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0YW5nbGUoeCAqIHRpbGVXaWR0aCwgeSAqIHRpbGVIZWlnaHQsIHRpbGVXaWR0aCwgdGhpY2tuZXNzLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjb2xsaWRlci5ib3R0b20pe1xyXG4gICAgICAgICAgICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKHggKiB0aWxlV2lkdGgsIHkgKiB0aWxlSGVpZ2h0ICsgdGlsZUhlaWdodCAtIHRoaWNrbmVzcywgdGlsZVdpZHRoLCB0aGlja25lc3MsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLmxlZnQpe1xyXG4gICAgICAgICAgICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKHggKiB0aWxlV2lkdGgsIHkgKiB0aWxlSGVpZ2h0LCB0aGlja25lc3MsIHRpbGVIZWlnaHQsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLnJpZ2h0KXtcclxuICAgICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3RhbmdsZSh4ICogdGlsZVdpZHRoICsgdGlsZVdpZHRoIC0gdGhpY2tuZXNzLCB5ICogdGlsZUhlaWdodCwgdGhpY2tuZXNzLCB0aWxlSGVpZ2h0LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCB7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG4gICB0aWxlV2lkdGg6IG51bWJlcjtcclxuICAgdGlsZUhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgYmFja2dyb3VuZENvbG9yOiBDb2xvciA9IG5ldyBDb2xvcigxLCAxLCAxLCAxKTtcclxuXHJcbiAgIGxheWVyczogVGlsZW1hcExheWVyW107XHJcbiAgIGNvbGxpZGVyczogVGlsZW1hcENvbGxpc2lvbkxheWVyW107XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgIHRoaXMudGlsZVdpZHRoID0gdGlsZVdpZHRoO1xyXG4gICAgICB0aGlzLnRpbGVIZWlnaHQgPSB0aWxlSGVpZ2h0O1xyXG4gICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICAgICB0aGlzLmNvbGxpZGVycyA9IFtdO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgYm91bmRzOiBBQUJCKXtcclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IuciwgdGhpcy5iYWNrZ3JvdW5kQ29sb3IuZywgdGhpcy5iYWNrZ3JvdW5kQ29sb3IuYiwgdGhpcy5iYWNrZ3JvdW5kQ29sb3IuYSk7XHJcbiAgICAgIGdyYXBoaWNzLmRyYXdSZWN0YW5nbGUoMCwgMCwgdGhpcy53aWR0aCAqIHRoaXMudGlsZVdpZHRoLCB0aGlzLmhlaWdodCAqIHRoaXMudGlsZUhlaWdodCwgdHJ1ZSk7XHJcblxyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcigxLCAxLCAxLCAxKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gbGF5ZXIuZHJhdyhncmFwaGljcywgYm91bmRzKSk7XHJcbiAgICAgIC8vIHRoaXMuY29sbGlkZXJzLmZvckVhY2gobGF5ZXIgPT4gbGF5ZXIuZHJhd0RlYnVnKGdyYXBoaWNzLCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0LCBib3VuZHMpKTtcclxuICAgfVxyXG5cclxuICAgLy8gVE9ETyBtYXliZSBtb3JlIGxpa2UgYmF0Y2ggdXBkYXRlIGV2ZXJ5IHggZnJhbWVzIG9yIGRldmlkZSB1cCB0aGUgd29yayBzb21laG93IG92ZXIgbXVwdGlwbGUgZnJhbWVzXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyLCBib3VuZHM6IEFBQkIpeyAgICAgIFxyXG4gICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IGxheWVyLnVwZGF0ZShkZWx0YSwgYm91bmRzKSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVRpbGVkTWFwKG1hcDogVGlsZWRNYXAsIHJlc291cmNlTWFuYWdlcjogUmVzb3VyY2VNYW5hZ2VyLCBsb2FkZXI6IFRpbGVtYXBPYmplY3RMb2FkZXIpe1xyXG4gICAgICBjb25zdCBSb290Rm9sZGVyID0gXCJhc3NldHMvbGV2ZWxzL1wiO1xyXG4gICAgICBsZXQgdGlsZW1hcCA9IG5ldyBUaWxlTWFwKG1hcC53aWR0aCwgbWFwLmhlaWdodCwgbWFwLnRpbGV3aWR0aCwgbWFwLnRpbGVoZWlnaHQpO1xyXG5cclxuICAgICAgdGlsZW1hcC5iYWNrZ3JvdW5kQ29sb3IgPSBDb2xvci5mcm9tSGV4KG1hcC5iYWNrZ3JvdW5kY29sb3IpITtcclxuICAgICAgXHJcbiAgICAgIC8vIFRJTEVTRVRTXHJcbiAgICAgIGxldCB0aWxlc2V0czoge3NldDogVGlsZWRUaWxlc2V0LCBzaGVldDogU3ByaXRlU2hlZXR9W10gPSBbXTtcclxuICAgICAgbGV0IHRpbGVzOiB7IFtrZXk6IG51bWJlcl06IEFuaW1hdGlvbiB9ID0ge307XHJcbiAgICAgIFxyXG4gICAgICBtYXAudGlsZXNldHMuZm9yRWFjaChzZXQgPT4ge1xyXG4gICAgICAgICBsZXQgc2hlZXQgPSByZXNvdXJjZU1hbmFnZXIubG9hZFNwcml0ZVNoZWV0KFJvb3RGb2xkZXIgKyBzZXQuaW1hZ2UpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgdGlsZXNldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHNldCxcclxuICAgICAgICAgICAgc2hlZXRcclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAvLyBMb2FkIGFsbCBkZWZhdWx0IGFuaW1hdGlvbnNcclxuICAgICAgICAgc2V0LnRpbGVzPy5mb3JFYWNoKHRpbGUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aWxlLmlkICsgc2V0LmZpcnN0Z2lkO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbiA9ICBuZXcgQW5pbWF0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICB0aWxlLmFuaW1hdGlvbi5mb3JFYWNoKGZyYW1lID0+IHtcclxuICAgICAgICAgICAgICAgYW5pbWF0aW9uLmFkZEZyYW1lKGdldFNwcml0ZUZyb21UaWxlc2V0KHNldCwgZnJhbWUudGlsZWlkLCBzaGVldCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5mcmFtZVJhdGUgPSA0O1xyXG5cclxuICAgICAgICAgICAgdGlsZXNbaW5kZXhdID0gYW5pbWF0aW9uO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBtYXAubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAvLyBUSUxFIExBWUVSU1xyXG4gICAgICAgICBpZihsYXllci50eXBlID09PSBUaWxlZFRpbGVMYXllclR5cGUgJiYgbGF5ZXIubmFtZSAhPT0gVGlsZWRDb2xsaWRlckxheWVyTmFtZSl7XHJcbiAgICAgICAgICAgIGxldCB0aWxlTGF5ZXIgPSBsYXllciBhcyBUaWxlZFRpbGVMYXllcjtcclxuXHJcbiAgICAgICAgICAgIGlmKCFsYXllci52aXNpYmxlKXtcclxuICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGlsZW1hcExheWVyID0gbmV3IFRpbGVtYXBUaWxlTGF5ZXIodGlsZW1hcCwgdGlsZUxheWVyLndpZHRoLCB0aWxlTGF5ZXIuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aWxlTGF5ZXIuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIGxldCB0aWxlSW5kZXggPSB0aWxlTGF5ZXIuZGF0YVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGlsZXNbdGlsZUluZGV4XTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC8vIEZpbmQgdGlsZVxyXG4gICAgICAgICAgICAgICBpZih0aWxlID09PSB1bmRlZmluZWQgJiYgdGlsZUluZGV4ICE9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRpbGVzZXRzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbGVzZXQgPSB0aWxlc2V0c1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKHRpbGVJbmRleCA+PSB0aWxlc2V0LnNldC5maXJzdGdpZCAmJiB0aWxlSW5kZXggPCB0aWxlc2V0LnNldC5maXJzdGdpZCArIHRpbGVzZXQuc2V0LnRpbGVjb3VudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGUgPSBnZXRTcHJpdGVGcm9tVGlsZXNldCh0aWxlc2V0LnNldCwgdGlsZUluZGV4IC0gdGlsZXNldC5zZXQuZmlyc3RnaWQsIHRpbGVzZXQuc2hlZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZSA9IG5ldyBBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRGcmFtZShzcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdGlsZXNbdGlsZUluZGV4XSA9IHRpbGU7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGlmKHRpbGUgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgIHRpbGVtYXBMYXllci5zZXRUaWxlRnJvbUluZGV4KGksIHRpbGUuY2xvbmUoKSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGlsZW1hcC5sYXllcnMucHVzaCh0aWxlbWFwTGF5ZXIpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAvLyBDb2xsaXNpb24gTGF5ZXJzXHJcbiAgICAgICAgIGVsc2UgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRUaWxlTGF5ZXJUeXBlICYmIGxheWVyLm5hbWUgPT09IFRpbGVkQ29sbGlkZXJMYXllck5hbWUpe1xyXG4gICAgICAgICAgICBsZXQgdGlsZUxheWVyID0gbGF5ZXIgYXMgVGlsZWRUaWxlTGF5ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgY29sbGlkZXJMYXllciA9IG5ldyBUaWxlbWFwQ29sbGlzaW9uTGF5ZXIodGlsZW1hcCwgdGlsZUxheWVyLndpZHRoLCB0aWxlTGF5ZXIuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aWxlTGF5ZXIuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIGxldCB0aWxlSW5kZXggPSB0aWxlTGF5ZXIuZGF0YVtpXTtcclxuICAgICAgICAgICAgICAgY29sbGlkZXJMYXllci5zZXRUaWxlRnJvbUluZGV4KGksIHRpbGVJbmRleCAhPT0gMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRpbGVtYXAuY29sbGlkZXJzLnB1c2goY29sbGlkZXJMYXllcik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGVsc2UgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRJbWFnZUxheWVyVHlwZSl7XHJcbiAgICAgICAgICAgIGxldCB0aWxlTGF5ZXIgPSBsYXllciBhcyBUaWxlZEltYWdlTGF5ZXI7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1hZ2VMYXllciA9IG5ldyBUaWxlbWFwSW1hZ2VMYXllcih0aWxlbWFwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGltYWdlTGF5ZXIuaW1hZ2UgPSByZXNvdXJjZU1hbmFnZXIubG9hZFNwcml0ZVNoZWV0KFJvb3RGb2xkZXIgKyB0aWxlTGF5ZXIuaW1hZ2UpLmdldFNwcml0ZSgwLCAwLCA2NDAsIDM2MCk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aWxlbWFwLmxheWVycy5wdXNoKGltYWdlTGF5ZXIpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAvLyBPYmplY3QgbGF5ZXJzXHJcbiAgICAgICAgIGVsc2UgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRPYmplY3RMYXllclR5cGUpe1xyXG4gICAgICAgICAgICBsZXQgb2JqTGF5ZXIgPSBsYXllciBhcyBUaWxlZE9iamVjdExheWVyO1xyXG4gICAgICAgICAgICBvYmpMYXllci5vYmplY3RzLmZvckVhY2gobG9hZGVyKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gVWggb2hcclxuICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVua25vd24gbGF5ZXIgdHlwZSBcIiArIGxheWVyLnR5cGUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIHJldHVybiB0aWxlbWFwO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGZyb21UaWxlZE1hcERvd25sb2FkKGZpbGU6IHN0cmluZywgcmVzb3VyY2VNYW5hZ2VyOiBSZXNvdXJjZU1hbmFnZXIsIGxvYWRlcjogVGlsZW1hcE9iamVjdExvYWRlcil7XHJcbiAgICAgIGxldCByZXN1bHQgPSBhd2FpdCBmZXRjaChmaWxlKTtcclxuICAgICAgbGV0IGQgPSBhd2FpdCByZXN1bHQuanNvbigpO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXMuZnJvbVRpbGVkTWFwKGQgYXMgVGlsZWRNYXAsIHJlc291cmNlTWFuYWdlciwgbG9hZGVyKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IHBpeGVsV2lkdGgoKXtcclxuICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLnRpbGVXaWR0aDtcclxuICAgfVxyXG4gICBnZXQgcGl4ZWxIZWlnaHQoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy50aWxlSGVpZ2h0O1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaWxlZE9iamVjdExheWVyVHlwZSA9IFwib2JqZWN0Z3JvdXBcIjtcclxuZXhwb3J0IGNvbnN0IFRpbGVkSW1hZ2VMYXllclR5cGUgPSBcImltYWdlbGF5ZXJcIjtcclxuZXhwb3J0IGNvbnN0IFRpbGVkVGlsZUxheWVyVHlwZSA9IFwidGlsZWxheWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGlsZWRDb2xsaWRlckxheWVyTmFtZSA9IFwiQ29sbGlkZXJzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkTWFwIHtcclxuICAgd2lkdGg6IG51bWJlcjtcclxuICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICB0aWxld2lkdGg6IG51bWJlcjtcclxuICAgdGlsZWhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgYmFja2dyb3VuZGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICBsYXllcnM6IFRpbGVkTGF5ZXJbXTtcclxuICAgdGlsZXNldHM6IFRpbGVkVGlsZXNldFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkTGF5ZXIge1xyXG4gICBpZDogbnVtYmVyO1xyXG4gICBcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcblxyXG4gICBuYW1lOiBzdHJpbmc7XHJcbiAgIHR5cGU6IHN0cmluZztcclxuXHJcbiAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZFRpbGVMYXllciBleHRlbmRzIFRpbGVkTGF5ZXIge1xyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuICAgZGF0YTogbnVtYmVyW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZE9iamVjdExheWVyIGV4dGVuZHMgVGlsZWRMYXllcntcclxuICAgb2JqZWN0czogVGlsZWRPYmplY3RbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkSW1hZ2VMYXllciBleHRlbmRzIFRpbGVkTGF5ZXJ7XHJcbiAgIGltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZE9iamVjdCB7XHJcbiAgIHg6IG51bWJlcjtcclxuICAgeTogbnVtYmVyO1xyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgIG5hbWU6IHN0cmluZztcclxuICAgdHlwZTogc3RyaW5nO1xyXG5cclxuICAgcG9seWxpbmU6IFRpbGVkUG9zaXRpb25bXTtcclxuXHJcbiAgIHByb3BlcnRpZXM6IFRpbGVkT2JqZWN0UHJvcGVydGllc1tdO1xyXG5cclxuICAgdmlzaWJsZTogYm9vbGVhbjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZFBvc2l0aW9ue1xyXG4gICB4OiBudW1iZXI7XHJcbiAgIHk6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZE9iamVjdFByb3BlcnRpZXN7XHJcbiAgIG5hbWU6IHN0cmluZztcclxuICAgdHlwZTogc3RyaW5nO1xyXG4gICB2YWx1ZTogc3RyaW5nfGJvb2xlYW58bnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkQW5pbWF0ZWRUaWxlc3tcclxuICAgaWQ6IG51bWJlcjtcclxuICAgYW5pbWF0aW9uOiBUaWxlZEFuaW1hdGVkVGlsZUZyYW1lW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZEFuaW1hdGVkVGlsZUZyYW1le1xyXG4gICBkdXJhdGlvbjogbnVtYmVyLFxyXG4gICB0aWxlaWQ6IG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZFRpbGVzZXQge1xyXG4gICBuYW1lOiBzdHJpbmc7XHJcblxyXG4gICBmaXJzdGdpZDogbnVtYmVyO1xyXG4gICBpbWFnZTogc3RyaW5nO1xyXG4gICBcclxuICAgY29sdW1uczogbnVtYmVyO1xyXG4gICB0aWxlY291bnQ6IG51bWJlcjtcclxuXHJcbiAgIHRpbGV3aWR0aDogbnVtYmVyO1xyXG4gICB0aWxlaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICB0aWxlczogVGlsZWRBbmltYXRlZFRpbGVzW118dW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0U3ByaXRlRnJvbVRpbGVzZXQodGlsZXNldDogVGlsZWRUaWxlc2V0LCBpbmRleDogbnVtYmVyLCBzaGVldDogU3ByaXRlU2hlZXQpe1xyXG4gICBsZXQgeCA9IGluZGV4ICUgdGlsZXNldC5jb2x1bW5zO1xyXG4gICBsZXQgeSA9IE1hdGguZmxvb3IoaW5kZXggLyB0aWxlc2V0LmNvbHVtbnMpO1xyXG5cclxuICAgcmV0dXJuIHNoZWV0LmdldFNwcml0ZShcclxuICAgICAgeCAqIHRpbGVzZXQudGlsZXdpZHRoLCBcclxuICAgICAgeSAqIHRpbGVzZXQudGlsZWhlaWdodCwgXHJcbiAgICAgIHRpbGVzZXQudGlsZXdpZHRoLCBcclxuICAgICAgdGlsZXNldC50aWxlaGVpZ2h0KTtcclxufSIsImV4cG9ydCBjbGFzcyBDb2xvcntcclxuICAgcjogbnVtYmVyO1xyXG4gICBnOiBudW1iZXI7XHJcbiAgIGI6IG51bWJlcjtcclxuICAgYTogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IocjogbnVtYmVyID0gMSwgZzogbnVtYmVyID0gMSwgYjogbnVtYmVyID0gMSwgYTogbnVtYmVyID0gMSl7XHJcbiAgICAgIHRoaXMuciA9IHI7XHJcbiAgICAgIHRoaXMuZyA9IGc7XHJcbiAgICAgIHRoaXMuYiA9IGI7IFxyXG4gICAgICB0aGlzLmEgPSBhO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgZnJvbUhleChoZXg6IHN0cmluZyk6IENvbG9yfG51bGwge1xyXG4gICAgICB2YXIgcmVzdWx0ID0gL14jPyhbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pKFthLWZcXGRdezJ9KSQvaS5leGVjKGhleCk7XHJcbiAgICAgIHJldHVybiByZXN1bHQgPyBuZXcgQ29sb3IoXHJcbiAgICAgICAgcGFyc2VJbnQocmVzdWx0WzFdLCAxNikgLyAyNTUsXHJcbiAgICAgICAgcGFyc2VJbnQocmVzdWx0WzJdLCAxNikgLyAyNTUsXHJcbiAgICAgICAgcGFyc2VJbnQocmVzdWx0WzNdLCAxNikgLyAyNTVcclxuICAgICAgKSA6IG51bGw7XHJcbiAgICB9ICAgIFxyXG59IiwiZXhwb3J0IGNsYXNzIEN1cnZle1xyXG4gICBwdWJsaWMgc3RhdGljIGxlcnAoYTogbnVtYmVyLCBiOiBudW1iZXIsIGY6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGY7XHJcbiAgIH1cclxuICAgc3RhdGljIGxpbmVhcihhOiBudW1iZXIsIGI6IG51bWJlciwgZjogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIEN1cnZlLmxlcnAoYSxiLGYpO1xyXG4gICB9XHJcbn0iLCJjbGFzcyBMaXN0e1xyXG4gICBoYXM8VD4obGlzdDogVFtdfHVuZGVmaW5lZCwgZnVuYzogKCh2YWx1ZTogVCkgPT4gYm9vbGVhbikpe1xyXG4gICAgICBpZihsaXN0ID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuICAgICAgXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgaWYoZnVuYyhsaXN0W2ldKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMaXN0KCk7IiwiZXhwb3J0IGZ1bmN0aW9uIG5vdygpe1xyXG4gICBpZih3aW5kb3cucGVyZm9ybWFuY2Upe1xyXG4gICAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMDtcclxuICAgfVxyXG4gICByZXR1cm4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQodGltZUluU2Vjb25kczogbnVtYmVyKXtcclxuICAgbGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWVJblNlY29uZHMpO1xyXG4gICBsZXQgbWlsbGlzID0gTWF0aC5mbG9vcigodGltZUluU2Vjb25kcyAlIDEpICogMTAwMCk7XHJcblxyXG4gICByZXR1cm4gKFwiXCIgKyBzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpICsgXCI6XCIgKyAoXCJcIiArIG1pbGxpcykucGFkU3RhcnQoMywgJzAnKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=