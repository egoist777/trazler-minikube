"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_core_utils_tz-passenger_util_ts-src_app_modules_home_home_module_ts"],{

/***/ 84673:
/*!*********************************************************!*\
  !*** ./src/app/modules/core/utils/tz-passenger.util.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TzPassengerUtil": () => (/* binding */ TzPassengerUtil)
/* harmony export */ });
class TzPassengerUtil {
    static rentalOnly(selectedServices) {
        let showRental = selectedServices['rentCar'];
        for (const key in selectedServices) {
            if (key !== 'activity' && key !== 'rentCar' && selectedServices[key]) {
                showRental = false;
            }
        }
        return showRental;
    }
    static formPaxDisplayStr(selectedServices, pax, translateService, forCheckout) {
        let displayStr = `${pax.adults} ${translateService.instant('TRAVELLER.' + (pax.adults > 1 ? 'ADULTS' : 'ADULT'))}`;
        if (forCheckout) {
            const children = pax.children + pax.youth;
            if (children > 0) {
                const childText = translateService.instant(children > 1 ? 'SEARCH.CHILDREN' : 'SEARCH.CHILD');
                displayStr = `${displayStr}, ${children} ${childText}`;
            }
            if (pax.infants > 0) {
                const cSuffix = translateService.instant(pax.infants < 2 ? 'SEARCH.INFANT' : 'SEARCH.INFANTS');
                displayStr = `${displayStr}, ${pax.infants} ${cSuffix}`;
            }
            return displayStr;
        }
        if (selectedServices && selectedServices['accommodation']) {
            //do not use pax.total, it can be undefined in some case (when data comes from server)
            const total = pax.adults + pax.child;
            const pSuffix = translateService.instant('TRAVELLER.' + (total > 1 ? 'PEOPLE' : 'PERSON'));
            const rSuffix = pax.rooms === 0
                ? ''
                : ', ' + pax.rooms + ' ' + translateService.instant(pax.rooms > 1 ? 'HOTELS.ROOMS' : 'HOTELS.ROOM');
            displayStr = `${total} ${pSuffix}${rSuffix}`.toLocaleLowerCase();
            return displayStr;
        }
        if (pax.child > 0) {
            const childText = translateService.instant(pax.child > 1 ? 'SEARCH.CHILDREN' : 'SEARCH.CHILD');
            displayStr = `${displayStr}, ${pax.child} ${childText.toLowerCase()}`;
        }
        if (this.rentalOnly(selectedServices)) {
            const driverAgeSelected = pax.driversAge && pax.driversAge !== 0 && pax.driversAge !== -1;
            if (driverAgeSelected) {
                displayStr = translateService.instant('CAR_RENTAL.DRIVER_AGE', { age: pax.driversAge });
            }
            else {
                displayStr = translateService.instant('CAR_RENTAL.DRIVERS_AGE_LABEL');
            }
        }
        return displayStr;
    }
    static FormPax(selectedServices, options, translateService) {
        const pax = options.isDefault ? this.DefaultPassengerIns() : options;
        // For accommodation default pax count is 2
        if ((!options || options.isDefault) && selectedServices['accommodation']) {
            pax.adults = 2;
            pax.total = 2;
            pax.rooms = 1;
        }
        pax.child = pax.infants + pax.children + (pax.youth ? pax.youth : 0);
        pax.childAges = [...pax.infantAges, ...pax.childrenAges, ...pax.youthAges];
        pax.displayStr = this.formPaxDisplayStr(selectedServices, pax, translateService, false);
        return pax;
    }
    static MakePassengerReq(selectedServices, pax, translateService) {
        const req = {
            adults: pax.adults,
            children: 0,
            child: 0,
            infants: 0,
            youth: 0,
            childrenAges: [],
            infantAges: [],
            youthAges: [],
            total: pax.total,
            rooms: pax.rooms,
            driversAge: pax.driversAge,
            displayStr: this.formPaxDisplayStr(selectedServices, pax, translateService, false),
            isDefault: pax.isDefault,
            isRental: this.rentalOnly(selectedServices),
        };
        pax.infants = 0;
        pax.infantAges = [];
        pax.childrenAges = [];
        if (!pax.childAges || !Array.isArray(pax.childAges) || req.isRental) {
            return req;
        }
        pax.childAges.forEach((childAge) => {
            switch (true) {
                case childAge !== -1 && childAge < 2:
                    req.infants += 1;
                    req.infantAges.push(childAge);
                    break;
                case childAge >= 2 && childAge <= 17:
                    req.children += 1;
                    req.childrenAges.push(childAge);
                    break;
                default:
                    req.youth += 1;
                    req.youthAges.push(childAge);
                    break;
            }
        });
        req.child = req.youth + req.infants + req.children;
        return req;
    }
    static DefaultPassengerIns() {
        return {
            adults: 1,
            children: 0,
            infants: 0,
            childrenAges: [],
            infantAges: [],
            youthAges: [],
            youth: 0,
            rooms: 1,
            child: 0,
            total: 1,
            driversAge: -1,
            childAges: [],
            displayStr: '',
            isDefault: true,
            openPassengers: false,
            openDriverAge: false,
            openChildrenAge: false,
        };
    }
}


/***/ }),

/***/ 66241:
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-mob-static-content/home-mob-static-content.component.ts ***!
  \******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeMobStaticContentComponent": () => (/* binding */ HomeMobStaticContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/validation-patterns.const */ 1903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/searchEngine/services/api-access.service */ 32189);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/tz-icon/tz-icon.component */ 48368);








