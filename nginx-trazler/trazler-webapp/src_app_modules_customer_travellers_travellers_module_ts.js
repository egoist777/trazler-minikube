"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_customer_travellers_travellers_module_ts"],{

/***/ 81183:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/customer/travellers/components/mob-traveler-form/mob-traveler-form.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobTravelerFormComponent": () => (/* binding */ MobTravelerFormComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/modules/core/listeners-service */ 96831);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_traveller_tz_traveller_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/components/tz-traveller/tz-traveller.component */ 50735);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);







const _c0 = function (a0) { return { "saved-traveler": a0 }; };
function MobTravelerFormComponent_tz_traveller_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "tz-traveller", 1);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](4, _c0, ctx_r0.data.selectedTraveller.id && ctx_r0.data.selectedTraveller.id !== ""))("formGroup", ctx_r0.data.formGroup)("selectedTraveller", ctx_r0.data.selectedTraveller)("isProfile", true);
} }
class MobTravelerFormComponent {
    constructor(modalService, listenersService) {
        this.modalService = modalService;
        this.listenersService = listenersService;
        this.listenerId = this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_0__.ListenerId.CUSTOMER_INFO_UPDATED, this.closeModel, this);
    }
    ngOnDestroy() {
        this.listenersService.unregisterListener(this.listenerId);
    }
    closeModel() {
        this.modalService.dismiss(true);
    }
}
MobTravelerFormComponent.ɵfac = function MobTravelerFormComponent_Factory(t) { return new (t || MobTravelerFormComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_2__.ListenersService)); };
MobTravelerFormComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MobTravelerFormComponent, selectors: [["tz-mob-traveler-form"]], decls: 1, vars: 1, consts: [[3, "ngClass", "formGroup", "selectedTraveller", "isProfile", 4, "ngIf"], [3, "ngClass", "formGroup", "selectedTraveller", "isProfile"]], template: function MobTravelerFormComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, MobTravelerFormComponent_tz_traveller_0_Template, 1, 6, "tz-traveller", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.data && ctx.data.formGroup);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_tz_traveller_tz_traveller_component__WEBPACK_IMPORTED_MODULE_3__.TzTravellerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormGroupDirective], styles: ["[_nghost-%COMP%] {\n  display: block;\n  margin-bottom: 5.125rem;\n}\n\n.saved-traveler[_ngcontent-%COMP%] {\n  margin-bottom: 9.25rem;\n}\n\n[_nghost-%COMP%]     .tz-form-container__form {\n  padding: 0.625rem 0;\n  border-bottom: unset;\n}\n\n[_nghost-%COMP%]     .tz-form-container__form .tz-field {\n  padding: 0 1rem;\n}\n\n[_nghost-%COMP%]     .tz-form-container__form .last-name-container, [_nghost-%COMP%]     .tz-form-container__form .dob-container {\n  border-bottom: 0.5rem solid var(--color-main-background-mobile);\n  padding-bottom: 0.875rem;\n}\n\n[_nghost-%COMP%]     .tz-form-container__form .last-name-container input, [_nghost-%COMP%]     .tz-form-container__form .dob-container input {\n  border-color: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi10cmF2ZWxlci1mb3JtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksY0FBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBRUE7RUFDSSxzQkFBQTtBQUNKOztBQUdJO0VBQ0ksbUJBQUE7RUFDQSxvQkFBQTtBQUFSOztBQUVRO0VBQ0ksZUFBQTtBQUFaOztBQUdROztFQUVJLCtEQUFBO0VBQ0Esd0JBQUE7QUFEWjs7QUFFWTs7RUFDSSx5QkFBQTtBQUNoQiIsImZpbGUiOiJtb2ItdHJhdmVsZXItZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tYm90dG9tOiA1LjEyNXJlbTtcbn1cblxuLnNhdmVkLXRyYXZlbGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA5LjI1cmVtO1xufVxuXG46aG9zdCA6Om5nLWRlZXAge1xuICAgIC50ei1mb3JtLWNvbnRhaW5lcl9fZm9ybSB7XG4gICAgICAgIHBhZGRpbmc6IDAuNjI1cmVtIDA7XG4gICAgICAgIGJvcmRlci1ib3R0b206IHVuc2V0O1xuXG4gICAgICAgIC50ei1maWVsZCB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDFyZW07XG4gICAgICAgIH1cblxuICAgICAgICAubGFzdC1uYW1lLWNvbnRhaW5lcixcbiAgICAgICAgLmRvYi1jb250YWluZXIge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMC41cmVtIHNvbGlkIHZhcigtLWNvbG9yLW1haW4tYmFja2dyb3VuZC1tb2JpbGUpO1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuODc1cmVtO1xuICAgICAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 8485:
/*!*************************************************************************************************************!*\
  !*** ./src/app/modules/customer/travellers/components/mob-travellers-list/mob-travellers-list.component.ts ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobTravellersListComponent": () => (/* binding */ MobTravellersListComponent)
