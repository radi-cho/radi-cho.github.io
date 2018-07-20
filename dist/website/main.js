(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- The content below is only a placeholder and can be replaced. -->\r\n<div style=\"text-align:center\">\r\n    <greeting></greeting>\r\n    <h2>\r\n        This plase is still in development. For now take a look at my\r\n        <a href=\"http://github.com/radi-cho\">GitHub account</a>\r\n        .\r\n    </h2>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = "Radostin Cholakov";
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/greeting/greeting.component */ "./src/app/components/greeting/greeting.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _components_greeting_greeting_component__WEBPACK_IMPORTED_MODULE_3__["GreetingComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/greeting/greeting.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/greeting/greeting.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".greeting-container {\r\n  position: relative;\r\n  height: 65vh;\r\n  padding-top: 35vh;\r\n  min-height: 430px;\r\n  transition: all 1.5s ease-out;\r\n  background: linear-gradient(50deg, #96fbc4, #f9f586, #57f2cc, #8fd3f4, #fed6e3, #fddb92, #84fab0);\r\n  background-size: 600% 600%;\r\n  -webkit-animation: BackgroundAnimation 120s ease infinite;\r\n  animation: BackgroundAnimation 120s ease infinite;\r\n  text-align: center;\r\n}\r\n\r\n.greeting-title {\r\n  background: rgba(255, 255, 255, 0.7);\r\n  padding: 10px 0;\r\n  margin: 0 auto;\r\n  width: 90vw;\r\n  border-radius: 10vw;\r\n\r\n  position: relative;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n          user-select: none;\r\n  -wbekit-user-select: none;\r\n  -ms-user-select: none;\r\n}\r\n\r\n#title-text {\r\n  transition: opacity 0.5s ease-out;\r\n  font-size: 9vw;\r\n  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;\r\n}\r\n\r\n.navigation-arrow-container {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 30px;\r\n  right: 25%;\r\n  left: 50%;\r\n  margin-left: -50%;\r\n  transition: all 0.7s ease-out;\r\n}\r\n\r\n.navigation-arrow-container > div {\r\n  display: inline-block;\r\n  padding: 30px;\r\n  padding-top: 25px;\r\n  background: rgba(255, 255, 255, 0.5);\r\n  border: 1px dashed grey;\r\n  border-radius: 120%;\r\n  cursor: pointer;\r\n}\r\n\r\n.triangle-icon {\r\n  display: inline-block;\r\n  border: solid rgba(65, 130, 130, 0.8);\r\n  border-width: 0 7px 7px 0;\r\n  padding: 15px;\r\n\r\n  transform: rotate(45deg);\r\n  -webkit-transform: rotate(45deg);\r\n}\r\n\r\n@-webkit-keyframes BackgroundAnimation {\r\n  0% {\r\n    background-position: 0% 50%;\r\n  }\r\n  50% {\r\n    background-position: 100% 50%;\r\n  }\r\n  100% {\r\n    background-position: 0% 50%;\r\n  }\r\n}\r\n\r\n@keyframes BackgroundAnimation {\r\n  0% {\r\n    background-position: 0% 50%;\r\n  }\r\n  50% {\r\n    background-position: 100% 50%;\r\n  }\r\n  100% {\r\n    background-position: 0% 50%;\r\n  }\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/greeting/greeting.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/greeting/greeting.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div\n    class=\"greeting-container\"\n    [ngStyle]=\"{ 'opacity': containerOpacity }\"\n>\n    <div class=\"greeting-title\">\n        <span\n            id=\"title-text\"\n            [ngStyle]=\"{ 'opacity': textOpacity }\"\n        >\n            {{ greeting.title }}\n        </span>\n    </div>\n    <div\n        class=\"navigation-arrow-container\"\n        [ngStyle]=\"{ 'bottom': triangleBottomPosition + 'px' }\"\n    >\n        <div (click)=\"scroll(scrollTarget)\">\n            <i class=\"triangle-icon\"></i>\n        </div>\n    </div>\n</div>\n<span #scrollTarget></span>\n"

/***/ }),

/***/ "./src/app/components/greeting/greeting.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/greeting/greeting.component.ts ***!
  \***********************************************************/
/*! exports provided: GreetingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GreetingComponent", function() { return GreetingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ "./src/app/utils/constants.ts");
/* harmony import */ var _utils_methods__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils/methods */ "./src/app/utils/methods.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

// Import greetings data

// greetings - array with multiple greetings

// Greeting - interface which contains the data (title & index) types of a greeting
var GreetingComponent = /** @class */ (function () {
    function GreetingComponent() {
        var _this = this;
        this.greeting = Object(_utils_methods__WEBPACK_IMPORTED_MODULE_2__["getGreeting"])(0, _utils_constants__WEBPACK_IMPORTED_MODULE_1__["shorFirstName"]);
        this.name = _utils_constants__WEBPACK_IMPORTED_MODULE_1__["fullName"];
        this.containerOpacity = 0;
        this.textOpacity = 1;
        this.triangleBottomPosition = 100;
        this.updateGreeting = function () {
            _this.textOpacity = 0;
            var index = (_this.greeting.index + 1) % _utils_constants__WEBPACK_IMPORTED_MODULE_1__["greetings"].length;
            var newGreeting = Object(_utils_methods__WEBPACK_IMPORTED_MODULE_2__["getGreeting"])(index, _utils_constants__WEBPACK_IMPORTED_MODULE_1__["shorFirstName"]);
            setTimeout(function () {
                _this.greeting = newGreeting;
                _this.textOpacity = 1;
            }, 520);
        };
    }
    GreetingComponent.prototype.scroll = function (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    GreetingComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(this.updateGreeting, 2100);
        setInterval(function () {
            _this.triangleBottomPosition = _this.triangleBottomPosition === 100 ? 110 : 100;
        }, 1000);
        setTimeout(function () {
            _this.containerOpacity = 1;
        }, 100);
    };
    GreetingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'greeting',
            template: __webpack_require__(/*! ./greeting.component.html */ "./src/app/components/greeting/greeting.component.html"),
            styles: [__webpack_require__(/*! ./greeting.component.css */ "./src/app/components/greeting/greeting.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], GreetingComponent);
    return GreetingComponent;
}());



/***/ }),

/***/ "./src/app/utils/constants.ts":
/*!************************************!*\
  !*** ./src/app/utils/constants.ts ***!
  \************************************/
/*! exports provided: greetings, fullName, shorFirstName */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "greetings", function() { return greetings; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fullName", function() { return fullName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "shorFirstName", function() { return shorFirstName; });
var greetings = ['Hello', 'Hi', 'Greetings', 'Welcome', 'Bonjour'];
var fullName = 'Radostin Cholakov';
var shorFirstName = 'Radi';


/***/ }),

/***/ "./src/app/utils/methods.ts":
/*!**********************************!*\
  !*** ./src/app/utils/methods.ts ***!
  \**********************************/
/*! exports provided: getGreeting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGreeting", function() { return getGreeting; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/app/utils/constants.ts");

var getGreeting = function (index, name) {
    var greeting = _constants__WEBPACK_IMPORTED_MODULE_0__["greetings"][index] + ", I'm " + name + "!";
    return { title: greeting, index: index };
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\radi-cho.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map