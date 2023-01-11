"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_reset-password_reset-password_module_ts"],{

/***/ 58060:
/*!*************************************************************************!*\
  !*** ./src/app/modules/reset-password/reset-password-routing.module.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordRoutingModule": () => (/* binding */ ResetPasswordRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reset-password.component */ 50978);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _reset_password_component__WEBPACK_IMPORTED_MODULE_0__.ResetPasswordComponent }];
class ResetPasswordRoutingModule {
}
ResetPasswordRoutingModule.ɵfac = function ResetPasswordRoutingModule_Factory(t) { return new (t || ResetPasswordRoutingModule)(); };
ResetPasswordRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ResetPasswordRoutingModule });
ResetPasswordRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResetPasswordRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 50978:
/*!********************************************************************!*\
  !*** ./src/app/modules/reset-password/reset-password.component.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordComponent": () => (/* binding */ ResetPasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/validation-patterns.const */ 1903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_user_dataservices_user_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/user/dataservices/user.data.service */ 61636);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);










function ResetPasswordComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 2)(1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResetPasswordComponent_div_0_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r2.proceedLogin(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "ACCOUNT.PASSWORD.SAVED_TITLE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](6, 4, "ACCOUNT.PASSWORD.SAVED_MSG"), " ");
} }
const _c0 = function (a0, a1) { return { "eye-normal": a0, "eye-slash": a1 }; };
const _c1 = function (a0) { return { "valid-check": a0 }; };
function ResetPasswordComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 6)(1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 8)(5, "form", 9)(6, "div", 10)(7, "div", 11)(8, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](10, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 13, 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResetPasswordComponent_div_1_Template_span_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](12); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r6.showPassword.newPassword = !ctx_r6.showPassword.newPassword; return _r4.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 10)(15, "div", 11)(16, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](18, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "input", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResetPasswordComponent_div_1_Template_span_click_21_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](20); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); ctx_r8.showPassword.confirmPassword = !ctx_r8.showPassword.confirmPassword; return _r5.focus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "div", 18)(23, "p", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](26, "ul", 20)(27, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](28, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](30, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](32, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "li");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](36, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](37);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](38, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "div", 22)(40, "div", 23)(41, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ResetPasswordComponent_div_1_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r7); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r9.changeTzPassword(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](42);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](43, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 19, "ACCOUNT.PASSWORD.CREATE"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx_r1.formGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](10, 21, "ACCOUNT.PASSWORD.NEW_PASSWORD"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("type", ctx_r1.showPassword.newPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](35, _c0, ctx_r1.showPassword.newPassword, !ctx_r1.showPassword.newPassword));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](18, 23, "ACCOUNT.PASSWORD.REPEAT_NEW"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("type", ctx_r1.showPassword.confirmPassword ? "text" : "password");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction2"](38, _c0, ctx_r1.showPassword.confirmPassword, !ctx_r1.showPassword.confirmPassword));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](25, 25, "ACCOUNT.PASSWORD.ACCOUNT_PASSWORD_MUST"));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](41, _c1, ctx_r1.validatePassword(".{8,}")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](30, 27, "ACCOUNT.PASSWORD.BE_AT_LEAST_8_CHARACTERS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](43, _c1, ctx_r1.validatePassword("(?=.*?[A-Z])(?=.*?[a-z])")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](34, 29, "ACCOUNT.PASSWORD.USE_BOTH_UPPER_AND_LOWER_CASE_LETTERS"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](45, _c1, ctx_r1.validatePassword("(?=.*?[0-9])")));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](38, 31, "ACCOUNT.PASSWORD.INCLUDE_AT_LEAST_ONE_NUMBER"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](43, 33, "ACCOUNT.PASSWORD.MODIFY"), " ");
} }
class ResetPasswordComponent {
    constructor(userDataService, activeRoute, router, dialogService, translateService, userService) {
        this.userDataService = userDataService;
        this.activeRoute = activeRoute;
        this.router = router;
        this.dialogService = dialogService;
        this.translateService = translateService;
        this.userService = userService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroup({
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.ValidatorPatterns.PASSWORD)]),
            reEnteredNewPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.ValidatorPatterns.PASSWORD),
            ]),
        });
        this.showPassword = {
            newPassword: false,
            confirmPassword: false,
        };
        this.passwordUpdated = false;
        this.token = this.activeRoute.snapshot.params['token'];
        this.customerMail = this.activeRoute.snapshot.data['customerMail'];
    }
    ngOnInit() {
        this.formGroup.controls['newPassword'].addValidators([this.triggerEnteredPassword()]);
        this.formGroup.controls['reEnteredNewPassword'].addValidators([this.updatereEnteredPassword()]);
    }
    validatePassword(patternStr) {
        const pattern = new RegExp(patternStr);
        return pattern.test(this.formGroup.controls['newPassword'].value);
    }
    changeTzPassword() {
        const formValue = this.formGroup.value;
        const passwordData = {
            token: this.token,
            password: formValue.newPassword,
            confirmPassword: formValue.reEnteredNewPassword,
        };
        this.userDataService.resetTzPassword(passwordData).subscribe(() => {
            this.passwordUpdated = true;
        }, (failure) => {
            this.router.navigate(['search']).then(() => {
                this.dialogService.openSnackBarDialog(this.translateService.instant('NOTIFS.INVALID_TOKEN'));
            });
        });
    }
    proceedLogin() {
        this.userService.openLoginModel(this.customerMail).finally(() => {
            this.router.navigate(['search']);
        });
    }
    triggerEnteredPassword() {
        return (control) => {
            var _a, _b;
            (_b = (_a = control.parent) === null || _a === void 0 ? void 0 : _a.get('reEnteredNewPassword')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            return null;
        };
    }
    updatereEnteredPassword() {
        return (control) => {
            var _a, _b;
            const newPassword = (_b = (_a = control.parent) === null || _a === void 0 ? void 0 : _a.get('newPassword')) === null || _b === void 0 ? void 0 : _b.value;
            if (control.valid && newPassword && newPassword !== '' && control.value !== newPassword) {
                return { NEW_PASSWORD_DID_NOT_MATCH: true };
            }
            return null;
        };
    }
}
ResetPasswordComponent.ɵfac = function ResetPasswordComponent_Factory(t) { return new (t || ResetPasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modules_user_dataservices_user_data_service__WEBPACK_IMPORTED_MODULE_1__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_2__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService)); };
ResetPasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: ResetPasswordComponent, selectors: [["tz-reset-password"]], decls: 2, vars: 2, consts: [["class", "password-updated", 4, "ngIf"], ["class", "tz-form-container change-password-container", 4, "ngIf"], [1, "password-updated"], [1, "password-updated__title"], [1, "password-updated__text", "body-1"], ["translate", "ACCOUNT.SIGN.SIGN_IN", 1, "tz-btn", "tz-btn-primary", 3, "click"], [1, "tz-form-container", "change-password-container"], [1, "tz-form-container__title"], [1, "tz-form-container__form"], [1, "form-group-container", 3, "formGroup"], [1, "field-row"], [1, "tz-field"], [1, "tz-field__name"], ["formControlName", "newPassword", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", " ", 3, "type"], ["newPassword", ""], [1, "valid-check", "eye-icon", 3, "ngClass", "click"], ["formControlName", "reEnteredNewPassword", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", " ", 3, "type"], ["reEnteredNewPassword", ""], [1, "password-validations"], [1, "body-2-semibold"], [1, "body-3"], [1, "tz-icon-check-nobg"], [1, "password-actions", "flex", "space-between"], [1, "field-row", "change-password-btn", "form-btn-container"], [1, "tz-btn", "tz-btn-primary", "save-btn", 3, "click"]], template: function ResetPasswordComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, ResetPasswordComponent_div_0_Template, 8, 6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, ResetPasswordComponent_div_1_Template, 44, 47, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.passwordUpdated);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.passwordUpdated);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslateDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgClass], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  background-color: var(--color-main-background);\n  height: 100%;\n  width: 100%;\n}\n\n.tz-form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 6.25rem auto;\n  min-height: calc(100vh - 580px);\n}\n\n.tz-form-container__title[_ngcontent-%COMP%], .tz-form-container__form[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.password-updated[_ngcontent-%COMP%] {\n  color: var(--color-main-text);\n  width: 780px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 6.25rem auto;\n  min-height: calc(100vh - 580px);\n}\n\n.password-updated__title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: var(--font-weight-bold);\n  line-height: 2rem;\n  letter-spacing: 0.0025em;\n  margin-bottom: 1rem;\n}\n\n.password-updated__text[_ngcontent-%COMP%] {\n  margin-bottom: 3.125rem;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LXBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksOENBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBQ0k7RUFFSSxXQUFBO0FBQVI7O0FBSUE7RUFDSSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsK0JBQUE7QUFESjs7QUFHSTtFQUNJLGlCQUFBO0VBQ0Esb0NBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO0VBQ0EsbUJBQUE7QUFEUjs7QUFJSTtFQUNJLHVCQUFBO0VBQ0Esa0JBQUE7QUFGUiIsImZpbGUiOiJyZXNldC1wYXNzd29yZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWJhY2tncm91bmQpO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnR6LWZvcm0tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDYuMjVyZW0gYXV0bztcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTgwcHgpO1xuXG4gICAgJl9fdGl0bGUsXG4gICAgJl9fZm9ybSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbn1cblxuLnBhc3N3b3JkLXVwZGF0ZWQge1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRleHQpO1xuICAgIHdpZHRoOiA3ODBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW46IDYuMjVyZW0gYXV0bztcbiAgICBtaW4taGVpZ2h0OiBjYWxjKDEwMHZoIC0gNTgwcHgpO1xuXG4gICAgJl9fdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDAyNWVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cblxuICAgICZfX3RleHQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzLjEyNXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 99634:
/*!*****************************************************************!*\
  !*** ./src/app/modules/reset-password/reset-password.module.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResetPasswordModule": () => (/* binding */ ResetPasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _reset_password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reset-password.component */ 50978);
/* harmony import */ var _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset-password-routing.module */ 58060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class ResetPasswordModule {
}
ResetPasswordModule.ɵfac = function ResetPasswordModule_Factory(t) { return new (t || ResetPasswordModule)(); };
ResetPasswordModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: ResetPasswordModule });
ResetPasswordModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](ResetPasswordModule, { declarations: [_reset_password_component__WEBPACK_IMPORTED_MODULE_1__.ResetPasswordComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _reset_password_routing_module__WEBPACK_IMPORTED_MODULE_2__.ResetPasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_reset-password_reset-password_module_ts.js.map