/* harmony export */ });
/* harmony import */ var _mob_traveler_form_mob_traveler_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../mob-traveler-form/mob-traveler-form.component */ 81183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);






function MobTravellersListComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](2, "tz-icon", 3)(3, "div", 4)(4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobTravellersListComponent_ng_container_0_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r3.openTraveller(0); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} }
function MobTravellersListComponent_ng_template_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobTravellersListComponent_ng_template_1_ng_container_1_div_1_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r11); const i_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2); return ctx_r9.openTraveller(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const passenger_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate3"](" ", passenger_r6.firstName, " ", passenger_r6.middleName, " ", passenger_r6.lastName, " ");
} }
function MobTravellersListComponent_ng_template_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MobTravellersListComponent_ng_template_1_ng_container_1_div_1_Template, 2, 3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const passenger_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", passenger_r6.id);
} }
function MobTravellersListComponent_ng_template_1_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MobTravellersListComponent_ng_template_1_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function MobTravellersListComponent_ng_template_1_Template_div_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r13.openTraveller(ctx_r13.customerInformation.passengers.length - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r2.customerInformation.passengers);
} }
class MobTravellersListComponent {
    constructor(modalService) {
        this.modalService = modalService;
    }
    openTraveller(idx) {
        this.modalService.createDetailsPage(_mob_traveler_form_mob_traveler_form_component__WEBPACK_IMPORTED_MODULE_0__.MobTravelerFormComponent, {
            data: {
                formGroup: this.travellersFormArray[idx],
                selectedTraveller: this.customerInformation.passengers[idx],
            },
            title: 'TRAVELLER.TRAVELERS',
            modalCustomClasses: ['profile-traveler'],
        });
    }
}
MobTravellersListComponent.ɵfac = function MobTravellersListComponent_Factory(t) { return new (t || MobTravellersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_1__.ModalService)); };
MobTravellersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: MobTravellersListComponent, selectors: [["tz-mob-travellers-list"]], inputs: { customerInformation: "customerInformation", travellersFormArray: "travellersFormArray" }, decls: 3, vars: 2, consts: [[4, "ngIf", "ngIfElse"], ["travelersList", ""], [1, "no-traveler"], ["icon", "no-travelers"], ["translate", "TRAVELLER.NO_TRAVELERS_YET", 1, "no-traveler__title"], ["translate", "TRAVELLER.NO_TRAVELERS_TEXT", 1, "no-traveler__text"], ["translate", "TRAVELLER.ADD_NEW_TRAVELER", 1, "add-new-traveler", 3, "click"], [1, "travelers-list"], [4, "ngFor", "ngForOf"], [3, "click", 4, "ngIf"], [3, "click"]], template: function MobTravellersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](0, MobTravellersListComponent_ng_container_0_Template, 6, 0, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, MobTravellersListComponent_ng_template_1_Template, 3, 1, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.customerInformation.passengers.length === 1)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_2__.TzIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf], styles: [".no-traveler[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background-color: var(--color-primary-white);\n  text-align: center;\n  padding-top: 1.125rem;\n}\n.no-traveler[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 11.875rem;\n  display: flex;\n}\n.no-traveler__title[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-bold);\n  font-size: 1rem;\n  line-height: 100%;\n  color: var(--color-text-mobile);\n  padding: 2.75rem 3.125rem 0.5rem;\n}\n.no-traveler__text[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-normal);\n  font-size: 0.75rem;\n  line-height: 1.125rem;\n  color: var(--color-text-mobile);\n  padding: 0 3.0625rem 1rem;\n}\n.travelers-list[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-white);\n  padding: 0.625rem 1rem;\n  margin: 0.5rem 0 0.5rem;\n}\n.travelers-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-normal);\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  color: var(--color-text-mobile);\n  padding: 0.75rem 1rem;\n}\n.travelers-list[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child) {\n  border-bottom: 1px solid var(--color-border-mobile);\n}\n.add-new-traveler[_ngcontent-%COMP%] {\n  outline: 1px dashed var(--color-main-purple);\n  border-radius: 0.25rem;\n  padding: 0.5rem 0;\n  text-align: center;\n  margin: 0.5rem 1rem;\n  font-weight: var(--font-weight-regular);\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  color: var(--color-main-purple);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi10cmF2ZWxsZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDRDQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtBQUNKO0FBQ0k7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0FBQ1I7QUFFSTtFQUNJLG9DQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxnQ0FBQTtBQUFSO0FBR0k7RUFDSSxzQ0FBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0FBRFI7QUFLQTtFQUNJLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQUZKO0FBSUk7RUFDSSxzQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLHFCQUFBO0FBRlI7QUFJUTtFQUNJLG1EQUFBO0FBRlo7QUFPQTtFQUNJLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFFQSx1Q0FBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtBQUxKIiwiZmlsZSI6Im1vYi10cmF2ZWxsZXJzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubm8tdHJhdmVsZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDEuMTI1cmVtO1xuXG4gICAgdHotaWNvbiB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDExLjg3NXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICB9XG5cbiAgICAmX190aXRsZSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ib2xkKTtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMTAwJTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgcGFkZGluZzogMi43NXJlbSAzLjEyNXJlbSAwLjVyZW07XG4gICAgfVxuXG4gICAgJl9fdGV4dCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgcGFkZGluZzogMCAzLjA2MjVyZW0gMXJlbTtcbiAgICB9XG59XG5cbi50cmF2ZWxlcnMtbGlzdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgcGFkZGluZzogMC42MjVyZW0gMXJlbTtcbiAgICBtYXJnaW46IDAuNXJlbSAwIDAuNXJlbTtcblxuICAgID5kaXYge1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtO1xuXG4gICAgICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLW1vYmlsZSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5hZGQtbmV3LXRyYXZlbGVyIHtcbiAgICBvdXRsaW5lOiAxcHggZGFzaGVkIHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAwO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW46IDAuNXJlbSAxcmVtO1xuXG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xufVxuIl19 */"] });


