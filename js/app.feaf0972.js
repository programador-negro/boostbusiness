(function(e){function t(t){for(var n,r,l=t[0],c=t[1],i=t[2],s=0,d=[];s<l.length;s++)r=l[s],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);b&&b(t);while(d.length)d.shift()();return u.push.apply(u,i||[]),a()}function a(){for(var e,t=0;t<u.length;t++){for(var a=u[t],n=!0,r=1;r<a.length;r++){var l=a[r];0!==o[l]&&(n=!1)}n&&(u.splice(t--,1),e=c(c.s=a[0]))}return e}var n={},r={app:0},o={app:0},u=[];function l(e){return c.p+"js/"+({about:"about"}[e]||e)+"."+{about:"8a4a9b91","chunk-3c706e8f":"c35a85fa","chunk-7fe7b864":"7c3b671a"}[e]+".js"}function c(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,c),a.l=!0,a.exports}c.e=function(e){var t=[],a={"chunk-3c706e8f":1,"chunk-7fe7b864":1};r[e]?t.push(r[e]):0!==r[e]&&a[e]&&t.push(r[e]=new Promise((function(t,a){for(var n="css/"+({about:"about"}[e]||e)+"."+{about:"31d6cfe0","chunk-3c706e8f":"542ab5db","chunk-7fe7b864":"d624571b"}[e]+".css",o=c.p+n,u=document.getElementsByTagName("link"),l=0;l<u.length;l++){var i=u[l],s=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(s===n||s===o))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){i=d[l],s=i.getAttribute("data-href");if(s===n||s===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var n=t&&t.target&&t.target.src||o,u=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=n,delete r[e],b.parentNode.removeChild(b),a(u)},b.href=o;var v=document.getElementsByTagName("head")[0];v.appendChild(b)})).then((function(){r[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var u=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=u);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=l(e);var d=new Error;i=function(t){s.onerror=s.onload=null,clearTimeout(b);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+r+")",d.name="ChunkLoadError",d.type=n,d.request=r,a[1](d)}o[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:s})}),12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(t)},c.m=e,c.c=n,c.d=function(e,t,a){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(c.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(a,n,function(t){return e[t]}.bind(null,n));return a},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=s;u.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0f98":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("7a23"),r=Object(n["e"])("div",{id:"nav"},null,-1);function o(e,t){var a=Object(n["v"])("router-view");return Object(n["p"])(),Object(n["d"])(n["a"],null,[r,Object(n["g"])(a)],64)}a("acaf");var u=a("6b0d"),l=a.n(u);const c={},i=l()(c,[["render",o]]);var s=i,d=(a("d3b7"),a("3ca3"),a("ddb0"),a("6c02")),b=a("cf05"),v=a.n(b),p={class:"home"},f=Object(n["e"])("img",{alt:"Vue logo",src:v.a},null,-1);function h(e,t,a,r,o,u){var l=Object(n["v"])("HelloWorld");return Object(n["p"])(),Object(n["d"])("div",p,[f,Object(n["g"])(l,{msg:"Welcome to Your Vue.js App"})])}var g={class:"hello"},m=Object(n["f"])('<p data-v-b9167eee> For a guide and recipes on how to configure / customize this project,<br data-v-b9167eee> check out the <a href="https://cli.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-cli documentation</a>. </p><h3 data-v-b9167eee>Installed CLI Plugins</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener" data-v-b9167eee>babel</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener" data-v-b9167eee>eslint</a></li></ul><h3 data-v-b9167eee>Essential Links</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Core Docs</a></li><li data-v-b9167eee><a href="https://forum.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Forum</a></li><li data-v-b9167eee><a href="https://chat.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>Community Chat</a></li><li data-v-b9167eee><a href="https://twitter.com/vuejs" target="_blank" rel="noopener" data-v-b9167eee>Twitter</a></li><li data-v-b9167eee><a href="https://news.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>News</a></li></ul><h3 data-v-b9167eee>Ecosystem</h3><ul data-v-b9167eee><li data-v-b9167eee><a href="https://router.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-router</a></li><li data-v-b9167eee><a href="https://vuex.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vuex</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener" data-v-b9167eee>vue-devtools</a></li><li data-v-b9167eee><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener" data-v-b9167eee>vue-loader</a></li><li data-v-b9167eee><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener" data-v-b9167eee>awesome-vue</a></li></ul>',7);function j(e,t,a,r,o,u){return Object(n["p"])(),Object(n["d"])("div",g,[Object(n["e"])("h1",null,Object(n["x"])(a.msg),1),m])}var k={name:"HelloWorld",props:{msg:String}};a("8497");const y=l()(k,[["render",j],["__scopeId","data-v-b9167eee"]]);var O=y,_={name:"Home",components:{HelloWorld:O}};const w=l()(_,[["render",h]]);var x=w,C=[{path:"/",name:"landing",component:function(){return a.e("chunk-3c706e8f").then(a.bind(null,"5912"))}},{path:"/2",name:"landing2",component:function(){return a.e("chunk-7fe7b864").then(a.bind(null,"24d6"))}},{path:"/home",name:"Home",component:x},{path:"/about",name:"About",component:function(){return a.e("about").then(a.bind(null,"f820"))}}],E=Object(d["a"])({history:Object(d["b"])("/"),routes:C}),P=E;Object(n["c"])(s).use(P).mount("#app")},8497:function(e,t,a){"use strict";a("c45a")},acaf:function(e,t,a){"use strict";a("0f98")},c45a:function(e,t,a){},cf05:function(e,t,a){e.exports=a.p+"img/logo.82b9c7a5.png"}});
//# sourceMappingURL=app.feaf0972.js.map