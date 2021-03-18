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
        _this.dashSavedMaxSpeed = 2 * 60;
        _this.dashSavedAddition = (_this.dashSavedMaxSpeed - _this.moveSpeed) / 3; // In three dashes until max speed 
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
        console.log(this.body.velocity.x);
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
                this.body.velocity.x = this.dashSavedSpeed;
                this.accelerate(this.facing, this.dashSavedMaxSpeed, this.dashSavedAddition);
                if (this.body.velocity.x * this.facing < this.dashSavedMaxSpeed) {
                }
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
var TileCollider_1 = __webpack_require__(/*! math/collision/TileCollider */ "./src/ts/math/collision/TileCollider.ts");
var Temp_1 = __webpack_require__(/*! util/Temp */ "./src/ts/util/Temp.ts");
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
        graphics.drawSprite(this.image, bounds.centerX - this.image.width / 2, bounds.centerY - this.image.height / 2);
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
}(TilemapLayer));
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
        graphics.setColor(this.backgroundColor);
        graphics.drawRectangle(0, 0, this.width * this.tileWidth, this.height * this.tileHeight, true);
        this.layers.forEach(function (layer) { return layer.draw(graphics, bounds); });
        // this.colliders.forEach(layer => layer.drawDebug(graphics, this.tileWidth, this.tileHeight, bounds));
    };
    // TODO maybe more like batch update every x frames or devide up the work somehow over muptiple frames
    TileMap.prototype.update = function (delta, bounds) {
        this.layers.forEach(function (layer) { return layer.update(delta, bounds); });
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
                var imageLayer_1 = new TilemapImageLayer(tilemap);
                Temp_1.asyncLoadImage("/assets/levels/" + tileLayer.image).then(function (result) {
                    imageLayer_1.image = new Sprite_1.Sprite(result);
                });
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

/***/ "./src/ts/util/Temp.ts":
/*!*****************************!*\
  !*** ./src/ts/util/Temp.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncLoadImage = void 0;
function asyncLoadImage(src) {
    return new Promise(function (resolve, reject) {
        var img = new Image();
        img.onerror = function () { return reject(); };
        img.onload = function () { return resolve(img); };
        img.src = src;
    });
}
exports.asyncLoadImage = asyncLoadImage;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2FwcC5zY3NzPzUxYzUiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2VuZ2luZS9EZWJ1Z1NldHRpbmdzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9lbmdpbmUvR2FtZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZW5naW5lL0lucHV0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9lbmdpbmUvUGh5c2ljcy50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3MvQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy9DYW1lcmEudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL0dyYXBoaWNzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy9QYXJ0aWNsZVN5c3RlbS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3MvU3ByaXRlLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pbmRleC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0NvbXBvbmVudHMvSGVhbHRoQ29tcG9uZW50LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvQ29tcG9uZW50cy9JbnRlcmFjdGFibGVDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0b3JDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9Db21wb25lbnRzL1BsYXllcklucHV0Q29tcG9uZW50LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvQ2hlc3RHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvQ29sbGlkZXJHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvRmVhdGhlckdhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9MZXZlbE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1BsYXllckZpbmlzaEdhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyU3Bhd25HYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvU3Bpa2VzR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL1Jlc291cmNlcy50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvbWF0aC9BQUJCLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9tYXRoL1ZlY3RvcjIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL21hdGgvY29sbGlzaW9uL0JveENvbGxpZGVyLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9tYXRoL2NvbGxpc2lvbi9Db2xsaWRlci50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvbWF0aC9jb2xsaXNpb24vQ29sbGlzaW9uLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9tYXRoL2NvbGxpc2lvbi9UaWxlQ29sbGlkZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3NjZW5lL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvc2NlbmUvR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvc2NlbmUvU2NlbmUudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3NjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9zY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvc2lnbmFscy9TaWduYWwudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3RpbGVtYXAvVGlsZU1hcC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvdGlsZW1hcC9UaWxlZE1hcC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvdXRpbC9DdXJ2ZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvdXRpbC9MaXN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy91dGlsL1RlbXAudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3V0aWwvVGltZS50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SSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGdCQUFRLENBQUMsWUFBWSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNsRixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQVEsQ0FBQyxhQUFhLENBQUM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQztRQUVsRixJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQVEsQ0FBQyxJQUFJLENBQUM7WUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQzFFLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBUSxDQUFDLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRXpFLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBUSxDQUFDLFFBQVEsQ0FBQztZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3JGLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBUSxDQUFDLFFBQVEsQ0FBQztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQy9FLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBUSxDQUFDLFNBQVMsQ0FBQztZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3RGLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBUSxDQUFDLFFBQVEsQ0FBQztZQUFFLElBQUksQ0FB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R0FBRyxtQkFBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDeEYsS0FBSSxDQUFDLGNBQWMsR0FBRyxtQkFBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDNUYsS0FBSSxDQUFDLFVBQVUsR0FBRyxtQkFBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFFekYsS0FBSSxDQUFDLFVBQVUsR0FBRyxtQkFBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDekYsS0FBSSxDQUFDLFVBQVUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1FBRTlCLEtBQUksQ0FBQyxnQkFBZ0IsR0FBRyxtQkFBUyxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFFOUYsS0FBSSxDQUFDLGdCQUFnQixHQUFHLEtBQUksQ0FBQyxhQUFhLENBQUM7UUFFM0MsS0FBSSxDQUFDLFNBQVMsR0FBRyxLQUFJLENBQUMsWUFBWSxDQUFDLElBQUkscUJBQVMsRUFBRSxDQUFDLENBQUM7UUFDcEQsS0FBSSxDQUFDLElB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V0FBSSxFQUFFLENBQUMsQ0FBQztJQUMzRCxJQUFJLFdBQVcsR0FBRyxLQUFLLENBQUMsU0FBUyxDQUFDLGdCQUFnQixFQUFFLElBQUksV0FBSSxFQUFFLENBQUMsQ0FBQztJQUVoRSxJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUM7SUFDakIsSUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0lBRWpCLElBQUksU0FBUyxHQUFHLEtBQUssQ0FBQztJQUN0QixJQUFJLFNBQVMsR0FBRyxLQUFLLENBQUM7SUFFdEIsSUFBRyxLQUFLLENBQUMsSUFBSSxJQUFJLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7UUFDckMsUUFBUSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsS0FBSyxHQUFHLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxTQUFTLEdBQUcsSUFBSSxDQUFDO0tBQ25CO1NBQUssSUFBRyxLQUFLLENBQUMsS0FBSyxJQUFJLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUM7UUFDN0MsUUFBUSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsSUFBSSxHQUFHLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNsRCxTQUFTLEdBQUcsSUFBSSxDQUFDO0tBQ25CO0lBRUQsSUFBRyxLQUFLLENBQUMsR0FBRyxJQUFJLGdCQUFnQixDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUM7UUFDcEMsUUFBUSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsRCxTQUFTLEdBQUcsSUFBSSxDQUFDO0tBQ25CO1NBQUssSUFBRyxLQUFLLENBQUMsTUFBTSxJQUFJLGdCQUFnQixDQUFDLENBQUMsSUFBSSxDQUFDLEVBQUM7UUFDOUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsRCxTQUFTLEdBQUcsSUFBSSxDQUFDO0tBQ25CO0lBRUQsMENBQTBDO0lBQzFD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OUUsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxNQUFNLENBQUMsSUFBSSxHQUFHLFNBQVMsQ0FBQyxDQUFDLENBQUM7UUFDOUQsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUUxRSxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxHQUFHLEdBQUcsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUM5RCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsTUFBTSxHQUFHLFVBQVUsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBRTdFLFFBQVEsQ0FBQyxRQUFRLENBQUMsd0JBQXdCLENBQUMsQ0FBQztRQUU1QyxJQUFJLFFBQVEsR0FBRyxJQUFJLDJCQUFZLEVBQUUsQ0FBQztRQUNsQyxJQUFNLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFcEIsS0FBSSxJQUFJLENBQUMsR0FBRyxNQUFNLEVBQUUsQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBQztZQUMvQixLQUFJLElBQUksQ0FBQyxHQUFHLE1BQU0sRUFBRSxDQUFDLEdBQUcsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFDO2dCQUMvQixJQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO29CQUFFLFNBQVM7Z0JBRXJDLFFBQVEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7Z0JBRWhELElBQUcsUUFBUSxDQUFD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dC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmh0bWwsIGJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdaYW5iYXJTcXVhcmUnO1xcbiAgc3JjOiB1cmwoXFxcIi9hc3NldHMvZm9udHMvWmFuYmFyU3F1YXJlLnR0ZlxcXCIpOyB9XFxuXFxuaHRtbCwgYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlphbmJhclNxdWFyZVxcXCI7XFxuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcblxcbiNjYW52YXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDsgfVxcblxcbi5yZXNvdXJjZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmdhbWUtb3ZlcmxheSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTsgfVxcbiAgLmdhbWUtb3ZlcmxheSAuYmFyLWJvdHRvbSB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpOyB9XFxuICAuZ2FtZS1vdmVybGF5IC5iYXItdG9wIHtcXG4gICAgdG9wOiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpOyB9XFxuICAuZ2FtZS1vdmVybGF5IC5iYXItYm90dG9tLCAuZ2FtZS1vdmVybGF5IC5iYXItdG9wIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBmb250LXNpemU6IDJlbTsgfVxcbiAgLmdhbWUtb3ZlcmxheS5nYW1lLW92ZXIgLmJhci1ib3R0b20sIC5nYW1lLW92ZXJsYXkuZ2FtZS1vdmVyIC5iYXItdG9wIHtcXG4gICAgdHJhbnNmb3JtOiBub25lOyB9XFxuICAuZ2FtZS1vdmVybGF5Om5vdCguY29tcGxldGVkKSAuY29tcGxldGUtYmFubmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmdhbWUtb3ZlcmxheS5jb21wbGV0ZWQgLmZhaWwtYmFubmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmdhbWUtb3ZlcmxheSAuYmVzdC10aW1lIHtcXG4gICAgY29sb3I6ICM5OTk7IH1cXG4gIC5nYW1lLW92ZXJsYXkgLmRlYnVnLWFscGhhLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiAjOTk5O1xcbiAgICByaWdodDogMTZweDtcXG4gICAgYm90dG9tOiAxNnB4O1xcbiAgICB6LWluZGV4OiAxMDAwOyB9XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH1cXG4gIC5tb2RhbCAuYmFja2dyb3VuZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuICAubW9kYWwgLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH1cXG4gICAgLm1vZGFsIC5jb250ZW50IC5jbG9zZSB7XFxuICAgICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICAgICAgYmFja2dyb3VuZDogI2UyN2QxZTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAubW9kYWwuY2xvc2VkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuICAgIC5tb2RhbC5jbG9zZWQgLmJhY2tncm91bmQge1xcbiAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgLm1vZGFsLmNsb3NlZCAuY29udGVudCB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBMb2FkIHRoZSBqYXZhc2NyaXB0IG1haW5cclxuaW1wb3J0IFwiLi9qcy9tYWluXCI7XHJcbmltcG9ydCBcIi4vdHMvXCI7XHJcblxyXG4vLyBMb2FkIHRoZSBTQVNTIG1haW5cclxuaW1wb3J0IFwiLi9zY3NzL2FwcC5zY3NzXCI7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcclxuICAgY29uc29sZS5sb2coXCJXZWJwYWNrIHRlbXBsYXRlIGxvYWRlZC5cIik7XHJcbn0pOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImV4cG9ydCBjbGFzcyBEZWJ1Z1NldHRpbmdze1xyXG4gICBkcmF3Q29sbGlkZXJzOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGRyYXdUaWxlbWFwOiBib29sZWFuID0gZmFsc2U7XHJcbn0iLCJpbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCJzY2VuZS9TY2VuZVwiO1xyXG5pbXBvcnQgeyBub3cgfSBmcm9tIFwidXRpbC9UaW1lXCI7XHJcbmltcG9ydCB7IERlYnVnU2V0dGluZ3MgfSBmcm9tIFwiLi9EZWJ1Z1NldHRpbmdzXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vSW5wdXRcIjtcclxuaW1wb3J0IHsgUGh5c2ljcyB9IGZyb20gXCIuL1BoeXNpY3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1leyAgIFxyXG4gICBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcclxuICAgXHJcbiAgIGZpeGVkVXBkYXRlVGltZTogbnVtYmVyID0gMSAvIDYwO1xyXG4gICBpbnRlclVwZGF0ZVRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICBwcml2YXRlIHJ1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgcHJpdmF0ZSBhbmltYXRpb25GcmFtZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIHNjZW5lPzogU2NlbmU7XHJcbiAgIGdyYXBoaWNzOiBHcmFwaGljcztcclxuICAgaW5wdXQ6IElucHV0O1xyXG4gICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgZGVidWdTZXR0aW5nczogRGVidWdTZXR0aW5ncztcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpe1xyXG4gICAgICB0aGlzLmdyYXBoaWNzID0gbmV3IEdyYXBoaWNzKGNhbnZhcyk7XHJcbiAgICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXQoY2FudmFzKTtcclxuICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcblxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCAoKSA9PiB0aGlzLnVwZGF0ZVNpemUoKSk7XHJcbiAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG5cclxuICAgICAgdGhpcy5kZWJ1Z1NldHRpbmdzID0gbmV3IERlYnVnU2V0dGluZ3MoKTtcclxuICAgICAgKHdpbmRvdyBhcyBhbnkpLmRlYnVnU2V0dGluZ3MgPSB0aGlzLmRlYnVnU2V0dGluZ3M7XHJcbiAgIH1cclxuXHJcbiAgIHJ1bigpe1xyXG4gICAgICBpZih0aGlzLnJ1bm5pbmcpIHJldHVybjtcclxuICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmU/LmluaXQodGhpcyk7XHJcblxyXG4gICAgICB0aGlzLl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcclxuICAgfVxyXG5cclxuICAgc3RvcCgpe1xyXG4gICAgICB0aGlzLl9jYW5jZWxBbmltYXRpb25GcmFtZSgpO1xyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKCl7XHJcbiAgICAgIHRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xyXG5cclxuICAgICAgbGV0IG4gPSBub3coKTtcclxuICAgICAgbGV0IGRlbHRhID0gbiAtIHRoaXMuY3VycmVudFRpbWU7XHJcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBuO1xyXG5cclxuICAgICAgaWYoZGVsdGEgPiAwLjEpeyBkZWx0YSA9IDAuMTsgfVxyXG5cclxuICAgICAgdGhpcy5pbnB1dC5wb2xsKCk7XHJcblxyXG4gICAgICB0aGlzLmludGVyVXBkYXRlVGltZSArPSBkZWx0YTtcclxuICAgICAgXHJcbiAgICAgIC8vIFRPRE8gZml4IHRoZSBpc3N1ZSB3aGVyZSB3ZSBhcmUgbGFnZ2luZyBiZWhpbmQhXHJcbiAgICAgIC8vIGlmIHRoZXJlIGFyZSB0b28gbWFueSB1cGRhdGVzIGF0IG9uY2UgYW5kIHdlIGNhbid0IGtlZXAgdXAsIHdlIG5lZWQgdG8gZHVtcCBzb21lIGZyYW1lc1xyXG4gICAgICAvLyBhbmQgc2VuZCBhIHdhcm5pbmcuXHJcbiAgICAgIHdoaWxlKHRoaXMuaW50ZXJVcGRhdGVUaW1lID4gdGhpcy5maXhlZFVwZGF0ZVRpbWUpe1xyXG4gICAgICAgICB0aGlzLmludGVyVXBkYXRlVGltZSAtPSB0aGlzLmZpeGVkVXBkYXRlVGltZTtcclxuICAgICAgICAgdGhpcy5zY2VuZT8uZml4ZWRVcGRhdGUodGhpcy5maXhlZFVwZGF0ZVRpbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2NlbmU/LnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICB0aGlzLmdyYXBoaWNzLnJlc2V0KCk7XHJcbiAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXJTY3JlZW4oKTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmU/LmRyYXcodGhpcy5ncmFwaGljcyk7XHJcblxyXG4gICAgICB0aGlzLmlucHV0LmZsdXNoKCk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZVNpemUoKXtcclxuICAgICAgdGhpcy5ncmFwaGljcy51cGRhdGVTaXplKCk7XHJcbiAgICAgIHRoaXMuc2NlbmU/LnVwZGF0ZVNpemUoKTtcclxuICAgfVxyXG5cclxuICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lKCl7XHJcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xyXG4gICB9XHJcblxyXG4gICBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCl7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcbiAgIH1cclxufSIsIi8vIENvbnRyb2xsZXIgbWFwIVxyXG5leHBvcnQgY2xhc3MgR2FtZXBhZElucHV0e1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEF4aXNMZWZ0WCA9IDA7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQXhpc0xlZnRZID0gMTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBeGlzUmlnaHRYID0gMjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBeGlzUmlnaHRZID0gMztcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uQSA9IDA7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uQiA9IDE7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uWCA9IDI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uWSA9IDM7XHJcbiAgIFxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkRwYWRVcCA9IDEyO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkRwYWREb3duID0gMTM7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uRHBhZExlZnQgPSAxNDtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25EcGFkUmlnaHQgPSAxNTtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uTGVmdEJ1bXBlciA9IDQ7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uUmlnaHRCdW1wZXIgPSA1O1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkxlZnRUcmlnZ2VyID0gNjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25SaWdodFRyaWdnZXIgPSA3O1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25NZW51ID0gODtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25TdGFydCA9IDk7XHJcblxyXG4gICBwcmV2aW91c0J1dHRvblN0YXRlOiBib29sZWFuW10gPSBbXTtcclxuICAgYnV0dG9uU3RhdGU6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICBcclxuICAgYXhpc1N0YXRlOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgIGRlYWRab25lOiBudW1iZXIgPSAwLjI7XHJcbiAgIGZ1bGxab25lOiBudW1iZXIgPSAwLjQ7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihpbmRleDogbnVtYmVyKXtcclxuICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG5cclxuICAgICAgbGV0IGdhbWVwYWQgPSB0aGlzLmdldE5hdmlnYXRvckdhbWVwYWQoKSE7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZXBhZC5idXR0b25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgdGhpcy5wcmV2aW91c0J1dHRvblN0YXRlLnB1c2goZmFsc2UpO1xyXG4gICAgICAgICB0aGlzLmJ1dHRvblN0YXRlLnB1c2goZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lcGFkLmF4ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICB0aGlzLmF4aXNTdGF0ZS5wdXNoKDApO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHBvbGwoKXtcclxuICAgICAgLy8gU3dhcCB0aGUgb2xkIGFuZCB0aGUgbmV3IG9uZSwgY29weSB0byB0aGUgbmV3XHJcbiAgICAgIGxldCB0ZW1wID0gdGhpcy5wcmV2aW91c0J1dHRvblN0YXRlO1xyXG4gICAgICB0aGlzLnByZXZpb3VzQnV0dG9uU3RhdGUgPSB0aGlzLmJ1dHRvblN0YXRlO1xyXG4gICAgICB0aGlzLmJ1dHRvblN0YXRlID0gdGVtcDtcclxuXHJcbiAgICAgIGxldCBnYW1lcGFkID0gdGhpcy5nZXROYXZpZ2F0b3JHYW1lcGFkKCkhO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWVwYWQuYnV0dG9ucy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMuYnV0dG9uU3RhdGVbaV0gPSBnYW1lcGFkLmJ1dHRvbnNbaV0ucHJlc3NlZDtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZXBhZC5heGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgdGhpcy5heGlzU3RhdGVbaV0gPSBnYW1lcGFkLmF4ZXNbaV07XHJcblxyXG4gICAgICAgICBpZihNYXRoLmFicyh0aGlzLmF4aXNTdGF0ZVtpXSkgPCB0aGlzLmRlYWRab25lKSB0aGlzLmF4aXNTdGF0ZVtpXSA9IDA7IFxyXG4gICAgICAgICBpZihNYXRoLmFicyh0aGlzLmF4aXNTdGF0ZVtpXSkgPiAxIC0gdGhpcy5mdWxsWm9uZSkgdGhpcy5heGlzU3RhdGVbaV0gPSBNYXRoLnNpZ24odGhpcy5heGlzU3RhdGVbaV0pOyBcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBpc0J1dHRvblByZXNzZWQoYnV0dG9uSW5kZXg6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvblN0YXRlW2J1dHRvbkluZGV4XSAmJiAhdGhpcy5wcmV2aW91c0J1dHRvblN0YXRlW2J1dHRvbkluZGV4XTtcclxuICAgfVxyXG4gICBpc0J1dHRvbkRvd24oYnV0dG9uSW5kZXg6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvblN0YXRlW2J1dHRvbkluZGV4XTtcclxuICAgfVxyXG4gICBpc0J1dHRvblJlbGVhc2VkKGJ1dHRvbkluZGV4OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gIXRoaXMuYnV0dG9uU3RhdGVbYnV0dG9uSW5kZXhdICYmIHRoaXMucHJldmlvdXNCdXR0b25TdGF0ZVtidXR0b25JbmRleF07XHJcbiAgIH1cclxuXHJcbiAgIGdldCBsZWZ0QXhpc1goKSB7IHJldHVybiB0aGlzLmF4aXNTdGF0ZVtHYW1lcGFkSW5wdXQuQXhpc0xlZnRYXTt9XHJcbiAgIGdldCBsZWZ0QXhpc1koKSB7IHJldHVybiB0aGlzLmF4aXNTdGF0ZVtHYW1lcGFkSW5wdXQuQXhpc0xlZnRZXTt9XHJcbiAgIGdldCByaWdodEF4aXNYKCkgeyByZXR1cm4gdGhpcy5heGlzU3RhdGVbR2FtZXBhZElucHV0LkF4aXNSaWdodFhdO31cclxuICAgZ2V0IHJpZ2h0QXhpc1koKSB7IHJldHVybiB0aGlzLmF4aXNTdGF0ZVtHYW1lcGFkSW5wdXQuQXhpc1JpZ2h0WV07fVxyXG5cclxuICAgZ2V0TmF2aWdhdG9yR2FtZXBhZCgpe1xyXG4gICAgICBjb25zdCBwYWRzID0gbmF2aWdhdG9yLmdldEdhbWVwYWRzKCk7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGFkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIGxldCBwYWQgPSBwYWRzW2ldO1xyXG4gICAgICAgICBpZihwYWQgPT09IG51bGwpIGNvbnRpbnVlO1xyXG4gICAgICAgICBpZihwYWQuaW5kZXggPT09IHRoaXMuaW5kZXgpIHJldHVybiBwYWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgIH1cclxufVxyXG5cclxudHlwZSBLZXkgPSBzdHJpbmc7XHJcbnR5cGUgTW91c2VCdXR0b24gPSBudW1iZXI7XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmR7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5RW50ZXIgOiBLZXkgPSBcIkVudGVyXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5VGFiIDogS2V5ID0gXCJUYWJcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlTcGFjZSA6IEtleSA9IFwiIFwiO1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlDIDogS2V5ID0gXCJjXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5WCA6IEtleSA9IFwieFwiO1xyXG4gICBcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlBIDogS2V5ID0gXCJhXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5RCA6IEtleSA9IFwiZFwiO1xyXG4gICBcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlDb21tYSA6IEtleSA9IFwiLFwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleVBlcmlvZCA6IEtleSA9IFwiLlwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleVNsYXNoIDogS2V5ID0gXCIvXCI7XHJcbiAgIFxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUFycm93VXAgOiBLZXkgPSBcIkFycm93VXBcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlBcnJvd0Rvd24gOiBLZXkgPSBcIkFycm93RG93blwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUFycm93TGVmdCA6IEtleSA9IFwiQXJyb3dMZWZ0XCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QXJyb3dSaWdodCA6IEtleSA9IFwiQXJyb3dSaWdodFwiO1xyXG5cclxuICAgZG93bktleXM6IFNldDxLZXk+O1xyXG4gICBwcmVzc2VkS2V5czogU2V0PEtleT47XHJcbiAgIHJlbGVhc2VkS2V5czogU2V0PEtleT47XHJcblxyXG4gICByb290PzogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcihyb290PzogSFRNTEVsZW1lbnQpe1xyXG4gICAgICB0aGlzLmRvd25LZXlzID0gbmV3IFNldDxLZXk+KCk7XHJcbiAgICAgIHRoaXMucHJlc3NlZEtleXMgPSBuZXcgU2V0PEtleT4oKTtcclxuICAgICAgdGhpcy5yZWxlYXNlZEtleXMgPSBuZXcgU2V0PEtleT4oKTtcclxuXHJcbiAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LmJvZHk7IC8vIEZ1Y2tcclxuICAgICAgdGhpcy5yb290Py5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgIGlmKGV2ZW50LnJlcGVhdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgdGhpcy5wcmVzc2VkS2V5cy5hZGQoZXZlbnQua2V5KTtcclxuICAgICAgICAgdGhpcy5kb3duS2V5cy5hZGQoZXZlbnQua2V5KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucm9vdD8uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50ID0+e1xyXG4gICAgICAgICBpZihldmVudC5yZXBlYXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgIHRoaXMucmVsZWFzZWRLZXlzLmFkZChldmVudC5rZXkpO1xyXG4gICAgICAgICB0aGlzLmRvd25LZXlzLmRlbGV0ZShldmVudC5rZXkpO1xyXG4gICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgZmx1c2goKXtcclxuICAgICAgdGhpcy5wcmVzc2VkS2V5cy5jbGVhcigpO1xyXG4gICAgICB0aGlzLnJlbGVhc2VkS2V5cy5jbGVhcigpO1xyXG4gICB9XHJcblxyXG4gICBpc0tleURvd24oa2V5OiBLZXkpe1xyXG4gICAgICByZXR1cm4gdGhpcy5kb3duS2V5cy5oYXMoa2V5KTtcclxuICAgfVxyXG4gICBpc0tleVByZXNzZWQoa2V5OiBLZXkpe1xyXG4gICAgICByZXR1cm4gdGhpcy5wcmVzc2VkS2V5cy5oYXMoa2V5KTtcclxuICAgfVxyXG4gICBpc0tleVJlbGVhc2VkKGtleTogS2V5KXtcclxuICAgICAgcmV0dXJuIHRoaXMucmVsZWFzZWRLZXlzLmhhcyhrZXkpO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb3VzZXtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25MZWZ0IDogTW91c2VCdXR0b24gPSAwO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbk1pZGRsZSA6IE1vdXNlQnV0dG9uID0gMTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25SaWdodCA6IE1vdXNlQnV0dG9uID0gMjtcclxuXHJcbiAgIGJ1dHRvbnM6IGJvb2xlYW5bXTtcclxuICAgYnV0dG9uc1ByZXNzZWQ6IGJvb2xlYW5bXTtcclxuICAgYnV0dG9uc1JlbGVhc2VkOiBib29sZWFuW107XHJcblxyXG4gICB4OiBudW1iZXI7XHJcbiAgIHk6IG51bWJlcjtcclxuICAgcHJldmlvdXNYOiBudW1iZXI7XHJcbiAgIHByZXZpb3VzWTogbnVtYmVyO1xyXG5cclxuICAgcm9vdDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcihyb290OiBIVE1MRWxlbWVudCl7XHJcbiAgICAgIHRoaXMuYnV0dG9ucyA9IG5ldyBBcnJheSgxMCk7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1ByZXNzZWQgPSBuZXcgQXJyYXkoMTApO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNSZWxlYXNlZCA9IG5ldyBBcnJheSgxMCk7XHJcblxyXG4gICAgICB0aGlzLmJ1dHRvbnMuZmlsbChmYWxzZSk7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1ByZXNzZWQuZmlsbChmYWxzZSk7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1JlbGVhc2VkLmZpbGwoZmFsc2UpO1xyXG5cclxuICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuXHJcbiAgICAgIHRoaXMueCA9IDA7XHJcbiAgICAgIHRoaXMueSA9IDA7XHJcbiAgICAgIHRoaXMucHJldmlvdXNYID0gMDtcclxuICAgICAgdGhpcy5wcmV2aW91c1kgPSAwO1xyXG5cclxuICAgICAgY29uc29sZS5kaXIocm9vdCk7XHJcblxyXG4gICAgICByb290Py5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZU1vdmUuYmluZCh0aGlzKSk7XHJcbiAgICAgIHJvb3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5vbk1vdXNlRG93bi5iaW5kKHRoaXMpKTtcclxuICAgICAgcm9vdD8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNldXBcIiwgdGhpcy5vbk1vdXNlVXAuYmluZCh0aGlzKSk7XHJcbiAgIH1cclxuXHJcbiAgIHByaXZhdGUgb25Nb3VzZU1vdmUoZXZlbnQ6IE1vdXNlRXZlbnQpe1xyXG4gICAgICB0aGlzLnggPSBldmVudC5vZmZzZXRYIC8gdGhpcy5yb290Lm9mZnNldFdpZHRoO1xyXG4gICAgICB0aGlzLnkgPSBldmVudC5vZmZzZXRZIC8gdGhpcy5yb290Lm9mZnNldFdpZHRoO1xyXG4gICB9XHJcbiAgIHByaXZhdGUgb25Nb3VzZURvd24oZXZlbnQ6IE1vdXNlRXZlbnQpe1xyXG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcclxuICAgICAgdGhpcy5idXR0b25zW2V2ZW50LmJ1dHRvbl0gPSB0cnVlO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNQcmVzc2VkW2V2ZW50LmJ1dHRvbl0gPSB0cnVlO1xyXG4gICB9XHJcbiAgIHByaXZhdGUgb25Nb3VzZVVwKGV2ZW50OiBNb3VzZUV2ZW50KXtcclxuICAgICAgdGhpcy5vbk1vdXNlTW92ZShldmVudCk7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1tldmVudC5idXR0b25dID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1JlbGVhc2VkW2V2ZW50LmJ1dHRvbl0gPSB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBpc0J1dHRvbkRvd24oYnV0dG9uOiBNb3VzZUJ1dHRvbil7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvbnNbYnV0dG9uXTtcclxuICAgfVxyXG4gICBpc0J1dHRvblByZXNzZWQoYnV0dG9uOiBNb3VzZUJ1dHRvbil7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvbnNQcmVzc2VkW2J1dHRvbl07XHJcbiAgIH1cclxuICAgaXNCdXR0b25SZWxlYXNlZChidXR0b246IE1vdXNlQnV0dG9uKXtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uc1JlbGVhc2VkW2J1dHRvbl07XHJcbiAgIH1cclxuXHJcbiAgIGZsdXNoKCl7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1ByZXNzZWQuZmlsbChmYWxzZSk7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1JlbGVhc2VkLmZpbGwoZmFsc2UpO1xyXG5cclxuICAgICAgdGhpcy5wcmV2aW91c1ggPSB0aGlzLng7XHJcbiAgICAgIHRoaXMucHJldmlvdXNZID0gdGhpcy55O1xyXG4gICB9XHJcblxyXG4gICBnZXQgZGVsdGFYKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnggLSB0aGlzLnByZXZpb3VzWDtcclxuICAgfVxyXG4gICBnZXQgZGVsdGFZKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnkgLSB0aGlzLnByZXZpb3VzWTtcclxuICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIElucHV0IHtcclxuICAgZ2FtZXBhZHM6IEdhbWVwYWRJbnB1dFtdO1xyXG4gICBrZXlib2FyZDogS2V5Ym9hcmQ7XHJcbiAgIG1vdXNlOiBNb3VzZTtcclxuXHJcbiAgIHJvb3Q6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgY29uc3RydWN0b3Iocm9vdDogSFRNTEVsZW1lbnQpe1xyXG4gICAgICB0aGlzLmdhbWVwYWRzID0gW107XHJcbiAgICAgIHRoaXMua2V5Ym9hcmQgPSBuZXcgS2V5Ym9hcmQocm9vdCk7XHJcbiAgICAgIHRoaXMubW91c2UgPSBuZXcgTW91c2Uocm9vdCk7XHJcbiAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcblxyXG4gICAgICAvLyBXZWlyZCBjb25zdHJ1Y3Rpb24gYnV0IHR5cGVzY3JpcHQgaGF0ZXMgcHJvZ3Jlc3MgXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZ2FtZXBhZGNvbm5lY3RlZFwiLCBldiA9PiB7XHJcbiAgICAgICAgIGxldCBldmVudCA9IGV2IGFzIEdhbWVwYWRFdmVudDtcclxuXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZXBhZCBjb25uZWN0ZWQuXCIpO1xyXG5cclxuICAgICAgICAgdGhpcy5nYW1lcGFkcy5wdXNoKG5ldyBHYW1lcGFkSW5wdXQoZXZlbnQuZ2FtZXBhZC5pbmRleCkpO1xyXG4gICAgICAgfSk7XHJcbiAgICAgICBcclxuICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZ2FtZXBhZGRpc2Nvbm5lY3RlZFwiLCBldiA9PiB7XHJcbiAgICAgICAgIGxldCBldmVudCA9IGV2IGFzIEdhbWVwYWRFdmVudDtcclxuXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZXBhZCBkaXNjb25uZWN0ZWQuXCIpO1xyXG4gICAgICAgICBcclxuICAgICAgICAgbGV0IGluZGV4ID0gLTE7XHJcblxyXG4gICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5nYW1lcGFkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuZ2FtZXBhZHNbaV0uaW5kZXggPT09IGV2ZW50LmdhbWVwYWQuaW5kZXgpe1xyXG4gICAgICAgICAgICAgICBpbmRleCA9IGk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihpbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgIGNvbnNvbGUubG9nKFwiR2FtZXBhZCBmb3VuZC5cIik7XHJcblxyXG4gICAgICAgICB0aGlzLmdhbWVwYWRzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgcG9sbCgpe1xyXG4gICAgICB0aGlzLmdhbWVwYWRzLmZvckVhY2gocGFkID0+IHBhZC5wb2xsKCkpO1xyXG4gICB9XHJcbiAgIGZsdXNoKCl7XHJcbiAgICAgIHRoaXMua2V5Ym9hcmQuZmx1c2goKTtcclxuICAgICAgdGhpcy5tb3VzZS5mbHVzaCgpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyB1bnN0dWNrIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL0NvbGxpc2lvblwiO1xyXG5pbXBvcnQgeyBUaWxlQ29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vVGlsZUNvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUaWxlbWFwQ29sbGlzaW9uTGF5ZXIsIFRpbGVtYXBUaWxlTGF5ZXIgfSBmcm9tIFwidGlsZW1hcC9UaWxlTWFwXCI7XHJcbmltcG9ydCB7IEN1cnZlIH0gZnJvbSBcInV0aWwvQ3VydmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQaHlzaWNze1xyXG4gICBib2RpZXM6IFJpZ2lkYm9keVtdO1xyXG4gICBsYXllcnM6IFRpbGVtYXBDb2xsaXNpb25MYXllcltdO1xyXG5cclxuICAgaW50ZXJwb2xhdGU6IGJvb2xlYW4gPSB0cnVlO1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgdGhpcy5ib2RpZXMgPSBbXTtcclxuICAgICAgdGhpcy5sYXllcnMgPSBbXTtcclxuICAgfVxyXG5cclxuICAgYWRkQm9keShib2R5OiBSaWdpZGJvZHkpe1xyXG4gICAgICB0aGlzLmJvZGllcy5wdXNoKGJvZHkpO1xyXG4gICB9XHJcbiAgIHJlbW92ZUJvZHkoYm9keTogUmlnaWRib2R5KXtcclxuICAgICAgbGV0IGluZGV4ID0gdGhpcy5ib2RpZXMuaW5kZXhPZihib2R5KTtcclxuXHJcbiAgICAgIGlmKGluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5ib2RpZXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgfVxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGlmKHRoaXMuaW50ZXJwb2xhdGUpe1xyXG4gICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICAgICAvLyBUT0RPIG1vdGlvbiBwcmVkaWN0aW9uIGFuZCBzdHVmZlxyXG4gICAgICAgICAgICBsZXQgZiA9IGJvZHkuZ2FtZS5pbnRlclVwZGF0ZVRpbWUgLyBib2R5LmdhbWUuZml4ZWRVcGRhdGVUaW1lO1xyXG4gICBcclxuICAgICAgICAgICAgYm9keS50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueCA9IEN1cnZlLmxlcnAoYm9keS5wcmV2aW91c1Bvc2l0aW9uLngsIGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLngsIGYpO1xyXG4gICAgICAgICAgICBib2R5LnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi55ID0gQ3VydmUubGVycChib2R5LnByZXZpb3VzUG9zaXRpb24ueSwgYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueSwgZik7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgICAgIGJvZHkudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLnNldChib2R5LnRyYW5zZm9ybS5wb3NpdGlvbik7XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGZpeGVkVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICAvLyBTZXQgdGhlIHByZXZpb3VzIHBvc2l0aW9uc1xyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBib2R5LnByZXZpb3VzUG9zaXRpb24ueCA9IGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLng7XHJcbiAgICAgICAgIGJvZHkucHJldmlvdXNQb3NpdGlvbi55ID0gYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueTtcclxuXHJcbiAgICAgICAgIGJvZHkudW5zdHVja0Rpc3RhbmNlLnNldFplcm8oKTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBNb3ZlIGFsbCB0aGUgYm9kaWVzXHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgIGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLnggKz0gYm9keS52ZWxvY2l0eS54ICogZGVsdGE7XHJcbiAgICAgICAgIGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLnkgKz0gYm9keS52ZWxvY2l0eS55ICogZGVsdGE7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVW5zdHVjayBhbGwgdGhlIGJvZGllc1xyXG4gICAgICBsZXQgdGlsZUNvbGxpZGVyID0gbmV3IFRpbGVDb2xsaWRlcigpO1xyXG4gICAgICBsZXQgdGlsZUFBQkIgPSBuZXcgQUFCQigpO1xyXG4gICAgICBsZXQgdGlsZVBvc2l0aW9uID0gbmV3IFZlY3RvcjIoKTtcclxuXHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgIGlmKGJvZHkua2luZW1hdGljKSByZXR1cm47XHJcblxyXG4gICAgICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgICAgbGV0IGJib3ggPSBib2R5LmJvdW5kaW5nQm94O1xyXG5cclxuICAgICAgICAgICAgLy8gR2V0IHRoZSBCQk9YIGNvb3Jkc1xyXG4gICAgICAgICAgICBsZXQgZnJvbVggPSBNYXRoLmZsb29yKGJib3gubGVmdCAvIGxheWVyLnRpbGVtYXAudGlsZVdpZHRoKTtcclxuICAgICAgICAgICAgbGV0IHRvWCA9IE1hdGguZmxvb3IoYmJveC5yaWdodCAvIGxheWVyLnRpbGVtYXAudGlsZVdpZHRoKTtcclxuXHJcbiAgICAgICAgICAgIGxldCBmcm9tWSA9IE1hdGguZmxvb3IoYmJveC50b3AgLyBsYXllci50aWxlbWFwLnRpbGVIZWlnaHQpO1xyXG4gICAgICAgICAgICBsZXQgdG9ZID0gTWF0aC5mbG9vcihiYm94LmJvdHRvbSAvIGxheWVyLnRpbGVtYXAudGlsZUhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSBmcm9tWDsgaSA8PSB0b1g7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IGZyb21ZOyBqIDw9IHRvWTsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgaWYoIWxheWVyLmlzVGlsZVNvbGlkKGksIGopKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHRpbGVQb3NpdGlvbi54ID0gaSAqIGxheWVyLnRpbGVtYXAudGlsZVdpZHRoO1xyXG4gICAgICAgICAgICAgICAgICB0aWxlUG9zaXRpb24ueSA9IGogKiBsYXllci50aWxlbWFwLnRpbGVIZWlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICB0aWxlQ29sbGlkZXIgPSBsYXllci5nZXRUaWxlQ29sbGlkZXIoaSwgaiwgdGlsZUNvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHRpbGVBQUJCID0gdGlsZUNvbGxpZGVyLmdldEJvdW5kcyh0aWxlUG9zaXRpb24sIHRpbGVBQUJCKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmKCFiYm94Lm92ZXJsYXBzKHRpbGVBQUJCKSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgICBsZXQgdW5zdHVja0Rpc3QgPSB1bnN0dWNrKFxyXG4gICAgICAgICAgICAgICAgICAgICBib2R5LmNvbGxpZGVyLFxyXG4gICAgICAgICAgICAgICAgICAgICB0aWxlQ29sbGlkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIHRpbGVQb3NpdGlvbi5zdWIoYm9keS50cmFuc2Zvcm0ucG9zaXRpb24pLFxyXG4gICAgICAgICAgICAgICAgICAgICBib2R5LnZlbG9jaXR5XHJcbiAgICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgICBpZih1bnN0dWNrRGlzdCAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgICAgICAgICAgICAgYm9keS50cmFuc2Zvcm0ucG9zaXRpb24uYWRkKHVuc3R1Y2tEaXN0KTtcclxuICAgICAgICAgICAgICAgICAgICAgYm9keS51bnN0dWNrRGlzdGFuY2UuYWRkKHVuc3R1Y2tEaXN0KTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgLy8gdGhpcy5wZXJmb3JtQ29sbGlzaW9uKGJvZHksIGJib3gsIHRpbGVBQUJCKTtcclxuICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFRPRE8gYnJvYWRwaGFzZSBuYXJyb3cgcGhhc2Ugc3R1ZmYgOilcclxuICAgICAgLy8gTWF5YmUgc3RhcnQgd2l0aCBzd2VlcCBhbmQgcHJ1bmVcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgaWYoYm9keS5zb2xpZCkgcmV0dXJuO1xyXG4gICAgICAgICBpZihib2R5LmtpbmVtYXRpYykgcmV0dXJuO1xyXG5cclxuICAgICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChvdGhlciA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFvdGhlci5zb2xpZCkgcmV0dXJuO1xyXG4gICBcclxuICAgICAgICAgICAgbGV0IGJib3ggPSBib2R5LmJvdW5kaW5nQm94O1xyXG4gICAgICAgICAgICBsZXQgb3RoZXJiYm94ID0gb3RoZXIuYm91bmRpbmdCb3g7XHJcblxyXG4gICAgICAgICAgICBpZighYmJveC5vdmVybGFwcyhvdGhlcmJib3gpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgdW5zdHVja0Rpc3QgPSB1bnN0dWNrKFxyXG4gICAgICAgICAgICAgICBib2R5LmNvbGxpZGVyLFxyXG4gICAgICAgICAgICAgICBvdGhlci5jb2xsaWRlcixcclxuICAgICAgICAgICAgICAgb3RoZXIudHJhbnNmb3JtLnBvc2l0aW9uLmNsb25lKCkuc3ViKGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uKSxcclxuICAgICAgICAgICAgICAgYm9keS52ZWxvY2l0eSk7IC8vIFRPRE8gcmVsYXRpdmUgdmVsb2NpdHlcclxuXHJcbiAgICAgICAgICAgIGlmKHVuc3R1Y2tEaXN0ICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi5hZGQodW5zdHVja0Rpc3QpO1xyXG4gICAgICAgICAgICAgICBib2R5LnVuc3R1Y2tEaXN0YW5jZS5hZGQodW5zdHVja0Rpc3QpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG5cclxuICAgICAgICAgYm9keS5jb2xsaWRlZEJvdHRvbSA9IGJvZHkudW5zdHVja0Rpc3RhbmNlLnkgPCAwO1xyXG4gICAgICAgICBib2R5LmNvbGxpZGVkVG9wID0gYm9keS51bnN0dWNrRGlzdGFuY2UueSA+IDA7XHJcblxyXG4gICAgICAgICBib2R5LmNvbGxpZGVkTGVmdCA9IGJvZHkudW5zdHVja0Rpc3RhbmNlLnggPiAwO1xyXG4gICAgICAgICBib2R5LmNvbGxpZGVkUmlnaHQgPSBib2R5LnVuc3R1Y2tEaXN0YW5jZS54IDwgMDtcclxuXHJcbiAgICAgICAgIGlmKGJvZHkuY29sbGlkZWRMZWZ0IHx8IGJvZHkuY29sbGlkZWRSaWdodCl7XHJcbiAgICAgICAgICAgIGJvZHkudmVsb2NpdHkueCA9IC1ib2R5LnZlbG9jaXR5LnggKiBib2R5LmJvdW5jeW5lc3M7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYoYm9keS5jb2xsaWRlZEJvdHRvbSB8fCBib2R5LmNvbGxpZGVkVG9wKXtcclxuICAgICAgICAgICAgYm9keS52ZWxvY2l0eS55ID0gLWJvZHkudmVsb2NpdHkueSAqIGJvZHkuYm91bmN5bmVzcztcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEEgbGl0dGxlIG1vcmUgb3B0aW1pemVkIGJ1dCBzdGlsbCByZWFsbHkgZnVja2luZyBzdHVwaWQgOilcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgbGV0IGJvZHkgPSB0aGlzLmJvZGllc1tpXTtcclxuXHJcbiAgICAgICAgIGxldCBiYm94ID0gYm9keS5ib3VuZGluZ0JveDtcclxuXHJcbiAgICAgICAgIGlmKCFib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgIGZvcihsZXQgaiA9IGkgKyAxOyBqIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBqKyspe1xyXG4gICAgICAgICAgICBsZXQgb3RoZXIgPSB0aGlzLmJvZGllc1tqXTtcclxuXHJcbiAgICAgICAgICAgIGlmKCFvdGhlci51c2VEeW5hbWljQ29sbGlzaW9ucykgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBpZihiYm94Lm92ZXJsYXBzKG90aGVyLmJvdW5kaW5nQm94KSl7XHJcbiAgICAgICAgICAgICAgIGJvZHkub25Db2xsaXNpb24uZW1pdChvdGhlcik7XHJcbiAgICAgICAgICAgICAgIG90aGVyLm9uQ29sbGlzaW9uLmVtaXQoYm9keSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdEZWJ1ZyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgbGF5ZXIuZHJhd0RlYnVnKGdyYXBoaWNzLCBsYXllci50aWxlbWFwLnRpbGVXaWR0aCwgbGF5ZXIudGlsZW1hcC50aWxlSGVpZ2h0LCBuZXcgQUFCQigwLCAwLCAxMDAwLCAxMDAwKSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IoXCJyZ2JhKDI1NSwwLDAsIDAuNilcIik7XHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgIGlmKCFib2R5LnNvbGlkKSByZXR1cm47XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBncmFwaGljcy5kcmF3QUFCQihib2R5LmJvdW5kaW5nQm94LCB0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IoXCJyZ2JhKDAsMjU1LDAsIDAuNilcIik7XHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgIGlmKGJvZHkuc29saWQpIHJldHVybjtcclxuICAgICAgICAgbGV0IGNvbGxpZGVyID0gYm9keS5ib3VuZGluZ0JveDtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGdyYXBoaWNzLmRyYXdBQUJCKGNvbGxpZGVyLCB0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcihcInJnYmEoMCwwLDI1NSwgMC42KVwiKTtcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgbGV0IHRyYW5zZm9ybSA9IGJvZHkudHJhbnNmb3JtO1xyXG4gICAgICAgICBcclxuICAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3RhbmdsZShcclxuICAgICAgICAgICAgdHJhbnNmb3JtLnBvc2l0aW9uLnggLSAxLCB0cmFuc2Zvcm0ucG9zaXRpb24ueSAtIDEsXHJcbiAgICAgICAgICAgIDIsIDIsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9TcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb257XHJcbiAgIGZyYW1lUmF0ZTogbnVtYmVyID0gMTI7XHJcbiAgIFxyXG4gICBwcml2YXRlIHNwcml0ZXM6IFNwcml0ZVtdID0gW107XHJcbiAgIHByaXZhdGUgX2luZGV4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICAvLyBUT0RPIGNhcCB0aGUgX2luZGV4IHZhcmlhYmxlXHJcbiAgICAgIHRoaXMuX2luZGV4ICs9IGRlbHRhICogdGhpcy5mcmFtZVJhdGU7XHJcbiAgIH1cclxuXHJcbiAgIGFkZEZyYW1lKHNwcml0ZTogU3ByaXRlKXtcclxuICAgICAgdGhpcy5zcHJpdGVzLnB1c2goc3ByaXRlKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIGNlbnRlcigpe1xyXG4gICAgICB0aGlzLnNwcml0ZXMuZm9yRWFjaChzcHJpdGUgPT4gc3ByaXRlLmNlbnRlcigpKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgXHJcbiAgIHNldE9mZnNldCh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuc3ByaXRlcy5mb3JFYWNoKHNwcml0ZSA9PiBzcHJpdGUuc2V0T2Zmc2V0KHgsIHkpKTtcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBpbmRleCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5faW5kZXggJSB0aGlzLmZyYW1lcztcclxuICAgfVxyXG4gICBnZXQgZnJhbWVzKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnNwcml0ZXMubGVuZ3RoO1xyXG4gICB9XHJcbiAgIGdldCBmcmFtZSgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5zcHJpdGVzW01hdGguZmxvb3IodGhpcy5pbmRleCldO1xyXG4gICB9XHJcbiAgIGdldCBkdXJhdGlvbigpe1xyXG4gICAgICByZXR1cm4gdGhpcy5mcmFtZXMgLyB0aGlzLmZyYW1lUmF0ZTtcclxuICAgfVxyXG5cclxuICAgY2xvbmUoKXtcclxuICAgICAgbGV0IGEgPSAgbmV3IEFuaW1hdGlvbigpO1xyXG4gICAgICBcclxuICAgICAgYS5faW5kZXggPSB0aGlzLl9pbmRleDtcclxuICAgICAgYS5mcmFtZVJhdGUgPSB0aGlzLmZyYW1lUmF0ZTtcclxuICAgICAgYS5zcHJpdGVzID0gdGhpcy5zcHJpdGVzO1xyXG5cclxuICAgICAgcmV0dXJuIGE7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhe1xyXG4gICBjZW50ZXI6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMig2NDAgLyAyLCAzNjAgLyAyKTtcclxuXHJcbiAgIC8vIFRPRE8gdGhpcyBzaG91bGRuJ3QgYmUgZGVmaW5lZCBsaWtlIHRoaXMsIGJlY2F1c2UgdGhpcyBkZXBlbmRzIG9uIHRoZSBzY3JlZW4gYXNwZWN0IHJhdGlvLi4uXHJcbiAgIHdpZHRoOiBudW1iZXIgPSA2NDA7XHJcbiAgIGhlaWdodDogbnVtYmVyID0gMzYwO1xyXG5cclxuICAgZ2V0Qm91bmRzKGFhYmI/OiBBQUJCKXtcclxuICAgICAgaWYoYWFiYiA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgYWFiYiA9IG5ldyBBQUJCKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhYWJiLnNldChcclxuICAgICAgICAgdGhpcy5jZW50ZXIueCAtIHRoaXMud2lkdGggLyAyLFxyXG4gICAgICAgICB0aGlzLmNlbnRlci55IC0gdGhpcy5oZWlnaHQgLyAyLFxyXG4gICAgICAgICB0aGlzLmNlbnRlci54ICsgdGhpcy53aWR0aCAvIDIsXHJcbiAgICAgICAgIHRoaXMuY2VudGVyLnkgKyB0aGlzLmhlaWdodCAvIDJcclxuICAgICAgKTtcclxuICAgfVxyXG5cclxuICAgc2NyZWVuVG9Xb3JsZFgoeDogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIHggKiB0aGlzLndpZHRoICsgdGhpcy5jZW50ZXIueCAtIHRoaXMud2lkdGggLyAyO1xyXG4gICB9XHJcbiAgIC8vIHNjcmVlblRvV29ybGRZKHk6IG51bWJlcil7XHJcbiAgIC8vICAgIHJldHVybiB5ICogdGhpcy5oZWlnaHQgKyB0aGlzLmNlbnRlci55IC0gdGhpcy5oZWlnaHQgLyAyO1xyXG4gICAvLyB9XHJcbiAgIHNjcmVlblRvV29ybGRZKHk6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB5ICogdGhpcy53aWR0aCArIHRoaXMuY2VudGVyLnkgLSB0aGlzLndpZHRoIC8gMjtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4vQ2FtZXJhXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL1Nwcml0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXBoaWNze1xyXG4gICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgIGNvbG9yOiBzdHJpbmcgPSBcIndoaXRlXCI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KXtcclxuICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikhO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgIH1cclxuXHJcbiAgIHJlc2V0KCl7XHJcbiAgICAgIHRoaXMuY29udGV4dC5yZXNldFRyYW5zZm9ybSgpO1xyXG4gICB9XHJcblxyXG4gICBjbGVhclNjcmVlbigpe1xyXG4gICAgICB0aGlzLmNsZWFyKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICB9XHJcblxyXG4gICBjbGVhcih4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3U3ByaXRlKHNwcml0ZTogU3ByaXRlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGVYOiBudW1iZXIgPSAxLCBzY2FsZVk6IG51bWJlciA9IDEsIHJvdGF0aW9uOiBudW1iZXIgPSAwKXtcclxuICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuXHJcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICAgIHRoaXMuY29udGV4dC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XHJcbiAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUocm90YXRpb24pO1xyXG5cclxuICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShzcHJpdGUuaW1hZ2UsIFxyXG4gICAgICAgICBzcHJpdGUuc291cmNlWCwgc3ByaXRlLnNvdXJjZVksIHNwcml0ZS5zb3VyY2VXaWR0aCwgc3ByaXRlLnNvdXJjZUhlaWdodCxcclxuICAgICAgICAgLSBzcHJpdGUub2Zmc2V0WCwgLSBzcHJpdGUub2Zmc2V0WSwgc3ByaXRlLndpZHRoLCBzcHJpdGUuaGVpZ2h0KTtcclxuXHJcbiAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdTcHJpdGVTaW1wbGUoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShzcHJpdGUuaW1hZ2UsIFxyXG4gICAgICAgICBzcHJpdGUuc291cmNlWCwgc3ByaXRlLnNvdXJjZVksIHNwcml0ZS5zb3VyY2VXaWR0aCwgc3ByaXRlLnNvdXJjZUhlaWdodCxcclxuICAgICAgICAgeCAtIHNwcml0ZS5vZmZzZXRYLCB5IC0gc3ByaXRlLm9mZnNldFksIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdSZWN0YW5nbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBmaWxsOiBib29sZWFuKXtcclxuICAgICAgaWYoZmlsbCl7XHJcbiAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgdGhpcy5jb250ZXh0LnJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZHJhd0FBQkIoYWFiYjogQUFCQiwgZmlsbDogYm9vbGVhbil7XHJcbiAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZShhYWJiLmxlZnQsIGFhYmIudG9wLCBhYWJiLndpZHRoLCBhYWJiLmhlaWdodCwgZmlsbCk7XHJcbiAgIH1cclxuXHJcbiAgIHNldENhbWVyYShjYW1lcmE6IENhbWVyYSl7XHJcbiAgICAgIHRoaXMuY29udGV4dC5yZXNldFRyYW5zZm9ybSgpO1xyXG5cclxuICAgICAgbGV0IGNhbWVyYUhlaWdodCA9IGNhbWVyYS5oZWlnaHQ7XHJcbiAgICAgIGxldCBjYW1lcmFXaWR0aCA9IGNhbWVyYS53aWR0aDsvL3RoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0ICogY2FtZXJhSGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKDEgLyBjYW1lcmFXaWR0aCwgMSAvIGNhbWVyYUhlaWdodCk7XHJcbiAgICAgIHRoaXMuY29udGV4dC5zY2FsZSh0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoLShjYW1lcmEuY2VudGVyLnggLSBjYW1lcmFXaWR0aCAvIDIpLCAtKGNhbWVyYS5jZW50ZXIueSAtIGNhbWVyYUhlaWdodCAvIDIpKTtcclxuICAgfVxyXG5cclxuICAgc2V0Q29sb3IoY29sb3I6IHN0cmluZyl7XHJcbiAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgfVxyXG4gICBnZXRDb2xvcigpe1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xvcjtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlU2l6ZSgpe1xyXG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzLm9mZnNldFdpZHRoO1xyXG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHRoaXMuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nUXVhbGl0eSA9IFwibG93XCI7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCIuL0dyYXBoaWNzXCI7XHJcblxyXG5jbGFzcyBQYXJ0aWNsZXtcclxuICAgcG9zaXRpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICBzY2FsZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDEsIDEpO1xyXG4gICBsaWZldGltZTogbnVtYmVyID0gMDtcclxuICAgYW5pbWF0aW9uOiBBbmltYXRpb258dW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgUGFydGljbGVTeXN0ZW17XHJcbiAgIHBhcnRpY2xlczogUGFydGljbGVbXTtcclxuICAgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMucGFydGljbGVzID0gbmV3IEFycmF5KDEwKTtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMucGFydGljbGVzW2ldID0gbmV3IFBhcnRpY2xlKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuaW5kZXggPSAwO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMucGFydGljbGVzW2ldLmxpZmV0aW1lIC09IGRlbHRhO1xyXG4gICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXS5hbmltYXRpb24/LnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBsZXQgcGFydGljbGUgPSB0aGlzLnBhcnRpY2xlc1tpXTtcclxuXHJcbiAgICAgICAgIGlmKHBhcnRpY2xlLmFuaW1hdGlvbiA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuICAgICAgICAgaWYocGFydGljbGUubGlmZXRpbWUgPD0gMCkgY29udGludWU7XHJcblxyXG4gICAgICAgICBncmFwaGljcy5kcmF3U3ByaXRlKHBhcnRpY2xlLmFuaW1hdGlvbi5mcmFtZSwgcGFydGljbGUucG9zaXRpb24ueCwgcGFydGljbGUucG9zaXRpb24ueSwgcGFydGljbGUuc2NhbGUueCwgcGFydGljbGUuc2NhbGUueSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgYWRkUGFydGljbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIGFuaW1hdGlvbjogQW5pbWF0aW9uLCB4U2NhbGU6IG51bWJlciA9IDEsIHlTY2FsZTogbnVtYmVyID0gMSl7XHJcbiAgICAgIGxldCBwYXJ0aWNsZSA9IHRoaXMucGFydGljbGVzW3RoaXMuaW5kZXhdO1xyXG5cclxuICAgICAgcGFydGljbGUucG9zaXRpb24ueCA9IHg7XHJcbiAgICAgIHBhcnRpY2xlLnBvc2l0aW9uLnkgPSB5O1xyXG4gICAgICBwYXJ0aWNsZS5zY2FsZS54ID0geFNjYWxlO1xyXG4gICAgICBwYXJ0aWNsZS5zY2FsZS55ID0geVNjYWxlO1xyXG4gICAgICBcclxuICAgICAgcGFydGljbGUuYW5pbWF0aW9uID0gYW5pbWF0aW9uLmNsb25lKCk7XHJcbiAgICAgIHBhcnRpY2xlLmxpZmV0aW1lID0gYW5pbWF0aW9uLmR1cmF0aW9uO1xyXG5cclxuICAgICAgdGhpcy5pbmRleCsrO1xyXG5cclxuICAgICAgaWYodGhpcy5pbmRleCA+PSB0aGlzLnBhcnRpY2xlcy5sZW5ndGgpe1xyXG4gICAgICAgICB0aGlzLmluZGV4IC09IHRoaXMucGFydGljbGVzLmxlbmd0aDtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiLi9BbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGV7XHJcbiAgIGltYWdlOiBDYW52YXNJbWFnZVNvdXJjZTtcclxuXHJcbiAgIG9mZnNldFg6IG51bWJlciA9IDA7XHJcbiAgIG9mZnNldFk6IG51bWJlciA9IDA7XHJcblxyXG4gICBzb3VyY2VYOiBudW1iZXIgPSAwO1xyXG4gICBzb3VyY2VZOiBudW1iZXIgPSAwO1xyXG4gICBzb3VyY2VXaWR0aDogbnVtYmVyID0gMDtcclxuICAgc291cmNlSGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gICBcclxuICAgY29uc3RydWN0b3IoaW1hZ2U6IENhbnZhc0ltYWdlU291cmNlKXtcclxuICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG5cclxuICAgICAgdGhpcy5zb3VyY2VXaWR0aCA9IGltYWdlLndpZHRoIGFzIG51bWJlcjtcclxuICAgICAgdGhpcy5zb3VyY2VIZWlnaHQgPSBpbWFnZS5oZWlnaHQgYXMgbnVtYmVyO1xyXG4gICB9XHJcblxyXG4gICBnZXQgd2lkdGgoKSB7IHJldHVybiB0aGlzLnNvdXJjZVdpZHRoOyB9XHJcbiAgIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDsgfVxyXG5cclxuICAgY2VudGVyKCl7XHJcbiAgICAgIHRoaXMub2Zmc2V0WCA9IHRoaXMud2lkdGggLyAyO1xyXG4gICAgICB0aGlzLm9mZnNldFkgPSB0aGlzLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBzZXRPZmZzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLm9mZnNldFggPSB4O1xyXG4gICAgICB0aGlzLm9mZnNldFkgPSB5O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZVNoZWV0e1xyXG4gICBpbWFnZTogQ2FudmFzSW1hZ2VTb3VyY2U7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihpbWFnZTogQ2FudmFzSW1hZ2VTb3VyY2Upe1xyXG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgIH1cclxuXHJcbiAgIGdldFNwcml0ZSh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIpe1xyXG4gICAgICBsZXQgc3ByaXRlID0gbmV3IFNwcml0ZSh0aGlzLmltYWdlKTtcclxuXHJcbiAgICAgIHNwcml0ZS5zb3VyY2VYID0geDtcclxuICAgICAgc3ByaXRlLnNvdXJjZVkgPSB5O1xyXG4gICAgICBzcHJpdGUuc291cmNlV2lkdGggPSB3O1xyXG4gICAgICBzcHJpdGUuc291cmNlSGVpZ2h0ID0gaDtcclxuXHJcbiAgICAgIHJldHVybiBzcHJpdGU7XHJcbiAgIH1cclxuICAgXHJcbiAgIGdldEFuaW1hdGlvbih4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGNvdW50OiBudW1iZXIpe1xyXG4gICAgICBsZXQgYW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbigpO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspe1xyXG4gICAgICAgICBsZXQgc3ByaXRlID0gbmV3IFNwcml0ZSh0aGlzLmltYWdlKTtcclxuICAgXHJcbiAgICAgICAgIHNwcml0ZS5zb3VyY2VYID0geCArIGkgKiB3O1xyXG4gICAgICAgICBzcHJpdGUuc291cmNlWSA9IHk7XHJcbiAgICAgICAgIHNwcml0ZS5zb3VyY2VXaWR0aCA9IHc7XHJcbiAgICAgICAgIHNwcml0ZS5zb3VyY2VIZWlnaHQgPSBoO1xyXG5cclxuICAgICAgICAgYW5pbWF0aW9uLmFkZEZyYW1lKHNwcml0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhbmltYXRpb247XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBmcm9tSFRNTChpZDogc3RyaW5nKXtcclxuICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgU3ByaXRlU2hlZXQoZWxlbWVudCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR2FtZXBhZElucHV0LCBLZXlib2FyZCB9IGZyb20gXCJlbmdpbmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcImdyYXBoaWNzL0NhbWVyYVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZVNoZWV0IH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBDaGVzdEdhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL0NoZXN0R2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBDb2xsaWRlckdhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL0NvbGxpZGVyR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBGZWF0aGVyR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvRmVhdGhlckdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgTGV2ZWxNYW5hZ2VyIH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9MZXZlbE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL1BsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllckZpbmlzaEdhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL1BsYXllckZpbmlzaEdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJTcGF3bkdhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL1BsYXllclNwYXduR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBTcGlrZXNHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9TcGlrZXNHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcInNjZW5lL1NjZW5lXCI7XHJcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tIFwidGlsZW1hcC9UaWxlTWFwXCI7XHJcbmltcG9ydCBMaXN0IGZyb20gXCJ1dGlsL0xpc3RcIjtcclxuXHJcbi8vIEZ1Y2sgdGhpcyBidXQgd2hhdGV2ZXJcclxuZnVuY3Rpb24gaW5pdE1vZGFsKGVsZW1lbnQ6IEhUTUxFbGVtZW50KXtcclxuICAgbGV0IGNsb3NlID0gZWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNsb3NlXCIpO1xyXG5cclxuICAgY2xvc2U/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJjbG9zZWRcIik7XHJcblxyXG4gICAgICAvLyBZZXMgdGhpcyBtYWtlcyBhIGxvdCBvZiBzZW5zZSBoZXJlIDopXHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVxdWVzdEZ1bGxzY3JlZW4oKTtcclxuICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGluaXRNb2RhbHMoKXtcclxuICAgbGV0IG1vZGFscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIubW9kYWxcIik7XHJcblxyXG4gICBtb2RhbHMuZm9yRWFjaChtb2RhbCA9PiBpbml0TW9kYWwobW9kYWwgYXMgSFRNTEVsZW1lbnQpKTtcclxufVxyXG5cclxuLy8gSW5pdCB0aGUgZGFtbiBnYW1lXHJcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGFzeW5jICgpPT57XHJcbiAgIGluaXRNb2RhbHMoKTtcclxuXHJcbiAgIGxldCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuXHJcbiAgIGxldCBnYW1lID0gbmV3IEdhbWUoY2FudmFzKTtcclxuICAgXHJcbiAgIGxldCBzY2VuZSA9IG5ldyBTY2VuZSgpO1xyXG5cclxuICAgc2NlbmUudGlsZW1hcCA9IGF3YWl0IFRpbGVNYXAuZnJvbVRpbGVkTWFwRG93bmxvYWQoXCJhc3NldHMvbGV2ZWxzL2xldmVsNC5qc29uXCIsIChvYmopID0+IHtcclxuICAgICAgaWYob2JqLnR5cGUgPT09IFwiQ29sbGlkZXJcIiB8fCBvYmoudHlwZSA9PT0gXCJQbGF0Zm9ybUNvbGxpZGVyXCIpe1xyXG4gICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBDb2xsaWRlckdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqLnR5cGUgPT09IFwiTGV2ZWxNYW5hZ2VyXCIpe1xyXG4gICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBMZXZlbE1hbmFnZXIoKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqLnR5cGUgPT09IFwiUGxheWVyU3Bhd25cIil7XHJcbiAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IFBsYXllclNwYXduR2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKVxyXG4gICAgICB9XHJcbiAgICAgIGlmKG9iai50eXBlID09PSBcIkNoZWNrcG9pbnRcIil7XHJcbiAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0KEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSkpXHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqLnR5cGUgPT09IFwiRmVhdGhlclwiKXtcclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgRmVhdGhlckdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSlcclxuICAgICAgfVxyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJQbGF5ZXJGaW5pc2hcIil7XHJcbiAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IFBsYXllckZpbmlzaEdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSlcclxuICAgICAgfVxyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJDaGVzdFwiKXtcclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgQ2hlc3RHYW1lT2JqZWN0KEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKG9iai50eXBlID09PSBcIlNwaWtlc1wiKXtcclxuICAgICAgICAgbGV0IHNwaWtlcyA9IG5ldyBTcGlrZXNHYW1lT2JqZWN0KFxyXG4gICAgICAgICAgICBBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCksIFxyXG4gICAgICAgICAgICBMaXN0LmhhcyhvYmoucHJvcGVydGllcywgcHJvcCA9PiB7IHJldHVybiBwcm9wLm5hbWUgPT09IFwic2hyaW5rXCIgJiYgcHJvcC52YWx1ZSA9PT0gdHJ1ZTsgfSlcclxuICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3Qoc3Bpa2VzKTtcclxuICAgICAgfVxyXG4gICB9KTtcclxuICAgc2NlbmUucGh5c2ljcy5sYXllcnMgPSBzY2VuZS50aWxlbWFwLmNvbGxpZGVycztcclxuICAgXHJcbiAgIGdhbWUuc2NlbmUgPSBzY2VuZTtcclxuXHJcbiAgIGdhbWUucnVuKCk7XHJcbn0pO1xyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gXCJzaWduYWxzL1NpZ25hbFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEhlYWx0aENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgaGVhbHRoOiBudW1iZXIgPSAzO1xyXG5cclxuICAgb25EYW1hZ2U6IFNpZ25hbDxIZWFsdGhDb21wb25lbnQ+ID0gbmV3IFNpZ25hbDxIZWFsdGhDb21wb25lbnQ+KCk7XHJcbiAgIG9uRGVhdGg6IFNpZ25hbDxIZWFsdGhDb21wb25lbnQ+ID0gbmV3IFNpZ25hbDxIZWFsdGhDb21wb25lbnQ+KCk7XHJcblxyXG4gICBnZXQgYWxpdmUoKSB7IHJldHVybiB0aGlzLmhlYWx0aCA+IDA7IH1cclxuICAgZ2V0IGRlYWQoKSB7IHJldHVybiB0aGlzLmhlYWx0aCA8PSAwOyB9XHJcblxyXG4gICBkYW1hZ2UoYW1vdW50OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmhlYWx0aCAtPSBhbW91bnQ7XHJcblxyXG4gICAgICB0aGlzLm9uRGFtYWdlLmVtaXQodGhpcyk7XHJcbiAgICAgIFxyXG4gICAgICBpZih0aGlzLmRlYWQpe1xyXG4gICAgICAgICB0aGlzLm9uRGVhdGguZW1pdCh0aGlzKTtcclxuICAgICAgfVxyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gXCJzaWduYWxzL1NpZ25hbFwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdG9yQ29tcG9uZW50IH0gZnJvbSBcIi4vSW50ZXJhY3RvckNvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEludGVyYWN0YWJsZUNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgYm9keSE6IFJpZ2lkYm9keTtcclxuXHJcbiAgIG9uSW50ZXJhY3Q6IFNpZ25hbDxJbnRlcmFjdG9yQ29tcG9uZW50PjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMub25JbnRlcmFjdCA9IG5ldyBTaWduYWw8SW50ZXJhY3RvckNvbXBvbmVudD4oKTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoY29tcG9uZW50ID0+IGNvbXBvbmVudCBpbnN0YW5jZW9mIFJpZ2lkYm9keSkgYXMgUmlnaWRib2R5O1xyXG4gICB9XHJcblxyXG4gICBpbnRlcmFjdChpbnRlcmFjdG9yOiBJbnRlcmFjdG9yQ29tcG9uZW50KXtcclxuICAgICAgdGhpcy5vbkludGVyYWN0LmVtaXQoaW50ZXJhY3Rvcik7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBjYW5JbnRlcmFjdCgpe1xyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG5cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInNjZW5lL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcIi4vSW50ZXJhY3RhYmxlQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3RvckNvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgYm9keSE6IFJpZ2lkYm9keTtcclxuICAgaG92ZXJzOiBTZXQ8SW50ZXJhY3RhYmxlQ29tcG9uZW50PjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMuaG92ZXJzID0gbmV3IFNldDxJbnRlcmFjdGFibGVDb21wb25lbnQ+KCk7XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcbiAgICAgIHRoaXMuYm9keSA9IHRoaXMuZ2FtZU9iamVjdC5maW5kQ29tcG9uZW50KGNvbXBvbmVudCA9PiBjb21wb25lbnQgaW5zdGFuY2VvZiBSaWdpZGJvZHkpIGFzIFJpZ2lkYm9keTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5vbkNvbGxpc2lvbi5saXN0ZW4odGhpcy5vbkNvbGxpc2lvbi5iaW5kKHRoaXMpKTtcclxuICAgfVxyXG5cclxuICAgaW50ZXJhY3QoKXtcclxuICAgICAgdGhpcy5ob3ZlcnMuZm9yRWFjaChob3ZlciA9PiB7XHJcbiAgICAgICAgIGlmKGhvdmVyLmNhbkludGVyYWN0KXtcclxuICAgICAgICAgICAgaG92ZXIuaW50ZXJhY3QodGhpcyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgbGV0IHJlbW92ZUxpc3Q6IEludGVyYWN0YWJsZUNvbXBvbmVudFtdID0gW107XHJcblxyXG4gICAgICB0aGlzLmhvdmVycy5mb3JFYWNoKHZhbHVlID0+IHtcclxuICAgICAgICAgLy8gSWYgbm8gbG9uZ2VyIGNvbGxpZGVzIVxyXG4gICAgICAgICBpZighdmFsdWUuYm9keS5jb2xsaWRlcyh0aGlzLmJvZHkpKXtcclxuICAgICAgICAgICAgcmVtb3ZlTGlzdC5wdXNoKHZhbHVlKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJlbW92ZUxpc3QuZm9yRWFjaChpdGVtID0+IHRoaXMuaG92ZXJzLmRlbGV0ZShpdGVtKSk7XHJcbiAgIH1cclxuXHJcbiAgIG9uQ29sbGlzaW9uKG90aGVyOiBSaWdpZGJvZHkpe1xyXG4gICAgICBsZXQgaW50ZXJhY3Rpb24gPSBvdGhlci5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoY29tcG9uZW50ID0+IGNvbXBvbmVudCBpbnN0YW5jZW9mIEludGVyYWN0YWJsZUNvbXBvbmVudCkgYXMgSW50ZXJhY3RhYmxlQ29tcG9uZW50fHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIGlmKGludGVyYWN0aW9uID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuaG92ZXJzLmFkZChpbnRlcmFjdGlvbik7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWVwYWRJbnB1dCwgS2V5Ym9hcmQgfSBmcm9tIFwiZW5naW5lL0lucHV0XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJJbnB1dENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgZGlyZWN0aW9uOiBudW1iZXIgPSAwO1xyXG5cclxuICAganVtcFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAganVtcERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGRhc2hQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBpbnRlcmFjdFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5qdW1wUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRhc2hQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuaW50ZXJhY3RQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuanVtcERvd24gPSBmYWxzZTtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG5cclxuICAgICAgLy8gVE9ETyBhY3R1YWxseSBzd2l0Y2ggYmV0d2VlbiBjb250cm9sbGVycyBpbnN0ZWFkIG9mIHRoaXMgaGFsZiBiYWtlZCBoYWxmIGFzc2VkIHNvbHV0aW9uXHJcbiAgICAgIHRoaXMuZ2FtZS5pbnB1dC5nYW1lcGFkcy5mb3JFYWNoKHBhZCA9PiB7XHJcbiAgICAgICAgIGlmKHBhZC5pc0J1dHRvblByZXNzZWQoR2FtZXBhZElucHV0LkJ1dHRvbkEpKXtcclxuICAgICAgICAgICAgdGhpcy5qdW1wUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYocGFkLmlzQnV0dG9uUHJlc3NlZChHYW1lcGFkSW5wdXQuQnV0dG9uWCkpe1xyXG4gICAgICAgICAgICB0aGlzLmludGVyYWN0UHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYocGFkLmlzQnV0dG9uUHJlc3NlZChHYW1lcGFkSW5wdXQuQnV0dG9uUmlnaHRUcmlnZ2VyKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKHBhZC5pc0J1dHRvbkRvd24oR2FtZXBhZElucHV0LkJ1dHRvbkEpKXtcclxuICAgICAgICAgICAgdGhpcy5qdW1wRG93biA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcGFkLmxlZnRBeGlzWDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleVNwYWNlKSkgdGhpcy5qdW1wUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleURvd24oS2V5Ym9hcmQuS2V5U3BhY2UpKSB0aGlzLmp1bXBEb3duID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlDKSkgdGhpcy5kYXNoUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5WCkpIHRoaXMuaW50ZXJhY3RQcmVzc2VkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleURvd24oS2V5Ym9hcmQuS2V5QXJyb3dMZWZ0KSkgdGhpcy5kaXJlY3Rpb24gPSAtMTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5RG93bihLZXlib2FyZC5LZXlBcnJvd1JpZ2h0KSkgdGhpcy5kaXJlY3Rpb24gPSAxO1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5RG93bihLZXlib2FyZC5LZXlBKSkgdGhpcy5kaXJlY3Rpb24gPSAtMTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5RG93bihLZXlib2FyZC5LZXlEKSkgdGhpcy5kaXJlY3Rpb24gPSAxO1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlDb21tYSkpIHRoaXMuanVtcFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlEb3duKEtleWJvYXJkLktleUNvbW1hKSkgdGhpcy5qdW1wRG93biA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5UGVyaW9kKSkgdGhpcy5kYXNoUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5U2xhc2gpKSB0aGlzLmludGVyYWN0UHJlc3NlZCA9IHRydWU7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSwgU3ByaXRlU2hlZXQgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcbmltcG9ydCB7IEludGVyYWN0YWJsZUNvbXBvbmVudCB9IGZyb20gXCJpc2xhbmQvQ29tcG9uZW50cy9JbnRlcmFjdGFibGVDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RvckNvbXBvbmVudCB9IGZyb20gXCJpc2xhbmQvQ29tcG9uZW50cy9JbnRlcmFjdG9yQ29tcG9uZW50XCI7XHJcbmltcG9ydCBSZXNvdXJjZXMgZnJvbSBcImlzbGFuZC9SZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVzdEdhbWVPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuICAgYm9keTogUmlnaWRib2R5O1xyXG4gICBpbnRlcmFjdGFibGU6IEludGVyYWN0YWJsZUNvbXBvbmVudDtcclxuXHJcbiAgIGNsb3NlZDogU3ByaXRlO1xyXG4gICBvcGVuOiBTcHJpdGU7XHJcblxyXG4gICBpc09wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBJbnRlcmFjdGFibGVDb21wb25lbnQoKSk7XHJcblxyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZS5vbkludGVyYWN0Lmxpc3Rlbih0aGlzLm9uSW50ZXJhY3QuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICB0aGlzLmJvZHkuY29sbGlkZXIgPSBCb3hDb2xsaWRlci5mcm9tQUFCQihhYWJiKTtcclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuY2xvc2VkID0gUmVzb3VyY2VzLnNoZWV0T2JqZWN0cy5nZXRTcHJpdGUoMCwgNjQsIDE2LCAxNik7XHJcbiAgICAgIHRoaXMub3BlbiA9IFJlc291cmNlcy5zaGVldE9iamVjdHMuZ2V0U3ByaXRlKDE2LCA2NCwgMTYsIDE2KTtcclxuICAgfVxyXG5cclxuICAgb25JbnRlcmFjdChpbnRlcmFjdG9yOiBJbnRlcmFjdG9yQ29tcG9uZW50KXtcclxuICAgICAgdGhpcy5pc09wZW4gPSAhdGhpcy5pc09wZW47XHJcbiAgIH1cclxuXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZVNpbXBsZSh0aGlzLmlzT3BlbiA/IHRoaXMub3BlbiA6IHRoaXMuY2xvc2VkLCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb2xsaWRlckdhbWVPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuICAgYm9keTogUmlnaWRib2R5O1xyXG5cclxuICAgY29uc3RydWN0b3IoYWFiYjogQUFCQil7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oKSk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLmFwcGx5KGFhYmIueCwgYWFiYi55KTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBSaWdpZGJvZHkoKSk7XHJcblxyXG4gICAgICB0aGlzLmJvZHkuc29saWQgPSB0cnVlO1xyXG4gICAgICB0aGlzLmJvZHkuY29sbGlkZXIgPSBCb3hDb2xsaWRlci5mcm9tQUFCQihhYWJiKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcImdyYXBoaWNzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcbmltcG9ydCBSZXNvdXJjZXMgZnJvbSBcImlzbGFuZC9SZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyR2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllckdhbWVPYmplY3RcIjtcclxuXHJcbi8vIFRPRE8gcGxheWVyIHBpY2t1cCBnYW1lb2JqZWN0IG9yIHNvbWV0aGluZ1xyXG5leHBvcnQgY2xhc3MgRmVhdGhlckdhbWVPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuICAgYm9keTogUmlnaWRib2R5O1xyXG5cclxuICAgdXNlZFNwcml0ZTogU3ByaXRlO1xyXG4gICB1bnVzZWRTcHJpdGU6IFNwcml0ZTtcclxuXHJcbiAgIGlzVXNlZDogYm9vbGVhbjtcclxuICAgdXNlZFRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICBlZmZlY3Q6IEFuaW1hdGlvbjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLmNlbnRlclgsIGFhYmIuY2VudGVyWSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuXHJcbiAgICAgIGxldCBjb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG4gICAgICBcclxuICAgICAgY29sbGlkZXIub2Zmc2V0LmFwcGx5KDYsIDYpO1xyXG4gICAgICBjb2xsaWRlci5zaXplLmFwcGx5KDEyLCAxMik7XHJcblxyXG4gICAgICB0aGlzLmVmZmVjdCA9IFJlc291cmNlcy5zaGVldEVmZmVjdHMuZ2V0QW5pbWF0aW9uKDAsIDgwLCAxNiwgMTYsIDQpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLmVmZmVjdC5mcmFtZVJhdGUgPSAxMjtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IGNvbGxpZGVyO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5pc1VzZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy51bnVzZWRTcHJpdGUgPSBSZXNvdXJjZXMuc2hlZXRPYmplY3RzLmdldFNwcml0ZSgwLCA4MCwgMTYsIDE2KS5jZW50ZXIoKTtcclxuICAgICAgdGhpcy51c2VkU3ByaXRlID0gUmVzb3VyY2VzLnNoZWV0T2JqZWN0cy5nZXRTcHJpdGUoMTYsIDgwLCAxNiwgMTYpLmNlbnRlcigpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5Lm9uQ29sbGlzaW9uLmxpc3Rlbih0aGlzLm9uQ29sbGlzaW9uLmJpbmQodGhpcykpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGlmKHRoaXMudXNlZFRpbWUgPCAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnVzZWRUaW1lIC09IGRlbHRhO1xyXG5cclxuICAgICAgaWYodGhpcy51c2VkVGltZSA8IDApe1xyXG4gICAgICAgICB0aGlzLmlzVXNlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgLy8gVE9ETyBhZGQgYW5pbWF0aW9uXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgb25Db2xsaXNpb24ob3RoZXI6IFJpZ2lkYm9keSl7XHJcbiAgICAgIGlmKCF0aGlzLmlzVXNlZCAmJiBvdGhlci5nYW1lT2JqZWN0IGluc3RhbmNlb2YgUGxheWVyR2FtZU9iamVjdCl7XHJcbiAgICAgICAgIG90aGVyLmdhbWVPYmplY3QuY2FuRG91YmxlSnVtcCA9IHRydWU7XHJcbiAgICAgICAgIG90aGVyLmdhbWVPYmplY3QuY2FuRGFzaCA9IHRydWU7IC8vQWZ0ZXIgZG91YmxlanVtcCwgeW91IGdldCBhbm90aGVyIGRhc2ghXHJcblxyXG4gICAgICAgICB0aGlzLmlzVXNlZCA9IHRydWU7XHJcbiAgICAgICAgIHRoaXMudXNlZFRpbWUgPSAxO1xyXG5cclxuICAgICAgICAgdGhpcy5zY2VuZS5wYXJ0aWNsZVN5c3RlbS5hZGRQYXJ0aWNsZSh0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55LCB0aGlzLmVmZmVjdCk7XHJcblxyXG4gICAgICAgICAvLyBUT0RPIGFkZCBhbmltYXRpb25cclxuICAgICAgfVxyXG4gICB9IFxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBncmFwaGljcy5kcmF3U3ByaXRlU2ltcGxlKHRoaXMuaXNVc2VkID8gdGhpcy51c2VkU3ByaXRlIDogdGhpcy51bnVzZWRTcHJpdGUsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IEdhbWVwYWRJbnB1dCwgS2V5Ym9hcmQgfSBmcm9tIFwiZW5naW5lL0lucHV0XCI7XHJcbmltcG9ydCB7IEhlYWx0aENvbXBvbmVudCB9IGZyb20gXCJpc2xhbmQvQ29tcG9uZW50cy9IZWFsdGhDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgZm9ybWF0IH0gZnJvbSBcInV0aWwvVGltZVwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllckZpbmlzaEdhbWVPYmplY3QgfSBmcm9tIFwiLi9QbGF5ZXJGaW5pc2hHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllckdhbWVPYmplY3QgfSBmcm9tIFwiLi9QbGF5ZXJHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllclNwYXduR2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllclNwYXduR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExldmVsTWFuYWdlciBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHNwYXduPzogUGxheWVyU3Bhd25HYW1lT2JqZWN0O1xyXG4gICBmaW5pc2g/OiBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0O1xyXG5cclxuICAgcGxheWVyPzogUGxheWVyR2FtZU9iamVjdDtcclxuICAgY2hlY2twb2ludHM6IFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0W107XHJcblxyXG4gICBjdXJyZW50Q2hlY2twb2ludD86IFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0O1xyXG5cclxuICAgcnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjb21wbGV0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgdGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIGVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICBmaW5hbFRpbWVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgYmVzdFRpbWVFbGVtZW50OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgIGJlc3RUaW1lOiBudW1iZXJ8dW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZ2FtZS1vdmVybGF5XCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICB0aGlzLmZpbmFsVGltZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImZpbmFsLXRpbWVcIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuYmVzdFRpbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJiZXN0LXRpbWVcIikgYXMgSFRNTEVsZW1lbnQ7XHJcblxyXG4gICAgICB0aGlzLmFsd2F5c1VwZGF0ZSA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmNoZWNrcG9pbnRzID0gW107XHJcblxyXG4gICAgICBsZXQgYnQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImJlc3RUaW1lXCIpO1xyXG4gICAgICBpZihidCAhPT0gbnVsbCl7XHJcbiAgICAgICAgIHRoaXMuYmVzdFRpbWUgPSBwYXJzZUZsb2F0KGJ0KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBzdXBlci5pbml0KGdhbWUpO1xyXG5cclxuICAgICAgdGhpcy5zcGF3biA9IHRoaXMuc2NlbmUuZmluZE9iamVjdChvYmplY3QgPT4gb2JqZWN0IGluc3RhbmNlb2YgUGxheWVyU3Bhd25HYW1lT2JqZWN0KSBhcyBQbGF5ZXJTcGF3bkdhbWVPYmplY3R8dW5kZWZpbmVkO1xyXG4gICAgICB0aGlzLmZpbmlzaCA9IHRoaXMuc2NlbmUuZmluZE9iamVjdChvYmplY3QgPT4gb2JqZWN0IGluc3RhbmNlb2YgUGxheWVyRmluaXNoR2FtZU9iamVjdCkgYXMgUGxheWVyRmluaXNoR2FtZU9iamVjdHx1bmRlZmluZWQ7XHJcblxyXG4gICAgICB0aGlzLmZpbmlzaD8uaW50ZXJhY3RhYmxlLm9uSW50ZXJhY3QubGlzdGVuKGludGVyYWN0b3IgPT4ge1xyXG4gICAgICAgICBpZihpbnRlcmFjdG9yLmdhbWVPYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXJHYW1lT2JqZWN0KXtcclxuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnN0b3AoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmUuZ2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4ge1xyXG4gICAgICAgICBpZihvYmogaW5zdGFuY2VvZiBQbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdCl7XHJcbiAgICAgICAgICAgIHRoaXMuY2hlY2twb2ludHMucHVzaChvYmopO1xyXG5cclxuICAgICAgICAgICAgb2JqLmludGVyYWN0YWJsZS5vbkludGVyYWN0Lmxpc3RlbihpbnRlcmFjdG9yID0+IHtcclxuICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50Q2hlY2twb2ludCA9IG9iajtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgaWYodGhpcy5ydW5uaW5nKSB7XHJcbiAgICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5nYW1lcGFkcy5mb3JFYWNoKHBhZCA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBhZC5pc0J1dHRvblByZXNzZWQoR2FtZXBhZElucHV0LkJ1dHRvblkpKXtcclxuICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcbiAgIFxyXG4gICAgICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleUVudGVyKSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5nYW1lLmlucHV0LmdhbWVwYWRzLmZvckVhY2gocGFkID0+IHtcclxuICAgICAgICAgICAgaWYocGFkLmlzQnV0dG9uUHJlc3NlZChHYW1lcGFkSW5wdXQuQnV0dG9uQSkgfHwgcGFkLmlzQnV0dG9uUHJlc3NlZChHYW1lcGFkSW5wdXQuQnV0dG9uWSkpe1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgXHJcbiAgICAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5RW50ZXIpKXtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlDb21tYSkpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleVNwYWNlKSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMudXBkYXRlQ2FtZXJhKGRlbHRhKTtcclxuICAgfVxyXG5cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHN1cGVyLmZpeGVkVXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgIGlmKHRoaXMucnVubmluZyAmJiAhdGhpcy5zY2VuZS5wYXVzZWQpe1xyXG4gICAgICAgICB0aGlzLnRpbWUgKz0gZGVsdGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCF0aGlzLnBsYXllcj8uaGVhbHRoLmFsaXZlKXtcclxuICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgc3RvcCgpe1xyXG4gICAgICB0aGlzLnNjZW5lLnJlbW92ZUdhbWVPYmplY3QodGhpcy5wbGF5ZXIhKTtcclxuXHJcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYodGhpcy5jb21wbGV0ZWQgJiYgKHRoaXMuYmVzdFRpbWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnRpbWUgPCB0aGlzLmJlc3RUaW1lKSl7XHJcbiAgICAgICAgIHRoaXMuYmVzdFRpbWUgPSB0aGlzLnRpbWU7XHJcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmVzdFRpbWVcIiwgXCJcIiArIHRoaXMuYmVzdFRpbWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnN5bmMoKTtcclxuICAgfVxyXG5cclxuICAgcmVzdGFydCgpe1xyXG4gICAgICBpZih0aGlzLnNwYXduID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG5cclxuXHJcbiAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllckdhbWVPYmplY3QoKTtcclxuXHJcbiAgICAgIGxldCBwb3NpdGlvbiA9IHRoaXMuc3Bhd24udHJhbnNmb3JtLnBvc2l0aW9uO1xyXG5cclxuICAgICAgaWYodGhpcy5jdXJyZW50Q2hlY2twb2ludCA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodGhpcy5jdXJyZW50Q2hlY2twb2ludCAhPT0gdW5kZWZpbmVkICYmICF0aGlzLmNvbXBsZXRlZCl7XHJcbiAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5jdXJyZW50Q2hlY2twb2ludC50cmFuc2Zvcm0ucG9zaXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGxheWVyLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQocG9zaXRpb24pO1xyXG4gICAgICB0aGlzLnBsYXllci50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24uc2V0KHBvc2l0aW9uKTtcclxuICAgICAgdGhpcy5wbGF5ZXIuYm9keS5wcmV2aW91c1Bvc2l0aW9uLnNldChwb3NpdGlvbik7XHJcblxyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgaWYodGhpcy5jb21wbGV0ZWQpe1xyXG4gICAgICAgICB0aGlzLnRpbWUgPSAwO1xyXG4gICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNjZW5lLmFkZEdhbWVPYmplY3QodGhpcy5wbGF5ZXIpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zeW5jKCk7XHJcbiAgIH1cclxuXHJcbiAgIHN5bmMoKXtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJnYW1lLW92ZXJcIiwgIXRoaXMucnVubmluZyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIsIHRoaXMuY29tcGxldGVkKTtcclxuICAgICAgdGhpcy5maW5hbFRpbWVFbGVtZW50LmlubmVyVGV4dCA9IGZvcm1hdCh0aGlzLnRpbWUpO1xyXG5cclxuICAgICAgaWYodGhpcy5iZXN0VGltZSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgdGhpcy5iZXN0VGltZUVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KHRoaXMuYmVzdFRpbWUpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUNhbWVyYShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYoIXRoaXMucGxheWVyKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucGxheWVyLnRyYW5zZm9ybS5wb3NpdGlvbjtcclxuXHJcbiAgICAgIGNvbnN0IHNjZW5lV2lkdGggPSB0aGlzLnNjZW5lLnRpbGVtYXAhLnBpeGVsV2lkdGg7XHJcbiAgICAgIGNvbnN0IHNjZW5lSGVpZ2h0ID0gdGhpcy5zY2VuZS50aWxlbWFwIS5waXhlbEhlaWdodDtcclxuXHJcbiAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gNDAgKiAxNjtcclxuICAgICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gMjMgKiAxNjtcclxuXHJcbiAgICAgIGNvbnN0IGNhbSA9IHRoaXMuc2NlbmUuY2FtZXJhO1xyXG5cclxuICAgICAgY29uc3Qgc2NyZWVuSW5kZXhYID0gTWF0aC5mbG9vcihwb3NpdGlvbi54IC8gc2NyZWVuV2lkdGgpO1xyXG4gICAgICBjb25zdCBzY3JlZW5JbmRleFkgPSBNYXRoLmZsb29yKHBvc2l0aW9uLnkgLyBzY3JlZW5IZWlnaHQpO1xyXG5cclxuICAgICAgY29uc3Qgb2Zmc2V0WCA9IHNjcmVlbkluZGV4WCAqIHNjcmVlbldpZHRoO1xyXG4gICAgICBjb25zdCBvZmZzZXRZID0gc2NyZWVuSW5kZXhZICogc2NyZWVuSGVpZ2h0O1xyXG5cclxuICAgICAgbGV0IHdhbnRlZFBvc2l0aW9uID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgIG9mZnNldFggKyBzY3JlZW5XaWR0aCAvIDIsXHJcbiAgICAgICAgIG9mZnNldFkgKyBzY3JlZW5IZWlnaHQgLyAyLFxyXG4gICAgICApO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2xhbXAgdGhlIHdhbnRlZCBwb3NpdGlvbiB0byB0aGUgc2NlbmUuLi4gTm90IGdyZWF0LCBmb3IgcmVhc29ucyAobGlrZSwgZWRnZSBjYXNlcywgYnV0IHdlIGRvbid0IGNhcmUgOikgKVxyXG4gICAgICBpZih3YW50ZWRQb3NpdGlvbi54IC0gY2FtLndpZHRoIC8gMiA8IDApIHdhbnRlZFBvc2l0aW9uLnggPSBjYW0ud2lkdGggLyAyO1xyXG4gICAgICBpZih3YW50ZWRQb3NpdGlvbi54ICsgY2FtLndpZHRoIC8gMiA+IHNjZW5lV2lkdGgpIHdhbnRlZFBvc2l0aW9uLnggPSBzY2VuZVdpZHRoIC0gY2FtLndpZHRoIC8gMjtcclxuXHJcbiAgICAgIGlmKHdhbnRlZFBvc2l0aW9uLnkgLSBjYW0uaGVpZ2h0IC8gMiA8IDApIHdhbnRlZFBvc2l0aW9uLnkgPSBjYW0uaGVpZ2h0IC8gMjtcclxuICAgICAgaWYod2FudGVkUG9zaXRpb24ueSArIGNhbS5oZWlnaHQgLyAyID4gc2NlbmVIZWlnaHQpIHdhbnRlZFBvc2l0aW9uLnkgPSBzY2VuZUhlaWdodCAtIGNhbS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5wYXVzZWQgPSBWZWN0b3IyLmRpc3RhbmNlKHdhbnRlZFBvc2l0aW9uLCBjYW0uY2VudGVyKSA+IDE7XHJcblxyXG4gICAgICBjYW0uY2VudGVyLmxlcnBUbyh3YW50ZWRQb3NpdGlvbiwgZGVsdGEgKiAxMCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJncmFwaGljcy9BbmltYXRpb25cIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0YWJsZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdG9yQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0b3JDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL1Jlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcbiAgIGludGVyYWN0YWJsZTogSW50ZXJhY3RhYmxlQ29tcG9uZW50O1xyXG5cclxuICAgY3VycmVudEFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG5cclxuICAgY2xvc2VkQW5pbWF0aW9uOiBBbmltYXRpb247XHJcbiAgIG9wZW5BbmltYXRpb246IEFuaW1hdGlvbjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBJbnRlcmFjdGFibGVDb21wb25lbnQoKSk7XHJcblxyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZS5vbkludGVyYWN0Lmxpc3Rlbih0aGlzLm9uSW50ZXJhY3QuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAvLyBJbnRlcmFjdGFibGVzIGFuZCBzaGl0XHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG5cclxuICAgICAgdGhpcy5jbG9zZWRBbmltYXRpb24gPSBSZXNvdXJjZXMuc2hlZXRPYmplY3RzLmdldEFuaW1hdGlvbigwLCAxMTIsIDE2LCAxNiwgMSk7XHJcbiAgICAgIHRoaXMub3BlbkFuaW1hdGlvbiA9IFJlc291cmNlcy5zaGVldE9iamVjdHMuZ2V0QW5pbWF0aW9uKDE2LCAxMTIsIDE2LCAxNiwgNCk7XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLmNsb3NlZEFuaW1hdGlvbjtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24udXBkYXRlKGRlbHRhKTtcclxuICAgfVxyXG5cclxuICAgb25JbnRlcmFjdChpbnRlcmFjdG9yOiBJbnRlcmFjdG9yQ29tcG9uZW50KXtcclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5vcGVuQW5pbWF0aW9uO1xyXG4gICB9XHJcbiAgIFxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGVTaW1wbGUodGhpcy5jdXJyZW50QW5pbWF0aW9uLmZyYW1lLCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGFibGVDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSW50ZXJhY3RhYmxlQ29tcG9uZW50XCI7XHJcbmltcG9ydCBSZXNvdXJjZXMgZnJvbSBcImlzbGFuZC9SZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuICAgaW50ZXJhY3RhYmxlOiBJbnRlcmFjdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICBzcHJpdGU6IFNwcml0ZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBJbnRlcmFjdGFibGVDb21wb25lbnQoKSk7XHJcblxyXG4gICAgICAvLyBJbnRlcmFjdGFibGVzIGFuZCBzaGl0XHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zcHJpdGUgPSBSZXNvdXJjZXMuc2hlZXRPYmplY3RzLmdldFNwcml0ZSgxMTIsIDAsIDE2LCAxNik7XHJcbiAgIH1cclxuICAgXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZVNpbXBsZSh0aGlzLnNwcml0ZSwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IE1vdXNlIH0gZnJvbSBcImVuZ2luZS9JbnB1dFwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiZ3JhcGhpY3MvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSwgU3ByaXRlU2hlZXQgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcbmltcG9ydCB7IEhlYWx0aENvbXBvbmVudCB9IGZyb20gXCJpc2xhbmQvQ29tcG9uZW50cy9IZWFsdGhDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0YWJsZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdG9yQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0b3JDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGxheWVySW5wdXRDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvUGxheWVySW5wdXRDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL1Jlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllckdhbWVPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICBjdXJyZW50QW5pbWF0aW9uOiBBbmltYXRpb247XHJcblxyXG4gICBpZGxlQW5pbWF0aW9uOiBBbmltYXRpb247XHJcbiAgIHdhbGtBbmltYXRpb246IEFuaW1hdGlvbjtcclxuICAganVtcEFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG4gICBmYWxsQW5pbWF0aW9uOiBBbmltYXRpb247XHJcbiAgIGRhc2hBbmltYXRpb246IEFuaW1hdGlvbjtcclxuICAgd2FsbEFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG5cclxuICAgZWZmZWN0SnVtcDogQW5pbWF0aW9uO1xyXG4gICBlZmZlY3RMYW5kOiBBbmltYXRpb247XHJcbiAgIGVmZmVjdFdhbGxqdW1wOiBBbmltYXRpb247XHJcbiAgIGVmZmVjdERvdWJsZUp1bXA6IEFuaW1hdGlvbjtcclxuICAgXHJcbiAgIGVmZmVjdERhc2g6IEFuaW1hdGlvbjtcclxuXHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcbiAgIGlucHV0OiBQbGF5ZXJJbnB1dENvbXBvbmVudDtcclxuICAgaGVhbHRoOiBIZWFsdGhDb21wb25lbnQ7XHJcbiAgIGludGVyYWN0b3I6IEludGVyYWN0b3JDb21wb25lbnQ7XHJcbiAgIFxyXG4gICBqdW1wSG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGRhc2hIb3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGp1bXBpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgZmFjaW5nOiBudW1iZXIgPSAxO1xyXG5cclxuICAganVtcFNwZWVkOiBudW1iZXIgPSAtMyAqIDYwO1xyXG4gICBtb3ZlU3BlZWQ6IG51bWJlciA9IDEuNSAqIDYwO1xyXG5cclxuICAgY2F5b3RlVGltZTogbnVtYmVyID0gMC4wNTtcclxuICAgZ3JvdW5kTGVhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgZ3JvdW5kQWNjZWxlcmF0aW9uOiBudW1iZXIgPSAwLjIgKiA2MCAqIDYwO1xyXG4gICBncmF2aXR5OiBudW1iZXIgPSAwLjI1ICogNjAgKiA2MDtcclxuICAgZ3Jhdml0eVVwRnJhY3Rpb246IG51bWJlciA9IDAuNTtcclxuICAgZ3Jhdml0eVdhbGxGcmFjdGlvbjogbnVtYmVyID0gMC40O1xyXG5cclxuICAgbWF4RmFsbFNwZWVkID0gNSAqIDYwO1xyXG5cclxuICAgZ3JvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgd2FsbExlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgd2FsbFJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBoYWRXYWxsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBkYXNoaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGRhc2hTcGVlZDogbnVtYmVyID0gNC43ICogNjA7XHJcbiAgIGRhc2hUaW1lOiBudW1iZXIgPSAyNCAvICh0aGlzLmRhc2hTcGVlZCk7XHJcblxyXG4gICBkYXNoVGltZXI6IG51bWJlciA9IDA7XHJcbiAgIGRhc2hUaW1lb3V0OiBudW1iZXIgPSAwO1xyXG4gICBkYXNoU2F2ZWRTcGVlZDogbnVtYmVyID0gMDtcclxuICAgZGFzaFNhdmVkTWF4U3BlZWQ6IG51bWJlciA9IDIgKiA2MDtcclxuICAgZGFzaFNhdmVkQWRkaXRpb246IG51bWJlciA9ICh0aGlzLmRhc2hTYXZlZE1heFNwZWVkIC0gdGhpcy5tb3ZlU3BlZWQpIC8gMzsgLy8gSW4gdGhyZWUgZGFzaGVzIHVudGlsIG1heCBzcGVlZCBcclxuICAgZGFzaEFuaW1hdGlvblRpbWVyOiBudW1iZXIgPSAwO1xyXG5cclxuICAgd2FsbEp1bXBUaW1lcjogbnVtYmVyID0gMDtcclxuICAgZ2V0IHdhbGxKdW1waW5nKCkgeyByZXR1cm4gdGhpcy53YWxsSnVtcFRpbWVyID4gMDsgfVxyXG5cclxuICAgZ2V0IGNhbk1vdmUoKSB7IHJldHVybiAhdGhpcy53YWxsSnVtcGluZyAmJiAhdGhpcy5kYXNoaW5nOyB9XHJcbiAgIGdldCB1c2VHcmF2aXR5KCkgeyByZXR1cm4gIXRoaXMuZGFzaGluZzsgfVxyXG4gICBnZXQgaGFzV2FsbCgpIHsgcmV0dXJuIHRoaXMud2FsbExlZnQgfHwgdGhpcy53YWxsUmlnaHQ7IH1cclxuICAgXHJcbiAgIGNhbkRhc2g6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY2FuRG91YmxlSnVtcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBnZXQgY2FuSnVtcCgpIHsgcmV0dXJuICB0aGlzLmdyb3VuZGVkIHx8ICh0aGlzLmdyb3VuZExlYXZlVGltZSA8IHRoaXMuY2F5b3RlVGltZSk7IH1cclxuXHJcblxyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIGxldCBzaGVldCA9IFJlc291cmNlcy5zaGVldFBsYXllcjtcclxuXHJcbiAgICAgIHRoaXMuaWRsZUFuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCAwLCAxNiwgMTYsIDEpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLndhbGtBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgMTYsIDE2LCAxNiwgNCkuY2VudGVyKCk7XHJcbiAgICAgIHRoaXMuZmFsbEFuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCAzMiwgMTYsIDE2LCAyKS5jZW50ZXIoKTtcclxuICAgICAgdGhpcy5qdW1wQW5pbWF0aW9uID0gc2hlZXQuZ2V0QW5pbWF0aW9uKDAsIDQ4LCAxNiwgMTYsIDIpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLmRhc2hBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgNjQsIDE2LCAxNiwgMikuY2VudGVyKCk7XHJcbiAgICAgIHRoaXMud2FsbEFuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCA4MCwgMTYsIDE2LCAyKS5jZW50ZXIoKTtcclxuXHJcbiAgICAgIHRoaXMuZWZmZWN0SnVtcCA9IFJlc291cmNlcy5zaGVldEVmZmVjdHMuZ2V0QW5pbWF0aW9uKDAsIDAsIDE2LCAxNiwgMykuc2V0T2Zmc2V0KDgsIDE2KTtcclxuICAgICAgdGhpcy5lZmZlY3RXYWxsanVtcCA9IFJlc291cmNlcy5zaGVldEVmZmVjdHMuZ2V0QW5pbWF0aW9uKDAsIDE2LCAxNiwgMTYsIDMpLnNldE9mZnNldCgwLCA4KTtcclxuICAgICAgdGhpcy5lZmZlY3RMYW5kID0gUmVzb3VyY2VzLnNoZWV0RWZmZWN0cy5nZXRBbmltYXRpb24oMCwgMzIsIDE2LCAxNiwgMykuc2V0T2Zmc2V0KDgsIDE2KTtcclxuXHJcbiAgICAgIHRoaXMuZWZmZWN0RGFzaCA9IFJlc291cmNlcy5zaGVldEVmZmVjdHMuZ2V0QW5pbWF0aW9uKDExMiwgMCwgMTYsIDE2LCAxKS5zZXRPZmZzZXQoOCwgOCk7XHJcbiAgICAgIHRoaXMuZWZmZWN0RGFzaC5mcmFtZVJhdGUgPSA0O1xyXG5cclxuICAgICAgdGhpcy5lZmZlY3REb3VibGVKdW1wID0gUmVzb3VyY2VzLnNoZWV0RWZmZWN0cy5nZXRBbmltYXRpb24oMCwgNDgsIDE2LCAxNiwgNCkuc2V0T2Zmc2V0KDgsIDgpO1xyXG5cclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5pZGxlQW5pbWF0aW9uO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmlucHV0ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFBsYXllcklucHV0Q29tcG9uZW50KCkpO1xyXG4gICAgICB0aGlzLmhlYWx0aCA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBIZWFsdGhDb21wb25lbnQoKSk7XHJcbiAgICAgIHRoaXMuaW50ZXJhY3RvciA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBJbnRlcmFjdG9yQ29tcG9uZW50KCkpO1xyXG5cclxuICAgICAgdGhpcy5oZWFsdGgub25EZWF0aC5saXN0ZW4odGhpcy5vbkRlYXRoLmJpbmQodGhpcykpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IG5ldyBCb3hDb2xsaWRlcihcclxuICAgICAgICAgbmV3IFZlY3RvcjIoMTAsIDEzKSxcclxuICAgICAgICAgbmV3IFZlY3RvcjIoNSwgNSlcclxuICAgICAgKTtcclxuICAgfVxyXG5cclxuICAgX2ZpeGVkVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBjb25zdCBtb3VzZSA9IHRoaXMuZ2FtZS5pbnB1dC5tb3VzZTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnggPSB0aGlzLnNjZW5lLmNhbWVyYS5zY3JlZW5Ub1dvcmxkWChtb3VzZS54KTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSA9IHRoaXMuc2NlbmUuY2FtZXJhLnNjcmVlblRvV29ybGRZKG1vdXNlLnkpO1xyXG5cclxuICAgICAgLy8gdGhpcy5ib2R5LnZlbG9jaXR5LnggPSB0aGlzLnNjZW5lLmNhbWVyYS5zY3JlZW5Ub1dvcmxkWChtb3VzZS5kZWx0YVgpIC8gZGVsdGE7XHJcbiAgICAgIC8vIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5zY2VuZS5jYW1lcmEuc2NyZWVuVG9Xb3JsZFkobW91c2UuZGVsdGFZKSAvIGRlbHRhO1xyXG4gICAgICBcclxuICAgICAgLy8gaWYobW91c2UuaXNCdXR0b25QcmVzc2VkKE1vdXNlLkJ1dHRvbkxlZnQpKXtcclxuICAgICAgLy8gfVxyXG5cclxuICAgICAgdGhpcy5ncm91bmRlZCA9IHRoaXMuYm9keS5jb2xsaWRlZEJvdHRvbTtcclxuICAgICAgdGhpcy53YWxsTGVmdCA9IHRoaXMuYm9keS5jb2xsaWRlZExlZnQ7XHJcbiAgICAgIHRoaXMud2FsbFJpZ2h0ID0gdGhpcy5ib2R5LmNvbGxpZGVkUmlnaHQ7XHJcbiAgICAgIFxyXG4gICAgICBpZih0aGlzLmlucHV0LmRpcmVjdGlvbiA+IDApe1xyXG4gICAgICAgICB0aGlzLmZhY2luZyA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5pbnB1dC5kaXJlY3Rpb24gPCAwKXtcclxuICAgICAgICAgdGhpcy5mYWNpbmcgPSAtMTtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLndhbGxMZWZ0ICYmICF0aGlzLmdyb3VuZGVkKSB0aGlzLmZhY2luZyA9IDE7XHJcbiAgICAgIGlmKHRoaXMud2FsbFJpZ2h0ICYmICF0aGlzLmdyb3VuZGVkKSB0aGlzLmZhY2luZyA9IC0xO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVBbmltYXRpb24oZGVsdGEpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICBpZih0aGlzLmlucHV0Lmp1bXBQcmVzc2VkKXtcclxuICAgICAgICAgdGhpcy5qdW1wSG9wID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmlucHV0LmRhc2hQcmVzc2VkKXtcclxuICAgICAgICAgdGhpcy5kYXNoSG9wID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmlucHV0LmludGVyYWN0UHJlc3NlZCl7XHJcbiAgICAgICAgIHRoaXMuaW50ZXJhY3Rvci5pbnRlcmFjdCgpO1xyXG4gICAgICB9XHJcbiAgICAgIFxyXG4gICAgICAvLyBUT0RPIGRvIHRoaXMgcmlnaHQuXHJcbiAgICAgIGNvbnN0IHNjZW5lV2lkdGggPSB0aGlzLnNjZW5lLnRpbGVtYXAhLnBpeGVsV2lkdGg7XHJcbiAgICAgIGNvbnN0IHNjZW5lSGVpZ2h0ID0gdGhpcy5zY2VuZS50aWxlbWFwIS5waXhlbEhlaWdodDtcclxuXHJcbiAgICAgIGxldCBib3VuZHMgPSBBQUJCLkNyZWF0ZSgwLCAwLCBzY2VuZVdpZHRoLCBzY2VuZUhlaWdodCk7XHJcblxyXG4gICAgICBpZighdGhpcy5ib2R5LmJvdW5kaW5nQm94Lm92ZXJsYXBzKGJvdW5kcykpe1xyXG4gICAgICAgICB0aGlzLmhlYWx0aC5kYW1hZ2UoMTAwKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgc3VwZXIuZml4ZWRVcGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgY29uc29sZS5sb2codGhpcy5ib2R5LnZlbG9jaXR5LngpO1xyXG5cclxuICAgICAgaWYoIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5ib2R5LmNvbGxpZGVkQm90dG9tICYmIHRoaXMuZ3JvdW5kTGVhdmVUaW1lID4gMC44KXtcclxuICAgICAgICAgdGhpcy5zY2VuZS5wYXJ0aWNsZVN5c3RlbS5hZGRQYXJ0aWNsZSh0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55ICsgOCwgdGhpcy5lZmZlY3RMYW5kKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ncm91bmRlZCA9IHRoaXMuYm9keS5jb2xsaWRlZEJvdHRvbTtcclxuICAgICAgdGhpcy53YWxsTGVmdCA9IHRoaXMuYm9keS5jb2xsaWRlZExlZnQ7XHJcbiAgICAgIHRoaXMud2FsbFJpZ2h0ID0gdGhpcy5ib2R5LmNvbGxpZGVkUmlnaHQ7XHJcblxyXG4gICAgICBpZih0aGlzLndhbGxMZWZ0IHx8IHRoaXMud2FsbFJpZ2h0KXtcclxuICAgICAgICAgaWYoIXRoaXMuaGFkV2FsbCAmJiAhdGhpcy5ncm91bmRlZCAmJiB0aGlzLmJvZHkudmVsb2NpdHkueSA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5oYWRXYWxsID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmhhZFdhbGwgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodGhpcy5ncm91bmRlZCkge1xyXG4gICAgICAgICB0aGlzLmdyb3VuZExlYXZlVGltZSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5ncm91bmRMZWF2ZVRpbWUgKz0gZGVsdGE7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvLyBNYWtlIHN1cmUgd2Ugc3RpY2sgdG8gdGhlIHdhbGxcclxuICAgICAgaWYoIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy53YWxsUmlnaHQpe1xyXG4gICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IDYwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMud2FsbExlZnQpe1xyXG4gICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IC02MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIXRoaXMuaW5wdXQuanVtcERvd24pe1xyXG4gICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gSnVtcGluZ1xyXG4gICAgICB0aGlzLnVwZGF0ZUp1bXAoZGVsdGEpO1xyXG5cclxuICAgICAgLy8gTW92ZW1lbnRcclxuICAgICAgdGhpcy51cGRhdGVNb3ZlKGRlbHRhKTtcclxuXHJcbiAgICAgIC8vIERhc2hpbmdcclxuICAgICAgdGhpcy51cGRhdGVEYXNoKGRlbHRhKTtcclxuICAgICAgXHJcblxyXG4gICAgICAvLyBHcmF2aXR5XHJcbiAgICAgIHRoaXMudXBkYXRlR3Jhdml0eShkZWx0YSk7XHJcblxyXG4gICAgICBpZih0aGlzLmJvZHkudmVsb2NpdHkueSA+IHRoaXMubWF4RmFsbFNwZWVkKXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLm1heEZhbGxTcGVlZDtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gQW5pbWF0aW9uXHJcbiAgICAgIHRoaXMudXBkYXRlQW5pbWF0aW9uKGRlbHRhKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlTW92ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgLy8gVXBkYXRlIGZhY2luZ1xyXG4gICAgICBpZih0aGlzLmlucHV0LmRpcmVjdGlvbiA+IDApe1xyXG4gICAgICAgICB0aGlzLmZhY2luZyA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5pbnB1dC5kaXJlY3Rpb24gPCAwKXtcclxuICAgICAgICAgdGhpcy5mYWNpbmcgPSAtMTtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLndhbGxMZWZ0ICYmICF0aGlzLmdyb3VuZGVkKSB0aGlzLmZhY2luZyA9IDE7XHJcbiAgICAgIGlmKHRoaXMud2FsbFJpZ2h0ICYmICF0aGlzLmdyb3VuZGVkKSB0aGlzLmZhY2luZyA9IC0xO1xyXG5cclxuICAgICAgaWYoIXRoaXMuY2FuTW92ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYodGhpcy5pbnB1dC5kaXJlY3Rpb24gIT09IDApe1xyXG4gICAgICAgICBsZXQgZGlyID0gTWF0aC5zaWduKHRoaXMuaW5wdXQuZGlyZWN0aW9uKTtcclxuICAgICAgICAgbGV0IG1heFNwZWVkID0gdGhpcy5tb3ZlU3BlZWQgKiBNYXRoLmFicyh0aGlzLmlucHV0LmRpcmVjdGlvbik7XHJcbiAgICAgICAgIGxldCBhY2NlbGVyYXRpb24gPSB0aGlzLmdyb3VuZEFjY2VsZXJhdGlvbiAqIGRlbHRhO1xyXG5cclxuICAgICAgICAgdGhpcy5hY2NlbGVyYXRlKFxyXG4gICAgICAgICAgICBkaXIsIFxyXG4gICAgICAgICAgICBtYXhTcGVlZCxcclxuICAgICAgICAgICAgYWNjZWxlcmF0aW9uKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLnN0b3AodGhpcy5ncm91bmRBY2NlbGVyYXRpb24gKiBkZWx0YSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgdXBkYXRlRGFzaChkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYodGhpcy5ncm91bmRlZCl7XHJcbiAgICAgICAgIHRoaXMuY2FuRGFzaCA9IHRydWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMuZGFzaGluZyl7XHJcbiAgICAgICAgIHRoaXMuZGFzaFRpbWVyIC09IGRlbHRhO1xyXG4gICAgICAgICBcclxuICAgICAgICAgXHJcbiAgICAgICAgIGlmKHRoaXMuZGFzaFRpbWVyIDwgMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSB0aGlzLmRhc2hTYXZlZFNwZWVkO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hY2NlbGVyYXRlKHRoaXMuZmFjaW5nLCB0aGlzLmRhc2hTYXZlZE1heFNwZWVkLCB0aGlzLmRhc2hTYXZlZEFkZGl0aW9uKTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuYm9keS52ZWxvY2l0eS54ICogdGhpcy5mYWNpbmcgPCB0aGlzLmRhc2hTYXZlZE1heFNwZWVkKXtcclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuc2NlbmUucGFydGljbGVTeXN0ZW0uYWRkUGFydGljbGUodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSwgdGhpcy5lZmZlY3REYXNoLCB0aGlzLmZhY2luZyk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmRhc2hUaW1lb3V0IC09IGRlbHRhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLmRhc2hIb3AgJiYgdGhpcy5kYXNoVGltZW91dCA8IDAgJiYgdGhpcy5jYW5EYXNoICYmICF0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgdGhpcy5kYXNoaW5nID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy5jYW5EYXNoID0gZmFsc2U7XHJcbiAgICAgICAgIHRoaXMuZGFzaFNhdmVkU3BlZWQgPSB0aGlzLmJvZHkudmVsb2NpdHkueDtcclxuICAgICAgICAgdGhpcy5kYXNoVGltZXIgPSB0aGlzLmRhc2hUaW1lO1xyXG4gICAgICAgICB0aGlzLmRhc2hUaW1lb3V0ID0gMC4yO1xyXG4gICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gdGhpcy5mYWNpbmcgKiB0aGlzLmRhc2hTcGVlZDtcclxuXHJcbiAgICAgICAgIHRoaXMuZGFzaEFuaW1hdGlvblRpbWVyID0gMDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhc2hIb3AgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuZGFzaEFuaW1hdGlvblRpbWVyIC09IGRlbHRhO1xyXG5cclxuICAgICAgaWYodGhpcy5kYXNoaW5nICYmIHRoaXMuZGFzaEFuaW1hdGlvblRpbWVyIDw9IDApe1xyXG4gICAgICAgICB0aGlzLmVmZmVjdERhc2guZnJhbWVSYXRlID0gMSAvICh0aGlzLmRhc2hUaW1lciAvIDMgKyAwLjMpO1xyXG4gICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnksIHRoaXMuZWZmZWN0RGFzaCwgdGhpcy5mYWNpbmcpO1xyXG4gICAgICAgICB0aGlzLmRhc2hBbmltYXRpb25UaW1lciArPSAwLjAzO1xyXG4gICAgICB9XHJcblxyXG4gICB9XHJcblxyXG4gICB1cGRhdGVKdW1wKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLndhbGxKdW1wVGltZXIgLT0gZGVsdGE7XHJcblxyXG4gICAgICBpZih0aGlzLmdyb3VuZGVkKSB0aGlzLmNhbkRvdWJsZUp1bXAgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmKHRoaXMuY2FuSnVtcCl7XHJcbiAgICAgICAgIGlmKHRoaXMuanVtcEhvcCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5qdW1wU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5ncm91bmRlZCl7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2F5b3RlIGp1bXAhXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHJlYWxseSBoYWNreSBidXQgd2hhdGV2ZXJcclxuICAgICAgICAgICAgdGhpcy5ncm91bmRMZWF2ZVRpbWUgPSB0aGlzLmNheW90ZVRpbWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkgKyA4LCB0aGlzLmVmZmVjdEp1bXApO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuanVtcEhvcCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2UgaWYodGhpcy5jYW5Eb3VibGVKdW1wKXtcclxuICAgICAgICAgaWYodGhpcy5qdW1wSG9wKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jYW5Eb3VibGVKdW1wID0gZmFsc2U7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLngsIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkgKyA2LCB0aGlzLmVmZmVjdERvdWJsZUp1bXApO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuanVtcEhvcCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIGlmKHRoaXMud2FsbExlZnQgJiYgdGhpcy5qdW1wSG9wKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBTcGVlZDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2FsbEp1bXBUaW1lciA9IDAuMDU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gZGFzaCBhZnRlciB5b3VyIHdhbGxqdW1wIDopXHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnggLSA1LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55LCB0aGlzLmVmZmVjdFdhbGxqdW1wLCAxKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZih0aGlzLndhbGxSaWdodCAmJiB0aGlzLmp1bXBIb3Ape1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IC10aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBTcGVlZDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2FsbEp1bXBUaW1lciA9IDAuMDU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gZGFzaCBhZnRlciB5b3VyIHdhbGxqdW1wIDopXHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB0aGlzLnNjZW5lLnBhcnRpY2xlU3lzdGVtLmFkZFBhcnRpY2xlKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnggKyA1LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55LCB0aGlzLmVmZmVjdFdhbGxqdW1wLCAtMSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gSnVtcCBjYW5jZWxpbmdcclxuICAgICAgaWYodGhpcy5ib2R5LnZlbG9jaXR5LnkgPiAwKXtcclxuICAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5qdW1waW5nICYmICF0aGlzLmlucHV0Lmp1bXBEb3duKXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmJvZHkudmVsb2NpdHkueSAqIDAuMjU7XHJcbiAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUFuaW1hdGlvbihkZWx0YTogbnVtYmVyKXtcclxuICAgICAgLy8gQW5pbWF0aW9uIHN0dWZmXHJcbiAgICAgIGlmKHRoaXMuYm9keS52ZWxvY2l0eS54ICE9PSAwKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy53YWxrQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuaWRsZUFuaW1hdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPCAwKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5qdW1wQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMuYm9keS52ZWxvY2l0eS55ID49IDApe1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLmZhbGxBbmltYXRpb247XHJcbiAgICAgIH1cclxuICAgICAgaWYoKHRoaXMud2FsbExlZnQgfHwgdGhpcy53YWxsUmlnaHQpICYmICF0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy53YWxsQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuZGFzaGluZyl7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuZGFzaEFuaW1hdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uLnVwZGF0ZShkZWx0YSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUdyYXZpdHkoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGlmKCF0aGlzLnVzZUdyYXZpdHkpIHJldHVybjtcclxuXHJcbiAgICAgIGlmKHRoaXMuYm9keS52ZWxvY2l0eS55IDwgMCl7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eSAqIHRoaXMuZ3Jhdml0eVVwRnJhY3Rpb24gKiBkZWx0YTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICBpZih0aGlzLmhhc1dhbGwpe1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSArPSB0aGlzLmdyYXZpdHkgKiB0aGlzLmdyYXZpdHlXYWxsRnJhY3Rpb24gKiBkZWx0YTtcclxuICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eSAqIGRlbHRhO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgYWNjZWxlcmF0ZShkaXI6IG51bWJlciwgbWF4U3BlZWQ6IG51bWJlciwgYWNjZWxlcmF0aW9uOiBudW1iZXIpe1xyXG4gICAgICBsZXQgYWNjID0gYWNjZWxlcmF0aW9uO1xyXG4gICAgICBsZXQgdmVsID0gdGhpcy5ib2R5LnZlbG9jaXR5LnggKiBkaXI7XHJcblxyXG4gICAgICBpZih2ZWwgPj0gbWF4U3BlZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGlmKHZlbCArIGFjYyA+IG1heFNwZWVkKXtcclxuICAgICAgICAgYWNjID0gbWF4U3BlZWQgLSB2ZWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ICs9IGFjYyAqIGRpcjtcclxuICAgICAgXHJcbiAgIH1cclxuICAgc3RvcChhY2NlbGVyYXRpb246IG51bWJlcil7XHJcbiAgICAgIGxldCBkaXIgPSBNYXRoLnNpZ24odGhpcy5ib2R5LnZlbG9jaXR5LngpO1xyXG4gICAgICBsZXQgdmVsID0gTWF0aC5hYnModGhpcy5ib2R5LnZlbG9jaXR5LngpO1xyXG5cclxuICAgICAgbGV0IHJlbSA9IGFjY2VsZXJhdGlvbjtcclxuXHJcbiAgICAgIGlmKHZlbCAtIHJlbSA8IDApIHJlbSA9IHZlbDtcclxuXHJcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54IC09IHJlbSAqIGRpcjtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBzdXBlci5kcmF3KGdyYXBoaWNzKTtcclxuXHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGUodGhpcy5jdXJyZW50QW5pbWF0aW9uLmZyYW1lLCBcclxuICAgICAgICAgdGhpcy50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueSxcclxuICAgICAgICAgdGhpcy5mYWNpbmcsIDEsIFxyXG4gICAgICAgICAwKTtcclxuICAgfVxyXG5cclxuICAgb25EZWF0aCgpe1xyXG4gICAgICB0aGlzLnNjZW5lLnJlbW92ZUdhbWVPYmplY3QodGhpcyk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU3Bhd25HYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uYXBwbHkoYWFiYi54LCBhYWJiLnkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBIZWFsdGhDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSGVhbHRoQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL0JveENvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3Bpa2VzR2FtZU9iamVjdCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCLCBzaHJpbms6IGJvb2xlYW4pe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgaWYoc2hyaW5rKXtcclxuICAgICAgICAgbGV0IHNraW4gPSBhYWJiLmhlaWdodCAtIDM7XHJcblxyXG4gICAgICAgICBpZihza2luID4gMCl7XHJcbiAgICAgICAgICAgIGFhYmIudG9wICs9IHNraW47XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmJvZHkua2luZW1hdGljID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG5cclxuICAgICAgdGhpcy5ib2R5Lm9uQ29sbGlzaW9uLmxpc3Rlbih0aGlzLm9uQ29sbGlzaW9uLmJpbmQodGhpcykpO1xyXG4gICAgICBcclxuICAgfVxyXG5cclxuICAgb25Db2xsaXNpb24ob3RoZXI6IFJpZ2lkYm9keSl7XHJcbiAgICAgIGxldCBjb21wID0gb3RoZXIuZ2FtZU9iamVjdC5maW5kQ29tcG9uZW50KGNvbXBvbmVudCA9PiBjb21wb25lbnQgaW5zdGFuY2VvZiBIZWFsdGhDb21wb25lbnQpIGFzIEhlYWx0aENvbXBvbmVudHx1bmRlZmluZWQ7XHJcblxyXG4gICAgICBpZihjb21wID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRGFtYWdpbmcgc29tZXRoaW5nIVwiKTtcclxuICAgICAgXHJcbiAgICAgIGNvbXAuZGFtYWdlKDEwMCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICBzaGVldE9iamVjdHM6IFNwcml0ZVNoZWV0LmZyb21IVE1MKFwiT2JqZWN0c1wiKSxcclxuICAgc2hlZXRFZmZlY3RzOiBTcHJpdGVTaGVldC5mcm9tSFRNTChcIkVmZmVjdHNcIiksXHJcbiAgIHNoZWV0UGxheWVyOiBTcHJpdGVTaGVldC5mcm9tSFRNTChcIlBsYXllclwiKVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBQUJCe1xyXG5cclxuICAgbGVmdDogbnVtYmVyO1xyXG4gICB0b3A6IG51bWJlcjtcclxuICAgYm90dG9tOiBudW1iZXI7XHJcbiAgIHJpZ2h0OiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihsZWZ0OiBudW1iZXIgPSAwLCB0b3A6IG51bWJlciA9IDAsIHJpZ2h0OiBudW1iZXIgPSAwLCBib3R0b206IG51bWJlciA9IDApIHsgXHJcbiAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICAgIHRoaXMudG9wID0gdG9wO1xyXG4gICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xyXG4gICB9XHJcblxyXG4gICBnZXQgeCgpIHsgcmV0dXJuIHRoaXMubGVmdDsgfVxyXG4gICBnZXQgeSgpIHsgcmV0dXJuIHRoaXMudG9wOyB9XHJcblxyXG4gICBnZXQgY2VudGVyWCgpIHsgcmV0dXJuIHRoaXMueCArIHRoaXMud2lkdGggLyAyOyB9XHJcbiAgIGdldCBjZW50ZXJZKCkgeyByZXR1cm4gdGhpcy55ICsgdGhpcy5oZWlnaHQgLyAyOyB9XHJcblxyXG4gICBnZXQgd2lkdGgoKSB7IHJldHVybiB0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0OyB9XHJcbiAgIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLmJvdHRvbSAtIHRoaXMudG9wOyB9XHJcblxyXG4gICBvdmVybGFwcyhvdGhlcjogQUFCQil7XHJcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXBzWChvdGhlcikgJiYgdGhpcy5vdmVybGFwc1kob3RoZXIpO1xyXG4gICB9XHJcbiAgIG92ZXJsYXBzWChvdGhlcjogQUFCQil7XHJcbiAgICAgIGlmKHRoaXMubGVmdCA+PSBvdGhlci5yaWdodCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZih0aGlzLnJpZ2h0IDw9IG90aGVyLmxlZnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcbiAgIG92ZXJsYXBzWShvdGhlcjogQUFCQil7XHJcbiAgICAgIGlmKHRoaXMudG9wID49IG90aGVyLmJvdHRvbSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZih0aGlzLmJvdHRvbSA8PSBvdGhlci50b3ApIHJldHVybiBmYWxzZTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBtaW5PdmVybGFwWChvdGhlcjogQUFCQil7XHJcbiAgICAgIGxldCBtb3Rpb25MZWZ0ID0gb3RoZXIucmlnaHQgLSB0aGlzLmxlZnQ7XHJcbiAgICAgIGxldCBtb3Rpb25SaWdodCA9IHRoaXMucmlnaHQgLSBvdGhlci5sZWZ0O1xyXG5cclxuICAgICAgaWYobW90aW9uTGVmdCA+IG1vdGlvblJpZ2h0KSByZXR1cm4gLW1vdGlvblJpZ2h0O1xyXG4gICAgICByZXR1cm4gbW90aW9uTGVmdDtcclxuICAgfVxyXG4gICBtaW5PdmVybGFwWShvdGhlcjogQUFCQil7XHJcbiAgICAgIGxldCBtb3Rpb25VcCA9IG90aGVyLmJvdHRvbSAtIHRoaXMudG9wO1xyXG4gICAgICBsZXQgbW90aW9uRG93biA9IHRoaXMuYm90dG9tIC0gb3RoZXIudG9wO1xyXG5cclxuICAgICAgaWYobW90aW9uVXAgPiBtb3Rpb25Eb3duKSByZXR1cm4gLW1vdGlvbkRvd247XHJcbiAgICAgIHJldHVybiBtb3Rpb25VcDtcclxuICAgfVxyXG4gICBcclxuXHJcbiAgIG1pbk92ZXJsYXBYV2l0aEJpYXMob3RoZXI6IEFBQkIsIGJpYXM6IG51bWJlcil7XHJcbiAgICAgIGlmKGJpYXMgPCAwKSByZXR1cm4gb3RoZXIucmlnaHQgLSB0aGlzLmxlZnQ7XHJcbiAgICAgIHJldHVybiAtKHRoaXMucmlnaHQgLSBvdGhlci5sZWZ0KTtcclxuXHJcbiAgIH1cclxuICAgbWluT3ZlcmxhcFlXaXRoQmlhcyhvdGhlcjogQUFCQiwgYmlhczogbnVtYmVyKXtcclxuICAgICAgaWYoYmlhcyA8IDApIHJldHVybiBvdGhlci5ib3R0b20gLSB0aGlzLnRvcDtcclxuICAgICAgcmV0dXJuIC0odGhpcy5ib3R0b20gLSBvdGhlci50b3ApO1xyXG4gICB9XHJcblxyXG4gICBjb3B5KG90aGVyOiBBQUJCKXtcclxuICAgICAgdGhpcy5sZWZ0ID0gb3RoZXIubGVmdDtcclxuICAgICAgdGhpcy5yaWdodCA9IG90aGVyLnJpZ2h0O1xyXG4gICAgICB0aGlzLmJvdHRvbSA9IG90aGVyLmJvdHRvbTtcclxuICAgICAgdGhpcy50b3AgPSBvdGhlci50b3A7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgc2V0KGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyKSB7IFxyXG4gICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICB0aGlzLnRvcCA9IHRvcDtcclxuICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBjbG9uZSgpe1xyXG4gICAgICByZXR1cm4gbmV3IEFBQkIodGhpcy5sZWZ0LCB0aGlzLnRvcCwgdGhpcy5yaWdodCwgdGhpcy5ib3R0b20pO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgQ3JlYXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBuZXcgQUFCQih4LCB5LCB4ICsgdywgeSArIGgpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBDdXJ2ZSB9IGZyb20gXCJ1dGlsL0N1cnZlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMntcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApe1xyXG4gICAgICB0aGlzLnggPSB4O1xyXG4gICAgICB0aGlzLnkgPSB5O1xyXG4gICB9XHJcblxyXG4gICBhZGQob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggKz0gb3RoZXIueDtcclxuICAgICAgdGhpcy55ICs9IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBzdWIob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggLT0gb3RoZXIueDtcclxuICAgICAgdGhpcy55IC09IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBtdWwob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggKj0gb3RoZXIueDtcclxuICAgICAgdGhpcy55ICo9IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBkaXYob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggLz0gb3RoZXIueDtcclxuICAgICAgdGhpcy55IC89IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBzZXQob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggPSBvdGhlci54O1xyXG4gICAgICB0aGlzLnkgPSBvdGhlci55O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgc2V0WmVybygpe1xyXG4gICAgICB0aGlzLnggPSAwO1xyXG4gICAgICB0aGlzLnkgPSAwO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgYXBwbHkoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLnggPSB4O1xyXG4gICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgbmVnYXRlKCl7XHJcbiAgICAgIHRoaXMueCA9IC10aGlzLng7XHJcbiAgICAgIHRoaXMueSA9IC10aGlzLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgbm9ybWFsaXplKCl7XHJcbiAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmKGxlbmd0aCA+IDApe1xyXG4gICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgZ2V0IG5vcm1hbGl6ZWQoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5ub3JtYWxpemUoKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IHNxckxlbmd0aCgpe1xyXG4gICAgICByZXR1cm4gVmVjdG9yMi5kb3QodGhpcywgdGhpcyk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBsZW5ndGgoKXtcclxuICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnNxckxlbmd0aCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBhbmdsZSgpe1xyXG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XHJcbiAgIH1cclxuXHJcbiAgIGRpc3RhbmNlVG8ob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICByZXR1cm4gVmVjdG9yMi5kaXN0YW5jZSh0aGlzLCBvdGhlcik7XHJcbiAgIH1cclxuICAgZGlyZWN0aW9uVG8ob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICByZXR1cm4gVmVjdG9yMi5kaXJlY3Rpb24odGhpcywgb3RoZXIpO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgZGlyZWN0aW9uKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpe1xyXG4gICAgICByZXR1cm4gYi5jbG9uZSgpLnN1YihhKTtcclxuICAgfVxyXG4gICBcclxuICAgc3RhdGljIGRpc3RhbmNlKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpe1xyXG4gICAgICBsZXQgZGlzdFggPSBhLnggLSBiLng7XHJcbiAgICAgIGxldCBkaXN0WSA9IGEueSAtIGIueTtcclxuXHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoZGlzdFggKiBkaXN0WCArIGRpc3RZICogZGlzdFkpO1xyXG4gICB9XHJcblxyXG4gICBsZXJwVG8ob3RoZXI6IFZlY3RvcjIsIGY6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBWZWN0b3IyLmxlcnBPdXQodGhpcywgb3RoZXIsIHRoaXMsIGYpO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgbGVycChhOiBWZWN0b3IyLCBiOiBWZWN0b3IyLCBmOiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5sZXJwT3V0KGEsIGIsIG5ldyBWZWN0b3IyKCksIGYpO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgbGVycE91dChhOiBWZWN0b3IyLCBiOiBWZWN0b3IyLCBvdXQ6IFZlY3RvcjIsIGY6IG51bWJlcil7XHJcbiAgICAgIG91dC54ID0gQ3VydmUubGVycChhLngsIGIueCwgZik7XHJcbiAgICAgIG91dC55ID0gQ3VydmUubGVycChhLnksIGIueSwgZik7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gb3V0O1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgZG90KGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpe1xyXG4gICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55O1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgYW5nbGVkKGFuZ2xlOiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gbmV3IFZlY3RvcjIoTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSkpO1xyXG4gICB9XHJcblxyXG4gICBjbG9uZSgpe1xyXG4gICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gXCIuL0NvbGxpZGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm94Q29sbGlkZXIgZXh0ZW5kcyBDb2xsaWRlcntcclxuICAgb2Zmc2V0OiBWZWN0b3IyO1xyXG4gICBzaXplOiBWZWN0b3IyO1xyXG5cclxuICAgY29uc3RydWN0b3Ioc2l6ZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCksIG9mZnNldDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCkpe1xyXG4gICAgICBzdXBlcigpO1xyXG4gICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcclxuICAgfVxyXG5cclxuICAgZ2V0Qm91bmRzKHBvc2l0aW9uOiBWZWN0b3IyLCBvdXQ6IEFBQkIpXHJcbiAgIHsgIFxyXG4gICAgICByZXR1cm4gb3V0LnNldChcclxuICAgICAgICAgcG9zaXRpb24ueCAtIHRoaXMub2Zmc2V0LngsIFxyXG4gICAgICAgICBwb3NpdGlvbi55IC0gdGhpcy5vZmZzZXQueSxcclxuICAgICAgICAgcG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IC0gdGhpcy5vZmZzZXQueCxcclxuICAgICAgICAgcG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IC0gdGhpcy5vZmZzZXQueSk7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBmcm9tQUFCQihhYWJiOiBBQUJCKXtcclxuICAgICAgcmV0dXJuIG5ldyBCb3hDb2xsaWRlcihuZXcgVmVjdG9yMihhYWJiLndpZHRoLCBhYWJiLmhlaWdodCkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbGxpZGVye1xyXG4gICBhYnN0cmFjdCBnZXRCb3VuZHMocG9zaXRpb246IFZlY3RvcjIsIG91dDogQUFCQik6IEFBQkI7XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCIuL0JveENvbGxpZGVyXCI7XHJcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSBcIi4vQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVGlsZUNvbGxpZGVyIH0gZnJvbSBcIi4vVGlsZUNvbGxpZGVyXCI7XHJcblxyXG4vLyBUT0RPIHByZXZlbnQgbWVtb3J5IGFsbG9jYXRpb24gaGVyZS5cclxuLy8gU2hvdWxkIG1heWJlIGJlIGEgY29sbGlzaW9uIGNsYXNzLCB0aGF0IGhhcyBcclxuLy8gYWxsIHRoaXMgbWVtb3J5IHByZWFsbG9jYXRlZC5cclxuXHJcbi8vIEl0IGJlIGZpbmUgZm9yIG5vdyB0aG9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bnN0dWNrKHNlbGY6IENvbGxpZGVyLCBvdGhlcjogQ29sbGlkZXIsIHJlbGF0aXZlUG9zaXRpb246IFZlY3RvcjIsIHJlbGF0aXZlVmVsb2NpdHk6IFZlY3RvcjIpOiBWZWN0b3IyfHVuZGVmaW5lZHtcclxuICAgaWYoc2VsZiBpbnN0YW5jZW9mIEJveENvbGxpZGVyKXtcclxuICAgICAgaWYob3RoZXIgaW5zdGFuY2VvZiBCb3hDb2xsaWRlcil7XHJcbiAgICAgICAgIHJldHVybiB1bnN0dWNrQm94Qm94KHNlbGYsIG90aGVyLCByZWxhdGl2ZVBvc2l0aW9uLCByZWxhdGl2ZVZlbG9jaXR5KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKG90aGVyIGluc3RhbmNlb2YgVGlsZUNvbGxpZGVyKXtcclxuICAgICAgICAgcmV0dXJuIHVuc3R1Y2tCb3hUaWxlKHNlbGYsIG90aGVyLCByZWxhdGl2ZVBvc2l0aW9uLCByZWxhdGl2ZVZlbG9jaXR5KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNvbGxpc2lvbiBmb3VuZCBmb3IgJHtzZWxmLmNvbnN0cnVjdG9yLm5hbWV9IGFuZCAke290aGVyLmNvbnN0cnVjdG9yLm5hbWV9YCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBlbHNlIGlmKHNlbGYgaW5zdGFuY2VvZiBUaWxlQ29sbGlkZXIpe1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNvbGxpc2lvbiBmb3VuZCBmb3IgJHtzZWxmLmNvbnN0cnVjdG9yLm5hbWV9IGFuZCAke290aGVyLmNvbnN0cnVjdG9yLm5hbWV9YCk7XHJcbiAgICAgIC8vIGlmKG90aGVyIGluc3RhbmNlb2YgQm94Q29sbGlkZXIpe1xyXG4gICAgICAvLyAgICByZXR1cm4gdW5zdHVja0JveFRpbGUob3RoZXJQb3NpdGlvbiwgb3RoZXIsIHBvc2l0aW9uLCBzZWxmLCB1bnN0dWNrVmVjdG9yKT8ubmVnYXRlKCk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gZWxzZXtcclxuICAgICAgLy8gfVxyXG4gICB9XHJcbiAgIGVsc2V7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY29sbGlzaW9uIGZvdW5kIGZvciAke3NlbGYuY29uc3RydWN0b3IubmFtZX0gYW5kICR7b3RoZXIuY29uc3RydWN0b3IubmFtZX1gKTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5zdHVja0JveFRpbGUoc2VsZjogQm94Q29sbGlkZXIsIG90aGVyOiBUaWxlQ29sbGlkZXIsIHJlbGF0aXZlUG9zaXRpb246IFZlY3RvcjIsIHJlbGF0aXZlVmVsb2NpdHk6IFZlY3RvcjIpOiBWZWN0b3IyfHVuZGVmaW5lZHtcclxuICAgbGV0IHNlbGZCb3VuZHMgPSBzZWxmLmdldEJvdW5kcyhuZXcgVmVjdG9yMigpLCBuZXcgQUFCQigpKTtcclxuICAgbGV0IG90aGVyQm91bmRzID0gb3RoZXIuZ2V0Qm91bmRzKHJlbGF0aXZlUG9zaXRpb24sIG5ldyBBQUJCKCkpO1xyXG5cclxuICAgbGV0IHhPdmVybGFwID0gMDtcclxuICAgbGV0IHlPdmVybGFwID0gMDtcclxuXHJcbiAgIGxldCB4Q29sbGlkZWQgPSBmYWxzZTtcclxuICAgbGV0IHlDb2xsaWRlZCA9IGZhbHNlO1xyXG5cclxuICAgaWYob3RoZXIubGVmdCAmJiByZWxhdGl2ZVZlbG9jaXR5LnggPiAwKXtcclxuICAgICAgeE92ZXJsYXAgPSAtKHNlbGZCb3VuZHMucmlnaHQgLSBvdGhlckJvdW5kcy5sZWZ0KTtcclxuICAgICAgeENvbGxpZGVkID0gdHJ1ZTtcclxuICAgfWVsc2UgaWYob3RoZXIucmlnaHQgJiYgcmVsYXRpdmVWZWxvY2l0eS54IDw9IDApe1xyXG4gICAgICB4T3ZlcmxhcCA9IC0oc2VsZkJvdW5kcy5sZWZ0IC0gb3RoZXJCb3VuZHMucmlnaHQpO1xyXG4gICAgICB4Q29sbGlkZWQgPSB0cnVlO1xyXG4gICB9XHJcbiAgIFxyXG4gICBpZihvdGhlci50b3AgJiYgcmVsYXRpdmVWZWxvY2l0eS55ID4gMCl7XHJcbiAgICAgIHlPdmVybGFwID0gLShzZWxmQm91bmRzLmJvdHRvbSAtIG90aGVyQm91bmRzLnRvcCk7XHJcbiAgICAgIHlDb2xsaWRlZCA9IHRydWU7XHJcbiAgIH1lbHNlIGlmKG90aGVyLmJvdHRvbSAmJiByZWxhdGl2ZVZlbG9jaXR5LnkgPD0gMCl7XHJcbiAgICAgIHlPdmVybGFwID0gLShzZWxmQm91bmRzLnRvcCAtIG90aGVyQm91bmRzLmJvdHRvbSk7XHJcbiAgICAgIHlDb2xsaWRlZCA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIC8vIElmIGl0IF9jYW5fIGRvIGJvdGggYXhpcywgZG8gb25seSBfb25lX1xyXG4gICBpZih4Q29sbGlkZWQgJiYgeUNvbGxpZGVkKXtcclxuICAgICAgaWYoTWF0aC5hYnMoeE92ZXJsYXApID4gTWF0aC5hYnMoeU92ZXJsYXApKXtcclxuICAgICAgICAgeE92ZXJsYXAgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHlPdmVybGFwID0gMDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gbmV3IFZlY3RvcjIoeE92ZXJsYXAsIHlPdmVybGFwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuc3R1Y2tCb3hCb3goc2VsZjogQm94Q29sbGlkZXIsIG90aGVyOiBCb3hDb2xsaWRlciwgcmVsYXRpdmVQb3NpdGlvbjogVmVjdG9yMiwgcmVsYXRpdmVWZWxvY2l0eTogVmVjdG9yMik6IFZlY3RvcjJ8dW5kZWZpbmVke1xyXG4gICBsZXQgc2VsZkJvdW5kcyA9IHNlbGYuZ2V0Qm91bmRzKG5ldyBWZWN0b3IyKCksIG5ldyBBQUJCKCkpO1xyXG4gICBsZXQgb3RoZXJCb3VuZHMgPSBvdGhlci5nZXRCb3VuZHMocmVsYXRpdmVQb3NpdGlvbiwgbmV3IEFBQkIoKSk7XHJcblxyXG4gICBsZXQgeE92ZXJsYXAgPSBzZWxmQm91bmRzLm1pbk92ZXJsYXBYV2l0aEJpYXMob3RoZXJCb3VuZHMsIHJlbGF0aXZlVmVsb2NpdHkueCk7XHJcbiAgIGxldCB5T3ZlcmxhcCA9IHNlbGZCb3VuZHMubWluT3ZlcmxhcFlXaXRoQmlhcyhvdGhlckJvdW5kcywgcmVsYXRpdmVWZWxvY2l0eS55KTtcclxuXHJcbiAgIGlmKE1hdGguYWJzKHhPdmVybGFwKSA8IE1hdGguYWJzKHlPdmVybGFwKSl7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yMih4T3ZlcmxhcCwgMCk7XHJcbiAgIH1cclxuICAgZWxzZXtcclxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDAsIHlPdmVybGFwKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tIFwiLi9Db2xsaWRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVDb2xsaWRlciBleHRlbmRzIENvbGxpZGVye1xyXG4gICBzaXplOiBWZWN0b3IyO1xyXG5cclxuICAgdG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGxlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgYm90dG9tOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihzaXplOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKSl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgIH1cclxuXHJcbiAgIGdldEJvdW5kcyhwb3NpdGlvbjogVmVjdG9yMiwgb3V0OiBBQUJCKVxyXG4gICB7ICBcclxuICAgICAgcmV0dXJuIG91dC5zZXQoXHJcbiAgICAgICAgIHBvc2l0aW9uLngsIFxyXG4gICAgICAgICBwb3NpdGlvbi55LFxyXG4gICAgICAgICBwb3NpdGlvbi54ICsgdGhpcy5zaXplLngsXHJcbiAgICAgICAgIHBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnR7XHJcbiAgIGdhbWUhOiBHYW1lO1xyXG4gICBnYW1lT2JqZWN0ITogR2FtZU9iamVjdDtcclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgfVxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICB9XHJcblxyXG4gICBnZXQgc2NlbmUoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2FtZU9iamVjdC5zY2VuZTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi9TY2VuZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG4gICBjb21wb25lbnRzOiBDb21wb25lbnRbXTtcclxuICAgc2NlbmUhOiBTY2VuZTtcclxuXHJcbiAgIGdhbWUhOiBHYW1lO1xyXG4gICBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBcclxuICAgYWx3YXlzVXBkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICAgfVxyXG4gICBcclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgaWYodGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmouaW5pdChnYW1lKSk7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2gob2JqID0+IG9iai5kZXN0cm95KCkpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmoudXBkYXRlKGRlbHRhKSk7XHJcbiAgIH1cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmouZml4ZWRVcGRhdGUoZGVsdGEpKTtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChvYmogPT4gb2JqLmRyYXcoZ3JhcGhpY3MpKTtcclxuICAgfVxyXG5cclxuICAgYWRkQ29tcG9uZW50PFQgZXh0ZW5kcyBDb21wb25lbnQ+KGNvbXBvbmVudDogVCl7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgIGNvbXBvbmVudC5nYW1lT2JqZWN0ID0gdGhpcztcclxuICAgICAgXHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm4gY29tcG9uZW50O1xyXG5cclxuICAgICAgY29tcG9uZW50LmluaXQodGhpcy5nYW1lKTtcclxuXHJcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgIH1cclxuXHJcbiAgIHJlbW92ZUNvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCl7XHJcbiAgICAgIGxldCBpZHggPSB0aGlzLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpO1xyXG5cclxuICAgICAgaWYoaWR4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICBcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XHJcbiAgIH1cclxuXHJcbiAgIGZpbmRDb21wb25lbnQocHJlZGljYXRlOiAoY29tcG9uZW50OiBDb21wb25lbnQpID0+IGJvb2xlYW4pe1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmZpbmQocHJlZGljYXRlKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBQaHlzaWNzIH0gZnJvbSBcImVuZ2luZS9QaHlzaWNzXCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCJncmFwaGljcy9DYW1lcmFcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgUGFydGljbGVTeXN0ZW0gfSBmcm9tIFwiZ3JhcGhpY3MvUGFydGljbGVTeXN0ZW1cIjtcclxuaW1wb3J0IHsgVGlsZU1hcCB9IGZyb20gXCJ0aWxlbWFwL1RpbGVNYXBcIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZXtcclxuICAgY2FtZXJhOiBDYW1lcmE7XHJcbiAgIGdhbWVPYmplY3RzOiBHYW1lT2JqZWN0W107XHJcbiAgIGdhbWUhOiBHYW1lO1xyXG4gICB0aWxlbWFwPzogVGlsZU1hcDtcclxuXHJcbiAgIHBoeXNpY3M6IFBoeXNpY3M7XHJcbiAgIHBhcnRpY2xlU3lzdGVtOiBQYXJ0aWNsZVN5c3RlbTtcclxuXHJcbiAgIC8vIFRoaXMgZ2V0cyB1c2VkIGZvciB0cmFuc2l0aW9ucyA6KVxyXG4gICBwYXVzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEoKTtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xyXG4gICAgICB0aGlzLnBoeXNpY3MgPSBuZXcgUGh5c2ljcygpO1xyXG5cclxuICAgICAgdGhpcy5wYXJ0aWNsZVN5c3RlbSA9IG5ldyBQYXJ0aWNsZVN5c3RlbSgpO1xyXG4gICB9XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBpZih0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouaW5pdChnYW1lKSk7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouZGVzdHJveSgpKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBpZighdGhpcy5wYXVzZWQpIHRoaXMudGlsZW1hcD8udXBkYXRlKGRlbHRhLCB0aGlzLmNhbWVyYS5nZXRCb3VuZHMoKSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IHsgaWYoIXRoaXMucGF1c2VkIHx8IG9iai5hbHdheXNVcGRhdGUpIG9iai51cGRhdGUoZGVsdGEpOyB9KTtcclxuXHJcbiAgICAgIGlmKCF0aGlzLnBhdXNlZCkgdGhpcy5wYXJ0aWNsZVN5c3RlbS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICBcclxuICAgICAgaWYoIXRoaXMucGF1c2VkKSB0aGlzLnBoeXNpY3MudXBkYXRlKGRlbHRhKTtcclxuICAgfVxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiB7IGlmKCF0aGlzLnBhdXNlZCB8fCBvYmouYWx3YXlzVXBkYXRlKSBvYmouZml4ZWRVcGRhdGUoZGVsdGEpOyB9KTtcclxuICAgICAgaWYoIXRoaXMucGF1c2VkKSB0aGlzLnBoeXNpY3MuZml4ZWRVcGRhdGUoZGVsdGEpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGdyYXBoaWNzLnNldENhbWVyYSh0aGlzLmNhbWVyYSk7XHJcblxyXG4gICAgICB0aGlzLnRpbGVtYXA/LmRyYXcoZ3JhcGhpY3MsIHRoaXMuY2FtZXJhLmdldEJvdW5kcygpKTtcclxuICAgICAgdGhpcy5wYXJ0aWNsZVN5c3RlbS5kcmF3KGdyYXBoaWNzKTtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouZHJhdyhncmFwaGljcykpO1xyXG4gICAgICB0aGlzLnBoeXNpY3MuZHJhd0RlYnVnKGdyYXBoaWNzKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlU2l6ZSgpe1xyXG4gICAgICBsZXQgYXNwID0gdGhpcy5nYW1lLmNhbnZhcy53aWR0aCAvIHRoaXMuZ2FtZS5jYW52YXMuaGVpZ2h0O1xyXG4gICAgICB0aGlzLmNhbWVyYS53aWR0aCA9IHRoaXMuY2FtZXJhLmhlaWdodCAqIGFzcDtcclxuICAgfVxyXG5cclxuICAgYWRkR2FtZU9iamVjdChvYmo6IEdhbWVPYmplY3Qpe1xyXG4gICAgICB0aGlzLmdhbWVPYmplY3RzLnB1c2gob2JqKTtcclxuICAgICAgb2JqLnNjZW5lID0gdGhpcztcclxuXHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcblxyXG4gICAgICBvYmouaW5pdCh0aGlzLmdhbWUpO1xyXG4gICB9XHJcbiAgIFxyXG4gICByZW1vdmVHYW1lT2JqZWN0KG9iajogR2FtZU9iamVjdCl7XHJcbiAgICAgIGxldCBpZHggPSB0aGlzLmdhbWVPYmplY3RzLmluZGV4T2Yob2JqKTtcclxuXHJcbiAgICAgIGlmKGlkeCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMuc3BsaWNlKGlkeCwgMSk7XHJcblxyXG4gICAgICBpZighdGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG5cclxuICAgICAgb2JqLmRlc3Ryb3koKTtcclxuICAgfVxyXG5cclxuICAgZmluZE9iamVjdChwcmVkaWNhdGU6IChjb21wb25lbnQ6IEdhbWVPYmplY3QpID0+IGJvb2xlYW4pe1xyXG4gICAgICByZXR1cm4gdGhpcy5nYW1lT2JqZWN0cy5maW5kKHByZWRpY2F0ZSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInNjZW5lL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWduYWwgfSBmcm9tIFwic2lnbmFscy9TaWduYWxcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcIi4vVHJhbnNmb3JtXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUmlnaWRib2R5IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICB0cmFuc2Zvcm0hOiBUcmFuc2Zvcm07XHJcbiAgIHZlbG9jaXR5OiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgbWFzczogbnVtYmVyID0gMTtcclxuICAgYm91bmN5bmVzczogbnVtYmVyID0gMDtcclxuXHJcbiAgIHByZXZpb3VzUG9zaXRpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICB1bnN0dWNrRGlzdGFuY2U6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG5cclxuICAgY29sbGlkZWRMZWZ0OiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGNvbGxpZGVkUmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY29sbGlkZWRUb3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY29sbGlkZWRCb3R0b206IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGtpbmVtYXRpYzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBzb2xpZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICB1c2VEeW5hbWljQ29sbGlzaW9uczogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgb25Db2xsaXNpb246IFNpZ25hbDxSaWdpZGJvZHk+ID0gbmV3IFNpZ25hbDxSaWdpZGJvZHk+KCk7XHJcblxyXG4gICBjb2xsaWRlcjogQ29sbGlkZXIgPSBuZXcgQm94Q29sbGlkZXIoKTtcclxuXHJcbiAgIHByaXZhdGUgYWFiYjogQUFCQjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmFhYmIgPSBuZXcgQUFCQigwLCAwLCAwLCAwKTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5hZGRCb2R5KHRoaXMpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuZ2FtZU9iamVjdC5maW5kQ29tcG9uZW50KGMgPT4gYyBpbnN0YW5jZW9mIFRyYW5zZm9ybSkgYXMgVHJhbnNmb3JtO1xyXG4gICB9XHJcblxyXG4gICBkZXN0cm95KCl7XHJcbiAgICAgIHRoaXMuc2NlbmUucGh5c2ljcy5yZW1vdmVCb2R5KHRoaXMpO1xyXG4gICB9XHJcblxyXG4gICBjb2xsaWRlcyhvdGhlcjogUmlnaWRib2R5KXtcclxuICAgICAgcmV0dXJuIG90aGVyLmJvdW5kaW5nQm94Lm92ZXJsYXBzKHRoaXMuYm91bmRpbmdCb3gpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgYm91bmRpbmdCb3goKXtcclxuICAgICAgcmV0dXJuIHRoaXMuY29sbGlkZXIuZ2V0Qm91bmRzKHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLCB0aGlzLmFhYmIpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVHJhbnNmb3JtIGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBwb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgIFxyXG4gICAvLyBJbnRlcnBvbGF0ZWQgcG9zaXRpb25cclxuICAgaW50ZXJwb2xhdGVkUG9zaXRpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG59IiwiZXhwb3J0IGNsYXNzIFNpZ25hbDxUPntcclxuICAgZnVuY3Rpb25zOiAoKHR5cGU6IFQpID0+IHZvaWQpW107XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLmZ1bmN0aW9ucyA9IFtdO1xyXG4gICB9XHJcblxyXG4gICBsaXN0ZW4oZnVuYzogKHR5cGU6IFQpID0+IHZvaWQpe1xyXG4gICAgICB0aGlzLmZ1bmN0aW9ucy5wdXNoKGZ1bmMpO1xyXG4gICAgICByZXR1cm4gZnVuYztcclxuICAgfVxyXG4gICByZW1vdmUoZnVuYzogKHR5cGU6IFQpID0+IHZvaWQpe1xyXG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmZ1bmN0aW9ucy5pbmRleE9mKGZ1bmMpO1xyXG4gICAgICBpZihpbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zLnNwbGljZShpbmRleCk7XHJcbiAgIH1cclxuXHJcbiAgIGVtaXQoZXZlbnQgOiBUKXtcclxuICAgICAgdGhpcy5mdW5jdGlvbnMuZm9yRWFjaChmdW5jID0+IGZ1bmMoZXZlbnQpKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcImdyYXBoaWNzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZVNoZWV0IH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBUaWxlQ29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vVGlsZUNvbGxpZGVyXCI7XHJcbmltcG9ydCB7IGFzeW5jTG9hZEltYWdlIH0gZnJvbSBcInV0aWwvVGVtcFwiO1xyXG5pbXBvcnQgeyBnZXRTcHJpdGVGcm9tVGlsZXNldCwgVGlsZWRNYXAsIFRpbGVkT2JqZWN0LCBUaWxlZE9iamVjdExheWVyLCBUaWxlZE9iamVjdExheWVyVHlwZSwgVGlsZWRUaWxlTGF5ZXIsIFRpbGVkVGlsZUxheWVyVHlwZSwgVGlsZWRDb2xsaWRlckxheWVyTmFtZSwgVGlsZWRJbWFnZUxheWVyLCBUaWxlZFRpbGVzZXQsIFRpbGVkSW1hZ2VMYXllclR5cGUgfSBmcm9tIFwiLi9UaWxlZE1hcFwiO1xyXG5cclxudHlwZSBUaWxlbWFwT2JqZWN0TG9hZGVyID0gKG9iamVjdDogVGlsZWRPYmplY3QpID0+IHZvaWQ7XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZW1hcExheWVye1xyXG4gICB0aWxlbWFwOiBUaWxlTWFwO1xyXG5cclxuICAgY29uc3RydWN0b3IodGlsZW1hcDogVGlsZU1hcCl7XHJcbiAgICAgIHRoaXMudGlsZW1hcCA9IHRpbGVtYXA7XHJcbiAgIH1cclxuICAgXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyLCBib3VuZHM6IEFBQkIpe1xyXG5cclxuICAgfVxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgYm91bmRzOiBBQUJCKXtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZW1hcFRpbGVMYXllciBleHRlbmRzIFRpbGVtYXBMYXllcntcclxuICAgd2lkdGg6IG51bWJlcjtcclxuICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgIHRpbGVzOiAoQW5pbWF0aW9ufHVuZGVmaW5lZClbXTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHRpbGVtYXA6IFRpbGVNYXAsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKXtcclxuICAgICAgc3VwZXIodGlsZW1hcCk7XHJcbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLnRpbGVzID0gW107XHJcblxyXG4gICAgICAvLyBsZW5ndGggc3R1ZmYuLi4gOicpXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3aWR0aCAqIGhlaWdodDsgaSsrKSB0aGlzLnRpbGVzLnB1c2godW5kZWZpbmVkKTtcclxuICAgfVxyXG5cclxuICAgZ2V0VGlsZSh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW3ggKyB5ICogdGhpcy53aWR0aF07XHJcbiAgIH1cclxuICAgc2V0VGlsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgYW5pbWF0aW9uOiBBbmltYXRpb24pe1xyXG4gICAgICB0aGlzLnRpbGVzW3ggKyB5ICogdGhpcy53aWR0aF0gPSBhbmltYXRpb247XHJcbiAgIH1cclxuICAgc2V0VGlsZUZyb21JbmRleChpbmRleDogbnVtYmVyLCBhbmltYXRpb246IEFuaW1hdGlvbil7XHJcbiAgICAgIHRoaXMudGlsZXNbaW5kZXhdID0gYW5pbWF0aW9uO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlciwgYm91bmRzOiBBQUJCKXtcclxuICAgICAgbGV0IHRpbGVXaWR0aCA9IHRoaXMudGlsZW1hcC50aWxlV2lkdGg7XHJcbiAgICAgIGxldCB0aWxlSGVpZ2h0ID0gdGhpcy50aWxlbWFwLnRpbGVIZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgc3RhcnRYID0gTWF0aC5mbG9vcihNYXRoLm1heCgwLCBib3VuZHMubGVmdCAvIHRpbGVXaWR0aCkpO1xyXG4gICAgICBsZXQgZW5kWCA9IE1hdGguZmxvb3IoTWF0aC5taW4odGhpcy53aWR0aCwgYm91bmRzLnJpZ2h0IC8gdGlsZVdpZHRoICsgMSkpO1xyXG5cclxuICAgICAgbGV0IHN0YXJ0WSA9IE1hdGguZmxvb3IoTWF0aC5tYXgoMCwgYm91bmRzLnRvcCAvIHRpbGVIZWlnaHQpKTtcclxuICAgICAgbGV0IGVuZFkgPSBNYXRoLmZsb29yKE1hdGgubWluKHRoaXMuaGVpZ2h0LCBib3VuZHMuYm90dG9tIC8gdGlsZUhlaWdodCArIDEpKTtcclxuICAgICAgXHJcbiAgICAgIGZvcihsZXQgeCA9IHN0YXJ0WDsgeCA8IGVuZFg7IHgrKyl7XHJcbiAgICAgICAgIGZvcihsZXQgeSA9IHN0YXJ0WTsgeSA8IGVuZFk7IHkrKyl7XHJcbiAgICAgICAgICAgIGxldCB0aWxlID0gdGhpcy5nZXRUaWxlKHgsIHkpO1xyXG4gICAgICAgICAgICBpZih0aWxlID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgdGlsZS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBcclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIGJvdW5kczogQUFCQil7XHJcbiAgICAgIGxldCB0aWxlV2lkdGggPSB0aGlzLnRpbGVtYXAudGlsZVdpZHRoO1xyXG4gICAgICBsZXQgdGlsZUhlaWdodCA9IHRoaXMudGlsZW1hcC50aWxlSGVpZ2h0O1xyXG5cclxuICAgICAgbGV0IHN0YXJ0WCA9IE1hdGguZmxvb3IoTWF0aC5tYXgoMCwgYm91bmRzLmxlZnQgLyB0aWxlV2lkdGgpKTtcclxuICAgICAgbGV0IGVuZFggPSBNYXRoLmZsb29yKE1hdGgubWluKHRoaXMud2lkdGgsIGJvdW5kcy5yaWdodCAvIHRpbGVXaWR0aCArIDEpKTtcclxuXHJcbiAgICAgIGxldCBzdGFydFkgPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGJvdW5kcy50b3AgLyB0aWxlSGVpZ2h0KSk7XHJcbiAgICAgIGxldCBlbmRZID0gTWF0aC5mbG9vcihNYXRoLm1pbih0aGlzLmhlaWdodCwgYm91bmRzLmJvdHRvbSAvIHRpbGVIZWlnaHQgKyAxKSk7XHJcblxyXG4gICAgICBmb3IobGV0IHggPSBzdGFydFg7IHggPCBlbmRYOyB4Kyspe1xyXG4gICAgICAgICBmb3IobGV0IHkgPSBzdGFydFk7IHkgPCBlbmRZOyB5Kyspe1xyXG4gICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMuZ2V0VGlsZSh4LCB5KTtcclxuICAgICAgICAgICAgaWYodGlsZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGVTaW1wbGUodGlsZS5mcmFtZSwgeCAqIHRpbGVXaWR0aCwgeSAqIHRpbGVIZWlnaHQpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZW1hcEltYWdlTGF5ZXIgZXh0ZW5kcyBUaWxlbWFwTGF5ZXIge1xyXG4gICBpbWFnZTogU3ByaXRlfHVuZGVmaW5lZDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHRpbGVtYXA6IFRpbGVNYXAsIGltYWdlPzogU3ByaXRlKXtcclxuICAgICAgc3VwZXIodGlsZW1hcCk7XHJcbiAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgfVxyXG5cclxuICAgXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzLCBib3VuZHM6IEFBQkIpe1xyXG4gICAgICBpZih0aGlzLmltYWdlID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGUodGhpcy5pbWFnZSwgYm91bmRzLmNlbnRlclggLSB0aGlzLmltYWdlLndpZHRoIC8gMiwgYm91bmRzLmNlbnRlclkgLSB0aGlzLmltYWdlLmhlaWdodCAvIDIpXHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVtYXBDb2xsaXNpb25MYXllciBleHRlbmRzIFRpbGVtYXBMYXllcntcclxuICAgd2lkdGg6IG51bWJlcjtcclxuICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgIHRpbGVzOiBib29sZWFuW107XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih0aWxlbWFwOiBUaWxlTWFwLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIHN1cGVyKHRpbGVtYXApO1xyXG5cclxuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMudGlsZW1hcCA9IHRpbGVtYXA7XHJcblxyXG4gICAgICB0aGlzLnRpbGVzID0gW107XHJcblxyXG4gICAgICAvLyBsZW5ndGggc3R1ZmYuLi4gOicpXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3aWR0aCAqIGhlaWdodDsgaSsrKSB0aGlzLnRpbGVzLnB1c2goZmFsc2UpO1xyXG4gICB9XHJcblxyXG4gICBpc1BpeGVsU29saWQoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5pc1RpbGVTb2xpZChcclxuICAgICAgICAgTWF0aC5mbG9vcih4IC8gdGhpcy50aWxlbWFwLnRpbGVXaWR0aCksXHJcbiAgICAgICAgIE1hdGguZmxvb3IoeSAvIHRoaXMudGlsZW1hcC50aWxlSGVpZ2h0KVxyXG4gICAgICApO1xyXG4gICB9XHJcblxyXG4gICBpc1RpbGVTb2xpZCh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFRpbGUoeCwgeSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldFRpbGVDb2xsaWRlcih4OiBudW1iZXIsIHk6IG51bWJlciwgdGlsZUNvbGxpZGVyOiBUaWxlQ29sbGlkZXIpe1xyXG4gICAgICB0aWxlQ29sbGlkZXIuc2l6ZS54ID0gdGhpcy50aWxlbWFwLnRpbGVXaWR0aDtcclxuICAgICAgdGlsZUNvbGxpZGVyLnNpemUueSA9IHRoaXMudGlsZW1hcC50aWxlSGVpZ2h0O1xyXG5cclxuICAgICAgdGlsZUNvbGxpZGVyLnRvcCA9ICF0aGlzLmlzVGlsZVNvbGlkKHgsIHkgLSAxKTtcclxuICAgICAgdGlsZUNvbGxpZGVyLmJvdHRvbSA9ICF0aGlzLmlzVGlsZVNvbGlkKHgsIHkgKyAxKTtcclxuICAgICAgdGlsZUNvbGxpZGVyLmxlZnQgPSAhdGhpcy5pc1RpbGVTb2xpZCh4IC0gMSwgeSk7XHJcbiAgICAgIHRpbGVDb2xsaWRlci5yaWdodCA9ICF0aGlzLmlzVGlsZVNvbGlkKHggKyAxLCB5KTtcclxuXHJcbiAgICAgIHJldHVybiB0aWxlQ29sbGlkZXI7XHJcbiAgIH1cclxuXHJcbiAgIGdldFRpbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICBpZih4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZih4ID49IHRoaXMud2lkdGgpIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYoeSA8IDApIHJldHVybiBmYWxzZTsgXHJcbiAgICAgIGlmKHkgPj0gdGhpcy5oZWlnaHQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW3ggKyB5ICogdGhpcy53aWR0aF07XHJcbiAgIH1cclxuICAgc2V0VGlsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgc29saWQ6IGJvb2xlYW4pe1xyXG4gICAgICB0aGlzLnRpbGVzW3ggKyB5ICogdGhpcy53aWR0aF0gPSBzb2xpZDtcclxuICAgfVxyXG4gICBzZXRUaWxlRnJvbUluZGV4KGluZGV4OiBudW1iZXIsIHNvbGlkOiBib29sZWFuKXtcclxuICAgICAgdGhpcy50aWxlc1tpbmRleF0gPSBzb2xpZDtcclxuICAgfVxyXG5cclxuICAgZHJhd0RlYnVnKGdyYXBoaWNzOiBHcmFwaGljcywgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlciwgYm91bmRzOiBBQUJCKXtcclxuICAgICAgbGV0IHN0YXJ0WCA9IE1hdGguZmxvb3IoTWF0aC5tYXgoMCwgYm91bmRzLmxlZnQgLyB0aWxlV2lkdGgpKTtcclxuICAgICAgbGV0IGVuZFggPSBNYXRoLmZsb29yKE1hdGgubWluKHRoaXMud2lkdGgsIGJvdW5kcy5yaWdodCAvIHRpbGVXaWR0aCArIDEpKTtcclxuXHJcbiAgICAgIGxldCBzdGFydFkgPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGJvdW5kcy50b3AgLyB0aWxlSGVpZ2h0KSk7XHJcbiAgICAgIGxldCBlbmRZID0gTWF0aC5mbG9vcihNYXRoLm1pbih0aGlzLmhlaWdodCwgYm91bmRzLmJvdHRvbSAvIHRpbGVIZWlnaHQgKyAxKSk7XHJcblxyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcihcInJnYmEoMjU1LCA5MCwgMjAsIDAuOClcIik7XHJcblxyXG4gICAgICBsZXQgY29sbGlkZXIgPSBuZXcgVGlsZUNvbGxpZGVyKCk7XHJcbiAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IDI7XHJcblxyXG4gICAgICBmb3IobGV0IHggPSBzdGFydFg7IHggPCBlbmRYOyB4Kyspe1xyXG4gICAgICAgICBmb3IobGV0IHkgPSBzdGFydFk7IHkgPCBlbmRZOyB5Kyspe1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc1RpbGVTb2xpZCh4LCB5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb2xsaWRlciA9IHRoaXMuZ2V0VGlsZUNvbGxpZGVyKHgsIHksIGNvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLnRvcCl7XHJcbiAgICAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0YW5nbGUoeCAqIHRpbGVXaWR0aCwgeSAqIHRpbGVIZWlnaHQsIHRpbGVXaWR0aCwgdGhpY2tuZXNzLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjb2xsaWRlci5ib3R0b20pe1xyXG4gICAgICAgICAgICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKHggKiB0aWxlV2lkdGgsIHkgKiB0aWxlSGVpZ2h0ICsgdGlsZUhlaWdodCAtIHRoaWNrbmVzcywgdGlsZVdpZHRoLCB0aGlja25lc3MsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLmxlZnQpe1xyXG4gICAgICAgICAgICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKHggKiB0aWxlV2lkdGgsIHkgKiB0aWxlSGVpZ2h0LCB0aGlja25lc3MsIHRpbGVIZWlnaHQsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLnJpZ2h0KXtcclxuICAgICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3RhbmdsZSh4ICogdGlsZVdpZHRoICsgdGlsZVdpZHRoIC0gdGhpY2tuZXNzLCB5ICogdGlsZUhlaWdodCwgdGhpY2tuZXNzLCB0aWxlSGVpZ2h0LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCB7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG4gICB0aWxlV2lkdGg6IG51bWJlcjtcclxuICAgdGlsZUhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgbGF5ZXJzOiBUaWxlbWFwTGF5ZXJbXTtcclxuICAgY29sbGlkZXJzOiBUaWxlbWFwQ29sbGlzaW9uTGF5ZXJbXTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0aWxlV2lkdGg6IG51bWJlciwgdGlsZUhlaWdodDogbnVtYmVyKXtcclxuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgdGhpcy50aWxlV2lkdGggPSB0aWxlV2lkdGg7XHJcbiAgICAgIHRoaXMudGlsZUhlaWdodCA9IHRpbGVIZWlnaHQ7XHJcbiAgICAgIHRoaXMubGF5ZXJzID0gW107XHJcbiAgICAgIHRoaXMuY29sbGlkZXJzID0gW107XHJcbiAgIH1cclxuXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzLCBib3VuZHM6IEFBQkIpe1xyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgIGdyYXBoaWNzLmRyYXdSZWN0YW5nbGUoMCwgMCwgdGhpcy53aWR0aCAqIHRoaXMudGlsZVdpZHRoLCB0aGlzLmhlaWdodCAqIHRoaXMudGlsZUhlaWdodCwgdHJ1ZSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IGxheWVyLmRyYXcoZ3JhcGhpY3MsIGJvdW5kcykpO1xyXG4gICAgICAvLyB0aGlzLmNvbGxpZGVycy5mb3JFYWNoKGxheWVyID0+IGxheWVyLmRyYXdEZWJ1ZyhncmFwaGljcywgdGhpcy50aWxlV2lkdGgsIHRoaXMudGlsZUhlaWdodCwgYm91bmRzKSk7XHJcbiAgIH1cclxuXHJcbiAgIC8vIFRPRE8gbWF5YmUgbW9yZSBsaWtlIGJhdGNoIHVwZGF0ZSBldmVyeSB4IGZyYW1lcyBvciBkZXZpZGUgdXAgdGhlIHdvcmsgc29tZWhvdyBvdmVyIG11cHRpcGxlIGZyYW1lc1xyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlciwgYm91bmRzOiBBQUJCKXsgICAgICBcclxuICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBsYXllci51cGRhdGUoZGVsdGEsIGJvdW5kcykpO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGZyb21UaWxlZE1hcChtYXA6IFRpbGVkTWFwLCBsb2FkZXI6IFRpbGVtYXBPYmplY3RMb2FkZXIpe1xyXG4gICAgICBsZXQgdGlsZW1hcCA9IG5ldyBUaWxlTWFwKG1hcC53aWR0aCwgbWFwLmhlaWdodCwgbWFwLnRpbGV3aWR0aCwgbWFwLnRpbGVoZWlnaHQpO1xyXG5cclxuICAgICAgdGlsZW1hcC5iYWNrZ3JvdW5kQ29sb3IgPSBtYXAuYmFja2dyb3VuZGNvbG9yO1xyXG4gICAgICBcclxuICAgICAgLy8gVElMRVNFVFNcclxuICAgICAgbGV0IHRpbGVzZXRzOiB7c2V0OiBUaWxlZFRpbGVzZXQsIHNoZWV0OiBTcHJpdGVTaGVldH1bXSA9IFtdO1xyXG4gICAgICBsZXQgdGlsZXM6IHsgW2tleTogbnVtYmVyXTogQW5pbWF0aW9uIH0gPSB7fTtcclxuICAgICAgXHJcbiAgICAgIG1hcC50aWxlc2V0cy5mb3JFYWNoKHNldCA9PiB7XHJcbiAgICAgICAgIGxldCBzaGVldCA9IFNwcml0ZVNoZWV0LmZyb21IVE1MKHNldC5uYW1lKTtcclxuICAgICAgICAgdGlsZXNldHMucHVzaCh7XHJcbiAgICAgICAgICAgIHNldCxcclxuICAgICAgICAgICAgc2hlZXRcclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAvLyBMb2FkIGFsbCBkZWZhdWx0IGFuaW1hdGlvbnNcclxuICAgICAgICAgc2V0LnRpbGVzPy5mb3JFYWNoKHRpbGUgPT4ge1xyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSB0aWxlLmlkICsgc2V0LmZpcnN0Z2lkO1xyXG5cclxuICAgICAgICAgICAgbGV0IGFuaW1hdGlvbiA9ICBuZXcgQW5pbWF0aW9uKCk7XHJcblxyXG4gICAgICAgICAgICB0aWxlLmFuaW1hdGlvbi5mb3JFYWNoKGZyYW1lID0+IHtcclxuICAgICAgICAgICAgICAgYW5pbWF0aW9uLmFkZEZyYW1lKGdldFNwcml0ZUZyb21UaWxlc2V0KHNldCwgZnJhbWUudGlsZWlkLCBzaGVldCkpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGFuaW1hdGlvbi5mcmFtZVJhdGUgPSA0O1xyXG5cclxuICAgICAgICAgICAgdGlsZXNbaW5kZXhdID0gYW5pbWF0aW9uO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBtYXAubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAvLyBUSUxFIExBWUVSU1xyXG4gICAgICAgICBpZihsYXllci50eXBlID09PSBUaWxlZFRpbGVMYXllclR5cGUgJiYgbGF5ZXIubmFtZSAhPT0gVGlsZWRDb2xsaWRlckxheWVyTmFtZSl7XHJcbiAgICAgICAgICAgIGxldCB0aWxlTGF5ZXIgPSBsYXllciBhcyBUaWxlZFRpbGVMYXllcjtcclxuXHJcbiAgICAgICAgICAgIGlmKCFsYXllci52aXNpYmxlKXtcclxuICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBsZXQgdGlsZW1hcExheWVyID0gbmV3IFRpbGVtYXBUaWxlTGF5ZXIodGlsZW1hcCwgdGlsZUxheWVyLndpZHRoLCB0aWxlTGF5ZXIuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aWxlTGF5ZXIuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIGxldCB0aWxlSW5kZXggPSB0aWxlTGF5ZXIuZGF0YVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGlsZXNbdGlsZUluZGV4XTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC8vIEZpbmQgdGlsZVxyXG4gICAgICAgICAgICAgICBpZih0aWxlID09PSB1bmRlZmluZWQgJiYgdGlsZUluZGV4ICE9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRpbGVzZXRzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbGVzZXQgPSB0aWxlc2V0c1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKHRpbGVJbmRleCA+PSB0aWxlc2V0LnNldC5maXJzdGdpZCAmJiB0aWxlSW5kZXggPCB0aWxlc2V0LnNldC5maXJzdGdpZCArIHRpbGVzZXQuc2V0LnRpbGVjb3VudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzcHJpdGUgPSBnZXRTcHJpdGVGcm9tVGlsZXNldCh0aWxlc2V0LnNldCwgdGlsZUluZGV4IC0gdGlsZXNldC5zZXQuZmlyc3RnaWQsIHRpbGVzZXQuc2hlZXQpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZSA9IG5ldyBBbmltYXRpb24oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGlsZS5hZGRGcmFtZShzcHJpdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdGlsZXNbdGlsZUluZGV4XSA9IHRpbGU7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIGlmKHRpbGUgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgICAgIHRpbGVtYXBMYXllci5zZXRUaWxlRnJvbUluZGV4KGksIHRpbGUuY2xvbmUoKSk7XHJcbiAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGlsZW1hcC5sYXllcnMucHVzaCh0aWxlbWFwTGF5ZXIpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAvLyBDb2xsaXNpb24gTGF5ZXJzXHJcbiAgICAgICAgIGVsc2UgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRUaWxlTGF5ZXJUeXBlICYmIGxheWVyLm5hbWUgPT09IFRpbGVkQ29sbGlkZXJMYXllck5hbWUpe1xyXG4gICAgICAgICAgICBsZXQgdGlsZUxheWVyID0gbGF5ZXIgYXMgVGlsZWRUaWxlTGF5ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgY29sbGlkZXJMYXllciA9IG5ldyBUaWxlbWFwQ29sbGlzaW9uTGF5ZXIodGlsZW1hcCwgdGlsZUxheWVyLndpZHRoLCB0aWxlTGF5ZXIuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aWxlTGF5ZXIuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIGxldCB0aWxlSW5kZXggPSB0aWxlTGF5ZXIuZGF0YVtpXTtcclxuICAgICAgICAgICAgICAgY29sbGlkZXJMYXllci5zZXRUaWxlRnJvbUluZGV4KGksIHRpbGVJbmRleCAhPT0gMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRpbGVtYXAuY29sbGlkZXJzLnB1c2goY29sbGlkZXJMYXllcik7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIGVsc2UgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRJbWFnZUxheWVyVHlwZSl7XHJcbiAgICAgICAgICAgIGxldCB0aWxlTGF5ZXIgPSBsYXllciBhcyBUaWxlZEltYWdlTGF5ZXI7XHJcblxyXG4gICAgICAgICAgICBsZXQgaW1hZ2VMYXllciA9IG5ldyBUaWxlbWFwSW1hZ2VMYXllcih0aWxlbWFwKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGFzeW5jTG9hZEltYWdlKFwiL2Fzc2V0cy9sZXZlbHMvXCIgKyB0aWxlTGF5ZXIuaW1hZ2UpLnRoZW4ocmVzdWx0ID0+IHtcclxuICAgICAgICAgICAgICAgaW1hZ2VMYXllci5pbWFnZSA9IG5ldyBTcHJpdGUocmVzdWx0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aWxlbWFwLmxheWVycy5wdXNoKGltYWdlTGF5ZXIpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIFxyXG4gICAgICAgICAvLyBPYmplY3QgbGF5ZXJzXHJcbiAgICAgICAgIGVsc2UgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRPYmplY3RMYXllclR5cGUpe1xyXG4gICAgICAgICAgICBsZXQgb2JqTGF5ZXIgPSBsYXllciBhcyBUaWxlZE9iamVjdExheWVyO1xyXG4gICAgICAgICAgICBvYmpMYXllci5vYmplY3RzLmZvckVhY2gobG9hZGVyKTtcclxuICAgICAgICAgfVxyXG5cclxuICAgICAgICAgLy8gVWggb2hcclxuICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlVua25vd24gbGF5ZXIgdHlwZSBcIiArIGxheWVyLnR5cGUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgIHJldHVybiB0aWxlbWFwO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGZyb21UaWxlZE1hcERvd25sb2FkKGZpbGU6IHN0cmluZywgbG9hZGVyOiBUaWxlbWFwT2JqZWN0TG9hZGVyKXtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGZpbGUpO1xyXG4gICAgICBsZXQgZCA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5mcm9tVGlsZWRNYXAoZCBhcyBUaWxlZE1hcCwgbG9hZGVyKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IHBpeGVsV2lkdGgoKXtcclxuICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLnRpbGVXaWR0aDtcclxuICAgfVxyXG4gICBnZXQgcGl4ZWxIZWlnaHQoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy50aWxlSGVpZ2h0O1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaWxlZE9iamVjdExheWVyVHlwZSA9IFwib2JqZWN0Z3JvdXBcIjtcclxuZXhwb3J0IGNvbnN0IFRpbGVkSW1hZ2VMYXllclR5cGUgPSBcImltYWdlbGF5ZXJcIjtcclxuZXhwb3J0IGNvbnN0IFRpbGVkVGlsZUxheWVyVHlwZSA9IFwidGlsZWxheWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGlsZWRDb2xsaWRlckxheWVyTmFtZSA9IFwiQ29sbGlkZXJzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkTWFwIHtcclxuICAgd2lkdGg6IG51bWJlcjtcclxuICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICB0aWxld2lkdGg6IG51bWJlcjtcclxuICAgdGlsZWhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgYmFja2dyb3VuZGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICBsYXllcnM6IFRpbGVkTGF5ZXJbXTtcclxuICAgdGlsZXNldHM6IFRpbGVkVGlsZXNldFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkTGF5ZXIge1xyXG4gICBpZDogbnVtYmVyO1xyXG4gICBcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcblxyXG4gICBuYW1lOiBzdHJpbmc7XHJcbiAgIHR5cGU6IHN0cmluZztcclxuXHJcbiAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZFRpbGVMYXllciBleHRlbmRzIFRpbGVkTGF5ZXIge1xyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuICAgZGF0YTogbnVtYmVyW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZE9iamVjdExheWVyIGV4dGVuZHMgVGlsZWRMYXllcntcclxuICAgb2JqZWN0czogVGlsZWRPYmplY3RbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkSW1hZ2VMYXllciBleHRlbmRzIFRpbGVkTGF5ZXJ7XHJcbiAgIGltYWdlOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZE9iamVjdCB7XHJcbiAgIHg6IG51bWJlcjtcclxuICAgeTogbnVtYmVyO1xyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgIG5hbWU6IHN0cmluZztcclxuICAgdHlwZTogc3RyaW5nO1xyXG5cclxuICAgcHJvcGVydGllczogVGlsZWRPYmplY3RQcm9wZXJ0aWVzW107XHJcblxyXG4gICB2aXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkT2JqZWN0UHJvcGVydGllc3tcclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICB0eXBlOiBzdHJpbmc7XHJcbiAgIHZhbHVlOiBzdHJpbmd8Ym9vbGVhbnxudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZWRBbmltYXRlZFRpbGVze1xyXG4gICBpZDogbnVtYmVyO1xyXG4gICBhbmltYXRpb246IFRpbGVkQW5pbWF0ZWRUaWxlRnJhbWVbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkQW5pbWF0ZWRUaWxlRnJhbWV7XHJcbiAgIGR1cmF0aW9uOiBudW1iZXIsXHJcbiAgIHRpbGVpZDogbnVtYmVyO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkVGlsZXNldCB7XHJcbiAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgIGZpcnN0Z2lkOiBudW1iZXI7XHJcbiAgIGltYWdlOiBzdHJpbmc7XHJcbiAgIFxyXG4gICBjb2x1bW5zOiBudW1iZXI7XHJcbiAgIHRpbGVjb3VudDogbnVtYmVyO1xyXG5cclxuICAgdGlsZXdpZHRoOiBudW1iZXI7XHJcbiAgIHRpbGVoZWlnaHQ6IG51bWJlcjtcclxuXHJcbiAgIHRpbGVzOiBUaWxlZEFuaW1hdGVkVGlsZXNbXXx1bmRlZmluZWQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRTcHJpdGVGcm9tVGlsZXNldCh0aWxlc2V0OiBUaWxlZFRpbGVzZXQsIGluZGV4OiBudW1iZXIsIHNoZWV0OiBTcHJpdGVTaGVldCl7XHJcbiAgIGxldCB4ID0gaW5kZXggJSB0aWxlc2V0LmNvbHVtbnM7XHJcbiAgIGxldCB5ID0gTWF0aC5mbG9vcihpbmRleCAvIHRpbGVzZXQuY29sdW1ucyk7XHJcblxyXG4gICByZXR1cm4gc2hlZXQuZ2V0U3ByaXRlKFxyXG4gICAgICB4ICogdGlsZXNldC50aWxld2lkdGgsIFxyXG4gICAgICB5ICogdGlsZXNldC50aWxlaGVpZ2h0LCBcclxuICAgICAgdGlsZXNldC50aWxld2lkdGgsIFxyXG4gICAgICB0aWxlc2V0LnRpbGVoZWlnaHQpO1xyXG59IiwiZXhwb3J0IGNsYXNzIEN1cnZle1xyXG4gICBwdWJsaWMgc3RhdGljIGxlcnAoYTogbnVtYmVyLCBiOiBudW1iZXIsIGY6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBhICsgKGIgLSBhKSAqIGY7XHJcbiAgIH1cclxuICAgc3RhdGljIGxpbmVhcihhOiBudW1iZXIsIGI6IG51bWJlciwgZjogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIEN1cnZlLmxlcnAoYSxiLGYpO1xyXG4gICB9XHJcbn0iLCJjbGFzcyBMaXN0e1xyXG4gICBoYXM8VD4obGlzdDogVFtdfHVuZGVmaW5lZCwgZnVuYzogKCh2YWx1ZTogVCkgPT4gYm9vbGVhbikpe1xyXG4gICAgICBpZihsaXN0ID09PSB1bmRlZmluZWQpIHJldHVybiBmYWxzZTtcclxuICAgICAgXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgaWYoZnVuYyhsaXN0W2ldKSkgcmV0dXJuIHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBMaXN0KCk7IiwiZXhwb3J0IGZ1bmN0aW9uIGFzeW5jTG9hZEltYWdlKHNyYzogc3RyaW5nKXtcclxuICAgcmV0dXJuIG5ldyBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+e1xyXG4gICAgICBsZXQgaW1nID0gbmV3IEltYWdlKCk7XHJcblxyXG4gICAgICBpbWcub25lcnJvciA9ICgpID0+IHJlamVjdCgpO1xyXG4gICAgICBpbWcub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWcpOyBcclxuICAgICAgXHJcbiAgICAgIGltZy5zcmMgPSBzcmM7XHJcbiAgIH0pO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG5vdygpe1xyXG4gICBpZih3aW5kb3cucGVyZm9ybWFuY2Upe1xyXG4gICAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMDtcclxuICAgfVxyXG4gICByZXR1cm4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQodGltZUluU2Vjb25kczogbnVtYmVyKXtcclxuICAgbGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWVJblNlY29uZHMpO1xyXG4gICBsZXQgbWlsbGlzID0gTWF0aC5mbG9vcigodGltZUluU2Vjb25kcyAlIDEpICogMTAwMCk7XHJcblxyXG4gICByZXR1cm4gKFwiXCIgKyBzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpICsgXCI6XCIgKyAoXCJcIiArIG1pbGxpcykucGFkU3RhcnQoMywgJzAnKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=