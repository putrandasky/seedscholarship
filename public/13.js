(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailRequestNonregUploadCard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailRequestNonregUploadCard */ "./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'DetailRequestNonreg',
  components: {
    FileCard: _DetailRequestNonregUploadCard__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loaded: false,
      files: {},
      data: {
        name: '',
        email: '',
        phone: '',
        year: null,
        department: null,
        created_at: null,
        updated_at: null
      }
    };
  },
  created: function created() {
    this.getData();
  },
  computed: {},
  methods: {
    getData: function getData() {
      var _this = this;

      var self = this;
      axios.get("api/registration-awardee-nonreg/".concat(this.$route.params.userId, "?id=").concat(this.$route.params.scholarshipId)).then(function (response) {
        console.log(response.data);
        self.data = response.data.user;
        self.files = response.data.files;
        _this.loaded = true;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'RegistrationUploadCard',
  props: ['title', 'folder', 'data', 'scholarshipId', 'registrationCode'],
  data: function data() {
    return {};
  },
  created: function created() {},
  computed: {
    information: function information() {
      return this.folder == 'cv' ? 'Riwayat hidup dengan format bebas dengan informasi wajib berupa data diri dan riwayat pendidikan' : this.folder == 'proposal' ? 'Proposal penelitan dengan isi; latar belakang, tujuan, metodologi, RAB, dan referensi' : this.folder == 'sktmb' ? 'Surat keterangan yang menyatakan tidak menerima beasiswa riset lainnya' : this.folder == 'siakng' ? 'Print Out Ringkasan / Riwayat Akademis  SIAK NG' : '';
    }
  },
  methods: {
    openFile: function openFile() {
      var self = this;
      window.open("/api/registration-awardee-nonreg/upload/".concat(this.$route.params.userId, "?folder=").concat(this.folder, "&scholarship_id=").concat(this.scholarshipId, "&filename=").concat(this.data.name, "&registration_code=").concat(this.registrationCode), self.data.name, "window,width=".concat(screen.availWidth, ",height=").concat(screen.availHeight, ",resizeable,left=200,top=100,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0"));
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue?vue&type=template&id=6b69c6f0&":
/*!*********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue?vue&type=template&id=6b69c6f0& ***!
  \*********************************************************************************************************************************************************************************************************************************************/
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
    "slide-y-up-transition",
    [
      _c(
        "b-row",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: _vm.loaded,
              expression: "loaded"
            }
          ]
        },
        [
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "b-card",
                [
                  _c(
                    "div",
                    {
                      staticClass: "text-center",
                      attrs: { slot: "header" },
                      slot: "header"
                    },
                    [
                      _c("strong", [_vm._v("Profile Awardee")]),
                      _vm._v(" "),
                      _c(
                        "router-link",
                        {
                          staticClass:
                            "btn btn-sm btn-primary btn-sm float-left",
                          attrs: {
                            tag: "button",
                            to: {
                              name: "RequestNonregIndex",
                              params: {
                                scholarshipId: _vm.$route.params.scholarshipId
                              }
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "fa fa-arrow-left" }),
                          _vm._v("\n            BACK\n          ")
                        ]
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-row",
                    [
                      _c("b-col", { attrs: { md: "3", sm: "6" } }, [
                        _c("div", { staticClass: "border-bottom" }, [
                          _c("h5", [
                            _c("i", { staticClass: "fa fa-user" }),
                            _vm._v(" Full Name")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "large",
                              "padding-left": "20px"
                            }
                          },
                          [_vm._v(_vm._s(_vm.data.name))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-col", { attrs: { md: "3", sm: "6" } }, [
                        _c("div", { staticClass: "border-bottom" }, [
                          _c("h5", [
                            _c("i", { staticClass: "fa fa-envelope" }),
                            _vm._v(" Email Address")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "large",
                              "padding-left": "20px"
                            }
                          },
                          [_vm._v(_vm._s(_vm.data.email))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-col", { attrs: { md: "3", sm: "6" } }, [
                        _c("div", { staticClass: "border-bottom" }, [
                          _c("h5", [
                            _c("i", { staticClass: "fa fa-calendar" }),
                            _vm._v(" Year of Period")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "large",
                              "padding-left": "20px"
                            }
                          },
                          [_vm._v(_vm._s(_vm.data.year))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-col", { attrs: { md: "3", sm: "6" } }, [
                        _c("div", { staticClass: "border-bottom" }, [
                          _c("h5", [
                            _c("i", { staticClass: "fa fa-phone" }),
                            _vm._v(" Phone Number")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "large",
                              "padding-left": "20px"
                            }
                          },
                          [_vm._v(_vm._s(_vm.data.phone))]
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-col", { attrs: { md: "3", sm: "6" } }, [
                        _c("div", { staticClass: "border-bottom" }, [
                          _c("h5", [
                            _c("i", { staticClass: "fa fa-list" }),
                            _vm._v(" Department")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "large",
                              "padding-left": "20px"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.data.awardee_department.department)
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-col", { attrs: { md: "3", sm: "6" } }, [
                        _c("div", { staticClass: "border-bottom" }, [
                          _c("h5", [
                            _c("i", { staticClass: "fa fa-check" }),
                            _vm._v(" Status Approval")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "large",
                              "padding-left": "20px"
                            }
                          },
                          [
                            _vm._v(
                              _vm._s(_vm.data.scholarships[0].pivot.status)
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("b-col", { attrs: { md: "3", sm: "6" } }, [
                        _c("div", { staticClass: "border-bottom" }, [
                          _c("h5", [
                            _c("i", { staticClass: "fa fa-calendar-check-o" }),
                            _vm._v(" Date Registered")
                          ])
                        ]),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            staticStyle: {
                              "font-size": "large",
                              "padding-left": "20px"
                            }
                          },
                          [_vm._v(_vm._s(_vm.data.created_at))]
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
          ),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { cols: "12" } },
            [
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "3", sm: "6" } },
                    [
                      _c("file-card", {
                        attrs: {
                          title: "Curriculum Vitae",
                          scholarshipId: _vm.data.scholarships[0].id,
                          registrationCode:
                            _vm.data.scholarships[0].pivot.registration_code,
                          folder: "cv",
                          data: _vm.files.cv
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "3", sm: "6" } },
                    [
                      _c("file-card", {
                        attrs: {
                          title: "Proposal",
                          folder: "proposal",
                          scholarshipId: _vm.data.scholarships[0].id,
                          registrationCode:
                            _vm.data.scholarships[0].pivot.registration_code,
                          data: _vm.files.proposal
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "3", sm: "6" } },
                    [
                      _c("file-card", {
                        attrs: {
                          title: "Surat Keterangan",
                          folder: "sktmb",
                          scholarshipId: _vm.data.scholarships[0].id,
                          registrationCode:
                            _vm.data.scholarships[0].pivot.registration_code,
                          data: _vm.files.sktmb
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "3", sm: "6" } },
                    [
                      _c("file-card", {
                        attrs: {
                          title: "SiakNG",
                          folder: "siakng",
                          scholarshipId: _vm.data.scholarships[0].id,
                          registrationCode:
                            _vm.data.scholarships[0].pivot.registration_code,
                          data: _vm.files.siakng
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue?vue&type=template&id=50145941&":
/*!*******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue?vue&type=template&id=50145941& ***!
  \*******************************************************************************************************************************************************************************************************************************************************/
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
    "b-card",
    { attrs: { "no-body": "" } },
    [
      _c(
        "div",
        {
          staticClass: "text-center",
          attrs: { slot: "header" },
          slot: "header"
        },
        [
          _c("strong", [
            _vm._v(_vm._s(_vm.title) + "  "),
            _c("i", {
              directives: [
                {
                  name: "b-tooltip",
                  rawName: "v-b-tooltip.hover",
                  value: _vm.information,
                  expression: "information",
                  modifiers: { hover: true }
                }
              ],
              staticClass: "fa fa-info-circle"
            })
          ])
        ]
      ),
      _vm._v(" "),
      !_vm.data.name
        ? _c("b-card-body", { attrs: { "body-bg-variant": "danger" } }, [
            _c("div", { staticClass: "d-flex w-100 justify-content-between" }, [
              _c(
                "h5",
                {
                  staticClass: "mb-0 pt-5 pb-5",
                  staticStyle: { "align-self": "center" }
                },
                [_vm._v("No File Uploaded")]
              ),
              _vm._v(" "),
              _c("i", {
                staticClass: "fa fa-close fa-2x",
                staticStyle: { "align-self": "center" }
              })
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.data.name
        ? _c("b-card-body", { attrs: { "body-bg-variant": "success" } }, [
            _c("div", { staticClass: "d-flex w-100 justify-content-between" }, [
              _c(
                "h5",
                {
                  staticClass: "mb-0",
                  staticStyle: { "align-self": "center" }
                },
                [_vm._v("File Uploaded")]
              ),
              _vm._v(" "),
              _c("i", {
                staticClass: "fa fa-check fa-2x",
                staticStyle: { "align-self": "center" }
              })
            ])
          ])
        : _vm._e(),
      _vm._v(" "),
      _vm.data.name
        ? _c(
            "b-list-group",
            { attrs: { flush: "" } },
            [
              _c("b-list-group-item", [
                _c("strong", [_vm._v("Name: ")]),
                _vm._v("\n      " + _vm._s(_vm.data.name) + "\n    ")
              ]),
              _vm._v(" "),
              _c("b-list-group-item", [
                _c("strong", [_vm._v("Size: ")]),
                _vm._v(
                  "\n      " +
                    _vm._s(_vm._f("formatSize")(_vm.data.size)) +
                    "\n    "
                )
              ]),
              _vm._v(" "),
              _c("b-list-group-item", [
                _c("strong", [_vm._v("Uploaded: ")]),
                _vm._v("\n      " + _vm._s(_vm.data.date) + "\n    ")
              ])
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.data.name
        ? _c(
            "b-button",
            {
              staticStyle: { "border-radius": "unset" },
              attrs: { block: "", fluid: "", variant: "primary" },
              on: { click: _vm.openFile }
            },
            [
              _c("i", { staticClass: "fa fa-search" }),
              _vm._v("\n    See File\n  ")
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailRequestNonreg_vue_vue_type_template_id_6b69c6f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailRequestNonreg.vue?vue&type=template&id=6b69c6f0& */ "./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue?vue&type=template&id=6b69c6f0&");
/* harmony import */ var _DetailRequestNonreg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailRequestNonreg.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetailRequestNonreg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailRequestNonreg_vue_vue_type_template_id_6b69c6f0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailRequestNonreg_vue_vue_type_template_id_6b69c6f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRequestNonreg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailRequestNonreg.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRequestNonreg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue?vue&type=template&id=6b69c6f0&":
/*!***************************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue?vue&type=template&id=6b69c6f0& ***!
  \***************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRequestNonreg_vue_vue_type_template_id_6b69c6f0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailRequestNonreg.vue?vue&type=template&id=6b69c6f0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/request/nonreg/DetailRequestNonreg.vue?vue&type=template&id=6b69c6f0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRequestNonreg_vue_vue_type_template_id_6b69c6f0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRequestNonreg_vue_vue_type_template_id_6b69c6f0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DetailRequestNonregUploadCard_vue_vue_type_template_id_50145941___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DetailRequestNonregUploadCard.vue?vue&type=template&id=50145941& */ "./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue?vue&type=template&id=50145941&");
/* harmony import */ var _DetailRequestNonregUploadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DetailRequestNonregUploadCard.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _DetailRequestNonregUploadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DetailRequestNonregUploadCard_vue_vue_type_template_id_50145941___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DetailRequestNonregUploadCard_vue_vue_type_template_id_50145941___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRequestNonregUploadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailRequestNonregUploadCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRequestNonregUploadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue?vue&type=template&id=50145941&":
/*!*************************************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue?vue&type=template&id=50145941& ***!
  \*************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRequestNonregUploadCard_vue_vue_type_template_id_50145941___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./DetailRequestNonregUploadCard.vue?vue&type=template&id=50145941& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/request/nonreg/DetailRequestNonregUploadCard.vue?vue&type=template&id=50145941&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRequestNonregUploadCard_vue_vue_type_template_id_50145941___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DetailRequestNonregUploadCard_vue_vue_type_template_id_50145941___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=13.js.map