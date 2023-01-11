"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modules_results_results-summary_results-summary_module_ts"],{

/***/ 48591:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/results/results-summary/components/mob-book-block/mob-book-block.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobBookBlockComponent": () => (/* binding */ MobBookBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/cart/services/cart.service */ 16750);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../shared/pipes/tz-currency.pipe */ 98967);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared/pipes/tz-date.pipe */ 92456);
/* harmony import */ var _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../shared/pipes/date-range.pipe */ 82478);








function MobBookBlockComponent_ng_container_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "\u00A0&\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MobBookBlockComponent_ng_container_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MobBookBlockComponent_ng_container_12_span_1_Template, 2, 0, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const service_r4 = ctx.$implicit;
    const first_r5 = ctx.first;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !first_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 2, "SERVICES." + service_r4.toUpperCase()), " ");
} }
function MobBookBlockComponent_ng_container_13_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](2, "tzDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "tzDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transfer_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate3"](" ", transfer_r8.title, " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](2, 3, transfer_r8.date, "mediumDate"), " ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](3, 6, transfer_r8.date, "shortTime"), " ");
} }
function MobBookBlockComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MobBookBlockComponent_ng_container_13_div_1_Template, 4, 9, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r1.transfers);
} }
function MobBookBlockComponent_ng_template_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const location_r10 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](location_r10);
} }
function MobBookBlockComponent_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, MobBookBlockComponent_ng_template_14_ng_container_1_Template, 2, 1, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "dateRange");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r3.cartData.locationStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 2, ctx_r3.cartData.startDate, ctx_r3.cartData.endDate), " ");
} }
class MobBookBlockComponent {
    constructor(cartService) {
        this.cartService = cartService;
        this.gotoCheckout = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.personsStr = '';
        this.transfers = [];
    }
    ngOnInit() {
        this.getTransfers();
        this.getPersons();
    }
    onGotoCheckout() {
        this.gotoCheckout.emit();
    }
    getTransfers() {
        this.transfers = this.cartService.getTransfers(this.cartData);
    }
    getPersons() {
        this.personsStr = this.cartService.getCartPersonsStr(this.cartData);
    }
}
MobBookBlockComponent.ɵfac = function MobBookBlockComponent_Factory(t) { return new (t || MobBookBlockComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_0__.CartService)); };
MobBookBlockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MobBookBlockComponent, selectors: [["tz-mob-book-block"]], inputs: { totalPrice: "totalPrice", priceCurrency: "priceCurrency", cartData: "cartData" }, outputs: { gotoCheckout: "gotoCheckout" }, decls: 22, vars: 14, consts: [[1, "mob-book-block"], [1, "mob-book-block__info-block"], [1, "flex"], [1, "mob-book-block__info-block-text"], [1, "mob-book-block__price"], [1, "mob-book-block__summary"], [1, "mob-book-block__description"], [1, "summary-title"], [4, "ngFor", "ngForOf"], [4, "ngIf", "ngIfElse"], ["multipleServiceContent", ""], [1, "bullet-split"], [1, "mob-book-block__book-btn-block"], ["data-test", "book-btn", 1, "tz-mob-btn", "tz-mob-btn--tertiary", 3, "click"], ["class", "service-and", 4, "ngIf"], [1, "service-and"], ["class", "bullet-split", 4, "ngFor", "ngForOf"]], template: function MobBookBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "tzCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 5)(10, "div", 6)(11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, MobBookBlockComponent_ng_container_12_Template, 4, 4, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MobBookBlockComponent_ng_container_13_Template, 2, 1, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, MobBookBlockComponent_ng_template_14_Template, 5, 5, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function MobBookBlockComponent_Template_button_click_19_listener() { return ctx.onGotoCheckout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](21, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵreference"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](5, 7, "BOOKINGS.SUMMARY.TOTAL_PRICE"));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 9, ctx.totalPrice, ctx.priceCurrency));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.cartData.services);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.transfers.length !== 0)("ngIfElse", _r2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", ctx.personsStr, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](21, 12, "GENERAL.BOOK"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe, _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_1__.TzCurrencyPipe, _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_2__.TzDatePipe, _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_3__.DateRangePipe], styles: ["@charset \"UTF-8\";\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n.mob-book-block[_ngcontent-%COMP%] {\n  border-top: 0.0625rem solid var(--color-border-mobile);\n  background-color: var(--ion-color-primary-contrast);\n  padding: 0.625rem 1rem 0.5rem 1rem;\n  margin-top: 0.5rem;\n}\n.mob-book-block__info-block-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 150%;\n  color: var(--color-text-mobile);\n  margin-bottom: 0.25rem;\n}\n.mob-book-block__summary[_ngcontent-%COMP%] {\n  margin-top: 0.25rem;\n}\n.mob-book-block__price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  color: var(--ion-color-primary);\n  margin-left: auto;\n}\n.mob-book-block__description[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 0.875rem;\n  color: var(--color-grey-mobile);\n}\n.mob-book-block__book-btn-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 0.6875rem;\n}\n.mob-book-block[_ngcontent-%COMP%]   .bullet-split[_ngcontent-%COMP%] {\n  display: inline-block;\n}\n.mob-book-block[_ngcontent-%COMP%]   .bullet-split[_ngcontent-%COMP%]::before {\n  content: \"\u2022\";\n  font-size: 0.75rem;\n  line-height: 0.875rem;\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1ib29rLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQUFoQjtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7QUFFSjtBQUNBO0VBQ0ksc0RBQUE7RUFDQSxtREFBQTtFQUNBLGtDQUFBO0VBQ0Esa0JBQUE7QUFFSjtBQUVJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQkFBQTtBQUFSO0FBR0k7RUFDSSxtQkFBQTtBQURSO0FBSUk7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGlCQUFBO0FBRlI7QUFLSTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0FBSFI7QUFNSTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUNBLHFCQUFBO0FBSlI7QUFPSTtFQUNJLHFCQUFBO0FBTFI7QUFPUTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsYUFBQTtBQUxaIiwiZmlsZSI6Im1vYi1ib29rLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1vYi1ib29rLWJsb2NrIHtcbiAgICBib3JkZXItdG9wOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLW1vYmlsZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIHBhZGRpbmc6IDAuNjI1cmVtIDFyZW0gMC41cmVtIDFyZW07XG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuXG4gICAgJl9faW5mby1ibG9jayB7fVxuXG4gICAgJl9faW5mby1ibG9jay10ZXh0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgfVxuXG4gICAgJl9fc3VtbWFyeSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgfVxuXG4gICAgJl9fcHJpY2Uge1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMC44NzVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LW1vYmlsZSk7XG4gICAgfVxuXG4gICAgJl9fYm9vay1idG4tYmxvY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMC42ODc1cmVtO1xuICAgIH1cblxuICAgIC5idWxsZXQtc3BsaXQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwi4oCiXCI7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMC44NzVyZW07XG4gICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 65207:
/*!*********************************************************************************************************************!*\
  !*** ./src/app/modules/results/results-summary/components/summary-timeline-tabs/summary-timeline-tabs.component.ts ***!
  \*********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SummaryTimelineTabsComponent": () => (/* binding */ SummaryTimelineTabsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button-toggle */ 31959);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




