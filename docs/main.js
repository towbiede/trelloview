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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _private_private_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./private/private.component */ "./src/app/private/private.component.ts");
/* harmony import */ var _public_public_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./public/public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _private_private_routes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./private/private.routes */ "./src/app/private/private.routes.ts");
/* harmony import */ var _private_private_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./private/private.guard */ "./src/app/private/private.guard.ts");
/* harmony import */ var _public_public_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./public/public.guard */ "./src/app/public/public.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: 'private', canActivate: [_private_private_guard__WEBPACK_IMPORTED_MODULE_5__["PrivateGuard"]], component: _private_private_component__WEBPACK_IMPORTED_MODULE_2__["PrivateComponent"], children: _private_private_routes__WEBPACK_IMPORTED_MODULE_4__["PRIV_ROUTES"] },
    { path: '', canActivate: [_public_public_guard__WEBPACK_IMPORTED_MODULE_6__["PublicGuard"]], component: _public_public_component__WEBPACK_IMPORTED_MODULE_3__["PublicComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            // declarations: []
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

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
        this.title = 'TrelloView';
        /**
         * public apiKey = '4c96a328e7ea9b34311ac6dade4d0b8d';
         * private apiToken = '20b32bb9f9a12cb3d431232af241f628dbe5e661d340630928153984cc6b81ea';
         * */
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _trello_service_trello_service_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trello-service/trello-service.module */ "./src/app/trello-service/trello-service.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _private_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./private/dashboard/dashboard.component */ "./src/app/private/dashboard/dashboard.component.ts");
/* harmony import */ var _private_details_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./private/details/details.component */ "./src/app/private/details/details.component.ts");
/* harmony import */ var _private_visual_visual_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./private/visual/visual.component */ "./src/app/private/visual/visual.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _private_private_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./private/private.component */ "./src/app/private/private.component.ts");
/* harmony import */ var _public_public_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./public/public.component */ "./src/app/public/public.component.ts");
/* harmony import */ var _public_public_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./public/public.guard */ "./src/app/public/public.guard.ts");
/* harmony import */ var _private_private_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./private/private.guard */ "./src/app/private/private.guard.ts");
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
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _private_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _private_details_details_component__WEBPACK_IMPORTED_MODULE_6__["DetailsComponent"],
                _private_visual_visual_component__WEBPACK_IMPORTED_MODULE_7__["VisualComponent"],
                _private_private_component__WEBPACK_IMPORTED_MODULE_9__["PrivateComponent"],
                _public_public_component__WEBPACK_IMPORTED_MODULE_10__["PublicComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _trello_service_trello_service_module__WEBPACK_IMPORTED_MODULE_3__["TrelloServiceModule"]
            ],
            providers: [_private_private_guard__WEBPACK_IMPORTED_MODULE_12__["PrivateGuard"], _public_public_guard__WEBPACK_IMPORTED_MODULE_11__["PublicGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/private/dashboard/dashboard.component.html":
/*!************************************************************!*\
  !*** ./src/app/private/dashboard/dashboard.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container color-dark\">\n  <button (click)=\"logout()\">\n    Logout again?\n  </button>\n  <div class=\"col\">\n    <p>My active Boards on Trello</p>\n  </div>\n  <div class=\"col\">\n    <p>Add a new Board</p>\n  </div>\n</div>\n<div class=\"container color-light\">\n  <div class=\"col\">\n    <ul class=\"board-list-container\">\n      <li  *ngFor=\"let board of boards\" (click)=\"getListsByBoardId(board.id)\">\n        {{ board.name }}\n      </li>\n    </ul>\n  </div>\n  <div class=\"col\">\n    <p class=\"sm\">  You can use this form to add a new Trello-Card to your selected Board.\n                    Simply click on a Board of to Boardlist to show your current Cards.</p>\n    <hr>\n    <ul class=\"card-list-container\">\n      <li  *ngFor=\"let list of lists\">\n        <input type=\"radio\" id=\"{{list.id}}\" value=\"{{list.name}}\">\n        <label for=\"{{list.id}}\"> &nbsp; {{list.name}} </label>\n      </li>\n    </ul>\n\n    <form>\n      <hr>\n      <p class=\"sm\">  Insert the name of your new card in the textbox below and click\n                      on the green button to finally add your card to the selected board.</p>\n\n      <input type=\"text\" class=\"txt\" name=\"card\" placeholder=\"Name of your card..\">\n      <input type=\"submit\" class=\"btn\" value=\"Add Card\">\n    </form>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/private/dashboard/dashboard.component.scss":
/*!************************************************************!*\
  !*** ./src/app/private/dashboard/dashboard.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\n  display: -ms-grid;\n  display: grid;\n  -ms-grid-columns: 50% auto;\n      grid-template-columns: 50% auto; }\n\n.col {\n  padding: .4em 1.3em; }\n\n.color-dark {\n  background: #2885C4; }\n\n.color-light {\n  background: #57B3F1; }\n\ninput.txt {\n  border: 0;\n  padding: 1em;\n  width: 80%;\n  margin-bottom: 2em; }\n\ninput.btn {\n  border: 0;\n  display: block;\n  padding: 1em 3em;\n  background: #A5F883;\n  color: #003A61;\n  margin-bottom: 1em;\n  cursor: pointer; }\n\n.board-list-container {\n  list-style: none; }\n\n.board-list-container li {\n  background: #3FA0E1;\n  padding: .5em;\n  margin-top: 10px;\n  cursor: pointer; }\n\n.board-list-container li:hover {\n  background: #78bcea; }\n\n.card-list-container {\n  list-style: none; }\n"

/***/ }),

