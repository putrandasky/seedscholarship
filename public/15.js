(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _share_PellEditorOption__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_share/PellEditorOption */ "./resources/assets/js/donor/views/_share/PellEditorOption.js");
//
//
//
//
//
//
//
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
  name: 'SubmissionNew',
  data: function data() {
    return {
      editorOptions: _share_PellEditorOption__WEBPACK_IMPORTED_MODULE_0__["default"].options,
      editorClasses: _share_PellEditorOption__WEBPACK_IMPORTED_MODULE_0__["default"].classes,
      input: {
        title: '',
        description: ''
      },
      errors: {
        item: '',
        description: ''
      }
    };
  },
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=style&index=0&id=c8373d64&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=style&index=0&id=c8373d64&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.pell-content[data-v-c8373d64] {\n  height: unset;\n  min-height: 50px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=style&index=0&id=c8373d64&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=style&index=0&id=c8373d64&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionNew.vue?vue&type=style&index=0&id=c8373d64&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=style&index=0&id=c8373d64&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=template&id=c8373d64&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=template&id=c8373d64&scoped=true& ***!
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
        [_c("strong", [_vm._v("SUBMIT ASSIGNMENT FOR LOREM IPSUM")])]
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
              placeholder: "Input title of your submission for this assignment"
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
          _c("vue-pell-editor", {
            ref: "description",
            attrs: {
              actions: _vm.editorOptions,
              content: _vm.input.description,
              placeholder:
                "Input description of your submission for this assignment",
              "style-with-css": true,
              classes: _vm.editorClasses,
              "default-paragraph-separator": "div"
            },
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/donor/views/_share/PellEditorOption.js":
/*!********************************************************************!*\
  !*** ./resources/assets/js/donor/views/_share/PellEditorOption.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  options: [{
    name: 'bold',
    icon: '<i class="fa fa-bold"></i>'
  }, {
    name: 'italic',
    icon: '<i class="fa fa-italic"></i>'
  }, {
    name: 'underline',
    icon: '<i class="fa fa-underline"></i>'
  }, {
    name: 'strikethrough',
    icon: '<i class="fa fa-strikethrough"></i>'
  }, {
    name: 'backColor',
    icon: '<div style="background-color:yellow;"><i class="fa fa-font"></i></div>',
    title: 'Highlight Color',
    result: function result() {
      return window.pell.exec('backColor', 'yellow');
    }
  }, {
    name: 'foreColor',
    icon: '<div style="color:red;"><i class="fa fa-font"></i></div>',
    title: 'Red Font',
    result: function result() {
      return window.pell.exec('foreColor', 'red');
    }
  }, {
    name: 'olist',
    icon: '<i class="fa fa-list-ol"></i>'
  }, {
    name: 'ulist',
    icon: '<i class="fa fa-list-ul"></i>'
  }, 'heading1', 'heading2', {
    name: 'Clear Formatting',
    title: 'Clear Formatting',
    icon: '<i class="fa fa-eraser"></i>',
    result: function result() {
      return window.pell.exec('removeFormat');
    }
  }],
  classes: {
    actionbar: 'pell-actionbar',
    button: 'pell-button',
    content: 'pell-content form-control',
    selected: 'pell-button-selected'
  }
});

/***/ }),

/***/ "./resources/assets/js/donor/views/assignment/SubmissionNew.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/donor/views/assignment/SubmissionNew.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubmissionNew_vue_vue_type_template_id_c8373d64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubmissionNew.vue?vue&type=template&id=c8373d64&scoped=true& */ "./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=template&id=c8373d64&scoped=true&");
/* harmony import */ var _SubmissionNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubmissionNew.vue?vue&type=script&lang=js& */ "./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SubmissionNew_vue_vue_type_style_index_0_id_c8373d64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubmissionNew.vue?vue&type=style&index=0&id=c8373d64&scoped=true&lang=css& */ "./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=style&index=0&id=c8373d64&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SubmissionNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SubmissionNew_vue_vue_type_template_id_c8373d64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SubmissionNew_vue_vue_type_template_id_c8373d64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "c8373d64",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/donor/views/assignment/SubmissionNew.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionNew.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionNew_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=style&index=0&id=c8373d64&scoped=true&lang=css&":
/*!*******************************************************************************************************************************!*\
  !*** ./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=style&index=0&id=c8373d64&scoped=true&lang=css& ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionNew_vue_vue_type_style_index_0_id_c8373d64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionNew.vue?vue&type=style&index=0&id=c8373d64&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=style&index=0&id=c8373d64&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionNew_vue_vue_type_style_index_0_id_c8373d64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionNew_vue_vue_type_style_index_0_id_c8373d64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionNew_vue_vue_type_style_index_0_id_c8373d64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionNew_vue_vue_type_style_index_0_id_c8373d64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionNew_vue_vue_type_style_index_0_id_c8373d64_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=template&id=c8373d64&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=template&id=c8373d64&scoped=true& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionNew_vue_vue_type_template_id_c8373d64_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./SubmissionNew.vue?vue&type=template&id=c8373d64&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/donor/views/assignment/SubmissionNew.vue?vue&type=template&id=c8373d64&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionNew_vue_vue_type_template_id_c8373d64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SubmissionNew_vue_vue_type_template_id_c8373d64_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=15.js.map