class SummaryTimelineTabsComponent {
    constructor() {
        this.selectedTab = 'summary';
        this.tabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
    onButtonToggle(option) {
        this.tabChange.emit(option.value);
    }
}
SummaryTimelineTabsComponent.ɵfac = function SummaryTimelineTabsComponent_Factory(t) { return new (t || SummaryTimelineTabsComponent)(); };
SummaryTimelineTabsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SummaryTimelineTabsComponent, selectors: [["tz-summary-timeline-tabs"]], inputs: { selectedTab: "selectedTab" }, outputs: { tabChange: "tabChange" }, decls: 8, vars: 7, consts: [[1, "summary-timeline-tabs"], [3, "value", "change"], ["value", "summary"], ["value", "timeline"]], template: function SummaryTimelineTabsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "mat-button-toggle-group", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function SummaryTimelineTabsComponent_Template_mat_button_toggle_group_change_1_listener($event) { return ctx.onButtonToggle($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-button-toggle", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-button-toggle", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.selectedTab);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 3, "GENERAL.SUMMARY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 5, "TIMELINE.TIMELINE"), " ");
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__.MatButtonToggle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["@media (max-width: 920px) {\n  .summary-timeline-tabs[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%] {\n    box-shadow: unset;\n    border: 0;\n    border-radius: unset;\n    display: flex;\n    align-items: center;\n    gap: 0.1875rem;\n    height: auto;\n    padding: 0.125rem;\n    background-color: var(--ion-color-primary-contrast);\n  }\n  .summary-timeline-tabs[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]     .mat-button-toggle-label-content {\n    line-height: 2.25rem;\n    font-weight: 500;\n  }\n  .summary-timeline-tabs[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]   mat-button-toggle[_ngcontent-%COMP%] {\n    border: none;\n  }\n  .summary-timeline-tabs[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%;\n    border-color: var(--color-main-purple);\n    font-size: 0.875rem;\n    line-height: 1rem;\n    color: var(--color-text-mobile);\n  }\n  .summary-timeline-tabs[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n    border-radius: 0.125rem 0 0 0.125rem;\n  }\n  .summary-timeline-tabs[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n    border-radius: 0 0.125rem 0.125rem 0;\n  }\n  .summary-timeline-tabs[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]    > *.mat-button-toggle-checked[_ngcontent-%COMP%] {\n    background-color: var(--color-main-purple);\n    color: var(--color-primary-white);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIiwic3VtbWFyeS10aW1lbGluZS10YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9ESTtFQ2pEQTtJQUVRLGlCQUFBO0lBQ0EsU0FBQTtJQUNBLG9CQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsY0FBQTtJQUNBLFlBQUE7SUFDQSxpQkFBQTtJQUNBLG1EQUFBO0VBRlY7RUFJVTtJQUNJLG9CQUFBO0lBQ0EsZ0JBQUE7RUFGZDtFQUtTO0lBQ0ssWUFBQTtFQUhkO0VBTVU7SUFDSSxXQUFBO0lBQ0Esc0NBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsK0JBQUE7RUFKZDtFQU1jO0lBQ0ksb0NBQUE7RUFKbEI7RUFPYztJQUNJLG9DQUFBO0VBTGxCO0VBUWM7SUFDSSwwQ0FBQTtJQUNBLGlDQUFBO0VBTmxCO0FBQ0YiLCJmaWxlIjoic3VtbWFyeS10aW1lbGluZS10YWJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIiwiQGltcG9ydCAndXRpbHMvbWl4aW5zJztcblxuLnN1bW1hcnktdGltZWxpbmUtdGFicyB7XG4gICAgbWF0LWJ1dHRvbi10b2dnbGUtZ3JvdXAge1xuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgYm94LXNoYWRvdzogdW5zZXQ7XG4gICAgICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiB1bnNldDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgZ2FwOiAwLjE4NzVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjEyNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcblxuICAgICAgICAgICAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgIG1hdC1idXR0b24tdG9nZ2xlIHtcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgICAgIH1cblxuICAgICAgICAgICAgJiA+ICoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcblxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbSAwIDAgMC4xMjVyZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjEyNXJlbSAwLjEyNXJlbSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 15022:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/results/results-summary/results-summary-routing.module.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsSummaryRoutingModule": () => (/* binding */ ResultsSummaryRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _results_summary_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./results-summary.component */ 35139);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _results_summary_component__WEBPACK_IMPORTED_MODULE_0__.ResultsSummaryComponent,
    },
];
class ResultsSummaryRoutingModule {
}
ResultsSummaryRoutingModule.ɵfac = function ResultsSummaryRoutingModule_Factory(t) { return new (t || ResultsSummaryRoutingModule)(); };
ResultsSummaryRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: ResultsSummaryRoutingModule });
ResultsSummaryRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](ResultsSummaryRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 35139:
/*!******************************************************************************!*\
  !*** ./src/app/modules/results/results-summary/results-summary.component.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsSummaryComponent": () => (/* binding */ ResultsSummaryComponent)
