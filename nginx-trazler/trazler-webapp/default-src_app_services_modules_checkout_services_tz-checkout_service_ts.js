"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["default-src_app_services_modules_checkout_services_tz-checkout_service_ts"],{

/***/ 95678:
/*!***************************************************************************!*\
  !*** ./src/app/services/modules/checkout/services/tz-checkout.service.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TzCheckoutService": () => (/* binding */ TzCheckoutService)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @core/constants/service-id.const */ 35281);
/* harmony import */ var _core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @core/constants/validation-patterns.const */ 1903);
/* harmony import */ var _schemas_modules_flights_flight_luggage_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @schemas/modules/flights/flight-luggage.model */ 79890);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ 56908);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @core/utils/tz-passenger.util */ 84673);
/* harmony import */ var _core_constants_trip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @core/constants/trip */ 16699);
/* harmony import */ var _core_utils_dates_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @core/utils/dates-utils */ 59505);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ngx-translate/core */ 87514);
/* harmony import */ var _shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @shared/pipes/tz-currency.pipe */ 98967);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/searchEngine/services/search-data.service */ 89439);













class TzCheckoutService {
    constructor(translateService, tzCurrencyPipe, userService, searchDataService) {
        this.translateService = translateService;
        this.tzCurrencyPipe = tzCurrencyPipe;
        this.userService = userService;
        this.searchDataService = searchDataService;
    }
    getHelpers(cartData, luggageAmount, insurance, paymentCaptureMode = -1) {
        const cur = cartData.itemPrice.listPriceCur;
        const extraAmt = -cartData.itemPrice.additionalChargeNow +
            (luggageAmount && luggageAmount.listPrice ? luggageAmount.listPrice : 0) +
            +(insurance && insurance.net && insurance.net.listPrice ? insurance.net.listPrice : 0);
        const total = cartData.itemPrice.listPrice + extraAmt;
        const totalImprintAmt = this.getPriceString(cartData.totalImprintAmt, cur);
        let payNow = cartData.payNow +
            (!cartData.itemPrice.additionalChargeNow && luggageAmount && luggageAmount.listPrice
                ? luggageAmount.listPrice
                : 0);
        let unleashAmt = cartData.unleashAmt;
        let payableAmt = cartData.itemPrice.payableAmt;
        if (paymentCaptureMode === -1) {
            // when payment is not done
            if (payNow > 0) {
                // if payNow amt is greater than zero after adding luggage, remove the unleash amount
                payNow -= cartData.unleashAmt;
            }
            unleashAmt -= extraAmt; // if not paid remove luggage amt after calculated
            payableAmt += extraAmt;
        }
        return {
            total,
            totalImprintAmt,
            imprintText: this.getImprintText(cartData.totalImprintAmt, payableAmt, payNow, unleashAmt, cur),
            unleashAmt: unleashAmt > 0 ? this.getPriceString(unleashAmt, cur) : '',
            payNow: this.getPriceString(payNow, cur),
            payNowInt: payNow,
            paid: paymentCaptureMode !== -1,
            paidInt: cartData.totalImprintAmt,
            paidAmt: this.getPriceString(cartData.totalImprintAmt - unleashAmt, cur),
            currency: cur,
        };
    }
    formCheckoutCartSummary(cartItems) {
        const summaries = [];
        cartItems.forEach((cartItem) => {
            const itemSummary = {
                serviceId: cartItem.serviceId,
                totalPrice: cartItem.itemPrice.payableAmt +
                    cartItem.itemPrice.payLaterAmt -
                    cartItem.itemPrice.additionalChargeNow,
                currency: cartItem.itemPrice.listPriceCur,
                additionalCharge: cartItem.itemPrice.additionalCharge,
                dueOnArrival: cartItem.itemPrice.dueOnArrival,
                refundAmt: cartItem.refundAmt,
                bookingOptions: cartItem.selectedItem.bookingOptions,
            };
            switch (cartItem.serviceId) {
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.ACC:
                    summaries.push(Object.assign(Object.assign({}, itemSummary), this.formAccCartSummary(cartItem)));
                    break;
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT:
                    const flight = cartItem.selectedItem.data;
                    summaries.push(Object.assign(Object.assign({}, itemSummary), { originCity: flight.departureSummary.originCity, originCode: flight.departureSummary.originCode, destinationCity: flight.departureSummary.destinationCity, destinationCode: flight.departureSummary.destinationCode, departureTzFormat: flight.departureSummary.departureTzFormat, arrivalTzFormat: flight.returnSummary.arrivalTzFormat, paxInfo: _core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_4__.TzPassengerUtil.formPaxDisplayStr({}, cartItem.searchReq.passengers, this.translateService, true), flyType: flight.isRoundTrip ? _core_constants_trip__WEBPACK_IMPORTED_MODULE_5__.Trip.ROUND_TRIP : _core_constants_trip__WEBPACK_IMPORTED_MODULE_5__.Trip.ONE_WAY, ordinal: 1 }));
                    break;
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRAIN:
                    const train = cartItem.selectedItem.data;
                    summaries.push(Object.assign(Object.assign({}, itemSummary), { originCity: train.onward.departure.location.city, originName: train.onward.departure.location.name, originCode: train.onward.departure.location.code, destinationCity: train.onward.arrival.location.city, destinationName: train.onward.arrival.location.name, destinationCode: train.onward.arrival.location.code, departureTzFormat: train.onward.departure.dateTzFormat, arrivalTzFormat: train.onward.arrival.dateTzFormat, paxInfo: _core_utils_tz_passenger_util__WEBPACK_IMPORTED_MODULE_4__.TzPassengerUtil.formPaxDisplayStr({}, cartItem.searchReq.passengers, this.translateService, true), flyType: cartItems.filter((item) => item.serviceId === _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRAIN).length > 1
                            ? _core_constants_trip__WEBPACK_IMPORTED_MODULE_5__.Trip.ROUND_TRIP
                            : _core_constants_trip__WEBPACK_IMPORTED_MODULE_5__.Trip.ONE_WAY, ordinal: 1 }));
                    break;
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRANSFER:
                    const transfer = cartItem.selectedItem.data;
                    summaries.push(Object.assign(Object.assign({}, itemSummary), { pickup: transfer.onwardDetails.pickup, drop: transfer.onwardDetails.drop, pickupTzDate: transfer.onwardDetails.pickupTzDate, description: this.translateService.instant(`TRANSFER.CLASS.${transfer.vehicle.class}`), ordinal: 3 }));
                    break;
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.CAR_RENTAL:
                    const rental = cartItem.selectedItem.data;
                    summaries.push(Object.assign(Object.assign({}, itemSummary), { class: rental.vehicle.class, name: rental.vehicle.name, pickupTzDate: rental.pickupTzDate, dropOffTzDate: rental.dropOffTzDate, mandatoryCharges: rental.mandatoryCharges, extraPrice: rental.extraPrice, ordinal: 4 }));
                    break;
            }
        });
        summaries.sort((a, b) => a.ordinal - b.ordinal);
        return summaries;
    }
    formCartTravellersData(cartData) {
        const cartTravellerInfo = {};
        const trainTravelDates = [];
        Object.entries(cartData.items).forEach(([key, item]) => {
            const cartItem = item;
            switch (cartItem.serviceId) {
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT: {
                    const flight = cartItem.selectedItem.data;
                    cartTravellerInfo.FLIGHT_TRAIN = {
                        passengers: cartItem.searchReq.passengers,
                        travelCondition: cartItem.selectedItem.bookingOptions[0].travellerConditions,
                        isFlight: true,
                        travelDate: {
                            startDate: new Date(flight.departureSummary.departureTzFormat),
                            endDate: new Date(flight.isRoundTrip
                                ? flight.returnSummary.departureTzFormat
                                : flight.departureSummary.departureTzFormat),
                        },
                    };
                    break;
                }
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRAIN: {
                    trainTravelDates.push(new Date(cartItem.selectedItem.data.onward.departure.dateTzFormat));
                    trainTravelDates.sort((a, b) => +a - +b);
                    cartTravellerInfo.FLIGHT_TRAIN = {
                        passengers: cartItem.searchReq.passengers,
                        travelCondition: cartItem.selectedItem.bookingOptions[0].travellerConditions,
                        isFlight: false,
                        travelDate: {
                            startDate: trainTravelDates[0],
                            endDate: trainTravelDates.length > 1 ? trainTravelDates[1] : trainTravelDates[0],
                        },
                    };
                    break;
                }
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.ACC: {
                    const accRoomTypeInfo = [];
                    cartItem.selectedItem.bookingOptions.forEach((option) => {
                        accRoomTypeInfo.push({
                            optionId: option.optionId,
                            roomOfferId: option.selectedRoom.roomOfferId,
                            roomType: this.getRoomDisplayName(option.selectedRoom.roomId, cartItem.selectedItem.data.rooms),
                        });
                    });
                    cartTravellerInfo.ACC = {
                        roomTypes: accRoomTypeInfo,
                        travelDate: {
                            startDate: new Date(cartItem.selectedItem.data.checkIn),
                            endDate: new Date(cartItem.selectedItem.data.checkOut),
                        },
                    };
                    break;
                }
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRANSFER: {
                    cartTravellerInfo.TRANSFER = true;
                    break;
                }
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.CAR_RENTAL: {
                    cartTravellerInfo.RENTAL = {
                        driversAge: cartItem.searchReq.passengers.driversAge,
                        travelDate: {
                            startDate: new Date(cartItem.selectedItem.data.pickupTzDate),
                            endDate: new Date(cartItem.selectedItem.data.pickupTzDate),
                        },
                        driverAgeLimit: {
                            min: 21,
                            max: 80,
                        },
                    };
                    break;
                }
            }
        });
        return cartTravellerInfo;
    }
    getProfileGroup() {
        const group = {
            firstName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.NAME),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(100),
            ]),
            lastName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.NAME),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(100),
            ]),
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required]),
            emailID: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.EMAIL)]),
        };
        if (this.userService.IsLogged()) {
            const customer = this.userService.getCustomerInformation();
            group.firstName.setValue(customer.firstName);
            group.lastName.setValue(customer.lastName);
            group.emailID.setValue(customer.emailID);
            group.phone.setValue(customer.phone ? customer.phone.number : '');
        }
        else {
            group.emailID.addValidators([this.updateRepeatEmail()]);
            group.repeatEmailID = new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.EMAIL),
                this.repeatMailValidator(),
            ]);
        }
        return group;
    }
    getPaymentGroup() {
        return {
            holder: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.NAME),
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(100),
            ]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.STRING), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(100)]),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.ZIPCODE), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(10)]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.STRING)),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
        };
    }
    getBillingGroup() {
        return {
            companyName: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.STRING), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(100)]),
            vatNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.STRING), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(20)]),
            address: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.STRING), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(100)]),
            zipCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.ZIPCODE), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(10)]),
            city: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl('', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.STRING), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(100)]),
            country: new _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControl(''),
        };
    }
    setBillingValidators(billing, required) {
        const setFormValidity = (controlName) => {
            const control = billing.get(controlName);
            control === null || control === void 0 ? void 0 : control.setValidators([_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(_core_constants_validation_patterns_const__WEBPACK_IMPORTED_MODULE_1__.ValidatorPatterns.STRING), _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.maxLength(100)]);
            if (required) {
                control === null || control === void 0 ? void 0 : control.addValidators(_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required);
            }
            control === null || control === void 0 ? void 0 : control.updateValueAndValidity();
        };
        setFormValidity('companyName');
        setFormValidity('address');
        setFormValidity('city');
        setFormValidity('country');
    }
    setBillingValue(billing) {
        if (!this.userService.IsLogged()) {
            return;
        }
        const billingAddress = this.userService.getCustomerInformation().billingAddress;
        const setFormValue = (controlName, value) => {
            const control = billing.get(controlName);
            if (!(control === null || control === void 0 ? void 0 : control.value) || (control === null || control === void 0 ? void 0 : control.value) === '') {
                control === null || control === void 0 ? void 0 : control.setValue(value);
            }
        };
        setFormValue('companyName', billingAddress.companyName);
        setFormValue('vatNo', billingAddress.vatNo);
        setFormValue('address', billingAddress.address);
        setFormValue('zipCode', billingAddress.zipCode);
        setFormValue('city', billingAddress.city);
        setFormValue('country', {
            name: billingAddress.country,
            code: billingAddress.countryCode,
        });
    }
    formTransportLuggage(cartData) {
        let luggages;
        let trainLuggageOnward;
        let trainLuggageReturn;
        Object.entries(cartData.items).forEach(([key, item]) => {
            const cartItem = item;
            switch (cartItem.serviceId) {
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT: {
                    const flightLuggage = {
                        flightLuggage: this.mapByPassengerType(cartItem.selectedItem.data.journeyLuggage, cartItem.searchReq.passengers),
                    };
                    if (flightLuggage.flightLuggage) {
                        flightLuggage.isRoundTrip = cartItem.selectedItem.data.isRoundTrip;
                    }
                    luggages = {
                        flight: flightLuggage,
                    };
                    break;
                }
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRAIN: {
                    const trainLuggage = this.getTrainLuggages(cartItem.selectedItem.data.onward.trainClass.tzBaggage);
                    if (trainLuggage) {
                        if (cartItem.selectedItem.type === 'onwardJourney') {
                            trainLuggageOnward = trainLuggage;
                        }
                        else {
                            trainLuggageReturn = trainLuggage;
                        }
                    }
                    break;
                }
            }
        });
        if (trainLuggageOnward && trainLuggageReturn) {
            luggages = {
                train: this.verifyTrainTripLuggages(trainLuggageOnward, trainLuggageReturn),
            };
        }
        return luggages;
    }
    makeBookingReq(cartItems, checkout, paymentForm) {
        let customerPhone = this.userService.getCustomerInformation().phone;
        if (typeof paymentForm.value.profile.phone === 'object') {
            customerPhone = paymentForm.value.profile.phone;
        }
        const bookingReq = {
            combId: this.searchDataService.getCombId(),
            customer: Object.assign(Object.assign({}, paymentForm.value.profile), { phone: customerPhone, id: this.userService.IsLogged() ? this.userService.getCustomerInformation().id : '' }),
            billingInfo: {
                billingAddress: {
                    personal: Object.assign(Object.assign({}, paymentForm.value.payment), { country: paymentForm.value.payment ? paymentForm.value.payment.country.name : '', countryCode: paymentForm.value.payment ? paymentForm.value.payment.country.code : '' }),
                },
            },
            billingAddress: Object.assign(Object.assign({}, paymentForm.value.billing), { country: paymentForm.value.billing.country.name, countryCode: paymentForm.value.billing.country.code }),
            invoiceRequired: checkout.invoiceRequired,
            noPCI: true,
            travellers: [],
            accTravellers: [],
            transferTraveller: {},
            driverInfo: {},
            baggageSelected: checkout.baggageSelected,
            additionalLuggagePrice: checkout.additionalLuggagePrice,
            insuranceBooking: checkout.insurance && checkout.insurance.selectedIdx !== null && checkout.insurance.selectedIdx !== -1
                ? checkout.insurance.selected
                : null,
            note: checkout.customNote,
        };
        const formTzBookingDate = (date) => {
            if (date === '') {
                return '';
            }
            return moment__WEBPACK_IMPORTED_MODULE_3__(date, _core_utils_dates_utils__WEBPACK_IMPORTED_MODULE_6__.DatesUtils.updateTzTravelerFormat).format('yyyy-MM-DD');
        };
        cartItems.forEach((cartItem) => {
            switch (cartItem.serviceId) {
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.ACC: {
                    checkout.hotelPassengers.forEach((traveller) => {
                        bookingReq.accTravellers.push({
                            firstName: traveller.firstName,
                            middleName: traveller.middleName,
                            lastName: traveller.lastName,
                            optionId: traveller.optionId,
                        });
                    });
                    break;
                }
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.FLIGHT:
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRAIN: {
                    bookingReq.travellers = [];
                    checkout.passengerDetails.forEach((traveller) => {
                        bookingReq.travellers.push(Object.assign(Object.assign({}, traveller), { dateOfBirth: formTzBookingDate(traveller.dateOfBirth), dateOfIssue: formTzBookingDate(traveller.dateOfIssue), idCardValidity: formTzBookingDate(traveller.idCardValidity) }));
                    });
                    break;
                }
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.TRANSFER: {
                    const traveller = checkout.transferPassenger;
                    if (traveller) {
                        bookingReq.transferTraveller = {
                            firstName: traveller.firstName,
                            middleName: traveller.middleName,
                            lastName: traveller.lastName,
                            phone: traveller.phone,
                        };
                    }
                    break;
                }
                case _core_constants_service_id_const__WEBPACK_IMPORTED_MODULE_0__.ServiceId.CAR_RENTAL: {
                    const traveller = checkout.rentalPassenger;
                    if (traveller) {
                        bookingReq.driverInfo = {
                            firstName: traveller.firstName,
                            middleName: traveller.middleName,
                            lastName: traveller.lastName,
                            dateOfBirth: formTzBookingDate(traveller.dateOfBirth),
                            gender: traveller.gender,
                        };
                    }
                    break;
                }
            }
        });
        return bookingReq;
    }
    formCheckoutDraftValues(checkoutDataStr, cartInfo, checkout, travellersFormArray) {
        const checkoutData = JSON.parse(checkoutDataStr);
        if (cartInfo.FLIGHT_TRAIN) {
            const transportPassengers = checkoutData.checkoutData.passengerDetails;
            const currentFormCount = checkout.passengerDetails.length;
            const draftTransportFormArray = checkoutData.travellersFormValue.transport;
            const transportAdded = !transportPassengers || transportPassengers.length === 0;
            if (transportAdded) {
                checkoutData.checkoutData.passengerDetails = checkout.passengerDetails;
                delete checkoutData.travellersFormValue.transport;
            }
            else if (transportPassengers.length > currentFormCount) {
                checkoutData.checkoutData.passengerDetails = transportPassengers.slice(0, currentFormCount);
                checkoutData.travellersFormValue.transport = draftTransportFormArray.slice(0, currentFormCount);
                if (checkoutData.checkoutData.transportID === checkout.transportID) {
                    let total = 0;
                    for (const passenger of checkoutData.checkoutData.passengerDetails) {
                        total += passenger.additionalLuggage.totalPrice;
                    }
                    checkoutData.checkoutData.additionalLuggagePrice = {
                        listPrice: total,
                        listPriceCur: checkoutData.checkoutData.additionalLuggagePrice.listPriceCurrency,
                    };
                }
            }
            else if (transportPassengers.length < currentFormCount) {
                checkoutData.checkoutData.passengerDetails = [
                    ...transportPassengers,
                    ...checkout.passengerDetails.slice(transportPassengers.length),
                ];
                checkoutData.travellersFormValue.transport = [
                    ...draftTransportFormArray,
                    ...travellersFormArray.transport.value.slice(transportPassengers.length),
                ];
            }
            if (checkoutData.checkoutData.transportID !== checkout.transportID) {
                checkoutData.checkoutData.additionalLuggagePrice = { listPrice: 0, listPriceCur: '' };
                checkoutData.baggageSelected = false;
                for (const [i, passenger] of checkoutData.checkoutData.passengerDetails.entries()) {
                    checkoutData.checkoutData.passengerDetails[i] = Object.assign(Object.assign({}, passenger), checkout.passengerDetails[i]);
                }
            }
        }
        else {
            delete checkoutData.travellersFormValue.transport;
            delete checkoutData.checkoutData.passengerDetails;
        }
        if (cartInfo.ACC) {
            const hotelPassengers = checkoutData.checkoutData.hotelPassengers;
            const hotelAdded = !hotelPassengers || hotelPassengers === 0;
            const roomCount = travellersFormArray.hotel.controls.length;
            const draftHotelFormArray = checkoutData.travellersFormValue.hotel;
            if (hotelAdded) {
                checkoutData.checkoutData.hotelPassengers = checkout.hotelPassengers;
                delete checkoutData.travellersFormValue.hotel;
            }
            else if (hotelPassengers.length > roomCount) {
                checkoutData.checkoutData.hotelPassengers = hotelPassengers.slice(0, roomCount);
                checkoutData.travellersFormValue.hotel = draftHotelFormArray.slice(0, roomCount);
            }
            else if (hotelPassengers.length < roomCount) {
                checkoutData.checkoutData.hotelPassengers = [
                    ...hotelPassengers,
                    ...checkout.hotelPassengers.slice(hotelPassengers.length),
                ];
                checkoutData.travellersFormValue.hotel = [
                    ...draftHotelFormArray,
                    ...travellersFormArray.hotel.value.slice(hotelPassengers.length),
                ];
            }
            if (checkoutData.checkoutData.hotelPassengers.length !== 0) {
                for (const [i, passenger] of checkoutData.checkoutData.hotelPassengers.entries()) {
                    checkoutData.checkoutData.hotelPassengers[i] = Object.assign(Object.assign({}, passenger), checkout.hotelPassengers[i]);
                }
            }
        }
        else {
            delete checkoutData.travellersFormValue.hotel;
            delete checkoutData.checkoutData.hotelPassengers;
        }
        if (cartInfo.TRANSFER) {
            const transferAdded = !checkoutData.checkoutData.transferPassenger ||
                Object.keys(checkoutData.checkoutData.transferPassenger).length === 0;
            if (transferAdded) {
                checkoutData.checkoutData.transferPassenger = checkout.transferPassenger;
            }
            else {
                checkoutData.checkoutData.transferPassenger = Object.assign(Object.assign({}, checkoutData.checkoutData.transferPassenger), checkout.transferPassenger);
            }
        }
        else {
            delete checkoutData.travellersFormValue.transfer;
            delete checkoutData.checkoutData.transferPassenger;
        }
        if (cartInfo.RENTAL) {
            const rentalAdded = !checkoutData.checkoutData.rentalPassenger ||
                Object.keys(checkoutData.checkoutData.rentalPassenger).length === 0;
            if (rentalAdded) {
                checkoutData.checkoutData.rentalPassenger = checkout.rentalPassenger;
            }
            else {
                checkoutData.checkoutData.rentalPassenger = Object.assign(Object.assign({}, checkoutData.checkoutData.rentalPassenger), checkout.rentalPassenger);
            }
        }
        else {
            delete checkoutData.travellersFormValue.rental;
            delete checkoutData.checkoutData.rentalPassenger;
        }
        const profile = checkoutData.paymentFormValue.profile;
        if (this.userService.IsLogged()) {
            delete checkoutData.paymentFormValue.profile.repeatEmailID;
            if (profile.emailID === '') {
                delete checkoutData.paymentFormValue.profile;
            }
        }
        else if (!profile.repeatEmailID) {
            checkoutData.paymentFormValue.profile.repeatEmailID = '';
        }
        return JSON.stringify(checkoutData);
    }
    getImprintText(totalImprintAmt, totalPayableAmt, payNow, unleashAmt, cur) {
        const totalImprintAmtFmt = this.getPriceString(totalImprintAmt, cur);
        const totalFmt = this.getPriceString(totalPayableAmt, cur);
        switch (true) {
            case totalImprintAmt > totalPayableAmt:
                return this.translateService.instant('PROFILE.IMPRINT_AMT_HIGHER', {
                    imprintAmt: totalImprintAmtFmt,
                    newTotal: totalFmt,
                    amtToBeRefund: this.getPriceString(unleashAmt, cur),
                });
            case totalImprintAmt < totalPayableAmt:
                return this.translateService.instant('PROFILE.IMPRINT_AMT_LOWER', {
                    imprintAmt: totalImprintAmtFmt,
                    newTotal: totalFmt,
                    amtToBePaid: this.getPriceString(payNow, cur),
                });
            case totalImprintAmt === totalPayableAmt:
                return this.translateService.instant('PROFILE.IMPRINT_AMT_EQUAL', {
                    imprintAmt: totalImprintAmtFmt,
                });
            case totalImprintAmt === 0:
            default:
                return '';
        }
    }
    getPriceString(amount, currency) {
        return this.tzCurrencyPipe.transform(amount, currency) || '';
    }
    formatSelectedRooms(roomNames) {
        const roomsCountMap = roomNames.reduce((pre, cur) => ((pre[cur] = pre[cur] + 1 || 1), pre), {});
        let roomsStr = '';
        for (const room of Object.keys(roomsCountMap)) {
            if (roomsStr !== '') {
                roomsStr += ', ';
            }
            if (roomsCountMap[room] > 1) {
                roomsStr += `${roomsCountMap[room]} ${room}`;
            }
            else {
                roomsStr += ' ' + room;
            }
        }
        return roomsStr;
    }
    formAccCartSummary(cartItem) {
        const roomNames = [];
        let isPayLater = true;
        let totalPersons = 0; // traveller persons based on offer selected
        let extraBedCharge = 0;
        cartItem.selectedItem.bookingOptions.forEach((option) => {
            const selectedRoom = option.selectedRoom;
            if (selectedRoom) {
                const roomType = this.getRoomDisplayName(selectedRoom.roomId, cartItem.selectedItem.data.rooms);
                roomNames.push(roomType);
                if (!selectedRoom.isPayLater) {
                    isPayLater = false;
                }
                totalPersons += selectedRoom.selectedOffer.capacity;
                extraBedCharge += selectedRoom.selectedOffer.extraBedInfo.price.value;
            }
        });
        const checkIn = new Date(cartItem.selectedItem.data.checkIn).getTime();
        const checkOut = new Date(cartItem.selectedItem.data.checkOut).getTime();
        return {
            ordinal: 2,
            hotelName: cartItem.selectedItem.data.name,
            payLater: isPayLater,
            selectedRoomNames: this.formatSelectedRooms(roomNames),
            paxInfo: `${totalPersons} ${this.translateService.instant(totalPersons > 1 ? 'TRAVELLER.PERSONS' : 'TRAVELLER.PERSON')}`,
            numberOfNights: Math.ceil((checkOut - checkIn) / (1000 * 3600 * 24)),
            checkIn: cartItem.selectedItem.data.checkIn,
            checkOut: cartItem.selectedItem.data.checkOut,
            broker: cartItem.selectedItem.broker,
            additionalCharge: cartItem.itemPrice.additionalCharge - extraBedCharge,
            extraBedCharge,
        };
    }
    mapByPassengerType(luggage, passengers) {
        const mappedLuggage = {};
        if (!luggage) {
            return mappedLuggage;
        }
        if (luggage.checkIn && luggage.checkIn.options) {
            const res = this.mapLuggagePerPassenger('Checked bag', luggage.checkIn.options, luggage.checkIn.combinable, passengers);
            if (res) {
                mappedLuggage.checkIn = Object.assign(Object.assign({}, res), { combinable: luggage.checkIn.combinable, replaceIncluded: luggage.checkIn.replaceIncluded });
                mappedLuggage.includedOptions = res.includedOptions;
                if (luggage.checkIn.options.length === 1) {
                    mappedLuggage.checkIn.combinable = true;
                }
            }
        }
        if (luggage.cabin && luggage.cabin.options) {
            const res = this.mapLuggagePerPassenger('Cabin bag', luggage.cabin.options, luggage.cabin.combinable, passengers);
            if (res) {
                mappedLuggage.cabin = Object.assign(Object.assign({}, res), { combinable: luggage.cabin.combinable, replaceIncluded: luggage.cabin.replaceIncluded });
                if (mappedLuggage.includedOptions.bag2 === null) {
                    mappedLuggage.includedOptions = res.includedOptions;
                }
                else {
                    if (res.includedOptions.bag2 !== null) {
                        mappedLuggage.includedOptions.bag1 = res.includedOptions.bag2;
                    }
                    else {
                        mappedLuggage.includedOptions.bag1 = res.includedOptions.bag1;
                    }
                }
                if (luggage.cabin.options.length === 1) {
                    mappedLuggage.cabin.combinable = true;
                }
            }
        }
        return mappedLuggage;
    }
    setTravelerBag(travelerType, bugType, bag, title, luggageOption) {
        if (bag === null) {
            bag = {
                type: bugType,
            };
        }
        const bagData = {
            dimensions: luggageOption.dimensions,
            title,
            weightTexts: luggageOption.weightTexts,
        };
        switch (travelerType) {
            case 'Adult': {
                bag.Adult = bagData;
                break;
            }
            case 'Young': {
                bag.Young = bagData;
                break;
            }
            case 'Child': {
                bag.Child = bagData;
                break;
            }
            case 'Infant': {
                bag.Infant = bagData;
                break;
            }
        }
        return bag;
    }
    mapLuggagePerPassenger(bagType, options, combinable, passengers) {
        if (!options) {
            return null;
        }
        const result = {
            maxAllowed: 0,
            hasPayedOptions: false,
            hasFreeOptions: false,
            includedOptions: {
                bag1: null,
                bag2: null,
            },
        };
        for (const lug of options) {
            if (!lug.travelerTypes) {
                continue;
            }
            if (lug.prices.listPrice === 0) {
                if (!result.includedOptions) {
                    result.hasFreeOptions = true;
                }
                for (const travelerType of lug.travelerTypes) {
                    if (travelerType === 'Child' && passengers.childrenAges.length === 0) {
                        continue;
                    }
                    if (travelerType === 'Infant' && passengers.infantAges.length === 0) {
                        continue;
                    }
                    if (bagType === 'Cabin bag') {
                        if (lug.type === _schemas_modules_flights_flight_luggage_model__WEBPACK_IMPORTED_MODULE_2__.FlightLuggageOptionTypes.PERSONALITEM) {
                            result.includedOptions.bag1 = this.setTravelerBag(travelerType, _schemas_modules_flights_flight_luggage_model__WEBPACK_IMPORTED_MODULE_2__.FlightLuggageOptionTypes.PERSONALITEM, result.includedOptions.bag1, this.formTitle(lug, bagType), lug);
                        }
                        else {
                            result.includedOptions.bag2 = this.setTravelerBag(travelerType, _schemas_modules_flights_flight_luggage_model__WEBPACK_IMPORTED_MODULE_2__.FlightLuggageOptionTypes.CABIN, result.includedOptions.bag2, this.formTitle(lug, bagType), lug);
                        }
                    }
                    else {
                        result.includedOptions.bag2 = this.setTravelerBag(travelerType, _schemas_modules_flights_flight_luggage_model__WEBPACK_IMPORTED_MODULE_2__.FlightLuggageOptionTypes.CHECKIN, result.includedOptions.bag2, this.formTitle(lug, bagType), lug);
                    }
                }
                continue;
            }
            if (lug.maxQuantity > result.maxAllowed) {
                result.maxAllowed = lug.maxQuantity;
            }
            for (const type of lug.travelerTypes) {
                if (!combinable) {
                    lug.combinationText = this.formBagSelectionText(lug);
                }
                const opt = {
                    options: [lug],
                };
                switch (type) {
                    case 'Adult': {
                        if (!result.Adult) {
                            result.Adult = opt;
                        }
                        else {
                            result.Adult.options.push(lug);
                        }
                        break;
                    }
                    case 'Young': {
                        if (!result.Young) {
                            result.Young = opt;
                        }
                        else {
                            result.Young.options.push(lug);
                        }
                        break;
                    }
                    case 'Child': {
                        if (!result.Child) {
                            result.Child = opt;
                        }
                        else {
                            result.Child.options.push(lug);
                        }
                        break;
                    }
                    case 'Infant': {
                        if (!result.Infant) {
                            result.Infant = opt;
                        }
                        else {
                            result.Infant.options.push(lug);
                        }
                        break;
                    }
                }
                result.hasPayedOptions = true;
            }
        }
        return result;
    }
    formTitle(lug, type) {
        const bagType = lug.type ? 'FLIGHT.LUGGAGE.' + lug.type : type;
        return this.translateService.instant(bagType);
    }
    formBagSelectionText(lug) {
        /*let luggageTypeTxt = '';
        if (lug.quantity > 1) {
            luggageTypeTxt = this.translateService.instant(
                lug.type === FlightLuggageOptionTypes.CABIN ? 'Cabin bag' : 'Checked bags'
            );
        } else {
            luggageTypeTxt = this.translateService.instant(
                lug.type === FlightLuggageOptionTypes.CABIN ? 'Cabin bag' : 'Checked bag'
            );
        }*/
        return (lug.quantity + ' ' + this.translateService.instant(lug.quantity > 1 ? 'bags' : 'bag') + ' ' + lug.weightText);
    }
    getTrainLuggages(luggageInfo) {
        if (!luggageInfo || luggageInfo.length === 0) {
            return null;
        }
        const info = {};
        const baggageKeys = [];
        luggageInfo.forEach((lInfo) => {
            lInfo.luggage.forEach((lug) => {
                const key = lug.type;
                if (key === 'luggage') {
                    // filtering only the luggages in JSON
                    if (!info[key]) {
                        baggageKeys.push(key);
                        info[key] = {
                            type: lug.type,
                        };
                    }
                    switch (lInfo.travellerType) {
                        case 'Adult': {
                            info[key].Adult = lug.quantity;
                            break;
                        }
                        case 'Child': {
                            info[key].Child = lug.quantity;
                            break;
                        }
                        case 'Infant': {
                            info[key].Infant = lug.quantity;
                            break;
                        }
                    }
                }
            });
        });
        return { info, baggageKeys };
    }
    // verifyTrainTripLuggages checks if luggages of onward and return trip in trains are equal
    verifyTrainTripLuggages(onwardTripLuggage, returnTripLuggage) {
        const trainLuggage = {
            onwardLuggage: [],
            returnLuggage: [],
            isRoundTripLuggage: false, // if true, both onward and return luggages are similar
        };
        const checkIfEqual = (onwardInfo, returnInfo, key) => {
            let info = false;
            if (onwardInfo[key] && returnInfo[key]) {
                info = onwardInfo[key].Adult === returnInfo[key].Adult;
                if (onwardInfo[key].Child > 0 && returnInfo[key].Child > 0) {
                    info = onwardInfo[key].Child === returnInfo[key].Child;
                }
            }
            return info;
        };
        onwardTripLuggage.baggageKeys.forEach((key) => {
            trainLuggage.isRoundTripLuggage = checkIfEqual(onwardTripLuggage.info, returnTripLuggage.info, key);
            if (onwardTripLuggage.info[key]) {
                const bagInfo = onwardTripLuggage.info[key];
                bagInfo.isQuantityDiff = bagInfo.Adult !== bagInfo.Child;
                trainLuggage.onwardLuggage.push(bagInfo);
            }
            if (returnTripLuggage.info[key]) {
                const bagInfo = returnTripLuggage.info[key];
                bagInfo.isQuantityDiff = bagInfo.Adult !== bagInfo.Child;
                trainLuggage.returnLuggage.push(bagInfo);
            }
        });
        return trainLuggage;
    }
    updateRepeatEmail() {
        return (control) => {
            var _a, _b;
            (_b = (_a = control.parent) === null || _a === void 0 ? void 0 : _a.get('repeatEmailID')) === null || _b === void 0 ? void 0 : _b.updateValueAndValidity();
            return null;
        };
    }
    repeatMailValidator() {
        return (control) => {
            var _a, _b;
            const emailID = (_b = (_a = control.parent) === null || _a === void 0 ? void 0 : _a.get('emailID')) === null || _b === void 0 ? void 0 : _b.value;
            if (control.valid && emailID && emailID !== '' && control.value !== emailID) {
                return { EMAIL_DID_NOT_MATCH: true };
            }
            return null;
        };
    }
    getRoomDisplayName(roomId, rooms) {
        for (const room of rooms) {
            if (room.id === roomId) {
                return room.displayName;
            }
        }
        return '';
    }
}
TzCheckoutService.ɵfac = function TzCheckoutService_Factory(t) { return new (t || TzCheckoutService)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_ngx_translate_core__WEBPACK_IMPORTED_MODULE_12__.TranslateService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_shared_pipes_tz_currency_pipe__WEBPACK_IMPORTED_MODULE_7__.TzCurrencyPipe), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_8__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵinject"](_services_searchEngine_services_search_data_service__WEBPACK_IMPORTED_MODULE_9__.SearchDataService)); };
TzCheckoutService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineInjectable"]({ token: TzCheckoutService, factory: TzCheckoutService.ɵfac, providedIn: 'root' });


/***/ })

}]);
//# sourceMappingURL=default-src_app_services_modules_checkout_services_tz-checkout_service_ts.js.map