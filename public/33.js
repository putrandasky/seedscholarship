(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[33],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/admin/AppAdminNew.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/admin/AppAdminNew.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);



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
  name: 'AuthRegister',
  data: function data() {
    return {
      departmentOptions: [],
      errors: {
        name: '',
        email: '',
        department_id: '',
        password: ''
      },
      input: {
        name: '',
        department_id: null,
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  created: function created() {
    this.getDepartment();
  },
  computed: {
    stateName: function stateName() {
      return this.errors.name == 'no-error' ? true : this.errors.name ? false : null;
    },
    stateEmail: function stateEmail() {
      return this.errors.email == 'no-error' ? true : this.errors.email ? false : null;
    },
    stateDepartment: function stateDepartment() {
      return this.errors.department == 'no-error' ? true : this.errors.department ? false : null;
    },
    statePassword: function statePassword() {
      return this.errors.password == 'no-error' ? true : this.errors.password ? false : null;
    }
  },
  methods: {
    getDepartment: function getDepartment() {
      var _this = this;

      axios.get("api/department").then(function (response) {
        response.data.forEach(function (obj) {
          obj.value = obj.id;
          obj.text = obj.department;
          delete obj.id;
          delete obj.department;
        });
        _this.departmentOptions = response.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    register: function register() {
      var _this2 = this;

      axios.post('api/auth/register', this.input).then(function (response) {
        _this2.$snotify.success("New User Registered", "SUCCESS");

        _this2.input.name = '', _this2.input.initial = '', _this2.input.department = null, _this2.input.email = '', _this2.input.password = '', _this2.input.password_confirmation = '';

        _this2.$router.push({
          name: 'AccountAdmin'
        });
      }).catch(function (error) {
        // console.log(error.response.data);
        var errors = error.response.data.errors; // console.log(errors.name);

        _this2.errors.name = errors.name ? errors.name[0] : 'no-error';
        _this2.errors.email = errors.email ? errors.email[0] : 'no-error';
        _this2.errors.department = errors.department ? errors.department[0] : 'no-error';
        _this2.errors.initial = errors.initial ? errors.initial[0] : 'no-error';
        _this2.errors.password = errors.password ? errors.password[0] : 'no-error';

        _this2.$snotify.error(error.response.data.message, "ERROR");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/admin/AppAdminNew.vue?vue&type=template&id=47872e62&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/admin/AppAdminNew.vue?vue&type=template&id=47872e62& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
              _c("b-card", { staticClass: "mx-4", attrs: { "no-body": "" } }, [
                _c(
                  "form",
                  {
                    staticClass: "card-body p-4",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.register($event)
                      }
                    }
                  },
                  [
                    _c("h1", [_vm._v("Register")]),
                    _vm._v(" "),
                    _c("p", { staticClass: "text-muted" }, [
                      _vm._v("Create new admin account")
                    ]),
                    _vm._v(" "),
                    _c(
                      "b-form-group",
                      {
                        attrs: {
                          "invalid-feedback": _vm.errors.name,
                          state: _vm.stateName
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
                                  _c("i", { staticClass: "icon-user" })
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c("b-input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Full Name",
                                state: _vm.stateName
                              },
                              model: {
                                value: _vm.input.name,
                                callback: function($$v) {
                                  _vm.$set(_vm.input, "name", $$v)
                                },
                                expression: "input.name"
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
                          "invalid-feedback": _vm.errors.department,
                          state: _vm.stateDepartment
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
                                  _c("i", { staticClass: "icon-list" })
                                ])
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "b-form-select",
                              {
                                attrs: {
                                  plain: "",
                                  id: "department",
                                  options: _vm.departmentOptions,
                                  state: _vm.stateDepartment
                                },
                                model: {
                                  value: _vm.input.department_id,
                                  callback: function($$v) {
                                    _vm.$set(_vm.input, "department_id", $$v)
                                  },
                                  expression: "input.department_id"
                                }
                              },
                              [
                                _c("template", { slot: "first" }, [
                                  _c(
                                    "option",
                                    {
                                      attrs: { disabled: "" },
                                      domProps: { value: null }
                                    },
                                    [_vm._v("-- Please select department --")]
                                  )
                                ])
                              ],
                              2
                            )
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
                              [_c("b-input-group-text", [_vm._v("@")])],
                              1
                            ),
                            _vm._v(" "),
                            _c("b-input", {
                              staticClass: "form-control",
                              attrs: {
                                type: "text",
                                placeholder: "Email",
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
                                placeholder: "Password",
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
                                placeholder: "Repeat password",
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
                                expression: "input.password_confirmation"
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
                        attrs: { type: "submit", variant: "success", block: "" }
                      },
                      [_vm._v("Create Account")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/admin/views/admin/AppAdminNew.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/admin/views/admin/AppAdminNew.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppAdminNew_vue_vue_type_template_id_47872e62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppAdminNew.vue?vue&type=template&id=47872e62& */ "./resources/assets/js/admin/views/admin/AppAdminNew.vue?vue&type=template&id=47872e62&");
/* harmony import */ var _AppAdminNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppAdminNew.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/admin/AppAdminNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppAdminNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppAdminNew_vue_vue_type_template_id_47872e62___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppAdminNew_vue_vue_type_template_id_47872e62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/admin/AppAdminNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/admin/AppAdminNew.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/admin/AppAdminNew.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAdminNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppAdminNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/admin/AppAdminNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAdminNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/admin/AppAdminNew.vue?vue&type=template&id=47872e62&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/admin/AppAdminNew.vue?vue&type=template&id=47872e62& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAdminNew_vue_vue_type_template_id_47872e62___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppAdminNew.vue?vue&type=template&id=47872e62& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/admin/AppAdminNew.vue?vue&type=template&id=47872e62&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAdminNew_vue_vue_type_template_id_47872e62___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAdminNew_vue_vue_type_template_id_47872e62___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=33.js.map