/* harmony export */ });
/* harmony import */ var _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/base-service-component/base-service.component */ 6371);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/state-from.const */ 54255);
/* harmony import */ var _trip_timeline_components_trip_timeline_dialog_trip_timeline_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../trip-timeline/components/trip-timeline-dialog/trip-timeline-dialog.component */ 37479);
/* harmony import */ var _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modules/cart/utils/cart.utils */ 14770);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_transport_trains_train_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/transport/trains/train.utils */ 72583);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _components_summary_timeline_tabs_summary_timeline_tabs_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/summary-timeline-tabs/summary-timeline-tabs.component */ 65207);
/* harmony import */ var _trip_timeline_trip_timeline_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../trip-timeline/trip-timeline.component */ 17887);
/* harmony import */ var _transport_flights_components_selected_flights_selected_flights_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../transport/flights/components/selected-flights/selected-flights.component */ 41562);
/* harmony import */ var _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/block-separator/block-separator.component */ 183);
/* harmony import */ var _transport_trains_components_selected_trains_selected_trains_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../transport/trains/components/selected-trains/selected-trains.component */ 20878);
/* harmony import */ var _accommodations_components_selected_accommodations_selected_accommodations_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../accommodations/components/selected-accommodations/selected-accommodations.component */ 16068);
/* harmony import */ var _transfers_components_selected_transfers_selected_transfers_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../transfers/components/selected-transfers/selected-transfers.component */ 99131);
/* harmony import */ var _car_rentals_components_selected_car_rentals_selected_car_rentals_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../car-rentals/components/selected-car-rentals/selected-car-rentals.component */ 49476);
/* harmony import */ var _components_mob_book_block_mob_book_block_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/mob-book-block/mob-book-block.component */ 48591);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ngx-translate/core */ 87514);



 // eslint-disable-next-line max-len

















function ResultsSummaryComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div")(1, "tz-summary-timeline-tabs", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("tabChange", function ResultsSummaryComponent_div_1_Template_tz_summary_timeline_tabs_tabChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r5);
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r4.mobTabChange($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("selectedTab", "summary");
  }
}

