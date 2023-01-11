"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modules_results_accommodation_accommodation_module_ts"],{

/***/ 97795:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/accommodation-routing.module.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationRoutingModule": () => (/* binding */ AccommodationRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _accommodation_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accommodation.component */ 10689);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _accommodation_component__WEBPACK_IMPORTED_MODULE_0__.AccommodationComponent,
    },
];
class AccommodationRoutingModule {
}
AccommodationRoutingModule.ɵfac = function AccommodationRoutingModule_Factory(t) { return new (t || AccommodationRoutingModule)(); };
AccommodationRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AccommodationRoutingModule });
AccommodationRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccommodationRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 10689:
/*!**************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/accommodation.component.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationComponent": () => (/* binding */ AccommodationComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var _components_accommodation_reviews_popup_accommodation_reviews_popup_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/accommodation-reviews-popup/accommodation-reviews-popup.component */ 11220);
/* harmony import */ var _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/base-service-component/base-service.component */ 6371);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/state-from.const */ 54255);
/* harmony import */ var _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modules/cart/utils/cart.utils */ 14770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_accommodations_dataservices_accommodations_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modules/accommodations/dataservices/accommodations.data.service */ 96154);
/* harmony import */ var _services_modules_accommodations_services_accommodations_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/accommodations/services/accommodations.service */ 84647);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _components_accommodation_review_list_accommodation_review_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/accommodation-review-list/accommodation-review-list.component */ 82310);
/* harmony import */ var _components_accommodation_details_accommodation_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/accommodation-details/accommodation-details.component */ 37769);
/* harmony import */ var _components_skeletons_mob_accommodation_detail_skeleton_mob_accommodation_detail_skeleton_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/skeletons/mob-accommodation-detail-skeleton/mob-accommodation-detail-skeleton.component */ 74953);
/* harmony import */ var _components_skeletons_accommodation_detail_skeleton_loader_accommodation_detail_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/skeletons/accommodation-detail-skeleton-loader/accommodation-detail-skeleton-loader.component */ 82125);

















function AccommodationComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 3)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "tz-accommodation-review-list", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("skeletonLoading", ctx_r0.loading)("accommodationReviews", ctx_r0.accommodationReviews == null ? null : ctx_r0.accommodationReviews.recentReviews);
  }
}

function AccommodationComponent_div_3_tz_accommodation_details_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tz-accommodation-details", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("openReviewsPopup", function AccommodationComponent_div_3_tz_accommodation_details_1_Template_tz_accommodation_details_openReviewsPopup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r4.openReviewsPopup();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("accommodation", ctx_r3.accommodation)("cartData", ctx_r3.isHotelInCart ? ctx_r3.cartData : undefined)("isUserLogged", ctx_r3.isUserLogged)("bookingOptions", ctx_r3.bookingOptions)("accommodationReviews", ctx_r3.accommodationReviews);
  }
}

function AccommodationComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AccommodationComponent_div_3_tz_accommodation_details_1_Template, 1, 5, "tz-accommodation-details", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r1.accommodation);
  }
}

function AccommodationComponent_div_4_tz_mob_accommodation_detail_skeleton_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tz-mob-accommodation-detail-skeleton");
  }
}

function AccommodationComponent_div_4_tz_accommodation_detail_skeleton_loader_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "tz-accommodation-detail-skeleton-loader");
  }
}

function AccommodationComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AccommodationComponent_div_4_tz_mob_accommodation_detail_skeleton_1_Template, 1, 0, "tz-mob-accommodation-detail-skeleton", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AccommodationComponent_div_4_tz_accommodation_detail_skeleton_loader_3_Template, 1, 0, "tz-accommodation-detail-skeleton-loader", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, ctx_r2.platformService.isMobileDevice$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 4, ctx_r2.platformService.isMobileDevice$) === false);
  }
}

class AccommodationComponent extends _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_1__.BaseServiceComponent {
  constructor(accommodationsDataService, accommodationsService, activeRoute, userService, injector) {
    super(injector);
    this.accommodationsDataService = accommodationsDataService;
    this.accommodationsService = accommodationsService;
    this.activeRoute = activeRoute;
    this.userService = userService;
    this.injector = injector;
    this.accommodation = null;
    this.isHotelInCart = false;
    this.bookingOptions = [];
    this.isMobile$ = this.screenSizeDetectorService.isMobile;
    this.id = this.activeRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.loadAccommodationData();
    this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(() => {
      this.loadAccommodationData();
    });
    this.curChange = this.currencyService.selectedCurrencySubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(() => {
      this.loadAccommodationData();
    });
    this.isUserLogged = this.userService.IsLogged();
    this.getCartData();
  }

  ngOnDestroy() {
    var _a;

    (_a = this.curChange) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onCancelSelection() {
    this.loadAccommodationData();
  }

  openReviewsPopup() {
    this.dialogService.openAccommodationReviewsDialog(_components_accommodation_reviews_popup_accommodation_reviews_popup_component__WEBPACK_IMPORTED_MODULE_0__.AccommodationReviewsPopupComponent, this.accommodationReviews);
  }

  assignRoomDetails(result) {
    if (!result) {
      return result;
    }

    if (!result.rooms) {
      result.rooms = [];
    }

    const loggedInCustomer = this.userService.getCustomerInformation();
    const loggedIn = loggedInCustomer && loggedInCustomer.id;
    const cartData = this.cartService.getSelected(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__.ServiceId.ACC);
    const hotelSelected = cartData.selectedHotel && cartData.selectedHotel.id === result.giataID && cartData.bookingOptions.length > 0;
    result.rooms.forEach(room => {
      room.roomOffers = room.roomOffers.filter(offer => {
        const valid = offer.level === 0 || loggedIn && offer.level === 1 || !loggedIn && offer.level === 2;

        if (!valid && hotelSelected) {
          // check cart has selected room offer
          return cartData.bookingOptions.some(option => {
            var _a;

            return offer.id === ((_a = option.selectedRoom) === null || _a === void 0 ? void 0 : _a.roomOfferId);
          });
        }

        return valid;
      });
    });

    if (hotelSelected) {
      let roomsLeft = 0;

      for (const room of result.rooms) {
        for (const offer of room.roomOffers) {
          roomsLeft += offer.roomsLeft;
        }
      }

      const bookedRooms = cartData.bookingOptions.reduce((accumulator, option) => {
        if (_services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_4__.CartUtils.isBooked(option.status)) {
          accumulator++;
        }

        return accumulator;
      }, 0);

      if (bookedRooms > 0 && roomsLeft <= bookedRooms) {
        this.dialogService.openConfirmationDialog({
          title: this.translateService.instant('POPUPS.CONTACT_SUPPORT.TITLE'),
          multipleContent: [this.translateService.instant('POPUPS.CONTACT_SUPPORT.MESSAGE')],
          confirmBtnTitle: this.translateService.instant('POPUPS.OK')
        });
      }
    }

    return result;
  }

  loadAccommodationData() {
    this.loading = true;
    const accommodation$ = this.accommodationsService.getAccommodation(this.id);
    const accommodationReviews$ = accommodation$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)(accommodation => {
      this.accommodation = this.assignRoomDetails(accommodation);
      return this.accommodationsDataService.getAccommodationReviews(accommodation);
    }));
    accommodationReviews$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(accommodationReviews => {
      this.accommodationReviews = accommodationReviews;
      this.loading = false;
      setTimeout(() => {
        this.scrollToServiceContainer();
      }, 1);
    }, error => {
      const cartData = this.cartService.getCartData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__.ServiceId.ACC);

      if (cartData.items.length && _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_4__.CartUtils.hasBooked(cartData.items[0].selectedItem.bookingOptions)) {
        //Avoid infinite loop with acc details redirecting to acc list
        // and acc list returning to acc details when acc details are in error for whatever reason
        this.cartRouterService.goToState(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__.ServiceId.SUMMARY, undefined, false, _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.ACC_DETAILS);
      } else {
        this.cartRouterService.goToState(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__.ServiceId.ACC, undefined, false, _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.ACC_DETAILS);
      }
    });
  }

  getCartData() {
    var _a, _b;

    this.cartData = this.accommodationsDataService.getSelectedAccommodationsData();

    if ((_b = (_a = this.cartData) === null || _a === void 0 ? void 0 : _a.items) === null || _b === void 0 ? void 0 : _b.length) {
      this.bookingOptions = this.cartData.items[0].selectedItem.bookingOptions;
      this.isHotelInCart = this.id === this.cartData.items[0].selectedItem.hotelCode;
    }
  }

}

AccommodationComponent.ɵfac = function AccommodationComponent_Factory(t) {
  return new (t || AccommodationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modules_accommodations_dataservices_accommodations_data_service__WEBPACK_IMPORTED_MODULE_5__.AccommodationsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modules_accommodations_services_accommodations_service__WEBPACK_IMPORTED_MODULE_6__.AccommodationsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_16__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_7__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injector));
};

AccommodationComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: AccommodationComponent,
  selectors: [["tz-accommodation"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 5,
  consts: [[1, "accommodation-container", "flex"], ["class", "accommodations-reviews-container flex", 4, "ngIf"], ["class", "accommodation-details-container flex", 4, "ngIf"], [1, "accommodations-reviews-container", "flex"], [3, "skeletonLoading", "accommodationReviews"], [1, "accommodation-details-container", "flex"], ["class", "flex", 3, "accommodation", "cartData", "isUserLogged", "bookingOptions", "accommodationReviews", "openReviewsPopup", 4, "ngIf"], [1, "flex", 3, "accommodation", "cartData", "isUserLogged", "bookingOptions", "accommodationReviews", "openReviewsPopup"], [4, "ngIf"]],
  template: function AccommodationComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, AccommodationComponent_div_1_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, AccommodationComponent_div_3_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, AccommodationComponent_div_4_Template, 5, 6, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 3, ctx.isMobile$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.loading);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.loading);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _components_accommodation_review_list_accommodation_review_list_component__WEBPACK_IMPORTED_MODULE_8__.AccommodationReviewListComponent, _components_accommodation_details_accommodation_details_component__WEBPACK_IMPORTED_MODULE_9__.AccommodationDetailsComponent, _components_skeletons_mob_accommodation_detail_skeleton_mob_accommodation_detail_skeleton_component__WEBPACK_IMPORTED_MODULE_10__.MobAccommodationDetailSkeletonComponent, _components_skeletons_accommodation_detail_skeleton_loader_accommodation_detail_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_11__.AccommodationDetailSkeletonLoaderComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n[_nghost-%COMP%]   .accommodation-container[_ngcontent-%COMP%] {\n  padding-bottom: 1.25rem;\n  flex-direction: row;\n  flex: 1;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .accommodation-container[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n  }\n}\n[_nghost-%COMP%]   .accommodation-container[_ngcontent-%COMP%]   .accommodations-reviews-container[_ngcontent-%COMP%] {\n  width: var(--sidebar-width);\n  padding-left: 1.5625rem;\n  padding-right: 1.5625rem;\n  max-width: var(--sidebar-width);\n  margin-right: 1.375rem;\n}\n[_nghost-%COMP%]   .accommodation-container[_ngcontent-%COMP%]   .accommodation-details-container[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .sidebar-for-mobile[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxPQUFBO0FBREY7QUFHRTtFQUNFLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0FBREo7QUM0Q0k7RUQ5Q0Y7SUFNUSxpQkFBQTtFQUFSO0FBQ0Y7QUFFSTtFQUNFLDJCQUFBO0VBQ0EsdUJBQUE7RUFDQSx3QkFBQTtFQUNBLCtCQUFBO0VBQ0Esc0JBQUE7QUFBTjtBQUdJO0VBQ0UsT0FBQTtBQUROO0FBS0U7RUFDRSxrQkFBQTtBQUhKIiwiZmlsZSI6ImFjY29tbW9kYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidXRpbHMvbWl4aW5zXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleDogMTtcblxuICAuYWNjb21tb2RhdGlvbi1jb250YWluZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgZmxleDogMTtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgIC5hY2NvbW1vZGF0aW9ucy1yZXZpZXdzLWNvbnRhaW5lciB7XG4gICAgICB3aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDEuNTYyNXJlbTtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDEuNTYyNXJlbTtcbiAgICAgIG1heC13aWR0aDogdmFyKC0tc2lkZWJhci13aWR0aCk7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDEuMzc1cmVtO1xuICAgIH1cblxuICAgIC5hY2NvbW1vZGF0aW9uLWRldGFpbHMtY29udGFpbmVyIHtcbiAgICAgIGZsZXg6IDE7XG4gICAgfVxuICB9XG5cbiAgLnNpZGViYXItZm9yLW1vYmlsZSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 4704:
/*!***********************************************************************!*\
  !*** ./src/app/modules/results/accommodation/accommodation.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationModule": () => (/* binding */ AccommodationModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _accommodation_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accommodation.component */ 10689);
/* harmony import */ var _accommodation_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./accommodation-routing.module */ 97795);
/* harmony import */ var _components_accommodation_details_accommodation_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/accommodation-details/accommodation-details.component */ 37769);
/* harmony import */ var _components_accommodation_review_list_accommodation_review_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/accommodation-review-list/accommodation-review-list.component */ 82310);
/* harmony import */ var _components_accommodation_reviews_popup_accommodation_reviews_popup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/accommodation-reviews-popup/accommodation-reviews-popup.component */ 11220);
/* harmony import */ var _components_accommodation_image_accommodation_image_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/accommodation-image/accommodation-image.component */ 16037);
/* harmony import */ var _components_accommodation_gallery_accommodation_gallery_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/accommodation-gallery/accommodation-gallery.component */ 12282);
/* harmony import */ var _components_accommodation_map_accommodation_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/accommodation-map/accommodation-map.component */ 55431);
/* harmony import */ var _components_accommodation_recommended_accommodation_recommended_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/accommodation-recommended/accommodation-recommended.component */ 55944);
/* harmony import */ var _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../results-cart-item-selection.module */ 8793);
/* harmony import */ var _components_accommodation_amenities_accommodation_amenities_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/accommodation-amenities/accommodation-amenities.component */ 62469);
/* harmony import */ var _components_mob_accommodation_additional_info_mob_accommodation_additional_info_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mob-accommodation-additional-info/mob-accommodation-additional-info.component */ 66821);
/* harmony import */ var _components_mob_accommodation_amenities_mob_accommodation_amenities_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mob-accommodation-amenities/mob-accommodation-amenities.component */ 73209);
/* harmony import */ var _components_accommodation_nearby_places_accommodation_nearby_places_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/accommodation-nearby-places/accommodation-nearby-places.component */ 88985);
/* harmony import */ var _components_skeletons_accommodation_detail_skeleton_loader_accommodation_detail_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/skeletons/accommodation-detail-skeleton-loader/accommodation-detail-skeleton-loader.component */ 82125);
/* harmony import */ var _components_skeletons_accommodation_image_skeleton_loader_accommodation_image_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/skeletons/accommodation-image-skeleton-loader/accommodation-image-skeleton-loader.component */ 61507);
/* harmony import */ var _components_skeletons_acc_detail_review_skeleton_loader_acc_detail_review_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/skeletons/acc-detail-review-skeleton-loader/acc-detail-review-skeleton-loader.component */ 18507);
/* harmony import */ var _components_mob_accommodation_reviews_mob_accommodation_reviews_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/mob-accommodation-reviews/mob-accommodation-reviews.component */ 19053);
/* harmony import */ var _components_mob_accommodation_rules_mob_accommodation_rules_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/mob-accommodation-rules/mob-accommodation-rules.component */ 14630);
/* harmony import */ var _components_accommodation_rules_accommodation_rules_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/accommodation-rules/accommodation-rules.component */ 50158);
/* harmony import */ var _components_mob_accommodation_nearby_mob_accommodation_nearby_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/mob-accommodation-nearby/mob-accommodation-nearby.component */ 4572);
/* harmony import */ var _components_mob_accommodation_rooms_mob_accommodation_rooms_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/mob-accommodation-rooms/mob-accommodation-rooms.component */ 26570);
/* harmony import */ var _components_mob_accommodation_room_offer_mob_accommodation_room_offer_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/mob-accommodation-room-offer/mob-accommodation-room-offer.component */ 93330);
/* harmony import */ var _components_mob_accomodation_details_mob_accommodation_details_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/mob-accomodation-details/mob-accommodation-details.component */ 88092);
/* harmony import */ var _components_mob_accommodation_guest_info_mob_accommodation_guest_info_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/mob-accommodation-guest-info/mob-accommodation-guest-info.component */ 96908);
/* harmony import */ var _components_mob_accomodation_popular_facilities_mob_accommodation_popular_facilities_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/mob-accomodation-popular-facilities/mob-accommodation-popular-facilities.component */ 86674);
/* harmony import */ var _components_mob_accommodation_who_stays_here_mob_accommodation_who_stays_here_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./components/mob-accommodation-who-stays-here/mob-accommodation-who-stays-here.component */ 7545);
/* harmony import */ var _components_mob_accommodation_rating_mob_accommodation_rating_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/mob-accommodation-rating/mob-accommodation-rating.component */ 21688);
/* harmony import */ var _components_mob_accommodation_description_mob_accommodation_description_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./components/mob-accommodation-description/mob-accommodation-description.component */ 55576);
/* harmony import */ var _components_mob_accommodation_gallery_mob_accommodation_gallery_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./components/mob-accommodation-gallery/mob-accommodation-gallery.component */ 14821);
/* harmony import */ var _components_mob_accommodation_images_carosel_mob_accommodation_images_carosel_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/mob-accommodation-images-carosel/mob-accommodation-images-carosel.component */ 73476);
/* harmony import */ var _components_mob_modal_page_link_block_mob_modal_page_link_block_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./components/mob-modal-page-link-block/mob-modal-page-link-block.component */ 44606);
/* harmony import */ var _components_mob_accommodation_map_mob_accommodation_map_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./components/mob-accommodation-map/mob-accommodation-map.component */ 22224);
/* harmony import */ var _components_skeletons_mob_accommodation_detail_skeleton_mob_accommodation_detail_skeleton_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./components/skeletons/mob-accommodation-detail-skeleton/mob-accommodation-detail-skeleton.component */ 74953);
/* harmony import */ var _components_mob_accommodation_room_details_mob_accommodation_room_details_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./components/mob-accommodation-room-details/mob-accommodation-room-details.component */ 43789);
/* harmony import */ var _components_mob_accommodation_recommended_mob_accommodation_recommended_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./components/mob-accommodation-recommended/mob-accommodation-recommended.component */ 38540);
/* harmony import */ var _components_mob_accommodation_room_offer_cancelation_mob_accommodation_room_offer_cancelation_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./components/mob-accommodation-room-offer-cancelation/mob-accommodation-room-offer-cancelation.component */ 27696);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_stars_stars_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @shared/components/stars/stars.component */ 34922);
/* harmony import */ var _shared_directives_hotel_image_directive__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../../shared/directives/hotel-image.directive */ 4689);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _shared_components_service_booking_confirmation_component_service_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @shared/components/service-booking-confirmation-component/service-booking-confirmation.component */ 70832);
/* harmony import */ var _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @shared/components/block-separator/block-separator.component */ 183);
/* harmony import */ var _accommodations_components_selected_accommodations_selected_accommodations_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ../accommodations/components/selected-accommodations/selected-accommodations.component */ 16068);
/* harmony import */ var _components_accommodation_room_accommodation_room_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./components/accommodation-room/accommodation-room.component */ 81579);
/* harmony import */ var _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @shared/components/tz-svg-icon/tz-svg-icon.component */ 28189);
/* harmony import */ var _shared_components_mobile_mob_modal_page_link_mob_modal_page_link_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @shared/components/mobile/mob-modal-page-link/mob-modal-page-link.component */ 33602);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_rating_to_text_pipe__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../../shared/pipes/rating-to-text.pipe */ 75780);
/* harmony import */ var _shared_pipes_sort_array_pipe__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../../shared/pipes/sort-array.pipe */ 78211);
/* harmony import */ var _shared_pipes_filter_array_pipe__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../../shared/pipes/filter-array.pipe */ 98159);













// eslint-disable-next-line max-len

// eslint-disable-next-line max-len


// eslint-disable-next-line max-len

// eslint-disable-next-line max-len

// eslint-disable-next-line max-len




// eslint-disable-next-line max-len





// eslint-disable-next-line max-len

// eslint-disable-next-line max-len




// eslint-disable-next-line max-len

// eslint-disable-next-line max-len


// eslint-disable-next-line max-len



// eslint-disable-next-line max-len
















class AccommodationModule {
}
AccommodationModule.ɵfac = function AccommodationModule_Factory(t) { return new (t || AccommodationModule)(); };
AccommodationModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵdefineNgModule"]({ type: AccommodationModule });
AccommodationModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_51__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _accommodation_routing_module__WEBPACK_IMPORTED_MODULE_2__.AccommodationRoutingModule, _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_10__.ResultsCartItemSelectionModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵsetNgModuleScope"](AccommodationModule, { declarations: [_accommodation_component__WEBPACK_IMPORTED_MODULE_1__.AccommodationComponent,
        _components_accommodation_details_accommodation_details_component__WEBPACK_IMPORTED_MODULE_3__.AccommodationDetailsComponent,
        _components_accommodation_review_list_accommodation_review_list_component__WEBPACK_IMPORTED_MODULE_4__.AccommodationReviewListComponent,
        _components_accommodation_reviews_popup_accommodation_reviews_popup_component__WEBPACK_IMPORTED_MODULE_5__.AccommodationReviewsPopupComponent,
        _components_accommodation_image_accommodation_image_component__WEBPACK_IMPORTED_MODULE_6__.AccommodationImageComponent,
        _components_accommodation_gallery_accommodation_gallery_component__WEBPACK_IMPORTED_MODULE_7__.AccommodationGalleryComponent,
        _components_accommodation_map_accommodation_map_component__WEBPACK_IMPORTED_MODULE_8__.AccommodationMapComponent,
        _components_mob_accommodation_room_details_mob_accommodation_room_details_component__WEBPACK_IMPORTED_MODULE_35__.MobAccommodationRoomDetailsComponent,
        _components_accommodation_recommended_accommodation_recommended_component__WEBPACK_IMPORTED_MODULE_9__.AccommodationRecommendedComponent,
        _components_accommodation_amenities_accommodation_amenities_component__WEBPACK_IMPORTED_MODULE_11__.AccommodationAmenitiesComponent,
        _components_mob_accommodation_additional_info_mob_accommodation_additional_info_component__WEBPACK_IMPORTED_MODULE_12__.MobAccommodationAdditionalInfoComponent,
        _components_mob_accommodation_amenities_mob_accommodation_amenities_component__WEBPACK_IMPORTED_MODULE_13__.MobAccommodationAmenitiesComponent,
        _components_accommodation_nearby_places_accommodation_nearby_places_component__WEBPACK_IMPORTED_MODULE_14__.AccommodationNearbyPlacesComponent,
        _components_skeletons_accommodation_detail_skeleton_loader_accommodation_detail_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_15__.AccommodationDetailSkeletonLoaderComponent,
        _components_skeletons_accommodation_image_skeleton_loader_accommodation_image_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_16__.AccommodationImageSkeletonLoaderComponent,
        _components_skeletons_acc_detail_review_skeleton_loader_acc_detail_review_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_17__.AccDetailReviewSkeletonLoaderComponent,
        _components_mob_accommodation_reviews_mob_accommodation_reviews_component__WEBPACK_IMPORTED_MODULE_18__.MobAccommodationReviewsComponent,
        _components_accommodation_rules_accommodation_rules_component__WEBPACK_IMPORTED_MODULE_20__.AccommodationRulesComponent,
        _components_mob_accommodation_recommended_mob_accommodation_recommended_component__WEBPACK_IMPORTED_MODULE_36__.MobAccommodationRecommendedComponent,
        _components_mob_accommodation_rules_mob_accommodation_rules_component__WEBPACK_IMPORTED_MODULE_19__.MobAccommodationRulesComponent,
        _components_mob_accommodation_nearby_mob_accommodation_nearby_component__WEBPACK_IMPORTED_MODULE_21__.MobAccommodationNearbyComponent,
        _components_mob_accommodation_rooms_mob_accommodation_rooms_component__WEBPACK_IMPORTED_MODULE_22__.MobAccommodationRoomsComponent,
        _components_mob_accomodation_details_mob_accommodation_details_component__WEBPACK_IMPORTED_MODULE_24__.MobAccommodationDetailsComponent,
        _components_mob_accommodation_guest_info_mob_accommodation_guest_info_component__WEBPACK_IMPORTED_MODULE_25__.MobAccommodationGuestInfoComponent,
        _components_mob_accomodation_popular_facilities_mob_accommodation_popular_facilities_component__WEBPACK_IMPORTED_MODULE_26__.MobAccommodationPopularFacilitiesComponent,
        _components_mob_accommodation_who_stays_here_mob_accommodation_who_stays_here_component__WEBPACK_IMPORTED_MODULE_27__.MobAccommodationWhoStaysHereComponent,
        _components_mob_accommodation_rating_mob_accommodation_rating_component__WEBPACK_IMPORTED_MODULE_28__.MobAccommodationRatingComponent,
        _components_mob_accommodation_description_mob_accommodation_description_component__WEBPACK_IMPORTED_MODULE_29__.MobAccommodationDescriptionComponent,
        _components_mob_accommodation_room_offer_mob_accommodation_room_offer_component__WEBPACK_IMPORTED_MODULE_23__.MobAccommodationRoomOfferComponent,
        _components_mob_accommodation_room_offer_cancelation_mob_accommodation_room_offer_cancelation_component__WEBPACK_IMPORTED_MODULE_37__.MobAccommodationRoomOfferCancelationComponent,
        _components_mob_accommodation_gallery_mob_accommodation_gallery_component__WEBPACK_IMPORTED_MODULE_30__.MobAccommodationGalleryComponent,
        _components_mob_accommodation_images_carosel_mob_accommodation_images_carosel_component__WEBPACK_IMPORTED_MODULE_31__.MobAccommodationImagesCaroselComponent,
        _components_mob_modal_page_link_block_mob_modal_page_link_block_component__WEBPACK_IMPORTED_MODULE_32__.MobModalPageLinkBlockComponent,
        _components_mob_accommodation_map_mob_accommodation_map_component__WEBPACK_IMPORTED_MODULE_33__.MobAccommodationMapComponent,
        _components_skeletons_mob_accommodation_detail_skeleton_mob_accommodation_detail_skeleton_component__WEBPACK_IMPORTED_MODULE_34__.MobAccommodationDetailSkeletonComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_51__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule, _accommodation_routing_module__WEBPACK_IMPORTED_MODULE_2__.AccommodationRoutingModule, _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_10__.ResultsCartItemSelectionModule], exports: [_components_accommodation_details_accommodation_details_component__WEBPACK_IMPORTED_MODULE_3__.AccommodationDetailsComponent,
        _components_accommodation_review_list_accommodation_review_list_component__WEBPACK_IMPORTED_MODULE_4__.AccommodationReviewListComponent,
        _components_mob_accomodation_details_mob_accommodation_details_component__WEBPACK_IMPORTED_MODULE_24__.MobAccommodationDetailsComponent,
        _components_mob_accommodation_guest_info_mob_accommodation_guest_info_component__WEBPACK_IMPORTED_MODULE_25__.MobAccommodationGuestInfoComponent,
        _components_mob_accomodation_popular_facilities_mob_accommodation_popular_facilities_component__WEBPACK_IMPORTED_MODULE_26__.MobAccommodationPopularFacilitiesComponent,
        _components_mob_accommodation_who_stays_here_mob_accommodation_who_stays_here_component__WEBPACK_IMPORTED_MODULE_27__.MobAccommodationWhoStaysHereComponent,
        _components_mob_modal_page_link_block_mob_modal_page_link_block_component__WEBPACK_IMPORTED_MODULE_32__.MobModalPageLinkBlockComponent,
        _components_mob_accommodation_rating_mob_accommodation_rating_component__WEBPACK_IMPORTED_MODULE_28__.MobAccommodationRatingComponent,
        _components_mob_accommodation_description_mob_accommodation_description_component__WEBPACK_IMPORTED_MODULE_29__.MobAccommodationDescriptionComponent,
        _components_mob_accommodation_room_offer_mob_accommodation_room_offer_component__WEBPACK_IMPORTED_MODULE_23__.MobAccommodationRoomOfferComponent,
        _components_mob_accommodation_room_offer_cancelation_mob_accommodation_room_offer_cancelation_component__WEBPACK_IMPORTED_MODULE_37__.MobAccommodationRoomOfferCancelationComponent,
        _components_mob_accommodation_map_mob_accommodation_map_component__WEBPACK_IMPORTED_MODULE_33__.MobAccommodationMapComponent,
        _components_mob_accommodation_nearby_mob_accommodation_nearby_component__WEBPACK_IMPORTED_MODULE_21__.MobAccommodationNearbyComponent,
        _components_skeletons_accommodation_detail_skeleton_loader_accommodation_detail_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_15__.AccommodationDetailSkeletonLoaderComponent,
        _components_skeletons_mob_accommodation_detail_skeleton_mob_accommodation_detail_skeleton_component__WEBPACK_IMPORTED_MODULE_34__.MobAccommodationDetailSkeletonComponent] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_50__["ɵɵsetComponentScope"](_components_accommodation_details_accommodation_details_component__WEBPACK_IMPORTED_MODULE_3__.AccommodationDetailsComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_51__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_51__.NgIf, _shared_components_stars_stars_component__WEBPACK_IMPORTED_MODULE_38__.StarsComponent, _components_accommodation_image_accommodation_image_component__WEBPACK_IMPORTED_MODULE_6__.AccommodationImageComponent, _shared_directives_hotel_image_directive__WEBPACK_IMPORTED_MODULE_39__.HotelImageDirective, _angular_common__WEBPACK_IMPORTED_MODULE_51__.NgForOf, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_40__.TzIconComponent, _components_accommodation_recommended_accommodation_recommended_component__WEBPACK_IMPORTED_MODULE_9__.AccommodationRecommendedComponent, _shared_components_service_booking_confirmation_component_service_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_41__.ServiceBookingConfirmationComponent, _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_42__.BlockSeparatorComponent, _accommodations_components_selected_accommodations_selected_accommodations_component__WEBPACK_IMPORTED_MODULE_43__.SelectedAccommodationsComponent, _components_accommodation_room_accommodation_room_component__WEBPACK_IMPORTED_MODULE_44__.AccommodationRoomComponent, _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_45__.TzSvgIconComponent, _components_accommodation_amenities_accommodation_amenities_component__WEBPACK_IMPORTED_MODULE_11__.AccommodationAmenitiesComponent,
    _components_accommodation_map_accommodation_map_component__WEBPACK_IMPORTED_MODULE_8__.AccommodationMapComponent,
    _components_accommodation_nearby_places_accommodation_nearby_places_component__WEBPACK_IMPORTED_MODULE_14__.AccommodationNearbyPlacesComponent,
    _components_accommodation_rules_accommodation_rules_component__WEBPACK_IMPORTED_MODULE_20__.AccommodationRulesComponent,
    _components_mob_accomodation_details_mob_accommodation_details_component__WEBPACK_IMPORTED_MODULE_24__.MobAccommodationDetailsComponent,
    _components_mob_accommodation_guest_info_mob_accommodation_guest_info_component__WEBPACK_IMPORTED_MODULE_25__.MobAccommodationGuestInfoComponent,
    _components_mob_accommodation_room_details_mob_accommodation_room_details_component__WEBPACK_IMPORTED_MODULE_35__.MobAccommodationRoomDetailsComponent,
    _components_mob_accomodation_popular_facilities_mob_accommodation_popular_facilities_component__WEBPACK_IMPORTED_MODULE_26__.MobAccommodationPopularFacilitiesComponent,
    _components_mob_accommodation_who_stays_here_mob_accommodation_who_stays_here_component__WEBPACK_IMPORTED_MODULE_27__.MobAccommodationWhoStaysHereComponent,
    _components_mob_modal_page_link_block_mob_modal_page_link_block_component__WEBPACK_IMPORTED_MODULE_32__.MobModalPageLinkBlockComponent,
    _components_mob_accommodation_rating_mob_accommodation_rating_component__WEBPACK_IMPORTED_MODULE_28__.MobAccommodationRatingComponent,
    _components_mob_accommodation_description_mob_accommodation_description_component__WEBPACK_IMPORTED_MODULE_29__.MobAccommodationDescriptionComponent, _shared_components_mobile_mob_modal_page_link_mob_modal_page_link_component__WEBPACK_IMPORTED_MODULE_46__.MobModalPageLinkComponent, _components_mob_accommodation_nearby_mob_accommodation_nearby_component__WEBPACK_IMPORTED_MODULE_21__.MobAccommodationNearbyComponent], [_angular_common__WEBPACK_IMPORTED_MODULE_51__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_52__.TranslatePipe, _shared_pipes_rating_to_text_pipe__WEBPACK_IMPORTED_MODULE_47__.RatingToTextPipe, _angular_common__WEBPACK_IMPORTED_MODULE_51__.DecimalPipe, _shared_pipes_sort_array_pipe__WEBPACK_IMPORTED_MODULE_48__.SortArrayPipe, _shared_pipes_filter_array_pipe__WEBPACK_IMPORTED_MODULE_49__.FilterArrayPipe, _angular_common__WEBPACK_IMPORTED_MODULE_51__.SlicePipe]);


