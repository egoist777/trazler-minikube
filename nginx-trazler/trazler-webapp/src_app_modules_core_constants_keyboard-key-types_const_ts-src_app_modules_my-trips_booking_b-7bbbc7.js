"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_core_constants_keyboard-key-types_const_ts-src_app_modules_my-trips_booking_b-7bbbc7"],{

/***/ 86578:
/*!********************************************************************!*\
  !*** ./src/app/modules/core/constants/keyboard-key-types.const.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "KeyType": () => (/* binding */ KeyType),
/* harmony export */   "TzFocusType": () => (/* binding */ TzFocusType)
/* harmony export */ });
var KeyType;
(function (KeyType) {
    KeyType["UP_ARROW"] = "ArrowUp";
    KeyType["DOWN_ARROW"] = "ArrowDown";
    KeyType["LEFT_ARROW"] = "ArrowLeft";
    KeyType["RIGHT_ARROW"] = "ArrowRight";
    KeyType["ENTER"] = "Enter";
    KeyType["TAB"] = "Tab";
    KeyType["ESCAPE"] = "Escape";
})(KeyType || (KeyType = {}));
var TzFocusType;
(function (TzFocusType) {
    TzFocusType[TzFocusType["MOVE_NEXT"] = 999] = "MOVE_NEXT";
    TzFocusType[TzFocusType["MOVE_TO_INVALID"] = 111] = "MOVE_TO_INVALID";
})(TzFocusType || (TzFocusType = {}));


/***/ }),

/***/ 96732:
/*!********************************************************************!*\
  !*** ./src/app/modules/my-trips/booking/booking-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingSummaryRoutingModule": () => (/* binding */ BookingSummaryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking.component */ 93025);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _booking_component__WEBPACK_IMPORTED_MODULE_0__.BookingComponent }];
class BookingSummaryRoutingModule {
}
BookingSummaryRoutingModule.ɵfac = function BookingSummaryRoutingModule_Factory(t) { return new (t || BookingSummaryRoutingModule)(); };
BookingSummaryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BookingSummaryRoutingModule });
BookingSummaryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BookingSummaryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 93025:
/*!***************************************************************!*\
  !*** ./src/app/modules/my-trips/booking/booking.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingComponent": () => (/* binding */ BookingComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/cart-status */ 32304);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/tools-service */ 67457);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/cart/utils/cart.utils */ 14770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _services_modules_bookings_dataservices_booking_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modules/bookings/dataservices/booking.data.service */ 65279);
/* harmony import */ var _services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/cart/services/cart.service */ 16750);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/pipes/tz-currency.pipe */ 98967);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _components_booking_summary_booking_summary_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/booking-summary/booking-summary.component */ 92197);
/* harmony import */ var _components_mob_booking_summary_mob_booking_summary_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mob-booking-summary/mob-booking-summary.component */ 91594);




















function BookingComponent_ng_container_0_tz_booking_summary_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tz-booking-summary", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("cancel", function BookingComponent_ng_container_0_tz_booking_summary_1_Template_tz_booking_summary_cancel_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r3.onCancel($event);
    })("downloadVoucher", function BookingComponent_ng_container_0_tz_booking_summary_1_Template_tz_booking_summary_downloadVoucher_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r5.onDownloadBookingVoucher();
    })("resendEmail", function BookingComponent_ng_container_0_tz_booking_summary_1_Template_tz_booking_summary_resendEmail_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r4);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r6.onResendBookingMail();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("bookingSummary", ctx_r1.bookingSummary)("transferCartData", ctx_r1.transferCartData)("flightsCartData", ctx_r1.flightsCartData)("accommodationCartData", ctx_r1.accommodationCartData)("carRentalCartData", ctx_r1.carRentalCartData)("trainCartData", ctx_r1.trainCartData)("incompleteOrCancelBookings", ctx_r1.incompleteOrCancelBookings);
  }
}

function BookingComponent_ng_container_0_tz_mob_booking_summary_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementStart"](0, "tz-mob-booking-summary", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵlistener"]("cancel", function BookingComponent_ng_container_0_tz_mob_booking_summary_3_Template_tz_mob_booking_summary_cancel_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
      return ctx_r7.onCancel($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("bookingSummary", ctx_r2.bookingSummary)("transferCartData", ctx_r2.transferCartData)("flightsCartData", ctx_r2.flightsCartData)("accommodationCartData", ctx_r2.accommodationCartData)("carRentalCartData", ctx_r2.carRentalCartData)("trainCartData", ctx_r2.trainCartData)("incompleteOrCancelBookings", ctx_r2.incompleteOrCancelBookings);
  }
}

function BookingComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](1, BookingComponent_ng_container_0_tz_booking_summary_1_Template, 1, 7, "tz-booking-summary", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](3, BookingComponent_ng_container_0_tz_mob_booking_summary_3_Template, 1, 7, "tz-mob-booking-summary", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](2, 2, ctx_r0.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵpipeBind1"](4, 4, ctx_r0.platformService.isMobileDevice$));
  }
}

class BookingComponent {
  constructor(activeRoute, userService, bookingDataService, cartService, dialogService, settingsService, translateService, tzCurrencyPipe, platformService) {
    this.activeRoute = activeRoute;
    this.userService = userService;
    this.bookingDataService = bookingDataService;
    this.cartService = cartService;
    this.dialogService = dialogService;
    this.settingsService = settingsService;
    this.translateService = translateService;
    this.tzCurrencyPipe = tzCurrencyPipe;
    this.platformService = platformService;
    this.incompleteOrCancelBookings = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_14__.Subject();
    this.bookingId = this.activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.initializeBookingSummaryComponent();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onDownloadBookingVoucher() {
    this.bookingDataService.downloadBookingVoucher(this.bookingId).subscribe(res => {
      const newBlob = new Blob([res], {
        type: 'application/pdf'
      });
      const windowUrl = window.URL || window.webkitURL;
      const url = windowUrl.createObjectURL(newBlob);
      const link = document.createElement('a');
      link.href = url;
      link.download = `Trazler_Booking_${this.bookingSummary.booking.bookingNumber}.pdf`;
      link.dispatchEvent(new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
        view: window
      }));
      windowUrl.revokeObjectURL(url);
      this.dialogService.openSnackBar({
        message: this.translateService.instant('NOTIFS.VOUCHER_LAUNCHED')
      });
    });
  }

  onResendBookingMail() {
    this.bookingDataService.sendBookingMail(this.bookingId).subscribe(() => {
      this.dialogService.openSnackBar({
        message: this.translateService.instant('NOTIFS.BOOKING_MAIL_SEND')
      });
    }, failure => {
      this.dialogService.openSnackBar({
        message: failure
      });
    });
  }

  onCancel(optionsIds) {
    const cancelOptions = this.fetchCancelOptions(optionsIds);

    if (cancelOptions.some(option => option.cancelMode === 'denied')) {
      this.dialogService.openConfirmationDialog({
        content: this.translateService.instant('POPUPS.SUPPORT_MSG.BODY'),
        confirmBtnTitle: this.translateService.instant('POPUPS.SUPPORT_MSG.OK')
      });
      return;
    }

    this.dialogService.openConfirmationDialog({
      title: this.translateService.instant('POPUPS.CONFIRM'),
      multipleContent: [this.formCancellationMessage(cancelOptions)],
      confirmBtnTitle: this.translateService.instant('POPUPS.YES'),
      cancelBtnTitle: this.translateService.instant('POPUPS.NO')
    }).afterClosed().subscribe(cancelBooking => {
      if (!cancelBooking) {
        return;
      }

      for (const option of cancelOptions) {
        option.status = _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_0__.CartStatus.STATUS_CPROGRESS;
      }

      this.formBooking();
      this.bookingDataService.cancelBooking(this.bookingId, optionsIds).subscribe(res => {
        this.fetchBookingSummary();
        this.dialogService.openSnackBar({
          message: res.message
        });
      }, failure => {
        this.fetchBookingSummary(); //this.dialogService.openSnackBar({ message: failure.error.message });
      });
    });
  }

  fetchCancelOptions(optionsIds) {
    const bookingOptions = [];

    for (const item of this.bookingSummary.cart.items) {
      for (const option of item.selectedItem.bookingOptions) {
        if (optionsIds.includes(option.itineraryId)) {
          bookingOptions.push(option);
        }
      }
    }

    return bookingOptions;
  }

  formCancellationMessage(options) {
    let message = '';

    for (const option of options) {
      console.log(option);
      const cp = option.applicableCp;

      if (cp.info !== '') {
        message += `<div style="font-weight:bold;">${option.applicableCp.info} </div>`;
      }

      let translationKey = 'BOOKINGS.CANCELLATION_ALERT.';

      if (cp.policyType === 'Non-refundable') {
        translationKey += 'CONFIRM_MSG_NR';
      } else if (cp.isFree) {
        translationKey += 'CONFIRM_MSG_FREE';
      } else {
        translationKey += 'CONFIRM_MSG_CHARGE';
      }

      const amt = this.tzCurrencyPipe.transform(cp.penaltyAmt, cp.curCode);
      message += this.translateService.instant(translationKey, {
        amt
      }) + '<br/><br/>';
    }

    if (message === '') {
      message = this.translateService.instant('BOOKINGS.CANCELLATION_ALERT.CONFIRM_MSG');
    }

    message += this.translateService.instant('BOOKINGS.CANCELLATION_ALERT.CONTINUE_MSG') + '<br/>';
    return message;
  }

  formBooking() {
    const cartData = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.bookingSummary.cart);
    this.flightsCartData = this.cartService.getCartData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.FLIGHT, cartData);
    this.accommodationCartData = this.cartService.getCartData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC, cartData);
    this.transferCartData = this.cartService.getCartData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRANSFER, cartData);
    this.carRentalCartData = this.cartService.getCartData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.CAR_RENTAL, cartData);
    this.trainCartData = this.cartService.getCartData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRAIN, cartData);

    for (const item of cartData.items) {
      for (const option of item.selectedItem.bookingOptions) {
        if (option.status < _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_0__.CartStatus.STATUS_CONFIRMED) {
          this.incompleteOrCancelBookings = true;
        }
      }
    } //handle case where all items are cancelled


    if (!this.incompleteOrCancelBookings && !_services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_3__.CartUtils.hasStillBookedItem(cartData)) {
      this.incompleteOrCancelBookings = true;
    }
  }

  fetchBookingSummary() {
    this.bookingDataService.getBooking(this.userService.getCustomerInformation().id, this.bookingId).subscribe(booking => {
      this.bookingSummary = booking;
      this.formBooking();
      console.log(booking);
    }, failure => {
      console.log('Get booking failure: ', failure);
    });
  }

  initializeBookingSummaryComponent() {
    this.fetchBookingSummary();
    this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$)).subscribe(() => {
      this.fetchBookingSummary();
    });
  }

}

