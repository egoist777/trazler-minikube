"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_mob-get-started-page_mob-get-started-page_module_ts"],{

/***/ 50848:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/mob-get-started-page/mob-get-started-page-routing.module.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobGetStartedPageComponentRoutingModule": () => (/* binding */ MobGetStartedPageComponentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _mob_get_started_page_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mob-get-started-page.component */ 73313);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _mob_get_started_page_component__WEBPACK_IMPORTED_MODULE_0__.MobGetStartedPageComponent }];
class MobGetStartedPageComponentRoutingModule {
}
MobGetStartedPageComponentRoutingModule.ɵfac = function MobGetStartedPageComponentRoutingModule_Factory(t) { return new (t || MobGetStartedPageComponentRoutingModule)(); };
MobGetStartedPageComponentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MobGetStartedPageComponentRoutingModule });
MobGetStartedPageComponentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MobGetStartedPageComponentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 73313:
/*!********************************************************************************!*\
  !*** ./src/app/modules/mob-get-started-page/mob-get-started-page.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobGetStartedPageComponent": () => (/* binding */ MobGetStartedPageComponent)
/* harmony export */ });
/* harmony import */ var _shared_components_mobile_mob_sign_in_mob_sign_in_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/components/mobile/mob-sign-in/mob-sign-in.component */ 79569);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _services_services_log_in_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/services/log-in.service */ 9475);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/tz-svg-icon/tz-svg-icon.component */ 28189);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);










