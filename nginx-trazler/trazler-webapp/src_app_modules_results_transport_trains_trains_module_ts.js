"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_results_transport_trains_trains_module_ts"],{

/***/ 76648:
/*!************************************************************************************************************!*\
  !*** ./src/app/modules/results/transport/trains/components/trains-list-item/trains-list-item.component.ts ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainsListItemComponent": () => (/* binding */ TrainsListItemComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_results_services_tools_shared_services__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/results/services/tools.shared.services */ 28782);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _services_modules_transport_trains_trains_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/modules/transport/trains/trains.service */ 54717);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_recommended_list_tem_description_recommended_list_tem_description_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../shared/components/recommended-list-tem-description/recommended-list-tem-description.component */ 5485);
/* harmony import */ var _shared_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../../shared/components/checkbox/checkbox.component */ 56491);
/* harmony import */ var _trains_list_item_info_trains_list_item_info_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../trains-list-item-info/trains-list-item-info.component */ 80852);
/* harmony import */ var _trains_class_trains_class_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../trains-class/trains-class.component */ 19882);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../../shared/pipes/tz-currency.pipe */ 98967);











function TrainsListItemComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 13)(1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "tz-recommended-list-tem-description", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("bestValType", ctx_r0.bestValType);
} }
function TrainsListItemComponent_div_6_tz_checkbox_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "tz-checkbox", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("selectedChange", function TrainsListItemComponent_div_6_tz_checkbox_1_Template_tz_checkbox_selectedChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2); return ctx_r5.selectTicket($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("stopPropagation", true)("selected", ctx_r4.active);
} }
function TrainsListItemComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TrainsListItemComponent_div_6_tz_checkbox_1_Template, 1, 2, "tz-checkbox", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r1.selectable);
} }
const _c0 = function (a0) { return { selected: a0 }; };
function TrainsListItemComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrainsListItemComponent_div_11_Template_div_click_0_listener($event) { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r10); const supplierClass_r7 = restoredCtx.$implicit; const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); ctx_r9.toggleSelectedClass(supplierClass_r7); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipe"](5, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const supplierClass_r7 = ctx.$implicit;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](8, _c0, ctx_r2.selectedTrain.tzClass === supplierClass_r7.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("disabled", ctx_r2.isValidTicket(supplierClass_r7) ? null : true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](supplierClass_r7.class);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", supplierClass_r7.count === 0 ? "-" : _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpipeBind2"](5, 5, ctx_r2.supplierClassMinPrice[supplierClass_r7.class].listPrice, ctx_r2.supplierClassMinPrice[supplierClass_r7.class].listPriceCur), " ");
} }
function TrainsListItemComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 22)(1, "tz-trains-class", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("toggleChange", function TrainsListItemComponent_div_12_Template_tz_trains_class_toggleChange_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r11.onToggleDetails(); })("trainClassSelected", function TrainsListItemComponent_div_12_Template_tz_trains_class_trainClassSelected_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r13.onTrainClassSelected($event); })("trainClassToggle", function TrainsListItemComponent_div_12_Template_tz_trains_class_trainClassToggle_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r14.trainClassToggle.emit(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("toggle", ctx_r3.showDetails)("departure", ctx_r3.train.departure)("arrival", ctx_r3.train.arrival)("trainClasses", ctx_r3.trainClasses)("selectedTrain", ctx_r3.selectedTrain);
} }
const _c1 = function (a0) { return { "mb-0": a0 }; };
class TrainsListItemComponent {
    constructor(trainService) {
        this.trainService = trainService;
        this.bestValueId = '';
        this.isChangeOptions = false;
        this.selectedTrainChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.selectedClassChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.trainDetailClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.trainClassToggle = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
        this.selectable = true;
        this.showDetails = false;
        this.active = false;
        this.trainClasses = [];
        this.supplierClassMinPrice = {};
    }
    ngOnInit() {
        // Todo: path needs to be done from server
        const oldPath = '/web/assets/img/trainSupplierLogos/';
        const newPath = '/assets/icons/web/img/trainSupplierLogos/';
        this.train.operatorImage = this.train.operatorImage.replace(oldPath, newPath);
        if (this.train && this.train.bestValType) {
            this.bestValType = _services_modules_results_services_tools_shared_services__WEBPACK_IMPORTED_MODULE_0__.ResultsTools.getBestValType(this.train.bestValType, _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRAIN);
        }
        this.init();
    }
    ngOnChanges(changes) {
        if (changes['selectedOption']) {
            this.updateSelectedTrain();
        }
    }
    onToggleDetails() {
        this.showDetails = !this.showDetails;
        this.updateTrainDetailToggle();
    }
    toggleSelectedClass(supplierClass) {
        let toggle = !this.showDetails;
        this.trainClasses = [];
        if (!supplierClass) {
            // this.selectedTrain = this.formTrainSelectionInfo(this.findDefaultTrainClass());
            supplierClass = this.getSelectedSupplierClass(this.selectedTrain.tzClass);
            const sc = this.train.supplierClasses[0];
            if (!supplierClass) {
                for (const cls of this.train.supplierClasses) {
                    if (cls.count > 0) {
                        supplierClass = cls;
                        break;
                    }
                }
            }
            supplierClass = supplierClass || sc;
        }
        else if (this.classToShow && this.classToShow.class !== supplierClass.class) {
            toggle = true;
        }
        this.classToShow = toggle ? supplierClass : undefined;
        if (this.classToShow) {
            this.loadTrainSubClasses(this.classToShow.class);
        }
        this.showDetails = toggle;
        this.updateTrainDetailToggle();
        const selectedTrainClass = this.trainService.getSelectedClass(this.train, supplierClass.class, this.selectedTrain);
        const differentClassSelected = selectedTrainClass && this.selectedTrain.classId !== selectedTrainClass.id;
        if (differentClassSelected) {
            this.selectedClassChange.emit(this.formTrainSelectionInfo(selectedTrainClass));
        }
    }
    isValidTicket(supplierClass, subClass) {
        return this.trainService.isValidTicket(this.train, supplierClass, subClass);
    }
    selectTicket(active) {
        this.showDetails = false;
        this.selectedTrain.selected = active;
        if (active) {
            if (!this.selectedTrain.classId) {
                this.selectedTrain = this.formTrainSelectionInfo(this.findDefaultTrainClass());
            }
            this.selectedTrainChange.emit(this.selectedTrain);
        }
        else {
            this.selectedTrainChange.emit({
                id: '',
                classId: '',
                tzClass: '',
                groupId: '',
                journeyType: this.train.journeyType,
                selected: false,
            });
        }
    }
    onTrainClassSelected(trainClass) {
        this.selectedClassChange.emit(this.formTrainSelectionInfo(trainClass));
    }
    init() {
        this.fetchServicePrices();
        if (this.isChangeOptions) {
            //this.showDetails = true;
            //this.trainCartData = this.trainService.getSelectedTrainFromCart();
            //this.classToShow = this.selectedOption.onward;
            //this.toggleSelectedClass(this.trainCartData.items[0].selectedItem.data.onward.trainClass);
            if (this.train.journeyType === 'returnJourney' && this.selectedOption.return) {
                this.selectedTrain = this.selectedOption.return;
            }
            if (this.train.journeyType === 'onwardJourney' && this.selectedOption.onward) {
                this.selectedTrain = this.selectedOption.onward;
            }
            this.toggleSelectedClass(this.getSelectedSupplierClass(this.selectedTrain.tzClass));
        }
    }
    fetchServicePrices() {
        this.supplierClassMinPrice = this.trainService.getServicePrices(this.train, this.selectedTrain);
    }
    updateTrainDetailToggle() {
        if (!this.showDetails) {
            this.trainDetailClosed.emit(this.train.journeyType);
        }
    }
    findDefaultTrainClass() {
        const selectedTrainClass = this.train.trainClasses.filter((tc) => tc.id === this.selectedTrain.classId);
        if (this.selectedTrain.classId && selectedTrainClass.length > 0) {
            return selectedTrainClass[0];
        }
        const selectedOnward = this.selectedOption.onward;
        if (!selectedOnward || !selectedOnward.selected) {
            return this.train.trainClasses[0];
        }
        const tzSubClass = selectedOnward.tzSubClass;
        const hasSubClass = tzSubClass && tzSubClass !== '';
        let defaultTrainClass;
        let minPrice;
        this.train.trainClasses.some((tc) => {
            if (tc.groupId !== selectedOnward.groupId) {
                return false;
            }
            const exactClassMatch = tc.trainClass.tzClass === selectedOnward.tzClass &&
                (hasSubClass ? tzSubClass === tc.trainClass.tzSubClass : true);
            if (exactClassMatch) {
                defaultTrainClass = tc;
            }
            else if (!defaultTrainClass || minPrice > tc.prices.listPrice) {
                defaultTrainClass = tc;
                minPrice = tc.prices.listPrice;
            }
            return exactClassMatch;
        });
        return defaultTrainClass;
    }
    updateSelectedTrain() {
        let selectedOption;
        let openTrainDetail = false;
        if (this.train.journeyType === 'onwardJourney') {
            selectedOption = this.selectedOption.onward;
            openTrainDetail = this.showTrainDetail.onwardJourney;
        }
        else {
            selectedOption = this.selectedOption.return;
            openTrainDetail = this.showTrainDetail.returnJourney;
        }
        if (!selectedOption || selectedOption.id !== this.train.id) {
            this.showDetails = false;
            this.selectedTrain = {};
            return;
        }
        this.selectedTrain = Object.assign({}, selectedOption);
        this.active = this.selectedTrain.selected || false;
        this.fetchServicePrices();
        openTrainDetail = openTrainDetail && selectedOption.tzClass !== '';
        if (openTrainDetail) {
            this.loadTrainSubClasses(selectedOption.tzClass);
            this.showDetails = selectedOption.showDetails || false;
            this.classToShow = this.getSelectedSupplierClass(selectedOption.tzClass);
        }
    }
    loadTrainSubClasses(trainClass) {
        this.trainClasses = this.train.trainClasses.filter((tc) => tc.trainClass.tzClass === trainClass);
    }
    getSelectedSupplierClass(trainClass) {
        return this.train.supplierClasses.find((sc) => sc.class === trainClass);
    }
    formTrainSelectionInfo(trainClass) {
        return this.trainService.formTrainSelectionInfo(this.train, trainClass, this.selectedTrain.selected, this.showDetails);
    }
}
TrainsListItemComponent.ɵfac = function TrainsListItemComponent_Factory(t) { return new (t || TrainsListItemComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_services_modules_transport_trains_trains_service__WEBPACK_IMPORTED_MODULE_2__.TrainService)); };
TrainsListItemComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: TrainsListItemComponent, selectors: [["tz-trains-list-item"]], inputs: { train: "train", bestValueId: "bestValueId", selectedOption: "selectedOption", showTrainDetail: "showTrainDetail", isRoundTrip: "isRoundTrip", isChangeOptions: "isChangeOptions" }, outputs: { selectedTrainChange: "selectedTrainChange", selectedClassChange: "selectedClassChange", trainDetailClosed: "trainDetailClosed", trainClassToggle: "trainClassToggle" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]], decls: 13, vars: 16, consts: [[1, "train-results-list"], ["class", "recommended-block", 4, "ngIf"], ["data-test", "result-page-train-block-item", 1, "train-block-item", "tz-block-with-border"], [1, "ticket-item-group", 3, "click"], [1, "train-block-item-info"], [1, "ticket-info", "d-flex", "justify-content-between", "align-items-center", "train-ticket"], ["class", "check-item", 4, "ngIf"], [1, "ticket-company-logo"], [3, "src"], [3, "departureDate", "arrivalDate", "duration", "departureLocation", "arrivalLocation", "stops", "layoverName"], [1, "train-block-item-price"], ["class", "ticket-options relative", 3, "class", "click", 4, "ngFor", "ngForOf"], ["class", "train-content-wrapper", 4, "ngIf"], [1, "recommended-block"], [1, "recommended-block__content"], [3, "bestValType"], [1, "check-item"], ["className", "checkbox--primary", 3, "stopPropagation", "selected", "selectedChange", 4, "ngIf"], ["className", "checkbox--primary", 3, "stopPropagation", "selected", "selectedChange"], [1, "ticket-options", "relative", 3, "click"], [1, "ticket-type"], ["data-test", "train-ticket-price", 1, "ticket-price"], [1, "train-content-wrapper"], [3, "toggle", "departure", "arrival", "trainClasses", "selectedTrain", "toggleChange", "trainClassSelected", "trainClassToggle"]], template: function TrainsListItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, TrainsListItemComponent_div_1_Template, 3, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2)(3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function TrainsListItemComponent_Template_div_click_3_listener() { return ctx.toggleSelectedClass(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4)(5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](6, TrainsListItemComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](8, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "tz-trains-list-item-info", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](11, TrainsListItemComponent_div_11_Template, 6, 10, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, TrainsListItemComponent_div_12_Template, 2, 5, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.bestValType);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](14, _c1, ctx.bestValueId === ctx.train.id));
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !ctx.isChangeOptions);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("src", ctx.train.operatorImage, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("departureDate", ctx.train.departure.dateTzFormat)("arrivalDate", ctx.train.arrival.dateTzFormat)("duration", ctx.train.durationFormatted)("departureLocation", ctx.train.departure)("arrivalLocation", ctx.train.arrival)("stops", ctx.train.trainClasses[0].route)("layoverName", ctx.train.trainClasses.length > 0 && (ctx.train.trainClasses[0] == null ? null : ctx.train.trainClasses[0].layoverName) ? ctx.train.trainClasses[0].layoverName : "");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.train.supplierClasses);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showDetails);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _shared_components_recommended_list_tem_description_recommended_list_tem_description_component__WEBPACK_IMPORTED_MODULE_3__.RecommendedListTemDescriptionComponent, _shared_components_checkbox_checkbox_component__WEBPACK_IMPORTED_MODULE_4__.CheckboxComponent, _trains_list_item_info_trains_list_item_info_component__WEBPACK_IMPORTED_MODULE_5__.TrainsListItemInfoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, _trains_class_trains_class_component__WEBPACK_IMPORTED_MODULE_6__.TrainsClassComponent], pipes: [_shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.TzCurrencyPipe], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .train-results-list[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%] {\n  border-radius: 3px;\n  background-color: #fff;\n}\n[_nghost-%COMP%]   .train-block-item.mb-0[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%] {\n  display: flex;\n  padding: 0 0 1.25rem 0;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%] {\n  border-right: 1px solid #e5e5e5;\n  flex: 1;\n  padding-right: 19px;\n  margin-right: 0;\n  cursor: pointer;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%] {\n  height: 100%;\n  min-width: 24.875rem;\n  width: 24.875rem;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .check-item[_ngcontent-%COMP%] {\n  font-size: 14px;\n  justify-content: space-between;\n  line-height: 18px;\n  padding: 11px 0;\n  padding-right: 13px;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .check-item[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  width: 18px;\n  height: 18px;\n  min-width: 18px;\n  min-height: 18px;\n  margin: 0;\n  background-size: cover;\n  background-position: center;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .ticket-company-logo[_ngcontent-%COMP%] {\n  max-width: 3.125rem;\n  min-width: 2.9375rem;\n  text-align: center;\n  margin-right: 0.75rem;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .middle-part[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .middle-part[_ngcontent-%COMP%]   .top-part[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .middle-part[_ngcontent-%COMP%]   .top-part[_ngcontent-%COMP%]   .start-time[_ngcontent-%COMP%] {\n  min-width: 62px;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .middle-part[_ngcontent-%COMP%]   .top-part[_ngcontent-%COMP%]   .start-time[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .middle-part[_ngcontent-%COMP%]   .top-part[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-left: -15px;\n  margin-right: -20px;\n  top: 5px;\n  position: relative;\n  text-align: center;\n  font-size: 12px;\n  line-height: 20px;\n  padding-bottom: 25px;\n  margin-bottom: -25px;\n  z-index: 1;\n  position: relative;\n  display: inline-block;\n  color: var(--color-text-light-gray);\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .middle-part[_ngcontent-%COMP%]   .top-part[_ngcontent-%COMP%]   .duration[_ngcontent-%COMP%]   .steps[_ngcontent-%COMP%]   .duration-line[_ngcontent-%COMP%] {\n  height: 2px;\n  width: 178px;\n  background-color: #e5e5e5;\n  margin: 3px 15px 6px;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .middle-part[_ngcontent-%COMP%]   .top-part[_ngcontent-%COMP%]   .end-time[_ngcontent-%COMP%] {\n  min-width: 65px;\n  text-align: right !important;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .middle-part[_ngcontent-%COMP%]   .top-part[_ngcontent-%COMP%]   .end-time[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 23px;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .middle-part[_ngcontent-%COMP%]   .bottom-part[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  font-size: 14px;\n  color: #9b9b9b;\n  line-height: 20px;\n  position: relative;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .bottom-part[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  font-size: 14px;\n  color: #9b9b9b;\n  line-height: 20px;\n  position: relative;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .bottom-part[_ngcontent-%COMP%]   .start-loc[_ngcontent-%COMP%], [_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .bottom-part[_ngcontent-%COMP%]   .end-loc[_ngcontent-%COMP%] {\n  max-width: 75px;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .bottom-part[_ngcontent-%COMP%]   .start-loc[_ngcontent-%COMP%]   .text-overflow-hide[_ngcontent-%COMP%], [_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .bottom-part[_ngcontent-%COMP%]   .end-loc[_ngcontent-%COMP%]   .text-overflow-hide[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-info[_ngcontent-%COMP%]   .ticket-info[_ngcontent-%COMP%]   .bottom-part[_ngcontent-%COMP%]   .bottom-part[_ngcontent-%COMP%]   .middle-part[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  position: absolute;\n  left: 50%;\n  transform: translateX(-50%);\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-price[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  width: auto;\n  min-width: auto;\n  max-width: none;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-price[_ngcontent-%COMP%]   .ticket-options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex: 1;\n  text-align: right;\n  margin-top: 0;\n  padding-left: 1.25rem;\n  padding-right: 1.1875rem;\n  cursor: pointer;\n  margin-left: 0;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-price[_ngcontent-%COMP%]   .ticket-options[_ngcontent-%COMP%]:not(:first-child) {\n  border-left: 1px solid #e5e5e5;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-price[_ngcontent-%COMP%]   .ticket-options.relative[_ngcontent-%COMP%] {\n  width: 8.75rem;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-price[_ngcontent-%COMP%]   .ticket-options.relative[_ngcontent-%COMP%]:nth-child(2) {\n  width: 139px;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-price[_ngcontent-%COMP%]   .ticket-options[disabled][_ngcontent-%COMP%] {\n  color: #a0a0a0;\n  pointer-events: none;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-price[_ngcontent-%COMP%]   .ticket-options[_ngcontent-%COMP%]   .ticket-price[_ngcontent-%COMP%] {\n  font-size: 23px;\n  line-height: 24px;\n  white-space: nowrap;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-price[_ngcontent-%COMP%]   .ticket-options[_ngcontent-%COMP%]   .ticket-type[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-bottom: 6px;\n  color: #a0a0a0;\n  font-size: 14px;\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-price[_ngcontent-%COMP%]   .ticket-options.selected[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  color: #7A65E1 !important;\n}\n@media not all and (hover: none) {\n  [_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-price[_ngcontent-%COMP%]   .ticket-options[_ngcontent-%COMP%]:hover    > *[_ngcontent-%COMP%] {\n    color: #7a65e1 !important;\n  }\n  [_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-price[_ngcontent-%COMP%]   .ticket-options[_ngcontent-%COMP%]:hover:after {\n    content: \"\";\n    position: absolute;\n    bottom: -20px;\n    left: 20px;\n    right: 20px;\n    height: 3px;\n    background: #7A65E1;\n    border-radius: 100px 67px 0 0;\n  }\n}\n[_nghost-%COMP%]   .train-block-item[_ngcontent-%COMP%]   .ticket-item-group[_ngcontent-%COMP%]   .train-block-item-price[_ngcontent-%COMP%]   .ticket-options.selected[_ngcontent-%COMP%]:after {\n  content: \"\";\n  position: absolute;\n  bottom: -20px;\n  left: 20px;\n  right: 20px;\n  height: 3px;\n  background: #7A65E1;\n  border-radius: 100px 67px 0 0;\n}\n[_nghost-%COMP%]   .train-block-item-footer[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n.tz-block-with-border[_ngcontent-%COMP%] {\n  padding-bottom: 0;\n  padding-right: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlucy1saXN0LWl0ZW0uY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi8uLi8uLi9hc3NldHMvc3R5bGVzL3V0aWxzL19taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLE9BQUE7QUFERjtBQUdFO0VBQ0UsZUFBQTtBQURKO0FBSUU7RUFDRSxrQkFBQTtFQUNBLHNCQUFBO0FBRko7QUFJSTtFQUNFLGdCQUFBO0FBRk47QUFLSTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUhOO0FBS007RUFDRSwrQkFBQTtFQUNBLE9BQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBSFI7QUFLUTtFQUNJLFlBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQUFBO0FBSFo7QUFLVTtFQUNFLGVBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBSFo7QUFLWTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7QUFIZDtBQVFVO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7QUFOWjtBQVNVO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0FBUFo7QUFTWTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtBQVBkO0FBUWM7RUFDRSxlQUFBO0FBTmhCO0FBT2dCO0VBQ0UsZUFBQTtBQUxsQjtBQVFjO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxRQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLGVBQUE7RUFDQSxpQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1DQUFBO0FBUGhCO0FBVWtCO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FBUnBCO0FBWWM7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7QUFWaEI7QUFXZ0I7RUFDRSxlQUFBO0FBVGxCO0FBY1k7RUFDRSw4QkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQVpkO0FBZ0JVO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBZFo7QUFnQlk7O0VBRUUsZUFBQTtBQWRkO0FBZWM7O0VBQ0UsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLHVCQUFBO0FBWmhCO0FBZVk7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSwyQkFBQTtBQWJkO0FBbUJNO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFqQlI7QUFtQlE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSw4QkFBQTtFQUNBLE9BQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxxQkFBQTtFQUNBLHdCQUFBO0VBQ0EsZUFBQTtFQUNBLGNBQUE7QUFqQlY7QUFtQlU7RUFDRSw4QkFBQTtBQWpCWjtBQXFCVTtFQUNFLGNBQUE7QUFuQlo7QUFvQlk7RUFDRSxZQUFBO0FBbEJkO0FBc0JVO0VBQ0UsY0FBQTtFQUNBLG9CQUFBO0FBcEJaO0FBdUJVO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFyQlo7QUF3QlU7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7QUF0Qlo7QUF5QlU7RUFDRSx5QkFBQTtBQXZCWjtBQ3RHSTtFRGlJWTtJQUNJLHlCQUFBO0VBeEJsQjtFQTJCYztJQUNJLFdBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFdBQUE7SUFDQSxtQkFBQTtJQUNBLDZCQUFBO0VBekJsQjtBQUNGO0FBNEJVO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7QUExQlo7QUFtQ0U7RUFDRSxtQkFBQTtBQWpDSjtBQXNDQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7QUFuQ0oiLCJmaWxlIjoidHJhaW5zLWxpc3QtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuOmhvc3Qge1xuICBmbGV4OiAxO1xuXG4gIC50cmFpbi1yZXN1bHRzLWxpc3Qge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuXG4gIC50cmFpbi1ibG9jay1pdGVtIHtcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgICYubWItMCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgIH1cblxuICAgIC50aWNrZXQtaXRlbS1ncm91cCB7XG4gICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgcGFkZGluZzogMCAwIDEuMjVyZW0gMDtcblxuICAgICAgLnRyYWluLWJsb2NrLWl0ZW0taW5mbyB7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlNWU1ZTU7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDE5cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAgIC50aWNrZXQtaW5mbyB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDI0Ljg3NXJlbTtcbiAgICAgICAgICAgIHdpZHRoOiAyNC44NzVyZW07XG5cbiAgICAgICAgICAuY2hlY2staXRlbSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMThweDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDExcHggMDtcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEzcHg7XG5cbiAgICAgICAgICAgIGxhYmVsIHtcbiAgICAgICAgICAgICAgd2lkdGg6IDE4cHg7XG4gICAgICAgICAgICAgIGhlaWdodDogMThweDtcbiAgICAgICAgICAgICAgbWluLXdpZHRoOiAxOHB4O1xuICAgICAgICAgICAgICBtaW4taGVpZ2h0OiAxOHB4O1xuICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICAgICAgICAgICAgLy8gYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uL2ltZy9pY29ucy9jaGVjay1ib3JkZXIuc3ZnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGlja2V0LWNvbXBhbnktbG9nbyB7XG4gICAgICAgICAgICBtYXgtd2lkdGg6IDMuMTI1cmVtO1xuICAgICAgICAgICAgbWluLXdpZHRoOiAyLjkzNzVyZW07XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm1pZGRsZS1wYXJ0IHtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICAudG9wLXBhcnQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAuc3RhcnQtdGltZSB7XG4gICAgICAgICAgICAgICAgbWluLXdpZHRoOiA2MnB4O1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIC5kdXJhdGlvbiB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMjBweDtcbiAgICAgICAgICAgICAgICB0b3A6IDVweDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IC0yNXB4O1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1saWdodC1ncmF5KTtcblxuICAgICAgICAgICAgICAgIC5zdGVwcyB7XG4gICAgICAgICAgICAgICAgICAuZHVyYXRpb24tbGluZSB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMnB4O1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTc4cHg7XG4gICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNWU1ZTU7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogM3B4IDE1cHggNnB4O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAuZW5kLXRpbWUge1xuICAgICAgICAgICAgICAgIG1pbi13aWR0aDogNjVweDtcbiAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAyM3B4XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC5ib3R0b20tcGFydCB7XG4gICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICBjb2xvcjogIzliOWI5YjtcbiAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuYm90dG9tLXBhcnQge1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICAgIGNvbG9yOiAjOWI5YjliO1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgICAgIC5zdGFydC1sb2MsXG4gICAgICAgICAgICAuZW5kLWxvYyB7XG4gICAgICAgICAgICAgIG1heC13aWR0aDogNzVweDtcbiAgICAgICAgICAgICAgLnRleHQtb3ZlcmZsb3ctaGlkZSB7XG4gICAgICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcCAhaW1wb3J0YW50O1xuICAgICAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC5ib3R0b20tcGFydCAubWlkZGxlLXBhcnQge1xuICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudHJhaW4tYmxvY2staXRlbS1wcmljZSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgd2lkdGg6IGF1dG87XG4gICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuXG4gICAgICAgIC50aWNrZXQtb3B0aW9ucyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAxLjI1cmVtO1xuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDEuMTg3NXJlbTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG5cbiAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2U1ZTVlNTtcbiAgICAgICAgICB9XG5cblxuICAgICAgICAgICYucmVsYXRpdmUge1xuICAgICAgICAgICAgd2lkdGg6IDguNzVyZW07XG4gICAgICAgICAgICAmOm50aC1jaGlsZCgyKSB7XG4gICAgICAgICAgICAgIHdpZHRoOiAxMzlweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmW2Rpc2FibGVkXSAge1xuICAgICAgICAgICAgY29sb3I6ICNhMGEwYTA7IC8vIGRpc2FibGVkIHRyYWluIHByaWNlXG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGlja2V0LXByaWNlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAudGlja2V0LXR5cGUge1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICAgICAgICBjb2xvcjogI2EwYTBhMDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnNlbGVjdGVkPip7XG4gICAgICAgICAgICBjb2xvcjogIzdBNjVFMSAhaW1wb3J0YW50O1xuICAgICAgICAgIH1cblxuICAgICAgICAgICAgQGluY2x1ZGUgb24taG92ZXIge1xuICAgICAgICAgICAgICAgID4gKiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOiAjN2E2NWUxICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJjphZnRlciB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICAgICAgYm90dG9tOiAtMjBweDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgICAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogM3B4O1xuICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN0E2NUUxO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMDBweCA2N3B4IDAgMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAmLnNlbGVjdGVkOmFmdGVyIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICBib3R0b206IC0yMHB4O1xuICAgICAgICAgICAgbGVmdDogMjBweDtcbiAgICAgICAgICAgIHJpZ2h0OiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAzcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjN0E2NUUxO1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTAwcHggNjdweCAwIDA7XG4gICAgICAgICAgfVxuXG5cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC50cmFpbi1ibG9jay1pdGVtLWZvb3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgfVxuXG59XG5cbi50ei1ibG9jay13aXRoLWJvcmRlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cbiIsIiRicmVha3BvaW50czogKFxuICBcInhzXCI6IDAsXG4gIFwic21cIjogNTc2cHgsXG4gIFwibWRcIjogNzY4cHgsXG4gIFwibGdcIjogOTkycHgsXG4gIFwieGxcIjogMTIwMHB4LFxuICBcInh4bFwiOiAxNDAwcHhcbik7XG5cbkBtaXhpbiB4cyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hzJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gc20ge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdzbScpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1kIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbWQnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBsZyB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ2xnJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4geGwge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4bCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtZG93bigkYnA6IDApIHtcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRicCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWJldHdlZW4oJGJwTWluLCAkYnBNYXgpIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6ICRicE1pbikgYW5kIChtYXgtd2lkdGg6ICRicE1heCkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtb2JpbGUoKSB7XG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IDkyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIGRlc2t0b3AoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIHRhYmxldCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIGFuZCAobWF4LXdpZHRoOiAxMjIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gb24taG92ZXIge1xuICAgIEBtZWRpYSBub3QgYWxsIGFuZCAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBAY29udGVudDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHR6LXNjcm9sbC1iYXItc3R5bGUge1xuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b246aG9yaXpvbnRhbCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2stcGllY2Uge1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBmaXJlZm94LW9ubHkge1xuICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cbiJdfQ== */"] });


/***/ }),

