(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/auth/AuthPasswordReset.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/auth/AuthPasswordReset.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/core-js/modules/es6.regexp.replace.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.replace.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var advanceStringIndex = __webpack_require__(/*! ./_advance-string-index */ "./node_modules/core-js/modules/_advance-string-index.js");
var regExpExec = __webpack_require__(/*! ./_regexp-exec-abstract */ "./node_modules/core-js/modules/_regexp-exec-abstract.js");
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(/*! ./_fix-re-wks */ "./node_modules/core-js/modules/_fix-re-wks.js")('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/auth/AuthPasswordReset.vue?vue&type=template&id=271defd0&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/auth/AuthPasswordReset.vue?vue&type=template&id=271defd0& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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

/***/ "./resources/assets/js/admin/views/auth/AuthPasswordReset.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/admin/views/auth/AuthPasswordReset.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthPasswordReset_vue_vue_type_template_id_271defd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthPasswordReset.vue?vue&type=template&id=271defd0& */ "./resources/assets/js/admin/views/auth/AuthPasswordReset.vue?vue&type=template&id=271defd0&");
/* harmony import */ var _AuthPasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthPasswordReset.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/auth/AuthPasswordReset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthPasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthPasswordReset_vue_vue_type_template_id_271defd0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthPasswordReset_vue_vue_type_template_id_271defd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/auth/AuthPasswordReset.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/auth/AuthPasswordReset.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/auth/AuthPasswordReset.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthPasswordReset.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/auth/AuthPasswordReset.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPasswordReset_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/auth/AuthPasswordReset.vue?vue&type=template&id=271defd0&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/auth/AuthPasswordReset.vue?vue&type=template&id=271defd0& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPasswordReset_vue_vue_type_template_id_271defd0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthPasswordReset.vue?vue&type=template&id=271defd0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/auth/AuthPasswordReset.vue?vue&type=template&id=271defd0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPasswordReset_vue_vue_type_template_id_271defd0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthPasswordReset_vue_vue_type_template_id_271defd0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);