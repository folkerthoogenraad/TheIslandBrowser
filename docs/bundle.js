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
        if (this.running) {
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
        this.completed = false;
        this.time = 0;
        this.running = true;
        this.player = new PlayerGameObject_1.PlayerGameObject();
        var position = this.spawn.transform.position;
        if (this.currentCheckpoint !== undefined) {
            position = this.currentCheckpoint.transform.position;
        }
        this.player.transform.position.set(position);
        this.player.transform.interpolatedPosition.set(position);
        this.player.body.previousPosition.set(position);
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
        _this.wallJumpTimer = 0;
        _this.canDash = false;
        _this.canDoublejump = false;
        var sheet = Resources_1.default.sheetPlayer;
        _this.idleAnimation = sheet.getAnimation(0, 0, 16, 16, 1).center();
        _this.walkAnimation = sheet.getAnimation(0, 16, 16, 16, 4).center();
        _this.fallAnimation = sheet.getAnimation(0, 32, 16, 16, 2).center();
        _this.jumpAnimation = sheet.getAnimation(0, 48, 16, 16, 2).center();
        _this.dashAnimation = sheet.getAnimation(0, 64, 16, 16, 2).center();
        _this.wallAnimation = sheet.getAnimation(0, 80, 16, 16, 2).center();
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
        }
        this.dashHop = false;
    };
    PlayerGameObject.prototype.updateJump = function (delta) {
        this.wallJumpTimer -= delta;
        if (this.canJump) {
            if (this.jumpHop) {
                this.body.velocity.y = this.jumpSpeed;
                this.jumping = true;
                if (!this.grounded) {
                    console.log("cayote jump!");
                }
                // This is really hacky but whatever
                this.groundLeaveTime = this.cayoteTime;
            }
            this.jumpHop = false;
        }
        else if (this.canDoublejump) {
            if (this.jumpHop) {
                this.body.velocity.y = this.jumpSpeed;
                this.jumping = true;
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
            }
            if (this.wallRight && this.jumpHop) {
                this.body.velocity.x = -this.moveSpeed;
                this.body.velocity.y = this.jumpSpeed;
                this.wallJumpTimer = 0.05;
                this.jumping = true;
                this.jumpHop = false;
                // You can dash after your walljump :)
                this.canDash = true;
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
var Scene = /** @class */ (function () {
    function Scene() {
        // This gets used for transitions :)
        this.paused = false;
        this.initialized = false;
        this.camera = new Camera_1.Camera();
        this.gameObjects = [];
        this.physics = new Physics_1.Physics();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2FwcC5zY3NzPzUxYzUiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2VuZ2luZS9HYW1lLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9lbmdpbmUvSW5wdXQudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2VuZ2luZS9QaHlzaWNzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy9BbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3MvR3JhcGhpY3MudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL1Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9Db21wb25lbnRzL0hlYWx0aENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0NvbXBvbmVudHMvSW50ZXJhY3RhYmxlQ29tcG9uZW50LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvQ29tcG9uZW50cy9JbnRlcmFjdG9yQ29tcG9uZW50LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvQ29tcG9uZW50cy9QbGF5ZXJJbnB1dENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL0NoZXN0R2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL0NvbGxpZGVyR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL0xldmVsTWFuYWdlci50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1BsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyRmluaXNoR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1BsYXllckdhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJTcGF3bkdhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9TcGlrZXNHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvUmVzb3VyY2VzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9tYXRoL0FBQkIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL21hdGgvVmVjdG9yMi50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvbWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL21hdGgvY29sbGlzaW9uL0NvbGxpZGVyLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9tYXRoL2NvbGxpc2lvbi9Db2xsaXNpb24udHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL21hdGgvY29sbGlzaW9uL1RpbGVDb2xsaWRlci50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvc2NlbmUvQ29tcG9uZW50LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9zY2VuZS9HYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9zY2VuZS9TY2VuZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvc2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHkudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3NjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9zaWduYWxzL1NpZ25hbC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvdGlsZW1hcC9UaWxlTWFwLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy90aWxlbWFwL1RpbGVkTWFwLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy91dGlsL0N1cnZlLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy91dGlsL0xpc3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3V0aWwvVGltZS50cyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFF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LElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBUSxDQUFDLFFBQVEsQ0FBQztZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ3JGLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBUSxDQUFDLFFBQVEsQ0FBQztZQUFFLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1FBQy9FLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBUSxDQUFDLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDO1FBQ2pGLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxnQkFBUSxDQUFDLElBQUksQ0FBQztZQUFFLElBQUksQ0FBQyxlQUFlLEdBQUcsSUFBSSxDQUFDO1FBRXJGLElBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxnQkFBUSxDQUFDLFlBQVksQ0FBQztZQUFFLElBQUksQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbEYsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGdCQUFRLENBQUMsYUFBYSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUM7UUFFbEYsSUFBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLGdCQUFRLENBQUMsSUFBSSxDQUFDO1lBQUUsSUFBSSxDQUFDLFNBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUMxRSxJQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsZ0JBQVEsQ0FBQyxJQUFJ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TSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7S0FDekM7SUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDNUIsQ0FBQztBQUxELGtCQUtDO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLGFBQXFCO0lBQ3pDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUVwRCxPQUFPLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakYsQ0FBQztBQUxELHdCQUtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmh0bWwsIGJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdaYW5iYXJTcXVhcmUnO1xcbiAgc3JjOiB1cmwoXFxcIi9hc3NldHMvZm9udHMvWmFuYmFyU3F1YXJlLnR0ZlxcXCIpOyB9XFxuXFxuaHRtbCwgYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlphbmJhclNxdWFyZVxcXCI7XFxuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcblxcbiNjYW52YXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDsgfVxcblxcbi5yZXNvdXJjZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmdhbWUtb3ZlcmxheSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTsgfVxcbiAgLmdhbWUtb3ZlcmxheSAuYmFyLWJvdHRvbSB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpOyB9XFxuICAuZ2FtZS1vdmVybGF5IC5iYXItdG9wIHtcXG4gICAgdG9wOiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpOyB9XFxuICAuZ2FtZS1vdmVybGF5IC5iYXItYm90dG9tLCAuZ2FtZS1vdmVybGF5IC5iYXItdG9wIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBmb250LXNpemU6IDJlbTsgfVxcbiAgLmdhbWUtb3ZlcmxheS5nYW1lLW92ZXIgLmJhci1ib3R0b20sIC5nYW1lLW92ZXJsYXkuZ2FtZS1vdmVyIC5iYXItdG9wIHtcXG4gICAgdHJhbnNmb3JtOiBub25lOyB9XFxuICAuZ2FtZS1vdmVybGF5Om5vdCguY29tcGxldGVkKSAuY29tcGxldGUtYmFubmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmdhbWUtb3ZlcmxheS5jb21wbGV0ZWQgLmZhaWwtYmFubmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmdhbWUtb3ZlcmxheSAuYmVzdC10aW1lIHtcXG4gICAgY29sb3I6ICM5OTk7IH1cXG4gIC5nYW1lLW92ZXJsYXkgLmRlYnVnLWFscGhhLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiAjOTk5O1xcbiAgICByaWdodDogMTZweDtcXG4gICAgYm90dG9tOiAxNnB4O1xcbiAgICB6LWluZGV4OiAxMDAwOyB9XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH1cXG4gIC5tb2RhbCAuYmFja2dyb3VuZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuICAubW9kYWwgLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH1cXG4gICAgLm1vZGFsIC5jb250ZW50IC5jbG9zZSB7XFxuICAgICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICAgICAgYmFja2dyb3VuZDogI2UyN2QxZTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAubW9kYWwuY2xvc2VkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuICAgIC5tb2RhbC5jbG9zZWQgLmJhY2tncm91bmQge1xcbiAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgLm1vZGFsLmNsb3NlZCAuY29udGVudCB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBMb2FkIHRoZSBqYXZhc2NyaXB0IG1haW5cclxuaW1wb3J0IFwiLi9qcy9tYWluXCI7XHJcbmltcG9ydCBcIi4vdHMvXCI7XHJcblxyXG4vLyBMb2FkIHRoZSBTQVNTIG1haW5cclxuaW1wb3J0IFwiLi9zY3NzL2FwcC5zY3NzXCI7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcclxuICAgY29uc29sZS5sb2coXCJXZWJwYWNrIHRlbXBsYXRlIGxvYWRlZC5cIik7XHJcbn0pOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcInNjZW5lL1NjZW5lXCI7XHJcbmltcG9ydCB7IG5vdyB9IGZyb20gXCJ1dGlsL1RpbWVcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9JbnB1dFwiO1xyXG5pbXBvcnQgeyBQaHlzaWNzIH0gZnJvbSBcIi4vUGh5c2ljc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWV7ICAgXHJcbiAgIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICBcclxuICAgZml4ZWRVcGRhdGVUaW1lOiBudW1iZXIgPSAxIC8gNjA7XHJcbiAgIGludGVyVXBkYXRlVGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIHByaXZhdGUgcnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBwcml2YXRlIGFuaW1hdGlvbkZyYW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgc2NlbmU/OiBTY2VuZTtcclxuICAgZ3JhcGhpY3M6IEdyYXBoaWNzO1xyXG4gICBpbnB1dDogSW5wdXQ7XHJcbiAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KXtcclxuICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljcyhjYW52YXMpO1xyXG4gICAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0KGNhbnZhcyk7XHJcbiAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gdGhpcy51cGRhdGVTaXplKCkpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgfVxyXG5cclxuICAgcnVuKCl7XHJcbiAgICAgIGlmKHRoaXMucnVubmluZykgcmV0dXJuO1xyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZT8uaW5pdCh0aGlzKTtcclxuXHJcbiAgICAgIHRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xyXG4gICB9XHJcblxyXG4gICBzdG9wKCl7XHJcbiAgICAgIHRoaXMuX2NhbmNlbEFuaW1hdGlvbkZyYW1lKCk7XHJcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoKXtcclxuICAgICAgdGhpcy5fcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XHJcblxyXG4gICAgICBsZXQgbiA9IG5vdygpO1xyXG4gICAgICBsZXQgZGVsdGEgPSBuIC0gdGhpcy5jdXJyZW50VGltZTtcclxuICAgICAgdGhpcy5jdXJyZW50VGltZSA9IG47XHJcblxyXG4gICAgICBpZihkZWx0YSA+IDAuMSl7IGRlbHRhID0gMC4xOyB9XHJcblxyXG4gICAgICB0aGlzLmlucHV0LnBvbGwoKTtcclxuXHJcbiAgICAgIHRoaXMuaW50ZXJVcGRhdGVUaW1lICs9IGRlbHRhO1xyXG4gICAgICBcclxuICAgICAgLy8gVE9ETyBmaXggdGhlIGlzc3VlIHdoZXJlIHdlIGFyZSBsYWdnaW5nIGJlaGluZCFcclxuICAgICAgLy8gaWYgdGhlcmUgYXJlIHRvbyBtYW55IHVwZGF0ZXMgYXQgb25jZSBhbmQgd2UgY2FuJ3Qga2VlcCB1cCwgd2UgbmVlZCB0byBkdW1wIHNvbWUgZnJhbWVzXHJcbiAgICAgIC8vIGFuZCBzZW5kIGEgd2FybmluZy5cclxuICAgICAgd2hpbGUodGhpcy5pbnRlclVwZGF0ZVRpbWUgPiB0aGlzLmZpeGVkVXBkYXRlVGltZSl7XHJcbiAgICAgICAgIHRoaXMuaW50ZXJVcGRhdGVUaW1lIC09IHRoaXMuZml4ZWRVcGRhdGVUaW1lO1xyXG4gICAgICAgICB0aGlzLnNjZW5lPy5maXhlZFVwZGF0ZSh0aGlzLmZpeGVkVXBkYXRlVGltZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY2VuZT8udXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgIHRoaXMuZ3JhcGhpY3MucmVzZXQoKTtcclxuICAgICAgdGhpcy5ncmFwaGljcy5jbGVhclNjcmVlbigpO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZT8uZHJhdyh0aGlzLmdyYXBoaWNzKTtcclxuXHJcbiAgICAgIHRoaXMuaW5wdXQuZmx1c2goKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlU2l6ZSgpe1xyXG4gICAgICB0aGlzLmdyYXBoaWNzLnVwZGF0ZVNpemUoKTtcclxuICAgICAgdGhpcy5zY2VuZT8udXBkYXRlU2l6ZSgpO1xyXG4gICB9XHJcblxyXG4gICBfY2FuY2VsQW5pbWF0aW9uRnJhbWUoKXtcclxuICAgICAgY2FuY2VsQW5pbWF0aW9uRnJhbWUodGhpcy5hbmltYXRpb25GcmFtZSk7XHJcbiAgIH1cclxuXHJcbiAgIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKXtcclxuICAgICAgdGhpcy5hbmltYXRpb25GcmFtZSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuICAgfVxyXG59IiwiLy8gQ29udHJvbGxlciBtYXAhXHJcbmV4cG9ydCBjbGFzcyBHYW1lcGFkSW5wdXR7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQXhpc0xlZnRYID0gMDtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBeGlzTGVmdFkgPSAxO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEF4aXNSaWdodFggPSAyO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEF4aXNSaWdodFkgPSAzO1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25BID0gMDtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25CID0gMTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25YID0gMjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25ZID0gMztcclxuICAgXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uRHBhZFVwID0gMTI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uRHBhZERvd24gPSAxMztcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25EcGFkTGVmdCA9IDE0O1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkRwYWRSaWdodCA9IDE1O1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25MZWZ0QnVtcGVyID0gNDtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25SaWdodEJ1bXBlciA9IDU7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uTGVmdFRyaWdnZXIgPSA2O1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblJpZ2h0VHJpZ2dlciA9IDc7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbk1lbnUgPSA4O1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblN0YXJ0ID0gOTtcclxuXHJcbiAgIHByZXZpb3VzQnV0dG9uU3RhdGU6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICBidXR0b25TdGF0ZTogYm9vbGVhbltdID0gW107XHJcbiAgIFxyXG4gICBheGlzU3RhdGU6IG51bWJlcltdID0gW107XHJcblxyXG4gICBpbmRleDogbnVtYmVyO1xyXG5cclxuICAgZGVhZFpvbmU6IG51bWJlciA9IDAuMjtcclxuICAgZnVsbFpvbmU6IG51bWJlciA9IDAuNDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGluZGV4OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmluZGV4ID0gaW5kZXg7XHJcblxyXG4gICAgICBsZXQgZ2FtZXBhZCA9IHRoaXMuZ2V0TmF2aWdhdG9yR2FtZXBhZCgpITtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lcGFkLmJ1dHRvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICB0aGlzLnByZXZpb3VzQnV0dG9uU3RhdGUucHVzaChmYWxzZSk7XHJcbiAgICAgICAgIHRoaXMuYnV0dG9uU3RhdGUucHVzaChmYWxzZSk7XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWVwYWQuYXhlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMuYXhpc1N0YXRlLnB1c2goMCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgcG9sbCgpe1xyXG4gICAgICAvLyBTd2FwIHRoZSBvbGQgYW5kIHRoZSBuZXcgb25lLCBjb3B5IHRvIHRoZSBuZXdcclxuICAgICAgbGV0IHRlbXAgPSB0aGlzLnByZXZpb3VzQnV0dG9uU3RhdGU7XHJcbiAgICAgIHRoaXMucHJldmlvdXNCdXR0b25TdGF0ZSA9IHRoaXMuYnV0dG9uU3RhdGU7XHJcbiAgICAgIHRoaXMuYnV0dG9uU3RhdGUgPSB0ZW1wO1xyXG5cclxuICAgICAgbGV0IGdhbWVwYWQgPSB0aGlzLmdldE5hdmlnYXRvckdhbWVwYWQoKSE7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZXBhZC5idXR0b25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgdGhpcy5idXR0b25TdGF0ZVtpXSA9IGdhbWVwYWQuYnV0dG9uc1tpXS5wcmVzc2VkO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lcGFkLmF4ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICB0aGlzLmF4aXNTdGF0ZVtpXSA9IGdhbWVwYWQuYXhlc1tpXTtcclxuXHJcbiAgICAgICAgIGlmKE1hdGguYWJzKHRoaXMuYXhpc1N0YXRlW2ldKSA8IHRoaXMuZGVhZFpvbmUpIHRoaXMuYXhpc1N0YXRlW2ldID0gMDsgXHJcbiAgICAgICAgIGlmKE1hdGguYWJzKHRoaXMuYXhpc1N0YXRlW2ldKSA+IDEgLSB0aGlzLmZ1bGxab25lKSB0aGlzLmF4aXNTdGF0ZVtpXSA9IE1hdGguc2lnbih0aGlzLmF4aXNTdGF0ZVtpXSk7IFxyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGlzQnV0dG9uUHJlc3NlZChidXR0b25JbmRleDogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uU3RhdGVbYnV0dG9uSW5kZXhdICYmICF0aGlzLnByZXZpb3VzQnV0dG9uU3RhdGVbYnV0dG9uSW5kZXhdO1xyXG4gICB9XHJcbiAgIGlzQnV0dG9uRG93bihidXR0b25JbmRleDogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uU3RhdGVbYnV0dG9uSW5kZXhdO1xyXG4gICB9XHJcbiAgIGlzQnV0dG9uUmVsZWFzZWQoYnV0dG9uSW5kZXg6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiAhdGhpcy5idXR0b25TdGF0ZVtidXR0b25JbmRleF0gJiYgdGhpcy5wcmV2aW91c0J1dHRvblN0YXRlW2J1dHRvbkluZGV4XTtcclxuICAgfVxyXG5cclxuICAgZ2V0IGxlZnRBeGlzWCgpIHsgcmV0dXJuIHRoaXMuYXhpc1N0YXRlW0dhbWVwYWRJbnB1dC5BeGlzTGVmdFhdO31cclxuICAgZ2V0IGxlZnRBeGlzWSgpIHsgcmV0dXJuIHRoaXMuYXhpc1N0YXRlW0dhbWVwYWRJbnB1dC5BeGlzTGVmdFldO31cclxuICAgZ2V0IHJpZ2h0QXhpc1goKSB7IHJldHVybiB0aGlzLmF4aXNTdGF0ZVtHYW1lcGFkSW5wdXQuQXhpc1JpZ2h0WF07fVxyXG4gICBnZXQgcmlnaHRBeGlzWSgpIHsgcmV0dXJuIHRoaXMuYXhpc1N0YXRlW0dhbWVwYWRJbnB1dC5BeGlzUmlnaHRZXTt9XHJcblxyXG4gICBnZXROYXZpZ2F0b3JHYW1lcGFkKCl7XHJcbiAgICAgIGNvbnN0IHBhZHMgPSBuYXZpZ2F0b3IuZ2V0R2FtZXBhZHMoKTtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBwYWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgbGV0IHBhZCA9IHBhZHNbaV07XHJcbiAgICAgICAgIGlmKHBhZCA9PT0gbnVsbCkgY29udGludWU7XHJcbiAgICAgICAgIGlmKHBhZC5pbmRleCA9PT0gdGhpcy5pbmRleCkgcmV0dXJuIHBhZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgfVxyXG59XHJcblxyXG50eXBlIEtleSA9IHN0cmluZztcclxudHlwZSBNb3VzZUJ1dHRvbiA9IG51bWJlcjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlib2FyZHtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlFbnRlciA6IEtleSA9IFwiRW50ZXJcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlUYWIgOiBLZXkgPSBcIlRhYlwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleVNwYWNlIDogS2V5ID0gXCIgXCI7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUMgOiBLZXkgPSBcImNcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlYIDogS2V5ID0gXCJ4XCI7XHJcbiAgIFxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUEgOiBLZXkgPSBcImFcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlEIDogS2V5ID0gXCJkXCI7XHJcbiAgIFxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUNvbW1hIDogS2V5ID0gXCIsXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5UGVyaW9kIDogS2V5ID0gXCIuXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5U2xhc2ggOiBLZXkgPSBcIi9cIjtcclxuICAgXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QXJyb3dVcCA6IEtleSA9IFwiQXJyb3dVcFwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUFycm93RG93biA6IEtleSA9IFwiQXJyb3dEb3duXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QXJyb3dMZWZ0IDogS2V5ID0gXCJBcnJvd0xlZnRcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlBcnJvd1JpZ2h0IDogS2V5ID0gXCJBcnJvd1JpZ2h0XCI7XHJcblxyXG4gICBkb3duS2V5czogU2V0PEtleT47XHJcbiAgIHByZXNzZWRLZXlzOiBTZXQ8S2V5PjtcclxuICAgcmVsZWFzZWRLZXlzOiBTZXQ8S2V5PjtcclxuXHJcbiAgIHJvb3Q/OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHJvb3Q/OiBIVE1MRWxlbWVudCl7XHJcbiAgICAgIHRoaXMuZG93bktleXMgPSBuZXcgU2V0PEtleT4oKTtcclxuICAgICAgdGhpcy5wcmVzc2VkS2V5cyA9IG5ldyBTZXQ8S2V5PigpO1xyXG4gICAgICB0aGlzLnJlbGVhc2VkS2V5cyA9IG5ldyBTZXQ8S2V5PigpO1xyXG5cclxuICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuICAgICAgdGhpcy5yb290ID0gZG9jdW1lbnQuYm9keTsgLy8gRnVja1xyXG4gICAgICB0aGlzLnJvb3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGV2ZW50ID0+IHtcclxuICAgICAgICAgaWYoZXZlbnQucmVwZWF0KSByZXR1cm47XHJcblxyXG4gICAgICAgICB0aGlzLnByZXNzZWRLZXlzLmFkZChldmVudC5rZXkpO1xyXG4gICAgICAgICB0aGlzLmRvd25LZXlzLmFkZChldmVudC5rZXkpO1xyXG4gICAgICB9KTtcclxuICAgICAgdGhpcy5yb290Py5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZXZlbnQgPT57XHJcbiAgICAgICAgIGlmKGV2ZW50LnJlcGVhdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgdGhpcy5yZWxlYXNlZEtleXMuYWRkKGV2ZW50LmtleSk7XHJcbiAgICAgICAgIHRoaXMuZG93bktleXMuZGVsZXRlKGV2ZW50LmtleSk7XHJcbiAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBmbHVzaCgpe1xyXG4gICAgICB0aGlzLnByZXNzZWRLZXlzLmNsZWFyKCk7XHJcbiAgICAgIHRoaXMucmVsZWFzZWRLZXlzLmNsZWFyKCk7XHJcbiAgIH1cclxuXHJcbiAgIGlzS2V5RG93bihrZXk6IEtleSl7XHJcbiAgICAgIHJldHVybiB0aGlzLmRvd25LZXlzLmhhcyhrZXkpO1xyXG4gICB9XHJcbiAgIGlzS2V5UHJlc3NlZChrZXk6IEtleSl7XHJcbiAgICAgIHJldHVybiB0aGlzLnByZXNzZWRLZXlzLmhhcyhrZXkpO1xyXG4gICB9XHJcbiAgIGlzS2V5UmVsZWFzZWQoa2V5OiBLZXkpe1xyXG4gICAgICByZXR1cm4gdGhpcy5yZWxlYXNlZEtleXMuaGFzKGtleSk7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdXNle1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkxlZnQgOiBNb3VzZUJ1dHRvbiA9IDA7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uTWlkZGxlIDogTW91c2VCdXR0b24gPSAxO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblJpZ2h0IDogTW91c2VCdXR0b24gPSAyO1xyXG5cclxuICAgYnV0dG9uczogYm9vbGVhbltdO1xyXG4gICBidXR0b25zUHJlc3NlZDogYm9vbGVhbltdO1xyXG4gICBidXR0b25zUmVsZWFzZWQ6IGJvb2xlYW5bXTtcclxuXHJcbiAgIHg6IG51bWJlcjtcclxuICAgeTogbnVtYmVyO1xyXG4gICBwcmV2aW91c1g6IG51bWJlcjtcclxuICAgcHJldmlvdXNZOiBudW1iZXI7XHJcblxyXG4gICByb290OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHJvb3Q6IEhUTUxFbGVtZW50KXtcclxuICAgICAgdGhpcy5idXR0b25zID0gbmV3IEFycmF5KDEwKTtcclxuICAgICAgdGhpcy5idXR0b25zUHJlc3NlZCA9IG5ldyBBcnJheSgxMCk7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1JlbGVhc2VkID0gbmV3IEFycmF5KDEwKTtcclxuXHJcbiAgICAgIHRoaXMuYnV0dG9ucy5maWxsKGZhbHNlKTtcclxuICAgICAgdGhpcy5idXR0b25zUHJlc3NlZC5maWxsKGZhbHNlKTtcclxuICAgICAgdGhpcy5idXR0b25zUmVsZWFzZWQuZmlsbChmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLnJvb3QgPSByb290O1xyXG5cclxuICAgICAgdGhpcy54ID0gMDtcclxuICAgICAgdGhpcy55ID0gMDtcclxuICAgICAgdGhpcy5wcmV2aW91c1ggPSAwO1xyXG4gICAgICB0aGlzLnByZXZpb3VzWSA9IDA7XHJcblxyXG4gICAgICBjb25zb2xlLmRpcihyb290KTtcclxuXHJcbiAgICAgIHJvb3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZW1vdmVcIiwgdGhpcy5vbk1vdXNlTW92ZS5iaW5kKHRoaXMpKTtcclxuICAgICAgcm9vdD8uYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZG93blwiLCB0aGlzLm9uTW91c2VEb3duLmJpbmQodGhpcykpO1xyXG4gICAgICByb290Py5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm9uTW91c2VVcC5iaW5kKHRoaXMpKTtcclxuICAgfVxyXG5cclxuICAgcHJpdmF0ZSBvbk1vdXNlTW92ZShldmVudDogTW91c2VFdmVudCl7XHJcbiAgICAgIHRoaXMueCA9IGV2ZW50Lm9mZnNldFggLyB0aGlzLnJvb3Qub2Zmc2V0V2lkdGg7XHJcbiAgICAgIHRoaXMueSA9IGV2ZW50Lm9mZnNldFkgLyB0aGlzLnJvb3Qub2Zmc2V0V2lkdGg7XHJcbiAgIH1cclxuICAgcHJpdmF0ZSBvbk1vdXNlRG93bihldmVudDogTW91c2VFdmVudCl7XHJcbiAgICAgIHRoaXMub25Nb3VzZU1vdmUoZXZlbnQpO1xyXG4gICAgICB0aGlzLmJ1dHRvbnNbZXZlbnQuYnV0dG9uXSA9IHRydWU7XHJcbiAgICAgIHRoaXMuYnV0dG9uc1ByZXNzZWRbZXZlbnQuYnV0dG9uXSA9IHRydWU7XHJcbiAgIH1cclxuICAgcHJpdmF0ZSBvbk1vdXNlVXAoZXZlbnQ6IE1vdXNlRXZlbnQpe1xyXG4gICAgICB0aGlzLm9uTW91c2VNb3ZlKGV2ZW50KTtcclxuICAgICAgdGhpcy5idXR0b25zW2V2ZW50LmJ1dHRvbl0gPSBmYWxzZTtcclxuICAgICAgdGhpcy5idXR0b25zUmVsZWFzZWRbZXZlbnQuYnV0dG9uXSA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIGlzQnV0dG9uRG93bihidXR0b246IE1vdXNlQnV0dG9uKXtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uc1tidXR0b25dO1xyXG4gICB9XHJcbiAgIGlzQnV0dG9uUHJlc3NlZChidXR0b246IE1vdXNlQnV0dG9uKXtcclxuICAgICAgcmV0dXJuIHRoaXMuYnV0dG9uc1ByZXNzZWRbYnV0dG9uXTtcclxuICAgfVxyXG4gICBpc0J1dHRvblJlbGVhc2VkKGJ1dHRvbjogTW91c2VCdXR0b24pe1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25zUmVsZWFzZWRbYnV0dG9uXTtcclxuICAgfVxyXG5cclxuICAgZmx1c2goKXtcclxuICAgICAgdGhpcy5idXR0b25zUHJlc3NlZC5maWxsKGZhbHNlKTtcclxuICAgICAgdGhpcy5idXR0b25zUmVsZWFzZWQuZmlsbChmYWxzZSk7XHJcblxyXG4gICAgICB0aGlzLnByZXZpb3VzWCA9IHRoaXMueDtcclxuICAgICAgdGhpcy5wcmV2aW91c1kgPSB0aGlzLnk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBkZWx0YVgoKXtcclxuICAgICAgcmV0dXJuIHRoaXMueCAtIHRoaXMucHJldmlvdXNYO1xyXG4gICB9XHJcbiAgIGdldCBkZWx0YVkoKXtcclxuICAgICAgcmV0dXJuIHRoaXMueSAtIHRoaXMucHJldmlvdXNZO1xyXG4gICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXQge1xyXG4gICBnYW1lcGFkczogR2FtZXBhZElucHV0W107XHJcbiAgIGtleWJvYXJkOiBLZXlib2FyZDtcclxuICAgbW91c2U6IE1vdXNlO1xyXG5cclxuICAgcm9vdDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcihyb290OiBIVE1MRWxlbWVudCl7XHJcbiAgICAgIHRoaXMuZ2FtZXBhZHMgPSBbXTtcclxuICAgICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZChyb290KTtcclxuICAgICAgdGhpcy5tb3VzZSA9IG5ldyBNb3VzZShyb290KTtcclxuICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuXHJcbiAgICAgIC8vIFdlaXJkIGNvbnN0cnVjdGlvbiBidXQgdHlwZXNjcmlwdCBoYXRlcyBwcm9ncmVzcyBcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJnYW1lcGFkY29ubmVjdGVkXCIsIGV2ID0+IHtcclxuICAgICAgICAgbGV0IGV2ZW50ID0gZXYgYXMgR2FtZXBhZEV2ZW50O1xyXG5cclxuICAgICAgICAgY29uc29sZS5sb2coXCJHYW1lcGFkIGNvbm5lY3RlZC5cIik7XHJcblxyXG4gICAgICAgICB0aGlzLmdhbWVwYWRzLnB1c2gobmV3IEdhbWVwYWRJbnB1dChldmVudC5nYW1lcGFkLmluZGV4KSk7XHJcbiAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJnYW1lcGFkZGlzY29ubmVjdGVkXCIsIGV2ID0+IHtcclxuICAgICAgICAgbGV0IGV2ZW50ID0gZXYgYXMgR2FtZXBhZEV2ZW50O1xyXG5cclxuICAgICAgICAgY29uc29sZS5sb2coXCJHYW1lcGFkIGRpc2Nvbm5lY3RlZC5cIik7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVwYWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lcGFkc1tpXS5pbmRleCA9PT0gZXZlbnQuZ2FtZXBhZC5pbmRleCl7XHJcbiAgICAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKGluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgY29uc29sZS5sb2coXCJHYW1lcGFkIGZvdW5kLlwiKTtcclxuXHJcbiAgICAgICAgIHRoaXMuZ2FtZXBhZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBwb2xsKCl7XHJcbiAgICAgIHRoaXMuZ2FtZXBhZHMuZm9yRWFjaChwYWQgPT4gcGFkLnBvbGwoKSk7XHJcbiAgIH1cclxuICAgZmx1c2goKXtcclxuICAgICAgdGhpcy5rZXlib2FyZC5mbHVzaCgpO1xyXG4gICAgICB0aGlzLm1vdXNlLmZsdXNoKCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IHVuc3R1Y2sgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQ29sbGlzaW9uXCI7XHJcbmltcG9ydCB7IFRpbGVDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9UaWxlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRpbGVtYXBDb2xsaXNpb25MYXllciwgVGlsZW1hcFRpbGVMYXllciB9IGZyb20gXCJ0aWxlbWFwL1RpbGVNYXBcIjtcclxuaW1wb3J0IHsgQ3VydmUgfSBmcm9tIFwidXRpbC9DdXJ2ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoeXNpY3N7XHJcbiAgIGJvZGllczogUmlnaWRib2R5W107XHJcbiAgIGxheWVyczogVGlsZW1hcENvbGxpc2lvbkxheWVyW107XHJcblxyXG4gICBpbnRlcnBvbGF0ZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLmJvZGllcyA9IFtdO1xyXG4gICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICB9XHJcblxyXG4gICBhZGRCb2R5KGJvZHk6IFJpZ2lkYm9keSl7XHJcbiAgICAgIHRoaXMuYm9kaWVzLnB1c2goYm9keSk7XHJcbiAgIH1cclxuICAgcmVtb3ZlQm9keShib2R5OiBSaWdpZGJvZHkpe1xyXG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmJvZGllcy5pbmRleE9mKGJvZHkpO1xyXG5cclxuICAgICAgaWYoaW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmJvZGllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICB9XHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYodGhpcy5pbnRlcnBvbGF0ZSl7XHJcbiAgICAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gbW90aW9uIHByZWRpY3Rpb24gYW5kIHN0dWZmXHJcbiAgICAgICAgICAgIGxldCBmID0gYm9keS5nYW1lLmludGVyVXBkYXRlVGltZSAvIGJvZHkuZ2FtZS5maXhlZFVwZGF0ZVRpbWU7XHJcbiAgIFxyXG4gICAgICAgICAgICBib2R5LnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi54ID0gQ3VydmUubGVycChib2R5LnByZXZpb3VzUG9zaXRpb24ueCwgYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueCwgZik7XHJcbiAgICAgICAgICAgIGJvZHkudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLnkgPSBDdXJ2ZS5sZXJwKGJvZHkucHJldmlvdXNQb3NpdGlvbi55LCBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi55LCBmKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgICAgYm9keS50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24uc2V0KGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIC8vIFNldCB0aGUgcHJldmlvdXMgcG9zaXRpb25zXHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgIGJvZHkucHJldmlvdXNQb3NpdGlvbi54ID0gYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueDtcclxuICAgICAgICAgYm9keS5wcmV2aW91c1Bvc2l0aW9uLnkgPSBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi55O1xyXG5cclxuICAgICAgICAgYm9keS51bnN0dWNrRGlzdGFuY2Uuc2V0WmVybygpO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIE1vdmUgYWxsIHRoZSBib2RpZXNcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueCArPSBib2R5LnZlbG9jaXR5LnggKiBkZWx0YTtcclxuICAgICAgICAgYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueSArPSBib2R5LnZlbG9jaXR5LnkgKiBkZWx0YTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBVbnN0dWNrIGFsbCB0aGUgYm9kaWVzXHJcbiAgICAgIGxldCB0aWxlQ29sbGlkZXIgPSBuZXcgVGlsZUNvbGxpZGVyKCk7XHJcbiAgICAgIGxldCB0aWxlQUFCQiA9IG5ldyBBQUJCKCk7XHJcbiAgICAgIGxldCB0aWxlUG9zaXRpb24gPSBuZXcgVmVjdG9yMigpO1xyXG5cclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgaWYoYm9keS5raW5lbWF0aWMpIHJldHVybjtcclxuXHJcbiAgICAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICAgICBsZXQgYmJveCA9IGJvZHkuYm91bmRpbmdCb3g7XHJcblxyXG4gICAgICAgICAgICAvLyBHZXQgdGhlIEJCT1ggY29vcmRzXHJcbiAgICAgICAgICAgIGxldCBmcm9tWCA9IE1hdGguZmxvb3IoYmJveC5sZWZ0IC8gbGF5ZXIudGlsZW1hcC50aWxlV2lkdGgpO1xyXG4gICAgICAgICAgICBsZXQgdG9YID0gTWF0aC5mbG9vcihiYm94LnJpZ2h0IC8gbGF5ZXIudGlsZW1hcC50aWxlV2lkdGgpO1xyXG5cclxuICAgICAgICAgICAgbGV0IGZyb21ZID0gTWF0aC5mbG9vcihiYm94LnRvcCAvIGxheWVyLnRpbGVtYXAudGlsZUhlaWdodCk7XHJcbiAgICAgICAgICAgIGxldCB0b1kgPSBNYXRoLmZsb29yKGJib3guYm90dG9tIC8gbGF5ZXIudGlsZW1hcC50aWxlSGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IGZyb21YOyBpIDw9IHRvWDsgaSsrKXtcclxuICAgICAgICAgICAgICAgZm9yKGxldCBqID0gZnJvbVk7IGogPD0gdG9ZOyBqKyspe1xyXG4gICAgICAgICAgICAgICAgICBpZighbGF5ZXIuaXNUaWxlU29saWQoaSwgaikpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGlsZVBvc2l0aW9uLnggPSBpICogbGF5ZXIudGlsZW1hcC50aWxlV2lkdGg7XHJcbiAgICAgICAgICAgICAgICAgIHRpbGVQb3NpdGlvbi55ID0gaiAqIGxheWVyLnRpbGVtYXAudGlsZUhlaWdodDtcclxuXHJcbiAgICAgICAgICAgICAgICAgIHRpbGVDb2xsaWRlciA9IGxheWVyLmdldFRpbGVDb2xsaWRlcihpLCBqLCB0aWxlQ29sbGlkZXIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgdGlsZUFBQkIgPSB0aWxlQ29sbGlkZXIuZ2V0Qm91bmRzKHRpbGVQb3NpdGlvbiwgdGlsZUFBQkIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgaWYoIWJib3gub3ZlcmxhcHModGlsZUFBQkIpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGxldCB1bnN0dWNrRGlzdCA9IHVuc3R1Y2soXHJcbiAgICAgICAgICAgICAgICAgICAgIGJvZHkuY29sbGlkZXIsXHJcbiAgICAgICAgICAgICAgICAgICAgIHRpbGVDb2xsaWRlcixcclxuICAgICAgICAgICAgICAgICAgICAgdGlsZVBvc2l0aW9uLnN1Yihib2R5LnRyYW5zZm9ybS5wb3NpdGlvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgIGJvZHkudmVsb2NpdHlcclxuICAgICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgIGlmKHVuc3R1Y2tEaXN0ICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICAgICBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi5hZGQodW5zdHVja0Rpc3QpO1xyXG4gICAgICAgICAgICAgICAgICAgICBib2R5LnVuc3R1Y2tEaXN0YW5jZS5hZGQodW5zdHVja0Rpc3QpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAvLyB0aGlzLnBlcmZvcm1Db2xsaXNpb24oYm9keSwgYmJveCwgdGlsZUFBQkIpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVE9ETyBicm9hZHBoYXNlIG5hcnJvdyBwaGFzZSBzdHVmZiA6KVxyXG4gICAgICAvLyBNYXliZSBzdGFydCB3aXRoIHN3ZWVwIGFuZCBwcnVuZVxyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBpZihib2R5LnNvbGlkKSByZXR1cm47XHJcbiAgICAgICAgIGlmKGJvZHkua2luZW1hdGljKSByZXR1cm47XHJcblxyXG4gICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKG90aGVyID0+IHtcclxuICAgICAgICAgICAgaWYoIW90aGVyLnNvbGlkKSByZXR1cm47XHJcbiAgIFxyXG4gICAgICAgICAgICBsZXQgYmJveCA9IGJvZHkuYm91bmRpbmdCb3g7XHJcbiAgICAgICAgICAgIGxldCBvdGhlcmJib3ggPSBvdGhlci5ib3VuZGluZ0JveDtcclxuXHJcbiAgICAgICAgICAgIGlmKCFiYm94Lm92ZXJsYXBzKG90aGVyYmJveCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCB1bnN0dWNrRGlzdCA9IHVuc3R1Y2soXHJcbiAgICAgICAgICAgICAgIGJvZHkuY29sbGlkZXIsXHJcbiAgICAgICAgICAgICAgIG90aGVyLmNvbGxpZGVyLFxyXG4gICAgICAgICAgICAgICBvdGhlci50cmFuc2Zvcm0ucG9zaXRpb24uY2xvbmUoKS5zdWIoYm9keS50cmFuc2Zvcm0ucG9zaXRpb24pLFxyXG4gICAgICAgICAgICAgICBib2R5LnZlbG9jaXR5KTsgLy8gVE9ETyByZWxhdGl2ZSB2ZWxvY2l0eVxyXG5cclxuICAgICAgICAgICAgaWYodW5zdHVja0Rpc3QgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgICAgICAgIGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLmFkZCh1bnN0dWNrRGlzdCk7XHJcbiAgICAgICAgICAgICAgIGJvZHkudW5zdHVja0Rpc3RhbmNlLmFkZCh1bnN0dWNrRGlzdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcblxyXG4gICAgICAgICBib2R5LmNvbGxpZGVkQm90dG9tID0gYm9keS51bnN0dWNrRGlzdGFuY2UueSA8IDA7XHJcbiAgICAgICAgIGJvZHkuY29sbGlkZWRUb3AgPSBib2R5LnVuc3R1Y2tEaXN0YW5jZS55ID4gMDtcclxuXHJcbiAgICAgICAgIGJvZHkuY29sbGlkZWRMZWZ0ID0gYm9keS51bnN0dWNrRGlzdGFuY2UueCA+IDA7XHJcbiAgICAgICAgIGJvZHkuY29sbGlkZWRSaWdodCA9IGJvZHkudW5zdHVja0Rpc3RhbmNlLnggPCAwO1xyXG5cclxuICAgICAgICAgaWYoYm9keS5jb2xsaWRlZExlZnQgfHwgYm9keS5jb2xsaWRlZFJpZ2h0KXtcclxuICAgICAgICAgICAgYm9keS52ZWxvY2l0eS54ID0gLWJvZHkudmVsb2NpdHkueCAqIGJvZHkuYm91bmN5bmVzcztcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihib2R5LmNvbGxpZGVkQm90dG9tIHx8IGJvZHkuY29sbGlkZWRUb3Ape1xyXG4gICAgICAgICAgICBib2R5LnZlbG9jaXR5LnkgPSAtYm9keS52ZWxvY2l0eS55ICogYm9keS5ib3VuY3luZXNzO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQSBsaXR0bGUgbW9yZSBvcHRpbWl6ZWQgYnV0IHN0aWxsIHJlYWxseSBmdWNraW5nIHN0dXBpZCA6KVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBsZXQgYm9keSA9IHRoaXMuYm9kaWVzW2ldO1xyXG5cclxuICAgICAgICAgbGV0IGJib3ggPSBib2R5LmJvdW5kaW5nQm94O1xyXG5cclxuICAgICAgICAgaWYoIWJvZHkudXNlRHluYW1pY0NvbGxpc2lvbnMpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgZm9yKGxldCBqID0gaSArIDE7IGogPCB0aGlzLmJvZGllcy5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgIGxldCBvdGhlciA9IHRoaXMuYm9kaWVzW2pdO1xyXG5cclxuICAgICAgICAgICAgaWYoIW90aGVyLnVzZUR5bmFtaWNDb2xsaXNpb25zKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKGJib3gub3ZlcmxhcHMob3RoZXIuYm91bmRpbmdCb3gpKXtcclxuICAgICAgICAgICAgICAgYm9keS5vbkNvbGxpc2lvbi5lbWl0KG90aGVyKTtcclxuICAgICAgICAgICAgICAgb3RoZXIub25Db2xsaXNpb24uZW1pdChib2R5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZHJhd0RlYnVnKGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIHJldHVybjtcclxuICAgICAgXHJcbiAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICBsYXllci5kcmF3RGVidWcoZ3JhcGhpY3MsIGxheWVyLnRpbGVtYXAudGlsZVdpZHRoLCBsYXllci50aWxlbWFwLnRpbGVIZWlnaHQsIG5ldyBBQUJCKDAsIDAsIDEwMDAsIDEwMDApKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcihcInJnYmEoMjU1LDAsMCwgMC42KVwiKTtcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgaWYoIWJvZHkuc29saWQpIHJldHVybjtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGdyYXBoaWNzLmRyYXdBQUJCKGJvZHkuYm91bmRpbmdCb3gsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcihcInJnYmEoMCwyNTUsMCwgMC42KVwiKTtcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgaWYoYm9keS5zb2xpZCkgcmV0dXJuO1xyXG4gICAgICAgICBsZXQgY29sbGlkZXIgPSBib2R5LmJvdW5kaW5nQm94O1xyXG4gICAgICAgICBcclxuICAgICAgICAgZ3JhcGhpY3MuZHJhd0FBQkIoY29sbGlkZXIsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgXHJcbiAgICAgIGdyYXBoaWNzLnNldENvbG9yKFwicmdiYSgwLDAsMjU1LCAwLjYpXCIpO1xyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBsZXQgdHJhbnNmb3JtID0gYm9keS50cmFuc2Zvcm07XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKFxyXG4gICAgICAgICAgICB0cmFuc2Zvcm0ucG9zaXRpb24ueCAtIDEsIHRyYW5zZm9ybS5wb3NpdGlvbi55IC0gMSxcclxuICAgICAgICAgICAgMiwgMiwgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICByZXR1cm47XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL1Nwcml0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGlvbntcclxuICAgZnJhbWVSYXRlOiBudW1iZXIgPSAxMjtcclxuICAgXHJcbiAgIHByaXZhdGUgc3ByaXRlczogU3ByaXRlW10gPSBbXTtcclxuICAgcHJpdmF0ZSBfaW5kZXg6IG51bWJlciA9IDA7XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIC8vIFRPRE8gY2FwIHRoZSBfaW5kZXggdmFyaWFibGVcclxuICAgICAgdGhpcy5faW5kZXggKz0gZGVsdGEgKiB0aGlzLmZyYW1lUmF0ZTtcclxuICAgfVxyXG5cclxuICAgYWRkRnJhbWUoc3ByaXRlOiBTcHJpdGUpe1xyXG4gICAgICB0aGlzLnNwcml0ZXMucHVzaChzcHJpdGUpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgY2VudGVyKCl7XHJcbiAgICAgIHRoaXMuc3ByaXRlcy5mb3JFYWNoKHNwcml0ZSA9PiBzcHJpdGUuY2VudGVyKCkpO1xyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgZ2V0IGluZGV4KCl7XHJcbiAgICAgIHJldHVybiB0aGlzLl9pbmRleCAlIHRoaXMuZnJhbWVzO1xyXG4gICB9XHJcbiAgIGdldCBmcmFtZXMoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlcy5sZW5ndGg7XHJcbiAgIH1cclxuICAgZ2V0IGZyYW1lKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLnNwcml0ZXNbTWF0aC5mbG9vcih0aGlzLmluZGV4KV07XHJcbiAgIH1cclxuXHJcbiAgIGNsb25lKCl7XHJcbiAgICAgIGxldCBhID0gIG5ldyBBbmltYXRpb24oKTtcclxuICAgICAgXHJcbiAgICAgIGEuX2luZGV4ID0gdGhpcy5faW5kZXg7XHJcbiAgICAgIGEuZnJhbWVSYXRlID0gdGhpcy5mcmFtZVJhdGU7XHJcbiAgICAgIGEuc3ByaXRlcyA9IHRoaXMuc3ByaXRlcztcclxuXHJcbiAgICAgIHJldHVybiBhO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbWVyYXtcclxuICAgY2VudGVyOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoNjQwIC8gMiwgMzYwIC8gMik7XHJcblxyXG4gICAvLyBUT0RPIHRoaXMgc2hvdWxkbid0IGJlIGRlZmluZWQgbGlrZSB0aGlzLCBiZWNhdXNlIHRoaXMgZGVwZW5kcyBvbiB0aGUgc2NyZWVuIGFzcGVjdCByYXRpby4uLlxyXG4gICB3aWR0aDogbnVtYmVyID0gNjQwO1xyXG4gICBoZWlnaHQ6IG51bWJlciA9IDM2MDtcclxuXHJcbiAgIGdldEJvdW5kcyhhYWJiPzogQUFCQil7XHJcbiAgICAgIGlmKGFhYmIgPT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgIGFhYmIgPSBuZXcgQUFCQigpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYWFiYi5zZXQoXHJcbiAgICAgICAgIHRoaXMuY2VudGVyLnggLSB0aGlzLndpZHRoIC8gMixcclxuICAgICAgICAgdGhpcy5jZW50ZXIueSAtIHRoaXMuaGVpZ2h0IC8gMixcclxuICAgICAgICAgdGhpcy5jZW50ZXIueCArIHRoaXMud2lkdGggLyAyLFxyXG4gICAgICAgICB0aGlzLmNlbnRlci55ICsgdGhpcy5oZWlnaHQgLyAyXHJcbiAgICAgICk7XHJcbiAgIH1cclxuXHJcbiAgIHNjcmVlblRvV29ybGRYKHg6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB4ICogdGhpcy53aWR0aCArIHRoaXMuY2VudGVyLnggLSB0aGlzLndpZHRoIC8gMjtcclxuICAgfVxyXG4gICAvLyBzY3JlZW5Ub1dvcmxkWSh5OiBudW1iZXIpe1xyXG4gICAvLyAgICByZXR1cm4geSAqIHRoaXMuaGVpZ2h0ICsgdGhpcy5jZW50ZXIueSAtIHRoaXMuaGVpZ2h0IC8gMjtcclxuICAgLy8gfVxyXG4gICBzY3JlZW5Ub1dvcmxkWSh5OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4geSAqIHRoaXMud2lkdGggKyB0aGlzLmNlbnRlci55IC0gdGhpcy53aWR0aCAvIDI7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCIuL0NhbWVyYVwiO1xyXG5pbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9TcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHcmFwaGljc3tcclxuICAgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgY29udGV4dDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEO1xyXG4gICBjb2xvcjogc3RyaW5nID0gXCJ3aGl0ZVwiO1xyXG5cclxuICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCl7XHJcbiAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG4gICAgICB0aGlzLmNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dChcIjJkXCIpITtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlU2l6ZSgpO1xyXG4gICB9XHJcblxyXG4gICByZXNldCgpe1xyXG4gICAgICB0aGlzLmNvbnRleHQucmVzZXRUcmFuc2Zvcm0oKTtcclxuICAgfVxyXG5cclxuICAgY2xlYXJTY3JlZW4oKXtcclxuICAgICAgdGhpcy5jbGVhcigwLCAwLCB0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuICAgfVxyXG5cclxuICAgY2xlYXIoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKXtcclxuICAgICAgdGhpcy5jb250ZXh0LmNsZWFyUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgfVxyXG5cclxuICAgZHJhd1Nwcml0ZShzcHJpdGU6IFNwcml0ZSwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlWDogbnVtYmVyID0gMSwgc2NhbGVZOiBudW1iZXIgPSAxLCByb3RhdGlvbjogbnVtYmVyID0gMCl7XHJcbiAgICAgIHRoaXMuY29udGV4dC5zYXZlKCk7XHJcblxyXG4gICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKHgsIHkpO1xyXG4gICAgICB0aGlzLmNvbnRleHQuc2NhbGUoc2NhbGVYLCBzY2FsZVkpO1xyXG4gICAgICB0aGlzLmNvbnRleHQucm90YXRlKHJvdGF0aW9uKTtcclxuXHJcbiAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2Uoc3ByaXRlLmltYWdlLCBcclxuICAgICAgICAgc3ByaXRlLnNvdXJjZVgsIHNwcml0ZS5zb3VyY2VZLCBzcHJpdGUuc291cmNlV2lkdGgsIHNwcml0ZS5zb3VyY2VIZWlnaHQsXHJcbiAgICAgICAgIC0gc3ByaXRlLm9mZnNldFgsIC0gc3ByaXRlLm9mZnNldFksIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodCk7XHJcblxyXG4gICAgICB0aGlzLmNvbnRleHQucmVzdG9yZSgpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3U3ByaXRlU2ltcGxlKHNwcml0ZTogU3ByaXRlLCB4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY29udGV4dC5kcmF3SW1hZ2Uoc3ByaXRlLmltYWdlLCBcclxuICAgICAgICAgc3ByaXRlLnNvdXJjZVgsIHNwcml0ZS5zb3VyY2VZLCBzcHJpdGUuc291cmNlV2lkdGgsIHNwcml0ZS5zb3VyY2VIZWlnaHQsXHJcbiAgICAgICAgIHggLSBzcHJpdGUub2Zmc2V0WCwgeSAtIHNwcml0ZS5vZmZzZXRZLCBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHQpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3UmVjdGFuZ2xlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgZmlsbDogYm9vbGVhbil7XHJcbiAgICAgIGlmKGZpbGwpe1xyXG4gICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxSZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuY29udGV4dC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgIHRoaXMuY29udGV4dC5yZWN0KHgsIHksIHcsIGgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdBQUJCKGFhYmI6IEFBQkIsIGZpbGw6IGJvb2xlYW4pe1xyXG4gICAgICB0aGlzLmRyYXdSZWN0YW5nbGUoYWFiYi5sZWZ0LCBhYWJiLnRvcCwgYWFiYi53aWR0aCwgYWFiYi5oZWlnaHQsIGZpbGwpO1xyXG4gICB9XHJcblxyXG4gICBzZXRDYW1lcmEoY2FtZXJhOiBDYW1lcmEpe1xyXG4gICAgICB0aGlzLmNvbnRleHQucmVzZXRUcmFuc2Zvcm0oKTtcclxuXHJcbiAgICAgIGxldCBjYW1lcmFIZWlnaHQgPSBjYW1lcmEuaGVpZ2h0O1xyXG4gICAgICBsZXQgY2FtZXJhV2lkdGggPSBjYW1lcmEud2lkdGg7Ly90aGlzLmNhbnZhcy53aWR0aCAvIHRoaXMuY2FudmFzLmhlaWdodCAqIGNhbWVyYUhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMuY29udGV4dC5zY2FsZSgxIC8gY2FtZXJhV2lkdGgsIDEgLyBjYW1lcmFIZWlnaHQpO1xyXG4gICAgICB0aGlzLmNvbnRleHQuc2NhbGUodGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcblxyXG4gICAgICB0aGlzLmNvbnRleHQudHJhbnNsYXRlKC0oY2FtZXJhLmNlbnRlci54IC0gY2FtZXJhV2lkdGggLyAyKSwgLShjYW1lcmEuY2VudGVyLnkgLSBjYW1lcmFIZWlnaHQgLyAyKSk7XHJcbiAgIH1cclxuXHJcbiAgIHNldENvbG9yKGNvbG9yOiBzdHJpbmcpe1xyXG4gICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgIH1cclxuICAgZ2V0Q29sb3IoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuY29sb3I7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZVNpemUoKXtcclxuICAgICAgdGhpcy5jYW52YXMud2lkdGggPSB0aGlzLmNhbnZhcy5vZmZzZXRXaWR0aDtcclxuICAgICAgdGhpcy5jYW52YXMuaGVpZ2h0ID0gdGhpcy5jYW52YXMub2Zmc2V0SGVpZ2h0O1xyXG4gICAgICB0aGlzLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdFbmFibGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuY29udGV4dC5pbWFnZVNtb290aGluZ1F1YWxpdHkgPSBcImxvd1wiO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiLi9BbmltYXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGV7XHJcbiAgIGltYWdlOiBDYW52YXNJbWFnZVNvdXJjZTtcclxuXHJcbiAgIG9mZnNldFg6IG51bWJlciA9IDA7XHJcbiAgIG9mZnNldFk6IG51bWJlciA9IDA7XHJcblxyXG4gICBzb3VyY2VYOiBudW1iZXIgPSAwO1xyXG4gICBzb3VyY2VZOiBudW1iZXIgPSAwO1xyXG4gICBzb3VyY2VXaWR0aDogbnVtYmVyID0gMDtcclxuICAgc291cmNlSGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gICBcclxuICAgY29uc3RydWN0b3IoaW1hZ2U6IENhbnZhc0ltYWdlU291cmNlKXtcclxuICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG5cclxuICAgICAgdGhpcy5zb3VyY2VXaWR0aCA9IGltYWdlLndpZHRoIGFzIG51bWJlcjtcclxuICAgICAgdGhpcy5zb3VyY2VIZWlnaHQgPSBpbWFnZS5oZWlnaHQgYXMgbnVtYmVyO1xyXG4gICB9XHJcblxyXG4gICBnZXQgd2lkdGgoKSB7IHJldHVybiB0aGlzLnNvdXJjZVdpZHRoOyB9XHJcbiAgIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLnNvdXJjZUhlaWdodDsgfVxyXG5cclxuICAgY2VudGVyKCl7XHJcbiAgICAgIHRoaXMub2Zmc2V0WCA9IHRoaXMud2lkdGggLyAyO1xyXG4gICAgICB0aGlzLm9mZnNldFkgPSB0aGlzLmhlaWdodCAvIDI7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlU2hlZXR7XHJcbiAgIGltYWdlOiBDYW52YXNJbWFnZVNvdXJjZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGltYWdlOiBDYW52YXNJbWFnZVNvdXJjZSl7XHJcbiAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuICAgfVxyXG5cclxuICAgZ2V0U3ByaXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcil7XHJcbiAgICAgIGxldCBzcHJpdGUgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2UpO1xyXG5cclxuICAgICAgc3ByaXRlLnNvdXJjZVggPSB4O1xyXG4gICAgICBzcHJpdGUuc291cmNlWSA9IHk7XHJcbiAgICAgIHNwcml0ZS5zb3VyY2VXaWR0aCA9IHc7XHJcbiAgICAgIHNwcml0ZS5zb3VyY2VIZWlnaHQgPSBoO1xyXG5cclxuICAgICAgcmV0dXJuIHNwcml0ZTtcclxuICAgfVxyXG4gICBcclxuICAgZ2V0QW5pbWF0aW9uKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlciwgY291bnQ6IG51bWJlcil7XHJcbiAgICAgIGxldCBhbmltYXRpb24gPSBuZXcgQW5pbWF0aW9uKCk7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKyl7XHJcbiAgICAgICAgIGxldCBzcHJpdGUgPSBuZXcgU3ByaXRlKHRoaXMuaW1hZ2UpO1xyXG4gICBcclxuICAgICAgICAgc3ByaXRlLnNvdXJjZVggPSB4ICsgaSAqIHc7XHJcbiAgICAgICAgIHNwcml0ZS5zb3VyY2VZID0geTtcclxuICAgICAgICAgc3ByaXRlLnNvdXJjZVdpZHRoID0gdztcclxuICAgICAgICAgc3ByaXRlLnNvdXJjZUhlaWdodCA9IGg7XHJcblxyXG4gICAgICAgICBhbmltYXRpb24uYWRkRnJhbWUoc3ByaXRlKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGFuaW1hdGlvbjtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGZyb21IVE1MKGlkOiBzdHJpbmcpe1xyXG4gICAgICBsZXQgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKSBhcyBIVE1MSW1hZ2VFbGVtZW50O1xyXG5cclxuICAgICAgcmV0dXJuIG5ldyBTcHJpdGVTaGVldChlbGVtZW50KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBHYW1lcGFkSW5wdXQsIEtleWJvYXJkIH0gZnJvbSBcImVuZ2luZS9JbnB1dFwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiZ3JhcGhpY3MvQ2FtZXJhXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSwgU3ByaXRlU2hlZXQgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcbmltcG9ydCB7IENoZXN0R2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvQ2hlc3RHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IENvbGxpZGVyR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvQ29sbGlkZXJHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IExldmVsTWFuYWdlciB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvTGV2ZWxNYW5hZ2VyXCI7XHJcbmltcG9ydCB7IFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJGaW5pc2hHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllckdhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL1BsYXllckdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyU3Bhd25HYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJTcGF3bkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgU3Bpa2VzR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvU3Bpa2VzR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCJzY2VuZS9TY2VuZVwiO1xyXG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSBcInRpbGVtYXAvVGlsZU1hcFwiO1xyXG5pbXBvcnQgTGlzdCBmcm9tIFwidXRpbC9MaXN0XCI7XHJcblxyXG4vLyBGdWNrIHRoaXMgYnV0IHdoYXRldmVyXHJcbmZ1bmN0aW9uIGluaXRNb2RhbChlbGVtZW50OiBIVE1MRWxlbWVudCl7XHJcbiAgIGxldCBjbG9zZSA9IGVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jbG9zZVwiKTtcclxuXHJcbiAgIGNsb3NlPy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcclxuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiY2xvc2VkXCIpO1xyXG5cclxuICAgICAgLy8gWWVzIHRoaXMgbWFrZXMgYSBsb3Qgb2Ygc2Vuc2UgaGVyZSA6KVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlcXVlc3RGdWxsc2NyZWVuKCk7XHJcbiAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBpbml0TW9kYWxzKCl7XHJcbiAgIGxldCBtb2RhbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpO1xyXG5cclxuICAgbW9kYWxzLmZvckVhY2gobW9kYWwgPT4gaW5pdE1vZGFsKG1vZGFsIGFzIEhUTUxFbGVtZW50KSk7XHJcbn1cclxuXHJcbi8vIEluaXQgdGhlIGRhbW4gZ2FtZVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBhc3luYyAoKT0+e1xyXG4gICBpbml0TW9kYWxzKCk7XHJcblxyXG4gICBsZXQgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYW52YXNcIikgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICBsZXQgZ2FtZSA9IG5ldyBHYW1lKGNhbnZhcyk7XHJcbiAgIFxyXG4gICBsZXQgc2NlbmUgPSBuZXcgU2NlbmUoKTtcclxuXHJcbiAgIHNjZW5lLnRpbGVtYXAgPSBhd2FpdCBUaWxlTWFwLmZyb21UaWxlZE1hcERvd25sb2FkKFwiYXNzZXRzL2xldmVscy9sZXZlbDQuanNvblwiLCAob2JqKSA9PiB7XHJcbiAgICAgIGlmKG9iai50eXBlID09PSBcIkNvbGxpZGVyXCIgfHwgb2JqLnR5cGUgPT09IFwiUGxhdGZvcm1Db2xsaWRlclwiKXtcclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgQ29sbGlkZXJHYW1lT2JqZWN0KEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKG9iai50eXBlID09PSBcIkxldmVsTWFuYWdlclwiKXtcclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgTGV2ZWxNYW5hZ2VyKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKG9iai50eXBlID09PSBcIlBsYXllclNwYXduXCIpe1xyXG4gICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBQbGF5ZXJTcGF3bkdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSlcclxuICAgICAgfVxyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJDaGVja3BvaW50XCIpe1xyXG4gICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBQbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKVxyXG4gICAgICB9XHJcbiAgICAgIGlmKG9iai50eXBlID09PSBcIlBsYXllckZpbmlzaFwiKXtcclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgUGxheWVyRmluaXNoR2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKVxyXG4gICAgICB9XHJcbiAgICAgIGlmKG9iai50eXBlID09PSBcIkNoZXN0XCIpe1xyXG4gICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBDaGVzdEdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSk7XHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqLnR5cGUgPT09IFwiU3Bpa2VzXCIpe1xyXG4gICAgICAgICBsZXQgc3Bpa2VzID0gbmV3IFNwaWtlc0dhbWVPYmplY3QoXHJcbiAgICAgICAgICAgIEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSwgXHJcbiAgICAgICAgICAgIExpc3QuaGFzKG9iai5wcm9wZXJ0aWVzLCBwcm9wID0+IHsgcmV0dXJuIHByb3AubmFtZSA9PT0gXCJzaHJpbmtcIiAmJiBwcm9wLnZhbHVlID09PSB0cnVlOyB9KVxyXG4gICAgICAgICApO1xyXG5cclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChzcGlrZXMpO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG4gICBzY2VuZS5waHlzaWNzLmxheWVycyA9IHNjZW5lLnRpbGVtYXAuY29sbGlkZXJzO1xyXG4gICBcclxuICAgZ2FtZS5zY2VuZSA9IHNjZW5lO1xyXG5cclxuICAgZ2FtZS5ydW4oKTtcclxufSk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbmFsIH0gZnJvbSBcInNpZ25hbHMvU2lnbmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhbHRoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBoZWFsdGg6IG51bWJlciA9IDM7XHJcblxyXG4gICBvbkRhbWFnZTogU2lnbmFsPEhlYWx0aENvbXBvbmVudD4gPSBuZXcgU2lnbmFsPEhlYWx0aENvbXBvbmVudD4oKTtcclxuICAgb25EZWF0aDogU2lnbmFsPEhlYWx0aENvbXBvbmVudD4gPSBuZXcgU2lnbmFsPEhlYWx0aENvbXBvbmVudD4oKTtcclxuXHJcbiAgIGdldCBhbGl2ZSgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoID4gMDsgfVxyXG4gICBnZXQgZGVhZCgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoIDw9IDA7IH1cclxuXHJcbiAgIGRhbWFnZShhbW91bnQ6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcclxuXHJcbiAgICAgIHRoaXMub25EYW1hZ2UuZW1pdCh0aGlzKTtcclxuICAgICAgXHJcbiAgICAgIGlmKHRoaXMuZGVhZCl7XHJcbiAgICAgICAgIHRoaXMub25EZWF0aC5lbWl0KHRoaXMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInNjZW5lL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgU2lnbmFsIH0gZnJvbSBcInNpZ25hbHMvU2lnbmFsXCI7XHJcbmltcG9ydCB7IEludGVyYWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9JbnRlcmFjdG9yQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3RhYmxlQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBib2R5ITogUmlnaWRib2R5O1xyXG5cclxuICAgb25JbnRlcmFjdDogU2lnbmFsPEludGVyYWN0b3JDb21wb25lbnQ+O1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5vbkludGVyYWN0ID0gbmV3IFNpZ25hbDxJbnRlcmFjdG9yQ29tcG9uZW50PigpO1xyXG4gICB9XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBzdXBlci5pbml0KGdhbWUpO1xyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmdhbWVPYmplY3QuZmluZENvbXBvbmVudChjb21wb25lbnQgPT4gY29tcG9uZW50IGluc3RhbmNlb2YgUmlnaWRib2R5KSBhcyBSaWdpZGJvZHk7XHJcbiAgIH1cclxuXHJcbiAgIGludGVyYWN0KGludGVyYWN0b3I6IEludGVyYWN0b3JDb21wb25lbnQpe1xyXG4gICAgICB0aGlzLm9uSW50ZXJhY3QuZW1pdChpbnRlcmFjdG9yKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IGNhbkludGVyYWN0KCl7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcblxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGFibGVDb21wb25lbnQgfSBmcm9tIFwiLi9JbnRlcmFjdGFibGVDb21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdG9yQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBib2R5ITogUmlnaWRib2R5O1xyXG4gICBob3ZlcnM6IFNldDxJbnRlcmFjdGFibGVDb21wb25lbnQ+O1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgdGhpcy5ob3ZlcnMgPSBuZXcgU2V0PEludGVyYWN0YWJsZUNvbXBvbmVudD4oKTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoY29tcG9uZW50ID0+IGNvbXBvbmVudCBpbnN0YW5jZW9mIFJpZ2lkYm9keSkgYXMgUmlnaWRib2R5O1xyXG5cclxuICAgICAgdGhpcy5ib2R5Lm9uQ29sbGlzaW9uLmxpc3Rlbih0aGlzLm9uQ29sbGlzaW9uLmJpbmQodGhpcykpO1xyXG4gICB9XHJcblxyXG4gICBpbnRlcmFjdCgpe1xyXG4gICAgICB0aGlzLmhvdmVycy5mb3JFYWNoKGhvdmVyID0+IHtcclxuICAgICAgICAgaWYoaG92ZXIuY2FuSW50ZXJhY3Qpe1xyXG4gICAgICAgICAgICBob3Zlci5pbnRlcmFjdCh0aGlzKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBsZXQgcmVtb3ZlTGlzdDogSW50ZXJhY3RhYmxlQ29tcG9uZW50W10gPSBbXTtcclxuXHJcbiAgICAgIHRoaXMuaG92ZXJzLmZvckVhY2godmFsdWUgPT4ge1xyXG4gICAgICAgICAvLyBJZiBubyBsb25nZXIgY29sbGlkZXMhXHJcbiAgICAgICAgIGlmKCF2YWx1ZS5ib2R5LmNvbGxpZGVzKHRoaXMuYm9keSkpe1xyXG4gICAgICAgICAgICByZW1vdmVMaXN0LnB1c2godmFsdWUpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmVtb3ZlTGlzdC5mb3JFYWNoKGl0ZW0gPT4gdGhpcy5ob3ZlcnMuZGVsZXRlKGl0ZW0pKTtcclxuICAgfVxyXG5cclxuICAgb25Db2xsaXNpb24ob3RoZXI6IFJpZ2lkYm9keSl7XHJcbiAgICAgIGxldCBpbnRlcmFjdGlvbiA9IG90aGVyLmdhbWVPYmplY3QuZmluZENvbXBvbmVudChjb21wb25lbnQgPT4gY29tcG9uZW50IGluc3RhbmNlb2YgSW50ZXJhY3RhYmxlQ29tcG9uZW50KSBhcyBJbnRlcmFjdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICAgICB0aGlzLmhvdmVycy5hZGQoaW50ZXJhY3Rpb24pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lcGFkSW5wdXQsIEtleWJvYXJkIH0gZnJvbSBcImVuZ2luZS9JbnB1dFwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVySW5wdXRDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgIGRpcmVjdGlvbjogbnVtYmVyID0gMDtcclxuXHJcbiAgIGp1bXBQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGp1bXBEb3duOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBkYXNoUHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgaW50ZXJhY3RQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICBzdXBlcigpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuanVtcFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kYXNoUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmludGVyYWN0UHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmp1bXBEb3duID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuXHJcbiAgICAgIC8vIFRPRE8gYWN0dWFsbHkgc3dpdGNoIGJldHdlZW4gY29udHJvbGxlcnMgaW5zdGVhZCBvZiB0aGlzIGhhbGYgYmFrZWQgaGFsZiBhc3NlZCBzb2x1dGlvblxyXG4gICAgICB0aGlzLmdhbWUuaW5wdXQuZ2FtZXBhZHMuZm9yRWFjaChwYWQgPT4ge1xyXG4gICAgICAgICBpZihwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25BKSl7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKHBhZC5pc0J1dHRvblByZXNzZWQoR2FtZXBhZElucHV0LkJ1dHRvblgpKXtcclxuICAgICAgICAgICAgdGhpcy5pbnRlcmFjdFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKHBhZC5pc0J1dHRvblByZXNzZWQoR2FtZXBhZElucHV0LkJ1dHRvblJpZ2h0VHJpZ2dlcikpe1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihwYWQuaXNCdXR0b25Eb3duKEdhbWVwYWRJbnB1dC5CdXR0b25BKSl7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcERvd24gPSB0cnVlO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHBhZC5sZWZ0QXhpc1g7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlTcGFjZSkpIHRoaXMuanVtcFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlEb3duKEtleWJvYXJkLktleVNwYWNlKSkgdGhpcy5qdW1wRG93biA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5QykpIHRoaXMuZGFzaFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleVgpKSB0aGlzLmludGVyYWN0UHJlc3NlZCA9IHRydWU7XHJcblxyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlEb3duKEtleWJvYXJkLktleUFycm93TGVmdCkpIHRoaXMuZGlyZWN0aW9uID0gLTE7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleURvd24oS2V5Ym9hcmQuS2V5QXJyb3dSaWdodCkpIHRoaXMuZGlyZWN0aW9uID0gMTtcclxuICAgICAgXHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleURvd24oS2V5Ym9hcmQuS2V5QSkpIHRoaXMuZGlyZWN0aW9uID0gLTE7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleURvd24oS2V5Ym9hcmQuS2V5RCkpIHRoaXMuZGlyZWN0aW9uID0gMTtcclxuICAgICAgXHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5Q29tbWEpKSB0aGlzLmp1bXBQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5RG93bihLZXlib2FyZC5LZXlDb21tYSkpIHRoaXMuanVtcERvd24gPSB0cnVlO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleVBlcmlvZCkpIHRoaXMuZGFzaFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleVNsYXNoKSkgdGhpcy5pbnRlcmFjdFByZXNzZWQgPSB0cnVlO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZVNoZWV0IH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGFibGVDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSW50ZXJhY3RhYmxlQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEludGVyYWN0b3JDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSW50ZXJhY3RvckNvbXBvbmVudFwiO1xyXG5pbXBvcnQgUmVzb3VyY2VzIGZyb20gXCJpc2xhbmQvUmVzb3VyY2VzXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL0JveENvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2hlc3RHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuICAgaW50ZXJhY3RhYmxlOiBJbnRlcmFjdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICBjbG9zZWQ6IFNwcml0ZTtcclxuICAgb3BlbjogU3ByaXRlO1xyXG5cclxuICAgaXNPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uYXBwbHkoYWFiYi54LCBhYWJiLnkpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuICAgICAgdGhpcy5pbnRlcmFjdGFibGUgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgSW50ZXJhY3RhYmxlQ29tcG9uZW50KCkpO1xyXG5cclxuICAgICAgdGhpcy5pbnRlcmFjdGFibGUub25JbnRlcmFjdC5saXN0ZW4odGhpcy5vbkludGVyYWN0LmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LmNvbGxpZGVyID0gQm94Q29sbGlkZXIuZnJvbUFBQkIoYWFiYik7XHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmNsb3NlZCA9IFJlc291cmNlcy5zaGVldE9iamVjdHMuZ2V0U3ByaXRlKDAsIDY0LCAxNiwgMTYpO1xyXG4gICAgICB0aGlzLm9wZW4gPSBSZXNvdXJjZXMuc2hlZXRPYmplY3RzLmdldFNwcml0ZSgxNiwgNjQsIDE2LCAxNik7XHJcbiAgIH1cclxuXHJcbiAgIG9uSW50ZXJhY3QoaW50ZXJhY3RvcjogSW50ZXJhY3RvckNvbXBvbmVudCl7XHJcbiAgICAgIHRoaXMuaXNPcGVuID0gIXRoaXMuaXNPcGVuO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGVTaW1wbGUodGhpcy5pc09wZW4gPyB0aGlzLm9wZW4gOiB0aGlzLmNsb3NlZCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL0JveENvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlkZXJHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnNvbGlkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ib2R5LmNvbGxpZGVyID0gQm94Q29sbGlkZXIuZnJvbUFBQkIoYWFiYik7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR2FtZXBhZElucHV0LCBLZXlib2FyZCB9IGZyb20gXCJlbmdpbmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgSGVhbHRoQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0hlYWx0aENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwidXRpbC9UaW1lXCI7XHJcbmltcG9ydCB7IFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0IH0gZnJvbSBcIi4vUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyRmluaXNoR2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllckZpbmlzaEdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyR2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllckdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyU3Bhd25HYW1lT2JqZWN0IH0gZnJvbSBcIi4vUGxheWVyU3Bhd25HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxNYW5hZ2VyIGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgc3Bhd24/OiBQbGF5ZXJTcGF3bkdhbWVPYmplY3Q7XHJcbiAgIGZpbmlzaD86IFBsYXllckZpbmlzaEdhbWVPYmplY3Q7XHJcblxyXG4gICBwbGF5ZXI/OiBQbGF5ZXJHYW1lT2JqZWN0O1xyXG4gICBjaGVja3BvaW50czogUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3RbXTtcclxuXHJcbiAgIGN1cnJlbnRDaGVja3BvaW50PzogUGxheWVyQ2hlY2twb2ludEdhbWVPYmplY3Q7XHJcblxyXG4gICBydW5uaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGNvbXBsZXRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICB0aW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgZWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgIGZpbmFsVGltZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG4gICBiZXN0VGltZUVsZW1lbnQ6IEhUTUxFbGVtZW50O1xyXG5cclxuICAgYmVzdFRpbWU6IG51bWJlcnx1bmRlZmluZWQgPSB1bmRlZmluZWQ7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy5lbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5nYW1lLW92ZXJsYXlcIikgYXMgSFRNTEVsZW1lbnQ7XHJcbiAgICAgIHRoaXMuZmluYWxUaW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmluYWwtdGltZVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgdGhpcy5iZXN0VGltZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJlc3QtdGltZVwiKSBhcyBIVE1MRWxlbWVudDtcclxuXHJcbiAgICAgIHRoaXMuYWx3YXlzVXBkYXRlID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuY2hlY2twb2ludHMgPSBbXTtcclxuXHJcbiAgICAgIGxldCBidCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmVzdFRpbWVcIik7XHJcbiAgICAgIGlmKGJ0ICE9PSBudWxsKXtcclxuICAgICAgICAgdGhpcy5iZXN0VGltZSA9IHBhcnNlRmxvYXQoYnQpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcblxyXG4gICAgICB0aGlzLnNwYXduID0gdGhpcy5zY2VuZS5maW5kT2JqZWN0KG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXJTcGF3bkdhbWVPYmplY3QpIGFzIFBsYXllclNwYXduR2FtZU9iamVjdHx1bmRlZmluZWQ7XHJcbiAgICAgIHRoaXMuZmluaXNoID0gdGhpcy5zY2VuZS5maW5kT2JqZWN0KG9iamVjdCA9PiBvYmplY3QgaW5zdGFuY2VvZiBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0KSBhcyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0fHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIHRoaXMuZmluaXNoIS5pbnRlcmFjdGFibGUub25JbnRlcmFjdC5saXN0ZW4oaW50ZXJhY3RvciA9PiB7XHJcbiAgICAgICAgIGlmKGludGVyYWN0b3IuZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFBsYXllckdhbWVPYmplY3Qpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiB7XHJcbiAgICAgICAgIGlmKG9iaiBpbnN0YW5jZW9mIFBsYXllckNoZWNrcG9pbnRHYW1lT2JqZWN0KXtcclxuICAgICAgICAgICAgdGhpcy5jaGVja3BvaW50cy5wdXNoKG9iaik7XHJcblxyXG4gICAgICAgICAgICBvYmouaW50ZXJhY3RhYmxlLm9uSW50ZXJhY3QubGlzdGVuKGludGVyYWN0b3IgPT4ge1xyXG4gICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRDaGVja3BvaW50ID0gb2JqO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHN1cGVyLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICBpZih0aGlzLnJ1bm5pbmcpIHtcclxuICAgICAgICAgdGhpcy5nYW1lLmlucHV0LmdhbWVwYWRzLmZvckVhY2gocGFkID0+IHtcclxuICAgICAgICAgICAgaWYocGFkLmlzQnV0dG9uUHJlc3NlZChHYW1lcGFkSW5wdXQuQnV0dG9uWSkpe1xyXG4gICAgICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9KTtcclxuICAgXHJcbiAgICAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5RW50ZXIpKXtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmdhbWUuaW5wdXQuZ2FtZXBhZHMuZm9yRWFjaChwYWQgPT4ge1xyXG4gICAgICAgICAgICBpZihwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25BKSB8fCBwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25ZKSl7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICBcclxuICAgICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlFbnRlcikpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleUNvbW1hKSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5U3BhY2UpKXtcclxuICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy51cGRhdGVDYW1lcmEoZGVsdGEpO1xyXG4gICB9XHJcblxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgc3VwZXIuZml4ZWRVcGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgaWYodGhpcy5ydW5uaW5nKXtcclxuICAgICAgICAgdGhpcy50aW1lICs9IGRlbHRhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZighdGhpcy5wbGF5ZXI/LmhlYWx0aC5hbGl2ZSl7XHJcbiAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHN0b3AoKXtcclxuICAgICAgdGhpcy5zY2VuZS5yZW1vdmVHYW1lT2JqZWN0KHRoaXMucGxheWVyISk7XHJcblxyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuXHJcbiAgICAgIGlmKHRoaXMuY29tcGxldGVkICYmICh0aGlzLmJlc3RUaW1lID09PSB1bmRlZmluZWQgfHwgdGhpcy50aW1lIDwgdGhpcy5iZXN0VGltZSkpe1xyXG4gICAgICAgICB0aGlzLmJlc3RUaW1lID0gdGhpcy50aW1lO1xyXG4gICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImJlc3RUaW1lXCIsIFwiXCIgKyB0aGlzLmJlc3RUaW1lKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zeW5jKCk7XHJcbiAgIH1cclxuXHJcbiAgIHJlc3RhcnQoKXtcclxuICAgICAgaWYodGhpcy5zcGF3biA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLnN0b3AoKTtcclxuXHJcbiAgICAgIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMudGltZSA9IDA7XHJcbiAgICAgIHRoaXMucnVubmluZyA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLnBsYXllciA9IG5ldyBQbGF5ZXJHYW1lT2JqZWN0KCk7XHJcblxyXG4gICAgICBsZXQgcG9zaXRpb24gPSB0aGlzLnNwYXduLnRyYW5zZm9ybS5wb3NpdGlvbjtcclxuXHJcbiAgICAgIGlmKHRoaXMuY3VycmVudENoZWNrcG9pbnQgIT09IHVuZGVmaW5lZCl7XHJcbiAgICAgICAgIHBvc2l0aW9uID0gdGhpcy5jdXJyZW50Q2hlY2twb2ludC50cmFuc2Zvcm0ucG9zaXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMucGxheWVyLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQocG9zaXRpb24pO1xyXG4gICAgICB0aGlzLnBsYXllci50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24uc2V0KHBvc2l0aW9uKTtcclxuICAgICAgdGhpcy5wbGF5ZXIuYm9keS5wcmV2aW91c1Bvc2l0aW9uLnNldChwb3NpdGlvbik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnNjZW5lLmFkZEdhbWVPYmplY3QodGhpcy5wbGF5ZXIpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zeW5jKCk7XHJcbiAgIH1cclxuXHJcbiAgIHN5bmMoKXtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJnYW1lLW92ZXJcIiwgIXRoaXMucnVubmluZyk7XHJcbiAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKFwiY29tcGxldGVkXCIsIHRoaXMuY29tcGxldGVkKTtcclxuICAgICAgdGhpcy5maW5hbFRpbWVFbGVtZW50LmlubmVyVGV4dCA9IGZvcm1hdCh0aGlzLnRpbWUpO1xyXG5cclxuICAgICAgaWYodGhpcy5iZXN0VGltZSAhPT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgdGhpcy5iZXN0VGltZUVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KHRoaXMuYmVzdFRpbWUpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUNhbWVyYShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYoIXRoaXMucGxheWVyKSByZXR1cm47XHJcblxyXG4gICAgICBjb25zdCBwb3NpdGlvbiA9IHRoaXMucGxheWVyLnRyYW5zZm9ybS5wb3NpdGlvbjtcclxuXHJcbiAgICAgIGNvbnN0IHNjZW5lV2lkdGggPSB0aGlzLnNjZW5lLnRpbGVtYXAhLnBpeGVsV2lkdGg7XHJcbiAgICAgIGNvbnN0IHNjZW5lSGVpZ2h0ID0gdGhpcy5zY2VuZS50aWxlbWFwIS5waXhlbEhlaWdodDtcclxuXHJcbiAgICAgIGNvbnN0IHNjcmVlbldpZHRoID0gNDAgKiAxNjtcclxuICAgICAgY29uc3Qgc2NyZWVuSGVpZ2h0ID0gMjMgKiAxNjtcclxuXHJcbiAgICAgIGNvbnN0IGNhbSA9IHRoaXMuc2NlbmUuY2FtZXJhO1xyXG5cclxuICAgICAgY29uc3Qgc2NyZWVuSW5kZXhYID0gTWF0aC5mbG9vcihwb3NpdGlvbi54IC8gc2NyZWVuV2lkdGgpO1xyXG4gICAgICBjb25zdCBzY3JlZW5JbmRleFkgPSBNYXRoLmZsb29yKHBvc2l0aW9uLnkgLyBzY3JlZW5IZWlnaHQpO1xyXG5cclxuICAgICAgY29uc3Qgb2Zmc2V0WCA9IHNjcmVlbkluZGV4WCAqIHNjcmVlbldpZHRoO1xyXG4gICAgICBjb25zdCBvZmZzZXRZID0gc2NyZWVuSW5kZXhZICogc2NyZWVuSGVpZ2h0O1xyXG5cclxuICAgICAgbGV0IHdhbnRlZFBvc2l0aW9uID0gbmV3IFZlY3RvcjIoXHJcbiAgICAgICAgIG9mZnNldFggKyBzY3JlZW5XaWR0aCAvIDIsXHJcbiAgICAgICAgIG9mZnNldFkgKyBzY3JlZW5IZWlnaHQgLyAyLFxyXG4gICAgICApO1xyXG4gICAgICBcclxuICAgICAgLy8gQ2xhbXAgdGhlIHdhbnRlZCBwb3NpdGlvbiB0byB0aGUgc2NlbmUuLi4gTm90IGdyZWF0LCBmb3IgcmVhc29ucyAobGlrZSwgZWRnZSBjYXNlcywgYnV0IHdlIGRvbid0IGNhcmUgOikgKVxyXG4gICAgICBpZih3YW50ZWRQb3NpdGlvbi54IC0gY2FtLndpZHRoIC8gMiA8IDApIHdhbnRlZFBvc2l0aW9uLnggPSBjYW0ud2lkdGggLyAyO1xyXG4gICAgICBpZih3YW50ZWRQb3NpdGlvbi54ICsgY2FtLndpZHRoIC8gMiA+IHNjZW5lV2lkdGgpIHdhbnRlZFBvc2l0aW9uLnggPSBzY2VuZVdpZHRoIC0gY2FtLndpZHRoIC8gMjtcclxuXHJcbiAgICAgIGlmKHdhbnRlZFBvc2l0aW9uLnkgLSBjYW0uaGVpZ2h0IC8gMiA8IDApIHdhbnRlZFBvc2l0aW9uLnkgPSBjYW0uaGVpZ2h0IC8gMjtcclxuICAgICAgaWYod2FudGVkUG9zaXRpb24ueSArIGNhbS5oZWlnaHQgLyAyID4gc2NlbmVIZWlnaHQpIHdhbnRlZFBvc2l0aW9uLnkgPSBzY2VuZUhlaWdodCAtIGNhbS5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5wYXVzZWQgPSBWZWN0b3IyLmRpc3RhbmNlKHdhbnRlZFBvc2l0aW9uLCBjYW0uY2VudGVyKSA+IDE7XHJcblxyXG4gICAgICBjYW0uY2VudGVyLmxlcnBUbyh3YW50ZWRQb3NpdGlvbiwgZGVsdGEgKiAxMCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJncmFwaGljcy9BbmltYXRpb25cIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0YWJsZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdG9yQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0b3JDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL1Jlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJDaGVja3BvaW50R2FtZU9iamVjdCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcbiAgIGludGVyYWN0YWJsZTogSW50ZXJhY3RhYmxlQ29tcG9uZW50O1xyXG5cclxuICAgY3VycmVudEFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG5cclxuICAgY2xvc2VkQW5pbWF0aW9uOiBBbmltYXRpb247XHJcbiAgIG9wZW5BbmltYXRpb246IEFuaW1hdGlvbjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBJbnRlcmFjdGFibGVDb21wb25lbnQoKSk7XHJcblxyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZS5vbkludGVyYWN0Lmxpc3Rlbih0aGlzLm9uSW50ZXJhY3QuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAvLyBJbnRlcmFjdGFibGVzIGFuZCBzaGl0XHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG5cclxuICAgICAgdGhpcy5jbG9zZWRBbmltYXRpb24gPSBSZXNvdXJjZXMuc2hlZXRPYmplY3RzLmdldEFuaW1hdGlvbigwLCAxMTIsIDE2LCAxNiwgMSk7XHJcbiAgICAgIHRoaXMub3BlbkFuaW1hdGlvbiA9IFJlc291cmNlcy5zaGVldE9iamVjdHMuZ2V0QW5pbWF0aW9uKDE2LCAxMTIsIDE2LCAxNiwgNCk7XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLmNsb3NlZEFuaW1hdGlvbjtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24udXBkYXRlKGRlbHRhKTtcclxuICAgfVxyXG5cclxuICAgb25JbnRlcmFjdChpbnRlcmFjdG9yOiBJbnRlcmFjdG9yQ29tcG9uZW50KXtcclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5vcGVuQW5pbWF0aW9uO1xyXG4gICB9XHJcbiAgIFxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGVTaW1wbGUodGhpcy5jdXJyZW50QW5pbWF0aW9uLmZyYW1lLCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi55KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdGFibGVDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSW50ZXJhY3RhYmxlQ29tcG9uZW50XCI7XHJcbmltcG9ydCBSZXNvdXJjZXMgZnJvbSBcImlzbGFuZC9SZXNvdXJjZXNcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQm94Q29sbGlkZXIgfSBmcm9tIFwibWF0aC9jb2xsaXNpb24vQm94Q29sbGlkZXJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuICAgaW50ZXJhY3RhYmxlOiBJbnRlcmFjdGFibGVDb21wb25lbnQ7XHJcblxyXG4gICBzcHJpdGU6IFNwcml0ZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmludGVyYWN0YWJsZSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBJbnRlcmFjdGFibGVDb21wb25lbnQoKSk7XHJcblxyXG4gICAgICAvLyBJbnRlcmFjdGFibGVzIGFuZCBzaGl0XHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5zcHJpdGUgPSBSZXNvdXJjZXMuc2hlZXRPYmplY3RzLmdldFNwcml0ZSgxMTIsIDAsIDE2LCAxNik7XHJcbiAgIH1cclxuICAgXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZVNpbXBsZSh0aGlzLnNwcml0ZSwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IE1vdXNlIH0gZnJvbSBcImVuZ2luZS9JbnB1dFwiO1xyXG5pbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiZ3JhcGhpY3MvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSwgU3ByaXRlU2hlZXQgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcbmltcG9ydCB7IEhlYWx0aENvbXBvbmVudCB9IGZyb20gXCJpc2xhbmQvQ29tcG9uZW50cy9IZWFsdGhDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgSW50ZXJhY3RhYmxlQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0YWJsZUNvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBJbnRlcmFjdG9yQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0ludGVyYWN0b3JDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgUGxheWVySW5wdXRDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvUGxheWVySW5wdXRDb21wb25lbnRcIjtcclxuaW1wb3J0IFJlc291cmNlcyBmcm9tIFwiaXNsYW5kL1Jlc291cmNlc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllckdhbWVPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICBjdXJyZW50QW5pbWF0aW9uOiBBbmltYXRpb247XHJcblxyXG4gICBpZGxlQW5pbWF0aW9uOiBBbmltYXRpb247XHJcbiAgIHdhbGtBbmltYXRpb246IEFuaW1hdGlvbjtcclxuICAganVtcEFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG4gICBmYWxsQW5pbWF0aW9uOiBBbmltYXRpb247XHJcbiAgIGRhc2hBbmltYXRpb246IEFuaW1hdGlvbjtcclxuICAgd2FsbEFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG5cclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuICAgaW5wdXQ6IFBsYXllcklucHV0Q29tcG9uZW50O1xyXG4gICBoZWFsdGg6IEhlYWx0aENvbXBvbmVudDtcclxuICAgaW50ZXJhY3RvcjogSW50ZXJhY3RvckNvbXBvbmVudDtcclxuICAgXHJcbiAgIGp1bXBIb3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgZGFzaEhvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAganVtcGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBmYWNpbmc6IG51bWJlciA9IDE7XHJcblxyXG4gICBqdW1wU3BlZWQ6IG51bWJlciA9IC0zICogNjA7XHJcbiAgIG1vdmVTcGVlZDogbnVtYmVyID0gMS41ICogNjA7XHJcblxyXG4gICBjYXlvdGVUaW1lOiBudW1iZXIgPSAwLjA1O1xyXG4gICBncm91bmRMZWF2ZVRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICBncm91bmRBY2NlbGVyYXRpb246IG51bWJlciA9IDAuMiAqIDYwICogNjA7XHJcbiAgIGdyYXZpdHk6IG51bWJlciA9IDAuMjUgKiA2MCAqIDYwO1xyXG4gICBncmF2aXR5VXBGcmFjdGlvbjogbnVtYmVyID0gMC41O1xyXG4gICBncmF2aXR5V2FsbEZyYWN0aW9uOiBudW1iZXIgPSAwLjQ7XHJcblxyXG4gICBtYXhGYWxsU3BlZWQgPSA1ICogNjA7XHJcblxyXG4gICBncm91bmRlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICB3YWxsTGVmdDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICB3YWxsUmlnaHQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGhhZFdhbGw6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGRhc2hpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgZGFzaFNwZWVkOiBudW1iZXIgPSA0LjcgKiA2MDtcclxuICAgZGFzaFRpbWU6IG51bWJlciA9IDI0IC8gKHRoaXMuZGFzaFNwZWVkKTtcclxuXHJcbiAgIGRhc2hUaW1lcjogbnVtYmVyID0gMDtcclxuICAgZGFzaFRpbWVvdXQ6IG51bWJlciA9IDA7XHJcbiAgIGRhc2hTYXZlZFNwZWVkOiBudW1iZXIgPSAwO1xyXG4gICBkYXNoU2F2ZWRBZGRpdGlvbjogbnVtYmVyID0gNTtcclxuXHJcbiAgIHdhbGxKdW1wVGltZXI6IG51bWJlciA9IDA7XHJcbiAgIGdldCB3YWxsSnVtcGluZygpIHsgcmV0dXJuIHRoaXMud2FsbEp1bXBUaW1lciA+IDA7IH1cclxuXHJcbiAgIGdldCBjYW5Nb3ZlKCkgeyByZXR1cm4gIXRoaXMud2FsbEp1bXBpbmcgJiYgIXRoaXMuZGFzaGluZzsgfVxyXG4gICBnZXQgdXNlR3Jhdml0eSgpIHsgcmV0dXJuICF0aGlzLmRhc2hpbmc7IH1cclxuICAgZ2V0IGhhc1dhbGwoKSB7IHJldHVybiB0aGlzLndhbGxMZWZ0IHx8IHRoaXMud2FsbFJpZ2h0OyB9XHJcbiAgIFxyXG4gICBjYW5EYXNoOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGNhbkRvdWJsZWp1bXA6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgZ2V0IGNhbkp1bXAoKSB7IHJldHVybiAgdGhpcy5ncm91bmRlZCB8fCAodGhpcy5ncm91bmRMZWF2ZVRpbWUgPCB0aGlzLmNheW90ZVRpbWUpOyB9XHJcblxyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIGxldCBzaGVldCA9IFJlc291cmNlcy5zaGVldFBsYXllcjtcclxuXHJcbiAgICAgIHRoaXMuaWRsZUFuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCAwLCAxNiwgMTYsIDEpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLndhbGtBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgMTYsIDE2LCAxNiwgNCkuY2VudGVyKCk7XHJcbiAgICAgIHRoaXMuZmFsbEFuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCAzMiwgMTYsIDE2LCAyKS5jZW50ZXIoKTtcclxuICAgICAgdGhpcy5qdW1wQW5pbWF0aW9uID0gc2hlZXQuZ2V0QW5pbWF0aW9uKDAsIDQ4LCAxNiwgMTYsIDIpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLmRhc2hBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgNjQsIDE2LCAxNiwgMikuY2VudGVyKCk7XHJcbiAgICAgIHRoaXMud2FsbEFuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCA4MCwgMTYsIDE2LCAyKS5jZW50ZXIoKTtcclxuXHJcbiAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuaWRsZUFuaW1hdGlvbjtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy5ib2R5ID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFJpZ2lkYm9keSgpKTtcclxuICAgICAgdGhpcy5pbnB1dCA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBQbGF5ZXJJbnB1dENvbXBvbmVudCgpKTtcclxuICAgICAgdGhpcy5oZWFsdGggPSB0aGlzLmFkZENvbXBvbmVudChuZXcgSGVhbHRoQ29tcG9uZW50KCkpO1xyXG4gICAgICB0aGlzLmludGVyYWN0b3IgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgSW50ZXJhY3RvckNvbXBvbmVudCgpKTtcclxuXHJcbiAgICAgIHRoaXMuaGVhbHRoLm9uRGVhdGgubGlzdGVuKHRoaXMub25EZWF0aC5iaW5kKHRoaXMpKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmJvZHkuY29sbGlkZXIgPSBuZXcgQm94Q29sbGlkZXIoXHJcbiAgICAgICAgIG5ldyBWZWN0b3IyKDEwLCAxMyksXHJcbiAgICAgICAgIG5ldyBWZWN0b3IyKDUsIDUpXHJcbiAgICAgICk7XHJcbiAgIH1cclxuXHJcbiAgIF9maXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgY29uc3QgbW91c2UgPSB0aGlzLmdhbWUuaW5wdXQubW91c2U7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi54ID0gdGhpcy5zY2VuZS5jYW1lcmEuc2NyZWVuVG9Xb3JsZFgobW91c2UueCk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnkgPSB0aGlzLnNjZW5lLmNhbWVyYS5zY3JlZW5Ub1dvcmxkWShtb3VzZS55KTtcclxuXHJcbiAgICAgIC8vIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gdGhpcy5zY2VuZS5jYW1lcmEuc2NyZWVuVG9Xb3JsZFgobW91c2UuZGVsdGFYKSAvIGRlbHRhO1xyXG4gICAgICAvLyB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHRoaXMuc2NlbmUuY2FtZXJhLnNjcmVlblRvV29ybGRZKG1vdXNlLmRlbHRhWSkgLyBkZWx0YTtcclxuICAgICAgXHJcbiAgICAgIC8vIGlmKG1vdXNlLmlzQnV0dG9uUHJlc3NlZChNb3VzZS5CdXR0b25MZWZ0KSl7XHJcbiAgICAgIC8vIH1cclxuXHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0aGlzLmJvZHkuY29sbGlkZWRCb3R0b207XHJcbiAgICAgIHRoaXMud2FsbExlZnQgPSB0aGlzLmJvZHkuY29sbGlkZWRMZWZ0O1xyXG4gICAgICB0aGlzLndhbGxSaWdodCA9IHRoaXMuYm9keS5jb2xsaWRlZFJpZ2h0O1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5pbnB1dC5kaXJlY3Rpb24gPiAwKXtcclxuICAgICAgICAgdGhpcy5mYWNpbmcgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuaW5wdXQuZGlyZWN0aW9uIDwgMCl7XHJcbiAgICAgICAgIHRoaXMuZmFjaW5nID0gLTE7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy53YWxsTGVmdCAmJiAhdGhpcy5ncm91bmRlZCkgdGhpcy5mYWNpbmcgPSAxO1xyXG4gICAgICBpZih0aGlzLndhbGxSaWdodCAmJiAhdGhpcy5ncm91bmRlZCkgdGhpcy5mYWNpbmcgPSAtMTtcclxuXHJcbiAgICAgIHRoaXMudXBkYXRlQW5pbWF0aW9uKGRlbHRhKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBzdXBlci51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgaWYodGhpcy5pbnB1dC5qdW1wUHJlc3NlZCl7XHJcbiAgICAgICAgIHRoaXMuanVtcEhvcCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5pbnB1dC5kYXNoUHJlc3NlZCl7XHJcbiAgICAgICAgIHRoaXMuZGFzaEhvcCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5pbnB1dC5pbnRlcmFjdFByZXNzZWQpe1xyXG4gICAgICAgICB0aGlzLmludGVyYWN0b3IuaW50ZXJhY3QoKTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gVE9ETyBkbyB0aGlzIHJpZ2h0LlxyXG4gICAgICBjb25zdCBzY2VuZVdpZHRoID0gdGhpcy5zY2VuZS50aWxlbWFwIS5waXhlbFdpZHRoO1xyXG4gICAgICBjb25zdCBzY2VuZUhlaWdodCA9IHRoaXMuc2NlbmUudGlsZW1hcCEucGl4ZWxIZWlnaHQ7XHJcblxyXG4gICAgICBsZXQgYm91bmRzID0gQUFCQi5DcmVhdGUoMCwgMCwgc2NlbmVXaWR0aCwgc2NlbmVIZWlnaHQpO1xyXG5cclxuICAgICAgaWYoIXRoaXMuYm9keS5ib3VuZGluZ0JveC5vdmVybGFwcyhib3VuZHMpKXtcclxuICAgICAgICAgdGhpcy5oZWFsdGguZGFtYWdlKDEwMCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHN1cGVyLmZpeGVkVXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0aGlzLmJvZHkuY29sbGlkZWRCb3R0b207XHJcbiAgICAgIHRoaXMud2FsbExlZnQgPSB0aGlzLmJvZHkuY29sbGlkZWRMZWZ0O1xyXG4gICAgICB0aGlzLndhbGxSaWdodCA9IHRoaXMuYm9keS5jb2xsaWRlZFJpZ2h0O1xyXG5cclxuICAgICAgaWYodGhpcy53YWxsTGVmdCB8fCB0aGlzLndhbGxSaWdodCl7XHJcbiAgICAgICAgIGlmKCF0aGlzLmhhZFdhbGwgJiYgIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuaGFkV2FsbCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5oYWRXYWxsID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMuZ3JvdW5kZWQpIHtcclxuICAgICAgICAgdGhpcy5ncm91bmRMZWF2ZVRpbWUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuZ3JvdW5kTGVhdmVUaW1lICs9IGRlbHRhO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy8gTWFrZSBzdXJlIHdlIHN0aWNrIHRvIHRoZSB3YWxsXHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMud2FsbFJpZ2h0KXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSA2MDtcclxuICAgICAgfVxyXG4gICAgICBpZighdGhpcy5ncm91bmRlZCAmJiB0aGlzLndhbGxMZWZ0KXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSAtNjA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCF0aGlzLmlucHV0Lmp1bXBEb3duKXtcclxuICAgICAgICAgdGhpcy5qdW1wSG9wID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEp1bXBpbmdcclxuICAgICAgdGhpcy51cGRhdGVKdW1wKGRlbHRhKTtcclxuXHJcbiAgICAgIC8vIE1vdmVtZW50XHJcbiAgICAgIHRoaXMudXBkYXRlTW92ZShkZWx0YSk7XHJcblxyXG4gICAgICAvLyBEYXNoaW5nXHJcbiAgICAgIHRoaXMudXBkYXRlRGFzaChkZWx0YSk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgLy8gR3Jhdml0eVxyXG4gICAgICB0aGlzLnVwZGF0ZUdyYXZpdHkoZGVsdGEpO1xyXG5cclxuICAgICAgaWYodGhpcy5ib2R5LnZlbG9jaXR5LnkgPiB0aGlzLm1heEZhbGxTcGVlZCl7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5tYXhGYWxsU3BlZWQ7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEFuaW1hdGlvblxyXG4gICAgICB0aGlzLnVwZGF0ZUFuaW1hdGlvbihkZWx0YSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZU1vdmUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIC8vIFVwZGF0ZSBmYWNpbmdcclxuICAgICAgaWYodGhpcy5pbnB1dC5kaXJlY3Rpb24gPiAwKXtcclxuICAgICAgICAgdGhpcy5mYWNpbmcgPSAxO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuaW5wdXQuZGlyZWN0aW9uIDwgMCl7XHJcbiAgICAgICAgIHRoaXMuZmFjaW5nID0gLTE7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy53YWxsTGVmdCAmJiAhdGhpcy5ncm91bmRlZCkgdGhpcy5mYWNpbmcgPSAxO1xyXG4gICAgICBpZih0aGlzLndhbGxSaWdodCAmJiAhdGhpcy5ncm91bmRlZCkgdGhpcy5mYWNpbmcgPSAtMTtcclxuXHJcbiAgICAgIGlmKCF0aGlzLmNhbk1vdmUpIHJldHVybjtcclxuXHJcbiAgICAgIGlmKHRoaXMuaW5wdXQuZGlyZWN0aW9uICE9PSAwKXtcclxuICAgICAgICAgbGV0IGRpciA9IE1hdGguc2lnbih0aGlzLmlucHV0LmRpcmVjdGlvbik7XHJcbiAgICAgICAgIGxldCBtYXhTcGVlZCA9IHRoaXMubW92ZVNwZWVkICogTWF0aC5hYnModGhpcy5pbnB1dC5kaXJlY3Rpb24pO1xyXG4gICAgICAgICBsZXQgYWNjZWxlcmF0aW9uID0gdGhpcy5ncm91bmRBY2NlbGVyYXRpb24gKiBkZWx0YTtcclxuXHJcbiAgICAgICAgIHRoaXMuYWNjZWxlcmF0ZShcclxuICAgICAgICAgICAgZGlyLCBcclxuICAgICAgICAgICAgbWF4U3BlZWQsXHJcbiAgICAgICAgICAgIGFjY2VsZXJhdGlvbik7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5zdG9wKHRoaXMuZ3JvdW5kQWNjZWxlcmF0aW9uICogZGVsdGEpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZURhc2goZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGlmKHRoaXMuZ3JvdW5kZWQpe1xyXG4gICAgICAgICB0aGlzLmNhbkRhc2ggPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLmRhc2hpbmcpe1xyXG4gICAgICAgICB0aGlzLmRhc2hUaW1lciAtPSBkZWx0YTtcclxuXHJcbiAgICAgICAgIGlmKHRoaXMuZGFzaFRpbWVyIDwgMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IHRoaXMuZGFzaFNhdmVkU3BlZWQgKyB0aGlzLmZhY2luZyAqIHRoaXMuZGFzaFNhdmVkQWRkaXRpb247XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmRhc2hUaW1lb3V0IC09IGRlbHRhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLmRhc2hIb3AgJiYgdGhpcy5kYXNoVGltZW91dCA8IDAgJiYgdGhpcy5jYW5EYXNoICYmICF0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgdGhpcy5kYXNoaW5nID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy5jYW5EYXNoID0gZmFsc2U7XHJcbiAgICAgICAgIHRoaXMuZGFzaFNhdmVkU3BlZWQgPSB0aGlzLmJvZHkudmVsb2NpdHkueDtcclxuICAgICAgICAgdGhpcy5kYXNoVGltZXIgPSB0aGlzLmRhc2hUaW1lO1xyXG4gICAgICAgICB0aGlzLmRhc2hUaW1lb3V0ID0gMC4yO1xyXG4gICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gdGhpcy5mYWNpbmcgKiB0aGlzLmRhc2hTcGVlZDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhc2hIb3AgPSBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlSnVtcChkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy53YWxsSnVtcFRpbWVyIC09IGRlbHRhO1xyXG5cclxuICAgICAgaWYodGhpcy5jYW5KdW1wKXtcclxuICAgICAgICAgaWYodGhpcy5qdW1wSG9wKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXlvdGUganVtcCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgcmVhbGx5IGhhY2t5IGJ1dCB3aGF0ZXZlclxyXG4gICAgICAgICAgICB0aGlzLmdyb3VuZExlYXZlVGltZSA9IHRoaXMuY2F5b3RlVGltZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHRoaXMuY2FuRG91YmxlanVtcCl7XHJcbiAgICAgICAgIGlmKHRoaXMuanVtcEhvcCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5qdW1wU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5qdW1wSG9wID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgaWYodGhpcy53YWxsTGVmdCAmJiB0aGlzLmp1bXBIb3Ape1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IHRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHRoaXMuanVtcFNwZWVkO1xyXG5cclxuICAgICAgICAgICAgdGhpcy53YWxsSnVtcFRpbWVyID0gMC4wNTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcEhvcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gWW91IGNhbiBkYXNoIGFmdGVyIHlvdXIgd2FsbGp1bXAgOilcclxuICAgICAgICAgICAgdGhpcy5jYW5EYXNoID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZih0aGlzLndhbGxSaWdodCAmJiB0aGlzLmp1bXBIb3Ape1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IC10aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBTcGVlZDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2FsbEp1bXBUaW1lciA9IDAuMDU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gZGFzaCBhZnRlciB5b3VyIHdhbGxqdW1wIDopXHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGFzaCA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gSnVtcCBjYW5jZWxpbmdcclxuICAgICAgaWYodGhpcy5ib2R5LnZlbG9jaXR5LnkgPiAwKXtcclxuICAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5qdW1waW5nICYmICF0aGlzLmlucHV0Lmp1bXBEb3duKXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmJvZHkudmVsb2NpdHkueSAqIDAuMjU7XHJcbiAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUFuaW1hdGlvbihkZWx0YTogbnVtYmVyKXtcclxuICAgICAgLy8gQW5pbWF0aW9uIHN0dWZmXHJcbiAgICAgIGlmKHRoaXMuYm9keS52ZWxvY2l0eS54ICE9PSAwKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy53YWxrQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuaWRsZUFuaW1hdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPCAwKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5qdW1wQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMuYm9keS52ZWxvY2l0eS55ID49IDApe1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLmZhbGxBbmltYXRpb247XHJcbiAgICAgIH1cclxuICAgICAgaWYoKHRoaXMud2FsbExlZnQgfHwgdGhpcy53YWxsUmlnaHQpICYmICF0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy53YWxsQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuZGFzaGluZyl7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuZGFzaEFuaW1hdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uLnVwZGF0ZShkZWx0YSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUdyYXZpdHkoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGlmKCF0aGlzLnVzZUdyYXZpdHkpIHJldHVybjtcclxuXHJcbiAgICAgIGlmKHRoaXMuYm9keS52ZWxvY2l0eS55IDwgMCl7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eSAqIHRoaXMuZ3Jhdml0eVVwRnJhY3Rpb24gKiBkZWx0YTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICBpZih0aGlzLmhhc1dhbGwpe1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSArPSB0aGlzLmdyYXZpdHkgKiB0aGlzLmdyYXZpdHlXYWxsRnJhY3Rpb24gKiBkZWx0YTtcclxuICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eSAqIGRlbHRhO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgYWNjZWxlcmF0ZShkaXI6IG51bWJlciwgbWF4U3BlZWQ6IG51bWJlciwgYWNjZWxlcmF0aW9uOiBudW1iZXIpe1xyXG4gICAgICBsZXQgYWNjID0gYWNjZWxlcmF0aW9uO1xyXG4gICAgICBsZXQgdmVsID0gdGhpcy5ib2R5LnZlbG9jaXR5LnggKiBkaXI7XHJcblxyXG4gICAgICBpZih2ZWwgPj0gbWF4U3BlZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGlmKHZlbCArIGFjYyA+IG1heFNwZWVkKXtcclxuICAgICAgICAgYWNjID0gbWF4U3BlZWQgLSB2ZWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ICs9IGFjYyAqIGRpcjtcclxuICAgICAgXHJcbiAgIH1cclxuICAgc3RvcChhY2NlbGVyYXRpb246IG51bWJlcil7XHJcbiAgICAgIGxldCBkaXIgPSBNYXRoLnNpZ24odGhpcy5ib2R5LnZlbG9jaXR5LngpO1xyXG4gICAgICBsZXQgdmVsID0gTWF0aC5hYnModGhpcy5ib2R5LnZlbG9jaXR5LngpO1xyXG5cclxuICAgICAgbGV0IHJlbSA9IGFjY2VsZXJhdGlvbjtcclxuXHJcbiAgICAgIGlmKHZlbCAtIHJlbSA8IDApIHJlbSA9IHZlbDtcclxuXHJcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54IC09IHJlbSAqIGRpcjtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBzdXBlci5kcmF3KGdyYXBoaWNzKTtcclxuXHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGUodGhpcy5jdXJyZW50QW5pbWF0aW9uLmZyYW1lLCBcclxuICAgICAgICAgdGhpcy50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueSxcclxuICAgICAgICAgdGhpcy5mYWNpbmcsIDEsIFxyXG4gICAgICAgICAwKTtcclxuICAgfVxyXG5cclxuICAgb25EZWF0aCgpe1xyXG4gICAgICB0aGlzLnNjZW5lLnJlbW92ZUdhbWVPYmplY3QodGhpcyk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU3Bhd25HYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uYXBwbHkoYWFiYi54LCBhYWJiLnkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBIZWFsdGhDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSGVhbHRoQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IEJveENvbGxpZGVyIH0gZnJvbSBcIm1hdGgvY29sbGlzaW9uL0JveENvbGxpZGVyXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3Bpa2VzR2FtZU9iamVjdCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCLCBzaHJpbms6IGJvb2xlYW4pe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgaWYoc2hyaW5rKXtcclxuICAgICAgICAgbGV0IHNraW4gPSBhYWJiLmhlaWdodCAtIDM7XHJcblxyXG4gICAgICAgICBpZihza2luID4gMCl7XHJcbiAgICAgICAgICAgIGFhYmIudG9wICs9IHNraW47XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5hcHBseShhYWJiLngsIGFhYmIueSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG4gICAgICB0aGlzLmJvZHkua2luZW1hdGljID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcbiAgICAgIHRoaXMuYm9keS5jb2xsaWRlciA9IEJveENvbGxpZGVyLmZyb21BQUJCKGFhYmIpO1xyXG5cclxuICAgICAgdGhpcy5ib2R5Lm9uQ29sbGlzaW9uLmxpc3Rlbih0aGlzLm9uQ29sbGlzaW9uLmJpbmQodGhpcykpO1xyXG4gICAgICBcclxuICAgfVxyXG5cclxuICAgb25Db2xsaXNpb24ob3RoZXI6IFJpZ2lkYm9keSl7XHJcbiAgICAgIGxldCBjb21wID0gb3RoZXIuZ2FtZU9iamVjdC5maW5kQ29tcG9uZW50KGNvbXBvbmVudCA9PiBjb21wb25lbnQgaW5zdGFuY2VvZiBIZWFsdGhDb21wb25lbnQpIGFzIEhlYWx0aENvbXBvbmVudHx1bmRlZmluZWQ7XHJcblxyXG4gICAgICBpZihjb21wID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuICAgICAgXHJcbiAgICAgIGNvbnNvbGUubG9nKFwiRGFtYWdpbmcgc29tZXRoaW5nIVwiKTtcclxuICAgICAgXHJcbiAgICAgIGNvbXAuZGFtYWdlKDEwMCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFNwcml0ZVNoZWV0IH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICBzaGVldE9iamVjdHM6IFNwcml0ZVNoZWV0LmZyb21IVE1MKFwiT2JqZWN0c1wiKSxcclxuICAgc2hlZXRFZmZlY3RzOiBTcHJpdGVTaGVldC5mcm9tSFRNTChcIkVmZmVjdHNcIiksXHJcbiAgIHNoZWV0UGxheWVyOiBTcHJpdGVTaGVldC5mcm9tSFRNTChcIlBsYXllclwiKVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBQUJCe1xyXG5cclxuICAgbGVmdDogbnVtYmVyO1xyXG4gICB0b3A6IG51bWJlcjtcclxuICAgYm90dG9tOiBudW1iZXI7XHJcbiAgIHJpZ2h0OiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihsZWZ0OiBudW1iZXIgPSAwLCB0b3A6IG51bWJlciA9IDAsIHJpZ2h0OiBudW1iZXIgPSAwLCBib3R0b206IG51bWJlciA9IDApIHsgXHJcbiAgICAgIHRoaXMubGVmdCA9IGxlZnQ7XHJcbiAgICAgIHRoaXMudG9wID0gdG9wO1xyXG4gICAgICB0aGlzLnJpZ2h0ID0gcmlnaHQ7XHJcbiAgICAgIHRoaXMuYm90dG9tID0gYm90dG9tO1xyXG4gICB9XHJcblxyXG4gICBnZXQgeCgpIHsgcmV0dXJuIHRoaXMubGVmdDsgfVxyXG4gICBnZXQgeSgpIHsgcmV0dXJuIHRoaXMudG9wOyB9XHJcblxyXG4gICBnZXQgd2lkdGgoKSB7IHJldHVybiB0aGlzLnJpZ2h0IC0gdGhpcy5sZWZ0OyB9XHJcbiAgIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLmJvdHRvbSAtIHRoaXMudG9wOyB9XHJcblxyXG4gICBvdmVybGFwcyhvdGhlcjogQUFCQil7XHJcbiAgICAgIHJldHVybiB0aGlzLm92ZXJsYXBzWChvdGhlcikgJiYgdGhpcy5vdmVybGFwc1kob3RoZXIpO1xyXG4gICB9XHJcbiAgIG92ZXJsYXBzWChvdGhlcjogQUFCQil7XHJcbiAgICAgIGlmKHRoaXMubGVmdCA+PSBvdGhlci5yaWdodCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZih0aGlzLnJpZ2h0IDw9IG90aGVyLmxlZnQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcbiAgIG92ZXJsYXBzWShvdGhlcjogQUFCQil7XHJcbiAgICAgIGlmKHRoaXMudG9wID49IG90aGVyLmJvdHRvbSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZih0aGlzLmJvdHRvbSA8PSBvdGhlci50b3ApIHJldHVybiBmYWxzZTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICB9XHJcblxyXG4gICBtaW5PdmVybGFwWChvdGhlcjogQUFCQil7XHJcbiAgICAgIGxldCBtb3Rpb25MZWZ0ID0gb3RoZXIucmlnaHQgLSB0aGlzLmxlZnQ7XHJcbiAgICAgIGxldCBtb3Rpb25SaWdodCA9IHRoaXMucmlnaHQgLSBvdGhlci5sZWZ0O1xyXG5cclxuICAgICAgaWYobW90aW9uTGVmdCA+IG1vdGlvblJpZ2h0KSByZXR1cm4gLW1vdGlvblJpZ2h0O1xyXG4gICAgICByZXR1cm4gbW90aW9uTGVmdDtcclxuICAgfVxyXG4gICBtaW5PdmVybGFwWShvdGhlcjogQUFCQil7XHJcbiAgICAgIGxldCBtb3Rpb25VcCA9IG90aGVyLmJvdHRvbSAtIHRoaXMudG9wO1xyXG4gICAgICBsZXQgbW90aW9uRG93biA9IHRoaXMuYm90dG9tIC0gb3RoZXIudG9wO1xyXG5cclxuICAgICAgaWYobW90aW9uVXAgPiBtb3Rpb25Eb3duKSByZXR1cm4gLW1vdGlvbkRvd247XHJcbiAgICAgIHJldHVybiBtb3Rpb25VcDtcclxuICAgfVxyXG4gICBcclxuXHJcbiAgIG1pbk92ZXJsYXBYV2l0aEJpYXMob3RoZXI6IEFBQkIsIGJpYXM6IG51bWJlcil7XHJcbiAgICAgIGlmKGJpYXMgPCAwKSByZXR1cm4gb3RoZXIucmlnaHQgLSB0aGlzLmxlZnQ7XHJcbiAgICAgIHJldHVybiAtKHRoaXMucmlnaHQgLSBvdGhlci5sZWZ0KTtcclxuXHJcbiAgIH1cclxuICAgbWluT3ZlcmxhcFlXaXRoQmlhcyhvdGhlcjogQUFCQiwgYmlhczogbnVtYmVyKXtcclxuICAgICAgaWYoYmlhcyA8IDApIHJldHVybiBvdGhlci5ib3R0b20gLSB0aGlzLnRvcDtcclxuICAgICAgcmV0dXJuIC0odGhpcy5ib3R0b20gLSBvdGhlci50b3ApO1xyXG4gICB9XHJcblxyXG4gICBjb3B5KG90aGVyOiBBQUJCKXtcclxuICAgICAgdGhpcy5sZWZ0ID0gb3RoZXIubGVmdDtcclxuICAgICAgdGhpcy5yaWdodCA9IG90aGVyLnJpZ2h0O1xyXG4gICAgICB0aGlzLmJvdHRvbSA9IG90aGVyLmJvdHRvbTtcclxuICAgICAgdGhpcy50b3AgPSBvdGhlci50b3A7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgc2V0KGxlZnQ6IG51bWJlciwgdG9wOiBudW1iZXIsIHJpZ2h0OiBudW1iZXIsIGJvdHRvbTogbnVtYmVyKSB7IFxyXG4gICAgICB0aGlzLmxlZnQgPSBsZWZ0O1xyXG4gICAgICB0aGlzLnRvcCA9IHRvcDtcclxuICAgICAgdGhpcy5yaWdodCA9IHJpZ2h0O1xyXG4gICAgICB0aGlzLmJvdHRvbSA9IGJvdHRvbTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBjbG9uZSgpe1xyXG4gICAgICByZXR1cm4gbmV3IEFBQkIodGhpcy5sZWZ0LCB0aGlzLnRvcCwgdGhpcy5yaWdodCwgdGhpcy5ib3R0b20pO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgQ3JlYXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBuZXcgQUFCQih4LCB5LCB4ICsgdywgeSArIGgpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBDdXJ2ZSB9IGZyb20gXCJ1dGlsL0N1cnZlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMntcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApe1xyXG4gICAgICB0aGlzLnggPSB4O1xyXG4gICAgICB0aGlzLnkgPSB5O1xyXG4gICB9XHJcblxyXG4gICBhZGQob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggKz0gb3RoZXIueDtcclxuICAgICAgdGhpcy55ICs9IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBzdWIob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggLT0gb3RoZXIueDtcclxuICAgICAgdGhpcy55IC09IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBtdWwob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggKj0gb3RoZXIueDtcclxuICAgICAgdGhpcy55ICo9IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBkaXYob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggLz0gb3RoZXIueDtcclxuICAgICAgdGhpcy55IC89IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBzZXQob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggPSBvdGhlci54O1xyXG4gICAgICB0aGlzLnkgPSBvdGhlci55O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgc2V0WmVybygpe1xyXG4gICAgICB0aGlzLnggPSAwO1xyXG4gICAgICB0aGlzLnkgPSAwO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgYXBwbHkoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLnggPSB4O1xyXG4gICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgbmVnYXRlKCl7XHJcbiAgICAgIHRoaXMueCA9IC10aGlzLng7XHJcbiAgICAgIHRoaXMueSA9IC10aGlzLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgbm9ybWFsaXplKCl7XHJcbiAgICAgIGxldCBsZW5ndGggPSB0aGlzLmxlbmd0aDtcclxuXHJcbiAgICAgIGlmKGxlbmd0aCA+IDApe1xyXG4gICAgICAgICB0aGlzLnggLz0gbGVuZ3RoO1xyXG4gICAgICAgICB0aGlzLnkgLz0gbGVuZ3RoO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG5cclxuICAgZ2V0IG5vcm1hbGl6ZWQoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuY2xvbmUoKS5ub3JtYWxpemUoKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IHNxckxlbmd0aCgpe1xyXG4gICAgICByZXR1cm4gVmVjdG9yMi5kb3QodGhpcywgdGhpcyk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBsZW5ndGgoKXtcclxuICAgICAgcmV0dXJuIE1hdGguc3FydCh0aGlzLnNxckxlbmd0aCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBhbmdsZSgpe1xyXG4gICAgICByZXR1cm4gTWF0aC5hdGFuMih0aGlzLnksIHRoaXMueCk7XHJcbiAgIH1cclxuXHJcbiAgIGRpc3RhbmNlVG8ob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICByZXR1cm4gVmVjdG9yMi5kaXN0YW5jZSh0aGlzLCBvdGhlcik7XHJcbiAgIH1cclxuICAgZGlyZWN0aW9uVG8ob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICByZXR1cm4gVmVjdG9yMi5kaXJlY3Rpb24odGhpcywgb3RoZXIpO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgZGlyZWN0aW9uKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpe1xyXG4gICAgICByZXR1cm4gYi5jbG9uZSgpLnN1YihhKTtcclxuICAgfVxyXG4gICBcclxuICAgc3RhdGljIGRpc3RhbmNlKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpe1xyXG4gICAgICBsZXQgZGlzdFggPSBhLnggLSBiLng7XHJcbiAgICAgIGxldCBkaXN0WSA9IGEueSAtIGIueTtcclxuXHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQoZGlzdFggKiBkaXN0WCArIGRpc3RZICogZGlzdFkpO1xyXG4gICB9XHJcblxyXG4gICBsZXJwVG8ob3RoZXI6IFZlY3RvcjIsIGY6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBWZWN0b3IyLmxlcnBPdXQodGhpcywgb3RoZXIsIHRoaXMsIGYpO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgbGVycChhOiBWZWN0b3IyLCBiOiBWZWN0b3IyLCBmOiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5sZXJwT3V0KGEsIGIsIG5ldyBWZWN0b3IyKCksIGYpO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgbGVycE91dChhOiBWZWN0b3IyLCBiOiBWZWN0b3IyLCBvdXQ6IFZlY3RvcjIsIGY6IG51bWJlcil7XHJcbiAgICAgIG91dC54ID0gQ3VydmUubGVycChhLngsIGIueCwgZik7XHJcbiAgICAgIG91dC55ID0gQ3VydmUubGVycChhLnksIGIueSwgZik7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gb3V0O1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgZG90KGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIpe1xyXG4gICAgICByZXR1cm4gYS54ICogYi54ICsgYS55ICogYi55O1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgYW5nbGVkKGFuZ2xlOiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gbmV3IFZlY3RvcjIoTWF0aC5jb3MoYW5nbGUpLCBNYXRoLnNpbihhbmdsZSkpO1xyXG4gICB9XHJcblxyXG4gICBjbG9uZSgpe1xyXG4gICAgICByZXR1cm4gbmV3IFZlY3RvcjIodGhpcy54LCB0aGlzLnkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gXCIuL0NvbGxpZGVyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQm94Q29sbGlkZXIgZXh0ZW5kcyBDb2xsaWRlcntcclxuICAgb2Zmc2V0OiBWZWN0b3IyO1xyXG4gICBzaXplOiBWZWN0b3IyO1xyXG5cclxuICAgY29uc3RydWN0b3Ioc2l6ZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCksIG9mZnNldDogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCkpe1xyXG4gICAgICBzdXBlcigpO1xyXG4gICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcclxuICAgfVxyXG5cclxuICAgZ2V0Qm91bmRzKHBvc2l0aW9uOiBWZWN0b3IyLCBvdXQ6IEFBQkIpXHJcbiAgIHsgIFxyXG4gICAgICByZXR1cm4gb3V0LnNldChcclxuICAgICAgICAgcG9zaXRpb24ueCAtIHRoaXMub2Zmc2V0LngsIFxyXG4gICAgICAgICBwb3NpdGlvbi55IC0gdGhpcy5vZmZzZXQueSxcclxuICAgICAgICAgcG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IC0gdGhpcy5vZmZzZXQueCxcclxuICAgICAgICAgcG9zaXRpb24ueSArIHRoaXMuc2l6ZS55IC0gdGhpcy5vZmZzZXQueSk7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBmcm9tQUFCQihhYWJiOiBBQUJCKXtcclxuICAgICAgcmV0dXJuIG5ldyBCb3hDb2xsaWRlcihuZXcgVmVjdG9yMihhYWJiLndpZHRoLCBhYWJiLmhlaWdodCkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIENvbGxpZGVye1xyXG4gICBhYnN0cmFjdCBnZXRCb3VuZHMocG9zaXRpb246IFZlY3RvcjIsIG91dDogQUFCQik6IEFBQkI7XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCIuL0JveENvbGxpZGVyXCI7XHJcbmltcG9ydCB7IENvbGxpZGVyIH0gZnJvbSBcIi4vQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgVGlsZUNvbGxpZGVyIH0gZnJvbSBcIi4vVGlsZUNvbGxpZGVyXCI7XHJcblxyXG4vLyBUT0RPIHByZXZlbnQgbWVtb3J5IGFsbG9jYXRpb24gaGVyZS5cclxuLy8gU2hvdWxkIG1heWJlIGJlIGEgY29sbGlzaW9uIGNsYXNzLCB0aGF0IGhhcyBcclxuLy8gYWxsIHRoaXMgbWVtb3J5IHByZWFsbG9jYXRlZC5cclxuXHJcbi8vIEl0IGJlIGZpbmUgZm9yIG5vdyB0aG9cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB1bnN0dWNrKHNlbGY6IENvbGxpZGVyLCBvdGhlcjogQ29sbGlkZXIsIHJlbGF0aXZlUG9zaXRpb246IFZlY3RvcjIsIHJlbGF0aXZlVmVsb2NpdHk6IFZlY3RvcjIpOiBWZWN0b3IyfHVuZGVmaW5lZHtcclxuICAgaWYoc2VsZiBpbnN0YW5jZW9mIEJveENvbGxpZGVyKXtcclxuICAgICAgaWYob3RoZXIgaW5zdGFuY2VvZiBCb3hDb2xsaWRlcil7XHJcbiAgICAgICAgIHJldHVybiB1bnN0dWNrQm94Qm94KHNlbGYsIG90aGVyLCByZWxhdGl2ZVBvc2l0aW9uLCByZWxhdGl2ZVZlbG9jaXR5KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKG90aGVyIGluc3RhbmNlb2YgVGlsZUNvbGxpZGVyKXtcclxuICAgICAgICAgcmV0dXJuIHVuc3R1Y2tCb3hUaWxlKHNlbGYsIG90aGVyLCByZWxhdGl2ZVBvc2l0aW9uLCByZWxhdGl2ZVZlbG9jaXR5KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNvbGxpc2lvbiBmb3VuZCBmb3IgJHtzZWxmLmNvbnN0cnVjdG9yLm5hbWV9IGFuZCAke290aGVyLmNvbnN0cnVjdG9yLm5hbWV9YCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBlbHNlIGlmKHNlbGYgaW5zdGFuY2VvZiBUaWxlQ29sbGlkZXIpe1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIGNvbGxpc2lvbiBmb3VuZCBmb3IgJHtzZWxmLmNvbnN0cnVjdG9yLm5hbWV9IGFuZCAke290aGVyLmNvbnN0cnVjdG9yLm5hbWV9YCk7XHJcbiAgICAgIC8vIGlmKG90aGVyIGluc3RhbmNlb2YgQm94Q29sbGlkZXIpe1xyXG4gICAgICAvLyAgICByZXR1cm4gdW5zdHVja0JveFRpbGUob3RoZXJQb3NpdGlvbiwgb3RoZXIsIHBvc2l0aW9uLCBzZWxmLCB1bnN0dWNrVmVjdG9yKT8ubmVnYXRlKCk7XHJcbiAgICAgIC8vIH1cclxuICAgICAgLy8gZWxzZXtcclxuICAgICAgLy8gfVxyXG4gICB9XHJcbiAgIGVsc2V7XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gY29sbGlzaW9uIGZvdW5kIGZvciAke3NlbGYuY29uc3RydWN0b3IubmFtZX0gYW5kICR7b3RoZXIuY29uc3RydWN0b3IubmFtZX1gKTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdW5zdHVja0JveFRpbGUoc2VsZjogQm94Q29sbGlkZXIsIG90aGVyOiBUaWxlQ29sbGlkZXIsIHJlbGF0aXZlUG9zaXRpb246IFZlY3RvcjIsIHJlbGF0aXZlVmVsb2NpdHk6IFZlY3RvcjIpOiBWZWN0b3IyfHVuZGVmaW5lZHtcclxuICAgbGV0IHNlbGZCb3VuZHMgPSBzZWxmLmdldEJvdW5kcyhuZXcgVmVjdG9yMigpLCBuZXcgQUFCQigpKTtcclxuICAgbGV0IG90aGVyQm91bmRzID0gb3RoZXIuZ2V0Qm91bmRzKHJlbGF0aXZlUG9zaXRpb24sIG5ldyBBQUJCKCkpO1xyXG5cclxuICAgbGV0IHhPdmVybGFwID0gMDtcclxuICAgbGV0IHlPdmVybGFwID0gMDtcclxuXHJcbiAgIGxldCB4Q29sbGlkZWQgPSBmYWxzZTtcclxuICAgbGV0IHlDb2xsaWRlZCA9IGZhbHNlO1xyXG5cclxuICAgaWYob3RoZXIubGVmdCAmJiByZWxhdGl2ZVZlbG9jaXR5LnggPiAwKXtcclxuICAgICAgeE92ZXJsYXAgPSAtKHNlbGZCb3VuZHMucmlnaHQgLSBvdGhlckJvdW5kcy5sZWZ0KTtcclxuICAgICAgeENvbGxpZGVkID0gdHJ1ZTtcclxuICAgfWVsc2UgaWYob3RoZXIucmlnaHQgJiYgcmVsYXRpdmVWZWxvY2l0eS54IDw9IDApe1xyXG4gICAgICB4T3ZlcmxhcCA9IC0oc2VsZkJvdW5kcy5sZWZ0IC0gb3RoZXJCb3VuZHMucmlnaHQpO1xyXG4gICAgICB4Q29sbGlkZWQgPSB0cnVlO1xyXG4gICB9XHJcbiAgIFxyXG4gICBpZihvdGhlci50b3AgJiYgcmVsYXRpdmVWZWxvY2l0eS55ID4gMCl7XHJcbiAgICAgIHlPdmVybGFwID0gLShzZWxmQm91bmRzLmJvdHRvbSAtIG90aGVyQm91bmRzLnRvcCk7XHJcbiAgICAgIHlDb2xsaWRlZCA9IHRydWU7XHJcbiAgIH1lbHNlIGlmKG90aGVyLmJvdHRvbSAmJiByZWxhdGl2ZVZlbG9jaXR5LnkgPD0gMCl7XHJcbiAgICAgIHlPdmVybGFwID0gLShzZWxmQm91bmRzLnRvcCAtIG90aGVyQm91bmRzLmJvdHRvbSk7XHJcbiAgICAgIHlDb2xsaWRlZCA9IHRydWU7XHJcbiAgIH1cclxuXHJcbiAgIC8vIElmIGl0IF9jYW5fIGRvIGJvdGggYXhpcywgZG8gb25seSBfb25lX1xyXG4gICBpZih4Q29sbGlkZWQgJiYgeUNvbGxpZGVkKXtcclxuICAgICAgaWYoTWF0aC5hYnMoeE92ZXJsYXApID4gTWF0aC5hYnMoeU92ZXJsYXApKXtcclxuICAgICAgICAgeE92ZXJsYXAgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHlPdmVybGFwID0gMDtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICByZXR1cm4gbmV3IFZlY3RvcjIoeE92ZXJsYXAsIHlPdmVybGFwKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVuc3R1Y2tCb3hCb3goc2VsZjogQm94Q29sbGlkZXIsIG90aGVyOiBCb3hDb2xsaWRlciwgcmVsYXRpdmVQb3NpdGlvbjogVmVjdG9yMiwgcmVsYXRpdmVWZWxvY2l0eTogVmVjdG9yMik6IFZlY3RvcjJ8dW5kZWZpbmVke1xyXG4gICBsZXQgc2VsZkJvdW5kcyA9IHNlbGYuZ2V0Qm91bmRzKG5ldyBWZWN0b3IyKCksIG5ldyBBQUJCKCkpO1xyXG4gICBsZXQgb3RoZXJCb3VuZHMgPSBvdGhlci5nZXRCb3VuZHMocmVsYXRpdmVQb3NpdGlvbiwgbmV3IEFBQkIoKSk7XHJcblxyXG4gICBsZXQgeE92ZXJsYXAgPSBzZWxmQm91bmRzLm1pbk92ZXJsYXBYV2l0aEJpYXMob3RoZXJCb3VuZHMsIHJlbGF0aXZlVmVsb2NpdHkueCk7XHJcbiAgIGxldCB5T3ZlcmxhcCA9IHNlbGZCb3VuZHMubWluT3ZlcmxhcFlXaXRoQmlhcyhvdGhlckJvdW5kcywgcmVsYXRpdmVWZWxvY2l0eS55KTtcclxuXHJcbiAgIGlmKE1hdGguYWJzKHhPdmVybGFwKSA8IE1hdGguYWJzKHlPdmVybGFwKSl7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yMih4T3ZlcmxhcCwgMCk7XHJcbiAgIH1cclxuICAgZWxzZXtcclxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKDAsIHlPdmVybGFwKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgQ29sbGlkZXIgfSBmcm9tIFwiLi9Db2xsaWRlclwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRpbGVDb2xsaWRlciBleHRlbmRzIENvbGxpZGVye1xyXG4gICBzaXplOiBWZWN0b3IyO1xyXG5cclxuICAgdG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGxlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgYm90dG9tOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihzaXplOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKSl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgIH1cclxuXHJcbiAgIGdldEJvdW5kcyhwb3NpdGlvbjogVmVjdG9yMiwgb3V0OiBBQUJCKVxyXG4gICB7ICBcclxuICAgICAgcmV0dXJuIG91dC5zZXQoXHJcbiAgICAgICAgIHBvc2l0aW9uLngsIFxyXG4gICAgICAgICBwb3NpdGlvbi55LFxyXG4gICAgICAgICBwb3NpdGlvbi54ICsgdGhpcy5zaXplLngsXHJcbiAgICAgICAgIHBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnR7XHJcbiAgIGdhbWUhOiBHYW1lO1xyXG4gICBnYW1lT2JqZWN0ITogR2FtZU9iamVjdDtcclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgfVxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICB9XHJcblxyXG4gICBnZXQgc2NlbmUoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuZ2FtZU9iamVjdC5zY2VuZTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiLi9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwiLi9TY2VuZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVPYmplY3Qge1xyXG4gICBjb21wb25lbnRzOiBDb21wb25lbnRbXTtcclxuICAgc2NlbmUhOiBTY2VuZTtcclxuXHJcbiAgIGdhbWUhOiBHYW1lO1xyXG4gICBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBcclxuICAgYWx3YXlzVXBkYXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICAgfVxyXG4gICBcclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgaWYodGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmouaW5pdChnYW1lKSk7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2gob2JqID0+IG9iai5kZXN0cm95KCkpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmoudXBkYXRlKGRlbHRhKSk7XHJcbiAgIH1cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmouZml4ZWRVcGRhdGUoZGVsdGEpKTtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChvYmogPT4gb2JqLmRyYXcoZ3JhcGhpY3MpKTtcclxuICAgfVxyXG5cclxuICAgYWRkQ29tcG9uZW50PFQgZXh0ZW5kcyBDb21wb25lbnQ+KGNvbXBvbmVudDogVCl7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgIGNvbXBvbmVudC5nYW1lT2JqZWN0ID0gdGhpcztcclxuICAgICAgXHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm4gY29tcG9uZW50O1xyXG5cclxuICAgICAgY29tcG9uZW50LmluaXQodGhpcy5nYW1lKTtcclxuXHJcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgIH1cclxuXHJcbiAgIHJlbW92ZUNvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCl7XHJcbiAgICAgIGxldCBpZHggPSB0aGlzLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpO1xyXG5cclxuICAgICAgaWYoaWR4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICBcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XHJcbiAgIH1cclxuXHJcbiAgIGZpbmRDb21wb25lbnQocHJlZGljYXRlOiAoY29tcG9uZW50OiBDb21wb25lbnQpID0+IGJvb2xlYW4pe1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmZpbmQocHJlZGljYXRlKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBQaHlzaWNzIH0gZnJvbSBcImVuZ2luZS9QaHlzaWNzXCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCJncmFwaGljcy9DYW1lcmFcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgVGlsZU1hcCB9IGZyb20gXCJ0aWxlbWFwL1RpbGVNYXBcIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZXtcclxuICAgY2FtZXJhOiBDYW1lcmE7XHJcbiAgIGdhbWVPYmplY3RzOiBHYW1lT2JqZWN0W107XHJcbiAgIGdhbWUhOiBHYW1lO1xyXG4gICB0aWxlbWFwPzogVGlsZU1hcDtcclxuXHJcbiAgIHBoeXNpY3M6IFBoeXNpY3M7XHJcblxyXG4gICAvLyBUaGlzIGdldHMgdXNlZCBmb3IgdHJhbnNpdGlvbnMgOilcclxuICAgcGF1c2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKCk7XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBbXTtcclxuICAgICAgdGhpcy5waHlzaWNzID0gbmV3IFBoeXNpY3MoKTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgaWYodGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4gb2JqLmluaXQoZ2FtZSkpO1xyXG4gICB9XHJcblxyXG4gICBkZXN0cm95KCl7XHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4gb2JqLmRlc3Ryb3koKSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYoIXRoaXMucGF1c2VkKSB0aGlzLnRpbGVtYXA/LnVwZGF0ZShkZWx0YSwgdGhpcy5jYW1lcmEuZ2V0Qm91bmRzKCkpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiB7IGlmKCF0aGlzLnBhdXNlZCB8fCBvYmouYWx3YXlzVXBkYXRlKSBvYmoudXBkYXRlKGRlbHRhKTsgfSk7XHJcbiAgICAgIFxyXG4gICAgICBpZighdGhpcy5wYXVzZWQpIHRoaXMucGh5c2ljcy51cGRhdGUoZGVsdGEpO1xyXG4gICB9XHJcbiAgIGZpeGVkVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IHsgaWYoIXRoaXMucGF1c2VkIHx8IG9iai5hbHdheXNVcGRhdGUpIG9iai5maXhlZFVwZGF0ZShkZWx0YSk7IH0pO1xyXG4gICAgICBpZighdGhpcy5wYXVzZWQpIHRoaXMucGh5c2ljcy5maXhlZFVwZGF0ZShkZWx0YSk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgZ3JhcGhpY3Muc2V0Q2FtZXJhKHRoaXMuY2FtZXJhKTtcclxuXHJcbiAgICAgIHRoaXMudGlsZW1hcD8uZHJhdyhncmFwaGljcywgdGhpcy5jYW1lcmEuZ2V0Qm91bmRzKCkpO1xyXG4gICAgICB0aGlzLmdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IG9iai5kcmF3KGdyYXBoaWNzKSk7XHJcbiAgICAgIHRoaXMucGh5c2ljcy5kcmF3RGVidWcoZ3JhcGhpY3MpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGVTaXplKCl7XHJcbiAgICAgIGxldCBhc3AgPSB0aGlzLmdhbWUuY2FudmFzLndpZHRoIC8gdGhpcy5nYW1lLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMuY2FtZXJhLndpZHRoID0gdGhpcy5jYW1lcmEuaGVpZ2h0ICogYXNwO1xyXG4gICB9XHJcblxyXG4gICBhZGRHYW1lT2JqZWN0KG9iajogR2FtZU9iamVjdCl7XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMucHVzaChvYmopO1xyXG4gICAgICBvYmouc2NlbmUgPSB0aGlzO1xyXG5cclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuXHJcbiAgICAgIG9iai5pbml0KHRoaXMuZ2FtZSk7XHJcbiAgIH1cclxuICAgXHJcbiAgIHJlbW92ZUdhbWVPYmplY3Qob2JqOiBHYW1lT2JqZWN0KXtcclxuICAgICAgbGV0IGlkeCA9IHRoaXMuZ2FtZU9iamVjdHMuaW5kZXhPZihvYmopO1xyXG5cclxuICAgICAgaWYoaWR4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5zcGxpY2UoaWR4LCAxKTtcclxuXHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcblxyXG4gICAgICBvYmouZGVzdHJveSgpO1xyXG4gICB9XHJcblxyXG4gICBmaW5kT2JqZWN0KHByZWRpY2F0ZTogKGNvbXBvbmVudDogR2FtZU9iamVjdCkgPT4gYm9vbGVhbil7XHJcbiAgICAgIHJldHVybiB0aGlzLmdhbWVPYmplY3RzLmZpbmQocHJlZGljYXRlKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBCb3hDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Cb3hDb2xsaWRlclwiO1xyXG5pbXBvcnQgeyBDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9Db2xsaWRlclwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gXCJzaWduYWxzL1NpZ25hbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwiLi9UcmFuc2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSaWdpZGJvZHkgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgIHRyYW5zZm9ybSE6IFRyYW5zZm9ybTtcclxuICAgdmVsb2NpdHk6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICBtYXNzOiBudW1iZXIgPSAxO1xyXG4gICBib3VuY3luZXNzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgcHJldmlvdXNQb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbiAgIHVuc3R1Y2tEaXN0YW5jZTogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICBjb2xsaWRlZExlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY29sbGlkZWRSaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjb2xsaWRlZFRvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjb2xsaWRlZEJvdHRvbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAga2luZW1hdGljOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHNvbGlkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHVzZUR5bmFtaWNDb2xsaXNpb25zOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBvbkNvbGxpc2lvbjogU2lnbmFsPFJpZ2lkYm9keT4gPSBuZXcgU2lnbmFsPFJpZ2lkYm9keT4oKTtcclxuXHJcbiAgIGNvbGxpZGVyOiBDb2xsaWRlciA9IG5ldyBCb3hDb2xsaWRlcigpO1xyXG5cclxuICAgcHJpdmF0ZSBhYWJiOiBBQUJCO1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgc3VwZXIoKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYWFiYiA9IG5ldyBBQUJCKDAsIDAsIDAsIDApO1xyXG4gICB9XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBzdXBlci5pbml0KGdhbWUpO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLmFkZEJvZHkodGhpcyk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoYyA9PiBjIGluc3RhbmNlb2YgVHJhbnNmb3JtKSBhcyBUcmFuc2Zvcm07XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgdGhpcy5zY2VuZS5waHlzaWNzLnJlbW92ZUJvZHkodGhpcyk7XHJcbiAgIH1cclxuXHJcbiAgIGNvbGxpZGVzKG90aGVyOiBSaWdpZGJvZHkpe1xyXG4gICAgICByZXR1cm4gb3RoZXIuYm91bmRpbmdCb3gub3ZlcmxhcHModGhpcy5ib3VuZGluZ0JveCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBib3VuZGluZ0JveCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xsaWRlci5nZXRCb3VuZHModGhpcy50cmFuc2Zvcm0ucG9zaXRpb24sIHRoaXMuYWFiYik7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm0gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgIHBvc2l0aW9uOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgXHJcbiAgIC8vIEludGVycG9sYXRlZCBwb3NpdGlvblxyXG4gICBpbnRlcnBvbGF0ZWRQb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbn0iLCJleHBvcnQgY2xhc3MgU2lnbmFsPFQ+e1xyXG4gICBmdW5jdGlvbnM6ICgodHlwZTogVCkgPT4gdm9pZClbXTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zID0gW107XHJcbiAgIH1cclxuXHJcbiAgIGxpc3RlbihmdW5jOiAodHlwZTogVCkgPT4gdm9pZCl7XHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zLnB1c2goZnVuYyk7XHJcbiAgICAgIHJldHVybiBmdW5jO1xyXG4gICB9XHJcbiAgIHJlbW92ZShmdW5jOiAodHlwZTogVCkgPT4gdm9pZCl7XHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuZnVuY3Rpb25zLmluZGV4T2YoZnVuYyk7XHJcbiAgICAgIGlmKGluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5mdW5jdGlvbnMuc3BsaWNlKGluZGV4KTtcclxuICAgfVxyXG5cclxuICAgZW1pdChldmVudCA6IFQpe1xyXG4gICAgICB0aGlzLmZ1bmN0aW9ucy5mb3JFYWNoKGZ1bmMgPT4gZnVuYyhldmVudCkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBBbmltYXRpb24gfSBmcm9tIFwiZ3JhcGhpY3MvQW5pbWF0aW9uXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSwgU3ByaXRlU2hlZXQgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFRpbGVDb2xsaWRlciB9IGZyb20gXCJtYXRoL2NvbGxpc2lvbi9UaWxlQ29sbGlkZXJcIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlRnJvbVRpbGVzZXQsIFRpbGVkTWFwLCBUaWxlZE9iamVjdCwgVGlsZWRPYmplY3RMYXllciwgVGlsZWRPYmplY3RMYXllclR5cGUsIFRpbGVkVGlsZUxheWVyLCBUaWxlZFRpbGVMYXllclR5cGUsIFRpbGVkQ29sbGlkZXJMYXllck5hbWUsIFRpbGVkVGlsZXNldCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XHJcblxyXG50eXBlIFRpbGVtYXBPYmplY3RMb2FkZXIgPSAob2JqZWN0OiBUaWxlZE9iamVjdCkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlbWFwVGlsZUxheWVye1xyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuICAgdGlsZXM6IChBbmltYXRpb258dW5kZWZpbmVkKVtdO1xyXG5cclxuICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy50aWxlcyA9IFtdO1xyXG5cclxuICAgICAgLy8gbGVuZ3RoIHN0dWZmLi4uIDonKVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgd2lkdGggKiBoZWlnaHQ7IGkrKykgdGhpcy50aWxlcy5wdXNoKHVuZGVmaW5lZCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldFRpbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy50aWxlc1t4ICsgeSAqIHRoaXMud2lkdGhdO1xyXG4gICB9XHJcbiAgIHNldFRpbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIGFuaW1hdGlvbjogQW5pbWF0aW9uKXtcclxuICAgICAgdGhpcy50aWxlc1t4ICsgeSAqIHRoaXMud2lkdGhdID0gYW5pbWF0aW9uO1xyXG4gICB9XHJcbiAgIHNldFRpbGVGcm9tSW5kZXgoaW5kZXg6IG51bWJlciwgYW5pbWF0aW9uOiBBbmltYXRpb24pe1xyXG4gICAgICB0aGlzLnRpbGVzW2luZGV4XSA9IGFuaW1hdGlvbjtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIsIHRpbGVXaWR0aDogbnVtYmVyLCB0aWxlSGVpZ2h0OiBudW1iZXIsIGJvdW5kczogQUFCQil7XHJcbiAgICAgIGxldCBzdGFydFggPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGJvdW5kcy5sZWZ0IC8gdGlsZVdpZHRoKSk7XHJcbiAgICAgIGxldCBlbmRYID0gTWF0aC5mbG9vcihNYXRoLm1pbih0aGlzLndpZHRoLCBib3VuZHMucmlnaHQgLyB0aWxlV2lkdGggKyAxKSk7XHJcblxyXG4gICAgICBsZXQgc3RhcnRZID0gTWF0aC5mbG9vcihNYXRoLm1heCgwLCBib3VuZHMudG9wIC8gdGlsZUhlaWdodCkpO1xyXG4gICAgICBsZXQgZW5kWSA9IE1hdGguZmxvb3IoTWF0aC5taW4odGhpcy5oZWlnaHQsIGJvdW5kcy5ib3R0b20gLyB0aWxlSGVpZ2h0ICsgMSkpO1xyXG4gICAgICBcclxuICAgICAgZm9yKGxldCB4ID0gc3RhcnRYOyB4IDwgZW5kWDsgeCsrKXtcclxuICAgICAgICAgZm9yKGxldCB5ID0gc3RhcnRZOyB5IDwgZW5kWTsgeSsrKXtcclxuICAgICAgICAgICAgbGV0IHRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XHJcbiAgICAgICAgICAgIGlmKHRpbGUgPT09IHVuZGVmaW5lZCkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICB0aWxlLnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbiAgIFxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlciwgYm91bmRzOiBBQUJCKXtcclxuICAgICAgbGV0IHN0YXJ0WCA9IE1hdGguZmxvb3IoTWF0aC5tYXgoMCwgYm91bmRzLmxlZnQgLyB0aWxlV2lkdGgpKTtcclxuICAgICAgbGV0IGVuZFggPSBNYXRoLmZsb29yKE1hdGgubWluKHRoaXMud2lkdGgsIGJvdW5kcy5yaWdodCAvIHRpbGVXaWR0aCArIDEpKTtcclxuXHJcbiAgICAgIGxldCBzdGFydFkgPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGJvdW5kcy50b3AgLyB0aWxlSGVpZ2h0KSk7XHJcbiAgICAgIGxldCBlbmRZID0gTWF0aC5mbG9vcihNYXRoLm1pbih0aGlzLmhlaWdodCwgYm91bmRzLmJvdHRvbSAvIHRpbGVIZWlnaHQgKyAxKSk7XHJcblxyXG4gICAgICBmb3IobGV0IHggPSBzdGFydFg7IHggPCBlbmRYOyB4Kyspe1xyXG4gICAgICAgICBmb3IobGV0IHkgPSBzdGFydFk7IHkgPCBlbmRZOyB5Kyspe1xyXG4gICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMuZ2V0VGlsZSh4LCB5KTtcclxuICAgICAgICAgICAgaWYodGlsZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGVTaW1wbGUodGlsZS5mcmFtZSwgeCAqIHRpbGVXaWR0aCwgeSAqIHRpbGVIZWlnaHQpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZW1hcENvbGxpc2lvbkxheWVye1xyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuICAgdGlsZXM6IGJvb2xlYW5bXTtcclxuICAgdGlsZW1hcDogVGlsZU1hcDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHRpbGVtYXA6IFRpbGVNYXAsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKXtcclxuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuXHJcbiAgICAgIHRoaXMudGlsZW1hcCA9IHRpbGVtYXA7XHJcblxyXG4gICAgICB0aGlzLnRpbGVzID0gW107XHJcblxyXG4gICAgICAvLyBsZW5ndGggc3R1ZmYuLi4gOicpXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3aWR0aCAqIGhlaWdodDsgaSsrKSB0aGlzLnRpbGVzLnB1c2goZmFsc2UpO1xyXG4gICB9XHJcblxyXG4gICBpc1BpeGVsU29saWQoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5pc1RpbGVTb2xpZChcclxuICAgICAgICAgTWF0aC5mbG9vcih4IC8gdGhpcy50aWxlbWFwLnRpbGVXaWR0aCksXHJcbiAgICAgICAgIE1hdGguZmxvb3IoeSAvIHRoaXMudGlsZW1hcC50aWxlSGVpZ2h0KVxyXG4gICAgICApO1xyXG4gICB9XHJcblxyXG4gICBpc1RpbGVTb2xpZCh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB0aGlzLmdldFRpbGUoeCwgeSk7XHJcbiAgIH1cclxuXHJcbiAgIGdldFRpbGVDb2xsaWRlcih4OiBudW1iZXIsIHk6IG51bWJlciwgdGlsZUNvbGxpZGVyOiBUaWxlQ29sbGlkZXIpe1xyXG4gICAgICB0aWxlQ29sbGlkZXIuc2l6ZS54ID0gdGhpcy50aWxlbWFwLnRpbGVXaWR0aDtcclxuICAgICAgdGlsZUNvbGxpZGVyLnNpemUueSA9IHRoaXMudGlsZW1hcC50aWxlSGVpZ2h0O1xyXG5cclxuICAgICAgdGlsZUNvbGxpZGVyLnRvcCA9ICF0aGlzLmlzVGlsZVNvbGlkKHgsIHkgLSAxKTtcclxuICAgICAgdGlsZUNvbGxpZGVyLmJvdHRvbSA9ICF0aGlzLmlzVGlsZVNvbGlkKHgsIHkgKyAxKTtcclxuICAgICAgdGlsZUNvbGxpZGVyLmxlZnQgPSAhdGhpcy5pc1RpbGVTb2xpZCh4IC0gMSwgeSk7XHJcbiAgICAgIHRpbGVDb2xsaWRlci5yaWdodCA9ICF0aGlzLmlzVGlsZVNvbGlkKHggKyAxLCB5KTtcclxuXHJcbiAgICAgIHJldHVybiB0aWxlQ29sbGlkZXI7XHJcbiAgIH1cclxuXHJcbiAgIGdldFRpbGUoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICBpZih4IDwgMCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBpZih4ID49IHRoaXMud2lkdGgpIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYoeSA8IDApIHJldHVybiBmYWxzZTsgXHJcbiAgICAgIGlmKHkgPj0gdGhpcy5oZWlnaHQpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW3ggKyB5ICogdGhpcy53aWR0aF07XHJcbiAgIH1cclxuICAgc2V0VGlsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgc29saWQ6IGJvb2xlYW4pe1xyXG4gICAgICB0aGlzLnRpbGVzW3ggKyB5ICogdGhpcy53aWR0aF0gPSBzb2xpZDtcclxuICAgfVxyXG4gICBzZXRUaWxlRnJvbUluZGV4KGluZGV4OiBudW1iZXIsIHNvbGlkOiBib29sZWFuKXtcclxuICAgICAgdGhpcy50aWxlc1tpbmRleF0gPSBzb2xpZDtcclxuICAgfVxyXG5cclxuICAgZHJhd0RlYnVnKGdyYXBoaWNzOiBHcmFwaGljcywgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlciwgYm91bmRzOiBBQUJCKXtcclxuICAgICAgbGV0IHN0YXJ0WCA9IE1hdGguZmxvb3IoTWF0aC5tYXgoMCwgYm91bmRzLmxlZnQgLyB0aWxlV2lkdGgpKTtcclxuICAgICAgbGV0IGVuZFggPSBNYXRoLmZsb29yKE1hdGgubWluKHRoaXMud2lkdGgsIGJvdW5kcy5yaWdodCAvIHRpbGVXaWR0aCArIDEpKTtcclxuXHJcbiAgICAgIGxldCBzdGFydFkgPSBNYXRoLmZsb29yKE1hdGgubWF4KDAsIGJvdW5kcy50b3AgLyB0aWxlSGVpZ2h0KSk7XHJcbiAgICAgIGxldCBlbmRZID0gTWF0aC5mbG9vcihNYXRoLm1pbih0aGlzLmhlaWdodCwgYm91bmRzLmJvdHRvbSAvIHRpbGVIZWlnaHQgKyAxKSk7XHJcblxyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcihcInJnYmEoMjU1LCA5MCwgMjAsIDAuOClcIik7XHJcblxyXG4gICAgICBsZXQgY29sbGlkZXIgPSBuZXcgVGlsZUNvbGxpZGVyKCk7XHJcbiAgICAgIGNvbnN0IHRoaWNrbmVzcyA9IDI7XHJcblxyXG4gICAgICBmb3IobGV0IHggPSBzdGFydFg7IHggPCBlbmRYOyB4Kyspe1xyXG4gICAgICAgICBmb3IobGV0IHkgPSBzdGFydFk7IHkgPCBlbmRZOyB5Kyspe1xyXG4gICAgICAgICAgICBpZighdGhpcy5pc1RpbGVTb2xpZCh4LCB5KSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb2xsaWRlciA9IHRoaXMuZ2V0VGlsZUNvbGxpZGVyKHgsIHksIGNvbGxpZGVyKTtcclxuXHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLnRvcCl7XHJcbiAgICAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0YW5nbGUoeCAqIHRpbGVXaWR0aCwgeSAqIHRpbGVIZWlnaHQsIHRpbGVXaWR0aCwgdGhpY2tuZXNzLCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihjb2xsaWRlci5ib3R0b20pe1xyXG4gICAgICAgICAgICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKHggKiB0aWxlV2lkdGgsIHkgKiB0aWxlSGVpZ2h0ICsgdGlsZUhlaWdodCAtIHRoaWNrbmVzcywgdGlsZVdpZHRoLCB0aGlja25lc3MsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLmxlZnQpe1xyXG4gICAgICAgICAgICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKHggKiB0aWxlV2lkdGgsIHkgKiB0aWxlSGVpZ2h0LCB0aGlja25lc3MsIHRpbGVIZWlnaHQsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGNvbGxpZGVyLnJpZ2h0KXtcclxuICAgICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3RhbmdsZSh4ICogdGlsZVdpZHRoICsgdGlsZVdpZHRoIC0gdGhpY2tuZXNzLCB5ICogdGlsZUhlaWdodCwgdGhpY2tuZXNzLCB0aWxlSGVpZ2h0LCB0cnVlKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCB7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG4gICB0aWxlV2lkdGg6IG51bWJlcjtcclxuICAgdGlsZUhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgbGF5ZXJzOiBUaWxlbWFwVGlsZUxheWVyW107XHJcbiAgIGNvbGxpZGVyczogVGlsZW1hcENvbGxpc2lvbkxheWVyW107XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgIHRoaXMudGlsZVdpZHRoID0gdGlsZVdpZHRoO1xyXG4gICAgICB0aGlzLnRpbGVIZWlnaHQgPSB0aWxlSGVpZ2h0O1xyXG4gICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICAgICB0aGlzLmNvbGxpZGVycyA9IFtdO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgYm91bmRzOiBBQUJCKXtcclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKDAsIDAsIHRoaXMud2lkdGggKiB0aGlzLnRpbGVXaWR0aCwgdGhpcy5oZWlnaHQgKiB0aGlzLnRpbGVIZWlnaHQsIHRydWUpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5kcmF3KGdyYXBoaWNzLCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0LCBib3VuZHMpKTtcclxuICAgICAgLy8gdGhpcy5jb2xsaWRlcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5kcmF3RGVidWcoZ3JhcGhpY3MsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQsIGJvdW5kcykpO1xyXG4gICB9XHJcblxyXG4gICAvLyBUT0RPIG1heWJlIG1vcmUgbGlrZSBiYXRjaCB1cGRhdGUgZXZlcnkgeCBmcmFtZXMgb3IgZGV2aWRlIHVwIHRoZSB3b3JrIHNvbWVob3cgb3ZlciBtdXB0aXBsZSBmcmFtZXNcclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIsIGJvdW5kczogQUFCQil7ICAgICAgXHJcbiAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gbGF5ZXIudXBkYXRlKGRlbHRhLCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0LCBib3VuZHMpKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBmcm9tVGlsZWRNYXAobWFwOiBUaWxlZE1hcCwgbG9hZGVyOiBUaWxlbWFwT2JqZWN0TG9hZGVyKXtcclxuICAgICAgbGV0IHRpbGVtYXAgPSBuZXcgVGlsZU1hcChtYXAud2lkdGgsIG1hcC5oZWlnaHQsIG1hcC50aWxld2lkdGgsIG1hcC50aWxlaGVpZ2h0KTtcclxuXHJcbiAgICAgIHRpbGVtYXAuYmFja2dyb3VuZENvbG9yID0gbWFwLmJhY2tncm91bmRjb2xvcjtcclxuICAgICAgXHJcbiAgICAgIC8vIFRJTEVTRVRTXHJcbiAgICAgIGxldCB0aWxlc2V0czoge3NldDogVGlsZWRUaWxlc2V0LCBzaGVldDogU3ByaXRlU2hlZXR9W10gPSBbXTtcclxuICAgICAgbGV0IHRpbGVzOiB7IFtrZXk6IG51bWJlcl06IEFuaW1hdGlvbiB9ID0ge307XHJcbiAgICAgIFxyXG4gICAgICBtYXAudGlsZXNldHMuZm9yRWFjaChzZXQgPT4ge1xyXG4gICAgICAgICBsZXQgc2hlZXQgPSBTcHJpdGVTaGVldC5mcm9tSFRNTChzZXQubmFtZSk7XHJcbiAgICAgICAgIHRpbGVzZXRzLnB1c2goe1xyXG4gICAgICAgICAgICBzZXQsXHJcbiAgICAgICAgICAgIHNoZWV0XHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgLy8gTG9hZCBhbGwgZGVmYXVsdCBhbmltYXRpb25zXHJcbiAgICAgICAgIHNldC50aWxlcz8uZm9yRWFjaCh0aWxlID0+IHtcclxuICAgICAgICAgICAgbGV0IGluZGV4ID0gdGlsZS5pZCArIHNldC5maXJzdGdpZDtcclxuXHJcbiAgICAgICAgICAgIGxldCBhbmltYXRpb24gPSAgbmV3IEFuaW1hdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgdGlsZS5hbmltYXRpb24uZm9yRWFjaChmcmFtZSA9PiB7XHJcbiAgICAgICAgICAgICAgIGFuaW1hdGlvbi5hZGRGcmFtZShnZXRTcHJpdGVGcm9tVGlsZXNldChzZXQsIGZyYW1lLnRpbGVpZCwgc2hlZXQpKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBhbmltYXRpb24uZnJhbWVSYXRlID0gNDtcclxuXHJcbiAgICAgICAgICAgIHRpbGVzW2luZGV4XSA9IGFuaW1hdGlvbjtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gVElMRSBMQVlFUlNcclxuICAgICAgbWFwLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRUaWxlTGF5ZXJUeXBlICYmIGxheWVyLm5hbWUgIT09IFRpbGVkQ29sbGlkZXJMYXllck5hbWUpe1xyXG4gICAgICAgICAgICBsZXQgdGlsZUxheWVyID0gbGF5ZXIgYXMgVGlsZWRUaWxlTGF5ZXI7XHJcblxyXG4gICAgICAgICAgICBpZighbGF5ZXIudmlzaWJsZSl7XHJcbiAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IHRpbGVtYXBMYXllciA9IG5ldyBUaWxlbWFwVGlsZUxheWVyKHRpbGVMYXllci53aWR0aCwgdGlsZUxheWVyLmhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGlsZUxheWVyLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICBsZXQgdGlsZUluZGV4ID0gdGlsZUxheWVyLmRhdGFbaV07XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgdGlsZSA9IHRpbGVzW3RpbGVJbmRleF07XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAvLyBGaW5kIHRpbGVcclxuICAgICAgICAgICAgICAgaWYodGlsZSA9PT0gdW5kZWZpbmVkICYmIHRpbGVJbmRleCAhPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aWxlc2V0cy5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGxldCB0aWxlc2V0ID0gdGlsZXNldHNbal07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBpZih0aWxlSW5kZXggPj0gdGlsZXNldC5zZXQuZmlyc3RnaWQgJiYgdGlsZUluZGV4IDwgdGlsZXNldC5zZXQuZmlyc3RnaWQgKyB0aWxlc2V0LnNldC50aWxlY291bnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlID0gZ2V0U3ByaXRlRnJvbVRpbGVzZXQodGlsZXNldC5zZXQsIHRpbGVJbmRleCAtIHRpbGVzZXQuc2V0LmZpcnN0Z2lkLCB0aWxlc2V0LnNoZWV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUgPSBuZXcgQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuYWRkRnJhbWUoc3ByaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHRpbGVzW3RpbGVJbmRleF0gPSB0aWxlO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBpZih0aWxlICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICB0aWxlbWFwTGF5ZXIuc2V0VGlsZUZyb21JbmRleChpLCB0aWxlLmNsb25lKCkpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRpbGVtYXAubGF5ZXJzLnB1c2godGlsZW1hcExheWVyKTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRUaWxlTGF5ZXJUeXBlICYmIGxheWVyLm5hbWUgPT09IFRpbGVkQ29sbGlkZXJMYXllck5hbWUpe1xyXG4gICAgICAgICAgICBsZXQgdGlsZUxheWVyID0gbGF5ZXIgYXMgVGlsZWRUaWxlTGF5ZXI7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgY29sbGlkZXJMYXllciA9IG5ldyBUaWxlbWFwQ29sbGlzaW9uTGF5ZXIodGlsZW1hcCwgdGlsZUxheWVyLndpZHRoLCB0aWxlTGF5ZXIuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aWxlTGF5ZXIuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIGxldCB0aWxlSW5kZXggPSB0aWxlTGF5ZXIuZGF0YVtpXTtcclxuICAgICAgICAgICAgICAgY29sbGlkZXJMYXllci5zZXRUaWxlRnJvbUluZGV4KGksIHRpbGVJbmRleCAhPT0gMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRpbGVtYXAuY29sbGlkZXJzLnB1c2goY29sbGlkZXJMYXllcik7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBPQkpFQ1QgTEFZRVJcclxuICAgICAgbWFwLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRPYmplY3RMYXllclR5cGUpe1xyXG4gICAgICAgICAgICBsZXQgb2JqTGF5ZXIgPSBsYXllciBhcyBUaWxlZE9iamVjdExheWVyO1xyXG4gICAgICAgICAgICBvYmpMYXllci5vYmplY3RzLmZvckVhY2gobG9hZGVyKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiB0aWxlbWFwO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGZyb21UaWxlZE1hcERvd25sb2FkKGZpbGU6IHN0cmluZywgbG9hZGVyOiBUaWxlbWFwT2JqZWN0TG9hZGVyKXtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGZpbGUpO1xyXG4gICAgICBsZXQgZCA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5mcm9tVGlsZWRNYXAoZCBhcyBUaWxlZE1hcCwgbG9hZGVyKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IHBpeGVsV2lkdGgoKXtcclxuICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLnRpbGVXaWR0aDtcclxuICAgfVxyXG4gICBnZXQgcGl4ZWxIZWlnaHQoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuaGVpZ2h0ICogdGhpcy50aWxlSGVpZ2h0O1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaWxlZE9iamVjdExheWVyVHlwZSA9IFwib2JqZWN0Z3JvdXBcIjtcclxuZXhwb3J0IGNvbnN0IFRpbGVkVGlsZUxheWVyVHlwZSA9IFwidGlsZWxheWVyXCI7XHJcblxyXG5leHBvcnQgY29uc3QgVGlsZWRDb2xsaWRlckxheWVyTmFtZSA9IFwiQ29sbGlkZXJzXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkTWFwIHtcclxuICAgd2lkdGg6IG51bWJlcjtcclxuICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICB0aWxld2lkdGg6IG51bWJlcjtcclxuICAgdGlsZWhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgYmFja2dyb3VuZGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICBsYXllcnM6IFRpbGVkTGF5ZXJbXTtcclxuICAgdGlsZXNldHM6IFRpbGVkVGlsZXNldFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkTGF5ZXIge1xyXG4gICBpZDogbnVtYmVyO1xyXG4gICBcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcblxyXG4gICBuYW1lOiBzdHJpbmc7XHJcbiAgIHR5cGU6IHN0cmluZztcclxuXHJcbiAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZFRpbGVMYXllciBleHRlbmRzIFRpbGVkTGF5ZXIge1xyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuICAgZGF0YTogbnVtYmVyW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZE9iamVjdExheWVyIGV4dGVuZHMgVGlsZWRMYXllcntcclxuICAgb2JqZWN0czogVGlsZWRPYmplY3RbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkT2JqZWN0IHtcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICB0eXBlOiBzdHJpbmc7XHJcblxyXG4gICBwcm9wZXJ0aWVzOiBUaWxlZE9iamVjdFByb3BlcnRpZXNbXTtcclxuXHJcbiAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZWRPYmplY3RQcm9wZXJ0aWVze1xyXG4gICBuYW1lOiBzdHJpbmc7XHJcbiAgIHR5cGU6IHN0cmluZztcclxuICAgdmFsdWU6IHN0cmluZ3xib29sZWFufG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZEFuaW1hdGVkVGlsZXN7XHJcbiAgIGlkOiBudW1iZXI7XHJcbiAgIGFuaW1hdGlvbjogVGlsZWRBbmltYXRlZFRpbGVGcmFtZVtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZWRBbmltYXRlZFRpbGVGcmFtZXtcclxuICAgZHVyYXRpb246IG51bWJlcixcclxuICAgdGlsZWlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZWRUaWxlc2V0IHtcclxuICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgZmlyc3RnaWQ6IG51bWJlcjtcclxuICAgaW1hZ2U6IHN0cmluZztcclxuICAgXHJcbiAgIGNvbHVtbnM6IG51bWJlcjtcclxuICAgdGlsZWNvdW50OiBudW1iZXI7XHJcblxyXG4gICB0aWxld2lkdGg6IG51bWJlcjtcclxuICAgdGlsZWhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgdGlsZXM6IFRpbGVkQW5pbWF0ZWRUaWxlc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNwcml0ZUZyb21UaWxlc2V0KHRpbGVzZXQ6IFRpbGVkVGlsZXNldCwgaW5kZXg6IG51bWJlciwgc2hlZXQ6IFNwcml0ZVNoZWV0KXtcclxuICAgbGV0IHggPSBpbmRleCAlIHRpbGVzZXQuY29sdW1ucztcclxuICAgbGV0IHkgPSBNYXRoLmZsb29yKGluZGV4IC8gdGlsZXNldC5jb2x1bW5zKTtcclxuXHJcbiAgIHJldHVybiBzaGVldC5nZXRTcHJpdGUoXHJcbiAgICAgIHggKiB0aWxlc2V0LnRpbGV3aWR0aCwgXHJcbiAgICAgIHkgKiB0aWxlc2V0LnRpbGVoZWlnaHQsIFxyXG4gICAgICB0aWxlc2V0LnRpbGV3aWR0aCwgXHJcbiAgICAgIHRpbGVzZXQudGlsZWhlaWdodCk7XHJcbn0iLCJleHBvcnQgY2xhc3MgQ3VydmV7XHJcbiAgIHB1YmxpYyBzdGF0aWMgbGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgZjogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIGEgKyAoYiAtIGEpICogZjtcclxuICAgfVxyXG4gICBzdGF0aWMgbGluZWFyKGE6IG51bWJlciwgYjogbnVtYmVyLCBmOiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gQ3VydmUubGVycChhLGIsZik7XHJcbiAgIH1cclxufSIsImNsYXNzIExpc3R7XHJcbiAgIGhhczxUPihsaXN0OiBUW118dW5kZWZpbmVkLCBmdW5jOiAoKHZhbHVlOiBUKSA9PiBib29sZWFuKSl7XHJcbiAgICAgIGlmKGxpc3QgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICBcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBpZihmdW5jKGxpc3RbaV0pKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExpc3QoKTsiLCJleHBvcnQgZnVuY3Rpb24gbm93KCl7XHJcbiAgIGlmKHdpbmRvdy5wZXJmb3JtYW5jZSl7XHJcbiAgICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwO1xyXG4gICB9XHJcbiAgIHJldHVybiBEYXRlLm5vdygpIC8gMTAwMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCh0aW1lSW5TZWNvbmRzOiBudW1iZXIpe1xyXG4gICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZUluU2Vjb25kcyk7XHJcbiAgIGxldCBtaWxsaXMgPSBNYXRoLmZsb29yKCh0aW1lSW5TZWNvbmRzICUgMSkgKiAxMDAwKTtcclxuXHJcbiAgIHJldHVybiAoXCJcIiArIHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJykgKyBcIjpcIiArIChcIlwiICsgbWlsbGlzKS5wYWRTdGFydCgzLCAnMCcpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==