"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_checkout_checkout_module_ts"],{

/***/ 82396:
/*!*************************************************************!*\
  !*** ./src/app/modules/checkout/checkout-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutRoutingModule": () => (/* binding */ CheckoutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout.component */ 27977);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _checkout_component__WEBPACK_IMPORTED_MODULE_0__.CheckoutComponent }];
class CheckoutRoutingModule {
}
CheckoutRoutingModule.ɵfac = function CheckoutRoutingModule_Factory(t) { return new (t || CheckoutRoutingModule)(); };
CheckoutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CheckoutRoutingModule });
CheckoutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CheckoutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 27977:
/*!********************************************************!*\
  !*** ./src/app/modules/checkout/checkout.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutComponent": () => (/* binding */ CheckoutComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/traveller-type */ 90581);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _core_utils_storage_manager_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/storage-manager.util */ 96928);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/cart/services/cart.service */ 16750);
/* harmony import */ var _services_services_tzTraveller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/services/tzTraveller.service */ 36894);
/* harmony import */ var _services_modules_checkout_services_tz_checkout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modules/checkout/services/tz-checkout.service */ 95678);
/* harmony import */ var _services_modules_cart_services_cart_routing_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/cart/services/cart-routing.service */ 72753);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _services_modules_checkout_dataservices_checkout_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/modules/checkout/dataservices/checkout.data.service */ 53651);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/modules/core/scroll-service */ 90097);
/* harmony import */ var _services_modules_core_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/modules/core/loader.service */ 408);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _shared_components_mobile_mob_cart_summary_button_mob_cart_summary_button_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../shared/components/mobile/mob-cart-summary-button/mob-cart-summary-button.component */ 82223);
/* harmony import */ var _shared_components_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../shared/components/cart-summary/cart-summary.component */ 94104);
/* harmony import */ var _components_travellers_travellers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/travellers/travellers.component */ 39550);
/* harmony import */ var _components_transport_luggages_transport_luggages_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/transport-luggages/transport-luggages.component */ 3942);
/* harmony import */ var _components_mob_transport_luggages_mob_transport_luggages_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/mob-transport-luggages/mob-transport-luggages.component */ 54927);
/* harmony import */ var _components_travel_insurance_travel_insurance_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/travel-insurance/travel-insurance.component */ 56804);
/* harmony import */ var _components_mob_travel_insurance_mob_travel_insurance_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/mob-travel-insurance/mob-travel-insurance.component */ 21405);
/* harmony import */ var _components_checkout_profile_checkout_profile_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/checkout-profile/checkout-profile.component */ 72868);
/* harmony import */ var _components_stripe_stripe_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/stripe/stripe.component */ 20808);
/* harmony import */ var _components_process_payment_process_payment_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/process-payment/process-payment.component */ 85814);


































const _c0 = function (a0) {
  return {
    "active-link": a0
  };
};

const _c1 = function (a0) {
  return {
    valid: a0
  };
};

function CheckoutComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 4)(1, "div", 5)(2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function CheckoutComponent_div_0_Template_div_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return ctx_r4.gotoSummary();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](3, "tz-icon", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](6, "div", 8)(7, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function CheckoutComponent_div_0_Template_a_click_7_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return ctx_r6.switchTab(0);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](8, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](11, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function CheckoutComponent_div_0_Template_a_click_11_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r5);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return ctx_r7.switchTab(1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](12, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](5, 7, "CHECKOUT.BACK_TO_SUMMARY"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](13, _c0, ctx_r0.activeTab === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](15, _c1, ctx_r0.travellersForm.valid && ctx_r0.insuranceSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](10, 9, "TRAVELLER.TRAVELERS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](17, _c0, ctx_r0.activeTab === 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](19, _c1, ctx_r0.paymentForm.valid && ctx_r0.checkout.isStripeValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](14, 11, "GENERAL.PAYMENT"), " ");
  }
}

function CheckoutComponent_ng_container_2_tz_mob_cart_summary_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "tz-mob-cart-summary-button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function CheckoutComponent_ng_container_2_tz_mob_cart_summary_button_6_Template_tz_mob_cart_summary_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return ctx_r9.summaryExpanded = !ctx_r9.summaryExpanded;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("cartData", ctx_r8.cartData)("summaryExpanded", ctx_r8.summaryExpanded);
  }
}

const _c2 = function (a0) {
  return {
    expand: a0
  };
};

function CheckoutComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](1, "div", 12)(2, "div", 13)(3, "tz-icon", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function CheckoutComponent_ng_container_2_Template_tz_icon_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return ctx_r11.gotoSummary();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, CheckoutComponent_ng_container_2_tz_mob_cart_summary_button_6_Template, 1, 2, "tz-mob-cart-summary-button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](7, "tz-cart-summary", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](5, 7, ctx_r1.activeTab === 0 ? "CHECKOUT.TITLE" : "GENERAL.PAYMENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r1.cartData && ctx_r1.cartData.items);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](9, _c2, ctx_r1.summaryExpanded))("cartSummary", ctx_r1.cartSummary)("cartData", ctx_r1.cartData)("luggageAmount", ctx_r1.checkout.additionalLuggagePrice)("selectedInsurance", ctx_r1.checkout.insurance);
  }
}

function CheckoutComponent_div_5_tz_transport_luggages_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "tz-transport-luggages", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("updateHelper", function CheckoutComponent_div_5_tz_transport_luggages_3_Template_tz_transport_luggages_updateHelper_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return ctx_r19.updateHelper();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("checkoutLuggages", ctx_r13.checkoutLuggages)("checkout", ctx_r13.checkout)("passengerDetails", ctx_r13.checkout.passengerDetails)("transportFormArray", ctx_r13.transportFormArray);
  }
}

function CheckoutComponent_div_5_tz_mob_transport_luggages_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "tz-mob-transport-luggages", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("updateHelper", function CheckoutComponent_div_5_tz_mob_transport_luggages_5_Template_tz_mob_transport_luggages_updateHelper_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r22);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return ctx_r21.updateHelper();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("checkoutLuggages", ctx_r14.checkoutLuggages)("checkout", ctx_r14.checkout)("passengerDetails", ctx_r14.checkout.passengerDetails)("transportFormArray", ctx_r14.transportFormArray);
  }
}

function CheckoutComponent_div_5_div_7_tz_travel_insurance_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r26 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "tz-travel-insurance", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("insuranceChange", function CheckoutComponent_div_5_div_7_tz_travel_insurance_1_Template_tz_travel_insurance_insuranceChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r26);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return ctx_r25.onInsuranceChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("tzTravelInsurances", ctx_r23.tzTravelInsurances)("selectedInsurance", ctx_r23.checkout.insurance);
  }
}

function CheckoutComponent_div_5_div_7_tz_mob_travel_insurance_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "tz-mob-travel-insurance", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("insuranceChange", function CheckoutComponent_div_5_div_7_tz_mob_travel_insurance_3_Template_tz_mob_travel_insurance_insuranceChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
      return ctx_r27.onInsuranceChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("tzTravelInsurances", ctx_r24.tzTravelInsurances)("selectedInsurance", ctx_r24.checkout.insurance);
  }
}

const _c3 = function (a0) {
  return {
    "insurance-touched": a0
  };
};

function CheckoutComponent_div_5_div_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](1, CheckoutComponent_div_5_div_7_tz_travel_insurance_1_Template, 1, 2, "tz-travel-insurance", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, CheckoutComponent_div_5_div_7_tz_mob_travel_insurance_3_Template, 1, 2, "tz-mob-travel-insurance", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](7, _c3, !ctx_r15.insuranceSelected && ctx_r15.insuranceTouched));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](2, 3, ctx_r15.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](4, 5, ctx_r15.platformService.isMobileDevice$));
  }
}

function CheckoutComponent_div_5_tz_checkout_profile_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "tz-checkout-profile", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("emailLocked", function CheckoutComponent_div_5_tz_checkout_profile_20_Template_tz_checkout_profile_emailLocked_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
      return ctx_r29.onEmailFieldClicked();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("formGroup", ctx_r16.profileFormGroup);
  }
}

function CheckoutComponent_div_5_tz_stripe_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "tz-stripe", 37);
  }

  if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("formGroup", ctx_r17.paymentFormGroup)("checkout", ctx_r17.checkout)("cartData", ctx_r17.cartData);
  }
}

function CheckoutComponent_div_5_div_22_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", ctx_r31.cartData.helpers.imprintText, " ");
  }
}

function CheckoutComponent_div_5_div_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div", 38)(1, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](4, CheckoutComponent_div_5_div_22_div_4_Template, 2, 1, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](3, 2, "CHECKOUT.PAYMENT.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r18.cartData && ctx_r18.cartData.totalImprintAmt);
  }
}

const _c4 = function (a0) {
  return {
    "tz-fixed-bottom": a0
  };
};

function CheckoutComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](0, "div")(1, "div", 18)(2, "tz-checkout-travellers", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("markFormAsVisited", function CheckoutComponent_div_5_Template_tz_checkout_travellers_markFormAsVisited_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r33);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return ctx_r32.onMarkFormAsVisited($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](3, CheckoutComponent_div_5_tz_transport_luggages_3_Template, 1, 4, "tz-transport-luggages", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, CheckoutComponent_div_5_tz_mob_transport_luggages_5_Template, 1, 4, "tz-mob-transport-luggages", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](6, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](7, CheckoutComponent_div_5_div_7_Template, 5, 9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](8, "div", 22)(9, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](12, "div", 24)(13, "textarea", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("ngModelChange", function CheckoutComponent_div_5_Template_textarea_ngModelChange_13_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r33);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return ctx_r34.checkout.customNote = $event;
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](15, "div", 26)(16, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("click", function CheckoutComponent_div_5_Template_button_click_16_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵrestoreView"](_r33);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
      return ctx_r35.switchTab(1);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](19, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](20, CheckoutComponent_div_5_tz_checkout_profile_20_Template, 1, 1, "tz-checkout-profile", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](21, CheckoutComponent_div_5_tz_stripe_21_Template, 1, 3, "tz-stripe", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](22, CheckoutComponent_div_5_div_22_Template, 5, 4, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](23, "tz-checkout-payment", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("hidden", ctx_r2.activeTab !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("checkout", ctx_r2.checkout)("travellersForm", ctx_r2.travellersForm)("cartInfo", ctx_r2.cartInfo)("cartSummary", ctx_r2.cartSummary);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](4, 21, ctx_r2.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](6, 23, ctx_r2.platformService.isMobileDevice$));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.tzTravelInsurances);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](11, 25, "CHECKOUT.PAYMENT.CUSTOM_NOTE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpropertyInterpolate"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](14, 27, "CHECKOUT.PAYMENT.CUSTOM_NOTE_PLACEHOLDER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngModel", ctx_r2.checkout.customNote);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](31, _c4, ctx_r2.platformService.isMobileDevice));
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](18, 29, "CHECKOUT.GO_TO_PAYMENT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("hidden", ctx_r2.activeTab !== 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.profileFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.paymentFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx_r2.profileFormGroup && !ctx_r2.paymentFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("paymentForm", ctx_r2.paymentForm)("checkout", ctx_r2.checkout)("validTravellers", ctx_r2.travellersForm.valid)("cartData", ctx_r2.cartData);
  }
}

function CheckoutComponent_tz_cart_summary_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelement"](0, "tz-cart-summary", 42);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("cartSummary", ctx_r3.cartSummary)("cartData", ctx_r3.cartData)("luggageAmount", ctx_r3.checkout.additionalLuggagePrice)("selectedInsurance", ctx_r3.checkout.insurance);
  }
}

const _c5 = function (a0) {
  return {
    "mob-checkout-content": a0
  };
};

class CheckoutComponent {
  constructor(cartService, fb, tzTravellerService, tzCheckoutService, cartRoutingService, settingsService, searchDataService, checkoutDataService, userService, scrollService, loaderService, dialogService, translateService, platformService) {
    this.cartService = cartService;
    this.fb = fb;
    this.tzTravellerService = tzTravellerService;
    this.tzCheckoutService = tzCheckoutService;
    this.cartRoutingService = cartRoutingService;
    this.settingsService = settingsService;
    this.searchDataService = searchDataService;
    this.checkoutDataService = checkoutDataService;
    this.userService = userService;
    this.scrollService = scrollService;
    this.loaderService = loaderService;
    this.dialogService = dialogService;
    this.translateService = translateService;
    this.platformService = platformService;
    this.checkout = {
      isStripeValid: false,
      invoiceRequired: false,
      agreeToTerms: false,
      healthDeclarationChecked: false,
      baggageSelected: false,
      insurance: {
        selected: {},
        selectedIdx: null,
        validatedTC: false
      },
      additionalLuggagePrice: {
        listPrice: 0,
        listPriceCur: ''
      },
      transportID: ''
    };
    this.travellersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormGroup({});
    this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormGroup({});
    this.cartSummary = [];
    this.activeTab = 0; // 0: travellers tab, 1: payment tab

    this.summaryExpanded = false;
    this.insuranceTouched = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_28__.Subject();
  }

  get profileFormGroup() {
    var _a;

    return (_a = this.paymentForm) === null || _a === void 0 ? void 0 : _a.get('profile');
  }

  get paymentFormGroup() {
    var _a;

    return (_a = this.paymentForm) === null || _a === void 0 ? void 0 : _a.get('payment');
  }

  get transportFormArray() {
    return this.travellersForm.controls['transport'];
  }

  get insuranceSelected() {
    var _a, _b;

    return !this.tzTravelInsurances || ((_a = this.tzTravelInsurances) === null || _a === void 0 ? void 0 : _a.insurances.length) === 0 || ((_b = this.tzTravelInsurances) === null || _b === void 0 ? void 0 : _b.insurances.length) > 0 && this.checkout.insurance.selectedIdx !== null;
  }

  get hotelFormArray() {
    return this.travellersForm.controls['hotel'];
  }

  beforeUnload() {
    this.draftTravellerInfo();
  }

  ngOnInit() {
    this.scrollService.scrollToTop();
    this.initializeCheckoutComponent();
  }

  ngOnDestroy() {
    this.draftTravellerInfo();
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  updateHelper() {
    this.cartData = Object.assign(Object.assign({}, this.cartData), {
      helpers: this.tzCheckoutService.getHelpers(this.cartData, this.checkout.additionalLuggagePrice, this.checkout.insurance.selected)
    });
  }

  switchTab(tabId) {
    if (tabId === 1) {
      if (this.travellersForm.invalid || !this.insuranceSelected) {
        this.scrollService.scrollTo(this.onMarkFormAsVisited(), 70, true);
        return;
      } else if (this.cartInfo.FLIGHT_TRAIN && this.userService.IsLogged()) {
        for (const traveller of this.checkout.passengerDetails) {
          if (traveller.id !== undefined && traveller.id !== '' && traveller.updateTraveller && traveller.travellerUpdated) {
            const updateInfo = traveller.docNotRequired ? this.tzTravellerService.formProfileTraveller(traveller) : traveller;
            this.tzTravellerService.updateTraveller(updateInfo);
            traveller.travellerUpdated = false;
          } else if ((traveller.id === undefined || traveller.id === '') && traveller.saveTraveller) {
            this.tzTravellerService.saveTraveller(traveller);
          }
        }
      }

      if (this.cartInfo.FLIGHT_TRAIN) {
        const selctedInsurance = this.checkout.insurance;
        const hasSelectedOption = selctedInsurance.selectedIdx !== null && selctedInsurance.selectedIdx !== -1;

        if (hasSelectedOption) {
          this.getTravelInsurance(true);
          return;
        }

        this.getTravelInsurance();
      }
    }

    this.goto(tabId);
  }

  gotoSummary() {
    this.cartRoutingService.moveToSummary();
  }

  onInsuranceChange(insurance) {
    this.checkout.insurance = insurance;
    this.updateHelper();
  }

  onEmailFieldClicked() {
    this.dialogService.openSnackBarDialog(this.translateService.instant('NOTIFS.MAIL_EDIT_MSG'));
  }

  onMarkFormAsVisited(markUntil) {
    let invalidId = '';

    if (this.activeTab === 1) {
      return invalidId;
    }

    const checkFormValidity = (formGroupArr, formIdPrefix) => {
      for (const [idx, formGroup] of formGroupArr.entries()) {
        if (!formGroup) {
          return false;
        }

        const formId = formIdPrefix + idx;

        if (formGroup.invalid && invalidId === '') {
          invalidId = formId;
        }

        if (markUntil !== '' && markUntil === formId) {
          this.tzTravellerService.updateTravellerForm$.next(true);
          return true;
        }

        Object.keys(formGroup.controls).forEach(key => {
          formGroup.controls[key].markAsDirty();
          formGroup.controls[key].markAsTouched();
        });
      }

      this.tzTravellerService.updateTravellerForm$.next(true);
      return false;
    };

    if (this.travellersForm.invalid) {
      if (checkFormValidity(this.transportFormArray.controls, 'TRANSPORT_TRAVELER_')) {
        return invalidId;
      }

      if (checkFormValidity(this.hotelFormArray.controls, 'ACC_TRAVELER_')) {
        return invalidId;
      }

      if (checkFormValidity([this.travellersForm.controls['transfer']], 'TRANSFER_TRAVELER_')) {
        return invalidId;
      }

      if (checkFormValidity([this.travellersForm.controls['rental']], 'RENTAL_TRAVELER_')) {
        return invalidId;
      }
    }

    if (!this.insuranceSelected) {
      this.insuranceTouched = true;

      if (invalidId === '') {
        invalidId = 'TRAVEL_INSURANCE';
      }
    }

    return invalidId;
  }

  initializeCheckoutComponent() {
    this.cartService.reInit().then(cartData => {
      this.loaderService.triggerLoading.emit({
        loading: false
      });

      if (!cartData || !cartData.items || Object.keys(cartData.items).length === 0) {
        this.gotoSummary();
        return;
      }

      this.cartData = cartData;
      this.checkout.transportID = this.getTransportID();
      this.formCheckoutTravellers(cartData);
      this.updateCartInfos();
      this.formCheckoutPayment(this.cartData.helpers.payNowInt > 0);
      this.formDraftValues();
      this.checkSignedIn();
      this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$)).subscribe(() => {
        this.updateCartInfos();
        this.getTravelInsurance();
      });
      this.userService.loggedIn$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_30__.takeUntil)(this.destroy$)).subscribe(isLogged => {
        this.formProfileData();
      });
    });
  }

  updateCartInfos() {
    this.cartSummary = this.tzCheckoutService.formCheckoutCartSummary(this.cartData.items);
    this.checkoutLuggages = this.tzCheckoutService.formTransportLuggage(this.cartData);
    this.cartData.helpers = this.tzCheckoutService.getHelpers(this.cartData, this.checkout.additionalLuggagePrice, this.checkout.insurance.selected);
  }

  formCheckoutTravellers(cartData) {
    const group = {
      transport: this.fb.array([]),
      hotel: this.fb.array([])
    };
    this.cartInfo = this.tzCheckoutService.formCartTravellersData(cartData);

    if (this.cartInfo.TRANSFER) {
      this.checkout.transferPassenger = {
        type: _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_0__.TravellerType.ADULT
      };
      group.transfer = this.fb.group(this.tzTravellerService.createTravellerGroup('transfer'));
    }

    if (this.cartInfo.RENTAL) {
      this.checkout.rentalPassenger = {
        type: _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_0__.TravellerType.ADULT,
        selectedAge: this.cartInfo.RENTAL.driversAge
      };
      group.rental = this.fb.group(this.tzTravellerService.createTravellerGroup('rental'));
    }

    this.travellersForm = this.fb.group(group);

    if (this.cartInfo.FLIGHT_TRAIN) {
      const travellers = this.tzTravellerService.newFlightTrainTravellers(this.cartInfo.FLIGHT_TRAIN);
      this.checkout.passengerDetails = travellers;

      for (const traveller of travellers) {
        this.transportFormArray.push(this.fb.group(this.tzTravellerService.createTravellerGroup('transport', traveller.docNotRequired)));
      }
    }

    if (this.cartInfo.ACC) {
      const travellers = this.tzTravellerService.newAccTravellers(this.cartInfo.ACC);
      this.checkout.hotelPassengers = travellers;

      for (const traveller of travellers) {
        this.hotelFormArray.push(this.fb.group(this.tzTravellerService.createTravellerGroup('acc')));
      }
    }
  }

  formCheckoutPayment(formStripe) {
    var _a;

    const group = {
      profile: this.fb.group(this.tzCheckoutService.getProfileGroup()),
      billing: this.fb.group(this.tzCheckoutService.getBillingGroup())
    };

    if (formStripe) {
      group.payment = this.fb.group(this.tzCheckoutService.getPaymentGroup());
    }

    this.paymentForm = this.fb.group(group);
    this.tzCheckoutService.setBillingValue((_a = this.paymentForm) === null || _a === void 0 ? void 0 : _a.get('billing'));
  }

  setDraftValues(checkoutDataStr) {
    var _a;

    if (!checkoutDataStr || checkoutDataStr === '') {
      return;
    }

    const checkoutData = JSON.parse(this.tzCheckoutService.formCheckoutDraftValues(checkoutDataStr, this.cartInfo, this.checkout, {
      transport: this.transportFormArray,
      hotel: this.hotelFormArray
    }));

    if (!this.paymentFormGroup && checkoutData.paymentFormValue.payment) {
      delete checkoutData.paymentFormValue.payment;
    }

    this.checkout = checkoutData.checkoutData;
    this.getTravelInsurance();
    this.travellersForm.patchValue(Object.assign(Object.assign({}, this.travellersForm.value), checkoutData.travellersFormValue));
    this.paymentForm.patchValue(Object.assign(Object.assign({}, this.paymentForm.value), checkoutData.paymentFormValue)); // this.switchTab(checkoutData.activeTab);

    this.updateHelper();
    this.draftTravellerInfo();
    this.tzCheckoutService.setBillingValidators((_a = this.paymentForm) === null || _a === void 0 ? void 0 : _a.get('billing'), this.checkout.invoiceRequired);

    if (this.cartData.helpers.payNowInt > 0) {
      this.checkout.isStripeValid = false;
    }
  }

  getTransportID() {
    if (this.cartData.items) {
      for (const item of this.cartData.items) {
        if (item.serviceId === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__.ServiceId.FLIGHT) {
          return item.selectedItem.data.id;
        }
      }
    }

    return '';
  }

  draftTravellerInfo() {
    this.checkout.transportID = this.getTransportID();
    const checkoutDataStr = JSON.stringify({
      travellersFormValue: this.travellersForm.value,
      paymentFormValue: this.paymentForm.value,
      checkoutData: this.checkout,
      activeTab: this.activeTab
    });
    _core_utils_storage_manager_util__WEBPACK_IMPORTED_MODULE_1__.StorageManagerUtil.set('checkoutFormData', checkoutDataStr);
    this.checkoutDataService.setDraftTravellerInfo(this.searchDataService.getCombId(), {
      data: checkoutDataStr
    }).subscribe(() => {}, failure => {
      console.log('Draft update failed: ', failure);
    });
  }

  formDraftValues() {
    const checkoutDataStr = _core_utils_storage_manager_util__WEBPACK_IMPORTED_MODULE_1__.StorageManagerUtil.get('checkoutFormData');

    if (checkoutDataStr !== null) {
      this.setDraftValues(checkoutDataStr);
      return;
    }

    this.checkoutDataService.getDraftTravellerInfo(this.searchDataService.getCombId()).subscribe(response => {
      this.setDraftValues(response.data);
    }, failure => {
      console.log(failure);
      this.getTravelInsurance();
    });
  }

  getTravelInsurance(gotoPayment = false) {
    const bookingReq = this.tzCheckoutService.makeBookingReq(this.cartData.items, this.checkout, this.paymentForm);
    this.checkoutDataService.getInsurance(bookingReq).subscribe(response => {
      if (!response) {
        this.onInsuranceChange({
          selected: {},
          selectedIdx: null,
          validatedTC: false
        });
      }

      this.tzTravelInsurances = response;
      const selctedInsurance = this.checkout.insurance;
      const hasSelectedOption = selctedInsurance.selectedIdx !== null && selctedInsurance.selectedIdx !== -1 && response.insurances.length > selctedInsurance.selectedIdx;

      if (hasSelectedOption) {
        const priceChanged = response.insurances[selctedInsurance.selectedIdx].net.listPrice !== selctedInsurance.selected.net.listPrice;

        if (priceChanged) {
          this.onInsuranceChange({
            selected: {},
            selectedIdx: null,
            validatedTC: false
          });
        }

        if (gotoPayment) {
          if (priceChanged) {
            this.insuranceTouched = true;
            this.scrollService.scrollTo('TRAVEL_INSURANCE', 70, true);
          } else {
            this.goto(1);
          }
        }
      }
    }, failure => {
      console.log(failure);
    });
  }

  formProfileData() {
    var _a;

    const profileValue = this.profileFormGroup.value;

    if (this.userService.IsLogged()) {
      delete profileValue.repeatEmailID;
    } else if (!profileValue.repeatEmailID) {
      profileValue.repeatEmailID = '';
    }

    const profileFormGroup = this.fb.group(this.tzCheckoutService.getProfileGroup());

    if (profileValue.emailID !== '') {
      if (this.userService.IsLogged()) {
        delete profileValue.emailID;
      }

      profileFormGroup.patchValue(profileValue);
    }

    this.paymentForm = this.fb.group({
      billing: (_a = this.paymentForm) === null || _a === void 0 ? void 0 : _a.get('billing'),
      payment: this.paymentFormGroup,
      profile: profileFormGroup
    });
  }

  checkSignedIn() {
    const skipSignin = _core_utils_storage_manager_util__WEBPACK_IMPORTED_MODULE_1__.StorageManagerUtil.get('skipSignIn');

    if (skipSignin || this.userService.IsLogged()) {
      return;
    }

    const askToLogin = () => {
      this.userService.openLoginModel(undefined, true).then(() => this.formProfileData(), reason => console.log(reason));
    };

    if (_core_utils_storage_manager_util__WEBPACK_IMPORTED_MODULE_1__.StorageManagerUtil.get('trazler_customer_token', true)) {
      this.userService.getCustomer(false).then(() => {}, () => {
        askToLogin();
      });
      return;
    }

    askToLogin();
  }

  goto(tabId) {
    this.activeTab = tabId;
    this.scrollService.scrollToTop();
  }

}

CheckoutComponent.ɵfac = function CheckoutComponent_Factory(t) {
  return new (t || CheckoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_services_tzTraveller_service__WEBPACK_IMPORTED_MODULE_4__.TzTravellerService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_modules_checkout_services_tz_checkout_service__WEBPACK_IMPORTED_MODULE_5__.TzCheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_routing_service__WEBPACK_IMPORTED_MODULE_6__.CartRoutingService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_7__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_8__.SearchDataService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_modules_checkout_dataservices_checkout_data_service__WEBPACK_IMPORTED_MODULE_9__.CheckoutDataService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_10__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_11__.ScrollService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_modules_core_loader_service__WEBPACK_IMPORTED_MODULE_12__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_13__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_14__.PlatformService));
};

CheckoutComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵdefineComponent"]({
  type: CheckoutComponent,
  selectors: [["tz-checkout"]],
  hostBindings: function CheckoutComponent_HostBindings(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵlistener"]("beforeunload", function CheckoutComponent_beforeunload_HostBindingHandler() {
        return ctx.beforeUnload();
      }, false, _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵresolveWindow"]);
    }
  },
  decls: 8,
  vars: 13,
  consts: [["class", "back-btn-container", 4, "ngIf"], [4, "ngIf"], [1, "tz-container", "flex", "justify-center", 3, "ngClass"], [3, "cartSummary", "cartData", "luggageAmount", "selectedInsurance", 4, "ngIf"], [1, "back-btn-container"], [1, "tz-container", "flex", "align-center"], ["data-test", "back-to-basket", 1, "pointer", "body-2", "back-btn", 3, "click"], ["icon", "arrow_back_ios"], ["data-test", "checkout-tab", 1, "checkout-tab"], ["data-test", "checkout-travelers", 3, "ngClass", "click"], [1, "valid-check", 3, "ngClass"], ["data-test", "checkout-payment", 3, "ngClass", "click"], [1, "checkout-header"], [1, "basket-button"], ["icon", "arrow_back_ios", "data-test", "back-to-basket", 3, "click"], [3, "cartData", "summaryExpanded", "click", 4, "ngIf"], [3, "ngClass", "cartSummary", "cartData", "luggageAmount", "selectedInsurance"], [3, "cartData", "summaryExpanded", "click"], [3, "hidden"], [3, "checkout", "travellersForm", "cartInfo", "cartSummary", "markFormAsVisited"], ["data-test", "basket-baggage-information", 3, "checkoutLuggages", "checkout", "passengerDetails", "transportFormArray", "updateHelper", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], [1, "tz-form-container", "title-mb", "custom-note-container"], [1, "tz-form-container__title", "title-bold", "tz-form-title"], [1, "tz-form-container__form"], [1, "payment-note", 3, "placeholder", "ngModel", "ngModelChange"], [1, "traveller-btn-container", 3, "ngClass"], ["data-test", "confirm-and-go-to-payment", 1, "tz-btn", "tz-btn-yellow", "confirm-traveller", 3, "click"], [3, "formGroup", "emailLocked", 4, "ngIf"], [3, "formGroup", "checkout", "cartData", 4, "ngIf"], ["class", "tz-form-container mt-20 title-mb", 4, "ngIf"], [3, "paymentForm", "checkout", "validTravellers", "cartData"], ["data-test", "basket-baggage-information", 3, "checkoutLuggages", "checkout", "passengerDetails", "transportFormArray", "updateHelper"], [3, "ngClass"], [3, "tzTravelInsurances", "selectedInsurance", "insuranceChange", 4, "ngIf"], [3, "tzTravelInsurances", "selectedInsurance", "insuranceChange"], [3, "formGroup", "emailLocked"], [3, "formGroup", "checkout", "cartData"], [1, "tz-form-container", "mt-20", "title-mb"], [1, "tz-form-container__title", "title-bold"], ["class", "tz-form-container__form imprint-msg", 4, "ngIf"], [1, "tz-form-container__form", "imprint-msg"], [3, "cartSummary", "cartData", "luggageAmount", "selectedInsurance"]],
  template: function CheckoutComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](0, CheckoutComponent_div_0_Template, 15, 21, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](2, CheckoutComponent_ng_container_2_Template, 8, 11, "ng-container", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementStart"](4, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](5, CheckoutComponent_div_5_Template, 24, 33, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵtemplate"](6, CheckoutComponent_tz_cart_summary_6_Template, 1, 4, "tz-cart-summary", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](1, 5, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](3, 7, ctx.platformService.isMobileDevice$));
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpureFunction1"](11, _c5, ctx.platformService.isMobileDevice));
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", ctx.cartData);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_26__["ɵɵpipeBind1"](7, 9, ctx.platformService.isMobileDevice$) === false);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.NgIf, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_15__.TzIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_32__.NgClass, _shared_components_mobile_mob_cart_summary_button_mob_cart_summary_button_component__WEBPACK_IMPORTED_MODULE_16__.MobCartSummaryButtonComponent, _shared_components_cart_summary_cart_summary_component__WEBPACK_IMPORTED_MODULE_17__.CartSummaryComponent, _components_travellers_travellers_component__WEBPACK_IMPORTED_MODULE_18__.TravellersComponent, _components_transport_luggages_transport_luggages_component__WEBPACK_IMPORTED_MODULE_19__.TransportLuggagesComponent, _components_mob_transport_luggages_mob_transport_luggages_component__WEBPACK_IMPORTED_MODULE_20__.MobTransportLuggagesComponent, _components_travel_insurance_travel_insurance_component__WEBPACK_IMPORTED_MODULE_21__.TravelInsuranceComponent, _components_mob_travel_insurance_mob_travel_insurance_component__WEBPACK_IMPORTED_MODULE_22__.MobTravelInsuranceComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgModel, _components_checkout_profile_checkout_profile_component__WEBPACK_IMPORTED_MODULE_23__.ProfileInfoComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_27__.FormGroupDirective, _components_stripe_stripe_component__WEBPACK_IMPORTED_MODULE_24__.StripeComponent, _components_process_payment_process_payment_component__WEBPACK_IMPORTED_MODULE_25__.PaymentComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_32__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_31__.TranslatePipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  background-color: var(--color-main-background);\n  padding-bottom: 12.5rem;\n}\n[_nghost-%COMP%]   .back-btn-container[_ngcontent-%COMP%]   .tz-container[_ngcontent-%COMP%] {\n  position: relative;\n}\n[_nghost-%COMP%]   .back-btn-container[_ngcontent-%COMP%]   .tz-container[_ngcontent-%COMP%]   .back-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  left: 0;\n}\n[_nghost-%COMP%]   .checkout-tab[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n[_nghost-%COMP%]   .checkout-tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-semibold);\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  display: flex;\n  align-items: center;\n  color: var(--color-main-text);\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .checkout-tab[_ngcontent-%COMP%]   a.active-link[_ngcontent-%COMP%] {\n  color: var(--color-main-purple);\n}\n[_nghost-%COMP%]   .checkout-tab[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1.875rem;\n}\n[_nghost-%COMP%]   .valid-check[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 0.625rem;\n  background: url(/assets/icons/web/img/icons/done-passive-nobg.svg) no-repeat;\n}\n[_nghost-%COMP%]   .valid-check.valid[_ngcontent-%COMP%] {\n  background: url(/assets/icons/web/img/icons/done-nobg.svg) no-repeat;\n}\n[_nghost-%COMP%]   tz-cart-summary[_ngcontent-%COMP%] {\n  margin-left: 1.25rem;\n}\n[_nghost-%COMP%]   .tz-container[_ngcontent-%COMP%]   .tz-form-container.mt-20[_ngcontent-%COMP%], [_nghost-%COMP%]   .tz-container[_ngcontent-%COMP%]  .tz-form-container.mt-20 {\n  margin-top: 1.25rem;\n}\n[_nghost-%COMP%]   .custom-note-container[_ngcontent-%COMP%] {\n  margin: 1.25rem 0 0;\n}\n[_nghost-%COMP%]   .custom-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-normal);\n  font-size: 0.875rem;\n  line-height: 1.375rem;\n  letter-spacing: 0.25px;\n  color: var(--color-main-text);\n  outline: none;\n  vertical-align: top;\n  background: var(--color-light-footer-grey);\n  border: 0.5px solid var(--color-search-input-border);\n  border-radius: 4px;\n  height: 6.875rem;\n  width: 100%;\n  padding: 0.75rem;\n}\n[_nghost-%COMP%]   .custom-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n  color: rgba(47, 10, 77, 0.4);\n}\n[_nghost-%COMP%]   .custom-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n  background: transparent;\n  border-color: var(--color-main-purple);\n}\n[_nghost-%COMP%]   .confirm-traveller[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n}\n.mob-checkout-content[_ngcontent-%COMP%] {\n  padding-bottom: 3.5rem;\n}\n.insurance-touched[_ngcontent-%COMP%]     .tz-insurance-option, .insurance-touched[_ngcontent-%COMP%]     .tz-insurance-option.no-insurance-container {\n  outline: 1px var(--color-primary-error) solid;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLDhDQUFBO0VBQ0EsdUJBQUE7QUFDSjtBQUNJO0VBQ0ksa0JBQUE7QUFDUjtBQUNRO0VBQ0ksa0JBQUE7RUFDQSxPQUFBO0FBQ1o7QUFHSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7QUFEUjtBQUdRO0VBQ0ksd0NBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBRlo7QUFJWTtFQUNJLCtCQUFBO0FBRmhCO0FBS1k7RUFDSSxxQkFBQTtBQUhoQjtBQVFJO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUNBLDRFQUFBO0FBTlI7QUFRUTtFQUNJLG9FQUFBO0FBTlo7QUFVSTtFQUNJLG9CQUFBO0FBUlI7QUFlWTtFQUNJLG1CQUFBO0FBYmhCO0FBa0JJO0VBQ0ksbUJBQUE7QUFoQlI7QUFrQlE7RUFDSSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBRUEsMENBQUE7RUFDQSxvREFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFqQlo7QUFtQlk7RUFDSSw0QkFBQTtBQWpCaEI7QUFvQlk7RUFDSSx1QkFBQTtFQUNBLHNDQUFBO0FBbEJoQjtBQXVCSTtFQUNJLGtCQUFBO0FBckJSO0FBeUJBO0VBQ0ksc0JBQUE7QUF0Qko7QUEwQkk7RUFDSSw2Q0FBQTtBQXZCUiIsImZpbGUiOiJjaGVja291dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWJhY2tncm91bmQpO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMi41cmVtO1xuXG4gICAgLmJhY2stYnRuLWNvbnRhaW5lciAudHotY29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgIC5iYWNrLWJ0biB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNoZWNrb3V0LXRhYiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICBhIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcblxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10ZXh0KTtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgJi5hY3RpdmUtbGluayB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDEuODc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnZhbGlkLWNoZWNrIHtcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb25zL3dlYi9pbWcvaWNvbnMvZG9uZS1wYXNzaXZlLW5vYmcuc3ZnKSBuby1yZXBlYXQ7XG5cbiAgICAgICAgJi52YWxpZCB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaW1nL2ljb25zL2RvbmUtbm9iZy5zdmcpIG5vLXJlcGVhdDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR6LWNhcnQtc3VtbWFyeSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xuICAgIH1cblxuICAgIC50ei1jb250YWluZXIge1xuXG4gICAgICAgIC50ei1mb3JtLWNvbnRhaW5lcixcbiAgICAgICAgJjo6bmctZGVlcCAudHotZm9ybS1jb250YWluZXIge1xuICAgICAgICAgICAgJi5tdC0yMCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jdXN0b20tbm90ZS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW46IDEuMjVyZW0gMCAwO1xuXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3NXJlbTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10ZXh0KTtcbiAgICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1saWdodC1mb290ZXItZ3JleSk7XG4gICAgICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWNvbG9yLXNlYXJjaC1pbnB1dC1ib3JkZXIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiA2Ljg3NXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcblxuICAgICAgICAgICAgJjo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKDQ3LCAxMCwgNzcsIDAuNCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbmZpcm0tdHJhdmVsbGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgIH1cbn1cblxuLm1vYi1jaGVja291dC1jb250ZW50IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy41cmVtO1xufVxuXG4uaW5zdXJhbmNlLXRvdWNoZWQgOjpuZy1kZWVwIHtcbiAgICAudHotaW5zdXJhbmNlLW9wdGlvbiwgLnR6LWluc3VyYW5jZS1vcHRpb24ubm8taW5zdXJhbmNlLWNvbnRhaW5lciB7XG4gICAgICAgIG91dGxpbmU6IDFweCB2YXIoLS1jb2xvci1wcmltYXJ5LWVycm9yKSBzb2xpZDtcbiAgICB9XG59XG4iXX0= */", "@media (max-width: 920px) {\n  [_nghost-%COMP%] {\n    background-color: var(--color-main-background-mobile);\n    padding-bottom: 0;\n  }\n  [_nghost-%COMP%]   .payment-note[_ngcontent-%COMP%] {\n    font-style: italic;\n    font-weight: 400;\n    font-size: 0.75rem;\n    line-height: 0.75rem;\n    color: var(--color-grey-ligth);\n  }\n  [_nghost-%COMP%]   .tz-container[_ngcontent-%COMP%] {\n    overflow-x: hidden;\n  }\n  [_nghost-%COMP%]   tz-cart-summary[_ngcontent-%COMP%] {\n    margin-left: unset;\n    display: block;\n    max-height: 0px;\n    overflow: hidden;\n    transition: max-height 0.5s;\n  }\n  [_nghost-%COMP%]   tz-cart-summary.expand[_ngcontent-%COMP%] {\n    max-height: 1500px;\n  }\n  [_nghost-%COMP%]   tz-cart-summary[_ngcontent-%COMP%]     .cart-summary-container {\n    width: 100%;\n  }\n  [_nghost-%COMP%]   .custom-note-container[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  [_nghost-%COMP%]   .custom-note-container[_ngcontent-%COMP%]   .tz-form-container__title[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  [_nghost-%COMP%]   .custom-note-container[_ngcontent-%COMP%]   .tz-form-container__form[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem;\n    border-color: var(--color-main-text-mobile);\n  }\n  [_nghost-%COMP%]   .custom-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    line-height: 0.75rem;\n    color: var(--color-main-text);\n    background: var(--color-primary-white);\n    border: 1px solid var(--color-gray-light);\n    width: 100%;\n    height: 10.625rem;\n    padding: 1rem;\n  }\n  [_nghost-%COMP%]   .custom-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]::placeholder {\n    color: var(--color-gray-light);\n  }\n  [_nghost-%COMP%]   .custom-note-container[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%]:focus {\n    border-color: var(--color-main-purple);\n  }\n  [_nghost-%COMP%]   .confirm-traveller[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    line-height: 1.5rem;\n    font-weight: var(--font-weight-regular);\n    color: var(--color-primary-white);\n    background-color: var(--color-yellow-selected);\n    padding: 0.5rem 1rem;\n    height: 2.5rem;\n    box-shadow: none;\n    margin: 0.5rem 1rem;\n    width: -webkit-fill-available;\n  }\n  [_nghost-%COMP%]   .traveller-btn-container[_ngcontent-%COMP%] {\n    background-color: var(--color-primary-white);\n  }\n}\n\n.checkout-header[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1rem;\n  font-weight: var(--font-weight-regular);\n  padding: 0.75rem 1rem;\n  text-align: center;\n  background-color: var(--color-primary-white);\n  position: relative;\n  color: var(--color-grey-mobile);\n}\n\n.basket-button[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  position: absolute;\n  left: 1rem;\n}\n\n.basket-button[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIiwiY2hlY2tvdXQuY29tcG9uZW50Lm1vYmlsZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9ESTtFQ2xESjtJQUVRLHFEQUFBO0lBQ0EsaUJBQUE7RUFETjtFQUdNO0lBQ0ksa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7SUFDQSw4QkFBQTtFQURWO0VBSU07SUFDSSxrQkFBQTtFQUZWO0VBS007SUFDSSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSwyQkFBQTtFQUhWO0VBS1U7SUFDSSxrQkFBQTtFQUhkO0VBT2M7SUFDSSxXQUFBO0VBTGxCO0VBVU07SUFDSSxTQUFBO0VBUlY7RUFVVTtJQUNJLFNBQUE7RUFSZDtFQVdVO0lBQ0ksb0JBQUE7SUFDQSwyQ0FBQTtFQVRkO0VBWVU7SUFDSSxrQkFBQTtJQUNBLG9CQUFBO0lBQ0EsNkJBQUE7SUFFQSxzQ0FBQTtJQUNBLHlDQUFBO0lBQ0EsV0FBQTtJQUNBLGlCQUFBO0lBQ0EsYUFBQTtFQVhkO0VBYWM7SUFDSSw4QkFBQTtFQVhsQjtFQWNjO0lBQ0ksc0NBQUE7RUFabEI7RUFpQk07SUFDSSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUNBQUE7SUFDQSxpQ0FBQTtJQUNBLDhDQUFBO0lBQ0Esb0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0VBZlY7RUFrQk07SUFDSSw0Q0FBQTtFQWhCVjtBQUNGOztBQW9CQTtFQUNJLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7QUFqQko7O0FBb0JBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFqQko7O0FBbUJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFqQlIiLCJmaWxlIjoiY2hlY2tvdXQuY29tcG9uZW50Lm1vYmlsZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG46aG9zdCB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1iYWNrZ3JvdW5kLW1vYmlsZSk7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuXG4gICAgICAgIC5wYXltZW50LW5vdGUge1xuICAgICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjc1cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXktbGlndGgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnR6LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICB0ei1jYXJ0LXN1bW1hcnkge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IHVuc2V0O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzO1xuXG4gICAgICAgICAgICAmLmV4cGFuZCB7XG4gICAgICAgICAgICAgICAgbWF4LWhlaWdodDogMTUwMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgICAgIC5jYXJ0LXN1bW1hcnktY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmN1c3RvbS1ub3RlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgIC50ei1mb3JtLWNvbnRhaW5lcl9fdGl0bGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnR6LWZvcm0tY29udGFpbmVyX19mb3JtIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcbiAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLW1haW4tdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ZXh0YXJlYSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRleHQpO1xuXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItZ3JheS1saWdodCk7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMC42MjVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMXJlbTtcblxuICAgICAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29uZmlybS10cmF2ZWxsZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctc2VsZWN0ZWQpO1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgd2lkdGg6IC13ZWJraXQtZmlsbC1hdmFpbGFibGU7XG4gICAgICAgIH1cblxuICAgICAgICAudHJhdmVsbGVyLWJ0bi1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5jaGVja291dC1oZWFkZXIge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICAgIHBhZGRpbmc6IDAuNzVyZW0gMXJlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LW1vYmlsZSlcbn1cblxuLmJhc2tldC1idXR0b24ge1xuICAgIHdpZHRoOiAxLjVyZW07XG4gICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDFyZW07XG5cbiAgICB0ei1pY29uIHtcbiAgICAgICAgd2lkdGg6IDFyZW07XG4gICAgICAgIGhlaWdodDogMXJlbTtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 45014:
/*!*****************************************************!*\
  !*** ./src/app/modules/checkout/checkout.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutModule": () => (/* binding */ CheckoutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./checkout-routing.module */ 82396);
/* harmony import */ var _checkout_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./checkout.component */ 27977);
/* harmony import */ var _components_travellers_travellers_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/travellers/travellers.component */ 39550);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _components_profile_travellers_profile_travellers_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/profile-travellers/profile-travellers.component */ 15793);
/* harmony import */ var _components_process_payment_process_payment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/process-payment/process-payment.component */ 85814);
/* harmony import */ var _components_checkout_profile_checkout_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/checkout-profile/checkout-profile.component */ 72868);
/* harmony import */ var _components_stripe_stripe_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/stripe/stripe.component */ 20808);
/* harmony import */ var _components_transport_luggages_transport_luggages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/transport-luggages/transport-luggages.component */ 3942);
/* harmony import */ var _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/pipes/date-range.pipe */ 82478);
/* harmony import */ var _components_travel_insurance_travel_insurance_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/travel-insurance/travel-insurance.component */ 56804);
/* harmony import */ var _components_mob_transport_luggages_mob_transport_luggages_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/mob-transport-luggages/mob-transport-luggages.component */ 54927);
/* harmony import */ var _components_mob_additional_luggages_mob_additional_luggages_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/mob-additional-luggages/mob-additional-luggages.component */ 11301);
/* harmony import */ var _components_mob_travel_insurance_mob_travel_insurance_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/mob-travel-insurance/mob-travel-insurance.component */ 21405);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);


















class CheckoutModule {
}
CheckoutModule.ɵfac = function CheckoutModule_Factory(t) { return new (t || CheckoutModule)(); };
CheckoutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineNgModule"]({ type: CheckoutModule });
CheckoutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineInjector"]({ providers: [_shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_9__.DateRangePipe, _angular_common__WEBPACK_IMPORTED_MODULE_15__.DatePipe], imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsetNgModuleScope"](CheckoutModule, { declarations: [_checkout_component__WEBPACK_IMPORTED_MODULE_1__.CheckoutComponent,
        _components_travellers_travellers_component__WEBPACK_IMPORTED_MODULE_2__.TravellersComponent,
        _components_profile_travellers_profile_travellers_component__WEBPACK_IMPORTED_MODULE_4__.ProfileTravellersComponent,
        _components_process_payment_process_payment_component__WEBPACK_IMPORTED_MODULE_5__.PaymentComponent,
        _components_checkout_profile_checkout_profile_component__WEBPACK_IMPORTED_MODULE_6__.ProfileInfoComponent,
        _components_stripe_stripe_component__WEBPACK_IMPORTED_MODULE_7__.StripeComponent,
        _components_transport_luggages_transport_luggages_component__WEBPACK_IMPORTED_MODULE_8__.TransportLuggagesComponent,
        _components_travel_insurance_travel_insurance_component__WEBPACK_IMPORTED_MODULE_10__.TravelInsuranceComponent,
        _components_mob_transport_luggages_mob_transport_luggages_component__WEBPACK_IMPORTED_MODULE_11__.MobTransportLuggagesComponent,
        _components_mob_additional_luggages_mob_additional_luggages_component__WEBPACK_IMPORTED_MODULE_12__.MobAdditionalLuggagesComponent,
        _components_mob_travel_insurance_mob_travel_insurance_component__WEBPACK_IMPORTED_MODULE_13__.MobTravelInsuranceComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_15__.CommonModule, _checkout_routing_module__WEBPACK_IMPORTED_MODULE_0__.CheckoutRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_16__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ }),

/***/ 72868:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/checkout/components/checkout-profile/checkout-profile.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileInfoComponent": () => (/* binding */ ProfileInfoComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _services_services_tzTraveller_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/services/tzTraveller.service */ 36894);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_form_error_tz_form_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/tz-form-error/tz-form-error.component */ 27779);
/* harmony import */ var _shared_components_mob_input_mob_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/mob-input/mob-input.component */ 97835);
/* harmony import */ var _shared_components_tz_phone_tz_phone_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/tz-phone/tz-phone.component */ 43689);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);











function ProfileInfoComponent_div_0_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 17)(6, "tz-form-error", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "TRAVELLER.FIRST_MIDDLE_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx_r1.formGroup);
} }
function ProfileInfoComponent_div_0_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "tz-mob-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r2.formGroup)("key", "firstName")("fieldType", "PROFILE_FIRST_MIDDLE_NAME")("title", "TRAVELLER.FIRST_MIDDLE_NAME");
} }
function ProfileInfoComponent_div_0_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 17)(6, "tz-form-error", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "TRAVELLER.LAST_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx_r3.formGroup);
} }
function ProfileInfoComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "tz-mob-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r4.formGroup)("key", "lastName")("fieldType", "PROFILE_LAST_NAME")("title", "TRAVELLER.LAST_NAME");
} }
const _c0 = function (a0) { return { "email-updated": a0 }; };
function ProfileInfoComponent_div_0_div_13_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function ProfileInfoComponent_div_0_div_13_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return !ctx_r12.formGroup.get("repeatEmailID") && ctx_r12.emailLocked.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 17)(6, "tz-form-error", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("readonly", !ctx_r5.formGroup.get("repeatEmailID"))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](6, _c0, !ctx_r5.formGroup.get("repeatEmailID")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "GENERAL.EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx_r5.formGroup);
} }
function ProfileInfoComponent_div_0_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "tz-mob-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r6.formGroup)("key", "emailID")("fieldType", "emailID")("title", "GENERAL.EMAIL");
} }
function ProfileInfoComponent_div_0_div_15_tz_form_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tz-form-error", 28);
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx_r14.formGroup);
} }
const _c1 = function (a0, a1) { return { focused: a0, invalid: a1 }; };
function ProfileInfoComponent_div_0_div_15_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25)(1, "tz-phone", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputFocused", function ProfileInfoComponent_div_0_div_15_Template_tz_phone_inputFocused_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); return ctx_r15.phoneFocused = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileInfoComponent_div_0_div_15_tz_form_error_5_Template, 1, 1, "tz-form-error", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c1, ctx_r7.phoneFocused, ctx_r7.isInValidField("phone")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r7.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "GENERAL.MOBILE_NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r7.phoneFocused);
} }
function ProfileInfoComponent_div_0_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "tz-mob-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r8.formGroup)("key", "phone")("fieldType", "PHONE")("title", "GENERAL.MOBILE_NUMBER");
} }
function ProfileInfoComponent_div_0_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "input", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](5, "span", 17)(6, "tz-form-error", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 2, "PROFILE.REPEAT_EMAIL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx_r9.formGroup);
} }
function ProfileInfoComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "tz-mob-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r10.formGroup)("key", "repeatEmailID")("fieldType", "EMAIL")("title", "PROFILE.REPEAT_EMAIL");
} }
function ProfileInfoComponent_div_0_div_19_div_1_tz_form_error_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "tz-form-error", 33);
} if (rf & 2) {
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("form", ctx_r19.formGroup);
} }
function ProfileInfoComponent_div_0_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 25)(1, "tz-phone", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("inputFocused", function ProfileInfoComponent_div_0_div_19_div_1_Template_tz_phone_inputFocused_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r20.phoneFocused = $event; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, ProfileInfoComponent_div_0_div_19_div_1_tz_form_error_5_Template, 1, 1, "tz-form-error", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction2"](6, _c1, ctx_r17.phoneFocused, ctx_r17.isInValidField("phone")));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r17.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 4, "GENERAL.MOBILE_NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r17.phoneFocused);
} }
function ProfileInfoComponent_div_0_div_19_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "tz-mob-input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r18.formGroup)("key", "phone")("fieldType", "PHONE")("title", "GENERAL.MOBILE_NUMBER");
} }
function ProfileInfoComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, ProfileInfoComponent_div_0_div_19_div_1_Template, 6, 9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, ProfileInfoComponent_div_0_div_19_div_2_Template, 2, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r11.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r11.platformService.isMobileDevice);
} }
function ProfileInfoComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "span", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4)(6, "form", 5)(7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](8, ProfileInfoComponent_div_0_div_8_Template, 7, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](9, ProfileInfoComponent_div_0_div_9_Template, 2, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, ProfileInfoComponent_div_0_div_10_Template, 7, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](11, ProfileInfoComponent_div_0_div_11_Template, 2, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](13, ProfileInfoComponent_div_0_div_13_Template, 7, 8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, ProfileInfoComponent_div_0_div_14_Template, 2, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](15, ProfileInfoComponent_div_0_div_15_Template, 6, 9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, ProfileInfoComponent_div_0_div_16_Template, 2, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, ProfileInfoComponent_div_0_div_17_Template, 7, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](18, ProfileInfoComponent_div_0_div_18_Template, 2, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, ProfileInfoComponent_div_0_div_19_Template, 3, 2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24, "www.bloctel.gouv.fr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 15, "ACCOUNT.PROFILE.PERSONAL_INFO"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("id", "PAYMENT_PROFILE");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx_r0.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.formGroup.get("repeatEmailID") && !ctx_r0.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", !ctx_r0.formGroup.get("repeatEmailID") && ctx_r0.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.get("repeatEmailID") && !ctx_r0.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r0.formGroup.get("repeatEmailID"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 17, "CHECKOUT.PERSONAL_INFO_RULE"), " ");
} }
class ProfileInfoComponent {
    constructor(platformService) {
        this.platformService = platformService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroup({});
        this.emailLocked = new _angular_core__WEBPACK_IMPORTED_MODULE_5__.EventEmitter();
        this.phoneFocused = false;
    }
    ngOnInit() { }
    isInValidField(controlName) {
        return _services_services_tzTraveller_service__WEBPACK_IMPORTED_MODULE_0__.TzTravellerService.invalidControl(this.formGroup, controlName);
    }
}
ProfileInfoComponent.ɵfac = function ProfileInfoComponent_Factory(t) { return new (t || ProfileInfoComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_1__.PlatformService)); };
ProfileInfoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: ProfileInfoComponent, selectors: [["tz-checkout-profile"]], inputs: { formGroup: "formGroup" }, outputs: { emailLocked: "emailLocked" }, decls: 1, vars: 1, consts: [["class", "tz-form-container title-mb mb-0", "data-test", "basket-personal-information", 4, "ngIf"], ["data-test", "basket-personal-information", 1, "tz-form-container", "title-mb", "mb-0"], [1, "tz-form-container__title", "title-bold", "tz-form-title"], [3, "id"], [1, "tz-form-container__form"], [1, "form-group-container", 3, "formGroup"], [1, "field-row", "customer-name"], ["class", "tz-field", 4, "ngIf"], [1, "field-row"], ["class", "tz-field", 3, "click", 4, "ngIf"], ["class", "tz-field", 3, "ngClass", 4, "ngIf"], ["class", "field-row", 4, "ngIf"], [1, "personal-info-rule"], ["href", "https://www.bloctel.gouv.fr", "target", "_blank"], [1, "tz-field"], ["data-test", "basket-personal-input-first-name", "type", "text", "formControlName", "firstName", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", " ", 1, "field"], [1, "tz-field__name"], [1, "valid-check"], ["data-test", "payment-first-error-msg", "key", "firstName", "fieldType", "PROFILE_FIRST_MIDDLE_NAME", 3, "form"], ["ngDefaultControl", "", 3, "formGroup", "key", "fieldType", "title"], ["data-test", "basket-personal-input-last-name", "type", "text", "formControlName", "lastName", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", " ", 1, "field"], ["data-test", "payment-last-error-msg", "key", "lastName", "fieldType", "PROFILE_LAST_NAME", 3, "form"], [1, "tz-field", 3, "click"], ["data-test", "basket-personal-input-email", "type", "text", "formControlName", "emailID", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", " ", 1, "field", 3, "readonly", "ngClass"], ["data-test", "payment-email-error-msg", "key", "emailID", "fieldType", "EMAIL", 3, "form"], [1, "tz-field", 3, "ngClass"], [1, "field", 3, "formGroup", "inputFocused"], ["data-test", "payment-mobile-error-msg", "key", "phone", "fieldType", "PHONE", 3, "form", 4, "ngIf"], ["data-test", "payment-mobile-error-msg", "key", "phone", "fieldType", "PHONE", 3, "form"], ["data-test", "basket-personal-input-repeat-email", "type", "text", "formControlName", "repeatEmailID", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", " ", 1, "field"], ["data-test", "payment-repeat-email-error-msg", "key", "repeatEmailID", "fieldType", "EMAIL", 3, "form"], ["data-test", "basket-personal-mobile-number", 1, "field", 3, "formGroup", "inputFocused"], ["data-test", "payment-mobile-number-error-msg", "key", "phone", "fieldType", "PHONE", 3, "form", 4, "ngIf"], ["data-test", "payment-mobile-number-error-msg", "key", "phone", "fieldType", "PHONE", 3, "form"]], template: function ProfileInfoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, ProfileInfoComponent_div_0_Template, 25, 19, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.formGroup.get("firstName"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormControlName, _shared_components_tz_form_error_tz_form_error_component__WEBPACK_IMPORTED_MODULE_2__.TzFormErrorComponent, _shared_components_mob_input_mob_input_component__WEBPACK_IMPORTED_MODULE_3__.MobInputComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _shared_components_tz_phone_tz_phone_component__WEBPACK_IMPORTED_MODULE_4__.TzPhoneComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: [".tz-form-container__form[_ngcontent-%COMP%] {\n  padding: 1.125rem 1.25rem 0.625rem;\n}\n\n.personal-info-rule[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.125rem;\n  letter-spacing: 0.01em;\n  color: var(--color-primary-black);\n  margin-top: 0.625rem;\n}\n\n.personal-info-rule[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-main-purple);\n  text-decoration: underline;\n}\n\n@media (max-width: 920px) {\n  .field-row[_ngcontent-%COMP%]:not(:nth-child(2))   .tz-field[_ngcontent-%COMP%]:last-child   input[_ngcontent-%COMP%] {\n    border: transparent;\n  }\n  .field-row[_ngcontent-%COMP%]:not(:nth-child(2))   .tz-field[_ngcontent-%COMP%]:last-child   input.ng-touched.ng-invalid[_ngcontent-%COMP%] {\n    border-bottom: 1px solid var(--color-primary-error);\n  }\n  .field-row[_ngcontent-%COMP%]:not(:nth-child(2))   .tz-field[_ngcontent-%COMP%]:last-child   .ng-select-container[_ngcontent-%COMP%] {\n    border: transparent;\n  }\n  .field-row[_ngcontent-%COMP%]:not(:nth-child(2))   .tz-field[_ngcontent-%COMP%]:last-child   .ng-select.ng-select-single.ng-touched.ng-invalid[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%] {\n    border-bottom: 1px solid var(--color-primary-error);\n  }\n\n  .valid-check[_ngcontent-%COMP%]::after {\n    display: none;\n  }\n\n  .tz-form-container[_ngcontent-%COMP%]   .tz-form-container__title[_ngcontent-%COMP%] {\n    margin: 0;\n    color: var(--color-text-mobile);\n  }\n\n  .tz-form-container__form[_ngcontent-%COMP%] {\n    padding: 0.625rem 0;\n  }\n  .tz-form-container__form[_ngcontent-%COMP%]   .field-row[_ngcontent-%COMP%] {\n    padding: 0 1rem;\n  }\n\n  .personal-info-rule[_ngcontent-%COMP%] {\n    color: var(--color-text-mobile);\n    padding: 0 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNoZWNrb3V0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGtDQUFBO0FBREo7O0FBSUE7RUFDSSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQ0FBQTtFQUNBLG9CQUFBO0FBREo7O0FBR0k7RUFDSSwrQkFBQTtFQUNBLDBCQUFBO0FBRFI7O0FDc0NJO0VEL0JJO0lBQ0ksbUJBQUE7RUFIVjtFQU1NO0lBQ0ksbURBQUE7RUFKVjtFQU9NO0lBQ0ksbUJBQUE7RUFMVjtFQVFNO0lBQ0ksbURBQUE7RUFOVjs7RUFVRTtJQUNJLGFBQUE7RUFQTjs7RUFXTTtJQUNJLFNBQUE7SUFDQSwrQkFBQTtFQVJWOztFQVlFO0lBQ0ksbUJBQUE7RUFUTjtFQVdNO0lBQ0ksZUFBQTtFQVRWOztFQWtCRTtJQUNJLCtCQUFBO0lBQ0EsZUFBQTtFQWZOO0FBQ0YiLCJmaWxlIjoiY2hlY2tvdXQtcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuLnR6LWZvcm0tY29udGFpbmVyX19mb3JtIHtcbiAgICBwYWRkaW5nOiAxLjEyNXJlbSAxLjI1cmVtIDAuNjI1cmVtO1xufVxuXG4ucGVyc29uYWwtaW5mby1ydWxlIHtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYmxhY2spO1xuICAgIG1hcmdpbi10b3A6IDAuNjI1cmVtO1xuXG4gICAgYSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xuICAgIH1cbn1cblxuQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAuZmllbGQtcm93Om5vdCg6bnRoLWNoaWxkKDIpKSAudHotZmllbGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWR7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeS1lcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJvcmRlcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAubmctc2VsZWN0Lm5nLXNlbGVjdC1zaW5nbGUubmctdG91Y2hlZC5uZy1pbnZhbGlkIC5uZy1zZWxlY3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1wcmltYXJ5LWVycm9yKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICAudmFsaWQtY2hlY2s6OmFmdGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAudHotZm9ybS1jb250YWluZXIge1xuICAgICAgICAudHotZm9ybS1jb250YWluZXJfX3RpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHotZm9ybS1jb250YWluZXJfX2Zvcm0ge1xuICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbSAwO1xuXG4gICAgICAgIC5maWVsZC1yb3cge1xuICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gLmN1c3RvbWVyLW5hbWUge1xuICAgICAgICAvLyAgICAgYm9yZGVyLWJvdHRvbTogNHB4IHNvbGlkIHZhcigtLWNvbG9yLW1haW4tYmFja2dyb3VuZC1tb2JpbGUpO1xuICAgICAgICAvLyAgICAgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtO1xuICAgICAgICAvLyB9XG4gICAgfVxuXG4gICAgLnBlcnNvbmFsLWluZm8tcnVsZSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgIHBhZGRpbmc6IDAgMXJlbTtcbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 11301:
/*!**********************************************************************************************************!*\
  !*** ./src/app/modules/checkout/components/mob-additional-luggages/mob-additional-luggages.component.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobAdditionalLuggagesComponent": () => (/* binding */ MobAdditionalLuggagesComponent)
/* harmony export */ });
/* harmony import */ var _schemas_modules_flights_flight_luggage_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @schemas/modules/flights/flight-luggage.model */ 79890);
/* harmony import */ var _services_modules_checkout_utils_transport_luggages_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/checkout/utils/transport-luggages.utils */ 82882);
/* harmony import */ var _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/tools-service */ 67457);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/pipes/tz-currency.pipe */ 98967);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/tz-svg-icon/tz-svg-icon.component */ 28189);










