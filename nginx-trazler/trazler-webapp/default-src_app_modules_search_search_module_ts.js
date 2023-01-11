"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modules_search_search_module_ts"],{

/***/ 41337:
/*!*********************************************************!*\
  !*** ./src/app/modules/core/constants/calendar-conf.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarConf": () => (/* binding */ CalendarConf)
/* harmony export */ });
const CalendarConf = {
    class: 'col-xl-4 col-md-4 order3',
    content: 'transferCal',
    dateRange: 'free',
    fieldRole: 2,
    editOrder: 3,
    mainOrder: 2,
    maxDays: 84,
    minDays: 0,
    placeholder: 'SEARCH.TRIP_DATES',
    showNights: false,
    showTripOption: true,
    tabOrder: 3,
    time: true,
};


/***/ }),

/***/ 68797:
/*!*********************************************************************!*\
  !*** ./src/app/modules/core/schemas/modules/core/search-address.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressSource": () => (/* binding */ AddressSource)
/* harmony export */ });
var AddressSource;
(function (AddressSource) {
    AddressSource["SRC_GOOGLE"] = "google";
    AddressSource["SRC_MAPBOX"] = "mapbox";
    AddressSource["SRC_AIRPORT_CITIES"] = "sac";
})(AddressSource || (AddressSource = {}));


/***/ }),

/***/ 86930:
/*!***************************************************************!*\
  !*** ./src/app/modules/search/calendar/calendar.component.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarComponent": () => (/* binding */ CalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/trip */ 16699);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _trazler_calendar_components_trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../trazler-calendar/components/trazler-calendar/trazler-calendar.component */ 38201);
/* harmony import */ var _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/search/utils/calendar.utils */ 51664);
/* harmony import */ var _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/constants/call-types.const */ 37005);
/* harmony import */ var _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modules/search/utils/dates.service */ 77251);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _directives_field_navigation_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../directives/field-navigation.directive */ 22864);
/* harmony import */ var _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/components/tz-svg-icon/tz-svg-icon.component */ 28189);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




















function CalendarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "tz-svg-icon", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("calId", "gen" + ctx_r0.formField.confIdx);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mobile", true);
} }
function CalendarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](0, "div", 7);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("calId", "gen" + ctx_r1.formField.confIdx);
} }
function CalendarComponent_tz_trazler_calendar_5_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "tz-trazler-calendar", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("hideCalDropdown", function CalendarComponent_tz_trazler_calendar_5_Template_tz_trazler_calendar_hideCalDropdown_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4); const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r3.onCalendarFieldBlur(); })("clear", function CalendarComponent_tz_trazler_calendar_5_Template_tz_trazler_calendar_clear_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r5.onClear(); })("apply", function CalendarComponent_tz_trazler_calendar_5_Template_tz_trazler_calendar_apply_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r4); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r6.onApplyCalendarData($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpropertyInterpolate1"]("id", "gen", ctx_r2.formField.confIdx, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("calendarId", "gen" + ctx_r2.formField.confIdx)("search", ctx_r2.searchData)("defaultValue", ctx_r2.searchData[ctx_r2.formField.field])("calendarData", ctx_r2.searchData[ctx_r2.formField.field])("calendarConf", ctx_r2.fieldConf)("travelOption", ctx_r2.travelType)("selectedServices", ctx_r2.selectedServices);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("calId", "gen" + ctx_r2.formField.confIdx);
} }
const _c0 = function (a0, a1, a2) { return { "optional-field": a0, "hide-cal": a1, mob: a2 }; };
class CalendarComponent {
    constructor(datesService, searchDataService, settingsService, modalService, platformService) {
        this.datesService = datesService;
        this.searchDataService = searchDataService;
        this.settingsService = settingsService;
        this.modalService = modalService;
        this.platformService = platformService;
        this.calData = {
            fromDate: '',
            toDate: '',
            fromTime: '',
            toTime: '',
            travelOption: 'roundTrip',
            twoDates: true,
            showCalendar: false,
        };
        this.readonly = false;
        this.isModalEditMode = false;
        this.travelType = _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ROUND_TRIP;
        this.dateSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.focusInvalid = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.searchDropDownToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_1__(new Date(), 'DD-MM-YYYY');
        // public maxDate = moment(new Date(this.today.getFullYear() + 1, this.today.getMonth(), this.today.getDate()), 'DD-MM-YYYY');
        this.showTime = false;
        this.locale = {
            format: 'YYYY-MM-DDTHH:mm:ss.SSSSZ',
            displayFormat: 'DD MMM YYYY',
            applyLabel: 'Done',
            clearLabel: 'Clear', // detault is 'Clear'
        };
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        this.calTypes = _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_4__.CalTypes;
    }
    ngAfterViewInit() {
        this.patchValueOfTheCalendarInput(this.calData);
    }
    ngOnInit() {
        this.showTime = this.fieldConf.time;
        if (this.showTime) {
            this.locale.displayFormat = 'DD MMM HH:mm';
        }
        this.initDefaultDates();
        this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(() => {
            this.patchValueOfTheCalendarInput(this.calData);
        });
    }
    ngOnChanges(changes) {
        if (changes['calData'] && changes['calData'].currentValue) {
            if (changes['calData'].currentValue) {
                this.patchValueOfTheCalendarInput(this.calData);
            }
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    onCalendarFieldFocus(field) {
        if (this.platformService.isMobileDevice) {
            const content = this.fieldConf.content;
            let modalCssClass = this.isModalEditMode ? ['mob-second-search-modal'] : ['mob-main-modal'];
            let modalTitle = 'SEARCH.TRIP_DATES';
            if (content === this.calTypes.CAL_TRANSFER_TYPE || content === this.calTypes.CAL_RENTAL_TYPE) {
                modalCssClass = ['mob-main-modal', 'mob-picker-modal'];
                modalTitle = 'SEARCH.SELECT_DATE_AND_TIME';
            }
            const data = {
                travelOption: this.travelType,
                fieldConf: this.fieldConf,
                searchData: this.searchData,
                defaultValue: this.searchData[this.formField.field],
                calendarData: this.searchData[this.formField.field],
                selectedServices: this.selectedServices,
                isModalEditMode: this.isModalEditMode,
            };
            if (content === this.calTypes.CAL_TRANSFER_TYPE || content === this.calTypes.CAL_RENTAL_TYPE) {
                this.modalService
                    .openDatePickerModal(_trazler_calendar_components_trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_2__.TrazlerCalendarComponent, {
                    data,
                    title: modalTitle,
                    cssClass: modalCssClass,
                })
                    .then((modal) => {
                    if (modal.data) {
                        this.onApplyCalendarData({ newDates: modal.data.newDates, keepOpen: false });
                    }
                });
            }
            else {
                this.modalService
                    .createMainModal(_trazler_calendar_components_trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_2__.TrazlerCalendarComponent, {
                    data,
                    title: modalTitle,
                    cssClass: modalCssClass,
                })
                    .then((modal) => {
                    if (modal.data) {
                        this.onApplyCalendarData({ newDates: modal.data.newDates, keepOpen: false });
                    }
                });
            }
        }
        else {
            this.searchData[field].showCalendar = true; //!this.searchData[field].showCalendar;
            this.searchDropDownToggle.emit(true);
        }
    }
    onCalendarFieldBlur() {
        this.searchDropDownToggle.emit(false);
        this.searchData[this.formField.field].showCalendar = false;
    }
    onApplyCalendarData($event) {
        const { keepOpen, newDates } = $event;
        this.calData.showCalendar = keepOpen;
        this.searchData[this.formField.field].showCalendar = true;
        newDates.showCalendar = keepOpen;
        if (!newDates.fromDate) {
            this.calData.fromDate = '';
            this.calData.toDate = '';
            this.setDefaultCal();
            this.setFieldInvalid();
        }
        else {
            this.calData = newDates;
        }
        this.dateSelected.emit({ selectedObj: this.calData, formField: this.formField });
        this.patchValueOfTheCalendarInput(newDates);
        if (!keepOpen) {
            this.searchData[this.formField.field].showCalendar = true;
            this.focusInvalid.emit();
        }
    }
    ngModelChange(event) {
        if (!event.startDate) {
            this.calData.fromDate = '';
            this.calData.toDate = '';
            this.setDefaultCal();
            this.setFieldInvalid();
        }
        else {
            const twoDatesRequired = this.calData.twoDates || this.fieldConf.dateRange === true;
            this.calData.fromDate = event.startDate.format('YYYY-MM-DD');
            if (twoDatesRequired) {
                this.calData.toDate = event.endDate.format('YYYY-MM-DD');
            }
            if (this.showTime) {
                this.calData.fromTime = event.startDate.format('HH:mm');
                if (twoDatesRequired) {
                    this.calData.toTime = event.endDate.format('HH:mm');
                }
            }
        }
        this.dateSelected.emit({ selectedObj: this.calData, formField: this.formField });
        this.focusInvalid.emit();
    }
    onClear() {
        this.formGroup.controls[this.formField.field].reset();
        this.resetSearch(this.formField.field);
    }
    setDefaultCal() {
        let defaultTime = '';
        this.calData.travelOption = this.travelType;
        this.calData.twoDates = this.travelType !== _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY;
        if (this.fieldConf.defaultTime) {
            defaultTime = this.fieldConf.defaultTime + ':00';
            this.calData.fromTime = this.calData.fromTime ? this.calData.fromTime : defaultTime;
            this.calData.toTime = this.calData.toTime ? this.calData.toTime : defaultTime;
        }
        this.patchValueOfTheCalendarInput(this.calData);
    }
    initDefaultDates() {
        this.setDefaultCal();
        if (this.searchData[this.formField.field] &&
            (this.searchData[this.formField.field].fromDate || this.searchData[this.formField.field].toDate)) {
            this.calData = Object.assign(Object.assign({}, this.calData), this.searchData[this.formField.field]);
        }
        else {
            if (!this.showTime) {
                this.setDefaultCal();
            }
        }
    }
    patchValueOfTheCalendarInput(calData) {
        const control = this.formGroup.controls[this.formField.field];
        const twoDates = _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_3__.CalendarUtilsService.isTwoDates(this.fieldConf.dateRange, this.travelType, this.searchDataService.hasAcc());
        const transferCal = this.fieldConf.content === this.calTypes.CAL_TRANSFER_TYPE;
        const transferRoundTrip = transferCal && calData.tripType === _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ROUND_TRIP;
        if (((!transferCal && twoDates) || transferRoundTrip) &&
            !calData.toDate &&
            control.validator !== null /*&&
        ((calData.tripType !== undefined && calData.tripType !== Trip.ONE_WAY) ||
            (calData.tripType === undefined && this.travelType !== Trip.ONE_WAY))*/) {
            this.setFieldInvalid();
        }
        else {
            const data = {};
            data[this.formField.field] = this.dateString(calData);
            this.formGroup.patchValue(data);
        }
    }
    resetSearch(str) {
        this.searchData[str] = {
            fromDate: '',
            toDate: '',
            showCalendar: true,
            updateTime: false,
            fromDisplayStr: '',
            toDisplayStr: '',
            businessMeeting: false,
            preferBC: false,
            translator: false,
            travelOption: 'roundTrip',
            displayStr: '',
        };
    }
    setFieldInvalid() {
        queueMicrotask(() => {
            this.formGroup.controls[this.formField.field].setErrors({ invalid: true });
        });
    }
    dateString(calData) {
        return this.datesService.getCalendarDateString(calData.fromDate, calData.toDate, calData.diplayStr, this.fieldConf, this.calData.fromTime, this.calData.toTime, this.travelType);
    }
}
CalendarComponent.ɵfac = function CalendarComponent_Factory(t) { return new (t || CalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_5__.DatesService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_6__.SearchDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_7__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_8__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_9__.PlatformService)); };
CalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: CalendarComponent, selectors: [["tz-calendar"]], inputs: { formGroup: "formGroup", searchData: "searchData", calData: "calData", fieldConf: "fieldConf", formField: "formField", readonly: "readonly", isModalEditMode: "isModalEditMode", travelType: "travelType", selectedServices: "selectedServices" }, outputs: { dateSelected: "dateSelected", focusInvalid: "focusInvalid", searchDropDownToggle: "searchDropDownToggle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 22, consts: [[1, "input-field-component", "calendar", 3, "formGroup", "ngClass"], ["no-calendar-close", "", "data-test", "result-page-searchBar-trip-dates", "type", "text", "readonly", "", "tzFieldNavigation", "", 3, "formControlName", "placeholder", "fieldType", "tabindex", "searchFormGroup", "controllerName", "focus", "closeField"], ["no-calendar-close", "", "class", "field-icon", 4, "ngIf"], ["no-calendar-close", "", "class", "field-icon tz-icon-date_range", 4, "ngIf"], ["no-calendar-close", "", 3, "id", "calendarId", "search", "defaultValue", "calendarData", "calendarConf", "travelOption", "selectedServices", "hideCalDropdown", "clear", "apply", 4, "ngIf"], ["no-calendar-close", "", 1, "field-icon"], ["icon", "clarity_date-line", 3, "mobile"], ["no-calendar-close", "", 1, "field-icon", "tz-icon-date_range"], ["no-calendar-close", "", 3, "id", "calendarId", "search", "defaultValue", "calendarData", "calendarConf", "travelOption", "selectedServices", "hideCalDropdown", "clear", "apply"]], template: function CalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 0)(1, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("focus", function CalendarComponent_Template_input_focus_1_listener() { return ctx.onCalendarFieldFocus(ctx.formField.field); })("closeField", function CalendarComponent_Template_input_closeField_1_listener() { return ctx.onCalendarFieldBlur(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](3, CalendarComponent_div_3_Template, 2, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](4, CalendarComponent_div_4_Template, 1, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](5, CalendarComponent_tz_trazler_calendar_5_Template, 1, 9, "tz-trazler-calendar", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formGroup", ctx.formGroup)("ngClass", ctx.formField.fieldType);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction3"](18, _c0, ctx.fieldConf.optional, !ctx.readonly, ctx.platformService.isMobileDevice));
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("formControlName", ctx.formField.field)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 16, ctx.fieldConf.placeholder))("fieldType", ctx.formField.fieldType)("tabindex", ctx.formField.tabOrder)("searchFormGroup", ctx.formGroup)("controllerName", ctx.formField.field);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵattribute"]("id", "tabIdx" + ctx.formField.tabOrder)("calId", "gen" + ctx.formField.confIdx)("optionalField", ctx.fieldConf.optional);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", (ctx.searchData[ctx.formField.field] == null ? null : ctx.searchData[ctx.formField.field].showCalendar) && !ctx.platformService.isMobileDevice);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _directives_field_navigation_directive__WEBPACK_IMPORTED_MODULE_10__.FieldNavigationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_11__.TzSvgIconComponent, _trazler_calendar_components_trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_2__.TrazlerCalendarComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYWxlbmRhci5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 87274:
/*!****************************************************************************************************!*\
  !*** ./src/app/modules/search/components/mob-loc-field-results/mob-loc-field-results.component.ts ***!
  \****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobLocFieldResultsComponent": () => (/* binding */ MobLocFieldResultsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




function MobLocFieldResultsComponent_div_0_a_1_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobLocFieldResultsComponent_div_0_a_1_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSelectItem(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8)(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.displayStr ? item_r1.displayStr : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, "SEARCH.MY_LOCATION"), " ");
} }
function MobLocFieldResultsComponent_div_0_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, "SEARCH.RECENT_SEARCHES"), " ");
} }
function MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6)(3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("tz-icon-", item_r1.isCached ? "restore" : "location", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.cityName + ", " + item_r1.country, " ");
} }
function MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6)(3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("tz-icon-", item_r1.isCached ? "restore" : "service-flight", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.cityName + " \u2014 " + item_r1.All_airports, " ");
} }
function MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6)(3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("tz-icon-", item_r1.isCached ? "restore" : "train", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.cityName + " \u2014 " + item_r1.All_trains, " ");
} }
function MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} }
function MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_4_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
} }
function MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_4_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} }
function MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_4_div_2_div_1_Template, 1, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_4_div_2_div_2_Template, 1, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.stationType === "airport");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.stationType === "rail_station");
} }
const _c0 = function (a0, a1) { return { "pl-16": a0, "pl-no-icon": a1 }; };
function MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_4_div_1_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_4_div_2_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6)(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, !item_r1.isCached && item_r1.isSingleStation, !item_r1.isCached && !item_r1.isSingleStation));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isCached);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.isCached && item_r1.isSingleStation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.cityName + " " + item_r1.code + ", " + item_r1.name);
} }
function MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 6)(3, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("tz-icon-", item_r1.isCached ? "restore" : "location", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
} }
function MobLocFieldResultsComponent_div_0_a_3_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_1_Template, 5, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_2_Template, 5, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_3_Template, 5, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_4_Template, 6, 8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MobLocFieldResultsComponent_div_0_a_3_ng_container_1_div_5_Template, 5, 4, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isCityHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isHeader && item_r1.stationType === "airports");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isHeader && item_r1.stationType === "rail_stations");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.stationType && item_r1.stationType !== "city" && !item_r1.isHeader && !item_r1.isCityHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.stationType === "city" && !item_r1.isHeader && !item_r1.isCityHeader);
} }
function MobLocFieldResultsComponent_div_0_a_3_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 16);
} }
function MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 26);
} }
function MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 27);
} }
function MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 28);
} }
function MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 19);
} }
function MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 20);
} }
function MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 29);
} }
function MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 30);
} }
function MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_1_Template, 1, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_2_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_3_Template, 1, 0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_4_Template, 1, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_5_Template, 1, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_6_Template, 1, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_div_7_Template, 1, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.icon || item_r1.icon === "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.icon === "compass");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.icon === "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.icon === "flight");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.icon === "train");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.icon === "car");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.icon === "hotel");
} }
function MobLocFieldResultsComponent_div_0_a_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobLocFieldResultsComponent_div_0_a_3_div_2_div_1_Template, 1, 0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobLocFieldResultsComponent_div_0_a_3_div_2_div_2_Template, 8, 7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6)(4, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isCached);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.isCached);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r1.api_source !== "sac" ? item_r1.longDescription : item_r1.name, " ");
} }
const _c1 = function (a0) { return { "selected-address": a0 }; };
function MobLocFieldResultsComponent_div_0_a_3_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MobLocFieldResultsComponent_div_0_a_3_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r39.onSelectItem(item_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobLocFieldResultsComponent_div_0_a_3_ng_container_1_Template, 6, 5, "ng-container", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobLocFieldResultsComponent_div_0_a_3_div_2_Template, 6, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, item_r1.selectedAddress));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.api_source === "sac");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.stationType === "" || item_r1.api_source !== "sac");
} }
const _c2 = function (a0) { return { "loc-filed-results-focused": a0 }; };
function MobLocFieldResultsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MobLocFieldResultsComponent_div_0_a_1_Template, 7, 3, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MobLocFieldResultsComponent_div_0_div_2_Template, 3, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MobLocFieldResultsComponent_div_0_a_3_Template, 3, 5, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const first_r2 = ctx.first;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c2, ctx_r0.inputValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", item_r1.isMyLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", first_r2 && !ctx_r0.isInputFocused && !ctx_r0.inputValue && (ctx_r0.results.length > 1 && ctx_r0.fieldName === "from" || ctx_r0.results.length > 0 && ctx_r0.fieldName === "to"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !item_r1.isMyLocation && (ctx_r0.isInputFocused && ctx_r0.inputValue || !ctx_r0.isInputFocused));
} }
class MobLocFieldResultsComponent {
    constructor() {
        this.results = [];
        this.text = '';
        this.selectItem = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
    onSelectItem(item) {
        this.selectItem.emit(item);
    }
}
MobLocFieldResultsComponent.ɵfac = function MobLocFieldResultsComponent_Factory(t) { return new (t || MobLocFieldResultsComponent)(); };
MobLocFieldResultsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobLocFieldResultsComponent, selectors: [["tz-mob-loc-field-results"]], inputs: { results: "results", text: "text", isInputFocused: "isInputFocused", inputValue: "inputValue", fieldName: "fieldName" }, outputs: { selectItem: "selectItem" }, decls: 1, vars: 1, consts: [["class", "loc-filed-results", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "loc-filed-results", 3, "ngClass"], ["class", "loc-filed-results__item loc-filed-results__item-my-location", 3, "click", 4, "ngIf"], ["class", "recent-searches-text", 4, "ngIf"], ["class", "loc-filed-results__item", 3, "ngClass", "click", 4, "ngIf"], [1, "loc-filed-results__item", "loc-filed-results__item-my-location", 3, "click"], [1, "loc-text-overflow-block"], [1, "tz-icon-map_loc"], [1, "item-my-location-title", "loc-text-overflow-block"], [1, "loc-text-overflow"], [1, "recent-searches-text"], [1, "loc-filed-results__item", 3, "ngClass", "click"], [4, "ngIf"], ["class", "loc-text-overflow-block", 4, "ngIf"], ["class", "loc-text-overflow-block", 3, "class", 4, "ngIf"], ["class", "tz-icon-restore", 4, "ngIf"], [1, "tz-icon-restore"], ["class", "tz-icon-service-flight", 4, "ngIf"], ["class", "tz-icon-service-train", 4, "ngIf"], [1, "tz-icon-service-flight"], [1, "tz-icon-service-train"], ["class", "tz-icon-location", 4, "ngIf"], ["class", "tz-icon-compass", 4, "ngIf"], ["class", "tz-icon-search_txt", 4, "ngIf"], ["class", "tz-icon-service-rental", 4, "ngIf"], ["class", "tz-icon-service-hotel", 4, "ngIf"], [1, "tz-icon-location"], [1, "tz-icon-compass"], [1, "tz-icon-search_txt"], [1, "tz-icon-service-rental"], [1, "tz-icon-service-hotel"]], template: function MobLocFieldResultsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, MobLocFieldResultsComponent_div_0_Template, 4, 6, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.results);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_1__.NgIf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__.TranslatePipe], styles: [".loc-filed-results__item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  letter-spacing: 0.15px;\n  color: var(--color-text-mobile);\n  margin-bottom: 1rem;\n}\n.loc-filed-results__item[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-of-type {\n  font-style: normal;\n  margin-left: 0.5rem;\n}\n.loc-filed-results__item[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.loc-filed-results__item-my-location[_ngcontent-%COMP%] {\n  border-bottom: 1px solid var(--color-border-mobile);\n  margin-bottom: 1.75rem;\n  line-height: 1rem;\n}\n.loc-filed-results__item-my-location[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 100%;\n  padding-bottom: 0.5rem;\n}\n.loc-filed-results__item-my-location[_ngcontent-%COMP%]   .my-loc-text[_ngcontent-%COMP%] {\n  background: rgba(122, 101, 225, 0.1);\n  border-radius: 2px;\n  padding: 0.25rem;\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 0.875rem;\n  color: var(--ion-color-primary);\n  margin-left: auto;\n}\n.loc-filed-results__item-my-location[_ngcontent-%COMP%]   .item-my-location-title[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  color: var(--color-text-mobile);\n}\n.loc-filed-results[_ngcontent-%COMP%]   .recent-searches-text[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  color: var(--color-text-mobile);\n  margin-bottom: 1rem;\n}\n.loc-filed-results[_ngcontent-%COMP%]   .pl-no-icon[_ngcontent-%COMP%] {\n  padding-left: 2rem;\n}\n.loc-filed-results[_ngcontent-%COMP%]   .tz-icon-service-flight[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n.loc-filed-results[_ngcontent-%COMP%]   [class^=tz-icon-][_ngcontent-%COMP%], .loc-filed-results[_ngcontent-%COMP%]   [class*=\" tz-icon-\"][_ngcontent-%COMP%], .loc-filed-results[_ngcontent-%COMP%]   .tz-icon-location[_ngcontent-%COMP%] {\n  font-size: 1rem !important;\n  color: var(--color-grey-light-mobile);\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 1.5rem;\n  min-width: 1.5rem;\n  height: 1.5rem;\n  margin-right: 0.5rem;\n}\n.loc-filed-results[_ngcontent-%COMP%]   [class^=tz-icon-][_ngcontent-%COMP%]:before, .loc-filed-results[_ngcontent-%COMP%]   [class*=\" tz-icon-\"][_ngcontent-%COMP%]:before, .loc-filed-results[_ngcontent-%COMP%]   .tz-icon-location[_ngcontent-%COMP%]:before {\n  font-size: 1rem !important;\n  color: var(--color-grey-light-mobile);\n}\n.loc-filed-results[_ngcontent-%COMP%]   .loc-text-overflow-block[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.loc-filed-results[_ngcontent-%COMP%]   .loc-text-overflow[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.loc-filed-results[_ngcontent-%COMP%]   .loc-flex1[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.loc-filed-results-focused[_ngcontent-%COMP%] {\n  padding-left: 0;\n  padding-right: 0;\n}\n.loc-filed-results-focused__item[_ngcontent-%COMP%] {\n  margin-bottom: 0.8125rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1sb2MtZmllbGQtcmVzdWx0cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQUZSO0FBSVE7RUFDSSxrQkFBQTtFQUNBLG1CQUFBO0FBRlo7QUFLUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtBQUhaO0FBT0k7RUFDSSxtREFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUFMUjtBQU9RO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0FBTFo7QUFRUTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQ0EsaUJBQUE7QUFOWjtBQVNRO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFQWjtBQVdJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtBQVRSO0FBWUk7RUFDSSxrQkFBQTtBQVZSO0FBYUk7RUFDSSxlQUFBO0FBWFI7QUFjSTs7RUFFSSwwQkFBQTtFQUNBLHFDQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFaUjtBQWNROztFQUNJLDBCQUFBO0VBQ0EscUNBQUE7QUFYWjtBQWVJO0VBQ0ksT0FBQTtFQUNBLFlBQUE7QUFiUjtBQWdCSTtFQUNJLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQWRSO0FBaUJJO0VBQ0ksT0FBQTtBQWZSO0FBbUJBO0VBS0ksZUFBQTtFQUNBLGdCQUFBO0FBcEJKO0FBZUk7RUFDSSx3QkFBQTtBQWJSIiwiZmlsZSI6Im1vYi1sb2MtZmllbGQtcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuLmxvYy1maWxlZC1yZXN1bHRzIHtcbiAgICAmX19pdGVtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMTVweDtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcblxuICAgICAgICBzcGFuOmZpcnN0LW9mLXR5cGUge1xuICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgID4gZGl2IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJl9faXRlbS1teS1sb2NhdGlvbiB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG5cbiAgICAgICAgPiBkaXYge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLm15LWxvYy10ZXh0IHtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTIyLCAxMDEsIDIyNSwgMC4xKTtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMjVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODc1cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgLml0ZW0tbXktbG9jYXRpb24tdGl0bGUge1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5yZWNlbnQtc2VhcmNoZXMtdGV4dCB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gICAgfVxuXG4gICAgLnBsLW5vLWljb24ge1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDJyZW07XG4gICAgfVxuXG4gICAgLnR6LWljb24tc2VydmljZS1mbGlnaHQge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgfVxuXG4gICAgW2NsYXNzXj10ei1pY29uLV0sIFtjbGFzcyo9XCIgdHotaWNvbi1cIl0sXG4gICAgLnR6LWljb24tbG9jYXRpb24ge1xuICAgICAgICBmb250LXNpemU6IDFyZW0gIWltcG9ydGFudDtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXktbGlnaHQtbW9iaWxlKTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxLjVyZW07XG4gICAgICAgIG1pbi13aWR0aDogMS41cmVtO1xuICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAwLjVyZW07XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleS1saWdodC1tb2JpbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmxvYy10ZXh0LW92ZXJmbG93LWJsb2NrIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgIH1cblxuICAgIC5sb2MtdGV4dC1vdmVyZmxvdyB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgIH1cblxuICAgIC5sb2MtZmxleDEge1xuICAgICAgICBmbGV4OiAxO1xuICAgIH1cbn1cblxuLmxvYy1maWxlZC1yZXN1bHRzLWZvY3VzZWQge1xuICAgICZfX2l0ZW0ge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjgxMjVyZW07XG4gICAgfVxuXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgIHBhZGRpbmctcmlnaHQ6IDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 72432:
/*!*********************************************************************************!*\
  !*** ./src/app/modules/search/datetime-calendar/datetime-calendar.component.ts ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DatetimeCalendarComponent": () => (/* binding */ DatetimeCalendarComponent)
/* harmony export */ });
/* harmony import */ var _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/trip */ 16699);
/* harmony import */ var _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/call-types.const */ 37005);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mobiscroll/angular */ 29087);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _core_constants_calendar_conf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/calendar-conf */ 41337);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _shared_components_modals_mob_main_modal_header_mob_main_modal_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @shared/components/modals/mob-main-modal-header/mob-main-modal-header.component */ 56488);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);














const _c0 = function () { return ["datetime"]; };
class DatetimeCalendarComponent {
    constructor(modalService, settingsService) {
        this.modalService = modalService;
        this.settingsService = settingsService;
        this.travelOption = _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY;
        this.content = _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_TRIP_TYPE;
        this.calendarConf = _core_constants_calendar_conf__WEBPACK_IMPORTED_MODULE_3__.CalendarConf;
        this.calendarDefaultValue = [new Date(), null];
        this.locale = _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_7__.localeEn;
        this.minDate = moment__WEBPACK_IMPORTED_MODULE_2__().add(10, 'minutes');
        this.calType = _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
    }
    get isCarCalendar() {
        return this.calendarType === this.calType.CAL_RENTAL_TYPE;
    }
    get isTransferCalendar() {
        return this.calendarType === this.calType.CAL_TRANSFER_TYPE;
    }
    get startLabel() {
        if (this.isCarCalendar) {
            return 'GENERAL.PICK_UP_TIME';
        }
        return 'GENERAL.Depart';
    }
    get endLabel() {
        if (this.isCarCalendar) {
            return 'GENERAL.DROP_OFF_TIME';
        }
        return 'GENERAL.Return';
    }
    get isCalendarValueInvalid() {
        if (this.isCarCalendar &&
            this.selectedDateTimeArr &&
            this.selectedDateTimeArr[0] &&
            this.selectedDateTimeArr[1]) {
            return false;
        }
        if (!this.isCarCalendar && this.selectedDateTimeArr && this.selectedDateTimeArr[0]) {
            if (!this.isCarCalendar &&
                this.selectedDateTimeArr &&
                this.minDate &&
                this.maxDate &&
                (!this.selectedDateTimeArr[0] || !this.selectedDateTimeArr[1])) {
                return true;
            }
            return false;
        }
        return true;
    }
    ngOnInit() {
        this.setDefaultValue();
        this.langChange();
        this.setMinMaxDate();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    onChange(event) {
        this.selectedDateTimeArr = event.value;
    }
    onSetDateTime() {
        var _a;
        if (!((_a = this.selectedDateTimeArr) === null || _a === void 0 ? void 0 : _a.length) || this.isCalendarValueInvalid) {
            return;
        }
        const fromDateTime = this.selectedDateTimeArr[0];
        const toDateTime = this.selectedDateTimeArr[1] ? this.selectedDateTimeArr[1] : null;
        const fromDateTimeMoment = moment__WEBPACK_IMPORTED_MODULE_2__(fromDateTime);
        const toDateTimeMoment = toDateTime ? moment__WEBPACK_IMPORTED_MODULE_2__(toDateTime) : null;
        const tripType = toDateTimeMoment ? 'roundTrip' : 'oneWay';
        const data = {
            displayStr: fromDateTimeMoment.format('YYYY-MM-DD'),
            fromDate: fromDateTimeMoment.format('YYYY-MM-DD'),
            fromTime: fromDateTimeMoment.format('HH:mm'),
            toDate: toDateTimeMoment ? toDateTimeMoment.format('YYYY-MM-DD') : null,
            toDisplayStr: '',
            tripType,
            toTime: toDateTimeMoment ? toDateTimeMoment.format('HH:mm') : null,
            twoDates: !!toDateTimeMoment,
        };
        this.modalService.dismiss({ newDates: data });
    }
    onCloseModal() {
        this.modalService.dismiss();
    }
    setDefaultValue() {
        var _a, _b;
        if (this.defaultValue && !this.defaultValue.fromDate) {
            this.calendarDefaultValue = [new Date(), null];
            return;
        }
        if (this.defaultValue) {
            const fromDateTime = moment__WEBPACK_IMPORTED_MODULE_2__(((_a = this.defaultValue) === null || _a === void 0 ? void 0 : _a.fromDate) + ' ' + this.defaultValue.fromTime);
            const toDateTime = moment__WEBPACK_IMPORTED_MODULE_2__(((_b = this.defaultValue) === null || _b === void 0 ? void 0 : _b.toDate) + ' ' + this.defaultValue.toTime);
            this.calendarDefaultValue = [fromDateTime];
            if (toDateTime) {
                this.calendarDefaultValue.push(toDateTime);
            }
            this.selectedDateTimeArr = this.calendarDefaultValue;
        }
    }
    setLang() {
        if (this.settingsService.i18nCode === 'en-us') {
            this.locale = _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_7__.localeEn;
        }
        if (this.settingsService.i18nCode === 'en-gb') {
            this.locale = _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_7__.localeEnGB;
        }
        if (this.settingsService.i18nCode === 'fr-fr') {
            this.locale = _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_7__.localeFr;
        }
    }
    langChange() {
        this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_9__.takeUntil)(this.destroy$)).subscribe(() => {
            this.setLang();
        });
    }
    setMinMaxDate() {
        const calendarConf = this.calendarConf;
        const search = this.search;
        if (!calendarConf.linked) {
            return;
        }
        for (const dep in calendarConf.linked) {
            if (search[calendarConf.linked[dep]]) {
                switch (dep) {
                    case 'fromDate':
                        if (search[calendarConf.linked[dep]].fromDate) {
                            this.minDate = new Date(search[calendarConf.linked[dep]].fromDate);
                        }
                        break;
                    case 'toDate':
                        if (search[calendarConf.linked[dep]].toDate) {
                            this.maxDate = new Date(search[calendarConf.linked[dep]].toDate);
                        }
                        break;
                }
            }
        }
    }
}
DatetimeCalendarComponent.ɵfac = function DatetimeCalendarComponent_Factory(t) { return new (t || DatetimeCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_4__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_5__.SettingsService)); };
DatetimeCalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineComponent"]({ type: DatetimeCalendarComponent, selectors: [["tz-datetime-calendar"]], inputs: { calendarType: "calendarType", search: "search", defaultValue: "defaultValue", travelOption: "travelOption", content: "content", calendarConf: "calendarConf" }, decls: 12, vars: 28, consts: [[3, "closeModal"], [1, "datetime-calendar-wrapper"], [1, "datetime-calendar-container", "tz-datetime-calendar"], ["select", "range", "display", "inline", "dateFormat", "DD MMM, YYYY", "timeFormat", "HH:mm", "timeWheels", "HH:mm", 3, "controls", "touchUi", "inRangeInvalid", "rangeEndInvalid", "rangeStartLabel", "rangeEndLabel", "maxRange", "rangeStartHelp", "rangeEndHelp", "stepMinute", "ngModel", "locale", "min", "max", "onChange", "ngModelChange"], [1, "datetime-calendar-footer"], [1, "datetime-calendar-select-btn", 3, "click"]], template: function DatetimeCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](0, "tz-mob-main-modal-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("closeModal", function DatetimeCalendarComponent_Template_tz_mob_main_modal_header_closeModal_0_listener() { return ctx.onCloseModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](1, "div", 1)(2, "div", 2)(3, "mbsc-datepicker", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("onChange", function DatetimeCalendarComponent_Template_mbsc_datepicker_onChange_3_listener($event) { return ctx.onChange($event); })("ngModelChange", function DatetimeCalendarComponent_Template_mbsc_datepicker_ngModelChange_3_listener($event) { return ctx.calendarDefaultValue = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](5, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](6, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](7, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementStart"](8, "div", 4)(9, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵlistener"]("click", function DatetimeCalendarComponent_Template_button_click_9_listener() { return ctx.onSetDateTime(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipe"](11, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵelementEnd"]()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵproperty"]("controls", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpureFunction0"](27, _c0))("touchUi", true)("inRangeInvalid", false)("rangeEndInvalid", false)("rangeStartLabel", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](4, 17, ctx.startLabel))("rangeEndLabel", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](5, 19, ctx.endLabel))("maxRange", 7260000000)("rangeStartHelp", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](6, 21, "SELECT_DATE_AND_TIME"))("rangeEndHelp", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](7, 23, "SELECT_DATE_AND_TIME"))("stepMinute", 10)("ngModel", ctx.calendarDefaultValue)("locale", ctx.locale)("min", ctx.minDate)("max", ctx.maxDate);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵclassProp"]("datetime-calendar-select-btn--disable", ctx.isCalendarValueInvalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵpipeBind1"](11, 25, "GENERAL.Apply"), " ");
    } }, directives: [_shared_components_modals_mob_main_modal_header_mob_main_modal_header_component__WEBPACK_IMPORTED_MODULE_6__.MobMainModalHeaderComponent, _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_7__.MbscDatepicker, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgModel], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslatePipe], styles: [".datetime-calendar-wrapper[_ngcontent-%COMP%] {\n  background: var(--color-main-background-mobile);\n}\n\n.datetime-calendar-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem 1rem;\n  border-top: 1px solid var(--color-main-text-mobile);\n  background-color: var(--ion-color-primary-contrast);\n  position: relative;\n  z-index: 9;\n}\n\n.datetime-calendar-select-btn[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary);\n  border-radius: 0.25rem;\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  color: var(--color-main-text-mobile);\n  width: 100%;\n  height: 2.5rem;\n}\n\n.datetime-calendar-select-btn--disable[_ngcontent-%COMP%] {\n  background: var(--color-button-grey);\n  color: var(--color-gray-light);\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImRhdGV0aW1lLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksK0NBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtREFBQTtFQUNBLG1EQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ0o7O0FBRUE7RUFDSSxvQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUVBO0VBQ0ksb0NBQUE7RUFDQSw4QkFBQTtFQUNBLG9CQUFBO0FBQ0oiLCJmaWxlIjoiZGF0ZXRpbWUtY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZGF0ZXRpbWUtY2FsZW5kYXItd3JhcHBlciB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItbWFpbi1iYWNrZ3JvdW5kLW1vYmlsZSk7XG59XG5cbi5kYXRldGltZS1jYWxlbmRhci1mb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItbWFpbi10ZXh0LW1vYmlsZSk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiA5O1xufVxuXG4uZGF0ZXRpbWUtY2FsZW5kYXItc2VsZWN0LWJ0biB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICAgIGJvcmRlci1yYWRpdXM6IDAuMjVyZW07XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tdGV4dC1tb2JpbGUpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMi41cmVtO1xufVxuXG4uZGF0ZXRpbWUtY2FsZW5kYXItc2VsZWN0LWJ0bi0tZGlzYWJsZSB7XG4gICAgYmFja2dyb3VuZDogdmFyKC0tY29sb3ItYnV0dG9uLWdyZXkpO1xuICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbiJdfQ== */"] });


/***/ }),

/***/ 22864:
/*!*************************************************************************!*\
  !*** ./src/app/modules/search/directives/field-navigation.directive.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FieldNavigationDirective": () => (/* binding */ FieldNavigationDirective)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/keyboard-key-types.const */ 86578);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/modules/core/listeners-service */ 96831);






const fieldTypes = {
    ADDR_TYPE: 'loc-field',
    CAL_TYPE: 'cal',
    PERSON_TYPE: 'person',
    SEARCH_TYPE: 'searchButton',
    OPTIONAL: 'optionalfield',
};
const ID_PREFIX = '#tabIdx';
const SEARCH_BUTTON_IDX = 9;
class FieldNavigationDirective {
    constructor(EleRef, listenersService) {
        this.EleRef = EleRef;
        this.listenersService = listenersService;
        this.searchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroup({});
        this.controllerName = '';
        this.fieldType = '';
        this.ignoreEnterKey = false;
        this.closeField = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.focusNextListenerId = -1;
        this.currentField = this.EleRef.nativeElement;
    }
    onKeyUp(event) {
        this.keyBoardEvent = event;
        const targetElement = (this.keyBoardEvent.target || this.keyBoardEvent.currentTarget);
        this.handleKeyBoardEvent(event.key, {
            id: targetElement.id,
        });
    }
    ngOnInit() {
        this.focusNextListenerId = this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_1__.ListenerId.LISTEN_FOCUS_NEXT, this.moveNext, this);
    }
    ngOnDestroy() {
        if (this.focusNextListenerId !== -1) {
            this.listenersService.unregisterListener(this.focusNextListenerId);
        }
    }
    getNextField(nextIndex, inc) {
        const nextInput = document.querySelector(ID_PREFIX + nextIndex);
        if (nextInput && nextInput.getAttribute(fieldTypes.OPTIONAL) === 'true') {
            // next element is optional and empty let's move to next one
            return this.getNextField(nextIndex + inc, inc);
        }
        if (!nextInput) {
            if (nextIndex >= SEARCH_BUTTON_IDX) {
                // move to search button with id = ID_PREFIX + SEARCH_BUTTON_IDX
                return document.querySelector(ID_PREFIX + SEARCH_BUTTON_IDX);
            }
            else if (nextIndex !== 0) {
                return this.getNextField(nextIndex + inc, inc);
            }
        }
        return nextInput;
    }
    //close current field popup
    closeCurrentField() {
        requestAnimationFrame(() => {
            this.closeField.emit();
            this.currentField.blur();
            this.currentField.dispatchEvent(new KeyboardEvent('keydown', {
                keyCode: 27,
                bubbles: true,
            }));
        });
    }
    getNextTabIndex(keyType) {
        let inc = 0;
        const locationSelected = () => {
            const fieldValue = this.searchFormGroup.controls[this.controllerName].value;
            return typeof fieldValue === 'object' || fieldValue === '';
        };
        switch (keyType) {
            case _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.KeyType.ENTER:
                if (this.ignoreEnterKey) {
                    return;
                }
                if (this.tabindex === SEARCH_BUTTON_IDX) {
                    // sendEvent(el, 'click');
                    return;
                }
                else {
                    inc = 1;
                }
                break;
            case _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.KeyType.RIGHT_ARROW:
                if (this.fieldType === fieldTypes.ADDR_TYPE && !locationSelected()) {
                    return;
                }
            /* fallthrough */
            case _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.TzFocusType.MOVE_NEXT:
                inc = 1;
                break;
            case _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.KeyType.LEFT_ARROW:
                if (this.fieldType === fieldTypes.ADDR_TYPE && !locationSelected()) {
                    return;
                }
                inc = -1;
                break;
            case _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.KeyType.TAB:
                if (this.keyBoardEvent.shiftKey) {
                    inc = -1;
                }
                else {
                    inc = 1;
                }
                break;
            case _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.KeyType.ESCAPE:
                this.closeCurrentField();
                return;
            case _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.TzFocusType.MOVE_TO_INVALID:
                break;
            default:
                return;
        }
        return inc;
    }
    handleKeyBoardEvent(keyType, handlerObj) {
        const isCurrentElement = handlerObj.id === this.currentField.id;
        const hasTabIndex = this.tabindex;
        if (!isCurrentElement || !hasTabIndex) {
            return;
        }
        const inc = this.getNextTabIndex(keyType);
        if (inc === undefined) {
            return;
        }
        const nextFieldIndex = this.tabindex + inc;
        let nextField = this.getNextField(nextFieldIndex, inc);
        if (!nextField) {
            return;
        }
        this.closeCurrentField();
        const focusSearchBtn = this.fieldType === fieldTypes.PERSON_TYPE &&
            this.searchFormGroup.valid &&
            nextField.id === 'tabIdx' + SEARCH_BUTTON_IDX;
        if (focusSearchBtn) {
            requestAnimationFrame(() => {
                nextField.focus();
            });
            return;
        }
        if (this.fieldType === fieldTypes.CAL_TYPE && keyType === _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.KeyType.ENTER) {
            keyType = _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.TzFocusType.MOVE_TO_INVALID;
            handlerObj.checkCurrentField = true;
        }
        if (keyType === _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.TzFocusType.MOVE_NEXT || keyType === _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.TzFocusType.MOVE_TO_INVALID) {
            const listenerObj = {
                id: nextField.id,
                checkCurrentField: true,
            };
            if (handlerObj === null || handlerObj === void 0 ? void 0 : handlerObj.checkCurrentField) {
                const isCurrentFieldValid = (this.fieldType === fieldTypes.PERSON_TYPE && this.searchFormGroup.valid) ||
                    (this.fieldType !== fieldTypes.PERSON_TYPE &&
                        this.searchFormGroup.controls[this.controllerName].valid); /*&&
                (this.fieldType !== fieldTypes.ADDR_TYPE ||
                    (this.fieldType === fieldTypes.ADDR_TYPE &&
                        typeof this.searchFormGroup.controls[this.controllerName].value === 'object'))*/
                if (isCurrentFieldValid) {
                    this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_1__.ListenerId.LISTEN_FOCUS_NEXT, listenerObj);
                    return;
                }
                nextField = this.currentField;
            }
            else {
                this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_1__.ListenerId.LISTEN_FOCUS_NEXT, listenerObj);
                return;
            }
        }
        requestAnimationFrame(() => {
            nextField.click();
            nextField.focus();
        });
    }
    moveNext(handlerObj) {
        if (!handlerObj || this.currentField.id !== handlerObj.id) {
            return;
        }
        this.handleKeyBoardEvent(handlerObj.moveTo === _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.TzFocusType.MOVE_TO_INVALID ? _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.TzFocusType.MOVE_TO_INVALID : _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_0__.TzFocusType.MOVE_NEXT, handlerObj);
    }
}
FieldNavigationDirective.ɵfac = function FieldNavigationDirective_Factory(t) { return new (t || FieldNavigationDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_2__.ListenersService)); };
FieldNavigationDirective.ɵdir = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineDirective"]({ type: FieldNavigationDirective, selectors: [["", "tzFieldNavigation", ""]], hostBindings: function FieldNavigationDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("keydown", function FieldNavigationDirective_keydown_HostBindingHandler($event) { return ctx.onKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵresolveDocument"]);
    } }, inputs: { tabindex: "tabindex", searchFormGroup: "searchFormGroup", controllerName: "controllerName", fieldType: "fieldType", ignoreEnterKey: "ignoreEnterKey" }, outputs: { closeField: "closeField" } });


/***/ }),

/***/ 10221:
/*!*****************************************************************!*\
  !*** ./src/app/modules/search/loc-field/loc-field.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LocFieldComponent": () => (/* binding */ LocFieldComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 36646);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 32673);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/keyboard-key-types.const */ 86578);
/* harmony import */ var _services_modules_services_address_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/services/address-service */ 48759);
/* harmony import */ var _services_screen_detector_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/screen-detector.service */ 15257);
/* harmony import */ var _services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modules/core/listeners-service */ 96831);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _directives_field_navigation_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../directives/field-navigation.directive */ 22864);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @ngx-translate/core */ 87514);


















const _c0 = ["locField"];
function LocFieldComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("field-icon tz-", ctx_r1.fieldConf.icon, "");
} }
function LocFieldComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div");
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("field-icon tz-icon-", ctx_r2.searchData[ctx_r2.formField.field].icon, "");
} }
function LocFieldComponent_ng_template_8_a_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).result;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](r_r5.showText);
} }
function LocFieldComponent_ng_template_8_a_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 9)(1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, LocFieldComponent_ng_template_8_a_0_div_6_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().result;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 2, "SEARCH.MY_LOCATION"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.showText);
} }
function LocFieldComponent_ng_template_8_a_1_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ngb-highlight", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    const r_r5 = ctx_r20.result;
    const t_r6 = ctx_r20.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("tz-icon-", r_r5.isCached ? "restore" : "location", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("result", r_r5.cityName + ", " + r_r5.country)("term", t_r6);
} }
const _c1 = function (a0) { return { "pl-16": a0 }; };
function LocFieldComponent_ng_template_8_a_1_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ngb-highlight", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    const r_r5 = ctx_r21.result;
    const t_r6 = ctx_r21.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c1, !r_r5.isCached));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("tz-icon-", r_r5.isCached ? "restore" : "service-flight", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("result", r_r5.cityName + " - " + r_r5.All_airports)("term", t_r6);
} }
function LocFieldComponent_ng_template_8_a_1_ng_container_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ngb-highlight", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    const r_r5 = ctx_r22.result;
    const t_r6 = ctx_r22.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](7, _c1, !r_r5.isCached));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("tz-icon-", r_r5.isCached ? "restore" : "service-train", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("result", r_r5.cityName + " - " + r_r5.All_trains)("term", t_r6);
} }
function LocFieldComponent_ng_template_8_a_1_ng_container_1_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 19);
} }
function LocFieldComponent_ng_template_8_a_1_ng_container_1_div_4_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 22);
} }
function LocFieldComponent_ng_template_8_a_1_ng_container_1_div_4_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 23);
} }
function LocFieldComponent_ng_template_8_a_1_ng_container_1_div_4_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LocFieldComponent_ng_template_8_a_1_ng_container_1_div_4_div_2_div_1_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LocFieldComponent_ng_template_8_a_1_ng_container_1_div_4_div_2_div_2_Template, 1, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4).result;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.stationType === "airport");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.stationType === "rail_station");
} }
function LocFieldComponent_ng_template_8_a_1_ng_container_1_div_4_em_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "ngb-highlight", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    const r_r5 = ctx_r29.result;
    const t_r6 = ctx_r29.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("result", r_r5.cityName + " " + r_r5.code + ", ")("term", t_r6);
} }
const _c2 = function (a0, a1) { return { "pl-16": a0, "pl-no-icon": a1 }; };
function LocFieldComponent_ng_template_8_a_1_ng_container_1_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LocFieldComponent_ng_template_8_a_1_ng_container_1_div_4_div_1_Template, 1, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LocFieldComponent_ng_template_8_a_1_ng_container_1_div_4_div_2_Template, 3, 2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, LocFieldComponent_ng_template_8_a_1_ng_container_1_div_4_em_3_Template, 2, 2, "em", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](5, "ngb-highlight", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    const r_r5 = ctx_r30.result;
    const t_r6 = ctx_r30.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction2"](7, _c2, !r_r5.isCached && r_r5.isSingleStation, !r_r5.isCached && !r_r5.isSingleStation));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.isCached);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !r_r5.isCached && r_r5.isSingleStation);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.stationType && r_r5.stationType !== "rail_station");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("result", r_r5.name)("term", t_r6);
} }
function LocFieldComponent_ng_template_8_a_1_ng_container_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "ngb-highlight", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    const r_r5 = ctx_r31.result;
    const t_r6 = ctx_r31.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMapInterpolate1"]("tz-icon-", r_r5.isCached ? "restore" : "location", "");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("result", r_r5.name)("term", t_r6);
} }
function LocFieldComponent_ng_template_8_a_1_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LocFieldComponent_ng_template_8_a_1_ng_container_1_div_1_Template, 4, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LocFieldComponent_ng_template_8_a_1_ng_container_1_div_2_Template, 4, 9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, LocFieldComponent_ng_template_8_a_1_ng_container_1_div_3_Template, 4, 9, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, LocFieldComponent_ng_template_8_a_1_ng_container_1_div_4_Template, 6, 10, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, LocFieldComponent_ng_template_8_a_1_ng_container_1_div_5_Template, 4, 5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2).result;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.isCityHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.isHeader && r_r5.stationType === "airports");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.isHeader && r_r5.stationType === "rail_stations");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.stationType && r_r5.stationType !== "city" && !r_r5.isHeader && !r_r5.isCityHeader);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.stationType === "city" && !r_r5.isHeader && !r_r5.isCityHeader);
} }
function LocFieldComponent_ng_template_8_a_1_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 19);
} }
function LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 29);
} }
function LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 30);
} }
function LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 31);
} }
function LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 22);
} }
function LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 23);
} }
function LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 32);
} }
function LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "div", 33);
} }
function LocFieldComponent_ng_template_8_a_1_div_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_1_Template, 1, 0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_2_Template, 1, 0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_3_Template, 1, 0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_4_Template, 1, 0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_5_Template, 1, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_6_Template, 1, 0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](7, LocFieldComponent_ng_template_8_a_1_div_2_div_2_div_7_Template, 1, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3).result;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !r_r5.icon || r_r5.icon === "location");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.icon === "compass");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.icon === "search");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.icon === "flight");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.icon === "train");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.icon === "car");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.icon === "hotel");
} }
function LocFieldComponent_ng_template_8_a_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LocFieldComponent_ng_template_8_a_1_div_2_div_1_Template, 1, 0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LocFieldComponent_ng_template_8_a_1_div_2_div_2_Template, 8, 7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "em");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](4, "ngb-highlight", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    const r_r5 = ctx_r43.result;
    const t_r6 = ctx_r43.term;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.isCached);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !r_r5.isCached);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("result", r_r5.api_source !== "sac" ? r_r5.longDescription : r_r5.name)("term", t_r6);
} }
function LocFieldComponent_ng_template_8_a_1_tz_icon_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](0, "tz-icon", 34);
} }
const _c3 = function (a0) { return { "selected-address": a0 }; };
function LocFieldComponent_ng_template_8_a_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LocFieldComponent_ng_template_8_a_1_ng_container_1_Template, 6, 5, "ng-container", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, LocFieldComponent_ng_template_8_a_1_div_2_Template, 5, 4, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, LocFieldComponent_ng_template_8_a_1_tz_icon_3_Template, 1, 0, "tz-icon", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const r_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().result;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](4, _c3, r_r5.selectedAddress));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.api_source === "sac");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.stationType === "" || r_r5.api_source !== "sac");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.selectedAddress);
} }
function LocFieldComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, LocFieldComponent_ng_template_8_a_0_Template, 7, 4, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, LocFieldComponent_ng_template_8_a_1_Template, 4, 6, "a", 8);
} if (rf & 2) {
    const r_r5 = ctx.result;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", r_r5.isMyLocation);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !r_r5.isMyLocation);
} }
const _c4 = function (a0) { return { "show-invert": a0 }; };
const _c5 = function (a0) { return { "optional-field": a0 }; };
const defaultPlacement = 'bottom-left | bottom-right | top-left | top-right';
class LocFieldComponent {
    constructor(addressService, screenSizeDetectorService, listenersService, dialogService) {
        this.addressService = addressService;
        this.screenSizeDetectorService = screenSizeDetectorService;
        this.listenersService = listenersService;
        this.dialogService = dialogService;
        this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({});
        this.readonly = false;
        this.editMode = false;
        this.locSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.invertFromTo = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.searchDropDownToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.dropdownPlacement = defaultPlacement;
        this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        this.inputValue = '';
        this.locationSelected = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        this.search = (text$) => {
            const inputFocus$ = this.focus$;
            const debouncedText$ = text$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.distinctUntilChanged)());
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_14__.merge)(debouncedText$, inputFocus$).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.switchMap)((term) => this.addressService.getTypeAheadList(term, this.formField, this.fieldConf, this.searchData)));
        };
    }
    get showInvertBtn() {
        var _a;
        return (this.formField.field === 'to' &&
            this.fieldConf &&
            this.fieldConf.mainOrder === 2 &&
            ((_a = this.searchData.from) === null || _a === void 0 ? void 0 : _a.displayStr) &&
            this.searchData.to.displayStr);
    }
    static getNewInput(displayStr, selectedStr) {
        for (let i = 0; i < selectedStr.length; i++) {
            if (selectedStr[i] !== displayStr[i]) {
                return displayStr[i];
            }
        }
        return undefined;
    }
    ngOnInit() {
        this.fieldConf = this.htmlConf[this.formField.confIdx][this.formField.field];
        this.screenSizeDetectorService.isMobile.subscribe((isMobile) => {
            if (isMobile) {
                this.dropdownPlacement = this.formField.fieldOrder % 2 === 0 ? 'bottom-right' : 'bottom-left';
            }
            else {
                this.dropdownPlacement = this.formField.fieldOrder > 2 ? 'bottom-right' : 'bottom-left';
            }
        });
    }
    ngAfterViewInit() {
        var _a;
        if (this.searchData[this.formField.field] && this.searchData[this.formField.field].displayStr) {
            const displayStr = this.searchData[this.formField.field].displayStr;
            this.fieldRef.nativeElement.value = displayStr;
            this.inputValue = displayStr;
        }
        else {
            this.fieldRef.nativeElement.value = '';
            this.inputValue = '';
        }
        const field = this.formGroup.controls[this.formField.field];
        (_a = field === null || field === void 0 ? void 0 : field.valueChanges) === null || _a === void 0 ? void 0 : _a.subscribe(() => {
            var _a, _b;
            if (!(field === null || field === void 0 ? void 0 : field.value)) {
                return;
            }
            if (((_a = field.value) === null || _a === void 0 ? void 0 : _a.displayStr) && field.value.displayStr !== '') {
                this.inputValue = (_b = field.value) === null || _b === void 0 ? void 0 : _b.displayStr;
            }
        });
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    invertFieldVals() {
        this.invertFromTo.emit();
    }
    onInputFocus() {
        this.searchDropDownToggle.emit(true);
    }
    // To clear input value on blur if it's not been selected from dropdown
    clearInputTxt(clear) {
        this.searchDropDownToggle.emit(false);
        this.fieldRef.nativeElement.dispatchEvent(new KeyboardEvent('keydown', {
            keyCode: 27,
            bubbles: true,
        }));
        if (this.locationSelected) {
            return;
        }
        const selectedData = this.searchData[this.formField.field];
        if (clear || !selectedData || !selectedData.placeId || selectedData.placeId === '') {
            this.fieldRef.nativeElement.value = '';
            this.updateSearch({
                selectedObj: _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__.SearchDataService.getNewLoc(),
                formField: this.formField,
            });
        }
        if (clear) {
            this.fieldRef.nativeElement.click();
            this.fieldRef.nativeElement.focus();
        }
        if ((this.editMode || this.fieldRef.nativeElement.value !== '') && !clear) {
            this.fieldRef.nativeElement.value = this.inputValue;
        }
    }
    itemSelected(selectedObj) {
        this.locationSelected = true;
        if (selectedObj.item.isMyLocation) {
            const updateUserLocation = (address) => {
                this.inputValue = address.displayStr;
                this.updateSearch({
                    selectedObj: address,
                    formField: this.formField,
                });
                requestAnimationFrame(() => {
                    this.formGroup.controls[this.formField.field].setValue(address);
                    this.focusNextField();
                });
            };
            if (selectedObj.item.placeId) {
                updateUserLocation(selectedObj.item);
                return;
            }
            this.addressService
                .checkGeoLocationAllowed()
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_16__.takeUntil)(this.destroy$))
                .subscribe((currentLocationInfo) => {
                updateUserLocation(currentLocationInfo);
            }, (error) => {
                this.formGroup.controls[this.formField.field].reset();
                this.dialogService.openSnackBar({ message: error });
                console.log('Error while fetching current location: ', error);
            });
            return;
        }
        const isCachedAddress = selectedObj.item.isCached;
        this.addressService.formSelectedAddress(selectedObj.item, this.htmlConf, this.fieldConf, this.searchData).then((res) => {
            this.updateLocData(selectedObj, res);
            this.inputValue = res.displayStr;
            this.addressService.cacheSelectedLocation(Object.assign(Object.assign({}, selectedObj.item), res), this.formField, this.fieldConf);
            if (!isCachedAddress) {
                requestAnimationFrame(() => {
                    this.focusNextField();
                });
            }
        }, (res) => {
            this.updateLocData(selectedObj, res);
            this.locationSelected = false;
            console.log('Fail: ', res);
        });
        if (isCachedAddress) {
            this.focusNextField();
        }
    }
    // TO format uib-data once selected
    formatter(obj) {
        if (typeof obj === 'string') {
            return obj;
        }
        else if (obj.displayStr) {
            return obj.displayStr;
        }
        else {
            return '';
        }
    }
    //Reset already selected search data when we try to edit
    resetOnNewInput() {
        const fieldVal = this.fieldRef.nativeElement.value;
        const selectedData = this.searchData[this.formField.field];
        if (!selectedData || !selectedData.selectedStr || fieldVal.trim() === selectedData.selectedStr.trim()) {
            return;
        }
        let input = '';
        const clearSelectedAddress = fieldVal.length > selectedData.selectedStr.length;
        if (clearSelectedAddress) {
            if (selectedData.selectedStr === fieldVal.substring(0, selectedData.selectedStr.length)) {
                input = fieldVal[fieldVal.length - 1];
            }
            else {
                const newInput = LocFieldComponent.getNewInput(fieldVal, selectedData.selectedStr);
                if (newInput) {
                    input = newInput;
                }
                else {
                    return;
                }
            }
        }
        else if (fieldVal.length < 3) {
            input = fieldVal;
        }
        else if (fieldVal.length <= selectedData.selectedStr.length) {
            return;
        }
        const newLoc = _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__.SearchDataService.getNewLoc();
        newLoc.displayStr = input;
        this.updateSearch({
            selectedObj: newLoc,
            formField: this.formField,
        });
        this.inputValue = input;
        this.fieldRef.nativeElement.value = this.inputValue;
    }
    updateSearch(obj) {
        if (!obj.selectedObj.placeId || obj.selectedObj.placeId === '') {
            this.formGroup.controls[this.formField.field].reset();
        }
        this.locSelected.emit(obj);
    }
    updateLocData(selectedObj, formedAddr) {
        if (!formedAddr) {
            selectedObj.preventDefault();
            formedAddr = _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__.SearchDataService.getNewLoc();
        }
        formedAddr.selectedStr = formedAddr && formedAddr.displayStr ? formedAddr.displayStr : '';
        this.updateSearch({
            selectedObj: formedAddr,
            formField: this.formField,
        });
    }
    focusNextField() {
        this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_1__.ListenerId.LISTEN_FOCUS_NEXT, {
            id: 'tabIdx' + this.formField.tabOrder,
            moveTo: _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_2__.TzFocusType.MOVE_NEXT,
        });
        this.locationSelected = false;
    }
}
LocFieldComponent.ɵfac = function LocFieldComponent_Factory(t) { return new (t || LocFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_modules_services_address_service__WEBPACK_IMPORTED_MODULE_3__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_screen_detector_service__WEBPACK_IMPORTED_MODULE_4__.ScreenDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_5__.ListenersService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__.DialogService)); };
LocFieldComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: LocFieldComponent, selectors: [["tz-loc-field"]], viewQuery: function LocFieldComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.fieldRef = _t.first);
    } }, inputs: { htmlConf: "htmlConf", formGroup: "formGroup", searchData: "searchData", formField: "formField", readonly: "readonly", editMode: "editMode" }, outputs: { locSelected: "locSelected", invertFromTo: "invertFromTo", searchDropDownToggle: "searchDropDownToggle" }, decls: 10, vars: 25, consts: [[1, "input-field-component", 3, "formGroup", "ngClass"], ["type", "text", "popupClass", "search-dropdown-menu", "tzFieldNavigation", "", "data-test", "flight-containers-from-to", 3, "formControlName", "placeholder", "ngbTypeahead", "resultTemplate", "inputFormatter", "placement", "fieldType", "tabindex", "searchFormGroup", "controllerName", "blur", "focus", "selectItem", "input"], ["locField", ""], [3, "class", 4, "ngIf"], ["data-test", "input-from-to-clear", 1, "field-icon", "tz-icon-clear", 3, "click"], ["data-test", "revers-flight", 1, "tz-icon-compare_arrows", 3, "click"], ["locDropdown", ""], ["data-test", "from-my-location-button", 4, "ngIf"], [3, "ngClass", 4, "ngIf"], ["data-test", "from-my-location-button"], [1, "full-width"], [1, "tz-icon-map_loc"], ["class", "my-loc-text", 4, "ngIf"], [1, "my-loc-text"], [3, "ngClass"], [4, "ngIf"], ["icon", "dropdown-checked", "class", "selected-location", 4, "ngIf"], [3, "result", "term"], ["class", "tz-icon-restore", 4, "ngIf"], [1, "tz-icon-restore"], ["class", "tz-icon-service-flight", 4, "ngIf"], ["class", "tz-icon-service-train", 4, "ngIf"], [1, "tz-icon-service-flight"], [1, "tz-icon-service-train"], ["class", "tz-icon-location", 4, "ngIf"], ["class", "tz-icon-compass", 4, "ngIf"], ["class", "tz-icon-search_txt", 4, "ngIf"], ["class", "tz-icon-service-rental", 4, "ngIf"], ["class", "tz-icon-service-hotel", 4, "ngIf"], [1, "tz-icon-location"], [1, "tz-icon-compass"], [1, "tz-icon-search_txt"], [1, "tz-icon-service-rental"], [1, "tz-icon-service-hotel"], ["icon", "dropdown-checked", 1, "selected-location"]], template: function LocFieldComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0)(1, "input", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("blur", function LocFieldComponent_Template_input_blur_1_listener() { return ctx.clearInputTxt(false); })("focus", function LocFieldComponent_Template_input_focus_1_listener($event) { ctx.focus$.next($event.target.value); return ctx.onInputFocus(); })("selectItem", function LocFieldComponent_Template_input_selectItem_1_listener($event) { return ctx.itemSelected($event); })("input", function LocFieldComponent_Template_input_input_1_listener() { return ctx.resetOnNewInput(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, LocFieldComponent_div_4_Template, 1, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, LocFieldComponent_div_5_Template, 1, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LocFieldComponent_Template_div_click_6_listener() { return ctx.clearInputTxt(true); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function LocFieldComponent_Template_div_click_7_listener() { return ctx.invertFieldVals(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, LocFieldComponent_ng_template_8_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.formGroup)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](21, _c4, ctx.showInvertBtn));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](23, _c5, ctx.fieldConf.optional));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formControlName", ctx.formField.field)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 19, ctx.editMode && ctx.fieldConf.editPlaceHolder ? ctx.fieldConf.editPlaceHolder : ctx.fieldConf.placeholder))("ngbTypeahead", ctx.search)("resultTemplate", _r3)("inputFormatter", ctx.formatter)("placement", ctx.dropdownPlacement)("fieldType", ctx.formField.fieldType)("tabindex", ctx.formField.tabOrder)("searchFormGroup", ctx.formGroup)("controllerName", ctx.formField.field);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("disabled", ctx.readonly ? true : null)("id", "tabIdx" + ctx.formField.tabOrder)("optionalField", ctx.fieldConf.optional && (!ctx.editMode || !ctx.fieldConf.editMandatory));
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.searchData[ctx.formField.field] || !ctx.searchData[ctx.formField.field].icon || ctx.searchData[ctx.formField.field].icon === "");
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.searchData[ctx.formField.field] && ctx.searchData[ctx.formField.field].icon !== "");
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbTypeahead, _directives_field_navigation_directive__WEBPACK_IMPORTED_MODULE_7__.FieldNavigationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_18__.NgbHighlight, _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_8__.TzIconComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_19__.TranslatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2MtZmllbGQuY29tcG9uZW50LnNjc3MifQ== */"], changeDetection: 0 });


/***/ }),

/***/ 19561:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/search/mob-loc-field-modal/mob-loc-field-modal.component.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobLocFieldModalComponent": () => (/* binding */ MobLocFieldModalComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);


class MobLocFieldModalComponent {
    constructor() {
        this.locFieldChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
    }
    ngOnInit() { }
}
MobLocFieldModalComponent.ɵfac = function MobLocFieldModalComponent_Factory(t) { return new (t || MobLocFieldModalComponent)(); };
MobLocFieldModalComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MobLocFieldModalComponent, selectors: [["tz-mob-loc-field-modal"]], inputs: { data: "data" }, outputs: { locFieldChange: "locFieldChange" }, decls: 2, vars: 6, consts: [[1, "mob-loc-field-modal"], [3, "isModal", "htmlConf", "formField", "formGroup", "searchData", "editMode"]], template: function MobLocFieldModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "tz-mob-loc-field", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isModal", true)("htmlConf", ctx.data.htmlConf)("formField", ctx.data.formField)("formGroup", ctx.data.formGroup)("searchData", ctx.data.searchData)("editMode", ctx.data.editMode);
    } }, styles: [".mob-loc-field-modal[_ngcontent-%COMP%] {\n  padding: 0 0 1.125rem 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1sb2MtZmllbGQtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx1QkFBQTtBQUNKIiwiZmlsZSI6Im1vYi1sb2MtZmllbGQtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9iLWxvYy1maWVsZC1tb2RhbCB7XG4gICAgcGFkZGluZzogMCAwIDEuMTI1cmVtIDA7XG59XG4iXX0= */"] });


/***/ }),

/***/ 55411:
/*!*************************************************************************!*\
  !*** ./src/app/modules/search/mob-loc-field/mob-loc-field.component.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobLocFieldComponent": () => (/* binding */ MobLocFieldComponent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_trazler_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! rxjs/operators */ 71989);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! rxjs/operators */ 98977);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/keyboard-key-types.const */ 86578);
/* harmony import */ var _mob_loc_field_modal_mob_loc_field_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mob-loc-field-modal/mob-loc-field-modal.component */ 19561);
/* harmony import */ var _services_modules_services_address_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modules/services/address-service */ 48759);
/* harmony import */ var _services_screen_detector_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/screen-detector.service */ 15257);
/* harmony import */ var _services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/modules/core/listeners-service */ 96831);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @shared/components/tz-svg-icon/tz-svg-icon.component */ 28189);
/* harmony import */ var _directives_field_navigation_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../directives/field-navigation.directive */ 22864);
/* harmony import */ var _components_mob_loc_field_results_mob_loc_field_results_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/mob-loc-field-results/mob-loc-field-results.component */ 87274);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @ngx-translate/core */ 87514);























const _c0 = ["locField"];

function MobLocFieldComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](1, "tz-svg-icon", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function MobLocFieldComponent_tz_svg_icon_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelement"](0, "tz-svg-icon", 10);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("mobile", true);
  }
}

function MobLocFieldComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MobLocFieldComponent_div_9_Template_div_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r6);
      const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r5.invertFieldVals();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
  }
}

function MobLocFieldComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 12)(1, "tz-mob-loc-field-results", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("selectItem", function MobLocFieldComponent_div_10_Template_tz_mob_loc_field_results_selectItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();
      return ctx_r7.onItemSelected($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵnextContext"]();

    const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);

    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("results", ctx_r4.results)("text", "")("isInputFocused", ctx_r4.isInputFocused)("inputValue", _r1.value)("fieldName", ctx_r4.formField.field);
  }
}

const _c1 = function (a0, a1, a2) {
  return {
    "mob-loc-field--focused": a0,
    "mob-loc-field--results": a1,
    "mob-loc-field--modal": a2
  };
};

const _c2 = function (a0, a1, a2) {
  return {
    "show-invert": a0,
    mob: a1,
    last: a2
  };
};

class MobLocFieldComponent {
  constructor(addressService, searchDataService, screenSizeDetectorService, listenersService, dialogService, platformService, modalService) {
    this.addressService = addressService;
    this.searchDataService = searchDataService;
    this.screenSizeDetectorService = screenSizeDetectorService;
    this.listenersService = listenersService;
    this.dialogService = dialogService;
    this.platformService = platformService;
    this.modalService = modalService;
    this.isModal = false;
    this.isLast = false;
    this.editMode = false;
    this.formGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroup({});
    this.locSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
    this.invertFromTo = new _angular_core__WEBPACK_IMPORTED_MODULE_14__.EventEmitter();
    this.results = [];
    this.focus$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
    this.isInputFocused = false;
    this.inputValue = '';
    this.locationSelected = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_16__.Subject();
    this.isModalOpen = false;
    this.isInputValueSet = false;
  }

  get showInvertBtn() {
    var _a, _b;

    return this.formField.field === 'to' && this.fieldConf && this.fieldConf.mainOrder === 2 && ((_a = this.searchData.from) === null || _a === void 0 ? void 0 : _a.displayStr) && ((_b = this.searchData.to) === null || _b === void 0 ? void 0 : _b.displayStr);
  }

  ngOnInit() {
    this.fieldConf = this.htmlConf[this.formField.confIdx][this.formField.field];
    this.initSearch();
  }

  ngAfterViewInit() {
    this.setValuesForm();
  }

  ngOnDestroy() {
    this.setValuesForm();
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onSearchClick() {
    var _this = this;

    return (0,_opt_atlassian_pipelines_agent_build_trazler_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (_this.isModal || _this.isModalOpen) {
        return;
      }

      if (!_this.isInputValueSet && !_this.editMode) {
        _this.clearInputTxt(true);
      }

      _this.isModalOpen = true;
      const cssClass = _this.editMode ? 'mob-second-search-modal' : 'mob-main-modal';
      const modal = yield _this.modalService.createMainModal(_mob_loc_field_modal_mob_loc_field_modal_component__WEBPACK_IMPORTED_MODULE_4__.MobLocFieldModalComponent, {
        data: {
          htmlConf: _this.htmlConf,
          formGroup: _this.formGroup,
          searchData: _this.searchData,
          formField: _this.formField,
          editMode: _this.editMode
        },
        cssClass
      });
      _this.isModalOpen = false;

      if (modal.data) {
        _this.itemSelected({
          item: modal.data
        });

        _this.formGroup.controls[_this.formField.field].setValue(modal.data.displayStr);
      }
    })();
  }

  onItemSelected(res) {
    var _this2 = this;

    return (0,_opt_atlassian_pipelines_agent_build_trazler_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this2.modalService.dismiss(res);
    })();
  }

  invertFieldVals() {
    this.invertFromTo.emit();
  }

  onInputBlockClick() {
    if (this.isModal) {
      this.fieldRef.nativeElement.focus();
    }
  }

  clearInputTxt(clear) {
    this.fieldRef.nativeElement.dispatchEvent(new KeyboardEvent('keydown', {
      keyCode: 27,
      bubbles: true
    }));

    if (this.locationSelected) {
      return;
    }

    const selectedData = this.searchData[this.formField.field];

    if (clear || !selectedData || !selectedData.placeId || selectedData.placeId === '') {
      this.fieldRef.nativeElement.value = '';
      this.updateSearch({
        selectedObj: _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_1__.SearchDataService.getNewLoc(),
        formField: this.formField
      });
    }

    if (this.fieldRef.nativeElement.value !== '' && !clear) {
      this.fieldRef.nativeElement.value = this.inputValue;
    }
  }

  itemSelected(selectedObj) {
    this.locationSelected = true;
    this.isInputValueSet = true;

    if (selectedObj.item.isMyLocation) {
      const updateUserLocation = address => {
        this.inputValue = address.displayStr;
        this.updateSearch({
          selectedObj: address,
          formField: this.formField
        });
        requestAnimationFrame(() => {
          console.log('address');
          console.log(address);
          this.formGroup.controls[this.formField.field].setValue(address.selectedStr);
          this.focusNextField();
        });
      };

      if (selectedObj.item.placeId) {
        updateUserLocation(selectedObj.item);
        return;
      }

      this.addressService.checkGeoLocationAllowed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(currentLocationInfo => {
        updateUserLocation(currentLocationInfo);
      }, error => {
        this.formGroup.controls[this.formField.field].reset();
        this.dialogService.openSnackBar({
          message: error
        });
        console.log('Error while fetching current location: ', error);
      });
      return;
    }

    const isCachedAddress = selectedObj.item.isCached;
    this.addressService.formSelectedAddress(selectedObj.item, this.htmlConf, this.fieldConf, this.searchData).then(res => {
      this.updateLocData(res);
      this.inputValue = res.displayStr;
      this.addressService.cacheSelectedLocation(Object.assign(Object.assign({}, selectedObj.item), res), this.formField, this.fieldConf);

      if (!isCachedAddress) {
        requestAnimationFrame(() => {
          this.focusNextField();
        });
      }
    }, res => {
      this.updateLocData(res);
      this.locationSelected = false;
      console.log('Fail: ', res);
    });

    if (isCachedAddress) {
      this.focusNextField();
    }
  }

  resetOnNewInput() {
    const fieldVal = this.inputValue;
    const selectedData = this.searchData[this.formField.field];

    if (!selectedData || !selectedData.selectedStr || fieldVal.trim() === selectedData.selectedStr.trim()) {
      return;
    }

    let input = '';
    const clearSelectedAddress = fieldVal.length > selectedData.selectedStr.length;

    if (clearSelectedAddress) {
      if (selectedData.selectedStr === fieldVal.substring(0, selectedData.selectedStr.length)) {
        input = fieldVal[fieldVal.length - 1];
      } else {
        const newInput = this.getNewInput(fieldVal, selectedData.selectedStr);

        if (newInput) {
          input = newInput;
        } else {
          return;
        }
      }
    } else if (fieldVal.length < 3) {
      input = fieldVal;
    } else if (fieldVal.length <= selectedData.selectedStr.length) {
      return;
    }

    const newLoc = _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_1__.SearchDataService.getNewLoc();
    newLoc.displayStr = input;
    this.updateSearch({
      selectedObj: newLoc,
      formField: this.formField
    });
  }

  onInputEnterKey() {
    var _this3 = this;

    return (0,_opt_atlassian_pipelines_agent_build_trazler_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this3.modalService.dismiss(_this3.results[0]);
    })();
  }

  onFocusInput(value) {
    this.isInputFocused = true;

    if (!value) {
      this.results = this.results.filter(result => result.isMyLocation);
    }
  }

  onBlurInput(value) {
    this.isInputFocused = false;

    if (!value) {
      this.getDefaultResults();
    }
  }

  initSearch() {
    this.formGroup.controls[this.formField.field].valueChanges.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_18__.debounceTime)(300), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_19__.distinctUntilChanged)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.takeUntil)(this.destroy$)).subscribe(text => {
      this.addressService.getTypeAheadList(text, this.formField, this.fieldConf, this.searchData).subscribe(res => {
        this.results = res;
      });
    });
    setTimeout(() => {
      if (!this.inputValue) {
        this.getDefaultResults();
      }
    }, 10);
  }

  getDefaultResults() {
    this.addressService.getTypeAheadList('', this.formField, this.fieldConf, this.searchData).subscribe(res => {
      this.results = res;
    });
  }

  updateSearch(obj) {
    if (!obj.selectedObj.placeId || obj.selectedObj.placeId === '') {
      this.formGroup.controls[this.formField.field].reset();
    }

    this.locSelected.emit(obj);
  }

  updateLocData(formedAddr) {
    if (!formedAddr) {
      formedAddr = _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_1__.SearchDataService.getNewLoc();
    }

    formedAddr.selectedStr = formedAddr && formedAddr.displayStr ? formedAddr.displayStr : '';
    this.updateSearch({
      selectedObj: formedAddr,
      formField: this.formField
    });
  }

  getNewInput(displayStr, selectedStr) {
    for (let i = 0; i < selectedStr.length; i++) {
      if (selectedStr[i] !== displayStr[i]) {
        return displayStr[i];
      }
    }

    return undefined;
  }

  focusNextField() {
    this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_FOCUS_NEXT, {
      id: 'tabIdx' + this.formField.tabOrder,
      moveTo: _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_3__.TzFocusType.MOVE_NEXT
    });
    this.locationSelected = false;
  }

  setValuesForm() {
    if (this.searchData[this.formField.field].displayStr) {
      const displayStr = this.searchData[this.formField.field].displayStr;
      this.formGroup.controls[this.formField.field].setValue(displayStr);
      this.inputValue = displayStr;
    }
  }

}

MobLocFieldComponent.ɵfac = function MobLocFieldComponent_Factory(t) {
  return new (t || MobLocFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_modules_services_address_service__WEBPACK_IMPORTED_MODULE_5__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_1__.SearchDataService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_screen_detector_service__WEBPACK_IMPORTED_MODULE_6__.ScreenDetectorService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_7__.ListenersService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_8__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_9__.PlatformService), _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_10__.ModalService));
};

MobLocFieldComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵdefineComponent"]({
  type: MobLocFieldComponent,
  selectors: [["tz-mob-loc-field"]],
  viewQuery: function MobLocFieldComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵviewQuery"](_c0, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵloadQuery"]()) && (ctx.fieldRef = _t.first);
    }
  },
  inputs: {
    htmlConf: "htmlConf",
    isModal: "isModal",
    isLast: "isLast",
    editMode: "editMode",
    formGroup: "formGroup",
    searchData: "searchData",
    formField: "formField"
  },
  outputs: {
    locSelected: "locSelected",
    invertFromTo: "invertFromTo"
  },
  decls: 11,
  vars: 26,
  consts: [[1, "mob-loc-field", 3, "ngClass"], [1, "mob-loc-field__input-block", 3, "formGroup", "ngClass", "click"], [4, "ngIf"], ["type", "search", "tzFieldNavigation", "", "autocomplete", "off", "data-mob", "search-from-to-input", 1, "mob-loc-field-input", 3, "formControlName", "placeholder", "fieldType", "tabindex", "searchFormGroup", "controllerName", "ignoreEnterKey", "readonly", "click", "input", "keydown.enter", "focus", "blur"], ["locField", ""], ["icon", "location", "class", "field-icon", 3, "mobile", 4, "ngIf"], [1, "field-icon", "tz-icon-clear", 3, "click"], ["class", "tz-icon-compare_arrows", 3, "click", 4, "ngIf"], ["class", "mob-loc-field__results", 4, "ngIf"], ["icon", "mob-loc-field-search"], ["icon", "location", 1, "field-icon", 3, "mobile"], [1, "tz-icon-compare_arrows", 3, "click"], [1, "mob-loc-field__results"], [3, "results", "text", "isInputFocused", "inputValue", "fieldName", "selectItem"]],
  template: function MobLocFieldComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵgetCurrentView"]();

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MobLocFieldComponent_Template_div_click_1_listener() {
        return ctx.onInputBlockClick();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](2, MobLocFieldComponent_div_2_Template, 2, 0, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](3, "input", 3, 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MobLocFieldComponent_Template_input_click_3_listener() {
        return ctx.onSearchClick();
      })("input", function MobLocFieldComponent_Template_input_input_3_listener() {
        return ctx.resetOnNewInput();
      })("keydown.enter", function MobLocFieldComponent_Template_input_keydown_enter_3_listener() {
        return ctx.onInputEnterKey();
      })("focus", function MobLocFieldComponent_Template_input_focus_3_listener($event) {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);

        ctx.focus$.next($event.target.value);
        return ctx.onFocusInput(_r1.value);
      })("blur", function MobLocFieldComponent_Template_input_blur_3_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵrestoreView"](_r9);

        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);

        return ctx.onBlurInput(_r1.value);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipe"](5, "translate");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](6, "div");
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](7, MobLocFieldComponent_tz_svg_icon_7_Template, 1, 1, "tz-svg-icon", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementStart"](8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵlistener"]("click", function MobLocFieldComponent_Template_div_click_8_listener() {
        return ctx.clearInputTxt(true);
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](9, MobLocFieldComponent_div_9_Template, 1, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵtemplate"](10, MobLocFieldComponent_div_10_Template, 2, 5, "div", 8);
    }

    if (rf & 2) {
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵreference"](4);

      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction3"](18, _c1, ctx.isInputFocused, _r1.value && ctx.isModal, ctx.isModal));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formGroup", ctx.formGroup)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpureFunction3"](22, _c2, ctx.showInvertBtn, ctx.platformService.isMobileDevice, ctx.isLast));
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isModal && !ctx.isInputFocused && !_r1.value);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("formControlName", ctx.formField.field)("placeholder", _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵpipeBind1"](5, 16, ctx.fieldConf.placeholder))("fieldType", ctx.formField.fieldType)("tabindex", ctx.formField.tabOrder)("searchFormGroup", ctx.formGroup)("controllerName", ctx.formField.field)("ignoreEnterKey", true)("readonly", !ctx.isModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵattribute"]("id", "tabIdx" + ctx.formField.tabOrder);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", !ctx.isModal);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_14__["ɵɵproperty"]("ngIf", ctx.isModal);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_20__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_20__.NgIf, _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_11__.TzSvgIconComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.DefaultValueAccessor, _directives_field_navigation_directive__WEBPACK_IMPORTED_MODULE_12__.FieldNavigationDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormControlName, _components_mob_loc_field_results_mob_loc_field_results_component__WEBPACK_IMPORTED_MODULE_13__.MobLocFieldResultsComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_21__.TranslatePipe],
  styles: [".mob-loc-field__input-block[_ngcontent-%COMP%] {\n  width: inherit;\n  height: 100%;\n  position: relative;\n  background: var(--ion-color-primary-contrast);\n  border: 1px solid var(--color-border-mobile);\n  border-radius: 0.25rem;\n  height: 3rem;\n}\n.mob-loc-field__input-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  color: var(--color-text-mobile);\n  font-weight: var(--font-weight-normal);\n  font-size: 1rem;\n  outline: none;\n  background-color: transparent;\n  height: 2.5rem;\n  padding: 0.75rem 2.8125rem 0.75rem 2.25rem;\n}\n.mob-loc-field__input-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  border-color: var(--color-main-purple);\n  background-color: var(--color-primary-white);\n}\n.mob-loc-field__input-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-main-dark-purple);\n  font-weight: var(--font-weight-normal);\n}\n.mob-loc-field__input-block[_ngcontent-%COMP%]   input.optional-field[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-main-dark-purple-opacity-5);\n}\n@media (max-width: 1220px) {\n  .mob-loc-field__input-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n.mob-loc-field__input-block.calendar[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding-right: 0.625rem;\n}\n.mob-loc-field__input-block[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 0.625rem;\n  transform: translate(0px, -50%);\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 1.5rem;\n  color: var(--color-main-dark-purple-opacity-2);\n}\n.mob-loc-field__input-block[_ngcontent-%COMP%]   .tz-icon-clear[_ngcontent-%COMP%] {\n  display: none;\n  left: auto;\n  right: 1rem;\n  font-size: 0.5831rem;\n  cursor: pointer;\n}\n.mob-loc-field__input-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown)    ~ .tz-icon-clear[_ngcontent-%COMP%] {\n  display: inline;\n  color: var(--color-main-dark-purple-opacity-2);\n}\n.mob-loc-field__input-block[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:not(:placeholder-shown)    ~ .tz-icon-clear[_ngcontent-%COMP%]:before {\n  font-size: 0.875rem;\n}\n.mob-loc-field__input-block.mob[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  height: 3rem;\n  padding-left: 1.75rem;\n  background-color: transparent;\n}\n.mob-loc-field__input-block.mob[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .mob-loc-field__input-block.mob[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  color: var(--color-text-mobile);\n}\n.mob-loc-field__input-block.mob[_ngcontent-%COMP%]   .tz-icon-compare_arrows[_ngcontent-%COMP%] {\n  padding: 0.313rem;\n  border-radius: 9999px;\n  top: -50%;\n  right: 10px;\n}\n.mob-loc-field__input-block.mob[_ngcontent-%COMP%]   .tz-icon-compare_arrows[_ngcontent-%COMP%]:before {\n  font-size: 1.125rem;\n  border: 1px solid var(--color-element-gray-border);\n  border-radius: 9999px;\n  padding: 2px;\n  color: var(--color-text-mobile);\n  transform: rotate(90deg);\n}\n.mob-loc-field__input-block.last[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-gray-light);\n}\n.mob-loc-field__input-block[_ngcontent-%COMP%]   .tz-icon-compare_arrows[_ngcontent-%COMP%] {\n  padding: 0.375rem;\n  background-color: var(--color-primary-white);\n  border-radius: 4px;\n  position: absolute;\n  width: -moz-fit-content;\n  width: fit-content;\n  top: -68%;\n  right: 40px;\n  z-index: 1;\n  cursor: pointer;\n  display: none;\n  color: var(--color-main-dark-purple-opacity-4);\n}\n.mob-loc-field__input-block.show-invert[_ngcontent-%COMP%]   .tz-icon-compare_arrows[_ngcontent-%COMP%] {\n  display: flex;\n}\n.mob-loc-field--modal[_ngcontent-%COMP%] {\n  background: var(--ion-color-primary-contrast);\n  position: fixed;\n  width: 100%;\n  padding: 1.125rem 1rem 0.5rem;\n}\n.mob-loc-field--modal[_ngcontent-%COMP%]   .mob-loc-field__input-block[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 0.5rem 2.5rem 0.5rem 0.625rem;\n  margin-bottom: 0;\n  background: var(--ion-color-primary-contrast);\n  border: 1px solid var(--color-border-mobile);\n  border-radius: 0.25rem;\n  height: 2.5rem;\n}\n.mob-loc-field--modal[_ngcontent-%COMP%]   .mob-loc-field__input-block[_ngcontent-%COMP%]   .mob-loc-field-input[_ngcontent-%COMP%] {\n  color: var(--color-text-mobile);\n  font-weight: 400;\n  font-size: 0.875rem;\n  height: 1.5rem;\n  padding: 0;\n}\n.mob-loc-field--modal[_ngcontent-%COMP%]   .mob-loc-field__input-block[_ngcontent-%COMP%]   .mob-loc-field-input[_ngcontent-%COMP%]::placeholder {\n  color: var(--color-grey-light-mobile);\n  opacity: 1;\n}\n.mob-loc-field--modal[_ngcontent-%COMP%]   .mob-loc-field__input-block[_ngcontent-%COMP%]   .mob-loc-field-input[_ngcontent-%COMP%]:-ms-input-placeholder {\n  color: var(--color-grey-light-mobile);\n}\n.mob-loc-field--modal[_ngcontent-%COMP%]   .mob-loc-field__input-block[_ngcontent-%COMP%]   .mob-loc-field-input[_ngcontent-%COMP%]::-ms-input-placeholder {\n  color: var(--color-grey-light-mobile);\n}\n.mob-loc-field--focused[_ngcontent-%COMP%]   .mob-loc-field__input-block[_ngcontent-%COMP%] {\n  border: 1px solid var(--ion-color-primary);\n}\n.mob-loc-field--results[_ngcontent-%COMP%]   .mob-loc-field__input-block[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.mob-loc-field__results[_ngcontent-%COMP%] {\n  padding: 5.125rem 1rem 0 1rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1sb2MtZmllbGQuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGNBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSw2Q0FBQTtFQUNBLDRDQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBREo7QUFJSTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0VBQ0EsK0JBQUE7RUFDQSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsMENBQUE7QUFGUjtBQUlRO0VBQ0ksc0NBQUE7RUFDQSw0Q0FBQTtBQUZaO0FBS1E7RUFDSSxvQ0FBQTtFQUNBLHNDQUFBO0FBSFo7QUFNUTtFQUNJLDhDQUFBO0FBSlo7QUNTRTtFRDVCRTtJQTJCUSxtQkFBQTtFQUpWO0FBQ0Y7QUFPSTtFQUNJLHVCQUFBO0FBTFI7QUFRSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLHVCQUFBO0VBQUEsa0JBQUE7RUFDQSxpQkFBQTtFQUNBLDhDQUFBO0FBTlI7QUFTSTtFQUNJLGFBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQVBSO0FBVUk7RUFDSSxlQUFBO0VBQ0EsOENBQUE7QUFSUjtBQVVRO0VBQ0ksbUJBQUE7QUFSWjtBQWFRO0VBQ0ksWUFBQTtFQUNBLHFCQUFBO0VBQ0EsNkJBQUE7QUFYWjtBQWFZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7QUFYaEI7QUFjUTtFQUNJLGlCQUFBO0VBQ0EscUJBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQVpaO0FBY1k7RUFDSSxtQkFBQTtFQUNBLGtEQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSx3QkFBQTtBQVpoQjtBQW1CWTtFQUNJLDhCQUFBO0FBakJoQjtBQXNCSTtFQUNJLGlCQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFBQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOENBQUE7QUFwQlI7QUF3QlE7RUFDSSxhQUFBO0FBdEJaO0FBMkJBO0VBQ0ksNkNBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLDZCQUFBO0FBeEJKO0FBMEJJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esc0NBQUE7RUFFQSxnQkFBQTtFQUNBLDZDQUFBO0VBQ0EsNENBQUE7RUFDQSxzQkFBQTtFQUNBLGNBQUE7QUF6QlI7QUEyQlE7RUFDSSwrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtBQXpCWjtBQTJCWTtFQUNJLHFDQUFBO0VBQ0EsVUFBQTtBQXpCaEI7QUE0Qlk7RUFDSSxxQ0FBQTtBQTFCaEI7QUE2Qlk7RUFDSSxxQ0FBQTtBQTNCaEI7QUFrQ0k7RUFDSSwwQ0FBQTtBQS9CUjtBQW9DSTtFQUNJLGdCQUFBO0FBakNSO0FBcUNBO0VBQ0ksNkJBQUE7QUFsQ0oiLCJmaWxlIjoibW9iLWxvYy1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuLm1vYi1sb2MtZmllbGRfX2lucHV0LWJsb2NrIHtcbiAgICB3aWR0aDogaW5oZXJpdDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgIGhlaWdodDogM3JlbTtcblxuXG4gICAgaW5wdXQge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgcGFkZGluZzogMC43NXJlbSAyLjgxMjVyZW0gMC43NXJlbSAyLjI1cmVtO1xuXG4gICAgICAgICY6Zm9jdXMge1xuICAgICAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgfVxuXG4gICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWRhcmstcHVycGxlKTtcbiAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICAgICAgICB9XG5cbiAgICAgICAgJi5vcHRpb25hbC1maWVsZDo6cGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tZGFyay1wdXJwbGUtb3BhY2l0eS01KTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBpbmNsdWRlIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigxMjIwcHgpIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmNhbGVuZGFyIGlucHV0IHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMC42MjVyZW07XG4gICAgfVxuXG4gICAgLmZpZWxkLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiAwLjYyNXJlbTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtNTAlKTtcbiAgICAgICAgd2lkdGg6IGZpdC1jb250ZW50O1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tZGFyay1wdXJwbGUtb3BhY2l0eS0yKTtcbiAgICB9XG5cbiAgICAudHotaWNvbi1jbGVhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICBmb250LXNpemU6IDAuNTgzMXJlbTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgIGlucHV0Om5vdCg6cGxhY2Vob2xkZXItc2hvd24pIH4gLnR6LWljb24tY2xlYXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWRhcmstcHVycGxlLW9wYWNpdHktMik7XG5cbiAgICAgICAgJjpiZWZvcmUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgICYubW9iIHtcbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgICAgaGVpZ2h0OiAzcmVtO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjc1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgICAgICYsICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50ei1pY29uLWNvbXBhcmVfYXJyb3dzIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuMzEzcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogOTk5OXB4O1xuICAgICAgICAgICAgdG9wOiAtNTAlO1xuICAgICAgICAgICAgcmlnaHQ6IDEwcHg7XG5cbiAgICAgICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWVsZW1lbnQtZ3JheS1ib3JkZXIpO1xuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDk5OTlweDtcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAycHg7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAmLmxhc3Qge1xuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICAmOjpwbGFjZWhvbGRlciB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyYXktbGlnaHQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHotaWNvbi1jb21wYXJlX2Fycm93cyB7XG4gICAgICAgIHBhZGRpbmc6IDAuMzc1cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcbiAgICAgICAgdG9wOiAtNjglO1xuICAgICAgICByaWdodDogNDBweDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1kYXJrLXB1cnBsZS1vcGFjaXR5LTQpO1xuICAgIH1cblxuICAgICYuc2hvdy1pbnZlcnQge1xuICAgICAgICAudHotaWNvbi1jb21wYXJlX2Fycm93cyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4ubW9iLWxvYy1maWVsZC0tbW9kYWwge1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgcGFkZGluZzogMS4xMjVyZW0gMXJlbSAwLjVyZW07XG5cbiAgICAubW9iLWxvYy1maWVsZF9faW5wdXQtYmxvY2sge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMi41cmVtIDAuNXJlbSAwLjYyNXJlbTtcblxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeS1jb250cmFzdCk7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1tb2JpbGUpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcblxuICAgICAgICAubW9iLWxvYy1maWVsZC1pbnB1dCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICBoZWlnaHQ6IDEuNXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG5cbiAgICAgICAgICAgICY6OnBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleS1saWdodC1tb2JpbGUpO1xuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICY6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JleS1saWdodC1tb2JpbGUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAmOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LWxpZ2h0LW1vYmlsZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5tb2ItbG9jLWZpZWxkLS1mb2N1c2VkIHtcbiAgICAubW9iLWxvYy1maWVsZF9faW5wdXQtYmxvY2sge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgfVxufVxuXG4ubW9iLWxvYy1maWVsZC0tcmVzdWx0cyB7XG4gICAgLm1vYi1sb2MtZmllbGRfX2lucHV0LWJsb2NrIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICB9XG59XG5cbi5tb2ItbG9jLWZpZWxkX19yZXN1bHRzIHtcbiAgICBwYWRkaW5nOiA1LjEyNXJlbSAxcmVtIDAgMXJlbTtcbn1cbiIsIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiJdfQ== */"]
});

/***/ }),

/***/ 45806:
/*!***********************************************************************************!*\
  !*** ./src/app/modules/search/mob-search-details/mob-search-details.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobSearchDetailsComponent": () => (/* binding */ MobSearchDetailsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/general-settings */ 12308);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/pipes/date-range.pipe */ 82478);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/state-from.const */ 54255);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_modules_checkout_services_tz_checkout_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modules/checkout/services/tz-checkout.service */ 95678);
/* harmony import */ var _services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/cart/services/cart.service */ 16750);
/* harmony import */ var _services_modules_cart_services_cart_routing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/modules/cart/services/cart-routing.service */ 72753);
/* harmony import */ var _services_services_currency_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/services/currency-service */ 60912);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shared/components/tz-svg-icon/tz-svg-icon.component */ 28189);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../shared/pipes/tz-date.pipe */ 92456);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 87514);



















function MobSearchDetailsComponent_div_0_p_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", ctx_r1.searchInfo.to, " ");
} }
function MobSearchDetailsComponent_div_0_ng_container_11_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, ctx_r3.searchInfo.adults > 1 ? "TRAVELLER.ADULTS" : "TRAVELLER.ADULT"));
} }
function MobSearchDetailsComponent_div_0_ng_container_11_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](2, 1, ctx_r4.searchInfo.people > 1 ? "TRAVELLER.PEOPLE" : "TRAVELLER.PERSON"));
} }
function MobSearchDetailsComponent_div_0_ng_container_11_ng_container_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r5.searchInfo.children, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 2, ctx_r5.searchInfo.children > 1 ? "TRAVELLER.children" : "TRAVELLER.child"), " ");
} }
function MobSearchDetailsComponent_div_0_ng_container_11_ng_container_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](1, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](2, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r6.searchInfo.rooms, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind1"](6, 2, ctx_r6.searchInfo.rooms > 1 ? "HOTELS.rOOMS" : "HOTELS.rOOM"));
} }
function MobSearchDetailsComponent_div_0_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipe"](3, "tzDate");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](4, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](5, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](7, MobSearchDetailsComponent_div_0_ng_container_11_span_7_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](8, MobSearchDetailsComponent_div_0_ng_container_11_span_8_Template, 3, 3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](9, MobSearchDetailsComponent_div_0_ng_container_11_ng_container_9_Template, 7, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](10, MobSearchDetailsComponent_div_0_ng_container_11_ng_container_10_Template, 7, 4, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r2.searchInfo.date ? _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpipeBind2"](3, 6, ctx_r2.searchInfo.date, "mediumDate") : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate1"]("", ctx_r2.currentService === 0 ? ctx_r2.searchInfo.people : ctx_r2.searchInfo.adults, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.currentService !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.currentService === 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.searchInfo.children && ctx_r2.currentService !== 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r2.searchInfo.rooms && ctx_r2.currentService === 0);
} }
const _c0 = function () { return { width: "0.63rem" }; };
function MobSearchDetailsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MobSearchDetailsComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r7.gotoRoute(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](2, "tz-svg-icon", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MobSearchDetailsComponent_div_0_Template_div_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r9.onEditSearch(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](4, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](6, MobSearchDetailsComponent_div_0_p_6_Template, 2, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](7, "div", 7)(8, "p", 8)(9, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](11, MobSearchDetailsComponent_div_0_ng_container_11_Template, 11, 9, "ng-container", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](12, "tz-svg-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](13, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵlistener"]("click", function MobSearchDetailsComponent_div_0_Template_div_click_13_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵrestoreView"](_r8); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"](); return ctx_r10.onOpenCurrencyPicker(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementStart"](14, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelement"](16, "tz-svg-icon", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mobile", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r0.searchInfo.from);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.currentService !== ctx_r0.serviceId.CAR_RENTAL || ctx_r0.currentService === ctx_r0.serviceId.CAR_RENTAL && ctx_r0.searchInfo.from !== ctx_r0.searchInfo.to);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r0.searchInfo.dateRange ? ctx_r0.searchInfo.dateRange : "");
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx_r0.currentService !== 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("mobile", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtextInterpolate"](ctx_r0.currency);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵpureFunction0"](8, _c0));
} }
class MobSearchDetailsComponent {
    constructor(changeDetectorRef, searchDataService, injector, router, datePipe, tzCheckoutService, cartService, cartRouterService, currencyService, modalService, location) {
        this.changeDetectorRef = changeDetectorRef;
        this.searchDataService = searchDataService;
        this.router = router;
        this.datePipe = datePipe;
        this.tzCheckoutService = tzCheckoutService;
        this.cartService = cartService;
        this.cartRouterService = cartRouterService;
        this.currencyService = currencyService;
        this.modalService = modalService;
        this.location = location;
        this.selectedServices = _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_0__.GeneralSettings.defaultSelectedServices;
        this.isHotelDetailsPage = false;
        this.currentService = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.INVALID;
        this.editSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_12__.EventEmitter();
        this.serviceId = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_13__.Subject();
        this.insertTime = (date, st = '', et = '') => date.replace(new RegExp('–', 'g'), st + ' –') + ' ' + et;
        this.dateRange = injector.get(_shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_2__.DateRangePipe);
        this.searchDataService.isUpdatedSearch$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.takeUntil)(this.destroy$)).subscribe(() => {
            this.serviceTitle(this.currentService);
            this.updateAccommodationStatus();
        });
    }
    ngOnInit() {
        this.serviceTitle(this.currentService);
        this.getCurrencies();
        this.currencyChange();
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    ngOnChanges(changes) {
        this.serviceTitle(this.currentService);
    }
    serviceTitle(serviceId) {
        var _a, _b, _c, _d, _e;
        this.changeDetectorRef.markForCheck();
        const { searchData, passengers } = this.searchDataService.getSearch(serviceId);
        if (!searchData) {
            return;
        }
        switch (serviceId) {
            case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.FLIGHT_TRAIN: {
                this.searchInfo = Object.assign({ to: searchData.to.displayStr, from: (_a = searchData.from) === null || _a === void 0 ? void 0 : _a.displayStr, adults: passengers.adults, children: passengers.children + passengers.infants, people: passengers.children ? passengers.children + passengers.adults : passengers.adults, rooms: passengers.rooms }, this.getDateTransform(searchData.tripCal.fromDate, searchData.tripCal.toDate));
                break;
            }
            case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC: {
                this.searchInfo = Object.assign({ to: searchData.address.displayStr, adults: passengers.adults, children: passengers.children + passengers.infants, people: passengers.total, rooms: passengers.rooms }, this.getDateTransform(searchData.tripCal.fromDate, searchData.tripCal.toDate));
                break;
            }
            case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRANSFER: {
                this.searchInfo = Object.assign({ to: (_b = searchData.address) === null || _b === void 0 ? void 0 : _b.displayStr, from: (_c = searchData.to) === null || _c === void 0 ? void 0 : _c.displayStr, adults: passengers.adults, children: passengers.children + passengers.infants, people: passengers.children ? passengers.children + passengers.adults : passengers.adults, rooms: passengers.rooms }, this.getDateTransform(searchData.transferCal.fromDate, searchData.transferCal.toDate));
                break;
            }
            case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.CAR_RENTAL: {
                this.searchInfo = {
                    from: (_d = searchData.to) === null || _d === void 0 ? void 0 : _d.displayStr,
                    to: (_e = searchData.address) === null || _e === void 0 ? void 0 : _e.displayStr,
                    adults: passengers.adults,
                    people: passengers.children ? passengers.children + passengers.adults : passengers.adults,
                    children: passengers.children + passengers.infants,
                    rooms: passengers.rooms,
                };
                if (searchData.rentalCal) {
                    this.searchInfo = Object.assign(Object.assign({}, this.searchInfo), this.getCarRentalDate(searchData.rentalCal));
                }
                break;
            }
        }
    }
    gotoRoute() {
        if (this.currentService === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC_DETAILS) {
            this.cartRouterService.goToState(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC, undefined, false, _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.ACC_DETAILS);
            return;
        }
        this.location.back();
    }
    onEditSearch() {
        this.editSearch.emit();
    }
    onOpenCurrencyPicker() {
        const wheels = [];
        this.currencies.map((lang) => {
            wheels.push({ display: lang.name, value: lang.code });
        });
        const selected = this.selectedCurrency.code;
        this.modalService.openPickerModal({ wheels, selected: [selected] }, {}).then((modal) => {
            var _a;
            if ((_a = modal.data) === null || _a === void 0 ? void 0 : _a.selected) {
                this.currencyService.setCurrency(modal.data.selected[0]);
            }
        });
    }
    getDateTransform(fromDate, toDate, st, et) {
        if (toDate && st && et) {
            return {
                dateRange: `${this.datePipe.transform(fromDate + 'T' + st, 'd MMM HH:mm')} - ${this.datePipe.transform(toDate + 'T' + et, 'MMM') ===
                    this.datePipe.transform(fromDate + 'T' + st, 'MMM')
                    ? this.datePipe.transform(toDate + 'T' + et, 'd MMM HH:mm')
                    : this.datePipe.transform(toDate + 'T' + et, 'd MMM HH:mm')}`,
            };
        }
        else if (toDate) {
            return {
                dateRange: this.datePipe.transform(fromDate, 'MMM') === this.datePipe.transform(toDate, 'MMM')
                    ? `${this.datePipe.transform(fromDate, 'd')} - ${this.datePipe.transform(toDate, 'd MMM yyyy')}`
                    : `${this.datePipe.transform(fromDate, 'd MMM')} - ${this.datePipe.transform(toDate, 'd MMM yyyy')}`,
            };
        }
        else if (fromDate && st) {
            return {
                dateRange: `${this.datePipe.transform(fromDate + 'T' + st, 'd MMM yyyy HH:mm')}`,
            };
        }
        else {
            return { date: this.insertTime(fromDate, st, et) };
        }
    }
    getCarRentalDate(rentalCal) {
        const fromDate = this.datePipe.transform(rentalCal.fromDate + 'T' + rentalCal.fromTime, 'd MMM HH:mm');
        const toDate = this.datePipe.transform(rentalCal.toDate + 'T' + rentalCal.toTime, 'd MMM YYYY HH:mm');
        return { dateRange: `${fromDate} - ${toDate}` };
    }
    updateAccommodationStatus() {
        const cartData = this.cartService.getCartData();
        if (cartData) {
            const cartSummaryItems = this.tzCheckoutService.formCheckoutCartSummary(cartData.items);
            this.accommodation = cartSummaryItems.find((selectedCart) => selectedCart.serviceId === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.ACC);
        }
    }
    getCurrencies() {
        this.currencies = this.currencyService.currencies;
    }
    currencyChange() {
        this.currencyService.selectedCurrencySubject.subscribe((currency) => {
            this.currency = currency.selectedLable;
            this.selectedCurrency = currency;
            this.changeDetectorRef.detectChanges();
        });
    }
}
MobSearchDetailsComponent.ɵfac = function MobSearchDetailsComponent_Factory(t) { return new (t || MobSearchDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_4__.SearchDataService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_12__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_15__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.DatePipe), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modules_checkout_services_tz_checkout_service__WEBPACK_IMPORTED_MODULE_5__.TzCheckoutService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_6__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_routing_service__WEBPACK_IMPORTED_MODULE_7__.CartRoutingService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_services_currency_service__WEBPACK_IMPORTED_MODULE_8__.CurrencyService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_9__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.Location)); };
MobSearchDetailsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineComponent"]({ type: MobSearchDetailsComponent, selectors: [["tz-mob-search-details"]], inputs: { selectedServices: "selectedServices", isHotelDetailsPage: "isHotelDetailsPage", currentService: "currentService" }, outputs: { editSearch: "editSearch" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "search-details", "data-mob", "mob-search-details-content", "xmlns", "http://www.w3.org/1999/html", 4, "ngIf"], ["data-mob", "mob-search-details-content", "xmlns", "http://www.w3.org/1999/html", 1, "search-details"], ["data-mob", "mob-search-details-go-back-btn", 1, "search-details__back-btn", 3, "click"], ["icon", "arrow-back-mobile", 3, "mobile"], ["data-mob", "mob-search-details-container", 1, "search-details__data", 3, "click"], ["data-mob", "mob-search-details-from", 1, "text-bold", "crop-text"], ["class", "text-bold crop-text", "data-mob", "mob-search-details-to", 4, "ngIf"], [1, "text-with-icon"], ["data-mob", "mob-search-details-options", 1, "text-normal", "crop-text"], [4, "ngIf"], ["icon", "edit-pencil", 1, "edit-pencil", 3, "mobile"], [1, "search-details__currency", 3, "click"], ["data-mob", "mob-search-details-currency"], ["icon", "arrow-down-purple", 3, "styles"], ["data-mob", "mob-search-details-to", 1, "text-bold", "crop-text"], [1, "separator", "vertical-line-separator"], [1, "separator", "comma-separator"]], template: function MobSearchDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵtemplate"](0, MobSearchDetailsComponent_div_0_Template, 17, 9, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵproperty"]("ngIf", ctx.searchInfo);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_10__.TzSvgIconComponent], pipes: [_shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_11__.TzDatePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   *[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .search-details[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 5rem 1fr 5rem;\n  background-color: var(--color-primary-white);\n  grid-gap: 0.5rem;\n  gap: 0.5rem;\n  min-height: 5rem;\n}\n[_nghost-%COMP%]   .search-details__edit-btn[_ngcontent-%COMP%] {\n  background-color: transparent;\n}\n[_nghost-%COMP%]   .search-details__back-btn[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  height: 100%;\n  padding: 2.125rem 0 2.125rem 1.5rem;\n}\n[_nghost-%COMP%]   .search-details__currency[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0.42rem;\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1rem;\n  color: var(--ion-color-primary);\n  height: 100%;\n  padding: 2rem 1.208125rem 2rem 0;\n}\n[_nghost-%COMP%]   .search-details__data[_ngcontent-%COMP%] {\n  align-self: center;\n  text-align: center;\n  padding: 0.75rem 0;\n  min-width: 0;\n}\n[_nghost-%COMP%]   .search-details__data[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 0.25rem;\n}\n[_nghost-%COMP%]   .search-details__data[_ngcontent-%COMP%]   .edit-pencil[_ngcontent-%COMP%] {\n  width: 0.7813rem;\n  height: 0.7813rem;\n}\n[_nghost-%COMP%]   .search-details__data[_ngcontent-%COMP%]   .separator[_ngcontent-%COMP%]:after {\n  font-weight: 100;\n  font-size: 0.75rem;\n  line-height: 0.87875rem;\n  margin: 0 0.1875rem;\n}\n[_nghost-%COMP%]   .search-details__data[_ngcontent-%COMP%]   .comma-separator[_ngcontent-%COMP%]:after {\n  content: \",\";\n  margin-left: 0;\n}\n[_nghost-%COMP%]   .search-details__data[_ngcontent-%COMP%]   .vertical-line-separator[_ngcontent-%COMP%]:after {\n  content: \"|\";\n}\n[_nghost-%COMP%]   .search-details__data[_ngcontent-%COMP%]   .text-bold[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1rem;\n}\n[_nghost-%COMP%]   .search-details__data[_ngcontent-%COMP%]   .text-normal[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 0.875rem;\n}\n[_nghost-%COMP%]   .search-details__data[_ngcontent-%COMP%]   .text-with-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  height: 1rem;\n  gap: 0.25rem;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .search-details[_ngcontent-%COMP%]   .crop-text[_ngcontent-%COMP%], [_nghost-%COMP%]   .search-details[_ngcontent-%COMP%]   .text-normal[_ngcontent-%COMP%] {\n  color: var(--color-text-mobile);\n}\n[_nghost-%COMP%]   .search-details[_ngcontent-%COMP%]   .crop-text[_ngcontent-%COMP%] {\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi1zZWFyY2gtZGV0YWlscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLE9BQUE7QUFDSjtBQUNJO0VBQ0ksU0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtBQUNSO0FBRUk7RUFDSSxhQUFBO0VBQ0Esb0NBQUE7RUFDQSw0Q0FBQTtFQUNBLGdCQUFBO0VBQUEsV0FBQTtFQUNBLGdCQUFBO0FBQVI7QUFFUTtFQUNJLDZCQUFBO0FBQVo7QUFHUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxtQ0FBQTtBQURaO0FBSVE7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLFlBQUE7RUFDQSxnQ0FBQTtBQUZaO0FBS1E7RUFDSSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBSFo7QUFLWTtFQUNJLHNCQUFBO0FBSGhCO0FBTVk7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0FBSmhCO0FBT1k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUxoQjtBQVFZO0VBQ0ksWUFBQTtFQUNBLGNBQUE7QUFOaEI7QUFTWTtFQUNJLFlBQUE7QUFQaEI7QUFXZ0I7RUFDSSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7QUFUcEI7QUFZZ0I7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFWcEI7QUFhZ0I7RUFDSSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBWHBCO0FBZVE7RUFDSSwrQkFBQTtBQWJaO0FBZ0JRO0VBQ0ksdUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBZFoiLCJmaWxlIjoibW9iLXNlYXJjaC1kZXRhaWxzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGZsZXg6IDE7XG5cbiAgICAqIHtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIC5zZWFyY2gtZGV0YWlscyB7XG4gICAgICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNXJlbSAxZnIgNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgIGdhcDogMC41cmVtO1xuICAgICAgICBtaW4taGVpZ2h0OiA1cmVtO1xuXG4gICAgICAgICZfX2VkaXQtYnRuIHtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fYmFjay1idG4ge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBwYWRkaW5nOiAyLjEyNXJlbSAwIDIuMTI1cmVtIDEuNXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgICZfX2N1cnJlbmN5IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgICBnYXA6IDAuNDJyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJyZW0gMS4yMDgxMjVyZW0gMnJlbSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgJl9fZGF0YSB7XG4gICAgICAgICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtIDA7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XG5cbiAgICAgICAgICAgICYgPiAqOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5lZGl0LXBlbmNpbCB7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDAuNzgxM3JlbTtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDAuNzgxM3JlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnNlcGFyYXRvcjphZnRlciB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDAuODc4NzVyZW07XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDAuMTg3NXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLmNvbW1hLXNlcGFyYXRvcjphZnRlciB7XG4gICAgICAgICAgICAgICAgY29udGVudDogJywnO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAudmVydGljYWwtbGluZS1zZXBhcmF0b3I6YWZ0ZXIge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICd8JztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHQge1xuICAgICAgICAgICAgICAgICYtYm9sZCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYtbm9ybWFsIHtcbiAgICAgICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC44NzVyZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJi13aXRoLWljb24ge1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGdhcDogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLmNyb3AtdGV4dCwgLnRleHQtbm9ybWFsIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgIH1cblxuICAgICAgICAuY3JvcC10ZXh0IHtcbiAgICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"], changeDetection: 0 });


/***/ }),

/***/ 37191:
/*!*****************************************************************!*\
  !*** ./src/app/modules/search/passenger/passenger.component.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PassengerComponent": () => (/* binding */ PassengerComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/utils/tz-passenger.util */ 84673);
/* harmony import */ var _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/general-settings */ 12308);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs/operators */ 59295);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 97544);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _services_modules_cart_services_cart_routing_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/modules/cart/services/cart-routing.service */ 72753);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _directives_field_navigation_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directives/field-navigation.directive */ 22864);
/* harmony import */ var _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/components/tz-svg-icon/tz-svg-icon.component */ 28189);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _shared_directives_max_limit_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/directives/max-limit.directive */ 51977);




















const _c0 = ["passengerPopup"];
const _c1 = ["driverAgeField"];
function PassengerComponent_div_0_button_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](3, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tabindex", ctx_r3.config.tabOrder)("searchFormGroup", ctx_r3.passengersFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("id", "tabIdx" + ctx_r3.config.tabOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r3.selectedPax.displayStr, " ");
} }
function PassengerComponent_div_0_button_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "input", 14)(2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tabindex", ctx_r4.config.tabOrder)("searchFormGroup", ctx_r4.passengersFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("id", "tabIdx" + ctx_r4.config.tabOrder);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", ctx_r4.selectedPax.displayStr)("disabled", true);
} }
const _c2 = function (a0) { return { disabled: a0 }; };
const _c3 = function () { return { "width.px": 12, "height.px": 10 }; };
const _c4 = function () { return { "width.px": 12, "height.px": 12 }; };
function PassengerComponent_div_0_ng_container_5_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 19)(5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_0_ng_container_5_div_1_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r9.addRooms(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "tz-svg-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_0_ng_container_5_div_1_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r10); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r11.addRooms(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "tz-svg-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 6, "HOTELS.ROOMS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](8, _c2, ctx_r7.selectedPax.rooms <= ctx_r7.passengerRules.minRoom));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](10, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r7.selectedPax.rooms, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](11, _c2, ctx_r7.selectedPax.rooms >= ctx_r7.passengerRules.maxRoom || ctx_r7.selectedPax.adults <= ctx_r7.selectedPax.rooms));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](13, _c4));
} }
function PassengerComponent_div_0_ng_container_5_ng_container_24_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](2, "ng-select", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r14 = ctx.index;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroupName", i_r14);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("items", ctx_r12.childAgesList)("selectOnTab", true)("clearable", false)("searchable", false);
} }
function PassengerComponent_div_0_ng_container_5_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, PassengerComponent_div_0_ng_container_5_ng_container_24_ng_container_2_Template, 3, 5, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r8.childAges.controls);
} }
function PassengerComponent_div_0_ng_container_5_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PassengerComponent_div_0_ng_container_5_div_1_Template, 11, 14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 17)(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 19)(7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_0_ng_container_5_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r15.addAdults(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "tz-svg-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_0_ng_container_5_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r17.addAdults(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "tz-svg-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 25)(14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 19)(18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_0_ng_container_5_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r18.addChild(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "tz-svg-icon", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_0_ng_container_5_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r16); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r19.addChild(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "tz-svg-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, PassengerComponent_div_0_ng_container_5_ng_container_24_Template, 3, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.config.rooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 14, "SEARCH.ADULTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](18, _c2, ctx_r5.selectedPax.adults <= ctx_r5.passengerRules.minAdult));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](20, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r5.selectedPax.adults, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](21, _c2, ctx_r5.selectedPax.total >= ctx_r5.passengerRules.maxAllowedPersons));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](23, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 16, "SEARCH.CHILDREN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](24, _c2, ctx_r5.selectedPax.child <= ctx_r5.passengerRules.minChild));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](26, _c3));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r5.selectedPax.child, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](27, _c2, ctx_r5.selectedPax.child >= ctx_r5.passengerRules.maxChild || ctx_r5.selectedPax.total >= ctx_r5.passengerRules.maxAllowedPersons));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("styles", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](29, _c4));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.selectedPax.child > 0);
} }
const _c5 = function (a0) { return { "driver-only": a0 }; };
function PassengerComponent_div_0_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 38)(5, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "input", 39, 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](5, _c5, ctx_r6.config.driverOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 3, "CAR_RENTAL.DRIVERS_AGE_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tzMaxLimit", 2);
} }
function PassengerComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 2, 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("openChange", function PassengerComponent_div_0_Template_div_openChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r21.dropDownChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, PassengerComponent_div_0_button_2_Template, 4, 4, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](3, PassengerComponent_div_0_button_3_Template, 3, 5, "button", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, PassengerComponent_div_0_ng_container_5_Template, 25, 30, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](6, PassengerComponent_div_0_div_6_Template, 8, 7, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_0_Template_button_click_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r22); const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵreference"](1); const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); $event.stopPropagation(); _r2.close(); return ctx_r23.applyPassengersInfo(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("placement", ctx_r0.dropdownPosition);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx_r0.passengersFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r0.config.driverOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.config.driver);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 7, "GENERAL.DONE"), " ");
} }
function PassengerComponent_div_1_input_1_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "input", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("focus", function PassengerComponent_div_1_input_1_Template_input_focus_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r28.onOpenPassengerModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("tabindex", ctx_r24.config.tabOrder)("searchFormGroup", ctx_r24.passengersFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵattribute"]("id", "tabIdx" + ctx_r24.config.tabOrder);
} }
function PassengerComponent_div_1_div_2_span_2_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, "\u00A0|");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function PassengerComponent_div_1_div_2_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PassengerComponent_div_1_div_2_span_2_span_1_Template, 2, 0, "span", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const person_r31 = ctx.$implicit;
    const i_r32 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", i_r32 === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"]("", person_r31, " ");
} }
function PassengerComponent_div_1_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_1_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r34.onOpenPassengerModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "tz-svg-icon", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, PassengerComponent_div_1_div_2_span_2_Template, 3, 2, "span", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("mobile", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r25.mobSelectedPax);
} }
function PassengerComponent_div_1_ng_container_4_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 17)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 19)(5, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_1_ng_container_4_div_1_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39); const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r38.addRooms(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](6, "tz-svg-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_1_ng_container_4_div_1_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r39); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3); return ctx_r40.addRooms(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](10, "tz-svg-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 6, "HOTELS.ROOMS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](8, _c2, ctx_r36.selectedPax.rooms <= ctx_r36.passengerRules.minRoom));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("stretch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r36.selectedPax.rooms, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](10, _c2, ctx_r36.selectedPax.rooms >= ctx_r36.passengerRules.maxRoom || ctx_r36.selectedPax.adults <= ctx_r36.selectedPax.rooms));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("stretch", true);
} }
const _c6 = function (a0) { return { "mob-select-child-age-text-selected": a0 }; };
function PassengerComponent_div_1_ng_container_4_ng_container_24_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0, 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 57)(2, "div", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_1_ng_container_4_ng_container_24_ng_container_2_Template_div_click_2_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r45); const i_r43 = restoredCtx.index; const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](4); return ctx_r44.onMobSelectChildAge(ctx_r44.childAgesList, i_r43); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](7, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "tz-svg-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const childAgeGrp_r42 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](6, _c6, childAgeGrp_r42.value.childAge !== -1));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", childAgeGrp_r42.value.childAge !== -1 ? childAgeGrp_r42.value.childAge === 0 ? _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 2, "TRAVELLER.upto2") : childAgeGrp_r42.value.childAge : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](6, 4, "TRAVELLER.AGE_NEEDED"), " ");
} }
function PassengerComponent_div_1_ng_container_4_ng_container_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, PassengerComponent_div_1_ng_container_4_ng_container_24_ng_container_2_Template, 9, 8, "ng-container", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r37.childAges.controls);
} }
function PassengerComponent_div_1_ng_container_4_Template(rf, ctx) { if (rf & 1) {
    const _r47 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PassengerComponent_div_1_ng_container_4_div_1_Template, 11, 12, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 17)(3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 19)(7, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_1_ng_container_4_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47); const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r46.addAdults(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](8, "tz-svg-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_1_ng_container_4_Template_div_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47); const ctx_r48 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r48.addAdults(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](12, "tz-svg-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](13, "div", 25)(14, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](16, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 19)(18, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_1_ng_container_4_Template_div_click_18_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47); const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r49.addChild(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](19, "tz-svg-icon", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_1_ng_container_4_Template_div_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r47); const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r50.addChild(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](23, "tz-svg-icon", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, PassengerComponent_div_1_ng_container_4_ng_container_24_Template, 3, 1, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r26.config.rooms);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](5, 14, "SEARCH.ADULTS"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](18, _c2, ctx_r26.selectedPax.adults <= ctx_r26.passengerRules.minAdult));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("stretch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r26.selectedPax.adults, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](20, _c2, ctx_r26.selectedPax.total >= ctx_r26.passengerRules.maxAllowedPersons));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("stretch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](16, 16, "SEARCH.CHILDREN"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](22, _c2, ctx_r26.selectedPax.child <= ctx_r26.passengerRules.minChild));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("stretch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r26.selectedPax.child, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](24, _c2, ctx_r26.selectedPax.child >= ctx_r26.passengerRules.maxChild || ctx_r26.selectedPax.total >= ctx_r26.passengerRules.maxAllowedPersons));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("stretch", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r26.selectedPax.child > 0);
} }
function PassengerComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r52 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 62)(1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_1_div_5_Template_div_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r52); const ctx_r51 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2); return ctx_r51.onMobSelectDriverAge(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "span", 59);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](7, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "span", 60);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](9, "tz-svg-icon", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](8, _c5, ctx_r27.config.driverOnly));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](3, 4, "CAR_RENTAL.DRIVERS_AGE_LABEL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](10, _c6, ctx_r27.passengersFormGroup.controls["driversAge"].value));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", ctx_r27.passengersFormGroup.controls["driversAge"].value ? ctx_r27.passengersFormGroup.controls["driversAge"].value : _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](7, 6, "TRAVELLER.AGE_NEEDED"), " ");
} }
const _c7 = function (a0) { return { "search-passenger-mob": a0 }; };
const _c8 = function (a0) { return { "apply-btn-invalid": a0 }; };
function PassengerComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r54 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PassengerComponent_div_1_input_1_Template, 1, 3, "input", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, PassengerComponent_div_1_div_2_Template, 3, 2, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](4, PassengerComponent_div_1_ng_container_4_Template, 25, 26, "ng-container", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](5, PassengerComponent_div_1_div_5_Template, 10, 12, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "div", 46)(7, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function PassengerComponent_div_1_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r54); const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r53.applyPassengersInfo(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipe"](9, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](11, _c7, ctx_r1.isMobSearch));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.selectedPax && !ctx_r1.data);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("hidden", !ctx_r1.data)("formGroup", ctx_r1.passengersFormGroup);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx_r1.config.driverOnly);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r1.config.driver);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction1"](13, _c8, !ctx_r1.isChildAgesValid));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpipeBind1"](9, 9, "GENERAL.DONE"), " ");
} }
class PassengerComponent {
    constructor(translateService, settingsService, cartRoutingService, platformService, modalService, changeDetectorRef) {
        this.translateService = translateService;
        this.settingsService = settingsService;
        this.cartRoutingService = cartRoutingService;
        this.platformService = platformService;
        this.modalService = modalService;
        this.changeDetectorRef = changeDetectorRef;
        this.passengersFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroup({});
        this.editMode = false;
        this.isMobSearch = false;
        this.readonly = false;
        this.selectedServices = _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_1__.GeneralSettings.defaultSelectedServices;
        this.applyPax = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.addNewChild = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.focusInvalid = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.searchDropDownToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_9__.EventEmitter();
        this.passengerRules = _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_1__.GeneralSettings.passengerRules;
        this.childAgesList = [];
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        this.initiateChildrenDropdown();
        this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$)).subscribe(() => {
            const passengerReq = _core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_0__.TzPassengerUtil.MakePassengerReq(this.selectedServices, this.selectedPax, this.translateService);
            this.selectedPax.displayStr = passengerReq.displayStr;
            this.initiateChildrenDropdown();
        });
    }
    get childAges() {
        return this.passengersFormGroup.controls['childAges'];
    }
    get dropdownPosition() {
        return this.editMode ? 'bottom-end' : 'bottom-start';
    }
    get isChildAgesValid() {
        let isFormValid = true;
        this.childAges.value.map((childAge) => {
            if (childAge.childAge === -1) {
                isFormValid = false;
            }
        });
        return isFormValid;
    }
    get mobSelectedPax() {
        return this.selectedPax.displayStr ? this.selectedPax.displayStr.split(',') : [];
    }
    ngOnInit() {
        this.mobSetInputData();
    }
    ngOnChanges(changes) {
        var _a;
        if (changes['config']) {
            this.selectedPax = _core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_0__.TzPassengerUtil.FormPax(this.selectedServices, this.passenger, this.translateService);
            this.config.driverOnly = _core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_0__.TzPassengerUtil.rentalOnly(this.selectedServices);
            this.reInitPassengersInfo();
            this.childAges.addValidators(this.infantsLimitValidator());
            if (!this.config.driverOnly) {
                this.passengersFormGroup.addControl('adults', new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', this.adultsLimitValidator()));
            }
            else {
                this.passengersFormGroup.removeControl('adults');
            }
        }
        if (changes['resetOldValue'] && changes['resetOldValue'].currentValue) {
            this.selectedPax = _core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_0__.TzPassengerUtil.FormPax(this.selectedServices, this.passenger, this.translateService);
            this.applyPassengersInfo();
            this.childAges.addValidators(this.infantsLimitValidator());
        }
        if (changes['passengersFormGroup']) {
            (_a = this.passengersFormGroup) === null || _a === void 0 ? void 0 : _a.statusChanges.subscribe((result) => {
                this.applyPassengersInfo();
            });
        }
    }
    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.complete();
    }
    addAdults(n) {
        this.selectedPax.adults += n;
        const isMoreRoomsThanAdult = this.config.rooms && this.selectedPax.adults < this.selectedPax.rooms;
        if (isMoreRoomsThanAdult) {
            this.selectedPax.rooms = this.selectedPax.adults;
        }
        this.childAges.updateValueAndValidity();
        this.setTotal();
        this.passengersFormGroup.controls['adults'].updateValueAndValidity();
    }
    addChild(n) {
        this.selectedPax.child += n;
        if (n === 1) {
            this.addNewChild.emit(-1);
            if (this.platformService.isMobileDevice && this.data) {
                this.childAges.addValidators(this.infantsLimitValidator());
                this.data.addNewChild$.next(-1);
            }
        }
        else {
            const idx = this.childAges.length - 1;
            this.childAges.removeAt(idx);
        }
        this.setTotal();
    }
    addRooms(n) {
        this.selectedPax.rooms += n;
        this.selectedPax.isDefault = false;
        this.applyPassengersInfo();
    }
    reInitPassengersInfo(dropdownClosed = false) {
        const passengerReq = _core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_0__.TzPassengerUtil.MakePassengerReq(this.selectedServices, this.selectedPax, this.translateService);
        this.selectedPax.displayStr = passengerReq.displayStr;
        this.applyPax.emit({ passenger: passengerReq });
        if (this.platformService.isMobileDevice && this.data) {
            this.data.applyPax$.next({ passenger: passengerReq });
        }
        if (dropdownClosed) {
            this.focusInvalid.emit();
            if (this.platformService.isMobileDevice) {
                this.modalService.dismiss();
            }
        }
    }
    applyPassengersInfo(dropdownClosed = false) {
        const ages = this.passengersFormGroup.value;
        this.selectedPax.driversAge = ages.driversAge;
        this.selectedPax.childAges = ages.childAges.map((ageObj) => ageObj.childAge);
        this.reInitPassengersInfo(dropdownClosed);
    }
    isInValidField(controlName) {
        const fieldControl = this.passengersFormGroup.controls[controlName];
        return (fieldControl.invalid &&
            (fieldControl.touched || fieldControl.dirty || (fieldControl.value !== null && fieldControl.value !== '')));
    }
    dropDownChange(isOpen) {
        this.searchDropDownToggle.emit(isOpen);
        if (isOpen) {
            this.cartRoutingService.currentServiceId
                .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_12__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_14__.take)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_13__.takeUntil)(this.destroy$))
                .subscribe((serviceId) => {
                this.passengerPopup.close();
            });
            requestAnimationFrame(() => {
                var _a;
                (_a = this.driverAge) === null || _a === void 0 ? void 0 : _a.nativeElement.focus();
            });
        }
    }
    onOpenPassengerModal() {
        const applyPax$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        const addNewChild$ = new rxjs__WEBPACK_IMPORTED_MODULE_11__.Subject();
        const cssClass = this.editMode ? 'mob-second-search-modal' : 'mob-main-modal';
        const data = {
            passenger: this.passenger,
            passengerAges: this.passengersFormGroup,
            config: this.config,
            selectedServices: this.selectedServices,
            selectedPax: this.selectedPax,
            applyPax$,
            addNewChild$,
        };
        addNewChild$.subscribe((data2) => {
            this.addNewChild.emit(data2);
            this.childAges.addValidators(this.infantsLimitValidator());
        });
        applyPax$.subscribe((data2) => {
            this.applyPax.emit(data2);
            this.childAges.addValidators(this.infantsLimitValidator());
        });
        this.modalService.createMainModal(PassengerComponent, { data, cssClass }).then(() => {
            this.applyPassengersInfo();
            this.childAges.addValidators(this.infantsLimitValidator());
        });
    }
    onMobSelectChildAge(childAgesList, index) {
        const childAgeWheels = [];
        childAgesList.map((childAge) => {
            if (childAge.value !== -1) {
                childAgeWheels.push({ display: childAge.label, value: childAge.value });
            }
        });
        const selectedChildAges = this.passengersFormGroup.controls['childAges'].value[index].childAge;
        const selected = selectedChildAges && selectedChildAges !== -1 ? selectedChildAges : childAgeWheels[0].value;
        this.modalService
            .openPickerModal({ wheels: childAgeWheels, selected: [selected] }, { title: 'PICKER.SELECT_CHILD_AGE' })
            .then((modal) => {
            if (!modal.data) {
                return;
            }
            if (modal.data.selected) {
                const childAges = this.passengersFormGroup.controls['childAges'];
                childAges.controls[index].patchValue({ childAge: parseInt(modal.data.selected[0], 10) });
                this.changeDetectorRef.detectChanges();
            }
        });
    }
    onMobSelectDriverAge() {
        const minDriverAge = _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_1__.GeneralSettings.passengerRules.minDriverAge;
        const maxDriverAge = _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_1__.GeneralSettings.passengerRules.maxDriverAge;
        const driverAges = [];
        for (let i = minDriverAge; i <= maxDriverAge; i++) {
            driverAges.push({ display: i, value: i });
        }
        const driverAge = this.passengersFormGroup.controls['driversAge'].value;
        const selected = driverAge ? driverAge : driverAges[0].value;
        this.modalService
            .openPickerModal({ wheels: driverAges, selected: [selected] }, { title: 'CAR_RENTAL.DRIVERS_AGE_LABEL' })
            .then((modal) => {
            if (!modal.data) {
                return;
            }
            if (modal.data.selected) {
                this.passengersFormGroup.controls['driversAge'].patchValue(parseInt(modal.data.selected[0], 10));
                this.changeDetectorRef.detectChanges();
            }
        });
    }
    setTotal() {
        this.selectedPax.total = this.selectedPax.adults + this.selectedPax.child;
        this.selectedPax.isDefault = false;
        this.applyPassengersInfo();
    }
    adultsLimitValidator() {
        return (control) => this.selectedPax.adults <= 0 ? { Invalid: true } : null;
    }
    infantsLimitValidator() {
        return (control) => {
            const totalInfants = control.value.filter((ageObj) => ageObj.childAge === 0);
            return this.selectedPax.adults < totalInfants.length ? { Invalid: true } : null;
        };
    }
    initiateChildrenDropdown() {
        this.childAgesList = [
            { value: -1, label: this.translateService.instant('TRAVELLER.AGE_NEEDED') },
            { value: 0, label: this.translateService.instant('TRAVELLER.upto2') },
        ];
        for (let j = this.passengerRules.childMinAge; j <= this.passengerRules.childMaxAge; j++) {
            this.childAgesList.push({
                value: j,
                label: j.toString(),
            });
        }
    }
    mobSetInputData() {
        if (this.platformService.isMobileDevice && this.data) {
            this.passenger = this.data.passenger;
            this.passengersFormGroup = this.data.passengerAges;
            this.config = this.data.config;
            this.selectedServices = this.data.selectedServices;
            this.selectedPax = this.data.selectedPax;
            this.data.passengerAges.valueChanges.subscribe((val) => {
                console.log('this.data.passengerAges');
                if (this.data) {
                    console.log(this.data.passengerAges);
                    this.childAges.addValidators(this.infantsLimitValidator());
                    console.log('this.childAges.valid');
                    console.log(this.childAges.valid);
                }
            });
            console.log('this.data.passengerAges.valid');
            console.log(this.data.passengerAges.valid);
        }
    }
}
PassengerComponent.ɵfac = function PassengerComponent_Factory(t) { return new (t || PassengerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_2__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_routing_service__WEBPACK_IMPORTED_MODULE_3__.CartRoutingService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_4__.PlatformService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_5__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.ChangeDetectorRef)); };
PassengerComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: PassengerComponent, selectors: [["tz-passenger"]], viewQuery: function PassengerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c0, 5, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdown);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵviewQuery"](_c1, 5, _angular_core__WEBPACK_IMPORTED_MODULE_9__.ElementRef);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.passengerPopup = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵloadQuery"]()) && (ctx.driverAge = _t.first);
    } }, inputs: { passenger: "passenger", passengersFormGroup: "passengersFormGroup", editMode: "editMode", isMobSearch: "isMobSearch", resetOldValue: "resetOldValue", readonly: "readonly", selectedServices: "selectedServices", config: "config" }, outputs: { applyPax: "applyPax", addNewChild: "addNewChild", focusInvalid: "focusInvalid", searchDropDownToggle: "searchDropDownToggle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [["class", "passenger-container", "ngbDropdown", "", "data-test", "searching-page-passenger-container", 3, "placement", "openChange", 4, "ngIf"], ["class", "tz-passenger", "data-test", "searching-page-passenger-container", 3, "ngClass", 4, "ngIf"], ["ngbDropdown", "", "data-test", "searching-page-passenger-container", 1, "passenger-container", 3, "placement", "openChange"], ["passengerPopup", "ngbDropdown"], ["class", "search-option body-1 passenger-option", "ngbDropdownToggle", "", "tzFieldNavigation", "", "fieldType", "person", "data-test", "count-of-passenger", 3, "tabindex", "searchFormGroup", 4, "ngIf"], ["class", "input-field-component", "ngbDropdownToggle", "", "tzFieldNavigation", "", "fieldType", "person", 3, "tabindex", "searchFormGroup", 4, "ngIf"], ["ngbDropdownMenu", "", "data-test", "searching-page-passenger-popup-container", 1, "passenger-popup-container", "tz-popup-container", 3, "formGroup"], [4, "ngIf"], ["class", "passenger-row flex align-center space-between driver-age-row mb-0", "data-test", "result-page-passenger-age", 3, "ngClass", 4, "ngIf"], ["data-test", "searching-page-passenger-popup-container-done", 1, "btn", "select-btn", "selected", "apply-btn", 3, "click"], ["ngbDropdownToggle", "", "tzFieldNavigation", "", "fieldType", "person", "data-test", "count-of-passenger", 1, "search-option", "body-1", "passenger-option", 3, "tabindex", "searchFormGroup"], ["data-test", "searching-page-pax", 1, "tz-icon-person", "tz-icon"], [1, "tz-icon-arrow", "arrow"], ["ngbDropdownToggle", "", "tzFieldNavigation", "", "fieldType", "person", 1, "input-field-component", 3, "tabindex", "searchFormGroup"], ["data-test", "result-page-search-bar-adults", "type", "text", 3, "value", "disabled"], [1, "field-icon", "tz-icon-person"], ["class", "passenger-row flex align-center space-between", 4, "ngIf"], [1, "passenger-row", "flex", "align-center", "space-between"], [1, "data-txt"], [1, "flex-center"], ["data-test", "passenger-row-selected-count-adults-subtract", 1, "select-btn", "flex-center", "pointer", 3, "ngClass", "click"], ["icon", "tz-main-minus", 3, "styles"], ["data-test", "passenger-row-selected-count-adults", 1, "selected-count", "flex-center"], ["data-test", "passenger-row-selected-count-adults-add", 1, "select-btn", "flex-center", "pointer", 3, "ngClass", "click"], ["icon", "tz-main-plus", 3, "styles"], [1, "passenger-row", "flex", "align-center", "space-between", "mb-0"], ["data-test", "passenger-row-selected-count-child-subtract", 1, "select-btn", "flex-center", "pointer", 3, "ngClass", "click"], ["data-test", "passenger-row-selected-count-child", 1, "selected-count", "flex-center"], ["data-test", "passenger-row-selected-count-child-add", 1, "select-btn", "flex-center", "pointer", 3, "ngClass", "click"], ["data-test", "passenger-row-selected-count-rooms-subtract", 1, "select-btn", "flex-center", "pointer", 3, "ngClass", "click"], ["data-test", "passenger-row-selected-count-rooms", 1, "selected-count", "flex-center"], ["data-test", "passenger-row-selected-count-rooms-add", 1, "select-btn", "flex-center", "pointer", 3, "ngClass", "click"], ["data-test", "passenger-row-select-child-age", 1, "passenger-row", "flex", "wrap", "align-center", "space-between", "child-age-container", "mb-0"], ["formArrayName", "childAges", 4, "ngFor", "ngForOf"], ["formArrayName", "childAges"], [3, "formGroupName"], ["bindLabel", "label", "bindValue", "value", "formControlName", "childAge", "dropdownPosition", "bottom", "data-test", "passenger-row-child-age-container", 1, "child-age-container", "ng-select-no-dropdown-margin", 3, "items", "selectOnTab", "clearable", "searchable"], ["data-test", "result-page-passenger-age", 1, "passenger-row", "flex", "align-center", "space-between", "driver-age-row", "mb-0", 3, "ngClass"], [1, "driver-field-container", "mt-0"], ["type", "number", "formControlName", "driversAge", "min", "21", "max", "80", "data-test", "passenger-row-input-age", 3, "tzMaxLimit"], ["driverAgeField", ""], ["data-test", "searching-page-passenger-container", 1, "tz-passenger", 3, "ngClass"], ["type", "text", "class", "mob-hidden-input", "tzFieldNavigation", "", "fieldType", "person", 3, "tabindex", "searchFormGroup", "focus", 4, "ngIf"], ["data-test", "searching-page-pax", "class", "searching-page-pax", 3, "click", 4, "ngIf"], ["data-test", "searching-page-passenger-popup-container", 1, "passenger-popup-container", 3, "hidden", "formGroup"], ["class", "passenger-row passenger-row-driver flex align-center space-between driver-age-row mb-0", "data-test", "result-page-passenger-age", 3, "ngClass", 4, "ngIf"], [1, "passenger-footer-block"], ["data-test", "searching-page-passenger-popup-container-done", 1, "btn", "select-btn", "selected", "apply-btn", 3, "ngClass", "click"], ["type", "text", "tzFieldNavigation", "", "fieldType", "person", 1, "mob-hidden-input", 3, "tabindex", "searchFormGroup", "focus"], ["data-test", "searching-page-pax", 1, "searching-page-pax", 3, "click"], ["icon", "carbon_user", 1, "field-icon", 3, "mobile"], [4, "ngFor", "ngForOf"], ["class", "searching-page-pax__seperator", 4, "ngIf"], [1, "searching-page-pax__seperator"], ["icon", "passenger-selection-minus", 3, "stretch"], ["icon", "passenger-selection-plus", 3, "stretch"], ["data-test", "passenger-row-select-child-age", 1, "passenger-row", "mob-select-child-age-row", "passenger-row-child-ages", "flex", "wrap", "align-center", "space-between", "child-age-container", "mb-0"], [1, "mob-select-child-age-col"], [1, "mob-select-child-age", 3, "click"], [3, "ngClass"], [1, "mob-select-child-age-icon"], ["icon", "mob-select-child-age"], ["data-test", "result-page-passenger-age", 1, "passenger-row", "passenger-row-driver", "flex", "align-center", "space-between", "driver-age-row", "mb-0", 3, "ngClass"], [1, "mob-select-driver-age", 3, "click"]], template: function PassengerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](0, PassengerComponent_div_0_Template, 10, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, PassengerComponent_div_1_Template, 10, 15, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_17__.NgIf, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdown, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownToggle, _directives_field_navigation_directive__WEBPACK_IMPORTED_MODULE_6__.FieldNavigationDirective, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_16__.NgbDropdownMenu, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgClass, _shared_components_tz_svg_icon_tz_svg_icon_component__WEBPACK_IMPORTED_MODULE_7__.TzSvgIconComponent, _angular_common__WEBPACK_IMPORTED_MODULE_17__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupName, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_18__.NgSelectComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MinValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.MaxValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _shared_directives_max_limit_directive__WEBPACK_IMPORTED_MODULE_8__.MaxLimitDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_15__.TranslatePipe], styles: ["[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%] {\n  min-width: 23.875rem;\n  padding: 1.25rem 1.5rem 1.5rem;\n  margin-top: 4px !important;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%] {\n    padding: 1.5rem 1rem 3.125rem 1rem;\n    margin-top: 0 !important;\n    min-width: unset;\n  }\n}\n[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%] {\n  margin-bottom: 1.25rem;\n  color: var(--color-main-dark-purple);\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%] {\n    margin-bottom: 2rem !important;\n  }\n}\n[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%]   .data-txt[_ngcontent-%COMP%], [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%] {\n  font-weight: var(--font-weight-normal);\n  font-size: 1rem;\n  letter-spacing: 0.0015em;\n  line-height: 1.313rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%]   .data-txt[_ngcontent-%COMP%], [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%] {\n    font-weight: 700;\n    font-size: 0.875rem;\n    line-height: 150%;\n    color: var(--color-text-mobile);\n    margin-left: 0.25rem;\n    margin-right: 0.25rem;\n  }\n}\n[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%], [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%]   .select-btn[_ngcontent-%COMP%] {\n  width: 2.5rem;\n  height: 2.5rem;\n  -webkit-user-select: none;\n          user-select: none;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%]   .selected-count[_ngcontent-%COMP%], [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%]   .select-btn[_ngcontent-%COMP%] {\n    background: var(--ion-color-primary-contrast);\n    border: 1px solid var(--color-gray-light);\n    border-radius: 0.25rem;\n    width: 3.75rem;\n    font-weight: 400;\n    font-size: 1rem;\n    line-height: 150%;\n    color: var(--color-text-mobile);\n  }\n}\n[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%]   .select-btn[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: var(--font-weight-regular);\n  background: var(--color-light-footer-grey);\n  border-radius: 0.25rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%]   .select-btn[_ngcontent-%COMP%] {\n    width: 2.5rem;\n    height: 2.5rem;\n    border: 1px solid var(--ion-color-primary);\n    border-radius: 0.25rem;\n    background-color: var(--ion-color-primary-contrast);\n  }\n}\n[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%]   .select-btn.disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%]   .select-btn.disabled[_ngcontent-%COMP%] {\n    border: 1px solid var(--color-border-mobile);\n  }\n}\n[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row[_ngcontent-%COMP%]   .select-btn.disabled[_ngcontent-%COMP%]   tz-svg-icon[_ngcontent-%COMP%] {\n  opacity: 0.2;\n}\n[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.child-age-container[_ngcontent-%COMP%], [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.driver-age-row[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n}\n[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.child-age-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.driver-age-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  width: calc(50% - 7px);\n  margin-top: 1.25rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.child-age-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%], [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.driver-age-row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n    margin-top: 0;\n  }\n}\n[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.child-age-container[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2), [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.driver-age-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2) {\n  margin-left: 0.875rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.child-age-container[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2), [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.driver-age-row[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:nth-child(2) {\n    margin-left: 0;\n  }\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.passenger-row-driver[_ngcontent-%COMP%] {\n    border-top: 1px solid var(--color-border-mobile);\n    padding-top: 2rem;\n  }\n}\n[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.driver-age-row[_ngcontent-%COMP%]:not(.driver-only) {\n  margin-top: 2.5rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.driver-age-row[_ngcontent-%COMP%]:not(.driver-only) {\n    margin-top: 0;\n  }\n}\n[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row.driver-age-row[_ngcontent-%COMP%]   .data-txt[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  height: unset;\n  margin-top: 0;\n}\n[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .passenger-row-child-ages[_ngcontent-%COMP%] {\n  margin-bottom: 0 !important;\n}\n[_nghost-%COMP%]   .passenger-popup-container[_ngcontent-%COMP%]   .apply-btn[_ngcontent-%COMP%] {\n  float: right;\n  margin: 1.625rem 0 0 auto;\n  line-height: 1.188rem;\n  font-size: 0.875rem;\n  font-weight: var(--font-weight-semibold);\n  padding: 0.75rem 1.25rem;\n  border: unset;\n}\n[_nghost-%COMP%]   .passenger-popup-container.ng-invalid[_ngcontent-%COMP%]   .apply-btn[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .passenger-option[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: var(--font-weight-normal);\n  line-height: 1.5rem;\n  background-color: transparent;\n  outline: none;\n  padding: 0;\n}\n@media (min-width: 921px) and (max-width: 1220px) {\n  [_nghost-%COMP%]   .passenger-option[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n  }\n}\n[_nghost-%COMP%]   .passenger-option[_ngcontent-%COMP%]:hover {\n  color: var(--color-main-purple);\n}\n[_nghost-%COMP%]   .mob-hidden-input[_ngcontent-%COMP%] {\n  height: 0;\n  width: 0;\n  opacity: 0;\n}\n.input-field-component[_ngcontent-%COMP%] {\n  background: transparent;\n}\n.input-field-component[_ngcontent-%COMP%]:focus-visible {\n  outline: 0;\n}\n.driver-field-container[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n}\n.driver-field-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:before, .driver-field-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:after {\n  position: absolute;\n  right: 1rem;\n  color: #161616;\n  font-size: 4.8px;\n  pointer-events: none;\n  font-family: \"tz-icons\";\n}\n.driver-field-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:before {\n  top: 0.75rem;\n  right: 1.05rem;\n  content: \"\\e915\";\n  transform: rotate(180deg);\n}\n.driver-field-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:after {\n  bottom: 0.75rem;\n  content: \"\\e915\";\n}\n.driver-field-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  display: block;\n  -webkit-appearance: none;\n  font-size: 0.875rem;\n  width: 100%;\n  line-height: 1.5rem;\n  color: var(--color-main-dark-purple);\n  border: 1px solid var(--color-main-dark-purple-opacity-3);\n  border-radius: 3px;\n  padding: 0.75rem;\n  background-color: transparent;\n}\n.driver-field-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline-color: var(--color-main-purple);\n}\n.driver-field-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   input.ng-invalid.ng-touched[_ngcontent-%COMP%]:not(:focus) {\n  outline-color: var(--color-primary-error);\n}\n.driver-field-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-inner-spin-button {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  right: 0.875rem;\n  margin: auto;\n  transform: scale(1);\n  transform-origin: right center;\n  opacity: 0;\n  cursor: pointer;\n}\n.driver-field-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::-webkit-contacts-auto-fill-button {\n  opacity: 0;\n}\n.search-passenger-mob[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  font-weight: 400;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n}\n.search-passenger-mob[_ngcontent-%COMP%]   .searching-page-pax[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 3rem;\n  background-color: transparent;\n  border: 1px solid var(--color-border-mobile);\n  margin-bottom: 0.625rem;\n  border-radius: 4px;\n  padding-left: 2.25rem;\n  padding-right: 2.3rem;\n  display: flex;\n  align-items: center;\n}\n@media (max-width: 920px) {\n  .search-passenger-mob[_ngcontent-%COMP%]   .searching-page-pax[_ngcontent-%COMP%] {\n    color: var(--color-text-mobile);\n    padding: 0.75rem 1rem 0.75rem 1.75rem;\n  }\n  .search-passenger-mob[_ngcontent-%COMP%]   .searching-page-pax__seperator[_ngcontent-%COMP%] {\n    font-weight: 100;\n  }\n}\n.search-passenger-mob[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 5px;\n  left: -200px;\n  z-index: -1;\n}\n.search-passenger-mob[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 22%;\n  left: 0.68rem;\n  transform: translate(0px, -50%);\n  width: -moz-fit-content;\n  width: fit-content;\n  font-size: 1.5rem;\n  color: var(--color-main-dark-purple-opacity-2);\n}\n@media (max-width: 920px) {\n  .search-passenger-mob[_ngcontent-%COMP%]   .field-icon[_ngcontent-%COMP%] {\n    top: 1.438rem;\n  }\n}\n@media (max-width: 920px) {\n  .search-passenger-mob[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    line-height: 1.5rem;\n  }\n\n  .mob-select-child-age-col[_ngcontent-%COMP%] {\n    max-width: 50%;\n    margin-bottom: 2rem;\n    height: 3rem !important;\n  }\n\n  .mob-select-child-age-col[_ngcontent-%COMP%]:nth-child(even) {\n    display: flex;\n    justify-content: flex-end;\n  }\n\n  .mob-select-child-age[_ngcontent-%COMP%], .mob-select-driver-age[_ngcontent-%COMP%] {\n    display: inline-flex;\n    align-items: center;\n    justify-content: center;\n    padding: 1rem 1.25rem 1rem 1rem;\n    width: 10rem !important;\n    height: 3rem !important;\n    background: var(--ion-color-primary-contrast);\n    border: 1px solid var(--color-border-mobile);\n    border-radius: 0.25rem;\n    font-weight: 400;\n    font-size: 0.875rem;\n    line-height: 1rem;\n    color: var(--color-gray-light);\n    letter-spacing: 0.0015em;\n  }\n\n  .mob-select-child-age-text-selected[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    color: var(--color-text-mobile);\n  }\n\n  .mob-select-child-age-icon[_ngcontent-%COMP%] {\n    margin-left: auto;\n  }\n\n  .passenger-footer-block[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    width: 100%;\n    height: 3.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    padding: 0.5rem 1rem;\n    background: var(--ion-color-primary-contrast);\n    border-top: 1px solid var(--color-main-text-mobile);\n  }\n  .passenger-footer-block[_ngcontent-%COMP%]   .select-btn.apply-btn[_ngcontent-%COMP%], .passenger-footer-block[_ngcontent-%COMP%]   .select-btn.apply-btn[_ngcontent-%COMP%]:hover {\n    min-width: 21.4375rem;\n    margin: 0;\n    font-weight: 500;\n    font-size: 0.875rem;\n    line-height: 1.5rem;\n    text-transform: capitalize;\n    color: var(--color-main-text-mobile);\n    background: var(--ion-color-primary);\n    height: 2.5rem;\n    padding: 0.5rem;\n  }\n\n  .passenger-popup-container.ng-invalid[_ngcontent-%COMP%]   .select-btn.apply-btn[_ngcontent-%COMP%], .apply-btn.apply-btn-invalid[_ngcontent-%COMP%] {\n    background: var(--color-button-grey) !important;\n    color: var(--color-gray-light) !important;\n    pointer-events: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhc3Nlbmdlci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksb0JBQUE7RUFDQSw4QkFBQTtFQUNBLDBCQUFBO0FBRlI7QUNnREk7RURqREE7SUFNUSxrQ0FBQTtJQUNBLHdCQUFBO0lBQ0EsZ0JBQUE7RUFEVjtBQUNGO0FBR1E7RUFDSSxzQkFBQTtFQUNBLG9DQUFBO0FBRFo7QUNxQ0k7RUR0Q0k7SUFLUSw4QkFBQTtFQUFkO0FBQ0Y7QUFFWTs7RUFFSSxzQ0FBQTtFQUNBLGVBQUE7RUFDQSx3QkFBQTtFQUNBLHFCQUFBO0FBQWhCO0FDeUJJO0VEOUJROztJQVFRLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxpQkFBQTtJQUNBLCtCQUFBO0lBQ0Esb0JBQUE7SUFDQSxxQkFBQTtFQUVsQjtBQUNGO0FBQ1k7O0VBRUksYUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0FBQ2hCO0FDUUk7RURiUTs7SUFPUSw2Q0FBQTtJQUNBLHlDQUFBO0lBQ0Esc0JBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxlQUFBO0lBQ0EsaUJBQUE7SUFDQSwrQkFBQTtFQUdsQjtBQUNGO0FBQVk7RUFDSSxpQkFBQTtFQUNBLHVDQUFBO0VBQ0EsMENBQUE7RUFDQSxzQkFBQTtBQUVoQjtBQ1hJO0VES1E7SUFPUSxhQUFBO0lBQ0EsY0FBQTtJQUNBLDBDQUFBO0lBQ0Esc0JBQUE7SUFDQSxtREFBQTtFQUdsQjtBQUNGO0FBRGdCO0VBQ0ksb0JBQUE7QUFHcEI7QUN2Qkk7RURtQlk7SUFJUSw0Q0FBQTtFQUl0QjtBQUNGO0FBRm9CO0VBQ0ksWUFBQTtBQUl4QjtBQUNZO0VBRUksY0FBQTtBQUFoQjtBQUVnQjtFQUNJLGNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FBQXBCO0FDdkNJO0VEb0NZO0lBTVEsYUFBQTtFQUN0QjtBQUNGO0FBRWdCO0VBQ0kscUJBQUE7QUFBcEI7QUMvQ0k7RUQ4Q1k7SUFJUSxjQUFBO0VBQ3RCO0FBQ0Y7QUNwREk7RUR1RFE7SUFFUSxnREFBQTtJQUNBLGlCQUFBO0VBRGxCO0FBQ0Y7QUFLZ0I7RUFDSSxrQkFBQTtBQUhwQjtBQzdESTtFRCtEWTtJQUlRLGFBQUE7RUFGdEI7QUFDRjtBQUtnQjtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtBQUhwQjtBQVFRO0VBQ0ksMkJBQUE7QUFOWjtBQVNRO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLHdDQUFBO0VBQ0Esd0JBQUE7RUFDQSxhQUFBO0FBUFo7QUFVUTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQVJaO0FBWUk7RUFDSSxlQUFBO0VBQ0Esc0NBQUE7RUFDQSxtQkFBQTtFQUVBLDZCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7QUFYUjtBQ25GSTtFRHVGQTtJQVVRLG1CQUFBO0VBVlY7QUFDRjtBQVlRO0VBQ0ksK0JBQUE7QUFWWjtBQWNJO0VBQ0ksU0FBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0FBWlI7QUFnQkE7RUFDSSx1QkFBQTtBQWJKO0FBZUk7RUFDSSxVQUFBO0FBYlI7QUFpQkE7RUFDSSxrQkFBQTtFQUNBLFdBQUE7QUFkSjtBQWtCUTtFQUVJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7QUFqQlo7QUFvQlE7RUFDSSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFsQlo7QUFxQlE7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7QUFuQlo7QUFzQlE7RUFDSSxzQkFBQTtFQUNBLGNBQUE7RUFDQSx3QkFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0Esb0NBQUE7RUFDQSx5REFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2QkFBQTtBQXBCWjtBQXNCWTtFQUNJLHVDQUFBO0FBcEJoQjtBQXVCWTtFQUNJLHlDQUFBO0FBckJoQjtBQXdCWTtFQUNJLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQXRCaEI7QUF5Qlk7RUFDSSxVQUFBO0FBdkJoQjtBQTZCQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBMUJKO0FBNEJJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDRDQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUExQlI7QUNoTUk7RUQ4Tkk7SUFDSSwrQkFBQTtJQUNBLHFDQUFBO0VBM0JWO0VBNEJVO0lBQ0csZ0JBQUE7RUExQmI7QUFDRjtBQStCSTtFQUNJLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBN0JSO0FBZ0NJO0VBQ0ksa0JBQUE7RUFDQSxRQUFBO0VBQ0EsYUFBQTtFQUNBLCtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsOENBQUE7QUE5QlI7QUN6Tkk7RUQrT0E7SUFXUSxhQUFBO0VBN0JWO0FBQ0Y7QUM5Tkk7RURnUUE7SUFDSSxtQkFBQTtJQUNBLG1CQUFBO0VBOUJOOztFQWlDRTtJQUNJLGNBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0VBOUJOOztFQWlDRTtJQUNJLGFBQUE7SUFDQSx5QkFBQTtFQTlCTjs7RUFpQ0U7O0lBRUksb0JBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0EsK0JBQUE7SUFDQSx1QkFBQTtJQUNBLHVCQUFBO0lBQ0EsNkNBQUE7SUFDQSw0Q0FBQTtJQUNBLHNCQUFBO0lBQ0EsZ0JBQUE7SUFDQSxtQkFBQTtJQUNBLGlCQUFBO0lBQ0EsOEJBQUE7SUFDQSx3QkFBQTtFQTlCTjs7RUFpQ0U7SUFDSSxtQkFBQTtJQUNBLCtCQUFBO0VBOUJOOztFQWlDRTtJQUNJLGlCQUFBO0VBOUJOOztFQWlDRTtJQUNJLGVBQUE7SUFDQSxTQUFBO0lBQ0EsT0FBQTtJQUNBLFFBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGFBQUE7SUFDQSxtQkFBQTtJQUNBLHVCQUFBO0lBQ0Esb0JBQUE7SUFDQSw2Q0FBQTtJQUNBLG1EQUFBO0VBOUJOO0VBZ0NNOztJQUVJLHFCQUFBO0lBQ0EsU0FBQTtJQUNBLGdCQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLDBCQUFBO0lBQ0Esb0NBQUE7SUFDQSxvQ0FBQTtJQUNBLGNBQUE7SUFDQSxlQUFBO0VBOUJWOztFQWtDRTtJQUNJLCtDQUFBO0lBQ0EseUNBQUE7SUFDQSxvQkFBQTtFQS9CTjtBQUNGIiwiZmlsZSI6InBhc3Nlbmdlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuOmhvc3Qge1xuICAgIC5wYXNzZW5nZXItcG9wdXAtY29udGFpbmVyIHtcbiAgICAgICAgbWluLXdpZHRoOiAyMy44NzVyZW07XG4gICAgICAgIHBhZGRpbmc6IDEuMjVyZW0gMS41cmVtIDEuNXJlbTtcbiAgICAgICAgbWFyZ2luLXRvcDogNHB4ICFpbXBvcnRhbnQ7XG5cbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtIDMuMTI1cmVtIDFyZW07XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtaW4td2lkdGg6IHVuc2V0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnBhc3Nlbmdlci1yb3cge1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWRhcmstcHVycGxlKTtcblxuICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5kYXRhLXR4dCxcbiAgICAgICAgICAgIC5zZWxlY3RlZC1jb3VudCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LW5vcm1hbCk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAwMTVlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS4zMTNyZW07XG5cbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMTUwJTtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWxlY3RlZC1jb3VudCxcbiAgICAgICAgICAgIC5zZWxlY3QtYnRuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMi41cmVtO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNzVyZW07XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDE1MCU7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci10ZXh0LW1vYmlsZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuc2VsZWN0LWJ0biB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWxpZ2h0LWZvb3Rlci1ncmV5KTtcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICYuZGlzYWJsZWQge1xuICAgICAgICAgICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLW1vYmlsZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICB0ei1zdmctaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuY2hpbGQtYWdlLWNvbnRhaW5lcixcbiAgICAgICAgICAgICYuZHJpdmVyLWFnZS1yb3cge1xuICAgICAgICAgICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuXG4gICAgICAgICAgICAgICAgPmRpdiB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSA3cHgpO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxLjI1cmVtO1xuXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgPiA6bnRoLWNoaWxkKDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuODc1cmVtO1xuXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi5wYXNzZW5nZXItcm93LWRyaXZlciB7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1tb2JpbGUpO1xuICAgICAgICAgICAgICAgICAgICBwYWRkaW5nLXRvcDogMnJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuZHJpdmVyLWFnZS1yb3cge1xuICAgICAgICAgICAgICAgICY6bm90KC5kcml2ZXItb25seSkge1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyLjVyZW07XG5cbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAuZGF0YS10eHQge1xuICAgICAgICAgICAgICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiB1bnNldDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAucGFzc2VuZ2VyLXJvdy1jaGlsZC1hZ2VzIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAgIWltcG9ydGFudDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5hcHBseS1idG4ge1xuICAgICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgICAgbWFyZ2luOiAxLjYyNXJlbSAwIDAgYXV0bztcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE4OHJlbTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtc2VtaWJvbGQpO1xuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxLjI1cmVtO1xuICAgICAgICAgICAgYm9yZGVyOiB1bnNldDtcbiAgICAgICAgfVxuXG4gICAgICAgICYubmctaW52YWxpZCAuYXBwbHktYnRuIHtcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnBhc3Nlbmdlci1vcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiB2YXIoLS1mb250LXdlaWdodC1ub3JtYWwpO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAwO1xuXG4gICAgICAgIEBpbmNsdWRlIHRhYmxldCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLm1vYi1oaWRkZW4taW5wdXQge1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgIH1cbn1cblxuLmlucHV0LWZpZWxkLWNvbXBvbmVudCB7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG5cbiAgICAmOmZvY3VzLXZpc2libGUge1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgIH1cbn1cblxuLmRyaXZlci1maWVsZC1jb250YWluZXIge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgID5kaXYge1xuXG4gICAgICAgICY6YmVmb3JlLFxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgIHJpZ2h0OiAxcmVtO1xuICAgICAgICAgICAgY29sb3I6ICMxNjE2MTY7XG4gICAgICAgICAgICBmb250LXNpemU6IDQuOHB4OyAvLyBOZWVkIHRvIGJlIGluIHB4IHRvIGF2b2lkIFRSQVotODg3MyBpc3N1ZSBvbiBzYWZhcmlcbiAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6IFwidHotaWNvbnNcIjtcbiAgICAgICAgfVxuXG4gICAgICAgICY6YmVmb3JlIHtcbiAgICAgICAgICAgIHRvcDogMC43NXJlbTtcbiAgICAgICAgICAgIHJpZ2h0OiAxLjA1cmVtO1xuICAgICAgICAgICAgY29udGVudDogXCJcXGU5MTVcIjtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgIH1cblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGJvdHRvbTogMC43NXJlbTtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXFxlOTE1XCI7XG4gICAgICAgIH1cblxuICAgICAgICBpbnB1dCB7XG4gICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tZGFyay1wdXJwbGUpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItbWFpbi1kYXJrLXB1cnBsZS1vcGFjaXR5LTMpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbTtcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgICAgICAmOmZvY3VzIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXB1cnBsZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYubmctaW52YWxpZC5uZy10b3VjaGVkOm5vdCg6Zm9jdXMpIHtcbiAgICAgICAgICAgICAgICBvdXRsaW5lLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LWVycm9yKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgcmlnaHQ6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJjo6LXdlYmtpdC1jb250YWN0cy1hdXRvLWZpbGwtYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2VhcmNoLXBhc3Nlbmdlci1tb2Ige1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuXG4gICAgLnNlYXJjaGluZy1wYWdlLXBheCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC42MjVyZW07XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyLjI1cmVtO1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAyLjNyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgfVxuXG4gICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgLnNlYXJjaGluZy1wYWdlLXBheCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1tb2JpbGUpO1xuICAgICAgICAgICAgcGFkZGluZzogMC43NXJlbSAxcmVtIDAuNzVyZW0gMS43NXJlbTtcbiAgICAgICAgICAgICZfX3NlcGVyYXRvciB7XG4gICAgICAgICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG5cbiAgICAmPmlucHV0IHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgbGVmdDogLTIwMHB4O1xuICAgICAgICB6LWluZGV4OiAtMTtcbiAgICB9XG5cbiAgICAuZmllbGQtaWNvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAyMiU7XG4gICAgICAgIGxlZnQ6IDAuNjhyZW07XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTUwJSk7XG4gICAgICAgIHdpZHRoOiAtbW96LWZpdC1jb250ZW50O1xuICAgICAgICB3aWR0aDogZml0LWNvbnRlbnQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1kYXJrLXB1cnBsZS1vcGFjaXR5LTIpO1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICB0b3A6IDEuNDM4cmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AaW5jbHVkZSBtb2JpbGUge1xuICAgIC5zZWFyY2gtcGFzc2VuZ2VyLW1vYiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgfVxuXG4gICAgLm1vYi1zZWxlY3QtY2hpbGQtYWdlLWNvbCB7XG4gICAgICAgIG1heC13aWR0aDogNTAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgICB9XG5cbiAgICAubW9iLXNlbGVjdC1jaGlsZC1hZ2UtY29sOm50aC1jaGlsZChldmVuKSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgfVxuXG4gICAgLm1vYi1zZWxlY3QtY2hpbGQtYWdlLFxuICAgIC5tb2Itc2VsZWN0LWRyaXZlci1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMS4yNXJlbSAxcmVtIDFyZW07XG4gICAgICAgIHdpZHRoOiAxMHJlbSAhaW1wb3J0YW50O1xuICAgICAgICBoZWlnaHQ6IDNyZW0gIWltcG9ydGFudDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1ib3JkZXItbW9iaWxlKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDFyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmF5LWxpZ2h0KTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDAxNWVtO1xuICAgIH1cblxuICAgIC5tb2Itc2VsZWN0LWNoaWxkLWFnZS10ZXh0LXNlbGVjdGVkIHtcbiAgICAgICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICB9XG5cbiAgICAubW9iLXNlbGVjdC1jaGlsZC1hZ2UtaWNvbiB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIH1cblxuICAgIC5wYXNzZW5nZXItZm9vdGVyLWJsb2NrIHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAzLjVyZW07XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiAwLjVyZW0gMXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0taW9uLWNvbG9yLXByaW1hcnktY29udHJhc3QpO1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItbWFpbi10ZXh0LW1vYmlsZSk7XG5cbiAgICAgICAgLnNlbGVjdC1idG4uYXBwbHktYnRuLFxuICAgICAgICAuc2VsZWN0LWJ0bi5hcHBseS1idG46aG92ZXIge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyMS40Mzc1cmVtO1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10ZXh0LW1vYmlsZSk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5wYXNzZW5nZXItcG9wdXAtY29udGFpbmVyLm5nLWludmFsaWQgLnNlbGVjdC1idG4uYXBwbHktYnRuLCAgLmFwcGx5LWJ0bi5hcHBseS1idG4taW52YWxpZCB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLWJ1dHRvbi1ncmV5KSAhaW1wb3J0YW50O1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItZ3JheS1saWdodCkgIWltcG9ydGFudDtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgfVxufVxuIiwiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIl19 */"], changeDetection: 0 });


/***/ }),

/***/ 49364:
/*!****************************************************!*\
  !*** ./src/app/modules/search/search.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchComponent": () => (/* binding */ SearchComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/searchEngine/services/engine-rule-service */ 71929);
/* harmony import */ var _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/utils/tools-service */ 67457);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _services_searchEngine_services_search_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/searchEngine/services/search-helpers */ 15575);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _core_constants_trip__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/constants/trip */ 16699);
/* harmony import */ var _schemas_modules_core_search_address__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @schemas/modules/core/search-address */ 68797);
/* harmony import */ var _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @core/constants/general-settings */ 12308);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @core/utils/tz-passenger.util */ 84673);
/* harmony import */ var _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @core/constants/keyboard-key-types.const */ 86578);
/* harmony import */ var _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/modules/search/utils/search.utils */ 77235);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @core/constants/call-types.const */ 37005);
/* harmony import */ var _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/modules/search/utils/calendar.utils */ 51664);
/* harmony import */ var _services_searchEngine_services_user_search_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/searchEngine/services/user-search-service */ 59665);
/* harmony import */ var _services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/modules/core/listeners-service */ 96831);
/* harmony import */ var _services_searchEngine_services_search_state_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @services/searchEngine/services/search-state.service */ 75843);
/* harmony import */ var _services_modules_services_address_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @services/modules/services/address-service */ 48759);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_modules_core_loader_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @services/modules/core/loader.service */ 408);
/* harmony import */ var _services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @services/modules/cart/services/cart.service */ 16750);
/* harmony import */ var _services_modules_services_recent_search_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @services/modules/services/recent-search.service */ 39897);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_dropdowns_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @shared/components/dropdowns/dropdown/dropdown.component */ 59989);
/* harmony import */ var _passenger_passenger_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./passenger/passenger.component */ 37191);
/* harmony import */ var _loc_field_loc_field_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./loc-field/loc-field.component */ 10221);
/* harmony import */ var _mob_loc_field_mob_loc_field_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./mob-loc-field/mob-loc-field.component */ 55411);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./calendar/calendar.component */ 86930);










































function SearchComponent_div_1_tz_dropdown_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "tz-dropdown", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("selectChange", function SearchComponent_div_1_tz_dropdown_1_Template_tz_dropdown_selectChange_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2);
      return ctx_r10.changeTravelType($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("selectedOptionKey", ctx_r8.context.travelType)("options", ctx_r8.trips);
  }
}

function SearchComponent_div_1_tz_passenger_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "tz-passenger", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("addNewChild", function SearchComponent_div_1_tz_passenger_2_Template_tz_passenger_addNewChild_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r13);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2);
      return ctx_r12.addNewChild($event);
    })("applyPax", function SearchComponent_div_1_tz_passenger_2_Template_tz_passenger_applyPax_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r13);
      const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2);
      return ctx_r14.applyPassenger($event);
    })("focusInvalid", function SearchComponent_div_1_tz_passenger_2_Template_tz_passenger_focusInvalid_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r13);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2);
      return ctx_r15.focusInvalid();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("passenger", ctx_r9.passengers)("passengersFormGroup", ctx_r9.passengersFormGroup)("config", ctx_r9.htmlSearchConf[1].persons)("selectedServices", ctx_r9.selectedServices);
  }
}

function SearchComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](1, SearchComponent_div_1_tz_dropdown_1_Template, 1, 2, "tz-dropdown", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](2, SearchComponent_div_1_tz_passenger_2_Template, 1, 4, "tz-passenger", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx_r0.selectedServices["transport"] && !ctx_r0.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", !ctx_r0.platformService.isMobileDevice);
  }
}

const _c0 = function (a0) {
  return {
    selected: a0
  };
};

function SearchComponent_div_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function SearchComponent_div_2_div_1_Template_div_click_0_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r19);
      const trip_r17 = restoredCtx.$implicit;
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2);
      return ctx_r18.changeTravelType(trip_r17);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const trip_r17 = ctx.$implicit;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpureFunction1"](4, _c0, ctx_r16.context.travelType === trip_r17.tripType));
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipeBind1"](2, 2, trip_r17.label), " ");
  }
}

function SearchComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](1, SearchComponent_div_2_div_1_Template, 3, 6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵclassProp"]("edit-modal", ctx_r1.isModalEditMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngForOf", ctx_r1.trips);
  }
}

const _c1 = function (a0) {
  return {
    "chosen-service-logo": a0
  };
};

function SearchComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](1, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpureFunction1"](4, _c1, ctx_r2.editing));
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵclassMap"](ctx_r2.serviceIcon);
  }
}

function SearchComponent_ng_container_6_ng_container_1_ng_template_2_tz_loc_field_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "tz-loc-field", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("invertFromTo", function SearchComponent_ng_container_6_ng_container_1_ng_template_2_tz_loc_field_0_Template_tz_loc_field_invertFromTo_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r29);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](4);
      return ctx_r28.invertFromTo();
    })("locSelected", function SearchComponent_ng_container_6_ng_container_1_ng_template_2_tz_loc_field_0_Template_tz_loc_field_locSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r29);
      const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](4);
      return ctx_r30.applySearchData($event);
    })("searchDropDownToggle", function SearchComponent_ng_container_6_ng_container_1_ng_template_2_tz_loc_field_0_Template_tz_loc_field_searchDropDownToggle_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r29);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](4);
      return ctx_r31.searchDropDownToggle.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const formField_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](3).$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("searchData", ctx_r27.search)("htmlConf", ctx_r27.htmlSearchConf)("formGroup", ctx_r27.searchFormGroup)("formField", formField_r20)("readonly", !ctx_r27.editing)("editMode", ctx_r27.editMode);
  }
}

function SearchComponent_ng_container_6_ng_container_1_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](0, SearchComponent_ng_container_6_ng_container_1_ng_template_2_tz_loc_field_0_Template, 1, 6, "tz-loc-field", 25);
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngSwitchCase", "loc-field");
  }
}

function SearchComponent_ng_container_6_ng_container_1_ng_template_4_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div")(1, "tz-passenger", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("addNewChild", function SearchComponent_ng_container_6_ng_container_1_ng_template_4_div_0_Template_tz_passenger_addNewChild_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r36);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](4);
      return ctx_r35.addNewChild($event);
    })("applyPax", function SearchComponent_ng_container_6_ng_container_1_ng_template_4_div_0_Template_tz_passenger_applyPax_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r36);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](4);
      return ctx_r37.applyPassenger($event);
    })("focusInvalid", function SearchComponent_ng_container_6_ng_container_1_ng_template_4_div_0_Template_tz_passenger_focusInvalid_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r36);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](4);
      return ctx_r38.focusInvalid();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("passenger", ctx_r33.passengers)("passengersFormGroup", ctx_r33.passengersFormGroup)("isMobSearch", true)("config", ctx_r33.htmlSearchConf[1].persons)("selectedServices", ctx_r33.selectedServices);
  }
}

function SearchComponent_ng_container_6_ng_container_1_ng_template_4_tz_mob_loc_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "tz-mob-loc-field", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("invertFromTo", function SearchComponent_ng_container_6_ng_container_1_ng_template_4_tz_mob_loc_field_1_Template_tz_mob_loc_field_invertFromTo_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r40);
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](4);
      return ctx_r39.invertFromTo();
    })("locSelected", function SearchComponent_ng_container_6_ng_container_1_ng_template_4_tz_mob_loc_field_1_Template_tz_mob_loc_field_locSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r40);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](4);
      return ctx_r41.applySearchData($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](3);
    const formField_r20 = ctx_r42.$implicit;
    const last_r22 = ctx_r42.last;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("searchData", ctx_r34.search)("htmlConf", ctx_r34.htmlSearchConf)("formGroup", ctx_r34.searchFormGroup)("editMode", ctx_r34.editMode)("formField", formField_r20)("editMode", ctx_r34.editMode)("isLast", last_r22);
  }
}

function SearchComponent_ng_container_6_ng_container_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](0, SearchComponent_ng_container_6_ng_container_1_ng_template_4_div_0_Template, 2, 5, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](1, SearchComponent_ng_container_6_ng_container_1_ng_template_4_tz_mob_loc_field_1_Template, 1, 7, "tz-mob-loc-field", 27);
  }

  if (rf & 2) {
    const last_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2).last;
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", last_r22 && ctx_r25.platformService.isMobileDevice && !ctx_r25.editMode);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngSwitchCase", "loc-field");
  }
}

function SearchComponent_ng_container_6_ng_container_1_tz_calendar_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "tz-calendar", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("dateSelected", function SearchComponent_ng_container_6_ng_container_1_tz_calendar_7_Template_tz_calendar_dateSelected_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r45);
      const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](3);
      return ctx_r44.applySearchData($event);
    })("focusInvalid", function SearchComponent_ng_container_6_ng_container_1_tz_calendar_7_Template_tz_calendar_focusInvalid_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r45);
      const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](3);
      return ctx_r46.focusInvalid();
    })("searchDropDownToggle", function SearchComponent_ng_container_6_ng_container_1_tz_calendar_7_Template_tz_calendar_searchDropDownToggle_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r45);
      const ctx_r47 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](3);
      return ctx_r47.searchDropDownToggle.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const formField_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"](2).$implicit;
    const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("searchData", ctx_r26.search)("fieldConf", ctx_r26.htmlSearchConf[formField_r20.confIdx][formField_r20.field])("formGroup", ctx_r26.searchFormGroup)("formField", formField_r20)("readonly", ctx_r26.editing)("travelType", ctx_r26.context.travelType)("isModalEditMode", ctx_r26.isModalEditMode)("calData", ctx_r26.search[formField_r20.field])("selectedServices", ctx_r26.selectedServices);
  }
}

function SearchComponent_ng_container_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](2, SearchComponent_ng_container_6_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipe"](3, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](4, SearchComponent_ng_container_6_ng_container_1_ng_template_4_Template, 2, 2, "ng-template", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipe"](5, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](6, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](7, SearchComponent_ng_container_6_ng_container_1_tz_calendar_7_Template, 1, 9, "tz-calendar", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r49 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    const formField_r20 = ctx_r49.$implicit;
    const i_r21 = ctx_r49.index;
    const last_r22 = ctx_r49.last;
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵclassMap"](formField_r20.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngSwitch", formField_r20.fieldType);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵattribute"]("form-field-index", i_r21);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipeBind1"](3, 9, ctx_r23.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipeBind1"](5, 11, ctx_r23.platformService.isMobileDevice$));
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵclassProp"]("search-components-container__calendar", !last_r22 || !ctx_r23.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngSwitchCase", "cal");
  }
}

function SearchComponent_ng_container_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](1, SearchComponent_ng_container_6_ng_container_1_Template, 8, 13, "ng-container", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const formField_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", formField_r20);
  }
}

function SearchComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r51 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 31)(1, "tz-passenger", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("addNewChild", function SearchComponent_div_7_Template_tz_passenger_addNewChild_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r51);
      const ctx_r50 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return ctx_r50.addNewChild($event);
    })("applyPax", function SearchComponent_div_7_Template_tz_passenger_applyPax_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r51);
      const ctx_r52 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return ctx_r52.applyPassenger($event);
    })("focusInvalid", function SearchComponent_div_7_Template_tz_passenger_focusInvalid_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r51);
      const ctx_r53 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return ctx_r53.focusInvalid();
    })("searchDropDownToggle", function SearchComponent_div_7_Template_tz_passenger_searchDropDownToggle_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r51);
      const ctx_r54 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return ctx_r54.searchDropDownToggle.emit($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("passenger", ctx_r4.passengers)("passengersFormGroup", ctx_r4.passengersFormGroup)("config", ctx_r4.htmlSearchConf[1].persons)("selectedServices", ctx_r4.selectedServices)("editMode", ctx_r4.editMode)("resetOldValue", ctx_r4.resetPassengersValue)("readonly", !ctx_r4.editing)("isMobSearch", ctx_r4.isModalEditMode);
  }
}

function SearchComponent_button_8_img_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "img", 36);
  }
}

function SearchComponent_button_8_span_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipeBind1"](2, 1, "SEARCH.SEARCH"), " ");
  }
}

function SearchComponent_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function SearchComponent_button_8_Template_button_click_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r58);
      const ctx_r57 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      ctx_r57.onSearch();
      return $event.stopPropagation();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](1, SearchComponent_button_8_img_1_Template, 1, 0, "img", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](2, SearchComponent_button_8_span_2_Template, 3, 3, "span", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵclassProp"]("d-none", ctx_r5.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", !ctx_r5.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx_r5.platformService.isMobileDevice);
  }
}

function SearchComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵclassProp"]("d-none", ctx_r6.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipeBind1"](2, 3, "GENERAL.EDIT"), " ");
  }
}

function SearchComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r60 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function SearchComponent_button_10_Template_button_click_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r60);
      const ctx_r59 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return ctx_r59.onSearch();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpipeBind1"](2, 1, "SEARCH.SEARCH"), " ");
  }
}

const _c2 = function (a0, a1, a2, a3) {
  return {
    "edit-search": a0,
    "no-edit-fld": a1,
    mob: a2,
    "home-page-search": a3
  };
};

const _c3 = function (a0, a1, a2) {
  return {
    "content-wrapped": a0,
    mob: a1,
    "flex-column": a2
  };
};

const _c4 = function (a0) {
  return {
    "tablet-wrap": a0
  };
};

class SearchComponent {
  constructor(userSearchService, toolsService, searchDataService, listenersService, engineRuleService, searchState, fb, addressService, dialogService, translateService, loaderService, cartService, recentSearchService, router, renderer, platformService, modalService) {
    this.userSearchService = userSearchService;
    this.toolsService = toolsService;
    this.searchDataService = searchDataService;
    this.listenersService = listenersService;
    this.engineRuleService = engineRuleService;
    this.searchState = searchState;
    this.fb = fb;
    this.addressService = addressService;
    this.dialogService = dialogService;
    this.translateService = translateService;
    this.loaderService = loaderService;
    this.cartService = cartService;
    this.recentSearchService = recentSearchService;
    this.router = router;
    this.renderer = renderer;
    this.platformService = platformService;
    this.modalService = modalService;
    this.selectedServices = _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_8__.GeneralSettings.defaultSelectedServices;
    this.editMode = false;
    this.editing = false;
    this.currentService = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_5__.ServiceId.INVALID;
    this.editingChange = new _angular_core__WEBPACK_IMPORTED_MODULE_29__.EventEmitter();
    this.editingClose = new _angular_core__WEBPACK_IMPORTED_MODULE_29__.EventEmitter();
    this.searchDropDownToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_29__.EventEmitter();
    this.fieldLength = 0;
    this.serviceIcon = '';
    this.trips = _core_constants_trip__WEBPACK_IMPORTED_MODULE_6__.TRIPTYPES.LIST;
    this.passengersFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormGroup({});
    this.classList = [{
      label: 'SEARCH.CLASS.Economy'
    }, {
      label: 'SEARCH.CLASS.Premium Economy'
    }, {
      label: 'SEARCH.CLASS.Business'
    }, {
      label: 'SEARCH.CLASS.First'
    }];
    this.ratingList = [{
      rating: 1,
      selected: false
    }, {
      rating: 2,
      selected: false
    }, {
      rating: 3,
      selected: false
    }, {
      rating: 4,
      selected: false
    }, {
      rating: 5,
      selected: false
    }];
    this.resetPassengersValue = 0;
    this.isModalEditMode = false;
    this.fieldOrderType = '';
    this.listeners = [];
    this.isOldPassengerDataSet = false;
    this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_31__.Subject();
    this.searchFormGroup = new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormGroup({});
  }

  get childAgesFormArray() {
    return this.passengersFormGroup.controls['childAges'];
  }

  ngOnInit() {
    if (this.platformService.isMobileDevice && this.data) {
      this.selectedServices = this.data.selectedServices;
      this.editMode = this.data.editMode;
      this.editing = this.data.editing;
      this.currentService = this.data.currentService;
      this.isModalEditMode = true;
    }

    this.initializeTzSearch();
    this.searchDataService.resetSearch$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.takeUntil)(this.destroy$)).subscribe(() => {
      this.initializeTzSearch();
    });
  }

  ngOnChanges(changes) {
    const currentService = changes['currentService'];
    const resultPageSwitched = currentService && !currentService.firstChange && currentService.currentValue !== currentService.previousValue;

    if (resultPageSwitched) {
      this.unregisterListeners();
      this.initializeTzSearch();
    }

    const editing = changes['editing'];

    if (editing && !editing.firstChange && !editing.currentValue) {
      this.resetSearch();
      /* if (editing.currentValue.serviceId) {
          let isValid = this.engineRuleService.isValidSearch(this.search, this.passengers, this.selectedServices,
           this.context.travelType, this.editMode);
          editing.currentValue.invalid = !isValid.isValid;
          this.searchErrorService.searchErrHdl();
          return
      }*/
    }

    if (changes['currentService'] && !changes['currentService'].firstChange) {
      this.isOldPassengerDataSet = false;
    }
  } // TODO: update hotel's code in params while edit from details page


  onSearch() {
    this.renderer.removeClass(document.body, 'body-lock-scroll');

    if (this.searchFormGroup.invalid || this.passengersFormGroup.invalid) {
      if (this.searchFormGroup.valid && this.passengersFormGroup.invalid) {
        this.passengersFormGroup.markAllAsTouched();
      }

      this.focusInvalid();
      return;
    }

    const formValidity = this.isFormInvalid();

    if (!formValidity.isValid) {
      if (formValidity.firstField) {
        this.focusInvalid();
      }

      return;
    }

    const isNewSearch = _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_11__.SearchUtilsService.isNewSearch(this.searchDataService.getSearch(_services_searchEngine_services_search_helpers__WEBPACK_IMPORTED_MODULE_4__.SearchHelpers.getFirstServiceId(_services_searchEngine_services_search_helpers__WEBPACK_IMPORTED_MODULE_4__.SearchHelpers.getServiceValue(this.selectedServices))), this.search, this.passengers, this.selectedServices, this.context.travelType, this.editMode);

    if (!isNewSearch) {
      if (this.editMode) {
        this.editingClose.emit();

        if (this.platformService.isMobileDevice && this.data) {
          this.modalService.dismiss();
        }
      } else {
        this.editing = true;
      }

      return;
    }

    this.closeAllCalendars(); //this.editingChange.emit(false);

    this.searchDropDownToggle.emit(false);
    const params = this.getSearchParams();
    const searchReq = {
      searchData: _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.search),
      passengers: _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.passengers),
      context: Object.assign(Object.assign({}, this.context), {
        services: _services_searchEngine_services_search_helpers__WEBPACK_IMPORTED_MODULE_4__.SearchHelpers.getServiceValue(this.selectedServices)
      })
    };

    if (params && params.hotelCode !== '') {
      searchReq.searchData.hotelCode = params.hotelCode;
      searchReq.searchData.hotelName = params.hotelName;
    }

    this.recentSearchService.storeRecentAddress(searchReq, this.selectedServices, this.context.travelType);

    if (!this.editMode) {
      _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_11__.SearchUtilsService.resetSortingValue();
      this.loaderService.triggerLoading.emit({
        loading: true,
        textKey: 'LOADER_MESSAGES.SEARCH_OPTIONS'
      });
      this.cartService.clearCart().subscribe(() => {
        this.makeSearch(params, searchReq);
      }, error => {
        this.loaderService.triggerLoading.emit({
          loading: false
        });

        if (this.platformService.isMobileDevice && this.data) {
          this.modalService.dismiss();
        }

        console.log(error);
      });
    } else {
      this.makeSearch(params, searchReq);
    }
  }

  invertFromTo() {
    const selectedFrom = this.search.from;
    const selectedTo = this.search.to;
    this.search.from = Object.assign(Object.assign({}, selectedTo), {
      inputName: selectedFrom.inputName
    });
    this.search.to = Object.assign(Object.assign({}, selectedFrom), {
      inputName: selectedTo.inputName
    });
    this.searchFormGroup.controls['from'].setValue(this.search.from);
    this.searchFormGroup.controls['to'].setValue(this.search.to);
    this.recentSearchService.setRecentAddress(this.search.from, false, 'type2');
    this.recentSearchService.setRecentAddress(this.search.to, false, 'type2');

    if (this.search.address) {
      this.search.address = _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__.SearchDataService.getNewLoc();
      this.searchFormGroup.controls['address'].reset();
    }
  }

  applySearchData(fieldEvent) {
    var _a;

    this.search = Object.assign(Object.assign({}, this.search), {
      [fieldEvent.formField.field]: fieldEvent.selectedObj
    });

    if (fieldEvent.formField.fieldType === 'loc-field' && ((_a = fieldEvent.selectedObj) === null || _a === void 0 ? void 0 : _a.latitude)) {
      this.cleanLinkedField(fieldEvent.formField.field);
    }

    if (fieldEvent.formField.fieldType === 'cal' && fieldEvent.formField.field === _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_12__.CalTypes.CAL_TRIP_TYPE) {
      this.checkIfSecondaryCalendarsShouldBeReset();
    }
  }

  applyPassenger(paxEvent) {
    this.passengers = paxEvent.passenger;

    if (!this.isOldPassengerDataSet) {
      this.oldPassenger = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.passengers);
      this.isOldPassengerDataSet = true;
    }
  }

  isRatingSelected() {
    return this.ratingList.some(rating => rating.selected);
  }

  changeTravelType(travelType) {
    if (travelType.tripType === _core_constants_trip__WEBPACK_IMPORTED_MODULE_6__.Trip.MULTI_CITY) {
      this.context.travelType = _core_constants_trip__WEBPACK_IMPORTED_MODULE_6__.Trip.ROUND_TRIP;
      return;
    }

    requestAnimationFrame(() => {
      if (!this.platformService.isMobileDevice) {
        this.focusInvalid();
      }
    });
    this.context.travelType = travelType.tripType;
    this.searchDataService.changeFlyType({
      travelType: travelType.tripType
    });
  }

  addNewChild(age) {
    const childAgeCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl(age >= 0 ? age : -1);
    childAgeCtrl.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.min(0), _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.max(_core_constants_general_settings__WEBPACK_IMPORTED_MODULE_8__.GeneralSettings.passengerRules.childMaxAge)]);
    this.childAgesFormArray.push(this.fb.group({
      childAge: childAgeCtrl
    }));
  }

  focusInvalid(moveToInvalid = true) {
    this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_3__.ListenerId.LISTEN_FOCUS_NEXT, {
      id: 'tabIdx1',
      moveTo: moveToInvalid ? _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_10__.TzFocusType.MOVE_TO_INVALID : _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_10__.TzFocusType.MOVE_NEXT
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
    this.unregisterListeners();
  }

  isFormInvalid() {
    return _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_1__.EngineRuleService.validSearch(this.search, this.passengers, this.selectedServices, this.context.travelType, this.editMode);
  }

  unregisterListeners() {
    for (const listenerId of this.listeners) {
      this.listenersService.unregisterListener(listenerId);
    }
  }

  makeSearch(params, searchReq) {
    this.userSearchService.search(params, searchReq).then(searchStatus => {
      this.searchResHandler(searchStatus);
    }, searchStatus => {
      this.searchResHandler(searchStatus);
    });
  }

  searchResHandler(searchStatus) {
    if (this.editMode && this.editing) {
      console.log('cancel editing');
      this.editing = false;
      this.editingClose.emit();

      if (this.platformService.isMobileDevice) {
        this.modalService.dismiss();
      }
    }

    if (searchStatus.needEditRefresh) {
      this.resetSearch();
    }

    if (searchStatus.searchInProgress) {
      console.log('set old values to current one');
      this.formValues = this.searchFormGroup.value;
      this.passengersFormValues = this.passengersFormGroup.value;
      this.passengersOldValue = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(_core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.passengers));
      this.oldSearch = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.search);
      this.oldPassenger = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.passengers);
    } else if (!this.editMode) {
      this.editing = true;
    }
  }

  setSearchToCurrent(currentService) {
    if (currentService === undefined || currentService === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_5__.ServiceId.INVALID) {
      console.error(`invalid service id: ${currentService}`);
      return false;
    }

    console.log('setting current search content');
    const serviceInfo = _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_11__.SearchUtilsService.getServiceInfo(currentService);
    const search = this.searchDataService.getSearch(currentService);

    if (serviceInfo) {
      this.selectedServices = serviceInfo.service;
      this.serviceIcon = serviceInfo.icon;
    }

    this.search = search.searchData;
    this.oldSearch = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.search); // console.log({searchData: this.search})

    this.context = search.context; // if (this.disableTransferController) {
    // modifyTransferCal(search);
    // }
    // hdlNullCalInfo(this.tabView);

    this.passengers = search.passengers;
    this.passengersOldValue = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(search.passengers);
    this.passengers.isDefault = false;
    this.passengers.displayStr = '';

    if (serviceInfo && serviceInfo.service.rentCar) {
      this.passengers.isRental = true;
    }

    return true;
  }

  initEditSearch() {
    this.unregisterListeners();

    if (!this.setSearchToCurrent(this.currentService)) {
      return;
    }

    this.setListener( //used to refresh edit search content with fresh data (called by trip listener)
    this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_3__.ListenerId.LISTEN_EDIT_EXT_CHANGE, this.initEditSearch, this));
    this.searchState.setPassengers(this.passengers); // ListenersService.NotifyListeners(ListenersService.LISTEN_PASSENGER_RESET, SearchState.getPassengers());
    // const displayTxt = ''; //tzPassengerService.GetEditPassengerDisplay(serviceInfo.service, search.passengers, true);
    //initialise the invalid status on search fields fix for TRAZ-6614

    _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_1__.EngineRuleService.validSearch(this.search, this.passengers, this.selectedServices, this.context.travelType, this.editMode); // _getCompleteStatus();

    this.searchState.init(this.search);
    this.buildSearchForm();
  }

  initializeTzSearch() {
    this.editingChange.emit(false);
    this.serviceIcon = '';
    this.fieldOrderType = this.editMode ? 'editOrder' : 'mainOrder';

    if (this.editMode) {
      this.initEditSearch();
      return;
    }

    this.unregisterListeners();
    const search = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.searchDataService.getEmptySearch());
    this.search = search.searchData;
    this.oldSearch = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.search);
    this.context = search.context;
    this.passengers = _core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_9__.TzPassengerUtil.FormPax(this.selectedServices, search.passengers, this.translateService);
    this.oldPassenger = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.passengers);
    this.buildSearchForm();
    this.addressService.checkGeoLocationAllowed().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.takeUntil)(this.destroy$)).subscribe();
    this.setListener(this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_3__.ListenerId.LISTEN_SERVICES, this.updateFieldConfig, this));
    this.setListener(this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_3__.ListenerId.LISTEN_TRAVEL_OPTION, this.updateFieldConfig, this));
    this.setListener(this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_3__.ListenerId.LISTEN_SERVICE_REINIT, this.resetSearchToDefault, this));
  }

  setListener(listenerId) {
    if (this.listeners.indexOf(listenerId) > -1) {
      return;
    }

    this.listeners.push(listenerId);
  } // _isAccDetailEdit is to validate to stay in accommodation details


  isAccDetailEdit() {
    // Check whether we are in accommodation details page
    if (this.router.url.indexOf('/hotel/') !== 0) {
      return '';
    }

    let hotelCode = this.router.url.split('/').pop(); // Already we are validating isNewSearch. so check the new search contains address change.
    // if no address change stay in the details page.

    const combinationParams = _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_1__.EngineRuleService.buildSearchFieldsObj(this.selectedServices, this.context.travelType);
    const tempSearch = this.searchDataService.getSearch(this.currentService);
    const resultSearch = tempSearch.searchData;
    const search = this.search;

    for (const i of combinationParams) {
      for (const k in combinationParams[i]) {
        if (k === 'address') {
          // if change in address no need to stay in details page
          if (search[k]) {
            if (search[k].uniqueKey && search[k].uniqueKey !== '' && search[k].uniqueKey !== resultSearch[k].uniqueKey) {
              hotelCode = '';
            } else if (search[k].placeId && search[k].placeId !== '' && search[k].placeId !== resultSearch[k].placeId) {
              hotelCode = '';
            }
          }

          return hotelCode;
        }
      }
    }

    return hotelCode;
  }

  getSearchParams() {
    const params = {
      bookedServiceId: undefined,
      editMode: this.editMode,
      serviceId: this.currentService === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_5__.ServiceId.ACC_DETAILS ? _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_5__.ServiceId.ACC : this.currentService
    };
    const hotelCode = this.isAccDetailEdit();

    if (hotelCode) {
      return Object.assign(Object.assign({}, params), {
        hotelCode: this.router.url.split('/')[2],
        hotelName: decodeURI(this.router.url.split('/')[4])
      });
    }

    return params;
  }

  resetCalendar(field) {
    this.search[field] = {
      fromDate: null,
      toDate: null,
      fromTime: '00:00',
      toTime: '00:00',
      showCalendar: false
    };
  }

  closeAllCalendars() {
    if (this.search[_core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_12__.CalTypes.CAL_RENTAL_TYPE]) {
      this.search[_core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_12__.CalTypes.CAL_RENTAL_TYPE].showCalendar = false;
    }

    if (this.search[_core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_12__.CalTypes.CAL_TRANSFER_TYPE]) {
      this.search[_core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_12__.CalTypes.CAL_TRANSFER_TYPE].showCalendar = false;
    }

    if (this.search[_core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_12__.CalTypes.CAL_TRIP_TYPE]) {
      this.search[_core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_12__.CalTypes.CAL_TRIP_TYPE].showCalendar = false;
    }
  }

  buildFormGroup(fieldOrders, selectedServiceConf) {
    const formGroup = {};
    let fieldCount = 0;

    for (const fieldOrder of fieldOrders) {
      if (!fieldOrder) {
        continue;
      }

      const conf = selectedServiceConf[fieldOrder.confIdx][fieldOrder.field];

      if (fieldOrder.fieldType === 'cal') {
        if (!this.search[fieldOrder.field]) {
          this.resetCalendar(fieldOrder.field);
        }

        formGroup[fieldOrder.field] = conf.optional && (!this.editMode || !conf.editMandatory) ? '' : ['', _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required];
      } else {
        const dispStr = this.search[fieldOrder.field] && this.search[fieldOrder.field].displayStr ? this.search[fieldOrder.field].displayStr : '';
        formGroup[fieldOrder.field] = conf.optional && (!this.editMode || !conf.editMandatory) ? dispStr : [dispStr, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required];
      }

      fieldCount++;
    }

    this.fieldLength = fieldCount;
    return formGroup;
  }

  buildSearchForm() {
    const selectedServiceConf = _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_1__.EngineRuleService.buildSearchFieldsObj(this.selectedServices, this.context.travelType);
    const fieldOrders = _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__.SearchDataService.formSearchFieldOrder(selectedServiceConf, this.fieldOrderType, this.editMode);
    this.searchFormGroup = this.fb.group(this.buildFormGroup(fieldOrders, selectedServiceConf));
    this.formOrder = fieldOrders;
    this.htmlSearchConf = selectedServiceConf;
    this.buildPassengerFormGroup();
    this.formValues = this.searchFormGroup.value;
    this.passengersFormValues = this.passengersFormGroup.value;
  }

  updateFieldConfig(data, subj) {
    switch (subj) {
      case _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_3__.ListenerId.LISTEN_SERVICES:
        this.selectedServices = data;
        this.passengers = _core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_9__.TzPassengerUtil.FormPax(this.selectedServices, this.passengers, this.translateService);
        this.serviceChange(data);
        this.buildSearchForm();
        break;

      case _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_3__.ListenerId.LISTEN_TRAVEL_OPTION:
        this.context.travelType = data.travelType;

        if (data.runMode) {
          this.context.runningMode = data.runMode;
        }

        this.buildSearchForm();
        break;
    }
  }

  buildPassengerFormGroup() {
    const group = {
      childAges: this.fb.array([])
    };
    const passengerConf = this.htmlSearchConf[1].persons;

    if (passengerConf.driver) {
      group.driversAge = new _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormControl(this.passengers.driversAge > 0 ? this.passengers.driversAge : '');
      group.driversAge.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.min(_core_constants_general_settings__WEBPACK_IMPORTED_MODULE_8__.GeneralSettings.passengerRules.minDriverAge), _angular_forms__WEBPACK_IMPORTED_MODULE_30__.Validators.max(_core_constants_general_settings__WEBPACK_IMPORTED_MODULE_8__.GeneralSettings.passengerRules.maxDriverAge)]);
    }

    this.passengersFormGroup = this.fb.group(group);

    if (!_core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_9__.TzPassengerUtil.rentalOnly(this.selectedServices)) {
      const childAges = [...this.passengers.infantAges, ...this.passengers.childrenAges, ...this.passengers.youthAges];

      for (const i of childAges) {
        this.addNewChild(i);
      }
    }
  }

  notifyLocInconsistency(from, to, inconsistencyType) {
    const conf = this.htmlSearchConf;

    for (const c of conf) {
      for (const fieldName in c) {
        if (!c.hasOwnProperty(fieldName)) {
          continue;
        }

        if (fieldName === from) {
          from = this.translateService.instant(c[fieldName].placeholder);
        } else if (fieldName === to) {
          to = this.translateService.instant(c[fieldName].placeholder);
        }
      }
    }

    const formatAddress = addr => {
      addr = addr.split(',')[0];
      addr = addr.split('(')[0];
      return addr;
    };

    this.dialogService.openSnackBar({
      message: this.translateService.instant(inconsistencyType, {
        from: formatAddress(from),
        to: formatAddress(to)
      })
    });
  }

  cleanLinkedField(field) {
    var _a, _b, _c;

    const search = this.search;
    const conf = this.htmlSearchConf;

    if (search[field].noChange) {
      return;
    }

    for (const c of conf) {
      for (const fieldName in c) {
        if (!c.hasOwnProperty(fieldName)) {
          continue;
        }

        const hasLinkedField = ((_b = (_a = c[fieldName]) === null || _a === void 0 ? void 0 : _a.linked) === null || _b === void 0 ? void 0 : _b.field) === field && ((_c = search[fieldName]) === null || _c === void 0 ? void 0 : _c.latitude);

        if (!hasLinkedField) {
          continue;
        }

        const dep = c[fieldName].linked;
        const distance = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.distance(search[fieldName].latitude, search[fieldName].longitude, search[dep.field].latitude, search[dep.field].longitude);

        if (isNaN(distance)) {
          continue;
        }

        const addressLocTooFar = dep.radius && dep.radius > 0 && distance > dep.radius;
        const addressLocTooNear = dep.minRadius && dep.minRadius > 0 && distance < dep.minRadius;

        if (addressLocTooFar || addressLocTooNear) {
          search[fieldName] = _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__.SearchDataService.getNewLoc();
          this.searchFormGroup.controls[fieldName].reset();
          this.notifyLocInconsistency(field, fieldName, addressLocTooFar ? 'NOTIFS.FROM_TO_TOO_FAR' : 'NOTIFS.FROM_TO_TOO_NEAR');
        }
      }
    }
  }

  validateSelectedAddress() {
    const searchData = this.search;
    const isFromValidAirportCity = searchData.from.placeId && (!searchData.from.latitude || !searchData.from.longitude || !searchData.from.isMyLocation && searchData.from.api_source !== _schemas_modules_core_search_address__WEBPACK_IMPORTED_MODULE_7__.AddressSource.SRC_AIRPORT_CITIES);

    if (isFromValidAirportCity) {
      this.search.from = _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__.SearchDataService.getNewLoc();
    }

    const isToValidAirportCity = searchData.to.placeId && (!searchData.to.latitude || !searchData.to.longitude || searchData.to.api_source !== 'sac');

    if (isToValidAirportCity) {
      this.search.to = _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__.SearchDataService.getNewLoc();
    }
  }

  serviceChange(data) {
    if (data.transport) {
      this.validateSelectedAddress();
    } else if (!data.accommodation) {
      // reset from and to when single transfer or rental service selected
      this.search.from = _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__.SearchDataService.getNewLoc();
      this.search.to = _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__.SearchDataService.getNewLoc();
    }

    if (data.accommodation) {
      const shouldReset = _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_13__.CalendarUtilsService.isTheSameDaySelectedForAccommodation('tripCal', this.htmlSearchConf, this.search.tripCal);

      if (shouldReset) {
        this.resetDate('tripCal');
      }
    }
  }

  resetSearchToDefault() {
    const search = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.searchDataService.getEmptySearch());
    this.search = search.searchData;
    this.context = search.context;
    this.passengers = _core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_9__.TzPassengerUtil.FormPax(this.selectedServices, search.passengers, this.translateService);
    this.context.travelType = _core_constants_trip__WEBPACK_IMPORTED_MODULE_6__.Trip.ROUND_TRIP;
    this.searchFormGroup.reset();
  }

  resetSearch() {
    if (this.currentService === undefined || this.currentService === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_5__.ServiceId.INVALID) {
      return;
    }

    console.error('reset search');
    const search = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.searchDataService.getSearch(this.currentService));
    this.search = search.searchData;
    console.error(this.search);
    this.passengers = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService.deepCopy(this.passengersOldValue);
    this.resetPassengersValue = ++this.resetPassengersValue;
    _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_11__.SearchUtilsService.clearPassengerFormArray(this.childAgesFormArray);
    this.passengersFormGroup.patchValue({
      driversAge: this.passengersOldValue.driversAge
    });
    this.resetPassengerValues();
    this.searchFormGroup.reset(Object.assign({}, this.formValues));
  }

  resetPassengerValues() {
    this.passengersFormValues.childAges.map(childAge => {
      this.childAgesFormArray.push(this.fb.group(childAge));
    });
  }

  checkIfSecondaryCalendarsShouldBeReset() {
    if (_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_13__.CalendarUtilsService.shouldResetTransferCalendar(this.search.transferCal, this.search.tripCal, this.selectedServices)) {
      this.resetDate('transferCal');
    }

    if (_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_13__.CalendarUtilsService.shouldResetPreselectedDates('rentalCal', this.htmlSearchConf, this.search)) {
      this.resetDate('rentalCal');
    }
  }

  resetDate(field, keepOpen = false) {
    this.search[field] = _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_13__.CalendarUtilsService.getDefaultCalendarValue();
  }

}

SearchComponent.ɵfac = function SearchComponent_Factory(t) {
  return new (t || SearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_services_searchEngine_services_user_search_service__WEBPACK_IMPORTED_MODULE_14__.UserSearchService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_core_utils_tools_service__WEBPACK_IMPORTED_MODULE_2__.ToolsService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__.SearchDataService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_15__.ListenersService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_1__.EngineRuleService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_services_searchEngine_services_search_state_service__WEBPACK_IMPORTED_MODULE_16__.SearchState), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_services_modules_services_address_service__WEBPACK_IMPORTED_MODULE_17__.AddressService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_18__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_services_modules_core_loader_service__WEBPACK_IMPORTED_MODULE_19__.LoaderService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_20__.CartService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_services_modules_services_recent_search_service__WEBPACK_IMPORTED_MODULE_21__.RecentSearchService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_34__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_29__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_22__.PlatformService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_23__.ModalService));
};

SearchComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineComponent"]({
  type: SearchComponent,
  selectors: [["tz-search"]],
  inputs: {
    selectedServices: "selectedServices",
    editMode: "editMode",
    editing: "editing",
    currentService: "currentService"
  },
  outputs: {
    editingChange: "editingChange",
    editingClose: "editingClose",
    searchDropDownToggle: "searchDropDownToggle"
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵNgOnChangesFeature"]],
  decls: 11,
  vars: 24,
  consts: [[1, "form-container"], ["class", "search-options-container flex align-center", "data-test", "search-option-container", 4, "ngIf"], ["class", "mob-trip", 3, "edit-modal", 4, "ngIf"], [1, "search-fields-container", "flex", 3, "formGroup", "ngClass"], ["class", "chosen-service-icon-cont", "data-test", "result-page-search-bar-icon", 3, "class", 4, "ngIf"], [1, "search-fields", "flex", 3, "ngClass"], [4, "ngFor", "ngForOf"], ["class", "search-components-container", 4, "ngIf"], ["id", "tabIdx9", "class", "search-btn btn-yellow", "data-test", "searching-page-search-button", 3, "d-none", "click", 4, "ngIf"], ["id", "tabIdx9", "class", "edit-search-btn", "data-test", "result-page-searchBar-editButton", 3, "d-none", 4, "ngIf"], ["class", "btn-yellow modal-edit-search-btn", 3, "click", 4, "ngIf"], ["data-test", "search-option-container", 1, "search-options-container", "flex", "align-center"], ["data-test", "searching-page-round-trip", "optionKey", "tripType", "labelKey", "label", "labelSelectKey", "label", "placement", "bottom-left", "className", "tz-search-option fly-type", "dropArrowDownIcon", "", "dropArrowUpIcon", "", 3, "selectedOptionKey", "options", "selectChange", 4, "ngIf"], ["data-test", "searching-page-passenger", 3, "passenger", "passengersFormGroup", "config", "selectedServices", "addNewChild", "applyPax", "focusInvalid", 4, "ngIf"], ["data-test", "searching-page-round-trip", "optionKey", "tripType", "labelKey", "label", "labelSelectKey", "label", "placement", "bottom-left", "className", "tz-search-option fly-type", "dropArrowDownIcon", "", "dropArrowUpIcon", "", 3, "selectedOptionKey", "options", "selectChange"], ["data-test", "searching-page-passenger", 3, "passenger", "passengersFormGroup", "config", "selectedServices", "addNewChild", "applyPax", "focusInvalid"], [1, "mob-trip"], ["class", "mob-trip-type", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "mob-trip-type", 3, "ngClass", "click"], ["data-test", "result-page-search-bar-icon", 1, "chosen-service-icon-cont"], [1, "edit-search-service-icon"], [4, "ngIf"], [1, "search-components-container", 3, "ngSwitch"], [3, "ngIf"], ["data-test", "searching-page-trip-dates", 3, "searchData", "fieldConf", "formGroup", "formField", "readonly", "travelType", "isModalEditMode", "calData", "selectedServices", "dateSelected", "focusInvalid", "searchDropDownToggle", 4, "ngSwitchCase"], ["data-test", "searching-page-input-from-to-address-field", 3, "searchData", "htmlConf", "formGroup", "formField", "readonly", "editMode", "invertFromTo", "locSelected", "searchDropDownToggle", 4, "ngSwitchCase"], ["data-test", "searching-page-input-from-to-address-field", 3, "searchData", "htmlConf", "formGroup", "formField", "readonly", "editMode", "invertFromTo", "locSelected", "searchDropDownToggle"], [3, "searchData", "htmlConf", "formGroup", "editMode", "formField", "isLast", "invertFromTo", "locSelected", 4, "ngSwitchCase"], ["data-mob", "searching-page-passenger", 3, "passenger", "passengersFormGroup", "isMobSearch", "config", "selectedServices", "addNewChild", "applyPax", "focusInvalid"], [3, "searchData", "htmlConf", "formGroup", "editMode", "formField", "isLast", "invertFromTo", "locSelected"], ["data-test", "searching-page-trip-dates", 3, "searchData", "fieldConf", "formGroup", "formField", "readonly", "travelType", "isModalEditMode", "calData", "selectedServices", "dateSelected", "focusInvalid", "searchDropDownToggle"], [1, "search-components-container"], [3, "passenger", "passengersFormGroup", "config", "selectedServices", "editMode", "resetOldValue", "readonly", "isMobSearch", "addNewChild", "applyPax", "focusInvalid", "searchDropDownToggle"], ["id", "tabIdx9", "data-test", "searching-page-search-button", 1, "search-btn", "btn-yellow", 3, "click"], ["src", "/assets/icons/web/icons/search.svg", "alt", "", 4, "ngIf"], ["class", "txt-white body-2-semibold", 4, "ngIf"], ["src", "/assets/icons/web/icons/search.svg", "alt", ""], [1, "txt-white", "body-2-semibold"], ["id", "tabIdx9", "data-test", "result-page-searchBar-editButton", 1, "edit-search-btn"], [1, "btn-yellow", "modal-edit-search-btn", 3, "click"]],
  template: function SearchComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](1, SearchComponent_div_1_Template, 3, 2, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](2, SearchComponent_div_2_Template, 2, 3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](3, "form", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](4, SearchComponent_div_4_Template, 2, 6, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](5, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](6, SearchComponent_ng_container_6_Template, 2, 1, "ng-container", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](7, SearchComponent_div_7_Template, 2, 8, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](8, SearchComponent_button_8_Template, 3, 4, "button", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](9, SearchComponent_div_9_Template, 3, 5, "div", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](10, SearchComponent_button_10_Template, 3, 3, "button", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpureFunction4"](13, _c2, ctx.editMode, !ctx.editing, ctx.isModalEditMode, ctx.editing && !ctx.editMode));
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", !ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice && ctx.selectedServices["transport"]);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("formGroup", ctx.searchFormGroup)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpureFunction3"](18, _c3, ctx.fieldLength > 3, ctx.isModalEditMode, ctx.platformService.isMobileDevice));
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.editMode && !ctx.isModalEditMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpureFunction1"](22, _c4, ctx.fieldLength > 3));
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngForOf", ctx.formOrder);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.editing || !ctx.editMode);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.editMode && !ctx.editing);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_35__.NgIf, _shared_components_dropdowns_dropdown_dropdown_component__WEBPACK_IMPORTED_MODULE_24__.DropdownComponent, _passenger_passenger_component__WEBPACK_IMPORTED_MODULE_25__.PassengerComponent, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_30__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_30__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormGroupDirective, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_35__.NgSwitchCase, _loc_field_loc_field_component__WEBPACK_IMPORTED_MODULE_26__.LocFieldComponent, _mob_loc_field_mob_loc_field_component__WEBPACK_IMPORTED_MODULE_27__.MobLocFieldComponent, _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_28__.CalendarComponent],
  pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_33__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_35__.AsyncPipe],
  styles: [".form-container[_ngcontent-%COMP%]   .search-options-container[_ngcontent-%COMP%] {\n  margin: 0.875rem 0;\n  height: 2.75rem;\n}\n@media (max-width: 920px) {\n  .form-container[_ngcontent-%COMP%]   .search-options-container[_ngcontent-%COMP%] {\n    margin: 0;\n    height: auto;\n  }\n}\n.form-container[_ngcontent-%COMP%]   .search-options-container[_ngcontent-%COMP%]    > [_ngcontent-%COMP%]:not(:first-child) {\n  margin-left: 0.65rem;\n}\n.form-container[_ngcontent-%COMP%]   .search-options-container[_ngcontent-%COMP%]   .hotel-rating[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.5rem 1.5rem;\n  margin-top: 0.25rem !important;\n}\n.form-container[_ngcontent-%COMP%]   .search-options-container[_ngcontent-%COMP%]   .hotel-rating[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--color-main-text);\n  margin-bottom: 0.875rem;\n}\n.form-container[_ngcontent-%COMP%]   .search-options-container[_ngcontent-%COMP%]   .hotel-rating[_ngcontent-%COMP%]   .rating-container[_ngcontent-%COMP%] {\n  gap: 0.531rem;\n}\n.form-container[_ngcontent-%COMP%]   .search-options-container[_ngcontent-%COMP%]   .hotel-rating[_ngcontent-%COMP%]   .rating-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 3.75rem;\n  height: 3.375rem;\n  border: 1px solid var(--color-main-dark-purple-opacity-3);\n  border-radius: 3px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--color-main-text);\n  cursor: pointer;\n}\n.form-container[_ngcontent-%COMP%]   .search-options-container[_ngcontent-%COMP%]   .hotel-rating[_ngcontent-%COMP%]   .rating-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   .tz-icon[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n@media not all and (hover: none) {\n  .form-container[_ngcontent-%COMP%]   .search-options-container[_ngcontent-%COMP%]   .hotel-rating[_ngcontent-%COMP%]   .rating-container[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:hover {\n    opacity: 0.6;\n  }\n}\n.form-container[_ngcontent-%COMP%]   .search-options-container[_ngcontent-%COMP%]   .hotel-rating[_ngcontent-%COMP%]   .rating-container[_ngcontent-%COMP%]    > div.selected[_ngcontent-%COMP%] {\n  color: var(--color-primary-white);\n  background-color: var(--color-main-orange);\n  border-color: var(--color-main-orange);\n}\n.form-container[_ngcontent-%COMP%]   .search-options-container[_ngcontent-%COMP%]   .hotel-rating[_ngcontent-%COMP%]   .apply-btn[_ngcontent-%COMP%] {\n  float: right;\n  margin: 1.5rem 0 0 auto;\n}\n.form-container[_ngcontent-%COMP%]   .search-options-container[_ngcontent-%COMP%]   .hotel-rating[_ngcontent-%COMP%]   .apply-btn.inValid[_ngcontent-%COMP%] {\n  opacity: 0.6;\n  pointer-events: none;\n}\n.form-container[_ngcontent-%COMP%]   .search-fields-container[_ngcontent-%COMP%] {\n  gap: 0.625rem;\n}\n.form-container[_ngcontent-%COMP%]   .search-fields[_ngcontent-%COMP%] {\n  flex: 1;\n  gap: 0.625rem;\n}\n@media (max-width: 920px) {\n  .form-container[_ngcontent-%COMP%]   .search-fields[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.form-container[_ngcontent-%COMP%]   .search-fields[_ngcontent-%COMP%]   .search-components-container[_ngcontent-%COMP%] {\n  flex: 1;\n  height: 3.875rem;\n  position: relative;\n}\n@media (max-width: 920px) {\n  .form-container[_ngcontent-%COMP%]   .search-fields[_ngcontent-%COMP%]   .search-components-container[_ngcontent-%COMP%] {\n    flex: none;\n    height: max-content;\n    min-height: 3rem;\n    display: flex;\n    flex-direction: column;\n  }\n}\n.form-container[_ngcontent-%COMP%]   .search-fields[_ngcontent-%COMP%]   .search-components-container__calendar[_ngcontent-%COMP%] {\n  height: 100%;\n}\n.form-container[_ngcontent-%COMP%]   .search-fields[_ngcontent-%COMP%]   .search-components-container.cal[_ngcontent-%COMP%] {\n  min-width: 14.375rem;\n}\n@media (max-width: 920px) {\n  .form-container[_ngcontent-%COMP%]   .content-wrapped[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n    background-color: var(--color-yellow-selected);\n    height: 3rem;\n  }\n}\n.form-container[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n  width: 3.875rem;\n  height: 3.875rem;\n  flex-shrink: 0;\n  align-self: flex-end;\n}\n.form-container[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.form-container[_ngcontent-%COMP%]   .chosen-service-icon-cont[_ngcontent-%COMP%] {\n  color: var(--color-main-dark-purple-opacity-2);\n  display: flex;\n  align-items: center;\n  margin-right: 1.688rem;\n}\n.form-container[_ngcontent-%COMP%]   .chosen-service-icon-cont.chosen-service-logo[_ngcontent-%COMP%] {\n  color: var(--color-primary-white);\n}\n.form-container[_ngcontent-%COMP%]   .chosen-service-icon-cont[_ngcontent-%COMP%]   .edit-search-service-icon[_ngcontent-%COMP%] {\n  font-size: 1.375rem;\n}\n.form-container.edit-search[_ngcontent-%COMP%]   .content-wrapped[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n.form-container.edit-search[_ngcontent-%COMP%]   .search-fields-container[_ngcontent-%COMP%] {\n  padding: 0.625rem 0;\n  margin-top: 0;\n  gap: 0;\n}\n@media (max-width: 920px) {\n  .form-container.edit-search[_ngcontent-%COMP%]   .search-fields-container[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n.form-container.edit-search[_ngcontent-%COMP%]   .search-fields[_ngcontent-%COMP%]   .search-components-container[_ngcontent-%COMP%] {\n  height: auto;\n  max-width: 15.938rem;\n}\n.form-container.edit-search[_ngcontent-%COMP%]   .search-fields[_ngcontent-%COMP%]   .search-components-container.two-width[_ngcontent-%COMP%] {\n  flex-grow: 2;\n  max-width: 32.438rem;\n}\n.form-container.edit-search[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%], .form-container.edit-search[_ngcontent-%COMP%]   .edit-search-btn[_ngcontent-%COMP%] {\n  width: 5rem;\n  height: 2.5rem;\n  margin-left: 0.625rem;\n}\n.form-container.edit-search[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%], .form-container.edit-search[_ngcontent-%COMP%]   .edit-search-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 28px;\n}\n.form-container.edit-search[_ngcontent-%COMP%]   .edit-search-btn[_ngcontent-%COMP%] {\n  color: var(--color-main-text);\n  background: var(--color-white-blue);\n  border: 1px solid var(--color-main-dark-purple-opacity-2);\n  border-radius: 4px;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.form-container.edit-search[_ngcontent-%COMP%]   .modal-edit-search-btn[_ngcontent-%COMP%] {\n  margin-top: 0.875rem;\n}\n.form-container[_ngcontent-%COMP%]   .modal-edit-search-btn[_ngcontent-%COMP%] {\n  height: 3rem;\n  color: var(--color-mob-white);\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  padding-top: 0.75rem;\n  padding-bottom: 0.75rem;\n  background-color: var(--color-yellow-selected);\n}\n.form-container.mob[_ngcontent-%COMP%]   .search-fields-container[_ngcontent-%COMP%] {\n  padding: 1.25rem 1rem;\n}\n.form-container.mob[_ngcontent-%COMP%]   .chosen-service-icon-cont[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  top: 50%;\n}\n.form-container[_ngcontent-%COMP%]   .search-fields-container.mob[_ngcontent-%COMP%]   .search-components-container[_ngcontent-%COMP%], .form-container[_ngcontent-%COMP%]   .search-fields-container.mob[_ngcontent-%COMP%]   .search-components-container.two-width[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: none;\n}\n.form-container[_ngcontent-%COMP%]   .search-fields-container.mob[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  padding: 0.5rem 2rem 0.5rem 2.25rem;\n}\n.form-container[_ngcontent-%COMP%]   .search-fields-container.mob[_ngcontent-%COMP%]   .input-field-component[_ngcontent-%COMP%] {\n  border: 1px solid var(--color-mob-black);\n}\n.search-btn--disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n.mob-trip[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 2.5rem;\n  margin-bottom: 1.25rem;\n}\n.mob-trip.edit-modal[_ngcontent-%COMP%] {\n  padding: 0.781rem 1rem 0;\n  margin: 0;\n}\n.mob-trip-type[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  font-weight: 500;\n  font-size: 0.75rem;\n  line-height: 2.25rem;\n  color: var(--color-grey-light-mobile);\n}\n.mob-trip-type[_ngcontent-%COMP%]:after {\n  content: \"\";\n  border-radius: 2px;\n  width: 100%;\n  height: 0.125rem;\n  background-color: transparent;\n}\n.mob-trip-type.selected[_ngcontent-%COMP%] {\n  color: var(--ion-color-primary);\n}\n.mob-trip-type.selected[_ngcontent-%COMP%]:after {\n  background-color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNlYXJjaC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBRlI7QUNpREk7RURqREE7SUFLUSxTQUFBO0lBQ0EsWUFBQTtFQURWO0FBQ0Y7QUFHUTtFQUNJLG9CQUFBO0FBRFo7QUFJUTtFQUNJLDhCQUFBO0VBQ0EsOEJBQUE7QUFGWjtBQUlZO0VBQ0ksNkJBQUE7RUFDQSx1QkFBQTtBQUZoQjtBQUtZO0VBQ0ksYUFBQTtBQUhoQjtBQUtnQjtFQUNJLGNBQUE7RUFDQSxnQkFBQTtFQUNBLHlEQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQUhwQjtBQUtvQjtFQUNJLGVBQUE7QUFIeEI7QUNpQ0k7RUFDSTtJRDNCZ0IsWUFBQTtFQUh0QjtBQUNGO0FBS29CO0VBQ0ksaUNBQUE7RUFDQSwwQ0FBQTtFQUNBLHNDQUFBO0FBSHhCO0FBUVk7RUFDSSxZQUFBO0VBQ0EsdUJBQUE7QUFOaEI7QUFRZ0I7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUFOcEI7QUFZSTtFQUNJLGFBQUE7QUFWUjtBQWFJO0VBQ0ksT0FBQTtFQUNBLGFBQUE7QUFYUjtBQ1ZJO0VEbUJBO0lBS1Esc0JBQUE7RUFWVjtBQUNGO0FBWVE7RUFDSSxPQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBQVZaO0FDcEJJO0VEMkJJO0lBTVEsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsZ0JBQUE7SUFDQSxhQUFBO0lBQ0Esc0JBQUE7RUFUZDtBQUNGO0FBV1k7RUFDSSxZQUFBO0FBVGhCO0FBWVk7RUFDSSxvQkFBQTtBQVZoQjtBQ25DSTtFRG1ESTtJQUVRLDhDQUFBO0lBQ0EsWUFBQTtFQWRkO0FBQ0Y7QUFrQkk7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0VBQ0Esb0JBQUE7QUFoQlI7QUFrQlE7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7QUFoQlo7QUFvQkk7RUFDSSw4Q0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FBbEJSO0FBbUJRO0VBQ0ksaUNBQUE7QUFqQlo7QUFtQlE7RUFDSSxtQkFBQTtBQWpCWjtBQXNCUTtFQUNJLG1CQUFBO0FBcEJaO0FBdUJRO0VBQ0ksbUJBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtBQXJCWjtBQ3pFSTtFRDJGSTtJQU1RLHNCQUFBO0VBcEJkO0FBQ0Y7QUF3Qlk7RUFDSSxZQUFBO0VBQ0Esb0JBQUE7QUF0QmhCO0FBdUJnQjtFQUNJLFlBQUE7RUFDQSxvQkFBQTtBQXJCcEI7QUEwQlE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FBeEJaO0FBMEJZO0VBQ0ksV0FBQTtBQXhCaEI7QUE0QlE7RUFDSSw2QkFBQTtFQUNBLG1DQUFBO0VBQ0EseURBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQTNCWjtBQThCUTtFQUNJLG9CQUFBO0FBNUJaO0FBZ0NJO0VBQ0ksWUFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLDhDQUFBO0FBOUJSO0FBa0NRO0VBQ0kscUJBQUE7QUFoQ1o7QUFtQ1E7RUFDSSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxRQUFBO0FBakNaO0FBdUNZO0VBQ0ksV0FBQTtFQUNBLGVBQUE7QUFyQ2hCO0FBeUNRO0VBQ0ksbUNBQUE7QUF2Q1o7QUEwQ1E7RUFDSSx3Q0FBQTtBQXhDWjtBQStDQTtFQUNJLG9CQUFBO0FBNUNKO0FBK0NBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtBQTVDSjtBQThDSTtFQUNJLHdCQUFBO0VBQ0EsU0FBQTtBQTVDUjtBQStDSTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0FBN0NSO0FBK0NRO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsNkJBQUE7QUE3Q1o7QUFnRFE7RUFDSSwrQkFBQTtBQTlDWjtBQStDWTtFQUNJLDBDQUFBO0FBN0NoQiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidXRpbHMvbWl4aW5zXCI7XG5cbi5mb3JtLWNvbnRhaW5lciB7XG4gICAgLnNlYXJjaC1vcHRpb25zLWNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbjogMC44NzVyZW0gMDtcbiAgICAgICAgaGVpZ2h0OiAyLjc1cmVtO1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICA+IDpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogMC42NXJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ob3RlbC1yYXRpbmcge1xuICAgICAgICAgICAgcGFkZGluZzogMS4yNXJlbSAxLjVyZW0gMS41cmVtO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbSAhaW1wb3J0YW50O1xuXG4gICAgICAgICAgICAudGl0bGUge1xuICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRleHQpO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuODc1cmVtO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAucmF0aW5nLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgZ2FwOiAwLjUzMXJlbTtcblxuICAgICAgICAgICAgICAgID4gZGl2IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMuNzVyZW07XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMy4zNzVyZW07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWNvbG9yLW1haW4tZGFyay1wdXJwbGUtb3BhY2l0eS0zKTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICAgICAgICAgICAgICAudHotaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBvbi1ob3ZlciB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLW1haW4tb3JhbmdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tY29sb3ItbWFpbi1vcmFuZ2UpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuYXBwbHktYnRuIHtcbiAgICAgICAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxLjVyZW0gMCAwIGF1dG87XG5cbiAgICAgICAgICAgICAgICAmLmluVmFsaWQge1xuICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5zZWFyY2gtZmllbGRzLWNvbnRhaW5lciB7XG4gICAgICAgIGdhcDogMC42MjVyZW07XG4gICAgfVxuXG4gICAgLnNlYXJjaC1maWVsZHMge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBnYXA6IDAuNjI1cmVtO1xuXG4gICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaC1jb21wb25lbnRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgaGVpZ2h0OiAzLjg3NXJlbTtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICAgICAgICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XG4gICAgICAgICAgICAgICAgbWluLWhlaWdodDogM3JlbTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICZfX2NhbGVuZGFyIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYuY2FsIHtcbiAgICAgICAgICAgICAgICBtaW4td2lkdGg6IDE0LjM3NXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5jb250ZW50LXdyYXBwZWQge1xuICAgICAgICAuc2VhcmNoLWJ0biB7XG4gICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy1zZWxlY3RlZCk7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzcmVtXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc2VhcmNoLWJ0biB7XG4gICAgICAgIHdpZHRoOiAzLjg3NXJlbTtcbiAgICAgICAgaGVpZ2h0OiAzLjg3NXJlbTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLmNob3Nlbi1zZXJ2aWNlLWljb24tY29udCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWRhcmstcHVycGxlLW9wYWNpdHktMik7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMS42ODhyZW07XG4gICAgICAgICYuY2hvc2VuLXNlcnZpY2UtbG9nbyB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSk7XG4gICAgICAgIH1cbiAgICAgICAgLmVkaXQtc2VhcmNoLXNlcnZpY2UtaWNvbiB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEuMzc1cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgJi5lZGl0LXNlYXJjaCB7XG4gICAgICAgIC5jb250ZW50LXdyYXBwZWQge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2gtZmllbGRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBwYWRkaW5nOiAwLjYyNXJlbSAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgIGdhcDogMDtcblxuICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaC1maWVsZHMge1xuICAgICAgICAgICAgLnNlYXJjaC1jb21wb25lbnRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTUuOTM4cmVtO1xuICAgICAgICAgICAgICAgICYudHdvLXdpZHRoIHtcbiAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAyO1xuICAgICAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IDMyLjQzOHJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoLWJ0biwgLmVkaXQtc2VhcmNoLWJ0biB7XG4gICAgICAgICAgICB3aWR0aDogNXJlbTtcbiAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDAuNjI1cmVtO1xuXG4gICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAyOHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmVkaXQtc2VhcmNoLWJ0biB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi10ZXh0KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLXdoaXRlLWJsdWUpO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tY29sb3ItbWFpbi1kYXJrLXB1cnBsZS1vcGFjaXR5LTIpO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1vZGFsLWVkaXQtc2VhcmNoLWJ0biB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjg3NXJlbTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5tb2RhbC1lZGl0LXNlYXJjaC1idG4ge1xuICAgICAgICBoZWlnaHQ6IDNyZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tb2Itd2hpdGUpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgICAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWNvbG9yLXllbGxvdy1zZWxlY3RlZCk7XG4gICAgfVxuXG4gICAgJi5tb2Ige1xuICAgICAgICAuc2VhcmNoLWZpZWxkcy1jb250YWluZXIge1xuICAgICAgICAgICAgcGFkZGluZzogMS4yNXJlbSAxcmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNob3Nlbi1zZXJ2aWNlLWljb24tY29udCB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgIHRvcDogNTAlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNlYXJjaC1maWVsZHMtY29udGFpbmVyLm1vYiB7XG4gICAgICAgIC5zZWFyY2gtY29tcG9uZW50cy1jb250YWluZXIge1xuICAgICAgICAgICAgJiwgJi50d28td2lkdGgge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtIDAuNXJlbSAyLjI1cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgLmlucHV0LWZpZWxkLWNvbXBvbmVudCB7XG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1jb2xvci1tb2ItYmxhY2spO1xuICAgICAgICB9XG5cblxuICAgIH1cbn1cblxuLnNlYXJjaC1idG4tLWRpc2FibGVkIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLm1vYi10cmlwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGdhcDogMi41cmVtO1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG5cbiAgICAmLmVkaXQtbW9kYWwge1xuICAgICAgICBwYWRkaW5nOiAwLjc4MXJlbSAxcmVtIDA7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICB9XG5cbiAgICAmLXR5cGUge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjI1cmVtO1xuICAgICAgICBjb2xvcjogIHZhcigtLWNvbG9yLWdyZXktbGlnaHQtbW9iaWxlKTtcblxuICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDAuMTI1cmVtO1xuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIH1cblxuICAgICAgICAmLnNlbGVjdGVkIHtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */", "@media (min-width: 921px) and (max-width: 1220px) {\n  .home-page-search[_ngcontent-%COMP%]   .tablet-wrap[_ngcontent-%COMP%]   .search-components-container[_ngcontent-%COMP%] {\n    min-width: 18rem;\n  }\n  .home-page-search[_ngcontent-%COMP%]   .content-wrapped[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .home-page-search[_ngcontent-%COMP%]   .content-wrapped[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .home-page-search.form-container[_ngcontent-%COMP%]   .search-fields[_ngcontent-%COMP%]   .search-components-container[_ngcontent-%COMP%] {\n    height: 3.375rem;\n  }\n  .home-page-search.form-container[_ngcontent-%COMP%]   .search-fields[_ngcontent-%COMP%]:not(.tablet-wrap)   .cal[_ngcontent-%COMP%] {\n    max-width: 14.75rem;\n  }\n  .home-page-search.form-container[_ngcontent-%COMP%]   .search-btn[_ngcontent-%COMP%] {\n    width: 3.375rem;\n    height: 3.375rem;\n  }\n\n  .form-container.edit-search[_ngcontent-%COMP%]   .search-fields[_ngcontent-%COMP%]   .search-components-container[_ngcontent-%COMP%] {\n    max-width: 11.063rem;\n    min-width: unset;\n  }\n  .form-container.edit-search[_ngcontent-%COMP%]   .search-fields[_ngcontent-%COMP%]   .search-components-container.two-width[_ngcontent-%COMP%] {\n    max-width: 22.75rem;\n  }\n  .form-container.edit-search[_ngcontent-%COMP%]   .edit-search-btn[_ngcontent-%COMP%] {\n    font-size: 0.875rem;\n    line-height: 1.25rem;\n  }\n}\n.search-btn--disabled[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIiwic2VhcmNoLmNvbXBvbmVudC50YWJsZXQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnRUk7RUM1REk7SUFDSSxnQkFBQTtFQUZWO0VBS007SUFDSSxzQkFBQTtFQUhWO0VBS1U7SUFDSSxXQUFBO0VBSGQ7RUFTYztJQUNJLGdCQUFBO0VBUGxCO0VBVWM7SUFDSSxtQkFBQTtFQVJsQjtFQVlVO0lBQ0ksZUFBQTtJQUNBLGdCQUFBO0VBVmQ7O0VBaUJVO0lBQ0ksb0JBQUE7SUFDQSxnQkFBQTtFQWRkO0VBZ0JjO0lBQ0ksbUJBQUE7RUFkbEI7RUFtQk07SUFDSSxtQkFBQTtJQUNBLG9CQUFBO0VBakJWO0FBQ0Y7QUFxQkE7RUFDSSxvQkFBQTtBQW5CSiIsImZpbGUiOiJzZWFyY2guY29tcG9uZW50LnRhYmxldC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIiwiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG5AaW5jbHVkZSB0YWJsZXQge1xuICAgIC5ob21lLXBhZ2Utc2VhcmNoIHtcbiAgICAgICAgLnRhYmxldC13cmFwIC5zZWFyY2gtY29tcG9uZW50cy1jb250YWluZXIge1xuICAgICAgICAgICAgbWluLXdpZHRoOiAxOHJlbTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50LXdyYXBwZWQge1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgLnNlYXJjaC1idG4ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJi5mb3JtLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAuc2VhcmNoLWZpZWxkcyB7XG4gICAgICAgICAgICAgICAgLnNlYXJjaC1jb21wb25lbnRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMy4zNzVyZW07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjpub3QoLnRhYmxldC13cmFwKSAuY2FsIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4LXdpZHRoOiAxNC43NXJlbTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5zZWFyY2gtYnRuIHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMy4zNzVyZW07XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAzLjM3NXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC5mb3JtLWNvbnRhaW5lci5lZGl0LXNlYXJjaCB7XG4gICAgICAgIC5zZWFyY2gtZmllbGRzIHtcbiAgICAgICAgICAgIC5zZWFyY2gtY29tcG9uZW50cy1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogMTEuMDYzcmVtO1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogdW5zZXQ7XG5cbiAgICAgICAgICAgICAgICAmLnR3by13aWR0aCB7XG4gICAgICAgICAgICAgICAgICAgIG1heC13aWR0aDogMjIuNzVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLmVkaXQtc2VhcmNoLWJ0biB7XG4gICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zZWFyY2gtYnRuLS1kaXNhYmxlZCB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4iXX0= */"]
});

/***/ }),

/***/ 69837:
/*!*************************************************!*\
  !*** ./src/app/modules/search/search.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchModule": () => (/* binding */ SearchModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _search_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./search.component */ 49364);
/* harmony import */ var _loc_field_loc_field_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loc-field/loc-field.component */ 10221);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calendar/calendar.component */ 86930);
/* harmony import */ var _passenger_passenger_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./passenger/passenger.component */ 37191);
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @ng-select/ng-select */ 88660);
/* harmony import */ var _directives_field_navigation_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./directives/field-navigation.directive */ 22864);
/* harmony import */ var _mob_loc_field_modal_mob_loc_field_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mob-loc-field-modal/mob-loc-field-modal.component */ 19561);
/* harmony import */ var _components_mob_loc_field_results_mob_loc_field_results_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/mob-loc-field-results/mob-loc-field-results.component */ 87274);
/* harmony import */ var _mob_loc_field_mob_loc_field_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mob-loc-field/mob-loc-field.component */ 55411);
/* harmony import */ var _trazler_calendar_trazler_calendar_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./trazler-calendar/trazler-calendar.module */ 59416);
/* harmony import */ var _mob_search_details_mob_search_details_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mob-search-details/mob-search-details.component */ 45806);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
















class SearchModule {
}
SearchModule.ɵfac = function SearchModule_Factory(t) { return new (t || SearchModule)(); };
SearchModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineNgModule"]({ type: SearchModule });
SearchModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule, _trazler_calendar_trazler_calendar_module__WEBPACK_IMPORTED_MODULE_9__.TrazlerCalendarModule], _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetNgModuleScope"](SearchModule, { declarations: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent,
        _loc_field_loc_field_component__WEBPACK_IMPORTED_MODULE_1__.LocFieldComponent,
        _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__.CalendarComponent,
        _passenger_passenger_component__WEBPACK_IMPORTED_MODULE_4__.PassengerComponent,
        _directives_field_navigation_directive__WEBPACK_IMPORTED_MODULE_5__.FieldNavigationDirective,
        _mob_loc_field_modal_mob_loc_field_modal_component__WEBPACK_IMPORTED_MODULE_6__.MobLocFieldModalComponent,
        _mob_loc_field_mob_loc_field_component__WEBPACK_IMPORTED_MODULE_8__.MobLocFieldComponent,
        _components_mob_loc_field_results_mob_loc_field_results_component__WEBPACK_IMPORTED_MODULE_7__.MobLocFieldResultsComponent,
        _mob_search_details_mob_search_details_component__WEBPACK_IMPORTED_MODULE_10__.MobSearchDetailsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_12__.CommonModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.ReactiveFormsModule, _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_14__.NgSelectModule, _trazler_calendar_trazler_calendar_module__WEBPACK_IMPORTED_MODULE_9__.TrazlerCalendarModule], exports: [_search_component__WEBPACK_IMPORTED_MODULE_0__.SearchComponent,
        _loc_field_loc_field_component__WEBPACK_IMPORTED_MODULE_1__.LocFieldComponent,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule,
        _calendar_calendar_component__WEBPACK_IMPORTED_MODULE_3__.CalendarComponent,
        _passenger_passenger_component__WEBPACK_IMPORTED_MODULE_4__.PassengerComponent,
        _mob_search_details_mob_search_details_component__WEBPACK_IMPORTED_MODULE_10__.MobSearchDetailsComponent] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵsetComponentScope"](_mob_loc_field_modal_mob_loc_field_modal_component__WEBPACK_IMPORTED_MODULE_6__.MobLocFieldModalComponent, [_mob_loc_field_mob_loc_field_component__WEBPACK_IMPORTED_MODULE_8__.MobLocFieldComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_13__.FormGroupDirective], []);


/***/ }),

/***/ 64093:
/*!*************************************************************************************!*\
  !*** ./src/app/modules/search/trazler-calendar/components/base-trazler-calendar.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseTrazlerCalendar": () => (/* binding */ BaseTrazlerCalendar)
/* harmony export */ });
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/modules/core/listeners-service */ 96831);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modules/search/utils/dates.service */ 77251);





class BaseTrazlerCalendar {
    constructor(injector) {
        this.searchDataService = injector.get(_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_0__.SearchDataService);
        this.datesService = injector.get(_services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_4__.DatesService);
        this.listenersService = injector.get(_services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_1__.ListenersService);
        this.platformService = injector.get(_services_platform_service__WEBPACK_IMPORTED_MODULE_2__.PlatformService);
        this.settingsService = injector.get(_services_services_settings_service__WEBPACK_IMPORTED_MODULE_3__.SettingsService);
    }
}


/***/ }),

/***/ 38201:
/*!***********************************************************************************************************!*\
  !*** ./src/app/modules/search/trazler-calendar/components/trazler-calendar/trazler-calendar.component.ts ***!
  \***********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TimeUintMap": () => (/* binding */ TimeUintMap),
/* harmony export */   "TimeUnit": () => (/* binding */ TimeUnit),
/* harmony export */   "TrazlerCalendarComponent": () => (/* binding */ TrazlerCalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/trip */ 16699);
/* harmony import */ var _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/call-types.const */ 37005);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/utils/tools-service */ 67457);
/* harmony import */ var _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modules/search/utils/calendar.utils */ 51664);
/* harmony import */ var _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modules/search/utils/dates.service */ 77251);
/* harmony import */ var _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/constants/general-settings */ 12308);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/modules/core/listeners-service */ 96831);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* eslint-disable */














function TrazlerCalendarComponent_tz_trazler_transfer_calendar_2_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tz-trazler-transfer-calendar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("apply", function TrazlerCalendarComponent_tz_trazler_transfer_calendar_2_Template_tz_trazler_transfer_calendar_apply_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r4.onApplyDate($event); })("clear", function TrazlerCalendarComponent_tz_trazler_transfer_calendar_2_Template_tz_trazler_transfer_calendar_clear_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r6.cancelBtn(false); })("closeCalendar", function TrazlerCalendarComponent_tz_trazler_transfer_calendar_2_Template_tz_trazler_transfer_calendar_closeCalendar_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r5); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r7.closeCalendar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("monthsArr", ctx_r0.monthsArr)("weekHeads", ctx_r0.weekHeads)("search", ctx_r0.search)("defaultValue", ctx_r0.defaultValue)("calendarData", ctx_r0.calendarData)("travelOption", ctx_r0.travelOption)("calendarConf", ctx_r0.calendarConf)("calType", ctx_r0.calTypes.CAL_TRANSFER_TYPE)("isMobile", ctx_r0.isMobile);
} }
function TrazlerCalendarComponent_tz_trazler_transfer_calendar_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tz-trazler-transfer-calendar", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("apply", function TrazlerCalendarComponent_tz_trazler_transfer_calendar_3_Template_tz_trazler_transfer_calendar_apply_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r8.onApplyDate($event); })("clear", function TrazlerCalendarComponent_tz_trazler_transfer_calendar_3_Template_tz_trazler_transfer_calendar_clear_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r10.cancelBtn(false); })("closeCalendar", function TrazlerCalendarComponent_tz_trazler_transfer_calendar_3_Template_tz_trazler_transfer_calendar_closeCalendar_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r9); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r11.closeCalendar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("monthsArr", ctx_r1.monthsArr)("weekHeads", ctx_r1.weekHeads)("search", ctx_r1.search)("defaultValue", ctx_r1.defaultValue)("calendarData", ctx_r1.calendarData)("travelOption", ctx_r1.travelOption)("calendarConf", ctx_r1.calendarConf)("calType", ctx_r1.calTypes.CAL_RENTAL_TYPE)("isMobile", ctx_r1.isMobile);
} }
function TrazlerCalendarComponent_tz_trazler_trip_dates_calendar_4_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "tz-trazler-trip-dates-calendar", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("apply", function TrazlerCalendarComponent_tz_trazler_trip_dates_calendar_4_Template_tz_trazler_trip_dates_calendar_apply_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r12.onApplyDate($event); })("clear", function TrazlerCalendarComponent_tz_trazler_trip_dates_calendar_4_Template_tz_trazler_trip_dates_calendar_clear_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r14.cancelBtn(false); })("closeCalendar", function TrazlerCalendarComponent_tz_trazler_trip_dates_calendar_4_Template_tz_trazler_trip_dates_calendar_closeCalendar_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵrestoreView"](_r13); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"](); return ctx_r15.closeCalendar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("monthsArr", ctx_r2.monthsArr)("weekHeads", ctx_r2.weekHeads)("search", ctx_r2.search)("defaultValue", ctx_r2.defaultValue)("calendarData", ctx_r2.calendarData)("travelOption", ctx_r2.travelOption)("calendarConf", ctx_r2.calendarConf)("isMobile", ctx_r2.isMobile)("isModalEditMode", ctx_r2.isModalEditMode)("selectedServices", ctx_r2.selectedServices);
} }
function TrazlerCalendarComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "tz-datetime-calendar", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("calendarConf", ctx_r3.calendarConf)("defaultValue", ctx_r3.defaultValue)("calendarType", ctx_r3.content)("travelOption", ctx_r3.travelOption)("search", ctx_r3.search);
} }
var TimeUintMap;
(function (TimeUintMap) {
    TimeUintMap[TimeUintMap["w"] = 604800000] = "w";
    TimeUintMap[TimeUintMap["d"] = 86400000] = "d";
    TimeUintMap[TimeUintMap["h"] = 3600000] = "h";
    TimeUintMap[TimeUintMap["m"] = 60000] = "m";
    TimeUintMap[TimeUintMap["s"] = 1000] = "s";
})(TimeUintMap || (TimeUintMap = {}));
var TimeUnit;
(function (TimeUnit) {
    TimeUnit["W"] = "w";
    TimeUnit["d"] = "d";
    TimeUnit["h"] = "h";
    TimeUnit["m"] = "m";
    TimeUnit["s"] = "s";
})(TimeUnit || (TimeUnit = {}));
class TrazlerCalendarComponent {
    constructor(searchDataService, datesService, listenersService, platformService, settingsService) {
        this.searchDataService = searchDataService;
        this.datesService = datesService;
        this.listenersService = listenersService;
        this.platformService = platformService;
        this.settingsService = settingsService;
        this.isMobile = false;
        this.calendarId = '';
        this.calendarConf = {
            class: 'col-xl-4 col-md-4 order3',
            defaultTime: '09',
            content: _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_TRIP_TYPE,
            dateRange: true,
            fieldRole: 0,
            mainOrder: 3,
            editOrder: 3,
            maxDays: 28,
            minDays: 1,
            placeholder: 'SEARCH.TRIP_DATES',
            showNights: true,
            showTripOption: true,
            tabOrder: 3,
            time: false,
        };
        this.travelOption = _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY;
        this.content = _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_TRIP_TYPE;
        this.formDisplayStrAttribute = false;
        this.calendarData = {};
        this.selectedServices = _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_6__.GeneralSettings.defaultSelectedServices;
        this.hideCalDropdown = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.apply = new _angular_core__WEBPACK_IMPORTED_MODULE_11__.EventEmitter();
        this.calTypes = _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes;
        this.today = new Date();
        this.disableTime = false;
        this.allowTravelChange = true;
        this.isPickUpDisable = true;
        this.isDropOfDisable = true;
        this.monthsArr = [];
        this.fromCal = 0;
        this.weekHeads = [];
        this.showNights = false;
    }
    static formAndGetDateIns(_date) {
        if (!_date)
            return;
        return _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_5__.DatesService.getDateNoTime(_date);
    }
    ngOnInit() {
        this.initializeCalendarComponent();
    }
    ngOnChanges(changes) {
        console.log(changes);
        this.content = this.calendarConf.content;
        // this.initializeCalendarComponent();
    }
    ngOnDestroy() {
        if (this.listenerId) {
            this.listenersService.unregisterListener(this.listenerId);
        }
    }
    formDate(month_idx, day) {
        if (!day || !this.monthsArr.length)
            return;
        return _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_5__.DatesService.getDateNoTimeFrom(this.monthsArr[month_idx].year, this.monthsArr[month_idx].month, day.toString());
    }
    isInvalid() {
        let isInvalid = false;
        switch (this.content) {
            case _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_RENTAL_TYPE:
            case _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_TRANSFER_TYPE:
                isInvalid =
                    (this.singlePicker && !_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_4__.CalendarUtilsService.isValidDate(this.fromDate)) ||
                        (!this.singlePicker &&
                            (!_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_4__.CalendarUtilsService.isValidDate(this.fromDate) ||
                                !_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_4__.CalendarUtilsService.isValidDate(this.toDate))) ||
                        this.validFromAndToDateTime() ||
                        (this.singlePicker && this.isPickUpDisable) ||
                        (!this.singlePicker && this.isDropOfDisable) ||
                        this.disableTime;
                break;
            case _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_TRIP_TYPE:
            case _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_MEETING_TYPE:
                isInvalid =
                    (this.singlePicker && !_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_4__.CalendarUtilsService.isValidDate(this.fromDate)) ||
                        (!this.singlePicker &&
                            (!_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_4__.CalendarUtilsService.isValidDate(this.fromDate) ||
                                !_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_4__.CalendarUtilsService.isValidDate(this.toDate)));
                break;
            default:
                console.log('unknown cal type:' + this.content);
                return false;
        }
        return isInvalid;
    }
    closeCalendar() {
        this.hideCalDropdown.emit();
        setTimeout(() => {
            this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_FOCUS_NEXT, {
                id: 'tabIdx' + this.calendarConf.tabOrder,
            });
        }, 300);
    }
    cancelBtn(noClear) {
        this.fromDate = null;
        this.toDate = null;
        this.hours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
        this.mins = '00';
        this.toHours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
        this.toMins = '00';
        this.isPickUpDisable = true;
        this.isDropOfDisable = true;
        this.calModel.fromDisplayStr = '';
        this.calModel.toDisplayStr = '';
        this.calModel.displayStr = '';
        this.calModel.appliedFromDate = '';
        this.calModel.appliedToDate = '';
        this.calModel.applied = false;
        this.noOfNights = 0;
        this.hoverDate = null;
        this.calModel.businessMeeting = false;
        this.calModel.preferBC = false;
        this.calModel.translator = false;
        this.enableDaysOnSelection(false);
        //this.rollBackCalendarState();
        if (!this.minDate && !this.maxDate) {
            this.setMonths();
        }
        if (this.minDate) {
            this.assignNoOfNights();
        }
        if (!noClear) {
            this.clear.emit();
        }
    }
    selectDate(month_idx, day, isBan, disable) {
        if (isBan || !day || disable || !this.monthsArr[month_idx])
            return;
        var year = this.monthsArr[month_idx].year;
        var month = this.monthsArr[month_idx].month;
        var _date = new Date(year, month, parseInt(day.toString()));
        var nextYearDate = new Date(this.today.getFullYear() + 1, this.today.getMonth(), this.today.getDate());
        var newToday = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
        if (_date < newToday || _date > nextYearDate)
            return;
        var minDate = null;
        if (this.minDate) {
            minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate());
        }
        var minHours = this.hours !== undefined
            ? this.hours
            : this.calendarConf.defaultTime
                ? this.calendarConf.defaultTime
                : '09';
        var minMinutes = this.mins !== undefined ? this.mins : '00';
        if ((this.fromDate && this.toDate) || (this.fromDate && _date < this.fromDate)) {
            this.disableFromHH = false;
            this.disableFromMM = false;
        }
        else if (this.fromDate && !this.toDate) {
            this.disableToHH = false;
            this.disableToMM = false;
        }
        this.disableTime = false;
        this.toMins = this.toMins !== undefined ? this.toMins : '00';
        this.toHours =
            this.toHours !== undefined
                ? this.toHours
                : this.calendarConf.defaultTime
                    ? this.calendarConf.defaultTime
                    : '09';
        var _today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
        if (this.calendarConf.time && _today.getTime() === _date.getTime()) {
            this.minDateTime = _today;
            var hmin = new Date().getHours();
            var mmin = new Date().getMinutes();
            var mmin_reminder = mmin % 10;
            if (mmin_reminder) {
                mmin = mmin - mmin_reminder;
                mmin = mmin + 10;
                if (mmin === 60) {
                    mmin = 0;
                    hmin = hmin + 1;
                }
            }
            // Check scope time is past than current time
            var _scopeDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
            _scopeDate.setHours(this.hours, this.mins);
            var _currentDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
            _currentDate.setHours(hmin, mmin);
            if (_scopeDate.getTime() <= _currentDate.getTime()) {
                minHours = hmin < 10 ? '0' + hmin.toString() : hmin.toString();
                minMinutes = mmin < 10 ? '0' + mmin.toString() : mmin.toString();
            }
            this.minDateTime.setHours(hmin, mmin);
            this.disableFromHH = true;
            this.disableFromMM = true;
            this.disableToHH = true;
            this.disableToMM = true;
        }
        var maxDate = null;
        if (this.maxDate) {
            maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate());
        }
        if (!this.twoDates) {
            this.hoverDate = null;
            if (minDate && minDate > _date) {
                // alert('Meeting date should be within trip dates');
                return;
            }
            if (maxDate && maxDate < _date) {
                return;
            }
            this.isPickUpDisable = false;
            this.fromDate = _date;
            if (this.hours !== minHours || this.mins !== minMinutes) {
                this.hours = minHours;
                this.mins = minMinutes;
            }
            this.toDate = null;
            // if (this.calendarConf.showNights) {
            // this.showNights = true;
            // this.noOfNights = 1;
            // }
            this.assignNoOfNights(this.fromDate, this.toDate, false);
            if (!this.isInvalid()) {
                this.doneBtn(true);
            }
            return;
        }
        if ((this.fromDate && this.toDate) || (this.fromDate && _date < this.fromDate)) {
            if (minDate && minDate > _date) {
                return;
            }
            if (maxDate && maxDate < _date) {
                return;
            }
            this.isDropOfDisable = true;
            this.toDate = null;
            this.hoverDate = null;
            this.fromDate = _date;
            if (this.hours !== minHours || this.mins !== minMinutes) {
                this.hours = minHours;
                this.mins = minMinutes;
                this.toHours = minHours;
                this.toMins = minMinutes;
            }
            this.assignNoOfNights(this.fromDate, this.toDate, false);
            if (this.fromDate && !this.toDate && this.calendarConf.maxDays) {
                this.disableDaysOnSelection(true);
            }
            return;
        }
        if (this.fromDate && _date >= this.fromDate) {
            if (this.twoDates) {
                if (maxDate && maxDate < _date) {
                    return;
                }
                this.isDropOfDisable = false;
                if (this.calendarConf.maxDays) {
                    let dateDifference = this.dateDiff(this.fromDate, _date, TimeUnit.d);
                    if (this.showNights)
                        dateDifference--;
                    if (dateDifference >= this.calendarConf.maxDays) {
                        // $rootthis.alert(true, 'Booking is allowed up to ' + this.calendarConf.maxDays + (this.showNights ? ' nights' : ' days') + ' only');
                        setTimeout(() => {
                            //  $rootthis.alert(false, "");
                            this.assignNoOfNights();
                        }, 3000);
                        return;
                    }
                }
                var fromDate = new Date(this.fromDate.getFullYear(), this.fromDate.getMonth(), this.fromDate.getDate());
                let dateDifference = this.dateDiff(fromDate, _date, TimeUnit.d);
                if (dateDifference < this.calendarConf.minDays) {
                    // alertBox.prompt('Check-In and Check-Out dates can not be same');
                    return;
                }
                //set 30mins to dropOff time from pickup time if current date is choosed
                if (dateDifference <= 0) {
                    var drop_hour = parseInt(this.hours) + 1;
                    var pick_min = parseInt(this.mins);
                    var mins = pick_min + 30;
                    if (mins >= 60) {
                        mins = mins - 60;
                        this.toHours = drop_hour;
                    }
                    if (this.hours > this.toHours) {
                        this.toHours = this.hours;
                    }
                    this.toMins = mins < 10 ? '0' + mins : mins;
                }
                this.toDate = _date;
                // if (this.calendarConf.showNights) {
                // this.showNights = true;
                this.assignNoOfNights(this.fromDate, this.toDate, false);
                // }
                this.calModel.updateData = true;
            }
            if (this.calendarConf.maxDays) {
                this.disableDaysOnSelection(false);
            }
            if (this.calendarConf.minDays === 0 && !this.toDate) {
                this.disableDaysOnSelection(true);
            }
            if (!this.isInvalid()) {
                this.doneBtn(true);
            }
            return;
        }
        if (minDate && minDate > _date) {
            return;
        }
        if (maxDate && maxDate < _date) {
            return;
        }
        this.isPickUpDisable = false;
        this.fromDate = _date;
        if (this.hours !== minHours || this.mins !== minMinutes) {
            this.hours = minHours;
            this.mins = minMinutes;
            this.toHours = minHours;
            this.toMins = minMinutes;
        }
        if (this.fromDate && !this.toDate && this.calendarConf.maxDays) {
            this.disableDaysOnSelection(true);
        }
        this.assignNoOfNights(this.fromDate, this.toDate, false);
    }
    onApplyDate(data) {
        this.apply.emit(data);
    }
    initLangDates() {
        this.weekHeads = this.datesService.getWeekHeads();
    }
    // set date range correctly when linked to travel option (this.calendarConf.twoDates === null)
    setDateRange(conf, search, isInit) {
        if (this.calendarConf.dateRange === _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_RANGE_FREE) {
            this.allowTravelChange = true; // use can set oneWay/roundTrip
            this.calTravelOption = this.calModel.tripType ? this.calModel.tripType : _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ROUND_TRIP;
        }
        else {
            this.allowTravelChange = false; // use can set oneWay/roundTrip
            this.calTravelOption = this.travelOption;
        }
        if (conf.linked) {
            for (let dep in conf.linked) {
                if (search[conf.linked[dep]]) {
                    switch (dep) {
                        case 'fromDate':
                            // case cal is open before the one it depends on
                            if (search[conf.linked[dep]].fromDate) {
                                this.minDate = new Date(search[conf.linked[dep]].fromDate);
                            }
                            break;
                        case 'toDate':
                            // case cal is open before the one it depends on
                            if (search[conf.linked[dep]].toDate) {
                                this.maxDate = new Date(search[conf.linked[dep]].toDate);
                            }
                            break;
                    }
                }
            }
        }
        if (this.calModel.resultSet && isInit) {
            this.calTravelOption = this.calModel.twoDates ? _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ROUND_TRIP : _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY;
        }
        this.tripType = this.calModel.disableRoundTrip ? _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY : this.calTravelOption;
        this.calTravelOption = this.tripType;
        this.twoDates = _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_4__.CalendarUtilsService.isTwoDates(this.calendarConf.dateRange, this.calTravelOption);
        //TODO remove once new mode used (replace singlePicker var on html by !datRange)
        this.singlePicker = !this.twoDates;
    }
    validFromAndToDateTime() {
        let _fromdate, _todate;
        if (_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_4__.CalendarUtilsService.isValidDate(this.fromDate)) {
            _fromdate = new Date(this.fromDate.getTime());
        }
        else {
            return false;
        }
        if (_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_4__.CalendarUtilsService.isValidDate(this.toDate)) {
            _todate = new Date(this.toDate.getTime());
        }
        else {
            return false;
        }
        _fromdate === null || _fromdate === void 0 ? void 0 : _fromdate.setHours(parseInt(this.hours), parseInt(this.mins));
        if (_todate)
            _todate.setHours(parseInt(this.toHours), parseInt(this.toMins));
        if (this.calendarConf.time === 'true' && !this.twoDates) {
            return this.minDateTime && _fromdate.getTime() < this.minDateTime.getTime();
        }
        if (this.twoDates && this.calendarConf.time === 'true') {
            return (_fromdate.getTime() >= _todate.getTime() ||
                (this.minDateTime && _fromdate.getTime() < this.minDateTime.getTime()));
        }
        else {
            return false;
        }
    }
    enableDaysOnSelection(disable) {
        this.limitCal = this.monthsArr.length;
        for (var i = 0; i < this.monthsArr.length; i++) {
            this.monthsArr[i].monthDays.forEach((days) => {
                days.forEach((d) => {
                    d.disable = disable;
                });
            });
        }
    }
    disableDaysOnSelection(disable) {
        // if (calTravelOption === Trip.ONE_WAY) return;
        if (!this.calendarConf.maxDays)
            return;
        if (!disable) {
            this.enableDaysOnSelection(disable);
            return;
        }
        let restrictDays = parseInt(this.calendarConf.maxDays);
        if (!this.showNights)
            restrictDays = restrictDays - 1;
        let _fromDate = new Date(this.fromDate.valueOf());
        let addDays = _fromDate.getDate() + restrictDays;
        let restrictDate = new Date(_fromDate.valueOf());
        restrictDate.setDate(addDays);
        this.limitCal = this.monthsArr.length;
        for (var i = 0; i < this.monthsArr.length; i++) {
            this.monthsArr[i].monthDays.forEach((dd) => {
                dd.forEach((d) => {
                    if (!d.text)
                        return;
                    let _d = new Date(this.monthsArr[i].year, this.monthsArr[i].month, d.text);
                    if (_d > restrictDate) {
                        d.disable = true;
                        if (this.limitCal === this.monthsArr.length) {
                            this.limitCal = i + (d.text === 1 ? 0 : 1);
                        }
                    }
                });
            });
        }
    }
    doneBtn(keepOpen) {
        let res = {};
        if (!(this.fromDate instanceof Date && !isNaN(this.fromDate.getTime())))
            return;
        if (this.twoDates && !(this.toDate instanceof Date))
            return;
        let minDate = null;
        if (this.minDate) {
            minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate());
        }
        let maxDate = null;
        if (this.maxDate) {
            maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate());
        }
        let fromDate = new Date(this.fromDate.getFullYear(), this.fromDate.getMonth(), this.fromDate.getDate());
        let toDate;
        if (minDate && minDate > fromDate) {
            return;
        }
        if (maxDate && maxDate < fromDate) {
            return;
        }
        if (this.fromDate && this.fromDate instanceof Date) {
            res.fromDate = _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_5__.DatesService.getDateNoTime(this.fromDate);
            res.toDisplayStr = '';
        }
        if (this.toDate && this.toDate instanceof Date) {
            res.toDate = _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_5__.DatesService.getDateNoTime(this.toDate);
            toDate = new Date(this.toDate.getFullYear(), this.toDate.getMonth(), this.toDate.getDate());
        }
        else {
            res.toDate = null;
        }
        if (this.twoDates) {
            if (this.toHours) {
                res.toTime = this.toHours + ':' + this.toMins;
            }
            else {
                res.toTime = '00:00';
            }
        }
        else {
            res.toTime = null;
        }
        if (this.hours) {
            res.fromTime = this.hours + ':' + this.mins;
        }
        else {
            res.fromTime = '00:00';
        }
        if (this.allowTravelChange) {
            res.tripType = this.tripType;
        }
        res.twoDates = this.twoDates;
        if (this.formDisplayStrAttribute) {
            res.displayStr = this.datesService.formDoubleDate(fromDate, toDate);
        }
        else {
            res.displayStr = this.calModel.fromDisplayStr;
            if (this.calModel.toDisplayStr) {
                res.displayStr = res.fromDisplayStr + ' - ' + res.toDisplayStr;
            }
        }
        if (this.formDisplayStrAttribute && toDate && this.dateDiff(fromDate, toDate, TimeUnit.d) === 0) {
            const fromMonth = this.datesService.getMonth(fromDate.getMonth(), true);
            res.fromDisplayStr = res.fromDisplayStr + ' ' + fromMonth + ', ' + fromDate.getFullYear();
            res.toDisplayStr = '';
        }
        this.apply.emit({ newDates: res, keepOpen });
        if (!keepOpen) {
            this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_FOCUS_NEXT, {
                id: 'tabIdx' + this.calendarConf.tabOrder,
            });
        }
    }
    initializeCalendarComponent() {
        if (this.platformService.isMobileDevice) {
            this.travelOption = this.data.travelOption;
            this.calendarConf = this.data.fieldConf;
            this.search = this.data.searchData;
            this.defaultValue = this.data.defaultValue;
            this.calendarData = this.data.calendarData;
            this.content = this.data.fieldConf.content;
            this.selectedServices = this.data.selectedServices;
            this.isModalEditMode = this.data.isModalEditMode;
        }
        if (this.listenerId === undefined) {
            this.listenerId = this.listenersService.registerListener([_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_LANG, _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_CAL_REFRESH], this.setStaticValues);
        }
        this.initLangDates();
        this.isMobile = this.platformService.isMobileDevice;
        this.fromDate = null;
        this.toDate = null;
        this.hoverDate = null;
        this.mins = '00';
        this.hours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
        this.toMins = '00';
        this.toHours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
        this.time1Text = this.calendarConf.time1Text;
        this.time2Text = this.calendarConf.time2Text;
        this.showCalendar = false;
        this.noOfNights = 0;
        this.showNights = this.calendarConf.showNights; // show number of nights on date range
        let initModel;
        if (this.calendarData) {
            this.calModel = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_3__.ToolsService.deepCopy(this.calendarData);
        }
        else {
            this.calModel = {
                fromDate: this.fromDate,
                toDate: this.toDate,
                showCalendar: this.showCalendar,
            };
        }
        this.disableRoundTrip = this.calModel.disableRoundTrip;
        this.setDateRange(this.calendarConf, this.search, true);
        if (this.defaultValue) {
            initModel = this.defaultValue;
        }
        else {
            initModel = this.calModel;
        }
        if (!this.twoDates && initModel.toDate) {
            initModel.toDate = null;
            initModel.toTime = '';
        }
        this.setMonths();
        this.initDateIns(initModel);
        this.calStyle = {};
        this.dateIns = {};
        this.childDateNgModel = '';
        this.show2Month = true;
        this.assignDefaultValue();
        setTimeout(() => {
            if (!this.isMobile || !this.fromDate || this.fromDate === '')
                return;
            let scrollEl = document.getElementById(this.fromDate.getMonth() + this.fromDate.getFullYear());
            if (scrollEl)
                scrollEl.scrollIntoView();
        });
    }
    setStaticValues(subj) {
        switch (subj) {
            case _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_LANG:
                this.initLangDates();
                break;
            case _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_CAL_REFRESH: // on travel options change
                this.initializeCalendarComponent();
                break;
            default:
                console.log('received unhandled listener subject:' + subj);
        }
    }
    getMonthArr(year, month) {
        var monthFirstDay = new Date(year, month, 1);
        var lastDay = new Date(year, month + 1, 0);
        var monthsArr = [];
        for (var d = 0; d < this.datesService.getDay(monthFirstDay); d++) {
            monthsArr.push({
                id: 'D' + d,
                text: '',
            });
        }
        for (var i = 1; i <= lastDay.getDate(); i++) {
            monthsArr.push({
                id: i,
                text: i,
                isLast: i === lastDay.getDate(),
                disable: false,
            });
        }
        var noOfWeeks = parseInt((monthsArr.length / 7).toString());
        var _rem = monthsArr.length % 7;
        if (_rem > 0) {
            noOfWeeks = noOfWeeks + 1;
        }
        var months = [];
        for (var s = 0; s < noOfWeeks; s++) {
            var sliceArr = monthsArr.slice(s * 7, s * 7 + 7);
            months.push(sliceArr);
        }
        return months;
    }
    setMonths() {
        const today = new Date();
        const fromDate = this.minDate ? this.minDate : today;
        const toDate = this.maxDate
            ? this.maxDate
            : new Date(today.getFullYear(), today.getMonth() + 12, today.getDate());
        this.monthsArr = [];
        let monthLimit = _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_4__.CalendarUtilsService.monthDiff(fromDate, toDate) > 0
            ? _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_4__.CalendarUtilsService.monthDiff(fromDate, toDate) + 1
            : 1;
        /* Date needs to be always 'one' otherwise if current date is 30 then when we add one month to jan
        it'll become march 02 since there is only 28 days in feb in normal years */
        let frDate = new Date(fromDate.getFullYear(), fromDate.getMonth(), 1);
        for (var i = 0; i < monthLimit; i++) {
            frDate.setMonth(frDate.getMonth() + (i === 0 ? 0 : 1));
            var monthObj = _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_4__.CalendarUtilsService.getMonthAndYear(frDate.getMonth(), frDate.getFullYear());
            this.monthsArr.push({
                idx: i,
                monthObj,
                month: monthObj.monthNumber,
                monthTxt: this.datesService.getMonth(monthObj.monthNumber, false),
                year: monthObj.year,
                monthDays: this.datesService.getMonthArrayForCalendar(monthObj.year, monthObj.monthNumber),
            });
        }
    }
    initDateIns(dateIns) {
        this.calModel.showCalendar = dateIns.showCalendar; //Change
        this.noOfNights = 0;
        if (dateIns.fromDate) {
            var fromDate = _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_5__.DatesService.getNewDate(dateIns.fromDate);
            if (fromDate) {
                if (dateIns.fromTime) {
                    let res = dateIns.fromTime.split(':');
                    this.hours = res[0];
                    this.mins = res[1];
                }
                else {
                    this.hours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
                    this.mins = '00';
                }
                this.isPickUpDisable = false;
                this.fromDate = fromDate;
                this.calModel.fromDate = fromDate;
                for (var i = 0; i < this.monthsArr.length; i++) {
                    this.monthsArr[i].monthDays.forEach((dd) => {
                        dd.forEach((d) => {
                            if (!d.text)
                                return;
                            let _d = new Date(this.monthsArr[i].year, this.monthsArr[i].month, d.text);
                            if (_d.getTime() === fromDate.getTime())
                                this.fromCal = i === 12 ? 11 : i;
                        });
                    });
                }
                if (this.calendarConf.showNights) {
                    this.noOfNights = 1;
                }
            }
            var toDate = null;
            if ((this.calendarConf.dateRange || this.twoDates) && dateIns.toDate)
                toDate = _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_5__.DatesService.getNewDate(dateIns.toDate);
            if (toDate) {
                if (dateIns.toTime) {
                    let res = dateIns.toTime.split(':');
                    this.toHours = res[0];
                    this.toMins = res[1];
                }
                else {
                    this.toHours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
                    this.toMins = '00';
                }
                this.isDropOfDisable = false;
                this.calModel.toDate = toDate;
                this.toDate = new Date(toDate.getFullYear(), toDate.getMonth(), parseInt(toDate.getDate().toString()));
                this.assignNoOfNights(fromDate, toDate, false);
            }
            if ((this.calendarConf.dateRange || this.twoDates) && !this.toDate && this.calendarConf.maxDays) {
                this.disableDaysOnSelection(true);
            }
        }
    }
    assignDefaultValue() {
        if (this.calendarConf.calStyle && this.platformService.isMobileDevice) {
            this.calStyle = JSON.parse(this.calendarConf.calStyle);
        }
        if (this.calendarConf.showNights) {
            this.showNights = this.calendarConf.showNights;
        }
        if (this.calModel && !this.calModel.fromDate) {
            this.setMonths();
            return;
        }
        this.initDateIns(this.calModel);
    }
    dateDiff(fromdate, toDate, datepart) {
        datepart = datepart.toLowerCase();
        const fromD = new Date(fromdate.valueOf());
        const toD = new Date(toDate.valueOf());
        if (datepart === 'h') {
            fromD.setHours(this.hours, this.mins);
            toD.setHours(this.toHours, this.toMins);
        }
        const diff = toD.valueOf() - fromD.valueOf();
        // if we want number of days but have less than 24h return 1 if we are not on
        // same day, 0 otherwise
        if (datepart === 'd' && diff < TimeUintMap['d']) {
            return fromD.getDay() !== toD.getDay() ? 1 : 0;
        }
        return Math.floor(diff / TimeUintMap[datepart]);
    }
    assignNoOfNights(fromDate, toDate, checkToDateAvail) {
        if (checkToDateAvail && this.toDate)
            return;
        if (!fromDate || !toDate) {
            this.noOfNights = 0;
            return;
        }
        let dateDifference = this.dateDiff(fromDate, toDate, TimeUnit.d);
        if (this.content === _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_RENTAL_TYPE || this.content === _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_TRANSFER_TYPE) {
            dateDifference = this.dateDiff(fromDate, toDate, TimeUnit.h); //calculating the number of hours for the car rental search service
            this.noOfNights = Math.ceil(dateDifference / 24);
            return;
        }
        if (dateDifference >= 0) {
            this.noOfNights = dateDifference;
            if (this.noOfNights === 0 && this.showNights) {
                this.noOfNights = -1; //if same day is chosen then 1 day to be displayed.
            }
        }
    }
    onKeyUp(e) {
        if (e.keyCode !== 13)
            return;
        this.doneBtn();
    }
    eventHandlerFunc(e) {
        var _a;
        if (e.target && e.target.id === this.calendarId)
            return;
        // no close on input field of calendar
        if (e.target &&
            e.target.attributes['no-calendar-close'] &&
            ((_a = e.target.attributes.calId) === null || _a === void 0 ? void 0 : _a.nodeValue) === this.calendarId)
            return;
        // get calendar to close
        let doc = document.getElementById(this.calendarId);
        if (!doc)
            return;
        if (e.target.id !== 'cal-clear' && doc.contains(e.target)) {
            return;
        }
        if (e.target.parentNode.id === 'trip-check-box' ||
            e.target.id === 'trip-check-box' ||
            (!this.isMobile && e.target.id === 'cal-clear') ||
            e.target.classList.contains('previous-nxt-btn') ||
            e.target.classList.contains('day-number-text') ||
            e.target.classList.contains('t-day') ||
            e.target.parentNode.classList.contains('previous-nxt-btn')) {
            return;
        }
        this.hideCalDropdown.emit();
        if (!this.isInvalid() &&
            e.target.nodeName !== 'INPUT' &&
            !this.isMobile &&
            !_core_utils_tools_service__WEBPACK_IMPORTED_MODULE_3__.ToolsService.hasSomeParentTheClass(e.target, 'dropdown-toggle')) {
            this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_FOCUS_NEXT, {
                id: 'tabIdx' + this.calendarConf.tabOrder,
            });
        }
    }
}
TrazlerCalendarComponent.ɵfac = function TrazlerCalendarComponent_Factory(t) { return new (t || TrazlerCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_7__.SearchDataService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_5__.DatesService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_8__.ListenersService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_9__.PlatformService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_10__.SettingsService)); };
TrazlerCalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: TrazlerCalendarComponent, selectors: [["tz-trazler-calendar"]], hostBindings: function TrazlerCalendarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵlistener"]("keyup", function TrazlerCalendarComponent_keyup_HostBindingHandler($event) { return ctx.onKeyUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveDocument"])("click", function TrazlerCalendarComponent_click_HostBindingHandler($event) { return ctx.eventHandlerFunc($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵresolveDocument"]);
    } }, inputs: { isMobile: "isMobile", calendarId: "calendarId", calendarConf: "calendarConf", search: "search", defaultValue: "defaultValue", travelOption: "travelOption", content: "content", formDisplayStrAttribute: "formDisplayStrAttribute", calendarData: "calendarData", selectedServices: "selectedServices" }, outputs: { hideCalDropdown: "hideCalDropdown", clear: "clear", apply: "apply" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵNgOnChangesFeature"]], decls: 6, vars: 6, consts: [[1, "trazler-generic-calendar", 3, "hidden"], [3, "ngSwitch"], [3, "monthsArr", "weekHeads", "search", "defaultValue", "calendarData", "travelOption", "calendarConf", "calType", "isMobile", "apply", "clear", "closeCalendar", 4, "ngSwitchCase"], [3, "monthsArr", "weekHeads", "search", "defaultValue", "calendarData", "travelOption", "calendarConf", "isMobile", "isModalEditMode", "selectedServices", "apply", "clear", "closeCalendar", 4, "ngSwitchCase"], [4, "ngIf"], [3, "monthsArr", "weekHeads", "search", "defaultValue", "calendarData", "travelOption", "calendarConf", "calType", "isMobile", "apply", "clear", "closeCalendar"], [3, "monthsArr", "weekHeads", "search", "defaultValue", "calendarData", "travelOption", "calendarConf", "isMobile", "isModalEditMode", "selectedServices", "apply", "clear", "closeCalendar"], [3, "calendarConf", "defaultValue", "calendarType", "travelOption", "search"]], template: function TrazlerCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerStart"](1, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](2, TrazlerCalendarComponent_tz_trazler_transfer_calendar_2_Template, 1, 9, "tz-trazler-transfer-calendar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](3, TrazlerCalendarComponent_tz_trazler_transfer_calendar_3_Template, 1, 9, "tz-trazler-transfer-calendar", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](4, TrazlerCalendarComponent_tz_trazler_trip_dates_calendar_4_Template, 1, 10, "tz-trazler-trip-dates-calendar", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵtemplate"](5, TrazlerCalendarComponent_div_5_Template, 2, 5, "div", 4);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("hidden", ctx.platformService.isMobileDevice && ctx.content !== ctx.calTypes.CAL_TRIP_TYPE);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitch", ctx.content);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", ctx.calTypes.CAL_TRANSFER_TYPE);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", ctx.calTypes.CAL_RENTAL_TYPE);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngSwitchCase", ctx.calTypes.CAL_TRIP_TYPE);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("ngIf", ctx.platformService.isMobileDevice && (ctx.content === ctx.calTypes.CAL_TRANSFER_TYPE || ctx.content === ctx.calTypes.CAL_RENTAL_TYPE));
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0cmF6bGVyLWNhbGVuZGFyLmNvbXBvbmVudC5zY3NzIn0= */"] });


/***/ }),

/***/ 3727:
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/modules/search/trazler-calendar/components/trazler-transfer-calendar/trazler-transfer-calendar.component.ts ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrazlerTransferCalendarComponent": () => (/* binding */ TrazlerTransferCalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/trip */ 16699);
/* harmony import */ var _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/call-types.const */ 37005);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trazler-calendar/trazler-calendar.component */ 38201);
/* harmony import */ var _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/tools-service */ 67457);
/* harmony import */ var _base_trazler_calendar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../base-trazler-calendar */ 64093);
/* harmony import */ var _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/search/utils/calendar.utils */ 51664);
/* harmony import */ var _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/modules/search/utils/dates.service */ 77251);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);












const _c0 = function (a0) { return { "trip-checked": a0 }; };
function TrazlerTransferCalendarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r7.changeTravelOption(ctx_r7.tripType == "oneWay" ? "roundTrip" : "oneWay"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 30)(2, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](5, _c0, ctx_r0.tripType == "oneWay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r0.tripType == "oneWay" ? "check_box" : "check_box_outline_blank", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 3, "GENERAL.One_way"));
} }
function TrazlerTransferCalendarComponent_div_3_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 45);
} }
function TrazlerTransferCalendarComponent_div_3_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 45);
} }
function TrazlerTransferCalendarComponent_div_3_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weekHead_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", weekHead_r16, " ");
} }
const _c1 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8) { return { "no-border": a0, "t-selected-date": a1, disableBtnBorder: a2, "day-disable": a3, "hover-cls": a4, "t-selected-date--from-date": a5, "t-selected-date--to-date": a6, "t-day--today": a7, "t-day--oneWay": a8 }; };
function TrazlerTransferCalendarComponent_div_3_tr_16_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "td", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mouseover", function TrazlerTransferCalendarComponent_div_3_tr_16_td_1_Template_td_mouseover_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22); const day_r19 = restoredCtx.$implicit; const monthObj_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r20.hoverOnDate(monthObj_r9.idx, day_r19.text); })("click", function TrazlerTransferCalendarComponent_div_3_tr_16_td_1_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r22); const day_r19 = restoredCtx.$implicit; const monthObj_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r23.selectDate(monthObj_r9.idx, day_r19.text, false, day_r19.disable); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const day_r19 = ctx.$implicit;
    const monthObj_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2).$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunctionV"](2, _c1, [!day_r19.text, ctx_r18.fromDate && ((tmp_0_0 = ctx_r18.formDate(monthObj_r9.idx, day_r19.text)) == null ? null : tmp_0_0.toString()) == ((tmp_0_0 = ctx_r18.formAndGetDateIns(ctx_r18.fromDate)) == null ? null : tmp_0_0.toString()) || ctx_r18.toDate && ((tmp_0_0 = ctx_r18.formDate(monthObj_r9.idx, day_r19.text)) == null ? null : tmp_0_0.toString()) == ((tmp_0_0 = ctx_r18.formAndGetDateIns(ctx_r18.toDate)) == null ? null : tmp_0_0.toString()), !ctx_r18.isHoverValidDate, ctx_r18.todayComparison(monthObj_r9.year, monthObj_r9.month, day_r19.text) || day_r19.disable || ctx_r18.getDateComparisonFromVal(monthObj_r9.year, monthObj_r9.month, day_r19.text, "minDate") || ctx_r18.getDateComparisonFromVal(monthObj_r9.year, monthObj_r9.month, day_r19.text, "maxDate"), ctx_r18.isHoveredClass(monthObj_r9, day_r19), ctx_r18.fromDate && ((tmp_0_0 = ctx_r18.formDate(monthObj_r9.idx, day_r19.text)) == null ? null : tmp_0_0.toString()) == ctx_r18.formAndGetDateIns(ctx_r18.fromDate).toString(), ctx_r18.toDate && ((tmp_0_0 = ctx_r18.formDate(monthObj_r9.idx, day_r19.text)) == null ? null : tmp_0_0.toString()) == ctx_r18.formAndGetDateIns(ctx_r18.toDate).toString(), ctx_r18.todayDate.getFullYear() === monthObj_r9.year && ctx_r18.todayDate.getMonth() === monthObj_r9.month && ctx_r18.todayDate.getDate() === day_r19.text, ctx_r18.isOneWay]));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", day_r19.text, " ");
} }
function TrazlerTransferCalendarComponent_div_3_tr_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TrazlerTransferCalendarComponent_div_3_tr_16_td_1_Template, 3, 12, "td", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const monthDaysArr_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", monthDaysArr_r17);
} }
const _c2 = function (a0, a1) { return { "last-container": a0, "mt-0": a1 }; };
const _c3 = function (a0) { return { "previous-nxt-btn-hover": a0 }; };
const _c4 = function (a0) { return { "previous-nxt-btn-icon-disable": a0 }; };
function TrazlerTransferCalendarComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_3_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r26.moveToNextMonth(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, TrazlerTransferCalendarComponent_div_3_div_5_Template, 1, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, TrazlerTransferCalendarComponent_div_3_div_8_Template, 1, 0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 34)(10, "button", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_3_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r27); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r28.moveToNextMonth(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "img", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, TrazlerTransferCalendarComponent_div_3_div_13_Template, 2, 1, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div")(15, "table", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, TrazlerTransferCalendarComponent_div_3_tr_16_Template, 2, 1, "tr", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const monthObj_r9 = ctx.$implicit;
    const isLast_r10 = ctx.last;
    const isFirst_r11 = ctx.first;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("id", monthObj_r9.month + monthObj_r9.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](15, _c2, !ctx_r1.isMobile && isLast_r10, isFirst_r11));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", isLast_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c3, ctx_r1.fromCal !== 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](20, _c4, ctx_r1.fromCal === 0 || ctx_r1.monthsArr.length === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", isLast_r10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("data-year", monthObj_r9.monthTxt + " " + monthObj_r9.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", monthObj_r9.monthTxt, " ", monthObj_r9.year, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", isFirst_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", isFirst_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](22, _c3, ctx_r1.fromCal + 2 !== ctx_r1.monthsArr.length && ctx_r1.fromCal + 2 < ctx_r1.limitCal));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](24, _c4, ctx_r1.fromCal + 2 === ctx_r1.monthsArr.length || ctx_r1.fromCal + 2 >= ctx_r1.limitCal || ctx_r1.monthsArr.length === 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r1.weekHeads);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", monthObj_r9.monthDays);
} }
const _c5 = function (a0, a1) { return { "one-round-way-active": a0, selected: a1 }; };
const _c6 = function (a0, a1, a2) { return { "one-round-way-active": a0, "disable-round-trip": a1, selected: a2 }; };
function TrazlerTransferCalendarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 50)(1, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_6_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30); const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r29.changeTravelOption("oneWay"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_6_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r30); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r31.changeTravelOption("roundTrip"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](8, _c5, ctx_r2.tripType == "oneWay", ctx_r2.tripType == "oneWay"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 4, "GENERAL.One_way"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction3"](11, _c6, ctx_r2.tripType == "roundTrip", ctx_r2.disableRoundTrip, ctx_r2.tripType == "roundTrip"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](6, 6, "GENERAL.Round_trip"), " ");
} }
function TrazlerTransferCalendarComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "div", 6);
} }
const _c7 = function (a0) { return { "displat-text-disable": a0 }; };
const _c8 = function (a0) { return { "disable-dec": a0 }; };
function TrazlerTransferCalendarComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 10)(5, "div", 11)(6, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_30_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r32.incrementDecrementHours(-1, "toHours"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "button", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_30_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r34.incrementDecrementHours(1, "toHours"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 11)(15, "button", 56);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_30_Template_button_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33); const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r35.incrementDecrementMinutes(0, "toMins"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 57);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "button", 58);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_30_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33); const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r36.incrementDecrementMinutes(1, "toMins"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](14, _c7, ctx_r4.isDropOfDisable));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](3, 12, ctx_r4.calendarConf.content === "rentalCal" ? "GENERAL.DROP_OFF_TIME" : "SEARCH.RETURN_PICK_UP_TIME"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](16, _c8, ctx_r4.disableToHH || ctx_r4.isDropOfDisable))("disabled", ctx_r4.disableToHH || ctx_r4.isDropOfDisable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r4.toHours, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](18, _c8, ctx_r4.disableToHHInc || ctx_r4.isDropOfDisable))("disabled", ctx_r4.disableToHHInc || ctx_r4.isDropOfDisable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](20, _c8, ctx_r4.disableToMM || ctx_r4.isDropOfDisable))("disabled", ctx_r4.disableToMM || ctx_r4.isDropOfDisable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r4.toMins, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](22, _c8, ctx_r4.disableToMMInc || ctx_r4.isDropOfDisable))("disabled", ctx_r4.disableToMMInc || ctx_r4.isDropOfDisable);
} }
function TrazlerTransferCalendarComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 59)(1, "div", 60)(2, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 62)(6, "div", 11)(7, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_32_Template_button_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r37.incrementDecrementHours(-1, "hours"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_32_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r39.incrementDecrementHours(1, "hours"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "div", 11)(16, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_32_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r40.incrementDecrementMinutes(0, "mins"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](17, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_32_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r41.incrementDecrementMinutes(1, "mins"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](21, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "div", 66)(23, "div", 61);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](25, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 62)(27, "div", 11)(28, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_32_Template_button_click_28_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r42.incrementDecrementHours(-1, "toHours"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](32, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_32_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r43.incrementDecrementHours(1, "toHours"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](33, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](35, ":");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 11)(37, "button", 63);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_32_Template_button_click_37_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r44.incrementDecrementMinutes(0, "toMins"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](39, "div", 64);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "button", 65);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_div_32_Template_button_click_41_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); const ctx_r45 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r45.incrementDecrementMinutes(1, "toMins"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](42, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](28, _c7, ctx_r5.isPickUpDisable));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](4, 24, "GENERAL.DEPART"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](30, _c8, ctx_r5.disableFromHH || ctx_r5.isPickUpDisable))("disabled", ctx_r5.disableFromHH || ctx_r5.isPickUpDisable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r5.hours, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](32, _c8, ctx_r5.disableFromHHInc || ctx_r5.isPickUpDisable))("disabled", ctx_r5.disableFromHHInc || ctx_r5.isPickUpDisable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](34, _c8, ctx_r5.disableFromMM || ctx_r5.isPickUpDisable))("disabled", ctx_r5.disableFromMM || ctx_r5.isPickUpDisable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r5.mins, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](36, _c8, ctx_r5.disableFromMMInc || ctx_r5.isPickUpDisable))("disabled", ctx_r5.disableFromMMInc || ctx_r5.isPickUpDisable);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](38, _c7, ctx_r5.isDropOfDisable || !ctx_r5.toDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](25, 26, "GENERAL.RETURN"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](40, _c8, ctx_r5.disableToHH || ctx_r5.isDropOfDisable || !ctx_r5.toDate))("disabled", ctx_r5.disableToHH || ctx_r5.isDropOfDisable || !ctx_r5.toDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r5.toHours, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](42, _c8, ctx_r5.disableToHHInc || ctx_r5.isDropOfDisable || !ctx_r5.toDate))("disabled", ctx_r5.disableToHHInc || ctx_r5.isDropOfDisable || !ctx_r5.toDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](44, _c8, ctx_r5.disableToMM || ctx_r5.isDropOfDisable || !ctx_r5.toDate))("disabled", ctx_r5.disableToMM || ctx_r5.isDropOfDisable || !ctx_r5.toDate);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx_r5.toMins, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](46, _c8, ctx_r5.disableToMMInc || ctx_r5.isDropOfDisable || !ctx_r5.toDate))("disabled", ctx_r5.disableToMMInc || ctx_r5.isDropOfDisable || !ctx_r5.toDate);
} }
function TrazlerTransferCalendarComponent_div_35_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r46 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", ctx_r46.noOfNights, " ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](2, 2, ctx_r46.noOfNights > 1 ? "GENERAL.DAYS" : "GENERAL.DAY"), " ");
} }
function TrazlerTransferCalendarComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 67)(1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, TrazlerTransferCalendarComponent_div_35_span_2_Template, 3, 4, "span", 68);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.fromDate && (ctx_r6.singlePicker || ctx_r6.toDate || ctx_r6.hoverDate || ctx_r6.noOfNights > 1));
} }
const _c9 = function (a0, a1) { return { "transfer-calendar-onemonth": a0, "align-calendar": a1 }; };
const _c10 = function (a0) { return { passive: a0 }; };
class TrazlerTransferCalendarComponent extends _base_trazler_calendar__WEBPACK_IMPORTED_MODULE_5__.BaseTrazlerCalendar {
    constructor(injector) {
        super(injector);
        this.isMobile = false;
        this.monthsArr = [];
        this.monthDaysArr = [];
        this.weekHeads = [];
        this.closeCalendar = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.calendarConf = {
            class: 'col-xl-4 col-md-4 order3',
            content: 'transferCal',
            dateRange: 'free',
            fieldRole: 2,
            editOrder: 3,
            mainOrder: 2,
            maxDays: 84,
            minDays: 0,
            placeholder: 'SEARCH.TRIP_DATES',
            showNights: false,
            showTripOption: true,
            tabOrder: 3,
            time: true,
        };
        this.travelOption = _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY;
        this.content = _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_TRANSFER_TYPE;
        this.formDisplayStrAttribute = true;
        this.calendarData = {};
        this.hideCalDropdown = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.apply = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.today = new Date();
        this.disableTime = false;
        this.allowTravelChange = true;
        this.isPickUpDisable = true;
        this.isDropOfDisable = true;
        this.fromCal = 0;
        this.showNights = false;
        this.calTypes = _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes;
    }
    get todayDate() {
        return new Date();
    }
    get isOneWay() {
        return this.tripType === 'oneWay' && this.calTypes.CAL_RENTAL_TYPE !== this.calType;
    }
    ngOnInit() {
        this.initializeCalendarComponent();
    }
    ngOnChanges(changes) {
        // this.initializeCalendarComponent();
    }
    ngOnDestroy() {
        if (this.listenerId) {
            this.listenersService.unregisterListener(this.listenerId);
        }
    }
    onCloseCalendar() {
        this.closeCalendar.emit();
    }
    todayComparison(year, m, day) {
        return _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.CalendarUtilsService.todayComparison(year, m, day);
    }
    moveToNextMonth(add) {
        const limitThreshold = this.content === _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_MEETING_TYPE ? 1 : 2;
        if ((this.fromCal === 0 && add === -1) ||
            ((this.fromCal + limitThreshold === this.monthsArr.length ||
                this.fromCal + limitThreshold >= this.limitCal) &&
                add === 1)) {
            return;
        }
        this.fromCal += add;
    }
    formAndGetDateIns(_date) {
        if (!_date) {
            return;
        }
        return _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_7__.DatesService.getDateNoTime(_date);
    }
    formDate(month_idx, day) {
        if (!day || !this.monthsArr.length) {
            return;
        }
        return _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_7__.DatesService.getDateNoTimeFrom(this.monthsArr[month_idx].year, this.monthsArr[month_idx].month, day.toString());
    }
    getDateComparisonFromVal(year, month, day, str) {
        if (!this[str]) {
            return;
        }
        if (!day) {
            return;
        }
        const formDateIns = new Date(year, month, day);
        if (!formDateIns) {
            return;
        }
        let minDate = null;
        if (this.minDate) {
            minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate());
        }
        let maxDate = null;
        if (this.maxDate) {
            maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate());
        }
        if (str === 'minDate' && minDate) {
            return formDateIns < minDate;
        }
        if (maxDate) {
            return formDateIns > maxDate;
        }
    }
    incrementDecrementHours(inc_dec, varStr) {
        let hrs = parseInt(this[varStr], 10);
        if (!hrs) {
            hrs = 0;
        }
        hrs = hrs + inc_dec;
        if (hrs < 0) {
            hrs = 23;
        }
        if (hrs > 23) {
            hrs = 0;
        }
        this[varStr] = hrs < 10 ? '0' + hrs : hrs;
        if (this.fromDate || this.toDate) {
            let isTo = false;
            let date = new Date(this.fromDate.getTime());
            if (varStr === 'toHours') {
                date = new Date(this.toDate.getTime());
                isTo = true;
            }
            if (date) {
                // _date.setHours(hrs);
                this.validateTimeSelection(date, isTo);
            }
        }
        if (!this.isInvalid()) {
            this.assignNoOfNights(this.fromDate, this.toDate, false);
            this.doneBtn(true);
        }
    }
    incrementDecrementMinutes(inc_dec, varStr) {
        let mins = parseInt(this[varStr], 10);
        if (!mins) {
            mins = 0;
        }
        mins = mins - 10;
        if (inc_dec === 1) {
            mins = mins + 20;
        }
        if (mins < 0) {
            mins = 50;
        }
        if (mins >= 59) {
            mins = 0;
        }
        this[varStr] = mins < 10 ? '0' + mins : mins;
        if (this.fromDate || this.toDate) {
            let isTo = false;
            let date = new Date(this.fromDate.getTime());
            if (varStr === 'toMins') {
                date = new Date(this.toDate.getTime());
                isTo = true;
            }
            if (date) {
                this.validateTimeSelection(date, isTo);
            }
        }
        if (!this.isInvalid()) {
            this.assignNoOfNights(this.fromDate, this.toDate, false);
            this.doneBtn(true);
        }
    }
    isInvalid() {
        let isInvalid = false;
        isInvalid =
            (this.singlePicker && !_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.CalendarUtilsService.isValidDate(this.fromDate)) ||
                (!this.singlePicker &&
                    (!_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.CalendarUtilsService.isValidDate(this.fromDate) || !_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.CalendarUtilsService.isValidDate(this.toDate))) ||
                this.validFromAndToDateTime() ||
                (this.singlePicker && this.isPickUpDisable) ||
                (!this.singlePicker && this.isDropOfDisable) ||
                this.disableTime;
        return isInvalid;
    }
    changeTravelOption(travelOption) {
        if (this.calendarConf.dateRange === _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_RANGE_FREE) {
            this.calModel.tripType = travelOption;
            this.search.transferCal.tripType = travelOption;
        }
        if (travelOption === _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY && this.search.transferCal.toDate) {
            this.toDate = null;
            this.noOfNights = 0;
            this.hoverDate = null;
            this.search.transferCal.toDate = null;
            this.search.transferCal.twoDates = false;
        }
        this.setDateRange(this.calendarConf, this.search);
        if (!this.isInvalid()) {
            this.doneBtn(true);
            this.enableDaysOnSelection(false);
        }
        else {
            this.disableDaysOnSelection(true);
        }
    }
    cancelBtn(noClear) {
        this.fromDate = null;
        this.toDate = null;
        this.hours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
        this.mins = '00';
        this.toHours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
        this.toMins = '00';
        this.isPickUpDisable = true;
        this.isDropOfDisable = true;
        this.calModel.fromDisplayStr = '';
        this.calModel.toDisplayStr = '';
        this.calModel.displayStr = '';
        this.calModel.appliedFromDate = '';
        this.calModel.appliedToDate = '';
        this.calModel.applied = false;
        this.noOfNights = 0;
        this.hoverDate = null;
        this.calModel.businessMeeting = false;
        this.calModel.preferBC = false;
        this.calModel.translator = false;
        this.enableDaysOnSelection(false);
        //this.rollBackCalendarState();
        if (!this.minDate && !this.maxDate) {
            this.setMonths();
        }
        if (this.minDate) {
            this.assignNoOfNights();
        }
        if (!noClear) {
            this.clear.emit();
        }
    }
    selectDate(month_idx, day, isBan, disable) {
        if (isBan || !day || disable || !this.monthsArr[month_idx]) {
            return;
        }
        const year = this.monthsArr[month_idx].year;
        const month = this.monthsArr[month_idx].month;
        const date = new Date(year, month, parseInt(day.toString(), 10));
        const nextYearDate = new Date(this.today.getFullYear() + 1, this.today.getMonth(), this.today.getDate());
        const newToday = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
        if (date < newToday || date > nextYearDate) {
            return;
        }
        let minDate = null;
        if (this.minDate) {
            minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate());
        }
        let minHours = this.hours !== undefined
            ? this.hours
            : this.calendarConf.defaultTime
                ? this.calendarConf.defaultTime
                : '09';
        let minMinutes = this.mins !== undefined ? this.mins : '00';
        if ((this.fromDate && this.toDate) || (this.fromDate && date > this.fromDate)) {
            this.disableFromHH = false;
            this.disableFromMM = false;
        }
        else if (this.fromDate && !this.toDate) {
            this.disableToHH = false;
            this.disableToMM = false;
        }
        this.disableTime = false;
        this.toMins = this.toMins !== undefined ? this.toMins : '00';
        this.toHours =
            this.toHours !== undefined
                ? this.toHours
                : this.calendarConf.defaultTime
                    ? this.calendarConf.defaultTime
                    : '09';
        const today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
        if (this.calendarConf.time && today.getTime() === date.getTime()) {
            this.minDateTime = today;
            let hmin = new Date().getHours();
            let mmin = new Date().getMinutes();
            const mmin_reminder = mmin % 10;
            if (mmin_reminder) {
                mmin = mmin - mmin_reminder;
                mmin = mmin + 10;
                if (mmin === 60) {
                    mmin = 0;
                    hmin = hmin + 1;
                }
            }
            //Check scope time is past than current time
            const scopeDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
            scopeDate.setHours(this.hours, this.mins);
            const currentDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
            currentDate.setHours(hmin, mmin);
            if (scopeDate.getTime() <= currentDate.getTime()) {
                minHours = hmin < 10 ? '0' + hmin.toString() : hmin.toString();
                minMinutes = mmin < 10 ? '0' + mmin.toString() : mmin.toString();
            }
            this.minDateTime.setHours(hmin, mmin);
            this.disableFromHH = true;
            this.disableFromMM = true;
            this.disableToHH = true;
            this.disableToMM = true;
        }
        let maxDate = null;
        if (this.maxDate) {
            maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate());
        }
        if (!this.twoDates) {
            this.hoverDate = null;
            if (minDate && minDate > date) {
                // alert('Meeting date should be within trip dates');
                return;
            }
            if (maxDate && maxDate < date) {
                return;
            }
            this.isPickUpDisable = false;
            this.fromDate = date;
            if (this.hours !== minHours || this.mins !== minMinutes) {
                this.hours = minHours;
                this.mins = minMinutes;
            }
            this.toDate = null;
            // if (this.calendarConf.showNights) {
            // this.showNights = true;
            // this.noOfNights = 1;
            // }
            this.assignNoOfNights(this.fromDate, this.toDate, false);
            if (!this.isInvalid()) {
                this.doneBtn(true);
            }
            return;
        }
        if ((this.fromDate && this.toDate) || (this.fromDate && date < this.fromDate)) {
            if (minDate && minDate > date) {
                return;
            }
            if (maxDate && maxDate < date) {
                return;
            }
            this.isDropOfDisable = true;
            this.toDate = null;
            this.hoverDate = null;
            this.fromDate = date;
            if (this.hours !== minHours || this.mins !== minMinutes) {
                this.hours = minHours;
                this.mins = minMinutes;
                this.toHours = minHours;
                this.toMins = minMinutes;
            }
            this.assignNoOfNights(this.fromDate, this.toDate, false);
            if (this.fromDate && !this.toDate && this.calendarConf.maxDays) {
                this.disableDaysOnSelection(true);
            }
            return;
        }
        if (this.fromDate && date >= this.fromDate) {
            if (this.twoDates) {
                if (maxDate && maxDate < date) {
                    return;
                }
                this.isDropOfDisable = false;
                if (this.calendarConf.maxDays) {
                    let dateDifferenceFromDate = this.dateDiff(this.fromDate, date, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.d);
                    if (this.showNights) {
                        dateDifferenceFromDate--;
                    }
                    if (dateDifferenceFromDate >= this.calendarConf.maxDays) {
                        setTimeout(() => {
                            this.assignNoOfNights();
                        }, 3000);
                        return;
                    }
                }
                const fromDate = new Date(this.fromDate.getFullYear(), this.fromDate.getMonth(), this.fromDate.getDate());
                const dateDifference = this.dateDiff(fromDate, date, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.d);
                if (dateDifference < this.calendarConf.minDays) {
                    return;
                }
                //set 30mins to dropOff time from pickup time if current date is choosed
                if (dateDifference <= 0) {
                    const drop_hour = parseInt(this.hours, 10) + 1;
                    const pick_min = parseInt(this.mins, 10);
                    let mins = pick_min + 30;
                    if (mins >= 60) {
                        mins = mins - 60;
                        this.toHours = drop_hour;
                    }
                    if (this.hours > this.toHours) {
                        this.toHours = this.hours;
                    }
                    this.toMins = mins < 10 ? '0' + mins : mins;
                }
                this.toDate = date;
                // if (this.calendarConf.showNights) {
                // this.showNights = true;
                this.assignNoOfNights(this.fromDate, this.toDate, false);
                // }
                this.calModel.updateData = true;
            }
            if (this.calendarConf.maxDays) {
                this.disableDaysOnSelection(false);
            }
            if (this.calendarConf.minDays === 0 && !this.toDate) {
                this.disableDaysOnSelection(true);
            }
            if (!this.isInvalid()) {
                this.doneBtn(true);
            }
            return;
        }
        if (minDate && minDate > date) {
            return;
        }
        if (maxDate && maxDate < date) {
            return;
        }
        this.isPickUpDisable = false;
        this.fromDate = date;
        if (this.hours !== minHours || this.mins !== minMinutes) {
            this.hours = minHours;
            this.mins = minMinutes;
            this.toHours = minHours;
            this.toMins = minMinutes;
        }
        if (this.fromDate && !this.toDate && this.calendarConf.maxDays) {
            this.disableDaysOnSelection(true);
        }
        this.assignNoOfNights(this.fromDate, this.toDate, false);
    }
    hoverOnDate(month_idx, day) {
        this.isHoverValidDate = !!day;
        if (!this.twoDates) {
            this.hoverDate = this.fromDate;
            return;
        }
        if (!this.fromDate || !this.monthsArr[month_idx]) {
            return;
        }
        const year = this.monthsArr[month_idx].year;
        const month = this.monthsArr[month_idx].month;
        const date = new Date(year, month, parseInt(day.toString(), 10));
        this.hoverDate = null;
        const nextYearDate = new Date(this.today.getFullYear() + 1, this.today.getMonth(), this.today.getDate());
        if (date > nextYearDate) {
            return true;
        }
        if (this.fromDate && date > this.fromDate) {
            if (this.calendarConf.maxDays) {
                let dateDifference = this.dateDiff(this.fromDate, date, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.d);
                if (this.showNights) {
                    dateDifference--;
                }
                if (dateDifference >= this.calendarConf.maxDays) {
                    return;
                }
            }
            if (this.maxDate) {
                const maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate());
                if (maxDate < date) {
                    return;
                }
            }
        }
        if (_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.CalendarUtilsService.isValidDate(date)) {
            this.hoverDate = date;
        }
        this.assignNoOfNights(this.fromDate, this.hoverDate, true);
    }
    isHoveredClass(monthObj, day) {
        const hoveredDate = this.formDate(monthObj.idx, day.text);
        const selectedDateIsBiggerThanFromDate = hoveredDate
            ? hoveredDate > this.formAndGetDateIns(this.fromDate)
            : false;
        const hoveredDateExistsAndSmallerTanToDate = hoveredDate
            ? hoveredDate < this.formAndGetDateIns(this.toDate)
            : false;
        const hoveredDateSmallerThanToDate = hoveredDateExistsAndSmallerTanToDate ||
            (!this.toDate && hoveredDate ? hoveredDate <= this.formAndGetDateIns(this.hoverDate) : false);
        return selectedDateIsBiggerThanFromDate && hoveredDateSmallerThanToDate;
    }
    validateTimeSelection(selectedDate, isTo) {
        if (this.calendarConf.time !== true || selectedDate === null) {
            return;
        }
        if (isTo) {
            this.disableToHH = false;
            this.disableToMM = false;
            this.disableToHHInc = false;
            this.disableToMMInc = false;
        }
        else {
            this.disableFromHH = false;
            this.disableFromMM = false;
            this.disableFromHHInc = false;
            this.disableFromMMInc = false;
        }
        this.disableTime = false;
        const fromDate = new Date(this.fromDate.getTime());
        const f_date = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
        fromDate.setHours(this.hours);
        fromDate.setMinutes(this.mins);
        if (this.toDate) {
            const toDate = new Date(this.toDate.getTime());
            const t_date = new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate());
            toDate.setHours(this.toHours);
            toDate.setMinutes(this.toMins);
            const dateDifference = this.dateDiff(f_date, t_date, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.d);
            if (dateDifference <= 0) {
                const minutesDifference = this.dateDiff(fromDate, toDate, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.m);
                this.disableTime = minutesDifference < 30;
            }
        }
        const today = new Date();
        const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const s = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
        const newToday = new Date(t.getTime());
        newToday.setHours(today.getHours());
        let mm = today.getMinutes(); // mins are incremented by 10
        //mm = parseInt(mm);
        const mmr = mm % 10;
        if (mmr) {
            mm = mm - mmr + 10;
        }
        newToday.setMinutes(mm);
        if (t.getTime() !== s.getTime()) {
            return;
        }
        if (isTo) {
            selectedDate.setHours(this.toHours);
            selectedDate.setMinutes(this.toMins);
        }
        else {
            selectedDate.setHours(this.hours);
            selectedDate.setMinutes(this.mins);
        }
        // Disable Dec Hours
        if (newToday.getHours() >= selectedDate.getHours() ||
            (newToday.getHours() + 1 === selectedDate.getHours() && newToday.getMinutes() > selectedDate.getMinutes())) {
            if (!isTo) {
                this.disableFromHH = true;
            }
            if (isTo) {
                this.disableToHH = true;
            }
        }
        // Disable Inc Hours
        if (newToday.getHours() > 0 && selectedDate.getHours() === 23) {
            if (!isTo) {
                this.disableFromHHInc = true;
            }
            if (isTo) {
                this.disableToHHInc = true;
            }
        }
        // Disable Dec Minutes
        if (newToday.getHours() === selectedDate.getHours() && newToday.getMinutes() >= selectedDate.getMinutes()) {
            if (!isTo) {
                this.disableFromMM = true;
            }
            if (isTo) {
                this.disableToMM = true;
            }
        }
        // Disable Inc Hours
        if (newToday.getHours() === selectedDate.getHours() &&
            newToday.getMinutes() > 0 &&
            selectedDate.getMinutes() === 50) {
            if (!isTo) {
                this.disableFromMMInc = true;
            }
            if (isTo) {
                this.disableToMMInc = true;
            }
        }
    }
    updateTripConfig(tripConfig) {
        if (!tripConfig || tripConfig.content !== 'tripCal') {
            return;
        }
        this.calendarConf = tripConfig;
        setTimeout(() => {
            this.initializeCalendarComponent();
        }, 200);
    }
    // set date range correctly when linked to travel option (this.calendarConf.twoDates === null)
    setDateRange(conf, search, isInit) {
        if (this.calendarConf.dateRange === _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_RANGE_FREE) {
            this.allowTravelChange = true; // use can set oneWay/roundTrip
            this.calTravelOption = this.calModel.tripType ? this.calModel.tripType : _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ROUND_TRIP;
        }
        else {
            this.allowTravelChange = false; // use can set oneWay/roundTrip
            this.calTravelOption = this.travelOption;
        }
        if (conf.linked) {
            for (const dep in conf.linked) {
                if (search[conf.linked[dep]]) {
                    switch (dep) {
                        case 'fromDate':
                            // case cal is open before the one it depends on
                            if (search[conf.linked[dep]].fromDate) {
                                this.minDate = new Date(search[conf.linked[dep]].fromDate);
                            }
                            break;
                        case 'toDate':
                            // case cal is open before the one it depends on
                            if (search[conf.linked[dep]].toDate) {
                                this.maxDate = new Date(search[conf.linked[dep]].toDate);
                            }
                            break;
                    }
                }
            }
        }
        if (this.calModel.resultSet && isInit) {
            this.calTravelOption = this.calModel.twoDates ? _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ROUND_TRIP : _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY;
        }
        this.tripType = this.calModel.disableRoundTrip ? _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY : this.calTravelOption;
        this.calTravelOption = this.tripType;
        this.twoDates = _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.CalendarUtilsService.isTwoDates(this.calendarConf.dateRange, this.calTravelOption);
        //TODO remove once new mode used (replace singlePicker var on html by !datRange)
        this.singlePicker = !this.twoDates;
    }
    validFromAndToDateTime() {
        let fromdate;
        let todate;
        if (_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.CalendarUtilsService.isValidDate(this.fromDate)) {
            fromdate = new Date(this.fromDate.getTime());
        }
        else {
            return false;
        }
        if (_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.CalendarUtilsService.isValidDate(this.toDate)) {
            todate = new Date(this.toDate.getTime());
        }
        else {
            return false;
        }
        fromdate === null || fromdate === void 0 ? void 0 : fromdate.setHours(parseInt(this.hours, 10), parseInt(this.mins, 10));
        if (todate) {
            todate.setHours(parseInt(this.toHours, 10), parseInt(this.toMins, 10));
        }
        if (this.calendarConf.time === 'true' && !this.twoDates) {
            return this.minDateTime && fromdate.getTime() < this.minDateTime.getTime();
        }
        if (this.twoDates && this.calendarConf.time === 'true') {
            return (fromdate.getTime() >= todate.getTime() ||
                (this.minDateTime && fromdate.getTime() < this.minDateTime.getTime()));
        }
        else {
            return false;
        }
    }
    enableDaysOnSelection(disable) {
        this.limitCal = this.monthsArr.length;
        for (const month of this.monthsArr) {
            month.monthDays.forEach((days) => {
                days.forEach((d) => {
                    d.disable = disable;
                });
            });
        }
    }
    disableDaysOnSelection(disable) {
        if (this.calTravelOption === _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY) {
            return;
        }
        if (!this.calendarConf.maxDays) {
            return;
        }
        if (!disable) {
            this.enableDaysOnSelection(disable);
            return;
        }
        let restrictDays = parseInt(this.calendarConf.maxDays, 10);
        if (!this.showNights) {
            restrictDays = restrictDays - 1;
        }
        const fromDate = new Date(this.fromDate.getTime());
        const addDays = fromDate.getDate() + restrictDays;
        const restrictDate = new Date(fromDate.getTime());
        restrictDate.setDate(addDays);
        this.limitCal = this.monthsArr.length;
        for (let i = 0; i < this.monthsArr.length; i++) {
            this.monthsArr[i].monthDays.forEach((dd) => {
                dd.forEach((day) => {
                    if (!day.text) {
                        return;
                    }
                    const d = new Date(this.monthsArr[i].year, this.monthsArr[i].month, day.text);
                    if (d > restrictDate) {
                        day.disable = true;
                        if (this.limitCal === this.monthsArr.length) {
                            this.limitCal = i + (day.text === 1 ? 0 : 1);
                        }
                    }
                });
            });
        }
    }
    doneBtn(keepOpen) {
        const res = {};
        if (!(this.fromDate instanceof Date && !isNaN(this.fromDate.getTime()))) {
            return;
        }
        if (this.twoDates && !(this.toDate instanceof Date)) {
            return;
        }
        let minDate = null;
        if (this.minDate) {
            minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate());
        }
        let maxDate = null;
        if (this.maxDate) {
            maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate());
        }
        const fromDate = new Date(this.fromDate.getFullYear(), this.fromDate.getMonth(), this.fromDate.getDate());
        let toDate;
        if (minDate && minDate > fromDate) {
            return;
        }
        if (maxDate && maxDate < fromDate) {
            return;
        }
        if (this.fromDate && this.fromDate instanceof Date) {
            res.fromDate = _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_7__.DatesService.getDateNoTime(this.fromDate);
            res.toDisplayStr = '';
        }
        if (this.toDate && this.toDate instanceof Date) {
            res.toDate = _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_7__.DatesService.getDateNoTime(this.toDate);
            toDate = new Date(this.toDate.getFullYear(), this.toDate.getMonth(), this.toDate.getDate());
        }
        else {
            res.toDate = null;
        }
        if (this.twoDates) {
            if (this.toHours) {
                res.toTime = this.toHours + ':' + this.toMins;
            }
            else {
                res.toTime = '00:00';
            }
        }
        else {
            res.toTime = null;
        }
        if (this.hours) {
            res.fromTime = this.hours + ':' + this.mins;
        }
        else {
            res.fromTime = '00:00';
        }
        if (this.allowTravelChange) {
            res.tripType = this.tripType;
        }
        res.twoDates = this.twoDates;
        if (this.formDisplayStrAttribute) {
            res.displayStr = this.datesService.formDoubleDate(fromDate, toDate);
        }
        else {
            res.displayStr = this.calModel.fromDisplayStr;
            if (this.calModel.toDisplayStr) {
                res.displayStr = res.fromDisplayStr + ' - ' + res.toDisplayStr;
            }
        }
        if (this.formDisplayStrAttribute && toDate && this.dateDiff(fromDate, toDate, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.d) === 0) {
            const fromMonth = this.datesService.getMonth(fromDate.getMonth(), true);
            res.fromDisplayStr = res.fromDisplayStr + ' ' + fromMonth + ', ' + fromDate.getFullYear();
            res.toDisplayStr = '';
        }
        this.apply.emit({ newDates: res, keepOpen });
        if (!keepOpen) {
            this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_FOCUS_NEXT, {
                id: 'tabIdx' + this.calendarConf.tabOrder,
            });
        }
    }
    initializeCalendarComponent() {
        if (this.listenerId === undefined) {
            this.listenerId = this.listenersService.registerListener([_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_LANG, _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_CAL_REFRESH], this.setStaticValues);
        }
        this.fromDate = null;
        this.toDate = null;
        this.hoverDate = null;
        this.mins = '00';
        this.hours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
        this.toMins = '00';
        this.toHours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
        this.time1Text = this.calendarConf.time1Text;
        this.time2Text = this.calendarConf.time2Text;
        this.showCalendar = false;
        this.noOfNights = 0;
        this.showNights = this.calendarConf.showNights; // show number of nights on date range
        let initModel;
        if (this.calendarData) {
            this.calModel = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_4__.ToolsService.deepCopy(this.calendarData);
        }
        else {
            this.calModel = {
                fromDate: this.fromDate,
                toDate: this.toDate,
                showCalendar: this.showCalendar,
            };
        }
        this.disableRoundTrip = this.calModel.disableRoundTrip;
        this.setDateRange(this.calendarConf, this.search, true);
        if (this.defaultValue) {
            initModel = this.defaultValue;
        }
        else {
            initModel = this.calModel;
        }
        if (!this.twoDates && initModel.toDate) {
            initModel.toDate = null;
            initModel.toTime = '';
        }
        this.setMonths();
        this.initDateIns(initModel);
        this.calStyle = {};
        this.dateIns = {};
        this.childDateNgModel = '';
        this.show2Month = true;
        this.assignDefaultValue();
        setTimeout(() => {
            if (!this.isMobile || !this.fromDate || this.fromDate === '') {
                return;
            }
            const scrollEl = document.getElementById(this.fromDate.getMonth() + this.fromDate.getFullYear());
            if (scrollEl) {
                scrollEl.scrollIntoView();
            }
        });
    }
    setStaticValues(subj) {
        switch (subj) {
            case _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_CAL_REFRESH: // on travel options change
                this.initializeCalendarComponent();
                break;
            default:
                console.log('received unhandled listener subject:' + subj);
        }
    }
    setMonths() {
        const today = new Date();
        const fromDate = this.minDate ? this.minDate : today;
        const toDate = this.maxDate
            ? this.maxDate
            : new Date(today.getFullYear(), today.getMonth() + 12, today.getDate());
        this.monthsArr = [];
        const monthLimit = _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.CalendarUtilsService.monthDiff(fromDate, toDate) > 0
            ? _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.CalendarUtilsService.monthDiff(fromDate, toDate) + 1
            : 1;
        /* Date needs to be always 'one' otherwise if current date is 30 then when we add one month to jan
        it'll become march 02 since there is only 28 days in feb in normal years */
        const frDate = new Date(fromDate.getFullYear(), fromDate.getMonth(), 1);
        for (let i = 0; i < monthLimit; i++) {
            frDate.setMonth(frDate.getMonth() + (i === 0 ? 0 : 1));
            const monthObj = _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_6__.CalendarUtilsService.getMonthAndYear(frDate.getMonth(), frDate.getFullYear());
            this.monthsArr.push({
                idx: i,
                monthObj,
                month: monthObj.monthNumber,
                monthTxt: this.datesService.getMonth(monthObj.monthNumber, false),
                year: monthObj.year,
                monthDays: this.datesService.getMonthArrayForCalendar(monthObj.year, monthObj.monthNumber),
            });
        }
    }
    initDateIns(dateIns) {
        this.calModel.showCalendar = dateIns.showCalendar; //Change
        this.noOfNights = 0;
        if (dateIns.fromDate) {
            const fromDate = _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_7__.DatesService.getNewDate(dateIns.fromDate);
            if (fromDate) {
                if (dateIns.fromTime) {
                    const res = dateIns.fromTime.split(':');
                    this.hours = res[0];
                    this.mins = res[1];
                }
                else {
                    this.hours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
                    this.mins = '00';
                }
                this.isPickUpDisable = false;
                this.fromDate = fromDate;
                this.calModel.fromDate = fromDate;
                for (let i = 0; i < this.monthsArr.length; i++) {
                    this.monthsArr[i].monthDays.forEach((dd) => {
                        dd.forEach((day) => {
                            if (!day.text) {
                                return;
                            }
                            const d = new Date(this.monthsArr[i].year, this.monthsArr[i].month, day.text);
                            if (d.getTime() === fromDate.getTime()) {
                                this.fromCal = i === 12 ? 11 : i;
                            }
                        });
                    });
                }
                if (this.calendarConf.showNights) {
                    this.noOfNights = 1;
                }
            }
            let toDate = null;
            if ((this.calendarConf.dateRange || this.twoDates) && dateIns.toDate) {
                toDate = _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_7__.DatesService.getNewDate(dateIns.toDate);
            }
            if (toDate) {
                if (dateIns.toTime) {
                    const res = dateIns.toTime.split(':');
                    this.toHours = res[0];
                    this.toMins = res[1];
                }
                else {
                    this.toHours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
                    this.toMins = '00';
                }
                this.isDropOfDisable = false;
                this.calModel.toDate = toDate;
                this.toDate = new Date(toDate.getFullYear(), toDate.getMonth(), parseInt(toDate.getDate().toString(), 10));
                this.assignNoOfNights(fromDate, toDate, false);
            }
            if ((this.calendarConf.dateRange || this.twoDates) && !this.toDate && this.calendarConf.maxDays) {
                this.disableDaysOnSelection(true);
            }
        }
    }
    assignDefaultValue() {
        if (this.calendarConf.calStyle && this.platformService.isMobileDevice) {
            this.calStyle = JSON.parse(this.calendarConf.calStyle);
        }
        if (this.calendarConf.showNights) {
            this.showNights = this.calendarConf.showNights;
        }
        if (this.calModel && !this.calModel.fromDate) {
            this.setMonths();
            return;
        }
        this.initDateIns(this.calModel);
    }
    dateDiff(fromdate, toDate, datepart) {
        datepart = datepart.toLowerCase();
        const fromD = new Date(fromdate.getTime());
        const toD = new Date(toDate.getTime());
        if (datepart === 'h') {
            fromD.setHours(this.hours, this.mins);
            toD.setHours(this.toHours, this.toMins);
        }
        const diff = toD - fromD;
        // if we want number of days but have less than 24h return 1 if we are not on
        // same day, 0 otherwise
        if (datepart === 'd' && diff < _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUintMap.d) {
            return fromD.getDay() !== toD.getDay() ? 1 : 0;
        }
        return Math.floor(diff / _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUintMap[datepart]);
    }
    assignNoOfNights(fromDate, toDate, checkToDateAvail) {
        if (checkToDateAvail && this.toDate) {
            return;
        }
        if (!fromDate || !toDate) {
            this.noOfNights = 0;
            return;
        }
        let dateDifference = this.dateDiff(fromDate, toDate, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.d);
        if (this.content === _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_RENTAL_TYPE || this.content === _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_TRANSFER_TYPE) {
            dateDifference = this.dateDiff(fromDate, toDate, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.h);
            //calculating the number of hours for the car rental search service
            this.noOfNights = Math.ceil(dateDifference / 24);
            return;
        }
        if (dateDifference >= 0) {
            this.noOfNights = dateDifference;
            if (this.noOfNights === 0 && this.showNights) {
                this.noOfNights = -1; //if same day is chosen then 1 day to be displayed.
            }
        }
    }
}
TrazlerTransferCalendarComponent.ɵfac = function TrazlerTransferCalendarComponent_Factory(t) { return new (t || TrazlerTransferCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.Injector)); };
TrazlerTransferCalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: TrazlerTransferCalendarComponent, selectors: [["tz-trazler-transfer-calendar"]], inputs: { isMobile: "isMobile", calType: "calType", monthsArr: "monthsArr", monthDaysArr: "monthDaysArr", weekHeads: "weekHeads", calendarConf: "calendarConf", search: "search", defaultValue: "defaultValue", travelOption: "travelOption", content: "content", formDisplayStrAttribute: "formDisplayStrAttribute", calendarData: "calendarData" }, outputs: { closeCalendar: "closeCalendar", hideCalDropdown: "hideCalDropdown", clear: "clear", apply: "apply" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 45, vars: 54, consts: [["ng-style", "calStyle", 1, "transfer-calendar", "notranslate", "trazler-calendar-container", 3, "ngClass"], [1, "transfer-calendar-row", "calendar-row", "flex"], ["class", "trip-selector-container", "style", "margin-left: -1px; z-index: 1", 3, "click", 4, "ngIf"], ["class", "transfer-calendar-flex calender-month-container", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], [1, "calendar-additional-info", "mobile-hidden"], ["class", "flex trip-type-toggle-container", 4, "ngIf"], [1, "pick-up-time-text-block"], ["class", "pick-up-time-text-block", 4, "ngIf"], [1, "meeting-hours-cont", "flex", "flex-column"], [1, "pick-drop-up-time-txt", "pick-up-time-text-block", 3, "ngClass"], [1, "flex"], [1, "meeting-hour-div", "flex"], ["data-test", "calendar-depart-hour-minus", 1, "meeting-inc-dec-btn", "meeting-dec-btn", 3, "ngClass", "disabled", "click"], ["src", "/assets/icons/web/img/icons/calendar-minus-icon.svg", 1, "material-icons", "meeting-dec-btn-icon"], ["data-test", "depart-time-hour", 1, "meeting-hr-time-txt"], ["data-test", "calendar-depart-hour-plus", 1, "meeting-inc-dec-btn", "meeting-inc-btn", 3, "ngClass", "disabled", "click"], ["src", "/assets/icons/web/img/icons/calendar-plus-icon.svg", 1, "material-icons", "meeting-inc-btn-icon"], [1, "meeting-colon-txt"], ["data-test", "calendar-depart-minute-minus", 1, "meeting-inc-dec-btn", "meeting-dec-btn", 3, "ngClass", "disabled", "click"], ["data-test", "depart-time-mins", 1, "meeting-hr-time-txt"], ["data-test", "calendar-depart-minute-plus", 1, "meeting-inc-dec-btn", "meeting-inc-btn", 3, "ngClass", "disabled", "click"], ["class", "meeting-hours-cont flex flex-column", 4, "ngIf"], [1, "bottom-cal-footer", "transfer-calendar-footer", "calendar-footer", 3, "hidden"], ["class", "mobile-hours-cont mobile-only desktop-hide", 4, "ngIf"], [1, "footer-row", "space-between", 3, "hidden"], ["class", "nights flex align-center mobile-hidden", 4, "ngIf"], [1, "calender-action-btns", "flex", "flex-row"], ["data-test", "car-calendar-clear-btn", "id", "cal-clear", 1, "tz-btn", "clear-btn", "calendar-button", "btn", "tz-btn-secondary", 3, "ngClass", "click"], ["data-test", "car-calendar-apply-btn", 1, "tz-btn", "apply-transfer-btn", "calendar-button", "calendar-button", "tz-btn-primary", 3, "ngClass", "disabled", "click"], [1, "trip-selector-container", 2, "margin-left", "-1px", "z-index", "1", 3, "click"], [1, "trip-check-box", 2, "padding", "1.25rem 0"], [1, "material-icons", 3, "ngClass"], [1, "transfer-calendar-flex", "calender-month-container", 3, "id", "ngClass"], [1, "calendar-mobile-top", "flex", "ion-text-center"], [1, "mobile-hidden", 3, "hidden"], ["data-test", "calendar-last-month-button", 1, "previous-nxt-btn", 3, "ngClass", "click"], ["src", "/assets/icons/web/icons/calendar_left_back-primary.svg", 1, "material-icons", "notranslate", "previous-nxt-btn-icon", "previous-icon", 3, "ngClass"], ["class", "month-txt-empty-block mobile-hidden", 4, "ngIf"], ["data-test", "calendar-top-center", 1, "month-txt", "flex", "justify-center", "align-center"], ["data-test", "calendar-next-month-button", 1, "previous-nxt-btn", 3, "ngClass", "click"], ["src", "/assets/icons/web/icons/calendar_right_back-primary.svg", 1, "material-icons", "notranslate", "previous-nxt-btn-icon", "next-icon", 3, "ngClass"], [1, "week-ends", "flex"], ["class", "week-header flex align-center justify-center", 4, "ngFor", "ngForOf"], ["data-test", "calendar-border-table", 1, "border-table-calendar"], [4, "ngFor", "ngForOf"], [1, "month-txt-empty-block", "mobile-hidden"], [1, "week-header", "flex", "align-center", "justify-center"], ["role", "button", "class", "t-day", 3, "ngClass", "mouseover", "click", 4, "ngFor", "ngForOf"], ["role", "button", 1, "t-day", 3, "ngClass", "mouseover", "click"], [1, "day-number-text"], [1, "flex", "trip-type-toggle-container"], ["data-test", "calendar-one-way-btn", 1, "one-round-way-btn", "one-way-btn-b-rad", "select-btn", 3, "ngClass", "click"], [1, "one-round-way-btn", "round-way-btn-b-rad", "select-btn", 3, "ngClass", "click"], ["data-test", "calendar-return-hour-minus", 1, "meeting-inc-dec-btn", "meeting-dec-btn", 3, "ngClass", "disabled", "click"], ["data-test", "return-time-hour", 1, "meeting-hr-time-txt"], ["data-test", "calendar-return-hour-plus", 1, "meeting-inc-dec-btn", "meeting-inc-btn", 3, "ngClass", "disabled", "click"], ["data-test", "calendar-return-minute-minus", 1, "meeting-inc-dec-btn", "meeting-dec-btn", 3, "ngClass", "disabled", "click"], ["data-test", "return-time-mins", 1, "meeting-hr-time-txt"], ["data-test", "calendar-return-minute-plus", 1, "meeting-inc-dec-btn", "meeting-inc-btn", 3, "ngClass", "disabled", "click"], [1, "mobile-hours-cont", "mobile-only", "desktop-hide"], [1, "trip-hour-cont"], [1, "pick-drop-up-time-txt", 3, "ngClass"], [1, "meeting-hours-cont", "flex"], [1, "meeting-inc-dec-btn", "meeting-dec-btn", 3, "ngClass", "disabled", "click"], [1, "meeting-hr-time-txt"], [1, "meeting-inc-dec-btn", "meeting-inc-btn", 3, "ngClass", "disabled", "click"], ["ng-show", "twoDates", 1, "trip-hour-cont"], [1, "nights", "flex", "align-center", "mobile-hidden"], [4, "ngIf"]], template: function TrazlerTransferCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, TrazlerTransferCalendarComponent_div_2_Template, 7, 7, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, TrazlerTransferCalendarComponent_div_3_Template, 17, 26, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](4, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, TrazlerTransferCalendarComponent_div_6_Template, 7, 15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, TrazlerTransferCalendarComponent_div_8_Template, 1, 0, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 8)(10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 10)(14, "div", 11)(15, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_Template_button_click_15_listener() { return ctx.incrementDecrementHours(-1, "hours"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](16, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_Template_button_click_19_listener() { return ctx.incrementDecrementHours(1, "hours"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, ":");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](23, "div", 11)(24, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_Template_button_click_24_listener() { return ctx.incrementDecrementMinutes(0, "mins"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](25, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "button", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_Template_button_click_28_listener() { return ctx.incrementDecrementMinutes(1, "mins"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](29, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](30, TrazlerTransferCalendarComponent_div_30_Template, 21, 24, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](31, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, TrazlerTransferCalendarComponent_div_32_Template, 43, 48, "div", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 24)(34, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](35, TrazlerTransferCalendarComponent_div_35_Template, 3, 1, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "div", 26)(37, "div")(38, "button", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_Template_button_click_38_listener() { return ctx.cancelBtn(false); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](39);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](40, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div")(42, "button", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrazlerTransferCalendarComponent_Template_button_click_42_listener() { return ctx.onCloseCalendar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](44, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](37, _c9, ctx.monthsArr.length === 1, !ctx.isMobile && ctx.monthsArr.length === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isMobile && ctx.allowTravelChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind3"](4, 27, ctx.monthsArr, ctx.isMobile || ctx.monthsArr.length === 2 ? 0 : ctx.fromCal, ctx.fromCal + (!ctx.isMobile ? 2 : ctx.limitCal ? ctx.limitCal : ctx.monthsArr.length)));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.allowTravelChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.allowTravelChange);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](40, _c7, ctx.isPickUpDisable));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](12, 31, ctx.calendarConf.content === "rentalCal" ? "GENERAL.PICK_UP_TIME" : "SEARCH.PICK_UP_TIME"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](42, _c8, ctx.disableFromHH || ctx.isPickUpDisable))("disabled", ctx.disableFromHH || ctx.isPickUpDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.hours, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](44, _c8, ctx.disableFromHHInc || ctx.isPickUpDisable))("disabled", ctx.disableFromHHInc || ctx.isPickUpDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](46, _c8, ctx.disableFromMM || ctx.isPickUpDisable))("disabled", ctx.disableFromMM || ctx.isPickUpDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", ctx.mins, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](48, _c8, ctx.disableFromMMInc || ctx.isPickUpDisable))("disabled", ctx.disableFromMMInc || ctx.isPickUpDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.twoDates);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.isMobile && ctx.isPickUpDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isPickUpDisable);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("hidden", ctx.isMobile && ctx.isInvalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.noOfNights > 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](50, _c10, ctx.singlePicker && !ctx.fromDate || !ctx.singlePicker && !ctx.fromDate));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](40, 33, "GENERAL.CLEAR"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](52, _c10, ctx.singlePicker && !ctx.fromDate || !ctx.singlePicker && (!ctx.fromDate || !ctx.toDate) || ctx.disableTime))("disabled", ctx.isInvalid());
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind1"](44, 35, "SEARCH.APPLY"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_9__.SlicePipe], styles: [".trip-type-toggle-container[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  align-items: center;\n  flex-direction: row;\n}\n.trip-type-toggle-container[_ngcontent-%COMP%]   .select-btn[_ngcontent-%COMP%] {\n  height: 2rem;\n  flex: 0.5;\n  padding: unset;\n  box-sizing: border-box;\n  font-weight: var(--font-weight-semibold);\n  font-size: 0.75rem;\n  line-height: 1.25rem;\n  letter-spacing: 0.25px;\n}\n.trip-type-toggle-container[_ngcontent-%COMP%]   .select-btn[_ngcontent-%COMP%]:last-child {\n  border-radius: 0px 4px 4px 0px;\n  border-left-width: 0;\n}\n.trip-type-toggle-container[_ngcontent-%COMP%]   .select-btn[_ngcontent-%COMP%]:first-child {\n  border-radius: 4px 0px 0px 4px;\n  border-right-width: 0;\n}\n.trip-type-toggle-container[_ngcontent-%COMP%]   .select-btn[_ngcontent-%COMP%]:not(.selected) {\n  background: #FFFFFF;\n  border: 1px solid #E5E5E5;\n  color: var(--color-main-text);\n}\n.trip-type-toggle-container[_ngcontent-%COMP%]   .select-btn[_ngcontent-%COMP%]:not(.selected):hover {\n  color: var(--color-main-purple);\n}\n.pick-up-time-text-block[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  display: flex;\n  align-items: center;\n}\n.transfer-calendar[_ngcontent-%COMP%] {\n  width: 920px;\n}\n.transfer-calendar.transfer-calendar-onemonth[_ngcontent-%COMP%] {\n  width: 657px;\n}\n.transfer-calendar.transfer-calendar-onemonth[_ngcontent-%COMP%]   .transfer-calendar-row[_ngcontent-%COMP%]   .calender-month-container.last-container[_ngcontent-%COMP%] {\n  margin-left: 0;\n}\n.transfer-calendar[_ngcontent-%COMP%]   .transfer-calendar-row[_ngcontent-%COMP%]   .calendar-additional-info[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.transfer-calendar[_ngcontent-%COMP%]   .transfer-calendar-row[_ngcontent-%COMP%]   .calendar-additional-info[_ngcontent-%COMP%]   .meeting-hours-cont[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n}\n.transfer-calendar[_ngcontent-%COMP%]   .transfer-calendar-row[_ngcontent-%COMP%]   .calendar-additional-info[_ngcontent-%COMP%]   .meeting-hours-cont[_ngcontent-%COMP%]   .pick-drop-up-time-txt[_ngcontent-%COMP%] {\n  margin-bottom: 1px;\n  color: var(--color-main-text);\n}\n.transfer-calendar[_ngcontent-%COMP%]   .transfer-calendar-row[_ngcontent-%COMP%]   .calendar-additional-info[_ngcontent-%COMP%]   .meeting-hours-cont[_ngcontent-%COMP%]   .meeting-hour-div[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  height: 2.5rem;\n  width: 7.5rem;\n  display: flex;\n}\n.transfer-calendar[_ngcontent-%COMP%]   .transfer-calendar-row[_ngcontent-%COMP%]   .calendar-additional-info[_ngcontent-%COMP%]   .meeting-hours-cont[_ngcontent-%COMP%]   .meeting-hour-div[_ngcontent-%COMP%]   .meeting-inc-dec-btn[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  width: 2.5rem;\n  color: var(--color-mob-black);\n  font-size: 1rem;\n  line-height: 1.1875rem;\n  text-align: center;\n  border-radius: 0.25rem;\n  background-color: var(--color-light-footer-grey);\n  padding: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.transfer-calendar[_ngcontent-%COMP%]   .transfer-calendar-row[_ngcontent-%COMP%]   .calendar-additional-info[_ngcontent-%COMP%]   .meeting-hours-cont[_ngcontent-%COMP%]   .meeting-hour-div[_ngcontent-%COMP%]   .meeting-inc-dec-btn.disable-dec[_ngcontent-%COMP%] {\n  color: #d8d8d8;\n  pointer-events: none;\n}\n.transfer-calendar[_ngcontent-%COMP%]   .transfer-calendar-row[_ngcontent-%COMP%]   .calendar-additional-info[_ngcontent-%COMP%]   .meeting-hours-cont[_ngcontent-%COMP%]   .meeting-hour-div[_ngcontent-%COMP%]   .meeting-inc-dec-btn.disable-dec.meeting-dec-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  content: url(\"/assets/icons/web/img/icons/calendar-minus-icon-disabled.svg\");\n}\n.transfer-calendar[_ngcontent-%COMP%]   .transfer-calendar-row[_ngcontent-%COMP%]   .calendar-additional-info[_ngcontent-%COMP%]   .meeting-hours-cont[_ngcontent-%COMP%]   .meeting-hour-div[_ngcontent-%COMP%]   .meeting-inc-dec-btn.disable-dec.meeting-inc-btn[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  content: url(\"/assets/icons/web/img/icons/calendar-plus-icon-disabled.svg\");\n}\n.transfer-calendar[_ngcontent-%COMP%]   .transfer-calendar-row[_ngcontent-%COMP%]   .calendar-additional-info[_ngcontent-%COMP%]   .meeting-hours-cont[_ngcontent-%COMP%]   .meeting-hour-div[_ngcontent-%COMP%]   .meeting-hr-time-txt[_ngcontent-%COMP%] {\n  height: 2.5rem;\n  width: 2.5rem;\n  color: var(----color-main-text);\n  font-size: 1rem;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.transfer-calendar[_ngcontent-%COMP%]   .transfer-calendar-row[_ngcontent-%COMP%]   .calendar-additional-info[_ngcontent-%COMP%]   .meeting-hours-cont[_ngcontent-%COMP%]   .meeting-colon-txt[_ngcontent-%COMP%] {\n  width: 1.25rem;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXpsZXItdHJhbnNmZXItY2FsZW5kYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQ0k7RUFDSSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGNBQUE7RUFDQSxzQkFBQTtFQUVBLHdDQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHNCQUFBO0FBQVI7QUFFUTtFQUNJLDhCQUFBO0VBQ0Esb0JBQUE7QUFBWjtBQUdRO0VBQ0ksOEJBQUE7RUFDQSxxQkFBQTtBQURaO0FBSVE7RUFDSSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNkJBQUE7QUFGWjtBQUlZO0VBQ0ksK0JBQUE7QUFGaEI7QUFRQTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFMSjtBQVFBO0VBQ0ksWUFBQTtBQUxKO0FBT0k7RUFDSSxZQUFBO0FBTFI7QUFRWTtFQUNJLGNBQUE7QUFOaEI7QUFZUTtFQUNJLGlCQUFBO0FBVlo7QUFZWTtFQUNJLGtCQUFBO0FBVmhCO0FBWWdCO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtBQVZwQjtBQWFnQjtFQUNJLHNCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7RUFDQSxhQUFBO0FBWHBCO0FBYW9CO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnREFBQTtFQUNBLFVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQVh4QjtBQWF3QjtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBQVg1QjtBQWNnQztFQUNJLDRFQUFBO0FBWnBDO0FBaUJnQztFQUNJLDJFQUFBO0FBZnBDO0FBc0JvQjtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0EsK0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQXBCeEI7QUF3QmdCO0VBQ0ksY0FBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQXRCcEIiLCJmaWxlIjoidHJhemxlci10cmFuc2Zlci1jYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50cmlwLXR5cGUtdG9nZ2xlLWNvbnRhaW5lciB7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgLnNlbGVjdC1idG4ge1xuICAgICAgICBoZWlnaHQ6IDJyZW07XG4gICAgICAgIGZsZXg6IDAuNTtcbiAgICAgICAgcGFkZGluZzogdW5zZXQ7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXNlbWlib2xkKTtcbiAgICAgICAgZm9udC1zaXplOiAwLjc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMjVweDtcblxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4IDRweCA0cHggMHB4O1xuICAgICAgICAgICAgYm9yZGVyLWxlZnQtd2lkdGg6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweCAwcHggMHB4IDRweDtcbiAgICAgICAgICAgIGJvcmRlci1yaWdodC13aWR0aDogMFxuICAgICAgICB9XG5cbiAgICAgICAgJjpub3QoLnNlbGVjdGVkKSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xuICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI0U1RTVFNTtcbiAgICAgICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1tYWluLXRleHQpO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuXG4ucGljay11cC10aW1lLXRleHQtYmxvY2sge1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLnRyYW5zZmVyLWNhbGVuZGFyIHtcbiAgICB3aWR0aDogOTIwcHg7XG5cbiAgICAmLnRyYW5zZmVyLWNhbGVuZGFyLW9uZW1vbnRoIHtcbiAgICAgICAgd2lkdGg6IDY1N3B4O1xuXG4gICAgICAgIC50cmFuc2Zlci1jYWxlbmRhci1yb3cge1xuICAgICAgICAgICAgLmNhbGVuZGVyLW1vbnRoLWNvbnRhaW5lci5sYXN0LWNvbnRhaW5lciB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHJhbnNmZXItY2FsZW5kYXItcm93IHtcbiAgICAgICAgLmNhbGVuZGFyLWFkZGl0aW9uYWwtaW5mbyB7XG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcblxuICAgICAgICAgICAgLm1lZXRpbmctaG91cnMtY29udCB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMXB4O1xuXG4gICAgICAgICAgICAgICAgLnBpY2stZHJvcC11cC10aW1lLXR4dCB7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDFweDtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tdGV4dCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1lZXRpbmctaG91ci1kaXYge1xuICAgICAgICAgICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDcuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAgICAgICAgICAgICAubWVldGluZy1pbmMtZGVjLWJ0biB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyLjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbW9iLWJsYWNrKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE4NzVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tY29sb3ItbGlnaHQtZm9vdGVyLWdyZXkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICYuZGlzYWJsZS1kZWMge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjZDhkOGQ4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5tZWV0aW5nLWRlYy1idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pY29ucy93ZWIvaW1nL2ljb25zL2NhbGVuZGFyLW1pbnVzLWljb24tZGlzYWJsZWQuc3ZnXCIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJi5tZWV0aW5nLWluYy1idG4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbWcge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogdXJsKFwiL2Fzc2V0cy9pY29ucy93ZWIvaW1nL2ljb25zL2NhbGVuZGFyLXBsdXMtaWNvbi1kaXNhYmxlZC5zdmdcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIC5tZWV0aW5nLWhyLXRpbWUtdHh0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDIuNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS0tLWNvbG9yLW1haW4tdGV4dCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLm1lZXRpbmctY29sb24tdHh0IHtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 55901:
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/modules/search/trazler-calendar/components/trazler-trip-dates-calendar/trazler-trip-dates-calendar.component.ts ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrazlerTripDatesCalendarComponent": () => (/* binding */ TrazlerTripDatesCalendarComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/trip */ 16699);
/* harmony import */ var _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/call-types.const */ 37005);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trazler-calendar/trazler-calendar.component */ 38201);
/* harmony import */ var _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/tools-service */ 67457);
/* harmony import */ var _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/modules/search/utils/calendar.utils */ 51664);
/* harmony import */ var _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/search/utils/dates.service */ 77251);
/* harmony import */ var _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @core/constants/general-settings */ 12308);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/modules/core/listeners-service */ 96831);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/modules/core/scroll-service */ 90097);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @shared/pipes/tz-date.pipe */ 92456);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @ngx-translate/core */ 87514);




















function TrazlerTripDatesCalendarComponent_div_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weekHead_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", weekHead_r5, " ");
} }
function TrazlerTripDatesCalendarComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, TrazlerTripDatesCalendarComponent_div_2_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r0.weekHeads);
} }
function TrazlerTripDatesCalendarComponent_div_4_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 29);
} }
function TrazlerTripDatesCalendarComponent_div_4_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](0, "div", 29);
} }
function TrazlerTripDatesCalendarComponent_div_4_div_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const weekHead_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", weekHead_r14, " ");
} }
function TrazlerTripDatesCalendarComponent_div_4_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, TrazlerTripDatesCalendarComponent_div_4_div_12_div_1_Template, 2, 1, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", ctx_r11.weekHeads);
} }
const _c0 = function (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10) { return { "no-border": a0, "t-selected-date": a1, disableBtnBorder: a2, "day-disable": a3, "hover-cls": a4, "t-day-first": a5, "t-day-last": a6, "t-selected-date--from-date": a7, "t-selected-date--to-date": a8, "t-day--today": a9, "t-day--oneWay": a10 }; };
const _c1 = function (a0, a1) { return { "t-day-col-text-box-first-day": a0, "t-day-col-text-box-last-day": a1 }; };
function TrazlerTripDatesCalendarComponent_div_4_tr_15_td_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "td", 34, 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("mouseover", function TrazlerTripDatesCalendarComponent_div_4_tr_15_td_1_Template_td_mouseover_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25); const day_r19 = restoredCtx.$implicit; const monthObj_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit; const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r23.hoverOnDate(monthObj_r6.idx, day_r19.text); })("click", function TrazlerTripDatesCalendarComponent_div_4_tr_15_td_1_Template_td_click_0_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r25); const day_r19 = restoredCtx.$implicit; const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵreference"](1); const monthObj_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](2).$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); ctx_r26.selectDate(monthObj_r6.idx, day_r19.text, false, day_r19.disable); return ctx_r26.scrollSelectedElement(_r22); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](2, "div", 36)(3, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const day_r19 = ctx.$implicit;
    const first_r20 = ctx.first;
    const last_r21 = ctx.last;
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    const trFirst_r16 = ctx_r29.first;
    const trLast_r17 = ctx_r29.last;
    const monthObj_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]().$implicit;
    const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    let tmp_0_0;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunctionV"](3, _c0, [!day_r19.text, ctx_r18.fromDate && ((tmp_0_0 = ctx_r18.formDate(monthObj_r6.idx, day_r19.text)) == null ? null : tmp_0_0.toString()) == ctx_r18.formAndGetDateIns(ctx_r18.fromDate).toString() || ctx_r18.toDate && ((tmp_0_0 = ctx_r18.formDate(monthObj_r6.idx, day_r19.text)) == null ? null : tmp_0_0.toString()) == ctx_r18.formAndGetDateIns(ctx_r18.toDate).toString(), !ctx_r18.isHoverValidDate, ctx_r18.todayComparison(monthObj_r6.year, monthObj_r6.month, day_r19.text) || day_r19.disable, ctx_r18.isHoveredClass(monthObj_r6, day_r19), first_r20, last_r21, ctx_r18.fromDate && ((tmp_0_0 = ctx_r18.formDate(monthObj_r6.idx, day_r19.text)) == null ? null : tmp_0_0.toString()) == ctx_r18.formAndGetDateIns(ctx_r18.fromDate).toString(), ctx_r18.toDate && ((tmp_0_0 = ctx_r18.formDate(monthObj_r6.idx, day_r19.text)) == null ? null : tmp_0_0.toString()) == ctx_r18.formAndGetDateIns(ctx_r18.toDate).toString(), ctx_r18.todayDate.getFullYear() === monthObj_r6.year && ctx_r18.todayDate.getMonth() === monthObj_r6.month && ctx_r18.todayDate.getDate() === day_r19.text, ctx_r18.isOneWay]));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction2"](15, _c1, trFirst_r16 && day_r19.text === 1, trLast_r17 && last_r21 && day_r19.text));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", day_r19.text ? day_r19.text : "\u00A0", " ");
} }
function TrazlerTripDatesCalendarComponent_div_4_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](1, TrazlerTripDatesCalendarComponent_div_4_tr_15_td_1_Template, 5, 18, "td", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const monthDaysArr_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", monthDaysArr_r15);
} }
const _c2 = function (a0, a1) { return { "last-container": a0, "mt-0": a1 }; };
const _c3 = function (a0) { return { "previous-nxt-btn-hover": a0 }; };
const _c4 = function (a0) { return { "previous-nxt-btn-icon-disable": a0 }; };
function TrazlerTripDatesCalendarComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 17)(1, "div", 18)(2, "div", 19)(3, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TrazlerTripDatesCalendarComponent_div_4_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r30.moveToNextMonth(-1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](4, "img", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](5, TrazlerTripDatesCalendarComponent_div_4_div_5_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](8, TrazlerTripDatesCalendarComponent_div_4_div_8_Template, 1, 0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](9, "div", 19)(10, "button", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TrazlerTripDatesCalendarComponent_div_4_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r31); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r32.moveToNextMonth(1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelement"](11, "img", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](12, TrazlerTripDatesCalendarComponent_div_4_div_12_Template, 2, 1, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "div")(14, "table", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](15, TrazlerTripDatesCalendarComponent_div_4_tr_15_Template, 2, 1, "tr", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
} if (rf & 2) {
    const monthObj_r6 = ctx.$implicit;
    const isLast_r7 = ctx.last;
    const isFirst_r8 = ctx.first;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpropertyInterpolate"]("id", monthObj_r6.month + monthObj_r6.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction2"](15, _c2, !ctx_r1.isMobile && isLast_r7, isFirst_r8));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", isLast_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](18, _c3, ctx_r1.fromCal !== 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](20, _c4, ctx_r1.fromCal === 0));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", isLast_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵattribute"]("data-year", monthObj_r6.monthTxt + " " + monthObj_r6.year);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate2"](" ", monthObj_r6.monthTxt, " ", monthObj_r6.year, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", isFirst_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", isFirst_r8);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](22, _c3, ctx_r1.fromCal + 2 !== ctx_r1.monthsArr.length && ctx_r1.fromCal + 2 < ctx_r1.limitCal));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](24, _c4, ctx_r1.fromCal + 2 === ctx_r1.monthsArr.length || ctx_r1.fromCal + 2 >= ctx_r1.limitCal));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx_r1.isMobile);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", monthObj_r6.monthDays);
} }
function TrazlerTripDatesCalendarComponent_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", ctx_r2.selectedDate, " ");
} }
const _c5 = function (a0) { return { passive: a0 }; };
function TrazlerTripDatesCalendarComponent_button_22_Template(rf, ctx) { if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "button", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TrazlerTripDatesCalendarComponent_button_22_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵrestoreView"](_r34); const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"](); return ctx_r33.cancelBtn(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](2, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](4, _c5, ctx_r3.singlePicker && !ctx_r3.fromDate || !ctx_r3.singlePicker && !ctx_r3.fromDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](2, 2, "GENERAL.CLEAR"), " ");
} }
const _c6 = function (a0) { return { "trip-dates-calendar-row--selected": a0 }; };
const _c7 = function (a0) { return { "flight-train": a0 }; };
class TrazlerTripDatesCalendarComponent {
    constructor(searchDataService, datesService, listenersService, platformService, settingsService, modalService, scrollService, datePipe) {
        this.searchDataService = searchDataService;
        this.datesService = datesService;
        this.listenersService = listenersService;
        this.platformService = platformService;
        this.settingsService = settingsService;
        this.modalService = modalService;
        this.scrollService = scrollService;
        this.datePipe = datePipe;
        this.isMobile = false;
        this.monthsArr = [];
        this.monthDaysArr = [];
        this.weekHeads = [];
        this.selectedServices = _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_7__.GeneralSettings.defaultSelectedServices;
        this.closeCalendar = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.calendarConf = {
            class: 'col-xl-4 col-md-4 order3',
            content: 'tripCal',
            dateRange: true,
            fieldRole: 0,
            mainOrder: 3,
            maxDays: 28,
            minDays: 1,
            placeholder: 'SEARCH.TRIP_DATES',
            showNights: true,
            showTripOption: true,
            tabOrder: 3,
            time: false,
        };
        this.travelOption = _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY;
        this.content = _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_TRIP_TYPE;
        this.calendarData = {};
        this.formDisplayStrAttribute = true;
        this.hideCalDropdown = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.clear = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.apply = new _angular_core__WEBPACK_IMPORTED_MODULE_15__.EventEmitter();
        this.calTypes = _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes;
        this.today = new Date();
        this.disableTime = false;
        this.isPickUpDisable = true;
        this.isDropOfDisable = true;
        this.fromCal = 0;
        this.showNights = false;
        /* this.monthsTxt = this.settingsService.locales.DATETIME_FORMATS.SHORTMONTH;
         this.months = this.settingsService.locales.DATETIME_FORMATS.MONTH;*/
    }
    get todayDate() {
        return new Date();
    }
    get isOneWay() {
        return !this.selectedServices['accommodation'] && this.tripType === 'oneWay';
    }
    get selectedDate() {
        this.doneBtn(true);
        const calData = this.newDates;
        if (calData) {
            return this.datesService.getCalendarDateString(calData.fromDate, calData.toDate, calData.displayStr, this.calendarConf, calData.fromTime, calData.toTime, this.tripType);
        }
        return '';
    }
    ngOnInit() {
        this.initializeCalendarComponent();
    }
    ngOnChanges(changes) {
        // this.initializeCalendarComponent();
    }
    ngOnDestroy() {
        if (this.listenerId) {
            this.listenersService.unregisterListener(this.listenerId);
        }
    }
    onCloseCalendar() {
        if (this.platformService.isMobileDevice) {
            this.modalService.dismiss({ newDates: this.newDates });
        }
        else {
            this.closeCalendar.emit();
        }
    }
    todayComparison(year, m, day) {
        return _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.CalendarUtilsService.todayComparison(year, m, day);
    }
    moveToNextMonth(add) {
        const limitThreshold = this.content === _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_MEETING_TYPE ? 1 : 2;
        if ((this.fromCal === 0 && add === -1) ||
            ((this.fromCal + limitThreshold === this.monthsArr.length ||
                this.fromCal + limitThreshold >= this.limitCal) &&
                add === 1)) {
            return;
        }
        this.fromCal += add;
    }
    formAndGetDateIns(_date) {
        if (!_date) {
            return;
        }
        return _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_6__.DatesService.getDateNoTime(_date);
    }
    formDate(month_idx, day) {
        if (!day || !this.monthsArr.length) {
            return;
        }
        return _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_6__.DatesService.getDateNoTimeFrom(this.monthsArr[month_idx].year, this.monthsArr[month_idx].month, day.toString());
    }
    getDateComparisonFromVal(year, month, day, str) {
        if (!this[str]) {
            return;
        }
        if (!day) {
            return;
        }
        const formDateIns = new Date(year, month, day);
        if (!formDateIns) {
            return;
        }
        let minDate = null;
        if (this.minDate) {
            minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate());
        }
        let maxDate = null;
        if (this.maxDate) {
            maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate());
        }
        if (str === 'minDate' && minDate) {
            return formDateIns < minDate;
        }
        if (maxDate) {
            return formDateIns > maxDate;
        }
    }
    isInvalid() {
        let isInvalid = false;
        isInvalid =
            (this.singlePicker && !_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.CalendarUtilsService.isValidDate(this.fromDate)) ||
                (!this.singlePicker &&
                    (!_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.CalendarUtilsService.isValidDate(this.fromDate) || !_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.CalendarUtilsService.isValidDate(this.toDate))) ||
                this.validFromAndToDateTime() ||
                (this.singlePicker && this.isPickUpDisable) ||
                (!this.singlePicker && this.isDropOfDisable) ||
                this.disableTime;
        return isInvalid;
    }
    cancelBtn(noClear) {
        this.fromDate = null;
        this.toDate = null;
        this.hours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
        this.mins = '00';
        this.toHours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
        this.toMins = '00';
        this.isPickUpDisable = true;
        this.isDropOfDisable = true;
        this.calModel.fromDisplayStr = '';
        this.calModel.toDisplayStr = '';
        this.calModel.displayStr = '';
        this.calModel.appliedFromDate = '';
        this.calModel.appliedToDate = '';
        this.calModel.applied = false;
        this.noOfNights = 0;
        this.hoverDate = null;
        this.calModel.businessMeeting = false;
        this.calModel.preferBC = false;
        this.calModel.translator = false;
        this.enableDaysOnSelection(false);
        //this.rollBackCalendarState();
        if (!this.minDate && !this.maxDate) {
            this.setMonths();
        }
        if (this.minDate) {
            this.assignNoOfNights();
        }
        if (!noClear) {
            this.clear.emit();
        }
    }
    selectDate(month_idx, day, isBan, disable) {
        if (isBan || !day || disable || !this.monthsArr[month_idx]) {
            return;
        }
        const year = this.monthsArr[month_idx].year;
        const month = this.monthsArr[month_idx].month;
        const date = new Date(year, month, parseInt(day.toString(), 10));
        const nextYearDate = new Date(this.today.getFullYear() + 1, this.today.getMonth(), this.today.getDate());
        const newToday = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
        if (date < newToday || date > nextYearDate) {
            return;
        }
        let minDate = null;
        if (this.minDate) {
            minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate());
        }
        let minHours = this.hours !== undefined
            ? this.hours
            : this.calendarConf.defaultTime
                ? this.calendarConf.defaultTime
                : '09';
        let minMinutes = this.mins !== undefined ? this.mins : '00';
        if ((this.fromDate && this.toDate) || (this.fromDate && date < this.fromDate)) {
            this.disableFromHH = false;
            this.disableFromMM = false;
        }
        else if (this.fromDate && !this.toDate) {
            this.disableToHH = false;
            this.disableToMM = false;
        }
        this.disableTime = false;
        this.toMins = this.toMins !== undefined ? this.toMins : '00';
        this.toHours =
            this.toHours !== undefined
                ? this.toHours
                : this.calendarConf.defaultTime
                    ? this.calendarConf.defaultTime
                    : '09';
        const today = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
        if (this.calendarConf.time && today.getTime() === date.getTime()) {
            this.minDateTime = today;
            let hmin = new Date().getHours();
            let mmin = new Date().getMinutes();
            const mmin_reminder = mmin % 10;
            if (mmin_reminder) {
                mmin = mmin - mmin_reminder;
                mmin = mmin + 10;
                if (mmin === 60) {
                    mmin = 0;
                    hmin = hmin + 1;
                }
            }
            //Check scope time is past than current time
            const scopeDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
            scopeDate.setHours(this.hours, this.mins);
            const currentDate = new Date(this.today.getFullYear(), this.today.getMonth(), this.today.getDate());
            currentDate.setHours(hmin, mmin);
            if (scopeDate.getTime() <= currentDate.getTime()) {
                minHours = hmin < 10 ? '0' + hmin.toString() : hmin.toString();
                minMinutes = mmin < 10 ? '0' + mmin.toString() : mmin.toString();
            }
            this.minDateTime.setHours(hmin, mmin);
            this.disableFromHH = true;
            this.disableFromMM = true;
            this.disableToHH = true;
            this.disableToMM = true;
        }
        let maxDate = null;
        if (this.maxDate) {
            maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate());
        }
        if (!this.twoDates) {
            this.hoverDate = null;
            if (minDate && minDate > date) {
                // alert('Meeting date should be within trip dates');
                return;
            }
            if (maxDate && maxDate < date) {
                return;
            }
            this.isPickUpDisable = false;
            this.fromDate = date;
            if (this.hours !== minHours || this.mins !== minMinutes) {
                this.hours = minHours;
                this.mins = minMinutes;
            }
            this.toDate = null;
            // if (this.calendarConf.showNights) {
            // this.showNights = true;
            // this.noOfNights = 1;
            // }
            this.assignNoOfNights(this.fromDate, this.toDate, false);
            if (!this.isInvalid()) {
                this.doneBtn(true);
            }
            return;
        }
        if ((this.fromDate && this.toDate) || (this.fromDate && date < this.fromDate)) {
            if (minDate && minDate > date) {
                return;
            }
            if (maxDate && maxDate < date) {
                return;
            }
            this.isDropOfDisable = true;
            this.toDate = null;
            this.hoverDate = null;
            this.fromDate = date;
            if (this.hours !== minHours || this.mins !== minMinutes) {
                this.hours = minHours;
                this.mins = minMinutes;
                this.toHours = minHours;
                this.toMins = minMinutes;
            }
            this.assignNoOfNights(this.fromDate, this.toDate, false);
            if (this.fromDate && !this.toDate && this.calendarConf.maxDays) {
                this.disableDaysOnSelection(true);
            }
            return;
        }
        if (this.fromDate && date >= this.fromDate) {
            if (this.twoDates) {
                if (maxDate && maxDate < date) {
                    return;
                }
                this.isDropOfDisable = false;
                if (this.calendarConf.maxDays) {
                    let dateDifferenceFromDate = this.dateDiff(this.fromDate, date, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.d);
                    if (this.showNights) {
                        dateDifferenceFromDate--;
                    }
                    if (dateDifferenceFromDate >= this.calendarConf.maxDays) {
                        setTimeout(() => {
                            this.assignNoOfNights();
                        }, 3000);
                        return;
                    }
                }
                const fromDate = new Date(this.fromDate.getFullYear(), this.fromDate.getMonth(), this.fromDate.getDate());
                const dateDifference = this.dateDiff(fromDate, date, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.d);
                if (dateDifference < this.calendarConf.minDays) {
                    return;
                }
                //set 30mins to dropOff time from pickup time if current date is choosed
                if (dateDifference <= 0) {
                    const drop_hour = parseInt(this.hours, 10) + 1;
                    const pick_min = parseInt(this.mins, 10);
                    let mins = pick_min + 30;
                    if (mins >= 60) {
                        mins = mins - 60;
                        this.toHours = drop_hour;
                    }
                    if (this.hours > this.toHours) {
                        this.toHours = this.hours;
                    }
                    this.toMins = mins < 10 ? '0' + mins : mins;
                }
                this.toDate = date;
                // if (this.calendarConf.showNights) {
                // this.showNights = true;
                this.assignNoOfNights(this.fromDate, this.toDate, false);
                // }
                this.calModel.updateData = true;
            }
            if (this.calendarConf.maxDays) {
                this.disableDaysOnSelection(false);
            }
            if (this.calendarConf.minDays === 0 && !this.toDate) {
                this.disableDaysOnSelection(true);
            }
            if (!this.isInvalid()) {
                this.doneBtn(true);
            }
            return;
        }
        if (minDate && minDate > date) {
            return;
        }
        if (maxDate && maxDate < date) {
            return;
        }
        this.isPickUpDisable = false;
        this.fromDate = date;
        if (this.hours !== minHours || this.mins !== minMinutes) {
            this.hours = minHours;
            this.mins = minMinutes;
            this.toHours = minHours;
            this.toMins = minMinutes;
        }
        if (this.fromDate && !this.toDate && this.calendarConf.maxDays) {
            this.disableDaysOnSelection(true);
        }
        this.assignNoOfNights(this.fromDate, this.toDate, false);
    }
    scrollSelectedElement(el) {
        if (!this.platformService.isMobileDevice) {
            return;
        }
        requestAnimationFrame(() => {
            this.scrollService.scrollToVisibleArea(el, 'mobCalendarFooterBlock', {
                scrollTop: this.isModalEditMode ? 95 : 84,
            });
        });
    }
    hoverOnDate(month_idx, day) {
        this.isHoverValidDate = !!day;
        if (!this.twoDates) {
            this.hoverDate = this.fromDate;
            return;
        }
        if (!this.fromDate || !this.monthsArr[month_idx]) {
            return;
        }
        const year = this.monthsArr[month_idx].year;
        const month = this.monthsArr[month_idx].month;
        const date = new Date(year, month, parseInt(day.toString(), 10));
        this.hoverDate = null;
        const nextYearDate = new Date(this.today.getFullYear() + 1, this.today.getMonth(), this.today.getDate());
        if (date > nextYearDate) {
            return true;
        }
        if (this.fromDate && date > this.fromDate) {
            if (this.calendarConf.maxDays) {
                let dateDifference = this.dateDiff(this.fromDate, date, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.d);
                if (this.showNights) {
                    dateDifference--;
                }
                if (dateDifference >= this.calendarConf.maxDays) {
                    return;
                }
            }
            if (this.maxDate) {
                const maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate());
                if (maxDate < date) {
                    return;
                }
            }
        }
        if (_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.CalendarUtilsService.isValidDate(date)) {
            this.hoverDate = date;
        }
        this.assignNoOfNights(this.fromDate, this.hoverDate, true);
    }
    isHoveredClass(monthObj, day) {
        const hoveredDate = this.formDate(monthObj.idx, day.text);
        const selectedDateIsBiggerThanFromDate = hoveredDate
            ? hoveredDate > this.formAndGetDateIns(this.fromDate)
            : false;
        const hoveredDateExistsAndSmallerTanToDate = hoveredDate
            ? hoveredDate < this.formAndGetDateIns(this.toDate)
            : false;
        const hoveredDateSmallerThanToDate = hoveredDateExistsAndSmallerTanToDate ||
            (!this.toDate && hoveredDate ? hoveredDate <= this.formAndGetDateIns(this.hoverDate) : false);
        return selectedDateIsBiggerThanFromDate && hoveredDateSmallerThanToDate;
    }
    validateTimeSelection(selectedDate, isTo) {
        console.log(selectedDate === null);
        if (this.calendarConf.time !== true || selectedDate === null) {
            return;
        }
        if (isTo) {
            this.disableToHH = false;
            this.disableToMM = false;
            this.disableToHHInc = false;
            this.disableToMMInc = false;
        }
        else {
            this.disableFromHH = false;
            this.disableFromMM = false;
            this.disableFromHHInc = false;
            this.disableFromMMInc = false;
        }
        this.disableTime = false;
        const fromDate = new Date(this.fromDate.getTime());
        const f_date = new Date(fromDate.getFullYear(), fromDate.getMonth(), fromDate.getDate());
        fromDate.setHours(this.hours);
        fromDate.setMinutes(this.mins);
        if (this.toDate) {
            const toDate = new Date(this.toDate.getTime());
            const t_date = new Date(toDate.getFullYear(), toDate.getMonth(), toDate.getDate());
            toDate.setHours(this.toHours);
            toDate.setMinutes(this.toMins);
            const dateDifference = this.dateDiff(f_date, t_date, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.d);
            if (dateDifference <= 0) {
                const minutesDifference = this.dateDiff(f_date, t_date, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.m);
                this.disableTime = minutesDifference < 30;
            }
        }
        const today = new Date();
        const t = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        const s = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), selectedDate.getDate());
        const newToday = new Date(t.getTime());
        newToday.setHours(today.getHours());
        let mm = today.getMinutes(); // mins are incremented by 10
        //mm = parseInt(mm);
        const mmr = mm % 10;
        if (mmr) {
            mm = mm - mmr + 10;
        }
        newToday.setMinutes(mm);
        if (t.getTime() !== s.getTime()) {
            return;
        }
        if (isTo) {
            selectedDate.setHours(this.toHours);
            selectedDate.setMinutes(this.toMins);
        }
        else {
            selectedDate.setHours(this.hours);
            selectedDate.setMinutes(this.mins);
        }
        // Disable Dec Hours
        if (newToday.getHours() >= selectedDate.getHours() ||
            (newToday.getHours() + 1 === selectedDate.getHours() && newToday.getMinutes() > selectedDate.getMinutes())) {
            if (!isTo) {
                this.disableFromHH = true;
            }
            if (isTo) {
                this.disableToHH = true;
            }
        }
        // Disable Inc Hours
        if (newToday.getHours() > 0 && selectedDate.getHours() === 23) {
            if (!isTo) {
                this.disableFromHHInc = true;
            }
            if (isTo) {
                this.disableToHHInc = true;
            }
        }
        // Disable Dec Minutes
        if (newToday.getHours() === selectedDate.getHours() && newToday.getMinutes() >= selectedDate.getMinutes()) {
            if (!isTo) {
                this.disableFromMM = true;
            }
            if (isTo) {
                this.disableToMM = true;
            }
        }
        // Disable Inc Hours
        if (newToday.getHours() === selectedDate.getHours() &&
            newToday.getMinutes() > 0 &&
            selectedDate.getMinutes() === 50) {
            if (!isTo) {
                this.disableFromMMInc = true;
            }
            if (isTo) {
                this.disableToMMInc = true;
            }
        }
    }
    updateTripConfig(tripConfig) {
        if (!tripConfig || tripConfig.content !== 'tripCal') {
            return;
        }
        this.calendarConf = tripConfig;
        setTimeout(() => {
            this.initializeCalendarComponent();
        }, 200);
    }
    // set date range correctly when linked to travel option (this.calendarConf.twoDates === null)
    setDateRange(conf, search, isInit) {
        this.calTravelOption = this.travelOption;
        if (conf.linked) {
            for (const dep in conf.linked) {
                if (search[conf.linked[dep]]) {
                    switch (dep) {
                        case 'fromDate':
                            // case cal is open before the one it depends on
                            if (search[conf.linked[dep]].fromDate) {
                                this.minDate = new Date(search[conf.linked[dep]].fromDate);
                            }
                            break;
                        case 'toDate':
                            // case cal is open before the one it depends on
                            if (search[conf.linked[dep]].toDate) {
                                this.maxDate = new Date(search[conf.linked[dep]].toDate);
                            }
                            break;
                    }
                }
            }
        }
        if (this.calModel.resultSet && isInit) {
            this.calTravelOption = this.calModel.twoDates ? _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ROUND_TRIP : _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY;
        }
        this.tripType = this.calModel.disableRoundTrip ? _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY : this.calTravelOption;
        this.calTravelOption = this.tripType;
        this.twoDates = _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.CalendarUtilsService.isTwoDates(this.calendarConf.dateRange, this.calTravelOption);
        //TODO remove once new mode used (replace singlePicker var on html by !datRange)
        this.singlePicker = !this.twoDates;
    }
    validFromAndToDateTime() {
        let fromdate;
        let todate;
        if (_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.CalendarUtilsService.isValidDate(this.fromDate)) {
            fromdate = new Date(this.fromDate.getTime());
        }
        else {
            return false;
        }
        if (_services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.CalendarUtilsService.isValidDate(this.toDate)) {
            todate = new Date(this.toDate.getTime());
        }
        else {
            return false;
        }
        fromdate === null || fromdate === void 0 ? void 0 : fromdate.setHours(parseInt(this.hours, 10), parseInt(this.mins, 10));
        if (todate) {
            todate.setHours(parseInt(this.toHours, 10), parseInt(this.toMins, 10));
        }
        if (this.calendarConf.time === 'true' && !this.twoDates) {
            return this.minDateTime && fromdate.getTime() < this.minDateTime.getTime();
        }
        if (this.twoDates && this.calendarConf.time === 'true') {
            return (fromdate.getTime() >= todate.getTime() ||
                (this.minDateTime && fromdate.getTime() < this.minDateTime.getTime()));
        }
        else {
            return false;
        }
    }
    enableDaysOnSelection(disable) {
        this.limitCal = this.monthsArr.length;
        for (const month of this.monthsArr) {
            month.monthDays.forEach((days) => {
                days.forEach((d) => {
                    d.disable = disable;
                });
            });
        }
    }
    disableDaysOnSelection(disable) {
        // if (calTravelOption === Trip.ONE_WAY) return;
        if (!this.calendarConf.maxDays) {
            return;
        }
        if (!disable) {
            this.enableDaysOnSelection(disable);
            return;
        }
        let restrictDays = parseInt(this.calendarConf.maxDays, 10);
        if (!this.showNights) {
            restrictDays = restrictDays - 1;
        }
        const fromDate = new Date(this.fromDate.getTime());
        const addDays = fromDate.getDate() + restrictDays;
        const restrictDate = new Date(fromDate.getTime());
        restrictDate.setDate(addDays);
        this.limitCal = this.monthsArr.length;
        for (let i = 0; i < this.monthsArr.length; i++) {
            this.monthsArr[i].monthDays.forEach((dd) => {
                dd.forEach((day) => {
                    if (!day.text) {
                        return;
                    }
                    const d = new Date(this.monthsArr[i].year, this.monthsArr[i].month, day.text);
                    if (d > restrictDate) {
                        day.disable = true;
                        if (this.limitCal === this.monthsArr.length) {
                            this.limitCal = i + (day.text === 1 ? 0 : 1);
                        }
                    }
                });
            });
        }
    }
    doneBtn(keepOpen) {
        const res = {};
        if (!(this.fromDate instanceof Date && !isNaN(this.fromDate.getTime()))) {
            return;
        }
        if (this.twoDates && !(this.toDate instanceof Date)) {
            return;
        }
        let minDate = null;
        if (this.minDate) {
            minDate = new Date(this.minDate.getFullYear(), this.minDate.getMonth(), this.minDate.getDate());
        }
        let maxDate = null;
        if (this.maxDate) {
            maxDate = new Date(this.maxDate.getFullYear(), this.maxDate.getMonth(), this.maxDate.getDate());
        }
        const fromDate = new Date(this.fromDate.getFullYear(), this.fromDate.getMonth(), this.fromDate.getDate());
        let toDate;
        if (minDate && minDate > fromDate) {
            return;
        }
        if (maxDate && maxDate < fromDate) {
            return;
        }
        if (this.fromDate && this.fromDate instanceof Date) {
            res.fromDate = _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_6__.DatesService.getDateNoTime(this.fromDate);
            res.toDisplayStr = '';
        }
        if (this.toDate && this.toDate instanceof Date) {
            res.toDate = _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_6__.DatesService.getDateNoTime(this.toDate);
            toDate = new Date(this.toDate.getFullYear(), this.toDate.getMonth(), this.toDate.getDate());
        }
        else {
            res.toDate = null;
        }
        if (this.twoDates) {
            if (this.toHours) {
                res.toTime = this.toHours + ':' + this.toMins;
            }
            else {
                res.toTime = '00:00';
            }
        }
        else {
            res.toTime = null;
        }
        if (this.hours) {
            res.fromTime = this.hours + ':' + this.mins;
        }
        else {
            res.fromTime = '00:00';
        }
        res.twoDates = this.twoDates;
        if (this.formDisplayStrAttribute) {
            res.displayStr = this.datesService.formDoubleDate(fromDate, toDate);
        }
        else {
            res.displayStr = this.calModel.fromDisplayStr;
            if (this.calModel.toDisplayStr) {
                res.displayStr = res.fromDisplayStr + ' - ' + res.toDisplayStr;
            }
        }
        if (this.formDisplayStrAttribute && toDate && this.dateDiff(fromDate, toDate, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.d) === 0) {
            const fromMonth = this.datesService.getMonth(fromDate.getMonth(), true);
            res.fromDisplayStr = res.fromDisplayStr + ' ' + fromMonth + ', ' + fromDate.getFullYear();
            res.toDisplayStr = '';
        }
        this.newDates = res;
        this.apply.emit({ newDates: res, keepOpen });
        if (!keepOpen) {
            this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_FOCUS_NEXT, {
                id: 'tabIdx' + this.calendarConf.tabOrder,
            });
        }
    }
    initializeCalendarComponent() {
        if (this.listenerId === undefined) {
            this.listenerId = this.listenersService.registerListener([_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_LANG, _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_CAL_REFRESH], this.setStaticValues);
        }
        this.fromDate = null;
        this.toDate = null;
        this.hoverDate = null;
        this.mins = '00';
        this.hours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
        this.toMins = '00';
        this.toHours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
        this.showCalendar = false;
        this.noOfNights = 0;
        this.showNights = this.calendarConf.showNights; // show number of nights on date range
        let initModel;
        if (this.calendarData) {
            this.calModel = _core_utils_tools_service__WEBPACK_IMPORTED_MODULE_4__.ToolsService.deepCopy(this.calendarData);
        }
        else {
            this.calModel = {
                fromDate: this.fromDate,
                toDate: this.toDate,
                showCalendar: this.showCalendar,
            };
        }
        this.disableRoundTrip = this.calModel.disableRoundTrip;
        this.setDateRange(this.calendarConf, this.search, true);
        if (this.defaultValue) {
            initModel = this.defaultValue;
        }
        else {
            initModel = this.calModel;
        }
        if (!this.twoDates && initModel.toDate) {
            initModel.toDate = null;
            initModel.toTime = '';
        }
        this.setMonths();
        this.initDateIns(initModel);
        this.calStyle = {};
        this.dateIns = {};
        this.assignDefaultValue();
        setTimeout(() => {
            if (!this.isMobile || !this.fromDate || this.fromDate === '') {
                return;
            }
            const scrollEl = document.getElementById(this.fromDate.getMonth() + this.fromDate.getFullYear());
            if (scrollEl) {
                scrollEl.scrollIntoView();
            }
        });
    }
    setStaticValues(subj) {
        switch (subj) {
            case _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_CAL_REFRESH: // on travel options change
                this.initializeCalendarComponent();
                break;
            default:
                console.log('received unhandled listener subject:' + subj);
        }
    }
    setMonths() {
        const today = new Date();
        const fromDate = this.minDate ? this.minDate : today;
        const toDate = this.maxDate
            ? this.maxDate
            : new Date(today.getFullYear(), today.getMonth() + 12, today.getDate());
        this.monthsArr = [];
        const monthLimit = _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.CalendarUtilsService.monthDiff(fromDate, toDate) > 0
            ? _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.CalendarUtilsService.monthDiff(fromDate, toDate) + 1
            : 1;
        /* Date needs to be always 'one' otherwise if current date is 30 then when we add one month to jan
        it'll become march 02 since there is only 28 days in feb in normal years */
        const frDate = new Date(fromDate.getFullYear(), fromDate.getMonth(), 1);
        for (let i = 0; i < monthLimit; i++) {
            frDate.setMonth(frDate.getMonth() + (i === 0 ? 0 : 1));
            const monthObj = _services_modules_search_utils_calendar_utils__WEBPACK_IMPORTED_MODULE_5__.CalendarUtilsService.getMonthAndYear(frDate.getMonth(), frDate.getFullYear());
            this.monthsArr.push({
                idx: i,
                monthObj,
                month: monthObj.monthNumber,
                monthTxt: this.datesService.getMonth(monthObj.monthNumber, false),
                year: monthObj.year,
                monthDays: this.datesService.getMonthArrayForCalendar(monthObj.year, monthObj.monthNumber),
            });
        }
    }
    initDateIns(dateIns) {
        this.calModel.showCalendar = dateIns.showCalendar; //Change
        this.noOfNights = 0;
        if (dateIns.fromDate) {
            const fromDate = _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_6__.DatesService.getNewDate(dateIns.fromDate);
            if (fromDate) {
                if (dateIns.fromTime) {
                    const res = dateIns.fromTime.split(':');
                    this.hours = res[0];
                    this.mins = res[1];
                }
                else {
                    this.hours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
                    this.mins = '00';
                }
                this.isPickUpDisable = false;
                this.fromDate = fromDate;
                this.calModel.fromDate = fromDate;
                for (let i = 0; i < this.monthsArr.length; i++) {
                    this.monthsArr[i].monthDays.forEach((dd) => {
                        dd.forEach((day) => {
                            if (!day.text) {
                                return;
                            }
                            const d = new Date(this.monthsArr[i].year, this.monthsArr[i].month, day.text);
                            if (d.getTime() === fromDate.getTime()) {
                                this.fromCal = i === 12 ? 11 : i;
                            }
                        });
                    });
                }
                if (this.calendarConf.showNights) {
                    this.noOfNights = 1;
                }
            }
            let toDate = null;
            if ((this.calendarConf.dateRange || this.twoDates) && dateIns.toDate) {
                toDate = _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_6__.DatesService.getNewDate(dateIns.toDate);
            }
            if (toDate) {
                if (dateIns.toTime) {
                    const res = dateIns.toTime.split(':');
                    this.toHours = res[0];
                    this.toMins = res[1];
                }
                else {
                    this.toHours = this.calendarConf.defaultTime ? this.calendarConf.defaultTime : '09';
                    this.toMins = '00';
                }
                this.isDropOfDisable = false;
                this.calModel.toDate = toDate;
                this.toDate = new Date(toDate.getFullYear(), toDate.getMonth(), parseInt(toDate.getDate().toString(), 10));
                this.assignNoOfNights(fromDate, toDate, false);
            }
            if ((this.calendarConf.dateRange || this.twoDates) && !this.toDate && this.calendarConf.maxDays) {
                this.disableDaysOnSelection(true);
            }
        }
    }
    assignDefaultValue() {
        if (this.calendarConf.calStyle && this.platformService.isMobileDevice) {
            this.calStyle = JSON.parse(this.calendarConf.calStyle);
        }
        if (this.calendarConf.showNights) {
            this.showNights = this.calendarConf.showNights;
        }
        if (this.calModel && !this.calModel.fromDate) {
            this.setMonths();
            return;
        }
        this.initDateIns(this.calModel);
    }
    dateDiff(fromdate, toDate, datepart) {
        datepart = datepart.toLowerCase();
        const fromD = new Date(fromdate.getTime());
        const toD = new Date(toDate.getTime());
        if (datepart === 'h') {
            fromD.setHours(this.hours, this.mins);
            toD.setHours(this.toHours, this.toMins);
        }
        const diff = toD - fromD;
        // if we want number of days but have less than 24h return 1 if we are not on
        // same day, 0 otherwise
        if (datepart === 'd' && diff < _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUintMap.d) {
            return fromD.getDay() !== toD.getDay() ? 1 : 0;
        }
        return Math.floor(diff / _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUintMap[datepart]);
    }
    assignNoOfNights(fromDate, toDate, checkToDateAvail) {
        if (checkToDateAvail && this.toDate) {
            return;
        }
        if (!fromDate || !toDate) {
            this.noOfNights = 0;
            return;
        }
        let dateDifference = this.dateDiff(fromDate, toDate, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.d);
        if (this.content === _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_RENTAL_TYPE || this.content === _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_TRANSFER_TYPE) {
            dateDifference = this.dateDiff(fromDate, toDate, _trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_3__.TimeUnit.h);
            //calculating the number of hours for the car rental search service
            this.noOfNights = Math.ceil(dateDifference / 24);
            return;
        }
        if (dateDifference >= 0) {
            this.noOfNights = dateDifference;
            if (this.noOfNights === 0 && this.showNights) {
                this.noOfNights = -1; //if same day is chosen then 1 day to be displayed.
            }
        }
    }
}
TrazlerTripDatesCalendarComponent.ɵfac = function TrazlerTripDatesCalendarComponent_Factory(t) { return new (t || TrazlerTripDatesCalendarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_8__.SearchDataService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_6__.DatesService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_9__.ListenersService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_10__.PlatformService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_11__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_modal_service__WEBPACK_IMPORTED_MODULE_12__.ModalService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_13__.ScrollService), _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdirectiveInject"](_shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_14__.TzDatePipe)); };
TrazlerTripDatesCalendarComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵdefineComponent"]({ type: TrazlerTripDatesCalendarComponent, selectors: [["tz-trazler-trip-dates-calendar"]], inputs: { isMobile: "isMobile", monthsArr: "monthsArr", monthDaysArr: "monthDaysArr", weekHeads: "weekHeads", selectedServices: "selectedServices", calendarConf: "calendarConf", search: "search", defaultValue: "defaultValue", travelOption: "travelOption", content: "content", calendarData: "calendarData", formDisplayStrAttribute: "formDisplayStrAttribute", isModalEditMode: "isModalEditMode" }, outputs: { closeCalendar: "closeCalendar", hideCalDropdown: "hideCalDropdown", clear: "clear", apply: "apply" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵNgOnChangesFeature"]], decls: 27, vars: 41, consts: [["ng-style", "dateStyle", 1, "trip-dates-calendar", "notranslate", "trazler-calendar-container"], [1, "calendar-week-days-wrapper"], ["class", "calendar-week-days-box", 4, "ngIf"], [1, "trip-dates-calendar-row", "calendar-row", "flex", 3, "ngClass"], ["class", "trip-dates-calendar-flex calender-month-container", "data-test", "calendar-month-container", 3, "id", "ngClass", 4, "ngFor", "ngForOf"], [1, "bottom-cal-footer", "trip-dates-calendar-footer", "calendar-footer"], ["id", "mobCalendarFooterBlock", 1, "footer-row", "space-between", "calendar-footer-block", 3, "hidden", "ngClass"], ["data-test", "calendar-show-nights", "ng-show", "noOfNights >= -1", 1, "nights"], [4, "ngIf"], [3, "hidden"], [1, "calender-action-btns", "flex", "flex-row"], ["id", "cal-clear", "data-test", "calendar-clear-button", "class", "tz-btn calendar-button tz-btn-secondary", 3, "ngClass", "click", 4, "ngIf"], [1, "calendar-apply-block"], ["id", "done-date-btn", "data-test", "calendar-apply-button", 1, "tz-btn", "calendar-button", "tz-btn-primary", 3, "ngClass", "disabled", "click"], [1, "calendar-week-days-box"], ["class", "calendar-week-day-title", 4, "ngFor", "ngForOf"], [1, "calendar-week-day-title"], ["data-test", "calendar-month-container", 1, "trip-dates-calendar-flex", "calender-month-container", 3, "id", "ngClass"], ["data-test", "calendar-top", 1, "calendar-mobile-top", 2, "display", "flex", "text-align", "center"], [1, "mobile-hidden", 3, "hidden"], ["data-test", "calendar-previous-month-button", 1, "previous-nxt-btn", 3, "ngClass", "click"], ["src", "/assets/icons/web/icons/calendar_left_back-primary.svg", 1, "material-icons", "notranslate", "previous-nxt-btn-icon", "previous-icon", 3, "ngClass"], ["class", "month-txt-empty-block mobile-hidden", 4, "ngIf"], ["data-test", "calendar-top-center", 1, "month-txt", "align-center", "justify-center", "flex"], ["data-test", "calendar-next-month-button", 1, "previous-nxt-btn", 3, "ngClass", "click"], ["src", "/assets/icons/web/icons/calendar_right_back-primary.svg", 1, "material-icons", "notranslate", "previous-nxt-btn-icon", "next-icon", 3, "ngClass"], ["class", "week-ends flex", 4, "ngIf"], ["data-test", "calendar-border-table", 1, "border-table-calendar"], [4, "ngFor", "ngForOf"], [1, "month-txt-empty-block", "mobile-hidden"], [1, "week-ends", "flex"], ["class", "week-header flex align-center justify-center", 4, "ngFor", "ngForOf"], [1, "week-header", "flex", "align-center", "justify-center"], ["role", "button", "class", "t-day", 3, "ngClass", "mouseover", "click", 4, "ngFor", "ngForOf"], ["role", "button", 1, "t-day", 3, "ngClass", "mouseover", "click"], ["dayElement", ""], [1, "day-number-text", "t-day-col-box", 3, "ngClass"], [1, "t-day-col-text-box"], ["id", "cal-clear", "data-test", "calendar-clear-button", 1, "tz-btn", "calendar-button", "tz-btn-secondary", 3, "ngClass", "click"]], template: function TrazlerTripDatesCalendarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](2, TrazlerTripDatesCalendarComponent_div_2_Template, 2, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](4, TrazlerTripDatesCalendarComponent_div_4_Template, 16, 26, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](5, "slice");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](6, "div", 5)(7, "div", 6)(8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](9, TrazlerTripDatesCalendarComponent_span_9_Template, 2, 1, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](13, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](16, "span", 9)(17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](19, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](20, "div", 10)(21, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtemplate"](22, TrazlerTripDatesCalendarComponent_button_22_Template, 3, 6, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementStart"](23, "div", 12)(24, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵlistener"]("click", function TrazlerTripDatesCalendarComponent_Template_button_click_24_listener() { return ctx.onCloseCalendar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipe"](26, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵelementEnd"]()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](35, _c6, !ctx.isInvalid()));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind3"](5, 23, ctx.monthsArr, ctx.isMobile ? 0 : ctx.fromCal, ctx.fromCal + (!ctx.isMobile ? 2 : ctx.limitCal ? ctx.limitCal : ctx.monthsArr.length)));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx.isMobile && ctx.isInvalid())("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](37, _c7, ctx.calendarConf.showTripOption));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", ctx.isMobile);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", !(ctx.showNights && ctx.noOfNights >= 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate4"]("", ctx.platformService.isMobileDevice ? " (" : " ", "", ctx.noOfNights, " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](12, 27, ctx.noOfNights > 1 ? "GENERAL.nights" : "GENERAL.night"), "", ctx.platformService.isMobileDevice ? ")" : " ", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", !(ctx.showNights && ctx.noOfNights === -1));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" 1 ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](15, 29, "GENERAL.DAY"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", ctx.showNights);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("hidden", !(ctx.fromDate && (ctx.singlePicker || ctx.toDate || ctx.hoverDate || ctx.noOfNights > 1)));
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate4"]("", ctx.platformService.isMobileDevice ? " (" : " ", "", ctx.noOfNights + 1, " ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](19, 31, ctx.noOfNights + 1 > 1 ? "GENERAL.DAYS" : "GENERAL.DAY"), "", ctx.platformService.isMobileDevice ? ")" : " ", "");
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpureFunction1"](39, _c5, ctx.singlePicker && !ctx.fromDate || !ctx.singlePicker && (!ctx.fromDate || !ctx.toDate)))("disabled", ctx.isInvalid());
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_15__["ɵɵpipeBind1"](26, 33, "SEARCH.APPLY"), " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgClass], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_16__.SlicePipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_17__.TranslatePipe], styles: [".trip-dates-calendar[_ngcontent-%COMP%] {\n  width: 40rem;\n}\n@media (max-width: 920px) {\n  .trip-dates-calendar[_ngcontent-%COMP%] {\n    width: 100%;\n    border: unset;\n    box-shadow: unset;\n    margin: 0 auto;\n  }\n}\n@media (max-width: 920px) {\n  .trip-dates-calendar[_ngcontent-%COMP%]   .trip-dates-calendar-row[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: auto;\n    margin-right: auto;\n    flex-direction: column;\n    padding: 3.75rem 1rem 0;\n  }\n}\n@media (max-width: 920px) {\n  .trip-dates-calendar[_ngcontent-%COMP%]   .trip-dates-calendar-row--selected[_ngcontent-%COMP%] {\n    padding-bottom: 4.5rem;\n  }\n}\n@media (max-width: 920px) {\n  .trip-dates-calendar[_ngcontent-%COMP%]   .trip-dates-calendar-footer[_ngcontent-%COMP%] {\n    position: fixed;\n    bottom: 0;\n    width: 100%;\n    -webkit-transform: translateZ(0);\n  }\n}\n@media (max-width: 920px) {\n  .trip-dates-calendar[_ngcontent-%COMP%]   .trip-dates-calendar-footer[_ngcontent-%COMP%]   .calendar-footer-block[_ngcontent-%COMP%] {\n    height: 5.625rem;\n    background-color: var(--ion-color-primary-contrast);\n    border-top: 1px solid var(--color-border-mobile);\n    padding-bottom: 0.5rem;\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYXpsZXItdHJpcC1kYXRlcy1jYWxlbmRhci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtBQURKO0FDa0RJO0VEbERKO0lBSVEsV0FBQTtJQUNBLGFBQUE7SUFDQSxpQkFBQTtJQUNBLGNBQUE7RUFBTjtBQUNGO0FDMENJO0VEeENBO0lBRVEsV0FBQTtJQUNBLGlCQUFBO0lBQ0Esa0JBQUE7SUFDQSxzQkFBQTtJQUNBLHVCQUFBO0VBQVY7QUFDRjtBQ2lDSTtFRDlCQTtJQUVRLHNCQUFBO0VBRFY7QUFDRjtBQzRCSTtFRHhCQTtJQUVRLGVBQUE7SUFDQSxTQUFBO0lBQ0EsV0FBQTtJQUNBLGdDQUFBO0VBRlY7QUFDRjtBQ29CSTtFRGhCSTtJQUVRLGdCQUFBO0lBQ0EsbURBQUE7SUFDQSxnREFBQTtJQUNBLHNCQUFBO0lBQ0Esc0JBQUE7RUFGZDtBQUNGIiwiZmlsZSI6InRyYXpsZXItdHJpcC1kYXRlcy1jYWxlbmRhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuLnRyaXAtZGF0ZXMtY2FsZW5kYXIge1xuICAgIHdpZHRoOiA0MHJlbTtcblxuICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBib3JkZXI6IHVuc2V0O1xuICAgICAgICBib3gtc2hhZG93OiB1bnNldDtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgfVxuXG4gICAgLnRyaXAtZGF0ZXMtY2FsZW5kYXItcm93IHtcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgcGFkZGluZzogMy43NXJlbSAxcmVtIDA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHJpcC1kYXRlcy1jYWxlbmRhci1yb3ctLXNlbGVjdGVkIHtcbiAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiA0LjVyZW07XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHJpcC1kYXRlcy1jYWxlbmRhci1mb290ZXIge1xuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYWxlbmRhci1mb290ZXItYmxvY2sge1xuICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUuNjI1cmVtO1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5LWNvbnRyYXN0KTtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tY29sb3ItYm9yZGVyLW1vYmlsZSk7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDAuNXJlbTtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 59416:
/*!****************************************************************************!*\
  !*** ./src/app/modules/search/trazler-calendar/trazler-calendar.module.ts ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrazlerCalendarModule": () => (/* binding */ TrazlerCalendarModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _components_trazler_trip_dates_calendar_trazler_trip_dates_calendar_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/trazler-trip-dates-calendar/trazler-trip-dates-calendar.component */ 55901);
/* harmony import */ var _components_trazler_transfer_calendar_trazler_transfer_calendar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/trazler-transfer-calendar/trazler-transfer-calendar.component */ 3727);
/* harmony import */ var _components_trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/trazler-calendar/trazler-calendar.component */ 38201);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var src_app_config_translation_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/config/translation.config */ 19027);
/* harmony import */ var _datetime_calendar_datetime_calendar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../datetime-calendar/datetime-calendar.component */ 72432);
/* harmony import */ var _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mobiscroll/angular */ 29087);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);













class TrazlerCalendarModule {
}
TrazlerCalendarModule.ɵfac = function TrazlerCalendarModule_Factory(t) { return new (t || TrazlerCalendarModule)(); };
TrazlerCalendarModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: TrazlerCalendarModule });
TrazlerCalendarModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
            _mobiscroll_angular__WEBPACK_IMPORTED_MODULE_7__.MbscDatepickerModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule.forChild(src_app_config_translation_config__WEBPACK_IMPORTED_MODULE_3__.TRANSLATION_CONFIG),
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](TrazlerCalendarModule, { declarations: [_components_trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_2__.TrazlerCalendarComponent,
        _components_trazler_trip_dates_calendar_trazler_trip_dates_calendar_component__WEBPACK_IMPORTED_MODULE_0__.TrazlerTripDatesCalendarComponent,
        _components_trazler_transfer_calendar_trazler_transfer_calendar_component__WEBPACK_IMPORTED_MODULE_1__.TrazlerTransferCalendarComponent,
        _datetime_calendar_datetime_calendar_component__WEBPACK_IMPORTED_MODULE_4__.DatetimeCalendarComponent], imports: [_mobiscroll_angular__WEBPACK_IMPORTED_MODULE_7__.MbscDatepickerModule,
        _angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__.TranslateModule, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__.SharedModule], exports: [_components_trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_2__.TrazlerCalendarComponent] }); })();
_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetComponentScope"](_components_trazler_calendar_trazler_calendar_component__WEBPACK_IMPORTED_MODULE_2__.TrazlerCalendarComponent, [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitch, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgSwitchCase, _components_trazler_transfer_calendar_trazler_transfer_calendar_component__WEBPACK_IMPORTED_MODULE_1__.TrazlerTransferCalendarComponent,
    _components_trazler_trip_dates_calendar_trazler_trip_dates_calendar_component__WEBPACK_IMPORTED_MODULE_0__.TrazlerTripDatesCalendarComponent, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _datetime_calendar_datetime_calendar_component__WEBPACK_IMPORTED_MODULE_4__.DatetimeCalendarComponent], []);


/***/ }),

/***/ 51664:
/*!*****************************************************************!*\
  !*** ./src/app/services/modules/search/utils/calendar.utils.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CalendarUtilsService": () => (/* binding */ CalendarUtilsService)
/* harmony export */ });
/* harmony import */ var _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/trip */ 16699);
/* harmony import */ var _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/call-types.const */ 37005);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class CalendarUtilsService {
    constructor() { }
    static isTwoDates(dateRange, travelType, hasAcc) {
        switch (dateRange) {
            case _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_RANGE_TRAVEL:
                return hasAcc || travelType === _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ROUND_TRIP;
            case _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_RANGE_FREE:
                return travelType ? travelType === _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ROUND_TRIP : undefined;
            case _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_RANGE_ONE_DATE:
                return false;
            case _core_constants_call_types_const__WEBPACK_IMPORTED_MODULE_1__.CalTypes.CAL_RANGE_TWO_DATES:
                return true;
            default:
                return;
        }
    }
    static monthDiff(d1, d2) {
        let months;
        months = (d2.getFullYear() - d1.getFullYear()) * 12;
        months -= d1.getMonth();
        months += d2.getMonth();
        return months <= 0 ? 0 : months;
    }
    static getMonthAndYear(monthNumber, year) {
        return {
            monthNumber,
            year,
        };
    }
    static todayComparison(year, m, day) {
        const todayDate = new Date();
        const formDateIns = new Date(year, m, day);
        const nextYearDate = new Date(todayDate.getFullYear() + 1, todayDate.getMonth(), todayDate.getDate());
        if (formDateIns > nextYearDate) {
            return true;
        }
        return new Date(todayDate.getFullYear(), todayDate.getMonth(), todayDate.getDate()) > formDateIns;
    }
    static isValidDate(date) {
        return date instanceof Date && !isNaN(date.getTime());
    }
    static isTheSameDaySelectedForAccommodation(tripCal, searchConf, calData) {
        return (calData.toDate &&
            calData.toDate !== '' &&
            CalendarUtilsService.isSelectedDateRangeCheck('tripCal', searchConf, calData));
    }
    static isSelectedDateRangeCheck(calType, searchConf, calData) {
        let resetDate = false;
        for (let confIdx = searchConf.length - 1; confIdx >= 0; confIdx--) {
            for (const field in searchConf[confIdx]) {
                if (field !== calType) {
                    continue;
                }
                const fromDate = new Date(calData.fromDate).getTime();
                const toDate = new Date(calData.toDate).getTime();
                resetDate =
                    Math.floor((toDate - fromDate) / 86400000) > searchConf[confIdx][calType].maxDays ||
                        toDate === fromDate;
            }
        }
        return resetDate;
    }
    static shouldResetTransferCalendar(transferCal, tripCal, selectedServices) {
        if (selectedServices.accommodation && selectedServices.transfer && tripCal.toDate && tripCal.toDate !== '') {
            if (transferCal &&
                transferCal.tripType === _core_constants_trip__WEBPACK_IMPORTED_MODULE_0__.Trip.ONE_WAY &&
                transferCal.fromDate &&
                transferCal.fromDate !== '') {
                return (new Date(tripCal.fromDate) > new Date(transferCal.fromDate) ||
                    new Date(transferCal.fromDate) > new Date(tripCal.toDate));
            }
            else if (transferCal && transferCal.toDate && transferCal.toDate !== '') {
                return (new Date(tripCal.fromDate) > new Date(transferCal.fromDate) ||
                    new Date(transferCal.toDate) > new Date(tripCal.toDate));
            }
        }
        return false;
    }
    static shouldResetPreselectedDates(calType, htmlSearchConf, search) {
        if (!htmlSearchConf) {
            return false;
        }
        for (let confIdx = htmlSearchConf.length - 1; confIdx >= 0; confIdx--) {
            for (const field in htmlSearchConf[confIdx]) {
                if (field !== calType || !htmlSearchConf[confIdx][field].linked) {
                    continue;
                }
                let minDate;
                let maxDate;
                if (htmlSearchConf[confIdx][field].linked.fromDate &&
                    search[htmlSearchConf[confIdx][field].linked.fromDate] &&
                    search[htmlSearchConf[confIdx][field].linked.fromDate].fromDate !== '') {
                    minDate = new Date(search[htmlSearchConf[confIdx][field].linked.fromDate].fromDate);
                }
                if (htmlSearchConf[confIdx][field].linked.toDate &&
                    search[htmlSearchConf[confIdx][field].linked.toDate] &&
                    search[htmlSearchConf[confIdx][field].linked.toDate].toDate !== '') {
                    maxDate = new Date(search[htmlSearchConf[confIdx][field].linked.toDate].toDate);
                }
                if ((minDate && minDate > new Date(search[calType].fromDate)) ||
                    (maxDate && maxDate < new Date(search[calType].toDate))) {
                    return true;
                }
            }
        }
        return false;
    }
    static getDefaultCalendarValue(keepOpen = false) {
        return {
            fromDate: '',
            toDate: '',
            showCalendar: keepOpen,
            updateTime: false,
            fromDisplayStr: '',
            toDisplayStr: '',
            businessMeeting: false,
            preferBC: false,
            translator: false,
            travelOption: 'roundTrip',
            displayStr: '',
        };
    }
}
CalendarUtilsService.ɵfac = function CalendarUtilsService_Factory(t) { return new (t || CalendarUtilsService)(); };
CalendarUtilsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: CalendarUtilsService, factory: CalendarUtilsService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 48759:
/*!**************************************************************!*\
  !*** ./src/app/services/modules/services/address-service.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddressService": () => (/* binding */ AddressService)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ 10745);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! rxjs */ 90833);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ 50635);
/* harmony import */ var _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/searchEngine/services/engine-rule-service */ 71929);
/* harmony import */ var _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/general-settings */ 12308);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @environments/environment */ 92340);
/* harmony import */ var _schemas_modules_core_search_address__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @schemas/modules/core/search-address */ 68797);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/searchEngine/services/api-access.service */ 32189);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _recent_search_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./recent-search.service */ 39897);













const sameAddressMsg = 'NOTIFS.FROM_TO_DIFFERENT';
class AddressService {
    constructor(apiAccessService, engineRuleService, settingsService, translateService, dialogService, recentSearchService) {
        this.apiAccessService = apiAccessService;
        this.engineRuleService = engineRuleService;
        this.settingsService = settingsService;
        this.translateService = translateService;
        this.dialogService = dialogService;
        this.recentSearchService = recentSearchService;
    }
    static getLinkedData(conf, searchData) {
        const linkedField = conf.linked ? conf.linked.field : '';
        if (searchData[linkedField]) {
            return {
                lat: searchData[linkedField].latitude,
                lng: searchData[linkedField].longitude,
                country: searchData[linkedField].countryCodes,
                radius: conf.linked ? conf.linked.radius : 0,
                placeId: searchData[linkedField].placeId,
            };
        }
        return undefined;
    }
    getPlace(fieldObj, selectedObj, filterType, deferred) {
        // no request when place id empty
        if (!selectedObj.placeId || selectedObj.placeId === '') {
            deferred.resolve(fieldObj);
            return;
        }
        fieldObj.waitForReq = true;
        this.apiAccessService.getPlace(selectedObj.placeId, filterType).then((data) => {
            console.log('DATA from place', data);
            fieldObj.waitForReq = false;
            fieldObj.countryCode = data.countryISOCode;
            fieldObj.latitude = data.location.latitude;
            fieldObj.longitude = data.location.longitude;
            fieldObj.formattedAddress = selectedObj.mainText;
            fieldObj.cityName = data.cityName;
            fieldObj.country = data.country;
            fieldObj.isDirty = false;
            fieldObj.hotelName = data.hotelName;
            fieldObj.placeType = data.placeType;
            fieldObj.fieldName = selectedObj.inputName;
            fieldObj.detailsAddress = data.detailsAddress;
            fieldObj.displayStr = selectedObj.mainText;
            /*addressData.countryCode = data.countryISOCode;
            addressData.latitude = data.location.latitude;
            addressData.longitude = data.location.longitude;
            addressData.formattedAddress = data.detailsAddress;
            addressData.cityName = data.cityName;
            addressData.country = data.country;
            addressData.countryISOCode = data.countryISOCode;
            addressData.isDirty = false;
            addressData.hotelName = data.hotelName;
            addressData.placeType = data.placeType;
            addressData.fieldName = scopeFieldName;
            cacheRecent(addressData, engineRuleService.GOOGLE, filterType);

            if (cb) {
                let fullAddress = '';
                fullAddress += data.addrCityName ? data.addrCityName + ',' : '';
                fullAddress += data.country ? data.country : '';
                cb(fullAddress);
            }
            //return fieldObj.formattedAddress;*/
            deferred.resolve(fieldObj);
        }, (err) => {
            fieldObj.isDirty = true;
            fieldObj.waitForReq = false;
            console.log('Error on google place request' + JSON.stringify(err));
            deferred.resolve(fieldObj);
        });
    }
    getPlaceData(searchStr) {
        const placeData$ = new rxjs__WEBPACK_IMPORTED_MODULE_8__.Subject();
        const url = _core_constants_general_settings__WEBPACK_IMPORTED_MODULE_1__.GeneralSettings.mapbox.placesURL + searchStr + '.json?' + this.getMapboxQueryArgs();
        this.apiAccessService.getPlaceMapboxData(url).then((response) => {
            if (!response || !response.features) {
                placeData$.error('Response data or data.features are empty');
            }
            let record;
            for (const feature of response.features) {
                for (const placeType of feature.place_type) {
                    if (placeType === 'place') {
                        record = feature;
                        break;
                    }
                }
            }
            if (record === undefined) {
                record = response.features[0];
            }
            let countryName;
            let countryCode;
            const country = record.context[record.context.length - 1];
            if (country) {
                countryCode = country.short_code.toString().toUpperCase();
                countryName = country.text;
            }
            const city = record.text;
            const locationStr = countryName ? city + ', ' + countryName : city;
            placeData$.next({
                countryCode,
                countryName,
                placeId: record.id,
                isDirty: false,
                cityName: city,
                showText: city,
                latitude: record.center[1],
                longitude: record.center[0],
                formattedAddress: record.place_name_en,
                displayStr: locationStr,
                selectedStr: locationStr,
            });
        }, (failure) => {
            console.log('Get City info failure = ', failure);
            placeData$.error('city failure');
        });
        return placeData$;
    }
    makeAddress(selectedObj, fieldConf, searchData, deferred) {
        let fieldObj = {};
        selectedObj.fieldRole = fieldConf.fieldRole;
        const uniqueError = this.checkUniqueSelection(searchData, selectedObj, fieldConf.type);
        if (uniqueError) {
            this.dialogService.openSnackBar({
                message: uniqueError,
            });
            deferred.reject(undefined);
            return;
        }
        fieldObj.formattedAddress = selectedObj.shortDescription;
        fieldObj.mainText = selectedObj.mainText;
        if (selectedObj.havingGroup) {
            fieldObj.formattedAddress = selectedObj.longDescription;
        }
        fieldObj.countryCode = selectedObj.countryISOCode;
        // noChange is used to avoid cleaning field linked to this one when no change
        fieldObj.noChange = fieldObj.placeId === selectedObj.placeId;
        fieldObj.placeId = selectedObj.placeId;
        fieldObj.icon = selectedObj.icon;
        fieldObj.api_source = selectedObj.api_source;
        fieldObj.searchTxt = selectedObj.searchTxt;
        fieldObj.types = selectedObj.types;
        fieldObj.hotelName = selectedObj.hotelName;
        fieldObj.placeType = selectedObj.placeType;
        fieldObj.stationType = selectedObj.stationType;
        fieldObj.fieldRole = selectedObj.fieldRole;
        if (fieldObj.stationType) {
            fieldObj = this.hdlStationType(selectedObj, fieldObj);
            fieldObj.formattedAddress = fieldObj.displayStr;
            fieldObj.isPlace = true;
        }
        if (fieldConf.provider === _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_0__.EngineRuleService.GOOGLE) {
            if (selectedObj.isCached) {
                fieldObj.latitude = selectedObj.latitude;
                fieldObj.longitude = selectedObj.longitude;
                fieldObj.codes = selectedObj.iataCode;
                fieldObj.iataCode = selectedObj.iataCode;
                fieldObj.cityName = selectedObj.cityName;
                fieldObj.formattedAddress = selectedObj.mainText;
                fieldObj.addressSelected = selectedObj.addressSelected;
                fieldObj.trainCodes = selectedObj.trainCodes;
                fieldObj.displayStr = selectedObj.displayStr;
                fieldObj.isDirty = false;
                if (fieldObj.countryCode === '') {
                    fieldObj.countryCode = selectedObj.countryCode;
                }
                if (selectedObj.placeType === 'CITY') {
                    fieldObj.cityCode = selectedObj.iataCode;
                }
                /* below call is used in pushing the selected place or address to the top of list of recent search,
                 which is already available in our recent list */
                // cacheRecent(selectedObj, engineRuleService.GOOGLE, filterType);
                deferred.resolve(fieldObj);
            }
            else {
                this.getPlace(fieldObj, selectedObj, fieldConf.type, deferred);
            }
        }
        else {
            if (selectedObj.isHeader || selectedObj.isCityHeader) {
                fieldObj.latitude = selectedObj.cityLatitude;
                fieldObj.longitude = selectedObj.cityLongitude;
            }
            else {
                fieldObj.latitude = selectedObj.location.latitude;
                fieldObj.longitude = selectedObj.location.longitude;
            }
            fieldObj.fieldName = selectedObj.inputName;
            fieldObj.codes = selectedObj.iataCode;
            fieldObj.iataCode = selectedObj.iataCode;
            fieldObj.trainCodes = selectedObj.trainCodes;
            fieldObj.isDirty = false;
            if (selectedObj.placeType === 'CITY') {
                fieldObj.cityCode = selectedObj.iataCode;
            }
            console.log('IN MAKE ADDRESS');
            // cacheRecent(selectedObj, engineRuleService.MAPBOX, filterType);
            deferred.resolve(fieldObj);
        }
    }
    selectPlace(selectedObj, htmlConf, searchData, deferred) {
        let fieldObj = {};
        let code = selectedObj.code;
        if (!code && selectedObj.iataCode) {
            code = selectedObj.iataCode;
        }
        let filledScopeStr = 'to';
        if (selectedObj.inputName === 'to') {
            filledScopeStr = 'from';
        }
        // check the second field is used by this configuration, ignore otherwise
        if (htmlConf[0][filledScopeStr] || htmlConf[1][filledScopeStr]) {
            /*if (!selectedObj.stationType && selectedObj.showMyLocation) {
                deferred.resolve(fieldObj);
                return;
            }*/
            if (_services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_0__.EngineRuleService.areInconsistent(selectedObj, searchData[filledScopeStr])) {
                this.dialogService.openSnackBar({ message: this.translateService.instant(sameAddressMsg) });
                deferred.reject(undefined);
                return;
            }
        }
        let noChange = false; // noChange is used to avoid cleaning field linked to this one when no change
        if (fieldObj.placeId === selectedObj.placeId) {
            noChange = true;
        }
        fieldObj = selectedObj;
        fieldObj.noChange = noChange;
        fieldObj.countryName = selectedObj.country;
        fieldObj.cityName = selectedObj.cityName;
        fieldObj.latitude = selectedObj.location.latitude;
        fieldObj.longitude = selectedObj.location.longitude;
        fieldObj.codes = code;
        fieldObj.icon = '';
        fieldObj.isDirty = false;
        fieldObj = this.hdlStationType(selectedObj, fieldObj);
        if (fieldObj.isHeader || fieldObj.isCityHeader) {
            fieldObj.latitude = selectedObj.cityLatitude;
            fieldObj.longitude = selectedObj.cityLongitude;
        }
        deferred.resolve(fieldObj);
    }
    formSelectedAddress(selectedObj, htmlConf, fieldConf, searchData) {
        return new Promise((resolve, reject) => {
            const deferred = {
                resolve,
                reject,
            };
            switch (fieldConf.provider) {
                case _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_0__.EngineRuleService.GOOGLE:
                    return this.makeAddress(selectedObj, fieldConf, searchData, deferred);
                case _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_0__.EngineRuleService.MAPBOX:
                    if (fieldConf.type === 'type6' || fieldConf.type === 'type7') {
                        return this.makeAddress(selectedObj, fieldConf, searchData, deferred);
                    }
                    else {
                        return this.selectPlace(selectedObj, htmlConf, searchData, deferred);
                    }
                default:
                    console.error('unknown provider:' + fieldConf.provider);
                    reject(undefined);
            }
        });
    }
    getTypeAheadList(searchKey, formField, fieldConf, searchData) {
        switch (fieldConf.provider) {
            case _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_0__.EngineRuleService.GOOGLE:
                return this.placeAutoComplete(searchKey, formField, fieldConf, searchData);
            case _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_0__.EngineRuleService.MAPBOX:
                if (fieldConf.type === 'type6' || fieldConf.type === 'type7') {
                    return this.placeAutoComplete(searchKey, formField, fieldConf, searchData);
                }
                else {
                    return this.airportSearch(searchKey, formField, fieldConf, searchData);
                }
            default:
                console.error('unknown provider:' + fieldConf.provider);
                return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)([]);
        }
    }
    // When do not prompt is true we try to get initialised location in background
    // If you user has not yet allowed/denied access we abort
    checkGeoLocationAllowed() {
        return new rxjs__WEBPACK_IMPORTED_MODULE_10__.Observable((subscriber) => {
            if (this.myLocation && this.myLocation.placeId) {
                subscriber.next(this.myLocation);
                return;
            }
            if (!navigator.geolocation) {
                subscriber.error(this.translateService.instant('SEARCH.GEO_LOC_NOT_SUPPORTED'));
                return;
            }
            if (!navigator.permissions) {
                // https://developer.mozilla.org/en-US/docs/Web/API/Navigator/permissions
                // Safari won't support permission. so directly call getMyLocation and display the error message
                console.log('Browser does not support navigator.permissions');
                this.getCurrentLocation(subscriber);
                return;
            }
            navigator.permissions.query({ name: 'geolocation' }).then((result) => {
                if (result.state === 'granted' || result.state === 'prompt') {
                    // Some browser won't give state as denied. always it will state 'prompt'.
                    // Here in this case getCurrentLocation handle the 'PERMISSION DENIED' error.
                    /*if (result.state === 'prompt') {
                        console.log('access denied to location');
                        subscriber.error(undefined);
                        return;
                    }*/
                    this.getCurrentLocation(subscriber);
                }
                if (result.state === 'denied') {
                    subscriber.error(this.translateService.instant('SEARCH.ENABLE_GEO_LOC'));
                }
            });
        });
    }
    cacheSelectedLocation(selectedLocation, formField, fieldConf) {
        if (!selectedLocation.placeId) {
            return;
        }
        selectedLocation.inputName = formField.field;
        this.recentSearchService.setRecentAddress(selectedLocation, fieldConf.provider, fieldConf.type);
    }
    getCurrentLocation(subscriber) {
        navigator.geolocation.getCurrentPosition((position) => {
            const coords = position.coords;
            if (!coords) {
                subscriber.error(this.translateService.instant('SEARCH.GEO_LOC_NOT_SUPPORTED'));
                return;
            }
            const myLocation = {
                latitude: coords.latitude,
                longitude: coords.longitude,
                header: false,
                stationType: 'city',
                icon: 'location',
                isMyLocation: true,
            };
            this.getPlaceData(coords.longitude + ',' + coords.latitude).subscribe((place) => {
                const placeData = Object.assign(Object.assign({}, myLocation), place);
                placeData.displayStr = placeData.selectedStr;
                this.myLocation = placeData;
                subscriber.next(placeData);
            }, () => {
                console.log('Cannot get place');
                subscriber.error(undefined);
            });
        }, (errorResp) => {
            const errorMsg = errorResp.code === 1182
                ? this.translateService.instant('SEARCH.ENABLE_GEO_LOC')
                : errorResp.message;
            console.log('My Location error: ', errorMsg);
            subscriber.error(errorMsg);
        });
    }
    airportSearch(searchKey, formField, fieldConf, searchData) {
        let passiveCheck = 'to';
        if (formField.field === 'to') {
            passiveCheck = 'from';
        }
        const loadCache = !searchKey || searchKey === ' ' || searchKey.length < 3;
        if (loadCache) {
            const dep = searchData[passiveCheck].placeId
                ? {
                    placeId: searchData[passiveCheck].placeId,
                    radius: 0,
                }
                : undefined;
            return this.fetchCacheAddress(formField.field, (searchKey && searchKey.length) || 0, fieldConf, dep);
        }
        let searchTxt = searchKey;
        if (searchKey) {
            const splitKey = searchKey.split('-') || [];
            if (splitKey.length > 0) {
                searchKey = splitKey[0];
            }
        }
        //after selection-all airports & all stations have to replaced with already searched data
        if (searchKey && searchKey.length > 3 && searchData[formField.field].searchTxt) {
            if (searchData[formField.field].searchTxt &&
                searchData[formField.field].searchTxt.trim().startsWith(searchTxt)) {
                searchTxt = searchData[formField.field].searchTxt;
            }
        }
        const selectedId = searchData[formField.field].uniqueKey;
        return this.apiAccessService
            .SearchAirportCities({
            query: searchKey.trim(),
        })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((success) => {
            if (!success.places || success.places.length === 0) {
                return [];
            }
            const mapPlaceKeys = {}; // used to remove identical entries
            for (let i = 0; i < (success.places || []).length; i++) {
                success.places[i].inputName = formField.field;
                success.places[i].searchTxt = searchKey.trim();
                success.places[i].showMyLocation = false;
                success.places[i].fieldRole = _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_0__.EngineRuleService.FIELD_ROLE_TRIP_TRANSPORT;
                success.places[i].api_source = _schemas_modules_core_search_address__WEBPACK_IMPORTED_MODULE_3__.AddressSource.SRC_AIRPORT_CITIES;
                success.places[i].uniqueKey =
                    success.places[i].placeId + success.places[i].placeType + success.places[i].code;
                if (mapPlaceKeys[success.places[i].uniqueKey]) {
                    success.places.splice(i, 1);
                    i--;
                    continue;
                }
                else {
                    mapPlaceKeys[success.places[i].uniqueKey] = true;
                }
                if (selectedId === success.places[i].uniqueKey) {
                    success.places[i].selectedAddress = true;
                }
                success.places[i].isPlace = true;
                success.places[i].All_airports = this.translateService.instant('SEARCH.ALL_AIRPORTS');
                success.places[i].All_trains = this.translateService.instant('SEARCH.ALL_TRAINS');
            }
            return success.places && success.places.length ? success.places : [];
        }));
    }
    placeAutoComplete(searchKey, formField, fieldConf, searchData) {
        const dep = AddressService.getLinkedData(fieldConf, searchData);
        const fieldName = formField.field;
        const loadCache = !searchKey || searchKey === ' ' || searchKey.length < 3;
        if (loadCache) {
            return this.fetchCacheAddress(fieldName, searchKey ? searchKey.length : 0, fieldConf, dep);
        }
        /*if (
            searchData[fieldName] &&
            searchData[fieldName].detailsAddress &&
            searchData[fieldName].detailsAddress !== ''
        ) {
            searchKey = searchData[fieldName].detailsAddress;
        }*/
        const params = {
            input: searchKey,
            inputType: fieldConf.type,
        };
        if (dep) {
            if (dep.lat && dep.lng) {
                params.location = dep.lat + ',' + dep.lng;
                params.radius = dep.radius;
            }
            if (dep.country) {
                params.country = dep.country;
            }
        }
        const selectedId = searchData[fieldName].placeId;
        return this.apiAccessService.dropDown(fieldConf.provider === _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_0__.EngineRuleService.GOOGLE, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_11__.map)((response) => {
            if (!response.data.predictions) {
                return [];
            }
            for (const prediction of response.data.predictions) {
                prediction.inputName = fieldName;
                prediction.api_source =
                    fieldConf.provider === _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_0__.EngineRuleService.GOOGLE
                        ? _schemas_modules_core_search_address__WEBPACK_IMPORTED_MODULE_3__.AddressSource.SRC_GOOGLE
                        : _schemas_modules_core_search_address__WEBPACK_IMPORTED_MODULE_3__.AddressSource.SRC_MAPBOX;
                prediction.name = prediction.mainText;
                if (prediction.placeId === selectedId) {
                    prediction.selectedAddress = true;
                }
                if (fieldConf.provider === _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_0__.EngineRuleService.GOOGLE) {
                    prediction.displayStr = prediction.mainText;
                }
                if (prediction.stationType !== '') {
                    prediction.isPlace = true;
                    prediction.All_airports = this.translateService.instant('SEARCH.ALL_AIRPORTS');
                    prediction.All_trains = this.translateService.instant('SEARCH.ALL_TRAINS');
                }
            }
            return response.data.predictions;
        }));
    }
    getDisplayStringOfFromAndTo(obj) {
        if (obj.stationType === 'rail_stations') {
            return obj.cityName + ' - ' + this.translateService.instant('SEARCH.ALL_TRAINS');
        }
        if (obj.isCityHeader) {
            return obj.cityName + ', ' + obj.country;
        }
        if (obj.isHeader && obj.stationType === 'airports') {
            return obj.cityName + ' - ' + this.translateService.instant('SEARCH.ALL_AIRPORTS');
        }
        if (!obj.isHeader && !obj.isCityHeader) {
            if (obj.stationType === 'airport') {
                return obj.cityName + ' - ' + (obj.code ? obj.code : obj.iataCode);
            }
            if (obj.stationType === 'rail_station') {
                return obj.name;
            }
        }
        return obj.displayStr;
    }
    hdlStationType(selectedObj, fieldObj) {
        if (selectedObj.stationType === 'airport' || selectedObj.stationType === 'airports') {
            fieldObj.icon = 'flight';
        }
        if (selectedObj.stationType === 'rail_station' || selectedObj.stationType === 'rail_stations') {
            fieldObj.icon = 'train';
            fieldObj.latitude = selectedObj.cityLatitude;
            fieldObj.longitude = selectedObj.cityLongitude;
        }
        if (selectedObj.stationType === 'city') {
            let displayStr = selectedObj.name !== '' ? selectedObj.name : selectedObj.cityName;
            if (!displayStr.includes(selectedObj.country)) {
                displayStr = displayStr + ', ' + selectedObj.country;
            }
            fieldObj.displayStr = displayStr;
        }
        else {
            fieldObj.displayStr = this.getDisplayStringOfFromAndTo(selectedObj);
        }
        return fieldObj;
    }
    checkUniqueSelection(searchData, addressData, filterType) {
        if (addressData.fieldRole === _services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_0__.EngineRuleService.FIELD_ROLE_TRANSFER) {
            switch (addressData.inputName) {
                case 'to':
                    if (searchData.address && searchData.address.placeId === addressData.placeId) {
                        return this.translateService.instant(sameAddressMsg);
                    }
                    break;
                case 'address':
                    if (searchData.to && searchData.to.placeId === addressData.placeId) {
                        return this.translateService.instant(sameAddressMsg);
                    }
            }
            return;
        }
        switch (addressData.inputName) {
            case 'to' || 0:
                if (searchData.from && searchData.from.placeId === addressData.placeId) {
                    return this.translateService.instant(sameAddressMsg);
                }
                break;
            case 'from' || 0:
                if (searchData.to && searchData.to.placeId === addressData.placeId) {
                    return this.translateService.instant(sameAddressMsg);
                }
                break;
        }
        return undefined;
    }
    getMapboxQueryArgs() {
        const queryArgs = {
            type: 'place',
            access_token: _environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.mapboxGLToken,
            language: this.settingsService.langCode,
        };
        const params = [];
        for (const key in queryArgs) {
            if (queryArgs.hasOwnProperty(key)) {
                params.push(key + '=' + queryArgs[key]);
            }
        }
        return params.join('&');
    }
    fetchCacheAddress(fieldName, searchLength, conf, linkedField) {
        const searchAddress = [];
        const showMyLocation = !!(conf.extra && conf.extra.myLoc);
        if (showMyLocation) {
            searchAddress.push(this.myLocation && this.myLocation.placeId
                ? this.myLocation
                : {
                    isMyLocation: true,
                    displayStr: '',
                });
        }
        if (searchLength > 0) {
            return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(searchAddress);
        }
        const cacheAddresses = this.recentSearchService.getRecentAddress(conf.provider.toString(), conf.type, fieldName, linkedField);
        for (const address of cacheAddresses) {
            address.inputName = fieldName;
            address.codes = address.code;
            searchAddress.push(address);
        }
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_9__.of)(searchAddress);
    }
}
AddressService.ɵfac = function AddressService_Factory(t) { return new (t || AddressService)(_angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_searchEngine_services_api_access_service__WEBPACK_IMPORTED_MODULE_4__.ApiAccessService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_searchEngine_services_engine_rule_service__WEBPACK_IMPORTED_MODULE_0__.EngineRuleService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_services_settings_service__WEBPACK_IMPORTED_MODULE_5__.SettingsService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_13__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_services_dialog_service__WEBPACK_IMPORTED_MODULE_6__.DialogService), _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵinject"](_recent_search_service__WEBPACK_IMPORTED_MODULE_7__.RecentSearchService)); };
AddressService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjectable"]({ token: AddressService, factory: AddressService.ɵfac, providedIn: 'root' });


/***/ }),

/***/ 75843:
/*!************************************************************************!*\
  !*** ./src/app/services/searchEngine/services/search-state.service.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchState": () => (/* binding */ SearchState)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);

class SearchState {
    init(initialState) {
        this.searchState = initialState;
    }
    saveState(fieldName, data) {
        if (this.searchState[fieldName]) {
            this.searchState[fieldName] = data;
        }
    }
    getState(fieldName) {
        if (fieldName) {
            return this.searchState[fieldName];
        }
        return this.searchState;
    }
    setPassengers(passengers) {
        this.passengers = passengers;
    }
    getPassengers() {
        return this.passengers;
    }
}
SearchState.ɵfac = function SearchState_Factory(t) { return new (t || SearchState)(); };
SearchState.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SearchState, factory: SearchState.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_search_search_module_ts.js.map