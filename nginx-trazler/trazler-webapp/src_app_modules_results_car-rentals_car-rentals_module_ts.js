"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_results_car-rentals_car-rentals_module_ts"],{

/***/ 86525:
/*!***************************************************************************!*\
  !*** ./src/app/modules/results/car-rentals/car-rentals-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRentalsRoutingModule": () => (/* binding */ CarRentalsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _car_rentals_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-rentals.component */ 9433);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _car_rentals_component__WEBPACK_IMPORTED_MODULE_0__.CarRentalsComponent,
    },
];
class CarRentalsRoutingModule {
}
CarRentalsRoutingModule.ɵfac = function CarRentalsRoutingModule_Factory(t) { return new (t || CarRentalsRoutingModule)(); };
CarRentalsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CarRentalsRoutingModule });
CarRentalsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CarRentalsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 9433:
/*!**********************************************************************!*\
  !*** ./src/app/modules/results/car-rentals/car-rentals.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRentalsComponent": () => (/* binding */ CarRentalsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/base-service-component/base-service.component */ 6371);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/state-from.const */ 54255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var _components_car_rental_map_car_rental_map_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/car-rental-map/car-rental-map.component */ 63297);
/* harmony import */ var _components_mob_car_rental_details_mob_car_rental_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mob-car-rental-details/mob-car-rental-details.component */ 20395);
/* harmony import */ var _services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/inactivity/filter.service */ 53768);
/* harmony import */ var _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/modules/search/utils/search.utils */ 77235);
/* harmony import */ var _results_filters_results_filters_utils_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../results-filters/results-filters.utils.service */ 47740);
/* harmony import */ var _services_modules_car_rental_dataservices_car_rental_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/modules/car-rental/dataservices/car-rental.data.service */ 81609);
/* harmony import */ var _services_modules_car_rental_services_car_rental_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/modules/car-rental/services/car-rental.service */ 6177);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ngx-skeleton-loader */ 91391);
/* harmony import */ var _results_filters_filters_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../results-filters/filters.component */ 32082);
/* harmony import */ var _components_mob_filter_navbar_mob_filter_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/mob-filter-navbar/mob-filter-navbar.component */ 97008);
/* harmony import */ var _shared_components_results_top_info_block_results_top_info_block_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/components/results-top-info-block/results-top-info-block.component */ 70858);
/* harmony import */ var _results_filters_components_filter_btn_filter_btn_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../results-filters/components/filter-btn/filter-btn.component */ 16722);
/* harmony import */ var _shared_components_price_range_filter_price_range_filter_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../shared/components/price-range-filter/price-range-filter.component */ 89254);
/* harmony import */ var _components_acc_car_transfer_skeleton_acc_car_transfer_skeleton_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/acc-car-transfer-skeleton/acc-car-transfer-skeleton.component */ 56735);
/* harmony import */ var _components_car_transfer_skeleton_car_transfer_skeleton_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/car-transfer-skeleton/car-transfer-skeleton.component */ 50749);
/* harmony import */ var _components_selected_car_rentals_selected_car_rentals_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/selected-car-rentals/selected-car-rentals.component */ 49476);
/* harmony import */ var _components_car_rental_list_car_rental_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/car-rental-list/car-rental-list.component */ 81361);
/* harmony import */ var _shared_components_service_booking_confirmation_component_service_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @shared/components/service-booking-confirmation-component/service-booking-confirmation.component */ 70832);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/pipes/safe-html.pipe */ 66926);






























const _c0 = ["carRentalList"];
const _c1 = ["carRentalListSkeletonLoader"];
const _c2 = ["confirmationComponent"];
const _c3 = ["confirmationComponentReplacer"];

function CarRentalsComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function CarRentalsComponent_div_1_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r10.onCarRentalMapOpen();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "tz-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](4, 1, "GENERAL.SHOW_ON_MAP"));
  }
}

const _c4 = function () {
  return {
    height: "7.5rem"
  };
};

function CarRentalsComponent_div_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction0"](1, _c4));
  }
}

function CarRentalsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, CarRentalsComponent_div_1_div_1_Template, 5, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, CarRentalsComponent_div_1_ng_container_2_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "tz-results-filters", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("filterChanged", function CarRentalsComponent_div_1_Template_tz_results_filters_filterChanged_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r12.onFilterChanged($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !ctx_r0.loaderService.skeletonLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r0.loaderService.skeletonLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("filter", ctx_r0.carRentalFilter)("loading", ctx_r0.loaderService.skeletonLoading)("disabled", ctx_r0.confirmable);
  }
}

function CarRentalsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div")(1, "tz-mob-filter-navbar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("openFilter", function CarRentalsComponent_div_4_Template_tz_mob_filter_navbar_openFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r15);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r14.onOpenFilterModal();
    })("resetFilter", function CarRentalsComponent_div_4_Template_tz_mob_filter_navbar_resetFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r15);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r16.onResetFilter();
    })("openSort", function CarRentalsComponent_div_4_Template_tz_mob_filter_navbar_openSort_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r15);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r17.mobOpenSort();
    })("showMap", function CarRentalsComponent_div_4_Template_tz_mob_filter_navbar_showMap_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r15);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r18.onCarRentalMapOpen();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("sortKey", ctx_r1.filterQueryParams.sort_by)("sortByOptions", ctx_r1.sortByOptions)("isEnableClearFilter", ctx_r1.isEnableClearFilter)("filtersCount", ctx_r1.selectedFiltersCount)("skeletonLoading", ctx_r1.loaderService.skeletonLoading)("displayMap", true);
  }
}

function CarRentalsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 17)(1, "tz-results-top-info-block", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("loading", ctx_r2.loaderService.skeletonLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 2, ctx_r2.serviceTitle), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeHtml"]);
  }
}

function CarRentalsComponent_div_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 25)(1, "tz-filter-btn", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("clickFilter", function CarRentalsComponent_div_7_div_1_Template_tz_filter_btn_clickFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r21.onOpenFilterPopup();
    })("clearFilter", function CarRentalsComponent_div_7_div_1_Template_tz_filter_btn_clearFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r23.onResetFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("filterCount", ctx_r19.filterCount(ctx_r19.carRentalFilter));
  }
}

function CarRentalsComponent_div_7_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function CarRentalsComponent_div_7_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r25);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r24.onCarRentalMapOpen();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](1, "tz-icon", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
}

function CarRentalsComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, CarRentalsComponent_div_7_div_1_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "tz-price-range-filter", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("sortChange", function CarRentalsComponent_div_7_Template_tz_price_range_filter_sortChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r26.sortCarRentals($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](5, CarRentalsComponent_div_7_div_5_Template, 2, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 6, ctx_r3.isMobile$));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("sort", ctx_r3.filterQueryParams.sort_by)("options", ctx_r3.sortByOptions)("disabled", ctx_r3.confirmable)("skeletonLoading", ctx_r3.loaderService.skeletonLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !ctx_r3.loaderService.skeletonLoading && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](6, 8, ctx_r3.isMobile$));
  }
}

function CarRentalsComponent_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "tz-acc-car-transfer-skeleton-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
}

function CarRentalsComponent_ng_container_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", null, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "tz-car-transfer-skeleton", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("isRental", true);
  }
}

function CarRentalsComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, CarRentalsComponent_ng_container_8_div_1_Template, 3, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](3, CarRentalsComponent_ng_container_8_div_3_Template, 3, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, ctx_r4.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](4, 4, ctx_r4.platformService.isMobileDevice$));
  }
}

function CarRentalsComponent_ng_container_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 36)(1, "tz-selected-car-rentals", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("showPackagesFlag", function CarRentalsComponent_ng_container_9_div_1_Template_tz_selected_car_rentals_showPackagesFlag_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r34.onChangeShowPackages($event);
    })("removedItem", function CarRentalsComponent_ng_container_9_div_1_Template_tz_selected_car_rentals_removedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r36.onRemoveSelectedCarRental($event);
    })("changeCarRentals", function CarRentalsComponent_ng_container_9_div_1_Template_tz_selected_car_rentals_changeCarRentals_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r35);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r37.onChangeCarRental();
    })("newCarRentalPackageSelected", function CarRentalsComponent_ng_container_9_div_1_Template_tz_selected_car_rentals_newCarRentalPackageSelected_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r35);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r38.addItemToCart($event);
    })("loadCarRentalPackages", function CarRentalsComponent_ng_container_9_div_1_Template_tz_selected_car_rentals_loadCarRentalPackages_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r35);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r39.onGetPackagesOfTheCarRental($event);
    })("showCarRentalDetails", function CarRentalsComponent_ng_container_9_div_1_Template_tz_selected_car_rentals_showCarRentalDetails_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r35);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r40.showSelectedCarRentalDetails($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("carRentalPackages", ctx_r32.cachedCarRentalPackages[ctx_r32.cartData.items[0].selectedItem.id])("carRentalCartData", ctx_r32.cartData)("selectedChangeOptions", ctx_r32.selectedChangeOptions)("serviceList", true);
  }
}

function CarRentalsComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, CarRentalsComponent_ng_container_9_div_1_Template, 2, 4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "div", 33, 34)(4, "tz-car-rental-list", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("openPopupModel", function CarRentalsComponent_ng_container_9_Template_tz_car_rental_list_openPopupModel_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r41.onOpenPopupModel($event);
    })("selectedCarRental", function CarRentalsComponent_ng_container_9_Template_tz_car_rental_list_selectedCarRental_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r43.onSelectedCarRental($event);
    })("cancelSelection", function CarRentalsComponent_ng_container_9_Template_tz_car_rental_list_cancelSelection_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r42);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r44.onCancelSelection();
    })("nextPage", function CarRentalsComponent_ng_container_9_Template_tz_car_rental_list_nextPage_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r42);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r45.nextPage();
    })("showCarRentalDetails", function CarRentalsComponent_ng_container_9_Template_tz_car_rental_list_showCarRentalDetails_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r42);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r46.showCarRentalDetails($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r5.cartData && ctx_r5.cartData.items.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("hidden", ctx_r5.showPackageFlag);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("count", 0)("isListCompleted", ctx_r5.isListCompleted)("carRentals", ctx_r5.carRentals)("isMobile$", ctx_r5.isMobile$)("selectedCarRentalId", ctx_r5.selectedCarRentals.length ? ctx_r5.selectedCarRentals[0].id : "")("carRentalListMetadata", ctx_r5.carRentalListMetadata);
  }
}

function CarRentalsComponent_div_10_tz_service_booking_confirmation_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "tz-service-booking-confirmation", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("cancelSelection", function CarRentalsComponent_div_10_tz_service_booking_confirmation_2_Template_tz_service_booking_confirmation_cancelSelection_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r50);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r49.onCancelSelection();
    })("submitBooking", function CarRentalsComponent_div_10_tz_service_booking_confirmation_2_Template_tz_service_booking_confirmation_submitBooking_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r50);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r51.onSubmitBooking();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
}

function CarRentalsComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 38, 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](2, CarRentalsComponent_div_10_tz_service_booking_confirmation_2_Template, 1, 0, "tz-service-booking-confirmation", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !ctx_r6.showPackageFlag);
  }
}

function CarRentalsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](0, "div", 42, 43);
  }
}

class CarRentalsComponent extends _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_1__.BaseServiceComponent {
  constructor(carRentalDataService, injector, carRentalService) {
    super(injector);
    this.carRentalDataService = carRentalDataService;
    this.injector = injector;
    this.carRentalService = carRentalService;
    this.journeyType = 'roundTrip';
    this.carRentalFilter = [];
    this.carRentals = [];
    this.carRentalListMetadata = {};
    this.selectedCarRentals = [];
    this.showPackageFlag = false;
    this.cachedCarRentalPackages = {};
    this.selectedChangeOptions = new _angular_core__WEBPACK_IMPORTED_MODULE_23__.EventEmitter();
    this.sortByOptions = [{
      sort: 'bestValue',
      label: 'GENERAL.SORT.BEST_VALUE'
    }, {
      sort: 'cheapest',
      label: 'GENERAL.SORT.CHEAPEST'
    }];
    this.selectedFiltersCount = 0;
    this.filterQueryParams = {};
    this.serviceTitle = '';
    this.serviceId = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.CAR_RENTAL;
    this.carRecommendedID = '';
    this.resultsCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.Subject();
    this.repriceListenerId = -1;
    this.isGetCarPackagesProcessing = false;
    this.isMobile$ = this.screenSizeDetectorService.isMobile;
    this.isNextSummary = this.nextIsSummary();
  }

  get isEnableClearFilter() {
    return _services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_6__.FilterService.enableClearAll(this.carRentalFilter);
  }

  static initSearchParams() {
    return {
      getNearestLocation: false,
      locationName: '',
      journeyType: 'onwardJourney',
      selectedCarRentals: {},
      sort_by: 'bestValue',
      refreshFilter: false
    };
  }

  ngOnInit() {
    if (this.searchRunning()) {
      this.showSkeletonLoader(true);
    } else {
      this.initializeCarRentalsComponent(true);
    }
  }

  ngOnDestroy() {
    this.listenersService.unregisterListener(this.repriceListenerId);
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onFilterChanged($event) {
    this.scrollToServiceContainer();
    this.carRentalFilter = $event;
    this.filterCarRentals();
  }

  onChangeShowPackages($event) {
    this.showPackageFlag = $event;

    if ($event) {
      this.checkConfirmability();
    } else {
      this.scrollToTop();
    }
  }

  sortCarRentals(sortValue) {
    _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_7__.SearchUtilsService.saveSortingValue(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.CAR_RENTAL, sortValue);
    this.filterQueryParams.sort_by = sortValue;
    this.loadCarRentalData(false);
  }

  onSelectedCarRental(selectedCarRental) {
    this.selectedCarRentals = selectedCarRental ? [selectedCarRental] : [];
    this.checkConfirmability();
  }

  onCancelSelection() {
    this.confirmable = false;
    this.selectedCarRentals = [];
    this.loadCarRentalData(false);
    this.scrollToTop();
  }

  onChangeCarRental() {
    if (this.carRentalListSkeletonLoaderElementReference) {
      this.scrollToElement(this.carRentalListSkeletonLoaderElementReference);
    } else {
      this.scrollToElement(this.carRentalListElementReference);
    }
  }

  onOpenFilterPopup() {
    const filter = new rxjs__WEBPACK_IMPORTED_MODULE_25__.BehaviorSubject(this.carRentalFilter);
    filter.subscribe(filterReferenceItem => {
      this.carRentalFilter = filterReferenceItem;
      this.filterCarRentals();
    });
    this.openFilterDialog(filter, this.resultsCount$);
  }

  addItemToCart(carRental) {
    this.carRentalDataService.addCarRentalToCart([carRental]).subscribe(response => {
      this.confirmable = false;
      this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.TOGGLE_RESULTS_SUMMARY, {
        show: !this.confirmable
      });
      this.userSearchService.searchCheckDep(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.CAR_RENTAL, this.isNextSummary, false, false, true);
    }, error => {
      console.log(error);
    });
  }

