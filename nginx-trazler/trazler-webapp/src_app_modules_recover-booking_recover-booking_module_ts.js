"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_recover-booking_recover-booking_module_ts"],{

/***/ 37046:
/*!***************************************************************************!*\
  !*** ./src/app/modules/recover-booking/recover-booking-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverBookingRoutingModule": () => (/* binding */ RecoverBookingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _recover_booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recover-booking.component */ 52324);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _recover_booking_component__WEBPACK_IMPORTED_MODULE_0__.RecoverBookingComponent }];
class RecoverBookingRoutingModule {
}
RecoverBookingRoutingModule.ɵfac = function RecoverBookingRoutingModule_Factory(t) { return new (t || RecoverBookingRoutingModule)(); };
RecoverBookingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: RecoverBookingRoutingModule });
RecoverBookingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](RecoverBookingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 52324:
/*!**********************************************************************!*\
  !*** ./src/app/modules/recover-booking/recover-booking.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverBookingComponent": () => (/* binding */ RecoverBookingComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _core_utils_storage_manager_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/storage-manager.util */ 96928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/searchEngine/services/api-access.service */ 32189);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _services_modules_meta_search_metadata_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modules/meta/search-metadata.service */ 64199);
/* harmony import */ var _services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modules/cart/services/cart.service */ 16750);
/* harmony import */ var _services_searchEngine_services_tab_routing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/searchEngine/services/tab-routing.service */ 70145);
/* harmony import */ var _services_searchEngine_services_trip_planner_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/searchEngine/services/trip-planner.service */ 46809);
/* harmony import */ var _services_modules_cart_services_cart_routing_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/modules/cart/services/cart-routing.service */ 72753);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_modules_core_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/modules/core/loader.service */ 408);
















