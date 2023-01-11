"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_results_accommodations_accommodations_module_ts"],{

/***/ 19018:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/results/accommodations/accommodations-routing.module.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationsRoutingModule": () => (/* binding */ AccommodationsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _accommodations_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accommodations.component */ 49206);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _accommodations_component__WEBPACK_IMPORTED_MODULE_0__.AccommodationsComponent,
    },
];
class AccommodationsRoutingModule {
}
AccommodationsRoutingModule.ɵfac = function AccommodationsRoutingModule_Factory(t) { return new (t || AccommodationsRoutingModule)(); };
AccommodationsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AccommodationsRoutingModule });
AccommodationsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AccommodationsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 49206:
/*!****************************************************************************!*\
  !*** ./src/app/modules/results/accommodations/accommodations.component.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationsComponent": () => (/* binding */ AccommodationsComponent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_trazler_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/base-service-component/base-service.component */ 6371);
/* harmony import */ var _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/state-from.const */ 54255);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var _accommodations_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./accommodations.sort */ 85599);
/* harmony import */ var _map_map_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../map/map.component */ 99015);
/* harmony import */ var _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/modules/cart/utils/cart.utils */ 14770);
/* harmony import */ var _services_modules_accommodations_utils_accommodations_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/modules/accommodations/utils/accommodations.utils */ 33241);
/* harmony import */ var _services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/modules/inactivity/filter.service */ 53768);
/* harmony import */ var _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/modules/search/utils/search.utils */ 77235);
/* harmony import */ var _results_filters_results_filters_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../results-filters/results-filters.utils.service */ 47740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_accommodations_dataservices_accommodations_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/modules/accommodations/dataservices/accommodations.data.service */ 96154);
/* harmony import */ var _services_modules_accommodations_services_accommodations_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/modules/accommodations/services/accommodations.service */ 84647);

















const _c0 = ["accommodationsList"];
const _c1 = ["accommodationsListSkeletonLoader"];

function AccommodationsComponent_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AccommodationsComponent_div_1_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r9.showHotelsOnMap();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "tz-icon", 11)(2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function AccommodationsComponent_div_1_tz_search_hotel_name_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tz-search-hotel-name", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("search", function AccommodationsComponent_div_1_tz_search_hotel_name_2_Template_tz_search_hotel_name_search_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r11.search($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hotelNames", ctx_r7.hotelNames);
  }
}

const _c2 = function () {
  return {
    height: "7.5rem"
  };
};

function AccommodationsComponent_div_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "ngx-skeleton-loader", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](1, _c2));
  }
}

function AccommodationsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AccommodationsComponent_div_1_div_1_Template, 3, 0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, AccommodationsComponent_div_1_tz_search_hotel_name_2_Template, 1, 1, "tz-search-hotel-name", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, AccommodationsComponent_div_1_ng_container_3_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "tz-results-filters", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("filterChanged", function AccommodationsComponent_div_1_Template_tz_results_filters_filterChanged_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r13.onFilterChanged($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r0.loaderService.skeletonLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r0.loaderService.skeletonLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r0.loaderService.skeletonLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("filter", ctx_r0.accommodationsFilter)("loading", ctx_r0.loaderService.skeletonLoading);
  }
}

function AccommodationsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div")(1, "tz-mob-filter-navbar", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("openFilter", function AccommodationsComponent_div_4_Template_tz_mob_filter_navbar_openFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r15.onOpenFilterModal();
    })("resetFilter", function AccommodationsComponent_div_4_Template_tz_mob_filter_navbar_resetFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r17.onResetFilter();
    })("openSort", function AccommodationsComponent_div_4_Template_tz_mob_filter_navbar_openSort_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r18.mobOpenSort();
    })("showMap", function AccommodationsComponent_div_4_Template_tz_mob_filter_navbar_showMap_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r19.showHotelsOnMap();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("sortKey", ctx_r1.filterQueryParams.sort_by)("sortByOptions", ctx_r1.sortByOptions)("displayMap", true)("isEnableClearFilter", ctx_r1.isEnableClearFilter)("filtersCount", ctx_r1.selectedFiltersCount)("skeletonLoading", ctx_r1.loaderService.skeletonLoading);
  }
}

function AccommodationsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 17)(1, "tz-results-top-info-block", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("loading", ctx_r2.loaderService.skeletonLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 2, ctx_r2.serviceTitle), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
  }
}

function AccommodationsComponent_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 24)(1, "tz-filter-btn", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("clickFilter", function AccommodationsComponent_div_6_div_1_Template_tz_filter_btn_clickFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r22.onOpenFilterPopup();
    })("clearFilter", function AccommodationsComponent_div_6_div_1_Template_tz_filter_btn_clearFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r24.onResetFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("filterCount", ctx_r20.filterCount(ctx_r20.accommodationsFilter));
  }
}

function AccommodationsComponent_div_6_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function AccommodationsComponent_div_6_div_5_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r25.showHotelsOnMap();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "tz-icon", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function AccommodationsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AccommodationsComponent_div_6_div_1_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "tz-price-range-filter", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("sortChange", function AccommodationsComponent_div_6_Template_tz_price_range_filter_sortChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r27.sortAccommodations($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, AccommodationsComponent_div_6_div_5_Template, 2, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 6, ctx_r3.isMobile$));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("sortType", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 8, ctx_r3.isMobile$) ? "select" : "buttonToggle")("options", ctx_r3.sortByOptions)("sort", ctx_r3.filterQueryParams.sort_by ? ctx_r3.filterQueryParams.sort_by : "1")("skeletonLoading", ctx_r3.loaderService.skeletonLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r3.loaderService.skeletonLoading && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 10, ctx_r3.isMobile$));
  }
}

function AccommodationsComponent_ng_container_7_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "tz-acc-car-transfer-skeleton-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function AccommodationsComponent_ng_container_7_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", null, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](2, "tz-mob-accommodation-skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function AccommodationsComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AccommodationsComponent_ng_container_7_div_1_Template, 3, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, AccommodationsComponent_ng_container_7_div_3_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 2, ctx_r4.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 4, ctx_r4.platformService.isMobileDevice$));
  }
}

function AccommodationsComponent_ng_container_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 34)(1, "tz-selected-accommodations", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("removedItem", function AccommodationsComponent_ng_container_8_div_1_Template_tz_selected_accommodations_removedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r35.onRemoveSelectedAccommodation($event);
    })("changeHotel", function AccommodationsComponent_ng_container_8_div_1_Template_tz_selected_accommodations_changeHotel_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r37.onChangeHotel();
    })("changeRooms", function AccommodationsComponent_ng_container_8_div_1_Template_tz_selected_accommodations_changeRooms_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r38.onChangeRooms($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("serviceList", true)("accommodationCartData", ctx_r33.cartData);
  }
}

function AccommodationsComponent_ng_container_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AccommodationsComponent_ng_container_8_div_1_Template, 2, 2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 31, 32)(4, "tz-accommodation-list", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("cancelSelection", function AccommodationsComponent_ng_container_8_Template_tz_accommodation_list_cancelSelection_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r39.onCancelSelection();
    })("nextPage", function AccommodationsComponent_ng_container_8_Template_tz_accommodation_list_nextPage_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r41.onNextPage();
    })("selectHotel", function AccommodationsComponent_ng_container_8_Template_tz_accommodation_list_selectHotel_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r40);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r42.onSelectHotel($event);
    })("openAccommodationInMap", function AccommodationsComponent_ng_container_8_Template_tz_accommodation_list_openAccommodationInMap_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r40);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r43.showHotelsOnMap($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r5.cartData && (ctx_r5.cartData == null ? null : ctx_r5.cartData.items == null ? null : ctx_r5.cartData.items.length));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("accommodations", ctx_r5.accommodations)("nearestAccommodations", ctx_r5.nearestAccommodations)("isMobile$", ctx_r5.isMobile$)("isListCompleted", ctx_r5.isListCompleted)("accommodationListMetadata", ctx_r5.accommodationListMetadata)("nearestAccommodationListMetadata", ctx_r5.nearestAccommodationListMetadata)("scrollToElement", ctx_r5.scrollToIndex);
  }
}

class AccommodationsComponent extends _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_2__.BaseServiceComponent {
  constructor(accommodationsDataService, accommodationsService, injector) {
    super(injector);
    this.accommodationsDataService = accommodationsDataService;
    this.accommodationsService = accommodationsService;
    this.injector = injector;
    this.accommodationsFilter = [];
    this.accommodations = [];
    this.nearestAccommodations = [];
    this.sortByOptions = _accommodations_sort__WEBPACK_IMPORTED_MODULE_5__.AccommodationsSort;
    this.filterQueryParams = {};
    this.scrollToIndex = 0;
    this.serviceTitle = '';
    this.resultsCount = 0;
    this.selectedFiltersCount = 0;
    this.serviceId = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC;
    this.section = 1;
    this.resultsCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    this.accommodationRecommendedID = '';
    this.repriceListenerId = -1;
    this.isNextSummary = this.nextIsSummary();
    this.isMobile$ = this.screenSizeDetectorService.isMobile;
    this.stateFrom = this.getStateFromParamFromRouter();
    this.accommodationListMetadata = this.accommodationsService.getAccommodationListMetadata();
    this.nearestAccommodationListMetadata = this.accommodationsService.getNearestAccommodationListMetadata();
    this.lastRequestParams = {
      start: this.start,
      limit: this.accommodationListMetadata.increment,
      section: this.section
    };
  }

  get isEnableClearFilter() {
    return _services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_9__.FilterService.enableClearAll(this.accommodationsFilter);
  }

  ngOnInit() {
    if (this.searchRunning()) {
      this.showSkeletonLoader(true);
    } else {
      this.getCartServiceData();

      if (this.cartData && this.cartData.items.length) {
        if (_services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_7__.CartUtils.hasBooked(this.cartData.items[0].selectedItem.bookingOptions)) {
          this.cartRouterService.goToState(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC_DETAILS, {
            giataId: this.cartData.items[0].selectedItem.data.giataID,
            hotelName: this.cartData.items[0].selectedItem.data.name
          }, false, this.stateFrom);
          return;
        }
      }

      this.initializeComponent();
    }
  }

  ngOnDestroy() {
    this.listenersService.unregisterListener(this.repriceListenerId);
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  search(searchedHotel) {
    const maxHotels = this.accommodationListMetadata.total + this.nearestAccommodationListMetadata.total;

    if (!searchedHotel || !maxHotels || searchedHotel.idx > maxHotels) {
      return;
    }

    console.log('hotel clicked:' + searchedHotel.name);
    const self = this;
    const maxLoadedIdx = this.accommodations.length + this.nearestAccommodations.length;

    if (maxLoadedIdx > searchedHotel.idx) {
      this.callScroller(this, searchedHotel);
      return;
    } // request to paginate till reaching the search element


    this.onNextPage(searchedHotel.idx - maxLoadedIdx, () => {
      setTimeout(() => {
        //Pagination done, let's scroll to searched element position
        self.callScroller(self, searchedHotel);
      }, 0);
    });
  }

  onFilterChanged($event) {
    this.scrollToServiceContainer();
    this.accommodationsFilter = $event;
    this.filterAccommodations();
  }

  sortAccommodations(sortValue) {
    this.resetPagination();
    _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_10__.SearchUtilsService.saveSortingValue(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC, sortValue);
    this.filterQueryParams.sort_by = sortValue;
    this.loadAccommodationsData(false);
  }

  onCancelSelection() {
    this.loadAccommodationsData(false);
  }

  onOpenFilterPopup() {
    const filter = new rxjs__WEBPACK_IMPORTED_MODULE_16__.BehaviorSubject(this.accommodationsFilter);
    filter.subscribe(filterReferenceItem => {
      this.accommodationsFilter = filterReferenceItem;
      this.filterAccommodations();
    });
    const searchHotel = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    searchHotel.subscribe(searchedHotel => {
      this.search(searchedHotel);
    });
    this.openFilterDialog(filter, this.resultsCount$, searchHotel);
  }

  onNextPage(increment, paginationFinishedCB) {
    console.error('pagination request');
    this.paginate(increment, paginationFinishedCB);
  }

  onChangeHotel() {
    if (this.accommodationsListSkeletonLoaderElementReference) {
      this.scrollToElement(this.accommodationsListSkeletonLoaderElementReference);
    } else {
      this.scrollToElement(this.accommodationsListElementReference);
    }
  }

  onChangeRooms(data, mapHotel) {
    this.selectHotel(data, mapHotel);
    this.cartRouterService.goToState(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC_DETAILS, {
      giataId: data.giataId,
      hotelName: data.hotelName
    }, false, _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.ACC_LIST, {
      changeRoom: true
    });
  }

  onSelectHotel(data, mapHotel) {
    this.selectHotel(data, mapHotel);
    this.cartRouterService.goToState(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC_DETAILS, {
      giataId: data.giataId,
      hotelName: data.hotelName
    }, false, _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.ACC_LIST);
  }

  onRemoveSelectedAccommodation(optionId) {
    this.removeService(this.serviceId, optionId).then(isRemoved => {
      console.log('remove success');
    }, error => {
      console.error(error);
    });
  }

  showHotelsOnMap(data) {
    const accSearchData = this.searchDataService.getSearchData(this.serviceId);

    if (!accSearchData || !accSearchData.address) {
      return;
    }

    const mapCenterPosition = {
      lng: accSearchData.address.longitude,
      lat: accSearchData.address.latitude
    };

    if (data) {
      mapCenterPosition.lng = +data.selectedHotel.location.longitude;
      mapCenterPosition.lat = +data.selectedHotel.location.latitude;
    }

    const mapConf = {
      height: '100%',
      width: '100%',
      maxWidth: '100vw',
      panelClass: 'tz-results-map',
      data: {
        mapCenterPosition,
        selectedHotelId: data === null || data === void 0 ? void 0 : data.selectedHotel.id,
        serviceId: this.serviceId
      }
    };
    this.dialogService.openAccommodationDialog(_map_map_component__WEBPACK_IMPORTED_MODULE_6__.TzMapComponent, mapConf).afterClosed().subscribe(hotel => {
      if (hotel) {
        this.onSelectHotel({
          giataId: hotel.giataID,
          position: data ? data.position : 0,
          hotelName: hotel.name
        }, hotel);
      }
    });
  }

  onOpenFilterModal() {
    var _this = this;

    return (0,_opt_atlassian_pipelines_agent_build_trazler_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const filter = new rxjs__WEBPACK_IMPORTED_MODULE_16__.BehaviorSubject(_this.accommodationsFilter);
      filter.subscribe(filterReferenceItem => {
        _this.accommodationsFilter = filterReferenceItem;

        _this.filterAccommodations();
      });

      _this.openFilterModal(filter, _this.resultsCount$);
    })();
  }

