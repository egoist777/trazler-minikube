"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_results_transfers_transfers_module_ts"],{

/***/ 89369:
/*!*******************************************************************************!*\
  !*** ./src/app/modules/core/utils/modules/transfers/transfer-search.utils.ts ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferSearchUtils": () => (/* binding */ TransferSearchUtils)
/* harmony export */ });
class TransferSearchUtils {
    static getChildSeats(passenger) {
        const childAges = passenger.childrenAges;
        let childSeats = 0;
        for (const idx in childAges) {
            if (childAges[idx] <= 4) {
                childSeats++;
            }
        }
        childSeats += passenger.infants > 0 ? passenger.infants : 0;
        return childSeats;
    }
    static getBoosterSeats(passenger) {
        const childAges = passenger.childrenAges;
        let boosterSeats = 0;
        for (const idx in childAges) {
            if (childAges[idx] >= 5 && childAges[idx] <= 12) {
                boosterSeats++;
            }
        }
        return boosterSeats;
    }
}


/***/ }),

/***/ 47740:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/results/results-filters/results-filters.utils.service.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ResultsFiltersUtils": () => (/* binding */ ResultsFiltersUtils)
/* harmony export */ });
class ResultsFiltersUtils {
    constructor() { }
    static selectedFiltersCounter(filters) {
        if (filters[0].ref_id === 'TRAIN_STOPS' || filters[0].ref_id === 'FLIGHT_STOPS') {
            return this.selectedFiltersCounterFlightTrain(filters);
        }
        return this.selectedFiltersCounterDefault(filters);
    }
    static selectedFiltersCounterFlightTrain(filters) {
        let selectedFiltersCount = 0;
        const stationsFilters = [];
        filters.forEach((filterItem) => {
            var _a;
            if (filterItem.ref_id === 'FLIGHT_TIME_AIRPORTS' || filterItem.ref_id === 'TRAIN_TIME_STATIONS') {
                (_a = filterItem.sections) === null || _a === void 0 ? void 0 : _a.forEach((section) => section.ogs.map((filter) => {
                    if (filter.checkboxes) {
                        stationsFilters.push(...filter.checkboxes.filter((checkbox) => !checkbox.disabled));
                    }
                    else if (filter.slider) {
                        stationsFilters.push(filter.slider);
                    }
                }));
                selectedFiltersCount += stationsFilters.reduce((acc, filter) => acc + Number(filter.selected), 0);
            }
            else {
                if (filterItem.checkboxes) {
                    selectedFiltersCount += filterItem.checkboxes
                        .filter((checkbox) => !checkbox.disabled)
                        .reduce((acc, checkbox) => acc + Number(checkbox.selected), 0);
                }
                else if (filterItem.slider) {
                    selectedFiltersCount += Number(filterItem.slider.selected);
                }
            }
        });
        return selectedFiltersCount;
    }
    static selectedFiltersCounterDefault(filters) {
        let selectedFiltersCount = 0;
        filters.forEach((filterItem) => {
            if (filterItem.checkboxes) {
                selectedFiltersCount += filterItem.checkboxes.reduce((acc, checkbox) => acc + Number(checkbox.selected), 0);
            }
            else if (filterItem.slider) {
                selectedFiltersCount += Number(filterItem.slider.selected);
            }
        });
        return selectedFiltersCount;
    }
}


/***/ }),

/***/ 56020:
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/modules/results/transfers/components/transfer-list-result-information/transfer-list-result-information.component.ts ***!
  \*************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransferListResultInformationComponent": () => (/* binding */ TransferListResultInformationComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/components/block-separator/block-separator.component */ 183);
/* harmony import */ var _transfer_list_item_transfer_list_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transfer-list-item/transfer-list-item.component */ 39965);
/* harmony import */ var _mob_transfer_list_item_mob_transfer_list_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mob-transfer-list-item/mob-transfer-list-item.component */ 41877);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ 87514);








