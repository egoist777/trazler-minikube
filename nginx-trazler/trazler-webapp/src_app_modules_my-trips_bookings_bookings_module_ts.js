"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_my-trips_bookings_bookings_module_ts"],{

/***/ 41807:
/*!**********************************************************************!*\
  !*** ./src/app/modules/my-trips/bookings/bookings-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsListRoutingModule": () => (/* binding */ BookingsListRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _bookings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings.component */ 53858);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _bookings_component__WEBPACK_IMPORTED_MODULE_0__.BookingsComponent }];
class BookingsListRoutingModule {
}
BookingsListRoutingModule.ɵfac = function BookingsListRoutingModule_Factory(t) { return new (t || BookingsListRoutingModule)(); };
BookingsListRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BookingsListRoutingModule });
BookingsListRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BookingsListRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 53858:
/*!*****************************************************************!*\
  !*** ./src/app/modules/my-trips/bookings/bookings.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsComponent": () => (/* binding */ BookingsComponent)
/* harmony export */ });
/* harmony import */ var _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/cart/utils/cart.utils */ 14770);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _services_modules_bookings_dataservices_booking_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/modules/bookings/dataservices/booking.data.service */ 65279);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/pipes/date-range.pipe */ 82478);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _components_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/booking-list/booking-list.component */ 16851);
/* harmony import */ var _components_mob_booking_list_mob_booking_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mob-booking-list/mob-booking-list.component */ 47832);















function BookingsComponent_tz_booking_list_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tz-booking-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("sortBookings", function BookingsComponent_tz_booking_list_0_Template_tz_booking_list_sortBookings_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r2.onSortBookings($event);
    })("goto", function BookingsComponent_tz_booking_list_0_Template_tz_booking_list_goto_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r3);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r4.gotoRoute($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("bookings", ctx_r0.bookings)("noBookingsFound", ctx_r0.noBookingsFound)("sortedOptions", ctx_r0.sortedOptions);
  }
}

function BookingsComponent_tz_mob_booking_list_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tz-mob-booking-list", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("sortBookings", function BookingsComponent_tz_mob_booking_list_2_Template_tz_mob_booking_list_sortBookings_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r5.onSortBookings($event);
    })("goto", function BookingsComponent_tz_mob_booking_list_2_Template_tz_mob_booking_list_goto_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r7.gotoRoute($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("bookings", ctx_r1.bookings)("noBookingsFound", ctx_r1.noBookingsFound)("sortedOptions", ctx_r1.sortedOptions);
  }
}

class BookingsComponent {
  constructor(userService, bookingDataService, translateService, router, settingsService, dateRange, platformService) {
    this.userService = userService;
    this.bookingDataService = bookingDataService;
    this.translateService = translateService;
    this.router = router;
    this.settingsService = settingsService;
    this.dateRange = dateRange;
    this.platformService = platformService;
    this.bookings = [];
    this.noBookingsFound = false;
    this.sortedOptions = {
      tripStartDate: true,
      bookingNumber: false,
      createdDate: false
    };
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  }

  static formStatusClass(status) {
    switch (status) {
      case 'BOOKINGS.UPCOMING':
        return 'Upcoming';

      case 'BOOKINGS.STARTED':
        return 'Started';

      case 'BOOKINGS.COMPLETED':
        return 'Completed';

      case 'BOOKINGS.STATUS.5':
        return 'Cancelled';

      case 'BOOKINGS.FAILED':
        return 'Failed';

      case 'BOOKINGS.ACTION_NEEDED':
        return 'update-required';

      default:
        return '';
    }
  }

  ngOnInit() {
    this.initializeBookingListComponent();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onSortBookings(sortType) {
    switch (sortType) {
      case 'tripStartDate':
        this.sortedOptions.tripStartDate = !this.sortedOptions.tripStartDate;
        this.bookings.sort((a, b) => this.sortedOptions.tripStartDate ? +new Date(b.startDate) - +new Date(a.startDate) : +new Date(a.startDate) - +new Date(b.startDate));
        break;

      case 'bookingNumber':
        this.sortedOptions.bookingNumber = !this.sortedOptions.bookingNumber;
        this.bookings.sort((a, b) => {
          const nameA = a.bookingNumber.toUpperCase();
          const nameB = b.bookingNumber.toUpperCase();

          if (nameA < nameB) {
            return this.sortedOptions.bookingNumber ? 1 : -1;
          }

          if (nameA > nameB) {
            return this.sortedOptions.bookingNumber ? -1 : 1;
          }

          return 0; // names must be equal
        });
        break;

      case 'createdDate':
        this.sortedOptions.createdDate = !this.sortedOptions.createdDate;
        this.bookings.sort((a, b) => this.sortedOptions.createdDate ? +new Date(b.createdDate) - +new Date(a.createdDate) : +new Date(a.createdDate) - +new Date(b.createdDate));
        break;
    }
  }

  gotoRoute(routeData) {
    this.bookingDataService.setBookings(routeData.routePath === '/bookings/booking-summary' ? this.bookings : []);
    this.router.navigate([routeData.routePath, routeData.id ? routeData.id : '']);
  }

  formBookingInfos() {
    for (const [i, booking] of this.bookings.entries()) {
      this.bookings[i].bookingStatusClass = BookingsComponent.formStatusClass(booking.bookingStatusStr);

      if (booking.startDate !== '' && booking.endDate !== '') {
        this.bookings[i].tripDate = this.dateRange.transform(booking.startDate, booking.endDate, true);
      }

      const travellersData = _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_0__.CartUtils.getTravellersData(booking.cartItems);

      if (travellersData) {
        this.bookings[i].personsStr = travellersData.txt + ' ' + this.translateService.instant('TRAVELLER.' + (travellersData.total > 1 ? 'PERSONS' : 'PERSON')).toLowerCase();
      }
    }
  }

  fetchBookings() {
    const bookingsList = this.bookingDataService.getBookingsList();

    if (bookingsList.length !== 0) {
      this.bookings = bookingsList;
      this.formBookingInfos();
      return;
    }

    this.bookingDataService.getBookings(this.userService.getCustomerInformation().id).subscribe(bookings => {
      this.noBookingsFound = bookings.length === 0;
      this.bookings = bookings;
      this.formBookingInfos();
    }, failure => {
      this.noBookingsFound = true;
      console.log('Get booking failure: ', failure);
    });
  }

  initializeBookingListComponent() {
    this.fetchBookings();
    this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.takeUntil)(this.destroy$)).subscribe(() => {
      this.formBookingInfos();
    });
  }

}

