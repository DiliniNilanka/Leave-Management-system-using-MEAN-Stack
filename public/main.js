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

/***/ "./src/app/MyService/data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/MyService/data.service.ts ***!
  \*******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
    }
    DataService.prototype.registerUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/register", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.NewL = function (l) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/newleave", l, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.getUserProfile = function (user_data) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/getprofile", user_data, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.loginUser = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/login", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.serchLeaveByDate = function (details) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/searchleave", details, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.UserL = function (uL) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/userleave", uL, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.PendingLeave = function (uL) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/userpendingleave", uL, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.fetchToken = function () {
        var token = localStorage.getItem("tokenid");
        this.authtoken = token;
    };
    DataService.prototype.storeData = function (token, userdata) {
        localStorage.setItem("tokenid", token);
        localStorage.setItem("user", JSON.stringify(userdata));
        this.authtoken = token;
        this.user = userdata;
    };
    DataService.prototype.getUser = function () {
        var detail = localStorage.getItem("user");
        this.userdetail = detail;
        return this.userdetail;
    };
    DataService.prototype.logout = function () {
        this.authtoken = null;
        this.user = null;
        localStorage.clear();
    };
    DataService.prototype.viewPending = function (user) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.post("http://localhost:3000/user/home", user, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.display = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/user/home", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.approveleave = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/user/leaveapprove", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.leavereject = function () {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.get("http://localhost:3000/user/leavereject", { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.sendName = function (name) {
        this.logName = name;
    };
    DataService.prototype.getName = function () {
        return this.logName;
    };
    DataService.prototype.sendEmail = function (email) {
        this.email = email;
    };
    DataService.prototype.getEmail = function () {
        return this.email;
    };
    DataService.prototype.sendReg = function (reg) {
        this.user_reg = reg;
    };
    DataService.prototype.getReg = function () {
        return this.user_reg;
    };
    DataService.prototype.sendC = function (c_l) {
        this.casual = c_l;
    };
    DataService.prototype.getC = function () {
        return this.casual;
    };
    DataService.prototype.sendS = function (s_l) {
        this.sick = s_l;
    };
    DataService.prototype.getS = function () {
        return this.sick;
    };
    DataService.prototype.sendR = function (r) {
        this.r_n = r;
    };
    DataService.prototype.getR = function () {
        return this.r_n;
    };
    DataService.prototype.LeaveApprove = function (updateL) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("http://localhost:3000/user/approvL", updateL, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService.prototype.LeaveReject = function (rejectL) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        headers.append('Content-Type', 'application/json');
        return this.http.put("http://localhost:3000/user/rejectL", rejectL, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res.json(); }));
    };
    DataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DataService);
    return DataService;
}());



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

module.exports = "<app-navbar></app-navbar>\n<div class=\"container\">\n\t<app-alerts></app-alerts>\n\t<router-outlet></router-outlet>\n</div>\n\n\n"

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
        this.title = 'app';
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/register/register.component */ "./src/app/components/register/register.component.ts");
/* harmony import */ var _MyService_data_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./MyService/data.service */ "./src/app/MyService/data.service.ts");
/* harmony import */ var _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/profile/profile.component */ "./src/app/components/profile/profile.component.ts");
/* harmony import */ var _components_getleave_getleave_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/getleave/getleave.component */ "./src/app/components/getleave/getleave.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_leaveapprove_leaveapprove_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/leaveapprove/leaveapprove.component */ "./src/app/components/leaveapprove/leaveapprove.component.ts");
/* harmony import */ var _components_get_new_leave_get_new_leave_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/get-new-leave/get-new-leave.component */ "./src/app/components/get-new-leave/get-new-leave.component.ts");
/* harmony import */ var _approved_rejected_leave_approved_rejected_leave_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./approved-rejected-leave/approved-rejected-leave.component */ "./src/app/approved-rejected-leave/approved-rejected-leave.component.ts");
/* harmony import */ var _components_rejectleave_rejectleave_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/rejectleave/rejectleave.component */ "./src/app/components/rejectleave/rejectleave.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





//import { FlashMessageModule } from 'angular-flash-message';