  onResetFilter() {
    const filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    filters$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(filter => {
      this.accommodationsFilter = filter;
      this.filterAccommodations();
    });
    _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_2__.BaseServiceComponent.resetFilter(this.accommodationsFilter, filters$);
  }

  mobOpenSort() {
    const sort$ = new rxjs__WEBPACK_IMPORTED_MODULE_15__.Subject();
    sort$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(sortKey => {
      this.sortAccommodations(sortKey);
    });
    this.openSortMob(this.sortByOptions, this.filterQueryParams.sort_by, sort$);
  } //paginationFinishedCB when set, called at end of pagination


  paginate(increment, paginationFinishedCB) {
    const inc = increment ? increment : this.accommodationListMetadata.increment;
    const params = {
      start: this.start,
      limit: inc,
      sortBy: this.filterQueryParams.sort_by,
      cache_buster: 1,
      section: this.section
    };

    if (this.isListCompleted || this.isLastRequestTheSame(params)) {
      if (paginationFinishedCB) {
        paginationFinishedCB();
      }

      return;
    }

    this.lastRequestParams = params;

    if (!this.isNextPage(inc, paginationFinishedCB)) {
      return;
    }

    this.accommodationsDataService.paginate(this.serviceId, params).subscribe(accommodations => {
      console.log('got pagination response');
      this.handleAccommodationsPaginateResponse(accommodations, inc, paginationFinishedCB);
    }, error => () => {});
  }

  callScroller(self, searchedHotel, maxIteration = 0) {
    if (maxIteration > 10) {
      return;
    }

    const el = document.getElementById(searchedHotel.giataId);

    if (el) {
      console.log('scrolling to giata id:' + searchedHotel.giataId);
      el.scrollIntoView({
        block: 'center',
        behavior: 'smooth'
      });
    } else {
      console.log('element not found with giata id:' + searchedHotel.giataId);
      setTimeout(() => {
        //check if during waiting we did not get our element
        const elem = document.getElementById(searchedHotel.giataId);

        if (!elem) {
          //scroll again to trigger display of searched element
          const prevScroll = self.scrollToIndex; //50 in city height, 44 nearby

          self.scrollToIndex = searchedHotel.idx * 320 - 50 + (searchedHotel.section === 2 ? 44 : 0);

          if (prevScroll === self.scrollToIndex) {
            self.scrollToIndex++;
          }

          maxIteration++;
        }

        self.callScroller(self, searchedHotel, maxIteration);
      }, 500);
    }
  }

  resetPagination() {
    this.section = 1;
    this.start = 0;
    this.isListCompleted = false;
    this.nearestAccommodations = [];
    this.scrollToIndex = 0;
    this.accommodationsService.setAccommodationList([], '', 0, []);
  }

  selectHotel(data, mapHotel) {
    this.accommodationsService.setMapHotel(mapHotel);
    this.accommodationsService.setAccommodationList(this.accommodations, data.giataId, data.position, this.hotelNames);
    this.accommodationsService.setNearestAccommodationList(this.nearestAccommodations, data.giataId, data.position);
    this.accommodationsService.setMetadataOfTheAccommodation(this.start);
    this.accommodationsService.setFilter(this.accommodationsFilter);
  }

  loadAccommodationsData(checkConsistency) {
    this.checkResultsAvailable(this.serviceId);

    if (checkConsistency && this.accommodationsService.currentDataId !== '' && this.stateFrom === _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.ACC_DETAILS && this.accommodationsService.hasAvailableData() && this.accommodationsService.currentDataId === this.searchDataService.getDataId(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC)) {
      this.restoreAccFromService();
    } else {
      this.resetPagination();
      this.showSkeletonLoader(true);
      const params = this.initSearchParams();
      this.accommodationsDataService.searchServiceData(this.serviceId, params, checkConsistency).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(accommodationsResponse => {
        this.hideSkeletonLoader();
        this.handleAccommodationsDataResponse(accommodationsResponse);
        this.handleExtraParams();

        if (!accommodationsResponse.total && !this.filterCount(accommodationsResponse.ogs)) {
          this.accommodationsDataService.checkServiceFailedAndNotify(this.serviceId);
        }

        setTimeout(() => {
          console.log('set prerender ready');
          window.prerenderReady = true;
        }, 1500);
      }, error => {});
    }
  }

  filterAccommodations() {
    this.resetPagination();
    this.showSkeletonLoader(true);
    this.accommodationsDataService.filterServiceData(this.serviceId, this.filterQueryParams, this.accommodationsFilter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.finalize)(() => {
      this.hideSkeletonLoader(true);
    })).subscribe(accommodationsResponse => {
      this.handleAccommodationsDataResponse(accommodationsResponse);
    }, error => {});
  }

  initSearchParams() {
    const selected_id = this.cartService.getSelected(this.serviceId).selectedHotel.giataID;
    return {
      cache_buster: 0,
      sort_by: this.filterQueryParams.sort_by,
      refreshFilter: false,
      loadFilter: true,
      selected_id
    };
  }

  handleAccommodationsDataResponse(accommodationsResponse) {
    this.resultsCount$.next(accommodationsResponse.total);
    this.resultsCount = accommodationsResponse.total;
    this.accommodationsFilter = accommodationsResponse.ogs;
    this.filterService.filterChange$.next(accommodationsResponse.ogs);
    this.hotelNames = accommodationsResponse.hotelNames;
    this.selectedFiltersCount = _results_filters_results_filters_utils_service__WEBPACK_IMPORTED_MODULE_11__.ResultsFiltersUtils.selectedFiltersCounter(this.accommodationsFilter);

    for (const section of accommodationsResponse.accommodations) {
      const hasRooms = section.data.some(acc => !acc.noRoom);

      if (section.data.length === 1 && !hasRooms) {
        section.data = [];
      }
    }

    this.setAccListMetadata(_services_modules_accommodations_utils_accommodations_utils__WEBPACK_IMPORTED_MODULE_8__.AccommodationsUtilsService.getCount(true, accommodationsResponse.accommodations), _services_modules_accommodations_utils_accommodations_utils__WEBPACK_IMPORTED_MODULE_8__.AccommodationsUtilsService.getCount(false, accommodationsResponse.accommodations), accommodationsResponse.selectedHotelCode);
    let accommodations = accommodationsResponse.accommodations.find(accommodationsResponseSection => accommodationsResponseSection.section === this.section);

    if (!accommodations && this.section < 2) {
      this.section++;
      accommodations = accommodationsResponse.accommodations.find(accommodationsResponseSection => accommodationsResponseSection.section === this.section);
    }

    if (accommodations) {
      this.accommodationRecommendedID = accommodationsResponse.bestValueHotel;
      accommodations.data = this.handlingAccommodationsData(accommodations.data);
      accommodations.data = this.filterAccommodationsData(accommodations.data);

      if (this.section === 1) {
        this.accommodations = accommodations.data;
        const nearestAcc = accommodationsResponse.accommodations.find(accommodationsResponseSection => accommodationsResponseSection.section === 2);

        if (nearestAcc) {
          this.nearestAccommodations = nearestAcc.data;
        }
      } else {
        this.nearestAccommodations = accommodations.data;
      }

      this.start = accommodations.limit;
    } else if (this.section === 2) {
      this.accommodations = [];
      this.nearestAccommodations = [];
    } else {
      this.onNextPage();
    }
  }

  filterAccommodationsData(accommodations) {
    var _a, _b;

    const cartId = ((_a = this.cartData) === null || _a === void 0 ? void 0 : _a.items[0]) ? (_b = this.cartData) === null || _b === void 0 ? void 0 : _b.items[0].selectedItem.id : null;

    if (cartId) {
      return this.accommodationsDataService.filterDataRemoveCartItem(accommodations, cartId);
    }

    return accommodations;
  }

  nextIsSummary() {
    var _a, _b;

    const state = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state;
    const from = state ? state['from'] : '';
    return from === _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.SUMMARY || from === _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.TAB;
  }

  getCartServiceData() {
    this.cartData = this.accommodationsDataService.getSelectedAccommodationsData();
  }

  handleAccommodationsPaginateResponse(accommodations, increment, paginationFinishedCB) {
    if (this.section === 1) {
      this.accommodations = [...this.accommodations, ...accommodations];
    } else {
      this.nearestAccommodations = [...this.nearestAccommodations, ...accommodations];
    }

    const accLength = accommodations.length;

    if (this.section === 1 && accLength < increment || this.section === 2 && accLength < increment) {
      if (this.section >= this.nearestAccommodationListMetadata.section) {
        this.isListCompleted = true;
      } else {
        this.section++;
        this.start = 0;
        this.paginate(increment - accLength, paginationFinishedCB);
        return;
      }
    } else {
      if (this.section === 1) {
        this.start += accLength;
      }

      if (this.section === 2) {
        this.start += accLength;
      }
    }

    if (paginationFinishedCB) {
      paginationFinishedCB();
    }
  }

  setAccListMetadata(totalInCity, totalNearCity, selectedHotelCode) {
    this.accommodationListMetadata = Object.assign(Object.assign({}, this.accommodationListMetadata), {
      total: totalInCity,
      selectedHotelCode
    });
    this.nearestAccommodationListMetadata = Object.assign(Object.assign({}, this.nearestAccommodationListMetadata), {
      total: totalNearCity,
      selectedHotelCode
    });
    this.getDestinationNameOfTheCity();
    this.accommodationsService.setAccommodationListMetadata(this.accommodationListMetadata, this.nearestAccommodationListMetadata);
  }

  getDestinationNameOfTheCity() {
    const accSearchData = this.searchDataService.getSearchData(this.serviceId);

    if (accSearchData && accSearchData.address) {
      this.accommodationListMetadata.destinationName = accSearchData.address.cityName;
      this.nearestAccommodationListMetadata.destinationName = accSearchData.address.cityName;
    }
  }

  handlingAccommodationsData(accommodations) {
    const cartData = this.cartData;
    const cartAccID = cartData && cartData.items.length ? cartData.items[0].selectedItem.id : null;
    return this.accommodationsDataService.handlingData(accommodations, this.accommodationRecommendedID, cartAccID);
  }

  setSortingValue() {
    const sort = _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_10__.SearchUtilsService.getSortingValue(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC);

    if (sort) {
      this.filterQueryParams.sort_by = sort;
    }
  }

  isLastRequestTheSame(params) {
    const lastParams = this.lastRequestParams;
    return lastParams.section === params.section && lastParams.start === params.start && lastParams.sortBy === params.sortBy;
  }

  isNextPage(increment, paginationFinishedCB) {
    const accommodationTotal = this.accommodationListMetadata.total;

    if (this.section === 1 && accommodationTotal && this.accommodations.length >= accommodationTotal) {
      this.section++;
      this.start = 0;
      this.paginate(increment, paginationFinishedCB);
      return false;
    }

    const nearestAccommodationTotal = this.nearestAccommodationListMetadata.total;

    if (this.section === 2 && nearestAccommodationTotal && this.nearestAccommodations.length >= nearestAccommodationTotal) {
      this.isListCompleted = true;
      return false;
    }

    return true;
  }

  initializeComponent() {
    this.filterQueryParams = {
      sort_by: '1'
    };
    this.serviceTitle = this.formServiceTitle(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC);
    this.setSortingValue();
    this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(() => {
      this.serviceTitle = this.formServiceTitle(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC);
      this.loadAccommodationsData(false);
    });
    this.currencyService.selectedCurrencySubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(() => {
      this.filterQueryParams.refreshFilter = true;
      this.loadAccommodationsData(false);
    });
    this.repriceListenerId = this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_4__.ListenerId.LISTEN_REPRICED, this.getCartServiceData, this);
    this.loadAccommodationsData(true);
    this.startPollerIfTheFullDataIsNotLoaded(this.serviceId, this.filterAccommodations.bind(this));
  }

  restoreAccFromService() {
    this.accommodations = this.accommodationsService.getAccommodationsList();
    this.nearestAccommodations = this.accommodationsService.getNearestAccommodationsList();
    const accMetadata = this.accommodationsService.getAccommodationListMetadata();
    this.accommodationListMetadata = accMetadata ? accMetadata : this.accommodationListMetadata;
    const nearestMetadata = this.accommodationsService.getNearestAccommodationListMetadata();
    this.nearestAccommodationListMetadata = nearestMetadata ? nearestMetadata : this.nearestAccommodationListMetadata;
    this.accommodationsFilter = this.accommodationsService.getFilter() ? this.accommodationsService.getFilter() : [];
    this.start = this.accommodationsService.currentPage;
    this.hideSkeletonLoader(true);
    this.scrollToIndex = this.accommodationsService.currentItem;
    this.accommodationListMetadata = this.accommodationsService.getAccommodationListMetadata();
    this.nearestAccommodationListMetadata = this.accommodationsService.getNearestAccommodationListMetadata();
    const mapHotel = this.accommodationsService.getMapHotel();
    this.hotelNames = this.accommodationsService.getHotelNames();

    if (mapHotel) {
      this.showHotelsOnMap({
        selectedHotel: mapHotel,
        position: 0
      });
    }
  }

  handleExtraParams() {
    const state = history.state;

    if (state && state.extra) {
      for (const extraAction in state.extra) {
        if (state.extra.hasOwnProperty(extraAction)) {
          switch (extraAction) {
            case 'changeTickets':
              this.onChangeHotel();
              break;
          }
        }
      }
    }
  }

}