/***/ }),

/***/ 6040:
/*!*****************************************************************************************************!*\
  !*** ./src/app/modules/customer/travellers/components/travellers-list/travellers-list.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravellersListComponent": () => (/* binding */ TravellersListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_traveller_tz_traveller_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/components/tz-traveller/tz-traveller.component */ 50735);







const _c0 = function (a0) { return { "primary-traveller": a0 }; };
const _c1 = function (a0) { return { opened: a0 }; };
function TravellersListComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TravellersListComponent_ng_container_2_Template_div_click_1_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r4); const i_r2 = restoredCtx.index; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r3.openTraveller.emit(i_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 5)(3, "span", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "div", 7)(6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](7, "tz-traveller", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const traveller_r1 = ctx.$implicit;
    const i_r2 = ctx.index;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0.customerInformation.passengers[i_r2].id ? "travellers-list" : "add-banner");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", traveller_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](10, _c0, i_r2 === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r0.formBannerText(traveller_r1, i_r2), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](12, _c1, i_r2 === ctx_r0.travellerIdx));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](14, _c1, i_r2 === ctx_r0.travellerIdx))("formGroup", traveller_r1)("selectedTraveller", ctx_r0.customerInformation.passengers[i_r2])("isProfile", true);
} }
class TravellersListComponent {
    constructor(translateService) {
        this.translateService = translateService;
        this.travellersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroup({});
        this.travellerIdx = -1;
        this.openTraveller = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    formBannerText(traveller, idx) {
        var _a, _b, _c, _d, _e, _f;
        if (!((_a = traveller === null || traveller === void 0 ? void 0 : traveller.value) === null || _a === void 0 ? void 0 : _a.firstName) && !((_b = traveller === null || traveller === void 0 ? void 0 : traveller.value) === null || _b === void 0 ? void 0 : _b.middleName) && !((_c = traveller === null || traveller === void 0 ? void 0 : traveller.value) === null || _c === void 0 ? void 0 : _c.lastName)) {
            if (idx === 0) {
                return this.translateService.instant('TRAVELLER.PRIMARY_TRAVELER');
            }
            else {
                return (this.translateService.instant('GENERAL.add') +
                    ' ' +
                    this.translateService.instant('TRAVELLER.TRAVELER'));
            }
        }
        return `${(_d = traveller.value.firstName) !== null && _d !== void 0 ? _d : ''}
        ${(_e = traveller.value.middleName) !== null && _e !== void 0 ? _e : ''}
        ${(_f = traveller.value.lastName) !== null && _f !== void 0 ? _f : ''}`;
    }
}
TravellersListComponent.ɵfac = function TravellersListComponent_Factory(t) { return new (t || TravellersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslateService)); };
TravellersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TravellersListComponent, selectors: [["tz-travellers-list"]], inputs: { travellersForm: "travellersForm", customerInformation: "customerInformation", travellerIdx: "travellerIdx", travellersFormArray: "travellersFormArray" }, outputs: { openTraveller: "openTraveller" }, decls: 3, vars: 2, consts: [[1, "tz-form-container", "mb-0"], [3, "formGroup"], ["formArrayName", "travellers", 4, "ngFor", "ngForOf"], ["formArrayName", "travellers"], [1, "traveller-banner", 3, "formGroup", "click"], ["data-test", "profile-travellers-primary-traveller", 1, "traveller-validation"], [1, "body-2-semibold", "text-capitalize", 3, "ngClass"], [1, "tz-icon-arrow", 3, "ngClass"], ["data-test", "profile-travellers-add-traveller", 1, "add-traveller"], [3, "ngClass", "formGroup", "selectedTraveller", "isProfile"]], template: function TravellersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TravellersListComponent_ng_container_2_Template, 8, 16, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.travellersForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.travellersFormArray);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArrayName, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgClass, _shared_components_tz_traveller_tz_traveller_component__WEBPACK_IMPORTED_MODULE_0__.TzTravellerComponent], styles: ["@media not all and (hover: none) {\n  [_nghost-%COMP%]   .traveller-banner[_ngcontent-%COMP%]:hover {\n    opacity: 0.7;\n  }\n}\n[_nghost-%COMP%]   .travellers-list[_ngcontent-%COMP%]   .traveller-validation[_ngcontent-%COMP%] {\n  padding: 1.18rem 0;\n  margin: 0 1rem 0 1.25rem;\n}\n[_nghost-%COMP%]   .travellers-list[_ngcontent-%COMP%]   .traveller-validation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 0.875rem;\n  text-transform: capitalize;\n  font-weight: var(--font-weight-semibold);\n}\n[_nghost-%COMP%]   .add-banner[_ngcontent-%COMP%]   .traveller-validation[_ngcontent-%COMP%] {\n  margin-left: 1.25rem;\n}\n[_nghost-%COMP%]   .add-banner[_ngcontent-%COMP%]   .traveller-validation[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-normal);\n  font-size: 0.875rem;\n  line-height: 1.25rem;\n}\n[_nghost-%COMP%]   .add-banner[_ngcontent-%COMP%]   .tz-icon-arrow[_ngcontent-%COMP%] {\n  display: none;\n}\n[_nghost-%COMP%]   .add-banner[_ngcontent-%COMP%]   .add-traveller[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  background: url(/assets/icons/web/img/icons/plus.svg) no-repeat center;\n}\n[_nghost-%COMP%]   tz-traveller[_ngcontent-%COMP%] {\n  display: block;\n  max-height: 0px;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   tz-traveller.opened[_ngcontent-%COMP%] {\n  max-height: 1000px;\n  overflow: unset;\n}\n[_nghost-%COMP%]   tz-traveller[_ngcontent-%COMP%]:not(.opened) {\n  margin-bottom: 0.313rem;\n}\n[_nghost-%COMP%]   .tz-form-container[_ngcontent-%COMP%]   tz-traveller[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .tz-form-container[_ngcontent-%COMP%]   tz-traveller[_ngcontent-%COMP%]:last-child     .tz-form-container {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIiwidHJhdmVsbGVycy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXNFSTtFQUNJO0lDbEVJLFlBQUE7RUFGVjtBQUNGO0FBTVE7RUFDSSxrQkFBQTtFQUNBLHdCQUFBO0FBSlo7QUFNWTtFQUNJLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSx3Q0FBQTtBQUpoQjtBQVVRO0VBQ0ksb0JBQUE7QUFSWjtBQVVZO0VBQ0ksc0NBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0FBUmhCO0FBWVE7RUFDSSxhQUFBO0FBVlo7QUFhUTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esc0VBQUE7QUFYWjtBQWVJO0VBQ0ksY0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQWJSO0FBZVE7RUFDSSxrQkFBQTtFQUNBLGVBQUE7QUFiWjtBQWdCUTtFQUNJLHVCQUFBO0FBZFo7QUFrQkk7RUFDSSxnQkFBQTtBQWhCUjtBQWtCUTtFQUNJLGdCQUFBO0FBaEJaIiwiZmlsZSI6InRyYXZlbGxlcnMtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiIsIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuOmhvc3Qge1xuICAgIC50cmF2ZWxsZXItYmFubmVyIHtcbiAgICAgICAgQGluY2x1ZGUgb24taG92ZXIge1xuICAgICAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRyYXZlbGxlcnMtbGlzdCB7XG4gICAgICAgIC50cmF2ZWxsZXItdmFsaWRhdGlvbiB7XG4gICAgICAgICAgICBwYWRkaW5nOiAxLjE4cmVtIDA7XG4gICAgICAgICAgICBtYXJnaW46IDAgMXJlbSAwIDEuMjVyZW07XG5cbiAgICAgICAgICAgIHNwYW4ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5hZGQtYmFubmVyIHtcbiAgICAgICAgLnRyYXZlbGxlci12YWxpZGF0aW9uIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxLjI1cmVtO1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtbm9ybWFsKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnR6LWljb24tYXJyb3cge1xuICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hZGQtdHJhdmVsbGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvYXNzZXRzL2ljb25zL3dlYi9pbWcvaWNvbnMvcGx1cy5zdmcpIG5vLXJlcGVhdCBjZW50ZXI7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0ei10cmF2ZWxsZXIge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgICYub3BlbmVkIHtcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDEwMDBweDtcbiAgICAgICAgICAgIG92ZXJmbG93OiB1bnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgICY6bm90KC5vcGVuZWQpIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMzEzcmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnR6LWZvcm0tY29udGFpbmVyIHR6LXRyYXZlbGxlcjpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICA6Om5nLWRlZXAgLnR6LWZvcm0tY29udGFpbmVyIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 72423:
/*!**************************************************************************!*\
  !*** ./src/app/modules/customer/travellers/travellers-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravellersRoutingModule": () => (/* binding */ TravellersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _core_router_gaurds_modified_form_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/router-gaurds/modified-form.guard */ 70933);