var applicationRoutes = [
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"] },
    { path: 'register', component: _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"] },
    { path: 'myprofile', component: _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"] },
    { path: 'getleave', component: _components_getleave_getleave_component__WEBPACK_IMPORTED_MODULE_12__["GetleaveComponent"] },
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"] },
    { path: 'newl', component: _components_get_new_leave_get_new_leave_component__WEBPACK_IMPORTED_MODULE_15__["GetNewLeaveComponent"] },
    { path: 'leaveapprove', component: _components_leaveapprove_leaveapprove_component__WEBPACK_IMPORTED_MODULE_14__["LeaveapproveComponent"] },
    { path: 'approverejectLeave', component: _approved_rejected_leave_approved_rejected_leave_component__WEBPACK_IMPORTED_MODULE_16__["ApprovedRejectedLeaveComponent"] },
    { path: 'leavereject', component: _components_rejectleave_rejectleave_component__WEBPACK_IMPORTED_MODULE_17__["RejectleaveComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_7__["NavbarComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                _components_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                _components_profile_profile_component__WEBPACK_IMPORTED_MODULE_11__["ProfileComponent"],
                _components_getleave_getleave_component__WEBPACK_IMPORTED_MODULE_12__["GetleaveComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_13__["HomeComponent"],
                _components_leaveapprove_leaveapprove_component__WEBPACK_IMPORTED_MODULE_14__["LeaveapproveComponent"],
                _components_get_new_leave_get_new_leave_component__WEBPACK_IMPORTED_MODULE_15__["GetNewLeaveComponent"],
                _approved_rejected_leave_approved_rejected_leave_component__WEBPACK_IMPORTED_MODULE_16__["ApprovedRejectedLeaveComponent"],
                _components_rejectleave_rejectleave_component__WEBPACK_IMPORTED_MODULE_17__["RejectleaveComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(applicationRoutes),
                //FlashMessageModule
                angular_alert_module__WEBPACK_IMPORTED_MODULE_5__["AlertsModule"].forRoot()
            ],
            providers: [_MyService_data_service__WEBPACK_IMPORTED_MODULE_10__["DataService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/approved-rejected-leave/approved-rejected-leave.component.css":
/*!*******************************************************************************!*\
  !*** ./src/app/approved-rejected-leave/approved-rejected-leave.component.css ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/approved-rejected-leave/approved-rejected-leave.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/approved-rejected-leave/approved-rejected-leave.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<legend>Leave Summary</legend><br>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">email</th>\n      <th scope=\"col\">Leave Start</th>\n      <th scope=\"col\">Leave End</th>\n      <th scope=\"col\">Leave Type</th>\n      <th scope=\"col\">Comment</th>\n      <th scope=\"col\">State</th>\n      <th></th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let l of leave\">\n      <th>{{l.email}}</th>\n      <th>{{l.lstart}}</th>\n      <td>{{l.lend}}</td>\n      <td>{{l.type}}</td>\n      <td>{{l.comment}}</td>\n      <td>{{l.state}}</td>\n    </tr>\n  </tbody>\n</table>\n</div>"

/***/ }),

/***/ "./src/app/approved-rejected-leave/approved-rejected-leave.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/approved-rejected-leave/approved-rejected-leave.component.ts ***!
  \******************************************************************************/
/*! exports provided: ApprovedRejectedLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApprovedRejectedLeaveComponent", function() { return ApprovedRejectedLeaveComponent; });
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

var ApprovedRejectedLeaveComponent = /** @class */ (function () {
    function ApprovedRejectedLeaveComponent() {
    }
    ApprovedRejectedLeaveComponent.prototype.ngOnInit = function () {
    };
    ApprovedRejectedLeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-approved-rejected-leave',
            template: __webpack_require__(/*! ./approved-rejected-leave.component.html */ "./src/app/approved-rejected-leave/approved-rejected-leave.component.html"),
            styles: [__webpack_require__(/*! ./approved-rejected-leave.component.css */ "./src/app/approved-rejected-leave/approved-rejected-leave.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApprovedRejectedLeaveComponent);
    return ApprovedRejectedLeaveComponent;
}());



/***/ }),

/***/ "./src/app/components/get-new-leave/get-new-leave.component.css":
/*!**********************************************************************!*\
  !*** ./src/app/components/get-new-leave/get-new-leave.component.css ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/get-new-leave/get-new-leave.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/components/get-new-leave/get-new-leave.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" id=\"dev1\">\n<form (submit)=\"getLeaveData()\">\n  <legend>Request for New Leave</legend><hr>\n  <div class=\"form-group\">\n    <label for=\"leavestart\">Leave Start</label>\n    <input type=\"date\" class=\"form-control\" name=\"lstart\" [(ngModel)]=\"lstart\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"leaveend\">Leave End</label>\n    <input type=\"date\" class=\"form-control\" name=\"lend\" [(ngModel)]=\"lend\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"numofdays\">number Of days</label>\n    <input type=\"number\" class=\"form-control\" name=\"days\" [(ngModel)]=\"days\">\n  </div>\n  <fieldset class=\"form-group\">\n    <label for=\"leavetype\">Leave Type</label>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input type=\"radio\" class=\"form-check-input\" name=\"ltype\" [(ngModel)]=\"ltype\" value=\"casual\" checked>\n        Casual Leave\n      </label>\n    </div>\n    <div class=\"form-check\">\n    <label class=\"form-check-label\">\n        <input type=\"radio\" class=\"form-check-input\" name=\"ltype\" [(ngModel)]=\"ltype\" value=\"sick\">\n        Sick Leave\n      </label>\n    </div>\n  </fieldset>\n  <div class=\"form-group\">\n    <label for=\"exampleTextarea\">Comments</label>\n    <textarea class=\"form-control\" type=\"text\" name=\"comment\" [(ngModel)]=\"comment\"  rows=\"3\"></textarea>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Request Leave</button>\n</form>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/get-new-leave/get-new-leave.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/components/get-new-leave/get-new-leave.component.ts ***!
  \*********************************************************************/
/*! exports provided: GetNewLeaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetNewLeaveComponent", function() { return GetNewLeaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _MyService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MyService/data.service */ "./src/app/MyService/data.service.ts");
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


//import {FlashMessage} from 'angular-flash-message';

var GetNewLeaveComponent = /** @class */ (function () {
    function GetNewLeaveComponent(dataService, 
    //private flashMessage: FlashMessage
    router) {
        this.dataService = dataService;
        this.router = router;
    }
    GetNewLeaveComponent.prototype.ngOnInit = function () {
    };
    GetNewLeaveComponent.prototype.getLeaveData = function () {
        var _this = this;
        var l = {
            reg_no: this.dataService.getR(),
            email: this.dataService.getName(),
            lstart: this.lstart,
            lend: this.lend,
            ltype: this.ltype,
            comment: this.comment,
            available_casual: this.dataService.getC(),
            available_sick: this.dataService.getS(),
            days: this.days
        };
        this.dataService.NewL(l).subscribe(function (res) {
            _this.router.navigate(['/myprofile']);
        });
    };
    GetNewLeaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-get-new-leave',
            template: __webpack_require__(/*! ./get-new-leave.component.html */ "./src/app/components/get-new-leave/get-new-leave.component.html"),
            styles: [__webpack_require__(/*! ./get-new-leave.component.css */ "./src/app/components/get-new-leave/get-new-leave.component.css")]
        }),
        __metadata("design:paramtypes", [_MyService_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], GetNewLeaveComponent);
    return GetNewLeaveComponent;
}());



/***/ }),

/***/ "./src/app/components/getleave/getleave.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/getleave/getleave.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/getleave/getleave.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/getleave/getleave.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"container\" id=\"dev1\">\n<form (submit)=\"leaveData()\">\n  <legend>Request for Leave</legend><hr>\n  <div class=\"form-group\">\n    <label for=\"leavestart\">Leave Start</label>\n    <input type=\"date\" class=\"form-control\" name=\"leavestart\" [(ngModel)]=\"leavestart\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"leaveend\">Leave End</label>\n    <input type=\"date\" class=\"form-control\" name=\"leaveend\" [(ngModel)]=\"leaveend\">\n  </div>\n  <fieldset class=\"form-group\">\n    <label for=\"leavetype\">Leave Type</label>\n    <div class=\"form-check\">\n      <label class=\"form-check-label\">\n        <input type=\"radio\" class=\"form-check-input\" name=\"leavetype\" [(ngModel)]=\"leavetype\" value=\"option1\" checked>\n        type1\n      </label>\n    </div>\n    <div class=\"form-check\">\n    <label class=\"form-check-label\">\n        <input type=\"radio\" class=\"form-check-input\" name=\"leavetype\" [(ngModel)]=\"leavetype\" value=\"option2\">\n        type2\n      </label>\n    </div>\n    <div class=\"form-check disabled\">\n    <label class=\"form-check-label\">\n        <input type=\"radio\" class=\"form-check-input\" name=\"leavetype\" [(ngModel)]=\"leavetype\" value=\"option3\" >\n        type3\n      </label>\n    </div>\n  </fieldset>\n  <div class=\"form-group\">\n    <label for=\"exampleTextarea\">Comments</label>\n    <textarea class=\"form-control\" type=\"text\" name=\"comment\" [(ngModel)]=\"comment\"  rows=\"3\"></textarea>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">Request Leave</button>\n</form>\n</div>\n"

/***/ }),