BookingComponent.ɵfac = function BookingComponent_Factory(t) {
  return new (t || BookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_17__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_4__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_modules_bookings_dataservices_booking_data_service__WEBPACK_IMPORTED_MODULE_5__.BookingDataService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_6__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_7__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_8__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_9__.TzCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_10__.PlatformService));
};

BookingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineComponent"]({
  type: BookingComponent,
  selectors: [["tz-booking"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [3, "bookingSummary", "transferCartData", "flightsCartData", "accommodationCartData", "carRentalCartData", "trainCartData", "incompleteOrCancelBookings", "cancel", "downloadVoucher", "resendEmail", 4, "ngIf"], [3, "bookingSummary", "transferCartData", "flightsCartData", "accommodationCartData", "carRentalCartData", "trainCartData", "incompleteOrCancelBookings", "cancel", 4, "ngIf"], [3, "bookingSummary", "transferCartData", "flightsCartData", "accommodationCartData", "carRentalCartData", "trainCartData", "incompleteOrCancelBookings", "cancel", "downloadVoucher", "resendEmail"], [3, "bookingSummary", "transferCartData", "flightsCartData", "accommodationCartData", "carRentalCartData", "trainCartData", "incompleteOrCancelBookings", "cancel"]],
  template: function BookingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵtemplate"](0, BookingComponent_ng_container_0_Template, 5, 6, "ng-container", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵproperty"]("ngIf", ctx.bookingSummary && ctx.bookingSummary.cart);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.NgIf, _components_booking_summary_booking_summary_component__WEBPACK_IMPORTED_MODULE_11__.BookingSummaryComponent, _components_mob_booking_summary_mob_booking_summary_component__WEBPACK_IMPORTED_MODULE_12__.MobBookingSummaryComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_19__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 49093:
/*!************************************************************!*\
  !*** ./src/app/modules/my-trips/booking/booking.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingSummaryModule": () => (/* binding */ BookingSummaryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./booking-routing.module */ 96732);
/* harmony import */ var _booking_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./booking.component */ 93025);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/date-range.pipe */ 82478);
/* harmony import */ var _results_results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../results/results-cart-item-selection.module */ 8793);
/* harmony import */ var _components_booking_summary_info_booking_summary_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/booking-summary-info/booking-summary-info.component */ 12099);
/* harmony import */ var _components_booking_summary_header_booking_summary_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/booking-summary-header/booking-summary-header.component */ 1025);
/* harmony import */ var _trip_timeline_trip_timeline_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../trip-timeline/trip-timeline.module */ 34514);
/* harmony import */ var _components_booking_summary_booking_summary_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/booking-summary/booking-summary.component */ 92197);
/* harmony import */ var _components_mob_booking_summary_mob_booking_summary_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mob-booking-summary/mob-booking-summary.component */ 91594);
/* harmony import */ var _components_mob_booking_summary_info_mob_booking_summary_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mob-booking-summary-info/mob-booking-summary-info.component */ 16636);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);














class BookingSummaryModule {
}
BookingSummaryModule.ɵfac = function BookingSummaryModule_Factory(t) { return new (t || BookingSummaryModule)(); };
BookingSummaryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: BookingSummaryModule });
BookingSummaryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ providers: [_shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_3__.DateRangePipe], imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
            _booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingSummaryRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _results_results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_4__.ResultsCartItemSelectionModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
            _trip_timeline_trip_timeline_module__WEBPACK_IMPORTED_MODULE_7__.TripTimelineModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](BookingSummaryModule, { declarations: [_booking_component__WEBPACK_IMPORTED_MODULE_1__.BookingComponent,
        _components_booking_summary_booking_summary_component__WEBPACK_IMPORTED_MODULE_8__.BookingSummaryComponent,
        _components_booking_summary_info_booking_summary_info_component__WEBPACK_IMPORTED_MODULE_5__.BookingSummaryInfoComponent,
        _components_booking_summary_header_booking_summary_header_component__WEBPACK_IMPORTED_MODULE_6__.BookingSummaryHeaderComponent,
        _components_mob_booking_summary_mob_booking_summary_component__WEBPACK_IMPORTED_MODULE_9__.MobBookingSummaryComponent,
        _components_mob_booking_summary_info_mob_booking_summary_info_component__WEBPACK_IMPORTED_MODULE_10__.MobBookingSummaryInfoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule,
        _booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingSummaryRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _results_results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_4__.ResultsCartItemSelectionModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule,
        _trip_timeline_trip_timeline_module__WEBPACK_IMPORTED_MODULE_7__.TripTimelineModule] }); })();


/***/ }),

/***/ 1025:
/*!****************************************************************************************************************!*\
  !*** ./src/app/modules/my-trips/booking/components/booking-summary-header/booking-summary-header.component.ts ***!
  \****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingSummaryHeaderComponent": () => (/* binding */ BookingSummaryHeaderComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/cart/utils/cart.utils */ 14770);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/date-range.pipe */ 82478);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pipes/tz-date.pipe */ 92456);













function BookingSummaryHeaderComponent_ng_container_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u00A0&\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function BookingSummaryHeaderComponent_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BookingSummaryHeaderComponent_ng_container_7_span_1_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const service_r4 = ctx.$implicit;
    const first_r5 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !first_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](3, 2, "SERVICES." + service_r4.toUpperCase()), " ");
} }
function BookingSummaryHeaderComponent_ng_container_8_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "tzDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](3, "tzDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transfer_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", transfer_r8.title, " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 3, transfer_r8.date, "longDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](3, 6, transfer_r8.date, "shortTime"), " ");
} }
function BookingSummaryHeaderComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BookingSummaryHeaderComponent_ng_container_8_div_1_Template, 4, 9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.transfers);
} }
function BookingSummaryHeaderComponent_ng_template_9_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const location_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", location_r10, " ");
} }
function BookingSummaryHeaderComponent_ng_template_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, BookingSummaryHeaderComponent_ng_template_9_ng_container_1_Template, 2, 1, "ng-container", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r3.bookingSummary.booking.locationStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r3.tripDate, " ");
} }
class BookingSummaryHeaderComponent {
    constructor(translateService, dateRange, settingsService) {
        this.translateService = translateService;
        this.dateRange = dateRange;
        this.settingsService = settingsService;
        this.personsStr = '';
        this.tripDate = '';
        this.transfers = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    }
    ngOnInit() {
        this.formBookingInfos();
        this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
            this.tripDate = this.dateRange.transform(this.bookingSummary.booking.startDate, this.bookingSummary.booking.endDate, true);
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    formBookingInfos() {
        const travellersData = _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_1__.CartUtils.getTravellersData(this.bookingSummary.cart.items);
        if (travellersData) {
            this.personsStr =
                travellersData.txt +
                    ' ' +
                    this.translateService
                        .instant('TRAVELLER.' + (travellersData.total > 1 ? 'PERSONS' : 'PERSON'))
                        .toLowerCase();
        }
        const hasMultipleServices = this.bookingSummary.cart.items.some((item) => item.serviceId !== _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRANSFER);
        if (hasMultipleServices) {
            const booking = this.bookingSummary.booking;
            this.tripDate = this.dateRange.transform(booking.startDate, booking.endDate, true);
        }
        else {
            const cartDataWithTitle = _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_1__.CartUtils.formServiceTitle(this.bookingSummary.cart, this.translateService);
            cartDataWithTitle.items.forEach((item) => {
                const info = {
                    date: new Date(item.selectedItem.data.onwardDetails.pickupTzDate),
                    title: item.summaryHeaderInfo,
                };
                this.transfers.push(info);
            });
        }
    }
}
BookingSummaryHeaderComponent.ɵfac = function BookingSummaryHeaderComponent_Factory(t) { return new (t || BookingSummaryHeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_2__.DateRangePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService)); };
BookingSummaryHeaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: BookingSummaryHeaderComponent, selectors: [["tz-booking-summary-header"]], inputs: { bookingSummary: "bookingSummary" }, decls: 13, vars: 7, consts: [[1, "back-btn-container"], [1, "tz-container", "flex"], ["routerLink", "/bookings/bookings-list", 1, "pointer", "body-2"], ["icon", "arrow_back_ios"], [1, "booking-header"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["multipleServiceContent", ""], [1, "bullet-split"], ["class", "service-and", 4, "ngIf"], [1, "service-and"], ["class", "bullet-split", 4, "ngFor", "ngForOf"]], template: function BookingSummaryHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "tz-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, BookingSummaryHeaderComponent_ng_container_7_Template, 4, 4, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, BookingSummaryHeaderComponent_ng_container_8_Template, 2, 1, "ng-container", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, BookingSummaryHeaderComponent_ng_template_9_Template, 4, 2, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](5, 5, "BOOKINGS.BACK_TO_MY_BOOKINGS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.bookingSummary.booking.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.transfers.length !== 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.personsStr, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.RouterLinkDelegate, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_4__.TzIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_5__.TzDatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5nLXN1bW1hcnktaGVhZGVyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 12099:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/my-trips/booking/components/booking-summary-info/booking-summary-info.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingSummaryInfoComponent": () => (/* binding */ BookingSummaryInfoComponent)
/* harmony export */ });
/* harmony import */ var _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/tools-service */ 67457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_checkout_services_tz_checkout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/checkout/services/tz-checkout.service */ 95678);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_components_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/cart-summary/cart-summary.component */ 94104);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/pipes/tz-date.pipe */ 92456);