/***/ 42229:
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/results/transport/trains/components/trains-list/trains-list.component.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainsListComponent": () => (/* binding */ TrainsListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _core_components_paginate_component_ts_service_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/components/paginate.component.ts/service.list.component */ 32553);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/modules/core/scroll-service */ 90097);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _trains_section_title_trains_section_title_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../trains-section-title/trains-section-title.component */ 4481);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-infinite-scroll */ 34229);
/* harmony import */ var _trains_list_item_trains_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../trains-list-item/trains-list-item.component */ 76648);
/* harmony import */ var _mob_trains_list_item_mob_trains_list_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mob-trains-list-item/mob-trains-list-item.component */ 37554);










function TrainsListComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](1, "tz-trains-section-title", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("flyType", ctx_r0.section.section)("count", ctx_r0.section.count)("fromLocation", ctx_r0.fromLocation)("toLocation", ctx_r0.toLocation)("selected", ctx_r0.sectionSelected)("isRoundTrip", ctx_r0.isRoundTrip);
} }
function TrainsListComponent_ng_container_3_tz_trains_list_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tz-trains-list-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("trainClassToggle", function TrainsListComponent_ng_container_3_tz_trains_list_item_3_Template_tz_trains_list_item_trainClassToggle_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r6.onTrainListItemClicked(_r3); })("selectedClassChange", function TrainsListComponent_ng_container_3_tz_trains_list_item_3_Template_tz_trains_list_item_selectedClassChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r8.onTrainListItemClicked(_r3); return ctx_r8.selectedClassChange.emit($event); })("selectedTrainChange", function TrainsListComponent_ng_container_3_tz_trains_list_item_3_Template_tz_trains_list_item_selectedTrainChange_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); ctx_r9.onTrainListItemClicked(_r3); return ctx_r9.selectedTrainChange.emit($event); })("trainDetailClosed", function TrainsListComponent_ng_container_3_tz_trains_list_item_3_Template_tz_trains_list_item_trainDetailClosed_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r10.trainDetailClosed.emit($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const train_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("train", train_r2)("bestValueId", ctx_r4.section.bestValueId)("selectedOption", ctx_r4.selectedOption)("showTrainDetail", ctx_r4.showTrainDetail)("isRoundTrip", ctx_r4.isRoundTrip)("isChangeOptions", ctx_r4.isChangeOptions);
} }
function TrainsListComponent_ng_container_3_tz_mob_trains_list_item_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](0, "tz-mob-trains-list-item", 11);
} if (rf & 2) {
    const train_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("totalPassengers", ctx_r5.totalPassengers)("train", train_r2)("isRoundTrip", ctx_r5.isRoundTrip)("selectedOption", ctx_r5.selectedOption)("trainType", ctx_r5.trainType);
} }
const _c0 = function (a0) { return { "tz-mob-selected-inner-border": a0 }; };
function TrainsListComponent_ng_container_3_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TrainsListComponent_ng_container_3_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵreference"](2); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r13.onTrainListItemClicked(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TrainsListComponent_ng_container_3_tz_trains_list_item_3_Template, 1, 6, "tz-trains-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TrainsListComponent_ng_container_3_Template_div_click_4_listener() { const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const train_r2 = restoredCtx.$implicit; const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r15.onShowTrainDetails(train_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](5, TrainsListComponent_ng_container_3_tz_mob_trains_list_item_5_Template, 1, 5, "tz-mob-trains-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](3, _c0, ctx_r1.sectionSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r1.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r1.platformService.isMobileDevice);
} }
class TrainsListComponent extends _core_components_paginate_component_ts_service_list_component__WEBPACK_IMPORTED_MODULE_0__.ServiceListComponent {
    constructor(platformService, scrollService) {
        super();
        this.platformService = platformService;
        this.scrollService = scrollService;
        this.isListCompleted = false;
        this.isRoundTrip = false;
        this.isChangeOptions = false;
        this.hideTitle = false;
        this.totalPassengers = 0;
        this.confirmable = false;
        this.mobShowTrainDetails = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.nextPage = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.selectedTrainChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.selectedClassChange = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.trainDetailClosed = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.sectionSelected = false;
        this.trainType = 'depart';
    }
    ngOnInit() {
        this.setSectionInfo();
    }
    identify(index, item) {
        return item.id;
    }
    onShowTrainDetails(train) {
        this.mobShowTrainDetails.emit(train);
    }
    onScroll($event) {
        if (!this.isListCompleted) {
            if (this.section.limiter !== 1) {
                this.nextPage.emit();
            }
        }
    }
    onTrainListItemClicked(trainListItem) {
        if (!this.confirmable) {
            requestAnimationFrame(() => {
                this.scrollService.scrollToElement(trainListItem);
            });
        }
    }
    setSectionInfo() {
        const option = this.section.section === 'onwardJourney' ? this.selectedOption.onward : this.selectedOption.return;
        if (option) {
            this.sectionSelected = option.selected;
            this.fromLocation = option.fromLocation;
            this.toLocation = option.toLocation;
            this.trainType = 'return';
        }
    }
}
TrainsListComponent.ɵfac = function TrainsListComponent_Factory(t) { return new (t || TrainsListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_1__.PlatformService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_2__.ScrollService)); };
TrainsListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TrainsListComponent, selectors: [["tz-trains-list"]], inputs: { section: "section", selectedOption: "selectedOption", showTrainDetail: "showTrainDetail", isListCompleted: "isListCompleted", isRoundTrip: "isRoundTrip", isChangeOptions: "isChangeOptions", hideTitle: "hideTitle", totalPassengers: "totalPassengers", confirmable: "confirmable" }, outputs: { mobShowTrainDetails: "mobShowTrainDetails", nextPage: "nextPage", selectedTrainChange: "selectedTrainChange", selectedClassChange: "selectedClassChange", trainDetailClosed: "trainDetailClosed" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"]], decls: 4, vars: 8, consts: [[1, "result-block-list", "ticket-trains"], [4, "ngIf"], ["infiniteScroll", "", 1, "trains-list", 3, "scrollWindow", "infiniteScrollDistance", "infiniteScrollThrottle", "fromRoot", "infiniteScrollContainer", "scrolled"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "flyType", "count", "fromLocation", "toLocation", "selected", "isRoundTrip"], [1, "train-list-item", 3, "ngClass", "click"], ["trainListItem", ""], [3, "train", "bestValueId", "selectedOption", "showTrainDetail", "isRoundTrip", "isChangeOptions", "trainClassToggle", "selectedClassChange", "selectedTrainChange", "trainDetailClosed", 4, "ngIf"], [3, "click"], [3, "totalPassengers", "train", "isRoundTrip", "selectedOption", "trainType", 4, "ngIf"], [3, "train", "bestValueId", "selectedOption", "showTrainDetail", "isRoundTrip", "isChangeOptions", "trainClassToggle", "selectedClassChange", "selectedTrainChange", "trainDetailClosed"], [3, "totalPassengers", "train", "isRoundTrip", "selectedOption", "trainType"]], template: function TrainsListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TrainsListComponent_div_1_Template, 2, 6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("scrolled", function TrainsListComponent_Template_div_scrolled_2_listener($event) { return ctx.onScroll($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TrainsListComponent_ng_container_3_Template, 6, 5, "ng-container", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.hideTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("scrollWindow", ctx.infiniteScrollConfig.scrollWindow)("infiniteScrollDistance", ctx.infiniteScrollConfig.infiniteScrollDistance)("infiniteScrollThrottle", ctx.infiniteScrollConfig.infiniteScrollThrottle)("fromRoot", ctx.infiniteScrollConfig.fromRoot)("infiniteScrollContainer", ctx.infiniteScrollConfig.infiniteScrollContainer);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx.section.data)("ngForTrackBy", ctx.identify);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _trains_section_title_trains_section_title_component__WEBPACK_IMPORTED_MODULE_3__.TrainsSectionTitleComponent, ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_8__.InfiniteScrollDirective, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _trains_list_item_trains_list_item_component__WEBPACK_IMPORTED_MODULE_4__.TrainsListItemComponent, _mob_trains_list_item_mob_trains_list_item_component__WEBPACK_IMPORTED_MODULE_5__.MobTrainsListItemComponent], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .train-list-item[_ngcontent-%COMP%] {\n  scroll-margin: 80px;\n}\n[_nghost-%COMP%]   .train-list-item[_ngcontent-%COMP%]:not(:first-of-type) {\n  margin-top: 1.25rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .train-list-item[_ngcontent-%COMP%]:not(:first-of-type) {\n    margin-top: 0.5rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlucy1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy91dGlscy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxPQUFBO0FBREo7QUFHSTtFQUNJLG1CQUFBO0FBRFI7QUFHUTtFQUNJLG1CQUFBO0FBRFo7QUM0Q0k7RUQ1Q0k7SUFLUSxrQkFBQTtFQURkO0FBQ0YiLCJmaWxlIjoidHJhaW5zLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwidXRpbHMvbWl4aW5zXCI7XG5cbjpob3N0IHtcbiAgICBmbGV4OiAxO1xuXG4gICAgLnRyYWluLWxpc3QtaXRlbSB7XG4gICAgICAgIHNjcm9sbC1tYXJnaW46IDgwcHg7XG5cbiAgICAgICAgJjpub3QoOmZpcnN0LW9mLXR5cGUpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG5cblxuICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 4481:
/*!********************************************************************************************************************!*\
  !*** ./src/app/modules/results/transport/trains/components/trains-section-title/trains-section-title.component.ts ***!
  \********************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainsSectionTitleComponent": () => (/* binding */ TrainsSectionTitleComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_transport_trains_train_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/transport/trains/train.utils */ 72583);