  onGetPackagesOfTheCarRental(carRental) {
    this.getPackagesOfTheCarRental(carRental).subscribe(packages => {
      this.scrollToConfirmationBlock();
    });
  }

  getPackagesOfTheCarRental(carRental) {
    this.isGetCarPackagesProcessing = true;
    return this.carRentalDataService.getCarRentalPackages(carRental).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.tap)(packages => {
      this.isGetCarPackagesProcessing = false;
      this.cachedCarRentalPackages[carRental.id] = packages;
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.takeUntil)(this.destroy$));
  }

  onRemoveSelectedCarRental(optionId) {
    this.removeService(this.serviceId, optionId).then(isRemoved => {
      console.log('remove success');
    }, error => {
      console.error(error);
    });
  }

  onSubmitBooking() {
    if (this.selectedCarRentals[0]) {
      this.addItemToCart(this.selectedCarRentals[0]);
    }
  }

  nextPage() {
    if (!this.loading) {
      this.loading = true;
      const params = {
        start: this.start,
        limit: this.carRentalListMetadata.increment,
        sortBy: this.filterQueryParams.sort_by
      };
      this.carRentalDataService.paginate(this.serviceId, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_28__.finalize)(() => {
        this.loading = false;
      })).subscribe(carRentals => {
        this.carRentals = [...this.carRentals, ...carRentals]; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        if (carRentals.length < this.carRentalListMetadata.increment) {
          this.isListCompleted = true;
        } else {
          // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
          this.start += this.carRentalListMetadata.increment;
        }
      });
    }
  }

  onOpenPopupModel(rentalModel) {
    this.carRentalService.openPopupModel(rentalModel);
  }

  onCarRentalMapOpen() {
    var _a, _b;

    const carRentalData = this.searchDataService.getSearchData(this.serviceId);

    if (!carRentalData || !carRentalData.address) {
      return;
    }

    const mapCenterPosition = {
      lng: (_a = carRentalData.to) === null || _a === void 0 ? void 0 : _a.longitude,
      lat: (_b = carRentalData.to) === null || _b === void 0 ? void 0 : _b.latitude
    };
    const mapConf = {
      id: 'carRentalMapDialog',
      height: '100%',
      width: '100%',
      maxWidth: '100vw',
      panelClass: 'tz-results-map',
      data: {
        mapCenterPosition,
        serviceId: this.serviceId
      }
    };
    const dialogRef = this.dialogService.openAccommodationDialog(_components_car_rental_map_car_rental_map_component__WEBPACK_IMPORTED_MODULE_4__.CarRentalMapComponent, mapConf);
    dialogRef.afterClosed().subscribe(marker => {
      if (marker) {
        if (marker) {
          this.filterAccordingLocation(marker);
        }
      }
    });
    dialogRef.componentInstance.searchClicked.subscribe(marker => {
      this.searchNewLocation(marker);
    });
  }

  onOpenFilterModal() {
    const filters = new rxjs__WEBPACK_IMPORTED_MODULE_25__.BehaviorSubject(this.carRentalFilter);
    filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.takeUntil)(this.destroy$)).subscribe(filter => {
      this.carRentalFilter = filter;
      this.filterCarRentals();
    });
    this.openFilterModal(filters, this.resultsCount$);
  }

  onResetFilter() {
    const filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.Subject();
    filters$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.takeUntil)(this.destroy$)).subscribe(filter => {
      this.carRentalFilter = filter;
      this.filterCarRentals();
    });
    _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_1__.BaseServiceComponent.resetFilter(this.carRentalFilter, filters$);
  }

  mobOpenSort() {
    const sort$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.Subject();
    sort$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.takeUntil)(this.destroy$)).subscribe(sortKey => {
      this.sortCarRentals(sortKey);
    });
    this.openSortMob(this.sortByOptions, this.filterQueryParams.sort_by, sort$);
  }

  showCarRentalDetails(carRental) {
    const openPopupModel$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.Subject();
    openPopupModel$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.takeUntil)(this.destroy$)).subscribe(data => {
      this.onOpenPopupModel(data);
    });
    this.modalService.createDetailsPage(_components_mob_car_rental_details_mob_car_rental_details_component__WEBPACK_IMPORTED_MODULE_5__.MobCarRentalDetailsComponent, {
      data: {
        carRental,
        openPopupModel$,
        type: 'details'
      },
      title: 'POPUPS.CAR_RENTAL.DETAILS_TITLE',
      modalCustomClasses: ['mobile-car-rental-details-background']
    }).then(modal => {
      if (modal.data) {
        this.selectedCarRentals = [];
        this.selectedCarRentals.push(modal.data);
        this.onSubmitBooking();
      }

      if (!modal.data && carRental.packagesAvailable.length > 1) {
        carRental.currentPackage = carRental.packagesAvailable[0];
      }
    });
  }

  showSelectedCarRentalDetails(carRental) {
    if (this.isGetCarPackagesProcessing) {
      return;
    }

    this.getPackagesOfTheCarRental(carRental).subscribe(packages => {
      carRental.packagesAvailable = packages;
      this.showCarRentalDetails(carRental);
    });
  }

  loadCarRentalData(checkConsistency) {
    this.checkResultsAvailable(this.serviceId);
    this.loaderService.skeletonLoading = true;
    const params = CarRentalsComponent.initSearchParams();
    params.sort_by = this.filterQueryParams.sort_by;
    this.carRentalDataService.searchServiceData(this.serviceId, params, checkConsistency).subscribe(carRentalsResponse => {
      this.handleCarRentalResponse(carRentalsResponse);
      this.loaderService.skeletonLoading = false;
      this.handleExtraParams();

      if (!carRentalsResponse.rentals.count && !this.filterCount(carRentalsResponse.ogs)) {
        this.carRentalDataService.checkServiceFailedAndNotify(this.serviceId);
      }

      setTimeout(() => {
        console.log('set prerender ready');
        window.prerenderReady = true;
      }, 1500);
    }, error => {//this.loaderService.skeletonLoading = false;
    });
  }

  filterCarRentals() {
    this.loaderService.skeletonLoading = true;
    this.isListCompleted = false;
    this.carRentalDataService.filterServiceData(this.serviceId, this.filterQueryParams, this.carRentalFilter).subscribe(carRentalsResponse => {
      this.handleCarRentalResponse(carRentalsResponse);
      this.loaderService.skeletonLoading = false;
    }, error => {
      this.loaderService.skeletonLoading = false;
    });
  }

  checkConfirmability() {
    this.confirmable = this.carRentals.length > 0;

    if (this.confirmable) {
      this.scrollToConfirmationBlock();
    }
  }

  nextIsSummary() {
    var _a, _b;

    const state = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state;
    const from = state ? state['from'] : '';
    return from === _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.SUMMARY || from === _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.TAB;
  }

  getCartServiceData() {
    this.cartData = this.carRentalDataService.getServiceCartItems();
  }

  handleCarRentalResponse(carRentalsResponse) {
    this.carRentalFilter = carRentalsResponse.ogs;
    this.carRecommendedID = carRentalsResponse.bestValueRental;
    this.handlingCarRentalsData(carRentalsResponse.rentals.data);
    this.selectedFiltersCount = _results_filters_results_filters_utils_service__WEBPACK_IMPORTED_MODULE_8__.ResultsFiltersUtils.selectedFiltersCounter(this.carRentalFilter);
    const {
      count,
      limit,
      limiter,
      increment
    } = carRentalsResponse.rentals;
    this.start = limiter;

    if (count < limit) {
      this.isListCompleted = true;
    }

    this.resultsCount$.next(count);
    this.carRentalListMetadata = {
      count,
      limiter,
      increment
    };

    if (carRentalsResponse.showMap) {
      this.onCarRentalMapOpen();
    }
  }

  initializeCarRentalsComponent(checkConsistency) {
    this.filterQueryParams = {
      sort_by: 'cheapest'
    };
    this.serviceTitle = this.formServiceTitle(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.CAR_RENTAL);
    this.setSortingValue();
    this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.takeUntil)(this.destroy$)).subscribe(() => {
      this.serviceTitle = this.formServiceTitle(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.CAR_RENTAL);
      this.loadCarRentalData(false);
    });
    this.curChange = this.currencyService.selectedCurrencySubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.takeUntil)(this.destroy$)).subscribe(() => {
      this.loadCarRentalData(false);
    });
    this.repriceListenerId = this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_REPRICED, this.getCartServiceData, this);
    this.loadCarRentalData(checkConsistency);
    this.getCartServiceData();
    this.checkCarRentalMapPopup();
  }

  handlingCarRentalsData(carRentals) {
    const cartData = this.cartData;
    const cartCarRentalID = cartData && cartData.items.length ? cartData.items[0].selectedItem.id : null;
    this.carRentals = this.carRentalDataService.handlingData(carRentals, this.carRecommendedID, cartCarRentalID);
    this.carRentals = this.filterCarRentalsData(carRentals);
  }

  filterCarRentalsData(carRentals) {
    var _a, _b;

    const cartId = ((_a = this.cartData) === null || _a === void 0 ? void 0 : _a.items[0]) ? (_b = this.cartData) === null || _b === void 0 ? void 0 : _b.items[0].selectedItem.id : null;

    if (cartId) {
      return this.carRentalDataService.filterDataRemoveCartItem(carRentals, cartId);
    }

    return carRentals;
  }

  setSortingValue() {
    const sort = _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_7__.SearchUtilsService.getSortingValue(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.CAR_RENTAL);

    if (sort) {
      this.filterQueryParams.sort_by = sort;
    }
  }

  searchNewLocation(marker) {
    if (!marker.point.latitude && !marker.point.longitude) {
      return;
    }

    const searchData = this.searchDataService.getSearchData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.CAR_RENTAL);

    if (searchData) {
      if (searchData.to) {
        searchData.to.latitude = marker.point.latitude;
        searchData.to.longitude = marker.point.longitude;
        searchData.to.locationID = marker.locationID;
        searchData.to.formattedAddress = marker.address;
        searchData.to.supplierName = marker.supplierName;
        searchData.to.featureKey = marker.featureKey;
        searchData.address = {};
        searchData.retainSearch = true;
      }

      const searchInfos = this.searchDataService.getSearch();
      this.loaderService.triggerLoading.emit({
        loading: true,
        type: 'small',
        textKey: this.translateService.instant('LOADER_MESSAGES.SEARCH_OPTIONS'),
        title: this.translateService.instant('LOADER_MESSAGES.CHECKING')
      });
      this.userSearchService.search({
        bookedServiceId: _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.CAR_RENTAL,
        serviceId: _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.CAR_RENTAL,
        editMode: true
      }, {
        searchData,
        context: searchInfos.context,
        passengers: searchInfos.passengers //retainSearch: true,

      });
    }
  }

  checkCarRentalMapPopup() {
    const searchData = this.searchDataService.getSearchData(this.serviceId);

    if (searchData && searchData.retainSearch) {
      const dialog = this.dialogService.getDialogById('carRentalMapDialog');

      if (dialog && dialog.componentInstance && dialog.componentInstance instanceof _components_car_rental_map_car_rental_map_component__WEBPACK_IMPORTED_MODULE_4__.CarRentalMapComponent) {
        this.loaderService.triggerLoading.emit({
          loading: false
        });
        dialog.componentInstance.resetData();
        dialog.afterClosed().subscribe(marker => {
          if (marker) {
            if (marker) {
              this.filterAccordingLocation(marker);
            }
          }
        });
      }
    } //do not show map when user already selected a car


    if ((!this.cartData || !this.cartData.items || this.cartData.items[0].isVirtual) && (this.searchDataService.isMap(this.serviceId) || (searchData === null || searchData === void 0 ? void 0 : searchData.retainSearch))) {
      this.onCarRentalMapOpen();
    }
  }

  filterAccordingLocation(marker) {
    const locationFilter = this.carRentalFilter.find(filterItem => filterItem.ref_id === 'CAR_RENTAL.LOCATION');

    if (locationFilter && locationFilter.checkboxes) {
      const checkboxReferenceObject = locationFilter === null || locationFilter === void 0 ? void 0 : locationFilter.checkboxes.find(checkBox => {
        const formedLocationId = 'LOCATIONS' + marker.locationID;
        return formedLocationId === checkBox.ref_id;
      });

      if (checkboxReferenceObject) {
        checkboxReferenceObject.selected = true;
        this.filterCarRentals();
      }
    }
  }

  handleExtraParams() {
    const state = history.state;

    if (state && state.extra) {
      for (const extraAction in state.extra) {
        if (state.extra.hasOwnProperty(extraAction)) {
          switch (extraAction) {
            case 'changeOptions':
              if (this.cartData && this.cartData.items) {
                if (this.platformService.isMobileDevice) {
                  this.showSelectedCarRentalDetails(this.cartData.items[0].selectedItem.data);
                } else {
                  this.selectedChangeOptions.emit();
                }

                this.scrollToConfirmationBlockReplacer();
              }

              break;

            case 'changeTickets':
              this.onChangeCarRental();
              break;
          }
        }
      }
    }
  }

  scrollToConfirmationBlock() {
    setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.scrollToElement(this.confirmationComponent, {
            block: 'end'
          });
        });
      });
    }, 500);
  }

  scrollToConfirmationBlockReplacer() {
    setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.scrollToElement(this.confirmationComponentReplacer, {
            block: 'end'
          });
        });
      });
    }, 500);
  }

}

