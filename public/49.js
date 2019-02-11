(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[49],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AppRequestNonreg',
  data: function data() {
    return {
      scholarships: [],
      loaded: false
    };
  },
  created: function created() {
    this.getPeriods();
  },
  methods: {
    getPeriods: function getPeriods() {
      var _this = this;

      axios.get("api/scholarship").then(function (response) {
        console.log(response.data);
        _this.scholarships = response.data;
        _this.loaded = true;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue?vue&type=template&id=394594da&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue?vue&type=template&id=394594da& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
        "b-card",
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
            "div",
            {
              staticClass: "text-center",
              attrs: { slot: "header" },
              slot: "header"
            },
            [_c("strong", [_vm._v("Awardee Non Reguler Request")])]
          ),
          _vm._v(" "),
          _c(
            "div",
            [
              _c(
                "b-button-group",
                _vm._l(_vm.scholarships, function(v) {
                  return _c(
                    "router-link",
                    {
                      key: v.id,
                      staticClass: "btn btn-outline-primary btn-sm",
                      attrs: {
                        tag: "button",
                        to: {
                          name: "RequestNonregIndex",
                          params: { scholarshipId: v.id }
                        }
                      }
                    },
                    [
                      _vm._v(
                        "\n          " +
                          _vm._s(v.name) +
                          " - Year " +
                          _vm._s(v.year) +
                          "\n        "
                      )
                    ]
                  )
                }),
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("div", [_c("router-view")], 1)
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue":
/*!*****************************************************************************!*\
  !*** ./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppRequestNonreg_vue_vue_type_template_id_394594da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppRequestNonreg.vue?vue&type=template&id=394594da& */ "./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue?vue&type=template&id=394594da&");
/* harmony import */ var _AppRequestNonreg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppRequestNonreg.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppRequestNonreg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppRequestNonreg_vue_vue_type_template_id_394594da___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppRequestNonreg_vue_vue_type_template_id_394594da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppRequestNonreg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppRequestNonreg.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppRequestNonreg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue?vue&type=template&id=394594da&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue?vue&type=template&id=394594da& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppRequestNonreg_vue_vue_type_template_id_394594da___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppRequestNonreg.vue?vue&type=template&id=394594da& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/request/nonreg/AppRequestNonreg.vue?vue&type=template&id=394594da&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppRequestNonreg_vue_vue_type_template_id_394594da___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppRequestNonreg_vue_vue_type_template_id_394594da___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=49.js.map