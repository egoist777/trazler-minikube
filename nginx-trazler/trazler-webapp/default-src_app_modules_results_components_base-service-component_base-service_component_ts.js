"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_modules_results_components_base-service-component_base-service_component_ts"],{

/***/ 6371:
/*!*********************************************************************************************!*\
  !*** ./src/app/modules/results/components/base-service-component/base-service.component.ts ***!
  \*********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseServiceComponent": () => (/* binding */ BaseServiceComponent)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var _services_screen_detector_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/screen-detector.service */ 15257);
/* harmony import */ var _services_dialog_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/dialog.service */ 96819);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/modules/cart/services/cart.service */ 16750);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);
/* harmony import */ var _services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/modules/core/listeners-service */ 96831);
/* harmony import */ var _services_searchEngine_services_user_search_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/searchEngine/services/user-search-service */ 59665);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/modules/core/scroll-service */ 90097);
/* harmony import */ var _services_modules_cart_services_cart_routing_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/modules/cart/services/cart-routing.service */ 72753);
/* harmony import */ var _services_services_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/services/settings-service */ 71661);
/* harmony import */ var _services_services_currency_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/services/currency-service */ 60912);
/* harmony import */ var _results_filters_components_filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../results-filters/components/filter-dialog/filter-dialog.component */ 83733);
/* harmony import */ var _services_modules_core_loader_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @services/modules/core/loader.service */ 408);
/* harmony import */ var _services_modules_core_poller_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @services/modules/core/poller.service */ 16909);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _services_modules_cart_services_cart_remove_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @services/modules/cart/services/cart-remove-service */ 43749);
/* harmony import */ var _services_platform_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @services/platform.service */ 88634);
/* harmony import */ var _shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @shared/pipes/date-range.pipe */ 82478);
/* harmony import */ var _shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @shared/pipes/tz-date.pipe */ 92456);
/* harmony import */ var _services_modal_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @services/modal.service */ 71609);
/* harmony import */ var _mob_filter_modal_mob_filter_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../mob-filter-modal/mob-filter-modal.component */ 53886);
/* harmony import */ var _core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @core/constants/listener-id.const */ 36795);
/* harmony import */ var _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @core/constants/keyboard-key-types.const */ 86578);
/* harmony import */ var _services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @services/modules/inactivity/filter.service */ 53768);
/* harmony import */ var _mob_sort_results_modal_mob_sort_results_modal_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../mob-sort-results-modal/mob-sort-results-modal.component */ 25724);
/* harmony import */ var _core_constants_trip__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @core/constants/trip */ 16699);
/* harmony import */ var _services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @services/modules/search/utils/dates.service */ 77251);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 3184);






