function TransferListResultInformationComponent_ng_container_0_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx_r4.selectedTransfers[0].journeyType === "onwardJourney" ? "TRANSFER.SELECTED_OUTBOUND" : "TRANSFER.SELECTED_RETURN"), " ");
} }
function TransferListResultInformationComponent_ng_container_0_ng_container_1_div_2_tz_transfer_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tz-transfer-list-item", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancel", function TransferListResultInformationComponent_ng_container_0_ng_container_1_div_2_tz_transfer_list_item_1_Template_tz_transfer_list_item_cancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return ctx_r8.onCancelSelection(ctx_r8.selectedTransfers[0].journeyType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("transfer", ctx_r6.selectedTransfers[0])("cancelable", !ctx_r6.selectedTransfers[0].isBooked)("selectable", false)("totalPassengers", ctx_r6.totalPassengers);
} }
function TransferListResultInformationComponent_ng_container_0_ng_container_1_div_2_tz_mob_transfer_list_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tz-mob-transfer-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancelSelection", function TransferListResultInformationComponent_ng_container_0_ng_container_1_div_2_tz_mob_transfer_list_item_2_Template_tz_mob_transfer_list_item_cancelSelection_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return ctx_r10.onCancelSelection(ctx_r10.selectedTransfers[0].journeyType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("transfer", ctx_r7.selectedTransfers[0])("cancelable", !ctx_r7.selectedTransfers[0].isBooked)("selectable", false)("totalPassengers", ctx_r7.totalPassengers);
} }
function TransferListResultInformationComponent_ng_container_0_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransferListResultInformationComponent_ng_container_0_ng_container_1_div_2_tz_transfer_list_item_1_Template, 1, 4, "tz-transfer-list-item", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransferListResultInformationComponent_ng_container_0_ng_container_1_div_2_tz_mob_transfer_list_item_2_Template, 1, 4, "tz-mob-transfer-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r5.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.platformService.isMobileDevice);
} }
function TransferListResultInformationComponent_ng_container_0_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransferListResultInformationComponent_ng_container_0_ng_container_1_div_1_Template, 4, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransferListResultInformationComponent_ng_container_0_ng_container_1_div_2_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.updJourney === "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.updJourney === "");
} }
function TransferListResultInformationComponent_ng_container_0_ng_container_2_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx_r12.selectedTransfers[0].journeyType === "returnJourney" ? "TRANSFER.SELECTED_RETURN" : "TRANSFER.SELECTED_OUTBOUND"), " ");
} }
function TransferListResultInformationComponent_ng_container_0_ng_container_2_div_2_tz_transfer_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tz-transfer-list-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancel", function TransferListResultInformationComponent_ng_container_0_ng_container_2_div_2_tz_transfer_list_item_1_Template_tz_transfer_list_item_cancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return ctx_r18.onCancelSelection(ctx_r18.selectedTransfers[0].journeyType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("transfer", ctx_r16.selectedTransfers[0])("selectable", false)("cancelable", !ctx_r16.selectedTransfers[0].isBooked)("totalPassengers", ctx_r16.totalPassengers);
} }
function TransferListResultInformationComponent_ng_container_0_ng_container_2_div_2_tz_mob_transfer_list_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tz-mob-transfer-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancelSelection", function TransferListResultInformationComponent_ng_container_0_ng_container_2_div_2_tz_mob_transfer_list_item_2_Template_tz_mob_transfer_list_item_cancelSelection_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return ctx_r20.onCancelSelection(ctx_r20.selectedTransfers[0].journeyType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("transfer", ctx_r17.selectedTransfers[0])("cancelable", !ctx_r17.selectedTransfers[0].isBooked)("selectable", false)("totalPassengers", ctx_r17.totalPassengers);
} }
function TransferListResultInformationComponent_ng_container_0_ng_container_2_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransferListResultInformationComponent_ng_container_0_ng_container_2_div_2_tz_transfer_list_item_1_Template, 1, 4, "tz-transfer-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransferListResultInformationComponent_ng_container_0_ng_container_2_div_2_tz_mob_transfer_list_item_2_Template, 1, 4, "tz-mob-transfer-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r13.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r13.platformService.isMobileDevice);
} }
function TransferListResultInformationComponent_ng_container_0_ng_container_2_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, ctx_r14.selectedTransfers[1].journeyType === "returnJourney" ? "TRANSFER.SELECTED_RETURN" : "TRANSFER.SELECTED_OUTBOUND"), " ");
} }
function TransferListResultInformationComponent_ng_container_0_ng_container_2_div_4_tz_transfer_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tz-transfer-list-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancel", function TransferListResultInformationComponent_ng_container_0_ng_container_2_div_4_tz_transfer_list_item_1_Template_tz_transfer_list_item_cancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return ctx_r24.onCancelSelection(ctx_r24.selectedTransfers[1].journeyType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("transfer", ctx_r22.selectedTransfers[1])("selectable", false)("cancelable", !ctx_r22.selectedTransfers[1].isBooked)("totalPassengers", ctx_r22.totalPassengers);
} }
function TransferListResultInformationComponent_ng_container_0_ng_container_2_div_4_tz_mob_transfer_list_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tz-mob-transfer-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancelSelection", function TransferListResultInformationComponent_ng_container_0_ng_container_2_div_4_tz_mob_transfer_list_item_2_Template_tz_mob_transfer_list_item_cancelSelection_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4); return ctx_r26.onCancelSelection(ctx_r26.selectedTransfers[1].journeyType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("transfer", ctx_r23.selectedTransfers[1])("cancelable", !ctx_r23.selectedTransfers[1].isBooked)("selectable", false)("totalPassengers", ctx_r23.totalPassengers);
} }
function TransferListResultInformationComponent_ng_container_0_ng_container_2_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransferListResultInformationComponent_ng_container_0_ng_container_2_div_4_tz_transfer_list_item_1_Template, 1, 4, "tz-transfer-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransferListResultInformationComponent_ng_container_0_ng_container_2_div_4_tz_mob_transfer_list_item_2_Template, 1, 4, "tz-mob-transfer-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r15.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r15.platformService.isMobileDevice);
} }
function TransferListResultInformationComponent_ng_container_0_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransferListResultInformationComponent_ng_container_0_ng_container_2_div_1_Template, 4, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransferListResultInformationComponent_ng_container_0_ng_container_2_div_2_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, TransferListResultInformationComponent_ng_container_0_ng_container_2_div_3_Template, 4, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](4, TransferListResultInformationComponent_ng_container_0_ng_container_2_div_4_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.updJourney === "" || ctx_r3.updJourney === ctx_r3.selectedTransfers[0].journeyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.updJourney === "" || ctx_r3.updJourney === ctx_r3.selectedTransfers[0].journeyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.updJourney === "" || ctx_r3.updJourney === ctx_r3.selectedTransfers[1].journeyType);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.updJourney === "" || ctx_r3.updJourney === ctx_r3.selectedTransfers[1].journeyType);
} }
function TransferListResultInformationComponent_ng_container_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransferListResultInformationComponent_ng_container_0_ng_container_1_Template, 3, 2, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransferListResultInformationComponent_ng_container_0_ng_container_2_Template, 5, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.selectedTransfers.length === 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.selectedTransfers.length === 2);
} }
function TransferListResultInformationComponent_ng_container_1_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 3)(1, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](3, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](3, 1, "TRANSFER.SELECTED"), " ");
} }
function TransferListResultInformationComponent_ng_container_1_div_2_tz_transfer_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tz-transfer-list-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancel", function TransferListResultInformationComponent_ng_container_1_div_2_tz_transfer_list_item_1_Template_tz_transfer_list_item_cancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r32.onCancelSelection(ctx_r32.selectedTransfers[0].journeyType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("transfer", ctx_r30.selectedTransfers[0])("selectable", false)("cancelable", !ctx_r30.selectedTransfers[0].isBooked)("totalPassengers", ctx_r30.totalPassengers);
} }
function TransferListResultInformationComponent_ng_container_1_div_2_tz_mob_transfer_list_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "tz-mob-transfer-list-item", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("cancelSelection", function TransferListResultInformationComponent_ng_container_1_div_2_tz_mob_transfer_list_item_2_Template_tz_mob_transfer_list_item_cancelSelection_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r35); const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3); return ctx_r34.onCancelSelection(ctx_r34.selectedTransfers[0].journeyType); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("transfer", ctx_r31.selectedTransfers[0])("cancelable", !ctx_r31.selectedTransfers[0].isBooked)("selectable", false)("totalPassengers", ctx_r31.totalPassengers);
} }
function TransferListResultInformationComponent_ng_container_1_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransferListResultInformationComponent_ng_container_1_div_2_tz_transfer_list_item_1_Template, 1, 4, "tz-transfer-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransferListResultInformationComponent_ng_container_1_div_2_tz_mob_transfer_list_item_2_Template, 1, 4, "tz-mob-transfer-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx_r29.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r29.platformService.isMobileDevice);
} }
function TransferListResultInformationComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransferListResultInformationComponent_ng_container_1_div_1_Template, 4, 3, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, TransferListResultInformationComponent_ng_container_1_div_2_Template, 3, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedTransfers.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.selectedTransfers.length);
} }
class TransferListResultInformationComponent {
    constructor(platformService) {
        this.platformService = platformService;
        this.twoWayJourney = false;
        this.selectedTransfers = [];
        this.updJourney = '';
        this.count = 0;
        this.listTransfersText = '';
        this.totalPassengers = 0;
        this.cancelSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__.EventEmitter();
        this.selectedTransfersSummary = null;
    }
    ngOnInit() {
        //{{ 'GENERAL.Transport_Outbound' | translate }} {{ 'GENERAL.TRANSFER' | translate | lowercase }} :
        //                 {{ 'GENERAL.OPTIONS_FOUND' | translate: {resultsCount: count, tripType: ''} }}
        this.listTransfersText = 'toto';
    }
    ngOnChanges(changes) {
        if (changes['selectedTransfers'] && changes['selectedTransfers'].currentValue) {
            this.selectedTransfersSummary = changes['selectedTransfers'].currentValue.name;
        }
    }
    onCancelSelection(discardJourney) {
        this.cancelSelection.emit(discardJourney);
    }
}
TransferListResultInformationComponent.ɵfac = function TransferListResultInformationComponent_Factory(t) { return new (t || TransferListResultInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_0__.PlatformService)); };
TransferListResultInformationComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TransferListResultInformationComponent, selectors: [["tz-transfer-list-result-information"]], inputs: { twoWayJourney: "twoWayJourney", selectedTransfers: "selectedTransfers", updJourney: "updJourney", count: "count", listTransfersText: "listTransfersText", totalPassengers: "totalPassengers" }, outputs: { cancelSelection: "cancelSelection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵNgOnChangesFeature"]], decls: 2, vars: 2, consts: [[4, "ngIf"], ["class", "tz-block-separator-title", 4, "ngIf"], ["class", "transfer-list-item", 4, "ngIf"], [1, "tz-block-separator-title"], [1, "transfer-list-item"], [3, "transfer", "cancelable", "selectable", "totalPassengers", "cancel", 4, "ngIf"], [3, "transfer", "cancelable", "selectable", "totalPassengers", "cancelSelection", 4, "ngIf"], [3, "transfer", "cancelable", "selectable", "totalPassengers", "cancel"], [3, "transfer", "cancelable", "selectable", "totalPassengers", "cancelSelection"], [3, "transfer", "selectable", "cancelable", "totalPassengers", "cancel", 4, "ngIf"], [3, "transfer", "selectable", "cancelable", "totalPassengers", "cancel"]], template: function TransferListResultInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TransferListResultInformationComponent_ng_container_0_Template, 3, 2, "ng-container", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TransferListResultInformationComponent_ng_container_1_Template, 3, 2, "ng-container", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.twoWayJourney);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.twoWayJourney);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_1__.BlockSeparatorComponent, _transfer_list_item_transfer_list_item_component__WEBPACK_IMPORTED_MODULE_2__.TransferListItemComponent, _mob_transfer_list_item_mob_transfer_list_item_component__WEBPACK_IMPORTED_MODULE_3__.MobTransferListItemComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__.TranslatePipe], styles: [".results-title[_ngcontent-%COMP%] {\n  margin: 1.31rem 0 !important;\n  padding-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVyLWxpc3QtcmVzdWx0LWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNEJBQUE7RUFDQSxpQkFBQTtBQUNGIiwiZmlsZSI6InRyYW5zZmVyLWxpc3QtcmVzdWx0LWluZm9ybWF0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJlc3VsdHMtdGl0bGUge1xuICBtYXJnaW46IDEuMzFyZW0gMCAhaW1wb3J0YW50O1xuICBwYWRkaW5nLWJvdHRvbTogMDtcbn1cblxuIl19 */"] });


/***/ }),

/***/ 98118:
/*!*************************************************************************************************!*\
  !*** ./src/app/modules/results/transfers/components/transfers-list/transfers-list.component.ts ***!
  \*************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersListComponent": () => (/* binding */ TransfersListComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/core/scroll-service */ 90097);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _transfer_list_result_information_transfer_list_result_information_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../transfer-list-result-information/transfer-list-result-information.component */ 56020);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/components/block-separator/block-separator.component */ 183);
/* harmony import */ var _transfer_list_item_transfer_list_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../transfer-list-item/transfer-list-item.component */ 39965);
/* harmony import */ var _mob_transfer_list_item_mob_transfer_list_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mob-transfer-list-item/mob-transfer-list-item.component */ 41877);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ 87514);










