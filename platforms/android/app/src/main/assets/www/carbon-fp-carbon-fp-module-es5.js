function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["carbon-fp-carbon-fp-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/carbon-fp/carbon-fp.page.html":
  /*!*************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carbon-fp/carbon-fp.page.html ***!
    \*************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCarbonFpCarbonFpPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n    <ion-toolbar>\n        <ion-item>\n            <ion-button routerLink=\"../home\">\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n            </ion-button>\n            <ion-title>SUPPORT</ion-title>\n        </ion-item>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <h2>Contact Us:</h2><br>\n    <ion-item class=\"main-content\">\n        <label>Email: savmybil@support.com</label><br><br>\n    </ion-item>\n    <ion-item class=\"main-content\">\n        <label>Phone: +1(901)-806-7090</label>\n    </ion-item>\n\n\n    <br><br>\n    <h2>Form:</h2><br>\n\n    <ion-item class=\"main-content\">\n        <ion-input [(ngModel)]=\"userName\" placeholder=\"Name\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"main-content\">\n        <ion-input [(ngModel)]=\"userMail\" placeholder=\"Mail\"></ion-input>\n    </ion-item>\n\n    <ion-item class=\"main-content\">\n        <label>Body:</label>\n    </ion-item>\n    <ion-item class=\"main-content\">\n        <input type=\"text\" [(ngModel)]=\"mailBody\">\n    </ion-item>\n\n    <ion-item class=\"main-content\">\n        <ion-button (click)=\"onSubmit()\">Submit</ion-button>\n    </ion-item>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/carbon-fp/carbon-fp-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/carbon-fp/carbon-fp-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: CarbonFpPageRoutingModule */

  /***/
  function srcAppCarbonFpCarbonFpRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarbonFpPageRoutingModule", function () {
      return CarbonFpPageRoutingModule;
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


    var _carbon_fp_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./carbon-fp.page */
    "./src/app/carbon-fp/carbon-fp.page.ts");

    var routes = [{
      path: '',
      component: _carbon_fp_page__WEBPACK_IMPORTED_MODULE_3__["CarbonFpPage"]
    }];

    var CarbonFpPageRoutingModule = function CarbonFpPageRoutingModule() {
      _classCallCheck(this, CarbonFpPageRoutingModule);
    };

    CarbonFpPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CarbonFpPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/carbon-fp/carbon-fp.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/carbon-fp/carbon-fp.module.ts ***!
    \***********************************************/

  /*! exports provided: CarbonFpPageModule */

  /***/
  function srcAppCarbonFpCarbonFpModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarbonFpPageModule", function () {
      return CarbonFpPageModule;
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


    var _carbon_fp_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./carbon-fp-routing.module */
    "./src/app/carbon-fp/carbon-fp-routing.module.ts");
    /* harmony import */


    var _carbon_fp_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./carbon-fp.page */
    "./src/app/carbon-fp/carbon-fp.page.ts");

    var CarbonFpPageModule = function CarbonFpPageModule() {
      _classCallCheck(this, CarbonFpPageModule);
    };

    CarbonFpPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _carbon_fp_routing_module__WEBPACK_IMPORTED_MODULE_5__["CarbonFpPageRoutingModule"]],
      declarations: [_carbon_fp_page__WEBPACK_IMPORTED_MODULE_6__["CarbonFpPage"]]
    })], CarbonFpPageModule);
    /***/
  },

  /***/
  "./src/app/carbon-fp/carbon-fp.page.scss":
  /*!***********************************************!*\
    !*** ./src/app/carbon-fp/carbon-fp.page.scss ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCarbonFpCarbonFpPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main-content {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 70%;\n}\n\ninput {\n  height: 10rem;\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91andhbGMvRG9jdW1lbnRzL2RhbC9UZXJtMi9USS9wdG9qZWN0L3Nhdi1teS1iaWwvc3JjL2FwcC9jYXJib24tZnAvY2FyYm9uLWZwLnBhZ2Uuc2NzcyIsInNyYy9hcHAvY2FyYm9uLWZwL2NhcmJvbi1mcC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7RUFDQSwwQkFBQTtFQUFBLHVCQUFBO0VBQUEsa0JBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2NhcmJvbi1mcC9jYXJib24tZnAucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW4tY29udGVudCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3MCU7XG59XG5cbmlucHV0IHtcbiAgICBoZWlnaHQ6IDEwcmVtO1xuICAgIHdpZHRoOiBmaXQtY29udGVudFxufSIsIi5tYWluLWNvbnRlbnQge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDcwJTtcbn1cblxuaW5wdXQge1xuICBoZWlnaHQ6IDEwcmVtO1xuICB3aWR0aDogZml0LWNvbnRlbnQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/carbon-fp/carbon-fp.page.ts":
  /*!*********************************************!*\
    !*** ./src/app/carbon-fp/carbon-fp.page.ts ***!
    \*********************************************/

  /*! exports provided: CarbonFpPage */

  /***/
  function srcAppCarbonFpCarbonFpPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarbonFpPage", function () {
      return CarbonFpPage;
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

    var CarbonFpPage = /*#__PURE__*/function () {
      function CarbonFpPage(alertController) {
        _classCallCheck(this, CarbonFpPage);

        this.alertController = alertController;
      }

      _createClass(CarbonFpPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          if (!this.userMail || !this.userName || !this.mailBody) {
            this.fillDetails();
          } else {
            this.onStatus();
          }
        }
      }, {
        key: "onStatus",
        value: function onStatus() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Submitted',
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
                      header: 'Fill all Details',
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
      }]);

      return CarbonFpPage;
    }();

    CarbonFpPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    CarbonFpPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-carbon-fp',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carbon-fp.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/carbon-fp/carbon-fp.page.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carbon-fp.page.scss */
      "./src/app/carbon-fp/carbon-fp.page.scss"))["default"]]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], CarbonFpPage);
    /***/
  }
}]);
//# sourceMappingURL=carbon-fp-carbon-fp-module-es5.js.map