/***/ }),

/***/ 62469:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/accommodation-amenities/accommodation-amenities.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationAmenitiesComponent": () => (/* binding */ AccommodationAmenitiesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_sort_array_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/pipes/sort-array.pipe */ 78211);




function AccommodationAmenitiesComponent_ng_template_7_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const amenity_r3 = ctx.$implicit;
    const last_r4 = ctx.last;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("amenities-groups--amenities-item-list-item-last", last_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" \u2022 ", amenity_r3.description, " ");
} }
function AccommodationAmenitiesComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, AccommodationAmenitiesComponent_ng_template_7_div_2_Template, 2, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "sortArray");
} if (rf & 2) {
    const amenityGroup_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](amenityGroup_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](3, 2, amenityGroup_r1.amenities, "description"));
} }
const _c0 = function (a0) { return { "map-show-all": a0 }; };
class AccommodationAmenitiesComponent {
    constructor() {
        this.amenityGroups = [];
        this.showAllAmenities = false;
    }
    ngOnInit() { }
}
AccommodationAmenitiesComponent.ɵfac = function AccommodationAmenitiesComponent_Factory(t) { return new (t || AccommodationAmenitiesComponent)(); };
AccommodationAmenitiesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccommodationAmenitiesComponent, selectors: [["tz-accommodation-amenities"]], inputs: { amenityGroups: "amenityGroups" }, decls: 8, vars: 10, consts: [[1, "amenities-groups__title"], [1, "map-show-more", 3, "click"], [1, "amenities-groups__content", 3, "ngClass"], ["ngFor", "", 3, "ngForOf"], [1, "amenities-groups__amenities-item-title"], ["class", "amenities-groups__amenities-item-list-item", 3, "amenities-groups--amenities-item-list-item-last", 4, "ngFor", "ngForOf"], [1, "amenities-groups__amenities-item-list-item"]], template: function AccommodationAmenitiesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AccommodationAmenitiesComponent_Template_span_click_3_listener() { return ctx.showAllAmenities = !ctx.showAllAmenities; });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AccommodationAmenitiesComponent_ng_template_7_Template, 4, 5, "ng-template", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "HOTELS.AMENITIES"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](5, 6, "GENERAL." + (ctx.showAllAmenities ? "SHOW_LESS" : "SHOW_ALL")), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, ctx.showAllAmenities));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.amenityGroups);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _shared_pipes_sort_array_pipe__WEBPACK_IMPORTED_MODULE_0__.SortArrayPipe], styles: [".amenities-groups__title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 0.875rem;\n}\n.amenities-groups__title[_ngcontent-%COMP%]   .map-show-more[_ngcontent-%COMP%] {\n  display: none;\n}\n.amenities-groups__content[_ngcontent-%COMP%] {\n  columns: auto 3;\n}\n.amenities-groups__amenities-item-title[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n  font-weight: 500;\n  margin-bottom: 1.0625rem;\n}\n.amenities-groups__amenities-item-list-item[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-shade);\n  margin-bottom: 0.625rem;\n  font-size: 0.75rem;\n}\n.amenities-groups--amenities-item-list-item-last[_ngcontent-%COMP%] {\n  margin-bottom: 1.5625rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tYW1lbml0aWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNJO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFBUjtBQUVRO0VBQ0ksYUFBQTtBQUFaO0FBSUk7RUFDSSxlQUFBO0FBRlI7QUFLSTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3QkFBQTtBQUhSO0FBTUk7RUFDSSxvQ0FBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7QUFKUjtBQU9JO0VBQ0ksd0JBQUE7QUFMUiIsImZpbGUiOiJhY2NvbW1vZGF0aW9uLWFtZW5pdGllcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hbWVuaXRpZXMtZ3JvdXBzIHtcbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC44NzVyZW07XG5cbiAgICAgICAgLm1hcC1zaG93LW1vcmUge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICBjb2x1bW5zOiBhdXRvIDM7XG4gICAgfVxuXG4gICAgJl9fYW1lbml0aWVzLWl0ZW0tdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IC45cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjA2MjVyZW07XG4gICAgfVxuXG4gICAgJl9fYW1lbml0aWVzLWl0ZW0tbGlzdC1pdGVtIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIH1cblxuICAgICYtLWFtZW5pdGllcy1pdGVtLWxpc3QtaXRlbS1sYXN0IHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41NjI1cmVtO1xuICAgIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 37769:
/*!*******************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/accommodation-details/accommodation-details.component.ts ***!
  \*******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationDetailsComponent": () => (/* binding */ AccommodationDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/state-from.const */ 54255);
/* harmony import */ var _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/base-service-component/base-service.component */ 6371);
/* harmony import */ var _shared_components_dialogs_trazler_confirmation_dialog_trazler_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/dialogs/trazler-confirmation-dialog/trazler-confirmation-dialog.component */ 36949);
/* harmony import */ var _accommodation_terms_popup_accommodation_terms_popup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../accommodation-terms-popup/accommodation-terms-popup.component */ 7475);
/* harmony import */ var _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/pipes/date-range.pipe */ 82478);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/pipes/tz-date.pipe */ 92456);
/* harmony import */ var _shared_schemas_dialog_model__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/schemas/dialog.model */ 20383);
/* harmony import */ var _mob_accommodation_additional_info_mob_accommodation_additional_info_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mob-accommodation-additional-info/mob-accommodation-additional-info.component */ 66821);
/* harmony import */ var _mob_accommodation_amenities_mob_accommodation_amenities_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mob-accommodation-amenities/mob-accommodation-amenities.component */ 73209);
/* harmony import */ var _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/modules/cart/utils/cart.utils */ 14770);
/* harmony import */ var _mob_accommodation_rules_mob_accommodation_rules_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mob-accommodation-rules/mob-accommodation-rules.component */ 14630);
/* harmony import */ var _mob_accommodation_rooms_mob_accommodation_rooms_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mob-accommodation-rooms/mob-accommodation-rooms.component */ 26570);
/* harmony import */ var _services_modules_accommodations_utils_accommodations_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/modules/accommodations/utils/accommodations.utils */ 33241);
/* harmony import */ var _mob_accommodation_room_offer_cancelation_mob_accommodation_room_offer_cancelation_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../mob-accommodation-room-offer-cancelation/mob-accommodation-room-offer-cancelation.component */ 27696);
/* harmony import */ var _services_modules_accommodations_dataservices_accommodations_data_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/modules/accommodations/dataservices/accommodations.data.service */ 96154);
/* harmony import */ var _services_modules_accommodations_services_accommodations_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/modules/accommodations/services/accommodations.service */ 84647);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _accommodation_details_util_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../accommodation-details-util.service */ 34491);
















 // eslint-disable-next-line max-len







const _c0 = ["serviceBookingConfirmationComponentOfRooms"];

function AccommodationDetailsComponent_div_1_button_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AccommodationDetailsComponent_div_1_button_2_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r17.gotoSummary();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "HOTELS.BACK_TO_BASKET"), " ");
  }
}

function AccommodationDetailsComponent_div_1_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AccommodationDetailsComponent_div_1_button_3_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r19.onBackToResultsPage();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "HOTELS.BACK_TO_RESULTS"), " ");
  }
}

function AccommodationDetailsComponent_div_1_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AccommodationDetailsComponent_div_1_button_4_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r21.onBackToResultsPage(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "HOTELS.BACK_TO_MAP"), " ");
  }
}

function AccommodationDetailsComponent_div_1_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AccommodationDetailsComponent_div_1_button_6_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r23.onOpenReviewsPopup();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "HOTELS.REVIEWS.GUEST_REVIEW"), " ");
  }
}

function AccommodationDetailsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 14)(1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, AccommodationDetailsComponent_div_1_button_2_Template, 3, 3, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](3, AccommodationDetailsComponent_div_1_button_3_Template, 3, 3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, AccommodationDetailsComponent_div_1_button_4_Template, 3, 3, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, AccommodationDetailsComponent_div_1_button_6_Template, 3, 3, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "button", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AccommodationDetailsComponent_div_1_Template_button_click_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r25.scrollTo("ACC_DETAILS_ROOMS");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.hasBooked);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r0.hasBooked);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r0.fromHotelsMap && !ctx_r0.hasBooked);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](7, 5, ctx_r0.isMobile$));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](10, 7, "HOTELS.View_rooms"), " ");
  }
}

function AccommodationDetailsComponent_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AccommodationDetailsComponent_div_4_div_8_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r29.scrollTo("ACC_DETAILS_MAP", ctx_r29.fromMyTrips ? 20 : 78);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", ctx_r27.accommodation.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("\u00A0\u2014\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 2, "GENERAL.SHOW_ON_MAP"), "");
  }
}

function AccommodationDetailsComponent_div_4_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 39)(1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](2, "tz-icon", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const amenity_r31 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("icon", amenity_r31.icon);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵattribute"]("data-test", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 3, "hotel-room-convenience-" + amenity_r31.description));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 5, "HOTELS.ICONS." + amenity_r31.description), " ");
  }
}

function AccommodationDetailsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 23)(1, "div", 24)(2, "div")(3, "div", 25)(4, "h3", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](6, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](7, "tz-stars", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](8, AccommodationDetailsComponent_div_4_div_8_Template, 5, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](9, "div", 30)(10, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](13, "ratingToText");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AccommodationDetailsComponent_div_4_Template_div_click_14_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r32.scrollTo("ACC_DETAILS_RATINGS", ctx_r32.fromMyTrips ? 31 : 78);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](16, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](17, "tz-accommodation-image", 33)(18, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](19, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, AccommodationDetailsComponent_div_4_div_20_Template, 7, 7, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](21, "sortArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](ctx_r1.accommodation.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("starWidth", 12)("starHeight", 12)("starCount", ctx_r1.accommodation.star);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r1.accommodation.address !== "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 14, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](13, 16, ctx_r1.accommodation.ratings.overAllRatingsFloat)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](16, 18, ctx_r1.accommodation.ratings.overAllRatingsFloat, "1.1-1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("code", ctx_r1.accommodation.code)("giataId", ctx_r1.accommodation.giataID)("imageProvider", ctx_r1.accommodation.imageProvider)("hotelName", ctx_r1.accommodation.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("tzHotelImage", ctx_r1.accommodation.imageUrl)("provider", ctx_r1.accommodation.imageProvider);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](21, 21, ctx_r1.accommodation.amenities, "ordinal"));
  }
}

function AccommodationDetailsComponent_div_6_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1, "...");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }
}

function AccommodationDetailsComponent_div_6_span_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AccommodationDetailsComponent_div_6_span_7_Template_span_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r41.onToggleDescriptionText();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "HOTELS." + (ctx_r35.showFullDescription ? "READ_LESS" : "READ_MORE")), " ");
  }
}

function AccommodationDetailsComponent_div_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const roomDetail_r43 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "HOTELS.OLERY." + roomDetail_r43.name.toLowerCase()), " ");
  }
}

function AccommodationDetailsComponent_div_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const roomDetail_r44 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "HOTELS.OLERY." + roomDetail_r44.name.toLowerCase()), " ");
  }
}

function AccommodationDetailsComponent_div_6_div_13_li_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "li", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const hotelFacilitie_r46 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" \u2022 ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "HOTELS.OLERY." + hotelFacilitie_r46.title.toLowerCase()), " ");
  }
}

function AccommodationDetailsComponent_div_6_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 56)(1, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "ul", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, AccommodationDetailsComponent_div_6_div_13_li_5_Template, 3, 3, "li", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 2, "HOTELS.REVIEWS.GUESTS_LIKED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind3"](6, 4, ctx_r38.accommodation.hotelFacilities, 0, 6));
  }
}

function AccommodationDetailsComponent_div_6_div_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const roomDetail_r47 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "HOTELS.OLERY." + roomDetail_r47.name.toLowerCase()), " ");
  }
}

function AccommodationDetailsComponent_div_6_div_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const roomDetail_r48 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 1, "HOTELS.OLERY." + roomDetail_r48.name.toLowerCase()), " ");
  }
}

const _c1 = function () {
  return {
    sentiment: "positive"
  };
};

const _c2 = function () {
  return {
    sentiment: "negative"
  };
};

function AccommodationDetailsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 42)(1, "div", 43)(2, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3, "Description");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, AccommodationDetailsComponent_div_6_span_6_Template, 2, 0, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, AccommodationDetailsComponent_div_6_span_7_Template, 3, 3, "span", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](8, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, AccommodationDetailsComponent_div_6_div_9_Template, 3, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](10, "filterArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, AccommodationDetailsComponent_div_6_div_11_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "filterArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, AccommodationDetailsComponent_div_6_div_13_Template, 7, 8, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](14, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](15, AccommodationDetailsComponent_div_6_div_15_Template, 3, 3, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](16, "filterArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](17, AccommodationDetailsComponent_div_6_div_17_Template, 3, 3, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "filterArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("innerHTML", ctx_r2.accommodation.description.substring(0, ctx_r2.showFullDescription ? ctx_r2.accommodation.description.length : ctx_r2.descriptionMinLength), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r2.showFullDescription && ctx_r2.accommodation.description.length > ctx_r2.descriptionMinLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.accommodation.description.length > ctx_r2.descriptionMinLength);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](10, 8, ctx_r2.accommodation.roomDetails.summary, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](20, _c1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](12, 11, ctx_r2.accommodation.roomDetails.summary, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](21, _c2)));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r2.accommodation.hotelFacilities);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](16, 14, ctx_r2.accommodation.roomDetails.summary, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](22, _c1)));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](18, 17, ctx_r2.accommodation.roomDetails.summary, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](23, _c2)));
  }
}

function AccommodationDetailsComponent_div_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 64)(1, "tz-accommodation-recommended", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("recommendedSelected", function AccommodationDetailsComponent_div_9_div_1_Template_tz_accommodation_recommended_recommendedSelected_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r51.onRecommendedSelected($event);
    })("openTermsModal", function AccommodationDetailsComponent_div_9_div_1_Template_tz_accommodation_recommended_openTermsModal_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r52);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r53.openTermsModal($event);
    })("scrollTo", function AccommodationDetailsComponent_div_9_div_1_Template_tz_accommodation_recommended_scrollTo_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r52);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r54.scrollTo($event, 76);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("accommodation", ctx_r49.accommodation)("selectRecommended", ctx_r49.recommendedSelected);
  }
}

function AccommodationDetailsComponent_div_9_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r56 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 66)(1, "tz-service-booking-confirmation", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("cancelSelection", function AccommodationDetailsComponent_div_9_div_2_Template_tz_service_booking_confirmation_cancelSelection_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56);
      const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r55.onRecommendedSelected(false);
    })("submitBooking", function AccommodationDetailsComponent_div_9_div_2_Template_tz_service_booking_confirmation_submitBooking_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r56);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r57.onSelectRecommendedOffers();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}

function AccommodationDetailsComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, AccommodationDetailsComponent_div_9_div_1_Template, 2, 2, "div", 62);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, AccommodationDetailsComponent_div_9_div_2_Template, 2, 0, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r3.accommodation.numberOfRooms > 1 && !ctx_r3.hasBooked && !ctx_r3.cartData);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r3.recommendedSelected);
  }
}

function AccommodationDetailsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 68)(1, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 1, "HOTELS.ROOMS"));
  }
}

function AccommodationDetailsComponent_div_13_tz_selected_accommodations_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r61 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "tz-selected-accommodations", 71);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("cancel", function AccommodationDetailsComponent_div_13_tz_selected_accommodations_1_Template_tz_selected_accommodations_cancel_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r61);
      const ctx_r60 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r60.cancel.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("accommodationCartData", ctx_r58.myTripCartData.cartData)("paymentCaptureMode", ctx_r58.myTripCartData.paymentCaptureMode)("fromBookings", true)("detailPage", true);
  }
}

function AccommodationDetailsComponent_div_13_div_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r67 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 75, 76)(2, "tz-service-booking-confirmation", 67);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("cancelSelection", function AccommodationDetailsComponent_div_13_div_2_div_2_Template_tz_service_booking_confirmation_cancelSelection_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r67);
      const ctx_r66 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return ctx_r66.onCancelSelection();
    })("submitBooking", function AccommodationDetailsComponent_div_13_div_2_div_2_Template_tz_service_booking_confirmation_submitBooking_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r67);
      const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](3);
      return ctx_r68.onAccommodationAddItemToCart();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }
}

const _c3 = function () {
  return [];
};

function AccommodationDetailsComponent_div_13_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 72)(1, "tz-accommodation-room", 73);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("roomCountChanged", function AccommodationDetailsComponent_div_13_div_2_Template_tz_accommodation_room_roomCountChanged_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r70);
      const i_r63 = restoredCtx.index;
      const ctx_r69 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r69.onRoomCountChanged($event, i_r63);
    })("roomMaxSelectedCountReached", function AccommodationDetailsComponent_div_13_div_2_Template_tz_accommodation_room_roomMaxSelectedCountReached_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r70);
      const ctx_r71 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r71.onRoomMaximumAllowedQuantityReached();
    })("openTermsModal", function AccommodationDetailsComponent_div_13_div_2_Template_tz_accommodation_room_openTermsModal_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r70);
      const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r72.openTermsModal($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, AccommodationDetailsComponent_div_13_div_2_div_2_Template, 3, 0, "div", 74);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const room_r62 = ctx.$implicit;
    const i_r63 = ctx.index;
    const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("id", room_r62.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("roomsLeftForSelection", ctx_r59.roomsLeftForSelection)("room", room_r62)("isUserLogged", ctx_r59.isUserLogged)("ratings", ctx_r59.accommodation.ratings)("numberOfNights", ctx_r59.accommodation.numberOfNights)("roomBookings", ctx_r59.cartRooms[room_r62.id] ? ctx_r59.cartRooms[room_r62.id] : _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](8, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r59.confirmableRoom === i_r63);
  }
}

function AccommodationDetailsComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, AccommodationDetailsComponent_div_13_tz_selected_accommodations_1_Template, 1, 4, "tz-selected-accommodations", 69);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, AccommodationDetailsComponent_div_13_div_2_Template, 3, 9, "div", 70);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r5.fromMyTrips && ctx_r5.myTripCartData);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r5.accommodation.rooms);
  }
}

function AccommodationDetailsComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 77)(1, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 1, "HOTELS.ABOUT"));
  }
}

const _c4 = function (a0) {
  return {
    reviewsCount: a0
  };
};

function AccommodationDetailsComponent_div_16_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r73 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](2, 1, "HOTELS.REVIEWS.REVIEW_BASED_ON", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction1"](4, _c4, ctx_r73.accommodation.ratings.overAllReviewCount)), " ");
  }
}

function AccommodationDetailsComponent_div_16_div_10_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 88);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](2, "div", 89);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "div", 90);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const review_r78 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵclassMap"]("visitors-per-country__flag fflag ff-sm fflag-" + review_r78.countryCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("\u00A0\u2022\u00A0", review_r78.countryName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"]("\u00A0\u2022\u00A0", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 4, review_r78.percentage), "%");
  }
}

const _c5 = function () {
  return {
    "width.px": 15
  };
};

function AccommodationDetailsComponent_div_16_div_10_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 91);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "tz-svg-icon", 92);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction0"](4, _c5));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 2, "HOTELS.NO_GUEST_REVIEW"), " ");
  }
}

function AccommodationDetailsComponent_div_16_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 84)(1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, AccommodationDetailsComponent_div_16_div_10_div_4_Template, 7, 6, "div", 86);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](5, AccommodationDetailsComponent_div_16_div_10_div_5_Template, 4, 5, "div", 87);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r74 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 3, "HOTELS.STAYS_HERE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r74.accommodationReviews.visitorsPerCountry == null ? null : ctx_r74.accommodationReviews.visitorsPerCountry.slice(0, 5));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", (ctx_r74.accommodationReviews.visitorsPerCountry == null ? null : ctx_r74.accommodationReviews.visitorsPerCountry.length) === 0);
  }
}

function AccommodationDetailsComponent_div_16_div_12_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 95)(1, "span", 96);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const categoryRating_r80 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵstyleProp"]("width", categoryRating_r80.rating * 10 + "%");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](3, 4, categoryRating_r80.ratingStr, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 7, "HOTELS.OLERY.RATING." + categoryRating_r80.category));
  }
}

function AccommodationDetailsComponent_div_16_div_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 93)(1, "div", 85);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](6, "ratingToText");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](7, AccommodationDetailsComponent_div_16_div_12_div_7_Template, 7, 9, "div", 94);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r75 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 4, "HOTELS.REVIEWS.RATING"), " ", ctx_r75.accommodation.ratings.overAllRatingsFloat !== 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](4, 6, ctx_r75.accommodation.ratings.overAllRatingsFloat, "1.1-1") : "", " ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 9, _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](6, 11, ctx_r75.accommodation.ratings.overAllRatingsFloat)), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r75.accommodation.ratings.categoryRatings);
  }
}

function AccommodationDetailsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 78)(1, "div", 79)(2, "div", 80);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](5, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, AccommodationDetailsComponent_div_16_span_6_Template, 3, 6, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](7, "div", 81);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](9, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](10, AccommodationDetailsComponent_div_16_div_10_Template, 6, 5, "div", 82);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](11, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](12, AccommodationDetailsComponent_div_16_div_12_Template, 8, 13, "div", 83);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](13, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](4, 6, "HOTELS.POPULAR_WITH_GUESTS_FROM"), " ", ctx_r7.accommodation.city, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r7.accommodation.ratings.overAllReviewCount > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind2"](9, 8, ctx_r7.accommodation.ratings.overAllRatingsFloat, "1.1-1"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](11, 11, ctx_r7.platformService.isMobileDevice$) === false && ctx_r7.accommodationReviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](13, 13, ctx_r7.platformService.isMobileDevice$) === false);
  }
}

function AccommodationDetailsComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 97);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "tz-accommodation-amenities", 98);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("amenityGroups", ctx_r8.accommodation.amenityGroups);
  }
}

function AccommodationDetailsComponent_div_20_tz_accommodation_nearby_places_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "tz-accommodation-nearby-places", 102);
  }

  if (rf & 2) {
    const ctx_r81 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("accommodationReviews", ctx_r81.accommodationReviews);
  }
}

function AccommodationDetailsComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 99);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](1, "tz-accommodation-map", 100);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](2, AccommodationDetailsComponent_div_20_tz_accommodation_nearby_places_2_Template, 1, 1, "tz-accommodation-nearby-places", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("accommodation", ctx_r9.accommodation)("searchInfo", ctx_r9.fromMyTrips && ctx_r9.myTripCartData ? ctx_r9.myTripCartData.cartData.items[0].searchReq.searchData : undefined);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r9.accommodationReviews);
  }
}

function AccommodationDetailsComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 103)(1, "div", 104);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](4, "tz-accommodation-rules", 105);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 5, "HOTELS.RULES.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("hotelName", ctx_r10.accommodation.name)("checkIn", ctx_r10.accommodation.checkIn)("checkOut", ctx_r10.accommodation.checkOut)("hotelRules", ctx_r10.accommodation.hotelRules);
  }
}

function AccommodationDetailsComponent_div_24_ng_container_4_p_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const facilities_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", facilities_r83.description, " ");
  }
}

function AccommodationDetailsComponent_div_24_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, AccommodationDetailsComponent_div_24_ng_container_4_p_1_Template, 2, 1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const facilities_r83 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", facilities_r83.code !== "105");
  }
}

function AccommodationDetailsComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 106)(1, "div", 107);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, AccommodationDetailsComponent_div_24_ng_container_4_Template, 2, 1, "ng-container", 108);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 2, "HOTELS.ADDITIONAL_INFO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngForOf", ctx_r11.accommodation.facilities);
  }
}

function AccommodationDetailsComponent_ng_container_26_tz_mob_accommodation_nearby_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](0, "tz-mob-accommodation-nearby", 102);
  }

  if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("accommodationReviews", ctx_r86.accommodationReviews);
  }
}

function AccommodationDetailsComponent_ng_container_26_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r90 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div")(1, "tz-mob-modal-page-link", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("clicked", function AccommodationDetailsComponent_ng_container_26_div_19_Template_tz_mob_modal_page_link_clicked_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r90);
      const ctx_r89 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r89.showAdditionalInfo();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 1, "HOTELS.ADDITIONAL_INFO"), " ");
  }
}

function AccommodationDetailsComponent_ng_container_26_div_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 118)(1, "div", 119);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("click", function AccommodationDetailsComponent_ng_container_26_div_20_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r92);
      const ctx_r91 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"](2);
      return ctx_r91.showRoomsMob();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 1, "HOTELS.View_rooms"), " ");
  }
}