function BookingSummaryInfoComponent_div_3_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "tzDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const traveller_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, traveller_r6.dateOfBirth, "shortDate"), " ");
} }
function BookingSummaryInfoComponent_div_3_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const traveller_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", traveller_r6.idCardType, " # ", traveller_r6.idCardNumber, " ");
} }
function BookingSummaryInfoComponent_div_3_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "tzDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const traveller_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 2, "TRAVELLER.PASSENGERS_VALID"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 4, traveller_r6.idCardValidity, "shortDate"), " ");
} }
const _c0 = function (a0) { return { "hide-traveller": a0 }; };
function BookingSummaryInfoComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookingSummaryInfoComponent_div_3_Template_div_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r15); const traveller_r6 = restoredCtx.$implicit; return traveller_r6.hideTraveller = !traveller_r6.hideTraveller; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 9)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, BookingSummaryInfoComponent_div_3_div_9_Template, 3, 4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, BookingSummaryInfoComponent_div_3_div_10_Template, 2, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, BookingSummaryInfoComponent_div_3_div_11_Template, 4, 7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const traveller_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, traveller_r6.hideTraveller));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 8, "TRAVELLER." + (i_r7 === 0 ? "PRIMARY_TRAVELER" : "TRAVELER")), " ", i_r7 !== 0 ? i_r7 + 1 : "", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", traveller_r6.firstName, " ", traveller_r6.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", traveller_r6.dateOfBirth && traveller_r6.dateOfBirth !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", traveller_r6.idCardNumber && traveller_r6.idCardNumber !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", traveller_r6.idCardValidity && traveller_r6.idCardValidity !== "");
} }
function BookingSummaryInfoComponent_div_4_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const traveller_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", traveller_r17.firstName, " ", traveller_r17.lastName, "");
} }
function BookingSummaryInfoComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookingSummaryInfoComponent_div_4_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.accTravellers[0].hideTraveller = !ctx_r19.accTravellers[0].hideTraveller; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BookingSummaryInfoComponent_div_4_div_6_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c0, ctx_r1.accTravellers[0].hideTraveller));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 3, "BOOKINGS." + (ctx_r1.accTravellers.length > 1 ? "GUEST_NAMES" : "GUEST_NAME")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.accTravellers);
} }
function BookingSummaryInfoComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookingSummaryInfoComponent_div_5_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r21.transferTraveller.hideTraveller = !ctx_r21.transferTraveller.hideTraveller; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 9)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx_r2.transferTraveller.hideTraveller));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, "TRAVELLER.Customer_Info"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r2.transferTraveller.firstName, " ", ctx_r2.transferTraveller.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r2.transferTraveller.phone.number);
} }
function BookingSummaryInfoComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookingSummaryInfoComponent_div_6_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r24); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r23.driverInfo.hideTraveller = !ctx_r23.driverInfo.hideTraveller; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 9)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](11, "tzDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](10, _c0, ctx_r3.driverInfo.hideTraveller));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 5, "BOOKINGS.SUMMARY.CAR_RENTAL_DRIVER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", ctx_r3.driverInfo.firstName, " ", ctx_r3.driverInfo.lastName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](11, 7, ctx_r3.driverInfo.dateOfBirth, "shortDate"));
} }
function BookingSummaryInfoComponent_div_7_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r25.bookingSummary.booking.billingInfo.cardHolder);
} }
function BookingSummaryInfoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div")(2, "div", 12)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, BookingSummaryInfoComponent_div_7_div_8_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 4, "GENERAL.PAYMENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" **** ", ctx_r4.bookingSummary.booking.billingInfo.lastFourDigits, " ", ctx_r4.bookingSummary.booking.billingInfo.brandType, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.bookingSummary.booking.billingInfo.cardHolder !== "");
} }
function BookingSummaryInfoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 6)(2, "div", 7)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function BookingSummaryInfoComponent_div_8_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r26.bookingSummary.booking.billingAddress.hideBillingInfo = !ctx_r26.bookingSummary.booking.billingAddress.hideBillingInfo; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 9)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx_r5.bookingSummary.booking.billingAddress.hideBillingInfo));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 9, "BOOKINGS.SUMMARY.BILLING"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.bookingSummary.booking.billingAddress.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.bookingSummary.booking.billingAddress.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.bookingSummary.booking.billingAddress.zipCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.bookingSummary.booking.billingAddress.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r5.bookingSummary.booking.billingAddress.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](20, 11, "BOOKINGS.SUMMARY.VAT"), ":\u00A0\u00A0", ctx_r5.bookingSummary.booking.billingAddress.vatNo, " ");
} }
class BookingSummaryInfoComponent {
    constructor(tzCheckoutService, translateService) {
        this.tzCheckoutService = tzCheckoutService;
        this.translateService = translateService;
        this.cartSummary = [];
        this.selectedInsurance = { selectedIdx: -1 };
        this.additionalLuggagePrice = { listPrice: 0, listPriceCur: '' };
        this.additionalLuggages = [];
        this.travellers = [];
        this.accTravellers = [];
        this.travellerNames = [];
    }
    static formLuggageText(option) {
        let txt = 'pc x ';
        if (option.count > 1) {
            txt = 'pcs x ';
        }
        if (option.weight === 0) {
            return option.count + ' ' + txt;
        }
        // 2 pcs x 23kg
        return option.count + ' ' + txt + option.weight + 'kg';
    }
    ngOnInit() {
        this.init();
    }
    ngOnChanges(changes) {
        if (changes['bookingSummary'] &&
            changes['bookingSummary'].currentValue &&
            !changes['bookingSummary'].firstChange) {
            this.init();
        }
    }
    formSummaryLuggageInfo() {
        const booking = this.bookingSummary.booking;
        this.additionalLuggagePrice = {
            listPrice: booking.additionalLuggagePrice.listPrice,
            listPriceCur: booking.additionalLuggagePrice.listPriceCur,
        };
        const tmpLuggageMap = {};
        let byTotalWeight;
        for (const traveller of booking.travellers) {
            if (!traveller.additionalLuggage || !traveller.additionalLuggage.checkIn.options) {
                continue;
            }
            byTotalWeight = traveller.additionalLuggage.checkIn.byTotalWeight;
            for (const i in traveller.additionalLuggage.checkIn.options) {
                if (!traveller.additionalLuggage.checkIn.options.hasOwnProperty(i)) {
                    continue;
                }
                const option = traveller.additionalLuggage.checkIn.options[i];
                if (tmpLuggageMap[option.weight]) {
                    if (byTotalWeight) {
                        tmpLuggageMap[option.weight].weight += option.weight * option.count;
                    }
                    tmpLuggageMap[option.weight].count += option.count;
                }
                else {
                    tmpLuggageMap[option.weight] = option;
                }
            }
        }
        const bagTitle = this.translateService.instant('FLIGHT.LUGGAGE.checkIn');
        for (const title in tmpLuggageMap) {
            if (!tmpLuggageMap.hasOwnProperty(title)) {
                continue;
            }
            this.additionalLuggages.push({
                type: bagTitle,
                luggageText: BookingSummaryInfoComponent.formLuggageText(tmpLuggageMap[title]),
            });
        }
    }
    uniqueTravellers(a) {
        const seen = {};
        return a.filter((item) => {
            if (seen[item.firstName + item.lastName]) {
                return false;
            }
            seen[item.firstName + item.lastName] = true;
            return true;
        });
    }
    formSummaryInfos() {
        this.travellers = this.bookingSummary.booking.travellers;
        this.accTravellers = this.uniqueTravellers(this.bookingSummary.booking.accTravellers);
        this.transferTraveller = this.bookingSummary.booking.transferTraveller;
        this.driverInfo = this.bookingSummary.booking.driverInfo;
        this.cartSummary = this.tzCheckoutService.formCheckoutCartSummary(this.cartData.items);
        if (this.cartData.insurancePrice && this.cartData.insurancePrice.listPrice) {
            const selected = this.cartData.insuranceDataSummary.insuranceBooking;
            for (const [i, insurance] of this.cartData.insuranceDataSummary.tzInsurance.insurances.entries()) {
                if (selected.formuleRef !== insurance.formuleRef) {
                    continue;
                }
                this.selectedInsurance = {
                    selected: insurance,
                    selectedIdx: i,
                    validatedTC: true,
                };
            }
        }
        if (this.bookingSummary.booking.baggageSelected) {
            this.formSummaryLuggageInfo();
        }
        this.cartData.helpers = this.tzCheckoutService.getHelpers(this.cartData, this.additionalLuggagePrice, this.selectedInsurance.selected);
    }
    init() {
        this.cartData = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_0__.ToolsService.deepCopy(this.bookingSummary.cart);
        this.formSummaryInfos();
    }
}
BookingSummaryInfoComponent.ɵfac = function BookingSummaryInfoComponent_Factory(t) { return new (t || BookingSummaryInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modules_checkout_services_tz_checkout_service__WEBPACK_IMPORTED_MODULE_1__.TzCheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService)); };
BookingSummaryInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: BookingSummaryInfoComponent, selectors: [["tz-booking-summary-info"]], inputs: { bookingSummary: "bookingSummary" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 9, vars: 11, consts: [[1, "booking-summary-container"], [3, "cartSummary", "cartData", "luggageAmount", "selectedInsurance", "additionalLuggages"], [1, "booking-summary-block"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "ngClass", 4, "ngIf"], ["class", "booking-summary-block", 4, "ngIf"], [3, "ngClass"], [1, "booking-label"], [1, "tz-icon-filled-arrow", "arrow", 3, "click"], [1, "booking-info"], [4, "ngIf"], ["class", "booking-info", 4, "ngFor", "ngForOf"], [1, "booking-label", "card-detail"], ["class", "booking-info", 4, "ngIf"]], template: function BookingSummaryInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "tz-cart-summary", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, BookingSummaryInfoComponent_div_3_Template, 12, 12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, BookingSummaryInfoComponent_div_4_Template, 7, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, BookingSummaryInfoComponent_div_5_Template, 11, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, BookingSummaryInfoComponent_div_6_Template, 12, 12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, BookingSummaryInfoComponent_div_7_Template, 9, 6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, BookingSummaryInfoComponent_div_8_Template, 21, 15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("cartSummary", ctx.cartSummary)("cartData", ctx.cartData)("luggageAmount", ctx.additionalLuggagePrice)("selectedInsurance", ctx.selectedInsurance)("additionalLuggages", ctx.additionalLuggages);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.travellers);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.accTravellers.length !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.transferTraveller && ctx.transferTraveller.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.driverInfo && ctx.driverInfo.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.bookingSummary.booking.billingInfo.lastFourDigits !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.bookingSummary.booking.invoiceRequired);
    } }, directives: [_shared_components_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_2__.CartSummaryComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_3__.TzDatePipe], styles: [".booking-summary-container[_ngcontent-%COMP%] {\n  width: 100%;\n  position: sticky;\n  top: 1.5rem;\n}\n.booking-summary-container[_ngcontent-%COMP%]   .booking-summary-block[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  padding: 1.25rem;\n  background-color: var(--color-primary-white);\n  border: 1px solid var(--color-element-gray-border);\n  border-radius: 3px;\n}\n.booking-summary-container[_ngcontent-%COMP%]  .cart-summary-container {\n  position: initial !important;\n}\n.booking-summary-block[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  padding-top: 0.25rem;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-block[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  background: var(--color-primary-white);\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-card-holder[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 1rem;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border-mobile);\n  margin: 0 1rem;\n  display: flex;\n  align-items: center;\n  height: 2.5rem;\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  text-transform: capitalize;\n}\n.booking-summary-block[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1rem;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-label[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-text-light-gray);\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-label[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  font-size: 0.4rem;\n  cursor: pointer;\n  transform: rotate(180deg);\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-label.card-detail[_ngcontent-%COMP%] {\n  justify-content: start;\n  text-transform: capitalize;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-label.card-detail[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-info[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  font-weight: var(--font-weight-regular);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .hide-traveller[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n}\n.booking-summary-block[_ngcontent-%COMP%]   .hide-traveller[_ngcontent-%COMP%]   .booking-info[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctc3VtbWFyeS1pbmZvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUNKO0FBQ0k7RUFDSSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsNENBQUE7RUFDQSxrREFBQTtFQUNBLGtCQUFBO0FBQ1I7QUFHUTtFQUNJLDRCQUFBO0FBRFo7QUFNQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxvQkFBQTtBQUhKO0FBS0k7RUFDSSxxQkFBQTtFQUNBLHNDQUFBO0FBSFI7QUFJUTtFQUNJLHVCQUFBO0FBRlo7QUFJUTtFQUNJLG1EQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBQUZaO0FBS0k7RUFDSSxtQkFBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUpSO0FBTVE7RUFDSSxtQ0FBQTtBQUpaO0FBT1E7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQUxaO0FBUVE7RUFDSSxzQkFBQTtFQUNBLDBCQUFBO0FBTlo7QUFRWTtFQUNJLG9CQUFBO0FBTmhCO0FBV0k7RUFDSSxrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBVFI7QUFhUTtFQUNJLHVCQUFBO0FBWFo7QUFjUTtFQUNJLGFBQUE7QUFaWiIsImZpbGUiOiJib29raW5nLXN1bW1hcnktaW5mby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29raW5nLXN1bW1hcnktY29udGFpbmVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBwb3NpdGlvbjogc3RpY2t5O1xuICAgIHRvcDogMS41cmVtO1xuXG4gICAgLmJvb2tpbmctc3VtbWFyeS1ibG9jayB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1lbGVtZW50LWdyYXktYm9yZGVyKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIH1cblxuICAgICY6Om5nLWRlZXAge1xuICAgICAgICAuY2FydC1zdW1tYXJ5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYm9va2luZy1zdW1tYXJ5LWJsb2NrIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuXG4gICAgLmJvb2tpbmctYmxvY2sge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICAuYm9va2luZy1jYXJkLWhvbGRlciB7XG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwIDAgMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYm9va2luZy1pdGVtIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICA+IGRpdjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICAuYm9va2luZy1sYWJlbCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWxpZ2h0LWdyYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmFycm93IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC40cmVtO1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuY2FyZC1kZXRhaWwge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gICAgICAgICAgICA+IGRpdiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYm9va2luZy1pbmZvIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIC5oaWRlLXRyYXZlbGxlciB7XG4gICAgICAgIC5hcnJvdyB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib29raW5nLWluZm8ge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 92197:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/my-trips/booking/components/booking-summary/booking-summary.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingSummaryComponent": () => (/* binding */ BookingSummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var src_app_modules_trip_timeline_components_trip_timeline_dialog_trip_timeline_dialog_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/modules/trip-timeline/components/trip-timeline-dialog/trip-timeline-dialog.component */ 37479);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _services_screen_detector_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/screen-detector.service */ 15257);
