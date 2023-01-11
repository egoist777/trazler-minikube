"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_customer_payment_payment_module_ts"],{

/***/ 71908:
/*!********************************************************************!*\
  !*** ./src/app/modules/customer/payment/payment-routing.module.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentRoutingModule": () => (/* binding */ PaymentRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_router_gaurds_modified_form_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/router-gaurds/modified-form.guard */ 70933);
/* harmony import */ var _payment_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./payment.component */ 71987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [{ path: '', component: _payment_component__WEBPACK_IMPORTED_MODULE_1__.PaymentComponent, canDeactivate: [_core_router_gaurds_modified_form_guard__WEBPACK_IMPORTED_MODULE_0__.ModifiedFormGuard] }];
class PaymentRoutingModule {
}
PaymentRoutingModule.ɵfac = function PaymentRoutingModule_Factory(t) { return new (t || PaymentRoutingModule)(); };
PaymentRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: PaymentRoutingModule });
PaymentRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](PaymentRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 71987:
/*!***************************************************************!*\
  !*** ./src/app/modules/customer/payment/payment.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentComponent": () => (/* binding */ PaymentComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/validation-patterns.const */ 1903);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_payment_address_payment_address_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/payment-address/payment-address.component */ 9448);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);







function PaymentComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 4)(2, "form", 5)(3, "div", 6)(4, "div", 7)(5, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "input", 9)(9, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7)(11, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](14, "input", 11)(15, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12)(17, "div", 7)(18, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](21, "input", 13)(22, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](23, "div", 7)(24, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](26, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](27, "input", 14)(28, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](29, "tz-payment-address", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](30, "div", 15)(31, "div", 16)(32, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](33);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](34, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](35, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](36);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](37, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", card_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](7, 8, "CREDIT_CARDS.NUMBER"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](13, 10, "CREDIT_CARDS.EXPIRATION_DATE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](20, 12, "CREDIT_CARDS.HOLDERS_NAME"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](26, 14, "CREDIT_CARDS.CVC_CODE"));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", card_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](34, 16, "PROFILE.Save"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](37, 18, "GENERAL.CANCEL"), " ");
} }
class PaymentComponent {
    constructor(fb) {
        this.fb = fb;
        this.paymentForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
        this.page = 'GENERAL.PAYMENT';
    }
    get cardsFormArray() {
        var _a;
        const formArray = (_a = this.paymentForm) === null || _a === void 0 ? void 0 : _a.get('cards');
        return formArray.controls;
    }
    get isDirty() {
        return this.cardsFormArray.some((form) => form.dirty);
    }
    ngOnInit() {
        this.createPaymentFormGroup();
    }
    addNewCard() {
        this.cardsFormArray.push(this.fb.group({
            cardNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            expiryDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required),
            holder: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.ValidatorPatterns.NAME)]),
            cvc: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.maxLength(4)]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.ValidatorPatterns.STRING)),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.ValidatorPatterns.ZIPCODE)),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_0__.ValidatorPatterns.STRING)),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControl(''),
        }));
    }
    createPaymentFormGroup() {
        this.paymentForm = this.fb.group({
            cards: this.fb.array([]),
        });
        this.addNewCard();
    }
}
PaymentComponent.ɵfac = function PaymentComponent_Factory(t) { return new (t || PaymentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder)); };
PaymentComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: PaymentComponent, selectors: [["tz-payment"]], decls: 3, vars: 2, consts: [[1, "tz-form-container", "title-mb", "mb-0"], [3, "formGroup"], ["formArrayName", "cards", 4, "ngFor", "ngForOf"], ["formArrayName", "cards"], [1, "tz-form-container__form"], [1, "form-group-container", 3, "formGroup"], [1, "field-row"], [1, "tz-field"], [1, "tz-field__name"], ["data-test", "payment-method-card-number", "type", "text", "formControlName", "cardNumber", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", " "], [1, "valid-check"], ["data-test", "payment-method-expiration-date", "type", "text", "formControlName", "expiryDate", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", "MM/YY"], [1, "field-row", "stripe-row"], ["data-test", "payment-method-cardholders-name", "type", "text", "formControlName", "holder", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", " "], ["data-test", "payment-method-card-cvc", "type", "text", "formControlName", "cvc", "autocomplete", "off", "autocorrect", "off", "autocapitalize", "off", "placeholder", " "], [1, "field-row", "mt-3"], [1, "field-row", "save-cancel"], ["data-test", "payment-method-save-btn", 1, "btn", "select-btn", "selected", "save-btn"], ["data-test", "payment-method-cancel-btn", 1, "btn", "select-btn"]], template: function PaymentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](2, PaymentComponent_ng_container_2_Template, 38, 20, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("formGroup", ctx.paymentForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.cardsFormArray);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _shared_components_payment_address_payment_address_component__WEBPACK_IMPORTED_MODULE_1__.PaymentAddressComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: ["[_nghost-%COMP%]   .stripe-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:first-child {\n  width: calc(75% - 1.25rem);\n}\n[_nghost-%COMP%]   .stripe-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:last-child {\n  width: 25%;\n}\n[_nghost-%COMP%]   .save-cancel[_ngcontent-%COMP%] {\n  justify-content: start;\n}\n[_nghost-%COMP%]   .save-cancel[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBheW1lbnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUk7RUFDRSwwQkFBQTtBQUROO0FBSUk7RUFDRSxVQUFBO0FBRk47QUFNRTtFQUNFLHNCQUFBO0FBSko7QUFNSTtFQUNFLG9CQUFBO0FBSk4iLCJmaWxlIjoicGF5bWVudC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgLnN0cmlwZS1yb3cge1xuICAgID4gOmZpcnN0LWNoaWxkIHtcbiAgICAgIHdpZHRoOiBjYWxjKDc1JSAtIDEuMjVyZW0pO1xuICAgIH1cblxuICAgID4gOmxhc3QtY2hpbGQge1xuICAgICAgd2lkdGg6IDI1JTtcbiAgICB9XG4gIH1cblxuICAuc2F2ZS1jYW5jZWwge1xuICAgIGp1c3RpZnktY29udGVudDogc3RhcnQ7XG5cbiAgICBidXR0b246bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWxlZnQ6IDEuMjVyZW07XG4gICAgfVxuICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 96149:
/*!************************************************************!*\
  !*** ./src/app/modules/customer/payment/payment.module.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PaymentModule": () => (/* binding */ PaymentModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./payment-routing.module */ 71908);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _payment_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./payment.component */ 71987);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class PaymentModule {
}
PaymentModule.ɵfac = function PaymentModule_Factory(t) { return new (t || PaymentModule)(); };
PaymentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PaymentModule });
PaymentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PaymentModule, { declarations: [_payment_component__WEBPACK_IMPORTED_MODULE_2__.PaymentComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _payment_routing_module__WEBPACK_IMPORTED_MODULE_0__.PaymentRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_customer_payment_payment_module_ts.js.map