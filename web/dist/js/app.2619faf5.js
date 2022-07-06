(function(){"use strict";var e={9774:function(e,t,n){var r=n(8935),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[n("b-icon",{attrs:{pack:"fas",icon:"home",size:"is-small"}}),e._v(" Home")],1),e.logged?[e._v(" | "),n("router-link",{attrs:{to:"/hosts"}},[n("b-icon",{attrs:{pack:"fas",icon:"server",size:"is-small"}}),e._v(" Users")],1),e._v(" | "),n("router-link",{attrs:{to:"/settings"}},[n("b-icon",{attrs:{pack:"fas",icon:"cog",size:"is-small"}}),e._v(" Settings")],1),e._v(" | "),n("a",{attrs:{href:"#"},on:{click:e.logout}},[n("b-icon",{attrs:{pack:"fas",icon:"sign-out-alt",size:"is-small"}}),e._v(" Logout")],1)]:[e._v(" | "),n("router-link",{attrs:{to:"/login"}},[n("b-icon",{attrs:{pack:"fas",icon:"sign-in-alt",size:"is-small"}}),e._v(" Login")],1)]],2),n("router-view",{on:{"refresh-state":e.refreshState}})],1)},a=[],i={data(){return{logged:null!=localStorage.getItem("user_api_key")&&null!=localStorage.getItem("user_email")}},methods:{logout(){this.logged=!1,localStorage.removeItem("user_api_key"),localStorage.removeItem("user_email"),localStorage.removeItem("user_id"),localStorage.removeItem("user_name"),this.$router.push("/login")},refreshState(){this.logged=null!=localStorage.getItem("user_api_key")&&null!=localStorage.getItem("user_email")}},mounted(){this.logged=null!=localStorage.getItem("user_api_key")&&null!=localStorage.getItem("user_email")}},s=i,u=n(1001),l=(0,u.Z)(s,o,a,!1,null,null,null),c=l.exports,d=n(2809);r.Z.use(d.Z);const g=[{path:"/",name:"Home",component:()=>n.e(78).then(n.bind(n,2078)),meta:{requiresAuth:!1}},{path:"/login",name:"Login",component:()=>n.e(450).then(n.bind(n,9450)),meta:{requiresAuth:!1}},{path:"/users",name:"Users",component:()=>n.e(765).then(n.bind(n,4765)),meta:{requiresAuth:!0}},{path:"/users/:userId",name:"User",component:()=>n.e(538).then(n.bind(n,4538)),meta:{requiresAuth:!0}},{path:"/settings",name:"Settings",component:()=>n.e(959).then(n.bind(n,5959)),meta:{requiresAuth:!0}},{path:"/404",name:"NotFound",component:()=>n.e(965).then(n.bind(n,4965))},{path:"*",redirect:"/404"}],f=new d.Z({routes:g});f.beforeEach(((e,t,n)=>{e.matched.some((e=>e.meta.requiresAuth))?null==localStorage.getItem("user_api_key")&&n({path:"/login",params:{nextUrl:e.fullPath}}):"Login"==e.name&&localStorage.removeItem("user_api_key"),n()}));var m=f,p=n(6166),h=n.n(p),v=n(5564),_=(n(1588),n(4665));const S={getURL(e){let t="";return{NODE_ENV:"production",BASE_URL:"/"}.CHAOS_DASHBOARD_URL&&(t={NODE_ENV:"production",BASE_URL:"/"}.CHAOS_DASHBOARD_URL.replace(/\/$/,"")),t+e},getHeaders(){let e="",t="",n="";return null!=localStorage.getItem("user_api_key")&&(e=localStorage.getItem("user_api_key")),null!=localStorage.getItem("user_email")&&(t=localStorage.getItem("user_email")),null!=localStorage.getItem("user_id")&&(n=localStorage.getItem("user_id")),{crossdomain:!0,headers:{"X-API-Key":e,"X-User-Email":t,"X-User-ID":n,"X-Client-ID":"dashboard","X-Requested-With":"XMLHttpRequest","Content-Type":"application/json"}}},get(e){return h().get(this.getURL(e),this.getHeaders())},delete(e){return h()["delete"](this.getURL(e),this.getHeaders())},post(e,t={}){return h().post(this.getURL(e),t,this.getHeaders())},put(e,t={}){return h().put(this.getURL(e),t,this.getHeaders())}};var b=S;const E=()=>b.get("/_ready"),y=()=>b.get("/_health"),k=()=>({readiness:{},health:{}}),T={getBackendReadiness:e=>e.readiness,getBackendHealth:e=>e.health},A={async fetchBackendReadiness({commit:e}){const t=await E();return e("SET_BACKEND_READINESS",t.data),t},async fetchBackendHealth({commit:e}){const t=await y();return e("SET_BACKEND_HEALTH",t.data),t}},I={SET_BACKEND_READINESS(e,t){e.readiness=t},SET_BACKEND_HEALTH(e,t){e.health=t}};var R={namespaced:!0,state:k,getters:T,actions:A,mutations:I};const w=e=>b.put("/api/v1/settings",e),L=()=>b.get("/api/v1/settings"),U=()=>({getSettingsResult:{},updateSettingsResult:{}}),N={getSettingsResult:e=>e.getSettingsResult,getUpdateSettingsResult:e=>e.updateSettingsResult},C={async getSettingsAction(e){const t=await L();return e.commit("SET_GET_SETTINGS_RESULT",t.data),t},async updateSettingsAction(e,t){const n=await w(t);return e.commit("SET_UPDATE_SETTINGS_RESULT",n.data),n}},O={SET_GET_SETTINGS_RESULT(e,t){e.getSettingsResult=t},SET_UPDATE_SETTINGS_RESULT(e,t){e.updateSettingsResult=t}};var H={namespaced:!0,state:U,getters:N,actions:C,mutations:O};r.Z.use(_.ZP);var D=new _.ZP.Store({modules:{backend:R,settings:H}});r.Z.use(_.ZP),r.Z.use(v.ZP,{defaultIconPack:"fas"}),r.Z.config.productionTip=!1,r.Z.prototype.$http=h(),new r.Z({store:D,router:m,render:e=>e(c)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={exports:{}};return e[r](a,a.exports,n),a.exports}n.m=e,function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(c=0;c<e.length;c++){r=e[c][0],o=e[c][1],a=e[c][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(c--,1);var l=o();void 0!==l&&(t=l)}}return t}a=a||0;for(var c=e.length;c>0&&e[c-1][2]>a;c--)e[c]=e[c-1];e[c]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{78:"71c54835",450:"6093537b",538:"0762266c",765:"2741ada2",959:"0edc89b7",965:"e8eac4a9"}[e]+".js"}}(),function(){n.miniCssF=function(e){return"css/"+e+".b2f96d67.css"}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="web:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,u;if(void 0!==a)for(var l=document.getElementsByTagName("script"),c=0;c<l.length;c++){var d=l[c];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var g=function(t,n){s.onerror=s.onload=null,clearTimeout(f);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},f=setTimeout(g.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=g.bind(null,s.onerror),s.onload=g.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e=function(e,t,n,r){var o=document.createElement("link");o.rel="stylesheet",o.type="text/css";var a=function(a){if(o.onerror=o.onload=null,"load"===a.type)n();else{var i=a&&("load"===a.type?"missing":a.type),s=a&&a.target&&a.target.href||t,u=new Error("Loading CSS chunk "+e+" failed.\n("+s+")");u.code="CSS_CHUNK_LOAD_FAILED",u.type=i,u.request=s,o.parentNode.removeChild(o),r(u)}};return o.onerror=o.onload=a,o.href=t,document.head.appendChild(o),o},t=function(e,t){for(var n=document.getElementsByTagName("link"),r=0;r<n.length;r++){var o=n[r],a=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(a===e||a===t))return o}var i=document.getElementsByTagName("style");for(r=0;r<i.length;r++){o=i[r],a=o.getAttribute("data-href");if(a===e||a===t)return o}},r=function(r){return new Promise((function(o,a){var i=n.miniCssF(r),s=n.p+i;if(t(i,s))return o();e(r,s,o,a)}))},o={143:0};n.f.miniCss=function(e,t){var n={78:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=r(e).then((function(){o[e]=0}),(function(t){throw delete o[e],t})))}}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],u=r[2],l=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var c=u(n)}for(t&&t(r);l<i.length;l++)a=i[l],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(c)},r=self["webpackChunkweb"]=self["webpackChunkweb"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(9774)}));r=n.O(r)})();
//# sourceMappingURL=app.2619faf5.js.map