function AccommodationDetailsComponent_ng_container_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](1, "div", 109)(2, "tz-mob-accommodation-details", 110);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("showRooms", function AccommodationDetailsComponent_ng_container_26_Template_tz_mob_accommodation_details_showRooms_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r94);
      const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r93.showRoomsMob();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](3, "tz-mob-accommodation-guest-info", 111)(4, "tz-mob-accommodation-room-details", 112)(5, "tz-mob-accommodation-popular-facilities", 111)(6, "tz-mob-accommodation-who-stays-here", 102)(7, "tz-mob-modal-page-link-block", 113)(8, "tz-mob-accommodation-rating", 111)(9, "tz-mob-accommodation-description", 111);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](10, "div", 114)(11, "tz-mob-modal-page-link", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("clicked", function AccommodationDetailsComponent_ng_container_26_Template_tz_mob_modal_page_link_clicked_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r94);
      const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r95.showAmenities();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](14, AccommodationDetailsComponent_ng_container_26_tz_mob_accommodation_nearby_14_Template, 1, 1, "tz-mob-accommodation-nearby", 101);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](15, "div", 116)(16, "tz-mob-modal-page-link", 115);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵlistener"]("clicked", function AccommodationDetailsComponent_ng_container_26_Template_tz_mob_modal_page_link_clicked_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵrestoreView"](_r94);
      const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
      return ctx_r96.showRulesMob();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](19, AccommodationDetailsComponent_ng_container_26_div_19_Template, 4, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, AccommodationDetailsComponent_ng_container_26_div_20_Template, 4, 3, "div", 117);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("accommodation", ctx_r12.accommodation)("accommodationReviews", ctx_r12.accommodationReviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("accommodation", ctx_r12.accommodation);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("roomDetails", ctx_r12.accommodation.roomDetails.summary);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("accommodation", ctx_r12.accommodation);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("accommodationReviews", ctx_r12.accommodationReviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("accommodation", ctx_r12.accommodation)("accommodationReviews", ctx_r12.accommodationReviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("accommodation", ctx_r12.accommodation);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("accommodation", ctx_r12.accommodation);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](13, 15, "HOTELS.AMENITIES"));
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r12.accommodationReviews);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](18, 17, "HOTELS.RULES.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", ctx_r12.accommodation.facilities && ctx_r12.accommodation.facilities.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx_r12.fromMyTrips);
  }
}

const _c6 = function (a0, a1) {
  return {
    "from-tz-map": a0,
    "tz-booking-hotel": a1
  };
};

class AccommodationDetailsComponent extends _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_2__.BaseServiceComponent {
  constructor(injector, accommodationsDataService, accommodationsService, userService, accommodationDetailsUtilService) {
    super(injector);
    this.accommodationsDataService = accommodationsDataService;
    this.accommodationsService = accommodationsService;
    this.userService = userService;
    this.accommodationDetailsUtilService = accommodationDetailsUtilService;
    this.bookingOptions = [];
    this.fromTzMap = false;
    this.fromMyTrips = false;
    this.selectedRoom = new _angular_core__WEBPACK_IMPORTED_MODULE_19__.EventEmitter();
    this.cancelSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_19__.EventEmitter();
    this.openReviewsPopup = new _angular_core__WEBPACK_IMPORTED_MODULE_19__.EventEmitter();
    this.cancel = new _angular_core__WEBPACK_IMPORTED_MODULE_19__.EventEmitter();
    this.maxRoomQuantity = 4;
    this.cartRooms = [];
    this.selectedRooms = {};
    this.confirmableRoom = null;
    this.descriptionMinLength = 620;
    this.descriptionMaxLimit = 700;
    this.showFullDescription = false;
    this.roomsLeftForSelection = this.maxRoomQuantity;
    this.recommendedSelected = false;
    this.fromHotelsMap = false;
    this.hasBooked = false;
    this.cartRoomCount = 0;
    this.isNextSummary = this.nextIsSummary();
  }

  ngOnInit() {
    this.isMobile$ = this.screenSizeDetectorService.isMobile;
    this.getCartRooms();
    this.accommodationsService.updateAccInfoToList(this.accommodation);
    const mapHotel = this.accommodationsService.getMapHotel();
    this.fromHotelsMap = mapHotel !== undefined;
    this.checkRoomsSold();
    this.hasBooked = _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_10__.CartUtils.hasBooked(this.bookingOptions);
    this.handleExtraParams();
    const descLen = this.accommodation.description.length;
    this.showFullDescription = descLen <= this.descriptionMaxLimit;
    console.log('Hotel description length: ', descLen);
  }

  ngAfterViewInit() {
    this.scrollToConfirmationBlock();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onBackToResultsPage(backToMap) {
    if (!backToMap) {
      this.accommodationsService.setMapHotel(undefined);
    }

    this.cartRouterService.goToState(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.ACC, undefined, false, _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_1__.StateFrom.ACC_DETAILS);
  }

  gotoSummary() {
    this.cartRouterService.moveToSummary();
  }

  onToggleDescriptionText() {
    this.showFullDescription = !this.showFullDescription;
  }

  onCancelSelection() {
    /// temporary solution
    this.accommodation.rooms = JSON.parse(JSON.stringify([...this.accommodation.rooms]));
    this.confirmableRoom = null;
    this.clearSelectedRooms();
    this.getCartRooms();
    this.cancelSelection.emit();
  }

  onOpenReviewsPopup() {
    this.openReviewsPopup.emit();
  }

  onRoomCountChanged($event, index) {
    this.selectedRooms[index] = $event;
    this.recommendedSelected = false;
    const roomsQuantity = _services_modules_accommodations_utils_accommodations_utils__WEBPACK_IMPORTED_MODULE_13__.AccommodationsUtilsService.getSelectedRoomQuantity(this.accommodation.rooms);
    this.roomsLeftForSelection = this.maxRoomQuantity - roomsQuantity;
    this.confirmableRoom = null;

    if ($event !== 0) {
      this.confirmableRoom = index;
    } else if (roomsQuantity > 0) {
      for (const pair in this.selectedRooms) {
        if (this.selectedRooms[pair] !== 0) {
          this.confirmableRoom = +pair;
        }
      }
    }

    if (roomsQuantity === 0 && this.cartRoomCount > 0) {
      this.confirmableRoom = index;
    }

    this.scrollToConfirmationBlock();
  }

  onAccommodationAddItemToCart() {
    if (this.cartRoomCount > 0 && this.roomsLeftForSelection === this.maxRoomQuantity) {
      this.removeService(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.ACC).then(isRemoved => {
        console.log('remove success');
      }, error => {
        console.error(error);
      });
      return;
    }

    if (this.accommodation.broker === 'Hotelbeds') {
      const rateComments = [];
      this.accommodation.rooms.forEach(room => {
        if (room.roomOffers) {
          room.roomOffers.forEach(offer => {
            if (offer.personCount > 0 && offer.rateComments !== '') {
              const rateComment = {
                roomName: `${room.displayName.toUpperCase()} ${offer.personCount > 1 ? 'x ' + offer.personCount : ''} (${offer.meal.toUpperCase()})`,
                comment: offer.rateComments
              };
              let avail = false;
              rateComments.forEach(rc => {
                if (rc.comment === rateComment.comment) {
                  rc.roomName = rc.roomName + ', ' + rateComment.roomName;
                  avail = true;
                }
              });

              if (!avail) {
                rateComments.push(rateComment);
              }
            }
          });
        }
      });

      if (rateComments.length) {
        this.dialogService.openConfirmationDialog({
          confirmBtnTitle: this.translateService.instant('POPUPS.CONTINUE'),
          cancelBtnTitle: this.translateService.instant('POPUPS.CANCEL'),
          title: this.translateService.instant('POPUPS.RATE_COMMENTS.TITLE'),
          multipleContent: [
          /*Dummy anchor tag needed avoid the popup content scrolling to the first anchor in the rate comment*/
          `<b>${rateComments[0].roomName}</b><a href=''></a>`, rateComments[0].comment],
          containerClass: 'tz-hb-rate-comment'
        }, {
          mainDialogSize: _shared_schemas_dialog_model__WEBPACK_IMPORTED_MODULE_7__.MainDialogSize.LARGE,
          dialogPanelClasses: ['tz-rate-comment-dialog']
        }).afterClosed().subscribe(dialogReturn => {
          if (dialogReturn === _shared_components_dialogs_trazler_confirmation_dialog_trazler_confirmation_dialog_component__WEBPACK_IMPORTED_MODULE_3__.CONFIRM) {
            this.addItem();
          }
        });
      }
    } else {
      this.addItem();
    }
  }

  addItemToCart() {}

  onRoomMaximumAllowedQuantityReached() {
    this.dialogService.openSnackBar({
      message: this.translateService.instant('NOTIFS.SELECTION_COUNT_RESTRICTION', {
        count: this.maxRoomQuantity
      })
    });
  }

  onRecommendedSelected(selected) {
    this.recommendedSelected = selected;

    if (selected) {
      this.onCancelSelection();
    }
  }

  onSelectRecommendedOffers() {
    const recommendedRooms = {};
    let roomLeftToFind = this.accommodation.numberOfRooms;
    let recOffers = this.accommodation.recommendedRooms;

    if (this.userService.IsLogged() && this.accommodation.recOffersLoggedIn) {
      recOffers = this.accommodation.recRoomsLoggedIn;
    }

    recOffers.forEach(r => {
      recommendedRooms[r.offerId] = r.allotment;
    });
    this.accommodation.rooms.some(room => {
      room.roomOffers.some(offer => {
        if (recommendedRooms.hasOwnProperty(offer.id)) {
          const allotment = recommendedRooms[offer.id];
          offer.personCount = allotment;
          roomLeftToFind--;
        }

        return roomLeftToFind === 0;
      });
      return roomLeftToFind === 0;
    });
    this.onAccommodationAddItemToCart();
  }

  openTermsModal(roomOption) {
    const data = {
      roomCancellation: roomOption.roomCancellation,
      hasPromotions: roomOption.hasPromotions,
      discounts: roomOption.discounts,
      remarks: roomOption.remarks,
      isPayOnArrival: roomOption.payAt === 'Pay on arrival',
      checkInDateTime: this.accommodation.checkIn
    };

    if (this.platformService.isMobile) {
      this.modalService.createMainModal(_mob_accommodation_room_offer_cancelation_mob_accommodation_room_offer_cancelation_component__WEBPACK_IMPORTED_MODULE_14__.MobAccommodationRoomOfferCancelationComponent, {
        title: 'HOTELS.TERMS_CONDITIONS',
        cssClass: 'mob-terms-modal',
        data: Object.assign({}, data)
      });
    } else {
      this.dialogService.openMainDialog({
        component: _accommodation_terms_popup_accommodation_terms_popup_component__WEBPACK_IMPORTED_MODULE_4__.AccommodationTermsPopupComponent,
        showCloseBtn: true,
        title: 'HOTELS.TERMS_CONDITIONS',
        data: Object.assign({}, data)
      });
    }
  }

  showRulesMob() {
    this.modalService.createDetailsPage(_mob_accommodation_rules_mob_accommodation_rules_component__WEBPACK_IMPORTED_MODULE_11__.MobAccommodationRulesComponent, {
      data: {
        accommodation: {
          hotelRules: this.accommodation.hotelRules,
          name: this.accommodation.name,
          checkIn: this.accommodation.checkIn,
          checkOut: this.accommodation.checkOut
        }
      },
      title: 'HOTELS.RULES.TITLE'
    });
  }

  showRoomsMob() {
    this.accommodationDetailsUtilService.selectRecommended = false;
    const openTermsModal$ = new rxjs__WEBPACK_IMPORTED_MODULE_20__.Subject();
    openTermsModal$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_21__.takeUntil)(this.destroy$)).subscribe(roomOption => {
      this.openTermsModal(roomOption);
    });
    this.modalService.createDetailsPage(_mob_accommodation_rooms_mob_accommodation_rooms_component__WEBPACK_IMPORTED_MODULE_12__.MobAccommodationRoomsComponent, {
      data: {
        accommodation: this.accommodation,
        roomsLeftForSelection: this.roomsLeftForSelection,
        isUserLogged: this.isUserLogged,
        ratings: this.accommodation.ratings,
        numberOfNights: this.accommodation.numberOfNights,
        openTermsModal$
      },
      title: 'HOTELS.ROOMS'
    }).then(modal => {
      if (modal.data) {
        setTimeout(() => {
          this.onAccommodationAddItemToCart();
        }, 0);
      }
    });
  }

  showAdditionalInfo() {
    this.modalService.createDetailsPage(_mob_accommodation_additional_info_mob_accommodation_additional_info_component__WEBPACK_IMPORTED_MODULE_8__.MobAccommodationAdditionalInfoComponent, {
      data: {
        accommodationAdditionalInfo: this.accommodation.facilities
      },
      title: 'HOTELS.ADDITIONAL_INFO'
    });
  }

  showAmenities() {
    this.modalService.createDetailsPage(_mob_accommodation_amenities_mob_accommodation_amenities_component__WEBPACK_IMPORTED_MODULE_9__.MobAccommodationAmenitiesComponent, {
      data: this.accommodation.amenityGroups,
      title: 'HOTELS.AMENITIES'
    });
  }

  getCartRooms() {
    this.cartRooms = {};
    const selectedRooms = {};
    let cartRoomCount = 0;

    for (const option of this.bookingOptions) {
      if (!option.selectedRoom || _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_10__.CartUtils.isFailed(option.status)) {
        continue;
      }

      const roomId = option.selectedRoom.roomId;

      if (!this.cartRooms[roomId]) {
        this.cartRooms[roomId] = [];
      }

      this.cartRooms[roomId].push(option);
      selectedRooms[roomId] = selectedRooms[roomId] ? selectedRooms[roomId] + 1 : 1;
      cartRoomCount++; // this.confirmableRoom = this.accommodation.rooms.findIndex((room: Room) => roomId === room.id);
    }

    if (cartRoomCount > 0) {
      let offersPresent = 0;

      for (const [i, room] of this.accommodation.rooms.entries()) {
        if (selectedRooms[room.id]) {
          this.selectedRooms[i] = selectedRooms[room.id];
          offersPresent += selectedRooms[room.id];
        }
      }

      if (offersPresent > 0) {
        this.roomsLeftForSelection = this.maxRoomQuantity - offersPresent;
        this.cartRoomCount = offersPresent;
      }
    }
  }

  addItem() {
    this.accommodationsDataService.addAccommodationToCart(this.accommodation).subscribe(response => {
      this.confirmableRoom = null;
      this.accommodationsService.setMapHotel(undefined);
      this.userSearchService.searchCheckDep(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.ACC, this.isNextSummary, false, false, true);
    }, error => {
      /* if (failure.status === 406) { // Rate recheck
      alertBox.prompt("Room price has been changed. Please select rooms again!");
      $scope.roomDetails = {};
      } else if (failure.status === 304) {
      // user cancel action
      return
      } else if (failure.status !== 410) {
      if (failure.data) {
      alertBox.prompt(failure.data.message)
      } else {
      alertBox.prompt(failure.error)
      }
      }
      trazlerAPI.HdlHTTPError(failure, $scope.updateAccommodationScreen);*/
    });
  }

  nextIsSummary() {
    var _a, _b;

    const state = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state;
    const from = state ? state['from'] : '';
    return from === _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_1__.StateFrom.SUMMARY || from === _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_1__.StateFrom.TAB;
  }

  clearSelectedRooms() {
    for (const room of this.accommodation.rooms) {
      room.roomOffers = room.roomOffers.map(roomOffer => Object.assign(Object.assign({}, roomOffer), {
        count: 0
      }));
    }

    this.roomsLeftForSelection = this.maxRoomQuantity;
  }

  scrollToConfirmationBlock() {
    requestAnimationFrame(() => {
      this.scrollToElement(this.serviceBookingConfirmationComponentOfRooms, {
        block: 'end'
      });
    });
  }

  checkRoomsSold() {
    if (!this.accommodation.noRoom || this.fromTzMap) {
      return;
    }

    if (this.fromHotelsMap) {
      this.dialogService.openConfirmationDialog({
        title: this.translateService.instant('POPUPS.HOTEL_SOLD_OUT.TITLE'),
        multipleContent: [this.translateService.instant('POPUPS.HOTEL_SOLD_OUT.MESSAGE')],
        confirmBtnTitle: this.translateService.instant('POPUPS.HOTEL_SOLD_OUT.CONTINUE'),
        cancelBtnTitle: this.translateService.instant('POPUPS.HOTEL_SOLD_OUT.BACK'),
        icon: {
          name: 'no-hotel-dialog',
          iconStyle: {
            'width.px': 105.89,
            'height.px': 96.4
          }
        }
      }).afterClosed().subscribe(confirm => {
        if (confirm) {
          return;
        }

        this.onBackToResultsPage();
        return;
      });
    } else {
      this.dialogService.openSnackBar({
        message: this.translateService.instant('NOTIFS.ACC_NOT_AVAILABLE')
      });
    }
  }

  handleExtraParams() {
    if (this.platformService.isMobileDevice) {
      const state = history.state;
      console.log('state');
      console.log(state);

      if (state && state.extra) {
        for (const extraAction in state.extra) {
          if (state.extra.hasOwnProperty(extraAction)) {
            switch (extraAction) {
              case 'changeTickets':
              case 'changeRoom':
                this.showRoomsMob();
                break;
            }
          }
        }
      }
    }
  }

}

