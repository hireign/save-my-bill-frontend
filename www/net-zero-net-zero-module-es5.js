function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["net-zero-net-zero-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/net-zero/net-zero.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/net-zero/net-zero.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNetZeroNetZeroPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-item>\n            <ion-button routerLink=\"../home\">\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n            </ion-button>\n            <ion-title>NET ZERO</ion-title>\n        </ion-item>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div>\n        <ion-segment>\n            <ion-segment-button value=\"signup\" (click)=\"onCalculate()\">\n                <ion-label>Calculate</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"login\" (click)=\"onSearch()\">\n                <ion-label>Search</ion-label>\n            </ion-segment-button>\n\n        </ion-segment>\n        <div *ngIf=\"search\">\n            <ion-item>\n                <ion-input [(ngModel)]=\"buildGet\" placeholder=\"Enter Building Name/Number\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-button class=\"details-button\" (click)=\"clickGet()\">Get</ion-button>\n            </ion-item>\n            <ion-item *ngFor=\"let item of reqStatus\">\n                <label>{{item.name}}</label>\n                <label *ngIf=\"item.status\" slot=\"end\">Positive</label>\n                <label *ngIf=\"!item.status\" slot=\"end\">Negative</label>\n            </ion-item>\n        </div>\n        <div *ngIf=\"calc\">\n            <br>\n            <ion-input [(ngModel)]=\"buildId\" placeholder=\"Enter Building Name/Number\"></ion-input>\n            <ion-input [(ngModel)]=\"buildUsed\" placeholder=\"Enter Electricity Used(units)\"></ion-input>\n            <br>\n\n            <label>Add eco products if under use </label>\n            <br>\n            <ion-item *ngFor=\"let item of deviceids\">\n                <label>Device {{deviceids[item]+1}} </label>\n                <ion-input [(ngModel)]=\"deviceValues[item]\" placeholder=\"Enter Value (units)\" slot=\"end\"></ion-input>\n            </ion-item>\n            <ion-button class=\"details-button\" (click)=\"addDevice()\">Add Device\n            </ion-button>\n            <ion-button class=\"details-button\" (click)=\"clickCalculate()\">Sumbit\n            </ion-button>\n        </div>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/net-zero/net-zero-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/net-zero/net-zero-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: NetZeroPageRoutingModule */

  /***/
  function srcAppNetZeroNetZeroRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetZeroPageRoutingModule", function () {
      return NetZeroPageRoutingModule;
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


    var _net_zero_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./net-zero.page */
    "./src/app/net-zero/net-zero.page.ts");

    var routes = [{
      path: '',
      component: _net_zero_page__WEBPACK_IMPORTED_MODULE_3__["NetZeroPage"]
    }];

    var NetZeroPageRoutingModule = function NetZeroPageRoutingModule() {
      _classCallCheck(this, NetZeroPageRoutingModule);
    };

    NetZeroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], NetZeroPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/net-zero/net-zero.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/net-zero/net-zero.module.ts ***!
    \*********************************************/

  /*! exports provided: NetZeroPageModule */

  /***/
  function srcAppNetZeroNetZeroModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetZeroPageModule", function () {
      return NetZeroPageModule;
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


    var _net_zero_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./net-zero-routing.module */
    "./src/app/net-zero/net-zero-routing.module.ts");
    /* harmony import */


    var _net_zero_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./net-zero.page */
    "./src/app/net-zero/net-zero.page.ts");

    var NetZeroPageModule = function NetZeroPageModule() {
      _classCallCheck(this, NetZeroPageModule);
    };

    NetZeroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _net_zero_routing_module__WEBPACK_IMPORTED_MODULE_5__["NetZeroPageRoutingModule"]],
      declarations: [_net_zero_page__WEBPACK_IMPORTED_MODULE_6__["NetZeroPage"]]
    })], NetZeroPageModule);
    /***/
  },

  /***/
  "./src/app/net-zero/net-zero.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/net-zero/net-zero.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNetZeroNetZeroPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".details-button {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91andhbGMvRG9jdW1lbnRzL2RhbC9UZXJtMi9USS9wdG9qZWN0L3Nhdi1teS1iaWwvc3JjL2FwcC9uZXQtemVyby9uZXQtemVyby5wYWdlLnNjc3MiLCJzcmMvYXBwL25ldC16ZXJvL25ldC16ZXJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbmV0LXplcm8vbmV0LXplcm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbn0iLCIuZGV0YWlscy1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/net-zero/net-zero.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/net-zero/net-zero.page.ts ***!
    \*******************************************/

  /*! exports provided: NetZeroPage */

  /***/
  function srcAppNetZeroNetZeroPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetZeroPage", function () {
      return NetZeroPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/data.service */
    "./src/app/services/data.service.ts");

    var NetZeroPage = /*#__PURE__*/function () {
      function NetZeroPage(alertController, _data) {
        _classCallCheck(this, NetZeroPage);

        this.alertController = alertController;
        this.search = false;
        this.calc = false;
        this.values = [1];
        this.deviceids = [];
        this.deviceValues = [];
        this.finalvalue = 0;
        this.deviceValue = 1;
        this.deviceClick = 0;
        this.reqStatus = [];
        this.data = _data;
      }

      _createClass(NetZeroPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onClickCal",
        value: function onClickCal() {}
      }, {
        key: "onSearch",
        value: function onSearch() {
          this.search = true;
          this.calc = false;
        }
      }, {
        key: "onCalculate",
        value: function onCalculate() {
          this.search = false;
          this.calc = true;
        }
      }, {
        key: "clickCalculate",
        value: function clickCalculate() {
          this.finalvalue = 0;

          for (var index in this.deviceValues) {
            this.finalvalue = parseFloat(this.deviceValues[index].toString()) + parseFloat(this.finalvalue.toString());
          }

          console.log(this.deviceValues);
          console.log(this.buildUsed);
          console.log(this.finalvalue);

          if (!this.buildId || !this.buildUsed) {
            this.fillDetails();
          } else {
            if (this.buildUsed <= this.finalvalue) {
              this.statusPos();
            } else if (this.buildUsed > this.finalvalue) {
              this.statusNeg();
            } else {
              this.noStatus();
            }
          }
        }
      }, {
        key: "clickGet",
        value: function clickGet() {
          var _this = this;

          this.reqStatus = [];

          if (!this.buildGet) {
            this.fillDetails();
          } else {
            this.data.getBuildings(this.buildGet).subscribe(function (data) {
              _this.getData(data);

              console.log(data);
            });
          }
        }
      }, {
        key: "getData",
        value: function getData(data) {
          for (var index in data) {
            this.reqStatus.push({
              name: data[index].name,
              status: data[index].status
            });
          }

          console.log(this.reqStatus);
        }
      }, {
        key: "addDevice",
        value: function addDevice() {
          this.deviceids.push(this.deviceClick);
          this.deviceClick += 1;
          this.values.push(1);
        }
      }, {
        key: "displayResult",
        value: function displayResult() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Success',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "fillDetails",
        value: function fillDetails() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var alert;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return this.alertController.create({
                      header: 'FIll all Details',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context2.sent;
                    _context2.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "statusPos",
        value: function statusPos() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            var _this2 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.alertController.create({
                      header: 'Net Zero Status Achieved',
                      buttons: [{
                        text: 'OK',
                        handler: function handler() {
                          console.log(_this2.buildId);

                          _this2.data.postBuildings(_this2.buildId, true).subscribe(function (data) {
                            return console.log(data);
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context3.sent;
                    _context3.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }, {
        key: "statusNeg",
        value: function statusNeg() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee4$(_context4) {
              while (1) {
                switch (_context4.prev = _context4.next) {
                  case 0:
                    _context4.next = 2;
                    return this.alertController.create({
                      header: 'Net Zero not Status Achieved',
                      buttons: [{
                        text: 'OK',
                        handler: function handler() {
                          console.log(_this3.buildId);

                          _this3.data.postBuildings(_this3.buildId, false).subscribe(function (data) {
                            return console.log(data);
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context4.sent;
                    _context4.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context4.stop();
                }
              }
            }, _callee4, this);
          }));
        }
      }, {
        key: "noStatus",
        value: function noStatus() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
            var alert;
            return regeneratorRuntime.wrap(function _callee5$(_context5) {
              while (1) {
                switch (_context5.prev = _context5.next) {
                  case 0:
                    _context5.next = 2;
                    return this.alertController.create({
                      header: 'No Status',
                      buttons: ['OK']
                    });

                  case 2:
                    alert = _context5.sent;
                    _context5.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }
            }, _callee5, this);
          }));
        }
      }]);

      return NetZeroPage;
    }();

    NetZeroPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]
      }];
    };

    NetZeroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-net-zero',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./net-zero.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/net-zero/net-zero.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./net-zero.page.scss */
      "./src/app/net-zero/net-zero.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])], NetZeroPage);
    /***/
  }
}]);
//# sourceMappingURL=net-zero-net-zero-module-es5.js.map