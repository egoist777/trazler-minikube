"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_my-trips_my-trips_module_ts"],{

/***/ 25198:
/*!*************************************************************!*\
  !*** ./src/app/modules/my-trips/my-trips-routing.module.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BookingsRoutingModule": () => (/* binding */ BookingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _my_trips_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-trips.component */ 59641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [
    {
        path: '',
        component: _my_trips_component__WEBPACK_IMPORTED_MODULE_0__.MyTripsComponent,
        children: [
            {
                path: 'bookings-list',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_modules_my-trips_bookings_bookings_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./bookings/bookings.module */ 15396)).then((m) => m.BookingsListModule),
            },
            {
                path: 'booking-summary/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_results_results-cart-item-selection_module_ts"), __webpack_require__.e("default-src_app_services_modules_checkout_services_tz-checkout_service_ts"), __webpack_require__.e("default-src_app_modules_results_components_mob-filter-modal_mob-filter-modal_component_ts-src-3a34f0"), __webpack_require__.e("default-src_app_modules_trip-timeline_trip-timeline_module_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_my-trips_booking_booking_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./booking/booking.module */ 49093)).then((m) => m.BookingSummaryModule),
            },
            {
                path: 'accommodation-booking/:id',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_modules_results_results-cart-item-selection_module_ts"), __webpack_require__.e("default-src_app_modules_results_accommodation_accommodation_module_ts"), __webpack_require__.e("default-src_app_modules_results_components_mob-filter-modal_mob-filter-modal_component_ts-src-3a34f0"), __webpack_require__.e("default-src_app_modules_results_components_base-service-component_base-service_component_ts"), __webpack_require__.e("common"), __webpack_require__.e("src_app_modules_my-trips_accommodation-booking_accommodation-booking_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./accommodation-booking/accommodation-booking.module */ 5389)).then((m) => m.AccommodationBookingModule),
            },
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'bookings-list',
            },
            {
                path: '**',
                redirectTo: 'bookings-list',
            },
        ],
    },
];
class BookingsRoutingModule {
}
BookingsRoutingModule.ɵfac = function BookingsRoutingModule_Factory(t) { return new (t || BookingsRoutingModule)(); };
BookingsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: BookingsRoutingModule });
BookingsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](BookingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 59641:
/*!********************************************************!*\
  !*** ./src/app/modules/my-trips/my-trips.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTripsComponent": () => (/* binding */ MyTripsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 52816);


