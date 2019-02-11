(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/auth/AuthRegister.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/auth/AuthRegister.vue?vue&type=script&lang=js& ***!
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
/* harmony import */ var _AuthRegisterFaq_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthRegisterFaq.vue */ "./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    FaqModal: _AuthRegisterFaq_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  data: function data() {
    return {
      isDisabled: false,
      registered: false,
      scholarshipOptions: [],
      departmentOptions: [],
      periodOptions: [],
      errors: {
        name: '',
        year: '',
        phone: '',
        email: '',
        donation_category: '',
        department: '',
        initial: '',
        password: '',
        amount: null,
        address: '',
        accept_term_condition: null,
        period: null
      },
      input: {
        name: '',
        year: '',
        phone: '',
        donation_category: null,
        department: null,
        email: '',
        amount: null,
        address: '',
        accept_term_condition: null,
        period: null,
        password: '',
        password_confirmation: ''
      }
    };
  },
  created: function created() {
    this.getSchoarship();
    this.getPeriod();
    this.getDepartment();
  },
  computed: {
    loaded: function loaded() {
      return this.scholarshipOptions && this.departmentOptions && this.periodOptions ? true : false;
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
      return this.errors.donation_category == 'no-error' ? true : this.errors.donation_category ? false : null;
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
      return this.errors.department == 'no-error' ? true : this.errors.department ? false : null;
    },
    stateAmount: function stateAmount() {
      return this.errors.amount == 'no-error' ? true : this.errors.amount ? false : null;
    },
    stateAddress: function stateAddress() {
      return this.errors.address == 'no-error' ? true : this.errors.address ? false : null;
    },
    stateDonationCategory: function stateDonationCategory() {
      return this.errors.donation_category == 'no-error' ? true : this.errors.donation_category ? false : null;
    },
    statePeriod: function statePeriod() {
      return this.errors.period == 'no-error' ? true : this.errors.period ? false : null;
    },
    stateAcceptTermCondition: function stateAcceptTermCondition() {
      return this.errors.accept_term_condition == 'no-error' ? true : this.errors.accept_term_condition ? false : null;
    }
  },
  methods: {
    getPeriod: function getPeriod() {
      var _this = this;

      axios.get("api/period").then(function (response) {
        response.data.forEach(function (obj) {
          obj.value = obj.id;
          obj.text = "Seedscholarship #".concat(obj.period, " - Year ").concat(obj.year);
          delete obj.id;
          delete obj.period;
          delete obj.year;
        });
        _this.periodOptions = response.data;
        console.log(_this.periodOptions);
      }).catch(function (error) {
        console.log(error);
      });
    },
    getSchoarship: function getSchoarship() {
      var _this2 = this;

      axios.get("api/scholarship").then(function (response) {
        response.data.forEach(function (obj) {
          obj.value = obj.id;
          obj.text = "".concat(obj.name, " - Year ").concat(obj.year);
          delete obj.id;
          delete obj.name;
          delete obj.year;
        });
        _this2.scholarshipOptions = response.data;
        console.log(_this2.scholarshipOptions);
      }).catch(function (error) {
        console.log(error);
      });
    },
    getDepartment: function getDepartment() {
      var _this3 = this;

      axios.get("api/awardee-department").then(function (response) {
        response.data.forEach(function (obj) {
          obj.value = obj.id;
          obj.text = obj.department;
          delete obj.id;
          delete obj.department;
          delete obj.awardees_count;
        });
        _this3.departmentOptions = response.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    register: function register() {
      var _this4 = this;

      this.isDisabled = true;
      axios.post('api/auth/donor/register', this.input).then(function (response) {
        _this4.$snotify.success("You Are Registered Successfully", "SUCCESS");

        _this4.input.name = '', _this4.input.donation_category = null, _this4.input.department = null, _this4.input.email = '', _this4.input.password = '', _this4.input.password_confirmation = '';
        _this4.registered = true;
        _this4.isDisabled = false;
      }).catch(function (error) {
        // console.log(error.response.data);
        _this4.$snotify.error(error.response.data.message, "ERROR");

        _this4.isDisabled = false;
        var errors = error.response.data.errors; // console.log(errors.name);

        _this4.errors.name = errors.name ? errors.name[0] : 'no-error';
        _this4.errors.email = errors.email ? errors.email[0] : 'no-error';
        _this4.errors.phone = errors.phone ? errors.phone[0] : 'no-error';
        _this4.errors.year = errors.year ? errors.year[0] : 'no-error';
        _this4.errors.donation_category = errors.donation_category ? errors.donation_category[0] : 'no-error';
        _this4.errors.department = errors.department ? errors.department[0] : 'no-error';
        _this4.errors.password = errors.password ? errors.password[0] : 'no-error';
        _this4.errors.amount = errors.amount ? errors.amount[0] : 'no-error';
        _this4.errors.period = errors.period ? errors.period[0] : 'no-error';
        _this4.errors.accept_term_condition = errors.accept_term_condition ? errors.accept_term_condition[0] : 'no-error';
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************/
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/auth/AuthRegister.vue?vue&type=template&id=7eed0274&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/auth/AuthRegister.vue?vue&type=template&id=7eed0274& ***!
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
  return _vm.loaded
    ? _c("div", { staticClass: "app flex-row align-items-center" }, [
        _c(
          "div",
          { staticClass: "container" },
          [
            _c(
              "b-row",
              { staticClass: "justify-content-center" },
              [
                _vm.registered
                  ? _c("b-col", { attrs: { sm: "8" } }, [
                      _c(
                        "header",
                        { staticClass: "text-center", attrs: { id: "header" } },
                        [
                          _c("h1", { staticClass: "display-1" }, [
                            _c("strong", [_vm._v("TERIMA KASIH!")])
                          ])
                        ]
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
                            "Terimakasih telah mendaftar menjadi donatur SEEDS 5. Kontribusi Anda sangat berharga untuk mahasiswa Departemen Teknik Sipil UI. Tim kami akan segera menghubungi Anda."
                          )
                        ])
                      ])
                    ])
                  : _vm._e(),
                _vm._v(" "),
                !_vm.registered
                  ? _c(
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
                                _c("h2", [_vm._v("Donors Registration")]),
                                _vm._v(" "),
                                _c("p", { staticClass: "text-muted" }, [
                                  _vm._v("Create your first account")
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
                                              "invalid-feedback":
                                                _vm.errors.name,
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
                                                    placeholder: "Email",
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
                                                        staticClass:
                                                          "icon-phone"
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
                                                    placeholder: "Phone",
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
                                      { attrs: { sm: "6" } },
                                      [
                                        _c(
                                          "b-form-group",
                                          {
                                            attrs: {
                                              "invalid-feedback":
                                                _vm.errors.year,
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
                                                    min: "1950",
                                                    max: "2014",
                                                    placeholder: "Year",
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
                                      { attrs: { sm: "12" } },
                                      [
                                        _c(
                                          "b-form-group",
                                          {
                                            attrs: {
                                              "invalid-feedback":
                                                _vm.errors.department,
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
                                                        _vm.input.department,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.input,
                                                          "department",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "input.department"
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
                                                              "-- Please select department --"
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
                                                _vm.errors.address,
                                              state: _vm.stateAddress
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
                                                          "icon-direction"
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
                                                    placeholder: "Full Address",
                                                    state: _vm.stateAddress
                                                  },
                                                  model: {
                                                    value: _vm.input.address,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.input,
                                                        "address",
                                                        $$v
                                                      )
                                                    },
                                                    expression: "input.address"
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
                                                _vm.errors.period,
                                              state: _vm.statePeriod
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
                                                      id: "period",
                                                      options:
                                                        _vm.periodOptions,
                                                      state: _vm.statePeriod
                                                    },
                                                    model: {
                                                      value: _vm.input.period,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.input,
                                                          "period",
                                                          $$v
                                                        )
                                                      },
                                                      expression: "input.period"
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
                                                              "-- Please select period --"
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
                                                _vm.errors.donation_category,
                                              state: _vm.stateDonationCategory
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
                                                      id: "donationCategory",
                                                      options: [
                                                        {
                                                          value: "pasif",
                                                          text: "Donatur Pasif"
                                                        },
                                                        {
                                                          value: "aktif",
                                                          text: "Donatur Aktif"
                                                        }
                                                      ],
                                                      state:
                                                        _vm.stateDonationCategory
                                                    },
                                                    model: {
                                                      value:
                                                        _vm.input
                                                          .donation_category,
                                                      callback: function($$v) {
                                                        _vm.$set(
                                                          _vm.input,
                                                          "donation_category",
                                                          $$v
                                                        )
                                                      },
                                                      expression:
                                                        "input.donation_category"
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
                                                              "-- Please select donation category for this period --"
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
                                      "slide-y-up-transition",
                                      [
                                        _vm.input.donation_category == "aktif"
                                          ? _c(
                                              "b-col",
                                              { attrs: { sm: "12" } },
                                              [
                                                _c(
                                                  "b-form-group",
                                                  {
                                                    attrs: {
                                                      "invalid-feedback":
                                                        _vm.errors.amount,
                                                      state: _vm.stateAmount,
                                                      description:
                                                        "This amount will be billed every month"
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
                                                            _c(
                                                              "b-input-group-text",
                                                              [_vm._v("Rp")]
                                                            )
                                                          ],
                                                          1
                                                        ),
                                                        _vm._v(" "),
                                                        _c("b-input", {
                                                          staticClass:
                                                            "form-control",
                                                          attrs: {
                                                            autocomplete: "off",
                                                            type: "number",
                                                            placeholder:
                                                              "Amount of Donation (could be tentative)",
                                                            state:
                                                              _vm.stateAmount
                                                          },
                                                          model: {
                                                            value:
                                                              _vm.input.amount,
                                                            callback: function(
                                                              $$v
                                                            ) {
                                                              _vm.$set(
                                                                _vm.input,
                                                                "amount",
                                                                $$v
                                                              )
                                                            },
                                                            expression:
                                                              "input.amount"
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
                                            )
                                          : _vm._e()
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
                                                _vm.errors
                                                  .accept_term_condition,
                                              state:
                                                _vm.stateAcceptTermCondition
                                            }
                                          },
                                          [
                                            _c(
                                              "b-form-checkbox",
                                              {
                                                attrs: {
                                                  id: "term_condition",
                                                  value: true,
                                                  "unchecked-value": null,
                                                  state:
                                                    _vm.stateAcceptTermCondition
                                                },
                                                model: {
                                                  value:
                                                    _vm.input
                                                      .accept_term_condition,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.input,
                                                      "accept_term_condition",
                                                      $$v
                                                    )
                                                  },
                                                  expression:
                                                    "input.accept_term_condition"
                                                }
                                              },
                                              [
                                                _vm._v(
                                                  "\n                      I already read & accept the terms and conditions.\n                    "
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
                                    _vm._v(" Submit")
                                  ]
                                )
                              ],
                              1
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c("faq-modal")
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
      ])
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue?vue&type=template&id=dc3010c0&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue?vue&type=template&id=dc3010c0& ***!
  \*******************************************************************************************************************************************************************************************************************************/
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
          _c("p", [
            _vm._v(
              "Tim SEED Scholarship mengajak dan membuka peluang sebesar-besarnya bagi para calon donatur yang ingin ikut berpartisipasi dalam keberlangsungan program beasiswa SEED Scholarship. Demi memberikan kenyamanan dan menyesuaikan kemampuan calon donatur, kami memberikan pilihan 2 (dua) kategori donatur sebagai berikut"
            )
          ]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [
              _vm._v(
                "Donatur Aktif adalah donatur yang memberikan donasi dengan jumlah minimal Rp. 100.000,00 rutin setiap bulan selama 12 bulan"
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Donatur Pasif adalah donatur yang memberikan donasi dengan jumlah yang tidak ditetapkan sebanyak minimal 1 (satu) kali dalam 12 bulan."
              )
            ])
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("strong", [_vm._v("Q : Kapan donasi dibayarkan?")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "A : Periode pembayaran donasi dibayarkan tanggal 25 s/d 5 bulan setelahnya. Contoh: Untuk pembayaran bulan November 2015, maka donasi dapat dibayarkan sejak tanggal 25 November 2015 s/d 5 Desember 2015"
            )
          ]),
          _vm._v(" "),
          _c("strong", [_vm._v("Q : Kapan pembukaan pendaftaran donatur?")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "A : Pendaftaran donatur akan dibuka sepanjang tahun. Anda cukup mengisi formulir pendaftaran kemudian tim PR akan mengubungi Anda untuk memberikan informasi selengkapnya"
            )
          ]),
          _vm._v(" "),
          _c("strong", [
            _vm._v(
              "Q: Untuk donatur aktif, dapatkah donasi dibayarkan langsung untuk beberapa bulan ke depan untuk menghindari lupa transfer ?"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "A : Donasi bisa dibayarkan langsung untuk beberapa bulan donasi, misalkan langsung Rp 300.000,- untuk 3 bulan dst. Team finance akan mencatatnya. Yang ditekankan adalah dalam satu periode (selama 1 tahun) total donasi yang dikumpulkan adalah Rp 1.200.000,-\n\nKategori Donatur*\n"
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

/***/ "./resources/assets/js/donor/views/auth/AuthRegister.vue":
/*!***************************************************************!*\
  !*** ./resources/assets/js/donor/views/auth/AuthRegister.vue ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthRegister_vue_vue_type_template_id_7eed0274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthRegister.vue?vue&type=template&id=7eed0274& */ "./resources/assets/js/donor/views/auth/AuthRegister.vue?vue&type=template&id=7eed0274&");
/* harmony import */ var _AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthRegister.vue?vue&type=script&lang=js& */ "./resources/assets/js/donor/views/auth/AuthRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthRegister_vue_vue_type_template_id_7eed0274___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthRegister_vue_vue_type_template_id_7eed0274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/donor/views/auth/AuthRegister.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/donor/views/auth/AuthRegister.vue?vue&type=script&lang=js&":
/*!****************************************************************************************!*\
  !*** ./resources/assets/js/donor/views/auth/AuthRegister.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/auth/AuthRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/donor/views/auth/AuthRegister.vue?vue&type=template&id=7eed0274&":
/*!**********************************************************************************************!*\
  !*** ./resources/assets/js/donor/views/auth/AuthRegister.vue?vue&type=template&id=7eed0274& ***!
  \**********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_template_id_7eed0274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegister.vue?vue&type=template&id=7eed0274& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/auth/AuthRegister.vue?vue&type=template&id=7eed0274&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_template_id_7eed0274___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_template_id_7eed0274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue":
/*!******************************************************************!*\
  !*** ./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthRegisterFaq_vue_vue_type_template_id_dc3010c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthRegisterFaq.vue?vue&type=template&id=dc3010c0& */ "./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue?vue&type=template&id=dc3010c0&");
/* harmony import */ var _AuthRegisterFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthRegisterFaq.vue?vue&type=script&lang=js& */ "./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthRegisterFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthRegisterFaq_vue_vue_type_template_id_dc3010c0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthRegisterFaq_vue_vue_type_template_id_dc3010c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/donor/views/auth/AuthRegisterFaq.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************!*\
  !*** ./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegisterFaq.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue?vue&type=template&id=dc3010c0&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue?vue&type=template&id=dc3010c0& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_template_id_dc3010c0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegisterFaq.vue?vue&type=template&id=dc3010c0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/auth/AuthRegisterFaq.vue?vue&type=template&id=dc3010c0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_template_id_dc3010c0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_template_id_dc3010c0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=9.js.map