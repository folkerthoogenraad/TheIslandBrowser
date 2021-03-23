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
        this.preserveAspectRatio = false;
    }
    // We can fix this to not allocate memory at all :)
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
    Graphics.prototype.drawSurface = function (surface, x, y, scaleX, scaleY) {
        this.drawTexture(surface.texture, x, y, scaleX, scaleY);
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
        this.depth = 0;
        this.particles = new Array(10);
        for (var i = 0; i < this.particles.length; i++) {
            this.particles[i] = new Particle();
        }
        this.index = 0;
    }
    ParticleSystem.prototype.init = function (game) {
        this.scene.renderer.add(this);
    };
    ParticleSystem.prototype.destroy = function () {
        this.scene.renderer.remove(this);
    };
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

/***/ "./src/ts/graphics/Renderer.ts":
/*!*************************************!*\
  !*** ./src/ts/graphics/Renderer.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Renderer = void 0;
var Renderer = /** @class */ (function () {
    function Renderer() {
        this.renderables = [];
    }
    Renderer.prototype.draw = function (graphics) {
        this.renderables.sort(function (a, b) { return a.depth - b.depth; });
        this.renderables.forEach(function (r) { return r.draw(graphics); });
    };
    Renderer.prototype.add = function (renderable) {
        this.renderables.push(renderable);
    };
    Renderer.prototype.remove = function (renderable) {
        var index = this.renderables.indexOf(renderable);
        if (index < 0)
            return;
        this.renderables.splice(index, 1);
    };
    return Renderer;
}());
exports.Renderer = Renderer;


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
        if (texture !== undefined) {
            this.sourceWidth = texture.width;
            this.sourceHeight = texture.height;
        }
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

/***/ "./src/ts/graphics/Surface.ts":
/*!************************************!*\
  !*** ./src/ts/graphics/Surface.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.Surface = void 0;
var Surface = /** @class */ (function () {
    function Surface() {
    }
    Object.defineProperty(Surface.prototype, "width", {
        get: function () { return this.texture.width; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Surface.prototype, "height", {
        get: function () { return this.texture.height; },
        enumerable: false,
        configurable: true
    });
    Surface.prototype.resize = function (width, height) {
    };
    return Surface;
}());
exports.Surface = Surface;


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
        if (sprite.texture === undefined)
            return;
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
    GLGraphics.prototype.drawTexture = function (texture, x, y, scaleX, scaleY) {
        this.setTexture(texture);
        this.ensureSize(6);
        this.batch.color(this.color.r, this.color.g, this.color.b, this.color.a);
        var w = texture.width * scaleX;
        var h = texture.height * scaleY;
        var u0 = 0;
        var u1 = 1;
        var v0 = 0;
        var v1 = 1;
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
        if (sprite.texture === undefined)
            return;
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
        this.setCameraMatrix(this.currentSurface === undefined);
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
        this.shader.setUniformPosition(this.attributes.screenSizeUniform, this.viewWidth, this.viewHeight);
        this.shader.setUniformTexture(this.attributes.textureUniform, this.currentTexture);
        gl.drawArrays(gl.TRIANGLES, 0, this.batch.length);
    };
    GLGraphics.prototype.setCamera = function (camera) {
        if (this.camera !== camera) {
            this.flush();
        }
        this.camera = camera;
    };
    GLGraphics.prototype.setCameraMatrix = function (flip) {
        if (flip === void 0) { flip = false; }
        if (this.camera === undefined)
            return;
        var cameraWidth = this.camera.width;
        var cameraHeight = this.camera.height;
        if (!this.camera.preserveAspectRatio) {
            var asp = this.viewWidth / this.viewHeight;
            cameraWidth = cameraHeight * asp;
        }
        var floorX = this.viewWidth / cameraWidth;
        var floorY = this.viewHeight / cameraHeight;
        var scaleX = 2 / cameraWidth;
        var scaleY = 2 / cameraHeight;
        if (flip)
            scaleY = -scaleY;
        // Snapping to whole pixels
        var offsetX = -Math.floor(this.camera.center.x * floorX) / floorX * scaleX;
        var offsetY = -Math.floor(this.camera.center.y * floorY) / floorY * scaleY;
        this.projectionMatrix = new Float32Array([
            scaleX, 0, 0, 0,
            0, scaleY, 0, 0,
            0, 0, 1, 0,
            offsetX, offsetY, 0, 1
        ]);
    };
    GLGraphics.prototype.resetSurface = function () {
        if (this.currentSurface !== undefined)
            this.flush();
        this.currentSurface = undefined;
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.updateViewport();
    };
    GLGraphics.prototype.setSurface = function (surface) {
        if (this.currentSurface !== surface)
            this.flush();
        this.currentSurface = surface;
        this.gl.bindTexture(this.gl.TEXTURE_2D, null);
        this.currentSurface.bind();
        this.updateViewport();
    };
    GLGraphics.prototype.updateSize = function () {
        var canvas = this.gl.canvas;
        // canvas.width = canvas.offsetWidth;
        // canvas.height = canvas.offsetHeight;
        canvas.width = canvas.offsetHeight * 16 / 9;
        canvas.height = canvas.offsetHeight;
        this.updateViewport();
    };
    Object.defineProperty(GLGraphics.prototype, "viewWidth", {
        get: function () {
            if (this.currentSurface !== undefined)
                return this.currentSurface.width;
            return this.gl.canvas.width;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GLGraphics.prototype, "viewHeight", {
        get: function () {
            if (this.currentSurface !== undefined)
                return this.currentSurface.height;
            return this.gl.canvas.height;
        },
        enumerable: false,
        configurable: true
    });
    GLGraphics.prototype.updateViewport = function () {
        this.gl.viewport(0, 0, this.viewWidth, this.viewHeight);
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
var GLSurface_1 = __webpack_require__(/*! ./GLSurface */ "./src/ts/graphics/webgl/GLSurface.ts");
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
    GLResourceManager.prototype.createSurface = function (width, height) {
        return new GLSurface_1.GLSurface(this.gl, width, height);
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

/***/ "./src/ts/graphics/webgl/GLSurface.ts":
/*!********************************************!*\
  !*** ./src/ts/graphics/webgl/GLSurface.ts ***!
  \********************************************/
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
exports.GLSurface = void 0;
var Surface_1 = __webpack_require__(/*! graphics/Surface */ "./src/ts/graphics/Surface.ts");
var GLTexture_1 = __webpack_require__(/*! ./GLTexture */ "./src/ts/graphics/webgl/GLTexture.ts");
var GLSurface = /** @class */ (function (_super) {
    __extends(GLSurface, _super);
    function GLSurface(gl, width, height) {
        var _this = _super.call(this) || this;
        _this.gl = gl;
        _this.id = _this.gl.createFramebuffer();
        _this.bind();
        _this.texture = new GLTexture_1.GLTexture(_this.gl);
        _this.resize(width, height);
        _this.gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, _this.texture.id, 0);
        _this.unbind();
        return _this;
    }
    GLSurface.prototype.bind = function () {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.id);
    };
    GLSurface.prototype.unbind = function () {
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
    };
    GLSurface.prototype.resize = function (width, height) {
        this.texture.setEmpty(width, height);
    };
    GLSurface.prototype.destroy = function () {
        this.gl.deleteBuffer(this.id);
        this.texture.destroy();
    };
    return GLSurface;
}(Surface_1.Surface));
exports.GLSurface = GLSurface;


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
    GLTexture.prototype.setEmpty = function (width, height) {
        this.width = width;
        this.height = height;
        this.bind();
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, width, height, 0, this.gl.RGBA, this.gl.UNSIGNED_BYTE, null);
    };
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
            var scene, pathManager, tilemap;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        scene = new Scene_1.Scene();
                        pathManager = new PathManager_1.PathManager();
                        scene.addGameObject(pathManager);
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
                                    var shrink_1 = false;
                                    var visible_1 = false;
                                    if (obj.properties != null) {
                                        obj.properties.forEach(function (prop) {
                                            if (prop.name === "shrink")
                                                shrink_1 = prop.value;
                                            if (prop.name === "visible")
                                                visible_1 = prop.value;
                                        });
                                    }
                                    var spikes = new SpikesGameObject_1.SpikesGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height), shrink_1);
                                    spikes.visible = visible_1;
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
                        tilemap = _a.sent();
                        scene.setTilemap(tilemap);
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
var DrawableGameObject_1 = __webpack_require__(/*! scene/DrawableGameObject */ "./src/ts/scene/DrawableGameObject.ts");
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
}(DrawableGameObject_1.DrawableGameObject));
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
var DrawableGameObject_1 = __webpack_require__(/*! scene/DrawableGameObject */ "./src/ts/scene/DrawableGameObject.ts");
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
}(DrawableGameObject_1.DrawableGameObject));
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
var DrawableGameObject_1 = __webpack_require__(/*! scene/DrawableGameObject */ "./src/ts/scene/DrawableGameObject.ts");
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
}(DrawableGameObject_1.DrawableGameObject));
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
var DrawableGameObject_1 = __webpack_require__(/*! scene/DrawableGameObject */ "./src/ts/scene/DrawableGameObject.ts");
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
}(DrawableGameObject_1.DrawableGameObject));
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
var DrawableGameObject_1 = __webpack_require__(/*! scene/DrawableGameObject */ "./src/ts/scene/DrawableGameObject.ts");
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
}(DrawableGameObject_1.DrawableGameObject));
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
var DrawableGameObject_1 = __webpack_require__(/*! scene/DrawableGameObject */ "./src/ts/scene/DrawableGameObject.ts");
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
        _this.airAcceleration = 0.2 * 60 * 60;
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
        var acc = this.grounded ? this.groundAcceleration : this.airAcceleration;
        if (this.input.direction !== 0) {
            var dir = Math.sign(this.input.direction);
            var maxSpeed = this.moveSpeed * Math.abs(this.input.direction);
            var acceleration = acc * delta;
            this.accelerate(dir, maxSpeed, acceleration);
        }
        else {
            this.stop(acc * delta);
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
}(DrawableGameObject_1.DrawableGameObject));
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
var DrawableGameObject_1 = __webpack_require__(/*! scene/DrawableGameObject */ "./src/ts/scene/DrawableGameObject.ts");
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
}(DrawableGameObject_1.DrawableGameObject));
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
var IslandResources_1 = __webpack_require__(/*! island/IslandResources */ "./src/ts/island/IslandResources.ts");
var BoxCollider_1 = __webpack_require__(/*! math/collision/BoxCollider */ "./src/ts/math/collision/BoxCollider.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var DrawableGameObject_1 = __webpack_require__(/*! scene/DrawableGameObject */ "./src/ts/scene/DrawableGameObject.ts");
var SpikesGameObject = /** @class */ (function (_super) {
    __extends(SpikesGameObject, _super);
    function SpikesGameObject(aabb, shrink) {
        var _this = _super.call(this) || this;
        _this.visible = true;
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
    SpikesGameObject.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        var sheet = game.resources.loadSpriteSheet(IslandResources_1.default.SheetObjects);
        this.sprite = sheet.getSprite(0, 0, 16, 16);
    };
    SpikesGameObject.prototype.draw = function (graphics) {
        if (!this.visible)
            return;
        var bounds = this.body.boundingBox;
        graphics.drawSpriteTiled(this.sprite, bounds.x, bounds.y, bounds.width, bounds.height);
    };
    SpikesGameObject.prototype.onCollision = function (other) {
        var comp = other.gameObject.findComponent(function (component) { return component instanceof HealthComponent_1.HealthComponent; });
        if (comp === undefined)
            return;
        comp.damage(100);
    };
    return SpikesGameObject;
}(DrawableGameObject_1.DrawableGameObject));
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

/***/ "./src/ts/scene/DrawableGameObject.ts":
/*!********************************************!*\
  !*** ./src/ts/scene/DrawableGameObject.ts ***!
  \********************************************/
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
exports.DrawableGameObject = void 0;
var GameObject_1 = __webpack_require__(/*! ./GameObject */ "./src/ts/scene/GameObject.ts");
var DrawableGameObject = /** @class */ (function (_super) {
    __extends(DrawableGameObject, _super);
    function DrawableGameObject() {
        var _this = _super.call(this) || this;
        _this.depth = 0;
        return _this;
    }
    DrawableGameObject.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        this.scene.renderer.add(this);
    };
    DrawableGameObject.prototype.destroy = function () {
        _super.prototype.destroy.call(this);
        this.scene.renderer.remove(this);
    };
    DrawableGameObject.prototype.draw = function (graphics) {
    };
    return DrawableGameObject;
}(GameObject_1.GameObject));
exports.DrawableGameObject = DrawableGameObject;


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
var Renderer_1 = __webpack_require__(/*! graphics/Renderer */ "./src/ts/graphics/Renderer.ts");
var Scene = /** @class */ (function () {
    function Scene() {
        // This gets used for transitions :)
        this.paused = false;
        this.initialized = false;
        this.camera = new Camera_1.Camera();
        this.uiCamera = new Camera_1.Camera();
        this.gameObjects = [];
        this.physics = new Physics_1.Physics();
        this.renderer = new Renderer_1.Renderer();
        this.particleSystem = new ParticleSystem_1.ParticleSystem();
        this.particleSystem.scene = this;
    }
    Scene.prototype.init = function (game) {
        var _a;
        if (this.initialized)
            return;
        this.initialized = true;
        this.game = game;
        (_a = this.tilemap) === null || _a === void 0 ? void 0 : _a.init(game);
        this.particleSystem.init(game);
        this.gameObjects.forEach(function (obj) { return obj.init(game); });
        this.surface = game.resources.createSurface(640, 360);
    };
    Scene.prototype.destroy = function () {
        var _a;
        if (!this.initialized)
            return;
        this.initialized = false;
        this.gameObjects.forEach(function (obj) { return obj.destroy(); });
        this.particleSystem.destroy();
        (_a = this.tilemap) === null || _a === void 0 ? void 0 : _a.destroy();
    };
    Scene.prototype.update = function (delta) {
        var _this = this;
        var _a;
        if (!this.paused)
            (_a = this.tilemap) === null || _a === void 0 ? void 0 : _a.update(delta);
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
        // graphics.setSurface(this.surface);
        graphics.setCamera(this.camera);
        // this.tilemap?.draw(graphics, this.camera.getBounds());
        // this.particleSystem.draw(graphics);
        // this.gameObjects.forEach(obj => obj.draw(graphics));
        this.renderer.draw(graphics);
        // Debug drawing
        this.physics.drawDebug(graphics);
        // graphics.resetSurface();
        // graphics.setCamera(this.uiCamera);
        // // Scaled to fit
        // graphics.drawSurface(this.surface, 0, 0, this.uiCamera.width / this.surface.width,  this.uiCamera.height / this.surface.height);
    };
    Scene.prototype.setTilemap = function (map) {
        if (this.initialized && this.tilemap !== undefined) {
            this.tilemap.destroy();
        }
        this.tilemap = map;
        this.tilemap.scene = this;
        this.physics.layers = map.colliders;
        if (!this.initialized)
            return;
        this.tilemap.init(this.game);
    };
    Scene.prototype.updateSize = function () {
        this.surface.resize(this.game.canvas.width, this.game.canvas.height);
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
var Sprite_1 = __webpack_require__(/*! graphics/Sprite */ "./src/ts/graphics/Sprite.ts");
var AABB_1 = __webpack_require__(/*! math/AABB */ "./src/ts/math/AABB.ts");
var TileCollider_1 = __webpack_require__(/*! math/collision/TileCollider */ "./src/ts/math/collision/TileCollider.ts");
var Color_1 = __webpack_require__(/*! util/Color */ "./src/ts/util/Color.ts");
var TiledMap_1 = __webpack_require__(/*! ./TiledMap */ "./src/ts/tilemap/TiledMap.ts");
var TilemapLayer = /** @class */ (function () {
    function TilemapLayer(tilemap) {
        this.depth = 0;
        this.tilemap = tilemap;
    }
    TilemapLayer.prototype.init = function (game) {
        this.tilemap.scene.renderer.add(this);
    };
    TilemapLayer.prototype.destroy = function () {
        this.tilemap.scene.renderer.remove(this);
    };
    TilemapLayer.prototype.update = function (delta, bounds) {
    };
    TilemapLayer.prototype.draw = function (graphics) {
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
    TilemapTileLayer.prototype.draw = function (graphics) {
        var bounds = this.tilemap.scene.camera.getBounds();
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
        _this.parallax = 10000000;
        _this.image = image;
        _this._tempSprite = new Sprite_1.Sprite(undefined);
        _this._aabb = new AABB_1.AABB();
        return _this;
    }
    TilemapImageLayer.prototype.draw = function (graphics) {
        if (this.image === undefined)
            return;
        var pos = this.tilemap.scene.camera.center;
        // let bounds = this.tilemap.scene.camera.getBounds(this._aabb);
        var relativeX = pos.x - this.image.width / 2;
        var relativeY = pos.y - this.image.height / 2;
        var offsetX = -relativeX / this.parallax;
        var offsetY = -relativeY / this.parallax;
        while (offsetX < 0) {
            offsetX += this.image.width;
        }
        while (offsetX > this.image.width) {
            offsetX -= this.image.width;
        }
        graphics.drawSpriteSimple(this.image, relativeX + offsetX - this.image.width, relativeY + offsetY);
        graphics.drawSpriteSimple(this.image, relativeX + offsetX, relativeY + offsetY);
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
        this.depth = -10000;
        this.width = width;
        this.height = height;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.layers = [];
        this.colliders = [];
        this.initalized = false;
    }
    TileMap.prototype.init = function (game) {
        if (this.initalized)
            return;
        this.layers.forEach(function (layer) { return layer.init(game); });
        this.scene.renderer.add(this);
    };
    TileMap.prototype.destroy = function () {
        if (!this.initalized)
            return;
        this.layers.forEach(function (layer) { return layer.destroy(); });
        this.scene.renderer.remove(this);
    };
    TileMap.prototype.draw = function (graphics) {
        graphics.setColor(this.backgroundColor.r, this.backgroundColor.g, this.backgroundColor.b, this.backgroundColor.a);
        graphics.drawRectangle(0, 0, this.width * this.tileWidth, this.height * this.tileHeight, true);
        graphics.setColor(1, 1, 1, 1);
    };
    // TODO maybe more like batch update every x frames or devide up the work somehow over muptiple frames
    TileMap.prototype.update = function (delta) {
        var bounds = this.scene.camera.getBounds();
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
                var tilemapLayer_1 = new TilemapTileLayer(tilemap, tileLayer.width, tileLayer.height);
                // Load properties
                if (layer.properties !== undefined) {
                    layer.properties.forEach(function (prop) {
                        if (prop.name === "depth")
                            tilemapLayer_1.depth = prop.value;
                    });
                }
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
                        tilemapLayer_1.setTileFromIndex(i, tile.clone());
                    }
                }
                tilemap.layers.push(tilemapLayer_1);
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
                var imageLayer_1 = new TilemapImageLayer(tilemap);
                // Load properties
                if (layer.properties !== undefined) {
                    layer.properties.forEach(function (prop) {
                        if (prop.name === "parallax")
                            imageLayer_1.parallax = prop.value;
                        if (prop.name === "depth")
                            imageLayer_1.depth = prop.value;
                    });
                }
                imageLayer_1.image = resourceManager.loadSpriteSheet(RootFolder + tileLayer.image).getSprite(0, 0, 640, 360);
                tilemap.layers.push(imageLayer_1);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2FwcC5zY3NzPzUxYzUiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2VuZ2luZS9EZWJ1Z1NldHRpbmdzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9lbmdpbmUvR2FtZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZW5naW5lL0lucHV0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9lbmdpbmUvUGh5c2ljcy50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3MvQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL0dyYXBoaWNzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy9OaW5lU2lkZVNwcml0ZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3MvUGFydGljbGVTeXN0ZW0udHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL1JlbmRlcmVyLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy9SZXNvdXJjZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL1Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3MvU3VyZmFjZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3Mvd2ViZ2wvR0xHcmFwaGljcy50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3Mvd2ViZ2wvR0xSZXNvdXJjZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL3dlYmdsL0dMU2hhZGVyLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy93ZWJnbC9HTFN1cmZhY2UudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL3dlYmdsL0dMVGV4dHVyZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3Mvd2ViZ2wvR0xWZXJ0ZXhCYXRjaC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9Db21wb25lbnRzL0hlYWx0aENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0NvbXBvbmVudHMvSW50ZXJhY3RhYmxlQ29tcG9uZW50LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvQ29tcG9uZW50cy9JbnRlcmFjdG9yQ29tcG9uZW50LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvQ29tcG9uZW50cy9Nb3ZpbmdHcm91bmRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9Db21wb25lbnRzL1BsYXllcklucHV0Q29tcG9uZW50LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvQ2hlc3RHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvQ29sbGlkZXJHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvRmFsbGluZ0Jsb2NrR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL0ZlYXRoZXJHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvSnVtcFBsYXRmb3JtR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL0xldmVsTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL01vdmluZ1BsYXRmb3JtR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1BhdGhNYW5hZ2VyLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJGaW5pc2hHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1BsYXllclNwYXduR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1Jlc2V0YWJsZUdhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9TcGlrZXNHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvSXNsYW5kUmVzb3VyY2VzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9tYXRoL0FBQkIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL21hdGgvUGF0aC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvbWF0aC9WZWN0b3IyLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9tYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlci50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvbWF0aC9jb2xsaXNpb24vQ29sbGlkZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL21hdGgvY29sbGlzaW9uL0NvbGxpc2lvbi50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvbWF0aC9jb2xsaXNpb24vVGlsZUNvbGxpZGVyLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9zY2VuZS9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3NjZW5lL0RyYXdhYmxlR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvc2NlbmUvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvc2NlbmUvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3NjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9zY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvc2lnbmFscy9TaWduYWwudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3RpbGVtYXAvVGlsZU1hcC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvdGlsZW1hcC9UaWxlZE1hcC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvdXRpbC9Db2xvci50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvdXRpbC9DdXJ2ZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvdXRpbC9UaW1lLnRzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLHdHQUFtRDtBQUM3RjtBQUNBO0FBQ0EsY0FBYyxRQUFTLE1BQU0sMkJBQTJCLEVBQUUsZ0JBQWdCLGVBQWUsY0FBYyxFQUFFLGdCQUFnQixnQ0FBZ0MsaURBQWlELEVBQUUsZ0JBQWdCLGtDQUFrQyxzQ0FBc0Msb0JBQW9CLEVBQUUsVUFBVSx1QkFBdUIsZUFBZSxxQkFBcUIsaUJBQWlCLGtCQUFrQixFQUFFLGFBQWEsdUJBQXVCLGdCQUFnQixXQUFXLFlBQVksZ0JBQWdCLGlCQUFpQiwrQkFBK0IsRUFBRSxlQUFlLGtCQUFrQixFQUFFLG1CQUFtQixnQkFBZ0IsaUJBQWlCLHlCQUF5Qix1QkFBdUIsZUFBZSxFQUFFLCtCQUErQixnQkFB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T0FBTyxDQUFDLE1BQU0sQ0FBQztRQUVyRCxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDL0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUVuQyxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUMzQixJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDdEIsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ25DLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUN0QixJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsZ0NBQVcsR0FBWCxV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Q0FBQyxTQUFTLEdBQUcsQ0FBQyxFQUFDO1lBQzdELElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ25DO1FBQ0QsSUFBRyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsRUFBQztZQUM1QyxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQztTQUNuQztRQUVELElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQy9GLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUV2RCxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUNyQyxJQUFJLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUVyQyxJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBRTlCLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztRQUNyQyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFLLENBQUM7UUFFckMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztRQUM5QyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FB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RSxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ25FLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFFbkUsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLElBQUksQ0FBQyxjQUFjLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUNsRixJQUFJLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFL0UsSUFBSSxDQUFDLFVBQVUsR0FBRyxZQUFZLENBQUMsWUFBWSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxVQUFVLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUU5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsWUFBWSxDQUFDLFlBQVksQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFF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RyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDMUIsQ0FBQztJQUNNLFlBQU0sR0FBYixVQUFjLENBQVMsRUFBRSxDQUFTLEVBQUUsQ0FBUztRQUMxQyxPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFDLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBQztJQUM1QixDQUFDO0lBQ0osWUFBQztBQUFELENBQUM7QUFQWSxzQkFBSzs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsQixTQUFnQixHQUFHO0lBQ2hCLElBQUcsTUFBTSxDQUFDLFdBQVcsRUFBQztRQUNuQixPQUFPLE1BQU0sQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO0tBQ3pDO0lBQ0QsT0FBTyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDO0FBQzVCLENBQUM7QUFMRCxrQkFLQztBQUVELFNBQWdCLE1BQU0sQ0FBQyxhQUFxQjtJQUN6QyxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0lBQ3hDLElBQUksTUFBTSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUM7SUFFcEQsT0FBTyxDQUFDLEVBQUUsR0FBRyxPQUFPLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0FBQ2pGLENBQUM7QUFMRCx3QkFLQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7IH1cXG5cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnWmFuYmFyU3F1YXJlJztcXG4gIHNyYzogdXJsKFxcXCIvYXNzZXRzL2ZvbnRzL1phbmJhclNxdWFyZS50dGZcXFwiKTsgfVxcblxcbmh0bWwsIGJvZHkge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJaYW5iYXJTcXVhcmVcXFwiO1xcbiAgZm9udC1mYW1pbHk6ICdPeHlnZW4nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxNHB4OyB9XFxuXFxuYm9keSB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAwO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIGhlaWdodDogMTAwdmg7IH1cXG5cXG4jY2FudmFzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6IC0xO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgaW1hZ2UtcmVuZGVyaW5nOiBwaXhlbGF0ZWQ7IH1cXG5cXG4ucmVzb3VyY2Uge1xcbiAgZGlzcGxheTogbm9uZTsgfVxcblxcbi5nYW1lLW92ZXJsYXkge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7IH1cXG4gIC5nYW1lLW92ZXJsYXkgLmJhci1ib3R0b20ge1xcbiAgICBib3R0b206IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTsgfVxcbiAgLmdhbWUtb3ZlcmxheSAuYmFyLXRvcCB7XFxuICAgIHRvcDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgfVxcbiAgLmdhbWUtb3ZlcmxheSAuYmFyLWJvdHRvbSwgLmdhbWUtb3ZlcmxheSAuYmFyLXRvcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm07XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgZm9udC1zaXplOiAyZW07IH1cXG4gIC5nYW1lLW92ZXJsYXkuZ2FtZS1vdmVyIC5iYXItYm90dG9tLCAuZ2FtZS1vdmVybGF5LmdhbWUtb3ZlciAuYmFyLXRvcCB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTsgfVxcbiAgLmdhbWUtb3ZlcmxheTpub3QoLmNvbXBsZXRlZCkgLmNvbXBsZXRlLWJhbm5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5nYW1lLW92ZXJsYXkuY29tcGxldGVkIC5mYWlsLWJhbm5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5nYW1lLW92ZXJsYXkgLmJlc3QtdGltZSB7XFxuICAgIGNvbG9yOiAjOTk5OyB9XFxuICAuZ2FtZS1vdmVybGF5IC5kZWJ1Zy1hbHBoYS1tZXNzYWdlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogIzk5OTtcXG4gICAgcmlnaHQ6IDE2cHg7XFxuICAgIGJvdHRvbTogMTZweDtcXG4gICAgei1pbmRleDogMTAwMDsgfVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuICAubW9kYWwgLmJhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgfVxcbiAgLm1vZGFsIC5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuICAgIC5tb2RhbCAuY29udGVudCAuY2xvc2Uge1xcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICAgIGJhY2tncm91bmQ6ICNlMjdkMWU7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLm1vZGFsLmNsb3NlZCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgICAubW9kYWwuY2xvc2VkIC5iYWNrZ3JvdW5kIHtcXG4gICAgICBvcGFjaXR5OiAwOyB9XFxuICAgIC5tb2RhbC5jbG9zZWQgLmNvbnRlbnQge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gTG9hZCB0aGUgamF2YXNjcmlwdCBtYWluXHJcbmltcG9ydCBcIi4vanMvbWFpblwiO1xyXG5pbXBvcnQgXCIuL3RzL1wiO1xyXG5cclxuLy8gTG9hZCB0aGUgU0FTUyBtYWluXHJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XHJcbiAgIGNvbnNvbGUubG9nKFwiV2VicGFjayB0ZW1wbGF0ZSBsb2FkZWQuXCIpO1xyXG59KTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJleHBvcnQgY2xhc3MgRGVidWdTZXR0aW5nc3tcclxuICAgZHJhd0NvbGxpZGVyczogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBkcmF3VGlsZW1hcDogYm9vbGVhbiA9IGZhbHNlO1xyXG59IiwiaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgUmVzb3VyY2VNYW5hZ2VyIH0gZnJvbSBcImdyYXBoaWNzL1Jlc291cmNlTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBHTEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL3dlYmdsL0dMR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgR0xSZXNvdXJjZU1hbmFnZXIgfSBmcm9tIFwiZ3JhcGhpY3Mvd2ViZ2wvR0xSZXNvdXJjZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwic2NlbmUvU2NlbmVcIjtcclxuaW1wb3J0IHsgbm93IH0gZnJvbSBcInV0aWwvVGltZVwiO1xyXG5pbXBvcnQgeyBEZWJ1Z1NldHRpbmdzIH0gZnJvbSBcIi4vRGVidWdTZXR0aW5nc1wiO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gXCIuL0lucHV0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZXsgICBcclxuICAgY3VycmVudFRpbWU6IG51bWJlciA9IDA7XHJcbiAgIFxyXG4gICBmaXhlZFVwZGF0ZVRpbWU6IG51bWJlciA9IDEgLyA2MDtcclxuICAgaW50ZXJVcGRhdGVUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgcHJpdmF0ZSBydW5uaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHByaXZhdGUgYW5pbWF0aW9uRnJhbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICBzY2VuZT86IFNjZW5lO1xyXG4gICBncmFwaGljczogR3JhcGhpY3M7XHJcbiAgIGlucHV0OiBJbnB1dDtcclxuICAgcmVzb3VyY2VzOiBSZXNvdXJjZU1hbmFnZXI7XHJcbiAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICBkZWJ1Z1NldHRpbmdzOiBEZWJ1Z1NldHRpbmdzO1xyXG5cclxuICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCl7XHJcbiAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0KGNhbnZhcyk7XHJcblxyXG4gICAgICAvLyBUT0RPIHN3YXAgb3V0IHRvIFdlYkdMXHJcbiAgICAgIC8vIHRoaXMuZ3JhcGhpY3MgPSBuZXcgQ2FudmFzMkRHcmFwaGljcyhjYW52YXMpO1xyXG4gICAgICAvLyB0aGlzLnJlc291cmNlcyA9IG5ldyBDYW52YXMyRFJlc291cmNlTWFuYWdlcigpO1xyXG5cclxuICAgICAgbGV0IGdsID0gY2FudmFzLmdldENvbnRleHQoXCJ3ZWJnbFwiKSE7XHJcblxyXG4gICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdMR3JhcGhpY3MoZ2wpO1xyXG4gICAgICB0aGlzLnJlc291cmNlcyA9IG5ldyBHTFJlc291cmNlTWFuYWdlcihnbCk7XHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB0aGlzLnVwZGF0ZVNpemUoKSk7XHJcbiAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG5cclxuICAgICAgdGhpcy5kZWJ1Z1NldHRpbmdzID0gbmV3IERlYnVnU2V0dGluZ3MoKTtcclxuICAgICAgKHdpbmRvdyBhcyBhbnkpLmRlYnVnU2V0dGluZ3MgPSB0aGlzLmRlYnVnU2V0dGluZ3M7XHJcbiAgIH1cclxuXHJcbiAgIHJ1bigpe1xyXG4gICAgICBpZih0aGlzLnJ1bm5pbmcpIHJldHVybjtcclxuICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmU/LmluaXQodGhpcyk7XHJcblxyXG4gICAgICB0aGlzLl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcclxuICAgfVxyXG5cclxuICAgc3RvcCgpe1xyXG4gICAgICB0aGlzLl9jYW5jZWxBbmltYXRpb25GcmFtZSgpO1xyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKCl7XHJcbiAgICAgIHRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xyXG5cclxuICAgICAgbGV0IG4gPSBub3coKTtcclxuICAgICAgbGV0IGRlbHRhID0gbiAtIHRoaXMuY3VycmVudFRpbWU7XHJcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBuO1xyXG5cclxuICAgICAgaWYoZGVsdGEgPiAwLjEpeyBkZWx0YSA9IDAuMTsgfVxyXG5cclxuICAgICAgdGhpcy5pbnB1dC5wb2xsKCk7XHJcblxyXG4gICAgICB0aGlzLmludGVyVXBkYXRlVGltZSArPSBkZWx0YTtcclxuICAgICAgXHJcbiAgICAgIC8vIFRPRE8gZml4IHRoZSBpc3N1ZSB3aGVyZSB3ZSBhcmUgbGFnZ2luZyBiZWhpbmQhXHJcbiAgICAgIC8vIGlmIHRoZXJlIGFyZSB0b28gbWFueSB1cGRhdGVzIGF0IG9uY2UgYW5kIHdlIGNhbid0IGtlZXAgdXAsIHdlIG5lZWQgdG8gZHVtcCBzb21lIGZyYW1lc1xyXG4gICAgICAvLyBhbmQgc2VuZCBhIHdhcm5pbmcuXHJcbiAgICAgIHdoaWxlKHRoaXMuaW50ZXJVcGRhdGVUaW1lID4gdGhpcy5maXhlZFVwZGF0ZVRpbWUpe1xyXG4gICAgICAgICB0aGlzLmludGVyVXBkYXRlVGltZSAtPSB0aGlzLmZpeGVkVXBkYXRlVGltZTtcclxuICAgICAgICAgdGhpcy5zY2VuZT8uZml4ZWRVcGRhdGUodGhpcy5maXhlZFVwZGF0ZVRpbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2NlbmU/LnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICB0aGlzLmdyYXBoaWNzLmJlZ2luKCk7XHJcbiAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXIoKTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmU/LmRyYXcodGhpcy5ncmFwaGljcyk7XHJcblxyXG4gICAgICB0aGlzLmdyYXBoaWNzLmVuZCgpO1xyXG5cclxuICAgICAgdGhpcy5pbnB1dC5mbHVzaCgpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGVTaXplKCl7XHJcbiAgICAgIHRoaXMuZ3JhcGhpY3MudXBkYXRlU2l6ZSgpO1xyXG4gICAgICB0aGlzLnNjZW5lPy51cGRhdGVTaXplKCk7XHJcbiAgIH1cclxuXHJcbiAgIF9jYW5jZWxBbmltYXRpb25GcmFtZSgpe1xyXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcclxuICAgfVxyXG5cclxuICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSgpe1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICB9XHJcbn0iLCIvLyBDb250cm9sbGVyIG1hcCFcclxuZXhwb3J0IGNsYXNzIEdhbWVwYWRJbnB1dHtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBeGlzTGVmdFggPSAwO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEF4aXNMZWZ0WSA9IDE7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQXhpc1JpZ2h0WCA9IDI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQXhpc1JpZ2h0WSA9IDM7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkEgPSAwO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkIgPSAxO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblggPSAyO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblkgPSAzO1xyXG4gICBcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25EcGFkVXAgPSAxMjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25EcGFkRG93biA9IDEzO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkRwYWRMZWZ0ID0gMTQ7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uRHBhZFJpZ2h0ID0gMTU7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkxlZnRCdW1wZXIgPSA0O1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblJpZ2h0QnVtcGVyID0gNTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25MZWZ0VHJpZ2dlciA9IDY7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uUmlnaHRUcmlnZ2VyID0gNztcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uTWVudSA9IDg7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uU3RhcnQgPSA5O1xyXG5cclxuICAgcHJldmlvdXNCdXR0b25TdGF0ZTogYm9vbGVhbltdID0gW107XHJcbiAgIGJ1dHRvblN0YXRlOiBib29sZWFuW10gPSBbXTtcclxuICAgXHJcbiAgIGF4aXNTdGF0ZTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgIGluZGV4OiBudW1iZXI7XHJcblxyXG4gICBkZWFkWm9uZTogbnVtYmVyID0gMC4yO1xyXG4gICBmdWxsWm9uZTogbnVtYmVyID0gMC40O1xyXG5cclxuICAgY29uc3RydWN0b3IoaW5kZXg6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAgIGxldCBnYW1lcGFkID0gdGhpcy5nZXROYXZpZ2F0b3JHYW1lcGFkKCkhO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWVwYWQuYnV0dG9ucy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMucHJldmlvdXNCdXR0b25TdGF0ZS5wdXNoKGZhbHNlKTtcclxuICAgICAgICAgdGhpcy5idXR0b25TdGF0ZS5wdXNoKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZXBhZC5heGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgdGhpcy5heGlzU3RhdGUucHVzaCgwKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwb2xsKCl7XHJcbiAgICAgIC8vIFN3YXAgdGhlIG9sZCBhbmQgdGhlIG5ldyBvbmUsIGNvcHkgdG8gdGhlIG5ld1xyXG4gICAgICBsZXQgdGVtcCA9IHRoaXMucHJldmlvdXNCdXR0b25TdGF0ZTtcclxuICAgICAgdGhpcy5wcmV2aW91c0J1dHRvblN0YXRlID0gdGhpcy5idXR0b25TdGF0ZTtcclxuICAgICAgdGhpcy5idXR0b25TdGF0ZSA9IHRlbXA7XHJcblxyXG4gICAgICBsZXQgZ2FtZXBhZCA9IHRoaXMuZ2V0TmF2aWdhdG9yR2FtZXBhZCgpITtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lcGFkLmJ1dHRvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICB0aGlzLmJ1dHRvblN0YXRlW2ldID0gZ2FtZXBhZC5idXR0b25zW2ldLnByZXNzZWQ7XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWVwYWQuYXhlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMuYXhpc1N0YXRlW2ldID0gZ2FtZXBhZC5heGVzW2ldO1xyXG5cclxuICAgICAgICAgaWYoTWF0aC5hYnModGhpcy5heGlzU3RhdGVbaV0pIDwgdGhpcy5kZWFkWm9uZSkgdGhpcy5heGlzU3RhdGVbaV0gPSAwOyBcclxuICAgICAgICAgaWYoTWF0aC5hYnModGhpcy5heGlzU3RhdGVbaV0pID4gMSAtIHRoaXMuZnVsbFpvbmUpIHRoaXMuYXhpc1N0YXRlW2ldID0gTWF0aC5zaWduKHRoaXMuYXhpc1N0YXRlW2ldKTsgXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgaXNCdXR0b25QcmVzc2VkKGJ1dHRvbkluZGV4OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25TdGF0ZVtidXR0b25JbmRleF0gJiYgIXRoaXMucHJldmlvdXNCdXR0b25TdGF0ZVtidXR0b25JbmRleF07XHJcbiAgIH1cclxuICAgaXNCdXR0b25Eb3duKGJ1dHRvbkluZGV4OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25TdGF0ZVtidXR0b25JbmRleF07XHJcbiAgIH1cclxuICAgaXNCdXR0b25SZWxlYXNlZChidXR0b25JbmRleDogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuICF0aGlzLmJ1dHRvblN0YXRlW2J1dHRvbkluZGV4XSAmJiB0aGlzLnByZXZpb3VzQnV0dG9uU3RhdGVbYnV0dG9uSW5kZXhdO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbGVmdEF4aXNYKCkgeyByZXR1cm4gdGhpcy5heGlzU3RhdGVbR2FtZXBhZElucHV0LkF4aXNMZWZ0WF07fVxyXG4gICBnZXQgbGVmdEF4aXNZKCkgeyByZXR1cm4gdGhpcy5heGlzU3RhdGVbR2FtZXBhZElucHV0LkF4aXNMZWZ0WV07fVxyXG4gICBnZXQgcmlnaHRBeGlzWCgpIHsgcmV0dXJuIHRoaXMuYXhpc1N0YXRlW0dhbWVwYWRJbnB1dC5BeGlzUmlnaHRYXTt9XHJcbiAgIGdldCByaWdodEF4aXNZKCkgeyByZXR1cm4gdGhpcy5heGlzU3RhdGVbR2FtZXBhZElucHV0LkF4aXNSaWdodFldO31cclxuXHJcbiAgIGdldE5hdmlnYXRvckdhbWVwYWQoKXtcclxuICAgICAgY29uc3QgcGFkcyA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBhZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBsZXQgcGFkID0gcGFkc1tpXTtcclxuICAgICAgICAgaWYocGFkID09PSBudWxsKSBjb250aW51ZTtcclxuICAgICAgICAgaWYocGFkLmluZGV4ID09PSB0aGlzLmluZGV4KSByZXR1cm4gcGFkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICB9XHJcbn1cclxuXHJcbnR5cGUgS2V5ID0gc3RyaW5nO1xyXG50eXBlIE1vdXNlQnV0dG9uID0gbnVtYmVyO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJke1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUVudGVyIDogS2V5ID0gXCJFbnRlclwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleVRhYiA6IEtleSA9IFwiVGFiXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5U3BhY2UgOiBLZXkgPSBcIiBcIjtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QyA6IEtleSA9IFwiY1wiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleVggOiBLZXkgPSBcInhcIjtcclxuICAgXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QSA6IEtleSA9IFwiYVwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUQgOiBLZXkgPSBcImRcIjtcclxuICAgXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5Q29tbWEgOiBLZXkgPSBcIixcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlQZXJpb2QgOiBLZXkgPSBcIi5cIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlTbGFzaCA6IEtleSA9IFwiL1wiO1xyXG4gICBcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlBcnJvd1VwIDogS2V5ID0gXCJBcnJvd1VwXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QXJyb3dEb3duIDogS2V5ID0gXCJBcnJvd0Rvd25cIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlBcnJvd0xlZnQgOiBLZXkgPSBcIkFycm93TGVmdFwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUFycm93UmlnaHQgOiBLZXkgPSBcIkFycm93UmlnaHRcIjtcclxuXHJcbiAgIGRvd25LZXlzOiBTZXQ8S2V5PjtcclxuICAgcHJlc3NlZEtleXM6IFNldDxLZXk+O1xyXG4gICByZWxlYXNlZEtleXM6IFNldDxLZXk+O1xyXG5cclxuICAgcm9vdD86IEhUTUxFbGVtZW50O1xyXG5cclxuICAgY29uc3RydWN0b3Iocm9vdD86IEhUTUxFbGVtZW50KXtcclxuICAgICAgdGhpcy5kb3duS2V5cyA9IG5ldyBTZXQ8S2V5PigpO1xyXG4gICAgICB0aGlzLnByZXNzZWRLZXlzID0gbmV3IFNldDxLZXk+KCk7XHJcbiAgICAgIHRoaXMucmVsZWFzZWRLZXlzID0gbmV3IFNldDxLZXk+KCk7XHJcblxyXG4gICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5ib2R5OyAvLyBGdWNrXHJcbiAgICAgIHRoaXMucm9vdD8uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICBpZihldmVudC5yZXBlYXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgIHRoaXMucHJlc3NlZEtleXMuYWRkKGV2ZW50LmtleSk7XHJcbiAgICAgICAgIHRoaXMuZG93bktleXMuYWRkKGV2ZW50LmtleSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnJvb3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBldmVudCA9PntcclxuICAgICAgICAgaWYoZXZlbnQucmVwZWF0KSByZXR1cm47XHJcblxyXG4gICAgICAgICB0aGlzLnJlbGVhc2VkS2V5cy5hZGQoZXZlbnQua2V5KTtcclxuICAgICAgICAgdGhpcy5kb3duS2V5cy5kZWxldGUoZXZlbnQua2V5KTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIGZsdXNoKCl7XHJcbiAgICAgIHRoaXMucHJlc3NlZEtleXMuY2xlYXIoKTtcclxuICAgICAgdGhpcy5yZWxlYXNlZEtleXMuY2xlYXIoKTtcclxuICAgfVxyXG5cclxuICAgaXNLZXlEb3duKGtleTogS2V5KXtcclxuICAgICAgcmV0dXJuIHRoaXMuZG93bktleXMuaGFzKGtleSk7XHJcbiAgIH1cclxuICAgaXNLZXlQcmVzc2VkKGtleTogS2V5KXtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlc3NlZEtleXMuaGFzKGtleSk7XHJcbiAgIH1cclxuICAgaXNLZXlSZWxlYXNlZChrZXk6IEtleSl7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbGVhc2VkS2V5cy5oYXMoa2V5KTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW91c2V7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uTGVmdCA6IE1vdXNlQnV0dG9uID0gMDtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25NaWRkbGUgOiBNb3VzZUJ1dHRvbiA9IDE7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uUmlnaHQgOiBNb3VzZUJ1dHRvbiA9IDI7XHJcblxyXG4gICBidXR0b25zOiBib29sZWFuW107XHJcbiAgIGJ1dHRvbnNQcmVzc2VkOiBib29sZWFuW107XHJcbiAgIGJ1dHRvbnNSZWxlYXNlZDogYm9vbGVhbltdO1xyXG5cclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcbiAgIHByZXZpb3VzWDogbnVtYmVyO1xyXG4gICBwcmV2aW91c1k6IG51bWJlcjtcclxuXHJcbiAgIHJvb3Q6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgY29uc3RydWN0b3Iocm9vdDogSFRNTEVsZW1lbnQpe1xyXG4gICAgICB0aGlzLmJ1dHRvbnMgPSBuZXcgQXJyYXkoMTApO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNQcmVzc2VkID0gbmV3IEFycmF5KDEwKTtcclxuICAgICAgdGhpcy5idXR0b25zUmVsZWFzZWQgPSBuZXcgQXJyYXkoMTApO1xyXG5cclxuICAgICAgdGhpcy5idXR0b25zLmZpbGwoZmFsc2UpO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNQcmVzc2VkLmZpbGwoZmFsc2UpO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNSZWxlYXNlZC5maWxsKGZhbHNlKTtcclxuXHJcbiAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcblxyXG4gICAgICB0aGlzLnggPSAwO1xyXG4gICAgICB0aGlzLnkgPSAwO1xyXG4gICAgICB0aGlzLnByZXZpb3VzWCA9IDA7XHJcbiAgICAgIHRoaXMucHJldmlvdXNZID0gMDtcclxuXHJcbiAgICAgIGNvbnNvbGUuZGlyKHJvb3QpO1xyXG5cclxuICAgICAgcm9vdD8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbW92ZVwiLCB0aGlzLm9uTW91c2VNb3ZlLmJpbmQodGhpcykpO1xyXG4gICAgICByb290Py5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMub25Nb3VzZURvd24uYmluZCh0aGlzKSk7XHJcbiAgICAgIHJvb3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZXVwXCIsIHRoaXMub25Nb3VzZVVwLmJpbmQodGhpcykpO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIG9uTW91c2VNb3ZlKGV2ZW50OiBNb3VzZUV2ZW50KXtcclxuICAgICAgdGhpcy54ID0gZXZlbnQub2Zmc2V0WCAvIHRoaXMucm9vdC5vZmZzZXRXaWR0aDtcclxuICAgICAgdGhpcy55ID0gZXZlbnQub2Zmc2V0WSAvIHRoaXMucm9vdC5vZmZzZXRXaWR0aDtcclxuICAgfVxyXG4gICBwcml2YXRlIG9uTW91c2VEb3duKGV2ZW50OiBNb3VzZUV2ZW50KXtcclxuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1tldmVudC5idXR0b25dID0gdHJ1ZTtcclxuICAgICAgdGhpcy5idXR0b25zUHJlc3NlZFtldmVudC5idXR0b25dID0gdHJ1ZTtcclxuICAgfVxyXG4gICBwcml2YXRlIG9uTW91c2VVcChldmVudDogTW91c2VFdmVudCl7XHJcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNbZXZlbnQuYnV0dG9uXSA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNSZWxlYXNlZFtldmVudC5idXR0b25dID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgaXNCdXR0b25Eb3duKGJ1dHRvbjogTW91c2VCdXR0b24pe1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25zW2J1dHRvbl07XHJcbiAgIH1cclxuICAgaXNCdXR0b25QcmVzc2VkKGJ1dHRvbjogTW91c2VCdXR0b24pe1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25zUHJlc3NlZFtidXR0b25dO1xyXG4gICB9XHJcbiAgIGlzQnV0dG9uUmVsZWFzZWQoYnV0dG9uOiBNb3VzZUJ1dHRvbil7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvbnNSZWxlYXNlZFtidXR0b25dO1xyXG4gICB9XHJcblxyXG4gICBmbHVzaCgpe1xyXG4gICAgICB0aGlzLmJ1dHRvbnNQcmVzc2VkLmZpbGwoZmFsc2UpO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNSZWxlYXNlZC5maWxsKGZhbHNlKTtcclxuXHJcbiAgICAgIHRoaXMucHJldmlvdXNYID0gdGhpcy54O1xyXG4gICAgICB0aGlzLnByZXZpb3VzWSA9IHRoaXMueTtcclxuICAgfVxyXG5cclxuICAgZ2V0IGRlbHRhWCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy54IC0gdGhpcy5wcmV2aW91c1g7XHJcbiAgIH1cclxuICAgZ2V0IGRlbHRhWSgpe1xyXG4gICAgICByZXR1cm4gdGhpcy55IC0gdGhpcy5wcmV2aW91c1k7XHJcbiAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dCB7XHJcbiAgIGdhbWVwYWRzOiBHYW1lcGFkSW5wdXRbXTtcclxuICAga2V5Ym9hcmQ6IEtleWJvYXJkO1xyXG4gICBtb3VzZTogTW91c2U7XHJcblxyXG4gICByb290OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHJvb3Q6IEhUTUxFbGVtZW50KXtcclxuICAgICAgdGhpcy5nYW1lcGFkcyA9IFtdO1xyXG4gICAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKHJvb3QpO1xyXG4gICAgICB0aGlzLm1vdXNlID0gbmV3IE1vdXNlKHJvb3QpO1xyXG4gICAgICB0aGlzLnJvb3QgPSByb290O1xyXG5cclxuICAgICAgLy8gV2VpcmQgY29uc3RydWN0aW9uIGJ1dCB0eXBlc2NyaXB0IGhhdGVzIHByb2dyZXNzIFxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImdhbWVwYWRjb25uZWN0ZWRcIiwgZXYgPT4ge1xyXG4gICAgICAgICBsZXQgZXZlbnQgPSBldiBhcyBHYW1lcGFkRXZlbnQ7XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWVwYWQgY29ubmVjdGVkLlwiKTtcclxuXHJcbiAgICAgICAgIHRoaXMuZ2FtZXBhZHMucHVzaChuZXcgR2FtZXBhZElucHV0KGV2ZW50LmdhbWVwYWQuaW5kZXgpKTtcclxuICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImdhbWVwYWRkaXNjb25uZWN0ZWRcIiwgZXYgPT4ge1xyXG4gICAgICAgICBsZXQgZXZlbnQgPSBldiBhcyBHYW1lcGFkRXZlbnQ7XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWVwYWQgZGlzY29ubmVjdGVkLlwiKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG5cclxuICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZXBhZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVwYWRzW2ldLmluZGV4ID09PSBldmVudC5nYW1lcGFkLmluZGV4KXtcclxuICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYoaW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWVwYWQgZm91bmQuXCIpO1xyXG5cclxuICAgICAgICAgdGhpcy5nYW1lcGFkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIHBvbGwoKXtcclxuICAgICAgdGhpcy5nYW1lcGFkcy5mb3JFYWNoKHBhZCA9PiBwYWQucG9sbCgpKTtcclxuICAgfVxyXG4gICBmbHVzaCgpe1xyXG4gICAgICB0aGlzLmtleWJvYXJkLmZsdXNoKCk7XHJcbiAgICAgIHRoaXMubW91c2UuZmx1c2goKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgdW5zdHVjayB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Db2xsaXNpb25cIjtcclxuaW1wb3J0IHsgVGlsZUNvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL1RpbGVDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVGlsZW1hcENvbGxpc2lvbkxheWVyLCBUaWxlbWFwVGlsZUxheWVyIH0gZnJvbSBcInRpbGVtYXAvVGlsZU1hcFwiO1xyXG5pbXBvcnQgeyBDdXJ2ZSB9IGZyb20gXCJ1dGlsL0N1cnZlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGh5c2ljc3tcclxuICAgYm9kaWVzOiBSaWdpZGJvZHlbXTtcclxuICAgbGF5ZXJzOiBUaWxlbWFwQ29sbGlzaW9uTGF5ZXJbXTtcclxuXHJcbiAgIGludGVycG9sYXRlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMuYm9kaWVzID0gW107XHJcbiAgICAgIHRoaXMubGF5ZXJzID0gW107XHJcbiAgIH1cclxuXHJcbiAgIGFkZEJvZHkoYm9keTogUmlnaWRib2R5KXtcclxuICAgICAgdGhpcy5ib2RpZXMucHVzaChib2R5KTtcclxuICAgfVxyXG4gICByZW1vdmVCb2R5KGJvZHk6IFJpZ2lkYm9keSl7XHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuYm9kaWVzLmluZGV4T2YoYm9keSk7XHJcblxyXG4gICAgICBpZihpbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuYm9kaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgIH1cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBpZih0aGlzLmludGVycG9sYXRlKXtcclxuICAgICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETyBtb3Rpb24gcHJlZGljdGlvbiBhbmQgc3R1ZmZcclxuICAgICAgICAgICAgbGV0IGYgPSBib2R5LmdhbWUuaW50ZXJVcGRhdGVUaW1lIC8gYm9keS5nYW1lLmZpeGVkVXBkYXRlVGltZTtcclxuICAgXHJcbiAgICAgICAgICAgIGJvZHkudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLnggPSBDdXJ2ZS5sZXJwKGJvZHkucHJldmlvdXNQb3NpdGlvbi54LCBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi54LCBmKTtcclxuICAgICAgICAgICAgYm9keS50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueSA9IEN1cnZlLmxlcnAoYm9keS5wcmV2aW91c1Bvc2l0aW9uLnksIGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLnksIGYpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICAgICBib2R5LnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi5zZXQoYm9keS50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgLy8gU2V0IHRoZSBwcmV2aW91cyBwb3NpdGlvbnNcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgYm9keS5wcmV2aW91c1Bvc2l0aW9uLnggPSBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi54O1xyXG4gICAgICAgICBib2R5LnByZXZpb3VzUG9zaXRpb24ueSA9IGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgICAgICBib2R5LnVuc3R1Y2tEaXN0YW5jZS5zZXRaZXJvKCk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gTW92ZSBhbGwgdGhlIGJvZGllc1xyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi54ICs9IGJvZHkudmVsb2NpdHkueCAqIGRlbHRhO1xyXG4gICAgICAgICBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi55ICs9IGJvZHkudmVsb2NpdHkueSAqIGRlbHRhO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGxldCBjb2xsaXNpb25NYXAgPSBuZXcgTWFwPG51bWJlciwgbnVtYmVyPigpO1xyXG5cclxuICAgICAgbGV0IGFkZFRvQ29sbGlzaW9uTWFwID0gKHNlbGZJbmRleDogbnVtYmVyLCBvdGhlckluZGV4OiBudW1iZXIpID0+IHtcclxuICAgICAgICAgY29sbGlzaW9uTWFwLnNldChNYXRoLm1pbihzZWxmSW5kZXgsIG90aGVySW5kZXgpLCBNYXRoLm1heChzZWxmSW5kZXgsIG90aGVySW5kZXgpKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gVW5zdHVjayBhbGwgdGhlIGJvZGllc1xyXG4gICAgICBsZXQgdGlsZUNvbGxpZGVyID0gbmV3IFRpbGVDb2xsaWRlcigpO1xyXG4gICAgICBsZXQgdGlsZUFBQkIgPSBuZXcgQUFCQigpO1xyXG4gICAgICBsZXQgdGlsZVBvc2l0aW9uID0gbmV3IFZlY3RvcjIoKTtcclxuXHJcbiAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gLy9cclxuICAgICAgLy8gVGlsZW1hcCBjb2xsaXNpb25cclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBpZihib2R5LmtpbmVtYXRpYykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxldCBiYm94ID0gYm9keS5ib3VuZGluZ0JveDtcclxuXHJcbiAgICAgICAgICAgIC8vIEdldCB0aGUgQkJPWCBjb29yZHNcclxuICAgICAgICAgICAgbGV0IGZyb21YID0gTWF0aC5mbG9vcihiYm94LmxlZnQgLyBsYXllci50aWxlbWFwLnRpbGVXaWR0aCk7XHJcbiAgICAgICAgICAgIGxldCB0b1ggPSBNYXRoLmZsb29yKGJib3gucmlnaHQgLyBsYXllci50aWxlbWFwLnRpbGVXaWR0aCk7XHJcblxyXG4gICAgICAgICAgICBsZXQgZnJvbVkgPSBNYXRoLmZsb29yKGJib3gudG9wIC8gbGF5ZXIudGlsZW1hcC50aWxlSGVpZ2h0KTtcclxuICAgICAgICAgICAgbGV0IHRvWSA9IE1hdGguZmxvb3IoYmJveC5ib3R0b20gLyBsYXllci50aWxlbWFwLnRpbGVIZWlnaHQpO1xyXG5cclxuICAgICAgICAgICAgZm9yKGxldCBpID0gZnJvbVg7IGkgPD0gdG9YOyBpKyspe1xyXG4gICAgICAgICAgICAgICBmb3IobGV0IGogPSBmcm9tWTsgaiA8PSB0b1k7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgIGlmKCFsYXllci5pc1RpbGVTb2xpZChpLCBqKSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICB0aWxlUG9zaXRpb24ueCA9IGkgKiBsYXllci50aWxlbWFwLnRpbGVXaWR0aDtcclxuICAgICAgICAgICAgICAgICAgdGlsZVBvc2l0aW9uLnkgPSBqICogbGF5ZXIudGlsZW1hcC50aWxlSGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGlsZUNvbGxpZGVyID0gbGF5ZXIuZ2V0VGlsZUNvbGxpZGVyKGksIGosIHRpbGVDb2xsaWRlcik7XHJcblxyXG4gICAgICAgICAgICAgICAgICB0aWxlQUFCQiA9IHRpbGVDb2xsaWRlci5nZXRCb3VuZHModGlsZVBvc2l0aW9uLCB0aWxlQUFCQik7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZighYmJveC5vdmVybGFwcyh0aWxlQUFCQikpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgbGV0IHVuc3R1Y2tEaXN0ID0gdW5zdHVjayhcclxuICAgICAgICAgICAgICAgICAgICAgYm9keS5jb2xsaWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgdGlsZUNvbGxpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICB0aWxlUG9zaXRpb24uc3ViKGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uKSxcclxuICAgICAgICAgICAgICAgICAgICAgYm9keS52ZWxvY2l0eVxyXG4gICAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYodW5zdHVja0Rpc3QgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLmFkZCh1bnN0dWNrRGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgIGJvZHkudW5zdHVja0Rpc3RhbmNlLmFkZCh1bnN0dWNrRGlzdCk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgIC8vIHRoaXMucGVyZm9ybUNvbGxpc2lvbihib2R5LCBiYm94LCB0aWxlQUFCQik7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBcclxuICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAvL1xyXG4gICAgICAvLyBOb3JtYWwgY29sbGlzaW9uc1xyXG4gICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09IC8vXHJcbiAgICAgIC8vIFRPRE8gYnJvYWRwaGFzZSBuYXJyb3cgcGhhc2Ugc3R1ZmYgOilcclxuICAgICAgLy8gTWF5YmUgc3RhcnQgd2l0aCBzd2VlcCBhbmQgcHJ1bmVcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaCgoc2VsZiwgc2VsZkluZGV4KSA9PiB7XHJcbiAgICAgICAgIGlmKHNlbGYua2luZW1hdGljKSByZXR1cm47XHJcblxyXG4gICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKChvdGhlciwgb3RoZXJJbmRleCkgPT4ge1xyXG4gICAgICAgICAgICBpZihzZWxmID09PSBvdGhlcikgcmV0dXJuO1xyXG4gICAgICAgICAgICBpZighb3RoZXIuc29saWQpIHJldHVybjtcclxuICAgXHJcbiAgICAgICAgICAgIGxldCBiYm94ID0gc2VsZi5ib3VuZGluZ0JveDtcclxuICAgICAgICAgICAgbGV0IG90aGVyYmJveCA9IG90aGVyLmJvdW5kaW5nQm94O1xyXG5cclxuICAgICAgICAgICAgaWYoIWJib3gub3ZlcmxhcHMob3RoZXJiYm94KSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgaWYoc2VsZi51c2VEeW5hbWljQ29sbGlzaW9ucyAmJiBvdGhlci51c2VEeW5hbWljQ29sbGlzaW9ucyl7XHJcbiAgICAgICAgICAgICAgIGFkZFRvQ29sbGlzaW9uTWFwKHNlbGZJbmRleCwgb3RoZXJJbmRleCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCB1bnN0dWNrRGlzdCA9IHVuc3R1Y2soXHJcbiAgICAgICAgICAgICAgIHNlbGYuY29sbGlkZXIsXHJcbiAgICAgICAgICAgICAgIG90aGVyLmNvbGxpZGVyLFxyXG4gICAgICAgICAgICAgICBvdGhlci50cmFuc2Zvcm0ucG9zaXRpb24uY2xvbmUoKS5zdWIoc2VsZi50cmFuc2Zvcm0ucG9zaXRpb24pLFxyXG4gICAgICAgICAgICAgICBzZWxmLnZlbG9jaXR5LmNsb25lKCkuc3ViKG90aGVyLnZlbG9jaXR5KSk7IC8vIFRPRE8gcmVsYXRpdmUgdmVsb2NpdHlcclxuXHJcbiAgICAgICAgICAgIGlmKHVuc3R1Y2tEaXN0ICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICBzZWxmLnRyYW5zZm9ybS5wb3NpdGlvbi5hZGQodW5zdHVja0Rpc3QpO1xyXG4gICAgICAgICAgICAgICBzZWxmLnVuc3R1Y2tEaXN0YW5jZS5hZGQodW5zdHVja0Rpc3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG5cclxuICAgICAgICAgYm9keS5jb2xsaWRlZEJvdHRvbSA9IGJvZHkudW5zdHVja0Rpc3RhbmNlLnkgPCAwO1xyXG4gICAgICAgICBib2R5LmNvbGxpZGVkVG9wID0gYm9keS51bnN0dWNrRGlzdGFuY2UueSA+IDA7XHJcblxyXG4gICAgICAgICBib2R5LmNvbGxpZGVkTGVmdCA9IGJvZHkudW5zdHVja0Rpc3RhbmNlLnggPiAwO1xyXG4gICAgICAgICBib2R5LmNvbGxpZGVkUmlnaHQgPSBib2R5LnVuc3R1Y2tEaXN0YW5jZS54IDwgMDtcclxuXHJcbiAgICAgICAgIGlmKGJvZHkuY29sbGlkZWRMZWZ0IHx8IGJvZHkuY29sbGlkZWRSaWdodCl7XHJcbiAgICAgICAgICAgIGJvZHkudmVsb2NpdHkueCA9IC1ib2R5LnZlbG9jaXR5LnggKiBib2R5LmJvdW5jeW5lc3M7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYoYm9keS5jb2xsaWRlZEJvdHRvbSB8fCBib2R5LmNvbGxpZGVkVG9wKXtcclxuICAgICAgICAgICAgYm9keS52ZWxvY2l0eS55ID0gLWJvZHkudmVsb2NpdHkueSAqIGJvZHkuYm91bmN5bmVzcztcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEEgbGl0dGxlIG1vcmUgb3B0aW1pemVkIGJ1dCBzdGlsbCByZWFsbHkgZnVja2luZyBzdHVwaWQgOilcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmJvZGllc1tpXTtcclxuXHJcbiAgICAgICAgIGxldCBiYm94ID0gYm9keS5ib3VuZGluZ0JveDtcclxuXHJcbiAgICAgICAgIGlmKCFib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgIGZvcihsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICBsZXQgb3RoZXIgPSB0aGlzLmJvZGllc1tqXTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFvdGhlci51c2VEeW5hbWljQ29sbGlzaW9ucykgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBpZihiYm94Lm92ZXJsYXBzKG90aGVyLmJvdW5kaW5nQm94KSl7XHJcbiAgICAgICAgICAgICAgIGFkZFRvQ29sbGlzaW9uTWFwKGksIGopO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgY29sbGlzaW9uTWFwLmZvckVhY2goKHNlbGZJbmRleCwgb3RoZXJJbmRleCkgPT4ge1xyXG4gICAgICAgICBsZXQgc2VsZiA9IHRoaXMuYm9kaWVzW3NlbGZJbmRleF07XHJcbiAgICAgICAgIGxldCBvdGhlciA9IHRoaXMuYm9kaWVzW290aGVySW5kZXhdO1xyXG5cclxuICAgICAgICAgc2VsZi5vbkNvbGxpc2lvbi5lbWl0KG90aGVyKTtcclxuICAgICAgICAgb3RoZXIub25Db2xsaXNpb24uZW1pdChzZWxmKTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIGJveGNhc3QoYWFiYjogQUFCQiwgc29saWRPbmx5OiBib29sZWFuID0gdHJ1ZSk6IFJpZ2lkYm9keVtde1xyXG4gICAgICBsZXQgbGlzdDogUmlnaWRib2R5W10gPSBbXTtcclxuXHJcbiAgICAgIC8vIFRPRE8gbWFrZSBhIGNvbGxpZGVyIGZyb20gdGhpcyBBQUJCIGFuZCBmZWVkIGl0IGludG8gdGhlIGNvbGxpc2lvbiBzeXN0ZW1cclxuXHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgIGlmKHNvbGlkT25seSAmJiAhYm9keS5zb2xpZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgLy8gVE9ETyBnb29kIGNvbGxpc2lvbiBidXQgdy9lIHRoaXMgaXMgb2sgZm9yIG5vd1xyXG4gICAgICAgICBpZihib2R5LmJvdW5kaW5nQm94Lm92ZXJsYXBzKGFhYmIpKXtcclxuICAgICAgICAgICAgbGlzdC5wdXNoKGJvZHkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIGxpc3Q7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdEZWJ1ZyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgbGF5ZXIuZHJhd0RlYnVnKGdyYXBoaWNzLCBsYXllci50aWxlbWFwLnRpbGVXaWR0aCwgbGF5ZXIudGlsZW1hcC50aWxlSGVpZ2h0LCBuZXcgQUFCQigwLCAwLCAxMDAwLCAxMDAwKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IoMjU1LDAsMCwgMC42KTtcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgaWYoIWJvZHkuc29saWQpIHJldHVybjtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGdyYXBoaWNzLmRyYXdBQUJCKGJvZHkuYm91bmRpbmdCb3gsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcigwLDI1NSwwLCAwLjYpO1xyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBpZihib2R5LnNvbGlkKSByZXR1cm47XHJcbiAgICAgICAgIGxldCBjb2xsaWRlciA9IGJvZHkuYm91bmRpbmdCb3g7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBncmFwaGljcy5kcmF3QUFCQihjb2xsaWRlciwgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IoMCwwLDI1NSwgMC42KTtcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgbGV0IHRyYW5zZm9ybSA9IGJvZHkudHJhbnNmb3JtO1xyXG4gICAgICAgICBcclxuICAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3RhbmdsZShcclxuICAgICAgICAgICAgdHJhbnNmb3JtLnBvc2l0aW9uLnggLSAxLCB0cmFuc2Zvcm0ucG9zaXRpb24ueSAtIDEsXHJcbiAgICAgICAgICAgIDIsIDIsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9TcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb257XHJcbiAgIGZyYW1lUmF0ZTogbnVtYmVyID0gMTI7XHJcbiAgIFxyXG4gICBwcml2YXRlIHNwcml0ZXM6IFNwcml0ZVtdID0gW107XHJcbiAgIHByaXZhdGUgX2luZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICAvLyBUT0RPIGNhcCB0aGUgX2luZGV4IHZhcmlhYmxlXHJcbiAgICAgIHRoaXMuX2luZGV4ICs9IGRlbHRhICogdGhpcy5mcmFtZVJhdGU7XHJcbiAgIH1cclxuXHJcbiAgIGFkZEZyYW1lKHNwcml0ZTogU3ByaXRlKXtcclxuICAgICAgdGhpcy5zcHJpdGVzLnB1c2goc3ByaXRlKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIGNlbnRlcigpe1xyXG4gICAgICB0aGlzLnNwcml0ZXMuZm9yRWFjaChzcHJpdGUgPT4gc3ByaXRlLmNlbnRlcigpKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgXHJcbiAgIHNldE9mZnNldCh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuc3ByaXRlcy5mb3JFYWNoKHNwcml0ZSA9PiBzcHJpdGUuc2V0T2Zmc2V0KHgsIHkpKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBpbmRleCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5faW5kZXggJSB0aGlzLmZyYW1lcztcclxuICAgfVxyXG4gICBnZXQgZnJhbWVzKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnNwcml0ZXMubGVuZ3RoO1xyXG4gICB9XHJcbiAgIGdldCBmcmFtZSgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW01hdGguZmxvb3IodGhpcy5pbmRleCldO1xyXG4gICB9XHJcbiAgIGdldCBkdXJhdGlvbigpe1xyXG4gICAgICByZXR1cm4gdGhpcy5mcmFtZXMgLyB0aGlzLmZyYW1lUmF0ZTtcclxuICAgfVxyXG5cclxuICAgY2xvbmUoKXtcclxuICAgICAgbGV0IGEgPSAgbmV3IEFuaW1hdGlvbigpO1xyXG4gICAgICBcclxuICAgICAgYS5faW5kZXggPSB0aGlzLl9pbmRleDtcclxuICAgICAgYS5mcmFtZVJhdGUgPSB0aGlzLmZyYW1lUmF0ZTtcclxuICAgICAgYS5zcHJpdGVzID0gdGhpcy5zcHJpdGVzO1xyXG5cclxuICAgICAgcmV0dXJuIGE7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhe1xyXG4gICBjZW50ZXI6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMig2NDAgLyAyLCAzNjAgLyAyKTtcclxuXHJcbiAgIC8vIFRPRE8gdGhpcyBzaG91bGRuJ3QgYmUgZGVmaW5lZCBsaWtlIHRoaXMsIGJlY2F1c2UgdGhpcyBkZXBlbmRzIG9uIHRoZSBzY3JlZW4gYXNwZWN0IHJhdGlvLi4uXHJcbiAgIHdpZHRoOiBudW1iZXIgPSA2NDA7XHJcbiAgIGhlaWdodDogbnVtYmVyID0gMzYwO1xyXG5cclxuICAgcHJlc2VydmVBc3BlY3RSYXRpbzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgLy8gV2UgY2FuIGZpeCB0aGlzIHRvIG5vdCBhbGxvY2F0ZSBtZW1vcnkgYXQgYWxsIDopXHJcbiAgIGdldEJvdW5kcyhhYWJiPzogQUFCQil7XHJcbiAgICAgIGlmKGFhYmIgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgIGFhYmIgPSBuZXcgQUFCQigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYWFiYi5zZXQoXHJcbiAgICAgICAgIHRoaXMuY2VudGVyLnggLSB0aGlzLndpZHRoIC8gMixcclxuICAgICAgICAgdGhpcy5jZW50ZXIueSAtIHRoaXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgdGhpcy5jZW50ZXIueCArIHRoaXMud2lkdGggLyAyLFxyXG4gICAgICAgICB0aGlzLmNlbnRlci55ICsgdGhpcy5oZWlnaHQgLyAyXHJcbiAgICAgICk7XHJcbiAgIH1cclxuXHJcbiAgIHNjcmVlblRvV29ybGRYKHg6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB4ICogdGhpcy53aWR0aCArIHRoaXMuY2VudGVyLnggLSB0aGlzLndpZHRoIC8gMjtcclxuICAgfVxyXG4gICAvLyBzY3JlZW5Ub1dvcmxkWSh5OiBudW1iZXIpe1xyXG4gICAvLyAgICByZXR1cm4geSAqIHRoaXMuaGVpZ2h0ICsgdGhpcy5jZW50ZXIueSAtIHRoaXMuaGVpZ2h0IC8gMjtcclxuICAgLy8gfVxyXG4gICBzY3JlZW5Ub1dvcmxkWSh5OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4geSAqIHRoaXMud2lkdGggKyB0aGlzLmNlbnRlci55IC0gdGhpcy53aWR0aCAvIDI7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuL0NhbWVyYVwiO1xyXG5pbXBvcnQgeyBOaW5lU2lkZVNwcml0ZSB9IGZyb20gXCIuL05pbmVTaWRlU3ByaXRlXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBTdXJmYWNlIH0gZnJvbSBcIi4vU3VyZmFjZVwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcIi4vVGV4dHVyZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEdyYXBoaWNze1xyXG5cclxuICAgcHVibGljIGFic3RyYWN0IGJlZ2luKCk6IHZvaWQ7XHJcbiAgIHB1YmxpYyBhYnN0cmFjdCBjbGVhcigpOiB2b2lkO1xyXG4gICBwdWJsaWMgYWJzdHJhY3QgZW5kKCk6IHZvaWQ7IFxyXG5cclxuICAgcHVibGljIGRyYXdTcHJpdGUoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZVg6IG51bWJlciA9IDEsIHNjYWxlWTogbnVtYmVyID0gMSwgcm90YXRpb246IG51bWJlciA9IDApe1xyXG4gICAgICB0aGlzLmRyYXdTcHJpdGVSYXcoc3ByaXRlLCB4LCB5LCBzY2FsZVgsIHNjYWxlWSwgcm90YXRpb24pO1xyXG4gICB9XHJcbiAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3U3ByaXRlU2ltcGxlKHNwcml0ZTogU3ByaXRlLCB4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQ7XHJcbiAgIFxyXG4gICBwdWJsaWMgYWJzdHJhY3QgZHJhd1Nwcml0ZVJhdyhzcHJpdGU6IFNwcml0ZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlWDogbnVtYmVyLCBzY2FsZVk6IG51bWJlciwgcm90YXRpb246IG51bWJlcik6IHZvaWQ7XHJcbiAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3VGV4dHVyZSh0ZXh0dXJlOiBUZXh0dXJlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGVYOiBudW1iZXIsIHNjYWxlWTogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgIHB1YmxpYyBkcmF3U3VyZmFjZShzdXJmYWNlOiBTdXJmYWNlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGVYOiBudW1iZXIsIHNjYWxlWTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5kcmF3VGV4dHVyZShzdXJmYWNlLnRleHR1cmUsIHgsIHksIHNjYWxlWCwgc2NhbGVZKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGRyYXdTcHJpdGVUaWxlZChzcHJpdGU6IFNwcml0ZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBzY2FsZVg6IG51bWJlciA9IDEsIHNjYWxlWTogbnVtYmVyID0gMSl7XHJcbiAgICAgIGxldCBzcHJpdGVXaWR0aCA9IHNwcml0ZS53aWR0aCAqIHNjYWxlWDtcclxuICAgICAgbGV0IHNwcml0ZUhlaWdodCA9IHNwcml0ZS5oZWlnaHQgKiBzY2FsZVk7XHJcblxyXG4gICAgICBsZXQgdGlsZVggPSB3IC8gc3ByaXRlV2lkdGg7XHJcbiAgICAgIGxldCB0aWxlWSA9IGggLyBzcHJpdGVIZWlnaHQ7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGlsZVg7IGkrKyl7XHJcbiAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aWxlWTsgaisrKXtcclxuICAgICAgICAgICAgdGhpcy5kcmF3U3ByaXRlKHNwcml0ZSwgaSAqIHNwcml0ZVdpZHRoICsgeCwgaiAqIHNwcml0ZUhlaWdodCArIHksIHNjYWxlWCwgc2NhbGVZKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3UmVjdGFuZ2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZmlsbDogYm9vbGVhbik6IHZvaWQ7XHJcblxyXG4gICBwdWJsaWMgZHJhd0FBQkIoYWFiYjogQUFCQiwgZmlsbDogYm9vbGVhbil7XHJcbiAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZShhYWJiLmxlZnQsIGFhYmIudG9wLCBhYWJiLndpZHRoLCBhYWJiLmhlaWdodCwgZmlsbCk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBkcmF3U3ByaXRlTmluZVNpZGUoc3ByaXRlOiBOaW5lU2lkZVNwcml0ZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKXtcclxuICAgICAgbGV0IGJ1ZmZlciA9IG5ldyBTcHJpdGUoc3ByaXRlLnRleHR1cmUpO1xyXG5cclxuICAgICAgbGV0IHhNaWRkbGUgPSAwO1xyXG4gICAgICBsZXQgeU1pZGRsZSA9IDA7XHJcbiAgICAgIGxldCB4U2l6ZSA9IHc7XHJcbiAgICAgIGxldCB5U2l6ZSA9IGg7XHJcblxyXG4gICAgICAvLyBDb3JuZXJzIGFuZCBzZXR1cFxyXG4gICAgICBidWZmZXIgPSBzcHJpdGUuZ2V0U3ByaXRlKDAsIDAsIGJ1ZmZlcik7XHJcbiAgICAgIHRoaXMuZHJhd1Nwcml0ZShidWZmZXIsIHgsIHkpO1xyXG4gICAgICB4U2l6ZSAtPSBidWZmZXIud2lkdGg7XHJcbiAgICAgIHhNaWRkbGUgPSBidWZmZXIud2lkdGg7XHJcbiAgICAgIHlNaWRkbGUgPSBidWZmZXIuaGVpZ2h0O1xyXG4gICAgICBcclxuICAgICAgYnVmZmVyID0gc3ByaXRlLmdldFNwcml0ZSgyLCAwLCBidWZmZXIpO1xyXG4gICAgICB0aGlzLmRyYXdTcHJpdGUoYnVmZmVyLCB4ICsgdyAtIGJ1ZmZlci53aWR0aCwgeSk7XHJcbiAgICAgIHhTaXplIC09IGJ1ZmZlci53aWR0aDtcclxuICAgICAgXHJcbiAgICAgIGJ1ZmZlciA9IHNwcml0ZS5nZXRTcHJpdGUoMCwgMiwgYnVmZmVyKTtcclxuICAgICAgdGhpcy5kcmF3U3ByaXRlKGJ1ZmZlciwgeCwgeSArIGggLSBidWZmZXIuaGVpZ2h0KTtcclxuICAgICAgeVNpemUgLT0gYnVmZmVyLmhlaWdodDtcclxuXHJcbiAgICAgIGJ1ZmZlciA9IHNwcml0ZS5nZXRTcHJpdGUoMiwgMiwgYnVmZmVyKTtcclxuICAgICAgdGhpcy5kcmF3U3ByaXRlKGJ1ZmZlciwgeCArIHcgLSBidWZmZXIud2lkdGgsIHkgKyBoIC0gYnVmZmVyLmhlaWdodCk7XHJcbiAgICAgIHlTaXplIC09IGJ1ZmZlci5oZWlnaHQ7XHJcblxyXG4gICAgICAvLyBUb3BcclxuICAgICAgYnVmZmVyID0gc3ByaXRlLmdldFNwcml0ZSgxLCAwLCBidWZmZXIpO1xyXG4gICAgICB0aGlzLmRyYXdTcHJpdGVUaWxlZChidWZmZXIsIHggKyB4TWlkZGxlLCB5LCB4U2l6ZSwgYnVmZmVyLmhlaWdodCk7XHJcblxyXG4gICAgICAvL0JvdHRvbVxyXG4gICAgICBidWZmZXIgPSBzcHJpdGUuZ2V0U3ByaXRlKDEsIDIsIGJ1ZmZlcik7XHJcbiAgICAgIHRoaXMuZHJhd1Nwcml0ZVRpbGVkKGJ1ZmZlciwgeCArIHhNaWRkbGUsIHkgKyB5TWlkZGxlICsgeVNpemUsIHhTaXplLCBidWZmZXIuaGVpZ2h0KTtcclxuXHJcbiAgICAgIC8vIExlZnRcclxuICAgICAgYnVmZmVyID0gc3ByaXRlLmdldFNwcml0ZSgwLCAxLCBidWZmZXIpO1xyXG4gICAgICB0aGlzLmRyYXdTcHJpdGVUaWxlZChidWZmZXIsIHgsIHkgKyB5TWlkZGxlLCBidWZmZXIud2lkdGgsIHlTaXplKTtcclxuICAgICAgXHJcbiAgICAgIC8vIFJpZ2h0XHJcbiAgICAgIGJ1ZmZlciA9IHNwcml0ZS5nZXRTcHJpdGUoMiwgMSwgYnVmZmVyKTtcclxuICAgICAgdGhpcy5kcmF3U3ByaXRlVGlsZWQoYnVmZmVyLCB4ICsgeE1pZGRsZSArIHhTaXplLCB5ICsgeU1pZGRsZSwgYnVmZmVyLndpZHRoLCB5U2l6ZSk7XHJcblxyXG4gICAgICAvLyBDZW50ZXJcclxuICAgICAgYnVmZmVyID0gc3ByaXRlLmdldFNwcml0ZSgxLCAxLCBidWZmZXIpO1xyXG4gICAgICB0aGlzLmRyYXdTcHJpdGVUaWxlZChidWZmZXIsIHggKyB4TWlkZGxlLCB5ICsgeU1pZGRsZSwgeFNpemUsIHlTaXplKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIGFic3RyYWN0IHJlc2V0U3VyZmFjZSgpOiB2b2lkO1xyXG4gICBwdWJsaWMgYWJzdHJhY3Qgc2V0U3VyZmFjZShzdXJmYWNlOiBTdXJmYWNlKTogdm9pZDtcclxuICAgcHVibGljIGFic3RyYWN0IHNldENhbWVyYShjYW1lcmE6IENhbWVyYSk6IHZvaWQ7XHJcbiAgIHB1YmxpYyBzZXRDb2xvcihyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIgPSAxKXtcclxuICAgICAgdGhpcy5zZXRDb2xvclJhdyhyLCBnLCBiLCBhKTtcclxuICAgfVxyXG4gICBwdWJsaWMgYWJzdHJhY3Qgc2V0QWxwaGEoYTogbnVtYmVyKTogdm9pZDtcclxuXHJcbiAgIHB1YmxpYyBhYnN0cmFjdCBzZXRDb2xvclJhdyhyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIpOiB2b2lkO1xyXG5cclxuICAgcHVibGljIGFic3RyYWN0IHVwZGF0ZVNpemUoKTogdm9pZDtcclxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcIi4vVGV4dHVyZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIE5pbmVTaWRlU3ByaXRle1xyXG4gICB0ZXh0dXJlOiBUZXh0dXJlO1xyXG5cclxuICAgeExpbmVzOiBudW1iZXJbXTtcclxuICAgeUxpbmVzOiBudW1iZXJbXTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUpe1xyXG4gICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG5cclxuICAgICAgdGhpcy54TGluZXMgPSBuZXcgQXJyYXkoNCk7XHJcbiAgICAgIHRoaXMueUxpbmVzID0gbmV3IEFycmF5KDQpO1xyXG4gICB9XHJcblxyXG4gICBzZXR1cCh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyKXtcclxuICAgICAgdGhpcy54TGluZXNbMF0gPSB4O1xyXG4gICAgICB0aGlzLnhMaW5lc1sxXSA9IHggKyBsZWZ0O1xyXG4gICAgICB0aGlzLnhMaW5lc1syXSA9IHggKyB3IC0gcmlnaHQ7XHJcbiAgICAgIHRoaXMueExpbmVzWzNdID0geCArIHc7XHJcblxyXG4gICAgICB0aGlzLnlMaW5lc1swXSA9IHk7XHJcbiAgICAgIHRoaXMueUxpbmVzWzFdID0geSArIHRvcDtcclxuICAgICAgdGhpcy55TGluZXNbMl0gPSB5ICsgaCAtIGJvdHRvbTtcclxuICAgICAgdGhpcy55TGluZXNbM10gPSB5ICsgaDtcclxuICAgfVxyXG5cclxuICAgZ2V0U3ByaXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCBzcHJpdGU6IFNwcml0ZSl7XHJcbiAgICAgIHNwcml0ZS5vZmZzZXRYID0gMDtcclxuICAgICAgc3ByaXRlLm9mZnNldFkgPSAwO1xyXG5cclxuICAgICAgc3ByaXRlLnRleHR1cmUgPSB0aGlzLnRleHR1cmU7XHJcbiAgICAgIFxyXG4gICAgICBzcHJpdGUuc291cmNlWCA9IHRoaXMueExpbmVzW3hdO1xyXG4gICAgICBzcHJpdGUuc291cmNlWSA9IHRoaXMueUxpbmVzW3ldO1xyXG4gICAgICBzcHJpdGUuc291cmNlV2lkdGggPSB0aGlzLnhMaW5lc1t4ICsgMV0gLSB0aGlzLnhMaW5lc1t4XTtcclxuICAgICAgc3ByaXRlLnNvdXJjZUhlaWdodCA9IHRoaXMueUxpbmVzW3kgKyAxXSAtIHRoaXMueUxpbmVzW3ldO1xyXG5cclxuICAgICAgcmV0dXJuIHNwcml0ZTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCJzY2VuZS9TY2VuZVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiLi9BbmltYXRpb25cIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiLi9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJhYmxlIH0gZnJvbSBcIi4vUmVuZGVyYWJsZVwiO1xyXG5cclxuY2xhc3MgUGFydGljbGV7XHJcbiAgIHBvc2l0aW9uOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgc2NhbGU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigxLCAxKTtcclxuICAgbGlmZXRpbWU6IG51bWJlciA9IDA7XHJcbiAgIGFuaW1hdGlvbjogQW5pbWF0aW9ufHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFBhcnRpY2xlU3lzdGVtIGltcGxlbWVudHMgUmVuZGVyYWJsZXtcclxuICAgcGFydGljbGVzOiBQYXJ0aWNsZVtdO1xyXG4gICBpbmRleDogbnVtYmVyO1xyXG4gICBcclxuICAgc2NlbmUhOiBTY2VuZTtcclxuICAgZGVwdGg6IG51bWJlciA9IDA7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBBcnJheSgxMCk7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXSA9IG5ldyBQYXJ0aWNsZSgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgfVxyXG4gICBcclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgdGhpcy5zY2VuZS5yZW5kZXJlci5hZGQodGhpcyk7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgdGhpcy5zY2VuZS5yZW5kZXJlci5yZW1vdmUodGhpcyk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0ubGlmZXRpbWUgLT0gZGVsdGE7XHJcbiAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLmFuaW1hdGlvbj8udXBkYXRlKGRlbHRhKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIGxldCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzW2ldO1xyXG5cclxuICAgICAgICAgaWYocGFydGljbGUuYW5pbWF0aW9uID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICBpZihwYXJ0aWNsZS5saWZldGltZSA8PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGUocGFydGljbGUuYW5pbWF0aW9uLmZyYW1lLCBwYXJ0aWNsZS5wb3NpdGlvbi54LCBwYXJ0aWNsZS5wb3NpdGlvbi55LCBwYXJ0aWNsZS5zY2FsZS54LCBwYXJ0aWNsZS5zY2FsZS55KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBhZGRQYXJ0aWNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgYW5pbWF0aW9uOiBBbmltYXRpb24sIHhTY2FsZTogbnVtYmVyID0gMSwgeVNjYWxlOiBudW1iZXIgPSAxKXtcclxuICAgICAgbGV0IHBhcnRpY2xlID0gdGhpcy5wYXJ0aWNsZXNbdGhpcy5pbmRleF07XHJcblxyXG4gICAgICBwYXJ0aWNsZS5wb3NpdGlvbi54ID0geDtcclxuICAgICAgcGFydGljbGUucG9zaXRpb24ueSA9IHk7XHJcbiAgICAgIHBhcnRpY2xlLnNjYWxlLnggPSB4U2NhbGU7XHJcbiAgICAgIHBhcnRpY2xlLnNjYWxlLnkgPSB5U2NhbGU7XHJcbiAgICAgIFxyXG4gICAgICBwYXJ0aWNsZS5hbmltYXRpb24gPSBhbmltYXRpb24uY2xvbmUoKTtcclxuICAgICAgcGFydGljbGUubGlmZXRpbWUgPSBhbmltYXRpb24uZHVyYXRpb247XHJcblxyXG4gICAgICB0aGlzLmluZGV4Kys7XHJcblxyXG4gICAgICBpZih0aGlzLmluZGV4ID49IHRoaXMucGFydGljbGVzLmxlbmd0aCl7XHJcbiAgICAgICAgIHRoaXMuaW5kZXggLT0gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcIi4vR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgUmVuZGVyYWJsZSB9IGZyb20gXCIuL1JlbmRlcmFibGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSZW5kZXJlcntcclxuICAgcmVuZGVyYWJsZXM6IFJlbmRlcmFibGVbXTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMucmVuZGVyYWJsZXMgPSBbXTtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICB0aGlzLnJlbmRlcmFibGVzLnNvcnQoKGEsIGIpID0+IGEuZGVwdGggLSBiLmRlcHRoKTtcclxuXHJcbiAgICAgIHRoaXMucmVuZGVyYWJsZXMuZm9yRWFjaChyID0+IHIuZHJhdyhncmFwaGljcykpO1xyXG4gICB9XHJcblxyXG4gICBhZGQocmVuZGVyYWJsZTogUmVuZGVyYWJsZSl7XHJcbiAgICAgIHRoaXMucmVuZGVyYWJsZXMucHVzaChyZW5kZXJhYmxlKTtcclxuICAgfVxyXG4gICByZW1vdmUocmVuZGVyYWJsZTogUmVuZGVyYWJsZSl7XHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMucmVuZGVyYWJsZXMuaW5kZXhPZihyZW5kZXJhYmxlKTtcclxuXHJcbiAgICAgIGlmKGluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5yZW5kZXJhYmxlcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCIuL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBTdXJmYWNlIH0gZnJvbSBcIi4vU3VyZmFjZVwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcIi4vVGV4dHVyZVwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIFJlc291cmNlTWFuYWdlcntcclxuICAgdGV4dHVyZXM6IHtba2V5OiBzdHJpbmddOiBUZXh0dXJlfHVuZGVmaW5lZH07XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLnRleHR1cmVzID0ge307XHJcbiAgIH1cclxuXHJcbiAgIGxvYWRTcHJpdGVTaGVldChzcmM6IHN0cmluZyk6IFNwcml0ZVNoZWV0e1xyXG4gICAgICByZXR1cm4gbmV3IFNwcml0ZVNoZWV0KHRoaXMubG9hZFRleHR1cmUoc3JjKSk7XHJcbiAgIH1cclxuXHJcbiAgIGxvYWRUZXh0dXJlKHNyYzogc3RyaW5nKTogVGV4dHVyZXtcclxuICAgICAgaWYodGhpcy50ZXh0dXJlc1tzcmNdID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICB0aGlzLnRleHR1cmVzW3NyY10gPSB0aGlzLmxvYWRUZXh0dXJlUmF3KHNyYyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnRleHR1cmVzW3NyY10hO1xyXG4gICB9XHJcblxyXG4gICBsb2FkVGV4dHVyZUZyb21JbWFnZShpbWc6IEhUTUxJbWFnZUVsZW1lbnQpe1xyXG4gICAgICB0aGlzLmxvYWRUZXh0dXJlKGltZy5zcmMpO1xyXG4gICB9XHJcbiAgIFxyXG4gICBhYnN0cmFjdCBsb2FkVGV4dHVyZVJhdyhzcmM6IHN0cmluZyk6IFRleHR1cmU7XHJcbiAgIFxyXG4gICBhYnN0cmFjdCBjcmVhdGVTdXJmYWNlKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKTogU3VyZmFjZTtcclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcIi4vVGV4dHVyZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZXtcclxuICAgdGV4dHVyZT86IFRleHR1cmU7XHJcblxyXG4gICBvZmZzZXRYOiBudW1iZXIgPSAwO1xyXG4gICBvZmZzZXRZOiBudW1iZXIgPSAwO1xyXG5cclxuICAgc291cmNlWDogbnVtYmVyID0gMDtcclxuICAgc291cmNlWTogbnVtYmVyID0gMDtcclxuICAgc291cmNlV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgIHNvdXJjZUhlaWdodDogbnVtYmVyID0gMDtcclxuXHJcbiAgIGdldCBzb3VyY2VMZWZ0KCkgeyByZXR1cm4gdGhpcy5zb3VyY2VYO31cclxuICAgZ2V0IHNvdXJjZVRvcCgpIHsgcmV0dXJuIHRoaXMuc291cmNlWTt9XHJcbiAgIGdldCBzb3VyY2VSaWdodCgpIHsgcmV0dXJuIHRoaXMuc291cmNlWCArIHRoaXMuc291cmNlV2lkdGg7fVxyXG4gICBnZXQgc291cmNlQm90dG9tKCkgeyByZXR1cm4gdGhpcy5zb3VyY2VZICsgdGhpcy5zb3VyY2VIZWlnaHQ7fVxyXG4gICBcclxuICAgY29uc3RydWN0b3IodGV4dHVyZT86IFRleHR1cmUpe1xyXG4gICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlITtcclxuXHJcbiAgICAgIGlmKHRleHR1cmUgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgIHRoaXMuc291cmNlV2lkdGggPSB0ZXh0dXJlLndpZHRoIGFzIG51bWJlcjtcclxuICAgICAgICAgdGhpcy5zb3VyY2VIZWlnaHQgPSB0ZXh0dXJlLmhlaWdodCBhcyBudW1iZXI7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZ2V0IHdpZHRoKCkgeyByZXR1cm4gdGhpcy5zb3VyY2VXaWR0aDsgfVxyXG4gICBnZXQgaGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5zb3VyY2VIZWlnaHQ7IH1cclxuXHJcbiAgIGNlbnRlcigpe1xyXG4gICAgICB0aGlzLm9mZnNldFggPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgdGhpcy5vZmZzZXRZID0gdGhpcy5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgc2V0T2Zmc2V0KHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5vZmZzZXRYID0geDtcclxuICAgICAgdGhpcy5vZmZzZXRZID0geTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldHtcclxuICAgdGV4dHVyZTogVGV4dHVyZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHRleHR1cmU6IFRleHR1cmUpe1xyXG4gICAgICB0aGlzLnRleHR1cmUgPSB0ZXh0dXJlO1xyXG4gICB9XHJcblxyXG4gICBnZXRTcHJpdGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKXtcclxuICAgICAgbGV0IHNwcml0ZSA9IG5ldyBTcHJpdGUodGhpcy50ZXh0dXJlKTtcclxuXHJcbiAgICAgIHNwcml0ZS5zb3VyY2VYID0geDtcclxuICAgICAgc3ByaXRlLnNvdXJjZVkgPSB5O1xyXG4gICAgICBzcHJpdGUuc291cmNlV2lkdGggPSB3O1xyXG4gICAgICBzcHJpdGUuc291cmNlSGVpZ2h0ID0gaDtcclxuXHJcbiAgICAgIHJldHVybiBzcHJpdGU7XHJcbiAgIH1cclxuICAgXHJcbiAgIGdldEFuaW1hdGlvbih4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGNvdW50OiBudW1iZXIpe1xyXG4gICAgICBsZXQgYW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbigpO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspe1xyXG4gICAgICAgICBsZXQgc3ByaXRlID0gbmV3IFNwcml0ZSh0aGlzLnRleHR1cmUpO1xyXG4gICBcclxuICAgICAgICAgc3ByaXRlLnNvdXJjZVggPSB4ICsgaSAqIHc7XHJcbiAgICAgICAgIHNwcml0ZS5zb3VyY2VZID0geTtcclxuICAgICAgICAgc3ByaXRlLnNvdXJjZVdpZHRoID0gdztcclxuICAgICAgICAgc3ByaXRlLnNvdXJjZUhlaWdodCA9IGg7XHJcblxyXG4gICAgICAgICBhbmltYXRpb24uYWRkRnJhbWUoc3ByaXRlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGZyb21IVE1MKGlkOiBzdHJpbmcpe1xyXG4gICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBTcHJpdGVTaGVldChlbGVtZW50KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgVGV4dHVyZSB9IGZyb20gXCIuL1RleHR1cmVcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTdXJmYWNle1xyXG4gICB0ZXh0dXJlITogVGV4dHVyZTtcclxuICAgXHJcbiAgIGdldCB3aWR0aCgpeyByZXR1cm4gdGhpcy50ZXh0dXJlLndpZHRoOyB9XHJcbiAgIGdldCBoZWlnaHQoKXsgcmV0dXJuIHRoaXMudGV4dHVyZS5oZWlnaHQ7IH1cclxuXHJcbiAgIHJlc2l6ZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIFxyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiZ3JhcGhpY3MvQ2FtZXJhXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IHsgU3VyZmFjZSB9IGZyb20gXCJncmFwaGljcy9TdXJmYWNlXCI7XHJcbmltcG9ydCB7IFRleHR1cmUgfSBmcm9tIFwiZ3JhcGhpY3MvVGV4dHVyZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ1dGlsL0NvbG9yXCI7XHJcbmltcG9ydCB7IERlZmF1bHRGcmFnbWVudFNvdXJjZSwgRGVmYXVsdFZlcnRleFNvdXJjZSwgR0xTaGFkZXJQcm9ncmFtLCBHTFNoYWRlckF0dHJpYnV0ZVNldCB9IGZyb20gXCIuL0dMU2hhZGVyXCI7XHJcbmltcG9ydCB7IEdMU3VyZmFjZSB9IGZyb20gXCIuL0dMU3VyZmFjZVwiO1xyXG5pbXBvcnQgeyBHTFRleHR1cmUgfSBmcm9tIFwiLi9HTFRleHR1cmVcIjtcclxuaW1wb3J0IHsgR0xWZXJ0ZXhCYXRjaCB9IGZyb20gXCIuL0dMVmVydGV4QmF0Y2hcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHTEdyYXBoaWNzIGV4dGVuZHMgR3JhcGhpY3N7XHJcbiAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcblxyXG4gICBwaXhlbFRleHR1cmU6IEdMVGV4dHVyZTtcclxuICAgY3VycmVudFRleHR1cmU6IEdMVGV4dHVyZTtcclxuXHJcbiAgIGN1cnJlbnRTdXJmYWNlPzogR0xTdXJmYWNlO1xyXG5cclxuICAgYmF0Y2g6IEdMVmVydGV4QmF0Y2g7XHJcblxyXG4gICBwcm9qZWN0aW9uTWF0cml4OiBGbG9hdDMyQXJyYXk7XHJcbiAgIG1vZGVsVmlld01hdHJpeDogRmxvYXQzMkFycmF5O1xyXG5cclxuICAgZHJhd2luZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjb2xvcjogQ29sb3I7XHJcblxyXG4gICBjYW1lcmE/OiBDYW1lcmE7XHJcblxyXG4gICBzaGFkZXI6IEdMU2hhZGVyUHJvZ3JhbTtcclxuICAgYXR0cmlidXRlczogR0xTaGFkZXJBdHRyaWJ1dGVTZXQ7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIGdsLmVuYWJsZShnbC5CTEVORCk7XHJcbiAgICAgIGdsLmJsZW5kRnVuYyhnbC5TUkNfQUxQSEEsIGdsLk9ORV9NSU5VU19TUkNfQUxQSEEpO1xyXG4gICAgICBnbC5jbGVhckNvbG9yKDAsIDAsIDAsIDEpO1xyXG5cclxuICAgICAgdGhpcy5nbCA9IGdsO1xyXG5cclxuICAgICAgdGhpcy5jb2xvciA9IG5ldyBDb2xvcigxLCAxLCAxLCAxKTtcclxuXHJcbiAgICAgIHRoaXMuYmF0Y2ggPSBuZXcgR0xWZXJ0ZXhCYXRjaCh0aGlzLmdsKTtcclxuXHJcbiAgICAgIHRoaXMucGl4ZWxUZXh0dXJlID0gbmV3IEdMVGV4dHVyZShnbCk7XHJcbiAgICAgIHRoaXMucGl4ZWxUZXh0dXJlLnNldERhdGEoMSwgMSwgR0xUZXh0dXJlLmNvbG9yRGF0YSgxLCAxKSk7XHJcbiAgICAgIHRoaXMuY3VycmVudFRleHR1cmUgPSB0aGlzLnBpeGVsVGV4dHVyZTtcclxuXHJcbiAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG4gICAgICB0aGlzLm1vZGVsVmlld01hdHJpeCA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAxLCAwLCAwLCAwLFxyXG4gICAgICAgICAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAwLCAwLCAwLCAxXHJcbiAgICAgIF0pO1xyXG5cclxuICAgICAgdGhpcy5iYXRjaCA9IG5ldyBHTFZlcnRleEJhdGNoKHRoaXMuZ2wpO1xyXG5cclxuICAgICAgdGhpcy5zaGFkZXIgPSBuZXcgR0xTaGFkZXJQcm9ncmFtKGdsLCBEZWZhdWx0VmVydGV4U291cmNlLCBEZWZhdWx0RnJhZ21lbnRTb3VyY2UpO1xyXG5cclxuICAgICAgdGhpcy5hdHRyaWJ1dGVzID0gbmV3IEdMU2hhZGVyQXR0cmlidXRlU2V0KCk7XHJcbiAgICAgIHRoaXMuYXR0cmlidXRlcy5sb2FkKHRoaXMuc2hhZGVyKTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICB9XHJcblxyXG4gICBjbGVhcigpe1xyXG4gICAgICB0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCB8IHRoaXMuZ2wuREVQVEhfQlVGRkVSX0JJVCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdTcHJpdGVSYXcoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZVg6IG51bWJlciwgc2NhbGVZOiBudW1iZXIsIHJvdGF0aW9uOiBudW1iZXIpe1xyXG4gICAgICBpZihzcHJpdGUudGV4dHVyZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNldFRleHR1cmUoc3ByaXRlLnRleHR1cmUgYXMgR0xUZXh0dXJlKTtcclxuXHJcbiAgICAgIHRoaXMuZW5zdXJlU2l6ZSg2KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYmF0Y2guY29sb3IodGhpcy5jb2xvci5yLCB0aGlzLmNvbG9yLmcsIHRoaXMuY29sb3IuYiwgdGhpcy5jb2xvci5hKTtcclxuXHJcbiAgICAgIHggLT0gc3ByaXRlLm9mZnNldFggKiBzY2FsZVg7XHJcbiAgICAgIHkgLT0gc3ByaXRlLm9mZnNldFkgKiBzY2FsZVk7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgdyA9IHNwcml0ZS53aWR0aCAqIHNjYWxlWDtcclxuICAgICAgbGV0IGggPSBzcHJpdGUuaGVpZ2h0ICogc2NhbGVZO1xyXG5cclxuICAgICAgbGV0IHUwID0gc3ByaXRlLnNvdXJjZUxlZnQgLyBzcHJpdGUudGV4dHVyZS53aWR0aDtcclxuICAgICAgbGV0IHUxID0gc3ByaXRlLnNvdXJjZVJpZ2h0IC8gc3ByaXRlLnRleHR1cmUud2lkdGg7XHJcbiAgICAgIGxldCB2MCA9IHNwcml0ZS5zb3VyY2VUb3AgLyBzcHJpdGUudGV4dHVyZS5oZWlnaHQ7XHJcbiAgICAgIGxldCB2MSA9IHNwcml0ZS5zb3VyY2VCb3R0b20gLyBzcHJpdGUudGV4dHVyZS5oZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLmJhdGNoLnV2KHUwLCB2MCk7XHJcbiAgICAgIHRoaXMuYmF0Y2gudmVydGV4KHgsIHksIDApO1xyXG4gICAgICB0aGlzLmJhdGNoLnV2KHUxLCB2MCk7XHJcbiAgICAgIHRoaXMuYmF0Y2gudmVydGV4KHggKyB3LCB5LCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC51dih1MSwgdjEpO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4ICsgdywgeSArIGgsIDApO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5iYXRjaC51dih1MCwgdjApO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4LCB5LCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC51dih1MSwgdjEpO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4ICsgdywgeSArIGgsIDApO1xyXG4gICAgICB0aGlzLmJhdGNoLnV2KHUwLCB2MSk7XHJcbiAgICAgIHRoaXMuYmF0Y2gudmVydGV4KHgsIHkgKyBoLCAwKTtcclxuICAgfVxyXG5cclxuICAgZHJhd1RleHR1cmUodGV4dHVyZTogVGV4dHVyZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlWDogbnVtYmVyLCBzY2FsZVk6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuc2V0VGV4dHVyZSh0ZXh0dXJlIGFzIEdMVGV4dHVyZSk7XHJcblxyXG4gICAgICB0aGlzLmVuc3VyZVNpemUoNik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJhdGNoLmNvbG9yKHRoaXMuY29sb3IuciwgdGhpcy5jb2xvci5nLCB0aGlzLmNvbG9yLmIsIHRoaXMuY29sb3IuYSk7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgdyA9IHRleHR1cmUud2lkdGggKiBzY2FsZVg7XHJcbiAgICAgIGxldCBoID0gdGV4dHVyZS5oZWlnaHQgKiBzY2FsZVk7XHJcblxyXG4gICAgICBsZXQgdTAgPSAwO1xyXG4gICAgICBsZXQgdTEgPSAxO1xyXG4gICAgICBsZXQgdjAgPSAwO1xyXG4gICAgICBsZXQgdjEgPSAxO1xyXG5cclxuICAgICAgdGhpcy5iYXRjaC51dih1MCwgdjApO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4LCB5LCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC51dih1MSwgdjApO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4ICsgdywgeSwgMCk7XHJcbiAgICAgIHRoaXMuYmF0Y2gudXYodTEsIHYxKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCArIHcsIHkgKyBoLCAwKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYmF0Y2gudXYodTAsIHYwKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCwgeSwgMCk7XHJcbiAgICAgIHRoaXMuYmF0Y2gudXYodTEsIHYxKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCArIHcsIHkgKyBoLCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC51dih1MCwgdjEpO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4LCB5ICsgaCwgMCk7XHJcblxyXG4gICB9XHJcblxyXG4gICBkcmF3U3ByaXRlU2ltcGxlKHNwcml0ZTogU3ByaXRlLCB4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIGlmKHNwcml0ZS50ZXh0dXJlID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5zZXRUZXh0dXJlKHNwcml0ZS50ZXh0dXJlIGFzIEdMVGV4dHVyZSk7XHJcblxyXG4gICAgICB0aGlzLmVuc3VyZVNpemUoNik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJhdGNoLmNvbG9yKHRoaXMuY29sb3IuciwgdGhpcy5jb2xvci5nLCB0aGlzLmNvbG9yLmIsIHRoaXMuY29sb3IuYSk7XHJcblxyXG4gICAgICB4IC09IHNwcml0ZS5vZmZzZXRYO1xyXG4gICAgICB5IC09IHNwcml0ZS5vZmZzZXRZO1xyXG4gICAgICBcclxuICAgICAgbGV0IHcgPSBzcHJpdGUud2lkdGg7XHJcbiAgICAgIGxldCBoID0gc3ByaXRlLmhlaWdodDtcclxuXHJcbiAgICAgIGxldCB1MCA9IHNwcml0ZS5zb3VyY2VMZWZ0IC8gc3ByaXRlLnRleHR1cmUud2lkdGg7XHJcbiAgICAgIGxldCB1MSA9IHNwcml0ZS5zb3VyY2VSaWdodCAvIHNwcml0ZS50ZXh0dXJlLndpZHRoO1xyXG4gICAgICBsZXQgdjAgPSBzcHJpdGUuc291cmNlVG9wIC8gc3ByaXRlLnRleHR1cmUuaGVpZ2h0O1xyXG4gICAgICBsZXQgdjEgPSBzcHJpdGUuc291cmNlQm90dG9tIC8gc3ByaXRlLnRleHR1cmUuaGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5iYXRjaC51dih1MCwgdjApO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4LCB5LCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC51dih1MSwgdjApO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4ICsgdywgeSwgMCk7XHJcbiAgICAgIHRoaXMuYmF0Y2gudXYodTEsIHYxKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCArIHcsIHkgKyBoLCAwKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYmF0Y2gudXYodTAsIHYwKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCwgeSwgMCk7XHJcbiAgICAgIHRoaXMuYmF0Y2gudXYodTEsIHYxKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCArIHcsIHkgKyBoLCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC51dih1MCwgdjEpO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4LCB5ICsgaCwgMCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdSZWN0YW5nbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBmaWxsOiBib29sZWFuKXtcclxuICAgICAgdGhpcy5zZXRUZXh0dXJlKHRoaXMucGl4ZWxUZXh0dXJlKTtcclxuXHJcbiAgICAgIHRoaXMuZW5zdXJlU2l6ZSg2KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYmF0Y2guY29sb3IodGhpcy5jb2xvci5yLCB0aGlzLmNvbG9yLmcsIHRoaXMuY29sb3IuYiwgdGhpcy5jb2xvci5hKTtcclxuICAgICAgdGhpcy5iYXRjaC51digwLCAwKTtcclxuXHJcbiAgICAgIHRoaXMuYmF0Y2gudmVydGV4KHgsIHksIDApO1xyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4ICsgdywgeSwgMCk7XHJcbiAgICAgIHRoaXMuYmF0Y2gudmVydGV4KHggKyB3LCB5ICsgaCwgMCk7XHJcblxyXG4gICAgICB0aGlzLmJhdGNoLnZlcnRleCh4LCB5LCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCArIHcsIHkgKyBoLCAwKTtcclxuICAgICAgdGhpcy5iYXRjaC52ZXJ0ZXgoeCwgeSArIGgsIDApO1xyXG4gICB9XHJcblxyXG4gICBzZXRDb2xvclJhdyhyOiBudW1iZXIsIGc6IG51bWJlciwgYjogbnVtYmVyLCBhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmNvbG9yLnIgPSByO1xyXG4gICAgICB0aGlzLmNvbG9yLmcgPSBnO1xyXG4gICAgICB0aGlzLmNvbG9yLmIgPSBiO1xyXG4gICAgICB0aGlzLmNvbG9yLmEgPSBhO1xyXG4gICB9XHJcblxyXG4gICBwcml2YXRlIHNldFRleHR1cmUodGV4dHVyZTogR0xUZXh0dXJlKXtcclxuICAgICAgaWYodGhpcy5jdXJyZW50VGV4dHVyZSAhPT0gdGV4dHVyZSkgdGhpcy5mbHVzaCgpO1xyXG5cclxuICAgICAgdGhpcy5jdXJyZW50VGV4dHVyZSA9IHRleHR1cmU7XHJcbiAgIH1cclxuICAgcHJpdmF0ZSBlbnN1cmVTaXplKG46IG51bWJlcil7XHJcbiAgICAgIGlmKHRoaXMuYmF0Y2gubGVmdCA8IG4pIHRoaXMuZmx1c2goKTtcclxuICAgfVxyXG5cclxuICAgYmVnaW4oKXtcclxuICAgICAgaWYodGhpcy5kcmF3aW5nKSByZXR1cm47XHJcbiAgICAgIHRoaXMuZHJhd2luZyA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIGVuZCgpe1xyXG4gICAgICBpZighdGhpcy5kcmF3aW5nKVxyXG4gICAgICAgICByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmZsdXNoKCk7XHJcbiAgICAgIHRoaXMuZHJhd2luZyA9IGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICBmbHVzaCgpe1xyXG4gICAgICBpZighdGhpcy5kcmF3aW5nKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmJhdGNoLmZsdXNoKCk7XHJcbiAgICAgIFxyXG4gICAgICBpZih0aGlzLmJhdGNoLmxlbmd0aCA9PT0gMCkgcmV0dXJuO1xyXG4gICAgICBcclxuICAgICAgbGV0IGdsID0gdGhpcy5nbDtcclxuXHJcbiAgICAgIHRoaXMuc2V0Q2FtZXJhTWF0cml4KHRoaXMuY3VycmVudFN1cmZhY2UgPT09IHVuZGVmaW5lZCk7XHJcblxyXG4gICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKHRoaXMuYXR0cmlidXRlcy5wb3NpdGlvbkF0dHJpYnV0ZSwgMywgZ2wuRkxPQVQsIGZhbHNlLCBHTFZlcnRleEJhdGNoLlN0cmlkZUluQnl0ZXMsIEdMVmVydGV4QmF0Y2guUG9zaXRpb25PZmZzZXRJbkJ5dGVzKTtcclxuICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcih0aGlzLmF0dHJpYnV0ZXMuY29sb3JBdHRyaWJ1dGUsIDQsIGdsLkZMT0FULCBmYWxzZSwgR0xWZXJ0ZXhCYXRjaC5TdHJpZGVJbkJ5dGVzLCBHTFZlcnRleEJhdGNoLkNvbG9yT2Zmc2V0SW5CeXRlcyk7XHJcbiAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hdHRyaWJ1dGVzLnV2QXR0cmlidXRlLCAyLCBnbC5GTE9BVCwgZmFsc2UsIEdMVmVydGV4QmF0Y2guU3RyaWRlSW5CeXRlcywgR0xWZXJ0ZXhCYXRjaC5VVk9mZnNldEluQnl0ZXMpO1xyXG5cclxuICAgICAgLy8gRW5hYmxlIGFsbFxyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmF0dHJpYnV0ZXMucG9zaXRpb25BdHRyaWJ1dGUpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmF0dHJpYnV0ZXMuY29sb3JBdHRyaWJ1dGUpO1xyXG4gICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheSh0aGlzLmF0dHJpYnV0ZXMudXZBdHRyaWJ1dGUpO1xyXG5cclxuICAgICAgLy8gVE9ETyBpZiBzdGF0ZW1lbnRzIGFuZCBzdHVmZiA6KVxyXG4gICAgICB0aGlzLnNoYWRlci51c2UoKTtcclxuXHJcbiAgICAgIHRoaXMuc2hhZGVyLnNldFVuaWZvcm1NYXRyaXgodGhpcy5hdHRyaWJ1dGVzLm1vZGVsVmlld1VuaWZvcm0sIHRoaXMubW9kZWxWaWV3TWF0cml4KTtcclxuICAgICAgdGhpcy5zaGFkZXIuc2V0VW5pZm9ybU1hdHJpeCh0aGlzLmF0dHJpYnV0ZXMucHJvamVjdGlvblVuaWZvcm0sIHRoaXMucHJvamVjdGlvbk1hdHJpeCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNoYWRlci5zZXRVbmlmb3JtUG9zaXRpb24odGhpcy5hdHRyaWJ1dGVzLnNjcmVlblNpemVVbmlmb3JtLCB0aGlzLnZpZXdXaWR0aCwgdGhpcy52aWV3SGVpZ2h0KTtcclxuXHJcbiAgICAgIHRoaXMuc2hhZGVyLnNldFVuaWZvcm1UZXh0dXJlKHRoaXMuYXR0cmlidXRlcy50ZXh0dXJlVW5pZm9ybSwgdGhpcy5jdXJyZW50VGV4dHVyZSk7XHJcblxyXG4gICAgICBnbC5kcmF3QXJyYXlzKGdsLlRSSUFOR0xFUywgMCwgdGhpcy5iYXRjaC5sZW5ndGgpO1xyXG4gICB9XHJcblxyXG4gICBzZXRDYW1lcmEoY2FtZXJhOiBDYW1lcmEpe1xyXG4gICAgICBpZih0aGlzLmNhbWVyYSAhPT0gY2FtZXJhKXtcclxuICAgICAgICAgdGhpcy5mbHVzaCgpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmNhbWVyYSA9IGNhbWVyYTtcclxuICAgfVxyXG5cclxuICAgc2V0Q2FtZXJhTWF0cml4KGZsaXA6IGJvb2xlYW4gPSBmYWxzZSl7XHJcbiAgICAgIGlmKHRoaXMuY2FtZXJhID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGxldCBjYW1lcmFXaWR0aCA9IHRoaXMuY2FtZXJhLndpZHRoO1xyXG4gICAgICBsZXQgY2FtZXJhSGVpZ2h0ID0gdGhpcy5jYW1lcmEuaGVpZ2h0O1xyXG5cclxuICAgICAgaWYoIXRoaXMuY2FtZXJhLnByZXNlcnZlQXNwZWN0UmF0aW8pe1xyXG4gICAgICAgICBsZXQgYXNwID0gdGhpcy52aWV3V2lkdGggLyB0aGlzLnZpZXdIZWlnaHQ7XHJcblxyXG4gICAgICAgICBjYW1lcmFXaWR0aCA9IGNhbWVyYUhlaWdodCAqIGFzcDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IGZsb29yWCA9IHRoaXMudmlld1dpZHRoIC8gY2FtZXJhV2lkdGg7XHJcbiAgICAgIGxldCBmbG9vclkgPSB0aGlzLnZpZXdIZWlnaHQgLyBjYW1lcmFIZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgc2NhbGVYID0gMiAvIGNhbWVyYVdpZHRoO1xyXG4gICAgICBsZXQgc2NhbGVZID0gMiAvIGNhbWVyYUhlaWdodDtcclxuXHJcbiAgICAgIGlmKGZsaXApIHNjYWxlWSA9IC1zY2FsZVk7XHJcblxyXG4gICAgICAvLyBTbmFwcGluZyB0byB3aG9sZSBwaXhlbHNcclxuICAgICAgbGV0IG9mZnNldFggPSAtTWF0aC5mbG9vcih0aGlzLmNhbWVyYS5jZW50ZXIueCAqIGZsb29yWCkgLyBmbG9vclggICogc2NhbGVYO1xyXG4gICAgICBsZXQgb2Zmc2V0WSA9IC1NYXRoLmZsb29yKHRoaXMuY2FtZXJhLmNlbnRlci55ICogZmxvb3JZKSAvIGZsb29yWSAqIHNjYWxlWTtcclxuXHJcbiAgICAgIHRoaXMucHJvamVjdGlvbk1hdHJpeCA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICBzY2FsZVgsIDAsIDAsIDAsXHJcbiAgICAgICAgIDAsIHNjYWxlWSwgMCwgMCxcclxuICAgICAgICAgMCwgMCwgMSwgMCxcclxuICAgICAgICAgb2Zmc2V0WCwgb2Zmc2V0WSwgMCwgMVxyXG4gICAgICBdKTtcclxuICAgfVxyXG4gICBcclxuICAgcmVzZXRTdXJmYWNlKCl7XHJcbiAgICAgIGlmKHRoaXMuY3VycmVudFN1cmZhY2UgIT09IHVuZGVmaW5lZCkgdGhpcy5mbHVzaCgpO1xyXG4gICAgICB0aGlzLmN1cnJlbnRTdXJmYWNlID0gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIG51bGwpO1xyXG4gICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlVmlld3BvcnQoKTtcclxuICAgfVxyXG4gICBzZXRTdXJmYWNlKHN1cmZhY2U6IFN1cmZhY2Upe1xyXG4gICAgICBpZih0aGlzLmN1cnJlbnRTdXJmYWNlICE9PSBzdXJmYWNlKSB0aGlzLmZsdXNoKCk7XHJcbiAgICAgIHRoaXMuY3VycmVudFN1cmZhY2UgPSBzdXJmYWNlIGFzIEdMU3VyZmFjZTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCBudWxsKTtcclxuICAgICAgdGhpcy5jdXJyZW50U3VyZmFjZS5iaW5kKCk7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVZpZXdwb3J0KCk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZVNpemUoKXtcclxuICAgICAgbGV0IGNhbnZhcyA9IHRoaXMuZ2wuY2FudmFzIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgICAgLy8gY2FudmFzLndpZHRoID0gY2FudmFzLm9mZnNldFdpZHRoO1xyXG4gICAgICAvLyBjYW52YXMuaGVpZ2h0ID0gY2FudmFzLm9mZnNldEhlaWdodDtcclxuICAgICAgY2FudmFzLndpZHRoID0gY2FudmFzLm9mZnNldEhlaWdodCAqIDE2IC8gOTtcclxuICAgICAgY2FudmFzLmhlaWdodCA9IGNhbnZhcy5vZmZzZXRIZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVZpZXdwb3J0KCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCB2aWV3V2lkdGgoKXtcclxuICAgICAgaWYodGhpcy5jdXJyZW50U3VyZmFjZSAhPT0gdW5kZWZpbmVkKSByZXR1cm4gdGhpcy5jdXJyZW50U3VyZmFjZS53aWR0aDtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2wuY2FudmFzLndpZHRoO1xyXG4gICB9XHJcbiAgIGdldCB2aWV3SGVpZ2h0KCl7XHJcbiAgICAgIGlmKHRoaXMuY3VycmVudFN1cmZhY2UgIT09IHVuZGVmaW5lZCkgcmV0dXJuIHRoaXMuY3VycmVudFN1cmZhY2UuaGVpZ2h0O1xyXG4gICAgICByZXR1cm4gdGhpcy5nbC5jYW52YXMuaGVpZ2h0O1xyXG4gICB9XHJcbiAgIFxyXG4gICB1cGRhdGVWaWV3cG9ydCgpe1xyXG4gICAgICB0aGlzLmdsLnZpZXdwb3J0KDAsIDAsIHRoaXMudmlld1dpZHRoLCB0aGlzLnZpZXdIZWlnaHQpO1xyXG4gICB9XHJcbiAgIFxyXG4gICBwdWJsaWMgc2V0QWxwaGEoYTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5jb2xvci5hID0gYTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgUmVzb3VyY2VNYW5hZ2VyIH0gZnJvbSBcImdyYXBoaWNzL1Jlc291cmNlTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcImdyYXBoaWNzL1RleHR1cmVcIjtcclxuaW1wb3J0IHsgR0xTdXJmYWNlIH0gZnJvbSBcIi4vR0xTdXJmYWNlXCI7XHJcbmltcG9ydCB7IEdMVGV4dHVyZSB9IGZyb20gXCIuL0dMVGV4dHVyZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdMUmVzb3VyY2VNYW5hZ2VyIGV4dGVuZHMgUmVzb3VyY2VNYW5hZ2Vye1xyXG4gICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgY29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmdsID0gZ2w7XHJcbiAgIH1cclxuXHJcbiAgIGxvYWRUZXh0dXJlUmF3KHNyYzogc3RyaW5nKTogVGV4dHVyZXtcclxuICAgICAgbGV0IHRleHR1cmUgPSBuZXcgR0xUZXh0dXJlKHRoaXMuZ2wpO1xyXG4gICAgICB0aGlzLnRleHR1cmVzW3NyY10gPSB0ZXh0dXJlO1xyXG5cclxuICAgICAgbGV0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICBpbWcub25sb2FkID0gKCkgPT57XHJcbiAgICAgICAgIHRleHR1cmUuc2V0RGF0YUZyb21JbWFnZShpbWcpO1xyXG4gICAgICB9O1xyXG4gICAgICBpbWcuc3JjID0gc3JjO1xyXG4gICAgICByZXR1cm4gdGV4dHVyZTtcclxuICAgfVxyXG5cclxuICAgY3JlYXRlU3VyZmFjZSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBuZXcgR0xTdXJmYWNlKHRoaXMuZ2wsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBHTFRleHR1cmUgfSBmcm9tIFwiLi9HTFRleHR1cmVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWZhdWx0VmVydGV4U291cmNlID0gYFxyXG5hdHRyaWJ1dGUgdmVjMyBwb3NpdGlvbjtcclxuYXR0cmlidXRlIHZlYzQgY29sb3I7XHJcbmF0dHJpYnV0ZSB2ZWMyIHV2O1xyXG5cclxudW5pZm9ybSBtYXQ0IHVfTWF0cml4TW9kZWxWaWV3O1xyXG51bmlmb3JtIG1hdDQgdV9NYXRyaXhQcm9qZWN0aW9uO1xyXG5cclxudW5pZm9ybSB2ZWMyIHVfU2NyZWVuU2l6ZTtcclxuXHJcbnZhcnlpbmcgaGlnaHAgdmVjNCB2X1Bvc2l0aW9uO1xyXG52YXJ5aW5nIGhpZ2hwIHZlYzQgdl9Db2xvcjtcclxudmFyeWluZyBoaWdocCB2ZWMyIHZfVVY7XHJcblxyXG5oaWdocCB2ZWM0IHBpeGVsUGVyZmVjdChoaWdocCB2ZWM0IHYpe1xyXG4gICB2ZWMyIHNwID0gdmVjMih2LngsIHYueSk7XHJcblxyXG4gICB2ZWMyIHNzID0gdV9TY3JlZW5TaXplIC8gMi4wO1xyXG5cclxuICAgc3AgPSBmbG9vcihzcCAqIHNzKSAvIHNzO1xyXG5cclxuICAgdi54ID0gc3AueDtcclxuICAgdi55ID0gc3AueTtcclxuXHJcbiAgIHJldHVybiB2O1xyXG59XHJcblxyXG52b2lkIG1haW4oKSB7XHJcbiAgIHZfUG9zaXRpb24gPSBwaXhlbFBlcmZlY3QodV9NYXRyaXhQcm9qZWN0aW9uICogdV9NYXRyaXhNb2RlbFZpZXcgKiB2ZWM0KHBvc2l0aW9uLCAxLjApKTtcclxuICAgdl9Db2xvciA9IGNvbG9yO1xyXG4gICB2X1VWID0gdXY7XHJcbiAgIFxyXG4gICBnbF9Qb3NpdGlvbiA9IHZfUG9zaXRpb247XHJcbn1cclxuYDtcclxuXHJcbmV4cG9ydCBjb25zdCBEZWZhdWx0RnJhZ21lbnRTb3VyY2UgPSBgXHJcbnZhcnlpbmcgaGlnaHAgdmVjNCB2X1Bvc2l0aW9uO1xyXG52YXJ5aW5nIGhpZ2hwIHZlYzQgdl9Db2xvcjtcclxudmFyeWluZyBoaWdocCB2ZWMyIHZfVVY7XHJcblxyXG51bmlmb3JtIHNhbXBsZXIyRCB1X1RleHR1cmU7XHJcblxyXG5oaWdocCB2ZWM0IHZnYShoaWdocCB2ZWM0IGNvbG9yKXtcclxuICAgLy8gTG93IGNvbG9yIHByZWNpc2lvbiA6KVxyXG4gICBjb25zdCBoaWdocCBmbG9hdCBkZXB0aCA9IDIuMDtcclxuICAgY29sb3IuciA9IGZsb29yKGNvbG9yLnIgKiBkZXB0aCkgLyBkZXB0aDtcclxuICAgY29sb3IuZyA9IGZsb29yKGNvbG9yLmcgKiBkZXB0aCkgLyBkZXB0aDtcclxuICAgY29sb3IuYiA9IGZsb29yKGNvbG9yLmIgKiBkZXB0aCkgLyBkZXB0aDtcclxuXHJcbiAgIHJldHVybiBjb2xvcjtcclxufVxyXG5oaWdocCB2ZWM0IGdyYXkoaGlnaHAgdmVjNCBjb2xvcil7XHJcbiAgIC8vIExvdyBjb2xvciBwcmVjaXNpb24gOilcclxuICAgaGlnaHAgZmxvYXQgdmFsdWUgPSAoY29sb3IuciAqIDAuNCArIGNvbG9yLmcgKiAwLjMgKyBjb2xvci5iICogMC4zKSAvIDIuMDtcclxuXHJcbiAgIGhpZ2hwIHZlYzQgdGFyZ2V0ID0gdmVjNCh2YWx1ZSwgdmFsdWUsIHZhbHVlLCBjb2xvci5hKTtcclxuXHJcbiAgIGhpZ2hwIGZsb2F0IGRpc3QgPSBsZW5ndGgodmVjMih2X1Bvc2l0aW9uKSArIHZlYzIoMC4wLCAwLjQpKSAqIDIuMDtcclxuXHJcbiAgIGRpc3QgPSBmbG9vcihkaXN0ICogMy4wKSAvIDMuMDtcclxuXHJcbiAgIHJldHVybiBtaXgoY29sb3IsIHRhcmdldCwgY2xhbXAoZGlzdCwgMC4wLCAxLjApKTtcclxuICAgLy8gcmV0dXJuIHZlYzQoZGlzdCwgZGlzdCwgZGlzdCwgMS4wKTtcclxufVxyXG5cclxudm9pZCBtYWluKCkge1xyXG4gICBoaWdocCB2ZWM0IGNvbG9yID0gdGV4dHVyZTJEKHVfVGV4dHVyZSwgdl9VVikgKiB2X0NvbG9yO1xyXG5cclxuICAgLy8gRGlzY2FyZCBhbHBoYVxyXG4gICBpZihjb2xvci5hIDwgMC4wMSkgZGlzY2FyZDtcclxuXHJcbiAgIGdsX0ZyYWdDb2xvciA9IChjb2xvcik7XHJcbn1cclxuYDtcclxuXHJcbnR5cGUgU2hhZGVyVHlwZSA9IG51bWJlcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHTFNoYWRlckF0dHJpYnV0ZVNldHtcclxuICAgcG9zaXRpb25BdHRyaWJ1dGUgOiBudW1iZXIgPSAwO1xyXG4gICBjb2xvckF0dHJpYnV0ZSA6IG51bWJlciA9IDA7XHJcbiAgIHV2QXR0cmlidXRlIDogbnVtYmVyID0gMDtcclxuXHJcbiAgIG1vZGVsVmlld1VuaWZvcm06IFdlYkdMVW5pZm9ybUxvY2F0aW9ufG51bGwgPSBudWxsO1xyXG4gICBwcm9qZWN0aW9uVW5pZm9ybTogV2ViR0xVbmlmb3JtTG9jYXRpb258bnVsbCA9IG51bGw7XHJcbiAgIHRleHR1cmVVbmlmb3JtOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbnxudWxsID0gbnVsbDtcclxuICAgc2NyZWVuU2l6ZVVuaWZvcm06IFdlYkdMVW5pZm9ybUxvY2F0aW9ufG51bGwgPSBudWxsO1xyXG5cclxuICAgbG9hZChwcm9ncmFtOiBHTFNoYWRlclByb2dyYW0pe1xyXG4gICAgICB0aGlzLnBvc2l0aW9uQXR0cmlidXRlID0gcHJvZ3JhbS5nZXRBdHRyaWJ1dGVMb2NhdGlvbihcInBvc2l0aW9uXCIpO1xyXG4gICAgICB0aGlzLmNvbG9yQXR0cmlidXRlID0gcHJvZ3JhbS5nZXRBdHRyaWJ1dGVMb2NhdGlvbihcImNvbG9yXCIpO1xyXG4gICAgICB0aGlzLnV2QXR0cmlidXRlID0gcHJvZ3JhbS5nZXRBdHRyaWJ1dGVMb2NhdGlvbihcInV2XCIpO1xyXG5cclxuICAgICAgdGhpcy5tb2RlbFZpZXdVbmlmb3JtID0gcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb24oXCJ1X01hdHJpeE1vZGVsVmlld1wiKTtcclxuICAgICAgdGhpcy5wcm9qZWN0aW9uVW5pZm9ybSA9IHByb2dyYW0uZ2V0VW5pZm9ybUxvY2F0aW9uKFwidV9NYXRyaXhQcm9qZWN0aW9uXCIpO1xyXG4gICAgICB0aGlzLnRleHR1cmVVbmlmb3JtID0gcHJvZ3JhbS5nZXRVbmlmb3JtTG9jYXRpb24oXCJ1X1RleHR1cmVcIik7XHJcbiAgICAgIHRoaXMuc2NyZWVuU2l6ZVVuaWZvcm0gPSBwcm9ncmFtLmdldFVuaWZvcm1Mb2NhdGlvbihcInVfU2NyZWVuU2l6ZVwiKTtcclxuICAgfVxyXG59XHJcblxyXG5jbGFzcyBHTFNoYWRlciB7XHJcbiAgIHN0YXRpYyByZWFkb25seSBWZXJ0ZXg6IFNoYWRlclR5cGUgPSAwOyBcclxuICAgc3RhdGljIHJlYWRvbmx5IEZyYWdtZW50OiBTaGFkZXJUeXBlID0gMTsgXHJcblxyXG4gICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG4gICBpZDogV2ViR0xTaGFkZXI7XHJcblxyXG4gICBjb21waWxlZDogYm9vbGVhbjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQsIHR5cGU6IFNoYWRlclR5cGUsIHNvdXJjZTogc3RyaW5nKXtcclxuICAgICAgdGhpcy5nbCA9IGdsO1xyXG5cclxuICAgICAgdGhpcy5pZCA9IHRoaXMuZ2wuY3JlYXRlU2hhZGVyKHR5cGUgPT09IEdMU2hhZGVyLlZlcnRleCA/IGdsLlZFUlRFWF9TSEFERVIgOiBnbC5GUkFHTUVOVF9TSEFERVIpITtcclxuICAgXHJcbiAgICAgIGdsLnNoYWRlclNvdXJjZSh0aGlzLmlkLCBzb3VyY2UpO1xyXG4gICAgICBnbC5jb21waWxlU2hhZGVyKHRoaXMuaWQpO1xyXG5cclxuICAgICAgdGhpcy5jb21waWxlZCA9IHRydWU7XHJcblxyXG4gICAgICBpZiAoIWdsLmdldFNoYWRlclBhcmFtZXRlcih0aGlzLmlkLCBnbC5DT01QSUxFX1NUQVRVUykpIHtcclxuICAgICAgICAgY29uc29sZS5lcnJvcignQW4gZXJyb3Igb2NjdXJyZWQgY29tcGlsaW5nIHRoZSBzaGFkZXJzOiAnICsgZ2wuZ2V0U2hhZGVySW5mb0xvZyh0aGlzLmlkKSk7XHJcblxyXG4gICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBkZXN0cm95KCl7XHJcbiAgICAgIHRoaXMuZ2wuZGVsZXRlU2hhZGVyKHRoaXMuaWQpO1xyXG4gICAgICB0aGlzLmNvbXBpbGVkID0gZmFsc2U7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEdMU2hhZGVyUHJvZ3JhbSB7XHJcbiAgIHNoYWRlcnM6IEdMU2hhZGVyW107XHJcbiAgIGdsOiBXZWJHTFJlbmRlcmluZ0NvbnRleHQ7XHJcbiAgIGlkOiBXZWJHTFByb2dyYW07XHJcbiAgIGNvbXBpbGVkOiBib29sZWFuO1xyXG5cclxuICAgY29uc3RydWN0b3IoZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dCwgdmVydGV4U291cmNlOiBzdHJpbmcsIGZyYWdtZW50U291cmNlOiBzdHJpbmcpIHtcclxuICAgICAgdGhpcy5zaGFkZXJzID0gW107XHJcbiAgICAgIHRoaXMuZ2wgPSBnbDtcclxuICAgICAgdGhpcy5jb21waWxlZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLnNoYWRlcnMucHVzaChuZXcgR0xTaGFkZXIoZ2wsIEdMU2hhZGVyLlZlcnRleCwgdmVydGV4U291cmNlKSk7XHJcbiAgICAgIHRoaXMuc2hhZGVycy5wdXNoKG5ldyBHTFNoYWRlcihnbCwgR0xTaGFkZXIuRnJhZ21lbnQsIGZyYWdtZW50U291cmNlKSk7XHJcbiAgIFxyXG4gICAgICB0aGlzLmlkID0gdGhpcy5nbC5jcmVhdGVQcm9ncmFtKCkhO1xyXG5cclxuICAgICAgdGhpcy5zaGFkZXJzLmZvckVhY2goc2hhZGVyID0+IHtcclxuICAgICAgICAgLy8gVE9ETyBlcnJvciBjaGVja2luZyBhbmQgc2hpdFxyXG4gICAgICAgICBnbC5hdHRhY2hTaGFkZXIodGhpcy5pZCwgc2hhZGVyLmlkKTtcclxuICAgICAgfSk7XHJcbiAgICAgIGdsLmxpbmtQcm9ncmFtKHRoaXMuaWQpO1xyXG5cclxuICAgICAgaWYgKCFnbC5nZXRQcm9ncmFtUGFyYW1ldGVyKHRoaXMuaWQsIGdsLkxJTktfU1RBVFVTKSkge1xyXG4gICAgICAgICBjb25zb2xlLmVycm9yKCdVbmFibGUgdG8gaW5pdGlhbGl6ZSB0aGUgc2hhZGVyIHByb2dyYW06ICcgKyBnbC5nZXRQcm9ncmFtSW5mb0xvZyh0aGlzLmlkKSk7XHJcblxyXG4gICAgICAgICB0aGlzLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICB1c2UoKXtcclxuICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuaWQpO1xyXG4gICB9XHJcblxyXG4gICBnZXRBdHRyaWJ1dGVMb2NhdGlvbihuYW1lOiBzdHJpbmcpe1xyXG4gICAgICByZXR1cm4gdGhpcy5nbC5nZXRBdHRyaWJMb2NhdGlvbih0aGlzLmlkLCBuYW1lKTtcclxuICAgfVxyXG4gICBnZXRVbmlmb3JtTG9jYXRpb24obmFtZTogc3RyaW5nKXtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHRoaXMuaWQsIG5hbWUpO1xyXG4gICB9XHJcblxyXG4gICBzZXRVbmlmb3JtVmVjdG9yMih1bmlmb3JtOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbnxudWxsLCB2ZWN0b3I6IFZlY3RvcjIpe1xyXG4gICAgICBpZih1bmlmb3JtID09PSBudWxsKSByZXR1cm47XHJcbiAgICAgIHRoaXMuc2V0VW5pZm9ybVBvc2l0aW9uKHVuaWZvcm0sIHZlY3Rvci54LCB2ZWN0b3IueSk7XHJcbiAgIH1cclxuICAgc2V0VW5pZm9ybVBvc2l0aW9uKHVuaWZvcm06IFdlYkdMVW5pZm9ybUxvY2F0aW9ufG51bGwsIHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgaWYodW5pZm9ybSA9PT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmdsLnVuaWZvcm0yZih1bmlmb3JtLCB4LCB5KTtcclxuICAgfVxyXG5cclxuICAgc2V0VW5pZm9ybU1hdHJpeCh1bmlmb3JtOiBXZWJHTFVuaWZvcm1Mb2NhdGlvbnxudWxsLCBtYXRyaXg6IEZsb2F0MzJBcnJheSl7XHJcbiAgICAgIGlmKHVuaWZvcm0gPT09IG51bGwpIHJldHVybjtcclxuICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KHVuaWZvcm0sIGZhbHNlLCBtYXRyaXgpO1xyXG4gICB9XHJcbiAgIHNldFVuaWZvcm1UZXh0dXJlKHVuaWZvcm06IFdlYkdMVW5pZm9ybUxvY2F0aW9ufG51bGwsIHRleHR1cmU6IEdMVGV4dHVyZSl7XHJcbiAgICAgIGlmKHVuaWZvcm0gPT09IG51bGwpIHJldHVybjtcclxuICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTApO1xyXG5cclxuICAgICAgdGV4dHVyZS5iaW5kKCk7XHJcbiAgICAgIHRoaXMuZ2wudW5pZm9ybTFpKHVuaWZvcm0sIDApO1xyXG4gICB9XHJcblxyXG4gICBkZXN0cm95KCl7XHJcbiAgICAgIHRoaXMuc2hhZGVycy5mb3JFYWNoKHNoYWRlciA9PiBzaGFkZXIuZGVzdHJveSgpKTtcclxuICAgICAgdGhpcy5nbC5kZWxldGVQcm9ncmFtKHRoaXMuaWQpO1xyXG4gICAgICB0aGlzLmNvbXBpbGVkID0gZmFsc2U7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFN1cmZhY2UgfSBmcm9tIFwiZ3JhcGhpY3MvU3VyZmFjZVwiO1xyXG5pbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcImdyYXBoaWNzL1RleHR1cmVcIjtcclxuaW1wb3J0IHsgR0xUZXh0dXJlIH0gZnJvbSBcIi4vR0xUZXh0dXJlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR0xTdXJmYWNlIGV4dGVuZHMgU3VyZmFjZXtcclxuICAgZ2w6IFdlYkdMUmVuZGVyaW5nQ29udGV4dDtcclxuXHJcbiAgIHRleHR1cmU6IEdMVGV4dHVyZTtcclxuICAgaWQ6IFdlYkdMRnJhbWVidWZmZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0LCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMuZ2wgPSBnbDtcclxuXHJcbiAgICAgIHRoaXMuaWQgPSB0aGlzLmdsLmNyZWF0ZUZyYW1lYnVmZmVyKCkhO1xyXG4gICAgICB0aGlzLmJpbmQoKTtcclxuXHJcbiAgICAgIHRoaXMudGV4dHVyZSA9IG5ldyBHTFRleHR1cmUodGhpcy5nbCk7XHJcbiAgICAgIHRoaXMucmVzaXplKHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgdGhpcy5nbC5mcmFtZWJ1ZmZlclRleHR1cmUyRChnbC5GUkFNRUJVRkZFUiwgZ2wuQ09MT1JfQVRUQUNITUVOVDAsIGdsLlRFWFRVUkVfMkQsIHRoaXMudGV4dHVyZS5pZCwgMCk7XHJcblxyXG4gICAgICB0aGlzLnVuYmluZCgpO1xyXG4gICB9XHJcblxyXG4gICBiaW5kKCl7XHJcbiAgICAgIHRoaXMuZ2wuYmluZEZyYW1lYnVmZmVyKHRoaXMuZ2wuRlJBTUVCVUZGRVIsIHRoaXMuaWQpO1xyXG4gICB9XHJcbiAgIHVuYmluZCgpe1xyXG4gICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgfVxyXG5cclxuICAgcmVzaXplKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKXtcclxuICAgICAgdGhpcy50ZXh0dXJlLnNldEVtcHR5KHdpZHRoLCBoZWlnaHQpO1xyXG4gICB9XHJcblxyXG4gICBkZXN0cm95KCl7XHJcbiAgICAgIHRoaXMuZ2wuZGVsZXRlQnVmZmVyKHRoaXMuaWQpO1xyXG4gICAgICB0aGlzLnRleHR1cmUuZGVzdHJveSgpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBUZXh0dXJlIH0gZnJvbSBcImdyYXBoaWNzL1RleHR1cmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHTFRleHR1cmUgaW1wbGVtZW50cyBUZXh0dXJle1xyXG4gICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG4gICBpZDogV2ViR0xUZXh0dXJlO1xyXG5cclxuICAgd2lkdGg6IG51bWJlcjtcclxuICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KXtcclxuICAgICAgdGhpcy5nbCA9IGdsO1xyXG5cclxuICAgICAgdGhpcy5pZCA9IGdsLmNyZWF0ZVRleHR1cmUoKSE7XHJcblxyXG4gICAgICB0aGlzLndpZHRoID0gMTtcclxuICAgICAgdGhpcy5oZWlnaHQgPSAxO1xyXG5cclxuICAgICAgdGhpcy5zZXREYXRhKDEsIDEsIG5ldyBVaW50OEFycmF5KFsyNTUsMCwyNTUsIDI1NV0pKTtcclxuXHJcbiAgICAgIHRoaXMuYmluZCgpO1xyXG4gICAgICBcclxuICAgICAgLy8gVE9ETyBtb3ZlIHRoaXMgdG8gY29uc3RydWN0b3JcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfUywgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUlOX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLk5FQVJFU1QpO1xyXG4gICB9XHJcblxyXG4gICBzZXRFbXB0eSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJpbmQoKTtcclxuICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCxcclxuICAgICAgICAgMCwgdGhpcy5nbC5SR0JBLCB3aWR0aCwgaGVpZ2h0LCAwLCBcclxuICAgICAgICAgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xyXG4gICB9XHJcblxyXG4gICBzZXREYXRhKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBkYXRhOiBVaW50OEFycmF5KXtcclxuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuYmluZCgpO1xyXG4gICAgICB0aGlzLmdsLnRleEltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELFxyXG4gICAgICAgICAwLCB0aGlzLmdsLlJHQkEsIHdpZHRoLCBoZWlnaHQsIDAsIFxyXG4gICAgICAgICB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgZGF0YSk7XHJcbiAgIH1cclxuICAgc2V0RGF0YUZyb21JbWFnZShpbWFnZTogSFRNTEltYWdlRWxlbWVudCl7XHJcbiAgICAgIHRoaXMud2lkdGggPSBpbWFnZS53aWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBpbWFnZS5oZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLmJpbmQoKTtcclxuICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgaW1hZ2UpO1xyXG4gICB9XHJcblxyXG4gICBiaW5kKCl7XHJcbiAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLmlkKTtcclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGhpcy5pZCk7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBjaGVja2VyYm9hcmREYXRhKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKXtcclxuICAgICAgbGV0IGRhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHdpZHRoOyBpKyspe1xyXG4gICAgICAgICBmb3IobGV0IGogPSAwOyBqIDwgaGVpZ2h0OyBqKyspe1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSAoaSArIGogKiB3aWR0aCkgKiA0O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IGRhcmsgPSAoKGkgKyBqKSAlIDIpID09IDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBkYXJrID8gMTAwIDogMjU1O1xyXG5cclxuICAgICAgICAgICAgZGF0YVtpbmRleCArIDBdID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGRhdGFbaW5kZXggKyAxXSA9IHZhbHVlO1xyXG4gICAgICAgICAgICBkYXRhW2luZGV4ICsgMl0gPSB2YWx1ZTtcclxuICAgICAgICAgICAgZGF0YVtpbmRleCArIDNdID0gMjU1O1xyXG5cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGNvbG9yRGF0YSh3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIGxldCBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3aWR0aDsgaSsrKXtcclxuICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IGhlaWdodDsgaisrKXtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gKGkgKyBqICogd2lkdGgpICogNDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRhdGFbaW5kZXggKyAwXSA9IDI1NTtcclxuICAgICAgICAgICAgZGF0YVtpbmRleCArIDFdID0gMjU1O1xyXG4gICAgICAgICAgICBkYXRhW2luZGV4ICsgMl0gPSAyNTU7XHJcbiAgICAgICAgICAgIGRhdGFbaW5kZXggKyAzXSA9IDI1NTtcclxuXHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgIH1cclxufSIsIlxyXG5leHBvcnQgY2xhc3MgR0xWZXJ0ZXhCYXRjaHtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBGbG9hdFNpemVJbkJ5dGVzID0gNDtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUG9zaXRpb25TaXplID0gMztcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDb2xvclNpemUgPSA0O1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVWU2l6ZSA9IDI7XHJcbiAgIFxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFBvc2l0aW9uT2Zmc2V0ID0gMDtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDb2xvck9mZnNldCA9IEdMVmVydGV4QmF0Y2guUG9zaXRpb25TaXplO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVWT2Zmc2V0ID0gR0xWZXJ0ZXhCYXRjaC5Qb3NpdGlvblNpemUgKyBHTFZlcnRleEJhdGNoLkNvbG9yU2l6ZTtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgUG9zaXRpb25PZmZzZXRJbkJ5dGVzID0gR0xWZXJ0ZXhCYXRjaC5Qb3NpdGlvbk9mZnNldCAqIEdMVmVydGV4QmF0Y2guRmxvYXRTaXplSW5CeXRlcztcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBDb2xvck9mZnNldEluQnl0ZXMgPSBHTFZlcnRleEJhdGNoLkNvbG9yT2Zmc2V0ICogR0xWZXJ0ZXhCYXRjaC5GbG9hdFNpemVJbkJ5dGVzO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFVWT2Zmc2V0SW5CeXRlcyA9IEdMVmVydGV4QmF0Y2guVVZPZmZzZXQgKiBHTFZlcnRleEJhdGNoLkZsb2F0U2l6ZUluQnl0ZXM7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IFN0cmlkZSA9IEdMVmVydGV4QmF0Y2guUG9zaXRpb25TaXplICsgR0xWZXJ0ZXhCYXRjaC5Db2xvclNpemUgKyBHTFZlcnRleEJhdGNoLlVWU2l6ZTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBTdHJpZGVJbkJ5dGVzID0gR0xWZXJ0ZXhCYXRjaC5TdHJpZGUgKiBHTFZlcnRleEJhdGNoLkZsb2F0U2l6ZUluQnl0ZXM7XHJcblxyXG4gICBnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0O1xyXG5cclxuICAgYnVmZmVyOiBXZWJHTEJ1ZmZlcjtcclxuICAgZGF0YTogRmxvYXQzMkFycmF5O1xyXG4gICBpbmRleDogbnVtYmVyO1xyXG5cclxuICAgdTogbnVtYmVyID0gMDtcclxuICAgdjogbnVtYmVyID0gMDtcclxuICAgcjogbnVtYmVyID0gMTtcclxuICAgZzogbnVtYmVyID0gMTtcclxuICAgYjogbnVtYmVyID0gMTtcclxuICAgYTogbnVtYmVyID0gMTtcclxuXHJcbiAgIGxlbmd0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgIGdldCBsZWZ0KCkgeyByZXR1cm4gdGhpcy5kYXRhLmxlbmd0aCAvIEdMVmVydGV4QmF0Y2guU3RyaWRlSW5CeXRlcyAtIHRoaXMuaW5kZXggLSAxOyB9XHJcblxyXG4gICBjb25zdHJ1Y3RvcihnbDogV2ViR0xSZW5kZXJpbmdDb250ZXh0KXtcclxuICAgICAgdGhpcy5nbCA9IGdsO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5kYXRhID0gbmV3IEZsb2F0MzJBcnJheSgzICogMTAyNCk7XHJcbiAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG5cclxuICAgICAgdGhpcy5idWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKSE7XHJcblxyXG4gICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5idWZmZXIpO1xyXG4gICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgdGhpcy5kYXRhLCBnbC5EWU5BTUlDX0RSQVcpO1xyXG4gICB9XHJcbiAgIFxyXG4gICB1dih1OiBudW1iZXIsIHY6IG51bWJlcil7XHJcbiAgICAgIHRoaXMudSA9IHU7XHJcbiAgICAgIHRoaXMudiA9IHY7XHJcbiAgIH1cclxuICAgXHJcbiAgIGNvbG9yKHI6IG51bWJlciwgZzogbnVtYmVyLCBiOiBudW1iZXIsIGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuciA9IHI7XHJcbiAgICAgIHRoaXMuZyA9IGc7XHJcbiAgICAgIHRoaXMuYiA9IGI7XHJcbiAgICAgIHRoaXMuYSA9IGE7XHJcbiAgIH1cclxuXHJcbiAgIHZlcnRleCh4OiBudW1iZXIsIHk6IG51bWJlciwgejogbnVtYmVyKXtcclxuICAgICAgbGV0IGlkeCA9IHRoaXMuaW5kZXggKiBHTFZlcnRleEJhdGNoLlN0cmlkZSArIEdMVmVydGV4QmF0Y2guUG9zaXRpb25PZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLmRhdGFbaWR4ICsgMF0gPSB4O1xyXG4gICAgICB0aGlzLmRhdGFbaWR4ICsgMV0gPSB5O1xyXG4gICAgICB0aGlzLmRhdGFbaWR4ICsgMl0gPSB6O1xyXG4gICAgICBcclxuICAgICAgdGhpcy5kYXRhW2lkeCArIDNdID0gdGhpcy5yO1xyXG4gICAgICB0aGlzLmRhdGFbaWR4ICsgNF0gPSB0aGlzLmc7XHJcbiAgICAgIHRoaXMuZGF0YVtpZHggKyA1XSA9IHRoaXMuYjtcclxuICAgICAgdGhpcy5kYXRhW2lkeCArIDZdID0gdGhpcy5hO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5kYXRhW2lkeCArIDddID0gdGhpcy51O1xyXG4gICAgICB0aGlzLmRhdGFbaWR4ICsgOF0gPSB0aGlzLnY7XHJcblxyXG4gICAgICAvLyBUT0RPIHNob3VsZCB0aGlzIHN1Ym1pdD9cclxuICAgICAgdGhpcy5pbmRleCsrO1xyXG4gICB9XHJcblxyXG4gICBmbHVzaCgpe1xyXG4gICAgICBpZih0aGlzLmluZGV4ID09PSAwKSByZXR1cm47XHJcbiAgICAgIFxyXG4gICAgICAvLyBUaGlzIGlzIG5pY2UgdG8gb3B0aW1pemUgd2l0aCB3ZWJnbDIgdG8gZ2V0IGJ1ZmZlcnN1YmRhdGEgd2l0aCBvZmZzZXRzIGFuZCB3aGF0bm90XHJcbiAgICAgIHRoaXMuZ2wuYmluZEJ1ZmZlcih0aGlzLmdsLkFSUkFZX0JVRkZFUiwgdGhpcy5idWZmZXIpO1xyXG5cclxuXHJcbiAgICAgIHRoaXMuZ2wuYnVmZmVyU3ViRGF0YSh0aGlzLmdsLkFSUkFZX0JVRkZFUiwgMCwgdGhpcy5kYXRhLnN1YmFycmF5KDAsIHRoaXMuaW5kZXggKiBHTFZlcnRleEJhdGNoLlN0cmlkZSkpO1xyXG5cclxuICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmluZGV4O1xyXG4gICAgICB0aGlzLmluZGV4ID0gMDtcclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICB0aGlzLmdsLmRlbGV0ZUJ1ZmZlcih0aGlzLmJ1ZmZlcik7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgQ2hlc3RHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9DaGVzdEdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgQ29sbGlkZXJHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9Db2xsaWRlckdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgRmVhdGhlckdhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL0ZlYXRoZXJHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IExldmVsTWFuYWdlciB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvTGV2ZWxNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJGaW5pc2hHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllclNwYXduR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyU3Bhd25HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFNwaWtlc0dhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL1NwaWtlc0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgRmFsbGluZ0Jsb2NrR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvRmFsbGluZ0Jsb2NrR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCJzY2VuZS9TY2VuZVwiO1xyXG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSBcInRpbGVtYXAvVGlsZU1hcFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwidXRpbC9MaXN0XCI7XHJcbmltcG9ydCB7IE1vdmluZ1BsYXRmb3JtR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvTW92aW5nUGxhdGZvcm1HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBhdGhNYW5hZ2VyIH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9QYXRoTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBQYXRoIH0gZnJvbSBcIm1hdGgvUGF0aFwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBKdW1wUGxhdGZvcm1HYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9KdW1wUGxhdGZvcm1HYW1lT2JqZWN0XCI7XHJcblxyXG4vLyBGdWNrIHRoaXMgYnV0IHdoYXRldmVyXHJcbmZ1bmN0aW9uIGluaXRNb2RhbChlbGVtZW50OiBIVE1MRWxlbWVudCl7XHJcbiAgIGxldCBjbG9zZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcclxuXHJcbiAgIGNsb3NlPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xyXG5cclxuICAgICAgLy8gWWVzIHRoaXMgbWFrZXMgYSBsb3Qgb2Ygc2Vuc2UgaGVyZSA6KVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0TW9kYWxzKCl7XHJcbiAgIGxldCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpO1xyXG5cclxuICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4gaW5pdE1vZGFsKG1vZGFsIGFzIEhUTUxFbGVtZW50KSk7XHJcbn1cclxuXHJcbi8vIEluaXQgdGhlIGRhbW4gZ2FtZVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKT0+e1xyXG4gICBpbml0TW9kYWxzKCk7XHJcblxyXG4gICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAvLyBpbml0V2ViZ2woY2FudmFzKTtcclxuXHJcbiAgIC8vIHJldHVybjtcclxuXHJcbiAgIGxldCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcclxuICAgZ2FtZS5ydW4oKTtcclxuICAgXHJcbiAgIGxldCBzZXRMZXZlbCA9IGFzeW5jIChsZXZlbDogc3RyaW5nKSA9PntcclxuICAgICAgbGV0IHNjZW5lID0gbmV3IFNjZW5lKCk7XHJcbiAgIFxyXG4gICAgICBsZXQgcGF0aE1hbmFnZXIgPSBuZXcgUGF0aE1hbmFnZXIoKTtcclxuICAgXHJcbiAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QocGF0aE1hbmFnZXIpO1xyXG5cclxuICAgICAgbGV0IHRpbGVtYXAgPSBhd2FpdCBUaWxlTWFwLmZyb21UaWxlZE1hcERvd25sb2FkKGxldmVsLCBnYW1lLnJlc291cmNlcywgKG9iaikgPT4ge1xyXG4gICAgICAgICBpZihvYmoudHlwZSA9PT0gXCJDb2xsaWRlclwiIHx8IG9iai50eXBlID09PSBcIlBsYXRmb3JtQ29sbGlkZXJcIil7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IENvbGxpZGVyR2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihvYmoudHlwZSA9PT0gXCJMZXZlbE1hbmFnZXJcIil7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IExldmVsTWFuYWdlcigpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihvYmoudHlwZSA9PT0gXCJQbGF5ZXJTcGF3blwiKXtcclxuICAgICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgUGxheWVyU3Bhd25HYW1lT2JqZWN0KEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKG9iai50eXBlID09PSBcIkZhbGxpbmdCbG9ja1wiKXtcclxuICAgICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgRmFsbGluZ0Jsb2NrR2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihvYmoudHlwZSA9PT0gXCJNb3ZpbmdQbGF0Zm9ybVwiKXtcclxuICAgICAgICAgICAgbGV0IHBhdGhOYW1lID0gXCJcIjtcclxuICAgICAgICAgICAgbGV0IHZlbG9jaXR5ID0gMzA7XHJcbiAgICAgICAgICAgIGxldCBvZmZzZXQgPSAwO1xyXG4gICBcclxuICAgICAgICAgICAgaWYob2JqLnByb3BlcnRpZXMgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgICAgIG9iai5wcm9wZXJ0aWVzLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmKHByb3AubmFtZSA9PT0gXCJwYXRoXCIpIHBhdGhOYW1lID0gcHJvcC52YWx1ZSBhcyBzdHJpbmc7XHJcbiAgICAgICAgICAgICAgICAgIGlmKHByb3AubmFtZSA9PT0gXCJ2ZWxvY2l0eVwiKSB2ZWxvY2l0eSA9IHByb3AudmFsdWUgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICAgICBpZihwcm9wLm5hbWUgPT09IFwib2Zmc2V0XCIpIG9mZnNldCA9IHByb3AudmFsdWUgYXMgbnVtYmVyO1xyXG4gICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICBcclxuICAgICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgTW92aW5nUGxhdGZvcm1HYW1lT2JqZWN0KHBhdGhOYW1lLCB2ZWxvY2l0eSwgb2Zmc2V0LCBBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihvYmoudHlwZSA9PT0gXCJDaGVja3BvaW50XCIpe1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBQbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihvYmoudHlwZSA9PT0gXCJKdW1wUGxhdGZvcm1cIil7XHJcbiAgICAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IEp1bXBQbGF0Zm9ybUdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYob2JqLnR5cGUgPT09IFwiRmVhdGhlclwiKXtcclxuICAgICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgRmVhdGhlckdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYob2JqLnR5cGUgPT09IFwiUGxheWVyRmluaXNoXCIpe1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0KEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSkpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKG9iai50eXBlID09PSBcIkNoZXN0XCIpe1xyXG4gICAgICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBDaGVzdEdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYob2JqLnR5cGUgPT09IFwiU3Bpa2VzXCIpe1xyXG4gICAgICAgICAgICBsZXQgc2hyaW5rID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGxldCB2aXNpYmxlID0gZmFsc2U7XHJcbiAgIFxyXG4gICAgICAgICAgICBpZihvYmoucHJvcGVydGllcyAhPSBudWxsKXtcclxuICAgICAgICAgICAgICAgb2JqLnByb3BlcnRpZXMuZm9yRWFjaChwcm9wID0+IHtcclxuICAgICAgICAgICAgICAgICAgaWYocHJvcC5uYW1lID09PSBcInNocmlua1wiKSBzaHJpbmsgPSBwcm9wLnZhbHVlIGFzIGJvb2xlYW47XHJcbiAgICAgICAgICAgICAgICAgIGlmKHByb3AubmFtZSA9PT0gXCJ2aXNpYmxlXCIpIHZpc2libGUgPSBwcm9wLnZhbHVlIGFzIGJvb2xlYW47XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgc3Bpa2VzID0gbmV3IFNwaWtlc0dhbWVPYmplY3QoXHJcbiAgICAgICAgICAgICAgIEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSwgc2hyaW5rKTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHNwaWtlcy52aXNpYmxlID0gdmlzaWJsZTtcclxuICAgXHJcbiAgICAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3Qoc3Bpa2VzKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihvYmoudHlwZSA9PT0gXCJQYXRoXCIpe1xyXG4gICAgICAgICAgICBsZXQgcGF0aCA9IG5ldyBQYXRoKCk7XHJcbiAgIFxyXG4gICAgICAgICAgICBvYmoucG9seWxpbmUuZm9yRWFjaChsaW5lID0+IHtcclxuICAgICAgICAgICAgICAgcGF0aC5hZGQobmV3IFZlY3RvcjIobGluZS54ICsgb2JqLngsIGxpbmUueSArIG9iai55KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICBcclxuICAgICAgICAgICAgcGF0aE1hbmFnZXIucGF0aHNbb2JqLm5hbWVdID0gcGF0aDtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgICAgc2NlbmUuc2V0VGlsZW1hcCh0aWxlbWFwKTtcclxuICAgICAgXHJcbiAgICAgIGdhbWUuc2NlbmUgPSBzY2VuZTtcclxuICAgICAgZ2FtZS5zY2VuZS5pbml0KGdhbWUpO1xyXG4gICB9XHJcblxyXG4gICBzZXRMZXZlbChcImFzc2V0cy9sZXZlbHMvbGV2ZWw0Lmpzb25cIik7XHJcblxyXG4gICAod2luZG93IGFzIGFueSkuc2V0TGV2ZWwgPSBzZXRMZXZlbDtcclxufSk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbmFsIH0gZnJvbSBcInNpZ25hbHMvU2lnbmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhbHRoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBoZWFsdGg6IG51bWJlciA9IDM7XHJcblxyXG4gICBvbkRhbWFnZTogU2lnbmFsPEhlYWx0aENvbXBvbmVudD4gPSBuZXcgU2lnbmFsPEhlYWx0aENvbXBvbmVudD4oKTtcclxuICAgb25EZWF0aDogU2lnbmFsPEhlYWx0aENvbXBvbmVudD4gPSBuZXcgU2lnbmFsPEhlYWx0aENvbXBvbmVudD4oKTtcclxuXHJcbiAgIGdldCBhbGl2ZSgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoID4gMDsgfVxyXG4gICBnZXQgZGVhZCgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoIDw9IDA7IH1cclxuXHJcbiAgIGRhbWFnZShhbW91bnQ6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcclxuXHJcbiAgICAgIHRoaXMub25EYW1hZ2UuZW1pdCh0aGlzKTtcclxuICAgICAgXHJcbiAgICAgIGlmKHRoaXMuZGVhZCl7XHJcbiAgICAgICAgIHRoaXMub25EZWF0aC5lbWl0KHRoaXMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInNjZW5lL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgU2lnbmFsIH0gZnJvbSBcInNpZ25hbHMvU2lnbmFsXCI7XHJcbmltcG9ydCB7IEludGVyYWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9JbnRlcmFjdG9yQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3RhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBib2R5ITogUmlnaWRib2R5O1xyXG5cclxuICAgb25JbnRlcmFjdDogU2lnbmFsPEludGVyYWN0b3JDb21wb25lbnQ+O1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5vbkludGVyYWN0ID0gbmV3IFNpZ25hbDxJbnRlcmFjdG9yQ29tcG9uZW50PigpO1xyXG4gICB9XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBzdXBlci5pbml0KGdhbWUpO1xyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmdhbWVPYmplY3QuZmluZENvbXBvbmVudChjb21wb25lbnQgPT4gY29tcG9uZW50IGluc3RhbmNlb2YgUmlnaWRib2R5KSBhcyBSaWdpZGJvZHk7XHJcbiAgIH1cclxuXHJcbiAgIGludGVyYWN0KGludGVyYWN0b3I6IEludGVyYWN0b3JDb21wb25lbnQpe1xyXG4gICAgICB0aGlzLm9uSW50ZXJhY3QuZW1pdChpbnRlcmFjdG9yKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IGNhbkludGVyYWN0KCl7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcblxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGFibGVDb21wb25lbnQgfSBmcm9tIFwiLi9JbnRlcmFjdGFibGVDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdG9yQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBib2R5ITogUmlnaWRib2R5O1xyXG4gICBob3ZlcnM6IFNldDxJbnRlcmFjdGFibGVDb21wb25lbnQ+O1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5ob3ZlcnMgPSBuZXcgU2V0PEludGVyYWN0YWJsZUNvbXBvbmVudD4oKTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoY29tcG9uZW50ID0+IGNvbXBvbmVudCBpbnN0YW5jZW9mIFJpZ2lkYm9keSkgYXMgUmlnaWRib2R5O1xyXG5cclxuICAgICAgdGhpcy5ib2R5Lm9uQ29sbGlzaW9uLmxpc3Rlbih0aGlzLm9uQ29sbGlzaW9uLmJpbmQodGhpcykpO1xyXG4gICB9XHJcblxyXG4gICBpbnRlcmFjdCgpe1xyXG4gICAgICB0aGlzLmhvdmVycy5mb3JFYWNoKGhvdmVyID0+IHtcclxuICAgICAgICAgaWYoaG92ZXIuY2FuSW50ZXJhY3Qpe1xyXG4gICAgICAgICAgICBob3Zlci5pbnRlcmFjdCh0aGlzKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBsZXQgcmVtb3ZlTGlzdDogSW50ZXJhY3RhYmxlQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuaG92ZXJzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAvLyBJZiBubyBsb25nZXIgY29sbGlkZXMhXHJcbiAgICAgICAgIGlmKCF2YWx1ZS5ib2R5LmNvbGxpZGVzKHRoaXMuYm9keSkpe1xyXG4gICAgICAgICAgICByZW1vdmVMaXN0LnB1c2godmFsdWUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVtb3ZlTGlzdC5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5ob3ZlcnMuZGVsZXRlKGl0ZW0pKTtcclxuICAgfVxyXG5cclxuICAgb25Db2xsaXNpb24ob3RoZXI6IFJpZ2lkYm9keSl7XHJcbiAgICAgIGxldCBpbnRlcmFjdGlvbiA9IG90aGVyLmdhbWVPYmplY3QuZmluZENvbXBvbmVudChjb21wb25lbnQgPT4gY29tcG9uZW50IGluc3RhbmNlb2YgSW50ZXJhY3RhYmxlQ29tcG9uZW50KSBhcyBJbnRlcmFjdGFibGVDb21wb25lbnR8dW5kZWZpbmVkO1xyXG5cclxuICAgICAgaWYoaW50ZXJhY3Rpb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5ob3ZlcnMuYWRkKGludGVyYWN0aW9uKTtcclxuICAgfVxyXG59IiwiXHJcbi8vIFdoeSBub3QganVzdCBSaWdpZEJvZHk/IFxyXG4vLyBXZWxsOiBiZWNhdXNlIHRoaXMgbW92aW5nIGdyb3VuZCBjb21wb25lbnQgY2FuIGFjdHVhbGx5IGJlIGxpa2UgYSBtb3ZpbmcgcGxhdGZvcm0gd2l0aG91dCBhY3R1YWxseSBtb3ZpbmcgaXRzZWxmXHJcbi8vIFNvIHRoaW5ncyBsaWtlIGEgY29udmVyeWVyIGJlbHQgY291bGQgYmUgaW1wbGVtZW50ZWQgdXNpbmcgdGhpcyBhcHByb2FjaC5cclxuXHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuXHJcbi8vIExlc3MgcGh5c2ljcyBjb2RlLCBtb3JlIGNsaWVudCBjb2RlLCBtb3JlIGJldHRlciA6KVxyXG5leHBvcnQgY2xhc3MgTW92aW5nR3JvdW5kQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICB2ZWxvY2l0eTogVmVjdG9yMjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLnZlbG9jaXR5ID0gbmV3IFZlY3RvcjIoKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZXBhZElucHV0LCBLZXlib2FyZCB9IGZyb20gXCJlbmdpbmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInNjZW5lL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllcklucHV0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBkaXJlY3Rpb246IG51bWJlciA9IDA7XHJcblxyXG4gICBqdW1wUHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBqdW1wRG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgZGFzaFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGludGVyYWN0UHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmp1bXBQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZGFzaFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5pbnRlcmFjdFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5qdW1wRG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcblxyXG4gICAgICAvLyBUT0RPIGFjdHVhbGx5IHN3aXRjaCBiZXR3ZWVuIGNvbnRyb2xsZXJzIGluc3RlYWQgb2YgdGhpcyBoYWxmIGJha2VkIGhhbGYgYXNzZWQgc29sdXRpb25cclxuICAgICAgdGhpcy5nYW1lLmlucHV0LmdhbWVwYWRzLmZvckVhY2gocGFkID0+IHtcclxuICAgICAgICAgaWYocGFkLmlzQnV0dG9uUHJlc3NlZChHYW1lcGFkSW5wdXQuQnV0dG9uQSkpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25YKSl7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25SaWdodFRyaWdnZXIpKXtcclxuICAgICAgICAgICAgdGhpcy5kYXNoUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYocGFkLmlzQnV0dG9uRG93bihHYW1lcGFkSW5wdXQuQnV0dG9uQSkpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBEb3duID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBwYWQubGVmdEF4aXNYO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5U3BhY2UpKSB0aGlzLmp1bXBQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5RG93bihLZXlib2FyZC5LZXlTcGFjZSkpIHRoaXMuanVtcERvd24gPSB0cnVlO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleUMpKSB0aGlzLmRhc2hQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlYKSkgdGhpcy5pbnRlcmFjdFByZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5RG93bihLZXlib2FyZC5LZXlBcnJvd0xlZnQpKSB0aGlzLmRpcmVjdGlvbiA9IC0xO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlEb3duKEtleWJvYXJkLktleUFycm93UmlnaHQpKSB0aGlzLmRpcmVjdGlvbiA9IDE7XHJcbiAgICAgIFxyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlEb3duKEtleWJvYXJkLktleUEpKSB0aGlzLmRpcmVjdGlvbiA9IC0xO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlEb3duKEtleWJvYXJkLktleUQpKSB0aGlzLmRpcmVjdGlvbiA9IDE7XHJcbiAgICAgIFxyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleUNvbW1hKSkgdGhpcy5qdW1wUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleURvd24oS2V5Ym9hcmQuS2V5Q29tbWEpKSB0aGlzLmp1bXBEb3duID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlQZXJpb2QpKSB0aGlzLmRhc2hQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlTbGFzaCkpIHRoaXMuaW50ZXJhY3RQcmVzc2VkID0gdHJ1ZTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZVNoZWV0IH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGFibGVDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSW50ZXJhY3RhYmxlQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEludGVyYWN0b3JDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSW50ZXJhY3RvckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgSXNsYW5kUmVzb3VyY2VzIGZyb20gXCJpc2xhbmQvSXNsYW5kUmVzb3VyY2VzXCI7XHJcbmltcG9ydCBSZXNvdXJjZXMgZnJvbSBcImlzbGFuZC9Jc2xhbmRSZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvRHJhd2FibGVHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZXN0R2FtZU9iamVjdCBleHRlbmRzIERyYXdhYmxlR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuICAgaW50ZXJhY3RhYmxlOiBJbnRlcmFjdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICBjbG9zZWQhOiBTcHJpdGU7XHJcbiAgIG9wZW4hOiBTcHJpdGU7XHJcblxyXG4gICBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBJbnRlcmFjdGFibGVDb21wb25lbnQoKSk7XHJcblxyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZS5vbkludGVyYWN0Lmxpc3Rlbih0aGlzLm9uSW50ZXJhY3QuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICB0aGlzLmJvZHkuY29sbGlkZXIgPSBCb3hDb2xsaWRlci5mcm9tQUFCQihhYWJiKTtcclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuICAgICAgXHJcbiAgICAgIGxldCBvYmplY3RTaGVldCA9IGdhbWUucmVzb3VyY2VzLmxvYWRTcHJpdGVTaGVldChJc2xhbmRSZXNvdXJjZXMuU2hlZXRPYmplY3RzKTtcclxuXHJcbiAgICAgIHRoaXMuY2xvc2VkID0gb2JqZWN0U2hlZXQuZ2V0U3ByaXRlKDAsIDY0LCAxNiwgMTYpO1xyXG4gICAgICB0aGlzLm9wZW4gPSBvYmplY3RTaGVldC5nZXRTcHJpdGUoMTYsIDY0LCAxNiwgMTYpO1xyXG4gICB9XHJcblxyXG4gICBvbkludGVyYWN0KGludGVyYWN0b3I6IEludGVyYWN0b3JDb21wb25lbnQpe1xyXG4gICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBncmFwaGljcy5kcmF3U3ByaXRlU2ltcGxlKHRoaXMuaXNPcGVuID8gdGhpcy5vcGVuIDogdGhpcy5jbG9zZWQsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxpZGVyR2FtZU9iamVjdCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uYXBwbHkoYWFiYi54LCBhYWJiLnkpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5zb2xpZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IElzbGFuZFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL0lzbGFuZFJlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBSZXNldGFibGVHYW1lT2JqZWN0IH0gZnJvbSBcIi4vUmVzZXRhYmxlR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhbGxpbmdCbG9ja0dhbWVPYmplY3QgZXh0ZW5kcyBSZXNldGFibGVHYW1lT2JqZWN0e1xyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuICAgYm9keTogUmlnaWRib2R5O1xyXG4gICBzcHJpdGUhOiBTcHJpdGU7XHJcblxyXG4gICBmYWxsaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICByZW1vdmVUaW1lcjogbnVtYmVyID0gMTtcclxuXHJcbiAgIHJlc3Bhd246IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgcmVzcGF3blRpbWVyOiBudW1iZXIgPSAxO1xyXG5cclxuICAgYW5pbWF0aW9uVGltZXI6IG51bWJlciA9IDA7XHJcbiAgIG9mZnNldDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uYXBwbHkoYWFiYi54LCBhYWJiLnkpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5zb2xpZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ib2R5Lm9uQ29sbGlzaW9uLmxpc3Rlbigob3RoZXIpPT57XHJcbiAgICAgICAgIGlmKHRoaXMuZmFsbGluZykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgdGhpcy5mYWxsaW5nID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy50aW1lciA9IDAuNjtcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcblxyXG4gICAgICB0aGlzLnNwcml0ZSA9IGdhbWUucmVzb3VyY2VzLmxvYWRTcHJpdGVTaGVldChJc2xhbmRSZXNvdXJjZXMuU2hlZXRPYmplY3RzKS5nZXRTcHJpdGUoMCwgOTYsIDE2LCAxNik7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYoIXRoaXMuZmFsbGluZykgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLnRpbWVyIC09IGRlbHRhO1xyXG5cclxuICAgICAgdGhpcy5hbmltYXRpb25UaW1lciAtPSBkZWx0YTtcclxuXHJcbiAgICAgIGlmKHRoaXMuYW5pbWF0aW9uVGltZXIgPCAwKXtcclxuICAgICAgICAgdGhpcy5hbmltYXRpb25UaW1lciA9IDAuMDc7XHJcbiAgICAgICAgIHRoaXMub2Zmc2V0LnggPSBNYXRoLnJhbmRvbSgpICogMiAtIDE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMudGltZXIgPiAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLm9mZnNldC54ID0gMDtcclxuICAgICAgdGhpcy5vZmZzZXQueSA9IDA7XHJcblxyXG4gICAgICB0aGlzLmJvZHkuc29saWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMucmVtb3ZlVGltZXIgLT0gZGVsdGE7XHJcblxyXG4gICAgICBpZih0aGlzLnJlbW92ZVRpbWVyIDwgMCkge1xyXG4gICAgICAgICAvLyB0aGlzLnNjZW5lLnJlbW92ZUdhbWVPYmplY3QodGhpcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcmVzZXQoKXtcclxuICAgICAgc3VwZXIucmVzZXQoKTtcclxuXHJcbiAgICAgIHRoaXMub2Zmc2V0LnggPSAwO1xyXG4gICAgICB0aGlzLm9mZnNldC55ID0gMDtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuZmFsbGluZyA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnRpbWVyID0gMDtcclxuICAgICAgdGhpcy5yZW1vdmVUaW1lciA9IDE7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkuc29saWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmJvZHkudXNlRHluYW1pY0NvbGxpc2lvbnMgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5yZXNwYXduVGltZXIgPSAxO1xyXG4gICB9XHJcblxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYoIXRoaXMuZmFsbGluZyB8fCB0aGlzLnRpbWVyID4gMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgKz0gMC4yNSAqIDYwICogNjAgKiBkZWx0YTtcclxuXHJcbiAgICAgIHRoaXMucmVzcGF3blRpbWVyIC09IGRlbHRhO1xyXG4gICAgICBpZih0aGlzLnJlc3Bhd25UaW1lciA8IDAgJiYgdGhpcy5yZXNwYXduKSB0aGlzLnJlc2V0KCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgaWYodGhpcy5yZW1vdmVUaW1lciA8IDApIHJldHVybjtcclxuICAgICAgXHJcbiAgICAgIGdyYXBoaWNzLnNldEFscGhhKHRoaXMucmVtb3ZlVGltZXIpO1xyXG4gICAgICBncmFwaGljcy5kcmF3U3ByaXRlKHRoaXMuc3ByaXRlLCB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi54ICsgdGhpcy5vZmZzZXQueCwgdGhpcy50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueSArIHRoaXMub2Zmc2V0LnkpO1xyXG4gICAgICBncmFwaGljcy5zZXRBbHBoYSgxKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiZ3JhcGhpY3MvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IElzbGFuZFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL0lzbGFuZFJlc291cmNlc1wiO1xyXG5pbXBvcnQgUmVzb3VyY2VzIGZyb20gXCJpc2xhbmQvSXNsYW5kUmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL0JveENvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgRHJhd2FibGVHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0RyYXdhYmxlR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyR2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllckdhbWVPYmplY3RcIjtcclxuXHJcbi8vIFRPRE8gcGxheWVyIHBpY2t1cCBnYW1lb2JqZWN0IG9yIHNvbWV0aGluZ1xyXG5leHBvcnQgY2xhc3MgRmVhdGhlckdhbWVPYmplY3QgZXh0ZW5kcyBEcmF3YWJsZUdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcblxyXG4gICB1c2VkU3ByaXRlITogU3ByaXRlO1xyXG4gICB1bnVzZWRTcHJpdGUhOiBTcHJpdGU7XHJcblxyXG4gICBpc1VzZWQ6IGJvb2xlYW47XHJcbiAgIHVzZWRUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgZWZmZWN0ITogQW5pbWF0aW9uO1xyXG5cclxuICAgY29uc3RydWN0b3IoYWFiYjogQUFCQil7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oKSk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLmFwcGx5KGFhYmIuY2VudGVyWCwgYWFiYi5jZW50ZXJZKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBSaWdpZGJvZHkoKSk7XHJcblxyXG4gICAgICB0aGlzLmJvZHkudXNlRHluYW1pY0NvbGxpc2lvbnMgPSB0cnVlO1xyXG5cclxuICAgICAgbGV0IGNvbGxpZGVyID0gQm94Q29sbGlkZXIuZnJvbUFBQkIoYWFiYik7XHJcbiAgICAgIFxyXG4gICAgICBjb2xsaWRlci5vZmZzZXQuYXBwbHkoNiwgNik7XHJcbiAgICAgIGNvbGxpZGVyLnNpemUuYXBwbHkoMTIsIDEyKTtcclxuXHJcblxyXG4gICAgICB0aGlzLmJvZHkuY29sbGlkZXIgPSBjb2xsaWRlcjtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuaXNVc2VkID0gZmFsc2U7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkub25Db2xsaXNpb24ubGlzdGVuKHRoaXMub25Db2xsaXNpb24uYmluZCh0aGlzKSk7XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcbiAgICAgIFxyXG4gICAgICBsZXQgc2hlZXRFZmZlY3RzID0gZ2FtZS5yZXNvdXJjZXMubG9hZFNwcml0ZVNoZWV0KElzbGFuZFJlc291cmNlcy5TaGVldEVmZmVjdHMpO1xyXG4gICAgICBsZXQgc2hlZXRPYmplY3RzID0gZ2FtZS5yZXNvdXJjZXMubG9hZFNwcml0ZVNoZWV0KElzbGFuZFJlc291cmNlcy5TaGVldE9iamVjdHMpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5lZmZlY3QgPSBzaGVldEVmZmVjdHMuZ2V0QW5pbWF0aW9uKDAsIDgwLCAxNiwgMTYsIDQpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLmVmZmVjdC5mcmFtZVJhdGUgPSAxMjtcclxuICAgICAgXHJcbiAgICAgIHRoaXMudW51c2VkU3ByaXRlID0gc2hlZXRPYmplY3RzLmdldFNwcml0ZSgwLCA4MCwgMTYsIDE2KS5jZW50ZXIoKTtcclxuICAgICAgdGhpcy51c2VkU3ByaXRlID0gc2hlZXRPYmplY3RzLmdldFNwcml0ZSgxNiwgODAsIDE2LCAxNikuY2VudGVyKCk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYodGhpcy51c2VkVGltZSA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMudXNlZFRpbWUgLT0gZGVsdGE7XHJcblxyXG4gICAgICBpZih0aGlzLnVzZWRUaW1lIDwgMCl7XHJcbiAgICAgICAgIHRoaXMuaXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAvLyBUT0RPIGFkZCBhbmltYXRpb25cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBvbkNvbGxpc2lvbihvdGhlcjogUmlnaWRib2R5KXtcclxuICAgICAgaWYoIXRoaXMuaXNVc2VkICYmIG90aGVyLmdhbWVPYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXJHYW1lT2JqZWN0KXtcclxuICAgICAgICAgb3RoZXIuZ2FtZU9iamVjdC5jYW5Eb3VibGVKdW1wID0gdHJ1ZTtcclxuICAgICAgICAgb3RoZXIuZ2FtZU9iamVjdC5jYW5EYXNoID0gdHJ1ZTsgLy9BZnRlciBkb3VibGVqdW1wLCB5b3UgZ2V0IGFub3RoZXIgZGFzaCFcclxuXHJcbiAgICAgICAgIHRoaXMuaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy51c2VkVGltZSA9IDE7XHJcblxyXG4gICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnksIHRoaXMuZWZmZWN0KTtcclxuXHJcbiAgICAgICAgIC8vIFRPRE8gYWRkIGFuaW1hdGlvblxyXG4gICAgICB9XHJcbiAgIH0gXHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGVTaW1wbGUodGhpcy5pc1VzZWQgPyB0aGlzLnVzZWRTcHJpdGUgOiB0aGlzLnVudXNlZFNwcml0ZSwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5pbXBvcnQgSXNsYW5kUmVzb3VyY2VzIGZyb20gXCJpc2xhbmQvSXNsYW5kUmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL0JveENvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgRHJhd2FibGVHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0RyYXdhYmxlR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyR2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllckdhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBKdW1wUGxhdGZvcm1HYW1lT2JqZWN0IGV4dGVuZHMgRHJhd2FibGVHYW1lT2JqZWN0e1xyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuICAgYm9keTogUmlnaWRib2R5O1xyXG5cclxuICAgc3ByaXRlITogU3ByaXRlO1xyXG5cclxuICAgZ3Jhdml0eTogbnVtYmVyID0gMC4yNSAqIDYwICogNjA7XHJcbiAgIGJvdW5jeW5lc3M6IG51bWJlciA9IDAuNDtcclxuICAgdmVsb2NpdHk6IG51bWJlciA9IDA7XHJcbiAgIG9mZnNldDogbnVtYmVyID0gMDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgLy8gSnVzdCB3aGF0ZXZlciBtYW4uXHJcbiAgICAgIGFhYmIudG9wICs9IDEyO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LmNvbGxpZGVyID0gQm94Q29sbGlkZXIuZnJvbUFBQkIoYWFiYik7XHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5vbkNvbGxpc2lvbi5saXN0ZW4ob3RoZXIgPT4ge1xyXG4gICAgICAgICBsZXQgb2Zmc2V0ID0gb3RoZXIuYm91bmRpbmdCb3guYm90dG9tIC0gb3RoZXIudHJhbnNmb3JtLnBvc2l0aW9uLnk7XHJcbiAgICAgICAgIG90aGVyLnRyYW5zZm9ybS5wb3NpdGlvbi55ID0gYWFiYi50b3AgLSBvZmZzZXQ7XHJcbiAgICAgICAgIG90aGVyLnZlbG9jaXR5LnkgPSAtMy41ICogNjA7XHJcbiAgICAgICAgIHRoaXMudmVsb2NpdHkgPSAtMy41ICogNjA7XHJcblxyXG4gICAgICAgICBpZihvdGhlci5nYW1lT2JqZWN0IGluc3RhbmNlb2YgUGxheWVyR2FtZU9iamVjdCl7XHJcbiAgICAgICAgICAgIG90aGVyLmdhbWVPYmplY3QuY2FuRGFzaCA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIGZpeGVkVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBzdXBlci5maXhlZFVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICB0aGlzLnZlbG9jaXR5ICs9IHRoaXMuZ3Jhdml0eSAqIGRlbHRhO1xyXG4gICAgICB0aGlzLm9mZnNldCArPSB0aGlzLnZlbG9jaXR5ICogZGVsdGE7XHJcblxyXG4gICAgICBpZih0aGlzLm9mZnNldCA+IDEwKSB7XHJcbiAgICAgICAgIHRoaXMub2Zmc2V0ID0gMTA7XHJcbiAgICAgICAgIGlmKHRoaXMudmVsb2NpdHkgPiAwKSB0aGlzLnZlbG9jaXR5ID0gLXRoaXMudmVsb2NpdHkgKiB0aGlzLmJvdW5jeW5lc3M7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5vZmZzZXQgPCAwKXtcclxuICAgICAgICAgdGhpcy5vZmZzZXQgPSAwO1xyXG4gICAgICAgICBpZih0aGlzLnZlbG9jaXR5IDwgMCkgdGhpcy52ZWxvY2l0eSA9IC10aGlzLnZlbG9jaXR5ICogdGhpcy5ib3VuY3luZXNzO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcblxyXG4gICAgICBsZXQgc2hlZXQgPSBnYW1lLnJlc291cmNlcy5sb2FkU3ByaXRlU2hlZXQoSXNsYW5kUmVzb3VyY2VzLlNoZWV0T2JqZWN0cyk7XHJcblxyXG4gICAgICB0aGlzLnNwcml0ZSA9IHNoZWV0LmdldFNwcml0ZSgwLCAxMjggKyAxMiwgMTYsIDQpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGUodGhpcy5zcHJpdGUsIHRoaXMudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLnkgKyB0aGlzLm9mZnNldCAtIDEwKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBHYW1lcGFkSW5wdXQsIEtleWJvYXJkIH0gZnJvbSBcImVuZ2luZS9JbnB1dFwiO1xyXG5pbXBvcnQgeyBIZWFsdGhDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSGVhbHRoQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IGZvcm1hdCB9IGZyb20gXCJ1dGlsL1RpbWVcIjtcclxuaW1wb3J0IHsgUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3QgfSBmcm9tIFwiLi9QbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0IH0gZnJvbSBcIi4vUGxheWVyRmluaXNoR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJHYW1lT2JqZWN0IH0gZnJvbSBcIi4vUGxheWVyR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTcGF3bkdhbWVPYmplY3QgfSBmcm9tIFwiLi9QbGF5ZXJTcGF3bkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUmVzZXRhYmxlR2FtZU9iamVjdCB9IGZyb20gXCIuL1Jlc2V0YWJsZUdhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbE1hbmFnZXIgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICBzcGF3bj86IFBsYXllclNwYXduR2FtZU9iamVjdDtcclxuICAgZmluaXNoPzogUGxheWVyRmluaXNoR2FtZU9iamVjdDtcclxuXHJcbiAgIHBsYXllcj86IFBsYXllckdhbWVPYmplY3Q7XHJcbiAgIGNoZWNrcG9pbnRzOiBQbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdFtdO1xyXG5cclxuICAgY3VycmVudENoZWNrcG9pbnQ/OiBQbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdDtcclxuXHJcbiAgIHJ1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgZmluYWxUaW1lRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgIGJlc3RUaW1lRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICBiZXN0VGltZTogbnVtYmVyfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtb3ZlcmxheVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgdGhpcy5maW5hbFRpbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5hbC10aW1lXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICB0aGlzLmJlc3RUaW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmVzdC10aW1lXCIpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgdGhpcy5hbHdheXNVcGRhdGUgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5jaGVja3BvaW50cyA9IFtdO1xyXG5cclxuICAgICAgbGV0IGJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiZXN0VGltZVwiKTtcclxuICAgICAgaWYoYnQgIT09IG51bGwpe1xyXG4gICAgICAgICB0aGlzLmJlc3RUaW1lID0gcGFyc2VGbG9hdChidCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuXHJcbiAgICAgIHRoaXMuc3Bhd24gPSB0aGlzLnNjZW5lLmZpbmRPYmplY3Qob2JqZWN0ID0+IG9iamVjdCBpbnN0YW5jZW9mIFBsYXllclNwYXduR2FtZU9iamVjdCkgYXMgUGxheWVyU3Bhd25HYW1lT2JqZWN0fHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5maW5pc2ggPSB0aGlzLnNjZW5lLmZpbmRPYmplY3Qob2JqZWN0ID0+IG9iamVjdCBpbnN0YW5jZW9mIFBsYXllckZpbmlzaEdhbWVPYmplY3QpIGFzIFBsYXllckZpbmlzaEdhbWVPYmplY3R8dW5kZWZpbmVkO1xyXG5cclxuICAgICAgdGhpcy5maW5pc2g/LmludGVyYWN0YWJsZS5vbkludGVyYWN0Lmxpc3RlbihpbnRlcmFjdG9yID0+IHtcclxuICAgICAgICAgaWYoaW50ZXJhY3Rvci5nYW1lT2JqZWN0IGluc3RhbmNlb2YgUGxheWVyR2FtZU9iamVjdCl7XHJcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnNjZW5lLmdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IHtcclxuICAgICAgICAgaWYob2JqIGluc3RhbmNlb2YgUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3Qpe1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrcG9pbnRzLnB1c2gob2JqKTtcclxuXHJcbiAgICAgICAgICAgIG9iai5pbnRlcmFjdGFibGUub25JbnRlcmFjdC5saXN0ZW4oaW50ZXJhY3RvciA9PiB7XHJcbiAgICAgICAgICAgICAgIHRoaXMuY3VycmVudENoZWNrcG9pbnQgPSBvYmo7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgIGlmKHRoaXMucnVubmluZykge1xyXG4gICAgICAgICB0aGlzLmdhbWUuaW5wdXQuZ2FtZXBhZHMuZm9yRWFjaChwYWQgPT4ge1xyXG4gICAgICAgICAgICBpZihwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25ZKSl7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICBcclxuICAgICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlFbnRlcikpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5nYW1lcGFkcy5mb3JFYWNoKHBhZCA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBhZC5pc0J1dHRvblByZXNzZWQoR2FtZXBhZElucHV0LkJ1dHRvbkEpIHx8IHBhZC5pc0J1dHRvblByZXNzZWQoR2FtZXBhZElucHV0LkJ1dHRvblkpKXtcclxuICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcbiAgIFxyXG4gICAgICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleUVudGVyKSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5Q29tbWEpKXtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlTcGFjZSkpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZUNhbWVyYShkZWx0YSk7XHJcbiAgIH1cclxuXHJcbiAgIGZpeGVkVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBzdXBlci5maXhlZFVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICBpZih0aGlzLnJ1bm5pbmcgJiYgIXRoaXMuc2NlbmUucGF1c2VkKXtcclxuICAgICAgICAgdGhpcy50aW1lICs9IGRlbHRhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZighdGhpcy5wbGF5ZXI/LmhlYWx0aC5hbGl2ZSl7XHJcbiAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHN0b3AoKXtcclxuICAgICAgdGhpcy5zY2VuZS5yZW1vdmVHYW1lT2JqZWN0KHRoaXMucGxheWVyISk7XHJcblxyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmKHRoaXMuY29tcGxldGVkICYmICh0aGlzLmJlc3RUaW1lID09PSB1bmRlZmluZWQgfHwgdGhpcy50aW1lIDwgdGhpcy5iZXN0VGltZSkpe1xyXG4gICAgICAgICB0aGlzLmJlc3RUaW1lID0gdGhpcy50aW1lO1xyXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJlc3RUaW1lXCIsIFwiXCIgKyB0aGlzLmJlc3RUaW1lKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zeW5jKCk7XHJcbiAgIH1cclxuXHJcbiAgIHJlc3RhcnQoKXtcclxuICAgICAgaWYodGhpcy5zcGF3biA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuXHJcblxyXG4gICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXJHYW1lT2JqZWN0KCk7XHJcblxyXG4gICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLnNwYXduLnRyYW5zZm9ybS5wb3NpdGlvbjtcclxuXHJcbiAgICAgIGlmKHRoaXMuY3VycmVudENoZWNrcG9pbnQgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgIHRoaXMudGltZSA9IDA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMuY3VycmVudENoZWNrcG9pbnQgIT09IHVuZGVmaW5lZCAmJiAhdGhpcy5jb21wbGV0ZWQpe1xyXG4gICAgICAgICBwb3NpdGlvbiA9IHRoaXMuY3VycmVudENoZWNrcG9pbnQudHJhbnNmb3JtLnBvc2l0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnBsYXllci50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KHBvc2l0aW9uKTtcclxuICAgICAgdGhpcy5wbGF5ZXIudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLnNldChwb3NpdGlvbik7XHJcbiAgICAgIHRoaXMucGxheWVyLmJvZHkucHJldmlvdXNQb3NpdGlvbi5zZXQocG9zaXRpb24pO1xyXG5cclxuICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmKHRoaXMuY29tcGxldGVkKXtcclxuICAgICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgdGhpcy5zY2VuZS5hZGRHYW1lT2JqZWN0KHRoaXMucGxheWVyKTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmUuZ2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICAgICBpZihvYmogaW5zdGFuY2VvZiBSZXNldGFibGVHYW1lT2JqZWN0KXtcclxuICAgICAgICAgICAgb2JqLnJlc2V0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnN5bmMoKTtcclxuICAgfVxyXG5cclxuICAgc3luYygpe1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImdhbWUtb3ZlclwiLCAhdGhpcy5ydW5uaW5nKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIiwgdGhpcy5jb21wbGV0ZWQpO1xyXG4gICAgICB0aGlzLmZpbmFsVGltZUVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KHRoaXMudGltZSk7XHJcblxyXG4gICAgICBpZih0aGlzLmJlc3RUaW1lICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICB0aGlzLmJlc3RUaW1lRWxlbWVudC5pbm5lclRleHQgPSBmb3JtYXQodGhpcy5iZXN0VGltZSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgdXBkYXRlQ2FtZXJhKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBpZighdGhpcy5wbGF5ZXIpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbnN0IHBvc2l0aW9uID0gdGhpcy5wbGF5ZXIudHJhbnNmb3JtLnBvc2l0aW9uO1xyXG5cclxuICAgICAgY29uc3Qgc2NlbmVXaWR0aCA9IHRoaXMuc2NlbmUudGlsZW1hcCEucGl4ZWxXaWR0aDtcclxuICAgICAgY29uc3Qgc2NlbmVIZWlnaHQgPSB0aGlzLnNjZW5lLnRpbGVtYXAhLnBpeGVsSGVpZ2h0O1xyXG5cclxuICAgICAgY29uc3Qgc2NyZWVuV2lkdGggPSA0MCAqIDE2O1xyXG4gICAgICBjb25zdCBzY3JlZW5IZWlnaHQgPSAyMyAqIDE2O1xyXG5cclxuICAgICAgY29uc3QgY2FtID0gdGhpcy5zY2VuZS5jYW1lcmE7XHJcblxyXG4gICAgICBjb25zdCBzY3JlZW5JbmRleFggPSBNYXRoLmZsb29yKHBvc2l0aW9uLnggLyBzY3JlZW5XaWR0aCk7XHJcbiAgICAgIGNvbnN0IHNjcmVlbkluZGV4WSA9IE1hdGguZmxvb3IocG9zaXRpb24ueSAvIHNjcmVlbkhlaWdodCk7XHJcblxyXG4gICAgICBjb25zdCBvZmZzZXRYID0gc2NyZWVuSW5kZXhYICogc2NyZWVuV2lkdGg7XHJcbiAgICAgIGNvbnN0IG9mZnNldFkgPSBzY3JlZW5JbmRleFkgKiBzY3JlZW5IZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgd2FudGVkUG9zaXRpb24gPSBuZXcgVmVjdG9yMihcclxuICAgICAgICAgb2Zmc2V0WCArIHNjcmVlbldpZHRoIC8gMixcclxuICAgICAgICAgb2Zmc2V0WSArIHNjcmVlbkhlaWdodCAvIDIsXHJcbiAgICAgICk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBDbGFtcCB0aGUgd2FudGVkIHBvc2l0aW9uIHRvIHRoZSBzY2VuZS4uLiBOb3QgZ3JlYXQsIGZvciByZWFzb25zIChsaWtlLCBlZGdlIGNhc2VzLCBidXQgd2UgZG9uJ3QgY2FyZSA6KSApXHJcbiAgICAgIGlmKHdhbnRlZFBvc2l0aW9uLnggLSBjYW0ud2lkdGggLyAyIDwgMCkgd2FudGVkUG9zaXRpb24ueCA9IGNhbS53aWR0aCAvIDI7XHJcbiAgICAgIGlmKHdhbnRlZFBvc2l0aW9uLnggKyBjYW0ud2lkdGggLyAyID4gc2NlbmVXaWR0aCkgd2FudGVkUG9zaXRpb24ueCA9IHNjZW5lV2lkdGggLSBjYW0ud2lkdGggLyAyO1xyXG5cclxuICAgICAgaWYod2FudGVkUG9zaXRpb24ueSAtIGNhbS5oZWlnaHQgLyAyIDwgMCkgd2FudGVkUG9zaXRpb24ueSA9IGNhbS5oZWlnaHQgLyAyO1xyXG4gICAgICBpZih3YW50ZWRQb3NpdGlvbi55ICsgY2FtLmhlaWdodCAvIDIgPiBzY2VuZUhlaWdodCkgd2FudGVkUG9zaXRpb24ueSA9IHNjZW5lSGVpZ2h0IC0gY2FtLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICB0aGlzLnNjZW5lLnBhdXNlZCA9IFZlY3RvcjIuZGlzdGFuY2Uod2FudGVkUG9zaXRpb24sIGNhbS5jZW50ZXIpID4gMTtcclxuXHJcbiAgICAgIGNhbS5jZW50ZXIubGVycFRvKHdhbnRlZFBvc2l0aW9uLCBkZWx0YSAqIDEwKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBOaW5lU2lkZVNwcml0ZSB9IGZyb20gXCJncmFwaGljcy9OaW5lU2lkZVNwcml0ZVwiO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcbmltcG9ydCB7IE1vdmluZ0dyb3VuZENvbXBvbmVudCB9IGZyb20gXCJpc2xhbmQvQ29tcG9uZW50cy9Nb3ZpbmdHcm91bmRDb21wb25lbnRcIjtcclxuaW1wb3J0IElzbGFuZFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL0lzbGFuZFJlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBQYXRoIH0gZnJvbSBcIm1hdGgvUGF0aFwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBQYXRoTWFuYWdlciB9IGZyb20gXCIuL1BhdGhNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFJlc2V0YWJsZUdhbWVPYmplY3QgfSBmcm9tIFwiLi9SZXNldGFibGVHYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTW92aW5nUGxhdGZvcm1HYW1lT2JqZWN0IGV4dGVuZHMgUmVzZXRhYmxlR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuICAgZ3JvdW5kOiBNb3ZpbmdHcm91bmRDb21wb25lbnQ7XHJcblxyXG4gICBkaXJlY3Rpb246IG51bWJlciA9IDE7XHJcbiAgIHBhdGhQb3NpdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgIHNwcml0ZSE6IFNwcml0ZTtcclxuICAgcGF0aD86IFBhdGg7XHJcbiAgIHBhdGhOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgbmluITogTmluZVNpZGVTcHJpdGU7XHJcblxyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgIHZlbG9jaXR5OiBudW1iZXI7XHJcbiAgIHN0YXJ0UG9zaXRpb246IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHBhdGhOYW1lOiBzdHJpbmcsIHZlbG9jaXR5OiBudW1iZXIsIG9mZnNldDogbnVtYmVyLCBhYWJiOiBBQUJCKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMud2lkdGggPSBhYWJiLndpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IGFhYmIuaGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy52ZWxvY2l0eSA9IHZlbG9jaXR5O1xyXG4gICAgICB0aGlzLnN0YXJ0UG9zaXRpb24gPSBvZmZzZXQ7XHJcbiAgICAgIHRoaXMucGF0aFBvc2l0aW9uID0gb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy5wYXRoTmFtZSA9IHBhdGhOYW1lO1xyXG5cclxuICAgICAgdGhpcy5ncm91bmQgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgTW92aW5nR3JvdW5kQ29tcG9uZW50KCkpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnNvbGlkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ib2R5LmNvbGxpZGVyID0gQm94Q29sbGlkZXIuZnJvbUFBQkIoYWFiYik7XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcblxyXG4gICAgICBsZXQgdGV4dHVyZSA9IGdhbWUucmVzb3VyY2VzLmxvYWRUZXh0dXJlKElzbGFuZFJlc291cmNlcy5TaGVldE9iamVjdHMpO1xyXG5cclxuICAgICAgbGV0IHNucyA9IG5ldyBOaW5lU2lkZVNwcml0ZSh0ZXh0dXJlKTtcclxuICAgICAgc25zLnNldHVwKDE2LCA5NiwgMTYsIDE2LCA0LCA0LCA0LCA0KTtcclxuXHJcbiAgICAgIHRoaXMubmluID0gc25zO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zcHJpdGUgPSBnYW1lLnJlc291cmNlcy5sb2FkU3ByaXRlU2hlZXQoSXNsYW5kUmVzb3VyY2VzLlNoZWV0T2JqZWN0cykuZ2V0U3ByaXRlKDE2LCA5NiwgMTYsIDE2KTtcclxuICAgICAgXHJcbiAgICAgIGxldCBtYW5hZ2VyID0gdGhpcy5zY2VuZS5maW5kT2JqZWN0KG9iaiA9PiBvYmogaW5zdGFuY2VvZiBQYXRoTWFuYWdlcikgYXMgUGF0aE1hbmFnZXI7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnBhdGggPSBtYW5hZ2VyLmdldFBhdGgodGhpcy5wYXRoTmFtZSk7XHJcblxyXG4gICAgICB0aGlzLmNsYW1wUGF0aCgpO1xyXG4gICB9XHJcblxyXG4gICBjbGFtcFBhdGgoKXtcclxuICAgICAgaWYodGhpcy5wYXRoKXtcclxuICAgICAgICAgbGV0IGwgPSB0aGlzLnBhdGgubGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICBsZXQgZXZlbiA9IE1hdGguZmxvb3IodGhpcy5wYXRoUG9zaXRpb24gLyBsKSAlIDIgPT09IDE7XHJcblxyXG4gICAgICAgICB0aGlzLnBhdGhQb3NpdGlvbiAlPSB0aGlzLnBhdGgubGVuZ3RoKCk7XHJcblxyXG4gICAgICAgICBpZihldmVuKXtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAtMTtcclxuICAgICAgICAgICAgdGhpcy5wYXRoUG9zaXRpb24gPSBsIC0gdGhpcy5wYXRoUG9zaXRpb247XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSAxO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMucGF0aFBvc2l0aW9uICs9IHRoaXMudmVsb2NpdHkgKiBkZWx0YSAqIHRoaXMuZGlyZWN0aW9uO1xyXG5cclxuICAgICAgaWYodGhpcy5wYXRoID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGlmKHRoaXMucGF0aFBvc2l0aW9uID4gdGhpcy5wYXRoLmxlbmd0aCgpICYmIHRoaXMuZGlyZWN0aW9uID4gMCl7XHJcbiAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gLXRoaXMuZGlyZWN0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMucGF0aFBvc2l0aW9uIDwgMCAmJiB0aGlzLmRpcmVjdGlvbiA8IDApe1xyXG4gICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IC10aGlzLmRpcmVjdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IG5ld1BvcyA9IHRoaXMucGF0aC5nZXRQb3NpdGlvbih0aGlzLnBhdGhQb3NpdGlvbiAtIHRoaXMudmVsb2NpdHkgKiBkZWx0YSAqIHRoaXMuZGlyZWN0aW9uKTtcclxuICAgICAgbGV0IG5leHRQb3MgPSB0aGlzLnBhdGguZ2V0UG9zaXRpb24odGhpcy5wYXRoUG9zaXRpb24pO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCA9IG5ld1Bvcy54O1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55ID0gbmV3UG9zLnk7XHJcblxyXG4gICAgICBsZXQgZGlyID0gbmV4dFBvcy5zdWIobmV3UG9zKTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gZGlyLnggLyBkZWx0YTtcclxuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSBkaXIueSAvIGRlbHRhO1xyXG5cclxuICAgICAgdGhpcy5ncm91bmQudmVsb2NpdHkueCA9IHRoaXMuYm9keS52ZWxvY2l0eS54O1xyXG4gICAgICB0aGlzLmdyb3VuZC52ZWxvY2l0eS55ID0gdGhpcy5ib2R5LnZlbG9jaXR5Lnk7XHJcbiAgIH1cclxuXHJcbiAgIHJlc2V0KCl7XHJcbiAgICAgIHN1cGVyLnJlc2V0KCk7XHJcblxyXG4gICAgICB0aGlzLnBhdGhQb3NpdGlvbiA9IHRoaXMuc3RhcnRQb3NpdGlvbjtcclxuICAgICAgdGhpcy5jbGFtcFBhdGgoKTtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICAvLyBncmFwaGljcy5kcmF3U3ByaXRlKHRoaXMuc3ByaXRlLCBcclxuICAgICAgLy8gICAgdGhpcy50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueCwgXHJcbiAgICAgIC8vICAgIHRoaXMudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLnksXHJcbiAgICAgIC8vICAgIHRoaXMud2lkdGggLyB0aGlzLnNwcml0ZS53aWR0aCwgXHJcbiAgICAgIC8vICAgIHRoaXMuaGVpZ2h0IC8gdGhpcy5zcHJpdGUuaGVpZ2h0KTtcclxuICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZU5pbmVTaWRlKHRoaXMubmluLCBcclxuICAgICAgICAgdGhpcy50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueCwgXHJcbiAgICAgICAgIHRoaXMudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLnksXHJcbiAgICAgICAgIHRoaXMud2lkdGgsIFxyXG4gICAgICAgICB0aGlzLmhlaWdodCk7XHJcbn1cclxufSIsImltcG9ydCB7IFBhdGggfSBmcm9tIFwibWF0aC9QYXRoXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGhNYW5hZ2VyIGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgcGF0aHM6IHtba2V5OiBzdHJpbmddOiBQYXRofHVuZGVmaW5lZH07XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICBzdXBlcigpO1xyXG4gICAgICB0aGlzLnBhdGhzID0ge307XHJcbiAgIH1cclxuXHJcbiAgIGdldFBhdGgobmFtZTogc3RyaW5nKXtcclxuICAgICAgcmV0dXJuIHRoaXMucGF0aHNbbmFtZV07XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcImdyYXBoaWNzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGFibGVDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSW50ZXJhY3RhYmxlQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEludGVyYWN0b3JDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSW50ZXJhY3RvckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgSXNsYW5kUmVzb3VyY2VzIGZyb20gXCJpc2xhbmQvSXNsYW5kUmVzb3VyY2VzXCI7XHJcbmltcG9ydCBSZXNvdXJjZXMgZnJvbSBcImlzbGFuZC9Jc2xhbmRSZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvRHJhd2FibGVHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdCBleHRlbmRzIERyYXdhYmxlR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuICAgaW50ZXJhY3RhYmxlOiBJbnRlcmFjdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICBjdXJyZW50QW5pbWF0aW9uITogQW5pbWF0aW9uO1xyXG5cclxuICAgY2xvc2VkQW5pbWF0aW9uITogQW5pbWF0aW9uO1xyXG4gICBvcGVuQW5pbWF0aW9uITogQW5pbWF0aW9uO1xyXG5cclxuICAgY29uc3RydWN0b3IoYWFiYjogQUFCQil7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oKSk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLmFwcGx5KGFhYmIueCwgYWFiYi55KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBSaWdpZGJvZHkoKSk7XHJcbiAgICAgIHRoaXMuaW50ZXJhY3RhYmxlID0gdGhpcy5hZGRDb21wb25lbnQobmV3IEludGVyYWN0YWJsZUNvbXBvbmVudCgpKTtcclxuXHJcbiAgICAgIHRoaXMuaW50ZXJhY3RhYmxlLm9uSW50ZXJhY3QubGlzdGVuKHRoaXMub25JbnRlcmFjdC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgIC8vIEludGVyYWN0YWJsZXMgYW5kIHNoaXRcclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ib2R5LmNvbGxpZGVyID0gQm94Q29sbGlkZXIuZnJvbUFBQkIoYWFiYik7XHJcbiAgIH1cclxuXHJcbiAgIFxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBzdXBlci5pbml0KGdhbWUpO1xyXG4gICAgICBcclxuICAgICAgbGV0IG9iamVjdFNoZWV0ID0gZ2FtZS5yZXNvdXJjZXMubG9hZFNwcml0ZVNoZWV0KElzbGFuZFJlc291cmNlcy5TaGVldE9iamVjdHMpO1xyXG5cclxuICAgICAgdGhpcy5jbG9zZWRBbmltYXRpb24gPSBvYmplY3RTaGVldC5nZXRBbmltYXRpb24oMCwgMTEyLCAxNiwgMTYsIDEpO1xyXG4gICAgICB0aGlzLm9wZW5BbmltYXRpb24gPSBvYmplY3RTaGVldC5nZXRBbmltYXRpb24oMTYsIDExMiwgMTYsIDE2LCA0KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuY2xvc2VkQW5pbWF0aW9uO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbi51cGRhdGUoZGVsdGEpO1xyXG4gICB9XHJcblxyXG4gICBvbkludGVyYWN0KGludGVyYWN0b3I6IEludGVyYWN0b3JDb21wb25lbnQpe1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLm9wZW5BbmltYXRpb247XHJcbiAgIH1cclxuICAgXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZVNpbXBsZSh0aGlzLmN1cnJlbnRBbmltYXRpb24uZnJhbWUsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0YWJsZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgSXNsYW5kUmVzb3VyY2VzIGZyb20gXCJpc2xhbmQvSXNsYW5kUmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL0JveENvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgRHJhd2FibGVHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0RyYXdhYmxlR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0IGV4dGVuZHMgRHJhd2FibGVHYW1lT2JqZWN0e1xyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuICAgYm9keTogUmlnaWRib2R5O1xyXG4gICBpbnRlcmFjdGFibGU6IEludGVyYWN0YWJsZUNvbXBvbmVudDtcclxuXHJcbiAgIHNwcml0ZSE6IFNwcml0ZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBJbnRlcmFjdGFibGVDb21wb25lbnQoKSk7XHJcblxyXG4gICAgICAvLyBJbnRlcmFjdGFibGVzIGFuZCBzaGl0XHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG4gICAgICBcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuXHJcbiAgICAgIHRoaXMuc3ByaXRlID0gZ2FtZS5yZXNvdXJjZXMubG9hZFNwcml0ZVNoZWV0KElzbGFuZFJlc291cmNlcy5TaGVldE9iamVjdHMpLmdldFNwcml0ZSgxMTIsIDAsIDE2LCAxNik7XHJcbiAgIH1cclxuICAgXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZVNpbXBsZSh0aGlzLnNwcml0ZSwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcImdyYXBoaWNzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBIZWFsdGhDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSGVhbHRoQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEludGVyYWN0b3JDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSW50ZXJhY3RvckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBNb3ZpbmdHcm91bmRDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvTW92aW5nR3JvdW5kQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBsYXllcklucHV0Q29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL1BsYXllcklucHV0Q29tcG9uZW50XCI7XHJcbmltcG9ydCBJc2xhbmRSZXNvdXJjZXMgZnJvbSBcImlzbGFuZC9Jc2xhbmRSZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvRHJhd2FibGVHYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyR2FtZU9iamVjdCBleHRlbmRzIERyYXdhYmxlR2FtZU9iamVjdHtcclxuICAgY3VycmVudEFuaW1hdGlvbiE6IEFuaW1hdGlvbjtcclxuXHJcbiAgIGlkbGVBbmltYXRpb24hOiBBbmltYXRpb247XHJcbiAgIHdhbGtBbmltYXRpb24hOiBBbmltYXRpb247XHJcbiAgIGp1bXBBbmltYXRpb24hOiBBbmltYXRpb247XHJcbiAgIGZhbGxBbmltYXRpb24hOiBBbmltYXRpb247XHJcbiAgIGRhc2hBbmltYXRpb24hOiBBbmltYXRpb247XHJcbiAgIHdhbGxBbmltYXRpb24hOiBBbmltYXRpb247XHJcblxyXG4gICBlZmZlY3RKdW1wITogQW5pbWF0aW9uO1xyXG4gICBlZmZlY3RMYW5kITogQW5pbWF0aW9uO1xyXG4gICBlZmZlY3RXYWxsanVtcCE6IEFuaW1hdGlvbjtcclxuICAgZWZmZWN0RG91YmxlSnVtcCE6IEFuaW1hdGlvbjtcclxuICAgXHJcbiAgIGVmZmVjdERhc2ghOiBBbmltYXRpb247XHJcblxyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuICAgYm9keTogUmlnaWRib2R5O1xyXG4gICBpbnB1dDogUGxheWVySW5wdXRDb21wb25lbnQ7XHJcbiAgIGhlYWx0aDogSGVhbHRoQ29tcG9uZW50O1xyXG4gICBpbnRlcmFjdG9yOiBJbnRlcmFjdG9yQ29tcG9uZW50O1xyXG4gICBcclxuICAganVtcEhvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBkYXNoSG9wOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBqdW1waW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGZhY2luZzogbnVtYmVyID0gMTtcclxuXHJcbiAgIGp1bXBTcGVlZDogbnVtYmVyID0gLTMgKiA2MDtcclxuICAgbW92ZVNwZWVkOiBudW1iZXIgPSAxLjUgKiA2MDtcclxuXHJcbiAgIGNheW90ZVRpbWU6IG51bWJlciA9IDAuMDU7XHJcbiAgIGdyb3VuZExlYXZlVGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIGdyb3VuZEFjY2VsZXJhdGlvbjogbnVtYmVyID0gMC4yICogNjAgKiA2MDtcclxuICAgYWlyQWNjZWxlcmF0aW9uOiBudW1iZXIgPSAwLjIgKiA2MCAqIDYwO1xyXG5cclxuICAgZ3Jhdml0eTogbnVtYmVyID0gMC4yNSAqIDYwICogNjA7XHJcbiAgIGdyYXZpdHlVcEZyYWN0aW9uOiBudW1iZXIgPSAwLjU7XHJcbiAgIGdyYXZpdHlXYWxsRnJhY3Rpb246IG51bWJlciA9IDAuNDtcclxuXHJcbiAgIG1heEZhbGxTcGVlZCA9IDUgKiA2MDtcclxuXHJcbiAgIGdyb3VuZGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHdhbGxMZWZ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHdhbGxSaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgZ3JvdW5kTW92ZW1lbnQ6IE1vdmluZ0dyb3VuZENvbXBvbmVudHxudWxsID0gbnVsbDtcclxuXHJcbiAgIGhhZFdhbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGRhc2hpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgZGFzaFNwZWVkOiBudW1iZXIgPSA0LjcgKiA2MDtcclxuICAgZGFzaFRpbWU6IG51bWJlciA9IDI0IC8gKHRoaXMuZGFzaFNwZWVkKTtcclxuXHJcbiAgIGRhc2hUaW1lcjogbnVtYmVyID0gMDtcclxuICAgZGFzaFRpbWVvdXQ6IG51bWJlciA9IDA7XHJcbiAgIGRhc2hTYXZlZFNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICBkYXNoU2F2ZWRNYXhTcGVlZDogbnVtYmVyID0gMiAqIDYwO1xyXG4gICBkYXNoU2F2ZWRBZGRpdGlvbjogbnVtYmVyID0gKHRoaXMuZGFzaFNhdmVkTWF4U3BlZWQgLSB0aGlzLm1vdmVTcGVlZCkgLyAzOyAvLyBJbiB0aHJlZSBkYXNoZXMgdW50aWwgbWF4IHNwZWVkIFxyXG4gICBkYXNoQW5pbWF0aW9uVGltZXI6IG51bWJlciA9IDA7XHJcblxyXG4gICB3YWxsSnVtcFRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICBnZXQgd2FsbEp1bXBpbmcoKSB7IHJldHVybiB0aGlzLndhbGxKdW1wVGltZXIgPiAwOyB9XHJcblxyXG4gICBnZXQgY2FuTW92ZSgpIHsgcmV0dXJuICF0aGlzLndhbGxKdW1waW5nICYmICF0aGlzLmRhc2hpbmc7IH1cclxuICAgZ2V0IHVzZUdyYXZpdHkoKSB7IHJldHVybiAhdGhpcy5kYXNoaW5nOyB9XHJcbiAgIGdldCBoYXNXYWxsKCkgeyByZXR1cm4gdGhpcy53YWxsTGVmdCB8fCB0aGlzLndhbGxSaWdodDsgfVxyXG4gICBcclxuICAgY2FuRGFzaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjYW5Eb3VibGVKdW1wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGdldCBjYW5KdW1wKCkgeyByZXR1cm4gIHRoaXMuZ3JvdW5kZWQgfHwgKHRoaXMuZ3JvdW5kTGVhdmVUaW1lIDwgdGhpcy5jYXlvdGVUaW1lKTsgfVxyXG5cclxuICAgZ2V0IHhWZWxvY2l0eSgpIHtcclxuICAgICAgbGV0IHYgPSB0aGlzLmJvZHkudmVsb2NpdHkueDtcclxuXHJcbiAgICAgIGlmKHRoaXMuZ3JvdW5kTW92ZW1lbnQpe1xyXG4gICAgICAgICB2IC09IHRoaXMuZ3JvdW5kTW92ZW1lbnQudmVsb2NpdHkueDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHY7XHJcbiAgIH1cclxuICAgc2V0IHhWZWxvY2l0eSh2OiBudW1iZXIpe1xyXG4gICAgICBpZih0aGlzLmdyb3VuZE1vdmVtZW50KXtcclxuICAgICAgICAgdiArPSB0aGlzLmdyb3VuZE1vdmVtZW50LnZlbG9jaXR5Lng7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSB2O1xyXG4gICB9XHJcbiAgIGdldCB5VmVsb2NpdHkoKSB7XHJcbiAgICAgIGxldCB2ID0gdGhpcy5ib2R5LnZlbG9jaXR5Lnk7XHJcblxyXG4gICAgICBpZih0aGlzLmdyb3VuZE1vdmVtZW50KXtcclxuICAgICAgICAgdiAtPSB0aGlzLmdyb3VuZE1vdmVtZW50LnZlbG9jaXR5Lnk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB2O1xyXG4gICB9XHJcbiAgIHNldCB5VmVsb2NpdHkodjogbnVtYmVyKXtcclxuICAgICAgaWYodGhpcy5ncm91bmRNb3ZlbWVudCl7XHJcbiAgICAgICAgIHYgKz0gdGhpcy5ncm91bmRNb3ZlbWVudC52ZWxvY2l0eS55O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gdjtcclxuICAgfVxyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBQbGF5ZXJJbnB1dENvbXBvbmVudCgpKTtcclxuICAgICAgdGhpcy5oZWFsdGggPSB0aGlzLmFkZENvbXBvbmVudChuZXcgSGVhbHRoQ29tcG9uZW50KCkpO1xyXG4gICAgICB0aGlzLmludGVyYWN0b3IgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgSW50ZXJhY3RvckNvbXBvbmVudCgpKTtcclxuXHJcbiAgICAgIHRoaXMuaGVhbHRoLm9uRGVhdGgubGlzdGVuKHRoaXMub25EZWF0aC5iaW5kKHRoaXMpKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmJvZHkuY29sbGlkZXIgPSBuZXcgQm94Q29sbGlkZXIoXHJcbiAgICAgICAgIG5ldyBWZWN0b3IyKDEwLCAxMyksXHJcbiAgICAgICAgIG5ldyBWZWN0b3IyKDUsIDUpXHJcbiAgICAgICk7XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcblxyXG4gICAgICBsZXQgc2hlZXQgPSBnYW1lLnJlc291cmNlcy5sb2FkU3ByaXRlU2hlZXQoSXNsYW5kUmVzb3VyY2VzLlNoZWV0UGxheWVyKTtcclxuICAgICAgbGV0IHNoZWV0RWZmZWN0cyA9IGdhbWUucmVzb3VyY2VzLmxvYWRTcHJpdGVTaGVldChJc2xhbmRSZXNvdXJjZXMuU2hlZXRFZmZlY3RzKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuaWRsZUFuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCAwLCAxNiwgMTYsIDEpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLndhbGtBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgMTYsIDE2LCAxNiwgNCkuY2VudGVyKCk7XHJcbiAgICAgIHRoaXMuZmFsbEFuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCAzMiwgMTYsIDE2LCAyKS5jZW50ZXIoKTtcclxuICAgICAgdGhpcy5qdW1wQW5pbWF0aW9uID0gc2hlZXQuZ2V0QW5pbWF0aW9uKDAsIDQ4LCAxNiwgMTYsIDIpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLmRhc2hBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgNjQsIDE2LCAxNiwgMikuY2VudGVyKCk7XHJcbiAgICAgIHRoaXMud2FsbEFuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCA4MCwgMTYsIDE2LCAyKS5jZW50ZXIoKTtcclxuXHJcbiAgICAgIHRoaXMuZWZmZWN0SnVtcCA9IHNoZWV0RWZmZWN0cy5nZXRBbmltYXRpb24oMCwgMCwgMTYsIDE2LCAzKS5zZXRPZmZzZXQoOCwgMTYpO1xyXG4gICAgICB0aGlzLmVmZmVjdFdhbGxqdW1wID0gc2hlZXRFZmZlY3RzLmdldEFuaW1hdGlvbigwLCAxNiwgMTYsIDE2LCAzKS5zZXRPZmZzZXQoMCwgOCk7XHJcbiAgICAgIHRoaXMuZWZmZWN0TGFuZCA9IHNoZWV0RWZmZWN0cy5nZXRBbmltYXRpb24oMCwgMzIsIDE2LCAxNiwgMykuc2V0T2Zmc2V0KDgsIDE2KTtcclxuXHJcbiAgICAgIHRoaXMuZWZmZWN0RGFzaCA9IHNoZWV0RWZmZWN0cy5nZXRBbmltYXRpb24oMTEyLCAwLCAxNiwgMTYsIDEpLnNldE9mZnNldCg4LCA4KTtcclxuICAgICAgdGhpcy5lZmZlY3REYXNoLmZyYW1lUmF0ZSA9IDQ7XHJcblxyXG4gICAgICB0aGlzLmVmZmVjdERvdWJsZUp1bXAgPSBzaGVldEVmZmVjdHMuZ2V0QW5pbWF0aW9uKDAsIDQ4LCAxNiwgMTYsIDQpLnNldE9mZnNldCg4LCA4KTtcclxuXHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuaWRsZUFuaW1hdGlvbjtcclxuICAgfVxyXG5cclxuICAgZGVidWdNb3VzZVVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgY29uc3QgbW91c2UgPSB0aGlzLmdhbWUuaW5wdXQubW91c2U7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54ID0gdGhpcy5zY2VuZS5jYW1lcmEuc2NyZWVuVG9Xb3JsZFgobW91c2UueCk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkgPSB0aGlzLnNjZW5lLmNhbWVyYS5zY3JlZW5Ub1dvcmxkWShtb3VzZS55KTtcclxuXHJcbiAgICAgIC8vIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gdGhpcy5zY2VuZS5jYW1lcmEuc2NyZWVuVG9Xb3JsZFgobW91c2UuZGVsdGFYKSAvIGRlbHRhO1xyXG4gICAgICAvLyB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHRoaXMuc2NlbmUuY2FtZXJhLnNjcmVlblRvV29ybGRZKG1vdXNlLmRlbHRhWSkgLyBkZWx0YTtcclxuICAgICAgXHJcbiAgICAgIC8vIGlmKG1vdXNlLmlzQnV0dG9uUHJlc3NlZChNb3VzZS5CdXR0b25MZWZ0KSl7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0aGlzLmJvZHkuY29sbGlkZWRCb3R0b207XHJcbiAgICAgIHRoaXMud2FsbExlZnQgPSB0aGlzLmJvZHkuY29sbGlkZWRMZWZ0O1xyXG4gICAgICB0aGlzLndhbGxSaWdodCA9IHRoaXMuYm9keS5jb2xsaWRlZFJpZ2h0O1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5pbnB1dC5kaXJlY3Rpb24gPiAwKXtcclxuICAgICAgICAgdGhpcy5mYWNpbmcgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuaW5wdXQuZGlyZWN0aW9uIDwgMCl7XHJcbiAgICAgICAgIHRoaXMuZmFjaW5nID0gLTE7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy53YWxsTGVmdCAmJiAhdGhpcy5ncm91bmRlZCkgdGhpcy5mYWNpbmcgPSAxO1xyXG4gICAgICBpZih0aGlzLndhbGxSaWdodCAmJiAhdGhpcy5ncm91bmRlZCkgdGhpcy5mYWNpbmcgPSAtMTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlQW5pbWF0aW9uKGRlbHRhKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgaWYodGhpcy5pbnB1dC5qdW1wUHJlc3NlZCl7XHJcbiAgICAgICAgIHRoaXMuanVtcEhvcCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5pbnB1dC5kYXNoUHJlc3NlZCl7XHJcbiAgICAgICAgIHRoaXMuZGFzaEhvcCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5pbnB1dC5pbnRlcmFjdFByZXNzZWQpe1xyXG4gICAgICAgICB0aGlzLmludGVyYWN0b3IuaW50ZXJhY3QoKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gVE9ETyBkbyB0aGlzIHJpZ2h0LlxyXG4gICAgICBjb25zdCBzY2VuZVdpZHRoID0gdGhpcy5zY2VuZS50aWxlbWFwIS5waXhlbFdpZHRoO1xyXG4gICAgICBjb25zdCBzY2VuZUhlaWdodCA9IHRoaXMuc2NlbmUudGlsZW1hcCEucGl4ZWxIZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgYm91bmRzID0gQUFCQi5DcmVhdGUoMCwgMCwgc2NlbmVXaWR0aCwgc2NlbmVIZWlnaHQpO1xyXG5cclxuICAgICAgaWYoIXRoaXMuYm9keS5ib3VuZGluZ0JveC5vdmVybGFwcyhib3VuZHMpKXtcclxuICAgICAgICAgdGhpcy5oZWFsdGguZGFtYWdlKDEwMCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHN1cGVyLmZpeGVkVXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgIFxyXG4gICAgICBpZighdGhpcy5ncm91bmRlZCAmJiB0aGlzLmJvZHkuY29sbGlkZWRCb3R0b20gJiYgdGhpcy5ncm91bmRMZWF2ZVRpbWUgPiAwLjgpe1xyXG4gICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkgKyA4LCB0aGlzLmVmZmVjdExhbmQpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmdyb3VuZGVkID0gdGhpcy5ib2R5LmNvbGxpZGVkQm90dG9tO1xyXG4gICAgICB0aGlzLndhbGxMZWZ0ID0gdGhpcy5ib2R5LmNvbGxpZGVkTGVmdDtcclxuICAgICAgdGhpcy53YWxsUmlnaHQgPSB0aGlzLmJvZHkuY29sbGlkZWRSaWdodDtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuZmluZEdyb3VuZCgpO1xyXG5cclxuICAgICAgaWYodGhpcy53YWxsTGVmdCB8fCB0aGlzLndhbGxSaWdodCl7XHJcbiAgICAgICAgIGlmKCF0aGlzLmhhZFdhbGwgJiYgIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPiAwKXtcclxuICAgICAgICAgICAgLy8gdGhpcy55VmVsb2NpdHkgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5oYWRXYWxsID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmhhZFdhbGwgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodGhpcy5ncm91bmRlZCkge1xyXG4gICAgICAgICB0aGlzLmdyb3VuZExlYXZlVGltZSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5ncm91bmRMZWF2ZVRpbWUgKz0gZGVsdGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8vIE1ha2Ugc3VyZSB3ZSBzdGljayB0byB0aGUgd2FsbFxyXG4gICAgICBpZighdGhpcy5ncm91bmRlZCAmJiB0aGlzLndhbGxSaWdodCl7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gNjA7XHJcbiAgICAgIH1cclxuICAgICAgaWYoIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy53YWxsTGVmdCl7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gLTYwO1xyXG4gICAgICB9XHJcbiAgICAgIC8vIFRoaXMgaXMgZm9yIG1vdmluZyBwbGF0Zm9ybXMgOilcclxuICAgICAgaWYodGhpcy5ncm91bmRlZCl7XHJcbiAgICAgICAgIHRoaXMueVZlbG9jaXR5ID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIXRoaXMuaW5wdXQuanVtcERvd24pe1xyXG4gICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gSnVtcGluZ1xyXG4gICAgICB0aGlzLnVwZGF0ZUp1bXAoZGVsdGEpO1xyXG5cclxuICAgICAgLy8gTW92ZW1lbnRcclxuICAgICAgdGhpcy51cGRhdGVNb3ZlKGRlbHRhKTtcclxuXHJcbiAgICAgIC8vIERhc2hpbmdcclxuICAgICAgdGhpcy51cGRhdGVEYXNoKGRlbHRhKTtcclxuICAgICAgXHJcblxyXG4gICAgICAvLyBHcmF2aXR5XHJcbiAgICAgIHRoaXMudXBkYXRlR3Jhdml0eShkZWx0YSk7XHJcblxyXG4gICAgICBpZih0aGlzLmJvZHkudmVsb2NpdHkueSA+IHRoaXMubWF4RmFsbFNwZWVkKXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLm1heEZhbGxTcGVlZDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gQW5pbWF0aW9uXHJcbiAgICAgIHRoaXMudXBkYXRlQW5pbWF0aW9uKGRlbHRhKTtcclxuICAgfVxyXG5cclxuICAgZmluZEdyb3VuZCgpe1xyXG4gICAgICB0aGlzLmdyb3VuZE1vdmVtZW50ID0gbnVsbDtcclxuXHJcbiAgICAgIGxldCBnZXRHcm91bmQgPSAobGlzdDogUmlnaWRib2R5W10pPT57XHJcbiAgICAgICAgIGxpc3QuZm9yRWFjaChncm91bmQgPT4ge1xyXG4gICAgICAgICAgICAvLyBZZXMsIEknbSB2ZXJ5IGF3YXJlIHRoaXMgX2Nhbl8gcG90ZW50aWFsbHkgYmUgbW9yZSB0aGFuIG9uZSBjb21wb25lbnQuIEJ1dCBJIGhvbmVzdGx5IGRvbid0IGNhcmUuIFxyXG4gICAgICAgICAgICAvLyBUaGlzIHNob3VsZCBub3QgaGFwcGVuIG9mdGVuIGFuZCB0aGVuIHdlIGp1c3QgY2hvb3NlIHRoZSBsYXN0IG9uZSBpbiB0aGUgbGlzdCA6KVxyXG4gICBcclxuICAgICAgICAgICAgbGV0IGMgPSBncm91bmQuZ2FtZU9iamVjdC5maW5kQ29tcG9uZW50KGNvbXBvbmVudCA9PiBjb21wb25lbnQgaW5zdGFuY2VvZiBNb3ZpbmdHcm91bmRDb21wb25lbnQpIGFzIE1vdmluZ0dyb3VuZENvbXBvbmVudHx1bmRlZmluZWQ7XHJcbiAgIFxyXG4gICAgICAgICAgICBpZihjICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICB0aGlzLmdyb3VuZE1vdmVtZW50ID0gYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIGlmKHRoaXMuZ3JvdW5kZWQpe1xyXG4gICAgICAgICBnZXRHcm91bmQodGhpcy5zY2VuZS5waHlzaWNzLmJveGNhc3QodGhpcy5ib2R5LmJvdW5kaW5nQm94LmNsb25lKCkuc2hyaW5rKDEpLnRyYW5zbGF0ZSgwLCAyKSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIGlmKHRoaXMud2FsbExlZnQpe1xyXG4gICAgICAgICAgICBnZXRHcm91bmQodGhpcy5zY2VuZS5waHlzaWNzLmJveGNhc3QodGhpcy5ib2R5LmJvdW5kaW5nQm94LmNsb25lKCkuc2hyaW5rKDEpLnRyYW5zbGF0ZSgtMiwgMCkpKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBlbHNlIGlmKHRoaXMud2FsbFJpZ2h0KXtcclxuICAgICAgICAgICAgZ2V0R3JvdW5kKHRoaXMuc2NlbmUucGh5c2ljcy5ib3hjYXN0KHRoaXMuYm9keS5ib3VuZGluZ0JveC5jbG9uZSgpLnNocmluaygxKS50cmFuc2xhdGUoMiwgMCkpKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG5cclxuICAgfVxyXG5cclxuICAgdXBkYXRlTW92ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgLy8gVXBkYXRlIGZhY2luZ1xyXG4gICAgICBpZih0aGlzLmlucHV0LmRpcmVjdGlvbiA+IDApe1xyXG4gICAgICAgICB0aGlzLmZhY2luZyA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5pbnB1dC5kaXJlY3Rpb24gPCAwKXtcclxuICAgICAgICAgdGhpcy5mYWNpbmcgPSAtMTtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLndhbGxMZWZ0ICYmICF0aGlzLmdyb3VuZGVkKSB0aGlzLmZhY2luZyA9IDE7XHJcbiAgICAgIGlmKHRoaXMud2FsbFJpZ2h0ICYmICF0aGlzLmdyb3VuZGVkKSB0aGlzLmZhY2luZyA9IC0xO1xyXG5cclxuICAgICAgaWYoIXRoaXMuY2FuTW92ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgbGV0IGFjYyA9IHRoaXMuZ3JvdW5kZWQgPyB0aGlzLmdyb3VuZEFjY2VsZXJhdGlvbiA6IHRoaXMuYWlyQWNjZWxlcmF0aW9uO1xyXG5cclxuICAgICAgaWYodGhpcy5pbnB1dC5kaXJlY3Rpb24gIT09IDApe1xyXG4gICAgICAgICBsZXQgZGlyID0gTWF0aC5zaWduKHRoaXMuaW5wdXQuZGlyZWN0aW9uKTtcclxuICAgICAgICAgbGV0IG1heFNwZWVkID0gdGhpcy5tb3ZlU3BlZWQgKiBNYXRoLmFicyh0aGlzLmlucHV0LmRpcmVjdGlvbik7XHJcbiAgICAgICAgIGxldCBhY2NlbGVyYXRpb24gPSBhY2MgKiBkZWx0YTtcclxuXHJcbiAgICAgICAgIHRoaXMuYWNjZWxlcmF0ZShcclxuICAgICAgICAgICAgZGlyLCBcclxuICAgICAgICAgICAgbWF4U3BlZWQsXHJcbiAgICAgICAgICAgIGFjY2VsZXJhdGlvbik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5zdG9wKGFjYyAqIGRlbHRhKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICB1cGRhdGVEYXNoKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBpZih0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgdGhpcy5jYW5EYXNoID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodGhpcy5kYXNoaW5nKXtcclxuICAgICAgICAgdGhpcy5kYXNoVGltZXIgLT0gZGVsdGE7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBcclxuICAgICAgICAgaWYodGhpcy5kYXNoVGltZXIgPCAwKXtcclxuICAgICAgICAgICAgdGhpcy5kYXNoaW5nID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IHRoaXMuZGFzaFNhdmVkU3BlZWQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFjY2VsZXJhdGUodGhpcy5mYWNpbmcsIHRoaXMuZGFzaFNhdmVkTWF4U3BlZWQsIHRoaXMuZGFzaFNhdmVkQWRkaXRpb24pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5wYXJ0aWNsZVN5c3RlbS5hZGRQYXJ0aWNsZSh0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55LCB0aGlzLmVmZmVjdERhc2gsIHRoaXMuZmFjaW5nKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuZGFzaFRpbWVvdXQgLT0gZGVsdGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMuZGFzaEhvcCAmJiB0aGlzLmRhc2hUaW1lb3V0IDwgMCAmJiB0aGlzLmNhbkRhc2ggJiYgIXRoaXMuZ3JvdW5kZWQpe1xyXG4gICAgICAgICB0aGlzLmRhc2hpbmcgPSB0cnVlO1xyXG4gICAgICAgICB0aGlzLmNhbkRhc2ggPSBmYWxzZTtcclxuICAgICAgICAgdGhpcy5kYXNoU2F2ZWRTcGVlZCA9IHRoaXMuYm9keS52ZWxvY2l0eS54O1xyXG4gICAgICAgICB0aGlzLmRhc2hUaW1lciA9IHRoaXMuZGFzaFRpbWU7XHJcbiAgICAgICAgIHRoaXMuZGFzaFRpbWVvdXQgPSAwLjI7XHJcblxyXG4gICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gdGhpcy5mYWNpbmcgKiB0aGlzLmRhc2hTcGVlZDtcclxuXHJcbiAgICAgICAgIHRoaXMuZGFzaEFuaW1hdGlvblRpbWVyID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhc2hIb3AgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuZGFzaEFuaW1hdGlvblRpbWVyIC09IGRlbHRhO1xyXG5cclxuICAgICAgaWYodGhpcy5kYXNoaW5nICYmIHRoaXMuZGFzaEFuaW1hdGlvblRpbWVyIDw9IDApe1xyXG4gICAgICAgICB0aGlzLmVmZmVjdERhc2guZnJhbWVSYXRlID0gMSAvICh0aGlzLmRhc2hUaW1lciAvIDMgKyAwLjMpO1xyXG4gICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnksIHRoaXMuZWZmZWN0RGFzaCwgdGhpcy5mYWNpbmcpO1xyXG4gICAgICAgICB0aGlzLmRhc2hBbmltYXRpb25UaW1lciArPSAwLjAzO1xyXG4gICAgICB9XHJcblxyXG4gICB9XHJcblxyXG4gICB1cGRhdGVKdW1wKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLndhbGxKdW1wVGltZXIgLT0gZGVsdGE7XHJcblxyXG4gICAgICBpZih0aGlzLmdyb3VuZGVkKSB0aGlzLmNhbkRvdWJsZUp1bXAgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmKHRoaXMuY2FuSnVtcCl7XHJcbiAgICAgICAgIGlmKHRoaXMuanVtcEhvcCl7XHJcbiAgICAgICAgICAgIHRoaXMueVZlbG9jaXR5ID0gdGhpcy5qdW1wU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5ncm91bmRlZCl7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2F5b3RlIGp1bXAhXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHJlYWxseSBoYWNreSBidXQgd2hhdGV2ZXJcclxuICAgICAgICAgICAgdGhpcy5ncm91bmRMZWF2ZVRpbWUgPSB0aGlzLmNheW90ZVRpbWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkgKyA4LCB0aGlzLmVmZmVjdEp1bXApO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuanVtcEhvcCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5jYW5Eb3VibGVKdW1wKXtcclxuICAgICAgICAgaWYodGhpcy5qdW1wSG9wKXtcclxuICAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmp1bXBTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jYW5Eb3VibGVKdW1wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkgKyA2LCB0aGlzLmVmZmVjdERvdWJsZUp1bXApO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuanVtcEhvcCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIGlmKHRoaXMud2FsbExlZnQgJiYgdGhpcy5qdW1wSG9wKXtcclxuICAgICAgICAgICAgdGhpcy54VmVsb2NpdHkgPSB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmp1bXBTcGVlZDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2FsbEp1bXBUaW1lciA9IDAuMDU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gZGFzaCBhZnRlciB5b3VyIHdhbGxqdW1wIDopXHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnggLSA1LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55LCB0aGlzLmVmZmVjdFdhbGxqdW1wLCAxKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZih0aGlzLndhbGxSaWdodCAmJiB0aGlzLmp1bXBIb3Ape1xyXG4gICAgICAgICAgICB0aGlzLnhWZWxvY2l0eSA9IC10aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLmp1bXBTcGVlZDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2FsbEp1bXBUaW1lciA9IDAuMDU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gZGFzaCBhZnRlciB5b3VyIHdhbGxqdW1wIDopXHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnggKyA1LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55LCB0aGlzLmVmZmVjdFdhbGxqdW1wLCAtMSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gSnVtcCBjYW5jZWxpbmdcclxuICAgICAgaWYodGhpcy55VmVsb2NpdHkgPiAwKXtcclxuICAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5qdW1waW5nICYmICF0aGlzLmlucHV0Lmp1bXBEb3duKXtcclxuICAgICAgICAgdGhpcy55VmVsb2NpdHkgPSB0aGlzLnlWZWxvY2l0eSAqIDAuMjU7XHJcbiAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUFuaW1hdGlvbihkZWx0YTogbnVtYmVyKXtcclxuICAgICAgLy8gQW5pbWF0aW9uIHN0dWZmXHJcbiAgICAgIGlmKHRoaXMueFZlbG9jaXR5ICE9PSAwKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy53YWxrQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuaWRsZUFuaW1hdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy55VmVsb2NpdHkgPCAwKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5qdW1wQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMueVZlbG9jaXR5ID49IDApe1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLmZhbGxBbmltYXRpb247XHJcbiAgICAgIH1cclxuICAgICAgaWYoKHRoaXMud2FsbExlZnQgfHwgdGhpcy53YWxsUmlnaHQpICYmICF0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy53YWxsQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuZGFzaGluZyl7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuZGFzaEFuaW1hdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uLnVwZGF0ZShkZWx0YSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUdyYXZpdHkoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGlmKCF0aGlzLnVzZUdyYXZpdHkpIHJldHVybjtcclxuXHJcbiAgICAgIC8vIFRPRE8gZmlndXJlIG91dCBpZiB3ZSBuZWVkIHRoaXMudmVsb2NpdHlZLCBwcm9iYWJseSByaWdodD9cclxuICAgICAgaWYodGhpcy5ib2R5LnZlbG9jaXR5LnkgPCAwKXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgKz0gdGhpcy5ncmF2aXR5ICogdGhpcy5ncmF2aXR5VXBGcmFjdGlvbiAqIGRlbHRhO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIGlmKHRoaXMuaGFzV2FsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eSAqIHRoaXMuZ3Jhdml0eVdhbGxGcmFjdGlvbiAqIGRlbHRhO1xyXG4gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgKz0gdGhpcy5ncmF2aXR5ICogZGVsdGE7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBhY2NlbGVyYXRlKGRpcjogbnVtYmVyLCBtYXhTcGVlZDogbnVtYmVyLCBhY2NlbGVyYXRpb246IG51bWJlcil7XHJcbiAgICAgIGxldCBhY2MgPSBhY2NlbGVyYXRpb247XHJcbiAgICAgIGxldCB2ZWwgPSB0aGlzLnhWZWxvY2l0eSAqIGRpcjtcclxuXHJcbiAgICAgIGlmKHZlbCA+PSBtYXhTcGVlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYodmVsICsgYWNjID4gbWF4U3BlZWQpe1xyXG4gICAgICAgICBhY2MgPSBtYXhTcGVlZCAtIHZlbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy54VmVsb2NpdHkgKz0gYWNjICogZGlyO1xyXG4gICAgICBcclxuICAgfVxyXG4gICBzdG9wKGFjY2VsZXJhdGlvbjogbnVtYmVyKXtcclxuICAgICAgbGV0IGRpciA9IE1hdGguc2lnbih0aGlzLnhWZWxvY2l0eSk7XHJcbiAgICAgIGxldCB2ZWwgPSBNYXRoLmFicyh0aGlzLnhWZWxvY2l0eSk7XHJcblxyXG4gICAgICBsZXQgcmVtID0gYWNjZWxlcmF0aW9uO1xyXG5cclxuICAgICAgaWYodmVsIC0gcmVtIDwgMCkgcmVtID0gdmVsO1xyXG5cclxuICAgICAgdGhpcy54VmVsb2NpdHkgLT0gcmVtICogZGlyO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIHN1cGVyLmRyYXcoZ3JhcGhpY3MpO1xyXG5cclxuICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZSh0aGlzLmN1cnJlbnRBbmltYXRpb24uZnJhbWUsIFxyXG4gICAgICAgICB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi55LFxyXG4gICAgICAgICB0aGlzLmZhY2luZywgMSwgXHJcbiAgICAgICAgIDApO1xyXG4gICB9XHJcblxyXG4gICBvbkRlYXRoKCl7XHJcbiAgICAgIHRoaXMuc2NlbmUucmVtb3ZlR2FtZU9iamVjdCh0aGlzKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTcGF3bkdhbWVPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvRHJhd2FibGVHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFJlc2V0YWJsZUdhbWVPYmplY3QgZXh0ZW5kcyBEcmF3YWJsZUdhbWVPYmplY3Qge1xyXG4gICBwcml2YXRlIF90cmFuc2Zvcm0/OiBUcmFuc2Zvcm07XHJcbiAgIHByaXZhdGUgX2JvZHk/OiBSaWdpZGJvZHk7XHJcbiAgIHByaXZhdGUgX3N0YXJ0UG9zPzogVmVjdG9yMjtcclxuICAgcHJpdmF0ZSBfc3RhcnRWZWxvY2l0eT86IFZlY3RvcjI7XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBzdXBlci5pbml0KGdhbWUpO1xyXG5cclxuICAgICAgdGhpcy5fdHJhbnNmb3JtID0gdGhpcy5maW5kQ29tcG9uZW50KGNvbXAgPT4gY29tcCBpbnN0YW5jZW9mIFRyYW5zZm9ybSkgYXMgVHJhbnNmb3JtO1xyXG4gICAgICB0aGlzLl9ib2R5ID0gdGhpcy5maW5kQ29tcG9uZW50KGNvbXAgPT4gY29tcCBpbnN0YW5jZW9mIFJpZ2lkYm9keSkgYXMgUmlnaWRib2R5O1xyXG5cclxuICAgICAgaWYodGhpcy5fdHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHRoaXMuX3N0YXJ0UG9zID0gdGhpcy5fdHJhbnNmb3JtLnBvc2l0aW9uLmNsb25lKCk7XHJcbiAgICAgIGlmKHRoaXMuX2JvZHkgIT09IHVuZGVmaW5lZCkgdGhpcy5fc3RhcnRWZWxvY2l0eSA9IHRoaXMuX2JvZHkudmVsb2NpdHkuY2xvbmUoKTtcclxuICAgfVxyXG5cclxuICAgcmVzZXQoKXtcclxuICAgICAgaWYodGhpcy5fdHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHRoaXMuX3RyYW5zZm9ybS5wb3NpdGlvbi5zZXQodGhpcy5fc3RhcnRQb3MhKTtcclxuICAgICAgaWYodGhpcy5fYm9keSAhPT0gdW5kZWZpbmVkKSB0aGlzLl9ib2R5LnZlbG9jaXR5LnNldCh0aGlzLl9zdGFydFZlbG9jaXR5ISk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBIZWFsdGhDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSGVhbHRoQ29tcG9uZW50XCI7XHJcbmltcG9ydCBJc2xhbmRSZXNvdXJjZXMgZnJvbSBcImlzbGFuZC9Jc2xhbmRSZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBEcmF3YWJsZUdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvRHJhd2FibGVHYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3Bpa2VzR2FtZU9iamVjdCBleHRlbmRzIERyYXdhYmxlR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuXHJcbiAgIHNwcml0ZSE6IFNwcml0ZTtcclxuXHJcbiAgIHZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgY29uc3RydWN0b3IoYWFiYjogQUFCQiwgc2hyaW5rOiBib29sZWFuKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIGlmKHNocmluayl7XHJcbiAgICAgICAgIGxldCBza2luID0gYWFiYi5oZWlnaHQgLSAzO1xyXG5cclxuICAgICAgICAgaWYoc2tpbiA+IDApe1xyXG4gICAgICAgICAgICBhYWJiLnRvcCArPSBza2luO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uYXBwbHkoYWFiYi54LCBhYWJiLnkpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuICAgICAgdGhpcy5ib2R5LmtpbmVtYXRpYyA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmJvZHkudXNlRHluYW1pY0NvbGxpc2lvbnMgPSB0cnVlO1xyXG4gICAgICB0aGlzLmJvZHkuY29sbGlkZXIgPSBCb3hDb2xsaWRlci5mcm9tQUFCQihhYWJiKTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5vbkNvbGxpc2lvbi5saXN0ZW4odGhpcy5vbkNvbGxpc2lvbi5iaW5kKHRoaXMpKTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuICAgICAgbGV0IHNoZWV0ID0gZ2FtZS5yZXNvdXJjZXMubG9hZFNwcml0ZVNoZWV0KElzbGFuZFJlc291cmNlcy5TaGVldE9iamVjdHMpO1xyXG4gICAgICB0aGlzLnNwcml0ZSA9IHNoZWV0LmdldFNwcml0ZSgwLCAwLCAxNiwgMTYpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGlmKCF0aGlzLnZpc2libGUpIHJldHVybjtcclxuXHJcbiAgICAgIGxldCBib3VuZHMgPSB0aGlzLmJvZHkuYm91bmRpbmdCb3g7XHJcblxyXG4gICAgICBncmFwaGljcy5kcmF3U3ByaXRlVGlsZWQodGhpcy5zcHJpdGUsIGJvdW5kcy54LCBib3VuZHMueSwgYm91bmRzLndpZHRoLCBib3VuZHMuaGVpZ2h0KTtcclxuICAgfVxyXG5cclxuICAgb25Db2xsaXNpb24ob3RoZXI6IFJpZ2lkYm9keSl7XHJcbiAgICAgIGxldCBjb21wID0gb3RoZXIuZ2FtZU9iamVjdC5maW5kQ29tcG9uZW50KGNvbXBvbmVudCA9PiBjb21wb25lbnQgaW5zdGFuY2VvZiBIZWFsdGhDb21wb25lbnQpIGFzIEhlYWx0aENvbXBvbmVudHx1bmRlZmluZWQ7XHJcblxyXG4gICAgICBpZihjb21wID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgXHJcbiAgICAgIGNvbXAuZGFtYWdlKDEwMCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICBTaGVldE9iamVjdHM6IFwiYXNzZXRzL2ltZy9PYmplY3RzLnBuZ1wiLFxyXG4gICBTaGVldEVmZmVjdHM6IFwiYXNzZXRzL2ltZy9FZmZlY3RzLnBuZ1wiLFxyXG4gICBTaGVldFBsYXllcjogXCJhc3NldHMvaW1nL1BsYXllci5wbmdcIlxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBQUJCe1xyXG5cclxuICAgbGVmdDogbnVtYmVyO1xyXG4gICB0b3A6IG51bWJlcjtcclxuICAgYm90dG9tOiBudW1iZXI7XHJcbiAgIHJpZ2h0OiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihsZWZ0OiBudW1iZXIgPSAwLCB0b3A6IG51bWJlciA9IDAsIHJpZ2h0OiBudW1iZXIgPSAwLCBib3R0b206IG51bWJlciA9IDApIHsgXHJcbiAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICAgIHRoaXMudG9wID0gdG9wO1xyXG4gICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xyXG4gICB9XHJcblxyXG4gICBnZXQgeCgpIHsgcmV0dXJuIHRoaXMubGVmdDsgfVxyXG4gICBnZXQgeSgpIHsgcmV0dXJuIHRoaXMudG9wOyB9XHJcblxyXG4gICBnZXQgY2VudGVyWCgpIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGggLyAyOyB9XHJcbiAgIGdldCBjZW50ZXJZKCkgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyOyB9XHJcblxyXG4gICBnZXQgd2lkdGgoKSB7IHJldHVybiB0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0OyB9XHJcbiAgIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLmJvdHRvbSAtIHRoaXMudG9wOyB9XHJcblxyXG4gICBvdmVybGFwcyhvdGhlcjogQUFCQil7XHJcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXBzWChvdGhlcikgJiYgdGhpcy5vdmVybGFwc1kob3RoZXIpO1xyXG4gICB9XHJcbiAgIG92ZXJsYXBzWChvdGhlcjogQUFCQil7XHJcbiAgICAgIGlmKHRoaXMubGVmdCA+PSBvdGhlci5yaWdodCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZih0aGlzLnJpZ2h0IDw9IG90aGVyLmxlZnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcbiAgIG92ZXJsYXBzWShvdGhlcjogQUFCQil7XHJcbiAgICAgIGlmKHRoaXMudG9wID49IG90aGVyLmJvdHRvbSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZih0aGlzLmJvdHRvbSA8PSBvdGhlci50b3ApIHJldHVybiBmYWxzZTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBtaW5PdmVybGFwWChvdGhlcjogQUFCQil7XHJcbiAgICAgIGxldCBtb3Rpb25MZWZ0ID0gb3RoZXIucmlnaHQgLSB0aGlzLmxlZnQ7XHJcbiAgICAgIGxldCBtb3Rpb25SaWdodCA9IHRoaXMucmlnaHQgLSBvdGhlci5sZWZ0O1xyXG5cclxuICAgICAgaWYobW90aW9uTGVmdCA+IG1vdGlvblJpZ2h0KSByZXR1cm4gLW1vdGlvblJpZ2h0O1xyXG4gICAgICByZXR1cm4gbW90aW9uTGVmdDtcclxuICAgfVxyXG4gICBtaW5PdmVybGFwWShvdGhlcjogQUFCQil7XHJcbiAgICAgIGxldCBtb3Rpb25VcCA9IG90aGVyLmJvdHRvbSAtIHRoaXMudG9wO1xyXG4gICAgICBsZXQgbW90aW9uRG93biA9IHRoaXMuYm90dG9tIC0gb3RoZXIudG9wO1xyXG5cclxuICAgICAgaWYobW90aW9uVXAgPiBtb3Rpb25Eb3duKSByZXR1cm4gLW1vdGlvbkRvd247XHJcbiAgICAgIHJldHVybiBtb3Rpb25VcDtcclxuICAgfVxyXG4gICBcclxuXHJcbiAgIG1pbk92ZXJsYXBYV2l0aEJpYXMob3RoZXI6IEFBQkIsIGJpYXM6IG51bWJlcil7XHJcbiAgICAgIGlmKGJpYXMgPCAwKSByZXR1cm4gb3RoZXIucmlnaHQgLSB0aGlzLmxlZnQ7XHJcbiAgICAgIHJldHVybiAtKHRoaXMucmlnaHQgLSBvdGhlci5sZWZ0KTtcclxuXHJcbiAgIH1cclxuICAgbWluT3ZlcmxhcFlXaXRoQmlhcyhvdGhlcjogQUFCQiwgYmlhczogbnVtYmVyKXtcclxuICAgICAgaWYoYmlhcyA8IDApIHJldHVybiBvdGhlci5ib3R0b20gLSB0aGlzLnRvcDtcclxuICAgICAgcmV0dXJuIC0odGhpcy5ib3R0b20gLSBvdGhlci50b3ApO1xyXG4gICB9XHJcblxyXG4gICBjb3B5KG90aGVyOiBBQUJCKXtcclxuICAgICAgdGhpcy5sZWZ0ID0gb3RoZXIubGVmdDtcclxuICAgICAgdGhpcy5yaWdodCA9IG90aGVyLnJpZ2h0O1xyXG4gICAgICB0aGlzLmJvdHRvbSA9IG90aGVyLmJvdHRvbTtcclxuICAgICAgdGhpcy50b3AgPSBvdGhlci50b3A7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgc2V0KGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyKSB7IFxyXG4gICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICB0aGlzLnRvcCA9IHRvcDtcclxuICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBzaHJpbmsoYW1vdW50OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmxlZnQgKz0gYW1vdW50O1xyXG4gICAgICB0aGlzLnJpZ2h0IC09IGFtb3VudDtcclxuICAgICAgdGhpcy50b3AgKz0gYW1vdW50O1xyXG4gICAgICB0aGlzLmJvdHRvbSAtPSBhbW91bnQ7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgdHJhbnNsYXRlKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5sZWZ0ICs9IHg7XHJcbiAgICAgIHRoaXMucmlnaHQgKz0geDtcclxuICAgICAgdGhpcy50b3AgKz0geTtcclxuICAgICAgdGhpcy5ib3R0b20gKz0geTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBjbG9uZSgpe1xyXG4gICAgICByZXR1cm4gbmV3IEFBQkIodGhpcy5sZWZ0LCB0aGlzLnRvcCwgdGhpcy5yaWdodCwgdGhpcy5ib3R0b20pO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgQ3JlYXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBuZXcgQUFCQih4LCB5LCB4ICsgdywgeSArIGgpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4vVmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBhdGh7XHJcbiAgIHBvaW50czogVmVjdG9yMltdO1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgdGhpcy5wb2ludHMgPSBbXTtcclxuICAgfVxyXG5cclxuICAgYWRkKHBvaW50OiBWZWN0b3IyKXtcclxuICAgICAgdGhpcy5wb2ludHMucHVzaChwb2ludCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldFBvc2l0aW9uKGRpc3RhbmNlOiBudW1iZXIsIHY/OiBWZWN0b3IyKXtcclxuICAgICAgaWYodiA9PT0gdW5kZWZpbmVkKSB2ID0gbmV3IFZlY3RvcjIoKTtcclxuXHJcbiAgICAgIGlmKGRpc3RhbmNlIDwgMCkgcmV0dXJuIHYuc2V0KHRoaXMucG9pbnRzWzBdKTtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGggLSAxOyBpKyspe1xyXG4gICAgICAgICBsZXQgZnJvbSA9IHRoaXMucG9pbnRzW2ldO1xyXG4gICAgICAgICBsZXQgdG8gPSB0aGlzLnBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgICBsZXQgZCA9IFZlY3RvcjIuZGlzdGFuY2UoZnJvbSwgdG8pO1xyXG5cclxuICAgICAgICAgaWYoZGlzdGFuY2UgPCBkKXtcclxuICAgICAgICAgICAgcmV0dXJuIFZlY3RvcjIubGVycE91dChmcm9tLCB0bywgdiwgZGlzdGFuY2UgLyBkKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgZGlzdGFuY2UgLT0gZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHYuc2V0KHRoaXMucG9pbnRzW3RoaXMucG9pbnRzLmxlbmd0aCAtIDFdKTtcclxuICAgfVxyXG5cclxuICAgbGVuZ3RoKCl7XHJcbiAgICAgIGxldCBsID0gMDtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBvaW50cy5sZW5ndGggLSAxOyBpKyspe1xyXG4gICAgICAgICBsZXQgZnJvbSA9IHRoaXMucG9pbnRzW2ldO1xyXG4gICAgICAgICBsZXQgdG8gPSB0aGlzLnBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgICBsICs9IFZlY3RvcjIuZGlzdGFuY2UoZnJvbSwgdG8pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbDtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQ3VydmUgfSBmcm9tIFwidXRpbC9DdXJ2ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFZlY3RvcjJ7XHJcbiAgIHg6IG51bWJlcjtcclxuICAgeTogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IoeCA9IDAsIHkgPSAwKXtcclxuICAgICAgdGhpcy54ID0geDtcclxuICAgICAgdGhpcy55ID0geTtcclxuICAgfVxyXG5cclxuICAgYWRkKG90aGVyOiBWZWN0b3IyKXtcclxuICAgICAgdGhpcy54ICs9IG90aGVyLng7XHJcbiAgICAgIHRoaXMueSArPSBvdGhlci55O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgc3ViKG90aGVyOiBWZWN0b3IyKXtcclxuICAgICAgdGhpcy54IC09IG90aGVyLng7XHJcbiAgICAgIHRoaXMueSAtPSBvdGhlci55O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgbXVsKG90aGVyOiBWZWN0b3IyKXtcclxuICAgICAgdGhpcy54ICo9IG90aGVyLng7XHJcbiAgICAgIHRoaXMueSAqPSBvdGhlci55O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgZGl2KG90aGVyOiBWZWN0b3IyKXtcclxuICAgICAgdGhpcy54IC89IG90aGVyLng7XHJcbiAgICAgIHRoaXMueSAvPSBvdGhlci55O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgc2V0KG90aGVyOiBWZWN0b3IyKXtcclxuICAgICAgdGhpcy54ID0gb3RoZXIueDtcclxuICAgICAgdGhpcy55ID0gb3RoZXIueTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIHNldFplcm8oKXtcclxuICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgdGhpcy55ID0gMDtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIGFwcGx5KHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgdGhpcy54ID0geDtcclxuICAgICAgdGhpcy55ID0geTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIG5lZ2F0ZSgpe1xyXG4gICAgICB0aGlzLnggPSAtdGhpcy54O1xyXG4gICAgICB0aGlzLnkgPSAtdGhpcy55O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIG5vcm1hbGl6ZSgpe1xyXG4gICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcblxyXG4gICAgICBpZihsZW5ndGggPiAwKXtcclxuICAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcclxuICAgICAgICAgdGhpcy55IC89IGxlbmd0aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBub3JtYWxpemVkKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsb25lKCkubm9ybWFsaXplKCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBzcXJMZW5ndGgoKXtcclxuICAgICAgcmV0dXJuIFZlY3RvcjIuZG90KHRoaXMsIHRoaXMpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbGVuZ3RoKCl7XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5zcXJMZW5ndGgpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgYW5nbGUoKXtcclxuICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xyXG4gICB9XHJcblxyXG4gICBkaXN0YW5jZVRvKG90aGVyOiBWZWN0b3IyKXtcclxuICAgICAgcmV0dXJuIFZlY3RvcjIuZGlzdGFuY2UodGhpcywgb3RoZXIpO1xyXG4gICB9XHJcbiAgIGRpcmVjdGlvblRvKG90aGVyOiBWZWN0b3IyKXtcclxuICAgICAgcmV0dXJuIFZlY3RvcjIuZGlyZWN0aW9uKHRoaXMsIG90aGVyKTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGRpcmVjdGlvbihhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKXtcclxuICAgICAgcmV0dXJuIGIuY2xvbmUoKS5zdWIoYSk7XHJcbiAgIH1cclxuICAgXHJcbiAgIHN0YXRpYyBkaXN0YW5jZShhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKXtcclxuICAgICAgbGV0IGRpc3RYID0gYS54IC0gYi54O1xyXG4gICAgICBsZXQgZGlzdFkgPSBhLnkgLSBiLnk7XHJcblxyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KGRpc3RYICogZGlzdFggKyBkaXN0WSAqIGRpc3RZKTtcclxuICAgfVxyXG5cclxuICAgbGVycFRvKG90aGVyOiBWZWN0b3IyLCBmOiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gVmVjdG9yMi5sZXJwT3V0KHRoaXMsIG90aGVyLCB0aGlzLCBmKTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGxlcnAoYTogVmVjdG9yMiwgYjogVmVjdG9yMiwgZjogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIHRoaXMubGVycE91dChhLCBiLCBuZXcgVmVjdG9yMigpLCBmKTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGxlcnBPdXQoYTogVmVjdG9yMiwgYjogVmVjdG9yMiwgb3V0OiBWZWN0b3IyLCBmOiBudW1iZXIpe1xyXG4gICAgICBvdXQueCA9IEN1cnZlLmxlcnAoYS54LCBiLngsIGYpO1xyXG4gICAgICBvdXQueSA9IEN1cnZlLmxlcnAoYS55LCBiLnksIGYpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIG91dDtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGRvdChhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKXtcclxuICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGFuZ2xlZChhbmdsZTogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKE1hdGguY29zKGFuZ2xlKSwgTWF0aC5zaW4oYW5nbGUpKTtcclxuICAgfVxyXG5cclxuICAgY2xvbmUoKXtcclxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCwgdGhpcy55KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tIFwiLi9Db2xsaWRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEJveENvbGxpZGVyIGV4dGVuZHMgQ29sbGlkZXJ7XHJcbiAgIG9mZnNldDogVmVjdG9yMjtcclxuICAgc2l6ZTogVmVjdG9yMjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHNpemU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpLCBvZmZzZXQ6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgdGhpcy5vZmZzZXQgPSBvZmZzZXQ7XHJcbiAgIH1cclxuXHJcbiAgIGdldEJvdW5kcyhwb3NpdGlvbjogVmVjdG9yMiwgb3V0OiBBQUJCKVxyXG4gICB7ICBcclxuICAgICAgcmV0dXJuIG91dC5zZXQoXHJcbiAgICAgICAgIHBvc2l0aW9uLnggLSB0aGlzLm9mZnNldC54LCBcclxuICAgICAgICAgcG9zaXRpb24ueSAtIHRoaXMub2Zmc2V0LnksXHJcbiAgICAgICAgIHBvc2l0aW9uLnggKyB0aGlzLnNpemUueCAtIHRoaXMub2Zmc2V0LngsXHJcbiAgICAgICAgIHBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSAtIHRoaXMub2Zmc2V0LnkpO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgZnJvbUFBQkIoYWFiYjogQUFCQil7XHJcbiAgICAgIHJldHVybiBuZXcgQm94Q29sbGlkZXIobmV3IFZlY3RvcjIoYWFiYi53aWR0aCwgYWFiYi5oZWlnaHQpKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBDb2xsaWRlcntcclxuICAgYWJzdHJhY3QgZ2V0Qm91bmRzKHBvc2l0aW9uOiBWZWN0b3IyLCBvdXQ6IEFBQkIpOiBBQUJCO1xyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwiLi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gXCIuL0NvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFRpbGVDb2xsaWRlciB9IGZyb20gXCIuL1RpbGVDb2xsaWRlclwiO1xyXG5cclxuLy8gVE9ETyBwcmV2ZW50IG1lbW9yeSBhbGxvY2F0aW9uIGhlcmUuXHJcbi8vIFNob3VsZCBtYXliZSBiZSBhIGNvbGxpc2lvbiBjbGFzcywgdGhhdCBoYXMgXHJcbi8vIGFsbCB0aGlzIG1lbW9yeSBwcmVhbGxvY2F0ZWQuXHJcblxyXG4vLyBJdCBiZSBmaW5lIGZvciBub3cgdGhvXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5zdHVjayhzZWxmOiBDb2xsaWRlciwgb3RoZXI6IENvbGxpZGVyLCByZWxhdGl2ZVBvc2l0aW9uOiBWZWN0b3IyLCByZWxhdGl2ZVZlbG9jaXR5OiBWZWN0b3IyKTogVmVjdG9yMnx1bmRlZmluZWR7XHJcbiAgIGlmKHNlbGYgaW5zdGFuY2VvZiBCb3hDb2xsaWRlcil7XHJcbiAgICAgIGlmKG90aGVyIGluc3RhbmNlb2YgQm94Q29sbGlkZXIpe1xyXG4gICAgICAgICByZXR1cm4gdW5zdHVja0JveEJveChzZWxmLCBvdGhlciwgcmVsYXRpdmVQb3NpdGlvbiwgcmVsYXRpdmVWZWxvY2l0eSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZihvdGhlciBpbnN0YW5jZW9mIFRpbGVDb2xsaWRlcil7XHJcbiAgICAgICAgIHJldHVybiB1bnN0dWNrQm94VGlsZShzZWxmLCBvdGhlciwgcmVsYXRpdmVQb3NpdGlvbiwgcmVsYXRpdmVWZWxvY2l0eSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBjb2xsaXNpb24gZm91bmQgZm9yICR7c2VsZi5jb25zdHJ1Y3Rvci5uYW1lfSBhbmQgJHtvdGhlci5jb25zdHJ1Y3Rvci5uYW1lfWApO1xyXG4gICAgICB9XHJcbiAgIH1cclxuICAgZWxzZSBpZihzZWxmIGluc3RhbmNlb2YgVGlsZUNvbGxpZGVyKXtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBjb2xsaXNpb24gZm91bmQgZm9yICR7c2VsZi5jb25zdHJ1Y3Rvci5uYW1lfSBhbmQgJHtvdGhlci5jb25zdHJ1Y3Rvci5uYW1lfWApO1xyXG4gICAgICAvLyBpZihvdGhlciBpbnN0YW5jZW9mIEJveENvbGxpZGVyKXtcclxuICAgICAgLy8gICAgcmV0dXJuIHVuc3R1Y2tCb3hUaWxlKG90aGVyUG9zaXRpb24sIG90aGVyLCBwb3NpdGlvbiwgc2VsZiwgdW5zdHVja1ZlY3Rvcik/Lm5lZ2F0ZSgpO1xyXG4gICAgICAvLyB9XHJcbiAgICAgIC8vIGVsc2V7XHJcbiAgICAgIC8vIH1cclxuICAgfVxyXG4gICBlbHNle1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNvbGxpc2lvbiBmb3VuZCBmb3IgJHtzZWxmLmNvbnN0cnVjdG9yLm5hbWV9IGFuZCAke290aGVyLmNvbnN0cnVjdG9yLm5hbWV9YCk7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuc3R1Y2tCb3hUaWxlKHNlbGY6IEJveENvbGxpZGVyLCBvdGhlcjogVGlsZUNvbGxpZGVyLCByZWxhdGl2ZVBvc2l0aW9uOiBWZWN0b3IyLCByZWxhdGl2ZVZlbG9jaXR5OiBWZWN0b3IyKTogVmVjdG9yMnx1bmRlZmluZWR7XHJcbiAgIGxldCBzZWxmQm91bmRzID0gc2VsZi5nZXRCb3VuZHMobmV3IFZlY3RvcjIoKSwgbmV3IEFBQkIoKSk7XHJcbiAgIGxldCBvdGhlckJvdW5kcyA9IG90aGVyLmdldEJvdW5kcyhyZWxhdGl2ZVBvc2l0aW9uLCBuZXcgQUFCQigpKTtcclxuXHJcbiAgIGxldCB4T3ZlcmxhcCA9IDA7XHJcbiAgIGxldCB5T3ZlcmxhcCA9IDA7XHJcblxyXG4gICBsZXQgeENvbGxpZGVkID0gZmFsc2U7XHJcbiAgIGxldCB5Q29sbGlkZWQgPSBmYWxzZTtcclxuXHJcbiAgIGlmKG90aGVyLmxlZnQgJiYgcmVsYXRpdmVWZWxvY2l0eS54ID4gMCl7XHJcbiAgICAgIHhPdmVybGFwID0gLShzZWxmQm91bmRzLnJpZ2h0IC0gb3RoZXJCb3VuZHMubGVmdCk7XHJcbiAgICAgIHhDb2xsaWRlZCA9IHRydWU7XHJcbiAgIH1lbHNlIGlmKG90aGVyLnJpZ2h0ICYmIHJlbGF0aXZlVmVsb2NpdHkueCA8IDApe1xyXG4gICAgICB4T3ZlcmxhcCA9IC0oc2VsZkJvdW5kcy5sZWZ0IC0gb3RoZXJCb3VuZHMucmlnaHQpO1xyXG4gICAgICB4Q29sbGlkZWQgPSB0cnVlO1xyXG4gICB9XHJcbiAgIFxyXG4gICBpZihvdGhlci50b3AgJiYgcmVsYXRpdmVWZWxvY2l0eS55ID4gMCl7XHJcbiAgICAgIHlPdmVybGFwID0gLShzZWxmQm91bmRzLmJvdHRvbSAtIG90aGVyQm91bmRzLnRvcCk7XHJcbiAgICAgIHlDb2xsaWRlZCA9IHRydWU7XHJcbiAgIH1lbHNlIGlmKG90aGVyLmJvdHRvbSAmJiByZWxhdGl2ZVZlbG9jaXR5LnkgPCAwKXtcclxuICAgICAgeU92ZXJsYXAgPSAtKHNlbGZCb3VuZHMudG9wIC0gb3RoZXJCb3VuZHMuYm90dG9tKTtcclxuICAgICAgeUNvbGxpZGVkID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgLy8gSWYgaXQgX2Nhbl8gZG8gYm90aCBheGlzLCBkbyBvbmx5IF9vbmVfXHJcbiAgIGlmKHhDb2xsaWRlZCAmJiB5Q29sbGlkZWQpe1xyXG4gICAgICBpZihNYXRoLmFicyh4T3ZlcmxhcCkgPiBNYXRoLmFicyh5T3ZlcmxhcCkpe1xyXG4gICAgICAgICB4T3ZlcmxhcCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgeU92ZXJsYXAgPSAwO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiBuZXcgVmVjdG9yMih4T3ZlcmxhcCwgeU92ZXJsYXApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5zdHVja0JveEJveChzZWxmOiBCb3hDb2xsaWRlciwgb3RoZXI6IEJveENvbGxpZGVyLCByZWxhdGl2ZVBvc2l0aW9uOiBWZWN0b3IyLCByZWxhdGl2ZVZlbG9jaXR5OiBWZWN0b3IyKTogVmVjdG9yMnx1bmRlZmluZWR7XHJcbiAgIGxldCBzZWxmQm91bmRzID0gc2VsZi5nZXRCb3VuZHMobmV3IFZlY3RvcjIoKSwgbmV3IEFBQkIoKSk7XHJcbiAgIGxldCBvdGhlckJvdW5kcyA9IG90aGVyLmdldEJvdW5kcyhyZWxhdGl2ZVBvc2l0aW9uLCBuZXcgQUFCQigpKTtcclxuXHJcbiAgIGxldCB4T3ZlcmxhcCA9IHNlbGZCb3VuZHMubWluT3ZlcmxhcFhXaXRoQmlhcyhvdGhlckJvdW5kcywgcmVsYXRpdmVWZWxvY2l0eS54KTtcclxuICAgbGV0IHlPdmVybGFwID0gc2VsZkJvdW5kcy5taW5PdmVybGFwWVdpdGhCaWFzKG90aGVyQm91bmRzLCByZWxhdGl2ZVZlbG9jaXR5LnkpO1xyXG5cclxuICAgaWYoTWF0aC5hYnMoeE92ZXJsYXApIDwgTWF0aC5hYnMoeU92ZXJsYXApKXtcclxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHhPdmVybGFwLCAwKTtcclxuICAgfVxyXG4gICBlbHNle1xyXG4gICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgeU92ZXJsYXApO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gXCIuL0NvbGxpZGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZUNvbGxpZGVyIGV4dGVuZHMgQ29sbGlkZXJ7XHJcbiAgIHNpemU6IFZlY3RvcjI7XHJcblxyXG4gICB0b3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgbGVmdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBib3R0b206IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgcmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHNpemU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgfVxyXG5cclxuICAgZ2V0Qm91bmRzKHBvc2l0aW9uOiBWZWN0b3IyLCBvdXQ6IEFBQkIpXHJcbiAgIHsgIFxyXG4gICAgICByZXR1cm4gb3V0LnNldChcclxuICAgICAgICAgcG9zaXRpb24ueCwgXHJcbiAgICAgICAgIHBvc2l0aW9uLnksXHJcbiAgICAgICAgIHBvc2l0aW9uLnggKyB0aGlzLnNpemUueCxcclxuICAgICAgICAgcG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHtcclxuICAgZ2FtZSE6IEdhbWU7XHJcbiAgIGdhbWVPYmplY3QhOiBHYW1lT2JqZWN0O1xyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICBcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICB9XHJcbiAgIGZpeGVkVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBzY2VuZSgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5nYW1lT2JqZWN0LnNjZW5lO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFJlbmRlcmFibGUgfSBmcm9tIFwiZ3JhcGhpY3MvUmVuZGVyYWJsZVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIERyYXdhYmxlR2FtZU9iamVjdCBleHRlbmRzIEdhbWVPYmplY3QgaW1wbGVtZW50cyBSZW5kZXJhYmxle1xyXG4gICBkZXB0aDogbnVtYmVyID0gMDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgIH1cclxuICAgXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcblxyXG4gICAgICB0aGlzLnNjZW5lLnJlbmRlcmVyLmFkZCh0aGlzKTtcclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICBzdXBlci5kZXN0cm95KCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNjZW5lLnJlbmRlcmVyLnJlbW92ZSh0aGlzKTtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBSZW5kZXJhYmxlIH0gZnJvbSBcImdyYXBoaWNzL1JlbmRlcmFibGVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vU2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuICAgY29tcG9uZW50czogQ29tcG9uZW50W107XHJcbiAgIHNjZW5lITogU2NlbmU7XHJcblxyXG4gICBnYW1lITogR2FtZTtcclxuICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgXHJcbiAgIGFsd2F5c1VwZGF0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgdGhpcy5jb21wb25lbnRzID0gW107XHJcbiAgIH1cclxuICAgXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIGlmKHRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChvYmogPT4gb2JqLmluaXQoZ2FtZSkpO1xyXG4gICB9XHJcblxyXG4gICBkZXN0cm95KCl7XHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmouZGVzdHJveSgpKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChvYmogPT4gb2JqLnVwZGF0ZShkZWx0YSkpO1xyXG4gICB9XHJcbiAgIGZpeGVkVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChvYmogPT4gb2JqLmZpeGVkVXBkYXRlKGRlbHRhKSk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2gob2JqID0+IG9iai5kcmF3KGdyYXBoaWNzKSk7XHJcbiAgIH1cclxuXHJcbiAgIGFkZENvbXBvbmVudDxUIGV4dGVuZHMgQ29tcG9uZW50Pihjb21wb25lbnQ6IFQpe1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHMucHVzaChjb21wb25lbnQpO1xyXG4gICAgICBjb21wb25lbnQuZ2FtZU9iamVjdCA9IHRoaXM7XHJcbiAgICAgIFxyXG4gICAgICBpZighdGhpcy5pbml0aWFsaXplZCkgcmV0dXJuIGNvbXBvbmVudDtcclxuXHJcbiAgICAgIGNvbXBvbmVudC5pbml0KHRoaXMuZ2FtZSk7XHJcblxyXG4gICAgICByZXR1cm4gY29tcG9uZW50O1xyXG4gICB9XHJcblxyXG4gICByZW1vdmVDb21wb25lbnQoY29tcG9uZW50OiBDb21wb25lbnQpe1xyXG4gICAgICBsZXQgaWR4ID0gdGhpcy5jb21wb25lbnRzLmluZGV4T2YoY29tcG9uZW50KTtcclxuXHJcbiAgICAgIGlmKGlkeCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5zcGxpY2UoaWR4LCAxKTtcclxuICAgICAgXHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcblxyXG4gICAgICBjb21wb25lbnQuZGVzdHJveSgpO1xyXG4gICB9XHJcblxyXG4gICBmaW5kQ29tcG9uZW50KHByZWRpY2F0ZTogKGNvbXBvbmVudDogQ29tcG9uZW50KSA9PiBib29sZWFuKXtcclxuICAgICAgcmV0dXJuIHRoaXMuY29tcG9uZW50cy5maW5kKHByZWRpY2F0ZSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgUGh5c2ljcyB9IGZyb20gXCJlbmdpbmUvUGh5c2ljc1wiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiZ3JhcGhpY3MvQ2FtZXJhXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFBhcnRpY2xlU3lzdGVtIH0gZnJvbSBcImdyYXBoaWNzL1BhcnRpY2xlU3lzdGVtXCI7XHJcbmltcG9ydCB7IFJlbmRlcmVyIH0gZnJvbSBcImdyYXBoaWNzL1JlbmRlcmVyXCI7XHJcbmltcG9ydCB7IFN1cmZhY2UgfSBmcm9tIFwiZ3JhcGhpY3MvU3VyZmFjZVwiO1xyXG5pbXBvcnQgeyBHTFNoYWRlckF0dHJpYnV0ZVNldCB9IGZyb20gXCJncmFwaGljcy93ZWJnbC9HTFNoYWRlclwiO1xyXG5pbXBvcnQgeyBUaWxlTWFwLCBUaWxlbWFwQ29sbGlzaW9uTGF5ZXIgfSBmcm9tIFwidGlsZW1hcC9UaWxlTWFwXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmV7XHJcbiAgIGNhbWVyYTogQ2FtZXJhO1xyXG4gICB1aUNhbWVyYTogQ2FtZXJhO1xyXG5cclxuICAgZ2FtZU9iamVjdHM6IEdhbWVPYmplY3RbXTtcclxuICAgZ2FtZSE6IEdhbWU7XHJcbiAgIHRpbGVtYXA/OiBUaWxlTWFwO1xyXG5cclxuICAgcmVuZGVyZXI6IFJlbmRlcmVyO1xyXG4gICBwaHlzaWNzOiBQaHlzaWNzO1xyXG4gICBwYXJ0aWNsZVN5c3RlbTogUGFydGljbGVTeXN0ZW07XHJcblxyXG4gICBzdXJmYWNlITogU3VyZmFjZTtcclxuXHJcbiAgIC8vIFRoaXMgZ2V0cyB1c2VkIGZvciB0cmFuc2l0aW9ucyA6KVxyXG4gICBwYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEoKTtcclxuICAgICAgdGhpcy51aUNhbWVyYSA9IG5ldyBDYW1lcmEoKTtcclxuXHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBbXTtcclxuICAgICAgdGhpcy5waHlzaWNzID0gbmV3IFBoeXNpY3MoKTtcclxuXHJcbiAgICAgIHRoaXMucmVuZGVyZXIgPSBuZXcgUmVuZGVyZXIoKTtcclxuXHJcbiAgICAgIHRoaXMucGFydGljbGVTeXN0ZW0gPSBuZXcgUGFydGljbGVTeXN0ZW0oKTtcclxuICAgICAgdGhpcy5wYXJ0aWNsZVN5c3RlbS5zY2VuZSA9IHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIGlmKHRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG5cclxuICAgICAgdGhpcy50aWxlbWFwPy5pbml0KGdhbWUpO1xyXG4gICAgICB0aGlzLnBhcnRpY2xlU3lzdGVtLmluaXQoZ2FtZSk7XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4gb2JqLmluaXQoZ2FtZSkpO1xyXG5cclxuICAgICAgdGhpcy5zdXJmYWNlID0gZ2FtZS5yZXNvdXJjZXMuY3JlYXRlU3VyZmFjZSg2NDAsIDM2MCk7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouZGVzdHJveSgpKTtcclxuICAgICAgdGhpcy5wYXJ0aWNsZVN5c3RlbS5kZXN0cm95KCk7XHJcbiAgICAgIHRoaXMudGlsZW1hcD8uZGVzdHJveSgpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGlmKCF0aGlzLnBhdXNlZCkgdGhpcy50aWxlbWFwPy51cGRhdGUoZGVsdGEpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiB7IGlmKCF0aGlzLnBhdXNlZCB8fCBvYmouYWx3YXlzVXBkYXRlKSBvYmoudXBkYXRlKGRlbHRhKTsgfSk7XHJcblxyXG4gICAgICBpZighdGhpcy5wYXVzZWQpIHRoaXMucGFydGljbGVTeXN0ZW0udXBkYXRlKGRlbHRhKTtcclxuICAgICAgXHJcbiAgICAgIGlmKCF0aGlzLnBhdXNlZCkgdGhpcy5waHlzaWNzLnVwZGF0ZShkZWx0YSk7XHJcbiAgIH1cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4geyBpZighdGhpcy5wYXVzZWQgfHwgb2JqLmFsd2F5c1VwZGF0ZSkgb2JqLmZpeGVkVXBkYXRlKGRlbHRhKTsgfSk7XHJcbiAgICAgIGlmKCF0aGlzLnBhdXNlZCkgdGhpcy5waHlzaWNzLmZpeGVkVXBkYXRlKGRlbHRhKTtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICAvLyBncmFwaGljcy5zZXRTdXJmYWNlKHRoaXMuc3VyZmFjZSk7XHJcbiAgICAgIGdyYXBoaWNzLnNldENhbWVyYSh0aGlzLmNhbWVyYSk7XHJcblxyXG4gICAgICAvLyB0aGlzLnRpbGVtYXA/LmRyYXcoZ3JhcGhpY3MsIHRoaXMuY2FtZXJhLmdldEJvdW5kcygpKTtcclxuICAgICAgLy8gdGhpcy5wYXJ0aWNsZVN5c3RlbS5kcmF3KGdyYXBoaWNzKTtcclxuICAgICAgLy8gdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouZHJhdyhncmFwaGljcykpO1xyXG5cclxuICAgICAgdGhpcy5yZW5kZXJlci5kcmF3KGdyYXBoaWNzKTtcclxuXHJcbiAgICAgIC8vIERlYnVnIGRyYXdpbmdcclxuICAgICAgdGhpcy5waHlzaWNzLmRyYXdEZWJ1ZyhncmFwaGljcyk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBncmFwaGljcy5yZXNldFN1cmZhY2UoKTtcclxuICAgICAgLy8gZ3JhcGhpY3Muc2V0Q2FtZXJhKHRoaXMudWlDYW1lcmEpO1xyXG5cclxuICAgICAgLy8gLy8gU2NhbGVkIHRvIGZpdFxyXG4gICAgICAvLyBncmFwaGljcy5kcmF3U3VyZmFjZSh0aGlzLnN1cmZhY2UsIDAsIDAsIHRoaXMudWlDYW1lcmEud2lkdGggLyB0aGlzLnN1cmZhY2Uud2lkdGgsICB0aGlzLnVpQ2FtZXJhLmhlaWdodCAvIHRoaXMuc3VyZmFjZS5oZWlnaHQpO1xyXG4gICB9XHJcblxyXG4gICBzZXRUaWxlbWFwKG1hcDogVGlsZU1hcCl7XHJcbiAgICAgIGlmKHRoaXMuaW5pdGlhbGl6ZWQgJiYgdGhpcy50aWxlbWFwICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgdGhpcy50aWxlbWFwLmRlc3Ryb3koKTtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLnRpbGVtYXAgPSBtYXA7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnRpbGVtYXAuc2NlbmUgPSB0aGlzO1xyXG4gICAgICB0aGlzLnBoeXNpY3MubGF5ZXJzID0gbWFwLmNvbGxpZGVycztcclxuICAgICAgXHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnRpbGVtYXAuaW5pdCh0aGlzLmdhbWUpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGVTaXplKCl7XHJcbiAgICAgIHRoaXMuc3VyZmFjZS5yZXNpemUodGhpcy5nYW1lLmNhbnZhcy53aWR0aCwgdGhpcy5nYW1lLmNhbnZhcy5oZWlnaHQpO1xyXG4gICB9XHJcblxyXG4gICBhZGRHYW1lT2JqZWN0KG9iajogR2FtZU9iamVjdCl7XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMucHVzaChvYmopO1xyXG4gICAgICBvYmouc2NlbmUgPSB0aGlzO1xyXG5cclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuXHJcbiAgICAgIG9iai5pbml0KHRoaXMuZ2FtZSk7XHJcbiAgIH1cclxuICAgXHJcbiAgIHJlbW92ZUdhbWVPYmplY3Qob2JqOiBHYW1lT2JqZWN0KXtcclxuICAgICAgbGV0IGlkeCA9IHRoaXMuZ2FtZU9iamVjdHMuaW5kZXhPZihvYmopO1xyXG5cclxuICAgICAgaWYoaWR4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5zcGxpY2UoaWR4LCAxKTtcclxuXHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcblxyXG4gICAgICBvYmouZGVzdHJveSgpO1xyXG4gICB9XHJcblxyXG4gICBmaW5kT2JqZWN0KHByZWRpY2F0ZTogKGNvbXBvbmVudDogR2FtZU9iamVjdCkgPT4gYm9vbGVhbil7XHJcbiAgICAgIHJldHVybiB0aGlzLmdhbWVPYmplY3RzLmZpbmQocHJlZGljYXRlKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Db2xsaWRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gXCJzaWduYWxzL1NpZ25hbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwiLi9UcmFuc2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSaWdpZGJvZHkgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgIHRyYW5zZm9ybSE6IFRyYW5zZm9ybTtcclxuICAgdmVsb2NpdHk6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICBtYXNzOiBudW1iZXIgPSAxO1xyXG4gICBib3VuY3luZXNzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgcHJldmlvdXNQb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgIHVuc3R1Y2tEaXN0YW5jZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICBjb2xsaWRlZExlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY29sbGlkZWRSaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjb2xsaWRlZFRvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjb2xsaWRlZEJvdHRvbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAga2luZW1hdGljOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHNvbGlkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHVzZUR5bmFtaWNDb2xsaXNpb25zOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBvbkNvbGxpc2lvbjogU2lnbmFsPFJpZ2lkYm9keT4gPSBuZXcgU2lnbmFsPFJpZ2lkYm9keT4oKTtcclxuXHJcbiAgIGNvbGxpZGVyOiBDb2xsaWRlciA9IG5ldyBCb3hDb2xsaWRlcigpO1xyXG5cclxuICAgcHJpdmF0ZSBhYWJiOiBBQUJCO1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYWFiYiA9IG5ldyBBQUJCKDAsIDAsIDAsIDApO1xyXG4gICB9XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBzdXBlci5pbml0KGdhbWUpO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLmFkZEJvZHkodGhpcyk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoYyA9PiBjIGluc3RhbmNlb2YgVHJhbnNmb3JtKSBhcyBUcmFuc2Zvcm07XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLnJlbW92ZUJvZHkodGhpcyk7XHJcbiAgIH1cclxuXHJcbiAgIGNvbGxpZGVzKG90aGVyOiBSaWdpZGJvZHkpe1xyXG4gICAgICByZXR1cm4gb3RoZXIuYm91bmRpbmdCb3gub3ZlcmxhcHModGhpcy5ib3VuZGluZ0JveCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBib3VuZGluZ0JveCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xsaWRlci5nZXRCb3VuZHModGhpcy50cmFuc2Zvcm0ucG9zaXRpb24sIHRoaXMuYWFiYik7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm0gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgIHBvc2l0aW9uOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgXHJcbiAgIC8vIEludGVycG9sYXRlZCBwb3NpdGlvblxyXG4gICBpbnRlcnBvbGF0ZWRQb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbn0iLCJleHBvcnQgY2xhc3MgU2lnbmFsPFQ+e1xyXG4gICBmdW5jdGlvbnM6ICgodHlwZTogVCkgPT4gdm9pZClbXTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zID0gW107XHJcbiAgIH1cclxuXHJcbiAgIGxpc3RlbihmdW5jOiAodHlwZTogVCkgPT4gdm9pZCl7XHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zLnB1c2goZnVuYyk7XHJcbiAgICAgIHJldHVybiBmdW5jO1xyXG4gICB9XHJcbiAgIHJlbW92ZShmdW5jOiAodHlwZTogVCkgPT4gdm9pZCl7XHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuZnVuY3Rpb25zLmluZGV4T2YoZnVuYyk7XHJcbiAgICAgIGlmKGluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5mdW5jdGlvbnMuc3BsaWNlKGluZGV4KTtcclxuICAgfVxyXG5cclxuICAgZW1pdChldmVudCA6IFQpe1xyXG4gICAgICB0aGlzLmZ1bmN0aW9ucy5mb3JFYWNoKGZ1bmMgPT4gZnVuYyhldmVudCkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJncmFwaGljcy9BbmltYXRpb25cIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgUmVuZGVyYWJsZSB9IGZyb20gXCJncmFwaGljcy9SZW5kZXJhYmxlXCI7XHJcbmltcG9ydCB7IFJlc291cmNlTWFuYWdlciB9IGZyb20gXCJncmFwaGljcy9SZXNvdXJjZU1hbmFnZXJcIjtcclxuaW1wb3J0IHsgU3ByaXRlLCBTcHJpdGVTaGVldCB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgVGlsZUNvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL1RpbGVDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCJzY2VuZS9TY2VuZVwiO1xyXG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJ1dGlsL0NvbG9yXCI7XHJcbmltcG9ydCB7IGFzeW5jTG9hZEltYWdlIH0gZnJvbSBcInV0aWwvVGVtcFwiO1xyXG5pbXBvcnQgeyBnZXRTcHJpdGVGcm9tVGlsZXNldCwgVGlsZWRNYXAsIFRpbGVkT2JqZWN0LCBUaWxlZE9iamVjdExheWVyLCBUaWxlZE9iamVjdExheWVyVHlwZSwgVGlsZWRUaWxlTGF5ZXIsIFRpbGVkVGlsZUxheWVyVHlwZSwgVGlsZWRDb2xsaWRlckxheWVyTmFtZSwgVGlsZWRJbWFnZUxheWVyLCBUaWxlZFRpbGVzZXQsIFRpbGVkSW1hZ2VMYXllclR5cGUgfSBmcm9tIFwiLi9UaWxlZE1hcFwiO1xyXG5cclxudHlwZSBUaWxlbWFwT2JqZWN0TG9hZGVyID0gKG9iamVjdDogVGlsZWRPYmplY3QpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZW1hcExheWVyIGltcGxlbWVudHMgUmVuZGVyYWJsZXtcclxuICAgdGlsZW1hcDogVGlsZU1hcDtcclxuICAgZGVwdGg6IG51bWJlciA9IDA7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih0aWxlbWFwOiBUaWxlTWFwKXtcclxuICAgICAgdGhpcy50aWxlbWFwID0gdGlsZW1hcDtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgdGhpcy50aWxlbWFwLnNjZW5lLnJlbmRlcmVyLmFkZCh0aGlzKTtcclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICB0aGlzLnRpbGVtYXAuc2NlbmUucmVuZGVyZXIucmVtb3ZlKHRoaXMpO1xyXG4gICB9XHJcbiAgIFxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlciwgYm91bmRzOiBBQUJCKXtcclxuXHJcbiAgIH1cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlbWFwVGlsZUxheWVyIGV4dGVuZHMgVGlsZW1hcExheWVye1xyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuICAgdGlsZXM6IChBbmltYXRpb258dW5kZWZpbmVkKVtdO1xyXG5cclxuICAgY29uc3RydWN0b3IodGlsZW1hcDogVGlsZU1hcCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpe1xyXG4gICAgICBzdXBlcih0aWxlbWFwKTtcclxuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMudGlsZXMgPSBbXTtcclxuXHJcbiAgICAgIC8vIGxlbmd0aCBzdHVmZi4uLiA6JylcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHdpZHRoICogaGVpZ2h0OyBpKyspIHRoaXMudGlsZXMucHVzaCh1bmRlZmluZWQpO1xyXG4gICB9XHJcblxyXG4gICBnZXRUaWxlKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIHRoaXMudGlsZXNbeCArIHkgKiB0aGlzLndpZHRoXTtcclxuICAgfVxyXG4gICBzZXRUaWxlKHg6IG51bWJlciwgeTogbnVtYmVyLCBhbmltYXRpb246IEFuaW1hdGlvbil7XHJcbiAgICAgIHRoaXMudGlsZXNbeCArIHkgKiB0aGlzLndpZHRoXSA9IGFuaW1hdGlvbjtcclxuICAgfVxyXG4gICBzZXRUaWxlRnJvbUluZGV4KGluZGV4OiBudW1iZXIsIGFuaW1hdGlvbjogQW5pbWF0aW9uKXtcclxuICAgICAgdGhpcy50aWxlc1tpbmRleF0gPSBhbmltYXRpb247XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyLCBib3VuZHM6IEFBQkIpe1xyXG4gICAgICBsZXQgdGlsZVdpZHRoID0gdGhpcy50aWxlbWFwLnRpbGVXaWR0aDtcclxuICAgICAgbGV0IHRpbGVIZWlnaHQgPSB0aGlzLnRpbGVtYXAudGlsZUhlaWdodDtcclxuXHJcbiAgICAgIGxldCBzdGFydFggPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGJvdW5kcy5sZWZ0IC8gdGlsZVdpZHRoKSk7XHJcbiAgICAgIGxldCBlbmRYID0gTWF0aC5mbG9vcihNYXRoLm1pbih0aGlzLndpZHRoLCBib3VuZHMucmlnaHQgLyB0aWxlV2lkdGggKyAxKSk7XHJcblxyXG4gICAgICBsZXQgc3RhcnRZID0gTWF0aC5mbG9vcihNYXRoLm1heCgwLCBib3VuZHMudG9wIC8gdGlsZUhlaWdodCkpO1xyXG4gICAgICBsZXQgZW5kWSA9IE1hdGguZmxvb3IoTWF0aC5taW4odGhpcy5oZWlnaHQsIGJvdW5kcy5ib3R0b20gLyB0aWxlSGVpZ2h0ICsgMSkpO1xyXG4gICAgICBcclxuICAgICAgZm9yKGxldCB4ID0gc3RhcnRYOyB4IDwgZW5kWDsgeCsrKXtcclxuICAgICAgICAgZm9yKGxldCB5ID0gc3RhcnRZOyB5IDwgZW5kWTsgeSsrKXtcclxuICAgICAgICAgICAgbGV0IHRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XHJcbiAgICAgICAgICAgIGlmKHRpbGUgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICB0aWxlLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbiAgIFxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGxldCBib3VuZHMgPSB0aGlzLnRpbGVtYXAuc2NlbmUuY2FtZXJhLmdldEJvdW5kcygpO1xyXG5cclxuICAgICAgbGV0IHRpbGVXaWR0aCA9IHRoaXMudGlsZW1hcC50aWxlV2lkdGg7XHJcbiAgICAgIGxldCB0aWxlSGVpZ2h0ID0gdGhpcy50aWxlbWFwLnRpbGVIZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgc3RhcnRYID0gTWF0aC5mbG9vcihNYXRoLm1heCgwLCBib3VuZHMubGVmdCAvIHRpbGVXaWR0aCkpO1xyXG4gICAgICBsZXQgZW5kWCA9IE1hdGguZmxvb3IoTWF0aC5taW4odGhpcy53aWR0aCwgYm91bmRzLnJpZ2h0IC8gdGlsZVdpZHRoICsgMSkpO1xyXG5cclxuICAgICAgbGV0IHN0YXJ0WSA9IE1hdGguZmxvb3IoTWF0aC5tYXgoMCwgYm91bmRzLnRvcCAvIHRpbGVIZWlnaHQpKTtcclxuICAgICAgbGV0IGVuZFkgPSBNYXRoLmZsb29yKE1hdGgubWluKHRoaXMuaGVpZ2h0LCBib3VuZHMuYm90dG9tIC8gdGlsZUhlaWdodCArIDEpKTtcclxuXHJcbiAgICAgIGZvcihsZXQgeCA9IHN0YXJ0WDsgeCA8IGVuZFg7IHgrKyl7XHJcbiAgICAgICAgIGZvcihsZXQgeSA9IHN0YXJ0WTsgeSA8IGVuZFk7IHkrKyl7XHJcbiAgICAgICAgICAgIGxldCB0aWxlID0gdGhpcy5nZXRUaWxlKHgsIHkpO1xyXG4gICAgICAgICAgICBpZih0aWxlID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZVNpbXBsZSh0aWxlLmZyYW1lLCB4ICogdGlsZVdpZHRoLCB5ICogdGlsZUhlaWdodCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlbWFwSW1hZ2VMYXllciBleHRlbmRzIFRpbGVtYXBMYXllciB7XHJcbiAgIGltYWdlOiBTcHJpdGV8dW5kZWZpbmVkO1xyXG5cclxuICAgcGFyYWxsYXg6IG51bWJlciA9IDEwMDAwMDAwO1xyXG5cclxuICAgX3RlbXBTcHJpdGU6IFNwcml0ZTtcclxuICAgX2FhYmI6IEFBQkI7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih0aWxlbWFwOiBUaWxlTWFwLCBpbWFnZT86IFNwcml0ZSl7XHJcbiAgICAgIHN1cGVyKHRpbGVtYXApO1xyXG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgICAgIHRoaXMuX3RlbXBTcHJpdGUgPSBuZXcgU3ByaXRlKHVuZGVmaW5lZCk7XHJcbiAgICAgIHRoaXMuX2FhYmIgPSBuZXcgQUFCQigpO1xyXG4gICB9XHJcblxyXG4gICBcclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBpZih0aGlzLmltYWdlID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGxldCBwb3MgPSB0aGlzLnRpbGVtYXAuc2NlbmUuY2FtZXJhLmNlbnRlcjtcclxuICAgICAgLy8gbGV0IGJvdW5kcyA9IHRoaXMudGlsZW1hcC5zY2VuZS5jYW1lcmEuZ2V0Qm91bmRzKHRoaXMuX2FhYmIpO1xyXG5cclxuICAgICAgbGV0IHJlbGF0aXZlWCA9IHBvcy54IC0gdGhpcy5pbWFnZS53aWR0aCAvIDI7XHJcbiAgICAgIGxldCByZWxhdGl2ZVkgPSBwb3MueSAtIHRoaXMuaW1hZ2UuaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgIGxldCBvZmZzZXRYID0gLXJlbGF0aXZlWCAvIHRoaXMucGFyYWxsYXg7XHJcbiAgICAgIGxldCBvZmZzZXRZID0gLXJlbGF0aXZlWSAvIHRoaXMucGFyYWxsYXg7XHJcblxyXG4gICAgICB3aGlsZShvZmZzZXRYIDwgMCkge1xyXG4gICAgICAgICBvZmZzZXRYICs9IHRoaXMuaW1hZ2Uud2lkdGg7XHJcbiAgICAgIH1cclxuICAgICAgd2hpbGUob2Zmc2V0WCA+IHRoaXMuaW1hZ2Uud2lkdGgpe1xyXG4gICAgICAgICBvZmZzZXRYIC09IHRoaXMuaW1hZ2Uud2lkdGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGVTaW1wbGUodGhpcy5pbWFnZSwgcmVsYXRpdmVYICsgb2Zmc2V0WCAtIHRoaXMuaW1hZ2Uud2lkdGgsIHJlbGF0aXZlWSArIG9mZnNldFkpO1xyXG4gICAgICBncmFwaGljcy5kcmF3U3ByaXRlU2ltcGxlKHRoaXMuaW1hZ2UsIHJlbGF0aXZlWCArIG9mZnNldFgsIHJlbGF0aXZlWSArIG9mZnNldFkpO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlbWFwQ29sbGlzaW9uTGF5ZXIgZXh0ZW5kcyBUaWxlbWFwTGF5ZXJ7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG4gICB0aWxlczogYm9vbGVhbltdO1xyXG5cclxuICAgY29uc3RydWN0b3IodGlsZW1hcDogVGlsZU1hcCwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpe1xyXG4gICAgICBzdXBlcih0aWxlbWFwKTtcclxuXHJcbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLnRpbGVtYXAgPSB0aWxlbWFwO1xyXG5cclxuICAgICAgdGhpcy50aWxlcyA9IFtdO1xyXG5cclxuICAgICAgLy8gbGVuZ3RoIHN0dWZmLi4uIDonKVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgd2lkdGggKiBoZWlnaHQ7IGkrKykgdGhpcy50aWxlcy5wdXNoKGZhbHNlKTtcclxuICAgfVxyXG5cclxuICAgaXNQaXhlbFNvbGlkKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaXNUaWxlU29saWQoXHJcbiAgICAgICAgIE1hdGguZmxvb3IoeCAvIHRoaXMudGlsZW1hcC50aWxlV2lkdGgpLFxyXG4gICAgICAgICBNYXRoLmZsb29yKHkgLyB0aGlzLnRpbGVtYXAudGlsZUhlaWdodClcclxuICAgICAgKTtcclxuICAgfVxyXG5cclxuICAgaXNUaWxlU29saWQoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5nZXRUaWxlKHgsIHkpO1xyXG4gICB9XHJcblxyXG4gICBnZXRUaWxlQ29sbGlkZXIoeDogbnVtYmVyLCB5OiBudW1iZXIsIHRpbGVDb2xsaWRlcjogVGlsZUNvbGxpZGVyKXtcclxuICAgICAgdGlsZUNvbGxpZGVyLnNpemUueCA9IHRoaXMudGlsZW1hcC50aWxlV2lkdGg7XHJcbiAgICAgIHRpbGVDb2xsaWRlci5zaXplLnkgPSB0aGlzLnRpbGVtYXAudGlsZUhlaWdodDtcclxuXHJcbiAgICAgIHRpbGVDb2xsaWRlci50b3AgPSAhdGhpcy5pc1RpbGVTb2xpZCh4LCB5IC0gMSk7XHJcbiAgICAgIHRpbGVDb2xsaWRlci5ib3R0b20gPSAhdGhpcy5pc1RpbGVTb2xpZCh4LCB5ICsgMSk7XHJcbiAgICAgIHRpbGVDb2xsaWRlci5sZWZ0ID0gIXRoaXMuaXNUaWxlU29saWQoeCAtIDEsIHkpO1xyXG4gICAgICB0aWxlQ29sbGlkZXIucmlnaHQgPSAhdGhpcy5pc1RpbGVTb2xpZCh4ICsgMSwgeSk7XHJcblxyXG4gICAgICByZXR1cm4gdGlsZUNvbGxpZGVyO1xyXG4gICB9XHJcblxyXG4gICBnZXRUaWxlKHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgaWYoeCA8IDApIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYoeCA+PSB0aGlzLndpZHRoKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmKHkgPCAwKSByZXR1cm4gZmFsc2U7IFxyXG4gICAgICBpZih5ID49IHRoaXMuaGVpZ2h0KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy50aWxlc1t4ICsgeSAqIHRoaXMud2lkdGhdO1xyXG4gICB9XHJcbiAgIHNldFRpbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNvbGlkOiBib29sZWFuKXtcclxuICAgICAgdGhpcy50aWxlc1t4ICsgeSAqIHRoaXMud2lkdGhdID0gc29saWQ7XHJcbiAgIH1cclxuICAgc2V0VGlsZUZyb21JbmRleChpbmRleDogbnVtYmVyLCBzb2xpZDogYm9vbGVhbil7XHJcbiAgICAgIHRoaXMudGlsZXNbaW5kZXhdID0gc29saWQ7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdEZWJ1ZyhncmFwaGljczogR3JhcGhpY3MsIHRpbGVXaWR0aDogbnVtYmVyLCB0aWxlSGVpZ2h0OiBudW1iZXIsIGJvdW5kczogQUFCQil7XHJcbiAgICAgIGxldCBzdGFydFggPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGJvdW5kcy5sZWZ0IC8gdGlsZVdpZHRoKSk7XHJcbiAgICAgIGxldCBlbmRYID0gTWF0aC5mbG9vcihNYXRoLm1pbih0aGlzLndpZHRoLCBib3VuZHMucmlnaHQgLyB0aWxlV2lkdGggKyAxKSk7XHJcblxyXG4gICAgICBsZXQgc3RhcnRZID0gTWF0aC5mbG9vcihNYXRoLm1heCgwLCBib3VuZHMudG9wIC8gdGlsZUhlaWdodCkpO1xyXG4gICAgICBsZXQgZW5kWSA9IE1hdGguZmxvb3IoTWF0aC5taW4odGhpcy5oZWlnaHQsIGJvdW5kcy5ib3R0b20gLyB0aWxlSGVpZ2h0ICsgMSkpO1xyXG5cclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IoMjU1LCA5MCwgMjAsIDAuOCk7XHJcblxyXG4gICAgICBsZXQgY29sbGlkZXIgPSBuZXcgVGlsZUNvbGxpZGVyKCk7XHJcbiAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IDI7XHJcblxyXG4gICAgICBmb3IobGV0IHggPSBzdGFydFg7IHggPCBlbmRYOyB4Kyspe1xyXG4gICAgICAgICBmb3IobGV0IHkgPSBzdGFydFk7IHkgPCBlbmRZOyB5Kyspe1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc1RpbGVTb2xpZCh4LCB5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb2xsaWRlciA9IHRoaXMuZ2V0VGlsZUNvbGxpZGVyKHgsIHksIGNvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLnRvcCl7XHJcbiAgICAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0YW5nbGUoeCAqIHRpbGVXaWR0aCwgeSAqIHRpbGVIZWlnaHQsIHRpbGVXaWR0aCwgdGhpY2tuZXNzLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjb2xsaWRlci5ib3R0b20pe1xyXG4gICAgICAgICAgICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKHggKiB0aWxlV2lkdGgsIHkgKiB0aWxlSGVpZ2h0ICsgdGlsZUhlaWdodCAtIHRoaWNrbmVzcywgdGlsZVdpZHRoLCB0aGlja25lc3MsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLmxlZnQpe1xyXG4gICAgICAgICAgICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKHggKiB0aWxlV2lkdGgsIHkgKiB0aWxlSGVpZ2h0LCB0aGlja25lc3MsIHRpbGVIZWlnaHQsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLnJpZ2h0KXtcclxuICAgICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3RhbmdsZSh4ICogdGlsZVdpZHRoICsgdGlsZVdpZHRoIC0gdGhpY2tuZXNzLCB5ICogdGlsZUhlaWdodCwgdGhpY2tuZXNzLCB0aWxlSGVpZ2h0LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCB7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG4gICB0aWxlV2lkdGg6IG51bWJlcjtcclxuICAgdGlsZUhlaWdodDogbnVtYmVyO1xyXG4gICBzY2VuZSE6IFNjZW5lO1xyXG4gICBpbml0YWxpemVkOiBib29sZWFuO1xyXG5cclxuICAgYmFja2dyb3VuZENvbG9yOiBDb2xvciA9IG5ldyBDb2xvcigxLCAxLCAxLCAxKTtcclxuXHJcbiAgIGxheWVyczogVGlsZW1hcExheWVyW107XHJcbiAgIGNvbGxpZGVyczogVGlsZW1hcENvbGxpc2lvbkxheWVyW107XHJcblxyXG4gICBkZXB0aDogbnVtYmVyID0gLTEwMDAwO1xyXG5cclxuICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRpbGVXaWR0aDogbnVtYmVyLCB0aWxlSGVpZ2h0OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICB0aGlzLnRpbGVXaWR0aCA9IHRpbGVXaWR0aDtcclxuICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gdGlsZUhlaWdodDtcclxuICAgICAgdGhpcy5sYXllcnMgPSBbXTtcclxuICAgICAgdGhpcy5jb2xsaWRlcnMgPSBbXTtcclxuICAgICAgdGhpcy5pbml0YWxpemVkID0gZmFsc2U7XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIGlmKHRoaXMuaW5pdGFsaXplZCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5pbml0KGdhbWUpKTtcclxuICAgICAgdGhpcy5zY2VuZS5yZW5kZXJlci5hZGQodGhpcyk7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgaWYoIXRoaXMuaW5pdGFsaXplZCkgcmV0dXJuO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5kZXN0cm95KCkpO1xyXG4gICAgICB0aGlzLnNjZW5lLnJlbmRlcmVyLnJlbW92ZSh0aGlzKTtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvci5yLCB0aGlzLmJhY2tncm91bmRDb2xvci5nLCB0aGlzLmJhY2tncm91bmRDb2xvci5iLCB0aGlzLmJhY2tncm91bmRDb2xvci5hKTtcclxuICAgICAgZ3JhcGhpY3MuZHJhd1JlY3RhbmdsZSgwLCAwLCB0aGlzLndpZHRoICogdGhpcy50aWxlV2lkdGgsIHRoaXMuaGVpZ2h0ICogdGhpcy50aWxlSGVpZ2h0LCB0cnVlKTtcclxuXHJcbiAgICAgIGdyYXBoaWNzLnNldENvbG9yKDEsIDEsIDEsIDEpO1xyXG4gICB9XHJcblxyXG4gICAvLyBUT0RPIG1heWJlIG1vcmUgbGlrZSBiYXRjaCB1cGRhdGUgZXZlcnkgeCBmcmFtZXMgb3IgZGV2aWRlIHVwIHRoZSB3b3JrIHNvbWVob3cgb3ZlciBtdXB0aXBsZSBmcmFtZXNcclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBsZXQgYm91bmRzID0gdGhpcy5zY2VuZS5jYW1lcmEuZ2V0Qm91bmRzKCk7XHJcblxyXG4gICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IGxheWVyLnVwZGF0ZShkZWx0YSwgYm91bmRzKSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVRpbGVkTWFwKG1hcDogVGlsZWRNYXAsIHJlc291cmNlTWFuYWdlcjogUmVzb3VyY2VNYW5hZ2VyLCBsb2FkZXI6IFRpbGVtYXBPYmplY3RMb2FkZXIpe1xyXG4gICAgICBjb25zdCBSb290Rm9sZGVyID0gXCJhc3NldHMvbGV2ZWxzL1wiO1xyXG4gICAgICBsZXQgdGlsZW1hcCA9IG5ldyBUaWxlTWFwKG1hcC53aWR0aCwgbWFwLmhlaWdodCwgbWFwLnRpbGV3aWR0aCwgbWFwLnRpbGVoZWlnaHQpO1xyXG5cclxuICAgICAgdGlsZW1hcC5iYWNrZ3JvdW5kQ29sb3IgPSBDb2xvci5mcm9tSGV4KG1hcC5iYWNrZ3JvdW5kY29sb3IpITtcclxuICAgICAgXHJcbiAgICAgIC8vIFRJTEVTRVRTXHJcbiAgICAgIGxldCB0aWxlc2V0czoge3NldDogVGlsZWRUaWxlc2V0LCBzaGVldDogU3ByaXRlU2hlZXR9W10gPSBbXTtcclxuICAgICAgbGV0IHRpbGVzOiB7IFtrZXk6IG51bWJlcl06IEFuaW1hdGlvbiB9ID0ge307XHJcbiAgICAgIFxyXG4gICAgICBtYXAudGlsZXNldHMuZm9yRWFjaChzZXQgPT4ge1xyXG4gICAgICAgICBsZXQgc2hlZXQgPSByZXNvdXJjZU1hbmFnZXIubG9hZFNwcml0ZVNoZWV0KFJvb3RGb2xkZXIgKyBzZXQuaW1hZ2UpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgdGlsZXNldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHNldCxcclxuICAgICAgICAgICAgc2hlZXRcclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAvLyBMb2FkIGFsbCBkZWZhdWx0IGFuaW1hdGlvbnNcclxuICAgICAgICAgc2V0LnRpbGVzPy5mb3JFYWNoKHRpbGUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aWxlLmlkICsgc2V0LmZpcnN0Z2lkO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbiA9ICBuZXcgQW5pbWF0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICB0aWxlLmFuaW1hdGlvbi5mb3JFYWNoKGZyYW1lID0+IHtcclxuICAgICAgICAgICAgICAgYW5pbWF0aW9uLmFkZEZyYW1lKGdldFNwcml0ZUZyb21UaWxlc2V0KHNldCwgZnJhbWUudGlsZWlkLCBzaGVldCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5mcmFtZVJhdGUgPSA0O1xyXG5cclxuICAgICAgICAgICAgdGlsZXNbaW5kZXhdID0gYW5pbWF0aW9uO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBtYXAubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAvLyBUSUxFIExBWUVSU1xyXG4gICAgICAgICBpZihsYXllci50eXBlID09PSBUaWxlZFRpbGVMYXllclR5cGUgJiYgbGF5ZXIubmFtZSAhPT0gVGlsZWRDb2xsaWRlckxheWVyTmFtZSl7XHJcbiAgICAgICAgICAgIGxldCB0aWxlTGF5ZXIgPSBsYXllciBhcyBUaWxlZFRpbGVMYXllcjtcclxuXHJcbiAgICAgICAgICAgIGlmKCFsYXllci52aXNpYmxlKXtcclxuICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGlsZW1hcExheWVyID0gbmV3IFRpbGVtYXBUaWxlTGF5ZXIodGlsZW1hcCwgdGlsZUxheWVyLndpZHRoLCB0aWxlTGF5ZXIuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIExvYWQgcHJvcGVydGllc1xyXG4gICAgICAgICAgICBpZihsYXllci5wcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICBsYXllci5wcm9wZXJ0aWVzLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmKHByb3AubmFtZSA9PT0gXCJkZXB0aFwiKSB0aWxlbWFwTGF5ZXIuZGVwdGggPSBwcm9wLnZhbHVlIGFzIG51bWJlcjtcclxuICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aWxlTGF5ZXIuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIGxldCB0aWxlSW5kZXggPSB0aWxlTGF5ZXIuZGF0YVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGlsZXNbdGlsZUluZGV4XTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC8vIEZpbmQgdGlsZVxyXG4gICAgICAgICAgICAgICBpZih0aWxlID09PSB1bmRlZmluZWQgJiYgdGlsZUluZGV4ICE9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRpbGVzZXRzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbGVzZXQgPSB0aWxlc2V0c1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKHRpbGVJbmRleCA+PSB0aWxlc2V0LnNldC5maXJzdGdpZCAmJiB0aWxlSW5kZXggPCB0aWxlc2V0LnNldC5maXJzdGdpZCArIHRpbGVzZXQuc2V0LnRpbGVjb3VudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGUgPSBnZXRTcHJpdGVGcm9tVGlsZXNldCh0aWxlc2V0LnNldCwgdGlsZUluZGV4IC0gdGlsZXNldC5zZXQuZmlyc3RnaWQsIHRpbGVzZXQuc2hlZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZSA9IG5ldyBBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRGcmFtZShzcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdGlsZXNbdGlsZUluZGV4XSA9IHRpbGU7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGlmKHRpbGUgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgIHRpbGVtYXBMYXllci5zZXRUaWxlRnJvbUluZGV4KGksIHRpbGUuY2xvbmUoKSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGlsZW1hcC5sYXllcnMucHVzaCh0aWxlbWFwTGF5ZXIpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAvLyBDb2xsaXNpb24gTGF5ZXJzXHJcbiAgICAgICAgIGVsc2UgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRUaWxlTGF5ZXJUeXBlICYmIGxheWVyLm5hbWUgPT09IFRpbGVkQ29sbGlkZXJMYXllck5hbWUpe1xyXG4gICAgICAgICAgICBsZXQgdGlsZUxheWVyID0gbGF5ZXIgYXMgVGlsZWRUaWxlTGF5ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgY29sbGlkZXJMYXllciA9IG5ldyBUaWxlbWFwQ29sbGlzaW9uTGF5ZXIodGlsZW1hcCwgdGlsZUxheWVyLndpZHRoLCB0aWxlTGF5ZXIuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aWxlTGF5ZXIuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIGxldCB0aWxlSW5kZXggPSB0aWxlTGF5ZXIuZGF0YVtpXTtcclxuICAgICAgICAgICAgICAgY29sbGlkZXJMYXllci5zZXRUaWxlRnJvbUluZGV4KGksIHRpbGVJbmRleCAhPT0gMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRpbGVtYXAuY29sbGlkZXJzLnB1c2goY29sbGlkZXJMYXllcik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGVsc2UgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRJbWFnZUxheWVyVHlwZSl7XHJcbiAgICAgICAgICAgIGxldCB0aWxlTGF5ZXIgPSBsYXllciBhcyBUaWxlZEltYWdlTGF5ZXI7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1hZ2VMYXllciA9IG5ldyBUaWxlbWFwSW1hZ2VMYXllcih0aWxlbWFwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIExvYWQgcHJvcGVydGllc1xyXG4gICAgICAgICAgICBpZihsYXllci5wcm9wZXJ0aWVzICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICBsYXllci5wcm9wZXJ0aWVzLmZvckVhY2gocHJvcCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIGlmKHByb3AubmFtZSA9PT0gXCJwYXJhbGxheFwiKSBpbWFnZUxheWVyLnBhcmFsbGF4ID0gcHJvcC52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgICAgIGlmKHByb3AubmFtZSA9PT0gXCJkZXB0aFwiKSBpbWFnZUxheWVyLmRlcHRoID0gcHJvcC52YWx1ZSBhcyBudW1iZXI7XHJcbiAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBpbWFnZUxheWVyLmltYWdlID0gcmVzb3VyY2VNYW5hZ2VyLmxvYWRTcHJpdGVTaGVldChSb290Rm9sZGVyICsgdGlsZUxheWVyLmltYWdlKS5nZXRTcHJpdGUoMCwgMCwgNjQwLCAzNjApO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGlsZW1hcC5sYXllcnMucHVzaChpbWFnZUxheWVyKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgLy8gT2JqZWN0IGxheWVyc1xyXG4gICAgICAgICBlbHNlIGlmKGxheWVyLnR5cGUgPT09IFRpbGVkT2JqZWN0TGF5ZXJUeXBlKXtcclxuICAgICAgICAgICAgbGV0IG9iakxheWVyID0gbGF5ZXIgYXMgVGlsZWRPYmplY3RMYXllcjtcclxuICAgICAgICAgICAgb2JqTGF5ZXIub2JqZWN0cy5mb3JFYWNoKGxvYWRlcik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIC8vIFVoIG9oXHJcbiAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJVbmtub3duIGxheWVyIHR5cGUgXCIgKyBsYXllci50eXBlKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcblxyXG4gICAgICByZXR1cm4gdGlsZW1hcDtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBhc3luYyBmcm9tVGlsZWRNYXBEb3dubG9hZChmaWxlOiBzdHJpbmcsIHJlc291cmNlTWFuYWdlcjogUmVzb3VyY2VNYW5hZ2VyLCBsb2FkZXI6IFRpbGVtYXBPYmplY3RMb2FkZXIpe1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZmV0Y2goZmlsZSk7XHJcbiAgICAgIGxldCBkID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmZyb21UaWxlZE1hcChkIGFzIFRpbGVkTWFwLCByZXNvdXJjZU1hbmFnZXIsIGxvYWRlcik7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBwaXhlbFdpZHRoKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLndpZHRoICogdGhpcy50aWxlV2lkdGg7XHJcbiAgIH1cclxuICAgZ2V0IHBpeGVsSGVpZ2h0KCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmhlaWdodCAqIHRoaXMudGlsZUhlaWdodDtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGlsZWRPYmplY3RMYXllclR5cGUgPSBcIm9iamVjdGdyb3VwXCI7XHJcbmV4cG9ydCBjb25zdCBUaWxlZEltYWdlTGF5ZXJUeXBlID0gXCJpbWFnZWxheWVyXCI7XHJcbmV4cG9ydCBjb25zdCBUaWxlZFRpbGVMYXllclR5cGUgPSBcInRpbGVsYXllclwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRpbGVkQ29sbGlkZXJMYXllck5hbWUgPSBcIkNvbGxpZGVyc1wiO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZE1hcCB7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgdGlsZXdpZHRoOiBudW1iZXI7XHJcbiAgIHRpbGVoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgIGJhY2tncm91bmRjb2xvcjogc3RyaW5nO1xyXG5cclxuICAgbGF5ZXJzOiBUaWxlZExheWVyW107XHJcbiAgIHRpbGVzZXRzOiBUaWxlZFRpbGVzZXRbXTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZExheWVyIHtcclxuICAgaWQ6IG51bWJlcjtcclxuICAgXHJcbiAgIHg6IG51bWJlcjtcclxuICAgeTogbnVtYmVyO1xyXG5cclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICB0eXBlOiBzdHJpbmc7XHJcblxyXG4gICB2aXNpYmxlOiBib29sZWFuO1xyXG4gICBwcm9wZXJ0aWVzOiBUaWxlZFByb3BlcnRpZXNbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkVGlsZUxheWVyIGV4dGVuZHMgVGlsZWRMYXllciB7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG4gICBkYXRhOiBudW1iZXJbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkT2JqZWN0TGF5ZXIgZXh0ZW5kcyBUaWxlZExheWVye1xyXG4gICBvYmplY3RzOiBUaWxlZE9iamVjdFtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZWRJbWFnZUxheWVyIGV4dGVuZHMgVGlsZWRMYXllcntcclxuICAgaW1hZ2U6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkT2JqZWN0IHtcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICB0eXBlOiBzdHJpbmc7XHJcblxyXG4gICBwb2x5bGluZTogVGlsZWRQb3NpdGlvbltdO1xyXG5cclxuICAgcHJvcGVydGllczogVGlsZWRQcm9wZXJ0aWVzW107XHJcblxyXG4gICB2aXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkUG9zaXRpb257XHJcbiAgIHg6IG51bWJlcjtcclxuICAgeTogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkUHJvcGVydGllc3tcclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICB0eXBlOiBzdHJpbmc7XHJcbiAgIHZhbHVlOiBzdHJpbmd8Ym9vbGVhbnxudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZWRBbmltYXRlZFRpbGVze1xyXG4gICBpZDogbnVtYmVyO1xyXG4gICBhbmltYXRpb246IFRpbGVkQW5pbWF0ZWRUaWxlRnJhbWVbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkQW5pbWF0ZWRUaWxlRnJhbWV7XHJcbiAgIGR1cmF0aW9uOiBudW1iZXIsXHJcbiAgIHRpbGVpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkVGlsZXNldCB7XHJcbiAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgIGZpcnN0Z2lkOiBudW1iZXI7XHJcbiAgIGltYWdlOiBzdHJpbmc7XHJcbiAgIFxyXG4gICBjb2x1bW5zOiBudW1iZXI7XHJcbiAgIHRpbGVjb3VudDogbnVtYmVyO1xyXG5cclxuICAgdGlsZXdpZHRoOiBudW1iZXI7XHJcbiAgIHRpbGVoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgIHRpbGVzOiBUaWxlZEFuaW1hdGVkVGlsZXNbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTcHJpdGVGcm9tVGlsZXNldCh0aWxlc2V0OiBUaWxlZFRpbGVzZXQsIGluZGV4OiBudW1iZXIsIHNoZWV0OiBTcHJpdGVTaGVldCl7XHJcbiAgIGxldCB4ID0gaW5kZXggJSB0aWxlc2V0LmNvbHVtbnM7XHJcbiAgIGxldCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIHRpbGVzZXQuY29sdW1ucyk7XHJcblxyXG4gICByZXR1cm4gc2hlZXQuZ2V0U3ByaXRlKFxyXG4gICAgICB4ICogdGlsZXNldC50aWxld2lkdGgsIFxyXG4gICAgICB5ICogdGlsZXNldC50aWxlaGVpZ2h0LCBcclxuICAgICAgdGlsZXNldC50aWxld2lkdGgsIFxyXG4gICAgICB0aWxlc2V0LnRpbGVoZWlnaHQpO1xyXG59IiwiZXhwb3J0IGNsYXNzIENvbG9ye1xyXG4gICByOiBudW1iZXI7XHJcbiAgIGc6IG51bWJlcjtcclxuICAgYjogbnVtYmVyO1xyXG4gICBhOiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihyOiBudW1iZXIgPSAxLCBnOiBudW1iZXIgPSAxLCBiOiBudW1iZXIgPSAxLCBhOiBudW1iZXIgPSAxKXtcclxuICAgICAgdGhpcy5yID0gcjtcclxuICAgICAgdGhpcy5nID0gZztcclxuICAgICAgdGhpcy5iID0gYjsgXHJcbiAgICAgIHRoaXMuYSA9IGE7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBmcm9tSGV4KGhleDogc3RyaW5nKTogQ29sb3J8bnVsbCB7XHJcbiAgICAgIHZhciByZXN1bHQgPSAvXiM/KFthLWZcXGRdezJ9KShbYS1mXFxkXXsyfSkoW2EtZlxcZF17Mn0pJC9pLmV4ZWMoaGV4KTtcclxuICAgICAgcmV0dXJuIHJlc3VsdCA/IG5ldyBDb2xvcihcclxuICAgICAgICBwYXJzZUludChyZXN1bHRbMV0sIDE2KSAvIDI1NSxcclxuICAgICAgICBwYXJzZUludChyZXN1bHRbMl0sIDE2KSAvIDI1NSxcclxuICAgICAgICBwYXJzZUludChyZXN1bHRbM10sIDE2KSAvIDI1NVxyXG4gICAgICApIDogbnVsbDtcclxuICAgIH0gICAgXHJcbn0iLCJleHBvcnQgY2xhc3MgQ3VydmV7XHJcbiAgIHB1YmxpYyBzdGF0aWMgbGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgZjogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIGEgKyAoYiAtIGEpICogZjtcclxuICAgfVxyXG4gICBzdGF0aWMgbGluZWFyKGE6IG51bWJlciwgYjogbnVtYmVyLCBmOiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gQ3VydmUubGVycChhLGIsZik7XHJcbiAgIH1cclxufSIsImV4cG9ydCBmdW5jdGlvbiBub3coKXtcclxuICAgaWYod2luZG93LnBlcmZvcm1hbmNlKXtcclxuICAgICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSAvIDEwMDA7XHJcbiAgIH1cclxuICAgcmV0dXJuIERhdGUubm93KCkgLyAxMDAwO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0KHRpbWVJblNlY29uZHM6IG51bWJlcil7XHJcbiAgIGxldCBzZWNvbmRzID0gTWF0aC5mbG9vcih0aW1lSW5TZWNvbmRzKTtcclxuICAgbGV0IG1pbGxpcyA9IE1hdGguZmxvb3IoKHRpbWVJblNlY29uZHMgJSAxKSAqIDEwMDApO1xyXG5cclxuICAgcmV0dXJuIChcIlwiICsgc2Vjb25kcykucGFkU3RhcnQoMiwgJzAnKSArIFwiOlwiICsgKFwiXCIgKyBtaWxsaXMpLnBhZFN0YXJ0KDMsICcwJyk7XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9