/***/ "./src/app/components/getleave/getleave.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/getleave/getleave.component.ts ***!
  \***********************************************************/
/*! exports provided: GetleaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetleaveComponent", function() { return GetleaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _MyService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MyService/data.service */ "./src/app/MyService/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetleaveComponent = /** @class */ (function () {
    function GetleaveComponent(dataService, router, alerts) {
        this.dataService = dataService;
        this.router = router;
        this.alerts = alerts;
    }
    GetleaveComponent.prototype.ngOnInit = function () {
        this.user_name = this.dataService.getName();
        this.user_email = this.dataService.getEmail();
    };
    GetleaveComponent.prototype.leaveData = function () {
        var leave = {
            userid: this.user_email,
            name: this.user_name,
            leavestart: this.leavestart,
            leaveend: this.leaveend,
            leavetype: this.leavetype,
            comment: this.comment
        };
    };
    GetleaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-getleave',
            template: __webpack_require__(/*! ./getleave.component.html */ "./src/app/components/getleave/getleave.component.html"),
            styles: [__webpack_require__(/*! ./getleave.component.css */ "./src/app/components/getleave/getleave.component.css")]
        }),
        __metadata("design:paramtypes", [_MyService_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertsService"]])
    ], GetleaveComponent);
    return GetleaveComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/home/home.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/home/home.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div>\n<legend>Leave Summary</legend><br>\n<table class=\"table table-bordered\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Leave Start</th>\n      <th scope=\"col\">Leave End</th>\n      <th scope=\"col\">Days</th>\n      <th scope=\"col\">Leave Type</th>\n      <th scope=\"col\">Reason</th>\n      <th scope=\"col\">Available Casual</th>\n      <th scope=\"col\">Available Sick</th>\n      <!--<th scope=\"col\">State</th>-->\n      <th scope=\"col\">To Approve</th>\n      <th scope=\"col\">To Reject</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let l of leave\">\n      <th>{{l.name}}</th>\n      <th>{{l.lstart}}</th>\n      <th>{{l.lend}}</th>\n      <th>{{l.days}}</th>\n      <th>{{l.ltype}}</th>\n      <th>{{l.comment}}</th>\n      <th>{{l.available_casual}}</th>\n      <th>{{l.available_sick}}</th>\n      <!--<th>{{l.state}}</th>-->\n      <th>\n        <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"onClickMe(l)\">Approve</button>\n      </th>\n      <th>\n        <button type=\"button\" class=\"btn btn-secondary btn-sm\" (click)=\"forReject(l)\">Reject</button>\n      </th>\n      \n    </tr>\n  </tbody>\n</table>\n</div>"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _MyService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MyService/data.service */ "./src/app/MyService/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_alert_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angular-alert-module */ "./node_modules/angular-alert-module/fesm5/alerts.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {FlashMessage} from 'angular-flash-message';