AccommodationDetailsComponent.ɵfac = function AccommodationDetailsComponent_Factory(t) {
  return new (t || AccommodationDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_modules_accommodations_dataservices_accommodations_data_service__WEBPACK_IMPORTED_MODULE_15__.AccommodationsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_modules_accommodations_services_accommodations_service__WEBPACK_IMPORTED_MODULE_16__.AccommodationsService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_17__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdirectiveInject"](_accommodation_details_util_service__WEBPACK_IMPORTED_MODULE_18__.AccommodationDetailsUtilService));
};

AccommodationDetailsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineComponent"]({
  type: AccommodationDetailsComponent,
  selectors: [["tz-accommodation-details"]],
  viewQuery: function AccommodationDetailsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵloadQuery"]()) && (ctx.serviceBookingConfirmationComponentOfRooms = _t.first);
    }
  },
  inputs: {
    accommodation: "accommodation",
    cartData: "cartData",
    accommodationReviews: "accommodationReviews",
    bookingOptions: "bookingOptions",
    isUserLogged: "isUserLogged",
    fromTzMap: "fromTzMap",
    fromMyTrips: "fromMyTrips",
    myTripCartData: "myTripCartData"
  },
  outputs: {
    selectedRoom: "selectedRoom",
    cancelSelection: "cancelSelection",
    openReviewsPopup: "openReviewsPopup",
    cancel: "cancel"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵProvidersFeature"]([_shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_5__.DateRangePipe, _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_6__.TzDatePipe]), _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵInheritDefinitionFeature"]],
  decls: 28,
  vars: 43,
  consts: [[1, "accommodation-details", 3, "ngClass"], ["class", "accommodation-details__actions-block map-hidden", 4, "ngIf"], ["class", "tz-block-with-border", "data-test", "accommodation-details-block", 4, "ngIf"], ["class", "accommodation-details__description-block tz-block-with-border", "data-test", "hotel-accommodation-details", 4, "ngIf"], ["id", "ACC_DETAILS_ROOMS"], ["class", "map-hidden", 4, "ngIf"], ["class", "block-separator map-hidden", 4, "ngIf"], ["id", "ACC_DETAILS_RATINGS", "class", "block-separator", 4, "ngIf"], ["class", "tz-block-with-border accommodation-reviews-block", "data-test", "hotel-room-rating-block", 4, "ngIf"], ["class", "accommodation-details__amenities-block tz-block-with-border", "data-test", "hotel-room-amenities-block", 4, "ngIf"], ["id", "ACC_DETAILS_MAP", "class", "accommodation-details__mapboxgl-map-block tz-block-with-border map-hidden", "data-test", "hotel-map-block", 4, "ngIf"], ["class", "accommodation-details__hotel-rules-block tz-block-with-border map-hidden", "data-test", "hotel-rules-block", 4, "ngIf"], ["class", "accommodation-details__additional-information-block tz-block-with-border map-hidden", "data-test", "hotel-additional-information-block", 4, "ngIf"], [4, "ngIf"], [1, "accommodation-details__actions-block", "map-hidden"], [1, "accommodation-details__btns-container"], ["class", "accommodation-details__back-to-results-btn", "data-test", "hotels-room-back-to-basket-btn", 3, "click", 4, "ngIf"], ["class", "accommodation-details__back-to-results-btn", "data-test", "hotels-room-back-to-result-btn", 3, "click", 4, "ngIf"], ["class", "accommodation-details__guest-review-btn", 3, "click", 4, "ngIf"], ["data-test", "hotel-room-view-rooms-btn", 1, "accommodation-details__view-rooms-btn", 3, "click"], ["data-test", "hotels-room-back-to-basket-btn", 1, "accommodation-details__back-to-results-btn", 3, "click"], ["data-test", "hotels-room-back-to-result-btn", 1, "accommodation-details__back-to-results-btn", 3, "click"], [1, "accommodation-details__guest-review-btn", 3, "click"], ["data-test", "accommodation-details-block", 1, "tz-block-with-border"], [1, "flex", "align-center", "accommodation-details__title-block"], [1, "flex", "align-center", "map-inline"], [1, "accommodation-details__main-title"], [1, "accommodation-details__stars"], [3, "starWidth", "starHeight", "starCount"], ["class", "accommodation-details__address-title", 3, "click", 4, "ngIf"], [1, "flex", "align-center", "ml-a", "mb-a"], [1, "accommodation-details__rate-text", "map-hidden"], ["data-test", "accommodation-ratings", 1, "tz-rate-btn", "tz-rate-btn--hover", 3, "click"], [1, "map-hidden", 3, "code", "giataId", "imageProvider", "hotelName"], [1, "hotel-main-image", "map-only", 3, "tzHotelImage", "provider"], [1, "room-amenities"], ["class", "room-amenities-item", 4, "ngFor", "ngForOf"], [1, "accommodation-details__address-title", 3, "click"], ["data-test", "show-on-map-button", 1, "map-hidden"], [1, "room-amenities-item"], [1, "inline-flex"], [3, "icon"], ["data-test", "hotel-accommodation-details", 1, "accommodation-details__description-block", "tz-block-with-border"], [1, "accommodation-details__description-info-block"], [1, "accommodation-details__description-title"], [1, "accommodation-details__description-text"], [3, "innerHTML"], ["class", "accommodation-details__description-text-btn", "data-test", "hotel-accommodation-details-read-more-less-btn", 3, "click", 4, "ngIf"], [1, "accommodation-details__description-room-details-block", "map-hidden"], ["class", "accommodation-details__description-room-detail room-detail", 4, "ngFor", "ngForOf"], ["class", "accommodation-details__description-room-detail room-detail room-detail-negative", 4, "ngFor", "ngForOf"], ["class", "accommodation-details__guests-like-block", 4, "ngIf"], [1, "accommodation-details__description-room-details-block", "map-only"], ["data-test", "hotel-accommodation-details-read-more-less-btn", 1, "accommodation-details__description-text-btn", 3, "click"], [1, "accommodation-details__description-room-detail", "room-detail"], [1, "accommodation-details__description-room-detail", "room-detail", "room-detail-negative"], [1, "accommodation-details__guests-like-block"], [1, "accommodation-details__guests-like-title"], [1, "accommodation-details__guests-like-list"], ["class", "accommodation-details__guests-like-list-item", 4, "ngFor", "ngForOf"], [1, "accommodation-details__guests-like-list-item"], [1, "map-hidden"], ["class", "accommodation-details__recommended-block tz-block-with-border", 4, "ngIf"], ["class", "service-submission-container recommended-block", 4, "ngIf"], [1, "accommodation-details__recommended-block", "tz-block-with-border"], [3, "accommodation", "selectRecommended", "recommendedSelected", "openTermsModal", "scrollTo"], [1, "service-submission-container", "recommended-block"], [3, "cancelSelection", "submitBooking"], [1, "block-separator", "map-hidden"], [3, "accommodationCartData", "paymentCaptureMode", "fromBookings", "detailPage", "cancel", 4, "ngIf"], ["class", "accommodation-details__rooms-block", 3, "id", 4, "ngFor", "ngForOf"], [3, "accommodationCartData", "paymentCaptureMode", "fromBookings", "detailPage", "cancel"], [1, "accommodation-details__rooms-block", 3, "id"], [3, "roomsLeftForSelection", "room", "isUserLogged", "ratings", "numberOfNights", "roomBookings", "roomCountChanged", "roomMaxSelectedCountReached", "openTermsModal"], ["class", "service-submission-container", 4, "ngIf"], [1, "service-submission-container"], ["serviceBookingConfirmationComponentOfRooms", ""], ["id", "ACC_DETAILS_RATINGS", 1, "block-separator"], ["data-test", "hotel-room-rating-block", 1, "tz-block-with-border", "accommodation-reviews-block"], [1, "accommodation-reviews-block__rating", "map-only"], [1, "rating-detail"], [1, "tz-rate-btn"], ["class", "visitors-per-country", 4, "ngIf"], ["class", "category-ratings", 4, "ngIf"], [1, "visitors-per-country"], [1, "accommodation-reviews-block__title"], ["class", "flex align-center visitors-per-country__item", 4, "ngFor", "ngForOf"], ["class", "visitors-per-country__no-guest-review flex align-center", 4, "ngIf"], [1, "flex", "align-center", "visitors-per-country__item"], [1, "visitors-per-country__country"], [1, "visitors-per-country__percentage"], [1, "visitors-per-country__no-guest-review", "flex", "align-center"], ["icon", "warning", 3, "styles"], [1, "category-ratings"], ["class", "category-ratings__item", 3, "width", 4, "ngFor", "ngForOf"], [1, "category-ratings__item"], [1, "category-ratings__rating-text"], ["data-test", "hotel-room-amenities-block", 1, "accommodation-details__amenities-block", "tz-block-with-border"], [3, "amenityGroups"], ["id", "ACC_DETAILS_MAP", "data-test", "hotel-map-block", 1, "accommodation-details__mapboxgl-map-block", "tz-block-with-border", "map-hidden"], [3, "accommodation", "searchInfo"], [3, "accommodationReviews", 4, "ngIf"], [3, "accommodationReviews"], ["data-test", "hotel-rules-block", 1, "accommodation-details__hotel-rules-block", "tz-block-with-border", "map-hidden"], [1, "accommodation-details__hotel-rules-title"], [3, "hotelName", "checkIn", "checkOut", "hotelRules"], ["data-test", "hotel-additional-information-block", 1, "accommodation-details__additional-information-block", "tz-block-with-border", "map-hidden"], [1, "accommodation-details__additional-information-title"], [4, "ngFor", "ngForOf"], [1, "mob-accommodation-main-container"], [3, "accommodation", "accommodationReviews", "showRooms"], [3, "accommodation"], [3, "roomDetails"], [3, "accommodation", "accommodationReviews"], [1, "mob-modal-page-link-block", "emenities-btn"], [3, "clicked"], [1, "mob-modal-page-link-block"], ["class", "rooms-btn__wrapper tz-fixed-bottom", 4, "ngIf"], [1, "rooms-btn__wrapper", "tz-fixed-bottom"], ["data-mob", "accommodation-show-rooms-btn", 1, "tz-btn", "tz-btn-primary", 3, "click"]],
  template: function AccommodationDetailsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](1, AccommodationDetailsComponent_div_1_Template, 11, 9, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](4, AccommodationDetailsComponent_div_4_Template, 22, 24, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](6, AccommodationDetailsComponent_div_6_Template, 19, 24, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelement"](8, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](9, AccommodationDetailsComponent_div_9_Template, 3, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](11, AccommodationDetailsComponent_div_11_Template, 4, 3, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](13, AccommodationDetailsComponent_div_13_Template, 3, 2, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](14, AccommodationDetailsComponent_div_14_Template, 4, 3, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](16, AccommodationDetailsComponent_div_16_Template, 14, 15, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](17, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](18, AccommodationDetailsComponent_div_18_Template, 2, 1, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](19, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](20, AccommodationDetailsComponent_div_20_Template, 3, 3, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](21, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](22, AccommodationDetailsComponent_div_22_Template, 5, 7, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](23, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](24, AccommodationDetailsComponent_div_24_Template, 5, 4, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](25, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵtemplate"](26, AccommodationDetailsComponent_ng_container_26_Template, 21, 19, "ng-container", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipe"](27, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpureFunction2"](40, _c6, ctx.fromTzMap, ctx.fromMyTrips));
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](2, 14, ctx.platformService.isMobileDevice$) === false && (!ctx.fromMyTrips || _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](3, 16, ctx.fromMyTrips && ctx.isMobile$)));
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](5, 18, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](7, 20, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.accommodation.noRoom && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](10, 22, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.accommodation.noRoom && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](12, 24, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", !ctx.accommodation.noRoom && !ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](15, 26, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](17, 28, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](19, 30, ctx.platformService.isMobileDevice$) === false && ctx.accommodation.amenityGroups && ctx.accommodation.amenityGroups.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](21, 32, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](23, 34, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](25, 36, ctx.platformService.isMobileDevice$) === false && ctx.accommodation.facilities && ctx.accommodation.facilities.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵpipeBind1"](27, 38, ctx.platformService.isMobileDevice$));
    }
  },
  styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .map-only[_ngcontent-%COMP%] {\n  display: none;\n}\n\n@media (max-width: 920px) {\n  .accommodation-details[_ngcontent-%COMP%] {\n    width: 100%;\n    background: var(--color-main-background-mobile);\n    padding-bottom: 2.75rem;\n  }\n  .accommodation-details[_ngcontent-%COMP%]   .mob-accommodation-main-container[_ngcontent-%COMP%] {\n    margin-top: -0.25rem;\n  }\n  .accommodation-details[_ngcontent-%COMP%]   .mob-modal-page-link-block[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: 0.25rem;\n  }\n}\n\n.accommodation-details__actions-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n\n.accommodation-details__back-to-results-btn[_ngcontent-%COMP%], .accommodation-details__view-rooms-btn[_ngcontent-%COMP%], .accommodation-details__guest-review-btn[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-semibold);\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  letter-spacing: 0.25px;\n  color: var(--color-main-text);\n  background: var(--color-primary-white);\n  box-shadow: 0 0 0 1px var(--upgrade-right-border);\n  outline-offset: -1px;\n  border-radius: 0.25rem;\n  padding: 0.875rem 1rem;\n  transition: all 0.3s;\n}\n\n@media not all and (hover: none) {\n  .accommodation-details__back-to-results-btn[_ngcontent-%COMP%]:hover, .accommodation-details__view-rooms-btn[_ngcontent-%COMP%]:hover, .accommodation-details__guest-review-btn[_ngcontent-%COMP%]:hover {\n    box-shadow: 0 0 0 1px var(--ion-color-primary);\n    background-color: var(--ion-color-primary);\n    color: var(--ion-color-primary-contrast);\n  }\n  .accommodation-details__back-to-results-btn[_ngcontent-%COMP%]:hover::before, .accommodation-details__view-rooms-btn[_ngcontent-%COMP%]:hover::before, .accommodation-details__guest-review-btn[_ngcontent-%COMP%]:hover::before {\n    color: var(--ion-color-primary-contrast);\n  }\n}\n\n.accommodation-details__back-to-results-btn[_ngcontent-%COMP%]::before {\n  content: \"\\e900\";\n  transform: rotate(90deg);\n}\n\n.accommodation-details__guest-review-btn[_ngcontent-%COMP%]::before {\n  content: \"\\e90f\";\n}\n\n.accommodation-details__back-to-results-btn[_ngcontent-%COMP%], .accommodation-details__guest-review-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.75rem 1rem;\n}\n\n.accommodation-details__back-to-results-btn[_ngcontent-%COMP%]::before, .accommodation-details__guest-review-btn[_ngcontent-%COMP%]::before {\n  font-family: \"tz-icons\";\n  font-size: 1.5rem;\n  color: rgba(147, 128, 162, 0.4);\n  font-weight: var(--font-weight-normal);\n  margin-right: 0.25rem;\n  width: 1.5rem;\n  height: 1.5rem;\n  display: grid;\n  place-items: center;\n}\n\n.accommodation-details__btns-container[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1.5rem;\n}\n\n.accommodation-details__title-block[_ngcontent-%COMP%] {\n  padding-bottom: 1.25rem;\n}\n\n.accommodation-details__main-title[_ngcontent-%COMP%] {\n  font-size: 1.4375rem;\n  line-height: 1.75rem;\n  font-weight: 500;\n  margin-bottom: 0;\n  margin-right: 0.5rem;\n}\n\n.accommodation-details__stars[_ngcontent-%COMP%] {\n  display: inline-flex;\n}\n\n.accommodation-details__address-title[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--ion-color-primary);\n  font-size: 0.75rem;\n  line-height: 1.1875rem;\n}\n\n@media not all and (hover: none) {\n  .accommodation-details__address-title[_ngcontent-%COMP%]:hover {\n    color: #604fb8;\n  }\n}\n\n.accommodation-details__rate-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--ion-color-primary);\n  font-weight: 600;\n  line-height: 1.1875rem;\n  margin-right: 0.625rem;\n  cursor: pointer;\n}\n\n@media not all and (hover: none) {\n  .accommodation-details__rate-text[_ngcontent-%COMP%]:hover {\n    color: #604fb8;\n  }\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .room-amenities[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  height: 1.5rem;\n  overflow: hidden;\n  width: 100%;\n  margin: 1.9375rem 0 0;\n  padding-bottom: 2.0625rem;\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .room-amenities[_ngcontent-%COMP%]   .room-amenities-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-size: 0.75rem;\n  line-height: 1.1875rem;\n  font-weight: 400;\n  margin-right: 1.25rem;\n  margin-bottom: 1rem;\n  color: var(--color-dark-gray);\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .room-amenities[_ngcontent-%COMP%]   .room-amenities-item[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 0.625rem;\n  opacity: 0.71;\n}\n\n.accommodation-details__description-block[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 1.25rem;\n  margin-bottom: 0.625rem;\n  padding: 1.25rem 1.25rem 0.625rem;\n}\n\n.accommodation-details__recommended-block[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n\n.accommodation-details__description-info-block[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 0.9375rem;\n  padding-right: 1.25rem;\n}\n\n.accommodation-details__description-title[_ngcontent-%COMP%] {\n  margin-bottom: 0.625rem;\n  font-weight: 700;\n  font-size: 1rem;\n}\n\n.accommodation-details__description-text[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-tint);\n  font-size: 0.75rem;\n  line-height: 1.25rem;\n  margin-bottom: 1rem;\n}\n\n.accommodation-details__description-text-btn[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n  cursor: pointer;\n}\n\n.accommodation-details__description-room-details-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.accommodation-details__description-room-detail[_ngcontent-%COMP%] {\n  margin-bottom: 0.625rem;\n}\n\n.accommodation-details__description-room-detail[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0.625rem;\n}\n\n.accommodation-details__rooms-block[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.25rem;\n}\n\n.accommodation-details__rooms-block[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 10px;\n}\n\n.accommodation-details__rooms-block[_ngcontent-%COMP%]   .service-submission-container[_ngcontent-%COMP%] {\n  scroll-margin: 260px;\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .recommended-block[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.accommodation-details__guests-like-block[_ngcontent-%COMP%] {\n  width: 11.25rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.accommodation-details__guests-like-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n}\n\n.accommodation-details__guests-like-list[_ngcontent-%COMP%] {\n  padding: 0;\n  list-style: none;\n}\n\n.accommodation-details__guests-like-list-item[_ngcontent-%COMP%] {\n  margin: 0.5rem 0;\n  font-size: 0.75rem;\n  font-weight: 400;\n}\n\n.accommodation-details__amenities-block[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n\n.accommodation-details__hotel-rules-block[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n  padding: 1.25rem;\n}\n\n.accommodation-details__mapboxgl-map-block[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.accommodation-details__hotel-rules-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n}\n\n.accommodation-details__hotel-rules-description-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.625rem;\n}\n\n.accommodation-details__additional-information-block[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  margin-bottom: 1.25rem;\n  color: #828282;\n  font-size: 0.75rem;\n  font-weight: 400;\n  line-height: 1.25rem;\n}\n\n.accommodation-details__additional-information-title[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  margin-bottom: 0.75rem;\n  color: #000000;\n}\n\n.accommodation-details__additional-information-text-block[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n  color: var(--ion-color-medium-shade);\n  font-size: 0.75rem;\n}\n\n.accommodation-details__back-to-top-block[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  text-align: right;\n}\n\n.accommodation-details__back-to-top-btn[_ngcontent-%COMP%] {\n  min-width: 7.9375rem;\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .rooms-btn__wrapper[_ngcontent-%COMP%] {\n  background: var(--color-primary-white);\n  padding: 0.5rem 1rem;\n  margin-top: 0.5px;\n  border-top: 1px solid var(--color-main-text-mobile);\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .rooms-btn__wrapper[_ngcontent-%COMP%]   .tz-btn[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n@media (max-width: 920px) {\n  .accommodation-details[_ngcontent-%COMP%]   .rooms-btn__wrapper[_ngcontent-%COMP%]   .tz-btn[_ngcontent-%COMP%] {\n    line-height: 1.5rem;\n    font-size: 0.875rem;\n    font-weight: 500;\n  }\n}\n\n.accommodation-reviews-block[_ngcontent-%COMP%] {\n  display: flex;\n  margin-bottom: 1.25rem;\n}\n\n@media (max-width: 920px) {\n  .accommodation-reviews-block[_ngcontent-%COMP%] {\n    flex-direction: column;\n    padding: 0;\n    background-color: transparent;\n  }\n}\n\n.accommodation-reviews-block__title[_ngcontent-%COMP%] {\n  margin-bottom: 0.9375rem;\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1.2;\n}\n\n.accommodation-reviews-block[_ngcontent-%COMP%]   .visitors-per-country[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-right: 1.25rem;\n}\n\n.accommodation-reviews-block[_ngcontent-%COMP%]   .visitors-per-country__item[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.accommodation-reviews-block[_ngcontent-%COMP%]   .visitors-per-country__no-guest-review[_ngcontent-%COMP%] {\n  font-size: 0.6875rem;\n  line-height: 1.1875rem;\n  color: var(--ion-color-medium);\n}\n\n.accommodation-reviews-block[_ngcontent-%COMP%]   .visitors-per-country__no-guest-review[_ngcontent-%COMP%]   tz-svg-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n\n.accommodation-reviews-block[_ngcontent-%COMP%]   .visitors-per-country__flag[_ngcontent-%COMP%] {\n  width: 1.125rem;\n  height: 0.6875rem;\n}\n\n.accommodation-reviews-block[_ngcontent-%COMP%]   .visitors-per-country__country[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  line-height: 1.1875rem;\n}\n\n.accommodation-reviews-block[_ngcontent-%COMP%]   .visitors-per-country__percentage[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 400;\n  line-height: 1.1875rem;\n  color: var(--color-light-gray);\n}\n\n.accommodation-reviews-block[_ngcontent-%COMP%]   .category-ratings[_ngcontent-%COMP%] {\n  width: 50%;\n  padding-left: 1.25rem;\n}\n\n@media (max-width: 920px) {\n  .accommodation-reviews-block[_ngcontent-%COMP%]   .category-ratings[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n\n.accommodation-reviews-block[_ngcontent-%COMP%]   .category-ratings__item[_ngcontent-%COMP%] {\n  min-width: -moz-fit-content;\n  min-width: fit-content;\n  line-height: 1.5rem;\n  font-size: 0.75rem;\n  font-weight: 500;\n  background-color: #C0DCFF;\n  padding: 0 6px;\n  border-radius: 3px;\n  margin-bottom: 0.625rem;\n  color: var(--ion-color-secondary-contrast);\n}\n\n.accommodation-reviews-block[_ngcontent-%COMP%]   .category-ratings__rating-text[_ngcontent-%COMP%] {\n  padding-right: 0.5625rem;\n}\n\n.block-separator[_ngcontent-%COMP%] {\n  margin: 32px 0;\n}\n\n.room-detail[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  background: #E0F7C6;\n  color: #62A11C !important;\n  border: 0;\n  font-weight: 600;\n  line-height: 1.625rem;\n  font-size: 0.625rem;\n  border-radius: 0.1875rem;\n  padding: 0 0.625rem;\n  white-space: nowrap;\n  text-transform: uppercase;\n}\n\n.room-detail-negative[_ngcontent-%COMP%] {\n  background: #FFE0E0;\n  color: #D65555 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tZGV0YWlscy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsT0FBQTtBQURGOztBQUtJO0VBQ0ksYUFBQTtBQUZSOztBQzhDSTtFRDlDSjtJQU1RLFdBQUE7SUFDQSwrQ0FBQTtJQUNBLHVCQUFBO0VBRk47RUFJTTtJQUNFLG9CQUFBO0VBRlI7RUFLTTtJQUNFLHNCQUFBO0VBSFI7QUFDRjs7QUFNRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUFKSjs7QUFPSTtFQUdJLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQ0FBQTtFQUNBLGlEQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7QUFQUjs7QUNnQ0k7RUFDSTtJRHZCSSw4Q0FBQTtJQUNBLDBDQUFBO0lBQ0Esd0NBQUE7RUFOVjtFQVFVO0lBQ0ksd0NBQUE7RUFOZDtBQUNGOztBQVVJO0VBQ0ksZ0JBQUE7RUFDQSx3QkFBQTtBQVJSOztBQVdJO0VBQ0ksZ0JBQUE7QUFUUjs7QUFZSTtFQUVJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBWFI7O0FBYVE7RUFDSSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLHFCQUFBO0VBRUEsYUFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFaWjs7QUFnQkk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQWRSOztBQWlCRTtFQUNFLHVCQUFBO0FBZko7O0FBa0JFO0VBQ0Usb0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtBQWhCSjs7QUFtQkU7RUFDRSxvQkFBQTtBQWpCSjs7QUFvQkU7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0FBbEJKOztBQ3hCSTtFQUNJO0lENENGLGNBQUE7RUFqQko7QUFDRjs7QUFvQkU7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FBbEJKOztBQ3JDSTtFQUNJO0lEeURGLGNBQUE7RUFqQko7QUFDRjs7QUFvQkU7RUFDRSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtFQUNBLHlCQUFBO0FBbEJKOztBQW9CSTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQWxCTjs7QUFvQk07RUFDRSxhQUFBO0VBQ0EsY0FBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtBQWxCUjs7QUF1QkU7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0FBckJKOztBQXdCRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7QUF0Qko7O0FBeUJFO0VBQ0UsT0FBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUF2Qko7O0FBMEJFO0VBQ0UsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUF4Qko7O0FBMkJFO0VBQ0UsbUNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUF6Qko7O0FBNEJFO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0FBMUJKOztBQTZCRTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBM0JKOztBQThCRTtFQUNFLHVCQUFBO0FBNUJKOztBQThCSTtFQUNFLHNCQUFBO0FBNUJOOztBQWlDSTtFQUNFLHNCQUFBO0FBL0JOOztBQWtDSTtFQUNFLG1CQUFBO0FBaENOOztBQW1DSTtFQUNFLG9CQUFBO0FBakNOOztBQXFDRTtFQUNFLHNCQUFBO0FBbkNKOztBQXNDRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFwQ0o7O0FBdUNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0FBckNKOztBQXdDRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQXRDSjs7QUF5Q0U7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUF2Q0o7O0FBMENFO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtBQXhDSjs7QUEyQ0U7RUFDRSxzQkFBQTtFQUNBLGdCQUFBO0FBekNKOztBQTRDRTtFQUNFLHNCQUFBO0FBMUNKOztBQTZDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBM0NKOztBQThDRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBNUNKOztBQStDRTtFQUNFLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0FBN0NKOztBQWdERTtFQUNFLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQTlDSjs7QUFpREU7RUFDRSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esa0JBQUE7QUEvQ0o7O0FBa0RFO0VBQ0UsbUJBQUE7RUFDQSxpQkFBQTtBQWhESjs7QUFtREU7RUFDRSxvQkFBQTtBQWpESjs7QUFvREk7RUFDSSxzQ0FBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtREFBQTtBQWxEUjs7QUFvRFE7RUFDSSxXQUFBO0FBbERaOztBQ25OSTtFRHlRTTtJQUNFLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxnQkFBQTtFQW5EVjtBQUNGOztBQXdEQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQXJERjs7QUMvTkk7RURrUko7SUFLUSxzQkFBQTtJQUNBLFVBQUE7SUFDQSw2QkFBQTtFQXBETjtBQUNGOztBQXNERTtFQUNFLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFwREo7O0FBdURFO0VBQ0UsVUFBQTtFQUNBLHNCQUFBO0FBckRKOztBQXVESTtFQUNFLG1CQUFBO0FBckROOztBQXdESTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQXRETjs7QUF3RE07RUFDRSxvQkFBQTtBQXREUjs7QUEwREk7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUF4RE47O0FBMkRJO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBekROOztBQTRESTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBMUROOztBQThERTtFQUNFLFVBQUE7RUFDQSxxQkFBQTtBQTVESjs7QUM5UUk7RUR3VUY7SUFLUSxXQUFBO0VBM0RSO0FBQ0Y7O0FBNkRJO0VBQ0UsMkJBQUE7RUFBQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSwwQ0FBQTtBQTNETjs7QUE4REk7RUFDRSx3QkFBQTtBQTVETjs7QUFpRUE7RUFDRSxjQUFBO0FBOURGOztBQWlFQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBOURGOztBQWlFQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUE5REYiLCJmaWxlIjoiYWNjb21tb2RhdGlvbi1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG46aG9zdCB7XG4gIGZsZXg6IDE7XG59XG5cbi5hY2NvbW1vZGF0aW9uLWRldGFpbHMge1xuICAgIC5tYXAtb25seSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1haW4tYmFja2dyb3VuZC1tb2JpbGUpO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMi43NXJlbTtcblxuICAgICAgICAubW9iLWFjY29tbW9kYXRpb24tbWFpbi1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0wLjI1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vYi1tb2RhbC1wYWdlLWxpbmstYmxvY2s6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAmX19hY3Rpb25zLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gIH1cblxuICAgICZfX2JhY2stdG8tcmVzdWx0cy1idG4sXG4gICAgJl9fdmlldy1yb29tcy1idG4sXG4gICAgJl9fZ3Vlc3QtcmV2aWV3LWJ0biB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4yNXB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10ZXh0KTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDFweCB2YXIoLS11cGdyYWRlLXJpZ2h0LWJvcmRlcik7XG4gICAgICAgIG91dGxpbmUtb2Zmc2V0OiAtMXB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjg3NXJlbSAxcmVtO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcblxuICAgICAgICBAaW5jbHVkZSBvbi1ob3ZlciB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgMCAxcHggdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcblxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYmFjay10by1yZXN1bHRzLWJ0bjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcXGU5MDBcIjtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgIH1cblxuICAgICZfX2d1ZXN0LXJldmlldy1idG46OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxlOTBmXCI7XG4gICAgfVxuXG4gICAgJl9fYmFjay10by1yZXN1bHRzLWJ0bixcbiAgICAmX19ndWVzdC1yZXZpZXctYnRuIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuXG4gICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICBmb250LWZhbWlseTogXCJ0ei1pY29uc1wiO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBjb2xvcjogcmdiYSgxNDcsIDEyOCwgMTYyLCAwLjQpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMjVyZW07XG5cbiAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgICAgICBwbGFjZS1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYnRucy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBnYXA6IDEuNXJlbTtcbiAgICB9XG5cbiAgJl9fdGl0bGUtYmxvY2sge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuICB9XG5cbiAgJl9fbWFpbi10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjQzNzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICB9XG5cbiAgJl9fc3RhcnMge1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICB9XG5cbiAgJl9fYWRkcmVzcy10aXRsZSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE4NzVyZW07XG5cbiAgICBAaW5jbHVkZSBvbi1ob3ZlciB7XG4gICAgICBjb2xvcjogIzYwNGZiOFxuICAgIH1cbiAgfVxuXG4gICZfX3JhdGUtdGV4dCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xODc1cmVtO1xuICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgQGluY2x1ZGUgb24taG92ZXIge1xuICAgICAgY29sb3I6ICM2MDRmYjhcbiAgICB9XG4gIH1cblxuICAucm9vbS1hbWVuaXRpZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGhlaWdodDogMS41cmVtO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAxLjkzNzVyZW0gMCAwO1xuICAgIHBhZGRpbmctYm90dG9tOiAyLjA2MjVyZW07XG5cbiAgICAucm9vbS1hbWVuaXRpZXMtaXRlbSB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE4NzVyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWdyYXkpO1xuXG4gICAgICB0ei1pY29uIHtcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gICAgICAgIG9wYWNpdHk6IDAuNzE7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24tYmxvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDEuMjVyZW0gMC42MjVyZW07XG4gIH1cblxuICAmX19yZWNvbW1lbmRlZC1ibG9jayB7XG4gICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24taW5mby1ibG9jayB7XG4gICAgZmxleDogMTtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuOTM3NXJlbTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24tdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24tdGV4dCB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tdGludCk7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbi10ZXh0LWJ0biB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cblxuICAmX19kZXNjcmlwdGlvbi1yb29tLWRldGFpbHMtYmxvY2sge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG5cbiAgJl9fZGVzY3JpcHRpb24tcm9vbS1kZXRhaWwge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xuXG4gICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gICAgfVxuICB9XG5cbiAgJl9fcm9vbXMtYmxvY2sge1xuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIH1cblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIH1cblxuICAgIC5zZXJ2aWNlLXN1Ym1pc3Npb24tY29udGFpbmVye1xuICAgICAgc2Nyb2xsLW1hcmdpbjogMjYwcHg7XG4gICAgfVxuICB9XG5cbiAgLnJlY29tbWVuZGVkLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB9XG5cbiAgJl9fZ3Vlc3RzLWxpa2UtYmxvY2sge1xuICAgIHdpZHRoOiAxMS4yNXJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cblxuICAmX19ndWVzdHMtbGlrZS10aXRsZSB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cblxuICAmX19ndWVzdHMtbGlrZS1saXN0IHtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIH1cblxuICAmX19ndWVzdHMtbGlrZS1saXN0LWl0ZW0ge1xuICAgIG1hcmdpbjogMC41cmVtIDA7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIH1cblxuICAmX19hbWVuaXRpZXMtYmxvY2sge1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxuXG4gICZfX2hvdGVsLXJ1bGVzLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gIH1cblxuICAmX19tYXBib3hnbC1tYXAtYmxvY2sge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gIH1cblxuICAmX19ob3RlbC1ydWxlcy10aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxuXG4gICZfX2hvdGVsLXJ1bGVzLWRlc2NyaXB0aW9uLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gIH1cblxuICAmX19hZGRpdGlvbmFsLWluZm9ybWF0aW9uLWJsb2NrIHtcbiAgICBwYWRkaW5nOiAxLjI1cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgY29sb3I6ICM4MjgyODI7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gIH1cblxuICAmX19hZGRpdGlvbmFsLWluZm9ybWF0aW9uLXRpdGxlIHtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICB9XG5cbiAgJl9fYWRkaXRpb25hbC1pbmZvcm1hdGlvbi10ZXh0LWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gIH1cblxuICAmX19iYWNrLXRvLXRvcC1ibG9jayB7XG4gICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgfVxuXG4gICZfX2JhY2stdG8tdG9wLWJ0biB7XG4gICAgbWluLXdpZHRoOiA3LjkzNzVyZW1cbiAgfVxuXG4gICAgLnJvb21zLWJ0bl9fd3JhcHBlciB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cHg7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1tYWluLXRleHQtbW9iaWxlKTtcblxuICAgICAgICAudHotYnRuIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAudHotYnRuIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hY2NvbW1vZGF0aW9uLXJldmlld3MtYmxvY2sge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICZfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjkzNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgfVxuXG4gIC52aXNpdG9ycy1wZXItY291bnRyeSB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xuXG4gICAgJl9faXRlbSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgICZfX25vLWd1ZXN0LXJldmlldyB7XG4gICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE4NzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bSk7XG5cbiAgICAgIHR6LXN2Zy1pY29uIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fZmxhZyB7XG4gICAgICB3aWR0aDogMS4xMjVyZW07XG4gICAgICBoZWlnaHQ6IDAuNjg3NXJlbTtcbiAgICB9XG5cbiAgICAmX19jb3VudHJ5IHtcbiAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICBsaW5lLWhlaWdodDogMS4xODc1cmVtXG4gICAgfVxuXG4gICAgJl9fcGVyY2VudGFnZSB7XG4gICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuMTg3NXJlbTtcbiAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ncmF5KTtcbiAgICB9XG4gIH1cblxuICAuY2F0ZWdvcnktcmF0aW5ncyB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEuMjVyZW07XG5cbiAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB9XG5cbiAgICAmX19pdGVtIHtcbiAgICAgIG1pbi13aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICNDMERDRkY7XG4gICAgICBwYWRkaW5nOiAwIDZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xuICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1zZWNvbmRhcnktY29udHJhc3QpO1xuICAgIH1cblxuICAgICZfX3JhdGluZy10ZXh0IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IDAuNTYyNXJlbTtcbiAgICB9XG4gIH1cbn1cblxuLmJsb2NrLXNlcGFyYXRvciB7XG4gIG1hcmdpbjogMzJweCAwO1xufVxuXG4ucm9vbS1kZXRhaWwge1xuICBoZWlnaHQ6IDEuNXJlbTtcbiAgYmFja2dyb3VuZDogI0UwRjdDNjtcbiAgY29sb3I6ICM2MkExMUMgIWltcG9ydGFudDtcbiAgYm9yZGVyOiAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMS42MjVyZW07XG4gIGZvbnQtc2l6ZTogMC42MjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMTg3NXJlbTtcbiAgcGFkZGluZzogMCAwLjYyNXJlbTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLnJvb20tZGV0YWlsLW5lZ2F0aXZlIHtcbiAgYmFja2dyb3VuZDogI0ZGRTBFMDtcbiAgY29sb3I6ICNENjU1NTUgIWltcG9ydGFudDtcbn1cbiIsIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiJdfQ== */", ".from-tz-map[_ngcontent-%COMP%]   .map-hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n.from-tz-map[_ngcontent-%COMP%]   .map-only[_ngcontent-%COMP%] {\n  display: block;\n}\n.from-tz-map[_ngcontent-%COMP%]   .map-inline[_ngcontent-%COMP%] {\n  display: inline;\n}\n.from-tz-map[_ngcontent-%COMP%]   .tz-block-with-border[_ngcontent-%COMP%] {\n  padding: 0.625rem;\n  margin: 0 0 0.625rem 0;\n}\n.from-tz-map[_ngcontent-%COMP%]   .hotel-main-image[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n  margin-right: 0;\n  width: 100%;\n  height: 10.625rem;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-details__title-block[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-details__main-title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: normal;\n  line-height: 1.375rem;\n  display: inline;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-details__address-title[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-details__description-block[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-details__description-info-block[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-details__description-title[_ngcontent-%COMP%], .from-tz-map[_ngcontent-%COMP%]   .accommodation-details__guests-like-title[_ngcontent-%COMP%] {\n  font-size: 0.813rem;\n  font-weight: var(--font-weight-semibold);\n  line-height: 1.875rem;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-details__description-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.25rem;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-details__guests-like-block[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-details__guests-like-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin-bottom: unset;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-details__guests-like-list-item[_ngcontent-%COMP%] {\n  width: 50%;\n  margin: 0;\n  font-weight: var(--font-weight-regular);\n  line-height: 1.875rem;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-details__description-room-details-block.map-only[_ngcontent-%COMP%] {\n  display: flex;\n  margin-top: 0.5rem;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-reviews-block[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-reviews-block[_ngcontent-%COMP%]   .visitors-per-country[_ngcontent-%COMP%], .from-tz-map[_ngcontent-%COMP%]   .accommodation-reviews-block[_ngcontent-%COMP%]   .category-ratings[_ngcontent-%COMP%] {\n  width: 100%;\n  padding: 0;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-reviews-block[_ngcontent-%COMP%]   .visitors-per-country[_ngcontent-%COMP%] {\n  margin-bottom: 0.625rem;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-reviews-block__rating[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1.25rem;\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-reviews-block__rating[_ngcontent-%COMP%]   .rating-detail[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: var(--font-weight-regular);\n}\n.from-tz-map[_ngcontent-%COMP%]   .accommodation-reviews-block__rating[_ngcontent-%COMP%]   .rating-detail[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-text-light-gray);\n}\n.from-tz-map[_ngcontent-%COMP%]   .tz-rate-btn[_ngcontent-%COMP%] {\n  font-size: 0.813rem;\n  font-weight: var(--font-weight-semibold);\n  line-height: 1rem;\n  color: var(--color-primary-white);\n  background-color: var(--color-main-purple);\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n  height: 2rem;\n  width: 2rem;\n  display: grid;\n  place-content: center;\n  pointer-events: none;\n}\n.from-tz-map[_ngcontent-%COMP%]   .room-amenities[_ngcontent-%COMP%] {\n  margin-top: 0.688rem;\n  height: unset;\n  overflow: unset;\n  padding: unset;\n}\n.from-tz-map[_ngcontent-%COMP%]   .room-amenities[_ngcontent-%COMP%]   .room-amenities-item[_ngcontent-%COMP%] {\n  width: 50%;\n  margin-right: unset;\n}\n.from-tz-map[_ngcontent-%COMP%]   tz-accommodation-amenities[_ngcontent-%COMP%]  .amenities-groups__title {\n  display: flex;\n}\n.from-tz-map[_ngcontent-%COMP%]   tz-accommodation-amenities[_ngcontent-%COMP%]  .amenities-groups__title .map-show-more {\n  font-size: 0.75rem;\n  color: var(--color-main-purple);\n  cursor: pointer;\n  font-weight: var(--font-weight-normal);\n  margin-left: auto;\n  display: inline;\n}\n.from-tz-map[_ngcontent-%COMP%]   tz-accommodation-amenities[_ngcontent-%COMP%]  .amenities-groups__content {\n  columns: auto 1;\n}\n.from-tz-map[_ngcontent-%COMP%]   tz-accommodation-amenities[_ngcontent-%COMP%]  .amenities-groups__content:not(.map-show-all) {\n  max-height: 500px;\n  overflow: hidden;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tZGV0YWlscy1tYXAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxhQUFBO0FBQVI7QUFHSTtFQUNJLGNBQUE7QUFEUjtBQUlJO0VBQ0ksZUFBQTtBQUZSO0FBS0k7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0FBSFI7QUFNSTtFQUNJLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtBQUpSO0FBUVE7RUFDSSxpQkFBQTtBQU5aO0FBU1E7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBUFo7QUFVUTtFQUNJLG9CQUFBO0FBUlo7QUFXUTtFQUNJLHNCQUFBO0FBVFo7QUFZUTtFQUNJLFNBQUE7RUFDQSxVQUFBO0FBVlo7QUFhUTtFQUVJLG1CQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtBQVpaO0FBZVE7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0FBYlo7QUFnQlE7RUFDSSxXQUFBO0FBZFo7QUFpQlE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBZlo7QUFrQlE7RUFDSSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHVDQUFBO0VBQ0EscUJBQUE7QUFoQlo7QUFtQlE7RUFDSSxhQUFBO0VBQ0Esa0JBQUE7QUFqQlo7QUFxQkk7RUFDSSxzQkFBQTtBQW5CUjtBQXFCUTs7RUFFSSxXQUFBO0VBQ0EsVUFBQTtBQW5CWjtBQXNCUTtFQUNJLHVCQUFBO0FBcEJaO0FBdUJRO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esc0JBQUE7QUFyQlo7QUF1Qlk7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUNBQUE7QUFyQmhCO0FBdUJnQjtFQUNJLGtCQUFBO0VBQ0EsbUNBQUE7QUFyQnBCO0FBMkJJO0VBQ0ksbUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGlCQUFBO0VBQ0EsaUNBQUE7RUFDQSwwQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxvQkFBQTtBQXpCUjtBQTRCSTtFQUNJLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBMUJSO0FBNEJRO0VBQ0ksVUFBQTtFQUNBLG1CQUFBO0FBMUJaO0FBK0JRO0VBQ0ksYUFBQTtBQTdCWjtBQStCWTtFQUNJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUE3QmhCO0FBaUNRO0VBQ0ksZUFBQTtBQS9CWjtBQWlDWTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUEvQmhCIiwiZmlsZSI6ImFjY29tbW9kYXRpb24tZGV0YWlscy1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZnJvbS10ei1tYXAge1xuICAgIC5tYXAtaGlkZGVuIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubWFwLW9ubHkge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICB9XG5cbiAgICAubWFwLWlubGluZSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICB9XG5cbiAgICAudHotYmxvY2std2l0aC1ib3JkZXIge1xuICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwIDAgMC42MjVyZW0gMDtcbiAgICB9XG5cbiAgICAuaG90ZWwtbWFpbi1pbWFnZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNjI1cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwLjYyNXJlbTtcbiAgICB9XG5cbiAgICAuYWNjb21tb2RhdGlvbi1kZXRhaWxzIHtcbiAgICAgICAgJl9fdGl0bGUtYmxvY2sge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmX19tYWluLXRpdGxlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzc1cmVtO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fYWRkcmVzcy10aXRsZSB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2Rlc2NyaXB0aW9uLWJsb2NrIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAmX19kZXNjcmlwdGlvbi1pbmZvLWJsb2NrIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmX19kZXNjcmlwdGlvbi10aXRsZSxcbiAgICAgICAgJl9fZ3Vlc3RzLWxpa2UtdGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjgxM3JlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS44NzVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAmX19kZXNjcmlwdGlvbi10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fZ3Vlc3RzLWxpa2UtYmxvY2sge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAmX19ndWVzdHMtbGlrZS1saXN0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiB1bnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2d1ZXN0cy1saWtlLWxpc3QtaXRlbSB7XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuODc1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fZGVzY3JpcHRpb24tcm9vbS1kZXRhaWxzLWJsb2NrLm1hcC1vbmx5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWNjb21tb2RhdGlvbi1yZXZpZXdzLWJsb2NrIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAudmlzaXRvcnMtcGVyLWNvdW50cnksXG4gICAgICAgIC5jYXRlZ29yeS1yYXRpbmdzIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC52aXNpdG9ycy1wZXItY291bnRyeSB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX3JhdGluZyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcblxuICAgICAgICAgICAgLnJhdGluZy1kZXRhaWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbGlnaHQtZ3JheSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnR6LXJhdGUtYnRuIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjgxM3JlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW0gMC41cmVtIDAgMC41cmVtO1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIHdpZHRoOiAycmVtO1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIC5yb29tLWFtZW5pdGllcyB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNjg4cmVtO1xuICAgICAgICBoZWlnaHQ6IHVuc2V0O1xuICAgICAgICBvdmVyZmxvdzogdW5zZXQ7XG4gICAgICAgIHBhZGRpbmc6IHVuc2V0O1xuXG4gICAgICAgIC5yb29tLWFtZW5pdGllcy1pdGVtIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IHVuc2V0O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHotYWNjb21tb2RhdGlvbi1hbWVuaXRpZXM6Om5nLWRlZXAge1xuICAgICAgICAuYW1lbml0aWVzLWdyb3Vwc19fdGl0bGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgLm1hcC1zaG93LW1vcmUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYW1lbml0aWVzLWdyb3Vwc19fY29udGVudCB7XG4gICAgICAgICAgICBjb2x1bW5zOiBhdXRvIDE7XG5cbiAgICAgICAgICAgICY6bm90KC5tYXAtc2hvdy1hbGwpIHtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */", ".tz-booking-hotel[_ngcontent-%COMP%]   .accommodation-details__actions-block[_ngcontent-%COMP%] {\n  justify-content: end;\n}\n.tz-booking-hotel[_ngcontent-%COMP%]   .accommodation-details__back-to-results-btn[_ngcontent-%COMP%], .tz-booking-hotel[_ngcontent-%COMP%]   .accommodation-details__view-rooms-btn[_ngcontent-%COMP%], .tz-booking-hotel[_ngcontent-%COMP%]   .accommodation-details__rooms-block[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tZGV0YWlscy1ib29raW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUlRO0VBQ0ksb0JBQUE7QUFIWjtBQU1RO0VBR0ksYUFBQTtBQU5aIiwiZmlsZSI6ImFjY29tbW9kYXRpb24tZGV0YWlscy1ib29raW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG4udHotYm9va2luZy1ob3RlbCB7XG4gICAgLmFjY29tbW9kYXRpb24tZGV0YWlscyB7XG4gICAgICAgICZfX2FjdGlvbnMtYmxvY2sge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgICAgIH1cblxuICAgICAgICAmX19iYWNrLXRvLXJlc3VsdHMtYnRuLFxuICAgICAgICAmX192aWV3LXJvb21zLWJ0bixcbiAgICAgICAgJl9fcm9vbXMtYmxvY2sge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 55431:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/accommodation-map/accommodation-map.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationMapComponent": () => (/* binding */ AccommodationMapComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/general-settings */ 12308);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ 62333);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _core_constants_mapbox_gl_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/mapbox-gl-const */ 92144);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mapbox-gl */ 28235);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _shared_pipes_distance_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/pipes/distance.pipe */ 40350);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);











