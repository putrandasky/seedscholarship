(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"2/VV":function(a,e,n){(a.exports=n("I1BE")(!1)).push([a.i,"\n.bg-image-full[data-v-ec9cb062] {\n  /* Full height */\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/bg-donor-registration.jpg);\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n",""])},"623u":function(a,e,n){"use strict";var t=n("a718");n.n(t).a},"8+KV":function(a,e,n){"use strict";var t=n("XKFU"),r=n("CkkT")(0),o=n("LyE8")([].forEach,!0);t(t.P+t.F*!o,"Array",{forEach:function(a){return r(this,a,arguments[1])}})},BwRc:function(a,e,n){"use strict";n.r(e);n("bWfx"),n("8+KV"),n("INYr"),n("f3/d"),n("dRSK"),n("yt8O"),n("VRzm"),n("91GP"),n("CX2u");var t={name:"ReRegistration",components:{FaqModal:n("dnPE").a},data:function(){return{unathorizedMessage:"",isDisabled:!0,loaded:!1,authorized:!1,registered:!1,forms:[{id:"name",value:"",errors:null,state:null,icon:'<i class="icon-user">',type:"text",placeholder:"Nama Lengkap"},{id:"phone",value:"",errors:null,state:null,icon:'<i class="icon-phone">',type:"number",placeholder:"Nomor Telepon"},{id:"address",value:"",errors:null,state:null,icon:'<i class="icon-direction">',type:"text",placeholder:"Alamat Lengkap"},{id:"zip_code",value:"",errors:null,state:null,icon:'<i class="icon-direction">',type:"text",placeholder:"Kode Pos"},{id:"degree_level",value:null,errors:null,state:null,icon:'<i class="icon-graduation">',type:"select",placeholder:"-- Please select degree level--",options:[]},{id:"donation_category",value:null,errors:null,state:null,icon:'<i class="icon-list">',type:"select",placeholder:"-- Please select donation category for this period--",options:[{value:"AKTIF",text:"Donatur Aktif"},{value:"PASIF",text:"Donatur Pasif"}]},{id:"amount",value:"",errors:null,state:null,icon:"Rp",type:"number",placeholder:"Rencana Donasi"},{id:"accept_term_condition",value:null,errors:null,state:null,type:"checkbox"}],info:{period:null,year:null},errors:{donation_category:null,amount:null,accept_term_condition:null}}},created:function(){this.getAuthorization()},computed:{donationCategoryValue:function(){return this.forms.find((function(a){return"donation_category"==a.id})).value},amountDonationValue:function(){return this.forms.find((function(a){return"amount"==a.id})).value}},methods:{getAuthorization:function(){var a=this;this.isDisabled=!0,axios.get("api/donor/registration/re-registration/authorized?\n        id=".concat(this.$route.query.id,"&\n        email=").concat(this.$route.query.email,"&\n        period_id=").concat(this.$route.query.period_id,"&\n        token=").concat(this.$route.query.token)).then((function(e){a.isDisabled=!1,a.authorized=!0,a.loaded=!0,a.getFormsValue("name").value=e.data.data.donor.name,a.getFormsValue("phone").value=e.data.data.donor.phone,a.getFormsValue("address").value=e.data.data.donor.address,a.getFormsValue("zip_code").value=e.data.data.donor.zip_code,a.getFormsValue("degree_level").value=e.data.data.donor.degree_level?e.data.data.donor.degree_level.id:null;var n=a.forms.findIndex((function(a){return"degree_level"==a.id}));a.forms[n].options=a.mutateKey(e.data.data.degree_level),a.info.period=e.data.data.period,a.info.year=e.data.data.year})).catch((function(e){a.unathorizedMessage=e.response.data.message,a.isDisabled=!1,a.loaded=!0,a.authorized=!1}))},postData:function(){var a=this;this.loaded=!0;var e={};this.forms.forEach((function(a){e[a.id]=a.value})),e.period=this.info.period,e.year=this.info.year,axios.post("api/donor/registration/re-registration?\n        id=".concat(this.$route.query.id,"&\n        email=").concat(this.$route.query.email,"&\n        period_id=").concat(this.$route.query.period_id,"&\n        token=").concat(this.$route.query.token),e).then((function(e){a.$snotify.success("Registered On New Period","SUCCESS"),a.getFormsValue("donation_category").value=null,a.getFormsValue("amount").value=null,a.registered=!0,a.isDisabled=!1})).catch((function(e){a.$snotify.error(e.response.data.message,"ERROR"),a.isDisabled=!1;var n=e.response.data.errors;a.getFormsValue("name").errors=n.name?n.name[0]:"no-error",a.getFormsValue("phone").errors=n.phone?n.phone[0]:"no-error",a.getFormsValue("address").errors=n.address?n.address[0]:"no-error",a.getFormsValue("zip_code").errors=n.zip_code?n.zip_code[0]:"no-error",a.getFormsValue("donation_category").errors=n.donation_category?n.donation_category[0]:"no-error",a.getFormsValue("amount").errors=n.amount?n.amount[0]:"no-error",a.getFormsValue("degree_level").errors=n.degree_level?n.degree_level[0]:"no-error",a.getFormsValue("accept_term_condition").errors=n.accept_term_condition?n.accept_term_condition[0]:"no-error";var t=a;a.forms.forEach((function(a){t.getFormsValue(a.id).state="no-error"==a.errors||!a.errors&&null}))}))},getFormsValue:function(a){return this.forms.find((function(e){return e.id==a}))},mutateKey:function(a){return a.map((function(a){return{value:a.id,text:a.range||a.name||a.description,state:!1}}))}}},r=(n("623u"),n("KHd+")),o=Object(r.a)(t,(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",{staticClass:"app bg-image-full flex-row align-items-center"},[n("loading",{staticClass:"text-center",attrs:{active:a.isDisabled,"can-cancel":!1,opacity:.9,height:60,loader:"dots",transition:"fade","background-color":"rgba(0,0,0,.85)",color:"rgba(255,255,255,.9)","is-full-page":!0}},[n("div",{staticClass:"text-center",staticStyle:{color:"rgba(255,255,255,.9)"},attrs:{slot:"after"},slot:"after"},[a._v("\n      Mohon Tunggu...\n    ")])]),a._v(" "),a.loaded?n("div",{staticClass:"container"},[a.authorized?a._e():n("b-row",{staticClass:"justify-content-center"},[a.authorized?a._e():n("b-col",{attrs:{sm:"6"}},[n("b-alert",{attrs:{show:"",variant:"danger"}},[a._v("\n          "+a._s(a.unathorizedMessage)+".\n        ")])],1)],1),a._v(" "),a.authorized?n("b-row",{staticClass:"justify-content-center"},[a.registered?n("b-col",{staticClass:"text-white",attrs:{sm:"8"}},[n("header",{staticClass:"text-center",attrs:{id:"header"}},[n("h1",[n("strong",[a._v("TERIMA KASIH")])])]),a._v(" "),n("div",{staticClass:"text-center"},[n("i",{staticClass:"fa fa-heart display-1",staticStyle:{color:"red"},attrs:{id:"checkmark"}}),a._v(" "),n("p",[a._v("\n            Terima kasih telah mendaftar kembali menjadi donatur di SEED\n            Scholarship. Mohon cek email anda, untuk menyetujui data yang\n            sudah anda berikan agar kontrak kerja sama bisa segera kami\n            kirimkan.\n          ")])])]):a._e(),a._v(" "),a.registered?a._e():n("b-col",{attrs:{lg:"6",md:"8"}},[n("b-card",{staticClass:"mx-4",attrs:{"no-body":""}},[n("form",{staticClass:"card-body p-4",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),a.postData(e)}}},[n("h2",[a._v("Daftar Ulang Donatur")]),a._v(" "),n("div",{staticClass:"text-muted"},[a._v("\n              Hai\n              "),n("b",[a._v("\n                "+a._s(a.getFormsValue("name").value)+".\n              ")])]),a._v(" "),n("p",{staticClass:"text-muted"},[a._v("\n              Kamu akan mendaftar kembali menjadi donatur SEED Scholarship period "),n("b",[a._v(a._s(a.info.period))]),a._v(" tahun\n              "),n("b",[a._v(a._s(a.info.year))]),a._v(".\n\n            ")]),a._v(" "),n("p",{staticClass:"text-muted"},[a._v("\n              Silahkan mengisi form berikut untuk\n              kembali menjadi donatur kami.\n            ")]),a._v(" "),n("b-row",{staticClass:"form-group"},a._l(a.forms,(function(e,t){return n("b-col",{key:"form"+t,attrs:{sm:"12"}},[n("b-form-group",{attrs:{"invalid-feedback":e.errors,state:e.state}},["amount"!=e.id||null!=a.donationCategoryValue?n("b-input-group",["accept_term_condition"!=e.id?n("b-input-group-prepend",[n("b-input-group-text",{domProps:{innerHTML:a._s(e.icon)}})],1):a._e(),a._v(" "),"donation_category"!=e.id&&"accept_term_condition"!=e.id&&"degree_level"!=e.id?n("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:e.type,placeholder:e.placeholder,state:e.state},model:{value:e.value,callback:function(n){a.$set(e,"value",n)},expression:"v.value"}}):a._e(),a._v(" "),"donation_category"==e.id||"degree_level"==e.id?n("b-form-select",{attrs:{plain:"",options:e.options,state:e.state},model:{value:e.value,callback:function(n){a.$set(e,"value",n)},expression:"v.value"}},[n("template",{slot:"first"},[n("option",{attrs:{disabled:""},domProps:{value:null}},[a._v(a._s(e.placeholder))])])],2):a._e()],1):a._e(),a._v(" "),"amount"==e.id?n("div",{attrs:{slot:"description"},slot:"description"},["AKTIF"==a.donationCategoryValue?n("small",[a._v("Rencana donasi anda akan ditagihkan Rp.\n                      "+a._s(a._f("currency")(a.amountDonationValue))+" / bulan")]):a._e(),a._v(" "),"PASIF"==a.donationCategoryValue?n("small",[a._v("Rencana donasi anda Rp.\n                      "+a._s(a._f("currency")(a.amountDonationValue))+" /\n                      periode")]):a._e()]):a._e(),a._v(" "),"accept_term_condition"==e.id?n("b-form-checkbox",{attrs:{id:e.id,value:1,"unchecked-value":null,state:e.state},model:{value:e.value,callback:function(n){a.$set(e,"value",n)},expression:"v.value"}},[a._v("\n                    I already read & accept the terms and conditions.\n                  ")]):a._e()],1)],1)})),1),a._v(" "),n("b-button",{attrs:{disabled:a.isDisabled,type:"submit",variant:"success",block:""}},[n("i",{directives:[{name:"show",rawName:"v-show",value:a.isDisabled,expression:"isDisabled"}],staticClass:"fa fa-spinner fa-spin"}),a._v("\n              Submit")])],1)])],1),a._v(" "),n("faq-modal")],1):a._e()],1):a._e()],1)}),[],!1,null,"ec9cb062",null);e.default=o.exports},INYr:function(a,e,n){"use strict";var t=n("XKFU"),r=n("CkkT")(6),o="findIndex",i=!0;o in[]&&Array(1)[o]((function(){i=!1})),t(t.P+t.F*i,"Array",{findIndex:function(a){return r(this,a,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")(o)},a718:function(a,e,n){var t=n("2/VV");"string"==typeof t&&(t=[[a.i,t,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};n("aET+")(t,r);t.locals&&(a.exports=t.locals)},dRSK:function(a,e,n){"use strict";var t=n("XKFU"),r=n("CkkT")(5),o=!0;"find"in[]&&Array(1).find((function(){o=!1})),t(t.P+t.F*o,"Array",{find:function(a){return r(this,a,arguments.length>1?arguments[1]:void 0)}}),n("nGyu")("find")},dnPE:function(a,e,n){"use strict";var t={name:"AuthRegisterFaq",data:function(){return{faqModal:!1}},created:function(){},methods:{}},r=n("KHd+"),o=Object(r.a)(t,(function(){var a=this,e=a.$createElement,n=a._self._c||e;return n("div",[n("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Term Conditions & FAQ",expression:"'Term Conditions & FAQ'",modifiers:{hover:!0,left:!0}}],staticClass:"float-button",on:{click:function(e){a.faqModal=!0}}},[n("i",{staticClass:"fa fa-question"})]),a._v(" "),n("b-modal",{attrs:{"hide-footer":!0,"no-close-on-esc":!0,"hide-header-close":!1,"no-close-on-backdrop":!1,size:"xl",title:"Term, Conditions, & Frequently Asked Question"},model:{value:a.faqModal,callback:function(e){a.faqModal=e},expression:"faqModal"}},[n("p",[a._v("Tim SEED Scholarship mengajak dan membuka peluang sebesar-besarnya bagi para calon donatur yang ingin ikut\n      berpartisipasi dalam keberlangsungan program beasiswa SEED Scholarship. Demi memberikan kenyamanan dan\n      menyesuaikan kemampuan calon donatur, kami memberikan pilihan 2 (dua) kategori donatur sebagai berikut")]),a._v(" "),n("ol",[n("li",[a._v("\n        Donatur Aktif adalah donatur yang memberikan donasi dengan jumlah minimal Rp. 100.000,00 rutin setiap bulan\n        selama 1 periode.\n        "),a._v(" "),n("br"),a._v("\n        Donatur akan diberikan pengingat atau himbauan untuk melakukan donasi setiap\n        bulannya oleh narahubung dari tim kami dan email reminder kami. ")]),a._v(" "),n("li",[a._v("Donatur Pasif adalah donatur yang memberikan donasi dengan jumlah yang tidak ditetapkan sebanyak minimal 1\n        (satu) kali dalam 1 periode. "),n("br"),a._v(" "),a._v("\n        Jumlah nilai yang dimasukan dalam rencana donasi adalah target atau estimasi jumlah\n        yang akan didonasikan. Kami menyarankan anda namun tidak mewajibkan. Angka\n        yang Anda masukan akan digunakan dalam perencanaan keuangan kami. ")])]),a._v(" "),n("hr"),a._v(" "),n("strong",[a._v("Q : Kapan donasi dibayarkan?")]),a._v(" "),n("p",[a._v("A : Periode pembayaran donasi dibayarkan tanggal 25 s/d 5 bulan setelahnya. Contoh: Untuk pembayaran bulan\n      November 2015, maka donasi dapat dibayarkan sejak tanggal 25 November 2015 s/d 5 Desember 2015")]),a._v(" "),n("strong",[a._v("Q : Kapan pembukaan pendaftaran donatur?")]),a._v(" "),n("p",[a._v("A : Pendaftaran donatur akan dibuka sepanjang tahun. Anda cukup mengisi formulir pendaftaran kemudian tim PR\n      akan mengubungi Anda untuk memberikan informasi selengkapnya")]),a._v(" "),n("strong",[a._v("Q: Untuk donatur aktif, dapatkah donasi dibayarkan langsung untuk beberapa bulan ke depan untuk\n      menghindari lupa transfer ?")]),a._v(" "),n("p",[a._v("A : Donasi bisa dibayarkan langsung untuk beberapa bulan donasi, misalkan donatur dengan rencana donasi Rp. 100.000,- per bulan akan langsung berdonasi sebesar Rp. 300.000,- untuk 3 bulan\n      dst. Team finance akan mencatatnya. Yang ditekankan adalah dalam satu periode (selama 1 tahun) total donasi\n      yang dikumpulkan adalah Rp 1.200.000,-\n\n      Kategori Donatur Aktif*\n    ")])])],1)}),[],!1,null,null,null);e.a=o.exports}}]);