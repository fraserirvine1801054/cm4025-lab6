/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst config = {\n    env : \"development\" || 0,\n    port : process.env.PORT || 3000,\n    jwtSecret : process.env.JWT_SECRET || \"YOUR_secret_key\",\n    mongoUri : process.env.MONGODB_URI || \n        process.env.MONGO_HOST ||\n        'mongodb://' + (process.env.IP || '127.0.0.1') + \":\" +\n        (process.env.MONGO_PORT || '27017') + '/mydb/'\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);\n\n//# sourceURL=webpack://cm4025-lab6/./config/config.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/extend */ \"lodash/extend\");\n/* harmony import */ var lodash_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_extend__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n\n\n\n\nconst create = async (req,res) => {\n    const user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n    try {\n        await user.save();\n        return res.status(200).json({\n            message: \"Successfully signed up!\"\n        });\n    } catch (err) {\n        return res.status(400).json({\n            error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n        });\n    }\n}\n\nconst list = async (req,res) => {\n    try {\n        let users = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find().select('name email updated created');\n        res.json(users);\n    } catch (err) {\n        return res.status(400).json({\n            error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n        });\n    }\n}\n\nconst userByID = async (req,res,next,id) => {\n    try {\n        let user = await _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id);\n        if (!user) {\n            return res.status('400').json({\n                error: \"User not found\"\n            });\n        }\n        req.profile = user;\n        next();\n    } catch (err) {\n        return res.status('400').json({\n            error: \"Could not retrieve user\"\n        });\n    }\n}\n\nconst read = (req,res) => {\n    req.profile.hashed_password = undefined;\n    req.profile.salt = undefined;\n    return res.json(req.profile);\n}\n\nconst update = async (req,res) => {\n    try {\n        let user = req.profile;\n        user = lodash_extend__WEBPACK_IMPORTED_MODULE_1___default()(user, req.body);\n        user.updated = Date.now();\n        await user.save();\n        user.hashed_password = undefined;\n        user.salt = undefined;\n        res.json(user);\n    } catch (err) {\n        return res.status(400).json({\n            error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n        });\n    }\n}\n\nconst remove = async (req,res) => {\n    try {\n        let user = req.profile;\n        let deletedUser = await user.remove();\n        deletedUser.hashed_password = undefined;\n        deletedUser.salt = undefined;\n        res.json(deletedUser);\n    } catch (err) {\n        return res.status(400).json({\n            error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n        });\n    }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n    create,\n    userByID,\n    read,\n    list,\n    remove,\n    update\n});\n\n//# sourceURL=webpack://cm4025-lab6/./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n\n\n\n\n\n\n\n\n\n\nconst app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n\n//parse body params and attach them to the req.body\n\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_2___default().urlencoded({extended : true}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_4___default()());\n//secure apps by setting various http headers\napp.use(helmet__WEBPACK_IMPORTED_MODULE_6___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_5___default()());\n\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\n\napp.get('/', (req,res) => {\n    res.status(200).send((0,_template__WEBPACK_IMPORTED_MODULE_7__[\"default\"])());\n});\n\napp.use((err,req,res,next) => {\n    if (err.name === 'UnauthorizedError') {\n        res.status(401).json({\"error\" : err.name + \": \" + err.message});\n    } else if (err) {\n        res.status(400).json({\"error\" : err.name + \": \" + err.message});\n        console.log(err);\n    }\n});\n\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (app);\n\n//# sourceURL=webpack://cm4025-lab6/./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n\n\n/**\n * Get unique field name\n */\n\nconst getUniqueErrorMessage = (err) => {\n    let output;\n    try {\n        let fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n        output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + 'already exists';\n    } catch (ex) {\n        output = 'Unique field already exists';\n    }\n\n    return output\n}\n\n/**\n * Get the error message from error object\n */\n\nconst getErrorMessage = (err) => {\n    let message = \"\";\n\n    if (err.code) {\n        switch (err.code) {\n            case 11000:\n            case 11001:\n                message = getUniqueErrorMessage(err);\n                break;\n            default:\n                message = 'Something went wrong';\n        }\n    } else {\n        for (let errName in err.errors) {\n            if (err.errors[errName].message) message = err.errors[errName].message;\n        }\n    }\n    return message\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({getErrorMessage});\n\n//# sourceURL=webpack://cm4025-lab6/./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! crypto */ \"crypto\");\n/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_1__);\n\n\n\nconst UserSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    name: {\n        type: String,\n        trim: true,\n        required: 'Name is required'\n    },\n    email: {\n        index: true,\n        type: String,\n        trim: true,\n        unique: true,\n        match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n        required: 'Email is required'\n    },\n    hashed_password: {\n        type: String,\n        required: \"Password is required\"\n    },\n    salt: String,\n    updated: Date,\n    created: {\n        type: Date,\n        default: Date.now\n    }\n});\n\n\n\nUserSchema.virtual('password').set(function(password){\n    this._password = password;\n    this.salt = this.makeSalt();\n    this.hashed_password = this.encryptPassword(password);\n}).get(function(){\n    return this._password;\n});\n\nUserSchema.methods = {\n    authenticate: function(plainText) {\n        return this.encryptPassword(plainText) === this.hashed_password;\n    },\n    encryptPassword: function(password){\n        if (!password) return \"\";\n        try {\n            return crypto__WEBPACK_IMPORTED_MODULE_1___default().createHmac('sha1', this.salt).update(password).digest('hex');\n        } catch (err) {\n            return \"\";\n        }\n    },\n    makeSalt: function() {\n        return Math.round((new Date().valueOf() * Math.random())) + \"\";\n    }\n}\n\nUserSchema.path('hashed_password').validate(function(v){\n    if (this._password && this._password.length < 6) {\n        this.invalidate('password', 'Password must be at least 6 characters.');\n    }\n    if (this.isNew && !this._password) {\n        this.invalidate('password', 'Password is required');\n    }\n}, null);\n\nconst userModel = mongoose__WEBPACK_IMPORTED_MODULE_0___default().model('User', UserSchema);\nuserModel.createIndexes();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userModel);\n\n//# sourceURL=webpack://cm4025-lab6/./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n\n\n\nconst router = express__WEBPACK_IMPORTED_MODULE_0___default().Router();\n\nrouter.route('/api/users')\n    .get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list)\n    .post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\n\nrouter.route('/api/users/:userId')\n    .get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read)\n    .put(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update)\n    .delete(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\n\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://cm4025-lab6/./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n//connection URL\n(mongoose__WEBPACK_IMPORTED_MODULE_2___default().Promise) = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {dbName:\"users\"});\nmongoose__WEBPACK_IMPORTED_MODULE_2___default().connection.on('error', err => {\n    throw new Error(`unable to connect to database: ${_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri}` + err);\n});\n\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, (err) => {\n    console.info('Database is at %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri);\n    if (err) {\n        console.log(err);\n    }\n    console.info('Server started on port %s.',_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\n\n\n\n//# sourceURL=webpack://cm4025-lab6/./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (() => {\n    return `<!doctype html>\n    <html lang=\"en\">\n        <head>\n            <meta charset=\"utf-8\">\n            <title> Lab Six </title>\n        </head>\n        <body style=\"margin:0\">\n            <div id=\"root\">Hello World </div>\n        </body>\n    </html>`\n});\n\n//# sourceURL=webpack://cm4025-lab6/./template.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("body-parser");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("compression");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("helmet");

/***/ }),

/***/ "lodash/extend":
/*!********************************!*\
  !*** external "lodash/extend" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("lodash/extend");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;