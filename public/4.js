(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "./node_modules/core-js/library/fn/parse-int.js");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrationUploadCard_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrationUploadCard.vue */ "./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'RegistrationUpload',
  components: {
    UploadCard: _RegistrationUploadCard_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      loaded: false,
      authorized: false
    };
  },
  created: function created() {
    this.checkAuthorization();
  },
  methods: {
    checkAuthorization: function checkAuthorization() {
      var _this = this;

      axios.get("api/registration-awardee-nonreg/upload/authorized?id=".concat(this.$route.query.id, "&registration_code=").concat(this.$route.query.registration_code, "&email=").concat(this.$route.query.email, "&scholarship_id=").concat(this.$route.query.scholarship_id)).then(function (response) {
        _this.loaded = true;
        _this.authorized = true;
      }).catch(function (error) {
        console.log(error);
        _this.loaded = true;
        _this.authorized = false;
      });
    },
    handleDownload: function handleDownload() {
      var element = document.createElement('a');
      element.setAttribute('href', "api/download/content/file/refference/".concat(this.$route.params.projectId, "/").concat(this.document, "/").concat(this.$route.params.contentId, "/").concat(file));
      element.setAttribute('download', file);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.bind */ "./node_modules/core-js/modules/es6.function.bind.js");
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");




//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'RegistrationUploadCard',
  props: ['title', 'folder'],
  data: function data() {
    var _ref;

    return _ref = {
      loaded: false,
      confirmModal: false,
      confirmModalTitle: '',
      confirmModalBody: '',
      confirmModalState: '',
      confirmModalTempValue: ''
    }, Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, "confirmModal", false), Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, "file", []), Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, "uploadPercentage", 0), Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, "new_file", ''), Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, "old_file", ''), Object(C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_3__["default"])(_ref, "data", {
      name: '',
      size: '',
      date: null
    }), _ref;
  },
  created: function created() {
    this.checkFile();
  },
  computed: {
    information: function information() {
      return this.folder == 'cv' ? 'Riwayat hidup dengan format bebas dengan informasi wajib berupa data diri dan riwayat pendidikan' : this.folder == 'proposal' ? 'Proposal penelitan dengan isi; latar belakang, tujuan, metodologi, RAB, dan referensi' : this.folder == 'sktmb' ? 'Surat keterangan yang menyatakan tidak menerima beasiswa riset lainnya' : this.folder == 'siakng' ? 'Print Out Ringkasan / Riwayat Akademis  SIAK NG' : '';
    }
  },
  methods: {
    trigerConfirmModal: function trigerConfirmModal(title, body, state) {
      var value = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : '';
      this.confirmModalTitle = title;
      this.confirmModalBody = body;
      this.confirmModal = true;
      this.confirmModalState = state;
      this.confirmModalTempValue = value;
    },
    onFileChange: function onFileChange(e) {
      var file = e.target.files[0]; // console.log(file);

      if (file.size > 1 * 1000 * 1024 || !/\.(jpeg|jpe|jpg|png|pdf)$/i.test(file.name)) {
        e.preventDefault();
        this.$refs.upload.reset();
        return;
      } // this.data.photo = file.name


      this.new_file = file.name; // this.objectUrl = URL.createObjectURL(file);
    },
    checkFile: function checkFile() {
      var _this = this;

      axios.get("api/registration-awardee-nonreg/upload?folder=".concat(this.folder, "&id=").concat(this.$route.query.id, "&registration_code=").concat(this.$route.query.registration_code, "&scholarship_id=").concat(this.$route.query.scholarship_id)).then(function (response) {
        // console.log(response.data)
        _this.data = response.data;
        _this.loaded = true;
      }).catch(function (error) {
        console.log(error);
        _this.loaded = true;
      });
    },
    openFile: function openFile() {
      var self = this;
      window.open("/api/registration-awardee-nonreg/upload/".concat(this.$route.query.id, "?folder=").concat(this.folder, "&filename=").concat(this.data.name, "&registration_code=").concat(this.$route.query.registration_code, "&scholarship_id=").concat(this.$route.query.scholarship_id), self.data.name, "window,width=".concat(screen.availWidth, ",height=").concat(screen.availHeight, ",resizeable,left=200,top=100,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0"));
    },
    uploadFile: function uploadFile() {
      var _this2 = this;

      // console.log(this.url);
      var formData = new FormData();
      var self = this;
      formData.append('file', this.file);
      axios.post("api/registration-awardee-nonreg/upload", formData, {
        params: {
          id: this.$route.query.id,
          folder: this.folder,
          registration_code: this.$route.query.registration_code,
          scholarship_id: this.$route.query.scholarship_id
        },
        headers: {
          'Content-Type': 'multipart/form-data'
        },
        onUploadProgress: function (progressEvent) {
          this.uploadPercentage = C_xampp_htdocs_seedscholarship_node_modules_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()(Math.round(progressEvent.loaded * 100 / progressEvent.total));
        }.bind(this)
      }).then(function (response) {
        // console.log(response.data)
        self.uploadPercentage = 0;
        self.old_file = self.new_file;
        self.new_file = null;
        self.checkFile();

        _this2.$snotify.success("".concat(_this2.title, " Succesfully Uploaded"), "UPLOADED");
      }).catch(function (error) {
        self.uploadPercentage = 0;
        self.old_file = self.new_file;
        self.new_file = null;

        _this2.$refs.upload.reset();

        console.log(error);

        _this2.$snotify.danger("Ooops! Somethings Wrong, Try Again Later", "ERROR");
      });
    },
    deleteFile: function deleteFile() {
      var _this3 = this;

      // console.log('deleting');
      var self = this;
      axios.delete("api/registration-awardee-nonreg/upload/".concat(this.$route.query.id, "?folder=").concat(this.folder, "&filename=").concat(this.data.name, "&registration_code=").concat(this.$route.query.registration_code, "&scholarship_id=").concat(this.$route.query.scholarship_id)).then(function (response) {
        // console.log(response.data)
        self.old_file = null;
        self.data.name = '';
        self.data.size = '';
        self.data.date = null;

        _this3.$snotify.success("".concat(_this3.title, " Succesfully Deleted"), "DELETED");

        self.file = [];
      }).catch(function (error) {
        console.log(error);

        _this3.$snotify.danger("Ooops! Somethings Wrong, Try Again Later", "ERROR");
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/library/fn/parse-int.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/library/fn/parse-int.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.parse-int */ "./node_modules/core-js/library/modules/es6.parse-int.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/library/modules/_core.js").parseInt;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_parse-int.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_parse-int.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $parseInt = __webpack_require__(/*! ./_global */ "./node_modules/core-js/library/modules/_global.js").parseInt;
var $trim = __webpack_require__(/*! ./_string-trim */ "./node_modules/core-js/library/modules/_string-trim.js").trim;
var ws = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js");
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-trim.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-trim.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/library/modules/_defined.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/library/modules/_fails.js");
var spaces = __webpack_require__(/*! ./_string-ws */ "./node_modules/core-js/library/modules/_string-ws.js");
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),

/***/ "./node_modules/core-js/library/modules/_string-ws.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/library/modules/_string-ws.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.parse-int.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.parse-int.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");
var $parseInt = __webpack_require__(/*! ./_parse-int */ "./node_modules/core-js/library/modules/_parse-int.js");
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),

