"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_results_transport_flights_flights_module_ts"],{

/***/ 74682:
/*!*****************************************************************************************************************************************!*\
  !*** ./src/app/modules/results/transport/flights/components/flight-list-result-information/flight-list-result-information.component.ts ***!
  \*****************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightListResultInformationComponent": () => (/* binding */ FlightListResultInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/cart/utils/cart.utils */ 14770);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_modules_transport_flights_flights_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/transport/flights/flights.service */ 49901);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/block-separator/block-separator.component */ 183);
/* harmony import */ var _flight_list_item_flight_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../flight-list-item/flight-list-item.component */ 44460);








function FlightListResultInformationComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.selectedFlightSummary);
} }
function FlightListResultInformationComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4)(1, "tz-flight-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("selectedOnwardFlight", function FlightListResultInformationComponent_div_1_Template_tz_flight_list_item_selectedOnwardFlight_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r3.onOnwardFlightChanged(); })("selectedReturnFlight", function FlightListResultInformationComponent_div_1_Template_tz_flight_list_item_selectedReturnFlight_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.onReturnFlightChanged(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("returnSelected", true)("onWardSelected", true)("twoWayFlight", ctx_r1.twoWayFlight)("flight", ctx_r1.selectedFlight);
} }
const _c0 = function (a0) { return { resultsCount: a0, tripType: "" }; };
function FlightListResultInformationComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "tz-block-separator")(2, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 2, ctx_r2.twoWayFlight ? "FLIGHT.ROUND_TRIP" : "FLIGHT.ONE_WAY"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](5, 4, ctx_r2.count - ctx_r2.selectedFlightsCount > 1 ? "GENERAL.OPTIONS_FOUND" : "GENERAL.OPTION_FOUND", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](7, _c0, ctx_r2.count - ctx_r2.selectedFlightsCount)), " ");
} }
class FlightListResultInformationComponent {
    //public isRoundTrip: boolean = false;
    constructor(translateService, flightService) {
        this.translateService = translateService;
        this.flightService = flightService;
        this.selectedFlight = null;
        this.count = 0;
        this.twoWayFlight = false;
        this.isPreSelected = false;
        this.preSelectedFlight = null;
        this.cancelSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.selectedOnwardFlight = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.selectedReturnFlight = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.selectedFlightSummary = null;
        this.selectedFlightsCount = 0;
    }
    ngOnInit() {
        //  this.isRoundTrip = this.selectedFlight ? this.selectedFlight.isRoundTrip:false;
        this.updateSelectedFlightsCount();
    }
    ngOnChanges(changes) {
        this.updateSelectedFlightsCount();
        if (changes['selectedFlight'] && changes['selectedFlight'].currentValue) {
            this.buildSummary(changes['selectedFlight'].currentValue);
        }
        if (changes['isPreSelected'] && changes['isPreSelected'].currentValue) {
            this.buildSummary(this.preSelectedFlight);
        }
    }
    onOnwardFlightChanged() {
        this.selectedOnwardFlight.emit();
    }
    onReturnFlightChanged() {
        this.selectedReturnFlight.emit();
    }
    onCancelSelection() {
        this.cancelSelection.emit();
    }
    buildSummary(flight) {
        if (flight) {
            this.selectedFlightSummary = _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_0__.CartUtils.buildFlightTitleSummary(flight, this.translateService, false);
            /*const departureCity = flight.departureSummary.originCity;
            const arrivalCity = flight.departureSummary.destinationCity;
            const destinations = [departureCity, arrivalCity];
            const returnCity = flight.returnSummary.destinationCity;
            if (returnCity) {
                destinations.push(returnCity);
            }
            //    this.isRoundTrip = true;
            this.selectedFlightSummary = destinations.join(' - ');*/
        }
        else {
            this.selectedFlightSummary = '';
        }
    }
    updateSelectedFlightsCount() {
        var _a;
        this.selectedFlightsCount = (_a = this.flightService.getSelectedFLightsFromCart()) === null || _a === void 0 ? void 0 : _a.items.length;
    }
}
FlightListResultInformationComponent.ɵfac = function FlightListResultInformationComponent_Factory(t) { return new (t || FlightListResultInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modules_transport_flights_flights_service__WEBPACK_IMPORTED_MODULE_1__.FlightsService)); };
FlightListResultInformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: FlightListResultInformationComponent, selectors: [["tz-flight-list-result-information"]], inputs: { selectedFlight: "selectedFlight", count: "count", twoWayFlight: "twoWayFlight", isPreSelected: "isPreSelected", preSelectedFlight: "preSelectedFlight" }, outputs: { cancelSelection: "cancelSelection", selectedOnwardFlight: "selectedOnwardFlight", selectedReturnFlight: "selectedReturnFlight" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 3, vars: 3, consts: [["class", "tz-block-separator-title", 4, "ngIf"], ["class", "flight-list-item", 4, "ngIf"], ["class", "tz-block-separator-title no-bottom-margin", 4, "ngIf"], [1, "tz-block-separator-title"], [1, "flight-list-item"], [3, "returnSelected", "onWardSelected", "twoWayFlight", "flight", "selectedOnwardFlight", "selectedReturnFlight"], [1, "tz-block-separator-title", "no-bottom-margin"], [1, "flight-separator__text"]], template: function FlightListResultInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, FlightListResultInformationComponent_div_0_Template, 3, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, FlightListResultInformationComponent_div_1_Template, 2, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, FlightListResultInformationComponent_div_2_Template, 6, 9, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedFlight || ctx.isPreSelected);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.selectedFlight);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.selectedFlight && ctx.count && !ctx.isPreSelected);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_2__.BlockSeparatorComponent, _flight_list_item_flight_list_item_component__WEBPACK_IMPORTED_MODULE_3__.FlightListItemComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["[_nghost-%COMP%]   .results-title[_ngcontent-%COMP%] {\n  padding-bottom: 0.625rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .tz-block-separator-title[_ngcontent-%COMP%] {\n    margin: 0.5rem 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWdodC1saXN0LXJlc3VsdC1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdFO0VBQ0Usd0JBQUE7QUFGSjtBQ2tESTtFRDdDSTtJQUNJLGdCQUFBO0VBRlY7QUFDRiIsImZpbGUiOiJmbGlnaHQtbGlzdC1yZXN1bHQtaW5mb3JtYXRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidXRpbHMvbWl4aW5zXCI7XG5cbjpob3N0IHtcbiAgLnJlc3VsdHMtdGl0bGUge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjYyNXJlbTtcbiAgfVxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICYgLnR6LWJsb2NrLXNlcGFyYXRvci10aXRsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 9976:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/results/transport/flights/components/flights-list/flights-list.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightsListComponent": () => (/* binding */ FlightsListComponent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_trazler_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_components_paginate_component_ts_service_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/components/paginate.component.ts/service.list.component */ 32553);
/* harmony import */ var _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/tools-service */ 67457);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _flight_list_result_information_flight_list_result_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../flight-list-result-information/flight-list-result-information.component */ 74682);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-infinite-scroll */ 34229);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-virtual-scroller */ 56443);
/* harmony import */ var _mob_flight_list_item_mob_flight_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mob-flight-list-item/mob-flight-list-item.component */ 90917);
/* harmony import */ var _flight_list_item_flight_list_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../flight-list-item/flight-list-item.component */ 44460);
/* harmony import */ var _flight_list_item_description_flight_list_item_description_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../flight-list-item-description/flight-list-item-description.component */ 50390);
/* harmony import */ var _flight_item_desc_packages_flight_item_desc_packages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../flight-item-desc-packages/flight-item-desc-packages.component */ 21787);
/* harmony import */ var _shared_components_service_booking_confirmation_component_service_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/service-booking-confirmation-component/service-booking-confirmation.component */ 70832);
















const _c0 = ["flightsScroller"];
const _c1 = ["flightsListContainer"];

function FlightsListComponent_div_3_div_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 18);
  }
}

function FlightsListComponent_div_3_div_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FlightsListComponent_div_3_div_6_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r16);
      const flight_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r14.onShowFlightDetails(flight_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "tz-mob-flight-list-item", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const flight_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("packages", ctx_r9.cachedFlights[ctx_r9.selectedId ? ctx_r9.selectedId : ctx_r9.openedId])("flight", flight_r5)("totalPassengers", ctx_r9.totalPassengers);
  }
}

function FlightsListComponent_div_3_div_6_ion_accordion_5_tz_flight_list_item_description_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tz-flight-list-item-description", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("openTerms", function FlightsListComponent_div_3_div_6_ion_accordion_5_tz_flight_list_item_description_4_Template_tz_flight_list_item_description_openTerms_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const flight_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r19.openTerms.emit(flight_r5);
    })("openCheckinAllowanceInfo", function FlightsListComponent_div_3_div_6_ion_accordion_5_tz_flight_list_item_description_4_Template_tz_flight_list_item_description_openCheckinAllowanceInfo_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r21);
      const flight_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r22.openCheckinAllowanceInfo.emit(flight_r5.checkinAllowance);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const flight_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("flight", ctx_r18.openedId && ctx_r18.selectedPackageIndex !== null && ctx_r18.cachedFlights[ctx_r18.openedId] && ctx_r18.cachedFlights[ctx_r18.openedId][ctx_r18.selectedPackageIndex] ? ctx_r18.cachedFlights[ctx_r18.openedId][ctx_r18.selectedPackageIndex] : flight_r5);
  }
}

const _c2 = function (a0) {
  return {
    "not-complete": a0
  };
};

function FlightsListComponent_div_3_div_6_ion_accordion_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "ion-accordion", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("click", function FlightsListComponent_div_3_div_6_ion_accordion_5_Template_ion_accordion_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      const flight_r5 = ctx_r26.$implicit;
      const i_r6 = ctx_r26.index;
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r25.onToggleFlightItem(flight_r5, i_r6);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](1, "ion-item", 22)(2, "tz-flight-list-item", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("selectedOnwardFlight", function FlightsListComponent_div_3_div_6_ion_accordion_5_Template_tz_flight_list_item_selectedOnwardFlight_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r27);
      const flight_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r28.onOnwardFlightChanged($event, flight_r5.id);
    })("selectedReturnFlight", function FlightsListComponent_div_3_div_6_ion_accordion_5_Template_tz_flight_list_item_selectedReturnFlight_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r27);
      const flight_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r30.onReturnFlightChanged($event, flight_r5.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](3, "ion-item", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, FlightsListComponent_div_3_div_6_ion_accordion_5_tz_flight_list_item_description_4_Template, 1, 1, "tz-flight-list-item-description", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const flight_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassProp"]("flight-list-item--is-open", flight_r5.id === ctx_r10.openedId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpureFunction1"](10, _c2, ctx_r10.notComplete))("value", flight_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("flight", ctx_r10.selectedPackageIndex !== null && ctx_r10.cachedFlights[flight_r5.id] && ctx_r10.cachedFlights[flight_r5.id][ctx_r10.selectedPackageIndex] ? ctx_r10.cachedFlights[flight_r5.id][ctx_r10.selectedPackageIndex] : flight_r5)("twoWayFlight", ctx_r10.twoWayFlight)("onWardSelected", !!ctx_r10.selectedOnWardId)("returnSelected", !!ctx_r10.selectedReturnId)("totalPassengers", ctx_r10.totalPassengers);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", flight_r5.id === ctx_r10.openedId);
  }
}

