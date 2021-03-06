(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.for-each */ "./node_modules/core-js/modules/es6.array.for-each.js");
/* harmony import */ var core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_for_each__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _AuthRegisterFaqLink_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AuthRegisterFaqLink.vue */ "./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue");
/* harmony import */ var _global_components_WaButton_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../global/components/WaButton.vue */ "./resources/assets/js/global/components/WaButton.vue");



//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import FaqModal from './AuthRegisterFaq.vue';


/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AuthRegister',
  components: {
    FaqLink: _AuthRegisterFaqLink_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    WaButton: _global_components_WaButton_vue__WEBPACK_IMPORTED_MODULE_4__["default"]
  },
  data: function data() {
    return {
      isClosed: false,
      isDisabled: false,
      periodOptions: [],
      departmentOptions: [],
      errors: {
        name: '',
        year: '',
        phone: '',
        email: '',
        period_id: '',
        department_id: '',
        initial: '',
        password: ''
      },
      input: {
        name: '',
        year: '',
        phone: '',
        period_id: null,
        department_id: null,
        email: '',
        password: '',
        password_confirmation: ''
      }
    };
  },
  created: function created() {
    this.chechOpenRegistration();
  },
  computed: {
    maxYear: function maxYear() {
      return new Date().getFullYear() - 1;
    },
    minYear: function minYear() {
      return new Date().getFullYear() - 7;
    },
    loaded: function loaded() {
      return this.periodOptions.length > 0 && this.departmentOptions.length > 0 ? true : false;
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
    statePeriod: function statePeriod() {
      return this.errors.period_id == 'no-error' ? true : this.errors.period_id ? false : null;
    },
    stateYear: function stateYear() {
      return this.errors.year == 'no-error' ? true : this.errors.year ? false : null;
    },
    stateInitial: function stateInitial() {
      return this.errors.initial == 'no-error' ? true : this.errors.initial ? false : null;
    },
    statePassword: function statePassword() {
      return this.errors.password == 'no-error' ? true : this.errors.password ? false : null;
    },
    stateDepartment: function stateDepartment() {
      return this.errors.department_id == 'no-error' ? true : this.errors.department_id ? false : null;
    }
  },
  methods: {
    chechOpenRegistration: function chechOpenRegistration() {
      var _this = this;

      axios.get("api/common/open-registration/awardee").then(function (response) {
        if (response.data) {
          _this.getPeriod();

          _this.getDepartment();

          return;
        } else {
          _this.isClosed = true;
        }
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getPeriod: function getPeriod() {
      var _this2 = this;

      axios.get("api/period-active").then(function (response) {
        response.data.forEach(function (obj) {
          obj.value = obj.id;
          obj.text = "Seedscholarship #".concat(obj.period, " - Year ").concat(obj.year);
          delete obj.id;
          delete obj.period;
          delete obj.year;
        });
        _this2.periodOptions = response.data;
        console.log(_this2.periodOptions);
      })["catch"](function (error) {
        console.log(error);
      });
    },
    getDepartment: function getDepartment() {
      var _this3 = this;

      axios.get("api/college-department").then(function (response) {
        response.data.forEach(function (obj) {
          obj.value = obj.id;
          obj.text = obj.department;
          delete obj.id;
          delete obj.department;
          delete obj.awardees_count;
        });
        _this3.departmentOptions = response.data;
      })["catch"](function (error) {
        console.log(error);
      });
    },
    register: function register() {
      var _this4 = this;

      this.isDisabled = true;
      axios.post('api/auth/awardee/register', this.input).then(function (response) {
        _this4.$snotify.success("New Awardee Registered", 'SUCCESS');

        _this4.input.name = '', _this4.input.period_id = null, _this4.input.department_id = null, _this4.input.email = '', _this4.input.password = '', _this4.input.password_confirmation = '';
        _this4.isDisabled = false;

        _this4.$router.replace({
          name: 'RegistrationUpload',
          query: {
            id: response.data.id,
            email: response.data.email,
            registration_code: response.data.registration_code,
            period_id: response.data.period_id
          }
        });
      })["catch"](function (error) {
        // console.log(error.response.data);
        _this4.$snotify.error(error.response.data.message, 'ERROR');

        _this4.isDisabled = false;
        var errors = error.response.data.errors; // console.log(errors.name);

        _this4.errors.name = errors.name ? errors.name[0] : 'no-error';
        _this4.errors.email = errors.email ? errors.email[0] : 'no-error';
        _this4.errors.phone = errors.phone ? errors.phone[0] : 'no-error';
        _this4.errors.year = errors.year ? errors.year[0] : 'no-error';
        _this4.errors.period_id = errors.period_id ? errors.period_id[0] : 'no-error';
        _this4.errors.department_id = errors.department_id ? errors.department_id[0] : 'no-error';
        _this4.errors.password = errors.password ? errors.password[0] : 'no-error';
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'AuthRegisterFaq',
  data: function data() {
    return {
      faqModal: false
    };
  },
  created: function created() {},
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/global/components/WaButton.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/global/components/WaButton.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.index-of */ "./node_modules/core-js/modules/es6.array.index-of.js");
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_0__);

//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'WaButton',
  data: function data() {
    return {};
  },
  created: function created() {},
  methods: {
    sendWhatsapp: function sendWhatsapp(number) {
      var yourMessage = "Halo, mau tanya tentang  SEED Scholarship";
      var message = yourMessage.split(' ').join('%20');
      var ua = navigator.userAgent.toLowerCase();
      var isAndroid = ua.indexOf("android") > -1; //&& ua.indexOf("mobile");

      var isIos = ua.indexOf("iphone") > -1; //&& ua.indexOf("mobile");

      if (isAndroid || isIos) {
        // Do something!
        // Redirect to Android-site?
        var win = window.open('whatsapp://send?phone=' + number + '&text=%20' + message, '_blank');
        win.focus();
      } else {
        var _win = window.open('https://web.whatsapp.com/send?phone=' + number + '&text=%20' + message, '_blank');

        _win.focus();
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.for-each.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.for-each.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $forEach = __webpack_require__(/*! ./_array-methods */ "./node_modules/core-js/modules/_array-methods.js")(0);
var STRICT = __webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.index-of.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.index-of.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $indexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(/*! ./_strict-method */ "./node_modules/core-js/modules/_strict-method.js")($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=style&index=0&id=682f2a1d&scoped=true&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=style&index=0&id=682f2a1d&scoped=true&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.bg-image-full[data-v-682f2a1d] {\n  /* Full height */\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/bg-awardee-registration.jpg);\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/global/components/WaButton.vue?vue&type=style&index=0&id=164cfc5b&scoped=true&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/global/components/WaButton.vue?vue&type=style&index=0&id=164cfc5b&scoped=true&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.float[data-v-164cfc5b] {\n  position: fixed;\n  width: 60px;\n  height: 60px;\n  bottom: 40px;\n  right: 40px;\n  background-color: #25d366;\n  color: #FFF;\n  border-radius: 50px;\n  text-align: center;\n  font-size: 30px;\n  box-shadow: 2px 2px 3px #999;\n  z-index: 100;\n}\n.my-float[data-v-164cfc5b] {\n  margin-top: 16px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=style&index=0&id=682f2a1d&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=style&index=0&id=682f2a1d&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegister.vue?vue&type=style&index=0&id=682f2a1d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=style&index=0&id=682f2a1d&scoped=true&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/global/components/WaButton.vue?vue&type=style&index=0&id=164cfc5b&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--5-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--5-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/global/components/WaButton.vue?vue&type=style&index=0&id=164cfc5b&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WaButton.vue?vue&type=style&index=0&id=164cfc5b&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/global/components/WaButton.vue?vue&type=style&index=0&id=164cfc5b&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=template&id=682f2a1d&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=template&id=682f2a1d&scoped=true& ***!
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
    "div",
    { staticClass: "app bg-image-full flex-row align-items-center" },
    [
      _c(
        "loading",
        {
          staticClass: "text-center",
          attrs: {
            active: _vm.isDisabled,
            "can-cancel": false,
            opacity: 0.9,
            height: 60,
            loader: "dots",
            transition: "fade",
            "background-color": "rgba(0,0,0,.85)",
            color: "rgba(255,255,255,.9)",
            "is-full-page": true
          }
        },
        [
          _c(
            "div",
            {
              staticClass: "text-center",
              staticStyle: { color: "rgba(255,255,255,.9)" },
              attrs: { slot: "after" },
              slot: "after"
            },
            [_vm._v("\n      Mohon Tunggu...\n    ")]
          )
        ]
      ),
      _vm._v(" "),
      _vm.isClosed
        ? _c(
            "div",
            { staticClass: "container text-white" },
            [
              _c(
                "b-row",
                { staticClass: "justify-content-center" },
                [
                  _c("b-col", { attrs: { sm: "8" } }, [
                    _c("div", { staticClass: "text-center" }, [
                      _c("img", {
                        staticStyle: { "max-height": "150px" },
                        attrs: { src: "/images/Seedlogo2.png", alt: "" }
                      })
                    ]),
                    _vm._v(" "),
                    _c(
                      "header",
                      {
                        staticClass: "text-center my-2",
                        attrs: { id: "header" }
                      },
                      [
                        _c("h1", [
                          _c("strong", [_vm._v("PENDAFTARAN DITUTUP")])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "text-center" }, [
                      _c("p", [_vm._v("Silahkan mencoba dilain kesempatan.")])
                    ])
                  ])
                ],
                1
              )
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      !_vm.isClosed
        ? _c(
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
              staticClass: "container"
            },
            [
              _c(
                "b-row",
                { staticClass: "justify-content-center" },
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6", md: "8" } },
                    [
                      _c(
                        "b-card",
                        { staticClass: "p-4", attrs: { "no-body": "" } },
                        [
                          _c("div", { staticClass: "text-center mb-2" }, [
                            _c("img", {
                              staticClass: "mb-4",
                              staticStyle: { "max-height": "150px" },
                              attrs: {
                                src: "/images/Seedlogo-small.png",
                                alt: ""
                              }
                            }),
                            _vm._v(" "),
                            _c("h3", [_vm._v("Regular Awardee Registration")])
                          ]),
                          _vm._v(" "),
                          _c(
                            "form",
                            {
                              staticClass: "card-body p-0",
                              attrs: { autocomplete: "off" },
                              on: {
                                submit: function($event) {
                                  $event.preventDefault()
                                  return _vm.register($event)
                                }
                              }
                            },
                            [
                              _c(
                                "b-row",
                                { staticClass: "form-group" },
                                [
                                  _c(
                                    "b-col",
                                    { attrs: { sm: "12" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback": _vm.errors.name,
                                            state: _vm.stateName
                                          }
                                        },
                                        [
                                          _c(
                                            "b-input-group",
                                            [
                                              _c(
                                                "b-input-group-prepend",
                                                [
                                                  _c("b-input-group-text", [
                                                    _c("i", {
                                                      staticClass: "icon-user"
                                                    })
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("b-input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  autocomplete: "off",
                                                  type: "text",
                                                  placeholder: "Full Name",
                                                  state: _vm.stateName
                                                },
                                                model: {
                                                  value: _vm.input.name,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.input,
                                                      "name",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "input.name"
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
                                    { attrs: { sm: "12" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.errors.email,
                                            state: _vm.stateEmail
                                          }
                                        },
                                        [
                                          _c(
                                            "b-input-group",
                                            {},
                                            [
                                              _c(
                                                "b-input-group-prepend",
                                                [
                                                  _c("b-input-group-text", [
                                                    _vm._v("@")
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("b-input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  autocomplete: "off",
                                                  type: "text",
                                                  placeholder: "Active Email",
                                                  state: _vm.stateEmail
                                                },
                                                model: {
                                                  value: _vm.input.email,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.input,
                                                      "email",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "input.email"
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
                                    { attrs: { sm: "6" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback": _vm.errors.year,
                                            state: _vm.stateYear
                                          }
                                        },
                                        [
                                          _c(
                                            "b-input-group",
                                            {},
                                            [
                                              _c(
                                                "b-input-group-prepend",
                                                [
                                                  _c("b-input-group-text", [
                                                    _c("i", {
                                                      staticClass:
                                                        "icon-calendar"
                                                    })
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("b-input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  autocomplete: "off",
                                                  type: "number",
                                                  min: _vm.minYear,
                                                  max: _vm.maxYear,
                                                  placeholder:
                                                    "Year (Angkatan)",
                                                  state: _vm.stateYear
                                                },
                                                model: {
                                                  value: _vm.input.year,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.input,
                                                      "year",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "input.year"
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
                                    { attrs: { sm: "6" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.errors.phone,
                                            state: _vm.statePhone
                                          }
                                        },
                                        [
                                          _c(
                                            "b-input-group",
                                            {},
                                            [
                                              _c(
                                                "b-input-group-prepend",
                                                [
                                                  _c("b-input-group-text", [
                                                    _c("i", {
                                                      staticClass: "icon-phone"
                                                    })
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c("b-input", {
                                                staticClass: "form-control",
                                                attrs: {
                                                  autocomplete: "off",
                                                  type: "number",
                                                  placeholder: "Phone Number",
                                                  state: _vm.statePhone
                                                },
                                                model: {
                                                  value: _vm.input.phone,
                                                  callback: function($$v) {
                                                    _vm.$set(
                                                      _vm.input,
                                                      "phone",
                                                      $$v
                                                    )
                                                  },
                                                  expression: "input.phone"
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
                                    { attrs: { sm: "12" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.errors.department_id,
                                            state: _vm.stateDepartment
                                          }
                                        },
                                        [
                                          _c(
                                            "b-input-group",
                                            {},
                                            [
                                              _c(
                                                "b-input-group-prepend",
                                                [
                                                  _c("b-input-group-text", [
                                                    _c("i", {
                                                      staticClass: "icon-list"
                                                    })
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-select",
                                                {
                                                  attrs: {
                                                    plain: "",
                                                    id: "department",
                                                    options:
                                                      _vm.departmentOptions,
                                                    state: _vm.stateDepartment
                                                  },
                                                  model: {
                                                    value:
                                                      _vm.input.department_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.input,
                                                        "department_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "input.department_id"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "template",
                                                    { slot: "first" },
                                                    [
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            disabled: ""
                                                          },
                                                          domProps: {
                                                            value: null
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "-- Please select field of study --"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ],
                                                2
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
                                  _c(
                                    "b-col",
                                    { attrs: { sm: "12" } },
                                    [
                                      _c(
                                        "b-form-group",
                                        {
                                          attrs: {
                                            "invalid-feedback":
                                              _vm.errors.period_id,
                                            state: _vm.statePeriod
                                          }
                                        },
                                        [
                                          _c(
                                            "b-input-group",
                                            {},
                                            [
                                              _c(
                                                "b-input-group-prepend",
                                                [
                                                  _c("b-input-group-text", [
                                                    _c("i", {
                                                      staticClass: "icon-list"
                                                    })
                                                  ])
                                                ],
                                                1
                                              ),
                                              _vm._v(" "),
                                              _c(
                                                "b-form-select",
                                                {
                                                  attrs: {
                                                    plain: "",
                                                    id: "period",
                                                    options: _vm.periodOptions,
                                                    state: _vm.statePeriod
                                                  },
                                                  model: {
                                                    value: _vm.input.period_id,
                                                    callback: function($$v) {
                                                      _vm.$set(
                                                        _vm.input,
                                                        "period_id",
                                                        $$v
                                                      )
                                                    },
                                                    expression:
                                                      "input.period_id"
                                                  }
                                                },
                                                [
                                                  _c(
                                                    "template",
                                                    { slot: "first" },
                                                    [
                                                      _c(
                                                        "option",
                                                        {
                                                          attrs: {
                                                            disabled: ""
                                                          },
                                                          domProps: {
                                                            value: null
                                                          }
                                                        },
                                                        [
                                                          _vm._v(
                                                            "-- Please select period --"
                                                          )
                                                        ]
                                                      )
                                                    ]
                                                  )
                                                ],
                                                2
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
                                  _c(
                                    "b-col",
                                    { attrs: { sm: "12" } },
                                    [
                                      _vm._v(
                                        "\n                I already read & accept the\n                "
                                      ),
                                      _c("faq-link")
                                    ],
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: {
                                    disabled: _vm.isDisabled,
                                    type: "submit",
                                    variant: "success",
                                    block: ""
                                  }
                                },
                                [
                                  _c("i", {
                                    directives: [
                                      {
                                        name: "show",
                                        rawName: "v-show",
                                        value: _vm.isDisabled,
                                        expression: "isDisabled"
                                      }
                                    ],
                                    staticClass: "fa fa-spinner fa-spin"
                                  }),
                                  _vm._v("\n              Submit")
                                ]
                              )
                            ],
                            1
                          )
                        ]
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
        : _vm._e(),
      _vm._v(" "),
      _c("wa-button")
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue?vue&type=template&id=7448ef83&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue?vue&type=template&id=7448ef83& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "span",
    [
      _c(
        "b-link",
        {
          attrs: { href: "#" },
          on: {
            click: function($event) {
              _vm.faqModal = true
            }
          }
        },
        [_vm._v("terms and conditions.")]
      ),
      _vm._v(" "),
      _c(
        "b-modal",
        {
          attrs: {
            "hide-footer": true,
            "no-close-on-esc": true,
            "hide-header-close": false,
            "no-close-on-backdrop": false,
            size: "xl",
            title: "Term, Conditions, & Frequently Asked Question"
          },
          model: {
            value: _vm.faqModal,
            callback: function($$v) {
              _vm.faqModal = $$v
            },
            expression: "faqModal"
          }
        },
        [
          _c("strong", [
            _vm._v("Pastikan kamu memenuhi persyaratan dibawah ini")
          ]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [
              _vm._v(
                "Mahasiswa tahun pertama Departemen Teknik Sipil, Universitas Indonesia."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Memiliki keterbatasan finansial dan berkeinginan tinggi untuk belajar."
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Bersedia mengikuti program pengembangan diri selama menerima beasiswa."
              )
            ])
          ]),
          _vm._v(" "),
          _c("strong", [_vm._v("Kemudian, siapkan berkas pendaftaran")]),
          _vm._v(" "),
          _c("ol", [
            _c("li", [
              _vm._v(
                "Formulir pendaftaran SEED Scholarship yang sudah diisi (Bisa diunduh setelah registrasi)"
              )
            ]),
            _vm._v(" "),
            _c("li", [
              _vm._v(
                "Essai dengan topik : Mengapa saya pantas mendapatkan beasiswa SEED (300-500 kata)"
              )
            ]),
            _vm._v(" "),
            _c("li", [_vm._v("Salinan slip gaji orangtua")]),
            _vm._v(" "),
            _c("li", [_vm._v("Rekening listrik 3 bulan terakhir")]),
            _vm._v(" "),
            _c("li", [
              _vm._v("Print out halaman ringkasan dan riwayat SIAKNG")
            ]),
            _vm._v(" "),
            _c("li", [_vm._v("Foto close up casual 3x4")]),
            _vm._v(" "),
            _c("li", [_vm._v("Surat keterangan bukan perokok aktif")])
          ]),
          _vm._v(" "),
          _c("strong", [_vm._v("Tunggu konfirmasi dari Tim Recruitment SEED")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Kandidat terpilih untuk mendapatkan beasiswa akan kami hubungi untuk mengikuti wawancara"
            )
          ]),
          _vm._v(" "),
          _c("hr"),
          _vm._v(" "),
          _c("strong", [
            _vm._v("Q : Kapan pembukaan pendaftaran penerima beasiswa?")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v("A : Pendaftaran akan dibuka pada akhir semester 1")
          ]),
          _vm._v(" "),
          _c("strong", [
            _vm._v("Q : Apa saja tahap seleksi Calon Penerima Beasiswa?")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "A : Seleksi terdiri dari 2 tahapan yaitu seleksi administrasi dan interview."
            )
          ]),
          _vm._v(" "),
          _c("strong", [
            _vm._v(
              "Q : Apa saja tahap syarat administrasi untuk seleksi Calon Penerima Beasiswa?"
            )
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "A : Team Recruitment akan melakukan screening dari CV, Essay, Transkrip Nilai dan data kondisi finansial keluarga yang didukung dengan data berupa slip gaji orang tua dan atau rekening listrik. Apabila tidak ada slip gaji maka dilengkapi juga essay mengenai kondisi finansial keluarga."
            )
          ]),
          _vm._v(" "),
          _c("strong", [_vm._v("Q : Berapa jumlah Penerima Beasiswa ?")]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "Jumlah mahasiswa yang akan menerima beasiswa akan disesuaikan dengan hasil proses seleksi. SEED Scholarship memiliki kuota penerima beasiswa hingga 10 awardee"
            )
          ]),
          _vm._v(" "),
          _c("strong", [
            _vm._v("Q : Berapa jumlah besaran beasiswa diberikan?")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "A : Besaran beasiswa yang diberikan oleh SEEDS adalah sebesar Rp 3.600.000,- untuk satu semester."
            )
          ]),
          _vm._v(" "),
          _c("strong", [
            _vm._v("Q : Kapan beasiswa diberikan kepada Penerima Beasiswa?")
          ]),
          _vm._v(" "),
          _c("p", [
            _vm._v(
              "A : Beasiswa akan diberikan pada bulan pertama atau paling lambat bulan kedua dari awal semester berjalan"
            )
          ])
        ]
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/global/components/WaButton.vue?vue&type=template&id=164cfc5b&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/assets/js/global/components/WaButton.vue?vue&type=template&id=164cfc5b&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
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
    "a",
    {
      staticClass: "float",
      attrs: { href: "#" },
      on: {
        click: function($event) {
          $event.preventDefault()
          return _vm.sendWhatsapp("+6281290001300")
        }
      }
    },
    [_c("i", { staticClass: "fa fa-whatsapp my-float" })]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/assets/js/awardee/views/auth/AuthRegister.vue":
/*!*****************************************************************!*\
  !*** ./resources/assets/js/awardee/views/auth/AuthRegister.vue ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthRegister_vue_vue_type_template_id_682f2a1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthRegister.vue?vue&type=template&id=682f2a1d&scoped=true& */ "./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=template&id=682f2a1d&scoped=true&");
/* harmony import */ var _AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthRegister.vue?vue&type=script&lang=js& */ "./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AuthRegister_vue_vue_type_style_index_0_id_682f2a1d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthRegister.vue?vue&type=style&index=0&id=682f2a1d&scoped=true&lang=css& */ "./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=style&index=0&id=682f2a1d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthRegister_vue_vue_type_template_id_682f2a1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthRegister_vue_vue_type_template_id_682f2a1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "682f2a1d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/awardee/views/auth/AuthRegister.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegister.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=style&index=0&id=682f2a1d&scoped=true&lang=css&":
/*!**************************************************************************************************************************!*\
  !*** ./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=style&index=0&id=682f2a1d&scoped=true&lang=css& ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_style_index_0_id_682f2a1d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader??ref--5-1!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegister.vue?vue&type=style&index=0&id=682f2a1d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=style&index=0&id=682f2a1d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_style_index_0_id_682f2a1d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_style_index_0_id_682f2a1d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_style_index_0_id_682f2a1d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_style_index_0_id_682f2a1d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_style_index_0_id_682f2a1d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=template&id=682f2a1d&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=template&id=682f2a1d&scoped=true& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_template_id_682f2a1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegister.vue?vue&type=template&id=682f2a1d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegister.vue?vue&type=template&id=682f2a1d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_template_id_682f2a1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegister_vue_vue_type_template_id_682f2a1d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue":
/*!************************************************************************!*\
  !*** ./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AuthRegisterFaqLink_vue_vue_type_template_id_7448ef83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AuthRegisterFaqLink.vue?vue&type=template&id=7448ef83& */ "./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue?vue&type=template&id=7448ef83&");
/* harmony import */ var _AuthRegisterFaqLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AuthRegisterFaqLink.vue?vue&type=script&lang=js& */ "./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AuthRegisterFaqLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AuthRegisterFaqLink_vue_vue_type_template_id_7448ef83___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AuthRegisterFaqLink_vue_vue_type_template_id_7448ef83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************!*\
  !*** ./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaqLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegisterFaqLink.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaqLink_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue?vue&type=template&id=7448ef83&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue?vue&type=template&id=7448ef83& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaqLink_vue_vue_type_template_id_7448ef83___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./AuthRegisterFaqLink.vue?vue&type=template&id=7448ef83& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/awardee/views/auth/AuthRegisterFaqLink.vue?vue&type=template&id=7448ef83&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaqLink_vue_vue_type_template_id_7448ef83___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AuthRegisterFaqLink_vue_vue_type_template_id_7448ef83___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/assets/js/global/components/WaButton.vue":
/*!************************************************************!*\
  !*** ./resources/assets/js/global/components/WaButton.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _WaButton_vue_vue_type_template_id_164cfc5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WaButton.vue?vue&type=template&id=164cfc5b&scoped=true& */ "./resources/assets/js/global/components/WaButton.vue?vue&type=template&id=164cfc5b&scoped=true&");
/* harmony import */ var _WaButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./WaButton.vue?vue&type=script&lang=js& */ "./resources/assets/js/global/components/WaButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _WaButton_vue_vue_type_style_index_0_id_164cfc5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./WaButton.vue?vue&type=style&index=0&id=164cfc5b&scoped=true&lang=css& */ "./resources/assets/js/global/components/WaButton.vue?vue&type=style&index=0&id=164cfc5b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _WaButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _WaButton_vue_vue_type_template_id_164cfc5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _WaButton_vue_vue_type_template_id_164cfc5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "164cfc5b",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/assets/js/global/components/WaButton.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/assets/js/global/components/WaButton.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/assets/js/global/components/WaButton.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WaButton.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/global/components/WaButton.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_WaButton_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/assets/js/global/components/WaButton.vue?vue&type=style&index=0&id=164cfc5b&scoped=true&lang=css&":
/*!*********************************************************************************************************************!*\
  !*** ./resources/assets/js/global/components/WaButton.vue?vue&type=style&index=0&id=164cfc5b&scoped=true&lang=css& ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WaButton_vue_vue_type_style_index_0_id_164cfc5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--5-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--5-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WaButton.vue?vue&type=style&index=0&id=164cfc5b&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/global/components/WaButton.vue?vue&type=style&index=0&id=164cfc5b&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WaButton_vue_vue_type_style_index_0_id_164cfc5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WaButton_vue_vue_type_style_index_0_id_164cfc5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WaButton_vue_vue_type_style_index_0_id_164cfc5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WaButton_vue_vue_type_style_index_0_id_164cfc5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_5_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_5_2_node_modules_vue_loader_lib_index_js_vue_loader_options_WaButton_vue_vue_type_style_index_0_id_164cfc5b_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/assets/js/global/components/WaButton.vue?vue&type=template&id=164cfc5b&scoped=true&":
/*!*******************************************************************************************************!*\
  !*** ./resources/assets/js/global/components/WaButton.vue?vue&type=template&id=164cfc5b&scoped=true& ***!
  \*******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaButton_vue_vue_type_template_id_164cfc5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./WaButton.vue?vue&type=template&id=164cfc5b&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/assets/js/global/components/WaButton.vue?vue&type=template&id=164cfc5b&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaButton_vue_vue_type_template_id_164cfc5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_WaButton_vue_vue_type_template_id_164cfc5b_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);