class BaseServiceComponent {
    constructor(injector) {
        this.isNextSummary = false;
        this.confirmable = false;
        this.isListCompleted = false;
        this.scrollListElementIndex = 0;
        this.start = 0;
        this.loading = false;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_26__.Subject();
        this.hotelNames = [];
        this.notComplete = false;
        this.chunkReceived = false;
        this.skeletonFilterLoading = false;
        this.noResultAvailable = false;
        this.listenerIds = [];
        this.cartService = injector.get(_services_modules_cart_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService);
        this.dialogService = injector.get(_services_dialog_service__WEBPACK_IMPORTED_MODULE_1__.DialogService);
        this.listenersService = injector.get(_services_modules_core_listeners_service__WEBPACK_IMPORTED_MODULE_4__.ListenersService);
        this.router = injector.get(_angular_router__WEBPACK_IMPORTED_MODULE_27__.Router);
        this.screenSizeDetectorService = injector.get(_services_screen_detector_service__WEBPACK_IMPORTED_MODULE_0__.ScreenDetectorService);
        this.searchDataService = injector.get(_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_3__.SearchDataService);
        this.userSearchService = injector.get(_services_searchEngine_services_user_search_service__WEBPACK_IMPORTED_MODULE_5__.UserSearchService);
        this.translateService = injector.get(_ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__.TranslateService);
        this.scrollService = injector.get(_services_modules_core_scroll_service__WEBPACK_IMPORTED_MODULE_6__.ScrollService);
        this.cartRouterService = injector.get(_services_modules_cart_services_cart_routing_service__WEBPACK_IMPORTED_MODULE_7__.CartRoutingService);
        this.settingsService = injector.get(_services_services_settings_service__WEBPACK_IMPORTED_MODULE_8__.SettingsService);
        this.currencyService = injector.get(_services_services_currency_service__WEBPACK_IMPORTED_MODULE_9__.CurrencyService);
        this.loaderService = injector.get(_services_modules_core_loader_service__WEBPACK_IMPORTED_MODULE_11__.LoaderService);
        this.pollerService = injector.get(_services_modules_core_poller_service__WEBPACK_IMPORTED_MODULE_12__.PollerService);
        this.cartRemoveService = injector.get(_services_modules_cart_services_cart_remove_service__WEBPACK_IMPORTED_MODULE_14__.CartRemoveService);
        this.userSearchService = injector.get(_services_searchEngine_services_user_search_service__WEBPACK_IMPORTED_MODULE_5__.UserSearchService);
        this.platformService = injector.get(_services_platform_service__WEBPACK_IMPORTED_MODULE_15__.PlatformService);
        this.dateRange = injector.get(_shared_pipes_date_range_pipe__WEBPACK_IMPORTED_MODULE_16__.DateRangePipe);
        this.datePipe = injector.get(_shared_pipes_tz_date_pipe__WEBPACK_IMPORTED_MODULE_17__.TzDatePipe);
        this.isSearchRunning = this.checkPreSearchState();
        this.isMobile$ = this.screenSizeDetectorService.isMobile;
        this.modalService = injector.get(_services_modal_service__WEBPACK_IMPORTED_MODULE_18__.ModalService);
        this.filterService = injector.get(_services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_22__.FilterService);
        this.datesService = injector.get(_services_modules_search_utils_dates_service__WEBPACK_IMPORTED_MODULE_25__.DatesService);
        this.listenerIds.push(this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_20__.ListenerId.LISTEN_SEARCH_ERR, this.checkResultsAvailable.bind(this)));
        this.listenerIds.push(this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_20__.ListenerId.LISTEN_UPDATE_SEARCH, this.noResultMoveNext.bind(this)));
        this.listenerIds.push(this.listenersService.registerListener(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_20__.ListenerId.LISTEN_EDIT_SEARCH, this.listenEditSearch.bind(this)));
        this.destroy$.subscribe(() => {
            this.baseDestroy();
        });
    }
    static resetFilter(filter, filter$) {
        for (const filterItem of filter) {
            _services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_22__.FilterService.clearAll(filterItem);
        }
        filter$.next(filter);
    }
    static formAddress(address) {
        const addressStr = address.cityName && address.cityName !== '' ? address.cityName : address.displayStr;
        return addressStr.split(',')[0];
    }
    cbInterceptor(cb, ...args) {
        this.notComplete = false;
        cb(args);
    }
    scrollToElement(element, options) {
        if (element) {
            this.scrollService.scrollToElement(element, options);
        }
    }
    openFilterDialog(filter, resultsCount, searchHotel$) {
        const searchHotel = {
            hotelNames: this.hotelNames,
            searchHotel$,
        };
        this.dialogService.openFilterDialog(_results_filters_components_filter_dialog_filter_dialog_component__WEBPACK_IMPORTED_MODULE_10__.FilterDialogComponent, {
            filter,
            resultsCount,
            searchHotel: searchHotel$ ? searchHotel : undefined,
        });
    }
    openFilterModal(filter, resultsCount$) {
        this.modalService.createMainModal(_mob_filter_modal_mob_filter_modal_component__WEBPACK_IMPORTED_MODULE_19__.MobFilterModalComponent, {
            data: { filter, resultsCount$ },
            title: 'FILTER.COMPONENT.FILTER',
        });
    }
    openSortMob(sortByOptions, sortKey, sort$) {
        this.modalService
            .createMainModal(_mob_sort_results_modal_mob_sort_results_modal_component__WEBPACK_IMPORTED_MODULE_23__.MobSortResultsModalComponent, {
            data: { sortByOptions, sortKey },
            title: 'FILTER.COMPONENT.SORT_BY',
        })
            .then((modal) => {
            if (modal.data) {
                sort$.next(modal.data);
            }
        });
    }
    getStateFromParamFromRouter() {
        var _a, _b;
        const state = (_b = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras) === null || _b === void 0 ? void 0 : _b.state;
        if (state) {
            return state['from'];
        }
    }
    searchRunning() {
        return this.isSearchRunning;
    }
    removeService(serviceId, optionId, checkBooking) {
        if (optionId === '') {
            optionId = undefined;
        }
        return this.cartRemoveService.removeTheService(serviceId, optionId, checkBooking);
    }
    setListScrollingElementIndex(index) {
        this.scrollListElementIndex = index;
    }
    resetPaginationParameters() {
        this.start = 0;
        this.isListCompleted = false;
    }
    formServiceTitle(serviceId, isRoundTrip = false, currentService) {
        const searchInfos = this.searchDataService.getSearchData(serviceId);
        const travelType = isRoundTrip ? _core_constants_trip__WEBPACK_IMPORTED_MODULE_24__.Trip.ROUND_TRIP : _core_constants_trip__WEBPACK_IMPORTED_MODULE_24__.Trip.ONE_WAY;
        if (!searchInfos) {
            return '';
        }
        const formatTitleStr = (serviceKey, title, dates) => `${this.translateService.instant(serviceKey)}&nbsp;·&nbsp;<div class='overflow-ellipsis'>${title}</div>,&nbsp;${dates}`;
        switch (serviceId) {
            case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_13__.ServiceId.FLIGHT_TRAIN: {
                if (!searchInfos.to || !searchInfos.tripCal) {
                    return '';
                }
                const addrStr = this.translateService.instant('FLIGHT_TRAIN.' + (isRoundTrip ? 'ROUND_TRIP_OPTION_TO' : 'ONE_WAY_OPTION_TO'), { address: BaseServiceComponent.formAddress(searchInfos.to) });
                const datePartString = this.datesService.getCalendarDateString(searchInfos.tripCal.fromDate, searchInfos.tripCal.toDate, '', { time: false }, '', '', travelType);
                return formatTitleStr(currentService === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_13__.ServiceId.FLIGHT ? 'FLIGHT.FLIGHT' : 'TRAIN.TRAIN', addrStr, datePartString);
            }
            case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_13__.ServiceId.ACC: {
                if (!searchInfos.address || !searchInfos.tripCal) {
                    return '';
                }
                const addrStr = `${this.translateService.instant('GENERAL.IN_AND_AROUND', {
                    address: BaseServiceComponent.formAddress(searchInfos.address),
                })}`;
                const datePartString = this.datesService.getCalendarDateString(searchInfos.tripCal.fromDate, searchInfos.tripCal.toDate, '', { time: false }, '', '', travelType);
                return formatTitleStr('HOTELS.HOTELS', addrStr, datePartString);
            }
            case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_13__.ServiceId.TRANSFER: {
                if (!searchInfos.transferCal) {
                    return '';
                }
                const serviceName = this.translateService.instant('TRANSFER.TRANSFERS');
                const tripType = this.translateService.instant('TRANSFER.' + (isRoundTrip ? 'ROUND_TRIP_OPTIONS' : 'ONE_WAY_OPTIONS'));
                const datePartString = this.datesService.getCalendarDateString(searchInfos.transferCal.fromDate, searchInfos.transferCal.toDate, '', { time: true }, searchInfos.transferCal.fromTime, searchInfos.transferCal.toTime, travelType);
                return `${serviceName}&nbsp;·&nbsp;${tripType},&nbsp;${datePartString}`;
            }
            case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_13__.ServiceId.CAR_RENTAL: {
                if (!searchInfos.to || !searchInfos.rentalCal) {
                    return '';
                }
                const addrStr = `${this.translateService.instant('GENERAL.IN_AND_AROUND', {
                    address: BaseServiceComponent.formAddress(searchInfos.to),
                })}`;
                const datePartString = this.datesService.getCalendarDateString(searchInfos.rentalCal.fromDate, searchInfos.rentalCal.toDate, '', { time: true }, searchInfos.rentalCal.fromTime, searchInfos.rentalCal.toTime, travelType);
                return formatTitleStr('SEARCH.TAB.CAR_RENTALS', addrStr, datePartString);
            }
        }
        return '';
    }
    scrollTo(scrollId, scrollTop = 68, smooth = true) {
        this.scrollService.scrollTo(scrollId, scrollTop, smooth);
    }
    filterCount(filter) {
        return _services_modules_inactivity_filter_service__WEBPACK_IMPORTED_MODULE_22__.FilterService.selctedfilterItem(filter);
    }
    startPollerIfTheFullDataIsNotLoaded(serviceId, callback) {
        if (!this.isSearchComplete(serviceId)) {
            this.notComplete = true;
            this.skeletonFilterLoading = true;
            this.getMetadataOfService(serviceId, callback);
        }
        else {
            this.hideFilterSkeletonLoader();
            this.notComplete = false;
        }
    }
    hideSkeletonLoader(filterLoader = false) {
        this.loaderService.skeletonLoading = false;
        if (filterLoader) {
            this.hideFilterSkeletonLoader();
        }
    }
    showSkeletonLoader(filterLoader = false) {
        this.loaderService.skeletonLoading = true;
        if (filterLoader) {
            this.showFilterSkeletonLoader();
        }
    }
    hideFilterSkeletonLoader() {
        this.skeletonFilterLoading = false;
    }
    showFilterSkeletonLoader() {
        this.skeletonFilterLoading = true;
    }
    checkResultsAvailable(serviceId) {
        const data = this.searchDataService.getSearchResult(serviceId);
        this.noResultAvailable = !data || data.resultLength === 0;
        return this.noResultAvailable;
    }
    scrollToTop() {
        this.scrollService.scrollToTop();
    }
    scrollToServiceContainer() {
        this.scrollService.scrollToServiceContainer();
    }
    baseDestroy() {
        for (const listenerId of this.listenerIds) {
            this.listenersService.unregisterListener(listenerId);
        }
    }
    getMetadataOfService(serviceId, callback) {
        const combinationId = this.searchDataService.getCombId();
        const dataId = this.searchDataService.getDataId(serviceId);
        this.pollerService.registerPoller(combinationId, dataId, serviceId, this.cbInterceptor.bind(this, callback));
    }
    isSearchComplete(serviceId) {
        const savedResults = this.searchDataService.getSearchResult(serviceId);
        return savedResults && savedResults.complete;
    }
    noResultMoveNext(resultData) {
        if (resultData.shouldEdit) {
            this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_20__.ListenerId.LISTEN_ENABLE_EDIT, true);
            this.listenersService.NotifyListeners(_core_constants_listener_id_const__WEBPACK_IMPORTED_MODULE_20__.ListenerId.LISTEN_FOCUS_NEXT, {
                id: 'tabIdx1',
                moveTo: _core_constants_keyboard_key_types_const__WEBPACK_IMPORTED_MODULE_21__.TzFocusType.MOVE_TO_INVALID,
            });
        }
        else {
            this.userSearchService.searchCheckDep(resultData.serviceId, false, false, false, false);
        }
    }
    checkPreSearchState() {
        var _a;
        const state = (_a = this.router.getCurrentNavigation()) === null || _a === void 0 ? void 0 : _a.extras.state;
        if (state && state['extra']) {
            return state['extra'].preSearch === true;
        }
        return false;
    }
    listenEditSearch() {
        this.showSkeletonLoader(true);
    }
}
BaseServiceComponent.ɵfac = function BaseServiceComponent_Factory(t) { return new (t || BaseServiceComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_29__.Injector)); };
BaseServiceComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineComponent"]({ type: BaseServiceComponent, selectors: [["tz-base-service-component"]], decls: 2, vars: 0, template: function BaseServiceComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](1, "base-service-component works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNlLXNlcnZpY2UuY29tcG9uZW50cy5zY3NzIn0= */"] });


/***/ })

}]);
//# sourceMappingURL=default-src_app_modules_results_components_base-service-component_base-service_component_ts.js.map