function FlightsListComponent_div_3_div_6_tz_flight_item_desc_packages_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tz-flight-item-desc-packages", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("changeSelectedPackageIndex", function FlightsListComponent_div_3_div_6_tz_flight_item_desc_packages_7_Template_tz_flight_item_desc_packages_changeSelectedPackageIndex_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r35);
      const flight_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r33.onSelectPackage($event, flight_r5.id);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("packages", ctx_r11.cachedFlights[ctx_r11.selectedId ? ctx_r11.selectedId : ctx_r11.openedId])("selectedPackageIndex", ctx_r11.selectedPackageIndex)("packageStartIdx", ctx_r11.packageStartIdx);
  }
}

function FlightsListComponent_div_3_div_6_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 28)(1, "tz-service-booking-confirmation", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("cancelSelection", function FlightsListComponent_div_3_div_6_div_9_Template_tz_service_booking_confirmation_cancelSelection_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
      return ctx_r36.onCancelSelection();
    })("submitBooking", function FlightsListComponent_div_3_div_6_div_9_Template_tz_service_booking_confirmation_submitBooking_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r37);
      const flight_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]().$implicit;
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
      return ctx_r38.onSubmitBooking(ctx_r38.cachedFlights[flight_r5.id][0]);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hideCancelBtn", !(ctx_r12.twoWayFlight && ctx_r12.selectedOnWardId && ctx_r12.selectedReturnId || !ctx_r12.twoWayFlight && ctx_r12.selectedOnWardId));
  }
}

function FlightsListComponent_div_3_div_6_div_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "div", 30);
  }
}

function FlightsListComponent_div_3_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](1, FlightsListComponent_div_3_div_6_div_1_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, FlightsListComponent_div_3_div_6_div_3_Template, 2, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, FlightsListComponent_div_3_div_6_ion_accordion_5_Template, 5, 12, "ion-accordion", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](7, FlightsListComponent_div_3_div_6_tz_flight_item_desc_packages_7_Template, 1, 3, "tz-flight-item-desc-packages", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](8, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](9, FlightsListComponent_div_3_div_6_div_9_Template, 2, 1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](10, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](11, FlightsListComponent_div_3_div_6_div_11_Template, 1, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipe"](12, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const flight_r5 = ctx.$implicit;
    const last_r7 = ctx.last;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵclassMap"](ctx_r4.twoWayFlight ? "round-trip" : "one-way");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx_r4.selectedOnWardId && !ctx_r4.selectedReturnId && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](2, 8, ctx_r4.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](4, 10, ctx_r4.platformService.isMobileDevice$));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](6, 12, ctx_r4.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](8, 14, ctx_r4.platformService.isMobileDevice$) === false && ctx_r4.showPackages(flight_r5));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](10, 16, ctx_r4.platformService.isMobileDevice$) === false && ctx_r4.openedId === flight_r5.id && (ctx_r4.cachedFlights[flight_r5.id] == null ? null : ctx_r4.cachedFlights[flight_r5.id].length) === 1 && ctx_r4.isOpenFlightDes && !(ctx_r4.twoWayFlight && ctx_r4.selectedOnWardId && ctx_r4.selectedReturnId || !ctx_r4.twoWayFlight && ctx_r4.selectedOnWardId));
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !last_r7 && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵpipeBind1"](12, 18, ctx_r4.platformService.isMobileDevice$));
  }
}

function FlightsListComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("scrolled", function FlightsListComponent_div_3_Template_div_scrolled_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r41);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r40.onScroll($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](2, "ion-accordion-group", 6, 7)(4, "virtual-scroller", 8, 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("vsChange", function FlightsListComponent_div_3_Template_virtual_scroller_vsChange_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r41);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r42.handleScrollOnContainer();
    })("vsEnd", function FlightsListComponent_div_3_Template_virtual_scroller_vsEnd_4_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r41);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
      return ctx_r43.handleScrollOnContainer();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](6, FlightsListComponent_div_3_div_6_Template, 13, 20, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵreference"](5);

    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("scrollWindow", ctx_r0.infiniteScrollConfig.scrollWindow)("infiniteScrollDistance", ctx_r0.infiniteScrollConfig.infiniteScrollDistance)("infiniteScrollThrottle", ctx_r0.infiniteScrollConfig.infiniteScrollThrottle)("fromRoot", ctx_r0.infiniteScrollConfig.fromRoot)("infiniteScrollContainer", ctx_r0.infiniteScrollConfig.infiniteScrollContainer);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("animated", false)("value", ctx_r0.openedId);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("items", ctx_r0.flights)("parentScroll", ctx_r0.scrollingContainer)("enableUnequalChildrenSizes", true)("useMarginInsteadOfTranslate", true)("resizeBypassRefreshThreshold", 200);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngForOf", _r3.viewPortItems)("ngForTrackBy", ctx_r0.identify);
  }
}

class FlightsListComponent extends _core_components_paginate_component_ts_service_list_component__WEBPACK_IMPORTED_MODULE_1__.ServiceListComponent {
  constructor(renderer, platformService) {
    super();
    this.renderer = renderer;
    this.platformService = platformService;
    this.virtualScroller = undefined;
    this.listContainer = undefined;
    this.flights = [];
    this.twoWayFlight = false;
    this.notComplete = false;
    this.flightListMetadata = {
      count: 0
    };
    this.isListCompleted = false;
    this.cachedFlights = {};
    this.selectedId = '';
    this.scrollElementIndex = 0;
    this.totalPassengers = 0;
    this.flightSelected = false;
    this.nextPage = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.selectedOnwardFlight = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.selectedReturnFlight = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.selectFlight = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.selectPackage = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.toggleFlight = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.cancelSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.submitBooking = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.scrollElementIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.openTerms = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.showFlightDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.openCheckinAllowanceInfo = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
    this.openedId = '';
    this.packageStartIdx = 0;
    this.selectedPackageIndex = null;
    this.currentScrolledListAmount = 0;
  }

  ngOnInit() {
    this.cancelFlights$.subscribe(cancel => {
      this.isOpenFlightDes = false;
      this.openedId = '';
      this.selectedFlight = null;
      this.selectedOnWardId = undefined;
      this.selectedReturnId = undefined;
      this.selectedPackageIndex = null;
      this.checkAndScrollToSelectedIndex();
    });
  }

  ngAfterViewInit() {
    this.setScrollingContainer();
  }

  ngOnChanges(changes) {
    var _a, _b;

    if (changes['flightSelected'] && this.flightSelected) {
      this.renderer.addClass((_a = this.listContainer) === null || _a === void 0 ? void 0 : _a.nativeElement, 'flights-list--selected-flight');
      this.renderer.setStyle((_b = this.listContainer) === null || _b === void 0 ? void 0 : _b.nativeElement, 'height', 'auto');
      this.handleScrollOnContainer();
    }

    if (changes['flights'] && this.flights.length === 1 && !this.flightSelected) {
      this.openedId = '';
      this.onToggleFlightItem(this.flights[0], 0);
    }
  }

  onOnwardFlightChanged(selected, id) {
    this.resetScrollSelectedIndex();
    this.isOpenFlightDes = false;
    this.openedId = '';
    const index = this.flights.findIndex(flight => flight.id === id);

    if (selected) {
      const flight = this.flights[index];

      if (this.twoWayFlight && this.selectedReturnId) {
        this.selectedId = flight.id;
        this.selectedPackageIndex = 0;
        this.emitSelectedFlight(flight);
      } else if (!this.twoWayFlight) {
        this.selectedId = flight.id;
        this.selectedPackageIndex = 0;
        this.toggleFlight.emit(flight);
        this.refreshScroller();
        this.emitSelectedFlight(flight);
      } else {
        this.selectedOnwardFlight.emit(flight.departureSummary.tripID);
      }

      this.selectedOnWardId = flight.departureSummary.tripID;
    } else {
      this.selectedPackageIndex = null;
      this.selectedOnWardId = undefined;
      this.selectedOnwardFlight.emit();
    }
  }

  onReturnFlightChanged(selected, id) {
    this.isOpenFlightDes = false;
    this.openedId = '';
    const index = this.flights.findIndex(flight => flight.id === id);
    this.resetScrollSelectedIndex();

    if (selected) {
      const flight = this.flights[index];

      if (this.twoWayFlight && this.selectedOnWardId) {
        this.selectedId = flight.id;
        this.selectedPackageIndex = 0;
        this.emitSelectedFlight(flight);
      } else {
        this.selectedReturnFlight.emit(flight.returnSummary.tripID);
      }

      this.selectedReturnId = flight.returnSummary.tripID;
    } else {
      this.selectedPackageIndex = null;
      this.selectedReturnId = undefined;
      this.selectedReturnFlight.emit();
    }
  }

  onCancelSelection() {
    this.cancelSelection.emit();
    this.selectedFlight = null;

    if (this.selectedId) {
      this.selectFlight.emit(this.cachedFlights[this.selectedId][0]);
    }

    this.selectedId = '';
    this.openedId = '';
    this.selectedPackageIndex = 0;
    this.packageStartIdx = 0;
  }

  onToggleFlightItem(flight, i) {
    let scrollToElement = false;

    if (this.openedId === flight.id) {
      this.isOpenFlightDes = false;
      this.openedId = '';
      this.resetScrollSelectedIndex();
      this.refreshScroller();
    } else {
      const index = this.flights.findIndex(flightListItem => flightListItem.id === flight.id);
      scrollToElement = true;
      this.isOpenFlightDes = true;
      this.openedId = flight.id;
      this.packageStartIdx = 0;
      this.scrollElementIndexChange.emit(index);
    }

    if (this.isOpenFlightDes) {
      this.selectedId = (this.twoWayFlight && this.selectedReturnId || !this.twoWayFlight) && this.selectedOnWardId ? flight.id : this.selectedId === flight.id ? '' : flight.id;
      this.toggleFlight.emit(flight);
      this.refreshScroller();
    } //reset back user to top position of expanded item


    setTimeout(() => {
      var _a;

      if (scrollToElement) {
        const offset = i === 0 ? -80 : -60;
        (_a = this.virtualScroller) === null || _a === void 0 ? void 0 : _a.scrollInto(flight, true, offset, 100);
      }
    }, 500);
  }