class MyTripsComponent {
    constructor() { }
    ngOnInit() { }
}
MyTripsComponent.ɵfac = function MyTripsComponent_Factory(t) { return new (t || MyTripsComponent)(); };
MyTripsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MyTripsComponent, selectors: [["tz-my-trips"]], decls: 1, vars: 0, template: function MyTripsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterOutlet], styles: ["@charset \"UTF-8\";\n[_nghost-%COMP%] {\n  width: 100%;\n  min-height: 50vh;\n  background: var(--color-main-background);\n}\n@media (min-width: 921px) {\n  [_nghost-%COMP%] {\n    padding-bottom: 10rem;\n  }\n}\n@media (max-width: 920px) {\n  [_nghost-%COMP%] {\n    background-color: var(--color-main-background-mobile);\n  }\n}\n[_nghost-%COMP%]  .booking-header {\n  font-size: 0.875rem;\n  font-weight: var(--font-weight-regular);\n  line-height: 1.25rem;\n  margin: auto;\n  text-align: center;\n  width: 75%;\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n[_nghost-%COMP%]  .service-and {\n  color: var(--color-text-light-gray);\n}\n[_nghost-%COMP%]  .bullet-split {\n  display: inline;\n}\n[_nghost-%COMP%]  .bullet-split::before {\n  content: \"\u2022\";\n  font-size: 1.125rem;\n  margin: 0 5px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LXRyaXBzLmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vYXNzZXRzL3N0eWxlcy91dGlscy9fbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FBRWhCO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0Esd0NBQUE7QUFBSjtBQ3FESTtFRHhESjtJQU1RLHFCQUFBO0VBQ047QUFDRjtBQzBDSTtFRGxESjtJQVVRLHFEQUFBO0VBRU47QUFDRjtBQUNRO0VBQ0ksbUJBQUE7RUFDQSx1Q0FBQTtFQUNBLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFFQSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0EsdUJBQUE7QUFBWjtBQUdRO0VBQ0ksbUNBQUE7QUFEWjtBQUlRO0VBQ0ksZUFBQTtBQUZaO0FBSVk7RUFDSSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0FBRmhCIiwiZmlsZSI6Im15LXRyaXBzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcInV0aWxzL21peGluc1wiO1xuXG46aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWluLWhlaWdodDogNTB2aDtcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1jb2xvci1tYWluLWJhY2tncm91bmQpO1xuXG4gICAgQGluY2x1ZGUgZGVza3RvcCB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAxMHJlbTtcbiAgICB9XG5cbiAgICBAaW5jbHVkZSBtb2JpbGUge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1tYWluLWJhY2tncm91bmQtbW9iaWxlKTtcbiAgICB9XG5cbiAgICAmOjpuZy1kZWVwIHtcbiAgICAgICAgLmJvb2tpbmctaGVhZGVyIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgICAgICAgICBmb250LXdlaWdodDogdmFyKC0tZm9udC13ZWlnaHQtcmVndWxhcik7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS4yNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZXJ2aWNlLWFuZCB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItdGV4dC1saWdodC1ncmF5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5idWxsZXQtc3BsaXQge1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuXG4gICAgICAgICAgICAmOjpiZWZvcmUge1xuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi4oCiXCI7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgNXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuIiwiJGJyZWFrcG9pbnRzOiAoXG4gIFwieHNcIjogMCxcbiAgXCJzbVwiOiA1NzZweCxcbiAgXCJtZFwiOiA3NjhweCxcbiAgXCJsZ1wiOiA5OTJweCxcbiAgXCJ4bFwiOiAxMjAwcHgsXG4gIFwieHhsXCI6IDE0MDBweFxuKTtcblxuQG1peGluIHhzIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAneHMnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiBzbSB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3NtJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gbWQge1xuICBAbWVkaWEgKG1pbi13aWR0aDogbWFwLWdldCgkYnJlYWtwb2ludHMsICdtZCcpKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIGxnIHtcbiAgQG1lZGlhIChtaW4td2lkdGg6IG1hcC1nZXQoJGJyZWFrcG9pbnRzLCAnbGcnKSkge1xuICAgIEBjb250ZW50O1xuICB9XG59XG5cbkBtaXhpbiB4bCB7XG4gIEBtZWRpYSAobWluLXdpZHRoOiBtYXAtZ2V0KCRicmVha3BvaW50cywgJ3hsJykpIHtcbiAgICBAY29udGVudDtcbiAgfVxufVxuXG5AbWl4aW4gdHotbWVkaWEtYnJlYWtwb2ludC1kb3duKCRicDogMCkge1xuICBAbWVkaWEgKG1heC13aWR0aDogJGJwKSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIHR6LW1lZGlhLWJyZWFrcG9pbnQtYmV0d2VlbigkYnBNaW4sICRicE1heCkge1xuICBAbWVkaWEgKG1pbi13aWR0aDogJGJwTWluKSBhbmQgKG1heC13aWR0aDogJGJwTWF4KSB7XG4gICAgQGNvbnRlbnQ7XG4gIH1cbn1cblxuQG1peGluIG1vYmlsZSgpIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogOTIwcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gZGVza3RvcCgpIHtcbiAgICBAbWVkaWEgKG1pbi13aWR0aDogOTIxcHgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuXG5AbWl4aW4gdGFibGV0KCkge1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA5MjFweCkgYW5kIChtYXgtd2lkdGg6IDEyMjBweCkge1xuICAgICAgICBAY29udGVudDtcbiAgICB9XG59XG5cbkBtaXhpbiBvbi1ob3ZlciB7XG4gICAgQG1lZGlhIG5vdCBhbGwgYW5kIChob3Zlcjogbm9uZSkge1xuICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgIEBjb250ZW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gdHotc2Nyb2xsLWJhci1zdHlsZSB7XG4gICAgJjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICB3aWR0aDogMC41cmVtO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci1idXR0b24ge1xuICAgICAgICBoZWlnaHQ6IDEuMjVyZW07XG4gICAgICAgIHdpZHRoOiAwLjVyZW07XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgICY6Oi13ZWJraXQtc2Nyb2xsYmFyLWJ1dHRvbjpob3Jpem9udGFsIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgICB9XG5cbiAgICAmOjotd2Via2l0LXNjcm9sbGJhci10cmFjay1waWVjZSB7XG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgIH1cbn1cblxuQG1peGluIGZpcmVmb3gtb25seSB7XG4gICAgQC1tb3otZG9jdW1lbnQgdXJsLXByZWZpeCgpIHtcbiAgICAgICAgQGNvbnRlbnQ7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 55875:
/*!*****************************************************!*\
  !*** ./src/app/modules/my-trips/my-trips.module.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyTripsModule": () => (/* binding */ MyTripsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _my_trips_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./my-trips-routing.module */ 25198);
/* harmony import */ var _my_trips_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./my-trips.component */ 59641);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);




class MyTripsModule {
}
MyTripsModule.ɵfac = function MyTripsModule_Factory(t) { return new (t || MyTripsModule)(); };
MyTripsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: MyTripsModule });
MyTripsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _my_trips_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingsRoutingModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](MyTripsModule, { declarations: [_my_trips_component__WEBPACK_IMPORTED_MODULE_1__.MyTripsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _my_trips_routing_module__WEBPACK_IMPORTED_MODULE_0__.BookingsRoutingModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_my-trips_my-trips_module_ts.js.map