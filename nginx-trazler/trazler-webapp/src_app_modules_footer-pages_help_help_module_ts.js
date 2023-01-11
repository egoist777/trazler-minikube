"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_footer-pages_help_help_module_ts"],{

/***/ 85170:
/*!******************************************************************!*\
  !*** ./src/app/modules/footer-pages/help/help-routing.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpRoutingModule": () => (/* binding */ HelpRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _help_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help.component */ 86798);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _help_component__WEBPACK_IMPORTED_MODULE_0__.HelpComponent,
    },
];
class HelpRoutingModule {
}
HelpRoutingModule.ɵfac = function HelpRoutingModule_Factory(t) { return new (t || HelpRoutingModule)(); };
HelpRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HelpRoutingModule });
HelpRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HelpRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 86798:
/*!*************************************************************!*\
  !*** ./src/app/modules/footer-pages/help/help.component.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpComponent": () => (/* binding */ HelpComponent)
/* harmony export */ });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_footer_pages_dataservice_footer_pages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/footer-pages/dataservice/footer-pages.service */ 75913);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/modules/core/scroll-service */ 90097);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_footer_pages_footer_pages_header_footer_pages_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/components/footer-pages/footer-pages-header/footer-pages-header.component */ 96431);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic/angular */ 93819);
/* harmony import */ var _shared_components_footer_pages_footer_page_contact_form_footer_page_contact_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/components/footer-pages/footer-page-contact-form/footer-page-contact-form.component */ 15029);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 87514);













function HelpComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "tz-footer-pages-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("content", pageItem_r3.contents[0] == null ? null : pageItem_r3.contents[0].contentBody);
} }
function HelpComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HelpComponent_div_1_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", pageItem_r3.heading === "Image-content");
} }
function HelpComponent_div_3_div_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div")(1, "ion-accordion", 13)(2, "ion-item", 14)(3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "ion-item", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const itemData_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", itemData_r10.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](itemData_r10.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", itemData_r10.contentBody, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function HelpComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11)(1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "ion-accordion-group", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, HelpComponent_div_3_div_1_div_4_Template, 7, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const item_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](item_r7.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("value", ctx_r8.openFaqContentId)("multiple", true)("animated", false);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", item_r7.contents);
} }
function HelpComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HelpComponent_div_3_div_1_Template, 5, 5, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("id", item_r7.heading);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", item_r7.heading !== "Image-content");
} }
function HelpComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](2, 1, ctx_r2.platformService.isMobileDevice ? "FOOTER.FAQ_FORM_TITLE" : "FOOTER.FAQ_FORM_CONTENT"), " ");
} }
class HelpComponent {
    constructor(footerPagesService, settingsService, activeRoute, scrollService, platformService) {
        this.footerPagesService = footerPagesService;
        this.settingsService = settingsService;
        this.activeRoute = activeRoute;
        this.scrollService = scrollService;
        this.platformService = platformService;
        this.signUpSuccessfully = false;
        this.formProcessing = false;
        this.openFaqContentId = '';
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
        this.scrollId = '';
        this.scrollId = this.activeRoute.snapshot.queryParams['scrollTo'];
        if (this.scrollId && this.scrollId === 'Flights and trains') {
            this.openFaqContentId = 'How do I check-in to my flight?';
        }
    }
    ngOnInit() {
        this.getContent(true);
        this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
            this.getContent();
        });
    }
    getContent(onInit = false) {
        this.footerPagesService.getPageContent('help').subscribe((content) => {
            this.content = content;
            if (onInit && this.scrollId && this.scrollId !== '') {
                setTimeout(() => {
                    this.scrollService.scrollToElement(this.scrollId);
                }, 500);
            }
        });
    }
    onFormSubmit(form) {
        this.formProcessing = true;
        this.footerPagesService.sendContactForm(form).subscribe(() => {
            this.signUpSuccessfully = true;
            this.formProcessing = false;
        }, () => {
            this.formProcessing = false;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_modules_footer_pages_dataservice_footer_pages_service__WEBPACK_IMPORTED_MODULE_0__.FooterPagesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_2__.ScrollService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_3__.PlatformService)); };
HelpComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["tz-help"]], decls: 7, vars: 8, consts: [[1, "landing-wrapper", "help-page"], [4, "ngFor", "ngForOf"], [1, "landing-wrapper__container"], ["class", "help-accordion__container", 3, "id", 4, "ngFor", "ngForOf"], [1, "help-form-container"], ["class", "help-form-title", 4, "ngIf"], [3, "hideFileUpload", "signUpSuccessfully", "formProcessing", "formSubmit"], [4, "ngIf"], [3, "content"], [1, "help-accordion__container", 3, "id"], ["class", "help-accordion__container-item", 4, "ngIf"], [1, "help-accordion__container-item"], ["toggle-icon", "''", 1, "help-accordion", 3, "value", "multiple", "animated"], ["toggle-icon", "''", 1, "", 3, "value"], ["slot", "header", 1, "help-accordion__header", "ion-no-padding"], ["slot", "content"], [1, "help-accordion__content", 3, "innerHTML"], [1, "help-form-title"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, HelpComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, HelpComponent_div_3_Template, 2, 2, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, HelpComponent_div_5_Template, 3, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "tz-footer-page-contact-form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formSubmit", function HelpComponent_Template_tz_footer_page_contact_form_formSubmit_6_listener($event) { return ctx.onFormSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.content == null ? null : ctx.content.pageContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.content == null ? null : ctx.content.pageContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("help-form-sent", ctx.signUpSuccessfully);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.signUpSuccessfully);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("hideFileUpload", true)("signUpSuccessfully", ctx.signUpSuccessfully)("formProcessing", ctx.formProcessing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _shared_components_footer_pages_footer_pages_header_footer_pages_header_component__WEBPACK_IMPORTED_MODULE_4__.FooterPagesHeaderComponent, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonAccordionGroup, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonAccordion, _ionic_angular__WEBPACK_IMPORTED_MODULE_12__.IonItem, _shared_components_footer_pages_footer_page_contact_form_footer_page_contact_form_component__WEBPACK_IMPORTED_MODULE_5__.FooterPageContactFormComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslatePipe], styles: [".help-page.landing-wrapper[_ngcontent-%COMP%]   .help-form-title[_ngcontent-%COMP%] {\n  padding-top: 2.6875rem;\n  max-width: 48.75rem;\n  margin: auto;\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  text-align: center;\n  letter-spacing: 0.0025em;\n  padding-bottom: 3.125rem;\n  color: var(--color-main-text);\n}\n@media (max-width: 920px) {\n  .help-page.landing-wrapper[_ngcontent-%COMP%]   .help-form-title[_ngcontent-%COMP%] {\n    padding-top: 2.375rem;\n    padding-bottom: 1.5rem;\n    text-align: left;\n    font-weight: 500;\n    font-size: 1.125rem;\n    line-height: 1.3125rem;\n    color: var(--color-text-mobile);\n  }\n}\n.help-page.landing-wrapper[_ngcontent-%COMP%]   .help-form-sent[_ngcontent-%COMP%] {\n  padding-top: 10.625rem;\n}\n@media (max-width: 920px) {\n  .help-page.landing-wrapper[_ngcontent-%COMP%] {\n    background-color: var(--color-primary-white);\n  }\n  .help-page.landing-wrapper[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n    margin-bottom: 1.625rem;\n  }\n}\n.help-accordion__container[_ngcontent-%COMP%]:not(:last-of-type)   .help-accordion__container-item[_ngcontent-%COMP%] {\n  margin-bottom: 3.25rem;\n}\n@media (max-width: 920px) {\n  .help-accordion__container[_ngcontent-%COMP%]:not(:last-of-type)   .help-accordion__container-item[_ngcontent-%COMP%] {\n    margin-bottom: 1.125rem;\n  }\n  .help-accordion__container[_ngcontent-%COMP%]:not(:last-of-type)   .help-accordion__container-item[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 1rem;\n    line-height: 1.1875rem;\n    color: var(--color-text-mobile);\n  }\n}\n.help-accordion__header[_ngcontent-%COMP%] {\n  --border-width: 0;\n  --inner-padding-end: 0;\n  --background: var(--color-main-background) url(/assets/icons/web/icons/arrow-down.svg) center right no-repeat;\n}\n.help-accordion__header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.0015em;\n  color: var(--color-main-text);\n}\n@media not all and (hover: none) {\n  .help-accordion__header[_ngcontent-%COMP%]:hover {\n    --color-hover: var(--color-main-text);\n  }\n}\n@media (max-width: 920px) {\n  .help-accordion__header[_ngcontent-%COMP%] {\n    --background: var(--color-primary-white) url(/assets/icons/web/icons/mob/arrow-down.svg) top 1rem right\n        0.3881rem no-repeat;\n  }\n  .help-accordion__header[_ngcontent-%COMP%]    > p[_ngcontent-%COMP%] {\n    font-weight: 500;\n    font-size: 0.875rem;\n    line-height: 1.375rem;\n    margin-right: 1.5rem;\n    padding: 0.5rem 0;\n    color: var(--color-text-mobile);\n  }\n}\n.help-accordion__content[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.009375rem;\n  color: var(--color-main-text);\n  max-height: 31.25rem;\n  padding-top: 0.9375rem;\n  padding-right: 1.9375rem;\n  padding-bottom: 1.25rem;\n  margin-bottom: 0.1875rem;\n  overflow: hidden;\n}\n@media (max-width: 920px) {\n  .help-accordion__content[_ngcontent-%COMP%] {\n    margin-top: 0.5rem;\n    padding: 0;\n  }\n  .help-accordion__content[_ngcontent-%COMP%]     div.body-1 {\n    font-weight: 400;\n    font-size: 0.875rem;\n    line-height: 1.375rem;\n    letter-spacing: 0.0156rem;\n    color: var(--color-grey-light-mobile);\n  }\n}\n.help-accordion[_ngcontent-%COMP%]   .accordion-expanded[_ngcontent-%COMP%]   .help-accordion__header[_ngcontent-%COMP%] {\n  --background: var(--color-main-background) url(/assets/icons/web/icons/arrow-up.svg) center right no-repeat;\n}\n@media (max-width: 920px) {\n  .help-accordion[_ngcontent-%COMP%]   .accordion-expanded[_ngcontent-%COMP%]   .help-accordion__header[_ngcontent-%COMP%] {\n    --background: var(--color-primary-white) url(/assets/icons/web/icons/mob/arrow-up.svg) top 1rem right\n        0.3881rem no-repeat;\n  }\n}\nion-item[_ngcontent-%COMP%] {\n  --min-height: 2.5rem;\n  --padding-start: 0;\n  --background: var(--color-main-background);\n  --inner-border-width: 0;\n}\n@media (max-width: 920px) {\n  ion-item[_ngcontent-%COMP%] {\n    --background: var(--color-primary-white);\n  }\n}\n@media not all and (hover: none) {\n  ion-accordion[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]:hover {\n    --background-hover: var(--color-main-background);\n  }\n}\nion-accordion[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]     .ion-accordion-toggle-icon {\n  display: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlbHAuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUNBLHdCQUFBO0VBQ0EsNkJBQUE7QUFGUjtBQ3lDSTtFRGpEQTtJQWFRLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSxnQkFBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxzQkFBQTtJQUNBLCtCQUFBO0VBRFY7QUFDRjtBQUlJO0VBQ0ksc0JBQUE7QUFGUjtBQzJCSTtFRGxESjtJQTZCUSw0Q0FBQTtFQUZOO0VBSU07SUFDSSx1QkFBQTtFQUZWO0FBQ0Y7QUFRUTtFQUNJLHNCQUFBO0FBTFo7QUNlSTtFRFhJO0lBSVEsdUJBQUE7RUFKZDtFQU1jO0lBQ0ksZ0JBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSwrQkFBQTtFQUpsQjtBQUNGO0FBV0k7RUFDSSxpQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkdBQUE7QUFSUjtBQVVRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSx3QkFBQTtFQUNBLDZCQUFBO0FBUlo7QUNTSTtFQUNJO0lERUkscUNBQUE7RUFSVjtBQUNGO0FDZEk7RURPQTtJQWtCUTsyQkFBQTtFQU5WO0VBU1U7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSxvQkFBQTtJQUNBLGlCQUFBO0lBQ0EsK0JBQUE7RUFQZDtBQUNGO0FBV0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNkJBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7RUFDQSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0EsZ0JBQUE7QUFUUjtBQ3pDSTtFRHVDQTtJQWNRLGtCQUFBO0lBQ0EsVUFBQTtFQVJWO0VBV2M7SUFDSSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSx5QkFBQTtJQUNBLHFDQUFBO0VBVGxCO0FBQ0Y7QUFlUTtFQUNJLDJHQUFBO0FBYlo7QUN6REk7RURxRUk7SUFJUTsyQkFBQTtFQVhkO0FBQ0Y7QUFpQkE7RUFDSSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMENBQUE7RUFDQSx1QkFBQTtBQWRKO0FDdEVJO0VEZ0ZKO0lBT1Esd0NBQUE7RUFiTjtBQUNGO0FDekRJO0VBQ0k7SUQwRUEsZ0RBQUE7RUFiTjtBQUNGO0FBZUk7RUFDSSxhQUFBO0FBYlI7QUFpQkE7RUFDSSxhQUFBO0FBZEoiLCJmaWxlIjoiaGVscC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3V0aWxzL21peGlucyc7XG5cbi5oZWxwLXBhZ2UubGFuZGluZy13cmFwcGVyIHtcbiAgICAuaGVscC1mb3JtLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDIuNjg3NXJlbTtcbiAgICAgICAgbWF4LXdpZHRoOiA0OC43NXJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDAyNWVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMy4xMjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRleHQpO1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBwYWRkaW5nLXRvcDogMi4zNzVyZW07XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzEyNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaGVscC1mb3JtLXNlbnQge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTAuNjI1cmVtO1xuICAgIH1cblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuXG4gICAgICAgICYgPiAqOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuNjI1cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uaGVscC1hY2NvcmRpb25fX2NvbnRhaW5lciB7XG4gICAgJjpub3QoOmxhc3Qtb2YtdHlwZSkge1xuICAgICAgICAuaGVscC1hY2NvcmRpb25fX2NvbnRhaW5lci1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDMuMjVyZW07XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4xMjVyZW07XG5cbiAgICAgICAgICAgICAgICBoMiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTg3NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5oZWxwLWFjY29yZGlvbiB7XG4gICAgJl9faGVhZGVyIHtcbiAgICAgICAgLS1ib3JkZXItd2lkdGg6IDA7XG4gICAgICAgIC0taW5uZXItcGFkZGluZy1lbmQ6IDA7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbWFpbi1iYWNrZ3JvdW5kKSB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaWNvbnMvYXJyb3ctZG93bi5zdmcpIGNlbnRlciByaWdodCBuby1yZXBlYXQ7XG5cbiAgICAgICAgJiA+IHAge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDE1ZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10ZXh0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIG9uLWhvdmVyIHtcbiAgICAgICAgICAgIC0tY29sb3ItaG92ZXI6IHZhcigtLWNvbG9yLW1haW4tdGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKSB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaWNvbnMvbW9iL2Fycm93LWRvd24uc3ZnKSB0b3AgMXJlbSByaWdodFxuICAgICAgICAgICAgICAgIDAuMzg4MXJlbSBuby1yZXBlYXQ7XG5cbiAgICAgICAgICAgICYgPiBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzc1cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmX19jb250ZW50IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDkzNzVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRleHQpO1xuICAgICAgICBtYXgtaGVpZ2h0OiAzMS4yNXJlbTtcbiAgICAgICAgcGFkZGluZy10b3A6IDAuOTM3NXJlbTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMS45Mzc1cmVtO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4xODc1cmVtO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgICAgICA6Om5nLWRlZXAge1xuICAgICAgICAgICAgICAgICYgZGl2LmJvZHktMSB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjM3NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDE1NnJlbTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXktbGlnaHQtbW9iaWxlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuYWNjb3JkaW9uLWV4cGFuZGVkIHtcbiAgICAgICAgLmhlbHAtYWNjb3JkaW9uX19oZWFkZXIge1xuICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluLWJhY2tncm91bmQpIHVybCgvYXNzZXRzL2ljb25zL3dlYi9pY29ucy9hcnJvdy11cC5zdmcpIGNlbnRlciByaWdodCBuby1yZXBlYXQ7XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAgICAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKSB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaWNvbnMvbW9iL2Fycm93LXVwLnN2ZykgdG9wIDFyZW0gcmlnaHRcbiAgICAgICAgICAgICAgICAgICAgMC4zODgxcmVtIG5vLXJlcGVhdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuaW9uLWl0ZW0ge1xuICAgIC0tbWluLWhlaWdodDogMi41cmVtO1xuICAgIC0tcGFkZGluZy1zdGFydDogMDtcbiAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1haW4tYmFja2dyb3VuZCk7XG4gICAgLS1pbm5lci1ib3JkZXItd2lkdGg6IDA7XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgIH1cbn1cblxuaW9uLWFjY29yZGlvbiBpb24taXRlbSB7XG4gICAgQGluY2x1ZGUgb24taG92ZXIge1xuICAgICAgICAtLWJhY2tncm91bmQtaG92ZXI6IHZhcigtLWNvbG9yLW1haW4tYmFja2dyb3VuZCk7XG4gICAgfVxuXG4gICAgaW9uLWljb24ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn1cblxuOmhvc3QgOjpuZy1kZWVwIC5pb24tYWNjb3JkaW9uLXRvZ2dsZS1pY29uIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuIiwiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 97364:
/*!**********************************************************!*\
  !*** ./src/app/modules/footer-pages/help/help.module.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HelpModule": () => (/* binding */ HelpModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _help_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./help-routing.module */ 85170);
/* harmony import */ var _help_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./help.component */ 86798);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class HelpModule {
}
HelpModule.ɵfac = function HelpModule_Factory(t) { return new (t || HelpModule)(); };
HelpModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: HelpModule });
HelpModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _help_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](HelpModule, { declarations: [_help_component__WEBPACK_IMPORTED_MODULE_1__.HelpComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _help_routing_module__WEBPACK_IMPORTED_MODULE_0__.HelpRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_footer-pages_help_help_module_ts.js.map