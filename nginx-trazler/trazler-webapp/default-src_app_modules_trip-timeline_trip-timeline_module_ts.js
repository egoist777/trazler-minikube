"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modules_trip-timeline_trip-timeline_module_ts"],{

/***/ 37479:
/*!*********************************************************************************************************!*\
  !*** ./src/app/modules/trip-timeline/components/trip-timeline-dialog/trip-timeline-dialog.component.ts ***!
  \*********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripTimelineDialogComponent": () => (/* binding */ TripTimelineDialogComponent)
/* harmony export */ });
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _trip_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../trip-timeline.component */ 17887);





function TripTimelineDialogComponent_tz_trip_timeline_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "tz-trip-timeline", 3);
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("cartItems", ctx_r0.cartItems);
} }
class TripTimelineDialogComponent {
    constructor(data, mdDialogRef) {
        this.data = data;
        this.mdDialogRef = mdDialogRef;
        this.cartItems = [];
        this.cartItems = data.cartItems;
    }
    closeTimeline() {
        this.mdDialogRef.close();
    }
}
TripTimelineDialogComponent.ɵfac = function TripTimelineDialogComponent_Factory(t) { return new (t || TripTimelineDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__.MatDialogRef)); };
TripTimelineDialogComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: TripTimelineDialogComponent, selectors: [["tz-trip-timeline-dialog"]], decls: 3, vars: 1, consts: [[1, "trip-timeline-container"], [1, "tz-icon-clear", 3, "click"], [3, "cartItems", 4, "ngIf"], [3, "cartItems"]], template: function TripTimelineDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function TripTimelineDialogComponent_Template_div_click_1_listener() { return ctx.closeTimeline(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, TripTimelineDialogComponent_tz_trip_timeline_2_Template, 1, 1, "tz-trip-timeline", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.cartItems.length !== 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.NgIf, _trip_timeline_component__WEBPACK_IMPORTED_MODULE_0__.TripTimelineComponent], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n\n.trip-timeline-container[_ngcontent-%COMP%] {\n  overflow: auto;\n  height: 100%;\n  padding: 2rem 3.8125rem 1rem 2.5rem;\n  position: relative;\n}\n\n.tz-icon-clear[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.25rem;\n  right: 1.25rem;\n  font-size: 0.75rem;\n  color: var(--color-text-light-gray);\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaXAtdGltZWxpbmUtZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtBQUNKOztBQUVBO0VBQ0ksY0FBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQ0FBQTtFQUNBLGVBQUE7QUFDSiIsImZpbGUiOiJ0cmlwLXRpbWVsaW5lLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRyaXAtdGltZWxpbmUtY29udGFpbmVyIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcGFkZGluZzogMnJlbSAzLjgxMjVyZW0gMXJlbSAyLjVyZW07XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4udHotaWNvbi1jbGVhciB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMS4yNXJlbTtcbiAgICByaWdodDogMS4yNXJlbTtcbiAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbGlnaHQtZ3JheSk7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */"] });


/***/ }),

/***/ 17887:
/*!******************************************************************!*\
  !*** ./src/app/modules/trip-timeline/trip-timeline.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripTimelineComponent": () => (/* binding */ TripTimelineComponent)
/* harmony export */ });
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/pipes/tz-date.pipe */ 92456);
/* harmony import */ var _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/css-mapping */ 88425);
/* harmony import */ var _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/modules/cart/utils/cart.utils */ 14770);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/cart-status */ 32304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);