const _c0 = ["transfersListComponent"];
const _c1 = function (a0) { return { resultsCount: a0, tripType: "" }; };
function TransfersListComponent_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 4)(2, "tz-block-separator");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](4, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](5, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind1"](4, 3, ctx_r0.transfers[0].journeyType === "onwardJourney" ? "TRANSFER.OUTBOUND" : "TRANSFER.RETURN"), " ", " : ", " ", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](5, 5, ctx_r0.transfers.length > 1 ? "GENERAL.OPTIONS_FOUND" : "GENERAL.OPTION_FOUND", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](8, _c1, ctx_r0.transfers.length)), " ");
} }
function TransfersListComponent_div_3_div_2_tz_transfer_list_item_1_Template(rf, ctx) { if (rf & 1) {
    const _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tz-transfer-list-item", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedTransfer", function TransfersListComponent_div_3_div_2_tz_transfer_list_item_1_Template_tz_transfer_list_item_selectedTransfer_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r10); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r8.onSelectTransfer(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transfer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("transfer", transfer_r4)("totalPassengers", ctx_r6.totalPassengers)("showBestValLabel", !!transfer_r4.bestValType);
} }
function TransfersListComponent_div_3_div_2_tz_mob_transfer_list_item_2_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tz-mob-transfer-list-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("selectedTransfer", function TransfersListComponent_div_3_div_2_tz_mob_transfer_list_item_2_Template_tz_mob_transfer_list_item_selectedTransfer_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r14); const i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().index; const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r12.onSelectTransfer(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const transfer_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]().$implicit;
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("transfer", transfer_r4)("totalPassengers", ctx_r7.totalPassengers);
} }
function TransfersListComponent_div_3_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](1, TransfersListComponent_div_3_div_2_tz_transfer_list_item_1_Template, 1, 3, "tz-transfer-list-item", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TransfersListComponent_div_3_div_2_tz_mob_transfer_list_item_2_Template, 1, 2, "tz-mob-transfer-list-item", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx_r3.platformService.isMobileDevice);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx_r3.platformService.isMobileDevice);
} }
function TransfersListComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 5, 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TransfersListComponent_div_3_div_2_Template, 3, 2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r1.transfers);
} }
class TransfersListComponent {
    constructor(scrollService, platformService) {
        this.scrollService = scrollService;
        this.platformService = platformService;
        this.twoWayJourney = false;
        this.transfers = [];
        this.updJourney = '';
        this.selectedTransfers = [];
        this.confirmable = false;
        this.totalPassengers = 0;
        this.selectedTransfer = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
        this.cancelSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_6__.EventEmitter();
    }
    ngOnInit() { }
    ngOnChanges(changes) {
        if (this.selectedTransfers.length === 1 && this.twoWayJourney) {
            if (this.transfersListElementReference) {
                this.scrollService.scrollToElement(this.transfersListElementReference, { block: 'start' });
            }
        }
    }
    onSelectTransfer(index) {
        this.selectedTransfer.emit(index);
    }
    onCancelSelection(discardJourney) {
        this.cancelSelection.emit(discardJourney);
        this.selectedTransfers = [];
    }
}
TransfersListComponent.ɵfac = function TransfersListComponent_Factory(t) { return new (t || TransfersListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_0__.ScrollService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_services_platform_service__WEBPACK_IMPORTED_MODULE_1__.PlatformService)); };
TransfersListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: TransfersListComponent, selectors: [["tz-transfers-list"]], viewQuery: function TransfersListComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_c0, 5);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.transfersListElementReference = _t.first);
    } }, inputs: { twoWayJourney: "twoWayJourney", transfers: "transfers", updJourney: "updJourney", isMobile$: "isMobile$", selectedTransfers: "selectedTransfers", confirmable: "confirmable", totalPassengers: "totalPassengers" }, outputs: { selectedTransfer: "selectedTransfer", cancelSelection: "cancelSelection" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 7, consts: [[1, "transfers"], [3, "selectedTransfers", "updJourney", "count", "twoWayJourney", "totalPassengers", "cancelSelection"], [4, "ngIf"], ["class", "transfers-list", 4, "ngIf"], [1, "tz-block-separator-title"], [1, "transfers-list"], ["transfersListComponent", ""], ["class", "transfer-list-item", 4, "ngFor", "ngForOf"], [1, "transfer-list-item"], [3, "transfer", "totalPassengers", "showBestValLabel", "selectedTransfer", 4, "ngIf"], [3, "transfer", "totalPassengers", "selectedTransfer", 4, "ngIf"], [3, "transfer", "totalPassengers", "showBestValLabel", "selectedTransfer"], [3, "transfer", "totalPassengers", "selectedTransfer"]], template: function TransfersListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0)(1, "tz-transfer-list-result-information", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("cancelSelection", function TransfersListComponent_Template_tz_transfer_list_result_information_cancelSelection_1_listener($event) { return ctx.onCancelSelection($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](2, TransfersListComponent_ng_container_2_Template, 6, 10, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](3, TransfersListComponent_div_3_Template, 3, 1, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("selectedTransfers", ctx.selectedTransfers)("updJourney", ctx.updJourney)("count", ctx.transfers.length)("twoWayJourney", ctx.twoWayJourney)("totalPassengers", ctx.totalPassengers);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", (ctx.twoWayJourney && ctx.selectedTransfers.length < 2 || !ctx.twoWayJourney && !ctx.selectedTransfers.length) && ctx.transfers.length);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", !ctx.confirmable && (ctx.selectedTransfers.length < 2 && ctx.twoWayJourney || ctx.selectedTransfers.length < 1 && !ctx.twoWayJourney));
    } }, directives: [_transfer_list_result_information_transfer_list_result_information_component__WEBPACK_IMPORTED_MODULE_2__.TransferListResultInformationComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _shared_components_block_separator_block_separator_component__WEBPACK_IMPORTED_MODULE_3__.BlockSeparatorComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _transfer_list_item_transfer_list_item_component__WEBPACK_IMPORTED_MODULE_4__.TransferListItemComponent, _mob_transfer_list_item_mob_transfer_list_item_component__WEBPACK_IMPORTED_MODULE_5__.MobTransferListItemComponent], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe], styles: ["[_nghost-%COMP%] {\n  width: 100%;\n}\n[_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%]   .filter-open-popup[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  height: 1.875rem;\n  margin-right: 20px;\n}\n[_nghost-%COMP%]   .transfers[_ngcontent-%COMP%]   .transfer-list-item[_ngcontent-%COMP%]:not(:first-child) {\n  margin-top: 1.25rem;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .transfers[_ngcontent-%COMP%]   .transfer-list-item[_ngcontent-%COMP%]:not(:first-child) {\n    margin-top: 0.5rem;\n  }\n}\n[_nghost-%COMP%]   .transfers[_ngcontent-%COMP%]   .results-title[_ngcontent-%COMP%] {\n  position: relative;\n  display: flex;\n  justify-content: center;\n}\n[_nghost-%COMP%]   .transfers[_ngcontent-%COMP%]   .results-title[_ngcontent-%COMP%]:after {\n  border-top: 1px solid #e5e5e5;\n  content: \"\";\n  margin: 0 auto;\n  position: absolute;\n  top: 50%;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  width: 100%;\n  z-index: 1;\n}\n[_nghost-%COMP%]   .transfers[_ngcontent-%COMP%]   .results-title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  background: var(--color-main-background);\n  padding: 0 0.93rem;\n  font-weight: 400;\n  letter-spacing: 0;\n  font-size: 0.833rem;\n  line-height: 1.59rem;\n  color: var(--color-text-light-gray);\n  z-index: 2;\n}\n[_nghost-%COMP%]   .transfers[_ngcontent-%COMP%]   .transfers-list[_ngcontent-%COMP%] {\n  scroll-margin: 124px;\n}\n[_nghost-%COMP%]   .transfers[_ngcontent-%COMP%]   .transfers-submission[_ngcontent-%COMP%] {\n  margin-top: 20px;\n}\n[_nghost-%COMP%]   .transfers[_ngcontent-%COMP%]   .transfers-submission[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%] {\n  flex: 1;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n[_nghost-%COMP%]   .transfers[_ngcontent-%COMP%]   .transfers-submission[_ngcontent-%COMP%]   .buttons-container[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: auto;\n  margin: 0 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVycy1saXN0LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy91dGlscy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxXQUFBO0FBREo7QUFHSTtFQUNJLG1CQUFBO0FBRFI7QUFJWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7QUFGaEI7QUFRUTtFQUNJLG1CQUFBO0FBTlo7QUN3Q0k7RURuQ0k7SUFJUSxrQkFBQTtFQUxkO0FBQ0Y7QUFRUTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBTlo7QUFRWTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQU5oQjtBQVNZO0VBQ0ksd0NBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUNBQUE7RUFDQSxVQUFBO0FBUGhCO0FBV1E7RUFDSSxvQkFBQTtBQVRaO0FBWVE7RUFDSSxnQkFBQTtBQVZaO0FBWVk7RUFDSSxPQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQVZoQjtBQVlnQjtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBVnBCIiwiZmlsZSI6InRyYW5zZmVycy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG5cbiAgICAucHJpY2UtcmFuZ2UtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAuZmlsdGVyLW9wZW4tcG9wdXAge1xuICAgICAgICAgICAgYnV0dG9uIHtcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEuODc1cmVtO1xuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC50cmFuc2ZlcnMge1xuICAgICAgICAudHJhbnNmZXItbGlzdC1pdGVtOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDEuMjVyZW07XG5cbiAgICAgICAgICAgIEBpbmNsdWRlIG1vYmlsZSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnJlc3VsdHMtdGl0bGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgICAgICAmOmFmdGVyIHtcbiAgICAgICAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2U1ZTVlNTtcbiAgICAgICAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzcGFuIHtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluLWJhY2tncm91bmQpO1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDAgMC45M3JlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwO1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjgzM3JlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMS41OXJlbTtcbiAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1saWdodC1ncmF5KTtcbiAgICAgICAgICAgICAgICB6LWluZGV4OiAyXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudHJhbnNmZXJzLWxpc3Qge1xuICAgICAgICAgICAgc2Nyb2xsLW1hcmdpbjogMTI0cHg7XG4gICAgICAgIH1cblxuICAgICAgICAudHJhbnNmZXJzLXN1Ym1pc3Npb24ge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcblxuICAgICAgICAgICAgLmJ1dHRvbnMtY29udGFpbmVyIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAxO1xuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcblxuICAgICAgICAgICAgICAgIGJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAgMjBweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */"] });


/***/ }),

/***/ 21370:
/*!***********************************************************************!*\
  !*** ./src/app/modules/results/transfers/transfers-routing.module.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersRoutingModule": () => (/* binding */ TransfersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _transfers_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfers.component */ 92482);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _transfers_component__WEBPACK_IMPORTED_MODULE_0__.TransfersComponent,
    },
];
class TransfersRoutingModule {
}
TransfersRoutingModule.ɵfac = function TransfersRoutingModule_Factory(t) { return new (t || TransfersRoutingModule)(); };
TransfersRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TransfersRoutingModule });
TransfersRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TransfersRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 92482:
/*!******************************************************************!*\
  !*** ./src/app/modules/results/transfers/transfers.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersComponent": () => (/* binding */ TransfersComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _core_utils_modules_transfers_transfer_search_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/utils/modules/transfers/transfer-search.utils */ 89369);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @core/constants/state-from.const */ 54255);