  showPackages(flight) {
    return !!(this.cachedFlights[this.selectedId ? this.selectedId : this.openedId] && this.cachedFlights[this.selectedId ? this.selectedId : this.openedId].length > 1 && (this.openedId === flight.id || this.selectedOnWardId && this.selectedReturnId || !this.twoWayFlight && this.selectedOnWardId));
  }

  onSelectPackage(packgeDetail, flightId) {
    this.selectedPackageIndex = packgeDetail.pkgIndex;
    this.packageStartIdx = packgeDetail.packageStartIdx;
    const flight = this.cachedFlights[flightId][this.selectedPackageIndex];
    this.selectedOnWardId = flight.departureSummary.tripID;
    this.selectedReturnId = flight.returnSummary.tripID;

    if (this.isOpenFlightDes) {
      this.openedId = flight.id;
    }

    this.selectPackage.emit({
      package: flight,
      flightId
    });
  }

  onSubmitBooking(flight) {
    this.submitBooking.emit(flight);
  }

  onScroll($event) {
    if (!this.isListCompleted) {
      this.nextPage.emit();
    }
  }

  identify(index, item) {
    return item.id;
  }

  handleScrollOnContainer(double = true, event) {
    requestAnimationFrame(() => {
      var _a, _b, _c, _d;

      if (this.virtualScroller) {
        let height = 0;
        const paddingElement = document.querySelector('.total-padding');

        if (paddingElement) {
          height = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.getTransFormTranslateOfElement(paddingElement);
        }

        if (height === this.currentScrolledListAmount || Math.abs(height - this.currentScrolledListAmount) < 30) {
          return;
        } else {
          this.currentScrolledListAmount = height;
        }

        if (this.flights.length === 1) {
          this.renderer.addClass((_a = this.listContainer) === null || _a === void 0 ? void 0 : _a.nativeElement, 'flights-list--selected-flight');
          this.renderer.setStyle((_b = this.listContainer) === null || _b === void 0 ? void 0 : _b.nativeElement, 'height', 'auto');
        } else {
          this.renderer.removeClass((_c = this.listContainer) === null || _c === void 0 ? void 0 : _c.nativeElement, 'flights-list--selected-flight');
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
    this.scrollingContainer = element ? element : window;
  }

  onShowFlightDetails(flight) {
    var _this = this;

    return (0,_opt_atlassian_pipelines_agent_build_trazler_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.showFlightDetails.emit(flight);
    })();
  }

  emitSelectedFlight(flight) {
    this.selectFlight.emit(flight);
  }

  refreshScroller() {
    if (this.virtualScroller) {
      this.virtualScroller.refresh();
    }
  }

  resetScrollSelectedIndex() {
    this.scrollElementIndexChange.emit(0);
  }

  checkAndScrollToSelectedIndex() {
    if (this.scrollElementIndex) {
      requestAnimationFrame(() => {
        var _a;

        (_a = this.virtualScroller) === null || _a === void 0 ? void 0 : _a.scrollToIndex(this.scrollElementIndex, true, -60, 0);
      });
    }
  }

}

FlightsListComponent.ɵfac = function FlightsListComponent_Factory(t) {
  return new (t || FlightsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_11__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_3__.PlatformService));
};

FlightsListComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({
  type: FlightsListComponent,
  selectors: [["tz-flights-list"]],
  viewQuery: function FlightsListComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵviewQuery"](_c1, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.virtualScroller = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵloadQuery"]()) && (ctx.listContainer = _t.first);
    }
  },
  inputs: {
    flights: "flights",
    isMobile$: "isMobile$",
    twoWayFlight: "twoWayFlight",
    notComplete: "notComplete",
    cancelFlights$: "cancelFlights$",
    flightListMetadata: "flightListMetadata",
    isListCompleted: "isListCompleted",
    cachedFlights: "cachedFlights",
    selectedOnWardId: "selectedOnWardId",
    selectedReturnId: "selectedReturnId",
    selectedId: "selectedId",
    scrollElementIndex: "scrollElementIndex",
    totalPassengers: "totalPassengers",
    flightSelected: "flightSelected"
  },
  outputs: {
    nextPage: "nextPage",
    selectedOnwardFlight: "selectedOnwardFlight",
    selectedReturnFlight: "selectedReturnFlight",
    selectFlight: "selectFlight",
    selectPackage: "selectPackage",
    toggleFlight: "toggleFlight",
    cancelSelection: "cancelSelection",
    submitBooking: "submitBooking",
    scrollElementIndexChange: "scrollElementIndexChange",
    openTerms: "openTerms",
    showFlightDetails: "showFlightDetails",
    openCheckinAllowanceInfo: "openCheckinAllowanceInfo"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]],
  decls: 4,
  vars: 5,
  consts: [["data-test", "result-page-flights-bar", 1, "flights"], [1, "flights-result-information-container"], [3, "count", "twoWayFlight", "preSelectedFlight", "isPreSelected"], ["class", "flights-list", "infiniteScroll", "", 3, "scrollWindow", "infiniteScrollDistance", "infiniteScrollThrottle", "fromRoot", "infiniteScrollContainer", "scrolled", 4, "ngIf"], ["infiniteScroll", "", 1, "flights-list", 3, "scrollWindow", "infiniteScrollDistance", "infiniteScrollThrottle", "fromRoot", "infiniteScrollContainer", "scrolled"], ["flightsListContainer", ""], ["toggle-icon", "''", 3, "animated", "value"], ["flightsVirtualScroller", ""], [3, "items", "parentScroll", "enableUnequalChildrenSizes", "useMarginInsteadOfTranslate", "resizeBypassRefreshThreshold", "vsChange", "vsEnd"], ["flightsScroller", ""], ["class", "flight-list-item", 3, "class", 4, "ngFor", "ngForOf", "ngForTrackBy"], [1, "flight-list-item"], ["class", "recommended-block", 4, "ngIf"], [3, "click", 4, "ngIf"], ["class", "tz-block-with-border", "toggle-icon", "''", 3, "ngClass", "value", "flight-list-item--is-open", "click", 4, "ngIf"], [3, "packages", "selectedPackageIndex", "packageStartIdx", "changeSelectedPackageIndex", 4, "ngIf"], ["class", "confirm-and-continue-block", 4, "ngIf"], ["class", "flight-list-item__bottom-divider", 4, "ngIf"], [1, "recommended-block"], [3, "click"], [3, "packages", "flight", "totalPassengers"], ["toggle-icon", "''", 1, "tz-block-with-border", 3, "ngClass", "value", "click"], ["slot", "header", 1, "flight-list-accordion-item", "ion-no-padding"], [3, "flight", "twoWayFlight", "onWardSelected", "returnSelected", "totalPassengers", "selectedOnwardFlight", "selectedReturnFlight"], ["slot", "content"], [3, "flight", "openTerms", "openCheckinAllowanceInfo", 4, "ngIf"], [3, "flight", "openTerms", "openCheckinAllowanceInfo"], [3, "packages", "selectedPackageIndex", "packageStartIdx", "changeSelectedPackageIndex"], [1, "confirm-and-continue-block"], [3, "hideCancelBtn", "cancelSelection", "submitBooking"], [1, "flight-list-item__bottom-divider"]],
  template: function FlightsListComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "tz-flight-list-result-information", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, FlightsListComponent_div_3_Template, 7, 14, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("count", ctx.flightListMetadata.count)("twoWayFlight", ctx.twoWayFlight)("preSelectedFlight", ctx.flights.length ? ctx.flights[0] : null)("isPreSelected", ctx.twoWayFlight ? !!(ctx.selectedOnWardId && ctx.selectedReturnId) : !!ctx.selectedOnWardId);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", !ctx.selectedFlight);
    }
  },
  directives: [_flight_list_result_information_flight_list_result_information_component__WEBPACK_IMPORTED_MODULE_4__.FlightListResultInformationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_13__.InfiniteScrollDirective, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonAccordionGroup, ngx_virtual_scroller__WEBPACK_IMPORTED_MODULE_5__.VirtualScrollerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, _mob_flight_list_item_mob_flight_list_item_component__WEBPACK_IMPORTED_MODULE_6__.MobFlightListItemComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonAccordion, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgClass, _ionic_angular__WEBPACK_IMPORTED_MODULE_14__.IonItem, _flight_list_item_flight_list_item_component__WEBPACK_IMPORTED_MODULE_7__.FlightListItemComponent, _flight_list_item_description_flight_list_item_description_component__WEBPACK_IMPORTED_MODULE_8__.FlightListItemDescriptionComponent, _flight_item_desc_packages_flight_item_desc_packages_component__WEBPACK_IMPORTED_MODULE_9__.FlightItemDescPackagesComponent, _shared_components_service_booking_confirmation_component_service_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_10__.ServiceBookingConfirmationComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .flights[_ngcontent-%COMP%]   .flights-list[_ngcontent-%COMP%]   .flight-list-item[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n@media (min-width: 921px) {\n  [_nghost-%COMP%]   .flights[_ngcontent-%COMP%]   .flight-list-item.round-trip[_ngcontent-%COMP%] {\n    min-height: 181px;\n  }\n  [_nghost-%COMP%]   .flights[_ngcontent-%COMP%]   .flight-list-item.one-way[_ngcontent-%COMP%] {\n    min-height: 90px;\n  }\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .flights[_ngcontent-%COMP%]   .flights-list[_ngcontent-%COMP%]   .flight-list-item[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  [_nghost-%COMP%]   .flights[_ngcontent-%COMP%]   .flights-list[_ngcontent-%COMP%]   .flight-list-item__bottom-divider[_ngcontent-%COMP%] {\n    background-color: var(--color-main-background-mobile);\n    height: 0.5rem;\n  }\n}\n[_nghost-%COMP%]   .flights[_ngcontent-%COMP%]   .flights-submission[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .flights[_ngcontent-%COMP%]   .flights-submission[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] {\n  flex: 1;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .flights[_ngcontent-%COMP%]   .flights-submission[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0 20px;\n}\nion-accordion[_ngcontent-%COMP%] {\n  padding: 2px;\n  cursor: pointer;\n  transition: unset;\n  overflow: hidden;\n}\nion-accordion.accordion-expanded[_ngcontent-%COMP%] {\n  background: var(--ion-color-light);\n}\nion-accordion.not-complete[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.7;\n}\n.flight-list-item--is-open[_ngcontent-%COMP%]     .flight-container {\n  border-bottom: 1px solid #e5e5e5;\n}\n[_nghost-%COMP%]     .flight-list-accordion-item {\n  --border-width: 0;\n  --inner-padding-end: 0;\n  position: revert;\n}\n[_nghost-%COMP%]     .flight-list-accordion-item .recommended {\n  position: absolute;\n  right: 0;\n  top: 20px;\n}\n[_nghost-%COMP%]     .flight-list-accordion-item .ion-accordion-toggle-icon {\n  display: none;\n}\nion-accordion[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%] {\n  --inner-border-width: 0;\n  overflow: unset;\n}\n@media not all and (hover: none) {\n  ion-accordion[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:hover {\n    --background-hover: var(--ion-color-light);\n  }\n}\n.confirm-and-continue-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-end;\n}\n.cancel-selection-btn[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n[_nghost-%COMP%]     .flights-list--selected-flight .scrollable-content {\n  position: relative;\n  max-height: unset;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWdodHMtbGlzdC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsT0FBQTtBQURGO0FBS007RUFDRSxtQkFBQTtBQUhSO0FDcURJO0VEN0NVO0lBQ0ksaUJBQUE7RUFMaEI7RUFPWTtJQUNJLGdCQUFBO0VBTGhCO0FBQ0Y7QUN1Q0k7RUQ1QlU7SUFDSSxhQUFBO0VBUmhCO0VBVWdCO0lBQ0kscURBQUE7SUFDQSxjQUFBO0VBUnBCO0FBQ0Y7QUFjSTtFQUNFLGdCQUFBO0FBWk47QUFjTTtFQUNFLE9BQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBWlI7QUFjUTtFQUNFLFdBQUE7RUFDQSxjQUFBO0FBWlY7QUFtQkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFoQkY7QUFtQkE7RUFDRSxrQ0FBQTtBQWhCRjtBQWtCQTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQWZKO0FBa0JBO0VBQ0UsZ0NBQUE7QUFmRjtBQWtCQTtFQUNJLGlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQWZKO0FBaUJFO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtBQWZKO0FBbUJBO0VBQ0UsYUFBQTtBQWhCRjtBQW1CQTtFQUNJLHVCQUFBO0VBQ0EsZUFBQTtBQWhCSjtBQ0pJO0VBQ0k7SURzQkEsMENBQUE7RUFmTjtBQUNGO0FBa0JBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0FBZkY7QUFrQkE7RUFDRSxzQkFBQTtBQWZGO0FBa0JBO0VBQ0ksa0JBQUE7RUFDQSxpQkFBQTtBQWZKIiwiZmlsZSI6ImZsaWdodHMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuOmhvc3Qge1xuICBmbGV4OiAxO1xuXG4gIC5mbGlnaHRzIHtcbiAgICAuZmxpZ2h0cy1saXN0IHtcbiAgICAgIC5mbGlnaHQtbGlzdC1pdGVtIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICAgIH1cbiAgICB9XG4gICAgICBAaW5jbHVkZSBkZXNrdG9we1xuICAgICAgICAgIC5mbGlnaHQtbGlzdC1pdGVtIHtcbiAgICAgICAgICAgICAgJi5yb3VuZC10cmlwIHtcbiAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6IDE4MXB4OyAvLyBUUkFaLTg3NDY6cmVxdWlyZWQgZm9yIHZpcnR1YWwgc2Nyb2xsZXIsIGRvIG5vdCByZW1vdmUgKHNldCBpdCB0byBmbGlnaHQgaXRlbSBoZWlnaHQpXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgJi5vbmUtd2F5IHtcbiAgICAgICAgICAgICAgICAgIG1pbi1oZWlnaHQ6OTBweDsgLy8gVFJBWi04NzQ2OnJlcXVpcmVkIGZvciB2aXJ0dWFsIHNjcm9sbGVyLCBkbyBub3QgcmVtb3ZlIChzZXQgaXQgdG8gZmxpZ2h0IGl0ZW0gaGVpZ2h0KVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICB9XG4gICAgICBAaW5jbHVkZSBtb2JpbGV7XG4gICAgICAgICAgLmZsaWdodHMtbGlzdCB7XG4gICAgICAgICAgICAgIC5mbGlnaHQtbGlzdC1pdGVtIHtcbiAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG5cbiAgICAgICAgICAgICAgICAgICZfX2JvdHRvbS1kaXZpZGVye1xuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4tYmFja2dyb3VuZC1tb2JpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMC41cmVtO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuXG5cbiAgICAuZmxpZ2h0cy1zdWJtaXNzaW9uIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgIC5idXR0b25zLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG5cbiAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICB3aWR0aDogYXV0bztcbiAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5pb24tYWNjb3JkaW9uIHtcbiAgcGFkZGluZzogMnB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IHVuc2V0O1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pb24tYWNjb3JkaW9uLmFjY29yZGlvbi1leHBhbmRlZCB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG59XG5pb24tYWNjb3JkaW9uLm5vdC1jb21wbGV0ZXtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjc7XG59XG5cbi5mbGlnaHQtbGlzdC1pdGVtLS1pcy1vcGVuIDo6bmctZGVlcCAuZmxpZ2h0LWNvbnRhaW5lciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xufVxuXG46aG9zdCA6Om5nLWRlZXAgLmZsaWdodC1saXN0LWFjY29yZGlvbi1pdGVtIHtcbiAgICAtLWJvcmRlci13aWR0aDogMDtcbiAgICAtLWlubmVyLXBhZGRpbmctZW5kOiAwO1xuICAgIHBvc2l0aW9uOiByZXZlcnQ7XG5cbiAgLnJlY29tbWVuZGVkIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDA7XG4gICAgdG9wOiAyMHB4XG4gIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5mbGlnaHQtbGlzdC1hY2NvcmRpb24taXRlbSAuaW9uLWFjY29yZGlvbi10b2dnbGUtaWNvbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbmlvbi1hY2NvcmRpb24gaW9uLWl0ZW0ge1xuICAgIC0taW5uZXItYm9yZGVyLXdpZHRoOiAwO1xuICAgIG92ZXJmbG93OiB1bnNldDtcblxuICAgIEBpbmNsdWRlIG9uLWhvdmVyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLWhvdmVyOiB2YXIoLS1pb24tY29sb3ItbGlnaHQpO1xuICAgIH1cbn1cblxuLmNvbmZpcm0tYW5kLWNvbnRpbnVlLWJsb2NrIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbn1cblxuLmNhbmNlbC1zZWxlY3Rpb24tYnRuIHtcbiAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5mbGlnaHRzLWxpc3QtLXNlbGVjdGVkLWZsaWdodCAuc2Nyb2xsYWJsZS1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWF4LWhlaWdodDogdW5zZXQ7XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 42142:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/results/transport/flights/flights-routing.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightsRoutingModule": () => (/* binding */ FlightsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _flights_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flights.component */ 56688);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _flights_component__WEBPACK_IMPORTED_MODULE_0__.FlightsComponent,
    },
];
class FlightsRoutingModule {
}
FlightsRoutingModule.ɵfac = function FlightsRoutingModule_Factory(t) { return new (t || FlightsRoutingModule)(); };
FlightsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FlightsRoutingModule });
FlightsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FlightsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 56688:
/*!************************************************************************!*\
  !*** ./src/app/modules/results/transport/flights/flights.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightsComponent": () => (/* binding */ FlightsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _core_constants_trip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/trip */ 16699);
/* harmony import */ var _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/state-from.const */ 54255);
/* harmony import */ var _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/base-service-component/base-service.component */ 6371);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _flights_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./flights.sort */ 43557);
/* harmony import */ var _components_mob_flight_details_mob_flight_details_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/mob-flight-details/mob-flight-details.component */ 97729);
/* harmony import */ var _services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/modules/inactivity/filter.service */ 53768);
/* harmony import */ var _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/modules/search/utils/search.utils */ 77235);
/* harmony import */ var _results_filters_results_filters_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../results-filters/results-filters.utils.service */ 47740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_transport_flights_flights_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/modules/transport/flights/flights.service */ 49901);
/* harmony import */ var _services_services_flight_train_search_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/services/flight-train-search.service */ 18077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _results_filters_filters_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../results-filters/filters.component */ 32082);
/* harmony import */ var _common_flight_train_button_toggle_flight_train_button_toggle_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../common/flight-train-button-toggle/flight-train-button-toggle.component */ 51557);
/* harmony import */ var _components_mob_filter_navbar_mob_filter_navbar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/mob-filter-navbar/mob-filter-navbar.component */ 97008);
/* harmony import */ var _shared_components_results_top_info_block_results_top_info_block_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @shared/components/results-top-info-block/results-top-info-block.component */ 70858);
/* harmony import */ var _results_filters_components_filter_btn_filter_btn_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../results-filters/components/filter-btn/filter-btn.component */ 16722);
/* harmony import */ var _shared_components_price_range_filter_price_range_filter_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../shared/components/price-range-filter/price-range-filter.component */ 89254);
/* harmony import */ var _components_flight_train_skeleton_loader_flight_train_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/flight-train-skeleton-loader/flight-train-skeleton-loader.component */ 31332);
/* harmony import */ var _components_mob_flight_train_skeleton_loader_mob_flight_train_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../components/mob-flight-train-skeleton-loader/mob-flight-train-skeleton-loader.component */ 81358);
/* harmony import */ var _components_selected_flights_selected_flights_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/selected-flights/selected-flights.component */ 41562);
/* harmony import */ var _components_flights_list_flights_list_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/flights-list/flights-list.component */ 9976);
/* harmony import */ var _shared_components_service_booking_confirmation_component_service_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @shared/components/service-booking-confirmation-component/service-booking-confirmation.component */ 70832);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../shared/pipes/safe-html.pipe */ 66926);




