function ResultsSummaryComponent_div_2_tz_trip_timeline_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](0, "tz-trip-timeline", 8);
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("cartItems", ctx_r6.cartData.items)("selectedId", ctx_r6.mouseHoverId);
  }
}

function ResultsSummaryComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ResultsSummaryComponent_div_2_tz_trip_timeline_1_Template, 1, 2, "tz-trip-timeline", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r1.cartData && ctx_r1.cartData.items.length !== 0);
  }
}

function ResultsSummaryComponent_div_4_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("click", function ResultsSummaryComponent_div_4_div_1_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r10);
      const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
      return ctx_r9.opneBasketTimeline();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelement"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](4, 1, "TIMELINE.TIMELINE"), " ");
  }
}

function ResultsSummaryComponent_div_4_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "tz-selected-flights", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("mouseenter", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_1_Template_tz_selected_flights_mouseenter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r16.setHoverId(ctx_r16.flightsCartData.items[0].selectedItem.id);
    })("mouseleave", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_1_Template_tz_selected_flights_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r18.setHoverId("");
    })("removedItem", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_1_Template_tz_selected_flights_removedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r19.onRemoveService(ctx_r19.servTypes.FLIGHT, ctx_r19.flightsCartData, $event);
    })("changeTickets", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_1_Template_tz_selected_flights_changeTickets_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r20.onChangeTicket(ctx_r20.servTypes.FLIGHT);
    })("changeOptions", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_1_Template_tz_selected_flights_changeOptions_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r17);
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r21.onChangeOptions(ctx_r21.servTypes.FLIGHT);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("flightCartData", ctx_r11.flightsCartData)("combId", ctx_r11.combinationId);
  }
}

function ResultsSummaryComponent_div_4_ng_container_3_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "div", 14)(2, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](5, "tz-selected-trains", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("selectedId", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_2_Template_tz_selected_trains_selectedId_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23);
      const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r22.setHoverId($event);
    })("changeTickets", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_2_Template_tz_selected_trains_changeTickets_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23);
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r24.onChangeTicket(ctx_r24.servTypes.TRAIN);
    })("changeOptions", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_2_Template_tz_selected_trains_changeOptions_5_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23);
      const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r25.onChangeOptions(ctx_r25.servTypes.TRAIN);
    })("removedItem", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_2_Template_tz_selected_trains_removedItem_5_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r23);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r26.onRemoveService(ctx_r26.servTypes.TRAIN, ctx_r26.trainCartData, $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]()();
  }

  if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtextInterpolate"](ctx_r12.getTrainTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("trainItems", ctx_r12.trainCartData.items)("combId", ctx_r12.combinationId);
  }
}

function ResultsSummaryComponent_div_4_ng_container_3_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r28 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "tz-selected-accommodations", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("mouseenter", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_3_Template_tz_selected_accommodations_mouseenter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28);
      const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r27.setHoverId(ctx_r27.accommodationCartData.items[0].selectedItem.id);
    })("mouseleave", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_3_Template_tz_selected_accommodations_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r29.setHoverId("");
    })("removedItem", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_3_Template_tz_selected_accommodations_removedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r30.onRemoveService(ctx_r30.servTypes.ACC, ctx_r30.accommodationCartData, $event);
    })("changeHotel", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_3_Template_tz_selected_accommodations_changeHotel_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r31.onChangeTicket(ctx_r31.servTypes.ACC);
    })("changeRooms", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_3_Template_tz_selected_accommodations_changeRooms_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r28);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r32.onChangeTicket(ctx_r32.servTypes.ACC_DETAILS, ctx_r32.accommodationCartData.items[0].selectedItem.data);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("accommodationCartData", ctx_r13.accommodationCartData)("combId", ctx_r13.combinationId);
  }
}

function ResultsSummaryComponent_div_4_ng_container_3_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "tz-selected-transfers", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("changeTransfer", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_4_Template_tz_selected_transfers_changeTransfer_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r33.onChangeTicket(ctx_r33.servTypes.TRANSFER, undefined, $event);
    })("removedItem", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_4_Template_tz_selected_transfers_removedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r35.onRemoveService(ctx_r35.servTypes.TRANSFER, ctx_r35.transferCartData, $event);
    })("selectedId", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_4_Template_tz_selected_transfers_selectedId_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r34);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r36.setHoverId($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("transferCartData", ctx_r14.transferCartData)("combId", ctx_r14.combinationId)("isSummary", true);
  }
}