/* harmony import */ var _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/base-service-component/base-service.component */ 6371);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs/operators */ 68951);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs/operators */ 87260);
/* harmony import */ var _transfers_sort__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./transfers.sort */ 81105);
/* harmony import */ var _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/cart/utils/cart.utils */ 14770);
/* harmony import */ var _services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/modules/inactivity/filter.service */ 53768);
/* harmony import */ var _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/modules/search/utils/search.utils */ 77235);
/* harmony import */ var _results_filters_results_filters_utils_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../results-filters/results-filters.utils.service */ 47740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_transfers_dataservices_transfers_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/modules/transfers/dataservices/transfers.service */ 98209);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _results_filters_filters_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../results-filters/filters.component */ 32082);
/* harmony import */ var _components_mob_filter_navbar_mob_filter_navbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/mob-filter-navbar/mob-filter-navbar.component */ 97008);
/* harmony import */ var _shared_components_results_top_info_block_results_top_info_block_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @shared/components/results-top-info-block/results-top-info-block.component */ 70858);
/* harmony import */ var _results_filters_components_filter_btn_filter_btn_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../results-filters/components/filter-btn/filter-btn.component */ 16722);
/* harmony import */ var _shared_components_price_range_filter_price_range_filter_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../shared/components/price-range-filter/price-range-filter.component */ 89254);
/* harmony import */ var _components_acc_car_transfer_skeleton_acc_car_transfer_skeleton_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/acc-car-transfer-skeleton/acc-car-transfer-skeleton.component */ 56735);
/* harmony import */ var _components_car_transfer_skeleton_car_transfer_skeleton_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/car-transfer-skeleton/car-transfer-skeleton.component */ 50749);
/* harmony import */ var _components_selected_transfers_selected_transfers_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/selected-transfers/selected-transfers.component */ 99131);
/* harmony import */ var _components_transfers_list_transfers_list_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/transfers-list/transfers-list.component */ 98118);
/* harmony import */ var _shared_components_service_booking_confirmation_component_service_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @shared/components/service-booking-confirmation-component/service-booking-confirmation.component */ 70832);
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../shared/pipes/safe-html.pipe */ 66926);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../shared/pipes/tz-currency.pipe */ 98967);




























const _c0 = ["transfersList"];
const _c1 = ["transfersListSkeletonLoader"];
const _c2 = ["transfersSubmissionContainerElement"];

function TransfersComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 8)(1, "tz-results-filters", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("filterChanged", function TransfersComponent_div_1_Template_tz_results_filters_filterChanged_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r9);
      const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r8.onFilterChanged($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("filter", ctx_r0.transfersFilter)("loading", ctx_r0.loaderService.skeletonLoading)("disabled", ctx_r0.confirmable);
  }
}

function TransfersComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div")(1, "tz-mob-filter-navbar", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("openFilter", function TransfersComponent_div_4_Template_tz_mob_filter_navbar_openFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r11);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r10.onOpenFilterModal();
    })("resetFilter", function TransfersComponent_div_4_Template_tz_mob_filter_navbar_resetFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r11);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r12.onResetFilter();
    })("openSort", function TransfersComponent_div_4_Template_tz_mob_filter_navbar_openSort_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r11);
      const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r13.mobOpenSort();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("sortKey", ctx_r1.filterQueryParams.sort_by)("sortByOptions", ctx_r1.sortByOptions)("isEnableClearFilter", ctx_r1.isEnableClearFilter)("filtersCount", ctx_r1.selectedFiltersCount)("skeletonLoading", ctx_r1.loaderService.skeletonLoading);
  }
}

function TransfersComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 11)(1, "tz-results-top-info-block", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](3, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("loading", ctx_r2.loaderService.skeletonLoading);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](3, 2, ctx_r2.serviceTitle), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵsanitizeHtml"]);
  }
}

function TransfersComponent_div_8_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 17)(1, "tz-filter-btn", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("clickFilter", function TransfersComponent_div_8_div_1_Template_tz_filter_btn_clickFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r16);
      const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r15.onOpenFilterPopup();
    })("clearFilter", function TransfersComponent_div_8_div_1_Template_tz_filter_btn_clearFilter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r16);
      const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r17.onResetFilter();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("filterCount", ctx_r14.filterCount(ctx_r14.transfersFilter));
  }
}

function TransfersComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, TransfersComponent_div_8_div_1_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "tz-price-range-filter", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("sortChange", function TransfersComponent_div_8_Template_tz_price_range_filter_sortChange_3_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r19);
      const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r18.sortTransfers($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 5, ctx_r3.isMobile$));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("sort", ctx_r3.filterQueryParams.sort_by)("options", ctx_r3.sortByOptions)("disabled", ctx_r3.confirmable)("skeletonLoading", ctx_r3.loaderService.skeletonLoading);
  }
}

function TransfersComponent_ng_container_10_div_1_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 20, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "tz-acc-car-transfer-skeleton-loader");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
}

function TransfersComponent_ng_container_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", null, 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelement"](2, "tz-car-transfer-skeleton");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
  }
}

function TransfersComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, TransfersComponent_ng_container_10_div_1_Template, 3, 0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](3, TransfersComponent_ng_container_10_div_3_Template, 3, 0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](4, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 2, ctx_r4.platformService.isMobileDevice$) === false);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](4, 4, ctx_r4.platformService.isMobileDevice$));
  }
}

function TransfersComponent_ng_container_11_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 26)(1, "tz-selected-transfers", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("removedItem", function TransfersComponent_ng_container_11_div_1_Template_tz_selected_transfers_removedItem_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r27);
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r26.onRemovedSelectedTransfer($event);
    })("changeTransfer", function TransfersComponent_ng_container_11_div_1_Template_tz_selected_transfers_changeTransfer_1_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r27);
      const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
      return ctx_r28.onChangeTransfer($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }

  if (rf & 2) {
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("transferCartData", ctx_r24.cartData)("serviceList", true)("isSummary", false);
  }
}

function TransfersComponent_ng_container_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r30 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, TransfersComponent_ng_container_11_div_1_Template, 2, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](2, "div", 23, 24)(4, "tz-transfers-list", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("selectedTransfer", function TransfersComponent_ng_container_11_Template_tz_transfers_list_selectedTransfer_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r30);
      const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r29.onSelectedTransfer($event);
    })("cancelSelection", function TransfersComponent_ng_container_11_Template_tz_transfers_list_cancelSelection_4_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r30);
      const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r31.onCancelSelection($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementContainerEnd"]();
  }

  if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx_r5.cartData && ctx_r5.cartData.items.length);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("transfers", ctx_r5.transfers)("isMobile$", ctx_r5.isMobile$)("confirmable", ctx_r5.confirmable)("twoWayJourney", ctx_r5.twoWayJourney)("selectedTransfers", ctx_r5.selectedTransfers)("totalPassengers", ctx_r5.totalPassengers)("updJourney", ctx_r5.updJourney);
  }
}

function TransfersComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r34 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 28, 29)(2, "tz-service-booking-confirmation", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("cancelSelection", function TransfersComponent_div_12_Template_tz_service_booking_confirmation_cancelSelection_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r34);
      const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r33.onCancelSelection(ctx_r33.updJourney);
    })("submitBooking", function TransfersComponent_div_12_Template_tz_service_booking_confirmation_submitBooking_2_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r34);
      const ctx_r35 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r35.addItemToCart();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
  }
}

function TransfersComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 31, 29)(2, "div", 32)(3, "div", 33)(4, "p", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](6, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](7, "p", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](9, "tzCurrency");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](10, "p", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](12, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](13, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](14, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](15, "|");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](17, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](18, "button", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵlistener"]("click", function TransfersComponent_div_14_Template_button_click_18_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵrestoreView"](_r38);
      const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
      return ctx_r37.addItemToCart();
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](20, "translate");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()()();
  }

  if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](6, 7, "TOTAL"));
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind2"](9, 9, ctx_r7.cartPrice.total, ctx_r7.cartPrice.priceCurrency), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate3"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](12, 12, "GENERAL.PRICE_FOR"), " ", ctx_r7.totalPassengers, " ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](13, 14, "TRAVELLER." + (ctx_r7.totalPassengers > 1 ? "PEOPLE" : "PERSON")), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](17, 16, "All taxes included"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](20, 18, "GENERAL.CONFIRM"), " ");
  }
}

const _c3 = function (a0) {
  return {
    "transfer-list-submission-container--confirmable": a0
  };
};

class TransfersComponent extends _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_4__.BaseServiceComponent {
  constructor(transferService, injector) {
    super(injector);
    this.transferService = transferService;
    this.injector = injector;
    this.journeyType = 'roundTrip';
    this.twoWayJourney = false;
    this.showSidebar = false;
    this.transfersFilter = [];
    this.transfers = [];
    this.selectedTransfers = [];
    this.serviceTitle = '';
    this.updJourney = '';
    this.sortByOptions = _transfers_sort__WEBPACK_IMPORTED_MODULE_5__.TransfersSort;
    this.filterQueryParams = {
      selectedTransfers: '{}'
    };
    this.selectedFiltersCount = 0;
    this.totalPassengers = 0;
    this.serviceId = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRANSFER;
    this.resultsCount$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.Subject();
    this.cartTransfersIds = [];
    this.repriceListenerId = -1;
    this.isNextSummary = this.nextIsSummary();
    this.isMobile$ = this.screenSizeDetectorService.isMobile;
  }

  get isEnableClearFilter() {
    return _services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_7__.FilterService.enableClearAll(this.transfersFilter);
  }

  static buildMap(selectedTransfers) {
    const map = {};

    for (let i = 0; i < selectedTransfers.length; i++) {
      map[selectedTransfers[i].journeyType] = i;
    }

    return map;
  }