var HomeComponent = /** @class */ (function () {
    function HomeComponent(dataService, 
    //private flashMessage: FlashMessage
    router, alerts) {
        this.dataService = dataService;
        this.router = router;
        this.alerts = alerts;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        var user = {
            emai: this.dataService.getEmail(),
            name: this.dataService.getName()
        };
        this.dataService.viewPending(user).subscribe(function (res) {
            console.log(res);
            _this.leave = res;
        });
    };
    HomeComponent.prototype.onClickMe = function (l) {
        var _this = this;
        this.c_l_o = l.available_casual;
        this.s_l_o = l.available_sick;
        this.ltypeU = l.ltype;
        this.days = l.days;
        console.log(this.days);
        if (this.ltypeU == "sick") {
            //this.s_l=this.s_l_o - this.days;
            console.log(this.s_l);
            console.log(this.s_l);
        }
        if (this.ltypeU == "casual") {
            //this.c_l = this.c_l_o - this.days;
            console.log(this.c_l);
        }
        var updateL = {
            id: l._id,
            ltype: l.ltype,
            reg_no: l.reg_no,
            c_l: this.c_l,
            s_l: this.s_l
        };
        console.log(updateL);
        this.dataService.LeaveApprove(updateL).subscribe(function (res) {
            _this.router.navigate(['/leaveapprove']);
        });
    };
    HomeComponent.prototype.forReject = function (l) {
        var _this = this;
        var rejectL = {
            id: l._id
        };
        this.dataService.LeaveReject(rejectL).subscribe(function (res) {
            _this.router.navigate(['/leavereject']);
        });
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [_MyService_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            angular_alert_module__WEBPACK_IMPORTED_MODULE_3__["AlertsService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/leaveapprove/leaveapprove.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/leaveapprove/leaveapprove.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "a {\r\n    text-decoration: none;\r\n    display: inline-block;\r\n    padding: 8px 16px;\r\n}\r\n\r\na:hover {\r\n    background-color: #ddd;\r\n    color: black;\r\n}\r\n\r\n.previous {\r\n    background-color: #f1f1f1;\r\n    color: black;\r\n}\r\n\r\n.next {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n}\r\n\r\n.round {\r\n    border-radius: 50%;\r\n}"

/***/ }),

/***/ "./src/app/components/leaveapprove/leaveapprove.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/components/leaveapprove/leaveapprove.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n<legend>Leave Summary</legend><br>\n\n<div>\n  <form class=\"form-inline my-2 my-lg-0\" (submit)=\"SearchLeave()\">\n\n      <button class=\"btn btn-secondary mr-sm-2\" (click)=\"goBack()\">Back</button>\n      \n      <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search by date\" name=\"date\" [(ngModel)]=\"date\">\n      <button class=\"btn btn-secondary my-2 my-sm-0\" type=\"submit\">Search</button>\n  </form>\n</div>\n  <br>\n  <!--<div ng-hide>\n    <table class=\"table\">\n      <tr class=\"table-success\">\n      <th scope=\"col\">Email</th>\n      <th scope=\"col\">Leave Start</th>\n      <th scope=\"col\">Leave End</th>\n      <th scope=\"col\">Leave Type</th>\n      <th scope=\"col\">Comment</th>\n      <th scope=\"col\">State</th>\n    </tr>\n\n    </table>\n  </div>-->\n<div>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Leave Start</th>\n      <th scope=\"col\">Leave End</th>\n      <th scope=\"col\">Leave Type</th>\n      <th scope=\"col\">Reason</th>\n      <th scope=\"col\">Approved Date</th>\n      \n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let l of leave\">\n      <th>{{l.name}}</th>\n      <th>{{l.lstart}}</th>\n      <td>{{l.lend}}</td>\n      <td>{{l.ltype}}</td>\n      <td>{{l.comment}}</td>\n      <td>{{l.app_day}}</td>\n      \n    </tr>\n  </tbody>\n</table>\n</div>"

/***/ }),

/***/ "./src/app/components/leaveapprove/leaveapprove.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/leaveapprove/leaveapprove.component.ts ***!
  \*******************************************************************/
/*! exports provided: LeaveapproveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveapproveComponent", function() { return LeaveapproveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _MyService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MyService/data.service */ "./src/app/MyService/data.service.ts");
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



var LeaveapproveComponent = /** @class */ (function () {
    function LeaveapproveComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    LeaveapproveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.approveleave().subscribe(function (res) {
            _this.leave = res;
            console.log(_this.leave);
        });
    };
    LeaveapproveComponent.prototype.SearchLeave = function () {
        var _this = this;
        console.log("Button click");
        var details = {
            date: this.date
        };
        console.log(details);
        this.dataService.serchLeaveByDate(details).subscribe(function (res) {
            console.log(res);
            _this.leave = res;
        });
    };
    LeaveapproveComponent.prototype.goBack = function () {
        var _this = this;
        this.dataService.approveleave().subscribe(function (res) {
            _this.leave = res;
            console.log(_this.leave);
        });
    };
    LeaveapproveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-leaveapprove',
            template: __webpack_require__(/*! ./leaveapprove.component.html */ "./src/app/components/leaveapprove/leaveapprove.component.html"),
            styles: [__webpack_require__(/*! ./leaveapprove.component.css */ "./src/app/components/leaveapprove/leaveapprove.component.css")]
        }),
        __metadata("design:paramtypes", [_MyService_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LeaveapproveComponent);
    return LeaveapproveComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/login/login.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/login/login.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"loginUser()\">\n  <fieldset>\n    <legend>Login</legend>\n    <div class=\"form-group\" style=\"width: 400px\" >\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"email\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\" style=\"width: 400px\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </fieldset>\n</form>\n\n"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _MyService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MyService/data.service */ "./src/app/MyService/data.service.ts");
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



