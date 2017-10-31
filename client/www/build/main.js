webpackJsonp([0],{

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Registre; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_user__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Registre = (function () {
    function Registre(authService, formBuilder, navParams, app) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.app = app;
        this.model = new __WEBPACK_IMPORTED_MODULE_6__model_user__["a" /* User */]();
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            firstname: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            lastname: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    Registre.prototype.onSubmit = function () {
        var _this = this;
        this.model.email = this.form.value.email;
        this.model.password = this.form.value.password;
        this.model.firstname = this.form.value.firstname;
        this.model.lastname = this.form.value.lastname;
        this.authService
            .register(this.model)
            .subscribe(function (isRegistered) {
            if (isRegistered) {
                var nav = _this.app.getRootNav();
                nav.push(__WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */]);
            }
            else {
                //send error
                _this.errorMessage = "Error registre",
                    _this.hasError = true;
            }
        });
    };
    Registre.prototype.goToLogin = function () {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_0__login_login__["a" /* Login */]);
    };
    return Registre;
}());
Registre = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-registre',template:/*ion-inline-start:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/authentication/registre/registre.html"*/'\n\n<ion-content padding class="no-scroll">\n\n  <div class="title">Mangas</div>\n\n  <div padding>\n    <form [formGroup]="form" (ngSubmit)="onSubmit()">\n\n      <p ion-text color="danger" *ngIf="hasError">{{errorMessage}}</p>\n\n      <ion-item>\n        <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" placeholder="Mot de passe" formControlName="password"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="First name" formControlName="firstname"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="text" placeholder="Last name" formControlName="lastname"></ion-input>\n      </ion-item>\n\n      <button ion-button block  color="primary"  \n        type="submit" [disabled]="!form.valid">\n        Inscription\n      </button>\n      \n    </form>    \n  </div>\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class="footer">\n    <div (click)="goToLogin()">\n      <span>Vous avez déja un compte ? <strong>Connecte-toi maintenant</strong>.</span>\n    </div>\n  </ion-toolbar>\n</ion-footer>'/*ion-inline-end:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/authentication/registre/registre.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */]])
], Registre);

//# sourceMappingURL=registre.js.map

/***/ }),

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return User; });
var User = (function () {
    function User() {
    }
    User.isNull = function (user) {
        return user.email === null &&
            user.password === null &&
            user.firstname === null &&
            user.lastname === null;
    };
    return User;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 146:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 146;

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 189;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Open; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__authentication_registre_registre__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Open = (function () {
    function Open(app) {
        this.app = app;
    }
    Open.prototype.ionViewDidLoad = function () {
        this.app.setTitle("Loading");
        this.updateHangout();
    };
    Open.prototype.updateHangout = function () {
        var nav = this.app.getRootNav();
        setTimeout(function () {
            nav.push(__WEBPACK_IMPORTED_MODULE_0__authentication_registre_registre__["a" /* Registre */]);
        }, 2000);
    };
    return Open;
}());
Open = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-open',template:/*ion-inline-start:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/open/open.html"*/'<ion-content class="no-scroll">\n\n<!--  <img src="../../assets/logo/logo.png" class="image"> -->\n    <ion-icon name="book"></ion-icon>\n\n</ion-content>'/*ion-inline-end:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/open/open.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* App */]])
], Open);