function MobAdditionalLuggagesComponent_div_3_ng_container_2_div_5_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bagOption_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const passenger_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const bagTypeInfo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, ctx_r9.transportLuggagesUtil.getOption(passenger_r3.additionalLuggage, bagTypeInfo_r1.type, bagOption_r8.index).totalPrice, bagOption_r8.prices.listPriceCur), " ");
} }
function MobAdditionalLuggagesComponent_div_3_ng_container_2_div_5_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bagOption_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](2, 1, bagOption_r8.prices.listPrice, bagOption_r8.prices.listPriceCur), " ");
} }
const _c0 = function (a0) { return { "baggage-add-remove-btn--disabled": a0 }; };
function MobAdditionalLuggagesComponent_div_3_ng_container_2_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 15)(1, "div", 16)(2, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "div", 19)(8, "div", 20)(9, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](10, MobAdditionalLuggagesComponent_div_3_ng_container_2_div_5_div_1_div_10_Template, 3, 4, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](11, MobAdditionalLuggagesComponent_div_3_ng_container_2_div_5_div_1_div_11_Template, 3, 4, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "div", 24)(13, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MobAdditionalLuggagesComponent_div_3_ng_container_2_div_5_div_1_Template_div_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const bagOption_r8 = restoredCtx.$implicit; const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index; const bagTypeInfo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.luggageCombinationRemove(index_r4, bagOption_r8, bagTypeInfo_r1.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](14, "tz-svg-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](15, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MobAdditionalLuggagesComponent_div_3_ng_container_2_div_5_div_1_Template_div_click_17_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r17); const bagOption_r8 = restoredCtx.$implicit; const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).index; const bagTypeInfo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r19.luggageCombinationAdd(index_r4, bagOption_r8, bagTypeInfo_r1.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](18, "tz-svg-icon", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const bagOption_r8 = ctx.$implicit;
    const passenger_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2).$implicit;
    const bagTypeInfo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 9, bagTypeInfo_r1.txt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"]("\u00A0|\u00A0 ", ctx_r7.transportLuggagesUtil.formatWeightText(bagOption_r8.weightTexts, true), " \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r7.transportLuggagesUtil.optionPresent(passenger_r3.additionalLuggage, bagTypeInfo_r1.type, bagOption_r8.index) && ctx_r7.transportLuggagesUtil.getOption(passenger_r3.additionalLuggage, bagTypeInfo_r1.type, bagOption_r8.index).totalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r7.transportLuggagesUtil.optionPresent(passenger_r3.additionalLuggage, bagTypeInfo_r1.type, bagOption_r8.index) || !ctx_r7.transportLuggagesUtil.getOption(passenger_r3.additionalLuggage, bagTypeInfo_r1.type, bagOption_r8.index).totalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](11, _c0, !ctx_r7.transportLuggagesUtil.optionPresent(passenger_r3.additionalLuggage, bagTypeInfo_r1.type, bagOption_r8.index) || !ctx_r7.transportLuggagesUtil.getOption(passenger_r3.additionalLuggage, bagTypeInfo_r1.type, bagOption_r8.index).count));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("stretch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r7.transportLuggagesUtil.optionPresent(passenger_r3.additionalLuggage, bagTypeInfo_r1.type, bagOption_r8.index) ? ctx_r7.transportLuggagesUtil.getOption(passenger_r3.additionalLuggage, bagTypeInfo_r1.type, bagOption_r8.index).count : 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](13, _c0, ctx_r7.transportLuggagesUtil.disableLuggageSelection(passenger_r3.additionalLuggage, bagTypeInfo_r1.type, bagOption_r8, ctx_r7.flightLuggage[bagTypeInfo_r1.type].maxAllowed)));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("stretch", true);
} }
function MobAdditionalLuggagesComponent_div_3_ng_container_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, MobAdditionalLuggagesComponent_div_3_ng_container_2_div_5_div_1_Template, 19, 15, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passenger_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const bagTypeInfo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r5.flightLuggage[bagTypeInfo_r1.type][passenger_r3.type].options);
} }
function MobAdditionalLuggagesComponent_div_3_ng_container_2_div_6_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, "ADD_PASSENGER.REPLACE_INCLUDED_BAGGAGE"), " ");
} }
function MobAdditionalLuggagesComponent_div_3_ng_container_2_div_6_div_8_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MobAdditionalLuggagesComponent_div_3_ng_container_2_div_6_div_8_Template_span_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); const index_r4 = ctx_r29.index; const passenger_r3 = ctx_r29.$implicit; const bagTypeInfo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r28.removeSelectedLuggage(index_r4, ctx_r28.flightLuggage[bagTypeInfo_r1.type][passenger_r3.type].options[ctx_r28.selectedLuggageIndexesObj[index_r4]], bagTypeInfo_r1.type, index_r4); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "tz-svg-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const passenger_r3 = ctx_r33.$implicit;
    const index_r4 = ctx_r33.index;
    const bagTypeInfo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r27.flightLuggage[bagTypeInfo_r1.type][passenger_r3.type].options[ctx_r27.selectedLuggageIndexesObj[index_r4]].weightTexts.join(", "), " |\u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](4, 2, ctx_r27.flightLuggage[bagTypeInfo_r1.type][passenger_r3.type].options[ctx_r27.selectedLuggageIndexesObj[index_r4]].prices.listPrice, ctx_r27.flightLuggage[bagTypeInfo_r1.type][passenger_r3.type].options[ctx_r27.selectedLuggageIndexesObj[index_r4]].prices.listPriceCur), " ");
} }
function MobAdditionalLuggagesComponent_div_3_ng_container_2_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MobAdditionalLuggagesComponent_div_3_ng_container_2_div_6_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r36); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const index_r4 = ctx_r35.index; const passenger_r3 = ctx_r35.$implicit; const bagTypeInfo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit; const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r34.openPicker(index_r4, ctx_r34.flightLuggage[bagTypeInfo_r1.type][passenger_r3.type].options, bagTypeInfo_r1.type, passenger_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "tz-svg-icon", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, MobAdditionalLuggagesComponent_div_3_ng_container_2_div_6_div_7_Template, 3, 3, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](8, MobAdditionalLuggagesComponent_div_3_ng_container_2_div_6_div_8_Template, 7, 5, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const index_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index;
    const bagTypeInfo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 4, "FLIGHT.LUGGAGE.SELECT"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("stretch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.flightLuggage[bagTypeInfo_r1.type].replaceIncluded);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r6.selectedLuggageIndexesObj[index_r4] || ctx_r6.selectedLuggageIndexesObj[index_r4] === 0);
} }
function MobAdditionalLuggagesComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, MobAdditionalLuggagesComponent_div_3_ng_container_2_div_5_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](6, MobAdditionalLuggagesComponent_div_3_ng_container_2_div_6_Template, 9, 6, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const index_r4 = ctx.index;
    const bagTypeInfo_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx_r2.getTravellerName(index_r4), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r2.flightLuggage[bagTypeInfo_r1.type].combinable);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r2.flightLuggage[bagTypeInfo_r1.type].combinable);
} }
const _c1 = function (a0) { return { "not-combinable": a0 }; };
function MobAdditionalLuggagesComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 7)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, MobAdditionalLuggagesComponent_div_3_ng_container_2_Template, 7, 3, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const bagTypeInfo_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](2, _c1, !ctx_r0.flightLuggage[bagTypeInfo_r1.type].combinable));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r0.passengerDetails);
} }
const _c2 = function (a0) { return { "tz-mob-picker-disabled-btn": a0 }; };
class MobAdditionalLuggagesComponent {
    constructor(translateService, tzCurrencyPipe, modalService) {
        this.translateService = translateService;
        this.tzCurrencyPipe = tzCurrencyPipe;
        this.modalService = modalService;
        this.transportLuggagesUtil = _services_modules_checkout_utils_transport_luggages_utils__WEBPACK_IMPORTED_MODULE_1__.TransportLuggagesUtil;
        this.openedOptionsStringIdx = '';
        this.selectedLuggageIndexesObj = {};
        this.defaultPassengerDetails = [];
    }
    get isPassengerDetailsChanged() {
        const newPassengerDetails = this.setDiffPassengerDetails();
        let isChanged = false;
        this.defaultPassengerDetails.map((item, index) => {
            const passengerDetailsItem = newPassengerDetails[index];
            const defaultCabin = passengerDetailsItem.cabin;
            const defaultCheckIn = passengerDetailsItem.checkIn;
            if (item.cabin.bagsCount !== defaultCabin.bagsCount ||
                item.cabin.listPrice !== defaultCabin.listPrice ||
                item.checkIn.bagsCount !== defaultCheckIn.bagsCount ||
                item.checkIn.listPrice !== defaultCheckIn.listPrice) {
                isChanged = true;
            }
        });
        return isChanged;
    }
    ngOnInit() {
        this.flightLuggage = this.data.flightLuggages;
        this.passengerDetails = this.data.passengerDetails;
        this.bagTypes = [
            {
                txt: this.flightLuggage.checkIn && this.flightLuggage.checkIn.replaceIncluded
                    ? 'ADD_PASSENGER.Checked_bag_add'
                    : 'ADD_PASSENGER.Checked_bag',
                type: _schemas_modules_flights_flight_luggage_model__WEBPACK_IMPORTED_MODULE_0__.FlightLuggageOptionTypes.CHECKIN,
            },
        ];
        this.setDefaultPassengerDetails();
        this.setSelectedLuggageIndexes();
    }
    getTravellerName(idx) {
        return _services_modules_checkout_utils_transport_luggages_utils__WEBPACK_IMPORTED_MODULE_1__.TransportLuggagesUtil.getTravellerName(this.data.passengerDetails[idx], idx, this.translateService);
    }
    luggageCombinationAdd(idx, option, bagType) {
        this.passengerDetails[idx].additionalLuggage = _services_modules_checkout_utils_transport_luggages_utils__WEBPACK_IMPORTED_MODULE_1__.TransportLuggagesUtil.formLuggageCombination(this.passengerDetails[idx].additionalLuggage, option, bagType);
        this.listPriceCurrency = option.prices.listPriceCur;
    }
    luggageCombinationRemove(idx, option, bagType) {
        this.passengerDetails[idx].additionalLuggage = _services_modules_checkout_utils_transport_luggages_utils__WEBPACK_IMPORTED_MODULE_1__.TransportLuggagesUtil.removeLuggageCombination(this.passengerDetails[idx].additionalLuggage, option, bagType);
        this.listPriceCurrency = option.prices.listPriceCur;
    }
    confirmLuggageSelection() {
        this.modalService.dismiss({
            passengerDetails: this.passengerDetails,
            listPriceCurrency: this.listPriceCurrency,
        });
    }
    openPicker(index, options, bagType, passenger) {
        const wheels = [
            { display: this.translateService.instant('FLIGHT.LUGGAGE.NO_BAG'), value: -1 },
        ];
        let selectedIndex;
        let i = 0;
        options.map((bagOption) => {
            var _a;
            if ((_a = this.transportLuggagesUtil.getOption(passenger.additionalLuggage, bagType, bagOption.index)) === null || _a === void 0 ? void 0 : _a.count) {
                selectedIndex = i;
            }
            const price = this.tzCurrencyPipe.transform(bagOption.prices.listPrice, bagOption.prices.listPriceCur);
            wheels.push({
                display: bagOption.weightTexts.join(', ') + ' ' + price,
                value: i,
            });
            i++;
        });
        this.modalService
            .openPickerModal({ wheels, selected: [selectedIndex] }, { title: 'FLIGHT.LUGGAGE.SELECT' })
            .then((modal) => {
            var _a, _b;
            if ((_a = modal.data) === null || _a === void 0 ? void 0 : _a.selected) {
                const modalSelectedItem = parseInt((_b = modal.data) === null || _b === void 0 ? void 0 : _b.selected[0], 10);
                if (selectedIndex || selectedIndex === 0) {
                    this.luggageCombinationRemove(index, options[selectedIndex], bagType);
                }
                if (modalSelectedItem !== -1) {
                    const selectedOptionIndex = parseInt(modal.data.selected[0], 10);
                    this.selectedLuggageIndexesObj[index] = selectedOptionIndex;
                    this.luggageCombinationAdd(index, options[selectedOptionIndex], bagType);
                }
                if (modalSelectedItem === -1 && (selectedIndex || selectedIndex === 0)) {
                    this.luggageCombinationRemove(index, options[selectedIndex], bagType);
                    delete this.selectedLuggageIndexesObj[index];
                }
            }
        });
    }
    removeSelectedLuggage(idx, option, bagType, selectedIndex) {
        this.passengerDetails[idx].additionalLuggage = _services_modules_checkout_utils_transport_luggages_utils__WEBPACK_IMPORTED_MODULE_1__.TransportLuggagesUtil.removeLuggageCombination(this.passengerDetails[idx].additionalLuggage, option, bagType);
        this.listPriceCurrency = option.prices.listPriceCur;
        delete this.selectedLuggageIndexesObj[selectedIndex];
    }
    openOptionItem(index) {
        this.openedOptionsStringIdx = this.openedOptionsStringIdx + index;
    }
    setSelectedLuggageIndexes() {
        this.bagTypes.map((bagTypeInfo) => {
            this.passengerDetails.map((passenger, index) => {
                this.flightLuggage[bagTypeInfo.type][passenger.type].options.map((bagOption, index2) => {
                    if (this.transportLuggagesUtil.optionPresent(passenger.additionalLuggage, bagTypeInfo.type, bagOption.index)) {
                        this.selectedLuggageIndexesObj[index] = index2;
                    }
                });
            });
        });
    }
    setDefaultPassengerDetails() {
        this.defaultPassengerDetails = this.setDiffPassengerDetails();
    }
    setDiffPassengerDetails() {
        const passengerDetailsArr = [];
        this.passengerDetails.map((passengerDetails) => {
            let checkInListPrice = '';
            for (const [key, value] of Object.entries(passengerDetails.additionalLuggage.checkIn.options)) {
                checkInListPrice = value.optionPrice.listPrice + '_';
            }
            let cabinListPrice = '';
            for (const [key, value] of Object.entries(passengerDetails.additionalLuggage.cabin.options)) {
                cabinListPrice = value.optionPrice.listPrice + '_';
            }
            passengerDetailsArr.push({
                checkIn: {
                    bagsCount: passengerDetails.additionalLuggage.checkIn.bagsCount,
                    listPrice: checkInListPrice,
                },
                cabin: { bagsCount: passengerDetails.additionalLuggage.cabin.bagsCount, listPrice: cabinListPrice },
            });
        });
        return _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(passengerDetailsArr);
    }
}
MobAdditionalLuggagesComponent.ɵfac = function MobAdditionalLuggagesComponent_Factory(t) { return new (t || MobAdditionalLuggagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_3__.TzCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService)); };
MobAdditionalLuggagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: MobAdditionalLuggagesComponent, selectors: [["tz-mob-additional-luggages"]], decls: 9, vars: 7, consts: [[1, "additional-luggages-container"], [1, "flight-additional-luggages__options"], [1, "additional-luggages-container__divider"], ["class", "additional-luggages-container__form", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "additional-luggages-container__bottom-box", "bottom-box", "tz-fixed-bottom"], [1, "bottom-box__confirm-button-wrapper"], ["data-mob", "mob-checkout-confirm-luggage-selection", 1, "tz-mob-picker-btn", 3, "ngClass", "click"], [1, "additional-luggages-container__form", 3, "ngClass"], [4, "ngFor", "ngForOf"], [1, "flight-additional-luggage"], ["data-mob", "mob-checkout-traveller-name", 1, "traveller-name"], ["class", "item-container", 4, "ngIf"], [4, "ngIf"], [1, "item-container"], ["class", "luggage-type-row", 4, "ngFor", "ngForOf"], [1, "luggage-type-row"], [1, "luggage-text-box"], ["data-mob", "mob-checkout-bag-type-info"], ["data-mob", "mob-checkout-bag-option-text"], [1, "luggage-selections"], [1, "luggage-selections__action-box"], [1, "luggage-selections__currency-box"], ["data-mob", "mob-checkout-currency-type", 4, "ngIf"], ["data-mob", "mob-checkout-currency-val", 4, "ngIf"], [1, "luggage-selections__counter-box"], ["data-mob", "mob-checkout-remove-luggage", 1, "plus-minus", "baggage-add-remove-btn", 3, "ngClass", "click"], ["icon", "baggage-minus-btn", 1, "mob-checkout-remove-luggage-icon", 3, "stretch"], ["data-mob", "mob-checkout-luggage-quantity", 1, "added-count"], ["data-mob", "mob-checkout-add-luggage", 1, "plus-minus", "baggage-add-remove-btn", 3, "ngClass", "click"], ["icon", "baggage-plus-btn", 1, "mob-checkout-remove-luggage-icon", 3, "stretch"], ["data-mob", "mob-checkout-currency-type"], ["data-mob", "mob-checkout-currency-val"], [1, "luggage-select-picker", 3, "click"], [1, "luggage-select-picker__title"], [1, "luggage-select-picker__icon"], ["icon", "luggage-select-picker", 3, "stretch"], ["class", "luggage-select-picker__replace-included-baggage", 4, "ngIf"], ["class", "selected-luggage-item", 4, "ngIf"], [1, "luggage-select-picker__replace-included-baggage"], [1, "selected-luggage-item"], [1, "selected-luggage-item__price"], [1, "selected-luggage-item__close-btn", 3, "click"], ["icon", "selected-luggage-item-close"]], template: function MobAdditionalLuggagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, MobAdditionalLuggagesComponent_div_3_Template, 3, 4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "div", 5)(6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function MobAdditionalLuggagesComponent_Template_div_click_6_listener() { return ctx.confirmLuggageSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.bagTypes);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](5, _c2, !ctx.isPassengerDetailsChanged));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](8, 3, "GENERAL.CONFIRM"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_5__.TzSvgIconComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe, _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_3__.TzCurrencyPipe], styles: [".additional-luggages-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  background-color: var(--color-mobile-backaground);\n  height: 100%;\n  padding-bottom: 3.5rem;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .closed-container-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.875rem 1rem 0.25rem 2rem;\n  background: var(--color-primary-white);\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .closed-container-item__info_checked-bag[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  color: var(--color-text-typography-gray);\n  margin: 0;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .closed-container-item__info_selected-additional[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  color: var(--color-text-mobile);\n  margin: 0;\n}\n.additional-luggages-container__divider[_ngcontent-%COMP%] {\n  height: 0.0625rem;\n  background-color: var(--color-border-mobile);\n}\n.additional-luggages-container__form[_ngcontent-%COMP%] {\n  background-color: var(--color-mobile-backaground);\n  padding: 0 0 5rem;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .tz-form-container__title.no-baggage[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  border-radius: 0.25rem;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.0625rem;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .luggage-type-row[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-white);\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .luggage-type-row[_ngcontent-%COMP%]   .luggage-selections[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: end;\n  padding: 0.625rem 1rem;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .luggage-type-row[_ngcontent-%COMP%]   .luggage-selections__currency-box[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  color: var(--color-text-mobile);\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .luggage-type-row[_ngcontent-%COMP%]   .luggage-selections__action-box[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.8125rem;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .luggage-type-row[_ngcontent-%COMP%]   .luggage-selections__counter-box[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.25rem;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .luggage-type-row[_ngcontent-%COMP%]   .luggage-selections__counter-box[_ngcontent-%COMP%]   .plus-minus[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 0.0625rem solid var(--color-main-purple);\n  border-radius: 0.1875rem;\n  cursor: pointer;\n  font-size: 0.938rem;\n  color: var(--color-main-purple);\n  opacity: 0.8;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .luggage-type-row[_ngcontent-%COMP%]   .luggage-selections__counter-box[_ngcontent-%COMP%]   .plus-minus.baggage-add-remove-btn--disabled[_ngcontent-%COMP%] {\n  border-color: var(--color-border-mobile);\n  color: var(--color-gray-light);\n  pointer-events: none;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .luggage-type-row[_ngcontent-%COMP%]   .luggage-selections__counter-box[_ngcontent-%COMP%]   .plus-minus.tz-icon-minus[_ngcontent-%COMP%] {\n  font-size: 0.125rem;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .luggage-type-row[_ngcontent-%COMP%]   .luggage-selections__counter-box[_ngcontent-%COMP%]   .added-count[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 3.75rem;\n  border: 0.0625rem solid var(--color-gray-light);\n  border-radius: 0.25rem;\n  font-weight: 400;\n  font-size: 1rem;\n  color: var(--color-text-mobile);\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .item-container[_ngcontent-%COMP%]   .luggage-text-box[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem 0.5rem;\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  color: var(--color-text-mobile);\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .traveller-name[_ngcontent-%COMP%] {\n  padding: 0.625rem 1rem;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: var(--color-text-mobile);\n}\n.additional-luggages-container__bottom-box[_ngcontent-%COMP%]   .bottom-box__confirm-button-wrapper[_ngcontent-%COMP%] {\n  background: var(--color-mob-white);\n  padding: 0.5rem 1rem;\n}\n.additional-luggages-container__bottom-box[_ngcontent-%COMP%]   .bottom-box__confirm-button-wrapper[_ngcontent-%COMP%]   .confirm-luggages[_ngcontent-%COMP%] {\n  width: 100%;\n  font-weight: 500;\n  font-size: 0.875rem;\n  height: 2.5rem;\n  color: var(--color-main-text-mobile);\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .luggage-select-picker[_ngcontent-%COMP%] {\n  background: var(--color-mob-white);\n  padding: 0.5rem 1rem;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .luggage-select-picker__title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  color: var(--color-text-mobile);\n  font-weight: 600;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .luggage-select-picker__icon[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .luggage-select-picker__replace-included-baggage[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  color: var(--color-grey-light-mobile);\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .selected-luggage-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  height: 2rem;\n  background: var(--color-mob-white);\n  border: 1px solid var(--color-border-mobile);\n  border-radius: 1rem;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  color: var(--color-text-mobile);\n  margin: 0.625rem;\n  padding: 0.25rem 0.25rem 0.25rem 0.5rem;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .selected-luggage-item__price[_ngcontent-%COMP%] {\n  font-weight: 600;\n}\n.additional-luggages-container[_ngcontent-%COMP%]   .selected-luggage-item__close-btn[_ngcontent-%COMP%] {\n  margin-left: 0.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1hZGRpdGlvbmFsLWx1Z2dhZ2VzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsOEJBQUE7RUFDQSxpREFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtFQUNBLG1DQUFBO0VBQ0Esc0NBQUE7QUFDUjtBQUVZO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxTQUFBO0FBQWhCO0FBR1k7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLFNBQUE7QUFEaEI7QUFNSTtFQUNJLGlCQUFBO0VBQ0EsNENBQUE7QUFKUjtBQU9JO0VBQ0ksaURBQUE7RUFDQSxpQkFBQTtBQUxSO0FBVVk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxzQkFBQTtBQVJoQjtBQWNRO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsY0FBQTtBQVpaO0FBY1k7RUFDSSw0Q0FBQTtBQVpoQjtBQWNnQjtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBWnBCO0FBY29CO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7QUFaeEI7QUFlb0I7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBYnhCO0FBZ0JvQjtFQUNJLGFBQUE7RUFDQSxZQUFBO0FBZHhCO0FBZ0J3QjtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0RBQUE7RUFDQSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsWUFBQTtBQWQ1QjtBQWdCNEI7RUFDSSx3Q0FBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFkaEM7QUFpQjRCO0VBQ0ksbUJBQUE7QUFmaEM7QUFtQndCO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0NBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0FBakI1QjtBQXVCWTtFQUNJLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFyQmhCO0FBeUJRO0VBQ0ksc0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtBQXZCWjtBQTZCWTtFQUNJLGtDQUFBO0VBQ0Esb0JBQUE7QUEzQmhCO0FBNkJnQjtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLG9DQUFBO0FBM0JwQjtBQWlDSTtFQUNJLGtDQUFBO0VBQ0Esb0JBQUE7QUEvQlI7QUFpQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQS9CWjtBQWtDUTtFQUNJLGlCQUFBO0FBaENaO0FBbUNRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUFqQ1o7QUFxQ0k7RUFDSSxvQkFBQTtFQUNBLFlBQUE7RUFDQSxrQ0FBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUNBQUE7QUFuQ1I7QUFxQ1E7RUFDSSxnQkFBQTtBQW5DWjtBQXNDUTtFQUNJLG9CQUFBO0FBcENaIiwiZmlsZSI6Im1vYi1hZGRpdGlvbmFsLWx1Z2dhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmFkZGl0aW9uYWwtbHVnZ2FnZXMtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1vYmlsZS1iYWNrYWdyb3VuZCk7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjVyZW07XG5cbiAgICAmIC5jbG9zZWQtY29udGFpbmVyLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDAuODc1cmVtIDFyZW0gMC4yNXJlbSAycmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcblxuICAgICAgICAmX19pbmZvIHtcbiAgICAgICAgICAgICZfY2hlY2tlZC1iYWcge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LXR5cG9ncmFwaHktZ3JheSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmX3NlbGVjdGVkLWFkZGl0aW9uYWwge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fZGl2aWRlciB7XG4gICAgICAgIGhlaWdodDogMC4wNjI1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICB9XG5cbiAgICAmX19mb3JtIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbW9iaWxlLWJhY2thZ3JvdW5kKTtcbiAgICAgICAgcGFkZGluZzogMCAwIDVyZW07XG4gICAgfVxuXG4gICAgJiAudHotZm9ybS1jb250YWluZXIge1xuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICAmLm5vLWJhZ2dhZ2Uge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmIC5mbGlnaHQtYWRkaXRpb25hbC1sdWdnYWdlIHtcbiAgICAgICAgJiAuaXRlbS1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBnYXA6IDAuMDYyNXJlbTtcblxuICAgICAgICAgICAgJiAubHVnZ2FnZS10eXBlLXJvdyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG5cbiAgICAgICAgICAgICAgICAubHVnZ2FnZS1zZWxlY3Rpb25zIHtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBlbmQ7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtIDFyZW07XG5cbiAgICAgICAgICAgICAgICAgICAgJl9fY3VycmVuY3ktYm94IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJl9fYWN0aW9uLWJveCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMC44MTI1cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJl9fY291bnRlci1ib3gge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogMC4yNXJlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJiAucGx1cy1taW51cyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMC4wNjI1cmVtIHNvbGlkIHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjE4NzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC45MzhyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjg7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLmJhZ2dhZ2UtYWRkLXJlbW92ZS1idG4tLWRpc2FibGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmLnR6LWljb24tbWludXMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuMTI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgJiAuYWRkZWQtY291bnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMy43NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDAuMDYyNXJlbSBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYgLmx1Z2dhZ2UtdGV4dC1ib3gge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJiAudHJhdmVsbGVyLW5hbWUge1xuICAgICAgICAgICAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9fYm90dG9tLWJveCB7XG4gICAgICAgICYgLmJvdHRvbS1ib3gge1xuICAgICAgICAgICAgJl9fY29uZmlybS1idXR0b24td3JhcHBlciB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbW9iLXdoaXRlKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcblxuICAgICAgICAgICAgICAgICYgLmNvbmZpcm0tbHVnZ2FnZXMge1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRleHQtbW9iaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAubHVnZ2FnZS1zZWxlY3QtcGlja2VyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbW9iLXdoaXRlKTtcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG5cbiAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9faWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgfVxuXG4gICAgICAgICZfX3JlcGxhY2UtaW5jbHVkZWQtYmFnZ2FnZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleS1saWdodC1tb2JpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlbGVjdGVkLWx1Z2dhZ2UtaXRlbSB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1vYi13aGl0ZSk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1tb2JpbGUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICBtYXJnaW46IDAuNjI1cmVtO1xuICAgICAgICBwYWRkaW5nOiAwLjI1cmVtIDAuMjVyZW0gMC4yNXJlbSAwLjVyZW07XG5cbiAgICAgICAgJl9fcHJpY2Uge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2Nsb3NlLWJ0biB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4yNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 54927:
/*!********************************************************************************************************!*\
  !*** ./src/app/modules/checkout/components/mob-transport-luggages/mob-transport-luggages.component.ts ***!
  \********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobTransportLuggagesComponent": () => (/* binding */ MobTransportLuggagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _mob_additional_luggages_mob_additional_luggages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mob-additional-luggages/mob-additional-luggages.component */ 11301);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/tz-svg-icon/tz-svg-icon.component */ 28189);








function MobTransportLuggagesComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "FLIGHT.LUGGAGE.BAGGAGE"), " ");
} }
function MobTransportLuggagesComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "tz-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "FLIGHT.LUGGAGE.NO_BAGGAGE_INCLUDED"), " ");
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_2_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "tz-svg-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mobile", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r14.flightLuggage.includedOptions.bag1[passenger_r7.type].title, " ");
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_2_ng_container_1_Template, 5, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r11.flightLuggage.includedOptions.bag1[passenger_r7.type].title);
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "FLIGHT.LUGGAGE.personalItem"), " ");
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_3_ng_container_1_Template, 3, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r12.flightLuggage.includedOptions.bag1.type === "personalItem" || ctx_r12.flightLuggage.includedOptions.bag1.type !== "checkIn");
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r18.flightLuggage.includedOptions.bag1[passenger_r7.type].weightTexts.join(" "), " ");
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_5_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r19.flightLuggage.includedOptions.bag1[passenger_r7.type].dimensions, " ");
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_5_ng_container_1_Template, 3, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_5_p_2_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.flightLuggage.includedOptions.bag1[passenger_r7.type] == null ? null : ctx_r13.flightLuggage.includedOptions.bag1[passenger_r7.type].weightTexts);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.flightLuggage.includedOptions.bag1[passenger_r7.type].dimensions);
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_2_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_3_Template, 2, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_ng_container_5_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!ctx_r9.flightLuggage.includedOptions.bag1[passenger_r7.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r9.flightLuggage.includedOptions.bag1[passenger_r7.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!ctx_r9.flightLuggage.includedOptions.bag1[passenger_r7.type]);
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_ng_container_2_tz_svg_icon_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tz-svg-icon", 17);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mobile", true);
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_ng_container_2_tz_svg_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tz-svg-icon", 24);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mobile", true);
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_ng_container_2_tz_svg_icon_2_Template, 1, 1, "tz-svg-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_ng_container_2_tz_svg_icon_3_Template, 1, 1, "tz-svg-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r24.flightLuggage.includedOptions.bag2.type !== "checkIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r24.flightLuggage.includedOptions.bag2.type === "checkIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r24.flightLuggage.includedOptions.bag2[passenger_r7.type].title, " ");
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "p", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r29.flightLuggage.includedOptions.bag2[passenger_r7.type].weightTexts.join(", "), " ");
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_ng_container_4_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r30.flightLuggage.includedOptions.bag2[passenger_r7.type].dimensions, " ");
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_ng_container_4_ng_container_1_Template, 3, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_ng_container_4_p_2_Template, 2, 1, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r25.flightLuggage.includedOptions.bag2[passenger_r7.type] == null ? null : ctx_r25.flightLuggage.includedOptions.bag2[passenger_r7.type].weightTexts);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r25.flightLuggage.includedOptions.bag2[passenger_r7.type].dimensions);
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_ng_container_2_Template, 6, 3, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_ng_container_4_Template, 3, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.flightLuggage.includedOptions.bag2[passenger_r7.type].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!ctx_r10.flightLuggage.includedOptions.bag2[passenger_r7.type]);
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_4_Template, 6, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_div_5_Template, 5, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const passenger_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.getTravellerName(i_r8), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.flightLuggage.includedOptions.bag1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.flightLuggage.includedOptions.bag2 && !!ctx_r6.flightLuggage.includedOptions.bag2[passenger_r7.type]);
} }
function MobTransportLuggagesComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MobTransportLuggagesComponent_div_0_ng_container_3_div_2_Template, 6, 3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.passengerDetails);
} }
function MobTransportLuggagesComponent_div_0_ng_container_4_div_2_div_1_div_4_tz_svg_icon_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tz-svg-icon", 17);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mobile", true);
} }
function MobTransportLuggagesComponent_div_0_ng_container_4_div_2_div_1_div_4_tz_svg_icon_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tz-svg-icon", 24);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("mobile", true);
} }
function MobTransportLuggagesComponent_div_0_ng_container_4_div_2_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13)(1, "div", 14)(2, "p", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 15)(6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, MobTransportLuggagesComponent_div_0_ng_container_4_div_2_div_1_div_4_tz_svg_icon_7_Template, 1, 1, "tz-svg-icon", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, MobTransportLuggagesComponent_div_0_ng_container_4_div_2_div_1_div_4_tz_svg_icon_8_Template, 1, 1, "tz-svg-icon", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const bag_r41 = ctx.$implicit;
    const passenger_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, "ADD_PASSENGER." + bag_r41.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", bag_r41.type === "personal_item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", bag_r41.type === "luggage");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", bag_r41.isQuantityDiff ? " x " + bag_r41[passenger_r38.type] : bag_r41[passenger_r38.type] > 1 && bag_r41.isQuantityDiff ? " x " + bag_r41[passenger_r38.type] : "", " ");
} }
function MobTransportLuggagesComponent_div_0_ng_container_4_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MobTransportLuggagesComponent_div_0_ng_container_4_div_2_div_1_div_4_Template, 11, 6, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r39 = ctx.index;
    const trip_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r37.getTravellerName(i_r39), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", trip_r36.tripLuggages);
} }
function MobTransportLuggagesComponent_div_0_ng_container_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MobTransportLuggagesComponent_div_0_ng_container_4_div_2_div_1_Template, 5, 2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r35.passengerDetails);
} }
function MobTransportLuggagesComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MobTransportLuggagesComponent_div_0_ng_container_4_div_2_Template, 2, 1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.trainLuggage);
} }
function MobTransportLuggagesComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MobTransportLuggagesComponent_div_0_div_5_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r46.addLuggages(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "FLIGHT.LUGGAGE.ADD_BAGGAGE"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](4, 4, ctx_r5.checkoutLuggages.flight.isRoundTrip ? "GENERAL.ROUND_TRIP" : "GENERAL.ONE_WAY"), ") ");
} }
function MobTransportLuggagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MobTransportLuggagesComponent_div_0_div_1_Template, 3, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, MobTransportLuggagesComponent_div_0_div_2_Template, 4, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MobTransportLuggagesComponent_div_0_ng_container_3_Template, 3, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, MobTransportLuggagesComponent_div_0_ng_container_4_Template, 3, 1, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, MobTransportLuggagesComponent_div_0_div_5_Template, 5, 6, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.luggagesIncluded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.luggagesIncluded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.checkoutLuggages.flight && ctx_r0.luggagesIncluded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.checkoutLuggages.train && ctx_r0.luggagesIncluded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.checkoutLuggages.flight && ctx_r0.luggagesIncluded && (ctx_r0.flightLuggage.checkIn == null ? null : ctx_r0.flightLuggage.checkIn.hasPayedOptions));
} }
class MobTransportLuggagesComponent {
    constructor(translateService, modalService) {
        this.translateService = translateService;
        this.modalService = modalService;
        this.updateHelper = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.trainLuggage = [];
        this.luggagesIncluded = false;
    }
    ngOnChanges(changes) {
        if (changes['checkoutLuggages'] && this.checkoutLuggages) {
            this.checkLuggagesIncluded();
            if (this.checkoutLuggages.flight) {
                this.flightLuggage = this.checkoutLuggages.flight.flightLuggage;
            }
            else if (this.checkoutLuggages.train) {
                const luggage = this.checkoutLuggages.train;
                this.trainLuggage = luggage.isRoundTripLuggage
                    ? [
                        {
                            tripType: 'onwardLuggage',
                            tripLuggages: luggage.onwardLuggage,
                        },
                    ]
                    : [
                        {
                            tripType: 'onwardLuggage',
                            tripLuggages: luggage.onwardLuggage,
                        },
                        {
                            tripType: 'returnLuggage',
                            tripLuggages: luggage.returnLuggage,
                        },
                    ];
            }
        }
    }
    getTravellerName(idx) {
        const formvalue = this.transportFormArray.controls[idx].value;
        this.passengerDetails[idx].firstName = formvalue.firstName;
        this.passengerDetails[idx].lastName = formvalue.lastName;
        if (!formvalue.firstName || !formvalue.lastName) {
            if (idx === 0) {
                return this.translateService.instant('TRAVELLER.PRIMARY_TRAVELER');
            }
            else {
                return `${this.translateService.instant('TRAVELLER.TRAVELER')} ${idx + 1}`;
            }
        }
        return `${formvalue.firstName} ${formvalue.middleName ? formvalue.middleName : ''} ${formvalue.lastName}`;
    }
    addLuggages() {
        this.modalService
            .createDetailsPage(_mob_additional_luggages_mob_additional_luggages_component__WEBPACK_IMPORTED_MODULE_0__.MobAdditionalLuggagesComponent, {
            data: {
                flightLuggages: this.checkoutLuggages.flight.flightLuggage,
                checkout: this.checkout,
                passengerDetails: this.passengerDetails,
                headerModalType: 'default',
            },
            title: `${this.translateService.instant('FLIGHT.LUGGAGE.ADD_BAGGAGE')} (${this.translateService.instant(this.checkoutLuggages.flight.isRoundTrip ? 'GENERAL.Round_trip' : 'GENERAL.One_way')})`,
        })
            .then((modal) => {
            if (!modal.data || !modal.data.passengerDetails) {
                return;
            }
            let total = 0;
            const selectedData = modal.data;
            for (const passenger of selectedData.passengerDetails) {
                total += passenger.additionalLuggage.totalPrice;
            }
            this.checkout.baggageSelected = total > 0;
            this.checkout.additionalLuggagePrice = {
                listPrice: total,
                listPriceCur: selectedData.listPriceCurrency,
            };
            this.updateHelper.emit();
        });
    }
    checkLuggagesIncluded() {
        var _a, _b;
        this.luggagesIncluded =
            (this.checkoutLuggages.flight &&
                !!(((_a = this.checkoutLuggages.flight.flightLuggage.includedOptions) === null || _a === void 0 ? void 0 : _a.bag1) ||
                    ((_b = this.checkoutLuggages.flight.flightLuggage.includedOptions) === null || _b === void 0 ? void 0 : _b.bag2))) ||
                (this.checkoutLuggages.train &&
                    (this.checkoutLuggages.train.onwardLuggage.length > 0 ||
                        this.checkoutLuggages.train.returnLuggage.length > 0));
    }
}
MobTransportLuggagesComponent.ɵfac = function MobTransportLuggagesComponent_Factory(t) { return new (t || MobTransportLuggagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
MobTransportLuggagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MobTransportLuggagesComponent, selectors: [["tz-mob-transport-luggages"]], inputs: { checkoutLuggages: "checkoutLuggages", checkout: "checkout", passengerDetails: "passengerDetails", transportFormArray: "transportFormArray" }, outputs: { updateHelper: "updateHelper" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "tz-form-container transport-laguages", 4, "ngIf"], [1, "tz-form-container", "transport-laguages"], ["class", "tz-form-container__title mb-0", 4, "ngIf"], [4, "ngIf"], ["class", "additional-luggage-btn", 3, "click", 4, "ngIf"], [1, "tz-form-container__title", "mb-0"], ["icon", "no-baggage"], [1, "tz-form-container__form"], ["class", "flight-included-luggages", 4, "ngFor", "ngForOf"], [1, "flight-included-luggages"], [1, "traveller-name"], [1, "flight-included-luggage"], ["class", "flight-included-luggage__item", 4, "ngIf"], [1, "flight-included-luggage__item"], [1, "luggage-type"], [1, "luggage-dimension"], [1, "luggage-dimension__baggage"], ["icon", "small-baggage", 3, "mobile"], [1, "flight-included-luggage__title"], ["class", "luggage-dimension__dimension", 4, "ngIf"], [1, "luggage-dimension__weight"], [1, "luggage-dimension__dimension"], ["icon", "small-baggage", 3, "mobile", 4, "ngIf"], ["icon", "big-baggage", 3, "mobile", 4, "ngIf"], ["icon", "big-baggage", 3, "mobile"], [4, "ngFor", "ngForOf"], ["class", "flight-included-luggage__item", 4, "ngFor", "ngForOf"], [1, "additional-luggage-btn", 3, "click"], [1, "additional-luggage-label"]], template: function MobTransportLuggagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MobTransportLuggagesComponent_div_0_Template, 6, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.checkoutLuggages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_2__.TzIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__.TzSvgIconComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".tz-form-container[_ngcontent-%COMP%] {\n  background: var(--color-mobile-backaground);\n}\n.tz-form-container__form[_ngcontent-%COMP%] {\n  padding: 0;\n}\n.tz-form-container__title[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.15px;\n  font-weight: var(--font-weight-normal);\n  color: var(--color-main-purple);\n  background: var(--color-main-blue-light);\n  border: unset;\n  border-bottom: 1px solid var(--color-border-mobile);\n  border-radius: 0;\n  padding: 0.5rem 1rem;\n  height: 2.75rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.transport-laguages[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.additional-luggage-btn[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-white);\n  padding: 0.5rem 1rem;\n  margin-top: 0.25rem;\n}\n.additional-luggage-btn[_ngcontent-%COMP%]   .additional-luggage-label[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  color: var(--color-main-purple);\n  font-weight: var(--font-weight-regular);\n  padding: 0 0.5rem;\n  text-align: center;\n  border: 1px dashed var(--color-main-purple);\n  border-radius: 0.25rem;\n  height: 2.5rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.traveller-name[_ngcontent-%COMP%] {\n  margin-bottom: 0.625rem;\n  padding: 0.75rem 1rem;\n  font-weight: 400;\n  font-size: 0.875rem;\n  height: 2.75rem;\n  line-height: 1.25rem;\n  color: var(--color-text-mobile);\n  word-break: break-word;\n  border-bottom: 1px solid var(--color-button-grey);\n}\n.luggage-type[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.flight-included-luggage__item[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  margin: 0 1rem;\n  margin-bottom: 1rem;\n  height: 2.125rem;\n}\n.flight-included-luggage__item[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0.6875rem;\n}\n.flight-included-luggage__title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  margin-bottom: 0;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  color: var(--color-text-mobile);\n}\n.flight-included-luggages[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border-mobile);\n}\n.flight-included-luggages[_ngcontent-%COMP%]:last-child {\n  border-bottom: none;\n}\n.luggage-dimension__weight[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  text-align: right;\n  text-transform: uppercase;\n  color: var(--color-text-mobile);\n  margin-bottom: 0.125rem;\n}\n.luggage-dimension__dimension[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  text-align: right;\n  text-transform: uppercase;\n  color: var(--color-text-typography-gray);\n  margin-bottom: 0;\n}\n.luggage-dimension__baggage[_ngcontent-%COMP%] {\n  margin-right: 0.5625rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi10cmFuc3BvcnQtbHVnZ2FnZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSwyQ0FBQTtBQUNKO0FBQ0k7RUFDSSxVQUFBO0FBQ1I7QUFFSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsK0JBQUE7RUFFQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxtREFBQTtFQUNBLGdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFEUjtBQUtBO0VBQ0ksbUJBQUE7QUFGSjtBQUtBO0VBQ0ksNENBQUE7RUFDQSxvQkFBQTtFQUNBLG1CQUFBO0FBRko7QUFJSTtFQUNJLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLHVDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUVBLDJDQUFBO0VBQ0Esc0JBQUE7RUFFQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFKUjtBQVFBO0VBQ0ksdUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsaURBQUE7QUFMSjtBQVFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBTEo7QUFTSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7QUFOUjtBQVNJO0VBQ0ksd0JBQUE7QUFQUjtBQVVJO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtBQVJSO0FBWUE7RUFDSSxtREFBQTtBQVRKO0FBWUE7RUFDSSxtQkFBQTtBQVRKO0FBYUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsK0JBQUE7RUFDQSx1QkFBQTtBQVZSO0FBYUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0Esd0NBQUE7RUFDQSxnQkFBQTtBQVhSO0FBY0k7RUFDSSx1QkFBQTtBQVpSIiwiZmlsZSI6Im1vYi10cmFuc3BvcnQtbHVnZ2FnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudHotZm9ybS1jb250YWluZXIge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1vYmlsZS1iYWNrYWdyb3VuZCk7XG5cbiAgICAmX19mb3JtIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1haW4tYmx1ZS1saWdodCk7XG4gICAgICAgIGJvcmRlcjogdW5zZXQ7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICAgIGhlaWdodDogMi43NXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxuLnRyYW5zcG9ydC1sYWd1YWdlcyB7XG4gICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbn1cblxuLmFkZGl0aW9uYWwtbHVnZ2FnZS1idG4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG5cbiAgICAuYWRkaXRpb25hbC1sdWdnYWdlLWxhYmVsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICAgICAgICBwYWRkaW5nOiAwIDAuNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGJvcmRlcjogMXB4IGRhc2hlZCB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG5cbiAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cblxuLnRyYXZlbGxlci1uYW1lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICBwYWRkaW5nOiAwLjc1cmVtIDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGhlaWdodDogMi43NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJ1dHRvbi1ncmV5KTtcbn1cblxuLmx1Z2dhZ2UtdHlwZSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmxpZ2h0LWluY2x1ZGVkLWx1Z2dhZ2Uge1xuICAgICZfX2l0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBtYXJnaW46IDAgMXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICAgICAgaGVpZ2h0OiAyLjEyNXJlbTtcbiAgICB9XG5cbiAgICAmX19pdGVtOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjY4NzVyZW07XG4gICAgfVxuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICB9XG59XG5cbi5mbGlnaHQtaW5jbHVkZWQtbHVnZ2FnZXMge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbn1cblxuLmZsaWdodC1pbmNsdWRlZC1sdWdnYWdlczpsYXN0LWNoaWxkIHtcbiAgICBib3JkZXItYm90dG9tOiBub25lO1xufVxuXG4ubHVnZ2FnZS1kaW1lbnNpb24ge1xuICAgICZfX3dlaWdodCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjEyNXJlbTtcbiAgICB9XG5cbiAgICAmX19kaW1lbnNpb24ge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtdHlwb2dyYXBoeS1ncmF5KTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG5cbiAgICAmX19iYWdnYWdlIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjU2MjVyZW07XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 21405:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/checkout/components/mob-travel-insurance/mob-travel-insurance.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobTravelInsuranceComponent": () => (/* binding */ MobTravelInsuranceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/pipes/date-range.pipe */ 82478);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/pipes/tz-currency.pipe */ 98967);