  ngOnInit() {
    const searchInfos = this.searchDataService.getSearchData(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRANSFER);

    if (searchInfos && searchInfos.transferCal) {
      this.twoWayJourney = searchInfos.transferCal.twoDates;
    }

    if (this.searchRunning()) {
      this.showSkeletonLoader(true);
    } else {
      this.updJourney = '';
      this.filterQueryParams = {
        sort_by: 'cheapest'
      };
      this.serviceTitle = this.formServiceTitle(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRANSFER, this.twoWayJourney);
      this.setSortingValue();
      this.settingsService.selectedLanguageSubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.skip)(1)).subscribe(() => {
        this.serviceTitle = this.formServiceTitle(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRANSFER, this.twoWayJourney);
        this.loadTransferData(false);
      });
      this.curChange = this.currencyService.selectedCurrencySubject.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(this.destroy$), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_26__.skip)(1)).subscribe(() => {
        this.filterQueryParams.refreshFilter = true;
        this.loadTransferData(false);
      });
      this.repriceListenerId = this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.LISTEN_REPRICED, this.getCartServiceData, this);
      this.getCartServiceData();
      console.log('cart data loaded in transfer');
      this.loadTransferData(true);
      this.setCartTransfersIds();
    }
  }

  ngOnDestroy() {
    this.listenersService.unregisterListener(this.repriceListenerId);
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  onFilterChanged($event) {
    this.scrollToServiceContainer();
    this.transfersFilter = $event;
    this.filterTransfers();
  }

  sortTransfers(sortValue) {
    _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_8__.SearchUtilsService.saveSortingValue(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRANSFER, sortValue);
    this.filterQueryParams.sort_by = sortValue;
    this.loadTransferData(false);
  }

  onCancelSelection(discardJourney) {
    this.confirmable = false;

    if (discardJourney) {
      for (let i = 0; i < this.selectedTransfers.length; i++) {
        if (this.selectedTransfers[i].journeyType === discardJourney) {
          this.selectedTransfers.splice(i, 1);
          break;
        }
      }
    } else {
      this.selectedTransfers = [];
    }

    this.initSelectedTransfers(discardJourney);
    this.loadTransferData(false);
    this.scrollToTop();
  }

  onChangeTransfer(transfer) {
    this.updJourney = transfer.journeyType;
    this.initSelectedTransfers();
    this.setSelectedTransfer();
    requestAnimationFrame(() => {
      if (this.transfersListSkeletonLoaderElementReference) {
        this.scrollToElement(this.transfersListSkeletonLoaderElementReference);
      } else {
        this.scrollToElement(this.transfersListElementReference);
      }
    });
  }

  addItemToCart() {
    this.transferService.addTransferToCart(this.selectedTransfers).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(this.destroy$)).subscribe(response => {
      this.confirmable = false;
      this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_2__.ListenerId.TOGGLE_RESULTS_SUMMARY, {
        show: !this.confirmable
      });
      this.userSearchService.searchCheckDep(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRANSFER, this.isNextSummary, false, false, true);
    }, error => {
      console.log(error);
    });
  }

  onRemovedSelectedTransfer(optionId) {
    this.removeService(this.serviceId, optionId).then(isRemoved => {
      console.log('remove success');
    }, error => {
      console.error(error);
    });
  }

  onSelectedTransfer(index) {
    if (this.transfers[index]) {
      let found = false;

      for (let i = 0; i < this.selectedTransfers.length; i++) {
        if (this.transfers[index].journeyType === this.selectedTransfers[i].journeyType) {
          this.selectedTransfers[i] = this.transfers[index];
          found = true;
        }
      }

      if (!found) {
        this.selectedTransfers.push(this.transfers[index]);
      }
    }

    this.setSelectedTransfer();
  }

  onOpenFilterPopup() {
    const filter = new rxjs__WEBPACK_IMPORTED_MODULE_27__.BehaviorSubject(this.transfersFilter);
    filter.subscribe(filterItem => {
      this.transfersFilter = filterItem;
      this.filterTransfers();
    });
    this.openFilterDialog(filter, this.resultsCount$);
    this.showSidebarMobile();
  }

  onOpenFilterModal() {
    const filter = new rxjs__WEBPACK_IMPORTED_MODULE_27__.BehaviorSubject(this.transfersFilter);
    filter.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(this.destroy$)).subscribe(filterItem => {
      this.transfersFilter = filterItem;
      this.filterTransfers();
    });
    this.openFilterModal(filter, this.resultsCount$);
  }

  onResetFilter() {
    const filters$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.Subject();
    filters$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(this.destroy$)).subscribe(filterItem => {
      this.transfersFilter = filterItem;
      this.filterTransfers();
    });
    _components_base_service_component_base_service_component__WEBPACK_IMPORTED_MODULE_4__.BaseServiceComponent.resetFilter(this.transfersFilter, filters$);
  }

  mobOpenSort() {
    const sort$ = new rxjs__WEBPACK_IMPORTED_MODULE_24__.Subject();
    sort$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(this.destroy$)).subscribe(sortKey => {
      this.sortTransfers(sortKey);
    });
    this.openSortMob(this.sortByOptions, this.filterQueryParams.sort_by, sort$);
  }

  setSelectedTransfer() {
    this.checkConfirmability();

    if (this.selectedTransfers.length > 1) {
      return;
    }

    if (this.twoWayJourney) {
      if (this.selectedTransfers.length > 0) {
        this.filterQueryParams.journeyType = this.selectedTransfers[0].journeyType === 'onwardJourney' ? 'returnJourney' : 'onwardJourney';
        this.filterQueryParams.selectedTransfers = this.transferService.getTwoSelectedTransferQueryData(this.selectedTransfers);
      } else {
        this.filterQueryParams.journeyType = 'onwardJourney';
        this.filterQueryParams.selectedTransfers = '{}';
      }

      if (this.selectedTransfers.length < 2) {
        this.transferService.searchServiceData(this.serviceId, this.filterQueryParams, false).subscribe(transfersResponse => {
          this.transfersResponse = transfersResponse;
          this.transfersFilter = transfersResponse.ogs;
          this.transfers = transfersResponse.results;
          this.handlingDataTransfersData();
          this.filterCartItems();
        });
      }

      this.checkConfirmability();
    } else {}
  }

  loadTransferData(checkConsistency) {
    if (checkConsistency && this.handleExtraParams()) {
      this.loaderService.skeletonLoading = false;
      return;
    }

    const search = this.searchDataService.getSearch(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRANSFER);
    this.totalPassengers = search.passengers.total;
    this.checkResultsAvailable(this.serviceId);
    this.loaderService.skeletonLoading = true;
    this.filterQueryParams = this.initSearchParams();
    this.transferService.searchServiceData(this.serviceId, this.filterQueryParams, checkConsistency).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(this.destroy$)).subscribe(transfersResponse => {
      this.transfersResponse = transfersResponse;
      this.transfersFilter = transfersResponse.ogs;
      this.transfers = this.filterTransfersData(transfersResponse.results);
      this.handlingDataTransfersData();
      this.resultsCount$.next(transfersResponse.nbOnwards);
      this.listCount = transfersResponse.nbOnwards;
      this.filterCartItems();
      this.loaderService.skeletonLoading = false;
      setTimeout(() => {
        console.log('set prerender ready');
        window.prerenderReady = true;
      }, 1500);
      /*if (checkConsistency) {
          this.handleExtraParams();
      }*/

      if (!transfersResponse.results.length && !this.filterCount(transfersResponse.ogs)) {
        this.transferService.checkServiceFailedAndNotify(this.serviceId, this.filterQueryParams.journeyType);
      }
    }, error => {//this.loaderService.skeletonLoading = false;
    });
  }

  filterTransfersData(transfers) {
    var _a, _b;

    const cartId = ((_a = this.cartData) === null || _a === void 0 ? void 0 : _a.items[0]) ? (_b = this.cartData) === null || _b === void 0 ? void 0 : _b.items[0].selectedItem.id : null;

    if (cartId) {
      return this.transferService.filterDataRemoveCartItem(transfers, cartId);
    }

    return transfers;
  }

  filterTransfers() {
    this.loaderService.skeletonLoading = true;
    this.transferService.filterServiceData(this.serviceId, this.filterQueryParams, this.transfersFilter).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_25__.takeUntil)(this.destroy$)).subscribe(transfersResponse => {
      this.transfersResponse = transfersResponse;
      this.transfersFilter = transfersResponse.ogs;
      this.filterService.filterChange$.next(transfersResponse.ogs);
      this.transfers = transfersResponse.results;
      this.handlingDataTransfersData();
      const resultsCount = this.filterQueryParams.journeyType === 'onwardJourney' ? transfersResponse.nbOnwards : transfersResponse.nbReturns;
      this.resultsCount$.next(resultsCount);
      this.listCount = resultsCount;
      this.filterCartItems();
      this.loaderService.skeletonLoading = false;
    }, error => {
      this.loaderService.skeletonLoading = false;
    });
  }

  showSidebarMobile() {
    this.showSidebar = true;
  }

  getJourneyType() {
    return this.selectedTransfers.length ? this.selectedTransfers[0].journeyType === 'onwardJourney' ? 'returnJourney' : 'onwardJourney' : 'onwardJourney';
  }

  initSearchParams() {
    const passenger = this.searchDataService.getPassengers();

    if (passenger && (passenger.childrenAges.length !== 0 || passenger.infantAges.length !== 0)) {
      passenger.showChildSeat = _core_utils_modules_transfers_transfer_search_utils__WEBPACK_IMPORTED_MODULE_1__.TransferSearchUtils.getChildSeats(passenger) > 0;
      passenger.showBoosterSeat = _core_utils_modules_transfers_transfer_search_utils__WEBPACK_IMPORTED_MODULE_1__.TransferSearchUtils.getBoosterSeats(passenger) > 0;
    }

    return {
      childSeats: passenger && (passenger.showChildSeat ? _core_utils_modules_transfers_transfer_search_utils__WEBPACK_IMPORTED_MODULE_1__.TransferSearchUtils.getChildSeats(passenger) : 0),
      boosterSeats: passenger && (passenger.showBoosterSeat ? _core_utils_modules_transfers_transfer_search_utils__WEBPACK_IMPORTED_MODULE_1__.TransferSearchUtils.getBoosterSeats(passenger) : 0),
      journeyType: this.getJourneyType(),
      selectedTransfers: this.transferService.getTwoSelectedTransferQueryData(this.selectedTransfers),
      sort_by: this.filterQueryParams.sort_by,
      refreshFilter: false
    };
  }

  checkConfirmability() {
    this.confirmable = this.twoWayJourney ? this.selectedTransfers.length > 1 : !!this.selectedTransfers.length;

    if (this.confirmable) {
      const totalCartPrice = this.selectedTransfers.reduce((acc, obj) => acc + obj.prices.listPrice, 0);
      this.cartPrice = {
        total: totalCartPrice,
        priceCurrency: this.selectedTransfers[0].prices.listPriceCur
      };
      requestAnimationFrame(() => {
        this.scrollToElement(this.transfersSubmissionContainerElement, {
          block: 'end'
        });
      });
    }
  }

  nextIsSummary() {
    var _a, _b;

    const state = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state;
    const from = state ? state['from'] : '';
    return from === _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.SUMMARY || from === _core_constants_state_from_const__WEBPACK_IMPORTED_MODULE_3__.StateFrom.TAB;
  }

  initSelectedTransfers(discardJourney) {
    var _a; //this.selectedTransfers = [];


    const cartData = this.transferService.getServiceCartItems(false);

    if ((_a = cartData === null || cartData === void 0 ? void 0 : cartData.items) === null || _a === void 0 ? void 0 : _a.length) {
      if (_services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_6__.CartUtils.areAllInError(cartData)) {
        if (this.updJourney !== '') {
          this.updJourney = '';
        }
      } else {
        const selectedMap = TransfersComponent.buildMap(this.selectedTransfers);

        if (this.updJourney === '' && (this.twoWayJourney && cartData.items.length === 2 || !this.twoWayJourney && cartData.items.length === 1)) {
          this.updJourney = discardJourney ? discardJourney : 'onwardJourney';
        } else if (this.updJourney !== '' && (this.twoWayJourney && cartData.items.length !== 2 || !this.twoWayJourney && cartData.items.length !== 1)) {
          this.updJourney = '';
        }
        /* if (!discardJourney){
            discardJourney = "returnJourney"
        }*/
        // merge selected transfers with items in card


        for (const item of cartData.items) {
          /*
           !CartUtils.isFailed(item.selectedItem.bookingOptions[0].status) && (
                  !discardJourney ||
                  item.selectedItem.data.journeyType !== discardJourney ||
                  (item.selectedItem.bookingOptions[0] &&
                      CartUtils.isBooked(item.selectedItem.bookingOptions[0].status))
              )) {
           */
          if (!discardJourney || item.selectedItem.data.journeyType !== discardJourney || item.selectedItem.bookingOptions[0] && _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_6__.CartUtils.isBooked(item.selectedItem.bookingOptions[0].status)) {
            let idx = selectedMap[item.selectedItem.data.journeyType];

            if (idx === undefined) {
              idx = this.selectedTransfers.length;
              this.selectedTransfers.push(item.selectedItem.data);
            } else {
              this.selectedTransfers[idx] = item.selectedItem.data;
            }

            if (!item.selectedItem.bookingOptions[0] || _services_modules_cart_utils_cart_utils__WEBPACK_IMPORTED_MODULE_6__.CartUtils.isBooked(item.selectedItem.bookingOptions[0].status)) {
              this.selectedTransfers[idx].isBooked = true;

              if (this.updJourney === this.selectedTransfers[idx].journeyType) {
                if (this.updJourney === 'onwardJourney') {
                  this.updJourney = 'returnJourney';
                } else {
                  this.updJourney = '';
                }
              }
            }
          }
        }
      }
    }

    for (let i = 0; i < this.selectedTransfers.length; i++) {
      if (this.selectedTransfers[i].journeyType === this.updJourney) {
        this.selectedTransfers.splice(i, 1);
        break;
      }
    }
  }

  handleExtraParams() {
    const state = history.state;

    if (state && state.extra) {
      for (const extraAction in state.extra) {
        if (state.extra.hasOwnProperty(extraAction)) {
          switch (extraAction) {
            case 'changeTickets':
              this.onChangeTransfer(state.extra.data);

            /* if (this.twoWayJourney) {
                 return true;
             }*/
          }
        }
      }
    }

    return false;
  }

  getCartServiceData() {
    this.updJourney = '';
    this.cartData = this.transferService.getServiceCartItems(); // this.initSelectedTransfers();
  }

  filterCartItems() {
    const cartData = this.cartData && this.cartData.items || [];
    this.transfers = this.transfers.filter(transfer => {
      const idFound = cartData.find(cartItem => cartItem.selectedItem.id === transfer.id);
      return !idFound;
    });
    this.handlingDataTransfersData();
  }

  setCartTransfersIds() {
    if (!this.cartData || !this.cartData.items) {
      return;
    }

    this.cartData.items.map(cartTransfer => {
      this.cartTransfersIds.push(cartTransfer.selectedItem.data.id);
    });
  }

  handlingDataTransfersData() {
    this.transfers = this.transferService.handlingDataTransfersData(this.transfers, this.cartTransfersIds);
    this.selectedFiltersCount = _results_filters_results_filters_utils_service__WEBPACK_IMPORTED_MODULE_9__.ResultsFiltersUtils.selectedFiltersCounter(this.transfersFilter);

    if (this.transfersResponse && this.transfersResponse.selectedData) {
      this.selectedTransfers = [];

      for (const selected of this.transfersResponse.selectedData) {
        this.selectedTransfers.push(selected.result);
      }
    }
  }

  setSortingValue() {
    const sort = _services_modules_search_utils_search_utils__WEBPACK_IMPORTED_MODULE_8__.SearchUtilsService.getSortingValue(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRANSFER);

    if (sort) {
      this.filterQueryParams.sort_by = sort;
    }
  }

}

