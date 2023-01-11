"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_customer_password_password_module_ts"],{

/***/ 31060:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/customer/password/components/password-confirm/password-confirm.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordConfirmComponent": () => (/* binding */ PasswordConfirmComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/tz-svg-icon/tz-svg-icon.component */ 28189);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




class PasswordConfirmComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    ngOnInit() { }
    onClose() {
        this.modalService.dismiss();
    }
}
PasswordConfirmComponent.ɵfac = function PasswordConfirmComponent_Factory(t) { return new (t || PasswordConfirmComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_0__.ModalService)); };
PasswordConfirmComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PasswordConfirmComponent, selectors: [["tz-password-confirm"]], decls: 8, vars: 8, consts: [[1, "change-password-container__success"], [3, "mobile", "icon"], ["data-test", "password-close-change-password-btn", 1, "tz-btn", "tz-btn-primary", "full-width", 3, "click"]], template: function PasswordConfirmComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "tz-svg-icon", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function PasswordConfirmComponent_Template_button_click_5_listener() { return ctx.onClose(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](3, 4, "ACCOUNT.PASSWORD.CHANGED"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("mobile", true)("icon", "change-password-image");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 6, "GENERAL.OK"), " ");
    } }, directives: [_shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_1__.TzSvgIconComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe], styles: ["[_nghost-%COMP%]   .change-password-container__success[_ngcontent-%COMP%] {\n  text-align: center;\n  background-color: var(--color-mob-white);\n  padding: 2rem 1rem;\n}\n[_nghost-%COMP%]   .change-password-container__success[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 1rem;\n  line-height: 1.1875rem;\n  letter-spacing: 0.3px;\n  color: var(--color-text-mobile);\n  margin-bottom: 2.5rem;\n}\n[_nghost-%COMP%]   .change-password-container__success[_ngcontent-%COMP%]   .tz-btn[_ngcontent-%COMP%] {\n  text-transform: capitalize;\n  margin-top: 4.3025rem;\n  color: var(--color-main-text-mobile);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLWNvbmZpcm0uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDSSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0Esa0JBQUE7QUFBUjtBQUVRO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EscUJBQUE7QUFBWjtBQUdRO0VBQ0ksMEJBQUE7RUFDQSxxQkFBQTtFQUNBLG9DQUFBO0FBRFoiLCJmaWxlIjoicGFzc3dvcmQtY29uZmlybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICAuY2hhbmdlLXBhc3N3b3JkLWNvbnRhaW5lcl9fc3VjY2VzcyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbW9iLXdoaXRlKTtcbiAgICAgICAgcGFkZGluZzogMnJlbSAxcmVtO1xuXG4gICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE4NzVyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4zcHg7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLnR6LWJ0biB7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDQuMzAyNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRleHQtbW9iaWxlKTtcbiAgICAgICAgfVxuXG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 77023:
/*!**********************************************************************!*\
  !*** ./src/app/modules/customer/password/password-routing.module.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordRoutingModule": () => (/* binding */ PasswordRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_router_gaurds_modified_form_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/router-gaurds/modified-form.guard */ 70933);
/* harmony import */ var _password_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./password.component */ 28817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [{ path: '', component: _password_component__WEBPACK_IMPORTED_MODULE_1__.PasswordComponent, canDeactivate: [_core_router_gaurds_modified_form_guard__WEBPACK_IMPORTED_MODULE_0__.ModifiedFormGuard] }];
class PasswordRoutingModule {
}
PasswordRoutingModule.ɵfac = function PasswordRoutingModule_Factory(t) { return new (t || PasswordRoutingModule)(); };
PasswordRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PasswordRoutingModule });
PasswordRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PasswordRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 28817:
/*!*****************************************************************!*\
  !*** ./src/app/modules/customer/password/password.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordComponent": () => (/* binding */ PasswordComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/validation-patterns.const */ 1903);
/* harmony import */ var _components_password_confirm_password_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/password-confirm/password-confirm.component */ 31060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _services_modules_user_dataservices_user_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modules/user/dataservices/user.data.service */ 61636);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/pipes/tz-date.pipe */ 92456);













