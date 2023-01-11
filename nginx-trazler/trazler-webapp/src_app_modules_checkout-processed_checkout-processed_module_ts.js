"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_checkout-processed_checkout-processed_module_ts"],{

/***/ 12823:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/checkout-processed/checkout-processed-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutSuccessRoutingModule": () => (/* binding */ CheckoutSuccessRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _checkout_processed_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-processed.component */ 39414);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _checkout_processed_component__WEBPACK_IMPORTED_MODULE_0__.CheckoutSuccessComponent }];
class CheckoutSuccessRoutingModule {
}
CheckoutSuccessRoutingModule.ɵfac = function CheckoutSuccessRoutingModule_Factory(t) { return new (t || CheckoutSuccessRoutingModule)(); };
CheckoutSuccessRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CheckoutSuccessRoutingModule });
CheckoutSuccessRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CheckoutSuccessRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 39414:
/*!****************************************************************************!*\
  !*** ./src/app/modules/checkout-processed/checkout-processed.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutSuccessComponent": () => (/* binding */ CheckoutSuccessComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _services_modules_bookings_dataservices_booking_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/bookings/dataservices/booking.data.service */ 65279);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);






function CheckoutSuccessComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutSuccessComponent_ng_container_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r2.proceedNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, "CHECKOUT.PROCESSED.SUCCESS.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, "CHECKOUT.PROCESSED.SUCCESS.INFO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, "CHECKOUT.PROCESSED.SUCCESS.CONTENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 10, ctx_r0.userService.IsLogged() ? "CHECKOUT.PROCESSED.SUCCESS.ACTION" : "GENERAL.GO_TO_HOMEPAGE"), " ");
} }
function CheckoutSuccessComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function CheckoutSuccessComponent_ng_container_2_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.proceedNext(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, "CHECKOUT.PROCESSED.FAILURE.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 6, "CHECKOUT.PROCESSED.FAILURE.INFO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 8, "CHECKOUT.PROCESSED.FAILURE.CONTENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 10, "CHECKOUT.PROCESSED.FAILURE.ACTION"), " ");
} }
class CheckoutSuccessComponent {
    constructor(activeRoute, router, userService, bookingDataService) {
        this.activeRoute = activeRoute;
        this.router = router;
        this.userService = userService;
        this.bookingDataService = bookingDataService;
        this.processedStatus = this.activeRoute.snapshot.params['status'];
        this.bookingId = this.activeRoute.snapshot.params['bookingId'];
    }
    ngOnInit() { }
    proceedNext() {
        if (this.processedStatus === 'success') {
            this.bookingDataService.setBookings([]);
            if (this.bookingId) {
                this.router.navigate(['bookings', 'booking-summary', this.bookingId]);
            }
            else {
                // we should not reach that step, but in case....
                this.router.navigate(['bookings']);
            }
        }
        else {
            this.router.navigate(['checkout'], { replaceUrl: true });
        }
    }
}
CheckoutSuccessComponent.ɵfac = function CheckoutSuccessComponent_Factory(t) { return new (t || CheckoutSuccessComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_modules_bookings_dataservices_booking_data_service__WEBPACK_IMPORTED_MODULE_1__.BookingDataService)); };
CheckoutSuccessComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CheckoutSuccessComponent, selectors: [["tz-checkout-processed"]], decls: 3, vars: 2, consts: [[1, "booking-info-container"], [4, "ngIf"], ["data-test", "booking-success-title", 1, "booking-title"], ["data-test", "booking-success-info", 1, "booking-info"], ["data-test", "booking-success-content", 1, "notification-sent-info"], [1, "tz-btn", "tz-btn-primary", 3, "click"], ["data-test", "booking-failure-title", 1, "booking-title"], ["data-test", "booking-failure-info", 1, "booking-info"], ["data-test", "booking-failure-content", 1, "notification-sent-info"], [1, "tz-icon-arrow", "arrow"]], template: function CheckoutSuccessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CheckoutSuccessComponent_ng_container_1_Template, 13, 12, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CheckoutSuccessComponent_ng_container_2_Template, 14, 12, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.processedStatus === "success");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.processedStatus === "payment-failed");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["[_nghost-%COMP%], .booking-info-container[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.booking-info-container[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--upgrade-right-border);\n  padding-top: 10rem;\n  padding-bottom: 10rem;\n  text-align: center;\n}\n\n.booking-info-container[_ngcontent-%COMP%]   .booking-title[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-bold);\n  font-size: 1.75rem;\n  line-height: 2.313rem;\n}\n\n.booking-info-container[_ngcontent-%COMP%]   .booking-info[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-semibold);\n  font-size: 1.25rem;\n  line-height: 1.688rem;\n  margin-top: 0.5rem;\n}\n\n.booking-info-container[_ngcontent-%COMP%]   .notification-sent-info[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-normal);\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  margin-top: 0.5rem;\n}\n\n.booking-info-container[_ngcontent-%COMP%]   .tz-btn[_ngcontent-%COMP%] {\n  margin: 1.5rem auto 0;\n  display: flex;\n  align-items: center;\n}\n\n.booking-info-container[_ngcontent-%COMP%]   .tz-btn[_ngcontent-%COMP%]   .tz-icon-arrow[_ngcontent-%COMP%] {\n  transform: rotate(90deg);\n  margin-right: 0.625rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LXByb2Nlc3NlZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksaURBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDSTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNSOztBQUVJO0VBQ0ksd0NBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7QUFBUjs7QUFHSTtFQUNJLHNDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBRFI7O0FBSUk7RUFDSSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQUZSOztBQUlRO0VBQ0ksd0JBQUE7RUFDQSxzQkFBQTtBQUZaIiwiZmlsZSI6ImNoZWNrb3V0LXByb2Nlc3NlZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0LFxuLmJvb2tpbmctaW5mby1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLmJvb2tpbmctaW5mby1jb250YWluZXIge1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS11cGdyYWRlLXJpZ2h0LWJvcmRlcik7XG4gICAgcGFkZGluZy10b3A6IDEwcmVtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuYm9va2luZy10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgICAgZm9udC1zaXplOiAxLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMi4zMTNyZW07XG4gICAgfVxuXG4gICAgLmJvb2tpbmctaW5mbyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjg4cmVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgfVxuXG4gICAgLm5vdGlmaWNhdGlvbi1zZW50LWluZm8ge1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICB9XG5cbiAgICAudHotYnRuIHtcbiAgICAgICAgbWFyZ2luOiAxLjVyZW0gYXV0byAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC50ei1pY29uLWFycm93IHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 87705:
/*!*************************************************************************!*\
  !*** ./src/app/modules/checkout-processed/checkout-processed.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutProcessedModule": () => (/* binding */ CheckoutProcessedModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _checkout_processed_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-processed-routing.module */ 12823);
/* harmony import */ var _checkout_processed_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout-processed.component */ 39414);
/* harmony import */ var src_app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/translation.config */ 19027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class CheckoutProcessedModule {
}
CheckoutProcessedModule.ɵfac = function CheckoutProcessedModule_Factory(t) { return new (t || CheckoutProcessedModule)(); };
CheckoutProcessedModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CheckoutProcessedModule });
CheckoutProcessedModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _checkout_processed_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutSuccessRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule.forChild(src_app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__.TRANSLATION_CONFIG)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CheckoutProcessedModule, { declarations: [_checkout_processed_component__WEBPACK_IMPORTED_MODULE_1__.CheckoutSuccessComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _checkout_processed_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutSuccessRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_checkout-processed_checkout-processed_module_ts.js.map