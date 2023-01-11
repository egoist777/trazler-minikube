"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_my-trips_accommodation-booking_accommodation-booking_module_ts"],{

/***/ 53814:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/my-trips/accommodation-booking/accommodation-booking-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationBookingRoutingModule": () => (/* binding */ AccommodationBookingRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _accommodation_booking_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accommodation-booking.component */ 73036);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _accommodation_booking_component__WEBPACK_IMPORTED_MODULE_0__.AccommodationBookingComponent }];
class AccommodationBookingRoutingModule {
}
AccommodationBookingRoutingModule.ɵfac = function AccommodationBookingRoutingModule_Factory(t) { return new (t || AccommodationBookingRoutingModule)(); };
AccommodationBookingRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AccommodationBookingRoutingModule });
AccommodationBookingRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccommodationBookingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 73036:
/*!*******************************************************************************************!*\
  !*** ./src/app/modules/my-trips/accommodation-booking/accommodation-booking.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationBookingComponent": () => (/* binding */ AccommodationBookingComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/cart-status */ 32304);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/tools-service */ 67457);
/* harmony import */ var _services_modules_bookings_services_booking_service_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/bookings/services/booking-service.service */ 64701);
/* harmony import */ var _services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modules/core/scroll-service */ 90097);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! rxjs */ 87260);
/* harmony import */ var _results_accommodation_components_accommodation_reviews_popup_accommodation_reviews_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../results/accommodation/components/accommodation-reviews-popup/accommodation-reviews-popup.component */ 11220);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_modules_bookings_dataservices_booking_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/modules/bookings/dataservices/booking.data.service */ 65279);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/modules/cart/services/cart.service */ 16750);
/* harmony import */ var _services_modules_accommodations_dataservices_accommodations_data_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/modules/accommodations/dataservices/accommodations.data.service */ 96154);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _services_screen_detector_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/screen-detector.service */ 15257);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _results_accommodation_components_accommodation_review_list_accommodation_review_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../results/accommodation/components/accommodation-review-list/accommodation-review-list.component */ 82310);
/* harmony import */ var _results_accommodation_components_accommodation_details_accommodation_details_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../results/accommodation/components/accommodation-details/accommodation-details.component */ 37769);
/* harmony import */ var _results_accommodation_components_skeletons_mob_accommodation_detail_skeleton_mob_accommodation_detail_skeleton_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../results/accommodation/components/skeletons/mob-accommodation-detail-skeleton/mob-accommodation-detail-skeleton.component */ 74953);
/* harmony import */ var _results_accommodation_components_skeletons_accommodation_detail_skeleton_loader_accommodation_detail_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../results/accommodation/components/skeletons/accommodation-detail-skeleton-loader/accommodation-detail-skeleton-loader.component */ 82125);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @ngx-translate/core */ 87514);






 // eslint-disable-next-line max-len





















const _c0 = ["detailsContainer"];

function AccommodationBookingComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "tz-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 1, "BOOKINGS.BACK_TO_MY_BOOKING"), " ");
  }
}

function AccommodationBookingComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "tz-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }
}

function AccommodationBookingComponent_div_7_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r7.accommodation.city);
  }
}

function AccommodationBookingComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, AccommodationBookingComponent_div_7_div_2_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r2.accommodation.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.accommodation.city !== "");
  }
}

function AccommodationBookingComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 13)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "tz-accommodation-review-list", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("skeletonLoading", ctx_r4.loading)("accommodationReviews", ctx_r4.accommodationReviews == null ? null : ctx_r4.accommodationReviews.recentReviews);
  }
}

const _c1 = function (a0) {
  return {
    right: a0
  };
};

function AccommodationBookingComponent_div_12_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AccommodationBookingComponent_div_12_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r9.scrollToTop();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](1, _c1, ctx_r8.scrollBtnRight + "px"));
  }
}

function AccommodationBookingComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 15)(1, "tz-accommodation-details", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("openReviewsPopup", function AccommodationBookingComponent_div_12_Template_tz_accommodation_details_openReviewsPopup_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r11.openReviewsPopup();
    })("cancel", function AccommodationBookingComponent_div_12_Template_tz_accommodation_details_cancel_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r13.onCancel($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, AccommodationBookingComponent_div_12_div_2_Template, 1, 3, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("accommodation", ctx_r5.accommodation)("accommodationReviews", ctx_r5.accommodationReviews)("myTripCartData", ctx_r5.accommodationCartData)("fromMyTrips", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.showScrollBtn);
  }
}