function MobTravelInsuranceComponent_p_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx_r0.date);
} }
function MobTravelInsuranceComponent_div_5_li_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", content_r7, " ");
} }
function MobTravelInsuranceComponent_div_5_span_8_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MobTravelInsuranceComponent_div_5_span_8_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r10); const insurance_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]().$implicit; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r8.insuranceMoreDetails(insurance_r2.formuleRef); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](2, 1, "INSURANCE.MORE_DETAILS"), " ");
} }
function MobTravelInsuranceComponent_div_5_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "p", 23)(1, "a", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 3, "ACCOUNT.SIGN.TERMS_AND_CONDITIONS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](5, 5, "GENERAL.AND"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, "ACCOUNT.SIGN.PRIVACY_POLICY"));
} }
const _c0 = function (a0) { return { "selected-option": a0 }; };
function MobTravelInsuranceComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 12)(1, "div", 13)(2, "div", 14)(3, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "mat-radio-button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MobTravelInsuranceComponent_div_5_Template_mat_radio_button_click_5_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r12); const insurance_r2 = restoredCtx.$implicit; const idx_r3 = restoredCtx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r11.selectInsuranceOption(insurance_r2, idx_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](7, MobTravelInsuranceComponent_div_5_li_7_Template, 3, 1, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](8, MobTravelInsuranceComponent_div_5_span_8_Template, 3, 3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](9, MobTravelInsuranceComponent_div_5_p_9_Template, 9, 9, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 20)(11, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const insurance_r2 = ctx.$implicit;
    const idx_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](13, _c0, ctx_r1.selectedInsurance && ctx_r1.selectedInsurance.selectedIdx === idx_r3));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](insurance_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx_r1.selectedInsurance && ctx_r1.selectedInsurance.selectedIdx === idx_r3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx_r1.sliceInsurances(insurance_r2.content, insurance_r2.formuleRef));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx_r1.showMoreDetails(insurance_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", !ctx_r1.showMoreDetails(insurance_r2));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 8, "INSURANCE.POLICY_COST"), " |");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind2"](15, 10, insurance_r2.net.listPrice, insurance_r2.net.listPriceCur), " ");
} }
const defaultInsurance = { selected: {}, selectedIdx: -1, validatedTC: false };
class MobTravelInsuranceComponent {
    constructor(dateRange, datePipe) {
        this.dateRange = dateRange;
        this.datePipe = datePipe;
        this.selectedInsurance = defaultInsurance;
        this.insuranceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
        this.insurancesMoreDetailsID = [];
    }
    ngOnInit() {
        this.date = this.getDateRange();
    }
    selectInsuranceOption(option, selectedIdx = -1) {
        if (option === null) {
            this.insuranceChange.emit(defaultInsurance);
            return;
        }
        this.insuranceChange.emit({
            selected: option,
            selectedIdx,
            validatedTC: false,
        });
    }
    getDateRange() {
        const { start_date, endDate } = this.tzTravelInsurances.parameters;
        return endDate
            ? this.dateRange.transform(start_date, endDate)
            : this.datePipe.transform(start_date, 'mediumDate');
    }
    sliceInsurances(insurances, formulaRef) {
        return this.getIncludeInsurance(formulaRef) ? insurances : insurances.slice(0, 3);
    }
    insuranceMoreDetails(formulaRef) {
        this.insurancesMoreDetailsID = this.getIncludeInsurance(formulaRef)
            ? this.insurancesMoreDetailsID.filter((id) => id === formulaRef)
            : [...this.insurancesMoreDetailsID, formulaRef];
    }
    getIncludeInsurance(formulaRef) {
        return this.insurancesMoreDetailsID.includes(formulaRef);
    }
    showMoreDetails(insurance) {
        return insurance.content.length > 3 && !this.getIncludeInsurance(insurance.formuleRef);
    }
}
MobTravelInsuranceComponent.ɵfac = function MobTravelInsuranceComponent_Factory(t) { return new (t || MobTravelInsuranceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_0__.DateRangePipe), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe)); };
MobTravelInsuranceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MobTravelInsuranceComponent, selectors: [["tz-mob-travel-insurance"]], inputs: { tzTravelInsurances: "tzTravelInsurances", selectedInsurance: "selectedInsurance" }, outputs: { insuranceChange: "insuranceChange" }, decls: 11, vars: 7, consts: [["data-test", "basket-insurance-information", 1, "travel-insurance"], [1, "travel-insurance__title"], ["data-test", "basket-insurance-container", "translate", "INSURANCE.TRAVEL_INSURANCE", 1, "top-text"], ["class", "date", 4, "ngIf"], [3, "id"], ["class", "travel-insurance__option", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "travel-insurance__option", "insurance", 3, "ngClass"], [1, "insurance__type", "flex"], ["translate", "INSURANCE.NO_INSURANCE", 1, "title"], ["data-test", "no-insurance-radio-button", 1, "tz-radio-btn", 3, "checked", "click"], ["translate", "INSURANCE.IMPORTANT_MSG", 1, "travel-note"], [1, "date"], [1, "travel-insurance__option", 3, "ngClass"], [1, "insurance"], [1, "insurance__type"], [1, "title"], ["data-test", "basket-insurance-radio-button", 1, "flex", "justify-center", "tz-radio-btn", 3, "checked", "click"], [4, "ngFor", "ngForOf"], ["class", "more-details", 3, "click", 4, "ngIf"], ["class", "terms-text text-d text-decoration-none", 4, "ngIf"], [1, "insurance-price"], [1, "tz-icon-check-nobg"], [1, "more-details", 3, "click"], [1, "terms-text", "text-d", "text-decoration-none"], ["target", "_blank", "routerLink", "/about/terms", 1, "tz-purple-link"], ["target", "_blank", "routerLink", "/about/ppc", 1, "tz-purple-link"]], template: function MobTravelInsuranceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, MobTravelInsuranceComponent_p_3_Template, 2, 1, "p", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](5, MobTravelInsuranceComponent_div_5_Template, 16, 15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "mat-radio-button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MobTravelInsuranceComponent_Template_mat_radio_button_click_9_listener() { return ctx.selectInsuranceOption(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.date);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", "TRAVEL_INSURANCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tzTravelInsurances.insurances);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](5, _c0, ctx.selectedInsurance && ctx.selectedInsurance.selectedIdx === -1));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("checked", ctx.selectedInsurance && ctx.selectedInsurance.selectedIdx === -1);
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgClass, _angular_material_radio__WEBPACK_IMPORTED_MODULE_5__.MatRadioButton, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _ionic_angular__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHrefDelegate], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__.TranslatePipe, _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_1__.TzCurrencyPipe], styles: [".travel-insurance[_ngcontent-%COMP%] {\n  color: var(--color-text-mobile);\n  margin-top: 0.5rem;\n}\n.travel-insurance[_ngcontent-%COMP%]   .top-text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-weight: 700;\n}\n.travel-insurance[_ngcontent-%COMP%]   .date[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.travel-insurance__title[_ngcontent-%COMP%] {\n  padding: 0.5625rem 1rem;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.125rem;\n  background-color: var(--color-main-purple);\n  color: var(--color-mob-white);\n  margin-bottom: 0.25rem;\n}\n.travel-insurance[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  display: flex;\n}\n.travel-insurance__option[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 0.25rem;\n}\n[_nghost-%COMP%]  .mat-radio-outer-circle {\n  border-width: 1px;\n  border-color: var(--color-border-mobile);\n  background: var(--icon-color-light-gray);\n}\n[_nghost-%COMP%]  .mat-radio-inner-circle {\n  width: 1.5rem;\n  height: 1.5rem;\n  position: absolute;\n  left: -2px;\n  top: -2px;\n}\n.insurance[_ngcontent-%COMP%] {\n  padding: 0.5rem 1rem 0.64rem;\n  background-color: var(--color-primary-white);\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n.insurance__type[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.insurance__type[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1rem;\n}\n.insurance[_ngcontent-%COMP%]   .more-details[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  -webkit-text-decoration-line: underline;\n          text-decoration-line: underline;\n  color: var(--color-main-purple);\n}\n.insurance[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  margin: 0;\n}\n.insurance[_ngcontent-%COMP%]   .terms-text[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.insurance[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding-left: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 0.25rem;\n}\n.insurance[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  list-style: none;\n  display: flex;\n  gap: 0.25rem;\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1rem;\n}\n.insurance[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tz-icon-check-nobg[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-green-mobile);\n}\n.insurance[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%], .insurance__detail[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: var(--font-weight-normal);\n}\n.insurance__detail[_ngcontent-%COMP%] {\n  display: block;\n}\n.insurance.selected-option[_ngcontent-%COMP%]   .insurnace-titile[_ngcontent-%COMP%] {\n  color: var(--color-main-purple);\n}\n.insurance[_ngcontent-%COMP%]   .travel-note[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: var(--font-weight-regular);\n  color: var(--color-grey-mobile);\n}\n.selected-option[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--color-main-purple);\n}\n.insurance-price[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  background: var(--color-background-mobile);\n  height: 2.25rem;\n  align-items: center;\n  display: flex;\n  justify-content: flex-end;\n  padding-right: 1rem;\n  text-transform: lowercase;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  font-weight: var(--font-weight-semibold);\n  color: var(--color-main-purple);\n}\n.insurance-price[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 0.125rem;\n  font-style: italic;\n  font-weight: 300;\n  font-size: 0.6875rem;\n  line-height: 1.5rem;\n  color: var(--color-grey-mobile);\n}\n@media (max-width: 920px) {\n  .travel-insurance__option[_ngcontent-%COMP%]:not(:first-child) {\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi10cmF2ZWwtaW5zdXJhbmNlLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy91dGlscy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSwrQkFBQTtFQUNBLGtCQUFBO0FBREo7QUFHSTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7QUFEUjtBQUlJO0VBQ0ksU0FBQTtBQUZSO0FBS0k7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLDBDQUFBO0VBQ0EsNkJBQUE7RUFDQSxzQkFBQTtBQUhSO0FBTUk7RUFDSSxjQUFBO0VBQ0EsYUFBQTtBQUpSO0FBT0k7RUFDSSxtQkFBQTtBQUxSO0FBU0E7RUFDSSxpQkFBQTtFQUNBLHdDQUFBO0VBQ0Esd0NBQUE7QUFOSjtBQVNBO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBTko7QUFTQTtFQUNJLDRCQUFBO0VBQ0EsNENBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0FBTko7QUFRSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTlI7QUFRUTtFQUNJLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQU5aO0FBVUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1Q0FBQTtVQUFBLCtCQUFBO0VBQ0EsK0JBQUE7QUFSUjtBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQVRSO0FBV1E7RUFDSSxxQkFBQTtBQVRaO0FBYUk7RUFDSSxTQUFBO0VBQ0EsZUFBQTtFQUVBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7QUFaUjtBQWNRO0VBQ0ksZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUVBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQWJaO0FBZVk7RUFDSSxlQUFBO0VBQ0EsZ0NBQUE7QUFiaEI7QUFrQkk7RUFFSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esc0NBQUE7QUFqQlI7QUFvQkk7RUFDSSxjQUFBO0FBbEJSO0FBcUJJO0VBQ0ksK0JBQUE7QUFuQlI7QUFzQkk7RUFDSSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsdUNBQUE7RUFDQSwrQkFBQTtBQXBCUjtBQXdCQTtFQUNJLCtCQUFBO0FBckJKO0FBd0JBO0VBQ0ksc0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0NBQUE7RUFDQSwrQkFBQTtBQXJCSjtBQXVCSTtFQUNJLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQXJCUjtBQ3JGSTtFRGdISTtJQUNJLGFBQUE7RUF2QlY7QUFDRiIsImZpbGUiOiJtb2ItdHJhdmVsLWluc3VyYW5jZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuLnRyYXZlbC1pbnN1cmFuY2Uge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuXG4gICAgLnRvcC10ZXh0IHtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG5cbiAgICAuZGF0ZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAuNTYyNXJlbSAxcmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xMjVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1vYi13aGl0ZSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgfVxuXG4gICAgbWF0LXJhZGlvLWJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxLjI1cmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgICZfX29wdGlvbjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgfVxufVxuXG46aG9zdDo6bmctZGVlcCAubWF0LXJhZGlvLW91dGVyLWNpcmNsZSB7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pY29uLWNvbG9yLWxpZ2h0LWdyYXkpO1xufVxuXG46aG9zdDo6bmctZGVlcCAubWF0LXJhZGlvLWlubmVyLWNpcmNsZSB7XG4gICAgd2lkdGg6IDEuNXJlbTtcbiAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogLTJweDtcbiAgICB0b3A6IC0ycHg7XG59XG5cbi5pbnN1cmFuY2Uge1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtIDAuNjRyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMC42MjVyZW07XG5cbiAgICAmX190eXBlIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1vcmUtZGV0YWlscyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbi1saW5lOiB1bmRlcmxpbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgfVxuXG4gICAgLnRlcm1zLXRleHQge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmUgO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdWwge1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDAuMjVyZW07XG5cbiAgICAgICAgbGkge1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBnYXA6IDAuMjVyZW07XG5cbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcblxuICAgICAgICAgICAgLnR6LWljb24tY2hlY2stbm9iZyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmVlbi1tb2JpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgdWwgbGksXG4gICAgJl9fZGV0YWlsIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gICAgfVxuXG4gICAgJl9fZGV0YWlsIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuXG4gICAgJi5zZWxlY3RlZC1vcHRpb24gLmluc3VybmFjZS10aXRpbGUge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgIH1cblxuICAgIC50cmF2ZWwtbm90ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXktbW9iaWxlKTtcbiAgICB9XG59XG5cbi5zZWxlY3RlZC1vcHRpb24gLnRpdGxlIHtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xufVxuXG4uaW5zdXJhbmNlLXByaWNlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJhY2tncm91bmQtbW9iaWxlKTtcbiAgICBoZWlnaHQ6IDIuMjVyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbG93ZXJjYXNlO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuXG4gICAgc3BhbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC4xMjVyZW07XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjY4NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LW1vYmlsZSk7XG4gICAgfVxufVxuXG5AaW5jbHVkZSBtb2JpbGUge1xuICAgIC50cmF2ZWwtaW5zdXJhbmNlIHtcbiAgICAgICAgJl9fb3B0aW9uOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 85814:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/checkout/components/process-payment/process-payment.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/cart-status */ 32304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_checkout_services_tz_checkout_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/checkout/services/tz-checkout.service */ 95678);
/* harmony import */ var _services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/modules/cart/services/cart.service */ 16750);
/* harmony import */ var _services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/searchEngine/services/api-access.service */ 32189);
/* harmony import */ var _services_stripe_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/stripe.service */ 32865);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_modules_checkout_services_checkout_error_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/checkout/services/checkout-error.service */ 5101);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_modules_core_loader_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/modules/core/loader.service */ 408);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/modules/core/scroll-service */ 90097);
/* harmony import */ var _results_tabsUtils_tz_tabs_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../results/tabsUtils/tz-tabs-service */ 52680);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_billing_info_billing_info_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/components/billing-info/billing-info.component */ 8480);



















function PaymentComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 19)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 21)(8, "label")(9, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("ngModelChange", function PaymentComponent_div_0_div_1_Template_input_ngModelChange_9_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r6.checkout.invoiceRequired = $event;
    })("change", function PaymentComponent_div_0_div_1_Template_input_change_9_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r7);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      return ctx_r8.updateValidation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](10, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 3, "BOOKINGS.BILLING.BILLING_ADDRESS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 5, "PROFILE.INVOICE_REQUIRED"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngModel", ctx_r4.checkout.invoiceRequired);
  }
}

const _c0 = function (a0) {
  return {
    required: a0
  };
};

function PaymentComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PaymentComponent_div_0_div_3_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
      ctx_r9.checkout.invoiceRequired = !ctx_r9.checkout.invoiceRequired;
      return ctx_r9.updateValidation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](4, _c0, ctx_r5.checkout.invoiceRequired));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("+ ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 2, "BOOKINGS.BILLING.BILLING_ADDRESS"), "");
  }
}

const _c1 = function (a0) {
  return {
    opened: a0
  };
};

function PaymentComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](1, PaymentComponent_div_0_div_1_Template, 11, 7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, PaymentComponent_div_0_div_3_Template, 4, 6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](5, "span", 17)(6, "tz-billing-info", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 5, ctx_r0.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 7, ctx_r0.platformService.isMobileDevice$));
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("id", "PAYMENT_BILLING");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction1"](9, _c1, ctx_r0.checkout.invoiceRequired))("formGroup", ctx_r0.billingFormGroup);
  }
}

function PaymentComponent_button_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PaymentComponent_button_34_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r12);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r11.proceedCheckout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, "CHECKOUT.PAYMENT.PROCESS_TO_PAY"), " ");
  }
}

function PaymentComponent_div_35_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6, ". ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 2, "BOOKINGS.CHECKOUT_TERMS.ADDITIONAL_REGULATIONS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](5, 4, "BOOKINGS.CHECKOUT_TERMS.ADDITIONAL_REGULATIONS_MORE_LINK"));
  }
}

function PaymentComponent_div_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 28)(1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function PaymentComponent_div_36_Template_button_click_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r14);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
      return ctx_r13.proceedCheckout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](3, 1, "CHECKOUT.PAYMENT.PROCESS_TO_PAY"), " ");
  }
}

class PaymentComponent {
  constructor(tzCheckoutService, cartService, trazlerAPI, stripeService, dialogService, translateService, checkoutErrorService, router, loaderService, platformService, scrollService, serviceTabs) {
    this.tzCheckoutService = tzCheckoutService;
    this.cartService = cartService;
    this.trazlerAPI = trazlerAPI;
    this.stripeService = stripeService;
    this.dialogService = dialogService;
    this.translateService = translateService;
    this.checkoutErrorService = checkoutErrorService;
    this.router = router;
    this.loaderService = loaderService;
    this.platformService = platformService;
    this.scrollService = scrollService;
    this.serviceTabs = serviceTabs;
    this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroup({});
    this.validTravellers = false;
  }

  get billingFormGroup() {
    var _a;

    return (_a = this.paymentForm) === null || _a === void 0 ? void 0 : _a.get('billing');
  }

  get disableBooking() {
    var _a;

    const stripeForm = (_a = this.paymentForm) === null || _a === void 0 ? void 0 : _a.get('payment');
    return (
      /*!this.checkout.agreeToTerms ||
      !this.checkout.healthDeclarationChecked ||*/
      !this.paymentForm.valid || stripeForm && !this.checkout.isStripeValid || !this.validTravellers
    );
  }

  get showTripRefundInfo() {
    if (!this.cartData || this.cartData.items.length <= 1) {
      return false;
    }

    const cartItems = [...new Map(this.cartData.items.map(item => [item.serviceId, item])).values()];
    return cartItems.length > 1;
  }

  updateValidation() {
    this.tzCheckoutService.setBillingValidators(this.billingFormGroup, this.checkout.invoiceRequired);
  }

  proceedCheckout() {
    if (this.disableBooking) {
      this.checkFormValidity();
      return;
    }

    const bookingReq = this.tzCheckoutService.makeBookingReq(this.cartData.items, this.checkout, this.paymentForm);
    console.log('Booking bookingReq', bookingReq); // LocalStorageManager.removeItem('_prevState');

    this.trazlerAPI.Booking(bookingReq).then(success => {
      // LocalStorageManager.setItem('latestBookingId', success.id);
      this.handleBookingSuccess(success, bookingReq);
    }, failure => {
      // LocalStorageManager.removeItem('latestBookingId');
      this.bookingFailure(failure, false, bookingReq);
    });
  }

  bookingSuccess(bookingReq, success) {
    console.log('success: ' + success);
    this.showLoader(false);

    if (success.infoMessage) {
      this.showPriceChangeAlert(success.infoMessage).subscribe(() => {
        this.dialogService.openSnackBar({
          message: this.translateService.instant('NOTIFS.BOOKING_SUCCESS', {
            bookingId: success === null || success === void 0 ? void 0 : success.id
          })
        });
        this.router.navigate(['checkout-processed', 'success', success.id]);
      });
      return;
    }

    this.router.navigate(['checkout-processed', 'success', success.id]);
  } // The card action has been handled
  // The PaymentIntent can be confirmed again on the server


  makeBooking(bookingReq) {
    console.log(bookingReq);
    this.trazlerAPI.Booking(bookingReq).then(res => {
      console.log('Booking res After card action handled: ', res); // LocalStorageManager.setItem('latestBookingId', res.id);

      this.bookingSuccess(bookingReq, res);
    }, err => {
      this.bookingFailure(err, false, bookingReq);
      console.log(err);
    });
  } //Handle payment for no PCI


  hdlNoPCIPayment(bookingReq, clientSecret) {
    this.stripeService.getStripe().confirmCardPayment(clientSecret, {
      payment_method: {
        card: this.stripeService.getCartElement()
      }
    }).then(result => {
      if (result.error) {
        this.showLoader(false);
        this.dialogService.openSnackBar({
          message: result.error.message
        });
        this.router.navigate(['checkout-processed', 'payment-failed']);
        return;
      } else {
        bookingReq.pId = result.paymentIntent.id;
        this.makeBooking(bookingReq);
      }
    });
  } //Handle card payment with client secret


  hdlPaymentWithSecret(bookingReq, clientSecret) {
    this.showLoader(true, 'LOADER_MESSAGES.BOOKING_CONFIRM');
    this.stripeService.getStripe().confirmCardPayment(clientSecret).then(result => {
      if (result.error) {
        this.bookingFailure(result.error, true, bookingReq);
      } else {
        bookingReq.pId = result.paymentIntent.id;
        this.makeBooking(bookingReq);
      }
    });
  }

  handleBookingSuccess(successData, bookingReq) {
    console.log('Booking success: ', successData);

    if (successData && successData.stripeAction === 1) {
      this.hdlNoPCIPayment(bookingReq, successData.clientSecret);
    } else if (successData && successData.clientSecret) {
      this.hdlPaymentWithSecret(bookingReq, successData.clientSecret);
    } else {
      this.bookingSuccess(bookingReq, successData);
    }
  }

  bookingFailure(failure, isStripe, bookingReq) {
    console.log('booking failure: ', failure);
    this.cartService.reInit().then(cartData => {
      console.log('cartData after failure is:', cartData);

      if (cartData.bookingStatus === _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_0__.CartStatus.STATUS_PROGRESS) {
        this.showLoader(true, 'LOADER_MESSAGES.BOOKING_IN_PROGRESS');
        const combId = cartData.combId;
        const deviceId = cartData.deviceId;
        let retry = 5; // retry 5 times to get a final booking status
        // Here in this case we wait for the booking to confirmed from provider

        const recheckInterval = setInterval(() => {
          this.cartService.recheckCartItem(combId, deviceId, true).then(cartRes => {
            retry--;

            if (cartRes.bookingStatus === _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_0__.CartStatus.STATUS_PROGRESS) {
              if (!retry) {
                clearInterval(recheckInterval);
                this.showLoader(false);
              }

              return;
            }

            if (cartRes.bookingStatus === _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_0__.CartStatus.STATUS_PRICE_CHANGED) {
              clearInterval(recheckInterval);
              this.bookingSuccess(bookingReq, cartRes);
            }

            if (!retry) {
              clearInterval(recheckInterval);
              this.showLoader(false);
            }
          }, cartErr => {
            if (cartErr.error.error === 'redis: nil') {
              clearInterval(recheckInterval);
              this.bookingSuccess(bookingReq);
            }
          });
        }, 10000);
        return;
      }

      this.showLoader(false);

      if (failure.error && failure.error.info) {
        this.showPriceChangeAlert(failure.error.info).subscribe(() => {
          this.checkoutErrorService.handleBookingError(failure.error, isStripe);
        });
        return;
      }

      this.checkoutErrorService.handleBookingError(isStripe ? failure : failure.error, isStripe);
    });
  }

  showPriceChangeAlert(infoContent) {
    return this.dialogService.openConfirmationDialog({
      title: this.translateService.instant(infoContent.title),
      content: infoContent.content,
      confirmBtnTitle: this.translateService.instant('CHECKOUT.PAYMENT.OK_GREAT')
    }).afterClosed();
  }

  showLoader(show, msg, title) {
    this.loaderService.triggerLoading.emit({
      loading: show,
      type: 'small',
      textKey: msg,
      title
    });
  }

  checkFormValidity() {
    var _a, _b;

    let invalidId = '';

    const markFormAsDirty = (formGroup, formId) => {
      Object.keys(formGroup.controls).forEach(key => {
        formGroup.controls[key].markAsDirty();
        formGroup.controls[key].markAsTouched();
      });

      if (invalidId === '') {
        invalidId = formId;
      }
    };

    const profileForm = (_a = this.paymentForm) === null || _a === void 0 ? void 0 : _a.get('profile');

    if (profileForm.invalid) {
      markFormAsDirty(profileForm, 'PAYMENT_PROFILE');
    }

    const paymentForm = (_b = this.paymentForm) === null || _b === void 0 ? void 0 : _b.get('payment');

    if ((paymentForm === null || paymentForm === void 0 ? void 0 : paymentForm.invalid) || paymentForm && !this.checkout.isStripeValid) {
      markFormAsDirty(paymentForm, 'PAYMENT_STRIPE');
      this.stripeService.updateStripe.next();
    }

    if (this.checkout.invoiceRequired && this.billingFormGroup.invalid) {
      markFormAsDirty(this.billingFormGroup, 'PAYMENT_BILLING');
    }

    if (invalidId !== '') {
      this.scrollService.scrollTo(invalidId, 70, true);
    }
  }

}

PaymentComponent.ɵfac = function PaymentComponent_Factory(t) {
  return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modules_checkout_services_tz_checkout_service__WEBPACK_IMPORTED_MODULE_1__.TzCheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_3__.ApiAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_stripe_service__WEBPACK_IMPORTED_MODULE_4__.StripeService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modules_checkout_services_checkout_error_service__WEBPACK_IMPORTED_MODULE_6__.CheckoutErrorService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modules_core_loader_service__WEBPACK_IMPORTED_MODULE_7__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_8__.PlatformService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_9__.ScrollService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_results_tabsUtils_tz_tabs_service__WEBPACK_IMPORTED_MODULE_10__.TzServiceTabs));
};

PaymentComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({
  type: PaymentComponent,
  selectors: [["tz-checkout-payment"]],
  inputs: {
    paymentForm: "paymentForm",
    checkout: "checkout",
    validTravellers: "validTravellers",
    cartData: "cartData"
  },
  decls: 37,
  vars: 32,
  consts: [["class", "tz-form-container mb-0", 4, "ngIf"], ["data-test", "basket-important-information", 1, "tz-form-container", "title-mb", "booking-block", "mb-0", 3, "hidden"], [1, "tz-form-container__title", "title-bold", "tz-form-title"], [1, "tz-form-container__form", "booking-terms"], ["translate", "BOOKINGS.CHECKOUT_TERMS.CONFIRM_BOOKING_TITLE", 1, "booking-terms__title"], [1, "booking-terms__list"], ["translate", "BOOKINGS.CHECKOUT_TERMS.TERMS_LIST.1"], ["translate", "BOOKINGS.CHECKOUT_TERMS.TERMS_LIST.2"], ["target", "_blank", "href", "https://www.google.com/", 1, "tz-purple-link"], ["translate", "BOOKINGS.CHECKOUT_TERMS.TERMS_LIST.4"], [1, "booking-btn-container"], ["class", "tz-btn tz-btn-yellow complete-booking", "data-test", "basket-payment-process-to-pay-btn", 3, "click", 4, "ngIf"], ["class", "tz-form-container__form additional-regulations", 4, "ngIf"], ["class", "tz-fixed-bottom pay-my-booking-btn-box", 4, "ngIf"], [1, "tz-form-container", "mb-0"], ["class", "tz-form-container__title flex space-between", "data-test", "basket-billing-information", 4, "ngIf"], ["class", "invoice-btn", "data-test", "basket-invoice-required-checkbox", 3, "ngClass", "click", 4, "ngIf"], [3, "id"], [3, "ngClass", "formGroup"], ["data-test", "basket-billing-information", 1, "tz-form-container__title", "flex", "space-between"], [1, "flex", "align-center", "checkbox-item-container"], [1, "traveller-validation", "checkbox-item"], ["type", "checkbox", 3, "ngModel", "ngModelChange", "change"], ["data-test", "basket-invoice-required-checkbox"], ["data-test", "basket-invoice-required-checkbox", 1, "invoice-btn", 3, "ngClass", "click"], [1, "invoice-label"], ["data-test", "basket-payment-process-to-pay-btn", 1, "tz-btn", "tz-btn-yellow", "complete-booking", 3, "click"], [1, "tz-form-container__form", "additional-regulations"], [1, "tz-fixed-bottom", "pay-my-booking-btn-box"]],
  template: function PaymentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, PaymentComponent_div_0_Template, 7, 11, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "div", 1)(2, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](4, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 5)(8, "ul");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](9, "li", 6)(10, "li", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](11, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](13, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](16, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](17);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](18, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](19, "li", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](20, "li");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](21);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](22, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](23, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](27, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](28, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](29);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](30, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](31);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](32, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](33, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](34, PaymentComponent_button_34_Template, 3, 3, "button", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](35, PaymentComponent_div_35_Template, 7, 6, "div", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](36, PaymentComponent_div_36_Template, 4, 3, "div", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.billingFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("hidden", !ctx.billingFormGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](4, 14, "CHECKOUT.PAYMENT.IMPORTANT_TEXT"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](13, 16, "BOOKINGS.CHECKOUT_TERMS.TERMS_LIST.3.1"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](16, 18, "BOOKINGS.CHECKOUT_TERMS.TERMS_LIST.3.2"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](". ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](18, 20, "BOOKINGS.CHECKOUT_TERMS.TERMS_LIST.3.3"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](22, 22, "BOOKINGS.CHECKOUT_TERMS.TERMS_LIST.5.1"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](25, 24, "BOOKINGS.CHECKOUT_TERMS.TERMS_LIST.5.2"));
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](", ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](27, 26, "BOOKINGS.CHECKOUT_TERMS.TERMS_LIST.5.3"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](30, 28, "BOOKINGS.CHECKOUT_TERMS.TERMS_LIST.5.4"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](32, 30, "BOOKINGS.CHECKOUT_TERMS.TERMS_LIST.5.5"), " ");
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.showTripRefundInfo);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.CheckboxControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _shared_components_billing_info_billing_info_component__WEBPACK_IMPORTED_MODULE_11__.BillingInfoComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslateDirective],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_14__.TranslatePipe],
  styles: ["[_nghost-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .payment-policy-container[_ngcontent-%COMP%] {\n  padding: 1.25rem 1rem;\n}\n[_nghost-%COMP%]   .payment-policy-container[_ngcontent-%COMP%]   .payment-policy[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1.125rem;\n  letter-spacing: 0.01em;\n  color: var(--color-text-mobile);\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .payment-policy-container[_ngcontent-%COMP%]   .payment-policy[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: var(--color-main-purple);\n}\n[_nghost-%COMP%]   .checkbox-item-container[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n}\n[_nghost-%COMP%]   .checkbox-item-container[_ngcontent-%COMP%]   .checkbox-item[_ngcontent-%COMP%] {\n  margin-left: 0.75rem;\n}\n[_nghost-%COMP%]   .checkbox-item-container[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-right: 0.125rem;\n}\n[_nghost-%COMP%]   tz-billing-info[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   tz-billing-info.opened[_ngcontent-%COMP%] {\n  display: block;\n}\n[_nghost-%COMP%]   .booking-block[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n  \n}\n[_nghost-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-terms[_ngcontent-%COMP%] {\n  background-color: var(--color-light-footer-grey);\n  border: none;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  font-weight: var(--font-weight-semibold);\n  color: var(--color-primary-black);\n  padding-right: 1.875rem;\n}\n[_nghost-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-terms__title[_ngcontent-%COMP%] {\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-terms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n  margin: 0;\n  color: rgba(0, 0, 0, 0.8);\n}\n[_nghost-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-terms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1.5rem;\n}\n[_nghost-%COMP%]   .booking-block[_ngcontent-%COMP%]   .additional-regulations[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  color: var(--color-main-text);\n  margin-top: 1.875rem;\n}\n[_nghost-%COMP%]   .complete-booking[_ngcontent-%COMP%] {\n  margin: 2.5rem 0 0;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .tz-form-container__title[_ngcontent-%COMP%] {\n    color: var(--color-text-mobile);\n  }\n  [_nghost-%COMP%]   .invoice-btn[_ngcontent-%COMP%] {\n    background-color: var(--color-primary-white);\n    padding: 0.5rem 1rem;\n    margin-top: -0.25rem;\n  }\n  [_nghost-%COMP%]   .invoice-btn[_ngcontent-%COMP%]   .invoice-label[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    line-height: 1.5rem;\n    color: var(--color-main-purple);\n    font-weight: var(--font-weight-regular);\n    padding: 0.5rem;\n    text-align: center;\n    border: 1px dashed var(--color-main-purple);\n    border-radius: 0.25rem;\n  }\n  [_nghost-%COMP%]   .invoice-btn.required[_ngcontent-%COMP%] {\n    background-color: var(--color-main-purple);\n  }\n  [_nghost-%COMP%]   .invoice-btn.required[_ngcontent-%COMP%]   .invoice-label[_ngcontent-%COMP%] {\n    color: var(--color-primary-white);\n    border-color: var(--color-primary-white);\n  }\n  [_nghost-%COMP%]   .booking-block[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  [_nghost-%COMP%]   .booking-block.tz-form-container[_ngcontent-%COMP%]   .tz-form-container__title[_ngcontent-%COMP%] {\n    margin: 0;\n  }\n  [_nghost-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-terms[_ngcontent-%COMP%] {\n    background-color: var(--color-primary-white);\n    line-height: 1.125rem;\n    color: var(--color-text-mobile);\n    padding: 1.25rem 1rem;\n  }\n  [_nghost-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-terms__title[_ngcontent-%COMP%] {\n    font-weight: var(--font-weight-regular);\n    margin-bottom: 1.25rem;\n  }\n  [_nghost-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-terms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n    padding-left: 1rem;\n    margin: 0;\n    font-size: 0.75rem;\n    font-weight: var(--font-weight-normal);\n    color: var(--color-text-mobile);\n  }\n  [_nghost-%COMP%]   .booking-block[_ngcontent-%COMP%]   .booking-terms[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child) {\n    margin-bottom: 1.25rem;\n  }\n  [_nghost-%COMP%]   .booking-block[_ngcontent-%COMP%]   .additional-regulations[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    line-height: 1.125rem;\n    color: var(--color-text-mobile);\n    margin-top: 0;\n  }\n  [_nghost-%COMP%]   .complete-booking[_ngcontent-%COMP%] {\n    height: 2.5rem;\n    font-size: 0.875rem;\n    line-height: 1.5rem;\n    font-weight: var(--font-weight-regular);\n    color: var(--color-primary-white);\n    background-color: var(--color-yellow-selected);\n    border-radius: 0.25rem;\n    padding: 0.5rem 1rem;\n    box-shadow: none;\n    margin: 0.5rem 1rem;\n    width: -webkit-fill-available;\n  }\n  [_nghost-%COMP%]   .booking-btn-container[_ngcontent-%COMP%] {\n    background-color: var(--color-primary-white);\n    border-top: 1px solid var(--color-background-mobile);\n  }\n}\n@media (max-width: 920px) {\n  .pay-my-booking-btn-box[_ngcontent-%COMP%] {\n    background-color: var(--color-primary-white);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2Nlc3MtcGF5bWVudC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksY0FBQTtBQURKO0FBR0k7RUFDSSxxQkFBQTtBQURSO0FBR1E7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7QUFEWjtBQUdZO0VBQ0ksK0JBQUE7QUFEaEI7QUFNSTtFQUNJLG1CQUFBO0FBSlI7QUFNUTtFQUNJLG9CQUFBO0FBSlo7QUFPUTtFQUNJLHNCQUFBO0FBTFo7QUFTSTtFQUNJLGFBQUE7QUFQUjtBQVNRO0VBQ0ksY0FBQTtBQVBaO0FBV0k7RUFDSSxtQkFBQTtFQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQTtBQW9CUjtBQVlRO0VBQ0ksZ0RBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0EsaUNBQUE7RUFDQSx1QkFBQTtBQVZaO0FBWVk7RUFDSSxxQkFBQTtBQVZoQjtBQWFZO0VBQ0ksa0JBQUE7RUFDQSxTQUFBO0VBQ0EseUJBQUE7QUFYaEI7QUFhZ0I7RUFDSSxxQkFBQTtBQVhwQjtBQWdCUTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUNBLG9CQUFBO0FBZFo7QUFrQkk7RUFDSSxrQkFBQTtBQWhCUjtBQzFDSTtFRCtETztJQUNJLCtCQUFBO0VBbEJiO0VBc0JNO0lBQ0ksNENBQUE7SUFDQSxvQkFBQTtJQUNBLG9CQUFBO0VBcEJWO0VBc0JVO0lBQ0ksbUJBQUE7SUFDQSxtQkFBQTtJQUNBLCtCQUFBO0lBQ0EsdUNBQUE7SUFDQSxlQUFBO0lBQ0Esa0JBQUE7SUFFQSwyQ0FBQTtJQUNBLHNCQUFBO0VBckJkO0VBd0JVO0lBQ0ksMENBQUE7RUF0QmQ7RUF3QmM7SUFDSSxpQ0FBQTtJQUNBLHdDQUFBO0VBdEJsQjtFQTJCTTtJQUNJLFNBQUE7RUF6QlY7RUEyQlU7SUFDSSxTQUFBO0VBekJkO0VBNEJVO0lBQ0ksNENBQUE7SUFDQSxxQkFBQTtJQUNBLCtCQUFBO0lBQ0EscUJBQUE7RUExQmQ7RUE0QmM7SUFDSSx1Q0FBQTtJQUNBLHNCQUFBO0VBMUJsQjtFQTZCYztJQUNJLGtCQUFBO0lBQ0EsU0FBQTtJQUNBLGtCQUFBO0lBQ0Esc0NBQUE7SUFDQSwrQkFBQTtFQTNCbEI7RUE2QmtCO0lBQ0ksc0JBQUE7RUEzQnRCO0VBZ0NVO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtJQUNBLCtCQUFBO0lBQ0EsYUFBQTtFQTlCZDtFQWtDTTtJQUNJLGNBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsdUNBQUE7SUFDQSxpQ0FBQTtJQUNBLDhDQUFBO0lBQ0Esc0JBQUE7SUFDQSxvQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSw2QkFBQTtFQWhDVjtFQW1DTTtJQUNJLDRDQUFBO0lBQ0Esb0RBQUE7RUFqQ1Y7QUFDRjtBQ3RISTtFRDRKQTtJQUNJLDRDQUFBO0VBbENOO0FBQ0YiLCJmaWxlIjoicHJvY2Vzcy1wYXltZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICAucGF5bWVudC1wb2xpY3ktY29udGFpbmVyIHtcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbSAxcmVtO1xuXG4gICAgICAgIC5wYXltZW50LXBvbGljeSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xuICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICAgICAgICBhIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNoZWNrYm94LWl0ZW0tY29udGFpbmVyIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcblxuICAgICAgICAuY2hlY2tib3gtaXRlbSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC43NXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjEyNXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR6LWJpbGxpbmctaW5mbyB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG5cbiAgICAgICAgJi5vcGVuZWQge1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYm9va2luZy1ibG9jayB7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG5cbiAgICAgICAgLyouY2hlY2tib3gtaXRlbSB7XG4gICAgICAgICAgICAmLnBiLTFfNSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRleHQpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDNweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCB0cmFuc3BhcmVudCBzb2xpZDtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC41cztcblxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG9uLWhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmFkZGl0aW9uYWwtaW5mbyB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10ZXh0KTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjE4OHJlbTtcbiAgICAgICAgfSovXG5cbiAgICAgICAgLmJvb2tpbmctdGVybXMge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtZm9vdGVyLWdyZXkpO1xuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYmxhY2spO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMS44NzVyZW07XG5cbiAgICAgICAgICAgICZfX3RpdGxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHVsIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiByZ2JhKCRjb2xvcjogIzAwMDAwMCwgJGFscGhhOiAwLjgpO1xuXG4gICAgICAgICAgICAgICAgbGk6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkaXRpb25hbC1yZWd1bGF0aW9ucyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10ZXh0KTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuODc1cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNvbXBsZXRlLWJvb2tpbmcge1xuICAgICAgICBtYXJnaW46IDIuNXJlbSAwIDA7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgLnR6LWZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmludm9pY2UtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICAgICAgcGFkZGluZzogMC41cmVtIDFyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMC4yNXJlbTtcblxuICAgICAgICAgICAgLmludm9pY2UtbGFiZWwge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggZGFzaGVkIHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnJlcXVpcmVkIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG5cbiAgICAgICAgICAgICAgICAuaW52b2ljZS1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYm9va2luZy1ibG9jayB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgICYudHotZm9ybS1jb250YWluZXIgLnR6LWZvcm0tY29udGFpbmVyX190aXRsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYm9va2luZy10ZXJtcyB7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS4yNXJlbSAxcmVtO1xuXG4gICAgICAgICAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgdWwge1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcblxuICAgICAgICAgICAgICAgICAgICBsaTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5hZGRpdGlvbmFsLXJlZ3VsYXRpb25zIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5jb21wbGV0ZS1ib29raW5nIHtcbiAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci15ZWxsb3ctc2VsZWN0ZWQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMC41cmVtIDFyZW07XG4gICAgICAgICAgICB3aWR0aDogLXdlYmtpdC1maWxsLWF2YWlsYWJsZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib29raW5nLWJ0bi1jb250YWluZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItYmFja2dyb3VuZC1tb2JpbGUpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AaW5jbHVkZSBtb2JpbGUge1xuICAgIC5wYXktbXktYm9va2luZy1idG4tYm94IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgfVxufVxuIiwiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 15793:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/checkout/components/profile-travellers/profile-travellers.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProfileTravellersComponent": () => (/* binding */ ProfileTravellersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/traveller-type */ 90581);
/* harmony import */ var _core_utils_dates_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/dates-utils */ 59505);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 68951);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/pipes/tz-date.pipe */ 92456);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);














function ProfileTravellersComponent_a_14_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, " \u00A0 | \u00A0 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} }
const _c0 = function (a0) { return { passive: a0 }; };
const _c1 = function (a0) { return { selected: a0 }; };
function ProfileTravellersComponent_a_14_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileTravellersComponent_a_14_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r5); const traveller_r2 = restoredCtx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1); ctx_r4.setValue(traveller_r2); return _r0.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ProfileTravellersComponent_a_14_ng_container_3_Template, 3, 0, "ng-container", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const traveller_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](7, _c0, ctx_r1.isTransport && traveller_r2.disable && traveller_r2.id !== ctx_r1.currentTraveller.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c1, traveller_r2.id === ctx_r1.currentTraveller.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate4"](" ", traveller_r2.firstName, " ", ctx_r1.isTransport ? traveller_r2.middleName : "", " ", traveller_r2.lastName, " \u00A0 | \u00A0 ", ctx_r1.formatTravelerDate(traveller_r2.dateOfBirth), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", traveller_r2.recent);
} }
const _c2 = function (a0) { return { "no-dropdown": a0 }; };
class ProfileTravellersComponent {
    constructor(userService, datePipe, changeDetectorRef, settingsService) {
        this.userService = userService;
        this.datePipe = datePipe;
        this.changeDetectorRef = changeDetectorRef;
        this.settingsService = settingsService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroup({});
        this.ageAt = new Date();
        this.transportTravllers = [];
        this.isTransport = false;
        this.prefixText = '';
        this.resetTraveller = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.setTraveller = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.dateUtils = _core_utils_dates_utils__WEBPACK_IMPORTED_MODULE_2__.DatesUtils;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    }
    get travelerName() {
        const traveller = this.formGroup;
        return (traveller.value.firstName +
            ' ' +
            (traveller.value.middleName ? traveller.value.middleName : '') +
            ' ' +
            traveller.value.lastName);
    }
    get travelerDOB() {
        var _a, _b;
        const dob = (_a = moment__WEBPACK_IMPORTED_MODULE_0__(this.currentTraveller.dateOfBirth, _core_utils_dates_utils__WEBPACK_IMPORTED_MODULE_2__.DatesUtils.updateTzTravelerFormat)) === null || _a === void 0 ? void 0 : _a.toDate();
        return (_b = this.datePipe.transform(dob, 'mediumDate')) !== null && _b !== void 0 ? _b : '';
    }
    get profileTravellers() {
        var _a, _b;
        const travellers = [];
        const selectedAge = this.currentTraveller.selectedAge;
        if (this.transportTravllers && this.transportTravllers.length > 0) {
            let idx = 0;
            for (const traveller of this.transportTravllers) {
                if (traveller.id && traveller.id !== '') {
                    continue;
                }
                const dob = (_a = moment__WEBPACK_IMPORTED_MODULE_0__(traveller.dateOfBirth, _core_utils_dates_utils__WEBPACK_IMPORTED_MODULE_2__.DatesUtils.updateTzTravelerFormat)) === null || _a === void 0 ? void 0 : _a.toDate();
                const age = this.getTravellerAge(dob);
                const isValidTraveller = this.currentTraveller.type === _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_1__.TravellerType.ADULT &&
                    (selectedAge && selectedAge !== -1 ? selectedAge === age : age >= 18);
                if (isValidTraveller) {
                    travellers.push(Object.assign(Object.assign({}, traveller), { id: `transport${idx}`, recent: true, dateOfBirth: moment__WEBPACK_IMPORTED_MODULE_0__(dob).format(_core_utils_dates_utils__WEBPACK_IMPORTED_MODULE_2__.DatesUtils.savedTzTravelerFormat) }));
                    idx++;
                }
            }
        }
        const customer = this.userService.getCustomerInformation();
        if (!this.userService.IsLogged() || !customer || !customer.passengers) {
            return travellers;
        }
        for (const passenger of customer.passengers) {
            if (this.checkoutTravllers) {
                passenger.disable = this.checkoutTravllers.some((t) => passenger.id === t.id);
            }
            const dob = (_b = moment__WEBPACK_IMPORTED_MODULE_0__(passenger.dateOfBirth, _core_utils_dates_utils__WEBPACK_IMPORTED_MODULE_2__.DatesUtils.savedTzTravelerFormat)) === null || _b === void 0 ? void 0 : _b.toDate();
            const age = this.getTravellerAge(dob);
            if (this.currentTraveller.type === _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_1__.TravellerType.ADULT &&
                (selectedAge && selectedAge !== -1 ? selectedAge === age : age >= 18)) {
                travellers.push(passenger);
            }
            if (this.currentTraveller.type === _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_1__.TravellerType.CHILD &&
                (selectedAge && selectedAge !== -1 ? selectedAge === age : age < 18 && age >= 2)) {
                travellers.push(passenger);
            }
            if (this.currentTraveller.type === _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_1__.TravellerType.INFANT && age < 2) {
                travellers.push(passenger);
            }
        }
        return travellers;
    }
    ngOnInit() {
        this.userService.loggedIn$.pipe((0,rxjs__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe((isLogged) => {
            this.changeDetectorRef.detectChanges();
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    setValue(item) {
        this.setTraveller.emit({
            traveller: item,
        });
    }
    reset() {
        this.resetTraveller.emit();
    }
    bannerText() {
        const formGroup = this.formGroup;
        return this.isTransport ? this.transportText(formGroup) : this.getTravellerName(formGroup);
    }
    formatTravelerDate(dateOfBirth) {
        const travelerDate = this.settingsService.locales.DATETIME_FORMATS.tzTravelerShortDate;
        return _core_utils_dates_utils__WEBPACK_IMPORTED_MODULE_2__.DatesUtils.formatDate(dateOfBirth, _core_utils_dates_utils__WEBPACK_IMPORTED_MODULE_2__.DatesUtils.savedTzTravelerFormat, travelerDate.replace(new RegExp('/', 'g'), '.'));
    }
    transportText(traveller) {
        return traveller.valid ? ` | ${this.travelerName} | ${this.travelerDOB}` : '';
    }
    getTravellerName(traveller) {
        return traveller.valid ? ` | ${traveller.value.firstName} ${traveller.value.lastName}` : '';
    }
    getTravellerAge(dateOfBirth) {
        return _core_utils_dates_utils__WEBPACK_IMPORTED_MODULE_2__.DatesUtils.getAgeDiff(dateOfBirth, this.ageAt ? this.ageAt : new Date());
    }
}
ProfileTravellersComponent.ɵfac = function ProfileTravellersComponent_Factory(t) { return new (t || ProfileTravellersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_4__.TzDatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_5__.SettingsService)); };
ProfileTravellersComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ProfileTravellersComponent, selectors: [["tz-profile-travellers"]], inputs: { formGroup: "formGroup", ageAt: "ageAt", currentTraveller: "currentTraveller", checkoutTravllers: "checkoutTravllers", transportTravllers: "transportTravllers", isTransport: "isTransport", prefixText: "prefixText" }, outputs: { resetTraveller: "resetTraveller", setTraveller: "setTraveller" }, decls: 15, vars: 13, consts: [["ngbDropdown", "", "placement", "bottom-start", "data-test", "checkout-traveler-information-titul", 1, "traveller-banner", 3, "formGroup", "ngClass"], ["menu", "ngbDropdown"], ["ngbDropdownToggle", "", 1, "traveller-validation"], [1, "valid-check"], [1, "traveller-name"], [1, "tz-icon-arrow"], ["ngbDropdownMenu", "", 1, "travellers-list"], [1, "overflow-ellipsis", "flex", "align-center", 3, "click"], [1, "check-mark", 3, "ngClass"], ["class", "overflow-ellipsis flex align-center", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "overflow-ellipsis", "flex", "align-center", 3, "ngClass", "click"], [4, "ngIf"], ["translate", "PROFILE.RECENTLY_ADDED", 1, "recent-traveller"]], template: function ProfileTravellersComponent_Template(rf, ctx) { if (rf & 1) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0, 1)(2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "div", 6)(10, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function ProfileTravellersComponent_Template_a_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r6); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](1); ctx.reset(); return _r0.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, ProfileTravellersComponent_a_14_Template, 4, 11, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("formGroup", ctx.formGroup)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](9, _c2, ctx.profileTravellers.length === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", ctx.prefixText, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx.bannerText());
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](11, _c1, !ctx.currentTraveller.id || ctx.currentTraveller.id === ""));
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](13, 7, "PROFILE.NEW_TRAVELLER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.profileTravellers);
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdown, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownToggle, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__.NgbDropdownMenu, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: ["[_nghost-%COMP%]   .no-dropdown[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .no-dropdown[_ngcontent-%COMP%]   .tz-icon-arrow[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .traveller-banner[_ngcontent-%COMP%] {\n  border-radius: 3px 3px 0 0;\n}\n[_nghost-%COMP%]   .travellers-list[_ngcontent-%COMP%] {\n  border-radius: 0 0 3px 3px;\n}\n[_nghost-%COMP%]   .travellers-list[_ngcontent-%COMP%]   .recent-traveller[_ngcontent-%COMP%] {\n  opacity: 0.4;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .traveller-banner[_ngcontent-%COMP%] {\n    background: var(--color-background-mobile);\n    border: unset;\n    border-bottom: 1px solid var(--color-border-mobile);\n    margin-bottom: 0.25rem;\n    border-radius: 0;\n  }\n  [_nghost-%COMP%]   .traveller-validation[_ngcontent-%COMP%] {\n    padding: 0.625rem 0.75rem 0.625rem 1rem;\n    margin: 0;\n  }\n  [_nghost-%COMP%]   .traveller-validation[_ngcontent-%COMP%]   .valid-check[_ngcontent-%COMP%] {\n    display: none;\n  }\n  [_nghost-%COMP%]   .traveller-validation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    font-weight: var(--font-weight-regular);\n    color: var(--color-main-purple);\n    line-height: 1.25rem;\n    letter-spacing: 0.15px;\n  }\n  [_nghost-%COMP%]   .traveller-validation[_ngcontent-%COMP%]   span.traveller-name[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    font-weight: var(--font-weight-normal);\n  }\n  [_nghost-%COMP%]   .traveller-validation[_ngcontent-%COMP%]   .tz-icon-arrow[_ngcontent-%COMP%] {\n    font-size: 1.25rem;\n    color: var(--color-text-mobile);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUtdHJhdmVsbGVycy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksb0JBQUE7QUFGUjtBQUlRO0VBQ0ksYUFBQTtBQUZaO0FBTUk7RUFDSSwwQkFBQTtBQUpSO0FBT0k7RUFDSSwwQkFBQTtBQUxSO0FBT1E7RUFDSSxZQUFBO0FBTFo7QUNzQ0k7RUQ1Qkk7SUFDSSwwQ0FBQTtJQUNBLGFBQUE7SUFDQSxtREFBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7RUFQVjtFQVVNO0lBQ0ksdUNBQUE7SUFDQSxTQUFBO0VBUlY7RUFVVTtJQUNJLGFBQUE7RUFSZDtFQVdVO0lBQ0ksbUJBQUE7SUFDQSx1Q0FBQTtJQUNBLCtCQUFBO0lBQ0Esb0JBQUE7SUFDQSxzQkFBQTtFQVRkO0VBV2M7SUFDSSxrQkFBQTtJQUNBLHNDQUFBO0VBVGxCO0VBYVU7SUFDSSxrQkFBQTtJQUNBLCtCQUFBO0VBWGQ7QUFDRiIsImZpbGUiOiJwcm9maWxlLXRyYXZlbGxlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidXRpbHMvbWl4aW5zXCI7XG5cbjpob3N0IHtcbiAgICAubm8tZHJvcGRvd24ge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICAudHotaWNvbi1hcnJvdyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRyYXZlbGxlci1iYW5uZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAzcHggM3B4IDAgMDtcbiAgICB9XG5cbiAgICAudHJhdmVsbGVycy1saXN0IHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDNweCAzcHg7XG5cbiAgICAgICAgLnJlY2VudC10cmF2ZWxsZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgLnRyYXZlbGxlci1iYW5uZXIge1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYmFja2dyb3VuZC1tb2JpbGUpO1xuICAgICAgICAgICAgYm9yZGVyOiB1bnNldDtcbiAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRyYXZlbGxlci12YWxpZGF0aW9uIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtIDAuNzVyZW0gMC42MjVyZW0gMXJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICAgICAgLnZhbGlkLWNoZWNrIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XG5cbiAgICAgICAgICAgICAgICAmLnRyYXZlbGxlci1uYW1lIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ei1pY29uLWFycm93IHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 20808:
/*!************************************************************************!*\
  !*** ./src/app/modules/checkout/components/stripe/stripe.component.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "StripeComponent": () => (/* binding */ StripeComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/stripe.const */ 27605);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var _services_stripe_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/stripe.service */ 32865);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_mob_input_mob_input_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/mob-input/mob-input.component */ 97835);
/* harmony import */ var _shared_components_tz_form_error_tz_form_error_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/tz-form-error/tz-form-error.component */ 27779);
/* harmony import */ var _shared_components_payment_address_payment_address_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/components/payment-address/payment-address.component */ 9448);















const _c0 = ["stripeFormContainer"];

function StripeComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 24)(1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 3, "CHECKOUT.PAYMENT.TITLE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", "PAYMENT_STRIPE");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](7, 5, "CHECKOUT.PAYMENT.TEXT"), " ");
  }
}

function StripeComponent_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](4, "span", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 2, "CHECKOUT.PAYMENT.TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("id", "PAYMENT_STRIPE");
  }
}

function StripeComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", ctx_r2.cartData.helpers.imprintText, " ");
  }
}

function StripeComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 1, "CHECKOUT.PAYMENT.TEXT"), " ");
  }
}

function StripeComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "tz-mob-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r5.formGroup)("key", "cardNo")("fieldType", "stripeErrcardNoId")("title", "CREDIT_CARDS.NUMBER");
  }
}

function StripeComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "tz-mob-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r6.formGroup)("key", "cardExp")("fieldType", "stripeErrcardExpId")("title", "CREDIT_CARDS.EXPIRATION_DATE");
  }
}

function StripeComponent_div_37_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "tz-mob-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r7.formGroup)("key", "holder")("fieldType", "HOLDERS_NAME")("title", "CREDIT_CARDS.HOLDERS_NAME");
  }
}

function StripeComponent_div_45_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "tz-mob-input", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r8.formGroup)("key", "cardCvc")("fieldType", "stripeErrcardCvcId")("title", "CREDIT_CARDS.CVC_CODE");
  }
}

function StripeComponent_tz_payment_address_46_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tz-payment-address", 32);
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r9.formGroup);
  }
}

function StripeComponent_tz_payment_address_48_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tz-payment-address", 32);
  }

  if (rf & 2) {
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx_r10.formGroup);
  }
}

const _c1 = function (a0) {
  return {
    "hide-strip-form": a0
  };
};

const _c2 = function (a0) {
  return {
    "stripe-valid": a0
  };
};

class StripeComponent {
  constructor(stripeService, translateService, settingsService, platformService) {
    this.stripeService = stripeService;
    this.translateService = translateService;
    this.settingsService = settingsService;
    this.platformService = platformService;
    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({});
    this.stripeForm = {};
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_9__.Subject();
  }

  ngAfterViewInit() {
    this.stripeService.isStripLoaded().subscribe(loaded => {
      if (loaded) {
        this.initStripe();
        this.stripeService.updateStripe.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
          this.eltBlur(_core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementContainer.CARDNO);
          this.eltBlur(_core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementContainer.CARDEXP);
          this.eltBlur(_core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementContainer.CARDCVC);
        });
        this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_10__.takeUntil)(this.destroy$)).subscribe(() => {
          this.initStripe();
          this.checkout.isStripeValid = false;
        });
      }
    });
  }

  ngOnDestroy() {
    this.cardNo.destroy();
    this.cardExp.destroy();
    this.cardCvc.destroy();
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  setFormEle() {
    const getEl = id => {
      const nativeElementOfInput = this.stripeFormContainer.nativeElement.querySelector('#' + id);

      if (nativeElementOfInput) {
        nativeElementOfInput.innerText = '';
        nativeElementOfInput.classList.remove('blured');
        return nativeElementOfInput;
      }

      return getEl(id);
    };

    const setEle = id => {
      this.stripeForm[id] = {
        el: getEl(id),
        err: getEl('stripeErr' + id + 'Id'),
        valid: false
      };
    };

    setEle(_core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementContainer.CARDNO);
    setEle(_core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementContainer.CARDEXP);
    setEle(_core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementContainer.CARDCVC);
  }

  setStripeValid() {
    const isValid = id => this.stripeForm[id].valid;

    this.checkout.isStripeValid = isValid(_core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementContainer.CARDNO) && isValid(_core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementContainer.CARDEXP) && isValid(_core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementContainer.CARDCVC);
  }

  eltBlur(fieldType) {
    if (!this.stripeForm[fieldType].valid) {
      this.stripeForm[fieldType].el.classList.add('blured');

      if (this.stripeForm[fieldType].valid === false) {
        this.stripeForm[fieldType].err.textContent = this.translateService.instant('PROFILE.Required');
      }
    } else if (this.stripeForm[fieldType].valid) {
      this.stripeForm[fieldType].el.classList.remove('blured');
    }

    this.setStripeValid();
  }

  eltChange(fieldType, event) {
    this.stripeForm[fieldType].err.textContent = '';

    if (event.error) {
      this.stripeForm[fieldType].err.textContent = event.error.message;
      this.stripeForm[fieldType].valid = null;
    } else if (event.complete) {
      this.stripeForm[fieldType].el.classList.remove('blured');
      this.stripeForm[fieldType].valid = true;
    } else if (event.empty) {
      this.stripeForm[fieldType].valid = false;
    }

    this.setStripeValid();
  }

  eltFocus(fieldType) {
    if (!this.stripeForm[fieldType].valid) {
      this.stripeForm[fieldType].el.classList.remove('blured');
    }
  }

  stripeMount() {
    try {
      const mount = (ele, fieldType) => {
        ele.mount('#' + fieldType);
        ele.on('change', event => this.eltChange(fieldType, event));
        ele.on('blur', () => this.eltBlur(fieldType));
        ele.on('focus', () => this.eltFocus(fieldType));
      };

      mount(this.cardNo, _core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementContainer.CARDNO);
      mount(this.cardExp, _core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementContainer.CARDEXP);
      mount(this.cardCvc, _core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementContainer.CARDCVC);
      console.log('stripe mount successful');
    } catch (e) {
      console.log('stripe mount failed with e', e, 'will retry in 1s');
      setTimeout(() => {
        this.stripeMount.bind(this);
      }, 1000);
    }
  }

  initStripe() {
    this.setFormEle(); // Create an instance of Elements

    const elements = this.stripeService.getStripe().elements({
      locale: this.settingsService.langCode
    });
    const stripeStyle = this.platformService.isMobileDevice ? this.stripeService.stripeMobileFieldStyle : this.stripeService.stripeFieldStyle; // Create an instance of the card Element

    this.cardNo = elements.create(_core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementsKeys.CARDNO, {
      style: stripeStyle,
      showIcon: true
    });
    this.cardExp = elements.create(_core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementsKeys.CARDEXP, {
      style: stripeStyle
    });
    this.cardCvc = elements.create(_core_constants_stripe_const__WEBPACK_IMPORTED_MODULE_0__.StripeElementsKeys.CARDCVC, {
      style: stripeStyle
    });
    this.stripeService.setCartElement(this.cardNo); // Add an instance of the card Element into the `card-element` <div>

    this.stripeMount();
  }

}

StripeComponent.ɵfac = function StripeComponent_Factory(t) {
  return new (t || StripeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_stripe_service__WEBPACK_IMPORTED_MODULE_1__.StripeService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_3__.PlatformService));
};

StripeComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: StripeComponent,
  selectors: [["tz-stripe"]],
  viewQuery: function StripeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](_c0, 7, _angular_core__WEBPACK_IMPORTED_MODULE_7__.ElementRef);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.stripeFormContainer = _t.first);
    }
  },
  inputs: {
    formGroup: "formGroup",
    checkout: "checkout",
    cartData: "cartData"
  },
  decls: 50,
  vars: 46,
  consts: [["data-test", "basket-payment-information", 1, "tz-form-container", "title-mb"], ["class", "tz-form-container__title title-bold secure-payment", "data-test", "basket-payment", 4, "ngIf"], [4, "ngIf"], ["class", "tz-form-container__form imprint-msg", 4, "ngIf"], [3, "ngClass"], [1, "tz-form-container__form"], ["stripeFormContainer", ""], ["class", "tz-secure-text", 4, "ngIf"], [1, "form-group-container", 3, "formGroup"], [1, "field-row"], [1, "tz-field"], ["data-test", "basket-payment-card-number", "id", "cardNo", 1, "tz-stripe", "full-width", "field", 3, "ngClass"], [1, "tz-field__name"], [1, "valid-check"], ["id", "stripeErrcardNoId", 1, "error-msg"], ["class", "tz-field", 4, "ngIf"], ["data-test", "basket-payment-expiration-date", "id", "cardExp", 1, "tz-stripe", "full-width", "field", 3, "ngClass"], ["id", "stripeErrcardExpId", 1, "error-msg"], [1, "field-row", "stripe-row"], ["data-test", "basket-payment-card-holder-name", "type", "text", "formControlName", "holder", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", " ", 1, "field"], ["key", "holder", "fieldType", "HOLDERS_NAME", 3, "form"], ["data-test", "basket-payment-cvc", "id", "cardCvc", 1, "tz-stripe", "full-width", "field", 3, "ngClass"], ["id", "stripeErrcardCvcId", 1, "error-msg"], [3, "formGroup", 4, "ngIf"], ["data-test", "basket-payment", 1, "tz-form-container__title", "title-bold", "secure-payment"], [1, "secure-payment__title"], [3, "id"], [1, "secure-payment__text", "tz-secure-text"], [1, "tz-form-container__title", "title-bold", "tz-form-title", "mb-0"], [1, "tz-form-container__form", "imprint-msg"], [1, "tz-secure-text"], ["ngDefaultControl", "", 3, "formGroup", "key", "fieldType", "title"], [3, "formGroup"]],
  template: function StripeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, StripeComponent_div_1_Template, 8, 7, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, StripeComponent_ng_container_3_Template, 5, 4, "ng-container", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](4, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](5, StripeComponent_div_5_Template, 2, 1, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 4)(7, "div", 5, 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](9, StripeComponent_div_9_Template, 3, 3, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](10, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "form", 8)(12, "div", 9)(13, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](14, "div", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](17, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](18, "span", 13)(19, "span", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, StripeComponent_div_20_Template, 2, 4, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](21, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "div", 16);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](23, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](24);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](25, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](26, "span", 13)(27, "span", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](28, StripeComponent_div_28_Template, 2, 4, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](29, "div", 18)(30, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](31, "input", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](32, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](34, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](35, "span", 13)(36, "tz-form-error", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](37, StripeComponent_div_37_Template, 2, 4, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](38, "div", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](39, "div", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](40, "span", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](41);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](42, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](43, "span", 13)(44, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](45, StripeComponent_div_45_Template, 2, 4, "div", 15);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](46, StripeComponent_tz_payment_address_46_Template, 1, 1, "tz-payment-address", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](47, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](48, StripeComponent_tz_payment_address_48_Template, 1, 1, "tz-payment-address", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](49, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 20, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](4, 22, ctx.platformService.isMobileDevice$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.cartData && ctx.cartData.totalImprintAmt);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](38, _c1, ctx.cartData.helpers.payNowInt <= 0));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](10, 24, ctx.platformService.isMobileDevice$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](40, _c2, ctx.stripeForm["cardNo"] == null ? null : ctx.stripeForm["cardNo"].valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](17, 26, "CREDIT_CARDS.NUMBER"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](42, _c2, ctx.stripeForm["cardExp"] == null ? null : ctx.stripeForm["cardExp"].valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](25, 28, "CREDIT_CARDS.EXPIRATION_DATE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](34, 30, "CREDIT_CARDS.HOLDERS_NAME"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("form", ctx.formGroup);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](44, _c2, ctx.stripeForm["cardCvc"] == null ? null : ctx.stripeForm["cardCvc"].valid));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](42, 32, "CREDIT_CARDS.CVC_CODE"));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](47, 34, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](49, 36, ctx.platformService.isMobileDevice$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_13__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _shared_components_mob_input_mob_input_component__WEBPACK_IMPORTED_MODULE_4__.MobInputComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _shared_components_tz_form_error_tz_form_error_component__WEBPACK_IMPORTED_MODULE_5__.TzFormErrorComponent, _shared_components_payment_address_payment_address_component__WEBPACK_IMPORTED_MODULE_6__.PaymentAddressComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe],
  styles: ["[_nghost-%COMP%]   .tz-form-container[_ngcontent-%COMP%] {\n  margin-top: 1.25rem;\n}\n[_nghost-%COMP%]   .stripe-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  width: 25rem;\n}\n[_nghost-%COMP%]   .stripe-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n  width: 7.5rem;\n}\n[_nghost-%COMP%]   .stripe-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n[_nghost-%COMP%]   .tz-secure-text[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  line-height: 1.125rem;\n  letter-spacing: 0.01em;\n  font-weight: var(--font-weight-normal);\n}\n[_nghost-%COMP%]   .secure-payment[_ngcontent-%COMP%] {\n  padding: 0;\n}\n[_nghost-%COMP%]   .secure-payment__title[_ngcontent-%COMP%] {\n  padding: 0 1.25rem;\n}\n[_nghost-%COMP%]   .secure-payment__text[_ngcontent-%COMP%] {\n  border-top: 1px solid var(--upgrade-right-border);\n  padding: 0.625rem 1.25rem;\n}\n[_nghost-%COMP%]   tz-payment-address[_ngcontent-%COMP%]  .name-address {\n  display: none;\n}\n[_nghost-%COMP%]   .hide-strip-form[_ngcontent-%COMP%] {\n  display: none;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .field-row[_ngcontent-%COMP%]:last-child   .tz-field[_ngcontent-%COMP%]:last-child   .tz-stripe[_ngcontent-%COMP%] {\n    border: none;\n  }\n  [_nghost-%COMP%]   .field-row[_ngcontent-%COMP%]:last-child   .tz-field[_ngcontent-%COMP%]:last-child   .tz-stripe.blured.StripeElement--empty[_ngcontent-%COMP%], [_nghost-%COMP%]   .field-row[_ngcontent-%COMP%]:last-child   .tz-field[_ngcontent-%COMP%]:last-child   .tz-stripe.blured.StripeElement--invalid[_ngcontent-%COMP%] {\n    border-bottom: 1px solid var(--color-primary-error);\n  }\n  [_nghost-%COMP%]   .tz-form-container[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n  [_nghost-%COMP%]   .tz-form-container__title[_ngcontent-%COMP%] {\n    color: var(--color-text-mobile);\n  }\n  [_nghost-%COMP%]   .tz-form-container__form[_ngcontent-%COMP%] {\n    padding-bottom: 0;\n    border-bottom: 0;\n  }\n  [_nghost-%COMP%]   .tz-secure-text[_ngcontent-%COMP%] {\n    margin-bottom: 0.625rem;\n  }\n  [_nghost-%COMP%]   .stripe-row[_ngcontent-%COMP%]   .tz-field[_ngcontent-%COMP%], [_nghost-%COMP%]   .tz-field[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0cmlwZS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksbUJBQUE7QUFGUjtBQU1RO0VBQ0ksWUFBQTtBQUpaO0FBT1E7RUFDSSxhQUFBO0FBTFo7QUFRUTtFQUNJLGNBQUE7QUFOWjtBQVVJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esc0NBQUE7QUFSUjtBQVdJO0VBQ0ksVUFBQTtBQVRSO0FBV1E7RUFDSSxrQkFBQTtBQVRaO0FBWVE7RUFDSSxpREFBQTtFQUNBLHlCQUFBO0FBVlo7QUFjSTtFQUNJLGFBQUE7QUFaUjtBQWVJO0VBQ0ksYUFBQTtBQWJSO0FDbUJJO0VERFE7SUFDSSxZQUFBO0VBZmQ7RUFrQlU7SUFDSSxtREFBQTtFQWhCZDtFQW9CTTtJQUNJLGFBQUE7RUFsQlY7RUFvQlU7SUFDSSwrQkFBQTtFQWxCZDtFQXFCVTtJQUNJLGlCQUFBO0lBQ0EsZ0JBQUE7RUFuQmQ7RUF1Qk07SUFDSSx1QkFBQTtFQXJCVjtFQXdCTTs7SUFFSSxXQUFBO0VBdEJWO0FBQ0YiLCJmaWxlIjoic3RyaXBlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG46aG9zdCB7XG4gICAgLnR6LWZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS4yNXJlbTtcbiAgICB9XG5cbiAgICAuc3RyaXBlLXJvdyB7XG4gICAgICAgID4gOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIHdpZHRoOiAyNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgID4gOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgd2lkdGg6IDcuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgID5kaXYge1xuICAgICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHotc2VjdXJlLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gICAgfVxuXG4gICAgLnNlY3VyZS1wYXltZW50IHtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAmX190aXRsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEuMjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAmX190ZXh0IHtcbiAgICAgICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCB2YXIoLS11cGdyYWRlLXJpZ2h0LWJvcmRlcik7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbSAxLjI1cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdHotcGF5bWVudC1hZGRyZXNzOjpuZy1kZWVwIC5uYW1lLWFkZHJlc3Mge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIC5oaWRlLXN0cmlwLWZvcm0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIC5maWVsZC1yb3c6bGFzdC1jaGlsZCAudHotZmllbGQ6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICAudHotc3RyaXBlIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC50ei1zdHJpcGUuYmx1cmVkLlN0cmlwZUVsZW1lbnQtLWVtcHR5LCAudHotc3RyaXBlLmJsdXJlZC5TdHJpcGVFbGVtZW50LS1pbnZhbGlkIHtcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItcHJpbWFyeS1lcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudHotZm9ybS1jb250YWluZXIge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcblxuICAgICAgICAgICAgJl9fdGl0bGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX2Zvcm0ge1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudHotc2VjdXJlLXRleHQge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc3RyaXBlLXJvdyAudHotZmllbGQsXG4gICAgICAgIC50ei1maWVsZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 3942:
/*!************************************************************************************************!*\
  !*** ./src/app/modules/checkout/components/transport-luggages/transport-luggages.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransportLuggagesComponent": () => (/* binding */ TransportLuggagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _schemas_modules_flights_flight_luggage_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @schemas/modules/flights/flight-luggage.model */ 79890);
/* harmony import */ var _services_modules_checkout_utils_transport_luggages_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/checkout/utils/transport-luggages.utils */ 82882);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/pipes/tz-currency.pipe */ 98967);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);










function TransportLuggagesComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "FLIGHT.LUGGAGE.BAGGAGE"), " ");
} }
function TransportLuggagesComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "tz-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "FLIGHT.LUGGAGE.NO_BAGGAGE_INCLUDED"), " ");
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r14.flightLuggage.includedOptions.bag1[passenger_r7.type].title, " ");
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_4_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r11.flightLuggage.includedOptions.bag1[passenger_r7.type].title);
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_5_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](2, 1, "FLIGHT.LUGGAGE.personalItem"), " ");
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_5_ng_container_1_Template, 3, 3, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r12.flightLuggage.includedOptions.bag1.type === "personalItem" || ctx_r12.flightLuggage.includedOptions.bag1.type !== "checkIn");
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_7_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r18.flightLuggage.includedOptions.bag1[passenger_r7.type].weightTexts.join(" "), " ");
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_7_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r19.flightLuggage.includedOptions.bag1[passenger_r7.type].dimensions, " ");
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_7_ng_container_1_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_7_span_2_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.flightLuggage.includedOptions.bag1[passenger_r7.type] == null ? null : ctx_r13.flightLuggage.includedOptions.bag1[passenger_r7.type].weightTexts);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.flightLuggage.includedOptions.bag1[passenger_r7.type].dimensions);
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 14)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "tz-icon", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_4_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_5_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_ng_container_7_Template, 3, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "case-small-black");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!ctx_r9.flightLuggage.includedOptions.bag1[passenger_r7.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r9.flightLuggage.includedOptions.bag1[passenger_r7.type]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !!ctx_r9.flightLuggage.includedOptions.bag1[passenger_r7.type]);
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_5_tz_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tz-icon", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "case-small-black");
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_5_tz_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tz-icon", 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "case-dark");
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_5_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r26.flightLuggage.includedOptions.bag2[passenger_r7.type].title, " ");
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_5_ng_container_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r27.flightLuggage.includedOptions.bag2[passenger_r7.type].weightTexts.join(", "), " ");
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_5_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r28.flightLuggage.includedOptions.bag2[passenger_r7.type].dimensions, " ");
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr")(1, "td", 14)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_5_tz_icon_3_Template, 1, 1, "tz-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_5_tz_icon_4_Template, 1, 1, "tz-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_5_ng_container_5_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_5_ng_container_7_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_5_span_8_Template, 2, 1, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const passenger_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.flightLuggage.includedOptions.bag2.type !== "checkIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.flightLuggage.includedOptions.bag2.type === "checkIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.flightLuggage.includedOptions.bag2[passenger_r7.type].title);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.flightLuggage.includedOptions.bag2[passenger_r7.type] == null ? null : ctx_r10.flightLuggage.includedOptions.bag2[passenger_r7.type].weightTexts);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r10.flightLuggage.includedOptions.bag2[passenger_r7.type].dimensions);
} }
function TransportLuggagesComponent_div_0_ng_container_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_4_Template, 8, 4, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TransportLuggagesComponent_div_0_ng_container_3_div_2_tr_5_Template, 9, 5, "tr", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const passenger_r7 = ctx.$implicit;
    const i_r8 = ctx.index;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r6.getTravellerName(i_r8), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.flightLuggage.includedOptions.bag1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.flightLuggage.includedOptions.bag2 && !!ctx_r6.flightLuggage.includedOptions.bag2[passenger_r7.type]);
} }
function TransportLuggagesComponent_div_0_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransportLuggagesComponent_div_0_ng_container_3_div_2_Template, 6, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.passengerDetails);
} }
function TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const trip_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", trip_r34.tripType === "onwardLuggage" ? "Arrival" : "Departure", " ");
} }
function TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_3_tr_4_ng_container_1_tz_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tz-icon", 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "case-small-black");
} }
function TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_3_tr_4_ng_container_1_tz_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tz-icon", 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "case-dark");
} }
function TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_3_tr_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td", 14)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_3_tr_4_ng_container_1_tz_icon_3_Template, 1, 1, "tz-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_3_tr_4_ng_container_1_tz_icon_4_Template, 1, 1, "tz-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const bag_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const passenger_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", bag_r41.type === "personal_item");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", bag_r41.type === "luggage");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, "ADD_PASSENGER." + bag_r41.type), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", bag_r41.isQuantityDiff ? " x " + bag_r41[passenger_r38.type] : bag_r41[passenger_r38.type] > 1 && bag_r41.isQuantityDiff ? " x " + bag_r41[passenger_r38.type] : "", " ");
} }
function TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_3_tr_4_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2, "-");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} }
function TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_3_tr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_3_tr_4_ng_container_1_Template, 9, 6, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_3_tr_4_ng_container_2_Template, 3, 0, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bag_r41 = ctx.$implicit;
    const passenger_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", bag_r41[passenger_r38.type] > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !bag_r41[passenger_r38.type]);
} }
function TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 24)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_3_tr_4_Template, 3, 2, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const i_r39 = ctx.index;
    const trip_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r36.getTravellerName(i_r39), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", trip_r34.tripLuggages);
} }
function TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_1_Template, 2, 1, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_div_3_Template, 5, 2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r33.trainLuggage.length > 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r33.passengerDetails);
} }
function TransportLuggagesComponent_div_0_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransportLuggagesComponent_div_0_ng_container_4_ng_container_1_Template, 4, 2, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r4.trainLuggage);
} }
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_tr_4_tz_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tz-icon", 15);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "case-small-black");
} }
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_tr_4_tz_icon_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tz-icon", 19);
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "case-dark");
} }
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_tr_4_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bagOption_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const passenger_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const bagTypeInfo_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r62 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, ctx_r62.transportLuggagesUtil.getOption(passenger_r53.additionalLuggage, bagTypeInfo_r51.type, bagOption_r59.index).totalPrice, bagOption_r59.prices.listPriceCur), " ");
} }
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_tr_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bagOption_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 1, bagOption_r59.prices.listPrice, bagOption_r59.prices.listPriceCur), " ");
} }
const _c0 = function (a0) { return { disabled: a0 }; };
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_tr_4_Template(rf, ctx) { if (rf & 1) {
    const _r70 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tr", 37)(1, "td", 14)(2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_tr_4_tz_icon_3_Template, 1, 1, "tz-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_tr_4_tz_icon_4_Template, 1, 1, "tz-icon", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "td", 38)(10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](11, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_tr_4_div_11_Template, 3, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_tr_4_div_12_Template, 3, 4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_tr_4_Template_div_click_13_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r70); const bagOption_r59 = restoredCtx.$implicit; const index_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).index; const bagTypeInfo_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r68 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r68.luggageCombinationRemove(index_r54, bagOption_r59, bagTypeInfo_r51.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_tr_4_Template_div_click_16_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r70); const bagOption_r59 = restoredCtx.$implicit; const index_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).index; const bagTypeInfo_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r72 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r72.luggageCombinationAdd(index_r54, bagOption_r59, bagTypeInfo_r51.type); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const bagOption_r59 = ctx.$implicit;
    const passenger_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const bagTypeInfo_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r58 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", bagTypeInfo_r51.type === "cabin");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", bagTypeInfo_r51.type === "checkIn");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 9, bagTypeInfo_r51.txt), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r58.transportLuggagesUtil.formatWeightText(bagOption_r59.weightTexts, true), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r58.transportLuggagesUtil.optionPresent(passenger_r53.additionalLuggage, bagTypeInfo_r51.type, bagOption_r59.index) && ctx_r58.transportLuggagesUtil.getOption(passenger_r53.additionalLuggage, bagTypeInfo_r51.type, bagOption_r59.index).totalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r58.transportLuggagesUtil.optionPresent(passenger_r53.additionalLuggage, bagTypeInfo_r51.type, bagOption_r59.index) || !ctx_r58.transportLuggagesUtil.getOption(passenger_r53.additionalLuggage, bagTypeInfo_r51.type, bagOption_r59.index).totalPrice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c0, !ctx_r58.transportLuggagesUtil.optionPresent(passenger_r53.additionalLuggage, bagTypeInfo_r51.type, bagOption_r59.index) || !ctx_r58.transportLuggagesUtil.getOption(passenger_r53.additionalLuggage, bagTypeInfo_r51.type, bagOption_r59.index).count));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r58.transportLuggagesUtil.optionPresent(passenger_r53.additionalLuggage, bagTypeInfo_r51.type, bagOption_r59.index) ? ctx_r58.transportLuggagesUtil.getOption(passenger_r53.additionalLuggage, bagTypeInfo_r51.type, bagOption_r59.index).count : 0, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c0, ctx_r58.transportLuggagesUtil.disableLuggageSelection(passenger_r53.additionalLuggage, bagTypeInfo_r51.type, bagOption_r59, ctx_r58.flightLuggage[bagTypeInfo_r51.type].maxAllowed)));
} }
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "table");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_tr_4_Template, 17, 15, "tr", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r77 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const index_r54 = ctx_r77.index;
    const passenger_r53 = ctx_r77.$implicit;
    const bagTypeInfo_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r56 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r56.getTravellerName(index_r54), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r56.flightLuggage[bagTypeInfo_r51.type][passenger_r53.type].options);
} }
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_ng_container_6_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const bagOption_r84 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u00A0", bagOption_r84.dimension, " ");
} }
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_ng_container_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_ng_container_6_ng_container_3_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const bagOption_r84 = ctx.ngIf;
    const ctx_r80 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r80.transportLuggagesUtil.formatWeightText(bagOption_r84.weightTexts), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", bagOption_r84.dimension);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u00A0-\u00A0", bagOption_r84.price, " ");
} }
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "span", 53);
} }
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_a_15_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const bagOption_r87 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" \u00A0", bagOption_r87.dimensions, " ");
} }
const _c1 = function (a0) { return { selected: a0 }; };
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_a_15_Template(rf, ctx) { if (rf & 1) {
    const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "a", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_a_15_Template_a_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r92); const bagOption_r87 = restoredCtx.$implicit; _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); const index_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index; const bagTypeInfo_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); ctx_r90.selectLuggageOption(index_r54, bagOption_r87, bagTypeInfo_r51.type); return _r79.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_a_15_ng_container_4_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bagOption_r87 = ctx.$implicit;
    const passenger_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3).$implicit;
    const ctx_r83 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵattribute"]("data-test", "basket-additional-baggage-" + bagOption_r87.weightTexts);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c1, passenger_r53.additionalLuggage.checkIn.selected === bagOption_r87.index));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r83.transportLuggagesUtil.formatWeightText(bagOption_r87.weightTexts), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", bagOption_r87.dimensions);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](6, 5, bagOption_r87.prices.listPrice, bagOption_r87.prices.listPriceCur), " ");
} }
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r97 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 42, 43)(5, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_ng_container_6_Template, 5, 3, "ng-container", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_ng_template_7_Template, 1, 0, "ng-template", null, 46, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](9, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 48)(11, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_Template_a_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r97); const _r79 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](4); const index_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).index; const bagTypeInfo_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit; const ctx_r95 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); ctx_r95.selectLuggageOption(index_r54, null, bagTypeInfo_r51.type); return _r79.close(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "div", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](14, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_a_15_Template, 7, 10, "a", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const _r81 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](8);
    const ctx_r99 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    const index_r54 = ctx_r99.index;
    const passenger_r53 = ctx_r99.$implicit;
    const bagTypeInfo_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx_r57.getTravellerName(index_r54), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r57.transportLuggagesUtil.getSelectedLuggage(passenger_r53.additionalLuggage, bagTypeInfo_r51.type))("ngIfElse", _r81);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](8, _c1, passenger_r53.additionalLuggage.checkIn.selected === ""));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](14, 6, "FLIGHT.LUGGAGE.NO_BAG"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r57.flightLuggage[bagTypeInfo_r51.type][passenger_r53.type].options);
} }
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_1_Template, 5, 2, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_ng_container_2_Template, 16, 10, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const bagTypeInfo_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2).$implicit;
    const ctx_r55 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r55.flightLuggage[bagTypeInfo_r51.type].combinable);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r55.flightLuggage[bagTypeInfo_r51.type].combinable);
} }
function TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_div_1_Template, 3, 2, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r53 = ctx.$implicit;
    const bagTypeInfo_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r52.flightLuggage[bagTypeInfo_r51.type][passenger_r53.type]);
} }
const _c2 = function (a0) { return { "not-combinable": a0 }; };
function TransportLuggagesComponent_div_0_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 33)(1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransportLuggagesComponent_div_0_div_5_div_10_ng_container_2_Template, 2, 1, "ng-container", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const bagTypeInfo_r51 = ctx.$implicit;
    const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c2, !ctx_r50.flightLuggage[bagTypeInfo_r51.type].combinable));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r50.passengerDetails);
} }
const _c3 = function (a0) { return { "mb-0": a0 }; };
const _c4 = function (a0) { return { opened: a0 }; };
function TransportLuggagesComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r104 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 26)(1, "div", 27)(2, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TransportLuggagesComponent_div_0_div_5_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r104); const ctx_r103 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2); return ctx_r103.showAdditionalLuggage = !ctx_r103.showAdditionalLuggage; });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](3, "tz-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, TransportLuggagesComponent_div_0_div_5_div_10_Template, 3, 4, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](11, _c3, !ctx_r5.showAdditionalLuggage));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](13, _c4, ctx_r5.showAdditionalLuggage));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("icon", "case-lightgray");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 7, "FLIGHT.LUGGAGE.ADD_BAGGAGE"), " (", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](7, 9, ctx_r5.checkoutLuggages.flight.isRoundTrip ? "GENERAL.ROUND_TRIP" : "GENERAL.ONE_WAY"), ") ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](15, _c4, ctx_r5.showAdditionalLuggage));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r5.bagTypes);
} }
function TransportLuggagesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransportLuggagesComponent_div_0_div_1_Template, 3, 3, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransportLuggagesComponent_div_0_div_2_Template, 4, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TransportLuggagesComponent_div_0_ng_container_3_Template, 3, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TransportLuggagesComponent_div_0_ng_container_4_Template, 2, 1, "ng-container", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](5, TransportLuggagesComponent_div_0_div_5_Template, 11, 17, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.luggagesIncluded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r0.luggagesIncluded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.checkoutLuggages.flight && ctx_r0.luggagesIncluded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.checkoutLuggages.train && ctx_r0.luggagesIncluded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.checkoutLuggages.flight && ctx_r0.luggagesIncluded && (ctx_r0.flightLuggage.checkIn == null ? null : ctx_r0.flightLuggage.checkIn.hasPayedOptions));
} }
class TransportLuggagesComponent {
    constructor(translateService, tzCurrencyPipe) {
        this.translateService = translateService;
        this.tzCurrencyPipe = tzCurrencyPipe;
        this.updateHelper = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.trainLuggage = [];
        this.showAdditionalLuggage = false;
        this.transportLuggagesUtil = _services_modules_checkout_utils_transport_luggages_utils__WEBPACK_IMPORTED_MODULE_1__.TransportLuggagesUtil;
    }
    get luggagesIncluded() {
        var _a, _b;
        if (this.checkoutLuggages.flight) {
            return !!(((_a = this.flightLuggage.includedOptions) === null || _a === void 0 ? void 0 : _a.bag1) || ((_b = this.flightLuggage.includedOptions) === null || _b === void 0 ? void 0 : _b.bag2));
        }
        return (this.checkoutLuggages.train.onwardLuggage.length > 0 || this.checkoutLuggages.train.returnLuggage.length > 0);
    }
    ngOnChanges(changes) {
        if (changes['checkoutLuggages'] && this.checkoutLuggages) {
            if (this.checkoutLuggages.flight) {
                this.flightLuggage = this.checkoutLuggages.flight.flightLuggage;
                this.bagTypes = [
                    {
                        txt: this.flightLuggage.checkIn && this.flightLuggage.checkIn.replaceIncluded
                            ? 'ADD_PASSENGER.Checked_bag_add'
                            : 'ADD_PASSENGER.Checked_bag',
                        type: _schemas_modules_flights_flight_luggage_model__WEBPACK_IMPORTED_MODULE_0__.FlightLuggageOptionTypes.CHECKIN,
                    },
                    /*{
                        //buying cabin bag is disabled
                        txt:
                            this.flightLuggage.cabin && this.flightLuggage.cabin.replaceIncluded
                                ? 'ADD_PASSENGER.Cabin_bag_add'
                                : 'ADD_PASSENGER.Cabin_bag',
                        type: FlightLuggageOptionTypes.CABIN,
                    },*/
                ];
            }
            else if (this.checkoutLuggages.train) {
                const luggage = this.checkoutLuggages.train;
                this.trainLuggage = luggage.isRoundTripLuggage
                    ? [
                        {
                            tripType: 'onwardLuggage',
                            tripLuggages: luggage.onwardLuggage,
                        },
                    ]
                    : [
                        {
                            tripType: 'onwardLuggage',
                            tripLuggages: luggage.onwardLuggage,
                        },
                        {
                            tripType: 'returnLuggage',
                            tripLuggages: luggage.returnLuggage,
                        },
                    ];
            }
        }
    }
    getTravellerName(idx) {
        return _services_modules_checkout_utils_transport_luggages_utils__WEBPACK_IMPORTED_MODULE_1__.TransportLuggagesUtil.getTravellerName(this.transportFormArray.controls[idx].value, idx, this.translateService);
    }
    luggageCombinationAdd(idx, option, bagType) {
        this.passengerDetails[idx].additionalLuggage = _services_modules_checkout_utils_transport_luggages_utils__WEBPACK_IMPORTED_MODULE_1__.TransportLuggagesUtil.formLuggageCombination(this.passengerDetails[idx].additionalLuggage, option, bagType);
        this.listPriceCurrency = option.prices.listPriceCur;
        this.updateLuggagePrice();
    }
    luggageCombinationRemove(idx, option, bagType) {
        this.passengerDetails[idx].additionalLuggage = _services_modules_checkout_utils_transport_luggages_utils__WEBPACK_IMPORTED_MODULE_1__.TransportLuggagesUtil.removeLuggageCombination(this.passengerDetails[idx].additionalLuggage, option, bagType);
        this.listPriceCurrency = option.prices.listPriceCur;
        this.updateLuggagePrice();
    }
    selectLuggageOption(idx, option, bagType) {
        this.passengerDetails[idx].additionalLuggage = _services_modules_checkout_utils_transport_luggages_utils__WEBPACK_IMPORTED_MODULE_1__.TransportLuggagesUtil.selectLuggageOption(this.passengerDetails[idx].additionalLuggage, option, bagType, this.tzCurrencyPipe);
        this.updateLuggagePrice();
    }
    updateLuggagePrice() {
        let total = 0;
        for (const passenger of this.passengerDetails) {
            total += passenger.additionalLuggage.totalPrice;
        }
        this.checkout.baggageSelected = total > 0;
        this.checkout.additionalLuggagePrice = {
            listPrice: total,
            listPriceCur: this.listPriceCurrency,
        };
        this.updateHelper.emit();
    }
}
TransportLuggagesComponent.ɵfac = function TransportLuggagesComponent_Factory(t) { return new (t || TransportLuggagesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.TzCurrencyPipe)); };
TransportLuggagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TransportLuggagesComponent, selectors: [["tz-transport-luggages"]], inputs: { checkoutLuggages: "checkoutLuggages", checkout: "checkout", passengerDetails: "passengerDetails", transportFormArray: "transportFormArray" }, outputs: { updateHelper: "updateHelper" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "tz-form-container", 4, "ngIf"], [1, "tz-form-container"], ["class", "tz-form-container__title mb-0", 4, "ngIf"], ["class", "tz-form-container__title no-baggage", 4, "ngIf"], [4, "ngIf"], ["class", "flight-additional-luggages", 4, "ngIf"], [1, "tz-form-container__title", "mb-0"], [1, "tz-form-container__title", "no-baggage"], ["icon", "no-baggage"], [1, "tz-form-container__form"], ["class", "flight-included-luggages", 4, "ngFor", "ngForOf"], [1, "flight-included-luggages"], [1, "traveller-name"], [1, "flight-included-luggage"], [1, "luggage-type"], [1, "small-case", 3, "icon"], [1, "luggage-dimension"], ["class", "small-case", 3, "icon", 4, "ngIf"], [3, "icon", 4, "ngIf"], [3, "icon"], [4, "ngFor", "ngForOf"], ["class", "luggage-trip-text", 4, "ngIf"], ["class", "train-included-luggages", 4, "ngFor", "ngForOf"], [1, "luggage-trip-text"], [1, "train-included-luggages"], [1, "train-included-luggage"], [1, "flight-additional-luggages"], [1, "traveller-banner", 3, "ngClass"], ["data-test", "add-baggage", 1, "additional-bag-banner", "traveller-validation", 3, "ngClass", "click"], [1, "banner-txt"], [1, "plus-minus-cont"], [1, "flight-additional-luggages__options", 3, "ngClass"], ["class", "tz-form-container__form", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "tz-form-container__form", 3, "ngClass"], ["class", "flight-additional-luggage", 4, "ngIf"], [1, "flight-additional-luggage"], ["class", "luggage-type-row", 4, "ngFor", "ngForOf"], [1, "luggage-type-row"], [1, "luggage-selections"], ["data-test", "minus-baggage", 1, "tz-icon-minus", "plus-minus", 3, "ngClass", "click"], [1, "added-count"], ["data-test", "plus-baggage", 1, "tz-icon-plus", "plus-minus", 3, "ngClass", "click"], ["ngbDropdown", "", "placement", "bottom-start", 1, "traveller-banner", "baggage-dropdown", "m-0"], ["menu", "ngbDropdown"], ["ngbDropdownToggle", "", 1, "traveller-validation"], [4, "ngIf", "ngIfElse"], ["selectLabel", ""], ["data-test", "basket-additional-baggage-plus-arrow", 1, "tz-icon-arrow"], ["data-test", "basket-baggage-dropdown-menu", "ngbDropdownMenu", "", 1, "travellers-list"], ["data-test", "basket-baggage-dropdown-menu-no-baggaeg", 1, "overflow-ellipsis", "flex", "align-center", 3, "click"], [1, "check-mark", 3, "ngClass"], ["class", "overflow-ellipsis flex align-center dropdown-luggage-dimension", 3, "click", 4, "ngFor", "ngForOf"], [1, "tz-luggages-info"], ["translate", "FLIGHT.LUGGAGE.SELECT"], [1, "overflow-ellipsis", "flex", "align-center", "dropdown-luggage-dimension", 3, "click"]], template: function TransportLuggagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TransportLuggagesComponent_div_0_Template, 6, 5, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.checkoutLuggages);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_3__.TzIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgClass, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownToggle, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__.NgbDropdownMenu], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe, _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_2__.TzCurrencyPipe], styles: [".tz-form-container__title[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n  padding: 8.5px 20.08px 7.5px 19.92px;\n  border-radius: 4px 4px 0 0;\n}\n.tz-form-container__title.no-baggage[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  padding: 0.5rem 0.6458rem 0.5rem 1.25rem;\n  border-radius: 4px;\n}\n.tz-form-container__form[_ngcontent-%COMP%] {\n  padding: 1.25rem;\n  border-radius: 0 0 4px 4px;\n}\ntz-icon[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n}\n.flight-included-luggages[_ngcontent-%COMP%]:not(:last-child), .train-included-luggages[_ngcontent-%COMP%]:not(:last-child), .flight-additional-luggage[_ngcontent-%COMP%]:not(:last-child) {\n  padding-bottom: 1.25rem;\n}\n.flight-included-luggages[_ngcontent-%COMP%]:not(:first-child), .train-included-luggages[_ngcontent-%COMP%]:not(:first-child), .flight-additional-luggage[_ngcontent-%COMP%]:not(:first-child) {\n  border-top: 1px solid var(--upgrade-right-border);\n  padding-top: 1.25rem;\n}\n.flight-included-luggages[_ngcontent-%COMP%]   .traveller-name[_ngcontent-%COMP%], .train-included-luggages[_ngcontent-%COMP%]   .traveller-name[_ngcontent-%COMP%], .flight-additional-luggage[_ngcontent-%COMP%]   .traveller-name[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: var(--font-weight-semibold);\n  margin-bottom: 1rem;\n}\n.flight-included-luggages[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .train-included-luggages[_ngcontent-%COMP%]   td[_ngcontent-%COMP%], .flight-additional-luggage[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n}\n.flight-included-luggages[_ngcontent-%COMP%]   .luggage-type[_ngcontent-%COMP%], .train-included-luggages[_ngcontent-%COMP%]   .luggage-type[_ngcontent-%COMP%], .flight-additional-luggage[_ngcontent-%COMP%]   .luggage-type[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-semibold);\n  padding-right: 3rem;\n}\n.flight-included-luggages[_ngcontent-%COMP%]   .luggage-type[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%], .train-included-luggages[_ngcontent-%COMP%]   .luggage-type[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%], .flight-additional-luggage[_ngcontent-%COMP%]   .luggage-type[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  margin-right: 0.375rem;\n}\n.flight-included-luggages[_ngcontent-%COMP%]   .luggage-type[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .train-included-luggages[_ngcontent-%COMP%]   .luggage-type[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], .flight-additional-luggage[_ngcontent-%COMP%]   .luggage-type[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.flight-included-luggages[_ngcontent-%COMP%]   .luggage-dimension[_ngcontent-%COMP%], .train-included-luggages[_ngcontent-%COMP%]   .luggage-dimension[_ngcontent-%COMP%], .flight-additional-luggage[_ngcontent-%COMP%]   .luggage-dimension[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-normal);\n}\n.flight-included-luggages[_ngcontent-%COMP%]   .luggage-dimension[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .train-included-luggages[_ngcontent-%COMP%]   .luggage-dimension[_ngcontent-%COMP%]   span[_ngcontent-%COMP%], .flight-additional-luggage[_ngcontent-%COMP%]   .luggage-dimension[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: var(--color-text-light-gray);\n  margin-left: 0.5rem;\n}\n.flight-additional-luggage[_ngcontent-%COMP%]   .luggage-type[_ngcontent-%COMP%] {\n  padding-right: 1rem;\n}\n.flight-additional-luggage[_ngcontent-%COMP%]   .luggage-dimension[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-semibold);\n}\n.flight-additional-luggage[_ngcontent-%COMP%]   .luggage-selections[_ngcontent-%COMP%] {\n  width: 50%;\n}\n.luggage-dimension[_ngcontent-%COMP%], .dropdown-luggage-dimension[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n}\n.flight-included-luggage[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:first-child)   td[_ngcontent-%COMP%], .train-included-luggage[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:first-child)   td[_ngcontent-%COMP%] {\n  padding-top: 0.625rem;\n}\n.luggage-trip-text[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  padding-bottom: 0.875rem;\n}\n.flight-additional-luggages[_ngcontent-%COMP%] {\n  margin-top: 0.313rem;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .traveller-banner[_ngcontent-%COMP%] {\n  margin-bottom: 0.313rem;\n  outline: 1px solid var(--color-element-gray-border);\n  border: none;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .additional-bag-banner[_ngcontent-%COMP%] {\n  margin: 0 0.625rem 0 1.25rem;\n  font-size: 0.875rem;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .additional-bag-banner[_ngcontent-%COMP%]   .plus-minus-cont[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  background: url(/assets/icons/web/img/icons/plus.svg) no-repeat center;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .additional-bag-banner.opened[_ngcontent-%COMP%]   .plus-minus-cont[_ngcontent-%COMP%] {\n  background-image: url(/assets/icons/web/img/icons/minus-passive.svg);\n}\n@media not all and (hover: none) {\n  .flight-additional-luggages[_ngcontent-%COMP%]   .additional-bag-banner.opened[_ngcontent-%COMP%]:hover   .plus-minus-cont[_ngcontent-%COMP%] {\n    background-image: url(/assets/icons/web/img/icons/minus.svg);\n  }\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .additional-bag-banner[_ngcontent-%COMP%]   .banner-txt[_ngcontent-%COMP%] {\n  line-height: 1.25rem;\n  margin-left: 0.625rem;\n}\n.flight-additional-luggages__options[_ngcontent-%COMP%] {\n  display: block;\n  max-height: 0px;\n  overflow: hidden;\n}\n.flight-additional-luggages__options.opened[_ngcontent-%COMP%] {\n  max-height: 1500px;\n  overflow: visible;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .tz-form-container__form[_ngcontent-%COMP%] {\n  border-radius: 4px;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .traveller-name[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .luggage-type-row[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: var(--font-weight-semibold);\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .luggage-type-row[_ngcontent-%COMP%]   .tz-icon-minus[_ngcontent-%COMP%] {\n  margin-left: 1.25rem;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .luggage-type-row[_ngcontent-%COMP%]   .added-count[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  text-align: center;\n  font-weight: var(--font-weight-normal);\n  line-height: 1.188rem;\n  display: grid;\n  place-items: center;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:not(:first-child)   td[_ngcontent-%COMP%] {\n  padding-top: 1rem;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .flight-additional-luggage[_ngcontent-%COMP%]   .luggage-selections[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .not-combinable[_ngcontent-%COMP%]   .traveller-name[_ngcontent-%COMP%] {\n  color: var(--color-primary-black);\n  margin-bottom: 1.25rem;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .not-combinable[_ngcontent-%COMP%]   .bag-type[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n  font-weight: var(--font-weight-semibold);\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .not-combinable[_ngcontent-%COMP%]   .baggage-dropdown[_ngcontent-%COMP%] {\n  background-color: var(--color-light-footer-grey);\n  border-color: var(--color-light-footer-grey);\n  border-radius: 0.25rem;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .not-combinable[_ngcontent-%COMP%]   .baggage-dropdown[_ngcontent-%COMP%]   .traveller-validation[_ngcontent-%COMP%] {\n  margin: 0 0.75rem 0 1rem;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .not-combinable[_ngcontent-%COMP%]   .baggage-dropdown[_ngcontent-%COMP%]   .traveller-validation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .not-combinable[_ngcontent-%COMP%]   .baggage-dropdown[_ngcontent-%COMP%]   .tz-luggages-info[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  color: var(--color-text-mobile);\n  font-weight: var(--font-weight-semibold);\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .not-combinable[_ngcontent-%COMP%]   .baggage-dropdown[_ngcontent-%COMP%]   .travellers-list[_ngcontent-%COMP%] {\n  padding: 0.625rem 0;\n  max-height: 220px;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .not-combinable[_ngcontent-%COMP%]   .baggage-dropdown[_ngcontent-%COMP%]   .travellers-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  color: var(--color-text-mobile);\n  padding: 8px 18.14px 8px 15.07px;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .not-combinable[_ngcontent-%COMP%]   .baggage-dropdown[_ngcontent-%COMP%]   .travellers-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .tz-luggages-info[_ngcontent-%COMP%] {\n  margin-right: auto;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .not-combinable[_ngcontent-%COMP%]   .baggage-dropdown[_ngcontent-%COMP%]   .travellers-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   .check-mark[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  width: 22.34px;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .not-combinable[_ngcontent-%COMP%]   .baggage-dropdown[_ngcontent-%COMP%]   .travellers-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:not(:first-child) {\n  font-weight: var(--font-weight-semibold);\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .not-combinable[_ngcontent-%COMP%]   .baggage-dropdown.show[_ngcontent-%COMP%] {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.flight-additional-luggages[_ngcontent-%COMP%]   .not-combinable[_ngcontent-%COMP%]   .baggage-dropdown.show[_ngcontent-%COMP%]   .travellers-list[_ngcontent-%COMP%] {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.plus-minus[_ngcontent-%COMP%] {\n  position: relative;\n  width: 2.5rem;\n  height: 2.5rem;\n  border: 1px solid var(--color-main-purple);\n  border-radius: 3px;\n  cursor: pointer;\n  font-size: 0.938rem;\n  color: var(--color-main-purple);\n  opacity: 0.8;\n}\n.plus-minus.disabled[_ngcontent-%COMP%] {\n  border-color: var(--upgrade-right-border);\n  color: var(--upgrade-right-border);\n  pointer-events: none;\n}\n.plus-minus[_ngcontent-%COMP%]::before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.plus-minus.tz-icon-minus[_ngcontent-%COMP%] {\n  font-size: 2px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zcG9ydC1sdWdnYWdlcy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksbUJBQUE7RUFDQSxvQ0FBQTtFQUNBLDBCQUFBO0FBRlI7QUFJUTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFGWjtBQU1JO0VBQ0ksZ0JBQUE7RUFDQSwwQkFBQTtBQUpSO0FBUUE7RUFDSSxhQUFBO0VBQ0EsY0FBQTtBQUxKO0FBV0k7OztFQUNJLHVCQUFBO0FBTlI7QUFTSTs7O0VBQ0ksaURBQUE7RUFDQSxvQkFBQTtBQUxSO0FBUUk7OztFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx3Q0FBQTtFQUNBLG1CQUFBO0FBSlI7QUFPSTs7O0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQUhSO0FBTUk7OztFQUNJLHdDQUFBO0VBQ0EsbUJBQUE7QUFGUjtBQUlROzs7RUFDSSxzQkFBQTtBQUFaO0FBR1E7OztFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUNaO0FBR0k7OztFQUNJLHNDQUFBO0FBQ1I7QUFDUTs7O0VBQ0ksbUNBQUE7RUFDQSxtQkFBQTtBQUdaO0FBR0k7RUFDSSxtQkFBQTtBQUFSO0FBSUk7RUFDSSx3Q0FBQTtBQUZSO0FBS0k7RUFDSSxVQUFBO0FBSFI7QUFPQTs7RUFFSSx5QkFBQTtBQUpKO0FBU0k7O0VBQ0kscUJBQUE7QUFMUjtBQVNBO0VBQ0ksZUFBQTtFQUNBLHdCQUFBO0FBTko7QUFTQTtFQUNJLG9CQUFBO0FBTko7QUFRSTtFQUNJLHVCQUFBO0VBQ0EsbURBQUE7RUFDQSxZQUFBO0FBTlI7QUFTSTtFQUNJLDRCQUFBO0VBQ0EsbUJBQUE7QUFQUjtBQVNRO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxzRUFBQTtBQVBaO0FBV1k7RUFDSSxvRUFBQTtBQVRoQjtBQ2pESTtFRDhEWTtJQUNJLDREQUFBO0VBVmxCO0FBQ0Y7QUFjUTtFQUNJLG9CQUFBO0VBQ0EscUJBQUE7QUFaWjtBQWdCSTtFQUNJLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFkUjtBQWlCUTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7QUFmWjtBQW1CSTtFQUNJLGtCQUFBO0FBakJSO0FBb0JJO0VBQ0kscUJBQUE7QUFsQlI7QUFzQlE7RUFDSSxXQUFBO0FBcEJaO0FBdUJRO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdDQUFBO0FBckJaO0FBdUJZO0VBQ0ksb0JBQUE7QUFyQmhCO0FBd0JZO0VBQ0ksYUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUF2QmhCO0FBMkJRO0VBQ0ksaUJBQUE7QUF6Qlo7QUE0QlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQTFCWjtBQStCUTtFQUNJLGlDQUFBO0VBQ0Esc0JBQUE7QUE3Qlo7QUFnQ1E7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0NBQUE7QUE5Qlo7QUFpQ1E7RUFDSSxnREFBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7QUEvQlo7QUFpQ1k7RUFDSSx3QkFBQTtBQS9CaEI7QUFpQ2dCO0VBQ0ksbUJBQUE7QUEvQnBCO0FBbUNZO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esd0NBQUE7QUFqQ2hCO0FBb0NZO0VBQ0ksbUJBQUE7RUFDQSxpQkFBQTtBQWxDaEI7QUFvQ2dCO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7QUFsQ3BCO0FBb0NvQjtFQUNJLGtCQUFBO0FBbEN4QjtBQXFDb0I7RUFDSSxvQkFBQTtFQUNBLGNBQUE7QUFuQ3hCO0FBc0NvQjtFQUNJLHdDQUFBO0FBcEN4QjtBQXlDWTtFQUNJLDZCQUFBO0VBQ0EsNEJBQUE7QUF2Q2hCO0FBeUNnQjtFQUNJLHlCQUFBO0VBQ0EsMEJBQUE7QUF2Q3BCO0FBOENBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsY0FBQTtFQUNBLDBDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7QUEzQ0o7QUE2Q0k7RUFDSSx5Q0FBQTtFQUNBLGtDQUFBO0VBQ0Esb0JBQUE7QUEzQ1I7QUE4Q0k7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0Esd0JBQUE7RUFBQSxtQkFBQTtBQTVDUjtBQStDSTtFQUNJLGNBQUE7QUE3Q1IiLCJmaWxlIjoidHJhbnNwb3J0LWx1Z2dhZ2VzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG4udHotZm9ybS1jb250YWluZXIge1xuICAgICZfX3RpdGxlIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgcGFkZGluZzogOC41cHggMjAuMDhweCA3LjVweCAxOS45MnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcblxuICAgICAgICAmLm5vLWJhZ2dhZ2Uge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwLjY0NThyZW0gMC41cmVtIDEuMjVyZW07XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19mb3JtIHtcbiAgICAgICAgcGFkZGluZzogMS4yNXJlbTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwIDRweCA0cHg7XG4gICAgfVxufVxuXG50ei1pY29uIHtcbiAgICB3aWR0aDogMS41cmVtO1xuICAgIGhlaWdodDogMS41cmVtO1xufVxuXG4uZmxpZ2h0LWluY2x1ZGVkLWx1Z2dhZ2VzLFxuLnRyYWluLWluY2x1ZGVkLWx1Z2dhZ2VzLFxuLmZsaWdodC1hZGRpdGlvbmFsLWx1Z2dhZ2Uge1xuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuICAgIH1cblxuICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tdXBncmFkZS1yaWdodC1ib3JkZXIpO1xuICAgICAgICBwYWRkaW5nLXRvcDogMS4yNXJlbTtcbiAgICB9XG5cbiAgICAudHJhdmVsbGVyLW5hbWUge1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgICB9XG5cbiAgICB0ZCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgfVxuXG4gICAgLmx1Z2dhZ2UtdHlwZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDNyZW07XG5cbiAgICAgICAgdHotaWNvbiB7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuMzc1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgPmRpdiB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5sdWdnYWdlLWRpbWVuc2lvbiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbGlnaHQtZ3JheSk7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uZmxpZ2h0LWFkZGl0aW9uYWwtbHVnZ2FnZSB7XG4gICAgLmx1Z2dhZ2UtdHlwZSB7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG5cbiAgICB9XG5cbiAgICAubHVnZ2FnZS1kaW1lbnNpb24ge1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICAgIH1cblxuICAgIC5sdWdnYWdlLXNlbGVjdGlvbnMge1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgIH1cbn1cblxuLmx1Z2dhZ2UtZGltZW5zaW9uLFxuLmRyb3Bkb3duLWx1Z2dhZ2UtZGltZW5zaW9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuXG4uZmxpZ2h0LWluY2x1ZGVkLWx1Z2dhZ2UsXG4udHJhaW4taW5jbHVkZWQtbHVnZ2FnZSB7XG4gICAgdHI6bm90KDpmaXJzdC1jaGlsZCkgdGQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMC42MjVyZW07XG4gICAgfVxufVxuXG4ubHVnZ2FnZS10cmlwLXRleHQge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC44NzVyZW07XG59XG5cbi5mbGlnaHQtYWRkaXRpb25hbC1sdWdnYWdlcyB7XG4gICAgbWFyZ2luLXRvcDogMC4zMTNyZW07XG5cbiAgICAudHJhdmVsbGVyLWJhbm5lciB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMzEzcmVtO1xuICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgdmFyKC0tY29sb3ItZWxlbWVudC1ncmF5LWJvcmRlcik7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICB9XG5cbiAgICAuYWRkaXRpb25hbC1iYWctYmFubmVyIHtcbiAgICAgICAgbWFyZ2luOiAwIDAuNjI1cmVtIDAgMS4yNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcblxuICAgICAgICAucGx1cy1taW51cy1jb250IHtcbiAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb25zL3dlYi9pbWcvaWNvbnMvcGx1cy5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAmLm9wZW5lZCB7XG4gICAgICAgICAgICAucGx1cy1taW51cy1jb250IHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaW1nL2ljb25zL21pbnVzLXBhc3NpdmUuc3ZnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGluY2x1ZGUgb24taG92ZXIge1xuICAgICAgICAgICAgICAgIC5wbHVzLW1pbnVzLWNvbnQge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaW1nL2ljb25zL21pbnVzLnN2Zyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmJhbm5lci10eHQge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC42MjVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19vcHRpb25zIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgLy8gdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcztcblxuICAgICAgICAmLm9wZW5lZCB7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiAxNTAwcHg7XG4gICAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ei1mb3JtLWNvbnRhaW5lcl9fZm9ybSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB9XG5cbiAgICAudHJhdmVsbGVyLW5hbWUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuXG4gICAgLmZsaWdodC1hZGRpdGlvbmFsLWx1Z2dhZ2Uge1xuICAgICAgICB0YWJsZSB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sdWdnYWdlLXR5cGUtcm93IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG5cbiAgICAgICAgICAgIC50ei1pY29uLW1pbnVzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFkZGVkLWNvdW50IHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xODhyZW07XG5cbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0cjpub3QoOmZpcnN0LWNoaWxkKSB0ZCB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sdWdnYWdlLXNlbGVjdGlvbnM+ZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5ub3QtY29tYmluYWJsZSB7XG4gICAgICAgIC50cmF2ZWxsZXItbmFtZSB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS1ibGFjayk7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmJhZy10eXBlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gICAgICAgIH1cblxuICAgICAgICAuYmFnZ2FnZS1kcm9wZG93biB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1saWdodC1mb290ZXItZ3JleSk7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWNvbG9yLWxpZ2h0LWZvb3Rlci1ncmV5KTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG5cbiAgICAgICAgICAgIC50cmF2ZWxsZXItdmFsaWRhdGlvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuNzVyZW0gMCAxcmVtO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHotbHVnZ2FnZXMtaW5mbyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRyYXZlbGxlcnMtbGlzdCB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMC42MjVyZW0gMDtcbiAgICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiAyMjBweDtcblxuICAgICAgICAgICAgICAgIGEge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiA4cHggMTguMTRweCA4cHggMTUuMDdweDtcblxuICAgICAgICAgICAgICAgICAgICAudHotbHVnZ2FnZXMtaW5mbyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuY2hlY2stbWFyayB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyMi4zNHB4O1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNob3cge1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG5cbiAgICAgICAgICAgICAgICAudHJhdmVsbGVycy1saXN0IHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucGx1cy1taW51cyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiAyLjVyZW07XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZm9udC1zaXplOiAwLjkzOHJlbTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgIG9wYWNpdHk6IDAuODtcblxuICAgICYuZGlzYWJsZWQge1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLXVwZ3JhZGUtcmlnaHQtYm9yZGVyKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXVwZ3JhZGUtcmlnaHQtYm9yZGVyKTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBoZWlnaHQ6IGZpdC1jb250ZW50O1xuICAgIH1cblxuICAgICYudHotaWNvbi1taW51cyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMnB4O1xuICAgIH1cbn1cbiIsIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 56804:
/*!********************************************************************************************!*\
  !*** ./src/app/modules/checkout/components/travel-insurance/travel-insurance.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravelInsuranceComponent": () => (/* binding */ TravelInsuranceComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/radio */ 68390);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../shared/pipes/tz-currency.pipe */ 98967);






