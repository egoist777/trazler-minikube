"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_footer-pages_footer-pages_module_ts"],{

/***/ 26246:
/*!*********************************************************************!*\
  !*** ./src/app/modules/footer-pages/footer-pages-routing.module.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterPagesRoutingModule": () => (/* binding */ FooterPagesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _footer_pages_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-pages.component */ 34242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _footer_pages_component__WEBPACK_IMPORTED_MODULE_0__.FooterPagesComponent,
        children: [
            {
                path: 'about',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_footer-pages_about_about_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./about/about.module */ 37269)).then((m) => m.AboutModule),
            },
            {
                path: 'contacts',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_footer-pages_contacts_contacts_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./contacts/contacts.module */ 87968)).then((m) => m.ContactsModule),
            },
            {
                path: 'help',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_footer-pages_help_help_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./help/help.module */ 97364)).then((m) => m.HelpModule),
            },
            {
                path: 'terms',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_footer-pages_terms-and-conditions_terms-and-conditions_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./terms-and-conditions/terms-and-conditions.module */ 41430)).then((m) => m.TermsAndConditionsModule),
            },
            {
                path: 'ppc',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_footer-pages_privacy-policy_privacy-policy_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./privacy-policy/privacy-policy.module */ 81205)).then((m) => m.PrivacyPolicyModule),
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'about',
            },
        ],
    },
];
class FooterPagesRoutingModule {
}
FooterPagesRoutingModule.ɵfac = function FooterPagesRoutingModule_Factory(t) { return new (t || FooterPagesRoutingModule)(); };
FooterPagesRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: FooterPagesRoutingModule });
FooterPagesRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FooterPagesRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 34242:
/*!****************************************************************!*\
  !*** ./src/app/modules/footer-pages/footer-pages.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterPagesComponent": () => (/* binding */ FooterPagesComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class FooterPagesComponent {
    constructor() { }
    ngOnInit() { }
}
FooterPagesComponent.ɵfac = function FooterPagesComponent_Factory(t) { return new (t || FooterPagesComponent)(); };
FooterPagesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterPagesComponent, selectors: [["tz-footer-pages"]], decls: 1, vars: 0, template: function FooterPagesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["tz-footer-pages {\n  width: 100%;\n}\n\n.landing-wrapper {\n  background: var(--color-main-background);\n  width: 100%;\n  padding-bottom: 12.5rem;\n}\n\n@media (max-width: 920px) {\n  .landing-wrapper {\n    padding: 2rem 1rem;\n  }\n}\n\n.landing-wrapper__container {\n  max-width: 1008px;\n  min-width: 1008px;\n  margin-left: auto;\n  margin-right: auto;\n  padding-top: 3.125rem;\n}\n\n@media (max-width: 1220px) {\n  .landing-wrapper__container {\n    max-width: 880px;\n    min-width: 880px;\n  }\n}\n\n@media (max-width: 920px) {\n  .landing-wrapper__container {\n    min-width: 0;\n    max-width: calc(100vw - 2rem);\n    margin: 0;\n    padding: 0;\n  }\n}\n\n.landing-wrapper__container p {\n  color: var(--color-main-text);\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.15px;\n  margin-bottom: 0;\n}\n\n@media (max-width: 920px) {\n  .landing-wrapper__container p {\n    font-weight: 400;\n    font-size: 0.875rem;\n    line-height: 1.375rem;\n    color: var(--color-grey-light-mobile);\n  }\n}\n\n.landing-wrapper__container strong {\n  font-weight: 500;\n}\n\n@media (max-width: 920px) {\n  .landing-wrapper__container strong {\n    font-size: 1.125rem;\n    line-height: 1.3125rem;\n    color: var(--color-text-mobile);\n  }\n}\n\n.landing-wrapper h1,\n.landing-wrapper h2,\n.landing-wrapper h4 {\n  color: var(--color-main-text);\n}\n\n.landing-wrapper h2,\n.landing-wrapper h4.center-align {\n  font-weight: 700;\n  font-size: 2.125rem;\n  line-height: 2.8125rem;\n  letter-spacing: 0.0025em;\n}\n\n.landing-wrapper h3 {\n  margin: 0.5rem 0 1.25rem;\n  font-size: 1.1875rem;\n  font-weight: 400;\n  line-height: 1.4375rem;\n}\n\n@media (max-width: 920px) {\n  .landing-wrapper h3 {\n    margin: 0 0 0.5rem;\n    font-weight: 500;\n    font-size: 1rem;\n    line-height: 1.1875rem;\n    color: var(--color-text-mobile);\n  }\n}\n\n.landing-wrapper .center-align {\n  display: flex;\n  justify-content: center;\n}\n\n.landing-wrapper .body-1 {\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.15px;\n}\n\n.landing-wrapper p h4.news-letter {\n  padding-top: 6.25rem;\n  padding-bottom: 0.5625rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.landing-wrapper h4 {\n  padding-bottom: 0.75rem;\n  font-weight: 700;\n  font-size: 1.5rem;\n  line-height: 2rem;\n  letter-spacing: 0.0025em;\n}\n\n@media (max-width: 920px) {\n  .landing-wrapper h4 {\n    padding: 0;\n    margin-bottom: 0.5rem;\n    font-weight: 500;\n    font-size: 1.125rem;\n    line-height: 1.3125rem;\n    color: var(--color-text-mobile);\n  }\n}\n\n.landing-wrapper ul {\n  padding-left: 1px;\n  margin-bottom: 0;\n}\n\n.landing-wrapper ul li {\n  list-style-position: inside;\n}\n\n.landing-wrapper p .social-media a:not(:last-child) {\n  margin-right: 12px;\n}\n\n.landing-wrapper .form {\n  min-width: 50.625rem;\n  max-width: 50.625rem;\n  margin: auto;\n}\n\n.landing-wrapper .form__row {\n  margin-bottom: 1.5625rem;\n}\n\n.landing-wrapper .form__col-50w {\n  width: 50%;\n}\n\n.landing-wrapper .form__col-rp {\n  margin-right: 12px;\n}\n\n.landing-wrapper .form__file-upload-label {\n  display: flex;\n  justify-content: center;\n  max-height: 3rem;\n  height: 100%;\n  width: 100%;\n  font-weight: 600;\n  font-size: 1rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.01em;\n  color: var(--color-main-dark-purple-opacity-4);\n  background: var(--color-main-background);\n  border: 1px dashed silver;\n  border-radius: 0.25rem;\n  margin-bottom: unset;\n  cursor: pointer;\n  padding: 0.75rem 1.25rem;\n}\n\n.landing-wrapper .form__file-upload-label input {\n  display: none;\n}\n\n.landing-wrapper .form__file-upload-label-text {\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.landing-wrapper .form__upload-info-block {\n  font-size: 0.75rem;\n  line-height: 1rem;\n  font-weight: 400;\n  letter-spacing: 0.004em;\n  color: rgba(47, 10, 77, 0.6);\n  margin-top: 0.9375rem;\n}\n\n.landing-wrapper .form__flex1 {\n  flex: 1;\n}\n\n.landing-wrapper .form__error-text {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1rem;\n  letter-spacing: 0.004em;\n  color: var(--color-primary-error);\n  margin-top: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci1wYWdlcy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtBQURKOztBQUlBO0VBQ0ksd0NBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7QUFESjs7QUM0Q0k7RUQ5Q0o7SUFNUSxrQkFBQTtFQUFOO0FBQ0Y7O0FBRUk7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBQVI7O0FDb0JFO0VEekJFO0lBUVEsZ0JBQUE7SUFDQSxnQkFBQTtFQUNWO0FBQ0Y7O0FDMEJJO0VEckNBO0lBYVEsWUFBQTtJQUNBLDZCQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUFFVjtBQUNGOztBQUFRO0VBQ0ksNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFFWjs7QUNVSTtFRGxCSTtJQVNRLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxxQkFBQTtJQUNBLHFDQUFBO0VBR2Q7QUFDRjs7QUFBUTtFQUNJLGdCQUFBO0FBRVo7O0FDREk7RURGSTtJQUlRLG1CQUFBO0lBQ0Esc0JBQUE7SUFDQSwrQkFBQTtFQUdkO0FBQ0Y7O0FBQ0k7OztFQUdJLDZCQUFBO0FBQ1I7O0FBRUk7O0VBRUksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0Esd0JBQUE7QUFBUjs7QUFHSTtFQUNJLHdCQUFBO0VBQ0Esb0JBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBRFI7O0FDMUJJO0VEdUJBO0lBT1Esa0JBQUE7SUFDQSxnQkFBQTtJQUNBLGVBQUE7SUFDQSxzQkFBQTtJQUNBLCtCQUFBO0VBQVY7QUFDRjs7QUFHSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtBQURSOztBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUZSOztBQUtJO0VBQ0ksb0JBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBSFI7O0FBTUk7RUFDSSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0FBSlI7O0FDM0RJO0VEMERBO0lBUVEsVUFBQTtJQUNBLHFCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLHNCQUFBO0lBQ0EsK0JBQUE7RUFIVjtBQUNGOztBQU1JO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtBQUpSOztBQU9JO0VBQ0ksMkJBQUE7QUFMUjs7QUFRSTtFQUNJLGtCQUFBO0FBTlI7O0FBU0k7RUFDSSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtBQVBSOztBQVNRO0VBQ0ksd0JBQUE7QUFQWjs7QUFVUTtFQUNJLFVBQUE7QUFSWjs7QUFXUTtFQUNJLGtCQUFBO0FBVFo7O0FBWVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLDhDQUFBO0VBQ0Esd0NBQUE7RUFDQSx5QkFBQTtFQUNBLHNCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7QUFWWjs7QUFZWTtFQUNJLGFBQUE7QUFWaEI7O0FBY1E7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUFaWjs7QUFlUTtFQUNJLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsNEJBQUE7RUFDQSxxQkFBQTtBQWJaOztBQWdCUTtFQUNJLE9BQUE7QUFkWjs7QUFpQlE7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlDQUFBO0VBQ0Esa0JBQUE7QUFmWiIsImZpbGUiOiJmb290ZXItcGFnZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd1dGlscy9taXhpbnMnO1xuXG50ei1mb290ZXItcGFnZXMge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4ubGFuZGluZy13cmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluLWJhY2tncm91bmQpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMi41cmVtO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xuICAgIH1cblxuICAgICZfX2NvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogMTAwOHB4O1xuICAgICAgICBtaW4td2lkdGg6IDEwMDhweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgcGFkZGluZy10b3A6IDMuMTI1cmVtO1xuXG4gICAgICAgIEBpbmNsdWRlIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigxMjIwcHgpIHtcbiAgICAgICAgICAgIG1heC13aWR0aDogODgwcHg7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDg4MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgICAgIG1heC13aWR0aDogY2FsYygxMDB2dyAtIDJyZW0pO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tdGV4dCk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjE1cHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4gICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zNzVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXktbGlnaHQtbW9iaWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHN0cm9uZyB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuXG4gICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMzEyNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgaDEsXG4gICAgaDIsXG4gICAgaDQge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10ZXh0KTtcbiAgICB9XG5cbiAgICBoMixcbiAgICBoNC5jZW50ZXItYWxpZ24ge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDIuMTI1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMi44MTI1cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDI1ZW07XG4gICAgfVxuXG4gICAgaDMge1xuICAgICAgICBtYXJnaW46IDAuNXJlbSAwIDEuMjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4xODc1cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40Mzc1cmVtO1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDAgMCAwLjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTg3NXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY2VudGVyLWFsaWduIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgfVxuXG4gICAgLmJvZHktMSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcbiAgICB9XG5cbiAgICBwIGg0Lm5ld3MtbGV0dGVyIHtcbiAgICAgICAgcGFkZGluZy10b3A6IDYuMjVyZW07XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAwLjU2MjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cblxuICAgIGg0IHtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDAyNWVtO1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zMTI1cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHVsIHtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAxcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgfVxuXG4gICAgdWwgbGkge1xuICAgICAgICBsaXN0LXN0eWxlLXBvc2l0aW9uOiBpbnNpZGU7XG4gICAgfVxuXG4gICAgcCAuc29jaWFsLW1lZGlhIGE6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTJweDtcbiAgICB9XG5cbiAgICAuZm9ybSB7XG4gICAgICAgIG1pbi13aWR0aDogNTAuNjI1cmVtO1xuICAgICAgICBtYXgtd2lkdGg6IDUwLjYyNXJlbTtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgICZfX3JvdyB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjU2MjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAmX19jb2wtNTB3IHtcbiAgICAgICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIH1cblxuICAgICAgICAmX19jb2wtcnAge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fZmlsZS11cGxvYWQtbGFiZWwge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogM3JlbTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMWVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tZGFyay1wdXJwbGUtb3BhY2l0eS00KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1haW4tYmFja2dyb3VuZCk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBkYXNoZWQgc2lsdmVyO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IHVuc2V0O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICZfX2ZpbGUtdXBsb2FkLWxhYmVsLXRleHQge1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuXG4gICAgICAgICZfX3VwbG9hZC1pbmZvLWJsb2NrIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAwNGVtO1xuICAgICAgICAgICAgY29sb3I6IHJnYmEoNDcsIDEwLCA3NywgMC42KTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuOTM3NXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2ZsZXgxIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cblxuICAgICAgICAmX19lcnJvci10ZXh0IHtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMXJlbTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAwNGVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktZXJyb3IpO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIl19 */"], encapsulation: 2 });


/***/ }),

/***/ 89522:
/*!*************************************************************!*\
  !*** ./src/app/modules/footer-pages/footer-pages.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterPagesModule": () => (/* binding */ FooterPagesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _footer_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./footer-pages-routing.module */ 26246);
/* harmony import */ var _footer_pages_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-pages.component */ 34242);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/translation.config */ 19027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class FooterPagesModule {
}
FooterPagesModule.ɵfac = function FooterPagesModule_Factory(t) { return new (t || FooterPagesModule)(); };
FooterPagesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: FooterPagesModule });
FooterPagesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _footer_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.FooterPagesRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule.forChild(src_app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__.TRANSLATION_CONFIG)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FooterPagesModule, { declarations: [_footer_pages_component__WEBPACK_IMPORTED_MODULE_1__.FooterPagesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _footer_pages_routing_module__WEBPACK_IMPORTED_MODULE_0__.FooterPagesRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_footer-pages_footer-pages_module_ts.js.map