function AccommodationBookingComponent_div_13_tz_mob_accommodation_detail_skeleton_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "tz-mob-accommodation-detail-skeleton");
  }
}

function AccommodationBookingComponent_div_13_tz_accommodation_detail_skeleton_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "tz-accommodation-detail-skeleton-loader");
  }
}

function AccommodationBookingComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, AccommodationBookingComponent_div_13_tz_mob_accommodation_detail_skeleton_1_Template, 1, 0, "tz-mob-accommodation-detail-skeleton", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, AccommodationBookingComponent_div_13_tz_accommodation_detail_skeleton_loader_3_Template, 1, 0, "tz-accommodation-detail-skeleton-loader", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 2, ctx_r6.platformService.isMobileDevice$));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 4, ctx_r6.platformService.isMobileDevice$) === false);
  }
}

class AccommodationBookingComponent {
  constructor(platformService, activeRoute, bookingDataService, userService, settingsService, cartService, accommodationsDataService, dialogService, screenDetectorService, router, bookingServiceService, scrollService) {
    this.platformService = platformService;
    this.activeRoute = activeRoute;
    this.bookingDataService = bookingDataService;
    this.userService = userService;
    this.settingsService = settingsService;
    this.cartService = cartService;
    this.accommodationsDataService = accommodationsDataService;
    this.dialogService = dialogService;
    this.screenDetectorService = screenDetectorService;
    this.router = router;
    this.bookingServiceService = bookingServiceService;
    this.scrollService = scrollService;
    this.accommodation = null;
    this.loading = false;
    this.showScrollBtn = false;
    this.scrollBtnRight = 22;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.Subject();
    this.bookingId = this.activeRoute.snapshot.params['id'];
    this.isMobile$ = this.screenDetectorService.isMobile;
  }

  ngOnInit() {
    this.initializeBookingAccommodationComponent();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onCancel(optionsIds) {
    const cancelable$ = this.bookingServiceService.checkCancelOptions(optionsIds, this.bookingSummary.cart.items);

    if (!cancelable$) {
      return;
    }

    cancelable$.subscribe(cancelBooking => {
      if (!cancelBooking) {
        return;
      }

      const cancelOptions = _services_modules_bookings_services_booking_service_service__WEBPACK_IMPORTED_MODULE_3__.BookingServiceService.getCartOptions(optionsIds, this.bookingSummary.cart.items);

      for (const option of cancelOptions) {
        option.status = _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_0__.CartStatus.STATUS_CPROGRESS;
      }

      this.formHotelDetails();
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

  openReviewsPopup() {
    this.dialogService.openAccommodationReviewsDialog(_results_accommodation_components_accommodation_reviews_popup_accommodation_reviews_popup_component__WEBPACK_IMPORTED_MODULE_5__.AccommodationReviewsPopupComponent, this.accommodationReviews);
  }

  gotoBooking() {
    this.router.navigate(['/bookings/booking-summary', this.bookingId]);
  }

  scrollToTop() {
    this.scrollService.scrollToTop();
  }

  formHotelDetails() {
    const cartData = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.bookingSummary.cart);
    const accCartData = this.cartService.getCartData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC, cartData);

    if (accCartData) {
      this.accommodation = accCartData.items[0].selectedItem.data;
      this.accommodationCartData = {
        cartData: accCartData,
        paymentCaptureMode: this.bookingSummary.booking.paymentCaptureMode
      };
    }
  }

  fetchBookingSummary() {
    this.loading = true;
    this.bookingDataService.getBooking(this.userService.getCustomerInformation().id, this.bookingId, false).subscribe(booking => {
      this.bookingSummary = booking;
      this.formHotelDetails();

      if (!this.accommodation) {
        return;
      }

      this.accommodationsDataService.getAccommodationReviews(this.accommodation).pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$)).subscribe(accommodationReviews => {
        this.accommodationReviews = accommodationReviews;
        this.loading = false;
      }, error => {
        console.log('Get booking failure: ', error);
      });
    }, failure => {
      console.log('Get booking failure: ', failure);
    });
  }

  initializeBookingAccommodationComponent() {
    this.fetchBookingSummary();
    this.scrollBtnRight = _services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_4__.ScrollService.adjustScrollButtonPosition(this.detailsContainer);
    this.scrollService.onScroll$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$)).subscribe(scrollElement => {
      this.showScrollBtn = scrollElement.scrollTop >= window.innerHeight * 1.5;
    });
    this.platformService.isMobileDevice$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$)).subscribe(() => {
      requestAnimationFrame(() => this.scrollBtnRight = _services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_4__.ScrollService.adjustScrollButtonPosition(this.detailsContainer));
    });
    this.settingsService.selectedLanguageSubject.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_22__.skip)(1), (0,rxjs__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$)).subscribe(() => {
      this.fetchBookingSummary();
    });
  }

}