/* harmony import */ var _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/block-separator/block-separator.component */ 183);



class TrainsSectionTitleComponent {
    constructor(trainUtilsService) {
        this.trainUtilsService = trainUtilsService;
        this.count = 0;
        this.selected = false;
        this.isRoundTrip = false;
        this.title = '';
    }
    ngOnInit() {
        this.title = this.trainUtilsService.formSectionTitle(this.isRoundTrip, this.selected, this.flyType, this.count, this.fromLocation, this.toLocation);
    }
}
TrainsSectionTitleComponent.ɵfac = function TrainsSectionTitleComponent_Factory(t) { return new (t || TrainsSectionTitleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_modules_transport_trains_train_utils__WEBPACK_IMPORTED_MODULE_0__.TrainUtilsService)); };
TrainsSectionTitleComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: TrainsSectionTitleComponent, selectors: [["tz-trains-section-title"]], inputs: { flyType: "flyType", fromLocation: "fromLocation", toLocation: "toLocation", count: "count", selected: "selected", isRoundTrip: "isRoundTrip" }, decls: 3, vars: 1, consts: [[1, "tz-block-separator-title"]], template: function TrainsSectionTitleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "tz-block-separator");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.title);
    } }, directives: [_shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_1__.BlockSeparatorComponent], styles: ["[_nghost-%COMP%] {\n  flex: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlucy1zZWN0aW9uLXRpdGxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksT0FBQTtBQUNKIiwiZmlsZSI6InRyYWlucy1zZWN0aW9uLXRpdGxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGZsZXg6IDE7XG59XG4iXX0= */"] });