CarRentalsComponent.ɵfac = function CarRentalsComponent_Factory(t) {
  return new (t || CarRentalsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_services_modules_car_rental_dataservices_car_rental_data_service__WEBPACK_IMPORTED_MODULE_9__.CarRentalDataService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_23__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_services_modules_car_rental_services_car_rental_service__WEBPACK_IMPORTED_MODULE_10__.CarRentalService));
};

CarRentalsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineComponent"]({
  type: CarRentalsComponent,
  selectors: [["tz-car-rentals"]],
  viewQuery: function CarRentalsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵviewQuery"](_c3, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵloadQuery"]()) && (ctx.carRentalListElementReference = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵloadQuery"]()) && (ctx.carRentalListSkeletonLoaderElementReference = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵloadQuery"]()) && (ctx.confirmationComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵloadQuery"]()) && (ctx.confirmationComponentReplacer = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵInheritDefinitionFeature"]],
  decls: 12,
  vars: 13,
  consts: [[1, "car-rentals-container", "flex", 3, "hidden"], ["class", "tz-filter-container", 4, "ngIf"], [1, "flex", "flex-column", "car-rentals-list-submission-container"], [4, "ngIf"], ["class", "result-top-info-block-item", 4, "ngIf"], ["class", "price-range-container flex", 4, "ngIf"], ["class", "service-submission-container", 4, "ngIf"], ["class", "confirm-and-continue-block-replacement", 4, "ngIf"], [1, "tz-filter-container"], ["class", "show-map-btn", 3, "click", 4, "ngIf"], [3, "filter", "loading", "disabled", "filterChanged"], [1, "show-map-btn", 3, "click"], ["icon", "map-btn-marekr"], [1, "btn-label"], [1, "tz-skeleton-loader", "show-map-button-skeleton-container"], [3, "theme"], [3, "sortKey", "sortByOptions", "isEnableClearFilter", "filtersCount", "skeletonLoading", "displayMap", "openFilter", "resetFilter", "openSort", "showMap"], [1, "result-top-info-block-item"], ["blockType", "green", 3, "loading"], [3, "innerHTML"], [1, "price-range-container", "flex"], ["class", "car-rentals-filter-btn inline-flex", 4, "ngIf"], [3, "sort", "options", "disabled", "skeletonLoading", "sortChange"], [1, "map-button-container", "flex"], ["class", "show-map-btn car-rental-map-btn inline-flex", 3, "click", 4, "ngIf"], [1, "car-rentals-filter-btn", "inline-flex"], [3, "filterCount", "clickFilter", "clearFilter"], [1, "show-map-btn", "car-rental-map-btn", "inline-flex", 3, "click"], ["class", "flex car-rentals-list-container-skeleton-loader", 4, "ngIf"], [1, "flex", "car-rentals-list-container-skeleton-loader"], ["carRentalListSkeletonLoader", ""], [3, "isRental"], ["class", "car-rentals-cart-data", 4, "ngIf"], [1, "car-rentals-list-container", 3, "hidden"], ["carRentalList", ""], [3, "count", "isListCompleted", "carRentals", "isMobile$", "selectedCarRentalId", "carRentalListMetadata", "openPopupModel", "selectedCarRental", "cancelSelection", "nextPage", "showCarRentalDetails"], [1, "car-rentals-cart-data"], [3, "carRentalPackages", "carRentalCartData", "selectedChangeOptions", "serviceList", "showPackagesFlag", "removedItem", "changeCarRentals", "newCarRentalPackageSelected", "loadCarRentalPackages", "showCarRentalDetails"], [1, "service-submission-container"], ["confirmationComponent", ""], [3, "cancelSelection", "submitBooking", 4, "ngIf"], [3, "cancelSelection", "submitBooking"], [1, "confirm-and-continue-block-replacement"], ["confirmationComponentReplacer", ""]],
  template: function CarRentalsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, CarRentalsComponent_div_1_Template, 4, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](4, CarRentalsComponent_div_4_Template, 2, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](6, CarRentalsComponent_div_6_Template, 4, 4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](7, CarRentalsComponent_div_7_Template, 7, 10, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](8, CarRentalsComponent_ng_container_8_Template, 5, 6, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](9, CarRentalsComponent_ng_container_9_Template, 5, 8, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](10, CarRentalsComponent_div_10_Template, 3, 1, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](11, CarRentalsComponent_div_11_Template, 2, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("hidden", ctx.noResultAvailable && !ctx.skeletonFilterLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 9, ctx.isMobile$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](5, 11, ctx.platformService.isMobileDevice$));
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.loaderService.skeletonLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !ctx.loaderService.skeletonLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.confirmable && !ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.cartData && ctx.cartData.items.length);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_11__.TzIconComponent, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_31__.NgxSkeletonLoaderComponent, _results_filters_filters_component__WEBPACK_IMPORTED_MODULE_12__.FiltersComponent, _components_mob_filter_navbar_mob_filter_navbar_component__WEBPACK_IMPORTED_MODULE_13__.MobFilterNavbarComponent, _shared_components_results_top_info_block_results_top_info_block_component__WEBPACK_IMPORTED_MODULE_14__.ResultsTopInfoBlockComponent, _results_filters_components_filter_btn_filter_btn_component__WEBPACK_IMPORTED_MODULE_15__.FilterBtnComponent, _shared_components_price_range_filter_price_range_filter_component__WEBPACK_IMPORTED_MODULE_16__.PriceRangeFilterComponent, _components_acc_car_transfer_skeleton_acc_car_transfer_skeleton_component__WEBPACK_IMPORTED_MODULE_17__.AccCarTransferSkeletonComponent, _components_car_transfer_skeleton_car_transfer_skeleton_component__WEBPACK_IMPORTED_MODULE_18__.CarTransferSkeletonComponent, _components_selected_car_rentals_selected_car_rentals_component__WEBPACK_IMPORTED_MODULE_19__.SelectedCarRentalsComponent, _components_car_rental_list_car_rental_list_component__WEBPACK_IMPORTED_MODULE_20__.CarRentalListComponent, _shared_components_service_booking_confirmation_component_service_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_21__.ServiceBookingConfirmationComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_32__.TranslatePipe, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_22__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n[_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%] {\n  align-items: center;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%]   .car-rentals-filter-btn[_ngcontent-%COMP%] {\n  margin-right: 1.5rem;\n}\n[_nghost-%COMP%]   .car-rentals-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n  flex: 1;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .car-rentals-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .car-rentals-container[_ngcontent-%COMP%]   .car-rentals-filters-container[_ngcontent-%COMP%] {\n  width: 290px;\n  padding-right: 50px;\n}\n[_nghost-%COMP%]   .car-rentals-container[_ngcontent-%COMP%]   .car-rentals-filters-container[_ngcontent-%COMP%]   .car-rentals-filter[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .car-rentals-container[_ngcontent-%COMP%]   .car-rentals-list-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .car-rentals-container[_ngcontent-%COMP%]   .car-rentals-list-container-skeleton-loader[_ngcontent-%COMP%] {\n  scroll-margin: 60px;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .car-rentals-container[_ngcontent-%COMP%]   .car-rentals-list-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .car-rentals-container[_ngcontent-%COMP%]   .car-rentals-list-container-skeleton-loader[_ngcontent-%COMP%] {\n    scroll-margin: 0;\n  }\n}\n[_nghost-%COMP%]   .sidebar-for-mobile[_ngcontent-%COMP%] {\n  position: absolute;\n}\n[_nghost-%COMP%]   .car-rentals-cart-data[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .car-rentals-cart-data[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n[_nghost-%COMP%]   .show-map-btn[_ngcontent-%COMP%] {\n  width: inherit;\n  height: 7.5rem;\n  background: url(/assets/icons/web/icons/map-btn-background.svg) no-repeat center;\n  background-size: cover;\n  margin-bottom: 1.5rem;\n  cursor: pointer;\n  display: grid;\n  place-content: center;\n  border-radius: 0.25rem;\n}\n[_nghost-%COMP%]   .show-map-btn[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 2.625rem;\n  height: 2.625rem;\n  margin: auto;\n}\n[_nghost-%COMP%]   .show-map-btn[_ngcontent-%COMP%]   .btn-label[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-bold);\n  font-size: 1rem;\n  line-height: 1.25rem;\n  letter-spacing: 0.01em;\n  margin-top: 0.25rem;\n  color: var(--color-grey-mobile);\n}\n[_nghost-%COMP%]   .show-map-btn.car-rental-map-btn[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100%;\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .show-map-btn.car-rental-map-btn[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n}\n@media not all and (hover: none) {\n  [_nghost-%COMP%]   .show-map-btn[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n}\n[_nghost-%COMP%]   .map-button-container[_ngcontent-%COMP%] {\n  height: 100%;\n  flex: auto;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .service-submission-container[_ngcontent-%COMP%] {\n  scroll-margin: 260px;\n}\n[_nghost-%COMP%]   .confirm-and-continue-block-replacement[_ngcontent-%COMP%] {\n  scroll-margin: 260px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZW50YWxzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy91dGlscy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsT0FBQTtBQURKO0FBR0k7RUFDSSxtQkFBQTtFQUNBLG1CQUFBO0FBRFI7QUFHUTtFQUNJLG9CQUFBO0FBRFo7QUFLSTtFQUNJLG1CQUFBO0VBQ0EsT0FBQTtBQUhSO0FDc0NJO0VEckNBO0lBS1Esc0JBQUE7RUFGVjtBQUNGO0FBSVE7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7QUFGWjtBQUlZO0VBQ0ksT0FBQTtBQUZoQjtBQU1RO0VBQ0ksbUJBQUE7QUFKWjtBQ3VCSTtFRHBCSTtJQUlRLGdCQUFBO0VBSGQ7QUFDRjtBQU9JO0VBQ0ksa0JBQUE7QUFMUjtBQVFJO0VBQ0ksbUJBQUE7QUFOUjtBQ1lJO0VERkk7SUFDSSxnQkFBQTtFQVBWO0FBQ0Y7QUFVSTtFQUNJLGNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0ZBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0FBUlI7QUFVUTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFSWjtBQVdRO0VBQ0ksb0NBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFUWjtBQVlRO0VBQ0ksWUFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQVZaO0FBWVk7RUFDSSxjQUFBO0VBQ0EsZUFBQTtBQVZoQjtBQ1JJO0VBQ0k7SURzQkksWUFBQTtFQVhWO0FBQ0Y7QUFjSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7QUFaUjtBQWVJO0VBQ0ksb0JBQUE7QUFiUjtBQWdCSTtFQUNJLG9CQUFBO0FBZFIiLCJmaWxlIjoiY2FyLXJlbnRhbHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidXRpbHMvbWl4aW5zXCI7XG5cbjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXg6IDE7XG5cbiAgICAucHJpY2UtcmFuZ2UtY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAuY2FyLXJlbnRhbHMtZmlsdGVyLWJ0biB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jYXItcmVudGFscy1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhci1yZW50YWxzLWZpbHRlcnMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAyOTBweDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG5cbiAgICAgICAgICAgIC5jYXItcmVudGFscy1maWx0ZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyLXJlbnRhbHMtbGlzdC1jb250YWluZXIsIC5jYXItcmVudGFscy1saXN0LWNvbnRhaW5lci1za2VsZXRvbi1sb2FkZXIge1xuICAgICAgICAgICAgc2Nyb2xsLW1hcmdpbjogNjBweDtcblxuICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwtbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNpZGViYXItZm9yLW1vYmlsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAuY2FyLXJlbnRhbHMtY2FydC1kYXRhIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAuY2FyLXJlbnRhbHMtY2FydC1kYXRhIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2hvdy1tYXAtYnRuIHtcbiAgICAgICAgd2lkdGg6IGluaGVyaXQ7XG4gICAgICAgIGhlaWdodDogNy41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaWNvbnMvbWFwLWJ0bi1iYWNrZ3JvdW5kLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcblxuICAgICAgICB0ei1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAyLjYyNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMi42MjVyZW07XG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAuYnRuLWxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleS1tb2JpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5jYXItcmVudGFsLW1hcC1idG4ge1xuICAgICAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAgICAgdHotaWNvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEuNzVyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgb24taG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1hcC1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIH1cblxuICAgIC5zZXJ2aWNlLXN1Ym1pc3Npb24tY29udGFpbmVyIHtcbiAgICAgICAgc2Nyb2xsLW1hcmdpbjogMjYwcHg7XG4gICAgfVxuXG4gICAgLmNvbmZpcm0tYW5kLWNvbnRpbnVlLWJsb2NrLXJlcGxhY2VtZW50IHtcbiAgICAgICAgc2Nyb2xsLW1hcmdpbjogMjYwcHg7XG4gICAgfVxufVxuIiwiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 44265:
/*!*******************************************************************!*\
  !*** ./src/app/modules/results/car-rentals/car-rentals.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRentalsModule": () => (/* binding */ CarRentalsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _car_rentals_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car-rentals-routing.module */ 86525);
/* harmony import */ var _car_rentals_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./car-rentals.component */ 9433);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _components_car_rental_list_car_rental_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/car-rental-list/car-rental-list.component */ 81361);
/* harmony import */ var _components_confirm_selection_confirm_selection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/confirm-selection/confirm-selection.component */ 32984);
/* harmony import */ var _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../results-cart-item-selection.module */ 8793);
/* harmony import */ var _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../results-filters/results-filters.module */ 1675);
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../map/map.module */ 14522);
/* harmony import */ var _components_car_rental_map_car_rental_map_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/car-rental-map/car-rental-map.component */ 63297);
/* harmony import */ var _components_car_rental_map_marker_car_rental_map_marker_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/car-rental-map-marker/car-rental-map-marker.component */ 64073);
/* harmony import */ var _components_car_rental_map_available_popup_car_rental_map_available_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/car-rental-map-available-popup/car-rental-map-available-popup.component */ 75657);
/* harmony import */ var _components_car_rental_map_empty_popup_car_rental_map_empty_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/car-rental-map-empty-popup/car-rental-map-empty-popup.component */ 24130);
/* harmony import */ var _components_car_rental_hotel_marker_popup_car_rental_hotel_marker_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/car-rental-hotel-marker-popup/car-rental-hotel-marker-popup.component */ 62089);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);