const _c0 = ["flightList"];
const _c1 = ["flightListSkeletonLoader"];
const _c2 = ["flightSkeleton"];
const _c3 = ["selectedFlights"];
const _c4 = ["confirmationComponent"];
const _c5 = ["confirmationComponentReplacer"];

function FlightsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 10)(1, "tz-results-filters", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("filterChanged", function FlightsComponent_div_1_Template_tz_results_filters_filterChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return ctx_r9.onFilterChanged($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("filter", ctx_r0.flightsFilter)("loading", ctx_r0.loaderService.skeletonLoading || ctx_r0.notComplete)("disabled", ctx_r0.confirmable);
  }
}

function FlightsComponent_tz_flight_train_button_toggle_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "tz-flight-train-button-toggle", 12);
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("selectedButton", "flights")("skeletonLoading", ctx_r1.loaderService.skeletonLoading || ctx_r1.notComplete || ctx_r1.twoTransports.has === null);
  }
}

function FlightsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div")(1, "tz-mob-filter-navbar", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("openFilter", function FlightsComponent_div_6_Template_tz_mob_filter_navbar_openFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return ctx_r11.onOpenFilterModal();
    })("resetFilter", function FlightsComponent_div_6_Template_tz_mob_filter_navbar_resetFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r12);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return ctx_r13.onResetFilter();
    })("openSort", function FlightsComponent_div_6_Template_tz_mob_filter_navbar_openSort_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r12);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return ctx_r14.mobOpenSort();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("sortKey", ctx_r2.filterQueryParams.sort_by)("sortByOptions", ctx_r2.sortByOptions)("isEnableClearFilter", ctx_r2.isEnableClearFilter)("filtersCount", ctx_r2.selectedFiltersCount)("skeletonLoading", ctx_r2.loaderService.skeletonLoading || ctx_r2.notComplete);
  }
}

function FlightsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 14)(1, "tz-results-top-info-block", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](3, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("loading", ctx_r3.loaderService.skeletonLoading || ctx_r3.notComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](3, 2, ctx_r3.serviceTitle), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵsanitizeHtml"]);
  }
}

function FlightsComponent_div_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 20)(1, "tz-filter-btn", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("clickFilter", function FlightsComponent_div_11_div_1_Template_tz_filter_btn_clickFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r18);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r17.onOpenFilterPopup();
    })("clearFilter", function FlightsComponent_div_11_div_1_Template_tz_filter_btn_clearFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r18);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r19.onResetFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("filterCount", ctx_r15.filterCount(ctx_r15.flightsFilter));
  }
}

function FlightsComponent_div_11_tz_flight_train_button_toggle_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "tz-flight-train-button-toggle", 12);
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("selectedButton", "flights")("skeletonLoading", ctx_r16.loaderService.skeletonLoading || ctx_r16.notComplete);
  }
}

function FlightsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](1, FlightsComponent_div_11_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "tz-price-range-filter", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("sortChange", function FlightsComponent_div_11_Template_tz_price_range_filter_sortChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r21);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return ctx_r20.sortFlights($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](4, FlightsComponent_div_11_tz_flight_train_button_toggle_4_Template, 1, 2, "tz-flight-train-button-toggle", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 6, ctx_r4.isMobile$));
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("sort", ctx_r4.filterQueryParams.sort_by)("options", ctx_r4.sortByOptions)("disabled", ctx_r4.confirmable)("skeletonLoading", ctx_r4.loaderService.skeletonLoading || ctx_r4.notComplete);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r4.twoTransports.has);
  }
}

function FlightsComponent_ng_container_13_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 23, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](2, "tz-flight-train-skeleton-loader", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("twoWay", ctx_r22.twoWayFlight);
  }
}

function FlightsComponent_ng_container_13_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", null, 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](2, "tz-mob-flight-train-skeleton-loader", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("isFlight", true);
  }
}

function FlightsComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](1, FlightsComponent_ng_container_13_div_1_Template, 3, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](3, FlightsComponent_ng_container_13_div_3_Template, 3, 1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 2, ctx_r5.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](4, 4, ctx_r5.platformService.isMobileDevice$));
  }
}

function FlightsComponent_ng_container_14_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 31, 32)(2, "tz-selected-flights", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("removedItem", function FlightsComponent_ng_container_14_div_1_Template_tz_selected_flights_removedItem_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r31);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r30.onRemovedSelectedFlight($event);
    })("showingPackage", function FlightsComponent_ng_container_14_div_1_Template_tz_selected_flights_showingPackage_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r31);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r32.isSelectedShowingPackage($event);
    })("changeTickets", function FlightsComponent_ng_container_14_div_1_Template_tz_selected_flights_changeTickets_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r31);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r33.onChangeCartTickets();
    })("changeOptions", function FlightsComponent_ng_container_14_div_1_Template_tz_selected_flights_changeOptions_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r31);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r34.onChangeCartTicketOptions($event);
    })("newFlightSelected", function FlightsComponent_ng_container_14_div_1_Template_tz_selected_flights_newFlightSelected_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r31);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r35.addItemToCart($event);
    })("selectPackage", function FlightsComponent_ng_container_14_div_1_Template_tz_selected_flights_selectPackage_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r31);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r36.onSelectPackage($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("serviceList", true)("flightCartData", ctx_r26.cartData)("packages", ctx_r26.cachedFlights[ctx_r26.cartData.items[0].selectedItem.id]);
  }
}

function FlightsComponent_ng_container_14_tz_flights_list_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "tz-flights-list", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("scrollElementIndexChange", function FlightsComponent_ng_container_14_tz_flights_list_4_Template_tz_flights_list_scrollElementIndexChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r37.scrollListElementIndex = $event;
    })("selectedOnwardFlight", function FlightsComponent_ng_container_14_tz_flights_list_4_Template_tz_flights_list_selectedOnwardFlight_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r39.onOnwardFlightChanged($event);
    })("selectedReturnFlight", function FlightsComponent_ng_container_14_tz_flights_list_4_Template_tz_flights_list_selectedReturnFlight_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r38);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r40.onReturnFlightChanged($event);
    })("cancelSelection", function FlightsComponent_ng_container_14_tz_flights_list_4_Template_tz_flights_list_cancelSelection_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r38);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r41.onCancelSelection();
    })("selectFlight", function FlightsComponent_ng_container_14_tz_flights_list_4_Template_tz_flights_list_selectFlight_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r38);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r42.onSelectedFlight($event);
    })("selectPackage", function FlightsComponent_ng_container_14_tz_flights_list_4_Template_tz_flights_list_selectPackage_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r38);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r43.onSelectPackage($event);
    })("openTerms", function FlightsComponent_ng_container_14_tz_flights_list_4_Template_tz_flights_list_openTerms_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r38);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r44.onOpenTransportTerms($event);
    })("openCheckinAllowanceInfo", function FlightsComponent_ng_container_14_tz_flights_list_4_Template_tz_flights_list_openCheckinAllowanceInfo_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r38);
      const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r45.onOpenCheckinAllowance($event);
    })("toggleFlight", function FlightsComponent_ng_container_14_tz_flights_list_4_Template_tz_flights_list_toggleFlight_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r38);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r46.toggleFlight($event);
    })("nextPage", function FlightsComponent_ng_container_14_tz_flights_list_4_Template_tz_flights_list_nextPage_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r38);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r47.nextPage();
    })("submitBooking", function FlightsComponent_ng_container_14_tz_flights_list_4_Template_tz_flights_list_submitBooking_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r38);
      const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r48.addItemToCart($event);
    })("showFlightDetails", function FlightsComponent_ng_container_14_tz_flights_list_4_Template_tz_flights_list_showFlightDetails_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r38);
      const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
      return ctx_r49.showFlightDetails($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("flights", ctx_r28.flights)("selectedId", ctx_r28.selectedFlightId)("cachedFlights", ctx_r28.cachedFlights)("isMobile$", ctx_r28.isMobile$)("notComplete", ctx_r28.notComplete)("twoWayFlight", ctx_r28.twoWayFlight)("cancelFlights$", ctx_r28.cancelFlights$)("flightListMetadata", ctx_r28.flightListMetadata)("isListCompleted", ctx_r28.isListCompleted)("selectedOnWardId", ctx_r28.filterQueryParams.onwardId)("selectedReturnId", ctx_r28.filterQueryParams.returnId)("scrollElementIndex", ctx_r28.scrollListElementIndex)("totalPassengers", ctx_r28.totalPassengers)("flightSelected", ctx_r28.confirmable && !ctx_r28.isSelectedChangeOptions);
  }
}

function FlightsComponent_ng_container_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](1, FlightsComponent_ng_container_14_div_1_Template, 3, 3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](2, "div", 28, 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](4, FlightsComponent_ng_container_14_tz_flights_list_4_Template, 1, 14, "tz-flights-list", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx_r6.cartData && ctx_r6.cartData.items.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !ctx_r6.isSelectedChangeOptions);
  }
}

function FlightsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 35, 36)(2, "tz-service-booking-confirmation", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵlistener"]("cancelSelection", function FlightsComponent_div_15_Template_tz_service_booking_confirmation_cancelSelection_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r52);
      const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return ctx_r51.onCancelSelection();
    })("submitBooking", function FlightsComponent_div_15_Template_tz_service_booking_confirmation_submitBooking_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵrestoreView"](_r52);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵnextContext"]();
      return ctx_r53.onSubmitBooking();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
  }
}

function FlightsComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelement"](0, "div", 38, 39);
  }
}