class HomeMobStaticContentComponent {
    constructor(dialogService, trazlerAPI, translateService) {
        this.dialogService = dialogService;
        this.trazlerAPI = trazlerAPI;
        this.translateService = translateService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.ValidatorPatterns.EMAIL)]),
        });
    }
    ngOnInit() { }
    subscribe() {
        const isValidMail = this.formGroup.controls['email'].value && this.formGroup.controls['email'].value !== '';
        if (!isValidMail) {
            return;
        }
        this.trazlerAPI.SubscribeToTz(this.formGroup.controls['email'].value).then((success) => {
            this.formGroup.reset();
            this.dialogService.openSnackBar({ message: this.translateService.instant('NOTIFS.SUBSCRIBE_SUCCESS') });
        }, (failure) => {
            console.log('Subscription failure: ', failure);
            if (failure.error) {
                this.dialogService.openSnackBar({ message: failure.error.message });
            }
        });
    }
}
HomeMobStaticContentComponent.ɵfac = function HomeMobStaticContentComponent_Factory(t) { return new (t || HomeMobStaticContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_2__.ApiAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService)); };
HomeMobStaticContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomeMobStaticContentComponent, selectors: [["tz-home-mob-static-content"]], decls: 56, vars: 40, consts: [[1, "tz-info-container", "tz-container"], [1, "head-4", "b-service"], [1, "head-5"], [1, "tz-sub-bg"], [1, "tz-overlay-bg-color"], [1, "lets-start-txt"], [1, "head-2"], [1, "head-1"], [1, "covid-txt"], [1, "head-4"], [1, "tz-help-options", "tz-info-container", "tz-container"], [1, "help-option"], ["icon", "support"], [1, "body-2"], ["icon", "system"], [1, "subscription-container", "tz-container"], [1, "head-3"], [1, "input-container", "d-flex", 3, "formGroup"], ["tabindex", "-1", "type", "text", "formControlName", "email", "data-mob", "searching-page-input-email-field", 1, "caption-text", 3, "placeholder"], ["tabindex", "-1", "data-mob", "searching-page-signmeup", 1, "btn-yellow", "subtitle-2", 3, "click"]], template: function HomeMobStaticContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "div", 0)(8, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "div", 5)(11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](16, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 0)(18, "div", 8)(19, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 10)(26, "div", 11)(27, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](28, "tz-icon", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div")(30, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](32, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 11)(37, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](38, "tz-icon", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div")(40, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "div", 15)(47, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](49, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](50, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](51, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](52, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](53, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeMobStaticContentComponent_Template_button_click_53_listener() { return ctx.subscribe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](54);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](55, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 14, "HOME.BOOK_SERVICES_TXT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](6, 16, "HOME.SELECT_SERVICES_TXT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](13, 18, "HOME.LETS_START"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](16, 20, "HOME.TRAVEL_WITH_US"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](21, 22, "HOME.COVID_19_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 24, "HOME.COVID_19_UPDATE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](32, 26, "HOME.HELP_OPTION_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 28, "HOME.HELP_OPTION_CONTENT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](42, 30, "HOME.TRAVEL_OPTION_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 32, "HOME.TRAVEL_OPTION_DESCRIPTION"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](49, 34, "HOME.SIGN_UP_TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](52, 36, "FOOTER.Email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](55, 38, "FOOTER.SUBSCRIBE"), " ");
    } }, directives: [_shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_3__.TzIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .tz-info-container[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  color: var(--color-mob-black);\n  text-align: center;\n  width: 100%;\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .tz-info-container[_ngcontent-%COMP%]   .b-service[_ngcontent-%COMP%] {\n  margin-bottom: 0.4456rem;\n}\n[_nghost-%COMP%]   .tz-info-container[_ngcontent-%COMP%]   .head-3[_ngcontent-%COMP%] {\n  color: var(--color-mob-black);\n}\n[_nghost-%COMP%]   .tz-info-container[_ngcontent-%COMP%]    > .head-4[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  color: var(--color-mob-black);\n  font-weight: 700;\n  line-height: 1.25rem;\n  letter-spacing: 0.02em;\n}\n[_nghost-%COMP%]   .tz-info-container[_ngcontent-%COMP%]    > .head-5[_ngcontent-%COMP%] {\n  font-weight: 300;\n  font-size: 0.875rem;\n  line-height: 1.0625rem;\n}\n[_nghost-%COMP%]   .tz-info-container[_ngcontent-%COMP%]:first-child {\n  margin-bottom: 1.3475rem;\n}\n[_nghost-%COMP%]   .covid-txt[_ngcontent-%COMP%] {\n  background: var(--color-main-blue-light);\n  border: 0.5px solid var(--color-main-blue);\n  color: var(--color-main-blue);\n  border-radius: 0.5rem;\n  font-family: \"Segoe UI\", sans-serif;\n  padding: 0.625rem 1.063rem;\n}\n[_nghost-%COMP%]   .covid-txt[_ngcontent-%COMP%]   .head-5[_ngcontent-%COMP%] {\n  line-height: 1rem;\n  text-transform: capitalize;\n  font-weight: 600;\n  font-size: 0.875rem;\n  letter-spacing: 0.0015em;\n  margin-bottom: 0.5rem;\n}\n[_nghost-%COMP%]   .covid-txt[_ngcontent-%COMP%]   .head-4[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 0.9975rem;\n  margin: 0;\n}\n[_nghost-%COMP%]   .covid-txt[_ngcontent-%COMP%]   .head-4[_ngcontent-%COMP%]::first-letter {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%] {\n  margin: 2.5rem 0;\n}\n[_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%] {\n  padding: 0.625rem 0 0.625rem 1rem;\n  background-color: var(--color-main-blue-light);\n  border-bottom: 0.5px solid var(--color-border-mobile);\n  border-radius: 0.5rem;\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  gap: 1rem;\n}\n[_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 1rem;\n}\n[_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  text-align: left;\n}\n[_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]   .body-2[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.6875rem;\n  line-height: 1.125rem;\n  color: var(--color-grey-light-mobile);\n}\n[_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]   .head-4[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 1rem;\n  line-height: 1.25rem;\n  letter-spacing: 0.03125rem;\n  margin-bottom: 0.25rem;\n  color: var(--color-main-purple);\n}\n[_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%] {\n  height: 8rem;\n}\n[_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 3.125rem;\n  height: 3.125rem;\n  background-color: #FFFFFF;\n  border-radius: 9999px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%] {\n  height: 32.25rem;\n  background: url(/assets/icons/web/img/TzHomeBg/tzBackground_0.jpg) no-repeat center;\n  background-size: cover;\n  z-index: -1;\n  position: relative;\n  border-radius: 0.25rem;\n  overflow: hidden;\n  margin-bottom: 1.5rem;\n  max-height: 11.75rem;\n}\n[_nghost-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .lets-start-txt[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 1rem;\n  transform: translateY(-50%);\n  text-align: left;\n}\n[_nghost-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .head-2[_ngcontent-%COMP%] {\n  opacity: 0.8;\n  font-weight: 900;\n  font-size: 1.25rem;\n  line-height: 1.438rem;\n  color: #FFFFFF;\n}\n[_nghost-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .head-1[_ngcontent-%COMP%] {\n  font-weight: 900;\n  font-size: 1.5rem;\n  line-height: 1.75rem;\n  color: #FFFFFF;\n}\n[_nghost-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .tz-overlay-bg-color[_ngcontent-%COMP%] {\n  background-color: var(--color-blue-mob-bg);\n  opacity: 0.14;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  left: 0;\n}\n[_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%] {\n  padding: 0 1rem;\n  text-align: center;\n}\n[_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  margin-top: 1rem;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3rem;\n  padding: 0.8125rem 1rem;\n  border-radius: 0.25rem;\n  color: #9788a4;\n}\n[_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  border-radius: 0.25rem;\n  padding: 0 1.25rem;\n  background: var(--color-main-orange);\n  color: var(--color-primary-white);\n  margin-left: 0;\n  margin-top: 1.5rem;\n  height: 3rem;\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n}\n[_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%]   .input-container.ng-invalid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n}\n__mob-info-text[_nghost-%COMP%] {\n  margin-top: 0.8125rem;\n  font-weight: 500;\n  font-size: 1rem;\n  line-height: 1.1875rem;\n  color: var(--ion-color-primary-contrast);\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6);\n  text-align: center;\n}\n.head-3[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1rem;\n  line-height: 1.3125rem;\n  letter-spacing: 0.0025em;\n}\n[_nghost-%COMP%]     .home-container__mob-info-text .color-error {\n  color: var(--ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtbW9iLXN0YXRpYy1jb250ZW50LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksV0FBQTtBQURKO0FBR0k7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxtQkFBQTtBQURSO0FBR1E7RUFDSSx3QkFBQTtBQURaO0FBSVE7RUFDSSw2QkFBQTtBQUZaO0FBS1E7RUFDSSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7QUFIWjtBQU1RO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBSlo7QUFRSTtFQUNJLHdCQUFBO0FBTlI7QUFTSTtFQUNJLHdDQUFBO0VBQ0EsMENBQUE7RUFDQSw2QkFBQTtFQUNBLHFCQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtBQVBSO0FBU1E7RUFDSSxpQkFBQTtFQUNBLDBCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7QUFQWjtBQVVRO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtBQVJaO0FBVVk7RUFDSSx5QkFBQTtBQVJoQjtBQWFJO0VBQ0ksZ0JBQUE7QUFYUjtBQWFRO0VBQ0ksaUNBQUE7RUFDQSw4Q0FBQTtFQUNBLHFEQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7RUFDQSxTQUFBO0FBWFo7QUFhWTtFQUNJLG1CQUFBO0FBWGhCO0FBY1k7RUFDSSxnQkFBQTtBQVpoQjtBQWVZO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUNBQUE7QUFiaEI7QUFnQlk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtFQUNBLDBCQUFBO0VBQ0Esc0JBQUE7RUFDQSwrQkFBQTtBQWRoQjtBQWlCWTtFQUNJLFlBQUE7QUFmaEI7QUFrQlk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLHFCQUFBO0VBQ0EsZ0JBQUE7QUFoQmhCO0FBcUJJO0VBQ0ksZ0JBQUE7RUFDQSxtRkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esb0JBQUE7QUFuQlI7QUFxQlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0EsMkJBQUE7RUFDQSxnQkFBQTtBQW5CWjtBQXNCUTtFQUNJLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0FBcEJaO0FBdUJRO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtBQXJCWjtBQXdCUTtFQUNJLDBDQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtBQXRCWjtBQTJCSTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQXpCUjtBQTJCUTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7QUF6Qlo7QUEyQlk7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHVCQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBekJoQjtBQTRCWTtFQUNJLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBMUJoQjtBQTZCWTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQTNCaEI7QUFnQ0k7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FBOUJSO0FBa0NBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSx3QkFBQTtBQS9CSjtBQWtDQTtFQUNJLHdDQUFBO0FBL0JKIiwiZmlsZSI6ImhvbWUtbW9iLXN0YXRpYy1jb250ZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAudHotaW5mby1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tb2ItYmxhY2spO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuXG4gICAgICAgIC5iLXNlcnZpY2Uge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC40NDU2cmVtO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAuaGVhZC0zIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tb2ItYmxhY2spO1xuICAgICAgICB9XG5cbiAgICAgICAgJiA+IC5oZWFkLTQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1vYi1ibGFjayk7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJiA+IC5oZWFkLTUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4wNjI1cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnR6LWluZm8tY29udGFpbmVyOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4zNDc1cmVtO1xuICAgIH1cblxuICAgIC5jb3ZpZC10eHQge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluLWJsdWUtbGlnaHQpO1xuICAgICAgICBib3JkZXI6IDAuNXB4IHNvbGlkIHZhcigtLWNvbG9yLW1haW4tYmx1ZSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWJsdWUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnU2Vnb2UgVUknLCBzYW5zLXNlcmlmO1xuICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbSAxLjA2M3JlbTtcblxuICAgICAgICAuaGVhZC01IHtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAwMTVlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkLTQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjk5NzVyZW07XG4gICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgICY6OmZpcnN0LWxldHRlciB7XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ei1oZWxwLW9wdGlvbnMge1xuICAgICAgICBtYXJnaW46IDIuNXJlbSAwO1xuXG4gICAgICAgIC5oZWxwLW9wdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbSAwIDAuNjI1cmVtIDFyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWJsdWUtbGlnaHQpO1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLW1vYmlsZSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgICAgICAgZ2FwOiAxcmVtO1xuXG4gICAgICAgICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYgPiAqIHtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYm9keS0yIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC42ODc1cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleS1saWdodC1tb2JpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaGVhZC00IHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogODAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMzEyNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5oZWxwLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgIGhlaWdodDogOHJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdHotaWNvbiB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDMuMTI1cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMy4xMjVyZW07XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA5OTk5cHg7XG4gICAgICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ei1zdWItYmcge1xuICAgICAgICBoZWlnaHQ6IDMyLjI1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaW1nL1R6SG9tZUJnL3R6QmFja2dyb3VuZF8wLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICAgICAgICBtYXgtaGVpZ2h0OiAxMS43NXJlbTtcblxuICAgICAgICAubGV0cy1zdGFydC10eHQge1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgICAgICBsZWZ0OiAxcmVtO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oZWFkLTIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC44O1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQzOHJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhlYWQtMSB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogOTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43NXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiAjRkZGRkZGO1xuICAgICAgICB9XG5cbiAgICAgICAgLnR6LW92ZXJsYXktYmctY29sb3Ige1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItYmx1ZS1tb2ItYmcpO1xuICAgICAgICAgICAgb3BhY2l0eTogMC4xNDtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgIH1cblxuXG4gICAgLnN1YnNjcmlwdGlvbi1jb250YWluZXIge1xuICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcblxuICAgICAgICAuaW5wdXQtY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuODEyNXJlbSAxcmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6ICM5Nzg4YTQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMS4yNXJlbTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluLW9yYW5nZSk7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubmctaW52YWxpZCBidXR0b24ge1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX21vYi1pbmZvLXRleHQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjgxMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTg3NXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLmhlYWQtMyB7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMzEyNXJlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogMC4wMDI1ZW07XG59XG5cbjpob3N0IDo6bmctZGVlcCAuaG9tZS1jb250YWluZXJfX21vYi1pbmZvLXRleHQgLmNvbG9yLWVycm9yIHtcbiAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xufVxuIl19 */"] });