BookingsComponent.ɵfac = function BookingsComponent_Factory(t) {
  return new (t || BookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modules_bookings_dataservices_booking_data_service__WEBPACK_IMPORTED_MODULE_2__.BookingDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_13__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_4__.DateRangePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_5__.PlatformService));
};

BookingsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: BookingsComponent,
  selectors: [["tz-bookings-list"]],
  decls: 4,
  vars: 6,
  consts: [[3, "bookings", "noBookingsFound", "sortedOptions", "sortBookings", "goto", 4, "ngIf"], [3, "bookings", "noBookingsFound", "sortedOptions", "sortBookings", "goto"]],
  template: function BookingsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, BookingsComponent_tz_booking_list_0_Template, 1, 3, "tz-booking-list", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, BookingsComponent_tz_mob_booking_list_2_Template, 1, 3, "tz-mob-booking-list", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](1, 2, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, ctx.platformService.isMobileDevice$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.NgIf, _components_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_6__.BookingListComponent, _components_mob_booking_list_mob_booking_list_component__WEBPACK_IMPORTED_MODULE_7__.MobBookingListComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJib29raW5ncy5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 15396:
/*!**************************************************************!*\
  !*** ./src/app/modules/my-trips/bookings/bookings.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsListModule": () => (/* binding */ BookingsListModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./bookings-routing.module */ 41807);
/* harmony import */ var _bookings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./bookings.component */ 53858);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/date-range.pipe */ 82478);
/* harmony import */ var _components_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/booking-list/booking-list.component */ 16851);
/* harmony import */ var _components_mob_booking_list_mob_booking_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mob-booking-list/mob-booking-list.component */ 47832);
/* harmony import */ var _components_mob_booking_list_item_mob_booking_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mob-booking-list-item/mob-booking-list-item.component */ 94646);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);









