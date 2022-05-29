(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>\n      Escáner básico.\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-card-content ion-item *ngFor=\"let device of devices\">\n      <p>{{device.name || 'Unnamed'}}</p>\n      <p>{{device.id}}</p>\n      <p> RSSI: {{device.rssi}}</p>\n    </ion-card-content>\n    <p>{{testMessage}}</p>\n  </ion-list>\n\n  <ion-fab vertical=\"bottom\" horizontal=\"start\" slot=\"fixed\">\n    <ion-button (click)=\"singleMode()\"> Single </ion-button>\n  </ion-fab>\n\n\n  <ion-fab vertical=\"bottom\" horizontal=\"end\" slot=\"fixed\">\n    <ion-fab-button [color]='scanStatus ? \"danger\" : \"primary\"' (click)=\"onScanClicked()\">\n      <ion-icon [name]='scanStatus ? \"pause\" : \"play\"' style=\"font-size: 25px;\"></ion-icon>\n    </ion-fab-button>\n  </ion-fab>\n\n\n\n</ion-content>"

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/ble/ngx */ "./node_modules/@ionic-native/ble/ngx/index.js");
/* harmony import */ var _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/http/ngx */ "./node_modules/@ionic-native/http/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _data_sharing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data-sharing.service */ "./src/app/data-sharing.service.ts");
/* harmony import */ var _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic-native/background-geolocation/ngx */ "./node_modules/@ionic-native/background-geolocation/ngx/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/file/ngx */ "./node_modules/@ionic-native/file/ngx/index.js");
/* harmony import */ var _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @awesome-cordova-plugins/email-composer/ngx */ "./node_modules/@awesome-cordova-plugins/email-composer/ngx/index.js");











