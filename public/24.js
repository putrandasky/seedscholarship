(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[24],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

 // const VueUploadComponent = require('vue-upload-component')
// import UploadCoverImage from './BlogUploadCoverImage'


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'BlogDetail',
  components: {
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_3__["quillEditor"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_2___default.a // UploadCoverImage,
    // 'file-upload': VueUploadComponent

  },
  data: function data() {
    return {
      url: null,
      cover_image: {},
      uploadPercentage: 0,
      data: {
        slug: '',
        title: '',
        body: '',
        blog_category_id: null,
        tags: [],
        cover_image: '' // mod_status: ''

      },
      errors: {
        slug: '',
        title: '',
        body: '',
        blog_category_id: ''
      },
      categoryOptions: [],
      tagOptions: []
    };
  },
  created: function created() {
    // this.getCategory()
    // this.getTags()
    this.getData();
  },
  computed: {
    stateTitle: function stateTitle() {
      return this.errors.title == 'no-error' ? true : this.errors.title ? false : null;
    },
    stateCategory: function stateCategory() {
      return this.errors.category == 'no-error' ? true : this.errors.category ? false : null;
    }
  },
  methods: {
    onFileChange: function onFileChange(e) {
      var file = e.target.files[0];
      this.url = URL.createObjectURL(file);
    },
    getCategory: function getCategory() {
      var _this = this;

      this.$store.dispatch('stateLoading', true);
      axios.get("api/blog-category").then(function (response) {
        if (response.data.length !== 0) {
          _this.categoryDocuments = response.data;

          var editCategory = function editCategory(category) {
            return category.map(function (item) {
              var temp = Object.assign({}, item);
              temp['value'] = temp.id, temp['text'] = temp.category; // temp.name = 'my name '+temp.name;

              return temp;
            });
          };

          _this.categoryOptions = editCategory(response.data);
          return;
        }

        _this.loaded = true;

        _this.$store.dispatch('stateLoading', false);
      }).catch(function (error) {
        console.log(error);
      });
    },
    getTags: function getTags() {
      var _this2 = this;

      axios.get("api/blog-tag").then(function (response) {
        // console.log(response.data)
        _this2.tagOptions = response.data;

        _this2.$store.dispatch('stateLoading', false);
      }).catch(function (error) {
        console.log(error);
      });
    },
    getData: function getData() {
      var _this3 = this;

      axios.get("api/blog/".concat(this.$route.params.blogId)).then(function (response) {
        console.log(response.data);

        var editCategory = function editCategory(category) {
          return category.map(function (item) {
            var temp = Object.assign({}, item);
            temp['value'] = temp.id, temp['text'] = temp.category; // temp.name = 'my name '+temp.name;

            return temp;
          });
        };

        _this3.data = response.data.blog;
        _this3.categoryOptions = editCategory(response.data.categories);
        _this3.tagOptions = response.data.tags;
      }).catch(function (error) {
        console.log(error);
      });
    },
    postData: function postData(mod_status) {
      this.input.mod_status = mod_status;
      var self = this;
      axios.post("api/blog", this.input).then(function (response) {
        console.log(response.data);
        self.uploadCover(response.data.blog_id); // this.$refs.upload.start(response.data.blog_id)
      }).catch(function (error) {
        console.log(error);
      });
    },
    uploadCover: function uploadCover(blogId) {
      // console.log(this.url);
      var formData = new FormData();
      formData.append('file', this.cover_image);
      axios.post("api/file/blog/cover_photo/".concat(blogId), formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function (progressEvent) {
          this.uploadPercentage = parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total));
        }.bind(this)
      }).then(function (response) {
        console.log(response.data);
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=style&index=0&id=8e020fc6&lang=css&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=style&index=0&id=8e020fc6&lang=css&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#preview[data-v-8e020fc6] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n#preview img[data-v-8e020fc6] {\n  max-width: 100%;\n  max-height: 500px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=style&index=0&id=8e020fc6&lang=css&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=style&index=0&id=8e020fc6&lang=css&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogDetail.vue?vue&type=style&index=0&id=8e020fc6&lang=css&scoped=true& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=style&index=0&id=8e020fc6&lang=css&scoped=true&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=template&id=8e020fc6&scoped=true&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=template&id=8e020fc6&scoped=true& ***!
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
        { attrs: { md: "9" } },
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
                [_c("strong", [_vm._v("BLOG")])]
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
                      value: _vm.data.slug,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "slug", $$v)
                      },
                      expression: "data.slug"
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
                      autocomplete: "off",
                      required: "",
                      state: _vm.stateTitle,
                      id: "title",
                      type: "text",
                      placeholder: "Input title of your post"
                    },
                    model: {
                      value: _vm.data.title,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "title", $$v)
                      },
                      expression: "data.title"
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
                    "label-for": "body"
                  }
                },
                [
                  _c("quill-editor", {
                    model: {
                      value: _vm.data.body,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "body", $$v)
                      },
                      expression: "data.body"
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
        { attrs: { md: "3" } },
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
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "text-center" },
              [
                _c(
                  "b-button",
                  {
                    attrs: { variant: "secondary" },
                    on: {
                      click: function($event) {
                        _vm.postData("DRAFT")
                      }
                    }
                  },
                  [_vm._v("Save as Draft")]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    attrs: { variant: "primary" },
                    on: {
                      click: function($event) {
                        _vm.postData("PUBLISH")
                      }
                    }
                  },
                  [_vm._v("Publish")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
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
                [_c("strong", [_vm._v("Categories")])]
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    "invalid-feedback": _vm.errors.category,
                    state: _vm.stateCategory
                  }
                },
                [
                  _c(
                    "b-form-select",
                    {
                      attrs: { plain: "", options: _vm.categoryOptions },
                      model: {
                        value: _vm.data.blog_category_id,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "blog_category_id", $$v)
                        },
                        expression: "data.blog_category_id"
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
                          [_vm._v("-- Please Select Category --")]
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
            "b-card",
            [
              _c(
                "div",
                {
                  staticClass: "text-center",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [_c("strong", [_vm._v("Tags")])]
              ),
              _vm._v(" "),
              _c("v-select", {
                attrs: {
                  plain: "",
                  placeholder: "Select Tags (Optional)",
                  value: _vm.data.tags,
                  options: _vm.tagOptions,
                  transition: "fade-select",
                  multiple: "",
                  label: "name"
                }
              })
            ],
            1
          ),
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
            ),
            _vm._v(" "),
            _c("div", { attrs: { id: "preview" } }, [
              _vm.data.cover_image
                ? _c("img", {
                    attrs: { src: "storage/" + _vm.data.cover_image }
                  })
                : _vm._e()
            ])
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

/***/ "./resources/assets/js/admin/views/blog/BlogDetail.vue":
/*!*************************************************************!*\
  !*** ./resources/assets/js/admin/views/blog/BlogDetail.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _BlogDetail_vue_vue_type_template_id_8e020fc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogDetail.vue?vue&type=template&id=8e020fc6&scoped=true& */ "./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=template&id=8e020fc6&scoped=true&");
/* harmony import */ var _BlogDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogDetail.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _BlogDetail_vue_vue_type_style_index_0_id_8e020fc6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./BlogDetail.vue?vue&type=style&index=0&id=8e020fc6&lang=css&scoped=true& */ "./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=style&index=0&id=8e020fc6&lang=css&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _BlogDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogDetail_vue_vue_type_template_id_8e020fc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _BlogDetail_vue_vue_type_template_id_8e020fc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "8e020fc6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/blog/BlogDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=style&index=0&id=8e020fc6&lang=css&scoped=true&":
/*!**********************************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=style&index=0&id=8e020fc6&lang=css&scoped=true& ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_style_index_0_id_8e020fc6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogDetail.vue?vue&type=style&index=0&id=8e020fc6&lang=css&scoped=true& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=style&index=0&id=8e020fc6&lang=css&scoped=true&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_style_index_0_id_8e020fc6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_style_index_0_id_8e020fc6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_style_index_0_id_8e020fc6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_style_index_0_id_8e020fc6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_style_index_0_id_8e020fc6_lang_css_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=template&id=8e020fc6&scoped=true&":
/*!********************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=template&id=8e020fc6&scoped=true& ***!
  \********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_template_id_8e020fc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./BlogDetail.vue?vue&type=template&id=8e020fc6&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=template&id=8e020fc6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_template_id_8e020fc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogDetail_vue_vue_type_template_id_8e020fc6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=24.js.map