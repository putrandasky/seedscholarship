(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"5Sry":function(a,e,t){"use strict";t.r(e);t("pIFo"),t("8+KV"),t("f3/d");var i={name:"AuthRegisterFaq",data:function(){return{faqModal:!1}},created:function(){},methods:{}},r=t("KHd+"),n={name:"AuthRegister",components:{FaqModal:Object(r.a)(i,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Term Conditions & FAQ",expression:"'Term Conditions & FAQ'",modifiers:{hover:!0,left:!0}}],staticClass:"float-button",on:{click:function(e){a.faqModal=!0}}},[t("i",{staticClass:"fa fa-question"})]),a._v(" "),t("b-modal",{attrs:{"hide-footer":!0,"no-close-on-esc":!0,"hide-header-close":!1,"no-close-on-backdrop":!1,size:"xl",title:"Term, Conditions, & Frequently Asked Question"},model:{value:a.faqModal,callback:function(e){a.faqModal=e},expression:"faqModal"}},[t("strong",[a._v("Pastikan kamu memenuhi persyaratan dibawah ini")]),a._v(" "),t("ol",[t("li",[a._v("Mahasiswa tahun pertama Departemen Teknik Sipil, Universitas Indonesia.")]),a._v(" "),t("li",[a._v("Memiliki keterbatasan finansial dan berkeinginan tinggi untuk belajar.")]),a._v(" "),t("li",[a._v("Bersedia mengikuti program pengembangan diri selama menerima beasiswa.")])]),a._v(" "),t("strong",[a._v("Kemudian, siapkan berkas pendaftaran")]),a._v(" "),t("ol",[t("li",[a._v("CV (format bebas dengan informasi yang wajib ada yaitu: data diri, riwayat pendidikan, kemampuan bahasa, pengalaman kerja, status pekerjaan/pendidikan anggota keluarga)")]),a._v(" "),t("li",[a._v("Essai dengan topik : Mengapa saya pantas mendapatkan beasiswa SEED (300-500 kata)")]),a._v(" "),t("li",[a._v("Salinan slip gaji orangtua dan/atau rekening listrik")]),a._v(" "),t("li",[a._v("Print out halaman ringkasan dan riwayat SIAKNG")])]),a._v(" "),t("strong",[a._v("Tunggu konfirmasi dari Tim Recruitment SEED")]),a._v(" "),t("p",[a._v("Kandidat terpilih untuk mendapatkan beasiswa akan kami hubungi untuk mengikuti wawancara")]),a._v(" "),t("hr"),a._v(" "),t("strong",[a._v("Q : Kapan pembukaan pendaftaran penerima beasiswa?")]),a._v(" "),t("p",[a._v("A : Pendaftaran akan dibuka pada akhir semester 1")]),a._v(" "),t("strong",[a._v("Q : Apa saja tahap seleksi Calon Penerima Beasiswa?")]),a._v(" "),t("p",[a._v("A : Seleksi terdiri dari 2 tahapan yaitu seleksi administrasi dan interview.")]),a._v(" "),t("strong",[a._v("Q : Apa saja tahap syarat administrasi untuk seleksi Calon Penerima Beasiswa?")]),a._v(" "),t("p",[a._v("A : Team Recruitment akan melakukan screening dari CV, Essay, Transkrip Nilai dan data kondisi finansial keluarga yang didukung dengan data berupa slip gaji orang tua dan atau rekening listrik. Apabila tidak ada slip gaji maka dilengkapi juga essay mengenai kondisi finansial keluarga.")]),a._v(" "),t("strong",[a._v("Q : Berapa jumlah Penerima Beasiswa ?")]),a._v(" "),t("p",[a._v("Jumlah mahasiswa yang akan menerima beasiswa akan disesuaikan dengan hasil proses seleksi. SEED Scholarship memiliki kuota penerima beasiswa hingga 10 awardee")]),a._v(" "),t("strong",[a._v("Q : Berapa jumlah besaran beasiswa diberikan?")]),a._v(" "),t("p",[a._v("A : Besaran beasiswa yang diberikan oleh SEEDS adalah sebesar Rp 3.600.000,- untuk satu semester.")]),a._v(" "),t("strong",[a._v("Q : Kapan beasiswa diberikan kepada Penerima Beasiswa?")]),a._v(" "),t("p",[a._v("A : Beasiswa akan diberikan pada bulan pertama atau paling lambat bulan kedua dari awal semester berjalan")])])],1)}),[],!1,null,null,null).exports},data:function(){return{isClosed:!1,isDisabled:!1,periodOptions:[],departmentOptions:[],errors:{name:"",year:"",phone:"",email:"",period_id:"",department_id:"",initial:"",password:""},input:{name:"",year:"",phone:"",period_id:null,department_id:null,email:"",password:"",password_confirmation:""}}},created:function(){this.chechOpenRegistration()},computed:{maxYear:function(){return(new Date).getFullYear()-1},minYear:function(){return(new Date).getFullYear()-7},loaded:function(){return this.periodOptions.length>0&&this.departmentOptions.length>0},stateName:function(){return"no-error"==this.errors.name||!this.errors.name&&null},stateEmail:function(){return"no-error"==this.errors.email||!this.errors.email&&null},statePhone:function(){return"no-error"==this.errors.phone||!this.errors.phone&&null},statePeriod:function(){return"no-error"==this.errors.period_id||!this.errors.period_id&&null},stateYear:function(){return"no-error"==this.errors.year||!this.errors.year&&null},stateInitial:function(){return"no-error"==this.errors.initial||!this.errors.initial&&null},statePassword:function(){return"no-error"==this.errors.password||!this.errors.password&&null},stateDepartment:function(){return"no-error"==this.errors.department_id||!this.errors.department_id&&null}},methods:{chechOpenRegistration:function(){var a=this;axios.get("api/common/open-registration/awardee").then((function(e){if(e.data)return a.getPeriod(),void a.getDepartment();a.isClosed=!0})).catch((function(a){}))},getPeriod:function(){var a=this;axios.get("api/period-active").then((function(e){e.data.forEach((function(a){a.value=a.id,a.text="Seedscholarship #".concat(a.period," - Year ").concat(a.year),delete a.id,delete a.period,delete a.year})),a.periodOptions=e.data})).catch((function(a){}))},getDepartment:function(){var a=this;axios.get("api/college-department").then((function(e){e.data.forEach((function(a){a.value=a.id,a.text=a.department,delete a.id,delete a.department,delete a.awardees_count})),a.departmentOptions=e.data})).catch((function(a){}))},register:function(){var a=this;this.isDisabled=!0,axios.post("api/auth/awardee/register",this.input).then((function(e){a.$snotify.success("New Awardee Registered","SUCCESS"),a.input.name="",a.input.period_id=null,a.input.department_id=null,a.input.email="",a.input.password="",a.input.password_confirmation="",a.isDisabled=!1,a.$router.replace({name:"RegistrationUpload",query:{id:e.data.id,email:e.data.email,registration_code:e.data.registration_code,period_id:e.data.period_id}})})).catch((function(e){a.$snotify.error(e.response.data.message,"ERROR"),a.isDisabled=!1;var t=e.response.data.errors;a.errors.name=t.name?t.name[0]:"no-error",a.errors.email=t.email?t.email[0]:"no-error",a.errors.phone=t.phone?t.phone[0]:"no-error",a.errors.year=t.year?t.year[0]:"no-error",a.errors.period_id=t.period_id?t.period_id[0]:"no-error",a.errors.department_id=t.department_id?t.department_id[0]:"no-error",a.errors.password=t.password?t.password[0]:"no-error"}))}}},s=(t("bj+s"),Object(r.a)(n,(function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticClass:"app bg-image-full flex-row align-items-center"},[t("loading",{staticClass:"text-center",attrs:{active:a.isDisabled,"can-cancel":!1,opacity:.9,height:60,loader:"dots",transition:"fade","background-color":"rgba(0,0,0,.85)",color:"rgba(255,255,255,.9)","is-full-page":!0}},[t("div",{staticClass:"text-center",staticStyle:{color:"rgba(255,255,255,.9)"},attrs:{slot:"after"},slot:"after"},[a._v("\n      Mohon Tunggu...\n    ")])]),a._v(" "),a.isClosed?t("div",{staticClass:"container text-white"},[t("b-row",{staticClass:"justify-content-center"},[t("b-col",{attrs:{sm:"8"}},[t("div",{staticClass:"text-center"},[t("img",{staticStyle:{"max-height":"150px"},attrs:{src:"/images/Seedlogo2.png",alt:""}})]),a._v(" "),t("header",{staticClass:"text-center my-2",attrs:{id:"header"}},[t("h1",[t("strong",[a._v("PENDAFTARAN DITUTUP")])])]),a._v(" "),t("div",{staticClass:"text-center"},[t("p",[a._v("Silahkan mencoba dilain kesempatan.")])])])],1)],1):a._e(),a._v(" "),a.isClosed?a._e():t("div",{directives:[{name:"show",rawName:"v-show",value:a.loaded,expression:"loaded"}],staticClass:"container"},[t("b-row",{staticClass:"justify-content-center"},[t("b-col",{attrs:{lg:"6",md:"8"}},[t("b-card",{staticClass:"p-4",attrs:{"no-body":""}},[t("div",{staticClass:"text-center mb-2"},[t("img",{staticClass:"mb-4",staticStyle:{"max-height":"150px"},attrs:{src:"/images/Seedlogo-small.png",alt:""}}),a._v(" "),t("h3",[a._v("Regular Awardee Registration")])]),a._v(" "),t("form",{staticClass:"card-body p-0",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),a.register(e)}}},[t("b-row",{staticClass:"form-group"},[t("b-col",{attrs:{sm:"12"}},[t("b-form-group",{attrs:{"invalid-feedback":a.errors.name,state:a.stateName}},[t("b-input-group",[t("b-input-group-prepend",[t("b-input-group-text",[t("i",{staticClass:"icon-user"})])],1),a._v(" "),t("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"text",placeholder:"Full Name",state:a.stateName},model:{value:a.input.name,callback:function(e){a.$set(a.input,"name",e)},expression:"input.name"}})],1)],1)],1),a._v(" "),t("b-col",{attrs:{sm:"12"}},[t("b-form-group",{attrs:{"invalid-feedback":a.errors.email,state:a.stateEmail}},[t("b-input-group",{},[t("b-input-group-prepend",[t("b-input-group-text",[a._v("@")])],1),a._v(" "),t("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"text",placeholder:"Active Email",state:a.stateEmail},model:{value:a.input.email,callback:function(e){a.$set(a.input,"email",e)},expression:"input.email"}})],1)],1)],1),a._v(" "),t("b-col",{attrs:{sm:"6"}},[t("b-form-group",{attrs:{"invalid-feedback":a.errors.year,state:a.stateYear}},[t("b-input-group",{},[t("b-input-group-prepend",[t("b-input-group-text",[t("i",{staticClass:"icon-calendar"})])],1),a._v(" "),t("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"number",min:a.minYear,max:a.maxYear,placeholder:"Year (Angkatan)",state:a.stateYear},model:{value:a.input.year,callback:function(e){a.$set(a.input,"year",e)},expression:"input.year"}})],1)],1)],1),a._v(" "),t("b-col",{attrs:{sm:"6"}},[t("b-form-group",{attrs:{"invalid-feedback":a.errors.phone,state:a.statePhone}},[t("b-input-group",{},[t("b-input-group-prepend",[t("b-input-group-text",[t("i",{staticClass:"icon-phone"})])],1),a._v(" "),t("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"number",placeholder:"Phone Number",state:a.statePhone},model:{value:a.input.phone,callback:function(e){a.$set(a.input,"phone",e)},expression:"input.phone"}})],1)],1)],1),a._v(" "),t("b-col",{attrs:{sm:"12"}},[t("b-form-group",{attrs:{"invalid-feedback":a.errors.department_id,state:a.stateDepartment}},[t("b-input-group",{},[t("b-input-group-prepend",[t("b-input-group-text",[t("i",{staticClass:"icon-list"})])],1),a._v(" "),t("b-form-select",{attrs:{plain:"",id:"department",options:a.departmentOptions,state:a.stateDepartment},model:{value:a.input.department_id,callback:function(e){a.$set(a.input,"department_id",e)},expression:"input.department_id"}},[t("template",{slot:"first"},[t("option",{attrs:{disabled:""},domProps:{value:null}},[a._v("-- Please select field of study --")])])],2)],1)],1)],1),a._v(" "),t("b-col",{attrs:{sm:"12"}},[t("b-form-group",{attrs:{"invalid-feedback":a.errors.period_id,state:a.statePeriod}},[t("b-input-group",{},[t("b-input-group-prepend",[t("b-input-group-text",[t("i",{staticClass:"icon-list"})])],1),a._v(" "),t("b-form-select",{attrs:{plain:"",id:"period",options:a.periodOptions,state:a.statePeriod},model:{value:a.input.period_id,callback:function(e){a.$set(a.input,"period_id",e)},expression:"input.period_id"}},[t("template",{slot:"first"},[t("option",{attrs:{disabled:""},domProps:{value:null}},[a._v("-- Please select period --")])])],2)],1)],1)],1)],1),a._v(" "),t("b-button",{attrs:{disabled:a.isDisabled,type:"submit",variant:"success",block:""}},[t("i",{directives:[{name:"show",rawName:"v-show",value:a.isDisabled,expression:"isDisabled"}],staticClass:"fa fa-spinner fa-spin"}),a._v("\n              Submit")])],1)])],1)],1)],1),a._v(" "),t("faq-modal")],1)}),[],!1,null,"ad798576",null));e.default=s.exports},"8+KV":function(a,e,t){"use strict";var i=t("XKFU"),r=t("CkkT")(0),n=t("LyE8")([].forEach,!0);i(i.P+i.F*!n,"Array",{forEach:function(a){return r(this,a,arguments[1])}})},a4CP:function(a,e,t){(a.exports=t("I1BE")(!1)).push([a.i,"\n.bg-image-full[data-v-ad798576] {\n  /* Full height */\n  background-image: linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(/images/bg-awardee-registration.jpg);\n  height: 100%;\n  /* Center and scale the image nicely */\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n",""])},"bj+s":function(a,e,t){"use strict";var i=t("fwXa");t.n(i).a},fwXa:function(a,e,t){var i=t("a4CP");"string"==typeof i&&(i=[[a.i,i,""]]);var r={hmr:!0,transform:void 0,insertInto:void 0};t("aET+")(i,r);i.locals&&(a.exports=i.locals)}}]);