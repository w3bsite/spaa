(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[3],{"0292":function(t,e,s){"use strict";s.r(e);var o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"q-ma-md"},[s("q-card-section",{staticClass:"q-pa-md"},[s("q-chip",{attrs:{size:"16px"}},[s("q-avatar",{attrs:{color:"red",icon:"library_books","text-color":"white"}}),t._v("\n      "+t._s(this.url)+"\n    ")],1)],1),t.er?s("q-card-section",[s("q-bar",[t._v(t._s(t.er))])],1):t._e(),s("div",{staticClass:"row"},[s("q-card",{staticClass:"col-xs-12 q-mx-auto",attrs:{bordered:""}},[s("div",{staticClass:"q-pa-md row"},[s("q-table",{staticClass:"my-sticky-header-table col-sm-12 col-xs-12 col-md-10 q-mx-auto",attrs:{title:"Treats",data:t.posts,columns:t.columns,"row-key":"name",flat:"",bordered:""}})],1)])],1)],1)},l=[],a={data(){return{dat:null,coo:[],posts:[],s:null,er:null,login:!1,hid:!1,url:"/posts",columns:[{name:"id",required:!0,align:"left",label:"ID",align:"left",field:"id",format:t=>`${t}`,sortable:!0},{name:"title",align:"left",label:"Title",align:"left",field:"title",sortable:!0},{name:"content",align:"left",label:"Content",align:"left",field:"content",format:t=>""+(t.substring(0,30)+"...."),sortable:!0}]}},created(){this.coo=this.$q.cookies.getAll(),this.gt()},mounted(){},computed:{content:function(){return sufix(content)}},filters:{sufix(t){return t.substring(0,30)+"...."}},methods:{met:function(t){var e=this.$refs[t];e.offsetTop;console.log(t),console.log(e),e.scrollIntoView({behavior:"smooth"})},al(t){alert(t)},del:function(t,e){this.$axios.delete(this.url+"/"+t,{headers:{Authorization:"Bearer "+this.coo.jwt}}).then((()=>{console.log(e),e=!1,console.log(1)})).then((()=>{})).catch((t=>(this.login=!0,this.er=t)))},gt:function(){this.$axios.get(this.url,{headers:{Authorization:"Bearer "+this.coo.jwt}}).then((t=>{console.log(t);const e=t.data,s=[];for(const o in e)if(e.hasOwnProperty.call(e,o)){const t=e[o];s.push(t),this.posts!==s&&(this.posts=s)}})).catch((t=>{this.er=t})),setTimeout((()=>{}))}}},i=a,n=(s("9f9e"),s("2877")),r=Object(n["a"])(i,o,l,!1,null,null,null);e["default"]=r.exports},"57d0":function(t,e,s){},"9f9e":function(t,e,s){"use strict";s("57d0")}}]);