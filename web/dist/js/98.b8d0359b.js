"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[98],{5098:function(e,t,s){s.r(t),s.d(t,{default:function(){return c}});var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("br"),a("br"),a("br"),a("img",{attrs:{alt:"logo",src:s(6949),width:"200"}}),a("div",{staticClass:"hello"},[a("br"),a("br"),a("strong",[e._v("Welcome to Gunner")]),e._m(0),a("br"),a("small",[a("b-icon",{attrs:{pack:"fas",icon:"broadcast-tower",size:"is-small"}}),a("strong",{class:{"has-text-info":"down"!=e.backend_status,"has-text-danger":"down"==e.backend_status}},[e._v(" - Backend is "+e._s(e.backend_status))]),a("br"),a("br"),e._v(" Made with "),e._m(1),e._v(" by "),a("a",{attrs:{href:"https://github.com/clivern",target:"_blank",rel:"noopener"}},[e._v("Clivern")]),a("br")],1)])])},n=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v(" If you have any suggestions, bug reports, or annoyances "),s("br"),e._v("please report them to our "),s("a",{attrs:{href:"https://github.com/clivern/gunner/issues",target:"_blank",rel:"noopener"}},[e._v("issue tracker")]),e._v(". ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("span",{staticClass:"icon has-text-danger"},[s("i",{staticClass:"fas fa-heart"})])}],r={name:"HomePage",data(){return{backend_status:"down",loader:{isFullPage:!0,ref:null}}},methods:{loading(){this.loader.ref=this.$buefy.loading.open({container:this.loader.isFullPage?null:this.$refs.element.$el})}},mounted(){this.$emit("refresh-state"),this.loading(),this.$store.dispatch("backend/fetchBackendReadiness").then((()=>{this.backend_status=this.$store.getters["backend/getBackendReadiness"].status,this.loader.ref.close()}),(e=>{this.$buefy.toast.open({message:e,type:"is-danger is-light"}),this.loader.ref.close()}))}},i=r,o=s(1001),l=(0,o.Z)(i,a,n,!1,null,"249fdbc6",null),c=l.exports},6949:function(e,t,s){e.exports=s.p+"img/logo.68de9725.png"}}]);
//# sourceMappingURL=98.b8d0359b.js.map