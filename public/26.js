(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{zTJA:function(t,a,e){"use strict";e.r(a);var r={name:"ContractAgreed",data:function(){return{loaded:!1,authorized:!1}},created:function(){this.getAgreedContract()},methods:{getAgreedContract:function(){var t=this;axios.get("api/auth/donor/contract-agreed?id=".concat(this.$route.query.id,"&email=").concat(this.$route.query.email,"&period=").concat(this.$route.query.period,"&token=").concat(this.$route.query.token)).then((function(a){t.loaded=!0,t.authorized=!0})).catch((function(a){t.loaded=!0,t.authorized=!1}))}}},i=e("KHd+"),n=Object(i.a)(r,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"app flex-row align-items-center"},[e("loading",{staticClass:"text-center",attrs:{active:!t.loaded,"can-cancel":!1,opacity:.9,height:60,loader:"dots",transition:"fade","background-color":"rgba(0,0,0,.85)",color:"rgba(255,255,255,.9)","is-full-page":!0}},[e("div",{staticClass:"text-center",staticStyle:{color:"rgba(255,255,255,.9)"},attrs:{slot:"after"},slot:"after"},[t._v("Mohon Tunggu...")])]),t._v(" "),t.loaded?e("div",{staticClass:"container"},[e("b-row",{staticClass:"justify-content-center"},[t.authorized?t._e():e("b-col",{attrs:{sm:"8"}},[e("b-alert",{attrs:{show:"",variant:"danger"}},[t._v("YOU ARE NOT ALLOWED TO ACCESS THIS PAGE.\n        ")])],1),t._v(" "),t.authorized?e("b-col",{attrs:{sm:"8"}},[e("header",{staticClass:"text-center",attrs:{id:"header"}},[e("h1",[e("strong",[t._v("TERIMA KASIH")])])]),t._v(" "),e("div",{staticClass:"text-center"},[e("i",{staticClass:"fa fa-heart display-1",staticStyle:{color:"red"},attrs:{id:"checkmark"}}),t._v(" "),e("p",[t._v("Terima kasih telah begabung bersama kami menjadi donatur di SEED Scholarship Periode ke-5. Kami telah\n            mengirimkan kontrak kerja sama, mohon cek email anda. Kontribusi anda sangat berharga bagi adik-adik kita\n            di Departemen Teknik Sipil UI. Tim kami akan segera menghubungi Anda")])])]):t._e()],1)],1):t._e()],1)}),[],!1,null,null,null);a.default=n.exports}}]);