(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{TOes:function(s,t,e){"use strict";e.r(t);e("pIFo");var o={name:"AuthPasswordReset",data:function(){return{isDisabled:!1,loaded:!1,hasAuthorize:!1,errors:{password:""},input:{token:"",email:"",password:"",password_confirmation:""}}},created:function(){this.checkHasAuthorize()},computed:{statePassword:function(){return"no-error"==this.errors.password||!this.errors.password&&null}},methods:{reset:function(){var s=this;this.errors.password=null,this.isDisabled=!0,axios.post("api/reset/password",this.input).then((function(t){s.$snotify.success(t.data.status,"SUCCESS"),s.input.password="",s.input.password_confirmation="",setTimeout((function(){s.$router.replace("/login")}),1e3)})).catch((function(t){if(s.isDisabled=!1,422==t.response.status){var e=t.response.data.errors;s.errors.password=e.password?e.password[0]:"no-error",s.$snotify.error(e.password[0],"ERROR")}else s.$snotify.error(t.response.data.status,"ERROR")}))},checkHasAuthorize:function(){var s=this,t=this.$route.query.token,e=this.$route.query.email;axios.get("api/reset/password?email=".concat(e,"&token=").concat(t)).then((function(o){s.input.token=t,s.input.email=e,s.hasAuthorize=!0,s.loaded=!0})).catch((function(t){s.loaded=!0}))}}},a=e("KHd+"),r=Object(a.a)(o,(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("div",{directives:[{name:"show",rawName:"v-show",value:this.loaded,expression:"this.loaded"}],staticClass:"app flex-row align-items-center"},[e("div",{staticClass:"container"},[e("b-row",{staticClass:"justify-content-center"},[e("b-col",{attrs:{md:"6",sm:"8"}},[this.hasAuthorize?s._e():e("b-card",[e("div",[s._v("\n            You don't have authorization to access this page or your token already expired\n            "),e("hr"),s._v("\n            If you want to reset your password, please contact your super admin to send link reset password to your\n            email.\n          ")])]),s._v(" "),this.hasAuthorize?e("b-card",{staticClass:"mx-4"},[e("form",{staticClass:"card-body p-4",on:{submit:function(t){return t.preventDefault(),s.reset(t)}}},[e("h1",[s._v("RESET PASSWORD")]),s._v(" "),e("p",{staticClass:"text-muted"},[s._v("Reset password for your account")]),s._v(" "),e("b-form-group",{attrs:{"invalid-feedback":s.errors.password,state:s.statePassword}},[e("b-input-group",{},[e("b-input-group-prepend",[e("b-input-group-text",[e("i",{staticClass:"icon-lock"})])],1),s._v(" "),e("b-input",{staticClass:"form-control",attrs:{type:"password",placeholder:"New Password",state:s.statePassword},model:{value:s.input.password,callback:function(t){s.$set(s.input,"password",t)},expression:"input.password"}})],1)],1),s._v(" "),e("b-form-group",{attrs:{"invalid-feedback":s.errors.password,state:s.statePassword}},[e("b-input-group",{staticClass:"mb-1"},[e("b-input-group-prepend",[e("b-input-group-text",[e("i",{staticClass:"icon-lock"})])],1),s._v(" "),e("b-input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Repeat New Password",state:s.statePassword},model:{value:s.input.password_confirmation,callback:function(t){s.$set(s.input,"password_confirmation",t)},expression:"input.password_confirmation"}})],1)],1),s._v(" "),e("b-button",{attrs:{disabled:s.isDisabled,type:"submit",variant:"success",block:""}},[s._v("Submit")])],1)]):s._e()],1)],1)],1)])}),[],!1,null,null,null);t.default=r.exports}}]);