/***/ }),

/***/ 28448:
/*!****************************************************************!*\
  !*** ./src/app/modules/results/transport/trains/train.sort.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainSort": () => (/* binding */ TrainSort)
/* harmony export */ });
const TrainSort = [
    {
        sort: 'bestValue',
        label: 'GENERAL.SORT.BEST_VALUE',
    },
    {
        sort: 'quickest',
        label: 'GENERAL.SORT.QUICKEST',
    },
    {
        sort: 'cheapest',
        label: 'GENERAL.SORT.CHEAPEST',
    },
];


/***/ }),

/***/ 58046:
/*!***************************************************************************!*\
  !*** ./src/app/modules/results/transport/trains/trains-routing.module.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainsRoutingModule": () => (/* binding */ TrainsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _trains_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./trains.component */ 89817);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _trains_component__WEBPACK_IMPORTED_MODULE_0__.TrainsComponent,
    },
];
class TrainsRoutingModule {
}
TrainsRoutingModule.ɵfac = function TrainsRoutingModule_Factory(t) { return new (t || TrainsRoutingModule)(); };
TrainsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TrainsRoutingModule });
TrainsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TrainsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 89817:
/*!**********************************************************************!*\
  !*** ./src/app/modules/results/transport/trains/trains.component.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainsComponent": () => (/* binding */ TrainsComponent)
/* harmony export */ });
/* harmony import */ var _opt_atlassian_pipelines_agent_build_trazler_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 71670);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/base-service-component/base-service.component */ 6371);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _core_constants_trip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/constants/trip */ 16699);
/* harmony import */ var _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/constants/state-from.const */ 54255);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! rxjs/operators */ 32313);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var _train_sort__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./train.sort */ 28448);
/* harmony import */ var _services_modules_transport_trains_train_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/modules/transport/trains/train.utils */ 72583);
/* harmony import */ var _components_mob_train_details_mob_train_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/mob-train-details/mob-train-details.component */ 61031);
/* harmony import */ var _services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/modules/inactivity/filter.service */ 53768);
/* harmony import */ var _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/modules/search/utils/search.utils */ 77235);
/* harmony import */ var _results_filters_results_filters_utils_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../results-filters/results-filters.utils.service */ 47740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_transport_trains_trains_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/modules/transport/trains/trains.service */ 54717);
/* harmony import */ var _services_services_flight_train_search_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @services/services/flight-train-search.service */ 18077);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _results_filters_filters_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../results-filters/filters.component */ 32082);
/* harmony import */ var _common_flight_train_button_toggle_flight_train_button_toggle_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../common/flight-train-button-toggle/flight-train-button-toggle.component */ 51557);
/* harmony import */ var _components_mob_filter_navbar_mob_filter_navbar_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/mob-filter-navbar/mob-filter-navbar.component */ 97008);
/* harmony import */ var _shared_components_results_top_info_block_results_top_info_block_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/components/results-top-info-block/results-top-info-block.component */ 70858);
/* harmony import */ var _results_filters_components_filter_btn_filter_btn_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../results-filters/components/filter-btn/filter-btn.component */ 16722);
/* harmony import */ var _shared_components_price_range_filter_price_range_filter_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../shared/components/price-range-filter/price-range-filter.component */ 89254);
/* harmony import */ var _components_flight_train_skeleton_loader_flight_train_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/flight-train-skeleton-loader/flight-train-skeleton-loader.component */ 31332);
/* harmony import */ var _components_mob_flight_train_skeleton_loader_mob_flight_train_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/mob-flight-train-skeleton-loader/mob-flight-train-skeleton-loader.component */ 81358);
/* harmony import */ var _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @shared/components/block-separator/block-separator.component */ 183);
/* harmony import */ var _components_selected_trains_selected_trains_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/selected-trains/selected-trains.component */ 20878);
/* harmony import */ var _components_trains_list_trains_list_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/trains-list/trains-list.component */ 42229);
/* harmony import */ var _shared_components_service_booking_confirmation_component_service_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @shared/components/service-booking-confirmation-component/service-booking-confirmation.component */ 70832);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../shared/pipes/safe-html.pipe */ 66926);
