var LoginComponent = /** @class */ (function () {
    function LoginComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.loginUser = function () {
        var _this = this;
        var user = {
            email: this.email,
            password: this.password
        };
        this.dataService.loginUser(user).subscribe(function (res) {
            if (res.state) {
                //console.log(res.user.email);
                _this.n = res.user.name;
                _this.e = res.user.email;
                _this.u_id = res.user.reg_no;
                _this.c_l = res.user.casualleave;
                _this.s_l = res.user.sickleave;
                _this.reg = res.user.reg_no;
                console.log(_this.s_l);
                _this.dataService.sendR(_this.reg);
                _this.dataService.sendName(_this.n);
                _this.dataService.sendEmail(_this.e);
                _this.dataService.sendReg(_this.u_id);
                _this.dataService.sendC(_this.c_l);
                _this.dataService.sendS(_this.s_l);
                _this.dataService.storeData(res.token, res.user);
                _this.router.navigate(['/myprofile']);
            }
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/components/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_MyService_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\n  <a class=\"navbar-brand\" href=\"#\">Leave Management System</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarColor02\" aria-controls=\"navbarColor02\" aria-expanded=\"false\" aria-label=\"Toggle navigation\" style=\"\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarColor02\">\n    <ul class=\"nav navbar-nav navbar-right\">\n       <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" [routerLink]=\"['/register']\">Register</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" href=\"#\" (click)=\"logoutUser()\">Logout</a>\n      </li>\n     </ul>\n  </div>\n</nav>-->\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n    <div class=\"navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2\">\n        <ul class=\"navbar-nav mr-auto\">\n            <a class=\"navbar-brand\" href=\"#\">Leave Management System</a>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/home']\">Home</a>\n            </li>\n            <!--<li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/getleave']\">Get Leave</a>\n            </li>-->\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/newl']\">New Leave</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/leaveapprove']\">Approved Leaves</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/leavereject']\">Rejected Leaves</a>\n            </li>\n        </ul>\n    </div>\n    <div class=\"mx-auto order-0\">\n    </div>\n    <div class=\"navbar-collapse collapse w-100 order-3 dual-collapse2\">\n        <ul class=\"navbar-nav ml-auto\">\n            <li class=\"nav-item\">\n                <a class=\"nav-link\">Report</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/register']\">Add User</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" [routerLink]=\"['/login']\">Login</a>\n            </li>\n            <li class=\"nav-item\">\n                <a class=\"nav-link\" href=\"#\" (click)=\"logoutUser()\">Logout</a>\n            </li>\n        </ul>\n    </div>\n</nav>"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _MyService_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../MyService/data.service */ "./src/app/MyService/data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(router, dataService) {
        this.router = router;
        this.dataService = dataService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.logoutUser = function () {
        this.dataService.logout();
        this.router.navigate(['/login']);
        return false;
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"],
            _MyService_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/profile/profile.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/profile/profile.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n/* Style the body */\r\nbody {\r\n    font-family: Arial;\r\n    margin: 0;\r\n}\r\n/* Header/logo Title */\r\n.header {\r\n    padding: 80px;\r\n    text-align: center;\r\n    background: #1abc9c;\r\n    color: white;\r\n}\r\n/* Increase the font size of the heading */\r\n.header h1 {\r\n    font-size: 40px;\r\n}\r\n.row { /* IE10 */\r\n    display: flex; /* IE10 */\r\n    flex-wrap: wrap;\r\n}\r\n/* Create two unequal columns that sits next to each other */\r\n/* Sidebar/left column */\r\n.side { /* IE10 */\r\n    flex: 30%;\r\n    background-color: white/*#f1f1f1*/;\r\n    padding: 20px;\r\n}\r\n/* Main column */\r\n.main { /* IE10 */\r\n    flex: 70%;\r\n    background-color:white;\r\n    padding: 20px;\r\n}\r\n@media screen and (max-width: 700px) {\r\n    .row {   \r\n        flex-direction: column;\r\n    }\r\n}\r\n/* Responsive layout - when the screen is less than 400px wide, make the navigation links stack on top of each other instead of next to each other */\r\n@media screen and (max-width: 400px) {\r\n    .navbar a {\r\n        float: none;\r\n        width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/components/profile/profile.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/profile/profile.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--<div>\n\t<h2>Profile</h2>\n\tName:<h6 *ngFor=\"let l of userdata\">{{l.name}}</h6>\n\n\n</div>-->\n<div class=\"row\">\n\t<div class=\"side\">\n      \n      <div>\n        <table>\n          <tr>\n\n            <td width=\"50%\">\n              Name: \n            </td>\n            <td width=\"80%\">\n              {{user_name}}\n            </td>\n          </tr>\n          \n          <tr>\n\n            <td width=\"50%\">\n              Email: \n            </td>\n            <td width=\"80%\">\n              {{user_email}}\n            </td>\n          </tr>\n          \n          <tr>\n\n            <td width=\"50%\">\n              Reg No: \n            </td>\n            <td width=\"80%\">\n              {{r_n}}\n            </td>\n          </tr>\n          \n          <tr>\n\n            <td width=\"50%\">\n              Available Casual: \n            </td>\n            <td width=\"80%\">\n              {{c_l}}\n            </td>\n          </tr>\n          \n          <tr>\n\n            <td width=\"50%\">\n              Available sick: \n            </td>\n            <td width=\"80%\">\n              {{s_l}}\n            </td>\n          </tr>\n        </table>\n      </div>\n      <!--<img src=\"cinqueterre.jpg\" class=\"img-circle\" alt=\"Cinque Terre\" width=\"304\" height=\"236\">\n      <div class=\"fakeimg\" style=\"height:200px;\">Image</div>\n      <h5 *ngFor=\"let l of userdata\">{{l.email}}</h5>-->\n  </div>\n  <div class=\"main\">\n    <div class=\"btn-group\" role=\"group\" aria-label=\"Basic example\" ng-controller=\"redirectUrls\">\n      <a routerLink=\"/newl\"><button type=\"button\" class=\"btn btn-secondary\">Get Leave</button></a>\n      <button type=\"button\" class=\"btn btn-secondary\" (click)=\"getPending()\">Pending Leave</button>\n      <!--<button type=\"button\" class=\"btn btn-secondary\"><a routerLink=\"\">Aproved Leave</a></button>-->\n    </div>\n    <br>\n    <br>\n    <legend>Leave Summary</legend>\n\n    <div>\n      <table class=\"table\">\n        <thead>\n          <tr>\n            \n            <th scope=\"col\">Leave Start</th>\n            <th scope=\"col\">Leave End</th>\n            <th scope=\"col\">Leave Type</th>\n            <th scope=\"col\">Comment</th>\n            <th scope=\"col\">State</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let l of user_leave\">\n            \n            <th>{{l.lstart}}</th>\n            <td>{{l.lend}}</td>\n            <td>{{l.ltype}}</td>\n            <td>{{l.comment}}</td>\n            <td>{{l.state}}</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n    \n  </div>\n</div>"

/***/ }),

/***/ "./src/app/components/profile/profile.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/profile/profile.component.ts ***!
  \*********************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _MyService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MyService/data.service */ "./src/app/MyService/data.service.ts");
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



var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user_name = this.dataService.getName();
        this.user_email = this.dataService.getEmail();
        this.c_l = this.dataService.getC();
        this.s_l = this.dataService.getS();
        this.r_n = this.dataService.getR();
        var uL = {
            r_n: this.dataService.getR()
        };
        this.dataService.UserL(uL).subscribe(function (res) {
            _this.user_leave = res;
            console.log(res);
        });
        /*const user_data = {
          email:this.dataService.getEmail()
        };
    
        this.dataService.getUserProfile(user_data).subscribe(res=>{
          this.profile = res;
        });*/
    };
    ProfileComponent.prototype.getPending = function () {
        var _this = this;
        console.log("button click");
        var uL = {
            r_n: this.dataService.getR()
        };
        this.dataService.PendingLeave(uL).subscribe(function (res) {
            _this.user_leave = res;
            console.log(res);
        });
    };
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/components/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/components/profile/profile.component.css")]
        }),
        __metadata("design:paramtypes", [_MyService_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/components/register/register.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/register/register.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/register/register.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/register/register.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form (submit)=\"registerData()\">\n  <fieldset>\n    <legend>Add New User</legend>\n    <hr>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Registration Number</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter user name\" name=\"username\" [(ngModel)]=\"username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Name</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\" name=\"name\" [(ngModel)]=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"email\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </fieldset>\n</form>\n<!--<div class=\"col-md-12\"> \n<div class=\"col-md-6\">\n</div>  \n<div class=\"col-md-6\">        \n<div class=\"panel panel-default\">\n<div class=\"panel-heading\">  </div> \n<div class=\"panel-body\">                \n\n<form (submit)=\"registerData()\">\n  <fieldset>\n    <legend>Add New User</legend>\n    <hr>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">User Name</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter user name\" name=\"username\" [(ngModel)]=\"username\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Name</label>\n      <input type=\"text\" class=\"form-control\" placeholder=\"Enter name\" name=\"name\" [(ngModel)]=\"name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputEmail1\">Email address</label>\n      <input type=\"email\" class=\"form-control\" placeholder=\"Enter email\" name=\"email\" [(ngModel)]=\"email\">\n      <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\n    </div>\n    <div class=\"form-group\">\n      <label for=\"exampleInputPassword1\">Password</label>\n      <input type=\"password\" class=\"form-control\" placeholder=\"Password\" name=\"password\" [(ngModel)]=\"password\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </fieldset>\n</form>\n</div>\n</div>\n</div>\n<div class=\"col-md-3\">\n</div>  \n\n\n</div>-->\n"

/***/ }),

/***/ "./src/app/components/register/register.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/register/register.component.ts ***!
  \***********************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _MyService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MyService/data.service */ "./src/app/MyService/data.service.ts");
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


