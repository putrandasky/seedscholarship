(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
/* harmony import */ var _AuthRegisterFaq_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./AuthRegisterFaq.vue */ "./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      periodOptions: [],
      departmentOptions: [],
      errors: {
        name: '',
        year: '',
        phone: '',
        email: '',
        period_id: '',
        department_id: '',
        initial: '',
        password: ''
      },
      input: {
        name: '',
        year: '',
        phone: '',
        period_id: null,
        department_id: null,
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  created: function created() {
    this.getPeriod();
    this.getDepartment();
  },
  computed: {
    loaded: function loaded() {
      return this.periodOptions && this.departmentOptions ? true : false;
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
    statePeriod: function statePeriod() {
      return this.errors.period_id == 'no-error' ? true : this.errors.period_id ? false : null;
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
    getDepartment: function getDepartment() {
      var _this2 = this;

      axios.get("api/awardee-department").then(function (response) {
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
      axios.post('api/auth/awardee/register', this.input).then(function (response) {
        _this3.$snotify.success("New Awardee Registered", "SUCCESS");

        _this3.input.name = '', _this3.input.period_id = null, _this3.input.department_id = null, _this3.input.email = '', _this3.input.password = '', _this3.input.password_confirmation = '';
        _this3.isDisabled = false;

        _this3.$router.replace({
          name: 'RegistrationUpload',
          query: {
            id: response.data.id,
            email: response.data.email,
            registration_code: response.data.registration_code,
            period_id: response.data.period_id
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
        _this3.errors.period_id = errors.period_id ? errors.period_id[0] : 'no-error';
        _this3.errors.department_id = errors.department_id ? errors.department_id[0] : 'no-error';
        _this3.errors.password = errors.password ? errors.password[0] : 'no-error';
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************/
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
//
//
//
//
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=template&id=682f2a1d&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=template&id=682f2a1d& ***!
  \******************************************************************************************************************************************************************************************************************************/
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
          value: _vm.loaded,
          expression: "loaded"
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
                          _c("h1", [_vm._v("Awardee Registration")]),
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
                                                  staticClass: "icon-calendar"
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
                                              min: "2015",
                                              max: "3000",
                                              placeholder: "Year",
                                              state: _vm.stateYear
                                            },
                                            model: {
                                              value: _vm.input.year,
                                              callback: function($$v) {
                                                _vm.$set(_vm.input, "year", $$v)
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
                                        "invalid-feedback": _vm.errors.phone,
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
                                                options: _vm.departmentOptions,
                                                state: _vm.stateDepartment
                                              },
                                              model: {
                                                value: _vm.input.department_id,
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
                                                      attrs: { disabled: "" },
                                                      domProps: { value: null }
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
                                          _vm.errors.period_id,
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
                                                options: _vm.periodOptions,
                                                state: _vm.statePeriod
                                              },
                                              model: {
                                                value: _vm.input.period_id,
                                                callback: function($$v) {
                                                  _vm.$set(
                                                    _vm.input,
                                                    "period_id",
                                                    $$v
                                                  )
                                                },
                                                expression: "input.period_id"
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
                                                      attrs: { disabled: "" },
                                                      domProps: { value: null }
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue?vue&type=template&id=4bf40e2e&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue?vue&type=template&id=4bf40e2e& ***!
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
            _vm._v("Pastikan kamu memenuhi persyaratan dibawah ini")
          ]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [
              _vm._v(
                "Mahasiswa tahun pertama Departemen Teknik Sipil, Universitas Indonesia."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Memiliki keterbatasan finansial dan berkeinginan tinggi untuk belajar."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Bersedia mengikuti program pengembangan diri selama menerima beasiswa."
              )
            ])
          ]),
          _vm._v(" "),
          _c("strong", [_vm._v("Kemudian, siapkan berkas pendaftaran")]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [
              _vm._v(
                "CV (format bebas dengan informasi yang wajib ada yaitu: data diri, riwayat pendidikan, kemampuan bahasa, pengalaman kerja, status pekerjaan/pendidikan anggota keluarga)"
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Esai dengan topik : Mengapa saya pantas mendapatkan beasiswa SEED (300-500 kata)"
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Salinan slip gaji orangtua dan/atau rekening listrik")
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
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("strong", [
            _vm._v("Q : Kapan pembukaan pendaftaran penerima beasiswa?")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("A : Pendaftaran akan dibuka pada akhir semester 1")
          ]),
          _vm._v(" "),
          _c("strong", [
            _vm._v("Q : Apa saja tahap seleksi Calon Penerima Beasiswa?")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "A : Seleksi terdiri dari 2 tahapan yaitu seleksi administrasi dan interview."
            )
          ]),
          _vm._v(" "),
          _c("strong", [
            _vm._v(
              "Q : Apa saja tahap syarat administrasi untuk seleksi Calon Penerima Beasiswa?"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "A : Team Recruitment akan melakukan screening dari CV, Essay, Transkrip Nilai dan data kondisi finansial keluarga yang didukung dengan data berupa slip gaji orang tua dan atau rekening listrik. Apabila tidak ada slip gaji maka dilengkapi juga essay mengenai kondisi finansial keluarga."
            )
          ]),
          _vm._v(" "),
          _c("strong", [_vm._v("Q : Berapa jumlah Penerima Beasiswa ?")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "A : Jumlah penerima beasiswa untuk periode 1 adalah 5 orang dari angkatan 2014. Untuk Periode 2, 7 orang angkatan 2015, untuk periode 3 adalah 10 orang (disesuaikan dengan hasil akhir rekrutmen)"
            )
          ]),
          _vm._v(" "),
          _c("strong", [
            _vm._v("Q : Berapa jumlah besaran beasiswa untuk Periode 4?")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "A : Besaran beasiswa untuk periode 4 adalah Rp 3.600.000,- untuk satu semester. Para penerima beasiswa akan mendapatkan beasiswa selama satu tahun sehingga total beasiswa yang akan didapatkan adalah Rp 7.200.000,-"
            )
          ]),
          _vm._v(" "),
          _c("strong", [
            _vm._v("Q : Kapan beasiswa diberikan kepada Penerima Beasiswa?")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "A : Beasiswa akan diberikan pada bulan pertama atau paling lambat bulan kedua dari awal semester berjalan"
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

/***/ "./resources/assets/js/awardee/views/auth/AuthRegister.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/awardee/views/auth/AuthRegister.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthRegister_vue_vue_type_template_id_682f2a1d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthRegister.vue?vue&type=template&id=682f2a1d& */ "./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=template&id=682f2a1d&");
/* harmony import */ var _AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthRegister.vue?vue&type=script&lang=js& */ "./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthRegister_vue_vue_type_template_id_682f2a1d___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthRegister_vue_vue_type_template_id_682f2a1d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/awardee/views/auth/AuthRegister.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=template&id=682f2a1d&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=template&id=682f2a1d& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_template_id_682f2a1d___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegister.vue?vue&type=template&id=682f2a1d& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=template&id=682f2a1d&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_template_id_682f2a1d___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_template_id_682f2a1d___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue":
/*!********************************************************************!*\
  !*** ./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthRegisterFaq_vue_vue_type_template_id_4bf40e2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthRegisterFaq.vue?vue&type=template&id=4bf40e2e& */ "./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue?vue&type=template&id=4bf40e2e&");
/* harmony import */ var _AuthRegisterFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthRegisterFaq.vue?vue&type=script&lang=js& */ "./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthRegisterFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthRegisterFaq_vue_vue_type_template_id_4bf40e2e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthRegisterFaq_vue_vue_type_template_id_4bf40e2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************!*\
  !*** ./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegisterFaq.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue?vue&type=template&id=4bf40e2e&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue?vue&type=template&id=4bf40e2e& ***!
  \***************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_template_id_4bf40e2e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegisterFaq.vue?vue&type=template&id=4bf40e2e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegisterFaq.vue?vue&type=template&id=4bf40e2e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_template_id_4bf40e2e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaq_vue_vue_type_template_id_4bf40e2e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=15.js.map