(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{431:function(t,s,a){"use strict";a.r(s);a(129),a(134),a(135),a(136);var i={name:"AssignmentDetailSubmit",data:function(){return{data:[{id:1,name:"Radityo Putra",title:"Lorem ipsum dolor",date:"22-july-2019"},{id:1,name:"Radityo Putra",title:"Lorem ipsum dolor",date:"22-july-2019"},{id:1,name:"Radityo Putra",title:"Lorem ipsum dolor",date:"22-july-2019"},{id:1,name:"Radityo Putra",title:"Lorem ipsum dolor",date:"22-july-2019"}]}},created:function(){},methods:{handleSubmitAssignmentButton:function(){this.$router.push({name:"SubmissionNew",params:{assignmentId:this.$route.params.assignmentId}})}}},e=a(0),n={name:"AssignmentDetail",components:{SubmissionList:Object(e.a)(i,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("b-card",[a("div",{staticClass:"text-center",attrs:{slot:"header"},slot:"header"},[a("strong",[t._v("SUBMISSION LIST")])]),t._v(" "),a("div",{staticClass:"text-right mb-3"},[a("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:t.handleSubmitAssignmentButton}},[t._v("Submit Assignment")])],1),t._v(" "),a("b-row",t._l(t.data,function(s){return a("b-col",{key:s.id,attrs:{sm:"6",md:"4"}},[a("b-card",[a("h5",{staticClass:"card-title border-bottom pb-2"},[t._v("Title: "+t._s(s.title))]),t._v(" "),a("p",{staticClass:"card-text"},[t._v("\n                    Submitted by : "+t._s(s.name)+" "),a("br"),t._v(" Date : "+t._s(s.date)+"\n                ")]),t._v(" "),a("div",{staticClass:"text-right"},[a("b-button",{attrs:{size:"sm",variant:"secondary"}},[t._v("Detail")])],1)])],1)}),1)],1)},[],!1,null,null,null).exports},data:function(){return{}},created:function(){},methods:{}},l=Object(e.a)(n,function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("b-card",[a("div",{staticClass:"text-center",attrs:{slot:"header"},slot:"header"},[a("strong",[t._v("ASSIGNMENT DETAIL")])]),t._v(" "),a("b-container",{attrs:{fluid:""}},[a("dl",{staticClass:"row"},[a("dt",{staticClass:"col-sm-2"},[t._v("Title")]),t._v(" "),a("dd",{staticClass:"col-sm-10"},[a("span",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. ")])])]),t._v(" "),a("dl",{staticClass:"row"},[a("dt",{staticClass:"col-sm-2"},[t._v("Closing Date")]),t._v(" "),a("dd",{staticClass:"col-sm-10"},[a("span",[t._v("22-July-2019")])])]),t._v(" "),a("dl",{staticClass:"row"},[a("dt",{staticClass:"col-sm-2"},[t._v("Created Date")]),t._v(" "),a("dd",{staticClass:"col-sm-10"},[a("span",[t._v("22-July-2019")])])]),t._v(" "),a("dl",{staticClass:"row"},[a("dt",{staticClass:"col-sm-2"},[t._v("Status")]),t._v(" "),a("dd",{staticClass:"col-sm-10"},[a("span",[t._v("Active")])])]),t._v(" "),a("dl",{staticClass:"row"},[a("dt",{staticClass:"col-sm-12"},[t._v("Description")]),t._v(" "),a("dd",{staticClass:"col-sm-12"},[a("span",[t._v("Lorem ipsum dolor sit amet consectetur adipisicing elit. Id dolorum libero incidunt minima\n                        aperiam nobis temporibus delectus non? Tempora nulla nisi voluptatem est suscipit repudiandae,\n                        illo ipsum praesentium nemo doloribus?")])])])])],1),t._v(" "),a("submission-list")],1)},[],!1,null,null,null);s.default=l.exports}}]);