let HomePage = class HomePage {
    constructor(email, file, datepipe, ble, ngZone, navCtrl, http, data, bgGeolocation) {
        this.email = email;
        this.file = file;
        this.datepipe = datepipe;
        this.ble = ble;
        this.ngZone = ngZone;
        this.navCtrl = navCtrl;
        this.http = http;
        this.data = data;
        this.bgGeolocation = bgGeolocation;
        this.devices = [];
        this.latitud = 0;
        this.longitud = 0;
        this.scanStatus = false;
        this.ns = 0;
        this.workingStatus = false;
        this.workingTime = 0;
        this.scanTime = 0;
        this.controller = 0;
        this.singleController = false;
        this.testMessage = '';
        this.data.dataModifications.subscribe(data => {
            this.myCfg = data;
        });
    }
    ngOnInit() {
        this.workingTime = parseInt(this.myCfg.wCycle);
        this.scanTime = parseInt(this.myCfg.sCycle);
        this.http.setHeader('*', 'Access-Control-Allow-Origin', '*');
        this.http.setHeader('*', 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, PATCH');
        this.http.setHeader('*', 'Accept', 'application/json');
        this.http.setHeader('*', 'content-type', 'application/json');
        this.http.setHeader('*', 'origin', '*');
        this.http.setHeader('*', 'x-requested-width', '*');
        this.http.setDataSerializer('json');
        this.file.createFile(this.file.dataDirectory, 'logger.txt', true);
        const config = {
            desiredAccuracy: 10,
            distanceFilter: 5,
            debug: false,
            stopOnTerminate: false,
            startOnBoot: true,
            url: '',
            postTemplate: {
                id: '',
                lat: '@latitude',
                lng: '@longitude',
                test: '1'
            }
        };
        this.bgGeolocation.configure(config).then(() => {
            this.bgGeolocation.on(_ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["BackgroundGeolocationEvents"].location).subscribe((location) => {
                console.log(location);
                this.latitud = location.latitude;
                this.longitud = location.longitude;
                this.appendLog(Date.now() + ': Calling geolocation task...\n');
                this.bgGeolocation.finish();
            });
        });
        this.bgGeolocation.start();
        this.appendLog(Date.now() + ': Geolocation is ready...\n');
    }
    onScanClicked() {
        if (!this.scanStatus) {
            this.appendLog(Date.now() + ': ---------------------------------------------------------------- \n');
            this.appendLog(Date.now() + ': STARTING NEW LOG \n');
            this.appendLog(Date.now() + ': ---------------------------------------------------------------- \n');
            this.startScanning();
            this.devMACs = [];
            this.devices = [];
            this.testMessage = '';
            this.scanStatus = true;
        }
        else {
            this.appendLog(Date.now() + ': STOPPING LOGGER \n');
            this.scanStatus = false;
            this.workingStatus = false;
            this.stopScanning();
        }
    }
    appendLog(logMsg) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.blob = new Blob([logMsg], { type: 'text/plain' });
            yield this.file.writeFile(this.file.dataDirectory, 'logger.txt', this.blob, { append: true, replace: false });
        });
    }
    startScanning() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.appendLog(Date.now() + ': Scanning...\n');
            yield this.ble.scan([], this.scanTime).subscribe((device) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { return yield this.onDeviceDiscovered(device); }));
            if (this.controller === 0) {
                this.controller++;
                this.workingStatus = true;
                this.workingState();
            }
        });
    }
    workingState() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.intervalo = Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["interval"])(1000 * this.workingTime).subscribe((values) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                this.appendLog(Date.now() + ': Starting Work-Cycle iteration...\n');
                this.startScanning();
                let myDate = new Date();
                this.timestamp = this.datepipe.transform(myDate, 'yyyy/MM/dd-hh:mm:ss', 'UTC +2');
                this.devMACs = yield this.devices.map(function (e) {
                    return e.id;
                });
                if (this.latitud != 0 && this.longitud != 0 && this.devices.length > 0) {
                    yield this.http.sendRequest(this.myCfg.API, {
                        method: 'post',
                        data: {
                            "type": 'Feature',
                            "properties": {
                                "desc": 'A GeoJSON',
                                "session": this.myCfg.ID,
                                "ns": this.ns,
                                "timestamp": this.timestamp,
                                "beacons": this.devMACs
                            },
                            "geometry": {
                                "type": 'Point',
                                "coordinates": [this.latitud, this.longitud]
                            }
                        }
                    }).then(response => {
                        if (response) {
                            console.log(response);
                            this.ns++;
                            this.devMACs = [];
                            this.devices = [];
                            this.appendLog(Date.now() + ': Scan result sent...\n');
                        }
                    }).catch(response => {
                        console.log(response);
                        console.log(response.error);
                    });
                }
                else {
                    if (this.devices.length > 0) {
                        this.appendLog(Date.now() + ': Awaiting Geolocation Engine initialization... \n');
                        this.devices = [];
                        this.devMACs = [];
                    }
                    else {
                        this.appendLog(Date.now() + ': No devices detected in this iteration, did not send anything...\n');
                    }
                }
                this.appendLog(Date.now() + ': Finished Work-Cycle iteration...\n');
            }));
        });
    }
    onDeviceDiscovered(device) {
        this.ngZone.run(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log('HERE comes the full device');
            console.log(device);
            this.appendLog(Date.now() + ': Device found, applying filter... \n');
            const uuidArray = new Uint8Array(device.advertising);
            let fixedIndex = 0;
            let isIBeacon = false;
            yield uuidArray.forEach((elem, index) => {
                if (elem === 26) {
                    if (uuidArray[index + 1] === 255 && uuidArray[index + 2] === 76 && uuidArray[index + 3] === 0) {
                        isIBeacon = true;
                        fixedIndex = index + 6;
                    }
                }
            });
            console.log(fixedIndex);
            const fixedArray = [];
            if (isIBeacon) {
                for (let i = fixedIndex; i < fixedIndex + 16; i++) {
                    if (uuidArray[i] < 10) {
                        fixedArray.push('0' + uuidArray[i].toString(16));
                    }
                    else
                        fixedArray.push(uuidArray[i].toString(16));
                }
                console.log('MY UUID ARRAY: ');
                console.log(fixedArray);
                if (fixedArray.join('') === this.myCfg.UUID.replace(/-/g, '')) {
                    this.devices.push(device);
                    this.appendLog(Date.now() + ': Found: -' + device.name + '\n');
                }
            }
        }));
    }
    stopScanning() {
        this.appendLog(Date.now() + ': Stopping scan and work cycle...\n');
        this.intervalo.unsubscribe();
        this.controller = 0;
        this.sendEmail();
    }
    sendEmail() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let email = {
                to: this.myCfg.mail,
                cc: this.myCfg.mail,
                attachments: [
                    this.file.dataDirectory + '/logger.txt'
                ],
                subject: 'iBeacon Scanner Log - ' + Date.now(),
                body: '',
                isHTML: true
            };
            if (email.cc !== '' || email.to !== '') {
                yield this.email.open(email);
            }
        });
    }
    ngOnDestroy() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            yield this.bgGeolocation.stop();
            yield this.file.removeFile(this.file.dataDirectory, 'logger.txt');
        });
    }
    singleMode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.ble.startScan([]).subscribe(device => this.onDeviceDiscovered(device));
            setTimeout(() => {
                this.ble.stopScan().then(() => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let myDate = new Date();
                    this.timestamp = this.datepipe.transform(myDate, 'yyyy/MM/dd-hh:mm:ss a', 'UTC +2');
                    console.log(this.devices);
                    this.devMACs = this.devices.map((e) => {
                        return e.id;
                    });
                    console.log(this.devMACs);
                    if (this.devMACs.length > 0) {
                        yield this.http.sendRequest(this.myCfg.API, {
                            method: 'post',
                            data: {
                                "type": 'Feature',
                                "properties": {
                                    "desc": 'A GeoJSON',
                                    "session": this.myCfg.ID,
                                    "ns": this.ns,
                                    "timestamp": this.timestamp,
                                    "beacons": this.devMACs
                                },
                                "geometry": {
                                    "type": 'Point',
                                    "coordinates": [this.latitud, this.longitud]
                                }
                            }
                        }).then(response => {
                            if (response) {
                                console.log(response);
                                this.ns++;
                                this.devMACs = [];
                                this.testMessage = 'Single test Done!';
                                this.appendLog(Date.now() + ': Scan result sent successfully...\n');
                            }
                        }).catch(response => {
                            console.log(response);
                            console.log(response.error);
                        });
                    }
                }));
            }, this.scanTime * 1000);
        });
    }
};
HomePage.ctorParameters = () => [
    { type: _awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_10__["EmailComposer"] },
    { type: _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"] },
    { type: _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__["BLE"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"] },
    { type: _data_sharing_service__WEBPACK_IMPORTED_MODULE_5__["DataSharingService"] },
    { type: _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["BackgroundGeolocation"] }
];
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.page.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_awesome_cordova_plugins_email_composer_ngx__WEBPACK_IMPORTED_MODULE_10__["EmailComposer"], _ionic_native_file_ngx__WEBPACK_IMPORTED_MODULE_9__["File"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _ionic_native_ble_ngx__WEBPACK_IMPORTED_MODULE_2__["BLE"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"], _ionic_native_http_ngx__WEBPACK_IMPORTED_MODULE_3__["HTTP"], _data_sharing_service__WEBPACK_IMPORTED_MODULE_5__["DataSharingService"], _ionic_native_background_geolocation_ngx__WEBPACK_IMPORTED_MODULE_6__["BackgroundGeolocation"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module-es2015.js.map