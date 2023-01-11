"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_footer-pages_privacy-policy_privacy-policy_module_ts"],{

/***/ 40092:
/*!**************************************************************************************!*\
  !*** ./src/app/modules/footer-pages/privacy-policy/privacy-policy-routing.module.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyRoutingModule": () => (/* binding */ PrivacyPolicyRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _privacy_policy_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy.component */ 16459);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _privacy_policy_component__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyComponent,
    },
];
class PrivacyPolicyRoutingModule {
}
PrivacyPolicyRoutingModule.ɵfac = function PrivacyPolicyRoutingModule_Factory(t) { return new (t || PrivacyPolicyRoutingModule)(); };
PrivacyPolicyRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: PrivacyPolicyRoutingModule });
PrivacyPolicyRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](PrivacyPolicyRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 16459:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/footer-pages/privacy-policy/privacy-policy.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyComponent": () => (/* binding */ PrivacyPolicyComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_footer_pages_dataservice_footer_pages_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/footer-pages/dataservice/footer-pages.service */ 75913);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_footer_pages_footer_pages_header_footer_pages_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/components/footer-pages/footer-pages-header/footer-pages-header.component */ 96431);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/pipes/safe-html.pipe */ 66926);








function PrivacyPolicyComponent_div_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "tz-footer-pages-header", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("content", pageItem_r2.contents[0] == null ? null : pageItem_r2.contents[0].contentBody);
} }
function PrivacyPolicyComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PrivacyPolicyComponent_div_1_div_1_Template, 2, 1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", pageItem_r2.heading === "Image-content");
} }
function PrivacyPolicyComponent_div_3_div_1_p_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](1, "safeHtml");
} if (rf & 2) {
    const pageItemContent_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](1, 1, pageItemContent_r9.contentBody), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeHtml"]);
} }
function PrivacyPolicyComponent_div_3_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PrivacyPolicyComponent_div_3_div_1_p_1_Template, 2, 3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", pageItem_r6.heading !== "Image-content");
} }
function PrivacyPolicyComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PrivacyPolicyComponent_div_3_div_1_Template, 2, 1, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pageItem_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", pageItem_r6.contents);
} }
class PrivacyPolicyComponent {
    constructor(footerPagesService, settingsService) {
        this.footerPagesService = footerPagesService;
        this.settingsService = settingsService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__.Subject();
    }
    ngOnInit() {
        this.getContent();
        this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.takeUntil)(this.destroy$)).subscribe(() => {
            this.getContent();
        });
    }
    getContent() {
        this.footerPagesService.getPageContent('ppc').subscribe((content) => {
            this.content = content;
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
}
PrivacyPolicyComponent.ɵfac = function PrivacyPolicyComponent_Factory(t) { return new (t || PrivacyPolicyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modules_footer_pages_dataservice_footer_pages_service__WEBPACK_IMPORTED_MODULE_0__.FooterPagesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_1__.SettingsService)); };
PrivacyPolicyComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: PrivacyPolicyComponent, selectors: [["tz-privacy-policy"]], decls: 4, vars: 2, consts: [[1, "privacy-policy-page", "landing-wrapper"], [4, "ngFor", "ngForOf"], [1, "landing-wrapper__container"], [4, "ngIf"], [3, "content"], [3, "innerHTML", 4, "ngIf"], [3, "innerHTML"]], template: function PrivacyPolicyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "main", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, PrivacyPolicyComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, PrivacyPolicyComponent_div_3_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.content == null ? null : ctx.content.pageContent);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.content == null ? null : ctx.content.pageContent);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _shared_components_footer_pages_footer_pages_header_footer_pages_header_component__WEBPACK_IMPORTED_MODULE_2__.FooterPagesHeaderComponent], pipes: [_shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_3__.SafeHtmlPipe], styles: ["@media (max-width: 920px) {\n  .privacy-policy-page.landing-wrapper[_ngcontent-%COMP%] {\n    background-color: var(--color-primary-white);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIiwicHJpdmFjeS1wb2xpY3kuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0RJO0VDbERKO0lBRVEsNENBQUE7RUFETjtBQUNGIiwiZmlsZSI6InByaXZhY3ktcG9saWN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG4ucHJpdmFjeS1wb2xpY3ktcGFnZS5sYW5kaW5nLXdyYXBwZXJ7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 81205:
/*!******************************************************************************!*\
  !*** ./src/app/modules/footer-pages/privacy-policy/privacy-policy.module.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PrivacyPolicyModule": () => (/* binding */ PrivacyPolicyModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./privacy-policy-routing.module */ 40092);
/* harmony import */ var _privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./privacy-policy.component */ 16459);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class PrivacyPolicyModule {
}
PrivacyPolicyModule.ɵfac = function PrivacyPolicyModule_Factory(t) { return new (t || PrivacyPolicyModule)(); };
PrivacyPolicyModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PrivacyPolicyModule });
PrivacyPolicyModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PrivacyPolicyModule, { declarations: [_privacy_policy_component__WEBPACK_IMPORTED_MODULE_1__.PrivacyPolicyComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _privacy_policy_routing_module__WEBPACK_IMPORTED_MODULE_0__.PrivacyPolicyRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_footer-pages_privacy-policy_privacy-policy_module_ts.js.map