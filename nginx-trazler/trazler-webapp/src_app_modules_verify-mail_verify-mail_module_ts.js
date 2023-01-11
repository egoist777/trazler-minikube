"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_verify-mail_verify-mail_module_ts"],{

/***/ 54527:
/*!*******************************************************************!*\
  !*** ./src/app/modules/verify-mail/verify-mail-routing.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyMailRoutingModule": () => (/* binding */ VerifyMailRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _verify_mail_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-mail.component */ 60596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _verify_mail_component__WEBPACK_IMPORTED_MODULE_0__.VerifyMailComponent }];
class VerifyMailRoutingModule {
}
VerifyMailRoutingModule.ɵfac = function VerifyMailRoutingModule_Factory(t) { return new (t || VerifyMailRoutingModule)(); };
VerifyMailRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: VerifyMailRoutingModule });
VerifyMailRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](VerifyMailRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 60596:
/*!**************************************************************!*\
  !*** ./src/app/modules/verify-mail/verify-mail.component.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyMailComponent": () => (/* binding */ VerifyMailComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_modules_core_loader_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/core/loader.service */ 408);
/* harmony import */ var _services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/searchEngine/services/api-access.service */ 32189);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);







class VerifyMailComponent {
    constructor(activeRoute, loaderService, trazlerAPI, dialogService, translateService, router, userService) {
        this.activeRoute = activeRoute;
        this.loaderService = loaderService;
        this.trazlerAPI = trazlerAPI;
        this.dialogService = dialogService;
        this.translateService = translateService;
        this.router = router;
        this.userService = userService;
        this.mailToken = this.activeRoute.snapshot.params['token'];
        this.verifyMail = this.activeRoute.snapshot.queryParams['verifyMail'];
    }
    ngOnInit() {
        this.verifyUserMail();
    }
    verificationProcessed() {
        this.router.navigate(['/search']).then(() => {
            this.loaderService.triggerLoading.emit({ loading: false });
        });
    }
    verifyUserMail() {
        this.loaderService.triggerLoading.emit({ loading: true, textKey: 'ACCOUNT.WE_ARE_VERIFYING_YOUR_ACCOUNT' });
        this.trazlerAPI.verifyEmailID(this.mailToken).subscribe(() => {
            this.userService.openLoginModel(this.verifyMail).then(() => this.verificationProcessed(), () => this.verificationProcessed());
        }, () => {
            this.dialogService.openSnackBarDialog(this.translateService.instant('NOTIFS.MAIL_ALREADY_VERIFIED'));
            this.verificationProcessed();
        });
    }
}
VerifyMailComponent.ɵfac = function VerifyMailComponent_Factory(t) { return new (t || VerifyMailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modules_core_loader_service__WEBPACK_IMPORTED_MODULE_0__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_1__.ApiAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService)); };
VerifyMailComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: VerifyMailComponent, selectors: [["tz-verify-mail"]], decls: 0, vars: 0, template: function VerifyMailComponent_Template(rf, ctx) { }, encapsulation: 2 });


/***/ }),

/***/ 68870:
/*!***********************************************************!*\
  !*** ./src/app/modules/verify-mail/verify-mail.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VerifyMailModule": () => (/* binding */ VerifyMailModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _verify_mail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./verify-mail-routing.module */ 54527);
/* harmony import */ var _verify_mail_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./verify-mail.component */ 60596);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class VerifyMailModule {
}
VerifyMailModule.ɵfac = function VerifyMailModule_Factory(t) { return new (t || VerifyMailModule)(); };
VerifyMailModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: VerifyMailModule });
VerifyMailModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _verify_mail_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyMailRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](VerifyMailModule, { declarations: [_verify_mail_component__WEBPACK_IMPORTED_MODULE_1__.VerifyMailComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _verify_mail_routing_module__WEBPACK_IMPORTED_MODULE_0__.VerifyMailRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_verify-mail_verify-mail_module_ts.js.map