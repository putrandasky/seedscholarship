(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{122:function(t,e){t.exports={}},128:function(t,e,r){var n=r(81),a=r(40);t.exports=function(t){return n(a(t))}},130:function(t,e,r){var n=r(127)("keys"),a=r(75);t.exports=function(t){return n[t]||(n[t]=a(t))}},131:function(t,e,r){var n=r(38).f,a=r(54),i=r(11)("toStringTag");t.exports=function(t,e,r){t&&!a(t=r?t:t.prototype,i)&&n(t,i,{configurable:!0,value:e})}},232:function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},233:function(t,e,r){var n=r(240),a=r(232);t.exports=Object.keys||function(t){return n(t,a)}},234:function(t,e,r){var n=r(13).document;t.exports=n&&n.documentElement},235:function(t,e,r){"use strict";var n=r(289),a=r(290),i=r(122),o=r(128);t.exports=r(291)(Array,"Array",function(t,e){this._t=o(t),this._i=0,this._k=e},function(){var t=this._t,e=this._k,r=this._i++;return!t||r>=t.length?(this._t=void 0,a(1)):a(0,"keys"==e?r:"values"==e?t[r]:[r,t[r]])},"values"),i.Arguments=i.Array,n("keys"),n("values"),n("entries")},240:function(t,e,r){var n=r(54),a=r(128),i=r(241)(!1),o=r(130)("IE_PROTO");t.exports=function(t,e){var r,s=a(t),l=0,u=[];for(r in s)r!=o&&n(s,r)&&u.push(r);for(;e.length>l;)n(s,r=e[l++])&&(~i(u,r)||u.push(r));return u}},241:function(t,e,r){var n=r(128),a=r(41),i=r(287);t.exports=function(t){return function(e,r,o){var s,l=n(e),u=a(l.length),c=i(o,u);if(t&&r!=r){for(;u>c;)if((s=l[c++])!=s)return!0}else for(;u>c;c++)if((t||c in l)&&l[c]===r)return t||c||0;return!t&&-1}}},242:function(t,e,r){var n=r(12),a=r(286),i=r(232),o=r(130)("IE_PROTO"),s=function(){},l=function(){var t,e=r(80)("iframe"),n=i.length;for(e.style.display="none",r(234).appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),l=t.F;n--;)delete l.prototype[i[n]];return l()};t.exports=Object.create||function(t,e){var r;return null!==t?(s.prototype=n(t),r=new s,s.prototype=null,r[o]=t):r=l(),void 0===e?r:a(r,e)}},286:function(t,e,r){var n=r(38),a=r(12),i=r(233);t.exports=r(16)?Object.defineProperties:function(t,e){a(t);for(var r,o=i(e),s=o.length,l=0;s>l;)n.f(t,r=o[l++],e[r]);return t}},287:function(t,e,r){var n=r(49),a=Math.max,i=Math.min;t.exports=function(t,e){return(t=n(t))<0?a(t+e,0):i(t,e)}},289:function(t,e,r){var n=r(11)("unscopables"),a=Array.prototype;null==a[n]&&r(37)(a,n,{}),t.exports=function(t){a[n][t]=!0}},290:function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},291:function(t,e,r){"use strict";var n=r(82),a=r(22),i=r(29),o=r(37),s=r(122),l=r(292),u=r(131),c=r(293),p=r(11)("iterator"),d=!([].keys&&"next"in[].keys()),f=function(){return this};t.exports=function(t,e,r,m,h,v,b){l(r,e,m);var g,_,y,k=function(t){if(!d&&t in C)return C[t];switch(t){case"keys":case"values":return function(){return new r(this,t)}}return function(){return new r(this,t)}},x=e+" Iterator",w="values"==h,S=!1,C=t.prototype,O=C[p]||C["@@iterator"]||h&&C[h],L=O||k(h),T=h?w?k("entries"):L:void 0,P="Array"==e&&C.entries||O;if(P&&(y=c(P.call(new t)))!==Object.prototype&&y.next&&(u(y,x,!0),n||"function"==typeof y[p]||o(y,p,f)),w&&O&&"values"!==O.name&&(S=!0,L=function(){return O.call(this)}),n&&!b||!d&&!S&&C[p]||o(C,p,L),s[e]=L,s[x]=f,h)if(g={values:w?L:k("values"),keys:v?L:k("keys"),entries:T},b)for(_ in g)_ in C||i(C,_,g[_]);else a(a.P+a.F*(d||S),e,g);return g}},292:function(t,e,r){"use strict";var n=r(242),a=r(123),i=r(131),o={};r(37)(o,r(11)("iterator"),function(){return this}),t.exports=function(t,e,r){t.prototype=n(o,{next:a(1,r)}),i(t,e+" Iterator")}},293:function(t,e,r){var n=r(54),a=r(51),i=r(130)("IE_PROTO"),o=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=a(t),n(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?o:null}},294:function(t,e,r){for(var n=r(235),a=r(233),i=r(29),o=r(13),s=r(37),l=r(122),u=r(11),c=u("iterator"),p=u("toStringTag"),d=l.Array,f={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=a(f),h=0;h<m.length;h++){var v,b=m[h],g=f[b],_=o[b],y=_&&_.prototype;if(y&&(y[c]||s(y,c,d),y[p]||s(y,p,b),l[b]=d,g))for(v in n)y[v]||i(y,v,n[v],!0)}},295:function(t,e,r){"use strict";var n=r(22),a=r(76)(0),i=r(73)([].forEach,!0);n(n.P+n.F*!i,"Array",{forEach:function(t){return a(this,t,arguments[1])}})},432:function(t,e,r){"use strict";r.r(e);r(79),r(294),r(295),r(28);var n={name:"AuthRegisterFaq",data:function(){return{faqModal:!1}},created:function(){},methods:{}},a=r(0),i={name:"AuthRegister",components:{FaqModal:Object(a.a)(n,function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Term Conditions & FAQ",expression:"'Term Conditions & FAQ'",modifiers:{hover:!0,left:!0}}],staticClass:"float-button",on:{click:function(e){t.faqModal=!0}}},[r("i",{staticClass:"fa fa-question"})]),t._v(" "),r("b-modal",{attrs:{"hide-footer":!0,"no-close-on-esc":!0,"hide-header-close":!1,"no-close-on-backdrop":!1,size:"xl",title:"Term, Conditions, & Frequently Asked Question"},model:{value:t.faqModal,callback:function(e){t.faqModal=e},expression:"faqModal"}},[r("strong",[t._v("Pastikan kamu memenuhi syarat dan ketentuan dibawah ini")]),t._v(" "),r("ol",[r("li",[t._v("Mahasiswa Departemen Teknik Sipil, Universitas Indonesia.")]),t._v(" "),r("li",[t._v("Telah melakukan sidang seminar dan sedang mengambil mata kuliah skripsi")]),t._v(" "),r("li",[t._v("Tidak menerima bantuan pendanaan dari pihak lain terkait penelitian tugas akhir")])]),t._v(" "),r("strong",[t._v("Kemudian, siapkan persyaratan berikut sebagai berkas pendaftaran")]),t._v(" "),r("ol",[r("li",[t._v("CV / Riwayat Hidup")]),t._v(" "),r("li",[t._v("Proposal penelitan dengan isi; latar belakang, tujuan, metodologi, RAB, referensi "),r("strong",[t._v("(Format diberikan di halaman upload setelah melakukan registrasi)")])]),t._v(" "),r("li",[t._v("Surat keterangan tidak menerima beasiswa riset lainnya "),r("strong",[t._v("(Format diberikan di halaman upload setelah melakukan registrasi)")])]),t._v(" "),r("li",[t._v("Print out halaman ringkasan dan riwayat SIAKNG")])]),t._v(" "),r("strong",[t._v("Tunggu konfirmasi dari Tim Recruitment SEED")]),t._v(" "),r("p",[t._v("Kandidat terpilih untuk mendapatkan beasiswa akan kami hubungi untuk mengikuti wawancara")])])],1)},[],!1,null,null,null).exports},data:function(){return{isDisabled:!1,scholarshipOptions:[],departmentOptions:[],errors:{name:"",year:"",phone:"",email:"",scholarship_id:"",department_id:"",initial:"",password:""},input:{name:"",year:"",phone:"",scholarship_id:null,department_id:null,email:"",password:"",password_confirmation:""}}},created:function(){this.getScholarship(),this.getDepartment()},computed:{maxYear:function(){return(new Date).getFullYear()-1},minYear:function(){return(new Date).getFullYear()-7},loaded:function(){return!(!this.scholarshipOptions||!this.departmentOptions)},stateName:function(){return"no-error"==this.errors.name||!this.errors.name&&null},stateEmail:function(){return"no-error"==this.errors.email||!this.errors.email&&null},statePhone:function(){return"no-error"==this.errors.phone||!this.errors.phone&&null},stateScholarship:function(){return"no-error"==this.errors.scholarship_id||!this.errors.scholarship_id&&null},stateYear:function(){return"no-error"==this.errors.year||!this.errors.year&&null},stateInitial:function(){return"no-error"==this.errors.initial||!this.errors.initial&&null},statePassword:function(){return"no-error"==this.errors.password||!this.errors.password&&null},stateDepartment:function(){return"no-error"==this.errors.department_id||!this.errors.department_id&&null}},methods:{getScholarship:function(){var t=this;axios.get("api/scholarship").then(function(e){e.data.forEach(function(t){t.value=t.id,t.text="".concat(t.name," - Year ").concat(t.year),delete t.id,delete t.name,delete t.year}),t.scholarshipOptions=e.data}).catch(function(t){console.log(t)})},getDepartment:function(){var t=this;axios.get("api/college-department").then(function(e){e.data.forEach(function(t){t.value=t.id,t.text=t.department,delete t.id,delete t.department,delete t.awardees_count}),t.departmentOptions=e.data}).catch(function(t){console.log(t)})},register:function(){var t=this;this.isDisabled=!0,axios.post("api/auth/nonreg/register",this.input).then(function(e){t.$snotify.success("You Are Registered Successfully","SUCCESS"),t.input.name="",t.input.scholarship_id=null,t.input.department_id=null,t.input.email="",t.input.password="",t.input.password_confirmation="",t.isDisabled=!1,t.$router.replace({name:"RegistrationUpload",query:{id:e.data.id,email:e.data.email,scholarship_id:e.data.scholarship_id,registration_code:e.data.registration_code}})}).catch(function(e){t.$snotify.error(e.response.data.message,"ERROR"),t.isDisabled=!1;var r=e.response.data.errors;t.errors.name=r.name?r.name[0]:"no-error",t.errors.email=r.email?r.email[0]:"no-error",t.errors.phone=r.phone?r.phone[0]:"no-error",t.errors.year=r.year?r.year[0]:"no-error",t.errors.scholarship_id=r.scholarship_id?r.scholarship_id[0]:"no-error",t.errors.department_id=r.department_id?r.department_id[0]:"no-error",t.errors.password=r.password?r.password[0]:"no-error"})}}},o=Object(a.a)(i,function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.loaded?r("div",{staticClass:"app flex-row align-items-center"},[r("loading",{staticClass:"text-center",attrs:{active:t.isDisabled,"can-cancel":!1,opacity:.9,height:60,loader:"dots",transition:"fade","background-color":"rgba(0,0,0,.85)",color:"rgba(255,255,255,.9)","is-full-page":!0}},[r("div",{staticClass:"text-center",staticStyle:{color:"rgba(255,255,255,.9)"},attrs:{slot:"after"},slot:"after"},[t._v("Mohon Tunggu...")])]),t._v(" "),r("div",{staticClass:"container"},[r("b-row",{staticClass:"justify-content-center"},[r("b-col",{attrs:{lg:"6",md:"8"}},[r("b-card",{staticClass:"mx-4",attrs:{"no-body":""}},[r("form",{staticClass:"card-body p-4",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[r("h2",[t._v("Research Awardee Registration")]),t._v(" "),r("b-row",{staticClass:"form-group"},[r("b-col",{attrs:{sm:"12"}},[r("b-form-group",{attrs:{"invalid-feedback":t.errors.name,state:t.stateName}},[r("b-input-group",[r("b-input-group-prepend",[r("b-input-group-text",[r("i",{staticClass:"icon-user"})])],1),t._v(" "),r("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"text",placeholder:"Full Name",state:t.stateName},model:{value:t.input.name,callback:function(e){t.$set(t.input,"name",e)},expression:"input.name"}})],1)],1)],1),t._v(" "),r("b-col",{attrs:{sm:"12"}},[r("b-form-group",{attrs:{"invalid-feedback":t.errors.email,state:t.stateEmail}},[r("b-input-group",{},[r("b-input-group-prepend",[r("b-input-group-text",[t._v("@")])],1),t._v(" "),r("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"text",placeholder:"Active Email",state:t.stateEmail},model:{value:t.input.email,callback:function(e){t.$set(t.input,"email",e)},expression:"input.email"}})],1)],1)],1),t._v(" "),r("b-col",{attrs:{sm:"6"}},[r("b-form-group",{attrs:{"invalid-feedback":t.errors.year,state:t.stateYear}},[r("b-input-group",{},[r("b-input-group-prepend",[r("b-input-group-text",[r("i",{staticClass:"icon-calendar"})])],1),t._v(" "),r("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"number",min:t.minYear,max:t.maxYear,placeholder:"Year (Angkatan)",state:t.stateYear},model:{value:t.input.year,callback:function(e){t.$set(t.input,"year",e)},expression:"input.year"}})],1)],1)],1),t._v(" "),r("b-col",{attrs:{sm:"6"}},[r("b-form-group",{attrs:{"invalid-feedback":t.errors.phone,state:t.statePhone}},[r("b-input-group",{},[r("b-input-group-prepend",[r("b-input-group-text",[r("i",{staticClass:"icon-phone"})])],1),t._v(" "),r("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"number",placeholder:"Phone Number",state:t.statePhone},model:{value:t.input.phone,callback:function(e){t.$set(t.input,"phone",e)},expression:"input.phone"}})],1)],1)],1),t._v(" "),r("b-col",{attrs:{sm:"12"}},[r("b-form-group",{attrs:{"invalid-feedback":t.errors.department_id,state:t.stateDepartment}},[r("b-input-group",{},[r("b-input-group-prepend",[r("b-input-group-text",[r("i",{staticClass:"icon-list"})])],1),t._v(" "),r("b-form-select",{attrs:{plain:"",id:"department",options:t.departmentOptions,state:t.stateDepartment},model:{value:t.input.department_id,callback:function(e){t.$set(t.input,"department_id",e)},expression:"input.department_id"}},[r("template",{slot:"first"},[r("option",{attrs:{disabled:""},domProps:{value:null}},[t._v("-- Please select your field of study --")])])],2)],1)],1)],1),t._v(" "),r("b-col",{attrs:{sm:"12"}},[r("b-form-group",{attrs:{"invalid-feedback":t.errors.scholarship_id,state:t.stateScholarship}},[r("b-input-group",{},[r("b-input-group-prepend",[r("b-input-group-text",[r("i",{staticClass:"icon-list"})])],1),t._v(" "),r("b-form-select",{attrs:{plain:"",id:"scholarship",options:t.scholarshipOptions,state:t.stateScholarship},model:{value:t.input.scholarship_id,callback:function(e){t.$set(t.input,"scholarship_id",e)},expression:"input.scholarship_id"}},[r("template",{slot:"first"},[r("option",{attrs:{disabled:""},domProps:{value:null}},[t._v("-- Please select program --")])])],2)],1)],1)],1)],1),t._v(" "),r("b-button",{attrs:{disabled:t.isDisabled,type:"submit",variant:"success",block:""}},[r("i",{directives:[{name:"show",rawName:"v-show",value:t.isDisabled,expression:"isDisabled"}],staticClass:"fa fa-spinner fa-spin"}),t._v("\n              Submit")])],1)])],1)],1)],1),t._v(" "),r("faq-modal")],1):t._e()},[],!1,null,null,null);e.default=o.exports}}]);