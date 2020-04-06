function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["eco-device-eco-device-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/eco-device/eco-device.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/eco-device/eco-device.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEcoDeviceEcoDevicePageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-item>\n            <ion-button routerLink=\"../home\">\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n            </ion-button>\n            <ion-title>ECO DEVICES</ion-title>\n        </ion-item>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <br>\n    <label>Trending:</label>\n    <br>\n    <br>\n    <ion-item *ngFor=\"let item of deviceData\">\n        <label>{{item.deviceName}}</label><br>\n        <ion-item slot=\"end\">\n            <label>Cost: {{item.deviceCost}}$</label>\n            <ion-button (click)=\"onBuy(item.deviceLink)\" slot=\"end\">Buy</ion-button>\n        </ion-item>\n        <br>\n    </ion-item>\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/eco-device/eco-device-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/eco-device/eco-device-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: EcoDevicePageRoutingModule */

  /***/
  function srcAppEcoDeviceEcoDeviceRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcoDevicePageRoutingModule", function () {
      return EcoDevicePageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _eco_device_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./eco-device.page */
    "./src/app/eco-device/eco-device.page.ts");

    var routes = [{
      path: '',
      component: _eco_device_page__WEBPACK_IMPORTED_MODULE_3__["EcoDevicePage"]
    }];

    var EcoDevicePageRoutingModule = function EcoDevicePageRoutingModule() {
      _classCallCheck(this, EcoDevicePageRoutingModule);
    };

    EcoDevicePageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EcoDevicePageRoutingModule);
    /***/
  },

  /***/
  "./src/app/eco-device/eco-device.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/eco-device/eco-device.module.ts ***!
    \*************************************************/

  /*! exports provided: EcoDevicePageModule */

  /***/
  function srcAppEcoDeviceEcoDeviceModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcoDevicePageModule", function () {
      return EcoDevicePageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _eco_device_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./eco-device-routing.module */
    "./src/app/eco-device/eco-device-routing.module.ts");
    /* harmony import */


    var _eco_device_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./eco-device.page */
    "./src/app/eco-device/eco-device.page.ts");

    var EcoDevicePageModule = function EcoDevicePageModule() {
      _classCallCheck(this, EcoDevicePageModule);
    };

    EcoDevicePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _eco_device_routing_module__WEBPACK_IMPORTED_MODULE_5__["EcoDevicePageRoutingModule"]],
      declarations: [_eco_device_page__WEBPACK_IMPORTED_MODULE_6__["EcoDevicePage"]]
    })], EcoDevicePageModule);
    /***/
  },

  /***/
  "./src/app/eco-device/eco-device.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/eco-device/eco-device.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEcoDeviceEcoDevicePageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vjby1kZXZpY2UvZWNvLWRldmljZS5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/eco-device/eco-device.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/eco-device/eco-device.page.ts ***!
    \***********************************************/

  /*! exports provided: EcoDevicePage */

  /***/
  function srcAppEcoDeviceEcoDevicePageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EcoDevicePage", function () {
      return EcoDevicePage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var EcoDevicePage = /*#__PURE__*/function () {
      function EcoDevicePage(data, router) {
        var _this = this;

        _classCallCheck(this, EcoDevicePage);

        this.data = data;
        this.deviceData = [];
        data.getNativeMessages().subscribe(function (data) {
          _this.getData(data);
        });
      }

      _createClass(EcoDevicePage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onBuy",
        value: function onBuy(link) {
          window.open(link, '_system', 'location=yes');
        }
      }, {
        key: "getData",
        value: function getData(data) {
          //this.deviceData=data
          for (var index in data) {
            this.deviceData.push({
              deviceId: data[index].deviceId,
              deviceName: data[index].deviceName,
              deviceLink: data[index].deviceLink,
              deviceCost: data[index].deviceCost
            });
          }
        }
      }]);

      return EcoDevicePage;
    }();

    EcoDevicePage.ctorParameters = function () {
      return [{
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    EcoDevicePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-eco-device',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./eco-device.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/eco-device/eco-device.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./eco-device.page.scss */
      "./src/app/eco-device/eco-device.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_data_service__WEBPACK_IMPORTED_MODULE_2__["DataService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])], EcoDevicePage);
    /***/
  }
}]);
//# sourceMappingURL=eco-device-eco-device-module-es5.js.map