(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{306:function(t,e,a){for(var r=a(241),i=a(129),n=a(23),s=a(10),o=a(30),l=a(55),p=a(7),u=p("iterator"),c=p("toStringTag"),d=l.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},h=i(m),f=0;f<h.length;f++){var b,g=h[f],v=m[g],_=s[g],k=_&&_.prototype;if(k&&(k[u]||o(k,u,d),k[c]||o(k,c,g),l[g]=d,v))for(b in r)k[b]||n(k,b,r[b],!0)}},307:function(t,e,a){"use strict";var r=a(18),i=a(83)(0),n=a(74)([].forEach,!0);r(r.P+r.F*!n,"Array",{forEach:function(t){return i(this,t,arguments[1])}})},436:function(t,e,a){"use strict";a.r(e);a(86),a(306),a(307),a(32);var r={name:"AuthRegisterFaq",data:function(){return{faqModal:!1}},created:function(){},methods:{}},i=a(0),n={name:"AuthRegister",components:{FaqModal:Object(i.a)(r,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Term Conditions & FAQ",expression:"'Term Conditions & FAQ'",modifiers:{hover:!0,left:!0}}],staticClass:"float-button",on:{click:function(e){t.faqModal=!0}}},[a("i",{staticClass:"fa fa-question"})]),t._v(" "),a("b-modal",{attrs:{"hide-footer":!0,"no-close-on-esc":!0,"hide-header-close":!1,"no-close-on-backdrop":!1,size:"xl",title:"Term, Conditions, & Frequently Asked Question"},model:{value:t.faqModal,callback:function(e){t.faqModal=e},expression:"faqModal"}},[a("strong",[t._v("Pastikan kamu memenuhi syarat dan ketentuan dibawah ini")]),t._v(" "),a("ol",[a("li",[t._v("Mahasiswa Departemen Teknik Sipil, Universitas Indonesia.")]),t._v(" "),a("li",[t._v("Telah melakukan sidang seminar dan sedang mengambil mata kuliah skripsi")]),t._v(" "),a("li",[t._v("Tidak menerima bantuan pendanaan dari pihak lain terkait penelitian tugas akhir")])]),t._v(" "),a("strong",[t._v("Kemudian, siapkan persyaratan berikut sebagai berkas pendaftaran")]),t._v(" "),a("ol",[a("li",[t._v("CV / Riwayat Hidup")]),t._v(" "),a("li",[t._v("Proposal penelitan dengan isi; latar belakang, tujuan, metodologi, RAB, referensi "),a("strong",[t._v("(Format diberikan di halaman upload setelah melakukan registrasi)")])]),t._v(" "),a("li",[t._v("Surat keterangan tidak menerima beasiswa riset lainnya "),a("strong",[t._v("(Format diberikan di halaman upload setelah melakukan registrasi)")])]),t._v(" "),a("li",[t._v("Print out halaman ringkasan dan riwayat SIAKNG")])]),t._v(" "),a("strong",[t._v("Tunggu konfirmasi dari Tim Recruitment SEED")]),t._v(" "),a("p",[t._v("Kandidat terpilih untuk mendapatkan beasiswa akan kami hubungi untuk mengikuti wawancara")])])],1)},[],!1,null,null,null).exports},data:function(){return{isDisabled:!1,scholarshipOptions:[],departmentOptions:[],errors:{name:"",year:"",phone:"",email:"",scholarship_id:"",department_id:"",initial:"",password:""},input:{name:"",year:"",phone:"",scholarship_id:null,department_id:null,email:"",password:"",password_confirmation:""}}},created:function(){this.getScholarship(),this.getDepartment()},computed:{maxYear:function(){return(new Date).getFullYear()-1},minYear:function(){return(new Date).getFullYear()-7},loaded:function(){return!(!this.scholarshipOptions||!this.departmentOptions)},stateName:function(){return"no-error"==this.errors.name||!this.errors.name&&null},stateEmail:function(){return"no-error"==this.errors.email||!this.errors.email&&null},statePhone:function(){return"no-error"==this.errors.phone||!this.errors.phone&&null},stateScholarship:function(){return"no-error"==this.errors.scholarship_id||!this.errors.scholarship_id&&null},stateYear:function(){return"no-error"==this.errors.year||!this.errors.year&&null},stateInitial:function(){return"no-error"==this.errors.initial||!this.errors.initial&&null},statePassword:function(){return"no-error"==this.errors.password||!this.errors.password&&null},stateDepartment:function(){return"no-error"==this.errors.department_id||!this.errors.department_id&&null}},methods:{getScholarship:function(){var t=this;axios.get("api/scholarship").then(function(e){e.data.forEach(function(t){t.value=t.id,t.text="".concat(t.name," - Year ").concat(t.year),delete t.id,delete t.name,delete t.year}),t.scholarshipOptions=e.data}).catch(function(t){console.log(t)})},getDepartment:function(){var t=this;axios.get("api/college-department").then(function(e){e.data.forEach(function(t){t.value=t.id,t.text=t.department,delete t.id,delete t.department,delete t.awardees_count}),t.departmentOptions=e.data}).catch(function(t){console.log(t)})},register:function(){var t=this;this.isDisabled=!0,axios.post("api/auth/nonreg/register",this.input).then(function(e){t.$snotify.success("You Are Registered Successfully","SUCCESS"),t.input.name="",t.input.scholarship_id=null,t.input.department_id=null,t.input.email="",t.input.password="",t.input.password_confirmation="",t.isDisabled=!1,t.$router.replace({name:"RegistrationUpload",query:{id:e.data.id,email:e.data.email,scholarship_id:e.data.scholarship_id,registration_code:e.data.registration_code}})}).catch(function(e){t.$snotify.error(e.response.data.message,"ERROR"),t.isDisabled=!1;var a=e.response.data.errors;t.errors.name=a.name?a.name[0]:"no-error",t.errors.email=a.email?a.email[0]:"no-error",t.errors.phone=a.phone?a.phone[0]:"no-error",t.errors.year=a.year?a.year[0]:"no-error",t.errors.scholarship_id=a.scholarship_id?a.scholarship_id[0]:"no-error",t.errors.department_id=a.department_id?a.department_id[0]:"no-error",t.errors.password=a.password?a.password[0]:"no-error"})}}},s=Object(i.a)(n,function(){var t=this,e=t.$createElement,a=t._self._c||e;return t.loaded?a("div",{staticClass:"app flex-row align-items-center"},[a("loading",{staticClass:"text-center",attrs:{active:t.isDisabled,"can-cancel":!1,opacity:.9,height:60,loader:"dots",transition:"fade","background-color":"rgba(0,0,0,.85)",color:"rgba(255,255,255,.9)","is-full-page":!0}},[a("div",{staticClass:"text-center",staticStyle:{color:"rgba(255,255,255,.9)"},attrs:{slot:"after"},slot:"after"},[t._v("Mohon Tunggu...")])]),t._v(" "),a("div",{staticClass:"container"},[a("b-row",{staticClass:"justify-content-center"},[a("b-col",{attrs:{lg:"6",md:"8"}},[a("b-card",{staticClass:"mx-4",attrs:{"no-body":""}},[a("form",{staticClass:"card-body p-4",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("h2",[t._v("Research Awardee Registration")]),t._v(" "),a("b-row",{staticClass:"form-group"},[a("b-col",{attrs:{sm:"12"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.name,state:t.stateName}},[a("b-input-group",[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-user"})])],1),t._v(" "),a("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"text",placeholder:"Full Name",state:t.stateName},model:{value:t.input.name,callback:function(e){t.$set(t.input,"name",e)},expression:"input.name"}})],1)],1)],1),t._v(" "),a("b-col",{attrs:{sm:"12"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.email,state:t.stateEmail}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[t._v("@")])],1),t._v(" "),a("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"text",placeholder:"Active Email",state:t.stateEmail},model:{value:t.input.email,callback:function(e){t.$set(t.input,"email",e)},expression:"input.email"}})],1)],1)],1),t._v(" "),a("b-col",{attrs:{sm:"6"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.year,state:t.stateYear}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-calendar"})])],1),t._v(" "),a("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"number",min:t.minYear,max:t.maxYear,placeholder:"Year (Angkatan)",state:t.stateYear},model:{value:t.input.year,callback:function(e){t.$set(t.input,"year",e)},expression:"input.year"}})],1)],1)],1),t._v(" "),a("b-col",{attrs:{sm:"6"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.phone,state:t.statePhone}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-phone"})])],1),t._v(" "),a("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"number",placeholder:"Phone Number",state:t.statePhone},model:{value:t.input.phone,callback:function(e){t.$set(t.input,"phone",e)},expression:"input.phone"}})],1)],1)],1),t._v(" "),a("b-col",{attrs:{sm:"12"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.department_id,state:t.stateDepartment}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-list"})])],1),t._v(" "),a("b-form-select",{attrs:{plain:"",id:"department",options:t.departmentOptions,state:t.stateDepartment},model:{value:t.input.department_id,callback:function(e){t.$set(t.input,"department_id",e)},expression:"input.department_id"}},[a("template",{slot:"first"},[a("option",{attrs:{disabled:""},domProps:{value:null}},[t._v("-- Please select your field of study --")])])],2)],1)],1)],1),t._v(" "),a("b-col",{attrs:{sm:"12"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.scholarship_id,state:t.stateScholarship}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-list"})])],1),t._v(" "),a("b-form-select",{attrs:{plain:"",id:"scholarship",options:t.scholarshipOptions,state:t.stateScholarship},model:{value:t.input.scholarship_id,callback:function(e){t.$set(t.input,"scholarship_id",e)},expression:"input.scholarship_id"}},[a("template",{slot:"first"},[a("option",{attrs:{disabled:""},domProps:{value:null}},[t._v("-- Please select program --")])])],2)],1)],1)],1)],1),t._v(" "),a("b-button",{attrs:{disabled:t.isDisabled,type:"submit",variant:"success",block:""}},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.isDisabled,expression:"isDisabled"}],staticClass:"fa fa-spinner fa-spin"}),t._v("\n              Submit")])],1)])],1)],1)],1),t._v(" "),a("faq-modal")],1):t._e()},[],!1,null,null,null);e.default=s.exports}}]);