AccommodationsComponent.ɵfac = function AccommodationsComponent_Factory(t) {
  return new (t || AccommodationsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_modules_accommodations_dataservices_accommodations_data_service__WEBPACK_IMPORTED_MODULE_12__.AccommodationsDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_modules_accommodations_services_accommodations_service__WEBPACK_IMPORTED_MODULE_13__.AccommodationsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_14__.Injector));
};

AccommodationsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: AccommodationsComponent,
  selectors: [["tz-accommodations"]],
  viewQuery: function AccommodationsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.accommodationsListElementReference = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.accommodationsListSkeletonLoaderElementReference = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵInheritDefinitionFeature"]],
  decls: 9,
  vars: 9,
  consts: [[1, "tz-container", "accommodations-container", "flex", 3, "hidden"], ["class", "tz-filter-container", 4, "ngIf"], [1, "accommodations-cart-list-container", "flex", "flex-column"], [4, "ngIf"], ["class", "result-top-info-block-item", 4, "ngIf"], ["class", "price-range-container flex align-center", 4, "ngIf"], [1, "tz-filter-container"], ["class", "show-map-btn", 3, "click", 4, "ngIf"], [3, "hotelNames", "search", 4, "ngIf"], [3, "filter", "loading", "filterChanged"], [1, "show-map-btn", 3, "click"], ["icon", "map-btn-marekr"], ["translate", "GENERAL.SHOW_ON_MAP", 1, "btn-label"], [3, "hotelNames", "search"], [1, "tz-skeleton-loader", "show-map-button-skeleton-container"], [3, "theme"], [3, "sortKey", "sortByOptions", "displayMap", "isEnableClearFilter", "filtersCount", "skeletonLoading", "openFilter", "resetFilter", "openSort", "showMap"], [1, "result-top-info-block-item"], ["blockType", "orange", 3, "loading"], [3, "innerHTML"], [1, "price-range-container", "flex", "align-center"], ["class", "accommodation-filter-btn inline-flex", 4, "ngIf"], [3, "sortType", "options", "sort", "skeletonLoading", "sortChange"], ["class", "show-map-btn accommodation-map-btn inline-flex", 3, "click", 4, "ngIf"], [1, "accommodation-filter-btn", "inline-flex"], [3, "filterCount", "clickFilter", "clearFilter"], [1, "show-map-btn", "accommodation-map-btn", "inline-flex", 3, "click"], ["class", "accommodations-list-skeleton-loader-container", 4, "ngIf"], [1, "accommodations-list-skeleton-loader-container"], ["accommodationsListSkeletonLoader", ""], ["class", "accommodations-cart-data", 4, "ngIf"], [1, "accommodations-list-container", "flex"], ["accommodationsList", ""], [3, "accommodations", "nearestAccommodations", "isMobile$", "isListCompleted", "accommodationListMetadata", "nearestAccommodationListMetadata", "scrollToElement", "cancelSelection", "nextPage", "selectHotel", "openAccommodationInMap"], [1, "accommodations-cart-data"], [3, "serviceList", "accommodationCartData", "removedItem", "changeHotel", "changeRooms"]],
  template: function AccommodationsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](1, AccommodationsComponent_div_1_Template, 5, 5, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](4, AccommodationsComponent_div_4_Template, 2, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, AccommodationsComponent_div_5_Template, 4, 4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, AccommodationsComponent_div_6_Template, 7, 12, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, AccommodationsComponent_ng_container_7_Template, 5, 6, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, AccommodationsComponent_ng_container_8_Template, 5, 8, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("hidden", ctx.noResultAvailable && !ctx.skeletonFilterLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 7, ctx.isMobile$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.loaderService.skeletonLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.loaderService.skeletonLoading);
    }
  },
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n[_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%]   .accommodation-filter-btn[_ngcontent-%COMP%] {\n  margin-right: 1.5rem;\n}\n[_nghost-%COMP%]   .accommodations-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n  flex: 1;\n}\n[_nghost-%COMP%]   .accommodations-container[_ngcontent-%COMP%]   .accommodations-filters-container[_ngcontent-%COMP%]   .accommodations-filter[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .accommodations-container[_ngcontent-%COMP%]   .accommodations-list-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .accommodations-container[_ngcontent-%COMP%]   .accommodations-list-skeleton-loader-container[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n  flex: auto;\n  scroll-margin: 60px;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .accommodations-container[_ngcontent-%COMP%]   .accommodations-list-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .accommodations-container[_ngcontent-%COMP%]   .accommodations-list-skeleton-loader-container[_ngcontent-%COMP%] {\n    scroll-margin: 0;\n  }\n}\n[_nghost-%COMP%]   .sidebar-for-mobile[_ngcontent-%COMP%] {\n  position: absolute;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .accommodations-cart-list-container[_ngcontent-%COMP%] {\n    flex: 1;\n  }\n}\n.show-map-btn[_ngcontent-%COMP%] {\n  width: inherit;\n  height: 7.5rem;\n  background: url(/assets/icons/web/icons/map-btn-background.svg) no-repeat center;\n  background-size: cover;\n  margin-bottom: 1.5rem;\n  cursor: pointer;\n  display: grid;\n  place-content: center;\n  border-radius: 0.25rem;\n}\n.show-map-btn[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 2.625rem;\n  height: 2.625rem;\n  margin: auto;\n}\n.show-map-btn[_ngcontent-%COMP%]   .btn-label[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-bold);\n  font-size: 1rem;\n  line-height: 1.25rem;\n  letter-spacing: 0.01em;\n  margin-top: 0.25rem;\n  color: #2f3136;\n}\n.show-map-btn.accommodation-map-btn[_ngcontent-%COMP%] {\n  width: 6.25rem;\n  height: 100%;\n  margin-bottom: 0;\n  margin-left: auto;\n}\n.show-map-btn.accommodation-map-btn[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 1.75rem;\n  height: 1.75rem;\n}\n@media not all and (hover: none) {\n  .show-map-btn[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n  }\n}\n@media (max-width: 920px) {\n  .accommodations-cart-data[_ngcontent-%COMP%] {\n    width: 100%;\n    max-width: 100vw;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb25zLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy91dGlscy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxhQUFBO0VBQ0EsT0FBQTtBQURKO0FBR0k7RUFDSSxtQkFBQTtBQURSO0FBR1E7RUFDSSxvQkFBQTtBQURaO0FBS0k7RUFDSSxtQkFBQTtFQUNBLE9BQUE7QUFIUjtBQU1ZO0VBQ0ksT0FBQTtBQUpoQjtBQVFRO0VBQ0ksZUFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBTlo7QUM4Qkk7RUQ1Qkk7SUFPUSxnQkFBQTtFQUxkO0FBQ0Y7QUFTSTtFQUNJLGtCQUFBO0FBUFI7QUNzQkk7RURaQTtJQUVRLE9BQUE7RUFSVjtBQUNGO0FBWUE7RUFDSSxjQUFBO0VBQ0EsY0FBQTtFQUNBLGdGQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQVRKO0FBV0k7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0FBVFI7QUFZSTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7QUFWUjtBQWFJO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBWFI7QUFhUTtFQUNJLGNBQUE7RUFDQSxlQUFBO0FBWFo7QUNBSTtFQUNJO0lEZUEsWUFBQTtFQVpOO0FBQ0Y7QUN2Qkk7RUR1Q0E7SUFDSSxXQUFBO0lBRUEsZ0JBQUE7RUFiTjtBQUNGIiwiZmlsZSI6ImFjY29tbW9kYXRpb25zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuXG4gICAgLnByaWNlLXJhbmdlLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICAgICAgLmFjY29tbW9kYXRpb24tZmlsdGVyLWJ0biB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hY2NvbW1vZGF0aW9ucy1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIC5hY2NvbW1vZGF0aW9ucy1maWx0ZXJzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAuYWNjb21tb2RhdGlvbnMtZmlsdGVyIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFjY29tbW9kYXRpb25zLWxpc3QtY29udGFpbmVyLCAuYWNjb21tb2RhdGlvbnMtbGlzdC1za2VsZXRvbi1sb2FkZXItY29udGFpbmVyIHtcbiAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICAgICAgc2Nyb2xsLW1hcmdpbjogNjBweDtcblxuICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwtbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNpZGViYXItZm9yLW1vYmlsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG5cbiAgICAuYWNjb21tb2RhdGlvbnMtY2FydC1saXN0LWNvbnRhaW5lciB7XG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2hvdy1tYXAtYnRuIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDcuNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaWNvbnMvbWFwLWJ0bi1iYWNrZ3JvdW5kLnN2Zykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcblxuICAgIHR6LWljb24ge1xuICAgICAgICB3aWR0aDogMi42MjVyZW07XG4gICAgICAgIGhlaWdodDogMi42MjVyZW07XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICB9XG5cbiAgICAuYnRuLWxhYmVsIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjI1cmVtO1xuICAgICAgICBjb2xvcjogIzJmMzEzNjtcbiAgICB9XG5cbiAgICAmLmFjY29tbW9kYXRpb24tbWFwLWJ0biB7XG4gICAgICAgIHdpZHRoOiA2LjI1cmVtO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG4gICAgICAgIHR6LWljb24ge1xuICAgICAgICAgICAgd2lkdGg6IDEuNzVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEuNzVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBAaW5jbHVkZSBvbi1ob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuODtcbiAgICB9XG59XG5cbkBpbmNsdWRlIG1vYmlsZSB7XG4gICAgLmFjY29tbW9kYXRpb25zLWNhcnQtZGF0YSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvL2hlaWdodDogMTAwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAxMDB2dztcbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 42126:
/*!*************************************************************************!*\
  !*** ./src/app/modules/results/accommodations/accommodations.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationsModule": () => (/* binding */ AccommodationsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _accommodations_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./accommodations-routing.module */ 19018);
/* harmony import */ var _accommodations_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./accommodations.component */ 49206);
/* harmony import */ var _components_accommodation_list_accommodation_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/accommodation-list/accommodation-list.component */ 68000);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _components_accommodation_list_result_information_accommodation_list_result_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/accommodation-list-result-information/accommodation-list-result-information.component */ 20126);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ngx-infinite-scroll */ 34229);
/* harmony import */ var _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../results-cart-item-selection.module */ 8793);
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-virtual-scroller */ 56443);
/* harmony import */ var _components_accommodation_list_ui_item_accommodation_list_ui_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/accommodation-list-ui-item/accommodation-list-ui-item.component */ 66922);
/* harmony import */ var _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../results-filters/results-filters.module */ 1675);
/* harmony import */ var _map_map_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../map/map.module */ 14522);
/* harmony import */ var _components_mob_selected_accommodation_details_mob_selected_accommodation_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mob-selected-accommodation-details/mob-selected-accommodation-details.component */ 10449);
/* harmony import */ var _accommodation_accommodation_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../accommodation/accommodation.module */ 4704);
/* harmony import */ var _components_mob_accommodation_advantages_disadvantages_mob_accommodation_advantages_disadvantages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mob-accommodation-advantages-disadvantages/mob-accommodation-advantages-disadvantages.component */ 99631);
/* harmony import */ var _components_mob_accommodation_selected_room_details_mob_accommodation_selected_room_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mob-accommodation-selected-room-details/mob-accommodation-selected-room-details.component */ 71090);
/* harmony import */ var _components_mob_accommodation_selected_room_offer_mob_accommodation_selected_room_offer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/mob-accommodation-selected-room-offer/mob-accommodation-selected-room-offer.component */ 51835);
/* harmony import */ var _components_mob_accommodation_selected_room_list_mob_accommodation_selected_room_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mob-accommodation-selected-room-list/mob-accommodation-selected-room-list.component */ 73778);
/* harmony import */ var _accommodation_components_mob_accommodation_details_room_offer_mob_accommodation_details_room_offer_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../accommodation/components/mob-accommodation-details-room-offer/mob-accommodation-details-room-offer.component */ 62789);
/* harmony import */ var _components_mob_accommodation_skeleton_mob_accommodation_skeleton_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/mob-accommodation-skeleton/mob-accommodation-skeleton.component */ 95836);
/* harmony import */ var _components_mob_accommodation_rooms_list_modal_mob_accommodation_rooms_list_modal_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/mob-accommodation-rooms-list-modal/mob-accommodation-rooms-list-modal.component */ 68892);
/* harmony import */ var _accommodation_components_mob_accommodation_details_room_main_info_mob_accommodation_details_room_main_info_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../accommodation/components/mob-accommodation-details-room-main-info/mob-accommodation-details-room-main-info.component */ 58747);
/* harmony import */ var _components_mob_accommodation_select_option_button_mob_accommodation_select_option_button_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/mob-accommodation-select-option-button/mob-accommodation-select-option-button.component */ 44386);
/* harmony import */ var _results_summary_results_summary_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../results-summary/results-summary.module */ 49997);
/* harmony import */ var _components_mob_confirm_button_block_mob_confirm_button_block_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/mob-confirm-button-block/mob-confirm-button-block.component */ 35106);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_components_search_hotel_name_search_hotel_name_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../shared/components/search-hotel-name/search-hotel-name.component */ 57570);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-skeleton-loader */ 91391);
/* harmony import */ var _results_filters_filters_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../results-filters/filters.component */ 32082);
/* harmony import */ var _components_mob_filter_navbar_mob_filter_navbar_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../components/mob-filter-navbar/mob-filter-navbar.component */ 97008);
/* harmony import */ var _shared_components_results_top_info_block_results_top_info_block_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @shared/components/results-top-info-block/results-top-info-block.component */ 70858);
/* harmony import */ var _results_filters_components_filter_btn_filter_btn_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../results-filters/components/filter-btn/filter-btn.component */ 16722);
/* harmony import */ var _shared_components_price_range_filter_price_range_filter_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../shared/components/price-range-filter/price-range-filter.component */ 89254);
/* harmony import */ var _components_acc_car_transfer_skeleton_acc_car_transfer_skeleton_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../components/acc-car-transfer-skeleton/acc-car-transfer-skeleton.component */ 56735);
/* harmony import */ var _components_selected_accommodations_selected_accommodations_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./components/selected-accommodations/selected-accommodations.component */ 16068);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../shared/pipes/safe-html.pipe */ 66926);







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

