function ResultsSummaryComponent_div_4_ng_container_3_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](1, "tz-selected-car-rentals", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("mouseenter", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_5_Template_tz_selected_car_rentals_mouseenter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r37.setHoverId(ctx_r37.carRentalCartData.items[0].selectedItem.id);
    })("mouseleave", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_5_Template_tz_selected_car_rentals_mouseleave_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r38);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r39.setHoverId("");
    })("changeCarRentals", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_5_Template_tz_selected_car_rentals_changeCarRentals_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r38);
      const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r40.onChangeTicket(ctx_r40.servTypes.CAR_RENTAL);
    })("removedItem", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_5_Template_tz_selected_car_rentals_removedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r38);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r41.onRemoveService(ctx_r41.servTypes.CAR_RENTAL, ctx_r41.carRentalCartData, $event);
    })("showCarRentalDetails", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_5_Template_tz_selected_car_rentals_showCarRentalDetails_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r38);
      const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r42.onChangeOptions(ctx_r42.servTypes.CAR_RENTAL);
    })("modifyCarRentalsOptions", function ResultsSummaryComponent_div_4_ng_container_3_ng_container_5_Template_tz_selected_car_rentals_modifyCarRentalsOptions_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r38);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
      return ctx_r43.onChangeOptions(ctx_r43.servTypes.CAR_RENTAL);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("serviceList", false)("carRentalCartData", ctx_r15.carRentalCartData)("combId", ctx_r15.combinationId);
  }
}

function ResultsSummaryComponent_div_4_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ResultsSummaryComponent_div_4_ng_container_3_ng_container_1_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ResultsSummaryComponent_div_4_ng_container_3_ng_container_2_Template, 6, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, ResultsSummaryComponent_div_4_ng_container_3_ng_container_3_Template, 2, 2, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, ResultsSummaryComponent_div_4_ng_container_3_ng_container_4_Template, 2, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, ResultsSummaryComponent_div_4_ng_container_3_ng_container_5_Template, 2, 3, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.flightsCartData && ctx_r8.flightsCartData.items && ctx_r8.flightsCartData.items.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.trainCartData && ctx_r8.trainCartData.items && ctx_r8.trainCartData.items.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.accommodationCartData && ctx_r8.accommodationCartData.items && ctx_r8.accommodationCartData.items.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.transferCartData && ctx_r8.transferCartData.items && ctx_r8.transferCartData.items.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r8.carRentalCartData && ctx_r8.carRentalCartData.items && ctx_r8.carRentalCartData.items.length);
  }
}

function ResultsSummaryComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ResultsSummaryComponent_div_4_div_1_Template, 5, 3, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](3, ResultsSummaryComponent_div_4_ng_container_3_Template, 6, 5, "ng-container", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](2, 2, ctx_r2.isMobile$) && !ctx_r2.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx_r2.cartData);
  }
}

function ResultsSummaryComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 19)(1, "tz-mob-book-block", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵlistener"]("gotoCheckout", function ResultsSummaryComponent_div_5_Template_tz_mob_book_block_gotoCheckout_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
      return ctx_r44.goToCheckout();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("totalPrice", ctx_r3.cartData.itemPrice.listPrice)("priceCurrency", ctx_r3.cartData.itemPrice.listPriceCur)("cartData", ctx_r3.cartData);
  }
}

class ResultsSummaryComponent extends _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_0__.BaseServiceComponent {
  constructor(injector, trainUtilsService) {
    super(injector);
    this.trainUtilsService = trainUtilsService;
    this.timelineData = [];
    this.servTypes = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId;
    this.combinationId = '';
    this.mouseHoverId = '';
    this.mobSummaryTimeline = 'summary';
    this.repriceListenerId = -1;
    this.isMobile$ = this.screenSizeDetectorService.isMobile;
  }

  static onSubmitBooking() {
    console.error('submit booking');
  }

  ngOnInit() {
    this.initializeComponent();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.listenersService.unregisterListener(this.repriceListenerId);
  }

  onRemoveService(serviceId, serviceCartData, optionId) {
    const self = this;
    this.removeService(serviceId, optionId, true).then(isRemoved => {
      if (isRemoved) {
        self.loadCartData();
      }
    }, error => {
      console.error(error);
    });
  }

  onChangeTicket(serviceId, cartItem, data) {
    this.cartRouterService.changeState(serviceId, cartItem, undefined, _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.SUMMARY, {
      changeTickets: true,
      data
    });
  }

  onChangeOptions(serviceId, cartItem) {
    this.cartRouterService.changeState(serviceId, cartItem, undefined, _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.SUMMARY, {
      changeOptions: true,
      preserveSelection: true
    });
  }

  onModifyService(serviceId, id) {
    this.cartRouterService.changeState(serviceId, id, undefined, _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.SUMMARY);
  }
  /*public addItemToCart(flight: any) {
      this.flightsService
          .addFlightToCart(flight)
          .pipe(takeUntil(this.destroy$))
          .subscribe(
              (response: ICart) => {
                  this.userSearchService.searchCheckDep(ServiceId.FLIGHT, true, false, false, true);
              },
              (error) => {
                  console.log(error);
              }
          );
  }*/


