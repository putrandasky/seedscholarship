(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[28],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/blog/BlogDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_8__);





//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_8__["quillEditor"],
    vSelect: vue_select__WEBPACK_IMPORTED_MODULE_7___default.a // UploadCoverImage,
    // 'file-upload': VueUploadComponent

  },
  data: function data() {
    return {
      confirmModal: false,
      confirmModalTitle: '',
      confirmModalBody: '',
      confirmModalState: '',
      confirmModalTempValue: '',
      file: null,
      objectUrl: null,
      uploadPercentage: 0,
      new_cover_image: null,
      old_cover_image: null,
      new_moderations: {
        message: '',
        status: ''
      },
      moderationModal: false,
      data: {
        id: null,
        slug: '',
        title: '',
        body: '',
        blog_category_id: null,
        tags: [],
        cover_image: null,
        mod_status: '',
        created_at: null,
        moderations: [{
          id: '',
          mod_status: '',
          mod_message: '',
          created_at: null,
          moderateable: {
            name: ''
          }
        }]
      },
      errors: {
        slug: '',
        title: '',
        body: '',
        blog_category_id: ''
      },
      categoryOptions: [],
      tagOptions: [],
      loaded: false
    };
  },
  created: function created() {
    // this.getCategory()
    // this.getTags()
    this.getData();
  },
  computed: {
    url: function url() {
      return this.new_cover_image ? this.objectUrl : this.data.cover_image ? "/storage/blog/".concat(this.data.id, "/cover/").concat(this.data.cover_image) : '/images/default-blog-cover.jpg';
    },
    stateTitle: function stateTitle() {
      return this.errors.title == 'no-error' ? true : this.errors.title ? false : null;
    },
    stateCategory: function stateCategory() {
      return this.errors.category == 'no-error' ? true : this.errors.category ? false : null;
    }
  },
  methods: {
    handlePublishButton: function handlePublishButton(mod_status) {
      this.new_moderations.status = mod_status;
      this.new_moderations.message = '';
      this.moderationModal = true;
    },
    trigerConfirmModal: function trigerConfirmModal(title, body, state) {
      var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      this.confirmModalTitle = title;
      this.confirmModalBody = body;
      this.confirmModal = true;
      this.confirmModalState = state;
      this.confirmModalTempValue = value;
    },
    onConfirmModal: function onConfirmModal() {
      if (this.confirmModalState == 'postBlog') {
        this.postData();
      }

      if (this.confirmModalState == 'deleteBlog') {
        this.deleteData(this.confirmModalTempValue);
      }
    },
    onCancelConfirmModal: function onCancelConfirmModal() {
      this.confirmModalTitle = '', this.confirmModalBody = '', this.confirmModal = false, this.confirmModalState = '', this.confirmModalTempValue = '';
    },
    handleUndoCoverImage: function handleUndoCoverImage() {
      this.data.cover_image = this.old_cover_image;
      this.objectUrl = null;
      this.new_cover_image = null;
      this.$refs.fileCoverImage.reset();
    },
    handleRemoveCoverImage: function handleRemoveCoverImage() {
      this.data.cover_image = null;
      this.objectUrl = null;
      this.new_cover_image = null;
      this.$refs.fileCoverImage.reset();
    },
    onFileChange: function onFileChange(e) {
      var file = e.target.files[0]; // console.log(file);

      if (file.size > 1024 * 1024) {
        e.preventDefault();
        this.$refs.fileCoverImage.reset();
        return;
      } // this.data.cover_image = file.name


      this.new_cover_image = file.name;
      this.objectUrl = URL.createObjectURL(file);
    },
    getCategory: function getCategory() {
      var _this = this;

      this.$store.dispatch('stateLoading', true);
      axios.get("api/blog-category").then(function (response) {
        if (response.data.length !== 0) {
          _this.categoryDocuments = response.data;

          var editCategory = function editCategory(category) {
            return category.map(function (item) {
              var temp = C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, item);

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
            var temp = C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, item);

            temp['value'] = temp.id, temp['text'] = temp.category; // temp.name = 'my name '+temp.name;

            return temp;
          });
        };

        _this3.data = response.data.blog;
        _this3.categoryOptions = editCategory(response.data.categories);
        _this3.tagOptions = response.data.tags;
        _this3.old_cover_image = response.data.blog.cover_image;
        _this3.loaded = true;
      }).catch(function (error) {
        console.log(error);
      });
    },
    postData: function postData() {
      var self = this;
      axios.patch("api/blog/".concat(this.data.id), {
        data: this.data,
        moderation: this.new_moderations
      }).then(function (response) {
        console.log(response.data);

        if (self.old_cover_image && !self.data.cover_image && !self.new_cover_image) {
          console.log('delete');
          self.deleteCover(self.data.id);
          return;
        }

        if (self.old_cover_image && self.new_cover_image) {
          console.log('update');
          self.updateCover(self.data.id);
          return;
        }

        if (!self.old_cover_image && self.new_cover_image) {
          console.log('upload');
          self.uploadCover(self.data.id);
          return;
        }

        console.log('no action');
        self.getData(); // this.$refs.upload.start(response.data.blog_id)
      }).catch(function (error) {
        console.log(error);
      });
    },
    uploadCover: function uploadCover(blogId) {
      // console.log(this.url);
      var formData = new FormData();
      var self = this;
      formData.append('file', this.file);
      axios.post("api/file/blog-cover-image/".concat(blogId), formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function (progressEvent) {
          this.uploadPercentage = C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(progressEvent.loaded * 100 / progressEvent.total));
        }.bind(this)
      }).then(function (response) {
        console.log(response.data);
        self.uploadPercentage = 0;
        self.old_cover_image = self.new_cover_image;
        self.data.cover_image = self.new_cover_image;
        self.new_cover_image = null;
        self.getData();
      }).catch(function (error) {
        console.log(error);
      });
    },
    updateCover: function updateCover(blogId) {
      // console.log(this.url);
      var formData = new FormData();
      var self = this;
      formData.append('file', this.file);
      axios.post("api/file/blog-cover-image/update/".concat(blogId), formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function (progressEvent) {
          this.uploadPercentage = C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(progressEvent.loaded * 100 / progressEvent.total));
        }.bind(this)
      }).then(function (response) {
        console.log(response.data);
        self.uploadPercentage = 0;
        self.old_cover_image = self.new_cover_image;
        self.data.cover_image = self.new_cover_image;
        self.new_cover_image = null;
        self.getData();
      }).catch(function (error) {
        console.log(error);
      });
    },
    deleteCover: function deleteCover(blogId) {
      var self = this;
      axios.delete("api/file/blog-cover-image/".concat(blogId)).then(function (response) {
        console.log(response.data);
        self.old_cover_image = null;
        self.getData();
      }).catch(function (error) {
        console.log(error);
      });
    },
    deleteData: function deleteData() {
      var self = this;
      axios.delete("api/blog/".concat(this.confirmModalTempValue)).then(function (response) {
        console.log(response.data);
        self.$router.push({
          name: 'Blog'
        });
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
                [_c("strong", [_vm._v("Moderations")])]
              ),
              _vm._v(" "),
              _c(
                "b-card-body",
                {
                  staticStyle: { "overflow-x": "auto", "max-height": "400px" }
                },
                _vm._l(_vm.data.moderations, function(v, i) {
                  return _c("b-card", { key: i }, [
                    _c("div", { staticClass: "card-title border-bottom" }, [
                      _c(
                        "div",
                        { staticClass: "d-flex w-100 justify-content-between" },
                        [
                          _c("h5", { staticClass: "mb-1" }, [
                            _vm._v(_vm._s(v.moderateable.name))
                          ]),
                          _vm._v(" "),
                          _c("small", { staticClass: "text-muted" }, [
                            _vm._v(_vm._s(v.mod_status))
                          ])
                        ]
                      )
                    ]),
                    _vm._v(" "),
                    _c("p", { staticClass: "card-text" }, [
                      _vm._v(_vm._s(v.mod_message))
                    ]),
                    _vm._v(" "),
                    _c("small", { staticClass: "text-muted" }, [
                      _vm._v("Last updated " + _vm._s(v.created_at))
                    ])
                  ])
                }),
                1
              )
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
              [_c("strong", [_vm._v("Comments")])]
            )
          ])
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
            _c("strong", [_vm._v("Status")]),
            _vm._v(" : " + _vm._s(_vm.data.moderations[0].mod_status)),
            _c("br"),
            _vm._v(" "),
            _c("strong", [_vm._v("Last Update")]),
            _vm._v(" : " + _vm._s(_vm.data.moderations[0].created_at)),
            _c("br"),
            _vm._v(" "),
            _c("strong", [_vm._v("Created")]),
            _vm._v(" : " + _vm._s(_vm.data.created_at) + "\n\n      "),
            _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
              _c(
                "div",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "danger", size: "sm" },
                      on: {
                        click: function($event) {
                          _vm.trigerConfirmModal(
                            "Delete This Blog",
                            "Are you sure want to delete this blog? are related data to this blog will be deleted",
                            "deleteBlog",
                            _vm.data.id
                          )
                        }
                      }
                    },
                    [_vm._v("Delete")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "secondary", size: "sm" },
                      on: {
                        click: function($event) {
                          _vm.handlePublishButton("DRAFT")
                        }
                      }
                    },
                    [_vm._v("Save as Draft")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { variant: "primary", size: "sm" },
                      on: {
                        click: function($event) {
                          _vm.handlePublishButton("PUBLISH")
                        }
                      }
                    },
                    [_vm._v("Publish")]
                  )
                ],
                1
              )
            ])
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
                    "invalid-feedback": _vm.errors.blog_category_id,
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
          _c(
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
                [_c("strong", [_vm._v("Cover Image")])]
              ),
              _vm._v(" "),
              _c("b-card-img", {
                staticStyle: { "border-radius": "unset" },
                attrs: { src: _vm.url }
              }),
              _vm._v(" "),
              _c(
                "b-btn",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.data.cover_image || _vm.new_cover_image,
                      expression: "data.cover_image || new_cover_image"
                    }
                  ],
                  staticClass: "btn--corner",
                  staticStyle: { top: "47px" },
                  attrs: { variant: "danger", size: "sm" },
                  on: { click: _vm.handleRemoveCoverImage }
                },
                [_c("i", { staticClass: "fa fa-close" })]
              ),
              _vm._v(" "),
              _c(
                "b-btn",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: _vm.old_cover_image && _vm.new_cover_image,
                      expression: "old_cover_image && new_cover_image"
                    }
                  ],
                  staticClass: "btn--corner",
                  staticStyle: { top: "47px", right: "22px" },
                  attrs: { variant: "warning", size: "sm" },
                  on: { click: _vm.handleUndoCoverImage }
                },
                [_c("i", { staticClass: "fa fa-undo" })]
              ),
              _vm._v(" "),
              _c("b-progress", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.uploadPercentage > 0,
                    expression: "uploadPercentage>0"
                  }
                ],
                attrs: {
                  height: "5px",
                  value: _vm.uploadPercentage,
                  variant: "primary"
                }
              }),
              _vm._v(" "),
              _c(
                "b-card-body",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.data.cover_image && !_vm.new_cover_image,
                      expression: "!data.cover_image && !new_cover_image"
                    }
                  ]
                },
                [
                  _c("b-form-file", {
                    ref: "fileCoverImage",
                    attrs: {
                      accept: "image/jpeg, image/png, image/gif",
                      placeholder: "Choose a file..."
                    },
                    on: { change: _vm.onFileChange },
                    model: {
                      value: _vm.file,
                      callback: function($$v) {
                        _vm.file = $$v
                      },
                      expression: "file"
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
        "b-modal",
        {
          attrs: { title: "Leave Moderation Message" },
          on: {
            ok: function($event) {
              _vm.trigerConfirmModal(
                _vm.new_moderations.status + " THIS BLOG",
                "Are you sure?",
                "postBlog"
              )
            }
          },
          model: {
            value: _vm.moderationModal,
            callback: function($$v) {
              _vm.moderationModal = $$v
            },
            expression: "moderationModal"
          }
        },
        [
          _c(
            "b-form-group",
            { staticClass: "my-1", attrs: { "label-for": "message" } },
            [
              _c("b-form-input", {
                attrs: {
                  id: "message",
                  type: "text",
                  name: "message",
                  placeholder: "Please leave a message why change this blog"
                },
                model: {
                  value: _vm.new_moderations.message,
                  callback: function($$v) {
                    _vm.$set(_vm.new_moderations, "message", $$v)
                  },
                  expression: "new_moderations.message"
                }
              })
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
            title: _vm.confirmModalTitle
          },
          on: { ok: _vm.onConfirmModal, cancel: _vm.onCancelConfirmModal },
          model: {
            value: _vm.confirmModal,
            callback: function($$v) {
              _vm.confirmModal = $$v
            },
            expression: "confirmModal"
          }
        },
        [_vm._v("\n    " + _vm._s(_vm.confirmModalBody) + "\n  ")]
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
//# sourceMappingURL=28.js.map