class AccommodationsModule {
}
AccommodationsModule.ɵfac = function AccommodationsModule_Factory(t) { return new (t || AccommodationsModule)(); };
AccommodationsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineNgModule"]({ type: AccommodationsModule });
AccommodationsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵdefineInjector"]({ imports: [[
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_34__.CommonModule,
            _accommodations_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccommodationsRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule,
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_36__.NgSelectModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_37__.InfiniteScrollModule,
            _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_5__.ResultsCartItemSelectionModule,
            ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__.VirtualScrollerModule,
            _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_8__.ResultsFiltersModule,
            _map_map_module__WEBPACK_IMPORTED_MODULE_9__.TzMapModule,
            _accommodation_accommodation_module__WEBPACK_IMPORTED_MODULE_11__.AccommodationModule,
            _results_summary_results_summary_module__WEBPACK_IMPORTED_MODULE_21__.ResultsSummaryModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetNgModuleScope"](AccommodationsModule, { declarations: [_accommodations_component__WEBPACK_IMPORTED_MODULE_1__.AccommodationsComponent,
        _components_accommodation_list_accommodation_list_component__WEBPACK_IMPORTED_MODULE_2__.AccommodationListComponent,
        _components_accommodation_list_ui_item_accommodation_list_ui_item_component__WEBPACK_IMPORTED_MODULE_7__.AccommodationListUiItemComponent,
        _components_accommodation_list_result_information_accommodation_list_result_information_component__WEBPACK_IMPORTED_MODULE_4__.AccommodationListResultInformationComponent,
        _components_mob_selected_accommodation_details_mob_selected_accommodation_details_component__WEBPACK_IMPORTED_MODULE_10__.MobSelectedAccommodationDetailsComponent,
        _components_mob_accommodation_advantages_disadvantages_mob_accommodation_advantages_disadvantages_component__WEBPACK_IMPORTED_MODULE_12__.MobAccommodationAdvantagesDisadvantagesComponent,
        _components_mob_accommodation_selected_room_details_mob_accommodation_selected_room_details_component__WEBPACK_IMPORTED_MODULE_13__.MobAccommodationSelectedRoomDetailsComponent,
        _components_mob_accommodation_selected_room_offer_mob_accommodation_selected_room_offer_component__WEBPACK_IMPORTED_MODULE_14__.MobAccommodationSelectedRoomOfferComponent,
        _components_mob_accommodation_selected_room_list_mob_accommodation_selected_room_list_component__WEBPACK_IMPORTED_MODULE_15__.MobAccommodationSelectedRoomListComponent,
        _accommodation_components_mob_accommodation_details_room_offer_mob_accommodation_details_room_offer_component__WEBPACK_IMPORTED_MODULE_16__.MobAccommodationDetailsRoomOfferComponent,
        _components_mob_accommodation_skeleton_mob_accommodation_skeleton_component__WEBPACK_IMPORTED_MODULE_17__.MobAccommodationSkeletonComponent,
        _components_mob_accommodation_rooms_list_modal_mob_accommodation_rooms_list_modal_component__WEBPACK_IMPORTED_MODULE_18__.MobAccommodationRoomsListModalComponent,
        _accommodation_components_mob_accommodation_details_room_main_info_mob_accommodation_details_room_main_info_component__WEBPACK_IMPORTED_MODULE_19__.MobAccommodationDetailsRoomMainInfoComponent,
        _components_mob_accommodation_select_option_button_mob_accommodation_select_option_button_component__WEBPACK_IMPORTED_MODULE_20__.MobAccommodationSelectOptionButtonComponent,
        _components_mob_confirm_button_block_mob_confirm_button_block_component__WEBPACK_IMPORTED_MODULE_22__.MobConfirmButtonBlockComponent], imports: [_shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_34__.CommonModule,
        _accommodations_routing_module__WEBPACK_IMPORTED_MODULE_0__.AccommodationsRoutingModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_35__.FormsModule,
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_36__.NgSelectModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_37__.InfiniteScrollModule,
        _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_5__.ResultsCartItemSelectionModule,
        ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_6__.VirtualScrollerModule,
        _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_8__.ResultsFiltersModule,
        _map_map_module__WEBPACK_IMPORTED_MODULE_9__.TzMapModule,
        _accommodation_accommodation_module__WEBPACK_IMPORTED_MODULE_11__.AccommodationModule,
        _results_summary_results_summary_module__WEBPACK_IMPORTED_MODULE_21__.ResultsSummaryModule], exports: [_ng_select_ng_select__WEBPACK_IMPORTED_MODULE_36__.NgSelectComponent] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_33__["ɵɵsetComponentScope"](_accommodations_component__WEBPACK_IMPORTED_MODULE_1__.AccommodationsComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_34__.NgIf, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_23__.TzIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_38__.TranslateDirective, _shared_components_search_hotel_name_search_hotel_name_component__WEBPACK_IMPORTED_MODULE_24__.SearchHotelNameComponent, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_39__.NgxSkeletonLoaderComponent, _results_filters_filters_component__WEBPACK_IMPORTED_MODULE_25__.FiltersComponent, _components_mob_filter_navbar_mob_filter_navbar_component__WEBPACK_IMPORTED_MODULE_26__.MobFilterNavbarComponent, _shared_components_results_top_info_block_results_top_info_block_component__WEBPACK_IMPORTED_MODULE_27__.ResultsTopInfoBlockComponent, _results_filters_components_filter_btn_filter_btn_component__WEBPACK_IMPORTED_MODULE_28__.FilterBtnComponent, _shared_components_price_range_filter_price_range_filter_component__WEBPACK_IMPORTED_MODULE_29__.PriceRangeFilterComponent, _components_acc_car_transfer_skeleton_acc_car_transfer_skeleton_component__WEBPACK_IMPORTED_MODULE_30__.AccCarTransferSkeletonComponent, _components_mob_accommodation_skeleton_mob_accommodation_skeleton_component__WEBPACK_IMPORTED_MODULE_17__.MobAccommodationSkeletonComponent, _components_selected_accommodations_selected_accommodations_component__WEBPACK_IMPORTED_MODULE_31__.SelectedAccommodationsComponent, _components_accommodation_list_accommodation_list_component__WEBPACK_IMPORTED_MODULE_2__.AccommodationListComponent], [_angular_common__WEBPACK_IMPORTED_MODULE_34__.AsyncPipe, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_32__.SafeHtmlPipe]);


/***/ }),

/***/ 85599:
/*!***********************************************************************!*\
  !*** ./src/app/modules/results/accommodations/accommodations.sort.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationsSort": () => (/* binding */ AccommodationsSort)
/* harmony export */ });
const AccommodationsSort = [
    {
        sort: '1',
        label: 'GENERAL.SORT.BEST_VALUE',
    },
    {
        sort: '2',
        label: 'FILTER.ACC.LOWEST_PRICE',
    },
    {
        sort: '7',
        label: 'FILTER.ACC.DISTANCE',
    },
    {
        sort: '8',
        label: 'FILTER.ACC.REVIEWS_SCORE',
    },
    {
        sort: '4',
        label: 'FILTER.ACC.STAR_RATING',
    },
];


/***/ }),

/***/ 20126:
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodations/components/accommodation-list-result-information/accommodation-list-result-information.component.ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationListResultInformationComponent": () => (/* binding */ AccommodationListResultInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/block-separator/block-separator.component */ 183);
/* harmony import */ var _accommodation_list_item_accommodation_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accommodation-list-item/accommodation-list-item.component */ 6159);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);







function AccommodationListResultInformationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 4)(1, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx_r0.selectedAccommodationSummary, " ");
} }
function AccommodationListResultInformationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "tz-accommodation-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("accommodation", ctx_r1.selectedAccommodation);
} }
const _c0 = function (a0) { return { resultsCount: a0, tripType: "" }; };
const _c1 = function (a0) { return { place: a0 }; };
function AccommodationListResultInformationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7)(1, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("no-bottom-margin", !ctx_r2.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 4, ctx_r2.count > 1 ? "HOTELS.Properties_found" : "HOTELS.Property_found", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c0, ctx_r2.count)), " ", ctx_r2.destinationCity ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 7, "HOTELS.FOUND_IN", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](12, _c1, ctx_r2.destinationCity)) : "", " ");
} }
function AccommodationListResultInformationComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 8)(1, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](3, 2, ctx_r3.count > 1 ? "HOTELS.Properties_found" : "HOTELS.Property_found", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx_r3.count)), " ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](4, 5, "HOTELS.FOUND_NEAR", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](10, _c1, ctx_r3.destinationCity)), " ");
} }
class AccommodationListResultInformationComponent {
    constructor(platformService) {
        this.platformService = platformService;
        this.count = 0;
        this.nearest = false;
        this.destinationCity = '';
        this.cancelSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.selectedAccommodationSummary = null;
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (changes['selectedAccommodation'] && changes['selectedAccommodation'].currentValue) {
            const accommodation = changes['selectedAccommodation'].currentValue;
            this.selectedAccommodationSummary = accommodation.name;
        }
    }
    onCancelSelection() {
        this.cancelSelection.emit();
    }
}
AccommodationListResultInformationComponent.ɵfac = function AccommodationListResultInformationComponent_Factory(t) { return new (t || AccommodationListResultInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_0__.PlatformService)); };
AccommodationListResultInformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AccommodationListResultInformationComponent, selectors: [["tz-accommodation-list-result-information"]], inputs: { selectedAccommodation: "selectedAccommodation", count: "count", nearest: "nearest", destinationCity: "destinationCity" }, outputs: { cancelSelection: "cancelSelection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 4, consts: [["class", "results-title", 4, "ngIf"], ["class", "flight-list-item", 4, "ngIf"], ["class", "tz-block-separator-title", 3, "no-bottom-margin", 4, "ngIf"], ["class", "tz-block-separator-title no-bottom-margin", 4, "ngIf"], [1, "results-title"], [1, "flight-list-item"], [3, "accommodation"], [1, "tz-block-separator-title"], [1, "tz-block-separator-title", "no-bottom-margin"]], template: function AccommodationListResultInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, AccommodationListResultInformationComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, AccommodationListResultInformationComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, AccommodationListResultInformationComponent_div_2_Template, 5, 14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](3, AccommodationListResultInformationComponent_div_3_Template, 5, 12, "div", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedAccommodation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.selectedAccommodation);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedAccommodation && !ctx.nearest && ctx.count);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", !ctx.selectedAccommodation && ctx.nearest && ctx.count);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_1__.BlockSeparatorComponent, _accommodation_list_item_accommodation_list_item_component__WEBPACK_IMPORTED_MODULE_2__.AccommodationListItemComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".accommodation-list-result-info-block-separator[_ngcontent-%COMP%] {\n  padding-top: 0;\n  padding-bottom: 0.625rem;\n}\n\n.results-title[_ngcontent-%COMP%] {\n  padding-bottom: 0.625rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tbGlzdC1yZXN1bHQtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0Esd0JBQUE7QUFDRjs7QUFFQTtFQUNFLHdCQUFBO0FBQ0YiLCJmaWxlIjoiYWNjb21tb2RhdGlvbi1saXN0LXJlc3VsdC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY2NvbW1vZGF0aW9uLWxpc3QtcmVzdWx0LWluZm8tYmxvY2stc2VwYXJhdG9yIHtcbiAgcGFkZGluZy10b3A6IDA7XG4gIHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTtcbn1cblxuLnJlc3VsdHMtdGl0bGUge1xuICBwYWRkaW5nLWJvdHRvbTogMC42MjVyZW07XG59XG4iXX0= */"] });


/***/ }),

/***/ 66922:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodations/components/accommodation-list-ui-item/accommodation-list-ui-item.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationListUiItemComponent": () => (/* binding */ AccommodationListUiItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _accommodation_list_item_accommodation_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accommodation-list-item/accommodation-list-item.component */ 6159);
/* harmony import */ var _mob_accommodations_list_item_mob_accommodations_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mob-accommodations-list-item/mob-accommodations-list-item.component */ 10191);
/* harmony import */ var _accommodation_list_result_information_accommodation_list_result_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../accommodation-list-result-information/accommodation-list-result-information.component */ 20126);









function AccommodationListUiItemComponent_ng_container_0_tz_accommodation_list_item_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tz-accommodation-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectHotel", function AccommodationListUiItemComponent_ng_container_0_tz_accommodation_list_item_2_Template_tz_accommodation_list_item_selectHotel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r5.onSelectHotel();
    })("openAccommodationInMap", function AccommodationListUiItemComponent_ng_container_0_tz_accommodation_list_item_2_Template_tz_accommodation_list_item_openAccommodationInMap_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r7.openAccommodationInMap.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("accommodation", ctx_r3.data)("cheapest", ctx_r3.getCheapestOffer())("serviceList", true);
  }
}

