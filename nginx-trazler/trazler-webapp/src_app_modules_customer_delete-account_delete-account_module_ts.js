"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_modules_customer_delete-account_delete-account_module_ts"],{

/***/ 64011:
/*!**********************************************************************************!*\
  !*** ./src/app/modules/customer/delete-account/delete-account-routing.module.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteAccountRoutingModule": () => (/* binding */ DeleteAccountRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 52816);
/* harmony import */ var _delete_account_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-account.component */ 88266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 3184);




const routes = [{ path: '', component: _delete_account_component__WEBPACK_IMPORTED_MODULE_0__.DeleteAccountComponent }];
class DeleteAccountRoutingModule {
}
DeleteAccountRoutingModule.ɵfac = function DeleteAccountRoutingModule_Factory(t) { return new (t || DeleteAccountRoutingModule)(); };
DeleteAccountRoutingModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: DeleteAccountRoutingModule });
DeleteAccountRoutingModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DeleteAccountRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 88266:
/*!*****************************************************************************!*\
  !*** ./src/app/modules/customer/delete-account/delete-account.component.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteAccountComponent": () => (/* binding */ DeleteAccountComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/modules/user/services/user.service */ 53946);
/* harmony import */ var _shared_components_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/components/profile-info/profile-info.component */ 6110);



class DeleteAccountComponent {
    constructor(userService) {
        this.userService = userService;
    }
    ngOnInit() {
        this.customerInformation = this.userService.getCustomerInformation();
    }
}
DeleteAccountComponent.ɵfac = function DeleteAccountComponent_Factory(t) { return new (t || DeleteAccountComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_modules_user_services_user_service__WEBPACK_IMPORTED_MODULE_0__.UserService)); };
DeleteAccountComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: DeleteAccountComponent, selectors: [["tz-delete-account"]], decls: 1, vars: 1, consts: [["usageType", "delete-account", 3, "customerInformation"]], template: function DeleteAccountComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "tz-profile-info", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("customerInformation", ctx.customerInformation);
    } }, directives: [_shared_components_profile_info_profile_info_component__WEBPACK_IMPORTED_MODULE_1__.ProfileInfoComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkZWxldGUtYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */"] });


/***/ }),

/***/ 96996:
/*!**************************************************************************!*\
  !*** ./src/app/modules/customer/delete-account/delete-account.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DeleteAccountModule": () => (/* binding */ DeleteAccountModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _delete_account_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./delete-account-routing.module */ 64011);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shared/shared.module */ 72271);
/* harmony import */ var _delete_account_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./delete-account.component */ 88266);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);






class DeleteAccountModule {
}
DeleteAccountModule.ɵfac = function DeleteAccountModule_Factory(t) { return new (t || DeleteAccountModule)(); };
DeleteAccountModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: DeleteAccountModule });
DeleteAccountModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _delete_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeleteAccountRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](DeleteAccountModule, { declarations: [_delete_account_component__WEBPACK_IMPORTED_MODULE_2__.DeleteAccountComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _delete_account_routing_module__WEBPACK_IMPORTED_MODULE_0__.DeleteAccountRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ })

}]);
//# sourceMappingURL=src_app_modules_customer_delete-account_delete-account_module_ts.js.map