TransfersComponent.ɵfac = function TransfersComponent_Factory(t) {
  return new (t || TransfersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_services_modules_transfers_dataservices_transfers_service__WEBPACK_IMPORTED_MODULE_10__.TransfersService), _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_23__.Injector));
};

TransfersComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵdefineComponent"]({
  type: TransfersComponent,
  selectors: [["tz-transfers"]],
  viewQuery: function TransfersComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵviewQuery"](_c0, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵviewQuery"](_c1, 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵviewQuery"](_c2, 5);
    }

    if (rf & 2) {
      let _t;

      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵloadQuery"]()) && (ctx.transfersListElementReference = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵloadQuery"]()) && (ctx.transfersListSkeletonLoaderElementReference = _t.first);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵloadQuery"]()) && (ctx.transfersSubmissionContainerElement = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵInheritDefinitionFeature"]],
  decls: 16,
  vars: 24,
  consts: [[1, "tz-container", "transfers-container", "flex", 3, "hidden"], ["class", "tz-filter-container", 4, "ngIf"], [1, "transfer-list-submission-container", "flex", "flex-column", 3, "ngClass"], [4, "ngIf"], ["class", "result-top-info-block-item", 4, "ngIf"], ["class", "price-range-container flex align-center", 4, "ngIf"], ["class", "service-submission-container", 4, "ngIf"], ["class", "service-submission-container tz-fixed-bottom", "data-test", "transfers-confirm-cart", "id", "transferDetailsFooter", 4, "ngIf"], [1, "tz-filter-container"], [3, "filter", "loading", "disabled", "filterChanged"], [3, "sortKey", "sortByOptions", "isEnableClearFilter", "filtersCount", "skeletonLoading", "openFilter", "resetFilter", "openSort"], [1, "result-top-info-block-item"], ["blockType", "red", 3, "loading"], [3, "innerHTML"], [1, "price-range-container", "flex", "align-center"], ["class", "transfer-filter-btn inline-flex", 4, "ngIf"], [3, "sort", "options", "disabled", "skeletonLoading", "sortChange"], [1, "transfer-filter-btn", "inline-flex"], [3, "filterCount", "clickFilter", "clearFilter"], ["class", "transfers-list-container-skeleton-loader flex", 4, "ngIf"], [1, "transfers-list-container-skeleton-loader", "flex"], ["transfersListSkeletonLoader", ""], ["class", "flights-cart-data", 4, "ngIf"], [1, "transfers-list-container", "flex"], ["transfersList", ""], [3, "transfers", "isMobile$", "confirmable", "twoWayJourney", "selectedTransfers", "totalPassengers", "updJourney", "selectedTransfer", "cancelSelection"], [1, "flights-cart-data"], [3, "transferCartData", "serviceList", "isSummary", "removedItem", "changeTransfer"], [1, "service-submission-container"], ["transfersSubmissionContainerElement", ""], [3, "cancelSelection", "submitBooking"], ["data-test", "transfers-confirm-cart", "id", "transferDetailsFooter", 1, "service-submission-container", "tz-fixed-bottom"], [1, "tz-mob-modal-rent-details__confirm"], [1, "tz-mob-modal-rent-details__confirm-top"], [1, "tz-mob-modal-rent-details__confirm-total"], [1, "tz-mob-modal-rent-details__confirm-price"], [1, "tz-mob-modal-rent-details__confirm-description"], [1, "tz-btn", "tz-btn-primary", "tz-btn--select", "full-width", 3, "click"]],
  template: function TransfersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](1, TransfersComponent_div_1_Template, 2, 3, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](2, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementStart"](3, "div", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](4, TransfersComponent_div_4_Template, 2, 5, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](5, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](6, TransfersComponent_div_6_Template, 4, 4, "div", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](7, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](8, TransfersComponent_div_8_Template, 4, 7, "div", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](9, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](10, TransfersComponent_ng_container_10_Template, 5, 6, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](11, TransfersComponent_ng_container_11_Template, 5, 8, "ng-container", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](12, TransfersComponent_div_12_Template, 3, 0, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](13, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵtemplate"](14, TransfersComponent_div_14_Template, 21, 20, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipe"](15, "async");
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵelementEnd"]()();
    }

    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("hidden", ctx.noResultAvailable);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](2, 10, ctx.isMobile$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpureFunction1"](22, _c3, ctx.confirmable));
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](5, 12, ctx.platformService.isMobileDevice$));
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](7, 14, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](9, 16, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.loaderService.skeletonLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", !ctx.loaderService.skeletonLoading);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.confirmable && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](13, 18, ctx.platformService.isMobileDevice$) === false);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵproperty"]("ngIf", ctx.confirmable && _angular_core__WEBPACK_IMPORTED_MODULE_23__["ɵɵpipeBind1"](15, 20, ctx.platformService.isMobileDevice$));
    }
  },
  directives: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _results_filters_filters_component__WEBPACK_IMPORTED_MODULE_11__.FiltersComponent, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _components_mob_filter_navbar_mob_filter_navbar_component__WEBPACK_IMPORTED_MODULE_12__.MobFilterNavbarComponent, _shared_components_results_top_info_block_results_top_info_block_component__WEBPACK_IMPORTED_MODULE_13__.ResultsTopInfoBlockComponent, _results_filters_components_filter_btn_filter_btn_component__WEBPACK_IMPORTED_MODULE_14__.FilterBtnComponent, _shared_components_price_range_filter_price_range_filter_component__WEBPACK_IMPORTED_MODULE_15__.PriceRangeFilterComponent, _components_acc_car_transfer_skeleton_acc_car_transfer_skeleton_component__WEBPACK_IMPORTED_MODULE_16__.AccCarTransferSkeletonComponent, _components_car_transfer_skeleton_car_transfer_skeleton_component__WEBPACK_IMPORTED_MODULE_17__.CarTransferSkeletonComponent, _components_selected_transfers_selected_transfers_component__WEBPACK_IMPORTED_MODULE_18__.SelectedTransfersComponent, _components_transfers_list_transfers_list_component__WEBPACK_IMPORTED_MODULE_19__.TransfersListComponent, _shared_components_service_booking_confirmation_component_service_booking_confirmation_component__WEBPACK_IMPORTED_MODULE_20__.ServiceBookingConfirmationComponent],
  pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.AsyncPipe, _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_21__.SafeHtmlPipe, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_29__.TranslatePipe, _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_22__.TzCurrencyPipe],
  styles: ["[_nghost-%COMP%] {\n  display: flex;\n  flex: 1;\n}\n[_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n}\n[_nghost-%COMP%]   .price-range-container[_ngcontent-%COMP%]   .transfer-filter-btn[_ngcontent-%COMP%] {\n  margin-right: 1.5rem;\n}\n[_nghost-%COMP%]   .transfers-container[_ngcontent-%COMP%] {\n  flex-direction: row;\n  flex: 1;\n}\n[_nghost-%COMP%]   .transfers-container[_ngcontent-%COMP%]   .transfers-filters-container[_ngcontent-%COMP%] {\n  width: 290px;\n  padding-right: 50px;\n}\n[_nghost-%COMP%]   .transfers-container[_ngcontent-%COMP%]   .transfers-filters-container[_ngcontent-%COMP%]   .transfers-filter[_ngcontent-%COMP%] {\n  flex: 1;\n}\n[_nghost-%COMP%]   .transfers-container[_ngcontent-%COMP%]   .transfers-list-container[_ngcontent-%COMP%] {\n  scroll-margin: 60px;\n  flex: auto;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .transfers-container[_ngcontent-%COMP%]   .transfers-list-container[_ngcontent-%COMP%] {\n    scroll-margin: 0;\n  }\n}\n[_nghost-%COMP%]   .transfers-container[_ngcontent-%COMP%]   .transfers-list-container-skeleton-loader[_ngcontent-%COMP%] {\n  scroll-margin: 60px;\n}\n[_nghost-%COMP%]   .transfers-container[_ngcontent-%COMP%]   .service-submission-container[_ngcontent-%COMP%] {\n  scroll-margin: 260px;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .transfers-container[_ngcontent-%COMP%]   .service-submission-container[_ngcontent-%COMP%] {\n    scroll-margin: 0;\n    z-index: var(--mob-confirm-box-z-index);\n  }\n}\n[_nghost-%COMP%]   .transfer-list-submission-container[_ngcontent-%COMP%] {\n  margin-bottom: auto;\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .transfer-list-submission-container[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%]   .transfer-list-submission-container--confirmable[_ngcontent-%COMP%] {\n    padding-bottom: 6.125rem;\n  }\n}\n[_nghost-%COMP%]   .sidebar-for-mobile[_ngcontent-%COMP%] {\n  position: absolute;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVycy5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uL2Fzc2V0cy9zdHlsZXMvdXRpbHMvX21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLE9BQUE7QUFESjtBQUdJO0VBQ0ksbUJBQUE7QUFEUjtBQUdRO0VBQ0ksb0JBQUE7QUFEWjtBQUtJO0VBQ0ksbUJBQUE7RUFDQSxPQUFBO0FBSFI7QUFLUTtFQUNJLFlBQUE7RUFDQSxtQkFBQTtBQUhaO0FBS1k7RUFDSSxPQUFBO0FBSGhCO0FBT1E7RUFDSSxtQkFBQTtFQUNBLFVBQUE7QUFMWjtBQzRCSTtFRHpCSTtJQUtRLGdCQUFBO0VBSmQ7QUFDRjtBQU9RO0VBQ0ksbUJBQUE7QUFMWjtBQVFRO0VBQ0ksb0JBQUE7QUFOWjtBQ2lCSTtFRFpJO0lBSVEsZ0JBQUE7SUFDQSx1Q0FBQTtFQUxkO0FBQ0Y7QUFRSTtFQUNJLG1CQUFBO0FBTlI7QUNRSTtFREhBO0lBSVEsV0FBQTtFQUxWO0FBQ0Y7QUNHSTtFREtBO0lBRVEsd0JBQUE7RUFOVjtBQUNGO0FBU0k7RUFDSSxrQkFBQTtBQVBSIiwiZmlsZSI6InRyYW5zZmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJ1dGlscy9taXhpbnNcIjtcblxuOmhvc3Qge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleDogMTtcblxuICAgIC5wcmljZS1yYW5nZS1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgIC50cmFuc2Zlci1maWx0ZXItYnRuIHtcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMS41cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnRyYW5zZmVycy1jb250YWluZXIge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICBmbGV4OiAxO1xuXG4gICAgICAgIC50cmFuc2ZlcnMtZmlsdGVycy1jb250YWluZXIge1xuICAgICAgICAgICAgd2lkdGg6IDI5MHB4O1xuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogNTBweDtcblxuICAgICAgICAgICAgLnRyYW5zZmVycy1maWx0ZXIge1xuICAgICAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudHJhbnNmZXJzLWxpc3QtY29udGFpbmVyIHtcbiAgICAgICAgICAgIHNjcm9sbC1tYXJnaW46IDYwcHg7XG4gICAgICAgICAgICBmbGV4OiBhdXRvO1xuXG4gICAgICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgICAgIHNjcm9sbC1tYXJnaW46IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudHJhbnNmZXJzLWxpc3QtY29udGFpbmVyLXNrZWxldG9uLWxvYWRlcntcbiAgICAgICAgICAgIHNjcm9sbC1tYXJnaW46IDYwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VydmljZS1zdWJtaXNzaW9uLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBzY3JvbGwtbWFyZ2luOiAyNjBweDtcblxuICAgICAgICAgICAgQGluY2x1ZGUgbW9iaWxlIHtcbiAgICAgICAgICAgICAgICBzY3JvbGwtbWFyZ2luOiAwO1xuICAgICAgICAgICAgICAgIHotaW5kZXg6IHZhcigtLW1vYi1jb25maXJtLWJveC16LWluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAudHJhbnNmZXItbGlzdC1zdWJtaXNzaW9uLWNvbnRhaW5lcntcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogYXV0bztcblxuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAudHJhbnNmZXItbGlzdC1zdWJtaXNzaW9uLWNvbnRhaW5lci0tY29uZmlybWFibGUge1xuICAgICAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDYuMTI1cmVtO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLnNpZGViYXItZm9yLW1vYmlsZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB9XG59XG4iLCIkYnJlYWtwb2ludHM6IChcbiAgXCJ4c1wiOiAwLFxuICBcInNtXCI6IDU3NnB4LFxuICBcIm1kXCI6IDc2OHB4LFxuICBcImxnXCI6IDk5MnB4LFxuICBcInhsXCI6IDEyMDBweCxcbiAgXCJ4eGxcIjogMTQwMHB4XG4pO1xuXG5AbWl4aW4geHMge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICd4cycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHNtIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnc20nKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBtZCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ21kJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbGcge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdsZycpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHhsIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneGwnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB0ei1tZWRpYS1icmVha3BvaW50LWRvd24oJGJwOiAwKSB7XG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkYnApIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1iZXR3ZWVuKCRicE1pbiwgJGJwTWF4KSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiAkYnBNaW4pIGFuZCAobWF4LXdpZHRoOiAkYnBNYXgpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbW9iaWxlKCkge1xuICAgIEBtZWRpYSAobWF4LXdpZHRoOiA5MjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBkZXNrdG9wKCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiB0YWJsZXQoKSB7XG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkyMXB4KSBhbmQgKG1heC13aWR0aDogMTIyMHB4KSB7XG4gICAgICAgIEBjb250ZW50O1xuICAgIH1cbn1cblxuQG1peGluIG9uLWhvdmVyIHtcbiAgICBAbWVkaWEgbm90IGFsbCBhbmQgKGhvdmVyOiBub25lKSB7XG4gICAgICAgICY6aG92ZXIge1xuICAgICAgICAgICAgQGNvbnRlbnQ7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiB0ei1zY3JvbGwtYmFyLXN0eWxlIHtcbiAgICAmOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbiB7XG4gICAgICAgIGhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgd2lkdGg6IDAuNXJlbTtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXItYnV0dG9uOmhvcml6b250YWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrLXBpZWNlIHtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZmlyZWZveC1vbmx5IHtcbiAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG4iXX0= */", "[_nghost-%COMP%] {\n  display: flex;\n}\n[_nghost-%COMP%]   .tz-btn-primary[_ngcontent-%COMP%] {\n  color: var(--color-main-text-mobile);\n  font-style: normal;\n  height: 2.5rem;\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n}\n[_nghost-%COMP%]   .tz-mob-modal-rent-details[_ngcontent-%COMP%] {\n  background-color: var(--upgrade-right-border);\n}\n[_nghost-%COMP%]   .tz-mob-modal-rent-details__car-item[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n}\n[_nghost-%COMP%]   .tz-mob-modal-rent-details__links[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  margin-bottom: 0.25rem;\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 16px;\n}\n[_nghost-%COMP%]   .tz-mob-modal-rent-details__confirm[_ngcontent-%COMP%] {\n  background-color: var(--color-primary-white);\n  padding: 0.5rem 1rem;\n  border-top: 1px solid var(--color-border-mobile);\n}\n[_nghost-%COMP%]   .tz-mob-modal-rent-details__confirm-top[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 0.28125rem;\n}\n[_nghost-%COMP%]   .tz-mob-modal-rent-details__confirm-total[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 0.875rem;\n  line-height: 150%;\n  text-transform: lowercase;\n  color: var(--color-text-mobile);\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]   .tz-mob-modal-rent-details__confirm-total[_ngcontent-%COMP%]:first-letter {\n  text-transform: uppercase;\n}\n[_nghost-%COMP%]   .tz-mob-modal-rent-details__confirm-price[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.25rem;\n  line-height: 1.5rem;\n  color: var(--color-main-purple);\n  margin: 0;\n  padding: 0;\n}\n[_nghost-%COMP%]   .tz-mob-modal-rent-details__confirm-description[_ngcontent-%COMP%] {\n  color: var(--color-grey-mobile);\n  font-style: italic;\n  font-weight: 300;\n  font-size: 0.6875rem;\n  line-height: 0.8056rem;\n  text-align: right;\n  margin-bottom: 0.625rem;\n}\n[_nghost-%COMP%]   .tz-mob-modal-rent-details__confirm-description[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-weight: 100;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRyYW5zZmVycy5jb21wb25lbnQubW9iaWxlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0o7QUFDSTtFQUNJLG9DQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0FBQ1I7QUFFSTtFQUNJLDZDQUFBO0FBQVI7QUFFUTtFQUNJLHNCQUFBO0FBQVo7QUFJWTtFQUNJLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7QUFGaEI7QUFNUTtFQUNJLDRDQUFBO0VBQ0Esb0JBQUE7RUFDQSxnREFBQTtBQUpaO0FBTVk7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSx5QkFBQTtBQUpoQjtBQU9ZO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSwrQkFBQTtFQUNBLFNBQUE7RUFDQSxVQUFBO0FBTGhCO0FBT2dCO0VBQ0kseUJBQUE7QUFMcEI7QUFTWTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFQaEI7QUFVWTtFQUNJLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0Esc0JBQUE7RUFDQSxpQkFBQTtFQUNBLHVCQUFBO0FBUmhCO0FBVWdCO0VBQ0ksZ0JBQUE7QUFScEIiLCJmaWxlIjoidHJhbnNmZXJzLmNvbXBvbmVudC5tb2JpbGUuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgLnR6LWJ0bi1wcmltYXJ5IHtcbiAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tdGV4dC1tb2JpbGUpO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGhlaWdodDogMi41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIH1cblxuICAgIC50ei1tb2ItbW9kYWwtcmVudC1kZXRhaWxzIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdXBncmFkZS1yaWdodC1ib3JkZXIpO1xuXG4gICAgICAgICZfX2Nhci1pdGVtIHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAmX19saW5rcyB7XG4gICAgICAgICAgICAmID4gZGl2IHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjI1cmVtO1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNnB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJl9fY29uZmlybSB7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAuNXJlbSAxcmVtO1xuICAgICAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1tb2JpbGUpO1xuXG4gICAgICAgICAgICAmLXRvcCB7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMC4yODEyNXJlbTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi10b3RhbCB7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNTAlO1xuICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBsb3dlcmNhc2U7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLXRleHQtbW9iaWxlKTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICAgICAgICAgICY6Zmlyc3QtbGV0dGVyIHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICYtcHJpY2Uge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJi1kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgICAgICAgY29sb3I6IHZhcigtLWNvbG9yLWdyZXktbW9iaWxlKTtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNjg3NXJlbTtcbiAgICAgICAgICAgICAgICBsaW5lLWhlaWdodDogMC44MDU2cmVtO1xuICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDAuNjI1cmVtO1xuXG4gICAgICAgICAgICAgICAgc3BhbiB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIl19 */"]
});

