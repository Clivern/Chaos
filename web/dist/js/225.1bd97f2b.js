"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[225],{225:function(e,t,s){s.r(t),s.d(t,{default:function(){return u}});var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"columns is-desktop is-centered"},[s("div",{staticClass:"column is-4"},[s("b-field",{attrs:{label:"API Key"}},[s("b-input",{attrs:{placeholder:"76a97318-2560-4451-a90d-5ba63126d055",rounded:""},model:{value:e.form.api_key,callback:function(t){e.$set(e.form,"api_key",t)},expression:"form.api_key"}})],1),s("div",{staticClass:"field"},[s("p",{staticClass:"control"},[s("b-button",{attrs:{type:"submit is-danger is-light",disabled:e.form.button_disabled},on:{click:e.loginEvent}},[e._v("Login")])],1)])],1)])},i=[],o={name:"LoginPage",data(){return{form:{api_key:"",button_disabled:!1}}},methods:{loginEvent(){this.form.button_disabled=!0,this.$store.dispatch("auth/authAction",this.form.api_key).then((()=>{this.$buefy.toast.open({message:"You logged in successfully",type:"is-success"}),localStorage.setItem("x_api_key",this.form.api_key),this.$router.push("/")}),(e=>{e.response.data.errorMessage?this.$buefy.toast.open({message:e.response.data.errorMessage,type:"is-danger"}):this.$buefy.toast.open({message:"Oops! invalid api key",type:"is-danger"}),this.form.button_disabled=!1}))}},mounted(){}},n=o,r=s(1001),l=(0,r.Z)(n,a,i,!1,null,null,null),u=l.exports}}]);
//# sourceMappingURL=225.1bd97f2b.js.map