/***/ "./src/app/private/dashboard/dashboard.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/private/dashboard/dashboard.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trello_service_trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../trello-service/trello-auth/trello-auth.service */ "./src/app/trello-service/trello-auth/trello-auth.service.ts");
/* harmony import */ var _trello_service_trello_api_trello_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../trello-service/trello-api/trello.service */ "./src/app/trello-service/trello-api/trello.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(http, trelloAuthService, trelloService) {
        this.http = http;
        this.trelloAuthService = trelloAuthService;
        this.trelloService = trelloService;
        /**private apiURL = 'https://api.trello.com/1/members/me/boards?key=' + this.apiKey + '&token=' + this.apiToken;*/
        this.data = {};
    }
    DashboardComponent.prototype.getBoards = function () {
        var _this = this;
        return this.http.get('https://api.trello.com/1/members/me/boards').subscribe(function (data) {
            _this.boards = data;
        });
    };
    DashboardComponent.prototype.getCardsByBoardId = function (boardId) {
        var _this = this;
        this.bId = boardId;
        var getCardsUrl = 'https://api.trello.com/1/boards/' + this.bId + '/cards';
        return this.http.get(getCardsUrl).subscribe(function (data) {
            _this.cards = data;
        });
    };
    DashboardComponent.prototype.getListsByBoardId = function (boardId) {
        var _this = this;
        this.bId = boardId;
        var getListsUrl = 'https://api.trello.com/1/boards/' + this.bId + '/lists';
        return this.http.get(getListsUrl).subscribe(function (data) {
            _this.lists = data;
        });
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.getBoards();
    };
    DashboardComponent.prototype.logout = function () {
        this.trelloAuthService.logout();
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/private/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/private/dashboard/dashboard.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _trello_service_trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_1__["TrelloAuthService"], _trello_service_trello_api_trello_service__WEBPACK_IMPORTED_MODULE_2__["TrelloService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/private/details/details.component.html":
/*!********************************************************!*\
  !*** ./src/app/private/details/details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  details works!\n</p>\n"

/***/ }),

/***/ "./src/app/private/details/details.component.scss":
/*!********************************************************!*\
  !*** ./src/app/private/details/details.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/private/details/details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/private/details/details.component.ts ***!
  \******************************************************/