/***/ }),

/***/ 3796:
/*!***************************************************************!*\
  !*** ./src/app/modules/results/transfers/transfers.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersModule": () => (/* binding */ TransfersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _transfers_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./transfers-routing.module */ 21370);
/* harmony import */ var _transfers_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./transfers.component */ 92482);
/* harmony import */ var _components_transfers_list_transfers_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/transfers-list/transfers-list.component */ 98118);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ 95758);
/* harmony import */ var _components_transfer_list_result_information_transfer_list_result_information_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/transfer-list-result-information/transfer-list-result-information.component */ 56020);
/* harmony import */ var _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../results-cart-item-selection.module */ 8793);
/* harmony import */ var _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../results-filters/results-filters.module */ 1675);
/* harmony import */ var src_app_config_translation_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/config/translation.config */ 19027);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 3184);







// eslint-disable-next-line max-len






class TransfersModule {
}
TransfersModule.ɵfac = function TransfersModule_Factory(t) { return new (t || TransfersModule)(); };
TransfersModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({ type: TransfersModule });
TransfersModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({ imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
            _transfers_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransfersRoutingModule,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule.forChild(src_app_config_translation_config__WEBPACK_IMPORTED_MODULE_7__.TRANSLATION_CONFIG),
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
            _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_5__.ResultsCartItemSelectionModule,
            _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_6__.ResultsFiltersModule,
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](TransfersModule, { declarations: [_transfers_component__WEBPACK_IMPORTED_MODULE_1__.TransfersComponent, _components_transfers_list_transfers_list_component__WEBPACK_IMPORTED_MODULE_2__.TransfersListComponent, _components_transfer_list_result_information_transfer_list_result_information_component__WEBPACK_IMPORTED_MODULE_4__.TransferListResultInformationComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__.SharedModule,
        _transfers_routing_module__WEBPACK_IMPORTED_MODULE_0__.TransfersRoutingModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__.TranslateModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__.MatDialogModule,
        _results_cart_item_selection_module__WEBPACK_IMPORTED_MODULE_5__.ResultsCartItemSelectionModule,
        _results_filters_results_filters_module__WEBPACK_IMPORTED_MODULE_6__.ResultsFiltersModule] }); })();