/***/ }),

/***/ 20831:
/*!**********************************************************************************************!*\
  !*** ./src/app/modules/home/components/home-static-content/home-static-content.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeStaticContentComponent": () => (/* binding */ HomeStaticContentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/validation-patterns.const */ 1903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/searchEngine/services/api-access.service */ 32189);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/tz-icon/tz-icon.component */ 48368);








class HomeStaticContentComponent {
    constructor(dialogService, trazlerAPI, translateService) {
        this.dialogService = dialogService;
        this.trazlerAPI = trazlerAPI;
        this.translateService = translateService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroup({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.ValidatorPatterns.EMAIL)]),
        });
    }
    ngOnInit() { }
    subscribe() {
        const isValidMail = this.formGroup.controls['email'].value && this.formGroup.controls['email'].value !== '';
        if (!isValidMail) {
            return;
        }
        this.trazlerAPI.SubscribeToTz(this.formGroup.controls['email'].value).then((success) => {
            this.formGroup.reset();
            this.dialogService.openSnackBar({ message: this.translateService.instant('NOTIFS.SUBSCRIBE_SUCCESS') });
        }, (failure) => {
            console.log('Subscription failure: ', failure);
            if (failure.error) {
                this.dialogService.openSnackBar({ message: failure.error.message });
            }
        });
    }
}
HomeStaticContentComponent.ɵfac = function HomeStaticContentComponent_Factory(t) { return new (t || HomeStaticContentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_2__.ApiAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslateService)); };
HomeStaticContentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomeStaticContentComponent, selectors: [["tz-home-static-content"]], decls: 49, vars: 40, consts: [[1, "tz-info-container", "tz-container"], [1, "head-4"], [1, "covid-txt", "subtitle-2"], [1, "tz-help-options", "d-flex", "tz-container"], [1, "help-option"], [1, "d-flex"], [1, "body-2"], ["icon", "support"], [1, "d-flex", "help-content"], ["icon", "system"], [1, "tz-sub-bg"], [1, "tz-container", "tz-sub-container"], [1, "lets-start-txt"], [1, "head-2"], [1, "head-1"], [1, "subscription-container", "tz-container"], [1, "head-3"], [1, "input-container", "d-flex", 3, "formGroup"], ["tabindex", "-1", "type", "text", "formControlName", "email", "data-test", "searching-page-input-email-field", 1, "caption-text", 3, "placeholder"], ["tabindex", "-1", "data-test", "searching-page-signmeup", 1, "btn-yellow", "subtitle-2", 3, "click"]], template: function HomeStaticContentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 2)(6, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](8, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](10, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 3)(12, "div", 4)(13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 5)(17, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](20, "tz-icon", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "div", 4)(22, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](24, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 8)(26, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](28, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](29, "tz-icon", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 10)(31, "div", 11)(32, "div", 12)(33, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](35, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](37);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](38, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](39, "div", 15)(40, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](42, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](43, "form", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](44, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](45, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](46, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeStaticContentComponent_Template_button_click_46_listener() { return ctx.subscribe(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](47);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](48, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](3, 14, "HOME.BOOK_SERVICES_TXT"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 16, "HOME.SELECT_SERVICES_TXT"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](8, 18, "HOME.COVID_19_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" - ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](10, 20, "HOME.COVID_19_UPDATE"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 22, "HOME.HELP_OPTION_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](19, 24, "HOME.HELP_OPTION_CONTENT"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](24, 26, "HOME.TRAVEL_OPTION_TITLE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](28, 28, "HOME.TRAVEL_OPTION_DESCRIPTION"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](35, 30, "HOME.LETS_START"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](38, 32, "HOME.TRAVEL_WITH_US"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](42, 34, "HOME.SIGN_UP_TEXT"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.formGroup);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](45, 36, "FOOTER.Email"));
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](48, 38, "FOOTER.SUBSCRIBE"), " ");
    } }, directives: [_shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_3__.TzIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%] {\n    top: -2.5rem;\n  }\n}\n[_nghost-%COMP%]   .home-bg-img[_ngcontent-%COMP%] {\n  height: 20.625rem;\n  background: url(/assets/icons/web/img/TzHomeBg/tzBackground_2.jpg) no-repeat center;\n  background-size: cover;\n  z-index: -1;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .home-bg-img[_ngcontent-%COMP%] {\n    background: url(/assets/icons/web/images/mobile-home-header-bg.jpg) no-repeat;\n    background-size: cover;\n    padding-top: 2.5rem;\n    height: 10.625rem;\n    position: relative;\n    pointer-events: none;\n  }\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .welcome-txt[_ngcontent-%COMP%] {\n  padding: 4.438rem 0 1.875rem;\n  text-align: center;\n  color: var(--color-primary-white);\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  background: var(--color-primary-white);\n  box-shadow: 0px 4px 12px var(--color-border-light-gray);\n  border-radius: 0.75rem;\n  padding: 1.625rem 3.375rem 4rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    position: relative;\n    top: -1.875rem;\n    padding: 0 1rem 0 1rem !important;\n    box-shadow: unset;\n    border-radius: 1.9375rem 1.9375rem 0 0;\n  }\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .selection-info[_ngcontent-%COMP%] {\n  color: var(--color-main-dark-purple);\n  margin-bottom: 0.625rem;\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .selection-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ee7878;\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    width: 100vw;\n    overflow-x: auto;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    position: relative;\n    top: -1.875rem;\n    margin-left: -1rem;\n    margin-right: -1rem;\n  }\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services__item[_ngcontent-%COMP%]:not(:last-child) {\n    margin-right: 1.25rem;\n  }\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%] {\n  min-width: 11.25rem;\n  padding: 0.875rem 0.625rem;\n  line-height: 1.5rem;\n  color: var(--color-main-dark-purple);\n  background: var(--color-primary-white);\n  border: 1px solid var(--upgrade-right-border);\n  border-radius: 4px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%]   .tz-icon[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%]   .tz-icon[_ngcontent-%COMP%]::before {\n  font-size: 1.5rem;\n  color: var(--color-main-dark-purple-opacity-2);\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%]   .service-label[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n  font-size: 1rem;\n  font-weight: var(--font-weight-semibold);\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%]   .add-remove[_ngcontent-%COMP%] {\n  background: var(--color-main-dark-purple-opacity-1);\n  border-radius: 0.25rem;\n  margin-left: auto;\n  width: 1.5rem;\n  min-width: 1.5rem;\n  height: 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1;\n}\n@media not all and (hover: none) {\n  [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%]:hover {\n    background: var(--color-light-footer-grey);\n  }\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service.selected-service[_ngcontent-%COMP%] {\n  background: var(--color-main-purple);\n  border: 1px solid var(--color-main-purple);\n  color: var(--color-primary-white);\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service.selected-service[_ngcontent-%COMP%]   .tz-icon[_ngcontent-%COMP%]::before {\n  color: var(--color-primary-white);\n}\n[_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service.selected-service[_ngcontent-%COMP%]   .add-remove[_ngcontent-%COMP%] {\n  background: var(--color-main-dark-blue-opacity-2);\n}\n@media not all and (hover: none) {\n  [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service.selected-service[_ngcontent-%COMP%]:hover {\n    background: #6655BD;\n  }\n}\n[_nghost-%COMP%]   .tz-info-container[_ngcontent-%COMP%] {\n  margin: 3.125rem auto 0;\n  padding: 0 5.688rem;\n  width: -moz-fit-content;\n  width: fit-content;\n  color: var(--color-main-dark-purple);\n  text-align: center;\n}\n[_nghost-%COMP%]   .tz-info-container[_ngcontent-%COMP%]   .covid-txt[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-normal);\n  background: var(--color-main-background);\n  border-radius: 0.5rem;\n  padding: 0.625rem 4.125rem;\n  margin: 1.563rem auto;\n  width: -moz-fit-content;\n  width: fit-content;\n}\n[_nghost-%COMP%]   .tz-info-container[_ngcontent-%COMP%]   .covid-txt[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  text-transform: capitalize;\n  font-weight: var(--font-weight-semibold);\n}\n[_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%] {\n  margin: 3.125rem auto;\n  color: var(--color-main-dark-purple);\n  justify-content: center;\n  gap: 1.625rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%] {\n  padding: 3.75rem 1.875rem 1.875rem 2.5rem;\n  background-color: var(--color-main-background);\n  border: 0.5px solid var(--upgrade-right-border);\n  border-radius: 0.25rem;\n  max-width: 31.25rem;\n  width: 100%;\n}\n[_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]   .head-4[_ngcontent-%COMP%] {\n  margin-bottom: 0.625rem;\n}\n[_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%] {\n  height: 8rem;\n}\n[_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 10rem;\n  height: -moz-fit-content;\n  height: fit-content;\n  align-self: flex-end;\n  flex-shrink: 0;\n}\n[_nghost-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%] {\n  height: 32.25rem;\n  background: url(/assets/icons/web/img/TzHomeBg/tzBackground_0.jpg) no-repeat center;\n  background-size: cover;\n  z-index: -1;\n  position: relative;\n  \n}\n[_nghost-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .tz-sub-container[_ngcontent-%COMP%] {\n  height: 100%;\n  position: relative;\n}\n[_nghost-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .lets-start-txt[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 5.125rem;\n  transform: translateY(-50%);\n  color: var(--color-main-purple);\n}\n[_nghost-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .lets-start-txt[_ngcontent-%COMP%]   .head-1[_ngcontent-%COMP%] {\n  font-size: 3.375rem;\n  line-height: 4.625rem;\n  margin-top: 0.25rem;\n}\n[_nghost-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .lets-start-txt[_ngcontent-%COMP%]   .head-2[_ngcontent-%COMP%] {\n  opacity: 0.4;\n  line-height: 4.063rem;\n}\n[_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%] {\n  margin: 3.125rem auto 10.625rem;\n  padding: 0 11.75rem;\n  text-align: center;\n  color: var(--color-main-dark-purple);\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%] {\n    padding: 0 1rem !important;\n    margin: 2.5rem 0 3.1875rem 0 !important;\n  }\n}\n[_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n  margin-top: 3.125rem;\n  justify-content: center;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%] {\n    margin-top: 1rem;\n    flex-direction: column;\n  }\n}\n[_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 26.25rem;\n  height: 3rem;\n  padding: 0 24px;\n  background: var(--color-light-footer-grey);\n  border-radius: 0.25rem;\n  color: #9788a4;\n}\n[_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  background: var(--white);\n}\n[_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  margin-left: 0.813rem;\n  border-radius: 0.25rem;\n  padding: 0 1.25rem;\n  background: var(--color-main-orange);\n  color: var(--color-primary-white);\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%]   .input-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n    margin-left: 0;\n    margin-top: 1.5rem;\n    height: 2.5rem;\n  }\n}\n[_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%]   .input-container.ng-invalid[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  pointer-events: none;\n  opacity: 0.6;\n}\n__mob-info-text[_nghost-%COMP%] {\n  margin-top: 0.8125rem;\n  font-weight: 500;\n  font-size: 1rem;\n  line-height: 1.1875rem;\n  color: var(--ion-color-primary-contrast);\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6);\n  text-align: center;\n}\n@media (max-width: 920px) {\n  .head-3[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 1rem;\n    line-height: 1.3125rem;\n    letter-spacing: 0.0025em;\n  }\n}\n[_nghost-%COMP%]     .home-container__mob-info-text .color-error {\n  color: var(--ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUtc3RhdGljLWNvbnRlbnQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUFESjtBQ2tESTtFRGxESjtJQUlRLFlBQUE7RUFBTjtBQUNGO0FBRUk7RUFDSSxpQkFBQTtFQUNBLG1GQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQVI7QUN1Q0k7RUQzQ0E7SUFPUSw2RUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7RUFDVjtBQUNGO0FBR1E7RUFDSSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFEWjtBQUlRO0VBQ0ksc0NBQUE7RUFDQSx1REFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUFGWjtBQ2tCSTtFRHBCSTtJQU9RLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGlDQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQ0FBQTtFQURkO0FBQ0Y7QUFHWTtFQUNJLG9DQUFBO0VBQ0EsdUJBQUE7QUFEaEI7QUFFZ0I7RUFDSSxjQUFBO0FBQXBCO0FBSVk7RUFDSSxhQUFBO0VBQ0EsYUFBQTtBQUZoQjtBQ0ZJO0VERVE7SUFLUSw4QkFBQTtJQUNBLFlBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0lBQ0EsbUJBQUE7SUFFQSxrQkFBQTtJQUNBLGNBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0VBRmxCO0FBQ0Y7QUNmSTtFRHFCb0I7SUFDSSxxQkFBQTtFQUgxQjtBQUNGO0FBT2dCO0VBQ0ksbUJBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxzQ0FBQTtFQUNBLDZDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFMcEI7QUFPb0I7RUFDSSxzQkFBQTtBQUx4QjtBQU13QjtFQUNJLGlCQUFBO0VBQ0EsOENBQUE7QUFKNUI7QUFRb0I7RUFDSSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx3Q0FBQTtBQU54QjtBQVNvQjtFQUNJLG1EQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFQeEI7QUNuQ0k7RUFDSTtJRDZDZ0IsMENBQUE7RUFQdEI7QUFDRjtBQVNvQjtFQUNJLG9DQUFBO0VBQ0EsMENBQUE7RUFDQSxpQ0FBQTtBQVB4QjtBQVN3QjtFQUNJLGlDQUFBO0FBUDVCO0FBVXdCO0VBQ0ksaURBQUE7QUFSNUI7QUNuREk7RUFDSTtJRDhEb0IsbUJBQUE7RUFSMUI7QUFDRjtBQWVJO0VBQ0ksdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxvQ0FBQTtFQUNBLGtCQUFBO0FBYlI7QUFlUTtFQUNJLHNDQUFBO0VBQ0Esd0NBQUE7RUFDQSxxQkFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0FBYlo7QUFjWTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx3Q0FBQTtBQVpoQjtBQWlCSTtFQUNJLHFCQUFBO0VBQ0Esb0NBQUE7RUFDQSx1QkFBQTtFQUVBLGFBQUE7QUFoQlI7QUNwR0k7RUQrR0E7SUFRUSxzQkFBQTtFQWZWO0FBQ0Y7QUFpQlE7RUFDSSx5Q0FBQTtFQUNBLDhDQUFBO0VBQ0EsK0NBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtBQWZaO0FBaUJZO0VBQ0ksdUJBQUE7QUFmaEI7QUFrQlk7RUFDSSxZQUFBO0FBaEJoQjtBQW1CWTtFQUNJLFlBQUE7RUFDQSx3QkFBQTtFQUFBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0FBakJoQjtBQXNCSTtFQUNJLGdCQUFBO0VBQ0EsbUZBQUE7RUFDQSxzQkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUVBOzs7Ozs7O01BQUE7QUFkUjtBQXVCUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQXJCWjtBQXdCUTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSwyQkFBQTtFQUNBLCtCQUFBO0FBdEJaO0FBd0JZO0VBQ0ksbUJBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0FBdEJoQjtBQXlCWTtFQUNJLFlBQUE7RUFDQSxxQkFBQTtBQXZCaEI7QUE0Qkk7RUFDSSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQTFCUjtBQ3RLSTtFRDRMQTtJQU9RLDBCQUFBO0lBQ0EsdUNBQUE7RUF6QlY7QUFDRjtBQTJCUTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7QUF6Qlo7QUNoTEk7RUR1TUk7SUFLUSxnQkFBQTtJQUNBLHNCQUFBO0VBeEJkO0FBQ0Y7QUEwQlk7RUFDSSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLDBDQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBeEJoQjtBQTBCZ0I7RUFDSSx3QkFBQTtBQXhCcEI7QUE0Qlk7RUFDSSxtQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7QUExQmhCO0FDMU1JO0VEOE5RO0lBU1EsY0FBQTtJQUNBLGtCQUFBO0lBQ0EsY0FBQTtFQXpCbEI7QUFDRjtBQTRCWTtFQUNJLG9CQUFBO0VBQ0EsWUFBQTtBQTFCaEI7QUErQkk7RUFDSSxxQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esd0NBQUE7RUFDQSwyQ0FBQTtFQUNBLGtCQUFBO0FBN0JSO0FDOU5JO0VEK1BKO0lBRVEsZ0JBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSx3QkFBQTtFQTlCTjtBQUNGO0FBaUNBO0VBQ0ksd0NBQUE7QUE5QkoiLCJmaWxlIjoiaG9tZS1zdGF0aWMtY29udGVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgdG9wOiAtMi41cmVtO1xuICAgIH1cblxuICAgIC5ob21lLWJnLWltZyB7XG4gICAgICAgIGhlaWdodDogMjAuNjI1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaW1nL1R6SG9tZUJnL3R6QmFja2dyb3VuZF8yLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgei1pbmRleDogLTE7XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb25zL3dlYi9pbWFnZXMvbW9iaWxlLWhvbWUtaGVhZGVyLWJnLmpwZykgbm8tcmVwZWF0O1xuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEwLjYyNXJlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlYXJjaC1jb250YWluZXIge1xuICAgICAgICAud2VsY29tZS10eHQge1xuICAgICAgICAgICAgcGFkZGluZzogNC40MzhyZW0gMCAxLjg3NXJlbTtcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5mb3JtLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDBweCA0cHggMTJweCB2YXIoLS1jb2xvci1ib3JkZXItbGlnaHQtZ3JheSk7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjc1cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMS42MjVyZW0gMy4zNzVyZW0gNHJlbTtcblxuICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdG9wOiAtMS44NzVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxcmVtIDAgMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IHVuc2V0O1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDEuOTM3NXJlbSAxLjkzNzVyZW0gMCAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0aW9uLWluZm8ge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWRhcmstcHVycGxlKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICNlZTc4Nzg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHotc2VydmljZXMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgZ2FwOiAwLjYyNXJlbTtcblxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMHZ3O1xuICAgICAgICAgICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIC8vcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgICAgICB0b3A6IC0xLjg3NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0xcmVtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAudHotc2VydmljZSB7XG4gICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogMTEuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAuODc1cmVtIDAuNjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1kYXJrLXB1cnBsZSk7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11cGdyYWRlLXJpZ2h0LWJvcmRlcik7XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAgICAgICAgICAgICAgIC50ei1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWRhcmstcHVycGxlLW9wYWNpdHktMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAuc2VydmljZS1sYWJlbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5hZGQtcmVtb3ZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1haW4tZGFyay1wdXJwbGUtb3BhY2l0eS0xKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBvbi1ob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1saWdodC1mb290ZXItZ3JleSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmLnNlbGVjdGVkLXNlcnZpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAudHotaWNvbjo6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIC5hZGQtcmVtb3ZlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluLWRhcmstYmx1ZS1vcGFjaXR5LTIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBvbi1ob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogIzY2NTVCRDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ei1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMy4xMjVyZW0gYXV0byAwO1xuICAgICAgICBwYWRkaW5nOiAwIDUuNjg4cmVtO1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWRhcmstcHVycGxlKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIC5jb3ZpZC10eHQge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluLWJhY2tncm91bmQpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMC42MjVyZW0gNC4xMjVyZW07XG4gICAgICAgICAgICBtYXJnaW46IDEuNTYzcmVtIGF1dG87XG4gICAgICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1zZW1pYm9sZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHotaGVscC1vcHRpb25zIHtcbiAgICAgICAgbWFyZ2luOiAzLjEyNXJlbSBhdXRvO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1kYXJrLXB1cnBsZSk7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAvLyBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGdhcDogMS42MjVyZW07XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIH1cblxuICAgICAgICAuaGVscC1vcHRpb24ge1xuICAgICAgICAgICAgcGFkZGluZzogMy43NXJlbSAxLjg3NXJlbSAxLjg3NXJlbSAyLjVyZW07XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWJhY2tncm91bmQpO1xuICAgICAgICAgICAgYm9yZGVyOiAwLjVweCBzb2xpZCB2YXIoLS11cGdyYWRlLXJpZ2h0LWJvcmRlcik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAzMS4yNXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgICAgICAgICAuaGVhZC00IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlbHAtY29udGVudCB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA4cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0ei1pY29uIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTByZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBmaXQtY29udGVudDtcbiAgICAgICAgICAgICAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50ei1zdWItYmcge1xuICAgICAgICBoZWlnaHQ6IDMyLjI1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaW1nL1R6SG9tZUJnL3R6QmFja2dyb3VuZF8wLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAvKiY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIHotaW5kZXg6IDA7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgI2ZmZmZmZiAtMC45MiUsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNzUuNiUpO1xuICAgICAgICAgIH0qL1xuXG4gICAgICAgIC50ei1zdWItY29udGFpbmVyIHtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5sZXRzLXN0YXJ0LXR4dCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUuMTI1cmVtO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcblxuICAgICAgICAgICAgLmhlYWQtMSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAzLjM3NXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogNC42MjVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmhlYWQtMiB7XG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC40O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0LjA2M3JlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zdWJzY3JpcHRpb24tY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luOiAzLjEyNXJlbSBhdXRvIDEwLjYyNXJlbTtcbiAgICAgICAgcGFkZGluZzogMCAxMS43NXJlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1kYXJrLXB1cnBsZSk7XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMXJlbSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgbWFyZ2luOiAyLjVyZW0gMCAzLjE4NzVyZW0gMCAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAzLjEyNXJlbTtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjYuMjVyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1saWdodC1mb290ZXItZ3JleSk7XG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogIzk3ODhhNDtcblxuICAgICAgICAgICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuODEzcmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCAxLjI1cmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1haW4tb3JhbmdlKTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG5cbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubmctaW52YWxpZCBidXR0b24ge1xuICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX21vYi1pbmZvLXRleHQge1xuICAgICAgICBtYXJnaW4tdG9wOiAwLjgxMjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTg3NXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbn1cblxuLmhlYWQtMyB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4zMTI1cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDI1ZW07XG4gICAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAgLmhvbWUtY29udGFpbmVyX19tb2ItaW5mby10ZXh0IC5jb2xvci1lcnJvciB7XG4gICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbn1cbiIsIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiJdfQ== */", "@media (max-width: 1220px) {\n  [_nghost-%COMP%]   .home-bg-img[_ngcontent-%COMP%] {\n    height: 12.5rem;\n  }\n  [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .welcome-txt[_ngcontent-%COMP%] {\n    padding: 1.75rem 0 1.813rem;\n    font-size: 2rem;\n    line-height: 2.688rem;\n  }\n  [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 1.875rem;\n  }\n  [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%] {\n    min-width: 8.625rem;\n  }\n  [_nghost-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%]   .service-label[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  [_nghost-%COMP%]   .tz-info-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  [_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%] {\n    gap: 1.25rem;\n  }\n  [_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]   .body-2[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    line-height: 1.125rem;\n  }\n  [_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%] {\n    height: 5.938rem;\n  }\n  [_nghost-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n    width: 7.375rem;\n  }\n  [_nghost-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .lets-start-txt[_ngcontent-%COMP%] {\n    left: 0;\n  }\n  [_nghost-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .lets-start-txt[_ngcontent-%COMP%]   .head-1[_ngcontent-%COMP%], [_nghost-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .lets-start-txt[_ngcontent-%COMP%]   .head-2[_ngcontent-%COMP%] {\n    font-weight: var(--font-weight-bold);\n    font-size: 3rem;\n    line-height: 4.063rem;\n  }\n  [_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%] {\n    margin-bottom: 10rem;\n    padding: 0 9rem;\n  }\n  [_nghost-%COMP%]   .subscription-container[_ngcontent-%COMP%]   .head-3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIiwiaG9tZS1zdGF0aWMtY29udGVudC5jb21wb25lbnQudGFibGV0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NFO0VDcENNO0lBQ0ksZUFBQTtFQUZWO0VBTVU7SUFDSSwyQkFBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtFQUpkO0VBT1U7SUFDSSxpQkFBQTtFQUxkO0VBUWtCO0lBQ0ksbUJBQUE7RUFOdEI7RUFRc0I7SUFDSSxtQkFBQTtFQU4xQjtFQWFNO0lBQ0ksVUFBQTtFQVhWO0VBY007SUFDSSxZQUFBO0VBWlY7RUFlYztJQUNJLGtCQUFBO0lBQ0EscUJBQUE7RUFibEI7RUFnQmM7SUFDSSxnQkFBQTtFQWRsQjtFQWlCYztJQUNJLGVBQUE7RUFmbEI7RUFxQlU7SUFDSSxPQUFBO0VBbkJkO0VBcUJjOztJQUVJLG9DQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0VBbkJsQjtFQXdCTTtJQUNJLG9CQUFBO0lBQ0EsZUFBQTtFQXRCVjtFQXdCVTtJQUNJLGlCQUFBO0lBQ0EsaUJBQUE7RUF0QmQ7QUFDRiIsImZpbGUiOiJob21lLXN0YXRpYy1jb250ZW50LmNvbXBvbmVudC50YWJsZXQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgJ3V0aWxzL21peGlucyc7XG5cbjpob3N0IHtcbiAgICBAaW5jbHVkZSB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oMTIyMHB4KSB7XG4gICAgICAgIC5ob21lLWJnLWltZyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAud2VsY29tZS10eHQge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNzVyZW0gMCAxLjgxM3JlbTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIuNjg4cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuZm9ybS1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuODc1cmVtO1xuXG4gICAgICAgICAgICAgICAgLnR6LXNlcnZpY2VzIHtcbiAgICAgICAgICAgICAgICAgICAgLnR6LXNlcnZpY2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiA4LjYyNXJlbTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLnNlcnZpY2UtbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudHotaW5mby1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50ei1oZWxwLW9wdGlvbnMge1xuICAgICAgICAgICAgZ2FwOiAxLjI1cmVtO1xuXG4gICAgICAgICAgICAuaGVscC1vcHRpb24ge1xuICAgICAgICAgICAgICAgIC5ib2R5LTIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuaGVscC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LjkzOHJlbTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB0ei1pY29uIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcuMzc1cmVtO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50ei1zdWItYmcge1xuICAgICAgICAgICAgLmxldHMtc3RhcnQtdHh0IHtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgICAgICAgICAgLmhlYWQtMSxcbiAgICAgICAgICAgICAgICAuaGVhZC0yIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDNyZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0LjA2M3JlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc3Vic2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgOXJlbTtcblxuICAgICAgICAgICAgLmhlYWQtMyB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDJyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 34601:
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchRoutingModule": () => (/* binding */ SearchRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component */ 45493);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _home_component__WEBPACK_IMPORTED_MODULE_0__.PlanMyTripComponent,
    },
];
class SearchRoutingModule {
}
SearchRoutingModule.ɵfac = function SearchRoutingModule_Factory(t) { return new (t || SearchRoutingModule)(); };
SearchRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: SearchRoutingModule });
SearchRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](SearchRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 45493:
/*!************************************************!*\
  !*** ./src/app/modules/home/home.component.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlanMyTripComponent": () => (/* binding */ PlanMyTripComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/general-settings */ 12308);
/* harmony import */ var _core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/validation-patterns.const */ 1903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modules/core/listeners-service */ 96831);
/* harmony import */ var _services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/searchEngine/services/api-access.service */ 32189);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _services_landing_page_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/landing-page.service */ 11264);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @shared/components/tz-svg-icon/tz-svg-icon.component */ 28189);
/* harmony import */ var _shared_components_mobile_mob_tab_mob_service_tab_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/mobile/mob-tab/mob-service-tab.component */ 98612);
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../search/search.component */ 49364);
/* harmony import */ var _components_home_mob_static_content_home_mob_static_content_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/home-mob-static-content/home-mob-static-content.component */ 66241);
/* harmony import */ var _components_home_static_content_home_static_content_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/home-static-content/home-static-content.component */ 20831);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 87514);





















