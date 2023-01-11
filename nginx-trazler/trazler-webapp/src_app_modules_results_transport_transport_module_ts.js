"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_results_transport_transport_module_ts"],{

/***/ 45261:
/*!***********************************************************************!*\
  !*** ./src/app/modules/results/transport/transport-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransportRoutingModule": () => (/* binding */ TransportRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);



const routes = [
    {
        path: 'flights/:dest',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_results_results-cart-item-selection_module_ts"), __webpack_require__.e("default-src_app_modules_core_components_paginate_component_ts_service_list_component_ts-src_a-6fa83f"), __webpack_require__.e("src_app_modules_results_transport_flights_flights_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./flights/flights.module */ 86470)).then((m) => m.FlightsModule),
    },
    {
        path: 'flights',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_results_results-cart-item-selection_module_ts"), __webpack_require__.e("default-src_app_modules_core_components_paginate_component_ts_service_list_component_ts-src_a-6fa83f"), __webpack_require__.e("src_app_modules_results_transport_flights_flights_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./flights/flights.module */ 86470)).then((m) => m.FlightsModule),
    },
    {
        path: 'trains/:dest',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_results_results-cart-item-selection_module_ts"), __webpack_require__.e("default-src_app_modules_core_components_paginate_component_ts_service_list_component_ts-src_a-6fa83f"), __webpack_require__.e("src_app_modules_results_transport_trains_trains_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./trains/trains.module */ 97809)).then((m) => m.TrainsModule),
    },
    {
        path: 'trains',
        loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_results_results-cart-item-selection_module_ts"), __webpack_require__.e("default-src_app_modules_core_components_paginate_component_ts_service_list_component_ts-src_a-6fa83f"), __webpack_require__.e("src_app_modules_results_transport_trains_trains_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./trains/trains.module */ 97809)).then((m) => m.TrainsModule),
    },
    {
        path: '',
        redirectTo: 'flights',
        pathMatch: 'full',
    },
    {
        path: '**',
        redirectTo: 'flights',
    },
];
class TransportRoutingModule {
}
TransportRoutingModule.ɵfac = function TransportRoutingModule_Factory(t) { return new (t || TransportRoutingModule)(); };
TransportRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: TransportRoutingModule });
TransportRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](TransportRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule] }); })();


/***/ }),

/***/ 18073:
/*!******************************************************************!*\
  !*** ./src/app/modules/results/transport/transport.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransportComponent": () => (/* binding */ TransportComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class TransportComponent {
    constructor() { }
    ngOnInit() { }
}
TransportComponent.ɵfac = function TransportComponent_Factory(t) { return new (t || TransportComponent)(); };
TransportComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TransportComponent, selectors: [["tz-transport"]], decls: 2, vars: 0, template: function TransportComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "transport works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmFuc3BvcnQuY29tcG9uZW50LnNjc3MifQ== */"] });


/***/ }),

/***/ 69290:
/*!***************************************************************!*\
  !*** ./src/app/modules/results/transport/transport.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransportModule": () => (/* binding */ TransportModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _transport_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transport-routing.module */ 45261);
/* harmony import */ var _transport_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transport.component */ 18073);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class TransportModule {
}
TransportModule.ɵfac = function TransportModule_Factory(t) { return new (t || TransportModule)(); };
TransportModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TransportModule });
TransportModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _transport_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransportRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TransportModule, { declarations: [_transport_component__WEBPACK_IMPORTED_MODULE_1__.TransportComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _transport_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransportRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_results_transport_transport_module_ts.js.map