const REJECT_STATES = { REJECT_LOGIN: 1, REJECT_INVALID_CART: 2, REJECT_UNKNOWN: 2 };
class RecoverBookingComponent {
    constructor(activeRoute, settingsService, trazlerAPI, searchDataService, searchMetadataService, cartService, tabRoutingService, tripPlannerService, cartRoutingService, router, userService, dialogService, translateService, loaderService) {
        this.activeRoute = activeRoute;
        this.settingsService = settingsService;
        this.trazlerAPI = trazlerAPI;
        this.searchDataService = searchDataService;
        this.searchMetadataService = searchMetadataService;
        this.cartService = cartService;
        this.tabRoutingService = tabRoutingService;
        this.tripPlannerService = tripPlannerService;
        this.cartRoutingService = cartRoutingService;
        this.router = router;
        this.userService = userService;
        this.dialogService = dialogService;
        this.translateService = translateService;
        this.loaderService = loaderService;
        this.loggedIn = false;
        this.combId = this.activeRoute.snapshot.params['combId'];
        this.deviceId = this.activeRoute.snapshot.params['deviceId'];
        this.xsfrToken = this.activeRoute.snapshot.params['xsfrToken'];
    }
    ngOnInit() {
        this.recoverBooking();
    }
    loadBookingData() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_12__.Observable((subscriber) => {
            _core_utils_storage_manager_util__WEBPACK_IMPORTED_MODULE_0__.StorageManagerUtil.clear(_core_utils_storage_manager_util__WEBPACK_IMPORTED_MODULE_0__.StorageManagerUtil.SESSION);
            this.settingsService.storeDeviceId({ deviceID: this.deviceId, xsfrToken: this.xsfrToken });
            this.trazlerAPI.recoverBookingData(this.combId).subscribe((recoveredData) => {
                // save search information
                const searchInfos = recoveredData.combSearch.combSearchInfos;
                searchInfos.combId = this.combId;
                this.searchDataService.saveInfos(searchInfos, true);
                // load the service specific result and search data
                const metaRes = recoveredData.metaRes;
                for (const serviceId in metaRes) {
                    if (metaRes.hasOwnProperty(serviceId)) {
                        this.searchMetadataService.saveSearch(metaRes[serviceId], 4);
                    }
                }
                // Re-Init the cart and return
                this.cartService.reInit(true).then(() => {
                    this.tabRoutingService.initRouting(searchInfos.context.services, false);
                    this.tripPlannerService.reInit(this.combId, this.searchDataService.getAllSearchResults());
                    subscriber.next();
                }, () => {
                    subscriber.error(REJECT_STATES.REJECT_INVALID_CART);
                });
            }, (failure) => {
                console.log('Booking recover failed ', { failure });
                if (failure.status === 401) {
                    subscriber.error(REJECT_STATES.REJECT_LOGIN);
                }
                else {
                    subscriber.error(REJECT_STATES.REJECT_UNKNOWN);
                }
            });
        });
    }
    gotoHome() {
        this.router.navigate(['/search']).then(() => {
            this.loaderService.triggerLoading.emit({ loading: false });
        });
    }
    authenticateUser() {
        this.userService.openLoginModel().then(() => {
            this.loggedIn = true;
            this.recoverBooking();
        }, () => this.gotoHome());
    }
    recoveryFailedPopup(title, message, icon) {
        this.dialogService
            .openConfirmationDialog({
            title: this.translateService.instant(title),
            multipleContent: [this.translateService.instant(message)],
            confirmBtnTitle: this.translateService.instant('POPUPS.OK'),
            icon,
        })
            .afterClosed()
            .subscribe(() => {
            this.gotoHome();
        });
    }
    recoverBooking() {
        this.loaderService.triggerLoading.emit({ loading: true, textKey: 'BOOKINGS.RECOVER.MESSAGE' });
        this.loadBookingData().subscribe(() => {
            this.cartRoutingService.moveToSummary().then(() => {
                this.loaderService.triggerLoading.emit({ loading: false });
            });
        }, (error) => {
            console.log('Recovery error code: ', error);
            if (error === REJECT_STATES.REJECT_LOGIN) {
                if (this.userService.IsLogged() || this.loggedIn) {
                    this.recoveryFailedPopup('POPUPS.UNAUTHORISED_BOOKING.TITLE', 'POPUPS.UNAUTHORISED_BOOKING.MESSAGE', { name: 'unauthorised-booking', iconStyle: { 'width.px': 90.22, 'height.px': 90.85 } });
                }
                else {
                    this.authenticateUser();
                }
                return;
            }
            this.recoveryFailedPopup('POPUPS.RECOVER_FAILED.TITLE', 'POPUPS.RECOVER_FAILED.MESSAGE');
        });
    }
}
RecoverBookingComponent.ɵfac = function RecoverBookingComponent_Factory(t) { return new (t || RecoverBookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_2__.ApiAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_3__.SearchDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_modules_meta_search_metadata_service__WEBPACK_IMPORTED_MODULE_4__.SearchMetadataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_5__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_searchEngine_services_tab_routing_service__WEBPACK_IMPORTED_MODULE_6__.TabRoutingService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_searchEngine_services_trip_planner_service__WEBPACK_IMPORTED_MODULE_7__.TripPlannerService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_routing_service__WEBPACK_IMPORTED_MODULE_8__.CartRoutingService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_14__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_9__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_10__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_modules_core_loader_service__WEBPACK_IMPORTED_MODULE_11__.LoaderService)); };
RecoverBookingComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({ type: RecoverBookingComponent, selectors: [["tz-recover-booking"]], decls: 0, vars: 0, template: function RecoverBookingComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 77753:
/*!*******************************************************************!*\
  !*** ./src/app/modules/recover-booking/recover-booking.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecoverBookingModule": () => (/* binding */ RecoverBookingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _recover_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./recover-booking-routing.module */ 37046);
/* harmony import */ var _recover_booking_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./recover-booking.component */ 52324);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class RecoverBookingModule {
}
RecoverBookingModule.ɵfac = function RecoverBookingModule_Factory(t) { return new (t || RecoverBookingModule)(); };
RecoverBookingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: RecoverBookingModule });
RecoverBookingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _recover_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecoverBookingRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](RecoverBookingModule, { declarations: [_recover_booking_component__WEBPACK_IMPORTED_MODULE_1__.RecoverBookingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _recover_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.RecoverBookingRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_recover-booking_recover-booking_module_ts.js.map