class CarRentalsModule {
}
CarRentalsModule.ɵfac = function CarRentalsModule_Factory(t) { return new (t || CarRentalsModule)(); };
CarRentalsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: CarRentalsModule });
CarRentalsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _car_rentals_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarRentalsRoutingModule,
            _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_5__.ResultsCartItemSelectionModule,
            _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_6__.ResultsFiltersModule,
            _map_map_module__WEBPACK_IMPORTED_MODULE_7__.TzMapModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](CarRentalsModule, { declarations: [_car_rentals_component__WEBPACK_IMPORTED_MODULE_1__.CarRentalsComponent,
        _components_car_rental_list_car_rental_list_component__WEBPACK_IMPORTED_MODULE_3__.CarRentalListComponent,
        _components_confirm_selection_confirm_selection_component__WEBPACK_IMPORTED_MODULE_4__.ConfirmSelectionComponent,
        _components_car_rental_map_car_rental_map_component__WEBPACK_IMPORTED_MODULE_8__.CarRentalMapComponent,
        _components_car_rental_map_marker_car_rental_map_marker_component__WEBPACK_IMPORTED_MODULE_9__.CarRentalMapMarkerComponent,
        _components_car_rental_map_available_popup_car_rental_map_available_popup_component__WEBPACK_IMPORTED_MODULE_10__.CarRentalMapAvailablePopupComponent,
        _components_car_rental_map_empty_popup_car_rental_map_empty_popup_component__WEBPACK_IMPORTED_MODULE_11__.CarRentalMapEmptyPopupComponent,
        _components_car_rental_hotel_marker_popup_car_rental_hotel_marker_popup_component__WEBPACK_IMPORTED_MODULE_12__.CarRentalHotelMarkerPopupComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _car_rentals_routing_module__WEBPACK_IMPORTED_MODULE_0__.CarRentalsRoutingModule,
        _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_5__.ResultsCartItemSelectionModule,
        _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_6__.ResultsFiltersModule,
        _map_map_module__WEBPACK_IMPORTED_MODULE_7__.TzMapModule] }); })();


/***/ }),

/***/ 62089:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/results/car-rentals/components/car-rental-hotel-marker-popup/car-rental-hotel-marker-popup.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRentalHotelMarkerPopupComponent": () => (/* binding */ CarRentalHotelMarkerPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/pipes/tz-currency.pipe */ 98967);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);



function CarRentalHotelMarkerPopupComponent_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 8);
} }
class CarRentalHotelMarkerPopupComponent {
    constructor(tzCurrencyPipe) {
        this.tzCurrencyPipe = tzCurrencyPipe;
    }
    ngOnInit() {
        const imageSize = this.hotelMarker.properties.imageProvider === 'Ostrovok' ? '240x240' : 'medium';
        let starsStr = '';
        for (let i = 0; i < this.hotelMarker.properties.star; i++) {
            starsStr += '<img src="/assets/icons/web/icons/star.svg" alt="">';
        }
        this.params = {
            image: this.hotelMarker.properties.imageUrl.replace('{size}', imageSize),
            name: this.hotelMarker.properties.name.length > 30
                ? this.hotelMarker.properties.name.substring(0, 30) + '... '
                : this.hotelMarker.properties.name,
            starsStr,
            address: this.hotelMarker.properties.address,
            price: this.tzCurrencyPipe.transform(this.hotelMarker.properties.cheapestPrice.listPrice, this.hotelMarker.properties.cheapestPrice.listPriceCur),
        };
    }
    numberReturn(length) {
        return new Array(length);
    }
}
CarRentalHotelMarkerPopupComponent.ɵfac = function CarRentalHotelMarkerPopupComponent_Factory(t) { return new (t || CarRentalHotelMarkerPopupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_0__.TzCurrencyPipe)); };
CarRentalHotelMarkerPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarRentalHotelMarkerPopupComponent, selectors: [["tz-car-rental-hotel-marker-popup"]], inputs: { hotelMarker: "hotelMarker" }, decls: 11, vars: 5, consts: [[1, "tz-map-result-block"], ["alt", "", 1, "hotel-image", 3, "src"], [1, "hotel-info"], [1, "hotel-name"], [1, "hotel-stars"], ["src", "/assets/icons/web/icons/star.svg", "alt", "", 4, "ngFor", "ngForOf"], [1, "hotel-address"], [1, "hotel-price"], ["src", "/assets/icons/web/icons/star.svg", "alt", ""]], template: function CarRentalHotelMarkerPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, CarRentalHotelMarkerPopupComponent_img_6_Template, 1, 0, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("src", ctx.params.image, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx.params.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.numberReturn(ctx.hotelMarker.properties.star));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.params.address);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx.params.price);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf], styles: [".car-rental-map-block-popup[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 20px;\n  pointer-events: auto;\n  width: 280px;\n  background: var(--color-primary-white);\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .tz-icon-clear[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--color-gray-disabled);\n  height: 22px;\n  width: 22px;\n  display: inline-flex;\n  font-size: 1rem;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-popup-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  flex: auto;\n  font-size: 14px;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-popup-title.provider[_ngcontent-%COMP%] {\n  color: var(--color-dark-gray);\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-popup-title.address[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-shade);\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .car-rental-image[_ngcontent-%COMP%] {\n  height: 100px;\n  width: auto;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%]   .car-rental-location-information-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-shade);\n  font-weight: 500;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%]   .car-rental-location-information-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: var(--color-primary-black);\n  font-weight: 600;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%]   .car-rental-location-information-row[_ngcontent-%COMP%]   .bordered-separator[_ngcontent-%COMP%] {\n  flex: auto;\n  height: 1px;\n  border-bottom: 1px dashed #d1d1d1;\n  margin-top: 13px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .search-button-container[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .search-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZW50YWwtaG90ZWwtbWFya2VyLXBvcHVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtBQUNKO0FBQ0k7RUFDSSxlQUFBO0VBQ0EsaUNBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUNSO0FBRUk7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBQVI7QUFFUTtFQUNJLDZCQUFBO0FBQVo7QUFHUTtFQUNJLG9DQUFBO0FBRFo7QUFLSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBSFI7QUFRWTtFQUNJLG9DQUFBO0VBQ0EsZ0JBQUE7QUFOaEI7QUFTWTtFQUNJLGlDQUFBO0VBQ0EsZ0JBQUE7QUFQaEI7QUFVWTtFQUNJLFVBQUE7RUFDQSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFSaEI7QUFhSTtFQUNJLG1CQUFBO0FBWFI7QUFhUTtFQUNJLE9BQUE7QUFYWiIsImZpbGUiOiJjYXItcmVudGFsLWhvdGVsLW1hcmtlci1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXItcmVudGFsLW1hcC1ibG9jay1wb3B1cCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuXG4gICAgLnR6LWljb24tY2xlYXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LWRpc2FibGVkKTtcbiAgICAgICAgaGVpZ2h0OiAyMnB4O1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICB9XG5cbiAgICAuY2FyLXJlbnRhbC1wb3B1cC10aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZsZXg6IGF1dG87XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcblxuICAgICAgICAmLnByb3ZpZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1kYXJrLWdyYXkpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5hZGRyZXNzIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5pbWFnZS1jb250YWluZXIgLmNhci1yZW50YWwtaW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogYXV0bztcbiAgICB9XG5cbiAgICAuY2FyLXJlbnRhbC1sb2NhdGlvbi1pbmZvcm1hdGlvbiB7XG4gICAgICAgIC5jYXItcmVudGFsLWxvY2F0aW9uLWluZm9ybWF0aW9uLXJvdyB7XG4gICAgICAgICAgICAubGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItbWVkaXVtLXNoYWRlKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudmFsdWUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWJsYWNrKTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYm9yZGVyZWQtc2VwYXJhdG9yIHtcbiAgICAgICAgICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMXB4O1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2QxZDFkMTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxM3B4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VhcmNoLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 81361:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/results/car-rentals/components/car-rental-list/car-rental-list.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRentalListComponent": () => (/* binding */ CarRentalListComponent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_trazler_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_components_paginate_component_ts_service_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/paginate.component.ts/service.list.component */ 32553);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-bootstrap/utils */ 98172);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/block-separator/block-separator.component */ 183);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-infinite-scroll */ 34229);
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-virtual-scroller */ 56443);
/* harmony import */ var _car_rental_list_item_car_rental_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../car-rental-list-item/car-rental-list-item.component */ 79229);
/* harmony import */ var _mob_car_rental_list_item_mob_car_rental_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../mob-car-rental-list-item/mob-car-rental-list-item.component */ 50736);
/* harmony import */ var _car_rental_packages_car_rental_packages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../car-rental-packages/car-rental-packages.component */ 1695);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 87514);















const _c0 = ["carRentalScroller"];
const _c1 = ["carRentalListContainer"];

const _c2 = function (a0) {
  return {
    resultsCount: a0,
    tripType: ""
  };
};

function CarRentalListComponent_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9)(1, "tz-block-separator")(2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](4, 2, "CAR_RENTAL.CAR_FOUND"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind2"](6, 4, ctx_r4.carRentalListMetadata.count > 1 ? "GENERAL.OPTIONS_FOUND" : "GENERAL.OPTION_FOUND", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c2, ctx_r4.carRentals.length)), " ");
  }
}

function CarRentalListComponent_ng_container_2_div_5_tz_car_rental_list_item_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tz-car-rental-list-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectedCarRental", function CarRentalListComponent_ng_container_2_div_5_tz_car_rental_list_item_1_Template_tz_car_rental_list_item_selectedCarRental_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r11.onSelectCarRental(i_r8);
    })("openPopupModel", function CarRentalListComponent_ng_container_2_div_5_tz_car_rental_list_item_1_Template_tz_car_rental_list_item_openPopupModel_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
      return ctx_r14.openPopupModel.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const carRental_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("carRental", carRental_r7);
  }
}

function CarRentalListComponent_ng_container_2_div_5_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function CarRentalListComponent_ng_container_2_div_5_div_2_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      const carRental_r7 = ctx_r17.$implicit;
      const i_r8 = ctx_r17.index;
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r16.onShowCarDetails(carRental_r7, i_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "tz-mob-car-rental-list-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectedCarRental", function CarRentalListComponent_ng_container_2_div_5_div_2_Template_tz_mob_car_rental_list_item_selectedCarRental_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r18);
      const i_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r19.onSelectCarRental(i_r8);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const carRental_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("carRental", carRental_r7);
  }
}

function CarRentalListComponent_ng_container_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CarRentalListComponent_ng_container_2_div_5_tz_car_rental_list_item_1_Template, 1, 1, "tz-car-rental-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CarRentalListComponent_ng_container_2_div_5_div_2_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r6.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.platformService.isMobileDevice);
  }
}

function CarRentalListComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, CarRentalListComponent_ng_container_2_div_1_Template, 7, 9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("scrolled", function CarRentalListComponent_ng_container_2_Template_div_scrolled_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r22.onScroll($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "virtual-scroller", 6, 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("vsChange", function CarRentalListComponent_ng_container_2_Template_virtual_scroller_vsChange_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r24.handleScrollOnContainer();
    })("vsEnd", function CarRentalListComponent_ng_container_2_Template_virtual_scroller_vsEnd_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r25.handleScrollOnContainer();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, CarRentalListComponent_ng_container_2_div_5_Template, 3, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](4);

    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.carRentalListMetadata.count);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("scrollWindow", ctx_r1.infiniteScrollConfig.scrollWindow)("infiniteScrollDistance", ctx_r1.infiniteScrollConfig.infiniteScrollDistance)("infiniteScrollThrottle", ctx_r1.infiniteScrollConfig.infiniteScrollThrottle)("fromRoot", ctx_r1.infiniteScrollConfig.fromRoot)("infiniteScrollContainer", ctx_r1.infiniteScrollConfig.infiniteScrollContainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", ctx_r1.carRentals)("parentScroll", ctx_r1.scrollingContainer)("enableUnequalChildrenSizes", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", _r5.viewPortItems)("ngForTrackBy", ctx_r1.identify);
  }
}

function CarRentalListComponent_ng_template_3_tz_car_rental_packages_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "tz-car-rental-packages", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("selectPackage", function CarRentalListComponent_ng_template_3_tz_car_rental_packages_6_Template_tz_car_rental_packages_selectPackage_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
      return ctx_r27.selectRentalPackage($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("packages", ctx_r26.selectedCar.packagesAvailable)("currentKey", ctx_r26.selectedCar.currentPackage.packageKey);
  }
}

function CarRentalListComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 9)(1, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 16)(5, "tz-car-rental-list-item", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("openPopupModel", function CarRentalListComponent_ng_template_3_Template_tz_car_rental_list_item_openPopupModel_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
      return ctx_r29.openPopupModel.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, CarRentalListComponent_ng_template_3_tz_car_rental_packages_6_Template, 1, 2, "tz-car-rental-packages", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 5, "CAR_RENTAL.SELECTED"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("carRental", ctx_r3.selectedCar)("selectedRental", true)("selectable", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r3.selectedCar && ctx_r3.selectedCar.packagesAvailable.length > 1);
  }
}

class CarRentalListComponent extends _core_components_paginate_component_ts_service_list_component__WEBPACK_IMPORTED_MODULE_1__.ServiceListComponent {
  constructor(renderer, platformService, modalService) {
    super();
    this.renderer = renderer;
    this.platformService = platformService;
    this.modalService = modalService;
    this.virtualScroller = undefined;
    this.listContainer = undefined;
    this.count = 0;
    this.carRentals = [];
    this.carRentalListMetadata = {};
    this.isListCompleted = false;
    this.selectedCarRentalId = '';
    this.nextPage = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.selectedCarRental = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.cancelSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.openPopupModel = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.showCarRentalDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
    this.currentSearchJourneyType = 'Onward';
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.setScrollingContainer();
  }

  onSelectCarRental(index) {
    var _a;

    this.renderer.setStyle((_a = this.listContainer) === null || _a === void 0 ? void 0 : _a.nativeElement, 'height', 'auto');
    const selectedRental = JSON.parse(JSON.stringify(this.carRentals[index]));
    selectedRental.packagesAvailable = selectedRental.packagesAvailable.filter(p => p.notApplicable === false);
    this.selectedCar = selectedRental;
    this.selectedCar.currentPackage = selectedRental.packagesAvailable[0];
    this.selectedCarRental.emit(this.selectedCar);
  }

