"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_customer_customer_module_ts"],{

/***/ 23801:
/*!*************************************************************!*\
  !*** ./src/app/modules/customer/customer-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerRoutingModule": () => (/* binding */ CustomerRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer.component */ 88524);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _customer_component__WEBPACK_IMPORTED_MODULE_0__.CustomerComponent,
        children: [
            {
                path: 'profile',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_customer_profile_profile_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./profile/profile.module */ 984)).then((m) => m.ProfileModule),
            },
            {
                path: 'travellers',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_customer_travellers_travellers_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./travellers/travellers.module */ 26353)).then((m) => m.TravellersModule),
            },
            {
                path: 'payment',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_customer_payment_payment_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./payment/payment.module */ 96149)).then((m) => m.PaymentModule),
            },
            {
                path: 'password',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_customer_password_password_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./password/password.module */ 53285)).then((m) => m.PasswordModule),
            },
            {
                path: 'delete-account',
                loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_modules_customer_delete-account_delete-account_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./delete-account/delete-account.module */ 96996)).then((m) => m.DeleteAccountModule),
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'profile',
            },
            {
                path: '**',
                redirectTo: 'profile',
            },
        ],
    },
];
class CustomerRoutingModule {
}
CustomerRoutingModule.ɵfac = function CustomerRoutingModule_Factory(t) { return new (t || CustomerRoutingModule)(); };
CustomerRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: CustomerRoutingModule });
CustomerRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CustomerRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 88524:
/*!********************************************************!*\
  !*** ./src/app/modules/customer/customer.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerComponent": () => (/* binding */ CustomerComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_pages_urls__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/pages-urls */ 82731);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/tz-svg-icon/tz-svg-icon.component */ 28189);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);











function CustomerComponent_ng_container_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](2, 1, "ACCOUNT.PAYMENT_METHOD"), " ");
  }
}

function CustomerComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomerComponent_ng_container_0_Template_div_click_3_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r4);
      const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r3.onGoToBack();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "tz-icon", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "tz-icon", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9)(13, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](19, CustomerComponent_ng_container_0_div_19_Template, 3, 3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](20, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](22, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 7, "GENERAL.BACK"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r0.userService.formProfileName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 9, "PROFILE.PROFILE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 11, "TRAVELLER.TRAVELERS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](22, 13, "ACCOUNT.PASSWORD_"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](25, 15, "ACCOUNT.DELETE.TITLE"), " ");
  }
}

function CustomerComponent_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 16)(2, "tz-svg-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function CustomerComponent_ng_container_2_Template_tz_svg_icon_click_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
      return ctx_r5.onGoToBack();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "arrow-back-mobile2")("mobile", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r1.pagesUrls.CUSTOMER_PROFILE);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](5, 8, "PROFILE.PROFILE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r1.pagesUrls.CUSTOMER_TRAVELLERS);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 10, "TRAVELLER.TRAVELERS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", ctx_r1.pagesUrls.CUSTOMER_PASSWORD);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](11, 12, "ACCOUNT.PASSWORD.CHANGE"), " ");
  }
}

class CustomerComponent {
  constructor(userService, location, platformService) {
    this.userService = userService;
    this.location = location;
    this.platformService = platformService;
    this.pagesUrls = _core_constants_pages_urls__WEBPACK_IMPORTED_MODULE_0__.PagesUrls;
  }

  ngOnInit() {}

  onGoToBack() {
    this.location.back();
  }

}

CustomerComponent.ɵfac = function CustomerComponent_Factory(t) {
  return new (t || CustomerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_6__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_2__.PlatformService));
};

CustomerComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
  type: CustomerComponent,
  selectors: [["tz-customer"]],
  decls: 4,
  vars: 6,
  consts: [[4, "ngIf"], ["data-test", "back-kontainer", 1, "back-btn-container"], [1, "tz-container"], ["data-test", "profile-back-btn", 1, "pointer", "body-2", 3, "click"], ["icon", "arrow_back_ios"], [1, "tz-container", "flex", "justify-center"], ["data-test", "profile-menu-container", 1, "profile-menu-container"], ["data-test", "profile-detail-body", 1, "profile-detail", "body-2-semibold", "flex", "align-center"], ["icon", "carbon_user-avatar", "data-test", "profile-user-icon"], ["data-test", "profile-menu-links", 1, "proifle-links", "body-1"], ["routerLink", "/customer/profile", "data-test", "profile-customer-profile", "routerLinkActive", "active-link"], ["routerLink", "/customer/travellers", "data-test", "profile-customer-travellers", "routerLinkActive", "active-link"], ["routerLink", "/customer/payment", "data-test", "profile-customer-payment", "routerLinkActive", "active-link", 4, "ngIf"], ["routerLink", "/customer/password", "data-test", "profile-customer-password", "routerLinkActive", "active-link"], ["routerLink", "/customer/delete-account", "data-test", "profile-customer-delta-account", "routerLinkActive", "active-link"], ["routerLink", "/customer/payment", "data-test", "profile-customer-payment", "routerLinkActive", "active-link"], [1, "profile-header"], ["data-test", "back-to-basket", 1, "back-button", 3, "icon", "mobile", "click"], ["routerLinkActive", "active-link", 1, "profile-header__name", 3, "routerLink"]],
  template: function CustomerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](0, CustomerComponent_ng_container_0_Template, 27, 17, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, CustomerComponent_ng_container_2_Template, 13, 14, "ng-container", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](1, 2, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 4, ctx.platformService.isMobileDevice$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_3__.TzIconComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLink, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.RouterLinkDelegate, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkActive, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterOutlet, _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_4__.TzSvgIconComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n  background-color: var(--color-main-background);\n  padding: 1.25rem 0 12.5rem;\n}\n[_nghost-%COMP%]   .profile-menu-container[_ngcontent-%COMP%] {\n  color: var(--color-main-text);\n  display: flex;\n  flex-direction: column;\n  background: var(--color-primary-white);\n  border: 1px solid var(--upgrade-right-border);\n  border-radius: 0.25rem;\n  width: 17.5rem;\n  margin-right: 1.25rem;\n  height: 389px;\n  position: sticky;\n  top: 1.25rem;\n}\n[_nghost-%COMP%]   .profile-menu-container[_ngcontent-%COMP%]   .profile-detail[_ngcontent-%COMP%] {\n  margin: 0.938rem 0.625rem 0;\n  padding-bottom: 0.625rem;\n  border-bottom: 0.3px solid var(--upgrade-right-border);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   .profile-menu-container[_ngcontent-%COMP%]   .profile-detail[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin-right: 0.5rem;\n}\n[_nghost-%COMP%]   .profile-menu-container[_ngcontent-%COMP%]   .proifle-links[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  margin: 1.5rem 1.5rem 1.875rem;\n}\n[_nghost-%COMP%]   .profile-menu-container[_ngcontent-%COMP%]   .proifle-links[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 0.938rem 0;\n  transition: all 0.2s ease;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .profile-menu-container[_ngcontent-%COMP%]   .proifle-links[_ngcontent-%COMP%]    > div.active-link[_ngcontent-%COMP%] {\n  color: var(--color-main-purple);\n}\n@media not all and (hover: none) {\n  [_nghost-%COMP%]   .profile-menu-container[_ngcontent-%COMP%]   .proifle-links[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n    color: var(--color-main-purple);\n  }\n}\n[_nghost-%COMP%]   .profile-menu-container[_ngcontent-%COMP%]   .proifle-links[_ngcontent-%COMP%]    > div.active-link[_ngcontent-%COMP%] {\n  pointer-events: none;\n  font-weight: var(--font-weight-semibold);\n}\n[_nghost-%COMP%]  .select-btn {\n  box-shadow: unset;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%] {\n    background-color: var(--color-main-background-mobile);\n    padding: 0;\n  }\n  [_nghost-%COMP%]   .profile-header[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    line-height: 1.125rem;\n    color: var(--color-text-mobile);\n    font-weight: var(--font-weight-regular);\n    padding: 0.6875rem 1rem;\n    background-color: var(--color-primary-white);\n    position: relative;\n    display: flex;\n    align-items: center;\n    outline: 1px solid #DDDDE3;\n  }\n  [_nghost-%COMP%]   .profile-header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n    position: absolute;\n  }\n  [_nghost-%COMP%]   .profile-header__name[_ngcontent-%COMP%] {\n    display: none;\n    pointer-events: none;\n    margin: auto;\n  }\n  [_nghost-%COMP%]   .profile-header__name.active-link[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy91dGlscy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0VBQ0EsOENBQUE7RUFDQSwwQkFBQTtBQURKO0FBR0k7RUFDSSw2QkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0VBQ0EsNkNBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSxxQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7QUFEUjtBQUdRO0VBQ0ksMkJBQUE7RUFDQSx3QkFBQTtFQUNBLHNEQUFBO0VBRUEsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBRlo7QUFJWTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFGaEI7QUFNUTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FBSlo7QUFNWTtFQUNJLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxlQUFBO0FBSmhCO0FBTWdCO0VBQ0ksK0JBQUE7QUFKcEI7QUMyQkk7RUFDSTtJRHBCWSwrQkFBQTtFQUpsQjtBQUNGO0FBTWdCO0VBQ0ksb0JBQUE7RUFDQSx3Q0FBQTtBQUpwQjtBQVVJO0VBQ0ksaUJBQUE7QUFSUjtBQ0hJO0VEbERKO0lBaUVRLHFEQUFBO0lBQ0EsVUFBQTtFQVJOO0VBVU07SUFDSSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsK0JBQUE7SUFDQSx1Q0FBQTtJQUNBLHVCQUFBO0lBQ0EsNENBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLDBCQUFBO0VBUlY7RUFVVTtJQUNJLGtCQUFBO0VBUmQ7RUFXVTtJQUNJLGFBQUE7SUFDQSxvQkFBQTtJQUNBLFlBQUE7RUFUZDtFQVdjO0lBQ0ksZUFBQTtFQVRsQjtBQUNGIiwiZmlsZSI6ImN1c3RvbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1iYWNrZ3JvdW5kKTtcbiAgICBwYWRkaW5nOiAxLjI1cmVtIDAgMTIuNXJlbTtcblxuICAgIC5wcm9maWxlLW1lbnUtY29udGFpbmVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tdGV4dCk7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11cGdyYWRlLXJpZ2h0LWJvcmRlcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgIHdpZHRoOiAxNy41cmVtO1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XG4gICAgICAgIGhlaWdodDogMzg5cHg7XG4gICAgICAgIHBvc2l0aW9uOiBzdGlja3k7XG4gICAgICAgIHRvcDogMS4yNXJlbTtcblxuICAgICAgICAucHJvZmlsZS1kZXRhaWwge1xuICAgICAgICAgICAgbWFyZ2luOiAwLjkzOHJlbSAwLjYyNXJlbSAwO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNjI1cmVtO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC4zcHggc29saWQgdmFyKC0tdXBncmFkZS1yaWdodC1ib3JkZXIpO1xuXG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXG4gICAgICAgICAgICB0ei1pY29uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnByb2lmbGUtbGlua3Mge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICBtYXJnaW46IDEuNXJlbSAxLjVyZW0gMS44NzVyZW07XG5cbiAgICAgICAgICAgID5kaXYge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuOTM4cmVtIDA7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICAgICAgICAgICAmLmFjdGl2ZS1saW5rIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBvbi1ob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUtbGluayB7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICY6Om5nLWRlZXAgLnNlbGVjdC1idG4ge1xuICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWJhY2tncm91bmQtbW9iaWxlKTtcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAucHJvZmlsZS1oZWFkZXIge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjY4NzVyZW0gMXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBvdXRsaW5lOiAxcHggc29saWQgI0RERERFMztcblxuICAgICAgICAgICAgLmJhY2stYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX25hbWUge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgICAgICAgICAgJi5hY3RpdmUtbGluayB7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 87943:
/*!*****************************************************!*\
  !*** ./src/app/modules/customer/customer.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CustomerModule": () => (/* binding */ CustomerModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./customer-routing.module */ 23801);
/* harmony import */ var _customer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./customer.component */ 88524);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class CustomerModule {
}
CustomerModule.ɵfac = function CustomerModule_Factory(t) { return new (t || CustomerModule)(); };
CustomerModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: CustomerModule });
CustomerModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CustomerModule, { declarations: [_customer_component__WEBPACK_IMPORTED_MODULE_1__.CustomerComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _customer_routing_module__WEBPACK_IMPORTED_MODULE_0__.CustomerRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_customer_customer_module_ts.js.map