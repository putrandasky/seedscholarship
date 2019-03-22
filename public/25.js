(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[25],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-flatpickr-component */ "./node_modules/vue-flatpickr-component/dist/vue-flatpickr.min.js");
/* harmony import */ var vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flatpickr/dist/flatpickr.css */ "./node_modules/flatpickr/dist/flatpickr.css");
/* harmony import */ var flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_flatpickr_css__WEBPACK_IMPORTED_MODULE_4__);



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
  name: 'DonationConfirmation',
  components: {
    flatPickr: vue_flatpickr_component__WEBPACK_IMPORTED_MODULE_3___default.a
  },
  data: function data() {
    return {
      confirmationFormSent: false,
      uploadPercentage: 0,
      isDisabled: false,
      isLoading: true,
      loaded: false,
      authorized: false,
      file: [],
      configCalendar: {
        dateFormat: 'd-M-y'
      },
      input: {
        trx_date: null,
        amount: ''
      },
      errors: {
        trx_date: null,
        amount: '',
        file: null
      }
    };
  },
  created: function created() {
    this.getAuthorized();
  },
  computed: {
    stateTrxDate: function stateTrxDate() {
      return this.errors.trx_date == 'no-error' ? true : this.errors.trx_date ? false : null;
    },
    stateAmount: function stateAmount() {
      return this.errors.amount == 'no-error' ? true : this.errors.amount ? false : null;
    },
    stateFile: function stateFile() {
      return this.errors.file == 'no-error' ? true : this.errors.file ? false : null;
    }
  },
  methods: {
    onFileChange: function onFileChange(e) {
      var file = e.target.files[0]; // console.log(file);

      if (file.size > 1 * 1000 * 1024 || !/\.(jpeg|jpg|png|pdf)$/i.test(file.name)) {
        e.preventDefault();
        this.$refs.upload.reset(); // this.file = []

        return;
      } // this.data.photo = file.name
      // this.objectUrl = URL.createObjectURL(file);

    },
    getAuthorized: function getAuthorized() {
      var _this = this;

      axios.get("api/donor-transaction/confirmation/authorized?id=".concat(this.$route.query.id, "&year=").concat(this.$route.query.year, "&email=").concat(this.$route.query.email, "&donation_token=").concat(this.$route.query.donation_token)).then(function (response) {
        console.log(response.data);
        _this.loaded = true;
        _this.isLoading = false;
        _this.authorized = true;
      }).catch(function (error) {
        console.log(error);
        _this.loaded = true;
        _this.isLoading = false;
        _this.authorized = false;
      });
    },
    sendConfirmationForm: function sendConfirmationForm() {
      var _this2 = this;

      this.isDisabled = true;
      var formData = new FormData();
      var self = this;
      this.isLoading = true;
      formData.append('file', this.file);
      axios.post("api/donor-transaction/confirmation", formData, {
        params: {
          id: this.$route.query.id,
          year: this.$route.query.year,
          donation_token: this.$route.query.donation_token,
          trx_date: this.input.trx_date,
          amount: this.input.amount
        },
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function (progressEvent) {
          this.uploadPercentage = C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(progressEvent.loaded * 100 / progressEvent.total));
        }.bind(this)
      }).then(function (response) {
        console.log(response.data);

        _this2.$snotify.success("Confirmation Sent", "SUCCESS");

        _this2.isDisabled = false;
        _this2.confirmationFormSent = true;
        _this2.uploadPercentage = 0;
        _this2.isLoading = false;
      }).catch(function (error) {
        console.log(error);

        _this2.$snotify.error(error.response.data.message, "ERROR");

        _this2.isDisabled = false;
        var errors = error.response.data.errors;
        _this2.errors.trx_date = errors.trx_date ? errors.trx_date[0] : 'no-error';
        _this2.errors.amount = errors.amount ? errors.amount[0] : 'no-error';
        _this2.errors.file = errors.file ? errors.file[0] : 'no-error';
        _this2.uploadPercentage = 0;
        _this2.isLoading = false;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue?vue&type=template&id=7195c055&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue?vue&type=template&id=7195c055& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
            active: _vm.isLoading,
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
            "b-container",
            { attrs: { fluid: "" } },
            [
              _c(
                "b-row",
                { staticClass: "justify-content-center" },
                [
                  !_vm.authorized
                    ? _c(
                        "b-col",
                        { attrs: { sm: "6" } },
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
                  _vm.confirmationFormSent
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
                              "Terima kasih telah melakukan donasi untuk SEED Scholarship. Tim kami akan melakukan verifikasi dan\n            segera mengirimkan bukti penerimaan donasi."
                            )
                          ])
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.authorized && !_vm.confirmationFormSent
                    ? _c(
                        "b-col",
                        { attrs: { md: "8", lg: "6" } },
                        [
                          _c(
                            "b-card",
                            { staticClass: "mx-4", attrs: { "no-body": "" } },
                            [
                              _c(
                                "form",
                                {
                                  staticClass: "card-body p-4",
                                  attrs: { autocomplete: "off" },
                                  on: {
                                    submit: function($event) {
                                      $event.preventDefault()
                                      return _vm.sendConfirmationForm($event)
                                    }
                                  }
                                },
                                [
                                  _c("h2", [_vm._v("KONFIRMASI DONASI")]),
                                  _vm._v(" "),
                                  _c("p", { staticClass: "text-muted" }, [
                                    _vm._v(
                                      "Silahkan mengisi form berikut untuk mengkonfirmasi donasi anda. "
                                    )
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-row",
                                    { staticClass: "form-group" },
                                    [
                                      _c(
                                        "b-col",
                                        { attrs: { lg: "6" } },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                "invalid-feedback":
                                                  _vm.errors.trx_date,
                                                state: _vm.stateTrxDate
                                              }
                                            },
                                            [
                                              _c(
                                                "b-input-group",
                                                [
                                                  _c(
                                                    "b-input-group-prepend",
                                                    [
                                                      _c("b-input-group-text", [
                                                        _c("i", {
                                                          staticClass:
                                                            "icon-calendar"
                                                        })
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c("flat-pickr", {
                                                    directives: [
                                                      {
                                                        name: "b-tooltip",
                                                        rawName:
                                                          "v-b-tooltip.hover",
                                                        modifiers: {
                                                          hover: true
                                                        }
                                                      }
                                                    ],
                                                    staticClass: "form-control",
                                                    class: {
                                                      "is-invalid":
                                                        _vm.stateTrxDate ==
                                                        false,
                                                      "is-valid":
                                                        _vm.stateTrxDate == true
                                                    },
                                                    staticStyle: {
                                                      "background-color":
                                                        "white"
                                                    },
                                                    attrs: {
                                                      placeholder:
                                                        "Tanggal Transaksi",
                                                      id: "date",
                                                      title: "Click To Edit",
                                                      config: _vm.configCalendar
                                                    },
                                                    model: {
                                                      value: _vm.input.trx_date,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.input,
                                                          "trx_date",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "input.trx_date"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        { attrs: { lg: "6" } },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                "invalid-feedback":
                                                  _vm.errors.amount,
                                                state: _vm.stateAmount
                                              }
                                            },
                                            [
                                              _c(
                                                "b-input-group",
                                                {},
                                                [
                                                  _c(
                                                    "b-input-group-prepend",
                                                    [
                                                      _c("b-input-group-text", [
                                                        _vm._v("Rp")
                                                      ])
                                                    ],
                                                    1
                                                  ),
                                                  _vm._v(" "),
                                                  _c("b-input", {
                                                    staticClass: "form-control",
                                                    attrs: {
                                                      autocomplete: "off",
                                                      type: "number",
                                                      min: "0",
                                                      placeholder:
                                                        "Jumlah Donasi",
                                                      state: _vm.stateAmount
                                                    },
                                                    model: {
                                                      value: _vm.input.amount,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.input,
                                                          "amount",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "input.amount"
                                                    }
                                                  })
                                                ],
                                                1
                                              )
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "b-col",
                                        { attrs: { lg: "12" } },
                                        [
                                          _c(
                                            "b-form-group",
                                            {
                                              attrs: {
                                                "invalid-feedback":
                                                  _vm.errors.file,
                                                state: _vm.stateFile,
                                                description:
                                                  "File jpeg/png/pdf (max: 1MB)"
                                              }
                                            },
                                            [
                                              _c("b-form-file", {
                                                ref: "upload",
                                                attrs: {
                                                  accept:
                                                    "image/jpeg, image/png, image/gif, application/pdf",
                                                  state: _vm.stateFile,
                                                  placeholder: "Bukti Transfer."
                                                },
                                                on: {
                                                  change: _vm.onFileChange
                                                },
                                                model: {
                                                  value: _vm.file,
                                                  callback: function($$v) {
                                                    _vm.file = $$v
                                                  },
                                                  expression: "file"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("b-progress", {
                                                directives: [
                                                  {
                                                    name: "show",
                                                    rawName: "v-show",
                                                    value:
                                                      _vm.uploadPercentage !==
                                                      0,
                                                    expression:
                                                      "uploadPercentage !== 0"
                                                  }
                                                ],
                                                attrs: {
                                                  height: "5px",
                                                  value: _vm.uploadPercentage,
                                                  variant: "success"
                                                }
                                              })
                                            ],
                                            1
                                          )
                                        ],
                                        1
                                      )
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-button",
                                    {
                                      attrs: {
                                        disabled: _vm.isDisabled,
                                        type: "submit",
                                        variant: "success",
                                        block: ""
                                      }
                                    },
                                    [
                                      _c("i", {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: _vm.isDisabled,
                                            expression: "isDisabled"
                                          }
                                        ],
                                        staticClass: "fa fa-spinner fa-spin"
                                      }),
                                      _vm._v("\n              Submit")
                                    ]
                                  )
                                ],
                                1
                              )
                            ]
                          )
                        ],
                        1
                      )
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

/***/ "./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue":
/*!*******************************************************************************!*\
  !*** ./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DonationConfirmation_vue_vue_type_template_id_7195c055___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DonationConfirmation.vue?vue&type=template&id=7195c055& */ "./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue?vue&type=template&id=7195c055&");
/* harmony import */ var _DonationConfirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DonationConfirmation.vue?vue&type=script&lang=js& */ "./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DonationConfirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DonationConfirmation_vue_vue_type_template_id_7195c055___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DonationConfirmation_vue_vue_type_template_id_7195c055___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/donor/views/confirmation/DonationConfirmation.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationConfirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DonationConfirmation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationConfirmation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue?vue&type=template&id=7195c055&":
/*!**************************************************************************************************************!*\
  !*** ./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue?vue&type=template&id=7195c055& ***!
  \**************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationConfirmation_vue_vue_type_template_id_7195c055___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DonationConfirmation.vue?vue&type=template&id=7195c055& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/confirmation/DonationConfirmation.vue?vue&type=template&id=7195c055&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationConfirmation_vue_vue_type_template_id_7195c055___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DonationConfirmation_vue_vue_type_template_id_7195c055___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);