  selectRentalPackage(rentalPackage) {
    this.selectedCar.currentPackage = rentalPackage;
    this.selectedCarRental.emit(this.selectedCar);
  }

  onCancelSelection() {
    this.cancelSelection.emit();
    this.selectedCar = {};
  }

  onScroll($event) {
    if (!this.isListCompleted) {
      this.nextPage.emit();
    }
  }

  identify(index, item) {
    return item.id;
  }

  handleScrollOnContainer(double = true) {
    requestAnimationFrame(() => {
      var _a, _b, _c, _d;

      if (this.virtualScroller) {
        const height = ((_a = this.virtualScroller) === null || _a === void 0 ? void 0 : _a.viewPortInfo.maxScrollPosition) + ((_b = this.virtualScroller) === null || _b === void 0 ? void 0 : _b.viewPortInfo.scrollEndPosition) - this.virtualScroller.viewPortInfo.scrollStartPosition + 24;

        if (this.selectedCar) {
          this.renderer.setStyle((_c = this.listContainer) === null || _c === void 0 ? void 0 : _c.nativeElement, 'height', 'auto');
        } else {
          this.renderer.setStyle((_d = this.listContainer) === null || _d === void 0 ? void 0 : _d.nativeElement, 'height', height + 'px');
        }

        if (double) {
          this.handleScrollOnContainer(false);
        }
      }
    });
  }

  setScrollingContainer() {
    const element = this.renderer.selectRootElement('.wrapper', true);
    this.scrollingContainer = element ? element : ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_10__.window;
  }

  onShowCarDetails(carRental, index) {
    var _this = this;

    return (0,_opt_atlassian_pipelines_agent_build_trazler_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.onSelectCarRental(index);

      _this.showCarRentalDetails.emit(carRental);
    })();
  }

}

CarRentalListComponent.ɵfac = function CarRentalListComponent_Factory(t) {
  return new (t || CarRentalListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_2__.PlatformService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_3__.ModalService));
};

CarRentalListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({
  type: CarRentalListComponent,
  selectors: [["tz-car-rental-list"]],
  viewQuery: function CarRentalListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.virtualScroller = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.listContainer = _t.first);
    }
  },
  inputs: {
    count: "count",
    carRentals: "carRentals",
    isMobile$: "isMobile$",
    carRentalListMetadata: "carRentalListMetadata",
    isListCompleted: "isListCompleted",
    selectedCarRentalId: "selectedCarRentalId"
  },
  outputs: {
    nextPage: "nextPage",
    selectedCarRental: "selectedCarRental",
    cancelSelection: "cancelSelection",
    openPopupModel: "openPopupModel",
    showCarRentalDetails: "showCarRentalDetails"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵInheritDefinitionFeature"]],
  decls: 5,
  vars: 2,
  consts: [[1, "car-rentals"], ["carRentalListContainer", ""], [4, "ngIf", "ngIfElse"], ["selectedCarContainer", ""], ["class", "tz-block-separator-title", 4, "ngIf"], ["infiniteScroll", "", 1, "car-rental-list", 3, "scrollWindow", "infiniteScrollDistance", "infiniteScrollThrottle", "fromRoot", "infiniteScrollContainer", "scrolled"], [3, "items", "parentScroll", "enableUnequalChildrenSizes", "vsChange", "vsEnd"], ["carRentalScroller", ""], ["class", "car-rental-list-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "tz-block-separator-title"], [1, "car-rental-list-item"], [3, "carRental", "selectedCarRental", "openPopupModel", 4, "ngIf"], [3, "click", 4, "ngIf"], [3, "carRental", "selectedCarRental", "openPopupModel"], [3, "click"], [3, "carRental", "selectedCarRental"], [1, "selected-car-container", "flex", "flex-column"], [3, "carRental", "selectedRental", "selectable", "openPopupModel"], [3, "packages", "currentKey", "selectPackage", 4, "ngIf"], [3, "packages", "currentKey", "selectPackage"]],
  template: function CarRentalListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0, 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, CarRentalListComponent_ng_container_2_Template, 6, 11, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, CarRentalListComponent_ng_template_3_Template, 7, 7, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.selectedCarRentalId || ctx.platformService.isMobileDevice)("ngIfElse", _r2);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_4__.BlockSeparatorComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__.InfiniteScrollDirective, ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _car_rental_list_item_car_rental_list_item_component__WEBPACK_IMPORTED_MODULE_6__.CarRentalListItemComponent, _mob_car_rental_list_item_mob_car_rental_list_item_component__WEBPACK_IMPORTED_MODULE_7__.MobCarRentalListItemComponent, _car_rental_packages_car_rental_packages_component__WEBPACK_IMPORTED_MODULE_8__.CarRentalPackagesComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%]   .filter-open-popup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 1.875rem;\n  margin-right: 20px;\n}\n[_nghost-%COMP%]   .car-rentals[_ngcontent-%COMP%] {\n  max-width: 880px;\n  margin: 0 auto;\n}\n[_nghost-%COMP%]   .car-rentals[_ngcontent-%COMP%]   .selected-car-container[_ngcontent-%COMP%] {\n  gap: 20px;\n}\n@media only screen and (max-width: 767px) {\n  [_nghost-%COMP%]   .car-rentals[_ngcontent-%COMP%]   .car-rental-container[_ngcontent-%COMP%] {\n    max-width: 425px;\n  }\n}\n[_nghost-%COMP%]   .car-rental-list-item[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-top: 1.25rem;\n  margin-bottom: 0.5rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .car-rental-list-item[_ngcontent-%COMP%]:not(:first-of-type) {\n    margin: 0.5rem 0 0;\n  }\n}\n[_nghost-%COMP%]   .results-title[_ngcontent-%COMP%] {\n  padding-bottom: 0.625rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZW50YWwtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtBQURGO0FBRUU7RUFDRSxtQkFBQTtBQUFKO0FBR007RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0FBRFI7QUFNRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtBQUpKO0FBTU07RUFDSSxTQUFBO0FBSlY7QUFPSTtFQUNFO0lBQ0UsZ0JBQUE7RUFMTjtBQUNGO0FBVUk7RUFDRSxtQkFBQTtFQUNBLHFCQUFBO0FBUk47QUMyQkk7RURyQkE7SUFLUSxrQkFBQTtFQVBWO0FBQ0Y7QUFXRTtFQUNFLHdCQUFBO0FBVEoiLCJmaWxlIjoiY2FyLXJlbnRhbC1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndXRpbHMvbWl4aW5zJztcblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbiAgLnByaWNlLXJhbmdlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgIC5maWx0ZXItb3Blbi1wb3B1cCB7XG4gICAgICBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuODc1cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLmNhci1yZW50YWxzIHtcbiAgICBtYXgtd2lkdGg6IDg4MHB4O1xuICAgIG1hcmdpbjogMCBhdXRvO1xuXG4gICAgICAuc2VsZWN0ZWQtY2FyLWNvbnRhaW5lciB7XG4gICAgICAgICAgZ2FwOiAyMHB4O1xuICAgICAgfVxuXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAgICAgLmNhci1yZW50YWwtY29udGFpbmVyIHtcbiAgICAgICAgbWF4LXdpZHRoOiA0MjVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuY2FyLXJlbnRhbC1saXN0LWl0ZW0ge1xuICAgICY6bm90KDpmaXJzdC1vZi10eXBlKSB7XG4gICAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwIDA7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucmVzdWx0cy10aXRsZSB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtO1xuICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 75657:
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/modules/results/car-rentals/components/car-rental-map-available-popup/car-rental-map-available-popup.component.ts ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRentalMapAvailablePopupComponent": () => (/* binding */ CarRentalMapAvailablePopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/pipes/tz-currency.pipe */ 98967);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 87514);





function CarRentalMapAvailablePopupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarRentalMapAvailablePopupComponent_div_0_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r1.onCloseButtonClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8)(10, "div", 9)(11, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Cars");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div", 9)(17, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, "Price From");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](22, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14)(24, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function CarRentalMapAvailablePopupComponent_div_0_Template_button_click_24_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r2); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.onShowAllCars(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.marker.supplierName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.marker.cheapest.imageUrl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.marker.address, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.marker.cheapest.totalCarsAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](22, 6, ctx_r0.marker.cheapest.price.listPrice, ctx_r0.marker.cheapest.price.listPriceCur), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 9, "CAR_RENTAL.MAP.SHOW_ALL_CARS"), " ");
} }
class CarRentalMapAvailablePopupComponent {
    constructor() {
        this.searchCars = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() { }
    onShowAllCars() {
        this.searchCars.emit();
    }
    onCloseButtonClicked() {
        this.closePopup.emit();
    }
}
CarRentalMapAvailablePopupComponent.ɵfac = function CarRentalMapAvailablePopupComponent_Factory(t) { return new (t || CarRentalMapAvailablePopupComponent)(); };
CarRentalMapAvailablePopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: CarRentalMapAvailablePopupComponent, selectors: [["tz-car-rental-map-available-car-popup"]], inputs: { marker: "marker" }, outputs: { searchCars: "searchCars", closePopup: "closePopup" }, decls: 1, vars: 1, consts: [["class", "car-rental-map-block-popup flex flex-column", 4, "ngIf"], [1, "car-rental-map-block-popup", "flex", "flex-column"], [1, "flex", "supplier-name"], [1, "car-rental-popup-title", "provider", "flex", "flex-auto"], [1, "tz-icon-clear", 3, "click"], [1, "image-container", "flex", "justify-center"], ["alt", "", 1, "car-rental-image", 3, "src"], [1, "car-rental-popup-title", "address"], [1, "car-rental-location-information", "flex", "flex-column"], [1, "car-rental-location-information-row", "flex", "flex-row"], [1, "label"], [1, "bordered-separator"], [1, "available-cars-count", "value"], [1, "available-cars-price", "value"], [1, "search-button-container", "flex"], [1, "tz-btn", "tz-btn-primary", "tz-btn--select", 3, "click"]], template: function CarRentalMapAvailablePopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, CarRentalMapAvailablePopupComponent_div_0_Template, 27, 11, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.marker);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [_shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_0__.TzCurrencyPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: [".car-rental-map-block-popup[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 20px;\n  pointer-events: auto;\n  width: 280px;\n  background: var(--color-primary-white);\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .tz-icon-clear[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--color-gray-disabled);\n  height: 22px;\n  width: 22px;\n  display: inline-flex;\n  font-size: 1rem;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-popup-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  flex: auto;\n  font-size: 14px;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-popup-title.provider[_ngcontent-%COMP%] {\n  color: var(--color-dark-gray);\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-popup-title.address[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-shade);\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .car-rental-image[_ngcontent-%COMP%] {\n  height: 100px;\n  width: auto;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%]   .car-rental-location-information-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-shade);\n  font-weight: 500;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%]   .car-rental-location-information-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: var(--color-primary-black);\n  font-weight: 600;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%]   .car-rental-location-information-row[_ngcontent-%COMP%]   .bordered-separator[_ngcontent-%COMP%] {\n  flex: auto;\n  height: 1px;\n  border-bottom: 1px dashed #d1d1d1;\n  margin-top: 13px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .search-button-container[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .search-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (max-width: 920px) {\n  .car-rental-map-block-popup[_ngcontent-%COMP%] {\n    padding: 2.5rem 1rem 1.75rem 1rem;\n    position: relative;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .tz-icon-clear[_ngcontent-%COMP%] {\n    width: 1.25rem;\n    height: 1.25rem;\n    font-size: 0.875rem;\n    position: absolute;\n    top: 0.593rem;\n    right: 0.606rem;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .tz-icon-clear[_ngcontent-%COMP%]::before {\n    height: -moz-fit-content;\n    height: fit-content;\n    margin: auto;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%] {\n    margin: 1.25rem auto;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .car-rental-image[_ngcontent-%COMP%] {\n    height: 5rem;\n    width: 10rem;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-popup-title.provider[_ngcontent-%COMP%] {\n    font-weight: var(--font-weight-regular);\n    font-size: 1.25rem;\n    line-height: 1.438rem;\n    color: var(--color-text-mobile);\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-popup-title.address[_ngcontent-%COMP%] {\n    font-weight: var(--font-weight-normal);\n    font-size: 1rem;\n    line-height: 1.375rem;\n    color: var(--color-grey-light-mobile);\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%] {\n    margin-top: 1.25rem;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%]   .car-rental-location-information-row[_ngcontent-%COMP%] {\n    font-weight: var(--font-weight-normal);\n    font-size: 1rem;\n    line-height: 1.375rem;\n    justify-content: space-between;\n    border-bottom: 1px solid var(--color-border-mobile);\n    padding: 0.5rem 0;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%]   .car-rental-location-information-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n    color: var(--color-grey-light-mobile);\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%]   .car-rental-location-information-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n    color: var(--color-text-mobile);\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%]   .car-rental-location-information-row[_ngcontent-%COMP%]   .bordered-separator[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .search-button-container[_ngcontent-%COMP%] {\n    margin-top: 1.75rem;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .search-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-weight: var(--font-weight-regular);\n    font-size: 0.875rem;\n    line-height: 1.5rem;\n    height: 2.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZW50YWwtbWFwLWF2YWlsYWJsZS1jYXItcG9wdXAuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxZQUFBO0VBQ0Esc0NBQUE7QUFESjtBQUdJO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFEUjtBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUZSO0FBSVE7RUFDSSw2QkFBQTtBQUZaO0FBS1E7RUFDSSxvQ0FBQTtBQUhaO0FBT0k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUxSO0FBVVk7RUFDSSxvQ0FBQTtFQUNBLGdCQUFBO0FBUmhCO0FBV1k7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0FBVGhCO0FBWVk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBVmhCO0FBZUk7RUFDSSxtQkFBQTtBQWJSO0FBZVE7RUFDSSxPQUFBO0FBYlo7QUNDSTtFRGxESjtJQW1FUSxpQ0FBQTtJQUNBLGtCQUFBO0VBZE47RUFnQk07SUFDSSxjQUFBO0lBQ0EsZUFBQTtJQUNBLG1CQUFBO0lBRUEsa0JBQUE7SUFDQSxhQUFBO0lBQ0EsZUFBQTtFQWZWO0VBaUJVO0lBQ0ksd0JBQUE7SUFBQSxtQkFBQTtJQUNBLFlBQUE7RUFmZDtFQW1CTTtJQUNJLG9CQUFBO0VBakJWO0VBbUJVO0lBQ0ksWUFBQTtJQUNBLFlBQUE7RUFqQmQ7RUFxQk07SUFDSSx1Q0FBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSwrQkFBQTtFQW5CVjtFQXNCTTtJQUNJLHNDQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0EscUNBQUE7RUFwQlY7RUF1Qk07SUFDSSxtQkFBQTtFQXJCVjtFQXVCVTtJQUNJLHNDQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBRUEsOEJBQUE7SUFDQSxtREFBQTtJQUNBLGlCQUFBO0VBdEJkO0VBd0JjO0lBQ0kscUNBQUE7RUF0QmxCO0VBeUJjO0lBQ0ksK0JBQUE7RUF2QmxCO0VBMEJjO0lBQ0ksYUFBQTtFQXhCbEI7RUE2Qk07SUFDSSxtQkFBQTtFQTNCVjtFQTZCVTtJQUNJLHVDQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLGNBQUE7RUEzQmQ7QUFDRiIsImZpbGUiOiJjYXItcmVudGFsLW1hcC1hdmFpbGFibGUtY2FyLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG4uY2FyLXJlbnRhbC1tYXAtYmxvY2stcG9wdXAge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgIHdpZHRoOiAyODBweDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcblxuICAgIC50ei1pY29uLWNsZWFyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheS1kaXNhYmxlZCk7XG4gICAgICAgIGhlaWdodDogMjJweDtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgLmNhci1yZW50YWwtcG9wdXAtdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG5cbiAgICAgICAgJi5wcm92aWRlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZGFyay1ncmF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuYWRkcmVzcyB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW1hZ2UtY29udGFpbmVyIC5jYXItcmVudGFsLWltYWdlIHtcbiAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgfVxuXG4gICAgLmNhci1yZW50YWwtbG9jYXRpb24taW5mb3JtYXRpb24ge1xuICAgICAgICAuY2FyLXJlbnRhbC1sb2NhdGlvbi1pbmZvcm1hdGlvbi1yb3cge1xuICAgICAgICAgICAgLmxhYmVsIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLW1lZGl1bS1zaGFkZSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1ibGFjayk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmJvcmRlcmVkLXNlcGFyYXRvciB7XG4gICAgICAgICAgICAgICAgZmxleDogYXV0bztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkMWQxZDE7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMTNweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlYXJjaC1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcblxuICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIHBhZGRpbmc6IDIuNXJlbSAxcmVtIDEuNzVyZW0gMXJlbTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC50ei1pY29uLWNsZWFyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxLjI1cmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcblxuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiAwLjU5M3JlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAwLjYwNnJlbTtcblxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luOiAxLjI1cmVtIGF1dG87XG5cbiAgICAgICAgICAgIC5jYXItcmVudGFsLWltYWdlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDVyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhci1yZW50YWwtcG9wdXAtdGl0bGUucHJvdmlkZXIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDM4cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXItcmVudGFsLXBvcHVwLXRpdGxlLmFkZHJlc3Mge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zNzVyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleS1saWdodC1tb2JpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhci1yZW50YWwtbG9jYXRpb24taW5mb3JtYXRpb24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcblxuICAgICAgICAgICAgLmNhci1yZW50YWwtbG9jYXRpb24taW5mb3JtYXRpb24tcm93IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzc1cmVtO1xuXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMDtcblxuICAgICAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LWxpZ2h0LW1vYmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnZhbHVlIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuYm9yZGVyZWQtc2VwYXJhdG9yIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS43NXJlbTtcblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 24130:
/*!***************************************************************************************************************************!*\
  !*** ./src/app/modules/results/car-rentals/components/car-rental-map-empty-popup/car-rental-map-empty-popup.component.ts ***!
  \***************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRentalMapEmptyPopupComponent": () => (/* binding */ CarRentalMapEmptyPopupComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




function CarRentalMapEmptyPopupComponent_div_0_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r1.marker.supplierName, " ");
} }
function CarRentalMapEmptyPopupComponent_div_0_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.marker.supplierName, " ");
} }
function CarRentalMapEmptyPopupComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.marker.locationName, " ");
} }
function CarRentalMapEmptyPopupComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r4.marker.supplierName, " ");
} }
function CarRentalMapEmptyPopupComponent_div_0_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r5.marker.address, " ");
} }
function CarRentalMapEmptyPopupComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1)(1, "div", 2)(2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarRentalMapEmptyPopupComponent_div_0_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onCloseButtonClicked(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CarRentalMapEmptyPopupComponent_div_0_div_3_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CarRentalMapEmptyPopupComponent_div_0_div_4_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CarRentalMapEmptyPopupComponent_div_0_div_5_Template, 2, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, CarRentalMapEmptyPopupComponent_div_0_div_6_Template, 2, 1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CarRentalMapEmptyPopupComponent_div_0_div_7_Template, 2, 1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7)(9, "button", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CarRentalMapEmptyPopupComponent_div_0_Template_button_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.onSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.marker.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.marker.address && !ctx_r0.marker.locationName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.marker.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.marker.address && ctx_r0.marker.locationName);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.marker.address);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 6, "SEARCH.SEARCH"), " ");
} }
class CarRentalMapEmptyPopupComponent {
    constructor() {
        this.searchCars = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.closePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
    onCloseButtonClicked() {
        this.closePopup.emit();
    }
    onSearch() {
        this.searchCars.emit();
    }
}
CarRentalMapEmptyPopupComponent.ɵfac = function CarRentalMapEmptyPopupComponent_Factory(t) { return new (t || CarRentalMapEmptyPopupComponent)(); };
CarRentalMapEmptyPopupComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CarRentalMapEmptyPopupComponent, selectors: [["tz-car-rental-map-empty-popup"]], inputs: { marker: "marker" }, outputs: { searchCars: "searchCars", closePopup: "closePopup" }, decls: 1, vars: 1, consts: [["class", "car-rental-map-block-popup flex flex-column", 4, "ngIf"], [1, "car-rental-map-block-popup", "flex", "flex-column"], [1, "flex", "title-container"], [1, "tz-icon-clear", 3, "click"], ["class", "car-rental-popup-title provider flex flex-auto", 4, "ngIf"], ["class", "car-rental-popup-title address supplier-name", 4, "ngIf"], ["class", "car-rental-popup-title address supplier-address", 4, "ngIf"], [1, "search-button-container", "flex"], [1, "tz-btn", "tz-btn-primary", "tz-btn--select", 3, "click"], [1, "car-rental-popup-title", "provider", "flex", "flex-auto"], [1, "car-rental-popup-title", "address", "supplier-name"], [1, "car-rental-popup-title", "address", "supplier-address"]], template: function CarRentalMapEmptyPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, CarRentalMapEmptyPopupComponent_div_0_Template, 12, 8, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.marker);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".car-rental-map-block-popup[_ngcontent-%COMP%] {\n  font-size: 14px;\n  padding: 20px;\n  pointer-events: auto;\n  width: 280px;\n  background: var(--color-primary-white);\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n  margin-bottom: 0.75rem;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .tz-icon-clear[_ngcontent-%COMP%] {\n  cursor: pointer;\n  color: var(--color-gray-disabled);\n  height: 22px;\n  width: 22px;\n  display: inline-flex;\n  font-size: 1rem;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-popup-title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  flex: auto;\n  font-size: 14px;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-popup-title.provider[_ngcontent-%COMP%] {\n  color: var(--color-dark-gray);\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-popup-title.address[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-shade);\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .image-container[_ngcontent-%COMP%]   .car-rental-image[_ngcontent-%COMP%] {\n  height: 100px;\n  width: auto;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%]   .car-rental-location-information-row[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%] {\n  color: var(--ion-color-medium-shade);\n  font-weight: 500;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%]   .car-rental-location-information-row[_ngcontent-%COMP%]   .value[_ngcontent-%COMP%] {\n  color: var(--color-primary-black);\n  font-weight: 600;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-location-information[_ngcontent-%COMP%]   .car-rental-location-information-row[_ngcontent-%COMP%]   .bordered-separator[_ngcontent-%COMP%] {\n  flex: auto;\n  height: 1px;\n  border-bottom: 1px dashed #d1d1d1;\n  margin-top: 13px;\n  margin-left: 5px;\n  margin-right: 5px;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .search-button-container[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n.car-rental-map-block-popup[_ngcontent-%COMP%]   .search-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  flex: 1;\n}\n@media (max-width: 920px) {\n  .car-rental-map-block-popup[_ngcontent-%COMP%] {\n    padding: 2.5rem 1rem 1.75rem 1rem;\n    position: relative;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%] {\n    margin-bottom: 1.25rem;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .title-container[_ngcontent-%COMP%]   .car-rental-popup-title[_ngcontent-%COMP%] {\n    font-weight: var(--font-weight-regular);\n    font-size: 1.25rem;\n    line-height: 1.438rem;\n    color: var(--color-text-mobile);\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .tz-icon-clear[_ngcontent-%COMP%] {\n    width: 1.25rem;\n    height: 1.25rem;\n    font-size: 0.875rem;\n    position: absolute;\n    top: 0.593rem;\n    right: 0.606rem;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .tz-icon-clear[_ngcontent-%COMP%]::before {\n    height: -moz-fit-content;\n    height: fit-content;\n    margin: auto;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-popup-title.supplier-name[_ngcontent-%COMP%] {\n    font-weight: var(--font-weight-regular);\n    font-size: 1rem;\n    line-height: 1.375rem;\n    color: var(--color-text-mobile);\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .car-rental-popup-title.supplier-address[_ngcontent-%COMP%] {\n    font-weight: var(--font-weight-normal);\n    font-size: 1rem;\n    line-height: 1.375rem;\n    color: var(--color-grey-light-mobile);\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .search-button-container[_ngcontent-%COMP%] {\n    margin-top: 1.75rem;\n  }\n  .car-rental-map-block-popup[_ngcontent-%COMP%]   .search-button-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    font-weight: var(--font-weight-regular);\n    font-size: 0.875rem;\n    line-height: 1.5rem;\n    height: 2.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZW50YWwtbWFwLWVtcHR5LXBvcHVwLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy91dGlscy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLHNDQUFBO0FBREo7QUFHSTtFQUNJLDJCQUFBO0VBQ0Esc0JBQUE7QUFEUjtBQUlJO0VBQ0ksZUFBQTtFQUNBLGlDQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxvQkFBQTtFQUNBLGVBQUE7QUFGUjtBQUtJO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQUhSO0FBS1E7RUFDSSw2QkFBQTtBQUhaO0FBTVE7RUFDSSxvQ0FBQTtBQUpaO0FBUUk7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQU5SO0FBV1k7RUFDSSxvQ0FBQTtFQUNBLGdCQUFBO0FBVGhCO0FBWVk7RUFDSSxpQ0FBQTtFQUNBLGdCQUFBO0FBVmhCO0FBYVk7RUFDSSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGlDQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBWGhCO0FBZ0JJO0VBQ0ksbUJBQUE7QUFkUjtBQWdCUTtFQUNJLE9BQUE7QUFkWjtBQ0hJO0VEbERKO0lBd0VRLGlDQUFBO0lBQ0Esa0JBQUE7RUFmTjtFQWlCTTtJQUNJLHNCQUFBO0VBZlY7RUFpQlU7SUFDSSx1Q0FBQTtJQUNBLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSwrQkFBQTtFQWZkO0VBbUJNO0lBQ0ksY0FBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUVBLGtCQUFBO0lBQ0EsYUFBQTtJQUNBLGVBQUE7RUFsQlY7RUFvQlU7SUFDSSx3QkFBQTtJQUFBLG1CQUFBO0lBQ0EsWUFBQTtFQWxCZDtFQXNCTTtJQUNJLHVDQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0EsK0JBQUE7RUFwQlY7RUF1Qk07SUFDSSxzQ0FBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtJQUNBLHFDQUFBO0VBckJWO0VBd0JNO0lBQ0ksbUJBQUE7RUF0QlY7RUF3QlU7SUFDSSx1Q0FBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxjQUFBO0VBdEJkO0FBQ0YiLCJmaWxlIjoiY2FyLXJlbnRhbC1tYXAtZW1wdHktcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidXRpbHMvbWl4aW5zXCI7XG5cbi5jYXItcmVudGFsLW1hcC1ibG9jay1wb3B1cCB7XG4gICAgZm9udC1zaXplOiAxNHB4O1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IGF1dG87XG4gICAgd2lkdGg6IDI4MHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuXG4gICAgLnRpdGxlLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgICB9XG5cbiAgICAudHotaWNvbi1jbGVhciB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktZGlzYWJsZWQpO1xuICAgICAgICBoZWlnaHQ6IDIycHg7XG4gICAgICAgIHdpZHRoOiAyMnB4O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgIH1cblxuICAgIC5jYXItcmVudGFsLXBvcHVwLXRpdGxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZmxleDogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuXG4gICAgICAgICYucHJvdmlkZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWRhcmstZ3JheSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmFkZHJlc3Mge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmltYWdlLWNvbnRhaW5lciAuY2FyLXJlbnRhbC1pbWFnZSB7XG4gICAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgIH1cblxuICAgIC5jYXItcmVudGFsLWxvY2F0aW9uLWluZm9ybWF0aW9uIHtcbiAgICAgICAgLmNhci1yZW50YWwtbG9jYXRpb24taW5mb3JtYXRpb24tcm93IHtcbiAgICAgICAgICAgIC5sYWJlbCB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC52YWx1ZSB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYmxhY2spO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ib3JkZXJlZC1zZXBhcmF0b3Ige1xuICAgICAgICAgICAgICAgIGZsZXg6IGF1dG87XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZDFkMWQxO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEzcHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWFyY2gtYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBwYWRkaW5nOiAyLjVyZW0gMXJlbSAxLjc1cmVtIDFyZW07XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAudGl0bGUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG5cbiAgICAgICAgICAgIC5jYXItcmVudGFsLXBvcHVwLXRpdGxlIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQzOHJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnR6LWljb24tY2xlYXIge1xuICAgICAgICAgICAgd2lkdGg6IDEuMjVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuXG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDAuNTkzcmVtO1xuICAgICAgICAgICAgcmlnaHQ6IDAuNjA2cmVtO1xuXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmNhci1yZW50YWwtcG9wdXAtdGl0bGUuc3VwcGxpZXItbmFtZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zNzVyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhci1yZW50YWwtcG9wdXAtdGl0bGUuc3VwcGxpZXItYWRkcmVzcyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3NXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LWxpZ2h0LW1vYmlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS43NXJlbTtcblxuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 64073:
/*!*****************************************************************************************************************!*\
  !*** ./src/app/modules/results/car-rentals/components/car-rental-map-marker/car-rental-map-marker.component.ts ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRentalMapMarkerComponent": () => (/* binding */ CarRentalMapMarkerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/pipes/tz-currency.pipe */ 98967);




function CarRentalMapMarkerComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "tz-icon", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} }
function CarRentalMapMarkerComponent_ng_template_1_div_1_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 9);
} }
function CarRentalMapMarkerComponent_ng_template_1_div_1_img_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "img", 10);
} }
function CarRentalMapMarkerComponent_ng_template_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CarRentalMapMarkerComponent_ng_template_1_div_1_img_1_Template, 1, 0, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CarRentalMapMarkerComponent_ng_template_1_div_1_img_2_Template, 1, 0, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r3.selected);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r3.selected);
} }
function CarRentalMapMarkerComponent_ng_template_1_ng_template_2_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](2, 1, ctx_r8.marker.cheapest.price.listPrice, ctx_r8.marker.cheapest.price.listPriceCur), " ");
} }
function CarRentalMapMarkerComponent_ng_template_1_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CarRentalMapMarkerComponent_ng_template_1_ng_template_2_div_0_Template, 3, 4, "div", 11);
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r5.marker);
} }
const _c0 = function (a0) { return { selected: a0 }; };
function CarRentalMapMarkerComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CarRentalMapMarkerComponent_ng_template_1_div_1_Template, 3, 2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, CarRentalMapMarkerComponent_ng_template_1_ng_template_2_Template, 1, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](3);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, ctx_r2.selected));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r2.marker || !ctx_r2.marker.resultsAvailable)("ngIfElse", _r4);
} }
class CarRentalMapMarkerComponent {
    constructor() {
        this.selected = false;
        this.isMobile = false;
    }
    ngOnInit() { }
}
CarRentalMapMarkerComponent.ɵfac = function CarRentalMapMarkerComponent_Factory(t) { return new (t || CarRentalMapMarkerComponent)(); };
CarRentalMapMarkerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: CarRentalMapMarkerComponent, selectors: [["tz-car-rental-map-marker"]], inputs: { marker: "marker", selected: "selected", isMobile: "isMobile" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["desktopMarker", ""], ["icon", "rental-mob-marker", 1, "mobile-marker"], [1, "tz-map-marker", "car-rental", 3, "ngClass"], ["class", "image-container", 4, "ngIf", "ngIfElse"], ["resultsAvailableView", ""], [1, "image-container"], ["src", "/assets/icons/web/icons/car-blue.svg", 4, "ngIf"], ["src", "/assets/icons/web/icons/car-white.svg", 4, "ngIf"], ["src", "/assets/icons/web/icons/car-blue.svg"], ["src", "/assets/icons/web/icons/car-white.svg"], [4, "ngIf"]], template: function CarRentalMapMarkerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](0, CarRentalMapMarkerComponent_ng_container_0_Template, 2, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, CarRentalMapMarkerComponent_ng_template_1_Template, 4, 5, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isMobile)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_0__.TzIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass], pipes: [_shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_1__.TzCurrencyPipe], styles: ["[_nghost-%COMP%]   .car-rental[_ngcontent-%COMP%] {\n  align-items: center;\n  background-color: white;\n  border-bottom-color: #7e60e8;\n  border-bottom-left-radius: 12px;\n  border-bottom-right-radius: 12px;\n  border-bottom-style: solid;\n  border-bottom-width: 2px;\n  border-image-outset: 0;\n  border-image-repeat: stretch;\n  border-image-slice: 100%;\n  border-image-source: none;\n  border-image-width: 1;\n  border-left-color: #7e60e8;\n  border-left-style: solid;\n  border-left-width: 2px;\n  border-right-color: #7e60e8;\n  border-right-style: solid;\n  border-right-width: 2px;\n  border-top-color: #7e60e8;\n  border-top-left-radius: 12px;\n  border-top-right-radius: 12px;\n  border-top-style: solid;\n  border-top-width: 2px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px 0px;\n  box-sizing: border-box;\n  color: #7e60e8;\n  cursor: pointer;\n  display: flex;\n  font-size: 14px;\n  font-stretch: 100%;\n  font-style: normal;\n  font-feature-settings: normal;\n  font-variant-caps: normal;\n  font-variant-east-asian: normal;\n  font-variant-ligatures: normal;\n  font-variant-numeric: normal;\n  font-weight: 600;\n  height: 30px;\n  left: 0px;\n  letter-spacing: 0.2px;\n  line-height: 22px;\n  padding-bottom: 2px;\n  padding-left: 10px;\n  padding-right: 10px;\n  padding-top: 2px;\n  pointer-events: auto;\n  text-align: center;\n  -webkit-text-size-adjust: 100%;\n          text-size-adjust: 100%;\n  -webkit-user-select: none;\n          user-select: none;\n  width: 53.7969px;\n  will-change: transform;\n  -webkit-font-smoothing: antialiased;\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n  background: white;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .car-rental.selected[_ngcontent-%COMP%] {\n  background-color: #7e60e8;\n  color: var(--ion-color-primary-contrast);\n}\n[_nghost-%COMP%]   .mobile-marker[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 3.409rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhci1yZW50YWwtbWFwLW1hcmtlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSw0QkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSwwQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLHdCQUFBO0VBQ0EseUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0Esd0JBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUFBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSw4QkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtVQUFBLHNCQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtFQUNBLDZDQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtBQURSO0FBR1E7RUFDSSx5QkFBQTtFQUNBLHdDQUFBO0FBRFo7QUFLSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUhSIiwiZmlsZSI6ImNhci1yZW50YWwtbWFwLW1hcmtlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcblxuICAgIC5jYXItcmVudGFsIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xuICAgICAgICBib3JkZXItYm90dG9tLWNvbG9yOiByZ2IoMTI2LCA5NiwgMjMyKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEycHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tc3R5bGU6IHNvbGlkO1xuICAgICAgICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XG4gICAgICAgIGJvcmRlci1pbWFnZS1vdXRzZXQ6IDA7XG4gICAgICAgIGJvcmRlci1pbWFnZS1yZXBlYXQ6IHN0cmV0Y2g7XG4gICAgICAgIGJvcmRlci1pbWFnZS1zbGljZTogMTAwJTtcbiAgICAgICAgYm9yZGVyLWltYWdlLXNvdXJjZTogbm9uZTtcbiAgICAgICAgYm9yZGVyLWltYWdlLXdpZHRoOiAxO1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogcmdiKDEyNiwgOTYsIDIzMik7XG4gICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDJweDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LWNvbG9yOiByZ2IoMTI2LCA5NiwgMjMyKTtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXJpZ2h0LXdpZHRoOiAycHg7XG4gICAgICAgIGJvcmRlci10b3AtY29sb3I6IHJnYigxMjYsIDk2LCAyMzIpO1xuICAgICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAxMnB4O1xuICAgICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTJweDtcbiAgICAgICAgYm9yZGVyLXRvcC1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci10b3Atd2lkdGg6IDJweDtcbiAgICAgICAgYm94LXNoYWRvdzogcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAwcHggMTBweCAwcHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGNvbG9yOiByZ2IoMTI2LCA5NiwgMjMyKTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGZvbnQtc3RyZXRjaDogMTAwJTtcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LXZhcmlhbnQtY2Fwczogbm9ybWFsO1xuICAgICAgICBmb250LXZhcmlhbnQtZWFzdC1hc2lhbjogbm9ybWFsO1xuICAgICAgICBmb250LXZhcmlhbnQtbGlnYXR1cmVzOiBub3JtYWw7XG4gICAgICAgIGZvbnQtdmFyaWFudC1udW1lcmljOiBub3JtYWw7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4ycHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMnB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gICAgICAgIHBhZGRpbmctdG9wOiAycHg7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB3aWR0aDogNTMuNzk2OXB4O1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICAgJi5zZWxlY3RlZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTI2LCA5NiwgMjMyKTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubW9iaWxlLW1hcmtlciB7XG4gICAgICAgIHdpZHRoOiAyLjVyZW07XG4gICAgICAgIGhlaWdodDogMy40MDlyZW07XG4gICAgfVxufVxuXG4iXX0= */"] });


/***/ }),

/***/ 63297:
/*!***************************************************************************************************!*\
  !*** ./src/app/modules/results/car-rentals/components/car-rental-map/car-rental-map.component.ts ***!
  \***************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CarRentalMapComponent": () => (/* binding */ CarRentalMapComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../map/map.component */ 99015);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mapbox-gl */ 62333);
/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_modules_core_dataservices_result_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/modules/core/dataservices/result.service */ 79487);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/pipes/tz-currency.pipe */ 98967);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/cart/services/cart.service */ 16750);
/* harmony import */ var ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-mapbox-gl */ 28235);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _car_rental_hotel_marker_popup_car_rental_hotel_marker_popup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../car-rental-hotel-marker-popup/car-rental-hotel-marker-popup.component */ 62089);
/* harmony import */ var _car_rental_map_marker_car_rental_map_marker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../car-rental-map-marker/car-rental-map-marker.component */ 64073);
/* harmony import */ var _car_rental_map_available_popup_car_rental_map_available_popup_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../car-rental-map-available-popup/car-rental-map-available-popup.component */ 75657);
/* harmony import */ var _car_rental_map_empty_popup_car_rental_map_empty_popup_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../car-rental-map-empty-popup/car-rental-map-empty-popup.component */ 24130);



















function CarRentalMapComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "mgl-marker", 9, 10)(3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("mouseover", function CarRentalMapComponent_ng_container_3_Template_div_mouseover_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r6.onHotelMarkerMouseOver();
    })("mouseleave", function CarRentalMapComponent_ng_container_3_Template_div_mouseleave_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r8.onHotelMarkerMouseLeave();
    })("click", function CarRentalMapComponent_ng_container_3_Template_div_click_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r7);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r9.onHotelMarkerClick($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](4, "mgl-popup", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "tz-car-rental-hotel-marker-popup", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](2);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("lngLat", ctx_r0.hotelMarker.coordinates)("popupShown", ctx_r0.showHotelHoveringPopup || ctx_r0.hotelMarkerSelected);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("marker", _r5)("closeButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hotelMarker", ctx_r0.hotelMarker);
  }
}

function CarRentalMapComponent_mgl_marker_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mgl-marker", 14)(1, "tz-car-rental-map-marker", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CarRentalMapComponent_mgl_marker_5_Template_tz_car_rental_map_marker_click_1_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const marker_r10 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r11.onMarkerClick($event, marker_r10);
    })("mouseover", function CarRentalMapComponent_mgl_marker_5_Template_tz_car_rental_map_marker_mouseover_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const marker_r10 = restoredCtx.$implicit;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r13.onMarkerMouseOver(marker_r10);
    })("mouseleave", function CarRentalMapComponent_mgl_marker_5_Template_tz_car_rental_map_marker_mouseleave_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r12);
      const marker_r10 = restoredCtx.$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r14.onMouseLeaveMarker(marker_r10);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const marker_r10 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("lngLat", marker_r10.coordinates);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("marker", marker_r10)("selected", ctx_r1.selectedCarRental === marker_r10)("isMobile", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 4, ctx_r1.platformService.isMobileDevice$));
  }
}

function CarRentalMapComponent_mgl_popup_6_tz_car_rental_map_available_car_popup_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tz-car-rental-map-available-car-popup", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("closePopup", function CarRentalMapComponent_mgl_popup_6_tz_car_rental_map_available_car_popup_1_Template_tz_car_rental_map_available_car_popup_closePopup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r17.onCloseSelectedMarkerPopup();
    })("searchCars", function CarRentalMapComponent_mgl_popup_6_tz_car_rental_map_available_car_popup_1_Template_tz_car_rental_map_available_car_popup_searchCars_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r19.onSearchLocation(ctx_r19.selectedCarRental);
    })("click", function CarRentalMapComponent_mgl_popup_6_tz_car_rental_map_available_car_popup_1_Template_tz_car_rental_map_available_car_popup_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r18);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r20.onPopUpBodyClicked($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("marker", ctx_r15.selectedCarRental);
  }
}

function CarRentalMapComponent_mgl_popup_6_tz_car_rental_map_empty_popup_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tz-car-rental-map-empty-popup", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("closePopup", function CarRentalMapComponent_mgl_popup_6_tz_car_rental_map_empty_popup_2_Template_tz_car_rental_map_empty_popup_closePopup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r21.onCloseSelectedMarkerPopup();
    })("searchCars", function CarRentalMapComponent_mgl_popup_6_tz_car_rental_map_empty_popup_2_Template_tz_car_rental_map_empty_popup_searchCars_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22);
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r23.onSearchNewLocation(ctx_r23.selectedCarRental);
    })("click", function CarRentalMapComponent_mgl_popup_6_tz_car_rental_map_empty_popup_2_Template_tz_car_rental_map_empty_popup_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r22);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r24.onPopUpBodyClicked($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("marker", ctx_r16.selectedCarRental);
  }
}

function CarRentalMapComponent_mgl_popup_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mgl-popup", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CarRentalMapComponent_mgl_popup_6_tz_car_rental_map_available_car_popup_1_Template, 1, 1, "tz-car-rental-map-available-car-popup", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CarRentalMapComponent_mgl_popup_6_tz_car_rental_map_empty_popup_2_Template, 1, 1, "tz-car-rental-map-empty-popup", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("closeButton", false)("lngLat", ctx_r2.selectedCarRental.coordinates)("closeOnClick", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.selectedCarRental.resultsAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r2.selectedCarRental && !ctx_r2.selectedCarRental.resultsAvailable);
  }
}

