(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[20],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/assignment/AppAssignment.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/assignment/AppAssignment.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AssignmentFieldTableData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AssignmentFieldTableData */ "./resources/assets/js/admin/views/assignment/AssignmentFieldTableData.js");
/* harmony import */ var _share_mixins_instantSearch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_share/mixins/instantSearch */ "./resources/assets/js/admin/views/_share/mixins/instantSearch.js");
/* harmony import */ var _share_mixins_OperationPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_share/mixins/OperationPage */ "./resources/assets/js/admin/views/_share/mixins/OperationPage.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'Assignment',
  mixins: [_AssignmentFieldTableData__WEBPACK_IMPORTED_MODULE_0__["AssignmentFieldTableData"], _share_mixins_instantSearch__WEBPACK_IMPORTED_MODULE_1__["instantSearch"], _share_mixins_OperationPage__WEBPACK_IMPORTED_MODULE_2__["OperationPage"]],
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {
    handleRowClicked: function handleRowClicked() {}
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/assignment/AppAssignment.vue?vue&type=template&id=8aa1b842&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/admin/views/assignment/AppAssignment.vue?vue&type=template&id=8aa1b842& ***!
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
        [_c("strong", [_vm._v("ASSIGNNEMT")])]
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
              small: "",
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
                      "\n                " +
                        _vm._s(
                          data.index + 1 + (_vm.currentPage - 1) * _vm.perPage
                        ) +
                        "\n            "
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
                      { attrs: { variant: _vm.getBadge(data.item.status) } },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(data.item.status) +
                            "\n                "
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

/***/ "./resources/assets/js/admin/views/_share/mixins/OperationPage.js":
/*!************************************************************************!*\
  !*** ./resources/assets/js/admin/views/_share/mixins/OperationPage.js ***!
  \************************************************************************/
/*! exports provided: OperationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OperationPage", function() { return OperationPage; });
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_3__);




var OperationPage = {
  data: function data() {
    return {
      isBusy: false,
      routeName: '',
      querySortDesc: '',
      querySortBy: this.$route.query.sortBy,
      currentPage: this.$route.query.page,
      perPage: 10,
      totalRows: 0
    };
  },
  created: function created() {
    this.getSort();
    this.getData();
  },
  watch: {
    '$route.query.sortDesc': 'getSort',
    '$route.query.sortBy': 'getSort',
    '$route.query.page': 'checkPage'
  },
  computed: {
    checkNav: function checkNav() {
      return this.$route.query.filterTarget ? this.$route.query.filterTarget : 'all';
    },
    getTotalPages: function getTotalPages() {
      return Math.ceil(this.filteredItemsData.length / this.perPage);
    }
  },
  methods: {
    onInput: function onInput() {
      if (this.currentPage !== 1) {
        this.$router.replace({
          name: this.routeName,
          query: C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, this.$route.query, {
            page: 1,
            search: this.search
          })
        });
        this.currentPage = 1;
      }
    },
    isActivePageButton: function isActivePageButton(page) {
      return page == this.currentPage;
    },
    getRowCount: function getRowCount(items) {
      return items.length;
    },
    checkPage: function checkPage() {
      this.currentPage = Number(this.$route.query.page ? this.$route.query.page : 1);
    },
    linkGen: function linkGen(pageNum) {
      return {
        name: this.routeName,
        query: C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, this.$route.query, {
          page: pageNum
        })
      };
    },
    changePage: function changePage(page) {
      // let query = Object.assign({},this.$route.query,page)
      // this.$router.push({page:query})
      // this.get(query)
      this.$router.replace({
        name: this.routeName,
        query: C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, this.$route.query, {
          page: page
        })
      });
    },
    sortingChanged: function sortingChanged(ctx) {
      console.log(ctx); // console.log(ctx.sortBy);
      // console.log(ctx.sortDesc);

      this.$router.replace({
        // name: this.routeName,
        query: C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_2___default()({}, this.$route.query, {
          sortBy: ctx.sortBy,
          sortDesc: ctx.sortDesc
        })
      });
    },
    getSort: function getSort() {
      var getOrderingDesc = JSON.parse(typeof this.$route.query.sortDesc === 'undefined' ? false : this.$route.query.sortDesc);
      var getOrderingBy = this.$route.query.sortBy ? this.$route.query.sortBy : ''; // let convertGeOrderingDesc = getOrderingDesc == "true"

      this.querySortDesc = getOrderingDesc;
      this.querySortBy = getOrderingBy; // console.log(this.orderDesc);
    },
    // handleHeadClicked(key){
    //   console.log(key);
    //   // console.log(this.orderDesc);
    //     this.$router.replace({
    //     name: this.routeName,
    //     query: Object.assign({}, this.$route.query, {sortBy: key})
    //   })
    //   },
    filterTarget: function filterTarget(target) {
      // console.log(target);
      if (target == this.$route.query.filterTarget || target == 'all' && typeof this.$route.query.filterTarget === 'undefined') {
        return;
      }

      this.$router.replace({
        name: this.routeName,
        query: {
          filterTarget: target,
          page: 1
        }
      });
      this.search = '';
    },
    getPriority: function getPriority(data) {
      return data === 'high' ? 'text-danger' : data === 'medium' ? 'text-warning' : 'text-primary';
    },
    getBadge: function getBadge(status) {
      return status === 'PUBLISH' ? 'primary' : status === 'DRAFT' ? 'secondary' : 'success';
    },
    getBadgeApproval: function getBadgeApproval(status) {
      return status === 'approved' ? 'success' : status === 'in progress' ? 'primary' : status === 'not approved' ? 'danger' : 'secondary';
    }
  }
};

/***/ }),

