"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_footer-pages_contacts_contacts_module_ts"],{

/***/ 37846:
/*!**************************************************************************!*\
  !*** ./src/app/modules/footer-pages/contacts/contacts-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsRoutingModule": () => (/* binding */ ContactsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts.component */ 3857);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _contacts_component__WEBPACK_IMPORTED_MODULE_0__.ContactsComponent,
    },
];
class ContactsRoutingModule {
}
ContactsRoutingModule.ɵfac = function ContactsRoutingModule_Factory(t) { return new (t || ContactsRoutingModule)(); };
ContactsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ContactsRoutingModule });
ContactsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ContactsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 3857:
/*!*********************************************************************!*\
  !*** ./src/app/modules/footer-pages/contacts/contacts.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsComponent": () => (/* binding */ ContactsComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_footer_pages_dataservice_footer_pages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/footer-pages/dataservice/footer-pages.service */ 75913);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_footer_pages_footer_pages_header_footer_pages_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/footer-pages/footer-pages-header/footer-pages-header.component */ 96431);
/* harmony import */ var _shared_components_footer_pages_footer_page_contact_form_footer_page_contact_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/footer-pages/footer-page-contact-form/footer-page-contact-form.component */ 15029);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/pipes/safe-html.pipe */ 66926);
/* harmony import */ var _shared_pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/replace.pipe */ 81868);










function ContactsComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "tz-footer-pages-header", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("content", pageItem_r2.contents[0] == null ? null : pageItem_r2.contents[0].contentBody);
} }
function ContactsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ContactsComponent_div_1_div_1_Template, 2, 1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", pageItem_r2.heading === "Image-content");
} }
function ContactsComponent_div_3_div_1_div_1_h2_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "h2", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", pageItem_r6.heading, " ");
} }
function ContactsComponent_div_3_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ContactsComponent_div_3_div_1_div_1_h2_1_Template, 2, 1, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    const index_r7 = ctx_r14.index;
    const pageItem_r6 = ctx_r14.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", index_r7 !== 0 && pageItem_r6.heading !== "" && pageItem_r6.heading !== "Image-conten");
} }
function ContactsComponent_div_3_div_1_p_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](1, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](2, "replace");
} if (rf & 2) {
    const pageItemContent_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind3"](2, 3, pageItemContent_r9.contentBody, "web\\/assets\\/img\\/footerLink\\/", "assets/icons/web/icons/")), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function ContactsComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ContactsComponent_div_3_div_1_div_1_Template, 2, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, ContactsComponent_div_3_div_1_p_2_Template, 3, 7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", pageItem_r6.heading !== "Image-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", pageItem_r6.heading !== "Image-content");
} }
function ContactsComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ContactsComponent_div_3_div_1_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", pageItem_r6.contents);
} }
class ContactsComponent {
    constructor(footerPagesService, settingsService) {
        this.footerPagesService = footerPagesService;
        this.settingsService = settingsService;
        this.signUpSuccessfully = false;
        this.formProcessing = false;
        this.iconClassNameList = ['address', 'call', 'mail'];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    }
    ngOnInit() {
        this.getContent();
        this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
            this.getContent();
        });
    }
    getContent() {
        this.footerPagesService.getPageContent('contacts').subscribe((content) => {
            this.content = content;
            console.log(this.content);
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
ContactsComponent.ɵfac = function ContactsComponent_Factory(t) { return new (t || ContactsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_modules_footer_pages_dataservice_footer_pages_service__WEBPACK_IMPORTED_MODULE_0__.FooterPagesService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService)); };
ContactsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: ContactsComponent, selectors: [["tz-contacts"]], decls: 6, vars: 6, consts: [[1, "landing-wrapper", "contacts-page"], ["class", "contacts-page__header-wrapper", 4, "ngFor", "ngForOf"], [1, "landing-wrapper__container"], [4, "ngFor", "ngForOf"], [1, "contact-form-block"], [3, "signUpSuccessfully", "formProcessing", "formSubmit"], [1, "contacts-page__header-wrapper"], [4, "ngIf"], [3, "content"], ["class", "contacts-page__title", 4, "ngIf"], [3, "innerHTML", 4, "ngIf"], [1, "contacts-page__title"], ["class", "contacts-page__title_text", 4, "ngIf"], [1, "contacts-page__title_text"], [3, "innerHTML"]], template: function ContactsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, ContactsComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, ContactsComponent_div_3_Template, 2, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4)(5, "tz-footer-page-contact-form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("formSubmit", function ContactsComponent_Template_tz_footer_page_contact_form_formSubmit_5_listener($event) { return ctx.onFormSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.content == null ? null : ctx.content.pageContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵclassProp"]("contacts-form-sent", ctx.signUpSuccessfully);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.content == null ? null : ctx.content.pageContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("signUpSuccessfully", ctx.signUpSuccessfully)("formProcessing", ctx.formProcessing);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _shared_components_footer_pages_footer_pages_header_footer_pages_header_component__WEBPACK_IMPORTED_MODULE_2__.FooterPagesHeaderComponent, _shared_components_footer_pages_footer_page_contact_form_footer_page_contact_form_component__WEBPACK_IMPORTED_MODULE_3__.FooterPageContactFormComponent], pipes: [_shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_4__.SafeHtmlPipe, _shared_pipes_replace_pipe__WEBPACK_IMPORTED_MODULE_5__.ReplacePipe], styles: [".contacts-page.landing-wrapper .contact-parent {\n  display: flex;\n  margin-top: 3.125rem;\n}\n.contacts-page.landing-wrapper .contact-parent .icon-with-title {\n  display: flex;\n  align-items: center;\n  position: relative;\n  font-weight: 600;\n  font-size: 1.125rem;\n  line-height: 1.75rem;\n}\n.contacts-page.landing-wrapper .contact-parent .icon-with-title img {\n  width: 1.5rem !important;\n  height: 1.75rem !important;\n}\n.contacts-page.landing-wrapper .contact-parent .address-field,\n.contacts-page.landing-wrapper .contact-parent .phoneNo-field,\n.contacts-page.landing-wrapper .contact-parent .mail-elm {\n  flex: 1;\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.009375rem;\n}\n.contacts-page.landing-wrapper .contact-parent .address-field .address,\n.contacts-page.landing-wrapper .contact-parent .phoneNo-field .address,\n.contacts-page.landing-wrapper .contact-parent .mail-elm .address {\n  margin-left: 2.5625rem;\n}\n.contacts-page.landing-wrapper .contact-parent .address-field .phone-number,\n.contacts-page.landing-wrapper .contact-parent .phoneNo-field .phone-number,\n.contacts-page.landing-wrapper .contact-parent .mail-elm .phone-number {\n  margin-left: 2.375rem;\n}\n.contacts-page.landing-wrapper .contact-parent .address-field .icon-with-title img,\n.contacts-page.landing-wrapper .contact-parent .phoneNo-field .icon-with-title img,\n.contacts-page.landing-wrapper .contact-parent .mail-elm .icon-with-title img {\n  margin-right: 0.875rem;\n}\n.contacts-page.landing-wrapper .contact-parent .mail-elm .body-1,\n.contacts-page.landing-wrapper .contact-parent .mail-elm .mail {\n  margin-left: 2.4375rem;\n}\n.contacts-page.landing-wrapper .contact-parent a {\n  color: var(--color-main-text);\n}\n@media not all and (hover: none) {\n  .contacts-page.landing-wrapper .contact-parent a:hover {\n    color: var(--color-main-text);\n  }\n}\n.contacts-page.landing-wrapper .social-media {\n  margin-top: 1rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.contacts-page.landing-wrapper .social-media .icons {\n  display: flex;\n}\n.contacts-page.landing-wrapper .social-media .icons a:not(:last-child) {\n  margin-right: 0.75rem;\n}\n.contacts-page.landing-wrapper .contact-parent {\n  display: flex;\n  margin-top: 3.125rem;\n}\n.contacts-page.landing-wrapper p .contact-parent .address-field .icon-with-title {\n  padding-bottom: 0.5625rem;\n}\n@media (max-width: 920px) {\n  .contacts-page.landing-wrapper p .contact-parent .address-field .icon-with-title {\n    padding-bottom: 0.5rem;\n  }\n}\n.contacts-page.landing-wrapper p .contact-parent .phoneNo-field .icon-with-title,\n.contacts-page.landing-wrapper p .contact-parent .mail-elm .icon-with-title {\n  padding-bottom: 0.5rem;\n}\n.contacts-page.landing-wrapper p h2.center-align.contact {\n  margin-top: 6.375rem;\n  margin-bottom: 3.125rem;\n}\n.contacts-page.landing-wrapper .contacts-form-sent .contact-form-block {\n  padding-top: 12.3125rem;\n}\n.contacts-page.landing-wrapper .contacts-form-sent h2.content-container {\n  display: none;\n}\n@media (max-width: 920px) {\n  .contacts-page.landing-wrapper {\n    background-color: var(--ion-color-light);\n    padding: 2rem 1rem 2.70625rem;\n  }\n  .contacts-page.landing-wrapper .contacts-page__header-wrapper {\n    display: none;\n  }\n  .contacts-page.landing-wrapper p h2.center-align.contact {\n    margin-top: 4rem;\n    margin-bottom: 0;\n  }\n  .contacts-page.landing-wrapper .contact-form-block {\n    margin-top: 1.5rem;\n  }\n  .contacts-page.landing-wrapper .landing-wrapper__container h2 {\n    font-weight: 500;\n    font-size: 1.25rem;\n    line-height: 1.4375rem;\n    color: var(--color-text-mobile);\n  }\n  .contacts-page.landing-wrapper .landing-wrapper__container h2.contact {\n    margin-top: 0.625rem;\n    justify-content: start;\n  }\n  .contacts-page.landing-wrapper .social-media > p {\n    font-weight: 400;\n    font-size: 0.875rem;\n    line-height: 1.125rem;\n    color: var(--color-text-mobile);\n  }\n  .contacts-page.landing-wrapper .social-media .icons {\n    display: none;\n  }\n  .contacts-page.landing-wrapper .contact-parent {\n    flex-direction: column;\n    gap: 2rem;\n    margin-top: 2rem;\n  }\n  .contacts-page.landing-wrapper .contact-parent .icon-with-title {\n    font-weight: 500;\n    font-size: 1rem;\n    line-height: 1.5rem;\n    color: var(--color-grey-light-mobile);\n  }\n  .contacts-page.landing-wrapper .contact-parent .body-1 {\n    height: 1.4375rem;\n    font-weight: 400;\n    font-size: 0.875rem;\n    line-height: 1.375rem;\n    color: var(--color-text-mobile);\n  }\n  .contacts-page.landing-wrapper .contact-parent .body-1 .secondary-number {\n    color: var(--color-grey-light-mobile) !important;\n  }\n  .contacts-page.landing-wrapper .contact-parent .body-1 a {\n    text-decoration: none;\n    color: var(--color-text-mobile);\n  }\n  .contacts-page.landing-wrapper .contact-parent .address-field .icon-with-title img {\n    content: url(\"/assets/icons/web/icons/address-gray.svg\");\n    margin-right: 0.5rem;\n  }\n  .contacts-page.landing-wrapper .contact-parent .address-field .address {\n    margin: 0;\n  }\n  .contacts-page.landing-wrapper .contact-parent .address-field .address .body-1:nth-child(1), .contacts-page.landing-wrapper .contact-parent .address-field .address .body-1:nth-child(2) {\n    display: inline-flex;\n  }\n  .contacts-page.landing-wrapper .contact-parent .address-field .address .body-1:nth-child(2) {\n    margin-left: 0.375rem;\n    position: relative;\n  }\n  .contacts-page.landing-wrapper .contact-parent .address-field .address .body-1:nth-child(2)::before {\n    position: absolute;\n    top: 0.3125rem;\n    left: -0.3125rem;\n    width: 0.015625rem;\n    height: 0.8125rem;\n    margin-bottom: -1.375rem;\n    content: \"\";\n    color: transparent;\n    background-color: var(--color-text-mobile);\n  }\n  .contacts-page.landing-wrapper .contact-parent .phoneNo-field .icon-with-title img {\n    content: url(\"/assets/icons/web/icons/call-gray.svg\");\n    margin-right: 0.5rem;\n  }\n  .contacts-page.landing-wrapper .contact-parent .phoneNo-field .phone-number {\n    margin: 0;\n  }\n  .contacts-page.landing-wrapper .contact-parent .mail-elm .icon-with-title img {\n    content: url(\"/assets/icons/web/icons/mail-gray.svg\");\n    margin-right: 0.5rem;\n  }\n  .contacts-page.landing-wrapper .contact-parent .mail-elm .body-1 {\n    margin: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy91dGlscy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0k7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7QUFGUjtBQUlRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QUFGWjtBQUlZO0VBQ0ksd0JBQUE7RUFDQSwwQkFBQTtBQUZoQjtBQU1ROzs7RUFHSSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQUpaO0FBTVk7OztFQUNJLHNCQUFBO0FBRmhCO0FBS1k7OztFQUNJLHFCQUFBO0FBRGhCO0FBSVk7OztFQUNJLHNCQUFBO0FBQWhCO0FBS1k7O0VBRUksc0JBQUE7QUFIaEI7QUFPUTtFQUNJLDZCQUFBO0FBTFo7QUN3Qkk7RUFDSTtJRGpCUSw2QkFBQTtFQUpkO0FBQ0Y7QUFRSTtFQUNJLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7QUFOUjtBQVFRO0VBQ0ksYUFBQTtBQU5aO0FBVUk7RUFDSSxxQkFBQTtBQVJSO0FBV0k7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7QUFUUjtBQVlJO0VBQ0kseUJBQUE7QUFWUjtBQ2xCSTtFRDJCQTtJQUlRLHNCQUFBO0VBVFY7QUFDRjtBQVlJOztFQUVJLHNCQUFBO0FBVlI7QUFhSTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7QUFYUjtBQWVRO0VBQ0ksdUJBQUE7QUFiWjtBQWdCUTtFQUNJLGFBQUE7QUFkWjtBQ3JDSTtFRGxESjtJQTBHUSx3Q0FBQTtJQUNBLDZCQUFBO0VBZk47RUFrQlU7SUFDSSxhQUFBO0VBaEJkO0VBb0JNO0lBQ0ksZ0JBQUE7SUFDQSxnQkFBQTtFQWxCVjtFQXFCTTtJQUNJLGtCQUFBO0VBbkJWO0VBd0JjO0lBQ0ksZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLHNCQUFBO0lBQ0EsK0JBQUE7RUF0QmxCO0VBd0JrQjtJQUNJLG9CQUFBO0lBQ0Esc0JBQUE7RUF0QnRCO0VBNkJVO0lBQ0ksZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHFCQUFBO0lBQ0EsK0JBQUE7RUEzQmQ7RUE4QlU7SUFDSSxhQUFBO0VBNUJkO0VBZ0NNO0lBQ0ksc0JBQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7RUE5QlY7RUFnQ1U7SUFDSSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxtQkFBQTtJQUNBLHFDQUFBO0VBOUJkO0VBaUNVO0lBQ0ksaUJBQUE7SUFDQSxnQkFBQTtJQUNBLG1CQUFBO0lBQ0EscUJBQUE7SUFDQSwrQkFBQTtFQS9CZDtFQWlDYztJQUNJLGdEQUFBO0VBL0JsQjtFQWtDYztJQUNJLHFCQUFBO0lBQ0EsK0JBQUE7RUFoQ2xCO0VBc0NrQjtJQUNJLHdEQUFBO0lBQ0Esb0JBQUE7RUFwQ3RCO0VBd0NjO0lBQ0ksU0FBQTtFQXRDbEI7RUF5Q3NCO0lBRUksb0JBQUE7RUF4QzFCO0VBMkNzQjtJQUNJLHFCQUFBO0lBQ0Esa0JBQUE7RUF6QzFCO0VBMkMwQjtJQUNJLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0Esa0JBQUE7SUFDQSxpQkFBQTtJQUNBLHdCQUFBO0lBQ0EsV0FBQTtJQUNBLGtCQUFBO0lBQ0EsMENBQUE7RUF6QzlCO0VBa0RrQjtJQUNJLHFEQUFBO0lBQ0Esb0JBQUE7RUFoRHRCO0VBb0RjO0lBQ0ksU0FBQTtFQWxEbEI7RUF3RGtCO0lBQ0kscURBQUE7SUFDQSxvQkFBQTtFQXREdEI7RUEwRGM7SUFDSSxTQUFBO0VBeERsQjtBQUNGIiwiZmlsZSI6ImNvbnRhY3RzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndXRpbHMvbWl4aW5zJztcblxuLmNvbnRhY3RzLXBhZ2UubGFuZGluZy13cmFwcGVyIHtcbiAgICAuY29udGFjdC1wYXJlbnQge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tdG9wOiAzLjEyNXJlbTtcblxuICAgICAgICAuaWNvbi13aXRoLXRpdGxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcblxuICAgICAgICAgICAgaW1nIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMS41cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxLjc1cmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuYWRkcmVzcy1maWVsZCxcbiAgICAgICAgLnBob25lTm8tZmllbGQsXG4gICAgICAgIC5tYWlsLWVsbSB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDkzNzVyZW07XG5cbiAgICAgICAgICAgIC5hZGRyZXNzIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMi41NjI1cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucGhvbmUtbnVtYmVyIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMi4zNzVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pY29uLXdpdGgtdGl0bGUgaW1nIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuODc1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLm1haWwtZWxtIHtcbiAgICAgICAgICAgIC5ib2R5LTEsXG4gICAgICAgICAgICAubWFpbCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNDM3NXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tdGV4dCk7XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIG9uLWhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10ZXh0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zb2NpYWwtbWVkaWEge1xuICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgLmljb25zIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc29jaWFsLW1lZGlhIC5pY29ucyBhOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG4gICAgfVxuXG4gICAgLmNvbnRhY3QtcGFyZW50IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLXRvcDogMy4xMjVyZW07XG4gICAgfVxuXG4gICAgcCAuY29udGFjdC1wYXJlbnQgLmFkZHJlc3MtZmllbGQgLmljb24td2l0aC10aXRsZSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjU2MjVyZW07XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwIC5jb250YWN0LXBhcmVudCAucGhvbmVOby1maWVsZCAuaWNvbi13aXRoLXRpdGxlLFxuICAgIHAgLmNvbnRhY3QtcGFyZW50IC5tYWlsLWVsbSAuaWNvbi13aXRoLXRpdGxlIHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICB9XG5cbiAgICBwIGgyLmNlbnRlci1hbGlnbi5jb250YWN0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogNi4zNzVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMuMTI1cmVtO1xuICAgIH1cblxuICAgIC5jb250YWN0cy1mb3JtLXNlbnQge1xuICAgICAgICAuY29udGFjdC1mb3JtLWJsb2NrIHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAxMi4zMTI1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgaDIuY29udGVudC1jb250YWluZXIge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgICAgIHBhZGRpbmc6IDJyZW0gMXJlbSAyLjcwNjI1cmVtO1xuXG4gICAgICAgIC5jb250YWN0cy1wYWdlIHtcbiAgICAgICAgICAgICZfX2hlYWRlci13cmFwcGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcCBoMi5jZW50ZXItYWxpZ24uY29udGFjdCB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA0cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWN0LWZvcm0tYmxvY2sge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmxhbmRpbmctd3JhcHBlciB7XG4gICAgICAgICAgICAmX19jb250YWluZXIge1xuICAgICAgICAgICAgICAgICYgaDIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQzNzVyZW07XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJi5jb250YWN0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuNjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzdGFydDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zb2NpYWwtbWVkaWEge1xuICAgICAgICAgICAgJiA+IHAge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xMjVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJiAuaWNvbnMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuY29udGFjdC1wYXJlbnQge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGdhcDogMnJlbTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDJyZW07XG5cbiAgICAgICAgICAgICYgLmljb24td2l0aC10aXRsZSB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleS1saWdodC1tb2JpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmIC5ib2R5LTEge1xuICAgICAgICAgICAgICAgIGhlaWdodDogMS40Mzc1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zNzVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcblxuICAgICAgICAgICAgICAgICYgLnNlY29uZGFyeS1udW1iZXIge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleS1saWdodC1tb2JpbGUpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJiBhIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJiAuYWRkcmVzcy1maWVsZCB7XG4gICAgICAgICAgICAgICAgJiAuaWNvbi13aXRoLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgJiBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKCcvYXNzZXRzL2ljb25zL3dlYi9pY29ucy9hZGRyZXNzLWdyYXkuc3ZnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYgLmFkZHJlc3Mge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgJiAuYm9keS0xIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICY6bnRoLWNoaWxkKDEpLFxuICAgICAgICAgICAgICAgICAgICAgICAgJjpudGgtY2hpbGQoMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMzc1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiAwLjMxMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IC0wLjMxMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAwLjAxNTYyNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAwLjgxMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0xLjM3NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJiAucGhvbmVOby1maWVsZCB7XG4gICAgICAgICAgICAgICAgJiAuaWNvbi13aXRoLXRpdGxlIHtcbiAgICAgICAgICAgICAgICAgICAgJiBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKCcvYXNzZXRzL2ljb25zL3dlYi9pY29ucy9jYWxsLWdyYXkuc3ZnJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYgLnBob25lLW51bWJlciB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYgLm1haWwtZWxtIHtcbiAgICAgICAgICAgICAgICAmIC5pY29uLXdpdGgtdGl0bGUge1xuICAgICAgICAgICAgICAgICAgICAmIGltZyB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB1cmwoJy9hc3NldHMvaWNvbnMvd2ViL2ljb25zL21haWwtZ3JheS5zdmcnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJiAuYm9keS0xIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiIsIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });


/***/ }),

/***/ 87968:
/*!******************************************************************!*\
  !*** ./src/app/modules/footer-pages/contacts/contacts.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContactsModule": () => (/* binding */ ContactsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contacts-routing.module */ 37846);
/* harmony import */ var _contacts_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contacts.component */ 3857);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class ContactsModule {
}
ContactsModule.ɵfac = function ContactsModule_Factory(t) { return new (t || ContactsModule)(); };
ContactsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ContactsModule });
ContactsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ContactsModule, { declarations: [_contacts_component__WEBPACK_IMPORTED_MODULE_1__.ContactsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _contacts_routing_module__WEBPACK_IMPORTED_MODULE_0__.ContactsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_footer-pages_contacts_contacts_module_ts.js.map