const _c0 = ["mapBoxContainer"];
function AccommodationMapComponent_mgl_marker_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "mgl-marker", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "tz-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const marker_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("lngLat", marker_r4.lngLat);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("icon", marker_r4.marker);
} }
function AccommodationMapComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 8)(1, "div", 9)(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](6, "tzDistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 11)(8, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.locationInfo.hotelName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](6, 3, ctx_r2.locationInfo.distance));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 5, "HOTELS." + ctx_r2.locationInfo.searchType));
} }
function AccommodationMapComponent_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccommodationMapComponent_ng_container_5_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r5.toggleMapSize(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 13)(3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccommodationMapComponent_ng_container_5_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r7.zoomMap(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccommodationMapComponent_ng_container_5_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r8.zoomMap(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
} }
const _c1 = function (a0) { return { expanded: a0 }; };
const _c2 = function () { return [12]; };
class AccommodationMapComponent {
    constructor(searchDataService) {
        this.searchDataService = searchDataService;
        this.mapStyle = _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_0__.GeneralSettings.mapbox.mapStyle;
        this.mapExpanded = false;
        this.locationInfo = {
            hotelName: '',
            searchType: '',
            distance: 0.0,
        };
        this.markers = [];
        this.fitBoundsOptions = {
            padding: { top: 30, bottom: 30, left: 350, right: 250 },
        };
    }
    onClick(event) {
        let targetElement = event.target;
        let outsideClick = true;
        do {
            if (targetElement.tagName === 'TZ-ACCOMMODATION-MAP') {
                outsideClick = false;
                break;
            }
            targetElement = targetElement.parentNode;
        } while (targetElement);
        if (outsideClick) {
            this.disableMapInteractions();
        }
        else {
            this.enableMapInteractions();
        }
    }
    ngOnInit() {
        this.setHotelMarkers();
    }
    onMapLoad(map) {
        this.mapboxRef = map;
        const scale = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__.ScaleControl({
            maxWidth: 80,
            unit: 'metric',
        });
        this.mapboxRef.addControl(scale);
        this.disableMapInteractions();
    }
    toggleMapSize() {
        if (this.mapBoxContainer) {
            this.mapExpanded = !this.mapExpanded;
            this.mapBoxContainer.nativeElement.style.height = (this.mapExpanded ? 370 : 210) + 'px'; // set height
            this.mapboxRef.resize();
        }
    }
    zoomMap(zoomin = false) {
        this.mapboxRef.setZoom(this.mapboxRef.getZoom() + (zoomin ? 0.5 : -0.5));
    }
    setHotelMarkers() {
        this.markers.push({
            lngLat: new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__.LngLat(Number(this.accommodation.location.longitude), Number(this.accommodation.location.latitude)),
            marker: _core_constants_mapbox_gl_const__WEBPACK_IMPORTED_MODULE_3__.MapMarkers.PURPLE,
        });
        if (this.accommodation.aerialDistance && this.accommodation.aerialDistance > 0) {
            if (!this.searchInfo) {
                this.searchInfo = this.searchDataService.getSearchData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC);
            }
            if (this.searchInfo && this.searchInfo.address) {
                this.markers.push({
                    lngLat: new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__.LngLat(Number(this.searchInfo.address.longitude), Number(this.searchInfo.address.latitude)),
                    marker: _core_constants_mapbox_gl_const__WEBPACK_IMPORTED_MODULE_3__.MapMarkers.ORANGE,
                });
                this.locationInfo = {
                    hotelName: this.accommodation.name,
                    searchType: this.searchInfo.address.cityName === '' ? 'SEARCH_POINT' : 'CITY_CENTER',
                    distance: this.accommodation.aerialDistance,
                };
            }
        }
        if (this.markers.length === 1) {
            this.fitBoundsOptions.maxZoom = 15;
        }
        const latLngBounds = new mapbox_gl__WEBPACK_IMPORTED_MODULE_2__.LngLatBounds();
        for (const marker of this.markers) {
            latLngBounds.extend([marker.lngLat.lng, marker.lngLat.lat]);
        }
        this.fitBounds = latLngBounds;
    }
    disableMapInteractions() {
        if (this.mapboxRef) {
            this.mapboxRef.scrollZoom.disable();
            this.mapboxRef.boxZoom.disable();
            this.mapboxRef.dragRotate.disable();
            this.mapboxRef.dragPan.disable();
            this.mapboxRef.keyboard.disable();
            this.mapboxRef.doubleClickZoom.disable();
            this.mapboxRef.touchZoomRotate.disable();
        }
    }
    enableMapInteractions() {
        if (this.mapboxRef) {
            this.mapboxRef.scrollZoom.enable();
            this.mapboxRef.boxZoom.enable();
            this.mapboxRef.dragRotate.enable();
            this.mapboxRef.dragPan.enable();
            this.mapboxRef.keyboard.enable();
            this.mapboxRef.doubleClickZoom.enable();
            this.mapboxRef.touchZoomRotate.enable();
        }
    }
}
AccommodationMapComponent.ɵfac = function AccommodationMapComponent_Factory(t) { return new (t || AccommodationMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_4__.SearchDataService)); };
AccommodationMapComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AccommodationMapComponent, selectors: [["tz-accommodation-map"]], viewQuery: function AccommodationMapComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.mapBoxContainer = _t.first);
    } }, hostBindings: function AccommodationMapComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function AccommodationMapComponent_click_HostBindingHandler($event) { return ctx.onClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresolveDocument"]);
    } }, inputs: { accommodation: "accommodation", searchInfo: "searchInfo" }, decls: 6, vars: 12, consts: [[1, "accommodation-map-container", 3, "ngClass"], ["mapBoxContainer", ""], [3, "zoom", "fitBounds", "fitBoundsOptions", "mapLoad"], [3, "lngLat", 4, "ngFor", "ngForOf"], ["class", "hotel-loc-panel", 4, "ngIf"], [4, "ngIf"], [3, "lngLat"], [1, "marker-icon", 3, "icon"], [1, "hotel-loc-panel"], [1, "loc-label", "hotel"], [1, "loc-label", "distance-line"], [1, "loc-label", "search-point"], [1, "map-action-btn", "expand-shrink-btn", 3, "click"], [1, "zoom-in-out"], [1, "map-action-btn", "zoom-out", 3, "click"], [1, "map-action-btn", "zoom-in", 3, "click"]], template: function AccommodationMapComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0, 1)(2, "mgl-map", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("mapLoad", function AccommodationMapComponent_Template_mgl_map_mapLoad_2_listener($event) { return ctx.onMapLoad($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AccommodationMapComponent_mgl_marker_3_Template, 2, 2, "mgl-marker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AccommodationMapComponent_div_4_Template, 11, 7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, AccommodationMapComponent_ng_container_5_Template, 5, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c1, ctx.mapExpanded));
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵstyleMap"](ctx.mapStyle);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("zoom", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](11, _c2))("fitBounds", ctx.fitBounds)("fitBoundsOptions", ctx.fitBoundsOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.markers);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.locationInfo.distance !== 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.mapboxRef);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_9__.MapComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_9__.MarkerComponent, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_5__.TzIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf], pipes: [_shared_pipes_distance_pipe__WEBPACK_IMPORTED_MODULE_6__.DistancePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe], styles: ["[_nghost-%COMP%]   .expand-shrink-btn[_ngcontent-%COMP%] {\n  top: 0.625rem;\n  right: 0.625rem;\n  background-image: url(/assets/icons/web/img/icons/Map-Fullscreen.png);\n}\n[_nghost-%COMP%]   .accommodation-map-container[_ngcontent-%COMP%] {\n  position: relative;\n  height: 13.125rem;\n}\n[_nghost-%COMP%]   .accommodation-map-container.expanded[_ngcontent-%COMP%]   .expand-shrink-btn[_ngcontent-%COMP%] {\n  background-image: url(/assets/icons/web/img/icons/Map-Full-Exit.png);\n}\n[_nghost-%COMP%]   .accommodation-map-container[_ngcontent-%COMP%]   mgl-map[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n[_nghost-%COMP%]   .hotel-loc-panel[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.625rem;\n  left: 0.625rem;\n  width: 12.5rem;\n  padding: 0.625rem;\n  background: var(--color-primary-white);\n}\n[_nghost-%COMP%]   .hotel-loc-panel[_ngcontent-%COMP%]   .loc-label[_ngcontent-%COMP%] {\n  color: var(--color-dark-gray);\n  font-weight: var(--font-weight-semibold);\n  line-height: 1.5rem;\n  font-size: 0.875rem;\n  display: flex;\n}\n[_nghost-%COMP%]   .hotel-loc-panel[_ngcontent-%COMP%]   .loc-label[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  width: 8.438rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   .hotel-loc-panel[_ngcontent-%COMP%]   .loc-label[_ngcontent-%COMP%]::before {\n  content: \" \";\n  display: inline-block;\n  width: 1.5rem;\n  height: 1.5rem;\n  background-repeat: no-repeat;\n  background-size: contain;\n  background-position: center;\n  margin-right: 0.625rem;\n}\n[_nghost-%COMP%]   .hotel-loc-panel[_ngcontent-%COMP%]   .loc-label.hotel[_ngcontent-%COMP%]::before {\n  background-image: url(/assets/icons/web/icons/marker_purple.svg);\n}\n[_nghost-%COMP%]   .hotel-loc-panel[_ngcontent-%COMP%]   .loc-label.search-point[_ngcontent-%COMP%]::before {\n  background-image: url(/assets/icons/web/icons/marker_orange.svg);\n}\n[_nghost-%COMP%]   .hotel-loc-panel[_ngcontent-%COMP%]   .loc-label.distance-line[_ngcontent-%COMP%] {\n  margin: 0.3rem 0 0.3rem 11px;\n  padding-left: 1.25rem;\n  line-height: 2rem;\n  color: var(--color-text-light-gray);\n  font-weight: var(--font-weight-regular);\n  border-left: 2px var(--color-element-gray-border) solid;\n}\n[_nghost-%COMP%]   .hotel-loc-panel[_ngcontent-%COMP%]   .loc-label.distance-line[_ngcontent-%COMP%]::before {\n  content: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tbWFwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFDQSxxRUFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0FBREo7QUFHTTtFQUNFLG9FQUFBO0FBRFI7QUFLSTtFQUNFLGNBQUE7RUFDQSxlQUFBO0FBSE47QUFPRTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxzQ0FBQTtBQUxKO0FBT0k7RUFDRSw2QkFBQTtFQUNBLHdDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFMTjtBQU9NO0VBQ0UsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQUxSO0FBUU07RUFDRSxZQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDRCQUFBO0VBQ0Esd0JBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0FBTlI7QUFTTTtFQUNFLGdFQUFBO0FBUFI7QUFTTTtFQUNFLGdFQUFBO0FBUFI7QUFVTTtFQUNFLDRCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1DQUFBO0VBQ0EsdUNBQUE7RUFDQSx1REFBQTtBQVJSO0FBVVE7RUFDRSxhQUFBO0FBUlYiLCJmaWxlIjoiYWNjb21tb2RhdGlvbi1tYXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIC5leHBhbmQtc2hyaW5rLWJ0biB7XG4gICAgdG9wOiAwLjYyNXJlbTtcbiAgICByaWdodDogMC42MjVyZW07XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaWNvbnMvd2ViL2ltZy9pY29ucy9NYXAtRnVsbHNjcmVlbi5wbmcpO1xuICB9XG5cbiAgLmFjY29tbW9kYXRpb24tbWFwLWNvbnRhaW5lciB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogMTMuMTI1cmVtO1xuICAgICYuZXhwYW5kZWQge1xuICAgICAgLmV4cGFuZC1zaHJpbmstYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaWNvbnMvd2ViL2ltZy9pY29ucy9NYXAtRnVsbC1FeGl0LnBuZyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWdsLW1hcCB7XG4gICAgICB3aWR0aDogaW5oZXJpdDtcbiAgICAgIGhlaWdodDogaW5oZXJpdDtcbiAgICB9XG4gIH1cblxuICAuaG90ZWwtbG9jLXBhbmVsIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwLjYyNXJlbTtcbiAgICBsZWZ0OiAwLjYyNXJlbTtcbiAgICB3aWR0aDogMTIuNXJlbTtcbiAgICBwYWRkaW5nOiAwLjYyNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcblxuICAgIC5sb2MtbGFiZWwge1xuICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstZ3JheSk7XG4gICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICBzcGFuIHtcbiAgICAgICAgd2lkdGg6IDguNDM4cmVtO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cblxuICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuICAgICAgfVxuXG4gICAgICAmLmhvdGVsOjpiZWZvcmUge1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaWNvbnMvbWFya2VyX3B1cnBsZS5zdmcpO1xuICAgICAgfVxuICAgICAgJi5zZWFyY2gtcG9pbnQ6OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ljb25zL3dlYi9pY29ucy9tYXJrZXJfb3JhbmdlLnN2Zyk7XG4gICAgICB9XG5cbiAgICAgICYuZGlzdGFuY2UtbGluZSB7XG4gICAgICAgIG1hcmdpbjogMC4zcmVtIDAgMC4zcmVtIDExcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMS4yNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWxpZ2h0LWdyYXkpO1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAycHggdmFyKC0tY29sb3ItZWxlbWVudC1ncmF5LWJvcmRlcikgc29saWQ7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 88985:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/accommodation-nearby-places/accommodation-nearby-places.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationNearbyPlacesComponent": () => (/* binding */ AccommodationNearbyPlacesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_distance_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pipes/distance.pipe */ 40350);






const _c0 = ["pointOfInterest"];
const _c1 = ["placeToEat"];

function AccommodationNearbyPlacesComponent_div_1_ng_container_3_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AccommodationNearbyPlacesComponent_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AccommodationNearbyPlacesComponent_div_1_ng_container_3_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "tzDistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const airport_r3 = ctx.$implicit;
    const first_r4 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !first_r4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", airport_r3.name, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, airport_r3.distance));
  }
}

function AccommodationNearbyPlacesComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AccommodationNearbyPlacesComponent_div_1_ng_container_3_Template, 6, 5, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r0.accommodationReviews.nearbyAirports);
  }
}

function AccommodationNearbyPlacesComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 10);
  }
}

function AccommodationNearbyPlacesComponent_ng_container_2_div_4_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AccommodationNearbyPlacesComponent_ng_container_2_div_4_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AccommodationNearbyPlacesComponent_ng_container_2_div_4_ng_container_4_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "tzDistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const place_r12 = ctx.$implicit;
    const first_r13 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !first_r13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", place_r12.name, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, place_r12.distance));
  }
}

function AccommodationNearbyPlacesComponent_ng_container_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AccommodationNearbyPlacesComponent_ng_container_2_div_4_ng_container_4_Template, 6, 5, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r7.accommodationReviews.nearbyAttractions);
  }
}

function AccommodationNearbyPlacesComponent_ng_container_2_div_5_ng_container_4_span_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1, ", ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }
}

function AccommodationNearbyPlacesComponent_ng_container_2_div_5_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AccommodationNearbyPlacesComponent_ng_container_2_div_5_ng_container_4_span_1_Template, 2, 0, "span", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "tzDistance");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const place_r17 = ctx.$implicit;
    const first_r18 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !first_r18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", place_r17.name, " \u2022 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 3, place_r17.distance));
  }
}

function AccommodationNearbyPlacesComponent_ng_container_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 5, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AccommodationNearbyPlacesComponent_ng_container_2_div_5_ng_container_4_Template, 6, 5, "ng-container", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r8.accommodationReviews.nearbyRestaurants);
  }
}

function AccommodationNearbyPlacesComponent_ng_container_2_div_6_a_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccommodationNearbyPlacesComponent_ng_container_2_div_6_a_1_Template_a_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
      return ctx_r21.showAll = !ctx_r21.showAll;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "GENERAL." + (ctx_r20.showAll ? "SHOW_LESS" : "SHOW_MORE")), " ");
  }
}

function AccommodationNearbyPlacesComponent_ng_container_2_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AccommodationNearbyPlacesComponent_ng_container_2_div_6_a_1_Template, 3, 3, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r9.totalLines > 2);
  }
}

const _c2 = function (a0) {
  return {
    "limit-nearby-options": a0
  };
};

function AccommodationNearbyPlacesComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AccommodationNearbyPlacesComponent_ng_container_2_div_1_Template, 1, 0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](4, AccommodationNearbyPlacesComponent_ng_container_2_div_4_Template, 5, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, AccommodationNearbyPlacesComponent_ng_container_2_div_5_Template, 5, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](6, AccommodationNearbyPlacesComponent_ng_container_2_div_6_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 5, ctx_r1.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](9, _c2, !ctx_r1.showAll));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.accommodationReviews.nearbyAttractions.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.accommodationReviews.nearbyRestaurants.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 7, ctx_r1.platformService.isMobileDevice$) === false);
  }
}

class AccommodationNearbyPlacesComponent {
  constructor(platformService) {
    this.platformService = platformService;
    this.showAll = true;
    this.totalLines = 0;
  }

  ngAfterViewInit() {
    var _a, _b;

    const lines = el => {
      if (!el) {
        return 0;
      }

      const lineHeight = 24;
      return el.offsetHeight / lineHeight;
    };

    this.totalLines = Math.max(lines((_a = this.pointOfInterest) === null || _a === void 0 ? void 0 : _a.nativeElement), lines((_b = this.placeToEat) === null || _b === void 0 ? void 0 : _b.nativeElement));
    this.showAll = false;
  }

}

AccommodationNearbyPlacesComponent.ɵfac = function AccommodationNearbyPlacesComponent_Factory(t) {
  return new (t || AccommodationNearbyPlacesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_0__.PlatformService));
};

AccommodationNearbyPlacesComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
  type: AccommodationNearbyPlacesComponent,
  selectors: [["tz-accommodation-nearby-places"]],
  viewQuery: function AccommodationNearbyPlacesComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.pointOfInterest = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.placeToEat = _t.first);
    }
  },
  inputs: {
    accommodationReviews: "accommodationReviews"
  },
  decls: 3,
  vars: 2,
  consts: [[1, "acc-nearby-container"], ["class", "acc-nearby", 4, "ngIf"], [4, "ngIf"], [1, "acc-nearby"], ["translate", "HOTELS.AIRPORTS", 1, "body-2-semibold", "acc-nearby__title"], [1, "body-2-semibold", "acc-nearby__text"], [4, "ngFor", "ngForOf"], [1, "distance"], ["class", "nearby-title", "translate", "HOTELS.NEARBY", 4, "ngIf"], [1, "nearby-options", 3, "ngClass"], ["translate", "HOTELS.NEARBY", 1, "nearby-title"], ["translate", "HOTELS.POINTS_OF_INTEREST", 1, "body-2-semibold", "acc-nearby__title"], ["pointOfInterest", ""], ["translate", "HOTELS.PLACES_TO_EAT", 1, "body-2-semibold", "acc-nearby__title"], ["placeToEat", ""], ["class", "show-more-btn", 3, "click", 4, "ngIf"], [1, "show-more-btn", 3, "click"]],
  template: function AccommodationNearbyPlacesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, AccommodationNearbyPlacesComponent_div_1_Template, 4, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, AccommodationNearbyPlacesComponent_ng_container_2_Template, 8, 11, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.accommodationReviews.nearbyAirports.length > 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.accommodationReviews.nearbyAttractions && (ctx.accommodationReviews.nearbyAttractions.length > 0 || ctx.accommodationReviews.nearbyRestaurants.length > 0));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass],
  pipes: [_shared_pipes_distance_pipe__WEBPACK_IMPORTED_MODULE_1__.DistancePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe],
  styles: [".acc-nearby-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n}\n\n.nearby-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: var(--font-weight-bold);\n  margin: 0.313rem 0 0.625rem;\n}\n\n.nearby-options[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n@media (max-width: 920px) {\n  .nearby-options[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n\n.nearby-options[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.nearby-options[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1rem;\n}\n\n.acc-nearby[_ngcontent-%COMP%] {\n  margin-bottom: 1rem;\n}\n\n.acc-nearby__title[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n  line-height: 1.25rem;\n}\n\n.acc-nearby__text[_ngcontent-%COMP%] {\n  color: var(--color-dark-gray);\n  font-size: 0.75rem;\n  font-weight: var(--font-weight-normal);\n  line-height: 1.5rem;\n}\n\n.acc-nearby__text[_ngcontent-%COMP%]   .distance[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-regular);\n}\n\n.limit-nearby-options[_ngcontent-%COMP%]   .acc-nearby__text[_ngcontent-%COMP%] {\n  max-height: 3rem;\n  overflow-y: hidden;\n}\n\n.show-more-btn[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: var(--color-main-purple);\n  cursor: pointer;\n}\n\n@media not all and (hover: none) {\n  .show-more-btn[_ngcontent-%COMP%]:hover {\n    color: var(--color-main-hover-purple);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tbmVhcmJ5LXBsYWNlcy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksZ0JBQUE7QUFESjs7QUFJQTtFQUNJLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLDJCQUFBO0FBREo7O0FBSUE7RUFDSSxhQUFBO0FBREo7O0FDd0NJO0VEeENKO0lBSVEsc0JBQUE7RUFBTjtBQUNGOztBQUVJO0VBQ0ksT0FBQTtBQUFSOztBQUVRO0VBQ0ksaUJBQUE7QUFBWjs7QUFLQTtFQUNJLG1CQUFBO0FBRko7O0FBSUk7RUFDSSxxQkFBQTtFQUNBLG9CQUFBO0FBRlI7O0FBS0k7RUFDSSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtBQUhSOztBQUtRO0VBQ0ksdUNBQUE7QUFIWjs7QUFRQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFMSjs7QUFRQTtFQUNJLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0FBTEo7O0FDbUJJO0VBQ0k7SURaQSxxQ0FBQTtFQUpOO0FBQ0YiLCJmaWxlIjoiYWNjb21tb2RhdGlvbi1uZWFyYnktcGxhY2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG4uYWNjLW5lYXJieS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDFyZW07XG59XG5cbi5uZWFyYnktdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgbWFyZ2luOiAwLjMxM3JlbSAwIDAuNjI1cmVtO1xufVxuXG4ubmVhcmJ5LW9wdGlvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgID4qIHtcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYWNjLW5lYXJieSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICB9XG5cbiAgICAmX190ZXh0IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstZ3JheSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG5cbiAgICAgICAgLmRpc3RhbmNlIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuLmxpbWl0LW5lYXJieS1vcHRpb25zIC5hY2MtbmVhcmJ5X190ZXh0IHtcbiAgICBtYXgtaGVpZ2h0OiAzcmVtO1xuICAgIG92ZXJmbG93LXk6IGhpZGRlbjtcbn1cblxuLnNob3ctbW9yZS1idG4ge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgIEBpbmNsdWRlIG9uLWhvdmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4taG92ZXItcHVycGxlKTtcbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 55944:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/accommodation-recommended/accommodation-recommended.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationRecommendedComponent": () => (/* binding */ AccommodationRecommendedComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_directives_hotel_image_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/directives/hotel-image.directive */ 4689);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../shared/pipes/tz-date.pipe */ 92456);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../shared/pipes/tz-currency.pipe */ 98967);











function AccommodationRecommendedComponent_div_0_div_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const room_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("x ", room_r4.allotment, "");
  }
}

function AccommodationRecommendedComponent_div_0_div_4_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "HOTELS." + (ctx_r6.userService.IsLogged() ? "TZ_EXCLUSIVE_OFFER" : "TZ_SPECIAL_OFFER")), " ");
  }
}

const _c0 = function (a0) {
  return {
    "green-color": a0
  };
};

function AccommodationRecommendedComponent_div_0_div_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const room_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, room_r4.offer.mealTypeCode !== "nomeal" && room_r4.offer.mealTypeCode !== "RO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", room_r4.offer.meal, " ");
  }
}