/*! exports provided: DetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsComponent", function() { return DetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _trello_service_trello_api_trello_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../trello-service/trello-api/trello.service */ "./src/app/trello-service/trello-api/trello.service.ts");
/* harmony import */ var _trello_service_trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../trello-service/trello-auth/trello-auth.service */ "./src/app/trello-service/trello-auth/trello-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var DetailsComponent = /** @class */ (function () {
    function DetailsComponent(http, trelloAuthService, trelloService) {
        this.http = http;
        this.trelloAuthService = trelloAuthService;
        this.trelloService = trelloService;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    DetailsComponent.prototype.logout = function () {
        this.trelloAuthService.logout();
    };
    DetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details',
            template: __webpack_require__(/*! ./details.component.html */ "./src/app/private/details/details.component.html"),
            styles: [__webpack_require__(/*! ./details.component.scss */ "./src/app/private/details/details.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _trello_service_trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_3__["TrelloAuthService"], _trello_service_trello_api_trello_service__WEBPACK_IMPORTED_MODULE_2__["TrelloService"]])
    ], DetailsComponent);
    return DetailsComponent;
}());



/***/ }),

/***/ "./src/app/private/private.component.html":
/*!************************************************!*\
  !*** ./src/app/private/private.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navigation bar of our root app component -->\n\n<nav>\n  <a routerLink=\"\">Dashboard</a>\n  <a routerLink=\"details\">Details</a>\n  <a routerLink=\"visual\">Visual</a>\n</nav>\n\n<!--\nUsually we're nesting the different components into our root like this:\n\n<app-dashboard></app-dashboard>\n<app-details></app-details>\n<app-visual></app-visual>\n\nBut for now we don't need this anymore because we'er using the routing module\nto switch between our different components with the navigation bar on our site.\n-->\n\n<!-- Router outlet shows you the component you navigated through 'routerLink' -->\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/private/private.component.scss":
/*!************************************************!*\
  !*** ./src/app/private/private.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/private/private.component.ts":
/*!**********************************************!*\
  !*** ./src/app/private/private.component.ts ***!
  \**********************************************/
/*! exports provided: PrivateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateComponent", function() { return PrivateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PrivateComponent = /** @class */ (function () {
    function PrivateComponent() {
    }
    PrivateComponent.prototype.ngOnInit = function () {
    };
    PrivateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-private',
            template: __webpack_require__(/*! ./private.component.html */ "./src/app/private/private.component.html"),
            styles: [__webpack_require__(/*! ./private.component.scss */ "./src/app/private/private.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PrivateComponent);
    return PrivateComponent;
}());



/***/ }),

/***/ "./src/app/private/private.guard.ts":
/*!******************************************!*\
  !*** ./src/app/private/private.guard.ts ***!
  \******************************************/
/*! exports provided: PrivateGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrivateGuard", function() { return PrivateGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trello_service_trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trello-service/trello-auth/trello-auth.service */ "./src/app/trello-service/trello-auth/trello-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PrivateGuard = /** @class */ (function () {
    function PrivateGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    PrivateGuard.prototype.canActivate = function () {
        var authToken = this.authService.getToken();
        if (authToken) {
            return true;
        }
        else {
            this.router.navigate(['/']);
            return false;
        }
    };
    PrivateGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _trello_service_trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_2__["TrelloAuthService"]])
    ], PrivateGuard);
    return PrivateGuard;
}());



/***/ }),

/***/ "./src/app/private/private.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/private/private.routes.ts ***!
  \*******************************************/
/*! exports provided: PRIV_ROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRIV_ROUTES", function() { return PRIV_ROUTES; });
/* harmony import */ var _visual_visual_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./visual/visual.component */ "./src/app/private/visual/visual.component.ts");
/* harmony import */ var _details_details_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details/details.component */ "./src/app/private/details/details.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/private/dashboard/dashboard.component.ts");



var PRIV_ROUTES = [
    {
        path: '',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"]
    },
    {
        path: 'details',
        component: _details_details_component__WEBPACK_IMPORTED_MODULE_1__["DetailsComponent"]
    },
    {
        path: 'visual',
        component: _visual_visual_component__WEBPACK_IMPORTED_MODULE_0__["VisualComponent"]
    }
];


/***/ }),

/***/ "./src/app/private/visual/visual.component.html":
/*!******************************************************!*\
  !*** ./src/app/private/visual/visual.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  visual works!\n</p>\n"

/***/ }),