/* harmony import */ var _travellers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travellers.component */ 95542);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);





const routes = [{ path: '', component: _travellers_component__WEBPACK_IMPORTED_MODULE_1__.TravellersComponent, canDeactivate: [_core_router_gaurds_modified_form_guard__WEBPACK_IMPORTED_MODULE_0__.ModifiedFormGuard] }];
class TravellersRoutingModule {
}
TravellersRoutingModule.ɵfac = function TravellersRoutingModule_Factory(t) { return new (t || TravellersRoutingModule)(); };
TravellersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: TravellersRoutingModule });
TravellersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](TravellersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule] }); })();


/***/ }),

/***/ 95542:
/*!*********************************************************************!*\
  !*** ./src/app/modules/customer/travellers/travellers.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravellersComponent": () => (/* binding */ TravellersComponent)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _services_services_tzTraveller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/services/tzTraveller.service */ 36894);
/* harmony import */ var _services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/core/listeners-service */ 96831);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _components_mob_travellers_list_mob_travellers_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mob-travellers-list/mob-travellers-list.component */ 8485);
/* harmony import */ var _components_travellers_list_travellers_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/travellers-list/travellers-list.component */ 6040);












function TravellersComponent_tz_mob_travellers_list_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](0, "tz-mob-travellers-list", 2);
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("travellersFormArray", ctx_r0.travellersFormArray)("customerInformation", ctx_r0.customerInformation);
  }
}

