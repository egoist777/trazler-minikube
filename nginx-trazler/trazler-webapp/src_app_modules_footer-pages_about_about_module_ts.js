"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_footer-pages_about_about_module_ts"],{

/***/ 30349:
/*!********************************************************************!*\
  !*** ./src/app/modules/footer-pages/about/about-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutRoutingModule": () => (/* binding */ AboutRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about.component */ 80100);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _about_component__WEBPACK_IMPORTED_MODULE_0__.AboutComponent,
    },
];
class AboutRoutingModule {
}
AboutRoutingModule.ɵfac = function AboutRoutingModule_Factory(t) { return new (t || AboutRoutingModule)(); };
AboutRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AboutRoutingModule });
AboutRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AboutRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 80100:
/*!***************************************************************!*\
  !*** ./src/app/modules/footer-pages/about/about.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutComponent": () => (/* binding */ AboutComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_footer_pages_dataservice_footer_pages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/footer-pages/dataservice/footer-pages.service */ 75913);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_footer_pages_footer_pages_header_footer_pages_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/footer-pages/footer-pages-header/footer-pages-header.component */ 96431);
/* harmony import */ var _shared_components_landing_page_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/landing-page/sign-up-form/sign-up-form.component */ 74781);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/safe-html.pipe */ 66926);
/* harmony import */ var _shared_pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/pipes/replace.pipe */ 81868);











function AboutComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "tz-footer-pages-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("content", pageItem_r2.contents[0] == null ? null : pageItem_r2.contents[0].contentBody);
} }
function AboutComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AboutComponent_div_1_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", pageItem_r2.heading === "Image-content");
} }
function AboutComponent_div_3_div_1_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", pageItem_r6.heading, " ");
} }
function AboutComponent_div_3_div_1_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 9)(1, "tz-sign-up-form", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("formSubmit", function AboutComponent_div_3_div_1_div_2_div_4_Template_tz_sign_up_form_formSubmit_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4); return ctx_r14.formSubmit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formProcessing", ctx_r13.userService.subscribeProcessing);
} }
function AboutComponent_div_3_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](1, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](2, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "replace");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](4, AboutComponent_div_3_div_1_div_2_div_4_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItemContent_r12 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](2, 2, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind3"](3, 4, pageItemContent_r12.contentBody, "web\\/assets\\/img\\/footerLink\\/", "assets/icons/web/icons/")), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", pageItemContent_r12.formFieldType === "subscription");
} }
function AboutComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AboutComponent_div_3_div_1_h2_1_Template, 2, 1, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, AboutComponent_div_3_div_1_div_2_Template, 5, 8, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    const index_r7 = ctx_r16.index;
    const pageItem_r6 = ctx_r16.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", index_r7 !== 0 && pageItem_r6.heading !== "" && pageItem_r6.heading !== "Image-conten");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", pageItem_r6.contents);
} }
function AboutComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AboutComponent_div_3_div_1_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", pageItem_r6.heading !== "Image-content");
} }
class AboutComponent {
    constructor(footerPagesService, userService, settingsService) {
        this.footerPagesService = footerPagesService;
        this.userService = userService;
        this.settingsService = settingsService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    }
    ngOnInit() {
        this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
            this.getContent();
        });
    }
    getContent() {
        this.footerPagesService.getPageContent('about').subscribe((content) => {
            this.content = content;
        });
    }
    formSubmit(email) {
        this.userService.subscribeToTrazler(email);
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_modules_footer_pages_dataservice_footer_pages_service__WEBPACK_IMPORTED_MODULE_0__.FooterPagesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService)); };
AboutComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["tz-about"]], decls: 4, vars: 2, consts: [[1, "landing-wrapper", "about-page"], [4, "ngFor", "ngForOf"], [1, "landing-wrapper__container", "landing-wrapper__container-about"], [4, "ngIf"], ["className", "landing-wrapper__container-about", 3, "content"], ["class", "center-align", 4, "ngIf"], [1, "center-align"], [1, "about-page__main-info", 3, "innerHTML"], ["class", "subscription-block", 4, "ngIf"], [1, "subscription-block"], [3, "formProcessing", "formSubmit"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, AboutComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](3, AboutComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.content == null ? null : ctx.content.pageContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.content == null ? null : ctx.content.pageContent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_footer_pages_footer_pages_header_footer_pages_header_component__WEBPACK_IMPORTED_MODULE_3__.FooterPagesHeaderComponent, _shared_components_landing_page_sign_up_form_sign_up_form_component__WEBPACK_IMPORTED_MODULE_4__.SignUpFormComponent], pipes: [_shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__.SafeHtmlPipe, _shared_pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_6__.ReplacePipe], styles: ["@media (max-width: 920px) {\n  .about-page.landing-wrapper {\n    width: 100%;\n    padding: 0;\n  }\n}\n.about-page.landing-wrapper .footer-pages-header {\n  display: flex;\n}\n.about-page.landing-wrapper .footer-pages-header {\n  flex: 1;\n}\n.about-page.landing-wrapper .landing-wrapper__container-about {\n  max-width: 56.25rem;\n  min-width: 56.25rem;\n}\n@media (max-width: 1220px) {\n  .about-page.landing-wrapper .landing-wrapper__container-about {\n    max-width: 55rem;\n    min-width: 55rem;\n  }\n}\n@media (max-width: 920px) {\n  .about-page.landing-wrapper .landing-wrapper__container-about {\n    background-color: var(--color-primary-white);\n    padding: 2rem 1rem 4.8125rem;\n    width: 100%;\n    min-width: 100%;\n    max-width: 100%;\n  }\n}\n.about-page.landing-wrapper .landing-wrapper__container > div {\n  display: flex;\n  width: 100%;\n  height: 100%;\n}\n@media (max-width: 920px) {\n  .about-page.landing-wrapper .landing-wrapper__container > div strong {\n    font-weight: 400;\n    font-size: 0.875rem;\n    line-height: 1.375rem;\n    color: var(--color-text-mobile);\n  }\n}\n@media (max-width: 920px) {\n  .about-page.landing-wrapper .about-page__main-info .body-1 {\n    background-color: transparent !important;\n    font-weight: 400;\n    font-size: 0.875rem;\n    line-height: 1.375rem;\n    margin-top: 1rem;\n  }\n  .about-page.landing-wrapper .about-page__main-info .body-1:has(strong) {\n    margin-top: 0.5rem;\n    text-align: start !important;\n  }\n  .about-page.landing-wrapper .about-page__main-info h4.news-letter {\n    padding: 0;\n    justify-content: start;\n    margin-top: 2rem;\n    margin-bottom: 0;\n    font-size: 1.125rem;\n    line-height: 1.3125rem;\n    color: var(--color-text-mobile);\n  }\n}\n.about-page.landing-wrapper h1 {\n  margin-bottom: 0;\n}\n.about-page.landing-wrapper h2 {\n  padding-bottom: 1.5625rem;\n  margin-bottom: 0;\n}\n@media (max-width: 920px) {\n  .about-page.landing-wrapper h2.center-align {\n    text-align: start;\n    font-weight: 500;\n    font-size: 1.25rem;\n    line-height: 1.4375rem;\n    padding: 0;\n    color: var(--color-text-mobile);\n  }\n}\n.about-page.landing-wrapper .subscription-block {\n  padding-top: 3.125rem;\n}\n@media (max-width: 920px) {\n  .about-page.landing-wrapper .subscription-block {\n    padding: 0;\n    margin-top: 1rem;\n  }\n}\n.about-page.landing-wrapper .elm-rel.about-bg {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.about-page.landing-wrapper .social-media {\n  display: flex;\n  justify-content: center;\n  padding-top: 6.25rem;\n}\n@media (max-width: 920px) {\n  .about-page.landing-wrapper .social-media {\n    display: none;\n  }\n}\n.about-page.landing-wrapper .social-media .icons {\n  text-align: center;\n}\n.about-page.landing-wrapper .center-align {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIiwiYWJvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RJO0VDbERKO0lBRVEsV0FBQTtJQUNBLFVBQUE7RUFETjtBQUNGO0FBR0k7RUFDSSxhQUFBO0FBRFI7QUFJSTtFQUNJLE9BQUE7QUFGUjtBQUtJO0VBQ0ksbUJBQUE7RUFDQSxtQkFBQTtBQUhSO0FEeUJFO0VDeEJFO0lBS1EsZ0JBQUE7SUFDQSxnQkFBQTtFQUZWO0FBQ0Y7QUQrQkk7RUNwQ0E7SUFVUSw0Q0FBQTtJQUNBLDRCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFDQSxlQUFBO0VBRFY7QUFDRjtBQUlJO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBRlI7QURpQkk7RUNiSTtJQUVRLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLCtCQUFBO0VBRmQ7QUFDRjtBRFNJO0VDRFE7SUFDSSx3Q0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLGdCQUFBO0VBTGQ7RUFPYztJQUNJLGtCQUFBO0lBQ0EsNEJBQUE7RUFMbEI7RUFTVTtJQUNJLFVBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsK0JBQUE7RUFQZDtBQUNGO0FBV0k7RUFDSSxnQkFBQTtBQVRSO0FBWUk7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0FBVlI7QURwQkk7RUNpQ1E7SUFDSSxpQkFBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtJQUNBLFVBQUE7SUFDQSwrQkFBQTtFQVZkO0FBQ0Y7QUFjSTtFQUNJLHFCQUFBO0FBWlI7QURqQ0k7RUM0Q0E7SUFJUSxVQUFBO0lBQ0EsZ0JBQUE7RUFYVjtBQUNGO0FBY0k7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFaUjtBQWVJO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7QUFiUjtBRGxESTtFQzREQTtJQU1RLGFBQUE7RUFaVjtBQUNGO0FBY1E7RUFDSSxrQkFBQTtBQVpaO0FBZ0JJO0VBQ0ksa0JBQUE7QUFkUiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3V0aWxzL21peGlucyc7XG5cbi5hYm91dC1wYWdlLmxhbmRpbmctd3JhcHBlciB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgfVxuXG4gICAgLmZvb3Rlci1wYWdlcy1oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIH1cblxuICAgIC5mb290ZXItcGFnZXMtaGVhZGVyIHtcbiAgICAgICAgZmxleDogMTtcbiAgICB9XG5cbiAgICAubGFuZGluZy13cmFwcGVyX19jb250YWluZXItYWJvdXQge1xuICAgICAgICBtYXgtd2lkdGg6IDU2LjI1cmVtO1xuICAgICAgICBtaW4td2lkdGg6IDU2LjI1cmVtO1xuXG4gICAgICAgIEBpbmNsdWRlIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigxMjIwcHgpIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogNTVyZW07XG4gICAgICAgICAgICBtaW4td2lkdGg6IDU1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtIDQuODEyNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxhbmRpbmctd3JhcHBlcl9fY29udGFpbmVyID4gZGl2IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcblxuICAgICAgICAmIHN0cm9uZyB7XG4gICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zNzVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICYgLmFib3V0LXBhZ2VfX21haW4taW5mbyB7XG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAmIC5ib2R5LTEge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3NXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuXG4gICAgICAgICAgICAgICAgJjpoYXMoc3Ryb25nKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogc3RhcnQgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGg0Lm5ld3MtbGV0dGVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzEyNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaDEge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIGgyIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDEuNTYyNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgJi5jZW50ZXItYWxpZ24ge1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQzNzVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnN1YnNjcmlwdGlvbi1ibG9jayB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzLjEyNXJlbTtcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuZWxtLXJlbC5hYm91dC1iZyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc29jaWFsLW1lZGlhIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiA2LjI1cmVtO1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLmljb25zIHtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jZW50ZXItYWxpZ24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 37269:
/*!************************************************************!*\
  !*** ./src/app/modules/footer-pages/about/about.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AboutModule": () => (/* binding */ AboutModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _about_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about-routing.module */ 30349);
/* harmony import */ var _about_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./about.component */ 80100);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class AboutModule {
}
AboutModule.ɵfac = function AboutModule_Factory(t) { return new (t || AboutModule)(); };
AboutModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: AboutModule });
AboutModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](AboutModule, { declarations: [_about_component__WEBPACK_IMPORTED_MODULE_1__.AboutComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _about_routing_module__WEBPACK_IMPORTED_MODULE_0__.AboutRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_footer-pages_about_about_module_ts.js.map