//# sourceMappingURL=open.js.map

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Login; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__registre_registre__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__model_user__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Login = (function () {
    function Login(authService, formBuilder, navParams, app) {
        this.authService = authService;
        this.formBuilder = formBuilder;
        this.navParams = navParams;
        this.app = app;
        this.model = new __WEBPACK_IMPORTED_MODULE_6__model_user__["a" /* User */]();
        this.form = this.formBuilder.group({
            email: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required],
            password: ['', __WEBPACK_IMPORTED_MODULE_4__angular_forms__["f" /* Validators */].required]
        });
    }
    Login.prototype.onSubmit = function () {
        var _this = this;
        this.model.email = this.form.value.email;
        this.model.password = this.form.value.password;
        this.authService
            .login(this.model)
            .subscribe(function (isLoggedIn) {
            if (isLoggedIn) {
                var nav = _this.app.getRootNav();
                nav.push(__WEBPACK_IMPORTED_MODULE_0__dashboard_dashboard__["a" /* Dashboard */]);
            }
            else {
                //send error
                _this.errorMessage = "Error registre",
                    _this.hasError = true;
            }
        });
        this.authService.getCurrentUser(this.model)
            .subscribe(function (user) {
            _this.currentUser = user;
        });
    };
    Login.prototype.goToRegistre = function () {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_1__registre_registre__["a" /* Registre */], this.currentUser);
    };
    return Login;
}());
Login = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/authentication/login/login.html"*/'\n\n<ion-content padding class="no-scroll">\n\n  <div class="title">Mangas</div>\n  <div padding>\n    <form [formGroup]="form" (ngSubmit)="onSubmit()">\n      <p ion-text color="danger" *ngIf="hasError">{{errorMessage}}</p>\n\n      <ion-item>\n        <ion-input type="email" placeholder="Email" formControlName="email"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-input type="password" placeholder="Mot de passe" formControlName="password"></ion-input>\n      </ion-item>\n\n      <button ion-button block  class="signin-button" type="submit" [disabled]="!form.valid">\n        Connexion\n      </button>\n\n    </form>    \n  </div>\n\n\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar class="footer">\n    <div (click)="goToRegistre()">\n      <span>Pas encore de compte ? <strong>Inscrit-toi dès maintenant</strong>.</span>\n    </div>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/authentication/login/login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_5__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormBuilder */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */]])
], Login);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dashboard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_user_service__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__manga_manga__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lectureapi_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utility__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Dashboard = (function () {
    function Dashboard(app, utility, lectureApiService, userService, navParams) {
        this.app = app;
        this.utility = utility;
        this.lectureApiService = lectureApiService;
        this.userService = userService;
        this.navParams = navParams;
        this.mangas = [];
        this.item = { title: "Search", category: "null", statue: "null", url: "null", resume: "null", chapitres: "null", nbrTome: 0 };
        this.user = navParams.data;
        this.email = this.user.email;
    }
    Dashboard.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Accueil');
        this.updateHangout();
    };
    Dashboard.prototype.updateHangout = function () {
        var _this = this;
        //Show loading
        var loading = this.utility.getLoader();
        loading.present();
        this.lectureApiService.getMangas().subscribe(function (data) {
            _this.mangas = data;
            //Hide loading
            setTimeout(function () {
                loading.dismiss();
            }, 1000);
        });
    };
    Dashboard.prototype.getItems = function (ev) {
        // Reset items back to all of the items
        // set val to the value of the searchbar
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            for (var i = 0; i < this.mangas.length; i++) {
                if (this.mangas[i].title == val) {
                    this.item = this.mangas[i];
                }
            }
        }
    };
    Dashboard.prototype.goTo = function (item) {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_1__manga_manga__["a" /* Manga */], {
            "item": item,
            "user": this.user
        });
    };
    return Dashboard;
}());
Dashboard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-dashboard',template:/*ion-inline-start:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/dashboard/dashboard.html"*/'<ion-header>\n    <ion-navbar >\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>Liste mangas {{email}}</ion-title>\n    </ion-navbar>\n</ion-header>\n\n\n <ion-content class="card-background-page">\n    \n    <ion-searchbar (ionInput)="getItems($event)"></ion-searchbar>\n\n    <ion-item [hidden]="item.title == \'Search\'" (click)="goTo(item)" class="itemSearch">\n            Resultat recherche : \n            <h2 style="color : white">{{item.title}}</h2>\n            <h3 style="float : left;">{{item.category}}</h3>\n            <h3 style="float : right;">{{item.statue}}</h3>\n\n    </ion-item>\n    <ion-list>\n\n        <ion-item *ngFor="let manga of mangas" [hidden]="mangas.count == 0" (click)="goTo(manga)" >\n            \n            <h2 style="color : white">{{manga.title}}</h2>\n            <h3 style="float : left; color : #111111">{{manga.category}}</h3>\n            <h3 style="float : right; color : #111111">{{manga.statue}}</h3>\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list-header [hidden]="mangas.length > 0">\n        Pas de catégorie trouvée.\n    </ion-list-header>\n\n\n</ion-content>\n\n'/*ion-inline-end:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/dashboard/dashboard.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_5__providers_utility__["a" /* Utility */],
        __WEBPACK_IMPORTED_MODULE_2__services_lectureapi_service__["a" /* LectureApiService */],
        __WEBPACK_IMPORTED_MODULE_0__services_user_service__["a" /* UserService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */]])
], Dashboard);

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var API_URL = 'http://localhost:8080/api';
var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(API_URL + '/users')
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getUser = function (userId) {
        return this.http.get(API_URL + '/user/' + userId)
            .map(function (response) { return response.json(); });
    };
    UserService.prototype.getUserByEmail = function (userEmail) {
        return this.http.get(API_URL + '/user/email/' + userEmail)
            .map(function (response) { return response.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Manga; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__model_manga__ = __webpack_require__(317);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__scan_scan__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_lectureapi_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_utility__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var Manga = (function () {
    function Manga(app, utility, navParams, lectureApiService, actionSheetCtrl) {
        this.app = app;
        this.utility = utility;
        this.navParams = navParams;
        this.lectureApiService = lectureApiService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.chapitres = [];
        this.mangaModel = new __WEBPACK_IMPORTED_MODULE_0__model_manga__["a" /* MangaModel */]();
        this.choix = "infosManga";
        this.manga = navParams.data.item;
        this.link = this.manga.url;
        this.user = navParams.data.user;
        this.mangaModel.title = this.manga.title;
        this.mangaModel.id = "50";
    }
    Manga.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Source');
        this.updateHangout();
    };
    Manga.prototype.updateHangout = function () {
        var _this = this;
        //Show loading
        var loading = this.utility.getLoader();
        loading.present();
        this.lectureApiService.getManga(this.link).subscribe(function (data) {
            _this.resume = data.resume;
            _this.chapitres = data.chapitres;
            //Hide loading
            setTimeout(function () {
                loading.dismiss();
            }, 1000);
        });
    };
    Manga.prototype.lectureChapitre = function (item) {
        var nav = this.app.getRootNav();
        nav.push(__WEBPACK_IMPORTED_MODULE_1__scan_scan__["a" /* Scan */], {
            "item": item,
            "manga": this.mangaModel,
            "user": this.user
        });
    };
    return Manga;
}());
Manga = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({
        selector: 'page-manga',template:/*ion-inline-start:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/manga/manga.html"*/'<ion-header>\n    <ion-navbar no-border-bottom>\n        <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n        <ion-title>{{manga.title}}</ion-title>\n    </ion-navbar>\n\n    <ion-toolbar no-border-top>\n        <ion-segment [(ngModel)]="choix">\n            <ion-segment-button value="infosManga">\n                Infos mangas\n            </ion-segment-button>\n            <ion-segment-button value="listeChapitre">\n                Liste chapitres\n            </ion-segment-button>\n        </ion-segment>\n    </ion-toolbar>\n\n</ion-header>\n \n<ion-content>\n\n    <div [ngSwitch]="choix">\n\n        \n        <ion-card *ngSwitchCase="\'infosManga\'">\n\n            <ion-card-content class="btnsrc">\n                <h2 style="color : white;">{{resume}}</h2>\n            </ion-card-content >\n            \n        </ion-card>\n\n        <ion-list *ngSwitchCase="\'listeChapitre\'">\n            \n            <ion-item class="btnsrc"  *ngFor="let chapitre of chapitres" (click)="lectureChapitre(chapitre)">\n                <h2 style="color : white;">{{chapitre.title}}</h2>\n            </ion-item >\n            \n        </ion-list>\n    </div>\n</ion-content>\n \n\n'/*ion-inline-end:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/manga/manga.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_5__providers_utility__["a" /* Utility */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__services_lectureapi_service__["a" /* LectureApiService */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["a" /* ActionSheetController */]])
], Manga);

//# sourceMappingURL=manga.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Scan; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_auth_service__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_lectureapi_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_utility__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var Scan = Scan_1 = (function () {
    function Scan(app, utility, navParams, authService, lectureApiService, actionSheetCtrl) {
        this.app = app;
        this.utility = utility;
        this.navParams = navParams;
        this.authService = authService;
        this.lectureApiService = lectureApiService;
        this.actionSheetCtrl = actionSheetCtrl;
        this.pages = [];
        this.chapitre = navParams.data.item;
        this.link = this.chapitre.urlToChapitre;
        this.manga = navParams.data.manga;
        this.user = navParams.data.user;
    }
    Scan.prototype.ionViewDidLoad = function () {
        this.app.setTitle('Source');
        this.updateHangout();
    };
    Scan.prototype.updateHangout = function () {
        var _this = this;
        //Show loading
        var loading = this.utility.getLoader();
        loading.present();
        this.lectureApiService.getChapitre(this.link).subscribe(function (data) {
            _this.pages = data;
            //Hide loading
            setTimeout(function () {
                loading.dismiss();
            }, 1000);
        });
    };
    Scan.prototype.goToArticles = function (item) {
        var nav = this.app.getRootNav();
        nav.push(Scan_1, item);
    };
    Scan.prototype.sauvegarderManga = function () {
        var _this = this;
        this.authService.saveManga(this.user, this.manga).subscribe(function (item) {
            _this.item = item;
        });
    };
    return Scan;
}());
Scan = Scan_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["n" /* Component */])({
        selector: 'page-scan',template:/*ion-inline-start:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/scan/scan.html"*/'<ion-header>\n    <ion-navbar no-border-bottom>\n        <button ion-button menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>   \n        <ion-title> {{chapitre.title}} </ion-title>\n        \n        <ion-icon name="bookmark" color="light" style="float : right" (click)="sauvegarderManga()"></ion-icon>\n        \n    </ion-navbar>\n</ion-header>\n \n<ion-content>\n    \n    <ion-slides pager >\n\n        <ion-slide *ngFor="let scan of pages">\n            <img [src]="scan.urlToImage">\n        </ion-slide>\n\n    </ion-slides>\n    \n \n</ion-content>\n \n\n'/*ion-inline-end:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/scan/scan.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* App */],
        __WEBPACK_IMPORTED_MODULE_4__providers_utility__["a" /* Utility */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["g" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_0__services_auth_service__["a" /* AuthService */],
        __WEBPACK_IMPORTED_MODULE_1__services_lectureapi_service__["a" /* LectureApiService */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["a" /* ActionSheetController */]])
], Scan);