class BookingsListModule {
}
BookingsListModule.ɵfac = function BookingsListModule_Factory(t) { return new (t || BookingsListModule)(); };
BookingsListModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: BookingsListModule });
BookingsListModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ providers: [_shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_3__.DateRangePipe], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingsListRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](BookingsListModule, { declarations: [_bookings_component__WEBPACK_IMPORTED_MODULE_1__.BookingsComponent, _components_booking_list_booking_list_component__WEBPACK_IMPORTED_MODULE_4__.BookingListComponent, _components_mob_booking_list_mob_booking_list_component__WEBPACK_IMPORTED_MODULE_5__.MobBookingListComponent, _components_mob_booking_list_item_mob_booking_list_item_component__WEBPACK_IMPORTED_MODULE_6__.MobBookingListItemComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingsListRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ }),

/***/ 16851:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/my-trips/bookings/components/booking-list/booking-list.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingListComponent": () => (/* binding */ BookingListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/pipes/date-range.pipe */ 82478);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/pipes/tz-currency.pipe */ 98967);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/pipes/tz-date.pipe */ 92456);








function BookingListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "a", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookingListComponent_ng_container_0_Template_a_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.gotoContacts(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookingListComponent_ng_container_0_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r5.gotoRoute("/search"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](6, 2, "BOOKINGS.SUMMARY.NOBOOKING_CONTENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](9, 4, "BOOKINGS.SUMMARY.CONTACT_PAGE"), " ");
} }
function BookingListComponent_ng_template_1_table_6_tr_23_ng_container_7_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, "\u00A0&\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function BookingListComponent_ng_template_1_table_6_tr_23_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BookingListComponent_ng_template_1_table_6_tr_23_ng_container_7_span_1_Template, 2, 0, "span", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const service_r11 = ctx.$implicit;
    const first_r12 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !first_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 2, "SERVICES." + service_r11.toUpperCase()), " ");
} }
function BookingListComponent_ng_template_1_table_6_tr_23_ng_container_9_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "span", 23);
} }
function BookingListComponent_ng_template_1_table_6_tr_23_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BookingListComponent_ng_template_1_table_6_tr_23_ng_container_9_span_1_Template, 1, 0, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const location_r14 = ctx.$implicit;
    const i_r15 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", i_r15 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", location_r14, " ");
} }
const _c0 = function (a0, a1) { return { corrupted: a0, "failed-booking": a1 }; };
function BookingListComponent_ng_template_1_table_6_tr_23_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookingListComponent_ng_template_1_table_6_tr_23_Template_tr_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r18); const booking_r8 = restoredCtx.$implicit; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](3); return ctx_r17.gotoRoute("/bookings/booking-summary", booking_r8.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "dateRange");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, BookingListComponent_ng_template_1_table_6_tr_23_ng_container_7_Template, 4, 4, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](9, BookingListComponent_ng_template_1_table_6_tr_23_ng_container_9_Template, 3, 2, "ng-container", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](17, "tzDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const booking_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](21, _c0, booking_r8.corrupted, booking_r8.bookingStatusClass === "Failed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 10, booking_r8.startDate, booking_r8.endDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](booking_r8.bookingNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", booking_r8.services);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", booking_r8.locationStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", booking_r8.personsStr, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](14, 13, booking_r8.itemPrice.listPrice, booking_r8.itemPrice.listPriceCur));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](17, 16, booking_r8.createdDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", booking_r8.bookingStatusClass ? booking_r8.bookingStatusClass.toLocaleLowerCase() : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 19, booking_r8.bookingStatusStr), " ");
} }
const _c1 = function (a0) { return { "des-order": a0 }; };
function BookingListComponent_ng_template_1_table_6_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "table", 11)(1, "tr", 12)(2, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookingListComponent_ng_template_1_table_6_Template_th_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r19.sortBookings.emit("tripStartDate"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookingListComponent_ng_template_1_table_6_Template_th_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r21.sortBookings.emit("bookingNumber"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "th", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](16, "th", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function BookingListComponent_ng_template_1_table_6_Template_th_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r20); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r22.sortBookings.emit("createdDate"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "th", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](23, BookingListComponent_ng_template_1_table_6_tr_23_Template, 21, 24, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c1, ctx_r6.sortedOptions.tripStartDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 10, "SEARCH.TRIP_DATES"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](22, _c1, ctx_r6.sortedOptions.bookingNumber));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](10, 12, "BOOKINGS.SUMMARY.BOOKING_NUMBER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](14, 14, "GENERAL.SERVICES"), " \u2022 ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](15, 16, "BOOKINGS.ITINERARY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](24, _c1, ctx_r6.sortedOptions.createdDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](20, 18, "BOOKINGS.DATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r6.bookings)("ngForTrackBy", ctx_r6.bookingTrackId);
} }
function BookingListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "div", 3)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, BookingListComponent_ng_template_1_table_6_Template, 24, 26, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](4, 2, "BOOKINGS.SUMMARY.MY_BOOKINGS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.bookings.length);
} }
class BookingListComponent {
    constructor(router) {
        this.router = router;
        this.bookings = [];
        this.noBookingsFound = false;
        this.sortedOptions = {
            tripStartDate: true,
            bookingNumber: false,
            createdDate: false,
        };
        this.sortBookings = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.goto = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
    }
    bookingTrackId(index, booking) {
        return booking.id;
    }
    gotoContacts() {
        const targetUrl = this.router.serializeUrl(this.router.createUrlTree(['/about/contacts']));
        window.open(targetUrl, '_blank');
    }
    gotoRoute(routePath, id) {
        this.goto.emit({ routePath, id });
    }
}
BookingListComponent.ɵfac = function BookingListComponent_Factory(t) { return new (t || BookingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
BookingListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: BookingListComponent, selectors: [["tz-booking-list"]], inputs: { bookings: "bookings", noBookingsFound: "noBookingsFound", sortedOptions: "sortedOptions" }, outputs: { sortBookings: "sortBookings", goto: "goto" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["bookingsList", ""], [1, "no-booking-found"], [1, "tz-container"], ["translate", "BOOKINGS.SUMMARY.NOBOOKING_TITLE", 1, "no-trips-header"], [1, "mt-3", "no-trips-content"], [3, "click"], ["type", "button", "translate", "GENERAL.GO_TO_HOMEPAGE", 1, "mt-4", "tz-btn", "tz-btn-primary", 3, "click"], [1, "back-btn-container", "mb-0"], [1, "booking-header"], ["class", "bookings-list-table", 4, "ngIf"], [1, "bookings-list-table"], [1, "bookings-list-table__headers"], [1, "with-sorting", "width-15", 3, "ngClass", "click"], [1, "tz-icon-filled-arrow", "arrow"], [1, "with-sorting", "width-17", 3, "ngClass", "click"], [1, "width-30"], ["translate", "BOOKINGS.AMOUNT"], ["translate", "BOOKINGS.STATUS_"], ["class", "bookings-list-table__data", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "bookings-list-table__data", 3, "ngClass", "click"], [1, "my-trips-summary"], [4, "ngFor", "ngForOf"], [1, "bullet-split"], [3, "ngClass"], ["class", "service-and", 4, "ngIf"], [1, "service-and"], ["class", "bullet-split", 4, "ngIf"]], template: function BookingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, BookingListComponent_ng_container_0_Template, 12, 6, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, BookingListComponent_ng_template_1_Template, 7, 4, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.noBookingsFound)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_0__.DateRangePipe, _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_1__.TzCurrencyPipe, _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_2__.TzDatePipe], styles: [".width-15[_ngcontent-%COMP%] {\n  width: 15%;\n}\n\n.width-17[_ngcontent-%COMP%] {\n  width: 17%;\n}\n\n.width-30[_ngcontent-%COMP%] {\n  width: 30%;\n}\n\n.bookings-list-table[_ngcontent-%COMP%] {\n  border-collapse: separate;\n  border-spacing: 0 0.625rem;\n  width: 100%;\n  table-layout: fixed;\n}\n\n.bookings-list-table__headers[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.5rem;\n  color: var(--color-text-light-gray);\n}\n\n.bookings-list-table__headers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  padding: 1rem 1.25rem 1rem 1.25rem;\n  font-weight: normal;\n}\n\n.bookings-list-table__headers[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child {\n  padding-right: 0;\n}\n\n.bookings-list-table__headers[_ngcontent-%COMP%]   th.with-sorting[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.bookings-list-table__headers[_ngcontent-%COMP%]   th.with-sorting[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n\n.bookings-list-table__headers[_ngcontent-%COMP%]   th.with-sorting[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  font-size: 0.38rem;\n  width: 0.625rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  right: -8px;\n  transform: translate(5px, -50%);\n}\n\n.bookings-list-table__headers[_ngcontent-%COMP%]   th.with-sorting.des-order[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transform: translate(5px, -50%) rotate(180deg);\n}\n\n.bookings-list-table__data[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: var(--color-primary-black);\n  font-weight: 500;\n  border-radius: 3px;\n  outline: 1px solid var(--upgrade-right-border);\n  outline-offset: -1px;\n}\n\n.bookings-list-table__data.corrupted[_ngcontent-%COMP%] {\n  color: var(--color-main-red);\n}\n\n.bookings-list-table__data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-white);\n  padding: 1.25rem 0 1.25rem 1.25rem;\n  vertical-align: initial;\n}\n\n.bookings-list-table__data[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  font-size: 0.75rem;\n  font-weight: normal;\n}\n\n.bookings-list-table__data[_ngcontent-%COMP%]   td.started[_ngcontent-%COMP%] {\n  color: var(--color-main-purple);\n}\n\n.bookings-list-table__data[_ngcontent-%COMP%]   td.cancelled[_ngcontent-%COMP%], .bookings-list-table__data[_ngcontent-%COMP%]   td.failed[_ngcontent-%COMP%], .bookings-list-table__data[_ngcontent-%COMP%]   td.update-required[_ngcontent-%COMP%] {\n  color: var(--color-main-red);\n}\n\n.bookings-list-table__data[_ngcontent-%COMP%]   td.upcoming[_ngcontent-%COMP%] {\n  color: var(--color-main-green);\n}\n\n@media not all and (hover: none) {\n  .bookings-list-table__data[_ngcontent-%COMP%]:not(.failed-booking):hover {\n    cursor: pointer;\n  }\n}\n\n.bookings-list-table__data.failed-booking[_ngcontent-%COMP%] {\n  cursor: default;\n  pointer-events: none;\n}\n\n.bookings-list-table[_ngcontent-%COMP%]   th.right[_ngcontent-%COMP%], .bookings-list-table[_ngcontent-%COMP%]   td.right[_ngcontent-%COMP%] {\n  text-align: right;\n}\n\n.bookings-list-table[_ngcontent-%COMP%]   th.center[_ngcontent-%COMP%], .bookings-list-table[_ngcontent-%COMP%]   td.center[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.bookings-list-table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]:last-child, .bookings-list-table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  padding-right: 1.25rem;\n}\n\n.no-booking-found[_ngcontent-%COMP%] {\n  margin-top: 3.75rem;\n  padding-top: 3rem;\n  border-top: 1px var(--color-element-gray-border) solid;\n}\n\n.no-booking-found[_ngcontent-%COMP%]   .no-trips-header[_ngcontent-%COMP%] {\n  color: var(--color-primary-black);\n  font-weight: var(--font-weight-regular);\n}\n\n.no-booking-found[_ngcontent-%COMP%]   .no-trips-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--color-main-purple);\n}\n\n@media not all and (hover: none) {\n  .no-booking-found[_ngcontent-%COMP%]   .no-trips-content[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksVUFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtBQURKOztBQUlBO0VBQ0ksVUFBQTtBQURKOztBQUlBO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQURKOztBQUdJO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1DQUFBO0FBRFI7O0FBR1E7RUFDSSxrQ0FBQTtFQUNBLG1CQUFBO0FBRFo7O0FBR1k7RUFDSSxnQkFBQTtBQURoQjs7QUFJWTtFQUNJLGVBQUE7QUFGaEI7O0FBSWdCO0VBQ0ksa0JBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FBRnBCOztBQUlvQjtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLCtCQUFBO0FBRnhCOztBQU9vQjtFQUNJLDhDQUFBO0FBTHhCOztBQVlJO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLDhDQUFBO0VBQ0Esb0JBQUE7QUFWUjs7QUFZUTtFQUNJLDRCQUFBO0FBVlo7O0FBYVE7RUFDSSw0Q0FBQTtFQUNBLGtDQUFBO0VBQ0EsdUJBQUE7QUFYWjs7QUFhWTtFQUNJLGtCQUFBO0VBQ0EsbUJBQUE7QUFYaEI7O0FBY1k7RUFDSSwrQkFBQTtBQVpoQjs7QUFlWTtFQUdJLDRCQUFBO0FBZmhCOztBQWtCWTtFQUNJLDhCQUFBO0FBaEJoQjs7QUNSSTtFQUNJO0lENkJRLGVBQUE7RUFsQmQ7QUFDRjs7QUFxQlE7RUFDSSxlQUFBO0VBQ0Esb0JBQUE7QUFuQlo7O0FBeUJROztFQUNJLGlCQUFBO0FBdEJaOztBQXlCUTs7RUFDSSxrQkFBQTtBQXRCWjs7QUF5QlE7O0VBQ0ksc0JBQUE7QUF0Qlo7O0FBMkJBO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHNEQUFBO0FBeEJKOztBQTBCSTtFQUNJLGlDQUFBO0VBQ0EsdUNBQUE7QUF4QlI7O0FBNEJRO0VBQ0ksZUFBQTtFQUNBLCtCQUFBO0FBMUJaOztBQzNDSTtFQUNJO0lEdUVRLFlBQUE7RUF6QmQ7QUFDRiIsImZpbGUiOiJib29raW5nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidXRpbHMvbWl4aW5zXCI7XG5cbi53aWR0aC0xNSB7XG4gICAgd2lkdGg6IDE1JTtcbn1cblxuLndpZHRoLTE3IHtcbiAgICB3aWR0aDogMTclO1xufVxuXG4ud2lkdGgtMzAge1xuICAgIHdpZHRoOiAzMCU7XG59XG5cbi5ib29raW5ncy1saXN0LXRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IHNlcGFyYXRlO1xuICAgIGJvcmRlci1zcGFjaW5nOiAwIDAuNjI1cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRhYmxlLWxheW91dDogZml4ZWQ7XG5cbiAgICAmX19oZWFkZXJzIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1saWdodC1ncmF5KTtcblxuICAgICAgICB0aCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxcmVtIDEuMjVyZW0gMXJlbSAxLjI1cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcblxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLndpdGgtc29ydGluZyB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICAgICAgPmRpdiB7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuXG4gICAgICAgICAgICAgICAgICAgIC5hcnJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuMzhyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMC42MjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0OiAtOHB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCAtNTAlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuZGVzLW9yZGVyPmRpdiB7XG4gICAgICAgICAgICAgICAgICAgIC5hcnJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC01MCUpIHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZGF0YSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1ibGFjayk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgb3V0bGluZTogMXB4IHNvbGlkIHZhcigtLXVwZ3JhZGUtcmlnaHQtYm9yZGVyKTtcbiAgICAgICAgb3V0bGluZS1vZmZzZXQ6IC0xcHg7XG5cbiAgICAgICAgJi5jb3JydXB0ZWQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRkIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICAgICAgcGFkZGluZzogMS4yNXJlbSAwIDEuMjVyZW0gMS4yNXJlbTtcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBpbml0aWFsO1xuXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnN0YXJ0ZWQge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuY2FuY2VsbGVkLFxuICAgICAgICAgICAgJi5mYWlsZWQsXG4gICAgICAgICAgICAmLnVwZGF0ZS1yZXF1aXJlZCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcmVkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi51cGNvbWluZyB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tZ3JlZW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJjpub3QoLmZhaWxlZC1ib29raW5nKSB7XG4gICAgICAgICAgICBAaW5jbHVkZSBvbi1ob3ZlciB7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5mYWlsZWQtYm9va2luZyB7XG4gICAgICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHRoLFxuICAgIHRkIHtcbiAgICAgICAgJi5yaWdodCB7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuXG4gICAgICAgICYuY2VudGVyIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubm8tYm9va2luZy1mb3VuZCB7XG4gICAgbWFyZ2luLXRvcDogMy43NXJlbTtcbiAgICBwYWRkaW5nLXRvcDogM3JlbTtcbiAgICBib3JkZXItdG9wOiAxcHggdmFyKC0tY29sb3ItZWxlbWVudC1ncmF5LWJvcmRlcikgc29saWQ7XG5cbiAgICAubm8tdHJpcHMtaGVhZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYmxhY2spO1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgfVxuXG4gICAgLm5vLXRyaXBzLWNvbnRlbnQge1xuICAgICAgICBhIHtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIG9uLWhvdmVyIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 94646:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/my-trips/bookings/components/mob-booking-list-item/mob-booking-list-item.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobBookingListItemComponent": () => (/* binding */ MobBookingListItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/pipes/tz-currency.pipe */ 98967);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/pipes/tz-date.pipe */ 92456);