function PasswordComponent_div_46_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "tzDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 2, "ACCOUNT.MEMBER_SINCE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 4, ctx_r5.customerInformation.registeredDate, "longDate"), " ");
} }
function PasswordComponent_div_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, PasswordComponent_div_46_ng_container_1_Template, 6, 7, "ng-container", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.customerInformation.registeredDate);
} }
const _c0 = function (a0) { return { passive: a0 }; };
function PasswordComponent_button_48_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PasswordComponent_button_48_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r6.resetForm(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](4, _c0, ctx_r4.formGroup.untouched));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, "GENERAL.CANCEL"), " ");
} }
const _c1 = function (a0, a1) { return { "eye-normal": a0, "eye-slash": a1 }; };
const _c2 = function (a0) { return { "valid-check": a0 }; };
class PasswordComponent {
    constructor(platformService, userService, userDataService, dialogService, translateService, changeDetectorRef, modalService, location) {
        this.platformService = platformService;
        this.userService = userService;
        this.userDataService = userDataService;
        this.dialogService = dialogService;
        this.translateService = translateService;
        this.changeDetectorRef = changeDetectorRef;
        this.modalService = modalService;
        this.location = location;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroup({
            currentPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.ValidatorPatterns.PASSWORD)]),
            newPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.ValidatorPatterns.PASSWORD)]),
            reEnteredNewPassword: new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.ValidatorPatterns.PASSWORD),
            ]),
        });
        this.showPassword = {
            currentPassword: false,
            newPassword: false,
            confirmPassword: false,
        };
        this.page = 'ACCOUNT.SIGN.PASSWORD';
    }
    get isDirty() {
        return this.formGroup.dirty;
    }
    ngOnInit() {
        this.customerInformation = this.userService.getCustomerInformation();
        this.formGroup.controls['newPassword'].addValidators([this.triggerEnteredPassword()]);
        this.formGroup.controls['reEnteredNewPassword'].addValidators([this.updatereEnteredPassword()]);
    }
    validatePassword(patternStr) {
        const pattern = new RegExp(patternStr);
        return pattern.test(this.formGroup.controls['newPassword'].value);
    }
    resetForm() {
        this.formGroup.reset();
    }
    changeTzPassword() {
        const formValue = this.formGroup.value;
        const updatePass = {
            currentPassword: formValue.currentPassword,
            newPassword: formValue.newPassword,
            confirmPassword: formValue.reEnteredNewPassword,
            updateType: 'change',
        };
        this.userDataService.changeTzPassword(this.customerInformation.id, updatePass).subscribe(() => {
            this.formGroup.reset();
            this.changeDetectorRef.detectChanges();
            this.openModalSuccessChangedPassword();
        }, (failure) => {
            console.log(failure);
            const failureErrors = failure.error.errors;
            let errorMessage = failureErrors.currentPassword;
            if (!errorMessage) {
                if (failureErrors.newPassword) {
                    errorMessage = failureErrors.newPassword;
                }
                else {
                    errorMessage = failureErrors.confirmPassword;
                }
            }
            if (errorMessage) {
                this.dialogService.openSnackBar({
                    message: this.translateService.instant(errorMessage),
                });
            }
        });
    }
    openModalSuccessChangedPassword() {
        this.modalService
            .createMainModal(_components_password_confirm_password_confirm_component__WEBPACK_IMPORTED_MODULE_1__.PasswordConfirmComponent, { title: 'ACCOUNT.PASSWORD.CHANGE' })
            .then(() => {
            this.location.back();
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
PasswordComponent.ɵfac = function PasswordComponent_Factory(t) { return new (t || PasswordComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_2__.PlatformService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_3__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modules_user_dataservices_user_data_service__WEBPACK_IMPORTED_MODULE_4__.UserDataService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_5__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_6__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_11__.Location)); };
PasswordComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: PasswordComponent, selectors: [["tz-password"]], decls: 52, vars: 56, consts: [[1, "tz-form-container", "change-password-container", "title-mb", "mb-0"], [1, "tz-form-container__form"], [1, "form-group-container", 3, "formGroup"], [1, "field-row", "current-password"], [1, "tz-field"], [1, "tz-field__name"], ["data-test", "password-current-password", "formControlName", "currentPassword", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", " ", 3, "type"], ["currentPassword", ""], [1, "valid-check", "eye-icon", 3, "ngClass", "click"], [1, "field-row"], ["data-test", "password-new-password", "formControlName", "newPassword", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", " ", 3, "type"], ["newPassword", ""], ["data-test", "password-repeat-new-password", "formControlName", "reEnteredNewPassword", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", " ", 3, "type"], ["reEnteredNewPassword", ""], ["data-test", "password-password-validations", 1, "password-validations"], [1, "body-2-semibold"], [1, "body-3"], [1, "tz-icon-check-nobg"], [1, "password-actions", "flex", "space-between"], ["class", "body-3", 4, "ngIf"], [1, "field-row", "change-password-btn", "form-btn-container"], ["class", "tz-btn tz-btn-secondary cancel-btn", "data-test", "password-cancel-btn", 3, "ngClass", "click", 4, "ngIf"], ["data-test", "password-change-password-btn", 1, "tz-btn", "tz-btn-primary", "save-btn", 3, "click"], [4, "ngIf"], [1, "member-since"], ["data-test", "password-cancel-btn", 1, "tz-btn", "tz-btn-secondary", "cancel-btn", 3, "ngClass", "click"]], template: function PasswordComponent_Template(rf, ctx) { if (rf & 1) {
        const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "form", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "input", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PasswordComponent_Template_span_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](9); ctx.showPassword.currentPassword = !ctx.showPassword.currentPassword; return _r0.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 9)(12, "div", 4)(13, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "input", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PasswordComponent_Template_span_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](17); ctx.showPassword.newPassword = !ctx.showPassword.newPassword; return _r1.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div")(20, "div", 9)(21, "div", 4)(22, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PasswordComponent_Template_span_click_27_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](26); ctx.showPassword.confirmPassword = !ctx.showPassword.confirmPassword; return _r2.focus(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "div", 14)(29, "p", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](31, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "ul", 16)(33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](34, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](36, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](37, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](45, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](46, PasswordComponent_div_46_Template, 2, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](48, PasswordComponent_button_48_Template, 3, 6, "button", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "button", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function PasswordComponent_Template_button_click_49_listener() { return ctx.changeTzPassword(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](51, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](7, 25, "ACCOUNT.PASSWORD.CURRENT_PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("type", ctx.showPassword.currentPassword ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](41, _c1, !ctx.showPassword.currentPassword, ctx.showPassword.currentPassword));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](15, 27, "ACCOUNT.PASSWORD.NEW_PASSWORD"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("type", ctx.showPassword.newPassword ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](44, _c1, !ctx.showPassword.newPassword, ctx.showPassword.newPassword));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("reverse", ctx.platformService.isMobileDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](24, 29, "ACCOUNT.PASSWORD.REPEAT_NEW"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("type", ctx.showPassword.confirmPassword ? "text" : "password");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](47, _c1, !ctx.showPassword.confirmPassword, ctx.showPassword.confirmPassword));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](31, 31, "ACCOUNT.PASSWORD.ACCOUNT_PASSWORD_MUST"));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](50, _c2, ctx.validatePassword(".{8,}")));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](36, 33, "ACCOUNT.PASSWORD.BE_AT_LEAST_8_CHARACTERS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](52, _c2, ctx.validatePassword("(?=.*?[A-Z])(?=.*?[a-z])")));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 35, "ACCOUNT.PASSWORD.USE_BOTH_UPPER_AND_LOWER_CASE_LETTERS"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](54, _c2, ctx.validatePassword("(?=.*?[0-9])")));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 37, "ACCOUNT.PASSWORD.INCLUDE_AT_LEAST_ONE_NUMBER"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](51, 39, "ACCOUNT.PASSWORD.CHANGE"), " ");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_7__.TzDatePipe], styles: [".member-since[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-semibold);\n}\n\n.cancel-btn[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3N3b3JkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksd0NBQUE7QUFDSjs7QUFFQTtFQUNJLHNCQUFBO0FBQ0oiLCJmaWxlIjoicGFzc3dvcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVtYmVyLXNpbmNlIHtcbiAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xufVxuXG4uY2FuY2VsLWJ0biB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjYyNXJlbTtcbn1cbiJdfQ== */"], changeDetection: 0 });


/***/ }),

/***/ 53285:
/*!**************************************************************!*\
  !*** ./src/app/modules/customer/password/password.module.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PasswordModule": () => (/* binding */ PasswordModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./password-routing.module */ 77023);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _password_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./password.component */ 28817);
/* harmony import */ var _components_password_confirm_password_confirm_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/password-confirm/password-confirm.component */ 31060);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);







class PasswordModule {
}
PasswordModule.ɵfac = function PasswordModule_Factory(t) { return new (t || PasswordModule)(); };
PasswordModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: PasswordModule });
PasswordModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _password_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](PasswordModule, { declarations: [_password_component__WEBPACK_IMPORTED_MODULE_2__.PasswordComponent, _components_password_confirm_password_confirm_component__WEBPACK_IMPORTED_MODULE_3__.PasswordConfirmComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _password_routing_module__WEBPACK_IMPORTED_MODULE_0__.PasswordRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_customer_password_password_module_ts.js.map