var Scan_1;
//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_auth_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(authService) {
        this.authService = authService;
    }
    HomePage.prototype.logOut = function () {
        this.authService.logOut().subscribe(function (isLoggedIn) {
            if (isLoggedIn === false) {
                //LOGOUT
            }
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Ionic Blank\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  Hey it\'s home\n  <button pButton type="button" (click)="logOut()" label="LogOut"></button>\n</ion-content>\n'/*ion-inline-end:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_auth_service__["a" /* AuthService */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(270);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(316);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_authentication_registre_registre__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_authentication_login_login__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_open_open__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_manga_manga__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_scan_scan__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_prov_data__ = __webpack_require__(585);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_utility__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_lectureapi_service__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_user_service__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_auth_service__ = __webpack_require__(52);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_authentication_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_9__pages_authentication_registre_registre__["a" /* Registre */],
            __WEBPACK_IMPORTED_MODULE_14__pages_scan_scan__["a" /* Scan */],
            __WEBPACK_IMPORTED_MODULE_13__pages_manga_manga__["a" /* Manga */],
            __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_11__pages_open_open__["a" /* Open */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                links: []
            }),
            __WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["a" /* IonicStorageModule */].forRoot()
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_authentication_login_login__["a" /* Login */],
            __WEBPACK_IMPORTED_MODULE_9__pages_authentication_registre_registre__["a" /* Registre */],
            __WEBPACK_IMPORTED_MODULE_14__pages_scan_scan__["a" /* Scan */],
            __WEBPACK_IMPORTED_MODULE_13__pages_manga_manga__["a" /* Manga */],
            __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard__["a" /* Dashboard */],
            __WEBPACK_IMPORTED_MODULE_11__pages_open_open__["a" /* Open */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_19__services_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_18__services_user_service__["a" /* UserService */],
            __WEBPACK_IMPORTED_MODULE_15__providers_prov_data__["a" /* ProviderData */],
            __WEBPACK_IMPORTED_MODULE_16__providers_utility__["a" /* Utility */],
            __WEBPACK_IMPORTED_MODULE_17__services_lectureapi_service__["a" /* LectureApiService */],
            { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_open_open__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(229);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_open_open__["a" /* Open */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/Med/Documents/Projet/SpringBoot/Spring boot + Angular/MangasApp/client/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* Platform */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MangaModel; });
var MangaModel = (function () {
    function MangaModel() {
    }
    MangaModel.isNull = function (manga) {
        return manga.title === null;
    };
    return MangaModel;
}());

//# sourceMappingURL=manga.js.map

/***/ }),

/***/ 52:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(318);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_user__ = __webpack_require__(135);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var API_URL = 'http://localhost:8080/api';
var AuthService = AuthService_1 = (function () {
    function AuthService(http) {
        this.http = http;
        this.isLoggedIn = false;
    }
    AuthService.handleError = function (error) {
        var errorMessage = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : "Server error";
        console.log(errorMessage);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw(errorMessage);
    };
    AuthService.prototype.login = function (user) {
        var _this = this;
        return this.http.post(API_URL + '/login', user)
            .map(function (response) { return response.json(); })
            .map(function (currentUser) {
            if (!__WEBPACK_IMPORTED_MODULE_4__model_user__["a" /* User */].isNull(currentUser)) {
                _this.isLoggedIn = true;
                return true;
            }
            else {
                _this.isLoggedIn = false;
                return false;
            }
        })
            .catch(AuthService_1.handleError);
    };
    AuthService.prototype.logOut = function () {
        this.isLoggedIn = !this.isLoggedIn;
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(false);
    };
    AuthService.prototype.register = function (user) {
        return this.http.post(API_URL + '/register', user)
            .map(function (response) { return response.json(); })
            .map(function (currentUser) { return !__WEBPACK_IMPORTED_MODULE_4__model_user__["a" /* User */].isNull(currentUser); })
            .catch(AuthService_1.handleError);
    };
    AuthService.prototype.saveManga = function (user, manga) {
        return this.http.post(API_URL + '/saveManga/' + user.email, manga)
            .map(function (response) { return response.json(); });
    };
    AuthService.prototype.getCurrentUser = function (user) {
        return this.http.get(API_URL + '/user/email/' + user.email)
            .map(function (response) { return response.json(); })
            .map(function (currentUser) {
            return currentUser;
        });
    };
    return AuthService;
}());
AuthService = AuthService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], AuthService);

