(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[38],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/admin/AppAdminDepartment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/admin/AppAdminDepartment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AppAdminDepartment',
  data: function data() {
    var _ref;

    return _ref = {
      confirmModal: false,
      editModal: false,
      loaded: false
    }, Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "confirmModal", false), Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "confirmModalTitle", ''), Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "confirmModalBody", ''), Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "confirmModalState", ''), Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "confirmModalTempValue", ''), Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "items", []), Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "input", ''), Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "selected", {
      department: '',
      id: null
    }), Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref, "fieldsDocuments", [{
      key: 'no',
      label: 'No',
      'class': 'text-center',
      thStyle: {
        minWidth: '30px',
        width: '30px'
      }
    }, {
      key: 'department',
      label: 'Department',
      'class': 'truncate-cell',
      thStyle: {
        minWidth: '175px'
      }
    }, {
      key: 'admins_count',
      label: 'Users',
      'class': 'text-right',
      thStyle: {
        minWidth: '75px',
        width: '75px'
      }
    }, {
      key: 'action',
      label: '',
      'class': 'text-center',
      thStyle: {
        minWidth: '150px',
        width: '150px'
      }
    }]), _ref;
  },
  created: function created() {
    this.getData();
  },
  methods: {
    onConfirmModal: function onConfirmModal() {
      if (this.confirmModalState == 'deleteDepartment') {
        this.onDeleteDepartment();
      }

      if (this.confirmModalState == 'editDepartment') {
        this.onUpdateDepartment();
      }
    },
    onEditDepartmentModal: function onEditDepartmentModal(id, department) {
      this.selected.id = id;
      this.selected.department = department;
      this.editModal = true;
    },
    trigerConfirmModal: function trigerConfirmModal(title, body, state) {
      var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      this.confirmModalTitle = title;
      this.confirmModalBody = body;
      this.confirmModal = true;
      this.confirmModalState = state;
      this.confirmModalTempValue = value;
    },
    onAddDepartment: function onAddDepartment() {
      var _this = this;

      axios.post('api/department', {
        department: this.input
      }).then(function (response) {
        _this.getData();

        _this.input = null;

        _this.$snotify.success("New Department Added", "SUCCESS");
      }).catch(function (error) {
        console.log(error);

        _this.$snotify.error("Ooops, There's Something Error, Try Again Later", "ERROR");
      });
    },
    onUpdateDepartment: function onUpdateDepartment() {
      var _this2 = this;

      axios.patch("api/department/".concat(this.selected.id), {
        department: this.selected.department
      }).then(function (response) {
        _this2.getData();

        _this2.input = null;

        _this2.$snotify.success("New Department Added", "SUCCESS");
      }).catch(function (error) {
        console.log(error);

        _this2.$snotify.error("Ooops, There's Something Error, Try Again Later", "ERROR");
      });
    },
    onDeleteDepartment: function onDeleteDepartment() {
      var _this3 = this;

      axios.delete("api/department/".concat(this.confirmModalTempValue)).then(function (response) {
        _this3.confirmModalTempValue = null;

        _this3.getData();

        _this3.$snotify.success("Department Deleted", "SUCCESS");
      }).catch(function (error) {
        _this3.confirmModalTempValue = null;
        console.log(error);

        _this3.$snotify.error("Ooops, There's Something Error, Try Again Later", "ERROR");
      });
    },
    onClickBack: function onClickBack() {
      this.$router.push('/project');
    },
    getData: function getData() {
      var _this4 = this;

      axios.get('api/department').then(function (response) {
        console.log(response.data);
        _this4.items = response.data;
        _this4.loaded = true;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/admin/AppAdminDepartment.vue?vue&type=template&id=8581cf1a&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/admin/AppAdminDepartment.vue?vue&type=template&id=8581cf1a& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
  return _c("slide-y-up-transition", [
    _c(
      "div",
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
          "b-row",
          [
            _c(
              "b-col",
              { attrs: { lg: "4", md: "5" } },
              [
                _c(
                  "b-card",
                  [
                    _c(
                      "header",
                      { attrs: { slot: "header" }, slot: "header" },
                      [_c("strong", [_vm._v("Add New Department")])]
                    ),
                    _vm._v(" "),
                    _c("b-form-input", {
                      attrs: { type: "text" },
                      model: {
                        value: _vm.input,
                        callback: function($$v) {
                          _vm.input = $$v
                        },
                        expression: "input"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mt-2" },
                      [
                        _c(
                          "b-button",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.input,
                                expression: "input"
                              }
                            ],
                            staticClass: "float-right",
                            attrs: { variant: "success", size: "sm" },
                            on: { click: _vm.onAddDepartment }
                          },
                          [_vm._v("Add")]
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
              { attrs: { lg: "8", md: "7" } },
              [
                _c("b-card", [
                  _c("header", { attrs: { slot: "header" }, slot: "header" }, [
                    _c("strong", [_vm._v("List of Available Department")])
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticStyle: { "overflow-y": "auto" } },
                    [
                      _vm.items.length !== 0
                        ? _c("b-table", {
                            attrs: {
                              stacked: "sm",
                              small: "",
                              fields: _vm.fieldsDocuments,
                              items: _vm.items,
                              "thead-class": "thead-light"
                            },
                            scopedSlots: _vm._u([
                              {
                                key: "no",
                                fn: function(data) {
                                  return [
                                    _vm._v(
                                      "\n                " +
                                        _vm._s(data.index + 1) +
                                        "\n              "
                                    )
                                  ]
                                }
                              },
                              {
                                key: "action",
                                fn: function(data) {
                                  return [
                                    _c(
                                      "b-button",
                                      {
                                        attrs: {
                                          variant: "success",
                                          size: "sm"
                                        },
                                        on: {
                                          click: function($event) {
                                            _vm.onEditDepartmentModal(
                                              data.item.id,
                                              data.item.department
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Edit")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-button",
                                      {
                                        attrs: {
                                          variant: "danger",
                                          size: "sm"
                                        },
                                        on: {
                                          click: function($event) {
                                            _vm.trigerConfirmModal(
                                              "Confirm Remove Department",
                                              "Are You Sure To Remove This Department From This User?",
                                              "deleteDepartment",
                                              data.item.id
                                            )
                                          }
                                        }
                                      },
                                      [_vm._v("Remove")]
                                    )
                                  ]
                                }
                              }
                            ])
                          })
                        : _vm._e()
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            attrs: {
              "no-close-on-esc": true,
              "hide-header-close": true,
              "no-close-on-backdrop": true,
              title: "Edit Depatment"
            },
            on: {
              ok: function($event) {
                _vm.trigerConfirmModal(
                  "Confirm Edit Department",
                  "Are You Sure To Edit This Department From This User?",
                  "editDepartment"
                )
              }
            },
            model: {
              value: _vm.editModal,
              callback: function($$v) {
                _vm.editModal = $$v
              },
              expression: "editModal"
            }
          },
          [
            _c("b-form-input", {
              attrs: { type: "text" },
              model: {
                value: _vm.selected.department,
                callback: function($$v) {
                  _vm.$set(_vm.selected, "department", $$v)
                },
                expression: "selected.department"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "b-modal",
          {
            attrs: {
              "no-close-on-esc": true,
              "hide-header-close": true,
              "no-close-on-backdrop": true,
              title: _vm.confirmModalTitle
            },
            on: { ok: _vm.onConfirmModal },
            model: {
              value: _vm.confirmModal,
              callback: function($$v) {
                _vm.confirmModal = $$v
              },
              expression: "confirmModal"
            }
          },
          [_vm._v("\n      " + _vm._s(_vm.confirmModalBody) + "\n    ")]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/admin/views/admin/AppAdminDepartment.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/admin/views/admin/AppAdminDepartment.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppAdminDepartment_vue_vue_type_template_id_8581cf1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppAdminDepartment.vue?vue&type=template&id=8581cf1a& */ "./resources/assets/js/admin/views/admin/AppAdminDepartment.vue?vue&type=template&id=8581cf1a&");
/* harmony import */ var _AppAdminDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppAdminDepartment.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/admin/AppAdminDepartment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppAdminDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppAdminDepartment_vue_vue_type_template_id_8581cf1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppAdminDepartment_vue_vue_type_template_id_8581cf1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/admin/AppAdminDepartment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/admin/AppAdminDepartment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/admin/AppAdminDepartment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAdminDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppAdminDepartment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/admin/AppAdminDepartment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAdminDepartment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/admin/AppAdminDepartment.vue?vue&type=template&id=8581cf1a&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/admin/AppAdminDepartment.vue?vue&type=template&id=8581cf1a& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAdminDepartment_vue_vue_type_template_id_8581cf1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppAdminDepartment.vue?vue&type=template&id=8581cf1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/admin/AppAdminDepartment.vue?vue&type=template&id=8581cf1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAdminDepartment_vue_vue_type_template_id_8581cf1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAdminDepartment_vue_vue_type_template_id_8581cf1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=38.js.map