(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/AppBlogNew.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/blog/AppBlogNew.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import 'quill/dist/quill.bubble.css'


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AppBlogNew',
  components: {
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_2__["quillEditor"]
  },
  data: function data() {
    return {
      input: {
        slug: '',
        title: '',
        description: ''
      },
      errors: {
        title: '',
        description: ''
      }
    };
  },
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/AppBlogNew.vue?vue&type=template&id=5f8de472&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/blog/AppBlogNew.vue?vue&type=template&id=5f8de472&scoped=true& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    "b-row",
    [
      _c(
        "b-col",
        { attrs: { md: "10" } },
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
                [_c("strong", [_vm._v("CREATE NEW BLOG")])]
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Slug (Required)",
                    "label-for": "slug",
                    "invalid-feedback": _vm.errors.slug,
                    state: _vm.stateTitle
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      required: "",
                      state: _vm.stateTitle,
                      id: "slug",
                      type: "text",
                      placeholder: "Input slug of your post"
                    },
                    model: {
                      value: _vm.input.slug,
                      callback: function($$v) {
                        _vm.$set(_vm.input, "slug", $$v)
                      },
                      expression: "input.slug"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Title (Required)",
                    "label-for": "title",
                    "invalid-feedback": _vm.errors.title,
                    state: _vm.stateTitle
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      required: "",
                      state: _vm.stateTitle,
                      id: "title",
                      type: "text",
                      placeholder: "Input title of your post"
                    },
                    model: {
                      value: _vm.input.title,
                      callback: function($$v) {
                        _vm.$set(_vm.input, "title", $$v)
                      },
                      expression: "input.title"
                    }
                  })
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Description (Required but not mandatory)",
                    "label-for": "description"
                  }
                },
                [
                  _c("quill-editor", {
                    model: {
                      value: _vm.input.description,
                      callback: function($$v) {
                        _vm.$set(_vm.input, "description", $$v)
                      },
                      expression: "input.description"
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
        { attrs: { md: "2" } },
        [
          _c("b-card", [
            _c(
              "div",
              {
                staticClass: "text-center",
                attrs: { slot: "header" },
                slot: "header"
              },
              [_c("strong", [_vm._v("Publish")])]
            )
          ]),
          _vm._v(" "),
          _c("b-card", [
            _c(
              "div",
              {
                staticClass: "text-center",
                attrs: { slot: "header" },
                slot: "header"
              },
              [_c("strong", [_vm._v("Cover Image")])]
            )
          ]),
          _vm._v(" "),
          _c("b-card", [
            _c(
              "div",
              {
                staticClass: "text-center",
                attrs: { slot: "header" },
                slot: "header"
              },
              [_c("strong", [_vm._v("Categories")])]
            )
          ]),
          _vm._v(" "),
          _c("b-card", [
            _c(
              "div",
              {
                staticClass: "text-center",
                attrs: { slot: "header" },
                slot: "header"
              },
              [_c("strong", [_vm._v("Tags")])]
            )
          ])
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

/***/ "./resources/assets/js/admin/views/blog/AppBlogNew.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/admin/views/blog/AppBlogNew.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBlogNew_vue_vue_type_template_id_5f8de472_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBlogNew.vue?vue&type=template&id=5f8de472&scoped=true& */ "./resources/assets/js/admin/views/blog/AppBlogNew.vue?vue&type=template&id=5f8de472&scoped=true&");
/* harmony import */ var _AppBlogNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppBlogNew.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/blog/AppBlogNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppBlogNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppBlogNew_vue_vue_type_template_id_5f8de472_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppBlogNew_vue_vue_type_template_id_5f8de472_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5f8de472",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/blog/AppBlogNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/blog/AppBlogNew.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/blog/AppBlogNew.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBlogNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBlogNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/AppBlogNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBlogNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/blog/AppBlogNew.vue?vue&type=template&id=5f8de472&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/blog/AppBlogNew.vue?vue&type=template&id=5f8de472&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBlogNew_vue_vue_type_template_id_5f8de472_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBlogNew.vue?vue&type=template&id=5f8de472&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/AppBlogNew.vue?vue&type=template&id=5f8de472&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBlogNew_vue_vue_type_template_id_5f8de472_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBlogNew_vue_vue_type_template_id_5f8de472_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=11.js.map