/* harmony import */ var _booking_summary_header_booking_summary_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../booking-summary-header/booking-summary-header.component */ 1025);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/block-separator/block-separator.component */ 183);
/* harmony import */ var _trip_timeline_trip_timeline_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../trip-timeline/trip-timeline.component */ 17887);
/* harmony import */ var _results_transport_flights_components_selected_flights_selected_flights_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../results/transport/flights/components/selected-flights/selected-flights.component */ 41562);
/* harmony import */ var _results_transport_trains_components_selected_trains_selected_trains_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../results/transport/trains/components/selected-trains/selected-trains.component */ 20878);
/* harmony import */ var _results_accommodations_components_selected_accommodations_selected_accommodations_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../results/accommodations/components/selected-accommodations/selected-accommodations.component */ 16068);
/* harmony import */ var _results_transfers_components_selected_transfers_selected_transfers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../../results/transfers/components/selected-transfers/selected-transfers.component */ 99131);
/* harmony import */ var _results_car_rentals_components_selected_car_rentals_selected_car_rentals_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../../results/car-rentals/components/selected-car-rentals/selected-car-rentals.component */ 49476);
/* harmony import */ var _booking_summary_info_booking_summary_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../booking-summary-info/booking-summary-info.component */ 12099);


















function BookingSummaryComponent_label_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "label", 11)(1, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function BookingSummaryComponent_label_3_Template_input_ngModelChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r10.showTimeLine = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "span", 13)(3, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r0.showTimeLine);
  }
}

function BookingSummaryComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BookingSummaryComponent_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r12.openBasketTimeline();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 1, "TIMELINE.TIMELINE"), " ");
  }
}

function BookingSummaryComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div")(1, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BookingSummaryComponent_div_7_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r14.downloadVoucher.emit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function BookingSummaryComponent_div_7_Template_button_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r16.resendEmail.emit();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }
}

function BookingSummaryComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "tz-trip-timeline", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("cartItems", ctx_r3.bookingSummary.cart.items)("selectedId", ctx_r3.mouseHoverId);
  }
}

function BookingSummaryComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "tz-selected-flights", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("mouseenter", function BookingSummaryComponent_ng_container_16_Template_tz_selected_flights_mouseenter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r17.setHoverId(ctx_r17.flightsCartData.items[0].selectedItem.id);
    })("mouseleave", function BookingSummaryComponent_ng_container_16_Template_tz_selected_flights_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r19.setHoverId("");
    })("cancel", function BookingSummaryComponent_ng_container_16_Template_tz_selected_flights_cancel_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r20.onCancel([ctx_r20.flightsCartData.items[0].selectedItem.bookingOptions[0].itineraryId]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("flightCartData", ctx_r4.flightsCartData)("fromBookings", true)("paymentCaptureMode", ctx_r4.bookingSummary.booking.paymentCaptureMode);
  }
}

function BookingSummaryComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "tz-selected-trains", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("mouseenter", function BookingSummaryComponent_ng_container_17_Template_tz_selected_trains_mouseenter_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r21.setHoverId(ctx_r21.trainCartData.items[0].selectedItem.id);
    })("mouseleave", function BookingSummaryComponent_ng_container_17_Template_tz_selected_trains_mouseleave_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r23.setHoverId("");
    })("cancel", function BookingSummaryComponent_ng_container_17_Template_tz_selected_trains_cancel_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r24.onCancel([ctx_r24.trainCartData.items[0].selectedItem.bookingOptions[0].itineraryId]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("trainItems", ctx_r5.trainCartData.items)("fromBookings", true)("paymentCaptureMode", ctx_r5.bookingSummary.booking.paymentCaptureMode);
  }
}

function BookingSummaryComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "tz-selected-accommodations", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("mouseenter", function BookingSummaryComponent_ng_container_18_Template_tz_selected_accommodations_mouseenter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r25.setHoverId(ctx_r25.accommodationCartData.items[0].selectedItem.id);
    })("mouseleave", function BookingSummaryComponent_ng_container_18_Template_tz_selected_accommodations_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r27.setHoverId("");
    })("cancel", function BookingSummaryComponent_ng_container_18_Template_tz_selected_accommodations_cancel_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r26);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r28.onCancel($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("accommodationCartData", ctx_r6.accommodationCartData)("fromBookings", true)("paymentCaptureMode", ctx_r6.bookingSummary.booking.paymentCaptureMode);
  }
}

function BookingSummaryComponent_ng_container_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "tz-selected-transfers", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("selectedId", function BookingSummaryComponent_ng_container_19_Template_tz_selected_transfers_selectedId_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r29.setHoverId($event);
    })("cancel", function BookingSummaryComponent_ng_container_19_Template_tz_selected_transfers_cancel_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r31.onCancel([$event]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("transferCartData", ctx_r7.transferCartData)("fromBookings", true)("paymentCaptureMode", ctx_r7.bookingSummary.booking.paymentCaptureMode);
  }
}

function BookingSummaryComponent_ng_container_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "tz-selected-car-rentals", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("mouseenter", function BookingSummaryComponent_ng_container_20_Template_tz_selected_car_rentals_mouseenter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r32.setHoverId(ctx_r32.carRentalCartData.items[0].selectedItem.id);
    })("mouseleave", function BookingSummaryComponent_ng_container_20_Template_tz_selected_car_rentals_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r34.setHoverId("");
    })("cancel", function BookingSummaryComponent_ng_container_20_Template_tz_selected_car_rentals_cancel_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r35.onCancel([ctx_r35.carRentalCartData.items[0].selectedItem.bookingOptions[0].itineraryId]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("serviceList", false)("carRentalCartData", ctx_r8.carRentalCartData)("fromBookings", true)("paymentCaptureMode", ctx_r8.bookingSummary.booking.paymentCaptureMode);
  }
}

function BookingSummaryComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "tz-booking-summary-info", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("bookingSummary", ctx_r9.bookingSummary);
  }
}

class BookingSummaryComponent {
  constructor(dialogService, screenSizeDetectorService) {
    this.dialogService = dialogService;
    this.screenSizeDetectorService = screenSizeDetectorService;
    this.incompleteOrCancelBookings = false;
    this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.downloadVoucher = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.resendEmail = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
    this.showTimeLine = false;
    this.mouseHoverId = '';
    this.isMobile$ = this.screenSizeDetectorService.isMobile;
  }

  setHoverId(itemId) {
    this.mouseHoverId = itemId;
  }

  openBasketTimeline() {
    if (this.bookingSummary.cart.items.length === 0) {
      return;
    }

    this.dialogService.openBasketTimelineDialog(src_app_modules_trip_timeline_components_trip_timeline_dialog_trip_timeline_dialog_component__WEBPACK_IMPORTED_MODULE_0__.TripTimelineDialogComponent, this.bookingSummary.cart.items);
  }

  onCancel(bookingIds) {
    this.cancel.emit(bookingIds);
  }

}

BookingSummaryComponent.ɵfac = function BookingSummaryComponent_Factory(t) {
  return new (t || BookingSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_screen_detector_service__WEBPACK_IMPORTED_MODULE_2__.ScreenDetectorService));
};

BookingSummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: BookingSummaryComponent,
  selectors: [["tz-booking-summary"]],
  inputs: {
    bookingSummary: "bookingSummary",
    transferCartData: "transferCartData",
    flightsCartData: "flightsCartData",
    accommodationCartData: "accommodationCartData",
    carRentalCartData: "carRentalCartData",
    trainCartData: "trainCartData",
    incompleteOrCancelBookings: "incompleteOrCancelBookings"
  },
  outputs: {
    cancel: "cancel",
    downloadVoucher: "downloadVoucher",
    resendEmail: "resendEmail"
  },
  decls: 23,
  vars: 21,
  consts: [[3, "bookingSummary"], [1, "tz-container", "mb-4"], [1, "action-btn-container"], ["class", "switch", 4, "ngIf"], ["class", "timeline-btn", 3, "click", 4, "ngIf"], [4, "ngIf"], [1, "tz-block-separator-title"], [1, "flex"], ["class", "booking-summary-timeline", 4, "ngIf"], [1, "booking-summary-service-list", "flex", "flex-column"], ["class", "booking-summary-container", 4, "ngIf"], [1, "switch"], ["type", "checkbox", 3, "ngModel", "ngModelChange"], [1, "slider", "round"], ["translate", "TIMELINE.SUMMARY_TITLE"], [1, "timeline-btn", 3, "click"], [1, "tz-icomoon-icon", "icon-timeline-end-icon"], ["translate", "BOOKINGS.SUMMARY.DOWNLOAD_PDF_VOUCHER", 1, "tz-btn", "tz-btn-secondary", 3, "click"], ["translate", "BOOKINGS.SUMMARY.RESEND_EMAIL_CONFIRMATION", 1, "tz-btn", "tz-btn-secondary", 3, "click"], [1, "booking-summary-timeline"], [3, "cartItems", "selectedId"], [3, "flightCartData", "fromBookings", "paymentCaptureMode", "mouseenter", "mouseleave", "cancel"], [1, "selected-train-container"], [3, "trainItems", "fromBookings", "paymentCaptureMode", "mouseenter", "mouseleave", "cancel"], [3, "accommodationCartData", "fromBookings", "paymentCaptureMode", "mouseenter", "mouseleave", "cancel"], [3, "transferCartData", "fromBookings", "paymentCaptureMode", "selectedId", "cancel"], [3, "serviceList", "carRentalCartData", "fromBookings", "paymentCaptureMode", "mouseenter", "mouseleave", "cancel"], [1, "booking-summary-container"]],
  template: function BookingSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tz-booking-summary-header", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, BookingSummaryComponent_label_3_Template, 4, 1, "label", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, BookingSummaryComponent_div_5_Template, 5, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, BookingSummaryComponent_div_7_Template, 3, 0, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](9, "div", 6)(10, "tz-block-separator");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](12, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](14, BookingSummaryComponent_div_14_Template, 2, 2, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](15, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](16, BookingSummaryComponent_ng_container_16_Template, 2, 3, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](17, BookingSummaryComponent_ng_container_17_Template, 4, 3, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](18, BookingSummaryComponent_ng_container_18_Template, 2, 3, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](19, BookingSummaryComponent_ng_container_19_Template, 2, 3, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](20, BookingSummaryComponent_ng_container_20_Template, 2, 4, "ng-container", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](21, BookingSummaryComponent_div_21_Template, 2, 1, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("bookingSummary", ctx.bookingSummary);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 13, ctx.isMobile$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 15, ctx.isMobile$));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.incompleteOrCancelBookings);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](12, 17, "BOOKINGS.SUMMARY.TRAZLER_BOOKING_NUMBER"), ": ", ctx.bookingSummary.booking.bookingNumber, " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showTimeLine);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.flightsCartData && ctx.flightsCartData.items && ctx.flightsCartData.items.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.trainCartData && ctx.trainCartData.items && ctx.trainCartData.items.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.accommodationCartData && ctx.accommodationCartData.items && ctx.accommodationCartData.items.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.transferCartData && ctx.transferCartData.items && ctx.transferCartData.items.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.carRentalCartData && ctx.carRentalCartData.items && ctx.carRentalCartData.items.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 19, ctx.isMobile$) === false && !ctx.showTimeLine);
    }
  },
  directives: [_booking_summary_header_booking_summary_header_component__WEBPACK_IMPORTED_MODULE_3__.BookingSummaryHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_14__.NgModel, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateDirective, _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_4__.BlockSeparatorComponent, _trip_timeline_trip_timeline_component__WEBPACK_IMPORTED_MODULE_5__.TripTimelineComponent, _results_transport_flights_components_selected_flights_selected_flights_component__WEBPACK_IMPORTED_MODULE_6__.SelectedFlightsComponent, _results_transport_trains_components_selected_trains_selected_trains_component__WEBPACK_IMPORTED_MODULE_7__.SelectedTrainsComponent, _results_accommodations_components_selected_accommodations_selected_accommodations_component__WEBPACK_IMPORTED_MODULE_8__.SelectedAccommodationsComponent, _results_transfers_components_selected_transfers_selected_transfers_component__WEBPACK_IMPORTED_MODULE_9__.SelectedTransfersComponent, _results_car_rentals_components_selected_car_rentals_selected_car_rentals_component__WEBPACK_IMPORTED_MODULE_10__.SelectedCarRentalsComponent, _booking_summary_info_booking_summary_info_component__WEBPACK_IMPORTED_MODULE_11__.BookingSummaryInfoComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe],
  styles: ["[_nghost-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n\n.action-btn-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n\n.action-btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.938rem;\n}\n\n.action-btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0.625rem;\n}\n\n.tz-block-separator-title[_ngcontent-%COMP%] {\n  margin: 1.25rem 0;\n}\n\n.tz-block-separator-title[_ngcontent-%COMP%]  .block-separator__title {\n  font-weight: var(--font-weight-normal);\n  font-size: 0.833rem;\n  line-height: 1.59rem;\n  color: var(--color-text-light-gray);\n}\n\n.booking-summary-container[_ngcontent-%COMP%] {\n  margin-left: 1.25rem;\n  margin-bottom: 2.5rem;\n  max-width: 17.375rem;\n}\n\n.booking-summary-service-list[_ngcontent-%COMP%] {\n  flex: auto;\n  max-width: 880px;\n  margin: 0 auto;\n}\n\n.booking-summary-service-list[_ngcontent-%COMP%]  .tz-block-separator-title, .booking-summary-service-list[_ngcontent-%COMP%]  .flight-description__price-info-case-block {\n  display: none;\n}\n\n.booking-summary-service-list[_ngcontent-%COMP%]  .selected-flight-container, .booking-summary-service-list[_ngcontent-%COMP%]  .selected-train-container, .booking-summary-service-list[_ngcontent-%COMP%]  .selected-accommodations-container, .booking-summary-service-list[_ngcontent-%COMP%]  .selected-transfer-container, .booking-summary-service-list[_ngcontent-%COMP%]  .selected-transfer-container {\n  margin-bottom: 2.5rem;\n}\n\n.booking-summary-service-list[_ngcontent-%COMP%]  .selected-flight-container > :not(:last-child).transfer-cart-item, .booking-summary-service-list[_ngcontent-%COMP%]  .selected-train-container > :not(:last-child).transfer-cart-item, .booking-summary-service-list[_ngcontent-%COMP%]  .selected-accommodations-container > :not(:last-child).transfer-cart-item, .booking-summary-service-list[_ngcontent-%COMP%]  .selected-transfer-container > :not(:last-child).transfer-cart-item, .booking-summary-service-list[_ngcontent-%COMP%]  .selected-transfer-container > :not(:last-child).transfer-cart-item {\n  margin-bottom: 1.25rem;\n}\n\n.booking-summary-service-list[_ngcontent-%COMP%]  .selected-flight-container .selected-accommodation-option, .booking-summary-service-list[_ngcontent-%COMP%]  .selected-train-container .selected-accommodation-option, .booking-summary-service-list[_ngcontent-%COMP%]  .selected-accommodations-container .selected-accommodation-option, .booking-summary-service-list[_ngcontent-%COMP%]  .selected-transfer-container .selected-accommodation-option, .booking-summary-service-list[_ngcontent-%COMP%]  .selected-transfer-container .selected-accommodation-option {\n  margin-top: 1.25rem;\n}\n\n.booking-summary-timeline[_ngcontent-%COMP%] {\n  width: 18.125rem;\n  padding: 0 0.313rem;\n  margin-right: 0.5rem;\n}\n\n.timeline-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n\n.timeline-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0.3rem;\n  font-weight: var(--font-weight-regular);\n  font-size: 0.75rem;\n  line-height: 1.25rem;\n  letter-spacing: 0.25px;\n  color: var(--color-main-text);\n}\n\n.timeline-btn[_ngcontent-%COMP%]   .icon-timeline-end-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--color-text-light-gray);\n}\n\n.switch[_ngcontent-%COMP%] {\n  height: 1.875rem;\n  padding-left: 4.375rem;\n  font-size: 0.813rem;\n  line-height: 1.5rem;\n  color: var(--color-text-light-gray);\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.slider[_ngcontent-%COMP%] {\n  cursor: pointer;\n  transition: 0.4s;\n  height: 1.875rem;\n  width: 3.75rem;\n  border: 2px solid var(--upgrade-right-border);\n  border-radius: 0.938rem;\n  background-color: #f0f0f0;\n  position: absolute;\n  left: 0;\n}\n\n.slider[_ngcontent-%COMP%]::before {\n  position: absolute;\n  content: \"\";\n  left: -3px;\n  top: -2px;\n  transition: 0.3s;\n  height: 1.875rem;\n  width: 2.5rem;\n  border: 2px solid var(--upgrade-right-border);\n  border-radius: 0.938rem;\n  background-image: url(/assets/icons/web/img/icons/close-gray.svg);\n  background-color: var(--color-primary-white);\n  background-repeat: no-repeat;\n  background-position: center;\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%] {\n  background-color: var(--color-main-purple);\n  border-color: var(--color-main-purple);\n}\n\n.switch[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:checked    + .slider[_ngcontent-%COMP%]::before {\n  background-color: var(--color-primary-white);\n  border-color: var(--color-main-purple);\n  background-image: url(/assets/icons/web/img/icons/done.svg);\n  transform: translateX(1.313rem);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctc3VtbWFyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUNJO0VBQ0ksbUJBQUE7QUFDUjs7QUFDUTtFQUNJLHFCQUFBO0FBQ1o7O0FBSUE7RUFDSSxpQkFBQTtBQURKOztBQUdJO0VBQ0ksc0NBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7QUFEUjs7QUFLQTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQUZKOztBQUtBO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQU1ROztFQUVJLGFBQUE7QUFKWjs7QUFPUTs7Ozs7RUFLSSxxQkFBQTtBQUxaOztBQU9ZOzs7OztFQUNJLHNCQUFBO0FBRGhCOztBQUlZOzs7OztFQUNJLG1CQUFBO0FBRWhCOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdJO0VBQ0ksbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0FBRFI7O0FBSUk7RUFDSSxrQkFBQTtFQUNBLG1DQUFBO0FBRlI7O0FBTUE7RUFDSSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFLSTtFQUNJLGFBQUE7QUFIUjs7QUFPQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLDZDQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtBQUpKOztBQU1JO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDZDQUFBO0VBQ0EsdUJBQUE7RUFDQSxpRUFBQTtFQUNBLDRDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtBQUpSOztBQVFBO0VBQ0ksMENBQUE7RUFDQSxzQ0FBQTtBQUxKOztBQU9JO0VBQ0ksNENBQUE7RUFDQSxzQ0FBQTtFQUNBLDJEQUFBO0VBQ0EsK0JBQUE7QUFMUiIsImZpbGUiOiJib29raW5nLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xufVxuXG4uYWN0aW9uLWJ0bi1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICBidXR0b24ge1xuICAgICAgICBmb250LXNpemU6IDAuOTM4cmVtO1xuXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNjI1cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udHotYmxvY2stc2VwYXJhdG9yLXRpdGxlIHtcbiAgICBtYXJnaW46IDEuMjVyZW0gMDtcblxuICAgICY6Om5nLWRlZXAgLmJsb2NrLXNlcGFyYXRvcl9fdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgICAgICAgZm9udC1zaXplOiAwLjgzM3JlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTlyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWxpZ2h0LWdyYXkpO1xuICAgIH1cbn1cblxuLmJvb2tpbmctc3VtbWFyeS1jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgICBtYXgtd2lkdGg6IDE3LjM3NXJlbTtcbn1cblxuLmJvb2tpbmctc3VtbWFyeS1zZXJ2aWNlLWxpc3Qge1xuICAgIGZsZXg6IGF1dG87XG4gICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICBtYXJnaW46IDAgYXV0bztcblxuICAgICY6Om5nLWRlZXAge1xuXG4gICAgICAgIC50ei1ibG9jay1zZXBhcmF0b3ItdGl0bGUsXG4gICAgICAgIC5mbGlnaHQtZGVzY3JpcHRpb25fX3ByaWNlLWluZm8tY2FzZS1ibG9jayB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlbGVjdGVkLWZsaWdodC1jb250YWluZXIsXG4gICAgICAgIC5zZWxlY3RlZC10cmFpbi1jb250YWluZXIsXG4gICAgICAgIC5zZWxlY3RlZC1hY2NvbW1vZGF0aW9ucy1jb250YWluZXIsXG4gICAgICAgIC5zZWxlY3RlZC10cmFuc2Zlci1jb250YWluZXIsXG4gICAgICAgIC5zZWxlY3RlZC10cmFuc2Zlci1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuXG4gICAgICAgICAgICA+IDpub3QoOmxhc3QtY2hpbGQpLnRyYW5zZmVyLWNhcnQtaXRlbSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlbGVjdGVkLWFjY29tbW9kYXRpb24tb3B0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uYm9va2luZy1zdW1tYXJ5LXRpbWVsaW5lIHtcbiAgICB3aWR0aDogMTguMTI1cmVtO1xuICAgIHBhZGRpbmc6IDAgMC4zMTNyZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG59XG5cbi50aW1lbGluZS1idG4ge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwLjNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tdGV4dCk7XG4gICAgfVxuXG4gICAgLmljb24tdGltZWxpbmUtZW5kLWljb24ge1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWxpZ2h0LWdyYXkpO1xuICAgIH1cbn1cblxuLnN3aXRjaCB7XG4gICAgaGVpZ2h0OiAxLjg3NXJlbTtcbiAgICBwYWRkaW5nLWxlZnQ6IDQuMzc1cmVtO1xuICAgIGZvbnQtc2l6ZTogMC44MTNyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1saWdodC1ncmF5KTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgaW5wdXQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuLnNsaWRlciB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRyYW5zaXRpb246IDAuNHM7XG4gICAgaGVpZ2h0OiAxLjg3NXJlbTtcbiAgICB3aWR0aDogMy43NXJlbTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS11cGdyYWRlLXJpZ2h0LWJvcmRlcik7XG4gICAgYm9yZGVyLXJhZGl1czogMC45MzhyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogMDtcblxuICAgICY6OmJlZm9yZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgbGVmdDogLTNweDtcbiAgICAgICAgdG9wOiAtMnB4O1xuICAgICAgICB0cmFuc2l0aW9uOiAwLjNzO1xuICAgICAgICBoZWlnaHQ6IDEuODc1cmVtO1xuICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS11cGdyYWRlLXJpZ2h0LWJvcmRlcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuOTM4cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaW1nL2ljb25zL2Nsb3NlLWdyYXkuc3ZnKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICB9XG59XG5cbi5zd2l0Y2ggaW5wdXQ6Y2hlY2tlZCsuc2xpZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG5cbiAgICAmOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ljb25zL3dlYi9pbWcvaWNvbnMvZG9uZS5zdmcpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMS4zMTNyZW0pO1xuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 16636:
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/my-trips/booking/components/mob-booking-summary-info/mob-booking-summary-info.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobBookingSummaryInfoComponent": () => (/* binding */ MobBookingSummaryInfoComponent)
/* harmony export */ });
/* harmony import */ var _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/tools-service */ 67457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_checkout_services_tz_checkout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/checkout/services/tz-checkout.service */ 95678);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/tz-icon/tz-icon.component */ 48368);






