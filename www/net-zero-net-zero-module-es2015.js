(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["net-zero-net-zero-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/net-zero/net-zero.page.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/net-zero/net-zero.page.html ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n    <ion-toolbar>\n        <ion-item>\n            <ion-button routerLink=\"../home\">\n                <ion-icon name=\"arrow-back-outline\"></ion-icon>\n            </ion-button>\n            <ion-title>NET ZERO</ion-title>\n        </ion-item>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div>\n        <ion-segment>\n            <ion-segment-button value=\"signup\" (click)=\"onCalculate()\">\n                <ion-label>Calculate</ion-label>\n            </ion-segment-button>\n            <ion-segment-button value=\"login\" (click)=\"onSearch()\">\n                <ion-label>Search</ion-label>\n            </ion-segment-button>\n\n        </ion-segment>\n        <div *ngIf=\"search\">\n            <ion-item>\n                <ion-input [(ngModel)]=\"buildGet\" placeholder=\"Enter Building Name/Number\"></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-button class=\"details-button\" (click)=\"clickGet()\">Get</ion-button>\n            </ion-item>\n            <ion-item *ngFor=\"let item of reqStatus\">\n                <label>{{item.name}}</label>\n                <label *ngIf=\"item.status\" slot=\"end\">Positive</label>\n                <label *ngIf=\"!item.status\" slot=\"end\">Negative</label>\n            </ion-item>\n        </div>\n        <div *ngIf=\"calc\">\n            <br>\n            <ion-input [(ngModel)]=\"buildId\" placeholder=\"Enter Building Name/Number\"></ion-input>\n            <ion-input [(ngModel)]=\"buildUsed\" placeholder=\"Enter Electricity Used(units)\"></ion-input>\n            <br>\n\n            <label>Add eco products if under use </label>\n            <br>\n            <ion-item *ngFor=\"let item of deviceids\">\n                <label>Device {{deviceids[item]+1}} </label>\n                <ion-input [(ngModel)]=\"deviceValues[item]\" placeholder=\"Enter Value (units)\" slot=\"end\"></ion-input>\n            </ion-item>\n            <ion-button class=\"details-button\" (click)=\"addDevice()\">Add Device\n            </ion-button>\n            <ion-button class=\"details-button\" (click)=\"clickCalculate()\">Sumbit\n            </ion-button>\n        </div>\n    </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/net-zero/net-zero-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/net-zero/net-zero-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: NetZeroPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetZeroPageRoutingModule", function() { return NetZeroPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _net_zero_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./net-zero.page */ "./src/app/net-zero/net-zero.page.ts");




const routes = [
    {
        path: '',
        component: _net_zero_page__WEBPACK_IMPORTED_MODULE_3__["NetZeroPage"]
    }
];
let NetZeroPageRoutingModule = class NetZeroPageRoutingModule {
};
NetZeroPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NetZeroPageRoutingModule);



/***/ }),

/***/ "./src/app/net-zero/net-zero.module.ts":
/*!*********************************************!*\
  !*** ./src/app/net-zero/net-zero.module.ts ***!
  \*********************************************/
/*! exports provided: NetZeroPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetZeroPageModule", function() { return NetZeroPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _net_zero_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./net-zero-routing.module */ "./src/app/net-zero/net-zero-routing.module.ts");
/* harmony import */ var _net_zero_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./net-zero.page */ "./src/app/net-zero/net-zero.page.ts");







let NetZeroPageModule = class NetZeroPageModule {
};
NetZeroPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _net_zero_routing_module__WEBPACK_IMPORTED_MODULE_5__["NetZeroPageRoutingModule"]
        ],
        declarations: [_net_zero_page__WEBPACK_IMPORTED_MODULE_6__["NetZeroPage"]]
    })
], NetZeroPageModule);



/***/ }),

/***/ "./src/app/net-zero/net-zero.page.scss":
/*!*********************************************!*\
  !*** ./src/app/net-zero/net-zero.page.scss ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".details-button {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy91andhbGMvRG9jdW1lbnRzL2RhbC9UZXJtMi9USS9wdG9qZWN0L3Nhdi1teS1iaWwvc3JjL2FwcC9uZXQtemVyby9uZXQtemVyby5wYWdlLnNjc3MiLCJzcmMvYXBwL25ldC16ZXJvL25ldC16ZXJvLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbmV0LXplcm8vbmV0LXplcm8ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmRldGFpbHMtYnV0dG9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDUwJTtcbn0iLCIuZGV0YWlscy1idXR0b24ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgd2lkdGg6IDUwJTtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/net-zero/net-zero.page.ts":
/*!*******************************************!*\
  !*** ./src/app/net-zero/net-zero.page.ts ***!
  \*******************************************/
/*! exports provided: NetZeroPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NetZeroPage", function() { return NetZeroPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/data.service */ "./src/app/services/data.service.ts");




let NetZeroPage = class NetZeroPage {
    constructor(alertController, _data) {
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
    ngOnInit() {
    }
    onClickCal() {
    }
    onSearch() {
        this.search = true;
        this.calc = false;
    }
    onCalculate() {
        this.search = false;
        this.calc = true;
    }
    clickCalculate() {
        this.finalvalue = 0;
        for (var index in this.deviceValues) {
            this.finalvalue = parseFloat(this.deviceValues[index].toString()) + parseFloat(this.finalvalue.toString());
        }
        console.log(this.deviceValues);
        console.log(this.buildUsed);
        console.log(this.finalvalue);
        if (!this.buildId || !this.buildUsed) {
            this.fillDetails();
        }
        else {
            if (this.buildUsed <= this.finalvalue) {
                this.statusPos();
            }
            else if (this.buildUsed > this.finalvalue) {
                this.statusNeg();
            }
            else {
                this.noStatus();
            }
        }
    }
    clickGet() {
        this.reqStatus = [];
        if (!this.buildGet) {
            this.fillDetails();
        }
        else {
            this.data.getBuildings(this.buildGet).subscribe(data => {
                this.getData(data);
                console.log(data);
            });
        }
    }
    getData(data) {
        for (var index in data) {
            this.reqStatus.push({
                name: data[index].name,
                status: data[index].status
            });
        }
        console.log(this.reqStatus);
    }
    addDevice() {
        this.deviceids.push(this.deviceClick);
        this.deviceClick += 1;
        this.values.push(1);
    }
    displayResult() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Success',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    fillDetails() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'FIll all Details',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
    statusPos() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Net Zero Status Achieved',
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            console.log(this.buildId);
                            this.data.postBuildings(this.buildId, true).subscribe(data => console.log(data));
                        }
                    }]
            });
            yield alert.present();
        });
    }
    statusNeg() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Net Zero not Status Achieved',
                buttons: [{
                        text: 'OK',
                        handler: () => {
                            console.log(this.buildId);
                            this.data.postBuildings(this.buildId, false).subscribe(data => console.log(data));
                        }
                    }]
            });
            yield alert.present();
        });
    }
    noStatus() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'No Status',
                buttons: ['OK']
            });
            yield alert.present();
        });
    }
};
NetZeroPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
NetZeroPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-net-zero',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./net-zero.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/net-zero/net-zero.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./net-zero.page.scss */ "./src/app/net-zero/net-zero.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], NetZeroPage);



/***/ })

}]);
//# sourceMappingURL=net-zero-net-zero-module-es2015.js.map