class FlightsComponent extends _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_3__.BaseServiceComponent {
  constructor(flightService, flightTrainSearchService, injector) {
    super(injector);
    this.flightService = flightService;
    this.flightTrainSearchService = flightTrainSearchService;
    this.injector = injector;
    this.cancelFlights$ = new rxjs__WEBPACK_IMPORTED_MODULE_25__.Subject();
    this.flightListMetadata = {
      count: 0
    };
    this.flights = [];
    this.flightsFilter = [];
    this.packages = [];
    this.selectedFlight = null;
    this.selectedFiltersCount = 0;
    this.cachedFlights = {};
    this.selectedId = '';
    this.twoWayFlight = false;
    this.twoTransports = {
      has: null
    };
    this.sortByOptions = _flights_sort__WEBPACK_IMPORTED_MODULE_5__.FlightsSort;
    this.filterQueryParams = {};
    this.serviceTitle = '';
    this.isSelectedChangeOptions = false; // set to true when changing selected options

    this.totalPassengers = 0;
    this.serviceId = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT;
    this.editListener = -1;
    this.repriceListenerId = -1;
    this.flightRecommendedID = '';
    this.resultsCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_25__.Subject();
    this.loadPackagesProcessing = false;
    this.backUpResponseForFlights = {};
    this.journeyType = this.searchDataService.travelType;
    this.isNextSummary = this.nextIsSummary();
    this.flightTrainSearchService.twoTransports.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(this.destroy$)).subscribe(twoTransports => this.twoTransports = twoTransports);
  }

  get isEnableClearFilter() {
    return _services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_7__.FilterService.enableClearAll(this.flightsFilter);
  }

  ngOnInit() {
    this.initSearchParams();
    this.initializeFlightsComponent(true);

    if (this.searchRunning()) {
      this.showSkeletonLoader(true);
    } else {
      this.loadFlightsData(true);
      this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(this.destroy$)).subscribe(() => {
        this.serviceTitle = this.formServiceTitle(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT_TRAIN, this.twoWayFlight, this.serviceId);
        this.initializeFlightsComponent(false);
      });
    }
  }

  ngOnDestroy() {
    this.listenersService.unregisterListener(this.editListener);
    this.listenersService.unregisterListener(this.repriceListenerId);
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onFilterChanged($event) {
    this.scrollToServiceContainer();
    this.resetPaginationParameters();
    this.flightsFilter = $event;
    this.filterFlights();
  }

  sortFlights(sortValue) {
    this.resetPaginationParameters();
    _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_8__.SearchUtilsService.saveSortingValue(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT, sortValue);
    this.filterQueryParams.sort_by = sortValue;
    this.loadFlightsData();
  }

  onSelectedFlight(selectedFlight) {
    this.confirmable = true;
    this.selectFlight(selectedFlight);
    this.scrollToConfirmationBlock();
  }

  onSelectPackage(selectedFlight) {
    var _a;

    this.selectedFlightId = selectedFlight.package.id;

    if (((_a = this.cachedFlights[selectedFlight.flightId]) === null || _a === void 0 ? void 0 : _a.length) > 1) {
      this.confirmable = true;
      this.scrollToConfirmationBlock();
    }

    this.selectFlight(selectedFlight.package);
  }

  toggleFlight(flight) {
    this.selectedId = flight.id;
    this.loadPackages(flight).subscribe(() => {});
  }

  onSubmitBooking() {
    if (this.selectedFlight) {
      this.addItemToCart(this.selectedFlight);
    }
  }

  onCancelSelection() {
    this.resetData(true);
    this.scrollToServiceContainer();
    this.handleFlightsDataResponse(this.backUpResponseForFlights);
  }

  onOpenFilterPopup() {
    const filterFlights = new rxjs__WEBPACK_IMPORTED_MODULE_28__.BehaviorSubject(this.flightsFilter);
    filterFlights.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(this.destroy$)).subscribe(filter => {
      this.flightsFilter = filter;
      this.filterFlights();
    });
    this.openFilterDialog(filterFlights, this.resultsCount$);
  }

  nextPage() {
    if (!this.loading && this.flightListMetadata.count > 0 && this.start < this.flightListMetadata.count) {
      const params = {
        start: this.start,
        limit: this.flightListMetadata.increment,
        sortBy: this.filterQueryParams.sort_by
      };
      this.loading = true;
      this.flightService.paginate(this.serviceId, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.finalize)(() => {
        this.loading = false;
      })).subscribe(flights => {
        const flightWithRecommended = this.flightService.handlingData(flights, this.flightRecommendedID, null);
        this.flights = [...this.flights, ...flightWithRecommended]; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

        if (flights.length >= this.flightListMetadata.count) {
          this.isListCompleted = true;
        } else {
          this.isListCompleted = false; // eslint-disable-next-line @typescript-eslint/no-non-null-assertion

          this.start += this.flightListMetadata.increment;
        }

        if (this.isMainSearch()) {
          this.backUpResponseForFlights.results = this.flights;
        }
      }, error => {
        console.log('pagination error', error);
      });
    }
  }

  onOnwardFlightChanged(onWardFlightId) {
    this.filterQueryParams.onwardId = onWardFlightId ? onWardFlightId : '';

    if (!onWardFlightId) {
      this.selectedFlight = null;
      this.filterQueryParams.selected_id = '';
    }

    this.onSelectedFlightChanged();
  }

  isSelectedShowingPackage(isShowing) {
    this.isSelectedChangeOptions = isShowing;
  }

  onReturnFlightChanged(returnFlightId) {
    this.filterQueryParams.returnId = returnFlightId ? returnFlightId : '';

    if (!returnFlightId) {
      this.selectedFlight = null;
      this.filterQueryParams.selected_id = '';
    }

    this.onSelectedFlightChanged();
  }

  addItemToCart(flight) {
    this.flightService.addFlightToCart(flight).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(this.destroy$)).subscribe(response => {
      this.finishSelectFlight();
    }, error => {
      console.log(error);
    });
  }

  onChangeCartTickets() {
    if (this.flightListSkeletonLoaderElementReference) {
      this.scrollToElement(this.flightListSkeletonLoaderElementReference);
    } else {
      this.scrollToElement(this.flightListElementReference);
    }
  }

  onChangeCartTicketOptions(cartFlight) {
    this.loadPackages(cartFlight).subscribe(() => {
      if (!this.platformService.isMobileDevice) {
        this.scrollToConfirmationBlockReplacer();
      }

      if (this.platformService.isMobileDevice) {
        this.showFlightDetails(cartFlight);
      }
    });
  }

  showFlightDetails(flight) {
    if (this.loadPackagesProcessing) {
      return;
    }

    this.loadPackages(flight).subscribe(() => {
      this.modalService.createDetailsPage(_components_mob_flight_details_mob_flight_details_component__WEBPACK_IMPORTED_MODULE_6__.MobFlightDetailsComponent, {
        data: {
          flight,
          flightsPackages: this.cachedFlights[flight.id],
          totalPassengers: this.totalPassengers
        },
        title: 'FLIGHT.Review_And_Confirm'
      }).then(modal => {
        var _a, _b;

        if ((_a = modal.data) === null || _a === void 0 ? void 0 : _a.flight) {
          this.addItemToCart(modal.data.flight);
        }

        if ((_b = modal.data) === null || _b === void 0 ? void 0 : _b.nextService) {
          this.finishSelectFlight();
        }
      });
    });
  }

  onRemovedSelectedFlight(optionId) {
    this.removeService(this.serviceId, optionId).then(isRemoved => {
      console.log('remove success');
    }, error => {
      console.error(error);
    });
  }

  onOpenFilterModal() {
    const filterFlights = new rxjs__WEBPACK_IMPORTED_MODULE_28__.BehaviorSubject(this.flightsFilter);
    filterFlights.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(this.destroy$)).subscribe(filter => {
      this.flightsFilter = filter;
      this.filterFlights();
    });
    this.openFilterModal(filterFlights, this.resultsCount$);
  }

  onResetFilter() {
    const filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_25__.Subject();
    filters$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(this.destroy$)).subscribe(filter => {
      this.flightsFilter = filter;
      this.filterFlights();
    });
    _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_3__.BaseServiceComponent.resetFilter(this.flightsFilter, filters$);
  }

  mobOpenSort() {
    const sort$ = new rxjs__WEBPACK_IMPORTED_MODULE_25__.Subject();
    sort$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(this.destroy$)).subscribe(sortKey => {
      this.sortFlights(sortKey);
    });
    this.openSortMob(this.sortByOptions, this.filterQueryParams.sort_by, sort$);
  }

  onOpenTransportTerms(selectedFlight) {
    this.flightService.showFlightTrems(selectedFlight);
  }

  onOpenCheckinAllowance(allowanceType) {
    this.flightService.showFlightCheckinAllowance(allowanceType);
  }

  finishSelectFlight() {
    this.userSearchService.searchCheckDep(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT, this.nextIsSummary(), false, false, true);
  }

  handleExtraParams() {
    const state = history.state;

    if (state && state.extra) {
      for (const extraAction in state.extra) {
        if (state.extra.hasOwnProperty(extraAction)) {
          switch (extraAction) {
            case 'changeTickets':
              this.onChangeCartTickets();
              break;

            case 'changeOptions': // this.scrollToConfirmationBlockReplacer();

          }
        }
      }
    }
  }

  selectFlight(selectedFlight) {
    this.filterQueryParams.selected_id = selectedFlight.id;
    this.filterQueryParams.onwardId = selectedFlight.departureSummary.tripID;
    this.filterQueryParams.returnId = selectedFlight.returnSummary.tripID;
    this.selectedFlight = selectedFlight;
    this.handleFlightsDataResponse({
      bestValueFlight: this.flightRecommendedID,
      count: 1,
      increment: 10,
      limiter: 10,
      nbOnwards: 0,
      nbReturns: 0,
      ogs: this.flightsFilter,
      results: [selectedFlight],
      selectedID: this.filterQueryParams.selected_id
    });
    this.resultsCount$.next(1);
    this.isListCompleted = true; //this.filterFlights();
  }

  initSearchParams() {
    this.filterQueryParams = {
      sort_by: 'bestValue',
      selected_id: ''
    };
    this.setSortingValue();
  }

  resetData(preserveData = false) {
    this.selectedFlight = null;
    this.cancelFlights$.next(true);
    this.selectedFlightId = null;
    this.confirmable = false;
    this.initSearchParams();

    if (preserveData) {
      return;
    }

    this.packages = [];
    this.cachedFlights = {};
    this.loadPackagesProcessing = false;
    this.flights = [];
  }

  resetAndLoadFlightData() {
    this.resetData();
    this.loadFlightsData(false);
  }

  loadFlightsData(checkConsistency = false) {
    this.serviceTitle = this.formServiceTitle(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT_TRAIN, this.twoWayFlight, this.serviceId);
    const search = this.searchDataService.getSearch(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT_TRAIN);
    this.totalPassengers = search.passengers.total;
    this.resetPaginationParameters();
    this.checkResultsAvailable(this.serviceId);
    this.showSkeletonLoader(true);
    this.flightService.searchServiceData(this.serviceId, this.filterQueryParams, checkConsistency).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.finalize)(() => {
      this.startPollerIfTheFullDataIsNotLoaded(this.serviceId, this.filterFlights.bind(this, true));
      this.handleExtraParams();
      this.chunkReceived = true;
      /* if (checkConsistency){
          this.handleExtraParams()
      }*/
    })).subscribe(flightsResponse => {
      this.hideSkeletonLoader(true);
      this.handleFlightsDataResponse(flightsResponse);
      this.isSelectedChangeOptions = false;

      if (!flightsResponse.count && !this.filterCount(flightsResponse.ogs)) {
        this.flightService.checkServiceFailedAndNotify(this.serviceId);
      }

      setTimeout(() => {
        console.log('set prerender ready');
        window.prerenderReady = true;
      }, 1500);
    }, error => {});
  }

  onSelectedFlightChanged() {
    this.selectedFlight = null;
    this.filterFlights();
    this.scrollToServiceContainer();
  }

  loadPackages(selectedFlight) {
    if (!selectedFlight) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_30__.Observable(observer => observer.next(selectedFlight));
    }

    if (this.cachedFlights[selectedFlight.id]) {
      return new rxjs__WEBPACK_IMPORTED_MODULE_30__.Observable(observer => observer.next(this.cachedFlights[selectedFlight.id]));
    }

    this.loadPackagesProcessing = true;
    return this.flightService.getPackages(selectedFlight).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.tap)(packages => {
      this.packages = packages;
      this.cachedFlights[selectedFlight.id] = [...packages];
      this.loadPackagesProcessing = false;
    }));
  }

  handleFlightsDataResponse(flightsResponse) {
    this.filterQueryParams.refreshFilter = false;
    this.flightsFilter = flightsResponse.ogs;
    this.filterService.filterChange$.next(flightsResponse.ogs);
    this.flightRecommendedID = flightsResponse.bestValueFlight;
    this.flightService.minFlightsPrice = flightsResponse.minimalPrice;
    this.handlingFlightsData(flightsResponse.results);
    this.selectedFiltersCount = _results_filters_results_filters_utils_service__WEBPACK_IMPORTED_MODULE_9__.ResultsFiltersUtils.selectedFiltersCounter(this.flightsFilter);

    if (this.loadPackages) {
      this.loadPackages(this.flights[0]).subscribe(() => {});
    }

    const {
      count,
      selectedID,
      increment,
      limiter
    } = flightsResponse;
    this.flightListMetadata = {
      count,
      selectedID,
      increment
    };
    this.start = limiter;
    this.resultsCount$.next(this.flightListMetadata.count);

    if (this.isMainSearch()) {
      this.backUpResponseForFlights = flightsResponse;
    }
  }

  filterFlights(metadataLoading = false) {
    if (!metadataLoading) {
      this.loaderService.skeletonLoading = true;
    }

    if (!this.selectedFlight) {
      this.resetPackages();
    }

    this.flightService.filterServiceData(this.serviceId, this.filterQueryParams, this.flightsFilter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.finalize)(() => {
      this.hideSkeletonLoader(true);
      this.handleExtraParams();
    })).subscribe(flightsResponse => {
      this.isListCompleted = false;
      this.handleFlightsDataResponse(flightsResponse);
      this.resultsCount$.next(flightsResponse.count);
    }, error => {});
  }

  resetPackages() {
    this.confirmable = false;
    this.filterQueryParams.selected_id = '';
    this.packages = [];
  }

  getCartServiceData() {
    this.cartData = this.flightService.getSelectedFLightsFromCart();
  }

  nextIsSummary() {
    var _a, _b;

    const state = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state;
    const from = state ? state['from'] : '';
    return from === _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_2__.StateFrom.SUMMARY || from === _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_2__.StateFrom.TAB;
  }

  initializeFlightsComponent(isInit = false) {
    this.twoWayFlight = this.journeyType === _core_constants_trip__WEBPACK_IMPORTED_MODULE_1__.Trip.ROUND_TRIP;
    this.getCartServiceData();

    if (isInit) {
      this.editListener = this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_4__.ListenerId.LISTEN_EDIT_FLIGHT, this.resetAndLoadFlightData, this);
      this.currencyService.selectedCurrencySubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_27__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.takeUntil)(this.destroy$)).subscribe(() => {
        this.cachedFlights = {};
        this.loadFlightsData();
      });
      this.repriceListenerId = this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_4__.ListenerId.LISTEN_REPRICED, this.getCartServiceData, this);
    } else {
      this.filterFlights();
    }
  }

  handlingFlightsData(flights) {
    const cartData = this.cartData;
    const cartFlightsID = cartData && cartData.items.length ? cartData.items[0].selectedItem.id : null;
    this.flights = this.flightService.handlingData(flights, this.flightRecommendedID, cartFlightsID);
    this.flights = this.filterFlightsData(this.flights);

    if (this.isMainSearch()) {
      this.backUpResponseForFlights.results = this.flights;
    }
  }

  filterFlightsData(flights) {
    var _a, _b;

    const cartId = ((_a = this.cartData) === null || _a === void 0 ? void 0 : _a.items[0]) ? (_b = this.cartData) === null || _b === void 0 ? void 0 : _b.items[0].selectedItem.data.tripId : null;

    if (cartId) {
      return flights.filter(item => item.tripId !== cartId);
    }

    return flights;
  }

  setSortingValue() {
    const sort = _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_8__.SearchUtilsService.getSortingValue(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT);

    if (sort) {
      this.filterQueryParams.sort_by = sort;
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

  isMainSearch() {
    return !(this.filterQueryParams.returnId || this.filterQueryParams.onwardId || this.filterQueryParams.selected_id);
  }

}

FlightsComponent.ɵfac = function FlightsComponent_Factory(t) {
  return new (t || FlightsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_services_modules_transport_flights_flights_service__WEBPACK_IMPORTED_MODULE_10__.FlightsService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_services_services_flight_train_search_service__WEBPACK_IMPORTED_MODULE_11__.FlightTrainSearchService), _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_24__.Injector));
};

FlightsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵdefineComponent"]({
  type: FlightsComponent,
  selectors: [["tz-flights"]],
  viewQuery: function FlightsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c2, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c3, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c4, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵviewQuery"](_c5, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.flightListElementReference = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.flightListSkeletonLoaderElementReference = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.flightSkeleton = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.selectedFlights = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.confirmationComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵloadQuery"]()) && (ctx.confirmationComponentReplacer = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵInheritDefinitionFeature"]],
  decls: 17,
  vars: 20,
  consts: [[1, "tz-container", "flights-container", "flex", 3, "hidden"], ["class", "tz-filter-container", 4, "ngIf"], [1, "flights-list-packages-container"], [3, "selectedButton", "skeletonLoading", 4, "ngIf"], [4, "ngIf"], ["class", "result-top-info-block-item", 4, "ngIf"], [1, "flights-list-container"], ["class", "flights-top-navbar flex align-center", 4, "ngIf"], ["class", "confirm-and-continue-block", 4, "ngIf"], ["class", "confirm-and-continue-block-replacement", 4, "ngIf"], [1, "tz-filter-container"], [3, "filter", "loading", "disabled", "filterChanged"], [3, "selectedButton", "skeletonLoading"], [3, "sortKey", "sortByOptions", "isEnableClearFilter", "filtersCount", "skeletonLoading", "openFilter", "resetFilter", "openSort"], [1, "result-top-info-block-item"], ["blockType", "blue", 3, "loading"], [3, "innerHTML"], [1, "flights-top-navbar", "flex", "align-center"], ["class", "flights-filter-btn inline-flex", 4, "ngIf"], [3, "sort", "options", "disabled", "skeletonLoading", "sortChange"], [1, "flights-filter-btn", "inline-flex"], [3, "filterCount", "clickFilter", "clearFilter"], ["class", "flights-list-skeleton flex", 4, "ngIf"], [1, "flights-list-skeleton", "flex"], ["flightListSkeletonLoader", ""], [3, "twoWay"], [3, "isFlight"], ["class", "flights-cart-data", 4, "ngIf"], [1, "flights-list", "flex"], ["flightList", ""], [3, "flights", "selectedId", "cachedFlights", "isMobile$", "notComplete", "twoWayFlight", "cancelFlights$", "flightListMetadata", "isListCompleted", "selectedOnWardId", "selectedReturnId", "scrollElementIndex", "totalPassengers", "flightSelected", "scrollElementIndexChange", "selectedOnwardFlight", "selectedReturnFlight", "cancelSelection", "selectFlight", "selectPackage", "openTerms", "openCheckinAllowanceInfo", "toggleFlight", "nextPage", "submitBooking", "showFlightDetails", 4, "ngIf"], [1, "flights-cart-data"], ["selectedFlights", ""], [3, "serviceList", "flightCartData", "packages", "removedItem", "showingPackage", "changeTickets", "changeOptions", "newFlightSelected", "selectPackage"], [3, "flights", "selectedId", "cachedFlights", "isMobile$", "notComplete", "twoWayFlight", "cancelFlights$", "flightListMetadata", "isListCompleted", "selectedOnWardId", "selectedReturnId", "scrollElementIndex", "totalPassengers", "flightSelected", "scrollElementIndexChange", "selectedOnwardFlight", "selectedReturnFlight", "cancelSelection", "selectFlight", "selectPackage", "openTerms", "openCheckinAllowanceInfo", "toggleFlight", "nextPage", "submitBooking", "showFlightDetails"], [1, "confirm-and-continue-block"], ["confirmationComponent", ""], [3, "cancelSelection", "submitBooking"], [1, "confirm-and-continue-block-replacement"], ["confirmationComponentReplacer", ""]],
  template: function FlightsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](1, FlightsComponent_div_1_Template, 2, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](4, FlightsComponent_tz_flight_train_button_toggle_4_Template, 1, 2, "tz-flight-train-button-toggle", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](6, FlightsComponent_div_6_Template, 2, 5, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](8, FlightsComponent_div_8_Template, 4, 4, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementStart"](10, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](11, FlightsComponent_div_11_Template, 5, 8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](13, FlightsComponent_ng_container_13_Template, 5, 6, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](14, FlightsComponent_ng_container_14_Template, 5, 2, "ng-container", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](15, FlightsComponent_div_15_Template, 3, 0, "div", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵtemplate"](16, FlightsComponent_div_16_Template, 2, 0, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("hidden", ctx.noResultAvailable && !ctx.skeletonFilterLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](2, 10, ctx.isMobile$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", (ctx.twoTransports.has || ctx.notComplete || ctx.twoTransports.has === null) && _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](5, 12, ctx.platformService.isMobileDevice$));
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](7, 14, ctx.platformService.isMobileDevice$));
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](9, 16, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵpipeBind1"](12, 18, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.loaderService.skeletonLoading || !ctx.chunkReceived);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !ctx.loaderService.skeletonLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", ctx.confirmable && !ctx.isSelectedChangeOptions);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_24__["ɵɵproperty"]("ngIf", !(ctx.confirmable && !ctx.isSelectedChangeOptions));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.NgIf, _results_filters_filters_component__WEBPACK_IMPORTED_MODULE_12__.FiltersComponent, _common_flight_train_button_toggle_flight_train_button_toggle_component__WEBPACK_IMPORTED_MODULE_13__.FlightTrainButtonToggleComponent, _components_mob_filter_navbar_mob_filter_navbar_component__WEBPACK_IMPORTED_MODULE_14__.MobFilterNavbarComponent, _shared_components_results_top_info_block_results_top_info_block_component__WEBPACK_IMPORTED_MODULE_15__.ResultsTopInfoBlockComponent, _results_filters_components_filter_btn_filter_btn_component__WEBPACK_IMPORTED_MODULE_16__.FilterBtnComponent, _shared_components_price_range_filter_price_range_filter_component__WEBPACK_IMPORTED_MODULE_17__.PriceRangeFilterComponent, _components_flight_train_skeleton_loader_flight_train_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_18__.FlightTrainSkeletonLoaderComponent, _components_mob_flight_train_skeleton_loader_mob_flight_train_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_19__.MobFlightTrainSkeletonLoaderComponent, _components_selected_flights_selected_flights_component__WEBPACK_IMPORTED_MODULE_20__.SelectedFlightsComponent, _components_flights_list_flights_list_component__WEBPACK_IMPORTED_MODULE_21__.FlightsListComponent, _shared_components_service_booking_confirmation_component_service_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_22__.ServiceBookingConfirmationComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.AsyncPipe, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_23__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n[_nghost-%COMP%]   .flights-top-navbar[_ngcontent-%COMP%]   .flights-filter-btn[_ngcontent-%COMP%] {\n  margin-right: 1.5rem;\n}\n[_nghost-%COMP%]   tz-flight-train-button-toggle[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_nghost-%COMP%]   tz-flight-train-button-toggle.not-complete[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.7;\n}\n[_nghost-%COMP%]   .flights-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n  flex: 1;\n}\n[_nghost-%COMP%]   .flights-container[_ngcontent-%COMP%]   .flights-filters-container[_ngcontent-%COMP%]   .flights-filter[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .flights-container[_ngcontent-%COMP%]   .flights-list-packages-container[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-direction: column;\n  flex: auto;\n}\n[_nghost-%COMP%]   .flights-container[_ngcontent-%COMP%]   .flights-list-packages-container[_ngcontent-%COMP%]   .flights-list-container[_ngcontent-%COMP%] {\n  flex: auto;\n}\n[_nghost-%COMP%]   .flights-container[_ngcontent-%COMP%]   .flights-list-packages-container[_ngcontent-%COMP%]   .flights-list-container[_ngcontent-%COMP%]   .flights-list[_ngcontent-%COMP%], [_nghost-%COMP%]   .flights-container[_ngcontent-%COMP%]   .flights-list-packages-container[_ngcontent-%COMP%]   .flights-list-container[_ngcontent-%COMP%]   .flights-cart-data[_ngcontent-%COMP%], [_nghost-%COMP%]   .flights-container[_ngcontent-%COMP%]   .flights-list-packages-container[_ngcontent-%COMP%]   .flights-list-container[_ngcontent-%COMP%]   .flights-list-skeleton[_ngcontent-%COMP%] {\n  scroll-margin: 60px;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .flights-container[_ngcontent-%COMP%]   .flights-list-packages-container[_ngcontent-%COMP%]   .flights-list-container[_ngcontent-%COMP%]   .flights-list[_ngcontent-%COMP%], [_nghost-%COMP%]   .flights-container[_ngcontent-%COMP%]   .flights-list-packages-container[_ngcontent-%COMP%]   .flights-list-container[_ngcontent-%COMP%]   .flights-cart-data[_ngcontent-%COMP%], [_nghost-%COMP%]   .flights-container[_ngcontent-%COMP%]   .flights-list-packages-container[_ngcontent-%COMP%]   .flights-list-container[_ngcontent-%COMP%]   .flights-list-skeleton[_ngcontent-%COMP%] {\n    scroll-margin: 0;\n  }\n}\n[_nghost-%COMP%]   .flights-container[_ngcontent-%COMP%]   .flights-list-packages-container[_ngcontent-%COMP%]   .flight-packages[_ngcontent-%COMP%] {\n  flex: auto;\n  display: flex;\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .sidebar-for-mobile[_ngcontent-%COMP%] {\n  position: absolute;\n}\n[_nghost-%COMP%]   .confirm-and-continue-block[_ngcontent-%COMP%] {\n  scroll-margin: 260px;\n}\n[_nghost-%COMP%]   .confirm-and-continue-block-replacement[_ngcontent-%COMP%] {\n  scroll-margin: 260px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZsaWdodHMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGFBQUE7RUFDQSxPQUFBO0FBREo7QUFJUTtFQUNJLG9CQUFBO0FBRlo7QUFNSTtFQUNJLGlCQUFBO0FBSlI7QUFNUTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQUpaO0FBUUk7RUFDSSxtQkFBQTtFQUNBLE9BQUE7QUFOUjtBQVNZO0VBQ0ksT0FBQTtBQVBoQjtBQVdRO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQVRaO0FBV1k7RUFDSSxVQUFBO0FBVGhCO0FBV2dCO0VBQ0ksbUJBQUE7QUFUcEI7QUNxQkk7RURiWTtJQUlRLGdCQUFBO0VBUnRCO0FBQ0Y7QUFZWTtFQUNJLFVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFWaEI7QUFvQkk7RUFDSSxrQkFBQTtBQWxCUjtBQXFCSTtFQUNJLG9CQUFBO0FBbkJSO0FBc0JJO0VBQ0ksb0JBQUE7QUFwQlIiLCJmaWxlIjoiZmxpZ2h0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcblxuICAgIC5mbGlnaHRzLXRvcC1uYXZiYXIge1xuICAgICAgICAuZmxpZ2h0cy1maWx0ZXItYnRuIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHotZmxpZ2h0LXRyYWluLWJ1dHRvbi10b2dnbGUge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcblxuICAgICAgICAmLm5vdC1jb21wbGV0ZSB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mbGlnaHRzLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGZsZXg6IDE7XG5cbiAgICAgICAgLmZsaWdodHMtZmlsdGVycy1jb250YWluZXIge1xuICAgICAgICAgICAgLmZsaWdodHMtZmlsdGVyIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmZsaWdodHMtbGlzdC1wYWNrYWdlcy1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgZmxleDogYXV0bztcblxuICAgICAgICAgICAgLmZsaWdodHMtbGlzdC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IGF1dG87XG5cbiAgICAgICAgICAgICAgICAuZmxpZ2h0cy1saXN0LCAuZmxpZ2h0cy1jYXJ0LWRhdGEsIC5mbGlnaHRzLWxpc3Qtc2tlbGV0b24ge1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGwtbWFyZ2luOiA2MHB4O1xuXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGwtbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZmxpZ2h0LXBhY2thZ2VzIHtcbiAgICAgICAgICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAgICAgICAgIC5wYWNrYWdlLWl0ZW0ge1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAuc2lkZWJhci1mb3ItbW9iaWxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cblxuICAgIC5jb25maXJtLWFuZC1jb250aW51ZS1ibG9jayB7XG4gICAgICAgIHNjcm9sbC1tYXJnaW46IDI2MHB4O1xuICAgIH1cblxuICAgIC5jb25maXJtLWFuZC1jb250aW51ZS1ibG9jay1yZXBsYWNlbWVudCB7XG4gICAgICAgIHNjcm9sbC1tYXJnaW46IDI2MHB4O1xuICAgIH1cbn1cbiIsIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 86470:
/*!*********************************************************************!*\
  !*** ./src/app/modules/results/transport/flights/flights.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightsModule": () => (/* binding */ FlightsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _flights_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./flights-routing.module */ 42142);
/* harmony import */ var _flights_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./flights.component */ 56688);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _common_transport_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/transport.common.module */ 73017);
/* harmony import */ var _components_flights_list_flights_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/flights-list/flights-list.component */ 9976);
/* harmony import */ var _components_flight_list_result_information_flight_list_result_information_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/flight-list-result-information/flight-list-result-information.component */ 74682);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-infinite-scroll */ 34229);
/* harmony import */ var _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../results-cart-item-selection.module */ 8793);
/* harmony import */ var _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../results-filters/results-filters.module */ 1675);
/* harmony import */ var _components_mob_flight_details_mob_flight_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mob-flight-details/mob-flight-details.component */ 97729);
/* harmony import */ var _components_mob_flight_details_route_scheme_mob_flight_details_route_scheme_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/mob-flight-details-route-scheme/mob-flight-details-route-scheme.component */ 92093);
/* harmony import */ var _components_mob_flight_details_route_details_mob_flight_details_route_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/mob-flight-details-route-details/mob-flight-details-route-details.component */ 82065);
/* harmony import */ var _components_mob_flight_pricing_plans_mob_flight_pricing_plans_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mob-flight-pricing-plans/mob-flight-pricing-plans.component */ 70133);
/* harmony import */ var _components_mob_flight_terms_conditions_modal_mob_flight_terms_conditions_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mob-flight-terms-conditions-modal/mob-flight-terms-conditions-modal.component */ 49857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/core */ 3184);






