(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[58],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);

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
  name: 'AuthPasswordReset',
  data: function data() {
    return {
      isDisabled: false,
      loaded: false,
      hasAuthorize: false,
      errors: {
        password: ''
      },
      input: {
        token: '',
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  created: function created() {
    this.checkHasAuthorize();
  },
  computed: {
    statePassword: function statePassword() {
      return this.errors.password == 'no-error' ? true : this.errors.password ? false : null;
    }
  },
  methods: {
    reset: function reset() {
      var _this = this;

      this.errors.password = null;
      this.isDisabled = true;
      axios.post('api/reset/password', this.input).then(function (response) {
        _this.$snotify.success(response.data.status, "SUCCESS");

        _this.input.password = '', _this.input.password_confirmation = '';
        setTimeout(function () {
          _this.$router.replace('/login');
        }, 1000);
      }).catch(function (error) {
        _this.isDisabled = false; // console.log(error.response.data);

        if (error.response.status == 422) {
          var errors = error.response.data.errors;
          _this.errors.password = errors.password ? errors.password[0] : 'no-error';

          _this.$snotify.error(errors.password[0], "ERROR");
        } else {
          _this.$snotify.error(error.response.data.status, "ERROR");
        } // console.log(errors.name);

      });
    },
    checkHasAuthorize: function checkHasAuthorize() {
      var _this2 = this;

      var getToken = this.$route.query.token;
      var getEmail = this.$route.query.email;
      axios.get("api/reset/password?email=".concat(getEmail, "&token=").concat(getToken)).then(function (response) {
        _this2.input.token = getToken;
        _this2.input.email = getEmail;
        _this2.hasAuthorize = true;
        _this2.loaded = true;
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
        _this2.loaded = true;
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue?vue&type=template&id=5eb3fccc&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue?vue&type=template&id=5eb3fccc& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: this.loaded,
          expression: "this.loaded"
        }
      ],
      staticClass: "app flex-row align-items-center"
    },
    [
      _c(
        "div",
        { staticClass: "container" },
        [
          _c(
            "b-row",
            { staticClass: "justify-content-center" },
            [
              _c(
                "b-col",
                { attrs: { md: "6", sm: "8" } },
                [
                  !this.hasAuthorize
                    ? _c("b-card", [
                        _c("div", [
                          _vm._v(
                            "\n            You don't have authorization to access this page or your token already expired\n            "
                          ),
                          _c("hr"),
                          _vm._v(
                            "\n            If you want to reset your password, please contact your super admin to send link reset password to your\n            email.\n          "
                          )
                        ])
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  this.hasAuthorize
                    ? _c("b-card", { staticClass: "mx-4" }, [
                        _c(
                          "form",
                          {
                            staticClass: "card-body p-4",
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.reset($event)
                              }
                            }
                          },
                          [
                            _c("h1", [_vm._v("RESET PASSWORD")]),
                            _vm._v(" "),
                            _c("p", { staticClass: "text-muted" }, [
                              _vm._v("Reset password for your account")
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  "invalid-feedback": _vm.errors.password,
                                  state: _vm.statePassword
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
                                          _c("i", { staticClass: "icon-lock" })
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("b-input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "password",
                                        placeholder: "New Password",
                                        state: _vm.statePassword
                                      },
                                      model: {
                                        value: _vm.input.password,
                                        callback: function($$v) {
                                          _vm.$set(_vm.input, "password", $$v)
                                        },
                                        expression: "input.password"
                                      }
                                    })
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-group",
                              {
                                attrs: {
                                  "invalid-feedback": _vm.errors.password,
                                  state: _vm.statePassword
                                }
                              },
                              [
                                _c(
                                  "b-input-group",
                                  { staticClass: "mb-1" },
                                  [
                                    _c(
                                      "b-input-group-prepend",
                                      [
                                        _c("b-input-group-text", [
                                          _c("i", { staticClass: "icon-lock" })
                                        ])
                                      ],
                                      1
                                    ),
                                    _vm._v(" "),
                                    _c("b-input", {
                                      staticClass: "form-control",
                                      attrs: {
                                        type: "password",
                                        placeholder: "Repeat New Password",
                                        state: _vm.statePassword
                                      },
                                      model: {
                                        value: _vm.input.password_confirmation,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.input,
                                            "password_confirmation",
                                            $$v
                                          )
                                        },
                                        expression:
                                          "input.password_confirmation"
                                      }
                                    })
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
                              [_vm._v("Submit")]
                            )
                          ],
                          1
                        )
                      ])
                    : _vm._e()
                ],
                1
              )
            ],
            1
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthPasswordReset_vue_vue_type_template_id_5eb3fccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthPasswordReset.vue?vue&type=template&id=5eb3fccc& */ "./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue?vue&type=template&id=5eb3fccc&");
/* harmony import */ var _AuthPasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthPasswordReset.vue?vue&type=script&lang=js& */ "./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthPasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthPasswordReset_vue_vue_type_template_id_5eb3fccc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthPasswordReset_vue_vue_type_template_id_5eb3fccc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthPasswordReset.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue?vue&type=template&id=5eb3fccc&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue?vue&type=template&id=5eb3fccc& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPasswordReset_vue_vue_type_template_id_5eb3fccc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthPasswordReset.vue?vue&type=template&id=5eb3fccc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/auth/AuthPasswordReset.vue?vue&type=template&id=5eb3fccc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPasswordReset_vue_vue_type_template_id_5eb3fccc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPasswordReset_vue_vue_type_template_id_5eb3fccc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=58.js.map