function AccommodationRecommendedComponent_div_0_div_4_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccommodationRecommendedComponent_div_0_div_4_div_13_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r15);
      const room_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r13.onOpenTermsModal(room_r4.offer);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "HOTELS.TERMS_CONDITIONS"), " ");
  }
}

function AccommodationRecommendedComponent_div_0_div_4_ng_container_15_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "tz-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}

function AccommodationRecommendedComponent_div_0_div_4_ng_container_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AccommodationRecommendedComponent_div_0_div_4_ng_container_15_ng_container_1_Template, 2, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const room_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r9.roomCapacity(room_r4.offer.capacity));
  }
}

function AccommodationRecommendedComponent_div_0_div_4_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "tz-icon", 24)(2, "tz-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const room_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](room_r4.capacity);
  }
}

const _c1 = function (a0) {
  return {
    date: a0
  };
};

function AccommodationRecommendedComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccommodationRecommendedComponent_div_0_div_4_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const room_r4 = restoredCtx.$implicit;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r20.scrollToRoom(room_r4.roomId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 13)(4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccommodationRecommendedComponent_div_0_div_4_Template_div_click_4_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r21);
      const room_r4 = restoredCtx.$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r22.scrollToRoom(room_r4.roomId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, AccommodationRecommendedComponent_div_0_div_4_span_6_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AccommodationRecommendedComponent_div_0_div_4_div_7_Template, 3, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AccommodationRecommendedComponent_div_0_div_4_div_8_Template, 2, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "tzDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](13, AccommodationRecommendedComponent_div_0_div_4_div_13_Template, 3, 3, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AccommodationRecommendedComponent_div_0_div_4_ng_container_15_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](16, AccommodationRecommendedComponent_div_0_div_4_ng_container_16_Template, 5, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const room_r4 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("tzHotelImage", room_r4.image)("provider", ctx_r3.accommodation.imageProvider);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", room_r4.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", room_r4.allotment > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", room_r4.offer.hasPromotions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", room_r4.offer.meal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](17, _c0, room_r4.offer.roomCancellation.cancellationPolicy === "Refundable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](11, 11, room_r4.offer.roomCancellation.messageKey, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](19, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](12, 14, room_r4.offer.roomCancellation.endDateTime, "mediumDate"))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", room_r4.showTerms);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", room_r4.capacity <= 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", room_r4.capacity > 4);
  }
}

const _c2 = function (a0) {
  return {
    selected: a0
  };
};

function AccommodationRecommendedComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 3)(2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AccommodationRecommendedComponent_div_0_div_4_Template, 17, 21, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 6)(6, "div", 7)(7, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](19, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccommodationRecommendedComponent_div_0_Template_button_click_20_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r24);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r23.toggleSelection();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r0.recommendedTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.recommendedRooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r0.accommodation.numberOfNights, " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](9, 12, "GENERAL." + (ctx_r0.accommodation.numberOfNights > 1 ? "nights" : "night")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate4"](" ", ctx_r0.accommodation.numberOfRooms, " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](12, 14, ctx_r0.accommodation.numberOfRooms > 1 ? "HOTELS.ROOMS" : "HOTELS.ROOM"), ", ", ctx_r0.accommodation.numberOfGuests, " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 16, "TRAVELLER." + (ctx_r0.accommodation.numberOfGuests > 1 ? "PERSONS" : "PERSON")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 18, ctx_r0.accommodation.taxInfo));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](19, 20, ctx_r0.cheapestPrice.listPrice, ctx_r0.cheapestPrice.listPriceCur), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](25, _c2, ctx_r0.selectRecommended));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](22, 23, "GENERAL." + (ctx_r0.selectRecommended ? "SELECTED" : "SELECT")), " ");
  }
}

function AccommodationRecommendedComponent_ng_template_2_div_4_span_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const room_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("x ", room_r26.allotment, "");
  }
}

function AccommodationRecommendedComponent_ng_template_2_div_4_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "HOTELS." + (ctx_r28.userService.IsLogged() ? "TZ_EXCLUSIVE_OFFER" : "TZ_SPECIAL_OFFER")), " ");
  }
}

function AccommodationRecommendedComponent_ng_template_2_div_4_ng_container_8_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "tz-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }
}

function AccommodationRecommendedComponent_ng_template_2_div_4_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, AccommodationRecommendedComponent_ng_template_2_div_4_ng_container_8_ng_container_1_Template, 2, 0, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const room_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r29.roomCapacity(room_r26.offer.capacity));
  }
}

function AccommodationRecommendedComponent_ng_template_2_div_4_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "tz-icon", 24)(2, "tz-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "a");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const room_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](room_r26.capacity);
  }
}

function AccommodationRecommendedComponent_ng_template_2_div_4_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const room_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c0, room_r26.offer.mealTypeCode !== "nomeal" && room_r26.offer.mealTypeCode !== "RO"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", room_r26.offer.meal, " ");
  }
}

function AccommodationRecommendedComponent_ng_template_2_div_4_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccommodationRecommendedComponent_ng_template_2_div_4_div_15_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r41);
      const room_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r39.onOpenTermsModal(room_r26.offer);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "HOTELS.TERMS_CONDITIONS"), " ");
  }
}

function AccommodationRecommendedComponent_ng_template_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r43 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 10)(1, "div", 13)(2, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccommodationRecommendedComponent_ng_template_2_div_4_Template_div_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r43);
      const room_r26 = restoredCtx.$implicit;
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
      return ctx_r42.scrollToRoom(room_r26.roomId);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AccommodationRecommendedComponent_ng_template_2_div_4_span_4_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, AccommodationRecommendedComponent_ng_template_2_div_4_div_5_Template, 3, 3, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 32)(7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, AccommodationRecommendedComponent_ng_template_2_div_4_ng_container_8_Template, 2, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](9, AccommodationRecommendedComponent_ng_template_2_div_4_ng_container_9_Template, 5, 1, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, AccommodationRecommendedComponent_ng_template_2_div_4_div_10_Template, 2, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](14, "tzDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AccommodationRecommendedComponent_ng_template_2_div_4_div_15_Template, 3, 3, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const room_r26 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", room_r26.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", room_r26.allotment > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", room_r26.offer.hasPromotions);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", room_r26.capacity <= 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", room_r26.capacity > 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", room_r26.offer.meal);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](15, _c0, room_r26.offer.roomCancellation.cancellationPolicy === "Refundable"));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](13, 9, room_r26.offer.roomCancellation.messageKey, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](17, _c1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](14, 12, room_r26.offer.roomCancellation.endDateTime, "mediumDate"))), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", room_r26.showTerms);
  }
}

const _c3 = function (a0) {
  return {
    "room-selected": a0
  };
};

function AccommodationRecommendedComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 2)(1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, AccommodationRecommendedComponent_ng_template_2_div_4_Template, 16, 19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 26)(6, "div", 27)(7, "span", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](9, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "div", 29)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](18, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](21, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function AccommodationRecommendedComponent_ng_template_2_Template_button_click_21_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
      return ctx_r44.toggleSelection();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](23, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](24, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r2.recommendedTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.recommendedRooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](9, 12, ctx_r2.cheapestPrice.listPrice, ctx_r2.cheapestPrice.listPriceCur), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate2"](" ", ctx_r2.accommodation.numberOfNights, " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 15, "GENERAL." + (ctx_r2.accommodation.numberOfNights > 1 ? "nights" : "night")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate4"](" ", ctx_r2.accommodation.numberOfRooms, " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](16, 17, ctx_r2.accommodation.numberOfRooms > 1 ? "HOTELS.ROOMS" : "HOTELS.ROOM"), ", ", ctx_r2.accommodation.numberOfGuests, " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](17, 19, "TRAVELLER." + (ctx_r2.accommodation.numberOfGuests > 1 ? "PERSONS" : "PERSON")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](20, 21, ctx_r2.accommodation.taxInfo));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](25, _c3, ctx_r2.selectRecommended));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](23, 23, "GENERAL." + (ctx_r2.selectRecommended ? "SELECTED" : "SELECT")), " ");
  }
}

class AccommodationRecommendedComponent {
  constructor(translateService, userService, platformService) {
    this.translateService = translateService;
    this.userService = userService;
    this.platformService = platformService;
    this.selectRecommended = false;
    this.recommendedSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.openTermsModal = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.scrollTo = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    this.recommendedRooms = [];
    this.taxInfo = '';
    this.recommendedTitle = '';
  }

  ngOnInit() {
    this.initializeRecommendedComponent();
  }

  toggleSelection() {
    this.selectRecommended = !this.selectRecommended;
    this.recommendedSelected.emit(this.selectRecommended);
  }

  roomCapacity(capacity) {
    return new Array(capacity);
  }

  onOpenTermsModal(roomOption) {
    this.openTermsModal.emit(roomOption);
  }

  scrollToRoom(roomId) {
    this.scrollTo.emit(roomId);
  }

  checkShowTerms(roomOption) {
    return roomOption.roomCancellation.otherPolicies.length > 0 || roomOption.roomCancellation.cancellationPolicy === 'Non-refundable' || roomOption.roomCancellation.isFree && roomOption.roomCancellation.endDateTime !== '' || roomOption.payAt === 'Pay on arrival' || roomOption.discounts.length > 0 && (roomOption.packaging ? this.userService.IsLogged() : !roomOption.packaging);
  }

  newRoomInfo(room, offer, allotment) {
    return {
      roomId: room.id,
      name: room.displayName,
      image: room.images ? room.images[0] : '',
      allotment,
      offer,
      capacity: offer.capacity * allotment,
      showTerms: this.checkShowTerms(offer)
    };
  }

  initializeRecommendedComponent() {
    this.cheapestPrice = this.accommodation.cheapestPrice;
    this.taxInfo = this.accommodation.taxInfo;
    const numberOfGuests = this.accommodation.numberOfGuests;
    const txt = this.translateService.instant('HOTELS.RECOMMENDED_FOR');
    const personTxt = this.translateService.instant(numberOfGuests > 1 ? 'TRAVELLER.PERSONS' : 'TRAVELLER.PERSON');
    this.recommendedTitle = `${txt} ${numberOfGuests} ${personTxt}`;
    const recommendedRooms = {};
    let roomLeftToFind = this.accommodation.numberOfRooms;
    let recOffers = this.accommodation.recommendedRooms;

    if (this.userService.IsLogged() && this.accommodation.recOffersLoggedIn) {
      recOffers = this.accommodation.recRoomsLoggedIn;
      this.cheapestPrice = this.accommodation.recOffersLoggedIn.cheapestPrice;
      this.taxInfo = this.accommodation.recOffersLoggedIn.taxInfo;
    }

    recOffers.forEach(r => {
      recommendedRooms[r.offerId] = r.allotment;
    });
    this.accommodation.rooms.some(room => {
      room.roomOffers.some(offer => {
        if (recommendedRooms.hasOwnProperty(offer.id)) {
          const allotment = recommendedRooms[offer.id];
          this.recommendedRooms.push(this.newRoomInfo(room, offer, allotment));
          roomLeftToFind--;
        }

        return roomLeftToFind === 0;
      });
      return roomLeftToFind === 0;
    });
  }

}

AccommodationRecommendedComponent.ɵfac = function AccommodationRecommendedComponent_Factory(t) {
  return new (t || AccommodationRecommendedComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_1__.PlatformService));
};

AccommodationRecommendedComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: AccommodationRecommendedComponent,
  selectors: [["tz-accommodation-recommended"]],
  inputs: {
    accommodation: "accommodation",
    selectRecommended: "selectRecommended"
  },
  outputs: {
    recommendedSelected: "recommendedSelected",
    openTermsModal: "openTermsModal",
    scrollTo: "scrollTo"
  },
  decls: 4,
  vars: 4,
  consts: [["class", "recommended-rooms", 4, "ngIf", "ngIfElse"], ["recommendedRoomsMobile", ""], [1, "recommended-rooms"], [1, "recommended-rooms__content"], [1, "title"], ["class", "room-offer", 4, "ngFor", "ngForOf"], [1, "recommended-price-block"], ["data-test", "hotel-price-block-info", 1, "price-block-options"], ["data-test", "hotel-room-recommended-price", 1, "recommended-price"], ["data-test", "hotel-recommended-room-select-btn", 1, "select-btn", "recommended-select", 3, "ngClass", "click"], [1, "room-offer"], [1, "room-offer__img-conatiner", "pointer", 3, "click"], [3, "tzHotelImage", "provider"], [1, "room-offer__infos"], [1, "offer-name", "pointer", 3, "click"], [4, "ngIf"], ["class", "offer-info green-color", 4, "ngIf"], ["class", "offer-info", 3, "ngClass", 4, "ngIf"], [1, "offer-info", 3, "ngClass"], ["class", "offer-info tz-purple-link", 3, "click", 4, "ngIf"], [1, "room-offer__capacity-container"], [1, "offer-info", "green-color"], [1, "offer-info", "tz-purple-link", 3, "click"], [4, "ngFor", "ngForOf"], ["icon", "guest-16", 1, "capacity-icon"], ["icon", "Guest-Multiple", 1, "multiplayer-icon"], [1, "price-container"], [1, "price-container__block"], [1, "price-container__price"], [1, "price-container__per-room-info"], ["data-mob", "room-option-on-select-room", 1, "room-offer-select-btn", 3, "ngClass", "click"], [1, "mob-main-modal-header-bottom-divider"], [1, "room-offer__capacity-wrapper"], ["class", "offer-info__wrapper__T-C", "data-mob", "room-offer-wrapper-cancelation-policy", 3, "click", 4, "ngIf"], ["data-mob", "room-offer-wrapper-cancelation-policy", 1, "offer-info__wrapper__T-C", 3, "click"]],
  template: function AccommodationRecommendedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](0, AccommodationRecommendedComponent_div_0_Template, 23, 27, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, AccommodationRecommendedComponent_ng_template_2_Template, 25, 27, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](3);

      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 2, ctx.platformService.isMobileDevice$) === false)("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _shared_directives_hotel_image_directive__WEBPACK_IMPORTED_MODULE_2__.HotelImageDirective, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_3__.TzIconComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_4__.TzDatePipe, _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_5__.TzCurrencyPipe],
  styles: ["@charset \"UTF-8\";\n.recommended-rooms[_ngcontent-%COMP%] {\n  display: flex;\n}\n@media (max-width: 920px) {\n  .recommended-rooms[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.recommended-rooms__content[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  width: calc(100% - 12.1875rem);\n  border-right: 1px solid #e5e5e5;\n  margin-right: 0.9375rem;\n  padding-right: 1.25rem;\n}\n@media (max-width: 920px) {\n  .recommended-rooms__content[_ngcontent-%COMP%] {\n    padding: 0 0 0 1rem;\n    border: none;\n    width: 100%;\n  }\n}\n.recommended-rooms__content[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  padding-bottom: 0.125rem;\n}\n@media (max-width: 920px) {\n  .recommended-rooms[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    line-height: 1.125rem;\n    font-size: 0.875rem;\n    font-weight: 700;\n    height: 2rem;\n    color: var(--color-text-mobile);\n    padding: 0.4375rem 1rem;\n    border-bottom: 1px solid var(--upgrade-right-border);\n  }\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer[_ngcontent-%COMP%] {\n  display: flex;\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 20px;\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer__img-conatiner[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 7.313rem;\n  max-height: 5.625rem;\n  object-fit: cover;\n  margin-right: 1.25rem;\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer__infos[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer__infos[_ngcontent-%COMP%]   .offer-name[_ngcontent-%COMP%] {\n  font-size: 0.938rem;\n  line-height: 1.25rem;\n  margin-bottom: 3px;\n  font-weight: var(--font-weight-normal);\n}\n@media (max-width: 920px) {\n  .recommended-rooms[_ngcontent-%COMP%]   .room-offer__infos[_ngcontent-%COMP%]   .offer-name[_ngcontent-%COMP%] {\n    margin-bottom: 0.625rem;\n    line-height: 1rem;\n    font-size: 0.875rem;\n    font-weight: 500;\n    color: var(--color-text-mobile);\n  }\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer__infos[_ngcontent-%COMP%]   .offer-info[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.25rem;\n  font-weight: var(--font-weight-regular);\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer__infos[_ngcontent-%COMP%]   .offer-info[_ngcontent-%COMP%]::before {\n  content: \"\u2022\";\n  display: inline-block;\n  margin-right: 0.625rem;\n}\n@media (max-width: 920px) {\n  .recommended-rooms[_ngcontent-%COMP%]   .room-offer__infos[_ngcontent-%COMP%]   .offer-info[_ngcontent-%COMP%] {\n    line-height: 1rem;\n    font-size: 0.875;\n    font-weight: 400;\n    color: var(--color-text-mobile);\n  }\n  .recommended-rooms[_ngcontent-%COMP%]   .room-offer__infos[_ngcontent-%COMP%]   .offer-info[_ngcontent-%COMP%]::before {\n    content: none;\n  }\n  .recommended-rooms[_ngcontent-%COMP%]   .room-offer__infos[_ngcontent-%COMP%]   .offer-info__wrapper__T-C[_ngcontent-%COMP%] {\n    line-height: 0.875rem;\n    font-size: 0.75rem;\n    color: var(--color-main-purple);\n  }\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer__capacity-container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: 4rem;\n}\n@media (max-width: 920px) {\n  .recommended-rooms[_ngcontent-%COMP%]   .room-offer__capacity-container[_ngcontent-%COMP%] {\n    width: auto;\n  }\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer__capacity-container[_ngcontent-%COMP%]   .capacity-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n@media (max-width: 920px) {\n  .recommended-rooms[_ngcontent-%COMP%]   .room-offer__capacity-container[_ngcontent-%COMP%]   .capacity-icon[_ngcontent-%COMP%] {\n    width: 0.75rem;\n    height: 0.75rem;\n  }\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer__capacity-container[_ngcontent-%COMP%]   .multiplayer-icon[_ngcontent-%COMP%] {\n  width: 0.75rem;\n  height: 0.75rem;\n  margin: 0 0.25rem;\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer__capacity-container[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.813rem;\n  font-weight: var(--font-weight-bold);\n  color: var(--color-dark-gray);\n  font-style: normal;\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer[_ngcontent-%COMP%]   .green-color[_ngcontent-%COMP%] {\n  color: var(--ion-color-success-shade);\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer[_ngcontent-%COMP%]   .purple-color[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n@media (max-width: 920px) {\n  .recommended-rooms[_ngcontent-%COMP%]   .room-offer[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    padding: 0.75rem 0;\n    padding-bottom: 0.5rem;\n    border-bottom: 1px solid var(--upgrade-right-border);\n  }\n  .recommended-rooms[_ngcontent-%COMP%]   .room-offer[_ngcontent-%COMP%]:last-child {\n    border: 0;\n  }\n  .recommended-rooms[_ngcontent-%COMP%]   .room-offer__capacity-wrapper[_ngcontent-%COMP%] {\n    display: flex;\n    gap: 0.5rem;\n  }\n  .recommended-rooms[_ngcontent-%COMP%]   .room-offer[_ngcontent-%COMP%]   .trazler-icon-container[_ngcontent-%COMP%] {\n    width: 0.75rem;\n    height: 0.75rem;\n  }\n}\n.recommended-rooms[_ngcontent-%COMP%]   .recommended-price-block[_ngcontent-%COMP%] {\n  width: 11.25rem;\n  display: flex;\n  flex-direction: column;\n}\n.recommended-rooms[_ngcontent-%COMP%]   .recommended-price-block[_ngcontent-%COMP%]   .price-block-options[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.25rem;\n  text-align: right;\n  color: var(--color-text-light-gray);\n}\n.recommended-rooms[_ngcontent-%COMP%]   .recommended-price-block[_ngcontent-%COMP%]   .recommended-price[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  text-align: right;\n  margin: auto 0 1rem;\n}\n.recommended-rooms[_ngcontent-%COMP%]   .recommended-price-block[_ngcontent-%COMP%]   .recommended-select[_ngcontent-%COMP%] {\n  width: 7.5rem;\n  margin: auto 0 0 auto;\n  white-space: nowrap;\n}\n.recommended-rooms[_ngcontent-%COMP%]   .price-container[_ngcontent-%COMP%] {\n  text-align: right;\n  background-color: var(--color-main-blue-light);\n  padding: 0.4375rem 1rem;\n}\n.recommended-rooms[_ngcontent-%COMP%]   .price-container__left-rooms[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.6875rem;\n  line-height: 0.8125rem;\n  color: var(--color-red-mobile);\n}\n.recommended-rooms[_ngcontent-%COMP%]   .price-container__price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.125rem;\n  line-height: 1.3125rem;\n  color: var(--ion-color-primary);\n}\n.recommended-rooms[_ngcontent-%COMP%]   .price-container__per-room-info[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 0.6875rem;\n  font-style: italic;\n  line-height: 0.8125rem;\n  color: var(--color-grey-mobile);\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-offer-select-btn[_ngcontent-%COMP%] {\n  margin: 0.5rem 1rem;\n  height: 2.5rem;\n  width: calc(100% - 2rem);\n  background: transparent;\n  border: 0.0625rem solid var(--color-gray-light);\n  border-radius: 0.25rem;\n  color: var(--color-grey-light-mobile);\n}\n.recommended-rooms[_ngcontent-%COMP%]   .room-selected[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.25rem;\n  background: var(--color-yellow-selected);\n  color: var(--color-main-text-mobile);\n}\n.recommended-rooms[_ngcontent-%COMP%]   .mob-main-modal-header-bottom-divider[_ngcontent-%COMP%] {\n  background-color: var(--color-main-background-mobile);\n  height: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tcmVjb21tZW5kZWQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUFFaEI7RUFDSSxhQUFBO0FBQUo7QUNpREk7RURsREo7SUFJUSxzQkFBQTtFQUNOO0FBQ0Y7QUFDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLE9BQUE7RUFDQSw4QkFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUNSO0FDbUNJO0VEM0NBO0lBVVEsbUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQUVWO0FBQ0Y7QUFBUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtBQUVaO0FDdUJJO0VEckJBO0lBRVEscUJBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsWUFBQTtJQUNBLCtCQUFBO0lBQ0EsdUJBQUE7SUFDQSxvREFBQTtFQUFWO0FBQ0Y7QUFHSTtFQUNJLGFBQUE7QUFEUjtBQUdRO0VBQ0ksZ0JBQUE7QUFEWjtBQUlRO0VBQ0ksZUFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxxQkFBQTtBQUZaO0FBS1E7RUFDSSxPQUFBO0FBSFo7QUFLWTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBSGhCO0FDVEk7RURRUTtJQU9RLHVCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsK0JBQUE7RUFGbEI7QUFDRjtBQUtZO0VBQ0ksa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVDQUFBO0FBSGhCO0FBS2dCO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7QUFIcEI7QUM1Qkk7RUR1QlE7SUFZUSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSwrQkFBQTtFQUhsQjtFQUlrQjtJQUNJLGFBQUE7RUFGdEI7RUFJa0I7SUFDSSxxQkFBQTtJQUNBLGtCQUFBO0lBQ0EsK0JBQUE7RUFGdEI7QUFDRjtBQU9RO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQUxaO0FDakRJO0VEbURJO0lBTVEsV0FBQTtFQUpkO0FBQ0Y7QUFNWTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBSmhCO0FDMURJO0VENERRO0lBS1EsY0FBQTtJQUNBLGVBQUE7RUFIbEI7QUFDRjtBQU1ZO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUpoQjtBQU9ZO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDZCQUFBO0VBQ0Esa0JBQUE7QUFMaEI7QUFTUTtFQUNJLHFDQUFBO0FBUFo7QUFVUTtFQUNJLCtCQUFBO0FBUlo7QUNqRkk7RURUQTtJQXNHUSxvQkFBQTtJQUNBLGtCQUFBO0lBQ0Esc0JBQUE7SUFDQSxvREFBQTtFQVJWO0VBU1U7SUFDSSxTQUFBO0VBUGQ7RUFTVTtJQUNJLGFBQUE7SUFDQSxXQUFBO0VBUGQ7RUFTVTtJQUNJLGNBQUE7SUFDQSxlQUFBO0VBUGQ7QUFDRjtBQVdJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQVRSO0FBV1E7RUFDSSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQ0FBQTtBQVRaO0FBWVE7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtBQVZaO0FBYVE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtBQVhaO0FBZUk7RUFDSSxpQkFBQTtFQUNBLDhDQUFBO0VBQ0EsdUJBQUE7QUFiUjtBQWVRO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7QUFiWjtBQWdCUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FBZFo7QUFpQlE7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FBZlo7QUFrQkk7RUFDSSxtQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0NBQUE7RUFDQSxzQkFBQTtFQUNBLHFDQUFBO0FBaEJSO0FBa0JJO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtBQWhCUjtBQWtCSTtFQUNJLHFEQUFBO0VBQ0EsZUFBQTtBQWhCUiIsImZpbGUiOiJhY2NvbW1vZGF0aW9uLXJlY29tbWVuZGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG4ucmVjb21tZW5kZWQtcm9vbXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgICZfX2NvbnRlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTIuMTg3NXJlbSk7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC45Mzc1cmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAxLjI1cmVtO1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAgMCAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuMTI1cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNDM3NXJlbSAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXVwZ3JhZGUtcmlnaHQtYm9yZGVyKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yb29tLW9mZmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAmX19pbWctY29uYXRpbmVyIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogNy4zMTNyZW07XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1LjYyNXJlbTtcbiAgICAgICAgICAgIG9iamVjdC1maXQ6IGNvdmVyO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9faW5mb3Mge1xuICAgICAgICAgICAgZmxleDogMTtcblxuICAgICAgICAgICAgLm9mZmVyLW5hbWUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45MzhyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogM3B4O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm9mZmVyLWluZm8ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG5cbiAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBcIuKAolwiO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzU7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBub25lO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICZfX3dyYXBwZXJfX1QtQyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJl9fY2FwYWNpdHktY29udGFpbmVyIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IDRyZW07XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5jYXBhY2l0eS1pY29uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMXJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG5cbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMC43NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLm11bHRpcGxheWVyLWljb24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMC43NXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgMC4yNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjgxM3JlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtYm9sZCk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstZ3JheSk7XG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmdyZWVuLWNvbG9yIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3Itc3VjY2Vzcy1zaGFkZSk7XG4gICAgICAgIH1cblxuICAgICAgICAucHVycGxlLWNvbG9yIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgbWFyZ2luOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLXVwZ3JhZGUtcmlnaHQtYm9yZGVyKTtcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJl9fY2FwYWNpdHktd3JhcHBlciB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBnYXA6IDAuNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC50cmF6bGVyLWljb24tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMC43NXJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuNzVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucmVjb21tZW5kZWQtcHJpY2UtYmxvY2sge1xuICAgICAgICB3aWR0aDogMTEuMjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgLnByaWNlLWJsb2NrLW9wdGlvbnMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LWxpZ2h0LWdyYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlY29tbWVuZGVkLXByaWNlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDAgMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5yZWNvbW1lbmRlZC1zZWxlY3Qge1xuICAgICAgICAgICAgd2lkdGg6IDcuNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0byAwIDAgYXV0bztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAucHJpY2UtY29udGFpbmVyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4tYmx1ZS1saWdodCk7XG4gICAgICAgIHBhZGRpbmc6IDAuNDM3NXJlbSAxcmVtO1xuICAgIFxuICAgICAgICAmX19sZWZ0LXJvb21zIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjgxMjVyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcmVkLW1vYmlsZSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgJl9fcHJpY2Uge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zMTI1cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAmX19wZXItcm9vbS1pbmZvIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjgxMjVyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleS1tb2JpbGUpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC5yb29tLW9mZmVyLXNlbGVjdC1idG4ge1xuICAgICAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDJyZW0pO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LWxpZ2h0LW1vYmlsZSk7XG4gICAgfVxuICAgIC5yb29tLXNlbGVjdGVkIHtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci15ZWxsb3ctc2VsZWN0ZWQpO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10ZXh0LW1vYmlsZSk7XG4gICAgfVxuICAgIC5tb2ItbWFpbi1tb2RhbC1oZWFkZXItYm90dG9tLWRpdmlkZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWJhY2tncm91bmQtbW9iaWxlKTtcbiAgICAgICAgaGVpZ2h0OiAwLjI1cmVtO1xuICAgIH1cbn1cbiIsIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 82310:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/accommodation-review-list/accommodation-review-list.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationReviewListComponent": () => (/* binding */ AccommodationReviewListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _skeletons_acc_detail_review_skeleton_loader_acc_detail_review_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../skeletons/acc-detail-review-skeleton-loader/acc-detail-review-skeleton-loader.component */ 18507);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/pipes/tz-date.pipe */ 92456);






function AccommodationReviewListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "HOTELS.REVIEWS.RECENT"), " ");
} }
function AccommodationReviewListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "HOTELS.REVIEWS.FROM_WEB"), " ");
} }
function AccommodationReviewListComponent_ng_container_3_div_1_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const review_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassMap"]("accommodation-review__flag fflag ff-sm fflag-" + review_r5.countryCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](review_r5.countryName);
} }
function AccommodationReviewListComponent_ng_container_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "div", 8)(2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "tzDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](7, "number");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](8, AccommodationReviewListComponent_ng_container_3_div_1_div_8_Template, 4, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const review_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 6, review_r5.reviewDate, "mediumDate"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](7, 9, review_r5.rating, "1.1-1"));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", review_r5.countryName && review_r5.countryCode);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("accommodation-review--text-mt", !(review_r5.countryName && review_r5.countryCode));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", review_r5.reviewText, " ");
} }
function AccommodationReviewListComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccommodationReviewListComponent_ng_container_3_div_1_Template, 11, 12, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.accommodationReviews);
} }
function AccommodationReviewListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "tz-acc-detail-review-skeleton-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
class AccommodationReviewListComponent {
    constructor(platformService) {
        this.platformService = platformService;
        this.skeletonLoading = false;
    }
    ngOnInit() { }
}
AccommodationReviewListComponent.ɵfac = function AccommodationReviewListComponent_Factory(t) { return new (t || AccommodationReviewListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_0__.PlatformService)); };
AccommodationReviewListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AccommodationReviewListComponent, selectors: [["tz-accommodation-review-list"]], inputs: { skeletonLoading: "skeletonLoading", accommodationReviews: "accommodationReviews" }, decls: 5, vars: 4, consts: [[1, "accommodation-reviews"], ["class", "accommodation-reviews__title", 4, "ngIf"], ["class", "accommodation-reviews__text", 4, "ngIf"], [4, "ngIf"], [1, "accommodation-reviews__title"], [1, "accommodation-reviews__text"], ["class", "accommodation-review", 4, "ngFor", "ngForOf"], [1, "accommodation-review"], [1, "flex", "accommodation-review__date-block"], [1, "accommodation-review__date"], [1, "accommodation-review__rating"], [1, "accommodation-review__text"], [1, "accommodation-review__county-name"]], template: function AccommodationReviewListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccommodationReviewListComponent_div_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AccommodationReviewListComponent_div_2_Template, 3, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AccommodationReviewListComponent_ng_container_3_Template, 2, 1, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AccommodationReviewListComponent_div_4_Template, 2, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.skeletonLoading && !ctx.platformService.isMobileDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.skeletonLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _skeletons_acc_detail_review_skeleton_loader_acc_detail_review_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_1__.AccDetailReviewSkeletonLoaderComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_2__.TzDatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_4__.DecimalPipe], styles: [".accommodation-reviews__title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.875rem;\n  color: var(--color-dark-gray);\n}\n.accommodation-reviews__text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 400;\n  line-height: 1.1875rem;\n  color: var(--color-light-gray);\n  margin-bottom: 1.5rem;\n}\n.accommodation-review[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n.accommodation-review__date-block[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n}\n.accommodation-review__date[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  line-height: 1.1875rem;\n  color: var(--color-light-gray);\n  text-transform: uppercase;\n}\n.accommodation-review__rating[_ngcontent-%COMP%] {\n  margin-left: auto;\n  font-size: 0.6875rem;\n  font-weight: 600;\n  color: var(--ion-color-primary);\n}\n.accommodation-review__flag[_ngcontent-%COMP%] {\n  margin-right: 8px;\n}\n.accommodation-review__county-name[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  line-height: 1.1875rem;\n  color: var(--ion-color-medium-tint);\n}\n.accommodation-review__text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  font-weight: 500;\n  line-height: 1.1875rem;\n  color: var(--ion-color-medium-shade);\n  margin-top: 2px;\n}\n.accommodation-review--text-mt[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tcmV2aWV3LWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtBQUFKO0FBR0U7RUFDRSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBREo7QUFNQTtFQUNFLHFCQUFBO0FBSEY7QUFLRTtFQUNFLGtCQUFBO0FBSEo7QUFNRTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0VBQ0EseUJBQUE7QUFKSjtBQU9FO0VBQ0UsaUJBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsK0JBQUE7QUFMSjtBQVFFO0VBQ0UsaUJBQUE7QUFOSjtBQVNFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7QUFQSjtBQVVFO0VBQ0Usa0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0NBQUE7RUFDQSxlQUFBO0FBUko7QUFXRTtFQUNFLG1CQUFBO0FBVEoiLCJmaWxlIjoiYWNjb21tb2RhdGlvbi1yZXZpZXctbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvbW1vZGF0aW9uLXJldmlld3Mge1xuICAmX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjg3NXJlbTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ncmF5KTtcbiAgfVxuXG4gICZfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE4NzVyZW07XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWdyYXkpO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxufVxuXG5cbi5hY2NvbW1vZGF0aW9uLXJldmlldyB7XG4gIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcblxuICAmX19kYXRlLWJsb2NrIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcHg7XG4gIH1cblxuICAmX19kYXRlIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xODc1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1ncmF5KTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgJl9fcmF0aW5nIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIH1cblxuICAmX19mbGFnIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgfVxuXG4gICZfX2NvdW50eS1uYW1lIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogMS4xODc1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXRpbnQpO1xuICB9XG5cbiAgJl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTg3NXJlbTtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgbWFyZ2luLXRvcDogMnB4O1xuICB9XG5cbiAgJi0tdGV4dC1tdCB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 11220:
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/accommodation-reviews-popup/accommodation-reviews-popup.component.ts ***!
  \*******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationReviewsPopupComponent": () => (/* binding */ AccommodationReviewsPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/tz-svg-icon/tz-svg-icon.component */ 28189);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _accommodation_review_list_accommodation_review_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../accommodation-review-list/accommodation-review-list.component */ 82310);






function AccommodationReviewsPopupComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "tz-accommodation-review-list", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("accommodationReviews", ctx_r0.accommodationReviews.recentReviews);
} }
const _c0 = function () { return { "width.px": 14, "height.px": 14 }; };
class AccommodationReviewsPopupComponent {
    constructor(data, mdDialogRef) {
        this.data = data;
        this.mdDialogRef = mdDialogRef;
        this.accommodationReviews = data.accommodationReviews;
    }
    onClose() {
        this.mdDialogRef.close();
    }
}
AccommodationReviewsPopupComponent.ɵfac = function AccommodationReviewsPopupComponent_Factory(t) { return new (t || AccommodationReviewsPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__.MatDialogRef)); };
AccommodationReviewsPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AccommodationReviewsPopupComponent, selectors: [["tz-accommodation-reviews-popup"]], decls: 4, vars: 3, consts: [[1, "accommodation-reviews-popup-block", "flex"], [1, "close-btn", 3, "click"], ["icon", "close-button", 3, "styles"], ["class", "accommodation-reviews-block", 4, "ngIf"], [1, "accommodation-reviews-block"], [3, "accommodationReviews"]], template: function AccommodationReviewsPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function AccommodationReviewsPopupComponent_Template_div_click_1_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "tz-svg-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AccommodationReviewsPopupComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.accommodationReviews);
    } }, directives: [_shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_0__.TzSvgIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _accommodation_review_list_accommodation_review_list_component__WEBPACK_IMPORTED_MODULE_1__.AccommodationReviewListComponent], styles: [".accommodation-reviews-popup-block[_ngcontent-%COMP%] {\n  position: relative;\n  padding-top: 2.25rem;\n  padding-bottom: 2.25rem;\n}\n.accommodation-reviews-popup-block[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 3px;\n  right: 1.5rem;\n  cursor: pointer;\n}\n.accommodation-reviews-block[_ngcontent-%COMP%] {\n  width: 13.9375rem;\n  margin-right: auto;\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tcmV2aWV3cy1wb3B1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtBQUNGO0FBQ0U7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBQUNKO0FBR0E7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFBRiIsImZpbGUiOiJhY2NvbW1vZGF0aW9uLXJldmlld3MtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb21tb2RhdGlvbi1yZXZpZXdzLXBvcHVwLWJsb2NrIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLXRvcDogMi4yNXJlbTtcbiAgcGFkZGluZy1ib3R0b206IDIuMjVyZW07XG5cbiAgLmNsb3NlLWJ0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogM3B4O1xuICAgIHJpZ2h0OiAxLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG59XG5cbi5hY2NvbW1vZGF0aW9uLXJldmlld3MtYmxvY2sge1xuICB3aWR0aDogMTMuOTM3NXJlbTtcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 50158:
/*!***************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/accommodation-rules/accommodation-rules.component.ts ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationRulesComponent": () => (/* binding */ AccommodationRulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/pipes/tz-date.pipe */ 92456);