var AuthService_1;
//# sourceMappingURL=auth.service.js.map

/***/ }),

/***/ 585:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProviderData; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ProviderData = (function () {
    function ProviderData(http) {
        this.http = http;
    }
    ProviderData.prototype.load = function () {
        if (this.data) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.data);
        }
        else {
            return this.http.get('assets/data/data.json')
                .map(this.processData);
        }
    };
    ProviderData.prototype.processData = function (data) {
        this.data = data.json();
        return this.data;
    };
    ProviderData.prototype.getActivity = function () {
        return this.load().map(function (data) {
            return data.activities;
        });
    };
    ProviderData.prototype.getSources = function () {
        return this.load().map(function (data) {
            return data.sources;
        });
    };
    return ProviderData;
}());
ProviderData = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], ProviderData);

//# sourceMappingURL=prov-data.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LectureApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LectureApiService = (function () {
    function LectureApiService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/';
    }
    LectureApiService.prototype.getMangas = function () {
        var url = this.baseUrl + "listMangas";
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    LectureApiService.prototype.getManga = function (manga) {
        var url = this.baseUrl + "infosManga/" + manga;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    LectureApiService.prototype.getChapitre = function (chapitre) {
        var url = this.baseUrl + "lecture/" + chapitre;
        return this.http.get(url).map(function (response) { return response.json(); });
    };
    return LectureApiService;
}());
LectureApiService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], LectureApiService);

//# sourceMappingURL=lectureapi.service.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Utility; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var Utility = (function () {
    function Utility(storage, loadingCtrl) {
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
    }
    //Show/hide loading
    Utility.prototype.getLoader = function () {
        var loader = this.loadingCtrl.create({
            content: "Une seconde s'il vous plait..."
        });
        return loader;
        //loader.present();
    };
    return Utility;
}());
Utility = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* LoadingController */]])
], Utility);

//# sourceMappingURL=utility.js.map

/***/ })

},[265]);
//# sourceMappingURL=main.js.map