const _c0 = ["confirmationComponent"];
const _c1 = ["trainList"];
const _c2 = ["trainListSkeletonLoader"];

function TrainsComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 8)(1, "tz-results-filters", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("filterChanged", function TrainsComponent_div_1_Template_tz_results_filters_filterChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r8);
      const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return ctx_r7.onFilterChanged($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("filter", ctx_r0.trainsFilter)("loading", ctx_r0.loaderService.skeletonLoading)("disabled", ctx_r0.confirmable);
  }
}

function TrainsComponent_div_4_tz_flight_train_button_toggle_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "tz-flight-train-button-toggle", 12);
  }

  if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("selectedButton", "trains")("skeletonLoading", ctx_r9.loaderService.skeletonLoading || ctx_r9.twoTransports.has === null);
  }
}

function TrainsComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, TrainsComponent_div_4_tz_flight_train_button_toggle_1_Template, 1, 2, "tz-flight-train-button-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "tz-mob-filter-navbar", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("openFilter", function TrainsComponent_div_4_Template_tz_mob_filter_navbar_openFilter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return ctx_r10.onOpenFilterModal();
    })("resetFilter", function TrainsComponent_div_4_Template_tz_mob_filter_navbar_resetFilter_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return ctx_r12.onResetFilter();
    })("openSort", function TrainsComponent_div_4_Template_tz_mob_filter_navbar_openSort_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return ctx_r13.mobOpenSort();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r1.twoTransports.has || ctx_r1.twoTransports.has === null);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("sortKey", ctx_r1.filterQueryParams.sort_by)("sortByOptions", ctx_r1.sortByOptions)("isEnableClearFilter", ctx_r1.isEnableClearFilter)("filtersCount", ctx_r1.selectedFiltersCount)("skeletonLoading", ctx_r1.loaderService.skeletonLoading || ctx_r1.notComplete);
  }
}

function TrainsComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 13)(1, "tz-results-top-info-block", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](3, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](3, 1, ctx_r2.serviceTitle), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeHtml"]);
  }
}

function TrainsComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 19)(1, "tz-filter-btn", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("clickFilter", function TrainsComponent_div_8_div_1_Template_tz_filter_btn_clickFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r17);
      const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return ctx_r16.onOpenFilterPopup();
    })("clearFilter", function TrainsComponent_div_8_div_1_Template_tz_filter_btn_clearFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r17);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return ctx_r18.onResetFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("filterCount", ctx_r14.filterCount(ctx_r14.trainsFilter));
  }
}

function TrainsComponent_div_8_tz_flight_train_button_toggle_4_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "tz-flight-train-button-toggle", 12);
  }

  if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("selectedButton", "trains")("skeletonLoading", ctx_r15.loaderService.skeletonLoading || ctx_r15.twoTransports.has === null);
  }
}

function TrainsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, TrainsComponent_div_8_div_1_Template, 2, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "tz-price-range-filter", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("sortChange", function TrainsComponent_div_8_Template_tz_price_range_filter_sortChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r20);
      const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return ctx_r19.sortTrains($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, TrainsComponent_div_8_tz_flight_train_button_toggle_4_Template, 1, 2, "tz-flight-train-button-toggle", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](2, 6, ctx_r3.isMobile$));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("sort", ctx_r3.filterQueryParams.sort_by)("options", ctx_r3.sortByOptions)("disabled", ctx_r3.confirmable)("skeletonLoading", ctx_r3.loaderService.skeletonLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r3.twoTransports.has || ctx_r3.twoTransports.has === null);
  }
}

function TrainsComponent_ng_container_9_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 22, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](2, "tz-flight-train-skeleton-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
}

function TrainsComponent_ng_container_9_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", null, 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](2, "tz-mob-flight-train-skeleton-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
}

function TrainsComponent_ng_container_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, TrainsComponent_ng_container_9_div_1_Template, 3, 0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](3, TrainsComponent_ng_container_9_div_3_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](2, 2, ctx_r4.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](4, 4, ctx_r4.platformService.isMobileDevice$));
  }
}

function TrainsComponent_ng_container_10_ng_container_1_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "tz-selected-trains", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("removedItem", function TrainsComponent_ng_container_10_ng_container_1_div_4_Template_tz_selected_trains_removedItem_2_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
      return ctx_r29.onRemovedSelectedTrain($event);
    })("changeOptions", function TrainsComponent_ng_container_10_ng_container_1_div_4_Template_tz_selected_trains_changeOptions_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
      return ctx_r31.onChangeOptions();
    })("changeTickets", function TrainsComponent_ng_container_10_ng_container_1_div_4_Template_tz_selected_trains_changeTickets_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r30);
      const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
      return ctx_r32.onChangeTickets();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("trainItems", ctx_r28.trainCartData.items)("serviceList", true);
  }
}

function TrainsComponent_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "div", 27)(2, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, TrainsComponent_ng_container_10_ng_container_1_div_4_Template, 3, 2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate"](ctx_r25.getTrainTitle());
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx_r25.isChangeOptions);
  }
}

function TrainsComponent_ng_container_10_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](1, "tz-trains-list", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("trainDetailClosed", function TrainsComponent_ng_container_10_ng_container_4_Template_tz_trains_list_trainDetailClosed_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r35);
      const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return ctx_r34.onTrainDetailClosed($event);
    })("selectedClassChange", function TrainsComponent_ng_container_10_ng_container_4_Template_tz_trains_list_selectedClassChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r35);
      const ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return ctx_r36.onClassSelection($event);
    })("selectedTrainChange", function TrainsComponent_ng_container_10_ng_container_4_Template_tz_trains_list_selectedTrainChange_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r35);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return ctx_r37.onTrainSelection($event);
    })("mobShowTrainDetails", function TrainsComponent_ng_container_10_ng_container_4_Template_tz_trains_list_mobShowTrainDetails_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r35);
      const ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return ctx_r38.mobShowTrainDetails($event);
    })("nextPage", function TrainsComponent_ng_container_10_ng_container_4_Template_tz_trains_list_nextPage_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r35);
      const section_r33 = restoredCtx.$implicit;
      const ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
      return ctx_r39.nextPage(section_r33);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const section_r33 = ctx.$implicit;
    const ctx_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("totalPassengers", ctx_r27.totalPassengers)("section", section_r33)("selectedOption", ctx_r27.selectedOption)("showTrainDetail", ctx_r27.showDetails)("isRoundTrip", ctx_r27.isRoundTrip)("isChangeOptions", ctx_r27.isChangeOptions)("hideTitle", ctx_r27.isChangeOptions)("confirmable", ctx_r27.confirmable);
  }
}

function TrainsComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, TrainsComponent_ng_container_10_ng_container_1_Template, 5, 2, "ng-container", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](2, "div", 24, 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, TrainsComponent_ng_container_10_ng_container_4_Template, 2, 8, "ng-container", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx_r5.trainCartData && ctx_r5.trainCartData.items && ctx_r5.trainCartData.items.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngForOf", ctx_r5.trainSections);
  }
}

function TrainsComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r42 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 30, 31)(2, "tz-service-booking-confirmation", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("cancelSelection", function TrainsComponent_div_11_Template_tz_service_booking_confirmation_cancelSelection_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r42);
      const ctx_r41 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return ctx_r41.onCancelSelection();
    })("submitBooking", function TrainsComponent_div_11_Template_tz_service_booking_confirmation_submitBooking_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r42);
      const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return ctx_r43.onSubmitBooking();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
  }
}