function AccommodationRulesComponent_div_15_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 14);
} if (rf & 2) {
    const description_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", description_r4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function AccommodationRulesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AccommodationRulesComponent_div_15_div_3_Template, 1, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policyDescription_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](policyDescription_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", policyDescription_r2.descriptions);
} }
function AccommodationRulesComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6)(1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "tz-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 7)(4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "cancellation-prepayment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](6, 7, "HOTELS.RULES.CARD_ACCEPTED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate5"](" ", ctx_r1.hotelName, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 9, "HOTELS.RULES.CARD_ACCEPTED_BODY1"), " ", ctx_r1.hotelRules.cardsAcceptAtHotel, ". ", ctx_r1.hotelName, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 11, "HOTELS.RULES.CARD_ACCEPTED_BODY2"), " ");
} }
class AccommodationRulesComponent {
    constructor() { }
    ngOnInit() { }
}
AccommodationRulesComponent.ɵfac = function AccommodationRulesComponent_Factory(t) { return new (t || AccommodationRulesComponent)(); };
AccommodationRulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AccommodationRulesComponent, selectors: [["tz-accommodation-rules"]], inputs: { hotelName: "hotelName", checkIn: "checkIn", checkOut: "checkOut", hotelRules: "hotelRules" }, decls: 27, vars: 25, consts: [[1, "accommodation-details__hotel-rules-description-block"], [1, "accommodation-details__hotel-rules-description-icon"], ["className", "accommodation-details__hotel-rules-icon", 3, "icon"], [1, "accommodation-details__hotel-rules-description-text"], [1, "accommodation-details__hotel-rules-policy-desc-block"], ["class", "accommodation-details__hotel-rules-policy-desc-item", 4, "ngFor", "ngForOf"], [1, "accommodation-details__hotel-rules-description-block-desc"], [1, "accommodation-details__hotel-rules-description-text-content"], [1, "accommodation-details__hotel-rules-description-title"], [1, "accommodation-details__hotel-rules-description-block-text"], ["class", "accommodation-details__hotel-rules-description-block-desc", 4, "ngIf"], [1, "accommodation-details__hotel-rules-policy-desc-item"], [1, "accommodation-details__hotel-rules-policy-desc-title"], ["class", "accommodation-details__hotel-rules-policy-desc-content", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "accommodation-details__hotel-rules-policy-desc-content", 3, "innerHTML"]], template: function AccommodationRulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "tz-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](6, "tzDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 0)(8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "tz-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "tzDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](15, AccommodationRulesComponent_div_15_Template, 4, 2, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 6)(17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](18, "tz-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 7)(20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](22, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](25, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](26, AccommodationRulesComponent_div_26_Template, 11, 13, "div", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "check-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 11, "HOTELS.RULES.CHECK_IN_FROM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](6, 13, ctx.checkIn, "shortTime"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "check-out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 16, "HOTELS.RULES.CHECK_OUT_UNTIL"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](13, 18, ctx.checkOut, "shortTime"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.hotelRules.policyDescriptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "cards-accepted");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](22, 21, "HOTELS.RULES.CANCEL_PRE_PAY_TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](25, 23, "HOTELS.RULES.CANCEL_PRE_PAY_BODY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.hotelRules.cardsAcceptAtHotel);
    } }, directives: [_shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_0__.TzIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_1__.TzDatePipe], styles: [".accommodation-details__hotel-rules-block[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n  padding: 1.25rem;\n}\n.accommodation-details__hotel-rules-title[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin-bottom: 0.75rem;\n}\n.accommodation-details__hotel-rules-description-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-bottom: 0.625rem;\n}\n.accommodation-details__hotel-rules-description-block-desc[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  margin-top: 1.25rem;\n  padding-top: 1.31px;\n}\n.accommodation-details__hotel-rules-description-icon[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.accommodation-details__hotel-rules-description-icon[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.accommodation-details__hotel-rules-description-text[_ngcontent-%COMP%] {\n  margin-left: 0.65rem;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.5rem;\n}\n.accommodation-details__hotel-rules-description-text-content[_ngcontent-%COMP%] {\n  margin-left: 0.65rem;\n}\n.accommodation-details__hotel-rules-description-block-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: #828282;\n  margin-top: 0.5625rem;\n}\n.accommodation-details__hotel-rules-description-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.5rem;\n}\n.accommodation-details__hotel-rules-policy-desc-block[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  margin-bottom: 1.25rem;\n  padding-left: 2.1875rem;\n}\n.accommodation-details__hotel-rules-policy-desc-item[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.25rem;\n}\n.accommodation-details__hotel-rules-policy-desc-title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  font-weight: 500;\n  margin-bottom: 0.8rem;\n}\n.accommodation-details__hotel-rules-policy-desc-content[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  color: var(--ion-color-medium-shade);\n  line-height: 1.25rem;\n}\n[_nghost-%COMP%]     .accommodation-details__hotel-rules-policy-desc-content ul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]     .accommodation-details__hotel-rules-icon {\n  display: flex;\n  width: 1.5rem;\n  height: 1.5rem;\n}\n[_nghost-%COMP%]     .accommodation-details__hotel-rules-icon .trazler-icon-container__img {\n  max-width: 1.5rem;\n  max-height: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tcnVsZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDSSxzQkFBQTtFQUNBLGdCQUFBO0FBRFI7QUFJSTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBRlI7QUFLSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSFI7QUFNSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQU9JO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBTFI7QUFPUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0FBTFo7QUFTSTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUFI7QUFVSTtFQUNJLG9CQUFBO0FBUlI7QUFXSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBVFI7QUFZSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQVZSO0FBYUk7RUFDSSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUFYUjtBQWVRO0VBQ0ksc0JBQUE7QUFiWjtBQWlCSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtBQWZSO0FBa0JJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0Esb0JBQUE7QUFoQlI7QUFzQkk7RUFDSSxnQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBbkJSO0FBdUJBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0FBcEJKO0FBc0JJO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQXBCUiIsImZpbGUiOiJhY2NvbW1vZGF0aW9uLXJ1bGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY29tbW9kYXRpb24tZGV0YWlscyB7XG5cbiAgICAmX19ob3RlbC1ydWxlcy1ibG9jayB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgJl9faG90ZWwtcnVsZXMtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gICAgfVxuXG4gICAgJl9faG90ZWwtcnVsZXMtZGVzY3JpcHRpb24tYmxvY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICB9XG5cbiAgICAmX19ob3RlbC1ydWxlcy1kZXNjcmlwdGlvbi1ibG9jay1kZXNjIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG4gICAgICAgIHBhZGRpbmctdG9wOiAxLjMxcHg7XG4gICAgfVxuXG4gICAgJl9faG90ZWwtcnVsZXMtZGVzY3JpcHRpb24taWNvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgdHotaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ob3RlbC1ydWxlcy1kZXNjcmlwdGlvbi10ZXh0IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgfVxuXG4gICAgJl9faG90ZWwtcnVsZXMtZGVzY3JpcHRpb24tdGV4dC1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNjVyZW07XG4gICAgfVxuXG4gICAgJl9faG90ZWwtcnVsZXMtZGVzY3JpcHRpb24tYmxvY2stdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgY29sb3I6ICM4MjgyODI7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNTYyNXJlbTtcbiAgICB9XG5cbiAgICAmX19ob3RlbC1ydWxlcy1kZXNjcmlwdGlvbi10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgfVxuXG4gICAgJl9faG90ZWwtcnVsZXMtcG9saWN5LWRlc2MtYmxvY2sge1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIuMTg3NXJlbTtcbiAgICB9XG5cbiAgICAmX19ob3RlbC1ydWxlcy1wb2xpY3ktZGVzYy1pdGVtIHtcbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ob3RlbC1ydWxlcy1wb2xpY3ktZGVzYy10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC44cmVtO1xuICAgIH1cblxuICAgICZfX2hvdGVsLXJ1bGVzLXBvbGljeS1kZXNjLWNvbnRlbnQge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgfVxuXG59XG5cbjpob3N0IDo6bmctZGVlcCAuYWNjb21tb2RhdGlvbi1kZXRhaWxzX19ob3RlbC1ydWxlcy1wb2xpY3ktZGVzYy1jb250ZW50IHtcbiAgICB1bCB7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG59XG5cbjpob3N0IDo6bmctZGVlcCAuYWNjb21tb2RhdGlvbi1kZXRhaWxzX19ob3RlbC1ydWxlcy1pY29uIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG5cbiAgICAudHJhemxlci1pY29uLWNvbnRhaW5lcl9faW1nIHtcbiAgICAgICAgbWF4LXdpZHRoOiAxLjVyZW07XG4gICAgICAgIG1heC1oZWlnaHQ6IHVuc2V0O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 66821:
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/mob-accommodation-additional-info/mob-accommodation-additional-info.component.ts ***!
  \*******************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobAccommodationAdditionalInfoComponent": () => (/* binding */ MobAccommodationAdditionalInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);


function MobAccommodationAdditionalInfoComponent_ng_container_2_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const facilities_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", facilities_r1.description, " ");
} }
function MobAccommodationAdditionalInfoComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobAccommodationAdditionalInfoComponent_ng_container_2_p_1_Template, 2, 1, "p", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const facilities_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", facilities_r1.code !== "105");
} }
class MobAccommodationAdditionalInfoComponent {
    constructor() { }
    ngOnInit() {
        this.accommodationAdditionalInfo = this.data.accommodationAdditionalInfo;
    }
}
MobAccommodationAdditionalInfoComponent.ɵfac = function MobAccommodationAdditionalInfoComponent_Factory(t) { return new (t || MobAccommodationAdditionalInfoComponent)(); };
MobAccommodationAdditionalInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobAccommodationAdditionalInfoComponent, selectors: [["tz-mob-accommodation-additional-info"]], decls: 3, vars: 1, consts: [[1, "accommodation-additional-container"], [1, "accommodation-additional-info"], [4, "ngFor", "ngForOf"], [4, "ngIf"]], template: function MobAccommodationAdditionalInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobAccommodationAdditionalInfoComponent_ng_container_2_Template, 2, 1, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.accommodationAdditionalInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], styles: [".accommodation-additional-info[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1.25rem;\n  letter-spacing: 0.005em;\n  color: #202124;\n  padding: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1hY2NvbW1vZGF0aW9uLWFkZGl0aW9uYWwtaW5mby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUFDSiIsImZpbGUiOiJtb2ItYWNjb21tb2RhdGlvbi1hZGRpdGlvbmFsLWluZm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWNjb21tb2RhdGlvbi1hZGRpdGlvbmFsLWluZm8ge1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAwNWVtO1xuICAgIGNvbG9yOiAjMjAyMTI0O1xuICAgIHBhZGRpbmc6IDFyZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ 43789:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/mob-accommodation-room-details/mob-accommodation-room-details.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobAccommodationRoomDetailsComponent": () => (/* binding */ MobAccommodationRoomDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_filter_array_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/pipes/filter-array.pipe */ 98159);




function MobAccommodationRoomDetailsComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const roomDetail_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "HOTELS.OLERY." + roomDetail_r3.name), " ");
} }
function MobAccommodationRoomDetailsComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 8)(1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const roomDetail_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, "HOTELS.OLERY." + roomDetail_r4.name), " ");
} }
const _c0 = function () { return { sentiment: "positive" }; };
const _c1 = function () { return { sentiment: "negative" }; };
function MobAccommodationRoomDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MobAccommodationRoomDetailsComponent_div_0_div_5_Template, 4, 3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](6, "filterArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, MobAccommodationRoomDetailsComponent_div_0_div_7_Template, 4, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "filterArray");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 3, "HOTELS.SUMMARY"));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](6, 5, ctx_r0.roomDetails, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c0)));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 8, ctx_r0.roomDetails, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c1)));
} }
class MobAccommodationRoomDetailsComponent {
    constructor() { }
    ngOnInit() { }
}
MobAccommodationRoomDetailsComponent.ɵfac = function MobAccommodationRoomDetailsComponent_Factory(t) { return new (t || MobAccommodationRoomDetailsComponent)(); };
MobAccommodationRoomDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MobAccommodationRoomDetailsComponent, selectors: [["tz-mob-accommodation-room-details"]], inputs: { roomDetails: "roomDetails" }, decls: 1, vars: 1, consts: [["class", "accommodation-room-details", 4, "ngIf"], [1, "accommodation-room-details"], [1, "accommodation-room-details__title"], [1, "accommodation-room-details__description-room-details-block", "map-hidden"], ["class", "accommodation-room-details__description-room-detail room-detail room-detail-positive", 4, "ngFor", "ngForOf"], ["class", "accommodation-room-details__description-room-detail room-detail room-detail-negative", 4, "ngFor", "ngForOf"], [1, "accommodation-room-details__description-room-detail", "room-detail", "room-detail-positive"], [1, "text"], [1, "accommodation-room-details__description-room-detail", "room-detail", "room-detail-negative"]], template: function MobAccommodationRoomDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, MobAccommodationRoomDetailsComponent_div_0_Template, 9, 13, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roomDetails.length);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _shared_pipes_filter_array_pipe__WEBPACK_IMPORTED_MODULE_0__.FilterArrayPipe], styles: [".accommodation-room-details[_ngcontent-%COMP%] {\n  background: var(--color-primary-white);\n  padding: 0.625rem 1rem 0.125rem 1rem;\n  margin-bottom: 0.25rem;\n}\n.accommodation-room-details__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  margin-bottom: 1rem;\n  color: var(--color-text-mobile);\n  text-transform: lowercase;\n}\n.accommodation-room-details__title[_ngcontent-%COMP%]::first-letter {\n  text-transform: uppercase;\n}\n.accommodation-room-details__description-room-details-block[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n.accommodation-room-details__description-room-details-block[_ngcontent-%COMP%]   .room-detail[_ngcontent-%COMP%] {\n  height: 1.5rem;\n  font-weight: 500;\n  line-height: 1.5rem;\n  font-size: 0.625rem;\n  border-radius: 0.1875rem;\n  padding: 0 0.5625rem;\n  white-space: nowrap;\n  display: flex;\n  align-items: center;\n}\n.accommodation-room-details__description-room-details-block[_ngcontent-%COMP%]   .room-detail[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]::first-letter {\n  text-transform: uppercase;\n}\n.accommodation-room-details__description-room-details-block[_ngcontent-%COMP%]   .room-detail-positive[_ngcontent-%COMP%] {\n  color: var(--color-green-mobile);\n  border: 1px solid var(--color-green-mobile);\n}\n.accommodation-room-details__description-room-details-block[_ngcontent-%COMP%]   .room-detail-negative[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-red-mobile);\n  color: var(--color-red-mobile);\n}\n.accommodation-room-details__description-room-detail[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.accommodation-room-details__description-room-detail[_ngcontent-%COMP%]:not(:last-child) {\n  margin-right: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1hY2NvbW1vZGF0aW9uLXJvb20tZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHNDQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUFDUjtBQUVJO0VBQ0UseUJBQUE7QUFBTjtBQUdJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7QUFEUjtBQUdRO0VBQ0ksY0FBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQURaO0FBR1k7RUFDSSx5QkFBQTtBQURoQjtBQUtRO0VBQ0ksZ0NBQUE7RUFDQSwyQ0FBQTtBQUhaO0FBTVE7RUFDSSx5Q0FBQTtFQUNBLDhCQUFBO0FBSlo7QUFTSTtFQUNJLHFCQUFBO0FBUFI7QUFTUTtFQUNJLHFCQUFBO0FBUFoiLCJmaWxlIjoibW9iLWFjY29tbW9kYXRpb24tcm9vbS1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFjY29tbW9kYXRpb24tcm9vbS1kZXRhaWxzIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAxcmVtIDAuMTI1cmVtIDFyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4yNXJlbTtcblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgfVxuXG4gICAgJl9fdGl0bGU6OmZpcnN0LWxldHRlciB7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uLXJvb20tZGV0YWlscy1ibG9jayB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAucm9vbS1kZXRhaWwge1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42MjVyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjE4NzVyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDAuNTYyNXJlbTtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgXG4gICAgICAgICAgICAudGV4dDo6Zmlyc3QtbGV0dGVyIHtcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAucm9vbS1kZXRhaWwtcG9zaXRpdmUge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZWVuLW1vYmlsZSk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmVlbi1tb2JpbGUpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAucm9vbS1kZXRhaWwtbmVnYXRpdmUge1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcmVkLW1vYmlsZSk7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcmVkLW1vYmlsZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgfVxuXG4gICAgJl9fZGVzY3JpcHRpb24tcm9vbS1kZXRhaWwge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG5cbiAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ 27696:
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/mob-accommodation-room-offer-cancelation/mob-accommodation-room-offer-cancelation.component.ts ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobAccommodationRoomOfferCancelationComponent": () => (/* binding */ MobAccommodationRoomOfferCancelationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/pipes/tz-date.pipe */ 92456);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/pipes/tz-currency.pipe */ 98967);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/pipes/safe-html.pipe */ 66926);






function MobAccommodationRoomOfferCancelationComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const discount_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](discount_r6.name);
} }
function MobAccommodationRoomOfferCancelationComponent_div_1_div_2_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remark_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", remark_r7.content, " ");
} }
function MobAccommodationRoomOfferCancelationComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div")(1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MobAccommodationRoomOfferCancelationComponent_div_1_div_2_p_3_Template, 2, 1, "p", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const remark_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", remark_r7.Name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", remark_r7.content !== "");
} }
function MobAccommodationRoomOfferCancelationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MobAccommodationRoomOfferCancelationComponent_div_1_div_1_Template, 3, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MobAccommodationRoomOfferCancelationComponent_div_1_div_2_Template, 4, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.data.discounts);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.data.remarks);
} }
function MobAccommodationRoomOfferCancelationComponent_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 1, ctx_r1.policyMsg), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function MobAccommodationRoomOfferCancelationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "p", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const otherPolice_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, otherPolice_r10.msg), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
} }
function MobAccommodationRoomOfferCancelationComponent_p_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 1, "HOTELS.PayOnArrivalMsg"), " ");
} }
class MobAccommodationRoomOfferCancelationComponent {
    constructor(translateService, datePipe, tzCurrencyPipe) {
        this.translateService = translateService;
        this.datePipe = datePipe;
        this.tzCurrencyPipe = tzCurrencyPipe;
        this.otherPolicies = [];
        this.policyMsg = '';
    }
    ngOnInit() {
        this.otherPolicies = this.getOtherPolicies();
        this.policyMsg = this.getPoliceMsg();
    }
    getPoliceMsg() {
        const policy = this.data.roomCancellation;
        let policyMsg = '';
        if (!policy) {
            return policyMsg;
        }
        const isRefundable = policy.cancellationPolicy === 'Refundable';
        const info = this.formatDate(policy.endDateTime);
        if (!isRefundable || policy.isFree) {
            policyMsg = this.translateService.instant(`${policy.messageKey}_Msg`, info);
        }
        return policyMsg;
    }
    getOtherPolicies() {
        const policies = this.data.roomCancellation.otherPolicies;
        const checkInDateTime = this.data.checkInDateTime;
        const otherPoliciesArr = [];
        if (!Array.isArray(policies)) {
            return otherPoliciesArr;
        }
        policies.forEach((policy, i) => {
            let date = policy.startDateTime;
            let msg = 'CANCELLATION.PolicyMsg';
            if (i === 0 && !this.data.roomCancellation.isFree) {
                date = policy.endDateTime && policy.endDateTime !== '' ? policy.endDateTime : checkInDateTime;
                msg = 'CANCELLATION.RefundablePolicyMsg';
            }
            const price = this.tzCurrencyPipe.transform(policy.price.listPrice, policy.price.listPriceCur);
            const info = Object.assign({ price }, this.formatDate(date));
            otherPoliciesArr.push({
                msg: this.translateService.instant(msg, info),
            });
        });
        return otherPoliciesArr;
    }
    formatDate(dateTime) {
        const dateTimeRes = { date: '', time: '' };
        if (dateTime) {
            const date = this.datePipe.transform(dateTime, 'medium');
            dateTimeRes.date = date
                ? `${this.datePipe.transform(dateTime, 'mediumDate')} ${this.datePipe.transform(dateTime, 'shortTime')}`
                : '';
        }
        return dateTimeRes;
    }
}
MobAccommodationRoomOfferCancelationComponent.ɵfac = function MobAccommodationRoomOfferCancelationComponent_Factory(t) { return new (t || MobAccommodationRoomOfferCancelationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_0__.TzDatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_1__.TzCurrencyPipe)); };
MobAccommodationRoomOfferCancelationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MobAccommodationRoomOfferCancelationComponent, selectors: [["tz-mob-accommodation-room-offer-cancelation"]], inputs: { data: "data" }, decls: 5, vars: 4, consts: [[1, "mob-accommodation-room-offer-cancelation"], [4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [4, "ngFor", "ngForOf"], [3, "innerHTML"]], template: function MobAccommodationRoomOfferCancelationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MobAccommodationRoomOfferCancelationComponent_div_1_Template, 3, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, MobAccommodationRoomOfferCancelationComponent_p_2_Template, 2, 3, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, MobAccommodationRoomOfferCancelationComponent_div_3_Template, 3, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MobAccommodationRoomOfferCancelationComponent_p_4_Template, 3, 3, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.hasPromotions);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.policyMsg);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.otherPolicies);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.data.isPayOnArrival);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf], pipes: [_shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_2__.SafeHtmlPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe], styles: [".mob-accommodation-room-offer-cancelation[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.mob-accommodation-room-offer-cancelation[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-bottom: 0.5rem;\n  color: var(--color-grey-light-mobile);\n  font-size: 0.75rem;\n  line-height: 1.4063rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1hY2NvbW1vZGF0aW9uLXJvb20tb2ZmZXItY2FuY2VsYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFDSTtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxxQ0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7QUFDUiIsImZpbGUiOiJtb2ItYWNjb21tb2RhdGlvbi1yb29tLW9mZmVyLWNhbmNlbGF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vYi1hY2NvbW1vZGF0aW9uLXJvb20tb2ZmZXItY2FuY2VsYXRpb24ge1xuICAgIHBhZGRpbmc6IDFyZW07XG5cbiAgICBwIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleS1saWdodC1tb2JpbGUpO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQwNjNyZW07XG5cbiAgICB9XG59Il19 */"] });


