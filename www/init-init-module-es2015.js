(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["init-init-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/init/init.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/init/init.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Configuración.</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <ion-list>\n\n        <ion-label> Introduce un ID...</ion-label>\n\n        <ion-input [(ngModel)]=\"sessionID\" ></ion-input>\n\n        <ion-label> Introduce un UUID...</ion-label>\n\n        <ion-input [(ngModel)]=\"serviceUUID\"></ion-input>\n\n        <ion-label> Introduce un tiempo de trabajo...</ion-label>\n\n        <ion-input [(ngModel)]=\"workCycle\"></ion-input>\n\n        <ion-label> Introduce un tiempo de escáneo...</ion-label>\n\n        <ion-input [(ngModel)]=\"scanCycle\"></ion-input>\n\n        <ion-label> Introduce una API...</ion-label>\n\n        <ion-input [(ngModel)]=\"apiHttp\"></ion-input>\n\n        <ion-label> Introduce un correo para recibir el log. (Opcional)</ion-label>\n\n        <ion-input [(ngModel)]=\"logMail\"></ion-input>\n\n\n    </ion-list>\n    <ion-fab horizontal=\"center\" slot=\"fixed\" vertical=\"bottom\">\n        <ion-fab-button color=\"warning\" size=\"large\" (click)=\"acceptButton()\">OK</ion-fab-button>\n    </ion-fab>\n</ion-content>\n\n\n<style>\n  .container {\n    height: 200px;\n    position: relative;\n    border: 3px solid green;\n  }\n  \n  .vertical-center {\n    margin: 0;\n    position: absolute;\n    top: 50%;\n    -ms-transform: translateY(-50%);\n    transform: translateY(-50%);\n  }\n  </style>"

/***/ }),

/***/ "./src/app/init/init.module.ts":
/*!*************************************!*\
  !*** ./src/app/init/init.module.ts ***!
  \*************************************/
/*! exports provided: InitPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitPageModule", function() { return InitPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _init_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./init.page */ "./src/app/init/init.page.ts");







const routes = [
    {
        path: '',
        component: _init_page__WEBPACK_IMPORTED_MODULE_6__["InitPage"]
    }
];
let InitPageModule = class InitPageModule {
};
InitPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_init_page__WEBPACK_IMPORTED_MODULE_6__["InitPage"]]
    })
], InitPageModule);



/***/ }),

/***/ "./src/app/init/init.page.scss":
/*!*************************************!*\
  !*** ./src/app/init/init.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2luaXQvaW5pdC5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/init/init.page.ts":
/*!***********************************!*\
  !*** ./src/app/init/init.page.ts ***!
  \***********************************/
/*! exports provided: InitPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitPage", function() { return InitPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _data_sharing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data-sharing.service */ "./src/app/data-sharing.service.ts");




let InitPage = class InitPage {
    constructor(navCtrl, data) {
        this.navCtrl = navCtrl;
        this.data = data;
        this.serviceUUID = '00000000-0000-0000-0000-000000000000';
        this.apiHttp = 'example.com';
        this.logMail = '';
    }
    ngOnInit() {
    }
    acceptButton() {
        if (!this.sessionID)
            this.sessionID = 1;
        if (this.serviceUUID.length != 36)
            this.serviceUUID = '00000000-0000-0000-0000-000000000000';
        if (!this.workCycle)
            this.workCycle = 20;
        if (!this.scanCycle)
            this.scanCycle = 10;
        if (this.apiHttp === 'example.com')
            this.apiHttp = 'https://test-fake-api-demo.herokuapp.com/dispositivos';
        const myConfig = {
            ID: this.sessionID,
            UUID: this.serviceUUID,
            wCycle: this.workCycle,
            sCycle: this.scanCycle,
            API: this.apiHttp,
            Mail: this.logMail
        };
        this.data.dataSend(myConfig);
        this.navCtrl.navigateForward('/home');
    }
};
InitPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: _data_sharing_service__WEBPACK_IMPORTED_MODULE_3__["DataSharingService"] }
];
InitPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-init',
        template: __webpack_require__(/*! raw-loader!./init.page.html */ "./node_modules/raw-loader/index.js!./src/app/init/init.page.html"),
        styles: [__webpack_require__(/*! ./init.page.scss */ "./src/app/init/init.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _data_sharing_service__WEBPACK_IMPORTED_MODULE_3__["DataSharingService"]])
], InitPage);



/***/ })

}]);
//# sourceMappingURL=init-init-module-es2015.js.map