AccommodationBookingComponent.ɵfac = function AccommodationBookingComponent_Factory(t) {
  return new (t || AccommodationBookingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_6__.PlatformService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_modules_bookings_dataservices_booking_data_service__WEBPACK_IMPORTED_MODULE_7__.BookingDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_9__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_10__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_modules_accommodations_dataservices_accommodations_data_service__WEBPACK_IMPORTED_MODULE_11__.AccommodationsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_12__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_screen_detector_service__WEBPACK_IMPORTED_MODULE_13__.ScreenDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_23__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_modules_bookings_services_booking_service_service__WEBPACK_IMPORTED_MODULE_3__.BookingServiceService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_4__.ScrollService));
};

AccommodationBookingComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: AccommodationBookingComponent,
  selectors: [["tz-accommodation-booking"]],
  viewQuery: function AccommodationBookingComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_19__.ElementRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.detailsContainer = _t.first);
    }
  },
  decls: 14,
  vars: 12,
  consts: [[1, "back-btn-container"], [1, "tz-container", "flex"], [1, "pointer", "body-2", "back-button", 3, "click"], [4, "ngIf"], ["class", "booking-header", 4, "ngIf"], [1, "tz-container", "accommodation-container", "flex"], ["detailsContainer", ""], ["class", "accommodations-reviews-container flex", 4, "ngIf"], ["class", "accommodation-details-container flex", 4, "ngIf"], ["icon", "arrow_back_ios"], [1, "booking-header"], ["class", "bullet-split", 4, "ngIf"], [1, "bullet-split"], [1, "accommodations-reviews-container", "flex"], [3, "skeletonLoading", "accommodationReviews"], [1, "accommodation-details-container", "flex"], [3, "accommodation", "accommodationReviews", "myTripCartData", "fromMyTrips", "openReviewsPopup", "cancel"], ["class", "scroll-navigation-btn tz-icon-arrow arrow", "data-test", "back-to-top", 3, "ngStyle", "click", 4, "ngIf"], ["data-test", "back-to-top", 1, "scroll-navigation-btn", "tz-icon-arrow", "arrow", 3, "ngStyle", "click"]],
  template: function AccommodationBookingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AccommodationBookingComponent_Template_div_click_2_listener() {
        return ctx.gotoBooking();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, AccommodationBookingComponent_ng_container_3_Template, 4, 3, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, AccommodationBookingComponent_ng_container_5_Template, 2, 0, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, AccommodationBookingComponent_div_7_Template, 3, 2, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, AccommodationBookingComponent_div_10_Template, 3, 2, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](11, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, AccommodationBookingComponent_div_12_Template, 3, 5, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, AccommodationBookingComponent_div_13_Template, 5, 6, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 6, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 8, ctx.platformService.isMobileDevice$));
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.accommodation);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](11, 10, ctx.isMobile$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.loading && ctx.accommodation && ctx.accommodationCartData);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx.loading);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.NgIf, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_14__.TzIconComponent, _results_accommodation_components_accommodation_review_list_accommodation_review_list_component__WEBPACK_IMPORTED_MODULE_15__.AccommodationReviewListComponent, _results_accommodation_components_accommodation_details_accommodation_details_component__WEBPACK_IMPORTED_MODULE_16__.AccommodationDetailsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_24__.NgStyle, _results_accommodation_components_skeletons_mob_accommodation_detail_skeleton_mob_accommodation_detail_skeleton_component__WEBPACK_IMPORTED_MODULE_17__.MobAccommodationDetailSkeletonComponent, _results_accommodation_components_skeletons_accommodation_detail_skeleton_loader_accommodation_detail_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_18__.AccommodationDetailSkeletonLoaderComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_24__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_25__.TranslatePipe],
  styles: [".accommodation-container[_ngcontent-%COMP%] {\n  padding-bottom: 1.25rem;\n  display: flex;\n  flex-direction: row;\n  flex: 1;\n}\n@media (max-width: 920px) {\n  .accommodation-container[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n  }\n}\n.accommodation-container[_ngcontent-%COMP%]   .accommodations-reviews-container[_ngcontent-%COMP%] {\n  width: var(--sidebar-width);\n  padding-left: 1.5625rem;\n  padding-right: 1.5625rem;\n  max-width: var(--sidebar-width);\n  margin-right: 1.375rem;\n}\n.accommodation-container[_ngcontent-%COMP%]   .accommodation-details-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.sidebar-for-mobile[_ngcontent-%COMP%] {\n  position: absolute;\n}\n.back-btn-container[_ngcontent-%COMP%]   .booking-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.back-btn-container[_ngcontent-%COMP%]   .bullet-split[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 920px) {\n  .back-btn-container[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n  .back-btn-container[_ngcontent-%COMP%]   .tz-container[_ngcontent-%COMP%] {\n    padding: 0.6875rem 1rem;\n    margin-bottom: 0.25rem;\n    background-color: var(--color-primary-white);\n    border-bottom: 1px solid var(--color-border-mobile);\n    position: relative;\n    display: block;\n    height: 2.5rem;\n  }\n  .back-btn-container[_ngcontent-%COMP%]   .booking-header[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    line-height: 1rem;\n    font-weight: var(--font-weight-regular);\n    text-align: center;\n  }\n  .back-btn-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n    width: 1.5rem;\n    position: absolute;\n    left: 1rem;\n  }\n  .back-btn-container[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n    width: 1rem;\n    height: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tYm9va2luZy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksdUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FBREo7QUMrQ0k7RURsREo7SUFPUSxpQkFBQTtFQUFOO0FBQ0Y7QUFFSTtFQUNJLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7QUFBUjtBQUdJO0VBQ0ksT0FBQTtBQURSO0FBS0E7RUFDSSxrQkFBQTtBQUZKO0FBTUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUhSO0FBTUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQ2tCSTtFRHZCSjtJQWFRLHFCQUFBO0VBSk47RUFNTTtJQUNJLHVCQUFBO0lBQ0Esc0JBQUE7SUFDQSw0Q0FBQTtJQUNBLG1EQUFBO0lBQ0Esa0JBQUE7SUFDQSxjQUFBO0lBQ0EsY0FBQTtFQUpWO0VBT007SUFDSSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsdUNBQUE7SUFDQSxrQkFBQTtFQUxWO0VBUU07SUFDSSxhQUFBO0lBQ0Esa0JBQUE7SUFDQSxVQUFBO0VBTlY7RUFRVTtJQUNJLFdBQUE7SUFDQSxZQUFBO0VBTmQ7QUFDRiIsImZpbGUiOiJhY2NvbW1vZGF0aW9uLWJvb2tpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidXRpbHMvbWl4aW5zXCI7XG5cbi5hY2NvbW1vZGF0aW9uLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGZsZXg6IDE7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAuYWNjb21tb2RhdGlvbnMtcmV2aWV3cy1jb250YWluZXIge1xuICAgICAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMS41NjI1cmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjU2MjVyZW07XG4gICAgICAgIG1heC13aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMS4zNzVyZW07XG4gICAgfVxuXG4gICAgLmFjY29tbW9kYXRpb24tZGV0YWlscy1jb250YWluZXIge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbn1cblxuLnNpZGViYXItZm9yLW1vYmlsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xufVxuXG4uYmFjay1idG4tY29udGFpbmVyIHtcbiAgICAuYm9va2luZy1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuYnVsbGV0LXNwbGl0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5cbiAgICAgICAgLnR6LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjY4NzVyZW0gMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuYm9va2luZy1oZWFkZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhY2stYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAxcmVtO1xuXG4gICAgICAgICAgICB0ei1pY29uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 5389:
/*!****************************************************************************************!*\
  !*** ./src/app/modules/my-trips/accommodation-booking/accommodation-booking.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationBookingModule": () => (/* binding */ AccommodationBookingModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _accommodation_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accommodation-booking-routing.module */ 53814);
/* harmony import */ var _results_accommodation_accommodation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../results/accommodation/accommodation.module */ 4704);
/* harmony import */ var _accommodation_booking_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accommodation-booking.component */ 73036);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);






class AccommodationBookingModule {
}
AccommodationBookingModule.ɵfac = function AccommodationBookingModule_Factory(t) { return new (t || AccommodationBookingModule)(); };
AccommodationBookingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AccommodationBookingModule });
AccommodationBookingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _accommodation_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccommodationBookingRoutingModule, _results_accommodation_accommodation_module__WEBPACK_IMPORTED_MODULE_1__.AccommodationModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AccommodationBookingModule, { declarations: [_accommodation_booking_component__WEBPACK_IMPORTED_MODULE_2__.AccommodationBookingComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _accommodation_booking_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccommodationBookingRoutingModule, _results_accommodation_accommodation_module__WEBPACK_IMPORTED_MODULE_1__.AccommodationModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_my-trips_accommodation-booking_accommodation-booking_module_ts.js.map