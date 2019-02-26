(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{457:function(t,e,a){"use strict";a.r(e);var r=a(127),o=a.n(r),i=(a(268),a(310)),n=a.n(i),s=(a(329),{name:"DonationConfirmation",components:{flatPickr:n.a},data:function(){return{confirmationFormSent:!1,uploadPercentage:0,isDisabled:!1,loaded:!1,authorized:!1,file:[],configCalendar:{dateFormat:"d-M-y"},input:{trx_date:null,amount:""},errors:{trx_date:null,amount:"",file:null}}},created:function(){this.getAuthorized()},computed:{stateTrxDate:function(){return"no-error"==this.errors.trx_date||!this.errors.trx_date&&null},stateAmount:function(){return"no-error"==this.errors.amount||!this.errors.amount&&null},stateFile:function(){return"no-error"==this.errors.file||!this.errors.file&&null}},methods:{onFileChange:function(t){var e=t.target.files[0];if(console.log(e),e.size>2097152)return t.preventDefault(),void(this.file=[])},getAuthorized:function(){var t=this;axios.get("api/donor-transaction/confirmation/authorized?id=".concat(this.$route.query.id,"&year=").concat(this.$route.query.year,"&email=").concat(this.$route.query.email,"&donation_token=").concat(this.$route.query.donation_token)).then(function(e){console.log(e.data),t.loaded=!0,t.authorized=!0}).catch(function(e){console.log(e),t.loaded=!0,t.authorized=!1})},sendConfirmationForm:function(){var t=this;this.isDisabled=!0;var e=new FormData;e.append("file",this.file),axios.post("api/donor-transaction/confirmation",e,{params:{id:this.$route.query.id,year:this.$route.query.year,donation_token:this.$route.query.donation_token,trx_date:this.input.trx_date,amount:this.input.amount},headers:{"Content-Type":"multipart/form-data"},onUploadProgress:function(t){this.uploadPercentage=o()(Math.round(100*t.loaded/t.total))}.bind(this)}).then(function(e){console.log(e.data),t.$snotify.success("Confirmation Sent","SUCCESS"),t.isDisabled=!1,t.confirmationFormSent=!0}).catch(function(e){console.log(e),t.$snotify.error(e.response.data.message,"ERROR"),t.isDisabled=!1;var a=e.response.data.errors;t.errors.trx_date=a.trx_date?a.trx_date[0]:"no-error",t.errors.amount=a.amount?a.amount[0]:"no-error",t.errors.file=a.file?a.file[0]:"no-error"})}}}),l=a(0),u=Object(l.a)(s,function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app flex-row align-items-center"},[a("loading",{staticClass:"text-center",attrs:{active:!t.loaded,"can-cancel":!1,opacity:.9,height:60,loader:"dots",transition:"fade","background-color":"rgba(0,0,0,.85)",color:"rgba(255,255,255,.9)","is-full-page":!0}},[a("div",{staticClass:"text-center",staticStyle:{color:"rgba(255,255,255,.9)"},attrs:{slot:"after"},slot:"after"},[t._v("Mohon Tunggu...")])]),t._v(" "),t.loaded?a("b-container",{attrs:{fluid:""}},[a("b-row",{staticClass:"justify-content-center"},[t.authorized?t._e():a("b-col",{attrs:{sm:"6"}},[a("b-alert",{attrs:{show:"",variant:"danger"}},[t._v("YOU ARE NOT ALLOWED TO ACCESS THIS PAGE.\n        ")])],1),t._v(" "),t.confirmationFormSent?a("b-col",{attrs:{sm:"8"}},[a("header",{staticClass:"text-center",attrs:{id:"header"}},[a("h1",[a("strong",[t._v("TERIMA KASIH")])])]),t._v(" "),a("div",{staticClass:"text-center"},[a("i",{staticClass:"fa fa-heart display-1",staticStyle:{color:"red"},attrs:{id:"checkmark"}}),t._v(" "),a("p",[t._v("Terima kasih telah melakukan donasi untuk SEED Scholarship. Tim kami akan melakukan verifikasi dan\n            segera mengirimkan bukti penerimaan donasi.")])])]):t._e(),t._v(" "),t.authorized&&!t.confirmationFormSent?a("b-col",{attrs:{md:"8",lg:"6"}},[a("b-card",{staticClass:"mx-4",attrs:{"no-body":""}},[a("form",{staticClass:"card-body p-4",attrs:{autocomplete:"off"},on:{submit:function(e){return e.preventDefault(),t.sendConfirmationForm(e)}}},[a("h2",[t._v("KONFIRMASI DONASI")]),t._v(" "),a("p",{staticClass:"text-muted"},[t._v("Silahkan mengisi form berikut untuk mengkonfirmasi donasi anda. ")]),t._v(" "),a("b-row",{staticClass:"form-group"},[a("b-col",{attrs:{lg:"6"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.trx_date,state:t.stateTrxDate}},[a("b-input-group",[a("b-input-group-prepend",[a("b-input-group-text",[a("i",{staticClass:"icon-calendar"})])],1),t._v(" "),a("flat-pickr",{directives:[{name:"b-tooltip",rawName:"v-b-tooltip.hover",modifiers:{hover:!0}}],staticClass:"form-control",class:{"is-invalid":0==t.stateTrxDate,"is-valid":1==t.stateTrxDate},staticStyle:{"background-color":"white"},attrs:{allowInput:t.isDisabled,placeholder:"Tanggal Transaksi",id:"date",title:"Click To Edit",config:t.configCalendar},model:{value:t.input.trx_date,callback:function(e){t.$set(t.input,"trx_date",e)},expression:"input.trx_date"}})],1)],1)],1),t._v(" "),a("b-col",{attrs:{lg:"6"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.amount,state:t.stateAmount}},[a("b-input-group",{},[a("b-input-group-prepend",[a("b-input-group-text",[t._v("Rp")])],1),t._v(" "),a("b-input",{staticClass:"form-control",attrs:{disabled:t.isDisabled,autocomplete:"off",type:"number",min:"0",placeholder:"Jumlah Donasi",state:t.stateAmount},model:{value:t.input.amount,callback:function(e){t.$set(t.input,"amount",e)},expression:"input.amount"}})],1)],1)],1),t._v(" "),a("b-col",{attrs:{lg:"12"}},[a("b-form-group",{attrs:{"invalid-feedback":t.errors.file,state:t.stateFile,description:"File jpeg/png/pdf (max: 1MB)"}},[a("b-form-file",{ref:"upload",attrs:{disabled:t.isDisabled,accept:"image/jpeg, image/png, image/gif, application/pdf",state:t.stateFile,placeholder:"Bukti Transfer."},on:{change:t.onFileChange},model:{value:t.file,callback:function(e){t.file=e},expression:"file"}}),t._v(" "),a("b-progress",{directives:[{name:"show",rawName:"v-show",value:0!==t.uploadPercentage,expression:"uploadPercentage !== 0"}],attrs:{height:"5px",value:t.uploadPercentage,variant:"success"}})],1)],1)],1),t._v(" "),a("b-button",{attrs:{disabled:t.isDisabled,type:"submit",variant:"success",block:""}},[a("i",{directives:[{name:"show",rawName:"v-show",value:t.isDisabled,expression:"isDisabled"}],staticClass:"fa fa-spinner fa-spin"}),t._v("\n              Submit")])],1)])],1):t._e()],1)],1):t._e()],1)},[],!1,null,null,null);e.default=u.exports}}]);