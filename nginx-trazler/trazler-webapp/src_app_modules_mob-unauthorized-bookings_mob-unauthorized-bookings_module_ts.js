"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_mob-unauthorized-bookings_mob-unauthorized-bookings_module_ts"],{

/***/ 66742:
/*!***********************************************************************************************!*\
  !*** ./src/app/modules/mob-unauthorized-bookings/mob-unauthorized-bookings-routing.module.ts ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobUnauthorizedBookingsRoutingModule": () => (/* binding */ MobUnauthorizedBookingsRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _mob_unauthorized_bookings_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mob-unauthorized-bookings.component */ 95781);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _mob_unauthorized_bookings_component__WEBPACK_IMPORTED_MODULE_0__.MobUnauthorizedBookingsComponent }];
class MobUnauthorizedBookingsRoutingModule {
}
MobUnauthorizedBookingsRoutingModule.ɵfac = function MobUnauthorizedBookingsRoutingModule_Factory(t) { return new (t || MobUnauthorizedBookingsRoutingModule)(); };
MobUnauthorizedBookingsRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: MobUnauthorizedBookingsRoutingModule });
MobUnauthorizedBookingsRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MobUnauthorizedBookingsRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 95781:
/*!******************************************************************************************!*\
  !*** ./src/app/modules/mob-unauthorized-bookings/mob-unauthorized-bookings.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobUnauthorizedBookingsComponent": () => (/* binding */ MobUnauthorizedBookingsComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/components/tz-icon/tz-icon.component */ 48368);
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ 87514);






