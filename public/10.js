(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/account/AdminDetail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/account/AdminDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
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
  name: 'AdminDetail',
  data: function data() {
    return {
      loaded: false,
      uploadPercentage: 0,
      new_profile_picture: null,
      old_profile_picture: null,
      file: null,
      objectUrl: null,
      data: {
        name: '',
        email: '',
        phone: '',
        department_id: null,
        created_at: null,
        updated_at: null,
        photo: null
      },
      errors: {
        name: '',
        email: '',
        department_id: null
      },
      departmentOptions: []
    };
  },
  created: function created() {
    this.getDepartment();
    this.getData();
  },
  computed: {
    url: function url() {
      return this.new_profile_picture ? this.objectUrl : this.data.photo ? "/storage/user/".concat(this.data.id, "/profile-picture/").concat(this.data.photo) : '/images/default-user.jpg';
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
    stateDepartment_id: function stateDepartment_id() {
      return this.errors.department_id == 'no-error' ? true : this.errors.department_id ? false : null;
    }
  },
  methods: {
    getDepartment: function getDepartment() {
      var _this = this;

      axios.get("api/department").then(function (response) {
        response.data.forEach(function (obj) {
          obj.value = obj.id;
          obj.text = obj.department;
          delete obj.id;
          delete obj.department;
        });
        _this.departmentOptions = response.data;
      }).catch(function (error) {
        console.log(error);
      });
    },
    handleUndoCoverImage: function handleUndoCoverImage() {
      this.data.photo = this.old_profile_picture;
      this.objectUrl = null;
      this.new_profile_picture = null;
      this.$refs.fileProfilePicture.reset();
    },
    handleRemoveCoverImage: function handleRemoveCoverImage() {
      this.data.photo = null;
      this.objectUrl = null;
      this.new_profile_picture = null;
      this.$refs.fileProfilePicture.reset();
    },
    onFileChange: function onFileChange(e) {
      var file = e.target.files[0]; // console.log(file);

      if (file.size > 1024 * 1024) {
        e.preventDefault();
        this.$refs.fileProfilePicture.reset();
        return;
      } // this.data.photo = file.name


      this.new_profile_picture = file.name;
      this.objectUrl = URL.createObjectURL(file);
    },
    getData: function getData() {
      var _this2 = this;

      var self = this;
      axios.get("api/user-admin/".concat(this.$route.params.userId)).then(function (response) {
        console.log(response.data);
        self.data = response.data;
        _this2.old_profile_picture = response.data.photo;
        _this2.loaded = true;
      }).catch(function (error) {
        console.log(error);
      });
    },
    postData: function postData() {
      var self = this;
      axios.patch("api/user-admin/".concat(this.$route.params.userId), this.data).then(function (response) {
        console.log(response.data);

        if (self.old_profile_picture && !self.data.photo && !self.new_profile_picture) {
          console.log('delete');
          self.deleteCover(self.data.id);
          return;
        }

        if (self.old_profile_picture && self.new_profile_picture) {
          console.log('update');
          self.updateCover(self.data.id);
          return;
        }

        if (!self.old_profile_picture && self.new_profile_picture) {
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
      axios.post("api/file/admin-cover-image/".concat(blogId), formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function (progressEvent) {
          this.uploadPercentage = parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total));
        }.bind(this)
      }).then(function (response) {
        console.log(response.data);
        self.uploadPercentage = 0;
        self.old_profile_picture = self.new_profile_picture;
        self.data.photo = self.new_profile_picture;
        self.new_profile_picture = null;
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
      axios.post("api/file/admin-cover-image/update/".concat(blogId), formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function (progressEvent) {
          this.uploadPercentage = parseInt(Math.round(progressEvent.loaded * 100 / progressEvent.total));
        }.bind(this)
      }).then(function (response) {
        console.log(response.data);
        self.uploadPercentage = 0;
        self.old_profile_picture = self.new_profile_picture;
        self.data.photo = self.new_profile_picture;
        self.new_profile_picture = null;
        self.getData();
      }).catch(function (error) {
        console.log(error);
      });
    },
    deleteCover: function deleteCover(blogId) {
      var self = this;
      axios.delete("api/file/admin-cover-image/".concat(blogId)).then(function (response) {
        console.log(response.data);
        self.old_profile_picture = null;
        self.getData();
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/account/AdminDetail.vue?vue&type=template&id=a370ea4a&":
/*!******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/account/AdminDetail.vue?vue&type=template&id=a370ea4a& ***!
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
        { attrs: { md: "3" } },
        [
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
                [_c("strong", [_vm._v("Profile Picture")])]
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
                      value: _vm.data.photo || _vm.new_profile_picture,
                      expression: "data.photo || new_profile_picture"
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
                      value: _vm.old_profile_picture && _vm.new_profile_picture,
                      expression: "old_profile_picture && new_profile_picture"
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
                      value: !_vm.data.photo && !_vm.new_profile_picture,
                      expression: "!data.photo && !new_profile_picture"
                    }
                  ]
                },
                [
                  _c("b-form-file", {
                    ref: "fileProfilePicture",
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
                [_c("strong", [_vm._v("Profile Data")])]
              ),
              _vm._v(" "),
              _c(
                "b-form-group",
                {
                  attrs: {
                    label: "Full Name",
                    "label-for": "name",
                    "label-cols": 3,
                    horizontal: true,
                    "invalid-feedback": _vm.errors.name,
                    state: _vm.stateName
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: { id: "name", type: "text", state: _vm.stateName },
                    model: {
                      value: _vm.data.name,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "name", $$v)
                      },
                      expression: "data.name"
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
                    label: "Email",
                    "label-for": "email",
                    "label-cols": 3,
                    horizontal: true,
                    "invalid-feedback": _vm.errors.email,
                    state: _vm.stateEmail
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "email",
                      type: "email",
                      state: _vm.stateEmail
                    },
                    model: {
                      value: _vm.data.email,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "email", $$v)
                      },
                      expression: "data.email"
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
                    label: "Phone Number",
                    "label-for": "number",
                    "label-cols": 3,
                    horizontal: true,
                    "invalid-feedback": _vm.errors.phone,
                    state: _vm.statePhone
                  }
                },
                [
                  _c("b-form-input", {
                    attrs: {
                      id: "number",
                      type: "text",
                      state: _vm.statePhone
                    },
                    model: {
                      value: _vm.data.phone,
                      callback: function($$v) {
                        _vm.$set(_vm.data, "phone", $$v)
                      },
                      expression: "data.phone"
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
                    label: "Department",
                    "label-for": "department",
                    "label-cols": 3,
                    horizontal: true,
                    "invalid-feedback": _vm.errors.department_id,
                    state: _vm.stateDepartment_id
                  }
                },
                [
                  _c(
                    "b-form-select",
                    {
                      attrs: {
                        plain: "",
                        id: "department",
                        state: _vm.stateDepartment_id,
                        options: _vm.departmentOptions
                      },
                      model: {
                        value: _vm.data.department_id,
                        callback: function($$v) {
                          _vm.$set(_vm.data, "department_id", $$v)
                        },
                        expression: "data.department_id"
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
                          [_vm._v("-- Please Select Department --")]
                        )
                      ])
                    ],
                    2
                  )
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "float-right",
                  attrs: { variant: "primary" },
                  on: { click: _vm.postData }
                },
                [_vm._v("Update Data")]
              ),
              _vm._v(" "),
              _c("div", { attrs: { slot: "footer" }, slot: "footer" }, [
                _c("small", { staticClass: "text-muted" }, [
                  _vm._v(
                    "Registered : " +
                      _vm._s(_vm.data.created_at) +
                      " | Last updated : " +
                      _vm._s(_vm.data.updated_at)
                  )
                ])
              ])
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

/***/ "./resources/assets/js/admin/views/account/AdminDetail.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/admin/views/account/AdminDetail.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AdminDetail_vue_vue_type_template_id_a370ea4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AdminDetail.vue?vue&type=template&id=a370ea4a& */ "./resources/assets/js/admin/views/account/AdminDetail.vue?vue&type=template&id=a370ea4a&");
/* harmony import */ var _AdminDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AdminDetail.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/account/AdminDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AdminDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AdminDetail_vue_vue_type_template_id_a370ea4a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AdminDetail_vue_vue_type_template_id_a370ea4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/account/AdminDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/account/AdminDetail.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/account/AdminDetail.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/account/AdminDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/account/AdminDetail.vue?vue&type=template&id=a370ea4a&":
/*!************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/account/AdminDetail.vue?vue&type=template&id=a370ea4a& ***!
  \************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDetail_vue_vue_type_template_id_a370ea4a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AdminDetail.vue?vue&type=template&id=a370ea4a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/account/AdminDetail.vue?vue&type=template&id=a370ea4a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDetail_vue_vue_type_template_id_a370ea4a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AdminDetail_vue_vue_type_template_id_a370ea4a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=10.js.map