function AccommodationListUiItemComponent_ng_container_0_tz_mob_accommodations_list_item_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tz-mob-accommodations-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectHotel", function AccommodationListUiItemComponent_ng_container_0_tz_mob_accommodations_list_item_4_Template_tz_mob_accommodations_list_item_selectHotel_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
      return ctx_r8.onSelectHotel();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("accommodation", ctx_r4.data)("cheapest", ctx_r4.getCheapestOffer());
  }
}

function AccommodationListUiItemComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AccommodationListUiItemComponent_ng_container_0_tz_accommodation_list_item_2_Template, 1, 3, "tz-accommodation-list-item", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, AccommodationListUiItemComponent_ng_container_0_tz_mob_accommodations_list_item_4_Template, 1, 2, "tz-mob-accommodations-list-item", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 2, ctx_r0.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 4, ctx_r0.platformService.isMobileDevice$));
  }
}

function AccommodationListUiItemComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "tz-accommodation-list-result-information", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("nearest", true)("count", ctx_r2.accMetadata == null ? null : ctx_r2.accMetadata.total)("destinationCity", ctx_r2.accMetadata == null ? null : ctx_r2.accMetadata.destinationName);
  }
}

class AccommodationListUiItemComponent {
  constructor(platformService, userService) {
    this.platformService = platformService;
    this.userService = userService;
    this.type = 'acc';
    this.selectHotel = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.openAccommodationInMap = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
    this.isAcc = true;
  }

  ngOnInit() {
    this.isAcc = this.type === 'acc';

    if (this.isAcc) {
      this.acc = this.data;
    } else {
      this.accMetadata = this.data;
    }
  }

  getCheapestOffer() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;

    if (!this.isAcc) {
      return {};
    }

    if (this.userService.IsLogged() && this.acc && this.acc.recOffersLoggedIn) {
      return this.acc.recOffersLoggedIn;
    }

    return {
      cheapestPrice: (_a = this.acc) === null || _a === void 0 ? void 0 : _a.cheapestPrice,
      taxInfo: (_b = this.acc) === null || _b === void 0 ? void 0 : _b.taxInfo,
      roomType: (_c = this.acc) === null || _c === void 0 ? void 0 : _c.roomType,
      breakFastType: (_d = this.acc) === null || _d === void 0 ? void 0 : _d.breakFastType,
      breakFastTypeCode: (_e = this.acc) === null || _e === void 0 ? void 0 : _e.breakFastTypeCode,
      payAt: (_f = this.acc) === null || _f === void 0 ? void 0 : _f.payAt,
      cpType: (_g = this.acc) === null || _g === void 0 ? void 0 : _g.cpType,
      roomsLeft: (_h = this.acc) === null || _h === void 0 ? void 0 : _h.roomsLeft,
      numberOfRooms: (_j = this.acc) === null || _j === void 0 ? void 0 : _j.numberOfRooms
    };
  }

  onSelectHotel() {
    this.selectHotel.emit();
  }

}

AccommodationListUiItemComponent.ɵfac = function AccommodationListUiItemComponent_Factory(t) {
  return new (t || AccommodationListUiItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_0__.PlatformService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService));
};

AccommodationListUiItemComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: AccommodationListUiItemComponent,
  selectors: [["tz-accommodation-list-ui-item"]],
  inputs: {
    type: "type",
    data: "data"
  },
  outputs: {
    selectHotel: "selectHotel",
    openAccommodationInMap: "openAccommodationInMap"
  },
  decls: 3,
  vars: 2,
  consts: [[4, "ngIf", "ngIfElse"], ["locationLabel", ""], [1, "accommodation-list-item"], [3, "accommodation", "cheapest", "serviceList", "selectHotel", "openAccommodationInMap", 4, "ngIf"], [3, "accommodation", "cheapest", "selectHotel", 4, "ngIf"], [3, "accommodation", "cheapest", "serviceList", "selectHotel", "openAccommodationInMap"], [3, "accommodation", "cheapest", "selectHotel"], [1, "accommodation-result-information-container"], [3, "nearest", "count", "destinationCity"]],
  template: function AccommodationListUiItemComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, AccommodationListUiItemComponent_ng_container_0_Template, 6, 6, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccommodationListUiItemComponent_ng_template_1_Template, 2, 3, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplateRefExtractor"]);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](2);

      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.type === "acc")("ngIfElse", _r1);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _accommodation_list_item_accommodation_list_item_component__WEBPACK_IMPORTED_MODULE_2__.AccommodationListItemComponent, _mob_accommodations_list_item_mob_accommodations_list_item_component__WEBPACK_IMPORTED_MODULE_3__.MobAccommodationsListItemComponent, _accommodation_list_result_information_accommodation_list_result_information_component__WEBPACK_IMPORTED_MODULE_4__.AccommodationListResultInformationComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhY2NvbW1vZGF0aW9uLWxpc3QtdWktaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"]
});

/***/ }),

/***/ 68000:
/*!**************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodations/components/accommodation-list/accommodation-list.component.ts ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AccommodationListComponent": () => (/* binding */ AccommodationListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_components_paginate_component_ts_service_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/paginate.component.ts/service.list.component */ 32553);
/* harmony import */ var ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/utils */ 98172);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _accommodation_list_result_information_accommodation_list_result_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../accommodation-list-result-information/accommodation-list-result-information.component */ 20126);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-infinite-scroll */ 34229);
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-virtual-scroller */ 56443);
/* harmony import */ var _accommodation_list_ui_item_accommodation_list_ui_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../accommodation-list-ui-item/accommodation-list-ui-item.component */ 66922);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);











const _c0 = ["accommodationsScroller"];
const _c1 = ["accommodationsListContainer"];
function AccommodationListComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 10)(1, "tz-accommodation-list-result-information", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("cancelSelection", function AccommodationListComponent_div_1_div_2_Template_tz_accommodation_list_result_information_cancelSelection_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r6.onCancelSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("selectedAccommodation", ctx_r3.selectedAccommodation)("count", ctx_r3.accommodationListMetadata.total)("destinationCity", ctx_r3.accommodationListMetadata.destinationName);
} }
function AccommodationListComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 12)(1, "tz-accommodation-list-ui-item", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("selectHotel", function AccommodationListComponent_div_1_div_6_Template_tz_accommodation_list_ui_item_selectHotel_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const accommodation_r8 = restoredCtx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r10.onSelectHotel({ giataId: accommodation_r8.data.giataID, hotelName: accommodation_r8.data.name, position: -1 }); })("openAccommodationInMap", function AccommodationListComponent_div_1_div_6_Template_tz_accommodation_list_ui_item_openAccommodationInMap_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r12.onOpenAccommodationInMap($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const accommodation_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("id", accommodation_r8.data.giataID);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("data", accommodation_r8.data)("type", accommodation_r8.type);
} }
function AccommodationListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 3, 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AccommodationListComponent_div_1_div_2_Template, 2, 3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("scrolled", function AccommodationListComponent_div_1_Template_div_scrolled_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r13.onScroll($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "virtual-scroller", 7, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("vsChange", function AccommodationListComponent_div_1_Template_virtual_scroller_vsChange_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r15.handleScrollOnContainer(); })("vsEnd", function AccommodationListComponent_div_1_Template_virtual_scroller_vsEnd_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r16.handleScrollOnContainer(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AccommodationListComponent_div_1_div_6_Template, 2, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](5);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.accommodations.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("scrollWindow", ctx_r0.infiniteScrollConfig.scrollWindow)("infiniteScrollDistance", ctx_r0.infiniteScrollConfig.infiniteScrollDistance)("infiniteScrollThrottle", ctx_r0.infiniteScrollConfig.infiniteScrollThrottle)("fromRoot", ctx_r0.infiniteScrollConfig.fromRoot)("infiniteScrollContainer", ctx_r0.infiniteScrollConfig.infiniteScrollContainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("items", ctx_r0.accommodationListUi)("parentScroll", ctx_r0.scrollingContainer)("enableUnequalChildrenSizes", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _r4.viewPortItems)("ngForTrackBy", ctx_r0.identify);
} }
function AccommodationListComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14)(1, "div", 15)(2, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function AccommodationListComponent_div_2_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r18); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r17.onCancelSelection(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "CancelSelection"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](7, 4, "GENERAL.CONFIRM_CONTINUE"));
} }
class AccommodationListComponent extends _core_components_paginate_component_ts_service_list_component__WEBPACK_IMPORTED_MODULE_0__.ServiceListComponent {
    constructor(renderer, platformService) {
        super();
        this.renderer = renderer;
        this.platformService = platformService;
        this.virtualScroller = undefined;
        this.listContainer = undefined;
        this.accommodations = [];
        this.nearestAccommodations = [];
        this.scrollToElement = 0;
        this.accommodationListMetadata = {
            increment: 80,
            section: 1,
            total: 0,
        };
        this.nearestAccommodationListMetadata = {
            increment: 80,
            section: 2,
            total: 0,
        };
        this.isListCompleted = false;
        this.nextPage = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.cancelSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.selectHotel = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.openAccommodationInMap = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.accommodationListUi = [];
    }
    ngOnChanges(changes) {
        if (changes['accommodations'] || changes['nearestAccommodations']) {
            this.handleAccChanges();
        }
        if (changes['scrollToElement'] || changes['scrollToElement']) {
            this.scrollToTheSelectedAccElement();
        }
    }
    ngOnInit() { }
    onCancelSelection() {
        this.cancelSelection.emit();
        this.selectedAccommodation = null;
    }
    onScroll($event) {
        if (!this.isListCompleted) {
            this.nextPage.emit();
        }
    }
    onSelectHotel(data) {
        var _a;
        if (this.virtualScroller) {
            this.selectHotel.emit({
                giataId: data.giataId,
                hotelName: data.hotelName,
                position: (_a = this.virtualScroller) === null || _a === void 0 ? void 0 : _a.viewPortInfo.scrollStartPosition,
            });
        }
    }
    onOpenAccommodationInMap(accommodation) {
        var _a;
        if (this.virtualScroller) {
            this.openAccommodationInMap.emit({
                selectedHotel: accommodation,
                position: (_a = this.virtualScroller) === null || _a === void 0 ? void 0 : _a.viewPortInfo.scrollStartPosition,
            });
        }
    }
    identify(index, item) {
        return item.id ? item.id : '';
    }
    ngAfterViewInit() {
        this.setScrollingContainer();
        this.scrollToTheSelectedAccElement();
    }
    handleScrollOnContainer(double = true) {
        requestAnimationFrame(() => {
            var _a, _b, _c, _d;
            if (this.virtualScroller) {
                let height = '';
                const heightValue = ((_a = this.virtualScroller) === null || _a === void 0 ? void 0 : _a.viewPortInfo.maxScrollPosition) +
                    ((_b = this.virtualScroller) === null || _b === void 0 ? void 0 : _b.viewPortInfo.scrollEndPosition) -
                    ((_c = this.virtualScroller) === null || _c === void 0 ? void 0 : _c.viewPortInfo.scrollStartPosition);
                if (!this.platformService.isMobileDevice) {
                    height = heightValue + 24 + 24 + 'px';
                }
                else {
                    height = heightValue + 24 + 'px';
                }
                if (this.accommodationListUi.length <= 1 && this.platformService.isMobileDevice) {
                    height = 'auto';
                }
                this.renderer.setStyle((_d = this.listContainer) === null || _d === void 0 ? void 0 : _d.nativeElement, 'height', height);
                if (double) {
                    this.handleScrollOnContainer(false);
                }
            }
        });
    }
    setScrollingContainer() {
        const element = this.renderer.selectRootElement('.wrapper', true);
        this.scrollingContainer = element ? element : ngx_bootstrap_utils__WEBPACK_IMPORTED_MODULE_6__.window;
    }
    handleAccChanges() {
        this.accommodationListUi = [];
        if (this.accommodations.length) {
            const uiList = this.accommodations.map((acc) => ({
                type: 'acc',
                data: acc,
                id: acc.giataID,
            }));
            this.accommodationListUi.push(...uiList);
        }
        if (this.nearestAccommodations.length) {
            this.accommodationListUi.push({
                type: 'locationLabel',
                data: this.nearestAccommodationListMetadata,
            });
            const uiList = this.nearestAccommodations.map((acc) => ({
                type: 'acc',
                data: acc,
                id: acc.giataID,
            }));
            this.accommodationListUi.push(...uiList);
        }
    }
    scrollToTheSelectedAccElement() {
        if (this.scrollToElement) {
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    var _a;
                    (_a = this.virtualScroller) === null || _a === void 0 ? void 0 : _a.scrollToPosition(this.scrollToElement, 0);
                });
            });
        }
    }
}
AccommodationListComponent.ɵfac = function AccommodationListComponent_Factory(t) { return new (t || AccommodationListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_5__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_1__.PlatformService)); };
AccommodationListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AccommodationListComponent, selectors: [["tz-accommodation-list"]], viewQuery: function AccommodationListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c1, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.virtualScroller = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.listContainer = _t.first);
    } }, inputs: { accommodations: "accommodations", nearestAccommodations: "nearestAccommodations", isMobile$: "isMobile$", scrollToElement: "scrollToElement", accommodationListMetadata: "accommodationListMetadata", nearestAccommodationListMetadata: "nearestAccommodationListMetadata", isListCompleted: "isListCompleted" }, outputs: { nextPage: "nextPage", cancelSelection: "cancelSelection", selectHotel: "selectHotel", openAccommodationInMap: "openAccommodationInMap" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 2, consts: [[1, "accommodations"], ["class", "searched-accommodations", 4, "ngIf"], ["class", "accommodations-submission flex", 4, "ngIf"], [1, "searched-accommodations"], ["accommodationsListContainer", ""], ["class", "accommodation-result-information-container", 4, "ngIf"], ["infiniteScroll", "", 1, "accommodations-list", 3, "scrollWindow", "infiniteScrollDistance", "infiniteScrollThrottle", "fromRoot", "infiniteScrollContainer", "scrolled"], [3, "items", "parentScroll", "enableUnequalChildrenSizes", "vsChange", "vsEnd"], ["accommodationsScroller", ""], ["class", "accommodation-list-item", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "accommodation-result-information-container"], [3, "selectedAccommodation", "count", "destinationCity", "cancelSelection"], [1, "accommodation-list-item"], [3, "id", "data", "type", "selectHotel", "openAccommodationInMap"], [1, "accommodations-submission", "flex"], [1, "buttons-container", "flex"], [1, "btn", "select-btn", 3, "click"], [1, "btn", "select-btn", "selected"]], template: function AccommodationListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, AccommodationListComponent_div_1_Template, 7, 11, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, AccommodationListComponent_div_2_Template, 8, 6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.accommodationListUi.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedAccommodation);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _accommodation_list_result_information_accommodation_list_result_information_component__WEBPACK_IMPORTED_MODULE_2__.AccommodationListResultInformationComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__.InfiniteScrollDirective, ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_3__.VirtualScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _accommodation_list_ui_item_accommodation_list_ui_item_component__WEBPACK_IMPORTED_MODULE_4__.AccommodationListUiItemComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n@media (max-width: 750px) {\n  [_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: center;\n  }\n}\n[_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%]   .filter-open-popup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 1.875rem;\n  margin-right: 20px;\n}\n@media (max-width: 750px) {\n  [_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%]   .filter-open-popup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 1rem;\n  }\n}\n[_nghost-%COMP%]   .accommodations[_ngcontent-%COMP%]   .accommodation-list-item[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .accommodations[_ngcontent-%COMP%]   .accommodation-list-item[_ngcontent-%COMP%] {\n    margin-top: 0.5625rem;\n  }\n  [_nghost-%COMP%]   .accommodations[_ngcontent-%COMP%]   .accommodation-list-item[_ngcontent-%COMP%]:first-child {\n    margin-top: 0;\n  }\n}\n[_nghost-%COMP%]   .accommodations[_ngcontent-%COMP%]   .results-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .accommodations[_ngcontent-%COMP%]   .results-title[_ngcontent-%COMP%]:after {\n  border-top: 1px solid #e5e5e5;\n  content: \"\";\n  margin: 0 auto;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .accommodations[_ngcontent-%COMP%]   .results-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--color-main-background);\n  padding: 0 0.93rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  font-size: 0.833rem;\n  line-height: 1.59rem;\n  color: var(--color-text-light-gray);\n  z-index: 2;\n}\n[_nghost-%COMP%]   .accommodations[_ngcontent-%COMP%]   .accommodations-submission[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .accommodations[_ngcontent-%COMP%]   .accommodations-submission[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] {\n  flex: 1;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .accommodations[_ngcontent-%COMP%]   .accommodations-submission[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFjY29tbW9kYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsT0FBQTtBQURGO0FBR0U7RUFDRSxtQkFBQTtBQURKO0FDbUNFO0VEbkNBO0lBSUksc0JBQUE7SUFDQSxtQkFBQTtFQUFKO0FBQ0Y7QUFHTTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7QUFEUjtBQ3lCRTtFRDFCSTtJQUtJLGVBQUE7SUFDQSxtQkFBQTtFQUFSO0FBQ0Y7QUFNSTtFQUNJLG1CQUFBO0FBSlI7QUM0Qkk7RUR6QkE7SUFJUSxxQkFBQTtFQUhWO0VBS1U7SUFDSSxhQUFBO0VBSGQ7QUFDRjtBQU1JO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFKTjtBQU1NO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxVQUFBO0FBSlI7QUFPTTtFQUNFLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG1DQUFBO0VBQ0EsVUFBQTtBQUxSO0FBU0k7RUFDRSxnQkFBQTtBQVBOO0FBU007RUFDRSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVBSO0FBU1E7RUFDRSxXQUFBO0VBQ0EsY0FBQTtBQVBWIiwiZmlsZSI6ImFjY29tbW9kYXRpb24tbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuOmhvc3Qge1xuICBmbGV4OiAxO1xuXG4gIC5wcmljZS1yYW5nZS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cbiAgICBAaW5jbHVkZSB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oNzUwcHgpIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cblxuICAgIC5maWx0ZXItb3Blbi1wb3B1cCB7XG4gICAgICBidXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuODc1cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgICAgICAgQGluY2x1ZGUgdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKDc1MHB4KSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAuYWNjb21tb2RhdGlvbnMge1xuICAgIC5hY2NvbW1vZGF0aW9uLWxpc3QtaXRlbSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNTYyNXJlbTtcblxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucmVzdWx0cy10aXRsZSB7XG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cbiAgICAgICY6YWZ0ZXIge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgfVxuXG4gICAgICBzcGFuIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbWFpbi1iYWNrZ3JvdW5kKTtcbiAgICAgICAgcGFkZGluZzogMCAwLjkzcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMDtcbiAgICAgICAgZm9udC1zaXplOiAuODMzcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41OXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbGlnaHQtZ3JheSk7XG4gICAgICAgIHotaW5kZXg6IDJcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYWNjb21tb2RhdGlvbnMtc3VibWlzc2lvbiB7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgICAuYnV0dG9ucy1jb250YWluZXIge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuXG4gICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgICAgbWFyZ2luOiAwIDIwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 68892:
/*!**********************************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodations/components/mob-accommodation-rooms-list-modal/mob-accommodation-rooms-list-modal.component.ts ***!
  \**********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobAccommodationRoomsListModalComponent": () => (/* binding */ MobAccommodationRoomsListModalComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _services_modules_accommodations_utils_accommodations_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/accommodations/utils/accommodations.utils */ 33241);
