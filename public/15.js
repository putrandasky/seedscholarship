(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{289:function(e,a,t){for(var i=t(129),r=t(237),n=t(29),s=t(13),o=t(38),l=t(122),d=t(11),p=d("iterator"),u=d("toStringTag"),c=l.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},b=r(m),f=0;f<b.length;f++){var g,v=b[f],h=m[v],_=s[v],k=_&&_.prototype;if(k&&(k[p]||o(k,p,c),k[u]||o(k,u,v),l[v]=c,h))for(g in i)k[g]||n(k,g,i[g],!0)}},290:function(e,a,t){"use strict";var i=t(22),r=t(76)(0),n=t(73)([].forEach,!0);i(i.P+i.F*!n,"Array",{forEach:function(e){return r(this,e,arguments[1])}})},433:function(e,a,t){"use strict";t.r(a);t(79),t(289),t(290),t(28),t(129),t(134),t(135),t(136);var i={name:"AuthRegisterFaq",data:function(){return{faqModal:!1}},created:function(){},methods:{}},r=t(0),n={name:"AuthRegister",components:{FaqModal:Object(r.a)(i,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",[t("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Term Conditions & FAQ",expression:"'Term Conditions & FAQ'",modifiers:{hover:!0,left:!0}}],staticClass:"float-button",on:{click:function(a){e.faqModal=!0}}},[t("i",{staticClass:"fa fa-question"})]),e._v(" "),t("b-modal",{attrs:{"hide-footer":!0,"no-close-on-esc":!0,"hide-header-close":!1,"no-close-on-backdrop":!1,size:"xl",title:"Term, Conditions, & Frequently Asked Question"},model:{value:e.faqModal,callback:function(a){e.faqModal=a},expression:"faqModal"}},[t("strong",[e._v("Pastikan kamu memenuhi persyaratan dibawah ini")]),e._v(" "),t("ol",[t("li",[e._v("Mahasiswa tahun pertama Departemen Teknik Sipil, Universitas Indonesia.")]),e._v(" "),t("li",[e._v("Memiliki keterbatasan finansial dan berkeinginan tinggi untuk belajar.")]),e._v(" "),t("li",[e._v("Bersedia mengikuti program pengembangan diri selama menerima beasiswa.")])]),e._v(" "),t("strong",[e._v("Kemudian, siapkan berkas pendaftaran")]),e._v(" "),t("ol",[t("li",[e._v("CV (format bebas dengan informasi yang wajib ada yaitu: data diri, riwayat pendidikan, kemampuan bahasa, pengalaman kerja, status pekerjaan/pendidikan anggota keluarga)")]),e._v(" "),t("li",[e._v("Essai dengan topik : Mengapa saya pantas mendapatkan beasiswa SEED (300-500 kata)")]),e._v(" "),t("li",[e._v("Salinan slip gaji orangtua dan/atau rekening listrik")]),e._v(" "),t("li",[e._v("Print out halaman ringkasan dan riwayat SIAKNG")])]),e._v(" "),t("strong",[e._v("Tunggu konfirmasi dari Tim Recruitment SEED")]),e._v(" "),t("p",[e._v("Kandidat terpilih untuk mendapatkan beasiswa akan kami hubungi untuk mengikuti wawancara")]),e._v(" "),t("hr"),e._v(" "),t("strong",[e._v("Q : Kapan pembukaan pendaftaran penerima beasiswa?")]),e._v(" "),t("p",[e._v("A : Pendaftaran akan dibuka pada akhir semester 1")]),e._v(" "),t("strong",[e._v("Q : Apa saja tahap seleksi Calon Penerima Beasiswa?")]),e._v(" "),t("p",[e._v("A : Seleksi terdiri dari 2 tahapan yaitu seleksi administrasi dan interview.")]),e._v(" "),t("strong",[e._v("Q : Apa saja tahap syarat administrasi untuk seleksi Calon Penerima Beasiswa?")]),e._v(" "),t("p",[e._v("A : Team Recruitment akan melakukan screening dari CV, Essay, Transkrip Nilai dan data kondisi finansial keluarga yang didukung dengan data berupa slip gaji orang tua dan atau rekening listrik. Apabila tidak ada slip gaji maka dilengkapi juga essay mengenai kondisi finansial keluarga.")]),e._v(" "),t("strong",[e._v("Q : Berapa jumlah Penerima Beasiswa ?")]),e._v(" "),t("p",[e._v("Jumlah mahasiswa yang akan menerima beasiswa akan disesuaikan dengan hasil proses seleksi. SEED Scholarship memiliki kuota penerima beasiswa hingga 10 awardee")]),e._v(" "),t("strong",[e._v("Q : Berapa jumlah besaran beasiswa diberikan?")]),e._v(" "),t("p",[e._v("A : Besaran beasiswa yang diberikan oleh SEEDS adalah sebesar Rp 3.600.000,- untuk satu semester.")]),e._v(" "),t("strong",[e._v("Q : Kapan beasiswa diberikan kepada Penerima Beasiswa?")]),e._v(" "),t("p",[e._v("A : Beasiswa akan diberikan pada bulan pertama atau paling lambat bulan kedua dari awal semester berjalan")])])],1)},[],!1,null,null,null).exports},data:function(){return{isClosed:!0,isDisabled:!1,periodOptions:[],departmentOptions:[],errors:{name:"",year:"",phone:"",email:"",period_id:"",department_id:"",initial:"",password:""},input:{name:"",year:"",phone:"",period_id:null,department_id:null,email:"",password:"",password_confirmation:""}}},created:function(){this.getPeriod(),this.getDepartment()},computed:{maxYear:function(){return(new Date).getFullYear()-1},minYear:function(){return(new Date).getFullYear()-7},loaded:function(){return!(!this.periodOptions||!this.departmentOptions)},stateName:function(){return"no-error"==this.errors.name||!this.errors.name&&null},stateEmail:function(){return"no-error"==this.errors.email||!this.errors.email&&null},statePhone:function(){return"no-error"==this.errors.phone||!this.errors.phone&&null},statePeriod:function(){return"no-error"==this.errors.period_id||!this.errors.period_id&&null},stateYear:function(){return"no-error"==this.errors.year||!this.errors.year&&null},stateInitial:function(){return"no-error"==this.errors.initial||!this.errors.initial&&null},statePassword:function(){return"no-error"==this.errors.password||!this.errors.password&&null},stateDepartment:function(){return"no-error"==this.errors.department_id||!this.errors.department_id&&null}},methods:{getPeriod:function(){var e=this;axios.get("api/period").then(function(a){a.data.forEach(function(e){e.value=e.id,e.text="Seedscholarship #".concat(e.period," - Year ").concat(e.year),delete e.id,delete e.period,delete e.year}),e.periodOptions=a.data,console.log(e.periodOptions)}).catch(function(e){console.log(e)})},getDepartment:function(){var e=this;axios.get("api/college-department").then(function(a){a.data.forEach(function(e){e.value=e.id,e.text=e.department,delete e.id,delete e.department,delete e.awardees_count}),e.departmentOptions=a.data}).catch(function(e){console.log(e)})},register:function(){var e=this;this.isDisabled=!0,axios.post("api/auth/awardee/register",this.input).then(function(a){e.$snotify.success("New Awardee Registered","SUCCESS"),e.input.name="",e.input.period_id=null,e.input.department_id=null,e.input.email="",e.input.password="",e.input.password_confirmation="",e.isDisabled=!1,e.$router.replace({name:"RegistrationUpload",query:{id:a.data.id,email:a.data.email,registration_code:a.data.registration_code,period_id:a.data.period_id}})}).catch(function(a){e.$snotify.error(a.response.data.message,"ERROR"),e.isDisabled=!1;var t=a.response.data.errors;e.errors.name=t.name?t.name[0]:"no-error",e.errors.email=t.email?t.email[0]:"no-error",e.errors.phone=t.phone?t.phone[0]:"no-error",e.errors.year=t.year?t.year[0]:"no-error",e.errors.period_id=t.period_id?t.period_id[0]:"no-error",e.errors.department_id=t.department_id?t.department_id[0]:"no-error",e.errors.password=t.password?t.password[0]:"no-error"})}}},s=Object(r.a)(n,function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"app flex-row align-items-center"},[t("loading",{staticClass:"text-center",attrs:{active:e.isDisabled,"can-cancel":!1,opacity:.9,height:60,loader:"dots",transition:"fade","background-color":"rgba(0,0,0,.85)",color:"rgba(255,255,255,.9)","is-full-page":!0}},[t("div",{staticClass:"text-center",staticStyle:{color:"rgba(255,255,255,.9)"},attrs:{slot:"after"},slot:"after"},[e._v("Mohon Tunggu...")])]),e._v(" "),e.isClosed?t("div",{staticClass:"container"},[t("b-row",{staticClass:"justify-content-center"},[t("b-col",{attrs:{sm:"8"}},[t("div",{staticClass:"text-center"},[t("img",{staticStyle:{"max-height":"150px"},attrs:{src:"/images/Seedlogo2.png",alt:""}})]),e._v(" "),t("header",{staticClass:"text-center my-2",attrs:{id:"header"}},[t("h1",[t("strong",[e._v("PENDAFTARAN DITUTUP")])])]),e._v(" "),t("div",{staticClass:"text-center"},[t("p",[e._v("Silahkan mencoba dilain kesempatan.")])])])],1)],1):e._e(),e._v(" "),e.isClosed?e._e():t("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"container"},[t("b-row",{staticClass:"justify-content-center"},[t("b-col",{attrs:{lg:"6",md:"8"}},[t("b-card",{staticClass:"mx-4",attrs:{"no-body":""}},[t("form",{staticClass:"card-body p-4",attrs:{autocomplete:"off"},on:{submit:function(a){return a.preventDefault(),e.register(a)}}},[t("h1",[e._v("Awardee Registration")]),e._v(" "),t("b-row",{staticClass:"form-group"},[t("b-col",{attrs:{sm:"12"}},[t("b-form-group",{attrs:{"invalid-feedback":e.errors.name,state:e.stateName}},[t("b-input-group",[t("b-input-group-prepend",[t("b-input-group-text",[t("i",{staticClass:"icon-user"})])],1),e._v(" "),t("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"text",placeholder:"Full Name",state:e.stateName},model:{value:e.input.name,callback:function(a){e.$set(e.input,"name",a)},expression:"input.name"}})],1)],1)],1),e._v(" "),t("b-col",{attrs:{sm:"12"}},[t("b-form-group",{attrs:{"invalid-feedback":e.errors.email,state:e.stateEmail}},[t("b-input-group",{},[t("b-input-group-prepend",[t("b-input-group-text",[e._v("@")])],1),e._v(" "),t("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"text",placeholder:"Active Email",state:e.stateEmail},model:{value:e.input.email,callback:function(a){e.$set(e.input,"email",a)},expression:"input.email"}})],1)],1)],1),e._v(" "),t("b-col",{attrs:{sm:"6"}},[t("b-form-group",{attrs:{"invalid-feedback":e.errors.year,state:e.stateYear}},[t("b-input-group",{},[t("b-input-group-prepend",[t("b-input-group-text",[t("i",{staticClass:"icon-calendar"})])],1),e._v(" "),t("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"number",min:e.minYear,max:e.maxYear,placeholder:"Year (Angkatan)",state:e.stateYear},model:{value:e.input.year,callback:function(a){e.$set(e.input,"year",a)},expression:"input.year"}})],1)],1)],1),e._v(" "),t("b-col",{attrs:{sm:"6"}},[t("b-form-group",{attrs:{"invalid-feedback":e.errors.phone,state:e.statePhone}},[t("b-input-group",{},[t("b-input-group-prepend",[t("b-input-group-text",[t("i",{staticClass:"icon-phone"})])],1),e._v(" "),t("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"number",placeholder:"Phone Number",state:e.statePhone},model:{value:e.input.phone,callback:function(a){e.$set(e.input,"phone",a)},expression:"input.phone"}})],1)],1)],1),e._v(" "),t("b-col",{attrs:{sm:"12"}},[t("b-form-group",{attrs:{"invalid-feedback":e.errors.department_id,state:e.stateDepartment}},[t("b-input-group",{},[t("b-input-group-prepend",[t("b-input-group-text",[t("i",{staticClass:"icon-list"})])],1),e._v(" "),t("b-form-select",{attrs:{plain:"",id:"department",options:e.departmentOptions,state:e.stateDepartment},model:{value:e.input.department_id,callback:function(a){e.$set(e.input,"department_id",a)},expression:"input.department_id"}},[t("template",{slot:"first"},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select field of study --")])])],2)],1)],1)],1),e._v(" "),t("b-col",{attrs:{sm:"12"}},[t("b-form-group",{attrs:{"invalid-feedback":e.errors.period_id,state:e.statePeriod}},[t("b-input-group",{},[t("b-input-group-prepend",[t("b-input-group-text",[t("i",{staticClass:"icon-list"})])],1),e._v(" "),t("b-form-select",{attrs:{plain:"",id:"period",options:e.periodOptions,state:e.statePeriod},model:{value:e.input.period_id,callback:function(a){e.$set(e.input,"period_id",a)},expression:"input.period_id"}},[t("template",{slot:"first"},[t("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select period --")])])],2)],1)],1)],1)],1),e._v(" "),t("b-button",{attrs:{disabled:e.isDisabled,type:"submit",variant:"success",block:""}},[t("i",{directives:[{name:"show",rawName:"v-show",value:e.isDisabled,expression:"isDisabled"}],staticClass:"fa fa-spinner fa-spin"}),e._v("\n              Submit")])],1)])],1)],1)],1),e._v(" "),t("faq-modal")],1)},[],!1,null,null,null);a.default=s.exports}}]);