function TravelInsuranceComponent_div_4_li_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "li", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const content_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", content_r4, " ");
} }
function TravelInsuranceComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 10)(1, "div", 11)(2, "mat-radio-button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TravelInsuranceComponent_div_4_Template_mat_radio_button_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r6); const insurance_r1 = restoredCtx.$implicit; const idx_r2 = restoredCtx.index; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r5.selectInsuranceOption(insurance_r1, idx_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, TravelInsuranceComponent_div_4_li_9_Template, 3, 1, "li", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const insurance_r1 = ctx.$implicit;
    const idx_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r0.selectedInsurance && ctx_r0.selectedInsurance.selectedIdx === idx_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](insurance_r1.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](7, 5, insurance_r1.net.listPrice, insurance_r1.net.listPriceCur), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", insurance_r1.content);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("href", insurance_r1.docUrlIpid, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
const defaultInsurance = { selected: {}, selectedIdx: -1, validatedTC: false };
class TravelInsuranceComponent {
    constructor() {
        this.selectedInsurance = defaultInsurance;
        this.insuranceChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() { }
    selectInsuranceOption(option, selectedIdx = -1) {
        if (option === null) {
            this.insuranceChange.emit(defaultInsurance);
            return;
        }
        this.insuranceChange.emit({
            selected: option,
            selectedIdx,
            validatedTC: false,
        });
    }
}
TravelInsuranceComponent.ɵfac = function TravelInsuranceComponent_Factory(t) { return new (t || TravelInsuranceComponent)(); };
TravelInsuranceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TravelInsuranceComponent, selectors: [["tz-travel-insurance"]], inputs: { tzTravelInsurances: "tzTravelInsurances", selectedInsurance: "selectedInsurance" }, outputs: { insuranceChange: "insuranceChange" }, decls: 10, vars: 3, consts: [["data-test", "basket-insurance-information", 1, "tz-form-container", "mt-20", "title-mb"], ["data-test", "basket-insurance-container", "translate", "INSURANCE.TRAVEL_INSURANCE", 1, "tz-form-container__title", "title-medium"], [3, "id"], [1, "tz-form-container__form"], ["class", "tz-insurance-option", 4, "ngFor", "ngForOf"], [1, "tz-insurance-option", "no-insurance-container"], [1, "tz-insurance-option__type", "flex", "pb-0"], ["data-test", "no-insurance-radio-button", 1, "tz-radio-btn", 3, "checked", "click"], ["translate", "INSURANCE.NO_INSURANCE", 1, "subtitle-2"], ["translate", "INSURANCE.IMPORTANT_MSG", 1, "body-2", "travel-note"], [1, "tz-insurance-option"], [1, "tz-insurance-option__type", "flex"], ["data-test", "basket-insurance-radio-button", 1, "flex", "justify-center", "tz-radio-btn", 3, "checked", "click"], [1, "subtitle-2"], [1, "cost", "subtitle-1"], ["class", "body-2", 4, "ngFor", "ngForOf"], ["target", "_blank", "translate", "INSURANCE.MORE_DETAILS", "data-test", "more-details", 1, "tz-insurance-option__detail", "body-2", "tz-purple-link", 3, "href"], [1, "body-2"], [1, "tz-icon-check-nobg"]], template: function TravelInsuranceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1)(2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, TravelInsuranceComponent_div_4_Template, 11, 8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5)(6, "div", 6)(7, "mat-radio-button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TravelInsuranceComponent_Template_mat_radio_button_click_7_listener() { return ctx.selectInsuranceOption(null); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](9, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("id", "TRAVEL_INSURANCE");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.tzTravelInsurances.insurances);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx.selectedInsurance && ctx.selectedInsurance.selectedIdx === -1);
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_material_radio__WEBPACK_IMPORTED_MODULE_4__.MatRadioButton], pipes: [_shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_0__.TzCurrencyPipe], styles: [".tz-form-container__form[_ngcontent-%COMP%] {\n  outline: 1px var(--color-element-gray-border) solid;\n  border: unset;\n}\n\n.tz-insurance-option[_ngcontent-%COMP%] {\n  background: var(--color-light-footer-grey);\n  border-radius: 0.5rem;\n  padding: 1.25rem;\n  margin-bottom: 0.31rem;\n}\n\n.tz-insurance-option__type[_ngcontent-%COMP%] {\n  padding-bottom: 0.5rem;\n  margin-bottom: 0.938rem;\n  border-bottom: 2px solid var(--color-primary-white);\n}\n\n.tz-insurance-option__type[_ngcontent-%COMP%]   mat-radio-button[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  margin-right: 0.625rem;\n}\n\n.tz-insurance-option__type[_ngcontent-%COMP%]   .subtitle-2[_ngcontent-%COMP%] {\n  width: calc(100% - 1.875rem);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.tz-insurance-option__type[_ngcontent-%COMP%]   .cost[_ngcontent-%COMP%] {\n  margin-left: auto;\n  line-height: 1.5rem;\n}\n\n.tz-insurance-option[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0 0 0.625rem 0;\n  padding-left: 0;\n}\n\n.tz-insurance-option[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  line-height: 1.188rem;\n  margin-bottom: 0.25rem;\n  list-style: none;\n  display: flex;\n  align-items: center;\n}\n\n.tz-insurance-option[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   .tz-icon-check-nobg[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  margin-right: 0.625rem;\n}\n\n.tz-insurance-option.no-insurance-container[_ngcontent-%COMP%] {\n  outline: 1px var(--color-element-gray-border) solid;\n  background: unset;\n  margin-bottom: 0;\n}\n\n.tz-insurance-option.no-insurance-container[_ngcontent-%COMP%]   .subtitle-2[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-normal);\n}\n\n.tz-insurance-option.no-insurance-container[_ngcontent-%COMP%]   .travel-note[_ngcontent-%COMP%] {\n  line-height: 1.125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXZlbC1pbnN1cmFuY2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxtREFBQTtFQUNBLGFBQUE7QUFESjs7QUFJQTtFQUNJLDBDQUFBO0VBQ0EscUJBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBREo7O0FBR0k7RUFDSSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbURBQUE7QUFEUjs7QUFHUTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtBQURaOztBQUlRO0VBQ0ksNEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFGWjs7QUFLUTtFQUNJLGlCQUFBO0VBQ0EsbUJBQUE7QUFIWjs7QUFPSTtFQUNJLHNCQUFBO0VBQ0EsZUFBQTtBQUxSOztBQU9RO0VBQ0kscUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FBTFo7O0FBT1k7RUFDSSxlQUFBO0VBQ0Esc0JBQUE7QUFMaEI7O0FBVUk7RUFDSSxtREFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0JBQUE7QUFSUjs7QUFVUTtFQUNJLHNDQUFBO0FBUlo7O0FBV1E7RUFDSSxxQkFBQTtBQVRaIiwiZmlsZSI6InRyYXZlbC1pbnN1cmFuY2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidXRpbHMvbWl4aW5zXCI7XG5cbi50ei1mb3JtLWNvbnRhaW5lcl9fZm9ybSB7XG4gICAgb3V0bGluZTogMXB4IHZhcigtLWNvbG9yLWVsZW1lbnQtZ3JheS1ib3JkZXIpIHNvbGlkO1xuICAgIGJvcmRlcjogdW5zZXQ7XG59XG5cbi50ei1pbnN1cmFuY2Utb3B0aW9uIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1saWdodC1mb290ZXItZ3JleSk7XG4gICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgIHBhZGRpbmc6IDEuMjVyZW07XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zMXJlbTtcblxuICAgICZfX3R5cGUge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjkzOHJlbTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuXG4gICAgICAgIG1hdC1yYWRpby1idXR0b24ge1xuICAgICAgICAgICAgd2lkdGg6IDEuMjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnRpdGxlLTIge1xuICAgICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEuODc1cmVtKTtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAuY29zdCB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB1bCB7XG4gICAgICAgIG1hcmdpbjogMCAwIDAuNjI1cmVtIDA7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcblxuICAgICAgICBsaSB7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xODhyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgICAgICAudHotaWNvbi1jaGVjay1ub2JnIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYubm8taW5zdXJhbmNlLWNvbnRhaW5lciB7XG4gICAgICAgIG91dGxpbmU6IDFweCB2YXIoLS1jb2xvci1lbGVtZW50LWdyYXktYm9yZGVyKSBzb2xpZDtcbiAgICAgICAgYmFja2dyb3VuZDogdW5zZXQ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgICAgLnN1YnRpdGxlLTIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gICAgICAgIH1cblxuICAgICAgICAudHJhdmVsLW5vdGUge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 39550:
/*!********************************************************************************!*\
  !*** ./src/app/modules/checkout/components/travellers/travellers.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravellersComponent": () => (/* binding */ TravellersComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/traveller-type */ 90581);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _core_constants_trip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/trip */ 16699);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/pipes/date-range.pipe */ 82478);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _profile_travellers_profile_travellers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../profile-travellers/profile-travellers.component */ 15793);
/* harmony import */ var _shared_components_tz_traveller_tz_traveller_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/components/tz-traveller/tz-traveller.component */ 50735);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);















function TravellersComponent_div_0_div_1_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "SERVICES." + (ctx_r5.cartInfo.FLIGHT_TRAIN.isFlight ? "FLIGHT" : "TRAIN")), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r5.serviceTitle[ctx_r5.serviceIds.FLIGHT_TRAIN]);
  }
}

function TravellersComponent_div_0_div_1_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "SERVICES." + (ctx_r6.cartInfo.FLIGHT_TRAIN.isFlight ? "FLIGHT" : "TRAIN")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r6.serviceTitle[ctx_r6.serviceIds.FLIGHT_TRAIN], " ");
  }
}

function TravellersComponent_div_0_div_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "tz-profile-travellers", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resetTraveller", function TravellersComponent_div_0_div_1_ng_container_5_Template_tz_profile_travellers_resetTraveller_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const i_r9 = restoredCtx.index;
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return ctx_r10.resetTraveller(1, i_r9);
    })("setTraveller", function TravellersComponent_div_0_div_1_ng_container_5_Template_tz_profile_travellers_setTraveller_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const i_r9 = restoredCtx.index;
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return ctx_r12.setTraveller(1, $event.traveller, i_r9, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "tz-traveller", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("setTraveller", function TravellersComponent_div_0_div_1_ng_container_5_Template_tz_traveller_setTraveller_5_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const i_r9 = restoredCtx.index;
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return ctx_r13.setTraveller(1, $event.traveller, i_r9);
    })("markFormAsVisited", function TravellersComponent_div_0_div_1_ng_container_5_Template_tz_traveller_markFormAsVisited_5_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r11);
      const i_r9 = restoredCtx.index;
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return ctx_r14.markFormAsVisited.emit("TRANSPORT_TRAVELER_" + i_r9);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const traveller_r8 = ctx.$implicit;
    const i_r9 = ctx.index;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", "TRANSPORT_TRAVELER_" + i_r9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ageAt", ctx_r7.cartInfo.FLIGHT_TRAIN.travelDate.endDate)("isTransport", true)("currentTraveller", ctx_r7.checkout.passengerDetails[i_r9])("checkoutTravllers", ctx_r7.checkout.passengerDetails)("formGroup", traveller_r8)("prefixText", i_r9 === 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 13, "TRAVELLER.PRIMARY_TRAVELER") : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 15, "TRAVELLER.TRAVELER") + " " + (i_r9 + 1));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", traveller_r8)("selectedTraveller", ctx_r7.checkout.passengerDetails[i_r9])("selectedAge", ctx_r7.checkout.passengerDetails[i_r9].selectedAge)("travellerType", ctx_r7.checkout.passengerDetails[i_r9].type)("travelDate", ctx_r7.cartInfo.FLIGHT_TRAIN.travelDate)("formIdx", i_r9);
  }
}

function TravellersComponent_div_0_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TravellersComponent_div_0_div_1_div_1_Template, 5, 4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, TravellersComponent_div_0_div_1_div_3_Template, 5, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, TravellersComponent_div_0_div_1_ng_container_5_Template, 6, 17, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, ctx_r1.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 5, ctx_r1.platformService.isMobileDevice$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.transportFormArray);
  }
}

function TravellersComponent_div_0_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "TRAVELLER.HOTEL"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r15.serviceTitle[ctx_r15.serviceIds.ACC]);
  }
}

function TravellersComponent_div_0_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "TRAVELLER.HOTEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r16.serviceTitle[ctx_r16.serviceIds.ACC], " ");
  }
}

function TravellersComponent_div_0_div_2_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0, 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "tz-profile-travellers", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resetTraveller", function TravellersComponent_div_0_div_2_ng_container_5_Template_tz_profile_travellers_resetTraveller_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const i_r19 = restoredCtx.index;
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return ctx_r20.resetTraveller(0, i_r19);
    })("setTraveller", function TravellersComponent_div_0_div_2_ng_container_5_Template_tz_profile_travellers_setTraveller_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const i_r19 = restoredCtx.index;
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return ctx_r22.setTraveller(0, $event.traveller, i_r19, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "tz-traveller", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("setTraveller", function TravellersComponent_div_0_div_2_ng_container_5_Template_tz_traveller_setTraveller_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const i_r19 = restoredCtx.index;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return ctx_r23.setTraveller(0, $event.traveller, i_r19);
    })("markFormAsVisited", function TravellersComponent_div_0_div_2_ng_container_5_Template_tz_traveller_markFormAsVisited_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r21);
      const i_r19 = restoredCtx.index;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
      return ctx_r24.markFormAsVisited.emit("ACC_TRAVELER_" + i_r19);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const traveller_r18 = ctx.$implicit;
    const i_r19 = ctx.index;
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", "ACC_TRAVELER_" + i_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", traveller_r18)("ageAt", ctx_r17.cartInfo.ACC.travelDate.endDate)("currentTraveller", ctx_r17.checkout.hotelPassengers[i_r19])("checkoutTravllers", ctx_r17.checkout.hotelPassengers)("transportTravllers", ctx_r17.checkout.passengerDetails)("prefixText", ctx_r17.checkout.hotelPassengers[i_r19].roomType);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", traveller_r18)("selectedTraveller", ctx_r17.checkout.hotelPassengers[i_r19])("travellerType", ctx_r17.checkout.hotelPassengers[i_r19].type)("travelDate", ctx_r17.cartInfo.ACC.travelDate);
  }
}

function TravellersComponent_div_0_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TravellersComponent_div_0_div_2_div_1_Template, 5, 4, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, TravellersComponent_div_0_div_2_div_3_Template, 5, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, TravellersComponent_div_0_div_2_ng_container_5_Template, 4, 11, "ng-container", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 3, ctx_r2.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 5, ctx_r2.platformService.isMobileDevice$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r2.hotelFormArray);
  }
}

function TravellersComponent_div_0_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "TRANSFER.TRANSFERS"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r25.serviceTitle[ctx_r25.serviceIds.TRANSFER]);
  }
}

function TravellersComponent_div_0_div_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "GENERAL.TRANSFERS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r26.serviceTitle[ctx_r26.serviceIds.TRANSFER], " ");
  }
}

function TravellersComponent_div_0_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TravellersComponent_div_0_div_3_div_1_Template, 5, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, TravellersComponent_div_0_div_3_div_3_Template, 5, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "tz-profile-travellers", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resetTraveller", function TravellersComponent_div_0_div_3_Template_tz_profile_travellers_resetTraveller_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r27.resetTraveller(3, -1);
    })("setTraveller", function TravellersComponent_div_0_div_3_Template_tz_profile_travellers_setTraveller_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r29.setTraveller(3, $event.traveller, -1, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "tz-traveller", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("setTraveller", function TravellersComponent_div_0_div_3_Template_tz_traveller_setTraveller_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r30.setTraveller(3, $event.traveller, -1);
    })("markFormAsVisited", function TravellersComponent_div_0_div_3_Template_tz_traveller_markFormAsVisited_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r28);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r31.markFormAsVisited.emit("TRANSFER_TRAVELER_0");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 10, ctx_r3.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 12, ctx_r3.platformService.isMobileDevice$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", "TRANSFER_TRAVELER_0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r3.transferFormGroup)("currentTraveller", ctx_r3.checkout.transferPassenger)("transportTravllers", ctx_r3.checkout.passengerDetails)("prefixText", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 14, "TRAVELLER.Customer_Info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r3.transferFormGroup)("selectedTraveller", ctx_r3.checkout.transferPassenger)("travellerType", ctx_r3.checkout.transferPassenger.type);
  }
}

function TravellersComponent_div_0_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "CAR_RENTAL.CAR_RENTAL"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](ctx_r32.serviceTitle[ctx_r32.serviceIds.CAR_RENTAL]);
  }
}

function TravellersComponent_div_0_div_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 10)(1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "CAR_RENTAL.CAR_RENTAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r33.serviceTitle[ctx_r33.serviceIds.CAR_RENTAL], " ");
  }
}

function TravellersComponent_div_0_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TravellersComponent_div_0_div_4_div_1_Template, 5, 4, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, TravellersComponent_div_0_div_4_div_3_Template, 5, 4, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "span", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "tz-profile-travellers", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("resetTraveller", function TravellersComponent_div_0_div_4_Template_tz_profile_travellers_resetTraveller_6_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r34.resetTraveller(2, -1);
    })("setTraveller", function TravellersComponent_div_0_div_4_Template_tz_profile_travellers_setTraveller_6_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r36.setTraveller(2, $event.traveller, -1, true);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "tz-traveller", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("setTraveller", function TravellersComponent_div_0_div_4_Template_tz_traveller_setTraveller_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r37.setTraveller(2, $event.traveller, -1);
    })("markFormAsVisited", function TravellersComponent_div_0_div_4_Template_tz_traveller_markFormAsVisited_8_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
      return ctx_r38.markFormAsVisited.emit("RENTAL_TRAVELER_0");
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 13, ctx_r4.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 15, ctx_r4.platformService.isMobileDevice$));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", "RENTAL_TRAVELER_0");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ageAt", ctx_r4.cartInfo.RENTAL.travelDate.endDate)("currentTraveller", ctx_r4.checkout.rentalPassenger)("transportTravllers", ctx_r4.checkout.passengerDetails)("formGroup", ctx_r4.rentalFormGroup)("prefixText", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 17, "TRAVELLER.Driver_Info"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r4.rentalFormGroup)("selectedTraveller", ctx_r4.checkout.rentalPassenger)("travelDate", ctx_r4.cartInfo.RENTAL.travelDate)("travellerType", ctx_r4.checkout.rentalPassenger.type)("ageLimit", ctx_r4.cartInfo.RENTAL.driverAgeLimit);
  }
}

function TravellersComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TravellersComponent_div_0_div_1_Template, 7, 7, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, TravellersComponent_div_0_div_2_Template, 6, 7, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, TravellersComponent_div_0_div_3_Template, 9, 16, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](4, TravellersComponent_div_0_div_4_Template, 9, 19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx_r0.travellersForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.transportFormArray && ctx_r0.cartInfo.FLIGHT_TRAIN);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.hotelFormArray && ctx_r0.cartInfo.ACC);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.transferFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.rentalFormGroup);
  }
}

const _c0 = ["*"];
class TravellersComponent {
  constructor(changeDetectorRef, userService, dateRange, datePipe, platformService) {
    this.changeDetectorRef = changeDetectorRef;
    this.userService = userService;
    this.dateRange = dateRange;
    this.datePipe = datePipe;
    this.platformService = platformService;
    this.travellersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({});
    this.cartSummary = [];
    this.markFormAsVisited = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
    this.serviceIds = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId;
  }

  get transportFormArray() {
    var _a;

    const formArray = (_a = this.travellersForm) === null || _a === void 0 ? void 0 : _a.get('transport');
    return formArray.controls;
  }

  get hotelFormArray() {
    var _a;

    const formArray = (_a = this.travellersForm) === null || _a === void 0 ? void 0 : _a.get('hotel');
    return formArray.controls;
  }

  get transferFormGroup() {
    var _a;

    return (_a = this.travellersForm) === null || _a === void 0 ? void 0 : _a.get('transfer');
  }

  get rentalFormGroup() {
    var _a;

    return (_a = this.travellersForm) === null || _a === void 0 ? void 0 : _a.get('rental');
  }

  get serviceTitle() {
    const serviceTitleMap = {};
    const transferDates = [];
    const trainDates = [];
    const isMobile = this.platformService.isMobileDevice;
    const maxAddrLength = isMobile ? 45 : 60;

    for (const summary of this.cartSummary) {
      switch (summary.serviceId) {
        case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.FLIGHT:
          {
            const travelDate = summary.flyType === _core_constants_trip__WEBPACK_IMPORTED_MODULE_2__.Trip.ROUND_TRIP ? this.dateRange.transform(summary.departureTzFormat, summary.arrivalTzFormat) : this.datePipe.transform(summary.departureTzFormat, 'mediumDate');
            const addr = `${summary.originCity} (${summary.originCode}) –
                    ${summary.destinationCity} (${summary.destinationCode})`;
            serviceTitleMap[_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.FLIGHT_TRAIN] = `${addr.length > maxAddrLength ? addr.substring(0, maxAddrLength) + '...' : addr} | ${travelDate}`;
            break;
          }

        case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRAIN:
          {
            const addr = `${summary.originCity} – ${summary.destinationCity}`;

            if (!serviceTitleMap[_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.FLIGHT_TRAIN] || serviceTitleMap[_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.FLIGHT_TRAIN] === '') {
              serviceTitleMap[_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.FLIGHT_TRAIN] = `${addr.length > maxAddrLength ? addr.substring(0, maxAddrLength) + '...' : addr}`;
            }

            trainDates.push(summary.departureTzFormat);
            break;
          }

        case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC:
          {
            const date = this.dateRange.transform(summary.checkIn, summary.checkOut);
            const addr = summary.hotelName.length > maxAddrLength - 20 ? summary.hotelName.substring(0, maxAddrLength - 20) + '...' : summary.hotelName;
            serviceTitleMap[_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC] = `${addr} | ${date}`;
            break;
          }

        case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRANSFER:
          {
            transferDates.push(summary.pickupTzDate);
            break;
          }

        case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.CAR_RENTAL:
          {
            const date = this.dateRange.transform(summary.pickupTzDate, summary.dropOffTzDate);
            serviceTitleMap[_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.CAR_RENTAL] = `${summary.class} | ${date}`;
            break;
          }
      }
    }

    if (trainDates.length > 0) {
      serviceTitleMap[_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.FLIGHT_TRAIN] += ` | ${trainDates.length === 2 ? this.dateRange.transform(trainDates[0], trainDates[1]) : this.datePipe.transform(trainDates[0], 'mediumDate')}`;
    }

    if (transferDates.length > 0) {
      serviceTitleMap[_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRANSFER] = transferDates.length === 2 ? this.dateRange.transform(transferDates[0], transferDates[1]) : this.datePipe.transform(transferDates[0], 'mediumDate') + '';
    }

    return serviceTitleMap;
  }