/***/ "./src/app/private/visual/visual.component.scss":
/*!******************************************************!*\
  !*** ./src/app/private/visual/visual.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/private/visual/visual.component.ts":
/*!****************************************************!*\
  !*** ./src/app/private/visual/visual.component.ts ***!
  \****************************************************/
/*! exports provided: VisualComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisualComponent", function() { return VisualComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trello_service_trello_api_trello_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../trello-service/trello-api/trello.service */ "./src/app/trello-service/trello-api/trello.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _trello_service_trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../trello-service/trello-auth/trello-auth.service */ "./src/app/trello-service/trello-auth/trello-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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




var VisualComponent = /** @class */ (function () {
    function VisualComponent(http, trelloAuthService, trelloService) {
        this.http = http;
        this.trelloAuthService = trelloAuthService;
        this.trelloService = trelloService;
    }
    VisualComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    VisualComponent.prototype.logout = function () {
        this.trelloAuthService.logout();
    };
    VisualComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-visual',
            template: __webpack_require__(/*! ./visual.component.html */ "./src/app/private/visual/visual.component.html"),
            styles: [__webpack_require__(/*! ./visual.component.scss */ "./src/app/private/visual/visual.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _trello_service_trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_3__["TrelloAuthService"], _trello_service_trello_api_trello_service__WEBPACK_IMPORTED_MODULE_1__["TrelloService"]])
    ], VisualComponent);
    return VisualComponent;
}());



/***/ }),

/***/ "./src/app/public/public.component.html":
/*!**********************************************!*\
  !*** ./src/app/public/public.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  public works!\n</p>\n"

/***/ }),

/***/ "./src/app/public/public.component.scss":
/*!**********************************************!*\
  !*** ./src/app/public/public.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/public/public.component.ts":
/*!********************************************!*\
  !*** ./src/app/public/public.component.ts ***!
  \********************************************/
/*! exports provided: PublicComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicComponent", function() { return PublicComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trello_service_trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trello-service/trello-auth/trello-auth.service */ "./src/app/trello-service/trello-auth/trello-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PublicComponent = /** @class */ (function () {
    function PublicComponent(authService) {
        this.authService = authService;
    }
    PublicComponent.prototype.ngOnInit = function () {
        this.login();
    };
    PublicComponent.prototype.login = function () {
        this.authService.login();
    };
    PublicComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-public',
            template: __webpack_require__(/*! ./public.component.html */ "./src/app/public/public.component.html"),
            styles: [__webpack_require__(/*! ./public.component.scss */ "./src/app/public/public.component.scss")]
        }),
        __metadata("design:paramtypes", [_trello_service_trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_1__["TrelloAuthService"]])
    ], PublicComponent);
    return PublicComponent;
}());



/***/ }),

/***/ "./src/app/public/public.guard.ts":
/*!****************************************!*\
  !*** ./src/app/public/public.guard.ts ***!
  \****************************************/
/*! exports provided: PublicGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PublicGuard", function() { return PublicGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trello_service_trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trello-service/trello-auth/trello-auth.service */ "./src/app/trello-service/trello-auth/trello-auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PublicGuard = /** @class */ (function () {
    function PublicGuard(router, authService) {
        this.router = router;
        this.authService = authService;
    }
    PublicGuard.prototype.canActivate = function () {
        if (this.authService.getToken()) {
            this.router.navigate(['private']);
            return false;
        }
        else {
            return true;
        }
    };
    PublicGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _trello_service_trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_2__["TrelloAuthService"]])
    ], PublicGuard);
    return PublicGuard;
}());



/***/ }),

/***/ "./src/app/trello-service/set-token/set-token.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/trello-service/set-token/set-token.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  set-token works!\n</p>\n"

/***/ }),

/***/ "./src/app/trello-service/set-token/set-token.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/trello-service/set-token/set-token.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/trello-service/set-token/set-token.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/trello-service/set-token/set-token.component.ts ***!
  \*****************************************************************/
