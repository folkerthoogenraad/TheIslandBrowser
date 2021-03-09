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
exports.push([module.i, "* {\n  box-sizing: border-box; }\n\nhtml, body {\n  padding: 0;\n  margin: 0; }\n\n@font-face {\n  font-family: 'ZanbarSquare';\n  src: url(\"/assets/fonts/ZanbarSquare.ttf\"); }\n\nhtml, body {\n  font-family: \"ZanbarSquare\";\n  font-family: 'Oxygen', sans-serif;\n  font-size: 14px; }\n\nbody {\n  position: relative;\n  z-index: 0;\n  overflow: hidden;\n  width: 100vw;\n  height: 100vh; }\n\n#canvas {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  image-rendering: pixelated; }\n\n.resource {\n  display: none; }\n\n.game-overlay {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 1; }\n  .game-overlay .bar-bottom {\n    bottom: 0;\n    transform: translateY(100%); }\n  .game-overlay .bar-top {\n    top: 0;\n    transform: translateY(-100%); }\n  .game-overlay .bar-bottom, .game-overlay .bar-top {\n    position: absolute;\n    left: 0;\n    color: white;\n    background: black;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    width: 100%;\n    height: 120px;\n    transition: transform;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-in-out;\n    font-size: 2em; }\n  .game-overlay.game-over .bar-bottom, .game-overlay.game-over .bar-top {\n    transform: none; }\n  .game-overlay:not(.completed) .complete-banner {\n    display: none; }\n  .game-overlay.completed .fail-banner {\n    display: none; }\n  .game-overlay .best-time {\n    color: #999; }\n  .game-overlay .debug-alpha-message {\n    position: absolute;\n    color: #999;\n    right: 16px;\n    bottom: 16px;\n    z-index: 1000; }\n\n.modal {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 10000;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: visibility;\n  transition-duration: 0.2s;\n  transition-timing-function: ease-in-out; }\n  .modal .background {\n    position: absolute;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    width: 100%;\n    height: 100%;\n    opacity: 0.7;\n    background: black;\n    z-index: -1;\n    transition: opacity;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-in-out; }\n  .modal .content {\n    padding: 20px;\n    background: white;\n    transition: opacity, transform;\n    transition-duration: 0.2s;\n    transition-timing-function: ease-in-out; }\n    .modal .content .close {\n      padding: 5px 20px;\n      background: #e27d1e;\n      color: white;\n      cursor: pointer; }\n  .modal.closed {\n    visibility: hidden; }\n    .modal.closed .background {\n      opacity: 0; }\n    .modal.closed .content {\n      opacity: 0;\n      transform: translateY(40px); }\n", ""]);
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
var Physics_1 = __webpack_require__(/*! ./Physics */ "./src/ts/engine/Physics.ts");
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
        this.physics = new Physics_1.Physics();
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
            this.physics.fixedUpdate(this.fixedUpdateTime);
        }
        (_b = this.scene) === null || _b === void 0 ? void 0 : _b.update(delta);
        this.physics.update(delta);
        this.graphics.reset();
        this.graphics.clearScreen();
        (_c = this.scene) === null || _c === void 0 ? void 0 : _c.draw(this.graphics);
        this.physics.drawDebug(this.graphics);
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
exports.Input = exports.Keyboard = exports.GamepadInput = void 0;
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
    Keyboard.KeyArrowUp = "ArrowUp";
    Keyboard.KeyArrowDown = "ArrowDown";
    Keyboard.KeyArrowLeft = "ArrowLeft";
    Keyboard.KeyArrowRight = "ArrowRight";
    return Keyboard;
}());
exports.Keyboard = Keyboard;
var Input = /** @class */ (function () {
    function Input(root) {
        var _this = this;
        this.gamepads = [];
        this.keyboard = new Keyboard(root);
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
var Curve_1 = __webpack_require__(/*! util/Curve */ "./src/ts/util/Curve.ts");
var Physics = /** @class */ (function () {
    function Physics() {
        this.interpolate = true;
        this.bodies = [];
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
        });
        // Move all the bodies
        this.bodies.forEach(function (body) {
            body.transform.position.x += body.velocity.x * delta;
            body.transform.position.y += body.velocity.y * delta;
        });
        // TODO broadphase narrow phase stuff :)
        // Maybe start with sweep and prune
        // Unstuck all the bodies
        this.bodies.forEach(function (body) {
            if (body.solid)
                return;
            body.collidedTop = false;
            body.collidedBottom = false;
            body.collidedLeft = false;
            body.collidedRight = false;
            _this.bodies.forEach(function (box) {
                if (!box.solid)
                    return;
                var bbox = body.boundingBox;
                var otherbbox = box.boundingBox;
                if (!bbox.overlaps(otherbbox))
                    return;
                var minOverlapX = bbox.minOverlapXWithBias(otherbbox, body.velocity.x);
                var minOverlapY = bbox.minOverlapYWithBias(otherbbox, body.velocity.y);
                if (Math.abs(minOverlapX) < Math.abs(minOverlapY)) {
                    body.transform.position.x += minOverlapX;
                    body.collidedLeft = body.velocity.x < 0;
                    body.collidedRight = body.velocity.x > 0;
                }
                else {
                    body.transform.position.y += minOverlapY;
                    body.collidedBottom = body.velocity.y > 0;
                    body.collidedTop = body.velocity.y < 0;
                }
            });
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
        aabb.position.set(this.center);
        aabb.offset.apply(this.width / 2, this.height / 2);
        aabb.size.apply(this.width, this.height);
        return aabb;
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
        var cameraWidth = this.canvas.width / this.canvas.height * cameraHeight;
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
                return [4 /*yield*/, TileMap_1.TileMap.fromTiledMapDownload("assets/levels/level2.json", function (obj) {
                        if (obj.type === "Collider" || obj.type === "PlatformCollider") {
                            scene.addGameObject(new ColliderGameObject_1.ColliderGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
                        }
                        if (obj.type === "LevelManager") {
                            scene.addGameObject(new LevelManager_1.LevelManager());
                        }
                        if (obj.type === "PlayerSpawn") {
                            scene.addGameObject(new PlayerSpawnGameObject_1.PlayerSpawnGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height)));
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
        return _this;
    }
    PlayerInputComponent.prototype.update = function (delta) {
        var _this = this;
        this.jumpPressed = false;
        this.dashPressed = false;
        this.jumpDown = false;
        this.direction = 0;
        // TODO actually switch between controllers instead of this half baked half assed solution
        this.game.input.gamepads.forEach(function (pad) {
            if (pad.isButtonPressed(Input_1.GamepadInput.ButtonA)) {
                _this.jumpPressed = true;
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
        if (this.game.input.keyboard.isKeyDown(Input_1.Keyboard.KeyArrowLeft))
            this.direction = -1;
        if (this.game.input.keyboard.isKeyDown(Input_1.Keyboard.KeyArrowRight))
            this.direction = 1;
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
var Sprite_1 = __webpack_require__(/*! graphics/Sprite */ "./src/ts/graphics/Sprite.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var sheet = Sprite_1.SpriteSheet.fromHTML("Objects");
var ChestGameObject = /** @class */ (function (_super) {
    __extends(ChestGameObject, _super);
    function ChestGameObject(aabb) {
        var _this = _super.call(this) || this;
        _this.isOpen = false;
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.set(aabb.position);
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        _this.body.localAABB = aabb;
        _this.closed = sheet.getSprite(0, 64, 16, 16);
        _this.open = sheet.getSprite(16, 64, 16, 16);
        return _this;
    }
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
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var ColliderGameObject = /** @class */ (function (_super) {
    __extends(ColliderGameObject, _super);
    function ColliderGameObject(aabb) {
        var _this = _super.call(this) || this;
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.set(aabb.position);
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        _this.body.solid = true;
        _this.body.localAABB = aabb;
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
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var Time_1 = __webpack_require__(/*! util/Time */ "./src/ts/util/Time.ts");
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
        this.finish.body.onCollision.listen(function (other) {
            if (other.gameObject instanceof PlayerGameObject_1.PlayerGameObject) {
                _this.completed = true;
                _this.stop();
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
        }
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
        this.player.transform.position.set(this.spawn.transform.position);
        this.player.transform.interpolatedPosition.set(this.spawn.transform.position);
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
    return LevelManager;
}(GameObject_1.GameObject));
exports.LevelManager = LevelManager;


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
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var PlayerFinishGameObject = /** @class */ (function (_super) {
    __extends(PlayerFinishGameObject, _super);
    function PlayerFinishGameObject(aabb) {
        var _this = _super.call(this) || this;
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.set(aabb.position);
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        // Interactables and shit
        _this.body.useDynamicCollisions = true;
        _this.body.localAABB = aabb;
        return _this;
    }
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
var Sprite_1 = __webpack_require__(/*! graphics/Sprite */ "./src/ts/graphics/Sprite.ts");
var HealthComponent_1 = __webpack_require__(/*! island/Components/HealthComponent */ "./src/ts/island/Components/HealthComponent.ts");
var PlayerInputComponent_1 = __webpack_require__(/*! island/Components/PlayerInputComponent */ "./src/ts/island/Components/PlayerInputComponent.ts");
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var sheet = Sprite_1.SpriteSheet.fromHTML("Player");
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
        _this.health.onDeath.listen(_this.onDeath.bind(_this));
        _this.body.useDynamicCollisions = true;
        _this.body.localAABB.offset.x = 5;
        _this.body.localAABB.offset.y = 5;
        _this.body.localAABB.size.x = 10;
        _this.body.localAABB.size.y = 13;
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
    PlayerGameObject.prototype.update = function (delta) {
        _super.prototype.update.call(this, delta);
        if (this.input.jumpPressed) {
            this.jumpHop = true;
        }
        if (this.input.dashPressed) {
            this.dashHop = true;
        }
        var cam = this.scene.camera;
        cam.center.set(this.transform.interpolatedPosition);
        // TODO do this right.
        var sceneWidth = 640;
        var sceneHeight = 360;
        if (cam.center.x - cam.width / 2 < 0)
            cam.center.x = cam.width / 2;
        if (cam.center.x + cam.width / 2 > sceneWidth)
            cam.center.x = sceneWidth - cam.width / 2;
        if (cam.center.y - cam.height / 2 < 0)
            cam.center.y = cam.height / 2;
        if (cam.center.y + cam.height / 2 > sceneHeight)
            cam.center.y = sceneHeight - cam.height / 2;
        var bounds = cam.getBounds();
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
        if (!this.grounded && this.body.velocity.y > 0) {
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
        _this.transform.position.set(aabb.position);
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
var Rigidbody_1 = __webpack_require__(/*! scene/components/Rigidbody */ "./src/ts/scene/components/Rigidbody.ts");
var Transform_1 = __webpack_require__(/*! scene/components/Transform */ "./src/ts/scene/components/Transform.ts");
var GameObject_1 = __webpack_require__(/*! scene/GameObject */ "./src/ts/scene/GameObject.ts");
var SpikesGameObject = /** @class */ (function (_super) {
    __extends(SpikesGameObject, _super);
    function SpikesGameObject(aabb, shrink) {
        var _this = _super.call(this) || this;
        if (shrink) {
            var height = aabb.height;
            var skin = aabb.height - 3;
            if (skin > 0) {
                aabb.size.y -= skin;
                aabb.position.y += skin;
            }
        }
        _this.transform = _this.addComponent(new Transform_1.Transform());
        _this.transform.position.set(aabb.position);
        _this.body = _this.addComponent(new Rigidbody_1.Rigidbody());
        _this.body.useDynamicCollisions = true;
        _this.body.localAABB = aabb;
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

/***/ "./src/ts/math/AABB.ts":
/*!*****************************!*\
  !*** ./src/ts/math/AABB.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
exports.AABB = void 0;
var Vector2_1 = __webpack_require__(/*! ./Vector2 */ "./src/ts/math/Vector2.ts");
var AABB = /** @class */ (function () {
    function AABB(position, size, offset) {
        if (position === void 0) { position = new Vector2_1.Vector2(); }
        if (size === void 0) { size = new Vector2_1.Vector2(); }
        if (offset === void 0) { offset = new Vector2_1.Vector2(); }
        this.position = position;
        this.size = size;
        this.offset = offset;
    }
    Object.defineProperty(AABB.prototype, "left", {
        get: function () { return this.position.x - this.offset.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "top", {
        get: function () { return this.position.y - this.offset.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "right", {
        get: function () { return this.position.x + this.size.x - this.offset.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "bottom", {
        get: function () { return this.position.y + this.size.y - this.offset.y; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "width", {
        get: function () { return this.size.x; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AABB.prototype, "height", {
        get: function () { return this.size.y; },
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
    AABB.prototype.set = function (other) {
        this.position.set(other.position);
        this.size.set(other.size);
        this.offset.set(other.offset);
    };
    AABB.prototype.clone = function () {
        return new AABB(this.position.clone(), this.size.clone(), this.offset.clone());
    };
    AABB.Create = function (x, y, w, h) {
        return new AABB(new Vector2_1.Vector2(x, y), new Vector2_1.Vector2(w, h));
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
var Camera_1 = __webpack_require__(/*! graphics/Camera */ "./src/ts/graphics/Camera.ts");
var Scene = /** @class */ (function () {
    function Scene() {
        this.initialized = false;
        this.camera = new Camera_1.Camera();
        this.gameObjects = [];
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
        var _a;
        (_a = this.tilemap) === null || _a === void 0 ? void 0 : _a.update(delta);
        this.gameObjects.forEach(function (obj) { return obj.update(delta); });
    };
    Scene.prototype.fixedUpdate = function (delta) {
        this.gameObjects.forEach(function (obj) { return obj.fixedUpdate(delta); });
    };
    Scene.prototype.draw = function (graphics) {
        var _a;
        graphics.setCamera(this.camera);
        (_a = this.tilemap) === null || _a === void 0 ? void 0 : _a.draw(graphics);
        this.gameObjects.forEach(function (obj) { return obj.draw(graphics); });
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
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var Component_1 = __webpack_require__(/*! scene/Component */ "./src/ts/scene/Component.ts");
var Signal_1 = __webpack_require__(/*! signals/Signal */ "./src/ts/signals/Signal.ts");
var Transform_1 = __webpack_require__(/*! ./Transform */ "./src/ts/scene/components/Transform.ts");
var Rigidbody = /** @class */ (function (_super) {
    __extends(Rigidbody, _super);
    function Rigidbody() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.velocity = new Vector2_1.Vector2();
        _this.mass = 1;
        _this.bouncyness = 0;
        _this.previousPosition = new Vector2_1.Vector2();
        _this.collidedLeft = false;
        _this.collidedRight = false;
        _this.collidedTop = false;
        _this.collidedBottom = false;
        _this.solid = false;
        _this.useDynamicCollisions = false;
        _this.onCollision = new Signal_1.Signal();
        _this.localAABB = new AABB_1.AABB();
        return _this;
    }
    Rigidbody.prototype.init = function (game) {
        _super.prototype.init.call(this, game);
        this.game.physics.addBody(this);
        this.transform = this.gameObject.findComponent(function (c) { return c instanceof Transform_1.Transform; });
    };
    Rigidbody.prototype.destroy = function () {
        this.game.physics.removeBody(this);
    };
    Object.defineProperty(Rigidbody.prototype, "boundingBox", {
        get: function () {
            this.localAABB.position.set(this.transform.position);
            return this.localAABB;
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
exports.TileMap = exports.TilemapLayer = void 0;
var Animation_1 = __webpack_require__(/*! graphics/Animation */ "./src/ts/graphics/Animation.ts");
var Sprite_1 = __webpack_require__(/*! graphics/Sprite */ "./src/ts/graphics/Sprite.ts");
var TiledMap_1 = __webpack_require__(/*! ./TiledMap */ "./src/ts/tilemap/TiledMap.ts");
var TilemapLayer = /** @class */ (function () {
    function TilemapLayer(width, height) {
        this.width = width;
        this.height = height;
        this.tiles = [];
        // length stuff... :')
        for (var i = 0; i < width * height; i++)
            this.tiles.push(undefined);
    }
    TilemapLayer.prototype.getTile = function (x, y) {
        return this.tiles[x + y * this.width];
    };
    TilemapLayer.prototype.setTile = function (x, y, animation) {
        this.tiles[x + y * this.width] = animation;
    };
    TilemapLayer.prototype.setTileFromIndex = function (index, animation) {
        this.tiles[index] = animation;
    };
    TilemapLayer.prototype.update = function (delta) {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                var tile = this.getTile(x, y);
                if (tile === undefined)
                    continue;
                tile.update(delta);
            }
        }
    };
    TilemapLayer.prototype.draw = function (graphics, tileWidth, tileHeight) {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                var tile = this.getTile(x, y);
                if (tile === undefined)
                    continue;
                graphics.drawSpriteSimple(tile.frame, x * tileWidth, y * tileHeight);
            }
        }
    };
    return TilemapLayer;
}());
exports.TilemapLayer = TilemapLayer;
var TileMap = /** @class */ (function () {
    function TileMap(width, height, tileWidth, tileHeight) {
        this.backgroundColor = "";
        this.width = width;
        this.height = height;
        this.tileWidth = tileWidth;
        this.tileHeight = tileHeight;
        this.layers = [];
    }
    TileMap.prototype.draw = function (graphics) {
        var _this = this;
        graphics.setColor(this.backgroundColor);
        graphics.drawRectangle(0, 0, this.width * this.tileWidth, this.height * this.tileHeight, true);
        this.layers.forEach(function (layer) { return layer.draw(graphics, _this.tileWidth, _this.tileHeight); });
    };
    // TODO maybe more like batch update every x frames or devide up the work somehow over muptiple frames
    TileMap.prototype.update = function (delta) {
        this.layers.forEach(function (layer) { return layer.update(delta); });
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
        console.dir(tilesets);
        // TILE LAYERS
        map.layers.forEach(function (layer) {
            if (layer.type === TiledMap_1.TiledTileLayerType) {
                var tileLayer = layer;
                var tilemapLayer = new TilemapLayer(tileLayer.width, tileLayer.height);
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
exports.getSpriteFromTileset = exports.TiledTileLayerType = exports.TiledObjectLayerType = void 0;
exports.TiledObjectLayerType = "objectgroup";
exports.TiledTileLayerType = "tilelayer";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2FwcC5zY3NzPzUxYzUiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2VuZ2luZS9HYW1lLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9lbmdpbmUvSW5wdXQudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2VuZ2luZS9QaHlzaWNzLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9ncmFwaGljcy9BbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvZ3JhcGhpY3MvR3JhcGhpY3MudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2dyYXBoaWNzL1Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9Db21wb25lbnRzL0hlYWx0aENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0NvbXBvbmVudHMvUGxheWVySW5wdXRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9DaGVzdEdhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9Db2xsaWRlckdhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9MZXZlbE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJGaW5pc2hHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1BsYXllclNwYXduR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1NwaWtlc0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL21hdGgvQUFCQi50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvbWF0aC9WZWN0b3IyLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9zY2VuZS9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3NjZW5lL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3NjZW5lL1NjZW5lLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy9zY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keS50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvc2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3NpZ25hbHMvU2lnbmFsLnRzIiwid2VicGFjazovLy9zcmMvdHMvRDovUHJvZ3JhbW1lcmVuL1Byb2plY3RzL1dlYi9UaGVJc2xhbmRCcm93c2VyL3NyYy90cy90aWxlbWFwL1RpbGVNYXAudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3RpbGVtYXAvVGlsZWRNYXAudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3V0aWwvQ3VydmUudHMiLCJ3ZWJwYWNrOi8vL3NyYy90cy9EOi9Qcm9ncmFtbWVyZW4vUHJvamVjdHMvV2ViL1RoZUlzbGFuZEJyb3dzZXIvc3JjL3RzL3V0aWwvTGlzdC50cyIsIndlYnBhY2s6Ly8vc3JjL3RzL0Q6L1Byb2dyYW1tZXJlbi9Qcm9qZWN0cy9XZWIvVGhlSXNsYW5kQnJvd3Nlci9zcmMvdHMvdXRpbC9UaW1lLnRzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FB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QUFFRCxrQkFBZSxJQUFJLElBQUksRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDVDFCLFNBQWdCLEdBQUc7SUFDaEIsSUFBRyxNQUFNLENBQUMsV0FBVyxFQUFDO1FBQ25CLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7S0FDekM7SUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxJQUFJLENBQUM7QUFDNUIsQ0FBQztBQUxELGtCQUtDO0FBRUQsU0FBZ0IsTUFBTSxDQUFDLGFBQXFCO0lBQ3pDLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEMsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztJQUVwRCxPQUFPLENBQUMsRUFBRSxHQUFHLE9BQU8sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7QUFDakYsQ0FBQztBQUxELHdCQUtDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbmh0bWwsIGJvZHkge1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDsgfVxcblxcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6ICdaYW5iYXJTcXVhcmUnO1xcbiAgc3JjOiB1cmwoXFxcIi9hc3NldHMvZm9udHMvWmFuYmFyU3F1YXJlLnR0ZlxcXCIpOyB9XFxuXFxuaHRtbCwgYm9keSB7XFxuICBmb250LWZhbWlseTogXFxcIlphbmJhclNxdWFyZVxcXCI7XFxuICBmb250LWZhbWlseTogJ094eWdlbicsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDE0cHg7IH1cXG5cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgaGVpZ2h0OiAxMDB2aDsgfVxcblxcbiNjYW52YXMge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogLTE7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBpbWFnZS1yZW5kZXJpbmc6IHBpeGVsYXRlZDsgfVxcblxcbi5yZXNvdXJjZSB7XFxuICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmdhbWUtb3ZlcmxheSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHotaW5kZXg6IDE7IH1cXG4gIC5nYW1lLW92ZXJsYXkgLmJhci1ib3R0b20ge1xcbiAgICBib3R0b206IDA7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxMDAlKTsgfVxcbiAgLmdhbWUtb3ZlcmxheSAuYmFyLXRvcCB7XFxuICAgIHRvcDogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTsgfVxcbiAgLmdhbWUtb3ZlcmxheSAuYmFyLWJvdHRvbSwgLmdhbWUtb3ZlcmxheSAuYmFyLXRvcCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbGVmdDogMDtcXG4gICAgY29sb3I6IHdoaXRlO1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm07XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDtcXG4gICAgZm9udC1zaXplOiAyZW07IH1cXG4gIC5nYW1lLW92ZXJsYXkuZ2FtZS1vdmVyIC5iYXItYm90dG9tLCAuZ2FtZS1vdmVybGF5LmdhbWUtb3ZlciAuYmFyLXRvcCB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTsgfVxcbiAgLmdhbWUtb3ZlcmxheTpub3QoLmNvbXBsZXRlZCkgLmNvbXBsZXRlLWJhbm5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5nYW1lLW92ZXJsYXkuY29tcGxldGVkIC5mYWlsLWJhbm5lciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG4gIC5nYW1lLW92ZXJsYXkgLmJlc3QtdGltZSB7XFxuICAgIGNvbG9yOiAjOTk5OyB9XFxuICAuZ2FtZS1vdmVybGF5IC5kZWJ1Zy1hbHBoYS1tZXNzYWdlIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBjb2xvcjogIzk5OTtcXG4gICAgcmlnaHQ6IDE2cHg7XFxuICAgIGJvdHRvbTogMTZweDtcXG4gICAgei1pbmRleDogMTAwMDsgfVxcblxcbi5tb2RhbCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICBib3R0b206IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHotaW5kZXg6IDEwMDAwO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIHRyYW5zaXRpb246IHZpc2liaWxpdHk7XFxuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuICAubW9kYWwgLmJhY2tncm91bmQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgcmlnaHQ6IDA7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgb3BhY2l0eTogMC43O1xcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcXG4gICAgei1pbmRleDogLTE7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHk7XFxuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluLW91dDsgfVxcbiAgLm1vZGFsIC5jb250ZW50IHtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZDogd2hpdGU7XFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHksIHRyYW5zZm9ybTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuICAgIC5tb2RhbCAuY29udGVudCAuY2xvc2Uge1xcbiAgICAgIHBhZGRpbmc6IDVweCAyMHB4O1xcbiAgICAgIGJhY2tncm91bmQ6ICNlMjdkMWU7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgLm1vZGFsLmNsb3NlZCB7XFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjsgfVxcbiAgICAubW9kYWwuY2xvc2VkIC5iYWNrZ3JvdW5kIHtcXG4gICAgICBvcGFjaXR5OiAwOyB9XFxuICAgIC5tb2RhbC5jbG9zZWQgLmNvbnRlbnQge1xcbiAgICAgIG9wYWNpdHk6IDA7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDQwcHgpOyB9XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiLy8gTG9hZCB0aGUgamF2YXNjcmlwdCBtYWluXHJcbmltcG9ydCBcIi4vanMvbWFpblwiO1xyXG5pbXBvcnQgXCIuL3RzL1wiO1xyXG5cclxuLy8gTG9hZCB0aGUgU0FTUyBtYWluXHJcbmltcG9ydCBcIi4vc2Nzcy9hcHAuc2Nzc1wiOyIsImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsICgpPT57XHJcbiAgIGNvbnNvbGUubG9nKFwiV2VicGFjayB0ZW1wbGF0ZSBsb2FkZWQuXCIpO1xyXG59KTsiLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2FwcC5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCJpbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCJzY2VuZS9TY2VuZVwiO1xyXG5pbXBvcnQgeyBub3cgfSBmcm9tIFwidXRpbC9UaW1lXCI7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSBcIi4vSW5wdXRcIjtcclxuaW1wb3J0IHsgUGh5c2ljcyB9IGZyb20gXCIuL1BoeXNpY3NcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1leyAgIFxyXG4gICBjdXJyZW50VGltZTogbnVtYmVyID0gMDtcclxuICAgXHJcbiAgIGZpeGVkVXBkYXRlVGltZTogbnVtYmVyID0gMSAvIDYwO1xyXG4gICBpbnRlclVwZGF0ZVRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICBwcml2YXRlIHJ1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgcHJpdmF0ZSBhbmltYXRpb25GcmFtZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIHNjZW5lPzogU2NlbmU7XHJcbiAgIGdyYXBoaWNzOiBHcmFwaGljcztcclxuICAgaW5wdXQ6IElucHV0O1xyXG4gICBwaHlzaWNzOiBQaHlzaWNzO1xyXG4gICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCl7XHJcbiAgICAgIHRoaXMuZ3JhcGhpY3MgPSBuZXcgR3JhcGhpY3MoY2FudmFzKTtcclxuICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dChjYW52YXMpO1xyXG4gICAgICB0aGlzLnBoeXNpY3MgPSBuZXcgUGh5c2ljcygpO1xyXG4gICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuXHJcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsICgpID0+IHRoaXMudXBkYXRlU2l6ZSgpKTtcclxuICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgIH1cclxuXHJcbiAgIHJ1bigpe1xyXG4gICAgICBpZih0aGlzLnJ1bm5pbmcpIHJldHVybjtcclxuICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmU/LmluaXQodGhpcyk7XHJcblxyXG4gICAgICB0aGlzLl9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKTtcclxuICAgfVxyXG5cclxuICAgc3RvcCgpe1xyXG4gICAgICB0aGlzLl9jYW5jZWxBbmltYXRpb25GcmFtZSgpO1xyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKCl7XHJcbiAgICAgIHRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xyXG5cclxuICAgICAgbGV0IG4gPSBub3coKTtcclxuICAgICAgbGV0IGRlbHRhID0gbiAtIHRoaXMuY3VycmVudFRpbWU7XHJcbiAgICAgIHRoaXMuY3VycmVudFRpbWUgPSBuO1xyXG5cclxuICAgICAgaWYoZGVsdGEgPiAwLjEpeyBkZWx0YSA9IDAuMTsgfVxyXG5cclxuICAgICAgdGhpcy5pbnB1dC5wb2xsKCk7XHJcblxyXG4gICAgICB0aGlzLmludGVyVXBkYXRlVGltZSArPSBkZWx0YTtcclxuICAgICAgXHJcbiAgICAgIC8vIFRPRE8gZml4IHRoZSBpc3N1ZSB3aGVyZSB3ZSBhcmUgbGFnZ2luZyBiZWhpbmQhXHJcbiAgICAgIC8vIGlmIHRoZXJlIGFyZSB0b28gbWFueSB1cGRhdGVzIGF0IG9uY2UgYW5kIHdlIGNhbid0IGtlZXAgdXAsIHdlIG5lZWQgdG8gZHVtcCBzb21lIGZyYW1lc1xyXG4gICAgICAvLyBhbmQgc2VuZCBhIHdhcm5pbmcuXHJcbiAgICAgIHdoaWxlKHRoaXMuaW50ZXJVcGRhdGVUaW1lID4gdGhpcy5maXhlZFVwZGF0ZVRpbWUpe1xyXG4gICAgICAgICB0aGlzLmludGVyVXBkYXRlVGltZSAtPSB0aGlzLmZpeGVkVXBkYXRlVGltZTtcclxuICAgICAgICAgdGhpcy5zY2VuZT8uZml4ZWRVcGRhdGUodGhpcy5maXhlZFVwZGF0ZVRpbWUpO1xyXG4gICAgICAgICB0aGlzLnBoeXNpY3MuZml4ZWRVcGRhdGUodGhpcy5maXhlZFVwZGF0ZVRpbWUpO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMuc2NlbmU/LnVwZGF0ZShkZWx0YSk7XHJcbiAgICAgIHRoaXMucGh5c2ljcy51cGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgdGhpcy5ncmFwaGljcy5yZXNldCgpO1xyXG4gICAgICB0aGlzLmdyYXBoaWNzLmNsZWFyU2NyZWVuKCk7XHJcblxyXG4gICAgICB0aGlzLnNjZW5lPy5kcmF3KHRoaXMuZ3JhcGhpY3MpO1xyXG4gICAgICB0aGlzLnBoeXNpY3MuZHJhd0RlYnVnKHRoaXMuZ3JhcGhpY3MpO1xyXG5cclxuICAgICAgdGhpcy5pbnB1dC5mbHVzaCgpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGVTaXplKCl7XHJcbiAgICAgIHRoaXMuZ3JhcGhpY3MudXBkYXRlU2l6ZSgpO1xyXG4gICAgICB0aGlzLnNjZW5lPy51cGRhdGVTaXplKCk7XHJcbiAgIH1cclxuXHJcbiAgIF9jYW5jZWxBbmltYXRpb25GcmFtZSgpe1xyXG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGlvbkZyYW1lKTtcclxuICAgfVxyXG5cclxuICAgX3JlcXVlc3RBbmltYXRpb25GcmFtZSgpe1xyXG4gICAgICB0aGlzLmFuaW1hdGlvbkZyYW1lID0gcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG4gICB9XHJcbn0iLCIvLyBDb250cm9sbGVyIG1hcCFcclxuZXhwb3J0IGNsYXNzIEdhbWVwYWRJbnB1dHtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBeGlzTGVmdFggPSAwO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEF4aXNMZWZ0WSA9IDE7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQXhpc1JpZ2h0WCA9IDI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQXhpc1JpZ2h0WSA9IDM7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkEgPSAwO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkIgPSAxO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblggPSAyO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblkgPSAzO1xyXG4gICBcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25EcGFkVXAgPSAxMjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25EcGFkRG93biA9IDEzO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkRwYWRMZWZ0ID0gMTQ7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uRHBhZFJpZ2h0ID0gMTU7XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkxlZnRCdW1wZXIgPSA0O1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvblJpZ2h0QnVtcGVyID0gNTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25MZWZ0VHJpZ2dlciA9IDY7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uUmlnaHRUcmlnZ2VyID0gNztcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uTWVudSA9IDg7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uU3RhcnQgPSA5O1xyXG5cclxuICAgcHJldmlvdXNCdXR0b25TdGF0ZTogYm9vbGVhbltdID0gW107XHJcbiAgIGJ1dHRvblN0YXRlOiBib29sZWFuW10gPSBbXTtcclxuICAgXHJcbiAgIGF4aXNTdGF0ZTogbnVtYmVyW10gPSBbXTtcclxuXHJcbiAgIGluZGV4OiBudW1iZXI7XHJcblxyXG4gICBkZWFkWm9uZTogbnVtYmVyID0gMC4yO1xyXG4gICBmdWxsWm9uZTogbnVtYmVyID0gMC40O1xyXG5cclxuICAgY29uc3RydWN0b3IoaW5kZXg6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcclxuXHJcbiAgICAgIGxldCBnYW1lcGFkID0gdGhpcy5nZXROYXZpZ2F0b3JHYW1lcGFkKCkhO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWVwYWQuYnV0dG9ucy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMucHJldmlvdXNCdXR0b25TdGF0ZS5wdXNoKGZhbHNlKTtcclxuICAgICAgICAgdGhpcy5idXR0b25TdGF0ZS5wdXNoKGZhbHNlKTtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZXBhZC5heGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgdGhpcy5heGlzU3RhdGUucHVzaCgwKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBwb2xsKCl7XHJcbiAgICAgIC8vIFN3YXAgdGhlIG9sZCBhbmQgdGhlIG5ldyBvbmUsIGNvcHkgdG8gdGhlIG5ld1xyXG4gICAgICBsZXQgdGVtcCA9IHRoaXMucHJldmlvdXNCdXR0b25TdGF0ZTtcclxuICAgICAgdGhpcy5wcmV2aW91c0J1dHRvblN0YXRlID0gdGhpcy5idXR0b25TdGF0ZTtcclxuICAgICAgdGhpcy5idXR0b25TdGF0ZSA9IHRlbXA7XHJcblxyXG4gICAgICBsZXQgZ2FtZXBhZCA9IHRoaXMuZ2V0TmF2aWdhdG9yR2FtZXBhZCgpITtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lcGFkLmJ1dHRvbnMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICB0aGlzLmJ1dHRvblN0YXRlW2ldID0gZ2FtZXBhZC5idXR0b25zW2ldLnByZXNzZWQ7XHJcbiAgICAgIH1cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWVwYWQuYXhlcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMuYXhpc1N0YXRlW2ldID0gZ2FtZXBhZC5heGVzW2ldO1xyXG5cclxuICAgICAgICAgaWYoTWF0aC5hYnModGhpcy5heGlzU3RhdGVbaV0pIDwgdGhpcy5kZWFkWm9uZSkgdGhpcy5heGlzU3RhdGVbaV0gPSAwOyBcclxuICAgICAgICAgaWYoTWF0aC5hYnModGhpcy5heGlzU3RhdGVbaV0pID4gMSAtIHRoaXMuZnVsbFpvbmUpIHRoaXMuYXhpc1N0YXRlW2ldID0gTWF0aC5zaWduKHRoaXMuYXhpc1N0YXRlW2ldKTsgXHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgaXNCdXR0b25QcmVzc2VkKGJ1dHRvbkluZGV4OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25TdGF0ZVtidXR0b25JbmRleF0gJiYgIXRoaXMucHJldmlvdXNCdXR0b25TdGF0ZVtidXR0b25JbmRleF07XHJcbiAgIH1cclxuICAgaXNCdXR0b25Eb3duKGJ1dHRvbkluZGV4OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5idXR0b25TdGF0ZVtidXR0b25JbmRleF07XHJcbiAgIH1cclxuICAgaXNCdXR0b25SZWxlYXNlZChidXR0b25JbmRleDogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuICF0aGlzLmJ1dHRvblN0YXRlW2J1dHRvbkluZGV4XSAmJiB0aGlzLnByZXZpb3VzQnV0dG9uU3RhdGVbYnV0dG9uSW5kZXhdO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbGVmdEF4aXNYKCkgeyByZXR1cm4gdGhpcy5heGlzU3RhdGVbR2FtZXBhZElucHV0LkF4aXNMZWZ0WF07fVxyXG4gICBnZXQgbGVmdEF4aXNZKCkgeyByZXR1cm4gdGhpcy5heGlzU3RhdGVbR2FtZXBhZElucHV0LkF4aXNMZWZ0WV07fVxyXG4gICBnZXQgcmlnaHRBeGlzWCgpIHsgcmV0dXJuIHRoaXMuYXhpc1N0YXRlW0dhbWVwYWRJbnB1dC5BeGlzUmlnaHRYXTt9XHJcbiAgIGdldCByaWdodEF4aXNZKCkgeyByZXR1cm4gdGhpcy5heGlzU3RhdGVbR2FtZXBhZElucHV0LkF4aXNSaWdodFldO31cclxuXHJcbiAgIGdldE5hdmlnYXRvckdhbWVwYWQoKXtcclxuICAgICAgY29uc3QgcGFkcyA9IG5hdmlnYXRvci5nZXRHYW1lcGFkcygpO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHBhZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBsZXQgcGFkID0gcGFkc1tpXTtcclxuICAgICAgICAgaWYocGFkID09PSBudWxsKSBjb250aW51ZTtcclxuICAgICAgICAgaWYocGFkLmluZGV4ID09PSB0aGlzLmluZGV4KSByZXR1cm4gcGFkO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICB9XHJcbn1cclxuXHJcbnR5cGUgS2V5ID0gc3RyaW5nO1xyXG5cclxuZXhwb3J0IGNsYXNzIEtleWJvYXJke1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUVudGVyIDogS2V5ID0gXCJFbnRlclwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleVRhYiA6IEtleSA9IFwiVGFiXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5U3BhY2UgOiBLZXkgPSBcIiBcIjtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QyA6IEtleSA9IFwiY1wiO1xyXG4gICBcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlBcnJvd1VwIDogS2V5ID0gXCJBcnJvd1VwXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QXJyb3dEb3duIDogS2V5ID0gXCJBcnJvd0Rvd25cIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlBcnJvd0xlZnQgOiBLZXkgPSBcIkFycm93TGVmdFwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUFycm93UmlnaHQgOiBLZXkgPSBcIkFycm93UmlnaHRcIjtcclxuXHJcbiAgIGRvd25LZXlzOiBTZXQ8S2V5PjtcclxuICAgcHJlc3NlZEtleXM6IFNldDxLZXk+O1xyXG4gICByZWxlYXNlZEtleXM6IFNldDxLZXk+O1xyXG5cclxuICAgcm9vdD86IEhUTUxFbGVtZW50O1xyXG5cclxuICAgY29uc3RydWN0b3Iocm9vdD86IEhUTUxFbGVtZW50KXtcclxuICAgICAgdGhpcy5kb3duS2V5cyA9IG5ldyBTZXQ8S2V5PigpO1xyXG4gICAgICB0aGlzLnByZXNzZWRLZXlzID0gbmV3IFNldDxLZXk+KCk7XHJcbiAgICAgIHRoaXMucmVsZWFzZWRLZXlzID0gbmV3IFNldDxLZXk+KCk7XHJcblxyXG4gICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5ib2R5OyAvLyBGdWNrXHJcbiAgICAgIHRoaXMucm9vdD8uYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXZlbnQgPT4ge1xyXG4gICAgICAgICBpZihldmVudC5yZXBlYXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgIHRoaXMucHJlc3NlZEtleXMuYWRkKGV2ZW50LmtleSk7XHJcbiAgICAgICAgIHRoaXMuZG93bktleXMuYWRkKGV2ZW50LmtleSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICB0aGlzLnJvb3Q/LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBldmVudCA9PntcclxuICAgICAgICAgaWYoZXZlbnQucmVwZWF0KSByZXR1cm47XHJcblxyXG4gICAgICAgICB0aGlzLnJlbGVhc2VkS2V5cy5hZGQoZXZlbnQua2V5KTtcclxuICAgICAgICAgdGhpcy5kb3duS2V5cy5kZWxldGUoZXZlbnQua2V5KTtcclxuICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIGZsdXNoKCl7XHJcbiAgICAgIHRoaXMucHJlc3NlZEtleXMuY2xlYXIoKTtcclxuICAgICAgdGhpcy5yZWxlYXNlZEtleXMuY2xlYXIoKTtcclxuICAgfVxyXG5cclxuICAgaXNLZXlEb3duKGtleTogS2V5KXtcclxuICAgICAgcmV0dXJuIHRoaXMuZG93bktleXMuaGFzKGtleSk7XHJcbiAgIH1cclxuICAgaXNLZXlQcmVzc2VkKGtleTogS2V5KXtcclxuICAgICAgcmV0dXJuIHRoaXMucHJlc3NlZEtleXMuaGFzKGtleSk7XHJcbiAgIH1cclxuICAgaXNLZXlSZWxlYXNlZChrZXk6IEtleSl7XHJcbiAgICAgIHJldHVybiB0aGlzLnJlbGVhc2VkS2V5cy5oYXMoa2V5KTtcclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgSW5wdXQge1xyXG4gICBnYW1lcGFkczogR2FtZXBhZElucHV0W107XHJcbiAgIGtleWJvYXJkOiBLZXlib2FyZDtcclxuXHJcbiAgIHJvb3Q/OiBIVE1MRWxlbWVudDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHJvb3Q/OiBIVE1MRWxlbWVudCl7XHJcbiAgICAgIHRoaXMuZ2FtZXBhZHMgPSBbXTtcclxuICAgICAgdGhpcy5rZXlib2FyZCA9IG5ldyBLZXlib2FyZChyb290KTtcclxuICAgICAgdGhpcy5yb290ID0gcm9vdDtcclxuXHJcbiAgICAgIC8vIFdlaXJkIGNvbnN0cnVjdGlvbiBidXQgdHlwZXNjcmlwdCBoYXRlcyBwcm9ncmVzcyBcclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJnYW1lcGFkY29ubmVjdGVkXCIsIGV2ID0+IHtcclxuICAgICAgICAgbGV0IGV2ZW50ID0gZXYgYXMgR2FtZXBhZEV2ZW50O1xyXG5cclxuICAgICAgICAgY29uc29sZS5sb2coXCJHYW1lcGFkIGNvbm5lY3RlZC5cIik7XHJcblxyXG4gICAgICAgICB0aGlzLmdhbWVwYWRzLnB1c2gobmV3IEdhbWVwYWRJbnB1dChldmVudC5nYW1lcGFkLmluZGV4KSk7XHJcbiAgICAgICB9KTtcclxuICAgICAgIFxyXG4gICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJnYW1lcGFkZGlzY29ubmVjdGVkXCIsIGV2ID0+IHtcclxuICAgICAgICAgbGV0IGV2ZW50ID0gZXYgYXMgR2FtZXBhZEV2ZW50O1xyXG5cclxuICAgICAgICAgY29uc29sZS5sb2coXCJHYW1lcGFkIGRpc2Nvbm5lY3RlZC5cIik7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBsZXQgaW5kZXggPSAtMTtcclxuXHJcbiAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmdhbWVwYWRzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgICAgaWYodGhpcy5nYW1lcGFkc1tpXS5pbmRleCA9PT0gZXZlbnQuZ2FtZXBhZC5pbmRleCl7XHJcbiAgICAgICAgICAgICAgIGluZGV4ID0gaTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKGluZGV4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgY29uc29sZS5sb2coXCJHYW1lcGFkIGZvdW5kLlwiKTtcclxuXHJcbiAgICAgICAgIHRoaXMuZ2FtZXBhZHMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgIH0pO1xyXG4gICB9XHJcblxyXG4gICBwb2xsKCl7XHJcbiAgICAgIHRoaXMuZ2FtZXBhZHMuZm9yRWFjaChwYWQgPT4gcGFkLnBvbGwoKSk7XHJcbiAgIH1cclxuICAgZmx1c2goKXtcclxuICAgICAgdGhpcy5rZXlib2FyZC5mbHVzaCgpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgQ3VydmUgfSBmcm9tIFwidXRpbC9DdXJ2ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBoeXNpY3N7XHJcbiAgIGJvZGllczogUmlnaWRib2R5W107XHJcblxyXG4gICBpbnRlcnBvbGF0ZTogYm9vbGVhbiA9IHRydWU7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLmJvZGllcyA9IFtdO1xyXG4gICB9XHJcblxyXG4gICBhZGRCb2R5KGJvZHk6IFJpZ2lkYm9keSl7XHJcbiAgICAgIHRoaXMuYm9kaWVzLnB1c2goYm9keSk7XHJcbiAgIH1cclxuICAgcmVtb3ZlQm9keShib2R5OiBSaWdpZGJvZHkpe1xyXG4gICAgICBsZXQgaW5kZXggPSB0aGlzLmJvZGllcy5pbmRleE9mKGJvZHkpO1xyXG5cclxuICAgICAgaWYoaW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmJvZGllcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICB9XHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYodGhpcy5pbnRlcnBvbGF0ZSl7XHJcbiAgICAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgICAgIC8vIFRPRE8gbW90aW9uIHByZWRpY3Rpb24gYW5kIHN0dWZmXHJcbiAgICAgICAgICAgIGxldCBmID0gYm9keS5nYW1lLmludGVyVXBkYXRlVGltZSAvIGJvZHkuZ2FtZS5maXhlZFVwZGF0ZVRpbWU7XHJcbiAgIFxyXG4gICAgICAgICAgICBib2R5LnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi54ID0gQ3VydmUubGVycChib2R5LnByZXZpb3VzUG9zaXRpb24ueCwgYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueCwgZik7XHJcbiAgICAgICAgICAgIGJvZHkudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLnkgPSBDdXJ2ZS5sZXJwKGJvZHkucHJldmlvdXNQb3NpdGlvbi55LCBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi55LCBmKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgICAgYm9keS50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24uc2V0KGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIC8vIFNldCB0aGUgcHJldmlvdXMgcG9zaXRpb25zXHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgIGJvZHkucHJldmlvdXNQb3NpdGlvbi54ID0gYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueDtcclxuICAgICAgICAgYm9keS5wcmV2aW91c1Bvc2l0aW9uLnkgPSBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi55O1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIE1vdmUgYWxsIHRoZSBib2RpZXNcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueCArPSBib2R5LnZlbG9jaXR5LnggKiBkZWx0YTtcclxuICAgICAgICAgYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueSArPSBib2R5LnZlbG9jaXR5LnkgKiBkZWx0YTtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBUT0RPIGJyb2FkcGhhc2UgbmFycm93IHBoYXNlIHN0dWZmIDopXHJcbiAgICAgIC8vIE1heWJlIHN0YXJ0IHdpdGggc3dlZXAgYW5kIHBydW5lXHJcbiAgICAgIC8vIFVuc3R1Y2sgYWxsIHRoZSBib2RpZXNcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgaWYoYm9keS5zb2xpZCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgYm9keS5jb2xsaWRlZFRvcCA9IGZhbHNlO1xyXG4gICAgICAgICBib2R5LmNvbGxpZGVkQm90dG9tID0gZmFsc2U7XHJcbiAgICAgICAgIGJvZHkuY29sbGlkZWRMZWZ0ID0gZmFsc2U7XHJcbiAgICAgICAgIGJvZHkuY29sbGlkZWRSaWdodCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib3ggPT4ge1xyXG4gICAgICAgICAgICBpZighYm94LnNvbGlkKSByZXR1cm47XHJcbiAgIFxyXG4gICAgICAgICAgICBsZXQgYmJveCA9IGJvZHkuYm91bmRpbmdCb3g7XHJcbiAgICAgICAgICAgIGxldCBvdGhlcmJib3ggPSBib3guYm91bmRpbmdCb3g7XHJcblxyXG4gICAgICAgICAgICBpZighYmJveC5vdmVybGFwcyhvdGhlcmJib3gpKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgbWluT3ZlcmxhcFggPSBiYm94Lm1pbk92ZXJsYXBYV2l0aEJpYXMob3RoZXJiYm94LCBib2R5LnZlbG9jaXR5LngpO1xyXG4gICAgICAgICAgICBsZXQgbWluT3ZlcmxhcFkgPSBiYm94Lm1pbk92ZXJsYXBZV2l0aEJpYXMob3RoZXJiYm94LCBib2R5LnZlbG9jaXR5LnkpO1xyXG5cclxuICAgICAgICAgICAgaWYoTWF0aC5hYnMobWluT3ZlcmxhcFgpIDwgTWF0aC5hYnMobWluT3ZlcmxhcFkpKXtcclxuICAgICAgICAgICAgICAgYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueCArPSBtaW5PdmVybGFwWDtcclxuICAgICAgICAgICAgICAgYm9keS5jb2xsaWRlZExlZnQgPSBib2R5LnZlbG9jaXR5LnggPCAwO1xyXG4gICAgICAgICAgICAgICBib2R5LmNvbGxpZGVkUmlnaHQgPSBib2R5LnZlbG9jaXR5LnggPiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2V7XHJcbiAgICAgICAgICAgICAgIGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLnkgKz0gbWluT3ZlcmxhcFk7XHJcbiAgICAgICAgICAgICAgIGJvZHkuY29sbGlkZWRCb3R0b20gPSBib2R5LnZlbG9jaXR5LnkgPiAwO1xyXG4gICAgICAgICAgICAgICBib2R5LmNvbGxpZGVkVG9wID0gYm9keS52ZWxvY2l0eS55IDwgMDtcclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgaWYoYm9keS5jb2xsaWRlZExlZnQgfHwgYm9keS5jb2xsaWRlZFJpZ2h0KXtcclxuICAgICAgICAgICAgYm9keS52ZWxvY2l0eS54ID0gLWJvZHkudmVsb2NpdHkueCAqIGJvZHkuYm91bmN5bmVzcztcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihib2R5LmNvbGxpZGVkQm90dG9tIHx8IGJvZHkuY29sbGlkZWRUb3Ape1xyXG4gICAgICAgICAgICBib2R5LnZlbG9jaXR5LnkgPSAtYm9keS52ZWxvY2l0eS55ICogYm9keS5ib3VuY3luZXNzO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQSBsaXR0bGUgbW9yZSBvcHRpbWl6ZWQgYnV0IHN0aWxsIHJlYWxseSBmdWNraW5nIHN0dXBpZCA6KVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5ib2RpZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBsZXQgYm9keSA9IHRoaXMuYm9kaWVzW2ldO1xyXG5cclxuICAgICAgICAgbGV0IGJib3ggPSBib2R5LmJvdW5kaW5nQm94O1xyXG5cclxuICAgICAgICAgaWYoIWJvZHkudXNlRHluYW1pY0NvbGxpc2lvbnMpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgZm9yKGxldCBqID0gaSArIDE7IGogPCB0aGlzLmJvZGllcy5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgIGxldCBvdGhlciA9IHRoaXMuYm9kaWVzW2pdO1xyXG5cclxuICAgICAgICAgICAgaWYoIW90aGVyLnVzZUR5bmFtaWNDb2xsaXNpb25zKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKGJib3gub3ZlcmxhcHMob3RoZXIuYm91bmRpbmdCb3gpKXtcclxuICAgICAgICAgICAgICAgYm9keS5vbkNvbGxpc2lvbi5lbWl0KG90aGVyKTtcclxuICAgICAgICAgICAgICAgb3RoZXIub25Db2xsaXNpb24uZW1pdChib2R5KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZHJhd0RlYnVnKGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIHJldHVybjtcclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IoXCJyZ2JhKDI1NSwwLDAsIDAuNilcIik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBpZighYm9keS5zb2xpZCkgcmV0dXJuO1xyXG4gICAgICAgICBcclxuICAgICAgICAgZ3JhcGhpY3MuZHJhd0FBQkIoYm9keS5ib3VuZGluZ0JveCwgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgXHJcbiAgICAgIGdyYXBoaWNzLnNldENvbG9yKFwicmdiYSgwLDI1NSwwLCAwLjYpXCIpO1xyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBpZihib2R5LnNvbGlkKSByZXR1cm47XHJcbiAgICAgICAgIGxldCBjb2xsaWRlciA9IGJvZHkuYm91bmRpbmdCb3g7XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBncmFwaGljcy5kcmF3QUFCQihjb2xsaWRlciwgdHJ1ZSk7XHJcbiAgICAgIH0pO1xyXG4gICAgICBcclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IoXCJyZ2JhKDAsMCwyNTUsIDAuNilcIik7XHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgIGxldCB0cmFuc2Zvcm0gPSBib2R5LnRyYW5zZm9ybTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGdyYXBoaWNzLmRyYXdSZWN0YW5nbGUoXHJcbiAgICAgICAgICAgIHRyYW5zZm9ybS5wb3NpdGlvbi54IC0gMSwgdHJhbnNmb3JtLnBvc2l0aW9uLnkgLSAxLFxyXG4gICAgICAgICAgICAyLCAyLCB0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybjtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vU3ByaXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0aW9ue1xyXG4gICBmcmFtZVJhdGU6IG51bWJlciA9IDEyO1xyXG4gICBcclxuICAgcHJpdmF0ZSBzcHJpdGVzOiBTcHJpdGVbXSA9IFtdO1xyXG4gICBwcml2YXRlIF9pbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgLy8gVE9ETyBjYXAgdGhlIF9pbmRleCB2YXJpYWJsZVxyXG4gICAgICB0aGlzLl9pbmRleCArPSBkZWx0YSAqIHRoaXMuZnJhbWVSYXRlO1xyXG4gICB9XHJcblxyXG4gICBhZGRGcmFtZShzcHJpdGU6IFNwcml0ZSl7XHJcbiAgICAgIHRoaXMuc3ByaXRlcy5wdXNoKHNwcml0ZSk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBjZW50ZXIoKXtcclxuICAgICAgdGhpcy5zcHJpdGVzLmZvckVhY2goc3ByaXRlID0+IHNwcml0ZS5jZW50ZXIoKSk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBnZXQgaW5kZXgoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuX2luZGV4ICUgdGhpcy5mcmFtZXM7XHJcbiAgIH1cclxuICAgZ2V0IGZyYW1lcygpe1xyXG4gICAgICByZXR1cm4gdGhpcy5zcHJpdGVzLmxlbmd0aDtcclxuICAgfVxyXG4gICBnZXQgZnJhbWUoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tNYXRoLmZsb29yKHRoaXMuaW5kZXgpXTtcclxuICAgfVxyXG5cclxuICAgY2xvbmUoKXtcclxuICAgICAgbGV0IGEgPSAgbmV3IEFuaW1hdGlvbigpO1xyXG4gICAgICBcclxuICAgICAgYS5faW5kZXggPSB0aGlzLl9pbmRleDtcclxuICAgICAgYS5mcmFtZVJhdGUgPSB0aGlzLmZyYW1lUmF0ZTtcclxuICAgICAgYS5zcHJpdGVzID0gdGhpcy5zcHJpdGVzO1xyXG5cclxuICAgICAgcmV0dXJuIGE7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ2FtZXJhe1xyXG4gICBjZW50ZXI6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMig2NDAgLyAyLCAzNjAgLyAyKTtcclxuXHJcbiAgIC8vIFRPRE8gdGhpcyBzaG91bGRuJ3QgYmUgZGVmaW5lZCBsaWtlIHRoaXMsIGJlY2F1c2UgdGhpcyBkZXBlbmRzIG9uIHRoZSBzY3JlZW4gYXNwZWN0IHJhdGlvLi4uXHJcbiAgIHdpZHRoOiBudW1iZXIgPSA2NDA7XHJcbiAgIGhlaWdodDogbnVtYmVyID0gMzYwO1xyXG5cclxuICAgZ2V0Qm91bmRzKGFhYmI/OiBBQUJCKXtcclxuICAgICAgaWYoYWFiYiA9PT0gdW5kZWZpbmVkKXtcclxuICAgICAgICAgYWFiYiA9IG5ldyBBQUJCKCk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGFhYmIucG9zaXRpb24uc2V0KHRoaXMuY2VudGVyKTtcclxuICAgICAgYWFiYi5vZmZzZXQuYXBwbHkodGhpcy53aWR0aCAvIDIsIHRoaXMuaGVpZ2h0IC8gMik7XHJcbiAgICAgIGFhYmIuc2l6ZS5hcHBseSh0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcblxyXG4gICAgICByZXR1cm4gYWFiYjtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcIi4vQ2FtZXJhXCI7XHJcbmltcG9ydCB7IFNwcml0ZSB9IGZyb20gXCIuL1Nwcml0ZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdyYXBoaWNze1xyXG4gICBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICBjb250ZXh0OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcbiAgIGNvbG9yOiBzdHJpbmcgPSBcIndoaXRlXCI7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KXtcclxuICAgICAgdGhpcy5jYW52YXMgPSBjYW52YXM7XHJcbiAgICAgIHRoaXMuY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIikhO1xyXG5cclxuICAgICAgdGhpcy51cGRhdGVTaXplKCk7XHJcbiAgIH1cclxuXHJcbiAgIHJlc2V0KCl7XHJcbiAgICAgIHRoaXMuY29udGV4dC5yZXNldFRyYW5zZm9ybSgpO1xyXG4gICB9XHJcblxyXG4gICBjbGVhclNjcmVlbigpe1xyXG4gICAgICB0aGlzLmNsZWFyKDAsIDAsIHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG4gICB9XHJcblxyXG4gICBjbGVhcih4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmNvbnRleHQuY2xlYXJSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3U3ByaXRlKHNwcml0ZTogU3ByaXRlLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGVYOiBudW1iZXIgPSAxLCBzY2FsZVk6IG51bWJlciA9IDEsIHJvdGF0aW9uOiBudW1iZXIgPSAwKXtcclxuICAgICAgdGhpcy5jb250ZXh0LnNhdmUoKTtcclxuXHJcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICAgIHRoaXMuY29udGV4dC5zY2FsZShzY2FsZVgsIHNjYWxlWSk7XHJcbiAgICAgIHRoaXMuY29udGV4dC5yb3RhdGUocm90YXRpb24pO1xyXG5cclxuICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShzcHJpdGUuaW1hZ2UsIFxyXG4gICAgICAgICBzcHJpdGUuc291cmNlWCwgc3ByaXRlLnNvdXJjZVksIHNwcml0ZS5zb3VyY2VXaWR0aCwgc3ByaXRlLnNvdXJjZUhlaWdodCxcclxuICAgICAgICAgLSBzcHJpdGUub2Zmc2V0WCwgLSBzcHJpdGUub2Zmc2V0WSwgc3ByaXRlLndpZHRoLCBzcHJpdGUuaGVpZ2h0KTtcclxuXHJcbiAgICAgIHRoaXMuY29udGV4dC5yZXN0b3JlKCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdTcHJpdGVTaW1wbGUoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5jb250ZXh0LmRyYXdJbWFnZShzcHJpdGUuaW1hZ2UsIFxyXG4gICAgICAgICBzcHJpdGUuc291cmNlWCwgc3ByaXRlLnNvdXJjZVksIHNwcml0ZS5zb3VyY2VXaWR0aCwgc3ByaXRlLnNvdXJjZUhlaWdodCxcclxuICAgICAgICAgeCAtIHNwcml0ZS5vZmZzZXRYLCB5IC0gc3ByaXRlLm9mZnNldFksIHNwcml0ZS53aWR0aCwgc3ByaXRlLmhlaWdodCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdSZWN0YW5nbGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBmaWxsOiBib29sZWFuKXtcclxuICAgICAgaWYoZmlsbCl7XHJcbiAgICAgICAgIHRoaXMuY29udGV4dC5maWxsU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICB0aGlzLmNvbnRleHQuZmlsbFJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5jb250ZXh0LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICAgdGhpcy5jb250ZXh0LnJlY3QoeCwgeSwgdywgaCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgZHJhd0FBQkIoYWFiYjogQUFCQiwgZmlsbDogYm9vbGVhbil7XHJcbiAgICAgIHRoaXMuZHJhd1JlY3RhbmdsZShhYWJiLmxlZnQsIGFhYmIudG9wLCBhYWJiLndpZHRoLCBhYWJiLmhlaWdodCwgZmlsbCk7XHJcbiAgIH1cclxuXHJcbiAgIHNldENhbWVyYShjYW1lcmE6IENhbWVyYSl7XHJcbiAgICAgIHRoaXMuY29udGV4dC5yZXNldFRyYW5zZm9ybSgpO1xyXG5cclxuICAgICAgbGV0IGNhbWVyYUhlaWdodCA9IGNhbWVyYS5oZWlnaHQ7XHJcbiAgICAgIGxldCBjYW1lcmFXaWR0aCA9IHRoaXMuY2FudmFzLndpZHRoIC8gdGhpcy5jYW52YXMuaGVpZ2h0ICogY2FtZXJhSGVpZ2h0O1xyXG5cclxuICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKDEgLyBjYW1lcmFXaWR0aCwgMSAvIGNhbWVyYUhlaWdodCk7XHJcbiAgICAgIHRoaXMuY29udGV4dC5zY2FsZSh0aGlzLmNhbnZhcy53aWR0aCwgdGhpcy5jYW52YXMuaGVpZ2h0KTtcclxuXHJcbiAgICAgIHRoaXMuY29udGV4dC50cmFuc2xhdGUoLShjYW1lcmEuY2VudGVyLnggLSBjYW1lcmFXaWR0aCAvIDIpLCAtKGNhbWVyYS5jZW50ZXIueSAtIGNhbWVyYUhlaWdodCAvIDIpKTtcclxuICAgfVxyXG5cclxuICAgc2V0Q29sb3IoY29sb3I6IHN0cmluZyl7XHJcbiAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgfVxyXG4gICBnZXRDb2xvcigpe1xyXG4gICAgICByZXR1cm4gdGhpcy5jb2xvcjtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlU2l6ZSgpe1xyXG4gICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHRoaXMuY2FudmFzLm9mZnNldFdpZHRoO1xyXG4gICAgICB0aGlzLmNhbnZhcy5oZWlnaHQgPSB0aGlzLmNhbnZhcy5vZmZzZXRIZWlnaHQ7XHJcbiAgICAgIHRoaXMuY29udGV4dC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nUXVhbGl0eSA9IFwibG93XCI7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCIuL0FuaW1hdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZXtcclxuICAgaW1hZ2U6IENhbnZhc0ltYWdlU291cmNlO1xyXG5cclxuICAgb2Zmc2V0WDogbnVtYmVyID0gMDtcclxuICAgb2Zmc2V0WTogbnVtYmVyID0gMDtcclxuXHJcbiAgIHNvdXJjZVg6IG51bWJlciA9IDA7XHJcbiAgIHNvdXJjZVk6IG51bWJlciA9IDA7XHJcbiAgIHNvdXJjZVdpZHRoOiBudW1iZXIgPSAwO1xyXG4gICBzb3VyY2VIZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgIFxyXG4gICBjb25zdHJ1Y3RvcihpbWFnZTogQ2FudmFzSW1hZ2VTb3VyY2Upe1xyXG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcblxyXG4gICAgICB0aGlzLnNvdXJjZVdpZHRoID0gaW1hZ2Uud2lkdGggYXMgbnVtYmVyO1xyXG4gICAgICB0aGlzLnNvdXJjZUhlaWdodCA9IGltYWdlLmhlaWdodCBhcyBudW1iZXI7XHJcbiAgIH1cclxuXHJcbiAgIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMuc291cmNlV2lkdGg7IH1cclxuICAgZ2V0IGhlaWdodCgpIHsgcmV0dXJuIHRoaXMuc291cmNlSGVpZ2h0OyB9XHJcblxyXG4gICBjZW50ZXIoKXtcclxuICAgICAgdGhpcy5vZmZzZXRYID0gdGhpcy53aWR0aCAvIDI7XHJcbiAgICAgIHRoaXMub2Zmc2V0WSA9IHRoaXMuaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVTaGVldHtcclxuICAgaW1hZ2U6IENhbnZhc0ltYWdlU291cmNlO1xyXG5cclxuICAgY29uc3RydWN0b3IoaW1hZ2U6IENhbnZhc0ltYWdlU291cmNlKXtcclxuICAgICAgdGhpcy5pbWFnZSA9IGltYWdlO1xyXG4gICB9XHJcblxyXG4gICBnZXRTcHJpdGUoeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyKXtcclxuICAgICAgbGV0IHNwcml0ZSA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZSk7XHJcblxyXG4gICAgICBzcHJpdGUuc291cmNlWCA9IHg7XHJcbiAgICAgIHNwcml0ZS5zb3VyY2VZID0geTtcclxuICAgICAgc3ByaXRlLnNvdXJjZVdpZHRoID0gdztcclxuICAgICAgc3ByaXRlLnNvdXJjZUhlaWdodCA9IGg7XHJcblxyXG4gICAgICByZXR1cm4gc3ByaXRlO1xyXG4gICB9XHJcbiAgIFxyXG4gICBnZXRBbmltYXRpb24oeDogbnVtYmVyLCB5OiBudW1iZXIsIHc6IG51bWJlciwgaDogbnVtYmVyLCBjb3VudDogbnVtYmVyKXtcclxuICAgICAgbGV0IGFuaW1hdGlvbiA9IG5ldyBBbmltYXRpb24oKTtcclxuXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKXtcclxuICAgICAgICAgbGV0IHNwcml0ZSA9IG5ldyBTcHJpdGUodGhpcy5pbWFnZSk7XHJcbiAgIFxyXG4gICAgICAgICBzcHJpdGUuc291cmNlWCA9IHggKyBpICogdztcclxuICAgICAgICAgc3ByaXRlLnNvdXJjZVkgPSB5O1xyXG4gICAgICAgICBzcHJpdGUuc291cmNlV2lkdGggPSB3O1xyXG4gICAgICAgICBzcHJpdGUuc291cmNlSGVpZ2h0ID0gaDtcclxuXHJcbiAgICAgICAgIGFuaW1hdGlvbi5hZGRGcmFtZShzcHJpdGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gYW5pbWF0aW9uO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgZnJvbUhUTUwoaWQ6IHN0cmluZyl7XHJcbiAgICAgIGxldCBlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpIGFzIEhUTUxJbWFnZUVsZW1lbnQ7XHJcblxyXG4gICAgICByZXR1cm4gbmV3IFNwcml0ZVNoZWV0KGVsZW1lbnQpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IEdhbWVwYWRJbnB1dCwgS2V5Ym9hcmQgfSBmcm9tIFwiZW5naW5lL0lucHV0XCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCJncmFwaGljcy9DYW1lcmFcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgU3ByaXRlLCBTcHJpdGVTaGVldCB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IHsgQ2hlc3RHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9DaGVzdEdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgQ29sbGlkZXJHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9Db2xsaWRlckdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgTGV2ZWxNYW5hZ2VyIH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9MZXZlbE1hbmFnZXJcIjtcclxuaW1wb3J0IHsgUGxheWVyRmluaXNoR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyRmluaXNoR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllclNwYXduR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyU3Bhd25HYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFNwaWtlc0dhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL1NwaWtlc0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgU2NlbmUgfSBmcm9tIFwic2NlbmUvU2NlbmVcIjtcclxuaW1wb3J0IHsgVGlsZU1hcCB9IGZyb20gXCJ0aWxlbWFwL1RpbGVNYXBcIjtcclxuaW1wb3J0IExpc3QgZnJvbSBcInV0aWwvTGlzdFwiO1xyXG5cclxuLy8gRnVjayB0aGlzIGJ1dCB3aGF0ZXZlclxyXG5mdW5jdGlvbiBpbml0TW9kYWwoZWxlbWVudDogSFRNTEVsZW1lbnQpe1xyXG4gICBsZXQgY2xvc2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIik7XHJcblxyXG4gICBjbG9zZT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcclxuXHJcbiAgICAgIC8vIFllcyB0aGlzIG1ha2VzIGEgbG90IG9mIHNlbnNlIGhlcmUgOilcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdE1vZGFscygpe1xyXG4gICBsZXQgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKTtcclxuXHJcbiAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IGluaXRNb2RhbChtb2RhbCBhcyBIVE1MRWxlbWVudCkpO1xyXG59XHJcblxyXG4vLyBJbml0IHRoZSBkYW1uIGdhbWVcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCk9PntcclxuICAgaW5pdE1vZGFscygpO1xyXG5cclxuICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgbGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xyXG4gICBcclxuICAgbGV0IHNjZW5lID0gbmV3IFNjZW5lKCk7XHJcblxyXG4gICBzY2VuZS50aWxlbWFwID0gYXdhaXQgVGlsZU1hcC5mcm9tVGlsZWRNYXBEb3dubG9hZChcImFzc2V0cy9sZXZlbHMvbGV2ZWwyLmpzb25cIiwgKG9iaikgPT4ge1xyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJDb2xsaWRlclwiIHx8IG9iai50eXBlID09PSBcIlBsYXRmb3JtQ29sbGlkZXJcIil7XHJcbiAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IENvbGxpZGVyR2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKTtcclxuICAgICAgfVxyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJMZXZlbE1hbmFnZXJcIil7XHJcbiAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IExldmVsTWFuYWdlcigpKTtcclxuICAgICAgfVxyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJQbGF5ZXJTcGF3blwiKXtcclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgUGxheWVyU3Bhd25HYW1lT2JqZWN0KEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSkpXHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqLnR5cGUgPT09IFwiUGxheWVyRmluaXNoXCIpe1xyXG4gICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0KEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSkpXHJcbiAgICAgIH1cclxuICAgICAgaWYob2JqLnR5cGUgPT09IFwiQ2hlc3RcIil7XHJcbiAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IENoZXN0R2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpKTtcclxuICAgICAgfVxyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJTcGlrZXNcIil7XHJcbiAgICAgICAgIGxldCBzcGlrZXMgPSBuZXcgU3Bpa2VzR2FtZU9iamVjdChcclxuICAgICAgICAgICAgQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpLCBcclxuICAgICAgICAgICAgTGlzdC5oYXMob2JqLnByb3BlcnRpZXMsIHByb3AgPT4geyByZXR1cm4gcHJvcC5uYW1lID09PSBcInNocmlua1wiICYmIHByb3AudmFsdWUgPT09IHRydWU7IH0pXHJcbiAgICAgICAgICk7XHJcblxyXG4gICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KHNwaWtlcyk7XHJcbiAgICAgIH1cclxuICAgfSk7XHJcbiAgIFxyXG4gICBnYW1lLnNjZW5lID0gc2NlbmU7XHJcblxyXG4gICBnYW1lLnJ1bigpO1xyXG59KTtcclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInNjZW5lL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTaWduYWwgfSBmcm9tIFwic2lnbmFscy9TaWduYWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBIZWFsdGhDb21wb25lbnQgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgIGhlYWx0aDogbnVtYmVyID0gMztcclxuXHJcbiAgIG9uRGFtYWdlOiBTaWduYWw8SGVhbHRoQ29tcG9uZW50PiA9IG5ldyBTaWduYWw8SGVhbHRoQ29tcG9uZW50PigpO1xyXG4gICBvbkRlYXRoOiBTaWduYWw8SGVhbHRoQ29tcG9uZW50PiA9IG5ldyBTaWduYWw8SGVhbHRoQ29tcG9uZW50PigpO1xyXG5cclxuICAgZ2V0IGFsaXZlKCkgeyByZXR1cm4gdGhpcy5oZWFsdGggPiAwOyB9XHJcbiAgIGdldCBkZWFkKCkgeyByZXR1cm4gdGhpcy5oZWFsdGggPD0gMDsgfVxyXG5cclxuICAgZGFtYWdlKGFtb3VudDogbnVtYmVyKXtcclxuICAgICAgdGhpcy5oZWFsdGggLT0gYW1vdW50O1xyXG5cclxuICAgICAgdGhpcy5vbkRhbWFnZS5lbWl0KHRoaXMpO1xyXG4gICAgICBcclxuICAgICAgaWYodGhpcy5kZWFkKXtcclxuICAgICAgICAgdGhpcy5vbkRlYXRoLmVtaXQodGhpcyk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZXBhZElucHV0LCBLZXlib2FyZCB9IGZyb20gXCJlbmdpbmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcInNjZW5lL0NvbXBvbmVudFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllcklucHV0Q29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBkaXJlY3Rpb246IG51bWJlciA9IDA7XHJcblxyXG4gICBqdW1wUHJlc3NlZDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBqdW1wRG93bjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgZGFzaFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5qdW1wUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmRhc2hQcmVzc2VkID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuanVtcERvd24gPSBmYWxzZTtcclxuICAgICAgdGhpcy5kaXJlY3Rpb24gPSAwO1xyXG5cclxuICAgICAgLy8gVE9ETyBhY3R1YWxseSBzd2l0Y2ggYmV0d2VlbiBjb250cm9sbGVycyBpbnN0ZWFkIG9mIHRoaXMgaGFsZiBiYWtlZCBoYWxmIGFzc2VkIHNvbHV0aW9uXHJcbiAgICAgIHRoaXMuZ2FtZS5pbnB1dC5nYW1lcGFkcy5mb3JFYWNoKHBhZCA9PiB7XHJcbiAgICAgICAgIGlmKHBhZC5pc0J1dHRvblByZXNzZWQoR2FtZXBhZElucHV0LkJ1dHRvbkEpKXtcclxuICAgICAgICAgICAgdGhpcy5qdW1wUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYocGFkLmlzQnV0dG9uUHJlc3NlZChHYW1lcGFkSW5wdXQuQnV0dG9uUmlnaHRUcmlnZ2VyKSl7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKHBhZC5pc0J1dHRvbkRvd24oR2FtZXBhZElucHV0LkJ1dHRvbkEpKXtcclxuICAgICAgICAgICAgdGhpcy5qdW1wRG93biA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuXHJcbiAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gcGFkLmxlZnRBeGlzWDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleVNwYWNlKSkgdGhpcy5qdW1wUHJlc3NlZCA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleURvd24oS2V5Ym9hcmQuS2V5U3BhY2UpKSB0aGlzLmp1bXBEb3duID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlDKSkgdGhpcy5kYXNoUHJlc3NlZCA9IHRydWU7XHJcblxyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlEb3duKEtleWJvYXJkLktleUFycm93TGVmdCkpIHRoaXMuZGlyZWN0aW9uID0gLTE7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleURvd24oS2V5Ym9hcmQuS2V5QXJyb3dSaWdodCkpIHRoaXMuZGlyZWN0aW9uID0gMTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgU3ByaXRlLCBTcHJpdGVTaGVldCB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmxldCBzaGVldCA9IFNwcml0ZVNoZWV0LmZyb21IVE1MKFwiT2JqZWN0c1wiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBDaGVzdEdhbWVPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuICAgYm9keTogUmlnaWRib2R5O1xyXG5cclxuICAgY2xvc2VkOiBTcHJpdGU7XHJcbiAgIG9wZW46IFNwcml0ZTtcclxuXHJcbiAgIGlzT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgY29uc3RydWN0b3IoYWFiYjogQUFCQil7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oKSk7XHJcbiAgICAgIHRoaXMudHJhbnNmb3JtLnBvc2l0aW9uLnNldChhYWJiLnBvc2l0aW9uKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBSaWdpZGJvZHkoKSk7XHJcblxyXG4gICAgICB0aGlzLmJvZHkubG9jYWxBQUJCID0gYWFiYjtcclxuXHJcbiAgICAgIHRoaXMuY2xvc2VkID0gc2hlZXQuZ2V0U3ByaXRlKDAsIDY0LCAxNiwgMTYpO1xyXG4gICAgICB0aGlzLm9wZW4gPSBzaGVldC5nZXRTcHJpdGUoMTYsIDY0LCAxNiwgMTYpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGVTaW1wbGUodGhpcy5pc09wZW4gPyB0aGlzLm9wZW4gOiB0aGlzLmNsb3NlZCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24ueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlkZXJHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoYWFiYi5wb3NpdGlvbik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnNvbGlkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ib2R5LmxvY2FsQUFCQiA9IGFhYmI7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR2FtZXBhZElucHV0LCBLZXlib2FyZCB9IGZyb20gXCJlbmdpbmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgSGVhbHRoQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0hlYWx0aENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwidXRpbC9UaW1lXCI7XHJcbmltcG9ydCB7IFBsYXllckZpbmlzaEdhbWVPYmplY3QgfSBmcm9tIFwiLi9QbGF5ZXJGaW5pc2hHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllckdhbWVPYmplY3QgfSBmcm9tIFwiLi9QbGF5ZXJHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllclNwYXduR2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllclNwYXduR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExldmVsTWFuYWdlciBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHNwYXduPzogUGxheWVyU3Bhd25HYW1lT2JqZWN0O1xyXG4gICBmaW5pc2g/OiBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0O1xyXG5cclxuICAgcGxheWVyPzogUGxheWVyR2FtZU9iamVjdDtcclxuXHJcbiAgIHJ1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgZmluYWxUaW1lRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgIGJlc3RUaW1lRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICBiZXN0VGltZTogbnVtYmVyfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtb3ZlcmxheVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgdGhpcy5maW5hbFRpbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5hbC10aW1lXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICB0aGlzLmJlc3RUaW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmVzdC10aW1lXCIpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgbGV0IGJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiZXN0VGltZVwiKTtcclxuICAgICAgaWYoYnQgIT09IG51bGwpe1xyXG4gICAgICAgICB0aGlzLmJlc3RUaW1lID0gcGFyc2VGbG9hdChidCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuXHJcbiAgICAgIHRoaXMuc3Bhd24gPSB0aGlzLnNjZW5lLmZpbmRPYmplY3Qob2JqZWN0ID0+IG9iamVjdCBpbnN0YW5jZW9mIFBsYXllclNwYXduR2FtZU9iamVjdCkgYXMgUGxheWVyU3Bhd25HYW1lT2JqZWN0fHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5maW5pc2ggPSB0aGlzLnNjZW5lLmZpbmRPYmplY3Qob2JqZWN0ID0+IG9iamVjdCBpbnN0YW5jZW9mIFBsYXllckZpbmlzaEdhbWVPYmplY3QpIGFzIFBsYXllckZpbmlzaEdhbWVPYmplY3R8dW5kZWZpbmVkO1xyXG5cclxuICAgICAgdGhpcy5maW5pc2ghLmJvZHkub25Db2xsaXNpb24ubGlzdGVuKG90aGVyID0+IHtcclxuICAgICAgICAgaWYob3RoZXIuZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFBsYXllckdhbWVPYmplY3Qpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgIGlmKHRoaXMucnVubmluZykge1xyXG4gICAgICAgICB0aGlzLmdhbWUuaW5wdXQuZ2FtZXBhZHMuZm9yRWFjaChwYWQgPT4ge1xyXG4gICAgICAgICAgICBpZihwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25ZKSl7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICBcclxuICAgICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlFbnRlcikpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5nYW1lcGFkcy5mb3JFYWNoKHBhZCA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBhZC5pc0J1dHRvblByZXNzZWQoR2FtZXBhZElucHV0LkJ1dHRvbkEpIHx8IHBhZC5pc0J1dHRvblByZXNzZWQoR2FtZXBhZElucHV0LkJ1dHRvblkpKXtcclxuICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcbiAgIFxyXG4gICAgICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleUVudGVyKSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgIH1cclxuXHJcbiAgIGZpeGVkVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBzdXBlci5maXhlZFVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICBpZih0aGlzLnJ1bm5pbmcpe1xyXG4gICAgICAgICB0aGlzLnRpbWUgKz0gZGVsdGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCF0aGlzLnBsYXllcj8uaGVhbHRoLmFsaXZlKXtcclxuICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgc3RvcCgpe1xyXG4gICAgICB0aGlzLnNjZW5lLnJlbW92ZUdhbWVPYmplY3QodGhpcy5wbGF5ZXIhKTtcclxuXHJcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYodGhpcy5jb21wbGV0ZWQgJiYgKHRoaXMuYmVzdFRpbWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnRpbWUgPCB0aGlzLmJlc3RUaW1lKSl7XHJcbiAgICAgICAgIHRoaXMuYmVzdFRpbWUgPSB0aGlzLnRpbWU7XHJcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmVzdFRpbWVcIiwgXCJcIiArIHRoaXMuYmVzdFRpbWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnN5bmMoKTtcclxuICAgfVxyXG5cclxuICAgcmVzdGFydCgpe1xyXG4gICAgICBpZih0aGlzLnNwYXduID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG5cclxuICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllckdhbWVPYmplY3QoKTtcclxuXHJcbiAgICAgIHRoaXMucGxheWVyLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQodGhpcy5zcGF3bi50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgICB0aGlzLnBsYXllci50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24uc2V0KHRoaXMuc3Bhd24udHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc2NlbmUuYWRkR2FtZU9iamVjdCh0aGlzLnBsYXllcik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnN5bmMoKTtcclxuICAgfVxyXG5cclxuICAgc3luYygpe1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImdhbWUtb3ZlclwiLCAhdGhpcy5ydW5uaW5nKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIiwgdGhpcy5jb21wbGV0ZWQpO1xyXG4gICAgICB0aGlzLmZpbmFsVGltZUVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KHRoaXMudGltZSk7XHJcblxyXG4gICAgICBpZih0aGlzLmJlc3RUaW1lICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICB0aGlzLmJlc3RUaW1lRWxlbWVudC5pbm5lclRleHQgPSBmb3JtYXQodGhpcy5iZXN0VGltZSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoYWFiYi5wb3NpdGlvbik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG5cclxuICAgICAgLy8gSW50ZXJhY3RhYmxlcyBhbmQgc2hpdFxyXG4gICAgICB0aGlzLmJvZHkudXNlRHluYW1pY0NvbGxpc2lvbnMgPSB0cnVlO1xyXG4gICAgICB0aGlzLmJvZHkubG9jYWxBQUJCID0gYWFiYjtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcImdyYXBoaWNzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZVNoZWV0IH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBIZWFsdGhDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSGVhbHRoQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBsYXllcklucHV0Q29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL1BsYXllcklucHV0Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5sZXQgc2hlZXQgPSBTcHJpdGVTaGVldC5mcm9tSFRNTChcIlBsYXllclwiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgY3VycmVudEFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG5cclxuICAgaWRsZUFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG4gICB3YWxrQW5pbWF0aW9uOiBBbmltYXRpb247XHJcbiAgIGp1bXBBbmltYXRpb246IEFuaW1hdGlvbjtcclxuICAgZmFsbEFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG4gICBkYXNoQW5pbWF0aW9uOiBBbmltYXRpb247XHJcbiAgIHdhbGxBbmltYXRpb246IEFuaW1hdGlvbjtcclxuXHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcbiAgIGlucHV0OiBQbGF5ZXJJbnB1dENvbXBvbmVudDtcclxuICAgaGVhbHRoOiBIZWFsdGhDb21wb25lbnQ7XHJcbiAgIFxyXG4gICBqdW1wSG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGRhc2hIb3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGp1bXBpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgZmFjaW5nOiBudW1iZXIgPSAxO1xyXG5cclxuICAganVtcFNwZWVkOiBudW1iZXIgPSAtMyAqIDYwO1xyXG4gICBtb3ZlU3BlZWQ6IG51bWJlciA9IDEuNSAqIDYwO1xyXG5cclxuICAgY2F5b3RlVGltZTogbnVtYmVyID0gMC4wNTtcclxuICAgZ3JvdW5kTGVhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgZ3JvdW5kQWNjZWxlcmF0aW9uOiBudW1iZXIgPSAwLjIgKiA2MCAqIDYwO1xyXG4gICBncmF2aXR5OiBudW1iZXIgPSAwLjI1ICogNjAgKiA2MDtcclxuICAgZ3Jhdml0eVVwRnJhY3Rpb246IG51bWJlciA9IDAuNTtcclxuICAgZ3Jhdml0eVdhbGxGcmFjdGlvbjogbnVtYmVyID0gMC40O1xyXG5cclxuICAgZ3JvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgd2FsbExlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgd2FsbFJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBoYWRXYWxsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBkYXNoaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGRhc2hTcGVlZDogbnVtYmVyID0gNC43ICogNjA7XHJcbiAgIGRhc2hUaW1lOiBudW1iZXIgPSAyNCAvICh0aGlzLmRhc2hTcGVlZCk7XHJcblxyXG4gICBkYXNoVGltZXI6IG51bWJlciA9IDA7XHJcbiAgIGRhc2hUaW1lb3V0OiBudW1iZXIgPSAwO1xyXG4gICBkYXNoU2F2ZWRTcGVlZDogbnVtYmVyID0gMDtcclxuICAgZGFzaFNhdmVkQWRkaXRpb246IG51bWJlciA9IDU7XHJcblxyXG4gICB3YWxsSnVtcFRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICBnZXQgd2FsbEp1bXBpbmcoKSB7IHJldHVybiB0aGlzLndhbGxKdW1wVGltZXIgPiAwOyB9XHJcblxyXG4gICBnZXQgY2FuTW92ZSgpIHsgcmV0dXJuICF0aGlzLndhbGxKdW1waW5nICYmICF0aGlzLmRhc2hpbmc7IH1cclxuICAgZ2V0IHVzZUdyYXZpdHkoKSB7IHJldHVybiAhdGhpcy5kYXNoaW5nOyB9XHJcbiAgIGdldCBoYXNXYWxsKCkgeyByZXR1cm4gdGhpcy53YWxsTGVmdCB8fCB0aGlzLndhbGxSaWdodDsgfVxyXG4gICBcclxuICAgY2FuRGFzaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjYW5Eb3VibGVqdW1wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGdldCBjYW5KdW1wKCkgeyByZXR1cm4gIHRoaXMuZ3JvdW5kZWQgfHwgKHRoaXMuZ3JvdW5kTGVhdmVUaW1lIDwgdGhpcy5jYXlvdGVUaW1lKTsgfVxyXG5cclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmlkbGVBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgMCwgMTYsIDE2LCAxKS5jZW50ZXIoKTtcclxuICAgICAgdGhpcy53YWxrQW5pbWF0aW9uID0gc2hlZXQuZ2V0QW5pbWF0aW9uKDAsIDE2LCAxNiwgMTYsIDQpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLmZhbGxBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgMzIsIDE2LCAxNiwgMikuY2VudGVyKCk7XHJcbiAgICAgIHRoaXMuanVtcEFuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCA0OCwgMTYsIDE2LCAyKS5jZW50ZXIoKTtcclxuICAgICAgdGhpcy5kYXNoQW5pbWF0aW9uID0gc2hlZXQuZ2V0QW5pbWF0aW9uKDAsIDY0LCAxNiwgMTYsIDIpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLndhbGxBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgODAsIDE2LCAxNiwgMikuY2VudGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLmlkbGVBbmltYXRpb247XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oKSk7XHJcbiAgICAgIHRoaXMuYm9keSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBSaWdpZGJvZHkoKSk7XHJcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUGxheWVySW5wdXRDb21wb25lbnQoKSk7XHJcbiAgICAgIHRoaXMuaGVhbHRoID0gdGhpcy5hZGRDb21wb25lbnQobmV3IEhlYWx0aENvbXBvbmVudCgpKTtcclxuXHJcbiAgICAgIHRoaXMuaGVhbHRoLm9uRGVhdGgubGlzdGVuKHRoaXMub25EZWF0aC5iaW5kKHRoaXMpKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmJvZHkubG9jYWxBQUJCLm9mZnNldC54ID0gNTtcclxuICAgICAgdGhpcy5ib2R5LmxvY2FsQUFCQi5vZmZzZXQueSA9IDU7XHJcbiAgICAgIHRoaXMuYm9keS5sb2NhbEFBQkIuc2l6ZS54ID0gMTA7XHJcbiAgICAgIHRoaXMuYm9keS5sb2NhbEFBQkIuc2l6ZS55ID0gMTM7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgIGlmKHRoaXMuaW5wdXQuanVtcFByZXNzZWQpe1xyXG4gICAgICAgICB0aGlzLmp1bXBIb3AgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuaW5wdXQuZGFzaFByZXNzZWQpe1xyXG4gICAgICAgICB0aGlzLmRhc2hIb3AgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY2FtID0gdGhpcy5zY2VuZS5jYW1lcmE7XHJcbiAgICAgIGNhbS5jZW50ZXIuc2V0KHRoaXMudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uKTtcclxuXHJcbiAgICAgIC8vIFRPRE8gZG8gdGhpcyByaWdodC5cclxuICAgICAgY29uc3Qgc2NlbmVXaWR0aCA9IDY0MDtcclxuICAgICAgY29uc3Qgc2NlbmVIZWlnaHQgPSAzNjA7XHJcblxyXG4gICAgICBpZihjYW0uY2VudGVyLnggLSBjYW0ud2lkdGggLyAyIDwgMCkgY2FtLmNlbnRlci54ID0gY2FtLndpZHRoIC8gMjtcclxuICAgICAgaWYoY2FtLmNlbnRlci54ICsgY2FtLndpZHRoIC8gMiA+IHNjZW5lV2lkdGgpIGNhbS5jZW50ZXIueCA9IHNjZW5lV2lkdGggLSBjYW0ud2lkdGggLyAyO1xyXG5cclxuICAgICAgaWYoY2FtLmNlbnRlci55IC0gY2FtLmhlaWdodCAvIDIgPCAwKSBjYW0uY2VudGVyLnkgPSBjYW0uaGVpZ2h0IC8gMjtcclxuICAgICAgaWYoY2FtLmNlbnRlci55ICsgY2FtLmhlaWdodCAvIDIgPiBzY2VuZUhlaWdodCkgY2FtLmNlbnRlci55ID0gc2NlbmVIZWlnaHQgLSBjYW0uaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAgIGxldCBib3VuZHMgPSBjYW0uZ2V0Qm91bmRzKCk7XHJcblxyXG4gICAgICBpZighdGhpcy5ib2R5LmJvdW5kaW5nQm94Lm92ZXJsYXBzKGJvdW5kcykpe1xyXG4gICAgICAgICB0aGlzLmhlYWx0aC5kYW1hZ2UoMTAwKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgc3VwZXIuZml4ZWRVcGRhdGUoZGVsdGEpO1xyXG5cclxuICAgICAgdGhpcy5ncm91bmRlZCA9IHRoaXMuYm9keS5jb2xsaWRlZEJvdHRvbTtcclxuICAgICAgdGhpcy53YWxsTGVmdCA9IHRoaXMuYm9keS5jb2xsaWRlZExlZnQ7XHJcbiAgICAgIHRoaXMud2FsbFJpZ2h0ID0gdGhpcy5ib2R5LmNvbGxpZGVkUmlnaHQ7XHJcblxyXG4gICAgICBpZih0aGlzLndhbGxMZWZ0IHx8IHRoaXMud2FsbFJpZ2h0KXtcclxuICAgICAgICAgaWYoIXRoaXMuaGFkV2FsbCAmJiAhdGhpcy5ncm91bmRlZCAmJiB0aGlzLmJvZHkudmVsb2NpdHkueSA+IDApe1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5oYWRXYWxsID0gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmhhZFdhbGwgPSBmYWxzZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodGhpcy5ncm91bmRlZCkge1xyXG4gICAgICAgICB0aGlzLmdyb3VuZExlYXZlVGltZSA9IDA7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5ncm91bmRMZWF2ZVRpbWUgKz0gZGVsdGE7XHJcbiAgICAgIH1cclxuXHJcblxyXG4gICAgICAvLyBNYWtlIHN1cmUgd2Ugc3RpY2sgdG8gdGhlIHdhbGxcclxuICAgICAgaWYoIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy53YWxsUmlnaHQpe1xyXG4gICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IDYwO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMud2FsbExlZnQpe1xyXG4gICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IC02MDtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIXRoaXMuaW5wdXQuanVtcERvd24pe1xyXG4gICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gSnVtcGluZ1xyXG4gICAgICB0aGlzLnVwZGF0ZUp1bXAoZGVsdGEpO1xyXG5cclxuICAgICAgLy8gTW92ZW1lbnRcclxuICAgICAgdGhpcy51cGRhdGVNb3ZlKGRlbHRhKTtcclxuXHJcbiAgICAgIC8vIERhc2hpbmdcclxuICAgICAgdGhpcy51cGRhdGVEYXNoKGRlbHRhKTtcclxuICAgICAgXHJcblxyXG4gICAgICAvLyBHcmF2aXR5XHJcbiAgICAgIHRoaXMudXBkYXRlR3Jhdml0eShkZWx0YSk7XHJcbiAgICAgIFxyXG4gICAgICAvLyBBbmltYXRpb25cclxuICAgICAgdGhpcy51cGRhdGVBbmltYXRpb24oZGVsdGEpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGVNb3ZlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICAvLyBVcGRhdGUgZmFjaW5nXHJcbiAgICAgIGlmKHRoaXMuaW5wdXQuZGlyZWN0aW9uID4gMCl7XHJcbiAgICAgICAgIHRoaXMuZmFjaW5nID0gMTtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLmlucHV0LmRpcmVjdGlvbiA8IDApe1xyXG4gICAgICAgICB0aGlzLmZhY2luZyA9IC0xO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMud2FsbExlZnQgJiYgIXRoaXMuZ3JvdW5kZWQpIHRoaXMuZmFjaW5nID0gMTtcclxuICAgICAgaWYodGhpcy53YWxsUmlnaHQgJiYgIXRoaXMuZ3JvdW5kZWQpIHRoaXMuZmFjaW5nID0gLTE7XHJcblxyXG4gICAgICBpZighdGhpcy5jYW5Nb3ZlKSByZXR1cm47XHJcblxyXG4gICAgICBpZih0aGlzLmlucHV0LmRpcmVjdGlvbiAhPT0gMCl7XHJcbiAgICAgICAgIGxldCBkaXIgPSBNYXRoLnNpZ24odGhpcy5pbnB1dC5kaXJlY3Rpb24pO1xyXG4gICAgICAgICBsZXQgbWF4U3BlZWQgPSB0aGlzLm1vdmVTcGVlZCAqIE1hdGguYWJzKHRoaXMuaW5wdXQuZGlyZWN0aW9uKTtcclxuICAgICAgICAgbGV0IGFjY2VsZXJhdGlvbiA9IHRoaXMuZ3JvdW5kQWNjZWxlcmF0aW9uICogZGVsdGE7XHJcblxyXG4gICAgICAgICB0aGlzLmFjY2VsZXJhdGUoXHJcbiAgICAgICAgICAgIGRpciwgXHJcbiAgICAgICAgICAgIG1heFNwZWVkLFxyXG4gICAgICAgICAgICBhY2NlbGVyYXRpb24pO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuc3RvcCh0aGlzLmdyb3VuZEFjY2VsZXJhdGlvbiAqIGRlbHRhKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICB1cGRhdGVEYXNoKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBpZih0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgdGhpcy5jYW5EYXNoID0gdHJ1ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodGhpcy5kYXNoaW5nKXtcclxuICAgICAgICAgdGhpcy5kYXNoVGltZXIgLT0gZGVsdGE7XHJcblxyXG4gICAgICAgICBpZih0aGlzLmRhc2hUaW1lciA8IDApe1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSB0aGlzLmRhc2hTYXZlZFNwZWVkICsgdGhpcy5mYWNpbmcgKiB0aGlzLmRhc2hTYXZlZEFkZGl0aW9uO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5kYXNoVGltZW91dCAtPSBkZWx0YTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYodGhpcy5kYXNoSG9wICYmIHRoaXMuZGFzaFRpbWVvdXQgPCAwICYmIHRoaXMuY2FuRGFzaCAmJiAhdGhpcy5ncm91bmRlZCl7XHJcbiAgICAgICAgIHRoaXMuZGFzaGluZyA9IHRydWU7XHJcbiAgICAgICAgIHRoaXMuY2FuRGFzaCA9IGZhbHNlO1xyXG4gICAgICAgICB0aGlzLmRhc2hTYXZlZFNwZWVkID0gdGhpcy5ib2R5LnZlbG9jaXR5Lng7XHJcbiAgICAgICAgIHRoaXMuZGFzaFRpbWVyID0gdGhpcy5kYXNoVGltZTtcclxuICAgICAgICAgdGhpcy5kYXNoVGltZW91dCA9IDAuMjtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IHRoaXMuZmFjaW5nICogdGhpcy5kYXNoU3BlZWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5kYXNoSG9wID0gZmFsc2U7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUp1bXAoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMud2FsbEp1bXBUaW1lciAtPSBkZWx0YTtcclxuXHJcbiAgICAgIGlmKHRoaXMuY2FuSnVtcCl7XHJcbiAgICAgICAgIGlmKHRoaXMuanVtcEhvcCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5qdW1wU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICBpZighdGhpcy5ncm91bmRlZCl7XHJcbiAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY2F5b3RlIGp1bXAhXCIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBUaGlzIGlzIHJlYWxseSBoYWNreSBidXQgd2hhdGV2ZXJcclxuICAgICAgICAgICAgdGhpcy5ncm91bmRMZWF2ZVRpbWUgPSB0aGlzLmNheW90ZVRpbWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5qdW1wSG9wID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZSBpZih0aGlzLmNhbkRvdWJsZWp1bXApe1xyXG4gICAgICAgICBpZih0aGlzLmp1bXBIb3Ape1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHRoaXMuanVtcFNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuanVtcEhvcCA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIGlmKHRoaXMud2FsbExlZnQgJiYgdGhpcy5qdW1wSG9wKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSB0aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBTcGVlZDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2FsbEp1bXBUaW1lciA9IDAuMDU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gZGFzaCBhZnRlciB5b3VyIHdhbGxqdW1wIDopXHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGFzaCA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYodGhpcy53YWxsUmlnaHQgJiYgdGhpcy5qdW1wSG9wKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSAtdGhpcy5tb3ZlU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5qdW1wU3BlZWQ7XHJcblxyXG4gICAgICAgICAgICB0aGlzLndhbGxKdW1wVGltZXIgPSAwLjA1O1xyXG5cclxuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5qdW1wSG9wID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBZb3UgY2FuIGRhc2ggYWZ0ZXIgeW91ciB3YWxsanVtcCA6KVxyXG4gICAgICAgICAgICB0aGlzLmNhbkRhc2ggPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEp1bXAgY2FuY2VsaW5nXHJcbiAgICAgIGlmKHRoaXMuYm9keS52ZWxvY2l0eS55ID4gMCl7XHJcbiAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuanVtcGluZyAmJiAhdGhpcy5pbnB1dC5qdW1wRG93bil7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5ib2R5LnZlbG9jaXR5LnkgKiAwLjI1O1xyXG4gICAgICAgICB0aGlzLmp1bXBpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICB1cGRhdGVBbmltYXRpb24oZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIC8vIEFuaW1hdGlvbiBzdHVmZlxyXG4gICAgICBpZih0aGlzLmJvZHkudmVsb2NpdHkueCAhPT0gMCl7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMud2Fsa0FuaW1hdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLmlkbGVBbmltYXRpb247XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMuYm9keS52ZWxvY2l0eS55IDwgMCl7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuanVtcEFuaW1hdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBpZighdGhpcy5ncm91bmRlZCAmJiB0aGlzLmJvZHkudmVsb2NpdHkueSA+IDApe1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLmZhbGxBbmltYXRpb247XHJcbiAgICAgIH1cclxuICAgICAgaWYoKHRoaXMud2FsbExlZnQgfHwgdGhpcy53YWxsUmlnaHQpICYmICF0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy53YWxsQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuZGFzaGluZyl7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuZGFzaEFuaW1hdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uLnVwZGF0ZShkZWx0YSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUdyYXZpdHkoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGlmKCF0aGlzLnVzZUdyYXZpdHkpIHJldHVybjtcclxuXHJcbiAgICAgIGlmKHRoaXMuYm9keS52ZWxvY2l0eS55IDwgMCl7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eSAqIHRoaXMuZ3Jhdml0eVVwRnJhY3Rpb24gKiBkZWx0YTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICBpZih0aGlzLmhhc1dhbGwpe1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSArPSB0aGlzLmdyYXZpdHkgKiB0aGlzLmdyYXZpdHlXYWxsRnJhY3Rpb24gKiBkZWx0YTtcclxuICAgICAgICAgfWVsc2V7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eSAqIGRlbHRhO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgYWNjZWxlcmF0ZShkaXI6IG51bWJlciwgbWF4U3BlZWQ6IG51bWJlciwgYWNjZWxlcmF0aW9uOiBudW1iZXIpe1xyXG4gICAgICBsZXQgYWNjID0gYWNjZWxlcmF0aW9uO1xyXG4gICAgICBsZXQgdmVsID0gdGhpcy5ib2R5LnZlbG9jaXR5LnggKiBkaXI7XHJcblxyXG4gICAgICBpZih2ZWwgPj0gbWF4U3BlZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGlmKHZlbCArIGFjYyA+IG1heFNwZWVkKXtcclxuICAgICAgICAgYWNjID0gbWF4U3BlZWQgLSB2ZWw7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ICs9IGFjYyAqIGRpcjtcclxuICAgICAgXHJcbiAgIH1cclxuICAgc3RvcChhY2NlbGVyYXRpb246IG51bWJlcil7XHJcbiAgICAgIGxldCBkaXIgPSBNYXRoLnNpZ24odGhpcy5ib2R5LnZlbG9jaXR5LngpO1xyXG4gICAgICBsZXQgdmVsID0gTWF0aC5hYnModGhpcy5ib2R5LnZlbG9jaXR5LngpO1xyXG5cclxuICAgICAgbGV0IHJlbSA9IGFjY2VsZXJhdGlvbjtcclxuXHJcbiAgICAgIGlmKHZlbCAtIHJlbSA8IDApIHJlbSA9IHZlbDtcclxuXHJcbiAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54IC09IHJlbSAqIGRpcjtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBzdXBlci5kcmF3KGdyYXBoaWNzKTtcclxuXHJcbiAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGUodGhpcy5jdXJyZW50QW5pbWF0aW9uLmZyYW1lLCBcclxuICAgICAgICAgdGhpcy50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueCwgdGhpcy50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueSxcclxuICAgICAgICAgdGhpcy5mYWNpbmcsIDEsIFxyXG4gICAgICAgICAwKTtcclxuICAgfVxyXG5cclxuICAgb25EZWF0aCgpe1xyXG4gICAgICB0aGlzLnNjZW5lLnJlbW92ZUdhbWVPYmplY3QodGhpcyk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU3Bhd25HYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCKXtcclxuICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgIHRoaXMudHJhbnNmb3JtID0gdGhpcy5hZGRDb21wb25lbnQobmV3IFRyYW5zZm9ybSgpKTtcclxuICAgICAgdGhpcy50cmFuc2Zvcm0ucG9zaXRpb24uc2V0KGFhYmIucG9zaXRpb24pO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBIZWFsdGhDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSGVhbHRoQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3Bpa2VzR2FtZU9iamVjdCBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihhYWJiOiBBQUJCLCBzaHJpbms6IGJvb2xlYW4pe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgaWYoc2hyaW5rKXtcclxuICAgICAgICAgbGV0IGhlaWdodCA9IGFhYmIuaGVpZ2h0O1xyXG4gICAgICAgICBsZXQgc2tpbiA9IGFhYmIuaGVpZ2h0IC0gMztcclxuXHJcbiAgICAgICAgIGlmKHNraW4gPiAwKXtcclxuICAgICAgICAgICAgYWFiYi5zaXplLnkgLT0gc2tpbjtcclxuICAgICAgICAgICAgYWFiYi5wb3NpdGlvbi55ICs9IHNraW47XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoYWFiYi5wb3NpdGlvbik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ib2R5LmxvY2FsQUFCQiA9IGFhYmI7XHJcblxyXG4gICAgICB0aGlzLmJvZHkub25Db2xsaXNpb24ubGlzdGVuKHRoaXMub25Db2xsaXNpb24uYmluZCh0aGlzKSk7XHJcbiAgICAgIFxyXG4gICB9XHJcblxyXG4gICBvbkNvbGxpc2lvbihvdGhlcjogUmlnaWRib2R5KXtcclxuICAgICAgbGV0IGNvbXAgPSBvdGhlci5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoY29tcG9uZW50ID0+IGNvbXBvbmVudCBpbnN0YW5jZW9mIEhlYWx0aENvbXBvbmVudCkgYXMgSGVhbHRoQ29tcG9uZW50fHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIGlmKGNvbXAgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coXCJEYW1hZ2luZyBzb21ldGhpbmchXCIpO1xyXG4gICAgICBcclxuICAgICAgY29tcC5kYW1hZ2UoMTAwKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBQUJCe1xyXG4gICBwb3NpdGlvbjogVmVjdG9yMjtcclxuICAgb2Zmc2V0OiBWZWN0b3IyO1xyXG4gICBzaXplOiBWZWN0b3IyO1xyXG5cclxuICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpLCBzaXplOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKSwgb2Zmc2V0OiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKSkgeyBcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcclxuICAgfVxyXG5cclxuICAgZ2V0IGxlZnQoKSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLm9mZnNldC54OyB9XHJcbiAgIGdldCB0b3AoKSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLm9mZnNldC55OyB9XHJcbiAgIFxyXG4gICBnZXQgcmlnaHQoKSB7cmV0dXJuIHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IC0gdGhpcy5vZmZzZXQueDsgfVxyXG4gICBnZXQgYm90dG9tKCkge3JldHVybiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSAtIHRoaXMub2Zmc2V0Lnk7IH1cclxuXHJcbiAgIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMuc2l6ZS54OyB9XHJcbiAgIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLnNpemUueTsgfVxyXG5cclxuICAgb3ZlcmxhcHMob3RoZXI6IEFBQkIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5vdmVybGFwc1gob3RoZXIpICYmIHRoaXMub3ZlcmxhcHNZKG90aGVyKTtcclxuICAgfVxyXG4gICBvdmVybGFwc1gob3RoZXI6IEFBQkIpe1xyXG4gICAgICBpZih0aGlzLmxlZnQgPj0gb3RoZXIucmlnaHQpIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYodGhpcy5yaWdodCA8PSBvdGhlci5sZWZ0KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG4gICBvdmVybGFwc1kob3RoZXI6IEFBQkIpe1xyXG4gICAgICBpZih0aGlzLnRvcCA+PSBvdGhlci5ib3R0b20pIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYodGhpcy5ib3R0b20gPD0gb3RoZXIudG9wKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgbWluT3ZlcmxhcFgob3RoZXI6IEFBQkIpe1xyXG4gICAgICBsZXQgbW90aW9uTGVmdCA9IG90aGVyLnJpZ2h0IC0gdGhpcy5sZWZ0O1xyXG4gICAgICBsZXQgbW90aW9uUmlnaHQgPSB0aGlzLnJpZ2h0IC0gb3RoZXIubGVmdDtcclxuXHJcbiAgICAgIGlmKG1vdGlvbkxlZnQgPiBtb3Rpb25SaWdodCkgcmV0dXJuIC1tb3Rpb25SaWdodDtcclxuICAgICAgcmV0dXJuIG1vdGlvbkxlZnQ7XHJcbiAgIH1cclxuICAgbWluT3ZlcmxhcFkob3RoZXI6IEFBQkIpe1xyXG4gICAgICBsZXQgbW90aW9uVXAgPSBvdGhlci5ib3R0b20gLSB0aGlzLnRvcDtcclxuICAgICAgbGV0IG1vdGlvbkRvd24gPSB0aGlzLmJvdHRvbSAtIG90aGVyLnRvcDtcclxuXHJcbiAgICAgIGlmKG1vdGlvblVwID4gbW90aW9uRG93bikgcmV0dXJuIC1tb3Rpb25Eb3duO1xyXG4gICAgICByZXR1cm4gbW90aW9uVXA7XHJcbiAgIH1cclxuICAgXHJcblxyXG4gICBtaW5PdmVybGFwWFdpdGhCaWFzKG90aGVyOiBBQUJCLCBiaWFzOiBudW1iZXIpe1xyXG4gICAgICBpZihiaWFzIDwgMCkgcmV0dXJuIG90aGVyLnJpZ2h0IC0gdGhpcy5sZWZ0O1xyXG4gICAgICByZXR1cm4gLSh0aGlzLnJpZ2h0IC0gb3RoZXIubGVmdCk7XHJcblxyXG4gICB9XHJcbiAgIG1pbk92ZXJsYXBZV2l0aEJpYXMob3RoZXI6IEFBQkIsIGJpYXM6IG51bWJlcil7XHJcbiAgICAgIGlmKGJpYXMgPCAwKSByZXR1cm4gb3RoZXIuYm90dG9tIC0gdGhpcy50b3A7XHJcbiAgICAgIHJldHVybiAtKHRoaXMuYm90dG9tIC0gb3RoZXIudG9wKTtcclxuICAgfVxyXG5cclxuICAgc2V0KG90aGVyOiBBQUJCKXtcclxuICAgICAgdGhpcy5wb3NpdGlvbi5zZXQob3RoZXIucG9zaXRpb24pO1xyXG4gICAgICB0aGlzLnNpemUuc2V0KG90aGVyLnNpemUpO1xyXG4gICAgICB0aGlzLm9mZnNldC5zZXQob3RoZXIub2Zmc2V0KTtcclxuICAgfVxyXG5cclxuICAgY2xvbmUoKXtcclxuICAgICAgcmV0dXJuIG5ldyBBQUJCKHRoaXMucG9zaXRpb24uY2xvbmUoKSwgdGhpcy5zaXplLmNsb25lKCksIHRoaXMub2Zmc2V0LmNsb25lKCkpO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgQ3JlYXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBuZXcgQUFCQihuZXcgVmVjdG9yMih4LCB5KSwgbmV3IFZlY3RvcjIodywgaCkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBDdXJ2ZSB9IGZyb20gXCJ1dGlsL0N1cnZlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMntcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApe1xyXG4gICAgICB0aGlzLnggPSB4O1xyXG4gICAgICB0aGlzLnkgPSB5O1xyXG4gICB9XHJcblxyXG4gICBhZGQob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggKz0gb3RoZXIueDtcclxuICAgICAgdGhpcy55ICs9IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBzdWIob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggLT0gb3RoZXIueDtcclxuICAgICAgdGhpcy55IC09IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBtdWwob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggKj0gb3RoZXIueDtcclxuICAgICAgdGhpcy55ICo9IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBkaXYob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggLz0gb3RoZXIueDtcclxuICAgICAgdGhpcy55IC89IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBzZXQob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggPSBvdGhlci54O1xyXG4gICAgICB0aGlzLnkgPSBvdGhlci55O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgc2V0WmVybygpe1xyXG4gICAgICB0aGlzLnggPSAwO1xyXG4gICAgICB0aGlzLnkgPSAwO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgYXBwbHkoeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLnggPSB4O1xyXG4gICAgICB0aGlzLnkgPSB5O1xyXG4gICB9XHJcblxyXG4gICBub3JtYWxpemUoKXtcclxuICAgICAgbGV0IGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xyXG5cclxuICAgICAgaWYobGVuZ3RoID4gMCl7XHJcbiAgICAgICAgIHRoaXMueCAvPSBsZW5ndGg7XHJcbiAgICAgICAgIHRoaXMueSAvPSBsZW5ndGg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbm9ybWFsaXplZCgpe1xyXG4gICAgICByZXR1cm4gdGhpcy5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgc3FyTGVuZ3RoKCl7XHJcbiAgICAgIHJldHVybiBWZWN0b3IyLmRvdCh0aGlzLCB0aGlzKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IGxlbmd0aCgpe1xyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KHRoaXMuc3FyTGVuZ3RoKTtcclxuICAgfVxyXG5cclxuICAgZ2V0IGFuZ2xlKCl7XHJcbiAgICAgIHJldHVybiBNYXRoLmF0YW4yKHRoaXMueSwgdGhpcy54KTtcclxuICAgfVxyXG5cclxuICAgZGlzdGFuY2VUbyhvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHJldHVybiBWZWN0b3IyLmRpc3RhbmNlKHRoaXMsIG90aGVyKTtcclxuICAgfVxyXG4gICBkaXJlY3Rpb25UbyhvdGhlcjogVmVjdG9yMil7XHJcbiAgICAgIHJldHVybiBWZWN0b3IyLmRpcmVjdGlvbih0aGlzLCBvdGhlcik7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBkaXJlY3Rpb24oYTogVmVjdG9yMiwgYjogVmVjdG9yMil7XHJcbiAgICAgIHJldHVybiBiLmNsb25lKCkuc3ViKGEpO1xyXG4gICB9XHJcbiAgIFxyXG4gICBzdGF0aWMgZGlzdGFuY2UoYTogVmVjdG9yMiwgYjogVmVjdG9yMil7XHJcbiAgICAgIGxldCBkaXN0WCA9IGEueCAtIGIueDtcclxuICAgICAgbGV0IGRpc3RZID0gYS55IC0gYi55O1xyXG5cclxuICAgICAgcmV0dXJuIE1hdGguc3FydChkaXN0WCAqIGRpc3RYICsgZGlzdFkgKiBkaXN0WSk7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBsZXJwKGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIsIGY6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB0aGlzLmxlcnBPdXQoYSwgYiwgbmV3IFZlY3RvcjIoKSwgZik7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBsZXJwT3V0KGE6IFZlY3RvcjIsIGI6IFZlY3RvcjIsIG91dDogVmVjdG9yMiwgZjogbnVtYmVyKXtcclxuICAgICAgb3V0LnggPSBDdXJ2ZS5sZXJwKGEueCwgYi54LCBmKTtcclxuICAgICAgb3V0LnkgPSBDdXJ2ZS5sZXJwKGEueSwgYi55LCBmKTtcclxuICAgICAgXHJcbiAgICAgIHJldHVybiBvdXQ7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBkb3QoYTogVmVjdG9yMiwgYjogVmVjdG9yMil7XHJcbiAgICAgIHJldHVybiBhLnggKiBiLnggKyBhLnkgKiBiLnk7XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBhbmdsZWQoYW5nbGU6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yMihNYXRoLmNvcyhhbmdsZSksIE1hdGguc2luKGFuZ2xlKSk7XHJcbiAgIH1cclxuXHJcbiAgIGNsb25lKCl7XHJcbiAgICAgIHJldHVybiBuZXcgVmVjdG9yMih0aGlzLngsIHRoaXMueSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDb21wb25lbnR7XHJcbiAgIGdhbWUhOiBHYW1lO1xyXG4gICBnYW1lT2JqZWN0ITogR2FtZU9iamVjdDtcclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgXHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgfVxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCIuL0NvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCIuL1NjZW5lXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZU9iamVjdCB7XHJcbiAgIGNvbXBvbmVudHM6IENvbXBvbmVudFtdO1xyXG4gICBzY2VuZSE6IFNjZW5lO1xyXG5cclxuICAgZ2FtZSE6IEdhbWU7XHJcbiAgIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcclxuICAgfVxyXG4gICBcclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgaWYodGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmouaW5pdChnYW1lKSk7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2gob2JqID0+IG9iai5kZXN0cm95KCkpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmoudXBkYXRlKGRlbHRhKSk7XHJcbiAgIH1cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmouZml4ZWRVcGRhdGUoZGVsdGEpKTtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChvYmogPT4gb2JqLmRyYXcoZ3JhcGhpY3MpKTtcclxuICAgfVxyXG5cclxuICAgYWRkQ29tcG9uZW50PFQgZXh0ZW5kcyBDb21wb25lbnQ+KGNvbXBvbmVudDogVCl7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5wdXNoKGNvbXBvbmVudCk7XHJcbiAgICAgIGNvbXBvbmVudC5nYW1lT2JqZWN0ID0gdGhpcztcclxuICAgICAgXHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm4gY29tcG9uZW50O1xyXG5cclxuICAgICAgY29tcG9uZW50LmluaXQodGhpcy5nYW1lKTtcclxuXHJcbiAgICAgIHJldHVybiBjb21wb25lbnQ7XHJcbiAgIH1cclxuXHJcbiAgIHJlbW92ZUNvbXBvbmVudChjb21wb25lbnQ6IENvbXBvbmVudCl7XHJcbiAgICAgIGxldCBpZHggPSB0aGlzLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpO1xyXG5cclxuICAgICAgaWYoaWR4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5jb21wb25lbnRzLnNwbGljZShpZHgsIDEpO1xyXG4gICAgICBcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuXHJcbiAgICAgIGNvbXBvbmVudC5kZXN0cm95KCk7XHJcbiAgIH1cclxuXHJcbiAgIGZpbmRDb21wb25lbnQocHJlZGljYXRlOiAoY29tcG9uZW50OiBDb21wb25lbnQpID0+IGJvb2xlYW4pe1xyXG4gICAgICByZXR1cm4gdGhpcy5jb21wb25lbnRzLmZpbmQocHJlZGljYXRlKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiZ3JhcGhpY3MvQ2FtZXJhXCI7XHJcbmltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFRpbGVNYXAgfSBmcm9tIFwidGlsZW1hcC9UaWxlTWFwXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwiLi9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU2NlbmV7XHJcbiAgIGNhbWVyYTogQ2FtZXJhO1xyXG4gICBnYW1lT2JqZWN0czogR2FtZU9iamVjdFtdO1xyXG4gICBnYW1lITogR2FtZTtcclxuICAgdGlsZW1hcD86IFRpbGVNYXA7XHJcblxyXG4gICBpbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgdGhpcy5jYW1lcmEgPSBuZXcgQ2FtZXJhKCk7XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMgPSBbXTtcclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgaWYodGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMuZ2FtZSA9IGdhbWU7XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4gb2JqLmluaXQoZ2FtZSkpO1xyXG4gICB9XHJcblxyXG4gICBkZXN0cm95KCl7XHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMuZm9yRWFjaChvYmogPT4gb2JqLmRlc3Ryb3koKSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy50aWxlbWFwPy51cGRhdGUoZGVsdGEpO1xyXG4gICAgICB0aGlzLmdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IG9iai51cGRhdGUoZGVsdGEpKTtcclxuICAgfVxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouZml4ZWRVcGRhdGUoZGVsdGEpKTtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBncmFwaGljcy5zZXRDYW1lcmEodGhpcy5jYW1lcmEpO1xyXG5cclxuICAgICAgdGhpcy50aWxlbWFwPy5kcmF3KGdyYXBoaWNzKTtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouZHJhdyhncmFwaGljcykpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGVTaXplKCl7XHJcbiAgICAgIGxldCBhc3AgPSB0aGlzLmdhbWUuY2FudmFzLndpZHRoIC8gdGhpcy5nYW1lLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMuY2FtZXJhLndpZHRoID0gdGhpcy5jYW1lcmEuaGVpZ2h0ICogYXNwO1xyXG4gICB9XHJcblxyXG4gICBhZGRHYW1lT2JqZWN0KG9iajogR2FtZU9iamVjdCl7XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMucHVzaChvYmopO1xyXG4gICAgICBvYmouc2NlbmUgPSB0aGlzO1xyXG5cclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuXHJcbiAgICAgIG9iai5pbml0KHRoaXMuZ2FtZSk7XHJcbiAgIH1cclxuICAgXHJcbiAgIHJlbW92ZUdhbWVPYmplY3Qob2JqOiBHYW1lT2JqZWN0KXtcclxuICAgICAgbGV0IGlkeCA9IHRoaXMuZ2FtZU9iamVjdHMuaW5kZXhPZihvYmopO1xyXG5cclxuICAgICAgaWYoaWR4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5zcGxpY2UoaWR4LCAxKTtcclxuXHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcblxyXG4gICAgICBvYmouZGVzdHJveSgpO1xyXG4gICB9XHJcblxyXG4gICBmaW5kT2JqZWN0KHByZWRpY2F0ZTogKGNvbXBvbmVudDogR2FtZU9iamVjdCkgPT4gYm9vbGVhbil7XHJcbiAgICAgIHJldHVybiB0aGlzLmdhbWVPYmplY3RzLmZpbmQocHJlZGljYXRlKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gXCJzaWduYWxzL1NpZ25hbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwiLi9UcmFuc2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSaWdpZGJvZHkgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgIHRyYW5zZm9ybSE6IFRyYW5zZm9ybTtcclxuICAgdmVsb2NpdHk6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICBtYXNzOiBudW1iZXIgPSAxO1xyXG4gICBib3VuY3luZXNzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgcHJldmlvdXNQb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICBjb2xsaWRlZExlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY29sbGlkZWRSaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjb2xsaWRlZFRvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjb2xsaWRlZEJvdHRvbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgc29saWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgdXNlRHluYW1pY0NvbGxpc2lvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIG9uQ29sbGlzaW9uOiBTaWduYWw8UmlnaWRib2R5PiA9IG5ldyBTaWduYWw8UmlnaWRib2R5PigpO1xyXG5cclxuICAgbG9jYWxBQUJCOiBBQUJCID0gbmV3IEFBQkIoKTtcclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcblxyXG4gICAgICB0aGlzLmdhbWUucGh5c2ljcy5hZGRCb2R5KHRoaXMpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuZ2FtZU9iamVjdC5maW5kQ29tcG9uZW50KGMgPT4gYyBpbnN0YW5jZW9mIFRyYW5zZm9ybSkgYXMgVHJhbnNmb3JtO1xyXG4gICB9XHJcblxyXG4gICBkZXN0cm95KCl7XHJcbiAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLnJlbW92ZUJvZHkodGhpcyk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBib3VuZGluZ0JveCgpe1xyXG4gICAgICB0aGlzLmxvY2FsQUFCQi5wb3NpdGlvbi5zZXQodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgICByZXR1cm4gdGhpcy5sb2NhbEFBQkI7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm0gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgIHBvc2l0aW9uOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgXHJcbiAgIC8vIEludGVycG9sYXRlZCBwb3NpdGlvblxyXG4gICBpbnRlcnBvbGF0ZWRQb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbn0iLCJleHBvcnQgY2xhc3MgU2lnbmFsPFQ+e1xyXG4gICBmdW5jdGlvbnM6ICgodHlwZTogVCkgPT4gdm9pZClbXTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zID0gW107XHJcbiAgIH1cclxuXHJcbiAgIGxpc3RlbihmdW5jOiAodHlwZTogVCkgPT4gdm9pZCl7XHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zLnB1c2goZnVuYyk7XHJcbiAgIH1cclxuICAgcmVtb3ZlKGZ1bmM6ICh0eXBlOiBUKSA9PiB2b2lkKXtcclxuICAgICAgbGV0IGluZGV4ID0gdGhpcy5mdW5jdGlvbnMuaW5kZXhPZihmdW5jKTtcclxuICAgICAgaWYoaW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmZ1bmN0aW9ucy5zcGxpY2UoaW5kZXgpO1xyXG4gICB9XHJcblxyXG4gICBlbWl0KGV2ZW50IDogVCl7XHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zLmZvckVhY2goZnVuYyA9PiBmdW5jKGV2ZW50KSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFuaW1hdGlvbiB9IGZyb20gXCJncmFwaGljcy9BbmltYXRpb25cIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgU3ByaXRlLCBTcHJpdGVTaGVldCB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuaW1wb3J0IHsgZ2V0U3ByaXRlRnJvbVRpbGVzZXQsIFRpbGVkTWFwLCBUaWxlZE9iamVjdCwgVGlsZWRPYmplY3RMYXllciwgVGlsZWRPYmplY3RMYXllclR5cGUsIFRpbGVkVGlsZUxheWVyLCBUaWxlZFRpbGVMYXllclR5cGUsIFRpbGVkVGlsZXNldCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XHJcblxyXG50eXBlIFRpbGVtYXBPYmplY3RMb2FkZXIgPSAob2JqZWN0OiBUaWxlZE9iamVjdCkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlbWFwTGF5ZXJ7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG4gICB0aWxlczogKEFuaW1hdGlvbnx1bmRlZmluZWQpW107XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLnRpbGVzID0gW107XHJcblxyXG4gICAgICAvLyBsZW5ndGggc3R1ZmYuLi4gOicpXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3aWR0aCAqIGhlaWdodDsgaSsrKSB0aGlzLnRpbGVzLnB1c2godW5kZWZpbmVkKTtcclxuICAgfVxyXG5cclxuICAgZ2V0VGlsZSh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW3ggKyB5ICogdGhpcy53aWR0aF07XHJcbiAgIH1cclxuICAgc2V0VGlsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgYW5pbWF0aW9uOiBBbmltYXRpb24pe1xyXG4gICAgICB0aGlzLnRpbGVzW3ggKyB5ICogdGhpcy53aWR0aF0gPSBhbmltYXRpb247XHJcbiAgIH1cclxuICAgc2V0VGlsZUZyb21JbmRleChpbmRleDogbnVtYmVyLCBhbmltYXRpb246IEFuaW1hdGlvbil7XHJcbiAgICAgIHRoaXMudGlsZXNbaW5kZXhdID0gYW5pbWF0aW9uO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGZvcihsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4Kyspe1xyXG4gICAgICAgICBmb3IobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKyl7XHJcbiAgICAgICAgICAgIGxldCB0aWxlID0gdGhpcy5nZXRUaWxlKHgsIHkpO1xyXG4gICAgICAgICAgICBpZih0aWxlID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgdGlsZS51cGRhdGUoZGVsdGEpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG4gICBcclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3MsIHRpbGVXaWR0aDogbnVtYmVyLCB0aWxlSGVpZ2h0OiBudW1iZXIpe1xyXG4gICAgICBmb3IobGV0IHggPSAwOyB4IDwgdGhpcy53aWR0aDsgeCsrKXtcclxuICAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHRoaXMuaGVpZ2h0OyB5Kyspe1xyXG4gICAgICAgICAgICBsZXQgdGlsZSA9IHRoaXMuZ2V0VGlsZSh4LCB5KTtcclxuICAgICAgICAgICAgaWYodGlsZSA9PT0gdW5kZWZpbmVkKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGdyYXBoaWNzLmRyYXdTcHJpdGVTaW1wbGUodGlsZS5mcmFtZSwgeCAqIHRpbGVXaWR0aCwgeSAqIHRpbGVIZWlnaHQpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgfVxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgVGlsZU1hcCB7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG4gICB0aWxlV2lkdGg6IG51bWJlcjtcclxuICAgdGlsZUhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgYmFja2dyb3VuZENvbG9yOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgbGF5ZXJzOiBUaWxlbWFwTGF5ZXJbXTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCB0aWxlV2lkdGg6IG51bWJlciwgdGlsZUhlaWdodDogbnVtYmVyKXtcclxuICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgdGhpcy50aWxlV2lkdGggPSB0aWxlV2lkdGg7XHJcbiAgICAgIHRoaXMudGlsZUhlaWdodCA9IHRpbGVIZWlnaHQ7XHJcbiAgICAgIHRoaXMubGF5ZXJzID0gW107XHJcbiAgIH1cclxuXHJcbiAgIGRyYXcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IodGhpcy5iYWNrZ3JvdW5kQ29sb3IpO1xyXG4gICAgICBncmFwaGljcy5kcmF3UmVjdGFuZ2xlKDAsIDAsIHRoaXMud2lkdGggKiB0aGlzLnRpbGVXaWR0aCwgdGhpcy5oZWlnaHQgKiB0aGlzLnRpbGVIZWlnaHQsIHRydWUpO1xyXG4gICAgICBcclxuICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiBsYXllci5kcmF3KGdyYXBoaWNzLCB0aGlzLnRpbGVXaWR0aCwgdGhpcy50aWxlSGVpZ2h0KSk7XHJcbiAgIH1cclxuXHJcbiAgIC8vIFRPRE8gbWF5YmUgbW9yZSBsaWtlIGJhdGNoIHVwZGF0ZSBldmVyeSB4IGZyYW1lcyBvciBkZXZpZGUgdXAgdGhlIHdvcmsgc29tZWhvdyBvdmVyIG11cHRpcGxlIGZyYW1lc1xyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7ICAgICAgXHJcbiAgICAgIHRoaXMubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4gbGF5ZXIudXBkYXRlKGRlbHRhKSk7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgZnJvbVRpbGVkTWFwKG1hcDogVGlsZWRNYXAsIGxvYWRlcjogVGlsZW1hcE9iamVjdExvYWRlcil7XHJcbiAgICAgIGxldCB0aWxlbWFwID0gbmV3IFRpbGVNYXAobWFwLndpZHRoLCBtYXAuaGVpZ2h0LCBtYXAudGlsZXdpZHRoLCBtYXAudGlsZWhlaWdodCk7XHJcblxyXG4gICAgICB0aWxlbWFwLmJhY2tncm91bmRDb2xvciA9IG1hcC5iYWNrZ3JvdW5kY29sb3I7XHJcbiAgICAgIFxyXG4gICAgICAvLyBUSUxFU0VUU1xyXG4gICAgICBsZXQgdGlsZXNldHM6IHtzZXQ6IFRpbGVkVGlsZXNldCwgc2hlZXQ6IFNwcml0ZVNoZWV0fVtdID0gW107XHJcbiAgICAgIGxldCB0aWxlczogeyBba2V5OiBudW1iZXJdOiBBbmltYXRpb24gfSA9IHt9O1xyXG4gICAgICBcclxuICAgICAgbWFwLnRpbGVzZXRzLmZvckVhY2goc2V0ID0+IHtcclxuICAgICAgICAgbGV0IHNoZWV0ID0gU3ByaXRlU2hlZXQuZnJvbUhUTUwoc2V0Lm5hbWUpO1xyXG4gICAgICAgICB0aWxlc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgc2V0LFxyXG4gICAgICAgICAgICBzaGVldFxyXG4gICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgIC8vIExvYWQgYWxsIGRlZmF1bHQgYW5pbWF0aW9uc1xyXG4gICAgICAgICBzZXQudGlsZXM/LmZvckVhY2godGlsZSA9PiB7XHJcbiAgICAgICAgICAgIGxldCBpbmRleCA9IHRpbGUuaWQgKyBzZXQuZmlyc3RnaWQ7XHJcblxyXG4gICAgICAgICAgICBsZXQgYW5pbWF0aW9uID0gIG5ldyBBbmltYXRpb24oKTtcclxuXHJcbiAgICAgICAgICAgIHRpbGUuYW5pbWF0aW9uLmZvckVhY2goZnJhbWUgPT4ge1xyXG4gICAgICAgICAgICAgICBhbmltYXRpb24uYWRkRnJhbWUoZ2V0U3ByaXRlRnJvbVRpbGVzZXQoc2V0LCBmcmFtZS50aWxlaWQsIHNoZWV0KSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgYW5pbWF0aW9uLmZyYW1lUmF0ZSA9IDQ7XHJcblxyXG4gICAgICAgICAgICB0aWxlc1tpbmRleF0gPSBhbmltYXRpb247XHJcbiAgICAgICAgIH0pO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGNvbnNvbGUuZGlyKHRpbGVzZXRzKTtcclxuXHJcbiAgICAgIC8vIFRJTEUgTEFZRVJTXHJcbiAgICAgIG1hcC5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgIGlmKGxheWVyLnR5cGUgPT09IFRpbGVkVGlsZUxheWVyVHlwZSl7XHJcbiAgICAgICAgICAgIGxldCB0aWxlTGF5ZXIgPSBsYXllciBhcyBUaWxlZFRpbGVMYXllcjtcclxuXHJcbiAgICAgICAgICAgIGxldCB0aWxlbWFwTGF5ZXIgPSBuZXcgVGlsZW1hcExheWVyKHRpbGVMYXllci53aWR0aCwgdGlsZUxheWVyLmhlaWdodCk7XHJcblxyXG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgdGlsZUxheWVyLmRhdGEubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICAgICBsZXQgdGlsZUluZGV4ID0gdGlsZUxheWVyLmRhdGFbaV07XHJcblxyXG4gICAgICAgICAgICAgICBsZXQgdGlsZSA9IHRpbGVzW3RpbGVJbmRleF07XHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAvLyBGaW5kIHRpbGVcclxuICAgICAgICAgICAgICAgaWYodGlsZSA9PT0gdW5kZWZpbmVkICYmIHRpbGVJbmRleCAhPT0gMCl7XHJcbiAgICAgICAgICAgICAgICAgIGZvcihsZXQgaiA9IDA7IGogPCB0aWxlc2V0cy5sZW5ndGg7IGorKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgIGxldCB0aWxlc2V0ID0gdGlsZXNldHNbal07XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICBpZih0aWxlSW5kZXggPj0gdGlsZXNldC5zZXQuZmlyc3RnaWQgJiYgdGlsZUluZGV4IDwgdGlsZXNldC5zZXQuZmlyc3RnaWQgKyB0aWxlc2V0LnNldC50aWxlY291bnQpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc3ByaXRlID0gZ2V0U3ByaXRlRnJvbVRpbGVzZXQodGlsZXNldC5zZXQsIHRpbGVJbmRleCAtIHRpbGVzZXQuc2V0LmZpcnN0Z2lkLCB0aWxlc2V0LnNoZWV0KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUgPSBuZXcgQW5pbWF0aW9uKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGUuYWRkRnJhbWUoc3ByaXRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIHRpbGVzW3RpbGVJbmRleF0gPSB0aWxlO1xyXG4gICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICBpZih0aWxlICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICAgICAgICAgICB0aWxlbWFwTGF5ZXIuc2V0VGlsZUZyb21JbmRleChpLCB0aWxlLmNsb25lKCkpO1xyXG4gICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRpbGVtYXAubGF5ZXJzLnB1c2godGlsZW1hcExheWVyKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIE9CSkVDVCBMQVlFUlxyXG4gICAgICBtYXAubGF5ZXJzLmZvckVhY2gobGF5ZXIgPT4ge1xyXG4gICAgICAgICBpZihsYXllci50eXBlID09PSBUaWxlZE9iamVjdExheWVyVHlwZSl7XHJcbiAgICAgICAgICAgIGxldCBvYmpMYXllciA9IGxheWVyIGFzIFRpbGVkT2JqZWN0TGF5ZXI7XHJcbiAgICAgICAgICAgIG9iakxheWVyLm9iamVjdHMuZm9yRWFjaChsb2FkZXIpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgcmV0dXJuIHRpbGVtYXA7XHJcbiAgIH1cclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgYXN5bmMgZnJvbVRpbGVkTWFwRG93bmxvYWQoZmlsZTogc3RyaW5nLCBsb2FkZXI6IFRpbGVtYXBPYmplY3RMb2FkZXIpe1xyXG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgZmV0Y2goZmlsZSk7XHJcbiAgICAgIGxldCBkID0gYXdhaXQgcmVzdWx0Lmpzb24oKTtcclxuXHJcbiAgICAgIHJldHVybiB0aGlzLmZyb21UaWxlZE1hcChkIGFzIFRpbGVkTWFwLCBsb2FkZXIpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGVTaGVldCB9IGZyb20gXCJncmFwaGljcy9TcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBUaWxlZE9iamVjdExheWVyVHlwZSA9IFwib2JqZWN0Z3JvdXBcIjtcclxuZXhwb3J0IGNvbnN0IFRpbGVkVGlsZUxheWVyVHlwZSA9IFwidGlsZWxheWVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkTWFwIHtcclxuICAgd2lkdGg6IG51bWJlcjtcclxuICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICB0aWxld2lkdGg6IG51bWJlcjtcclxuICAgdGlsZWhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgYmFja2dyb3VuZGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICBsYXllcnM6IFRpbGVkTGF5ZXJbXTtcclxuICAgdGlsZXNldHM6IFRpbGVkVGlsZXNldFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkTGF5ZXIge1xyXG4gICBpZDogbnVtYmVyO1xyXG4gICBcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcblxyXG4gICBuYW1lOiBzdHJpbmc7XHJcbiAgIHR5cGU6IHN0cmluZztcclxuXHJcbiAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZFRpbGVMYXllciBleHRlbmRzIFRpbGVkTGF5ZXIge1xyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuICAgZGF0YTogbnVtYmVyW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZE9iamVjdExheWVyIGV4dGVuZHMgVGlsZWRMYXllcntcclxuICAgb2JqZWN0czogVGlsZWRPYmplY3RbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkT2JqZWN0IHtcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICB0eXBlOiBzdHJpbmc7XHJcblxyXG4gICBwcm9wZXJ0aWVzOiBUaWxlZE9iamVjdFByb3BlcnRpZXNbXTtcclxuXHJcbiAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZWRPYmplY3RQcm9wZXJ0aWVze1xyXG4gICBuYW1lOiBzdHJpbmc7XHJcbiAgIHR5cGU6IHN0cmluZztcclxuICAgdmFsdWU6IHN0cmluZ3xib29sZWFufG51bWJlcjtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZEFuaW1hdGVkVGlsZXN7XHJcbiAgIGlkOiBudW1iZXI7XHJcbiAgIGFuaW1hdGlvbjogVGlsZWRBbmltYXRlZFRpbGVGcmFtZVtdO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZWRBbmltYXRlZFRpbGVGcmFtZXtcclxuICAgZHVyYXRpb246IG51bWJlcixcclxuICAgdGlsZWlkOiBudW1iZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgVGlsZWRUaWxlc2V0IHtcclxuICAgbmFtZTogc3RyaW5nO1xyXG5cclxuICAgZmlyc3RnaWQ6IG51bWJlcjtcclxuICAgaW1hZ2U6IHN0cmluZztcclxuICAgXHJcbiAgIGNvbHVtbnM6IG51bWJlcjtcclxuICAgdGlsZWNvdW50OiBudW1iZXI7XHJcblxyXG4gICB0aWxld2lkdGg6IG51bWJlcjtcclxuICAgdGlsZWhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgdGlsZXM6IFRpbGVkQW5pbWF0ZWRUaWxlc1tdfHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFNwcml0ZUZyb21UaWxlc2V0KHRpbGVzZXQ6IFRpbGVkVGlsZXNldCwgaW5kZXg6IG51bWJlciwgc2hlZXQ6IFNwcml0ZVNoZWV0KXtcclxuICAgbGV0IHggPSBpbmRleCAlIHRpbGVzZXQuY29sdW1ucztcclxuICAgbGV0IHkgPSBNYXRoLmZsb29yKGluZGV4IC8gdGlsZXNldC5jb2x1bW5zKTtcclxuXHJcbiAgIHJldHVybiBzaGVldC5nZXRTcHJpdGUoXHJcbiAgICAgIHggKiB0aWxlc2V0LnRpbGV3aWR0aCwgXHJcbiAgICAgIHkgKiB0aWxlc2V0LnRpbGVoZWlnaHQsIFxyXG4gICAgICB0aWxlc2V0LnRpbGV3aWR0aCwgXHJcbiAgICAgIHRpbGVzZXQudGlsZWhlaWdodCk7XHJcbn0iLCJleHBvcnQgY2xhc3MgQ3VydmV7XHJcbiAgIHB1YmxpYyBzdGF0aWMgbGVycChhOiBudW1iZXIsIGI6IG51bWJlciwgZjogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIGEgKyAoYiAtIGEpICogZjtcclxuICAgfVxyXG4gICBzdGF0aWMgbGluZWFyKGE6IG51bWJlciwgYjogbnVtYmVyLCBmOiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gQ3VydmUubGVycChhLGIsZik7XHJcbiAgIH1cclxufSIsImNsYXNzIExpc3R7XHJcbiAgIGhhczxUPihsaXN0OiBUW10sIGZ1bmM6ICgodmFsdWU6IFQpID0+IGJvb2xlYW4pKXtcclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICBpZihmdW5jKGxpc3RbaV0pKSByZXR1cm4gdHJ1ZTtcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IExpc3QoKTsiLCJleHBvcnQgZnVuY3Rpb24gbm93KCl7XHJcbiAgIGlmKHdpbmRvdy5wZXJmb3JtYW5jZSl7XHJcbiAgICAgIHJldHVybiB3aW5kb3cucGVyZm9ybWFuY2Uubm93KCkgLyAxMDAwO1xyXG4gICB9XHJcbiAgIHJldHVybiBEYXRlLm5vdygpIC8gMTAwMDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdCh0aW1lSW5TZWNvbmRzOiBudW1iZXIpe1xyXG4gICBsZXQgc2Vjb25kcyA9IE1hdGguZmxvb3IodGltZUluU2Vjb25kcyk7XHJcbiAgIGxldCBtaWxsaXMgPSBNYXRoLmZsb29yKCh0aW1lSW5TZWNvbmRzICUgMSkgKiAxMDAwKTtcclxuXHJcbiAgIHJldHVybiAoXCJcIiArIHNlY29uZHMpLnBhZFN0YXJ0KDIsICcwJykgKyBcIjpcIiArIChcIlwiICsgbWlsbGlzKS5wYWRTdGFydCgzLCAnMCcpO1xyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==