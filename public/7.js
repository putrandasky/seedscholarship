(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{122:function(e,t){e.exports={}},128:function(e,t,a){var r=a(81),n=a(40);e.exports=function(e){return r(n(e))}},130:function(e,t,a){var r=a(127)("keys"),n=a(75);e.exports=function(e){return r[e]||(r[e]=n(e))}},131:function(e,t,a){var r=a(38).f,n=a(54),i=a(11)("toStringTag");e.exports=function(e,t,a){e&&!n(e=a?e:e.prototype,i)&&r(e,i,{configurable:!0,value:t})}},232:function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},233:function(e,t,a){var r=a(240),n=a(232);e.exports=Object.keys||function(e){return r(e,n)}},234:function(e,t,a){var r=a(13).document;e.exports=r&&r.documentElement},235:function(e,t,a){"use strict";var r=a(289),n=a(290),i=a(122),o=a(128);e.exports=a(291)(Array,"Array",function(e,t){this._t=o(e),this._i=0,this._k=t},function(){var e=this._t,t=this._k,a=this._i++;return!e||a>=e.length?(this._t=void 0,n(1)):n(0,"keys"==t?a:"values"==t?e[a]:[a,e[a]])},"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},240:function(e,t,a){var r=a(54),n=a(128),i=a(241)(!1),o=a(130)("IE_PROTO");e.exports=function(e,t){var a,s=n(e),u=0,l=[];for(a in s)a!=o&&r(s,a)&&l.push(a);for(;t.length>u;)r(s,a=t[u++])&&(~i(l,a)||l.push(a));return l}},241:function(e,t,a){var r=a(128),n=a(41),i=a(287);e.exports=function(e){return function(t,a,o){var s,u=r(t),l=n(u.length),p=i(o,l);if(e&&a!=a){for(;l>p;)if((s=u[p++])!=s)return!0}else for(;l>p;p++)if((e||p in u)&&u[p]===a)return e||p||0;return!e&&-1}}},242:function(e,t,a){var r=a(12),n=a(286),i=a(232),o=a(130)("IE_PROTO"),s=function(){},u=function(){var e,t=a(80)("iframe"),r=i.length;for(t.style.display="none",a(234).appendChild(t),t.src="javascript:",(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),u=e.F;r--;)delete u.prototype[i[r]];return u()};e.exports=Object.create||function(e,t){var a;return null!==e?(s.prototype=r(e),a=new s,s.prototype=null,a[o]=e):a=u(),void 0===t?a:n(a,t)}},286:function(e,t,a){var r=a(38),n=a(12),i=a(233);e.exports=a(16)?Object.defineProperties:function(e,t){n(e);for(var a,o=i(t),s=o.length,u=0;s>u;)r.f(e,a=o[u++],t[a]);return e}},287:function(e,t,a){var r=a(49),n=Math.max,i=Math.min;e.exports=function(e,t){return(e=r(e))<0?n(e+t,0):i(e,t)}},289:function(e,t,a){var r=a(11)("unscopables"),n=Array.prototype;null==n[r]&&a(37)(n,r,{}),e.exports=function(e){n[r][e]=!0}},290:function(e,t){e.exports=function(e,t){return{value:t,done:!!e}}},291:function(e,t,a){"use strict";var r=a(82),n=a(22),i=a(29),o=a(37),s=a(122),u=a(292),l=a(131),p=a(293),d=a(11)("iterator"),c=!([].keys&&"next"in[].keys()),m=function(){return this};e.exports=function(e,t,a,f,v,b,g){u(a,t,f);var h,_,k,y=function(e){if(!c&&e in C)return C[e];switch(e){case"keys":case"values":return function(){return new a(this,e)}}return function(){return new a(this,e)}},w=t+" Iterator",x="values"==v,S=!1,C=e.prototype,P=C[d]||C["@@iterator"]||v&&C[v],O=P||y(v),A=v?x?y("entries"):O:void 0,E="Array"==t&&C.entries||P;if(E&&(k=p(E.call(new e)))!==Object.prototype&&k.next&&(l(k,w,!0),r||"function"==typeof k[d]||o(k,d,m)),x&&P&&"values"!==P.name&&(S=!0,O=function(){return P.call(this)}),r&&!g||!c&&!S&&C[d]||o(C,d,O),s[t]=O,s[w]=m,v)if(h={values:x?O:y("values"),keys:b?O:y("keys"),entries:A},g)for(_ in h)_ in C||i(C,_,h[_]);else n(n.P+n.F*(c||S),t,h);return h}},292:function(e,t,a){"use strict";var r=a(242),n=a(123),i=a(131),o={};a(37)(o,a(11)("iterator"),function(){return this}),e.exports=function(e,t,a){e.prototype=r(o,{next:n(1,a)}),i(e,t+" Iterator")}},293:function(e,t,a){var r=a(54),n=a(51),i=a(130)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=n(e),r(e,i)?e[i]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},294:function(e,t,a){for(var r=a(235),n=a(233),i=a(29),o=a(13),s=a(37),u=a(122),l=a(11),p=l("iterator"),d=l("toStringTag"),c=u.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=n(m),v=0;v<f.length;v++){var b,g=f[v],h=m[g],_=o[g],k=_&&_.prototype;if(k&&(k[p]||s(k,p,c),k[d]||s(k,d,g),u[g]=c,h))for(b in r)k[b]||i(k,b,r[b],!0)}},295:function(e,t,a){"use strict";var r=a(22),n=a(76)(0),i=a(73)([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(e){return n(this,e,arguments[1])}})},433:function(e,t,a){"use strict";a.r(t);a(79),a(294),a(295),a(28);var r={name:"AuthRegisterFaq",data:function(){return{faqModal:!1}},created:function(){},methods:{}},n=a(0),i={name:"AuthRegister",components:{FaqModal:Object(n.a)(r,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Term Conditions & FAQ",expression:"'Term Conditions & FAQ'",modifiers:{hover:!0,left:!0}}],staticClass:"float-button",on:{click:function(t){e.faqModal=!0}}},[a("i",{staticClass:"fa fa-question"})]),e._v(" "),a("b-modal",{attrs:{"hide-footer":!0,"no-close-on-esc":!0,"hide-header-close":!1,"no-close-on-backdrop":!1,size:"xl",title:"Term, Conditions, & Frequently Asked Question"},model:{value:e.faqModal,callback:function(t){e.faqModal=t},expression:"faqModal"}},[a("strong",[e._v("Pastikan kamu memenuhi persyaratan dibawah ini")]),e._v(" "),a("ol",[a("li",[e._v("Mahasiswa tahun pertama Departemen Teknik Sipil, Universitas Indonesia.")]),e._v(" "),a("li",[e._v("Memiliki keterbatasan finansial dan berkeinginan tinggi untuk belajar.")]),e._v(" "),a("li",[e._v("Bersedia mengikuti program pengembangan diri selama menerima beasiswa.")])]),e._v(" "),a("strong",[e._v("Kemudian, siapkan berkas pendaftaran")]),e._v(" "),a("ol",[a("li",[e._v("CV (format bebas dengan informasi yang wajib ada yaitu: data diri, riwayat pendidikan, kemampuan bahasa, pengalaman kerja, status pekerjaan/pendidikan anggota keluarga)")]),e._v(" "),a("li",[e._v("Essai dengan topik : Mengapa saya pantas mendapatkan beasiswa SEED (300-500 kata)")]),e._v(" "),a("li",[e._v("Salinan slip gaji orangtua dan/atau rekening listrik")]),e._v(" "),a("li",[e._v("Print out halaman ringkasan dan riwayat SIAKNG")])]),e._v(" "),a("strong",[e._v("Tunggu konfirmasi dari Tim Recruitment SEED")]),e._v(" "),a("p",[e._v("Kandidat terpilih untuk mendapatkan beasiswa akan kami hubungi untuk mengikuti wawancara")]),e._v(" "),a("hr"),e._v(" "),a("strong",[e._v("Q : Kapan pembukaan pendaftaran penerima beasiswa?")]),e._v(" "),a("p",[e._v("A : Pendaftaran akan dibuka pada akhir semester 1")]),e._v(" "),a("strong",[e._v("Q : Apa saja tahap seleksi Calon Penerima Beasiswa?")]),e._v(" "),a("p",[e._v("A : Seleksi terdiri dari 2 tahapan yaitu seleksi administrasi dan interview.")]),e._v(" "),a("strong",[e._v("Q : Apa saja tahap syarat administrasi untuk seleksi Calon Penerima Beasiswa?")]),e._v(" "),a("p",[e._v("A : Team Recruitment akan melakukan screening dari CV, Essay, Transkrip Nilai dan data kondisi finansial keluarga yang didukung dengan data berupa slip gaji orang tua dan atau rekening listrik. Apabila tidak ada slip gaji maka dilengkapi juga essay mengenai kondisi finansial keluarga.")]),e._v(" "),a("strong",[e._v("Q : Berapa jumlah Penerima Beasiswa ?")]),e._v(" "),a("p",[e._v("Jumlah mahasiswa yang akan menerima beasiswa akan disesuaikan dengan hasil proses seleksi. SEED Scholarship memiliki kuota penerima beasiswa hingga 10 awardee")]),e._v(" "),a("strong",[e._v("Q : Berapa jumlah besaran beasiswa diberikan?")]),e._v(" "),a("p",[e._v("A : Besaran beasiswa yang diberikan oleh SEEDS adalah sebesar Rp 3.600.000,- untuk satu semester.")]),e._v(" "),a("strong",[e._v("Q : Kapan beasiswa diberikan kepada Penerima Beasiswa?")]),e._v(" "),a("p",[e._v("A : Beasiswa akan diberikan pada bulan pertama atau paling lambat bulan kedua dari awal semester berjalan")])])],1)},[],!1,null,null,null).exports},data:function(){return{isDisabled:!1,periodOptions:[],departmentOptions:[],errors:{name:"",year:"",phone:"",email:"",period_id:"",department_id:"",initial:"",password:""},input:{name:"",year:"",phone:"",period_id:null,department_id:null,email:"",password:"",password_confirmation:""}}},created:function(){this.getPeriod(),this.getDepartment()},computed:{maxYear:function(){return(new Date).getFullYear()-1},minYear:function(){return(new Date).getFullYear()-7},loaded:function(){return!(!this.periodOptions||!this.departmentOptions)},stateName:function(){return"no-error"==this.errors.name||!this.errors.name&&null},stateEmail:function(){return"no-error"==this.errors.email||!this.errors.email&&null},statePhone:function(){return"no-error"==this.errors.phone||!this.errors.phone&&null},statePeriod:function(){return"no-error"==this.errors.period_id||!this.errors.period_id&&null},stateYear:function(){return"no-error"==this.errors.year||!this.errors.year&&null},stateInitial:function(){return"no-error"==this.errors.initial||!this.errors.initial&&null},statePassword:function(){return"no-error"==this.errors.password||!this.errors.password&&null},stateDepartment:function(){return"no-error"==this.errors.department_id||!this.errors.department_id&&null}},methods:{getPeriod:function(){var e=this;axios.get("api/period").then(function(t){t.data.forEach(function(e){e.value=e.id,e.text="Seedscholarship #".concat(e.period," - Year ").concat(e.year),delete e.id,delete e.period,delete e.year}),e.periodOptions=t.data,console.log(e.periodOptions)}).catch(function(e){console.log(e)})},getDepartment:function(){var e=this;axios.get("api/college-department").then(function(t){t.data.forEach(function(e){e.value=e.id,e.text=e.department,delete e.id,delete e.department,delete e.awardees_count}),e.departmentOptions=t.data}).catch(function(e){console.log(e)})},register:function(){var e=this;this.isDisabled=!0,axios.post("api/auth/awardee/register",this.input).then(function(t){e.$snotify.success("New Awardee Registered","SUCCESS"),e.input.name="",e.input.period_id=null,e.input.department_id=null,e.input.email="",e.input.password="",e.input.password_confirmation="",e.isDisabled=!1,e.$router.replace({name:"RegistrationUpload",query:{id:t.data.id,email:t.data.email,registration_code:t.data.registration_code,period_id:t.data.period_id}})}).catch(function(t){e.$snotify.error(t.response.data.message,"ERROR"),e.isDisabled=!1;var a=t.response.data.errors;e.errors.name=a.name?a.name[0]:"no-error",e.errors.email=a.email?a.email[0]:"no-error",e.errors.phone=a.phone?a.phone[0]:"no-error",e.errors.year=a.year?a.year[0]:"no-error",e.errors.period_id=a.period_id?a.period_id[0]:"no-error",e.errors.department_id=a.department_id?a.department_id[0]:"no-error",e.errors.password=a.password?a.password[0]:"no-error"})}}},o=Object(n.a)(i,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app flex-row align-items-center"},[a("loading",{staticClass:"text-center",attrs:{active:e.isDisabled,"can-cancel":!1,opacity:.9,height:60,loader:"dots",transition:"fade","background-color":"rgba(0,0,0,.85)",color:"rgba(255,255,255,.9)","is-full-page":!0}},[a("div",{staticClass:"text-center",staticStyle:{color:"rgba(255,255,255,.9)"},attrs:{slot:"after"},slot:"after"},[e._v("Mohon Tunggu...")])]),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"container"},[a("b-row",{staticClass:"justify-content-center"},[a("b-col",{attrs:{lg:"6",md:"8"}},[a("b-card",{staticClass:"mx-4",attrs:{"no-body":""}},[a("form",{staticClass:"card-body p-4",attrs:{autocomplete:"off"},on:{submit:function(t){return t.preventDefault(),e.register(t)}}},[a("h1",[e._v("Awardee Registration")]),e._v(" "),a("b-row",{staticClass:"form-group"},[a("b-col",{attrs:{sm:"12"}},[a("b-form-group",{attrs:{"invalid-feedback":e.errors.name,state:e.stateName}},[a("b-input-group",[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-user"})])],1),e._v(" "),a("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"text",placeholder:"Full Name",state:e.stateName},model:{value:e.input.name,callback:function(t){e.$set(e.input,"name",t)},expression:"input.name"}})],1)],1)],1),e._v(" "),a("b-col",{attrs:{sm:"12"}},[a("b-form-group",{attrs:{"invalid-feedback":e.errors.email,state:e.stateEmail}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[e._v("@")])],1),e._v(" "),a("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"text",placeholder:"Active Email",state:e.stateEmail},model:{value:e.input.email,callback:function(t){e.$set(e.input,"email",t)},expression:"input.email"}})],1)],1)],1),e._v(" "),a("b-col",{attrs:{sm:"6"}},[a("b-form-group",{attrs:{"invalid-feedback":e.errors.year,state:e.stateYear}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-calendar"})])],1),e._v(" "),a("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"number",min:e.minYear,max:e.maxYear,placeholder:"Year (Angkatan)",state:e.stateYear},model:{value:e.input.year,callback:function(t){e.$set(e.input,"year",t)},expression:"input.year"}})],1)],1)],1),e._v(" "),a("b-col",{attrs:{sm:"6"}},[a("b-form-group",{attrs:{"invalid-feedback":e.errors.phone,state:e.statePhone}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-phone"})])],1),e._v(" "),a("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"number",placeholder:"Phone Number",state:e.statePhone},model:{value:e.input.phone,callback:function(t){e.$set(e.input,"phone",t)},expression:"input.phone"}})],1)],1)],1),e._v(" "),a("b-col",{attrs:{sm:"12"}},[a("b-form-group",{attrs:{"invalid-feedback":e.errors.department_id,state:e.stateDepartment}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-list"})])],1),e._v(" "),a("b-form-select",{attrs:{plain:"",id:"department",options:e.departmentOptions,state:e.stateDepartment},model:{value:e.input.department_id,callback:function(t){e.$set(e.input,"department_id",t)},expression:"input.department_id"}},[a("template",{slot:"first"},[a("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select field of study --")])])],2)],1)],1)],1),e._v(" "),a("b-col",{attrs:{sm:"12"}},[a("b-form-group",{attrs:{"invalid-feedback":e.errors.period_id,state:e.statePeriod}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-list"})])],1),e._v(" "),a("b-form-select",{attrs:{plain:"",id:"period",options:e.periodOptions,state:e.statePeriod},model:{value:e.input.period_id,callback:function(t){e.$set(e.input,"period_id",t)},expression:"input.period_id"}},[a("template",{slot:"first"},[a("option",{attrs:{disabled:""},domProps:{value:null}},[e._v("-- Please select period --")])])],2)],1)],1)],1)],1),e._v(" "),a("b-button",{attrs:{disabled:e.isDisabled,type:"submit",variant:"success",block:""}},[a("i",{directives:[{name:"show",rawName:"v-show",value:e.isDisabled,expression:"isDisabled"}],staticClass:"fa fa-spinner fa-spin"}),e._v(" Submit")])],1)])],1)],1)],1),e._v(" "),a("faq-modal")],1)},[],!1,null,null,null);t.default=o.exports}}]);