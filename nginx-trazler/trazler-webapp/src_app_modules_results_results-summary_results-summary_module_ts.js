"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_results_results-summary_results-summary_module_ts"],{

/***/ 48591:
/*!*******************************************************************************************************!*\
  !*** ./src/app/modules/results/results-summary/components/mob-book-block/mob-book-block.component.ts ***!
  \*******************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobBookBlockComponent": () => (/* binding */ MobBookBlockComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../shared/pipes/tz-currency.pipe */ 98967);





function MobBookBlockComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "\u00A0|\u00A0");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 4, "GENERAL.PRICE_FOR"), " ", ctx_r0.numberOfPassengers, " ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 6, "TRAVELLER." + (ctx_r0.numberOfPassengers > 1 ? "PERSONS" : "PERSON")), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](7, 8, "TRAIN.ALL_TAXES"), " ");
} }
class MobBookBlockComponent {
    constructor() {
        this.gotoCheckout = new _angular_core__WEBPACK_IMPORTED_MODULE_1__.EventEmitter();
    }
    ngOnInit() { }
    onGotoCheckout() {
        this.gotoCheckout.emit();
    }
}
MobBookBlockComponent.ɵfac = function MobBookBlockComponent_Factory(t) { return new (t || MobBookBlockComponent)(); };
MobBookBlockComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: MobBookBlockComponent, selectors: [["tz-mob-book-block"]], inputs: { totalPrice: "totalPrice", priceCurrency: "priceCurrency", numberOfPassengers: "numberOfPassengers" }, outputs: { gotoCheckout: "gotoCheckout" }, decls: 14, vars: 11, consts: [[1, "mob-book-block"], [1, "mob-book-block__info-block"], [1, "mob-book-block__info-block-text"], [1, "mob-book-block__summary"], [1, "mob-book-block__price"], ["class", "mob-book-block__description", 4, "ngIf"], [1, "mob-book-block__book-btn-block"], ["data-test", "book-btn", 1, "tz-mob-btn", "tz-mob-btn--tertiary", 3, "click"], [1, "mob-book-block__description"], [1, "text-vertical-divider"]], template: function MobBookBlockComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "p", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 3)(6, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](8, "tzCurrency");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, MobBookBlockComponent_p_9_Template, 8, 10, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "button", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function MobBookBlockComponent_Template_button_click_11_listener() { return ctx.onGotoCheckout(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](13, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 4, "GENERAL.TOTAL"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind2"](8, 6, ctx.totalPrice, ctx.priceCurrency));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.numberOfPassengers);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](13, 9, "GENERAL.BOOK"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__.TranslatePipe, _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_0__.TzCurrencyPipe], styles: ["*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.mob-book-block[_ngcontent-%COMP%] {\n  border-top: 0.0625rem solid var(--color-border-mobile);\n  background-color: var(--ion-color-primary-contrast);\n  padding: 0.5rem 1rem;\n  margin-top: 0.5rem;\n}\n\n.mob-book-block__info-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n}\n\n.mob-book-block__info-block-text[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 150%;\n  color: var(--color-text-mobile);\n  margin-bottom: 0.25rem;\n}\n\n.mob-book-block__summary[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n  justify-content: flex-start;\n  gap: 0.28125rem;\n}\n\n.mob-book-block__price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  color: var(--ion-color-primary);\n}\n\n.mob-book-block__description[_ngcontent-%COMP%] {\n  font-style: italic;\n  font-weight: 300;\n  font-size: 0.6875rem;\n  line-height: 0.8125rem;\n  color: var(--color-grey-mobile);\n}\n\n.mob-book-block__description[_ngcontent-%COMP%]   .text-vertical-divider[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n\n.mob-book-block__book-btn-block[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-top: 0.71875rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1ib29rLWJsb2NrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUVBO0VBQ0ksc0RBQUE7RUFDQSxtREFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFDSTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHVCQUFBO0FBQ1I7O0FBRUk7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0FBQVI7O0FBR0k7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZUFBQTtBQURSOztBQUlJO0VBQ0ksZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFGUjs7QUFLSTtFQUNJLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7QUFIUjs7QUFLUTtFQUNJLGdCQUFBO0FBSFo7O0FBT0k7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQUxSIiwiZmlsZSI6Im1vYi1ib29rLWJsb2NrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuLm1vYi1ib29rLWJsb2NrIHtcbiAgICBib3JkZXItdG9wOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLW1vYmlsZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgIG1hcmdpbi10b3A6IDAuNXJlbTtcblxuICAgICZfX2luZm8tYmxvY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIH1cblxuICAgICZfX2luZm8tYmxvY2stdGV4dCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgIH1cblxuICAgICZfX3N1bW1hcnkge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICAgICAgZ2FwOiAwLjI4MTI1cmVtO1xuICAgIH1cblxuICAgICZfX3ByaWNlIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIH1cblxuICAgICZfX2Rlc2NyaXB0aW9uIHtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBmb250LXdlaWdodDogMzAwO1xuICAgICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuODEyNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXktbW9iaWxlKTtcblxuICAgICAgICAmIC50ZXh0LXZlcnRpY2FsLWRpdmlkZXIge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICZfX2Jvb2stYnRuLWJsb2NrIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNzE4NzVyZW07XG4gICAgfVxufVxuIl19 */"] });


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
    } }, directives: [_angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__.MatButtonToggleGroup, _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_1__.MatButtonToggle], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: ["@media (max-width: 920px) {\n  .summary-timeline-tabs[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%] {\n    box-shadow: unset;\n    border: 0;\n    border-radius: unset;\n    display: flex;\n    align-items: center;\n    height: auto;\n    padding: 0.125rem;\n    background-color: var(--ion-color-primary-contrast);\n  }\n  .summary-timeline-tabs[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]     .mat-button-toggle-label-content {\n    line-height: 2.25rem;\n  }\n  .summary-timeline-tabs[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n    width: 100%;\n    border-color: var(--color-main-purple);\n    font-size: 0.875rem;\n    line-height: 1rem;\n    color: var(--color-text-mobile);\n  }\n  .summary-timeline-tabs[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:first-child {\n    font-weight: 600;\n    border-radius: 0.125rem 0 0 0.125rem;\n  }\n  .summary-timeline-tabs[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:last-child {\n    font-weight: 500;\n    border-radius: 0 0.125rem 0.125rem 0;\n  }\n  .summary-timeline-tabs[_ngcontent-%COMP%]   mat-button-toggle-group[_ngcontent-%COMP%]    > *.mat-button-toggle-checked[_ngcontent-%COMP%] {\n    background-color: var(--color-main-purple);\n    color: var(--color-primary-white);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIiwic3VtbWFyeS10aW1lbGluZS10YWJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9ESTtFQ2pEQTtJQUVRLGlCQUFBO0lBQ0EsU0FBQTtJQUNBLG9CQUFBO0lBQ0EsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtJQUNBLGlCQUFBO0lBQ0EsbURBQUE7RUFGVjtFQUlVO0lBQ0ksb0JBQUE7RUFGZDtFQUtVO0lBQ0ksV0FBQTtJQUNBLHNDQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLCtCQUFBO0VBSGQ7RUFLYztJQUNJLGdCQUFBO0lBQ0Esb0NBQUE7RUFIbEI7RUFNYztJQUNJLGdCQUFBO0lBQ0Esb0NBQUE7RUFKbEI7RUFPYztJQUNJLDBDQUFBO0lBQ0EsaUNBQUE7RUFMbEI7QUFDRiIsImZpbGUiOiJzdW1tYXJ5LXRpbWVsaW5lLXRhYnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iLCJAaW1wb3J0ICd1dGlscy9taXhpbnMnO1xuXG4uc3VtbWFyeS10aW1lbGluZS10YWJzIHtcbiAgICBtYXQtYnV0dG9uLXRvZ2dsZS1ncm91cCB7XG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcbiAgICAgICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IHVuc2V0O1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjEyNXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcblxuICAgICAgICAgICAgOjpuZy1kZWVwIC5tYXQtYnV0dG9uLXRvZ2dsZS1sYWJlbC1jb250ZW50IHtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMi4yNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJiA+ICoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcblxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjEyNXJlbSAwIDAgMC4xMjVyZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCAwLjEyNXJlbSAwLjEyNXJlbSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYubWF0LWJ1dHRvbi10b2dnbGUtY2hlY2tlZCB7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktd2hpdGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"] });


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
    _angular_core__WEBPACK_IMPORTED_MODULE_16__["ɵɵproperty"]("totalPrice", ctx_r3.cartData.itemPrice.listPrice)("priceCurrency", ctx_r3.cartData.itemPrice.listPriceCur)("numberOfPassengers", ctx_r3.numberOfPassengers);
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
  consts: [[1, "results-summary-container", "flex", "flex-row"], [4, "ngIf"], ["class", "results-summary-timeline-container flex", 4, "ngIf"], ["class", "results-summary-service-list flex flex-column", 4, "ngIf"], ["class", "tz-fixed-bottom", 4, "ngIf"], [3, "selectedTab", "tabChange"], [1, "results-summary-timeline-container", "flex"], [3, "cartItems", "selectedId", 4, "ngIf"], [3, "cartItems", "selectedId"], [1, "results-summary-service-list", "flex", "flex-column"], ["class", "timeline-btn", 3, "click", 4, "ngIf"], [1, "timeline-btn", 3, "click"], [1, "tz-icomoon-icon", "icon-timeline-end-icon"], ["data-test", "results-summery-selected-flights", 3, "flightCartData", "combId", "mouseenter", "mouseleave", "removedItem", "changeTickets", "changeOptions"], [1, "tz-block-separator-title"], ["data-test", "results-summery-selected-trains", 3, "trainItems", "combId", "selectedId", "changeTickets", "changeOptions", "removedItem"], ["data-test", "results-summery-selected-accommodations", 3, "accommodationCartData", "combId", "mouseenter", "mouseleave", "removedItem", "changeHotel", "changeRooms"], ["data-test", "results-summery-selected-transfers", 3, "transferCartData", "combId", "isSummary", "changeTransfer", "removedItem", "selectedId"], ["data-test", "results-summery-selected-car-rental", 3, "serviceList", "carRentalCartData", "combId", "mouseenter", "mouseleave", "changeCarRentals", "removedItem", "showCarRentalDetails", "modifyCarRentalsOptions"], [1, "tz-fixed-bottom"], [3, "totalPrice", "priceCurrency", "numberOfPassengers", "gotoCheckout"]],
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
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%] {\n    flex-direction: column;\n    justify-content: space-between;\n    height: 100%;\n    width: 100%;\n    margin-bottom: 1.5rem;\n  }\n}\n[_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n  flex: 1;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%] {\n    flex-direction: column !important;\n  }\n}\n[_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .results-summary-timeline-container[_ngcontent-%COMP%] {\n  width: 290px;\n  padding: 0.813rem 1.563rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .results-summary-timeline-container[_ngcontent-%COMP%] {\n    padding: 1.25rem 1.5rem;\n    margin-top: 0.5rem;\n    width: 100%;\n    background-color: var(--color-primary-white);\n  }\n}\n[_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .timeline-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  width: -moz-fit-content;\n  width: fit-content;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .timeline-btn[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 0.3rem;\n  font-weight: var(--font-weight-regular);\n  font-size: 0.75rem;\n  line-height: 1.25rem;\n  letter-spacing: 0.25px;\n  color: var(--color-main-text);\n}\n[_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .timeline-btn[_ngcontent-%COMP%]   .icon-timeline-end-icon[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  color: var(--color-text-light-gray);\n}\n[_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .results-summary-service-list[_ngcontent-%COMP%] {\n  flex: auto;\n  max-width: 880px;\n  margin-left: auto;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .results-summary-container[_ngcontent-%COMP%]   .results-summary-service-list[_ngcontent-%COMP%] {\n    margin-left: 0;\n  }\n}\n[_nghost-%COMP%]   .sidebar-for-mobile[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc3VsdHMtc3VtbWFyeS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7QUFESjtBQ2lESTtFRGxESjtJQUtRLHNCQUFBO0lBQ0EsOEJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtJQUNBLHFCQUFBO0VBQU47QUFDRjtBQUVJO0VBQ0ksbUJBQUE7RUFDQSxPQUFBO0FBQVI7QUNvQ0k7RUR0Q0E7SUFLUSxpQ0FBQTtFQUNWO0FBQ0Y7QUFDUTtFQUNJLFlBQUE7RUFDQSwwQkFBQTtBQUNaO0FDMkJJO0VEOUJJO0lBS1EsdUJBQUE7SUFDQSxrQkFBQTtJQUNBLFdBQUE7SUFDQSw0Q0FBQTtFQUVkO0FBQ0Y7QUFDUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxlQUFBO0FBQ1o7QUFDWTtFQUNJLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSw2QkFBQTtBQUNoQjtBQUVZO0VBQ0ksa0JBQUE7RUFDQSxtQ0FBQTtBQUFoQjtBQUlRO0VBQ0ksVUFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFGWjtBQ0pJO0VER0k7SUFNUSxjQUFBO0VBRGQ7QUFDRjtBQUtJO0VBQ0ksa0JBQUE7QUFIUiIsImZpbGUiOiJyZXN1bHRzLXN1bW1hcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd1dGlscy9taXhpbnMnO1xuXG46aG9zdCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4OiAxO1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuXG4gICAgLnJlc3VsdHMtc3VtbWFyeS1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAucmVzdWx0cy1zdW1tYXJ5LXRpbWVsaW5lLWNvbnRhaW5lciB7XG4gICAgICAgICAgICB3aWR0aDogMjkwcHg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjgxM3JlbSAxLjU2M3JlbTtcblxuICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAxLjI1cmVtIDEuNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGltZWxpbmUtYnRuIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMC4zcmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1yZWd1bGFyKTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10ZXh0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmljb24tdGltZWxpbmUtZW5kLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1saWdodC1ncmF5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5yZXN1bHRzLXN1bW1hcnktc2VydmljZS1saXN0IHtcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDg4MHB4O1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2lkZWJhci1mb3ItbW9iaWxlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIH1cbn1cbiIsIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiJdfQ== */"]
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


/***/ })

}]);
//# sourceMappingURL=src_app_modules_results_results-summary_results-summary_module_ts.js.map