// eslint-disable-next-line max-len



// eslint-disable-next-line max-len


// eslint-disable-next-line max-len

// eslint-disable-next-line max-len

// eslint-disable-next-line max-len

// eslint-disable-next-line max-len


class FlightsModule {
}
FlightsModule.ɵfac = function FlightsModule_Factory(t) { return new (t || FlightsModule)(); };
FlightsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineNgModule"]({ type: FlightsModule });
FlightsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _flights_routing_module__WEBPACK_IMPORTED_MODULE_0__.FlightsRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_15__.InfiniteScrollModule,
            _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_6__.ResultsCartItemSelectionModule,
            _common_transport_common_module__WEBPACK_IMPORTED_MODULE_3__.TransportCommonModule,
            _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_7__.ResultsFiltersModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_13__["ɵɵsetNgModuleScope"](FlightsModule, { declarations: [_flights_component__WEBPACK_IMPORTED_MODULE_1__.FlightsComponent,
        _components_flights_list_flights_list_component__WEBPACK_IMPORTED_MODULE_4__.FlightsListComponent,
        _components_flight_list_result_information_flight_list_result_information_component__WEBPACK_IMPORTED_MODULE_5__.FlightListResultInformationComponent,
        _components_mob_flight_details_mob_flight_details_component__WEBPACK_IMPORTED_MODULE_8__.MobFlightDetailsComponent,
        _components_mob_flight_details_route_details_mob_flight_details_route_details_component__WEBPACK_IMPORTED_MODULE_10__.MobFlightDetailsRouteDetailsComponent,
        _components_mob_flight_details_route_scheme_mob_flight_details_route_scheme_component__WEBPACK_IMPORTED_MODULE_9__.MobFlightDetailsRouteSchemeComponent,
        _components_mob_flight_pricing_plans_mob_flight_pricing_plans_component__WEBPACK_IMPORTED_MODULE_11__.MobFlightPricingPlansComponent,
        _components_mob_flight_terms_conditions_modal_mob_flight_terms_conditions_modal_component__WEBPACK_IMPORTED_MODULE_12__.MobFlightTermsConditionsModalComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
        _flights_routing_module__WEBPACK_IMPORTED_MODULE_0__.FlightsRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_15__.InfiniteScrollModule,
        _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_6__.ResultsCartItemSelectionModule,
        _common_transport_common_module__WEBPACK_IMPORTED_MODULE_3__.TransportCommonModule,
        _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_7__.ResultsFiltersModule] }); })();


/***/ }),

/***/ 43557:
/*!*******************************************************************!*\
  !*** ./src/app/modules/results/transport/flights/flights.sort.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FlightsSort": () => (/* binding */ FlightsSort)
/* harmony export */ });
const FlightsSort = [
    {
        sort: 'bestValue',
        label: 'GENERAL.SORT.BEST_VALUE',
    },
    {
        sort: 'quickest',
        label: 'GENERAL.SORT.QUICKEST',
    },
    {
        sort: 'cheapest',
        label: 'GENERAL.SORT.CHEAPEST',
    },
];


/***/ })

}]);
//# sourceMappingURL=src_app_modules_results_transport_flights_flights_module_ts.js.map