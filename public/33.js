(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/registration/ContractAgreed.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/registration/ContractAgreed.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
/* harmony import */ var core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.assign */ "./node_modules/core-js/modules/es6.object.assign.js");
/* harmony import */ var core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
/* harmony import */ var core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_promise_finally__WEBPACK_IMPORTED_MODULE_3__);




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'ContractAgreed',
  data: function data() {
    return {
      loaded: false,
      authorized: false
    };
  },
  created: function created() {
    this.getAgreedContract();
  },
  methods: {
    getAgreedContract: function getAgreedContract() {
      var _this = this;

      axios.get("api/auth/donor/contract-agreed?id=".concat(this.$route.query.id, "&email=").concat(this.$route.query.email, "&period=").concat(this.$route.query.period, "&token=").concat(this.$route.query.token)).then(function (response) {
        console.log(response.data);
        _this.loaded = true;
        _this.authorized = true;
      }).catch(function (error) {
        console.log(error);
        _this.loaded = true;
        _this.authorized = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/registration/ContractAgreed.vue?vue&type=template&id=73544b58&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/registration/ContractAgreed.vue?vue&type=template&id=73544b58& ***!
  \**************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "app flex-row align-items-center" },
    [
      _c(
        "loading",
        {
          staticClass: "text-center",
          attrs: {
            active: !_vm.loaded,
            "can-cancel": false,
            opacity: 0.9,
            height: 60,
            loader: "dots",
            transition: "fade",
            "background-color": "rgba(0,0,0,.85)",
            color: "rgba(255,255,255,.9)",
            "is-full-page": true
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "text-center",
              staticStyle: { color: "rgba(255,255,255,.9)" },
              attrs: { slot: "after" },
              slot: "after"
            },
            [_vm._v("Mohon Tunggu...")]
          )
        ]
      ),
      _vm._v(" "),
      _vm.loaded
        ? _c(
            "div",
            { staticClass: "container" },
            [
              _c(
                "b-row",
                { staticClass: "justify-content-center" },
                [
                  !_vm.authorized
                    ? _c(
                        "b-col",
                        { attrs: { sm: "8" } },
                        [
                          _c(
                            "b-alert",
                            { attrs: { show: "", variant: "danger" } },
                            [
                              _vm._v(
                                "YOU ARE NOT ALLOWED TO ACCESS THIS PAGE.\n        "
                              )
                            ]
                          )
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.authorized
                    ? _c("b-col", { attrs: { sm: "8" } }, [
                        _c(
                          "header",
                          {
                            staticClass: "text-center",
                            attrs: { id: "header" }
                          },
                          [_c("h1", [_c("strong", [_vm._v("TERIMA KASIH")])])]
                        ),
                        _vm._v(" "),
                        _c("div", { staticClass: "text-center" }, [
                          _c("i", {
                            staticClass: "fa fa-heart display-1",
                            staticStyle: { color: "red" },
                            attrs: { id: "checkmark" }
                          }),
                          _vm._v(" "),
                          _c("p", [
                            _vm._v(
                              "Terima kasih telah begabung bersama kami menjadi donatur di SEED Scholarship Periode ke-5. Kami telah\n            mengirimkan kontrak kerja sama, mohon cek email anda. Kontribusi anda sangat berharga bagi adik-adik kita\n            di Departemen Teknik Sipil UI. Tim kami akan segera menghubungi Anda"
                            )
                          ])
                        ])
                      ])
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/donor/views/registration/ContractAgreed.vue":
/*!*************************************************************************!*\
  !*** ./resources/assets/js/donor/views/registration/ContractAgreed.vue ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ContractAgreed_vue_vue_type_template_id_73544b58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ContractAgreed.vue?vue&type=template&id=73544b58& */ "./resources/assets/js/donor/views/registration/ContractAgreed.vue?vue&type=template&id=73544b58&");
/* harmony import */ var _ContractAgreed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ContractAgreed.vue?vue&type=script&lang=js& */ "./resources/assets/js/donor/views/registration/ContractAgreed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ContractAgreed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ContractAgreed_vue_vue_type_template_id_73544b58___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ContractAgreed_vue_vue_type_template_id_73544b58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/donor/views/registration/ContractAgreed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/donor/views/registration/ContractAgreed.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/donor/views/registration/ContractAgreed.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractAgreed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContractAgreed.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/registration/ContractAgreed.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractAgreed_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/donor/views/registration/ContractAgreed.vue?vue&type=template&id=73544b58&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/donor/views/registration/ContractAgreed.vue?vue&type=template&id=73544b58& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractAgreed_vue_vue_type_template_id_73544b58___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./ContractAgreed.vue?vue&type=template&id=73544b58& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/registration/ContractAgreed.vue?vue&type=template&id=73544b58&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractAgreed_vue_vue_type_template_id_73544b58___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ContractAgreed_vue_vue_type_template_id_73544b58___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);