/*! exports provided: SetTokenComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SetTokenComponent", function() { return SetTokenComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trello-auth/trello-auth.service */ "./src/app/trello-service/trello-auth/trello-auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Probs to JM097, HdM-Stuttgart
 * Great work, ty! */
var SetTokenComponent = /** @class */ (function () {
    function SetTokenComponent(router, authService, aRoute) {
        this.router = router;
        this.authService = authService;
        this.aRoute = aRoute;
    }
    SetTokenComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.fragSubscription = this.aRoute.fragment.subscribe(function (fragment) {
            if (fragment) {
                _this.token = fragment.slice(6);
                _this.authService.setToken(_this.token);
                console.log(_this.authService.getToken());
                _this.router.navigate(['/']);
            }
            else {
                _this.router.navigate(['/']);
            }
        });
    };
    SetTokenComponent.prototype.ngOnDestroy = function () {
        this.fragSubscription.unsubscribe();
    };
    SetTokenComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-set-token',
            template: __webpack_require__(/*! ./set-token.component.html */ "./src/app/trello-service/set-token/set-token.component.html"),
            styles: [__webpack_require__(/*! ./set-token.component.scss */ "./src/app/trello-service/set-token/set-token.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_1__["TrelloAuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], SetTokenComponent);
    return SetTokenComponent;
}());



/***/ }),

/***/ "./src/app/trello-service/trello-api/token-interceptor.ts":
/*!****************************************************************!*\
  !*** ./src/app/trello-service/trello-api/token-interceptor.ts ***!
  \****************************************************************/
/*! exports provided: TokenInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenInterceptor", function() { return TokenInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../trello-auth/trello-auth.service */ "./src/app/trello-service/trello-auth/trello-auth.service.ts");
/* harmony import */ var rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/observable/throw */ "./node_modules/rxjs-compat/_esm5/observable/throw.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * This interceptor adds your api key and the users trello auth token to every http request.
 * Watch out: when you make http calls to other origin then trello you'll leak your users private
 * token. Then you'll need to add a url check in the intercept method!
 * */
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(trelloAuthService) {
        this.trelloAuthService = trelloAuthService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var token = this.trelloAuthService.getToken();
        if (!token) {
            return Object(rxjs_observable_throw__WEBPACK_IMPORTED_MODULE_2__["_throw"])('Couldn\'t connect to Trello API since no token was provided!');
        }
        request = request.clone({
            setParams: {
                token: this.trelloAuthService.getToken(),
                key: this.trelloAuthService.apiKey,
            }
        });
        return next.handle(request);
    };
    TokenInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_1__["TrelloAuthService"]])
    ], TokenInterceptor);
    return TokenInterceptor;
}());



/***/ }),

/***/ "./src/app/trello-service/trello-api/trello.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/trello-service/trello-api/trello.service.ts ***!
  \*************************************************************/
/*! exports provided: TrelloService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrelloService", function() { return TrelloService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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


var TrelloService = /** @class */ (function () {
    function TrelloService(httpClient) {
        this.httpClient = httpClient;
    }
    TrelloService.prototype.getMe = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, this.httpClient.get('https://api.trello.com/1/members/me').toPromise()];
            });
        });
    };
    TrelloService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TrelloService);
    return TrelloService;
}());



/***/ }),

/***/ "./src/app/trello-service/trello-auth/trello-auth.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/trello-service/trello-auth/trello-auth.service.ts ***!
  \*******************************************************************/
/*! exports provided: TrelloAuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrelloAuthService", function() { return TrelloAuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _trello_storage_key__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trello-storage-key */ "./src/app/trello-service/trello-auth/trello-storage-key.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
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