const _c0 = function (a0, a1) { return [a0, a1]; };
function TripTimelineComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeline_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](2, _c0, timeline_r1.timelineIcon, "color-" + timeline_r1.serviceStr));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", timeline_r1.timelineLabel, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function TripTimelineComponent_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeline_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", "color-" + timeline_r1.serviceStr);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", timeline_r1.title, " ");
} }
const _c1 = function (a0) { return { mob: a0 }; };
function TripTimelineComponent_div_4_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "div", 15)(2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeline_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c1, ctx_r5.platformService.isMobileDevice));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](5, _c0, timeline_r1.timelineIcon, "color-" + timeline_r1.serviceStr));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("innerHtml", timeline_r1.timelineLabel, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeHtml"]);
} }
function TripTimelineComponent_div_4_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "div", 19);
} }
function TripTimelineComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "\u2022");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
const _c2 = function (a0, a1) { return { "selected-item": a0, "disabled-item": a1 }; };
function TripTimelineComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TripTimelineComponent_div_4_div_1_Template, 3, 5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TripTimelineComponent_div_4_div_2_Template, 2, 2, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TripTimelineComponent_div_4_div_3_Template, 3, 8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TripTimelineComponent_div_4_div_4_Template, 1, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TripTimelineComponent_div_4_div_5_Template, 6, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const timeline_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction2"](6, _c2, timeline_r1.id === ctx_r0.selectedId, timeline_r1.disabled));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", timeline_r1.type === "start");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", timeline_r1.addLine);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", timeline_r1.type === "end");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", timeline_r1.addDots && ctx_r0.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", timeline_r1.addDots && !ctx_r0.platformService.isMobileDevice);
} }
const tripTrip = {
    flight: {
        start: 'TIMELINE.DEPARTURE',
        end: 'TIMELINE.ARRIVAL',
    },
    train: {
        start: 'TIMELINE.DEPARTURE',
        end: 'TIMELINE.ARRIVAL',
    },
    transfer: {
        start: 'TIMELINE.DEPARTURE',
        end: 'TIMELINE.ARRIVAL',
    },
    hotel: {
        start: 'HOTELS.CHECK_IN',
        end: 'HOTELS.CHECK_OUT',
    },
    rentcar: {
        start: 'CAR_RENTAL.PICK_UP_TIMELINE',
        end: 'CAR_RENTAL.DROP_OFF_TIMELINE',
    },
};
class TripTimelineComponent {
    constructor(translateService, datePipe, settingsService, changeDetectorRef, platformService) {
        this.translateService = translateService;
        this.datePipe = datePipe;
        this.settingsService = settingsService;
        this.changeDetectorRef = changeDetectorRef;
        this.platformService = platformService;
        this.cartItems = [];
        this.selectedId = '';
        this.timelineList = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_7__.Subject();
    }
    ngOnInit() {
        this.initializeTimelineComponent();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    getTimelineIcon(type, tripType) {
        if (type === 'flight' && tripType) {
            return _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__.CSS_MAPPING[type].timelineIcons[tripType];
        }
        return _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__.CSS_MAPPING[type].icon;
    }
    formTimelineLable(date, type) {
        const timeFormat = this.settingsService.locales.DATETIME_FORMATS.shortTime;
        const dateFormat = this.settingsService.locales.DATETIME_FORMATS.shortDateMonth;
        const dateStr = this.datePipe.transform(date, dateFormat);
        const timeStr = this.datePipe.transform(date, timeFormat);
        return `${dateStr} <span class="text-vertical-divider">|</span>
                ${timeStr} <span class="text-vertical-divider">|</span>
                ${this.translateService.instant(type)}`;
    }
    hasValidBookingOptions(options) {
        return options.some((option) => option.status <= _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_3__.CartStatus.STATUS_CONFIRMED || option.status === _core_constants_cart_status__WEBPACK_IMPORTED_MODULE_3__.CartStatus.STATUS_PRICE_CHANGED);
    }
    formTimelineData(timeline, type) {
        const date = new Date(type === 'start' ? timeline.startDate : timeline.endDate);
        return {
            id: timeline.hash,
            serviceId: timeline.serviceId,
            serviceStr: timeline.type,
            type,
            timelineIcon: this.getTimelineIcon(timeline.type, type),
            timelineLabel: this.formTimelineLable(date, tripTrip[timeline.type][type]),
            timelineColor: _core_constants_css_mapping__WEBPACK_IMPORTED_MODULE_1__.CSS_MAPPING[timeline.type].color,
            title: timeline.title
                ? timeline.title
                : this.translateService.instant('SERVICES.' + timeline.type.toUpperCase()),
            time: date.getTime(),
            disabled: !this.hasValidBookingOptions(timeline.bookingOptions),
        };
    }
    formTimeline() {
        const timelineData = _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_2__.CartUtils.generateTimelineData(this.cartItems, true, this.translateService);
        if (!timelineData || timelineData.length === 0) {
            return;
        }
        const timelineList = [];
        for (const timeline of timelineData) {
            timelineList.push(Object.assign(Object.assign({}, this.formTimelineData(timeline, 'start')), { curIdx: timelineList.length }));
            timelineList.push(Object.assign(Object.assign({}, this.formTimelineData(timeline, 'end')), { curIdx: timelineList.length }));
        }
        timelineList.sort((a, b) => {
            if (a.time === b.time) {
                if (a.type === b.type) {
                    let startDelta;
                    if (a.type === 'end') {
                        startDelta =
                            +new Date(timelineList[b.curIdx - 1].time) - +new Date(timelineList[a.curIdx - 1].time);
                    }
                    else {
                        startDelta =
                            +new Date(timelineList[b.curIdx + 1].time) - +new Date(timelineList[a.curIdx + 1].time);
                    }
                    if (startDelta === 0) {
                        return a.type === 'end' ? a.serviceId - b.serviceId : b.serviceId - a.serviceId;
                    }
                    return startDelta;
                }
                else {
                    return a.type < b.type ? -1 : 1;
                }
            }
            return a.time - b.time;
        });
        const totalCount = timelineList.length;
        for (const [idx, timeLine] of timelineList.entries()) {
            const nxtIdx = idx + 1;
            const preIdx = idx - 1;
            if (timeLine.type === 'start' || (preIdx !== -1 && timeLine.id !== timelineList[preIdx].id)) {
                timelineList[idx].addLine = true;
            }
            if (nxtIdx < totalCount && (timeLine.id !== timelineList[nxtIdx].id || timeLine.type === 'end')) {
                timelineList[idx].addDots = true;
            }
        }
        this.timelineList = timelineList;
        this.changeDetectorRef.detectChanges();
    }
    initializeTimelineComponent() {
        this.formTimeline();
        this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_8__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
            this.formTimeline();
        });
    }
}
TripTimelineComponent.ɵfac = function TripTimelineComponent_Factory(t) { return new (t || TripTimelineComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_0__.TzDatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_4__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_6__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_5__.PlatformService)); };
TripTimelineComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TripTimelineComponent, selectors: [["tz-trip-timeline"]], inputs: { cartItems: "cartItems", selectedId: "selectedId" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵProvidersFeature"]([_shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_0__.TzDatePipe])], decls: 8, vars: 1, consts: [[1, "trip-planner-timeline-conteiner"], [1, "start-label-container"], [1, "tz-icomoon-icon", "icon-timeline-start-icon"], ["translate", "TIMELINE.START", 1, "end-label"], [3, "ngClass", 4, "ngFor", "ngForOf"], [1, "end-label-container"], [1, "tz-icomoon-icon", "icon-timeline-end-icon"], ["translate", "TIMELINE.END", 1, "end-label"], [3, "ngClass"], ["class", "trip-label-container", 4, "ngIf"], ["class", "trip-title", 3, "ngClass", 4, "ngIf"], ["class", "trip-label-container", 3, "ngClass", 4, "ngIf"], ["class", "trip-end-line", 4, "ngIf"], ["class", "trip-end", 4, "ngIf"], [1, "trip-label-container"], [1, "tz-icomoon-icon", 3, "ngClass"], ["data-test", "trip-info", 1, "trip-label", 3, "innerHtml"], [1, "trip-title", 3, "ngClass"], [1, "trip-label-container", 3, "ngClass"], [1, "trip-end-line"], [1, "trip-end"]], template: function TripTimelineComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](4, TripTimelineComponent_div_4_Template, 6, 9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](6, "div", 6)(7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.timelineList);
    } }, directives: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateDirective, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf], styles: [":host {\n  width: 100%;\n}\n\n.trip-planner-timeline-conteiner {\n  width: inherit;\n}\n\n@media (max-width: 920px) {\n  .trip-planner-timeline-conteiner {\n    background-color: var(--color-primary-white);\n    margin: 0;\n    margin-top: 0.25rem;\n  }\n}\n\n.trip-planner-timeline-conteiner .tz-icomoon-icon {\n  font-size: 1.5rem;\n  line-height: 1.5rem;\n  height: 1.5rem;\n}\n\n.trip-planner-timeline-conteiner .tz-icomoon-icon.service-icon-hotel, .trip-planner-timeline-conteiner .tz-icomoon-icon.service-icon-transfer, .trip-planner-timeline-conteiner .tz-icomoon-icon.service-icon-car {\n  font-size: 1.25rem;\n  height: 1.25rem;\n  line-height: 1.25rem;\n}\n\n.trip-planner-timeline-conteiner .trip-end-line {\n  border-top: 0.0625rem solid var(--upgrade-right-border);\n  margin: 1.25rem 0 1.25rem auto;\n  width: calc(100% - 3.75rem);\n}\n\n.trip-planner-timeline-conteiner .label-centered {\n  align-items: center !important;\n}\n\n.trip-planner-timeline-conteiner .trip-label-container {\n  display: flex;\n  align-items: center;\n}\n\n.trip-planner-timeline-conteiner .trip-label-container .trip-label {\n  margin-left: 2.7rem;\n  color: var(--color-light-gray);\n}\n\n@media (max-width: 920px) {\n  .trip-planner-timeline-conteiner .trip-label-container .trip-label {\n    margin-left: 2.5rem;\n    font-weight: 400;\n    font-size: 1rem;\n    line-height: 1.188rem;\n    letter-spacing: 0.05em;\n    color: var(--color-text-mobile);\n  }\n  .trip-planner-timeline-conteiner .trip-label-container .trip-label span.text-vertical-divider {\n    font-weight: 100;\n  }\n}\n\n.trip-planner-timeline-conteiner .trip-label-container .seperator {\n  width: 100%;\n  border-bottom: 0.0625rem solid var(--color-border-mobile);\n  padding-bottom: 1.25rem;\n  margin-bottom: 1.25rem;\n}\n\n.trip-planner-timeline-conteiner .trip-title {\n  height: 3.25rem;\n  display: flex;\n  align-items: center;\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n\n@media (max-width: 920px) {\n  .trip-planner-timeline-conteiner .trip-title {\n    height: 2.3125rem;\n    margin: 0.5rem 0;\n  }\n}\n\n.trip-planner-timeline-conteiner .trip-title::before {\n  content: \" \";\n  width: 3px;\n  height: 100%;\n  margin-left: 0.56rem;\n  margin-right: 3.225rem;\n  display: block;\n  background-color: transparent;\n}\n\n@media (max-width: 920px) {\n  .trip-planner-timeline-conteiner .trip-title::before {\n    margin-right: 3rem;\n  }\n}\n\n.trip-planner-timeline-conteiner .trip-label,\n.trip-planner-timeline-conteiner .trip-title {\n  font-size: 0.8125rem;\n  font-weight: var(--font-weight-regular);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n@media (max-width: 920px) {\n  .trip-planner-timeline-conteiner .trip-label,\n.trip-planner-timeline-conteiner .trip-title {\n    font-weight: 700;\n    font-size: 1rem;\n    line-height: 1.1875rem;\n    letter-spacing: 0.0015em;\n    color: var(--color-text-mobile);\n  }\n}\n\n.trip-planner-timeline-conteiner .trip-end {\n  font-size: 1.25rem;\n  line-height: 0.5rem;\n  color: var(--upgrade-right-border);\n  width: 1.3rem;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 1.5rem;\n  margin-top: 0.75rem;\n  margin-bottom: 0.75rem;\n}\n\n@media (max-width: 920px) {\n  .trip-planner-timeline-conteiner .trip-end {\n    display: none;\n  }\n}\n\n.trip-planner-timeline-conteiner .tz-icomoon-icon.color-flight, .trip-planner-timeline-conteiner .tz-icomoon-icon.color-train {\n  color: var(--color-main-blue);\n}\n\n.trip-planner-timeline-conteiner .tz-icomoon-icon.color-hotel {\n  color: var(--color-main-orange);\n}\n\n.trip-planner-timeline-conteiner .tz-icomoon-icon.color-transfer {\n  color: var(--color-main-red);\n}\n\n.trip-planner-timeline-conteiner .tz-icomoon-icon.color-rentcar {\n  color: var(--color-main-green);\n}\n\n.trip-planner-timeline-conteiner .trip-title.color-flight::before, .trip-planner-timeline-conteiner .trip-title.color-train::before {\n  background-color: var(--color-main-blue);\n}\n\n.trip-planner-timeline-conteiner .trip-title.color-hotel::before {\n  background-color: var(--color-main-orange);\n}\n\n.trip-planner-timeline-conteiner .trip-title.color-transfer::before {\n  background-color: var(--color-main-red);\n}\n\n.trip-planner-timeline-conteiner .trip-title.color-rentcar::before {\n  background-color: var(--color-main-green);\n}\n\n.trip-planner-timeline-conteiner .selected-item .tz-icomoon-icon {\n  color: var(--color-main-purple);\n}\n\n.trip-planner-timeline-conteiner .selected-item .trip-title::before {\n  background-color: var(--color-main-purple);\n}\n\n.trip-planner-timeline-conteiner .disabled-item {\n  opacity: 0.3;\n}\n\n.start-label-container,\n.end-label-container {\n  display: flex;\n  align-items: center;\n}\n\n@media (max-width: 920px) {\n  .start-label-container,\n.end-label-container {\n    display: none;\n  }\n}\n\n.start-label-container.start-label-container,\n.end-label-container.start-label-container {\n  margin-bottom: 1.5rem;\n}\n\n.start-label-container.end-label-container,\n.end-label-container.end-label-container {\n  margin-top: 1.5rem;\n}\n\n.start-label-container .icon-timeline-start-icon,\n.end-label-container .icon-timeline-start-icon {\n  transform: rotate(270deg);\n}\n\n.start-label-container .tz-icomoon-icon,\n.end-label-container .tz-icomoon-icon {\n  color: var(--color-main-purple);\n}\n\n.start-label-container .end-label,\n.end-label-container .end-label {\n  font-size: 0.8125rem;\n  color: var(--color-primary-black);\n  text-transform: uppercase;\n  font-weight: var(--font-weight-semibold);\n  margin-left: 1.25rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyaXAtdGltZWxpbmUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFdBQUE7QUFESjs7QUFJQTtFQUNJLGNBQUE7QUFESjs7QUM4Q0k7RUQ5Q0o7SUFJUSw0Q0FBQTtJQUNBLFNBQUE7SUFDQSxtQkFBQTtFQUFOO0FBQ0Y7O0FBRUk7RUFDSSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUFSOztBQUVRO0VBR0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFGWjs7QUFNSTtFQUNJLHVEQUFBO0VBQ0EsOEJBQUE7RUFDQSwyQkFBQTtBQUpSOztBQU9JO0VBQ0ksOEJBQUE7QUFMUjs7QUFRSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQU5SOztBQVFRO0VBQ0ksbUJBQUE7RUFDQSw4QkFBQTtBQU5aOztBQ2FJO0VEVEk7SUFLUSxtQkFBQTtJQUNBLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLHFCQUFBO0lBQ0Esc0JBQUE7SUFDQSwrQkFBQTtFQUxkO0VBT2M7SUFDSSxnQkFBQTtFQUxsQjtBQUNGOztBQVNRO0VBQ0ksV0FBQTtFQUNBLHlEQUFBO0VBQ0EsdUJBQUE7RUFDQSxzQkFBQTtBQVBaOztBQVdJO0VBQ0ksZUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7QUFUUjs7QUNiSTtFRGlCQTtJQVFRLGlCQUFBO0lBQ0EsZ0JBQUE7RUFSVjtBQUNGOztBQVVRO0VBQ0ksWUFBQTtFQUNBLFVBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQVJaOztBQzVCSTtFRDZCSTtJQVVRLGtCQUFBO0VBUGQ7QUFDRjs7QUFXSTs7RUFFSSxvQkFBQTtFQUNBLHVDQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBVFI7O0FDekNJO0VENENBOztJQVNRLGdCQUFBO0lBQ0EsZUFBQTtJQUNBLHNCQUFBO0lBQ0Esd0JBQUE7SUFDQSwrQkFBQTtFQVBWO0FBQ0Y7O0FBVUk7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQVJSOztBQy9ESTtFRDZEQTtJQWFRLGFBQUE7RUFQVjtBQUNGOztBQVdRO0VBRUksNkJBQUE7QUFWWjs7QUFhUTtFQUNJLCtCQUFBO0FBWFo7O0FBY1E7RUFDSSw0QkFBQTtBQVpaOztBQWVRO0VBQ0ksOEJBQUE7QUFiWjs7QUFrQlE7RUFFSSx3Q0FBQTtBQWpCWjs7QUFvQlE7RUFDSSwwQ0FBQTtBQWxCWjs7QUFxQlE7RUFDSSx1Q0FBQTtBQW5CWjs7QUFzQlE7RUFDSSx5Q0FBQTtBQXBCWjs7QUF5QlE7RUFDSSwrQkFBQTtBQXZCWjs7QUEwQlE7RUFDSSwwQ0FBQTtBQXhCWjs7QUE0Qkk7RUFDSSxZQUFBO0FBMUJSOztBQThCQTs7RUFNSSxhQUFBO0VBQ0EsbUJBQUE7QUEvQko7O0FDM0dJO0VEbUlKOztJQUdRLGFBQUE7RUF0Qk47QUFDRjs7QUEyQkk7O0VBQ0kscUJBQUE7QUF4QlI7O0FBMkJJOztFQUNJLGtCQUFBO0FBeEJSOztBQTJCSTs7RUFDSSx5QkFBQTtBQXhCUjs7QUEyQkk7O0VBQ0ksK0JBQUE7QUF4QlI7O0FBMkJJOztFQUNJLG9CQUFBO0VBQ0EsaUNBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0Esb0JBQUE7QUF4QlIiLCJmaWxlIjoidHJpcC10aW1lbGluZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3V0aWxzL21peGlucyc7XG5cbjpob3N0IHtcbiAgICB3aWR0aDogMTAwJTtcbn1cblxuLnRyaXAtcGxhbm5lci10aW1lbGluZS1jb250ZWluZXIge1xuICAgIHdpZHRoOiBpbmhlcml0O1xuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICB9XG5cbiAgICAudHotaWNvbW9vbi1pY29uIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIGhlaWdodDogMS41cmVtO1xuXG4gICAgICAgICYuc2VydmljZS1pY29uLWhvdGVsLFxuICAgICAgICAmLnNlcnZpY2UtaWNvbi10cmFuc2ZlcixcbiAgICAgICAgJi5zZXJ2aWNlLWljb24tY2FyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRyaXAtZW5kLWxpbmUge1xuICAgICAgICBib3JkZXItdG9wOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tdXBncmFkZS1yaWdodC1ib3JkZXIpO1xuICAgICAgICBtYXJnaW46IDEuMjVyZW0gMCAxLjI1cmVtIGF1dG87XG4gICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAzLjc1cmVtKTtcbiAgICB9XG5cbiAgICAubGFiZWwtY2VudGVyZWQge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAudHJpcC1sYWJlbC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC50cmlwLWxhYmVsIHtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyLjdyZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtZ3JheSk7XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4xODhyZW07XG4gICAgICAgICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuXG4gICAgICAgICAgICAgICAgc3Bhbi50ZXh0LXZlcnRpY2FsLWRpdmlkZXIge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zZXBlcmF0b3Ige1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBib3JkZXItYm90dG9tOiAwLjA2MjVyZW0gc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLW1vYmlsZSk7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHJpcC10aXRsZSB7XG4gICAgICAgIGhlaWdodDogMy4yNXJlbTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXRvcDogMC43NXJlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgaGVpZ2h0OiAyLjMxMjVyZW07XG4gICAgICAgICAgICBtYXJnaW46IDAuNXJlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJjo6YmVmb3JlIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiIFwiO1xuICAgICAgICAgICAgd2lkdGg6IDNweDtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwLjU2cmVtO1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzLjIyNXJlbTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRyaXAtbGFiZWwsXG4gICAgLnRyaXAtdGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE4NzVyZW07XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDE1ZW07XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRyaXAtZW5kIHtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMC41cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tdXBncmFkZS1yaWdodC1ib3JkZXIpO1xuICAgICAgICB3aWR0aDogMS4zcmVtO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDAuNzVyZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHotaWNvbW9vbi1pY29uIHtcbiAgICAgICAgJi5jb2xvci1mbGlnaHQsXG4gICAgICAgICYuY29sb3ItdHJhaW4ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tYmx1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmNvbG9yLWhvdGVsIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLW9yYW5nZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmNvbG9yLXRyYW5zZmVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXJlZCk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmNvbG9yLXJlbnRjYXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tZ3JlZW4pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRyaXAtdGl0bGUge1xuICAgICAgICAmLmNvbG9yLWZsaWdodDo6YmVmb3JlLFxuICAgICAgICAmLmNvbG9yLXRyYWluOjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1ibHVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICYuY29sb3ItaG90ZWw6OmJlZm9yZSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLW9yYW5nZSk7XG4gICAgICAgIH1cblxuICAgICAgICAmLmNvbG9yLXRyYW5zZmVyOjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1yZWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5jb2xvci1yZW50Y2FyOjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1ncmVlbik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VsZWN0ZWQtaXRlbSB7XG4gICAgICAgIC50ei1pY29tb29uLWljb24ge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50cmlwLXRpdGxlOjpiZWZvcmUge1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmRpc2FibGVkLWl0ZW0ge1xuICAgICAgICBvcGFjaXR5OiAwLjM7XG4gICAgfVxufVxuXG4uc3RhcnQtbGFiZWwtY29udGFpbmVyLFxuLmVuZC1sYWJlbC1jb250YWluZXIge1xuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgJi5zdGFydC1sYWJlbC1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gICAgfVxuXG4gICAgJi5lbmQtbGFiZWwtY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMS41cmVtO1xuICAgIH1cblxuICAgIC5pY29uLXRpbWVsaW5lLXN0YXJ0LWljb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgyNzBkZWcpO1xuICAgIH1cblxuICAgIC50ei1pY29tb29uLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgIH1cblxuICAgIC5lbmQtbGFiZWwge1xuICAgICAgICBmb250LXNpemU6IDAuODEyNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXByaW1hcnktYmxhY2spO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICAgICAgICBtYXJnaW4tbGVmdDogMS4yNXJlbTtcbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"], encapsulation: 2, changeDetection: 0 });