  getTrainTitle() {
    return this.trainUtilsService.getSelectedTitle(this.trainCartData);
  }

  setHoverId(itemId) {
    this.mouseHoverId = itemId;
  }

  opneBasketTimeline() {
    if (this.cartData.items.length === 0) {
      return;
    }

    this.dialogService.openBasketTimelineDialog(_trip_timeline_components_trip_timeline_dialog_trip_timeline_dialog_component__WEBPACK_IMPORTED_MODULE_4__.TripTimelineDialogComponent, this.cartData.items);
  }

  goToCheckout() {
    this.router.navigate(['/checkout']);
  }

  mobTabChange(tab) {
    this.mobSummaryTimeline = tab;
  }

  loadCartData() {
    console.log('getCartData()', this.cartService.getCartData());
    this.cartData = this.cartService.getCartData();
    this.combinationId = this.cartData.combId;
    this.flightsCartData = this.cartService.getCartData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.FLIGHT);
    this.accommodationCartData = this.cartService.getCartData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC);
    this.transferCartData = this.cartService.getCartData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRANSFER);
    this.carRentalCartData = this.cartService.getCartData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.CAR_RENTAL);
    this.trainCartData = this.cartService.getCartData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRAIN);
    this.timelineData = _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_5__.CartUtils.generateTimelineData(this.cartData.items, true, this.translateService);

    if (_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId) {
      const travellersData = _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_5__.CartUtils.getTravellersData(this.cartService.getCartData().items);
      this.numberOfPassengers = travellersData === null || travellersData === void 0 ? void 0 : travellersData.total;
    }
    /* if (this.flightsCartData) {
        this.flightsService.getPackages(this.flightsCartData.items[0].selectedItem.data).subscribe(
            (packages: Flight[]) => {
                this.flightPackages = packages;
            },
            (error: any) => {}
        );
    }*/

  }

  initializeComponent() {
    this.cartService.reInit().then(() => {
      this.loadCartData();
    });
    this.repriceListenerId = this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_REPRICED, this.loadCartData, this);
  }

}