  setTraveller(serviceId, traveller, idx, fromSavedTravellers = false) {
    traveller.middleName = traveller.middleName ? traveller.middleName : '';

    switch (serviceId) {
      case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.FLIGHT_TRAIN:
        {
          const t = this.checkout.passengerDetails[idx];
          this.checkout.passengerDetails[idx] = Object.assign(Object.assign({}, traveller), {
            type: t.type,
            selectedAge: t.selectedAge,
            docNotRequired: t.docNotRequired,
            additionalLuggage: t.additionalLuggage,
            saveTraveller: t.saveTraveller,
            updateTraveller: t.updateTraveller,
            updateTravellerForm: fromSavedTravellers
          });
          break;
        }

      case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC:
        {
          const t = this.checkout.hotelPassengers[idx];
          this.checkout.hotelPassengers[idx] = Object.assign(Object.assign({}, traveller), {
            type: _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_0__.TravellerType.ADULT,
            roomType: t.roomType,
            roomOfferId: t.roomOfferId,
            optionId: t.optionId,
            updateTravellerForm: fromSavedTravellers
          });
          break;
        }

      case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRANSFER:
        {
          if (this.userService.IsLogged() && fromSavedTravellers) {
            const customer = this.userService.getCustomerInformation();
            traveller.phone = {};

            if (customer.phone && customer.phone.number !== '' && (customer.firstName.trim() + customer.lastName.trim()).replace(/ /g, '').toLowerCase() === (traveller.firstName.trim() + traveller.middleName.trim() + traveller.lastName.trim()).toLowerCase()) {
              traveller.phone = customer.phone;
            }
          }

          this.checkout.transferPassenger = Object.assign(Object.assign({}, traveller), {
            type: _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_0__.TravellerType.ADULT,
            updateTravellerForm: fromSavedTravellers
          });
          break;
        }

      case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.CAR_RENTAL:
        {
          this.checkout.rentalPassenger = Object.assign(Object.assign({}, traveller), {
            type: _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_0__.TravellerType.ADULT,
            selectedAge: this.checkout.rentalPassenger.selectedAge,
            updateTravellerForm: fromSavedTravellers
          });
          break;
        }
    }

    this.changeDetectorRef.detectChanges();
    console.log('Traveller updated: ', this.checkout);
  }

  resetTraveller(serviceId, idx) {
    switch (serviceId) {
      case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.FLIGHT_TRAIN:
        {
          const traveller = this.checkout.passengerDetails[idx];
          this.checkout.passengerDetails[idx] = {
            type: traveller.type,
            selectedAge: traveller.selectedAge,
            docNotRequired: traveller.docNotRequired,
            additionalLuggage: traveller.additionalLuggage,
            saveTraveller: traveller.saveTraveller,
            updateTraveller: traveller.updateTraveller,
            updateTravellerForm: true
          };
          break;
        }

      case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC:
        {
          const traveller = this.checkout.hotelPassengers[idx];
          this.checkout.hotelPassengers[idx] = {
            type: _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_0__.TravellerType.ADULT,
            roomType: traveller.roomType,
            roomOfferId: traveller.roomOfferId,
            optionId: traveller.optionId,
            updateTravellerForm: true
          };
          break;
        }

      case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRANSFER:
        {
          this.checkout.transferPassenger = {
            type: _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_0__.TravellerType.ADULT,
            updateTravellerForm: true
          };
          break;
        }

      case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.CAR_RENTAL:
        {
          this.checkout.rentalPassenger = {
            type: _core_constants_traveller_type__WEBPACK_IMPORTED_MODULE_0__.TravellerType.ADULT,
            selectedAge: this.checkout.rentalPassenger.selectedAge,
            updateTravellerForm: true
          };
          break;
        }
    }

    this.changeDetectorRef.detectChanges();
    console.log('Traveller reset: ', this.checkout);
  }

}

TravellersComponent.ɵfac = function TravellersComponent_Factory(t) {
  return new (t || TravellersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_4__.DateRangePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_10__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_5__.PlatformService));
};

TravellersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: TravellersComponent,
  selectors: [["tz-checkout-travellers"]],
  inputs: {
    checkout: "checkout",
    travellersForm: "travellersForm",
    cartInfo: "cartInfo",
    cartSummary: "cartSummary"
  },
  outputs: {
    markFormAsVisited: "markFormAsVisited"
  },
  ngContentSelectors: _c0,
  decls: 1,
  vars: 1,
  consts: [["class", "tz-form-container title-mb", "data-test", "basket-flight-information", 3, "formGroup", 4, "ngIf"], ["data-test", "basket-flight-information", 1, "tz-form-container", "title-mb", 3, "formGroup"], [4, "ngIf"], ["class", "mb-1_25", "data-test", "basket-hotel-information", 4, "ngIf"], ["class", "mb-1_25", "data-test", "basket-transfer-information", 4, "ngIf"], ["class", "mb-1_25", "data-test", "basket-car-rental-information", 4, "ngIf"], ["class", "tz-form-container__title title-bold transport-container", "data-test", "basket-flight-container", 4, "ngIf"], ["class", "mob-service-title", 4, "ngIf"], ["formArrayName", "transport", "data-test", "basket-flight-traveller", 4, "ngFor", "ngForOf"], ["data-test", "basket-flight-container", 1, "tz-form-container__title", "title-bold", "transport-container"], [1, "mob-service-title"], [1, "name"], ["formArrayName", "transport", "data-test", "basket-flight-traveller"], [3, "id"], [3, "ageAt", "isTransport", "currentTraveller", "checkoutTravllers", "formGroup", "prefixText", "resetTraveller", "setTraveller"], ["data-test", "basket-flight-primary-traveller-information", 3, "formGroup", "selectedTraveller", "selectedAge", "travellerType", "travelDate", "formIdx", "setTraveller", "markFormAsVisited"], ["data-test", "basket-hotel-information", 1, "mb-1_25"], ["class", "tz-form-container__title title-bold", "data-test", "basket-hotel-container", 4, "ngIf"], ["formArrayName", "hotel", 4, "ngFor", "ngForOf"], ["data-test", "basket-hotel-container", 1, "tz-form-container__title", "title-bold"], ["formArrayName", "hotel"], ["data-test", "basket-hotel-room-type", 3, "formGroup", "ageAt", "currentTraveller", "checkoutTravllers", "transportTravllers", "prefixText", "resetTraveller", "setTraveller"], ["data-test", "basket-hotel-room-information", 3, "formGroup", "selectedTraveller", "travellerType", "travelDate", "setTraveller", "markFormAsVisited"], ["data-test", "basket-transfer-information", 1, "mb-1_25"], ["class", "tz-form-container__title title-bold", "data-test", "basket-transfer-container", 4, "ngIf"], ["data-test", "basket-transfer-type", 3, "formGroup", "currentTraveller", "transportTravllers", "prefixText", "resetTraveller", "setTraveller"], [3, "formGroup", "selectedTraveller", "travellerType", "setTraveller", "markFormAsVisited"], ["data-test", "basket-transfer-container", 1, "tz-form-container__title", "title-bold"], ["data-test", "basket-car-rental-information", 1, "mb-1_25"], ["class", "tz-form-container__title title-bold", 4, "ngIf"], ["data-test", "basket-driver-information", 3, "ageAt", "currentTraveller", "transportTravllers", "formGroup", "prefixText", "resetTraveller", "setTraveller"], ["data-test", "basket-driver-information-block", 3, "formGroup", "selectedTraveller", "travelDate", "travellerType", "ageLimit", "setTraveller", "markFormAsVisited"], [1, "tz-form-container__title", "title-bold"]],
  template: function TravellersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, TravellersComponent_div_0_Template, 5, 5, "div", 0);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.cartInfo);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _profile_travellers_profile_travellers_component__WEBPACK_IMPORTED_MODULE_6__.ProfileTravellersComponent, _shared_components_tz_traveller_tz_traveller_component__WEBPACK_IMPORTED_MODULE_7__.TzTravellerComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslatePipe],
  styles: ["[_nghost-%COMP%] {\n  color: var(--color-main-text);\n}\n[_nghost-%COMP%]   .tz-form-container__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  line-height: 1.313rem;\n  letter-spacing: 0.0015em;\n  font-weight: var(--font-weight-normal);\n}\n[_nghost-%COMP%]   .tz-form-container__title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]::before {\n  content: \"|\";\n  display: inline-block;\n  padding: 0 0.313rem;\n}\n[_nghost-%COMP%]   tz-traveller[_ngcontent-%COMP%]  .tz-form-container__form {\n  border-radius: 0 0 3px 3px;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   tz-traveller[_ngcontent-%COMP%]  .tz-form-container__form {\n    border-radius: 0;\n    padding-bottom: 2rem;\n  }\n}\n.mob-service-title[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  background-color: var(--color-main-purple);\n  color: var(--color-primary-white);\n  font-size: 0.875rem;\n  line-height: 1.125rem;\n  font-weight: 400;\n  padding: 0.5625rem 1rem;\n}\n.mob-service-title[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-bold);\n  text-transform: uppercase;\n}\n@media (max-width: 920px) {\n  .mb-1_25[_ngcontent-%COMP%] {\n    margin-bottom: 0.5rem;\n  }\n\n  [_nghost-%COMP%]  .mat-radio-outer-circle {\n    border: 1px solid var(--color-border-mobile);\n    background: var(--ion-color-light-gray);\n  }\n\n  [_nghost-%COMP%]     .tz-form-container {\n    margin-bottom: 0.25rem;\n  }\n\n  [_nghost-%COMP%]     .tz-form-container:last-child {\n    margin-bottom: 0;\n  }\n\n  [_nghost-%COMP%]  .mb-1_25:last-child {\n    margin: 0;\n  }\n\n  .payment-note[_ngcontent-%COMP%] {\n    border: 1px solid var(--color-red);\n  }\n}\n.checkbox-item[_ngcontent-%COMP%] {\n  line-height: 1.5rem;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n@media (max-width: 920px) {\n  .checkbox-item[_ngcontent-%COMP%] {\n    width: 100%;\n    background-color: var(--color-primary-white);\n    padding: 0.625rem 1rem;\n    margin: 0.25rem 0;\n  }\n  .checkbox-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    width: -moz-fit-content;\n    width: fit-content;\n    margin: 0;\n    margin-left: auto;\n  }\n  .checkbox-item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    border: 1px solid var(--color-border-mobile);\n    border-color: var(--color-border-mobile);\n    background: var(--icon-color-light-gray);\n    margin: 0;\n    width: 1.25rem;\n    height: 1.25rem;\n  }\n  .checkbox-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    margin-right: 0.75rem;\n    line-height: 1.125rem;\n    color: var(--color-text-mobile);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXZlbGxlcnMuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDZCQUFBO0FBREo7QUFJUTtFQUNJLGVBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0Esc0NBQUE7QUFGWjtBQUlZO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsbUJBQUE7QUFGaEI7QUFPSTtFQUNJLDBCQUFBO0FBTFI7QUNvQ0k7RURoQ0E7SUFJUSxnQkFBQTtJQUNBLG9CQUFBO0VBSlY7QUFDRjtBQVFBO0VBQ0ksa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0VBQ0EsbUJBQUE7RUFDQSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFMSjtBQU9JO0VBQ0ksb0NBQUE7RUFDQSx5QkFBQTtBQUxSO0FDZ0JJO0VETkE7SUFDSSxxQkFBQTtFQU5OOztFQVNFO0lBQ0ksNENBQUE7SUFDQSx1Q0FBQTtFQU5OOztFQVNFO0lBQ0ksc0JBQUE7RUFOTjs7RUFTRTtJQUNJLGdCQUFBO0VBTk47O0VBU0U7SUFDSSxTQUFBO0VBTk47O0VBU0U7SUFDSSxrQ0FBQTtFQU5OO0FBQ0Y7QUFTQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtBQVBKO0FDZkk7RURvQko7SUFLUSxXQUFBO0lBQ0EsNENBQUE7SUFDQSxzQkFBQTtJQUNBLGlCQUFBO0VBTk47RUFRTTtJQUNJLHVCQUFBO0lBQUEsa0JBQUE7SUFDQSxTQUFBO0lBQ0EsaUJBQUE7RUFOVjtFQVNNO0lBQ0ksNENBQUE7SUFDQSx3Q0FBQTtJQUNBLHdDQUFBO0lBQ0EsU0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VBUFY7RUFVTTtJQUNJLGtCQUFBO0lBQ0EscUJBQUE7SUFDQSxxQkFBQTtJQUNBLCtCQUFBO0VBUlY7QUFDRiIsImZpbGUiOiJ0cmF2ZWxsZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG46aG9zdCB7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tdGV4dCk7XG5cbiAgICAudHotZm9ybS1jb250YWluZXJfX3RpdGxlIHtcbiAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zMTNyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDE1ZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcblxuICAgICAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcInxcIjtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAwLjMxM3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIHR6LXRyYXZlbGxlcjo6bmctZGVlcCAudHotZm9ybS1jb250YWluZXJfX2Zvcm0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDAgM3B4IDNweDtcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubW9iLXNlcnZpY2UtdGl0bGUge1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgcGFkZGluZzogMC41NjI1cmVtIDFyZW07XG5cbiAgICAubmFtZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG59XG5cbkBpbmNsdWRlIG1vYmlsZSB7XG4gICAgLm1iLTFfMjUge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gICAgfVxuXG4gICAgOmhvc3Q6Om5nLWRlZXAgLm1hdC1yYWRpby1vdXRlci1jaXJjbGUge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLWxpZ2h0LWdyYXkpO1xuICAgIH1cblxuICAgIDpob3N0IDo6bmctZGVlcCAudHotZm9ybS1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIH1cblxuICAgIDpob3N0IDo6bmctZGVlcCAudHotZm9ybS1jb250YWluZXI6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgOmhvc3Q6Om5nLWRlZXAgLm1iLTFfMjU6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAucGF5bWVudC1ub3RlIHtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItcmVkKTtcbiAgICB9XG59XG5cbi5jaGVja2JveC1pdGVtIHtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIHdpZHRoOiBmaXQtY29udGVudDtcblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcbiAgICAgICAgbWFyZ2luOiAwLjI1cmVtIDA7XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1tb2JpbGUpO1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWljb24tY29sb3ItbGlnaHQtZ3JheSk7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICB3aWR0aDogMS4yNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC43NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 52680:
/*!**************************************************************!*\
  !*** ./src/app/modules/results/tabsUtils/tz-tabs-service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TzServiceTabs": () => (/* binding */ TzServiceTabs)
/* harmony export */ });
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/css-mapping */ 88425);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/cart/services/cart.service */ 16750);
/* harmony import */ var _services_searchEngine_services_trip_planner_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/searchEngine/services/trip-planner.service */ 46809);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/core/listeners-service */ 96831);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/pipes/tz-currency.pipe */ 98967);









class TzServiceTabs {
    constructor(cartService, tripPlannerService, searchDataService, listenersService, currencyPipe) {
        this.cartService = cartService;
        this.tripPlannerService = tripPlannerService;
        this.searchDataService = searchDataService;
        this.listenersService = listenersService;
        this.currencyPipe = currencyPipe;
        this.summaryActive = true;
        this.active = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.INVALID;
        this.tabInfo = {
            enable: false,
            active: false,
            minPrice: '',
            minPriceCur: '',
            resultCount: 0,
            inCart: false,
            selectedItemPrice: '',
            styles: [],
            loader: false,
            preSearch: false,
            loaderIcon: 'loader/tab-spinner',
        };
        this.tabs = [
            Object.assign({ serviceId: _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT_TRAIN, name: 'Flights, Trains', label: 'SEARCH.TAB.FLIGHT_TRAINS', image: 'flight_service.svg', secondImage: 'mob-train-service-tab.svg', ordinal: 1, 
                // icon: CSS_MAPPING['flight']['icon'],
                secondIconClass: _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__.CSS_MAPPING.train.iconClass, iconClass: _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__.CSS_MAPPING.flight.iconClass, 
                //colorCode: CSS_MAPPING.flight.color,
                tabletLabel: 'SEARCH.TAB.FLIGHT_TRAINS_TABLET', mobLabel: 'SEARCH.TAB.FLIGHT_TRAINS_MOB', mobIcon: 'mob-flight-service-tab', secondMobIcon: 'mob-train-service-tab' }, this.tabInfo),
            Object.assign({ serviceId: _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.ACC, name: 'Hotels, Residence', label: 'SEARCH.TAB.HOTELS_RESIDENCES', image: 'hotel_service.svg', ordinal: 2, icon: _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__.CSS_MAPPING.hotel.icon, iconClass: _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__.CSS_MAPPING.hotel.iconClass, 
                //colorCode: CSS_MAPPING.hotel.color,
                tabletLabel: 'SEARCH.TAB.HOTELS_RESIDENCES_TABLET', mobLabel: 'SEARCH.TAB.HOTELS_RESIDENCES_MOB', mobIcon: 'mob-hotels-service-tab' }, this.tabInfo),
            Object.assign({ serviceId: _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRANSFER, name: 'Transfers', label: 'SEARCH.TAB.TRANSFERS', image: 'Transfers.svg', ordinal: 3, icon: _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__.CSS_MAPPING.transfer.icon, iconClass: _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__.CSS_MAPPING.transfer.iconClass, 
                //colorCode: CSS_MAPPING.transfer.color,
                tabletLabel: 'SEARCH.TAB.TRANSFERS_TABLET', mobLabel: 'SEARCH.TAB.TRANSFERS_MOB', mobIcon: 'mob-transfer-service-tab' }, this.tabInfo),
            Object.assign({ serviceId: _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.CAR_RENTAL, name: 'Car Rentals', label: 'SEARCH.TAB.CAR_RENTALS', image: 'car.svg', ordinal: 4, icon: _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__.CSS_MAPPING.rentcar.icon, iconClass: _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__.CSS_MAPPING.rentcar.iconClass, 
                //colorCode: CSS_MAPPING.rentcar.color,
                tabletLabel: 'SEARCH.TAB.CAR_RENTALS_TABLET', mobLabel: 'SEARCH.TAB.CAR_RENTALS_MOB', mobIcon: 'mob-car-service-tab' }, this.tabInfo),
        ];
        this.summaryTab = Object.assign(Object.assign({ serviceId: _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.SUMMARY, name: 'Basket', label: 'GENERAL.SUMMARY', image: 'total.svg', ordinal: 5, color: 'purple-color', icon: 'icon-total' }, this.tabInfo), { mobLabel: 'GENERAL.SUMMARY', tabletLabel: 'GENERAL.SUMMARY', loaderIcon: 'loader/tab-spinner-summary', styles: ['summary'] });
    }
    static getSummaryI18nKey(activeServiceId, allBooked) {
        if (activeServiceId === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.SUMMARY || allBooked) {
            return 'GENERAL.BASKET';
        }
        else {
            return 'GENERAL.SUMMARY';
        }
    }
    reformTabFields(tab, activeServiceId, allBooked) {
        let cartInfo = this.cartService.getCartInfo(tab.serviceId);
        let serviceId = tab.serviceId;
        tab.disable = this.isTabDisabled(tab, serviceId, activeServiceId, allBooked);
        if (tab.serviceId === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.SUMMARY) {
            tab.label = TzServiceTabs.getSummaryI18nKey(activeServiceId, allBooked);
            tab.tabletLabel = tab.label;
            tab.mobLabel = tab.label;
        }
        if (tab.serviceId === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT_TRAIN) {
            const info = this.cartService.getCartInfo(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRAIN);
            if (info.inCart) {
                serviceId = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRAIN;
                tab.image = 'train-blue.svg';
                tab.icon = 'service-icon-train';
                tab.iconClass = _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__.CSS_MAPPING.train.iconClass;
                cartInfo = info;
            }
            else {
                serviceId = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT;
                tab.icon = 'service-icon-flight';
                tab.image = 'flight_service.svg';
                tab.iconClass = _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__.CSS_MAPPING.flight.iconClass;
            }
            if (activeServiceId === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRAIN ||
                activeServiceId === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT ||
                activeServiceId === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT_TRAIN) {
                serviceId = activeServiceId;
            }
        }
        const resultInfo = this.searchDataService.getSearchResult(serviceId);
        if (resultInfo) {
            tab.resultCount = resultInfo.resultLength;
        }
        tab.styles.push(tab.color);
        tab.enable = tab.inCart = cartInfo.inCart;
        tab.selectedItemPrice = cartInfo.price;
        tab.active = serviceId === activeServiceId;
        tab.isVirtual = cartInfo.isVirtual;
        tab.selectedItemPriceCur = cartInfo.currency;
        if (tab.enable) {
            if (cartInfo.price === 0 && cartInfo.inError) {
                tab.isInError = true;
                tab.minPrice = cartInfo.inError.cheapestListPrice;
                tab.minPriceCur = cartInfo.inError.cheapestListPriceCur;
            }
            else {
                tab.isInError = false;
                tab.minPrice = cartInfo.price;
                tab.minPriceCur = cartInfo.currency;
            }
            if (cartInfo.isVirtual) {
                tab.preSearch = true;
            }
        }
        if (!tab.enable || cartInfo.isVirtual) {
            const preSearchInfos = this.tripPlannerService.get(tab.serviceId);
            if (preSearchInfos.enable || preSearchInfos.complete) {
                tab.preSearch =
                    ((preSearchInfos.enable || preSearchInfos.complete) && !preSearchInfos.loader) ||
                        cartInfo.isVirtual;
                tab.loader = preSearchInfos.loader;
                if (cartInfo.isVirtual && cartInfo.price) {
                    tab.minPrice = cartInfo.price;
                    tab.minPriceCur = cartInfo.currency;
                }
                else {
                    tab.minPrice = 0;
                }
            }
            else {
                tab.minPrice = cartInfo.price;
                tab.minPriceCur = cartInfo.currency;
            }
        }
        if (tab.active) {
            if (tab.serviceId === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT_TRAIN) {
                tab.loader =
                    this.tripPlannerService.get(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT).loader ||
                        this.tripPlannerService.get(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRAIN).loader;
            }
            else {
                const preSearchInfos = this.tripPlannerService.get(tab.serviceId);
                tab.loader = preSearchInfos.loader;
            }
        }
        tab.loader = tab.forceLoader ? true : tab.loader;
        return {
            active: tab.active,
            tab,
        };
    }
    setActive(newActive) {
        this.active = newActive;
        this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_TAB_CHANGED, newActive);
    }
    getActive() {
        return this.active;
    }
    isSummaryActive() {
        return this.summaryActive;
    }
    setSummaryActive(state) {
        this.summaryActive = state;
    }
    toggleForceLoader(serviceId, force) {
        for (const tab of this.tabs) {
            if (tab.serviceId === serviceId) {
                tab.forceLoader = force;
                this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_TAB_CHANGED);
                break;
            }
        }
    }
    getTabs() {
        return this.tabs;
    }
    getSummaryTab() {
        return Object.assign(Object.assign({}, this.summaryTab), { styles: ['summary'] });
    }
    updatePriceChanging(oldPrice, currentPrice) {
        const priceDiff = currentPrice - oldPrice;
        const priceDiffStrWithCur = this.currencyPipe.transform(Math.abs(priceDiff));
        return priceDiff > 0 ? `+ ${priceDiffStrWithCur}` : `- ${priceDiffStrWithCur}`;
    }
    isTabDisabled(tab, serviceId, activeServiceId, allBooked) {
        const summaryTabAndNotAllServicesAreBooked = serviceId === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.SUMMARY && !allBooked;
        const notSummaryTabAndServiceIsBookedAndActiveServiceIdIsNotEqualToSummary = serviceId !== _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.SUMMARY &&
            this.cartService.isAllServiceOptionBooked(tab.serviceId) &&
            (activeServiceId !== _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.SUMMARY || tab.selectedService);
        return (summaryTabAndNotAllServicesAreBooked || notSummaryTabAndServiceIsBookedAndActiveServiceIdIsNotEqualToSummary);
    }
}
TzServiceTabs.ɵfac = function TzServiceTabs_Factory(t) { return new (t || TzServiceTabs)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_3__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_searchEngine_services_trip_planner_service__WEBPACK_IMPORTED_MODULE_4__.TripPlannerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_5__.SearchDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_6__.ListenersService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinject"](_shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.TzCurrencyPipe)); };
TzServiceTabs.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjectable"]({ token: TzServiceTabs, factory: TzServiceTabs.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 53651:
/*!*********************************************************************************!*\
  !*** ./src/app/services/modules/checkout/dataservices/checkout.data.service.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CheckoutDataService": () => (/* binding */ CheckoutDataService)
/* harmony export */ });
/* harmony import */ var _services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/searchEngine/services/api-access.service */ 32189);
/* harmony import */ var _core_constants_http_request_type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/http-request-type */ 82354);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 25474);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




class CheckoutDataService extends _services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_0__.ApiAccessService {
    setDraftTravellerInfo(combId, req) {
        const params = {
            entity: 'cart',
            id: combId,
            action: 'setDraftTraveller',
            deviceId: this.settingsService.getDeviceID(),
        };
        if (!params.id) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)('invalid device id' + params);
        }
        else {
            return this.apiCallObs(_core_constants_http_request_type__WEBPACK_IMPORTED_MODULE_1__.HttpRequestType.POST, params, req);
        }
    }
    getDraftTravellerInfo(combId) {
        const params = {
            entity: 'cart',
            id: combId,
            action: 'getDraftTraveller',
            deviceId: this.settingsService.getDeviceID(),
        };
        if (!params.id) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.throwError)('invalid data id' + params);
        }
        else {
            return this.apiCallObs(_core_constants_http_request_type__WEBPACK_IMPORTED_MODULE_1__.HttpRequestType.GET, params);
        }
    }
    getInsurance(bookingReq) {
        const params = {
            entity: 'insurance',
            id: this.settingsService.getDeviceID(),
            actionId: this.settingsService.langCode,
        };
        return this.apiCallObs(_core_constants_http_request_type__WEBPACK_IMPORTED_MODULE_1__.HttpRequestType.POST, params, bookingReq);
    }
}
CheckoutDataService.ɵfac = /*@__PURE__*/ function () { let ɵCheckoutDataService_BaseFactory; return function CheckoutDataService_Factory(t) { return (ɵCheckoutDataService_BaseFactory || (ɵCheckoutDataService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetInheritedFactory"](CheckoutDataService)))(t || CheckoutDataService); }; }();
CheckoutDataService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: CheckoutDataService, factory: CheckoutDataService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 5101:
/*!******************************************************************************!*\
  !*** ./src/app/services/modules/checkout/services/checkout-error.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BOOKING_ERROR_TYPE": () => (/* binding */ BOOKING_ERROR_TYPE),
/* harmony export */   "CheckoutErrorService": () => (/* binding */ CheckoutErrorService)
/* harmony export */ });
/* harmony import */ var _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/cart-status */ 32304);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/modules/cart/utils/cart.utils */ 14770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modules/cart/services/cart.service */ 16750);
/* harmony import */ var _services_modules_cart_services_cart_routing_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modules/cart/services/cart-routing.service */ 72753);
/* harmony import */ var _services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/searchEngine/services/api-access.service */ 32189);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _services_modules_meta_search_metadata_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/modules/meta/search-metadata.service */ 64199);












// Trazler support Booking Error codes
var BOOKING_ERROR_TYPE;
(function (BOOKING_ERROR_TYPE) {
    // Payment card error
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["INVALID_CARD"] = 80] = "INVALID_CARD";
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["UNSUPPORTED_CARD"] = 81] = "UNSUPPORTED_CARD";
    // Payment error
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["BE_TZ_PAYMENT"] = 402] = "BE_TZ_PAYMENT";
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["BE_PAYMENT"] = 426] = "BE_PAYMENT";
    // price been changed (Reset Content)
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["BE_PRICE_CHANGE"] = 205] = "BE_PRICE_CHANGE";
    // Data expired from the provider/from redis
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["BE_EXPIRED"] = 206] = "BE_EXPIRED";
    // Availability changed or ticket sold out while booking
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["BE_SOLDOUT"] = 410] = "BE_SOLDOUT";
    // Duplicate booking initiated
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["BE_DUPLICATE"] = 409] = "BE_DUPLICATE";
    // Invalid data sent to provider.
    // used when the traveller, customer information is not valid
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["BE_VALIDATION"] = 422] = "BE_VALIDATION";
    // Invalid request sent or request not valid (TZ action)
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["BE_INVALIDRQ"] = 400] = "BE_INVALIDRQ";
    // Invalid response received (TZ action)
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["BE_INVALIDRS"] = 406] = "BE_INVALIDRS";
    // Internal system error (Tz & provider)
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["BE_INTERNAL"] = 500] = "BE_INTERNAL";
    // BENotAllowed - access restricted from the server
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["BE_NOT_ALLOWED"] = 405] = "BE_NOT_ALLOWED";
    // If system unable to detect error.
    // use this (watch unknown error in logs and add it to error list)
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["BE_UNKNOWN"] = 421] = "BE_UNKNOWN";
    // Server timeout error
    BOOKING_ERROR_TYPE[BOOKING_ERROR_TYPE["BE_TIMEOUT"] = 408] = "BE_TIMEOUT";
})(BOOKING_ERROR_TYPE || (BOOKING_ERROR_TYPE = {}));
class CheckoutErrorService {
    constructor(router, translateService, dialogService, cartService, cartRoutingService, apiAccessService, searchDataService, searchMetadataService) {
        this.router = router;
        this.translateService = translateService;
        this.dialogService = dialogService;
        this.cartService = cartService;
        this.cartRoutingService = cartRoutingService;
        this.apiAccessService = apiAccessService;
        this.searchDataService = searchDataService;
        this.searchMetadataService = searchMetadataService;
    }
    static errorType(errorCode) {
        switch (errorCode) {
            case BOOKING_ERROR_TYPE.BE_SOLDOUT:
                return 7.2;
            case BOOKING_ERROR_TYPE.BE_PRICE_CHANGE:
                return 7.3;
            default:
                return 7.1;
        }
    }
    static roomsFailed(items) {
        const hasBookedRooms = items.some((item) => item.serviceId === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC &&
            item.selectedItem.bookingOptions.some((option) => _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_2__.CartUtils.isFailed(option.status)));
        const hasFailedRooms = items.some((item) => item.serviceId === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC &&
            item.selectedItem.bookingOptions.some((option) => _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_2__.CartUtils.isBooked(option.status)));
        return hasBookedRooms && hasFailedRooms;
    }
    handleBookingError(error, fromStripe) {
        const paymentError = error.code === BOOKING_ERROR_TYPE.INVALID_CARD ||
            error.code === BOOKING_ERROR_TYPE.UNSUPPORTED_CARD ||
            error.code === BOOKING_ERROR_TYPE.BE_TZ_PAYMENT ||
            error.code === BOOKING_ERROR_TYPE.BE_PAYMENT;
        const isCheckoutError = error.code === BOOKING_ERROR_TYPE.BE_VALIDATION || error.code === BOOKING_ERROR_TYPE.BE_INVALIDRQ;
        if (paymentError || isCheckoutError) {
            if (paymentError) {
                this.router.navigate(['checkout-processed', 'payment-failed']);
            }
            else {
                this.dialogService.openSnackBar({ message: this.formCheckoutErrorMessage(error, fromStripe) });
            }
            return;
        }
        if (error.reloadRentalMeta) {
            console.log('reload rental meta data');
            this.apiAccessService
                .getMetaRes(this.searchDataService.getCombId(), _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.CAR_RENTAL, this.searchDataService.getDataId(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.CAR_RENTAL))
                .then((res) => {
                this.searchMetadataService.saveSearch(res);
                this.cartRoutingService.moveToSummary().then(() => this.showInvalidCartAlert());
            }, (failure) => {
                console.error(failure);
                this.cartRoutingService.moveToSummary().then(() => this.showInvalidCartAlert());
            });
        }
        else {
            this.cartRoutingService.moveToSummary().then(() => this.showInvalidCartAlert());
        }
    }
    formCheckoutErrorMessage(error, fromStripe) {
        let message = error.message;
        switch (error.code) {
            case BOOKING_ERROR_TYPE.INVALID_CARD:
                message = this.translateService.instant('NOTIFS.ERROR.CREDIT_CARDS_INVALID_CARD_NUMBER');
                break;
            case BOOKING_ERROR_TYPE.UNSUPPORTED_CARD:
                message = this.translateService.instant('NOTIFS.ERROR.CREDIT_CARDS_UNSUPPORTED');
                break;
            case BOOKING_ERROR_TYPE.BE_TZ_PAYMENT:
            case BOOKING_ERROR_TYPE.BE_PAYMENT:
                message = this.translateService.instant('NOTIFS.ERROR.PAYMENT_FAIL');
                break;
            case BOOKING_ERROR_TYPE.BE_VALIDATION:
            case BOOKING_ERROR_TYPE.BE_INVALIDRQ:
                message = this.translateService.instant('NOTIFS.ERROR.INVALID_REQ');
                break;
        }
        return message;
    }
    showInvalidCartAlert() {
        const cartData = this.cartService.getCartData();
        const errorType = CheckoutErrorService.errorType(cartData.errorCode);
        if (CheckoutErrorService.roomsFailed(cartData.items)) {
            this.dialogService.openConfirmationDialog({
                title: this.translateService.instant('BOOKINGS.REJECTION.ROOM_REJECTION_POPUPS.TITLE_' + errorType),
                content: this.translateService.instant('BOOKINGS.REJECTION.ROOM_REJECTION_POPUPS.MESSAGE_' + errorType),
                confirmBtnTitle: this.translateService.instant('GENERAL.OK'),
            });
            return;
        }
        let invalidItems = cartData.items.filter((item) => item.selectedItem.bookingOptions.some((option) => option.status >= _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_0__.CartStatus.STATUS_REJECTED));
        invalidItems = invalidItems.filter((item, i, items) => items.findIndex((t) => t.serviceId === item.serviceId) === i);
        if (invalidItems.length === 0) {
            return;
        }
        const serviceName = invalidItems.reduce((servicesTxt, item) => servicesTxt +
            (servicesTxt !== '' ? ', ' : '') +
            this.translateService.instant('SERVICES.' + item.serviceId).toLowerCase(), '');
        this.dialogService.openConfirmationDialog({
            title: this.translateService.instant('BOOKINGS.REJECTION.POPUPS.TITLE_' + errorType, {
                service: serviceName,
            }),
            content: this.translateService.instant('BOOKINGS.REJECTION.POPUPS.MESSAGE_' + errorType, {
                service: serviceName,
            }),
            confirmBtnTitle: this.translateService.instant('GENERAL.OK'),
        });
    }
}
CheckoutErrorService.ɵfac = function CheckoutErrorService_Factory(t) { return new (t || CheckoutErrorService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_11__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_3__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_modules_cart_services_cart_routing_service__WEBPACK_IMPORTED_MODULE_5__.CartRoutingService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_6__.ApiAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_7__.SearchDataService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_services_modules_meta_search_metadata_service__WEBPACK_IMPORTED_MODULE_8__.SearchMetadataService)); };
CheckoutErrorService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({ token: CheckoutErrorService, factory: CheckoutErrorService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_checkout_checkout_module_ts.js.map