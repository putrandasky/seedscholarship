(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{410:function(t,e,i){var n=i(415);"string"==typeof n&&(n=[[t.i,n,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};i(4)(n,o);n.locals&&(t.exports=n.locals)},414:function(t,e,i){"use strict";var n=i(410);i.n(n).a},415:function(t,e,i){(t.exports=i(3)(!1)).push([t.i,"\n.pell-content[data-v-640b2d3b] {\n  height: unset;\n  min-height: 50px;\n}\n",""])},430:function(t,e,i){"use strict";i.r(e);var n={options:[{name:"bold",icon:'<i class="fa fa-bold"></i>'},{name:"italic",icon:'<i class="fa fa-italic"></i>'},{name:"underline",icon:'<i class="fa fa-underline"></i>'},{name:"strikethrough",icon:'<i class="fa fa-strikethrough"></i>'},{name:"backColor",icon:'<div style="background-color:yellow;"><i class="fa fa-font"></i></div>',title:"Highlight Color",result:function(){return window.pell.exec("backColor","yellow")}},{name:"foreColor",icon:'<div style="color:red;"><i class="fa fa-font"></i></div>',title:"Red Font",result:function(){return window.pell.exec("foreColor","red")}},{name:"olist",icon:'<i class="fa fa-list-ol"></i>'},{name:"ulist",icon:'<i class="fa fa-list-ul"></i>'},"heading1","heading2",{name:"Clear Formatting",title:"Clear Formatting",icon:'<i class="fa fa-eraser"></i>',result:function(){return window.pell.exec("removeFormat")}}],classes:{actionbar:"pell-actionbar",button:"pell-button",content:"pell-content form-control",selected:"pell-button-selected"}},o={name:"SubmissionNew",data:function(){return{editorOptions:n.options,editorClasses:n.classes,input:{title:"",description:""},errors:{item:"",description:""}}},created:function(){},methods:{}},s=(i(414),i(0)),a=Object(s.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("b-card",[i("div",{staticClass:"text-center",attrs:{slot:"header"},slot:"header"},[i("strong",[t._v("SUBMIT ASSIGNMENT FOR LOREM IPSUM")])]),t._v(" "),i("b-form-group",{attrs:{label:"Title (Required)","label-for":"title","invalid-feedback":t.errors.title,state:t.stateTitle}},[i("b-form-input",{attrs:{required:"",state:t.stateTitle,id:"title",type:"text",placeholder:"Input title of your submission for this assignment"},model:{value:t.input.title,callback:function(e){t.$set(t.input,"title",e)},expression:"input.title"}})],1),t._v(" "),i("b-form-group",{attrs:{label:"Description (Required but not mandatory)","label-for":"description"}},[i("vue-pell-editor",{ref:"description",attrs:{actions:t.editorOptions,content:t.input.description,placeholder:"Input description of your submission for this assignment","style-with-css":!0,classes:t.editorClasses,"default-paragraph-separator":"div"},model:{value:t.input.description,callback:function(e){t.$set(t.input,"description",e)},expression:"input.description"}})],1)],1)},[],!1,null,"640b2d3b",null);e.default=a.exports}}]);