function CarRentalMapComponent_mgl_popup_7_tz_car_rental_map_available_car_popup_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tz-car-rental-map-available-car-popup", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CarRentalMapComponent_mgl_popup_7_tz_car_rental_map_available_car_popup_1_Template_tz_car_rental_map_available_car_popup_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r27.onPopUpBodyClicked($event);
    })("closePopup", function CarRentalMapComponent_mgl_popup_7_tz_car_rental_map_available_car_popup_1_Template_tz_car_rental_map_available_car_popup_closePopup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r29.onCloseSelectedMarkerPopup();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("marker", ctx_r25.hoveredCarRental);
  }
}

function CarRentalMapComponent_mgl_popup_7_tz_car_rental_map_empty_popup_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tz-car-rental-map-empty-popup", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CarRentalMapComponent_mgl_popup_7_tz_car_rental_map_empty_popup_2_Template_tz_car_rental_map_empty_popup_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r30.onPopUpBodyClicked($event);
    })("closePopup", function CarRentalMapComponent_mgl_popup_7_tz_car_rental_map_empty_popup_2_Template_tz_car_rental_map_empty_popup_closePopup_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r32.onCloseSelectedMarkerPopup();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("marker", ctx_r26.hoveredCarRental);
  }
}

function CarRentalMapComponent_mgl_popup_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "mgl-popup", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, CarRentalMapComponent_mgl_popup_7_tz_car_rental_map_available_car_popup_1_Template, 1, 1, "tz-car-rental-map-available-car-popup", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, CarRentalMapComponent_mgl_popup_7_tz_car_rental_map_empty_popup_2_Template, 1, 1, "tz-car-rental-map-empty-popup", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("lngLat", ctx_r3.hoveredCarRental.coordinates)("closeButton", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx_r3.hoveredCarRental.resultsAvailable);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r3.hoveredCarRental.resultsAvailable);
  }
}

function CarRentalMapComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 22)(1, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CarRentalMapComponent_div_9_Template_div_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r33.zoomMap();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CarRentalMapComponent_div_9_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r35.zoomMap(true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }
}

const _c0 = function () {
  return [12];
};

class CarRentalMapComponent extends _map_map_component__WEBPACK_IMPORTED_MODULE_0__.TzMapComponent {
  constructor(injector, data, mdDialogRef, resultService, tzCurrencyPipe, searchDataService, dialogService, translateService, cartService) {
    super(injector, data, mdDialogRef, resultService, tzCurrencyPipe, searchDataService, dialogService);
    this.translateService = translateService;
    this.cartService = cartService;
    this.searchClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.markers = [];
    this.selectedCarRental = null;
    this.hoveredCarRental = null;
    this.showSelectedPopUp = false;
    this.showHoveringPopup = false;
    this.showHotelHoveringPopup = false;
    this.hotelMarkerSelected = false;
    this.hotelMarker = null;
  }

  ngOnInit() {
    this.initiateMapComponent();
  }

  resetData() {
    this.fetchMapData(true);
  }

  onMapLoad(map) {
    var _a, _b, _c, _d;

    this.mapboxRef = map;
    this.mapboxRef.addControl(new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__.ScaleControl({
      maxWidth: 80,
      unit: 'metric'
    }));
    const data = this.searchDataService.getSearchData(this.mapConfig.serviceId);

    if (data && data.address) {
      const coordinates = {
        lng: ((_a = data.to) === null || _a === void 0 ? void 0 : _a.longitude) ? (_b = data.to) === null || _b === void 0 ? void 0 : _b.longitude : data.address.longitude,
        lat: ((_c = data.to) === null || _c === void 0 ? void 0 : _c.latitude) ? (_d = data.to) === null || _d === void 0 ? void 0 : _d.latitude : data.address.latitude
      };
      this.checkForHotelMarker();

      if (!this.hotelMarker) {
        if (data.to) {
          new mapbox_gl__WEBPACK_IMPORTED_MODULE_1__.Marker({
            element: this.createMarker(undefined, 'red-marker')
          }).setLngLat(coordinates).addTo(map);
        }
      }
    }

    const mapResults = this.mapResults;
    const markerLoaded = this.mapResults && mapResults.suppliers && mapResults.suppliers.length !== 0;

    if (markerLoaded) {
      this.updateMarkersOnTheMap();
    }

    this.addMapEvents();
  }

  onPopUpBodyClicked($event) {
    $event.stopPropagation();
  }

  onMarkerMouseOver(marker) {
    if (this.selectedCarRental === marker) {
      return;
    }

    this.hoveredCarRental = marker;
    this.showHoveringPopup = true;
  }

  onHotelMarkerMouseOver() {
    this.showHotelHoveringPopup = true;
  }

  onHotelMarkerMouseLeave() {
    this.showHotelHoveringPopup = false;
  }

  onHotelMarkerClick($event) {
    $event.stopPropagation();
    this.hotelMarkerSelected = true;
  }

  onMarkerClick($event, marker) {
    $event.stopPropagation();
    this.selectedCarRental = marker;
    this.hotelMarkerSelected = false;

    if (this.hoveredCarRental === marker) {
      this.hoveredCarRental = null;
      this.showHoveringPopup = false;
    }

    this.showSelectedPopUp = true;
  }

  onCloseSelectedMarkerPopup() {
    this.hotelMarkerSelected = false;
    this.showHotelHoveringPopup = false;
    this.selectedCarRental = null;
    this.showSelectedPopUp = false;
  }

  onMouseLeaveMarker(marker) {
    if (this.selectedCarRental === marker) {
      return;
    }

    this.hoveredCarRental = null;
    this.showHoveringPopup = false;
  }

  onSearchLocation(marker) {
    this.dialogService.closeDialog(this.mdDialogRef, marker);
  }

  onSearchNewLocation(marker) {
    if (marker) {
      this.searchClicked.emit(marker);
    }
  }

  fetchMapData(update) {
    const queryParams = {
      selected_id: this.selectedId
    };
    const request = Object.assign(Object.assign({}, this.mapCorners), {
      center: {}
    });
    this.resultService.searchMapResults(this.mapConfig.serviceId, queryParams, request).subscribe(results => {
      this.mapResults = results;

      if (this.mapboxRef) {
        this.updateMarkersOnTheMap(update);
      }
    });
  }

  initiateMapComponent() {
    this.mapCorners = {
      topLeft: {
        lat: this.mapConfig.mapCenterPosition.lat + 0.055968722,
        lng: this.mapConfig.mapCenterPosition.lng - 0.111450424
      },
      bottomRight: {
        lat: this.mapConfig.mapCenterPosition.lat - 0.066414125,
        lng: this.mapConfig.mapCenterPosition.lng + 0.105686722
      }
    };

    if (this.mapConfig.selectedHotelId) {
      this.selectedId = this.mapConfig.selectedHotelId;
    }

    this.checkForHotelMarker();
    this.fetchMapData();
  }

  updateMarkersOnTheMap(update) {
    this.markers = this.mapResults.suppliers;

    if (this.selectedCarRental) {
      const selectedCarRental = this.markers.find(marker => {
        var _a;

        return marker.locationID === ((_a = this.selectedCarRental) === null || _a === void 0 ? void 0 : _a.locationID);
      });

      if (selectedCarRental) {
        this.selectedCarRental = selectedCarRental;
      } else {
        if (update) {
          this.dialogService.openConfirmationDialog({
            title: this.translateService.instant('POPUPS.NO_RESULTS_FOR_MARKER.TITLE'),
            content: this.translateService.instant('POPUPS.NO_RESULTS_FOR_MARKER.BODY'),
            confirmBtnTitle: this.translateService.instant('GENERAL.OK'),
            icon: {
              name: 'no-rental-dialog',
              iconStyle: {
                'width.px': 88.23,
                'height.px': 57.81
              }
            }
          });
        }

        this.selectedCarRental = null;
      }
    }
  }

  checkForHotelMarker() {
    const cart = this.cartService.getCartData();

    if (cart && cart.items.length > 0) {
      const hotelCartItems = cart.items.filter(el => el.dataType === 'hotel');

      if (hotelCartItems.length > 0) {
        const hotelInfo = hotelCartItems[0].selectedItem.data;
        this.hotelMarker = {
          coordinates: [hotelInfo.location.longitude, hotelInfo.location.latitude],
          properties: hotelInfo
        };
      }
    }
  }

}

CarRentalMapComponent.ɵfac = function CarRentalMapComponent_Factory(t) {
  return new (t || CarRentalMapComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_12__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_modules_core_dataservices_result_service__WEBPACK_IMPORTED_MODULE_2__.ResultService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_3__.TzCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_4__.SearchDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_6__.CartService));
};

CarRentalMapComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: CarRentalMapComponent,
  selectors: [["tz-car-rental-map"]],
  outputs: {
    searchClicked: "searchClicked"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"]],
  decls: 10,
  vars: 10,
  consts: [[1, "results-map-container"], [1, "map-container"], [3, "zoom", "center", "mapLoad", "click"], [4, "ngIf"], [3, "lngLat", 4, "ngFor", "ngForOf"], [3, "closeButton", "lngLat", "closeOnClick", 4, "ngIf"], [3, "lngLat", "closeButton", 4, "ngIf"], [1, "map-action-btn", "close-map-btn", "tz-icon-clear", 3, "click"], ["class", "zoom-in-out", 4, "ngIf"], [3, "lngLat", "popupShown"], ["hotelMapMarker", ""], [1, "tz-map-marker", "mapboxgl-marker", "red-marker", 3, "mouseover", "mouseleave", "click"], [3, "marker", "closeButton"], [3, "hotelMarker"], [3, "lngLat"], [3, "marker", "selected", "isMobile", "click", "mouseover", "mouseleave"], [3, "closeButton", "lngLat", "closeOnClick"], [3, "marker", "closePopup", "searchCars", "click", 4, "ngIf"], [3, "marker", "closePopup", "searchCars", "click"], [3, "lngLat", "closeButton"], [3, "marker", "click", "closePopup", 4, "ngIf"], [3, "marker", "click", "closePopup"], [1, "zoom-in-out"], [1, "map-action-btn", "zoom-out", 3, "click"], [1, "map-action-btn", "zoom-in", 3, "click"]],
  template: function CarRentalMapComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "mgl-map", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("mapLoad", function CarRentalMapComponent_Template_mgl_map_mapLoad_2_listener($event) {
        return ctx.onMapLoad($event);
      })("click", function CarRentalMapComponent_Template_mgl_map_click_2_listener() {
        return ctx.onCloseSelectedMarkerPopup();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, CarRentalMapComponent_ng_container_3_Template, 6, 5, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, CarRentalMapComponent_mgl_marker_5_Template, 3, 6, "mgl-marker", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, CarRentalMapComponent_mgl_popup_6_Template, 3, 5, "mgl-popup", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, CarRentalMapComponent_mgl_popup_7_Template, 3, 4, "mgl-popup", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function CarRentalMapComponent_Template_div_click_8_listener() {
        return ctx.closeMap(false);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, CarRentalMapComponent_div_9_Template, 3, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵstyleMap"](ctx.mapStyle);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("zoom", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction0"](9, _c0))("center", ctx.mapConfig.mapCenterPosition);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.hotelMarker);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", ctx.markers);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showSelectedPopUp && ctx.selectedCarRental && ctx.selectedCarRental.coordinates);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.showHoveringPopup && ctx.hoveredCarRental && ctx.hoveredCarRental.coordinates);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.mapboxRef);
    }
  },
  directives: [ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_14__.MapComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_14__.MarkerComponent, ngx_mapbox_gl__WEBPACK_IMPORTED_MODULE_14__.PopupComponent, _car_rental_hotel_marker_popup_car_rental_hotel_marker_popup_component__WEBPACK_IMPORTED_MODULE_7__.CarRentalHotelMarkerPopupComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _car_rental_map_marker_car_rental_map_marker_component__WEBPACK_IMPORTED_MODULE_8__.CarRentalMapMarkerComponent, _car_rental_map_available_popup_car_rental_map_available_popup_component__WEBPACK_IMPORTED_MODULE_9__.CarRentalMapAvailablePopupComponent, _car_rental_map_empty_popup_car_rental_map_empty_popup_component__WEBPACK_IMPORTED_MODULE_10__.CarRentalMapEmptyPopupComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXItcmVudGFsLW1hcC5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 32984:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/results/components/confirm-selection/confirm-selection.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConfirmSelectionComponent": () => (/* binding */ ConfirmSelectionComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 87514);



class ConfirmSelectionComponent {
    constructor() {
        this.whenConfirm = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        this.whenCancel = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    confirmSelection() {
        this.whenConfirm.emit();
    }
    cancelSelection() {
        this.whenCancel.emit();
    }
}
ConfirmSelectionComponent.ɵfac = function ConfirmSelectionComponent_Factory(t) { return new (t || ConfirmSelectionComponent)(); };
ConfirmSelectionComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ConfirmSelectionComponent, selectors: [["tz-confirm-selection"]], outputs: { whenConfirm: "whenConfirm", whenCancel: "whenCancel" }, decls: 7, vars: 6, consts: [[1, "submission-btn-container", "flex"], [1, "tz-btn", "tz-btn-secondary", 3, "click"], [1, "tz-btn", "tz-btn-primary"]], template: function ConfirmSelectionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ConfirmSelectionComponent_Template_button_click_1_listener() { return ctx.cancelSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](3, 2, "CancelSelection"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 4, "GENERAL.CONFIRM_CONTINUE"));
    } }, pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslatePipe], styles: [".submission-btn-container[_ngcontent-%COMP%] {\n  justify-content: end;\n  width: 100%;\n}\n.submission-btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: auto;\n}\n.submission-btn-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbmZpcm0tc2VsZWN0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxXQUFBO0FBQ0o7QUFBSTtFQUNJLFdBQUE7QUFFUjtBQURRO0VBQ0ksb0JBQUE7QUFHWiIsImZpbGUiOiJjb25maXJtLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdWJtaXNzaW9uLWJ0bi1jb250YWluZXIge1xuICAgIGp1c3RpZnktY29udGVudDogZW5kO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_results_car-rentals_car-rentals_module_ts.js.map