/***/ }),

/***/ 81105:
/*!*************************************************************!*\
  !*** ./src/app/modules/results/transfers/transfers.sort.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersSort": () => (/* binding */ TransfersSort)
/* harmony export */ });
const TransfersSort = [
    {
        sort: 'bestValue',
        label: 'GENERAL.SORT.BEST_VALUE',
    },
    {
        sort: 'cheapest',
        label: 'GENERAL.SORT.CHEAPEST',
    },
];


/***/ }),

/***/ 98209:
/*!******************************************************************************!*\
  !*** ./src/app/services/modules/transfers/dataservices/transfers.service.ts ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TransfersService": () => (/* binding */ TransfersService)
/* harmony export */ });
/* harmony import */ var _services_modules_core_dataservices_result_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/core/dataservices/result.service */ 79487);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);



class TransfersService extends _services_modules_core_dataservices_result_service__WEBPACK_IMPORTED_MODULE_0__.ResultService {
    constructor() {
        super(...arguments);
        this.serviceId = _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRANSFER;
    }
    getTwoSelectedTransferQueryData(selectedTransfers) {
        const final = {};
        selectedTransfers.forEach((t) => {
            const uniqueKey = t.journeyType;
            final[uniqueKey] = {
                selectedID: t.id,
                dataId: this.searchDataService.getDataId(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRANSFER),
                journeyType: t.journeyType,
            };
        });
        return JSON.stringify(final);
        /*return JSON.stringify({
            onwardJourney: {
                dataId: this.searchDataService.getDataId(this.serviceId),
                journeyType: 'onwardJourney',
                selectedID: transfer.id,
            },
        });*/
    }
    addTransferToCart(transfers) {
        const options = transfers.map((transfer) => ({
            bookingOptions: [
                {
                    journeyType: transfer.journeyType,
                    transferDataID: this.searchDataService.getDataId(_core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_1__.ServiceId.TRANSFER),
                    updateTransferCart: false,
                },
            ],
            id: transfer.id,
        }));
        return this.addToCart(options);
    }
    handlingDataTransfersData(data, cartTransfersIds) {
        data.map((item) => {
            item.recommended = false;
            if (item.onwardDetails.isHighlyRecommended && !cartTransfersIds.includes(item.id)) {
                item.recommended = true;
            }
        });
        return data;
    }
}
TransfersService.ɵfac = /*@__PURE__*/ function () { let ɵTransfersService_BaseFactory; return function TransfersService_Factory(t) { return (ɵTransfersService_BaseFactory || (ɵTransfersService_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetInheritedFactory"](TransfersService)))(t || TransfersService); }; }();
TransfersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: TransfersService, factory: TransfersService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=src_app_modules_results_transfers_transfers_module_ts.js.map