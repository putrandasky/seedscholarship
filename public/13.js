(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/AppBlog.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/blog/AppBlog.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.map */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AppBlogFieldTableData__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AppBlogFieldTableData */ "./resources/assets/js/admin/views/blog/AppBlogFieldTableData.js");
/* harmony import */ var _share_mixins_instantSearch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_share/mixins/instantSearch */ "./resources/assets/js/admin/views/_share/mixins/instantSearch.js");
/* harmony import */ var _share_mixins_OperationPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_share/mixins/OperationPage */ "./resources/assets/js/admin/views/_share/mixins/OperationPage.js");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  mixins: [_AppBlogFieldTableData__WEBPACK_IMPORTED_MODULE_3__["AppBlogFieldTableData"], _share_mixins_instantSearch__WEBPACK_IMPORTED_MODULE_4__["instantSearch"], _share_mixins_OperationPage__WEBPACK_IMPORTED_MODULE_5__["OperationPage"]],
  name: 'AppBlog',
  data: function data() {
    return {
      routeName: 'Blog',
      loaded: false
    };
  },
  created: function created() {},
  methods: {
    handleRowClicked: function handleRowClicked(record) {
      this.$router.push({
        name: 'BlogDetail',
        params: {
          blogId: record.id
        }
      });
    },
    getData: function getData() {
      var _this = this;

      axios.get("api/blog").then(function (response) {
        console.log(response.data);

        _this.checkPage();

        var editData = function editData(data) {
          return data.map(function (item) {
            var temp = C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, item);

            temp['author'] = temp.authorable.name;
            temp['category'] = temp.blog_category.category; // temp.name = 'my name '+temp.name;

            return temp;
          });
        };

        _this.itemsData = editData(response.data);
        _this.loaded = true;
      }).catch(function (error) {
        console.log(error);
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/AppBlog.vue?vue&type=template&id=1f34816e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/blog/AppBlog.vue?vue&type=template&id=1f34816e& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
        [_c("strong", [_vm._v("All BLOG")])]
      ),
      _vm._v(" "),
      _c(
        "b-row",
        [
          _c(
            "b-col",
            { staticClass: "mb-3", attrs: { xl: "4", md: "6" } },
            [
              _c(
                "b-input-group",
                [
                  _c(
                    "b-input-group-prepend",
                    [
                      _c("b-form-select", {
                        attrs: { plain: "", options: _vm.optionsInputSearch },
                        model: {
                          value: _vm.selectedInputSearch,
                          callback: function($$v) {
                            _vm.selectedInputSearch = $$v
                          },
                          expression: "selectedInputSearch"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-form-input", {
                    attrs: {
                      autofocus: "",
                      type: "text",
                      placeholder: "Instant Search"
                    },
                    on: { input: _vm.onInput },
                    model: {
                      value: _vm.search,
                      callback: function($$v) {
                        _vm.search = $$v
                      },
                      expression: "search"
                    }
                  }),
                  _vm._v(" "),
                  _c(
                    "b-input-group-append",
                    [
                      _c(
                        "b-btn",
                        {
                          attrs: { disabled: !_vm.search },
                          on: {
                            click: function($event) {
                              _vm.search = ""
                            }
                          }
                        },
                        [_vm._v("Clear")]
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
          _vm.getTotalPages > 1
            ? _c(
                "b-col",
                {
                  staticStyle: { "overflow-y": "auto" },
                  attrs: { xl: "8", md: "6" }
                },
                [
                  _c("b-pagination-nav", {
                    staticClass: "justify-content-end mb-0",
                    attrs: {
                      align: "right",
                      "use-router": true,
                      "link-gen": _vm.linkGen,
                      "number-of-pages": _vm.getTotalPages
                    },
                    model: {
                      value: _vm.currentPage,
                      callback: function($$v) {
                        _vm.currentPage = $$v
                      },
                      expression: "currentPage"
                    }
                  })
                ],
                1
              )
            : _vm._e()
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticStyle: { "overflow-y": "auto" } },
        [
          _c("b-table", {
            staticStyle: { "animation-duration": "1s" },
            attrs: {
              stacked: "sm",
              stack: "",
              hover: "",
              fields: _vm.FieldTableItems,
              items: _vm.filteredItemsData,
              "thead-class": "thead-light",
              "sort-by": _vm.querySortBy,
              "sort-desc": _vm.querySortDesc,
              "current-page": _vm.currentPage,
              "per-page": _vm.perPage
            },
            on: {
              "update:sortBy": function($event) {
                _vm.querySortBy = $event
              },
              "update:sortDesc": function($event) {
                _vm.querySortDesc = $event
              },
              "sort-changed": _vm.sortingChanged,
              "row-clicked": _vm.handleRowClicked
            },
            scopedSlots: _vm._u([
              {
                key: "no",
                fn: function(data) {
                  return [
                    _vm._v(
                      "\n        " +
                        _vm._s(
                          data.index + 1 + (_vm.currentPage - 1) * _vm.perPage
                        ) +
                        "\n      "
                    )
                  ]
                }
              },
              {
                key: "status",
                fn: function(data) {
                  return [
                    _c(
                      "b-badge",
                      {
                        attrs: {
                          variant: _vm.getBadge(
                            data.item.moderations[0].mod_status
                          )
                        }
                      },
                      [
                        _vm._v(
                          "\n          " +
                            _vm._s(data.item.moderations[0].mod_status) +
                            "\n        "
                        )
                      ]
                    )
                  ]
                }
              }
            ])
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

/***/ "./resources/assets/js/admin/views/blog/AppBlog.vue":
/*!**********************************************************!*\
  !*** ./resources/assets/js/admin/views/blog/AppBlog.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppBlog_vue_vue_type_template_id_1f34816e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppBlog.vue?vue&type=template&id=1f34816e& */ "./resources/assets/js/admin/views/blog/AppBlog.vue?vue&type=template&id=1f34816e&");
/* harmony import */ var _AppBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppBlog.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/blog/AppBlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppBlog_vue_vue_type_template_id_1f34816e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppBlog_vue_vue_type_template_id_1f34816e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/blog/AppBlog.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/blog/AppBlog.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/assets/js/admin/views/blog/AppBlog.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBlog.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/AppBlog.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBlog_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/blog/AppBlog.vue?vue&type=template&id=1f34816e&":
/*!*****************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/blog/AppBlog.vue?vue&type=template&id=1f34816e& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBlog_vue_vue_type_template_id_1f34816e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppBlog.vue?vue&type=template&id=1f34816e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/blog/AppBlog.vue?vue&type=template&id=1f34816e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBlog_vue_vue_type_template_id_1f34816e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppBlog_vue_vue_type_template_id_1f34816e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/admin/views/blog/AppBlogFieldTableData.js":
/*!***********************************************************************!*\
  !*** ./resources/assets/js/admin/views/blog/AppBlogFieldTableData.js ***!
  \***********************************************************************/
/*! exports provided: AppBlogFieldTableData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppBlogFieldTableData", function() { return AppBlogFieldTableData; });
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__);



var AppBlogFieldTableData = {
  data: function data() {
    return {
      FieldTableItems: [{
        key: 'no',
        label: 'No',
        'class': 'text-center',
        thStyle: {
          minWidth: '30px',
          width: '30px'
        }
      }, {
        key: 'title',
        label: 'Title',
        tdClass: 'truncate-cell',
        sortable: true,
        thStyle: {
          minWidth: '175px'
        }
      }, {
        key: 'author',
        label: 'Author',
        'class': 'text-center',
        thStyle: {
          minWidth: '150px',
          width: '150px'
        },
        sortable: true
      }, {
        key: 'category',
        label: 'Category',
        'class': 'text-center',
        thStyle: {
          minWidth: '150px',
          width: '150px'
        },
        sortable: true
      }, {
        key: 'status',
        label: 'Status',
        'class': 'text-center',
        thStyle: {
          minWidth: '25px',
          width: '25px'
        },
        sortable: true
      }, {
        key: 'created_at',
        label: 'Created',
        'class': 'text-center',
        thStyle: {
          minWidth: '25px',
          width: '25px'
        },
        sortable: true
      }, {
        key: 'updated_at',
        label: 'Updated',
        'class': 'text-center',
        thStyle: {
          minWidth: '25px',
          width: '25px'
        },
        sortable: true
      }],
      itemsData: [],
      selectedInputSearch: this.$route.query.searchKey || 'title',
      optionsInputSearch: [{
        value: 'title',
        text: 'Title'
      }, {
        value: 'author',
        text: 'Author'
      }, {
        value: 'category',
        text: 'Category'
      }, {
        value: 'status',
        text: 'Status'
      }]
    };
  },
  watch: {},
  computed: {
    filteredItemsData: function filteredItemsData() {
      var _this = this;

      if (this.selectedInputSearch == 'title') {
        return this.itemsData.filter(function (result) {
          return result.title.toLowerCase().indexOf(_this.search.toLowerCase()) > -1;
        });
      }

      if (this.selectedInputSearch == 'author') {
        return this.itemsData.filter(function (result) {
          return result.author.toLowerCase().indexOf(_this.search.toLowerCase()) > -1;
        });
      }

      if (this.selectedInputSearch == 'category') {
        return this.itemsData.filter(function (result) {
          return result.category.toLowerCase().indexOf(_this.search.toLowerCase()) > -1;
        });
      }

      if (this.selectedInputSearch == 'status') {
        return this.itemsData.filter(function (result) {
          return result.status.toLowerCase().indexOf(_this.search.toLowerCase()) > -1;
        });
      }
    }
  }
};

/***/ })

}]);
//# sourceMappingURL=13.js.map