const _c0 = function () {
  return {
    class1: "ion-text-uppercase",
    class3: "ion-text-uppercase"
  };
};

function PlanMyTripComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](1, 1, "HOME.SELECT_ONE_OR_MULTIPLE", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c0)), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
  }
}

function PlanMyTripComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](2, 1, "HOME.WELCOME_TRIP_PLANNER"), " ");
  }
}

const _c1 = function () {
  return {
    class1: "color-success",
    class2: "color-success",
    class3: "color-success"
  };
};

function PlanMyTripComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](1, "translate");
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind2"](1, 1, "HOME.SELECT_ONE_OR_MULTIPLE", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](4, _c1)), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵsanitizeHtml"]);
  }
}

const _c2 = function () {
  return {
    "width.px": 10,
    "height.px": 2
  };
};

function PlanMyTripComponent_ng_template_11_div_0_tz_svg_icon_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tz-svg-icon", 21);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](1, _c2));
  }
}

const _c3 = function () {
  return {
    "width.px": 10,
    "height.px": 10
  };
};

function PlanMyTripComponent_ng_template_11_div_0_tz_svg_icon_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tz-svg-icon", 22);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction0"](1, _c3));
  }
}

const _c4 = function (a0) {
  return {
    "selected-service": a0
  };
};

