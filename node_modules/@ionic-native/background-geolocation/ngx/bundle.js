'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tslib = require('tslib');
var core$1 = require('@angular/core');
var core = require('@ionic-native/core');
require('rxjs');

exports.BackgroundGeolocationLocationCode = void 0;
(function (BackgroundGeolocationLocationCode) {
    BackgroundGeolocationLocationCode[BackgroundGeolocationLocationCode["PERMISSION_DENIED"] = 1] = "PERMISSION_DENIED";
    BackgroundGeolocationLocationCode[BackgroundGeolocationLocationCode["LOCATION_UNAVAILABLE"] = 2] = "LOCATION_UNAVAILABLE";
    BackgroundGeolocationLocationCode[BackgroundGeolocationLocationCode["TIMEOUT"] = 3] = "TIMEOUT";
})(exports.BackgroundGeolocationLocationCode || (exports.BackgroundGeolocationLocationCode = {}));
exports.BackgroundGeolocationNativeProvider = void 0;
(function (BackgroundGeolocationNativeProvider) {
    BackgroundGeolocationNativeProvider["gps"] = "gps";
    BackgroundGeolocationNativeProvider["network"] = "network";
    BackgroundGeolocationNativeProvider["passive"] = "passive";
    BackgroundGeolocationNativeProvider["fused"] = "fused";
})(exports.BackgroundGeolocationNativeProvider || (exports.BackgroundGeolocationNativeProvider = {}));
exports.BackgroundGeolocationLocationProvider = void 0;
(function (BackgroundGeolocationLocationProvider) {
    BackgroundGeolocationLocationProvider[BackgroundGeolocationLocationProvider["DISTANCE_FILTER_PROVIDER"] = 0] = "DISTANCE_FILTER_PROVIDER";
    BackgroundGeolocationLocationProvider[BackgroundGeolocationLocationProvider["ACTIVITY_PROVIDER"] = 1] = "ACTIVITY_PROVIDER";
    BackgroundGeolocationLocationProvider[BackgroundGeolocationLocationProvider["RAW_PROVIDER"] = 2] = "RAW_PROVIDER";
})(exports.BackgroundGeolocationLocationProvider || (exports.BackgroundGeolocationLocationProvider = {}));
exports.BackgroundGeolocationEvents = void 0;
(function (BackgroundGeolocationEvents) {
    BackgroundGeolocationEvents["http_authorization"] = "http_authorization";
    BackgroundGeolocationEvents["abort_requested"] = "abort_requested";
    BackgroundGeolocationEvents["background"] = "background";
    BackgroundGeolocationEvents["foreground"] = "foreground";
    BackgroundGeolocationEvents["authorization"] = "authorization";
    BackgroundGeolocationEvents["error"] = "error";
    BackgroundGeolocationEvents["stop"] = "stop";
    BackgroundGeolocationEvents["start"] = "start";
    BackgroundGeolocationEvents["activity"] = "activity";
    BackgroundGeolocationEvents["stationary"] = "stationary";
    BackgroundGeolocationEvents["location"] = "location";
})(exports.BackgroundGeolocationEvents || (exports.BackgroundGeolocationEvents = {}));
exports.BackgroundGeolocationAuthorizationStatus = void 0;
(function (BackgroundGeolocationAuthorizationStatus) {
    BackgroundGeolocationAuthorizationStatus[BackgroundGeolocationAuthorizationStatus["NOT_AUTHORIZED"] = 0] = "NOT_AUTHORIZED";
    BackgroundGeolocationAuthorizationStatus[BackgroundGeolocationAuthorizationStatus["AUTHORIZED"] = 1] = "AUTHORIZED";
    BackgroundGeolocationAuthorizationStatus[BackgroundGeolocationAuthorizationStatus["AUTHORIZED_FOREGROUND"] = 2] = "AUTHORIZED_FOREGROUND";
})(exports.BackgroundGeolocationAuthorizationStatus || (exports.BackgroundGeolocationAuthorizationStatus = {}));
exports.BackgroundGeolocationLogLevel = void 0;
(function (BackgroundGeolocationLogLevel) {
    BackgroundGeolocationLogLevel["TRACE"] = "TRACE";
    BackgroundGeolocationLogLevel["DEBUG"] = "DEBUG";
    BackgroundGeolocationLogLevel["INFO"] = "INFO";
    BackgroundGeolocationLogLevel["WARN"] = "WARN";
    BackgroundGeolocationLogLevel["ERROR"] = "ERROR";
})(exports.BackgroundGeolocationLogLevel || (exports.BackgroundGeolocationLogLevel = {}));
var BackgroundGeolocation = /** @class */ (function (_super) {
    tslib.__extends(BackgroundGeolocation, _super);
    function BackgroundGeolocation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BackgroundGeolocation.prototype.configure = function (options) { return core.cordova(this, "configure", {}, arguments); };
    BackgroundGeolocation.prototype.start = function () { return core.cordova(this, "start", {}, arguments); };
    BackgroundGeolocation.prototype.stop = function () { return core.cordova(this, "stop", {}, arguments); };
    BackgroundGeolocation.prototype.finish = function () { return core.cordova(this, "finish", { "platforms": ["iOS"] }, arguments); };
    BackgroundGeolocation.prototype.changePace = function (isMoving) { return core.cordova(this, "changePace", { "platforms": ["iOS"] }, arguments); };
    BackgroundGeolocation.prototype.setConfig = function (options) { return core.cordova(this, "setConfig", { "callbackOrder": "reverse" }, arguments); };
    BackgroundGeolocation.prototype.getStationaryLocation = function () { return core.cordova(this, "getStationaryLocation", { "platforms": ["iOS"] }, arguments); };
    BackgroundGeolocation.prototype.onStationary = function () { return core.cordova(this, "onStationary", { "platforms": ["iOS"] }, arguments); };
    BackgroundGeolocation.prototype.isLocationEnabled = function () { return core.cordova(this, "isLocationEnabled", { "platforms": ["Android"] }, arguments); };
    BackgroundGeolocation.prototype.showAppSettings = function () { return core.cordova(this, "showAppSettings", { "sync": true }, arguments); };
    BackgroundGeolocation.prototype.showLocationSettings = function () { return core.cordova(this, "showLocationSettings", { "sync": true }, arguments); };
    BackgroundGeolocation.prototype.watchLocationMode = function () { return core.cordova(this, "watchLocationMode", { "platforms": ["Android"], "observable": true }, arguments); };
    BackgroundGeolocation.prototype.stopWatchingLocationMode = function () { return core.cordova(this, "stopWatchingLocationMode", { "platforms": ["Android"] }, arguments); };
    BackgroundGeolocation.prototype.getLocations = function () { return core.cordova(this, "getLocations", { "platforms": ["Android"] }, arguments); };
    BackgroundGeolocation.prototype.getValidLocations = function () { return core.cordova(this, "getValidLocations", {}, arguments); };
    BackgroundGeolocation.prototype.deleteLocation = function (locationId) { return core.cordova(this, "deleteLocation", { "platforms": ["Android"] }, arguments); };
    BackgroundGeolocation.prototype.deleteAllLocations = function () { return core.cordova(this, "deleteAllLocations", { "platforms": ["Android"] }, arguments); };
    BackgroundGeolocation.prototype.switchMode = function (modeId) { return core.cordova(this, "switchMode", { "platforms": ["iOS"] }, arguments); };
    BackgroundGeolocation.prototype.getLogEntries = function (limit, fromId, minLevel) { return core.cordova(this, "getLogEntries", {}, arguments); };
    BackgroundGeolocation.prototype.getConfig = function () { return core.cordova(this, "getConfig", {}, arguments); };
    BackgroundGeolocation.prototype.getCurrentLocation = function (options) { return core.cordova(this, "getCurrentLocation", { "callbackOrder": "reverse" }, arguments); };
    BackgroundGeolocation.prototype.checkStatus = function () { return core.cordova(this, "checkStatus", {}, arguments); };
    BackgroundGeolocation.prototype.startTask = function () { return core.cordova(this, "startTask", { "platforms": ["IOS"] }, arguments); };
    BackgroundGeolocation.prototype.endTask = function (taskKey) { return core.cordova(this, "endTask", { "platforms": ["IOS"] }, arguments); };
    BackgroundGeolocation.prototype.headlessTask = function (func) { return core.cordova(this, "headlessTask", {}, arguments); };
    BackgroundGeolocation.prototype.forceSync = function () { return core.cordova(this, "forceSync", {}, arguments); };
    BackgroundGeolocation.prototype.on = function (event) { return core.cordova(this, "on", { "observable": true }, arguments); };
    BackgroundGeolocation.prototype.removeAllListeners = function (event) { return core.cordova(this, "removeAllListeners", {}, arguments); };
    BackgroundGeolocation.pluginName = "BackgroundGeolocation";
    BackgroundGeolocation.plugin = "@mauron85/cordova-plugin-background-geolocation";
    BackgroundGeolocation.pluginRef = "BackgroundGeolocation";
    BackgroundGeolocation.repo = "https://github.com/mauron85/cordova-plugin-background-geolocation";
    BackgroundGeolocation.platforms = ["Android", "iOS"];
    BackgroundGeolocation.decorators = [
        { type: core$1.Injectable }
    ];
    return BackgroundGeolocation;
}(core.IonicNativePlugin));

exports.BackgroundGeolocation = BackgroundGeolocation;