var TrelloAuthService = /** @class */ (function () {
    function TrelloAuthService(router) {
        this.router = router;
        this.apiKey = '9dc8960d3015fee5599a539e20a2d91d';
        this.token = localStorage.getItem(_trello_storage_key__WEBPACK_IMPORTED_MODULE_2__["TRELLO_STORAGE_KEY"]);
    }
    TrelloAuthService.prototype.getToken = function () {
        return localStorage.getItem(_trello_storage_key__WEBPACK_IMPORTED_MODULE_2__["TRELLO_STORAGE_KEY"]);
    };
    TrelloAuthService.prototype.setToken = function (token) {
        return localStorage.setItem(_trello_storage_key__WEBPACK_IMPORTED_MODULE_2__["TRELLO_STORAGE_KEY"], token);
    };
    TrelloAuthService.prototype.deleteToken = function () {
        localStorage.removeItem(_trello_storage_key__WEBPACK_IMPORTED_MODULE_2__["TRELLO_STORAGE_KEY"]);
    };
    TrelloAuthService.prototype.login = function () {
        window.location.href = this.assembleUrl();
    };
    TrelloAuthService.prototype.assembleUrl = function () {
        var returnUrl = encodeURI(window.location.href + 'set-token');
        console.log(this.apiKey);
        return 'https://trello.com/1/authorize?response_type=token&key=' + this.apiKey +
            '&return_url=' + returnUrl +
            '&callback_method=fragment&scope=read&expiration=never&name=Angular-TrelloView-App';
    };
    /**
     * Logout, guards are responsible to redirect
     */
    TrelloAuthService.prototype.logout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localStorage.removeItem(_trello_storage_key__WEBPACK_IMPORTED_MODULE_2__["TRELLO_STORAGE_KEY"]);
                        return [4 /*yield*/, this.router.navigate(['/'])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    TrelloAuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], TrelloAuthService);
    return TrelloAuthService;
}());



/***/ }),

/***/ "./src/app/trello-service/trello-auth/trello-storage-key.ts":
/*!******************************************************************!*\
  !*** ./src/app/trello-service/trello-auth/trello-storage-key.ts ***!
  \******************************************************************/
/*! exports provided: TRELLO_STORAGE_KEY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRELLO_STORAGE_KEY", function() { return TRELLO_STORAGE_KEY; });
/**
 * The key under which the Trello API token is stored in LocalStorage. */
var TRELLO_STORAGE_KEY = 'token';


/***/ }),

/***/ "./src/app/trello-service/trello-service.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/trello-service/trello-service.module.ts ***!
  \*********************************************************/
/*! exports provided: TrelloServiceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TrelloServiceModule", function() { return TrelloServiceModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _set_token_set_token_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./set-token/set-token.component */ "./src/app/trello-service/set-token/set-token.component.ts");
/* harmony import */ var _trello_api_token_interceptor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trello-api/token-interceptor */ "./src/app/trello-service/trello-api/token-interceptor.ts");
/* harmony import */ var _trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./trello-auth/trello-auth.service */ "./src/app/trello-service/trello-auth/trello-auth.service.ts");
/* harmony import */ var _trello_api_trello_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trello-api/trello.service */ "./src/app/trello-service/trello-api/trello.service.ts");
/* harmony import */ var _trello_service_routing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./trello-service.routing */ "./src/app/trello-service/trello-service.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var TrelloServiceModule = /** @class */ (function () {
    function TrelloServiceModule() {
    }
    TrelloServiceModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _trello_service_routing__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"]
            ],
            declarations: [_set_token_set_token_component__WEBPACK_IMPORTED_MODULE_3__["SetTokenComponent"]],
            providers: [{ provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"], useClass: _trello_api_token_interceptor__WEBPACK_IMPORTED_MODULE_4__["TokenInterceptor"], multi: true }, _trello_auth_trello_auth_service__WEBPACK_IMPORTED_MODULE_5__["TrelloAuthService"], _trello_api_trello_service__WEBPACK_IMPORTED_MODULE_6__["TrelloService"]]
        })
    ], TrelloServiceModule);
    return TrelloServiceModule;
}());



/***/ }),

/***/ "./src/app/trello-service/trello-service.routing.ts":
/*!**********************************************************!*\
  !*** ./src/app/trello-service/trello-service.routing.ts ***!
  \**********************************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _set_token_set_token_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./set-token/set-token.component */ "./src/app/trello-service/set-token/set-token.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [
    { path: 'set-token', component: _set_token_set_token_component__WEBPACK_IMPORTED_MODULE_2__["SetTokenComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


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

module.exports = __webpack_require__(/*! /Users/Toby/Development/Angular/trelloview/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map