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
        this.sprites = [];
        this.frameRate = 12;
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
var Vector2_1 = __webpack_require__(/*! math/Vector2 */ "./src/ts/math/Vector2.ts");
var Camera = /** @class */ (function () {
    function Camera() {
        this.center = new Vector2_1.Vector2(640 / 2, 360 / 2);
        // TODO this shouldn't be defined like this, because this depends on the screen aspect ratio...
        this.width = 640;
        this.height = 360;
    }
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
var ColliderGameObject_1 = __webpack_require__(/*! island/GameObjects/ColliderGameObject */ "./src/ts/island/GameObjects/ColliderGameObject.ts");
var LevelManager_1 = __webpack_require__(/*! island/GameObjects/LevelManager */ "./src/ts/island/GameObjects/LevelManager.ts");
var PlayerFinishGameObject_1 = __webpack_require__(/*! island/GameObjects/PlayerFinishGameObject */ "./src/ts/island/GameObjects/PlayerFinishGameObject.ts");
var PlayerSpawnGameObject_1 = __webpack_require__(/*! island/GameObjects/PlayerSpawnGameObject */ "./src/ts/island/GameObjects/PlayerSpawnGameObject.ts");
var SpikesGameObject_1 = __webpack_require__(/*! island/GameObjects/SpikesGameObject */ "./src/ts/island/GameObjects/SpikesGameObject.ts");
var AABB_1 = __webpack_require__(/*! math/AABB */ "./src/ts/math/AABB.ts");
var Scene_1 = __webpack_require__(/*! scene/Scene */ "./src/ts/scene/Scene.ts");
var TileMap_1 = __webpack_require__(/*! tilemap/TileMap */ "./src/ts/tilemap/TileMap.ts");
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
                return [4 /*yield*/, TileMap_1.TileMap.fromTiledMapDownload("assets/levels/level0.json", function (obj) {
                        if (obj.type === "Collider") {
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
                        if (obj.type === "Spikes") {
                            var spikes = new SpikesGameObject_1.SpikesGameObject(AABB_1.AABB.Create(obj.x, obj.y, obj.width, obj.height));
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
            this.accelerate(Math.sign(this.input.direction), this.moveSpeed * Math.abs(this.input.direction), this.groundAcceleration * delta);
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
    function SpikesGameObject(aabb) {
        var _this = _super.call(this) || this;
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
    TilemapLayer.prototype.setTile = function (x, y, sprite) {
        this.tiles[x + y * this.width] = sprite;
    };
    TilemapLayer.prototype.setTileFromIndex = function (index, sprite) {
        this.tiles[index] = sprite;
    };
    TilemapLayer.prototype.draw = function (graphics, tileWidth, tileHeight) {
        for (var x = 0; x < this.width; x++) {
            for (var y = 0; y < this.height; y++) {
                var tile = this.getTile(x, y);
                if (tile === undefined)
                    continue;
                graphics.drawSpriteSimple(tile, x * tileWidth, y * tileHeight);
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
    TileMap.fromTiledMap = function (map, loader) {
        var tilemap = new TileMap(map.width, map.height, map.tilewidth, map.tileheight);
        tilemap.backgroundColor = map.backgroundcolor;
        // TILESETS
        var tilesets = [];
        var tiles = {};
        map.tilesets.forEach(function (set) {
            tilesets.push({
                set: set,
                sheet: Sprite_1.SpriteSheet.fromHTML(set.name)
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
                                var ii = tileIndex - tileset.set.firstgid;
                                var x = ii % tileset.set.columns;
                                var y = Math.floor(ii / tileset.set.columns);
                                tile = tileset.sheet.getSprite(x * tileset.set.tilewidth, y * tileset.set.tileheight, tileset.set.tilewidth, tileset.set.tileheight);
                            }
                        }
                        tiles[tileIndex] = tile;
                    }
                    tilemapLayer.setTileFromIndex(i, tile);
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
exports.TiledTileLayerType = exports.TiledObjectLayerType = void 0;
exports.TiledObjectLayerType = "objectgroup";
exports.TiledTileLayerType = "tilelayer";


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Njc3MvYXBwLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9tYWluLmpzIiwid2VicGFjazovLy8uL3NyYy9zY3NzL2FwcC5zY3NzPzUxYzUiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2VuZ2luZS9HYW1lLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9lbmdpbmUvSW5wdXQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2VuZ2luZS9QaHlzaWNzLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9ncmFwaGljcy9BbmltYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2dyYXBoaWNzL0NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvZ3JhcGhpY3MvR3JhcGhpY3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2dyYXBoaWNzL1Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2lzbGFuZC9Db21wb25lbnRzL0hlYWx0aENvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvaXNsYW5kL0NvbXBvbmVudHMvUGxheWVySW5wdXRDb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9Db2xsaWRlckdhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9MZXZlbE1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL2lzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJGaW5pc2hHYW1lT2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy90cy9pc2xhbmQvR2FtZU9iamVjdHMvUGxheWVyR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1BsYXllclNwYXduR2FtZU9iamVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvaXNsYW5kL0dhbWVPYmplY3RzL1NwaWtlc0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL21hdGgvQUFCQi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvbWF0aC9WZWN0b3IyLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9zY2VuZS9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NjZW5lL0dhbWVPYmplY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NjZW5lL1NjZW5lLnRzIiwid2VicGFjazovLy8uL3NyYy90cy9zY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvdHMvc2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3NpZ25hbHMvU2lnbmFsLnRzIiwid2VicGFjazovLy8uL3NyYy90cy90aWxlbWFwL1RpbGVNYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3RpbGVtYXAvVGlsZWRNYXAudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvQ3VydmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RzL3V0aWwvVGltZS50cyJdLCJuYW1lcyI6WyJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtR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QUMsS0FBSyxDQUFDLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDO0lBRXBELE9BQU8sQ0FBQyxFQUFFLEdBQUcsT0FBTyxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztBQUNqRixDQUFDO0FBTEQsd0JBS0MiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuaHRtbCwgYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwOyB9XFxuXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogJ1phbmJhclNxdWFyZSc7XFxuICBzcmM6IHVybChcXFwiL2Fzc2V0cy9mb250cy9aYW5iYXJTcXVhcmUudHRmXFxcIik7IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiWmFuYmFyU3F1YXJlXFxcIjtcXG4gIGZvbnQtZmFtaWx5OiAnT3h5Z2VuJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTRweDsgfVxcblxcbmJvZHkge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB3aWR0aDogMTAwdnc7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuXFxuI2NhbnZhcyB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAtMTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGltYWdlLXJlbmRlcmluZzogcGl4ZWxhdGVkOyB9XFxuXFxuLnJlc291cmNlIHtcXG4gIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZ2FtZS1vdmVybGF5IHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTsgfVxcbiAgLmdhbWUtb3ZlcmxheSAuYmFyLWJvdHRvbSB7XFxuICAgIGJvdHRvbTogMDtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpOyB9XFxuICAuZ2FtZS1vdmVybGF5IC5iYXItdG9wIHtcXG4gICAgdG9wOiAwO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpOyB9XFxuICAuZ2FtZS1vdmVybGF5IC5iYXItYm90dG9tLCAuZ2FtZS1vdmVybGF5IC5iYXItdG9wIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBsZWZ0OiAwO1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTIwcHg7XFxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0O1xcbiAgICBmb250LXNpemU6IDJlbTsgfVxcbiAgLmdhbWUtb3ZlcmxheS5nYW1lLW92ZXIgLmJhci1ib3R0b20sIC5nYW1lLW92ZXJsYXkuZ2FtZS1vdmVyIC5iYXItdG9wIHtcXG4gICAgdHJhbnNmb3JtOiBub25lOyB9XFxuICAuZ2FtZS1vdmVybGF5Om5vdCguY29tcGxldGVkKSAuY29tcGxldGUtYmFubmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmdhbWUtb3ZlcmxheS5jb21wbGV0ZWQgLmZhaWwtYmFubmVyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcbiAgLmdhbWUtb3ZlcmxheSAuYmVzdC10aW1lIHtcXG4gICAgY29sb3I6ICM5OTk7IH1cXG4gIC5nYW1lLW92ZXJsYXkgLmRlYnVnLWFscGhhLW1lc3NhZ2Uge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIGNvbG9yOiAjOTk5O1xcbiAgICByaWdodDogMTZweDtcXG4gICAgYm90dG9tOiAxNnB4O1xcbiAgICB6LWluZGV4OiAxMDAwOyB9XFxuXFxuLm1vZGFsIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgei1pbmRleDogMTAwMDA7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgdHJhbnNpdGlvbjogdmlzaWJpbGl0eTtcXG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XFxuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH1cXG4gIC5tb2RhbCAuYmFja2dyb3VuZCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAwO1xcbiAgICBsZWZ0OiAwO1xcbiAgICByaWdodDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBvcGFjaXR5OiAwLjc7XFxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xcbiAgICB6LWluZGV4OiAtMTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eTtcXG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMC4ycztcXG4gICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tb3V0OyB9XFxuICAubW9kYWwgLmNvbnRlbnQge1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSwgdHJhbnNmb3JtO1xcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xcbiAgICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1pbi1vdXQ7IH1cXG4gICAgLm1vZGFsIC5jb250ZW50IC5jbG9zZSB7XFxuICAgICAgcGFkZGluZzogNXB4IDIwcHg7XFxuICAgICAgYmFja2dyb3VuZDogI2UyN2QxZTtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAubW9kYWwuY2xvc2VkIHtcXG4gICAgdmlzaWJpbGl0eTogaGlkZGVuOyB9XFxuICAgIC5tb2RhbC5jbG9zZWQgLmJhY2tncm91bmQge1xcbiAgICAgIG9wYWNpdHk6IDA7IH1cXG4gICAgLm1vZGFsLmNsb3NlZCAuY29udGVudCB7XFxuICAgICAgb3BhY2l0eTogMDtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNDBweCk7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBMb2FkIHRoZSBqYXZhc2NyaXB0IG1haW5cclxuaW1wb3J0IFwiLi9qcy9tYWluXCI7XHJcbmltcG9ydCBcIi4vdHMvXCI7XHJcblxyXG4vLyBMb2FkIHRoZSBTQVNTIG1haW5cclxuaW1wb3J0IFwiLi9zY3NzL2FwcC5zY3NzXCI7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgKCk9PntcclxuICAgY29uc29sZS5sb2coXCJXZWJwYWNrIHRlbXBsYXRlIGxvYWRlZC5cIik7XHJcbn0pOyIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vYXBwLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsImltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcInNjZW5lL1NjZW5lXCI7XHJcbmltcG9ydCB7IG5vdyB9IGZyb20gXCJ1dGlsL1RpbWVcIjtcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tIFwiLi9JbnB1dFwiO1xyXG5pbXBvcnQgeyBQaHlzaWNzIH0gZnJvbSBcIi4vUGh5c2ljc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWV7ICAgXHJcbiAgIGN1cnJlbnRUaW1lOiBudW1iZXIgPSAwO1xyXG4gICBcclxuICAgZml4ZWRVcGRhdGVUaW1lOiBudW1iZXIgPSAxIC8gNjA7XHJcbiAgIGludGVyVXBkYXRlVGltZTogbnVtYmVyID0gMDtcclxuXHJcbiAgIHByaXZhdGUgcnVubmluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBwcml2YXRlIGFuaW1hdGlvbkZyYW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgc2NlbmU/OiBTY2VuZTtcclxuICAgZ3JhcGhpY3M6IEdyYXBoaWNzO1xyXG4gICBpbnB1dDogSW5wdXQ7XHJcbiAgIHBoeXNpY3M6IFBoeXNpY3M7XHJcbiAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KXtcclxuICAgICAgdGhpcy5ncmFwaGljcyA9IG5ldyBHcmFwaGljcyhjYW52YXMpO1xyXG4gICAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0KGNhbnZhcyk7XHJcbiAgICAgIHRoaXMucGh5c2ljcyA9IG5ldyBQaHlzaWNzKCk7XHJcbiAgICAgIHRoaXMuY2FudmFzID0gY2FudmFzO1xyXG5cclxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgKCkgPT4gdGhpcy51cGRhdGVTaXplKCkpO1xyXG4gICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgfVxyXG5cclxuICAgcnVuKCl7XHJcbiAgICAgIGlmKHRoaXMucnVubmluZykgcmV0dXJuO1xyXG4gICAgICB0aGlzLnJ1bm5pbmcgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5zY2VuZT8uaW5pdCh0aGlzKTtcclxuXHJcbiAgICAgIHRoaXMuX3JlcXVlc3RBbmltYXRpb25GcmFtZSgpO1xyXG4gICB9XHJcblxyXG4gICBzdG9wKCl7XHJcbiAgICAgIHRoaXMuX2NhbmNlbEFuaW1hdGlvbkZyYW1lKCk7XHJcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoKXtcclxuICAgICAgdGhpcy5fcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCk7XHJcblxyXG4gICAgICBsZXQgbiA9IG5vdygpO1xyXG4gICAgICBsZXQgZGVsdGEgPSBuIC0gdGhpcy5jdXJyZW50VGltZTtcclxuICAgICAgdGhpcy5jdXJyZW50VGltZSA9IG47XHJcblxyXG4gICAgICBpZihkZWx0YSA+IDAuMSl7IGRlbHRhID0gMC4xOyB9XHJcblxyXG4gICAgICB0aGlzLmlucHV0LnBvbGwoKTtcclxuXHJcbiAgICAgIHRoaXMuaW50ZXJVcGRhdGVUaW1lICs9IGRlbHRhO1xyXG4gICAgICBcclxuICAgICAgLy8gVE9ETyBmaXggdGhlIGlzc3VlIHdoZXJlIHdlIGFyZSBsYWdnaW5nIGJlaGluZCFcclxuICAgICAgLy8gaWYgdGhlcmUgYXJlIHRvbyBtYW55IHVwZGF0ZXMgYXQgb25jZSBhbmQgd2UgY2FuJ3Qga2VlcCB1cCwgd2UgbmVlZCB0byBkdW1wIHNvbWUgZnJhbWVzXHJcbiAgICAgIC8vIGFuZCBzZW5kIGEgd2FybmluZy5cclxuICAgICAgd2hpbGUodGhpcy5pbnRlclVwZGF0ZVRpbWUgPiB0aGlzLmZpeGVkVXBkYXRlVGltZSl7XHJcbiAgICAgICAgIHRoaXMuaW50ZXJVcGRhdGVUaW1lIC09IHRoaXMuZml4ZWRVcGRhdGVUaW1lO1xyXG4gICAgICAgICB0aGlzLnNjZW5lPy5maXhlZFVwZGF0ZSh0aGlzLmZpeGVkVXBkYXRlVGltZSk7XHJcbiAgICAgICAgIHRoaXMucGh5c2ljcy5maXhlZFVwZGF0ZSh0aGlzLmZpeGVkVXBkYXRlVGltZSk7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5zY2VuZT8udXBkYXRlKGRlbHRhKTtcclxuICAgICAgdGhpcy5waHlzaWNzLnVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICB0aGlzLmdyYXBoaWNzLnJlc2V0KCk7XHJcbiAgICAgIHRoaXMuZ3JhcGhpY3MuY2xlYXJTY3JlZW4oKTtcclxuXHJcbiAgICAgIHRoaXMuc2NlbmU/LmRyYXcodGhpcy5ncmFwaGljcyk7XHJcbiAgICAgIHRoaXMucGh5c2ljcy5kcmF3RGVidWcodGhpcy5ncmFwaGljcyk7XHJcblxyXG4gICAgICB0aGlzLmlucHV0LmZsdXNoKCk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZVNpemUoKXtcclxuICAgICAgdGhpcy5ncmFwaGljcy51cGRhdGVTaXplKCk7XHJcbiAgICAgIHRoaXMuc2NlbmU/LnVwZGF0ZVNpemUoKTtcclxuICAgfVxyXG5cclxuICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lKCl7XHJcbiAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuYW5pbWF0aW9uRnJhbWUpO1xyXG4gICB9XHJcblxyXG4gICBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCl7XHJcbiAgICAgIHRoaXMuYW5pbWF0aW9uRnJhbWUgPSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcbiAgIH1cclxufSIsIi8vIENvbnRyb2xsZXIgbWFwIVxyXG5leHBvcnQgY2xhc3MgR2FtZXBhZElucHV0e1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEF4aXNMZWZ0WCA9IDA7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQXhpc0xlZnRZID0gMTtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBeGlzUmlnaHRYID0gMjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBBeGlzUmlnaHRZID0gMztcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uQSA9IDA7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uQiA9IDE7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uWCA9IDI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uWSA9IDM7XHJcbiAgIFxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkRwYWRVcCA9IDEyO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkRwYWREb3duID0gMTM7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uRHBhZExlZnQgPSAxNDtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25EcGFkUmlnaHQgPSAxNTtcclxuXHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uTGVmdEJ1bXBlciA9IDQ7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgQnV0dG9uUmlnaHRCdW1wZXIgPSA1O1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEJ1dHRvbkxlZnRUcmlnZ2VyID0gNjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25SaWdodFRyaWdnZXIgPSA3O1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25NZW51ID0gODtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBCdXR0b25TdGFydCA9IDk7XHJcblxyXG4gICBwcmV2aW91c0J1dHRvblN0YXRlOiBib29sZWFuW10gPSBbXTtcclxuICAgYnV0dG9uU3RhdGU6IGJvb2xlYW5bXSA9IFtdO1xyXG4gICBcclxuICAgYXhpc1N0YXRlOiBudW1iZXJbXSA9IFtdO1xyXG5cclxuICAgaW5kZXg6IG51bWJlcjtcclxuXHJcbiAgIGRlYWRab25lOiBudW1iZXIgPSAwLjI7XHJcbiAgIGZ1bGxab25lOiBudW1iZXIgPSAwLjQ7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihpbmRleDogbnVtYmVyKXtcclxuICAgICAgdGhpcy5pbmRleCA9IGluZGV4O1xyXG5cclxuICAgICAgbGV0IGdhbWVwYWQgPSB0aGlzLmdldE5hdmlnYXRvckdhbWVwYWQoKSE7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZXBhZC5idXR0b25zLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgdGhpcy5wcmV2aW91c0J1dHRvblN0YXRlLnB1c2goZmFsc2UpO1xyXG4gICAgICAgICB0aGlzLmJ1dHRvblN0YXRlLnB1c2goZmFsc2UpO1xyXG4gICAgICB9XHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBnYW1lcGFkLmF4ZXMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICB0aGlzLmF4aXNTdGF0ZS5wdXNoKDApO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHBvbGwoKXtcclxuICAgICAgLy8gU3dhcCB0aGUgb2xkIGFuZCB0aGUgbmV3IG9uZSwgY29weSB0byB0aGUgbmV3XHJcbiAgICAgIGxldCB0ZW1wID0gdGhpcy5wcmV2aW91c0J1dHRvblN0YXRlO1xyXG4gICAgICB0aGlzLnByZXZpb3VzQnV0dG9uU3RhdGUgPSB0aGlzLmJ1dHRvblN0YXRlO1xyXG4gICAgICB0aGlzLmJ1dHRvblN0YXRlID0gdGVtcDtcclxuXHJcbiAgICAgIGxldCBnYW1lcGFkID0gdGhpcy5nZXROYXZpZ2F0b3JHYW1lcGFkKCkhO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGdhbWVwYWQuYnV0dG9ucy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIHRoaXMuYnV0dG9uU3RhdGVbaV0gPSBnYW1lcGFkLmJ1dHRvbnNbaV0ucHJlc3NlZDtcclxuICAgICAgfVxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgZ2FtZXBhZC5heGVzLmxlbmd0aDsgaSsrKXtcclxuICAgICAgICAgdGhpcy5heGlzU3RhdGVbaV0gPSBnYW1lcGFkLmF4ZXNbaV07XHJcblxyXG4gICAgICAgICBpZihNYXRoLmFicyh0aGlzLmF4aXNTdGF0ZVtpXSkgPCB0aGlzLmRlYWRab25lKSB0aGlzLmF4aXNTdGF0ZVtpXSA9IDA7IFxyXG4gICAgICAgICBpZihNYXRoLmFicyh0aGlzLmF4aXNTdGF0ZVtpXSkgPiAxIC0gdGhpcy5mdWxsWm9uZSkgdGhpcy5heGlzU3RhdGVbaV0gPSBNYXRoLnNpZ24odGhpcy5heGlzU3RhdGVbaV0pOyBcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBpc0J1dHRvblByZXNzZWQoYnV0dG9uSW5kZXg6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvblN0YXRlW2J1dHRvbkluZGV4XSAmJiAhdGhpcy5wcmV2aW91c0J1dHRvblN0YXRlW2J1dHRvbkluZGV4XTtcclxuICAgfVxyXG4gICBpc0J1dHRvbkRvd24oYnV0dG9uSW5kZXg6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB0aGlzLmJ1dHRvblN0YXRlW2J1dHRvbkluZGV4XTtcclxuICAgfVxyXG4gICBpc0J1dHRvblJlbGVhc2VkKGJ1dHRvbkluZGV4OiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gIXRoaXMuYnV0dG9uU3RhdGVbYnV0dG9uSW5kZXhdICYmIHRoaXMucHJldmlvdXNCdXR0b25TdGF0ZVtidXR0b25JbmRleF07XHJcbiAgIH1cclxuXHJcbiAgIGdldCBsZWZ0QXhpc1goKSB7IHJldHVybiB0aGlzLmF4aXNTdGF0ZVtHYW1lcGFkSW5wdXQuQXhpc0xlZnRYXTt9XHJcbiAgIGdldCBsZWZ0QXhpc1koKSB7IHJldHVybiB0aGlzLmF4aXNTdGF0ZVtHYW1lcGFkSW5wdXQuQXhpc0xlZnRZXTt9XHJcbiAgIGdldCByaWdodEF4aXNYKCkgeyByZXR1cm4gdGhpcy5heGlzU3RhdGVbR2FtZXBhZElucHV0LkF4aXNSaWdodFhdO31cclxuICAgZ2V0IHJpZ2h0QXhpc1koKSB7IHJldHVybiB0aGlzLmF4aXNTdGF0ZVtHYW1lcGFkSW5wdXQuQXhpc1JpZ2h0WV07fVxyXG5cclxuICAgZ2V0TmF2aWdhdG9yR2FtZXBhZCgpe1xyXG4gICAgICBjb25zdCBwYWRzID0gbmF2aWdhdG9yLmdldEdhbWVwYWRzKCk7XHJcblxyXG4gICAgICBmb3IobGV0IGkgPSAwOyBpIDwgcGFkcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIGxldCBwYWQgPSBwYWRzW2ldO1xyXG4gICAgICAgICBpZihwYWQgPT09IG51bGwpIGNvbnRpbnVlO1xyXG4gICAgICAgICBpZihwYWQuaW5kZXggPT09IHRoaXMuaW5kZXgpIHJldHVybiBwYWQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbiAgIH1cclxufVxyXG5cclxudHlwZSBLZXkgPSBzdHJpbmc7XHJcblxyXG5leHBvcnQgY2xhc3MgS2V5Ym9hcmR7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5RW50ZXIgOiBLZXkgPSBcIkVudGVyXCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5VGFiIDogS2V5ID0gXCJUYWJcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlTcGFjZSA6IEtleSA9IFwiIFwiO1xyXG5cclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlDIDogS2V5ID0gXCJjXCI7XHJcbiAgIFxyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUFycm93VXAgOiBLZXkgPSBcIkFycm93VXBcIjtcclxuICAgcHVibGljIHN0YXRpYyByZWFkb25seSBLZXlBcnJvd0Rvd24gOiBLZXkgPSBcIkFycm93RG93blwiO1xyXG4gICBwdWJsaWMgc3RhdGljIHJlYWRvbmx5IEtleUFycm93TGVmdCA6IEtleSA9IFwiQXJyb3dMZWZ0XCI7XHJcbiAgIHB1YmxpYyBzdGF0aWMgcmVhZG9ubHkgS2V5QXJyb3dSaWdodCA6IEtleSA9IFwiQXJyb3dSaWdodFwiO1xyXG5cclxuICAgZG93bktleXM6IFNldDxLZXk+O1xyXG4gICBwcmVzc2VkS2V5czogU2V0PEtleT47XHJcbiAgIHJlbGVhc2VkS2V5czogU2V0PEtleT47XHJcblxyXG4gICByb290PzogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcihyb290PzogSFRNTEVsZW1lbnQpe1xyXG4gICAgICB0aGlzLmRvd25LZXlzID0gbmV3IFNldDxLZXk+KCk7XHJcbiAgICAgIHRoaXMucHJlc3NlZEtleXMgPSBuZXcgU2V0PEtleT4oKTtcclxuICAgICAgdGhpcy5yZWxlYXNlZEtleXMgPSBuZXcgU2V0PEtleT4oKTtcclxuXHJcbiAgICAgIHRoaXMucm9vdCA9IHJvb3Q7XHJcbiAgICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LmJvZHk7IC8vIEZ1Y2tcclxuICAgICAgdGhpcy5yb290Py5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBldmVudCA9PiB7XHJcbiAgICAgICAgIGlmKGV2ZW50LnJlcGVhdCkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgdGhpcy5wcmVzc2VkS2V5cy5hZGQoZXZlbnQua2V5KTtcclxuICAgICAgICAgdGhpcy5kb3duS2V5cy5hZGQoZXZlbnQua2V5KTtcclxuICAgICAgfSk7XHJcbiAgICAgIHRoaXMucm9vdD8uYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGV2ZW50ID0+e1xyXG4gICAgICAgICBpZihldmVudC5yZXBlYXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgIHRoaXMucmVsZWFzZWRLZXlzLmFkZChldmVudC5rZXkpO1xyXG4gICAgICAgICB0aGlzLmRvd25LZXlzLmRlbGV0ZShldmVudC5rZXkpO1xyXG4gICAgICB9KTtcclxuICAgfVxyXG5cclxuICAgZmx1c2goKXtcclxuICAgICAgdGhpcy5wcmVzc2VkS2V5cy5jbGVhcigpO1xyXG4gICAgICB0aGlzLnJlbGVhc2VkS2V5cy5jbGVhcigpO1xyXG4gICB9XHJcblxyXG4gICBpc0tleURvd24oa2V5OiBLZXkpe1xyXG4gICAgICByZXR1cm4gdGhpcy5kb3duS2V5cy5oYXMoa2V5KTtcclxuICAgfVxyXG4gICBpc0tleVByZXNzZWQoa2V5OiBLZXkpe1xyXG4gICAgICByZXR1cm4gdGhpcy5wcmVzc2VkS2V5cy5oYXMoa2V5KTtcclxuICAgfVxyXG4gICBpc0tleVJlbGVhc2VkKGtleTogS2V5KXtcclxuICAgICAgcmV0dXJuIHRoaXMucmVsZWFzZWRLZXlzLmhhcyhrZXkpO1xyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBJbnB1dCB7XHJcbiAgIGdhbWVwYWRzOiBHYW1lcGFkSW5wdXRbXTtcclxuICAga2V5Ym9hcmQ6IEtleWJvYXJkO1xyXG5cclxuICAgcm9vdD86IEhUTUxFbGVtZW50O1xyXG5cclxuICAgY29uc3RydWN0b3Iocm9vdD86IEhUTUxFbGVtZW50KXtcclxuICAgICAgdGhpcy5nYW1lcGFkcyA9IFtdO1xyXG4gICAgICB0aGlzLmtleWJvYXJkID0gbmV3IEtleWJvYXJkKHJvb3QpO1xyXG4gICAgICB0aGlzLnJvb3QgPSByb290O1xyXG5cclxuICAgICAgLy8gV2VpcmQgY29uc3RydWN0aW9uIGJ1dCB0eXBlc2NyaXB0IGhhdGVzIHByb2dyZXNzIFxyXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImdhbWVwYWRjb25uZWN0ZWRcIiwgZXYgPT4ge1xyXG4gICAgICAgICBsZXQgZXZlbnQgPSBldiBhcyBHYW1lcGFkRXZlbnQ7XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWVwYWQgY29ubmVjdGVkLlwiKTtcclxuXHJcbiAgICAgICAgIHRoaXMuZ2FtZXBhZHMucHVzaChuZXcgR2FtZXBhZElucHV0KGV2ZW50LmdhbWVwYWQuaW5kZXgpKTtcclxuICAgICAgIH0pO1xyXG4gICAgICAgXHJcbiAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImdhbWVwYWRkaXNjb25uZWN0ZWRcIiwgZXYgPT4ge1xyXG4gICAgICAgICBsZXQgZXZlbnQgPSBldiBhcyBHYW1lcGFkRXZlbnQ7XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWVwYWQgZGlzY29ubmVjdGVkLlwiKTtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGxldCBpbmRleCA9IC0xO1xyXG5cclxuICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IHRoaXMuZ2FtZXBhZHMubGVuZ3RoOyBpKyspe1xyXG4gICAgICAgICAgICBpZih0aGlzLmdhbWVwYWRzW2ldLmluZGV4ID09PSBldmVudC5nYW1lcGFkLmluZGV4KXtcclxuICAgICAgICAgICAgICAgaW5kZXggPSBpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgaWYoaW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICAgICBjb25zb2xlLmxvZyhcIkdhbWVwYWQgZm91bmQuXCIpO1xyXG5cclxuICAgICAgICAgdGhpcy5nYW1lcGFkcy5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgfSk7XHJcbiAgIH1cclxuXHJcbiAgIHBvbGwoKXtcclxuICAgICAgdGhpcy5nYW1lcGFkcy5mb3JFYWNoKHBhZCA9PiBwYWQucG9sbCgpKTtcclxuICAgfVxyXG4gICBmbHVzaCgpe1xyXG4gICAgICB0aGlzLmtleWJvYXJkLmZsdXNoKCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBDdXJ2ZSB9IGZyb20gXCJ1dGlsL0N1cnZlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgUGh5c2ljc3tcclxuICAgYm9kaWVzOiBSaWdpZGJvZHlbXTtcclxuXHJcbiAgIGludGVycG9sYXRlOiBib29sZWFuID0gdHJ1ZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMuYm9kaWVzID0gW107XHJcbiAgIH1cclxuXHJcbiAgIGFkZEJvZHkoYm9keTogUmlnaWRib2R5KXtcclxuICAgICAgdGhpcy5ib2RpZXMucHVzaChib2R5KTtcclxuICAgfVxyXG4gICByZW1vdmVCb2R5KGJvZHk6IFJpZ2lkYm9keSl7XHJcbiAgICAgIGxldCBpbmRleCA9IHRoaXMuYm9kaWVzLmluZGV4T2YoYm9keSk7XHJcblxyXG4gICAgICBpZihpbmRleCA8IDApIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuYm9kaWVzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgIH1cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBpZih0aGlzLmludGVycG9sYXRlKXtcclxuICAgICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgICAgLy8gVE9ETyBtb3Rpb24gcHJlZGljdGlvbiBhbmQgc3R1ZmZcclxuICAgICAgICAgICAgbGV0IGYgPSBib2R5LmdhbWUuaW50ZXJVcGRhdGVUaW1lIC8gYm9keS5nYW1lLmZpeGVkVXBkYXRlVGltZTtcclxuICAgXHJcbiAgICAgICAgICAgIGJvZHkudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uLnggPSBDdXJ2ZS5sZXJwKGJvZHkucHJldmlvdXNQb3NpdGlvbi54LCBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi54LCBmKTtcclxuICAgICAgICAgICAgYm9keS50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24ueSA9IEN1cnZlLmxlcnAoYm9keS5wcmV2aW91c1Bvc2l0aW9uLnksIGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLnksIGYpO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICAgICBib2R5LnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi5zZXQoYm9keS50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgLy8gU2V0IHRoZSBwcmV2aW91cyBwb3NpdGlvbnNcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgYm9keS5wcmV2aW91c1Bvc2l0aW9uLnggPSBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi54O1xyXG4gICAgICAgICBib2R5LnByZXZpb3VzUG9zaXRpb24ueSA9IGJvZHkudHJhbnNmb3JtLnBvc2l0aW9uLnk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gTW92ZSBhbGwgdGhlIGJvZGllc1xyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi54ICs9IGJvZHkudmVsb2NpdHkueCAqIGRlbHRhO1xyXG4gICAgICAgICBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi55ICs9IGJvZHkudmVsb2NpdHkueSAqIGRlbHRhO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIFRPRE8gYnJvYWRwaGFzZSBuYXJyb3cgcGhhc2Ugc3R1ZmYgOilcclxuICAgICAgLy8gTWF5YmUgc3RhcnQgd2l0aCBzd2VlcCBhbmQgcHJ1bmVcclxuICAgICAgLy8gVW5zdHVjayBhbGwgdGhlIGJvZGllc1xyXG4gICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJvZHkgPT4ge1xyXG4gICAgICAgICBpZihib2R5LnNvbGlkKSByZXR1cm47XHJcblxyXG4gICAgICAgICBib2R5LmNvbGxpZGVkVG9wID0gZmFsc2U7XHJcbiAgICAgICAgIGJvZHkuY29sbGlkZWRCb3R0b20gPSBmYWxzZTtcclxuICAgICAgICAgYm9keS5jb2xsaWRlZExlZnQgPSBmYWxzZTtcclxuICAgICAgICAgYm9keS5jb2xsaWRlZFJpZ2h0ID0gZmFsc2U7XHJcblxyXG4gICAgICAgICB0aGlzLmJvZGllcy5mb3JFYWNoKGJveCA9PiB7XHJcbiAgICAgICAgICAgIGlmKCFib3guc29saWQpIHJldHVybjtcclxuICAgXHJcbiAgICAgICAgICAgIGxldCBiYm94ID0gYm9keS5ib3VuZGluZ0JveDtcclxuICAgICAgICAgICAgbGV0IG90aGVyYmJveCA9IGJveC5ib3VuZGluZ0JveDtcclxuXHJcbiAgICAgICAgICAgIGlmKCFiYm94Lm92ZXJsYXBzKG90aGVyYmJveCkpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGxldCBtaW5PdmVybGFwWCA9IGJib3gubWluT3ZlcmxhcFhXaXRoQmlhcyhvdGhlcmJib3gsIGJvZHkudmVsb2NpdHkueCk7XHJcbiAgICAgICAgICAgIGxldCBtaW5PdmVybGFwWSA9IGJib3gubWluT3ZlcmxhcFlXaXRoQmlhcyhvdGhlcmJib3gsIGJvZHkudmVsb2NpdHkueSk7XHJcblxyXG4gICAgICAgICAgICBpZihNYXRoLmFicyhtaW5PdmVybGFwWCkgPCBNYXRoLmFicyhtaW5PdmVybGFwWSkpe1xyXG4gICAgICAgICAgICAgICBib2R5LnRyYW5zZm9ybS5wb3NpdGlvbi54ICs9IG1pbk92ZXJsYXBYO1xyXG4gICAgICAgICAgICAgICBib2R5LmNvbGxpZGVkTGVmdCA9IGJvZHkudmVsb2NpdHkueCA8IDA7XHJcbiAgICAgICAgICAgICAgIGJvZHkuY29sbGlkZWRSaWdodCA9IGJvZHkudmVsb2NpdHkueCA+IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZXtcclxuICAgICAgICAgICAgICAgYm9keS50cmFuc2Zvcm0ucG9zaXRpb24ueSArPSBtaW5PdmVybGFwWTtcclxuICAgICAgICAgICAgICAgYm9keS5jb2xsaWRlZEJvdHRvbSA9IGJvZHkudmVsb2NpdHkueSA+IDA7XHJcbiAgICAgICAgICAgICAgIGJvZHkuY29sbGlkZWRUb3AgPSBib2R5LnZlbG9jaXR5LnkgPCAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICBpZihib2R5LmNvbGxpZGVkTGVmdCB8fCBib2R5LmNvbGxpZGVkUmlnaHQpe1xyXG4gICAgICAgICAgICBib2R5LnZlbG9jaXR5LnggPSAtYm9keS52ZWxvY2l0eS54ICogYm9keS5ib3VuY3luZXNzO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKGJvZHkuY29sbGlkZWRCb3R0b20gfHwgYm9keS5jb2xsaWRlZFRvcCl7XHJcbiAgICAgICAgICAgIGJvZHkudmVsb2NpdHkueSA9IC1ib2R5LnZlbG9jaXR5LnkgKiBib2R5LmJvdW5jeW5lc3M7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBBIGxpdHRsZSBtb3JlIG9wdGltaXplZCBidXQgc3RpbGwgcmVhbGx5IGZ1Y2tpbmcgc3R1cGlkIDopXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLmJvZGllcy5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgIGxldCBib2R5ID0gdGhpcy5ib2RpZXNbaV07XHJcblxyXG4gICAgICAgICBsZXQgYmJveCA9IGJvZHkuYm91bmRpbmdCb3g7XHJcblxyXG4gICAgICAgICBpZighYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucykgY29udGludWU7XHJcblxyXG4gICAgICAgICBmb3IobGV0IGogPSBpICsgMTsgaiA8IHRoaXMuYm9kaWVzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgbGV0IG90aGVyID0gdGhpcy5ib2RpZXNbal07XHJcblxyXG4gICAgICAgICAgICBpZighb3RoZXIudXNlRHluYW1pY0NvbGxpc2lvbnMpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgaWYoYmJveC5vdmVybGFwcyhvdGhlci5ib3VuZGluZ0JveCkpe1xyXG4gICAgICAgICAgICAgICBib2R5Lm9uQ29sbGlzaW9uLmVtaXQob3RoZXIpO1xyXG4gICAgICAgICAgICAgICBvdGhlci5vbkNvbGxpc2lvbi5lbWl0KGJvZHkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBkcmF3RGVidWcoZ3JhcGhpY3M6IEdyYXBoaWNzKXtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcihcInJnYmEoMjU1LDAsMCwgMC42KVwiKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgIGlmKCFib2R5LnNvbGlkKSByZXR1cm47XHJcbiAgICAgICAgIFxyXG4gICAgICAgICBncmFwaGljcy5kcmF3QUFCQihib2R5LmJvdW5kaW5nQm94LCB0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBcclxuICAgICAgZ3JhcGhpY3Muc2V0Q29sb3IoXCJyZ2JhKDAsMjU1LDAsIDAuNilcIik7XHJcbiAgICAgIHRoaXMuYm9kaWVzLmZvckVhY2goYm9keSA9PiB7XHJcbiAgICAgICAgIGlmKGJvZHkuc29saWQpIHJldHVybjtcclxuICAgICAgICAgbGV0IGNvbGxpZGVyID0gYm9keS5ib3VuZGluZ0JveDtcclxuICAgICAgICAgXHJcbiAgICAgICAgIGdyYXBoaWNzLmRyYXdBQUJCKGNvbGxpZGVyLCB0cnVlKTtcclxuICAgICAgfSk7XHJcbiAgICAgIFxyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcihcInJnYmEoMCwwLDI1NSwgMC42KVwiKTtcclxuICAgICAgdGhpcy5ib2RpZXMuZm9yRWFjaChib2R5ID0+IHtcclxuICAgICAgICAgbGV0IHRyYW5zZm9ybSA9IGJvZHkudHJhbnNmb3JtO1xyXG4gICAgICAgICBcclxuICAgICAgICAgZ3JhcGhpY3MuZHJhd1JlY3RhbmdsZShcclxuICAgICAgICAgICAgdHJhbnNmb3JtLnBvc2l0aW9uLnggLSAxLCB0cmFuc2Zvcm0ucG9zaXRpb24ueSAtIDEsXHJcbiAgICAgICAgICAgIDIsIDIsIHRydWUpO1xyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBTcHJpdGUgfSBmcm9tIFwiLi9TcHJpdGVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRpb257XHJcbiAgIHNwcml0ZXM6IFNwcml0ZVtdID0gW107XHJcbiAgIGZyYW1lUmF0ZTogbnVtYmVyID0gMTI7XHJcbiAgIFxyXG4gICBwcml2YXRlIF9pbmRleDogbnVtYmVyID0gMDtcclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgLy8gVE9ETyBjYXAgdGhlIF9pbmRleCB2YXJpYWJsZVxyXG4gICAgICB0aGlzLl9pbmRleCArPSBkZWx0YSAqIHRoaXMuZnJhbWVSYXRlO1xyXG4gICB9XHJcblxyXG4gICBhZGRGcmFtZShzcHJpdGU6IFNwcml0ZSl7XHJcbiAgICAgIHRoaXMuc3ByaXRlcy5wdXNoKHNwcml0ZSk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBjZW50ZXIoKXtcclxuICAgICAgdGhpcy5zcHJpdGVzLmZvckVhY2goc3ByaXRlID0+IHNwcml0ZS5jZW50ZXIoKSk7XHJcbiAgICAgIHJldHVybiB0aGlzO1xyXG4gICB9XHJcblxyXG4gICBnZXQgaW5kZXgoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuX2luZGV4ICUgdGhpcy5mcmFtZXM7XHJcbiAgIH1cclxuICAgZ2V0IGZyYW1lcygpe1xyXG4gICAgICByZXR1cm4gdGhpcy5zcHJpdGVzLmxlbmd0aDtcclxuICAgfVxyXG4gICBnZXQgZnJhbWUoKXtcclxuICAgICAgcmV0dXJuIHRoaXMuc3ByaXRlc1tNYXRoLmZsb29yKHRoaXMuaW5kZXgpXTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCJtYXRoL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1lcmF7XHJcbiAgIGNlbnRlcjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKDY0MCAvIDIsIDM2MCAvIDIpO1xyXG5cclxuICAgLy8gVE9ETyB0aGlzIHNob3VsZG4ndCBiZSBkZWZpbmVkIGxpa2UgdGhpcywgYmVjYXVzZSB0aGlzIGRlcGVuZHMgb24gdGhlIHNjcmVlbiBhc3BlY3QgcmF0aW8uLi5cclxuICAgd2lkdGg6IG51bWJlciA9IDY0MDtcclxuICAgaGVpZ2h0OiBudW1iZXIgPSAzNjA7XHJcbn0iLCJpbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBDYW1lcmEgfSBmcm9tIFwiLi9DYW1lcmFcIjtcclxuaW1wb3J0IHsgU3ByaXRlIH0gZnJvbSBcIi4vU3ByaXRlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR3JhcGhpY3N7XHJcbiAgIGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbiAgIGNvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuICAgY29sb3I6IHN0cmluZyA9IFwid2hpdGVcIjtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQpe1xyXG4gICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgdGhpcy5jb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKSE7XHJcblxyXG4gICAgICB0aGlzLnVwZGF0ZVNpemUoKTtcclxuICAgfVxyXG5cclxuICAgcmVzZXQoKXtcclxuICAgICAgdGhpcy5jb250ZXh0LnJlc2V0VHJhbnNmb3JtKCk7XHJcbiAgIH1cclxuXHJcbiAgIGNsZWFyU2NyZWVuKCl7XHJcbiAgICAgIHRoaXMuY2xlYXIoMCwgMCwgdGhpcy5jYW52YXMud2lkdGgsIHRoaXMuY2FudmFzLmhlaWdodCk7XHJcbiAgIH1cclxuXHJcbiAgIGNsZWFyKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuY29udGV4dC5jbGVhclJlY3QoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcbiAgIH1cclxuXHJcbiAgIGRyYXdTcHJpdGUoc3ByaXRlOiBTcHJpdGUsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZVg6IG51bWJlciA9IDEsIHNjYWxlWTogbnVtYmVyID0gMSwgcm90YXRpb246IG51bWJlciA9IDApe1xyXG4gICAgICB0aGlzLmNvbnRleHQuc2F2ZSgpO1xyXG5cclxuICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSh4LCB5KTtcclxuICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKHNjYWxlWCwgc2NhbGVZKTtcclxuICAgICAgdGhpcy5jb250ZXh0LnJvdGF0ZShyb3RhdGlvbik7XHJcblxyXG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHNwcml0ZS5pbWFnZSwgXHJcbiAgICAgICAgIHNwcml0ZS5zb3VyY2VYLCBzcHJpdGUuc291cmNlWSwgc3ByaXRlLnNvdXJjZVdpZHRoLCBzcHJpdGUuc291cmNlSGVpZ2h0LFxyXG4gICAgICAgICAtIHNwcml0ZS5vZmZzZXRYLCAtIHNwcml0ZS5vZmZzZXRZLCBzcHJpdGUud2lkdGgsIHNwcml0ZS5oZWlnaHQpO1xyXG5cclxuICAgICAgdGhpcy5jb250ZXh0LnJlc3RvcmUoKTtcclxuICAgfVxyXG5cclxuICAgZHJhd1Nwcml0ZVNpbXBsZShzcHJpdGU6IFNwcml0ZSwgeDogbnVtYmVyLCB5OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmNvbnRleHQuZHJhd0ltYWdlKHNwcml0ZS5pbWFnZSwgXHJcbiAgICAgICAgIHNwcml0ZS5zb3VyY2VYLCBzcHJpdGUuc291cmNlWSwgc3ByaXRlLnNvdXJjZVdpZHRoLCBzcHJpdGUuc291cmNlSGVpZ2h0LFxyXG4gICAgICAgICB4IC0gc3ByaXRlLm9mZnNldFgsIHkgLSBzcHJpdGUub2Zmc2V0WSwgc3ByaXRlLndpZHRoLCBzcHJpdGUuaGVpZ2h0KTtcclxuICAgfVxyXG5cclxuICAgZHJhd1JlY3RhbmdsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGZpbGw6IGJvb2xlYW4pe1xyXG4gICAgICBpZihmaWxsKXtcclxuICAgICAgICAgdGhpcy5jb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgIHRoaXMuY29udGV4dC5maWxsUmVjdCh4LCB5LCB3LCBoKTtcclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmNvbnRleHQuc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgICB0aGlzLmNvbnRleHQucmVjdCh4LCB5LCB3LCBoKTtcclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBkcmF3QUFCQihhYWJiOiBBQUJCLCBmaWxsOiBib29sZWFuKXtcclxuICAgICAgdGhpcy5kcmF3UmVjdGFuZ2xlKGFhYmIubGVmdCwgYWFiYi50b3AsIGFhYmIud2lkdGgsIGFhYmIuaGVpZ2h0LCBmaWxsKTtcclxuICAgfVxyXG5cclxuICAgc2V0Q2FtZXJhKGNhbWVyYTogQ2FtZXJhKXtcclxuICAgICAgdGhpcy5jb250ZXh0LnJlc2V0VHJhbnNmb3JtKCk7XHJcblxyXG4gICAgICBsZXQgY2FtZXJhSGVpZ2h0ID0gY2FtZXJhLmhlaWdodDtcclxuICAgICAgbGV0IGNhbWVyYVdpZHRoID0gdGhpcy5jYW52YXMud2lkdGggLyB0aGlzLmNhbnZhcy5oZWlnaHQgKiBjYW1lcmFIZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLmNvbnRleHQuc2NhbGUoMSAvIGNhbWVyYVdpZHRoLCAxIC8gY2FtZXJhSGVpZ2h0KTtcclxuICAgICAgdGhpcy5jb250ZXh0LnNjYWxlKHRoaXMuY2FudmFzLndpZHRoLCB0aGlzLmNhbnZhcy5oZWlnaHQpO1xyXG5cclxuICAgICAgdGhpcy5jb250ZXh0LnRyYW5zbGF0ZSgtKGNhbWVyYS5jZW50ZXIueCAtIGNhbWVyYVdpZHRoIC8gMiksIC0oY2FtZXJhLmNlbnRlci55IC0gY2FtZXJhSGVpZ2h0IC8gMikpO1xyXG4gICB9XHJcblxyXG4gICBzZXRDb2xvcihjb2xvcjogc3RyaW5nKXtcclxuICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICB9XHJcbiAgIGdldENvbG9yKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbG9yO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGVTaXplKCl7XHJcbiAgICAgIHRoaXMuY2FudmFzLndpZHRoID0gdGhpcy5jYW52YXMub2Zmc2V0V2lkdGg7XHJcbiAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IHRoaXMuY2FudmFzLm9mZnNldEhlaWdodDtcclxuICAgICAgdGhpcy5jb250ZXh0LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmNvbnRleHQuaW1hZ2VTbW9vdGhpbmdRdWFsaXR5ID0gXCJsb3dcIjtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcIi4vQW5pbWF0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRle1xyXG4gICBpbWFnZTogQ2FudmFzSW1hZ2VTb3VyY2U7XHJcblxyXG4gICBvZmZzZXRYOiBudW1iZXIgPSAwO1xyXG4gICBvZmZzZXRZOiBudW1iZXIgPSAwO1xyXG5cclxuICAgc291cmNlWDogbnVtYmVyID0gMDtcclxuICAgc291cmNlWTogbnVtYmVyID0gMDtcclxuICAgc291cmNlV2lkdGg6IG51bWJlciA9IDA7XHJcbiAgIHNvdXJjZUhlaWdodDogbnVtYmVyID0gMDtcclxuICAgXHJcbiAgIGNvbnN0cnVjdG9yKGltYWdlOiBDYW52YXNJbWFnZVNvdXJjZSl7XHJcbiAgICAgIHRoaXMuaW1hZ2UgPSBpbWFnZTtcclxuXHJcbiAgICAgIHRoaXMuc291cmNlV2lkdGggPSBpbWFnZS53aWR0aCBhcyBudW1iZXI7XHJcbiAgICAgIHRoaXMuc291cmNlSGVpZ2h0ID0gaW1hZ2UuaGVpZ2h0IGFzIG51bWJlcjtcclxuICAgfVxyXG5cclxuICAgZ2V0IHdpZHRoKCkgeyByZXR1cm4gdGhpcy5zb3VyY2VXaWR0aDsgfVxyXG4gICBnZXQgaGVpZ2h0KCkgeyByZXR1cm4gdGhpcy5zb3VyY2VIZWlnaHQ7IH1cclxuXHJcbiAgIGNlbnRlcigpe1xyXG4gICAgICB0aGlzLm9mZnNldFggPSB0aGlzLndpZHRoIC8gMjtcclxuICAgICAgdGhpcy5vZmZzZXRZID0gdGhpcy5oZWlnaHQgLyAyO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZVNoZWV0e1xyXG4gICBpbWFnZTogQ2FudmFzSW1hZ2VTb3VyY2U7XHJcblxyXG4gICBjb25zdHJ1Y3RvcihpbWFnZTogQ2FudmFzSW1hZ2VTb3VyY2Upe1xyXG4gICAgICB0aGlzLmltYWdlID0gaW1hZ2U7XHJcbiAgIH1cclxuXHJcbiAgIGdldFNwcml0ZSh4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIpe1xyXG4gICAgICBsZXQgc3ByaXRlID0gbmV3IFNwcml0ZSh0aGlzLmltYWdlKTtcclxuXHJcbiAgICAgIHNwcml0ZS5zb3VyY2VYID0geDtcclxuICAgICAgc3ByaXRlLnNvdXJjZVkgPSB5O1xyXG4gICAgICBzcHJpdGUuc291cmNlV2lkdGggPSB3O1xyXG4gICAgICBzcHJpdGUuc291cmNlSGVpZ2h0ID0gaDtcclxuXHJcbiAgICAgIHJldHVybiBzcHJpdGU7XHJcbiAgIH1cclxuICAgXHJcbiAgIGdldEFuaW1hdGlvbih4OiBudW1iZXIsIHk6IG51bWJlciwgdzogbnVtYmVyLCBoOiBudW1iZXIsIGNvdW50OiBudW1iZXIpe1xyXG4gICAgICBsZXQgYW5pbWF0aW9uID0gbmV3IEFuaW1hdGlvbigpO1xyXG5cclxuICAgICAgZm9yKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspe1xyXG4gICAgICAgICBsZXQgc3ByaXRlID0gbmV3IFNwcml0ZSh0aGlzLmltYWdlKTtcclxuICAgXHJcbiAgICAgICAgIHNwcml0ZS5zb3VyY2VYID0geCArIGkgKiB3O1xyXG4gICAgICAgICBzcHJpdGUuc291cmNlWSA9IHk7XHJcbiAgICAgICAgIHNwcml0ZS5zb3VyY2VXaWR0aCA9IHc7XHJcbiAgICAgICAgIHNwcml0ZS5zb3VyY2VIZWlnaHQgPSBoO1xyXG5cclxuICAgICAgICAgYW5pbWF0aW9uLmFkZEZyYW1lKHNwcml0ZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBhbmltYXRpb247XHJcbiAgIH1cclxuXHJcbiAgIHN0YXRpYyBmcm9tSFRNTChpZDogc3RyaW5nKXtcclxuICAgICAgbGV0IGVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkgYXMgSFRNTEltYWdlRWxlbWVudDtcclxuXHJcbiAgICAgIHJldHVybiBuZXcgU3ByaXRlU2hlZXQoZWxlbWVudCk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR2FtZXBhZElucHV0LCBLZXlib2FyZCB9IGZyb20gXCJlbmdpbmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgQ2FtZXJhIH0gZnJvbSBcImdyYXBoaWNzL0NhbWVyYVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZVNoZWV0IH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBDb2xsaWRlckdhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL0NvbGxpZGVyR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBMZXZlbE1hbmFnZXIgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL0xldmVsTWFuYWdlclwiO1xyXG5pbXBvcnQgeyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJGaW5pc2hHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllckdhbWVPYmplY3QgfSBmcm9tIFwiaXNsYW5kL0dhbWVPYmplY3RzL1BsYXllckdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgUGxheWVyU3Bhd25HYW1lT2JqZWN0IH0gZnJvbSBcImlzbGFuZC9HYW1lT2JqZWN0cy9QbGF5ZXJTcGF3bkdhbWVPYmplY3RcIjtcclxuaW1wb3J0IHsgU3Bpa2VzR2FtZU9iamVjdCB9IGZyb20gXCJpc2xhbmQvR2FtZU9iamVjdHMvU3Bpa2VzR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBTY2VuZSB9IGZyb20gXCJzY2VuZS9TY2VuZVwiO1xyXG5pbXBvcnQgeyBUaWxlTWFwIH0gZnJvbSBcInRpbGVtYXAvVGlsZU1hcFwiO1xyXG5cclxuLy8gRnVjayB0aGlzIGJ1dCB3aGF0ZXZlclxyXG5mdW5jdGlvbiBpbml0TW9kYWwoZWxlbWVudDogSFRNTEVsZW1lbnQpe1xyXG4gICBsZXQgY2xvc2UgPSBlbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2xvc2VcIik7XHJcblxyXG4gICBjbG9zZT8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImNsb3NlZFwiKTtcclxuXHJcbiAgICAgIC8vIFllcyB0aGlzIG1ha2VzIGEgbG90IG9mIHNlbnNlIGhlcmUgOilcclxuICAgICAgZG9jdW1lbnQuYm9keS5yZXF1ZXN0RnVsbHNjcmVlbigpO1xyXG4gICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW5pdE1vZGFscygpe1xyXG4gICBsZXQgbW9kYWxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5tb2RhbFwiKTtcclxuXHJcbiAgIG1vZGFscy5mb3JFYWNoKG1vZGFsID0+IGluaXRNb2RhbChtb2RhbCBhcyBIVE1MRWxlbWVudCkpO1xyXG59XHJcblxyXG4vLyBJbml0IHRoZSBkYW1uIGdhbWVcclxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgYXN5bmMgKCk9PntcclxuICAgaW5pdE1vZGFscygpO1xyXG5cclxuICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG5cclxuICAgbGV0IGdhbWUgPSBuZXcgR2FtZShjYW52YXMpO1xyXG4gICBcclxuICAgbGV0IHNjZW5lID0gbmV3IFNjZW5lKCk7XHJcblxyXG4gICBzY2VuZS50aWxlbWFwID0gYXdhaXQgVGlsZU1hcC5mcm9tVGlsZWRNYXBEb3dubG9hZChcImFzc2V0cy9sZXZlbHMvbGV2ZWwwLmpzb25cIiwgKG9iaikgPT4ge1xyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJDb2xsaWRlclwiKXtcclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgQ29sbGlkZXJHYW1lT2JqZWN0KEFBQkIuQ3JlYXRlKG9iai54LCBvYmoueSwgb2JqLndpZHRoLCBvYmouaGVpZ2h0KSkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKG9iai50eXBlID09PSBcIkxldmVsTWFuYWdlclwiKXtcclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChuZXcgTGV2ZWxNYW5hZ2VyKCkpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKG9iai50eXBlID09PSBcIlBsYXllclNwYXduXCIpe1xyXG4gICAgICAgICBzY2VuZS5hZGRHYW1lT2JqZWN0KG5ldyBQbGF5ZXJTcGF3bkdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSlcclxuICAgICAgfVxyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJQbGF5ZXJGaW5pc2hcIil7XHJcbiAgICAgICAgIHNjZW5lLmFkZEdhbWVPYmplY3QobmV3IFBsYXllckZpbmlzaEdhbWVPYmplY3QoQUFCQi5DcmVhdGUob2JqLngsIG9iai55LCBvYmoud2lkdGgsIG9iai5oZWlnaHQpKSlcclxuICAgICAgfVxyXG4gICAgICBpZihvYmoudHlwZSA9PT0gXCJTcGlrZXNcIil7XHJcbiAgICAgICAgIGxldCBzcGlrZXMgPSBuZXcgU3Bpa2VzR2FtZU9iamVjdChBQUJCLkNyZWF0ZShvYmoueCwgb2JqLnksIG9iai53aWR0aCwgb2JqLmhlaWdodCkpO1xyXG5cclxuICAgICAgICAgc2NlbmUuYWRkR2FtZU9iamVjdChzcGlrZXMpO1xyXG4gICAgICB9XHJcbiAgIH0pO1xyXG4gICBcclxuICAgZ2FtZS5zY2VuZSA9IHNjZW5lO1xyXG5cclxuICAgZ2FtZS5ydW4oKTtcclxufSk7XHJcbiIsImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuaW1wb3J0IHsgU2lnbmFsIH0gZnJvbSBcInNpZ25hbHMvU2lnbmFsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSGVhbHRoQ29tcG9uZW50IGV4dGVuZHMgQ29tcG9uZW50e1xyXG4gICBoZWFsdGg6IG51bWJlciA9IDM7XHJcblxyXG4gICBvbkRhbWFnZTogU2lnbmFsPEhlYWx0aENvbXBvbmVudD4gPSBuZXcgU2lnbmFsPEhlYWx0aENvbXBvbmVudD4oKTtcclxuICAgb25EZWF0aDogU2lnbmFsPEhlYWx0aENvbXBvbmVudD4gPSBuZXcgU2lnbmFsPEhlYWx0aENvbXBvbmVudD4oKTtcclxuXHJcbiAgIGdldCBhbGl2ZSgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoID4gMDsgfVxyXG4gICBnZXQgZGVhZCgpIHsgcmV0dXJuIHRoaXMuaGVhbHRoIDw9IDA7IH1cclxuXHJcbiAgIGRhbWFnZShhbW91bnQ6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuaGVhbHRoIC09IGFtb3VudDtcclxuXHJcbiAgICAgIHRoaXMub25EYW1hZ2UuZW1pdCh0aGlzKTtcclxuICAgICAgXHJcbiAgICAgIGlmKHRoaXMuZGVhZCl7XHJcbiAgICAgICAgIHRoaXMub25EZWF0aC5lbWl0KHRoaXMpO1xyXG4gICAgICB9XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWVwYWRJbnB1dCwgS2V5Ym9hcmQgfSBmcm9tIFwiZW5naW5lL0lucHV0XCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJJbnB1dENvbXBvbmVudCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgZGlyZWN0aW9uOiBudW1iZXIgPSAwO1xyXG5cclxuICAganVtcFByZXNzZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAganVtcERvd246IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGRhc2hQcmVzc2VkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICBzdXBlcigpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHRoaXMuanVtcFByZXNzZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy5kYXNoUHJlc3NlZCA9IGZhbHNlO1xyXG4gICAgICB0aGlzLmp1bXBEb3duID0gZmFsc2U7XHJcbiAgICAgIHRoaXMuZGlyZWN0aW9uID0gMDtcclxuXHJcbiAgICAgIC8vIFRPRE8gYWN0dWFsbHkgc3dpdGNoIGJldHdlZW4gY29udHJvbGxlcnMgaW5zdGVhZCBvZiB0aGlzIGhhbGYgYmFrZWQgaGFsZiBhc3NlZCBzb2x1dGlvblxyXG4gICAgICB0aGlzLmdhbWUuaW5wdXQuZ2FtZXBhZHMuZm9yRWFjaChwYWQgPT4ge1xyXG4gICAgICAgICBpZihwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25BKSl7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIGlmKHBhZC5pc0J1dHRvblByZXNzZWQoR2FtZXBhZElucHV0LkJ1dHRvblJpZ2h0VHJpZ2dlcikpe1xyXG4gICAgICAgICAgICB0aGlzLmRhc2hQcmVzc2VkID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZihwYWQuaXNCdXR0b25Eb3duKEdhbWVwYWRJbnB1dC5CdXR0b25BKSl7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcERvd24gPSB0cnVlO1xyXG4gICAgICAgICB9XHJcblxyXG4gICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IHBhZC5sZWZ0QXhpc1g7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlTcGFjZSkpIHRoaXMuanVtcFByZXNzZWQgPSB0cnVlO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlEb3duKEtleWJvYXJkLktleVNwYWNlKSkgdGhpcy5qdW1wRG93biA9IHRydWU7XHJcbiAgICAgIGlmKHRoaXMuZ2FtZS5pbnB1dC5rZXlib2FyZC5pc0tleVByZXNzZWQoS2V5Ym9hcmQuS2V5QykpIHRoaXMuZGFzaFByZXNzZWQgPSB0cnVlO1xyXG5cclxuICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5RG93bihLZXlib2FyZC5LZXlBcnJvd0xlZnQpKSB0aGlzLmRpcmVjdGlvbiA9IC0xO1xyXG4gICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlEb3duKEtleWJvYXJkLktleUFycm93UmlnaHQpKSB0aGlzLmRpcmVjdGlvbiA9IDE7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEFBQkIgfSBmcm9tIFwibWF0aC9BQUJCXCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5leHBvcnQgY2xhc3MgQ29sbGlkZXJHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoYWFiYi5wb3NpdGlvbik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnNvbGlkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ib2R5LmxvY2FsQUFCQiA9IGFhYmI7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR2FtZXBhZElucHV0LCBLZXlib2FyZCB9IGZyb20gXCJlbmdpbmUvSW5wdXRcIjtcclxuaW1wb3J0IHsgSGVhbHRoQ29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL0hlYWx0aENvbXBvbmVudFwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBSaWdpZGJvZHkgfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9SaWdpZGJvZHlcIjtcclxuaW1wb3J0IHsgVHJhbnNmb3JtIH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvVHJhbnNmb3JtXCI7XHJcbmltcG9ydCB7IEdhbWVPYmplY3QgfSBmcm9tIFwic2NlbmUvR2FtZU9iamVjdFwiO1xyXG5pbXBvcnQgeyBmb3JtYXQgfSBmcm9tIFwidXRpbC9UaW1lXCI7XHJcbmltcG9ydCB7IFBsYXllckZpbmlzaEdhbWVPYmplY3QgfSBmcm9tIFwiLi9QbGF5ZXJGaW5pc2hHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllckdhbWVPYmplY3QgfSBmcm9tIFwiLi9QbGF5ZXJHYW1lT2JqZWN0XCI7XHJcbmltcG9ydCB7IFBsYXllclNwYXduR2FtZU9iamVjdCB9IGZyb20gXCIuL1BsYXllclNwYXduR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIExldmVsTWFuYWdlciBleHRlbmRzIEdhbWVPYmplY3R7XHJcbiAgIHNwYXduPzogUGxheWVyU3Bhd25HYW1lT2JqZWN0O1xyXG4gICBmaW5pc2g/OiBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0O1xyXG5cclxuICAgcGxheWVyPzogUGxheWVyR2FtZU9iamVjdDtcclxuXHJcbiAgIHJ1bm5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY29tcGxldGVkOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIHRpbWU6IG51bWJlciA9IDA7XHJcblxyXG4gICBlbGVtZW50OiBIVE1MRWxlbWVudDtcclxuICAgZmluYWxUaW1lRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcbiAgIGJlc3RUaW1lRWxlbWVudDogSFRNTEVsZW1lbnQ7XHJcblxyXG4gICBiZXN0VGltZTogbnVtYmVyfHVuZGVmaW5lZCA9IHVuZGVmaW5lZDtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmdhbWUtb3ZlcmxheVwiKSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgdGhpcy5maW5hbFRpbWVFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmaW5hbC10aW1lXCIpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICB0aGlzLmJlc3RUaW1lRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYmVzdC10aW1lXCIpIGFzIEhUTUxFbGVtZW50O1xyXG5cclxuICAgICAgbGV0IGJ0ID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJiZXN0VGltZVwiKTtcclxuICAgICAgaWYoYnQgIT09IG51bGwpe1xyXG4gICAgICAgICB0aGlzLmJlc3RUaW1lID0gcGFyc2VGbG9hdChidCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgc3VwZXIuaW5pdChnYW1lKTtcclxuXHJcbiAgICAgIHRoaXMuc3Bhd24gPSB0aGlzLnNjZW5lLmZpbmRPYmplY3Qob2JqZWN0ID0+IG9iamVjdCBpbnN0YW5jZW9mIFBsYXllclNwYXduR2FtZU9iamVjdCkgYXMgUGxheWVyU3Bhd25HYW1lT2JqZWN0fHVuZGVmaW5lZDtcclxuICAgICAgdGhpcy5maW5pc2ggPSB0aGlzLnNjZW5lLmZpbmRPYmplY3Qob2JqZWN0ID0+IG9iamVjdCBpbnN0YW5jZW9mIFBsYXllckZpbmlzaEdhbWVPYmplY3QpIGFzIFBsYXllckZpbmlzaEdhbWVPYmplY3R8dW5kZWZpbmVkO1xyXG5cclxuICAgICAgdGhpcy5maW5pc2ghLmJvZHkub25Db2xsaXNpb24ubGlzdGVuKG90aGVyID0+IHtcclxuICAgICAgICAgaWYob3RoZXIuZ2FtZU9iamVjdCBpbnN0YW5jZW9mIFBsYXllckdhbWVPYmplY3Qpe1xyXG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3RvcCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgIGlmKHRoaXMucnVubmluZykge1xyXG4gICAgICAgICB0aGlzLmdhbWUuaW5wdXQuZ2FtZXBhZHMuZm9yRWFjaChwYWQgPT4ge1xyXG4gICAgICAgICAgICBpZihwYWQuaXNCdXR0b25QcmVzc2VkKEdhbWVwYWRJbnB1dC5CdXR0b25ZKSl7XHJcbiAgICAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgIH0pO1xyXG4gICBcclxuICAgICAgICAgaWYodGhpcy5nYW1lLmlucHV0LmtleWJvYXJkLmlzS2V5UHJlc3NlZChLZXlib2FyZC5LZXlFbnRlcikpe1xyXG4gICAgICAgICAgICB0aGlzLnJlc3RhcnQoKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuZ2FtZS5pbnB1dC5nYW1lcGFkcy5mb3JFYWNoKHBhZCA9PiB7XHJcbiAgICAgICAgICAgIGlmKHBhZC5pc0J1dHRvblByZXNzZWQoR2FtZXBhZElucHV0LkJ1dHRvbkEpIHx8IHBhZC5pc0J1dHRvblByZXNzZWQoR2FtZXBhZElucHV0LkJ1dHRvblkpKXtcclxuICAgICAgICAgICAgICAgdGhpcy5yZXN0YXJ0KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgfSk7XHJcbiAgIFxyXG4gICAgICAgICBpZih0aGlzLmdhbWUuaW5wdXQua2V5Ym9hcmQuaXNLZXlQcmVzc2VkKEtleWJvYXJkLktleUVudGVyKSl7XHJcbiAgICAgICAgICAgIHRoaXMucmVzdGFydCgpO1xyXG4gICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgIH1cclxuXHJcbiAgIGZpeGVkVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICBzdXBlci5maXhlZFVwZGF0ZShkZWx0YSk7XHJcblxyXG4gICAgICBpZih0aGlzLnJ1bm5pbmcpe1xyXG4gICAgICAgICB0aGlzLnRpbWUgKz0gZGVsdGE7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCF0aGlzLnBsYXllcj8uaGVhbHRoLmFsaXZlKXtcclxuICAgICAgICAgdGhpcy5zdG9wKCk7XHJcbiAgICAgIH1cclxuICAgfVxyXG5cclxuICAgc3RvcCgpe1xyXG4gICAgICB0aGlzLnNjZW5lLnJlbW92ZUdhbWVPYmplY3QodGhpcy5wbGF5ZXIhKTtcclxuXHJcbiAgICAgIHRoaXMucnVubmluZyA9IGZhbHNlO1xyXG5cclxuICAgICAgaWYodGhpcy5jb21wbGV0ZWQgJiYgKHRoaXMuYmVzdFRpbWUgPT09IHVuZGVmaW5lZCB8fCB0aGlzLnRpbWUgPCB0aGlzLmJlc3RUaW1lKSl7XHJcbiAgICAgICAgIHRoaXMuYmVzdFRpbWUgPSB0aGlzLnRpbWU7XHJcbiAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmVzdFRpbWVcIiwgXCJcIiArIHRoaXMuYmVzdFRpbWUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnN5bmMoKTtcclxuICAgfVxyXG5cclxuICAgcmVzdGFydCgpe1xyXG4gICAgICBpZih0aGlzLnNwYXduID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICAgIHRoaXMuc3RvcCgpO1xyXG5cclxuICAgICAgdGhpcy5jb21wbGV0ZWQgPSBmYWxzZTtcclxuICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgICAgdGhpcy5ydW5uaW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgIHRoaXMucGxheWVyID0gbmV3IFBsYXllckdhbWVPYmplY3QoKTtcclxuXHJcbiAgICAgIHRoaXMucGxheWVyLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQodGhpcy5zcGF3bi50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgICB0aGlzLnBsYXllci50cmFuc2Zvcm0uaW50ZXJwb2xhdGVkUG9zaXRpb24uc2V0KHRoaXMuc3Bhd24udHJhbnNmb3JtLnBvc2l0aW9uKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuc2NlbmUuYWRkR2FtZU9iamVjdCh0aGlzLnBsYXllcik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLnN5bmMoKTtcclxuICAgfVxyXG5cclxuICAgc3luYygpe1xyXG4gICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnRvZ2dsZShcImdhbWUtb3ZlclwiLCAhdGhpcy5ydW5uaW5nKTtcclxuICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC50b2dnbGUoXCJjb21wbGV0ZWRcIiwgdGhpcy5jb21wbGV0ZWQpO1xyXG4gICAgICB0aGlzLmZpbmFsVGltZUVsZW1lbnQuaW5uZXJUZXh0ID0gZm9ybWF0KHRoaXMudGltZSk7XHJcblxyXG4gICAgICBpZih0aGlzLmJlc3RUaW1lICE9PSB1bmRlZmluZWQpe1xyXG4gICAgICAgICB0aGlzLmJlc3RUaW1lRWxlbWVudC5pbm5lclRleHQgPSBmb3JtYXQodGhpcy5iZXN0VGltZSk7XHJcbiAgICAgIH1cclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJGaW5pc2hHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoYWFiYi5wb3NpdGlvbik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG5cclxuICAgICAgLy8gSW50ZXJhY3RhYmxlcyBhbmQgc2hpdFxyXG4gICAgICB0aGlzLmJvZHkudXNlRHluYW1pY0NvbGxpc2lvbnMgPSB0cnVlO1xyXG4gICAgICB0aGlzLmJvZHkubG9jYWxBQUJCID0gYWFiYjtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQW5pbWF0aW9uIH0gZnJvbSBcImdyYXBoaWNzL0FuaW1hdGlvblwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBTcHJpdGUsIFNwcml0ZVNoZWV0IH0gZnJvbSBcImdyYXBoaWNzL1Nwcml0ZVwiO1xyXG5pbXBvcnQgeyBIZWFsdGhDb21wb25lbnQgfSBmcm9tIFwiaXNsYW5kL0NvbXBvbmVudHMvSGVhbHRoQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFBsYXllcklucHV0Q29tcG9uZW50IH0gZnJvbSBcImlzbGFuZC9Db21wb25lbnRzL1BsYXllcklucHV0Q29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFJpZ2lkYm9keSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1JpZ2lkYm9keVwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwic2NlbmUvY29tcG9uZW50cy9UcmFuc2Zvcm1cIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCJzY2VuZS9HYW1lT2JqZWN0XCI7XHJcblxyXG5sZXQgc2hlZXQgPSBTcHJpdGVTaGVldC5mcm9tSFRNTChcIlBsYXllclwiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgY3VycmVudEFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG5cclxuICAgaWRsZUFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG4gICB3YWxrQW5pbWF0aW9uOiBBbmltYXRpb247XHJcbiAgIGp1bXBBbmltYXRpb246IEFuaW1hdGlvbjtcclxuICAgZmFsbEFuaW1hdGlvbjogQW5pbWF0aW9uO1xyXG4gICBkYXNoQW5pbWF0aW9uOiBBbmltYXRpb247XHJcbiAgIHdhbGxBbmltYXRpb246IEFuaW1hdGlvbjtcclxuXHJcbiAgIHRyYW5zZm9ybTogVHJhbnNmb3JtO1xyXG4gICBib2R5OiBSaWdpZGJvZHk7XHJcbiAgIGlucHV0OiBQbGF5ZXJJbnB1dENvbXBvbmVudDtcclxuICAgaGVhbHRoOiBIZWFsdGhDb21wb25lbnQ7XHJcbiAgIFxyXG4gICBqdW1wSG9wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGRhc2hIb3A6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGp1bXBpbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgZmFjaW5nOiBudW1iZXIgPSAxO1xyXG5cclxuICAganVtcFNwZWVkOiBudW1iZXIgPSAtMyAqIDYwO1xyXG4gICBtb3ZlU3BlZWQ6IG51bWJlciA9IDEuNSAqIDYwO1xyXG5cclxuICAgY2F5b3RlVGltZTogbnVtYmVyID0gMC4wNTtcclxuICAgZ3JvdW5kTGVhdmVUaW1lOiBudW1iZXIgPSAwO1xyXG5cclxuICAgZ3JvdW5kQWNjZWxlcmF0aW9uOiBudW1iZXIgPSAwLjIgKiA2MCAqIDYwO1xyXG4gICBncmF2aXR5OiBudW1iZXIgPSAwLjI1ICogNjAgKiA2MDtcclxuICAgZ3Jhdml0eVVwRnJhY3Rpb246IG51bWJlciA9IDAuNTtcclxuICAgZ3Jhdml0eVdhbGxGcmFjdGlvbjogbnVtYmVyID0gMC40O1xyXG5cclxuICAgZ3JvdW5kZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgd2FsbExlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgd2FsbFJpZ2h0OiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBoYWRXYWxsOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBkYXNoaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGRhc2hTcGVlZDogbnVtYmVyID0gNC43ICogNjA7XHJcbiAgIGRhc2hUaW1lOiBudW1iZXIgPSAyNCAvICh0aGlzLmRhc2hTcGVlZCk7XHJcblxyXG4gICBkYXNoVGltZXI6IG51bWJlciA9IDA7XHJcbiAgIGRhc2hUaW1lb3V0OiBudW1iZXIgPSAwO1xyXG4gICBkYXNoU2F2ZWRTcGVlZDogbnVtYmVyID0gMDtcclxuICAgZGFzaFNhdmVkQWRkaXRpb246IG51bWJlciA9IDU7XHJcblxyXG4gICB3YWxsSnVtcFRpbWVyOiBudW1iZXIgPSAwO1xyXG4gICBnZXQgd2FsbEp1bXBpbmcoKSB7IHJldHVybiB0aGlzLndhbGxKdW1wVGltZXIgPiAwOyB9XHJcblxyXG4gICBnZXQgY2FuTW92ZSgpIHsgcmV0dXJuICF0aGlzLndhbGxKdW1waW5nICYmICF0aGlzLmRhc2hpbmc7IH1cclxuICAgZ2V0IHVzZUdyYXZpdHkoKSB7IHJldHVybiAhdGhpcy5kYXNoaW5nOyB9XHJcbiAgIGdldCBoYXNXYWxsKCkgeyByZXR1cm4gdGhpcy53YWxsTGVmdCB8fCB0aGlzLndhbGxSaWdodDsgfVxyXG4gICBcclxuICAgY2FuRGFzaDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjYW5Eb3VibGVqdW1wOiBib29sZWFuID0gZmFsc2U7XHJcbiAgIGdldCBjYW5KdW1wKCkgeyByZXR1cm4gIHRoaXMuZ3JvdW5kZWQgfHwgKHRoaXMuZ3JvdW5kTGVhdmVUaW1lIDwgdGhpcy5jYXlvdGVUaW1lKTsgfVxyXG5cclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmlkbGVBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgMCwgMTYsIDE2LCAxKS5jZW50ZXIoKTtcclxuICAgICAgdGhpcy53YWxrQW5pbWF0aW9uID0gc2hlZXQuZ2V0QW5pbWF0aW9uKDAsIDE2LCAxNiwgMTYsIDQpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLmZhbGxBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgMzIsIDE2LCAxNiwgMikuY2VudGVyKCk7XHJcbiAgICAgIHRoaXMuanVtcEFuaW1hdGlvbiA9IHNoZWV0LmdldEFuaW1hdGlvbigwLCA0OCwgMTYsIDE2LCAyKS5jZW50ZXIoKTtcclxuICAgICAgdGhpcy5kYXNoQW5pbWF0aW9uID0gc2hlZXQuZ2V0QW5pbWF0aW9uKDAsIDY0LCAxNiwgMTYsIDIpLmNlbnRlcigpO1xyXG4gICAgICB0aGlzLndhbGxBbmltYXRpb24gPSBzaGVldC5nZXRBbmltYXRpb24oMCwgODAsIDE2LCAxNiwgMikuY2VudGVyKCk7XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLmlkbGVBbmltYXRpb247XHJcblxyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBUcmFuc2Zvcm0oKSk7XHJcbiAgICAgIHRoaXMuYm9keSA9IHRoaXMuYWRkQ29tcG9uZW50KG5ldyBSaWdpZGJvZHkoKSk7XHJcbiAgICAgIHRoaXMuaW5wdXQgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUGxheWVySW5wdXRDb21wb25lbnQoKSk7XHJcbiAgICAgIHRoaXMuaGVhbHRoID0gdGhpcy5hZGRDb21wb25lbnQobmV3IEhlYWx0aENvbXBvbmVudCgpKTtcclxuXHJcbiAgICAgIHRoaXMuaGVhbHRoLm9uRGVhdGgubGlzdGVuKHRoaXMub25EZWF0aC5iaW5kKHRoaXMpKTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMuYm9keS51c2VEeW5hbWljQ29sbGlzaW9ucyA9IHRydWU7XHJcblxyXG4gICAgICB0aGlzLmJvZHkubG9jYWxBQUJCLm9mZnNldC54ID0gNTtcclxuICAgICAgdGhpcy5ib2R5LmxvY2FsQUFCQi5vZmZzZXQueSA9IDU7XHJcbiAgICAgIHRoaXMuYm9keS5sb2NhbEFBQkIuc2l6ZS54ID0gMTA7XHJcbiAgICAgIHRoaXMuYm9keS5sb2NhbEFBQkIuc2l6ZS55ID0gMTM7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgc3VwZXIudXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgIGlmKHRoaXMuaW5wdXQuanVtcFByZXNzZWQpe1xyXG4gICAgICAgICB0aGlzLmp1bXBIb3AgPSB0cnVlO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKHRoaXMuaW5wdXQuZGFzaFByZXNzZWQpe1xyXG4gICAgICAgICB0aGlzLmRhc2hIb3AgPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgY2FtID0gdGhpcy5zY2VuZS5jYW1lcmE7XHJcbiAgICAgIGNhbS5jZW50ZXIuc2V0KHRoaXMudHJhbnNmb3JtLmludGVycG9sYXRlZFBvc2l0aW9uKTtcclxuXHJcbiAgICAgIC8vIFRPRE8gZG8gdGhpcyByaWdodC5cclxuICAgICAgY29uc3Qgc2NlbmVXaWR0aCA9IDY0MDtcclxuICAgICAgY29uc3Qgc2NlbmVIZWlnaHQgPSAzNjA7XHJcblxyXG4gICAgICBpZihjYW0uY2VudGVyLnggLSBjYW0ud2lkdGggLyAyIDwgMCkgY2FtLmNlbnRlci54ID0gY2FtLndpZHRoIC8gMjtcclxuICAgICAgaWYoY2FtLmNlbnRlci54ICsgY2FtLndpZHRoIC8gMiA+IHNjZW5lV2lkdGgpIGNhbS5jZW50ZXIueCA9IHNjZW5lV2lkdGggLSBjYW0ud2lkdGggLyAyO1xyXG5cclxuICAgICAgaWYoY2FtLmNlbnRlci55IC0gY2FtLmhlaWdodCAvIDIgPCAwKSBjYW0uY2VudGVyLnkgPSBjYW0uaGVpZ2h0IC8gMjtcclxuICAgICAgaWYoY2FtLmNlbnRlci55ICsgY2FtLmhlaWdodCAvIDIgPiBzY2VuZUhlaWdodCkgY2FtLmNlbnRlci55ID0gc2NlbmVIZWlnaHQgLSBjYW0uaGVpZ2h0IC8gMjtcclxuICAgfVxyXG5cclxuICAgZml4ZWRVcGRhdGUoZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIHN1cGVyLmZpeGVkVXBkYXRlKGRlbHRhKTtcclxuXHJcbiAgICAgIHRoaXMuZ3JvdW5kZWQgPSB0aGlzLmJvZHkuY29sbGlkZWRCb3R0b207XHJcbiAgICAgIHRoaXMud2FsbExlZnQgPSB0aGlzLmJvZHkuY29sbGlkZWRMZWZ0O1xyXG4gICAgICB0aGlzLndhbGxSaWdodCA9IHRoaXMuYm9keS5jb2xsaWRlZFJpZ2h0O1xyXG5cclxuICAgICAgaWYodGhpcy53YWxsTGVmdCB8fCB0aGlzLndhbGxSaWdodCl7XHJcbiAgICAgICAgIGlmKCF0aGlzLmhhZFdhbGwgJiYgIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPiAwKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSAwO1xyXG4gICAgICAgICB9XHJcbiAgICAgICAgIHRoaXMuaGFkV2FsbCA9IHRydWU7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5oYWRXYWxsID0gZmFsc2U7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKHRoaXMuZ3JvdW5kZWQpIHtcclxuICAgICAgICAgdGhpcy5ncm91bmRMZWF2ZVRpbWUgPSAwO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuZ3JvdW5kTGVhdmVUaW1lICs9IGRlbHRhO1xyXG4gICAgICB9XHJcblxyXG5cclxuICAgICAgLy8gTWFrZSBzdXJlIHdlIHN0aWNrIHRvIHRoZSB3YWxsXHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMud2FsbFJpZ2h0KXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSA2MDtcclxuICAgICAgfVxyXG4gICAgICBpZighdGhpcy5ncm91bmRlZCAmJiB0aGlzLndhbGxMZWZ0KXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggPSAtNjA7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmKCF0aGlzLmlucHV0Lmp1bXBEb3duKXtcclxuICAgICAgICAgdGhpcy5qdW1wSG9wID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgXHJcbiAgICAgIC8vIEp1bXBpbmdcclxuICAgICAgdGhpcy51cGRhdGVKdW1wKGRlbHRhKTtcclxuXHJcbiAgICAgIC8vIE1vdmVtZW50XHJcbiAgICAgIHRoaXMudXBkYXRlTW92ZShkZWx0YSk7XHJcblxyXG4gICAgICAvLyBEYXNoaW5nXHJcbiAgICAgIHRoaXMudXBkYXRlRGFzaChkZWx0YSk7XHJcbiAgICAgIFxyXG5cclxuICAgICAgLy8gR3Jhdml0eVxyXG4gICAgICB0aGlzLnVwZGF0ZUdyYXZpdHkoZGVsdGEpO1xyXG4gICAgICBcclxuICAgICAgLy8gQW5pbWF0aW9uXHJcbiAgICAgIHRoaXMudXBkYXRlQW5pbWF0aW9uKGRlbHRhKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlTW92ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgLy8gVXBkYXRlIGZhY2luZ1xyXG4gICAgICBpZih0aGlzLmlucHV0LmRpcmVjdGlvbiA+IDApe1xyXG4gICAgICAgICB0aGlzLmZhY2luZyA9IDE7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5pbnB1dC5kaXJlY3Rpb24gPCAwKXtcclxuICAgICAgICAgdGhpcy5mYWNpbmcgPSAtMTtcclxuICAgICAgfVxyXG4gICAgICBpZih0aGlzLndhbGxMZWZ0ICYmICF0aGlzLmdyb3VuZGVkKSB0aGlzLmZhY2luZyA9IDE7XHJcbiAgICAgIGlmKHRoaXMud2FsbFJpZ2h0ICYmICF0aGlzLmdyb3VuZGVkKSB0aGlzLmZhY2luZyA9IC0xO1xyXG5cclxuICAgICAgaWYoIXRoaXMuY2FuTW92ZSkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYodGhpcy5pbnB1dC5kaXJlY3Rpb24gIT09IDApe1xyXG4gICAgICAgICB0aGlzLmFjY2VsZXJhdGUoXHJcbiAgICAgICAgICAgIE1hdGguc2lnbih0aGlzLmlucHV0LmRpcmVjdGlvbiksIFxyXG4gICAgICAgICAgICB0aGlzLm1vdmVTcGVlZCAqIE1hdGguYWJzKHRoaXMuaW5wdXQuZGlyZWN0aW9uKSxcclxuICAgICAgICAgICAgdGhpcy5ncm91bmRBY2NlbGVyYXRpb24gKiBkZWx0YSk7ICAgICAgICAgXHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgdGhpcy5zdG9wKHRoaXMuZ3JvdW5kQWNjZWxlcmF0aW9uICogZGVsdGEpO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZURhc2goZGVsdGE6IG51bWJlcil7XHJcbiAgICAgIGlmKHRoaXMuZ3JvdW5kZWQpe1xyXG4gICAgICAgICB0aGlzLmNhbkRhc2ggPSB0cnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLmRhc2hpbmcpe1xyXG4gICAgICAgICB0aGlzLmRhc2hUaW1lciAtPSBkZWx0YTtcclxuXHJcbiAgICAgICAgIGlmKHRoaXMuZGFzaFRpbWVyIDwgMCl7XHJcbiAgICAgICAgICAgIHRoaXMuZGFzaGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IHRoaXMuZGFzaFNhdmVkU3BlZWQgKyB0aGlzLmZhY2luZyAqIHRoaXMuZGFzaFNhdmVkQWRkaXRpb247XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBlbHNle1xyXG4gICAgICAgICB0aGlzLmRhc2hUaW1lb3V0IC09IGRlbHRhO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZih0aGlzLmRhc2hIb3AgJiYgdGhpcy5kYXNoVGltZW91dCA8IDAgJiYgdGhpcy5jYW5EYXNoICYmICF0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgdGhpcy5kYXNoaW5nID0gdHJ1ZTtcclxuICAgICAgICAgdGhpcy5jYW5EYXNoID0gZmFsc2U7XHJcbiAgICAgICAgIHRoaXMuZGFzaFNhdmVkU3BlZWQgPSB0aGlzLmJvZHkudmVsb2NpdHkueDtcclxuICAgICAgICAgdGhpcy5kYXNoVGltZXIgPSB0aGlzLmRhc2hUaW1lO1xyXG4gICAgICAgICB0aGlzLmRhc2hUaW1lb3V0ID0gMC4yO1xyXG4gICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IDA7XHJcbiAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS54ID0gdGhpcy5mYWNpbmcgKiB0aGlzLmRhc2hTcGVlZDtcclxuICAgICAgfVxyXG4gICAgICB0aGlzLmRhc2hIb3AgPSBmYWxzZTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlSnVtcChkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy53YWxsSnVtcFRpbWVyIC09IGRlbHRhO1xyXG5cclxuICAgICAgaWYodGhpcy5jYW5KdW1wKXtcclxuICAgICAgICAgaWYodGhpcy5qdW1wSG9wKXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5qdW1waW5nID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgIGlmKCF0aGlzLmdyb3VuZGVkKXtcclxuICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjYXlvdGUganVtcCFcIik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIFRoaXMgaXMgcmVhbGx5IGhhY2t5IGJ1dCB3aGF0ZXZlclxyXG4gICAgICAgICAgICB0aGlzLmdyb3VuZExlYXZlVGltZSA9IHRoaXMuY2F5b3RlVGltZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgICBlbHNlIGlmKHRoaXMuY2FuRG91YmxlanVtcCl7XHJcbiAgICAgICAgIGlmKHRoaXMuanVtcEhvcCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ID0gdGhpcy5qdW1wU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgICAgdGhpcy5qdW1wSG9wID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgZWxzZXtcclxuICAgICAgICAgaWYodGhpcy53YWxsTGVmdCAmJiB0aGlzLmp1bXBIb3Ape1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IHRoaXMubW92ZVNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueSA9IHRoaXMuanVtcFNwZWVkO1xyXG5cclxuICAgICAgICAgICAgdGhpcy53YWxsSnVtcFRpbWVyID0gMC4wNTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuanVtcGluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuanVtcEhvcCA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gWW91IGNhbiBkYXNoIGFmdGVyIHlvdXIgd2FsbGp1bXAgOilcclxuICAgICAgICAgICAgdGhpcy5jYW5EYXNoID0gdHJ1ZTtcclxuICAgICAgICAgfVxyXG4gICAgICAgICBpZih0aGlzLndhbGxSaWdodCAmJiB0aGlzLmp1bXBIb3Ape1xyXG4gICAgICAgICAgICB0aGlzLmJvZHkudmVsb2NpdHkueCA9IC10aGlzLm1vdmVTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmp1bXBTcGVlZDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMud2FsbEp1bXBUaW1lciA9IDAuMDU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmp1bXBpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmp1bXBIb3AgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgIC8vIFlvdSBjYW4gZGFzaCBhZnRlciB5b3VyIHdhbGxqdW1wIDopXHJcbiAgICAgICAgICAgIHRoaXMuY2FuRGFzaCA9IHRydWU7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICBcclxuICAgICAgLy8gSnVtcCBjYW5jZWxpbmdcclxuICAgICAgaWYodGhpcy5ib2R5LnZlbG9jaXR5LnkgPiAwKXtcclxuICAgICAgICAgdGhpcy5qdW1waW5nID0gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5qdW1waW5nICYmICF0aGlzLmlucHV0Lmp1bXBEb3duKXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPSB0aGlzLmJvZHkudmVsb2NpdHkueSAqIDAuMjU7XHJcbiAgICAgICAgIHRoaXMuanVtcGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZUFuaW1hdGlvbihkZWx0YTogbnVtYmVyKXtcclxuICAgICAgLy8gQW5pbWF0aW9uIHN0dWZmXHJcbiAgICAgIGlmKHRoaXMuYm9keS52ZWxvY2l0eS54ICE9PSAwKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy53YWxrQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuaWRsZUFuaW1hdGlvbjtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYoIXRoaXMuZ3JvdW5kZWQgJiYgdGhpcy5ib2R5LnZlbG9jaXR5LnkgPCAwKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5qdW1wQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcbiAgICAgIGlmKCF0aGlzLmdyb3VuZGVkICYmIHRoaXMuYm9keS52ZWxvY2l0eS55ID4gMCl7XHJcbiAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IHRoaXMuZmFsbEFuaW1hdGlvbjtcclxuICAgICAgfVxyXG4gICAgICBpZigodGhpcy53YWxsTGVmdCB8fCB0aGlzLndhbGxSaWdodCkgJiYgIXRoaXMuZ3JvdW5kZWQpe1xyXG4gICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSB0aGlzLndhbGxBbmltYXRpb247XHJcbiAgICAgIH1cclxuICAgICAgaWYodGhpcy5kYXNoaW5nKXtcclxuICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gdGhpcy5kYXNoQW5pbWF0aW9uO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24udXBkYXRlKGRlbHRhKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlR3Jhdml0eShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgaWYoIXRoaXMudXNlR3Jhdml0eSkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYodGhpcy5ib2R5LnZlbG9jaXR5LnkgPCAwKXtcclxuICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgKz0gdGhpcy5ncmF2aXR5ICogdGhpcy5ncmF2aXR5VXBGcmFjdGlvbiAqIGRlbHRhO1xyXG4gICAgICB9XHJcbiAgICAgIGVsc2V7XHJcbiAgICAgICAgIGlmKHRoaXMuaGFzV2FsbCl7XHJcbiAgICAgICAgICAgIHRoaXMuYm9keS52ZWxvY2l0eS55ICs9IHRoaXMuZ3Jhdml0eSAqIHRoaXMuZ3Jhdml0eVdhbGxGcmFjdGlvbiAqIGRlbHRhO1xyXG4gICAgICAgICB9ZWxzZXtcclxuICAgICAgICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnkgKz0gdGhpcy5ncmF2aXR5ICogZGVsdGE7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcblxyXG4gICBhY2NlbGVyYXRlKGRpcjogbnVtYmVyLCBtYXhTcGVlZDogbnVtYmVyLCBhY2NlbGVyYXRpb246IG51bWJlcil7XHJcbiAgICAgIGxldCBhY2MgPSBhY2NlbGVyYXRpb247XHJcbiAgICAgIGxldCB2ZWwgPSB0aGlzLmJvZHkudmVsb2NpdHkueCAqIGRpcjtcclxuXHJcbiAgICAgIGlmKHZlbCA+PSBtYXhTcGVlZCkgcmV0dXJuO1xyXG5cclxuICAgICAgaWYodmVsICsgYWNjID4gbWF4U3BlZWQpe1xyXG4gICAgICAgICBhY2MgPSBtYXhTcGVlZCAtIHZlbDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggKz0gYWNjICogZGlyO1xyXG4gICAgICBcclxuICAgfVxyXG4gICBzdG9wKGFjY2VsZXJhdGlvbjogbnVtYmVyKXtcclxuICAgICAgbGV0IGRpciA9IE1hdGguc2lnbih0aGlzLmJvZHkudmVsb2NpdHkueCk7XHJcbiAgICAgIGxldCB2ZWwgPSBNYXRoLmFicyh0aGlzLmJvZHkudmVsb2NpdHkueCk7XHJcblxyXG4gICAgICBsZXQgcmVtID0gYWNjZWxlcmF0aW9uO1xyXG5cclxuICAgICAgaWYodmVsIC0gcmVtIDwgMCkgcmVtID0gdmVsO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnZlbG9jaXR5LnggLT0gcmVtICogZGlyO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIHN1cGVyLmRyYXcoZ3JhcGhpY3MpO1xyXG5cclxuICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZSh0aGlzLmN1cnJlbnRBbmltYXRpb24uZnJhbWUsIFxyXG4gICAgICAgICB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi54LCB0aGlzLnRyYW5zZm9ybS5pbnRlcnBvbGF0ZWRQb3NpdGlvbi55LFxyXG4gICAgICAgICB0aGlzLmZhY2luZywgMSwgXHJcbiAgICAgICAgIDApO1xyXG4gICB9XHJcblxyXG4gICBvbkRlYXRoKCl7XHJcbiAgICAgIHRoaXMuc2NlbmUucmVtb3ZlR2FtZU9iamVjdCh0aGlzKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTcGF3bkdhbWVPYmplY3QgZXh0ZW5kcyBHYW1lT2JqZWN0e1xyXG4gICB0cmFuc2Zvcm06IFRyYW5zZm9ybTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoYWFiYi5wb3NpdGlvbik7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEhlYWx0aENvbXBvbmVudCB9IGZyb20gXCJpc2xhbmQvQ29tcG9uZW50cy9IZWFsdGhDb21wb25lbnRcIjtcclxuaW1wb3J0IHsgQUFCQiB9IGZyb20gXCJtYXRoL0FBQkJcIjtcclxuaW1wb3J0IHsgUmlnaWRib2R5IH0gZnJvbSBcInNjZW5lL2NvbXBvbmVudHMvUmlnaWRib2R5XCI7XHJcbmltcG9ydCB7IFRyYW5zZm9ybSB9IGZyb20gXCJzY2VuZS9jb21wb25lbnRzL1RyYW5zZm9ybVwiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcInNjZW5lL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGlrZXNHYW1lT2JqZWN0IGV4dGVuZHMgR2FtZU9iamVjdHtcclxuICAgdHJhbnNmb3JtOiBUcmFuc2Zvcm07XHJcbiAgIGJvZHk6IFJpZ2lkYm9keTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKGFhYmI6IEFBQkIpe1xyXG4gICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgdGhpcy50cmFuc2Zvcm0gPSB0aGlzLmFkZENvbXBvbmVudChuZXcgVHJhbnNmb3JtKCkpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybS5wb3NpdGlvbi5zZXQoYWFiYi5wb3NpdGlvbik7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmJvZHkgPSB0aGlzLmFkZENvbXBvbmVudChuZXcgUmlnaWRib2R5KCkpO1xyXG5cclxuICAgICAgdGhpcy5ib2R5LnVzZUR5bmFtaWNDb2xsaXNpb25zID0gdHJ1ZTtcclxuICAgICAgdGhpcy5ib2R5LmxvY2FsQUFCQiA9IGFhYmI7XHJcblxyXG4gICAgICB0aGlzLmJvZHkub25Db2xsaXNpb24ubGlzdGVuKHRoaXMub25Db2xsaXNpb24uYmluZCh0aGlzKSk7XHJcbiAgICAgIFxyXG4gICB9XHJcblxyXG4gICBvbkNvbGxpc2lvbihvdGhlcjogUmlnaWRib2R5KXtcclxuICAgICAgbGV0IGNvbXAgPSBvdGhlci5nYW1lT2JqZWN0LmZpbmRDb21wb25lbnQoY29tcG9uZW50ID0+IGNvbXBvbmVudCBpbnN0YW5jZW9mIEhlYWx0aENvbXBvbmVudCkgYXMgSGVhbHRoQ29tcG9uZW50fHVuZGVmaW5lZDtcclxuXHJcbiAgICAgIGlmKGNvbXAgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG4gICAgICBcclxuICAgICAgY29uc29sZS5sb2coXCJEYW1hZ2luZyBzb21ldGhpbmchXCIpO1xyXG4gICAgICBcclxuICAgICAgY29tcC5kYW1hZ2UoMTAwKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgVmVjdG9yMiB9IGZyb20gXCIuL1ZlY3RvcjJcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBBQUJCe1xyXG4gICBwb3NpdGlvbjogVmVjdG9yMjtcclxuICAgb2Zmc2V0OiBWZWN0b3IyO1xyXG4gICBzaXplOiBWZWN0b3IyO1xyXG5cclxuICAgY29uc3RydWN0b3IocG9zaXRpb246IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpLCBzaXplOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKSwgb2Zmc2V0OiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKSkgeyBcclxuICAgICAgdGhpcy5wb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG4gICAgICB0aGlzLm9mZnNldCA9IG9mZnNldDtcclxuICAgfVxyXG5cclxuICAgZ2V0IGxlZnQoKSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLnggLSB0aGlzLm9mZnNldC54OyB9XHJcbiAgIGdldCB0b3AoKSB7IHJldHVybiB0aGlzLnBvc2l0aW9uLnkgLSB0aGlzLm9mZnNldC55OyB9XHJcbiAgIFxyXG4gICBnZXQgcmlnaHQoKSB7cmV0dXJuIHRoaXMucG9zaXRpb24ueCArIHRoaXMuc2l6ZS54IC0gdGhpcy5vZmZzZXQueDsgfVxyXG4gICBnZXQgYm90dG9tKCkge3JldHVybiB0aGlzLnBvc2l0aW9uLnkgKyB0aGlzLnNpemUueSAtIHRoaXMub2Zmc2V0Lnk7IH1cclxuXHJcbiAgIGdldCB3aWR0aCgpIHsgcmV0dXJuIHRoaXMuc2l6ZS54OyB9XHJcbiAgIGdldCBoZWlnaHQoKSB7IHJldHVybiB0aGlzLnNpemUueTsgfVxyXG5cclxuICAgb3ZlcmxhcHMob3RoZXI6IEFBQkIpe1xyXG4gICAgICByZXR1cm4gdGhpcy5vdmVybGFwc1gob3RoZXIpICYmIHRoaXMub3ZlcmxhcHNZKG90aGVyKTtcclxuICAgfVxyXG4gICBvdmVybGFwc1gob3RoZXI6IEFBQkIpe1xyXG4gICAgICBpZih0aGlzLmxlZnQgPj0gb3RoZXIucmlnaHQpIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYodGhpcy5yaWdodCA8PSBvdGhlci5sZWZ0KSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG4gICBvdmVybGFwc1kob3RoZXI6IEFBQkIpe1xyXG4gICAgICBpZih0aGlzLnRvcCA+PSBvdGhlci5ib3R0b20pIHJldHVybiBmYWxzZTtcclxuICAgICAgaWYodGhpcy5ib3R0b20gPD0gb3RoZXIudG9wKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgIFxyXG4gICAgICByZXR1cm4gdHJ1ZTtcclxuICAgfVxyXG5cclxuICAgbWluT3ZlcmxhcFgob3RoZXI6IEFBQkIpe1xyXG4gICAgICBsZXQgbW90aW9uTGVmdCA9IG90aGVyLnJpZ2h0IC0gdGhpcy5sZWZ0O1xyXG4gICAgICBsZXQgbW90aW9uUmlnaHQgPSB0aGlzLnJpZ2h0IC0gb3RoZXIubGVmdDtcclxuXHJcbiAgICAgIGlmKG1vdGlvbkxlZnQgPiBtb3Rpb25SaWdodCkgcmV0dXJuIC1tb3Rpb25SaWdodDtcclxuICAgICAgcmV0dXJuIG1vdGlvbkxlZnQ7XHJcbiAgIH1cclxuICAgbWluT3ZlcmxhcFkob3RoZXI6IEFBQkIpe1xyXG4gICAgICBsZXQgbW90aW9uVXAgPSBvdGhlci5ib3R0b20gLSB0aGlzLnRvcDtcclxuICAgICAgbGV0IG1vdGlvbkRvd24gPSB0aGlzLmJvdHRvbSAtIG90aGVyLnRvcDtcclxuXHJcbiAgICAgIGlmKG1vdGlvblVwID4gbW90aW9uRG93bikgcmV0dXJuIC1tb3Rpb25Eb3duO1xyXG4gICAgICByZXR1cm4gbW90aW9uVXA7XHJcbiAgIH1cclxuICAgXHJcblxyXG4gICBtaW5PdmVybGFwWFdpdGhCaWFzKG90aGVyOiBBQUJCLCBiaWFzOiBudW1iZXIpe1xyXG4gICAgICBpZihiaWFzIDwgMCkgcmV0dXJuIG90aGVyLnJpZ2h0IC0gdGhpcy5sZWZ0O1xyXG4gICAgICByZXR1cm4gLSh0aGlzLnJpZ2h0IC0gb3RoZXIubGVmdCk7XHJcblxyXG4gICB9XHJcbiAgIG1pbk92ZXJsYXBZV2l0aEJpYXMob3RoZXI6IEFBQkIsIGJpYXM6IG51bWJlcil7XHJcbiAgICAgIGlmKGJpYXMgPCAwKSByZXR1cm4gb3RoZXIuYm90dG9tIC0gdGhpcy50b3A7XHJcbiAgICAgIHJldHVybiAtKHRoaXMuYm90dG9tIC0gb3RoZXIudG9wKTtcclxuICAgfVxyXG5cclxuICAgc2V0KG90aGVyOiBBQUJCKXtcclxuICAgICAgdGhpcy5wb3NpdGlvbi5zZXQob3RoZXIucG9zaXRpb24pO1xyXG4gICAgICB0aGlzLnNpemUuc2V0KG90aGVyLnNpemUpO1xyXG4gICAgICB0aGlzLm9mZnNldC5zZXQob3RoZXIub2Zmc2V0KTtcclxuICAgfVxyXG5cclxuICAgY2xvbmUoKXtcclxuICAgICAgcmV0dXJuIG5ldyBBQUJCKHRoaXMucG9zaXRpb24uY2xvbmUoKSwgdGhpcy5zaXplLmNsb25lKCksIHRoaXMub2Zmc2V0LmNsb25lKCkpO1xyXG4gICB9XHJcblxyXG4gICBzdGF0aWMgQ3JlYXRlKHg6IG51bWJlciwgeTogbnVtYmVyLCB3OiBudW1iZXIsIGg6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBuZXcgQUFCQihuZXcgVmVjdG9yMih4LCB5KSwgbmV3IFZlY3RvcjIodywgaCkpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBDdXJ2ZSB9IGZyb20gXCJ1dGlsL0N1cnZlXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVmVjdG9yMntcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih4ID0gMCwgeSA9IDApe1xyXG4gICAgICB0aGlzLnggPSB4O1xyXG4gICAgICB0aGlzLnkgPSB5O1xyXG4gICB9XHJcblxyXG4gICBhZGQob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggKz0gb3RoZXIueDtcclxuICAgICAgdGhpcy55ICs9IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBzdWIob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggLT0gb3RoZXIueDtcclxuICAgICAgdGhpcy55IC09IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBtdWwob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggKj0gb3RoZXIueDtcclxuICAgICAgdGhpcy55ICo9IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBkaXYob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggLz0gb3RoZXIueDtcclxuICAgICAgdGhpcy55IC89IG90aGVyLnk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcztcclxuICAgfVxyXG4gICBzZXQob3RoZXI6IFZlY3RvcjIpe1xyXG4gICAgICB0aGlzLnggPSBvdGhlci54O1xyXG4gICAgICB0aGlzLnkgPSBvdGhlci55O1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuICAgc2V0WmVybygpe1xyXG4gICAgICB0aGlzLnggPSAwO1xyXG4gICAgICB0aGlzLnkgPSAwO1xyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIG5vcm1hbGl6ZSgpe1xyXG4gICAgICBsZXQgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XHJcblxyXG4gICAgICBpZihsZW5ndGggPiAwKXtcclxuICAgICAgICAgdGhpcy54IC89IGxlbmd0aDtcclxuICAgICAgICAgdGhpcy55IC89IGxlbmd0aDtcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBub3JtYWxpemVkKCl7XHJcbiAgICAgIHJldHVybiB0aGlzLmNsb25lKCkubm9ybWFsaXplKCk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBzcXJMZW5ndGgoKXtcclxuICAgICAgcmV0dXJuIFZlY3RvcjIuZG90KHRoaXMsIHRoaXMpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgbGVuZ3RoKCl7XHJcbiAgICAgIHJldHVybiBNYXRoLnNxcnQodGhpcy5zcXJMZW5ndGgpO1xyXG4gICB9XHJcblxyXG4gICBnZXQgYW5nbGUoKXtcclxuICAgICAgcmV0dXJuIE1hdGguYXRhbjIodGhpcy55LCB0aGlzLngpO1xyXG4gICB9XHJcblxyXG4gICBkaXN0YW5jZVRvKG90aGVyOiBWZWN0b3IyKXtcclxuICAgICAgcmV0dXJuIFZlY3RvcjIuZGlzdGFuY2UodGhpcywgb3RoZXIpO1xyXG4gICB9XHJcbiAgIGRpcmVjdGlvblRvKG90aGVyOiBWZWN0b3IyKXtcclxuICAgICAgcmV0dXJuIFZlY3RvcjIuZGlyZWN0aW9uKHRoaXMsIG90aGVyKTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGRpcmVjdGlvbihhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKXtcclxuICAgICAgcmV0dXJuIGIuY2xvbmUoKS5zdWIoYSk7XHJcbiAgIH1cclxuICAgXHJcbiAgIHN0YXRpYyBkaXN0YW5jZShhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKXtcclxuICAgICAgbGV0IGRpc3RYID0gYS54IC0gYi54O1xyXG4gICAgICBsZXQgZGlzdFkgPSBhLnkgLSBiLnk7XHJcblxyXG4gICAgICByZXR1cm4gTWF0aC5zcXJ0KGRpc3RYICogZGlzdFggKyBkaXN0WSAqIGRpc3RZKTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGxlcnAoYTogVmVjdG9yMiwgYjogVmVjdG9yMiwgZjogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIHRoaXMubGVycE91dChhLCBiLCBuZXcgVmVjdG9yMigpLCBmKTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGxlcnBPdXQoYTogVmVjdG9yMiwgYjogVmVjdG9yMiwgb3V0OiBWZWN0b3IyLCBmOiBudW1iZXIpe1xyXG4gICAgICBvdXQueCA9IEN1cnZlLmxlcnAoYS54LCBiLngsIGYpO1xyXG4gICAgICBvdXQueSA9IEN1cnZlLmxlcnAoYS55LCBiLnksIGYpO1xyXG4gICAgICBcclxuICAgICAgcmV0dXJuIG91dDtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGRvdChhOiBWZWN0b3IyLCBiOiBWZWN0b3IyKXtcclxuICAgICAgcmV0dXJuIGEueCAqIGIueCArIGEueSAqIGIueTtcclxuICAgfVxyXG5cclxuICAgc3RhdGljIGFuZ2xlZChhbmdsZTogbnVtYmVyKXtcclxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKE1hdGguY29zKGFuZ2xlKSwgTWF0aC5zaW4oYW5nbGUpKTtcclxuICAgfVxyXG5cclxuICAgY2xvbmUoKXtcclxuICAgICAgcmV0dXJuIG5ldyBWZWN0b3IyKHRoaXMueCwgdGhpcy55KTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBHcmFwaGljcyB9IGZyb20gXCJncmFwaGljcy9HcmFwaGljc1wiO1xyXG5pbXBvcnQgeyBHYW1lT2JqZWN0IH0gZnJvbSBcIi4vR2FtZU9iamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENvbXBvbmVudHtcclxuICAgZ2FtZSE6IEdhbWU7XHJcbiAgIGdhbWVPYmplY3QhOiBHYW1lT2JqZWN0O1xyXG5cclxuICAgaW5pdChnYW1lOiBHYW1lKXtcclxuICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICBcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICB9XHJcbiAgIGZpeGVkVXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdhbWUgfSBmcm9tIFwiZW5naW5lL0dhbWVcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIi4vQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNjZW5lIH0gZnJvbSBcIi4vU2NlbmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBHYW1lT2JqZWN0IHtcclxuICAgY29tcG9uZW50czogQ29tcG9uZW50W107XHJcbiAgIHNjZW5lITogU2NlbmU7XHJcblxyXG4gICBnYW1lITogR2FtZTtcclxuICAgaW5pdGlhbGl6ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xyXG4gICB9XHJcbiAgIFxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBpZih0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2gob2JqID0+IG9iai5pbml0KGdhbWUpKTtcclxuICAgfVxyXG5cclxuICAgZGVzdHJveSgpe1xyXG4gICAgICBpZighdGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG4gICAgICB0aGlzLmluaXRpYWxpemVkID0gZmFsc2U7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaChvYmogPT4gb2JqLmRlc3Ryb3koKSk7XHJcbiAgIH1cclxuXHJcbiAgIHVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2gob2JqID0+IG9iai51cGRhdGUoZGVsdGEpKTtcclxuICAgfVxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2gob2JqID0+IG9iai5maXhlZFVwZGF0ZShkZWx0YSkpO1xyXG4gICB9XHJcblxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcyl7XHJcbiAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKG9iaiA9PiBvYmouZHJhdyhncmFwaGljcykpO1xyXG4gICB9XHJcblxyXG4gICBhZGRDb21wb25lbnQ8VCBleHRlbmRzIENvbXBvbmVudD4oY29tcG9uZW50OiBUKXtcclxuICAgICAgdGhpcy5jb21wb25lbnRzLnB1c2goY29tcG9uZW50KTtcclxuICAgICAgY29tcG9uZW50LmdhbWVPYmplY3QgPSB0aGlzO1xyXG4gICAgICBcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybiBjb21wb25lbnQ7XHJcblxyXG4gICAgICBjb21wb25lbnQuaW5pdCh0aGlzLmdhbWUpO1xyXG5cclxuICAgICAgcmV0dXJuIGNvbXBvbmVudDtcclxuICAgfVxyXG5cclxuICAgcmVtb3ZlQ29tcG9uZW50KGNvbXBvbmVudDogQ29tcG9uZW50KXtcclxuICAgICAgbGV0IGlkeCA9IHRoaXMuY29tcG9uZW50cy5pbmRleE9mKGNvbXBvbmVudCk7XHJcblxyXG4gICAgICBpZihpZHggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmNvbXBvbmVudHMuc3BsaWNlKGlkeCwgMSk7XHJcbiAgICAgIFxyXG4gICAgICBpZighdGhpcy5pbml0aWFsaXplZCkgcmV0dXJuO1xyXG5cclxuICAgICAgY29tcG9uZW50LmRlc3Ryb3koKTtcclxuICAgfVxyXG5cclxuICAgZmluZENvbXBvbmVudChwcmVkaWNhdGU6IChjb21wb25lbnQ6IENvbXBvbmVudCkgPT4gYm9vbGVhbil7XHJcbiAgICAgIHJldHVybiB0aGlzLmNvbXBvbmVudHMuZmluZChwcmVkaWNhdGUpO1xyXG4gICB9XHJcbn0iLCJpbXBvcnQgeyBHYW1lIH0gZnJvbSBcImVuZ2luZS9HYW1lXCI7XHJcbmltcG9ydCB7IENhbWVyYSB9IGZyb20gXCJncmFwaGljcy9DYW1lcmFcIjtcclxuaW1wb3J0IHsgR3JhcGhpY3MgfSBmcm9tIFwiZ3JhcGhpY3MvR3JhcGhpY3NcIjtcclxuaW1wb3J0IHsgVGlsZU1hcCB9IGZyb20gXCJ0aWxlbWFwL1RpbGVNYXBcIjtcclxuaW1wb3J0IHsgR2FtZU9iamVjdCB9IGZyb20gXCIuL0dhbWVPYmplY3RcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTY2VuZXtcclxuICAgY2FtZXJhOiBDYW1lcmE7XHJcbiAgIGdhbWVPYmplY3RzOiBHYW1lT2JqZWN0W107XHJcbiAgIGdhbWUhOiBHYW1lO1xyXG4gICB0aWxlbWFwPzogVGlsZU1hcDtcclxuXHJcbiAgIGluaXRpYWxpemVkOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICB0aGlzLmNhbWVyYSA9IG5ldyBDYW1lcmEoKTtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cyA9IFtdO1xyXG4gICB9XHJcblxyXG4gICBpbml0KGdhbWU6IEdhbWUpe1xyXG4gICAgICBpZih0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5nYW1lID0gZ2FtZTtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouaW5pdChnYW1lKSk7XHJcbiAgIH1cclxuXHJcbiAgIGRlc3Ryb3koKXtcclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuICAgICAgdGhpcy5pbml0aWFsaXplZCA9IGZhbHNlO1xyXG5cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouZGVzdHJveSgpKTtcclxuICAgfVxyXG5cclxuICAgdXBkYXRlKGRlbHRhOiBudW1iZXIpe1xyXG4gICAgICB0aGlzLmdhbWVPYmplY3RzLmZvckVhY2gob2JqID0+IG9iai51cGRhdGUoZGVsdGEpKTtcclxuICAgfVxyXG4gICBmaXhlZFVwZGF0ZShkZWx0YTogbnVtYmVyKXtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouZml4ZWRVcGRhdGUoZGVsdGEpKTtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBncmFwaGljcy5zZXRDYW1lcmEodGhpcy5jYW1lcmEpO1xyXG5cclxuICAgICAgdGhpcy50aWxlbWFwPy5kcmF3KGdyYXBoaWNzKTtcclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5mb3JFYWNoKG9iaiA9PiBvYmouZHJhdyhncmFwaGljcykpO1xyXG4gICB9XHJcblxyXG4gICB1cGRhdGVTaXplKCl7XHJcbiAgICAgIGxldCBhc3AgPSB0aGlzLmdhbWUuY2FudmFzLndpZHRoIC8gdGhpcy5nYW1lLmNhbnZhcy5oZWlnaHQ7XHJcbiAgICAgIHRoaXMuY2FtZXJhLndpZHRoID0gdGhpcy5jYW1lcmEuaGVpZ2h0ICogYXNwO1xyXG4gICB9XHJcblxyXG4gICBhZGRHYW1lT2JqZWN0KG9iajogR2FtZU9iamVjdCl7XHJcbiAgICAgIHRoaXMuZ2FtZU9iamVjdHMucHVzaChvYmopO1xyXG4gICAgICBvYmouc2NlbmUgPSB0aGlzO1xyXG5cclxuICAgICAgaWYoIXRoaXMuaW5pdGlhbGl6ZWQpIHJldHVybjtcclxuXHJcbiAgICAgIG9iai5pbml0KHRoaXMuZ2FtZSk7XHJcbiAgIH1cclxuICAgXHJcbiAgIHJlbW92ZUdhbWVPYmplY3Qob2JqOiBHYW1lT2JqZWN0KXtcclxuICAgICAgbGV0IGlkeCA9IHRoaXMuZ2FtZU9iamVjdHMuaW5kZXhPZihvYmopO1xyXG5cclxuICAgICAgaWYoaWR4IDwgMCkgcmV0dXJuO1xyXG5cclxuICAgICAgdGhpcy5nYW1lT2JqZWN0cy5zcGxpY2UoaWR4LCAxKTtcclxuXHJcbiAgICAgIGlmKCF0aGlzLmluaXRpYWxpemVkKSByZXR1cm47XHJcblxyXG4gICAgICBvYmouZGVzdHJveSgpO1xyXG4gICB9XHJcblxyXG4gICBmaW5kT2JqZWN0KHByZWRpY2F0ZTogKGNvbXBvbmVudDogR2FtZU9iamVjdCkgPT4gYm9vbGVhbil7XHJcbiAgICAgIHJldHVybiB0aGlzLmdhbWVPYmplY3RzLmZpbmQocHJlZGljYXRlKTtcclxuICAgfVxyXG59IiwiaW1wb3J0IHsgR2FtZSB9IGZyb20gXCJlbmdpbmUvR2FtZVwiO1xyXG5pbXBvcnQgeyBBQUJCIH0gZnJvbSBcIm1hdGgvQUFCQlwiO1xyXG5pbXBvcnQgeyBWZWN0b3IyIH0gZnJvbSBcIm1hdGgvVmVjdG9yMlwiO1xyXG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwic2NlbmUvQ29tcG9uZW50XCI7XHJcbmltcG9ydCB7IFNpZ25hbCB9IGZyb20gXCJzaWduYWxzL1NpZ25hbFwiO1xyXG5pbXBvcnQgeyBUcmFuc2Zvcm0gfSBmcm9tIFwiLi9UcmFuc2Zvcm1cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBSaWdpZGJvZHkgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgIHRyYW5zZm9ybSE6IFRyYW5zZm9ybTtcclxuICAgdmVsb2NpdHk6IFZlY3RvcjIgPSBuZXcgVmVjdG9yMigpO1xyXG4gICBtYXNzOiBudW1iZXIgPSAxO1xyXG4gICBib3VuY3luZXNzOiBudW1iZXIgPSAwO1xyXG5cclxuICAgcHJldmlvdXNQb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcblxyXG4gICBjb2xsaWRlZExlZnQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgY29sbGlkZWRSaWdodDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjb2xsaWRlZFRvcDogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICBjb2xsaWRlZEJvdHRvbTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgc29saWQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgdXNlRHluYW1pY0NvbGxpc2lvbnM6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgIG9uQ29sbGlzaW9uOiBTaWduYWw8UmlnaWRib2R5PiA9IG5ldyBTaWduYWw8UmlnaWRib2R5PigpO1xyXG5cclxuICAgbG9jYWxBQUJCOiBBQUJCID0gbmV3IEFBQkIoKTtcclxuXHJcbiAgIGluaXQoZ2FtZTogR2FtZSl7XHJcbiAgICAgIHN1cGVyLmluaXQoZ2FtZSk7XHJcblxyXG4gICAgICB0aGlzLmdhbWUucGh5c2ljcy5hZGRCb2R5KHRoaXMpO1xyXG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IHRoaXMuZ2FtZU9iamVjdC5maW5kQ29tcG9uZW50KGMgPT4gYyBpbnN0YW5jZW9mIFRyYW5zZm9ybSkgYXMgVHJhbnNmb3JtO1xyXG4gICB9XHJcblxyXG4gICBkZXN0cm95KCl7XHJcbiAgICAgIHRoaXMuZ2FtZS5waHlzaWNzLnJlbW92ZUJvZHkodGhpcyk7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBib3VuZGluZ0JveCgpe1xyXG4gICAgICB0aGlzLmxvY2FsQUFCQi5wb3NpdGlvbi5zZXQodGhpcy50cmFuc2Zvcm0ucG9zaXRpb24pO1xyXG4gICAgICByZXR1cm4gdGhpcy5sb2NhbEFBQkI7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IFZlY3RvcjIgfSBmcm9tIFwibWF0aC9WZWN0b3IyXCI7XHJcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJzY2VuZS9Db21wb25lbnRcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmFuc2Zvcm0gZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgIHBvc2l0aW9uOiBWZWN0b3IyID0gbmV3IFZlY3RvcjIoKTtcclxuICAgXHJcbiAgIC8vIEludGVycG9sYXRlZCBwb3NpdGlvblxyXG4gICBpbnRlcnBvbGF0ZWRQb3NpdGlvbjogVmVjdG9yMiA9IG5ldyBWZWN0b3IyKCk7XHJcbn0iLCJleHBvcnQgY2xhc3MgU2lnbmFsPFQ+e1xyXG4gICBmdW5jdGlvbnM6ICgodHlwZTogVCkgPT4gdm9pZClbXTtcclxuXHJcbiAgIGNvbnN0cnVjdG9yKCl7XHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zID0gW107XHJcbiAgIH1cclxuXHJcbiAgIGxpc3RlbihmdW5jOiAodHlwZTogVCkgPT4gdm9pZCl7XHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zLnB1c2goZnVuYyk7XHJcbiAgIH1cclxuICAgcmVtb3ZlKGZ1bmM6ICh0eXBlOiBUKSA9PiB2b2lkKXtcclxuICAgICAgbGV0IGluZGV4ID0gdGhpcy5mdW5jdGlvbnMuaW5kZXhPZihmdW5jKTtcclxuICAgICAgaWYoaW5kZXggPCAwKSByZXR1cm47XHJcblxyXG4gICAgICB0aGlzLmZ1bmN0aW9ucy5zcGxpY2UoaW5kZXgpO1xyXG4gICB9XHJcblxyXG4gICBlbWl0KGV2ZW50IDogVCl7XHJcbiAgICAgIHRoaXMuZnVuY3Rpb25zLmZvckVhY2goZnVuYyA9PiBmdW5jKGV2ZW50KSk7XHJcbiAgIH1cclxufSIsImltcG9ydCB7IEdyYXBoaWNzIH0gZnJvbSBcImdyYXBoaWNzL0dyYXBoaWNzXCI7XHJcbmltcG9ydCB7IFNwcml0ZSwgU3ByaXRlU2hlZXQgfSBmcm9tIFwiZ3JhcGhpY3MvU3ByaXRlXCI7XHJcbmltcG9ydCB7IFRpbGVkTWFwLCBUaWxlZE9iamVjdCwgVGlsZWRPYmplY3RMYXllciwgVGlsZWRPYmplY3RMYXllclR5cGUsIFRpbGVkVGlsZUxheWVyLCBUaWxlZFRpbGVMYXllclR5cGUsIFRpbGVkVGlsZXNldCB9IGZyb20gXCIuL1RpbGVkTWFwXCI7XHJcblxyXG50eXBlIFRpbGVtYXBPYmplY3RMb2FkZXIgPSAob2JqZWN0OiBUaWxlZE9iamVjdCkgPT4gdm9pZDtcclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlbWFwTGF5ZXJ7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG4gICB0aWxlczogKFNwcml0ZXx1bmRlZmluZWQpW107XHJcblxyXG4gICBjb25zdHJ1Y3Rvcih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcblxyXG4gICAgICB0aGlzLnRpbGVzID0gW107XHJcblxyXG4gICAgICAvLyBsZW5ndGggc3R1ZmYuLi4gOicpXHJcbiAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB3aWR0aCAqIGhlaWdodDsgaSsrKSB0aGlzLnRpbGVzLnB1c2godW5kZWZpbmVkKTtcclxuICAgfVxyXG5cclxuICAgZ2V0VGlsZSh4OiBudW1iZXIsIHk6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiB0aGlzLnRpbGVzW3ggKyB5ICogdGhpcy53aWR0aF07XHJcbiAgIH1cclxuICAgc2V0VGlsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgc3ByaXRlOiBTcHJpdGUpe1xyXG4gICAgICB0aGlzLnRpbGVzW3ggKyB5ICogdGhpcy53aWR0aF0gPSBzcHJpdGU7XHJcbiAgIH1cclxuICAgc2V0VGlsZUZyb21JbmRleChpbmRleDogbnVtYmVyLCBzcHJpdGU6IFNwcml0ZSl7XHJcbiAgICAgIHRoaXMudGlsZXNbaW5kZXhdID0gc3ByaXRlO1xyXG4gICB9XHJcbiAgIFxyXG4gICBkcmF3KGdyYXBoaWNzOiBHcmFwaGljcywgdGlsZVdpZHRoOiBudW1iZXIsIHRpbGVIZWlnaHQ6IG51bWJlcil7XHJcbiAgICAgIGZvcihsZXQgeCA9IDA7IHggPCB0aGlzLndpZHRoOyB4Kyspe1xyXG4gICAgICAgICBmb3IobGV0IHkgPSAwOyB5IDwgdGhpcy5oZWlnaHQ7IHkrKyl7XHJcbiAgICAgICAgICAgIGxldCB0aWxlID0gdGhpcy5nZXRUaWxlKHgsIHkpO1xyXG4gICAgICAgICAgICBpZih0aWxlID09PSB1bmRlZmluZWQpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgZ3JhcGhpY3MuZHJhd1Nwcml0ZVNpbXBsZSh0aWxlLCB4ICogdGlsZVdpZHRoLCB5ICogdGlsZUhlaWdodCk7XHJcbiAgICAgICAgIH1cclxuICAgICAgfVxyXG4gICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBUaWxlTWFwIHtcclxuICAgd2lkdGg6IG51bWJlcjtcclxuICAgaGVpZ2h0OiBudW1iZXI7XHJcbiAgIHRpbGVXaWR0aDogbnVtYmVyO1xyXG4gICB0aWxlSGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICBiYWNrZ3JvdW5kQ29sb3I6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICBsYXllcnM6IFRpbGVtYXBMYXllcltdO1xyXG5cclxuICAgY29uc3RydWN0b3Iod2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIHRpbGVXaWR0aDogbnVtYmVyLCB0aWxlSGVpZ2h0OiBudW1iZXIpe1xyXG4gICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICB0aGlzLnRpbGVXaWR0aCA9IHRpbGVXaWR0aDtcclxuICAgICAgdGhpcy50aWxlSGVpZ2h0ID0gdGlsZUhlaWdodDtcclxuICAgICAgdGhpcy5sYXllcnMgPSBbXTtcclxuICAgfVxyXG5cclxuICAgZHJhdyhncmFwaGljczogR3JhcGhpY3Mpe1xyXG4gICAgICBncmFwaGljcy5zZXRDb2xvcih0aGlzLmJhY2tncm91bmRDb2xvcik7XHJcbiAgICAgIGdyYXBoaWNzLmRyYXdSZWN0YW5nbGUoMCwgMCwgdGhpcy53aWR0aCAqIHRoaXMudGlsZVdpZHRoLCB0aGlzLmhlaWdodCAqIHRoaXMudGlsZUhlaWdodCwgdHJ1ZSk7XHJcbiAgICAgIFxyXG4gICAgICB0aGlzLmxheWVycy5mb3JFYWNoKGxheWVyID0+IGxheWVyLmRyYXcoZ3JhcGhpY3MsIHRoaXMudGlsZVdpZHRoLCB0aGlzLnRpbGVIZWlnaHQpKTtcclxuICAgfVxyXG5cclxuICAgcHVibGljIHN0YXRpYyBmcm9tVGlsZWRNYXAobWFwOiBUaWxlZE1hcCwgbG9hZGVyOiBUaWxlbWFwT2JqZWN0TG9hZGVyKXtcclxuICAgICAgbGV0IHRpbGVtYXAgPSBuZXcgVGlsZU1hcChtYXAud2lkdGgsIG1hcC5oZWlnaHQsIG1hcC50aWxld2lkdGgsIG1hcC50aWxlaGVpZ2h0KTtcclxuXHJcbiAgICAgIHRpbGVtYXAuYmFja2dyb3VuZENvbG9yID0gbWFwLmJhY2tncm91bmRjb2xvcjtcclxuICAgICAgXHJcbiAgICAgIC8vIFRJTEVTRVRTXHJcbiAgICAgIGxldCB0aWxlc2V0czoge3NldDogVGlsZWRUaWxlc2V0LCBzaGVldDogU3ByaXRlU2hlZXR9W10gPSBbXTtcclxuICAgICAgbGV0IHRpbGVzOiB7IFtrZXk6IG51bWJlcl06IFNwcml0ZSB9ID0ge307XHJcbiAgICAgIFxyXG4gICAgICBtYXAudGlsZXNldHMuZm9yRWFjaChzZXQgPT4ge1xyXG4gICAgICAgICB0aWxlc2V0cy5wdXNoKHtcclxuICAgICAgICAgICAgc2V0OiBzZXQsXHJcbiAgICAgICAgICAgIHNoZWV0OiBTcHJpdGVTaGVldC5mcm9tSFRNTChzZXQubmFtZSlcclxuICAgICAgICAgfSk7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgY29uc29sZS5kaXIodGlsZXNldHMpO1xyXG5cclxuICAgICAgLy8gVElMRSBMQVlFUlNcclxuICAgICAgbWFwLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRUaWxlTGF5ZXJUeXBlKXtcclxuICAgICAgICAgICAgbGV0IHRpbGVMYXllciA9IGxheWVyIGFzIFRpbGVkVGlsZUxheWVyO1xyXG5cclxuICAgICAgICAgICAgbGV0IHRpbGVtYXBMYXllciA9IG5ldyBUaWxlbWFwTGF5ZXIodGlsZUxheWVyLndpZHRoLCB0aWxlTGF5ZXIuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aWxlTGF5ZXIuZGF0YS5sZW5ndGg7IGkrKyl7XHJcbiAgICAgICAgICAgICAgIGxldCB0aWxlSW5kZXggPSB0aWxlTGF5ZXIuZGF0YVtpXTtcclxuXHJcbiAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGlsZXNbdGlsZUluZGV4XTtcclxuICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgIC8vIEZpbmQgdGlsZVxyXG4gICAgICAgICAgICAgICBpZih0aWxlID09PSB1bmRlZmluZWQgJiYgdGlsZUluZGV4ICE9PSAwKXtcclxuICAgICAgICAgICAgICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRpbGVzZXRzLmxlbmd0aDsgaisrKXtcclxuICAgICAgICAgICAgICAgICAgICAgbGV0IHRpbGVzZXQgPSB0aWxlc2V0c1tqXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgIGlmKHRpbGVJbmRleCA+PSB0aWxlc2V0LnNldC5maXJzdGdpZCAmJiB0aWxlSW5kZXggPCB0aWxlc2V0LnNldC5maXJzdGdpZCArIHRpbGVzZXQuc2V0LnRpbGVjb3VudCl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpaSA9IHRpbGVJbmRleCAtIHRpbGVzZXQuc2V0LmZpcnN0Z2lkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgeCA9IGlpICUgdGlsZXNldC5zZXQuY29sdW1ucztcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHkgPSBNYXRoLmZsb29yKGlpIC8gdGlsZXNldC5zZXQuY29sdW1ucyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlID0gdGlsZXNldC5zaGVldC5nZXRTcHJpdGUoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHggKiB0aWxlc2V0LnNldC50aWxld2lkdGgsIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB5ICogdGlsZXNldC5zZXQudGlsZWhlaWdodCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVzZXQuc2V0LnRpbGV3aWR0aCwgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVzZXQuc2V0LnRpbGVoZWlnaHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgdGlsZXNbdGlsZUluZGV4XSA9IHRpbGU7XHJcbiAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgIHRpbGVtYXBMYXllci5zZXRUaWxlRnJvbUluZGV4KGksIHRpbGUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aWxlbWFwLmxheWVycy5wdXNoKHRpbGVtYXBMYXllcik7XHJcbiAgICAgICAgIH1cclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBPQkpFQ1QgTEFZRVJcclxuICAgICAgbWFwLmxheWVycy5mb3JFYWNoKGxheWVyID0+IHtcclxuICAgICAgICAgaWYobGF5ZXIudHlwZSA9PT0gVGlsZWRPYmplY3RMYXllclR5cGUpe1xyXG4gICAgICAgICAgICBsZXQgb2JqTGF5ZXIgPSBsYXllciBhcyBUaWxlZE9iamVjdExheWVyO1xyXG4gICAgICAgICAgICBvYmpMYXllci5vYmplY3RzLmZvckVhY2gobG9hZGVyKTtcclxuICAgICAgICAgfVxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIHJldHVybiB0aWxlbWFwO1xyXG4gICB9XHJcblxyXG4gICBwdWJsaWMgc3RhdGljIGFzeW5jIGZyb21UaWxlZE1hcERvd25sb2FkKGZpbGU6IHN0cmluZywgbG9hZGVyOiBUaWxlbWFwT2JqZWN0TG9hZGVyKXtcclxuICAgICAgbGV0IHJlc3VsdCA9IGF3YWl0IGZldGNoKGZpbGUpO1xyXG4gICAgICBsZXQgZCA9IGF3YWl0IHJlc3VsdC5qc29uKCk7XHJcblxyXG4gICAgICByZXR1cm4gdGhpcy5mcm9tVGlsZWRNYXAoZCBhcyBUaWxlZE1hcCwgbG9hZGVyKTtcclxuICAgfVxyXG59IiwiXHJcbmV4cG9ydCBjb25zdCBUaWxlZE9iamVjdExheWVyVHlwZSA9IFwib2JqZWN0Z3JvdXBcIjtcclxuZXhwb3J0IGNvbnN0IFRpbGVkVGlsZUxheWVyVHlwZSA9IFwidGlsZWxheWVyXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkTWFwIHtcclxuICAgd2lkdGg6IG51bWJlcjtcclxuICAgaGVpZ2h0OiBudW1iZXI7XHJcblxyXG4gICB0aWxld2lkdGg6IG51bWJlcjtcclxuICAgdGlsZWhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgYmFja2dyb3VuZGNvbG9yOiBzdHJpbmc7XHJcblxyXG4gICBsYXllcnM6IFRpbGVkTGF5ZXJbXTtcclxuICAgdGlsZXNldHM6IFRpbGVkVGlsZXNldFtdO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkTGF5ZXIge1xyXG4gICBpZDogbnVtYmVyO1xyXG4gICBcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcblxyXG4gICBuYW1lOiBzdHJpbmc7XHJcbiAgIHR5cGU6IHN0cmluZztcclxuXHJcbiAgIHZpc2libGU6IGJvb2xlYW47XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZFRpbGVMYXllciBleHRlbmRzIFRpbGVkTGF5ZXIge1xyXG4gICB3aWR0aDogbnVtYmVyO1xyXG4gICBoZWlnaHQ6IG51bWJlcjtcclxuICAgZGF0YTogbnVtYmVyW107XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBUaWxlZE9iamVjdExheWVyIGV4dGVuZHMgVGlsZWRMYXllcntcclxuICAgb2JqZWN0czogVGlsZWRPYmplY3RbXTtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkT2JqZWN0IHtcclxuICAgeDogbnVtYmVyO1xyXG4gICB5OiBudW1iZXI7XHJcbiAgIHdpZHRoOiBudW1iZXI7XHJcbiAgIGhlaWdodDogbnVtYmVyO1xyXG5cclxuICAgbmFtZTogc3RyaW5nO1xyXG4gICB0eXBlOiBzdHJpbmc7XHJcblxyXG4gICB2aXNpYmxlOiBib29sZWFuO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFRpbGVkVGlsZXNldCB7XHJcbiAgIG5hbWU6IHN0cmluZztcclxuXHJcbiAgIGZpcnN0Z2lkOiBudW1iZXI7XHJcbiAgIGltYWdlOiBzdHJpbmc7XHJcbiAgIFxyXG4gICBjb2x1bW5zOiBudW1iZXI7XHJcbiAgIHRpbGVjb3VudDogbnVtYmVyO1xyXG5cclxuICAgdGlsZXdpZHRoOiBudW1iZXI7XHJcbiAgIHRpbGVoZWlnaHQ6IG51bWJlcjtcclxufSIsImV4cG9ydCBjbGFzcyBDdXJ2ZXtcclxuICAgcHVibGljIHN0YXRpYyBsZXJwKGE6IG51bWJlciwgYjogbnVtYmVyLCBmOiBudW1iZXIpe1xyXG4gICAgICByZXR1cm4gYSArIChiIC0gYSkgKiBmO1xyXG4gICB9XHJcbiAgIHN0YXRpYyBsaW5lYXIoYTogbnVtYmVyLCBiOiBudW1iZXIsIGY6IG51bWJlcil7XHJcbiAgICAgIHJldHVybiBDdXJ2ZS5sZXJwKGEsYixmKTtcclxuICAgfVxyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIG5vdygpe1xyXG4gICBpZih3aW5kb3cucGVyZm9ybWFuY2Upe1xyXG4gICAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpIC8gMTAwMDtcclxuICAgfVxyXG4gICByZXR1cm4gRGF0ZS5ub3coKSAvIDEwMDA7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXQodGltZUluU2Vjb25kczogbnVtYmVyKXtcclxuICAgbGV0IHNlY29uZHMgPSBNYXRoLmZsb29yKHRpbWVJblNlY29uZHMpO1xyXG4gICBsZXQgbWlsbGlzID0gTWF0aC5mbG9vcigodGltZUluU2Vjb25kcyAlIDEpICogMTAwMCk7XHJcblxyXG4gICByZXR1cm4gKFwiXCIgKyBzZWNvbmRzKS5wYWRTdGFydCgyLCAnMCcpICsgXCI6XCIgKyAoXCJcIiArIG1pbGxpcykucGFkU3RhcnQoMywgJzAnKTtcclxufSJdLCJzb3VyY2VSb290IjoiIn0=