class TrainsComponent extends _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_1__.BaseServiceComponent {
  constructor(trainService, flightTrainSearchService, injector, trainUtilsService) {
    super(injector);
    this.trainService = trainService;
    this.flightTrainSearchService = flightTrainSearchService;
    this.injector = injector;
    this.trainUtilsService = trainUtilsService;
    this.serviceId = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__.ServiceId.TRAIN;
    this.trainListMetadata = {};
    this.trainSections = [];
    this.trainsFilter = [];
    this.twoWayFlight = false;
    this.twoTransports = {
      has: null
    };
    this.selectedOption = {};
    this.showDetails = {
      onwardJourney: false,
      returnJourney: false
    };
    this.showSidebar = false;
    this.sortByOptions = _train_sort__WEBPACK_IMPORTED_MODULE_6__.TrainSort;
    this.filterQueryParams = {};
    this.isRoundTrip = false;
    this.isChangeOptions = false;
    this.serviceTitle = '';
    this.totalPassengers = 0;
    this.selectedFiltersCount = 0;
    this.editListener = -1;
    this.repriceListenerId = -1;
    this.resultsCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_28__.Subject();
    this.returnTrainChange$ = new rxjs__WEBPACK_IMPORTED_MODULE_28__.Subject();
    this.journeyType = this.searchDataService.travelType;
    this.isMobile$ = this.screenSizeDetectorService.isMobile;
    this.isNextSummary = this.nextIsSummary();
    this.flightTrainSearchService.twoTransports.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.takeUntil)(this.destroy$)).subscribe(twoTransports => {
      console.log('got:', twoTransports);
      this.twoTransports = twoTransports;
    });
  }

  get isEnableClearFilter() {
    return _services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_9__.FilterService.enableClearAll(this.trainsFilter);
  }

  ngOnInit() {
    this.scrollToTop();
    this.initializeTrainComponent(true);

    if (this.searchRunning()) {
      this.showSkeletonLoader(true);
    } else {
      this.loadTrainsData(true);
    }

    this.trainService.updateTrainSelection.subscribe(trainSelection => {
      this.mobUpdateTrainSelection(trainSelection);
    });
  }

  ngOnDestroy() {
    this.trainService.setTrainSelections(this.selectedOption);
    this.listenersService.unregisterListener(this.editListener);
    this.listenersService.unregisterListener(this.repriceListenerId);
    this.destroy$.next(false);
    this.destroy$.complete();
  }

  onFilterChanged($event) {
    this.scrollToServiceContainer();
    this.resetPaginationParameters();
    this.trainsFilter = $event;
    this.filterTrains().subscribe(() => {});
  }

  onOpenFilterPopup() {
    const filter = new rxjs__WEBPACK_IMPORTED_MODULE_30__.BehaviorSubject(this.trainsFilter); // eslint-disable-next-line @typescript-eslint/no-shadow

    filter.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.takeUntil)(this.destroy$)).subscribe(filter => {
      this.trainsFilter = filter;
      this.filterTrains().subscribe(() => {});
    });
    this.openFilterDialog(filter, this.resultsCount$);
    this.showSidebarMobile();
  }

  sortTrains(sortValue) {
    this.resetPaginationParameters();
    _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_10__.SearchUtilsService.saveSortingValue(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__.ServiceId.TRAIN, sortValue);
    this.filterQueryParams.sort_by = sortValue;
    this.loadTrainsData();
  }

  onSubmitBooking() {
    this.trainService.addTrainToCart(this.selectedOption).subscribe(response => {
      this.selectedOption = {};
      this.userSearchService.searchCheckDep(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__.ServiceId.TRAIN, this.nextIsSummary(), false, false, true);
    }, error => {
      //this.reInit();
      console.log(error);
    });
  }

  onCancelSelection() {
    this.scrollToServiceContainer();
    this.trainService.clearTrainsSelection();
    this.selectedOption = {};
    this.reInit();
  }

  onTrainSelection(selectedTrain) {
    this.scrollToServiceContainer();
    this.handleClassChangeOfSelectedTrain(selectedTrain);
  }

  onClassSelection(selectedTrain) {
    if (selectedTrain.selected) {
      this.handleClassChangeOfSelectedTrain(selectedTrain);
      return;
    }

    if (selectedTrain.journeyType === 'onwardJourney') {
      this.onOnwardChange(selectedTrain);
    } else {
      this.onReturnChange(selectedTrain);
    }
  }

  onTrainDetailClosed(journeyType) {
    if (journeyType === 'onwardJourney') {
      this.showDetails.onwardJourney = false;
    } else {
      this.showDetails.returnJourney = false;
    }
  }

  onRemovedSelectedTrain(optionId) {
    this.removeService(this.serviceId, optionId).then(isRemoved => {
      console.log('remove success');
    }, error => {
      console.error(error);
    });
  }

  getTrainTitle() {
    return this.trainUtilsService.getSelectedTitle(this.trainCartData);
  }

  onChangeOptions() {
    if (this.trainCartData && this.trainCartData.items) {
      this.filterQueryParams.journey_id = this.trainCartData.items[0].selectedItem.data.onward.groupId;
      this.filterQueryParams.onwardId = this.trainCartData.items[0].selectedItem.id;

      if (this.isRoundTrip && this.trainCartData.items.length > 1) {
        this.filterQueryParams.returnId = this.trainCartData.items[1].selectedItem.id;
      }

      this.isChangeOptions = true;
      this.filterTrains(true).subscribe(() => {
        if (this.platformService.isMobileDevice) {
          this.mobChangeOptions();
        }
      });
    }
  }

  onChangeTickets() {
    this.scrollToTrainsList();
  }

  onOpenFilterModal() {
    const filters = new rxjs__WEBPACK_IMPORTED_MODULE_30__.BehaviorSubject(this.trainsFilter);
    filters.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.takeUntil)(this.destroy$)).subscribe(filter => {
      this.trainsFilter = filter;
      this.filterTrains().subscribe(() => {});
    });
    this.openFilterModal(filters, this.resultsCount$);
  }

  onResetFilter() {
    const filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_28__.Subject();
    filters$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.takeUntil)(this.destroy$)).subscribe(filter => {
      this.trainsFilter = filter;
      this.filterTrains().subscribe(() => {});
    });
    _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_1__.BaseServiceComponent.resetFilter(this.trainsFilter, filters$);
  }

  mobOpenSort() {
    const sort$ = new rxjs__WEBPACK_IMPORTED_MODULE_28__.Subject();
    sort$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.takeUntil)(this.destroy$)).subscribe(sortKey => {
      this.sortTrains(sortKey);
    });
    this.openSortMob(this.sortByOptions, this.filterQueryParams.sort_by, sort$);
  }

  mobShowTrainDetails(train) {
    var _this = this;

    return (0,_opt_atlassian_pipelines_agent_build_trazler_app_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      const onwardTrain = _this.selectedOption.onward && train.id !== _this.selectedOption.onward.id ? _this.trainSections[0].data[0] : null;
      const modal = yield _this.modalService.createDetailsPage(_components_mob_train_details_mob_train_details_component__WEBPACK_IMPORTED_MODULE_8__.MobTrainDetailsComponent, {
        data: {
          train,
          selectedOption: _this.selectedOption,
          onwardTrain,
          passengersNumber: _this.totalPassengers
        },
        title: 'FLIGHT_TRAIN.CHOOSE_DEPART',
        isHeaderBottomDivider: false
      });

      if (modal.data) {
        _this.onTrainSelection(modal.data.selectedTrain);

        if (modal.data.isConfirmable || !_this.twoWayFlight) {
          _this.onSubmitBooking();
        }
      }
    })();
  }

  nextPage(section) {
    if (!this.loading) {
      this.loading = true;
      const {
        onwardId,
        returnId
      } = this.filterQueryParams;
      const params = {
        onwardId,
        returnId,
        limit: section.increment,
        start: onwardId !== '' ? section.data.length + 1 : section.data.length,
        sortBy: this.filterQueryParams.sort_by
      };
      this.trainService.paginate(this.serviceId, params).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_31__.finalize)(() => {
        this.loading = false;
      })).subscribe(trains => {
        section.data = section.data.concat(trains);

        if (trains.length < section.increment) {
          this.isListCompleted = true;
        } else {
          this.start += section.limiter;
        }
      });
    }
  }

  mobChangeOptions() {
    const data = {
      train: this.trainSections[0].data[0],
      selectedOption: null,
      isCartItems: true,
      passengersNumber: this.totalPassengers,
      returnTrainChange$: this.returnTrainChange$
    };

    if (this.isRoundTrip && this.trainCartData && this.trainCartData.items.length > 1) {
      data.onwardTrain = this.trainSections[1].data[0];
    }

    this.modalService.createDetailsPage(_components_mob_train_details_mob_train_details_component__WEBPACK_IMPORTED_MODULE_8__.MobTrainDetailsComponent, {
      data
    }).then(modal => {
      if (modal.data) {
        if (!(this.isRoundTrip && this.trainCartData && this.trainCartData.items.length > 1)) {
          this.onTrainSelection(modal.data.selectedTrain);
        }

        if (modal.data.selectedOption) {
          this.onTrainSelection(modal.data.selectedOption.return);
        }

        if (modal.data.isConfirmable || !this.twoWayFlight) {
          this.onSubmitBooking();
        }
      }

      this.onCancelSelection();
    });
  }

  mobUpdateTrainSelection(selectedTrain) {
    this.onTrainSelection(selectedTrain);

    if (this.isRoundTrip && this.trainCartData && this.trainCartData.items.length > 1) {
      this.returnTrainChange$.next(this.trainSections[1].data[0]);
    }
  }

  handleExtraParams() {
    const state = history.state;

    if (state && state.extra) {
      for (const extraAction in state.extra) {
        if (state.extra.hasOwnProperty(extraAction)) {
          switch (extraAction) {
            case 'changeOptions':
              this.onChangeOptions();
              break;

            case 'changeTickets':
              this.reInit();
              this.scrollToTrainsList();
              break;
          }
        }
      }
    }
  }

  initializeTrainComponent(isInit) {
    var _a;

    this.twoWayFlight = this.journeyType === _core_constants_trip__WEBPACK_IMPORTED_MODULE_4__.Trip.ROUND_TRIP;
    this.initSearchParams();
    this.getCartServiceData();

    if (this.shouldPreserveSelection()) {
      if (!((_a = this.trainCartData) === null || _a === void 0 ? void 0 : _a.items.length)) {
        this.loadSelection();
      }
    }

    this.setSortingValue();

    if (isInit) {
      this.editListener = this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_3__.ListenerId.LISTEN_EDIT_TRAIN, this.loadTrainsData.bind(this, false), this);
      this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.takeUntil)(this.destroy$)).subscribe(() => {
        this.initializeTrainComponent(false);
      });
      this.currencyService.selectedCurrencySubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.takeUntil)(this.destroy$)).subscribe(() => {
        this.loadTrainsData(false);
      });
      this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_32__.skip)(1), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_29__.takeUntil)(this.destroy$)).subscribe(() => {
        this.serviceTitle = this.formServiceTitle(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__.ServiceId.FLIGHT_TRAIN, this.twoWayFlight, this.serviceId);
        this.loadTrainsData(false);
      });
      this.repriceListenerId = this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_3__.ListenerId.LISTEN_REPRICED, this.getCartServiceData, this);
    }
  }

  reInit() {
    this.isChangeOptions = false;
    this.trainService.setTrainSelections({});

    if (this.shouldPreserveSelection()) {
      this.loadSelection();
    }
    /* this.filterQueryParams.journey_id = '';
    this.filterQueryParams.onwardId = '';
    this.filterQueryParams.returnId = '';*/


    this.initSearchParams();
    this.filterQueryParams.refreshFilter = true;
    this.filterTrains().subscribe(() => {});
  }

  trainSelection(selectedTrain) {
    if (selectedTrain.selected) {
      this.filterQueryParams.journey_id = selectedTrain.groupId;
    }

    this.filterQueryParams.refreshFilter = true;

    if (selectedTrain.journeyType === 'onwardJourney') {
      this.onOnwardChange(selectedTrain);
    } else {
      this.onReturnChange(selectedTrain);
    }

    this.trainService.setTrainSelections(this.selectedOption);
    this.filterTrains(!!(this.isRoundTrip && this.filterQueryParams.onwardId && this.filterQueryParams.returnId) || !!(!this.isRoundTrip && this.filterQueryParams.onwardId)).subscribe(() => {});
  }

  onOnwardChange(selectedTrain) {
    this.selectedOption = Object.assign(Object.assign({}, this.selectedOption), {
      onward: selectedTrain
    });
    this.filterQueryParams.onwardId = selectedTrain.selected ? selectedTrain.id : '';
    this.showDetails.onwardJourney = selectedTrain.showDetails || false;
  }

  onReturnChange(selectedTrain) {
    this.selectedOption = Object.assign(Object.assign({}, this.selectedOption), {
      return: selectedTrain
    });
    this.filterQueryParams.returnId = selectedTrain.selected ? selectedTrain.id : '';
    this.showDetails.returnJourney = selectedTrain.showDetails || false;
  }

  initSearchParams() {
    this.filterQueryParams = {
      sort_by: 'bestValue',
      journey_id: '',
      onwardId: '',
      returnId: ''
    };
  }

  handleTrainsDataResponse(trainsResponse, keepSelected) {
    var _a, _b, _c, _d, _e, _f, _g, _h;

    this.filterQueryParams.refreshFilter = false;
    this.trainsFilter = trainsResponse.ogs;
    this.filterService.filterChange$.next(trainsResponse.ogs);
    this.selectedFiltersCount = _results_filters_results_filters_utils_service__WEBPACK_IMPORTED_MODULE_11__.ResultsFiltersUtils.selectedFiltersCounter(this.trainsFilter);

    if (keepSelected) {
      if ((trainsResponse === null || trainsResponse === void 0 ? void 0 : trainsResponse.data[1]) && ((_a = trainsResponse.data[1]) === null || _a === void 0 ? void 0 : _a.data[0])) {
        this.returnTrainChange$.next(trainsResponse.data[1].data[0]);
      }

      this.trainSections = trainsResponse.data;

      if (!this.trainService.getTrainSelections().onward) {
        if (this.isRoundTrip) {
          this.trainService.setTrainSelections({
            onward: _services_modules_transport_trains_train_utils__WEBPACK_IMPORTED_MODULE_7__.TrainUtilsService.buildTrainSelection((_b = this.trainCartData) === null || _b === void 0 ? void 0 : _b.items[0].selectedItem),
            return: _services_modules_transport_trains_train_utils__WEBPACK_IMPORTED_MODULE_7__.TrainUtilsService.buildTrainSelection((_c = this.trainCartData) === null || _c === void 0 ? void 0 : _c.items[1].selectedItem),
            dataId: (_e = (_d = this.trainCartData) === null || _d === void 0 ? void 0 : _d.items[0]) === null || _e === void 0 ? void 0 : _e.dataId
          });
        } else {
          this.trainService.setTrainSelections({
            onward: _services_modules_transport_trains_train_utils__WEBPACK_IMPORTED_MODULE_7__.TrainUtilsService.buildTrainSelection((_f = this.trainCartData) === null || _f === void 0 ? void 0 : _f.items[0].selectedItem),
            dataId: (_h = (_g = this.trainCartData) === null || _g === void 0 ? void 0 : _g.items[0]) === null || _h === void 0 ? void 0 : _h.dataId
          });
        }
      }

      if (this.shouldPreserveSelection() || keepSelected) {
        this.loadSelection();
      }
    } else {
      this.trainSections = this.filterTrainsRemoveCartItem(trainsResponse.data);
    }

    this.checkConfirmable();
    const {
      count,
      selectedID,
      increment,
      limiter
    } = trainsResponse;
    this.trainListMetadata = {
      count,
      selectedID,
      increment
    };
    this.start = limiter;
    this.resultsCount$.next(count);
  }

  filterTrainsRemoveCartItem(trains) {
    var _a, _b, _c;

    if (((_a = this.trainCartData) === null || _a === void 0 ? void 0 : _a.items) && ((_b = this.trainCartData) === null || _b === void 0 ? void 0 : _b.items.length) > 0) {
      const cartIds = [this.trainCartData.items[0].selectedItem.id];

      if (((_c = this.trainCartData) === null || _c === void 0 ? void 0 : _c.items.length) > 1) {
        cartIds.push(this.trainCartData.items[1].selectedItem.id);
      }

      return this.trainService.filterTrainsRemoveCartItem(trains, cartIds);
    }

    return trains;
  }

  loadTrainsData(checkConsistency = false) {
    const search = this.searchDataService.getSearch(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__.ServiceId.FLIGHT_TRAIN);
    this.totalPassengers = search.passengers.total;
    this.serviceTitle = this.formServiceTitle(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__.ServiceId.FLIGHT_TRAIN, this.twoWayFlight, this.serviceId);
    this.checkResultsAvailable(this.serviceId);
    this.loaderService.skeletonLoading = true;
    this.trainService.searchServiceData(this.serviceId, this.filterQueryParams, checkConsistency).subscribe(trainsResponse => {
      var _a;

      this.trainService.minTrainPrice = trainsResponse.minimalPrice;
      this.isListCompleted = false;
      this.handleTrainsDataResponse(trainsResponse);
      this.loaderService.skeletonLoading = false;
      const searchData = this.searchDataService.getSearchData(this.serviceId);

      if (searchData === null || searchData === void 0 ? void 0 : searchData.tripCal) {
        this.isRoundTrip = (_a = searchData.tripCal) === null || _a === void 0 ? void 0 : _a.twoDates;
      } else {
        this.isRoundTrip = false;
      }

      this.handleExtraParams();

      if (!trainsResponse.count && !this.filterCount(trainsResponse.ogs)) {
        this.trainService.checkServiceFailedAndNotify(this.serviceId);
      }

      setTimeout(() => {
        console.log('set prerender ready');
        window.prerenderReady = true;
      }, 1500);
    }, error => {
      this.loaderService.skeletonLoading = false;
    });
  }

  filterTrains(keepSelected) {
    this.loaderService.skeletonLoading = true;
    return this.trainService.filterServiceData(this.serviceId, this.filterQueryParams, this.trainsFilter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_33__.tap)(trainsResponse => {
      this.handleTrainsDataResponse(trainsResponse, keepSelected);
      this.loaderService.skeletonLoading = false;
    }));
  }

  getCartServiceData() {
    this.trainCartData = this.trainService.getSelectedTrainsFromCart();
  }

  nextIsSummary() {
    var _a, _b;

    const state = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state;
    const from = state ? state['from'] : '';
    return from === _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_5__.StateFrom.SUMMARY || from === _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_5__.StateFrom.TAB;
  }

  showSidebarMobile() {
    this.showSidebar = true;
  }

  checkConfirmable() {
    var _a, _b, _c;

    if (this.twoWayFlight) {
      this.confirmable = !!((_a = this.selectedOption.onward) === null || _a === void 0 ? void 0 : _a.id) && !!((_b = this.selectedOption.return) === null || _b === void 0 ? void 0 : _b.id);
    } else {
      this.confirmable = !!((_c = this.selectedOption.onward) === null || _c === void 0 ? void 0 : _c.id);
    }

    if (this.confirmable) {
      this.scrollToConfirmationBlock();
    }
  }

  changeTrainClass(selectedTrain) {
    let selectedTrainClass;
    const selectedTripTrain = selectedTrain.journeyType === 'onwardJourney' ? this.selectedOption.return : this.selectedOption.onward;

    if (!selectedTripTrain) {
      return;
    }

    const selectTrainClass = trainClasses => {
      for (const trainClasse of trainClasses) {
        if (trainClasse.groupId === selectedTrain.groupId) {
          if (trainClasse.trainClass.tzClass === selectedTrain.tzClass) {
            if (trainClasse.trainClass.tzSubClass === '') {
              selectedTrainClass = trainClasse;
              return;
            }

            if (trainClasse.trainClass.tzSubClass === selectedTrain.tzSubClass) {
              selectedTrainClass = trainClasse; // check for same class available

              return;
            }

            selectedTrainClass = trainClasse; // incase not found matching subClass, choose from available class
          }

          if (!selectedTrainClass || selectedTrainClass === null) {
            selectedTrainClass = trainClasse; //otherwise pick the first available class
          }
        }
      }
    };

    for (const trainSection of this.trainSections) {
      if (trainSection.section === selectedTrain.journeyType) {
        continue;
      }

      for (const train of trainSection.data) {
        for (const trainClasse of train.trainClasses) {
          if (trainClasse.id === (selectedTripTrain === null || selectedTripTrain === void 0 ? void 0 : selectedTripTrain.classId)) {
            selectTrainClass(train.trainClasses);
          }
        }
      }
    }

    if (selectedTripTrain && selectedTrainClass) {
      const changedTrainSelection = Object.assign(Object.assign({}, selectedTripTrain), {
        classId: selectedTrainClass.id,
        groupId: selectedTrainClass.groupId,
        tripId: selectedTrainClass.tripID,
        tzClass: selectedTrainClass.trainClass.tzClass,
        tzSubClass: selectedTrainClass.trainClass.tzSubClass
      });

      if (selectedTripTrain.journeyType === 'onwardJourney') {
        this.onOnwardChange(changedTrainSelection);
      } else {
        this.onReturnChange(changedTrainSelection);
      }

      this.trainSelection(selectedTrain);
    }
  }

  openClassChangeAlert(selectedTrain) {
    const journeyType = this.translateService.instant('TRAIN.' + (selectedTrain.journeyType === 'onwardJourney' ? 'RETURN' : 'ONWARD'));
    this.dialogService.openConfirmationDialog({
      title: this.translateService.instant('POPUPS.CLASS_SELECTION.TITLE'),
      multipleContent: [this.translateService.instant('POPUPS.CLASS_SELECTION.MESSAGE', {
        journeyType: journeyType.toLowerCase(),
        tzClass: selectedTrain.tzClass
      })],
      cancelBtnTitle: this.translateService.instant('POPUPS.CANCEL'),
      confirmBtnTitle: this.translateService.instant('POPUPS.CONTINUE')
    }).afterClosed().subscribe(changeClass => {
      if (!changeClass) {
        return;
      }

      this.changeTrainClass(selectedTrain);
    });
  }

  isClassChangeAllowed(selectedTrain) {
    const enable = true;
    const selected = this.selectedOption;

    if (!selected.onward || selected.onward.id === '' || !selected.return || selected.return.id === '') {
      return enable;
    }

    if (this.filterQueryParams.journey_id === selectedTrain.groupId) {
      return enable;
    }

    return !enable;
  }

  handleClassChangeOfSelectedTrain(selectedTrain) {
    var _a;

    if (selectedTrain.journeyType === 'onwardJourney' && (!this.isRoundTrip || !((_a = this.selectedOption.return) === null || _a === void 0 ? void 0 : _a.selected))) {
      this.selectedOption.return = {};
      this.trainSelection(selectedTrain);
      return;
    }

    const allowClassChange = this.isClassChangeAllowed(selectedTrain);

    if (allowClassChange || !selectedTrain.selected) {
      this.trainSelection(selectedTrain);
    } else {
      this.openClassChangeAlert(selectedTrain);
    }
  }

  loadSelection() {
    this.selectedOption = this.trainService.getTrainSelections();

    if (this.selectedOption.onward && this.selectedOption.onward.selected) {
      this.onOnwardChange(this.selectedOption.onward);
      this.filterQueryParams.journey_id = this.selectedOption.onward.groupId;
    }

    if (this.selectedOption.return && this.selectedOption.return.selected) {
      this.onReturnChange(this.selectedOption.return);
      this.filterQueryParams.journey_id = this.selectedOption.return.groupId;
    }
  }

  setSortingValue() {
    const sort = _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_10__.SearchUtilsService.getSortingValue(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_2__.ServiceId.TRAIN);

    if (sort) {
      this.filterQueryParams.sort_by = sort;
    }
  }

  scrollToConfirmationBlock() {
    setTimeout(() => {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          this.scrollToElement(this.confirmationComponent, {
            block: 'end'
          });
        });
      });
    }, 500);
  }

  scrollToTrainsList() {
    if (this.trainListSkeletonLoaderElementReference) {
      this.scrollToElement(this.trainListSkeletonLoaderElementReference);
    } else {
      this.scrollToElement(this.trainListElementReference);
    }
  }

  shouldPreserveSelection() {
    const state = history.state;

    if (state && state.extra) {
      if (state.extra && state.extra.hasOwnProperty('preserveSelection')) {
        return true;
      }
    }

    return false;
  }

  isChangeOptionsFromBasket() {
    const state = history.state;

    if (state && state.extra) {
      if (state.extra && state.extra.hasOwnProperty('changeOptions')) {
        return true;
      }
    }

    return false;
  }

}