/***/ }),

/***/ 14630:
/*!***********************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/mob-accommodation-rules/mob-accommodation-rules.component.ts ***!
  \***********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobAccommodationRulesComponent": () => (/* binding */ MobAccommodationRulesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/pipes/tz-date.pipe */ 92456);





function MobAccommodationRulesComponent_div_18_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "div", 21);
} if (rf & 2) {
    const description_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("innerHTML", description_r4, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeHtml"]);
} }
function MobAccommodationRulesComponent_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 18)(1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MobAccommodationRulesComponent_div_18_div_3_Template, 1, 1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const policyDescription_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](policyDescription_r2.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", policyDescription_r2.descriptions);
} }
function MobAccommodationRulesComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "tz-icon", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 15)(7, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "cancellation-prepayment");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 7, "HOTELS.RULES.CARD_ACCEPTED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate5"](" ", ctx_r1.accommodation.name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](9, 9, "HOTELS.RULES.CARD_ACCEPTED_BODY1"), " ", ctx_r1.accommodation.hotelRules.cardsAcceptAtHotel, ". ", ctx_r1.accommodation.name, " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](10, 11, "HOTELS.RULES.CARD_ACCEPTED_BODY2"), " ");
} }
class MobAccommodationRulesComponent {
    constructor() { }
    ngOnInit() {
        this.accommodation = this.data.accommodation;
    }
}
MobAccommodationRulesComponent.ɵfac = function MobAccommodationRulesComponent_Factory(t) { return new (t || MobAccommodationRulesComponent)(); };
MobAccommodationRulesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MobAccommodationRulesComponent, selectors: [["tz-mob-accommodation-rules"]], decls: 30, vars: 25, consts: [[1, "mob-accommodation-details"], [1, "mob-accommodation-details__wrapper"], [1, "mob-accommodation-details__wrapper_info"], [1, "mob-accommodation-details__hotel-rules-info-block", "flex"], [1, "mob-accommodation-details__hotel-rules-description-icon", "flex", "align-center"], ["className", "mob-accommodation-details__hotel-rules-icon", 3, "icon"], [1, "mob-accommodation-details__hotel-rules-description-text"], [1, "mob-accommodation-details__hotel-rules-info-block", "mb-125", "flex"], [1, "mob-accommodation-details__hotel-rules-description-icon", "flex", "flex-center"], [1, "mob-accommodation-details__hotel-rules-policy-desc-block"], ["class", "mob-accommodation-details__hotel-rules-policy-desc-item", 4, "ngFor", "ngForOf"], [1, "mob-accommodation-details__hotel-rules-description-block-desc"], [1, "mob-accommodation-details__hotel-rules-description-icon", "flex"], ["className", "accommodation-details__hotel-rules-icon", 3, "icon"], [1, "mob-accommodation-details__rules"], [1, "mob-accommodation-details__hotel-rules-description-text-content"], [1, "mob-accommodation-details__hotel-rules-description-block-text"], ["class", "mob-accommodation-details__hotel-rules-description-block-desc", 4, "ngIf"], [1, "mob-accommodation-details__hotel-rules-policy-desc-item"], [1, "mob-accommodation-details__title"], ["class", "mob-accommodation-details__hotel-rules-policy-desc-content", 3, "innerHTML", 4, "ngFor", "ngForOf"], [1, "mob-accommodation-details__hotel-rules-policy-desc-content", 3, "innerHTML"]], template: function MobAccommodationRulesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "tz-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](9, "tzDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "tz-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](16, "tzDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](17, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, MobAccommodationRulesComponent_div_18_Template, 4, 2, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 11)(20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "tz-icon", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](22, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](25, "div", 15)(26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](29, MobAccommodationRulesComponent_div_29_Template, 11, 13, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "check-in");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 11, "HOTELS.RULES.CHECK_IN_FROM"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](9, 13, ctx.accommodation.checkIn, "shortTime"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "check-out");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 16, "HOTELS.RULES.CHECK_OUT_UNTIL"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](16, 18, ctx.accommodation.checkOut, "shortTime"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.accommodation.hotelRules.policyDescriptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("icon", "cards-accepted");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](24, 21, "HOTELS.RULES.CANCEL_PRE_PAY_TITLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](28, 23, "HOTELS.RULES.CANCEL_PRE_PAY_BODY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.accommodation.hotelRules.cardsAcceptAtHotel);
    } }, directives: [_shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_0__.TzIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_1__.TzDatePipe], styles: [".mob-accommodation-details__wrapper_info[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-white);\n  padding: 1rem;\n}\n.mob-accommodation-details__hotel-rules-info-block[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.mob-accommodation-details__title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  color: var(--color-text-mobile);\n}\n.mob-accommodation-details__title.main-title[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n.mob-accommodation-details__rules[_ngcontent-%COMP%] {\n  color: var(--color-text-mobile);\n  font-size: 0.75rem;\n  line-height: 1.5rem;\n  font-weight: 500;\n}\n.mob-accommodation-details__hotel-rules-description-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.75rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.009375rem;\n  color: var(--color-text-mobile);\n}\n.mob-accommodation-details__hotel-rules-description-icon[_ngcontent-%COMP%] {\n  gap: 0.625rem;\n  display: flex;\n  align-items: center;\n}\n.mob-accommodation-details__hotel-rules-description-icon[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  height: 1.25rem;\n  filter: invert(39%) sepia(7%) saturate(383%) hue-rotate(173deg) brightness(91%) contrast(84%);\n}\n.mob-accommodation-details__hotel-rules-policy-desc-item[_ngcontent-%COMP%], .mob-accommodation-details__hotel-rules-description-block-desc[_ngcontent-%COMP%] {\n  padding: 0 0 0.625rem 0;\n}\n.mob-accommodation-details__hotel-rules-policy-desc-content[_ngcontent-%COMP%], .mob-accommodation-details__hotel-rules-description-text-content[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1.125rem;\n  color: var(--color-text-mobile);\n}\n.mb-125[_ngcontent-%COMP%] {\n  margin-bottom: 1.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1hY2NvbW1vZGF0aW9uLXJ1bGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVRO0VBQ0ksNENBQUE7RUFDQSxhQUFBO0FBRFo7QUFLSTtFQUNJLHFCQUFBO0FBSFI7QUFNSTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0FBSlI7QUFNUTtFQUNJLHNCQUFBO0FBSlo7QUFRSTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBTlI7QUFTSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsK0JBQUE7QUFQUjtBQVVJO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQVJSO0FBVVE7RUFDSSxjQUFBO0VBQ0EsZUFBQTtFQUNBLDZGQUFBO0FBUlo7QUFZSTtFQUVJLHVCQUFBO0FBWFI7QUFjSTtFQUVJLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7QUFiUjtBQWlCQTtFQUNJLHVCQUFBO0FBZEoiLCJmaWxlIjoibW9iLWFjY29tbW9kYXRpb24tcnVsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iLWFjY29tbW9kYXRpb24tZGV0YWlscyB7XG4gICAgJl9fd3JhcHBlciB7XG4gICAgICAgICZfaW5mbyB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ob3RlbC1ydWxlcy1pbmZvLWJsb2NrIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgIH1cblxuICAgICZfX3RpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG5cbiAgICAgICAgJi5tYWluLXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19ydWxlcyB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG5cbiAgICAmX19ob3RlbC1ydWxlcy1kZXNjcmlwdGlvbi10ZXh0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDkzNzVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgfVxuXG4gICAgJl9faG90ZWwtcnVsZXMtZGVzY3JpcHRpb24taWNvbiB7XG4gICAgICAgIGdhcDogMC42MjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgdHotaWNvbiB7XG4gICAgICAgICAgICB3aWR0aDogMS4yNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgICAgIGZpbHRlcjogaW52ZXJ0KDM5JSkgc2VwaWEoNyUpIHNhdHVyYXRlKDM4MyUpIGh1ZS1yb3RhdGUoMTczZGVnKSBicmlnaHRuZXNzKDkxJSkgY29udHJhc3QoODQlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2hvdGVsLXJ1bGVzLXBvbGljeS1kZXNjLWl0ZW0sXG4gICAgJl9faG90ZWwtcnVsZXMtZGVzY3JpcHRpb24tYmxvY2stZGVzYyB7XG4gICAgICAgIHBhZGRpbmc6IDAgMCAwLjYyNXJlbSAwO1xuICAgIH1cblxuICAgICZfX2hvdGVsLXJ1bGVzLXBvbGljeS1kZXNjLWNvbnRlbnQsXG4gICAgJl9faG90ZWwtcnVsZXMtZGVzY3JpcHRpb24tdGV4dC1jb250ZW50IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xMjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgfVxufVxuXG4ubWItMTI1IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjEyNXJlbTtcbn0iXX0= */"] });


/***/ }),

/***/ 18507:
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/skeletons/acc-detail-review-skeleton-loader/acc-detail-review-skeleton-loader.component.ts ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccDetailReviewSkeletonLoaderComponent": () => (/* binding */ AccDetailReviewSkeletonLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-skeleton-loader */ 91391);



const _c0 = function () { return { width: "11.0625rem", height: "1.875rem" }; };
const _c1 = function () { return { width: "1.375rem", height: "1.375rem" }; };
function AccDetailReviewSkeletonLoaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-skeleton-loader", 3)(2, "ngx-skeleton-loader", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c1));
} }
class AccDetailReviewSkeletonLoaderComponent {
    constructor() {
        this.reviews = Array(18);
    }
    ngOnInit() { }
}
AccDetailReviewSkeletonLoaderComponent.ɵfac = function AccDetailReviewSkeletonLoaderComponent_Factory(t) { return new (t || AccDetailReviewSkeletonLoaderComponent)(); };
AccDetailReviewSkeletonLoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccDetailReviewSkeletonLoaderComponent, selectors: [["tz-acc-detail-review-skeleton-loader"]], decls: 2, vars: 1, consts: [[1, "reviews"], ["class", "review tz-skeleton-loader flex flex-row ion-justify-content-between", 4, "ngFor", "ngForOf"], [1, "review", "tz-skeleton-loader", "flex", "flex-row", "ion-justify-content-between"], ["count", "1", 3, "theme"], [1, "review-value-text", 3, "theme"]], template: function AccDetailReviewSkeletonLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccDetailReviewSkeletonLoaderComponent_div_1_Template, 3, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.reviews);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__.NgxSkeletonLoaderComponent], styles: [".reviews[_ngcontent-%COMP%]   .review[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjYy1kZXRhaWwtcmV2aWV3LXNrZWxldG9uLWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGdCQUFBO0FBQVIiLCJmaWxlIjoiYWNjLWRldGFpbC1yZXZpZXctc2tlbGV0b24tbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJldmlld3Mge1xuICAgIC5yZXZpZXcge1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 82125:
/*!***********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/skeletons/accommodation-detail-skeleton-loader/accommodation-detail-skeleton-loader.component.ts ***!
  \***********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationDetailSkeletonLoaderComponent": () => (/* binding */ AccommodationDetailSkeletonLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-skeleton-loader */ 91391);
/* harmony import */ var _accommodation_image_skeleton_loader_accommodation_image_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../accommodation-image-skeleton-loader/accommodation-image-skeleton-loader.component */ 61507);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




const _c0 = function () { return { height: "16.25rem", width: "16.25rem", "border-radius": "0 !important" }; };
const _c1 = function () { return { height: "1.25rem", width: "20.5rem" }; };
const _c2 = function () { return { height: "0.75rem", width: "16rem" }; };
function AccommodationDetailSkeletonLoaderComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "ngx-skeleton-loader", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 19)(5, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "ngx-skeleton-loader", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "ngx-skeleton-loader", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c2));
} }
const _c3 = function () { return { height: "1.25rem", width: "7.5rem" }; };
const _c4 = function () { return { height: "1.25rem", width: "7.5rem", "margin-right": "1.5rem" }; };
const _c5 = function () { return { height: "0.75rem", width: "40rem" }; };
const _c6 = function () { return { height: "1.25rem", width: "6.25rem", "margin-right": "1rem" }; };
class AccommodationDetailSkeletonLoaderComponent {
    constructor() {
        this.rooms = Array(2);
    }
    ngOnInit() { }
}
AccommodationDetailSkeletonLoaderComponent.ɵfac = function AccommodationDetailSkeletonLoaderComponent_Factory(t) { return new (t || AccommodationDetailSkeletonLoaderComponent)(); };
AccommodationDetailSkeletonLoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccommodationDetailSkeletonLoaderComponent, selectors: [["tz-accommodation-detail-skeleton-loader"]], decls: 31, vars: 21, consts: [[1, "accommodation-details"], [1, "actions-block", "flex", "flex-row", "ion-justify-content-between"], ["count", "1", 3, "theme"], [1, "flex", "flex-column"], [1, "tz-block-with-border"], [1, "flex", "align-center", "title-block"], [1, "flex", "align-center", "map-inline", "tz-skeleton-loader"], [1, "address-title", "tz-skeleton-loader"], [1, "flex", "align-center", "ml-a", "mb-a", "tz-skeleton-loader"], [1, "images"], [1, "room-amenities", "tz-skeleton-loader"], ["count", "4", 3, "theme"], [1, "flex", "flex-column", "description-block"], [1, "block-separator", "map-hidden"], ["class", "tz-block-with-border rooms-block", 4, "ngFor", "ngForOf"], [1, "tz-block-with-border", "rooms-block"], [1, "room", "flex", "flex-row"], [1, "flex", "image", "tz-skeleton-loader"], [3, "theme"], [1, "flex", "flex-column", "description", "tz-skeleton-loader"], [1, "room-description-item"]], template: function AccommodationDetailSkeletonLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "ngx-skeleton-loader", 2)(3, "ngx-skeleton-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3)(5, "div", 4)(6, "div", 5)(7, "div")(8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "ngx-skeleton-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "ngx-skeleton-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "ngx-skeleton-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "tz-accommodation-image-skeleton-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "ngx-skeleton-loader", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 4)(19, "div", 12)(20, "div", 3)(21, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "ngx-skeleton-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "ngx-skeleton-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "ngx-skeleton-loader", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "ngx-skeleton-loader", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, AccommodationDetailSkeletonLoaderComponent_div_30_Template, 9, 6, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](11, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](12, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](13, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](14, _c2));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](15, _c3));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](16, _c4));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](17, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](18, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c5));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c6));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rooms);
    } }, directives: [ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__.NgxSkeletonLoaderComponent, _accommodation_image_skeleton_loader_accommodation_image_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_0__.AccommodationImageSkeletonLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .tz-block-with-border[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .title-block[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .images[_ngcontent-%COMP%], .accommodation-details[_ngcontent-%COMP%]   .room-amenities[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .address-title[_ngcontent-%COMP%] {\n  margin-top: 0.625rem;\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .description-block[_ngcontent-%COMP%]   .room-amenities[_ngcontent-%COMP%] {\n  margin-top: 11rem;\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .rooms-block[_ngcontent-%COMP%]   .room[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  margin-left: 1.25rem;\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .rooms-block[_ngcontent-%COMP%]   .room[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .room-description-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.625rem;\n}\n\n.accommodation-details[_ngcontent-%COMP%]   .block-separator[_ngcontent-%COMP%] {\n  margin: 1.25rem 0;\n  height: 1px;\n  background-color: var(--upgrade-right-border);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tZGV0YWlsLXNrZWxldG9uLWxvYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLE9BQUE7QUFESjs7QUFNSTtFQUNJLHNCQUFBO0FBSFI7O0FBTUk7RUFDSSxtQkFBQTtBQUpSOztBQU9JO0VBQ0ksbUJBQUE7QUFMUjs7QUFRSTtFQUNJLG9CQUFBO0FBTlI7O0FBVVE7RUFDSSxpQkFBQTtBQVJaOztBQWNZO0VBQ0ksb0JBQUE7QUFaaEI7O0FBY2dCO0VBQ0ksdUJBQUE7QUFacEI7O0FBa0JJO0VBQ0ksaUJBQUE7RUFDQSxXQUFBO0VBQ0EsNkNBQUE7QUFoQlIiLCJmaWxlIjoiYWNjb21tb2RhdGlvbi1kZXRhaWwtc2tlbGV0b24tbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvbWl4aW5zXCI7XG5cbjpob3N0IHtcbiAgICBmbGV4OiAxO1xufVxuXG4uYWNjb21tb2RhdGlvbi1kZXRhaWxzIHtcblxuICAgIC50ei1ibG9jay13aXRoLWJvcmRlciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgfVxuXG4gICAgLnRpdGxlLWJsb2NrIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICB9XG5cbiAgICAuaW1hZ2VzLCAucm9vbS1hbWVuaXRpZXMge1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICAgIH1cblxuICAgIC5hZGRyZXNzLXRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC42MjVyZW07XG4gICAgfVxuXG4gICAgLmRlc2NyaXB0aW9uLWJsb2NrIHtcbiAgICAgICAgLnJvb20tYW1lbml0aWVzIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDExcmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnJvb21zLWJsb2NrIHtcbiAgICAgICAgLnJvb20ge1xuICAgICAgICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcblxuICAgICAgICAgICAgICAgIC5yb29tLWRlc2NyaXB0aW9uLWl0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYmxvY2stc2VwYXJhdG9yIHtcbiAgICAgICAgbWFyZ2luOiAxLjI1cmVtIDA7XG4gICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS11cGdyYWRlLXJpZ2h0LWJvcmRlcik7XG4gICAgfVxufVxuXG5cblxuXG5cbiJdfQ== */"] });


/***/ }),

/***/ 61507:
/*!*********************************************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/skeletons/accommodation-image-skeleton-loader/accommodation-image-skeleton-loader.component.ts ***!
  \*********************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationImageSkeletonLoaderComponent": () => (/* binding */ AccommodationImageSkeletonLoaderComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-skeleton-loader */ 91391);




const _c0 = function () { return { width: "100%", height: "100%" }; };
function AccommodationImageSkeletonLoaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](1, _c0));
} }
const TOPIMGCOUNT = 4;
const MOBTOPIMGCOUNT = 5;
class AccommodationImageSkeletonLoaderComponent {
    constructor(platformService) {
        this.platformService = platformService;
        this.hotelTopImages = Array(this.platformService.isMobileDevice ? MOBTOPIMGCOUNT : TOPIMGCOUNT);
    }
}
AccommodationImageSkeletonLoaderComponent.ɵfac = function AccommodationImageSkeletonLoaderComponent_Factory(t) { return new (t || AccommodationImageSkeletonLoaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_0__.PlatformService)); };
AccommodationImageSkeletonLoaderComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AccommodationImageSkeletonLoaderComponent, selectors: [["tz-accommodation-image-skeleton-loader"]], decls: 2, vars: 1, consts: [[1, "gallery-grid"], ["class", "gallery-slot tz-skeleton-loader", 4, "ngFor", "ngForOf"], [1, "gallery-slot", "tz-skeleton-loader"], [2, "display", "inline", 3, "theme"]], template: function AccommodationImageSkeletonLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AccommodationImageSkeletonLoaderComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.hotelTopImages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_3__.NgxSkeletonLoaderComponent], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  height: 19.375rem;\n}\n[_nghost-%COMP%]   img[_ngcontent-%COMP%] {\n  width: inherit;\n  height: inherit;\n}\n[_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 25.625rem 13.125rem 12.5rem;\n  grid-template-rows: 9.375rem 9.375rem;\n  grid-gap: 0.625rem;\n  gap: 0.625rem;\n}\n[_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n[_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  object-fit: cover;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%]:nth-child(1) {\n  grid-row: 1/3;\n  grid-column: 1/2;\n}\n[_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%]:nth-child(2) {\n  grid-row: 1/3;\n  grid-column: 2/3;\n}\n[_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%]:nth-child(3) {\n  grid-row: 1/2;\n  grid-column: 3/4;\n}\n[_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%]:nth-child(4) {\n  grid-row: 2/3;\n  grid-column: 3/4;\n  position: relative;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%] {\n    height: 10.313rem;\n  }\n  [_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%] {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 1px;\n  }\n  [_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%] {\n    height: 5.125rem;\n  }\n  [_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%]:nth-child(1) {\n    width: calc(56.14% - 0.5px);\n  }\n  [_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%]:nth-child(2) {\n    width: calc(43.86% - 0.5px);\n  }\n  [_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%]:nth-child(3) {\n    width: calc(33.33% - 0.667px);\n  }\n  [_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%]:nth-child(4) {\n    width: calc(33.06% - 0.667px);\n  }\n  [_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%]:nth-child(5) {\n    width: calc(33.06% - 0.666px);\n    position: relative;\n  }\n  [_nghost-%COMP%]   .gallery-grid[_ngcontent-%COMP%]   .gallery-slot[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24taW1hZ2Utc2tlbGV0b24tbG9hZGVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy91dGlscy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7QUFESjtBQUdJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUFEUjtBQUlJO0VBQ0ksYUFBQTtFQUNBLGtEQUFBO0VBQ0EscUNBQUE7RUFDQSxrQkFBQTtFQUFBLGFBQUE7QUFGUjtBQUlRO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFGWjtBQUlZO0VBQ0ksaUJBQUE7RUFDQSxlQUFBO0FBRmhCO0FBS1k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFIaEI7QUFNWTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUpoQjtBQU9ZO0VBQ0ksYUFBQTtFQUNBLGdCQUFBO0FBTGhCO0FBUVk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQU5oQjtBQ2NJO0VEbERKO0lBaURRLGlCQUFBO0VBVE47RUFXTTtJQUVJLGFBQUE7SUFDQSxlQUFBO0lBQ0EsUUFBQTtFQVZWO0VBWVU7SUFDSSxnQkFBQTtFQVZkO0VBWWM7SUFDSSwyQkFBQTtFQVZsQjtFQWFjO0lBQ0ksMkJBQUE7RUFYbEI7RUFjYztJQUNJLDZCQUFBO0VBWmxCO0VBZWM7SUFDSSw2QkFBQTtFQWJsQjtFQWdCYztJQUNJLDZCQUFBO0lBQ0Esa0JBQUE7RUFkbEI7RUFpQmM7SUFDSSxXQUFBO0VBZmxCO0FBQ0YiLCJmaWxlIjoiYWNjb21tb2RhdGlvbi1pbWFnZS1za2VsZXRvbi1sb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidXRpbHMvbWl4aW5zXCI7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDE5LjM3NXJlbTtcblxuICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiBpbmhlcml0O1xuICAgICAgICBoZWlnaHQ6IGluaGVyaXQ7XG4gICAgfVxuXG4gICAgLmdhbGxlcnktZ3JpZCB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMjUuNjI1cmVtIDEzLjEyNXJlbSAxMi41cmVtO1xuICAgICAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDkuMzc1cmVtIDkuMzc1cmVtO1xuICAgICAgICBnYXA6IDAuNjI1cmVtO1xuXG4gICAgICAgIC5nYWxsZXJ5LXNsb3Qge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgICAgIGltZyB7XG4gICAgICAgICAgICAgICAgb2JqZWN0LWZpdDogY292ZXI7XG4gICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgxKSB7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMztcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMS8yO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMztcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMi8zO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCgzKSB7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDEvMjtcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOm50aC1jaGlsZCg0KSB7XG4gICAgICAgICAgICAgICAgZ3JpZC1yb3c6IDIvMztcbiAgICAgICAgICAgICAgICBncmlkLWNvbHVtbjogMy80O1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgaGVpZ2h0OiAxMC4zMTNyZW07XG5cbiAgICAgICAgLmdhbGxlcnktZ3JpZCB7XG5cbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgICAgICBnYXA6IDFweDtcblxuICAgICAgICAgICAgLmdhbGxlcnktc2xvdCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA1LjEyNXJlbTtcblxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNTYuMTQlIC0gMC41cHgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoNDMuODYlIC0gMC41cHgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDMpIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGNhbGMoMzMuMzMlIC0gMC42NjdweCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoNCkge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYygzMy4wNiUgLSAwLjY2N3B4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCg1KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBjYWxjKDMzLjA2JSAtIDAuNjY2cHgpO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 74953:
/*!*****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodation/components/skeletons/mob-accommodation-detail-skeleton/mob-accommodation-detail-skeleton.component.ts ***!
  \*****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobAccommodationDetailSkeletonComponent": () => (/* binding */ MobAccommodationDetailSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _accommodation_image_skeleton_loader_accommodation_image_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../accommodation-image-skeleton-loader/accommodation-image-skeleton-loader.component */ 61507);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-skeleton-loader */ 91391);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




const _c0 = function () { return { height: "100%", width: "100%" }; };
function MobAccommodationDetailSkeletonComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "ngx-skeleton-loader", 3)(2, "ngx-skeleton-loader", 3)(3, "ngx-skeleton-loader", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](5, _c0));
} }
const _c1 = function () { return [1, 2, 3, 4, 5]; };
class MobAccommodationDetailSkeletonComponent {
    constructor() { }
    ngOnInit() { }
}
MobAccommodationDetailSkeletonComponent.ɵfac = function MobAccommodationDetailSkeletonComponent_Factory(t) { return new (t || MobAccommodationDetailSkeletonComponent)(); };
MobAccommodationDetailSkeletonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MobAccommodationDetailSkeletonComponent, selectors: [["tz-mob-accommodation-detail-skeleton"]], decls: 6, vars: 4, consts: [[1, "mob-accommodation-details", "tz-skeleton-loader"], [1, "tz-skeleton-block"], [1, "tz-skeleton-block", "hotel-name"], ["count", "1", 3, "theme"], ["class", "tz-skeleton-block flex flex-column hotel-info", 4, "ngFor", "ngForOf"], [1, "tz-skeleton-block", "flex", "flex-column", "hotel-info"]], template: function MobAccommodationDetailSkeletonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "tz-accommodation-image-skeleton-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "ngx-skeleton-loader", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, MobAccommodationDetailSkeletonComponent_div_5_Template, 4, 6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](2, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](3, _c1));
    } }, directives: [_accommodation_image_skeleton_loader_accommodation_image_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_0__.AccommodationImageSkeletonLoaderComponent, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__.NgxSkeletonLoaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.tz-skeleton-block[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary-contrast);\n}\n\n.mob-accommodation-details[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mob-accommodation-details[_ngcontent-%COMP%]   .hotel-name[_ngcontent-%COMP%] {\n  padding: 0.75rem 1.5rem;\n  width: 100%;\n  height: 4rem;\n  margin-top: 0.313rem;\n}\n\n.mob-accommodation-details[_ngcontent-%COMP%]   .hotel-name[_ngcontent-%COMP%]   ngx-skeleton-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.mob-accommodation-details[_ngcontent-%COMP%]   .hotel-info[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  width: 100%;\n  height: 13.75rem;\n  padding: 1rem 1.5rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.mob-accommodation-details[_ngcontent-%COMP%]   .hotel-info[_ngcontent-%COMP%]   ngx-skeleton-loader[_ngcontent-%COMP%] {\n  width: calc(50% - 1rem);\n  height: 0.918rem;\n}\n\n.mob-accommodation-details[_ngcontent-%COMP%]   .hotel-info[_ngcontent-%COMP%]   ngx-skeleton-loader[_ngcontent-%COMP%]:last-child {\n  width: 25%;\n}\n\n.mob-accommodation-details[_ngcontent-%COMP%]   .hotel-info[_ngcontent-%COMP%]   ngx-skeleton-loader[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 0.625rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1hY2NvbW1vZGF0aW9uLWRldGFpbC1za2VsZXRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLDZDQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0FBQ0o7O0FBQ0k7RUFDSSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7QUFDUjs7QUFDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ1o7O0FBR0k7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBRFI7O0FBR1E7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0FBRFo7O0FBR1k7RUFDSSxVQUFBO0FBRGhCOztBQUlZO0VBQ0ksb0JBQUE7QUFGaEIiLCJmaWxlIjoibW9iLWFjY29tbW9kYXRpb24tZGV0YWlsLXNrZWxldG9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4udHotc2tlbGV0b24tYmxvY2sge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbn1cblxuLm1vYi1hY2NvbW1vZGF0aW9uLWRldGFpbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmhvdGVsLW5hbWUge1xuICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDEuNXJlbTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNHJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogMC4zMTNyZW07XG5cbiAgICAgICAgbmd4LXNrZWxldG9uLWxvYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ob3RlbC1pbmZvIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMy43NXJlbTtcbiAgICAgICAgcGFkZGluZzogMXJlbSAxLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgbmd4LXNrZWxldG9uLWxvYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxcmVtKTtcbiAgICAgICAgICAgIGhlaWdodDogMC45MThyZW07XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC42MjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_results_accommodation_accommodation_module_ts.js.map