/* harmony import */ var _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/modules/cart/utils/cart.utils */ 14770);
/* harmony import */ var _core_constants_service_ids_name_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/service-ids-name.const */ 93462);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_accommodations_services_accommodations_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modules/accommodations/services/accommodations.service */ 84647);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/cart/services/cart.service */ 16750);
/* harmony import */ var _accommodation_details_util_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../accommodation-details-util.service */ 34491);
/* harmony import */ var _mob_accommodation_selected_room_list_mob_accommodation_selected_room_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../mob-accommodation-selected-room-list/mob-accommodation-selected-room-list.component */ 73778);
/* harmony import */ var _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/block-separator/block-separator.component */ 183);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _accommodation_components_mob_accommodation_details_room_main_info_mob_accommodation_details_room_main_info_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../accommodation/components/mob-accommodation-details-room-main-info/mob-accommodation-details-room-main-info.component */ 58747);
/* harmony import */ var _accommodation_components_mob_accommodation_details_room_offer_mob_accommodation_details_room_offer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../accommodation/components/mob-accommodation-details-room-offer/mob-accommodation-details-room-offer.component */ 62789);
/* harmony import */ var _mob_accommodation_select_option_button_mob_accommodation_select_option_button_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../mob-accommodation-select-option-button/mob-accommodation-select-option-button.component */ 44386);
/* harmony import */ var _mob_confirm_button_block_mob_confirm_button_block_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../mob-confirm-button-block/mob-confirm-button-block.component */ 35106);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngx-translate/core */ 87514);

















const _c0 = function (a0) { return { resultsCount: a0, tripType: "" }; };
const _c1 = function (a0) { return { place: a0 }; };
function MobAccommodationRoomsListModalComponent_span_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](2, 2, ctx_r0.accommodationListMetadata.total > 1 ? "HOTELS.Properties_found" : "HOTELS.Property_found", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](8, _c0, ctx_r0.accommodationListMetadata.total)), " ", (ctx_r0.accommodationListMetadata == null ? null : ctx_r0.accommodationListMetadata.destinationName) ? _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](3, 5, "HOTELS.FOUND_IN", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](10, _c1, ctx_r0.accommodationListMetadata == null ? null : ctx_r0.accommodationListMetadata.destinationName)) : "", " ");
} }
function MobAccommodationRoomsListModalComponent_div_5_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "tz-mob-accommodation-details-room-offer", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("openTermsModal", function MobAccommodationRoomsListModalComponent_div_5_div_3_Template_tz_mob_accommodation_details_room_offer_openTermsModal_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9); const roomOffer_r6 = restoredCtx.$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r8.openTermsModal(roomOffer_r6); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "div", 13)(4, "tz-mob-accommodation-select-option-button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("roomCountChanged", function MobAccommodationRoomsListModalComponent_div_5_div_3_Template_tz_mob_accommodation_select_option_button_roomCountChanged_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r10.roomCountChanged(); })("getRoomPrice", function MobAccommodationRoomsListModalComponent_div_5_div_3_Template_tz_mob_accommodation_select_option_button_getRoomPrice_4_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2); return ctx_r11.getRoomPrice($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const roomOffer_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const room_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("roomOffer", roomOffer_r6)("stayNumber", ctx_r5.accommodation.numberOfNights);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("roomOption", roomOffer_r6)("roomPrice", room_r3.roomOffers[i_r7].prices)("isUserLogged", ctx_r5.isUserLogged)("stayNumber", ctx_r5.accommodation.numberOfNights)("maxRoomSelectionNumber", ctx_r5.roomsLeftForSelection);
} }
function MobAccommodationRoomsListModalComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "tz-mob-accommodation-details-room-main-info", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, MobAccommodationRoomsListModalComponent_div_5_div_3_Template, 5, 7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const room_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("id", room_r3.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("room", room_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", room_r3.roomOffers);
} }
function MobAccommodationRoomsListModalComponent_tz_mob_confirm_button_block_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "tz-mob-confirm-button-block", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("confirm", function MobAccommodationRoomsListModalComponent_tz_mob_confirm_button_block_6_Template_tz_mob_confirm_button_block_confirm_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](); return ctx_r13.onBooking(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("roomsQuantity", ctx_r2.roomsQuantity)("totalPrice", ctx_r2.totalPrice);
} }
const _c2 = function (a0) { return { "accommodations-rooms--selected-pb": a0 }; };
class MobAccommodationRoomsListModalComponent {
    constructor(accommodationsService, userService, cartService, accommodationDetailsUtilService) {
        this.accommodationsService = accommodationsService;
        this.userService = userService;
        this.cartService = cartService;
        this.accommodationDetailsUtilService = accommodationDetailsUtilService;
        this.maxRoomQuantity = 4;
        this.roomsLeftForSelection = this.maxRoomQuantity;
        this.fromHotelsMap = false;
        this.roomsQuantity = 0;
        this.totalPrice = 0;
        this.bookingOptions = [];
        this.hasBooked = false;
        this.servicePrices = [];
    }
    ngOnInit() {
        this.initData();
    }
    getRoomPrice(roomPrice) {
        this.totalPrice = this.accommodationDetailsUtilService.getRoomPrice(roomPrice, this.servicePrices);
    }
    roomCountChanged() {
        this.roomsQuantity = _services_modules_accommodations_utils_accommodations_utils__WEBPACK_IMPORTED_MODULE_1__.AccommodationsUtilsService.getSelectedRoomQuantity(this.data.accommodation.rooms);
        this.roomsLeftForSelection = this.maxRoomQuantity - this.roomsQuantity;
    }
    onBooking() {
        this.accommodationDetailsUtilService.addAccommodationItemToCart(this.accommodation);
    }
    openTermsModal(roomOption) {
        this.accommodationDetailsUtilService.openTermsModal(roomOption);
    }
    initData() {
        this.accommodationListMetadata = this.accommodationsService.getAccommodationListMetadata();
        this.accommodation = this.data.accommodation;
        this.selectedHotel = this.cartService
            .getCartData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.ACC)
            .items.find((service) => service.dataType === _core_constants_service_ids_name_const__WEBPACK_IMPORTED_MODULE_3__.ServiceIdToName[_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.ACC]);
        this.isUserLogged = this.userService.IsLogged();
        this.accommodationsService.updateAccInfoToList(this.accommodation);
        const mapHotel = this.accommodationsService.getMapHotel();
        this.fromHotelsMap = mapHotel !== undefined;
        this.accommodationDetailsUtilService.checkRoomsSold(this.accommodation);
        this.hasBooked = _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_2__.CartUtils.hasBooked(this.bookingOptions);
    }
}
MobAccommodationRoomsListModalComponent.ɵfac = function MobAccommodationRoomsListModalComponent_Factory(t) { return new (t || MobAccommodationRoomsListModalComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_modules_accommodations_services_accommodations_service__WEBPACK_IMPORTED_MODULE_4__.AccommodationsService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_5__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_6__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_accommodation_details_util_service__WEBPACK_IMPORTED_MODULE_7__.AccommodationDetailsUtilService)); };
MobAccommodationRoomsListModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({ type: MobAccommodationRoomsListModalComponent, selectors: [["tz-mob-accommodation-rooms-list-modal"]], decls: 7, vars: 9, consts: [[1, "wrapper"], [3, "accommodation", "selectedRoomsData", "selectedItem"], [4, "ngIf"], [1, "room-details-container-wrapper", 3, "ngClass"], ["class", "room-details-container", 3, "id", 4, "ngFor", "ngForOf"], [3, "roomsQuantity", "totalPrice", "confirm", 4, "ngIf"], [1, "room-details-container", 3, "id"], [3, "room"], [1, "room-detail-item-container"], ["class", "room-detail-item", 4, "ngFor", "ngForOf"], [1, "room-detail-item"], [1, "divider"], [3, "roomOffer", "stayNumber", "openTermsModal"], [1, "select-option-button-wrapper"], [3, "roomOption", "roomPrice", "isUserLogged", "stayNumber", "maxRoomSelectionNumber", "roomCountChanged", "getRoomPrice"], [3, "roomsQuantity", "totalPrice", "confirm"]], template: function MobAccommodationRoomsListModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "tz-mob-accommodation-selected-room-list", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "tz-block-separator");
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](3, MobAccommodationRoomsListModalComponent_span_3_Template, 4, 12, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, MobAccommodationRoomsListModalComponent_div_5_Template, 4, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](6, MobAccommodationRoomsListModalComponent_tz_mob_confirm_button_block_6_Template, 1, 2, "tz-mob-confirm-button-block", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("accommodation", ctx.accommodation)("selectedRoomsData", ctx.data.selectedRooms)("selectedItem", ctx.selectedHotel.selectedItem);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.accommodationListMetadata.total);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](7, _c2, ctx.roomsQuantity));
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx.accommodation.rooms);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.roomsQuantity);
    } }, directives: [_mob_accommodation_selected_room_list_mob_accommodation_selected_room_list_component__WEBPACK_IMPORTED_MODULE_8__.MobAccommodationSelectedRoomListComponent, _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_9__.BlockSeparatorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_15__.NgForOf, _accommodation_components_mob_accommodation_details_room_main_info_mob_accommodation_details_room_main_info_component__WEBPACK_IMPORTED_MODULE_10__.MobAccommodationDetailsRoomMainInfoComponent, _accommodation_components_mob_accommodation_details_room_offer_mob_accommodation_details_room_offer_component__WEBPACK_IMPORTED_MODULE_11__.MobAccommodationDetailsRoomOfferComponent, _mob_accommodation_select_option_button_mob_accommodation_select_option_button_component__WEBPACK_IMPORTED_MODULE_12__.MobAccommodationSelectOptionButtonComponent, _mob_confirm_button_block_mob_confirm_button_block_component__WEBPACK_IMPORTED_MODULE_13__.MobConfirmButtonBlockComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_16__.TranslatePipe], styles: [".wrapper[_ngcontent-%COMP%] {\n  background-color: var(--color-main-background-mobile);\n}\n\n.accommodations-rooms--selected-pb[_ngcontent-%COMP%] {\n  padding-bottom: 7rem;\n}\n\n.room-detail-item-container[_ngcontent-%COMP%] {\n  margin-top: 0.15625rem;\n  background-color: var(--color-main-background-mobile);\n}\n\n.room-detail-item[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-white);\n}\n\n.room-details-container-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n\n.select-option-button-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  border-top: 0.0625rem solid var(--color-main-text-mobile);\n  border-bottom: 0.0625rem solid var(--color-main-background-mobile);\n}\n\ntz-block-separator[_ngcontent-%COMP%] {\n  display: block;\n  padding: 0.5625rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1hY2NvbW1vZGF0aW9uLXJvb21zLWxpc3QtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxxREFBQTtBQUNKOztBQUVBO0VBQ0ksb0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0VBQ0EscURBQUE7QUFDSjs7QUFFQTtFQUNJLDRDQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtFQUNBLHlEQUFBO0VBQ0Esa0VBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBQUNKIiwiZmlsZSI6Im1vYi1hY2NvbW1vZGF0aW9uLXJvb21zLWxpc3QtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcHBlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1iYWNrZ3JvdW5kLW1vYmlsZSk7XG59XG5cbi5hY2NvbW1vZGF0aW9ucy1yb29tcy0tc2VsZWN0ZWQtcGIge1xuICAgIHBhZGRpbmctYm90dG9tOiA3cmVtO1xufVxuXG4ucm9vbS1kZXRhaWwtaXRlbS1jb250YWluZXIge1xuICAgIG1hcmdpbi10b3A6IDAuMTU2MjVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1iYWNrZ3JvdW5kLW1vYmlsZSk7XG59XG5cbi5yb29tLWRldGFpbC1pdGVtIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbn1cblxuLnJvb20tZGV0YWlscy1jb250YWluZXItd3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC41cmVtO1xufVxuXG4uc2VsZWN0LW9wdGlvbi1idXR0b24td3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBib3JkZXItdG9wOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tY29sb3ItbWFpbi10ZXh0LW1vYmlsZSk7XG4gICAgYm9yZGVyLWJvdHRvbTogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWNvbG9yLW1haW4tYmFja2dyb3VuZC1tb2JpbGUpO1xufVxuXG50ei1ibG9jay1zZXBhcmF0b3Ige1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmc6IDAuNTYyNXJlbSAwO1xufVxuIl19 */"] });