function TravellersComponent_tz_travellers_list_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tz-travellers-list", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("openTraveller", function TravellersComponent_tz_travellers_list_2_Template_tz_travellers_list_openTraveller_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r3);
      const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return ctx_r2.onOpenTraveller($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("travellersForm", ctx_r1.travellersForm)("travellersFormArray", ctx_r1.travellersFormArray)("customerInformation", ctx_r1.customerInformation)("travellerIdx", ctx_r1.travellerIdx);
  }
}

class TravellersComponent {
  constructor(userService, fb, changeDetectorRef, tzTravellerService, listenersService, platformService) {
    this.userService = userService;
    this.fb = fb;
    this.changeDetectorRef = changeDetectorRef;
    this.tzTravellerService = tzTravellerService;
    this.listenersService = listenersService;
    this.platformService = platformService;
    this.travellersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroup({});
    this.travellerIdx = -1;
    this.page = 'PROFILE.TRAVELERS_INFORMATION';
    this.listenerId = -1;
  }

  get travellersFormArray() {
    var _a;

    const formArray = (_a = this.travellersForm) === null || _a === void 0 ? void 0 : _a.get('travellers');
    return formArray.controls;
  }

  get isDirty() {
    return this.travellersFormArray.some(form => form.dirty);
  }

  ngOnInit() {
    this.customerInformation = this.userService.getCustomerInformation();
    this.createTravellersForm();
    this.listenerId = this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_0__.ListenerId.CUSTOMER_INFO_UPDATED, this.updateCustomerInfo, this);
  }

  ngAfterViewInit() {
    this.changeDetectorRef.detectChanges();
  }

  addTravellerForm() {
    const travellerGrp = this.tzTravellerService.createTravellerGroup('profile', true);
    this.travellersFormArray.push(this.fb.group(travellerGrp));
  }

  onOpenTraveller(idx) {
    if (this.travellerIdx === idx) {
      this.travellerIdx = -1;
    } else {
      this.travellerIdx = idx;
    }
  }

  ngOnDestroy() {
    this.listenersService.unregisterListener(this.listenerId);
  }

  updateCustomerInfo() {
    this.userService.getCustomer(true).then(customer => {
      console.log('Updated Customer info: ', customer);
      this.customerInformation = customer;
      this.travellerIdx = -1;
      this.createTravellersForm();
      this.changeDetectorRef.detectChanges();
    }, err => {
      this.customerInformation = {};
      console.log('Error fetching customer info: ', err);
    });
  }

  addNewTraveller() {
    if (this.customerInformation.passengers.length === 0) {
      this.travellerIdx = 0;
    }

    this.customerInformation.passengers.push({});
    this.addTravellerForm();
  }

  createTravellersForm() {
    this.travellersForm = this.fb.group({
      travellers: this.fb.array([])
    });

    if (!this.customerInformation.passengers) {
      this.customerInformation.passengers = [];
    }

    for (const passenger of this.customerInformation.passengers) {
      if (!passenger.id) {
        continue;
      }

      this.addTravellerForm();
    }

    this.addNewTraveller();
  }

}