ResultsSummaryComponent.ɵfac = function ResultsSummaryComponent_Factory(t) {
  return new (t || ResultsSummaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_16__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdirectiveInject"](_services_modules_transport_trains_train_utils__WEBPACK_IMPORTED_MODULE_6__.TrainUtilsService));
};

ResultsSummaryComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵdefineComponent"]({
  type: ResultsSummaryComponent,
  selectors: [["tz-results-summary"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵInheritDefinitionFeature"]],
  decls: 6,
  vars: 6,
  consts: [[1, "results-summary-container", "flex", "flex-row"], [4, "ngIf"], ["class", "results-summary-timeline-container flex", 4, "ngIf"], ["class", "results-summary-service-list flex flex-column", 4, "ngIf"], ["class", "tz-fixed-bottom", 4, "ngIf"], [3, "selectedTab", "tabChange"], [1, "results-summary-timeline-container", "flex"], [3, "cartItems", "selectedId", 4, "ngIf"], [3, "cartItems", "selectedId"], [1, "results-summary-service-list", "flex", "flex-column"], ["class", "timeline-btn", 3, "click", 4, "ngIf"], [1, "timeline-btn", 3, "click"], [1, "tz-icomoon-icon", "icon-timeline-end-icon"], ["data-test", "results-summery-selected-flights", 3, "flightCartData", "combId", "mouseenter", "mouseleave", "removedItem", "changeTickets", "changeOptions"], [1, "tz-block-separator-title"], ["data-test", "results-summery-selected-trains", 3, "trainItems", "combId", "selectedId", "changeTickets", "changeOptions", "removedItem"], ["data-test", "results-summery-selected-accommodations", 3, "accommodationCartData", "combId", "mouseenter", "mouseleave", "removedItem", "changeHotel", "changeRooms"], ["data-test", "results-summery-selected-transfers", 3, "transferCartData", "combId", "isSummary", "changeTransfer", "removedItem", "selectedId"], ["data-test", "results-summery-selected-car-rental", 3, "serviceList", "carRentalCartData", "combId", "mouseenter", "mouseleave", "changeCarRentals", "removedItem", "showCarRentalDetails", "modifyCarRentalsOptions"], [1, "tz-fixed-bottom"], [3, "totalPrice", "priceCurrency", "cartData", "gotoCheckout"]],
  template: function ResultsSummaryComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](1, ResultsSummaryComponent_div_1_Template, 2, 1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](2, ResultsSummaryComponent_div_2_Template, 2, 1, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipe"](3, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](4, ResultsSummaryComponent_div_4_Template, 4, 4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵtemplate"](5, ResultsSummaryComponent_div_5_Template, 2, 3, "div", 4);
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mobSummaryTimeline === "timeline" || _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵpipeBind1"](3, 4, ctx.isMobile$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.mobSummaryTimeline === "summary");
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice && ctx.cartData);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _components_summary_timeline_tabs_summary_timeline_tabs_component__WEBPACK_IMPORTED_MODULE_7__.SummaryTimelineTabsComponent, _trip_timeline_trip_timeline_component__WEBPACK_IMPORTED_MODULE_8__.TripTimelineComponent, _transport_flights_components_selected_flights_selected_flights_component__WEBPACK_IMPORTED_MODULE_9__.SelectedFlightsComponent, _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_10__.BlockSeparatorComponent, _transport_trains_components_selected_trains_selected_trains_component__WEBPACK_IMPORTED_MODULE_11__.SelectedTrainsComponent, _accommodations_components_selected_accommodations_selected_accommodations_component__WEBPACK_IMPORTED_MODULE_12__.SelectedAccommodationsComponent, _transfers_components_selected_transfers_selected_transfers_component__WEBPACK_IMPORTED_MODULE_13__.SelectedTransfersComponent, _car_rentals_components_selected_car_rentals_selected_car_rentals_component__WEBPACK_IMPORTED_MODULE_14__.SelectedCarRentalsComponent, _components_mob_book_block_mob_book_block_component__WEBPACK_IMPORTED_MODULE_15__.MobBookBlockComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.AsyncPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_18__.TranslatePipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n    width: 100%;\n    padding-bottom: 5.625rem;\n  }\n}\n[_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n  flex: 1;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n}\n[_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .results-summary-timeline-container[_ngcontent-%COMP%] {\n  width: 290px;\n  padding: 0.813rem 1.563rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .results-summary-timeline-container[_ngcontent-%COMP%] {\n    padding: 1.25rem 1.5rem;\n    margin-top: 0.5rem;\n    width: 100%;\n    background-color: var(--color-primary-white);\n  }\n}\n[_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .timeline-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .timeline-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0.3rem;\n  font-weight: var(--font-weight-regular);\n  font-size: 0.75rem;\n  line-height: 1.25rem;\n  letter-spacing: 0.25px;\n  color: var(--color-main-text);\n}\n[_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .timeline-btn[_ngcontent-%COMP%]   .icon-timeline-end-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--color-text-light-gray);\n}\n[_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .results-summary-service-list[_ngcontent-%COMP%] {\n  flex: auto;\n  max-width: 880px;\n  margin-left: auto;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .results-summary-service-list[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]   .sidebar-for-mobile[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdHMtc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7QUFESjtBQ2lESTtFRGxESjtJQUtRLGFBQUE7SUFDQSxzQkFBQTtJQUNBLDhCQUFBO0lBQ0EsWUFBQTtJQUNBLFdBQUE7SUFDQSx3QkFBQTtFQUFOO0FBQ0Y7QUFFSTtFQUNJLG1CQUFBO0VBQ0EsT0FBQTtBQUFSO0FDbUNJO0VEckNBO0lBS1EsaUNBQUE7RUFDVjtBQUNGO0FBQ1E7RUFDSSxZQUFBO0VBQ0EsMEJBQUE7QUFDWjtBQzBCSTtFRDdCSTtJQUtRLHVCQUFBO0lBQ0Esa0JBQUE7SUFDQSxXQUFBO0lBQ0EsNENBQUE7RUFFZDtBQUNGO0FBQ1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZUFBQTtBQUNaO0FBQ1k7RUFDSSxtQkFBQTtFQUNBLHVDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsNkJBQUE7QUFDaEI7QUFFWTtFQUNJLGtCQUFBO0VBQ0EsbUNBQUE7QUFBaEI7QUFJUTtFQUNJLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0FBRlo7QUNMSTtFRElJO0lBTVEsY0FBQTtFQURkO0FBQ0Y7QUFLSTtFQUNJLGtCQUFBO0FBSFIiLCJmaWxlIjoicmVzdWx0cy1zdW1tYXJ5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAndXRpbHMvbWl4aW5zJztcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDUuNjI1cmVtO1xuICAgIH1cblxuICAgIC5yZXN1bHRzLXN1bW1hcnktY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbiAhaW1wb3J0YW50O1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlc3VsdHMtc3VtbWFyeS10aW1lbGluZS1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDI5MHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMC44MTNyZW0gMS41NjNyZW07XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWVsaW5lLWJ0biB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuM3JlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjI1cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tdGV4dCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5pY29uLXRpbWVsaW5lLWVuZC1pY29uIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbGlnaHQtZ3JheSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucmVzdWx0cy1zdW1tYXJ5LXNlcnZpY2UtbGlzdCB7XG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiA4ODBweDtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuXG4gICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNpZGViYXItZm9yLW1vYmlsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 49997:
/*!***************************************************************************!*\
  !*** ./src/app/modules/results/results-summary/results-summary.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsSummaryModule": () => (/* binding */ ResultsSummaryModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _results_summary_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./results-summary-routing.module */ 15022);
/* harmony import */ var _results_summary_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./results-summary.component */ 35139);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../results-cart-item-selection.module */ 8793);
/* harmony import */ var _trip_timeline_trip_timeline_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../trip-timeline/trip-timeline.module */ 34514);
/* harmony import */ var _components_mob_book_block_mob_book_block_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/mob-book-block/mob-book-block.component */ 48591);
/* harmony import */ var _components_summary_timeline_tabs_summary_timeline_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/summary-timeline-tabs/summary-timeline-tabs.component */ 65207);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);









