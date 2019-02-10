(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssignmentSubmissionList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignmentSubmissionList */ "./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'AssignmentDetail',
  components: {
    SubmissionList: _AssignmentSubmissionList__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AssignmentDetailSubmit',
  data: function data() {
    return {
      data: [{
        id: 1,
        name: 'Radityo Putra',
        title: 'Lorem ipsum dolor',
        date: '22-july-2019'
      }, {
        id: 1,
        name: 'Radityo Putra',
        title: 'Lorem ipsum dolor',
        date: '22-july-2019'
      }, {
        id: 1,
        name: 'Radityo Putra',
        title: 'Lorem ipsum dolor',
        date: '22-july-2019'
      }, {
        id: 1,
        name: 'Radityo Putra',
        title: 'Lorem ipsum dolor',
        date: '22-july-2019'
      }]
    };
  },
  created: function created() {},
  methods: {
    handleSubmitAssignmentButton: function handleSubmitAssignmentButton() {
      this.$router.push({
        name: 'SubmissionNew',
        params: {
          assignmentId: this.$route.params.assignmentId
        }
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue?vue&type=template&id=54e87dc9&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue?vue&type=template&id=54e87dc9& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
        "b-card",
        [
          _c(
            "div",
            {
              staticClass: "text-center",
              attrs: { slot: "header" },
              slot: "header"
            },
            [_c("strong", [_vm._v("ASSIGNMENT DETAIL")])]
          ),
          _vm._v(" "),
          _c("b-container", { attrs: { fluid: "" } }, [
            _c("dl", { staticClass: "row" }, [
              _c("dt", { staticClass: "col-sm-2" }, [_vm._v("Title")]),
              _vm._v(" "),
              _c("dd", { staticClass: "col-sm-10" }, [
                _c("span", [
                  _vm._v(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. "
                  )
                ])
              ])
            ]),
            _vm._v(" "),
            _c("dl", { staticClass: "row" }, [
              _c("dt", { staticClass: "col-sm-2" }, [_vm._v("Closing Date")]),
              _vm._v(" "),
              _c("dd", { staticClass: "col-sm-10" }, [
                _c("span", [_vm._v("22-July-2019")])
              ])
            ]),
            _vm._v(" "),
            _c("dl", { staticClass: "row" }, [
              _c("dt", { staticClass: "col-sm-2" }, [_vm._v("Created Date")]),
              _vm._v(" "),
              _c("dd", { staticClass: "col-sm-10" }, [
                _c("span", [_vm._v("22-July-2019")])
              ])
            ]),
            _vm._v(" "),
            _c("dl", { staticClass: "row" }, [
              _c("dt", { staticClass: "col-sm-2" }, [_vm._v("Status")]),
              _vm._v(" "),
              _c("dd", { staticClass: "col-sm-10" }, [
                _c("span", [_vm._v("Active")])
              ])
            ]),
            _vm._v(" "),
            _c("dl", { staticClass: "row" }, [
              _c("dt", { staticClass: "col-sm-12" }, [_vm._v("Description")]),
              _vm._v(" "),
              _c("dd", { staticClass: "col-sm-12" }, [
                _c("span", [
                  _vm._v(
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum libero incidunt minima\n                        aperiam nobis temporibus delectus non? Tempora nulla nisi voluptatem est suscipit repudiandae,\n                        illo ipsum praesentium nemo doloribus?"
                  )
                ])
              ])
            ])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c("submission-list")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue?vue&type=template&id=f8e149fc&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue?vue&type=template&id=f8e149fc& ***!
  \***********************************************************************************************************************************************************************************************************************************************/
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
    [
      _c(
        "div",
        {
          staticClass: "text-center",
          attrs: { slot: "header" },
          slot: "header"
        },
        [_c("strong", [_vm._v("SUBMISSION LIST")])]
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "text-right mb-3" },
        [
          _c(
            "b-button",
            {
              attrs: { size: "sm", variant: "primary" },
              on: { click: _vm.handleSubmitAssignmentButton }
            },
            [_vm._v("Submit Assignment")]
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "b-row",
        _vm._l(_vm.data, function(v) {
          return _c(
            "b-col",
            { key: v.id, attrs: { sm: "6", md: "4" } },
            [
              _c("b-card", [
                _c("h5", { staticClass: "card-title border-bottom pb-2" }, [
                  _vm._v("Title: " + _vm._s(v.title))
                ]),
                _vm._v(" "),
                _c("p", { staticClass: "card-text" }, [
                  _vm._v(
                    "\n                    Submitted by : " +
                      _vm._s(v.name) +
                      " "
                  ),
                  _c("br"),
                  _vm._v(" Date : " + _vm._s(v.date) + "\n                ")
                ]),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "text-right" },
                  [
                    _c(
                      "b-button",
                      { attrs: { size: "sm", variant: "secondary" } },
                      [_vm._v("Detail")]
                    )
                  ],
                  1
                )
              ])
            ],
            1
          )
        }),
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue":
/*!**************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssignmentDetail_vue_vue_type_template_id_54e87dc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignmentDetail.vue?vue&type=template&id=54e87dc9& */ "./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue?vue&type=template&id=54e87dc9&");
/* harmony import */ var _AssignmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssignmentDetail.vue?vue&type=script&lang=js& */ "./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssignmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssignmentDetail_vue_vue_type_template_id_54e87dc9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AssignmentDetail_vue_vue_type_template_id_54e87dc9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssignmentDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue?vue&type=template&id=54e87dc9&":
/*!*********************************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue?vue&type=template&id=54e87dc9& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentDetail_vue_vue_type_template_id_54e87dc9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssignmentDetail.vue?vue&type=template&id=54e87dc9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/assignment/AssignmentDetail.vue?vue&type=template&id=54e87dc9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentDetail_vue_vue_type_template_id_54e87dc9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentDetail_vue_vue_type_template_id_54e87dc9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssignmentSubmissionList_vue_vue_type_template_id_f8e149fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignmentSubmissionList.vue?vue&type=template&id=f8e149fc& */ "./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue?vue&type=template&id=f8e149fc&");
/* harmony import */ var _AssignmentSubmissionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AssignmentSubmissionList.vue?vue&type=script&lang=js& */ "./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AssignmentSubmissionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AssignmentSubmissionList_vue_vue_type_template_id_f8e149fc___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AssignmentSubmissionList_vue_vue_type_template_id_f8e149fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentSubmissionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssignmentSubmissionList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentSubmissionList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue?vue&type=template&id=f8e149fc&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue?vue&type=template&id=f8e149fc& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentSubmissionList_vue_vue_type_template_id_f8e149fc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AssignmentSubmissionList.vue?vue&type=template&id=f8e149fc& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/assignment/AssignmentSubmissionList.vue?vue&type=template&id=f8e149fc&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentSubmissionList_vue_vue_type_template_id_f8e149fc___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AssignmentSubmissionList_vue_vue_type_template_id_f8e149fc___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=13.js.map