function MobBookingSummaryInfoComponent_div_7_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const traveller_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](2, 1, traveller_r4.dateOfBirth, "dd/MM/YYYY"), " ");
} }
function MobBookingSummaryInfoComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 11)(1, "div", 12)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MobBookingSummaryInfoComponent_div_7_div_4_Template, 3, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const traveller_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", traveller_r4.firstName, " ", traveller_r4.lastName, " |\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", traveller_r4.dateOfBirth && traveller_r4.dateOfBirth !== "");
} }
function MobBookingSummaryInfoComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 14)(6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 4, "BOOKINGS.SUMMARY.CAR_RENTAL_DRIVER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"]("", ctx_r1.driverInfo.firstName, " ", ctx_r1.driverInfo.lastName, " |\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](10, 6, ctx_r1.driverInfo.dateOfBirth, "dd/MM/YYYY"));
} }
function MobBookingSummaryInfoComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 15)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r2.bookingSummary.booking.billingInfo.cardHolder);
} }
const _c0 = function (a0) { return { "hide-traveller": a0 }; };
function MobBookingSummaryInfoComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 1)(1, "div", 16)(2, "div", 3)(3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobBookingSummaryInfoComponent_div_18_Template_div_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.bookingSummary.booking.billingAddress.hideBillingInfo = !ctx_r8.bookingSummary.booking.billingAddress.hideBillingInfo; });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 18)(8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](13, _c0, ctx_r3.bookingSummary.booking.billingAddress.hideBillingInfo));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 9, "BOOKINGS.SUMMARY.BILLING"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.bookingSummary.booking.billingAddress.companyName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.bookingSummary.booking.billingAddress.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.bookingSummary.booking.billingAddress.zipCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.bookingSummary.booking.billingAddress.city);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.bookingSummary.booking.billingAddress.country);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 11, "BOOKINGS.SUMMARY.VAT"), ":\u00A0\u00A0", ctx_r3.bookingSummary.booking.billingAddress.vatNo, " ");
} }
class MobBookingSummaryInfoComponent {
    constructor(tzCheckoutService, translateService) {
        this.tzCheckoutService = tzCheckoutService;
        this.translateService = translateService;
        this.cartSummary = [];
        this.selectedInsurance = { selectedIdx: -1 };
        this.additionalLuggagePrice = { listPrice: 0, listPriceCur: '' };
        this.additionalLuggages = [];
        this.travellers = [];
        this.accTravellers = [];
    }
    ngOnInit() {
        this.cartData = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_0__.ToolsService.deepCopy(this.bookingSummary.cart);
        this.formSummaryInfos();
    }
    formLuggageText(option, type) {
        const bagTitle = this.translateService.instant('FLIGHT.LUGGAGE.' + type);
        let txt = 'pc x ';
        if (option.count > 1) {
            txt = 'pcs x ';
        }
        if (option.weight === 0) {
            return bagTitle + ': ' + option.count + ' ' + txt;
        }
        // 2 pcs x 23kg
        return bagTitle + ': ' + option.count + ' ' + txt + option.weight + 'kg';
    }
    formSummaryLuggageInfo() {
        const booking = this.bookingSummary.booking;
        this.additionalLuggagePrice = {
            listPrice: booking.additionalLuggagePrice.listPrice,
            listPriceCur: booking.additionalLuggagePrice.listPriceCur,
        };
        const tmpLuggageMap = {};
        let byTotalWeight = false;
        for (const traveller of booking.travellers) {
            if (!traveller.additionalLuggage || !traveller.additionalLuggage.checkIn.options) {
                continue;
            }
            byTotalWeight = traveller.additionalLuggage.checkIn.byTotalWeight;
            for (const i in traveller.additionalLuggage.checkIn.options) {
                if (!traveller.additionalLuggage.checkIn.options.hasOwnProperty(i)) {
                    continue;
                }
                const option = traveller.additionalLuggage.checkIn.options[i];
                if (tmpLuggageMap[option.weight]) {
                    if (byTotalWeight) {
                        tmpLuggageMap[option.weight].weight += option.weight * option.count;
                    }
                    tmpLuggageMap[option.weight].count += option.count;
                }
                else {
                    tmpLuggageMap[option.weight] = option;
                }
            }
        }
        for (const title in tmpLuggageMap) {
            if (!tmpLuggageMap.hasOwnProperty(title)) {
                continue;
            }
            this.additionalLuggages.push(this.formLuggageText(tmpLuggageMap[title], 'checkIn'));
        }
    }
    formSummaryInfos() {
        this.travellers = this.bookingSummary.booking.travellers;
        this.accTravellers = this.bookingSummary.booking.accTravellers;
        this.transferTraveller = this.bookingSummary.booking.transferTraveller;
        this.driverInfo = this.bookingSummary.booking.driverInfo;
        this.cartSummary = this.tzCheckoutService.formCheckoutCartSummary(this.cartData.items);
        if (this.cartData.insurancePrice && this.cartData.insurancePrice.listPrice) {
            const selected = this.cartData.insuranceDataSummary.insuranceBooking;
            for (const [i, insurance] of this.cartData.insuranceDataSummary.tzInsurance.insurances.entries()) {
                if (selected.formuleRef !== insurance.formuleRef) {
                    continue;
                }
                this.selectedInsurance = {
                    selected: insurance,
                    selectedIdx: i,
                    validatedTC: true,
                };
            }
        }
        if (this.bookingSummary.booking.baggageSelected) {
            this.formSummaryLuggageInfo();
        }
        this.cartData.helpers = this.tzCheckoutService.getHelpers(this.cartData, this.additionalLuggagePrice, this.selectedInsurance.selected);
    }
}
MobBookingSummaryInfoComponent.ɵfac = function MobBookingSummaryInfoComponent_Factory(t) { return new (t || MobBookingSummaryInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_modules_checkout_services_tz_checkout_service__WEBPACK_IMPORTED_MODULE_1__.TzCheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService)); };
MobBookingSummaryInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MobBookingSummaryInfoComponent, selectors: [["tz-mob-booking-summary-info"]], inputs: { bookingSummary: "bookingSummary" }, decls: 19, vars: 12, consts: [[1, "booking-summary-container"], [1, "booking-summary-block"], [1, "booking-block"], [1, "booking-label"], ["class", "booking-item", 4, "ngFor", "ngForOf"], ["class", "booking-block", 4, "ngIf"], [1, "booking-block", "mb-0"], ["class", "booking-info booking-card-holder", 4, "ngIf"], [1, "booking-item", "d-flex"], [3, "icon"], ["class", "booking-summary-block", 4, "ngIf"], [1, "booking-item"], [1, "booking-info", "d-flex"], [4, "ngIf"], [1, "booking-item", "booking-info", "d-flex"], [1, "booking-info", "booking-card-holder"], [3, "ngClass"], [1, "tz-icon-filled-arrow", "arrow", 3, "click"], [1, "booking-info"]], template: function MobBookingSummaryInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MobBookingSummaryInfoComponent_div_7_Template, 5, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, MobBookingSummaryInfoComponent_div_8_Template, 11, 9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6)(10, "div", 3)(11, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](14, MobBookingSummaryInfoComponent_div_14_Template, 3, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "tz-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, MobBookingSummaryInfoComponent_div_18_Template, 21, 15, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 8, "CAR_RENTAL." + (ctx.travellers.length > 1 ? "PASSENGERS" : "PASSENGER")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.travellers);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.driverInfo && ctx.driverInfo.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](13, 10, "GENERAL.PAYMENT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bookingSummary.booking.billingInfo.cardHolder !== "");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" \u2022\u2022\u2022\u2022 ", ctx.bookingSummary.booking.billingInfo.lastFourDigits, " \u00A0 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("icon", ctx.bookingSummary.booking.billingInfo.brandType === "visa" ? "visa-icon" : "icon-master-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.bookingSummary.booking.invoiceRequired);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_2__.TzIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: [".booking-summary-container[_ngcontent-%COMP%] {\n  width: 100%;\n  top: 1.5rem;\n  background: var(--color-main-background-mobile);\n  padding-bottom: 0.5rem;\n}\n.booking-summary-container[_ngcontent-%COMP%]  .cart-summary-container {\n  position: initial !important;\n}\n.booking-summary-block[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  padding-top: 0.25rem;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-block[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  background: var(--color-primary-white);\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-card-holder[_ngcontent-%COMP%] {\n  margin: 0.5rem 0 0 1rem;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-item[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border-mobile);\n  margin: 0 1rem;\n  display: flex;\n  align-items: center;\n  height: 2.5rem;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-item[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-label[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border-mobile);\n  padding: 0 1rem;\n  height: 2rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-text-light-gray);\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-label[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  font-size: 0.4rem;\n  cursor: pointer;\n  transform: rotate(180deg);\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-label.card-detail[_ngcontent-%COMP%] {\n  justify-content: start;\n  text-transform: capitalize;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-label.card-detail[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .booking-info[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-regular);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.booking-summary-block[_ngcontent-%COMP%]   .hide-traveller[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transform: rotate(0deg);\n}\n.booking-summary-block[_ngcontent-%COMP%]   .hide-traveller[_ngcontent-%COMP%]   .booking-info[_ngcontent-%COMP%] {\n  display: none;\n}\n  .tz-toggle-button-container {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1ib29raW5nLXN1bW1hcnktaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0EsK0NBQUE7RUFDQSxzQkFBQTtBQUNKO0FBRVE7RUFDSSw0QkFBQTtBQUFaO0FBS0E7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7QUFGSjtBQUlJO0VBQ0kscUJBQUE7RUFDQSxzQ0FBQTtBQUZSO0FBR1E7RUFDSSx1QkFBQTtBQURaO0FBR1E7RUFDSSxtREFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBRFo7QUFJUTtFQUNJLG1CQUFBO0FBRlo7QUFLUTtFQUNJLG1EQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtBQUhaO0FBS1k7RUFDSSxtQ0FBQTtBQUhoQjtBQU1ZO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUFKaEI7QUFPWTtFQUNJLHNCQUFBO0VBQ0EsMEJBQUE7QUFMaEI7QUFPZ0I7RUFDSSxvQkFBQTtBQUxwQjtBQVdJO0VBQ0ksdUNBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFUUjtBQWFRO0VBQ0ksdUJBQUE7QUFYWjtBQWNRO0VBQ0ksYUFBQTtBQVpaO0FBaUJBO0VBQ0ksZ0JBQUE7QUFkSiIsImZpbGUiOiJtb2ItYm9va2luZy1zdW1tYXJ5LWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9va2luZy1zdW1tYXJ5LWNvbnRhaW5lciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdG9wOiAxLjVyZW07XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbWFpbi1iYWNrZ3JvdW5kLW1vYmlsZSk7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcblxuICAgICY6Om5nLWRlZXAge1xuICAgICAgICAuY2FydC1zdW1tYXJ5LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwb3NpdGlvbjogaW5pdGlhbCAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYm9va2luZy1zdW1tYXJ5LWJsb2NrIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgIHBhZGRpbmctdG9wOiAwLjI1cmVtO1xuXG4gICAgLmJvb2tpbmctYmxvY2sge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICAuYm9va2luZy1jYXJkLWhvbGRlciB7XG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwIDAgMXJlbTtcbiAgICAgICAgfVxuICAgICAgICAuYm9va2luZy1pdGVtIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICAgICAgICAgIG1hcmdpbjogMCAxcmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib29raW5nLWl0ZW06bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvb2tpbmctbGFiZWwge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1tb2JpbGUpO1xuICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWxpZ2h0LWdyYXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXJyb3cge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC40cmVtO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmNhcmQtZGV0YWlsIHtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0YXJ0O1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuXG4gICAgICAgICAgICAgICAgPiBkaXYge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYm9va2luZy1pbmZvIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICB9XG5cbiAgICAuaGlkZS10cmF2ZWxsZXIge1xuICAgICAgICAuYXJyb3cge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAuYm9va2luZy1pbmZvIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbjo6bmctZGVlcCAudHotdG9nZ2xlLWJ1dHRvbi1jb250YWluZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 91594:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/my-trips/booking/components/mob-booking-summary/mob-booking-summary.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobBookingSummaryComponent": () => (/* binding */ MobBookingSummaryComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _mob_booking_summary_info_mob_booking_summary_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mob-booking-summary-info/mob-booking-summary-info.component */ 16636);
/* harmony import */ var _trip_timeline_trip_timeline_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../trip-timeline/trip-timeline.component */ 17887);
/* harmony import */ var _results_transport_flights_components_selected_flights_selected_flights_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../results/transport/flights/components/selected-flights/selected-flights.component */ 41562);
/* harmony import */ var _results_transport_trains_components_selected_trains_selected_trains_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../results/transport/trains/components/selected-trains/selected-trains.component */ 20878);
/* harmony import */ var _results_accommodations_components_selected_accommodations_selected_accommodations_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../results/accommodations/components/selected-accommodations/selected-accommodations.component */ 16068);
/* harmony import */ var _results_transfers_components_selected_transfers_selected_transfers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../results/transfers/components/selected-transfers/selected-transfers.component */ 99131);
/* harmony import */ var _results_car_rentals_components_selected_car_rentals_selected_car_rentals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../results/car-rentals/components/selected-car-rentals/selected-car-rentals.component */ 49476);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);