/***/ }),

/***/ 44386:
/*!******************************************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodations/components/mob-accommodation-select-option-button/mob-accommodation-select-option-button.component.ts ***!
  \******************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobAccommodationSelectOptionButtonComponent": () => (/* binding */ MobAccommodationSelectOptionButtonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_accommodations_utils_accommodations_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/accommodations/utils/accommodations.utils */ 33241);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);







function MobAccommodationSelectOptionButtonComponent_span_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r0.roomOption.personCount);
} }
function MobAccommodationSelectOptionButtonComponent_tz_icon_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](0, "tz-icon", 3);
} }
const _c0 = function (a0) { return { "mob-selected-btn": a0 }; };
class MobAccommodationSelectOptionButtonComponent {
    constructor(modalService) {
        this.modalService = modalService;
        this.maxRoomSelectionNumber = 0;
        this.roomCountChanged = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.getRoomPrice = new _angular_core__WEBPACK_IMPORTED_MODULE_3__.EventEmitter();
        this.maxValue = 0;
    }
    get checkShowTerms() {
        return _services_modules_accommodations_utils_accommodations_utils__WEBPACK_IMPORTED_MODULE_0__.AccommodationsUtilsService.checkShowTerms(this.roomOption, this.isUserLogged);
    }
    ngOnChanges(changes) {
        if (changes['maxRoomSelectionNumber'] &&
            (changes['maxRoomSelectionNumber'] || changes['maxRoomSelectionNumber'] === 0)) {
            const personCount = this.roomOption.personCount;
            const roomsLeft = this.roomOption.roomsLeft;
            this.maxValue = _services_modules_accommodations_utils_accommodations_utils__WEBPACK_IMPORTED_MODULE_0__.AccommodationsUtilsService.getMaxRoomSelectionNumber({ personCount, roomsLeft }, this.maxRoomSelectionNumber);
        }
    }
    ngOnInit() {
        this.updateMaxValue();
    }
    selectRoomOffer() {
        this.updateMaxValue();
        if (this.roomOption.roomsLeft === 1 && this.roomOption.personCount === 1) {
            this.roomOption.personCount = 0;
            this.roomCountChanged.emit();
            this.getRoomPrice.emit({ price: this.roomPrice.listPrice, id: this.roomOption.id });
            return;
        }
        if (this.roomOption.personCount > 0) {
            this.openRoomPicker(this.maxValue);
            return;
        }
        if (this.maxValue > 0) {
            if (this.roomOption.personCount === 0) {
                this.roomOption.personCount = 1;
                this.roomCountChanged.emit();
                this.getRoomPrice.emit({ price: this.roomPrice.listPrice, id: this.roomOption.id });
            }
        }
    }
    openRoomPicker(maxRoomSelectionNumber) {
        if (this.roomOption.roomsLeft > this.maxValue) {
            maxRoomSelectionNumber = maxRoomSelectionNumber + this.roomOption.personCount;
        }
        const wheels = [];
        for (let i = maxRoomSelectionNumber; i > 0; i--) {
            wheels.push({ display: i + '', value: i + '' });
        }
        if (!wheels.length) {
            wheels.push({ display: '1', value: '1' });
        }
        this.modalService
            .openPickerModal({ wheels, selected: [this.roomOption.personCount] }, { cancelBtnText: 'GENERAL.remove', title: 'PICKER.SELECT_ROOM' })
            .then((modal) => {
            var _a, _b;
            if ((_a = modal.data) === null || _a === void 0 ? void 0 : _a.selected) {
                this.roomOption.personCount = parseInt(modal.data.selected[0], 10);
                this.roomCountChanged.emit();
                this.getRoomPrice.emit({ price: this.roomPrice.listPrice, id: this.roomOption.id });
            }
            if ((_b = modal.data) === null || _b === void 0 ? void 0 : _b.cancel) {
                this.roomOption.personCount = 0;
                this.roomCountChanged.emit();
                this.getRoomPrice.emit({ price: this.roomPrice.listPrice, id: this.roomOption.id });
            }
        });
    }
    updateMaxValue() {
        this.maxValue = Math.min(this.maxRoomSelectionNumber, this.roomOption.roomsLeft);
    }
}
MobAccommodationSelectOptionButtonComponent.ɵfac = function MobAccommodationSelectOptionButtonComponent_Factory(t) { return new (t || MobAccommodationSelectOptionButtonComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
MobAccommodationSelectOptionButtonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MobAccommodationSelectOptionButtonComponent, selectors: [["tz-mob-accommodation-select-option-button"]], inputs: { roomOption: "roomOption", roomPrice: "roomPrice", stayNumber: "stayNumber", isUserLogged: "isUserLogged", maxRoomSelectionNumber: "maxRoomSelectionNumber" }, outputs: { roomCountChanged: "roomCountChanged", getRoomPrice: "getRoomPrice" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 10, consts: [["data-mob", "room-option-on-select-room", 1, "tz-mob-select-btn", "room-offer-select-button", 3, "ngClass", "click"], [4, "ngIf"], ["class", "room-offer-select-btn__icon", "icon", "arrow-down-white", 4, "ngIf"], ["icon", "arrow-down-white", 1, "room-offer-select-btn__icon"]], template: function MobAccommodationSelectOptionButtonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobAccommodationSelectOptionButtonComponent_Template_button_click_0_listener() { return ctx.selectRoomOffer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, MobAccommodationSelectOptionButtonComponent_span_4_Template, 2, 1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, MobAccommodationSelectOptionButtonComponent_tz_icon_5_Template, 1, 0, "tz-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](8, _c0, ctx.roomOption.personCount));
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", ctx.roomOption.personCount > 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](2, 4, "GENERAL.SELECTED") : _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](3, 6, "GENERAL.SELECT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.roomOption.personCount);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.roomOption.roomsLeft > 1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_2__.TzIconComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n\n.room-offer-select-button[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 2.5rem;\n  width: 100%;\n  background: transparent;\n  font-weight: 500;\n  font-size: 0.875rem;\n  border: 0.0625rem solid var(--color-gray-light);\n  border-radius: 0.25rem;\n  color: var(--color-grey-light-mobile);\n}\n\n.room-selected[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.25rem;\n  background: var(--color-yellow-selected);\n  color: var(--color-main-text-mobile);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1hY2NvbW1vZGF0aW9uLXNlbGVjdC1vcHRpb24tYnV0dG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0NBQUE7QUFDSiIsImZpbGUiOiJtb2ItYWNjb21tb2RhdGlvbi1zZWxlY3Qtb3B0aW9uLWJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnJvb20tb2ZmZXItc2VsZWN0LWJ1dHRvbiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LWxpZ2h0LW1vYmlsZSk7XG59XG5cbi5yb29tLXNlbGVjdGVkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci15ZWxsb3ctc2VsZWN0ZWQpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRleHQtbW9iaWxlKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 51835:
/*!****************************************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodations/components/mob-accommodation-selected-room-offer/mob-accommodation-selected-room-offer.component.ts ***!
  \****************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobAccommodationSelectedRoomOfferComponent": () => (/* binding */ MobAccommodationSelectedRoomOfferComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/pipes/tz-date.pipe */ 92456);




function MobAccommodationSelectedRoomOfferComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 6)(1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("room-option--description-item-green-color", ctx_r0.roomOption.mealTypeCode !== "nomeal" && ctx_r0.roomOption.mealTypeCode !== "RO");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.roomOption.meal, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.roomOption.bedSize);
} }
const _c0 = function (a0) { return { date: a0 }; };
class MobAccommodationSelectedRoomOfferComponent {
}
MobAccommodationSelectedRoomOfferComponent.ɵfac = function MobAccommodationSelectedRoomOfferComponent_Factory(t) { return new (t || MobAccommodationSelectedRoomOfferComponent)(); };
MobAccommodationSelectedRoomOfferComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MobAccommodationSelectedRoomOfferComponent, selectors: [["tz-mob-accommodation-selected-room-offer"]], inputs: { roomOption: "roomOption" }, decls: 12, vars: 16, consts: [[1, "room-offer-wrapper"], ["class", "room-option flex", 4, "ngIf"], [1, "room-offer-wrapper__free-cancelation"], ["data-mob", "room-offer-wrapper-cancelation-policy", 1, "room-offer-wrapper__T-C", "tz-purple-link"], [1, "price-container"], [1, "price-container__left-rooms"], [1, "room-option", "flex"], [1, "room-option__description-item"]], template: function MobAccommodationSelectedRoomOfferComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, MobAccommodationSelectedRoomOfferComponent_div_1_Template, 7, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](5, "tzDate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 4)(10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roomOption.capacity <= 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("room-offer-wrapper__free-cancelation-bgcolor", ctx.roomOption.roomCancellation.cancellationPolicy === "Refundable");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](4, 6, ctx.roomOption.roomCancellation.messageKey, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](5, 9, ctx.roomOption.roomCancellation.endDateTime, "mediumDate"))), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](8, 12, "HOTELS.TERMS_CONDITIONS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Only ", ctx.roomOption.roomsLeft, " rooms left");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_0__.TzDatePipe], styles: [".room-offer-wrapper[_ngcontent-%COMP%] {\n  padding: 1rem 1rem 0.625rem;\n}\n.room-offer-wrapper[_ngcontent-%COMP%]   .room-option__description-item[_ngcontent-%COMP%] {\n  margin: 0 0.25rem 0.5rem;\n  font-weight: 400;\n  font-size: 0.875rem;\n  text-transform: capitalize;\n  color: var(--color-text-mobile);\n}\n.room-offer-wrapper[_ngcontent-%COMP%]   .room-option--description-item-green-color[_ngcontent-%COMP%] {\n  color: var(--ion-color-success-shade);\n}\n.room-offer-wrapper__free-cancelation[_ngcontent-%COMP%] {\n  margin: 0.625rem 0;\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 0.875rem;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n.room-offer-wrapper__free-cancelation-bgcolor[_ngcontent-%COMP%] {\n  background: var(--color-green-mobile);\n  color: var(--color-primary-white);\n  padding: 0 0.1875rem;\n  line-height: 1rem;\n}\n.room-offer-wrapper__T-C[_ngcontent-%COMP%] {\n  margin: 0.625rem 0;\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 0.875rem;\n  color: var(--ion-color-primary);\n  text-decoration: none;\n  cursor: pointer;\n}\n.price-container[_ngcontent-%COMP%] {\n  text-align: right;\n  background: var(--color-main-blue-light);\n  padding: 0.4375rem 1rem;\n}\n.price-container__left-rooms[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.6875rem;\n  line-height: 0.8125rem;\n  color: var(--color-red-mobile);\n}\n.price-container__price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.125rem;\n  line-height: 1.3125rem;\n  color: var(--ion-color-primary);\n}\n.price-container__per-room-info[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 0.6875rem;\n  font-style: italic;\n  line-height: 0.8125rem;\n  color: var(--color-grey-mobile);\n}\n.room-offer-select-btn[_ngcontent-%COMP%] {\n  margin: 0.5rem 1rem;\n  height: 2.5rem;\n  width: calc(100% - 2rem);\n  background: transparent;\n  border: 0.0625rem solid var(--color-gray-light);\n  border-radius: 0.25rem;\n  color: var(--color-grey-light-mobile);\n}\n.room-selected[_ngcontent-%COMP%] {\n  border: none;\n  border-radius: 0.25rem;\n  background: var(--color-yellow-selected);\n  color: var(--color-main-text-mobile);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1hY2NvbW1vZGF0aW9uLXNlbGVjdGVkLXJvb20tb2ZmZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQkFBQTtBQUNKO0FBRVE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQkFBQTtFQUNBLCtCQUFBO0FBQVo7QUFHUTtFQUNJLHFDQUFBO0FBRFo7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQUhSO0FBTUk7RUFDSSxxQ0FBQTtFQUNBLGlDQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQkFBQTtBQUpSO0FBT0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FBTFI7QUFTQTtFQUNJLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSx1QkFBQTtBQU5KO0FBUUk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtBQU5SO0FBU0k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtBQVBSO0FBVUk7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FBUlI7QUFZQTtFQUNJLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLHdCQUFBO0VBQ0EsdUJBQUE7RUFDQSwrQ0FBQTtFQUNBLHNCQUFBO0VBQ0EscUNBQUE7QUFUSjtBQVlBO0VBQ0ksWUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSxvQ0FBQTtBQVRKIiwiZmlsZSI6Im1vYi1hY2NvbW1vZGF0aW9uLXNlbGVjdGVkLXJvb20tb2ZmZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucm9vbS1vZmZlci13cmFwcGVyIHtcbiAgICBwYWRkaW5nOiAxcmVtIDFyZW0gMC42MjVyZW07XG5cbiAgICAucm9vbS1vcHRpb24ge1xuICAgICAgICAmX19kZXNjcmlwdGlvbi1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbjogMCAwLjI1cmVtIDAuNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi0tZGVzY3JpcHRpb24taXRlbS1ncmVlbi1jb2xvciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXN1Y2Nlc3Mtc2hhZGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZnJlZS1jYW5jZWxhdGlvbiB7XG4gICAgICAgIG1hcmdpbjogMC42MjVyZW0gMDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMC44NzVyZW07XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICB9XG5cbiAgICAmX19mcmVlLWNhbmNlbGF0aW9uLWJnY29sb3Ige1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1ncmVlbi1tb2JpbGUpO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgIHBhZGRpbmc6IDAgMC4xODc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICB9XG5cbiAgICAmX19ULUMge1xuICAgICAgICBtYXJnaW46IDAuNjI1cmVtIDA7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuODc1cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG59XG5cbi5wcmljZS1jb250YWluZXIge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1haW4tYmx1ZS1saWdodCk7XG4gICAgcGFkZGluZzogMC40Mzc1cmVtIDFyZW07XG5cbiAgICAmX19sZWZ0LXJvb21zIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjgxMjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1yZWQtbW9iaWxlKTtcbiAgICB9XG5cbiAgICAmX19wcmljZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjMxMjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxuXG4gICAgJl9fcGVyLXJvb20taW5mbyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjgxMjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LW1vYmlsZSk7XG4gICAgfVxufVxuXG4ucm9vbS1vZmZlci1zZWxlY3QtYnRuIHtcbiAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAycmVtKTtcbiAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LWxpZ2h0LW1vYmlsZSk7XG59XG5cbi5yb29tLXNlbGVjdGVkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci15ZWxsb3ctc2VsZWN0ZWQpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRleHQtbW9iaWxlKTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 95836:
/*!******************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodations/components/mob-accommodation-skeleton/mob-accommodation-skeleton.component.ts ***!
  \******************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobAccommodationSkeletonComponent": () => (/* binding */ MobAccommodationSkeletonComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-skeleton-loader */ 91391);



const _c0 = function () { return { height: "100%", width: "100%" }; };
function MobAccommodationSkeletonComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "ngx-skeleton-loader", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "ngx-skeleton-loader", 4)(5, "ngx-skeleton-loader", 4)(6, "ngx-skeleton-loader", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](6, _c0));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("theme", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](7, _c0));
} }
class MobAccommodationSkeletonComponent {
    constructor() {
        this.items = new Array(20);
    }
    ngOnInit() { }
}
MobAccommodationSkeletonComponent.ɵfac = function MobAccommodationSkeletonComponent_Factory(t) { return new (t || MobAccommodationSkeletonComponent)(); };
MobAccommodationSkeletonComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobAccommodationSkeletonComponent, selectors: [["tz-mob-accommodation-skeleton"]], decls: 2, vars: 1, consts: [[1, "tz-skeleton-loader"], ["class", "tz-skeleton-block", 4, "ngFor", "ngForOf"], [1, "tz-skeleton-block"], [1, "acc-img"], [3, "theme"], [1, "acc-skeleton-option"], [1, "small", 3, "theme"]], template: function MobAccommodationSkeletonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobAccommodationSkeletonComponent_div_1_Template, 7, 8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.items);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_2__.NgxSkeletonLoaderComponent], styles: [".tz-skeleton-block[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  background: var(--ion-color-primary-contrast);\n}\n\n.tz-skeleton-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.tz-skeleton-block[_ngcontent-%COMP%]   .acc-img[_ngcontent-%COMP%] {\n  width: 7.5rem;\n  height: 13.75rem;\n}\n\n.tz-skeleton-block[_ngcontent-%COMP%]   .acc-img[_ngcontent-%COMP%]   ngx-skeleton-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.tz-skeleton-block[_ngcontent-%COMP%]   .acc-skeleton-option[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: end;\n  width: calc(100% - 7.5rem);\n  padding: 0.938rem 1.563rem 0 5.25rem;\n}\n\n.tz-skeleton-block[_ngcontent-%COMP%]   .acc-skeleton-option[_ngcontent-%COMP%]   ngx-skeleton-loader[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 0.918rem;\n}\n\n.tz-skeleton-block[_ngcontent-%COMP%]   .acc-skeleton-option[_ngcontent-%COMP%]   .small[_ngcontent-%COMP%] {\n  width: 50%;\n}\n\n.tz-skeleton-block[_ngcontent-%COMP%]   .acc-skeleton-option[_ngcontent-%COMP%]   ngx-skeleton-loader[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1hY2NvbW1vZGF0aW9uLXNrZWxldG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSw2Q0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7QUFDUjs7QUFDUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FBQ1o7O0FBR0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLDBCQUFBO0VBQ0Esb0NBQUE7QUFEUjs7QUFHUTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtBQURaOztBQUlRO0VBQ0ksVUFBQTtBQUZaOztBQUtRO0VBQ0ksa0JBQUE7QUFIWiIsImZpbGUiOiJtb2ItYWNjb21tb2RhdGlvbi1za2VsZXRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ei1za2VsZXRvbi1ibG9jayB7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbn1cblxuLnR6LXNrZWxldG9uLWJsb2NrIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuICAgIC5hY2MtaW1nIHtcbiAgICAgICAgd2lkdGg6IDcuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAxMy43NXJlbTtcblxuICAgICAgICBuZ3gtc2tlbGV0b24tbG9hZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmFjYy1za2VsZXRvbi1vcHRpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNy41cmVtKTtcbiAgICAgICAgcGFkZGluZzogMC45MzhyZW0gMS41NjNyZW0gMCA1LjI1cmVtO1xuXG4gICAgICAgIG5neC1za2VsZXRvbi1sb2FkZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDAuOTE4cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNtYWxsIHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICBuZ3gtc2tlbGV0b24tbG9hZGVyOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 35106:
/*!**************************************************************************************************************************!*\
  !*** ./src/app/modules/results/accommodations/components/mob-confirm-button-block/mob-confirm-button-block.component.ts ***!
  \**************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobConfirmButtonBlockComponent": () => (/* binding */ MobConfirmButtonBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/pipes/tz-currency.pipe */ 98967);





function MobConfirmButtonBlockComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0|\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "GENERAL.TOTAL_PRICE_FOR"), " ", ctx_r0.roomsQuantity, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, "HOTELS." + (ctx_r0.roomsQuantity > 1 ? "rOOMS" : "rOOM")), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, "TRAIN.ALL_TAXES"), " ");
} }
class MobConfirmButtonBlockComponent {
    constructor() {
        this.confirm = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    onBooking() {
        this.confirm.emit();
    }
}
MobConfirmButtonBlockComponent.ɵfac = function MobConfirmButtonBlockComponent_Factory(t) { return new (t || MobConfirmButtonBlockComponent)(); };
MobConfirmButtonBlockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MobConfirmButtonBlockComponent, selectors: [["tz-mob-confirm-button-block"]], inputs: { totalPrice: "totalPrice", priceCurrency: "priceCurrency", roomsQuantity: "roomsQuantity" }, outputs: { confirm: "confirm" }, decls: 14, vars: 11, consts: [[1, "mob-book-block", "tz-fixed-bottom"], [1, "mob-book-block__info-block"], [1, "mob-book-block__info-block-text"], [1, "mob-book-block__summary"], [1, "mob-book-block__price"], ["class", "mob-book-block__description", 4, "ngIf"], [1, "mob-book-block__book-btn-block"], ["data-test", "confirm-btn", 1, "tz-mob-btn", "tz-mob-btn--tertiary", 3, "click"], [1, "mob-book-block__description"], [1, "text-vertical-divider"]], template: function MobConfirmButtonBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "tzCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MobConfirmButtonBlockComponent_p_9_Template, 8, 10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobConfirmButtonBlockComponent_Template_button_click_11_listener() { return ctx.onBooking(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "GENERAL.TOTAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 6, ctx.totalPrice, ctx.priceCurrency));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.roomsQuantity);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "GENERAL.CONFIRM"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_0__.TzCurrencyPipe], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.mob-book-block[_ngcontent-%COMP%] {\n  border-top: 0.0625rem solid var(--color-border-mobile);\n  background-color: var(--ion-color-primary-contrast);\n  padding: 0.5rem 1rem;\n  margin-top: 0.5rem;\n}\n\n.mob-book-block__info-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.mob-book-block__info-block-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 150%;\n  color: var(--color-text-mobile);\n  margin-bottom: 0.25rem;\n}\n\n.mob-book-block__summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: flex-start;\n  gap: 0.28125rem;\n}\n\n.mob-book-block__price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  color: var(--ion-color-primary);\n}\n\n.mob-book-block__description[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 300;\n  font-size: 0.6875rem;\n  line-height: 0.8125rem;\n  color: var(--color-grey-mobile);\n}\n\n.mob-book-block__description[_ngcontent-%COMP%]   .text-vertical-divider[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n\n.mob-book-block__book-btn-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 0.71875rem;\n}\n\n.mob-book-block[_ngcontent-%COMP%]   .tz-mob-btn[_ngcontent-%COMP%] {\n  background-color: var(--color-main-purple);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1jb25maXJtLWJ1dHRvbi1ibG9jay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFDSjs7QUFFQTtFQUNJLHNEQUFBO0VBQ0EsbURBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx1QkFBQTtBQUNSOztBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtBQUFSOztBQUdJO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7QUFEUjs7QUFJSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0FBRlI7O0FBS0k7RUFDSSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FBSFI7O0FBS1E7RUFDSSxnQkFBQTtBQUhaOztBQU9JO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7QUFMUjs7QUFRSTtFQUNJLDBDQUFBO0FBTlIiLCJmaWxlIjoibW9iLWNvbmZpcm0tYnV0dG9uLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1vYi1ib29rLWJsb2NrIHtcbiAgICBib3JkZXItdG9wOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLW1vYmlsZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcblxuICAgICZfX2luZm8tYmxvY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgICZfX2luZm8tYmxvY2stdGV4dCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIH1cblxuICAgICZfX3N1bW1hcnkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgZ2FwOiAwLjI4MTI1cmVtO1xuICAgIH1cblxuICAgICZfX3ByaWNlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuODEyNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXktbW9iaWxlKTtcblxuICAgICAgICAmIC50ZXh0LXZlcnRpY2FsLWRpdmlkZXIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2Jvb2stYnRuLWJsb2NrIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNzE4NzVyZW07XG4gICAgfVxuXG4gICAgLnR6LW1vYi1idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgfVxufVxuIl19 */"] });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_results_accommodations_accommodations_module_ts.js.map