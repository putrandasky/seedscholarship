(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/auth/AuthRegister.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/auth/AuthRegister.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _AuthRegisterFaq_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthRegisterFaq.vue */ "./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue");




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
  components: {
    FaqModal: _AuthRegisterFaq_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      isDisabled: false,
      scholarshipOptions: [],
      departmentOptions: [],
      errors: {
        name: '',
        year: '',
        phone: '',
        email: '',
        scholarship_id: '',
        department_id: '',
        initial: '',
        password: ''
      },
      input: {
        name: '',
        year: '',
        phone: '',
        scholarship_id: null,
        department_id: null,
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  created: function created() {
    this.getScholarship();
    this.getDepartment();
  },
  computed: {
    maxYear: function maxYear() {
      return new Date().getFullYear() - 1;
    },
    minYear: function minYear() {
      return new Date().getFullYear() - 7;
    },
    loaded: function loaded() {
      return this.scholarshipOptions && this.departmentOptions ? true : false;
    },
    stateName: function stateName() {
      return this.errors.name == 'no-error' ? true : this.errors.name ? false : null;
    },
    stateEmail: function stateEmail() {
      return this.errors.email == 'no-error' ? true : this.errors.email ? false : null;
    },
    statePhone: function statePhone() {
      return this.errors.phone == 'no-error' ? true : this.errors.phone ? false : null;
    },
    stateScholarship: function stateScholarship() {
      return this.errors.scholarship_id == 'no-error' ? true : this.errors.scholarship_id ? false : null;
    },
    stateYear: function stateYear() {
      return this.errors.year == 'no-error' ? true : this.errors.year ? false : null;
    },
    stateInitial: function stateInitial() {
      return this.errors.initial == 'no-error' ? true : this.errors.initial ? false : null;
    },
    statePassword: function statePassword() {
      return this.errors.password == 'no-error' ? true : this.errors.password ? false : null;
    },
    stateDepartment: function stateDepartment() {
      return this.errors.department_id == 'no-error' ? true : this.errors.department_id ? false : null;
    }
  },
  methods: {
    getScholarship: function getScholarship() {
      var _this = this;

      axios.get("api/scholarship").then(function (response) {
        response.data.forEach(function (obj) {
          obj.value = obj.id;
          obj.text = "".concat(obj.name, " - Year ").concat(obj.year);
          delete obj.id;
          delete obj.name;
          delete obj.year;
        });
        _this.scholarshipOptions = response.data; // console.log(this.scholarshipOptions);
      }).catch(function (error) {
        console.log(error);
      });
    },
    getDepartment: function getDepartment() {
      var _this2 = this;

      axios.get("api/college-department").then(function (response) {
        response.data.forEach(function (obj) {
          obj.value = obj.id;
          obj.text = obj.department;
          delete obj.id;
          delete obj.department;
          delete obj.awardees_count;
        });
        _this2.departmentOptions = response.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    register: function register() {
      var _this3 = this;

      this.isDisabled = true;
      axios.post('api/auth/nonreg/register', this.input).then(function (response) {
        _this3.$snotify.success("You Are Registered Successfully", "SUCCESS");

        _this3.input.name = '', _this3.input.scholarship_id = null, _this3.input.department_id = null, _this3.input.email = '', _this3.input.password = '', _this3.input.password_confirmation = '';
        _this3.isDisabled = false;

        _this3.$router.replace({
          name: 'RegistrationUpload',
          query: {
            id: response.data.id,
            email: response.data.email,
            scholarship_id: response.data.scholarship_id,
            registration_code: response.data.registration_code
          }
        });
      }).catch(function (error) {
        // console.log(error.response.data);
        _this3.$snotify.error(error.response.data.message, "ERROR");

        _this3.isDisabled = false;
        var errors = error.response.data.errors; // console.log(errors.name);

        _this3.errors.name = errors.name ? errors.name[0] : 'no-error';
        _this3.errors.email = errors.email ? errors.email[0] : 'no-error';
        _this3.errors.phone = errors.phone ? errors.phone[0] : 'no-error';
        _this3.errors.year = errors.year ? errors.year[0] : 'no-error';
        _this3.errors.scholarship_id = errors.scholarship_id ? errors.scholarship_id[0] : 'no-error';
        _this3.errors.department_id = errors.department_id ? errors.department_id[0] : 'no-error';
        _this3.errors.password = errors.password ? errors.password[0] : 'no-error';
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
  name: 'AuthRegisterFaq',
  data: function data() {
    return {
      faqModal: false
    };
  },
  created: function created() {},
  methods: {}
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/auth/AuthRegister.vue?vue&type=template&id=b911d20a&":
/*!*****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/auth/AuthRegister.vue?vue&type=template&id=b911d20a& ***!
  \*****************************************************************************************************************************************************************************************************************************/
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
  return _vm.loaded
    ? _c(
        "div",
        { staticClass: "app flex-row align-items-center" },
        [
          _c(
            "loading",
            {
              staticClass: "text-center",
              attrs: {
                active: _vm.isDisabled,
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
                    { attrs: { lg: "6", md: "8" } },
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
                                  return _vm.register($event)
                                }
                              }
                            },
                            [
                              _c("h2", [
                                _vm._v("Research Awardee Registration")
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-row",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { sm: "12" } },
                                    [
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
                                                    _c("i", {
                                                      staticClass: "icon-user"
                                                    })
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("b-input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  autocomplete: "off",
                                                  type: "text",
                                                  placeholder: "Full Name",
                                                  state: _vm.stateName
                                                },
                                                model: {
                                                  value: _vm.input.name,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.input,
                                                      "name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "input.name"
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
                                    { attrs: { sm: "12" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.errors.email,
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
                                                    _vm._v("@")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("b-input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  autocomplete: "off",
                                                  type: "text",
                                                  placeholder: "Active Email",
                                                  state: _vm.stateEmail
                                                },
                                                model: {
                                                  value: _vm.input.email,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.input,
                                                      "email",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "input.email"
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
                                    { attrs: { sm: "6" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback": _vm.errors.year,
                                            state: _vm.stateYear
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
                                                    _c("i", {
                                                      staticClass:
                                                        "icon-calendar"
                                                    })
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
                                                  min: _vm.minYear,
                                                  max: _vm.maxYear,
                                                  placeholder:
                                                    "Year (Angkatan)",
                                                  state: _vm.stateYear
                                                },
                                                model: {
                                                  value: _vm.input.year,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.input,
                                                      "year",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "input.year"
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
                                    { attrs: { sm: "6" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.errors.phone,
                                            state: _vm.statePhone
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
                                                    _c("i", {
                                                      staticClass: "icon-phone"
                                                    })
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
                                                  placeholder: "Phone Number",
                                                  state: _vm.statePhone
                                                },
                                                model: {
                                                  value: _vm.input.phone,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.input,
                                                      "phone",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "input.phone"
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
                                    { attrs: { sm: "12" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.errors.department_id,
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
                                                    _c("i", {
                                                      staticClass: "icon-list"
                                                    })
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
                                                    options:
                                                      _vm.departmentOptions,
                                                    state: _vm.stateDepartment
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.input.department_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.input,
                                                        "department_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "input.department_id"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "template",
                                                    { slot: "first" },
                                                    [
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            disabled: ""
                                                          },
                                                          domProps: {
                                                            value: null
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "-- Please select your field of study --"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ],
                                                2
                                              )
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
                                    { attrs: { sm: "12" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.errors.scholarship_id,
                                            state: _vm.stateScholarship
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
                                                    _c("i", {
                                                      staticClass: "icon-list"
                                                    })
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
                                                    id: "scholarship",
                                                    options:
                                                      _vm.scholarshipOptions,
                                                    state: _vm.stateScholarship
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.input.scholarship_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.input,
                                                        "scholarship_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "input.scholarship_id"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "template",
                                                    { slot: "first" },
                                                    [
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            disabled: ""
                                                          },
                                                          domProps: {
                                                            value: null
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "-- Please select program --"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ],
                                                2
                                              )
                                            ],
                                            1
                                          )
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
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("faq-modal")
        ],
        1
      )
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue?vue&type=template&id=710b774b&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue?vue&type=template&id=710b774b& ***!
  \********************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "b-tooltip",
              rawName: "v-b-tooltip.hover.left",
              value: "Term Conditions & FAQ",
              expression: "'Term Conditions & FAQ'",
              modifiers: { hover: true, left: true }
            }
          ],
          staticClass: "float-button",
          on: {
            click: function($event) {
              _vm.faqModal = true
            }
          }
        },
        [_c("i", { staticClass: "fa fa-question" })]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            "hide-footer": true,
            "no-close-on-esc": true,
            "hide-header-close": false,
            "no-close-on-backdrop": false,
            size: "xl",
            title: "Term, Conditions, & Frequently Asked Question"
          },
          model: {
            value: _vm.faqModal,
            callback: function($$v) {
              _vm.faqModal = $$v
            },
            expression: "faqModal"
          }
        },
        [
          _c("strong", [
            _vm._v("Pastikan kamu memenuhi syarat dan ketentuan dibawah ini")
          ]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [
              _vm._v(
                "Mahasiswa Departemen Teknik Sipil, Universitas Indonesia."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Telah melakukan sidang seminar dan sedang mengambil mata kuliah skripsi"
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Tidak menerima bantuan pendanaan dari pihak lain terkait penelitian tugas akhir"
              )
            ])
          ]),
          _vm._v(" "),
          _c("strong", [
            _vm._v(
              "Kemudian, siapkan persyaratan berikut sebagai berkas pendaftaran"
            )
          ]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [_vm._v("CV / Riwayat Hidup")]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Proposal penelitan dengan isi; latar belakang, tujuan, metodologi, RAB, referensi "
              ),
              _c("strong", [
                _vm._v(
                  "(Format diberikan di halaman upload setelah melakukan registrasi)"
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Surat keterangan tidak menerima beasiswa riset lainnya "),
              _c("strong", [
                _vm._v(
                  "(Format diberikan di halaman upload setelah melakukan registrasi)"
                )
              ])
            ]),
            _vm._v(" "),
            _c("li", [_vm._v("Print out halaman ringkasan dan riwayat SIAKNG")])
          ]),
          _vm._v(" "),
          _c("strong", [_vm._v("Tunggu konfirmasi dari Tim Recruitment SEED")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Kandidat terpilih untuk mendapatkan beasiswa akan kami hubungi untuk mengikuti wawancara"
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/nonreg/views/auth/AuthRegister.vue":
/*!****************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/auth/AuthRegister.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthRegister_vue_vue_type_template_id_b911d20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthRegister.vue?vue&type=template&id=b911d20a& */ "./resources/assets/js/nonreg/views/auth/AuthRegister.vue?vue&type=template&id=b911d20a&");
/* harmony import */ var _AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthRegister.vue?vue&type=script&lang=js& */ "./resources/assets/js/nonreg/views/auth/AuthRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthRegister_vue_vue_type_template_id_b911d20a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthRegister_vue_vue_type_template_id_b911d20a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/nonreg/views/auth/AuthRegister.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/nonreg/views/auth/AuthRegister.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/auth/AuthRegister.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/auth/AuthRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/nonreg/views/auth/AuthRegister.vue?vue&type=template&id=b911d20a&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/auth/AuthRegister.vue?vue&type=template&id=b911d20a& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_template_id_b911d20a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegister.vue?vue&type=template&id=b911d20a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/auth/AuthRegister.vue?vue&type=template&id=b911d20a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_template_id_b911d20a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_template_id_b911d20a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue":
/*!*******************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthRegisterFaq_vue_vue_type_template_id_710b774b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthRegisterFaq.vue?vue&type=template&id=710b774b& */ "./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue?vue&type=template&id=710b774b&");
/* harmony import */ var _AuthRegisterFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthRegisterFaq.vue?vue&type=script&lang=js& */ "./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthRegisterFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthRegisterFaq_vue_vue_type_template_id_710b774b___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthRegisterFaq_vue_vue_type_template_id_710b774b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js&":
/*!********************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegisterFaq.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue?vue&type=template&id=710b774b&":
/*!**************************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue?vue&type=template&id=710b774b& ***!
  \**************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_template_id_710b774b___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegisterFaq.vue?vue&type=template&id=710b774b& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/auth/AuthRegisterFaq.vue?vue&type=template&id=710b774b&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_template_id_710b774b___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_template_id_710b774b___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);