(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[23],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/auth/AuthForgotPassword.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/auth/AuthForgotPassword.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0__);

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
  name: 'AuthForgotPassword',
  data: function data() {
    return {
      isDisabled: false,
      loaded: false,
      input: {
        email: ''
      },
      errors: {
        email: ''
      }
    };
  },
  created: function created() {},
  computed: {
    stateEmail: function stateEmail() {
      return this.errors.email == 'no-error' ? true : this.errors.email ? false : null;
    }
  },
  methods: {
    sendForgotPasswordEmail: function sendForgotPasswordEmail() {
      var _this = this;

      this.isDisabled = true;
      var self = this;
      this.$snotify.async('Creating Link for Reseting Password', 'Please Wait', function () {
        return new C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_0___default.a(function (resolve, reject) {
          return axios.post("api/forgot/password", {
            email: _this.input.email
          }).then(function (response) {
            console.log(response.data.status);
            self.isDisabled = false;
            self.input.email = '';
            resolve({
              title: 'Success!!!',
              body: response.data.status,
              config: {
                closeOnClick: true
              }
            });
          }).catch(function (error) {
            self.isDisabled = false;
            reject({
              title: 'Error!!!',
              body: error.response.data.status,
              config: {
                closeOnClick: true
              }
            });
          });
        });
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/auth/AuthForgotPassword.vue?vue&type=template&id=56043541&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/auth/AuthForgotPassword.vue?vue&type=template&id=56043541& ***!
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
  return _c("div", { staticClass: "app flex-row align-items-center" }, [
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
                _c("b-card", { staticClass: "mx-4" }, [
                  _c(
                    "form",
                    {
                      staticClass: "card-body p-4",
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          _vm.sendForgotPasswordEmail()
                        }
                      }
                    },
                    [
                      _c("h1", [_vm._v("FORGOT PASSWORD")]),
                      _vm._v(" "),
                      _c("p", { staticClass: "text-muted" }, [
                        _vm._v("Send link to reset password")
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-form-group",
                        {
                          attrs: {
                            "invalid-feedback": _vm.errors.email,
                            state: _vm.stateEmail
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
                                    _c("i", { staticClass: "icon-envelope" })
                                  ])
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("b-input", {
                                staticClass: "form-control",
                                attrs: {
                                  type: "email",
                                  placeholder: "Your Email",
                                  state: _vm.stateEmail
                                },
                                model: {
                                  value: _vm.input.email,
                                  callback: function($$v) {
                                    _vm.$set(_vm.input, "email", $$v)
                                  },
                                  expression: "input.email"
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
                        [_vm._v("Send Link")]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/donor/views/auth/AuthForgotPassword.vue":
/*!*********************************************************************!*\
  !*** ./resources/assets/js/donor/views/auth/AuthForgotPassword.vue ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthForgotPassword_vue_vue_type_template_id_56043541___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthForgotPassword.vue?vue&type=template&id=56043541& */ "./resources/assets/js/donor/views/auth/AuthForgotPassword.vue?vue&type=template&id=56043541&");
/* harmony import */ var _AuthForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthForgotPassword.vue?vue&type=script&lang=js& */ "./resources/assets/js/donor/views/auth/AuthForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthForgotPassword_vue_vue_type_template_id_56043541___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthForgotPassword_vue_vue_type_template_id_56043541___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/donor/views/auth/AuthForgotPassword.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/donor/views/auth/AuthForgotPassword.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/donor/views/auth/AuthForgotPassword.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthForgotPassword.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/auth/AuthForgotPassword.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthForgotPassword_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/donor/views/auth/AuthForgotPassword.vue?vue&type=template&id=56043541&":
/*!****************************************************************************************************!*\
  !*** ./resources/assets/js/donor/views/auth/AuthForgotPassword.vue?vue&type=template&id=56043541& ***!
  \****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthForgotPassword_vue_vue_type_template_id_56043541___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthForgotPassword.vue?vue&type=template&id=56043541& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/auth/AuthForgotPassword.vue?vue&type=template&id=56043541&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthForgotPassword_vue_vue_type_template_id_56043541___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthForgotPassword_vue_vue_type_template_id_56043541___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);