TravellersComponent.ɵfac = function TravellersComponent_Factory(t) {
  return new (t || TravellersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_1__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_services_tzTraveller_service__WEBPACK_IMPORTED_MODULE_2__.TzTravellerService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_3__.ListenersService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_4__.PlatformService));
};

TravellersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: TravellersComponent,
  selectors: [["tz-travellers"]],
  decls: 4,
  vars: 6,
  consts: [[3, "travellersFormArray", "customerInformation", 4, "ngIf"], [3, "travellersForm", "travellersFormArray", "customerInformation", "travellerIdx", "openTraveller", 4, "ngIf"], [3, "travellersFormArray", "customerInformation"], [3, "travellersForm", "travellersFormArray", "customerInformation", "travellerIdx", "openTraveller"]],
  template: function TravellersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](0, TravellersComponent_tz_mob_travellers_list_0_Template, 1, 2, "tz-mob-travellers-list", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](1, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](2, TravellersComponent_tz_travellers_list_2_Template, 1, 4, "tz-travellers-list", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](3, "async");
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](1, 2, ctx.platformService.isMobileDevice$));
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind1"](3, 4, ctx.platformService.isMobileDevice$) === false);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _components_mob_travellers_list_mob_travellers_list_component__WEBPACK_IMPORTED_MODULE_5__.MobTravellersListComponent, _components_travellers_list_travellers_list_component__WEBPACK_IMPORTED_MODULE_6__.TravellersListComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.AsyncPipe],
  styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmF2ZWxsZXJzLmNvbXBvbmVudC5zY3NzIn0= */"]
});