/***/ "./node_modules/core-js/modules/_bind.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_bind.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.function.bind.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.function.bind.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.P, 'Function', { bind: __webpack_require__(/*! ./_bind */ "./node_modules/core-js/modules/_bind.js") });


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue?vue&type=template&id=03a489f9&":
/*!*******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue?vue&type=template&id=03a489f9& ***!
  \*******************************************************************************************************************************************************************************************************************************************/
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
    {
      directives: [
        {
          name: "show",
          rawName: "v-show",
          value: _vm.loaded,
          expression: "loaded"
        }
      ],
      staticClass: "app flex-row align-items-center"
    },
    [
      !_vm.authorized
        ? _c(
            "b-container",
            [
              _c("b-alert", { attrs: { show: "", variant: "danger" } }, [
                _vm._v("YOU ARE NOT ALLOWED TO ACCESS THIS PAGE.\n    ")
              ])
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.authorized
        ? _c(
            "div",
            { staticClass: "container" },
            [
              _c("b-alert", { attrs: { show: "", variant: "primary" } }, [
                _vm._v("Please upload this file below in "),
                _c("strong", [_vm._v("pdf/jpeg/png")]),
                _vm._v(" file with max size\n      "),
                _c("strong", [_vm._v("1mb")]),
                _vm._v("."),
                _c("br"),
                _vm._v("\n      Download  "),
                _c(
                  "a",
                  {
                    staticClass: "alert-link",
                    attrs: {
                      download: "",
                      href:
                        "files/BEASISWA PENELITIAN SEEDS 2019 - II - FORMAT PROPOSAL.docx"
                    }
                  },
                  [_vm._v("here")]
                ),
                _vm._v(' for format "Proposal" &  '),
                _c(
                  "a",
                  {
                    staticClass: "alert-link",
                    attrs: {
                      download: "",
                      href:
                        "files/BEASISWA PENELITIAN SEEDS 2019 - II - SK Tidak Menerima Beasiswa.docx"
                    }
                  },
                  [_vm._v("here")]
                ),
                _vm._v(' for "Surat Keterangan"\n      '),
                _c("hr"),
                _vm._v(" "),
                _c("small", [
                  _vm._v(
                    "Nb : Make sure you bookmark this page, if you need to update the file, you can back to this page later. or check your Inbox / Spam folder of your email"
                  )
                ])
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "3", sm: "6" } },
                    [
                      _c(
                        "slide-y-up-transition",
                        [
                          _c("upload-card", {
                            attrs: { title: "Curriculum Vitae", folder: "cv" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "3", sm: "6" } },
                    [
                      _c(
                        "slide-y-up-transition",
                        [
                          _c("upload-card", {
                            attrs: { title: "Proposal", folder: "proposal" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "3", sm: "6" } },
                    [
                      _c(
                        "slide-y-up-transition",
                        [
                          _c("upload-card", {
                            attrs: {
                              title: "Surat Keterangan",
                              folder: "sktmb"
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
                    "b-col",
                    { attrs: { lg: "3", sm: "6" } },
                    [
                      _c(
                        "slide-y-up-transition",
                        [
                          _c("upload-card", {
                            attrs: { title: "SiakNG", folder: "siakng" }
                          })
                        ],
                        1
                      )
                    ],
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue?vue&type=template&id=536cc8a9&":
/*!***********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue?vue&type=template&id=536cc8a9& ***!
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
  return _vm.loaded
    ? _c(
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
            [
              _c("strong", [
                _vm._v(_vm._s(_vm.title) + " "),
                _c("i", {
                  directives: [
                    {
                      name: "b-tooltip",
                      rawName: "v-b-tooltip.hover",
                      value: _vm.information,
                      expression: "information",
                      modifiers: { hover: true }
                    }
                  ],
                  staticClass: "fa fa-info-circle"
                })
              ])
            ]
          ),
          _vm._v(" "),
          !_vm.data.name
            ? _c(
                "b-card-body",
                { attrs: { "body-bg-variant": "danger" } },
                [
                  _c(
                    "div",
                    { staticClass: "d-flex w-100 justify-content-between" },
                    [
                      _c(
                        "h5",
                        {
                          staticClass: "mb-0 pt-5 pb-5",
                          staticStyle: { "align-self": "center" }
                        },
                        [_vm._v("No File Uploaded")]
                      ),
                      _vm._v(" "),
                      _c("i", {
                        staticClass: "fa fa-close fa-2x",
                        staticStyle: { "align-self": "center" }
                      })
                    ]
                  ),
                  _vm._v(" "),
                  _c("b-progress", {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value:
                          _vm.uploadPercentage > 0 &&
                          _vm.uploadPercentage < 100,
                        expression: "uploadPercentage>0 && uploadPercentage<100"
                      }
                    ],
                    attrs: {
                      height: "5px",
                      value: _vm.uploadPercentage,
                      variant: "success"
                    }
                  })
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.name
            ? _c("b-card-body", { attrs: { "body-bg-variant": "success" } }, [
                _c(
                  "div",
                  { staticClass: "d-flex w-100 justify-content-between" },
                  [
                    _c(
                      "h5",
                      {
                        staticClass: "mb-0",
                        staticStyle: { "align-self": "center" }
                      },
                      [_vm._v("File Uploaded")]
                    ),
                    _vm._v(" "),
                    _c("i", {
                      staticClass: "fa fa-check fa-2x",
                      staticStyle: { "align-self": "center" }
                    })
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _vm.data.name
            ? _c(
                "b-list-group",
                { attrs: { flush: "" } },
                [
                  _c("b-list-group-item", [
                    _c("strong", [_vm._v("Name: ")]),
                    _vm._v("\n      " + _vm._s(_vm.data.name) + "\n    ")
                  ]),
                  _vm._v(" "),
                  _c("b-list-group-item", [
                    _c("strong", [_vm._v("Size: ")]),
                    _vm._v(
                      "\n      " +
                        _vm._s(_vm._f("formatSize")(_vm.data.size)) +
                        "\n    "
                    )
                  ]),
                  _vm._v(" "),
                  _c("b-list-group-item", [
                    _c("strong", [_vm._v("Uploaded: ")]),
                    _vm._v("\n      " + _vm._s(_vm.data.date) + "\n    ")
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c(
            "b-card-body",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.uploadPercentage > 0,
                  expression: "uploadPercentage>0 "
                }
              ],
              attrs: { "body-bg-variant": "info" }
            },
            [
              _c(
                "div",
                { staticClass: "d-flex w-100 justify-content-between" },
                [
                  _c(
                    "h5",
                    {
                      staticClass: "mb-0",
                      staticStyle: { "align-self": "center" }
                    },
                    [_vm._v("Uploading")]
                  ),
                  _vm._v(" "),
                  _c("i", {
                    staticClass: "fa fa-spinner fa-spin fa-2x",
                    staticStyle: { "align-self": "center" }
                  })
                ]
              )
            ]
          ),
          _vm._v(" "),
          !_vm.data.name && !(_vm.uploadPercentage > 0)
            ? _c(
                "b-card-body",
                [
                  _c("b-form-file", {
                    ref: "upload",
                    attrs: {
                      accept:
                        "image/jpeg, image/png, image/gif, application/pdf",
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
            : _vm._e(),
          _vm._v(" "),
          !_vm.data.name && !(_vm.uploadPercentage > 0)
            ? _c(
                "b-button",
                {
                  staticClass: "mt-0",
                  staticStyle: {
                    "border-top-left-radius": "unset",
                    "border-top-right-radius": "unset"
                  },
                  attrs: {
                    disabled: _vm.file.length == 0,
                    block: "",
                    fluid: "",
                    variant: "success"
                  },
                  on: { click: _vm.uploadFile }
                },
                [
                  _c("i", { staticClass: "fa fa-upload" }),
                  _vm._v("\n    Upload\n    File")
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.name
            ? _c(
                "b-button",
                {
                  staticStyle: { "border-radius": "unset" },
                  attrs: { block: "", fluid: "", variant: "primary" },
                  on: { click: _vm.openFile }
                },
                [
                  _c("i", { staticClass: "fa fa-search" }),
                  _vm._v("\n    See File\n  ")
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.data.name
            ? _c(
                "b-button",
                {
                  staticClass: "mt-0",
                  staticStyle: {
                    "border-top-left-radius": "unset",
                    "border-top-right-radius": "unset"
                  },
                  attrs: { block: "", fluid: "", variant: "danger" },
                  on: {
                    click: function($event) {
                      _vm.trigerConfirmModal(
                        "Delete " + _vm.title,
                        "Are you sure want to delete this file?",
                        "deleteFile"
                      )
                    }
                  }
                },
                [
                  _c("i", { staticClass: "fa fa-trash" }),
                  _vm._v(" Delete File\n  ")
                ]
              )
            : _vm._e(),
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
              on: { ok: _vm.deleteFile },
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
    : _vm._e()
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue":
/*!******************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrationUpload_vue_vue_type_template_id_03a489f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrationUpload.vue?vue&type=template&id=03a489f9& */ "./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue?vue&type=template&id=03a489f9&");
/* harmony import */ var _RegistrationUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrationUpload.vue?vue&type=script&lang=js& */ "./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegistrationUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrationUpload_vue_vue_type_template_id_03a489f9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrationUpload_vue_vue_type_template_id_03a489f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/nonreg/views/registration/RegistrationUpload.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationUpload.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationUpload_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue?vue&type=template&id=03a489f9&":
/*!*************************************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue?vue&type=template&id=03a489f9& ***!
  \*************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationUpload_vue_vue_type_template_id_03a489f9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationUpload.vue?vue&type=template&id=03a489f9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/registration/RegistrationUpload.vue?vue&type=template&id=03a489f9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationUpload_vue_vue_type_template_id_03a489f9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationUpload_vue_vue_type_template_id_03a489f9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue":
/*!**********************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RegistrationUploadCard_vue_vue_type_template_id_536cc8a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RegistrationUploadCard.vue?vue&type=template&id=536cc8a9& */ "./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue?vue&type=template&id=536cc8a9&");
/* harmony import */ var _RegistrationUploadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./RegistrationUploadCard.vue?vue&type=script&lang=js& */ "./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _RegistrationUploadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _RegistrationUploadCard_vue_vue_type_template_id_536cc8a9___WEBPACK_IMPORTED_MODULE_0__["render"],
  _RegistrationUploadCard_vue_vue_type_template_id_536cc8a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationUploadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationUploadCard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationUploadCard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue?vue&type=template&id=536cc8a9&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue?vue&type=template&id=536cc8a9& ***!
  \*****************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationUploadCard_vue_vue_type_template_id_536cc8a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./RegistrationUploadCard.vue?vue&type=template&id=536cc8a9& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/nonreg/views/registration/RegistrationUploadCard.vue?vue&type=template&id=536cc8a9&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationUploadCard_vue_vue_type_template_id_536cc8a9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_RegistrationUploadCard_vue_vue_type_template_id_536cc8a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);