//import {FlashMessage} from 'angular-flash-message';

var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(dataService, 
    //private flashMessage: FlashMessage
    router) {
        this.dataService = dataService;
        this.router = router;
    }
    RegisterComponent.prototype.ngOnInit = function () {
    };
    RegisterComponent.prototype.registerData = function () {
        var _this = this;
        var user = {
            username: this.username,
            name: this.name,
            email: this.email,
            password: this.password
        };
        this.dataService.registerUser(user).subscribe(function (res) {
            _this.router.navigate(['/login']);
        });
    };
    RegisterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! ./register.component.html */ "./src/app/components/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.css */ "./src/app/components/register/register.component.css")]
        }),
        __metadata("design:paramtypes", [_MyService_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/components/rejectleave/rejectleave.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/rejectleave/rejectleave.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/rejectleave/rejectleave.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/rejectleave/rejectleave.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <legend>Rejected Leave Summary</legend><br>\n<div>\n<table class=\"table\">\n  <thead>\n    <tr>\n      <th scope=\"col\">Name</th>\n      <th scope=\"col\">Leave Start</th>\n      <th scope=\"col\">Leave End</th>\n      <th scope=\"col\">Leave Type</th>\n      <th scope=\"col\">Reason</th>\n      \n    </tr>\n  </thead>\n  <tbody>\n    <tr *ngFor=\"let l of leave\">\n      <th>{{l.name}}</th>\n      <th>{{l.lstart}}</th>\n      <td>{{l.lend}}</td>\n      <td>{{l.ltype}}</td>\n      <td>{{l.comment}}</td>\n      \n    </tr>\n  </tbody>\n</table>\n</div>\n</div>"

/***/ }),

/***/ "./src/app/components/rejectleave/rejectleave.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/rejectleave/rejectleave.component.ts ***!
  \*****************************************************************/
/*! exports provided: RejectleaveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RejectleaveComponent", function() { return RejectleaveComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _MyService_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../MyService/data.service */ "./src/app/MyService/data.service.ts");
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



var RejectleaveComponent = /** @class */ (function () {
    function RejectleaveComponent(dataService, router) {
        this.dataService = dataService;
        this.router = router;
    }
    RejectleaveComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.leavereject().subscribe(function (res) {
            _this.leave = res;
            console.log(_this.leave);
        });
    };
    RejectleaveComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-rejectleave',
            template: __webpack_require__(/*! ./rejectleave.component.html */ "./src/app/components/rejectleave/rejectleave.component.html"),
            styles: [__webpack_require__(/*! ./rejectleave.component.css */ "./src/app/components/rejectleave/rejectleave.component.css")]
        }),
        __metadata("design:paramtypes", [_MyService_data_service__WEBPACK_IMPORTED_MODULE_1__["DataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RejectleaveComponent);
    return RejectleaveComponent;
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

module.exports = __webpack_require__(/*! E:\LeaveManagement\Frontapp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map