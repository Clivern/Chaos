"use strict";(self["webpackChunkweb"]=self["webpackChunkweb"]||[]).push([[325],{2325:function(e,t,s){s.r(t),s.d(t,{default:function(){return d}});var a=function(){var e=this,t=e._self._c;return t("section",[t("div",{staticClass:"columns is-desktop is-centered"},[t("div",{staticClass:"column"}),t("div",{staticClass:"column is-three-quarters"},[t("b-table",{ref:"table",attrs:{data:e.data,paginated:"","per-page":"20","opened-detailed":e.defaultOpenedDetails,detailed:"","detail-key":"id","detail-transition":e.transitionName,"show-detail-icon":e.showDetailIcon,"aria-next-label":"Next page","aria-previous-label":"Previous page","aria-page-label":"Page","aria-current-label":"Current page"},scopedSlots:e._u([{key:"detail",fn:function(s){return[t("code",[e._v(e._s(s.row.value))])]}}])},[t("b-table-column",{attrs:{field:"id",label:"ID",centered:""},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",{staticClass:"tag is-warning is-light"},[e._v(e._s(s.row.id))])]}}])}),t("b-table-column",{attrs:{field:"name",label:"Name",centered:""},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",{staticClass:"tag is-success is-light"},[e._v(" "+e._s(s.row.name)+" ")])]}}])}),t("b-table-column",{attrs:{field:"startAt",label:"Start at",centered:""},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",{staticClass:"tag is-danger is-light"},[e._v(" "+e._s(new Date(s.row.startAt).toLocaleString())+" "+e._s(Intl.DateTimeFormat().resolvedOptions().timeZone)+" ")])]}}])}),t("b-table-column",{attrs:{field:"endAt",label:"End at",centered:""},scopedSlots:e._u([{key:"default",fn:function(s){return[t("span",{staticClass:"tag is-danger is-light"},[e._v(" "+e._s(new Date(s.row.endAt).toLocaleString())+" "+e._s(Intl.DateTimeFormat().resolvedOptions().timeZone)+" ")])]}}])}),t("b-table-column",{attrs:{label:"Actions",centered:""},scopedSlots:e._u([{key:"default",fn:function(s){return[t("b-button",{attrs:{size:"is-small",type:"is-link is-danger is-light"},on:{click:function(t){return e.deleteRole(s.row.id)}}},[e._v("Delete")])]}}])}),t("td",{attrs:{slot:"empty",colspan:"5"},slot:"empty"},[e._v("No records found.")])],1)],1),t("div",{staticClass:"column"})])])},l=[],i={name:"RolesPage",data(){return{data:[],defaultOpenedDetails:[1],showDetailIcon:!0,useTransition:!1,loader:{isFullPage:!0,ref:null}}},computed:{transitionName(){return this.useTransition?"fade":""}},methods:{loading(){this.loader.ref=this.$buefy.loading.open({container:this.loader.isFullPage?null:this.$refs.element.$el})},loadInitialState(){this.loading(),this.$store.dispatch("role/getRolesAction",{}).then((()=>{let e=this.$store.getters["role/getRoles"];this.data=e||[],this.loader.ref.close()}),(e=>{this.$buefy.toast.open({message:e.response.data.errorMessage,type:"is-danger is-light"}),this.loader.ref.close()}))},deleteRole(e){this.$buefy.dialog.confirm({message:"Are you sure?",onConfirm:()=>{this.$store.dispatch("role/deleteRoleAction",{id:e}).then((()=>{this.$buefy.toast.open({message:"Role delete successfully!",type:"is-success"}),this.loader.ref.close(),this.loadInitialState()}),(e=>{e.response.data.errorMessage?this.$buefy.toast.open({message:e.response.data.errorMessage,type:"is-danger is-light"}):this.$buefy.toast.open({message:"Error status code: "+e.response.status,type:"is-danger is-light"})}))}})}},mounted(){this.loadInitialState()}},n=i,o=s(1001),r=(0,o.Z)(n,a,l,!1,null,null,null),d=r.exports}}]);
//# sourceMappingURL=325.7575fb06.js.map