class MobUnauthorizedBookingsComponent {
    constructor(location, userService, router) {
        this.location = location;
        this.userService = userService;
        this.router = router;
    }
    ngOnInit() { }
    onGoToBack() {
        this.location.back();
    }
    gotoMytrips() {
        this.userService.openLoginModel().then(() => {
            this.router.navigate(['bookings']);
        }, () => { });
    }
}
MobUnauthorizedBookingsComponent.ɵfac = function MobUnauthorizedBookingsComponent_Factory(t) { return new (t || MobUnauthorizedBookingsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__.Location), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.Router)); };
MobUnauthorizedBookingsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: MobUnauthorizedBookingsComponent, selectors: [["tz-mob-unauthorized-bookings"]], decls: 17, vars: 9, consts: [[1, "header"], [1, "back-button", 3, "click"], ["icon", "arrow_back_ios", "data-test", "back-to-basket"], [1, "trips-icon-container"], ["icon", "your-trips", 1, "your-trips"], ["icon", "background-line", 1, "background-line"], [1, "bottom-container"], [1, "title"], [1, "subtitle"], ["translate", "ACCOUNT.SIGN.SIGN_IN_OR_CREATE_ACCOUNT", 1, "tz-btn", "auth-btn", 3, "click"]], template: function MobUnauthorizedBookingsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MobUnauthorizedBookingsComponent_Template_div_click_1_listener() { return ctx.onGoToBack(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "tz-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](4, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div")(6, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "tz-icon", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "tz-icon", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6)(10, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](12, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "p", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](15, "translate");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("click", function MobUnauthorizedBookingsComponent_Template_button_click_16_listener() { return ctx.gotoMytrips(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](4, 3, "PAGES.MY_TRIPS"), "\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](12, 5, "ACCOUNT.YOUR_TRIP"), " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](15, 7, "ACCOUNT.SIG_IN_TO_VIEW"), " ");
    } }, directives: [_shared_components_tz_icon_tz_icon_component__WEBPACK_IMPORTED_MODULE_1__.TzIconComponent, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslateDirective], pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__.TranslatePipe], styles: [".background-line[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n\n.header[_ngcontent-%COMP%] {\n  font-style: normal;\n  line-height: 1.125rem;\n  font-size: 0.875rem;\n  font-weight: var(--font-weight-regular);\n  padding: 0.6875rem 1rem;\n  font-family: var(--ion-font-family);\n  text-align: center;\n  background-color: var(--color-primary-white);\n  position: relative;\n  border-bottom: 1px solid var(--color-border-mobile);\n}\n\n.header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%] {\n  width: 1.5rem;\n  height: 1.5rem;\n  position: absolute;\n  left: 1rem;\n}\n\n.header[_ngcontent-%COMP%]   .back-button[_ngcontent-%COMP%]   tz-icon[_ngcontent-%COMP%] {\n  width: 1rem;\n  height: 1rem;\n}\n\n.auth-btn[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 0.875rem;\n  line-height: 1.5rem;\n  margin-top: 3rem;\n  text-align: center;\n  height: 2.5rem;\n  width: 100%;\n  padding: 0 1.625rem;\n  border-radius: 3px;\n  background: var(--color-main-purple);\n  color: var(--color-primary-white) !important;\n}\n\n.trips-icon-container[_ngcontent-%COMP%] {\n  margin-top: 5.875rem;\n  justify-content: center;\n  display: flex;\n  margin-bottom: -5.375rem;\n}\n\n.trips-icon-container[_ngcontent-%COMP%]   .your-trips[_ngcontent-%COMP%] {\n  height: 10.9375rem;\n  width: 12.5rem;\n}\n\n.bottom-container[_ngcontent-%COMP%] {\n  text-align: center;\n  padding: 0 1rem;\n}\n\n.bottom-container[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-top: 2.5rem;\n  color: var(--color-main-purple);\n  font-weight: 700;\n  font-size: 1.25rem;\n  line-height: 1.125rem;\n}\n\n.bottom-container[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 0.75rem;\n  line-height: 1.125rem;\n  margin: 0 1.125rem 0 1.0625rem;\n  letter-spacing: 0.0015em;\n  color: var(--color-grey-mobile);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vYi11bmF1dGhvcml6ZWQtYm9va2luZ3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSx1QkFBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSw0Q0FBQTtFQUNBLGtCQUFBO0VBQ0EsbURBQUE7QUFDSjs7QUFDSTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBQ1I7O0FBQ1E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUNaOztBQUlBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0VBQ0EsNENBQUE7QUFESjs7QUFJQTtFQUNJLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0Esd0JBQUE7QUFESjs7QUFHSTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtBQURSOztBQUtBO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0FBRko7O0FBSUk7RUFDSSxrQkFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBRlI7O0FBS0k7RUFDSSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFDQSw4QkFBQTtFQUNBLHdCQUFBO0VBQ0EsK0JBQUE7QUFIUiIsImZpbGUiOiJtb2ItdW5hdXRob3JpemVkLWJvb2tpbmdzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhY2tncm91bmQtbGluZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uaGVhZGVyIHtcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgbGluZS1oZWlnaHQ6IDEuMTI1cmVtO1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gICAgZm9udC13ZWlnaHQ6IHZhcigtLWZvbnQtd2VpZ2h0LXJlZ3VsYXIpO1xuICAgIHBhZGRpbmc6IDAuNjg3NXJlbSAxcmVtO1xuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1pb24tZm9udC1mYW1pbHkpO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1jb2xvci1wcmltYXJ5LXdoaXRlKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWNvbG9yLWJvcmRlci1tb2JpbGUpO1xuXG4gICAgLmJhY2stYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEuNXJlbTtcbiAgICAgICAgaGVpZ2h0OiAxLjVyZW07XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMXJlbTtcblxuICAgICAgICB0ei1pY29uIHtcbiAgICAgICAgICAgIHdpZHRoOiAxcmVtO1xuICAgICAgICAgICAgaGVpZ2h0OiAxcmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uYXV0aC1idG4ge1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICBsaW5lLWhlaWdodDogMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGhlaWdodDogMi41cmVtO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmc6IDAgMS42MjVyZW07XG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWNvbG9yLW1haW4tcHVycGxlKTtcbiAgICBjb2xvcjogdmFyKC0tY29sb3ItcHJpbWFyeS13aGl0ZSkgIWltcG9ydGFudDtcbn1cblxuLnRyaXBzLWljb24tY29udGFpbmVyIHtcbiAgICBtYXJnaW4tdG9wOiA1Ljg3NXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbi1ib3R0b206IC01LjM3NXJlbTtcblxuICAgIC55b3VyLXRyaXBzIHtcbiAgICAgICAgaGVpZ2h0OiAxMC45Mzc1cmVtO1xuICAgICAgICB3aWR0aDogMTIuNXJlbTtcbiAgICB9XG59XG5cbi5ib3R0b20tY29udGFpbmVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMCAxcmVtO1xuXG4gICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMi41cmVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tY29sb3ItbWFpbi1wdXJwbGUpO1xuICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICB9XG5cbiAgICAuc3VidGl0bGUge1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDAuNzVyZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjEyNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwIDEuMTI1cmVtIDAgMS4wNjI1cmVtO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wMDE1ZW07XG4gICAgICAgIGNvbG9yOiB2YXIoLS1jb2xvci1ncmV5LW1vYmlsZSk7XG4gICAgfVxufVxuIl19 */"] });


/***/ }),

/***/ 46803:
/*!***************************************************************************************!*\
  !*** ./src/app/modules/mob-unauthorized-bookings/mob-unauthorized-bookings.module.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MobUnauthorizedBookingsModule": () => (/* binding */ MobUnauthorizedBookingsModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _mob_unauthorized_bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mob-unauthorized-bookings-routing.module */ 66742);
/* harmony import */ var _mob_unauthorized_bookings_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mob-unauthorized-bookings.component */ 95781);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);





class MobUnauthorizedBookingsModule {
}
MobUnauthorizedBookingsModule.ɵfac = function MobUnauthorizedBookingsModule_Factory(t) { return new (t || MobUnauthorizedBookingsModule)(); };
MobUnauthorizedBookingsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: MobUnauthorizedBookingsModule });
MobUnauthorizedBookingsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _mob_unauthorized_bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__.MobUnauthorizedBookingsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MobUnauthorizedBookingsModule, { declarations: [_mob_unauthorized_bookings_component__WEBPACK_IMPORTED_MODULE_1__.MobUnauthorizedBookingsComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _mob_unauthorized_bookings_routing_module__WEBPACK_IMPORTED_MODULE_0__.MobUnauthorizedBookingsRoutingModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_mob-unauthorized-bookings_mob-unauthorized-bookings_module_ts.js.map