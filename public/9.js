(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"2Spj":function(e,t,a){var i=a("XKFU");i(i.P,"Function",{bind:a("8MEG")})},"5pKv":function(e,t){e.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},"6BQ9":function(e,t,a){e.exports=a("uekQ")},"8MEG":function(e,t,a){"use strict";var i=a("2OiF"),n=a("0/R4"),o=a("MfQN"),r=[].slice,s={},l=function(e,t,a){if(!(t in s)){for(var i=[],n=0;n<t;n++)i[n]="a["+n+"]";s[t]=Function("F,a","return new F("+i.join(",")+")")}return s[t](e,a)};e.exports=Function.bind||function(e){var t=i(this),a=r.call(arguments,1),s=function(){var i=a.concat(r.call(arguments));return this instanceof s?l(t,i.length,i):o(t,i,e)};return n(t.prototype)&&(s.prototype=t.prototype),s}},MfQN:function(e,t){e.exports=function(e,t,a){var i=void 0===a;switch(t.length){case 0:return i?e():e.call(a);case 1:return i?e(t[0]):e.call(a,t[0]);case 2:return i?e(t[0],t[1]):e.call(a,t[0],t[1]);case 3:return i?e(t[0],t[1],t[2]):e.call(a,t[0],t[1],t[2]);case 4:return i?e(t[0],t[1],t[2],t[3]):e.call(a,t[0],t[1],t[2],t[3])}return e.apply(a,t)}},XWtR:function(e,t,a){var i=a("5T2Y").parseInt,n=a("oc46").trim,o=a("5pKv"),r=/^[-+]?0[xX]/;e.exports=8!==i(o+"08")||22!==i(o+"0x16")?function(e,t){var a=n(String(e),3);return i(a,t>>>0||(r.test(a)?16:10))}:i},dEVD:function(e,t,a){var i=a("Y7ZC"),n=a("XWtR");i(i.G+i.F*(parseInt!=n),{parseInt:n})},lUpz:function(e,t,a){"use strict";a.r(t);var i=a("6BQ9"),n=a.n(i),o=(a("2Spj"),a("f3/d"),a("vYYK")),r={name:"RegistrationUploadCard",props:["title","folder"],data:function(){var e;return e={confirmModal:!1,confirmModalTitle:"",confirmModalBody:"",confirmModalState:"",confirmModalTempValue:""},Object(o.a)(e,"confirmModal",!1),Object(o.a)(e,"file",[]),Object(o.a)(e,"uploadPercentage",0),Object(o.a)(e,"new_file",""),Object(o.a)(e,"old_file",""),Object(o.a)(e,"data",{name:"",size:"",date:null}),e},created:function(){this.checkFile()},computed:{information:function(){return"cv"==this.folder?"Riwayat hidup dengan format bebas dengan informasi wajib berupa data diri dan riwayat pendidikan":"essay"==this.folder?"Esai dengan topik : Mengapa saya pantas mendapatkan beasiswa SEED (300-500 kata)":"slip"==this.folder?"Salinan slip gaji orangtua dan/atau rekening listrik":"siakng"==this.folder?"Print Out Ringkasan / Riwayat Akademis  SIAK NG":""}},methods:{trigerConfirmModal:function(e,t,a){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";this.confirmModalTitle=e,this.confirmModalBody=t,this.confirmModal=!0,this.confirmModalState=a,this.confirmModalTempValue=i},onFileChange:function(e){var t=e.target.files[0];if(t.size>1024e3||!/\.(jpeg|jpe|jpg|png|pdf)$/i.test(t.name))return e.preventDefault(),void this.$refs.upload.reset();this.new_file=t.name},checkFile:function(){var e=this;axios.get("api/registration-awardee/upload?folder=".concat(this.folder,"&id=").concat(this.$route.query.id,"&period_id=").concat(this.$route.query.period_id,"&registration_code=").concat(this.$route.query.registration_code)).then((function(t){e.data=t.data})).catch((function(e){}))},openFile:function(){window.open("/api/registration-awardee/upload/".concat(this.$route.query.id,"?folder=").concat(this.folder,"&period_id=").concat(this.$route.query.period_id,"&filename=").concat(this.data.name,"&registration_code=").concat(this.$route.query.registration_code),this.data.name,"window,width=".concat(screen.availWidth,",height=").concat(screen.availHeight,",resizeable,left=200,top=100,directories=0,titlebar=0,toolbar=0,location=0,status=0,menubar=0"))},uploadFile:function(){var e=this,t=new FormData,a=this;t.append("file",this.file),axios.post("api/registration-awardee/upload",t,{params:{id:this.$route.query.id,folder:this.folder,registration_code:this.$route.query.registration_code,period_id:this.$route.query.period_id},headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(e){this.uploadPercentage=n()(Math.round(100*e.loaded/e.total))}.bind(this)}).then((function(t){a.uploadPercentage=0,a.old_file=a.new_file,a.new_file=null,a.checkFile(),e.$snotify.success("".concat(e.title," Succesfully Uploaded"),"UPLOADED")})).catch((function(t){a.uploadPercentage=0,a.old_file=a.new_file,a.new_file=null,e.$refs.upload.reset(),e.$snotify.danger("Ooops! Somethings Wrong, Try Again Later","ERROR")}))},deleteFile:function(){var e=this,t=this;axios.delete("api/registration-awardee/upload/".concat(this.$route.query.id,"?folder=").concat(this.folder,"&filename=").concat(this.data.name,"&period_id=").concat(this.$route.query.period_id,"&registration_code=").concat(this.$route.query.registration_code)).then((function(a){t.old_file=null,t.data.name="",t.data.size="",t.data.date=null,e.$snotify.success("".concat(e.title," Succesfully Deleted"),"DELETED"),t.file=[]})).catch((function(t){e.$snotify.danger("Ooops! Somethings Wrong, Try Again Later","ERROR")}))}}},s=a("KHd+"),l={name:"RegistrationUpload",components:{UploadCard:Object(s.a)(r,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-card",{attrs:{"no-body":""}},[a("div",{staticClass:"text-center",attrs:{slot:"header"},slot:"header"},[a("strong",[e._v(e._s(e.title)+"  "),a("i",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",value:e.information,expression:"information",modifiers:{hover:!0}}],staticClass:"fa fa-info-circle"})])]),e._v(" "),e.data.name?e._e():a("b-card-body",{attrs:{"body-bg-variant":"danger"}},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h5",{staticClass:"mb-0 pt-5 pb-5",staticStyle:{"align-self":"center"}},[e._v("No File Uploaded")]),e._v(" "),a("i",{staticClass:"fa fa-close fa-2x",staticStyle:{"align-self":"center"}})]),e._v(" "),a("b-progress",{directives:[{name:"show",rawName:"v-show",value:e.uploadPercentage>0,expression:"uploadPercentage>0 "}],attrs:{height:"5px",value:e.uploadPercentage,variant:"success"}})],1),e._v(" "),e.data.name?a("b-card-body",{attrs:{"body-bg-variant":"success"}},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h5",{staticClass:"mb-0",staticStyle:{"align-self":"center"}},[e._v("File Uploaded")]),e._v(" "),a("i",{staticClass:"fa fa-check fa-2x",staticStyle:{"align-self":"center"}})])]):e._e(),e._v(" "),e.data.name?a("b-list-group",{attrs:{flush:""}},[a("b-list-group-item",[a("strong",[e._v("Name: ")]),e._v("\n      "+e._s(e.data.name)+"\n    ")]),e._v(" "),a("b-list-group-item",[a("strong",[e._v("Size: ")]),e._v("\n      "+e._s(e._f("formatSize")(e.data.size))+"\n    ")]),e._v(" "),a("b-list-group-item",[a("strong",[e._v("Uploaded: ")]),e._v("\n      "+e._s(e.data.date)+"\n    ")])],1):e._e(),e._v(" "),a("b-card-body",{directives:[{name:"show",rawName:"v-show",value:e.uploadPercentage>0,expression:"uploadPercentage>0 "}],attrs:{"body-bg-variant":"info"}},[a("div",{staticClass:"d-flex w-100 justify-content-between"},[a("h5",{staticClass:"mb-0",staticStyle:{"align-self":"center"}},[e._v("Uploading")]),e._v(" "),a("i",{staticClass:"fa fa-spinner fa-spin fa-2x",staticStyle:{"align-self":"center"}})])]),e._v(" "),e.data.name||e.uploadPercentage>0?e._e():a("b-card-body",[a("b-form-file",{ref:"upload",attrs:{accept:"image/jpeg, image/png, image/gif, application/pdf",placeholder:"Choose a file..."},on:{change:e.onFileChange},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1),e._v(" "),e.data.name||e.uploadPercentage>0?e._e():a("b-button",{staticClass:"mt-0",staticStyle:{"border-top-left-radius":"unset","border-top-right-radius":"unset"},attrs:{disabled:0==e.file.length,block:"",fluid:"",variant:"success"},on:{click:e.uploadFile}},[a("i",{staticClass:"fa fa-paper-plane"}),e._v("\n    Upload\n    File")]),e._v(" "),e.data.name?a("b-button",{staticStyle:{"border-radius":"unset"},attrs:{block:"",fluid:"",variant:"primary"},on:{click:e.openFile}},[a("i",{staticClass:"fa fa-search"}),e._v("\n    See File\n  ")]):e._e(),e._v(" "),e.data.name?a("b-button",{staticClass:"mt-0",staticStyle:{"border-top-left-radius":"unset","border-top-right-radius":"unset"},attrs:{block:"",fluid:"",variant:"danger"},on:{click:function(t){return e.trigerConfirmModal("Delete "+e.title,"Are you sure want to delete this file?","deleteFile")}}},[a("i",{staticClass:"fa fa-trash"}),e._v(" Delete File\n  ")]):e._e(),e._v(" "),a("b-modal",{attrs:{"no-close-on-esc":!0,"hide-header-close":!0,"no-close-on-backdrop":!0,title:e.confirmModalTitle},on:{ok:e.deleteFile},model:{value:e.confirmModal,callback:function(t){e.confirmModal=t},expression:"confirmModal"}},[e._v("\n    "+e._s(e.confirmModalBody)+"\n  ")])],1)}),[],!1,null,null,null).exports},data:function(){return{loaded:!1,authorized:!1}},created:function(){this.checkAuthorization()},methods:{checkAuthorization:function(){var e=this;axios.get("api/registration-awardee/upload/authorized?id=".concat(this.$route.query.id,"&registration_code=").concat(this.$route.query.registration_code,"&email=").concat(this.$route.query.email,"&period_id=").concat(this.$route.query.period_id)).then((function(t){e.loaded=!0,e.authorized=!0})).catch((function(t){e.loaded=!0,e.authorized=!1}))}}},c=Object(s.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"show",rawName:"v-show",value:e.loaded,expression:"loaded"}],staticClass:"app flex-row align-items-center"},[e.authorized?e._e():a("b-container",[a("b-alert",{attrs:{show:"",variant:"danger"}},[e._v("YOU ARE NOT ALLOWED TO ACCESS THIS PAGE.\n    ")])],1),e._v(" "),e.authorized?a("div",{staticClass:"container"},[a("b-alert",{attrs:{show:"",variant:"primary"}},[e._v("Please upload this file below in "),a("strong",[e._v("pdf/jpeg/png")]),e._v(" file with max size\n      "),a("strong",[e._v("1mb")]),e._v(".\n      "),a("hr"),e._v(" "),a("small",[e._v("Nb : Make sure you bookmark this page, if you need to update the file, you can back to this page later. or check your Inbox / Spam folder of your email")])]),e._v(" "),a("b-row",[a("b-col",{attrs:{lg:"3",sm:"6"}},[a("slide-y-up-transition",[a("upload-card",{attrs:{title:"Curriculum Vitae",folder:"cv"}})],1)],1),e._v(" "),a("b-col",{attrs:{lg:"3",sm:"6"}},[a("slide-y-up-transition",[a("upload-card",{attrs:{title:"Essay",folder:"essay"}})],1)],1),e._v(" "),a("b-col",{attrs:{lg:"3",sm:"6"}},[a("slide-y-up-transition",[a("upload-card",{attrs:{title:"Slip Gaji/Rekening Listrik",folder:"slip"}})],1)],1),e._v(" "),a("b-col",{attrs:{lg:"3",sm:"6"}},[a("slide-y-up-transition",[a("upload-card",{attrs:{title:"SiakNG",folder:"siakng"}})],1)],1)],1)],1):e._e()],1)}),[],!1,null,null,null);t.default=c.exports},oc46:function(e,t,a){var i=a("Y7ZC"),n=a("Jes0"),o=a("KUxP"),r=a("5pKv"),s="["+r+"]",l=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),d=function(e,t,a){var n={},s=o((function(){return!!r[e]()||"​"!="​"[e]()})),l=n[e]=s?t(u):r[e];a&&(n[a]=l),i(i.P+i.F*s,"String",n)},u=d.trim=function(e,t){return e=String(n(e)),1&t&&(e=e.replace(l,"")),2&t&&(e=e.replace(c,"")),e};e.exports=d},uekQ:function(e,t,a){a("dEVD"),e.exports=a("WEpk").parseInt}}]);