TrainsComponent.ɵfac = function TrainsComponent_Factory(t) {
  return new (t || TrainsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_services_modules_transport_trains_trains_service__WEBPACK_IMPORTED_MODULE_12__.TrainService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_services_services_flight_train_search_service__WEBPACK_IMPORTED_MODULE_13__.FlightTrainSearchService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_27__.Injector), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](_services_modules_transport_trains_train_utils__WEBPACK_IMPORTED_MODULE_7__.TrainUtilsService));
};

TrainsComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineComponent"]({
  type: TrainsComponent,
  selectors: [["tz-trains"]],
  viewQuery: function TrainsComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.confirmationComponent = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.trainListElementReference = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵloadQuery"]()) && (ctx.trainListSkeletonLoaderElementReference = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵInheritDefinitionFeature"]],
  decls: 12,
  vars: 12,
  consts: [[1, "tz-container", "trains-container", "flex", 3, "hidden"], ["class", "tz-filter-container", 4, "ngIf"], [1, "trains-results-container"], [4, "ngIf"], ["class", "result-top-info-block-item", 4, "ngIf"], [1, "trains-list-container"], ["class", "trains-top-navbar flex", 4, "ngIf"], ["class", "confirm-and-continue-block", 4, "ngIf"], [1, "tz-filter-container"], [3, "filter", "loading", "disabled", "filterChanged"], [3, "selectedButton", "skeletonLoading", 4, "ngIf"], [3, "sortKey", "sortByOptions", "isEnableClearFilter", "filtersCount", "skeletonLoading", "openFilter", "resetFilter", "openSort"], [3, "selectedButton", "skeletonLoading"], [1, "result-top-info-block-item"], ["blockType", "blue"], [3, "innerHTML"], [1, "trains-top-navbar", "flex"], ["class", "trains-filter-btn inline-flex", 4, "ngIf"], [3, "sort", "options", "disabled", "skeletonLoading", "sortChange"], [1, "trains-filter-btn", "inline-flex"], [3, "filterCount", "clickFilter", "clearFilter"], ["class", "train-results-skeleton-loader flex", 4, "ngIf"], [1, "train-results-skeleton-loader", "flex"], ["trainListSkeletonLoader", ""], [1, "train-results", "flex", "flex-column"], ["trainList", ""], [4, "ngFor", "ngForOf"], [1, "tz-block-separator-title"], [3, "trainItems", "serviceList", "removedItem", "changeOptions", "changeTickets"], [3, "totalPassengers", "section", "selectedOption", "showTrainDetail", "isRoundTrip", "isChangeOptions", "hideTitle", "confirmable", "trainDetailClosed", "selectedClassChange", "selectedTrainChange", "mobShowTrainDetails", "nextPage"], [1, "confirm-and-continue-block"], ["confirmationComponent", ""], [3, "cancelSelection", "submitBooking"]],
  template: function TrainsComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](1, TrainsComponent_div_1_Template, 2, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](4, TrainsComponent_div_4_Template, 3, 6, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](6, TrainsComponent_div_6_Template, 4, 3, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](8, TrainsComponent_div_8_Template, 5, 8, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](9, TrainsComponent_ng_container_9_Template, 5, 6, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](10, TrainsComponent_ng_container_10_Template, 5, 2, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](11, TrainsComponent_div_11_Template, 3, 0, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("hidden", ctx.noResultAvailable);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](2, 8, ctx.isMobile$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpipeBind1"](5, 10, ctx.platformService.isMobileDevice$));
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx.platformService.isMobileDevice);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.loaderService.skeletonLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", !ctx.loaderService.skeletonLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.confirmable && !ctx.platformService.isMobileDevice);
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_34__.NgIf, _results_filters_filters_component__WEBPACK_IMPORTED_MODULE_14__.FiltersComponent, _common_flight_train_button_toggle_flight_train_button_toggle_component__WEBPACK_IMPORTED_MODULE_15__.FlightTrainButtonToggleComponent, _components_mob_filter_navbar_mob_filter_navbar_component__WEBPACK_IMPORTED_MODULE_16__.MobFilterNavbarComponent, _shared_components_results_top_info_block_results_top_info_block_component__WEBPACK_IMPORTED_MODULE_17__.ResultsTopInfoBlockComponent, _results_filters_components_filter_btn_filter_btn_component__WEBPACK_IMPORTED_MODULE_18__.FilterBtnComponent, _shared_components_price_range_filter_price_range_filter_component__WEBPACK_IMPORTED_MODULE_19__.PriceRangeFilterComponent, _components_flight_train_skeleton_loader_flight_train_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_20__.FlightTrainSkeletonLoaderComponent, _components_mob_flight_train_skeleton_loader_mob_flight_train_skeleton_loader_component__WEBPACK_IMPORTED_MODULE_21__.MobFlightTrainSkeletonLoaderComponent, _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_22__.BlockSeparatorComponent, _components_selected_trains_selected_trains_component__WEBPACK_IMPORTED_MODULE_23__.SelectedTrainsComponent, _angular_common__WEBPACK_IMPORTED_MODULE_34__.NgForOf, _components_trains_list_trains_list_component__WEBPACK_IMPORTED_MODULE_24__.TrainsListComponent, _shared_components_service_booking_confirmation_component_service_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_25__.ServiceBookingConfirmationComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_34__.AsyncPipe, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_26__.SafeHtmlPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n[_nghost-%COMP%]   .trains-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n  flex: 1;\n}\n[_nghost-%COMP%]   .trains-container[_ngcontent-%COMP%]   .trains-top-navbar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n}\n[_nghost-%COMP%]   .trains-container[_ngcontent-%COMP%]   .trains-top-navbar[_ngcontent-%COMP%]   .trains-filter-btn[_ngcontent-%COMP%] {\n  margin-right: 1.5rem;\n}\n[_nghost-%COMP%]   .trains-container[_ngcontent-%COMP%]   tz-flight-train-button-toggle[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n[_nghost-%COMP%]   .trains-container[_ngcontent-%COMP%]   .trains-results-container[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-direction: column;\n  flex: auto;\n}\n[_nghost-%COMP%]   .trains-container[_ngcontent-%COMP%]   .trains-results-container[_ngcontent-%COMP%]   .trains-list-container[_ngcontent-%COMP%] {\n  flex: auto;\n}\n[_nghost-%COMP%]   .trains-container[_ngcontent-%COMP%]   .trains-results-container[_ngcontent-%COMP%]   .trains-list-container[_ngcontent-%COMP%]   .train-results[_ngcontent-%COMP%], [_nghost-%COMP%]   .trains-container[_ngcontent-%COMP%]   .trains-results-container[_ngcontent-%COMP%]   .trains-list-container[_ngcontent-%COMP%]   .train-results-skeleton-loader[_ngcontent-%COMP%] {\n  scroll-margin: 60px;\n}\n[_nghost-%COMP%]   .confirm-and-continue-block[_ngcontent-%COMP%] {\n  scroll-margin: 260px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYWlucy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxPQUFBO0FBQ0o7QUFDSTtFQUNJLG1CQUFBO0VBQ0EsT0FBQTtBQUNSO0FBQ1E7RUFDSSw4QkFBQTtBQUNaO0FBQ1k7RUFDSSxvQkFBQTtBQUNoQjtBQUdRO0VBQ0ksaUJBQUE7QUFEWjtBQUlRO0VBQ0ksV0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUZaO0FBSVk7RUFDSSxVQUFBO0FBRmhCO0FBSWdCO0VBQ0ksbUJBQUE7QUFGcEI7QUFRSTtFQUNJLG9CQUFBO0FBTlIiLCJmaWxlIjoidHJhaW5zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcblxuICAgIC50cmFpbnMtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgZmxleDogMTtcblxuICAgICAgICAudHJhaW5zLXRvcC1uYXZiYXIge1xuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuXG4gICAgICAgICAgICAudHJhaW5zLWZpbHRlci1idG4ge1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdHotZmxpZ2h0LXRyYWluLWJ1dHRvbi10b2dnbGUge1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cblxuICAgICAgICAudHJhaW5zLXJlc3VsdHMtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICAgIGZsZXg6IGF1dG87XG5cbiAgICAgICAgICAgIC50cmFpbnMtbGlzdC1jb250YWluZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IGF1dG87XG5cbiAgICAgICAgICAgICAgICAudHJhaW4tcmVzdWx0cywgLnRyYWluLXJlc3VsdHMtc2tlbGV0b24tbG9hZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsLW1hcmdpbjogNjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuY29uZmlybS1hbmQtY29udGludWUtYmxvY2sge1xuICAgICAgICBzY3JvbGwtbWFyZ2luOiAyNjBweDtcbiAgICB9XG59XG4iXX0= */"]
});