/* todo we can remove this module after confirmation mob-auth component */
class MobGetStartedPageComponent {
    constructor(modalService, logInService, router, userService, location) {
        this.modalService = modalService;
        this.logInService = logInService;
        this.router = router;
        this.userService = userService;
        this.location = location;
        this.showSignin = true;
        this.fromCheckout = false;
        this.errorMsg = '';
        this.loginWithSocialMedia = (media) => this.logInService.loginWithSocialMedia(media, this.modalService);
    }
    openSignIn() {
        this.userService.openLoginModel().finally(() => {
            this.router.navigate(['search']);
        });
    }
    openSignUp(loginMailId, fromCheckout) {
        this.modalService.createMainModal(_shared_components_mobile_mob_sign_in_mob_sign_in_component__WEBPACK_IMPORTED_MODULE_0__.MobSignInComponent, {
            data: { loginMailId, showSignin: false, fromCheckout },
            title: 'ACCOUNT.SIGN.SIGN_UP',
        });
    }
    onClosePage() {
        this.location.back();
    }
}
MobGetStartedPageComponent.ɵfac = function MobGetStartedPageComponent_Factory(t) { return new (t || MobGetStartedPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_services_log_in_service__WEBPACK_IMPORTED_MODULE_2__.LogInService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.Location)); };
MobGetStartedPageComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: MobGetStartedPageComponent, selectors: [["tz-mob-get-started-page"]], decls: 46, vars: 29, consts: [[1, "text-center", "get-started-container", "h-100", "d-flex"], [1, "get-started-container__header"], ["routerLink", "/"], ["data-test", "navbar-trazler-logo", "src", "/assets/icons/web/img/TzLogoMain.svg", "alt", "", 1, "tz-brand-logo"], ["data-mob", "get-started-close", 1, "get-started-container__close-btn", 3, "click"], ["icon", "close", 3, "mobile"], [1, "title"], [1, "subtitle"], [1, "d-grid", "social-login-options"], ["data-test", "signin-signup-google-login-button", 1, "social-btn", "email-btn", 3, "click"], [3, "icon"], ["data-test", "signin-signup-facebook-login-button", 1, "social-btn", "facebook-btn", 3, "click"], ["data-test", "signin-signup-google-login-button", 1, "social-btn", "google-btn", 3, "click"], ["data-test", "signin-signup-linkedin-login-button", 1, "social-btn", "linkedin-btn", "mb-0", 3, "click"], [1, "liner-block"], [1, "line"], ["data-test", "signin-signup-google-login-button", 1, "social-btn", "d-flex", "align-center", "justify-center", "google-btn", 3, "click"], [1, "text-left", "description"]], template: function MobGetStartedPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div")(2, "div", 1)(3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MobGetStartedPageComponent_Template_div_click_5_listener() { return ctx.onClosePage(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "tz-svg-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h3", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](9, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "div", 8)(14, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MobGetStartedPageComponent_Template_a_click_14_listener() { return ctx.openSignIn(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "tz-svg-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MobGetStartedPageComponent_Template_a_click_19_listener() { return ctx.loginWithSocialMedia("facebook"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "tz-svg-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](23, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "a", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MobGetStartedPageComponent_Template_a_click_24_listener() { return ctx.loginWithSocialMedia("googlePlus"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](25, "tz-svg-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MobGetStartedPageComponent_Template_a_click_29_listener() { return ctx.loginWithSocialMedia("linkedin"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "tz-svg-icon", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](35, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function MobGetStartedPageComponent_Template_a_click_39_listener() { return ctx.openSignUp(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](40, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("mobile", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](9, 13, "ACCOUNT.SIGN.GET_STARTED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](12, 15, "ACCOUNT.SIGN.SIGN_IN_NOTE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "social-email");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](18, 17, "ACCOUNT.SIGN.SIGN_IN_EMAIL"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "social-facebook");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](23, 19, "ACCOUNT.SIGN.SIGN_IN_FACEBOOK"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "social-google");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 21, "ACCOUNT.SIGN.SIGN_IN_GOOGLE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("icon", "social-linkedin");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 23, "ACCOUNT.SIGN.SIGN_IN_LINKEDIN"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](42, 25, "ACCOUNT.SIGN.CREATE_AN_ACCOUNT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 27, "ACCOUNT.SIGN.I_AGREE_WITH_STARTED"), " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.RouterLinkDelegate, _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_4__.TzSvgIconComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n}\n\n.get-started-container[_ngcontent-%COMP%] {\n  padding: 0.625rem 1rem 1.25rem;\n  justify-content: space-between;\n  flex-direction: column;\n  background-color: var(--color-primary-white);\n}\n\n.get-started-container__header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 4rem;\n  align-items: center;\n  height: 1.25rem;\n}\n\n.get-started-container[_ngcontent-%COMP%]   .tz-brand-logo[_ngcontent-%COMP%] {\n  width: 4.25rem;\n}\n\n.get-started-container[_ngcontent-%COMP%]   .liner-block[_ngcontent-%COMP%] {\n  margin: 1.25rem 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0 1.125rem;\n}\n\n.get-started-container[_ngcontent-%COMP%]   .liner-block[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.3125rem;\n  color: var(--color-text-mobile);\n}\n\n.get-started-container[_ngcontent-%COMP%]   .liner-block[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%] {\n  background-color: var(--color-text-mobile);\n  width: 3.75rem;\n  height: 0.01875rem;\n}\n\n.get-started-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin: 0 1.25rem 0.5rem;\n  font-weight: 700;\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  color: var(--color-text-mobile);\n}\n\n.get-started-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  margin: 0 1.25rem 2.5rem;\n  color: var(--color-text-mobile);\n}\n\n.get-started-container[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 0.875rem;\n  display: flex;\n  align-items: center;\n  color: var(--color-grey-light-mobile);\n}\n\n.get-started-container[_ngcontent-%COMP%]   .social-login-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.625rem;\n}\n\n.get-started-container[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2.5rem;\n  color: var(--color-primary-white);\n  border-radius: 0.25rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.625rem;\n}\n\n.get-started-container[_ngcontent-%COMP%]   .social-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1rem;\n}\n\n.get-started-container[_ngcontent-%COMP%]   .email-btn[_ngcontent-%COMP%] {\n  background-color: var(--color-main-purple);\n}\n\n.get-started-container[_ngcontent-%COMP%]   .google-btn[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-main-purple);\n  color: var(--color-text-mobile);\n}\n\n.get-started-container[_ngcontent-%COMP%]   .facebook-btn[_ngcontent-%COMP%] {\n  background-color: var(--color-blue-buttom);\n}\n\n.get-started-container[_ngcontent-%COMP%]   .linkedin-btn[_ngcontent-%COMP%] {\n  background-color: var(--color-main-blue-dark);\n}\n\n@media only screen and (max-height: 568px) {\n  .get-started-container[_ngcontent-%COMP%] {\n    padding-bottom: 2.625rem;\n  }\n  .get-started-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n    margin-bottom: 1.25rem;\n  }\n}\n\n@media only screen and (max-height: 811px) {\n  .get-started-container__header[_ngcontent-%COMP%] {\n    margin-bottom: 1.25rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1nZXQtc3RhcnRlZC1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsT0FBQTtBQUNKOztBQUVBO0VBQ0ksOEJBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsNENBQUE7QUFDSjs7QUFDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBQ1I7O0FBRUk7RUFDSSxjQUFBO0FBQVI7O0FBR0k7RUFDSSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtBQURSOztBQUdRO0VBQ0ksZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0FBRFo7O0FBSVE7RUFDSSwwQ0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQUZaOztBQU1JO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQUpSOztBQU9JO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esd0JBQUE7RUFDQSwrQkFBQTtBQUxSOztBQVFJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EscUNBQUE7QUFOUjs7QUFTSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7QUFQUjs7QUFVSTtFQUNJLFdBQUE7RUFDQSxjQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtBQVJSOztBQVVRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FBUlo7O0FBWUk7RUFDSSwwQ0FBQTtBQVZSOztBQWFJO0VBQ0ksMENBQUE7RUFDQSwrQkFBQTtBQVhSOztBQWNJO0VBQ0ksMENBQUE7QUFaUjs7QUFlSTtFQUNJLDZDQUFBO0FBYlI7O0FBZ0JJO0VBekdKO0lBMEdRLHdCQUFBO0VBYk47RUFlTTtJQUNJLHNCQUFBO0VBYlY7QUFDRjs7QUFlSTtFQUNJO0lBQ0ksc0JBQUE7RUFiVjtBQUNGIiwiZmlsZSI6Im1vYi1nZXQtc3RhcnRlZC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBmbGV4OiAxO1xufVxuXG4uZ2V0LXN0YXJ0ZWQtY29udGFpbmVyIHtcbiAgICBwYWRkaW5nOiAwLjYyNXJlbSAxcmVtIDEuMjVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG5cbiAgICAmX19oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDRyZW07XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICB9XG5cbiAgICAudHotYnJhbmQtbG9nbyB7XG4gICAgICAgIHdpZHRoOiA0LjI1cmVtO1xuICAgIH1cblxuICAgIC5saW5lci1ibG9jayB7XG4gICAgICAgIG1hcmdpbjogMS4yNXJlbSAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgZ2FwOiAwIDEuMTI1cmVtO1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zMTI1cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKVxuICAgICAgICB9XG5cbiAgICAgICAgLmxpbmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgd2lkdGg6IDMuNzVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDAuMDE4NzVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgICBtYXJnaW46IDAgMS4yNXJlbSAwLjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKVxuICAgIH1cblxuICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICBtYXJnaW46IDAgMS4yNXJlbSAyLjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSlcbiAgICB9XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjg3NXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXktbGlnaHQtbW9iaWxlKTtcbiAgICB9XG5cbiAgICAuc29jaWFsLWxvZ2luLW9wdGlvbnMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBnYXA6IDAuNjI1cmVtO1xuICAgIH1cblxuICAgIC5zb2NpYWwtYnRuIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBnYXA6IDAuNjI1cmVtO1xuXG4gICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5lbWFpbC1idG4ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgfVxuXG4gICAgLmdvb2dsZS1idG4ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgfVxuXG4gICAgLmZhY2Vib29rLWJ0biB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLWJsdWUtYnV0dG9tKTtcbiAgICB9XG5cbiAgICAubGlua2VkaW4tYnRuIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1ibHVlLWRhcmspO1xuICAgIH1cblxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDU2OHB4KSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyLjYyNXJlbTtcblxuICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA4MTFweCkge1xuICAgICAgICAmX19oZWFkZXIge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 24760:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/mob-get-started-page/mob-get-started-page.module.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobGetStartedPageComponentModule": () => (/* binding */ MobGetStartedPageComponentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _mob_get_started_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mob-get-started-page.component */ 73313);
/* harmony import */ var _mob_get_started_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./mob-get-started-page-routing.module */ 50848);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class MobGetStartedPageComponentModule {
}
MobGetStartedPageComponentModule.ɵfac = function MobGetStartedPageComponentModule_Factory(t) { return new (t || MobGetStartedPageComponentModule)(); };
MobGetStartedPageComponentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MobGetStartedPageComponentModule });
MobGetStartedPageComponentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _mob_get_started_page_routing_module__WEBPACK_IMPORTED_MODULE_2__.MobGetStartedPageComponentRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MobGetStartedPageComponentModule, { declarations: [_mob_get_started_page_component__WEBPACK_IMPORTED_MODULE_1__.MobGetStartedPageComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _mob_get_started_page_routing_module__WEBPACK_IMPORTED_MODULE_2__.MobGetStartedPageComponentRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_mob-get-started-page_mob-get-started-page_module_ts.js.map