/***/ }),

/***/ 34514:
/*!***************************************************************!*\
  !*** ./src/app/modules/trip-timeline/trip-timeline.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TripTimelineModule": () => (/* binding */ TripTimelineModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _trip_timeline_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trip-timeline.component */ 17887);
/* harmony import */ var _components_trip_timeline_dialog_trip_timeline_dialog_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/trip-timeline-dialog/trip-timeline-dialog.component */ 37479);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/config/translation.config */ 19027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);







class TripTimelineModule {
}
TripTimelineModule.ɵfac = function TripTimelineModule_Factory(t) { return new (t || TripTimelineModule)(); };
TripTimelineModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TripTimelineModule });
TripTimelineModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule.forChild(src_app_config_translation_config__WEBPACK_IMPORTED_MODULE_2__.TRANSLATION_CONFIG)]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TripTimelineModule, { declarations: [_trip_timeline_component__WEBPACK_IMPORTED_MODULE_0__.TripTimelineComponent, _components_trip_timeline_dialog_trip_timeline_dialog_component__WEBPACK_IMPORTED_MODULE_1__.TripTimelineDialogComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateModule], exports: [_trip_timeline_component__WEBPACK_IMPORTED_MODULE_0__.TripTimelineComponent] }); })();


/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_trip-timeline_trip-timeline_module_ts.js.map