function MobBookingListItemComponent_span_2_ng_container_1_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, "\u00A0|\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
function MobBookingListItemComponent_span_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MobBookingListItemComponent_span_2_ng_container_1_span_1_Template, 2, 0, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const service_r3 = ctx.$implicit;
    const first_r4 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !first_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 2, "SERVICES." + service_r3.toUpperCase()), " ");
} }
function MobBookingListItemComponent_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MobBookingListItemComponent_span_2_ng_container_1_Template, 4, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.booking.services);
} }
function MobBookingListItemComponent_div_7_ng_container_1_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "span", 15);
} }
function MobBookingListItemComponent_div_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MobBookingListItemComponent_div_7_ng_container_1_span_2_Template, 1, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const location_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", i_r8 !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", location_r7, "");
} }
function MobBookingListItemComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, MobBookingListItemComponent_div_7_ng_container_1_Template, 4, 2, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.booking == null ? null : ctx_r1.booking.locationStr);
} }
class MobBookingListItemComponent {
    constructor() { }
    ngOnInit() { }
}
MobBookingListItemComponent.ɵfac = function MobBookingListItemComponent_Factory(t) { return new (t || MobBookingListItemComponent)(); };
MobBookingListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MobBookingListItemComponent, selectors: [["tz-mob-booking-list-item"]], inputs: { booking: "booking" }, decls: 19, vars: 23, consts: [[1, "booking-list-item"], [1, "booking-item-header"], [4, "ngIf"], [1, "status", 3, "ngClass"], [1, "booking-item-block"], ["class", "d-flex", 4, "ngIf"], [1, "booking-price-date"], [1, "booking-info-item"], [1, "booking-text"], [4, "ngFor", "ngForOf"], ["class", "service-and", 4, "ngIf"], [1, "service-and"], [1, "d-flex"], [1, "booking-location"], ["class", "bullet-split", 4, "ngIf"], [1, "bullet-split"]], template: function MobBookingListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, MobBookingListItemComponent_span_2_Template, 2, 1, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MobBookingListItemComponent_div_7_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "tzCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7)(12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](14, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](17, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](18, "tzDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.booking == null ? null : ctx.booking.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", (ctx.booking == null ? null : ctx.booking.bookingStatusClass) ? ctx.booking.bookingStatusClass.toLocaleLowerCase() : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", (ctx.booking == null ? null : ctx.booking.bookingStatusStr) ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 11, ctx.booking.bookingStatusStr) : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.booking == null ? null : ctx.booking.locationStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate3"](" ", ctx.booking == null ? null : ctx.booking.tripDate, " | ", ctx.booking == null ? null : ctx.booking.personsStr, " | ", (ctx.booking == null ? null : ctx.booking.itemPrice == null ? null : ctx.booking.itemPrice.listPrice) ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](10, 13, ctx.booking.itemPrice.listPrice, ctx.booking == null ? null : ctx.booking.itemPrice == null ? null : ctx.booking.itemPrice.listPriceCur) : "", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](14, 16, "BOOKINGS.SUMMARY.BOOKING_NUMBER"), " | ", ctx.booking == null ? null : ctx.booking.bookingNumber, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](17, 18, "BOOKINGS.DATE"), " | ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](18, 20, ctx.booking == null ? null : ctx.booking.createdDate, "shortDate"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_0__.TzCurrencyPipe, _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_1__.TzDatePipe], styles: [".booking-list-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.booking-list-item[_ngcontent-%COMP%]   .booking-item-header[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-white);\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  padding: 0.5625rem 1.0625rem;\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 0.875rem;\n}\n.booking-list-item[_ngcontent-%COMP%]   .booking-item-block[_ngcontent-%COMP%] {\n  background-color: var(--color-main-blue-light);\n  padding: 0.5rem 1.125rem 0.5rem 1rem;\n}\n.booking-list-item[_ngcontent-%COMP%]   .booking-item-block[_ngcontent-%COMP%]   .booking-location[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1rem;\n  line-height: 1.1875rem;\n  text-transform: capitalize;\n}\n.booking-list-item[_ngcontent-%COMP%]   .booking-item-block[_ngcontent-%COMP%]   .booking-price-date[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  margin: 0.5rem 0;\n}\n.booking-list-item[_ngcontent-%COMP%]   .booking-item-block[_ngcontent-%COMP%]   .booking-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.booking-list-item[_ngcontent-%COMP%]   .booking-item-block[_ngcontent-%COMP%]   .booking-info-item[_ngcontent-%COMP%]   .booking-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 0.875rem;\n}\n.booking-list-item.corrupted[_ngcontent-%COMP%] {\n  color: var(--color-main-red);\n}\n.booking-list-item.failed-booking[_ngcontent-%COMP%] {\n  cursor: default;\n  pointer-events: none;\n}\n.booking-list-item[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-style: italic;\n}\n.booking-list-item[_ngcontent-%COMP%]   .status.started[_ngcontent-%COMP%] {\n  color: var(--color-main-purple);\n}\n.booking-list-item[_ngcontent-%COMP%]   .status.cancelled[_ngcontent-%COMP%], .booking-list-item[_ngcontent-%COMP%]   .status.failed[_ngcontent-%COMP%] {\n  color: var(--color-main-red);\n}\n.booking-list-item[_ngcontent-%COMP%]   .status.upcoming[_ngcontent-%COMP%] {\n  color: var(--color-main-green);\n}\n.booking-list-item[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1ib29raW5nLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0FBQ0o7QUFDSTtFQUNJLDRDQUFBO0VBQ0EsOEJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNSO0FBRUk7RUFDSSw4Q0FBQTtFQUNBLG9DQUFBO0FBQVI7QUFFUTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsMEJBQUE7QUFBWjtBQUdRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFEWjtBQUlRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBRlo7QUFJWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUZoQjtBQU9JO0VBQ0ksNEJBQUE7QUFMUjtBQVFJO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FBTlI7QUFTSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFQUjtBQVNRO0VBQ0ksK0JBQUE7QUFQWjtBQVVRO0VBRUksNEJBQUE7QUFUWjtBQVlRO0VBQ0ksOEJBQUE7QUFWWjtBQWNJO0VBQ0ksa0JBQUE7QUFaUiIsImZpbGUiOiJtb2ItYm9va2luZy1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYm9va2luZy1saXN0LWl0ZW0ge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcblxuICAgIC5ib29raW5nLWl0ZW0taGVhZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMC41NjI1cmVtIDEuMDYyNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMC44NzVyZW07XG4gICAgfVxuXG4gICAgLmJvb2tpbmctaXRlbS1ibG9jayB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4tYmx1ZS1saWdodCk7XG4gICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxLjEyNXJlbSAwLjVyZW0gMXJlbTtcblxuICAgICAgICAuYm9va2luZy1sb2NhdGlvbiB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTg3NXJlbTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJvb2tpbmctcHJpY2UtZGF0ZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwLjVyZW0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib29raW5nLWluZm8taXRlbSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAuYm9va2luZy10ZXh0IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC44NzVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNvcnJ1cHRlZCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXJlZCk7XG4gICAgfVxuXG4gICAgJi5mYWlsZWQtYm9va2luZyB7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgLnN0YXR1cyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcblxuICAgICAgICAmLnN0YXJ0ZWQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuY2FuY2VsbGVkLFxuICAgICAgICAmLmZhaWxlZCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1yZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi51cGNvbWluZyB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1ncmVlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 47832:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/my-trips/bookings/components/mob-booking-list/mob-booking-list.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobBookingListComponent": () => (/* binding */ MobBookingListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _mob_booking_list_item_mob_booking_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mob-booking-list-item/mob-booking-list-item.component */ 94646);







const _c0 = function (a0) { return { name: a0 }; };
function MobBookingListComponent_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div")(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "tz-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "tz-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 9)(6, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobBookingListComponent_ng_container_6_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.gotoRoute("/search"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 1, "BOOKINGS.NO_TRIPS_LISTED", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c0, ctx_r0.userName)), " ");
} }
const _c1 = function (a0) { return { "des-order": a0 }; };
function MobBookingListComponent_ng_template_7_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "tz-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobBookingListComponent_ng_template_7_ng_container_0_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r7.sortBookings.emit("tripStartDate"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](6, "tz-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](4, _c1, ctx_r5.sortedOptions.tripStartDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 2, "SEARCH.TRIP_DATES"), " ");
} }
const _c2 = function (a0, a1) { return { corrupted: a0, "failed-booking": a1 }; };
function MobBookingListComponent_ng_template_7_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobBookingListComponent_ng_template_7_div_1_Template_div_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const booking_r9 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r10.gotoRoute("/bookings/booking-summary", booking_r9.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "tz-mob-booking-list-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const booking_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction2"](2, _c2, booking_r9.corrupted, booking_r9.bookingStatusClass === "Failed"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("booking", booking_r9);
} }
function MobBookingListComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MobBookingListComponent_ng_template_7_ng_container_0_Template, 7, 6, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MobBookingListComponent_ng_template_7_div_1_Template, 2, 5, "div", 13);
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r2.bookings.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.bookings)("ngForTrackBy", ctx_r2.bookingTrackId);
} }
const _c3 = function (a0) { return { "bg-white": a0 }; };
class MobBookingListComponent {
    constructor(userService, location) {
        this.userService = userService;
        this.location = location;
        this.bookings = [];
        this.noBookingsFound = false;
        this.sortedOptions = {
            tripStartDate: true,
            bookingNumber: false,
            createdDate: false,
        };
        this.sortBookings = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.goto = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.userName = '';
        this.bookingSort = [
            { label: 'SEARCH.TRIP_DATES', sortBy: 'tripStartDate' },
            { label: 'BOOKINGS.SUMMARY.BOOKING_NUMBER', sortBy: 'bookingNumber' },
            { label: 'BOOKINGS.DATE', sortBy: 'createdDate' },
        ];
        this.userName = this.userService.formProfileName;
    }
    gotoRoute(routePath, id) {
        this.goto.emit({ routePath, id });
    }
    gotoBack() {
        this.location.back();
    }
    bookingTrackId(index, booking) {
        return booking.id;
    }
}
MobBookingListComponent.ɵfac = function MobBookingListComponent_Factory(t) { return new (t || MobBookingListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__.Location)); };
MobBookingListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MobBookingListComponent, selectors: [["tz-mob-booking-list"]], inputs: { bookings: "bookings", noBookingsFound: "noBookingsFound", sortedOptions: "sortedOptions" }, outputs: { sortBookings: "sortBookings", goto: "goto" }, decls: 9, vars: 8, consts: [[1, "mob-booking-list", 3, "ngClass"], [1, "header"], ["data-test", "mob-booking-list-search", 1, "back-button", 3, "click"], ["icon", "arrow_back_ios", "data-test", "back-to-basket"], [4, "ngIf", "ngIfElse"], ["bookingsList", ""], [1, "trips-icon-container"], ["icon", "calendar-icon", 1, "your-trips"], ["icon", "background-line", 1, "background-line"], [1, "bottom-container"], [1, "subtitle"], ["translate", "BOOKINGS.START_EXPLORING", 1, "tz-btn", "auth-btn", 3, "click"], [4, "ngIf"], ["data-test", "mob-booking-list-summary", 3, "ngClass", "click", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "sort-container", "d-flex", "align-center"], ["icon", "sort", 2, "height", "1rem"], ["data-test", "mob-booking-list-sort", 1, "sort-option", 3, "ngClass", "click"], ["icon", "arrow-up", 1, "arrow"], ["data-test", "mob-booking-list-summary", 3, "ngClass", "click"], [3, "booking"]], template: function MobBookingListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobBookingListComponent_Template_div_click_2_listener() { return ctx.gotoBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](3, "tz-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, MobBookingListComponent_ng_container_6_Template, 10, 6, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](7, MobBookingListComponent_ng_template_7_Template, 2, 3, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](6, _c3, ctx.bookings.length === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](5, 4, "PAGES.MY_TRIPS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.noBookingsFound)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_1__.TzIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _mob_booking_list_item_mob_booking_list_item_component__WEBPACK_IMPORTED_MODULE_2__.MobBookingListItemComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".mob-booking-list[_ngcontent-%COMP%] {\n  background-color: var(--color-main-background-mobile);\n  height: 100%;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item[_ngcontent-%COMP%]   .booking-item-header[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-white);\n  justify-content: space-between;\n  display: flex;\n  align-items: center;\n  padding: 0.5625rem 1.0625rem;\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 0.875rem;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item[_ngcontent-%COMP%]   .booking-item-block[_ngcontent-%COMP%] {\n  background-color: var(--color-main-blue-light);\n  padding: 0.5rem 1rem;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item[_ngcontent-%COMP%]   .booking-item-block[_ngcontent-%COMP%]   .booking-location[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 1rem;\n  line-height: 1.1875rem;\n  text-transform: capitalize;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item[_ngcontent-%COMP%]   .booking-item-block[_ngcontent-%COMP%]   .booking-price-date[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  margin: 0.5rem 0;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item[_ngcontent-%COMP%]   .booking-item-block[_ngcontent-%COMP%]   .booking-info-item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item[_ngcontent-%COMP%]   .booking-item-block[_ngcontent-%COMP%]   .booking-info-item[_ngcontent-%COMP%]   .booking-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 0.875rem;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item.corrupted[_ngcontent-%COMP%] {\n  color: var(--color-main-red);\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item.failed-booking[_ngcontent-%COMP%] {\n  cursor: default;\n  pointer-events: none;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item[_ngcontent-%COMP%]   .status[_ngcontent-%COMP%] {\n  font-style: italic;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item[_ngcontent-%COMP%]   .status.started[_ngcontent-%COMP%] {\n  color: var(--color-main-purple);\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item[_ngcontent-%COMP%]   .status.cancelled[_ngcontent-%COMP%], .mob-booking-list[_ngcontent-%COMP%]   .booking-list-item[_ngcontent-%COMP%]   .status.failed[_ngcontent-%COMP%] {\n  color: var(--color-main-red);\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item[_ngcontent-%COMP%]   .status.upcoming[_ngcontent-%COMP%] {\n  color: var(--color-main-green);\n}\n.mob-booking-list[_ngcontent-%COMP%]   .booking-list-item[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 0.5rem;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .sort-container[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-white);\n  padding: 0.25rem 1rem;\n  margin: 0.25rem 0;\n  margin-bottom: 0.75rem;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .sort-container[_ngcontent-%COMP%]   .sort-option[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: relative;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin-left: 0.25rem;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 150%;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .sort-container[_ngcontent-%COMP%]   .sort-option[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  font-size: 0.38rem;\n  width: 0.625rem;\n  display: inline-block;\n  position: absolute;\n  top: 50%;\n  right: -0.75rem;\n  transform: translate(5px, -50%);\n}\n.mob-booking-list[_ngcontent-%COMP%]   .sort-container[_ngcontent-%COMP%]   .sort-option.des-order[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  transform: translate(5px, -50%) rotate(180deg);\n}\n.mob-booking-list[_ngcontent-%COMP%]   .background-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%] {\n  font-weight: 500;\n  line-height: 1.125rem;\n  font-size: 0.875rem;\n  padding: 0.6875rem 1rem;\n  text-align: center;\n  background-color: var(--color-primary-white);\n  position: relative;\n  border-bottom: 1px solid var(--color-border-mobile);\n}\n.mob-booking-list[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  position: absolute;\n  left: 1rem;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .auth-btn[_ngcontent-%COMP%] {\n  margin-top: 3rem;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  text-align: center;\n  font-weight: 500;\n  height: 2.5rem;\n  width: 100%;\n  padding: 0.5rem 0.75rem;\n  border-radius: 0.25rem;\n  background: var(--color-main-purple);\n  color: var(--color-primary-white) !important;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .trips-icon-container[_ngcontent-%COMP%] {\n  margin-top: 5.875rem;\n  justify-content: center;\n  display: flex;\n  margin-bottom: -5.375rem;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .trips-icon-container[_ngcontent-%COMP%]   .your-trips[_ngcontent-%COMP%] {\n  height: 10.9375rem;\n  width: 12.5rem;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 1rem;\n  margin-top: 6rem;\n}\n.mob-booking-list[_ngcontent-%COMP%]   .bottom-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  line-height: 1.125rem;\n  font-weight: 400;\n  font-size: 0.75rem;\n  margin-left: 1.0625rem;\n  margin-bottom: 0;\n  margin-right: 1.125rem;\n  letter-spacing: 0.0015em;\n  color: var(--color-grey-mobile);\n}\n.bg-white[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-white);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1ib29raW5nLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxREFBQTtFQUNBLFlBQUE7QUFDSjtBQUNJO0VBQ0kscUJBQUE7QUFDUjtBQUNRO0VBQ0ksNENBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQ1o7QUFFUTtFQUNJLDhDQUFBO0VBQ0Esb0JBQUE7QUFBWjtBQUVZO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSwwQkFBQTtBQUFoQjtBQUdZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFEaEI7QUFJWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUZoQjtBQUlnQjtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUZwQjtBQU9RO0VBQ0ksNEJBQUE7QUFMWjtBQVFRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0FBTlo7QUFTUTtFQUNJLGtCQUFBO0FBUFo7QUFTWTtFQUNJLCtCQUFBO0FBUGhCO0FBVVk7RUFFSSw0QkFBQTtBQVRoQjtBQVlZO0VBQ0ksOEJBQUE7QUFWaEI7QUFjUTtFQUNJLGtCQUFBO0FBWlo7QUFnQkk7RUFDSSw0Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQkFBQTtBQWRSO0FBZ0JRO0VBQ0ksZUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBZFo7QUFnQlk7RUFDSSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxxQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtBQWRoQjtBQWtCZ0I7RUFDSSw4Q0FBQTtBQWhCcEI7QUFzQkk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQXBCUjtBQXVCSTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7QUFyQlI7QUF1QlE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQXJCWjtBQXVCWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBckJoQjtBQTBCSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQ0FBQTtFQUNBLDRDQUFBO0FBeEJSO0FBMkJJO0VBQ0ksb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx3QkFBQTtBQXpCUjtBQTJCUTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQXpCWjtBQTZCSTtFQUNJLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBM0JSO0FBNkJRO0VBQ0kscUJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtBQTNCWjtBQWdDQTtFQUNJLDRDQUFBO0FBN0JKIiwiZmlsZSI6Im1vYi1ib29raW5nLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iLWJvb2tpbmctbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1iYWNrZ3JvdW5kLW1vYmlsZSk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgLmJvb2tpbmctbGlzdC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuXG4gICAgICAgIC5ib29raW5nLWl0ZW0taGVhZGVyIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjU2MjVyZW0gMS4wNjI1cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg3NXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib29raW5nLWl0ZW0tYmxvY2sge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1ibHVlLWxpZ2h0KTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuXG4gICAgICAgICAgICAuYm9va2luZy1sb2NhdGlvbiB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTg3NXJlbTtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJvb2tpbmctcHJpY2UtZGF0ZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ib29raW5nLWluZm8taXRlbSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cbiAgICAgICAgICAgICAgICAuYm9va2luZy10ZXh0IHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5jb3JydXB0ZWQge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcmVkKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuZmFpbGVkLWJvb2tpbmcge1xuICAgICAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuc3RhdHVzIHtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcblxuICAgICAgICAgICAgJi5zdGFydGVkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmNhbmNlbGxlZCxcbiAgICAgICAgICAgICYuZmFpbGVkIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1yZWQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnVwY29taW5nIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1ncmVlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zb3J0LWNvbnRhaW5lciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDFyZW07XG4gICAgICAgIG1hcmdpbjogMC4yNXJlbSAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuXG4gICAgICAgIC5zb3J0LW9wdGlvbiB7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XG5cbiAgICAgICAgICAgIC5hcnJvdyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjM4cmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwLjYyNXJlbTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAtMC43NXJlbTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1cHgsIC01MCUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLmRlcy1vcmRlciB7XG4gICAgICAgICAgICAgICAgLmFycm93IHtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNXB4LCAtNTAlKSByb3RhdGUoMTgwZGVnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYmFja2dyb3VuZC1saW5lIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICB9XG5cbiAgICAuaGVhZGVyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjY4NzVyZW0gMXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLW1vYmlsZSk7XG5cbiAgICAgICAgLmJhY2stYnV0dG9uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIGxlZnQ6IDFyZW07XG5cbiAgICAgICAgICAgIHR6LWljb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hdXRoLWJ0biB7XG4gICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMC43NXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSkgIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudHJpcHMtaWNvbi1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiA1Ljg3NXJlbTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC01LjM3NXJlbTtcblxuICAgICAgICAueW91ci10cmlwcyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwLjkzNzVyZW07XG4gICAgICAgICAgICB3aWR0aDogMTIuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ib3R0b20tY29udGFpbmVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDZyZW07XG5cbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMS4wNjI1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS4xMjVyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDE1ZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleS1tb2JpbGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYmctd2hpdGUge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xufSJdfQ== */"], changeDetection: 0 });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_my-trips_bookings_bookings_module_ts.js.map