/***/ }),

/***/ 26353:
/*!******************************************************************!*\
  !*** ./src/app/modules/customer/travellers/travellers.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TravellersModule": () => (/* binding */ TravellersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _travellers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./travellers-routing.module */ 72423);
/* harmony import */ var _travellers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./travellers.component */ 95542);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _components_travellers_list_travellers_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/travellers-list/travellers-list.component */ 6040);
/* harmony import */ var _components_mob_travellers_list_mob_travellers_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/mob-travellers-list/mob-travellers-list.component */ 8485);
/* harmony import */ var _components_mob_traveler_form_mob_traveler_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mob-traveler-form/mob-traveler-form.component */ 81183);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);









class TravellersModule {
}
TravellersModule.ɵfac = function TravellersModule_Factory(t) { return new (t || TravellersModule)(); };
TravellersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TravellersModule });
TravellersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _travellers_routing_module__WEBPACK_IMPORTED_MODULE_0__.TravellersRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TravellersModule, { declarations: [_travellers_component__WEBPACK_IMPORTED_MODULE_1__.TravellersComponent, _components_travellers_list_travellers_list_component__WEBPACK_IMPORTED_MODULE_3__.TravellersListComponent, _components_mob_travellers_list_mob_travellers_list_component__WEBPACK_IMPORTED_MODULE_4__.MobTravellersListComponent, _components_mob_traveler_form_mob_traveler_form_component__WEBPACK_IMPORTED_MODULE_5__.MobTravelerFormComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _travellers_routing_module__WEBPACK_IMPORTED_MODULE_0__.TravellersRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_customer_travellers_travellers_module_ts.js.map