/***/ }),

/***/ 97809:
/*!*******************************************************************!*\
  !*** ./src/app/modules/results/transport/trains/trains.module.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TrainsModule": () => (/* binding */ TrainsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _trains_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./trains-routing.module */ 58046);
/* harmony import */ var _trains_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./trains.component */ 89817);
/* harmony import */ var _common_transport_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/transport.common.module */ 73017);
/* harmony import */ var _components_trains_list_trains_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/trains-list/trains-list.component */ 42229);
/* harmony import */ var _components_trains_section_title_trains_section_title_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/trains-section-title/trains-section-title.component */ 4481);
/* harmony import */ var _components_trains_list_item_trains_list_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/trains-list-item/trains-list-item.component */ 76648);
/* harmony import */ var _components_terms_terms_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/terms/terms.component */ 94015);
/* harmony import */ var _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../results-cart-item-selection.module */ 8793);
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-infinite-scroll */ 34229);
/* harmony import */ var _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../results-filters/results-filters.module */ 1675);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);













class TrainsModule {
}
TrainsModule.ɵfac = function TrainsModule_Factory(t) { return new (t || TrainsModule)(); };
TrainsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineNgModule"]({ type: TrainsModule });
TrainsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
            _trains_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrainsRoutingModule,
            ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__.InfiniteScrollModule,
            _common_transport_common_module__WEBPACK_IMPORTED_MODULE_3__.TransportCommonModule,
            _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_8__.ResultsCartItemSelectionModule,
            _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_9__.ResultsFiltersModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_10__["ɵɵsetNgModuleScope"](TrainsModule, { declarations: [_trains_component__WEBPACK_IMPORTED_MODULE_2__.TrainsComponent,
        _components_trains_list_trains_list_component__WEBPACK_IMPORTED_MODULE_4__.TrainsListComponent,
        _components_trains_section_title_trains_section_title_component__WEBPACK_IMPORTED_MODULE_5__.TrainsSectionTitleComponent,
        _components_trains_list_item_trains_list_item_component__WEBPACK_IMPORTED_MODULE_6__.TrainsListItemComponent,
        _components_terms_terms_component__WEBPACK_IMPORTED_MODULE_7__.TrainTermsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule,
        _trains_routing_module__WEBPACK_IMPORTED_MODULE_1__.TrainsRoutingModule,
        ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_12__.InfiniteScrollModule,
        _common_transport_common_module__WEBPACK_IMPORTED_MODULE_3__.TransportCommonModule,
        _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_8__.ResultsCartItemSelectionModule,
        _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_9__.ResultsFiltersModule] }); })();


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
//# sourceMappingURL=src_app_modules_results_transport_trains_trains_module_ts.js.map