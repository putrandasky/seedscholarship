(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{451:function(s,t,o){"use strict";o.r(t);o(79);var e={name:"AuthPasswordReset",data:function(){return{isDisabled:!1,loaded:!1,hasAuthorize:!1,errors:{password:""},input:{token:"",email:"",password:"",password_confirmation:""}}},created:function(){this.checkHasAuthorize()},computed:{statePassword:function(){return"no-error"==this.errors.password||!this.errors.password&&null}},methods:{reset:function(){var s=this;this.errors.password=null,this.isDisabled=!0,axios.post("api/reset/password",this.input).then(function(t){s.$snotify.success(t.data.status,"SUCCESS"),s.input.password="",s.input.password_confirmation="",setTimeout(function(){s.$router.replace("/login")},1e3)}).catch(function(t){if(s.isDisabled=!1,422==t.response.status){var o=t.response.data.errors;s.errors.password=o.password?o.password[0]:"no-error",s.$snotify.error(o.password[0],"ERROR")}else s.$snotify.error(t.response.data.status,"ERROR")})},checkHasAuthorize:function(){var s=this,t=this.$route.query.token,o=this.$route.query.email;axios.get("api/reset/password?email=".concat(o,"&token=").concat(t)).then(function(e){s.input.token=t,s.input.email=o,s.hasAuthorize=!0,s.loaded=!0,console.log(e.data)}).catch(function(t){console.log(t),s.loaded=!0})}}},a=o(0),r=Object(a.a)(e,function(){var s=this,t=s.$createElement,o=s._self._c||t;return o("div",{directives:[{name:"show",rawName:"v-show",value:this.loaded,expression:"this.loaded"}],staticClass:"app flex-row align-items-center"},[o("div",{staticClass:"container"},[o("b-row",{staticClass:"justify-content-center"},[o("b-col",{attrs:{md:"6",sm:"8"}},[this.hasAuthorize?s._e():o("b-card",[o("div",[s._v("\n            You don't have authorization to access this page or your token already expired\n            "),o("hr"),s._v("\n            If you want to reset your password, please contact your super admin to send link reset password to your\n            email.\n          ")])]),s._v(" "),this.hasAuthorize?o("b-card",{staticClass:"mx-4"},[o("form",{staticClass:"card-body p-4",on:{submit:function(t){return t.preventDefault(),s.reset(t)}}},[o("h1",[s._v("RESET PASSWORD")]),s._v(" "),o("p",{staticClass:"text-muted"},[s._v("Reset password for your account")]),s._v(" "),o("b-form-group",{attrs:{"invalid-feedback":s.errors.password,state:s.statePassword}},[o("b-input-group",{},[o("b-input-group-prepend",[o("b-input-group-text",[o("i",{staticClass:"icon-lock"})])],1),s._v(" "),o("b-input",{staticClass:"form-control",attrs:{type:"password",placeholder:"New Password",state:s.statePassword},model:{value:s.input.password,callback:function(t){s.$set(s.input,"password",t)},expression:"input.password"}})],1)],1),s._v(" "),o("b-form-group",{attrs:{"invalid-feedback":s.errors.password,state:s.statePassword}},[o("b-input-group",{staticClass:"mb-1"},[o("b-input-group-prepend",[o("b-input-group-text",[o("i",{staticClass:"icon-lock"})])],1),s._v(" "),o("b-input",{staticClass:"form-control",attrs:{type:"password",placeholder:"Repeat New Password",state:s.statePassword},model:{value:s.input.password_confirmation,callback:function(t){s.$set(s.input,"password_confirmation",t)},expression:"input.password_confirmation"}})],1)],1),s._v(" "),o("b-button",{attrs:{disabled:s.isDisabled,type:"submit",variant:"success",block:""}},[s._v("Submit")])],1)]):s._e()],1)],1)],1)])},[],!1,null,null,null);t.default=r.exports}}]);