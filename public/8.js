(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+rLv":function(t,e,a){var r=a("dyZX").document;t.exports=r&&r.documentElement},"1TsA":function(t,e){t.exports=function(t,e){return{value:e,done:!!t}}},"4R4u":function(t,e){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},"5Sry":function(t,e,a){"use strict";a.r(e);a("pIFo"),a("rGqo"),a("8+KV"),a("f3/d");var r={name:"AuthRegisterFaq",data:function(){return{faqModal:!1}},created:function(){},methods:{}},n=a("KHd+"),i={name:"AuthRegister",components:{FaqModal:Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover.left",value:"Term Conditions & FAQ",expression:"'Term Conditions & FAQ'",modifiers:{hover:!0,left:!0}}],staticClass:"float-button",on:{click:function(e){t.faqModal=!0}}},[a("i",{staticClass:"fa fa-question"})]),t._v(" "),a("b-modal",{attrs:{"hide-footer":!0,"no-close-on-esc":!0,"hide-header-close":!1,"no-close-on-backdrop":!1,size:"xl",title:"Term, Conditions, & Frequently Asked Question"},model:{value:t.faqModal,callback:function(e){t.faqModal=e},expression:"faqModal"}},[a("strong",[t._v("Pastikan kamu memenuhi persyaratan dibawah ini")]),t._v(" "),a("ol",[a("li",[t._v("Mahasiswa tahun pertama Departemen Teknik Sipil, Universitas Indonesia.")]),t._v(" "),a("li",[t._v("Memiliki keterbatasan finansial dan berkeinginan tinggi untuk belajar.")]),t._v(" "),a("li",[t._v("Bersedia mengikuti program pengembangan diri selama menerima beasiswa.")])]),t._v(" "),a("strong",[t._v("Kemudian, siapkan berkas pendaftaran")]),t._v(" "),a("ol",[a("li",[t._v("CV (format bebas dengan informasi yang wajib ada yaitu: data diri, riwayat pendidikan, kemampuan bahasa, pengalaman kerja, status pekerjaan/pendidikan anggota keluarga)")]),t._v(" "),a("li",[t._v("Essai dengan topik : Mengapa saya pantas mendapatkan beasiswa SEED (300-500 kata)")]),t._v(" "),a("li",[t._v("Salinan slip gaji orangtua dan/atau rekening listrik")]),t._v(" "),a("li",[t._v("Print out halaman ringkasan dan riwayat SIAKNG")])]),t._v(" "),a("strong",[t._v("Tunggu konfirmasi dari Tim Recruitment SEED")]),t._v(" "),a("p",[t._v("Kandidat terpilih untuk mendapatkan beasiswa akan kami hubungi untuk mengikuti wawancara")]),t._v(" "),a("hr"),t._v(" "),a("strong",[t._v("Q : Kapan pembukaan pendaftaran penerima beasiswa?")]),t._v(" "),a("p",[t._v("A : Pendaftaran akan dibuka pada akhir semester 1")]),t._v(" "),a("strong",[t._v("Q : Apa saja tahap seleksi Calon Penerima Beasiswa?")]),t._v(" "),a("p",[t._v("A : Seleksi terdiri dari 2 tahapan yaitu seleksi administrasi dan interview.")]),t._v(" "),a("strong",[t._v("Q : Apa saja tahap syarat administrasi untuk seleksi Calon Penerima Beasiswa?")]),t._v(" "),a("p",[t._v("A : Team Recruitment akan melakukan screening dari CV, Essay, Transkrip Nilai dan data kondisi finansial keluarga yang didukung dengan data berupa slip gaji orang tua dan atau rekening listrik. Apabila tidak ada slip gaji maka dilengkapi juga essay mengenai kondisi finansial keluarga.")]),t._v(" "),a("strong",[t._v("Q : Berapa jumlah Penerima Beasiswa ?")]),t._v(" "),a("p",[t._v("Jumlah mahasiswa yang akan menerima beasiswa akan disesuaikan dengan hasil proses seleksi. SEED Scholarship memiliki kuota penerima beasiswa hingga 10 awardee")]),t._v(" "),a("strong",[t._v("Q : Berapa jumlah besaran beasiswa diberikan?")]),t._v(" "),a("p",[t._v("A : Besaran beasiswa yang diberikan oleh SEEDS adalah sebesar Rp 3.600.000,- untuk satu semester.")]),t._v(" "),a("strong",[t._v("Q : Kapan beasiswa diberikan kepada Penerima Beasiswa?")]),t._v(" "),a("p",[t._v("A : Beasiswa akan diberikan pada bulan pertama atau paling lambat bulan kedua dari awal semester berjalan")])])],1)}),[],!1,null,null,null).exports},data:function(){return{isClosed:!0,isDisabled:!1,periodOptions:[],departmentOptions:[],errors:{name:"",year:"",phone:"",email:"",period_id:"",department_id:"",initial:"",password:""},input:{name:"",year:"",phone:"",period_id:null,department_id:null,email:"",password:"",password_confirmation:""}}},created:function(){this.getPeriod(),this.getDepartment()},computed:{maxYear:function(){return(new Date).getFullYear()-1},minYear:function(){return(new Date).getFullYear()-7},loaded:function(){return!(!this.periodOptions||!this.departmentOptions)},stateName:function(){return"no-error"==this.errors.name||!this.errors.name&&null},stateEmail:function(){return"no-error"==this.errors.email||!this.errors.email&&null},statePhone:function(){return"no-error"==this.errors.phone||!this.errors.phone&&null},statePeriod:function(){return"no-error"==this.errors.period_id||!this.errors.period_id&&null},stateYear:function(){return"no-error"==this.errors.year||!this.errors.year&&null},stateInitial:function(){return"no-error"==this.errors.initial||!this.errors.initial&&null},statePassword:function(){return"no-error"==this.errors.password||!this.errors.password&&null},stateDepartment:function(){return"no-error"==this.errors.department_id||!this.errors.department_id&&null}},methods:{getPeriod:function(){var t=this;axios.get("api/period").then((function(e){e.data.forEach((function(t){t.value=t.id,t.text="Seedscholarship #".concat(t.period," - Year ").concat(t.year),delete t.id,delete t.period,delete t.year})),t.periodOptions=e.data})).catch((function(t){}))},getDepartment:function(){var t=this;axios.get("api/college-department").then((function(e){e.data.forEach((function(t){t.value=t.id,t.text=t.department,delete t.id,delete t.department,delete t.awardees_count})),t.departmentOptions=e.data})).catch((function(t){}))},register:function(){var t=this;this.isDisabled=!0,axios.post("api/auth/awardee/register",this.input).then((function(e){t.$snotify.success("New Awardee Registered","SUCCESS"),t.input.name="",t.input.period_id=null,t.input.department_id=null,t.input.email="",t.input.password="",t.input.password_confirmation="",t.isDisabled=!1,t.$router.replace({name:"RegistrationUpload",query:{id:e.data.id,email:e.data.email,registration_code:e.data.registration_code,period_id:e.data.period_id}})})).catch((function(e){t.$snotify.error(e.response.data.message,"ERROR"),t.isDisabled=!1;var a=e.response.data.errors;t.errors.name=a.name?a.name[0]:"no-error",t.errors.email=a.email?a.email[0]:"no-error",t.errors.phone=a.phone?a.phone[0]:"no-error",t.errors.year=a.year?a.year[0]:"no-error",t.errors.period_id=a.period_id?a.period_id[0]:"no-error",t.errors.department_id=a.department_id?a.department_id[0]:"no-error",t.errors.password=a.password?a.password[0]:"no-error"}))}}},s=Object(n.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app flex-row align-items-center"},[a("loading",{staticClass:"text-center",attrs:{active:t.isDisabled,"can-cancel":!1,opacity:.9,height:60,loader:"dots",transition:"fade","background-color":"rgba(0,0,0,.85)",color:"rgba(255,255,255,.9)","is-full-page":!0}},[a("div",{staticClass:"text-center",staticStyle:{color:"rgba(255,255,255,.9)"},attrs:{slot:"after"},slot:"after"},[t._v("Mohon Tunggu...")])]),t._v(" "),t.isClosed?a("div",{staticClass:"container"},[a("b-row",{staticClass:"justify-content-center"},[a("b-col",{attrs:{sm:"8"}},[a("div",{staticClass:"text-center"},[a("img",{staticStyle:{"max-height":"150px"},attrs:{src:"/images/Seedlogo2.png",alt:""}})]),t._v(" "),a("header",{staticClass:"text-center my-2",attrs:{id:"header"}},[a("h1",[a("strong",[t._v("PENDAFTARAN DITUTUP")])])]),t._v(" "),a("div",{staticClass:"text-center"},[a("p",[t._v("Silahkan mencoba dilain kesempatan.")])])])],1)],1):t._e(),t._v(" "),t.isClosed?t._e():a("div",{directives:[{name:"show",rawName:"v-show",value:t.loaded,expression:"loaded"}],staticClass:"container"},[a("b-row",{staticClass:"justify-content-center"},[a("b-col",{attrs:{lg:"6",md:"8"}},[a("b-card",{staticClass:"mx-4",attrs:{"no-body":""}},[a("form",{staticClass:"card-body p-4",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.register(e)}}},[a("h1",[t._v("Awardee Registration")]),t._v(" "),a("b-row",{staticClass:"form-group"},[a("b-col",{attrs:{sm:"12"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.name,state:t.stateName}},[a("b-input-group",[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-user"})])],1),t._v(" "),a("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"text",placeholder:"Full Name",state:t.stateName},model:{value:t.input.name,callback:function(e){t.$set(t.input,"name",e)},expression:"input.name"}})],1)],1)],1),t._v(" "),a("b-col",{attrs:{sm:"12"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.email,state:t.stateEmail}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[t._v("@")])],1),t._v(" "),a("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"text",placeholder:"Active Email",state:t.stateEmail},model:{value:t.input.email,callback:function(e){t.$set(t.input,"email",e)},expression:"input.email"}})],1)],1)],1),t._v(" "),a("b-col",{attrs:{sm:"6"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.year,state:t.stateYear}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-calendar"})])],1),t._v(" "),a("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"number",min:t.minYear,max:t.maxYear,placeholder:"Year (Angkatan)",state:t.stateYear},model:{value:t.input.year,callback:function(e){t.$set(t.input,"year",e)},expression:"input.year"}})],1)],1)],1),t._v(" "),a("b-col",{attrs:{sm:"6"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.phone,state:t.statePhone}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-phone"})])],1),t._v(" "),a("b-input",{staticClass:"form-control",attrs:{autocomplete:"off",type:"number",placeholder:"Phone Number",state:t.statePhone},model:{value:t.input.phone,callback:function(e){t.$set(t.input,"phone",e)},expression:"input.phone"}})],1)],1)],1),t._v(" "),a("b-col",{attrs:{sm:"12"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.department_id,state:t.stateDepartment}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-list"})])],1),t._v(" "),a("b-form-select",{attrs:{plain:"",id:"department",options:t.departmentOptions,state:t.stateDepartment},model:{value:t.input.department_id,callback:function(e){t.$set(t.input,"department_id",e)},expression:"input.department_id"}},[a("template",{slot:"first"},[a("option",{attrs:{disabled:""},domProps:{value:null}},[t._v("-- Please select field of study --")])])],2)],1)],1)],1),t._v(" "),a("b-col",{attrs:{sm:"12"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.period_id,state:t.statePeriod}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-list"})])],1),t._v(" "),a("b-form-select",{attrs:{plain:"",id:"period",options:t.periodOptions,state:t.statePeriod},model:{value:t.input.period_id,callback:function(e){t.$set(t.input,"period_id",e)},expression:"input.period_id"}},[a("template",{slot:"first"},[a("option",{attrs:{disabled:""},domProps:{value:null}},[t._v("-- Please select period --")])])],2)],1)],1)],1)],1),t._v(" "),a("b-button",{attrs:{disabled:t.isDisabled,type:"submit",variant:"success",block:""}},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.isDisabled,expression:"isDisabled"}],staticClass:"fa fa-spinner fa-spin"}),t._v("\n              Submit")])],1)])],1)],1)],1),t._v(" "),a("faq-modal")],1)}),[],!1,null,null,null);e.default=s.exports},"8+KV":function(t,e,a){"use strict";var r=a("XKFU"),n=a("CkkT")(0),i=a("LyE8")([].forEach,!0);r(r.P+r.F*!i,"Array",{forEach:function(t){return n(this,t,arguments[1])}})},Afnz:function(t,e,a){"use strict";var r=a("LQAc"),n=a("XKFU"),i=a("KroJ"),s=a("Mukb"),o=a("hPIQ"),u=a("QaDb"),l=a("fyDq"),p=a("OP3Y"),d=a("K0xU")("iterator"),c=!([].keys&&"next"in[].keys()),m=function(){return this};t.exports=function(t,e,a,f,v,h,b){u(a,e,f);var g,_,k,y=function(t){if(!c&&t in A)return A[t];switch(t){case"keys":case"values":return function(){return new a(this,t)}}return function(){return new a(this,t)}},w=e+" Iterator",x="values"==v,C=!1,A=t.prototype,S=A[d]||A["@@iterator"]||v&&A[v],P=S||y(v),T=v?x?y("entries"):P:void 0,D="Array"==e&&A.entries||S;if(D&&(k=p(D.call(new t)))!==Object.prototype&&k.next&&(l(k,w,!0),r||"function"==typeof k[d]||s(k,d,m)),x&&S&&"values"!==S.name&&(C=!0,P=function(){return S.call(this)}),r&&!b||!c&&!C&&A[d]||s(A,d,P),o[e]=P,o[w]=m,v)if(g={values:x?P:y("values"),keys:h?P:y("keys"),entries:T},b)for(_ in g)_ in A||i(A,_,g[_]);else n(n.P+n.F*(c||C),e,g);return g}},DVgA:function(t,e,a){var r=a("zhAb"),n=a("4R4u");t.exports=Object.keys||function(t){return r(t,n)}},FJW5:function(t,e,a){var r=a("hswa"),n=a("y3w9"),i=a("DVgA");t.exports=a("nh4g")?Object.defineProperties:function(t,e){n(t);for(var a,s=i(e),o=s.length,u=0;o>u;)r.f(t,a=s[u++],e[a]);return t}},Kuth:function(t,e,a){var r=a("y3w9"),n=a("FJW5"),i=a("4R4u"),s=a("YTvA")("IE_PROTO"),o=function(){},u=function(){var t,e=a("Iw71")("iframe"),r=i.length;for(e.style.display="none",a("+rLv").appendChild(e),e.src="javascript:",(t=e.contentWindow.document).open(),t.write("<script>document.F=Object<\/script>"),t.close(),u=t.F;r--;)delete u.prototype[i[r]];return u()};t.exports=Object.create||function(t,e){var a;return null!==t?(o.prototype=r(t),a=new o,o.prototype=null,a[s]=t):a=u(),void 0===e?a:n(a,e)}},OP3Y:function(t,e,a){var r=a("aagx"),n=a("S/j/"),i=a("YTvA")("IE_PROTO"),s=Object.prototype;t.exports=Object.getPrototypeOf||function(t){return t=n(t),r(t,i)?t[i]:"function"==typeof t.constructor&&t instanceof t.constructor?t.constructor.prototype:t instanceof Object?s:null}},QaDb:function(t,e,a){"use strict";var r=a("Kuth"),n=a("RjD/"),i=a("fyDq"),s={};a("Mukb")(s,a("K0xU")("iterator"),(function(){return this})),t.exports=function(t,e,a){t.prototype=r(s,{next:n(1,a)}),i(t,e+" Iterator")}},YTvA:function(t,e,a){var r=a("VTer")("keys"),n=a("ylqs");t.exports=function(t){return r[t]||(r[t]=n(t))}},aCFj:function(t,e,a){var r=a("Ymqv"),n=a("vhPU");t.exports=function(t){return r(n(t))}},"d/Gc":function(t,e,a){var r=a("RYi7"),n=Math.max,i=Math.min;t.exports=function(t,e){return(t=r(t))<0?n(t+e,0):i(t,e)}},fyDq:function(t,e,a){var r=a("hswa").f,n=a("aagx"),i=a("K0xU")("toStringTag");t.exports=function(t,e,a){t&&!n(t=a?t:t.prototype,i)&&r(t,i,{configurable:!0,value:e})}},hPIQ:function(t,e){t.exports={}},nGyu:function(t,e,a){var r=a("K0xU")("unscopables"),n=Array.prototype;null==n[r]&&a("Mukb")(n,r,{}),t.exports=function(t){n[r][t]=!0}},rGqo:function(t,e,a){for(var r=a("yt8O"),n=a("DVgA"),i=a("KroJ"),s=a("dyZX"),o=a("Mukb"),u=a("hPIQ"),l=a("K0xU"),p=l("iterator"),d=l("toStringTag"),c=u.Array,m={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},f=n(m),v=0;v<f.length;v++){var h,b=f[v],g=m[b],_=s[b],k=_&&_.prototype;if(k&&(k[p]||o(k,p,c),k[d]||o(k,d,b),u[b]=c,g))for(h in r)k[h]||i(k,h,r[h],!0)}},w2a5:function(t,e,a){var r=a("aCFj"),n=a("ne8i"),i=a("d/Gc");t.exports=function(t){return function(e,a,s){var o,u=r(e),l=n(u.length),p=i(s,l);if(t&&a!=a){for(;l>p;)if((o=u[p++])!=o)return!0}else for(;l>p;p++)if((t||p in u)&&u[p]===a)return t||p||0;return!t&&-1}}},yt8O:function(t,e,a){"use strict";var r=a("nGyu"),n=a("1TsA"),i=a("hPIQ"),s=a("aCFj");t.exports=a("Afnz")(Array,"Array",(function(t,e){this._t=s(t),this._i=0,this._k=e}),(function(){var t=this._t,e=this._k,a=this._i++;return!t||a>=t.length?(this._t=void 0,n(1)):n(0,"keys"==e?a:"values"==e?t[a]:[a,t[a]])}),"values"),i.Arguments=i.Array,r("keys"),r("values"),r("entries")},zhAb:function(t,e,a){var r=a("aagx"),n=a("aCFj"),i=a("w2a5")(!1),s=a("YTvA")("IE_PROTO");t.exports=function(t,e){var a,o=n(t),u=0,l=[];for(a in o)a!=s&&r(o,a)&&l.push(a);for(;e.length>u;)r(o,a=e[u++])&&(~i(l,a)||l.push(a));return l}}}]);