(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"0Wax":function(t,s,e){"use strict";e.r(s);var a=e("eVuF"),i=e.n(a),n={name:"AuthForgotPassword",data:function(){return{isDisabled:!1,loaded:!1,input:{email:""},errors:{email:""}}},created:function(){},computed:{stateEmail:function(){return"no-error"==this.errors.email||!this.errors.email&&null}},methods:{sendForgotPasswordEmail:function(){var t=this;this.isDisabled=!0;var s=this;this.$snotify.async("Creating Link for Reseting Password","Please Wait",(function(){return new i.a((function(e,a){return axios.post("api/forgot/password",{email:t.input.email}).then((function(t){s.isDisabled=!1,s.input.email="",e({title:"Success!!!",body:t.data.status,config:{closeOnClick:!0}})})).catch((function(t){s.isDisabled=!1,a({title:"Error!!!",body:t.response.data.status,config:{closeOnClick:!0}})}))}))}))}}},r=e("KHd+"),o=Object(r.a)(n,(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"app flex-row align-items-center"},[e("div",{staticClass:"container"},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{md:"6",sm:"8"}},[e("b-card",{staticClass:"mx-4"},[e("form",{staticClass:"card-body p-4",on:{submit:function(s){return s.preventDefault(),t.sendForgotPasswordEmail()}}},[e("h1",[t._v("FORGOT PASSWORD")]),t._v(" "),e("p",{staticClass:"text-muted"},[t._v("Send link to reset password")]),t._v(" "),e("b-form-group",{attrs:{"invalid-feedback":t.errors.email,state:t.stateEmail}},[e("b-input-group",{},[e("b-input-group-prepend",[e("b-input-group-text",[e("i",{staticClass:"icon-envelope"})])],1),t._v(" "),e("b-input",{staticClass:"form-control",attrs:{type:"email",placeholder:"Your Email",state:t.stateEmail},model:{value:t.input.email,callback:function(s){t.$set(t.input,"email",s)},expression:"input.email"}})],1)],1),t._v(" "),e("b-button",{attrs:{disabled:t.isDisabled,type:"submit",variant:"success",block:""}},[t._v("Send Link")])],1)])],1)],1)],1)])}),[],!1,null,null,null);s.default=o.exports}}]);