function MobBookingSummaryComponent_ng_container_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, "\u00A0|\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function MobBookingSummaryComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, MobBookingSummaryComponent_ng_container_6_span_1_Template, 2, 0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const service_r6 = ctx.$implicit;
    const first_r7 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !first_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "SERVICES." + service_r6.toUpperCase()), " ");
} }
function MobBookingSummaryComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "tz-selected-flights", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cancel", function MobBookingSummaryComponent_ng_container_17_Template_tz_selected_flights_cancel_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r9.onCancel([ctx_r9.flightsCartData.items[0].selectedItem.bookingOptions[0].itineraryId]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("flightCartData", ctx_r1.flightsCartData)("fromBookings", true)("paymentCaptureMode", ctx_r1.bookingSummary.booking.paymentCaptureMode);
} }
function MobBookingSummaryComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "tz-selected-trains", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cancel", function MobBookingSummaryComponent_ng_container_18_Template_tz_selected_trains_cancel_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r11.onCancel([ctx_r11.trainCartData.items[0].selectedItem.bookingOptions[0].itineraryId]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("trainItems", ctx_r2.trainCartData.items)("fromBookings", true)("paymentCaptureMode", ctx_r2.bookingSummary.booking.paymentCaptureMode);
} }
function MobBookingSummaryComponent_ng_container_19_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "tz-selected-accommodations", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cancel", function MobBookingSummaryComponent_ng_container_19_Template_tz_selected_accommodations_cancel_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r13.onCancel($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("accommodationCartData", ctx_r3.accommodationCartData)("fromBookings", true)("paymentCaptureMode", ctx_r3.bookingSummary.booking.paymentCaptureMode);
} }
function MobBookingSummaryComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "tz-selected-transfers", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cancel", function MobBookingSummaryComponent_ng_container_20_Template_tz_selected_transfers_cancel_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r15.onCancel([$event]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("transferCartData", ctx_r4.transferCartData)("fromBookings", true)("paymentCaptureMode", ctx_r4.bookingSummary.booking.paymentCaptureMode)("isSummary", true);
} }
function MobBookingSummaryComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "tz-selected-car-rentals", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cancel", function MobBookingSummaryComponent_ng_container_21_Template_tz_selected_car_rentals_cancel_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r17.onCancel([ctx_r17.carRentalCartData.items[0].selectedItem.bookingOptions[0].itineraryId]); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("carRentalCartData", ctx_r5.carRentalCartData)("fromBookings", true)("serviceList", false)("paymentCaptureMode", ctx_r5.bookingSummary.booking.paymentCaptureMode);
} }
const _c0 = function (a0) { return { selected: a0 }; };
class MobBookingSummaryComponent {
    constructor() {
        this.incompleteOrCancelBookings = false;
        this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.selectedTab = 0;
    }
    onCancel(bookingIds) {
        this.cancel.emit(bookingIds);
    }
}
MobBookingSummaryComponent.ɵfac = function MobBookingSummaryComponent_Factory(t) { return new (t || MobBookingSummaryComponent)(); };
MobBookingSummaryComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: MobBookingSummaryComponent, selectors: [["tz-mob-booking-summary"]], inputs: { bookingSummary: "bookingSummary", transferCartData: "transferCartData", flightsCartData: "flightsCartData", accommodationCartData: "accommodationCartData", carRentalCartData: "carRentalCartData", trainCartData: "trainCartData", incompleteOrCancelBookings: "incompleteOrCancelBookings" }, outputs: { cancel: "cancel" }, decls: 22, vars: 26, consts: [[1, "header"], ["routerLink", "/bookings/bookings-list", 1, "back-button"], ["icon", "arrow_back_ios", "data-test", "back-to-basket"], [1, "service-container"], [4, "ngFor", "ngForOf"], [3, "bookingSummary"], [1, "tz-toggle-button-container"], [1, "tz-toggle-button", 3, "ngClass", "click"], [3, "hidden", "cartItems"], [1, "flex", "flex-column", 3, "hidden"], [4, "ngIf"], ["class", "service-and", 4, "ngIf"], [1, "service-and"], [3, "flightCartData", "fromBookings", "paymentCaptureMode", "cancel"], [1, "selected-train-container"], [3, "trainItems", "fromBookings", "paymentCaptureMode", "cancel"], [3, "accommodationCartData", "fromBookings", "paymentCaptureMode", "cancel"], [3, "transferCartData", "fromBookings", "paymentCaptureMode", "isSummary", "cancel"], [3, "carRentalCartData", "fromBookings", "serviceList", "paymentCaptureMode", "cancel"]], template: function MobBookingSummaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "tz-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, MobBookingSummaryComponent_ng_container_6_Template, 4, 4, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "tz-mob-booking-summary-info", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 6)(9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MobBookingSummaryComponent_Template_div_click_9_listener() { return ctx.selectedTab = 0; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MobBookingSummaryComponent_Template_div_click_12_listener() { return ctx.selectedTab = 1; });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](15, "tz-trip-timeline", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, MobBookingSummaryComponent_ng_container_17_Template, 2, 3, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](18, MobBookingSummaryComponent_ng_container_18_Template, 4, 3, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](19, MobBookingSummaryComponent_ng_container_19_Template, 2, 3, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, MobBookingSummaryComponent_ng_container_20_Template, 2, 4, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, MobBookingSummaryComponent_ng_container_21_Template, 2, 4, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 16, "BOOKINGS.BOOKING"), "# ", ctx.bookingSummary.booking.bookingNumber, "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.bookingSummary.booking.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("bookingSummary", ctx.bookingSummary);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](22, _c0, ctx.selectedTab === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](11, 18, "GENERAL.SUMMARY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](24, _c0, ctx.selectedTab === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](14, 20, "TIMELINE.TIMELINE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.selectedTab !== 1)("cartItems", ctx.bookingSummary.cart.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.selectedTab !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.flightsCartData && ctx.flightsCartData.items && ctx.flightsCartData.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.trainCartData && ctx.trainCartData.items && ctx.trainCartData.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.accommodationCartData && ctx.accommodationCartData.items && ctx.accommodationCartData.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.transferCartData && ctx.transferCartData.items && ctx.transferCartData.items.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.carRentalCartData && ctx.carRentalCartData.items && ctx.carRentalCartData.items.length);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _ionic_angular__WEBPACK_IMPORTED_MODULE_10__.RouterLinkDelegate, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_0__.TzIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _mob_booking_summary_info_mob_booking_summary_info_component__WEBPACK_IMPORTED_MODULE_1__.MobBookingSummaryInfoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _trip_timeline_trip_timeline_component__WEBPACK_IMPORTED_MODULE_2__.TripTimelineComponent, _results_transport_flights_components_selected_flights_selected_flights_component__WEBPACK_IMPORTED_MODULE_3__.SelectedFlightsComponent, _results_transport_trains_components_selected_trains_selected_trains_component__WEBPACK_IMPORTED_MODULE_4__.SelectedTrainsComponent, _results_accommodations_components_selected_accommodations_selected_accommodations_component__WEBPACK_IMPORTED_MODULE_5__.SelectedAccommodationsComponent, _results_transfers_components_selected_transfers_selected_transfers_component__WEBPACK_IMPORTED_MODULE_6__.SelectedTransfersComponent, _results_car_rentals_components_selected_car_rentals_selected_car_rentals_component__WEBPACK_IMPORTED_MODULE_7__.SelectedCarRentalsComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  background-color: var(--color-main-background-mobile);\n}\n[_nghost-%COMP%]   .tz-toggle-button-container[_ngcontent-%COMP%]   .tz-toggle-button[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-white);\n}\n[_nghost-%COMP%]   .tz-toggle-button-container[_ngcontent-%COMP%]   .tz-toggle-button.selected[_ngcontent-%COMP%] {\n  background-color: var(--color-main-purple);\n}\n.header[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1rem;\n  font-weight: var(--font-weight-regular);\n  padding: 0.6875rem 1rem;\n  margin-bottom: 0.25rem;\n  text-align: center;\n  background-color: var(--color-primary-white);\n  position: relative;\n  border-bottom: 1px solid var(--color-border-mobile);\n}\n.header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  position: absolute;\n  left: 1rem;\n}\n.header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.service-container[_ngcontent-%COMP%] {\n  background: var(--color-primary-white);\n  padding: 0.625rem 1rem;\n  border-bottom: 1px solid var(--color-border-mobile);\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 1rem;\n}\n[_nghost-%COMP%]     tz-booking-summary-info .booking-summary-container {\n  position: unset;\n}\n[_nghost-%COMP%]     tz-booking-summary-info .booking-summary-container tz-cart-summary {\n  display: none;\n}\n[_nghost-%COMP%]     tz-booking-summary-info .booking-summary-container .booking-summary-block {\n  margin: 0;\n}\n[_nghost-%COMP%]     .trip-planner-timeline-conteiner {\n  background: var(--color-main-background-mobile);\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]     .trip-planner-timeline-conteiner {\n    padding: 1.25rem 1.5rem;\n  }\n}\n[_nghost-%COMP%]     .trip-planner-timeline-conteiner .trip-planner-timeline-block {\n  background-color: var(--color-primary-white);\n  padding: 1.5rem 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1ib29raW5nLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFEQUFBO0FBREo7QUFJUTtFQUNJLDRDQUFBO0FBRlo7QUFJWTtFQUNJLDBDQUFBO0FBRmhCO0FBUUE7RUFDSSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7QUFMSjtBQU9JO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFMUjtBQU9RO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFMWjtBQVVBO0VBQ0ksc0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1EQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBUEo7QUFVQTtFQUNJLGVBQUE7QUFQSjtBQVNJO0VBQ0ksYUFBQTtBQVBSO0FBVUk7RUFDSSxTQUFBO0FBUlI7QUFZQTtFQUtJLCtDQUFBO0FBYko7QUNESTtFRFNKO0lBRVEsdUJBQUE7RUFOTjtBQUNGO0FBVUk7RUFDSSw0Q0FBQTtFQUNBLHNCQUFBO0FBUlIiLCJmaWxlIjoibW9iLWJvb2tpbmctc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuOmhvc3Qge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4tYmFja2dyb3VuZC1tb2JpbGUpO1xuXG4gICAgLnR6LXRvZ2dsZS1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgLnR6LXRvZ2dsZS1idXR0b24ge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG5cbiAgICAgICAgICAgICYuc2VsZWN0ZWQge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmhlYWRlciB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgcGFkZGluZzogMC42ODc1cmVtIDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcblxuICAgIC5iYWNrLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6IDFyZW07XG5cbiAgICAgICAgdHotaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLnNlcnZpY2UtY29udGFpbmVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAxcmVtO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCB0ei1ib29raW5nLXN1bW1hcnktaW5mbyAuYm9va2luZy1zdW1tYXJ5LWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHVuc2V0O1xuXG4gICAgdHotY2FydC1zdW1tYXJ5IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAuYm9va2luZy1zdW1tYXJ5LWJsb2NrIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC50cmlwLXBsYW5uZXItdGltZWxpbmUtY29udGVpbmVyIHtcbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbTtcbiAgICB9XG5cbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluLWJhY2tncm91bmQtbW9iaWxlKTtcblxuICAgIC50cmlwLXBsYW5uZXItdGltZWxpbmUtYmxvY2sge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgcGFkZGluZzogMS41cmVtIDEuNXJlbTtcbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 15257:
/*!*****************************************************!*\
  !*** ./src/app/services/screen-detector.service.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScreenDetectorService": () => (/* binding */ ScreenDetectorService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ 39910);



class ScreenDetectorService {
    constructor(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.$isMobile = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(false);
        this.addScreenSizeListeners();
    }
    get isMobile() {
        return this.$isMobile;
    }
    addScreenSizeListeners() {
        this.breakpointObserver
            .observe(['(max-width: 1220px)', '(min-width: 1221px)'])
            .subscribe((state) => {
            if (state.breakpoints['(max-width: 1220px)']) {
                if (!this.$isMobile.getValue()) {
                    this.$isMobile.next(true);
                }
            }
            if (state.breakpoints['(min-width: 1221px)']) {
                if (this.$isMobile.getValue()) {
                    this.$isMobile.next(false);
                }
            }
        });
    }
}
ScreenDetectorService.ɵfac = function ScreenDetectorService_Factory(t) { return new (t || ScreenDetectorService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__.BreakpointObserver)); };
ScreenDetectorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: ScreenDetectorService, factory: ScreenDetectorService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_core_constants_keyboard-key-types_const_ts-src_app_modules_my-trips_booking_b-7bbbc7.js.map