class ResultsSummaryModule {
}
ResultsSummaryModule.ɵfac = function ResultsSummaryModule_Factory(t) { return new (t || ResultsSummaryModule)(); };
ResultsSummaryModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: ResultsSummaryModule });
ResultsSummaryModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_3__.ResultsCartItemSelectionModule,
            _results_summary_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResultsSummaryRoutingModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
            _trip_timeline_trip_timeline_module__WEBPACK_IMPORTED_MODULE_4__.TripTimelineModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](ResultsSummaryModule, { declarations: [_results_summary_component__WEBPACK_IMPORTED_MODULE_1__.ResultsSummaryComponent, _components_mob_book_block_mob_book_block_component__WEBPACK_IMPORTED_MODULE_5__.MobBookBlockComponent, _components_summary_timeline_tabs_summary_timeline_tabs_component__WEBPACK_IMPORTED_MODULE_6__.SummaryTimelineTabsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
        _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_3__.ResultsCartItemSelectionModule,
        _results_summary_routing_module__WEBPACK_IMPORTED_MODULE_0__.ResultsSummaryRoutingModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _trip_timeline_trip_timeline_module__WEBPACK_IMPORTED_MODULE_4__.TripTimelineModule] }); })();


/***/ }),

/***/ 72583:
/*!******************************************************************!*\
  !*** ./src/app/services/modules/transport/trains/train.utils.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainUtilsService": () => (/* binding */ TrainUtilsService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngx-translate/core */ 87514);


class TrainUtilsService {
    constructor(translateService) {
        this.translateService = translateService;
    }
    static buildTrainSelection(selectedItem) {
        if (!selectedItem) {
            return {};
        }
        return {
            id: selectedItem.id,
            tzClass: selectedItem.data.onward.trainClass.tzClass,
            groupId: selectedItem.data.onward.groupId,
            tripId: selectedItem.data.onward.tripID,
            selected: true,
            fromLocation: selectedItem.data.onward.departure.location.city,
            toLocation: selectedItem.data.onward.arrival.location.city,
            tzSubClass: selectedItem.data.onward.trainClass.tzSubClass,
            classId: selectedItem.data.onward.id,
            journeyType: selectedItem.type,
            showDetails: false,
        };
    }
    formSectionTitle(isRoundTrip, selected, flyType, count, from, to) {
        if (selected) {
            return this.buildSelectedTitle(false, from, to);
        }
        else {
            const sectionType = isRoundTrip
                ? flyType === 'onwardJourney'
                    ? 'TRAIN.OUTBOUND'
                    : 'TRAIN.RETURN_TRAIN'
                : flyType === 'onwardJourney'
                    ? 'TRAIN.OUTBOUND_ONE_WAY'
                    : 'TRAIN.RETURN_TRAIN';
            const tripType = this.translateService.instant(sectionType);
            return this.translateService.instant('GENERAL.' + (count > 1 ? 'OPTIONS_FOUND' : 'OPTION_FOUND'), {
                tripType,
                resultsCount: count,
            });
        }
    }
    getSelectedTitle(trainCartData) {
        if (trainCartData && trainCartData.items && trainCartData.items.length) {
            const from = trainCartData.items[0].selectedItem.data.onward.departure.location.city;
            const to = trainCartData.items[0].selectedItem.data.onward.arrival.location.city;
            return this.buildSelectedTitle(trainCartData.items.length > 1 && !trainCartData.items[0].isVirtual.j, from, to);
        }
        return '';
    }
    buildSelectedTitle(isRoundTrip, from, to) {
        return this.translateService.instant(isRoundTrip ? 'TRAIN.SELECTED' : 'TRAIN.SELECTED_ONE_WAY', {
            transportRoute: `${from} – ${to}` + (isRoundTrip ? ` – ${from}` : ''),
        });
    }
}
TrainUtilsService.ɵfac = function TrainUtilsService_Factory(t) { return new (t || TrainUtilsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_1__.TranslateService)); };
TrainUtilsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TrainUtilsService, factory: TrainUtilsService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_results_results-summary_results-summary_module_ts.js.map