function PlanMyTripComponent_ng_template_11_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function PlanMyTripComponent_ng_template_11_div_0_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r12);
      const service_r8 = restoredCtx.$implicit;
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r11.selectTzService(service_r8.serviceKey);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](5, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, PlanMyTripComponent_ng_template_11_div_0_tz_svg_icon_9_Template, 1, 2, "tz-svg-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, PlanMyTripComponent_ng_template_11_div_0_tz_svg_icon_10_Template, 1, 2, "tz-svg-icon", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const service_r8 = ctx.$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction1"](14, _c4, ctx_r7.selectedServices[service_r8.serviceKey]));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("data-test", "searching-page-" + service_r8.serviceKey);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵclassMapInterpolate1"]("tz-icon tz-icon-", service_r8.cssKey, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](4, 10, service_r8.label));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](7, 12, service_r8.tabletLabel));
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx_r7.selectedServices[service_r8.serviceKey]);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx_r7.selectedServices[service_r8.serviceKey]);
  }
}

function PlanMyTripComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, PlanMyTripComponent_ng_template_11_div_0_Template, 11, 16, "div", 14);
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r3.availableServices);
  }
}

function PlanMyTripComponent_ng_template_13_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 24)(1, "tz-mob-service-tab", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("toggleServiceTab", function PlanMyTripComponent_ng_template_13_div_0_Template_tz_mob_service_tab_toggleServiceTab_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r16);
      const service_r14 = restoredCtx.$implicit;
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
      return ctx_r15.selectTzService(service_r14.serviceKey);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const service_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("generalServiceTab", service_r14)("selected", ctx_r13.selectedServices[service_r14.serviceKey]);
  }
}

function PlanMyTripComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](0, PlanMyTripComponent_ng_template_13_div_0_Template, 2, 2, "div", 23);
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngForOf", ctx_r4.availableServices);
  }
}

function PlanMyTripComponent_tz_home_mob_static_content_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tz-home-mob-static-content");
  }
}

function PlanMyTripComponent_tz_home_static_content_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tz-home-static-content");
  }
}

class PlanMyTripComponent {
  constructor(searchDataService, listenersService, trazlerAPI, dialogService, platformService, landingPageService) {
    this.searchDataService = searchDataService;
    this.listenersService = listenersService;
    this.trazlerAPI = trazlerAPI;
    this.dialogService = dialogService;
    this.platformService = platformService;
    this.landingPageService = landingPageService;
    this.editing = true;
    this.availableServices = _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_1__.GeneralSettings.availableServices;
    this.selectedServices = _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_1__.GeneralSettings.defaultSelectedServices;
    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({
      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_2__.ValidatorPatterns.EMAIL)])
    });
    this.serviceListenerId = -1;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
  }

  ngOnInit() {
    this.initializeHomePage();
    this.landingPageService.landingPageClosed$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(selectedServices => {
      this.setServices(selectedServices);
    });
  }

  ngOnDestroy() {
    this.listenersService.unregisterListener(this.serviceListenerId);
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  selectTzService(serviceKey) {
    const s = this.selectedServices;
    const selectedServices = Object.keys(s).filter(serviceIdx => serviceIdx !== 'activity' && s[serviceIdx]);
    const isLastService = selectedServices.length === 1 && selectedServices[0] === serviceKey;

    if (isLastService || serviceKey === 'activity') {
      return;
    }

    this.selectedServices[serviceKey] = !this.selectedServices[serviceKey]; // For rental and transfers we reset other service if either one is selected

    if (this.selectedServices[serviceKey] && (serviceKey === 'rentCar' || serviceKey === 'transfer')) {
      this.selectedServices['transfer'] = serviceKey === 'transfer';
      this.selectedServices['rentCar'] = serviceKey === 'rentCar';
    }

    this.searchDataService.updateTzServiceSelection(this.selectedServices);
  }

  initializeTzServices() {
    this.selectedServices = Object.assign({}, _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_1__.GeneralSettings.defaultSelectedServices);
    this.searchDataService.updateTzServiceSelection(this.selectedServices);
  }

  initializeHomePage() {
    this.initializeTzServices();
    this.serviceListenerId = this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_0__.ListenerId.LISTEN_SERVICE_REINIT, this.initializeTzServices, this);
    this.searchDataService.clear();
    this.searchDataService.cleanUpSearch(); // tzPassengerService.ResetPax();
    //this.listenersService.NotifyListeners(ListenerId.LISTEN_SERVICE_REINIT);

    this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_0__.ListenerId.LISTEN_EDIT_RENT_CAR, {
      resetMap: true
    }); //this.settingsService.clearDeviceId();
    //this.appConfigService.initDeviceId();

    this.searchDataService.resetSearch$.next();
  }

  setServices(selectedServices) {
    this.selectedServices = selectedServices;
    this.searchDataService.updateTzServiceSelection(this.selectedServices);
  }

}

PlanMyTripComponent.ɵfac = function PlanMyTripComponent_Factory(t) {
  return new (t || PlanMyTripComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_3__.SearchDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_4__.ListenersService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_5__.ApiAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_7__.PlatformService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_landing_page_service__WEBPACK_IMPORTED_MODULE_8__.LandingPageService));
};

PlanMyTripComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: PlanMyTripComponent,
  selectors: [["tz-plan-my-trip"]],
  decls: 18,
  vars: 20,
  consts: [[1, "home-container", "relative"], [1, "home-bg-img", "absolute", "full-width"], ["class", "home-container__mob-info-text", 3, "innerHTML", 4, "ngIf"], [1, "search-container", "tz-container"], ["class", "welcome-txt head-2", 4, "ngIf"], [1, "form-container"], ["class", "selection-info subtitle-2", 3, "innerHTML", 4, "ngIf"], [1, "tz-services"], [3, "ngIf"], [3, "selectedServices", "editMode", "editing"], [4, "ngIf"], [1, "home-container__mob-info-text", 3, "innerHTML"], [1, "welcome-txt", "head-2"], [1, "selection-info", "subtitle-2", 3, "innerHTML"], ["class", "tz-service body-1 flex align-center", 3, "class", "click", 4, "ngFor", "ngForOf"], [1, "tz-service", "body-1", "flex", "align-center", 3, "click"], [1, "service-label", "small-screen-hidden"], [1, "service-label", "small-screen-only"], [1, "add-remove", "inline-flex", "align-center", "justify-center"], ["icon", "service-btn-minus", 3, "styles", 4, "ngIf"], ["icon", "service-btn-plus", 3, "styles", 4, "ngIf"], ["icon", "service-btn-minus", 3, "styles"], ["icon", "service-btn-plus", 3, "styles"], ["class", "tz-services__item", 4, "ngFor", "ngForOf"], [1, "tz-services__item"], [3, "generalServiceTab", "selected", "toggleServiceTab"]],
  template: function PlanMyTripComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, PlanMyTripComponent_div_2_Template, 2, 5, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](5, PlanMyTripComponent_div_5_Template, 3, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](6, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](8, PlanMyTripComponent_div_8_Template, 2, 5, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](10, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](11, PlanMyTripComponent_ng_template_11_Template, 1, 1, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](12, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](13, PlanMyTripComponent_ng_template_13_Template, 1, 1, "ng-template", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](14, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](15, "tz-search", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](16, PlanMyTripComponent_tz_home_mob_static_content_16_Template, 1, 0, "tz-home-mob-static-content", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](17, PlanMyTripComponent_tz_home_static_content_17_Template, 1, 0, "tz-home-static-content", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](3, 10, ctx.platformService.isMobileDevice$));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](6, 12, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](9, 14, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](12, 16, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](14, 18, ctx.platformService.isMobileDevice$));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("selectedServices", ctx.selectedServices)("editMode", false)("editing", ctx.editing);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_18__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_18__.NgForOf, _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_9__.TzSvgIconComponent, _shared_components_mobile_mob_tab_mob_service_tab_component__WEBPACK_IMPORTED_MODULE_10__.MobServiceTabComponent, _search_search_component__WEBPACK_IMPORTED_MODULE_11__.SearchComponent, _components_home_mob_static_content_home_mob_static_content_component__WEBPACK_IMPORTED_MODULE_12__.HomeMobStaticContentComponent, _components_home_static_content_home_static_content_component__WEBPACK_IMPORTED_MODULE_13__.HomeStaticContentComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_18__.AsyncPipe],
  styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%] {\n    top: -2.5rem;\n  }\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-bg-img[_ngcontent-%COMP%] {\n  height: 20.625rem;\n  background: url(/assets/icons/web/img/TzHomeBg/tzBackground_2.jpg) no-repeat center;\n  background-size: cover;\n  z-index: -1;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-bg-img[_ngcontent-%COMP%] {\n    background: url(/assets/icons/web/images/mobile-home-header-bg.jpg) no-repeat;\n    background-size: cover;\n    padding-top: 2.5rem;\n    height: 10.625rem;\n    position: relative;\n    pointer-events: none;\n  }\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .welcome-txt[_ngcontent-%COMP%] {\n  padding: 4.438rem 0 1.875rem;\n  text-align: center;\n  color: var(--color-primary-white);\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  background: var(--color-primary-white);\n  box-shadow: 0px 4px 12px var(--color-border-light-gray);\n  border-radius: 0.75rem;\n  padding: 1.625rem 3.375rem 4rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    position: relative;\n    top: -1.875rem;\n    padding: 0 1rem 0 1rem !important;\n    box-shadow: unset;\n    border-radius: 1.9375rem 1.9375rem 0 0;\n  }\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .selection-info[_ngcontent-%COMP%] {\n  color: var(--color-main-dark-purple);\n  margin-bottom: 0.625rem;\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .selection-info[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #ee7878;\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   [_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 0px;\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.625rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%] {\n    justify-content: space-between;\n    width: 100vw;\n    overflow-x: auto;\n    padding-left: 1rem;\n    padding-right: 1rem;\n    position: relative;\n    top: -1.875rem;\n    margin-left: -1rem;\n    margin-right: -1rem;\n  }\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%] {\n  min-width: 11.25rem;\n  padding: 0.875rem 0.625rem;\n  line-height: 1.5rem;\n  color: var(--color-main-dark-purple);\n  background: var(--color-primary-white);\n  border: 1px solid var(--upgrade-right-border);\n  border-radius: 4px;\n  cursor: pointer;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%]   .tz-icon[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%]   .tz-icon[_ngcontent-%COMP%]::before {\n  font-size: 1.5rem;\n  color: var(--color-main-dark-purple-opacity-2);\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%]   .service-label[_ngcontent-%COMP%] {\n  margin-right: 0.625rem;\n  font-size: 1rem;\n  font-weight: var(--font-weight-semibold);\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%]   .add-remove[_ngcontent-%COMP%] {\n  background: var(--color-main-dark-purple-opacity-1);\n  border-radius: 0.25rem;\n  margin-left: auto;\n  width: 1.5rem;\n  min-width: 1.5rem;\n  height: 1.5rem;\n  font-size: 1.25rem;\n  line-height: 1;\n}\n@media not all and (hover: none) {\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%]:hover {\n    background: var(--color-light-footer-grey);\n  }\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service.selected-service[_ngcontent-%COMP%] {\n  background: var(--color-main-purple);\n  border: 1px solid var(--color-main-purple);\n  color: var(--color-primary-white);\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service.selected-service[_ngcontent-%COMP%]   .tz-icon[_ngcontent-%COMP%]::before {\n  color: var(--color-primary-white);\n}\n[_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service.selected-service[_ngcontent-%COMP%]   .add-remove[_ngcontent-%COMP%] {\n  background: var(--color-main-dark-blue-opacity-2);\n}\n@media not all and (hover: none) {\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service.selected-service[_ngcontent-%COMP%]:hover {\n    background: #6655bd;\n  }\n}\n[_nghost-%COMP%]   .home-container__mob-info-text[_ngcontent-%COMP%] {\n  padding: 0.871875rem 1rem 0;\n  font-weight: 500;\n  font-size: 1rem;\n  line-height: 1.1875rem;\n  color: var(--ion-color-primary-contrast);\n  text-shadow: 0px 1px 1px rgba(0, 0, 0, 0.6);\n  text-align: left;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .head-3[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 1rem;\n    line-height: 1.3125rem;\n    letter-spacing: 0.0025em;\n  }\n}\n[_nghost-%COMP%]     .home-container__mob-info-text .color-error {\n  color: var(--ion-color-primary-contrast);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7QUFERjtBQ2tESTtFRGhERjtJQUVJLFlBQUE7RUFBSjtBQUNGO0FBRUk7RUFDRSxpQkFBQTtFQUNBLG1GQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBQU47QUN1Q0k7RUQzQ0E7SUFPSSw2RUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLGtCQUFBO0lBQ0Esb0JBQUE7RUFDTjtBQUNGO0FBR007RUFDRSw0QkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUNBQUE7QUFEUjtBQUlNO0VBQ0Usc0NBQUE7RUFDQSx1REFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUFGUjtBQ2tCSTtFRHBCRTtJQU9JLGtCQUFBO0lBQ0EsY0FBQTtJQUNBLGlDQUFBO0lBQ0EsaUJBQUE7SUFDQSxzQ0FBQTtFQURSO0FBQ0Y7QUFHUTtFQUNFLG9DQUFBO0VBQ0EsdUJBQUE7QUFEVjtBQUVVO0VBQ0UsY0FBQTtBQUFaO0FBSVE7RUFDRSxVQUFBO0FBRlY7QUFLUTtFQUNFLGFBQUE7RUFDQSxhQUFBO0FBSFY7QUNMSTtFRE1JO0lBS0ksOEJBQUE7SUFDQSxZQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtJQUNBLG1CQUFBO0lBRUEsa0JBQUE7SUFDQSxjQUFBO0lBQ0Esa0JBQUE7SUFDQSxtQkFBQTtFQUhWO0FBQ0Y7QUFLVTtFQUNFLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxtQkFBQTtFQUNBLG9DQUFBO0VBQ0Esc0NBQUE7RUFDQSw2Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSFo7QUFLWTtFQUNFLHNCQUFBO0FBSGQ7QUFJYztFQUNFLGlCQUFBO0VBQ0EsOENBQUE7QUFGaEI7QUFNWTtFQUNFLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHdDQUFBO0FBSmQ7QUFPWTtFQUNFLG1EQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFMZDtBQ2pDSTtFQUNJO0lEeUNNLDBDQUFBO0VBTFo7QUFDRjtBQU9ZO0VBQ0Usb0NBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0FBTGQ7QUFPYztFQUNFLGlDQUFBO0FBTGhCO0FBUWM7RUFDRSxpREFBQTtBQU5oQjtBQ2pESTtFQUNJO0lEMERRLG1CQUFBO0VBTmQ7QUFDRjtBQWFJO0VBQ0ksMkJBQUE7RUFDRixnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLHdDQUFBO0VBQ0EsMkNBQUE7RUFDQSxnQkFBQTtBQVhOO0FDakZJO0VEZ0dGO0lBRUksZ0JBQUE7SUFDQSxlQUFBO0lBQ0Esc0JBQUE7SUFDQSx3QkFBQTtFQWJKO0FBQ0Y7QUFpQkE7RUFDRSx3Q0FBQTtBQWRGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidXRpbHMvbWl4aW5zXCI7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIC5ob21lLWNvbnRhaW5lciB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIHRvcDogLTIuNXJlbTtcbiAgICB9XG5cbiAgICAuaG9tZS1iZy1pbWcge1xuICAgICAgaGVpZ2h0OiAyMC42MjVyZW07XG4gICAgICBiYWNrZ3JvdW5kOiB1cmwoL2Fzc2V0cy9pY29ucy93ZWIvaW1nL1R6SG9tZUJnL3R6QmFja2dyb3VuZF8yLmpwZykgbm8tcmVwZWF0IGNlbnRlcjtcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICB6LWluZGV4OiAtMTtcblxuICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9hc3NldHMvaWNvbnMvd2ViL2ltYWdlcy9tb2JpbGUtaG9tZS1oZWFkZXItYmcuanBnKSBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyLjVyZW07XG4gICAgICAgIGhlaWdodDogMTAuNjI1cmVtO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgIH1cblxuICAgIC5zZWFyY2gtY29udGFpbmVyIHtcbiAgICAgIC53ZWxjb21lLXR4dCB7XG4gICAgICAgIHBhZGRpbmc6IDQuNDM4cmVtIDAgMS44NzVyZW07XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgfVxuXG4gICAgICAuZm9ybS1jb250YWluZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgYm94LXNoYWRvdzogMHB4IDRweCAxMnB4IHZhcigtLWNvbG9yLWJvcmRlci1saWdodC1ncmF5KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC43NXJlbTtcbiAgICAgICAgcGFkZGluZzogMS42MjVyZW0gMy4zNzVyZW0gNHJlbTtcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC0xLjg3NXJlbTtcbiAgICAgICAgICBwYWRkaW5nOiAwIDFyZW0gMCAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgYm94LXNoYWRvdzogdW5zZXQ7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMS45Mzc1cmVtIDEuOTM3NXJlbSAwIDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VsZWN0aW9uLWluZm8ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWRhcmstcHVycGxlKTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjYyNXJlbTtcbiAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgIGNvbG9yOiAjZWU3ODc4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICAgIHdpZHRoOiAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAudHotc2VydmljZXMge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZ2FwOiAwLjYyNXJlbTtcblxuICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XG4gICAgICAgICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMXJlbTtcbiAgICAgICAgICAgIC8vcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIHRvcDogLTEuODc1cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IC0xcmVtO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMXJlbTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudHotc2VydmljZSB7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDExLjI1cmVtO1xuICAgICAgICAgICAgcGFkZGluZzogMC44NzVyZW0gMC42MjVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tZGFyay1wdXJwbGUpO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS11cGdyYWRlLXJpZ2h0LWJvcmRlcik7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAgICAgICAudHotaWNvbiB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gICAgICAgICAgICAgICY6OmJlZm9yZSB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tZGFyay1wdXJwbGUtb3BhY2l0eS0yKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VydmljZS1sYWJlbCB7XG4gICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC42MjVyZW07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmFkZC1yZW1vdmUge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluLWRhcmstcHVycGxlLW9wYWNpdHktMSk7XG4gICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICAgICAgICB3aWR0aDogMS41cmVtO1xuICAgICAgICAgICAgICBtaW4td2lkdGg6IDEuNXJlbTtcbiAgICAgICAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIG9uLWhvdmVyIHtcbiAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbGlnaHQtZm9vdGVyLWdyZXkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmLnNlbGVjdGVkLXNlcnZpY2Uge1xuICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuXG4gICAgICAgICAgICAgIC50ei1pY29uOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIC5hZGQtcmVtb3ZlIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluLWRhcmstYmx1ZS1vcGFjaXR5LTIpO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgQGluY2x1ZGUgb24taG92ZXIge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICM2NjU1YmQ7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19tb2ItaW5mby10ZXh0IHtcbiAgICAgICAgcGFkZGluZzogMC44NzE4NzVyZW0gMXJlbSAwO1xuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjE4NzVyZW07XG4gICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgdGV4dC1zaGFkb3c6IDBweCAxcHggMXB4IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgfVxuICB9XG5cbiAgLmhlYWQtMyB7XG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICBsaW5lLWhlaWdodDogMS4zMTI1cmVtO1xuICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDAyNWVtO1xuICAgIH1cbiAgfVxufVxuXG46aG9zdCA6Om5nLWRlZXAgLmhvbWUtY29udGFpbmVyX19tb2ItaW5mby10ZXh0IC5jb2xvci1lcnJvciB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */", "@media (max-width: 1220px) {\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .home-bg-img[_ngcontent-%COMP%] {\n    height: 10.75rem;\n  }\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .welcome-txt[_ngcontent-%COMP%] {\n    padding: 1.75rem 0 1.813rem;\n    font-size: 2rem;\n    line-height: 2.688rem;\n  }\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n    padding: 1.875rem;\n  }\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%] {\n    min-width: 8.625rem;\n  }\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .search-container[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .tz-services[_ngcontent-%COMP%]   .tz-service[_ngcontent-%COMP%]   .service-label[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .tz-info-container[_ngcontent-%COMP%] {\n    padding: 0;\n  }\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .tz-help-options[_ngcontent-%COMP%] {\n    gap: 1.25rem;\n  }\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]   .body-2[_ngcontent-%COMP%] {\n    font-size: 0.75rem;\n    line-height: 1.125rem;\n  }\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]   .help-content[_ngcontent-%COMP%] {\n    height: 5.938rem;\n  }\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .tz-help-options[_ngcontent-%COMP%]   .help-option[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n    width: 7.375rem;\n  }\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .lets-start-txt[_ngcontent-%COMP%] {\n    left: 0;\n  }\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .lets-start-txt[_ngcontent-%COMP%]   .head-1[_ngcontent-%COMP%], [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .tz-sub-bg[_ngcontent-%COMP%]   .lets-start-txt[_ngcontent-%COMP%]   .head-2[_ngcontent-%COMP%] {\n    font-weight: var(--font-weight-bold);\n    font-size: 3rem;\n    line-height: 4.063rem;\n  }\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .subscription-container[_ngcontent-%COMP%] {\n    margin-bottom: 10rem;\n    padding: 0 9rem;\n  }\n  [_nghost-%COMP%]   .home-container[_ngcontent-%COMP%]   .subscription-container[_ngcontent-%COMP%]   .head-3[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n    line-height: 2rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIiwiaG9tZS5jb21wb25lbnQudGFibGV0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0NFO0VDbkNVO0lBQ0ksZ0JBQUE7RUFIZDtFQU9jO0lBQ0ksMkJBQUE7SUFDQSxlQUFBO0lBQ0EscUJBQUE7RUFMbEI7RUFRYztJQUNJLGlCQUFBO0VBTmxCO0VBU3NCO0lBQ0ksbUJBQUE7RUFQMUI7RUFTMEI7SUFDSSxtQkFBQTtFQVA5QjtFQWNVO0lBQ0ksVUFBQTtFQVpkO0VBZVU7SUFDSSxZQUFBO0VBYmQ7RUFnQmtCO0lBQ0ksa0JBQUE7SUFDQSxxQkFBQTtFQWR0QjtFQWlCa0I7SUFDSSxnQkFBQTtFQWZ0QjtFQWtCa0I7SUFDSSxlQUFBO0VBaEJ0QjtFQXNCYztJQUNJLE9BQUE7RUFwQmxCO0VBc0JrQjs7SUFFSSxvQ0FBQTtJQUNBLGVBQUE7SUFDQSxxQkFBQTtFQXBCdEI7RUF5QlU7SUFDSSxvQkFBQTtJQUNBLGVBQUE7RUF2QmQ7RUF5QmM7SUFDSSxpQkFBQTtJQUNBLGlCQUFBO0VBdkJsQjtBQUNGIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LnRhYmxldC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIiwiQGltcG9ydCAndXRpbHMvbWl4aW5zJztcblxuOmhvc3Qge1xuICAgIEBpbmNsdWRlIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigxMjIwcHgpIHtcbiAgICAgICAgLmhvbWUtY29udGFpbmVyIHtcbiAgICAgICAgICAgIC5ob21lLWJnLWltZyB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMC43NXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlYXJjaC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIC53ZWxjb21lLXR4dCB7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEuNzVyZW0gMCAxLjgxM3JlbTtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAycmVtO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi42ODhyZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLmZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMS44NzVyZW07XG5cbiAgICAgICAgICAgICAgICAgICAgLnR6LXNlcnZpY2VzIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC50ei1zZXJ2aWNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDguNjI1cmVtO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLnNlcnZpY2UtbGFiZWwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnR6LWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHotaGVscC1vcHRpb25zIHtcbiAgICAgICAgICAgICAgICBnYXA6IDEuMjVyZW07XG5cbiAgICAgICAgICAgICAgICAuaGVscC1vcHRpb24ge1xuICAgICAgICAgICAgICAgICAgICAuYm9keS0yIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC43NXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5oZWxwLWNvbnRlbnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiA1LjkzOHJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHR6LWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcuMzc1cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudHotc3ViLWJnIHtcbiAgICAgICAgICAgICAgICAubGV0cy1zdGFydC10eHQge1xuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkLTEsXG4gICAgICAgICAgICAgICAgICAgIC5oZWFkLTIge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LWJvbGQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAzcmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDQuMDYzcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc3Vic2NyaXB0aW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTByZW07XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMCA5cmVtO1xuXG4gICAgICAgICAgICAgICAgLmhlYWQtMyB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 44882:
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeModule": () => (/* binding */ HomeModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-routing.module */ 34601);
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component */ 45493);
/* harmony import */ var _search_search_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../search/search.module */ 69837);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _components_home_mob_static_content_home_mob_static_content_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/home-mob-static-content/home-mob-static-content.component */ 66241);
/* harmony import */ var _components_home_static_content_home_static_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home-static-content/home-static-content.component */ 20831);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









class HomeModule {
}
HomeModule.ɵfac = function HomeModule_Factory(t) { return new (t || HomeModule)(); };
HomeModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: HomeModule });
HomeModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _search_search_module__WEBPACK_IMPORTED_MODULE_2__.SearchModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](HomeModule, { declarations: [_home_component__WEBPACK_IMPORTED_MODULE_1__.PlanMyTripComponent, _components_home_mob_static_content_home_mob_static_content_component__WEBPACK_IMPORTED_MODULE_4__.HomeMobStaticContentComponent, _components_home_static_content_home_static_content_component__WEBPACK_IMPORTED_MODULE_5__.HomeStaticContentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _home_routing_module__WEBPACK_IMPORTED_MODULE_0__.SearchRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _search_search_module__WEBPACK_IMPORTED_MODULE_2__.SearchModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_core_utils_tz-passenger_util_ts-src_app_modules_home_home_module_ts.js.map