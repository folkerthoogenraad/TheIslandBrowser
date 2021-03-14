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
var Graphics_1 = __webpack_require__(/*! graphics/Graphics */ "./src/ts/graphics/Graphics.ts");
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
        this.graphics = new Graphics_1.Graphics(canvas);
        this.input = new Input_1.Input(canvas);
        this.canvas = canvas;
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
        this.graphics.reset();
        this.graphics.clearScreen();
        (_c = this.scene) === null || _c === void 0 ? void 0 : _c.draw(this.graphics);
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
        // Unstuck all the bodies
        var tileCollider = new TileCollider_1.TileCollider();
        var tileAABB = new AABB_1.AABB();
        var tilePosition = new Vector2_1.Vector2();
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
        // TODO broadphase narrow phase stuff :)
        // Maybe start with sweep and prune
        this.bodies.forEach(function (body) {
            if (body.solid)
                return;
            if (body.kinematic)
                return;
            _this.bodies.forEach(function (other) {
                if (!other.solid)
                    return;
                var bbox = body.boundingBox;
                var otherbbox = other.boundingBox;
                if (!bbox.overlaps(otherbbox))
                    return;
                var unstuckDist = Collision_1.unstuck(body.collider, other.collider, other.transform.position.clone().sub(body.transform.position), body.velocity); // TODO relative velocity
                if (unstuckDist !== undefined) {
                    body.transform.position.add(unstuckDist);
                    body.unstuckDistance.add(unstuckDist);
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
                    body.onCollision.emit(other);
                    other.onCollision.emit(body);
                }
            }
        }
    };
    Physics.prototype.drawDebug = function (graphics) {
        return;
        this.layers.forEach(function (layer) {
            layer.drawDebug(graphics, layer.tilemap.tileWidth, layer.tilemap.tileHeight, new AABB_1.AABB(0, 0, 1000, 1000));
        });
        graphics.setColor("rgba(255,0,0, 0.6)");
        this.bodies.forEach(function (body) {
            if (!body.solid)
                return;
            graphics.drawAABB(body.boundingBox, true);
        });
        graphics.setColor("rgba(0,255,0, 0.6)");
        this.bodies.forEach(function (body) {
            if (body.solid)
                return;
            var collider = body.boundingBox;
            graphics.drawAABB(collider, true);
        });
        graphics.setColor("rgba(0,0,255, 0.6)");
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
var Graphics = /** @class */ (function () {
    function Graphics(canvas) {
        this.color = "white";
        this.canvas = canvas;
        this.context = canvas.getContext("2d");
        this.updateSize();
    }
    Graphics.prototype.reset = function () {
        this.context.resetTransform();
    };
    Graphics.prototype.clearScreen = function () {
        this.clear(0, 0, this.canvas.width, this.canvas.height);
    };
    Graphics.prototype.clear = function (x, y, width, height) {
        this.context.clearRect(x, y, width, height);
    };
    Graphics.prototype.drawSprite = function (sprite, x, y, scaleX, scaleY, rotation) {
        if (scaleX === void 0) { scaleX = 1; }
        if (scaleY === void 0) { scaleY = 1; }
        if (rotation === void 0) { rotation = 0; }
        this.context.save();
        this.context.translate(x, y);
        this.context.scale(scaleX, scaleY);
        this.context.rotate(rotation);
        this.context.drawImage(sprite.image, sprite.sourceX, sprite.sourceY, sprite.sourceWidth, sprite.sourceHeight, -sprite.offsetX, -sprite.offsetY, sprite.width, sprite.height);
        this.context.restore();
    };
    Graphics.prototype.drawSpriteSimple = function (sprite, x, y) {
        this.context.drawImage(sprite.image, sprite.sourceX, sprite.sourceY, sprite.sourceWidth, sprite.sourceHeight, x - sprite.offsetX, y - sprite.offsetY, sprite.width, sprite.height);
    };
    Graphics.prototype.drawRectangle = function (x, y, w, h, fill) {
        if (fill) {
            this.context.fillStyle = this.color;
            this.context.fillRect(x, y, w, h);
        }
        else {
            this.context.strokeStyle = this.color;
            this.context.rect(x, y, w, h);
        }
    };
    Graphics.prototype.drawAABB = function (aabb, fill) {
        this.drawRectangle(aabb.left, aabb.top, aabb.width, aabb.height, fill);
    };
    Graphics.prototype.setCamera = function (camera) {
        this.context.resetTransform();
        var cameraHeight = camera.height;
        var cameraWidth = camera.width; //this.canvas.width / this.canvas.height * cameraHeight;
        this.context.scale(1 / cameraWidth, 1 / cameraHeight);
        this.context.scale(this.canvas.width, this.canvas.height);
        this.context.translate(-(camera.center.x - cameraWidth / 2), -(camera.center.y - cameraHeight / 2));
    };
    Graphics.prototype.setColor = function (color) {
        this.color = color;
    };
    Graphics.prototype.getColor = function () {
        return this.color;
    };
    Graphics.prototype.updateSize = function () {
        this.canvas.width = this.canvas.offsetWidth;
        this.canvas.height = this.canvas.offsetHeight;
        this.context.imageSmoothingEnabled = false;
        this.context.imageSmoothingQuality = "low";
    };
    return Graphics;
}());
exports.Graphics = Graphics;


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
    function Sprite(image) {
        this.offsetX = 0;
        this.offsetY = 0;
        this.sourceX = 0;
        this.sourceY = 0;
        this.sourceWidth = 0;
        this.sourceHeight = 0;
        this.image = image;
        this.sourceWidth = image.width;
        this.sourceHeight = image.height;
    }
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
    function SpriteSheet(image) {
        this.image = image;
    }
    SpriteSheet.prototype.getSprite = function (x, y, w, h) {
        var sprite = new Sprite(this.image);
        sprite.sourceX = x;
        sprite.sourceY = y;
        sprite.sourceWidth = w;
        sprite.sourceHeight = h;
        return sprite;
    };
    SpriteSheet.prototype.getAnimation = function (x, y, w, h, count) {
        var animation = new Animation_1.Animation();
        for (var i = 0; i < count; i++) {
            var sprite = new Sprite(this.image);
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
var AABB_1 = __webpack_require__(/*! math/AABB */ "./src/ts/math/AABB.ts");
var Scene_1 = __webpack_require__(/*! scene/Scene */ "./src/ts/scene/Scene.ts");
var TileMap_1 = __webpack_require__(/*! tilemap/TileMap */ "./src/ts/tilemap/TileMap.ts");
var List_1 = __webpack_require__(/*! util/List */ "./src/ts/util/List.ts");
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
    var canvas, game, scene, _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                initModals();
                canvas = document.getElementById("canvas");
                game = new Game_1.Game(canvas);
                scene = new Scene_1.Scene();
                _a = scene;
                return [4 /*yield*/, TileMap_1.TileMap.fromTiledMapDownload("assets/levels/level4.json", function (obj) {
                        if (obj.type === "Collider" || obj.type === "PlatformCollider") {
                            scene.addGameObject(new ColliderGameObject_1.ColliderGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
                        }
                        if (obj.type === "LevelManager") {
                            scene.addGameObject(new LevelManager_1.LevelManager());
                        }
                        if (obj.type === "PlayerSpawn") {
                            scene.addGameObject(new PlayerSpawnGameObject_1.PlayerSpawnGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
                        }
                        if (obj.type === "Checkpoint") {
                            scene.addGameObject(new PlayerCheckpointGameObject_1.PlayerCheckpointGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
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
                    })];
            case 1:
                _a.tilemap = _b.sent();
                scene.physics.layers = scene.tilemap.colliders;
                game.scene = scene;
                game.run();
                return [2 /*return*/];
        }
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
var Resources_1 = __webpack_require__(/*! island/Resources */ "./src/ts/island/Resources.ts");
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
        _this.closed = Resources_1.default.sheetObjects.getSprite(0, 64, 16, 16);
        _this.open = Resources_1.default.sheetObjects.getSprite(16, 64, 16, 16);
        return _this;
    }
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
var Resources_1 = __webpack_require__(/*! island/Resources */ "./src/ts/island/Resources.ts");
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
        _this.effect = Resources_1.default.sheetEffects.getAnimation(0, 80, 16, 16, 4).center();
        _this.effect.frameRate = 12;
        _this.body.collider = collider;
        _this.isUsed = false;
        _this.unusedSprite = Resources_1.default.sheetObjects.getSprite(0, 80, 16, 16).center();
        _this.usedSprite = Resources_1.default.sheetObjects.getSprite(16, 80, 16, 16).center();
        _this.body.onCollision.listen(_this.onCollision.bind(_this));
        return _this;
    }
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
        _super.prototype.init.call(this, game);
        this.spawn = this.scene.findObject(function (object) { return object instanceof PlayerSpawnGameObject_1.PlayerSpawnGameObject; });
        this.finish = this.scene.findObject(function (object) { return object instanceof PlayerFinishGameObject_1.PlayerFinishGameObject; });
        this.finish.interactable.onInteract.listen(function (interactor) {
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
        console.log(this.time);
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
var Resources_1 = __webpack_require__(/*! island/Resources */ "./src/ts/island/Resources.ts");
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
        _this.closedAnimation = Resources_1.default.sheetObjects.getAnimation(0, 112, 16, 16, 1);
        _this.openAnimation = Resources_1.default.sheetObjects.getAnimation(16, 112, 16, 16, 4);
        _this.currentAnimation = _this.closedAnimation;
        return _this;
    }
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
var Resources_1 = __webpack_require__(/*! island/Resources */ "./src/ts/island/Resources.ts");
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
        _this.sprite = Resources_1.default.sheetObjects.getSprite(112, 0, 16, 16);
        return _this;
    }
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
var PlayerInputComponent_1 = __webpack_require__(/*! island/Components/PlayerInputComponent */ "./src/ts/island/Components/PlayerInputComponent.ts");
var Resources_1 = __webpack_require__(/*! island/Resources */ "./src/ts/island/Resources.ts");
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
        _this.hadWall = false;
        _this.dashing = false;
        _this.dashSpeed = 4.7 * 60;
        _this.dashTime = 24 / (_this.dashSpeed);
        _this.dashTimer = 0;
        _this.dashTimeout = 0;
        _this.dashSavedSpeed = 0;
        _this.dashSavedAddition = 5;
        _this.dashAnimationTimer = 0;
        _this.wallJumpTimer = 0;
        _this.canDash = false;
        _this.canDoubleJump = false;
        var sheet = Resources_1.default.sheetPlayer;
        _this.idleAnimation = sheet.getAnimation(0, 0, 16, 16, 1).center();
        _this.walkAnimation = sheet.getAnimation(0, 16, 16, 16, 4).center();
        _this.fallAnimation = sheet.getAnimation(0, 32, 16, 16, 2).center();
        _this.jumpAnimation = sheet.getAnimation(0, 48, 16, 16, 2).center();
        _this.dashAnimation = sheet.getAnimation(0, 64, 16, 16, 2).center();
        _this.wallAnimation = sheet.getAnimation(0, 80, 16, 16, 2).center();
        _this.effectJump = Resources_1.default.sheetEffects.getAnimation(0, 0, 16, 16, 3).setOffset(8, 16);
        _this.effectWalljump = Resources_1.default.sheetEffects.getAnimation(0, 16, 16, 16, 3).setOffset(0, 8);
        _this.effectLand = Resources_1.default.sheetEffects.getAnimation(0, 32, 16, 16, 3).setOffset(8, 16);
        _this.effectDash = Resources_1.default.sheetEffects.getAnimation(112, 0, 16, 16, 1).setOffset(8, 8);
        _this.effectDash.frameRate = 4;
        _this.effectDoubleJump = Resources_1.default.sheetEffects.getAnimation(0, 48, 16, 16, 4).setOffset(8, 8);
        _this.currentAnimation = _this.idleAnimation;
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
    PlayerGameObject.prototype._fixedUpdate = function (delta) {
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
        if (this.wallLeft || this.wallRight) {
            if (!this.hadWall && !this.grounded && this.body.velocity.y > 0) {
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
                this.body.velocity.x = this.dashSavedSpeed + this.facing * this.dashSavedAddition;
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
                this.body.velocity.y = this.jumpSpeed;
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
                this.body.velocity.y = this.jumpSpeed;
                this.jumping = true;
                this.canDoubleJump = false;
                this.scene.particleSystem.addParticle(this.transform.position.x, this.transform.position.y + 6, this.effectDoubleJump);
            }
            this.jumpHop = false;
        }
        else {
            if (this.wallLeft && this.jumpHop) {
                this.body.velocity.x = this.moveSpeed;
                this.body.velocity.y = this.jumpSpeed;
                this.wallJumpTimer = 0.05;
                this.jumping = true;
                this.jumpHop = false;
                // You can dash after your walljump :)
                this.canDash = true;
                this.scene.particleSystem.addParticle(this.transform.position.x - 5, this.transform.position.y, this.effectWalljump, 1);
            }
            if (this.wallRight && this.jumpHop) {
                this.body.velocity.x = -this.moveSpeed;
                this.body.velocity.y = this.jumpSpeed;
                this.wallJumpTimer = 0.05;
                this.jumping = true;
                this.jumpHop = false;
                // You can dash after your walljump :)
                this.canDash = true;
                this.scene.particleSystem.addParticle(this.transform.position.x + 5, this.transform.position.y, this.effectWalljump, -1);
            }
        }
        // Jump canceling
        if (this.body.velocity.y > 0) {
            this.jumping = false;
        }
        if (this.jumping && !this.input.jumpDown) {
            this.body.velocity.y = this.body.velocity.y * 0.25;
            this.jumping = false;
        }
    };
    PlayerGameObject.prototype.updateAnimation = function (delta) {
        // Animation stuff
        if (this.body.velocity.x !== 0) {
            this.currentAnimation = this.walkAnimation;
        }
        else {
            this.currentAnimation = this.idleAnimation;
        }
        if (!this.grounded && this.body.velocity.y < 0) {
            this.currentAnimation = this.jumpAnimation;
        }
        if (!this.grounded && this.body.velocity.y >= 0) {
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
        var vel = this.body.velocity.x * dir;
        if (vel >= maxSpeed)
            return;
        if (vel + acc > maxSpeed) {
            acc = maxSpeed - vel;
        }
        this.body.velocity.x += acc * dir;
    };
    PlayerGameObject.prototype.stop = function (acceleration) {
        var dir = Math.sign(this.body.velocity.x);
        var vel = Math.abs(this.body.velocity.x);
        var rem = acceleration;
        if (vel - rem < 0)
            rem = vel;
        this.body.velocity.x -= rem * dir;
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

/***/ "./src/ts/island/Resources.ts":
/*!************************************!*\
  !*** ./src/ts/island/Resources.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Sprite_1 = __webpack_require__(/*! graphics/Sprite */ "./src/ts/graphics/Sprite.ts");
exports.default = {
    sheetObjects: Sprite_1.SpriteSheet.fromHTML("Objects"),
    sheetEffects: Sprite_1.SpriteSheet.fromHTML("Effects"),
    sheetPlayer: Sprite_1.SpriteSheet.fromHTML("Player")
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
    else if (other.right && relativeVelocity.x <= 0) {
        xOverlap = -(selfBounds.left - otherBounds.right);
        xCollided = true;
    }
    if (other.top && relativeVelocity.y > 0) {
        yOverlap = -(selfBounds.bottom - otherBounds.top);
        yCollided = true;
    }
    else if (other.bottom && relativeVelocity.y <= 0) {
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
exports.TileMap = exports.TilemapCollisionLayer = exports.TilemapTileLayer = void 0;
var Animation_1 = __webpack_require__(/*! graphics/Animation */ "./src/ts/graphics/Animation.ts");
var Sprite_1 = __webpack_require__(/*! graphics/Sprite */ "./src/ts/graphics/Sprite.ts");
var TileCollider_1 = __webpack_require__(/*! math/collision/TileCollider */ "./src/ts/math/collision/TileCollider.ts");
var TiledMap_1 = __webpack_require__(/*! ./TiledMap */ "./src/ts/tilemap/TiledMap.ts");
var TilemapTileLayer = /** @class */ (function () {
    function TilemapTileLayer(width, height) {
        this.width = width;
        this.height = height;
        this.tiles = [];
        // length stuff... :')
        for (var i = 0; i < width * height; i++)
            this.tiles.push(undefined);
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
    TilemapTileLayer.prototype.update = function (delta, tileWidth, tileHeight, bounds) {
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
    TilemapTileLayer.prototype.draw = function (graphics, tileWidth, tileHeight, bounds) {
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
}());
exports.TilemapTileLayer = TilemapTileLayer;
var TilemapCollisionLayer = /** @class */ (function () {
    function TilemapCollisionLayer(tilemap, width, height) {
        this.width = width;
        this.height = height;
        this.tilemap = tilemap;
        this.tiles = [];
        // length stuff... :')
        for (var i = 0; i < width * height; i++)
            this.tiles.push(false);
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
        graphics.setColor("rgba(255, 90, 20, 0.8)");
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
}());
exports.TilemapCollisionLayer = TilemapCollisionLayer;
var TileMap = /** @class */ (function () {
    function TileMap(width, height, tileWidth, tileHeight) {
        this.backgroundColor = "";
        this.width = width;
        this.height = height;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.layers = [];
        this.colliders = [];
    }
    TileMap.prototype.draw = function (graphics, bounds) {
        var _this = this;
        graphics.setColor(this.backgroundColor);
        graphics.drawRectangle(0, 0, this.width * this.tileWidth, this.height * this.tileHeight, true);
        this.layers.forEach(function (layer) { return layer.draw(graphics, _this.tileWidth, _this.tileHeight, bounds); });
        // this.colliders.forEach(layer => layer.drawDebug(graphics, this.tileWidth, this.tileHeight, bounds));
    };
    // TODO maybe more like batch update every x frames or devide up the work somehow over muptiple frames
    TileMap.prototype.update = function (delta, bounds) {
        var _this = this;
        this.layers.forEach(function (layer) { return layer.update(delta, _this.tileWidth, _this.tileHeight, bounds); });
    };
    TileMap.fromTiledMap = function (map, loader) {
        var tilemap = new TileMap(map.width, map.height, map.tilewidth, map.tileheight);
        tilemap.backgroundColor = map.backgroundcolor;
        // TILESETS
        var tilesets = [];
        var tiles = {};
        map.tilesets.forEach(function (set) {
            var _a;
            var sheet = Sprite_1.SpriteSheet.fromHTML(set.name);
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
        // TILE LAYERS
        map.layers.forEach(function (layer) {
            if (layer.type === TiledMap_1.TiledTileLayerType && layer.name !== TiledMap_1.TiledColliderLayerName) {
                var tileLayer = layer;
                if (!layer.visible) {
                    return;
                }
                var tilemapLayer = new TilemapTileLayer(tileLayer.width, tileLayer.height);
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
            if (layer.type === TiledMap_1.TiledTileLayerType && layer.name === TiledMap_1.TiledColliderLayerName) {
                var tileLayer = layer;
                var colliderLayer = new TilemapCollisionLayer(tilemap, tileLayer.width, tileLayer.height);
                for (var i = 0; i < tileLayer.data.length; i++) {
                    var tileIndex = tileLayer.data[i];
                    colliderLayer.setTileFromIndex(i, tileIndex !== 0);
                }
                tilemap.colliders.push(colliderLayer);
            }
        });
        // OBJECT LAYER
        map.layers.forEach(function (layer) {
            if (layer.type === TiledMap_1.TiledObjectLayerType) {
                var objLayer = layer;
                objLayer.objects.forEach(loader);
            }
        });
        return tilemap;
    };
    TileMap.fromTiledMapDownload = function (file, loader) {
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
                        return [2 /*return*/, this.fromTiledMap(d, loader)];
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
exports.getSpriteFromTileset = exports.TiledColliderLayerName = exports.TiledTileLayerType = exports.TiledObjectLayerType = void 0;
exports.TiledObjectLayerType = "objectgroup";
exports.TiledTileLayerType = "tilelayer";
exports.TiledColliderLayerName = "Colliders";
function getSpriteFromTileset(tileset, index, sheet) {
    var x = index % tileset.columns;
    var y = Math.floor(index / tileset.columns);
    return sheet.getSprite(x * tileset.tilewidth, y * tileset.tileheight, tileset.tilewidth, tileset.tileheight);
}
exports.getSpriteFromTileset = getSpriteFromTileset;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2FwcC5zY3NzPzUxYzUiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2VuZ2luZS9EZWJ1Z1NldHRpbmdzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9lbmdpbmUvR2FtZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZW5naW5lL0lucHV0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9lbmdpbmUvUGh5c2ljcy50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3MvQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL0dyYXBoaWNzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy9QYXJ0aWNsZVN5c3RlbS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3MvU3ByaXRlLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0NvbXBvbmVudHMvSGVhbHRoQ29tcG9uZW50LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvQ29tcG9uZW50cy9JbnRlcmFjdGFibGVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0b3JDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9Db21wb25lbnRzL1BsYXllcklucHV0Q29tcG9uZW50LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvQ2hlc3RHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvQ29sbGlkZXJHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvRmVhdGhlckdhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9MZXZlbE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1BsYXllckZpbmlzaEdhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyU3Bhd25HYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvU3Bpa2VzR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL1Jlc291cmNlcy50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvbWF0aC9BQUJCLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9tYXRoL1ZlY3RvcjIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL21hdGgvY29sbGlzaW9uL0JveENvbGxpZGVyLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9tYXRoL2NvbGxpc2lvbi9Db2xsaWRlci50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvbWF0aC9jb2xsaXNpb24vQ29sbGlzaW9uLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9tYXRoL2NvbGxpc2lvbi9UaWxlQ29sbGlkZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3NjZW5lL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvc2NlbmUvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvc2NlbmUvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3NjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9zY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvc2lnbmFscy9TaWduYWwudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3RpbGVtYXAvVGlsZU1hcC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvdGlsZW1hcC9UaWxlZE1hcC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvdXRpbC9DdXJ2ZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvdXRpbC9MaXN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy91dGlsL1RpbWUudHMiXSwibmFtZXMiOlsiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiY29uc29sZSIsImxvZyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FB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S0FBSyxDQUFDO0lBQ2hCLENBQUM7SUFDSixXQUFDO0FBQUQsQ0FBQztBQUVELGtCQUFlLElBQUksSUFBSSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNYMUIsU0FBZ0IsR0FBRztJQUNoQixJQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUM7UUFDbkIsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztLQUN6QztJQUNELE9BQU8sSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQztBQUM1QixDQUFDO0FBTEQsa0JBS0M7QUFFRCxTQUFnQixNQUFNLENBQUMsYUFBcUI7SUFDekMsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQztJQUN4QyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRXBELE9BQU8sQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqRixDQUFDO0FBTEQsd0JBS0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuaHRtbCwgYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1phbmJhclNxdWFyZSc7XFxuICBzcmM6IHVybChcXFwiL2Fzc2V0cy9mb250cy9aYW5iYXJTcXVhcmUudHRmXFxcIik7IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWmFuYmFyU3F1YXJlXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDsgfVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuXFxuI2NhbnZhcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkOyB9XFxuXFxuLnJlc291cmNlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZ2FtZS1vdmVybGF5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxOyB9XFxuICAuZ2FtZS1vdmVybGF5IC5iYXItYm90dG9tIHtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7IH1cXG4gIC5nYW1lLW92ZXJsYXkgLmJhci10b3Age1xcbiAgICB0b3A6IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwJSk7IH1cXG4gIC5nYW1lLW92ZXJsYXkgLmJhci1ib3R0b20sIC5nYW1lLW92ZXJsYXkgLmJhci10b3Age1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGxlZnQ6IDA7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMjBweDtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7XFxuICAgIGZvbnQtc2l6ZTogMmVtOyB9XFxuICAuZ2FtZS1vdmVybGF5LmdhbWUtb3ZlciAuYmFyLWJvdHRvbSwgLmdhbWUtb3ZlcmxheS5nYW1lLW92ZXIgLmJhci10b3Age1xcbiAgICB0cmFuc2Zvcm06IG5vbmU7IH1cXG4gIC5nYW1lLW92ZXJsYXk6bm90KC5jb21wbGV0ZWQpIC5jb21wbGV0ZS1iYW5uZXIge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuZ2FtZS1vdmVybGF5LmNvbXBsZXRlZCAuZmFpbC1iYW5uZXIge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuICAuZ2FtZS1vdmVybGF5IC5iZXN0LXRpbWUge1xcbiAgICBjb2xvcjogIzk5OTsgfVxcbiAgLmdhbWUtb3ZlcmxheSAuZGVidWctYWxwaGEtbWVzc2FnZSB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgY29sb3I6ICM5OTk7XFxuICAgIHJpZ2h0OiAxNnB4O1xcbiAgICBib3R0b206IDE2cHg7XFxuICAgIHotaW5kZXg6IDEwMDA7IH1cXG5cXG4ubW9kYWwge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgYm90dG9tOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB6LWluZGV4OiAxMDAwMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICB0cmFuc2l0aW9uOiB2aXNpYmlsaXR5O1xcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgfVxcbiAgLm1vZGFsIC5iYWNrZ3JvdW5kIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHJpZ2h0OiAwO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG9wYWNpdHk6IDAuNztcXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XFxuICAgIHotaW5kZXg6IC0xO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5O1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH1cXG4gIC5tb2RhbCAuY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQ6IHdoaXRlO1xcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5LCB0cmFuc2Zvcm07XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgfVxcbiAgICAubW9kYWwgLmNvbnRlbnQgLmNsb3NlIHtcXG4gICAgICBwYWRkaW5nOiA1cHggMjBweDtcXG4gICAgICBiYWNrZ3JvdW5kOiAjZTI3ZDFlO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gIC5tb2RhbC5jbG9zZWQge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47IH1cXG4gICAgLm1vZGFsLmNsb3NlZCAuYmFja2dyb3VuZCB7XFxuICAgICAgb3BhY2l0eTogMDsgfVxcbiAgICAubW9kYWwuY2xvc2VkIC5jb250ZW50IHtcXG4gICAgICBvcGFjaXR5OiAwO1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg0MHB4KTsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIi8vIExvYWQgdGhlIGphdmFzY3JpcHQgbWFpblxyXG5pbXBvcnQgXCIuL2pzL21haW5cIjtcclxuaW1wb3J0IFwiLi90cy9cIjtcclxuXHJcbi8vIExvYWQgdGhlIFNBU1MgbWFpblxyXG5pbXBvcnQgXCIuL3Njc3MvYXBwLnNjc3NcIjsiLCJkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKT0+e1xyXG4gICBjb25zb2xlLmxvZyhcIldlYnBhY2sgdGVtcGxhdGUgbG9hZGVkLlwiKTtcclxufSk7IiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9hcHAuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiZXhwb3J0IGNsYXNzIERlYnVnU2V0dGluZ3N7XHJcbiAgIGRyYXdDb2xsaWRlcnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgZHJhd1RpbGVtYXA6IGJvb2xlYW4gPSBmYWxzZTtcclxufSIsImltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcInNjZW5lL1NjZW5lXCI7XHJcbmltcG9ydCB7IG5vdyB9IGZyb20gXCJ1dGlsL1RpbWVcIjtcclxuaW1wb3J0IHsgRGVidWdTZXR0aW5ncyB9IGZyb20gXCIuL0RlYnVnU2V0dGluZ3NcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9JbnB1dFwiO1xyXG5pbXBvcnQgeyBQaHlzaWNzIH0gZnJvbSBcIi4vUGh5c2ljc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWV7ICAgXHJcbiAgIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICBcclxuICAgZml4ZWRVcGRhdGVUaW1lOiBudW1iZXIgPSAxIC8gNjA7XHJcbiAgIGludGVyVXBkYXRlVGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIHByaXZhdGUgcnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBwcml2YXRlIGFuaW1hdGlvbkZyYW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgc2NlbmU/OiBTY2VuZTtcclxuICAgZ3JhcGhpY3M6IEdyYXBoaWNzO1xyXG4gICBpbnB1dDogSW5wdXQ7XHJcbiAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICBkZWJ1Z1NldHRpbmdzOiBEZWJ1Z1NldHRpbmdzO1xyXG5cclxuICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCl7XHJcbiAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoY2FudmFzKTtcclxuICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dChjYW52YXMpO1xyXG4gICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHRoaXMudXBkYXRlU2l6ZSgpKTtcclxuICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcblxyXG4gICAgICB0aGlzLmRlYnVnU2V0dGluZ3MgPSBuZXcgRGVidWdTZXR0aW5ncygpO1xyXG4gICAgICAod2luZG93IGFzIGFueSkuZGVidWdTZXR0aW5ncyA9IHRoaXMuZGVidWdTZXR0aW5ncztcclxuICAgfVxyXG5cclxuICAgcnVuKCl7XHJcbiAgICAgIGlmKHRoaXMucnVubmluZykgcmV0dXJuO1xyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZT8uaW5pdCh0aGlzKTtcclxuXHJcbiAgICAgIHRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xyXG4gICB9XHJcblxyXG4gICBzdG9wKCl7XHJcbiAgICAgIHRoaXMuX2NhbmNlbEFuaW1hdGlvbkZyYW1lKCk7XHJcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoKXtcclxuICAgICAgdGhpcy5fcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XHJcblxyXG4gICAgICBsZXQgbiA9IG5vdygpO1xyXG4gICAgICBsZXQgZGVsdGEgPSBuIC0gdGhpcy5jdXJyZW50VGltZTtcclxuICAgICAgdGhpcy5jdXJyZW50VGltZSA9IG47XHJcblxyXG4gICAgICBpZihkZWx0YSA+IDAuMSl7IGRlbHRhID0gMC4xOyB9XHJcblxyXG4gICAgICB0aGlzLmlucHV0LnBvbGwoKTtcclxuXHJcbiAgICAgIHRoaXMuaW50ZXJVcGRhdGVUaW1lICs9IGRlbHRhO1xyXG4gICAgICBcclxuICAgICAgLy8gVE9ETyBmaXggdGhlIGlzc3VlIHdoZXJlIHdlIGFyZSBsYWdnaW5nIGJlaGluZCFcclxuICAgICAgLy8gaWYgdGhlcmUgYXJlIHRvbyBtYW55IHVwZGF0ZXMgYXQgb25jZSBhbmQgd2UgY2FuJ3Qga2VlcCB1cCwgd2UgbmVlZCB0byBkdW1wIHNvbWUgZnJhbWVzXHJcbiAgICAgIC8vIGFuZCBzZW5kIGEgd2FybmluZy5cclxuICAgICAgd2hpbGUodGhpcy5pbnRlclVwZGF0ZVRpbWUgPiB0aGlzLmZpeGVkVXBkYXRlVGltZSl7XHJcbiAgICAgICAgIHRoaXMuaW50ZXJVcGRhdGVUaW1lIC09IHRoaXMuZml4ZWRVcGRhdGVUaW1lO1xyXG4gICAgICAgICB0aGlzLnNjZW5lPy5maXhlZFVwZGF0ZSh0aGlzLmZpeGVkVXBkYXRlVGltZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY2VuZT8udXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgIHRoaXMuZ3JhcGhpY3MucmVzZXQoKTtcclxuICAgICAgdGhpcy5ncmFwaGljcy5jbGVhclNjcmVlbigpO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZT8uZHJhdyh0aGlzLmdyYXBoaWNzKTtcclxuXHJcbiAgICAgIHRoaXMuaW5wdXQuZmx1c2goKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlU2l6ZSgpe1xyXG4gICAgICB0aGlzLmdyYXBoaWNzLnVwZGF0ZVNpemUoKTtcclxuICAgICAgdGhpcy5zY2VuZT8udXBkYXRlU2l6ZSgpO1xyXG4gICB9XHJcblxyXG4gICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUoKXtcclxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XHJcbiAgIH1cclxuXHJcbiAgIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKXtcclxuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgfVxyXG59IiwiLy8gQ29udHJvbGxlciBtYXAhXHJcbmV4cG9ydCBjbGFzcyBHYW1lcGFkSW5wdXR7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQXhpc0xlZnRYID0gMDtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBeGlzTGVmdFkgPSAxO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEF4aXNSaWdodFggPSAyO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEF4aXNSaWdodFkgPSAzO1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25BID0gMDtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25CID0gMTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25YID0gMjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25ZID0gMztcclxuICAgXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uRHBhZFVwID0gMTI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uRHBhZERvd24gPSAxMztcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25EcGFkTGVmdCA9IDE0O1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkRwYWRSaWdodCA9IDE1O1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25MZWZ0QnVtcGVyID0gNDtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25SaWdodEJ1bXBlciA9IDU7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uTGVmdFRyaWdnZXIgPSA2O1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblJpZ2h0VHJpZ2dlciA9IDc7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbk1lbnUgPSA4O1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblN0YXJ0ID0gOTtcclxuXHJcbiAgIHByZXZpb3VzQnV0dG9uU3RhdGU6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICBidXR0b25TdGF0ZTogYm9vbGVhbltdID0gW107XHJcbiAgIFxyXG4gICBheGlzU3RhdGU6IG51bWJlcltdID0gW107XHJcblxyXG4gICBpbmRleDogbnVtYmVyO1xyXG5cclxuICAgZGVhZFpvbmU6IG51bWJlciA9IDAuMjtcclxuICAgZnVsbFpvbmU6IG51bWJlciA9IDAuNDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGluZGV4OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgICBsZXQgZ2FtZXBhZCA9IHRoaXMuZ2V0TmF2aWdhdG9yR2FtZXBhZCgpITtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lcGFkLmJ1dHRvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICB0aGlzLnByZXZpb3VzQnV0dG9uU3RhdGUucHVzaChmYWxzZSk7XHJcbiAgICAgICAgIHRoaXMuYnV0dG9uU3RhdGUucHVzaChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWVwYWQuYXhlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMuYXhpc1N0YXRlLnB1c2goMCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcG9sbCgpe1xyXG4gICAgICAvLyBTd2FwIHRoZSBvbGQgYW5kIHRoZSBuZXcgb25lLCBjb3B5IHRvIHRoZSBuZXdcclxuICAgICAgbGV0IHRlbXAgPSB0aGlzLnByZXZpb3VzQnV0dG9uU3RhdGU7XHJcbiAgICAgIHRoaXMucHJldmlvdXNCdXR0b25TdGF0ZSA9IHRoaXMuYnV0dG9uU3RhdGU7XHJcbiAgICAgIHRoaXMuYnV0dG9uU3RhdGUgPSB0ZW1wO1xyXG5cclxuICAgICAgbGV0IGdhbWVwYWQgPSB0aGlzLmdldE5hdmlnYXRvckdhbWVwYWQoKSE7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZXBhZC5idXR0b25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgdGhpcy5idXR0b25TdGF0ZVtpXSA9IGdhbWVwYWQuYnV0dG9uc1tpXS5wcmVzc2VkO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lcGFkLmF4ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICB0aGlzLmF4aXNTdGF0ZVtpXSA9IGdhbWVwYWQuYXhlc1tpXTtcclxuXHJcbiAgICAgICAgIGlmKE1hdGguYWJzKHRoaXMuYXhpc1N0YXRlW2ldKSA8IHRoaXMuZGVhZFpvbmUpIHRoaXMuYXhpc1N0YXRlW2ldID0gMDsgXHJcbiAgICAgICAgIGlmKE1hdGguYWJzKHRoaXMuYXhpc1N0YXRlW2ldKSA+IDEgLSB0aGlzLmZ1bGxab25lKSB0aGlzLmF4aXNTdGF0ZVtpXSA9IE1hdGguc2lnbih0aGlzLmF4aXNTdGF0ZVtpXSk7IFxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGlzQnV0dG9uUHJlc3NlZChidXR0b25JbmRleDogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uU3RhdGVbYnV0dG9uSW5kZXhdICYmICF0aGlzLnByZXZpb3VzQnV0dG9uU3RhdGVbYnV0dG9uSW5kZXhdO1xyXG4gICB9XHJcbiAgIGlzQnV0dG9uRG93bihidXR0b25JbmRleDogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uU3RhdGVbYnV0dG9uSW5kZXhdO1xyXG4gICB9XHJcbiAgIGlzQnV0dG9uUmVsZWFzZWQoYnV0dG9uSW5kZXg6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiAhdGhpcy5idXR0b25TdGF0ZVtidXR0b25JbmRleF0gJiYgdGhpcy5wcmV2aW91c0J1dHRvblN0YXRlW2J1dHRvbkluZGV4XTtcclxuICAgfVxyXG5cclxuICAgZ2V0IGxlZnRBeGlzWCgpIHsgcmV0dXJuIHRoaXMuYXhpc1N0YXRlW0dhbWVwYWRJbnB1dC5BeGlzTGVmdFhdO31cclxuICAgZ2V0IGxlZnRBeGlzWSgpIHsgcmV0dXJuIHRoaXMuYXhpc1N0YXRlW0dhbWVwYWRJbnB1dC5BeGlzTGVmdFldO31cclxuICAgZ2V0IHJpZ2h0QXhpc1goKSB7IHJldHVybiB0aGlzLmF4aXNTdGF0ZVtHYW1lcGFkSW5wdXQuQXhpc1JpZ2h0WF07fVxyXG4gICBnZXQgcmlnaHRBeGlzWSgpIHsgcmV0dXJuIHRoaXMuYXhpc1N0YXRlW0dhbWVwYWRJbnB1dC5BeGlzUmlnaHRZXTt9XHJcblxyXG4gICBnZXROYXZpZ2F0b3JHYW1lcGFkKCl7XHJcbiAgICAgIGNvbnN0IHBhZHMgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKTtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwYWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgbGV0IHBhZCA9IHBhZHNbaV07XHJcbiAgICAgICAgIGlmKHBhZCA9PT0gbnVsbCkgY29udGludWU7XHJcbiAgICAgICAgIGlmKHBhZC5pbmRleCA9PT0gdGhpcy5pbmRleCkgcmV0dXJuIHBhZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgfVxyXG59XHJcblxyXG50eXBlIEtleSA9IHN0cmluZztcclxudHlwZSBNb3VzZUJ1dHRvbiA9IG51bWJlcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlib2FyZHtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlFbnRlciA6IEtleSA9IFwiRW50ZXJcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlUYWIgOiBLZXkgPSBcIlRhYlwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleVNwYWNlIDogS2V5ID0gXCIgXCI7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUMgOiBLZXkgPSBcImNcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlYIDogS2V5ID0gXCJ4XCI7XHJcbiAgIFxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUEgOiBLZXkgPSBcImFcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlEIDogS2V5ID0gXCJkXCI7XHJcbiAgIFxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUNvbW1hIDogS2V5ID0gXCIsXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5UGVyaW9kIDogS2V5ID0gXCIuXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5U2xhc2ggOiBLZXkgPSBcIi9cIjtcclxuICAgXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QXJyb3dVcCA6IEtleSA9IFwiQXJyb3dVcFwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUFycm93RG93biA6IEtleSA9IFwiQXJyb3dEb3duXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QXJyb3dMZWZ0IDogS2V5ID0gXCJBcnJvd0xlZnRcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlBcnJvd1JpZ2h0IDogS2V5ID0gXCJBcnJvd1JpZ2h0XCI7XHJcblxyXG4gICBkb3duS2V5czogU2V0PEtleT47XHJcbiAgIHByZXNzZWRLZXlzOiBTZXQ8S2V5PjtcclxuICAgcmVsZWFzZWRLZXlzOiBTZXQ8S2V5PjtcclxuXHJcbiAgIHJvb3Q/OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHJvb3Q/OiBIVE1MRWxlbWVudCl7XHJcbiAgICAgIHRoaXMuZG93bktleXMgPSBuZXcgU2V0PEtleT4oKTtcclxuICAgICAgdGhpcy5wcmVzc2VkS2V5cyA9IG5ldyBTZXQ8S2V5PigpO1xyXG4gICAgICB0aGlzLnJlbGVhc2VkS2V5cyA9IG5ldyBTZXQ8S2V5PigpO1xyXG5cclxuICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuICAgICAgdGhpcy5yb290ID0gZG9jdW1lbnQuYm9keTsgLy8gRnVja1xyXG4gICAgICB0aGlzLnJvb3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgaWYoZXZlbnQucmVwZWF0KSByZXR1cm47XHJcblxyXG4gICAgICAgICB0aGlzLnByZXNzZWRLZXlzLmFkZChldmVudC5rZXkpO1xyXG4gICAgICAgICB0aGlzLmRvd25LZXlzLmFkZChldmVudC5rZXkpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5yb290Py5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQgPT57XHJcbiAgICAgICAgIGlmKGV2ZW50LnJlcGVhdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgdGhpcy5yZWxlYXNlZEtleXMuYWRkKGV2ZW50LmtleSk7XHJcbiAgICAgICAgIHRoaXMuZG93bktleXMuZGVsZXRlKGV2ZW50LmtleSk7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBmbHVzaCgpe1xyXG4gICAgICB0aGlzLnByZXNzZWRLZXlzLmNsZWFyKCk7XHJcbiAgICAgIHRoaXMucmVsZWFzZWRLZXlzLmNsZWFyKCk7XHJcbiAgIH1cclxuXHJcbiAgIGlzS2V5RG93bihrZXk6IEtleSl7XHJcbiAgICAgIHJldHVybiB0aGlzLmRvd25LZXlzLmhhcyhrZXkpO1xyXG4gICB9XHJcbiAgIGlzS2V5UHJlc3NlZChrZXk6IEtleSl7XHJcbiAgICAgIHJldHVybiB0aGlzLnByZXNzZWRLZXlzLmhhcyhrZXkpO1xyXG4gICB9XHJcbiAgIGlzS2V5UmVsZWFzZWQoa2V5OiBLZXkpe1xyXG4gICAgICByZXR1cm4gdGhpcy5yZWxlYXNlZEtleXMuaGFzKGtleSk7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNle1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkxlZnQgOiBNb3VzZUJ1dHRvbiA9IDA7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uTWlkZGxlIDogTW91c2VCdXR0b24gPSAxO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblJpZ2h0IDogTW91c2VCdXR0b24gPSAyO1xyXG5cclxuICAgYnV0dG9uczogYm9vbGVhbltdO1xyXG4gICBidXR0b25zUHJlc3NlZDogYm9vbGVhbltdO1xyXG4gICBidXR0b25zUmVsZWFzZWQ6IGJvb2xlYW5bXTtcclxuXHJcbiAgIHg6IG51bWJlcjtcclxuICAgeTogbnVtYmVyO1xyXG4gICBwcmV2aW91c1g6IG51bWJlcjtcclxuICAgcHJldmlvdXNZOiBudW1iZXI7XHJcblxyXG4gICByb290OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHJvb3Q6IEhUTUxFbGVtZW50KXtcclxuICAgICAgdGhpcy5idXR0b25zID0gbmV3IEFycmF5KDEwKTtcclxuICAgICAgdGhpcy5idXR0b25zUHJlc3NlZCA9IG5ldyBBcnJheSgxMCk7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1JlbGVhc2VkID0gbmV3IEFycmF5KDEwKTtcclxuXHJcbiAgICAgIHRoaXMuYnV0dG9ucy5maWxsKGZhbHNlKTtcclxuICAgICAgdGhpcy5idXR0b25zUHJlc3NlZC5maWxsKGZhbHNlKTtcclxuICAgICAgdGhpcy5idXR0b25zUmVsZWFzZWQuZmlsbChmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLnJvb3QgPSByb290O1xyXG5cclxuICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgdGhpcy5wcmV2aW91c1ggPSAwO1xyXG4gICAgICB0aGlzLnByZXZpb3VzWSA9IDA7XHJcblxyXG4gICAgICBjb25zb2xlLmRpcihyb290KTtcclxuXHJcbiAgICAgIHJvb3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgcm9vdD8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xyXG4gICAgICByb290Py5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCl7XHJcbiAgICAgIHRoaXMueCA9IGV2ZW50Lm9mZnNldFggLyB0aGlzLnJvb3Qub2Zmc2V0V2lkdGg7XHJcbiAgICAgIHRoaXMueSA9IGV2ZW50Lm9mZnNldFkgLyB0aGlzLnJvb3Qub2Zmc2V0V2lkdGg7XHJcbiAgIH1cclxuICAgcHJpdmF0ZSBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCl7XHJcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNbZXZlbnQuYnV0dG9uXSA9IHRydWU7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1ByZXNzZWRbZXZlbnQuYnV0dG9uXSA9IHRydWU7XHJcbiAgIH1cclxuICAgcHJpdmF0ZSBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpe1xyXG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcclxuICAgICAgdGhpcy5idXR0b25zW2V2ZW50LmJ1dHRvbl0gPSBmYWxzZTtcclxuICAgICAgdGhpcy5idXR0b25zUmVsZWFzZWRbZXZlbnQuYnV0dG9uXSA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIGlzQnV0dG9uRG93bihidXR0b246IE1vdXNlQnV0dG9uKXtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uc1tidXR0b25dO1xyXG4gICB9XHJcbiAgIGlzQnV0dG9uUHJlc3NlZChidXR0b246IE1vdXNlQnV0dG9uKXtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uc1ByZXNzZWRbYnV0dG9uXTtcclxuICAgfVxyXG4gICBpc0J1dHRvblJlbGVhc2VkKGJ1dHRvbjogTW91c2VCdXR0b24pe1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25zUmVsZWFzZWRbYnV0dG9uXTtcclxuICAgfVxyXG5cclxuICAgZmx1c2goKXtcclxuICAgICAgdGhpcy5idXR0b25zUHJlc3NlZC5maWxsKGZhbHNlKTtcclxuICAgICAgdGhpcy5idXR0b25zUmVsZWFzZWQuZmlsbChmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLnByZXZpb3VzWCA9IHRoaXMueDtcclxuICAgICAgdGhpcy5wcmV2aW91c1kgPSB0aGlzLnk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBkZWx0YVgoKXtcclxuICAgICAgcmV0dXJuIHRoaXMueCAtIHRoaXMucHJldmlvdXNYO1xyXG4gICB9XHJcbiAgIGdldCBkZWx0YVkoKXtcclxuICAgICAgcmV0dXJuIHRoaXMueSAtIHRoaXMucHJldmlvdXNZO1xyXG4gICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXQge1xyXG4gICBnYW1lcGFkczogR2FtZXBhZElucHV0W107XHJcbiAgIGtleWJvYXJkOiBLZXlib2FyZDtcclxuICAgbW91c2U6IE1vdXNlO1xyXG5cclxuICAgcm9vdDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcihyb290OiBIVE1MRWxlbWVudCl7XHJcbiAgICAgIHRoaXMuZ2FtZXBhZHMgPSBbXTtcclxuICAgICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZChyb290KTtcclxuICAgICAgdGhpcy5tb3VzZSA9IG5ldyBNb3VzZShyb290KTtcclxuICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuXHJcbiAgICAgIC8vIFdlaXJkIGNvbnN0cnVjdGlvbiBidXQgdHlwZXNjcmlwdCBoYXRlcyBwcm9ncmVzcyBcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJnYW1lcGFkY29ubmVjdGVkXCIsIGV2ID0+IHtcclxuICAgICAgICAgbGV0IGV2ZW50ID0gZXYgYXMgR2FtZXBhZEV2ZW50O1xyXG5cclxuICAgICAgICAgY29uc29sZS5sb2coXCJHYW1lcGFkIGNvbm5lY3RlZC5cIik7XHJcblxyXG4gICAgICAgICB0aGlzLmdhbWVwYWRzLnB1c2gobmV3IEdhbWVwYWRJbnB1dChldmVudC5nYW1lcGFkLmluZGV4KSk7XHJcbiAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJnYW1lcGFkZGlzY29ubmVjdGVkXCIsIGV2ID0+IHtcclxuICAgICAgICAgbGV0IGV2ZW50ID0gZXYgYXMgR2FtZXBhZEV2ZW50O1xyXG5cclxuICAgICAgICAgY29uc29sZS5sb2coXCJHYW1lcGFkIGRpc2Nvbm5lY3RlZC5cIik7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVwYWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lcGFkc1tpXS5pbmRleCA9PT0gZXZlbnQuZ2FtZXBhZC5pbmRleCl7XHJcbiAgICAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKGluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgY29uc29sZS5sb2coXCJHYW1lcGFkIGZvdW5kLlwiKTtcclxuXHJcbiAgICAgICAgIHRoaXMuZ2FtZXBhZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBwb2xsKCl7XHJcbiAgICAgIHRoaXMuZ2FtZXBhZHMuZm9yRWFjaChwYWQgPT4gcGFkLnBvbGwoKSk7XHJcbiAgIH1cclxuICAgZmx1c2goKXtcclxuICAgICAgdGhpcy5rZXlib2FyZC5mbHVzaCgpO1xyXG4gICAgICB0aGlzLm1vdXNlLmZsdXNoKCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IHVuc3R1Y2sgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQ29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IFRpbGVDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9UaWxlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRpbGVtYXBDb2xsaXNpb25MYXllciwgVGlsZW1hcFRpbGVMYXllciB9IGZyb20gXCJ0aWxlbWFwL1RpbGVNYXBcIjtcclxuaW1wb3J0IHsgQ3VydmUgfSBmcm9tIFwidXRpbC9DdXJ2ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoeXNpY3N7XHJcbiAgIGJvZGllczogUmlnaWRib2R5W107XHJcbiAgIGxheWVyczogVGlsZW1hcENvbGxpc2lvbkxheWVyW107XHJcblxyXG4gICBpbnRlcnBvbGF0ZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLmJvZGllcyA9IFtdO1xyXG4gICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICB9XHJcblxyXG4gICBhZGRCb2R5KGJvZHk6IFJpZ2lkYm9keSl7XHJcbiAgICAgIHRoaXMuYm9kaWVzLnB1c2goYm9keSk7XHJcbiAgIH1cclxuICAgcmVtb3ZlQm9keShib2R5OiBSaWdpZGJvZHkpe1xyXG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmJvZGllcy5pbmRleE9mKGJvZHkpO1xyXG5cclxuICAgICAgaWYoaW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmJvZGllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICB9XHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYodGhpcy5pbnRlcnBvbGF0ZSl7XHJcbiAgICAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gbW90aW9uIHByZWRpY3Rpb24gYW5kIHN0dWZmXHJcbiAgICAgICAgICAgIGxldCBmID0gYm9keS5nYW1lLmludGVyVXBkYXRlVGltZSAvIGJvZHkuZ2FtZS5maXhlZFVwZGF0ZVRpbWU7XHJcbiAgIFxyXG4gICAgICAgICAgICBib2R5LnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi54ID0gQ3VydmUubGVycChib2R5LnByZXZpb3VzUG9zaXRpb24ueCwgYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueCwgZik7XHJcbiAgICAgICAgICAgIGJvZHkudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLnkgPSBDdXJ2ZS5sZXJwKGJvZHkucHJldmlvdXNQb3NpdGlvbi55LCBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi55LCBmKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgICAgYm9keS50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24uc2V0KGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIC8vIFNldCB0aGUgcHJldmlvdXMgcG9zaXRpb25zXHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgIGJvZHkucHJldmlvdXNQb3NpdGlvbi54ID0gYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueDtcclxuICAgICAgICAgYm9keS5wcmV2aW91c1Bvc2l0aW9uLnkgPSBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi55O1xyXG5cclxuICAgICAgICAgYm9keS51bnN0dWNrRGlzdGFuY2Uuc2V0WmVybygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIE1vdmUgYWxsIHRoZSBib2RpZXNcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueCArPSBib2R5LnZlbG9jaXR5LnggKiBkZWx0YTtcclxuICAgICAgICAgYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueSArPSBib2R5LnZlbG9jaXR5LnkgKiBkZWx0YTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBVbnN0dWNrIGFsbCB0aGUgYm9kaWVzXHJcbiAgICAgIGxldCB0aWxlQ29sbGlkZXIgPSBuZXcgVGlsZUNvbGxpZGVyKCk7XHJcbiAgICAgIGxldCB0aWxlQUFCQiA9IG5ldyBBQUJCKCk7XHJcbiAgICAgIGxldCB0aWxlUG9zaXRpb24gPSBuZXcgVmVjdG9yMigpO1xyXG5cclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgaWYoYm9keS5raW5lbWF0aWMpIHJldHVybjtcclxuXHJcbiAgICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYmJveCA9IGJvZHkuYm91bmRpbmdCb3g7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIEJCT1ggY29vcmRzXHJcbiAgICAgICAgICAgIGxldCBmcm9tWCA9IE1hdGguZmxvb3IoYmJveC5sZWZ0IC8gbGF5ZXIudGlsZW1hcC50aWxlV2lkdGgpO1xyXG4gICAgICAgICAgICBsZXQgdG9YID0gTWF0aC5mbG9vcihiYm94LnJpZ2h0IC8gbGF5ZXIudGlsZW1hcC50aWxlV2lkdGgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZyb21ZID0gTWF0aC5mbG9vcihiYm94LnRvcCAvIGxheWVyLnRpbGVtYXAudGlsZUhlaWdodCk7XHJcbiAgICAgICAgICAgIGxldCB0b1kgPSBNYXRoLmZsb29yKGJib3guYm90dG9tIC8gbGF5ZXIudGlsZW1hcC50aWxlSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IGZyb21YOyBpIDw9IHRvWDsgaSsrKXtcclxuICAgICAgICAgICAgICAgZm9yKGxldCBqID0gZnJvbVk7IGogPD0gdG9ZOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICBpZighbGF5ZXIuaXNUaWxlU29saWQoaSwgaikpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGlsZVBvc2l0aW9uLnggPSBpICogbGF5ZXIudGlsZW1hcC50aWxlV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgIHRpbGVQb3NpdGlvbi55ID0gaiAqIGxheWVyLnRpbGVtYXAudGlsZUhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHRpbGVDb2xsaWRlciA9IGxheWVyLmdldFRpbGVDb2xsaWRlcihpLCBqLCB0aWxlQ29sbGlkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGlsZUFBQkIgPSB0aWxlQ29sbGlkZXIuZ2V0Qm91bmRzKHRpbGVQb3NpdGlvbiwgdGlsZUFBQkIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYoIWJib3gub3ZlcmxhcHModGlsZUFBQkIpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGxldCB1bnN0dWNrRGlzdCA9IHVuc3R1Y2soXHJcbiAgICAgICAgICAgICAgICAgICAgIGJvZHkuY29sbGlkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIHRpbGVDb2xsaWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgdGlsZVBvc2l0aW9uLnN1Yihib2R5LnRyYW5zZm9ybS5wb3NpdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgIGJvZHkudmVsb2NpdHlcclxuICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmKHVuc3R1Y2tEaXN0ICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi5hZGQodW5zdHVja0Rpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICBib2R5LnVuc3R1Y2tEaXN0YW5jZS5hZGQodW5zdHVja0Rpc3QpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyB0aGlzLnBlcmZvcm1Db2xsaXNpb24oYm9keSwgYmJveCwgdGlsZUFBQkIpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVE9ETyBicm9hZHBoYXNlIG5hcnJvdyBwaGFzZSBzdHVmZiA6KVxyXG4gICAgICAvLyBNYXliZSBzdGFydCB3aXRoIHN3ZWVwIGFuZCBwcnVuZVxyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBpZihib2R5LnNvbGlkKSByZXR1cm47XHJcbiAgICAgICAgIGlmKGJvZHkua2luZW1hdGljKSByZXR1cm47XHJcblxyXG4gICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKG90aGVyID0+IHtcclxuICAgICAgICAgICAgaWYoIW90aGVyLnNvbGlkKSByZXR1cm47XHJcbiAgIFxyXG4gICAgICAgICAgICBsZXQgYmJveCA9IGJvZHkuYm91bmRpbmdCb3g7XHJcbiAgICAgICAgICAgIGxldCBvdGhlcmJib3ggPSBvdGhlci5ib3VuZGluZ0JveDtcclxuXHJcbiAgICAgICAgICAgIGlmKCFiYm94Lm92ZXJsYXBzKG90aGVyYmJveCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCB1bnN0dWNrRGlzdCA9IHVuc3R1Y2soXHJcbiAgICAgICAgICAgICAgIGJvZHkuY29sbGlkZXIsXHJcbiAgICAgICAgICAgICAgIG90aGVyLmNvbGxpZGVyLFxyXG4gICAgICAgICAgICAgICBvdGhlci50cmFuc2Zvcm0ucG9zaXRpb24uY2xvbmUoKS5zdWIoYm9keS50cmFuc2Zvcm0ucG9zaXRpb24pLFxyXG4gICAgICAgICAgICAgICBib2R5LnZlbG9jaXR5KTsgLy8gVE9ETyByZWxhdGl2ZSB2ZWxvY2l0eVxyXG5cclxuICAgICAgICAgICAgaWYodW5zdHVja0Rpc3QgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgIGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLmFkZCh1bnN0dWNrRGlzdCk7XHJcbiAgICAgICAgICAgICAgIGJvZHkudW5zdHVja0Rpc3RhbmNlLmFkZCh1bnN0dWNrRGlzdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcblxyXG4gICAgICAgICBib2R5LmNvbGxpZGVkQm90dG9tID0gYm9keS51bnN0dWNrRGlzdGFuY2UueSA8IDA7XHJcbiAgICAgICAgIGJvZHkuY29sbGlkZWRUb3AgPSBib2R5LnVuc3R1Y2tEaXN0YW5jZS55ID4gMDtcclxuXHJcbiAgICAgICAgIGJvZHkuY29sbGlkZWRMZWZ0ID0gYm9keS51bnN0dWNrRGlzdGFuY2UueCA+IDA7XHJcbiAgICAgICAgIGJvZHkuY29sbGlkZWRSaWdodCA9IGJvZHkudW5zdHVja0Rpc3RhbmNlLnggPCAwO1xyXG5cclxuICAgICAgICAgaWYoYm9keS5jb2xsaWRlZExlZnQgfHwgYm9keS5jb2xsaWRlZFJpZ2h0KXtcclxuICAgICAgICAgICAgYm9keS52ZWxvY2l0eS54ID0gLWJvZHkudmVsb2NpdHkueCAqIGJvZHkuYm91bmN5bmVzcztcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihib2R5LmNvbGxpZGVkQm90dG9tIHx8IGJvZHkuY29sbGlkZWRUb3Ape1xyXG4gICAgICAgICAgICBib2R5LnZlbG9jaXR5LnkgPSAtYm9keS52ZWxvY2l0eS55ICogYm9keS5ib3VuY3luZXNzO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQSBsaXR0bGUgbW9yZSBvcHRpbWl6ZWQgYnV0IHN0aWxsIHJlYWxseSBmdWNraW5nIHN0dXBpZCA6KVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBsZXQgYm9keSA9IHRoaXMuYm9kaWVzW2ldO1xyXG5cclxuICAgICAgICAgbGV0IGJib3ggPSBib2R5LmJvdW5kaW5nQm94O1xyXG5cclxuICAgICAgICAgaWYoIWJvZHkudXNlRHluYW1pY0NvbGxpc2lvbnMpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgZm9yKGxldCBqID0gaSArIDE7IGogPCB0aGlzLmJvZGllcy5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgIGxldCBvdGhlciA9IHRoaXMuYm9kaWVzW2pdO1xyXG5cclxuICAgICAgICAgICAgaWYoIW90aGVyLnVzZUR5bmFtaWNDb2xsaXNpb25zKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKGJib3gub3ZlcmxhcHMob3RoZXIuYm91bmRpbmdCb3gpKXtcclxuICAgICAgICAgICAgICAgYm9keS5vbkNvbGxpc2lvbi5lbWl0KG90aGVyKTtcclxuICAgICAgICAgICAgICAgb3RoZXIub25Db2xsaXNpb24uZW1pdChib2R5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZHJhd0RlYnVnKGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICBsYXllci5kcmF3RGVidWcoZ3JhcGhpY3MsIGxheWVyLnRpbGVtYXAudGlsZVdpZHRoLCBsYXllci50aWxlbWFwLnRpbGVIZWlnaHQsIG5ldyBBQUJCKDAsIDAsIDEwMDAsIDEwMDApKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcihcInJnYmEoMjU1LDAsMCwgMC42KVwiKTtcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgaWYoIWJvZHkuc29saWQpIHJldHVybjtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGdyYXBoaWNzLmRyYXdBQUJCKGJvZHkuYm91bmRpbmdCb3gsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcihcInJnYmEoMCwyNTUsMCwgMC42KVwiKTtcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgaWYoYm9keS5zb2xpZCkgcmV0dXJuO1xyXG4gICAgICAgICBsZXQgY29sbGlkZXIgPSBib2R5LmJvdW5kaW5nQm94O1xyXG4gICAgICAgICBcclxuICAgICAgICAgZ3JhcGhpY3MuZHJhd0FBQkIoY29sbGlkZXIsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGdyYXBoaWNzLnNldENvbG9yKFwicmdiYSgwLDAsMjU1LCAwLjYpXCIpO1xyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBsZXQgdHJhbnNmb3JtID0gYm9keS50cmFuc2Zvcm07XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm0ucG9zaXRpb24ueCAtIDEsIHRyYW5zZm9ybS5wb3NpdGlvbi55IC0gMSxcclxuICAgICAgICAgICAgMiwgMiwgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL1Nwcml0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbntcclxuICAgZnJhbWVSYXRlOiBudW1iZXIgPSAxMjtcclxuICAgXHJcbiAgIHByaXZhdGUgc3ByaXRlczogU3ByaXRlW10gPSBbXTtcclxuICAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIC8vIFRPRE8gY2FwIHRoZSBfaW5kZXggdmFyaWFibGVcclxuICAgICAgdGhpcy5faW5kZXggKz0gZGVsdGEgKiB0aGlzLmZyYW1lUmF0ZTtcclxuICAgfVxyXG5cclxuICAgYWRkRnJhbWUoc3ByaXRlOiBTcHJpdGUpe1xyXG4gICAgICB0aGlzLnNwcml0ZXMucHVzaChzcHJpdGUpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgY2VudGVyKCl7XHJcbiAgICAgIHRoaXMuc3ByaXRlcy5mb3JFYWNoKHNwcml0ZSA9PiBzcHJpdGUuY2VudGVyKCkpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBcclxuICAgc2V0T2Zmc2V0KHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5zcHJpdGVzLmZvckVhY2goc3ByaXRlID0+IHNwcml0ZS5zZXRPZmZzZXQoeCwgeSkpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgZ2V0IGluZGV4KCl7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pbmRleCAlIHRoaXMuZnJhbWVzO1xyXG4gICB9XHJcbiAgIGdldCBmcmFtZXMoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlcy5sZW5ndGg7XHJcbiAgIH1cclxuICAgZ2V0IGZyYW1lKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbTWF0aC5mbG9vcih0aGlzLmluZGV4KV07XHJcbiAgIH1cclxuICAgZ2V0IGR1cmF0aW9uKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmZyYW1lcyAvIHRoaXMuZnJhbWVSYXRlO1xyXG4gICB9XHJcblxyXG4gICBjbG9uZSgpe1xyXG4gICAgICBsZXQgYSA9ICBuZXcgQW5pbWF0aW9uKCk7XHJcbiAgICAgIFxyXG4gICAgICBhLl9pbmRleCA9IHRoaXMuX2luZGV4O1xyXG4gICAgICBhLmZyYW1lUmF0ZSA9IHRoaXMuZnJhbWVSYXRlO1xyXG4gICAgICBhLnNwcml0ZXMgPSB0aGlzLnNwcml0ZXM7XHJcblxyXG4gICAgICByZXR1cm4gYTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmF7XHJcbiAgIGNlbnRlcjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDY0MCAvIDIsIDM2MCAvIDIpO1xyXG5cclxuICAgLy8gVE9ETyB0aGlzIHNob3VsZG4ndCBiZSBkZWZpbmVkIGxpa2UgdGhpcywgYmVjYXVzZSB0aGlzIGRlcGVuZHMgb24gdGhlIHNjcmVlbiBhc3BlY3QgcmF0aW8uLi5cclxuICAgd2lkdGg6IG51bWJlciA9IDY0MDtcclxuICAgaGVpZ2h0OiBudW1iZXIgPSAzNjA7XHJcblxyXG4gICBnZXRCb3VuZHMoYWFiYj86IEFBQkIpe1xyXG4gICAgICBpZihhYWJiID09PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICBhYWJiID0gbmV3IEFBQkIoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGFhYmIuc2V0KFxyXG4gICAgICAgICB0aGlzLmNlbnRlci54IC0gdGhpcy53aWR0aCAvIDIsXHJcbiAgICAgICAgIHRoaXMuY2VudGVyLnkgLSB0aGlzLmhlaWdodCAvIDIsXHJcbiAgICAgICAgIHRoaXMuY2VudGVyLnggKyB0aGlzLndpZHRoIC8gMixcclxuICAgICAgICAgdGhpcy5jZW50ZXIueSArIHRoaXMuaGVpZ2h0IC8gMlxyXG4gICAgICApO1xyXG4gICB9XHJcblxyXG4gICBzY3JlZW5Ub1dvcmxkWCh4OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4geCAqIHRoaXMud2lkdGggKyB0aGlzLmNlbnRlci54IC0gdGhpcy53aWR0aCAvIDI7XHJcbiAgIH1cclxuICAgLy8gc2NyZWVuVG9Xb3JsZFkoeTogbnVtYmVyKXtcclxuICAgLy8gICAgcmV0dXJuIHkgKiB0aGlzLmhlaWdodCArIHRoaXMuY2VudGVyLnkgLSB0aGlzLmhlaWdodCAvIDI7XHJcbiAgIC8vIH1cclxuICAgc2NyZWVuVG9Xb3JsZFkoeTogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIHkgKiB0aGlzLndpZHRoICsgdGhpcy5jZW50ZXIueSAtIHRoaXMud2lkdGggLyAyO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi9DYW1lcmFcIjtcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vU3ByaXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JhcGhpY3N7XHJcbiAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgY29sb3I6IHN0cmluZyA9IFwid2hpdGVcIjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpe1xyXG4gICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSE7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgfVxyXG5cclxuICAgcmVzZXQoKXtcclxuICAgICAgdGhpcy5jb250ZXh0LnJlc2V0VHJhbnNmb3JtKCk7XHJcbiAgIH1cclxuXHJcbiAgIGNsZWFyU2NyZWVuKCl7XHJcbiAgICAgIHRoaXMuY2xlYXIoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgIH1cclxuXHJcbiAgIGNsZWFyKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdTcHJpdGUoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZVg6IG51bWJlciA9IDEsIHNjYWxlWTogbnVtYmVyID0gMSwgcm90YXRpb246IG51bWJlciA9IDApe1xyXG4gICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xyXG5cclxuICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh4LCB5KTtcclxuICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcclxuICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShyb3RhdGlvbik7XHJcblxyXG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHNwcml0ZS5pbWFnZSwgXHJcbiAgICAgICAgIHNwcml0ZS5zb3VyY2VYLCBzcHJpdGUuc291cmNlWSwgc3ByaXRlLnNvdXJjZVdpZHRoLCBzcHJpdGUuc291cmNlSGVpZ2h0LFxyXG4gICAgICAgICAtIHNwcml0ZS5vZmZzZXRYLCAtIHNwcml0ZS5vZmZzZXRZLCBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHQpO1xyXG5cclxuICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuICAgfVxyXG5cclxuICAgZHJhd1Nwcml0ZVNpbXBsZShzcHJpdGU6IFNwcml0ZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHNwcml0ZS5pbWFnZSwgXHJcbiAgICAgICAgIHNwcml0ZS5zb3VyY2VYLCBzcHJpdGUuc291cmNlWSwgc3ByaXRlLnNvdXJjZVdpZHRoLCBzcHJpdGUuc291cmNlSGVpZ2h0LFxyXG4gICAgICAgICB4IC0gc3ByaXRlLm9mZnNldFgsIHkgLSBzcHJpdGUub2Zmc2V0WSwgc3ByaXRlLndpZHRoLCBzcHJpdGUuaGVpZ2h0KTtcclxuICAgfVxyXG5cclxuICAgZHJhd1JlY3RhbmdsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGZpbGw6IGJvb2xlYW4pe1xyXG4gICAgICBpZihmaWxsKXtcclxuICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICB0aGlzLmNvbnRleHQucmVjdCh4LCB5LCB3LCBoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBkcmF3QUFCQihhYWJiOiBBQUJCLCBmaWxsOiBib29sZWFuKXtcclxuICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKGFhYmIubGVmdCwgYWFiYi50b3AsIGFhYmIud2lkdGgsIGFhYmIuaGVpZ2h0LCBmaWxsKTtcclxuICAgfVxyXG5cclxuICAgc2V0Q2FtZXJhKGNhbWVyYTogQ2FtZXJhKXtcclxuICAgICAgdGhpcy5jb250ZXh0LnJlc2V0VHJhbnNmb3JtKCk7XHJcblxyXG4gICAgICBsZXQgY2FtZXJhSGVpZ2h0ID0gY2FtZXJhLmhlaWdodDtcclxuICAgICAgbGV0IGNhbWVyYVdpZHRoID0gY2FtZXJhLndpZHRoOy8vdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQgKiBjYW1lcmFIZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLmNvbnRleHQuc2NhbGUoMSAvIGNhbWVyYVdpZHRoLCAxIC8gY2FtZXJhSGVpZ2h0KTtcclxuICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSgtKGNhbWVyYS5jZW50ZXIueCAtIGNhbWVyYVdpZHRoIC8gMiksIC0oY2FtZXJhLmNlbnRlci55IC0gY2FtZXJhSGVpZ2h0IC8gMikpO1xyXG4gICB9XHJcblxyXG4gICBzZXRDb2xvcihjb2xvcjogc3RyaW5nKXtcclxuICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICB9XHJcbiAgIGdldENvbG9yKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGVTaXplKCl7XHJcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXMub2Zmc2V0V2lkdGg7XHJcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzLm9mZnNldEhlaWdodDtcclxuICAgICAgdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gXCJsb3dcIjtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcIi4vQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcIi4vR3JhcGhpY3NcIjtcclxuXHJcbmNsYXNzIFBhcnRpY2xle1xyXG4gICBwb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgIHNjYWxlOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoMSwgMSk7XHJcbiAgIGxpZmV0aW1lOiBudW1iZXIgPSAwO1xyXG4gICBhbmltYXRpb246IEFuaW1hdGlvbnx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBQYXJ0aWNsZVN5c3RlbXtcclxuICAgcGFydGljbGVzOiBQYXJ0aWNsZVtdO1xyXG4gICBpbmRleDogbnVtYmVyO1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBuZXcgQXJyYXkoMTApO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0gPSBuZXcgUGFydGljbGUoKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5pbmRleCA9IDA7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0ubGlmZXRpbWUgLT0gZGVsdGE7XHJcbiAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLmFuaW1hdGlvbj8udXBkYXRlKGRlbHRhKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIGxldCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzW2ldO1xyXG5cclxuICAgICAgICAgaWYocGFydGljbGUuYW5pbWF0aW9uID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICBpZihwYXJ0aWNsZS5saWZldGltZSA8PSAwKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGUocGFydGljbGUuYW5pbWF0aW9uLmZyYW1lLCBwYXJ0aWNsZS5wb3NpdGlvbi54LCBwYXJ0aWNsZS5wb3NpdGlvbi55LCBwYXJ0aWNsZS5zY2FsZS54LCBwYXJ0aWNsZS5zY2FsZS55KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBhZGRQYXJ0aWNsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgYW5pbWF0aW9uOiBBbmltYXRpb24sIHhTY2FsZTogbnVtYmVyID0gMSwgeVNjYWxlOiBudW1iZXIgPSAxKXtcclxuICAgICAgbGV0IHBhcnRpY2xlID0gdGhpcy5wYXJ0aWNsZXNbdGhpcy5pbmRleF07XHJcblxyXG4gICAgICBwYXJ0aWNsZS5wb3NpdGlvbi54ID0geDtcclxuICAgICAgcGFydGljbGUucG9zaXRpb24ueSA9IHk7XHJcbiAgICAgIHBhcnRpY2xlLnNjYWxlLnggPSB4U2NhbGU7XHJcbiAgICAgIHBhcnRpY2xlLnNjYWxlLnkgPSB5U2NhbGU7XHJcbiAgICAgIFxyXG4gICAgICBwYXJ0aWNsZS5hbmltYXRpb24gPSBhbmltYXRpb24uY2xvbmUoKTtcclxuICAgICAgcGFydGljbGUubGlmZXRpbWUgPSBhbmltYXRpb24uZHVyYXRpb247XHJcblxyXG4gICAgICB0aGlzLmluZGV4Kys7XHJcblxyXG4gICAgICBpZih0aGlzLmluZGV4ID49IHRoaXMucGFydGljbGVzLmxlbmd0aCl7XHJcbiAgICAgICAgIHRoaXMuaW5kZXggLT0gdGhpcy5wYXJ0aWNsZXMubGVuZ3RoO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL0FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZXtcclxuICAgaW1hZ2U6IENhbnZhc0ltYWdlU291cmNlO1xyXG5cclxuICAgb2Zmc2V0WDogbnVtYmVyID0gMDtcclxuICAgb2Zmc2V0WTogbnVtYmVyID0gMDtcclxuXHJcbiAgIHNvdXJjZVg6IG51bWJlciA9IDA7XHJcbiAgIHNvdXJjZVk6IG51bWJlciA9IDA7XHJcbiAgIHNvdXJjZVdpZHRoOiBudW1iZXIgPSAwO1xyXG4gICBzb3VyY2VIZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgIFxyXG4gICBjb25zdHJ1Y3RvcihpbWFnZTogQ2FudmFzSW1hZ2VTb3VyY2Upe1xyXG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcblxyXG4gICAgICB0aGlzLnNvdXJjZVdpZHRoID0gaW1hZ2Uud2lkdGggYXMgbnVtYmVyO1xyXG4gICAgICB0aGlzLnNvdXJjZUhlaWdodCA9IGltYWdlLmhlaWdodCBhcyBudW1iZXI7XHJcbiAgIH1cclxuXHJcbiAgIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMuc291cmNlV2lkdGg7IH1cclxuICAgZ2V0IGhlaWdodCgpIHsgcmV0dXJuIHRoaXMuc291cmNlSGVpZ2h0OyB9XHJcblxyXG4gICBjZW50ZXIoKXtcclxuICAgICAgdGhpcy5vZmZzZXRYID0gdGhpcy53aWR0aCAvIDI7XHJcbiAgICAgIHRoaXMub2Zmc2V0WSA9IHRoaXMuaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIHNldE9mZnNldCh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHRoaXMub2Zmc2V0WCA9IHg7XHJcbiAgICAgIHRoaXMub2Zmc2V0WSA9IHk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlU2hlZXR7XHJcbiAgIGltYWdlOiBDYW52YXNJbWFnZVNvdXJjZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGltYWdlOiBDYW52YXNJbWFnZVNvdXJjZSl7XHJcbiAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgfVxyXG5cclxuICAgZ2V0U3ByaXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcil7XHJcbiAgICAgIGxldCBzcHJpdGUgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2UpO1xyXG5cclxuICAgICAgc3ByaXRlLnNvdXJjZVggPSB4O1xyXG4gICAgICBzcHJpdGUuc291cmNlWSA9IHk7XHJcbiAgICAgIHNwcml0ZS5zb3VyY2VXaWR0aCA9IHc7XHJcbiAgICAgIHNwcml0ZS5zb3VyY2VIZWlnaHQgPSBoO1xyXG5cclxuICAgICAgcmV0dXJuIHNwcml0ZTtcclxuICAgfVxyXG4gICBcclxuICAgZ2V0QW5pbWF0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgY291bnQ6IG51bWJlcil7XHJcbiAgICAgIGxldCBhbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKCk7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKyl7XHJcbiAgICAgICAgIGxldCBzcHJpdGUgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2UpO1xyXG4gICBcclxuICAgICAgICAgc3ByaXRlLnNvdXJjZVggPSB4ICsgaSAqIHc7XHJcbiAgICAgICAgIHNwcml0ZS5zb3VyY2VZID0geTtcclxuICAgICAgICAgc3ByaXRlLnNvdXJjZVdpZHRoID0gdztcclxuICAgICAgICAgc3ByaXRlLnNvdXJjZUhlaWdodCA9IGg7XHJcblxyXG4gICAgICAgICBhbmltYXRpb24uYWRkRnJhbWUoc3ByaXRlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGZyb21IVE1MKGlkOiBzdHJpbmcpe1xyXG4gICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBTcHJpdGVTaGVldChlbGVtZW50KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBHYW1lcGFkSW5wdXQsIEtleWJvYXJkIH0gZnJvbSBcImVuZ2luZS9JbnB1dFwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiZ3JhcGhpY3MvQ2FtZXJhXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSwgU3ByaXRlU2hlZXQgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcbmltcG9ydCB7IENoZXN0R2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvQ2hlc3RHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IENvbGxpZGVyR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvQ29sbGlkZXJHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEZlYXRoZXJHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9GZWF0aGVyR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBMZXZlbE1hbmFnZXIgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL0xldmVsTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyRmluaXNoR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyRmluaXNoR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllclNwYXduR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyU3Bhd25HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFNwaWtlc0dhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL1NwaWtlc0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwic2NlbmUvU2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZU1hcCB9IGZyb20gXCJ0aWxlbWFwL1RpbGVNYXBcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcInV0aWwvTGlzdFwiO1xyXG5cclxuLy8gRnVjayB0aGlzIGJ1dCB3aGF0ZXZlclxyXG5mdW5jdGlvbiBpbml0TW9kYWwoZWxlbWVudDogSFRNTEVsZW1lbnQpe1xyXG4gICBsZXQgY2xvc2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIik7XHJcblxyXG4gICBjbG9zZT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcclxuXHJcbiAgICAgIC8vIFllcyB0aGlzIG1ha2VzIGEgbG90IG9mIHNlbnNlIGhlcmUgOilcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdE1vZGFscygpe1xyXG4gICBsZXQgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKTtcclxuXHJcbiAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IGluaXRNb2RhbChtb2RhbCBhcyBIVE1MRWxlbWVudCkpO1xyXG59XHJcblxyXG4vLyBJbml0IHRoZSBkYW1uIGdhbWVcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCk9PntcclxuICAgaW5pdE1vZGFscygpO1xyXG5cclxuICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgbGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xyXG4gICBcclxuICAgbGV0IHNjZW5lID0gbmV3IFNjZW5lKCk7XHJcblxyXG4gICBzY2VuZS50aWxlbWFwID0gYXdhaXQgVGlsZU1hcC5mcm9tVGlsZWRNYXBEb3dubG9hZChcImFzc2V0cy9sZXZlbHMvbGV2ZWw0Lmpzb25cIiwgKG9iaikgPT4ge1xyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJDb2xsaWRlclwiIHx8IG9iai50eXBlID09PSBcIlBsYXRmb3JtQ29sbGlkZXJcIil7XHJcbiAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IENvbGxpZGVyR2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKTtcclxuICAgICAgfVxyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJMZXZlbE1hbmFnZXJcIil7XHJcbiAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IExldmVsTWFuYWdlcigpKTtcclxuICAgICAgfVxyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJQbGF5ZXJTcGF3blwiKXtcclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgUGxheWVyU3Bhd25HYW1lT2JqZWN0KEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSkpXHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqLnR5cGUgPT09IFwiQ2hlY2twb2ludFwiKXtcclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSlcclxuICAgICAgfVxyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJGZWF0aGVyXCIpe1xyXG4gICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBGZWF0aGVyR2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKVxyXG4gICAgICB9XHJcbiAgICAgIGlmKG9iai50eXBlID09PSBcIlBsYXllckZpbmlzaFwiKXtcclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgUGxheWVyRmluaXNoR2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKVxyXG4gICAgICB9XHJcbiAgICAgIGlmKG9iai50eXBlID09PSBcIkNoZXN0XCIpe1xyXG4gICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBDaGVzdEdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqLnR5cGUgPT09IFwiU3Bpa2VzXCIpe1xyXG4gICAgICAgICBsZXQgc3Bpa2VzID0gbmV3IFNwaWtlc0dhbWVPYmplY3QoXHJcbiAgICAgICAgICAgIEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSwgXHJcbiAgICAgICAgICAgIExpc3QuaGFzKG9iai5wcm9wZXJ0aWVzLCBwcm9wID0+IHsgcmV0dXJuIHByb3AubmFtZSA9PT0gXCJzaHJpbmtcIiAmJiBwcm9wLnZhbHVlID09PSB0cnVlOyB9KVxyXG4gICAgICAgICApO1xyXG5cclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChzcGlrZXMpO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG4gICBzY2VuZS5waHlzaWNzLmxheWVycyA9IHNjZW5lLnRpbGVtYXAuY29sbGlkZXJzO1xyXG4gICBcclxuICAgZ2FtZS5zY2VuZSA9IHNjZW5lO1xyXG5cclxuICAgZ2FtZS5ydW4oKTtcclxufSk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbmFsIH0gZnJvbSBcInNpZ25hbHMvU2lnbmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhbHRoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBoZWFsdGg6IG51bWJlciA9IDM7XHJcblxyXG4gICBvbkRhbWFnZTogU2lnbmFsPEhlYWx0aENvbXBvbmVudD4gPSBuZXcgU2lnbmFsPEhlYWx0aENvbXBvbmVudD4oKTtcclxuICAgb25EZWF0aDogU2lnbmFsPEhlYWx0aENvbXBvbmVudD4gPSBuZXcgU2lnbmFsPEhlYWx0aENvbXBvbmVudD4oKTtcclxuXHJcbiAgIGdldCBhbGl2ZSgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoID4gMDsgfVxyXG4gICBnZXQgZGVhZCgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoIDw9IDA7IH1cclxuXHJcbiAgIGRhbWFnZShhbW91bnQ6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcclxuXHJcbiAgICAgIHRoaXMub25EYW1hZ2UuZW1pdCh0aGlzKTtcclxuICAgICAgXHJcbiAgICAgIGlmKHRoaXMuZGVhZCl7XHJcbiAgICAgICAgIHRoaXMub25EZWF0aC5lbWl0KHRoaXMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInNjZW5lL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgU2lnbmFsIH0gZnJvbSBcInNpZ25hbHMvU2lnbmFsXCI7XHJcbmltcG9ydCB7IEludGVyYWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9JbnRlcmFjdG9yQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3RhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBib2R5ITogUmlnaWRib2R5O1xyXG5cclxuICAgb25JbnRlcmFjdDogU2lnbmFsPEludGVyYWN0b3JDb21wb25lbnQ+O1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5vbkludGVyYWN0ID0gbmV3IFNpZ25hbDxJbnRlcmFjdG9yQ29tcG9uZW50PigpO1xyXG4gICB9XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBzdXBlci5pbml0KGdhbWUpO1xyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmdhbWVPYmplY3QuZmluZENvbXBvbmVudChjb21wb25lbnQgPT4gY29tcG9uZW50IGluc3RhbmNlb2YgUmlnaWRib2R5KSBhcyBSaWdpZGJvZHk7XHJcbiAgIH1cclxuXHJcbiAgIGludGVyYWN0KGludGVyYWN0b3I6IEludGVyYWN0b3JDb21wb25lbnQpe1xyXG4gICAgICB0aGlzLm9uSW50ZXJhY3QuZW1pdChpbnRlcmFjdG9yKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IGNhbkludGVyYWN0KCl7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcblxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGFibGVDb21wb25lbnQgfSBmcm9tIFwiLi9JbnRlcmFjdGFibGVDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdG9yQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBib2R5ITogUmlnaWRib2R5O1xyXG4gICBob3ZlcnM6IFNldDxJbnRlcmFjdGFibGVDb21wb25lbnQ+O1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5ob3ZlcnMgPSBuZXcgU2V0PEludGVyYWN0YWJsZUNvbXBvbmVudD4oKTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoY29tcG9uZW50ID0+IGNvbXBvbmVudCBpbnN0YW5jZW9mIFJpZ2lkYm9keSkgYXMgUmlnaWRib2R5O1xyXG5cclxuICAgICAgdGhpcy5ib2R5Lm9uQ29sbGlzaW9uLmxpc3Rlbih0aGlzLm9uQ29sbGlzaW9uLmJpbmQodGhpcykpO1xyXG4gICB9XHJcblxyXG4gICBpbnRlcmFjdCgpe1xyXG4gICAgICB0aGlzLmhvdmVycy5mb3JFYWNoKGhvdmVyID0+IHtcclxuICAgICAgICAgaWYoaG92ZXIuY2FuSW50ZXJhY3Qpe1xyXG4gICAgICAgICAgICBob3Zlci5pbnRlcmFjdCh0aGlzKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBsZXQgcmVtb3ZlTGlzdDogSW50ZXJhY3RhYmxlQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuaG92ZXJzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAvLyBJZiBubyBsb25nZXIgY29sbGlkZXMhXHJcbiAgICAgICAgIGlmKCF2YWx1ZS5ib2R5LmNvbGxpZGVzKHRoaXMuYm9keSkpe1xyXG4gICAgICAgICAgICByZW1vdmVMaXN0LnB1c2godmFsdWUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVtb3ZlTGlzdC5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5ob3ZlcnMuZGVsZXRlKGl0ZW0pKTtcclxuICAgfVxyXG5cclxuICAgb25Db2xsaXNpb24ob3RoZXI6IFJpZ2lkYm9keSl7XHJcbiAgICAgIGxldCBpbnRlcmFjdGlvbiA9IG90aGVyLmdhbWVPYmplY3QuZmluZENvbXBvbmVudChjb21wb25lbnQgPT4gY29tcG9uZW50IGluc3RhbmNlb2YgSW50ZXJhY3RhYmxlQ29tcG9uZW50KSBhcyBJbnRlcmFjdGFibGVDb21wb25lbnR8dW5kZWZpbmVkO1xyXG5cclxuICAgICAgaWYoaW50ZXJhY3Rpb24gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5ob3ZlcnMuYWRkKGludGVyYWN0aW9uKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZXBhZElucHV0LCBLZXlib2FyZCB9IGZyb20gXCJlbmdpbmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInNjZW5lL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllcklucHV0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBkaXJlY3Rpb246IG51bWJlciA9IDA7XHJcblxyXG4gICBqdW1wUHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBqdW1wRG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgZGFzaFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGludGVyYWN0UHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmp1bXBQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZGFzaFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5pbnRlcmFjdFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5qdW1wRG93biA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRpcmVjdGlvbiA9IDA7XHJcblxyXG4gICAgICAvLyBUT0RPIGFjdHVhbGx5IHN3aXRjaCBiZXR3ZWVuIGNvbnRyb2xsZXJzIGluc3RlYWQgb2YgdGhpcyBoYWxmIGJha2VkIGhhbGYgYXNzZWQgc29sdXRpb25cclxuICAgICAgdGhpcy5nYW1lLmlucHV0LmdhbWVwYWRzLmZvckVhY2gocGFkID0+IHtcclxuICAgICAgICAgaWYocGFkLmlzQnV0dG9uUHJlc3NlZChHYW1lcGFkSW5wdXQuQnV0dG9uQSkpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25YKSl7XHJcbiAgICAgICAgICAgIHRoaXMuaW50ZXJhY3RQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25SaWdodFRyaWdnZXIpKXtcclxuICAgICAgICAgICAgdGhpcy5kYXNoUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYocGFkLmlzQnV0dG9uRG93bihHYW1lcGFkSW5wdXQuQnV0dG9uQSkpe1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBEb3duID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBwYWQubGVmdEF4aXNYO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5U3BhY2UpKSB0aGlzLmp1bXBQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5RG93bihLZXlib2FyZC5LZXlTcGFjZSkpIHRoaXMuanVtcERvd24gPSB0cnVlO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleUMpKSB0aGlzLmRhc2hQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlYKSkgdGhpcy5pbnRlcmFjdFByZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5RG93bihLZXlib2FyZC5LZXlBcnJvd0xlZnQpKSB0aGlzLmRpcmVjdGlvbiA9IC0xO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlEb3duKEtleWJvYXJkLktleUFycm93UmlnaHQpKSB0aGlzLmRpcmVjdGlvbiA9IDE7XHJcbiAgICAgIFxyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlEb3duKEtleWJvYXJkLktleUEpKSB0aGlzLmRpcmVjdGlvbiA9IC0xO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlEb3duKEtleWJvYXJkLktleUQpKSB0aGlzLmRpcmVjdGlvbiA9IDE7XHJcbiAgICAgIFxyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleUNvbW1hKSkgdGhpcy5qdW1wUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleURvd24oS2V5Ym9hcmQuS2V5Q29tbWEpKSB0aGlzLmp1bXBEb3duID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlQZXJpb2QpKSB0aGlzLmRhc2hQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlTbGFzaCkpIHRoaXMuaW50ZXJhY3RQcmVzc2VkID0gdHJ1ZTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgU3ByaXRlLCBTcHJpdGVTaGVldCB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0YWJsZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdG9yQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0b3JDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL1Jlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENoZXN0R2FtZU9iamVjdCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcbiAgIGludGVyYWN0YWJsZTogSW50ZXJhY3RhYmxlQ29tcG9uZW50O1xyXG5cclxuICAgY2xvc2VkOiBTcHJpdGU7XHJcbiAgIG9wZW46IFNwcml0ZTtcclxuXHJcbiAgIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgY29uc3RydWN0b3IoYWFiYjogQUFCQil7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oKSk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLmFwcGx5KGFhYmIueCwgYWFiYi55KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBSaWdpZGJvZHkoKSk7XHJcbiAgICAgIHRoaXMuaW50ZXJhY3RhYmxlID0gdGhpcy5hZGRDb21wb25lbnQobmV3IEludGVyYWN0YWJsZUNvbXBvbmVudCgpKTtcclxuXHJcbiAgICAgIHRoaXMuaW50ZXJhY3RhYmxlLm9uSW50ZXJhY3QubGlzdGVuKHRoaXMub25JbnRlcmFjdC5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG4gICAgICB0aGlzLmJvZHkudXNlRHluYW1pY0NvbGxpc2lvbnMgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5jbG9zZWQgPSBSZXNvdXJjZXMuc2hlZXRPYmplY3RzLmdldFNwcml0ZSgwLCA2NCwgMTYsIDE2KTtcclxuICAgICAgdGhpcy5vcGVuID0gUmVzb3VyY2VzLnNoZWV0T2JqZWN0cy5nZXRTcHJpdGUoMTYsIDY0LCAxNiwgMTYpO1xyXG4gICB9XHJcblxyXG4gICBvbkludGVyYWN0KGludGVyYWN0b3I6IEludGVyYWN0b3JDb21wb25lbnQpe1xyXG4gICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBncmFwaGljcy5kcmF3U3ByaXRlU2ltcGxlKHRoaXMuaXNPcGVuID8gdGhpcy5vcGVuIDogdGhpcy5jbG9zZWQsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbGxpZGVyR2FtZU9iamVjdCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uYXBwbHkoYWFiYi54LCBhYWJiLnkpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5zb2xpZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiZ3JhcGhpY3MvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL1Jlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJHYW1lT2JqZWN0IH0gZnJvbSBcIi4vUGxheWVyR2FtZU9iamVjdFwiO1xyXG5cclxuLy8gVE9ETyBwbGF5ZXIgcGlja3VwIGdhbWVvYmplY3Qgb3Igc29tZXRoaW5nXHJcbmV4cG9ydCBjbGFzcyBGZWF0aGVyR2FtZU9iamVjdCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcblxyXG4gICB1c2VkU3ByaXRlOiBTcHJpdGU7XHJcbiAgIHVudXNlZFNwcml0ZTogU3ByaXRlO1xyXG5cclxuICAgaXNVc2VkOiBib29sZWFuO1xyXG4gICB1c2VkVGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIGVmZmVjdDogQW5pbWF0aW9uO1xyXG5cclxuICAgY29uc3RydWN0b3IoYWFiYjogQUFCQil7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oKSk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLmFwcGx5KGFhYmIuY2VudGVyWCwgYWFiYi5jZW50ZXJZKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBSaWdpZGJvZHkoKSk7XHJcblxyXG4gICAgICB0aGlzLmJvZHkudXNlRHluYW1pY0NvbGxpc2lvbnMgPSB0cnVlO1xyXG5cclxuICAgICAgbGV0IGNvbGxpZGVyID0gQm94Q29sbGlkZXIuZnJvbUFBQkIoYWFiYik7XHJcbiAgICAgIFxyXG4gICAgICBjb2xsaWRlci5vZmZzZXQuYXBwbHkoNiwgNik7XHJcbiAgICAgIGNvbGxpZGVyLnNpemUuYXBwbHkoMTIsIDEyKTtcclxuXHJcbiAgICAgIHRoaXMuZWZmZWN0ID0gUmVzb3VyY2VzLnNoZWV0RWZmZWN0cy5nZXRBbmltYXRpb24oMCwgODAsIDE2LCAxNiwgNCkuY2VudGVyKCk7XHJcbiAgICAgIHRoaXMuZWZmZWN0LmZyYW1lUmF0ZSA9IDEyO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LmNvbGxpZGVyID0gY29sbGlkZXI7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmlzVXNlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLnVudXNlZFNwcml0ZSA9IFJlc291cmNlcy5zaGVldE9iamVjdHMuZ2V0U3ByaXRlKDAsIDgwLCAxNiwgMTYpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLnVzZWRTcHJpdGUgPSBSZXNvdXJjZXMuc2hlZXRPYmplY3RzLmdldFNwcml0ZSgxNiwgODAsIDE2LCAxNikuY2VudGVyKCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkub25Db2xsaXNpb24ubGlzdGVuKHRoaXMub25Db2xsaXNpb24uYmluZCh0aGlzKSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYodGhpcy51c2VkVGltZSA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMudXNlZFRpbWUgLT0gZGVsdGE7XHJcblxyXG4gICAgICBpZih0aGlzLnVzZWRUaW1lIDwgMCl7XHJcbiAgICAgICAgIHRoaXMuaXNVc2VkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAvLyBUT0RPIGFkZCBhbmltYXRpb25cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBvbkNvbGxpc2lvbihvdGhlcjogUmlnaWRib2R5KXtcclxuICAgICAgaWYoIXRoaXMuaXNVc2VkICYmIG90aGVyLmdhbWVPYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXJHYW1lT2JqZWN0KXtcclxuICAgICAgICAgb3RoZXIuZ2FtZU9iamVjdC5jYW5Eb3VibGVKdW1wID0gdHJ1ZTtcclxuICAgICAgICAgb3RoZXIuZ2FtZU9iamVjdC5jYW5EYXNoID0gdHJ1ZTsgLy9BZnRlciBkb3VibGVqdW1wLCB5b3UgZ2V0IGFub3RoZXIgZGFzaCFcclxuXHJcbiAgICAgICAgIHRoaXMuaXNVc2VkID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy51c2VkVGltZSA9IDE7XHJcblxyXG4gICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnksIHRoaXMuZWZmZWN0KTtcclxuXHJcbiAgICAgICAgIC8vIFRPRE8gYWRkIGFuaW1hdGlvblxyXG4gICAgICB9XHJcbiAgIH0gXHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGVTaW1wbGUodGhpcy5pc1VzZWQgPyB0aGlzLnVzZWRTcHJpdGUgOiB0aGlzLnVudXNlZFNwcml0ZSwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR2FtZXBhZElucHV0LCBLZXlib2FyZCB9IGZyb20gXCJlbmdpbmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgSGVhbHRoQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0hlYWx0aENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwidXRpbC9UaW1lXCI7XHJcbmltcG9ydCB7IFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0IH0gZnJvbSBcIi4vUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyRmluaXNoR2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllckZpbmlzaEdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyR2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllckdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyU3Bhd25HYW1lT2JqZWN0IH0gZnJvbSBcIi4vUGxheWVyU3Bhd25HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxNYW5hZ2VyIGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgc3Bhd24/OiBQbGF5ZXJTcGF3bkdhbWVPYmplY3Q7XHJcbiAgIGZpbmlzaD86IFBsYXllckZpbmlzaEdhbWVPYmplY3Q7XHJcblxyXG4gICBwbGF5ZXI/OiBQbGF5ZXJHYW1lT2JqZWN0O1xyXG4gICBjaGVja3BvaW50czogUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3RbXTtcclxuXHJcbiAgIGN1cnJlbnRDaGVja3BvaW50PzogUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3Q7XHJcblxyXG4gICBydW5uaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGNvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICB0aW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgIGZpbmFsVGltZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICBiZXN0VGltZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgYmVzdFRpbWU6IG51bWJlcnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW92ZXJsYXlcIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuZmluYWxUaW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluYWwtdGltZVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgdGhpcy5iZXN0VGltZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJlc3QtdGltZVwiKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgIHRoaXMuYWx3YXlzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuY2hlY2twb2ludHMgPSBbXTtcclxuXHJcbiAgICAgIGxldCBidCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmVzdFRpbWVcIik7XHJcbiAgICAgIGlmKGJ0ICE9PSBudWxsKXtcclxuICAgICAgICAgdGhpcy5iZXN0VGltZSA9IHBhcnNlRmxvYXQoYnQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcblxyXG4gICAgICB0aGlzLnNwYXduID0gdGhpcy5zY2VuZS5maW5kT2JqZWN0KG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXJTcGF3bkdhbWVPYmplY3QpIGFzIFBsYXllclNwYXduR2FtZU9iamVjdHx1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMuZmluaXNoID0gdGhpcy5zY2VuZS5maW5kT2JqZWN0KG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0KSBhcyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0fHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHRoaXMuZmluaXNoIS5pbnRlcmFjdGFibGUub25JbnRlcmFjdC5saXN0ZW4oaW50ZXJhY3RvciA9PiB7XHJcbiAgICAgICAgIGlmKGludGVyYWN0b3IuZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFBsYXllckdhbWVPYmplY3Qpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgICAgIGlmKG9iaiBpbnN0YW5jZW9mIFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0KXtcclxuICAgICAgICAgICAgdGhpcy5jaGVja3BvaW50cy5wdXNoKG9iaik7XHJcblxyXG4gICAgICAgICAgICBvYmouaW50ZXJhY3RhYmxlLm9uSW50ZXJhY3QubGlzdGVuKGludGVyYWN0b3IgPT4ge1xyXG4gICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDaGVja3BvaW50ID0gb2JqO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICBpZih0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgdGhpcy5nYW1lLmlucHV0LmdhbWVwYWRzLmZvckVhY2gocGFkID0+IHtcclxuICAgICAgICAgICAgaWYocGFkLmlzQnV0dG9uUHJlc3NlZChHYW1lcGFkSW5wdXQuQnV0dG9uWSkpe1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgXHJcbiAgICAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5RW50ZXIpKXtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmdhbWUuaW5wdXQuZ2FtZXBhZHMuZm9yRWFjaChwYWQgPT4ge1xyXG4gICAgICAgICAgICBpZihwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25BKSB8fCBwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25ZKSl7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICBcclxuICAgICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlFbnRlcikpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleUNvbW1hKSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5U3BhY2UpKXtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51cGRhdGVDYW1lcmEoZGVsdGEpO1xyXG4gICB9XHJcblxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgc3VwZXIuZml4ZWRVcGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgaWYodGhpcy5ydW5uaW5nICYmICF0aGlzLnNjZW5lLnBhdXNlZCl7XHJcbiAgICAgICAgIHRoaXMudGltZSArPSBkZWx0YTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2codGhpcy50aW1lKTtcclxuXHJcbiAgICAgIGlmKCF0aGlzLnBsYXllcj8uaGVhbHRoLmFsaXZlKXtcclxuICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgc3RvcCgpe1xyXG4gICAgICB0aGlzLnNjZW5lLnJlbW92ZUdhbWVPYmplY3QodGhpcy5wbGF5ZXIhKTtcclxuXHJcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYodGhpcy5jb21wbGV0ZWQgJiYgKHRoaXMuYmVzdFRpbWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnRpbWUgPCB0aGlzLmJlc3RUaW1lKSl7XHJcbiAgICAgICAgIHRoaXMuYmVzdFRpbWUgPSB0aGlzLnRpbWU7XHJcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmVzdFRpbWVcIiwgXCJcIiArIHRoaXMuYmVzdFRpbWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnN5bmMoKTtcclxuICAgfVxyXG5cclxuICAgcmVzdGFydCgpe1xyXG4gICAgICBpZih0aGlzLnNwYXduID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG5cclxuXHJcbiAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllckdhbWVPYmplY3QoKTtcclxuXHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMuc3Bhd24udHJhbnNmb3JtLnBvc2l0aW9uO1xyXG5cclxuICAgICAgaWYodGhpcy5jdXJyZW50Q2hlY2twb2ludCAhPT0gdW5kZWZpbmVkICYmICF0aGlzLmNvbXBsZXRlZCl7XHJcbiAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5jdXJyZW50Q2hlY2twb2ludC50cmFuc2Zvcm0ucG9zaXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGxheWVyLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQocG9zaXRpb24pO1xyXG4gICAgICB0aGlzLnBsYXllci50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24uc2V0KHBvc2l0aW9uKTtcclxuICAgICAgdGhpcy5wbGF5ZXIuYm9keS5wcmV2aW91c1Bvc2l0aW9uLnNldChwb3NpdGlvbik7XHJcblxyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgaWYodGhpcy5jb21wbGV0ZWQpe1xyXG4gICAgICAgICB0aGlzLnRpbWUgPSAwO1xyXG4gICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNjZW5lLmFkZEdhbWVPYmplY3QodGhpcy5wbGF5ZXIpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zeW5jKCk7XHJcbiAgIH1cclxuXHJcbiAgIHN5bmMoKXtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJnYW1lLW92ZXJcIiwgIXRoaXMucnVubmluZyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIsIHRoaXMuY29tcGxldGVkKTtcclxuICAgICAgdGhpcy5maW5hbFRpbWVFbGVtZW50LmlubmVyVGV4dCA9IGZvcm1hdCh0aGlzLnRpbWUpO1xyXG5cclxuICAgICAgaWYodGhpcy5iZXN0VGltZSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgdGhpcy5iZXN0VGltZUVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KHRoaXMuYmVzdFRpbWUpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUNhbWVyYShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYoIXRoaXMucGxheWVyKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucGxheWVyLnRyYW5zZm9ybS5wb3NpdGlvbjtcclxuXHJcbiAgICAgIGNvbnN0IHNjZW5lV2lkdGggPSB0aGlzLnNjZW5lLnRpbGVtYXAhLnBpeGVsV2lkdGg7XHJcbiAgICAgIGNvbnN0IHNjZW5lSGVpZ2h0ID0gdGhpcy5zY2VuZS50aWxlbWFwIS5waXhlbEhlaWdodDtcclxuXHJcbiAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gNDAgKiAxNjtcclxuICAgICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gMjMgKiAxNjtcclxuXHJcbiAgICAgIGNvbnN0IGNhbSA9IHRoaXMuc2NlbmUuY2FtZXJhO1xyXG5cclxuICAgICAgY29uc3Qgc2NyZWVuSW5kZXhYID0gTWF0aC5mbG9vcihwb3NpdGlvbi54IC8gc2NyZWVuV2lkdGgpO1xyXG4gICAgICBjb25zdCBzY3JlZW5JbmRleFkgPSBNYXRoLmZsb29yKHBvc2l0aW9uLnkgLyBzY3JlZW5IZWlnaHQpO1xyXG5cclxuICAgICAgY29uc3Qgb2Zmc2V0WCA9IHNjcmVlbkluZGV4WCAqIHNjcmVlbldpZHRoO1xyXG4gICAgICBjb25zdCBvZmZzZXRZID0gc2NyZWVuSW5kZXhZICogc2NyZWVuSGVpZ2h0O1xyXG5cclxuICAgICAgbGV0IHdhbnRlZFBvc2l0aW9uID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgIG9mZnNldFggKyBzY3JlZW5XaWR0aCAvIDIsXHJcbiAgICAgICAgIG9mZnNldFkgKyBzY3JlZW5IZWlnaHQgLyAyLFxyXG4gICAgICApO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2xhbXAgdGhlIHdhbnRlZCBwb3NpdGlvbiB0byB0aGUgc2NlbmUuLi4gTm90IGdyZWF0LCBmb3IgcmVhc29ucyAobGlrZSwgZWRnZSBjYXNlcywgYnV0IHdlIGRvbid0IGNhcmUgOikgKVxyXG4gICAgICBpZih3YW50ZWRQb3NpdGlvbi54IC0gY2FtLndpZHRoIC8gMiA8IDApIHdhbnRlZFBvc2l0aW9uLnggPSBjYW0ud2lkdGggLyAyO1xyXG4gICAgICBpZih3YW50ZWRQb3NpdGlvbi54ICsgY2FtLndpZHRoIC8gMiA+IHNjZW5lV2lkdGgpIHdhbnRlZFBvc2l0aW9uLnggPSBzY2VuZVdpZHRoIC0gY2FtLndpZHRoIC8gMjtcclxuXHJcbiAgICAgIGlmKHdhbnRlZFBvc2l0aW9uLnkgLSBjYW0uaGVpZ2h0IC8gMiA8IDApIHdhbnRlZFBvc2l0aW9uLnkgPSBjYW0uaGVpZ2h0IC8gMjtcclxuICAgICAgaWYod2FudGVkUG9zaXRpb24ueSArIGNhbS5oZWlnaHQgLyAyID4gc2NlbmVIZWlnaHQpIHdhbnRlZFBvc2l0aW9uLnkgPSBzY2VuZUhlaWdodCAtIGNhbS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5wYXVzZWQgPSBWZWN0b3IyLmRpc3RhbmNlKHdhbnRlZFBvc2l0aW9uLCBjYW0uY2VudGVyKSA+IDE7XHJcblxyXG4gICAgICBjYW0uY2VudGVyLmxlcnBUbyh3YW50ZWRQb3NpdGlvbiwgZGVsdGEgKiAxMCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJncmFwaGljcy9BbmltYXRpb25cIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0YWJsZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdG9yQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0b3JDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL1Jlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcbiAgIGludGVyYWN0YWJsZTogSW50ZXJhY3RhYmxlQ29tcG9uZW50O1xyXG5cclxuICAgY3VycmVudEFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG5cclxuICAgY2xvc2VkQW5pbWF0aW9uOiBBbmltYXRpb247XHJcbiAgIG9wZW5BbmltYXRpb246IEFuaW1hdGlvbjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBJbnRlcmFjdGFibGVDb21wb25lbnQoKSk7XHJcblxyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZS5vbkludGVyYWN0Lmxpc3Rlbih0aGlzLm9uSW50ZXJhY3QuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAvLyBJbnRlcmFjdGFibGVzIGFuZCBzaGl0XHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG5cclxuICAgICAgdGhpcy5jbG9zZWRBbmltYXRpb24gPSBSZXNvdXJjZXMuc2hlZXRPYmplY3RzLmdldEFuaW1hdGlvbigwLCAxMTIsIDE2LCAxNiwgMSk7XHJcbiAgICAgIHRoaXMub3BlbkFuaW1hdGlvbiA9IFJlc291cmNlcy5zaGVldE9iamVjdHMuZ2V0QW5pbWF0aW9uKDE2LCAxMTIsIDE2LCAxNiwgNCk7XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLmNsb3NlZEFuaW1hdGlvbjtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24udXBkYXRlKGRlbHRhKTtcclxuICAgfVxyXG5cclxuICAgb25JbnRlcmFjdChpbnRlcmFjdG9yOiBJbnRlcmFjdG9yQ29tcG9uZW50KXtcclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5vcGVuQW5pbWF0aW9uO1xyXG4gICB9XHJcbiAgIFxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGVTaW1wbGUodGhpcy5jdXJyZW50QW5pbWF0aW9uLmZyYW1lLCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGFibGVDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSW50ZXJhY3RhYmxlQ29tcG9uZW50XCI7XHJcbmltcG9ydCBSZXNvdXJjZXMgZnJvbSBcImlzbGFuZC9SZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuICAgaW50ZXJhY3RhYmxlOiBJbnRlcmFjdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICBzcHJpdGU6IFNwcml0ZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBJbnRlcmFjdGFibGVDb21wb25lbnQoKSk7XHJcblxyXG4gICAgICAvLyBJbnRlcmFjdGFibGVzIGFuZCBzaGl0XHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zcHJpdGUgPSBSZXNvdXJjZXMuc2hlZXRPYmplY3RzLmdldFNwcml0ZSgxMTIsIDAsIDE2LCAxNik7XHJcbiAgIH1cclxuICAgXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZVNpbXBsZSh0aGlzLnNwcml0ZSwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IE1vdXNlIH0gZnJvbSBcImVuZ2luZS9JbnB1dFwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiZ3JhcGhpY3MvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSwgU3ByaXRlU2hlZXQgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcbmltcG9ydCB7IEhlYWx0aENvbXBvbmVudCB9IGZyb20gXCJpc2xhbmQvQ29tcG9uZW50cy9IZWFsdGhDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0YWJsZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdG9yQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0b3JDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGxheWVySW5wdXRDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvUGxheWVySW5wdXRDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL1Jlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllckdhbWVPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICBjdXJyZW50QW5pbWF0aW9uOiBBbmltYXRpb247XHJcblxyXG4gICBpZGxlQW5pbWF0aW9uOiBBbmltYXRpb247XHJcbiAgIHdhbGtBbmltYXRpb246IEFuaW1hdGlvbjtcclxuICAganVtcEFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG4gICBmYWxsQW5pbWF0aW9uOiBBbmltYXRpb247XHJcbiAgIGRhc2hBbmltYXRpb246IEFuaW1hdGlvbjtcclxuICAgd2FsbEFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG5cclxuICAgZWZmZWN0SnVtcDogQW5pbWF0aW9uO1xyXG4gICBlZmZlY3RMYW5kOiBBbmltYXRpb247XHJcbiAgIGVmZmVjdFdhbGxqdW1wOiBBbmltYXRpb247XHJcbiAgIGVmZmVjdERvdWJsZUp1bXA6IEFuaW1hdGlvbjtcclxuICAgXHJcbiAgIGVmZmVjdERhc2g6IEFuaW1hdGlvbjtcclxuXHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcbiAgIGlucHV0OiBQbGF5ZXJJbnB1dENvbXBvbmVudDtcclxuICAgaGVhbHRoOiBIZWFsdGhDb21wb25lbnQ7XHJcbiAgIGludGVyYWN0b3I6IEludGVyYWN0b3JDb21wb25lbnQ7XHJcbiAgIFxyXG4gICBqdW1wSG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGRhc2hIb3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGp1bXBpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgZmFjaW5nOiBudW1iZXIgPSAxO1xyXG5cclxuICAganVtcFNwZWVkOiBudW1iZXIgPSAtMyAqIDYwO1xyXG4gICBtb3ZlU3BlZWQ6IG51bWJlciA9IDEuNSAqIDYwO1xyXG5cclxuICAgY2F5b3RlVGltZTogbnVtYmVyID0gMC4wNTtcclxuICAgZ3JvdW5kTGVhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgZ3JvdW5kQWNjZWxlcmF0aW9uOiBudW1iZXIgPSAwLjIgKiA2MCAqIDYwO1xyXG4gICBncmF2aXR5OiBudW1iZXIgPSAwLjI1ICogNjAgKiA2MDtcclxuICAgZ3Jhdml0eVVwRnJhY3Rpb246IG51bWJlciA9IDAuNTtcclxuICAgZ3Jhdml0eVdhbGxGcmFjdGlvbjogbnVtYmVyID0gMC40O1xyXG5cclxuICAgbWF4RmFsbFNwZWVkID0gNSAqIDYwO1xyXG5cclxuICAgZ3JvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgd2FsbExlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgd2FsbFJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBoYWRXYWxsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBkYXNoaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGRhc2hTcGVlZDogbnVtYmVyID0gNC43ICogNjA7XHJcbiAgIGRhc2hUaW1lOiBudW1iZXIgPSAyNCAvICh0aGlzLmRhc2hTcGVlZCk7XHJcblxyXG4gICBkYXNoVGltZXI6IG51bWJlciA9IDA7XHJcbiAgIGRhc2hUaW1lb3V0OiBudW1iZXIgPSAwO1xyXG4gICBkYXNoU2F2ZWRTcGVlZDogbnVtYmVyID0gMDtcclxuICAgZGFzaFNhdmVkQWRkaXRpb246IG51bWJlciA9IDU7XHJcbiAgIGRhc2hBbmltYXRpb25UaW1lcjogbnVtYmVyID0gMDtcclxuXHJcbiAgIHdhbGxKdW1wVGltZXI6IG51bWJlciA9IDA7XHJcbiAgIGdldCB3YWxsSnVtcGluZygpIHsgcmV0dXJuIHRoaXMud2FsbEp1bXBUaW1lciA+IDA7IH1cclxuXHJcbiAgIGdldCBjYW5Nb3ZlKCkgeyByZXR1cm4gIXRoaXMud2FsbEp1bXBpbmcgJiYgIXRoaXMuZGFzaGluZzsgfVxyXG4gICBnZXQgdXNlR3Jhdml0eSgpIHsgcmV0dXJuICF0aGlzLmRhc2hpbmc7IH1cclxuICAgZ2V0IGhhc1dhbGwoKSB7IHJldHVybiB0aGlzLndhbGxMZWZ0IHx8IHRoaXMud2FsbFJpZ2h0OyB9XHJcbiAgIFxyXG4gICBjYW5EYXNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGNhbkRvdWJsZUp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgZ2V0IGNhbkp1bXAoKSB7IHJldHVybiAgdGhpcy5ncm91bmRlZCB8fCAodGhpcy5ncm91bmRMZWF2ZVRpbWUgPCB0aGlzLmNheW90ZVRpbWUpOyB9XHJcblxyXG5cclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICBsZXQgc2hlZXQgPSBSZXNvdXJjZXMuc2hlZXRQbGF5ZXI7XHJcblxyXG4gICAgICB0aGlzLmlkbGVBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgMCwgMTYsIDE2LCAxKS5jZW50ZXIoKTtcclxuICAgICAgdGhpcy53YWxrQW5pbWF0aW9uID0gc2hlZXQuZ2V0QW5pbWF0aW9uKDAsIDE2LCAxNiwgMTYsIDQpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLmZhbGxBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgMzIsIDE2LCAxNiwgMikuY2VudGVyKCk7XHJcbiAgICAgIHRoaXMuanVtcEFuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCA0OCwgMTYsIDE2LCAyKS5jZW50ZXIoKTtcclxuICAgICAgdGhpcy5kYXNoQW5pbWF0aW9uID0gc2hlZXQuZ2V0QW5pbWF0aW9uKDAsIDY0LCAxNiwgMTYsIDIpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLndhbGxBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgODAsIDE2LCAxNiwgMikuY2VudGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmVmZmVjdEp1bXAgPSBSZXNvdXJjZXMuc2hlZXRFZmZlY3RzLmdldEFuaW1hdGlvbigwLCAwLCAxNiwgMTYsIDMpLnNldE9mZnNldCg4LCAxNik7XHJcbiAgICAgIHRoaXMuZWZmZWN0V2FsbGp1bXAgPSBSZXNvdXJjZXMuc2hlZXRFZmZlY3RzLmdldEFuaW1hdGlvbigwLCAxNiwgMTYsIDE2LCAzKS5zZXRPZmZzZXQoMCwgOCk7XHJcbiAgICAgIHRoaXMuZWZmZWN0TGFuZCA9IFJlc291cmNlcy5zaGVldEVmZmVjdHMuZ2V0QW5pbWF0aW9uKDAsIDMyLCAxNiwgMTYsIDMpLnNldE9mZnNldCg4LCAxNik7XHJcblxyXG4gICAgICB0aGlzLmVmZmVjdERhc2ggPSBSZXNvdXJjZXMuc2hlZXRFZmZlY3RzLmdldEFuaW1hdGlvbigxMTIsIDAsIDE2LCAxNiwgMSkuc2V0T2Zmc2V0KDgsIDgpO1xyXG4gICAgICB0aGlzLmVmZmVjdERhc2guZnJhbWVSYXRlID0gNDtcclxuXHJcbiAgICAgIHRoaXMuZWZmZWN0RG91YmxlSnVtcCA9IFJlc291cmNlcy5zaGVldEVmZmVjdHMuZ2V0QW5pbWF0aW9uKDAsIDQ4LCAxNiwgMTYsIDQpLnNldE9mZnNldCg4LCA4KTtcclxuXHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuaWRsZUFuaW1hdGlvbjtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBQbGF5ZXJJbnB1dENvbXBvbmVudCgpKTtcclxuICAgICAgdGhpcy5oZWFsdGggPSB0aGlzLmFkZENvbXBvbmVudChuZXcgSGVhbHRoQ29tcG9uZW50KCkpO1xyXG4gICAgICB0aGlzLmludGVyYWN0b3IgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgSW50ZXJhY3RvckNvbXBvbmVudCgpKTtcclxuXHJcbiAgICAgIHRoaXMuaGVhbHRoLm9uRGVhdGgubGlzdGVuKHRoaXMub25EZWF0aC5iaW5kKHRoaXMpKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmJvZHkuY29sbGlkZXIgPSBuZXcgQm94Q29sbGlkZXIoXHJcbiAgICAgICAgIG5ldyBWZWN0b3IyKDEwLCAxMyksXHJcbiAgICAgICAgIG5ldyBWZWN0b3IyKDUsIDUpXHJcbiAgICAgICk7XHJcbiAgIH1cclxuXHJcbiAgIF9maXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgY29uc3QgbW91c2UgPSB0aGlzLmdhbWUuaW5wdXQubW91c2U7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54ID0gdGhpcy5zY2VuZS5jYW1lcmEuc2NyZWVuVG9Xb3JsZFgobW91c2UueCk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkgPSB0aGlzLnNjZW5lLmNhbWVyYS5zY3JlZW5Ub1dvcmxkWShtb3VzZS55KTtcclxuXHJcbiAgICAgIC8vIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gdGhpcy5zY2VuZS5jYW1lcmEuc2NyZWVuVG9Xb3JsZFgobW91c2UuZGVsdGFYKSAvIGRlbHRhO1xyXG4gICAgICAvLyB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHRoaXMuc2NlbmUuY2FtZXJhLnNjcmVlblRvV29ybGRZKG1vdXNlLmRlbHRhWSkgLyBkZWx0YTtcclxuICAgICAgXHJcbiAgICAgIC8vIGlmKG1vdXNlLmlzQnV0dG9uUHJlc3NlZChNb3VzZS5CdXR0b25MZWZ0KSl7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0aGlzLmJvZHkuY29sbGlkZWRCb3R0b207XHJcbiAgICAgIHRoaXMud2FsbExlZnQgPSB0aGlzLmJvZHkuY29sbGlkZWRMZWZ0O1xyXG4gICAgICB0aGlzLndhbGxSaWdodCA9IHRoaXMuYm9keS5jb2xsaWRlZFJpZ2h0O1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5pbnB1dC5kaXJlY3Rpb24gPiAwKXtcclxuICAgICAgICAgdGhpcy5mYWNpbmcgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuaW5wdXQuZGlyZWN0aW9uIDwgMCl7XHJcbiAgICAgICAgIHRoaXMuZmFjaW5nID0gLTE7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy53YWxsTGVmdCAmJiAhdGhpcy5ncm91bmRlZCkgdGhpcy5mYWNpbmcgPSAxO1xyXG4gICAgICBpZih0aGlzLndhbGxSaWdodCAmJiAhdGhpcy5ncm91bmRlZCkgdGhpcy5mYWNpbmcgPSAtMTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlQW5pbWF0aW9uKGRlbHRhKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgaWYodGhpcy5pbnB1dC5qdW1wUHJlc3NlZCl7XHJcbiAgICAgICAgIHRoaXMuanVtcEhvcCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5pbnB1dC5kYXNoUHJlc3NlZCl7XHJcbiAgICAgICAgIHRoaXMuZGFzaEhvcCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5pbnB1dC5pbnRlcmFjdFByZXNzZWQpe1xyXG4gICAgICAgICB0aGlzLmludGVyYWN0b3IuaW50ZXJhY3QoKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gVE9ETyBkbyB0aGlzIHJpZ2h0LlxyXG4gICAgICBjb25zdCBzY2VuZVdpZHRoID0gdGhpcy5zY2VuZS50aWxlbWFwIS5waXhlbFdpZHRoO1xyXG4gICAgICBjb25zdCBzY2VuZUhlaWdodCA9IHRoaXMuc2NlbmUudGlsZW1hcCEucGl4ZWxIZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgYm91bmRzID0gQUFCQi5DcmVhdGUoMCwgMCwgc2NlbmVXaWR0aCwgc2NlbmVIZWlnaHQpO1xyXG5cclxuICAgICAgaWYoIXRoaXMuYm9keS5ib3VuZGluZ0JveC5vdmVybGFwcyhib3VuZHMpKXtcclxuICAgICAgICAgdGhpcy5oZWFsdGguZGFtYWdlKDEwMCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHN1cGVyLmZpeGVkVXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMuYm9keS5jb2xsaWRlZEJvdHRvbSAmJiB0aGlzLmdyb3VuZExlYXZlVGltZSA+IDAuOCl7XHJcbiAgICAgICAgIHRoaXMuc2NlbmUucGFydGljbGVTeXN0ZW0uYWRkUGFydGljbGUodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSArIDgsIHRoaXMuZWZmZWN0TGFuZCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0aGlzLmJvZHkuY29sbGlkZWRCb3R0b207XHJcbiAgICAgIHRoaXMud2FsbExlZnQgPSB0aGlzLmJvZHkuY29sbGlkZWRMZWZ0O1xyXG4gICAgICB0aGlzLndhbGxSaWdodCA9IHRoaXMuYm9keS5jb2xsaWRlZFJpZ2h0O1xyXG5cclxuICAgICAgaWYodGhpcy53YWxsTGVmdCB8fCB0aGlzLndhbGxSaWdodCl7XHJcbiAgICAgICAgIGlmKCF0aGlzLmhhZFdhbGwgJiYgIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuaGFkV2FsbCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5oYWRXYWxsID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMuZ3JvdW5kZWQpIHtcclxuICAgICAgICAgdGhpcy5ncm91bmRMZWF2ZVRpbWUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuZ3JvdW5kTGVhdmVUaW1lICs9IGRlbHRhO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy8gTWFrZSBzdXJlIHdlIHN0aWNrIHRvIHRoZSB3YWxsXHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMud2FsbFJpZ2h0KXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSA2MDtcclxuICAgICAgfVxyXG4gICAgICBpZighdGhpcy5ncm91bmRlZCAmJiB0aGlzLndhbGxMZWZ0KXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSAtNjA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCF0aGlzLmlucHV0Lmp1bXBEb3duKXtcclxuICAgICAgICAgdGhpcy5qdW1wSG9wID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEp1bXBpbmdcclxuICAgICAgdGhpcy51cGRhdGVKdW1wKGRlbHRhKTtcclxuXHJcbiAgICAgIC8vIE1vdmVtZW50XHJcbiAgICAgIHRoaXMudXBkYXRlTW92ZShkZWx0YSk7XHJcblxyXG4gICAgICAvLyBEYXNoaW5nXHJcbiAgICAgIHRoaXMudXBkYXRlRGFzaChkZWx0YSk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgLy8gR3Jhdml0eVxyXG4gICAgICB0aGlzLnVwZGF0ZUdyYXZpdHkoZGVsdGEpO1xyXG5cclxuICAgICAgaWYodGhpcy5ib2R5LnZlbG9jaXR5LnkgPiB0aGlzLm1heEZhbGxTcGVlZCl7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5tYXhGYWxsU3BlZWQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEFuaW1hdGlvblxyXG4gICAgICB0aGlzLnVwZGF0ZUFuaW1hdGlvbihkZWx0YSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZU1vdmUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIC8vIFVwZGF0ZSBmYWNpbmdcclxuICAgICAgaWYodGhpcy5pbnB1dC5kaXJlY3Rpb24gPiAwKXtcclxuICAgICAgICAgdGhpcy5mYWNpbmcgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuaW5wdXQuZGlyZWN0aW9uIDwgMCl7XHJcbiAgICAgICAgIHRoaXMuZmFjaW5nID0gLTE7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy53YWxsTGVmdCAmJiAhdGhpcy5ncm91bmRlZCkgdGhpcy5mYWNpbmcgPSAxO1xyXG4gICAgICBpZih0aGlzLndhbGxSaWdodCAmJiAhdGhpcy5ncm91bmRlZCkgdGhpcy5mYWNpbmcgPSAtMTtcclxuXHJcbiAgICAgIGlmKCF0aGlzLmNhbk1vdmUpIHJldHVybjtcclxuXHJcbiAgICAgIGlmKHRoaXMuaW5wdXQuZGlyZWN0aW9uICE9PSAwKXtcclxuICAgICAgICAgbGV0IGRpciA9IE1hdGguc2lnbih0aGlzLmlucHV0LmRpcmVjdGlvbik7XHJcbiAgICAgICAgIGxldCBtYXhTcGVlZCA9IHRoaXMubW92ZVNwZWVkICogTWF0aC5hYnModGhpcy5pbnB1dC5kaXJlY3Rpb24pO1xyXG4gICAgICAgICBsZXQgYWNjZWxlcmF0aW9uID0gdGhpcy5ncm91bmRBY2NlbGVyYXRpb24gKiBkZWx0YTtcclxuXHJcbiAgICAgICAgIHRoaXMuYWNjZWxlcmF0ZShcclxuICAgICAgICAgICAgZGlyLCBcclxuICAgICAgICAgICAgbWF4U3BlZWQsXHJcbiAgICAgICAgICAgIGFjY2VsZXJhdGlvbik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5zdG9wKHRoaXMuZ3JvdW5kQWNjZWxlcmF0aW9uICogZGVsdGEpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZURhc2goZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGlmKHRoaXMuZ3JvdW5kZWQpe1xyXG4gICAgICAgICB0aGlzLmNhbkRhc2ggPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLmRhc2hpbmcpe1xyXG4gICAgICAgICB0aGlzLmRhc2hUaW1lciAtPSBkZWx0YTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIFxyXG4gICAgICAgICBpZih0aGlzLmRhc2hUaW1lciA8IDApe1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSB0aGlzLmRhc2hTYXZlZFNwZWVkICsgdGhpcy5mYWNpbmcgKiB0aGlzLmRhc2hTYXZlZEFkZGl0aW9uO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zY2VuZS5wYXJ0aWNsZVN5c3RlbS5hZGRQYXJ0aWNsZSh0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55LCB0aGlzLmVmZmVjdERhc2gsIHRoaXMuZmFjaW5nKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuZGFzaFRpbWVvdXQgLT0gZGVsdGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMuZGFzaEhvcCAmJiB0aGlzLmRhc2hUaW1lb3V0IDwgMCAmJiB0aGlzLmNhbkRhc2ggJiYgIXRoaXMuZ3JvdW5kZWQpe1xyXG4gICAgICAgICB0aGlzLmRhc2hpbmcgPSB0cnVlO1xyXG4gICAgICAgICB0aGlzLmNhbkRhc2ggPSBmYWxzZTtcclxuICAgICAgICAgdGhpcy5kYXNoU2F2ZWRTcGVlZCA9IHRoaXMuYm9keS52ZWxvY2l0eS54O1xyXG4gICAgICAgICB0aGlzLmRhc2hUaW1lciA9IHRoaXMuZGFzaFRpbWU7XHJcbiAgICAgICAgIHRoaXMuZGFzaFRpbWVvdXQgPSAwLjI7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gMDtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSB0aGlzLmZhY2luZyAqIHRoaXMuZGFzaFNwZWVkO1xyXG5cclxuICAgICAgICAgdGhpcy5kYXNoQW5pbWF0aW9uVGltZXIgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuZGFzaEhvcCA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5kYXNoQW5pbWF0aW9uVGltZXIgLT0gZGVsdGE7XHJcblxyXG4gICAgICBpZih0aGlzLmRhc2hpbmcgJiYgdGhpcy5kYXNoQW5pbWF0aW9uVGltZXIgPD0gMCl7XHJcbiAgICAgICAgIHRoaXMuZWZmZWN0RGFzaC5mcmFtZVJhdGUgPSAxIC8gKHRoaXMuZGFzaFRpbWVyIC8gMyArIDAuMyk7XHJcbiAgICAgICAgIHRoaXMuc2NlbmUucGFydGljbGVTeXN0ZW0uYWRkUGFydGljbGUodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSwgdGhpcy5lZmZlY3REYXNoLCB0aGlzLmZhY2luZyk7XHJcbiAgICAgICAgIHRoaXMuZGFzaEFuaW1hdGlvblRpbWVyICs9IDAuMDM7XHJcbiAgICAgIH1cclxuXHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUp1bXAoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMud2FsbEp1bXBUaW1lciAtPSBkZWx0YTtcclxuXHJcbiAgICAgIGlmKHRoaXMuZ3JvdW5kZWQpIHRoaXMuY2FuRG91YmxlSnVtcCA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYodGhpcy5jYW5KdW1wKXtcclxuICAgICAgICAgaWYodGhpcy5qdW1wSG9wKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXlvdGUganVtcCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgcmVhbGx5IGhhY2t5IGJ1dCB3aGF0ZXZlclxyXG4gICAgICAgICAgICB0aGlzLmdyb3VuZExlYXZlVGltZSA9IHRoaXMuY2F5b3RlVGltZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGFydGljbGVTeXN0ZW0uYWRkUGFydGljbGUodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSArIDgsIHRoaXMuZWZmZWN0SnVtcCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5qdW1wSG9wID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZih0aGlzLmNhbkRvdWJsZUp1bXApe1xyXG4gICAgICAgICBpZih0aGlzLmp1bXBIb3Ape1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHRoaXMuanVtcFNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmNhbkRvdWJsZUp1bXAgPSBmYWxzZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGFydGljbGVTeXN0ZW0uYWRkUGFydGljbGUodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSArIDYsIHRoaXMuZWZmZWN0RG91YmxlSnVtcCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5qdW1wSG9wID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgaWYodGhpcy53YWxsTGVmdCAmJiB0aGlzLmp1bXBIb3Ape1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IHRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHRoaXMuanVtcFNwZWVkO1xyXG5cclxuICAgICAgICAgICAgdGhpcy53YWxsSnVtcFRpbWVyID0gMC4wNTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcEhvcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gWW91IGNhbiBkYXNoIGFmdGVyIHlvdXIgd2FsbGp1bXAgOilcclxuICAgICAgICAgICAgdGhpcy5jYW5EYXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGFydGljbGVTeXN0ZW0uYWRkUGFydGljbGUodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCAtIDUsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnksIHRoaXMuZWZmZWN0V2FsbGp1bXAsIDEpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKHRoaXMud2FsbFJpZ2h0ICYmIHRoaXMuanVtcEhvcCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gLXRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHRoaXMuanVtcFNwZWVkO1xyXG5cclxuICAgICAgICAgICAgdGhpcy53YWxsSnVtcFRpbWVyID0gMC4wNTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcEhvcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gWW91IGNhbiBkYXNoIGFmdGVyIHlvdXIgd2FsbGp1bXAgOilcclxuICAgICAgICAgICAgdGhpcy5jYW5EYXNoID0gdHJ1ZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGFydGljbGVTeXN0ZW0uYWRkUGFydGljbGUodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCArIDUsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnksIHRoaXMuZWZmZWN0V2FsbGp1bXAsIC0xKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBKdW1wIGNhbmNlbGluZ1xyXG4gICAgICBpZih0aGlzLmJvZHkudmVsb2NpdHkueSA+IDApe1xyXG4gICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmp1bXBpbmcgJiYgIXRoaXMuaW5wdXQuanVtcERvd24pe1xyXG4gICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHRoaXMuYm9keS52ZWxvY2l0eS55ICogMC4yNTtcclxuICAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgdXBkYXRlQW5pbWF0aW9uKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICAvLyBBbmltYXRpb24gc3R1ZmZcclxuICAgICAgaWYodGhpcy5ib2R5LnZlbG9jaXR5LnggIT09IDApe1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLndhbGtBbmltYXRpb247XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5pZGxlQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZighdGhpcy5ncm91bmRlZCAmJiB0aGlzLmJvZHkudmVsb2NpdHkueSA8IDApe1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLmp1bXBBbmltYXRpb247XHJcbiAgICAgIH1cclxuICAgICAgaWYoIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPj0gMCl7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuZmFsbEFuaW1hdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBpZigodGhpcy53YWxsTGVmdCB8fCB0aGlzLndhbGxSaWdodCkgJiYgIXRoaXMuZ3JvdW5kZWQpe1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLndhbGxBbmltYXRpb247XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5kYXNoaW5nKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5kYXNoQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24udXBkYXRlKGRlbHRhKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlR3Jhdml0eShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYoIXRoaXMudXNlR3Jhdml0eSkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYodGhpcy5ib2R5LnZlbG9jaXR5LnkgPCAwKXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgKz0gdGhpcy5ncmF2aXR5ICogdGhpcy5ncmF2aXR5VXBGcmFjdGlvbiAqIGRlbHRhO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIGlmKHRoaXMuaGFzV2FsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eSAqIHRoaXMuZ3Jhdml0eVdhbGxGcmFjdGlvbiAqIGRlbHRhO1xyXG4gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgKz0gdGhpcy5ncmF2aXR5ICogZGVsdGE7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBhY2NlbGVyYXRlKGRpcjogbnVtYmVyLCBtYXhTcGVlZDogbnVtYmVyLCBhY2NlbGVyYXRpb246IG51bWJlcil7XHJcbiAgICAgIGxldCBhY2MgPSBhY2NlbGVyYXRpb247XHJcbiAgICAgIGxldCB2ZWwgPSB0aGlzLmJvZHkudmVsb2NpdHkueCAqIGRpcjtcclxuXHJcbiAgICAgIGlmKHZlbCA+PSBtYXhTcGVlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYodmVsICsgYWNjID4gbWF4U3BlZWQpe1xyXG4gICAgICAgICBhY2MgPSBtYXhTcGVlZCAtIHZlbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggKz0gYWNjICogZGlyO1xyXG4gICAgICBcclxuICAgfVxyXG4gICBzdG9wKGFjY2VsZXJhdGlvbjogbnVtYmVyKXtcclxuICAgICAgbGV0IGRpciA9IE1hdGguc2lnbih0aGlzLmJvZHkudmVsb2NpdHkueCk7XHJcbiAgICAgIGxldCB2ZWwgPSBNYXRoLmFicyh0aGlzLmJvZHkudmVsb2NpdHkueCk7XHJcblxyXG4gICAgICBsZXQgcmVtID0gYWNjZWxlcmF0aW9uO1xyXG5cclxuICAgICAgaWYodmVsIC0gcmVtIDwgMCkgcmVtID0gdmVsO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggLT0gcmVtICogZGlyO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIHN1cGVyLmRyYXcoZ3JhcGhpY3MpO1xyXG5cclxuICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZSh0aGlzLmN1cnJlbnRBbmltYXRpb24uZnJhbWUsIFxyXG4gICAgICAgICB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi55LFxyXG4gICAgICAgICB0aGlzLmZhY2luZywgMSwgXHJcbiAgICAgICAgIDApO1xyXG4gICB9XHJcblxyXG4gICBvbkRlYXRoKCl7XHJcbiAgICAgIHRoaXMuc2NlbmUucmVtb3ZlR2FtZU9iamVjdCh0aGlzKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTcGF3bkdhbWVPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEhlYWx0aENvbXBvbmVudCB9IGZyb20gXCJpc2xhbmQvQ29tcG9uZW50cy9IZWFsdGhDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGlrZXNHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIsIHNocmluazogYm9vbGVhbil7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICBpZihzaHJpbmspe1xyXG4gICAgICAgICBsZXQgc2tpbiA9IGFhYmIuaGVpZ2h0IC0gMztcclxuXHJcbiAgICAgICAgIGlmKHNraW4gPiAwKXtcclxuICAgICAgICAgICAgYWFiYi50b3AgKz0gc2tpbjtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oKSk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLmFwcGx5KGFhYmIueCwgYWFiYi55KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBSaWdpZGJvZHkoKSk7XHJcbiAgICAgIHRoaXMuYm9keS5raW5lbWF0aWMgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ib2R5LmNvbGxpZGVyID0gQm94Q29sbGlkZXIuZnJvbUFBQkIoYWFiYik7XHJcblxyXG4gICAgICB0aGlzLmJvZHkub25Db2xsaXNpb24ubGlzdGVuKHRoaXMub25Db2xsaXNpb24uYmluZCh0aGlzKSk7XHJcbiAgICAgIFxyXG4gICB9XHJcblxyXG4gICBvbkNvbGxpc2lvbihvdGhlcjogUmlnaWRib2R5KXtcclxuICAgICAgbGV0IGNvbXAgPSBvdGhlci5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoY29tcG9uZW50ID0+IGNvbXBvbmVudCBpbnN0YW5jZW9mIEhlYWx0aENvbXBvbmVudCkgYXMgSGVhbHRoQ29tcG9uZW50fHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIGlmKGNvbXAgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coXCJEYW1hZ2luZyBzb21ldGhpbmchXCIpO1xyXG4gICAgICBcclxuICAgICAgY29tcC5kYW1hZ2UoMTAwKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlU2hlZXQgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgIHNoZWV0T2JqZWN0czogU3ByaXRlU2hlZXQuZnJvbUhUTUwoXCJPYmplY3RzXCIpLFxyXG4gICBzaGVldEVmZmVjdHM6IFNwcml0ZVNoZWV0LmZyb21IVE1MKFwiRWZmZWN0c1wiKSxcclxuICAgc2hlZXRQbGF5ZXI6IFNwcml0ZVNoZWV0LmZyb21IVE1MKFwiUGxheWVyXCIpXHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIi4vVmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFBQkJ7XHJcblxyXG4gICBsZWZ0OiBudW1iZXI7XHJcbiAgIHRvcDogbnVtYmVyO1xyXG4gICBib3R0b206IG51bWJlcjtcclxuICAgcmlnaHQ6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGxlZnQ6IG51bWJlciA9IDAsIHRvcDogbnVtYmVyID0gMCwgcmlnaHQ6IG51bWJlciA9IDAsIGJvdHRvbTogbnVtYmVyID0gMCkgeyBcclxuICAgICAgdGhpcy5sZWZ0ID0gbGVmdDtcclxuICAgICAgdGhpcy50b3AgPSB0b3A7XHJcbiAgICAgIHRoaXMucmlnaHQgPSByaWdodDtcclxuICAgICAgdGhpcy5ib3R0b20gPSBib3R0b207XHJcbiAgIH1cclxuXHJcbiAgIGdldCB4KCkgeyByZXR1cm4gdGhpcy5sZWZ0OyB9XHJcbiAgIGdldCB5KCkgeyByZXR1cm4gdGhpcy50b3A7IH1cclxuXHJcbiAgIGdldCBjZW50ZXJYKCkgeyByZXR1cm4gdGhpcy54ICsgdGhpcy53aWR0aCAvIDI7IH1cclxuICAgZ2V0IGNlbnRlclkoKSB7IHJldHVybiB0aGlzLnkgKyB0aGlzLmhlaWdodCAvIDI7IH1cclxuXHJcbiAgIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMucmlnaHQgLSB0aGlzLmxlZnQ7IH1cclxuICAgZ2V0IGhlaWdodCgpIHsgcmV0dXJuIHRoaXMuYm90dG9tIC0gdGhpcy50b3A7IH1cclxuXHJcbiAgIG92ZXJsYXBzKG90aGVyOiBBQUJCKXtcclxuICAgICAgcmV0dXJuIHRoaXMub3ZlcmxhcHNYKG90aGVyKSAmJiB0aGlzLm92ZXJsYXBzWShvdGhlcik7XHJcbiAgIH1cclxuICAgb3ZlcmxhcHNYKG90aGVyOiBBQUJCKXtcclxuICAgICAgaWYodGhpcy5sZWZ0ID49IG90aGVyLnJpZ2h0KSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmKHRoaXMucmlnaHQgPD0gb3RoZXIubGVmdCkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH1cclxuICAgb3ZlcmxhcHNZKG90aGVyOiBBQUJCKXtcclxuICAgICAgaWYodGhpcy50b3AgPj0gb3RoZXIuYm90dG9tKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIGlmKHRoaXMuYm90dG9tIDw9IG90aGVyLnRvcCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIG1pbk92ZXJsYXBYKG90aGVyOiBBQUJCKXtcclxuICAgICAgbGV0IG1vdGlvbkxlZnQgPSBvdGhlci5yaWdodCAtIHRoaXMubGVmdDtcclxuICAgICAgbGV0IG1vdGlvblJpZ2h0ID0gdGhpcy5yaWdodCAtIG90aGVyLmxlZnQ7XHJcblxyXG4gICAgICBpZihtb3Rpb25MZWZ0ID4gbW90aW9uUmlnaHQpIHJldHVybiAtbW90aW9uUmlnaHQ7XHJcbiAgICAgIHJldHVybiBtb3Rpb25MZWZ0O1xyXG4gICB9XHJcbiAgIG1pbk92ZXJsYXBZKG90aGVyOiBBQUJCKXtcclxuICAgICAgbGV0IG1vdGlvblVwID0gb3RoZXIuYm90dG9tIC0gdGhpcy50b3A7XHJcbiAgICAgIGxldCBtb3Rpb25Eb3duID0gdGhpcy5ib3R0b20gLSBvdGhlci50b3A7XHJcblxyXG4gICAgICBpZihtb3Rpb25VcCA+IG1vdGlvbkRvd24pIHJldHVybiAtbW90aW9uRG93bjtcclxuICAgICAgcmV0dXJuIG1vdGlvblVwO1xyXG4gICB9XHJcbiAgIFxyXG5cclxuICAgbWluT3ZlcmxhcFhXaXRoQmlhcyhvdGhlcjogQUFCQiwgYmlhczogbnVtYmVyKXtcclxuICAgICAgaWYoYmlhcyA8IDApIHJldHVybiBvdGhlci5yaWdodCAtIHRoaXMubGVmdDtcclxuICAgICAgcmV0dXJuIC0odGhpcy5yaWdodCAtIG90aGVyLmxlZnQpO1xyXG5cclxuICAgfVxyXG4gICBtaW5PdmVybGFwWVdpdGhCaWFzKG90aGVyOiBBQUJCLCBiaWFzOiBudW1iZXIpe1xyXG4gICAgICBpZihiaWFzIDwgMCkgcmV0dXJuIG90aGVyLmJvdHRvbSAtIHRoaXMudG9wO1xyXG4gICAgICByZXR1cm4gLSh0aGlzLmJvdHRvbSAtIG90aGVyLnRvcCk7XHJcbiAgIH1cclxuXHJcbiAgIGNvcHkob3RoZXI6IEFBQkIpe1xyXG4gICAgICB0aGlzLmxlZnQgPSBvdGhlci5sZWZ0O1xyXG4gICAgICB0aGlzLnJpZ2h0ID0gb3RoZXIucmlnaHQ7XHJcbiAgICAgIHRoaXMuYm90dG9tID0gb3RoZXIuYm90dG9tO1xyXG4gICAgICB0aGlzLnRvcCA9IG90aGVyLnRvcDtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBzZXQobGVmdDogbnVtYmVyLCB0b3A6IG51bWJlciwgcmlnaHQ6IG51bWJlciwgYm90dG9tOiBudW1iZXIpIHsgXHJcbiAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICAgIHRoaXMudG9wID0gdG9wO1xyXG4gICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIGNsb25lKCl7XHJcbiAgICAgIHJldHVybiBuZXcgQUFCQih0aGlzLmxlZnQsIHRoaXMudG9wLCB0aGlzLnJpZ2h0LCB0aGlzLmJvdHRvbSk7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBDcmVhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIG5ldyBBQUJCKHgsIHksIHggKyB3LCB5ICsgaCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEN1cnZlIH0gZnJvbSBcInV0aWwvQ3VydmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBWZWN0b3Iye1xyXG4gICB4OiBudW1iZXI7XHJcbiAgIHk6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHggPSAwLCB5ID0gMCl7XHJcbiAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgIHRoaXMueSA9IHk7XHJcbiAgIH1cclxuXHJcbiAgIGFkZChvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHRoaXMueCArPSBvdGhlci54O1xyXG4gICAgICB0aGlzLnkgKz0gb3RoZXIueTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIHN1YihvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHRoaXMueCAtPSBvdGhlci54O1xyXG4gICAgICB0aGlzLnkgLT0gb3RoZXIueTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIG11bChvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHRoaXMueCAqPSBvdGhlci54O1xyXG4gICAgICB0aGlzLnkgKj0gb3RoZXIueTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIGRpdihvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHRoaXMueCAvPSBvdGhlci54O1xyXG4gICAgICB0aGlzLnkgLz0gb3RoZXIueTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbiAgIHNldChvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHRoaXMueCA9IG90aGVyLng7XHJcbiAgICAgIHRoaXMueSA9IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBzZXRaZXJvKCl7XHJcbiAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgIHRoaXMueSA9IDA7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBhcHBseSh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBuZWdhdGUoKXtcclxuICAgICAgdGhpcy54ID0gLXRoaXMueDtcclxuICAgICAgdGhpcy55ID0gLXRoaXMueTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBub3JtYWxpemUoKXtcclxuICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG5cclxuICAgICAgaWYobGVuZ3RoID4gMCl7XHJcbiAgICAgICAgIHRoaXMueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbm9ybWFsaXplZCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgc3FyTGVuZ3RoKCl7XHJcbiAgICAgIHJldHVybiBWZWN0b3IyLmRvdCh0aGlzLCB0aGlzKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IGxlbmd0aCgpe1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuc3FyTGVuZ3RoKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IGFuZ2xlKCl7XHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgfVxyXG5cclxuICAgZGlzdGFuY2VUbyhvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHJldHVybiBWZWN0b3IyLmRpc3RhbmNlKHRoaXMsIG90aGVyKTtcclxuICAgfVxyXG4gICBkaXJlY3Rpb25UbyhvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHJldHVybiBWZWN0b3IyLmRpcmVjdGlvbih0aGlzLCBvdGhlcik7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBkaXJlY3Rpb24oYTogVmVjdG9yMiwgYjogVmVjdG9yMil7XHJcbiAgICAgIHJldHVybiBiLmNsb25lKCkuc3ViKGEpO1xyXG4gICB9XHJcbiAgIFxyXG4gICBzdGF0aWMgZGlzdGFuY2UoYTogVmVjdG9yMiwgYjogVmVjdG9yMil7XHJcbiAgICAgIGxldCBkaXN0WCA9IGEueCAtIGIueDtcclxuICAgICAgbGV0IGRpc3RZID0gYS55IC0gYi55O1xyXG5cclxuICAgICAgcmV0dXJuIE1hdGguc3FydChkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WSk7XHJcbiAgIH1cclxuXHJcbiAgIGxlcnBUbyhvdGhlcjogVmVjdG9yMiwgZjogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIFZlY3RvcjIubGVycE91dCh0aGlzLCBvdGhlciwgdGhpcywgZik7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBsZXJwKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIsIGY6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB0aGlzLmxlcnBPdXQoYSwgYiwgbmV3IFZlY3RvcjIoKSwgZik7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBsZXJwT3V0KGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIsIG91dDogVmVjdG9yMiwgZjogbnVtYmVyKXtcclxuICAgICAgb3V0LnggPSBDdXJ2ZS5sZXJwKGEueCwgYi54LCBmKTtcclxuICAgICAgb3V0LnkgPSBDdXJ2ZS5sZXJwKGEueSwgYi55LCBmKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBvdXQ7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBkb3QoYTogVmVjdG9yMiwgYjogVmVjdG9yMil7XHJcbiAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBhbmdsZWQoYW5nbGU6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yMihNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKSk7XHJcbiAgIH1cclxuXHJcbiAgIGNsb25lKCl7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLngsIHRoaXMueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSBcIi4vQ29sbGlkZXJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBCb3hDb2xsaWRlciBleHRlbmRzIENvbGxpZGVye1xyXG4gICBvZmZzZXQ6IFZlY3RvcjI7XHJcbiAgIHNpemU6IFZlY3RvcjI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihzaXplOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKSwgb2Zmc2V0OiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKSl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgIHRoaXMub2Zmc2V0ID0gb2Zmc2V0O1xyXG4gICB9XHJcblxyXG4gICBnZXRCb3VuZHMocG9zaXRpb246IFZlY3RvcjIsIG91dDogQUFCQilcclxuICAgeyAgXHJcbiAgICAgIHJldHVybiBvdXQuc2V0KFxyXG4gICAgICAgICBwb3NpdGlvbi54IC0gdGhpcy5vZmZzZXQueCwgXHJcbiAgICAgICAgIHBvc2l0aW9uLnkgLSB0aGlzLm9mZnNldC55LFxyXG4gICAgICAgICBwb3NpdGlvbi54ICsgdGhpcy5zaXplLnggLSB0aGlzLm9mZnNldC54LFxyXG4gICAgICAgICBwb3NpdGlvbi55ICsgdGhpcy5zaXplLnkgLSB0aGlzLm9mZnNldC55KTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGZyb21BQUJCKGFhYmI6IEFBQkIpe1xyXG4gICAgICByZXR1cm4gbmV3IEJveENvbGxpZGVyKG5ldyBWZWN0b3IyKGFhYmIud2lkdGgsIGFhYmIuaGVpZ2h0KSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQ29sbGlkZXJ7XHJcbiAgIGFic3RyYWN0IGdldEJvdW5kcyhwb3NpdGlvbjogVmVjdG9yMiwgb3V0OiBBQUJCKTogQUFCQjtcclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIi4vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tIFwiLi9Db2xsaWRlclwiO1xyXG5pbXBvcnQgeyBUaWxlQ29sbGlkZXIgfSBmcm9tIFwiLi9UaWxlQ29sbGlkZXJcIjtcclxuXHJcbi8vIFRPRE8gcHJldmVudCBtZW1vcnkgYWxsb2NhdGlvbiBoZXJlLlxyXG4vLyBTaG91bGQgbWF5YmUgYmUgYSBjb2xsaXNpb24gY2xhc3MsIHRoYXQgaGFzIFxyXG4vLyBhbGwgdGhpcyBtZW1vcnkgcHJlYWxsb2NhdGVkLlxyXG5cclxuLy8gSXQgYmUgZmluZSBmb3Igbm93IHRob1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuc3R1Y2soc2VsZjogQ29sbGlkZXIsIG90aGVyOiBDb2xsaWRlciwgcmVsYXRpdmVQb3NpdGlvbjogVmVjdG9yMiwgcmVsYXRpdmVWZWxvY2l0eTogVmVjdG9yMik6IFZlY3RvcjJ8dW5kZWZpbmVke1xyXG4gICBpZihzZWxmIGluc3RhbmNlb2YgQm94Q29sbGlkZXIpe1xyXG4gICAgICBpZihvdGhlciBpbnN0YW5jZW9mIEJveENvbGxpZGVyKXtcclxuICAgICAgICAgcmV0dXJuIHVuc3R1Y2tCb3hCb3goc2VsZiwgb3RoZXIsIHJlbGF0aXZlUG9zaXRpb24sIHJlbGF0aXZlVmVsb2NpdHkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYob3RoZXIgaW5zdGFuY2VvZiBUaWxlQ29sbGlkZXIpe1xyXG4gICAgICAgICByZXR1cm4gdW5zdHVja0JveFRpbGUoc2VsZiwgb3RoZXIsIHJlbGF0aXZlUG9zaXRpb24sIHJlbGF0aXZlVmVsb2NpdHkpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY29sbGlzaW9uIGZvdW5kIGZvciAke3NlbGYuY29uc3RydWN0b3IubmFtZX0gYW5kICR7b3RoZXIuY29uc3RydWN0b3IubmFtZX1gKTtcclxuICAgICAgfVxyXG4gICB9XHJcbiAgIGVsc2UgaWYoc2VsZiBpbnN0YW5jZW9mIFRpbGVDb2xsaWRlcil7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY29sbGlzaW9uIGZvdW5kIGZvciAke3NlbGYuY29uc3RydWN0b3IubmFtZX0gYW5kICR7b3RoZXIuY29uc3RydWN0b3IubmFtZX1gKTtcclxuICAgICAgLy8gaWYob3RoZXIgaW5zdGFuY2VvZiBCb3hDb2xsaWRlcil7XHJcbiAgICAgIC8vICAgIHJldHVybiB1bnN0dWNrQm94VGlsZShvdGhlclBvc2l0aW9uLCBvdGhlciwgcG9zaXRpb24sIHNlbGYsIHVuc3R1Y2tWZWN0b3IpPy5uZWdhdGUoKTtcclxuICAgICAgLy8gfVxyXG4gICAgICAvLyBlbHNle1xyXG4gICAgICAvLyB9XHJcbiAgIH1cclxuICAgZWxzZXtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBjb2xsaXNpb24gZm91bmQgZm9yICR7c2VsZi5jb25zdHJ1Y3Rvci5uYW1lfSBhbmQgJHtvdGhlci5jb25zdHJ1Y3Rvci5uYW1lfWApO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bnN0dWNrQm94VGlsZShzZWxmOiBCb3hDb2xsaWRlciwgb3RoZXI6IFRpbGVDb2xsaWRlciwgcmVsYXRpdmVQb3NpdGlvbjogVmVjdG9yMiwgcmVsYXRpdmVWZWxvY2l0eTogVmVjdG9yMik6IFZlY3RvcjJ8dW5kZWZpbmVke1xyXG4gICBsZXQgc2VsZkJvdW5kcyA9IHNlbGYuZ2V0Qm91bmRzKG5ldyBWZWN0b3IyKCksIG5ldyBBQUJCKCkpO1xyXG4gICBsZXQgb3RoZXJCb3VuZHMgPSBvdGhlci5nZXRCb3VuZHMocmVsYXRpdmVQb3NpdGlvbiwgbmV3IEFBQkIoKSk7XHJcblxyXG4gICBsZXQgeE92ZXJsYXAgPSAwO1xyXG4gICBsZXQgeU92ZXJsYXAgPSAwO1xyXG5cclxuICAgbGV0IHhDb2xsaWRlZCA9IGZhbHNlO1xyXG4gICBsZXQgeUNvbGxpZGVkID0gZmFsc2U7XHJcblxyXG4gICBpZihvdGhlci5sZWZ0ICYmIHJlbGF0aXZlVmVsb2NpdHkueCA+IDApe1xyXG4gICAgICB4T3ZlcmxhcCA9IC0oc2VsZkJvdW5kcy5yaWdodCAtIG90aGVyQm91bmRzLmxlZnQpO1xyXG4gICAgICB4Q29sbGlkZWQgPSB0cnVlO1xyXG4gICB9ZWxzZSBpZihvdGhlci5yaWdodCAmJiByZWxhdGl2ZVZlbG9jaXR5LnggPD0gMCl7XHJcbiAgICAgIHhPdmVybGFwID0gLShzZWxmQm91bmRzLmxlZnQgLSBvdGhlckJvdW5kcy5yaWdodCk7XHJcbiAgICAgIHhDb2xsaWRlZCA9IHRydWU7XHJcbiAgIH1cclxuICAgXHJcbiAgIGlmKG90aGVyLnRvcCAmJiByZWxhdGl2ZVZlbG9jaXR5LnkgPiAwKXtcclxuICAgICAgeU92ZXJsYXAgPSAtKHNlbGZCb3VuZHMuYm90dG9tIC0gb3RoZXJCb3VuZHMudG9wKTtcclxuICAgICAgeUNvbGxpZGVkID0gdHJ1ZTtcclxuICAgfWVsc2UgaWYob3RoZXIuYm90dG9tICYmIHJlbGF0aXZlVmVsb2NpdHkueSA8PSAwKXtcclxuICAgICAgeU92ZXJsYXAgPSAtKHNlbGZCb3VuZHMudG9wIC0gb3RoZXJCb3VuZHMuYm90dG9tKTtcclxuICAgICAgeUNvbGxpZGVkID0gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgLy8gSWYgaXQgX2Nhbl8gZG8gYm90aCBheGlzLCBkbyBvbmx5IF9vbmVfXHJcbiAgIGlmKHhDb2xsaWRlZCAmJiB5Q29sbGlkZWQpe1xyXG4gICAgICBpZihNYXRoLmFicyh4T3ZlcmxhcCkgPiBNYXRoLmFicyh5T3ZlcmxhcCkpe1xyXG4gICAgICAgICB4T3ZlcmxhcCA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgeU92ZXJsYXAgPSAwO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHJldHVybiBuZXcgVmVjdG9yMih4T3ZlcmxhcCwgeU92ZXJsYXApO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5zdHVja0JveEJveChzZWxmOiBCb3hDb2xsaWRlciwgb3RoZXI6IEJveENvbGxpZGVyLCByZWxhdGl2ZVBvc2l0aW9uOiBWZWN0b3IyLCByZWxhdGl2ZVZlbG9jaXR5OiBWZWN0b3IyKTogVmVjdG9yMnx1bmRlZmluZWR7XHJcbiAgIGxldCBzZWxmQm91bmRzID0gc2VsZi5nZXRCb3VuZHMobmV3IFZlY3RvcjIoKSwgbmV3IEFBQkIoKSk7XHJcbiAgIGxldCBvdGhlckJvdW5kcyA9IG90aGVyLmdldEJvdW5kcyhyZWxhdGl2ZVBvc2l0aW9uLCBuZXcgQUFCQigpKTtcclxuXHJcbiAgIGxldCB4T3ZlcmxhcCA9IHNlbGZCb3VuZHMubWluT3ZlcmxhcFhXaXRoQmlhcyhvdGhlckJvdW5kcywgcmVsYXRpdmVWZWxvY2l0eS54KTtcclxuICAgbGV0IHlPdmVybGFwID0gc2VsZkJvdW5kcy5taW5PdmVybGFwWVdpdGhCaWFzKG90aGVyQm91bmRzLCByZWxhdGl2ZVZlbG9jaXR5LnkpO1xyXG5cclxuICAgaWYoTWF0aC5hYnMoeE92ZXJsYXApIDwgTWF0aC5hYnMoeU92ZXJsYXApKXtcclxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHhPdmVybGFwLCAwKTtcclxuICAgfVxyXG4gICBlbHNle1xyXG4gICAgICByZXR1cm4gbmV3IFZlY3RvcjIoMCwgeU92ZXJsYXApO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gXCIuL0NvbGxpZGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZUNvbGxpZGVyIGV4dGVuZHMgQ29sbGlkZXJ7XHJcbiAgIHNpemU6IFZlY3RvcjI7XHJcblxyXG4gICB0b3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgbGVmdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBib3R0b206IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgcmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHNpemU6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgfVxyXG5cclxuICAgZ2V0Qm91bmRzKHBvc2l0aW9uOiBWZWN0b3IyLCBvdXQ6IEFBQkIpXHJcbiAgIHsgIFxyXG4gICAgICByZXR1cm4gb3V0LnNldChcclxuICAgICAgICAgcG9zaXRpb24ueCwgXHJcbiAgICAgICAgIHBvc2l0aW9uLnksXHJcbiAgICAgICAgIHBvc2l0aW9uLnggKyB0aGlzLnNpemUueCxcclxuICAgICAgICAgcG9zaXRpb24ueSArIHRoaXMuc2l6ZS55KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHtcclxuICAgZ2FtZSE6IEdhbWU7XHJcbiAgIGdhbWVPYmplY3QhOiBHYW1lT2JqZWN0O1xyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICBcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICB9XHJcbiAgIGZpeGVkVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBzY2VuZSgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5nYW1lT2JqZWN0LnNjZW5lO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuL1NjZW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZU9iamVjdCB7XHJcbiAgIGNvbXBvbmVudHM6IENvbXBvbmVudFtdO1xyXG4gICBzY2VuZSE6IFNjZW5lO1xyXG5cclxuICAgZ2FtZSE6IEdhbWU7XHJcbiAgIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIFxyXG4gICBhbHdheXNVcGRhdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gICB9XHJcbiAgIFxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBpZih0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2gob2JqID0+IG9iai5pbml0KGdhbWUpKTtcclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICBpZighdGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChvYmogPT4gb2JqLmRlc3Ryb3koKSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2gob2JqID0+IG9iai51cGRhdGUoZGVsdGEpKTtcclxuICAgfVxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2gob2JqID0+IG9iai5maXhlZFVwZGF0ZShkZWx0YSkpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmouZHJhdyhncmFwaGljcykpO1xyXG4gICB9XHJcblxyXG4gICBhZGRDb21wb25lbnQ8VCBleHRlbmRzIENvbXBvbmVudD4oY29tcG9uZW50OiBUKXtcclxuICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICAgICAgY29tcG9uZW50LmdhbWVPYmplY3QgPSB0aGlzO1xyXG4gICAgICBcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG4gICAgICBjb21wb25lbnQuaW5pdCh0aGlzLmdhbWUpO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgfVxyXG5cclxuICAgcmVtb3ZlQ29tcG9uZW50KGNvbXBvbmVudDogQ29tcG9uZW50KXtcclxuICAgICAgbGV0IGlkeCA9IHRoaXMuY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCk7XHJcblxyXG4gICAgICBpZihpZHggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgIFxyXG4gICAgICBpZighdGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcclxuICAgfVxyXG5cclxuICAgZmluZENvbXBvbmVudChwcmVkaWNhdGU6IChjb21wb25lbnQ6IENvbXBvbmVudCkgPT4gYm9vbGVhbil7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuZmluZChwcmVkaWNhdGUpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IFBoeXNpY3MgfSBmcm9tIFwiZW5naW5lL1BoeXNpY3NcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcImdyYXBoaWNzL0NhbWVyYVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBQYXJ0aWNsZVN5c3RlbSB9IGZyb20gXCJncmFwaGljcy9QYXJ0aWNsZVN5c3RlbVwiO1xyXG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSBcInRpbGVtYXAvVGlsZU1hcFwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNjZW5le1xyXG4gICBjYW1lcmE6IENhbWVyYTtcclxuICAgZ2FtZU9iamVjdHM6IEdhbWVPYmplY3RbXTtcclxuICAgZ2FtZSE6IEdhbWU7XHJcbiAgIHRpbGVtYXA/OiBUaWxlTWFwO1xyXG5cclxuICAgcGh5c2ljczogUGh5c2ljcztcclxuICAgcGFydGljbGVTeXN0ZW06IFBhcnRpY2xlU3lzdGVtO1xyXG5cclxuICAgLy8gVGhpcyBnZXRzIHVzZWQgZm9yIHRyYW5zaXRpb25zIDopXHJcbiAgIHBhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMuY2FtZXJhID0gbmV3IENhbWVyYSgpO1xyXG4gICAgICB0aGlzLmdhbWVPYmplY3RzID0gW107XHJcbiAgICAgIHRoaXMucGh5c2ljcyA9IG5ldyBQaHlzaWNzKCk7XHJcblxyXG4gICAgICB0aGlzLnBhcnRpY2xlU3lzdGVtID0gbmV3IFBhcnRpY2xlU3lzdGVtKCk7XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIGlmKHRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmdhbWUgPSBnYW1lO1xyXG4gICAgICB0aGlzLmdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IG9iai5pbml0KGdhbWUpKTtcclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICBpZighdGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gICAgICB0aGlzLmdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IG9iai5kZXN0cm95KCkpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGlmKCF0aGlzLnBhdXNlZCkgdGhpcy50aWxlbWFwPy51cGRhdGUoZGVsdGEsIHRoaXMuY2FtZXJhLmdldEJvdW5kcygpKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4geyBpZighdGhpcy5wYXVzZWQgfHwgb2JqLmFsd2F5c1VwZGF0ZSkgb2JqLnVwZGF0ZShkZWx0YSk7IH0pO1xyXG5cclxuICAgICAgaWYoIXRoaXMucGF1c2VkKSB0aGlzLnBhcnRpY2xlU3lzdGVtLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgIFxyXG4gICAgICBpZighdGhpcy5wYXVzZWQpIHRoaXMucGh5c2ljcy51cGRhdGUoZGVsdGEpO1xyXG4gICB9XHJcbiAgIGZpeGVkVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IHsgaWYoIXRoaXMucGF1c2VkIHx8IG9iai5hbHdheXNVcGRhdGUpIG9iai5maXhlZFVwZGF0ZShkZWx0YSk7IH0pO1xyXG4gICAgICBpZighdGhpcy5wYXVzZWQpIHRoaXMucGh5c2ljcy5maXhlZFVwZGF0ZShkZWx0YSk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgZ3JhcGhpY3Muc2V0Q2FtZXJhKHRoaXMuY2FtZXJhKTtcclxuXHJcbiAgICAgIHRoaXMudGlsZW1hcD8uZHJhdyhncmFwaGljcywgdGhpcy5jYW1lcmEuZ2V0Qm91bmRzKCkpO1xyXG4gICAgICB0aGlzLnBhcnRpY2xlU3lzdGVtLmRyYXcoZ3JhcGhpY3MpO1xyXG4gICAgICB0aGlzLmdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IG9iai5kcmF3KGdyYXBoaWNzKSk7XHJcbiAgICAgIHRoaXMucGh5c2ljcy5kcmF3RGVidWcoZ3JhcGhpY3MpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGVTaXplKCl7XHJcbiAgICAgIGxldCBhc3AgPSB0aGlzLmdhbWUuY2FudmFzLndpZHRoIC8gdGhpcy5nYW1lLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMuY2FtZXJhLndpZHRoID0gdGhpcy5jYW1lcmEuaGVpZ2h0ICogYXNwO1xyXG4gICB9XHJcblxyXG4gICBhZGRHYW1lT2JqZWN0KG9iajogR2FtZU9iamVjdCl7XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMucHVzaChvYmopO1xyXG4gICAgICBvYmouc2NlbmUgPSB0aGlzO1xyXG5cclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuXHJcbiAgICAgIG9iai5pbml0KHRoaXMuZ2FtZSk7XHJcbiAgIH1cclxuICAgXHJcbiAgIHJlbW92ZUdhbWVPYmplY3Qob2JqOiBHYW1lT2JqZWN0KXtcclxuICAgICAgbGV0IGlkeCA9IHRoaXMuZ2FtZU9iamVjdHMuaW5kZXhPZihvYmopO1xyXG5cclxuICAgICAgaWYoaWR4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5zcGxpY2UoaWR4LCAxKTtcclxuXHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcblxyXG4gICAgICBvYmouZGVzdHJveSgpO1xyXG4gICB9XHJcblxyXG4gICBmaW5kT2JqZWN0KHByZWRpY2F0ZTogKGNvbXBvbmVudDogR2FtZU9iamVjdCkgPT4gYm9vbGVhbil7XHJcbiAgICAgIHJldHVybiB0aGlzLmdhbWVPYmplY3RzLmZpbmQocHJlZGljYXRlKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Db2xsaWRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gXCJzaWduYWxzL1NpZ25hbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwiLi9UcmFuc2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSaWdpZGJvZHkgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgIHRyYW5zZm9ybSE6IFRyYW5zZm9ybTtcclxuICAgdmVsb2NpdHk6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICBtYXNzOiBudW1iZXIgPSAxO1xyXG4gICBib3VuY3luZXNzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgcHJldmlvdXNQb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgIHVuc3R1Y2tEaXN0YW5jZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICBjb2xsaWRlZExlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY29sbGlkZWRSaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjb2xsaWRlZFRvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjb2xsaWRlZEJvdHRvbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAga2luZW1hdGljOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHNvbGlkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHVzZUR5bmFtaWNDb2xsaXNpb25zOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBvbkNvbGxpc2lvbjogU2lnbmFsPFJpZ2lkYm9keT4gPSBuZXcgU2lnbmFsPFJpZ2lkYm9keT4oKTtcclxuXHJcbiAgIGNvbGxpZGVyOiBDb2xsaWRlciA9IG5ldyBCb3hDb2xsaWRlcigpO1xyXG5cclxuICAgcHJpdmF0ZSBhYWJiOiBBQUJCO1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYWFiYiA9IG5ldyBBQUJCKDAsIDAsIDAsIDApO1xyXG4gICB9XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBzdXBlci5pbml0KGdhbWUpO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLmFkZEJvZHkodGhpcyk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoYyA9PiBjIGluc3RhbmNlb2YgVHJhbnNmb3JtKSBhcyBUcmFuc2Zvcm07XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLnJlbW92ZUJvZHkodGhpcyk7XHJcbiAgIH1cclxuXHJcbiAgIGNvbGxpZGVzKG90aGVyOiBSaWdpZGJvZHkpe1xyXG4gICAgICByZXR1cm4gb3RoZXIuYm91bmRpbmdCb3gub3ZlcmxhcHModGhpcy5ib3VuZGluZ0JveCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBib3VuZGluZ0JveCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xsaWRlci5nZXRCb3VuZHModGhpcy50cmFuc2Zvcm0ucG9zaXRpb24sIHRoaXMuYWFiYik7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm0gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgIHBvc2l0aW9uOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgXHJcbiAgIC8vIEludGVycG9sYXRlZCBwb3NpdGlvblxyXG4gICBpbnRlcnBvbGF0ZWRQb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbn0iLCJleHBvcnQgY2xhc3MgU2lnbmFsPFQ+e1xyXG4gICBmdW5jdGlvbnM6ICgodHlwZTogVCkgPT4gdm9pZClbXTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zID0gW107XHJcbiAgIH1cclxuXHJcbiAgIGxpc3RlbihmdW5jOiAodHlwZTogVCkgPT4gdm9pZCl7XHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zLnB1c2goZnVuYyk7XHJcbiAgICAgIHJldHVybiBmdW5jO1xyXG4gICB9XHJcbiAgIHJlbW92ZShmdW5jOiAodHlwZTogVCkgPT4gdm9pZCl7XHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuZnVuY3Rpb25zLmluZGV4T2YoZnVuYyk7XHJcbiAgICAgIGlmKGluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5mdW5jdGlvbnMuc3BsaWNlKGluZGV4KTtcclxuICAgfVxyXG5cclxuICAgZW1pdChldmVudCA6IFQpe1xyXG4gICAgICB0aGlzLmZ1bmN0aW9ucy5mb3JFYWNoKGZ1bmMgPT4gZnVuYyhldmVudCkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiZ3JhcGhpY3MvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSwgU3ByaXRlU2hlZXQgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFRpbGVDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9UaWxlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlRnJvbVRpbGVzZXQsIFRpbGVkTWFwLCBUaWxlZE9iamVjdCwgVGlsZWRPYmplY3RMYXllciwgVGlsZWRPYmplY3RMYXllclR5cGUsIFRpbGVkVGlsZUxheWVyLCBUaWxlZFRpbGVMYXllclR5cGUsIFRpbGVkQ29sbGlkZXJMYXllck5hbWUsIFRpbGVkVGlsZXNldCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XHJcblxyXG50eXBlIFRpbGVtYXBPYmplY3RMb2FkZXIgPSAob2JqZWN0OiBUaWxlZE9iamVjdCkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlbWFwVGlsZUxheWVye1xyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuICAgdGlsZXM6IChBbmltYXRpb258dW5kZWZpbmVkKVtdO1xyXG5cclxuICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy50aWxlcyA9IFtdO1xyXG5cclxuICAgICAgLy8gbGVuZ3RoIHN0dWZmLi4uIDonKVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgd2lkdGggKiBoZWlnaHQ7IGkrKykgdGhpcy50aWxlcy5wdXNoKHVuZGVmaW5lZCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldFRpbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy50aWxlc1t4ICsgeSAqIHRoaXMud2lkdGhdO1xyXG4gICB9XHJcbiAgIHNldFRpbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIGFuaW1hdGlvbjogQW5pbWF0aW9uKXtcclxuICAgICAgdGhpcy50aWxlc1t4ICsgeSAqIHRoaXMud2lkdGhdID0gYW5pbWF0aW9uO1xyXG4gICB9XHJcbiAgIHNldFRpbGVGcm9tSW5kZXgoaW5kZXg6IG51bWJlciwgYW5pbWF0aW9uOiBBbmltYXRpb24pe1xyXG4gICAgICB0aGlzLnRpbGVzW2luZGV4XSA9IGFuaW1hdGlvbjtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIsIHRpbGVXaWR0aDogbnVtYmVyLCB0aWxlSGVpZ2h0OiBudW1iZXIsIGJvdW5kczogQUFCQil7XHJcbiAgICAgIGxldCBzdGFydFggPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGJvdW5kcy5sZWZ0IC8gdGlsZVdpZHRoKSk7XHJcbiAgICAgIGxldCBlbmRYID0gTWF0aC5mbG9vcihNYXRoLm1pbih0aGlzLndpZHRoLCBib3VuZHMucmlnaHQgLyB0aWxlV2lkdGggKyAxKSk7XHJcblxyXG4gICAgICBsZXQgc3RhcnRZID0gTWF0aC5mbG9vcihNYXRoLm1heCgwLCBib3VuZHMudG9wIC8gdGlsZUhlaWdodCkpO1xyXG4gICAgICBsZXQgZW5kWSA9IE1hdGguZmxvb3IoTWF0aC5taW4odGhpcy5oZWlnaHQsIGJvdW5kcy5ib3R0b20gLyB0aWxlSGVpZ2h0ICsgMSkpO1xyXG4gICAgICBcclxuICAgICAgZm9yKGxldCB4ID0gc3RhcnRYOyB4IDwgZW5kWDsgeCsrKXtcclxuICAgICAgICAgZm9yKGxldCB5ID0gc3RhcnRZOyB5IDwgZW5kWTsgeSsrKXtcclxuICAgICAgICAgICAgbGV0IHRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XHJcbiAgICAgICAgICAgIGlmKHRpbGUgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICB0aWxlLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbiAgIFxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlciwgYm91bmRzOiBBQUJCKXtcclxuICAgICAgbGV0IHN0YXJ0WCA9IE1hdGguZmxvb3IoTWF0aC5tYXgoMCwgYm91bmRzLmxlZnQgLyB0aWxlV2lkdGgpKTtcclxuICAgICAgbGV0IGVuZFggPSBNYXRoLmZsb29yKE1hdGgubWluKHRoaXMud2lkdGgsIGJvdW5kcy5yaWdodCAvIHRpbGVXaWR0aCArIDEpKTtcclxuXHJcbiAgICAgIGxldCBzdGFydFkgPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGJvdW5kcy50b3AgLyB0aWxlSGVpZ2h0KSk7XHJcbiAgICAgIGxldCBlbmRZID0gTWF0aC5mbG9vcihNYXRoLm1pbih0aGlzLmhlaWdodCwgYm91bmRzLmJvdHRvbSAvIHRpbGVIZWlnaHQgKyAxKSk7XHJcblxyXG4gICAgICBmb3IobGV0IHggPSBzdGFydFg7IHggPCBlbmRYOyB4Kyspe1xyXG4gICAgICAgICBmb3IobGV0IHkgPSBzdGFydFk7IHkgPCBlbmRZOyB5Kyspe1xyXG4gICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMuZ2V0VGlsZSh4LCB5KTtcclxuICAgICAgICAgICAgaWYodGlsZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGVTaW1wbGUodGlsZS5mcmFtZSwgeCAqIHRpbGVXaWR0aCwgeSAqIHRpbGVIZWlnaHQpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZW1hcENvbGxpc2lvbkxheWVye1xyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuICAgdGlsZXM6IGJvb2xlYW5bXTtcclxuICAgdGlsZW1hcDogVGlsZU1hcDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHRpbGVtYXA6IFRpbGVNYXAsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKXtcclxuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMudGlsZW1hcCA9IHRpbGVtYXA7XHJcblxyXG4gICAgICB0aGlzLnRpbGVzID0gW107XHJcblxyXG4gICAgICAvLyBsZW5ndGggc3R1ZmYuLi4gOicpXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3aWR0aCAqIGhlaWdodDsgaSsrKSB0aGlzLnRpbGVzLnB1c2goZmFsc2UpO1xyXG4gICB9XHJcblxyXG4gICBpc1BpeGVsU29saWQoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5pc1RpbGVTb2xpZChcclxuICAgICAgICAgTWF0aC5mbG9vcih4IC8gdGhpcy50aWxlbWFwLnRpbGVXaWR0aCksXHJcbiAgICAgICAgIE1hdGguZmxvb3IoeSAvIHRoaXMudGlsZW1hcC50aWxlSGVpZ2h0KVxyXG4gICAgICApO1xyXG4gICB9XHJcblxyXG4gICBpc1RpbGVTb2xpZCh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFRpbGUoeCwgeSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldFRpbGVDb2xsaWRlcih4OiBudW1iZXIsIHk6IG51bWJlciwgdGlsZUNvbGxpZGVyOiBUaWxlQ29sbGlkZXIpe1xyXG4gICAgICB0aWxlQ29sbGlkZXIuc2l6ZS54ID0gdGhpcy50aWxlbWFwLnRpbGVXaWR0aDtcclxuICAgICAgdGlsZUNvbGxpZGVyLnNpemUueSA9IHRoaXMudGlsZW1hcC50aWxlSGVpZ2h0O1xyXG5cclxuICAgICAgdGlsZUNvbGxpZGVyLnRvcCA9ICF0aGlzLmlzVGlsZVNvbGlkKHgsIHkgLSAxKTtcclxuICAgICAgdGlsZUNvbGxpZGVyLmJvdHRvbSA9ICF0aGlzLmlzVGlsZVNvbGlkKHgsIHkgKyAxKTtcclxuICAgICAgdGlsZUNvbGxpZGVyLmxlZnQgPSAhdGhpcy5pc1RpbGVTb2xpZCh4IC0gMSwgeSk7XHJcbiAgICAgIHRpbGVDb2xsaWRlci5yaWdodCA9ICF0aGlzLmlzVGlsZVNvbGlkKHggKyAxLCB5KTtcclxuXHJcbiAgICAgIHJldHVybiB0aWxlQ29sbGlkZXI7XHJcbiAgIH1cclxuXHJcbiAgIGdldFRpbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICBpZih4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZih4ID49IHRoaXMud2lkdGgpIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYoeSA8IDApIHJldHVybiBmYWxzZTsgXHJcbiAgICAgIGlmKHkgPj0gdGhpcy5oZWlnaHQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW3ggKyB5ICogdGhpcy53aWR0aF07XHJcbiAgIH1cclxuICAgc2V0VGlsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgc29saWQ6IGJvb2xlYW4pe1xyXG4gICAgICB0aGlzLnRpbGVzW3ggKyB5ICogdGhpcy53aWR0aF0gPSBzb2xpZDtcclxuICAgfVxyXG4gICBzZXRUaWxlRnJvbUluZGV4KGluZGV4OiBudW1iZXIsIHNvbGlkOiBib29sZWFuKXtcclxuICAgICAgdGhpcy50aWxlc1tpbmRleF0gPSBzb2xpZDtcclxuICAgfVxyXG5cclxuICAgZHJhd0RlYnVnKGdyYXBoaWNzOiBHcmFwaGljcywgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlciwgYm91bmRzOiBBQUJCKXtcclxuICAgICAgbGV0IHN0YXJ0WCA9IE1hdGguZmxvb3IoTWF0aC5tYXgoMCwgYm91bmRzLmxlZnQgLyB0aWxlV2lkdGgpKTtcclxuICAgICAgbGV0IGVuZFggPSBNYXRoLmZsb29yKE1hdGgubWluKHRoaXMud2lkdGgsIGJvdW5kcy5yaWdodCAvIHRpbGVXaWR0aCArIDEpKTtcclxuXHJcbiAgICAgIGxldCBzdGFydFkgPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGJvdW5kcy50b3AgLyB0aWxlSGVpZ2h0KSk7XHJcbiAgICAgIGxldCBlbmRZID0gTWF0aC5mbG9vcihNYXRoLm1pbih0aGlzLmhlaWdodCwgYm91bmRzLmJvdHRvbSAvIHRpbGVIZWlnaHQgKyAxKSk7XHJcblxyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcihcInJnYmEoMjU1LCA5MCwgMjAsIDAuOClcIik7XHJcblxyXG4gICAgICBsZXQgY29sbGlkZXIgPSBuZXcgVGlsZUNvbGxpZGVyKCk7XHJcbiAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IDI7XHJcblxyXG4gICAgICBmb3IobGV0IHggPSBzdGFydFg7IHggPCBlbmRYOyB4Kyspe1xyXG4gICAgICAgICBmb3IobGV0IHkgPSBzdGFydFk7IHkgPCBlbmRZOyB5Kyspe1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc1RpbGVTb2xpZCh4LCB5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb2xsaWRlciA9IHRoaXMuZ2V0VGlsZUNvbGxpZGVyKHgsIHksIGNvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLnRvcCl7XHJcbiAgICAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0YW5nbGUoeCAqIHRpbGVXaWR0aCwgeSAqIHRpbGVIZWlnaHQsIHRpbGVXaWR0aCwgdGhpY2tuZXNzLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjb2xsaWRlci5ib3R0b20pe1xyXG4gICAgICAgICAgICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKHggKiB0aWxlV2lkdGgsIHkgKiB0aWxlSGVpZ2h0ICsgdGlsZUhlaWdodCAtIHRoaWNrbmVzcywgdGlsZVdpZHRoLCB0aGlja25lc3MsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLmxlZnQpe1xyXG4gICAgICAgICAgICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKHggKiB0aWxlV2lkdGgsIHkgKiB0aWxlSGVpZ2h0LCB0aGlja25lc3MsIHRpbGVIZWlnaHQsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLnJpZ2h0KXtcclxuICAgICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3RhbmdsZSh4ICogdGlsZVdpZHRoICsgdGlsZVdpZHRoIC0gdGhpY2tuZXNzLCB5ICogdGlsZUhlaWdodCwgdGhpY2tuZXNzLCB0aWxlSGVpZ2h0LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCB7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG4gICB0aWxlV2lkdGg6IG51bWJlcjtcclxuICAgdGlsZUhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgbGF5ZXJzOiBUaWxlbWFwVGlsZUxheWVyW107XHJcbiAgIGNvbGxpZGVyczogVGlsZW1hcENvbGxpc2lvbkxheWVyW107XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgIHRoaXMudGlsZVdpZHRoID0gdGlsZVdpZHRoO1xyXG4gICAgICB0aGlzLnRpbGVIZWlnaHQgPSB0aWxlSGVpZ2h0O1xyXG4gICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICAgICB0aGlzLmNvbGxpZGVycyA9IFtdO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgYm91bmRzOiBBQUJCKXtcclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKDAsIDAsIHRoaXMud2lkdGggKiB0aGlzLnRpbGVXaWR0aCwgdGhpcy5oZWlnaHQgKiB0aGlzLnRpbGVIZWlnaHQsIHRydWUpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5kcmF3KGdyYXBoaWNzLCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0LCBib3VuZHMpKTtcclxuICAgICAgLy8gdGhpcy5jb2xsaWRlcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5kcmF3RGVidWcoZ3JhcGhpY3MsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQsIGJvdW5kcykpO1xyXG4gICB9XHJcblxyXG4gICAvLyBUT0RPIG1heWJlIG1vcmUgbGlrZSBiYXRjaCB1cGRhdGUgZXZlcnkgeCBmcmFtZXMgb3IgZGV2aWRlIHVwIHRoZSB3b3JrIHNvbWVob3cgb3ZlciBtdXB0aXBsZSBmcmFtZXNcclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIsIGJvdW5kczogQUFCQil7ICAgICAgXHJcbiAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gbGF5ZXIudXBkYXRlKGRlbHRhLCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0LCBib3VuZHMpKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBmcm9tVGlsZWRNYXAobWFwOiBUaWxlZE1hcCwgbG9hZGVyOiBUaWxlbWFwT2JqZWN0TG9hZGVyKXtcclxuICAgICAgbGV0IHRpbGVtYXAgPSBuZXcgVGlsZU1hcChtYXAud2lkdGgsIG1hcC5oZWlnaHQsIG1hcC50aWxld2lkdGgsIG1hcC50aWxlaGVpZ2h0KTtcclxuXHJcbiAgICAgIHRpbGVtYXAuYmFja2dyb3VuZENvbG9yID0gbWFwLmJhY2tncm91bmRjb2xvcjtcclxuICAgICAgXHJcbiAgICAgIC8vIFRJTEVTRVRTXHJcbiAgICAgIGxldCB0aWxlc2V0czoge3NldDogVGlsZWRUaWxlc2V0LCBzaGVldDogU3ByaXRlU2hlZXR9W10gPSBbXTtcclxuICAgICAgbGV0IHRpbGVzOiB7IFtrZXk6IG51bWJlcl06IEFuaW1hdGlvbiB9ID0ge307XHJcbiAgICAgIFxyXG4gICAgICBtYXAudGlsZXNldHMuZm9yRWFjaChzZXQgPT4ge1xyXG4gICAgICAgICBsZXQgc2hlZXQgPSBTcHJpdGVTaGVldC5mcm9tSFRNTChzZXQubmFtZSk7XHJcbiAgICAgICAgIHRpbGVzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICBzZXQsXHJcbiAgICAgICAgICAgIHNoZWV0XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgLy8gTG9hZCBhbGwgZGVmYXVsdCBhbmltYXRpb25zXHJcbiAgICAgICAgIHNldC50aWxlcz8uZm9yRWFjaCh0aWxlID0+IHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGlsZS5pZCArIHNldC5maXJzdGdpZDtcclxuXHJcbiAgICAgICAgICAgIGxldCBhbmltYXRpb24gPSAgbmV3IEFuaW1hdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgdGlsZS5hbmltYXRpb24uZm9yRWFjaChmcmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgIGFuaW1hdGlvbi5hZGRGcmFtZShnZXRTcHJpdGVGcm9tVGlsZXNldChzZXQsIGZyYW1lLnRpbGVpZCwgc2hlZXQpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhbmltYXRpb24uZnJhbWVSYXRlID0gNDtcclxuXHJcbiAgICAgICAgICAgIHRpbGVzW2luZGV4XSA9IGFuaW1hdGlvbjtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVElMRSBMQVlFUlNcclxuICAgICAgbWFwLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRUaWxlTGF5ZXJUeXBlICYmIGxheWVyLm5hbWUgIT09IFRpbGVkQ29sbGlkZXJMYXllck5hbWUpe1xyXG4gICAgICAgICAgICBsZXQgdGlsZUxheWVyID0gbGF5ZXIgYXMgVGlsZWRUaWxlTGF5ZXI7XHJcblxyXG4gICAgICAgICAgICBpZighbGF5ZXIudmlzaWJsZSl7XHJcbiAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRpbGVtYXBMYXllciA9IG5ldyBUaWxlbWFwVGlsZUxheWVyKHRpbGVMYXllci53aWR0aCwgdGlsZUxheWVyLmhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGlsZUxheWVyLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICBsZXQgdGlsZUluZGV4ID0gdGlsZUxheWVyLmRhdGFbaV07XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgdGlsZSA9IHRpbGVzW3RpbGVJbmRleF07XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAvLyBGaW5kIHRpbGVcclxuICAgICAgICAgICAgICAgaWYodGlsZSA9PT0gdW5kZWZpbmVkICYmIHRpbGVJbmRleCAhPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aWxlc2V0cy5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGxldCB0aWxlc2V0ID0gdGlsZXNldHNbal07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBpZih0aWxlSW5kZXggPj0gdGlsZXNldC5zZXQuZmlyc3RnaWQgJiYgdGlsZUluZGV4IDwgdGlsZXNldC5zZXQuZmlyc3RnaWQgKyB0aWxlc2V0LnNldC50aWxlY291bnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlID0gZ2V0U3ByaXRlRnJvbVRpbGVzZXQodGlsZXNldC5zZXQsIHRpbGVJbmRleCAtIHRpbGVzZXQuc2V0LmZpcnN0Z2lkLCB0aWxlc2V0LnNoZWV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUgPSBuZXcgQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuYWRkRnJhbWUoc3ByaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHRpbGVzW3RpbGVJbmRleF0gPSB0aWxlO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBpZih0aWxlICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICB0aWxlbWFwTGF5ZXIuc2V0VGlsZUZyb21JbmRleChpLCB0aWxlLmNsb25lKCkpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRpbGVtYXAubGF5ZXJzLnB1c2godGlsZW1hcExheWVyKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRUaWxlTGF5ZXJUeXBlICYmIGxheWVyLm5hbWUgPT09IFRpbGVkQ29sbGlkZXJMYXllck5hbWUpe1xyXG4gICAgICAgICAgICBsZXQgdGlsZUxheWVyID0gbGF5ZXIgYXMgVGlsZWRUaWxlTGF5ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgY29sbGlkZXJMYXllciA9IG5ldyBUaWxlbWFwQ29sbGlzaW9uTGF5ZXIodGlsZW1hcCwgdGlsZUxheWVyLndpZHRoLCB0aWxlTGF5ZXIuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aWxlTGF5ZXIuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIGxldCB0aWxlSW5kZXggPSB0aWxlTGF5ZXIuZGF0YVtpXTtcclxuICAgICAgICAgICAgICAgY29sbGlkZXJMYXllci5zZXRUaWxlRnJvbUluZGV4KGksIHRpbGVJbmRleCAhPT0gMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRpbGVtYXAuY29sbGlkZXJzLnB1c2goY29sbGlkZXJMYXllcik7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBPQkpFQ1QgTEFZRVJcclxuICAgICAgbWFwLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRPYmplY3RMYXllclR5cGUpe1xyXG4gICAgICAgICAgICBsZXQgb2JqTGF5ZXIgPSBsYXllciBhcyBUaWxlZE9iamVjdExheWVyO1xyXG4gICAgICAgICAgICBvYmpMYXllci5vYmplY3RzLmZvckVhY2gobG9hZGVyKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiB0aWxlbWFwO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGZyb21UaWxlZE1hcERvd25sb2FkKGZpbGU6IHN0cmluZywgbG9hZGVyOiBUaWxlbWFwT2JqZWN0TG9hZGVyKXtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGZpbGUpO1xyXG4gICAgICBsZXQgZCA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5mcm9tVGlsZWRNYXAoZCBhcyBUaWxlZE1hcCwgbG9hZGVyKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IHBpeGVsV2lkdGgoKXtcclxuICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLnRpbGVXaWR0aDtcclxuICAgfVxyXG4gICBnZXQgcGl4ZWxIZWlnaHQoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy50aWxlSGVpZ2h0O1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaWxlZE9iamVjdExheWVyVHlwZSA9IFwib2JqZWN0Z3JvdXBcIjtcclxuZXhwb3J0IGNvbnN0IFRpbGVkVGlsZUxheWVyVHlwZSA9IFwidGlsZWxheWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGlsZWRDb2xsaWRlckxheWVyTmFtZSA9IFwiQ29sbGlkZXJzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkTWFwIHtcclxuICAgd2lkdGg6IG51bWJlcjtcclxuICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICB0aWxld2lkdGg6IG51bWJlcjtcclxuICAgdGlsZWhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgYmFja2dyb3VuZGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICBsYXllcnM6IFRpbGVkTGF5ZXJbXTtcclxuICAgdGlsZXNldHM6IFRpbGVkVGlsZXNldFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkTGF5ZXIge1xyXG4gICBpZDogbnVtYmVyO1xyXG4gICBcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcblxyXG4gICBuYW1lOiBzdHJpbmc7XHJcbiAgIHR5cGU6IHN0cmluZztcclxuXHJcbiAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZFRpbGVMYXllciBleHRlbmRzIFRpbGVkTGF5ZXIge1xyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuICAgZGF0YTogbnVtYmVyW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZE9iamVjdExheWVyIGV4dGVuZHMgVGlsZWRMYXllcntcclxuICAgb2JqZWN0czogVGlsZWRPYmplY3RbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkT2JqZWN0IHtcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICB0eXBlOiBzdHJpbmc7XHJcblxyXG4gICBwcm9wZXJ0aWVzOiBUaWxlZE9iamVjdFByb3BlcnRpZXNbXTtcclxuXHJcbiAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZWRPYmplY3RQcm9wZXJ0aWVze1xyXG4gICBuYW1lOiBzdHJpbmc7XHJcbiAgIHR5cGU6IHN0cmluZztcclxuICAgdmFsdWU6IHN0cmluZ3xib29sZWFufG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZEFuaW1hdGVkVGlsZXN7XHJcbiAgIGlkOiBudW1iZXI7XHJcbiAgIGFuaW1hdGlvbjogVGlsZWRBbmltYXRlZFRpbGVGcmFtZVtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZWRBbmltYXRlZFRpbGVGcmFtZXtcclxuICAgZHVyYXRpb246IG51bWJlcixcclxuICAgdGlsZWlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZWRUaWxlc2V0IHtcclxuICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgZmlyc3RnaWQ6IG51bWJlcjtcclxuICAgaW1hZ2U6IHN0cmluZztcclxuICAgXHJcbiAgIGNvbHVtbnM6IG51bWJlcjtcclxuICAgdGlsZWNvdW50OiBudW1iZXI7XHJcblxyXG4gICB0aWxld2lkdGg6IG51bWJlcjtcclxuICAgdGlsZWhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgdGlsZXM6IFRpbGVkQW5pbWF0ZWRUaWxlc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNwcml0ZUZyb21UaWxlc2V0KHRpbGVzZXQ6IFRpbGVkVGlsZXNldCwgaW5kZXg6IG51bWJlciwgc2hlZXQ6IFNwcml0ZVNoZWV0KXtcclxuICAgbGV0IHggPSBpbmRleCAlIHRpbGVzZXQuY29sdW1ucztcclxuICAgbGV0IHkgPSBNYXRoLmZsb29yKGluZGV4IC8gdGlsZXNldC5jb2x1bW5zKTtcclxuXHJcbiAgIHJldHVybiBzaGVldC5nZXRTcHJpdGUoXHJcbiAgICAgIHggKiB0aWxlc2V0LnRpbGV3aWR0aCwgXHJcbiAgICAgIHkgKiB0aWxlc2V0LnRpbGVoZWlnaHQsIFxyXG4gICAgICB0aWxlc2V0LnRpbGV3aWR0aCwgXHJcbiAgICAgIHRpbGVzZXQudGlsZWhlaWdodCk7XHJcbn0iLCJleHBvcnQgY2xhc3MgQ3VydmV7XHJcbiAgIHB1YmxpYyBzdGF0aWMgbGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgZjogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIGEgKyAoYiAtIGEpICogZjtcclxuICAgfVxyXG4gICBzdGF0aWMgbGluZWFyKGE6IG51bWJlciwgYjogbnVtYmVyLCBmOiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gQ3VydmUubGVycChhLGIsZik7XHJcbiAgIH1cclxufSIsImNsYXNzIExpc3R7XHJcbiAgIGhhczxUPihsaXN0OiBUW118dW5kZWZpbmVkLCBmdW5jOiAoKHZhbHVlOiBUKSA9PiBib29sZWFuKSl7XHJcbiAgICAgIGlmKGxpc3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBpZihmdW5jKGxpc3RbaV0pKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExpc3QoKTsiLCJleHBvcnQgZnVuY3Rpb24gbm93KCl7XHJcbiAgIGlmKHdpbmRvdy5wZXJmb3JtYW5jZSl7XHJcbiAgICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwO1xyXG4gICB9XHJcbiAgIHJldHVybiBEYXRlLm5vdygpIC8gMTAwMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCh0aW1lSW5TZWNvbmRzOiBudW1iZXIpe1xyXG4gICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZUluU2Vjb25kcyk7XHJcbiAgIGxldCBtaWxsaXMgPSBNYXRoLmZsb29yKCh0aW1lSW5TZWNvbmRzICUgMSkgKiAxMDAwKTtcclxuXHJcbiAgIHJldHVybiAoXCJcIiArIHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJykgKyBcIjpcIiArIChcIlwiICsgbWlsbGlzKS5wYWRTdGFydCgzLCAnMCcpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==