/***/ "./resources/assets/js/admin/views/_share/mixins/instantSearch.js":
/*!************************************************************************!*\
  !*** ./resources/assets/js/admin/views/_share/mixins/instantSearch.js ***!
  \************************************************************************/
/*! exports provided: instantSearch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "instantSearch", function() { return instantSearch; });
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_2__);



var instantSearch = {
  data: function data() {
    return {
      search: this.$route.query.search || ''
    };
  },
  watch: {
    search: function search(newVal) {
      var queryNewVal = C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_object_assign__WEBPACK_IMPORTED_MODULE_1___default()({}, this.$route.query, {
        searchKey: this.selectedInputSearch,
        search: newVal
      });

      if (newVal == '') {
        delete queryNewVal.searchKey;
        delete queryNewVal.search;
      }

      this.$router.replace({
        query: queryNewVal
      });
    }
  },
  computed: {}
};

/***/ }),

/***/ "./resources/assets/js/admin/views/assignment/AppAssignment.vue":
/*!**********************************************************************!*\
  !*** ./resources/assets/js/admin/views/assignment/AppAssignment.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AppAssignment_vue_vue_type_template_id_8aa1b842___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AppAssignment.vue?vue&type=template&id=8aa1b842& */ "./resources/assets/js/admin/views/assignment/AppAssignment.vue?vue&type=template&id=8aa1b842&");
/* harmony import */ var _AppAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AppAssignment.vue?vue&type=script&lang=js& */ "./resources/assets/js/admin/views/assignment/AppAssignment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AppAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AppAssignment_vue_vue_type_template_id_8aa1b842___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AppAssignment_vue_vue_type_template_id_8aa1b842___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/admin/views/assignment/AppAssignment.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/admin/views/assignment/AppAssignment.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/assignment/AppAssignment.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppAssignment.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/assignment/AppAssignment.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAssignment_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/admin/views/assignment/AppAssignment.vue?vue&type=template&id=8aa1b842&":
/*!*****************************************************************************************************!*\
  !*** ./resources/assets/js/admin/views/assignment/AppAssignment.vue?vue&type=template&id=8aa1b842& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAssignment_vue_vue_type_template_id_8aa1b842___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AppAssignment.vue?vue&type=template&id=8aa1b842& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/admin/views/assignment/AppAssignment.vue?vue&type=template&id=8aa1b842&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAssignment_vue_vue_type_template_id_8aa1b842___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AppAssignment_vue_vue_type_template_id_8aa1b842___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/admin/views/assignment/AssignmentFieldTableData.js":
/*!********************************************************************************!*\
  !*** ./resources/assets/js/admin/views/assignment/AssignmentFieldTableData.js ***!
  \********************************************************************************/
/*! exports provided: AssignmentFieldTableData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AssignmentFieldTableData", function() { return AssignmentFieldTableData; });
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.search */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.filter */ "./node_modules/core-js/modules/es6.array.filter.js");
/* harmony import */ var core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_filter__WEBPACK_IMPORTED_MODULE_2__);



var AssignmentFieldTableData = {
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
        key: 'assignment',
        label: 'Assignment Name',
        tdClass: 'truncate-cell',
        sortable: true,
        thStyle: {
          minWidth: '175px'
        }
      }, {
        key: 'closed_date',
        label: 'Closed Date',
        'class': 'text-center',
        thStyle: {
          minWidth: '150px',
          width: '150px'
        },
        sortable: true
      }, {
        key: 'created_at',
        label: 'Created Date',
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
      }],
      itemsData: [{
        id: 1,
        assignment: 'lorem ipsum',
        closed_date: "2015-03-25",
        created_at: "2015-03-25",
        status: 'Active'
      }, {
        id: 2,
        assignment: 'Dolor Sit amet',
        closed_date: "2015-03-25",
        created_at: "2015-03-25",
        status: 'Closed'
      }],
      selectedInputSearch: this.$route.query.searchKey || 'assignment',
      optionsInputSearch: [{
        value: 'assignment',
        text: 'Assignment'
      }, {
        value: 'closed_date',
        text: 'Closed Date'
      }, {
        value: 'created_at',
        text: 'Created Date'
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

      if (this.selectedInputSearch == 'assignment') {
        return this.itemsData.filter(function (result) {
          return result.assignment.toLowerCase().indexOf(_this.search.toLowerCase()) > -1;
        });
      }

      if (this.selectedInputSearch == 'closed_date') {
        return this.itemsData.filter(function (result) {
          return result.closed_date.toLowerCase().indexOf(_this.search.toLowerCase()) > -1;
        });
      }

      if (this.selectedInputSearch == 'created_at') {
        return this.itemsData.filter(function (result) {
          return result.created_at.toLowerCase().indexOf(_this.search.toLowerCase()) > -1;
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
//# sourceMappingURL=20.js.map